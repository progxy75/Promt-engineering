"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1890], {
        68381: function(t, e, n) {
            n.d(e, {
                S: function() {
                    return d
                },
                b: function() {
                    return s
                }
            });
            var r = n(26042),
                i = n(35944),
                a = n(36983),
                o = (n(67294), n(99534)),
                c = function(t) {
                    var e = t.image,
                        n = e.url,
                        a = e.alt,
                        c = e.maxWidth,
                        s = t.queryParams,
                        d = (0, o.Z)(t, ["image", "queryParams"]),
                        l = n.includes("https://images.ctfassets.net"),
                        p = s && l ? s : {},
                        g = new URLSearchParams(p).toString(),
                        m = new URLSearchParams((0, r.Z)({}, p, p.fm && {
                            fm: "avif"
                        })).toString(),
                        f = new URLSearchParams((0, r.Z)({}, p, p.fm && {
                            fm: "webp"
                        })).toString();
                    return (0, i.tZ)(i.HY, {
                        children: (0, i.BX)("picture", {
                            children: [(0, i.tZ)("source", {
                                srcSet: "".concat(n, "?").concat(m),
                                type: "image/avif"
                            }), (0, i.tZ)("source", {
                                srcSet: "".concat(n, "?").concat(f),
                                type: "image/webp"
                            }), (0, i.tZ)(u, (0, r.Z)({
                                src: "".concat(n, "?").concat(g),
                                maxWidth: c,
                                alt: a
                            }, d))]
                        })
                    })
                },
                u = (0, a.Z)("img", {
                    target: "e5cerj40"
                })("max-width:", (function(t) {
                    var e = t.maxWidth;
                    return e ? e + "px !important" : null
                }), ";margin:", (function(t) {
                    return t.maxWidth ? "0 auto" : null
                }), ";"),
                s = {
                    w: "1400",
                    fm: "jpg",
                    q: "30",
                    fit: "thumb"
                },
                d = function(t) {
                    return (0, i.tZ)(l, (0, r.Z)({
                        queryParams: s
                    }, t))
                },
                l = (0, a.Z)(c, {
                    target: "e7ascrl0"
                })("border-radius:3px;object-fit:cover;width:100%;max-height:100%;")
        },
        19452: function(t, e, n) {
            n.d(e, {
                h: function() {
                    return s
                }
            });
            var r = n(10253),
                i = n(35944),
                a = n(67294),
                o = n(9008),
                c = n.n(o),
                u = n(71921);

            function s(t) {
                var e = t.title,
                    n = t.description,
                    o = t.image,
                    s = t.jsonLd,
                    d = t.discoverable,
                    l = void 0 === d || d,
                    p = (0, r.Z)(a.useState(""), 2),
                    g = p[0],
                    m = p[1];
                return a.useEffect((function() {
                    m(window.location.href)
                }), []), (0, i.BX)(c(), {
                    children: [(0, i.tZ)("title", {
                        children: e
                    }), (0, i.tZ)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }), (0, i.tZ)("meta", {
                        name: "description",
                        content: n
                    }), (0, i.tZ)("meta", {
                        property: "og:title",
                        content: e
                    }), (0, i.tZ)("meta", {
                        property: "og:description",
                        content: n
                    }), (0, i.tZ)("meta", {
                        property: "og:image",
                        content: o || u.X.share
                    }), (0, i.tZ)("meta", {
                        property: "og:url",
                        content: g
                    }), (0, i.tZ)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), (0, i.tZ)("meta", {
                        name: "twitter:site",
                        content: "@zapier"
                    }), !l && (0, i.tZ)("meta", {
                        name: "robots",
                        content: "noindex"
                    }), s && (0, i.tZ)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(s)
                        }
                    })]
                })
            }
        },
        88696: function(t, e, n) {
            n.d(e, {
                L: function() {
                    return o
                }
            });
            var r = n(35944),
                i = (n(67294), n(36983)),
                a = n(91461),
                o = function(t) {
                    var e = t.hasLine,
                        n = t.noPadding,
                        i = void 0 !== n && n;
                    return (0, r.tZ)(c, {
                        hasLine: e,
                        noPadding: i,
                        children: (0, r.tZ)(s, {
                            hasLine: e
                        })
                    })
                },
                c = (0, i.Z)("div", {
                    target: "e7bjwpa0"
                })("padding:", (function(t) {
                    return e = t.hasLine, t.noPadding ? "0" : e ? "25px 0" : "30px 0";
                    var e
                }), ";width:100%;"),
                u = "\n  border: 1px solid ".concat(a.w.neutral300, ";\n"),
                s = (0, i.Z)("div", {
                    target: "e7bjwpa1"
                })("border:", (function(t) {
                    return t.hasLine ? "1px solid ".concat(a.w.gray20) : "none"
                }), ";", (function(t) {
                    return t.hasLine && u
                }), ";")
        },
        79182: function(t, e, n) {
            n.d(e, {
                B: function() {
                    return c
                },
                k: function() {
                    return u
                }
            });
            var r = n(35944),
                i = n(36983),
                a = n(72266),
                o = n(91461),
                c = (n(67294), function(t) {
                    var e = t.children;
                    return (0, r.BX)(p, {
                        children: [(0, r.tZ)(a.J, {
                            name: "formXCircle",
                            color: "error"
                        }), (0, r.tZ)(d, {
                            children: e
                        })]
                    })
                }),
                u = function(t) {
                    var e = t.children;
                    return (0, r.BX)(l, {
                        children: [(0, r.tZ)(a.J, {
                            name: "formCheckCircle",
                            color: "success"
                        }), (0, r.tZ)(d, {
                            children: e
                        })]
                    })
                },
                s = (0, i.Z)("div", {
                    target: "ec85ax80"
                })("border:1px solid black;border-radius:10px;display:grid;grid-column-gap:10px;grid-template-columns:max-content 1fr;justify-content:center;align-items:center;padding:10px 15px;margin:0 10px;"),
                d = (0, i.Z)("p", {
                    target: "ec85ax81"
                })("font-size:16px;font-weight:700;line-height:20px;text-align:left;"),
                l = (0, i.Z)(s, {
                    target: "ec85ax82"
                })("border-color:", o.w.success, ";background-color:", o.w.success10, ";"),
                p = (0, i.Z)(s, {
                    target: "ec85ax83"
                })("border-color:", o.w.error, ";background-color:", o.w.error10, ";")
        },
        87080: function(t, e, n) {
            n.d(e, {
                g: function() {
                    return b
                }
            });
            var r = n(7297),
                i = n(54351),
                a = n(70917),
                o = n(75767),
                c = n(54818),
                u = n(42755),
                s = n(67431),
                d = n(42065),
                l = n(79182);

            function p() {
                var t = (0, r.Z)(["\n    form > div {\n      gap: 20px !important;\n      // This is a special case to make sure there is a proper gap between 660px and 768px\n      @media (min-width: 768px) {\n        gap: 10px !important;\n      }\n    }\n  "]);
                return p = function() {
                    return t
                }, t
            }

            function g() {
                var t = (0, r.Z)(["\n      button {\n        width: 175px !important;\n      }\n    "]);
                return g = function() {
                    return t
                }, t
            }

            function m() {
                var t = (0, r.Z)(["\n      width: 275px;\n      text-align: unset;\n    "]);
                return m = function() {
                    return t
                }, t
            }
            var f = (0, i.B)("SubscribeForm", {
                    formWrapper: (0, a.iv)(p()),
                    btnWrapper: [(0, a.iv)(g())],
                    textInputWrapper: [(0, a.iv)(m())]
                }),
                h = !1,
                w = !1,
                b = function(t) {
                    var e = t.buttonColor,
                        n = t.onSubmit,
                        r = t.loading,
                        i = t.error,
                        p = t.sectionToTrack,
                        g = t.success,
                        m = (0, o.K)();
                    if (r) return (0, a.tZ)(c.$, {
                        size: "small"
                    });
                    var b = function() {
                        h || (m("call_to_action", {
                            path: window.location.pathname,
                            from_path: document.referrer,
                            cta_name: "email_subscribe_intent",
                            cta_raw_text: "get productivity tips delivered straight to your inbox",
                            cta_location: p,
                            cta_goal: "email_subscribe",
                            link_destination: "",
                            signup_type: ""
                        }), h = !0)
                    };
                    return i ? (0, a.tZ)(l.B, null, "Oops! We had trouble subscribing this email.") : g ? (w || (m("call_to_action", {
                        path: window.location.pathname,
                        from_path: document.referrer,
                        cta_name: "email_subscribe_confirm",
                        cta_raw_text: "email address submitted",
                        cta_location: p,
                        cta_goal: "email_subscribe",
                        link_destination: "",
                        signup_type: ""
                    }), w = !0), (0, a.tZ)(l.k, null, "Excellent! You have been subscribed.")) : (0, a.tZ)("div", {
                        css: f.formWrapper
                    }, (0, a.tZ)(u.o, {
                        placeholderText: "Email address",
                        renderButton: function(t) {
                            return (0, a.tZ)("div", {
                                css: f.btnWrapper
                            }, (0, a.tZ)(s.z, Object.assign({}, t, {
                                type: "submit",
                                color: e,
                                hasShadow: !0,
                                size: "medium",
                                isFullWidth: !1
                            }), "Subscribe"))
                        },
                        renderInput: function(t) {
                            return (0, a.tZ)("div", {
                                css: f.textInputWrapper
                            }, (0, a.tZ)(d.o, Object.assign({}, t, {
                                onFocus: b,
                                size: "medium",
                                type: "email",
                                isRequired: !0
                            })))
                        },
                        onSubmit: n
                    }))
                }
        },
        87994: function(t, e, n) {
            n.d(e, {
                j: function() {
                    return x
                }
            });
            var r = n(7297),
                i = n(67294),
                a = n(54351),
                o = n(87080),
                c = n(86731),
                u = n(91461),
                s = n(57692),
                d = n(38047),
                l = n(1928),
                p = n(16425);

            function g() {
                var t = (0, r.Z)(["\n    display: grid;\n    place-items: center;\n  "]);
                return g = function() {
                    return t
                }, t
            }

            function m() {
                var t = (0, r.Z)(["\n      display: grid;\n      place-items: center;\n      text-align: center;\n      padding: 31px 0 48px 0;\n    "]);
                return m = function() {
                    return t
                }, t
            }

            function f() {
                var t = (0, r.Z)(["\n      ", " {\n        padding: 22px 0 44px 0;\n      }\n    "]);
                return f = function() {
                    return t
                }, t
            }

            function h() {
                var t = (0, r.Z)(["\n        ", " {\n          padding: 0;\n        }\n      "]);
                return h = function() {
                    return t
                }, t
            }

            function w() {
                var t = (0, r.Z)(["\n      font-weight: 800;\n      font-size: 19px;\n      line-height: 140%;\n      padding: 0 20px;\n      margin-bottom: 37px;\n      color: ", ";\n      ", "\n\n      ", " {\n        padding: 0;\n        margin-bottom: 28px;\n        ", "\n      }\n\n      ", " {\n        margin-bottom: 24px;\n      }\n    "]);
                return w = function() {
                    return t
                }, t
            }

            function b() {
                var t = (0, r.Z)(["\n      color: ", ";\n      font-size: 11px;\n      line-height: 130%;\n      margin-top: 30px;\n      padding: 0 20px;\n      ", "\n    "]);
                return b = function() {
                    return t
                }, t
            }
            var Z = (0, a.B)("SubscribeMini", {
                    outer: (0, d.iv)(g()),
                    wrapper: function(t) {
                        return [(0, d.iv)(m()), (0, d.iv)(f(), c.w5.tablet), t && (0, d.iv)(h(), c.w5.tablet)]
                    },
                    title: [(0, d.iv)(w(), u.w.neutral800, s.ZT.paragraph1ShortBold, c.w5.tablet, s.ZT.pageHeader9, c.w5.desktop)],
                    paragraph: [(0, d.iv)(b(), u.w.neutral700, s.ZT.smallPrint1Medium)]
                }),
                v = function(t) {
                    var e = t.noPadding,
                        n = t.loading,
                        r = t.sectionToTrack,
                        i = void 0 === r ? "mini" : r,
                        a = t.error,
                        c = t.success,
                        u = t.onSubmit;
                    return (0, d.tZ)(p.H6, {
                        avroIdentifier: p.Op.SubscribeMini,
                        css: Z.outer,
                        preAvroIdentifier: "Mini Homepage Subscribe CTA"
                    }, (0, d.tZ)("div", {
                        css: Z.wrapper(e),
                        "data-testid": "subscribe-mini"
                    }, (0, d.tZ)("p", {
                        css: Z.title
                    }, "Get productivity tips delivered straight to your inbox"), (0, d.tZ)(o.g, {
                        loading: n,
                        error: a,
                        sectionToTrack: i,
                        success: c,
                        onSubmit: u
                    }), (0, d.tZ)("p", {
                        css: Z.paragraph
                    }, "We\u2019ll email you 1-3 times per week\u2014and never share your information.")))
                },
                x = function(t) {
                    var e = t.noPadding,
                        n = t.sectionToTrack,
                        r = (0, l.V)(),
                        a = r.error,
                        o = r.loading,
                        c = r.success,
                        u = r.submitEmail,
                        s = (0, p.B2)().emitCTAClickEvent;
                    return (0, i.useEffect)((function() {
                        (c || a) && s({
                            interaction_raw_text: "Subscribe",
                            custom_tracking_fields: {
                                component: p.Op.SubscribeMini,
                                success: c || !a
                            }
                        })
                    }), [c, a, s]), (0, d.tZ)(v, {
                        error: a,
                        loading: o,
                        onSubmit: u,
                        noPadding: e,
                        sectionToTrack: n,
                        success: c
                    })
                }
        },
        75848: function(t, e, n) {
            n.d(e, {
                x: function() {
                    return g
                }
            });
            var r = n(35944),
                i = (n(67294), n(36983)),
                a = n(67431),
                o = n(91461),
                c = n(57692),
                u = n(75767),
                s = n(86731),
                d = n(24084),
                l = n(16425),
                p = n(71921),
                g = function() {
                    var t = (0, u.K)(),
                        e = (0, l.B2)().emitCTAClickEvent,
                        n = "Sign up",
                        i = "See how Zapier works";
                    return (0, r.tZ)(f, {
                        avroIdentifier: l.Op.ZapierProductModule,
                        "data-testid": "zapier-product-module",
                        preAvroIdentifier: "Zapier Product Module",
                        children: (0, r.BX)(h, {
                            children: [(0, r.BX)(w, {
                                children: [(0, r.tZ)(b, {
                                    children: "Improve your productivity automatically. Use Zapier to get your apps working together."
                                }), (0, r.BX)(Z, {
                                    children: [(0, r.tZ)(a.z, {
                                        href: "/sign-up",
                                        hasShadow: !0,
                                        onClick: function() {
                                            e({
                                                interaction_raw_text: n,
                                                destination_url_address: "/sign-up",
                                                custom_tracking_fields: {
                                                    component: l.Op.ZapierProductModule
                                                }
                                            }), t("call_to_action", {
                                                path: window.location.pathname,
                                                from_path: document.referrer,
                                                cta_name: "signup_pre_intent",
                                                cta_raw_text: "sign up",
                                                cta_location: "zapier product module",
                                                cta_goal: "signup",
                                                signup_type: "",
                                                link_destination: "/sign-up"
                                            })
                                        },
                                        isFullWidth: !0,
                                        size: "medium",
                                        children: n
                                    }), (0, r.tZ)(v, {
                                        children: (0, r.tZ)(d.r, {
                                            href: "/how-it-works",
                                            onClick: function(n) {
                                                e({
                                                    option_selected: l.QC.cta_link,
                                                    interaction_raw_text: i,
                                                    destination_url_address: "/how-it-works",
                                                    custom_tracking_fields: {
                                                        component: l.Op.ZapierProductModule
                                                    }
                                                }), t("linkClicked", {
                                                    linkText: i,
                                                    href: "/how-it-works",
                                                    path: window.location.pathname,
                                                    posYFromTop: n.clientY
                                                })
                                            },
                                            children: i
                                        })
                                    })]
                                })]
                            }), (0, r.tZ)(x, {
                                alt: "A Zap with the trigger 'When I get a new lead from Facebook,' and the action 'Notify my team in Slack'",
                                src: p.X.backgroundArtwork
                            })]
                        })
                    })
                },
                m = (0, i.Z)("section", {
                    target: "e12ga1sn0"
                })("display:flex;background-color:", o.w.cream, ";justify-content:center;text-align:center;width:100%;", s.w5.tablet, "{text-align:left;}"),
                f = (0, l.aB)(m),
                h = (0, i.Z)("div", {
                    target: "e12ga1sn1"
                })("width:100%;max-width:1200px;padding:0 20px;display:flex;align-items:center;justify-content:space-between;overflow:hidden;"),
                w = (0, i.Z)("div", {
                    target: "e12ga1sn2"
                })("padding:50px 0 60px;", s.w5.tablet, "{max-width:396px;}", s.w5.desktop, "{max-width:600px;padding:128px 0 128px;}"),
                b = (0, i.Z)("h2", {
                    target: "e12ga1sn3"
                })("color:", o.w.neutral800, ";", c.ZT.pageHeader9, "  margin-bottom:40px;", s.w5.tablet, "{", c.ZT.pageHeader5, "}"),
                Z = (0, i.Z)("div", {
                    target: "e12ga1sn4"
                })("display:grid;grid-gap:30px;grid-template-columns:193px;justify-content:center;justify-items:center;", s.w5.tablet, "{grid-gap:25px;grid-template-columns:175px max-content;justify-content:start;}"),
                v = (0, i.Z)("div", {
                    target: "e12ga1sn5"
                })("color:", o.w.neutral800, ";font-size:18px;font-weight:600;line-height:25px;text-decoration:underline;", s.w5.tablet, "{align-self:center;}&:hover,&:focus{color:", o.w.blueJeans, ";}"),
                x = (0, i.Z)("img", {
                    target: "e12ga1sn6"
                })("display:none;", s.w5.tablet, "{display:block;width:55%;margin-right:-10%;margin-bottom:48px;}", s.w5.desktop, "{width:45%;margin-right:-5%;margin-bottom:0;}@media (min-width:1200px){margin-right:0;}")
        },
        3675: function(t, e, n) {
            n.d(e, {
                $g: function() {
                    return s
                },
                R_: function() {
                    return l
                },
                ZW: function() {
                    return d
                },
                r$: function() {
                    return c
                }
            });
            var r = n(36983),
                i = n(57692),
                a = n(91461),
                o = n(86731),
                c = (0, r.Z)("p", {
                    target: "e1427kem0"
                })(i.ZT.smallPrint1, "  color:", a.w.neutral700, ";"),
                u = (0, r.Z)("p", {
                    target: "e1427kem1"
                })("line-height:20px;font-size:14px;font-weight:600;"),
                s = (0, r.Z)("p", {
                    target: "e1427kem2"
                })("color:", a.w.neutral700, ";", i.ZT.paragraph3, " ", o.w5.tablet, "{", i.ZT.paragraph1Short, "}"),
                d = (0, r.Z)("h1", {
                    target: "e1427kem3"
                })("color:", a.w.neutral800, ";font-size:28px;line-height:120%;", i.ZT.pageHeader9, " ", o.w5.tablet, "{", i.ZT.pageHeader3, "}"),
                l = (a.w.neutral800, i.ZT.pageHeader9, o.w5.tablet, i.ZT.pageHeader3, (0, r.Z)(u, {
                    target: "e1427kem5"
                })("text-decoration:underline;color:", a.w.blueJeans, ";&:hover,:focus,:focus-within{color:", a.w.blueJeans, ";}"))
        },
        1928: function(t, e, n) {
            n.d(e, {
                V: function() {
                    return h
                }
            });
            var r = n(47568),
                i = n(26042),
                a = n(69396),
                o = n(70655),
                c = n(67294),
                u = n(64487),
                s = n(43525);

            function d(t, e) {
                return l.apply(this, arguments)
            }

            function l() {
                return (l = (0, r.Z)((function(t, e) {
                    var n, r, i, a, c;
                    return (0, o.__generator)(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return n = {
                                    "Content-Type": "application/json"
                                }, (r = (0, s.v)("csrftoken")) && (n["X-CSRFToken"] = r), [4, fetch("/api/v4/communicate/subscriptions/", {
                                    method: "POST",
                                    headers: n,
                                    body: JSON.stringify({
                                        email: t,
                                        channel: e
                                    })
                                })];
                            case 1:
                                return [4, (i = o.sent()).json().catch()];
                            case 2:
                                if (a = o.sent(), !i.ok) throw new Error("Failed to create email subscription: ".concat(null !== (c = null === a || void 0 === a ? void 0 : a.detail) && void 0 !== c ? c : "Unknown error"));
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var p = "LOADING",
                g = "ERROR",
                m = "SUCCESS";

            function f(t, e) {
                switch (e.type) {
                    case p:
                        return {
                            loading: !0,
                            error: !1,
                            success: !1
                        };
                    case g:
                        return {
                            loading: !1,
                            error: !0,
                            success: !1
                        };
                    case m:
                        return {
                            loading: !1,
                            error: !1,
                            success: !0
                        };
                    default:
                        return t
                }
            }
            var h = function() {
                var t = (0, c.useReducer)(f, {
                        loading: !1,
                        error: !1,
                        success: !1
                    }),
                    e = t[0],
                    n = t[1],
                    s = function() {
                        var t = (0, r.Z)((function(t) {
                            var e;
                            return (0, o.__generator)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 3, , 4]), n({
                                            type: p
                                        }), t ? [4, d(t, "iterablezapierblog")] : [3, 2];
                                    case 1:
                                        r.sent(), n({
                                            type: m
                                        }), r.label = 2;
                                    case 2:
                                        return [3, 4];
                                    case 3:
                                        return e = r.sent(), n({
                                            type: g
                                        }), (0, u.Tb)(e), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }();
                return (0, a.Z)((0, i.Z)({}, e), {
                    submitEmail: s
                })
            }
        },
        21043: function(t, e, n) {
            n.d(e, {
                n: function() {
                    return r
                }
            });
            var r = function(t) {
                return "".concat(Math.round(t / 60), " min read")
            }
        },
        90443: function(t, e, n) {
            n.d(e, {
                W: function() {
                    return a
                }
            });
            var r = n(2568),
                i = n.n(r),
                a = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "no email available",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = i()(t);
                    return "https://www.gravatar.com/avatar/" + n + "?".concat(e, "d=https://res.cloudinary.com/zapier-media/image/upload/f_auto/q_auto/Zapier%20logos/120px_2x_dt6fwm.png")
                }
        }
    }
]);