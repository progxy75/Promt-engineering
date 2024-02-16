(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7680], {
        42755: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return p
                }
            });
            var o = n(67294),
                r = n(70917),
                a = n(54351),
                u = n(39774),
                l = n(56186),
                i = n(36402),
                f = n(42065),
                c = function(e, t) {
                    var n = {};
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
                    }
                    return n
                };
            const s = 768,
                d = (0, a.B)("SubscriptionForm", {
                    root: r.iv `
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    @media screen and (min-width: ${s}px) {
      margin: 0;
      flex-direction: row;
    }
  `,
                    inputField: e => r.iv `
    display: flex;
    text-align: left;
    ${e&&(0,u.Q)("fluid",r.iv`
        flex: 1 100%;
        @media screen and (min-width: ${s}px) {
          flex: 2;
        }
      `)}
  `
                }),
                p = e => {
                    var {
                        inputIsFullWidth: t = !0,
                        fluidInput: n = !1
                    } = e, r = c(e, ["inputIsFullWidth", "fluidInput"]);
                    const [a] = (0, o.useState)(r.inputId || (0, i.E)("SubscriptionForm-")), [u, s] = (0, o.useState)(""), p = {
                        id: a,
                        isDisabled: r.inputIsDisabled,
                        isErrored: !!r.inputError,
                        isRequired: r.inputIsRequired,
                        isFullWidth: t,
                        placeholder: r.placeholderText,
                        ariaLabel: r.placeholderText,
                        size: "small",
                        onChange: e => s(e.target.value)
                    };
                    return (0, l.U)("form", {
                        onSubmit: () => {
                            var e;
                            return null === (e = r.onSubmit) || void 0 === e ? void 0 : e.call(r, u)
                        },
                        "data-testid": "subscription-form"
                    }, (0, l.U)("div", {
                        css: d.root
                    }, (0, l.U)("div", {
                        css: d.inputField(n)
                    }, r.renderInput ? r.renderInput(p) : (0, l.U)(f.o, Object.assign({}, p))), r.renderButton({
                        size: "small"
                    })))
                }
        },
        29511: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = function(e, t, n, o) {
                return !1
            };
            ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        48418: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(94941).Z;
            n(45753).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(92648).Z,
                a = n(17273).Z,
                u = r(n(67294)),
                l = n(76273),
                i = n(22725),
                f = n(63462),
                c = n(21018),
                s = n(57190),
                d = n(29511),
                p = n(98684),
                v = {};

            function y(e, t, n, o) {
                if (e && l.isLocalURL(t)) {
                    Promise.resolve(e.prefetch(t, n, o)).catch((function(e) {
                        0
                    }));
                    var r = o && "undefined" !== typeof o.locale ? o.locale : e && e.locale;
                    v[t + "%" + n + (r ? "%" + r : "")] = !0
                }
            }
            var b = u.default.forwardRef((function(e, t) {
                var n, r = e.href,
                    b = e.as,
                    h = e.children,
                    m = e.prefetch,
                    g = e.passHref,
                    x = e.replace,
                    C = e.shallow,
                    _ = e.scroll,
                    O = e.locale,
                    M = e.onClick,
                    j = e.onMouseEnter,
                    L = e.onTouchStart,
                    R = e.legacyBehavior,
                    E = void 0 === R ? !0 !== Boolean(!1) : R,
                    I = a(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = h, !E || "string" !== typeof n && "number" !== typeof n || (n = u.default.createElement("a", null, n));
                var w = !1 !== m,
                    P = u.default.useContext(f.RouterContext),
                    S = u.default.useContext(c.AppRouterContext);
                S && (P = S);
                var k, T = u.default.useMemo((function() {
                        var e = o(l.resolveHref(P, r, !0), 2),
                            t = e[0],
                            n = e[1];
                        return {
                            href: t,
                            as: b ? l.resolveHref(P, b) : n || t
                        }
                    }), [P, r, b]),
                    U = T.href,
                    B = T.as,
                    F = u.default.useRef(U),
                    D = u.default.useRef(B);
                E && (k = u.default.Children.only(n));
                var N = E ? k && "object" === typeof k && k.ref : t,
                    Z = o(s.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    A = Z[0],
                    H = Z[1],
                    K = Z[2],
                    q = u.default.useCallback((function(e) {
                        D.current === B && F.current === U || (K(), D.current = B, F.current = U), A(e), N && ("function" === typeof N ? N(e) : "object" === typeof N && (N.current = e))
                    }), [B, N, U, K, A]);
                u.default.useEffect((function() {
                    var e = H && w && l.isLocalURL(U),
                        t = "undefined" !== typeof O ? O : P && P.locale,
                        n = v[U + "%" + B + (t ? "%" + t : "")];
                    e && !n && y(P, U, B, {
                        locale: t
                    })
                }), [B, U, H, O, w, P]);
                var z = {
                    ref: q,
                    onClick: function(e) {
                        E || "function" !== typeof M || M(e), E && k.props && "function" === typeof k.props.onClick && k.props.onClick(e), e.defaultPrevented || function(e, t, n, o, r, a, i, f, c, s) {
                            if ("A" !== e.currentTarget.nodeName.toUpperCase() || ! function(e) {
                                    var t = e.currentTarget.target;
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) && l.isLocalURL(n)) {
                                e.preventDefault();
                                var d = function() {
                                    "beforePopState" in t ? t[r ? "replace" : "push"](n, o, {
                                        shallow: a,
                                        locale: f,
                                        scroll: i
                                    }) : t[r ? "replace" : "push"](n, {
                                        forceOptimisticNavigation: !s
                                    })
                                };
                                c ? u.default.startTransition(d) : d()
                            }
                        }(e, P, U, B, x, C, _, O, Boolean(S), w)
                    },
                    onMouseEnter: function(e) {
                        E || "function" !== typeof j || j(e), E && k.props && "function" === typeof k.props.onMouseEnter && k.props.onMouseEnter(e), !w && S || l.isLocalURL(U) && y(P, U, B, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(e) {
                        E || "function" !== typeof L || L(e), E && k.props && "function" === typeof k.props.onTouchStart && k.props.onTouchStart(e), !w && S || l.isLocalURL(U) && y(P, U, B, {
                            priority: !0
                        })
                    }
                };
                if (!E || g || "a" === k.type && !("href" in k.props)) {
                    var W = "undefined" !== typeof O ? O : P && P.locale,
                        $ = P && P.isLocaleDomain && d.getDomainLocale(B, W, P.locales, P.domainLocales);
                    z.href = $ || p.addBasePath(i.addLocale(B, W, P && P.defaultLocale))
                }
                return E ? u.default.cloneElement(k, z) : u.default.createElement("a", Object.assign({}, I, z), n)
            }));
            t.default = b, ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        57190: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(94941).Z;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                var t = e.rootRef,
                    n = e.rootMargin,
                    f = e.disabled || !u,
                    c = o(r.useState(!1), 2),
                    s = c[0],
                    d = c[1],
                    p = o(r.useState(null), 2),
                    v = p[0],
                    y = p[1];
                r.useEffect((function() {
                    if (u) {
                        if (f || s) return;
                        if (v && v.tagName) {
                            var e = function(e, t, n) {
                                var o = function(e) {
                                        var t, n = {
                                                root: e.root || null,
                                                margin: e.rootMargin || ""
                                            },
                                            o = i.find((function(e) {
                                                return e.root === n.root && e.margin === n.margin
                                            }));
                                        if (o && (t = l.get(o))) return t;
                                        var r = new Map,
                                            a = new IntersectionObserver((function(e) {
                                                e.forEach((function(e) {
                                                    var t = r.get(e.target),
                                                        n = e.isIntersecting || e.intersectionRatio > 0;
                                                    t && n && t(n)
                                                }))
                                            }), e);
                                        return t = {
                                            id: n,
                                            observer: a,
                                            elements: r
                                        }, i.push(n), l.set(n, t), t
                                    }(n),
                                    r = o.id,
                                    a = o.observer,
                                    u = o.elements;
                                return u.set(e, t), a.observe(e),
                                    function() {
                                        if (u.delete(e), a.unobserve(e), 0 === u.size) {
                                            a.disconnect(), l.delete(r);
                                            var t = i.findIndex((function(e) {
                                                return e.root === r.root && e.margin === r.margin
                                            }));
                                            t > -1 && i.splice(t, 1)
                                        }
                                    }
                            }(v, (function(e) {
                                return e && d(e)
                            }), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: n
                            });
                            return e
                        }
                    } else if (!s) {
                        var o = a.requestIdleCallback((function() {
                            return d(!0)
                        }));
                        return function() {
                            return a.cancelIdleCallback(o)
                        }
                    }
                }), [v, f, n, t, s]);
                var b = r.useCallback((function() {
                    d(!1)
                }), []);
                return [y, s, b]
            };
            var r = n(67294),
                a = n(9311),
                u = "function" === typeof IntersectionObserver,
                l = new Map,
                i = [];
            ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        21018: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TemplateContext = t.GlobalLayoutRouterContext = t.LayoutRouterContext = t.AppRouterContext = void 0;
            var o = (0, n(92648).Z)(n(67294)),
                r = o.default.createContext(null);
            t.AppRouterContext = r;
            var a = o.default.createContext(null);
            t.LayoutRouterContext = a;
            var u = o.default.createContext(null);
            t.GlobalLayoutRouterContext = u;
            var l = o.default.createContext(null);
            t.TemplateContext = l
        },
        41664: function(e, t, n) {
            e.exports = n(48418)
        }
    }
]);