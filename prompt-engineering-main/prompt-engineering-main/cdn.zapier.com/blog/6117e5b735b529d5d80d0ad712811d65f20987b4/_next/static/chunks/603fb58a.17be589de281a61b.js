"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7231], {
        69492: function(e, o, t) {
            t.d(o, {
                WS: function() {
                    return lo
                }
            });
            var n = t(25559),
                i = t(62408),
                r = t(71457),
                a = t(63163),
                s = t(17355),
                l = t(8942),
                c = t(211),
                d = t(71041),
                u = t(4865),
                p = t(58455),
                g = t(22682),
                h = t(98745),
                m = t(68797),
                f = t(4801),
                _ = t(72434),
                b = t(9593),
                v = t(35944),
                w = t(69489),
                S = t(70917),
                y = t(67294),
                k = t(93193),
                T = t(35871),
                C = t(70995),
                I = t(17533),
                x = t(96717),
                O = t(27315),
                N = t(62780),
                E = t(89404),
                Z = t(7182),
                F = t(96486);

            function R(e) {
                return (0, v.tZ)(n.h, {
                    isFullWidth: !0,
                    disabled: e.disabled,
                    id: e.id,
                    children: e.children
                })
            }

            function U(e) {
                let {
                    signupFunnel: o,
                    signupType: t,
                    selectedApis: n
                } = e;
                const i = "undefined" !== typeof window ? window.location.href : "server-side";
                return (0, w.emit)({
                    system_name: "identity",
                    timestamp_ms: (new Date).getTime(),
                    absolute_url: window.location.toString(),
                    referrer: document.referrer,
                    signup_funnel: o,
                    signup_type: t,
                    selected_apis: n instanceof Array ? n.join(",") : void 0,
                    signup_location: i
                }, "web_analytics.tracking.user_interaction.SignupUserInteractionEvent")
            }
            const A = {
                "facebook-sso": "facebook_sso",
                sso: "sso",
                "flab-abs": "flab_abs",
                direct: "direct",
                "flab-sso": "flab_sso",
                "google-one-tap": "google_one_tap",
                "google-sso": "google_sso",
                "microsoft-sso": "microsoft_sso",
                "one-tap": "one_tap"
            };

            function G(e) {
                return A[e]
            }
            const L = ["cancel_called", "browser_not_supported", "loading_timeout", "opt_out_or_no_session", "suppressed_by_user", "auto_cancel", "user_cancel"],
                B = ["dismissed", "display", "skipped"];

            function D(e) {
                let {
                    failure_type: o = null,
                    failure_reason: t = null,
                    message: n = null,
                    action: i
                } = e;
                const r = L.includes(t || "") ? t : null,
                    a = B.includes(o || "") ? o : null;
                return (0, w.emit)({
                    timestamp_ms: (new Date).getTime(),
                    failure_reason: r,
                    failure_type: a,
                    message: n,
                    location: "SignUpSection",
                    release_id: "6117e5b735b529d5d80d0ad712811d65f20987b4",
                    account_id: null,
                    action: i
                }, "web_analytics.tracking.user_interaction.GoogleOneTapErrorEvent")
            }

            function P(e) {
                let {
                    event_action: o,
                    destination_url_address: t,
                    interaction_goal: n,
                    interaction_name: i,
                    custom_tracking_fields: r,
                    experiment_flag: a,
                    experiment_name: s,
                    interaction_raw_text: l,
                    node_zap_id: c,
                    option_selected: d,
                    zap_creation_attempt_id: u,
                    session_id: p,
                    account_id: g,
                    release_id: h,
                    visitor_id: m
                } = e;
                return (0, w.emit)({
                    system_name: "identity",
                    timestamp_ms: (new Date).getTime(),
                    absolute_url: window.location.toString(),
                    referrer: document.referrer,
                    account_id: g,
                    node_zap_id: c,
                    zap_creation_attempt_id: u,
                    release_id: h,
                    experiment_flag: a,
                    experiment_name: s,
                    interaction_name: i,
                    interaction_raw_text: l,
                    interaction_goal: n,
                    option_selected: d,
                    event_action: o,
                    destination_url_address: t,
                    custom_tracking_fields: r,
                    session_id: p,
                    visitor_id: m
                }, "web_analytics.tracking.user_interaction.UserInteractionEvent")
            }
            const M = (0, S.iv)(i.ZT.base, " margin-bottom:24px;text-align:center;", ""),
                j = {
                    name: "1fd7y38",
                    styles: "display:flex;justify-content:center;margin-top:30px"
                },
                X = (0, S.iv)("background:", r.w.white, ";", "");

            function z(e) {
                const {
                    trackEvent: o
                } = (0, T.useTrackingContext)();
                return (0, y.useEffect)((() => {
                    o("signup: captcha rendered"), U({
                        signupFunnel: "signup_captcha_rendered",
                        signupType: "direct"
                    })
                }), []), (0, v.BX)("section", {
                    css: X,
                    "data-testid": "auth-captcha",
                    children: [(0, v.tZ)("div", {
                        css: M,
                        children: "Looks like our robots want to make sure you're not one!"
                    }), (0, v.tZ)(k.Z, {
                        css: j,
                        onChange: e.onCaptchaVerification,
                        onExpired: function() {
                            o("signup: captcha verification failed", {
                                reason: "captcha expired"
                            }), U({
                                signupFunnel: "signup_captcha_verification_failed",
                                signupType: "direct"
                            }), e.onCaptchaExpiration && e.onCaptchaExpiration()
                        },
                        sitekey: e.googleCaptchaSiteKey
                    })]
                })
            }

            function V(e) {
                window.location.href = e
            }
            const Y = "auth_type",
                W = (0, x.Fc)({
                    afterResponse: [x.xh]
                });
            async function K(e) {
                let {
                    attemptStoredAccount: o,
                    email: t
                } = e;
                const n = o ? function() {
                    let e = "";
                    try {
                        e = localStorage.getItem("currentAccountId") || ""
                    } catch (t) {}
                    const o = Number.parseInt(e);
                    return o && Number.isInteger(o) && o > 0 ? o : null
                }() : void 0;
                let i;
                if (i = (await W((0, b.addTruthyParamsToUrl)(_.jk.ACCOUNT_DISCOVERY_URL, {
                        account_id: n,
                        email: t
                    }))).body.account, !i && n) {
                    i = (await W((0, b.addTruthyParamsToUrl)(_.jk.ACCOUNT_DISCOVERY_URL, {
                        email: t
                    }))).body.account
                }
                return i || P({
                    event_action: "open",
                    option_selected: "account_discovery_no_account",
                    interaction_name: "account_discovery_no_account",
                    interaction_goal: "Find discovered account to see if we should redirect to SAML provider"
                }), i && !i.has_saml_sso && P({
                    event_action: "open",
                    option_selected: "account_discovery_no_saml",
                    interaction_name: "account_discovery_no_saml",
                    interaction_goal: "Find discovered account to see if we should redirect to SAML provider"
                }), i && i.has_saml_sso && P({
                    event_action: "open",
                    option_selected: "account_discovery_found_saml",
                    interaction_name: "account_discovery_found_saml",
                    interaction_goal: "Find discovered account to see if we should redirect to SAML provider"
                }), i ? {
                    hasSamlSso: i.has_saml_sso,
                    id: i.id,
                    ssoUrl: i.sso_url
                } : i
            }
            let H;
            ! function(e) {
                e.IS_2FA_REQUIRED = "IS_2FA_REQUIRED", e.IS_BAD_CREDENTIALS = "IS_BAD_CREDENTIALS", e.IS_CAPTCHA_REQUIRED = "IS_CAPTCHA_REQUIRED", e.IS_LOCKED = "IS_LOCKED", e.IS_MISSING_CSRF = "IS_MISSING_CSRF", e.IS_SINGLE_SESSION = "IS_SINGLE_SESSION", e.IS_VALID_LOGIN = "IS_VALID_LOGIN", e.TRYING_TOO_OFTEN = "TRYING_TOO_OFTEN", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
            }(H || (H = {}));
            const q = "Yikes! Something went wrong when trying to sign up. If you keep having trouble, please contact support.";
            let J;
            ! function(e) {
                e.IS_MISSING_CSRF = "IS_MISSING_CSRF", e.IS_VALID_SIGNUP = "IS_VALID_SIGNUP", e.TRYING_TOO_OFTEN = "TRYING_TOO_OFTEN", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
            }(J || (J = {}));
            const Q = {
                captcha_required: "captcha",
                password1: "password"
            };

            function $(e) {
                return {
                    direct: "email",
                    "google-sso": "google",
                    "facebook-sso": "facebook",
                    "microsoft-sso": "microsoft"
                }[e]
            }

            function ee(e) {
                (0, I.w)(Y, e, {
                    category: "essential"
                })
            }
            const oe = {
                    email: "",
                    firstName: "",
                    lastName: "",
                    password: ""
                },
                te = {
                    captcha: !1,
                    email: !1,
                    firstName: !1,
                    lastName: !1,
                    password: !1
                };

            function ne(e) {
                window.location.href = e
            }
            async function ie(e, o, t, n) {
                var i;
                await ce();
                const r = {
                    captcha: e.captcha,
                    email: e.email,
                    first_name: e.firstName,
                    last_name: e.lastName,
                    password: e.password,
                    password1: e.password,
                    selected_apis: t
                };
                e.invitation && (r.invitation = e.invitation);
                const a = await W(_.jk.SIGNUP_API_URL, {
                        method: "POST",
                        body: r
                    }),
                    s = function(e) {
                        const o = {};
                        let t = J.IS_VALID_SIGNUP,
                            n = "";
                        try {
                            var i, r;
                            const a = e.body.errors;
                            if (null !== (i = e.headers) && void 0 !== i && null !== (r = i.get("content-type")) && void 0 !== r && r.includes("application/json") || (o.error = "It looks like you have cookies disabled", t = J.IS_MISSING_CSRF, n = _.jk.COOKIE_ERROR_URL), 429 === e.status && (o.error = "It looks like you are trying too often. If you\u2019re having trouble, please contact support.", t = J.TRYING_TOO_OFTEN), Array.isArray(a) && a.length > 0) {
                                const n = a[0];
                                if (n && "string" === typeof n && (o.error = n, t === J.IS_VALID_SIGNUP && (t = J.UNKNOWN_ERROR)), n && "object" === typeof n && null !== n && void 0 !== n && n.message && (o.error = null === n || void 0 === n ? void 0 : n.message, t === J.IS_VALID_SIGNUP && (t = J.UNKNOWN_ERROR)), a.forEach((e => {
                                        if ("string" === typeof e) return;
                                        const t = null === e || void 0 === e ? void 0 : e.fields;
                                        t && t.forEach((e => {
                                            const t = Q[e.key] || (0, F.camelCase)(e.key);
                                            o[t] = e.message
                                        }))
                                    })), 0 === Object.keys(o).length) throw e
                            }
                        } catch (a) {
                            o.error = q, t === J.IS_VALID_SIGNUP && (t = J.UNKNOWN_ERROR)
                        }
                        return {
                            errors: o,
                            redirectUrl: n,
                            type: t
                        }
                    }(a);
                if (Object.values(s.errors).some((e => null === e || void 0 === e ? void 0 : e.includes("SAML")))) {
                    const o = await K({
                        attemptStoredAccount: !1,
                        email: e.email
                    });
                    if (null !== o && void 0 !== o && o.hasSamlSso && null !== o && void 0 !== o && o.ssoUrl) return n((0, b.addTruthyParamsToUrl)(o.ssoUrl, {
                        email: null === e || void 0 === e ? void 0 : e.email
                    })), {
                        didRedirect: !0
                    }
                }
                return s.redirectUrl && n((0, b.addTruthyParamsToUrl)(s.redirectUrl, {
                    next: o
                })), 0 === Object.keys(s.errors || {}).length && ee("email"), {
                    didRedirect: !1,
                    userId: null === a || void 0 === a || null === (i = a.body) || void 0 === i ? void 0 : i.id,
                    ...s
                }
            }

            function re(e) {
                return { ...oe,
                    email: e.email || oe.email,
                    invitation: e.invitation
                }
            }

            function ae(e, o, t, n, i) {
                return !(!n.email || "initial" !== t) || (!("error" !== t || o.email || o.firstName || o.lastName || !o.password) || (!("submitting" !== t || !i.password) || !(!e.email || !i.password)))
            }

            function se(e, o) {
                return (!(0, _.zd)() || "facebook" === e) && (void 0 === o || !0 === o)
            }

            function le(e) {
                const o = (0, y.useRef)(null);
                return (0, y.useEffect)((() => {
                    var t;
                    e && (null === (t = o.current) || void 0 === t || t.focus())
                }), [o, e]), o
            }

            function ce() {
                return (0, I.w)(Y, "", {
                    category: "essential",
                    expires: new Date(Date.now() - 10)
                }), W(_.jk.LOGOUT_API_URL, {
                    headers: {
                        Accept: "application/json"
                    }
                })
            }
            const de = {
                name: "1nob2mz",
                styles: "&:focus{outline:none;}"
            };

            function ue(e) {
                let {
                    children: o,
                    href: t,
                    next: n,
                    onTrackSignupConversion: i,
                    onTrackSignupIntent: r,
                    params: s = {},
                    passThrough: l = !1,
                    routeTo: c = V,
                    shouldOpenInChildWindow: d = !0,
                    type: u
                } = e;
                const p = (0, b.addParamsToUrl)(t, {
                        in_child_window: d,
                        next: n,
                        ...s
                    }),
                    g = (0, y.useCallback)((async e => {
                        let o = {};
                        try {
                            o = JSON.parse(e.data), "string" === typeof o && (o = JSON.parse(o))
                        } catch (a) {
                            return void(0, C.Tb)(a, {
                                extra: {
                                    eventData: e.data
                                }
                            })
                        }
                        const {
                            nextUrl: t
                        } = o;
                        if (!t) return void(0, C.uT)("SSOButton: Error deciphering next URL from posted window message. nextUrl is empty");
                        const n = (0, b.extractParams)(t);
                        if (n.new_signup && i) try {
                            await i(u, n.customuser_id)
                        } catch (a) {
                            (0, C.Tb)(a)
                        }
                        const r = (0, b.removeParamsFromUrl)(t, ["customuser_id"]);
                        c(r)
                    }), [i, c, u]),
                    h = (0, y.useCallback)((e => {
                        g(e)
                    }), [g]);
                (0, y.useEffect)((() => () => {
                    window.removeEventListener("message", h)
                }), [h]);
                const m = (0, y.useCallback)((e => {
                    e.preventDefault();
                    const o = $(u);
                    o && ee(o), l && n ? c(n) : (r && r(u), d ? (window.addEventListener("message", h), window.open(p, "popupwindow", "height=600,width=980,resizable=yes,scrollbars=yes")) : c(p))
                }), [n, h, r, l, c, d, p, u]);
                return (0, v.tZ)(a.r, {
                    href: p,
                    onClick: m,
                    css: de,
                    tabIndex: -1,
                    children: o
                })
            }

            function pe(e) {
                return "/sso/start?provider=".concat(e)
            }
            const ge = (0, S.iv)(i.ZT.smallPrint1Bold, ";align-items:center;appearance:none;background-color:", r.w.ocean, ";border-radius:10px;border:none;box-shadow:", s.f.elevation5, ";box-sizing:border-box;color:", r.w.white, ";cursor:pointer;height:40px;margin:0;min-width:0;opacity:1;position:relative;text-decoration:none;text-transform:none;transition:", l.f.transitionValue, ";vertical-align:middle;white-space:nowrap;width:100%;&::-moz-focus-inner{padding:0;border:0;}&:hover,&:focus{background-color:", r.w.ocean120, ";}", ""),
                he = e => (0, S.iv)(i.ZT.paragraph3Semibold, ";color:", r.w.neutral100, ";border-radius:3px;height:44px;box-shadow:none;&::before{content:'';position:absolute;pointer-events:none;top:0;right:0;bottom:0;left:0;border:2px solid transparent;border-radius:5px;transition-property:all;transition-timing-function:", l.f.transitionTimingFunction, ";transition-duration:200ms;}&:focus:not([disabled]),a:focus &{background-color:", e ? e.backgroundColor : r.w.blue, ";outline:none;&::before{border-color:", e ? e.backgroundColor : r.w.blue, ";top:-5px;right:-5px;bottom:-5px;left:-5px;}}", ""),
                me = (0, S.iv)("align-items:center;background-color:", r.w.ocean120, ";display:flex;justify-content:center;", ""),
                fe = (0, S.iv)("background-color:", r.w.night, ";", ""),
                _e = (0, S.iv)(i.ZT.paragraph3, " height:50px;", "");
            var be = {
                name: "147pvhj",
                styles: "border:1px solid"
            };

            function ve(e) {
                let {
                    children: o,
                    color: t,
                    disabled: n = !1,
                    isBusy: i = !1,
                    size: r = "small",
                    ...a
                } = e;
                const s = t ? (0, S.iv)("border-color:", t.borderColor, ";color:", t.textColor, ";background-color:", t.backgroundColor, ";", t.borderColor && be, " &:hover,&:focus{background-color:", t.hoverBackgroundColor, ";}", "") : void 0;
                return (0, v.tZ)("button", {
                    css: [ge, he(t), s, i && me, i && fe, "medium" === r && _e, "", ""],
                    disabled: i || n,
                    ...a,
                    children: i ? (0, v.tZ)(c.$, {
                        color: "white"
                    }) : o
                })
            }
            const we = (0, S.iv)("align-items:center;display:flex;height:26px;justify-content:center;left:0;position:absolute;top:0;width:26px;margin:9px 10px;background-color:", r.w.neutral100, ";border-radius:3px;", ""),
                Se = {
                    name: "1o2nmkm",
                    styles: "align-items:center;border-radius:0;display:flex;height:17.33px;justify-content:center;width:17.33px"
                };

            function ye(e) {
                let {
                    children: o,
                    icon: t,
                    ...n
                } = e;
                return (0, v.BX)(ve, { ...n,
                    children: [(0, v.tZ)("div", {
                        css: we,
                        children: (0, v.tZ)("div", {
                            css: Se,
                            children: t
                        })
                    }), o]
                })
            }
            const ke = {
                google: {
                    backgroundColor: "rgb(66, 133, 244)",
                    hoverBackgroundColor: "rgb(51, 103, 214)"
                },
                facebook: {
                    backgroundColor: "#3b5999",
                    hoverBackgroundColor: "#3b5999"
                },
                microsoft: {
                    backgroundColor: r.w.neutral800,
                    hoverBackgroundColor: r.w.neutral700
                },
                saml: {
                    backgroundColor: r.w.zapier,
                    hoverBackgroundColor: r.w.lava80
                },
                continueWithSso: {
                    backgroundColor: r.w.neutral100,
                    hoverBackgroundColor: r.w.neutral100,
                    textColor: r.w.blueJeans,
                    borderColor: r.w.blueJeans
                }
            };

            function Te() {
                return (0, v.BX)("svg", {
                    fill: ke.facebook.backgroundColor,
                    viewBox: "0 0 408.788 408.788",
                    width: "21",
                    height: "21",
                    children: [(0, v.tZ)("title", {
                        children: "Facebook Logo"
                    }), (0, v.tZ)("path", {
                        d: "M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z"
                    })]
                })
            }

            function Ce(e) {
                let {
                    children: o = "Continue with Facebook",
                    next: t,
                    onTrackSignupConversion: n,
                    onTrackSignupIntent: i,
                    params: r = {},
                    routeTo: a
                } = e;
                return (0, v.tZ)(ue, {
                    href: pe("facebook"),
                    next: t,
                    onTrackSignupConversion: n,
                    onTrackSignupIntent: i,
                    params: r,
                    routeTo: a,
                    type: "facebook-sso",
                    children: (0, v.tZ)(ye, {
                        color: ke.facebook,
                        icon: (0, v.tZ)(Te, {}),
                        tabIndex: void 0,
                        children: o
                    })
                })
            }
            const Ie = "google-one-tap-container",
                xe = {
                    browser_not_supported: "The current browser is not supported by Google One Tap.",
                    invalid_client: "An invalid `client_id` was provided. Check your Google Client ID and ensure it is configured correctly.",
                    issuing_failed: "Google failed to issue a credential. The selected session may have signed out of Google.",
                    opt_out_or_no_session: "There are no sessions available to be used by Google One Tap. Possible causes are that you are not logged in to Google or that an ad-blocker is preventing you from seeing your Google session.",
                    suppressed_by_user: "The user previously opt-ed out of Google One Tap. The dialog will be suppressed until the suppression timeout period ellapses (".concat(86400, " seconds) or cookies are cleared."),
                    user_cancel: "The user opt-ed out of the Google One Tap dialog by clicking the cancel button."
                };

            function Oe(e) {
                const o = xe[e] || "No human-readable message available for: ".concat(e, ". See official docs for additional info. https://developers.google.com/identity/one-tap/web/reference/js-reference?authuser=1#google.accounts.id.prompt");
                return "[Google One Tap]: ".concat(o)
            }
            const Ne = t.g;
            var Ee = {
                name: "g999fp",
                styles: "#google-one-tap-container{&~.google-sso-button-container{display:none;}}"
            };

            function Ze(e) {
                let {
                    className: o,
                    displayContext: t = "use",
                    googleClientId: n,
                    onError: i,
                    onGoogleOneTapLoaded: r,
                    onSuccess: a,
                    shouldAutologin: s = !1,
                    showOnMobile: l = !0,
                    width: c = "100%"
                } = e;
                const u = (0, y.useRef)(!1),
                    [p, g] = (0, y.useState)(!1);
                return (0, y.useEffect)((() => {
                    var e, o, l, c, d, g, h, m, f, _;
                    if (!p) return;
                    const b = {
                        auto_select: s,
                        callback: e => {
                            a({
                                idToken: e.credential
                            })
                        },
                        cancel_on_tap_outside: !1,
                        client_id: n,
                        context: t,
                        prompt_parent_id: Ie,
                        prompt_suppress_sec: 86400,
                        state_cookie_domain: "zapier.com"
                    };
                    null === (e = Ne.window) || void 0 === e || null === (o = e.google) || void 0 === o || null === (l = o.accounts) || void 0 === l || null === (c = l.id) || void 0 === c || c.initialize(b), null === (d = Ne.window.google.accounts) || void 0 === d || null === (g = d.id) || void 0 === g || g.cancel(), null === (h = Ne.window) || void 0 === h || null === (m = h.google) || void 0 === m || null === (f = m.accounts) || void 0 === f || null === (_ = f.id) || void 0 === _ || _.prompt((e => {
                        const o = e.getMomentType();
                        if ("display" === o) {
                            if (!e.isDisplayed()) {
                                const t = e.getNotDisplayedReason();
                                i({
                                    message: Oe(t),
                                    reason: t,
                                    type: o
                                })
                            }
                            u.current || (u.current = !0, e.isDisplayed() && r && r())
                        }
                        if ("skipped" === o) {
                            const t = e.getSkippedReason(),
                                n = {
                                    message: Oe(t),
                                    reason: t,
                                    type: o
                                };
                            i(n)
                        }
                        if ("dismissed" === o) {
                            const t = e.getDismissedReason();
                            "credential_returned" !== t && i({
                                message: Oe(t),
                                reason: t,
                                type: o
                            })
                        }
                    }))
                }), [t, n, i, r, a, p, s]), (0, y.useEffect)((() => {
                    var e, o;
                    const t = null === (e = Ne.document) || void 0 === e ? void 0 : e.createElement("script");
                    return t.setAttribute("type", "text/javascript"), t.setAttribute("src", "https://accounts.google.com/gsi/client"), null === (o = Ne.document) || void 0 === o || o.body.appendChild(t), t.onload = () => {
                        g(!0)
                    }, setTimeout((() => {
                        if (!u.current) {
                            var e, o, t;
                            if (null !== (e = Ne.window) && void 0 !== e && e.google) null === (o = Ne.window.google.accounts) || void 0 === o || null === (t = o.id) || void 0 === t || t.cancel();
                            i({
                                message: "Google One Tap was unable to load within the timeout duration, it exceeded the limit of ".concat(3e3, "ms."),
                                reason: "loading_timeout",
                                type: "display"
                            })
                        }
                    }), 3e3), () => {
                        var e, o, t;
                        null !== (e = Ne.window) && void 0 !== e && e.google && (null === (o = Ne.window.google.accounts) || void 0 === o || null === (t = o.id) || void 0 === t || t.cancel())
                    }
                }), []), (0, v.tZ)("div", {
                    className: o,
                    id: Ie,
                    children: (0, v.tZ)(S.xB, {
                        styles: [(0, S.iv)("#credential_picker_container{margin-left:-7px;margin-right:-7px;}#google-one-tap-container{z-index:9;}#credential_picker_container iframe{display:block;margin:0 auto;width:", c, "!important;}#credential_picker_iframe{z-index:", d.C.signUp, "!important;}", ""), l ? Ee : (0, S.iv)("#google-one-tap-container{", _.w5.tablet, "{&~.google-sso-button-container{display:none;}}}#credential_picker_container{display:none;", _.w5.tablet, "{display:inherit;}}#credential_picker_iframe{visibility:hidden;", _.w5.tablet, "{visibility:inherit;}}", ""), "", ""]
                    })
                })
            }

            function Fe(e) {
                let {
                    disableGoogleOneTap: o = !1,
                    onSuccess: t,
                    selectedApis: n
                } = e;
                const [i, r] = (0, y.useState)(!o), {
                    trackEvent: a,
                    trackSignupIntent: s,
                    trackSignupConversion: l
                } = (0, T.useTrackingContext)(), c = (0, y.useCallback)((function(e) {
                    "userCanceled" === e.type || "user_cancel" === e.reason ? (a("google yolo iframe closed by user", {
                        error: e
                    }), D({
                        failure_type: e.type || null,
                        failure_reason: e.reason || null,
                        message: e.message || null,
                        action: "user_cancel"
                    })) : (a("google yolo iframe failed to load", {
                        error: e
                    }), D({
                        failure_type: e.type || null,
                        failure_reason: e.reason || null,
                        message: e.message || null,
                        action: "failed_to_load"
                    }), (0, C.uT)("GoogleOneTapError: ".concat(e.message))), r(!1)
                }), [r, a]), d = (0, y.useCallback)((async function(e) {
                    s("google-one-tap", {
                        selected_apis: n
                    });
                    try {
                        const {
                            isNewSignup: o,
                            userId: i
                        } = await async function(e, o) {
                            var t, n;
                            const i = await W(_.jk.GOOGLE_ONE_TAP_URL, {
                                method: "POST",
                                body: { ...e,
                                    selected_apis: o
                                }
                            });
                            return {
                                isNewSignup: null === (t = i.body) || void 0 === t ? void 0 : t.new_signup,
                                userId: null === (n = i.body) || void 0 === n ? void 0 : n.id
                            }
                        }(e, n);
                        l("google-one-tap", {
                            userId: i,
                            selectedApis: n
                        }), t && t(o)
                    } catch (o) {
                        c(o)
                    }
                }), [c, t, n, l, s]);
                return {
                    handleGoogleOneTapError: c,
                    handleGoogleOneTapSubmit: d,
                    showGoogleOneTap: i
                }
            }

            function Re() {
                return (0, v.BX)("svg", {
                    height: "21",
                    preserveAspectRatio: "xMidYMid",
                    viewBox: "0 0 256 262",
                    width: "21",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, v.tZ)("title", {
                        children: "Google Logo"
                    }), (0, v.tZ)("path", {
                        d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",
                        fill: "#4285F4"
                    }), (0, v.tZ)("path", {
                        d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",
                        fill: "#34A853"
                    }), (0, v.tZ)("path", {
                        d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",
                        fill: "#FBBC05"
                    }), (0, v.tZ)("path", {
                        d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",
                        fill: "#EB4335"
                    })]
                })
            }
            const Ue = {
                name: "1nob2mz",
                styles: "&:focus{outline:none;}"
            };

            function Ae(e) {
                let {
                    children: o = "Continue with Google",
                    next: t,
                    onTrackSignupIntent: n,
                    params: i = {}
                } = e;
                const r = (0, b.addParamsToUrl)("/google-sso/start?scopes=basic", {
                        next: t,
                        ...i
                    }),
                    s = (0, y.useCallback)((() => {
                        const e = O.o.googleSso,
                            o = $(e);
                        o && ee(o), n && n(e)
                    }), [n]);
                return (0, v.tZ)(a.r, {
                    href: r,
                    onClick: s,
                    css: Ue,
                    tabIndex: -1,
                    children: (0, v.tZ)(ye, {
                        tabIndex: void 0,
                        color: ke.google,
                        icon: (0, v.tZ)(Re, {}),
                        children: o
                    })
                })
            }

            function Ge() {
                return (0, v.BX)("svg", {
                    height: "21",
                    viewBox: "0 0 21 21",
                    width: "21",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, v.tZ)("title", {
                        children: "Microsoft Logo"
                    }), (0, v.tZ)("rect", {
                        fill: "#f25022",
                        height: "9",
                        width: "9",
                        x: "1",
                        y: "1"
                    }), (0, v.tZ)("rect", {
                        fill: "#00a4ef",
                        height: "9",
                        width: "9",
                        x: "1",
                        y: "11"
                    }), (0, v.tZ)("rect", {
                        fill: "#7fba00",
                        height: "9",
                        width: "9",
                        x: "11",
                        y: "1"
                    }), (0, v.tZ)("rect", {
                        fill: "#ffb900",
                        height: "9",
                        width: "9",
                        x: "11",
                        y: "11"
                    })]
                })
            }

            function Le(e) {
                let {
                    children: o = "Continue with Microsoft",
                    next: t,
                    onTrackSignupConversion: n,
                    onTrackSignupIntent: i,
                    params: r = {},
                    routeTo: a
                } = e;
                return (0, v.tZ)(ue, {
                    href: pe("microsoft"),
                    next: t,
                    onTrackSignupConversion: n,
                    onTrackSignupIntent: i,
                    params: r,
                    routeTo: a,
                    type: "microsoft-sso",
                    children: (0, v.tZ)(ye, {
                        color: ke.microsoft,
                        icon: (0, v.tZ)(Ge, {}),
                        tabIndex: void 0,
                        children: o
                    })
                })
            }
            const Be = {
                translations: Z.Z.translations,
                dictionary: { ...E.Z.dictionary,
                    ...Z.Z.dictionary
                }
            };

            function De(e) {
                let {
                    password: o,
                    showHint: t = !1
                } = e;
                const n = (0, y.useMemo)((() => function(e) {
                        const o = {
                                score: 0,
                                feedback: {
                                    warning: ""
                                }
                            },
                            {
                                score: t,
                                feedback: n
                            } = e ? (0, N.t)(e.slice(-64)) : o,
                            i = Math.max(t, 1),
                            r = (null === n || void 0 === n ? void 0 : n.warning) || "\xa0";
                        return {
                            score: i,
                            hint: r
                        }
                    }(o)), [o]),
                    i = (0, y.useMemo)((() => function(e) {
                        switch (e.score) {
                            case 1:
                            default:
                                return "error";
                            case 2:
                                return "warning";
                            case 3:
                            case 4:
                                return "success"
                        }
                    }(n)), [n]);
                return (0, v.BX)("div", {
                    children: [(0, v.tZ)(u.k, {
                        color: i,
                        value: n.score / 4
                    }), t && (0, v.tZ)(p.x, {
                        color: "error",
                        type: "smallPrint3",
                        children: n.hint
                    })]
                })
            }
            N.y.setOptions(Be);
            const Pe = (0, S.iv)("border-top:1px solid ", r.w.gray20, ";height:0;width:100%;", ""),
                Me = {
                    name: "1vr7vmn",
                    styles: "align-items:center;display:flex"
                },
                je = (0, S.iv)(i.ZT.superTitle3, " color:", r.w.gray60, ";padding:0 20px;", "");

            function Xe() {
                return (0, v.BX)("div", {
                    css: Me,
                    "data-testid": "login-separator",
                    children: [(0, v.tZ)("hr", {
                        css: Pe
                    }), (0, v.tZ)("span", {
                        css: je,
                        children: "OR"
                    }), (0, v.tZ)("hr", {
                        css: Pe
                    })]
                })
            }
            i.ZT.smallPrint1;
            i.ZT.smallPrint1, r.w.gray80;
            i.ZT.smallPrint1Semibold;
            i.ZT.base, r.w.error;
            const ze = (0, S.iv)(i.ZT.base, " text-align:center;", "");

            function Ve(e) {
                let {
                    email: o,
                    onClick: t
                } = e;
                return (0, v.BX)("p", {
                    css: ze,
                    children: ["Signing up as ", o, ". ", (0, v.tZ)(a.r, {
                        onClick: t,
                        children: "Not right?"
                    })]
                })
            }
            const Ye = (0, S.iv)(i.ZT.smallPrint1, " color:", r.w.neutral700, ";", "");

            function We() {
                return (0, v.BX)("p", {
                    css: Ye,
                    children: ["By signing up, you agree to Zapier's", " ", (0, v.tZ)(a.r, {
                        href: _.jk.LEGAL_URL,
                        target: "_blank",
                        children: "terms of service"
                    }), " ", "and", " ", (0, v.tZ)(a.r, {
                        href: _.jk.PRIVACY_URL,
                        target: "_blank",
                        children: "privacy policy."
                    })]
                })
            }
            const Ke = {
                    name: "1n28aw",
                    styles: "display:grid;grid-gap:25px"
                },
                He = (0, S.iv)(i.ZT.base, " text-align:center;", ""),
                qe = {
                    name: "1azakc",
                    styles: "text-align:center"
                },
                Je = {
                    name: "g65o95",
                    styles: "text-decoration:none"
                };

            function Qe(e) {
                let {
                    currentUser: o,
                    onClick: t
                } = e;
                return (0, v.BX)("div", {
                    css: Ke,
                    children: [(0, v.BX)("p", {
                        css: He,
                        children: ["You are currently logged in as ", o.email]
                    }), (0, v.tZ)(a.r, {
                        href: _.jk.DEFAULT_LOGIN_NEXT,
                        css: Je,
                        children: (0, v.tZ)(R, {
                            children: "Continue"
                        })
                    }), (0, v.tZ)("div", {
                        css: qe,
                        children: (0, v.tZ)(a.r, {
                            onClick: t,
                            children: "Sign up as a different person"
                        })
                    })]
                })
            }

            function $e(e) {
                let {
                    googleClientId: o,
                    googleOneTabMobileEnabled: t,
                    isSignupFromInvitation: n,
                    next: i,
                    routeTo: r,
                    selectedApis: a,
                    useCaseSlug: s,
                    shouldShowFacebookSSO: l,
                    shouldShowGoogleSSO: c,
                    shouldShowMicrosoftSSO: d,
                    invitation: u,
                    from: p
                } = e;
                const h = {};
                u && (h.invitation = u), a && (h.selected_apis = a), p && (h.from = p);
                const m = Fe({
                        disableGoogleOneTap: !o,
                        onSuccess: (0, y.useCallback)((e => {
                            ee("google"), r(i || (e ? (0, b.addParamsToUrl)(_.jk.DEFAULT_SIGNUP_NEXT, {
                                from: p
                            }, !0) : _.jk.DEFAULT_LOGIN_NEXT))
                        }), [i, r, p]),
                        selectedApis: a
                    }),
                    {
                        trackSignupConversion: f,
                        trackSignupIntent: w
                    } = (0, T.useTrackingContext)(),
                    S = (0, y.useCallback)(((e, o) => f(e, {
                        selectedApis: a,
                        useCaseSlug: s,
                        userId: o
                    })), [a, f, s]),
                    k = (0, y.useCallback)((e => {
                        w(e, {
                            selectedApis: a
                        }), U({
                            signupFunnel: "signup_intent",
                            signupType: G(e),
                            selectedApis: a
                        }).catch(C.Tb)
                    }), [a, w]);
                return (0, v.BX)("div", {
                    children: [(0, v.BX)("div", {
                        children: [c && !(0, _.x)() && !n && m.showGoogleOneTap && (0, v.BX)(v.HY, {
                            children: [(0, v.tZ)(Ze, {
                                displayContext: "signup",
                                googleClientId: o,
                                onError: m.handleGoogleOneTapError,
                                onSuccess: m.handleGoogleOneTapSubmit,
                                shouldAutologin: !1,
                                showOnMobile: t
                            }), l && (0, v.tZ)(g.L, {
                                height: 10
                            })]
                        }), c && (0, v.BX)("div", {
                            className: "google-sso-button-container",
                            children: [(0, v.tZ)(Ae, {
                                next: i,
                                onTrackSignupIntent: k,
                                params: h,
                                children: "Sign up with Google"
                            }), l && (0, v.tZ)(g.L, {
                                height: 20
                            })]
                        })]
                    }), (0, v.tZ)("div", {
                        children: l && (0, v.BX)(v.HY, {
                            children: [(0, v.tZ)(Ce, {
                                next: i,
                                onTrackSignupConversion: S,
                                onTrackSignupIntent: k,
                                params: h,
                                children: "Sign up with Facebook"
                            }), d && (0, v.tZ)(g.L, {
                                height: 20
                            })]
                        })
                    }), (0, v.tZ)("div", {
                        children: d && (0, v.tZ)(Le, {
                            next: i,
                            onTrackSignupConversion: S,
                            onTrackSignupIntent: k,
                            params: h,
                            children: "Sign up with Microsoft"
                        })
                    })]
                })
            }
            const eo = {
                    name: "avpsk8",
                    styles: "margin-bottom:15px"
                },
                oo = {
                    name: "gsaxun",
                    styles: "margin-bottom:0;position:relative;overflow:hidden;*{position:absolute!important;left:100vw!important;}"
                },
                to = (0, S.iv)("display:grid;grid-gap:15px;", _.w5.desktop, "{grid-template-columns:1fr 1fr;}", ""),
                no = {
                    name: "1vyhliw",
                    styles: "min-width:1px;*{min-width:1px!important;}"
                };

            function io(e) {
                let {
                    formData: o,
                    formErrors: t,
                    handleChange: n,
                    handleFocus: i,
                    handleSubmit: r,
                    shouldDisableEmailField: a,
                    shouldFocusEmailField: s,
                    shouldShowEmailField: l,
                    shouldShowNameFields: c,
                    shouldShowPasswordField: d,
                    submittedFields: u,
                    status: p
                } = e;
                const g = le(l && s),
                    f = le(d);
                return (0, v.BX)("form", {
                    onSubmit: r,
                    children: [(0, v.tZ)("div", {
                        css: [eo, !l && oo, "", ""],
                        "aria-hidden": !l,
                        "data-testid": "emailField-wrapper",
                        children: (0, v.tZ)(h.g, {
                            error: "error" === p && null !== u && void 0 !== u && u.email ? t.email : "",
                            label: "Work Email",
                            inputId: "signup-email",
                            isRequired: !0,
                            renderInput: e => (0, v.tZ)(m.o, { ...e,
                                autoComplete: "email",
                                isDisabled: a || "submitting" === p,
                                isFocusable: l,
                                inputMode: "email",
                                name: "email",
                                onChange: e => n("email", e.target.value),
                                onFocus: i,
                                placeholder: "Work Email",
                                type: "email",
                                value: o.email,
                                ref: g
                            })
                        })
                    }), (0, v.BX)("div", {
                        css: [eo, to, !c && oo, "", ""],
                        "aria-hidden": !c,
                        "data-testid": "nameFields-wrapper",
                        children: [(0, v.tZ)("div", {
                            css: no,
                            children: (0, v.tZ)(h.g, {
                                error: "error" === p && null !== u && void 0 !== u && u.firstName ? t.firstName : "",
                                label: "First Name",
                                inputId: "signup-first-name",
                                isRequired: !0,
                                renderInput: e => (0, v.tZ)(m.o, { ...e,
                                    autoComplete: "given-name",
                                    isDisabled: "submitting" === p,
                                    isFocusable: c,
                                    name: "first_name",
                                    onChange: e => n("firstName", e.target.value),
                                    onFocus: i,
                                    placeholder: "First Name",
                                    type: "text",
                                    value: o.firstName
                                })
                            })
                        }), (0, v.tZ)("div", {
                            css: no,
                            children: (0, v.tZ)(h.g, {
                                error: "error" === p && null !== u && void 0 !== u && u.lastName ? t.lastName : "",
                                label: "Last Name",
                                inputId: "signup-last-name",
                                isRequired: !0,
                                renderInput: e => (0, v.tZ)(m.o, { ...e,
                                    autoComplete: "family-name",
                                    isDisabled: "submitting" === p,
                                    isFocusable: c,
                                    name: "last_name",
                                    onChange: e => n("lastName", e.target.value),
                                    onFocus: i,
                                    placeholder: "Last Name",
                                    type: "text",
                                    value: o.lastName
                                })
                            })
                        })]
                    }), (0, v.tZ)("div", {
                        css: [eo, !d && oo, "", ""],
                        "aria-hidden": !d,
                        "data-testid": "passwordField-wrapper",
                        children: (0, v.tZ)(h.g, {
                            error: "error" === p && null !== u && void 0 !== u && u.password ? t.password : "",
                            label: "Password",
                            inputId: "signup-password",
                            isRequired: Boolean(d),
                            renderInput: e => (0, v.tZ)(m.o, { ...e,
                                autoComplete: "new-password",
                                isDisabled: "submitting" === p,
                                isFocusable: d,
                                name: "password",
                                onChange: e => n("password", e.target.value),
                                onFocus: i,
                                placeholder: "Password",
                                type: "password",
                                value: o.password,
                                ref: f
                            })
                        })
                    }), (0, v.tZ)("div", {
                        css: [!d && oo, "", ""],
                        "aria-hidden": !d,
                        "data-testid": "passwordStrengthMeter-wrapper",
                        children: (0, v.tZ)(De, {
                            password: o.password,
                            showHint: !0
                        })
                    }), (0, v.tZ)(R, {
                        disabled: "submitting" === p,
                        isBusy: "submitting" === p,
                        type: "submit",
                        id: "signup-submit",
                        children: "Get Started Free"
                    })]
                })
            }

            function ro(e) {
                let {
                    next: o,
                    samlUrl: t,
                    onTrackSignupConversion: n,
                    onTrackSignupIntent: i,
                    params: r = {},
                    routeTo: a
                } = e;
                return (0, v.tZ)(ue, {
                    href: t,
                    next: o,
                    onTrackSignupConversion: n,
                    onTrackSignupIntent: i,
                    params: r,
                    routeTo: a,
                    type: "sso",
                    shouldOpenInChildWindow: !1,
                    children: (0, v.tZ)(ve, {
                        color: ke.saml,
                        tabIndex: void 0,
                        children: "Continue with SSO"
                    })
                })
            }
            const ao = (0, S.iv)(i.ZT.base, " color:", r.w.error, ";", ""),
                so = (0, S.iv)(i.ZT.paragraph1ShortMedium, " color:", r.w.neutral800, ";margin-bottom:16px;text-align:center;", _.w5.tablet, "{text-align:left;}", _.w5.desktop, "{", i.ZT.paragraph1ShortMedium, ";}", "");

            function lo(e) {
                var o;
                let {
                    enableEmailAutoFocus: t = !1,
                    formSectionOrder: n = ["social", "email"],
                    googleCaptchaSiteKey: i,
                    googleClientId: r,
                    googleOneTabMobileEnabled: a = !0,
                    hideFieldsUntilFocus: s = !1,
                    invitation: l,
                    next: c,
                    useCase: d,
                    routeTo: u,
                    selectedApis: p,
                    microsoftSSOEnabled: g = !0,
                    facebookSSOEnabled: h = !0,
                    googleSSOEnabled: m = !0,
                    from: w
                } = e;
                const [S, k] = (0, y.useState)(!1), {
                    formData: I,
                    formErrors: x,
                    handleChange: O,
                    handleClearForm: N,
                    handleFocus: E,
                    handleSubmit: Z,
                    isCaptchaRequired: F,
                    shouldShowEmailField: R,
                    shouldShowNameFields: A,
                    shouldShowPasswordField: G,
                    status: L,
                    submittedFields: B,
                    shouldShowFacebookSSO: D,
                    shouldShowGoogleSSO: P,
                    shouldShowMicrosoftSSO: M
                } = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    const [o, t] = (0, y.useState)(re(e)), [n, i] = (0, y.useState)("initial"), [r, a] = (0, y.useState)(!1), [s, l] = (0, y.useState)({}), [c, d] = (0, y.useState)({ ...te
                    }), [u, p] = (0, y.useState)({ ...te
                    }), {
                        trackSignupIntent: g
                    } = (0, T.useTrackingContext)(), h = Boolean(s.captcha), m = e.routeTo || ne, f = ae(o, s, n, c, u), v = !f, w = (r || !e.hideFieldsUntilFocus) && !f, S = se("facebook", e.facebookSSOEnabled), k = se("google", e.googleSSOEnabled), C = se("microsoft", e.microsoftSSOEnabled);

                    function I(o, n) {
                        t((t => ({ ...t,
                            [o]: e[o] || n
                        }))), p((e => ({ ...e,
                            [o]: !0
                        })))
                    }

                    function x() {
                        t(re(e)), l({}), d({ ...te
                        }), p({ ...te
                        }), i("initial")
                    }

                    function O() {
                        r || g("direct", {
                            selected_apis: e.selectedApis
                        }), a(!0)
                    }
                    async function N(t) {
                        t && t.preventDefault(), i("submitting"), d({
                            captcha: Boolean(o.captcha),
                            email: Boolean(o.email),
                            firstName: Boolean(o.firstName),
                            lastName: Boolean(o.lastName),
                            password: Boolean(o.password)
                        });
                        try {
                            const t = await ie(o, e.next, e.selectedApis, m);
                            if (t.didRedirect) return;
                            if (Object.keys((null === t || void 0 === t ? void 0 : t.errors) || {}).length > 0) l((null === t || void 0 === t ? void 0 : t.errors) || {}), i("error");
                            else {
                                l({}), i("success");
                                const t = (0, b.addTruthyParamsToUrl)(e.next || _.jk.DEFAULT_SIGNUP_NEXT, {
                                    selected_apis: e.selectedApis,
                                    from: e.from,
                                    invitation_code: o.invitation
                                });
                                m(t)
                            }
                        } catch (n) {
                            l({
                                error: q
                            }), i("error")
                        }
                    }
                    return (0, y.useEffect)((() => {
                        e.email && t((o => ({ ...o,
                            email: e.email || ""
                        })))
                    }), [e.email]), (0, y.useEffect)((() => {
                        o.captcha && N()
                    }), [o.captcha]), {
                        formData: o,
                        formErrors: s,
                        handleChange: I,
                        handleClearForm: x,
                        handleFocus: O,
                        handleSubmit: N,
                        hasTouched: r,
                        isCaptchaRequired: h,
                        shouldShowEmailField: v,
                        shouldShowNameFields: w,
                        shouldShowPasswordField: f,
                        shouldShowFacebookSSO: S,
                        shouldShowGoogleSSO: k,
                        shouldShowMicrosoftSSO: C,
                        status: n,
                        submittedFields: c
                    }
                }({
                    email: null === l || void 0 === l ? void 0 : l.email,
                    hideFieldsUntilFocus: s,
                    next: c,
                    routeTo: u,
                    selectedApis: p,
                    invitation: null === l || void 0 === l ? void 0 : l.code,
                    microsoftSSOEnabled: g,
                    facebookSSOEnabled: h,
                    googleSSOEnabled: m,
                    from: w
                }), j = null === l || void 0 === l ? void 0 : l.account.hasSamlSso;
                let X = "";
                j && l && (X = (0, b.addParamsToUrl)(l.ssoUrl, {
                    invitation: l.code
                }));
                const Y = function() {
                        const [e, o] = (0, y.useState)(!0), [t, n] = (0, y.useState)();
                        return (0, y.useEffect)((() => {
                            !async function() {
                                const e = await W(_.jk.CURRENT_SESSION_URL);
                                o(!1), n(e.body)
                            }()
                        }), []), {
                            currentUser: t,
                            isLoading: e
                        }
                    }(),
                    K = () => {
                        E(), U({
                            signupFunnel: "signup_intent",
                            signupType: "direct",
                            selectedApis: p
                        }).catch(C.Tb)
                    };

                function H(e) {
                    return U({
                        signupFunnel: "signup",
                        signupType: "direct",
                        selectedApis: p
                    }).catch(C.Tb), Z(e)
                }
                if (null !== (o = Y.currentUser) && void 0 !== o && o.email && !S) return (0, v.tZ)(Qe, {
                    currentUser: Y.currentUser,
                    onClick: () => k(!0)
                });
                if (F) return (0, v.tZ)(z, {
                    googleCaptchaSiteKey: i,
                    onCaptchaVerification: e => {
                        O("captcha", e || "")
                    }
                });
                return (0, v.BX)(f.r, {
                    gap: 20,
                    children: [G && !j && (0, v.tZ)(Ve, {
                        email: I.email,
                        onClick: N
                    }), !j && n.map(((e, o) => {
                        var i;
                        const s = [];
                        return "social" === e ? s.push((0, v.tZ)(v.HY, {
                            children: R && !j && (0, v.tZ)($e, {
                                googleClientId: r,
                                googleOneTabMobileEnabled: a,
                                isSignupFromInvitation: !!l,
                                next: c,
                                routeTo: u || V,
                                selectedApis: p,
                                from: w,
                                useCaseSlug: d,
                                shouldShowFacebookSSO: D,
                                shouldShowGoogleSSO: P,
                                shouldShowMicrosoftSSO: M,
                                invitation: null === l || void 0 === l ? void 0 : l.code
                            })
                        })) : "email" === e && s.push((0, v.tZ)(v.HY, {
                            children: !j && (0, v.tZ)(io, {
                                formData: I,
                                formErrors: x,
                                handleChange: O,
                                handleFocus: K,
                                handleSubmit: H,
                                shouldDisableEmailField: Boolean(null === l || void 0 === l ? void 0 : l.email),
                                shouldFocusEmailField: Boolean(t),
                                shouldShowEmailField: R,
                                shouldShowNameFields: A,
                                shouldShowPasswordField: G,
                                status: L,
                                submittedFields: B
                            })
                        })), null !== (i = s[0]) && void 0 !== i && i.props.children && o < n.length - 1 && s.push((0, v.tZ)(Xe, {})), s
                    })), j && (0, v.BX)(f.r, {
                        gap: 20,
                        children: [(0, v.tZ)("h2", {
                            css: so,
                            children: "Sign up with your Identity Provider"
                        }), (0, v.tZ)(ro, {
                            samlUrl: X,
                            next: c
                        })]
                    }), x.error && "error" === L && (0, v.tZ)("div", {
                        css: ao,
                        children: x.error
                    }), (0, v.tZ)(We, {})]
                })
            }
            i.ZT.base, r.w.error
        }
    }
]);