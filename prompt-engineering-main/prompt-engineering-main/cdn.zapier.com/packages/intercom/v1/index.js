"use strict";
(() => {
    var $ = Object.defineProperty;
    var m = Object.getOwnPropertySymbols;
    var P = Object.prototype.hasOwnProperty,
        N = Object.prototype.propertyIsEnumerable;
    var z = (e, n, t) => n in e ? $(e, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        }) : e[n] = t,
        c = (e, n) => {
            for (var t in n || (n = {})) P.call(n, t) && z(e, t, n[t]);
            if (m)
                for (var t of m(n)) N.call(n, t) && z(e, t, n[t]);
            return e
        };
    var b = (e, n) => {
        var t = {};
        for (var i in e) P.call(e, i) && n.indexOf(i) < 0 && (t[i] = e[i]);
        if (e != null && m)
            for (var i of m(e)) n.indexOf(i) < 0 && N.call(e, i) && (t[i] = e[i]);
        return t
    };
    var p = (e, n) => () => (e && (n = e(e = 0)), n);
    var j = (e, n) => () => (n || e((n = {
        exports: {}
    }).exports, n), n.exports);
    var h = (e, n, t) => new Promise((i, r) => {
        var o = a => {
                try {
                    w(t.next(a))
                } catch (u) {
                    r(u)
                }
            },
            s = a => {
                try {
                    w(t.throw(a))
                } catch (u) {
                    r(u)
                }
            },
            w = a => a.done ? i(a.value) : Promise.resolve(a.value).then(o, s);
        w((t = t.apply(e, n)).next())
    });
    var T, _, A, E = p(() => {
        "use strict";
        T = document.location.hostname.includes("zapier.com"), _ = T ? "su0xp8g6" : "yi7ip89a", A = T ? "https://zapier.com" : ""
    });

    function x() {
        var e = window,
            n = e.Intercom;
        if (typeof n == "function") n("reattach_activator"), n("update", e.intercomSettings);
        else {
            var t = document,
                i = function() {
                    i.c(arguments)
                };
            i.q = [], i.c = function(o) {
                i.q.push(o)
            }, e.Intercom = i;
            var r = function() {
                var o = t.createElement("script");
                o.type = "text/javascript", o.async = !0, o.src = "https://widget.intercom.io/widget/" + _;
                var s = t.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(o, s)
            };
            document.readyState === "complete" ? r() : e.attachEvent ? e.attachEvent("onload", r) : e.addEventListener("load", r, !1)
        }
    }
    var L = p(() => {
        "use strict";
        E()
    });

    function d(e) {
        var n, t, i;
        return (i = (t = (n = document.cookie.split(";").find(r => {
            let [o] = r.split("=");
            return o.trim() === e
        })) == null ? void 0 : n.split("=")) == null ? void 0 : t[1]) == null ? void 0 : i.trim()
    }

    function f() {
        var n, t;
        let e = JSON.parse((n = sessionStorage.getItem("page_view_id")) != null ? n : "[]");
        return (t = e == null ? void 0 : e[1]) != null ? t : ""
    }

    function C(e = "") {
        var n;
        return e ? (Number(e) ^ ((n = window.crypto) == null ? void 0 : n.getRandomValues(new Uint8Array(1))[0]) & 15 >> Number(e) / 4).toString(16) : `10000000-1000-4000-8000-${1e11}`.replace(/[018]/g, C)
    }
    var y = p(() => {
        "use strict"
    });

    function q() {
        let e = 0,
            n = window.setInterval(() => {
                if (e > 80) return clearInterval(n);
                e += 1, document.getElementsByClassName("intercom-launcher")[0] && (clearInterval(n), window.dispatchEvent(new CustomEvent("zapier.onShowIntercomLauncher")))
            }, 250);
        window.addEventListener("beforeunload", () => {
            n && clearInterval(n)
        })
    }

    function S() {
        var e, n;
        R() && (q(), (e = window.Intercom) == null || e.call(window, "onHide", () => {
            window.dispatchEvent(new CustomEvent("zapier.onCloseIntercomMessenger"))
        }), (n = window.Intercom) == null || n.call(window, "onShow", () => {
            window.dispatchEvent(new CustomEvent("zapier.onOpenIntercomMessenger"))
        }))
    }
    var R, l, D = p(() => {
        "use strict";
        y();
        R = () => typeof window != "undefined", l = (e = {}) => {
            var n, t, i;
            R() && fetch("/api/v4/tracking/event/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    subject: "web_analytics.tracking.product.InProductMessageInteractionEvent",
                    properties: c({
                        fully_qualified_domain_name: window.location.host,
                        path: window.location.pathname,
                        url_address: window.location.href,
                        visitor_id: (n = d("visitor_id")) != null ? n : null,
                        page_view_id: (t = f()) != null ? t : null,
                        session_id: (i = d("session_id")) != null ? i : null,
                        event_id: C()
                    }, e)
                })
            })
        }
    });
    var J = j(G => {
        E();
        L();
        D();
        y();
        var I = "C0003",
            v = "C0004";

        function B() {
            return h(this, null, function*() {
                let e = yield fetch(`${A}/api/in-product-messaging/user/`, {
                    credentials: "include"
                }).catch();
                if (!(e != null && e.ok)) return {};
                let n = yield e.json().catch();
                return n != null ? n : {}
            })
        }

        function U() {
            return new Promise(e => {
                let n = 0,
                    t = setInterval(() => {
                        let i, r = d("OptanonConsentInSided");
                        window.OnetrustActiveGroups && window.OnetrustActiveGroups !== ",," ? i = {
                            functional: window.OnetrustActiveGroups.includes(I),
                            marketing: window.OnetrustActiveGroups.includes(v)
                        } : r && (i = {
                            functional: r === I || r === v,
                            marketing: r == v
                        }), (i || n++ > 20) && (clearInterval(t), e(i != null ? i : {
                            functional: !1,
                            marketing: !1
                        }))
                    }, 250)
            })
        }

        function V(e) {
            let n = 0,
                t = setInterval(() => {
                    var i;
                    (i = window.OneTrust) != null && i.OnConsentChanged ? (window.OneTrust.OnConsentChanged(({
                        detail: r = []
                    }) => e(r)), clearInterval(t)) : n++ > 20 && clearInterval(t)
                }, 250)
        }

        function M(e) {
            window.Intercom("boot", e), window.zapierIntercom = {
                ready: window.Intercom.booted && !e.disabled,
                data: e,
                update(n) {
                    window.Intercom("update", c({
                        user_hash: e.user_hash
                    }, n)), window.zapierIntercom.data = c(c({}, window.zapierIntercom.data), n)
                }
            }, window.zapierIntercom.ready && window.dispatchEvent(new CustomEvent("zapier.intercomReady", e)), l({
                customuser_id: e.user_id,
                interaction_name: "load",
                account_id: e.current_account_id
            })
        }
        h(G, null, function*() {
            var s, O;
            if ((s = window.zapierIntercom) != null && s.ready || (x(), S(), !window.Intercom)) return;
            let [w, ...a] = yield Promise.all([B(), U()]), u = w, {
                intercom_app_id: e = _,
                intercom_user_hash: n,
                is_masquerade: t
            } = u, i = b(u, ["intercom_app_id", "intercom_user_hash", "is_masquerade"]), [r] = a;
            if (t || (O = i.email) != null && O.endsWith("@zapier.rodeo")) return;
            let o = c({
                app_id: e,
                user_hash: n,
                user_is_logged_in: !1,
                user_has_signed_up: !1,
                functional_cookies_enabled: r.functional,
                marketing_consent: r.marketing,
                page_view_id: f(),
                pathname: window.location.pathname,
                session_id: d("session_id"),
                url_address: window.location.href,
                visitor_id: d("visitor_id"),
                disabled: !i.user_is_logged_in && !r.functional
            }, i);
            V(g => {
                var k;
                o.functional_cookies_enabled = g.includes(I), o.marketing_consent = g.includes(v), o.disabled = !o.user_is_logged_in && !g.includes(I), (k = window.zapierIntercom) != null && k.ready ? window.Intercom("update", o) : M(o)
            }), window.addEventListener("zapier.onOpenIntercomMessenger", () => {
                l({
                    interaction_name: "open",
                    customuser_id: o.user_id,
                    account_id: o.current_account_id
                })
            }), window.addEventListener("zapier.onCloseIntercomMessenger", () => {
                l({
                    interaction_name: "close",
                    customuser_id: o.user_id,
                    account_id: o.current_account_id
                })
            }), window.addEventListener("zapier.onShowIntercomLauncher", () => {
                l({
                    interaction_name: "shown",
                    content_type: "widget",
                    customuser_id: o.user_id,
                    account_id: o.current_account_id
                })
            }), M(o)
        })
    });
    J();
})();