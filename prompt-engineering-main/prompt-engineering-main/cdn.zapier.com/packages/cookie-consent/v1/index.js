const DEFAULT_DOMAIN_SCRIPT_ID = "c2bc6bc2-2599-4efd-90da-5725af13c244";
const shouldLogAsError = (error) => {
    if (/loading script/i.test(error)) {
        return false;
    }
    if (
        /loading styles/i.test(error) ||
        /failed to fetch/i.test(error) ||
        /attempting to fetch/i.test(error)
    ) {
        return false;
    }
    return true;
};
const buildErrorMessage = (msg = "") => ["cookie-consent", msg].join(" :: ");
const logErrorMessage = (prefix = "", error) => {
    if (shouldLogAsError(error)) {
        console.error(buildErrorMessage(prefix), error);
    } else {
        console.warn(buildErrorMessage(prefix), error);
    }
};
const readCookie = (name = "") =>
    (document.cookie || "").split(/;[\s]*/).reduce((accum, cookie) => {
        const indexOfFirstEq = cookie.indexOf("=");
        const cName = cookie.slice(0, indexOfFirstEq);
        const cValue = cookie.slice(indexOfFirstEq + 1);
        accum[decodeURIComponent(cName)] = decodeURIComponent(cValue);
        return accum;
    }, {})[name];
const trackEvent = (subject = "", properties = {}, options = {}) => {
    fetch(`${options.origin}/api/v4/tracking/event/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            subject: subject,
            properties: {
                identity_id: parseInt(readCookie("zapidentity"), 10),
                absolute_url: location.href,
                referrer: document.referrer,
                ...properties,
            },
        }),
    });
};
const trackBannerShown = (options) => {
    const subject =
        "web_analytics.tracking.cookie_consent.CookieConsentBannerShownEvent";
    trackEvent(subject, {}, options);
};
const trackConsent = (acceptedCategories, options) => {
    const subject =
        "web_analytics.tracking.cookie_consent.CookieConsentAcceptedEvent";
    trackEvent(subject, {
        cookie_consent_accepted: acceptedCategories
    }, options);
    if (acceptedCategories.includes("C0002")) {
        gtag("event", "cookie_consent.CookieConsentAcceptedEvent");
    }
};
const getActiveGroups = () =>
    (OnetrustActiveGroups || "").split(/\s*,\s*/).filter(Boolean);
export const distillCookies = (activeGroups = []) => {
    const mostPermissibleCategory = [...activeGroups].sort().pop();
    document.cookie = [
        `OptanonConsentInSided=${mostPermissibleCategory}`,
        `max-age=${60 * 60 * 24 * 365}`,
        `path=/`,
        "samesite=none",
    ].join(";");
};
export const prepareConsentReactions = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag =
        window.gtag ||
        function gtag() {
            window.dataLayer.push(arguments);
        };
    gtag("set", "developer_id.dNzMyY2", true);
    gtag("consent", "default", {
        ad_storage: "denied",
        analytics_storage: "denied",
        wait_for_update: 5e3,
    });
    window.OptanonWrapper = function OptanonWrapper() {
        const activeGroups = getActiveGroups();
        distillCookies(activeGroups);
        window.dispatchEvent(new CustomEvent("zapier.cookie-consent"));
        gtag("event", "cookie_consent.CookieConsentUpdated");
        gtag("consent", "update", {
            ad_storage: activeGroups.includes("C0004") ? "granted" : "denied",
            analytics_storage: activeGroups.includes("C0002") || activeGroups.includes("C0003") ?
                "granted" :
                "denied",
        });
    };
};
export const attachStyles = async ({
    url: url = ""
} = {}) => {
    try {
        const resp = await fetch(url);
        if (resp.status >= 400) {
            throw new Error("Error loading styles.");
        }
        const styles = await resp.text();
        if (!styles.includes("--cookie-consent")) {
            throw new Error(`Invalid styles from CSS source: ${url}`);
        }
        const style = document.createElement("style");
        style.setAttribute("data-cookie-consent-custom-styles", "");
        style.innerHTML = styles.replace(/;/g, " !important;");
        requestAnimationFrame(function attachStylesInsert() {
            document.head.appendChild(style);
        });
    } catch (e) {
        logErrorMessage("Error injecting styles", e);
    }
};
export const lazilyInjectBannerScript = async ({
    domainScriptId: domainScriptId = DEFAULT_DOMAIN_SCRIPT_ID,
    timeout: timeout = 60 * 1e3,
} = {}) => {
    const script = document.createElement("script");
    script.setAttribute("data-domain-script", domainScriptId);
    script.setAttribute(
        "src",
        "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
    );
    return new Promise(function lazilyInjectBannerScriptInner(resolve, reject) {
        let injectionTimeout;
        const lazilyInjectBannerScriptInsert = () => {
            let intervalId;
            window.removeEventListener(
                "DOMContentLoaded",
                lazilyInjectBannerScriptInsert
            );
            window.removeEventListener("load", lazilyInjectBannerScriptInsert);
            clearTimeout(injectionTimeout);
            setTimeout(function lazilyInjectBannerScriptTimeout() {
                script.addEventListener("error", (e) => {
                    clearInterval(intervalId);
                    reject(new Error(`Error loading script ${e.target.src}`));
                });
                if (!script.parentElement) {
                    document.head.appendChild(script);
                }
                const pollingSelector = "#onetrust-consent-sdk";
                intervalId = setInterval(function lazilyInjectBannerScriptInterval() {
                    if (document.querySelector(pollingSelector)) {
                        resolve();
                        clearInterval(intervalId);
                    }
                }, 250);
                setTimeout(() => {
                    clearInterval(intervalId);
                    reject(new Error(`Could not find ${pollingSelector} in document`));
                }, timeout);
            }, 2e3);
        };
        window.addEventListener("DOMContentLoaded", lazilyInjectBannerScriptInsert);
        window.addEventListener("load", lazilyInjectBannerScriptInsert);
        injectionTimeout = setTimeout(lazilyInjectBannerScriptInsert, 5e3);
    });
};
export const setUpTracking = (options = {}) => {
    const didBannerRender = !!document.querySelector("#onetrust-banner-sdk");
    const isBannerClosed = OneTrust.IsAlertBoxClosed();
    if (didBannerRender && !isBannerClosed) {
        trackBannerShown(options);
    }
    OneTrust.OnConsentChanged(function onConsentChanged() {
        trackConsent(getActiveGroups(), options);
    });
};
export const reorganizeConsent = () => {
    const $ = document.querySelector.bind(document);
    const allowAllCookiesBtn = $(
        "#onetrust-pc-sdk #accept-recommended-btn-handler"
    );
    const savePrefsBtn = $("#onetrust-pc-sdk .save-preference-btn-handler");
    if (allowAllCookiesBtn && savePrefsBtn) {
        savePrefsBtn.parentElement.insertBefore(allowAllCookiesBtn, savePrefsBtn);
    }
};
export const modifyToggleBehavior = () => {
    const $ = document.querySelector.bind(document);
    const analyticsCheckbox = $("#ot-group-id-C0002");
    const marketingCheckbox = $("#ot-group-id-C0004");
    if (analyticsCheckbox && marketingCheckbox) {
        analyticsCheckbox.addEventListener("change", () => {
            if (!analyticsCheckbox.checked) {
                marketingCheckbox.checked = false;
                marketingCheckbox.dispatchEvent(new Event("click"));
            }
        });
        marketingCheckbox.addEventListener("change", () => {
            if (marketingCheckbox.checked) {
                analyticsCheckbox.checked = true;
                analyticsCheckbox.dispatchEvent(new Event("click"));
            }
        });
    }
};
export const engageCookieConsent = async ({
    domainScriptId: domainScriptId = DEFAULT_DOMAIN_SCRIPT_ID,
    trackingOrigin: trackingOrigin = document.location.origin,
} = {}) => {
    try {
        const ownLocation =
            import.meta.url;
        const cssLocation = ownLocation.replace(".js", ".css");
        prepareConsentReactions();
        await Promise.all([
            attachStyles({
                url: cssLocation
            }),
            lazilyInjectBannerScript({
                domainScriptId: domainScriptId
            }),
        ]);
        gtag("event", "cookie_consent.CookieConsentUpdated");
        setUpTracking({
            origin: trackingOrigin
        });
        reorganizeConsent();
        modifyToggleBehavior();
    } catch (e) {
        logErrorMessage("Error launching cookie consent banner.", e);
    }
};