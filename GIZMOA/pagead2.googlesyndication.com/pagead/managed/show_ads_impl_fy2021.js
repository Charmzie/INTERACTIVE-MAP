(function(sttc) {
    'use strict';
    var ba, ca = Object.defineProperty,
        ea = globalThis,
        fa = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        ha = {},
        ia = {};

    function ja(a, b, c) {
        if (!c || a != null) {
            c = ia[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function ka(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in ha ? f = ha : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = fa && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? ca(ha, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (ia[d] === void 0 && (a = Math.random() * 1E9 >>> 0, ia[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var ma = Object.create,
        na = Object.setPrototypeOf;

    function oa(a, b) {
        a.prototype = ma(b.prototype);
        a.prototype.constructor = a;
        na(a, b);
        a.bl = b.prototype
    }

    function q(a) {
        return a
    }
    ka("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    ka("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
        }
    }, "es_2021");
    ka("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        oa(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    ka("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ha.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var r = this || self;

    function pa(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function ra(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function ta(a) {
        return Object.prototype.hasOwnProperty.call(a, ua) && a[ua] || (a[ua] = ++wa)
    }
    var ua = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        wa = 0;

    function ya(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ba(a, b, c) {
        if (!a) throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Da(a, b, c) {
        Da = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ya : Ba;
        return Da.apply(null, arguments)
    }

    function Ea(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Fa(a, b, c) {
        a = a.split(".");
        c = c || r;
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ga(a) {
        return a
    }

    function Ha(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.bl = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Ro = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    };
    var Ia = {
        bo: 0,
        ao: 1,
        Zn: 2
    };
    var Ja;

    function La(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ma(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Na(a, b) {
        var c = a.length;
        const d = typeof a === "string" ? a.split("") : a;
        for (--c; c >= 0; --c) c in d && b.call(void 0, d[c], c, a)
    }

    function Pa(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = typeof a === "string" ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ra(a, b) {
        const c = a.length,
            d = Array(c),
            e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Va(a, b) {
        let c = 1;
        Ma(a, function(d, e) {
            c = b.call(void 0, c, d, e, a)
        });
        return c
    }

    function Wa(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Xa(a, b) {
        return La(a, b) >= 0
    }

    function Za(a, b) {
        b = La(a, b);
        let c;
        (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function $a(a, b) {
        let c = 0;
        Na(a, function(d, e) {
            b.call(void 0, d, e, a) && Array.prototype.splice.call(a, e, 1).length == 1 && c++
        })
    }

    function ab(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function bb(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function db(a, b) {
        for (let d = 1; d < arguments.length; d++) {
            const e = arguments[d];
            var c = pa(e);
            if (c == "array" || c == "object" && typeof e.length == "number") {
                c = a.length || 0;
                const f = e.length || 0;
                a.length = c + f;
                for (let g = 0; g < f; g++) a[c + g] = e[g]
            } else a.push(e)
        }
    }

    function eb(a, b, c) {
        return arguments.length <= 2 ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function fb(a, b, c) {
        c = c || gb;
        let d = 0,
            e = a.length,
            f;
        for (; d < e;) {
            const g = d + (e - d >>> 1);
            let h;
            h = c(b, a[g]);
            h > 0 ? d = g + 1 : (e = g, f = !h)
        }
        return f ? d : -d - 1
    }

    function gb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function ib(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = ib.apply(null, eb(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function jb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; c > 0; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };
    var kb = {
        Al: "google_adtest",
        El: "google_ad_client",
        Ol: "google_ad_intent_query",
        Nl: "google_ad_intent_qetid",
        Ml: "google_ad_intent_eids",
        Ll: "google_ad_intents_format",
        Fl: "google_ad_format",
        Hl: "google_ad_height",
        am: "google_ad_width",
        Pl: "google_ad_layout",
        Ql: "google_ad_layout_key",
        Sl: "google_ad_output",
        Tl: "google_ad_region",
        Wl: "google_ad_slot",
        Yl: "google_ad_type",
        Zl: "google_ad_url",
        Hm: "google_gl",
        Pm: "google_enable_ose",
        Zm: "google_full_width_responsive",
        fo: "google_rl_filtering",
        eo: "google_rl_mode",
        ho: "google_rt",
        co: "google_rl_dest_url",
        Kn: "google_max_radlink_len",
        Pn: "google_num_radlinks",
        Qn: "google_num_radlinks_per_unit",
        Dl: "google_ad_channel",
        Jn: "google_max_num_ads",
        Ln: "google_max_responsive_height",
        um: "google_color_border",
        Om: "google_enable_content_recommendations",
        Em: "google_content_recommendation_ui_type",
        Dm: "google_source_type",
        Cm: "google_content_recommendation_rows_num",
        Bm: "google_content_recommendation_columns_num",
        Am: "google_content_recommendation_ad_positions",
        Fm: "google_content_recommendation_use_square_imgs",
        wm: "google_color_link",
        vm: "google_color_line",
        ym: "google_color_url",
        Bl: "google_ad_block",
        Vl: "google_ad_section",
        Cl: "google_ad_callback",
        rm: "google_captcha_token",
        xm: "google_color_text",
        mm: "google_alternate_ad_url",
        Kl: "google_ad_host_tier_id",
        sm: "google_city",
        Il: "google_ad_host",
        Jl: "google_ad_host_channel",
        nm: "google_alternate_color",
        tm: "google_color_bg",
        Qm: "google_encoding",
        Xm: "google_font_face",
        cn: "google_hints",
        vn: "google_image_size",
        Mn: "google_mtl",
        Fo: "google_cpm",
        zm: "google_contents",
        Nn: "google_native_settings_key",
        Gm: "google_country",
        Do: "google_targeting",
        Ym: "google_font_size",
        Mm: "google_disable_video_autoplay",
        Lo: "google_video_product_type",
        Ko: "google_video_doc_id",
        Jo: "google_cust_gender",
        xo: "google_cust_lh",
        wo: "google_cust_l",
        Eo: "google_tfs",
        Cn: "google_kw",
        Ao: "google_tag_for_child_directed_treatment",
        Bo: "google_tag_for_under_age_of_consent",
        ko: "google_region",
        Jm: "google_cust_criteria",
        Ul: "google_safe",
        Im: "google_ctr_threshold",
        mo: "google_resizing_allowed",
        oo: "google_resizing_width",
        no: "google_resizing_height",
        Io: "google_cust_age",
        Fn: "google_language",
        Dn: "google_kw_type",
        Wn: "google_pucrd",
        Un: "google_page_url",
        Co: "google_tag_partner",
        so: "google_restrict_data_processing",
        wl: "google_adbreak_test",
        Gl: "google_ad_frequency_hint",
        yl: "google_admob_interstitial_slot",
        zl: "google_admob_rewarded_slot",
        xl: "google_admob_ads_only",
        Xl: "google_ad_start_delay_hint",
        In: "google_max_ad_content_rating",
        Yn: "google_ad_public_floor",
        Xn: "google_ad_private_floor",
        Go: "google_traffic_source",
        Sn: "google_overlays",
        Vn: "google_privacy_treatments",
        yo: "google_special_category_data",
        Mo: "google_wrap_fullscreen_ad",
        Rl: "google_ad_loaded_callback"
    };

    function mb(a) {
        var b = nb;
        if (!ob(a)) throw b = (typeof b === "function" ? b() : b) ? .concat("\n") ? ? "", Error(b + String(a));
    }

    function pb(a) {
        return a
    }

    function qb(a) {
        a.Xo = !0;
        return a
    }
    let nb = void 0;
    var rb = qb(a => typeof a === "number"),
        ob = qb(a => typeof a === "string"),
        sb = qb(a => !!a && (typeof a === "object" || typeof a === "function"));

    function tb() {
        var a = ob;
        return ub(qb((b, c) => b === void 0 ? !0 : a(b, c)))
    }

    function ub(a) {
        a.ek = !0;
        return a
    }
    var vb = qb(a => Array.isArray(a));

    function xb() {
        return qb(a => vb(a) ? a.every(b => rb(b)) : !1)
    };
    let yb, zb = 64;

    function Ab() {
        try {
            return yb ? ? (yb = new Uint32Array(64)), zb >= 64 && (crypto.getRandomValues(yb), zb = 0), yb[zb++]
        } catch (a) {
            return Math.floor(Math.random() * 2 ** 32)
        }
    };

    function Bb(a, b) {
        if (!rb(a.goog_pvsid)) try {
            const c = Ab() + (Ab() & 2 ** 21 - 1) * 2 ** 32;
            Object.defineProperty(a, "goog_pvsid", {
                value: c,
                configurable: !1
            })
        } catch (c) {
            b.be({
                methodName: 784,
                Gd: c
            })
        }
        a = Number(a.goog_pvsid);
        (!a || a <= 0) && b.be({
            methodName: 784,
            Gd: Error(`Invalid correlator, ${a}`)
        });
        return a || -1
    };
    var Cb, Db;
    a: {
        for (var Eb = ["CLOSURE_FLAGS"], Fb = r, Jb = 0; Jb < Eb.length; Jb++)
            if (Fb = Fb[Eb[Jb]], Fb == null) {
                Db = null;
                break a
            }
        Db = Fb
    }
    var Kb = Db && Db[610401301];
    Cb = Kb != null ? Kb : !1;

    function Lb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Mb(a, b) {
        return a.toLowerCase().indexOf(b.toLowerCase()) != -1
    };

    function Nb() {
        var a = r.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Ob;
    const Pb = r.navigator;
    Ob = Pb ? Pb.userAgentData || null : null;

    function Tb(a) {
        if (!Cb || !Ob) return !1;
        for (let b = 0; b < Ob.brands.length; b++) {
            const {
                brand: c
            } = Ob.brands[b];
            if (c && c.indexOf(a) != -1) return !0
        }
        return !1
    }

    function Ub(a) {
        return Nb().indexOf(a) != -1
    };

    function Vb() {
        return Cb ? !!Ob && Ob.brands.length > 0 : !1
    }

    function Wb() {
        return Vb() ? !1 : Ub("Opera")
    }

    function Xb() {
        return Ub("Firefox") || Ub("FxiOS")
    }

    function Yb() {
        return Ub("Safari") && !(Zb() || (Vb() ? 0 : Ub("Coast")) || Wb() || (Vb() ? 0 : Ub("Edge")) || (Vb() ? Tb("Microsoft Edge") : Ub("Edg/")) || (Vb() ? Tb("Opera") : Ub("OPR")) || Xb() || Ub("Silk") || Ub("Android"))
    }

    function Zb() {
        return Vb() ? Tb("Chromium") : (Ub("Chrome") || Ub("CriOS")) && !(Vb() ? 0 : Ub("Edge")) || Ub("Silk")
    };

    function $b(a) {
        $b[" "](a);
        return a
    }
    $b[" "] = function() {};

    function ac(a, b) {
        try {
            return $b(a[b]), !0
        } catch (c) {}
        return !1
    };
    var bc = Vb() ? !1 : Ub("Trident") || Ub("MSIE"),
        cc = Ub("Edge") || bc,
        dc = Ub("Gecko") && !(Mb(Nb(), "WebKit") && !Ub("Edge")) && !(Ub("Trident") || Ub("MSIE")) && !Ub("Edge"),
        ec = Mb(Nb(), "WebKit") && !Ub("Edge");

    function fc() {
        return !1
    }

    function gc() {
        return !0
    }

    function lc(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function mc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function nc(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function oc(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function pc(a, b) {
        let c = 0;
        return function(d) {
            r.clearTimeout(c);
            const e = arguments;
            c = r.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function qc(a, b) {
        function c() {
            e = r.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };

    function rc() {
        return Cb && Ob ? Ob.mobile : !sc() && (Ub("iPod") || Ub("iPhone") || Ub("Android") || Ub("IEMobile"))
    }

    function sc() {
        return Cb && Ob ? !Ob.mobile && (Ub("iPad") || Ub("Android") || Ub("Silk")) : Ub("iPad") || Ub("Android") && !Ub("Mobile") || Ub("Silk")
    };

    function tc(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function uc(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function vc(a) {
        var b = wc;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function xc(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function yc(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const zc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ac(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < zc.length; f++) c = zc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    /* 
     
     Copyright Google LLC 
     SPDX-License-Identifier: Apache-2.0 
    */
    let Bc = globalThis.trustedTypes,
        Cc;

    function Fc() {
        let a = null;
        if (!Bc) return a;
        try {
            const b = c => c;
            a = Bc.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (b) {}
        return a
    }

    function Gc() {
        Cc === void 0 && (Cc = Fc());
        return Cc
    };
    var Hc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function Ic(a) {
        const b = Gc();
        a = b ? b.createScriptURL(a) : a;
        return new Hc(a)
    }

    function Jc(a) {
        if (a instanceof Hc) return a.g;
        throw Error("");
    };
    var Kc = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g
            }
        },
        Lc = new Kc("about:invalid#zClosurez");

    function Mc(a) {
        return a instanceof Kc
    }

    function Nc(a) {
        if (Mc(a)) return a.g;
        throw Error("");
    };
    class Oc {
        constructor(a) {
            this.hk = a
        }
    }

    function Pc(a) {
        return new Oc(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Qc = [Pc("data"), Pc("http"), Pc("https"), Pc("mailto"), Pc("ftp"), new Oc(a => /^[^:]*([/?#]|$)/.test(a))];

    function Tc(a, b = Qc) {
        if (Mc(a)) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof Oc && d.hk(a)) return new Kc(a)
        }
    }
    var Uc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function Vc(a) {
        if (Uc.test(a)) return a
    };

    function Wc(a) {
        var b = Vc("#");
        b !== void 0 && (a.href = b)
    };

    function Xc(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    var Yc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function Zc(a) {
        const b = Gc();
        a = b ? b.createHTML(a) : a;
        return new Yc(a)
    }

    function $c(a) {
        if (a instanceof Yc) return a.g;
        throw Error("");
    };

    function ad(a = document) {
        a = a.querySelector ? .("script[nonce]");
        return a == null ? "" : a.nonce || a.getAttribute("nonce") || ""
    };

    function bd(a, b) {
        a.src = Jc(b);
        (b = ad(a.ownerDocument)) && a.setAttribute("nonce", b)
    };
    var cd = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g
        }
    };

    function dd(a, b) {
        if (a.nodeType === 1 && /^(script|style)$/i.test(a.tagName)) throw Error("");
        a.innerHTML = $c(b)
    }

    function ed(a, b, c) {
        var d = [fd `width`, fd `height`];
        if (d.length === 0) throw Error("");
        d = d.map(f => {
            if (f instanceof cd) f = f.g;
            else throw Error("");
            return f
        });
        const e = b.toLowerCase();
        if (d.every(f => e.indexOf(f) !== 0)) throw Error(`Attribute "${b}" does not match any of the allowed prefixes.`);
        a.setAttribute(b, c)
    };
    var gd = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g
        }
    };

    function hd(a) {
        if (a instanceof gd) return a.g;
        throw Error("");
    };

    function id(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };

    function jd(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : r.document.createElement("div");
        return a.replace(kd, function(e, f) {
            let g = c[e];
            if (g) return g;
            f.charAt(0) == "#" && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (dd(d, Zc(e + " ")), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var kd = /&([^;\s<&]+);?/g;

    function pd(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function qd(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function rd(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var sd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        td = /#|$/;

    function ud(a, b) {
        const c = a.search(td);
        a: {
            var d = 0;
            for (var e = b.length;
                (d = a.indexOf(b, d)) >= 0 && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (f == 38 || f == 63)
                    if (f = a.charCodeAt(d + e), !f || f == 61 || f == 38 || f == 35) break a;
                d += e + 1
            }
            d = -1
        }
        if (d < 0) return null;
        e = a.indexOf("&", d);
        if (e < 0 || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
    };

    function fd(a) {
        return new cd(a[0].toLowerCase())
    };

    function vd(a) {
        return new gd(a[0])
    };

    function wd(a) {
        return a instanceof Yc ? a : Zc(xd(String(a)))
    }

    function xd(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }

    function yd(a) {
        return zd(a)
    }

    function zd(a) {
        const b = wd("");
        return Zc(a.map(c => $c(wd(c))).join($c(b).toString()))
    }
    const Ad = /^[a-z][a-z\d-]*$/i,
        Bd = "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" ");
    var Cd = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ");
    const Dd = ["action", "formaction", "href"];

    function Ed(a) {
        if (!Ad.test(a)) throw Error("");
        if (Bd.indexOf(a.toUpperCase()) !== -1) throw Error("");
    }

    function Fd(a, b, c) {
        Ed(a);
        let d = `<${a}`;
        b && (d += Gd(b));
        Array.isArray(c) || (c = c === void 0 ? [] : [c]);
        Cd.indexOf(a.toUpperCase()) !== -1 ? d += ">" : (b = yd(c.map(e => e instanceof Yc ? e : wd(String(e)))), d += ">" + b.toString() + "</" + a + ">");
        return Zc(d)
    }

    function Gd(a) {
        var b = "";
        const c = Object.keys(a);
        for (let f = 0; f < c.length; f++) {
            var d = c[f],
                e = a[d];
            if (!Ad.test(d)) throw Error("");
            if (e !== void 0 && e !== null) {
                if (/^on./i.test(d)) throw Error("");
                Dd.indexOf(d.toLowerCase()) !== -1 && (e = Mc(e) ? e.toString() : Vc(String(e)) || "about:invalid#zClosurez");
                e = `${d}="${wd(String(e))}"`;
                b += " " + e
            }
        }
        return b
    };

    function Jd(a, ...b) {
        if (b.length === 0) return Ic(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Ic(c)
    }

    function Kd(a, b) {
        a = Jc(a).toString();
        const c = a.split(/[?#]/),
            d = /[?]/.test(a) ? "?" + c[1] : "";
        return Ld(c[0], d, /[#]/.test(a) ? "#" + (d ? c[2] : c[1]) : "", b)
    }

    function Ld(a, b, c, d) {
        function e(g, h) {
            g != null && (Array.isArray(g) ? g.forEach(k => e(k, h)) : (b += f + encodeURIComponent(h) + "=" + encodeURIComponent(g), f = "&"))
        }
        let f = b.length ? "&" : "?";
        d.constructor === Object && (d = Object.entries(d));
        Array.isArray(d) ? d.forEach(g => e(g[1], g[0])) : d.forEach(e);
        return Ic(a + b + c)
    };

    function Md(a) {
        try {
            return !!a && a.location.href != null && ac(a, "foo")
        } catch {
            return !1
        }
    }

    function Nd(a, b = r) {
        b = Od(b);
        let c = 0;
        for (; b && c++ < 40 && !a(b);) b = Od(b)
    }

    function Od(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function Pd(a) {
        return Md(a.top) ? a.top : null
    }

    function Qd(a, b) {
        const c = Rd("SCRIPT", a);
        bd(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Sd(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Td() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function Ud(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Vd(a) {
        const b = [];
        Ud(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Wd(a) {
        const b = a.length;
        if (b == 0) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    }
    var Yd = nc(() => Wa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Xd) || Math.random() < 1E-4);
    const Xd = a => Nb().indexOf(a) != -1;
    var Zd = /^([0-9.]+)px$/,
        $d = /^(-?[0-9.]{1,30})$/;

    function ae(a) {
        if (!$d.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function be(a) {
        return (a = Zd.exec(a)) ? +a[1] : null
    }
    var je = {
        bm: "allow-forms",
        cm: "allow-modals",
        dm: "allow-orientation-lock",
        em: "allow-pointer-lock",
        fm: "allow-popups",
        gm: "allow-popups-to-escape-sandbox",
        hm: "allow-presentation",
        im: "allow-same-origin",
        jm: "allow-scripts",
        km: "allow-top-navigation",
        lm: "allow-top-navigation-by-user-activation"
    };
    const ke = nc(() => Vd(je));

    function le() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = ke();
        return a.length ? Pa(b, c => !Xa(a, c)) : b
    }

    function me() {
        const a = Rd("IFRAME"),
            b = {};
        Ma(ke(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var ne = () => {
            const a = me();
            return !(!a["allow-top-navigation-by-user-activation"] || !a["allow-popups-to-escape-sandbox"])
        },
        oe = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        pe = (a, b) => {
            for (let c = 0; c < 50; ++c) {
                if (oe(a, b)) return a;
                if (!(a = Od(a))) break
            }
            return null
        },
        qe = nc(() => rc() ? 2 : sc() ? 1 : 0),
        u = (a, b) => {
            Ud(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        se = (a, b) => {
            if ("length" in a.style) {
                a = a.style;
                const c = a.length;
                for (let d = 0; d < c; d++) {
                    const e = a[d];
                    b(a[e], e, a)
                }
            } else a = re(a.style.cssText), Ud(a, b)
        },
        re = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                Ma((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d && e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        te = a => {
            const b = /!\s*important/i;
            se(a, (c, d) => {
                b.test(c) ? b.test(c) : a.style.setProperty(d, c, "important")
            })
        };
    const ue = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        ve = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        we = /.*domain\.test$/,
        xe = /\.prod\.google\.com(:\d+)?$/;
    var ye = a => ue[a] || ve.test(a) || we.test(a) || xe.test(a);
    let ze = [];
    const Ae = () => {
        const a = ze;
        ze = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var Be = (a, b) => Bb(a, {
            be: ({
                methodName: c,
                Gd: d
            }) => void b ? .na(c, d)
        }),
        Ce = (a, b) => {
            a.document.readyState === "complete" ? (ze.push(b), ze.length == 1 && (window.Promise ? Promise.resolve().then(Ae) : window.setImmediate ? setImmediate(Ae) : setTimeout(Ae, 0))) : a.addEventListener("load", b)
        },
        De = (a, b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function Rd(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var Ee = a => {
            let b = a;
            for (; a && a != a.parent;) a = a.parent, Md(a) && (b = a);
            return b
        },
        Fe = a => {
            var b = Pd(a);
            if (!b) return 1;
            a = qe() === 0;
            const c = !!b.document.querySelector('meta[name=viewport][content*="width=device-width"]'),
                d = b.innerWidth;
            b = b.outerWidth;
            if (d === 0) return 1;
            const e = Math.round((b / d + Number.EPSILON) * 100) / 100;
            return e === 1 ? 1 : a || c ? e : Math.round((b / d / .4 + Number.EPSILON) * 100) / 100
        };
    let Ge;

    function He(a) {
        return (Ge || (Ge = new TextEncoder)).encode(a)
    };

    function Ie(a) {
        r.setTimeout(() => {
            throw a;
        }, 0)
    };
    var Se = {},
        Te = null;

    function Ue(a) {
        var b = 3;
        b === void 0 && (b = 0);
        Ve();
        b = Se[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function We(a) {
        const b = [];
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            let e = a.charCodeAt(d);
            e > 255 && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return Ue(b)
    }

    function Xe(a) {
        const b = [];
        Ye(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Ye(a, b) {
        function c(e) {
            for (; d < a.length;) {
                const f = a.charAt(d++),
                    g = Te[f];
                if (g != null) return g;
                if (!/^[\s\xa0]*$/.test(f)) throw Error("Unknown base64 encoding at char: " + f);
            }
            return e
        }
        Ve();
        let d = 0;
        for (;;) {
            const e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (h === 64 && e === -1) break;
            b(e << 2 | f >> 4);
            g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h))
        }
    }

    function Ve() {
        if (!Te) {
            Te = {};
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                b = ["+/=", "+/", "-_=", "-_.", "-_"];
            for (let c = 0; c < 5; c++) {
                const d = a.concat(b[c].split(""));
                Se[c] = d;
                for (let e = 0; e < d.length; e++) {
                    const f = d[e];
                    Te[f] === void 0 && (Te[f] = e)
                }
            }
        }
    };
    var Ze = typeof structuredClone != "undefined";
    let $e = void 0,
        af;

    function bf(a) {
        if (af) throw Error("");
        af = b => {
            r.setTimeout(() => {
                a(b)
            }, 0)
        }
    }

    function cf(a) {
        if (af) try {
            af(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function df() {
        const a = Error();
        id(a, "incident");
        af ? cf(a) : Ie(a)
    }

    function ef(a) {
        a = Error(a);
        id(a, "warning");
        cf(a);
        return a
    };

    function ff(a, b = !1) {
        return b && Symbol.for && a ? Symbol.for(a) : a != null ? Symbol(a) : Symbol()
    }
    var gf = ff(),
        hf = ff(),
        jf = ff(),
        kf = ff(),
        lf = ff("m_m", !0);
    const x = ff("jas", !0);
    var mf;
    const nf = [];
    nf[x] = 7;
    mf = Object.freeze(nf);

    function of (a) {
        if (4 & a) return 512 & a ? 512 : 1024 & a ? 1024 : 0
    }

    function pf(a) {
        a[x] |= 34;
        return a
    }

    function qf(a) {
        a[x] |= 32;
        return a
    };
    var rf = {};

    function sf(a, b) {
        return b === void 0 ? a.j !== tf && !!(2 & (a.P[x] | 0)) : !!(2 & b) && a.j !== tf
    }
    const tf = {};
    class uf {
        constructor(a, b, c) {
            this.g = a;
            this.i = b;
            this.j = c
        }
        next() {
            const a = this.g.next();
            a.done || (a.value = this.i.call(this.j, a.value));
            return a
        }[Symbol.iterator]() {
            return this
        }
    }
    var vf = Object.freeze({});

    function wf(a, b, c) {
        b = b & 128 ? 0 : -1;
        const d = a.length;
        var e;
        if (e = !!d) e = a[d - 1], e = e != null && typeof e === "object" && e.constructor === Object;
        const f = d + (e ? -1 : 0);
        for (let g = 0; g < f; g++) c(g - b, a[g]);
        if (e) {
            a = a[d - 1];
            for (const g in a) Object.prototype.hasOwnProperty.call(a, g) && !isNaN(g) && c(+g, a[g])
        }
    }
    var Mf = {};

    function Nf(a) {
        if (ob(a)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a)) throw Error(String(a));
        } else if (rb(a) && !Number.isSafeInteger(a)) throw Error(String(a));
        return BigInt(a)
    }
    var Qf = qb(a => a >= Of && a <= Pf);
    const Of = BigInt(Number.MIN_SAFE_INTEGER),
        Pf = BigInt(Number.MAX_SAFE_INTEGER);
    let Rf = 0,
        Sf = 0,
        Tf;

    function Uf(a) {
        const b = a >>> 0;
        Rf = b;
        Sf = (a - b) / 4294967296 >>> 0
    }

    function Vf(a) {
        if (a < 0) {
            Uf(-a);
            a = Rf;
            var b = Sf;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            Rf = c >>> 0;
            Sf = d >>> 0
        } else Uf(a)
    }

    function Wf(a, b) {
        const c = b * 4294967296 + (a >>> 0);
        return Number.isSafeInteger(c) ? c : Xf(a, b)
    }

    function Xf(a, b) {
        b >>>= 0;
        a >>>= 0;
        var c;
        b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }

    function Yf() {
        var a = Rf,
            b = Sf,
            c;
        b & 2147483648 ? c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : c = Xf(a, b);
        return c
    }

    function Zf(a) {
        a.length < 16 ? Vf(Number(a)) : (a = BigInt(a), Rf = Number(a & BigInt(4294967295)) >>> 0, Sf = Number(a >> BigInt(32) & BigInt(4294967295)))
    };
    const $f = typeof BigInt === "function" ? BigInt.asIntN : void 0,
        ag = typeof BigInt === "function" ? BigInt.asUintN : void 0,
        bg = Number.isSafeInteger,
        cg = Number.isFinite,
        dg = Math.trunc;

    function eg(a) {
        if (a != null && typeof a !== "number") throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);
        return a
    }

    function fg(a) {
        if (a == null || typeof a === "number") return a;
        if (a === "NaN" || a === "Infinity" || a === "-Infinity") return Number(a)
    }

    function gg(a) {
        if (typeof a !== "boolean") throw Error(`Expected boolean but got ${pa(a)}: ${a}`);
        return a
    }

    function hg(a) {
        if (a == null || typeof a === "boolean") return a;
        if (typeof a === "number") return !!a
    }
    const ig = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function jg(a) {
        switch (typeof a) {
            case "bigint":
                return !0;
            case "number":
                return cg(a);
            case "string":
                return ig.test(a);
            default:
                return !1
        }
    }

    function kg(a) {
        if (!cg(a)) throw ef("enum");
        return a | 0
    }

    function lg(a) {
        return a == null ? a : cg(a) ? a | 0 : void 0
    }

    function mg(a) {
        if (typeof a !== "number") throw ef("int32");
        if (!cg(a)) throw ef("int32");
        return a | 0
    }

    function ng(a) {
        if (a == null) return a;
        if (typeof a === "string" && a) a = +a;
        else if (typeof a !== "number") return;
        return cg(a) ? a | 0 : void 0
    }

    function og(a) {
        if (typeof a !== "number") throw ef("uint32");
        if (!cg(a)) throw ef("uint32");
        return a >>> 0
    }

    function pg(a) {
        if (a == null) return a;
        if (typeof a === "string" && a) a = +a;
        else if (typeof a !== "number") return;
        return cg(a) ? a >>> 0 : void 0
    }

    function qg(a, b = 0) {
        if (!jg(a)) throw ef("int64");
        const c = typeof a;
        switch (b) {
            case 512:
                switch (c) {
                    case "string":
                        return rg(a);
                    case "bigint":
                        return String($f(64, a));
                    default:
                        return sg(a)
                }
            case 1024:
                switch (c) {
                    case "string":
                        return tg(a);
                    case "bigint":
                        return Nf($f(64, a));
                    default:
                        return ug(a)
                }
            case 0:
                switch (c) {
                    case "string":
                        return rg(a);
                    case "bigint":
                        return Nf($f(64, a));
                    default:
                        return vg(a)
                }
            default:
                return Xc(b, "Unknown format requested type for int64")
        }
    }

    function wg(a) {
        return a == null ? a : qg(a, 0)
    }

    function xg(a) {
        if (a[0] === "-") return !1;
        const b = a.length;
        return b < 20 ? !0 : b === 20 && Number(a.substring(0, 6)) < 184467
    }

    function yg(a) {
        const b = a.length;
        return a[0] === "-" ? b < 20 ? !0 : b === 20 && Number(a.substring(0, 7)) > -922337 : b < 19 ? !0 : b === 19 && Number(a.substring(0, 6)) < 922337
    }

    function zg(a) {
        if (a < 0) {
            Vf(a);
            var b = Xf(Rf, Sf);
            a = Number(b);
            return bg(a) ? a : b
        }
        b = String(a);
        if (xg(b)) return b;
        Vf(a);
        return Wf(Rf, Sf)
    }

    function vg(a) {
        a = dg(a);
        if (!bg(a)) {
            Vf(a);
            var b = Rf,
                c = Sf;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = Wf(b, c);
            a = typeof b === "number" ? a ? -b : b : a ? "-" + b : b
        }
        return a
    }

    function Ag(a) {
        a = dg(a);
        return a >= 0 && bg(a) ? a : zg(a)
    }

    function sg(a) {
        a = dg(a);
        if (bg(a)) a = String(a);
        else {
            {
                const b = String(a);
                yg(b) ? a = b : (Vf(a), a = Yf())
            }
        }
        return a
    }

    function Bg(a) {
        a = dg(a);
        if (a >= 0 && bg(a)) a = String(a);
        else {
            {
                const b = String(a);
                xg(b) ? a = b : (Vf(a), a = Xf(Rf, Sf))
            }
        }
        return a
    }

    function rg(a) {
        var b = dg(Number(a));
        if (bg(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        yg(a) || (Zf(a), a = Yf());
        return a
    }

    function tg(a) {
        var b = dg(Number(a));
        if (bg(b)) return Nf(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return Nf($f(64, BigInt(a)))
    }

    function ug(a) {
        return bg(a) ? Nf(vg(a)) : Nf(sg(a))
    }

    function Cg(a) {
        var b = dg(Number(a));
        if (bg(b) && b >= 0) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        xg(a) || (Zf(a), a = Xf(Rf, Sf));
        return a
    }

    function Dg(a) {
        if (a == null) return a;
        if (typeof a === "bigint") return Qf(a) ? a = Number(a) : (a = $f(64, a), a = Qf(a) ? Number(a) : String(a)), a;
        if (jg(a)) return typeof a === "number" ? vg(a) : rg(a)
    }

    function Eg(a) {
        const b = typeof a;
        if (a == null) return a;
        if (b === "bigint") return Nf($f(64, a));
        if (jg(a)) return b === "string" ? tg(a) : ug(a)
    }

    function Fg(a, b = 0) {
        if (!jg(a)) throw ef("uint64");
        const c = typeof a;
        switch (b) {
            case 512:
                switch (c) {
                    case "string":
                        return Cg(a);
                    case "bigint":
                        return String(ag(64, a));
                    default:
                        return Bg(a)
                }
            case 1024:
                switch (c) {
                    case "string":
                        return b = dg(Number(a)), bg(b) && b >= 0 ? a = Nf(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), a = Nf(ag(64, BigInt(a)))), a;
                    case "bigint":
                        return Nf(ag(64, a));
                    default:
                        return bg(a) ? Nf(Ag(a)) : Nf(Bg(a))
                }
            case 0:
                switch (c) {
                    case "string":
                        return Cg(a);
                    case "bigint":
                        return Nf(ag(64, a));
                    default:
                        return Ag(a)
                }
            default:
                return Xc(b,
                    "Unknown format requested type for int64")
        }
    }

    function Gg(a) {
        return a == null ? a : Fg(a, 0)
    }

    function Hg(a) {
        const b = typeof a;
        if (a == null) return a;
        if (b === "bigint") return String(ag(64, a));
        if (jg(a)) return b === "string" ? Cg(a) : Bg(a)
    }

    function Ig(a) {
        if (a == null) return a;
        const b = typeof a;
        if (b === "bigint") return String($f(64, a));
        if (jg(a)) {
            if (b === "string") return rg(a);
            if (b === "number") return vg(a)
        }
    }

    function Jg(a) {
        if (a == null) return a;
        const b = typeof a;
        if (b === "bigint") return String(ag(64, a));
        if (jg(a)) {
            if (b === "string") return Cg(a);
            if (b === "number") return Ag(a)
        }
    }

    function Kg(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function Lg(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function Sg(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function Tg(a, b, c, d) {
        if (a != null && typeof a === "object" && a[lf] === rf) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? ((a = b[gf]) || (a = new b, pf(a.P), a = b[gf] = a), b = a) : b = new b : b = void 0, b;
        c = a[x] | 0;
        d = c | d & 32 | d & 2;
        d !== c && (a[x] = d);
        return new b(a)
    }

    function Ug(a, b, c) {
        return b ? Kg(a) : Sg(a) ? ? (c ? "" : void 0)
    };

    function Vg(a) {
        return a
    };
    const Wg = {},
        Xg = (() => class extends Map {
            constructor() {
                super()
            }
        })();

    function Yg(a) {
        return a
    }

    function Zg(a) {
        if (a.ac & 2) throw Error("Cannot mutate an immutable Map");
    }
    var ch = class extends Xg {
        constructor(a, b, c = Yg, d = Yg) {
            super();
            this.ac = a[x] | 0;
            this.Vb = b;
            this.Zd = c;
            this.ni = this.Vb ? $g : d;
            for (let e = 0; e < a.length; e++) {
                const f = a[e],
                    g = c(f[0], !1, !0);
                let h = f[1];
                b ? h === void 0 && (h = null) : h = d(f[1], !1, !0, void 0, void 0, this.ac);
                super.set(g, h)
            }
        }
        jl() {
            var a = ah;
            if (this.size !== 0) return Array.from(super.entries(), a)
        }
        ji() {
            return Array.from(super.entries())
        }
        clear() {
            Zg(this);
            super.clear()
        }
        delete(a) {
            Zg(this);
            return super.delete(this.Zd(a, !0, !1))
        }
        entries() {
            if (this.Vb) {
                var a = super.keys();
                a = new uf(a,
                    bh, this)
            } else a = super.entries();
            return a
        }
        values() {
            if (this.Vb) {
                var a = super.keys();
                a = new uf(a, ch.prototype.get, this)
            } else a = super.values();
            return a
        }
        forEach(a, b) {
            this.Vb ? super.forEach((c, d, e) => {
                a.call(b, e.get(d), d, e)
            }) : super.forEach(a, b)
        }
        set(a, b) {
            Zg(this);
            a = this.Zd(a, !0, !1);
            return a == null ? this : b == null ? (super.delete(a), this) : super.set(a, this.ni(b, !0, !0, this.Vb, !1, this.ac))
        }
        has(a) {
            return super.has(this.Zd(a, !1, !1))
        }
        get(a) {
            a = this.Zd(a, !1, !1);
            const b = super.get(a);
            if (b !== void 0) {
                var c = this.Vb;
                return c ? (c =
                    this.ni(b, !1, !0, c, this.aj, this.ac), c !== b && super.set(a, c), c) : b
            }
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    ch.prototype.toJSON = void 0;

    function $g(a, b, c, d, e, f) {
        a = Tg(a, d, c, f);
        e && (a = dh(a));
        return a
    }

    function bh(a) {
        return [a, this.get(a)]
    }
    let eh;

    function fh() {
        return eh || (eh = new ch(pf([]), void 0, void 0, void 0, Wg))
    };

    function gh(a, b, c, d) {
        var e = d !== void 0;
        d = !!d;
        const f = [];
        var g = a.length;
        let h, k = 4294967295,
            l = !1;
        const m = !!(b & 64),
            n = m ? b & 128 ? 0 : -1 : void 0;
        b & 1 || (h = g && a[g - 1], h != null && typeof h === "object" && h.constructor === Object ? (g--, k = g) : h = void 0, !m || b & 128 || e || (l = !0, k = (hh ? ? Vg)(k - n, n, a, h) + n));
        b = void 0;
        for (e = 0; e < g; e++) {
            let p = a[e];
            if (p != null && (p = c(p, d)) != null)
                if (m && e >= k) {
                    const w = e - n;
                    (b ? ? (b = {}))[w] = p
                } else f[e] = p
        }
        if (h)
            for (let p in h) {
                if (!Object.prototype.hasOwnProperty.call(h, p)) continue;
                a = h[p];
                if (a == null || (a = c(a, d)) == null) continue;
                g = +p;
                let w;
                m && !Number.isNaN(g) && (w = g + n) < k ? f[w] = a : (b ? ? (b = {}))[p] = a
            }
        b && (l ? f.push(b) : f[k] = b);
        return f
    }

    function ah(a) {
        a[0] = ih(a[0]);
        a[1] = ih(a[1]);
        return a
    }

    function ih(a) {
        switch (typeof a) {
            case "number":
                return Number.isFinite(a) ? a : "" + a;
            case "bigint":
                return Qf(a) ? Number(a) : "" + a;
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (Array.isArray(a)) {
                    const b = a[x] | 0;
                    return a.length === 0 && b & 1 ? void 0 : gh(a, b, ih)
                }
                if (a[lf] === rf) return jh(a);
                if (a instanceof ch) return a.jl();
                return
        }
        return a
    }
    var kh = Ze ? structuredClone : a => gh(a, 0, ih);
    let hh;

    function jh(a) {
        a = a.P;
        return gh(a, a[x] | 0, ih)
    };
    let lh, mh;

    function nh(a) {
        switch (typeof a) {
            case "boolean":
                return lh || (lh = [0, void 0, !0]);
            case "number":
                return a > 0 ? void 0 : a === 0 ? mh || (mh = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    }

    function oh(a, b, c) {
        return a = ph(a, b[0], b[1], c ? 1 : 2)
    }

    function ph(a, b, c, d = 0) {
        if (a == null) {
            var e = 32;
            c ? (a = [c], e |= 128) : a = [];
            b && (e = e & -8380417 | (b & 1023) << 13)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            e = a[x] | 0;
            2048 & e && !(2 & e) && qh();
            if (e & 256) throw Error("farr");
            if (e & 64) return d !== 0 || e & 2048 || (a[x] = e | 2048), a;
            if (c && (e |= 128, c !== a[0])) throw Error("mid");
            a: {
                c = a;e |= 64;
                var f = c.length;
                if (f) {
                    var g = f - 1;
                    const k = c[g];
                    if (k != null && typeof k === "object" && k.constructor === Object) {
                        b = e & 128 ? 0 : -1;
                        g -= b;
                        if (g >= 1024) throw Error("pvtlmt");
                        for (var h in k)
                            if (Object.prototype.hasOwnProperty.call(k,
                                    h))
                                if (f = +h, f < g) c[f + b] = k[h], delete k[h];
                                else break;
                        e = e & -8380417 | (g & 1023) << 13;
                        break a
                    }
                }
                if (b) {
                    h = Math.max(b, f - (e & 128 ? 0 : -1));
                    if (h > 1024) throw Error("spvt");
                    e = e & -8380417 | (h & 1023) << 13
                }
            }
        }
        e |= 64;
        d === 0 && (e |= 2048);
        a[x] = e;
        return a
    }

    function qh() {
        if (kf != null) {
            var a = $e ? ? ($e = {});
            var b = a[kf] || 0;
            b >= 5 || (a[kf] = b + 1, df())
        }
    };

    function rh(a, b) {
        if (typeof a !== "object") return a;
        if (Array.isArray(a)) {
            var c = a[x] | 0;
            return a.length === 0 && c & 1 ? void 0 : sh(a, c, b)
        }
        if (a[lf] === rf) return th(a);
        if (a instanceof ch) {
            c = a.ac;
            if (c & 2) return a;
            if (a.size) {
                b = pf(a.ji());
                if (a.Vb)
                    for (a = 0; a < b.length; a++) {
                        const d = b[a];
                        let e = d[1];
                        e == null || typeof e !== "object" ? e = void 0 : e[lf] === rf ? e = th(e) : Array.isArray(e) ? e = sh(e, e[x] | 0, !!(c & 32)) : e = void 0;
                        d[1] = e
                    }
                return b
            }
        }
    }

    function sh(a, b, c) {
        if (b & 2) return a;
        !c || 4096 & b || 16 & b ? a = uh(a, b, !1, c && !(b & 16)) : (a[x] |= 34, b & 4 && Object.freeze(a));
        return a
    }

    function th(a) {
        const b = a.P,
            c = b[x] | 0;
        return sf(a, c) ? a : uh(b, c)
    }

    function vh(a) {
        const b = a.P;
        return new a.constructor(uh(b, b[x] | 0, !1))
    }

    function uh(a, b, c, d) {
        d ? ? (d = !!(34 & b));
        a = gh(a, b, rh, d);
        d = 32;
        c && (d |= 2);
        b = b & 8380609 | d;
        a[x] = b;
        return a
    }

    function dh(a) {
        const b = a.P,
            c = b[x] | 0;
        return sf(a, c) ? new a.constructor(uh(b, c, !1)) : a
    }

    function wh(a) {
        const b = a.P,
            c = b[x] | 0;
        return sf(a, c) ? a : new a.constructor(uh(b, c, !0))
    }

    function xh(a) {
        if (a.j !== tf) return !1;
        let b = a.P;
        b = uh(b, b[x] | 0);
        a.P = b;
        a.j = void 0;
        a.D = void 0;
        return !0
    }

    function yh(a) {
        if (!xh(a) && sf(a, a.P[x] | 0)) throw Error();
    };
    const zh = Nf(0),
        Ah = {};

    function y(a, b, c, d, e) {
        b = Bh(a.P, b, c, e);
        if (b !== null || d && a.D !== tf) return b
    }

    function Bh(a, b, c, d) {
        if (b === -1) return null;
        const e = b + (c ? 0 : -1),
            f = a.length - 1;
        let g, h;
        if (!(f < 1 + (c ? 0 : -1))) {
            if (e >= f)
                if (g = a[f], g != null && typeof g === "object" && g.constructor === Object) c = g[b], h = !0;
                else if (e === f) c = g;
            else return;
            else c = a[e];
            if (d && c != null) {
                d = d(c);
                if (d == null) return d;
                if (!Object.is(d, c)) return h ? g[b] = d : a[e] = d, d
            }
            return c
        }
    }

    function Ch(a, b, c) {
        yh(a);
        const d = a.P;
        Dh(d, d[x] | 0, b, c);
        return a
    }

    function Dh(a, b, c, d, e) {
        const f = c + (e ? 0 : -1);
        var g = a.length - 1;
        if (g >= 1 + (e ? 0 : -1) && f >= g) {
            const h = a[g];
            if (h != null && typeof h === "object" && h.constructor === Object) return h[c] = d, b
        }
        if (f <= g) return a[f] = d, b;
        d !== void 0 && (g = (b ? ? (b = a[x] | 0)) >> 13 & 1023 || 536870912, c >= g ? d != null && (a[g + (e ? 0 : -1)] = {
            [c]: d
        }) : a[f] = d);
        return b
    }

    function Eh(a, b, c) {
        a = a.P;
        return Fh(a, a[x] | 0, b, c) !== void 0
    }

    function Gh(a, b, c, d) {
        const e = a.P;
        var f = e[x] | 0;
        a = Hh(a, d) === c ? c : -1;
        return Fh(e, f, b, a) !== void 0
    }

    function Ih(a, b, c) {
        return y(a, b, void 0, c, fg)
    }

    function Jh(a) {
        return a === vf ? 2 : 4
    }

    function Kh(a, b, c, d, e, f, g) {
        let h = a.P,
            k = h[x] | 0;
        d = sf(a, k) ? 1 : d;
        e = !!e || d === 3;
        d === 2 && xh(a) && (h = a.P, k = h[x] | 0);
        let l = Lh(h, b, g),
            m = l === mf ? 7 : l[x] | 0,
            n = Mh(m, k);
        var p = n;
        4 & p ? f == null ? a = !1 : (!e && f === 0 && (512 & p || 1024 & p) && (a.constructor[jf] = (a.constructor[jf] | 0) + 1) < 5 && df(), a = f === 0 ? !1 : !(f & p)) : a = !0;
        if (a) {
            4 & n && (l = [...l], m = 0, n = Nh(n, k), k = Dh(h, k, b, l, g));
            let w = p = 0;
            for (; p < l.length; p++) {
                const v = c(l[p]);
                v != null && (l[w++] = v)
            }
            w < p && (l.length = w);
            c = (n | 4) & -513;
            n = c &= -1025;
            f && (n |= f);
            n &= -4097
        }
        n !== m && (l[x] = n, 2 & n && Object.freeze(l));
        return l =
            Oh(l, n, h, k, b, g, d, a, e)
    }

    function Oh(a, b, c, d, e, f, g, h, k) {
        let l = b;
        g === 1 || (g !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d) ? Ph(b) || (b |= !a.length || h && !(4096 & b) || 32 & d && !(4096 & b || 16 & b) ? 2 : 256, b !== l && (a[x] = b), Object.freeze(a)) : (g === 2 && Ph(b) && (a = [...a], l = 0, b = Nh(b, d), Dh(c, d, e, a, f)), Ph(b) || (k || (b |= 16), b !== l && (a[x] = b)));
        return a
    }

    function Lh(a, b, c) {
        a = Bh(a, b, c);
        return Array.isArray(a) ? a : mf
    }

    function Mh(a, b) {
        2 & b && (a |= 2);
        return a | 1
    }

    function Ph(a) {
        return !!(2 & a) && !!(4 & a) || !!(256 & a)
    }

    function Qh(a) {
        var b = Rh;
        let c;
        var d = a.P;
        var e = d[x] | 0;
        c = sf(a, e);
        a: {!c && xh(a) && (d = a.P, e = d[x] | 0);
            var f = Bh(d, 14);a = !1;
            if (f == null) {
                if (c) {
                    d = fh();
                    break a
                }
                f = []
            } else if (f.constructor === ch)
                if (f.ac & 2 && !c) f = f.ji();
                else {
                    d = f;
                    break a
                }
            else Array.isArray(f) ? a = !!((f[x] | 0) & 2) : f = [];
            if (c) {
                if (!f.length) {
                    d = fh();
                    break a
                }
                a || (a = !0, pf(f))
            } else if (a) {
                a = !1;
                f = [...f];
                for (let g = 0; g < f.length; g++) {
                    const h = f[g] = [...f[g]];
                    Array.isArray(h[1]) && (h[1] = pf(h[1]))
                }
            }!a && e & 32 && qf(f);a = new ch(f, b, Ug, void 0);Dh(d, e, 14, a);d = a
        }!c && b && (d.aj = !0);
        return d
    }

    function Sh(a, b, c, d) {
        yh(a);
        const e = a.P;
        let f = e[x] | 0;
        if (c == null) return Dh(e, f, b), a;
        let g = c === mf ? 7 : c[x] | 0,
            h = g;
        var k = Ph(g);
        let l = k || Object.isFrozen(c);
        k || (g = 0);
        l || (c = [...c], h = 0, g = Nh(g, f), l = !1);
        g |= 5;
        k = of (g) ? ? 0;
        for (let m = 0; m < c.length; m++) {
            const n = c[m],
                p = d(n, k);
            Object.is(n, p) || (l && (c = [...c], h = 0, g = Nh(g, f), l = !1), c[m] = p)
        }
        g !== h && (l && (c = [...c], g = Nh(g, f)), c[x] = g);
        Dh(e, f, b, c);
        return a
    }

    function Th(a, b, c, d) {
        yh(a);
        const e = a.P;
        Dh(e, e[x] | 0, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function Uh(a, b, c, d) {
        yh(a);
        const e = a.P;
        var f = e[x] | 0;
        if (d == null) {
            var g = Vh(e);
            if (Wh(g, e, f, c) === b) g.set(c, 0);
            else return a
        } else {
            g = Vh(e);
            const h = Wh(g, e, f, c);
            h !== b && (h && (f = Dh(e, f, h)), g.set(c, b))
        }
        Dh(e, f, b, d);
        return a
    }

    function Hh(a, b) {
        a = a.P;
        return Wh(Vh(a), a, void 0, b)
    }

    function Vh(a) {
        return a[hf] ? ? (a[hf] = new Map)
    }

    function Wh(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const g = d[f];
            Bh(b, g) != null && (e !== 0 && (c = Dh(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }

    function Xh(a) {
        var b = Yh;
        yh(a);
        a = a.P;
        let c = a[x] | 0;
        const d = Bh(a, 26);
        b = dh(Tg(d, b, !0, c));
        d !== b && Dh(a, c, 26, b);
        return b
    }

    function Fh(a, b, c, d) {
        a = Bh(a, d, void 0, e => Tg(e, c, !1, b));
        if (a != null) return a
    }

    function Zh(a, b, c) {
        a = a.P;
        (c = Fh(a, a[x] | 0, b, c)) || (c = b[gf]) || (c = new b, pf(c.P), c = b[gf] = c);
        return c
    }

    function z(a, b, c) {
        let d = a.P,
            e = d[x] | 0;
        b = Fh(d, e, b, c);
        if (b == null) return b;
        e = d[x] | 0;
        if (!sf(a, e)) {
            const f = dh(b);
            f !== b && (xh(a) && (d = a.P, e = d[x] | 0), b = f, Dh(d, e, c, b))
        }
        return b
    }

    function $h(a, b, c, d, e, f, g, h, k) {
        var l = sf(a, c);
        f = l ? 1 : f;
        h = !!h || f === 3;
        l = k && !l;
        (f === 2 || l) && xh(a) && (b = a.P, c = b[x] | 0);
        a = Lh(b, e, g);
        var m = a === mf ? 7 : a[x] | 0,
            n = Mh(m, c);
        if (k = !(4 & n)) {
            var p = a,
                w = c;
            const v = !!(2 & n);
            v && (w |= 2);
            let t = !v,
                C = !0,
                I = 0,
                V = 0;
            for (; I < p.length; I++) {
                const N = Tg(p[I], d, !1, w);
                if (N instanceof d) {
                    if (!v) {
                        const O = sf(N);
                        t && (t = !O);
                        C && (C = O)
                    }
                    p[V++] = N
                }
            }
            V < I && (p.length = V);
            n |= 4;
            n = C ? n & -4097 : n | 4096;
            n = t ? n | 8 : n & -9
        }
        n !== m && (a[x] = n, 2 & n && Object.freeze(a));
        if (l && !(8 & n || !a.length && (f === 1 || (f !== 4 ? 0 : 2 & n || !(16 & n) && 32 & c)))) {
            Ph(n) &&
                (a = [...a], n = Nh(n, c), c = Dh(b, c, e, a, g));
            d = a;
            l = n;
            for (m = 0; m < d.length; m++) p = d[m], n = dh(p), p !== n && (d[m] = n);
            l |= 8;
            n = l = d.length ? l | 4096 : l & -4097;
            a[x] = n
        }
        return a = Oh(a, n, b, c, e, g, f, k, h)
    }

    function ai(a, b, c, d) {
        const e = a.P;
        return $h(a, e, e[x] | 0, b, c, d, void 0, !1, !0)
    }

    function bi(a) {
        a == null && (a = void 0);
        return a
    }

    function A(a, b, c) {
        c = bi(c);
        Ch(a, b, c);
        return a
    }

    function ci(a, b, c, d) {
        d = bi(d);
        Uh(a, b, c, d);
        return a
    }

    function di(a, b, c) {
        yh(a);
        const d = a.P;
        let e = d[x] | 0;
        if (c == null) return Dh(d, e, b), a;
        let f = c === mf ? 7 : c[x] | 0,
            g = f;
        const h = Ph(f),
            k = h || Object.isFrozen(c);
        let l = !0,
            m = !0;
        for (let p = 0; p < c.length; p++) {
            var n = c[p];
            h || (n = sf(n), l && (l = !n), m && (m = n))
        }
        h || (f = l ? 13 : 5, f = m ? f & -4097 : f | 4096);
        k && f === g || (c = [...c], g = 0, f = Nh(f, e));
        f !== g && (c[x] = f);
        Dh(d, e, b, c);
        return a
    }

    function Nh(a, b) {
        return a = (2 & b ? a | 2 : a & -3) & -273
    }

    function ei(a, b, c, d, e, f, g, h) {
        yh(a);
        b = Kh(a, b, e, 2, !0, void 0, f);
        e = of (b === mf ? 7 : b[x] | 0) ? ? 0;
        if (h)
            if (Array.isArray(d))
                for (g = d.length, h = 0; h < g; h++) b.push(c(d[h], e));
            else
                for (const k of d) b.push(c(k, e));
        else {
            if (g) throw Error();
            b.push(c(d, e))
        }
        return a
    }

    function fi(a, b, c, d) {
        yh(a);
        var e = a.P;
        b = $h(a, e, e[x] | 0, c, b, 2, void 0, !0);
        d = d != null ? d : new c;
        b.push(d);
        e = c = b === mf ? 7 : b[x] | 0;
        sf(d) ? (c &= -9, b.length === 1 && (c &= -4097)) : c |= 4096;
        c !== e && (b[x] = c);
        return a
    }

    function gi(a, b, c, d) {
        return hg(y(a, b, c, d))
    }

    function hi(a, b, c, d) {
        return Sg(y(a, b, c, d))
    }

    function B(a, b) {
        return gi(a, b) ? ? !1
    }

    function ii(a, b) {
        return ng(y(a, b)) ? ? 0
    }

    function ji(a, b) {
        return Eg(y(a, b)) ? ? zh
    }

    function ki(a, b, c = 0) {
        return Ih(a, b) ? ? c
    }

    function D(a, b) {
        return hi(a, b) ? ? ""
    }

    function F(a, b) {
        return lg(y(a, b)) ? ? 0
    }

    function li(a, b) {
        return Kh(a, b, ng, Jh())
    }

    function mi(a, b) {
        return Kh(a, b, Sg, Jh())
    }

    function ni(a, b) {
        return Kh(a, b, lg, Jh())
    }

    function oi(a, b, c, d) {
        c = Hh(a, d) === c ? c : -1;
        return z(a, b, c)
    }

    function pi(a, b) {
        return gi(a, b, void 0, Ah)
    }

    function qi(a, b) {
        return ng(y(a, b, void 0, Ah))
    }

    function ri(a, b) {
        return hi(a, b, void 0, Ah)
    }

    function si(a, b) {
        return lg(y(a, b, void 0, Ah))
    }

    function ti(a, b, c) {
        return Ch(a, b, c == null ? c : gg(c))
    }

    function ui(a, b, c) {
        return Th(a, b, c == null ? c : gg(c), !1)
    }

    function vi(a, b, c) {
        return Ch(a, b, c == null ? c : mg(c))
    }

    function wi(a, b, c) {
        return Th(a, b, c == null ? c : mg(c), 0)
    }

    function xi(a, b, c) {
        return Th(a, b, wg(c), "0")
    }

    function yi(a, b, c) {
        return Ch(a, b, Lg(c))
    }

    function zi(a, b, c) {
        return Th(a, b, Lg(c), "")
    }

    function Ai(a, b, c) {
        return Ch(a, b, c == null ? c : kg(c))
    }

    function G(a, b, c) {
        return Th(a, b, c == null ? c : kg(c), 0)
    };

    function Fi(a) {
        return dh(a)
    }

    function Gi(a) {
        return JSON.stringify(jh(a))
    }

    function Hi(a) {
        return wh(a)
    }
    var H = class {
        constructor(a) {
            this.P = ph(a)
        }
        toJSON() {
            return jh(this)
        }
    };
    H.prototype[lf] = rf;

    function Ii(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error();
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error();
        return new a(qf(b))
    };

    function Ji(a) {
        a = BigInt.asUintN(64, a);
        return new Ki(Number(a & BigInt(4294967295)), Number(a >> BigInt(32)))
    }

    function Li(a) {
        if (!a) return Mi || (Mi = new Ki(0, 0));
        if (!/^\d+$/.test(a)) return null;
        Zf(a);
        return new Ki(Rf, Sf)
    }
    var Ki = class {
        constructor(a, b) {
            this.i = a >>> 0;
            this.g = b >>> 0
        }
    };
    let Mi;

    function Ni(a) {
        a = BigInt.asUintN(64, a);
        return new Oi(Number(a & BigInt(4294967295)), Number(a >> BigInt(32)))
    }

    function Pi(a) {
        if (!a) return Qi || (Qi = new Oi(0, 0));
        if (!/^-?\d+$/.test(a)) return null;
        Zf(a);
        return new Oi(Rf, Sf)
    }
    var Oi = class {
        constructor(a, b) {
            this.i = a >>> 0;
            this.g = b >>> 0
        }
    };
    let Qi;

    function Ri(a, b, c) {
        for (; c > 0 || b > 127;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
        a.g.push(b)
    }

    function Si(a, b) {
        for (; b > 127;) a.g.push(b & 127 | 128), b >>>= 7;
        a.g.push(b)
    }

    function Ti(a, b) {
        if (b >= 0) Si(a, b);
        else {
            for (let c = 0; c < 9; c++) a.g.push(b & 127 | 128), b >>= 7;
            a.g.push(1)
        }
    }

    function Ui(a, b) {
        a.g.push(b >>> 0 & 255);
        a.g.push(b >>> 8 & 255);
        a.g.push(b >>> 16 & 255);
        a.g.push(b >>> 24 & 255)
    }
    var Vi = class {
        constructor() {
            this.g = []
        }
        length() {
            return this.g.length
        }
        end() {
            const a = this.g;
            this.g = [];
            return a
        }
    };

    function Wi(a, b) {
        b.length !== 0 && (a.j.push(b), a.i += b.length)
    }

    function Xi(a, b) {
        Wi(a, a.g.end());
        Wi(a, b)
    }

    function Yi(a, b, c) {
        Si(a.g, b * 8 + c)
    }

    function Zi(a, b) {
        Yi(a, b, 2);
        b = a.g.end();
        Wi(a, b);
        b.push(a.i);
        return b
    }

    function $i(a, b) {
        var c = b.pop();
        for (c = a.i + a.g.length() - c; c > 127;) b.push(c & 127 | 128), c >>>= 7, a.i++;
        b.push(c);
        a.i++
    }

    function aj(a) {
        Wi(a, a.g.end());
        const b = new Uint8Array(a.i),
            c = a.j,
            d = c.length;
        let e = 0;
        for (let f = 0; f < d; f++) {
            const g = c[f];
            b.set(g, e);
            e += g.length
        }
        a.j = [b];
        return b
    }

    function bj(a, b, c, d) {
        c != null && (b = Zi(a, b), d(c, a), $i(a, b))
    }

    function cj(a, b, c) {
        var d = dj;
        if (c != null)
            for (let e = 0; e < c.length; e++) {
                const f = Zi(a, b);
                d(c[e], a);
                $i(a, f)
            }
    }
    var ej = class {
        constructor() {
            this.j = [];
            this.i = 0;
            this.g = new Vi
        }
    };

    function fj() {
        const a = class {
            constructor() {
                throw Error();
            }
        };
        Object.setPrototypeOf(a, a.prototype);
        return a
    }
    var gj = fj(),
        hj = fj(),
        ij = fj(),
        jj = fj(),
        kj = fj(),
        lj = fj(),
        mj = fj(),
        nj = fj();
    var oj = class {
        constructor(a, b) {
            this.g = a;
            a = Ga(gj);
            this.i = !!a && b === a || !1
        }
    };

    function pj(a, b, c, d, e) {
        bj(a, c, qj(b, d), e)
    }
    const rj = new oj(pj, gj),
        sj = new oj(pj, gj);
    var tj = Symbol(),
        uj = Symbol();
    let vj, wj;

    function xj(a) {
        var b = yj,
            c = zj,
            d = a[tj];
        if (d) return d;
        d = {};
        d.So = a;
        d.Hh = nh(a[0]);
        var e = a[1];
        let f = 1;
        e && e.constructor === Object && (d.Dj = e, e = a[++f], typeof e === "function" && (d.dk = !0, vj ? ? (vj = e), wj ? ? (wj = a[f + 1]), e = a[f += 2]));
        const g = {};
        for (; e && Array.isArray(e) && e.length && typeof e[0] === "number" && e[0] > 0;) {
            for (var h = 0; h < e.length; h++) g[e[h]] = e;
            e = a[++f]
        }
        for (h = 1; e !== void 0;) {
            typeof e === "number" && (h += e, e = a[++f]);
            let m;
            var k = void 0;
            e instanceof oj ? m = e : (m = rj, f--);
            if (m ? .i) {
                e = a[++f];
                k = a;
                var l = f;
                typeof e === "function" && (e =
                    e(), k[l] = e);
                k = e
            }
            e = a[++f];
            l = h + 1;
            typeof e === "number" && e < 0 && (l -= e, e = a[++f]);
            for (; h < l; h++) {
                const n = g[h];
                k ? c(d, h, m, k, n) : b(d, h, m, n)
            }
        }
        return a[tj] = d
    }

    function qj(a, b) {
        if (a instanceof H) return a.P;
        if (Array.isArray(a)) return oh(a, b, !1)
    };

    function yj(a, b, c) {
        a[b] = c.g
    }

    function zj(a, b, c, d) {
        let e, f;
        const g = c.g;
        a[b] = (h, k, l) => g(h, k, l, f || (f = xj(d).Hh), e || (e = Aj(d)))
    }

    function Aj(a) {
        let b = a[uj];
        if (!b) {
            const c = xj(a);
            b = (d, e) => Bj(d, e, c);
            a[uj] = b
        }
        return b
    }

    function Bj(a, b, c) {
        wf(a, a[x] | 0, (d, e) => {
            if (e != null) {
                var f = Cj(c, d);
                f && f(b, e, d)
            }
        })
    }

    function Cj(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.Dj)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0] instanceof oj ? c : [sj, c] : [c, void 0];
                var d = c[0].g;
                if (c = c[1]) {
                    const e = Aj(c),
                        f = xj(c).Hh;
                    c = a.dk ? wj(f, e) : (g, h, k) => d(g, h, k, f, e)
                } else c = d;
                return a[b] = c
            }
    };

    function Dj(a, b, c) {
        if (Array.isArray(b)) {
            var d = b[x] | 0;
            if (d & 4) return b;
            for (var e = 0, f = 0; e < b.length; e++) {
                const g = a(b[e]);
                g != null && (b[f++] = g)
            }
            f < e && (b.length = f);
            c && (b[x] = (d | 5) & -1537, d & 2 && Object.freeze(b));
            return b
        }
    }

    function Ej(a, b) {
        return new oj(a, b)
    }

    function Fj(a, b) {
        return new oj(a, b)
    }
    var Gj = new oj(function(a, b, c, d, e) {
        if (b instanceof ch) b.forEach((f, g) => {
            bj(a, c, oh([g, f], d, !1), e)
        });
        else if (Array.isArray(b))
            for (let f = 0; f < b.length; f++) {
                const g = b[f];
                Array.isArray(g) && bj(a, c, oh(g, d, !1), e)
            }
    }, gj);

    function Hj(a, b, c) {
        b = fg(b);
        b != null && (Yi(a, c, 1), a = a.g, c = Tf || (Tf = new DataView(new ArrayBuffer(8))), c.setFloat64(0, +b, !0), Rf = c.getUint32(0, !0), Sf = c.getUint32(4, !0), Ui(a, Rf), Ui(a, Sf))
    }

    function Ij(a, b, c) {
        b = Ig(b);
        if (b != null) {
            switch (typeof b) {
                case "string":
                    Pi(b)
            }
            if (b != null) switch (Yi(a, c, 0), typeof b) {
                case "number":
                    a = a.g;
                    Vf(b);
                    Ri(a, Rf, Sf);
                    break;
                case "bigint":
                    c = Ni(b);
                    Ri(a.g, c.i, c.g);
                    break;
                default:
                    c = Pi(b), Ri(a.g, c.i, c.g)
            }
        }
    }

    function Jj(a, b, c) {
        b = Dj(Ig, b, !1);
        if (b != null && b.length) {
            c = Zi(a, c);
            for (let e = 0; e < b.length; e++) {
                const f = b[e];
                switch (typeof f) {
                    case "number":
                        var d = a.g;
                        Vf(f);
                        Ri(d, Rf, Sf);
                        break;
                    case "bigint":
                        d = Ni(f);
                        Ri(a.g, d.i, d.g);
                        break;
                    default:
                        d = Pi(f), Ri(a.g, d.i, d.g)
                }
            }
            $i(a, c)
        }
    }

    function Kj(a, b, c) {
        b = Jg(b);
        if (b != null) {
            switch (typeof b) {
                case "string":
                    Li(b)
            }
            if (b != null) switch (Yi(a, c, 0), typeof b) {
                case "number":
                    a = a.g;
                    Vf(b);
                    Ri(a, Rf, Sf);
                    break;
                case "bigint":
                    c = Ji(b);
                    Ri(a.g, c.i, c.g);
                    break;
                default:
                    c = Li(b), Ri(a.g, c.i, c.g)
            }
        }
    }

    function Lj(a, b, c) {
        b = ng(b);
        b != null && b != null && (Yi(a, c, 0), Ti(a.g, b))
    }

    function Mj(a, b, c) {
        b = hg(b);
        b != null && (Yi(a, c, 0), a.g.g.push(b ? 1 : 0))
    }

    function Nj(a, b, c) {
        b = Sg(b);
        b != null && (b = He(b), Yi(a, c, 2), Si(a.g, b.length), Xi(a, b))
    }

    function Oj(a, b, c, d, e) {
        bj(a, c, qj(b, d), e)
    }

    function Pj(a, b, c) {
        b = ng(b);
        b != null && (b = parseInt(b, 10), Yi(a, c, 0), Ti(a.g, b))
    }
    var Qj = Ej(Hj, mj),
        Rj = Ej(Hj, mj),
        Sj = Ej(function(a, b, c) {
            b = fg(b);
            b != null && (Yi(a, c, 5), a = a.g, c = Tf || (Tf = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), Sf = 0, Rf = c.getUint32(0, !0), Ui(a, Rf))
        }, fj()),
        Tj = Fj(Jj, kj),
        Uj = Ej(Ij, kj),
        Vj = Fj(Jj, kj),
        Wj = Ej(Ij, kj),
        Xj = Ej(Ij, kj),
        Yj = Ej(Kj, lj),
        Zj = Fj(function(a, b, c) {
            b = Dj(Jg, b, !1);
            if (b != null && b.length) {
                c = Zi(a, c);
                for (let f = 0; f < b.length; f++) {
                    var d = b[f];
                    switch (typeof d) {
                        case "number":
                            var e = a.g;
                            Vf(d);
                            Ri(e, Rf, Sf);
                            break;
                        case "bigint":
                            e = Number(d);
                            Number.isSafeInteger(e) ? (d = a.g,
                                Vf(e), Ri(d, Rf, Sf)) : (d = Ji(d), Ri(a.g, d.i, d.g));
                            break;
                        default:
                            d = Li(d), Ri(a.g, d.i, d.g)
                    }
                }
                $i(a, c)
            }
        }, lj),
        ak = Ej(Kj, lj),
        bk = Ej(Lj, jj),
        ck = Fj(function(a, b, c) {
            b = Dj(ng, b, !0);
            if (b != null && b.length) {
                c = Zi(a, c);
                for (let d = 0; d < b.length; d++) Ti(a.g, b[d]);
                $i(a, c)
            }
        }, jj),
        dk = Ej(Lj, jj),
        ek = Ej(function(a, b, c) {
            b = pg(b);
            b != null && (Yi(a, c, 5), Ui(a.g, b))
        }, fj()),
        fk = Ej(Mj, hj),
        gk = Ej(Mj, hj),
        hk = Ej(Mj, hj),
        ik = Ej(Nj, ij),
        jk = Fj(function(a, b, c) {
            b = Dj(Sg, b, !0);
            if (b != null)
                for (let g = 0; g < b.length; g++) {
                    var d = a,
                        e = c,
                        f = b[g];
                    f != null && (f = He(f), Yi(d, e, 2),
                        Si(d.g, f.length), Xi(d, f))
                }
        }, ij),
        kk = Ej(Nj, ij),
        lk = Ej(Nj, ij),
        mk = function(a, b, c = gj) {
            return new oj(b, c)
        }(function(a, b, c, d, e) {
            if (a.g() !== 2) return !1;
            var f = a.i;
            d = oh(void 0, d, !0);
            var g = b[x] | 0;
            if (g & 2) throw Error();
            const h = g & 128 ? Mf : void 0;
            let k = Lh(b, c, h),
                l = k === mf ? 7 : k[x] | 0,
                m = Mh(l, g);
            if (2 & m || Ph(m) || 16 & m) k = [...k], l = 0, m = Nh(m, g), Dh(b, g, c, k, h);
            m &= -13;
            m !== l && (k[x] = m);
            k.push(d);
            f.call(a, d, e);
            return !0
        }, function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (let f = 0; f < b.length; f++) Oj(a, b[f], c, d, e)
        }),
        K = new oj(Oj, gj),
        nk = Ej(function(a,
            b, c) {
            b = pg(b);
            b != null && b != null && (Yi(a, c, 0), Si(a.g, b))
        }, fj()),
        ok = Ej(Pj, nj),
        pk = Fj(function(a, b, c) {
            b = Dj(ng, b, !0);
            if (b != null && b.length) {
                c = Zi(a, c);
                for (let d = 0; d < b.length; d++) Ti(a.g, b[d]);
                $i(a, c)
            }
        }, nj),
        qk = Ej(Pj, nj);

    function rk(a) {
        return () => {
            var b;
            (b = a[gf]) || (b = new a, pf(b.P), b = a[gf] = b);
            return b
        }
    }

    function sk(a) {
        return b => {
            const c = new ej;
            Bj(b.P, c, xj(a));
            return aj(c)
        }
    }

    function tk(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = new a(qf(b))
            }
            return b
        }
    };
    Jd `https://www.google.com/recaptcha/api2/aframe`;
    var uk = {
            passive: !0
        },
        vk = nc(() => {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get() {
                        a = !0
                    }
                });
                r.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function wk(a) {
        return a ? a.passive && vk() ? a : a.capture || !1 : !1
    }

    function xk(a, b, c, d) {
        return typeof a.addEventListener === "function" ? (a.addEventListener(b, c, wk(d)), !0) : !1
    }

    function yk(a, b, c, d) {
        return typeof a.removeEventListener === "function" ? (a.removeEventListener(b, c, wk(d)), !0) : !1
    };

    function zk(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            bd(f, a);
            b.document.readyState !== "complete" ? xk(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };

    function Ak() {
        Bk || (Bk = new Ck);
        return Bk
    }
    async function Dk() {
        try {
            q(await q(window.android.webview.getExperimentalMediaIntegrityTokenProvider({
                cloudProjectNumber: 187810013193
            })))
        } catch (a) {
            a.mediaIntegrityErrorName || a.code && a.code()
        }
    }
    var Ck = class {
            constructor() {
                this.g = !1
            }
            i() {
                return window.android && window.android.webview && window.android.webview.getExperimentalMediaIntegrityTokenProvider
            }
        },
        Bk;
    async function Ek(a) {
        var b = `${a.lb?"https://ep1.adtrafficquality.google/getconfig/sodar":"https://pagead2.googlesyndication.com/getconfig/sodar"}?sv=${200}&tid=${a.g}` + `&tv=${a.i}&st=` + `${a.Fc}`;
        let c = void 0;
        try {
            c = q(await q(Fk(b)))
        } catch (g) {}
        if (c) {
            b = a.dd || c.sodar_query_id;
            var d = c.rc_enable !== void 0 && a.j ? c.rc_enable : "n",
                e = c.bg_snapshot_delay_ms === void 0 ? "0" : c.bg_snapshot_delay_ms,
                f = c.is_gen_204 === void 0 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.l,
                Vi: c.bg_hash_basename,
                Ui: c.bg_binary,
                ik: a.g + "_" + a.i,
                dd: b,
                Fc: a.Fc,
                Yd: d,
                He: e,
                Wd: f,
                lb: a.lb
            }
        }
    }
    let Fk = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (d.status >= 200 && d.status < 300 ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function Gk(a) {
        if (a.A) {
            Ak().g = !0;
            var b = Ak();
            b.i() && b.g && Dk()
        }
        if (a = q(await q(Ek(a)))) {
            b = window;
            var c = b.GoogleGcLKhOms;
            c && typeof c.push === "function" || (c = b.GoogleGcLKhOms = []);
            c.push({
                _ctx_: a.context,
                _bgv_: a.Vi,
                _bgp_: a.Ui,
                _li_: a.ik,
                _jk_: a.dd,
                _st_: a.Fc,
                _rc_: a.Yd,
                _dl_: a.He,
                _g2_: a.Wd,
                _atqg_: a.lb === void 0 ? "0" : a.lb ? "1" : "0"
            });
            if (c = b.GoogleDX5YKUSk) b.GoogleDX5YKUSk = void 0, c[1]();
            a = a.lb ? Jd `https://ep2.adtrafficquality.google/sodar/${"sodar2"}.js` : Jd `https://tpc.googlesyndication.com/sodar/${"sodar2"}.js`;
            zk(a)
        }
    };

    function Hk(a, b) {
        return zi(a, 1, b)
    }
    var Ik = class extends H {
        g() {
            return D(this, 1)
        }
    };

    function Jk(a, b) {
        return A(a, 5, b)
    }

    function Kk(a) {
        return G(a, 2, 1)
    }

    function Lk(a, b) {
        return zi(a, 3, b)
    }

    function Mk(a) {
        return G(a, 4, 1)
    }

    function Nk(a, b) {
        return ui(a, 6, b)
    }
    var Ok = class extends H {};

    function Pk(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var Qk = class {
            constructor(a) {
                this.g = a.j;
                this.i = a.A;
                this.l = a.l;
                this.dd = a.dd;
                this.B = a.da();
                this.Fc = a.Fc;
                this.Yd = a.Yd;
                this.He = a.He;
                this.Wd = a.Wd;
                this.j = a.g;
                this.lb = a.lb;
                this.A = a.i
            }
        },
        Rk = class {
            constructor(a, b, c) {
                this.j = a;
                this.A = b;
                this.l = c;
                this.B = window;
                this.Fc = "env";
                this.Yd = "n";
                this.He = "0";
                this.Wd = "1";
                this.g = !0;
                this.i = this.lb = !1
            }
            da() {
                return this.B
            }
            build() {
                return new Qk(this)
            }
        };
    var Sk = class extends H {};

    function Tk(a) {
        var b = new Uk;
        return yi(b, 1, a)
    }
    var Uk = class extends H {
        getValue() {
            return D(this, 1)
        }
        getVersion() {
            return F(this, 5)
        }
    };
    var Vk = class extends H {};
    var Wk = class extends H {};

    function Xk(a, b, c = null, d = !1, e = !1) {
        Yk(a, b, c, d, e)
    }

    function Yk(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Rd("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                d && Za(a.google_image_requests, f);
                yk(f, "load", g);
                yk(f, "error", g)
            };
            xk(f, "load", g);
            xk(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }

    function Zk(a, b) {
        let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
        Ud(a, (d, e) => {
            if (d || d === 0) c += `&${e}=${encodeURIComponent(String(d))}`
        });
        $k(c)
    }

    function $k(a) {
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : Xk(b, a, void 0, !1, !1)
    };
    let al = null;
    var bl = window;
    var cl = class extends H {};
    var dl = class extends H {
        getCorrelator() {
            return ji(this, 1)
        }
        setCorrelator(a) {
            return xi(this, 1, a)
        }
    };
    var ql = class extends H {};
    let rl = null,
        sl = null;

    function tl() {
        if (rl != null) return rl;
        rl = !1;
        try {
            const a = Pd(r);
            a && a.location.hash.indexOf("google_logging") !== -1 && (rl = !0)
        } catch (a) {}
        return rl
    }

    function ul() {
        if (sl != null) return sl;
        sl = !1;
        try {
            const a = Pd(r);
            a && a.location.hash.indexOf("auto_ads_logging") !== -1 && (sl = !0)
        } catch (a) {}
        return sl
    }
    var vl = (a, b = []) => {
        let c = !1;
        r.google_logging_queue || (c = !0, r.google_logging_queue = []);
        r.google_logging_queue.push([a, b]);
        c && tl() && Qd(r.document, Jd `https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };

    function wl(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function xl(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function yl(a) {
        return xl.apply(null, arguments) / arguments.length
    };

    function zl(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    }
    ba = zl.prototype;
    ba.equals = function(a) {
        return a instanceof zl && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    ba.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    ba.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    ba.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    ba.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    };

    function Al(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    ba = Al.prototype;
    ba.getWidth = function() {
        return this.right - this.left
    };
    ba.getHeight = function() {
        return this.bottom - this.top
    };

    function Bl(a) {
        return new Al(a.top, a.right, a.bottom, a.left)
    }
    ba.contains = function(a) {
        return this && a ? a instanceof Al ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Cl(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    ba.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    ba.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    ba.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    ba.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function Dl(a, b) {
        this.width = a;
        this.height = b
    }

    function El(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    ba = Dl.prototype;
    ba.aspectRatio = function() {
        return this.width / this.height
    };
    ba.isEmpty = function() {
        return !(this.width * this.height)
    };
    ba.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    ba.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    ba.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    ba.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };

    function Fl(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Gl(a, b) {
        const c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            const e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Fl(c, e, d - c, a - e)
        }
        return null
    }

    function Hl(a, b) {
        var c = Gl(a, b);
        if (!c || !c.height || !c.width) return [new Fl(a.left, a.top, a.width, a.height)];
        c = [];
        let d = a.top,
            e = a.height;
        const f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new Fl(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new Fl(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new Fl(a.left, d, b.left - a.left, e));
        h < f && c.push(new Fl(h, d, f - h, e));
        return c
    }
    ba = Fl.prototype;
    ba.contains = function(a) {
        return a instanceof zl ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    ba.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    ba.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    ba.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    ba.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    const Il = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Jl(a = r) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function Kl(a = Jl()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function Ll(a = Jl()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(Il[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function Ml() {
        var a = Jl();
        return a && a.initialIntersection
    }

    function Nl() {
        const a = Ml();
        return a && a.rootBounds && ra(a.rootBounds) ? new Dl(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Ol(a = Jl()) {
        return a ? Md(a.master) ? a.master : null : null
    }

    function Pl(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Za(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = g.data === "amp-ini-load";
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Qd(a.document, g ? Jd `https://cdn.ampproject.org/rtv/${g}/amp4ads-host-v0.js` : Jd `https://cdn.ampproject.org/amp4ads-host-v0.js`));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, xk(a, "message", f), d = () => {
            yk(a, "message", f)
        });
        return e
    };

    function Ql(a) {
        return a ? new Rl(Sl(a)) : Ja || (Ja = new Rl)
    }

    function Tl(a) {
        a = a.document;
        a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
        return new Dl(a.clientWidth, a.clientHeight)
    }

    function Ul(a) {
        const b = a.scrollingElement ? a.scrollingElement : ec || a.compatMode != "CSS1Compat" ? a.body || a.documentElement : a.documentElement;
        a = a.defaultView;
        return new zl(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Vl(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Wl(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function Sl(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    var Xl = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Yl = {
            IMG: " ",
            BR: "\n"
        };

    function Zl(a) {
        const b = [];
        $l(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        a != " " && (a = a.replace(/^\s*/, ""));
        return a
    }

    function $l(a, b, c) {
        if (!(a.nodeName in Xl))
            if (a.nodeType == 3) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Yl) b.push(Yl[a.nodeName]);
        else
            for (a = a.firstChild; a;) $l(a, b, c), a = a.nextSibling
    }

    function am(a, b, c) {
        if (!b && !c) return null;
        const d = b ? String(b).toUpperCase() : null;
        return bm(a, function(e) {
            return (!d || e.nodeName == d) && (!c || typeof e.className === "string" && Xa(e.className.split(/\s+/), c))
        })
    }

    function bm(a, b) {
        let c = 0;
        for (; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Rl(a) {
        this.g = a || r.document || document
    }
    ba = Rl.prototype;
    ba.wi = function(a) {
        var b = this.g;
        return typeof a === "string" ? b.getElementById(a) : a
    };
    ba.vl = Rl.prototype.wi;

    function cm(a, b) {
        return Vl(a.g, b)
    }

    function dm(a, b) {
        var c = a.g;
        a = Vl(c, "DIV");
        dd(a, b);
        if (a.childNodes.length == 1) b = a.removeChild(a.firstChild);
        else
            for (b = c.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
        return b
    }
    ba.da = function() {
        return this.g.defaultView
    };
    ba.contains = function(a, b) {
        return a && b ? a == b || a.contains(b) : !1
    };
    ba.Fj = function(a) {
        let b;
        const c = arguments.length;
        if (!c) return null;
        if (c == 1) return arguments[0];
        const d = [];
        let e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (let h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    };

    function em(a, b, c) {
        if (typeof b === "string")(b = fm(a, b)) && (a.style[b] = c);
        else
            for (const e in b) {
                c = a;
                var d = b[e];
                const f = fm(c, e);
                f && (c.style[f] = d)
            }
    }
    var gm = {};

    function fm(a, b) {
        let c = gm[b];
        if (!c) {
            var d = qd(b);
            c = d;
            a.style[d] === void 0 && (d = (ec ? "Webkit" : dc ? "Moz" : null) + rd(d), a.style[d] !== void 0 && (c = d));
            gm[b] = c
        }
        return c
    }

    function hm(a, b) {
        const c = a.style[qd(b)];
        return typeof c !== "undefined" ? c : a.style[fm(a, b)] || ""
    }

    function im(a, b) {
        const c = Sl(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function jm(a, b) {
        return im(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function km(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function lm(a) {
        var b = Sl(a);
        const c = new zl(0, 0);
        if (a == (b ? Sl(b) : document).documentElement) return c;
        a = km(a);
        b = Ql(b);
        b = Ul(b.g);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function mm(a) {
        var b = nm;
        if (jm(a, "display") != "none") return b(a);
        const c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function nm(a) {
        const b = a.offsetWidth,
            c = a.offsetHeight,
            d = ec && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = km(a), new Dl(a.right - a.left, a.bottom - a.top)) : new Dl(b, c)
    };
    var pm = (a, b) => {
            a = om(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + (c === "?" || c === "#" ? "" : "&") + a
        },
        om = a => Object.entries(qm(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        qm = a => {
            const b = {};
            Ud(a, (c, d) => {
                if (c || c === 0 || c === !1) typeof c === "boolean" && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        rm = a => {
            a = a.google_unique_id;
            return typeof a === "number" ? a : 0
        },
        sm = a => {
            let b;
            b = a.nodeType !== 9 && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        tm = a => (a = a.google_ad_format) ? a.indexOf("_0ads") > 0 : !1,
        um = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(b > 0 && c > 0)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (g > 0 && h >
                                    0) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = b > 0 ? b : a.width;c = c > 0 ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        },
        vm = a => {
            if (!a) return "";
            a = a.toLowerCase();
            a.substring(0, 3) != "ca-" && (a = "ca-" + a);
            return a
        };
    var wm = class {
        constructor(a, b) {
            this.error = a;
            this.meta = {};
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror"
        }
    };

    function xm(a) {
        return new wm(a, {
            message: ym(a)
        })
    }

    function ym(a) {
        let b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        a.stack && (b = zm(a.stack, b));
        return b
    }

    function zm(a, b) {
        try {
            a.indexOf(b) == -1 && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    };
    const Am = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Bm = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        Cm = class {
            constructor(a, b, c) {
                this.url = a;
                this.B = b;
                this.g = !!c;
                this.depth = null
            }
        };
    let Dm = null;

    function Em() {
        var a = window;
        if (Dm === null) {
            Dm = "";
            try {
                let b = "";
                try {
                    b = a.top.location.hash
                } catch (c) {
                    b = a.location.hash
                }
                if (b) {
                    const c = b.match(/\bdeid=([\d,]+)/);
                    Dm = c ? c[1] : ""
                }
            } catch (b) {}
        }
        return Dm
    };

    function Fm() {
        const a = r.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Gm() {
        const a = r.performance;
        return a && a.now ? a.now() : null
    };
    var Hm = class {
        constructor(a, b) {
            var c = Gm() || Fm();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const Im = r.performance,
        Jm = !!(Im && Im.mark && Im.measure && Im.clearMarks),
        Km = nc(() => {
            var a;
            if (a = Jm) a = Em(), a = !!a.indexOf && a.indexOf("1337") >= 0;
            return a
        });

    function Lm(a) {
        a && Im && Km() && (Im.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Im.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Mm(a) {
        a.g = !1;
        a.i !== a.j.google_js_reporting_queue && (Km() && Ma(a.i, Lm), a.i.length = 0)
    }

    function Nm(a, b) {
        if (!a.g) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw Lm(c), e;
        }
        a.end(c);
        return d
    }
    var Om = class {
        constructor(a) {
            this.i = [];
            this.j = a || r;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = Km() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Hm(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Im && Km() && Im.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (Gm() || Fm()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Im && Km() && Im.mark(b);
                !this.g || this.i.length >
                    2048 || this.i.push(a)
            }
        }
    };

    function Pm(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Qm(a, b, c, d, e) {
        const f = [];
        Ud(a, (g, h) => {
            (g = Rm(g, b, c, d, e)) && f.push(`${h}=${g}`)
        });
        return f.join(b)
    }

    function Rm(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c === "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d || (d = 0), d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Rm(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a === "object") return e || (e = 0), e < 2 ? encodeURIComponent(Qm(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Sm(a) {
        let b = 1;
        for (const c in a.i) c.length > b && (b = c.length);
        return 3997 - b - a.j.length - 1
    }

    function Tm(a, b, c, d) {
        b = b + "//" + c + d;
        let e = Sm(a) - d.length;
        if (e < 0) return "";
        a.g.sort((f, g) => f - g);
        d = null;
        c = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.i[g];
            for (let k = 0; k < h.length; k++) {
                if (!e) {
                    d = d == null ? g : d;
                    break
                }
                let l = Qm(h[k], a.j, ",$");
                if (l) {
                    l = c + l;
                    if (e >= l.length) {
                        e -= l.length;
                        b += l;
                        c = a.j;
                        break
                    }
                    d = d == null ? g : d
                }
            }
        }
        a = "";
        d != null && (a = `${c}${"trn"}=${d}`);
        return b + a
    }
    var Um = class {
        constructor() {
            this.j = "&";
            this.i = {};
            this.A = 0;
            this.g = []
        }
    };
    var Xm = class {
        constructor(a = null) {
            this.I = Vm;
            this.i = a;
            this.g = null;
            this.A = !1;
            this.eb = this.na
        }
        j(a) {
            this.g = a
        }
        l(a) {
            this.A = a
        }
        sb(a, b, c) {
            let d, e;
            try {
                this.i && this.i.g ? (e = this.i.start(a.toString(), 3), d = b(), this.i.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    Lm(e), b = this.eb(a, xm(f), void 0, c)
                } catch (g) {
                    this.na(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        tb(a, b, c, d) {
            return (...e) => this.sb(a, () => b.apply(c, e), d)
        }
        na(a, b, c, d, e) {
            e = e || "jserror";
            let f = void 0;
            try {
                const O = new Um;
                var g = O;
                g.g.push(1);
                g.i[1] = Pm("context",
                    a);
                b.error && b.meta && b.id || (b = xm(b));
                g = b;
                if (g.msg) {
                    b = O;
                    var h = g.msg.substring(0, 512);
                    b.g.push(2);
                    b.i[2] = Pm("msg", h)
                }
                var k = g.meta || {};
                h = k;
                if (this.g) try {
                    this.g(h)
                } catch (sa) {}
                if (d) try {
                    d(h)
                } catch (sa) {}
                d = O;
                k = [k];
                d.g.push(3);
                d.i[3] = k;
                var l;
                if (!(l = p)) {
                    d = r;
                    k = [];
                    h = null;
                    do {
                        var m = d;
                        if (Md(m)) {
                            var n = m.location.href;
                            h = m.document && m.document.referrer || null
                        } else n = h, h = null;
                        k.push(new Cm(n || "", m));
                        try {
                            d = m.parent
                        } catch (sa) {
                            d = null
                        }
                    } while (d && m !== d);
                    for (let sa = 0, Ca = k.length - 1; sa <= Ca; ++sa) k[sa].depth = Ca - sa;
                    m = r;
                    if (m.location &&
                        m.location.ancestorOrigins && m.location.ancestorOrigins.length === k.length - 1)
                        for (n = 1; n < k.length; ++n) {
                            const sa = k[n];
                            sa.url || (sa.url = m.location.ancestorOrigins[n - 1] || "", sa.g = !0)
                        }
                    l = k
                }
                var p = l;
                let J = new Cm(r.location.href, r, !1);
                l = null;
                const Ka = p.length - 1;
                for (m = Ka; m >= 0; --m) {
                    var w = p[m];
                    !l && Am.test(w.url) && (l = w);
                    if (w.url && !w.g) {
                        J = w;
                        break
                    }
                }
                w = null;
                const lb = p.length && p[Ka].url;
                J.depth !== 0 && lb && (w = p[Ka]);
                f = new Bm(J, w);
                if (f.i) {
                    p = O;
                    var v = f.i.url || "";
                    p.g.push(4);
                    p.i[4] = Pm("top", v)
                }
                var t = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    const sa =
                        f.g.url.match(sd);
                    var C = sa[1],
                        I = sa[3],
                        V = sa[4];
                    v = "";
                    C && (v += C + ":");
                    I && (v += "//", v += I, V && (v += ":" + V));
                    var N = v
                } else N = "";
                C = O;
                t = [t, {
                    url: N
                }];
                C.g.push(5);
                C.i[5] = t;
                Wm(this.I, e, O, this.A, c)
            } catch (O) {
                try {
                    Wm(this.I, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: ym(O),
                        url: f ? .g.url ? ? ""
                    }, this.A, c)
                } catch (J) {}
            }
            return !0
        }
        Sa(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.na(a, d instanceof Error ? d : Error(d), void 0, c || this.g || void 0)
            })
        }
    };
    var Ym = class extends H {};
    var Zm = sk([0, qk, kk]);

    function $m(a, b) {
        try {
            const c = d => [{
                [d.kb]: d.me
            }];
            return JSON.stringify([a.filter(d => d.Ra).map(c), jh(b), a.filter(d => !d.Ra).map(c)])
        } catch (c) {
            return an(c, b), ""
        }
    }

    function bn(a, b) {
        const c = new ej;
        try {
            const d = a.filter(f => f.Ra).map(cn);
            cj(c, 1, d);
            bj(c, 2, Zm(b), dj);
            const e = a.filter(f => !f.Ra).map(cn);
            cj(c, 3, e)
        } catch (d) {
            an(d, b)
        }
        return aj(c)
    }

    function an(a, b) {
        try {
            Zk({
                m: ym(a instanceof Error ? a : Error(String(a))),
                b: F(b, 1) || null,
                v: D(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }

    function cn(a) {
        const b = new ej;
        bj(b, a.kb, a.Ge, dj);
        return aj(b)
    }

    function dj(a, b) {
        Xi(b, a.subarray(0, a.length))
    }
    var dn = class {
        constructor(a, b) {
            var c = new Ym;
            a = G(c, 1, a);
            b = zi(a, 2, b);
            this.i = wh(b)
        }
    };

    function en(a) {
        return Math.round(a)
    };

    function fn(a, b) {
        return Uh(a, 1, gn, Lg(b))
    }

    function hn(a, b) {
        return Uh(a, 2, gn, wg(b))
    }

    function jn(a, b) {
        return Uh(a, 3, gn, b == null ? b : gg(b))
    }
    var L = class extends H {},
        gn = [1, 2, 3];

    function kn(a, b) {
        return Uh(a, 2, ln, wg(b))
    }

    function mn(a, b) {
        return Uh(a, 4, ln, eg(b))
    }
    var nn = class extends H {},
        ln = [2, 4];

    function on(a) {
        var b = new pn;
        return zi(b, 1, a)
    }

    function qn(a, b) {
        return A(a, 3, b)
    }

    function M(a, b) {
        return fi(a, 4, L, b)
    }
    var pn = class extends H {};
    var rn = sk([0, kk, 1, [0, ln, 1, Xj, 1, Rj], mk, [0, gn, lk, Xj, hk]]);
    var sn = class extends H {
        i() {
            return D(this, 2)
        }
        getWidth() {
            return D(this, 3)
        }
        getHeight() {
            return D(this, 4)
        }
    };
    var tn = class extends H {};
    var un = class extends H {};
    var vn = class extends H {};
    var wn = class extends H {},
        xn = [5, 6];
    var yn = [0, Uj, -1];
    var zn = [0, mk, [0, pk, [0, bk, -3]], yn, -1];
    var An = class extends H {
        getValue() {
            return F(this, 1)
        }
    };

    function Bn(a) {
        var b = new Cn;
        return Ai(b, 1, a)
    }
    var Cn = class extends H {
        getValue() {
            return F(this, 1)
        }
    };
    var Dn = class extends H {
        getValue() {
            return F(this, 1)
        }
    };
    var En = class extends H {
        getHeight() {
            return ii(this, 2)
        }
    };

    function Fn(a, b) {
        return vi(a, 1, b)
    }

    function Gn(a, b) {
        return di(a, 2, b)
    }
    var Hn = class extends H {};
    var In = class extends H {};
    var Jn = class extends H {};
    var Ln = class extends H {
            setError(a) {
                return ci(this, 3, Kn, a)
            }
        },
        Kn = [2, 3];

    function Mn(a, b) {
        return xi(a, 1, b)
    }

    function Nn(a, b) {
        return xi(a, 2, b)
    }

    function On(a, b) {
        return xi(a, 3, b)
    }

    function Pn(a, b) {
        return xi(a, 4, b)
    }

    function Qn(a, b) {
        return xi(a, 5, b)
    }

    function Rn(a, b) {
        return Th(a, 8, eg(b), 0)
    }

    function Sn(a, b) {
        return Th(a, 9, eg(b), 0)
    }
    var Tn = class extends H {};

    function Un(a, b) {
        return xi(a, 1, b)
    }

    function Vn(a, b) {
        return xi(a, 2, b)
    }
    var Wn = class extends H {};

    function Xn(a, b) {
        fi(a, 1, Wn, b)
    }
    var Rh = class extends H {};
    var Yn = class extends H {};

    function Zn(a, b) {
        return Sh(a, 1, b, Kg)
    }

    function $n(a, b) {
        return Sh(a, 12, b, Fg)
    }

    function ao() {
        var a = new bo;
        return ei(a, 2, Kg, "irr", Sg)
    }

    function co(a, b) {
        return ui(a, 3, b)
    }

    function eo(a, b) {
        return ui(a, 4, b)
    }

    function fo(a, b) {
        return ui(a, 5, b)
    }

    function go(a, b) {
        return ui(a, 7, b)
    }

    function ho(a, b) {
        return ui(a, 8, b)
    }

    function io(a, b) {
        return xi(a, 9, b)
    }

    function jo(a, b) {
        return di(a, 10, b)
    }

    function ko(a, b) {
        return Sh(a, 11, b, qg)
    }
    var bo = class extends H {};

    function lo(a) {
        var b = mo();
        A(a, 1, b)
    }

    function no(a, b) {
        return xi(a, 2, b)
    }

    function oo(a, b) {
        return di(a, 3, b)
    }

    function po(a, b) {
        return di(a, 4, b)
    }

    function qo(a, b) {
        return fi(a, 4, Cn, b)
    }

    function ro(a, b) {
        return di(a, 5, b)
    }

    function so(a, b) {
        return Sh(a, 6, b, Kg)
    }

    function to(a, b) {
        return xi(a, 7, b)
    }

    function uo(a, b) {
        return xi(a, 8, b)
    }

    function vo(a, b) {
        A(a, 9, b)
    }

    function wo(a, b) {
        return ui(a, 10, b)
    }

    function xo(a, b) {
        return ui(a, 11, b)
    }

    function yo(a, b) {
        return ui(a, 12, b)
    }
    var zo = class extends H {};
    var Ao = class extends H {};
    var Bo = class extends H {};

    function Co(a) {
        var b = new Do;
        return G(b, 1, a)
    }
    var Do = class extends H {};
    var Eo = class extends H {};
    var Fo = class extends H {};
    var Go = class extends H {};
    var Ho = class extends H {},
        Io = [1, 2];
    var Jo = class extends H {};
    var Ko = class extends H {},
        Lo = [1];

    function Mo(a) {
        var b = new No;
        return G(b, 1, a)
    }
    var No = class extends H {};
    var Oo = class extends H {};
    var Po = class extends H {};
    var Qo = class extends H {};
    var Ro = class extends H {};
    var So = class extends H {};
    var To = class extends H {
        getContentUrl() {
            return D(this, 1)
        }
    };
    var Uo = class extends H {};

    function Vo(a) {
        var b = new Wo;
        return Sh(b, 1, a, kg)
    }
    var Wo = class extends H {};
    var Xo = class extends H {};

    function Yo() {
        var a = new Zo,
            b = new Xo;
        return ci(a, 1, $o, b)
    }

    function ap() {
        var a = new Zo,
            b = new Xo;
        return ci(a, 9, $o, b)
    }

    function bp() {
        var a = new Zo,
            b = new Xo;
        return ci(a, 13, $o, b)
    }

    function cp(a, b) {
        return ci(a, 14, $o, b)
    }
    var Zo = class extends H {},
        $o = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    var dp = class extends H {};
    var ep = class extends H {};
    var fp = class extends H {};
    var gp = class extends H {};

    function hp(a, b) {
        return Th(a, 10, Gg(b), "0")
    }

    function ip(a, b) {
        return G(a, 1, b)
    }
    var jp = class extends H {};
    var kp = class extends H {};
    var lp = class extends H {};
    var np = class extends H {
            i() {
                return oi(this, kp, 4, mp)
            }
            g() {
                return Gh(this, kp, 4, mp)
            }
        },
        mp = [4, 5];

    function op(a) {
        var b = new pp;
        return zi(b, 4, a)
    }

    function qp(a, b) {
        return Ch(a, 6, Gg(b))
    }
    var pp = class extends H {};
    var rp = class extends H {};
    var sp = class extends H {
        i() {
            return z(this, kp, 1)
        }
        g() {
            return Eh(this, kp, 1)
        }
    };
    var tp = class extends H {};
    var up = class extends H {};
    var vp = class extends H {};
    var wp = class extends H {};
    var xp = class extends H {},
        yp = [2, 3];
    var zp = class extends H {},
        Ap = [3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17];

    function Bp(a, b) {
        return xi(a, 3, b)
    }
    var Cp = class extends H {},
        Dp = [4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    var Ep = [0];
    var Fp = [0, gk, mk, [0, qk, kk, -2, dk, -2, [0, kk, 2, dk, -1, kk, [0, dk, -2, Sj], -1], mk, [0, kk, jk], ak, ik, bk], Wj, [0, gk, Wj, gk, -2]];
    var Gp = [0, Uj, -1];
    var Hp = sk([0, Dp, Wj, kk, Wj, K, [0, yn, -1, [0, ok], kk, gk], K, [0, [0, jk, -1, gk, -5, Wj, mk, [0, kk, Wj, gk, -1], Vj, Zj, ak], Wj, mk, [0, ok], mk, [0, ok], mk, [0, ok], jk, Wj, -1, [0, Wj, -4, 2, Qj, -1], gk, -2, 1, Gj, [!0, ik, [0, mk, [0, Wj, -1]]], mk, [0, kk, -2],
        [0, Kn, 1, K, [0, bk, -2, fk, mk, [0, bk, mk, [0, bk, -1]]], K, [0, ok, -1]]
    ], K, [0, Ap, Wj, -1, K, [0, mp, [0, kk, -1, gk, Uj],
            [0, jk, kk, -1], Wj, K, Fp, K, [0, mk, [0, $o, K, Ep, -2, 1, K, Ep, -1, K, [0, Wj], K, Ep, -5, K, [0, pk]]],
            [0, bk, -1, nk, -2, bk]
        ], K, [0, Wj, ak], K, [0, Wj], K, [0, Uj, Yj, ik, kk, gk, bk], K, [0, Wj], K, [0, Uj, -2, kk, fk, Yj, Uj], K, [0, yp, Wj, K, [0], K, [0]],
        [0, Wj, dk, Vj], K, [0, qk], K, [0, Wj, kk, ak], K, [0], K, [0, Fp, Wj], fk, K, [0, ak], K, [0, Wj], qk
    ], Wj, K, [0, kk, [0, dk, -1, [0, Qj, -5, gk]], Wj, zn], K, [0, qk, ck], K, [0, qk, -1, kk, -1], K, [0, Lo, K, [0, fk, -1]], K, [0, qk, gk, -9], K, [0, Io, K, [0, [0, qk, kk, -1]], K, [0, dk, -1, kk, [0, dk, -1], -1, gk, pk, dk, -1]], K, [0, [1, 2, 3, 4], K, [0, [0, Uj, -1], Gp, fk, ik], K, [0], K, [0, Gp], K, [0]], K, [0, [3, 4, 5, 6, 7, 8], Uj, [0, Tj], K, [0], K, [0], K, [0], K, [0], K, [0], K, [0, [1, 2, 3, 4, 5], K, [0], -4]], K, [0, xn, Uj, -2, [0, ik, -2, fk, [0, ik, -3]], K, [0], K, [0]], K, zn]);

    function Ip(a, b) {
        return xi(a, 1, b)
    }

    function Jp(a, b) {
        return xi(a, 2, b)
    }

    function Kp(a) {
        return G(a, 3, 6)
    }
    var Lp = class extends H {
        getTagSessionCorrelator() {
            return ji(this, 1)
        }
    };
    var Mp = sk([0, Wj, -1, qk]);
    var Np = class extends H {};

    function Op() {
        var a = Fi(Pp());
        return zi(a, 1, Qp())
    }
    var Rp = class extends H {};
    var Sp = [0, [0, Uj, ek, -1], kk];
    var jq = class extends H {};
    var kq = class extends H {
        getTagSessionCorrelator() {
            return ji(this, 1)
        }
    };
    var lq = class extends H {},
        mq = [1, 7],
        nq = [4, 6, 8];
    var oq = sk([0, mq, nq, K, [0, qk, kk, -1, jk, -1, Sp],
        [0, Wj, ck, kk], 1, K, [0, kk, dk, jk], Wj, K, [0, kk, -1, ik, [0, ck], 1, qk, kk, -1], K, [0, kk, -1, jk, -1, Sp], K, [0, [1], K, [0, [0, kk, -2, qk, kk]],
            [0, Wj, -1]
        ]
    ]);
    class pq {
        constructor(a) {
            this.I = a;
            this.Je = new qq(this.I)
        }
    }
    class qq {
        constructor(a) {
            this.I = a;
            this.zd = new rq(this.I)
        }
    }
    class rq {
        constructor(a) {
            this.I = a;
            this.g = new sq(this.I);
            this.ei = new tq(this.I)
        }
    }
    class sq {
        constructor(a) {
            this.I = a;
            this.i = new uq(this.I);
            this.g = new vq(this.I)
        }
    }
    class uq {
        constructor(a) {
            this.I = a
        }
        nd(a) {
            this.I.g(qn(M(on("xR0Czf"), fn(new L, a.status)), mn(new nn, a.qd)))
        }
    }
    class vq {
        constructor(a) {
            this.I = a
        }
        nd(a) {
            this.I.g(qn(M(on("jM4CPd"), hn(new L, en(a.il))), mn(new nn, a.qd)))
        }
    }
    class tq {
        constructor(a) {
            this.I = a;
            this.Fi = new wq(this.I);
            this.Gi = new xq(this.I);
            this.Ze = new yq(this.I);
            this.Hi = new zq(this.I);
            this.Ii = new Aq(this.I);
            this.Ji = new Bq(this.I);
            this.Ki = new Cq(this.I);
            this.bf = new Dq(this.I);
            this.cj = new Eq(this.I);
            this.pj = new Fq(this.I);
            this.qj = new Gq(this.I);
            this.Ij = new Hq(this.I);
            this.Ik = new Iq(this.I)
        }
    }
    class wq {
        constructor(a) {
            this.I = a
        }
        Ga(a) {
            this.I.g(qn(M(M(on("VEDP7d"), fn(new L, a.language)), hn(new L, a.ya)), kn(new nn, en(a.ea))))
        }
    }
    class xq {
        constructor(a) {
            this.I = a
        }
        Ga(a) {
            this.I.g(qn(M(M(on("igjuhc"), fn(new L, a.language)), hn(new L, a.ya)), kn(new nn, en(a.ea))))
        }
    }
    class yq {
        constructor(a) {
            this.I = a
        }
        nd(a) {
            this.I.g(qn(M(M(M(M(M(on("i3zJEd"), fn(new L, a.language)), hn(new L, a.ya)), hn(new L, a.outcome)), jn(new L, a.cd)), jn(new L, a.Ff)), mn(new nn, a.qd)))
        }
    }
    class zq {
        constructor(a) {
            this.I = a
        }
        Ga(a) {
            this.I.g(qn(M(M(M(M(M(on("JN0hVd"), fn(new L, a.language)), hn(new L, a.ya)), hn(new L, a.outcome)), jn(new L, a.cd)), jn(new L, a.Ff)), kn(new nn, en(a.ea))))
        }
    }
    class Aq {
        constructor(a) {
            this.I = a
        }
        Ga(a) {
            this.I.g(qn(M(M(M(on("rmHfOd"), fn(new L, a.language)), hn(new L, a.ya)), hn(new L, a.reason)), kn(new nn, en(a.ea))))
        }
    }
    class Bq {
        constructor(a) {
            this.I = a
        }
        Ga(a) {
            this.I.g(qn(M(M(M(on("VEyQic"), fn(new L, a.language)), hn(new L, a.ya)), hn(new L, a.format)), kn(new nn, en(a.ea))))
        }
    }
    class Cq {
        constructor(a) {
            this.I = a
        }
        Ga(a) {
            this.I.g(qn(M(M(M(on("QFcNxc"), fn(new L, a.language)), hn(new L, a.ya)), hn(new L, a.format)), kn(new nn, en(a.ea))))
        }
    }
    class Dq {
        constructor(a) {
            this.I = a
        }
        Ga(a) {
            this.I.g(qn(M(M(M(M(on("SIhp4"), fn(new L, a.language)), hn(new L, a.ya)), hn(new L, a.format)), jn(new L, a.cd)), kn(new nn, en(a.ea))))
        }
    }
    class Eq {
        constructor(a) {
            this.I = a
        }
        Ga(a) {
            this.I.g(qn(M(M(M(on("Eeiun"), fn(new L, a.language)), hn(new L, a.ya)), hn(new L, a.format)), kn(new nn, en(a.ea))))
        }
    }
    class Fq {
        constructor(a) {
            this.I = a
        }
        Ga(a) {
            this.I.g(qn(M(M(on("zGH6sc"), fn(new L, a.language)), hn(new L, a.ya)), kn(new nn, en(a.ea))))
        }
    }
    class Gq {
        constructor(a) {
            this.I = a
        }
        Ga(a) {
            this.I.g(qn(M(M(M(on("SmbJl"), fn(new L, a.language)), hn(new L, a.ya)), hn(new L, a.type)), kn(new nn, en(a.ea))))
        }
    }
    class Hq {
        constructor(a) {
            this.I = a
        }
        Ga(a) {
            this.I.g(qn(M(M(M(on("qleBg"), fn(new L, a.language)), hn(new L, a.ya)), hn(new L, a.format)), kn(new nn, en(a.ea))))
        }
    }
    class Iq {
        constructor(a) {
            this.I = a
        }
        Ga(a) {
            this.I.g(qn(M(M(M(on("pYLGPe"), fn(new L, a.language)), hn(new L, a.ya)), hn(new L, a.type)), kn(new nn, en(a.ea))))
        }
    }
    class Jq extends dn {
        constructor() {
            super(...arguments);
            this.ne = new pq(this)
        }
    }
    var Kq = class extends Jq {
            ci(...a) {
                this.l(...a.map(b => ({
                    Ra: !0,
                    kb: 3,
                    me: jh(b)
                })))
            }
            Rb(...a) {
                this.l(...a.map(b => ({
                    Ra: !0,
                    kb: 7,
                    me: jh(b)
                })))
            }
            D(...a) {
                this.l(...a.map(b => ({
                    Ra: !0,
                    kb: 16,
                    me: jh(b)
                })))
            }
            g(...a) {
                this.l(...a.map(b => ({
                    Ra: !1,
                    kb: 1,
                    me: jh(b)
                })))
            }
        },
        Mq = class extends Jq {
            ci(...a) {
                Lq(this, ...a.map(b => ({
                    Ra: !0,
                    kb: 3,
                    Ge: oq(b)
                })))
            }
            Rb(...a) {
                Lq(this, ...a.map(b => ({
                    Ra: !0,
                    kb: 7,
                    Ge: Hp(b)
                })))
            }
            D(...a) {
                Lq(this, ...a.map(b => ({
                    Ra: !0,
                    kb: 16,
                    Ge: Mp(b)
                })))
            }
            g(...a) {
                Lq(this, ...a.map(b => ({
                    Ra: !1,
                    kb: 1,
                    Ge: rn(b)
                })))
            }
        };

    function Nq(a, b) {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: b.length < 65536,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    }
    var Oq = class extends Kq {
            constructor(a) {
                super(2, a);
                this.j = Nq
            }
            l(...a) {
                try {
                    const b = $m(a, this.i);
                    this.j("https://pagead2.googlesyndication.com/pagead/ping?e=1", b)
                } catch (b) {
                    an(b, this.i)
                }
            }
        },
        Pq = class extends Oq {};

    function Qq(a) {
        a.A !== null && (clearTimeout(a.A), a.A = null);
        if (a.j.length) {
            var b = $m(a.j, a.i);
            a.G("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.j = []
        }
    }
    var Sq = class extends Kq {
            constructor(a, b, c, d, e) {
                super(2, a);
                this.G = Nq;
                this.V = b;
                this.J = c;
                this.M = d;
                this.C = e;
                this.j = [];
                this.A = null;
                this.H = !1
            }
            l(...a) {
                try {
                    this.M && $m(this.j.concat(a), this.i).length >= 65536 && Qq(this), this.C && !this.H && (this.H = !0, Rq(this.C, () => {
                        Qq(this)
                    })), this.j.push(...a), this.j.length >= this.J && Qq(this), this.j.length && this.A === null && (this.A = setTimeout(() => {
                        Qq(this)
                    }, this.V))
                } catch (b) {
                    an(b, this.i)
                }
            }
        },
        Tq = class extends Sq {
            constructor(a, b = 1E3, c = 100, d = !1, e) {
                super(a, b, c, d && !0, e)
            }
        };
    var P = a => {
        var b = "Qf";
        if (a.Qf && a.hasOwnProperty(b)) return a.Qf;
        b = new a;
        return a.Qf = b
    };

    function Uq(a, b, c) {
        return b[a] || c
    };

    function Vq(a, b) {
        a.i = (c, d) => Uq(2, b, () => [])(c, 1, d);
        a.g = () => Uq(3, b, () => [])(1)
    }
    class Wq {
        i() {
            return []
        }
        g() {
            return []
        }
    }

    function Xq(a, b) {
        return P(Wq).i(a, b)
    };

    function Wm(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Um ? f = c : (f = new Um, Ud(c, (h, k) => {
                var l = f;
                const m = l.A++;
                h = Pm(k, h);
                l.g.push(m);
                l.i[m] = h
            }));
            const g = Tm(f, a.protocol, a.domain, a.path + b + "&");
            g && Xk(r, g)
        } catch (f) {}
    }

    function Yq(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    var Zq = class {
        constructor() {
            this.domain = "pagead2.googlesyndication.com";
            this.path = "/pagead/gen_204?id=";
            this.protocol = "https:";
            this.g = Math.random()
        }
    };
    let Vm, $q;
    const ar = new Om(window);
    (function(a) {
        Vm = a ? ? new Zq;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Yq(Vm, window.google_srt);
        $q = new Xm(ar);
        $q.j(() => {});
        $q.l(!0);
        window.document.readyState === "complete" ? window.google_measure_js_timing || Mm(ar) : ar.g && xk(window, "load", () => {
            window.google_measure_js_timing || Mm(ar)
        })
    })();

    function br(a) {
        $q.Sa(1085, a)
    };
    let cr = (new Date).getTime();
    var dr = {
        on: 0,
        nn: 1,
        kn: 2,
        en: 3,
        ln: 4,
        fn: 5,
        mn: 6,
        hn: 7,
        jn: 8,
        dn: 9,
        gn: 10,
        qn: 11
    };
    var er = {
        sn: 0,
        un: 1,
        rn: 2
    };

    function fr(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function gr(a) {
        a = a.map(b => new Al(b.top, b.right, b.bottom, b.left));
        a = hr(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function hr(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return a.slice(1).reduce((b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, Bl(a[0]))
    };
    var wc = {
        jo: 0,
        Rm: 1,
        Um: 2,
        Sm: 3,
        Tm: 4,
        bn: 8,
        uo: 9,
        Gn: 10,
        Hn: 11,
        ro: 16,
        Lm: 17,
        Km: 24,
        En: 25,
        pm: 26,
        om: 27,
        yi: 30,
        xn: 32,
        Bn: 40,
        zo: 41,
        vo: 42
    };
    var ir = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        jr = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };
    var kr = 728 * 1.38;

    function lr(a, b = -1) {
        if (a !== a.top) {
            if (b < 0) a = !1;
            else {
                var c = mr(a, !0, !0),
                    d = nr(a, !0);
                a = c > 0 && d > 0 && Math.abs(1 - a.screen.width / c) <= b && Math.abs(1 - a.screen.height / d) <= b
            }
            a = a ? 0 : 512
        } else a = 0;
        return a
    }

    function or(a, b = 420, c = !1, d = !1) {
        return (a = mr(a, c, d)) ? a > b ? 32768 : a < 320 ? 65536 : 0 : 16384
    }

    function pr(a) {
        return Math.max(0, qr(a, !0) - nr(a))
    }

    function rr(a) {
        a = a.document;
        let b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }

    function nr(a, b = !1) {
        const c = rr(a).clientHeight;
        return b ? c * (Zb() && rc() ? Fe(a) : 1) : c
    }

    function mr(a, b = !1, c = !1) {
        c = rr(a).clientWidth ? ? (c ? a.innerWidth : void 0);
        return b ? c * (Zb() && rc() ? Fe(a) : 1) : c
    }

    function qr(a, b) {
        const c = rr(a);
        return b ? (a = nr(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    }

    function sr(a, b) {
        var c = Q(tr);
        return ur(b) || b === 10 || !a.adCount ? !1 : c || b !== 1 && b !== 2 ? (a = a.adCount[b]) ? a >= 1 : !1 : !(!a.adCount[1] && !a.adCount[2])
    }

    function vr(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }

    function wr(a) {
        return a.pageYOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }

    function xr(a) {
        return a.pageXOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }

    function yr(a) {
        const b = {};
        let c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                const d = c[a];
                if ("key" in d && "value" in d) {
                    const e = d.value;
                    b[d.key] = e == null ? null : String(e)
                }
            }
        return b
    }

    function zr(a, b, c, d) {
        Wm(c, b, {
            c: d.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }

    function Ar(a) {
        const b = {
            bottom: "auto",
            clear: "none",
            display: "inline",
            "float": "none",
            height: "auto",
            left: "auto",
            margin: 0,
            "margin-bottom": 0,
            "margin-left": 0,
            "margin-right": "0",
            "margin-top": 0,
            "max-height": "none",
            "max-width": "none",
            opacity: 1,
            overflow: "visible",
            padding: 0,
            "padding-bottom": 0,
            "padding-left": 0,
            "padding-right": 0,
            "padding-top": 0,
            position: "static",
            right: "auto",
            top: "auto",
            "vertical-align": "baseline",
            visibility: "visible",
            width: "auto",
            "z-index": "auto"
        };
        Ma(Object.keys(b), c => {
            hm(a, c) || em(a, c, b[c])
        });
        te(a)
    }

    function ur(a) {
        return a === 26 || a === 27 || a === 40 || a === 41
    };

    function Br(a, b) {
        Cr(a).forEach(b, void 0)
    }

    function Cr(a) {
        const b = [],
            c = a.length;
        for (let d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function Dr(a, b) {
        return a.g[Er(b)] !== void 0
    }

    function Fr(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.i[c]);
        return b
    }

    function Gr(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.g[c]);
        return b
    }
    var Hr = class {
        constructor() {
            this.g = {};
            this.i = {}
        }
        set(a, b) {
            const c = Er(a);
            this.g[c] = b;
            this.i[c] = a
        }
        get(a, b) {
            a = Er(a);
            return this.g[a] !== void 0 ? this.g[a] : b
        }
        Zc() {
            return Fr(this).length
        }
        clear() {
            this.g = {};
            this.i = {}
        }
    };

    function Er(a) {
        return a instanceof Object ? String(ta(a)) : a + ""
    };
    var Ir = class {
        constructor(a) {
            this.g = new Hr;
            if (a)
                for (let b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return Dr(this.g, a)
        }
    };
    const Jr = new Ir("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function Kr(a, {
        yb: b,
        qb: c,
        Zb: d
    }) {
        return d && c(b) ? b : (b = b.parentElement) ? Lr(a, {
            yb: b,
            qb: c,
            Zb: !0
        }) : null
    }

    function Lr(a, {
        yb: b,
        qb: c,
        Zb: d = !1
    }) {
        const e = Mr({
                yb: b,
                qb: c,
                Zb: d
            }),
            f = a.g.get(e);
        if (f) return f.element;
        b = Kr(a, {
            yb: b,
            qb: c,
            Zb: d
        });
        a.g.set(e, {
            element: b
        });
        return b
    }
    var Nr = class {
        constructor() {
            this.g = new Map
        }
    };

    function Mr({
        yb: a,
        qb: b,
        Zb: c
    }) {
        a = ta(a);
        b = ta(b);
        return `${a}:${b}:${c}`
    };

    function Or(a) {
        $b(a.document.body.offsetHeight)
    };

    function Pr(a) {
        a && typeof a.dispose == "function" && a.dispose()
    };

    function R() {
        this.A = this.A;
        this.H = this.H
    }
    R.prototype.A = !1;
    R.prototype.dispose = function() {
        this.A || (this.A = !0, this.g())
    };
    R.prototype[ja(Symbol, "dispose")] = function() {
        this.dispose()
    };

    function Qr(a, b) {
        Rr(a, Ea(Pr, b))
    }

    function Rr(a, b) {
        a.A ? b() : (a.H || (a.H = []), a.H.push(b))
    }
    R.prototype.g = function() {
        if (this.H)
            for (; this.H.length;) this.H.shift()()
    };

    function Sr(a) {
        a.i.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function Tr(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.i.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.i.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var Ur = class extends R {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.i = b
        }
        g() {
            Sr(this);
            super.g()
        }
    };

    function Vr(a) {
        const b = new S(a.getValue());
        a.listen(c => b.g(c));
        return b
    }

    function Wr(a, b) {
        const c = new S({
            first: a.O,
            second: b.O
        });
        a.listen(() => c.g({
            first: a.O,
            second: b.O
        }));
        b.listen(() => c.g({
            first: a.O,
            second: b.O
        }));
        return c
    }

    function Xr(...a) {
        const b = [...a],
            c = () => b.every(f => f.O),
            d = new S(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return Yr(d)
    }

    function Zr(...a) {
        const b = [...a],
            c = () => b.findIndex(f => f.O) !== -1,
            d = new S(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return Yr(d)
    }

    function Yr(a, b = $r) {
        var c = a.O;
        const d = new S(a.O);
        a.listen(e => {
            b(e, c) || (c = e, d.g(e))
        });
        return d
    }

    function as(a, b, c) {
        return a.i(d => {
            d === b && c()
        })
    }

    function bs(a, b, c) {
        if (a.O === b) return c(), () => {};
        const d = {
            Ic: null
        };
        d.Ic = as(a, b, () => {
            d.Ic && (d.Ic(), d.Ic = null);
            c()
        });
        return d.Ic
    }

    function cs(a, b, c) {
        Yr(a).listen(d => {
            d === b && c()
        })
    }

    function ds(a, b) {
        a.A && a.A();
        a.A = b.listen(c => a.g(c), !0)
    }

    function es(a, b, c, d) {
        const e = new S(!1);
        var f = null;
        a = a.map(d);
        as(a, !0, () => {
            f === null && (f = b.setTimeout(() => {
                e.g(!0)
            }, c))
        });
        as(a, !1, () => {
            e.g(!1);
            f !== null && (b.clearTimeout(f), f = null)
        });
        return Yr(e)
    }

    function fs(a) {
        return {
            listen: b => a.listen(b),
            getValue: () => a.O
        }
    }
    var S = class {
        constructor(a) {
            this.O = a;
            this.j = new Map;
            this.C = 1;
            this.A = null
        }
        listen(a, b = !1) {
            const c = this.C++;
            this.j.set(c, a);
            b && a(this.O);
            return () => {
                this.j.delete(c)
            }
        }
        i(a) {
            return this.listen(a, !0)
        }
        l() {
            return this.O
        }
        g(a) {
            this.O = a;
            this.j.forEach(b => {
                b(this.O)
            })
        }
        map(a) {
            const b = new S(a(this.O));
            this.listen(c => b.g(a(c)));
            return b
        }
    };

    function $r(a, b) {
        return a == b
    };

    function gs(a) {
        return new hs(a)
    }

    function is(a, b) {
        Ma(a.g, c => {
            c(b)
        })
    }
    var js = class {
        constructor() {
            this.g = []
        }
    };
    class hs {
        constructor(a) {
            this.g = a
        }
        listen(a) {
            this.g.g.push(a)
        }
        map(a) {
            const b = new js;
            this.listen(c => is(b, a(c)));
            return gs(b)
        }
        delay(a, b) {
            const c = new js;
            this.listen(d => {
                a.setTimeout(() => {
                    is(c, d)
                }, b)
            });
            return gs(c)
        }
    }

    function ks(...a) {
        const b = new js;
        a.forEach(c => {
            c.listen(d => {
                is(b, d)
            })
        });
        return gs(b)
    };

    function ls(a) {
        return Yr(Wr(a.g, a.j).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : ms(c, b)
        }))
    }
    var os = class {
        constructor(a) {
            this.i = a;
            this.g = new S(null);
            this.j = new S(null);
            this.A = new js;
            this.H = b => {
                this.g.O == null && b.touches.length == 1 && this.g.g(b.touches[0])
            };
            this.l = b => {
                const c = this.g.O;
                c != null && (b = ns(c, b.changedTouches), b != null && (this.g.g(null), this.j.g(null), is(this.A, ms(c, b))))
            };
            this.C = b => {
                var c = this.g.O;
                c != null && (c = ns(c, b.changedTouches), c != null && (this.j.g(c), b.preventDefault()))
            }
        }
    };

    function ms(a, b) {
        return {
            si: b.pageX - a.pageX,
            ti: b.pageY - a.pageY
        }
    }

    function ns(a, b) {
        if (b == null) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function ps(a) {
        return Yr(Wr(a.g, a.i).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : qs(c, b)
        }))
    }
    var rs = class {
        constructor(a, b) {
            this.A = a;
            this.l = b;
            this.g = new S(null);
            this.i = new S(null);
            this.j = new js;
            this.D = c => {
                this.g.g(c)
            };
            this.C = c => {
                const d = this.g.O;
                d != null && (this.g.g(null), this.i.g(null), is(this.j, qs(d, c)))
            };
            this.H = c => {
                this.g.O != null && (this.i.g(c), c.preventDefault())
            }
        }
    };

    function qs(a, b) {
        return {
            si: b.screenX - a.screenX,
            ti: b.screenY - a.screenY
        }
    };
    var us = (a, b, c) => {
        const d = new ss(a, b, c);
        return () => ts(d)
    };

    function ts(a) {
        if (a.g) return !1;
        if (a.i == null) return vs(a), !0;
        const b = a.i + a.l - (new Date).getTime();
        if (b < 1) return vs(a), !0;
        ws(a, b);
        return !0
    }

    function vs(a) {
        a.i = (new Date).getTime();
        a.A()
    }

    function ws(a, b) {
        a.g = !0;
        a.j.setTimeout(() => {
            a.g = !1;
            vs(a)
        }, b)
    }
    class ss {
        constructor(a, b, c) {
            this.j = a;
            this.l = b;
            this.A = c;
            this.i = null;
            this.g = !1
        }
    };

    function xs(a) {
        return ys(ps(a.g), ls(a.i))
    }

    function zs(a) {
        return ks(gs(a.g.j), gs(a.i.A))
    }
    var As = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function ys(a, b) {
        return Wr(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };
    var Bs = class {
        constructor() {
            this.cache = new Map
        }
        getBoundingClientRect(a) {
            var b = this.cache.get(a);
            if (b) return b;
            b = a.getBoundingClientRect();
            this.cache.set(a, b);
            return b
        }
    };

    function Cs(a) {
        a.C == null && (a.C = new S(a.D.getBoundingClientRect()));
        return a.C
    }
    var Ds = class extends R {
        constructor(a, b) {
            super();
            this.j = a;
            this.D = b;
            this.G = !1;
            this.C = null;
            this.l = () => {
                Cs(this).g(this.D.getBoundingClientRect())
            }
        }
        i() {
            this.G || (this.G = !0, this.j.addEventListener("resize", this.l), this.j.addEventListener("scroll", this.l));
            return Cs(this)
        }
        g() {
            this.j.removeEventListener("resize", this.l);
            this.j.removeEventListener("scroll", this.l);
            super.g()
        }
    };

    function Es(a, b) {
        return new Fs(a, b)
    }

    function Gs(a) {
        a.B.requestAnimationFrame(() => {
            a.A || a.j.g(new Dl(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function Hs(a) {
        a.i || (a.i = !0, a.l.observe(a.element));
        return Yr(a.j, El)
    }
    var Fs = class extends R {
        constructor(a, b) {
            super();
            this.B = a;
            this.element = b;
            this.i = !1;
            this.j = new S(new Dl(this.element.offsetWidth, this.element.offsetHeight));
            this.l = new ResizeObserver(() => {
                Gs(this)
            })
        }
        g() {
            this.l.disconnect();
            super.g()
        }
    };

    function Is(a, b) {
        return {
            top: a.g - b,
            right: a.j + a.i,
            bottom: a.g + b,
            left: a.j
        }
    }
    var Js = class {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.i = c
        }
    };

    function Ks(a, b) {
        a = a.getBoundingClientRect();
        return new Ls(a.top + wr(b), a.bottom - a.top)
    }

    function Ms(a) {
        return new Ls(Math.round(a.g), Math.round(a.i))
    }
    var Ls = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getHeight() {
            return this.i
        }
    };
    var Os = (a, b) => {
        const c = a.google_pso_loaded_fonts || (a.google_pso_loaded_fonts = []),
            d = new Ir(c);
        b = b.filter(e => !d.contains(e));
        b.length && (Ns(a, b), db(c, b))
    };

    function Ns(a, b) {
        for (const d of b) {
            const e = Rd("LINK", a.document);
            e.type = "text/css";
            b = e;
            var c = Jd `//fonts.googleapis.com/css?family=${d}`;
            b.href = Jc(c).toString();
            b.rel = "stylesheet";
            a.document.head.appendChild(e)
        }
    };

    function Ps(a, b) {
        a.G ? b(a.l) : a.j.push(b)
    }

    function Qs(a, b) {
        a.G = !0;
        a.l = b;
        a.j.forEach(c => {
            c(a.l)
        });
        a.j = []
    }
    var Rs = class extends R {
        constructor(a) {
            super();
            this.i = a;
            this.j = [];
            this.G = !1;
            this.D = this.l = null;
            this.J = us(a, 1E3, () => {
                if (this.D != null) {
                    var b = qr(this.i, !0) - this.D;
                    b > 1E3 && Qs(this, b)
                }
            });
            this.C = null
        }
        init(a, b) {
            a == null ? (this.D = a = qr(this.i, !0), this.i.addEventListener("scroll", this.J), b != null && b(a)) : this.C = this.i.setTimeout(() => {
                this.init(void 0, b)
            }, a)
        }
        g() {
            this.C != null && this.i.clearTimeout(this.C);
            this.i.removeEventListener("scroll", this.J);
            this.j = [];
            this.l = null;
            super.g()
        }
    };
    var Ss = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    var Ts = class {
        constructor(a = 1) {
            this.g = a
        }
        next() {
            const a = 48271 * this.g % 2147483647;
            this.g = a * 2147483647 < 0 ? a + 2147483647 : a;
            return this.g / 2147483647
        }
    };

    function Us(a, b, c) {
        const d = [];
        for (const e of a.g) b(e) ? d.push(e) : c(e);
        return new Vs(d)
    }

    function Ws(a) {
        return a.g.slice(0)
    }

    function Xs(a) {
        return a.g.length
    }

    function Ys(a, b = 1) {
        a = Ws(a);
        const c = new Ts(b);
        jb(a, () => c.next());
        return new Vs(a)
    }
    var Vs = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Vs(Pa(this.g, a))
        }
        apply(a) {
            return new Vs(a(Ws(this)))
        }
        sort(a) {
            return new Vs(Ws(this).sort(a))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = Ws(this);
            b.push(a);
            return new Vs(b)
        }
    };
    var Zs = class {
        constructor(a) {
            this.g = new Ir(a)
        }
        contains(a) {
            return this.g.contains(a)
        }
    };

    function $s(a) {
        return new at({
            value: a
        }, null)
    }

    function bt(a) {
        return new at(null, a)
    }

    function ct(a) {
        try {
            return $s(a())
        } catch (b) {
            return bt(b)
        }
    }

    function dt(a) {
        return a.i != null
    }

    function et(a) {
        return dt(a) ? a.getValue() : null
    }

    function ft(a, b) {
        dt(a) && b(a.getValue());
        return a
    }

    function gt(a, b) {
        return dt(a) ? a : bt(b(a.g))
    }

    function ht(a, b) {
        return gt(a, c => Error(`${b}${c.message}`))
    }

    function it(a, b) {
        dt(a) || b(a.g);
        return a
    }
    var at = class {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
        getValue() {
            return this.i.value
        }
        map(a) {
            return dt(this) ? (a = a(this.getValue()), a instanceof at ? a : $s(a)) : this
        }
    };
    var jt = class {
        constructor() {
            this.g = new Hr
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new Ir, this.g.set(a, c));
            c.add(b)
        }
    };

    function kt(a) {
        return !a
    }

    function lt(a) {
        return b => {
            for (const c of a) c(b)
        }
    };

    function mt(a) {
        return a !== null
    };
    var nt = class extends H {
        getId() {
            return ri(this, 3)
        }
    };
    var ot = class {
        constructor(a, {
            Og: b,
            Di: c,
            Wj: d,
            Xh: e
        }) {
            this.l = a;
            this.j = c;
            this.A = new Vs(b || []);
            this.i = e;
            this.g = d
        }
    };
    var pt = a => {
            var b = a.split("~").filter(c => c.length > 0);
            a = new Hr;
            for (const c of b) b = c.indexOf("."), b == -1 ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        rt = a => {
            var b = qt(a);
            a = [];
            for (let c of b) b = String(c.Mc), a.push(c.Ub + "." + (b.length <= 20 ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const qt = a => {
            const b = [],
                c = a.A;
            c && Xs(c) && b.push({
                Ub: "a",
                Mc: st(c)
            });
            a.j != null && b.push({
                Ub: "as",
                Mc: a.j
            });
            a.g != null && b.push({
                Ub: "i",
                Mc: String(a.g)
            });
            a.i != null && b.push({
                Ub: "rp",
                Mc: String(a.i)
            });
            b.sort(function(d, e) {
                return d.Ub.localeCompare(e.Ub)
            });
            b.unshift({
                Ub: "t",
                Mc: tt(a.l)
            });
            return b
        },
        tt = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        st = a => {
            a = Ws(a).map(ut);
            a = JSON.stringify(a);
            return Wd(a)
        },
        ut = a => {
            const b = {};
            hi(a, 7) != null && (b.q = ri(a, 7));
            ng(y(a, 2)) != null &&
                (b.o = qi(a, 2));
            ng(y(a, 5)) != null && (b.p = qi(a, 5));
            return b
        };

    function vt() {
        var a = new wt;
        return Ai(a, 2, 1)
    }
    var wt = class extends H {
        setLocation(a) {
            return Ai(this, 1, a)
        }
        g() {
            return lg(y(this, 1))
        }
    };

    function xt(a) {
        const b = [].slice.call(arguments).filter(mc(e => e === null));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Tg || []);
            d = Object.assign(d, e.bd())
        });
        return new yt(c, d)
    }

    function zt(a) {
        switch (a) {
            case 1:
                return new yt(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new yt(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new yt(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new yt(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function At(a) {
        return a == null ? null : new yt(null, {
            google_ml_rank: a
        })
    }

    function Bt(a) {
        return a == null ? null : new yt(null, {
            google_placement_id: rt(a)
        })
    }

    function Ct({
        jj: a,
        Cj: b = null
    }) {
        if (a == null) return null;
        a = {
            google_daaos_ts: a
        };
        b != null && (a.google_erank = b + 1);
        return new yt(null, a)
    }
    var yt = class {
        constructor(a, b) {
            this.Tg = a;
            this.g = b
        }
        bd() {
            return this.g
        }
    };
    var Dt = class extends H {};
    var Et = class extends H {};
    var Ft = class extends H {
        i() {
            return ri(this, 2)
        }
        g() {
            return ri(this, 5)
        }
        A() {
            return ai(this, Et, 3, Jh())
        }
        l() {
            return ng(y(this, 4))
        }
        C() {
            return Ih(this, 6)
        }
        H() {
            return Eh(this, Dt, 7)
        }
    };
    var Gt = class extends H {};
    var Ht = class extends H {
        A() {
            return B(this, 12)
        }
        i() {
            return Eg(y(this, 13))
        }
        g() {
            return gi(this, 23)
        }
    };
    var It = class extends H {};

    function Jt(a) {
        return Ih(a, 1, Ah)
    }
    var Kt = class extends H {
        g() {
            return si(this, 3)
        }
        i() {
            return pi(this, 6)
        }
    };
    var Lt = class extends H {};
    var Mt = class extends H {};
    var Nt = class extends H {
        ia() {
            return z(this, nt, 1)
        }
        i() {
            return si(this, 2)
        }
    };
    var Ot = class extends H {};
    var Pt = class extends H {};
    var Qt = class extends H {
            getName() {
                return ri(this, 4)
            }
        },
        Rt = [1, 2, 3];
    var St = class extends H {
        g() {
            return z(this, Kt, 10)
        }
    };

    function Tt(a) {
        return pi(a, 1)
    }
    var Ut = class extends H {
        g() {
            return pi(this, 2)
        }
        i() {
            return pi(this, 3)
        }
    };
    var Vt = class extends H {
        g() {
            return Eg(y(this, 1, void 0, Ah))
        }
    };
    var Wt = class extends H {
        g() {
            return ji(this, 1)
        }
    };
    var Xt = class extends H {
        g() {
            return D(this, 1)
        }
        i() {
            return D(this, 2)
        }
    };
    var Yt = class extends H {
        A() {
            return B(this, 1)
        }
        l() {
            return B(this, 3)
        }
        C() {
            return B(this, 7)
        }
        g() {
            return B(this, 4)
        }
        i() {
            return B(this, 5)
        }
    };
    var Zt = class extends H {
        g() {
            return z(this, Wt, 6)
        }
        i() {
            return z(this, Yt, 12)
        }
    };
    var $t = class extends H {};
    var au = class extends H {};
    var bu = class extends H {};
    var cu = class extends H {
        g() {
            return ai(this, bu, 1, Jh())
        }
    };
    var du = class extends H {
        setProperty(a) {
            return yi(this, 1, a)
        }
        getValue() {
            return ri(this, 2)
        }
    };
    var eu = class extends H {};
    var fu = class extends H {};
    var gu = class extends H {
        ia() {
            return z(this, nt, 1)
        }
        i() {
            return si(this, 2)
        }
    };
    var hu = class extends H {};
    var iu = class extends H {};
    var ju = class extends H {
        g() {
            return mi(this, 6)
        }
    };
    var ku = class extends H {
        Gf() {
            return Eh(this, iu, 2)
        }
    };
    var lu = class extends H {
        g() {
            return ji(this, 1)
        }
    };
    var mu = class extends H {};
    var ou = class extends H {
            g() {
                return oi(this, mu, 2, nu)
            }
        },
        nu = [1, 2];
    var pu = class extends H {
        g() {
            return z(this, ou, 3)
        }
    };
    var qu = class extends H {};
    var ru = class extends H {
        g() {
            return ai(this, qu, 1, Jh())
        }
    };
    var su = class extends H {
        g() {
            return mi(this, 1)
        }
        i() {
            return z(this, pu, 3)
        }
    };
    var tu = tk(class extends H {
        g() {
            return z(this, Ht, 15)
        }
    });
    var uu = class extends H {},
        vu = tk(uu);

    function wu(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? vu(b) : null
        } catch (b) {
            return null
        }
    }

    function xu(a, b) {
        if (a.uf !== void 0) {
            var c = wu(b);
            c || (c = new uu);
            a.uf !== void 0 && ti(c, 2, a.uf);
            a = Date.now() + 864E5;
            Number.isFinite(a) && Ch(c, 1, wg(Math.round(a)));
            c = Gi(c);
            try {
                b.localStorage.setItem("google_ama_settings", c)
            } catch (d) {}
        } else {
            if (c = a = wu(b)) c = ji(a, 1), c = BigInt(c) < Date.now();
            if (c) try {
                b.localStorage.removeItem("google_ama_settings")
            } catch (d) {}
        }
    };
    var yu = {
            nc: "ama_success",
            ub: .1,
            Hb: !0,
            sc: !0
        },
        zu = {
            nc: "ama_failure",
            ub: .1,
            Hb: !0,
            sc: !0
        },
        Au = {
            nc: "ama_coverage",
            ub: .1,
            Hb: !0,
            sc: !0
        },
        Bu = {
            nc: "ama_opt",
            ub: .1,
            Hb: !0,
            sc: !1
        },
        Cu = {
            nc: "ama_auto_rs",
            ub: 1,
            Hb: !0,
            sc: !1
        },
        Du = {
            nc: "ama_constraints",
            ub: 0,
            Hb: !0,
            sc: !0
        };

    function Eu(a) {
        if (a != null) return Fu(a)
    }

    function Fu(a) {
        return Qf(a) ? Number(a) : String(a)
    };

    function Gu(a, b) {
        Hu(a.i, Cu, { ...b,
            evt: "place",
            vh: nr(a.B),
            eid: Eu(a.g.g() ? .g()) || 0,
            hl: z(a.g, Xt, 5) ? .g() || ""
        })
    }

    function Iu(a, b, c) {
        b = {
            sts: b
        };
        c && (b.excp_n = c.name, b.excp_m = c.message && c.message.substring(0, 512), b.excp_s = c.stack && zm(c.stack, "") || "");
        Gu(a, b)
    }
    var Ju = class {
        constructor(a, b, c) {
            this.B = a;
            this.i = b;
            this.g = c
        }
    };
    const Ku = ["-webkit-text-fill-color"];

    function Lu(a, b) {
        if (cc) {
            {
                const d = Sd(a.document.body, a);
                if (d) {
                    a = {};
                    var c = d.length;
                    for (let e = 0; e < c; ++e) a[d[e]] = "initial";
                    a = Mu(a)
                } else a = Nu()
            }
        } else a = Nu();
        u(b, a)
    }

    function Nu() {
        const a = {
            all: "initial"
        };
        Ma(Ku, b => {
            a[b] = "unset"
        });
        return a
    }

    function Mu(a) {
        Ma(Ku, b => {
            delete a[b]
        });
        return a
    };
    var Ou = class {
        constructor(a) {
            this.g = a
        }
        Yc(a) {
            const b = a.document.createElement("div");
            Lu(a, b);
            u(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.g);
            const c = a.document.createElement("div");
            Lu(a, c);
            u(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };

    function Pu(a) {
        if (a.nodeType != 1) var b = !1;
        else if (b = a.tagName == "INS") a: {
            b = ["adsbygoogle-placeholder"];
            var c = a.className ? a.className.split(/\s+/) : [];a = {};
            for (let d = 0; d < c.length; ++d) a[c[d]] = !0;
            for (c = 0; c < b.length; ++c)
                if (!a[b[c]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function Qu(a) {
        return Cr(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };

    function Ru(a, b) {
        a = cm(new Rl(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function Su(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    let d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && d.nodeType == 8;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Pu(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Tu(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Pu(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var T = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        U = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        Uu = class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        },
        Vu = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        },
        Wu = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var Xu = new U(619278254, 10),
        Yu = new U(1359),
        Zu = new U(1358),
        $u = new T(1360),
        av = new U(1357),
        bv = new T(1345),
        cv = new T(687716473),
        dv = new T(1377),
        ev = new T(676894296, !0),
        fv = new T(682658313, !0),
        gv = new U(1130, 100),
        hv = new T(45694447),
        iv = new U(1340, .2),
        jv = new U(1338, .3),
        kv = new U(1336, 1),
        lv = new U(1339, .3),
        mv = new T(1337),
        nv = new U(1032, 200),
        ov = new T(736254284),
        pv = new Uu(14),
        qv = new U(1224, .01),
        rv = new U(1346, 6),
        sv = new U(1347, 3),
        tv = new T(1342),
        uv = new T(1344),
        vv = new U(1343, 300),
        wv = new T(1384),
        xv = new T(1260),
        yv = new T(316),
        zv = new T(1290),
        Av = new T(334),
        Bv = new T(1383),
        Cv = new U(1263, -1),
        Dv = new U(54),
        Ev = new U(1323, -1),
        Fv = new U(1265, -1),
        Gv = new U(1264, -1),
        Hv = new T(1291),
        Iv = new T(1267, !0),
        Jv = new T(1266),
        Kv = new T(313),
        Lv = new U(66, -1),
        Mv = new U(65, -1),
        Nv = new T(1256),
        Ov = new T(369),
        Pv = new T(1241, !0),
        Qv = new T(368),
        Rv = new T(1300, !0),
        Sv = new Vu(1273, ["en", "de", "fr", "es", "ja"]),
        Tv = new Vu(1261, ["44786015", "44786016"]),
        Uv = new T(1361),
        Vv = new T(1372, !0),
        Wv = new T(290),
        Xv = new T(1382),
        Yv = new T(1222),
        Zv = new T(1354),
        $v = new T(1341),
        aw = new T(1350),
        bw = new T(1356),
        cw = new T(626390500),
        dw = new T(566279275),
        ew = new T(622128248),
        fw = new T(566279276),
        gw = new Wu(635821288, ["29_18", "30_19"]),
        hw = new Uu(716722045, "600px"),
        iw = new T(741481545),
        jw = new Wu(631402549),
        kw = new T(636570127, !0),
        lw = new U(626062006, 670),
        mw = new U(666400580, 22),
        nw = new Vu(712458671, " ar bn en es fr hi id ja ko mr pt ru sr te th tr uk vi zh".split(" ")),
        ow = new U(751018117),
        pw = new Wu(683929765),
        qw = new T(742688665, !0),
        rw = new T(683614711),
        sw = new T(747408261),
        tw = new T(506914611),
        uw = new T(655991266, !0),
        vw = new T(750973575, !0),
        ww = new Wu(630330362),
        xw = new U(717888910, .7),
        yw = new U(643258048, .15),
        zw = new U(643258049, .16),
        Aw = new U(618163195, 15E3),
        Bw = new U(624950166, 15E3),
        Cw = new U(623405755, 300),
        Dw = new U(508040914, 500),
        Ew = new U(547455356, 49),
        Fw = new U(717888911, .7),
        Gw = new U(717888912, .7),
        Hw = new U(727864505, 3),
        Iw = new U(652486359, 3),
        Jw = new U(748662193, 8),
        Kw = new U(688905693, 2),
        Lw = new U(650548030, 2),
        Mw = new U(650548032, 300),
        Nw = new U(650548031, 1),
        Ow = new U(655966487, 300),
        Pw = new U(655966486, 250),
        Qw = new U(687270738,
            500),
        Rw = new U(469675170, 6E4),
        tr = new T(737425145),
        Sw = new T(675298507),
        Tw = new T(644381219),
        Uw = new T(644381220),
        Vw = new T(676460084),
        Ww = new T(710737579),
        Xw = new T(45650663),
        Yw = new U(684147713, -1),
        Zw = new T(570863962, !0),
        $w = new Uu(570879859, "control_1\\.\\d"),
        ax = new U(570863961, 50),
        bx = new T(570879858, !0),
        cx = new U(63, 30),
        dx = new T(1134, !0),
        ex = new T(751557128),
        fx = new T(562874197),
        gx = new T(750586557),
        hx = new U(550718588, 250),
        ix = new U(624290870, 50),
        jx = new T(506738118),
        kx = new T(77),
        lx = new T(78),
        mx = new T(83),
        nx =
        new T(80),
        ox = new T(76),
        px = new T(84),
        qx = new T(1973),
        rx = new T(188),
        sx = new T(485990406);
    var tx = class {
        constructor() {
            const a = {};
            this.j = (b, c) => a[b] != null ? a[b] : c;
            this.l = (b, c) => a[b] != null ? a[b] : c;
            this.C = (b, c) => a[b] != null ? a[b] : c;
            this.g = (b, c) => a[b] != null ? a[b] : c;
            this.A = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.i = () => {}
        }
    };

    function Q(a) {
        return P(tx).j(a.g, a.defaultValue)
    }

    function W(a) {
        return P(tx).l(a.g, a.defaultValue)
    }

    function ux(a) {
        return P(tx).C(a.g, a.defaultValue)
    }

    function vx(a) {
        return P(tx).A(a.g, a.defaultValue)
    };
    var xx = (a, b, c, d = 0) => {
            var e = wx(b, c, d);
            if (e.init) {
                for (c = b = e.init; c = e.Td(c);) b = c;
                e = {
                    anchor: b,
                    position: e.ve
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            Su(a, e.anchor, e.position)
        },
        yx = (a, b, c, d = 0) => {
            Q(Kv) ? xx(a, b, c, d) : Su(a, b, c)
        };

    function wx(a, b, c) {
        const d = f => {
                f = zx(f);
                return f == null ? !1 : c < f
            },
            e = f => {
                f = zx(f);
                return f == null ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    init: Ax(a.previousSibling, d),
                    Td: f => Ax(f.previousSibling, d),
                    ve: 0
                };
            case 2:
                return {
                    init: Ax(a.lastChild, d),
                    Td: f => Ax(f.previousSibling, d),
                    ve: 0
                };
            case 3:
                return {
                    init: Ax(a.nextSibling, e),
                    Td: f => Ax(f.nextSibling, e),
                    ve: 3
                };
            case 1:
                return {
                    init: Ax(a.firstChild, e),
                    Td: f => Ax(f.nextSibling, e),
                    ve: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function zx(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Ax(a, b) {
        return a && b(a) ? a : null
    };
    var Bx = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function Cx(a, b) {
        do {
            const c = Sd(a, b);
            if (c && c.position == "fixed") return !1
        } while (a = a.parentElement);
        return !0
    };

    function Dx(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            const f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = be(a[c[e]]);
                d = d === null ? null : Math.round(d);
                d != null && (b[f] = d)
            }
        }
    }

    function Ex(a, b) {
        return !(($d.test(b.google_ad_width) || Zd.test(a.style.width)) && ($d.test(b.google_ad_height) || Zd.test(a.style.height)))
    }

    function Fx(a, b) {
        return (a = Gx(a, b)) ? a.y : 0
    }

    function Gx(a, b) {
        try {
            const c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }

    function Hx(a, b) {
        const c = a.google_reactive_ad_format === 40,
            d = a.google_reactive_ad_format === 16;
        return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
    }

    function Ix(a, b, c, d, e) {
        if (a !== a.top) return Pd(a) ? 3 : 16;
        if (!(mr(a) < 488)) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        const f = mr(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = e.google_full_width_responsive !== "true") a: {
                c = b.parentElement;
                for (b = mr(a); c; c = c.parentElement)
                    if ((d = Sd(c, a)) && (e = be(d.width)) && !(e >= b) && d.overflow !== "visible") {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Jx(a, b, c, d) {
        const e = Ix(b, c, a, W(lv), d);
        e !== !0 ? a = e : d.google_full_width_responsive === "true" || Cx(c, b) ? (b = mr(b), a = b - a, a = b && a >= 0 ? !0 : b ? a < -10 ? 11 : a < 0 ? 14 : 12 : 10) : a = 9;
        return a
    }

    function Kx(a, b, c) {
        a = a.style;
        b === "rtl" ? a.marginRight = c : a.marginLeft = c
    }

    function Lx(a, b) {
        if (b.nodeType === 3) return /\S/.test(b.data);
        if (b.nodeType === 1) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            let c;
            try {
                c = Sd(b, a)
            } catch (d) {}
            return !c || c.display !== "none" && !(c.position === "absolute" && (c.visibility === "hidden" || c.visibility === "collapse"))
        }
        return !1
    }

    function Mx(a, b, c) {
        a = Gx(b, a);
        return c === "rtl" ? -a.x : a.x
    }

    function Nx(a, b) {
        b = b.parentElement;
        return b ? (a = Sd(b, a)) ? a.direction : "" : ""
    }

    function Ox(a, b, c) {
        if (Mx(a, b, c) !== 0) {
            Kx(b, c, "0px");
            var d = Mx(a, b, c);
            Kx(b, c, `${-1*d}px`);
            a = Mx(a, b, c);
            a !== 0 && a !== d && Kx(b, c, `${d/(a-d)*d}px`)
        }
    }

    function Px(a, b) {
        const c = Nx(a, b);
        if (c) {
            var d = b.style;
            d.border = d.borderStyle = d.outline = d.outlineStyle = d.transition = "none";
            d.borderSpacing = d.padding = "0";
            Kx(b, c, "0px");
            d.width = `${mr(a)}px`;
            Ox(a, b, c);
            d.zIndex = "30"
        }
    };

    function Qx(a, b, c) {
        let d;
        return a.style && !!a.style[c] && be(a.style[c]) || (d = Sd(a, b)) && !!d[c] && be(d[c]) || null
    }

    function Rx(a, b) {
        const c = rm(a) === 0;
        return b && c ? Math.max(250, 2 * nr(a) / 3) : 250
    }

    function Sx(a, b) {
        let c;
        return a.style && a.style.zIndex || (c = Sd(a, b)) && c.zIndex || null
    }

    function Tx(a) {
        return b => b.g <= a
    }

    function Ux(a, b, c, d) {
        const e = a && Vx(c, b),
            f = Rx(b, d);
        return g => !(e && g.height() >= f)
    }

    function Wx(a) {
        return b => b.height() <= a
    }

    function Vx(a, b) {
        a = Fx(a, b);
        b = nr(b);
        return a < b - 100
    }

    function Xx(a, b) {
        var c = Qx(b, a, "height");
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Qx(b, a, "height");
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && be(b.style.height)) && (c = Math.min(c, d)), (d = Qx(b, a, "maxHeight")) && (c = Math.min(c, d)); while (b.parentElement && (b = b.parentElement) && b.tagName !== "HTML");
        return c
    };
    const Yx = RegExp("(^| )adsbygoogle($| )");

    function Zx(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = qd(d.property);
            a[e] = d.value
        }
    }

    function $x(a, b, c, d, e, f) {
        a = ay(a, e);
        a.ua.setAttribute("data-ad-format", d ? d : "auto");
        by(a, b, c, f);
        return a
    }

    function cy(a, b, c = null) {
        a = ay(a, {});
        by(a, b, null, c);
        return a
    }

    function by(a, b, c, d) {
        var e = [];
        if (d = d && d.Tg) a.Fb.className = d.join(" ");
        a = a.ua;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function ay(a, b) {
        const c = Ru(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.ue && Zx(d, b.ue);
        a = cm(new Rl(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.Dg && (d.marginTop = b.Dg);
        b.ef && (d.marginBottom = b.ef);
        b.Hc && Zx(d, b.Hc);
        c.appendChild(a);
        return {
            Fb: c,
            ua: a
        }
    }

    function dy(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.bd();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function ey(a) {
        const b = Qu(a.document);
        Ma(b, function(c) {
            const d = fy(a, c);
            var e;
            if (e = d) {
                e = Fx(c, a);
                const f = nr(a);
                e = !(e < f)
            }
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), dy(a, c))
        })
    }

    function fy(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in kb) a[kb[c]] && (b[kb[c]] = a[kb[c]]);
        return b
    };
    var hy = (a, b, c) => {
        if (!b || !c) return !1;
        var d = b.parentElement;
        const e = c.parentElement;
        if (!d || !e || d != e) return !1;
        d = 0;
        for (b = b.nextSibling; d < 10 && b;) {
            if (b == c) return !0;
            if (gy(a, b)) break;
            b = b.nextSibling;
            d++
        }
        return !1
    };
    const gy = (a, b) => {
        if (b.nodeType == 3) return b.nodeType == 3 ? (b = b.data, a = b.indexOf("&") != -1 ? jd(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (b.nodeType == 1) {
            var c = a.getComputedStyle(b);
            if (c.opacity == "0" || c.display == "none" || c.visibility == "hidden") return !1;
            if ((c = b.tagName) && Jr.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (gy(a, b[c])) return !0
        }
        return !1
    };
    var iy = a => {
        if (a >= 460) return a = Math.min(a, 1200), Math.ceil(a < 800 ? a / 4 : 200);
        a = Math.min(a, 600);
        return a <= 420 ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    var jy = class {
        constructor() {
            this.g = {
                clearBoth: !0
            }
        }
        i(a, b, c, d) {
            return $x(d.document, a, null, null, this.g, b)
        }
        j(a) {
            return iy(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };

    function ky(a) {
        const b = [];
        Br(a.getElementsByTagName("p"), function(c) {
            ly(c) >= 100 && b.push(c)
        });
        return b
    }

    function ly(a) {
        if (a.nodeType == 3) return a.length;
        if (a.nodeType != 1 || a.tagName == "SCRIPT") return 0;
        let b = 0;
        Br(a.childNodes, function(c) {
            b += ly(c)
        });
        return b
    }

    function my(a) {
        return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function ny(a, b) {
        if (a.g == null) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }

    function oy(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.A)
        } catch (d) {}
        if (!c.length) return [];
        b = bb(c);
        b = ny(a, b);
        typeof a.i === "number" && (c = a.i, c < 0 && (c += b.length), b = c >= 0 && c < b.length ? [b[c]] : []);
        if (typeof a.j === "number") {
            c = [];
            for (let d = 0; d < b.length; d++) {
                const e = ky(b[d]);
                let f = a.j;
                f < 0 && (f += e.length);
                f >= 0 && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    var py = class {
        constructor(a, b, c, d) {
            this.A = a;
            this.i = b;
            this.j = c;
            this.g = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.A,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.g
            })
        }
    };
    var qy = class {
        constructor() {
            this.g = Jd `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`
        }
        na(a, b, c = .01, d = "jserror") {
            if (Math.random() > c) return !1;
            b.error && b.meta && b.id || (b = new wm(b, {
                context: a,
                id: d
            }));
            r.google_js_errors = r.google_js_errors || [];
            r.google_js_errors.push(b);
            r.error_rep_loaded || (Qd(r.document, this.g), r.error_rep_loaded = !0);
            return !1
        }
        sb(a, b) {
            try {
                return b()
            } catch (c) {
                if (!this.na(a, c, .01, "jserror")) throw c;
            }
        }
        tb(a, b, c) {
            return (...d) => this.sb(a, () => b.apply(c, d))
        }
        Sa(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.na(a, c instanceof Error ? c : Error(c), void 0)
            })
        }
    };

    function ry(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    }

    function sy(a, b, c, d) {
        const e = d || window,
            f = typeof queueMicrotask !== "undefined";
        return function(...g) {
            f && queueMicrotask(() => {
                e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                e.google_rum_task_id_counter += 1
            });
            const h = Gm();
            let k, l = 3;
            try {
                k = b.apply(this, g)
            } catch (m) {
                l = 13;
                if (!c) throw m;
                c(a, m)
            } finally {
                e.google_measure_js_timing && h && ry({
                    label: a.toString(),
                    value: h,
                    duration: (Gm() || 0) - h,
                    type: l,
                    ...(f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    })
                }, e)
            }
            return k
        }
    }

    function ty(a, b) {
        return sy(754, a, (c, d) => {
            (new qy).na(c, d)
        }, b)
    };

    function uy(a, b, c) {
        return sy(a, b, void 0, c).apply()
    }

    function vy(a, b) {
        return ty(a, b).apply()
    }

    function wy(a) {
        if (!a) return null;
        var b = ri(a, 7);
        if (ri(a, 1) || a.getId() || mi(a, 4).length > 0) {
            var c = a.getId(),
                d = ri(a, 1),
                e = mi(a, 4);
            b = qi(a, 2);
            var f = qi(a, 5);
            a = xy(si(a, 6));
            let g = "";
            d && (g += d);
            c && (g += "#" + my(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + my(e[c]);
            b = (e = g) ? new py(e, b, f, a) : null
        } else b = b ? new py(b, qi(a, 2), qi(a, 5), xy(si(a, 6))) : null;
        return b
    }
    const yy = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function xy(a) {
        return a == null ? a : yy[a]
    }

    function zy(a) {
        const b = [];
        for (let c = 0; c < a.length; c++) {
            const d = ri(a[c], 1),
                e = a[c].getValue();
            d && e != null && b.push({
                property: d,
                value: e
            })
        }
        return b
    }

    function Ay(a, b) {
        const c = {};
        a && (c.Dg = ri(a, 1), c.ef = ri(a, 2), c.clearBoth = !!pi(a, 3));
        b && (c.ue = zy(ai(b, du, 3, Jh()).map(d => dh(d))), c.Hc = zy(ai(b, du, 4, Jh()).map(d => dh(d))));
        return c
    }
    const By = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Cy = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };

    function Dy(a) {
        return a
    };
    var Ey = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            return $x(d.document, a, null, null, this.g, b)
        }
        j() {
            return null
        }
    };
    var Fy = class {
        constructor(a) {
            this.i = a
        }
        g(a) {
            a = Math.floor(a.i);
            const b = iy(a);
            return new yt(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.i,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    var Gy = class {
        constructor(a, b) {
            this.A = a;
            this.j = b
        }
        g() {
            return this.A
        }
        i() {
            return this.j
        }
    };
    var Hy = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            var e = ai(this.g, eu, 9, Jh()).length > 0 ? ai(this.g, eu, 9, Jh())[0] : null,
                f = Ay(Zh(this.g, fu, 3), e);
            if (!e) return null;
            if (e = ri(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = cm(new Rl(d), g);
                c.style.clear = f.clearBoth ? "both" : "none";
                g == "A" && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.ue && Zx(c.style, f.ue);
                d = cm(new Rl(d), "INS");
                f.Hc && Zx(d.style, f.Hc);
                c.appendChild(d);
                f = {
                    Fb: c,
                    ua: d
                };
                f.ua.setAttribute("data-ad-type", "text");
                f.ua.setAttribute("data-native-settings-key",
                    e);
                by(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        j() {
            var a = ai(this.g, eu, 9, Jh()).length > 0 ? ai(this.g, eu, 9, Jh())[0] : null;
            if (!a) return null;
            a = ai(a, du, 3, Jh());
            for (let b = 0; b < a.length; b++) {
                const c = a[b];
                if (ri(c, 1) == "height" && parseInt(c.getValue(), 10) > 0) return parseInt(c.getValue(), 10)
            }
            return null
        }
    };
    var Iy = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            if (!this.g) return null;
            const e = this.g.google_ad_format || null,
                f = this.g.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    k !== "width" && k !== "height" && g.push({
                        property: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    Hc: g
                }
            } else c = {};
            a = $x(d.document, a, f, e, c, b);
            a.ua.setAttribute("data-pub-vars", JSON.stringify(this.g));
            return a
        }
        j() {
            return this.g ? parseInt(this.g.google_ad_height, 10) || null : null
        }
        bd() {
            return this.g
        }
    };
    var Jy = class {
        constructor(a) {
            this.i = a
        }
        g() {
            return new yt([], {
                google_ad_type: this.i,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    var Ky = class {
        constructor(a, b) {
            this.A = a;
            this.j = b
        }
        i() {
            return this.j
        }
        g(a) {
            a = oy(this.A, a.document);
            return a.length > 0 ? a[0] : null
        }
    };

    function Ly(a, b, c) {
        const d = [];
        for (let p = 0; p < a.length; p++) {
            a: {
                var e = a[p];
                var f = p,
                    g = b,
                    h = c,
                    k = Dy(e.ia());
                if (!k) {
                    e = null;
                    break a
                }
                var l = wy(k);
                if (!l) {
                    e = null;
                    break a
                }
                var m = e.i();m = By[m];
                var n = m === void 0 ? null : m;
                if (n === null) {
                    e = null;
                    break a
                }
                m = (m = z(e, fu, 3)) ? pi(m, 3) : null;l = new Ky(l, n);n = ni(e, 10).slice(0);ng(y(k, 5)) != null && n.push(1);k = qi(e, 12);
                const w = Eh(e, wt, 4) ? Dy(z(e, wt, 4)) : null;lg(y(e, 8)) == 1 ? (h = h && h.Si || null, e = new My(l, new Ey(Ay(Dy(z(e, fu, 3)), null)), h, m, 0, n, w, g, f, k, e)) : e = lg(y(e, 8)) == 2 ? new My(l, new Hy(e), h && h.Xj ||
                    new Jy("text"), m, 1, n, w, g, f, k, e) : null
            }
            e !== null && d.push(e)
        }
        return d
    }

    function Ny(a) {
        return a.A
    }

    function Oy(a) {
        return a.Ja
    }

    function Py(a) {
        return a.C instanceof Iy ? a.C.bd() : null
    }

    function Qy(a, b, c) {
        Dr(a.M, b) || a.M.set(b, []);
        a.M.get(b).push(c)
    }

    function Ry(a) {
        return a.C.j(a.g)
    }

    function Sy(a, b = null, c = null) {
        return new My(a.D, b || a.C, c || a.V, a.G, a.uc, a.ed, a.Fe, a.g, a.pa, a.H, a.j, a.l, a.X)
    }
    var My = class {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, p = null) {
            this.D = a;
            this.C = b;
            this.V = c;
            this.G = d;
            this.uc = e;
            this.ed = f;
            this.Fe = g ? g : new wt;
            this.g = h;
            this.pa = k;
            this.H = l;
            this.j = m;
            (a = !m) || ((a = !m.ia()) || (m = m.ia(), a = ng(y(m, 5)) == null), a = !!a);
            this.Ja = !a;
            this.l = n;
            this.X = p;
            this.J = [];
            this.A = !1;
            this.M = new Hr
        }
        da() {
            return this.g
        }
        i() {
            return this.D.i()
        }
    };

    function Ty(a, b, c, d, e, f) {
        const g = vt();
        return new My(new Gy(c, e), new jy, new Fy(a), !0, 2, [], g, d, null, null, null, b, f)
    }

    function Uy(a, b, c, d, e) {
        const f = vt();
        return new My(new Gy(b, d), new Ey({
            clearBoth: !0
        }), null, !0, 2, [], f, c, null, null, null, a, e)
    };
    var Vy = class {
        constructor(a, b, c) {
            this.articleStructure = a;
            this.element = b;
            this.B = c
        }
        da() {
            return this.B
        }
        l(a) {
            return Ty(a, this.articleStructure, this.element, this.B, 3, null)
        }
        j() {
            return Uy(this.articleStructure, this.element, this.B, 3, null)
        }
    };
    const Wy = {
        TABLE: {
            Rc: new Zs([1, 2])
        },
        THEAD: {
            Rc: new Zs([0, 3, 1, 2])
        },
        TBODY: {
            Rc: new Zs([0, 3, 1, 2])
        },
        TR: {
            Rc: new Zs([0, 3, 1, 2])
        },
        TD: {
            Rc: new Zs([0, 3])
        }
    };

    function Xy(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = La(e, f), c < 0 || b.push(new Yy(a, [f], c, f, 3, Zl(f).trim(), d));
        return b
    }

    function Zy(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (l.nodeType == 1 || l.nodeType == 3) {
                if (l.nodeType != 1) var m = null;
                else l.tagName == "BR" ? m = l : (m = c.getComputedStyle(l).getPropertyValue("display"), m = m == "inline" || m == "inline-block" ? null : l);
                m ? (d.length && k && e.push(new Yy(a, d, n - 1, m, 0, k, c)), d = [], h = n + 1, k = "") : (d.push(l), l = Zl(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new Yy(a, d, h, b, 2, k, c));
        return e
    }

    function $y(a, b) {
        return a.g - b.g
    }
    var Yy = class {
        constructor(a, b, c, d, e, f, g) {
            this.A = a;
            this.Id = b.slice(0);
            this.g = c;
            this.Le = d;
            this.Me = e;
            this.C = f;
            this.i = g
        }
        da() {
            return this.i
        }
        l(a) {
            return Ty(a, this.A, this.Le, this.i, this.Me, this.g)
        }
        j() {
            return Uy(this.A, this.Le, this.i, this.Me, this.g)
        }
    };

    function az(a) {
        return ab(a.C ? Zy(a.g, a.j, a.i) : [], a.l ? Xy(a.g, a.l, a.j, a.i) : []).filter(b => {
            var c = b.Le.tagName;
            c ? (c = Wy[c.toUpperCase()], b = c != null && c.Rc.contains(b.Me)) : b = !1;
            return !b
        })
    }
    var bz = class {
        constructor(a, b, c) {
            this.j = a;
            this.l = b.Fd;
            this.C = b.ih;
            this.g = b.articleStructure;
            this.i = c;
            this.A = b.Ng
        }
    };

    function cz(a, b) {
        if (!b) return !1;
        const c = ta(b),
            d = a.g.get(c);
        if (d != null) return d;
        if (b.nodeType == 1 && (b.tagName == "UL" || b.tagName == "OL") && a.i.getComputedStyle(b).getPropertyValue("list-style-type") != "none") return a.g.set(c, !0), !0;
        b = cz(a, b.parentNode);
        a.g.set(c, b);
        return b
    }

    function dz(a, b) {
        return Wa(b.Id, c => cz(a, c))
    }
    var ez = class {
        constructor(a) {
            this.g = new Hr;
            this.i = a
        }
    };
    var fz = class {
        constructor(a, b) {
            this.A = a;
            this.g = [];
            this.i = [];
            this.j = b
        }
    };
    var hz = (a, {
            xh: b = !1,
            vg: c = !1,
            Ih: d = c ? 2 : 3,
            ug: e = null
        } = {}) => {
            a = az(a);
            return gz(a, {
                xh: b,
                vg: c,
                Ih: d,
                ug: e
            })
        },
        gz = (a, {
            xh: b = !1,
            vg: c = !1,
            Ih: d = c ? 2 : 3,
            ug: e = null
        } = {}) => {
            if (d < 2) throw Error("minGroupSize should be at least 2, found " + d);
            var f = a.slice(0);
            f.sort($y);
            a = [];
            b = new fz(b, e);
            for (const g of f) {
                e = {
                    we: g,
                    Vd: g.C.length < 51 ? !1 : b.j != null ? !dz(b.j, g) : !0
                };
                if (b.A || e.Vd) b.g.length ? (f = b.g[b.g.length - 1].we, f = hy(f.da(), f.Id[f.Id.length - 1], e.we.Id[0])) : f = !0, f ? (b.g.push(e), e.Vd && b.i.push(e.we)) : (b.g = [e], b.i = e.Vd ? [e.we] : []);
                if (b.i.length >=
                    d) {
                    e = b;
                    f = c ? 0 : 1;
                    if (f < 0 || f >= e.i.length) e = null;
                    else {
                        for (f = e.i[f]; e.g.length && !e.g[0].Vd;) e.g.shift();
                        e.g.shift();
                        e.i.shift();
                        e = f
                    }
                    e && a.push(e)
                }
            }
            return a
        };
    var jz = (a, b, c = !1) => {
            a = iz(a, b);
            const d = new ez(b);
            return Ss(a, e => hz(e, {
                vg: c,
                ug: d
            }))
        },
        kz = (a, b) => {
            a = iz(a, b);
            const c = new ez(b);
            return Ss(a, d => {
                if (d.A) {
                    var e = d.g;
                    var f = d.i;
                    d = d.j.querySelectorAll(d.A);
                    var g = [];
                    for (var h of d) g.push(new Vy(e, h, f));
                    e = g
                } else e = [];
                d = e.slice(0);
                if (d.length) {
                    e = [];
                    f = d[0];
                    for (g = 1; g < d.length; g++) {
                        const m = d[g];
                        h = f;
                        b: {
                            if (h.element.hasAttributes())
                                for (l of h.element.attributes)
                                    if (l.name.toLowerCase() === "style" && l.value.toLowerCase().includes("background-image")) {
                                        var k = !0;
                                        break b
                                    }
                            k =
                            h.element.tagName;k = k === "IMG" || k === "SVG"
                        }(k || h.element.textContent.length > 1) && !cz(c, f.element) && hy(m.da(), f.element, m.element) && e.push(f);
                        f = m
                    }
                    var l = e
                } else l = [];
                return l
            })
        },
        iz = (a, b) => {
            const c = new Hr;
            a.forEach(d => {
                var e = wy(Zh(d, nt, 1));
                if (e) {
                    var f = e.toString();
                    Dr(c, f) || c.set(f, {
                        articleStructure: d,
                        Ni: e,
                        Fd: null,
                        ih: !1,
                        Ng: null
                    });
                    e = c.get(f);
                    (f = (f = z(d, nt, 2)) ? ri(f, 7) : null) ? e.Fd = e.Fd ? e.Fd + "," + f : f: e.ih = !0;
                    d = z(d, nt, 4);
                    e.Ng = d ? ri(d, 7) : null
                }
            });
            return Gr(c).map(d => {
                const e = oy(d.Ni, b.document);
                return e.length ? new bz(e[0],
                    d, b) : null
            }).filter(d => d != null)
        };
    var lz = a => a ? .google_ad_slot ? $s(new ot(1, {
            Di: a.google_ad_slot
        })) : bt(Error("Missing dimension when creating placement id")),
        nz = a => {
            switch (a.uc) {
                case 0:
                case 1:
                    var b = a.j;
                    b == null ? a = null : (a = b.ia(), a == null ? a = null : (b = b.i(), a = b == null ? null : new ot(0, {
                        Og: [a],
                        Xh: b
                    })));
                    return a != null ? $s(a) : bt(Error("Missing dimension when creating placement id"));
                case 2:
                    return a = mz(a), a != null ? $s(a) : bt(Error("Missing dimension when creating placement id"));
                default:
                    return bt(Error("Invalid type: " + a.uc))
            }
        };
    const mz = a => {
        if (a == null || a.l == null) return null;
        const b = z(a.l, nt, 1),
            c = z(a.l, nt, 2);
        if (b == null || c == null) return null;
        const d = a.X;
        if (d == null) return null;
        a = a.i();
        return a == null ? null : new ot(0, {
            Og: [b, c],
            Wj: d,
            Xh: Cy[a]
        })
    };

    function oz(a) {
        const b = Py(a.ga);
        return (b ? lz(b) : nz(a.ga)).map(c => rt(c))
    }

    function pz(a) {
        a.g = a.g || oz(a);
        return a.g
    }

    function qz(a, b) {
        if (a.ga.A) throw Error("AMA:AP:AP");
        yx(b, a.ia(), a.ga.i());
        a = a.ga;
        a.A = !0;
        b != null && a.J.push(b)
    }
    const rz = class {
        constructor(a, b, c) {
            this.ga = a;
            this.i = b;
            this.ma = c;
            this.g = null
        }
        ia() {
            return this.i
        }
        fill(a, b) {
            var c = this.ga;
            (a = c.C.i(a, b, this.i, c.g)) && qz(this, a.Fb);
            return a
        }
    };

    function sz(a, b) {
        return vy(() => {
            const c = [],
                d = [];
            try {
                var e = [];
                for (var f = 0; f < a.length; f++) {
                    var g = a[f],
                        h = g.D.g(g.g);
                    h && e.push({
                        Sh: g,
                        anchorElement: h
                    })
                }
                for (g = 0; g < e.length; g++) {
                    f = d;
                    var k = f.push; {
                        var l = e[g];
                        const v = l.anchorElement,
                            t = l.Sh;
                        var m = t.G;
                        const C = t.g.document.createElement("div");
                        C.className = "google-auto-placed";
                        const I = C.style;
                        I.textAlign = "center";
                        I.width = "100%";
                        I.height = "0px";
                        I.clear = m ? "both" : "none";
                        h = C;
                        try {
                            yx(h, v, t.i());
                            var n = h
                        } catch (V) {
                            throw Tu(h), V;
                        }
                    }
                    k.call(f, n)
                }
                const p = wr(b),
                    w = xr(b);
                for (k =
                    0; k < d.length; k++) {
                    const v = d[k].getBoundingClientRect(),
                        t = e[k];
                    c.push(new rz(t.Sh, t.anchorElement, new Js(v.left + w, v.top + p, v.right - v.left)))
                }
            } finally {
                for (e = 0; e < d.length; e++) Tu(d[e])
            }
            return c
        }, b)
    };
    const tz = {
            1: "0.5vp",
            2: "300px"
        },
        uz = {
            1: 700,
            2: 1200
        },
        vz = {
            [1]: {
                hi: "3vp",
                yg: "1vp",
                gi: "0.3vp"
            },
            [2]: {
                hi: "900px",
                yg: "300px",
                gi: "90px"
            }
        };

    function wz(a, b, c) {
        var d = xz(a),
            e = nr(a) || uz[d],
            f = void 0;
        c && (f = (c = (c = yz(ai(c, Ft, 2, Jh()), d)) ? z(c, Dt, 7) : void 0) ? zz(c, e) : void 0);
        c = f;
        f = xz(a);
        a = nr(a) || uz[f];
        const g = Az(vz[f].yg, a);
        a = g === null ? oB(f, a) : new pB(g, g, qB(g, 8), 8, .3, c);
        c = Az(vz[d].hi, e);
        f = Az(vz[d].yg, e);
        d = Az(vz[d].gi, e);
        e = a.j;
        c && d && f && b !== void 0 && (e = b <= .5 ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
        return new pB(e, e, qB(e, a.i), a.i, a.A, a.g)
    }

    function rB(a, b) {
        const c = Dg(y(a, 4, void 0, Ah));
        a = Ih(a, 5, Ah);
        return c == null || a == null ? b : new pB(a, 0, [], c, 1)
    }

    function sB(a, b) {
        const c = xz(a);
        a = nr(a) || uz[c];
        if (!b) return oB(c, a);
        if (b = yz(ai(b, Ft, 2, Jh()), c))
            if (b = tB(b, a)) return b;
        return oB(c, a)
    }

    function uB(a) {
        const b = xz(a);
        a = nr(a) || uz[b];
        return oB(b, a)
    }

    function vB() {
        return Q(zv) ? new pB(0, null, [], 8, .3) : new pB(0, null, [], 3, null)
    }

    function wB(a, b) {
        let c = {
            ld: a.j,
            Mb: a.C
        };
        for (let d of a.l) d.adCount <= b && (c = d.vd);
        return c
    }

    function xB(a, b, c) {
        var d = pi(b, 2);
        b = z(b, Ft, 1);
        var e = xz(c);
        var f = nr(c) || uz[e];
        c = Az(b ? .i(), f) ? ? a.j;
        e = Az(b ? .g(), f) ? ? a.C;
        d = d ? [] : yB(b ? .A(), f) ? ? a.l;
        const g = b ? .l() ? ? a.i,
            h = b ? .C() ? ? a.A;
        a = (b ? .H() ? zz(z(b, Dt, 7), f) : null) ? ? a.g;
        return new pB(c, e, d, g, h, a)
    }

    function zB(a, b) {
        var c = xz(b);
        const d = new Gt,
            e = new Ft;
        let f = !1;
        var g = W(Cv);
        g >= 0 && (vi(e, 4, g), f = !0);
        g = null;
        c === 1 ? (c = W(Gv), c >= 0 && (g = c + "vp")) : (c = W(Fv), c >= 0 && (g = c + "px"));
        c = W(Ev);
        c >= 0 && (g = c + "px");
        g !== null && (yi(e, 2, g), f = !0);
        c = Q(Iv) ? "0px" : null;
        c !== null && (yi(e, 5, c), f = !0);
        if (Q(Jv)) ti(d, 2, !0), f = !0;
        else if (c !== null || g !== null) {
            const m = [];
            for (const n of a.l) {
                var h = m,
                    k = h.push;
                var l = new Et;
                l = vi(l, 1, n.adCount);
                l = yi(l, 3, c ? ? n.vd.Mb + "px");
                l = yi(l, 2, g ? ? n.vd.ld + "px");
                k.call(h, l)
            }
            di(e, 3, m)
        }
        return f ? (A(d, 1, e), xB(a, d, b)) : a
    }
    var pB = class {
        constructor(a, b, c, d, e, f) {
            this.j = a;
            this.C = b;
            this.l = c.sort((g, h) => g.adCount - h.adCount);
            this.i = d;
            this.A = e;
            this.g = f
        }
    };

    function yz(a, b) {
        for (let c of a)
            if (lg(y(c, 1)) == b) return c;
        return null
    }

    function yB(a, b) {
        if (a === void 0) return null;
        const c = [];
        for (let d of a) {
            a = qi(d, 1);
            const e = Az(ri(d, 2), b),
                f = Az(ri(d, 3), b);
            if (typeof a !== "number" || e === null) return null;
            c.push({
                adCount: a,
                vd: {
                    ld: e,
                    Mb: f
                }
            })
        }
        return c
    }

    function tB(a, b) {
        const c = Az(a.i(), b),
            d = Az(a.g(), b);
        if (c === null) return null;
        const e = qi(a, 4);
        if (e == null) return null;
        var f = a.A();
        f = yB(f, b);
        if (f === null) return null;
        const g = z(a, Dt, 7);
        b = g ? zz(g, b) : void 0;
        return new pB(c, d, f, e, Ih(a, 6, Ah), b)
    }

    function oB(a, b) {
        a = Az(tz[a], b);
        return Q(zv) ? new pB(a === null ? Infinity : a, null, [], 8, .3) : new pB(a === null ? Infinity : a, null, [], 3, null)
    }

    function Az(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function xz(a) {
        a = mr(a) >= 900;
        return rc() && !a ? 1 : 2
    }

    function qB(a, b) {
        if (b < 4) return [];
        const c = Math.ceil(b / 2);
        return [{
            adCount: c,
            vd: {
                ld: a * 2,
                Mb: a * 2
            }
        }, {
            adCount: c + Math.ceil((b - c) / 2),
            vd: {
                ld: a * 3,
                Mb: a * 3
            }
        }]
    }

    function zz(a, b) {
        const c = Az(ri(a, 2), b) || 0,
            d = qi(a, 3) || 1;
        a = Az(ri(a, 1), b) || 0;
        return {
            Jh: c,
            Gh: d,
            Kc: a
        }
    };

    function AB(a, b, c) {
        return fr({
            top: a.g.top - (c + 1),
            right: a.g.right + (c + 1),
            bottom: a.g.bottom + (c + 1),
            left: a.g.left - (c + 1)
        }, b.g)
    }

    function BB(a) {
        if (!a.length) return null;
        const b = gr(a.map(c => c.g));
        a = a.reduce((c, d) => c + d.i, 0);
        return new CB(b, a)
    }
    var CB = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function Qp() {
        return "m202505070101"
    };
    var DB = rk(Np);
    var Pp = rk(Rp);

    function EB(a, b) {
        return b(a) ? a : void 0
    }

    function FB(a, b, c, d, e) {
        c = c instanceof wm ? c.error : c;
        var f = new lq;
        const g = new kq;
        try {
            var h = Be(window);
            xi(g, 1, h)
        } catch (p) {}
        try {
            var k = P(Wq).g();
            Sh(g, 2, k, mg)
        } catch (p) {}
        try {
            zi(g, 3, window.document.URL)
        } catch (p) {}
        h = A(f, 2, g);
        k = new jq;
        b = G(k, 1, b);
        try {
            var l = ob(c ? .name) ? c.name : "Unknown error";
            zi(b, 2, l)
        } catch (p) {}
        try {
            var m = ob(c ? .message) ? c.message : `Caught ${c}`;
            zi(b, 3, m)
        } catch (p) {}
        try {
            var n = ob(c ? .stack) ? c.stack : Error().stack;
            n && Sh(b, 4, n.split(/\n\s*/), Kg)
        } catch (p) {}
        l = ci(h, 1, mq, b);
        if (e) {
            m = 0;
            switch (e.errSrc) {
                case "LCC":
                    m =
                        1;
                    break;
                case "PVC":
                    m = 2
            }
            n = Op();
            b = EB(e.shv, ob);
            n = zi(n, 2, b);
            m = G(n, 6, m);
            n = Fi(DB());
            b = EB(e.es, xb());
            n = Sh(n, 1, b, mg);
            n = wh(n);
            m = A(m, 4, n);
            n = EB(e.client, ob);
            m = yi(m, 3, n);
            n = EB(e.slotname, ob);
            m = zi(m, 7, n);
            e = EB(e.tag_origin, ob);
            e = zi(m, 8, e);
            e = wh(e)
        } else e = Hi(Op());
        e = ci(l, 6, nq, e);
        d = xi(e, 5, d ? ? 1);
        a.ci(d)
    };
    var HB = class {
        constructor() {
            this.g = GB
        }
    };

    function GB() {
        return {
            vk: Ab() + (Ab() & 2 ** 21 - 1) * 2 ** 32,
            lj: Number.MAX_SAFE_INTEGER
        }
    };
    var KB = class {
        constructor(a = !1) {
            var b = IB;
            this.I = JB;
            this.i = a;
            this.A = b;
            this.g = null;
            this.eb = this.na
        }
        j(a) {
            this.g = a
        }
        l() {}
        sb(a, b, c) {
            let d;
            try {
                d = b()
            } catch (e) {
                b = this.i;
                try {
                    b = this.eb(a, xm(e), void 0, c)
                } catch (f) {
                    this.na(217, f)
                }
                if (b) window.console ? .error ? .(e);
                else throw e;
            }
            return d
        }
        tb(a, b, c, d) {
            return (...e) => this.sb(a, () => b.apply(c, e), d)
        }
        Sa(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.na(a, d instanceof Error ? d : Error(d), void 0, c)
            })
        }
        na(a, b, c, d) {
            try {
                const g = c === void 0 ? 1 / this.A : c === 0 ? 0 : 1 / c;
                var e = (new HB).g();
                if (g > 0 && e.vk * g <= e.lj) {
                    var f = this.I;
                    c = {};
                    if (this.g) try {
                        this.g(c)
                    } catch (h) {}
                    if (d) try {
                        d(c)
                    } catch (h) {}
                    FB(f, a, b, g, c)
                }
            } catch (g) {}
            return this.i
        }
    };
    var LB = class extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, LB) : this.stack = Error().stack || ""
        }
    };
    let JB, MB, NB, OB, IB;
    const PB = new Om(r);
    (function(a, b, c = !0) {
        ({
            Jk: IB,
            Lj: NB
        } = QB());
        MB = a || new Zq;
        Yq(MB, NB);
        JB = b || new Tq(Qp(), 1E3);
        OB = new KB(c);
        r.document.readyState === "complete" ? r.google_measure_js_timing || Mm(PB) : PB.g && xk(r, "load", () => {
            r.google_measure_js_timing || Mm(PB)
        })
    })();

    function RB(a, b, c) {
        return OB.sb(a, b, c)
    }

    function SB(a, b) {
        return OB.tb(a, b)
    }

    function TB(a, b, c) {
        OB.Sa(a, b, c)
    }

    function UB(a, b, c = .01) {
        const d = P(Wq).g();
        !b.eid && d.length && (b.eid = d.toString());
        Wm(MB, a, b, !0, c)
    }

    function VB(a, b, c = IB, d) {
        return OB.na(a, b, c, d, void 0)
    }

    function QB() {
        let a, b;
        typeof r.google_srt === "number" ? (b = r.google_srt, a = r.google_srt === 0 ? 1 : .01) : (b = Math.random(), a = .01);
        return {
            Jk: a,
            Lj: b
        }
    };

    function WB(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };

    function XB(a, b) {
        var c = YB(b, ".google-auto-placed");
        const d = ZB(b),
            e = $B(b),
            f = aC(b),
            g = bC(b),
            h = cC(b),
            k = YB(b, "div.googlepublisherpluginad"),
            l = YB(b, "html > ins.adsbygoogle");
        let m = [].concat(...YB(b, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), ...YB(b, "body ins.adsbygoogle"));
        b = [];
        for (const [n, p] of [
                [a.Ud, c],
                [a.qc, d],
                [a.Uj, e],
                [a.Nf, f],
                [a.Of, g],
                [a.Sj, h],
                [a.Tj, k],
                [a.Vj, l]
            ]) n === !1 ? b = b.concat(p) : m = m.concat(p);
        a = dC(m);
        c = dC(b);
        a = a.slice(0);
        for (const n of c)
            for (c = 0; c < a.length; c++)(n.contains(a[c]) || a[c].contains(n)) &&
                a.splice(c, 1);
        return a
    }

    function eC(a) {
        return !!a.className && a.className.indexOf("google-auto-placed") != -1
    }

    function fC(a) {
        const b = WB(a);
        return b ? Pa(Ra(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
    }

    function YB(a, b) {
        return bb(a.document.querySelectorAll(b))
    }

    function ZB(a) {
        return YB(a, "ins.adsbygoogle[data-anchor-status]")
    }

    function $B(a) {
        return YB(a, "ins.adsbygoogle[data-ad-format=autorelaxed]")
    }

    function aC(a) {
        return (fC(a) || YB(a, "div[id^=div-gpt-ad]")).concat(YB(a, "iframe[id^=google_ads_iframe]"))
    }

    function bC(a) {
        return YB(a, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")
    }

    function cC(a) {
        return YB(a, "ins.adsbygoogle-ablated-ad-slot")
    }

    function dC(a) {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var gC = SB(453, XB),
        hC = SB(454, function(a, b) {
            const c = YB(b, ".google-auto-placed"),
                d = ZB(b),
                e = $B(b),
                f = aC(b),
                g = bC(b),
                h = cC(b),
                k = YB(b, "div.googlepublisherpluginad");
            b = YB(b, "html > ins.adsbygoogle");
            return dC([...(a.Ud === !0 ? c : []), ...(a.qc === !0 ? d : []), ...(a.Uj === !0 ? e : []), ...(a.Nf === !0 ? f : []), ...(a.Of === !0 ? g : []), ...(a.Sj === !0 ? h : []), ...(a.Tj === !0 ? k : []), ...(a.Vj === !0 ? b : [])])
        });

    function iC(a, b, c) {
        const d = jC(a);
        b = kC(d, b, c);
        return new lC(a, d, b)
    }

    function mC(a) {
        return (a.bottom - a.top) * (a.right - a.left) > 1
    }

    function nC(a) {
        return a.g.map(b => b.box)
    }

    function oC(a) {
        return a.g.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    var lC = class {
        constructor(a, b, c) {
            this.j = a;
            this.g = b.slice(0);
            this.A = c.slice(0);
            this.i = null
        }
    };

    function jC(a) {
        const b = gC({
                qc: !1
            }, a),
            c = xr(a),
            d = wr(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = eC(e)) || mC(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                No: e ? 1 : 0
            } : null
        }).filter(mc(e => e === null))
    }

    function kC(a, b, c) {
        return b != void 0 && a.length <= (c != void 0 ? c : 8) ? pC(a, b) : Ra(a, d => new CB(d.box, 1))
    }

    function pC(a, b) {
        a = Ra(a, d => new CB(d.box, 1));
        const c = [];
        for (; a.length > 0;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (AB(d, a[f], b)) {
                        d = BB([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function qC(a, b, c) {
        const d = Is(c, b);
        return !Wa(a, e => fr(e, d))
    }

    function rC(a, b, c, d, e) {
        e = e.ma;
        const f = Is(e, b),
            g = Is(e, c),
            h = Is(e, d);
        return !Wa(a, k => fr(k, g) || fr(k, f) && !fr(k, h))
    }

    function sC(a, b, c, d) {
        const e = nC(a);
        if (qC(e, b, d.ma)) return !0;
        if (!rC(e, b, c.Jh, c.Kc, d)) return !1;
        const f = new CB(Is(d.ma, 0), 1);
        a = Pa(a.A, g => AB(g, f, c.Kc));
        b = Va(a, (g, h) => g + h.i);
        return a.length === 0 || b > c.Gh ? !1 : !0
    };
    var tC = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function uC(a, b) {
        const c = new jt,
            d = new Ir;
        b.forEach(e => {
            if (oi(e, Ot, 1, Rt)) {
                e = oi(e, Ot, 1, Rt);
                if (z(e, Nt, 1) && z(e, Nt, 1).ia() && z(e, Nt, 2) && z(e, Nt, 2).ia()) {
                    const g = vC(a, z(e, Nt, 1).ia()),
                        h = vC(a, z(e, Nt, 2).ia());
                    if (g && h)
                        for (var f of tC({
                                anchor: g,
                                position: z(e, Nt, 1).i()
                            }, {
                                anchor: h,
                                position: z(e, Nt, 2).i()
                            })) c.set(ta(f.anchor), f.position)
                }
                z(e, Nt, 3) && z(e, Nt, 3).ia() && (f = vC(a, z(e, Nt, 3).ia())) && c.set(ta(f), z(e, Nt, 3).i())
            } else oi(e, Pt, 2, Rt) ? wC(a, oi(e, Pt, 2, Rt), c) : oi(e, Mt, 3, Rt) && xC(a, oi(e, Mt, 3, Rt), d)
        });
        return new yC(c, d)
    }
    var yC = class {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    };
    const wC = (a, b, c) => {
            z(b, Nt, 2) ? (b = z(b, Nt, 2), (a = vC(a, b.ia())) && c.set(ta(a), b.i())) : z(b, nt, 1) && (a = zC(a, z(b, nt, 1))) && a.forEach(d => {
                d = ta(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        xC = (a, b, c) => {
            z(b, nt, 1) && (a = zC(a, z(b, nt, 1))) && a.forEach(d => {
                c.add(ta(d))
            })
        },
        vC = (a, b) => (a = zC(a, b)) && a.length > 0 ? a[0] : null,
        zC = (a, b) => (b = wy(b)) ? oy(b, a) : null;
    var AC = class {
        constructor() {
            var a = Math.random;
            this.g = Math.floor(a() * 2 ** 52);
            this.i = 0
        }
    };

    function BC(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (CC(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function DC(a) {
        a = EC(a);
        return a.has("all") || a.has("after")
    }

    function FC(a) {
        a = EC(a);
        return a.has("all") || a.has("before")
    }

    function EC(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function CC(a) {
        const b = EC(a);
        return a && (a.tagName === "AUTO-ADS-EXCLUSION-AREA" || b.has("inside") || b.has("all"))
    }
    var GC = class {
        constructor() {
            this.g = new Set;
            this.i = new AC
        }
    };

    function HC(a) {
        return function(b) {
            return sz(b, a)
        }
    }

    function IC(a) {
        const b = nr(a);
        return b ? Ea(JC, b + wr(a)) : fc
    }

    function KC(a, b, c) {
        if (a < 0) throw Error("ama::ead:nd");
        if (a === Infinity) return fc;
        const d = nC(c || iC(b));
        return e => qC(d, a, e.ma)
    }

    function LC(a, b, c, d) {
        if (a < 0 || b.Jh < 0 || b.Gh < 0 || b.Kc < 0) throw Error("ama::ead:nd");
        return a === Infinity ? fc : e => sC(d || iC(c, b.Kc), a, b, e)
    }

    function MC(a) {
        if (!a.length) return fc;
        const b = new Zs(a);
        return c => b.contains(c.uc)
    }

    function NC(a) {
        return function(b) {
            for (let c of b.ed)
                if (a.indexOf(c) > -1) return !1;
            return !0
        }
    }

    function OC(a) {
        return a.length ? function(b) {
            const c = b.ed;
            return a.some(d => c.indexOf(d) > -1)
        } : gc
    }

    function PC(a, b) {
        if (a <= 0) return gc;
        const c = rr(b).scrollHeight - a;
        return function(d) {
            return d.ma.g <= c
        }
    }

    function QC(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[si(c.Fe, 2) || 0]
        }
    }

    function RC(a) {
        return a.length ? b => a.includes(si(b.Fe, 1) || 0) : gc
    }

    function SC(a, b) {
        const c = uC(a, b);
        return function(d) {
            var e = d.ia();
            d = d.ga.i();
            d = Cy[d];
            var f = c.i,
                g = ta(e);
            f = f.g.get(g);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.g.contains(ta(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.g.contains(ta(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function TC() {
        const a = new GC;
        return function(b) {
            var c = b.ia();
            b = b.ga.i();
            var d = Cy[b];
            a: switch (d) {
                case 1:
                    b = DC(c.previousElementSibling) || FC(c);
                    break a;
                case 4:
                    b = DC(c) || FC(c.nextElementSibling);
                    break a;
                case 2:
                    b = FC(c.firstElementChild);
                    break a;
                case 3:
                    b = DC(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + d);
            }
            c = BC(a, c, d);
            d = a.i;
            UB("ama_exclusion_zone", {
                typ: b ? c ? "siuex" : "siex" : c ? "suex" : "noex",
                cor: d.g,
                num: d.i++,
                dvc: qe()
            }, .1);
            return !(b || c)
        }
    }
    const JC = (a, b) => b.ma.g >= a,
        UC = (a, b, c) => {
            c = c.ma.i;
            return a <= c && c <= b
        };

    function VC(a, b, c, d, e) {
        var f = WC(XC(a, b), a);
        if (f.length === 0) {
            var g = !!z(b, cu, 6) ? .g() ? .length;
            f = z(b, Zt, 28) ? .i() ? .i() && g ? WC(YC(a, b), a) : f
        }
        if (f.length === 0) return Iu(d, "pfno"), [];
        b = f;
        a = e.Nd ? ZC(a, b, c) : {
            Cb: b,
            Pd: null
        };
        const {
            Cb: h,
            Pd: k
        } = a;
        f = h;
        return f.length === 0 && k ? (Iu(d, k), []) : [f[e.ml ? 0 : e.kl ? Math.floor(f.length / 4) : Math.floor(f.length / 2)]]
    }

    function ZC(a, b, c) {
        c = c ? ai(c, Qt, 5, Jh()) : [];
        const d = SC(a.document, c),
            e = TC();
        b = b.filter(f => d(f));
        if (b.length === 0) return {
            Cb: [],
            Pd: "pfaz"
        };
        b = b.filter(f => e(f));
        return b.length === 0 ? {
            Cb: [],
            Pd: "pfet"
        } : {
            Cb: b,
            Pd: null
        }
    }

    function $C(a, b) {
        return a.ma.g - b.ma.g
    }

    function XC(a, b) {
        const c = z(b, cu, 6);
        if (!c) return [];
        b = z(b, Zt, 28) ? .i();
        return (b ? .g() ? kz(c.g(), a) : jz(c.g(), a, !!b ? .A())).map(d => d.j())
    }

    function YC(a, b) {
        b = ai(b, gu, 1, Jh()) || [];
        return Ly(b, a, {}).filter(c => !c.ed.includes(6))
    }

    function WC(a, b) {
        a = sz(a, b);
        const c = IC(b);
        a = a.filter(d => c(d));
        return a.sort($C)
    };
    var aD = {},
        bD = {},
        cD = {},
        dD = {},
        eD = {};

    function fD() {
        throw Error("Do not instantiate directly");
    }
    fD.prototype.Vg = null;
    fD.prototype.Yc = function() {
        return this.content
    };
    fD.prototype.toString = function() {
        return this.content
    };

    function gD(a) {
        if (a.Wg !== aD) throw Error("Sanitized content was not of kind HTML.");
        return Zc(a.toString())
    }

    function hD() {
        fD.call(this)
    }
    Ha(hD, fD);
    hD.prototype.Wg = aD;

    function iD(a) {
        if (a != null) switch (a.Vg) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function jD(a) {
        return kD(a, aD) ? a : a instanceof Yc ? lD($c(a).toString()) : lD(String(String(a)).replace(mD, nD), iD(a))
    }
    var lD = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            d !== void 0 && (c.Vg = d);
            return c
        }
    }(hD);

    function oD(a) {
        return pD(String(a), () => "").replace(qD, "&lt;")
    }
    const rD = RegExp.prototype.hasOwnProperty("sticky"),
        sD = new RegExp((rD ? "" : "^") + "(?:!|/?([a-zA-Z][a-zA-Z0-9:-]*))", rD ? "gy" : "g");

    function pD(a, b) {
        const c = [],
            d = a.length;
        let e = 0,
            f = [],
            g, h, k = 0;
        for (; k < d;) {
            switch (e) {
                case 0:
                    var l = a.indexOf("<", k);
                    if (l < 0) {
                        if (c.length === 0) return a;
                        c.push(a.substring(k));
                        k = d
                    } else c.push(a.substring(k, l)), h = l, k = l + 1, rD ? (sD.lastIndex = k, l = sD.exec(a)) : (sD.lastIndex = 0, l = sD.exec(a.substring(k))), l ? (f = ["<", l[0]], g = l[1], e = 1, k += l[0].length) : c.push("<");
                    break;
                case 1:
                    l = a.charAt(k++);
                    switch (l) {
                        case "'":
                        case '"':
                            let m = a.indexOf(l, k);
                            m < 0 ? k = d : (f.push(l, a.substring(k, m + 1)), k = m + 1);
                            break;
                        case ">":
                            f.push(l);
                            c.push(b(f.join(""),
                                g));
                            e = 0;
                            f = [];
                            h = g = null;
                            break;
                        default:
                            f.push(l)
                    }
                    break;
                default:
                    throw Error();
            }
            e === 1 && k >= d && (k = h + 1, c.push("<"), e = 0, f = [], h = g = null)
        }
        return c.join("")
    }

    function tD(a, b) {
        a = a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
        return b ? a.replace(/{/g, " \\{").replace(/}/g, " \\}").replace(/\/\*/g, "/ *").replace(/\\$/, "\\ ") : a
    }

    function X(a) {
        kD(a, aD) ? (a = oD(a.Yc()), a = String(a).replace(uD, nD)) : a = String(a).replace(mD, nD);
        return a
    }

    function vD(a) {
        a = String(a);
        const b = (d, e, f) => {
            const g = Math.min(e.length - f, d.length);
            for (let k = 0; k < g; k++) {
                var h = e[f + k];
                if (d[k] !== ("A" <= h && h <= "Z" ? h.toLowerCase() : h)) return !1
            }
            return !0
        };
        for (var c = 0;
            (c = a.indexOf("<", c)) != -1;) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function wD(a) {
        if (a == null) return " null ";
        if (kD(a, bD)) return a.Yc();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(xD, yD) + "'"
        }
    }
    const zD = /['()]/g;

    function AD(a) {
        return "%" + a.charCodeAt(0).toString(16)
    }

    function BD(a) {
        return String(a).replace(CD, DD)
    }

    function Z(a) {
        return kD(a, eD) ? tD(a.Yc(), !1) : a == null ? "" : a instanceof gd ? tD(hd(a), !1) : tD(String(a), !0)
    }

    function kD(a, b) {
        return a != null && a.Wg === b
    }
    const ED = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function nD(a) {
        return ED[a]
    }
    const FD = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function yD(a) {
        return FD[a]
    }
    const GD = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function DD(a) {
        return GD[a]
    }
    const mD = /[\x00\x22\x26\x27\x3c\x3e]/g,
        uD = /[\x00\x22\x27\x3c\x3e]/g,
        xD = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        CD = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        HD = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
        ID = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        JD = /^[a-zA-Z0-9+\/_-]+={0,2}$/;

    function KD(a) {
        a = String(a);
        return JD.test(a) ? a : "zSoyz"
    }
    const qD = /</g;
    /* 
     
     
     Copyright Mathias Bynens <http://mathiasbynens.be/> 
     
     Permission is hereby granted, free of charge, to any person obtaining 
     a copy of this software and associated documentation files (the 
     "Software"), to deal in the Software without restriction, including 
     without limitation the rights to use, copy, modify, merge, publish, 
     distribute, sublicense, and/or sell copies of the Software, and to 
     permit persons to whom the Software is furnished to do so, subject to 
     the following conditions: 
     
     The above copyright notice and this permission notice shall be 
     included in all copies or substantial portions of the Software. 
     
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
     LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
     OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
     WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
    */
    const LD = Math.floor;
    var MD = /^xn--/,
        ND = /[\x2E\u3002\uFF0E\uFF61]/g;
    const OD = {
        Rn: "Overflow: input needs wider integers to process",
        On: "Illegal input >= 0x80 (not a basic code point)",
        An: "Invalid input"
    };

    function PD(a) {
        throw RangeError(OD[a]);
    }

    function QD(a, b) {
        const c = a.split("@");
        let d = "";
        c.length > 1 && (d = c[0] + "@", a = c[1]);
        a = a.replace(ND, ".");
        a = a.split(".").map(b).join(".");
        return d + a
    }

    function RD(a) {
        return QD(a, b => {
            if (MD.test(b) && b.length > 4) {
                b = b.slice(4).toLowerCase();
                const h = [],
                    k = b.length;
                let l = 0,
                    m = 128;
                var c = 72,
                    d = b.lastIndexOf("-");
                d < 0 && (d = 0);
                for (var e = 0; e < d; ++e) b.charCodeAt(e) >= 128 && PD("Illegal input >= 0x80 (not a basic code point)"), h.push(b.charCodeAt(e));
                for (d = d > 0 ? d + 1 : 0; d < k;) {
                    e = l;
                    for (let n = 1, p = 36;; p += 36) {
                        d >= k && PD("Invalid input");
                        var f = b.charCodeAt(d++);
                        f = f - 48 < 10 ? f - 22 : f - 65 < 26 ? f - 65 : f - 97 < 26 ? f - 97 : 36;
                        (f >= 36 || f > LD((2147483647 - l) / n)) && PD("Overflow: input needs wider integers to process");
                        l += f * n;
                        var g = p <= c ? 1 : p >= c + 26 ? 26 : p - c;
                        if (f < g) break;
                        f = 36 - g;
                        n > LD(2147483647 / f) && PD("Overflow: input needs wider integers to process");
                        n *= f
                    }
                    f = h.length + 1;
                    c = l - e;
                    g = 0;
                    c = e == 0 ? LD(c / 700) : c >> 1;
                    for (c += LD(c / f); c > 455; g += 36) c = LD(c / 35);
                    c = LD(g + 36 * c / (c + 38));
                    LD(l / f) > 2147483647 - m && PD("Overflow: input needs wider integers to process");
                    m += LD(l / f);
                    l %= f;
                    h.splice(l++, 0, m)
                }
                b = String.fromCodePoint.apply(null, h)
            }
            return b
        })
    };

    function SD(a, b, c) {
        var d = a.Oa.contentWindow;
        a.Ya ? (b = {
            action: "search",
            searchTerm: b,
            rsToken: c
        }, b.experimentId = a.Wa, a.postMessage(d, b)) : (d = d.google.search.cse.element.getElement(a.jc), c = {
            rsToken: c,
            hostName: a.host
        }, a.Xa || typeof a.Wa !== "number" || (c.afsExperimentId = a.Wa), d.execute(b, void 0, c))
    }
    var TD = class {
        constructor(a) {
            this.Oa = a.Oa;
            this.Ma = a.Ma;
            this.jc = a.jc;
            this.Za = a.Za;
            this.wd = a.wd;
            this.host = a.location.host;
            this.origin = a.location.origin;
            this.language = a.language;
            this.tc = a.tc;
            this.Wa = a.Wa;
            this.md = a.md || !1;
            this.Ya = a.Ya;
            this.Pb = a.Pb;
            this.g = a.wg || !1;
            this.Xa = a.Xa || !1;
            this.xg = !!a.xg
        }
        postMessage(a, b) {
            a ? .postMessage(b, "https://www.gstatic.com")
        }
        init() {
            this.Oa.setAttribute("id", "prose-iframe");
            this.Oa.setAttribute("width", "100%");
            this.Oa.setAttribute("height", "100%");
            this.Oa.style.cssText = "box-sizing:border-box;border:unset;";
            var a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
            var b = Tc(a, Qc) || Lc;
            var c = RD(this.host.startsWith("www.") ? this.host.slice(4) : this.host),
                d = {};
            a = this.jc;
            var e = this.Za,
                f = this.wd;
            const g = this.host;
            c = this.tc.replace("${website}", c);
            var h = this.md;
            const k = this.g,
                l = this.xg,
                m = d && d.Oc,
                n = d && d.hj;
            d = lD;
            h = "<style" + (m ? ' nonce="' + X(KD(m)) + '"' : "") + ">.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}#prose-empty-serp-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 52px; position: relative; width: 248px; height: 259px; margin: auto; top: 100px;}#prose-empty-serp-icon-image {display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 30px; gap: 10px; width: 124px; height: 124px; border-radius: 62px; flex: none; order: 1; flex-grow: 0; position: absolute; top: 0;}#prose-empty-serp-text-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 19px; width: 248px; height: 83px; flex: none; order: 2; align-self: stretch; flex-grow: 0; position: absolute; top: 208px;}#prose-empty-serp-text-div {display: flex; flex-direction: column; align-items: flex-start; padding: 0; gap: 11px; width: 248px; height: 83px; flex: none; order: 0; align-self: stretch; flex-grow: 0;}#prose-empty-serp-supporting-text {width: 248px; height: 40px; font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; letter-spacing: 0.2px; color: #202124; flex: none; order: 1; align-self: stretch; flex-grow: 0;}</style>" +
                (h ? "<script" + (n ? ' nonce="' + X(KD(n)) + '"' : "") + '>window.__gcse={initializationCallback:function(){top.postMessage({action:"init",adChannel:"' + String(f).replace(xD, yD) + '"},top.location.origin);}};\x3c/script>' : "") + '<div class="prose-container"><img class="cse-favicon" src="';
            kD(b, cD) || kD(b, dD) ? b = String(b).replace(CD, DD) : Mc(b) ? b = BD(Nc(b)) : b instanceof Hc ? b = BD(Jc(b).toString()) : (b = String(b), b = ID.test(b) ? b.replace(CD, DD) : "about:invalid#zSoyz");
            a = d(h + X(b) + '" alt="' + X(g) + ' icon"><p class="cse-header"><strong>' +
                jD(c) + "</strong></p>" + (l ? '<div class="gcse-searchresults-only" data-gname="' + X(a) + '" data-adclient="' + X(e) + '" data-adchannel="' + X(f) + '" data-as_sitesearch="' + X(g) + '" data-personalizedAds="false" data-disableAds="true"></div>' : '<div class="gcse-search" data-gname="' + X(a) + '" data-adclient="' + X(e) + '" data-adchannel="' + X(f) + '" data-as_sitesearch="' + X(g) + '" data-personalizedAds="false"></div>') + "</div>" + (k ? "<div id=\"prose-empty-serp-container\"><img id='prose-empty-serp-icon-image' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiByeD0iNjIiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS4zNiA2NS4zODY3TDg0LjY0IDgwLjY2NjdMODAuNjY2NyA4NC42NEw2NS4zODY3IDY5LjM2QzYyLjUzMzMgNzEuNDEzMyA1OS4wOTMzIDcyLjY2NjcgNTUuMzMzMyA3Mi42NjY3QzQ1Ljc2IDcyLjY2NjcgMzggNjQuOTA2NyAzOCA1NS4zMzMzQzM4IDQ1Ljc2IDQ1Ljc2IDM4IDU1LjMzMzMgMzhDNjQuOTA2NyAzOCA3Mi42NjY3IDQ1Ljc2IDcyLjY2NjcgNTUuMzMzM0M3Mi42NjY3IDU5LjA5MzMgNzEuNDEzMyA2Mi41MzMzIDY5LjM2IDY1LjM4NjdaTTU1LjMzMzMgNDMuMzMzM0M0OC42OTMzIDQzLjMzMzMgNDMuMzMzMyA0OC42OTMzIDQzLjMzMzMgNTUuMzMzM0M0My4zMzMzIDYxLjk3MzMgNDguNjkzMyA2Ny4zMzMzIDU1LjMzMzMgNjcuMzMzM0M2MS45NzMzIDY3LjMzMzMgNjcuMzMzMyA2MS45NzMzIDY3LjMzMzMgNTUuMzMzM0M2Ny4zMzMzIDQ4LjY5MzMgNjEuOTczMyA0My4zMzMzIDU1LjMzMzMgNDMuMzMzM1oiIGZpbGw9IiM5QUEwQTYiLz4KPC9zdmc+Cg==' alt=''><div id='prose-empty-serp-text-container'><div id='prose-empty-serp-text-div'><div id='prose-empty-serp-supporting-text'>Search this website by entering a keyword.</div></div></div></div>" :
                    ""));
            a = gD(a);
            this.Ya ? (a = this.Oa, e = Jd `https://www.gstatic.com/prose/protected/${this.Pb||"558153351"}/iframe.html?cx=${this.Ma}&host=${this.host}&hl=${this.language}&lrh=${this.tc}&client=${this.Za}&origin=${this.origin}`, a.src = Jc(e).toString()) : (e = new Map([
                ["cx", this.Ma],
                ["language", this.language]
            ]), this.Xa && (f = Array.isArray(this.Wa) ? this.Wa : [this.Wa], f.length && e.set("fexp", f.join())), e = Kd(Jd `https://cse.google.com/cse.js`, e), e = Jc(e).toString(), e = Zc(`<script src="${xd(e)}"` + ">\x3c/script>"), a = Fd("body", {
                style: "margin:0;"
            }, [a, e]), this.Oa.srcdoc = $c(a))
        }
    };

    function UD(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map), a.google_reactive_ads_global_state.sideRailMutationCallbacks ==
            null && (a.google_reactive_ads_global_state.sideRailMutationCallbacks = [])) : a.google_reactive_ads_global_state = new VD;
        return a.google_reactive_ads_global_state
    }
    var VD = class {
            constructor() {
                this.wasPlaTagProcessed = !1;
                this.wasReactiveAdConfigReceived = {};
                this.adCount = {};
                this.wasReactiveAdVisible = {};
                this.stateForType = {};
                this.reactiveTypeEnabledInAsfe = {};
                this.wasReactiveTagRequestSent = !1;
                this.reactiveTypeDisabledByPublisher = {};
                this.tagSpecificState = {};
                this.messageValidationEnabled = !1;
                this.floatingAdsStacking = new WD;
                this.sideRailProcessedFixedElements = new Set;
                this.sideRailAvailableSpace = new Map;
                this.sideRailPlasParam = new Map;
                this.sideRailMutationCallbacks = [];
                this.g =
                    null;
                this.clickTriggeredInterstitialMayBeDisplayed = !1
            }
        },
        WD = class {
            constructor() {
                this.maxZIndexRestrictions = {};
                this.nextRestrictionId = 0;
                this.maxZIndexListeners = []
            }
        };

    function XD(a, b) {
        return new YD(a, b)
    }

    function ZD(a) {
        const b = $D(a);
        Ma(a.floatingAdsStacking.maxZIndexListeners, c => c(b))
    }

    function $D(a) {
        a = Vd(a.floatingAdsStacking.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }

    function aE(a, b) {
        $a(a.floatingAdsStacking.maxZIndexListeners, c => c === b)
    }
    var bE = class {
        constructor(a) {
            this.floatingAdsStacking = UD(a).floatingAdsStacking
        }
    };

    function cE(a) {
        if (a.g == null) {
            var b = a.controller,
                c = a.Jb;
            const d = b.floatingAdsStacking.nextRestrictionId++;
            b.floatingAdsStacking.maxZIndexRestrictions[d] = c;
            ZD(b);
            a.g = d
        }
    }

    function dE(a) {
        if (a.g != null) {
            var b = a.controller;
            delete b.floatingAdsStacking.maxZIndexRestrictions[a.g];
            ZD(b);
            a.g = null
        }
    }
    var YD = class {
        constructor(a, b) {
            this.controller = a;
            this.Jb = b;
            this.g = null
        }
    };

    function eE(a) {
        a = a.activeElement;
        const b = a ? .shadowRoot;
        return b ? eE(b) || a : a
    }

    function fE(a, b) {
        return gE(b, a.document.body).flatMap(c => hE(c))
    }

    function gE(a, b) {
        var c = a;
        for (a = []; c && c !== b;) {
            a.push(c);
            let e;
            var d;
            (d = c.parentElement) || (c = c.getRootNode(), d = ((e = c.mode && c.host ? c : null) == null ? void 0 : e.host) || null);
            c = d
        }
        return c !== b ? [] : a
    }

    function hE(a) {
        const b = a.parentElement;
        return b ? Array.from(b.children).filter(c => c !== a) : []
    };

    function iE(a) {
        a.g !== null && (a.g.xj.forEach(b => {
            b.inert = !1
        }), a.g.Hk ? .focus(), a.g = null)
    }

    function jE(a, b) {
        iE(a);
        const c = eE(a.B.document);
        b = fE(a.B, b).filter(d => !d.inert);
        b.forEach(d => {
            d.inert = !0
        });
        a.g = {
            Hk: c,
            xj: b
        }
    }
    var kE = class {
        constructor(a) {
            this.B = a;
            this.g = null
        }
        Ke() {
            iE(this)
        }
    };

    function lE(a) {
        return new mE(a, new Ur(a, a.document.body), new Ur(a, a.document.documentElement), new Ur(a, a.document.documentElement))
    }

    function nE(a) {
        Tr(a.j, "scroll-behavior", "auto");
        var b = oE(a.B);
        b.activePageScrollPreventers.add(a);
        b.previousWindowScroll === null && (b.previousWindowScroll = a.B.scrollY);
        Tr(a.g, "position", "fixed");
        Tr(a.g, "top", `${-b.previousWindowScroll}px`);
        Tr(a.g, "width", "100%");
        Tr(a.g, "overflow-x", "hidden");
        Tr(a.g, "overflow-y", "hidden");
        a.dontOverrideDocumentOverflowUnlessNeeded() ? (b = getComputedStyle(a.B.document.documentElement), pE(b.overflowX) && Tr(a.i, "overflow-x", "unset"), pE(b.overflowY) && Tr(a.i, "overflow-y", "unset")) :
            (Tr(a.i, "overflow-x", "hidden"), Tr(a.i, "overflow-y", "hidden"))
    }

    function pE(a) {
        return a === "scroll" || a === "auto"
    }

    function qE(a) {
        Sr(a.g);
        Sr(a.i);
        const b = oE(a.B);
        b.activePageScrollPreventers.delete(a);
        b.activePageScrollPreventers.size === 0 && (a.B.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        Sr(a.j)
    }
    var mE = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.g = b;
            this.i = c;
            this.j = d
        }
        dontOverrideDocumentOverflowUnlessNeeded() {
            return oE(this.B).dontOverrideDocumentOverflowUnlessNeeded
        }
    };

    function oE(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set,
            dontOverrideDocumentOverflowUnlessNeeded: !1
        }
    }

    function rE(a) {
        return a.googPageScrollPreventerInfo && a.googPageScrollPreventerInfo.activePageScrollPreventers.size > 0 ? !0 : !1
    };

    function sE(a, b) {
        return tE(`#${a}`, b)
    }

    function uE(a, b) {
        return tE(`.${a}`, b)
    }

    function tE(a, b) {
        b = b.querySelector(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    };

    function vE(a, b) {
        const c = a.document.createElement("div");
        Lu(a, c);
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            wb: c,
            shadowRoot: a
        }
    };

    function wE(a, b) {
        b = vE(a, b);
        a.document.body.appendChild(b.wb);
        return b
    }

    function xE(a, b) {
        const c = new S(b.O);
        cs(b, !0, () => void c.g(!0));
        cs(b, !1, () => {
            a.setTimeout(() => {
                b.O || c.g(!1)
            }, 700)
        });
        return Yr(c)
    };

    function yE(a) {
        var b = {},
            c = a.Rd,
            d = a.qg,
            e = a.Od;
        const f = a.Hd,
            g = a.Qg,
            h = a.zIndex,
            k = a.Ye;
        a = a.bb;
        b = b && b.Oc;
        c = "<style" + (b ? ' nonce="' + X(KD(b)) + '"' : "") + ">#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + Z(h) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            Z(c) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: ";
        d = d ? a ? 20 : 16 : 0;
        c += Z(d) + "px; transition: transform " + Z(k) + "s ease-in-out;" + (e ? "left: 0; border-top-right-radius: " + Z(d) + "px; border-bottom-right-radius: " + Z(d) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + Z(d) + "px; border-bottom-left-radius: " + Z(d) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (a ?
                "height: 24px;" : "padding: 5px;") + "}.hd-control-button {border: none; background: none; cursor: pointer;" + (a ? "" : "padding: 5px;") + "}#hd-back-arrow-button {" + (e ? "float: right;" : "float: left;") + "}#hd-close-button {" + (e ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' +
            X(g) + '">';
        e = a ? "#5F6368" : "#444746";
        c += '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + X(e) + '"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' + X(f) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + X(e) + '"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        return lD(c)
    };

    function zE(a) {
        a = a.top;
        if (!a) return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && b.pushState && typeof b.pushState === "function" ? b : null;
        if (!b) return null;
        if (a.googNavStack) return a.googNavStack;
        b = new AE(a, b);
        b.init();
        return b ? a.googNavStack = b : null
    }

    function BE(a, b) {
        return b ? b.googNavStackId === a.i ? b : null : null
    }

    function CE(a, b) {
        for (let c = b.length - 1; c >= 0; --c) {
            const d = c === 0;
            a.K.requestAnimationFrame(() => void b[c].Tk({
                isFinal: d
            }))
        }
    }

    function DE(a, b) {
        b = fb(a.stack, b, (c, d) => c - d.sh.googNavStackStateId);
        if (b >= 0) return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }
    class AE extends R {
        constructor(a, b) {
            super();
            this.K = a;
            this.history = b;
            this.stack = [];
            this.i = Math.random() * 1E9 >>> 0;
            this.l = 0;
            this.j = c => {
                (c = BE(this, c.state)) ? CE(this, DE(this, c.googNavStackStateId + .5)): CE(this, this.stack.splice(0, this.stack.length))
            }
        }
        pushEvent() {
            const a = {
                    googNavStackId: this.i,
                    googNavStackStateId: this.l++
                },
                b = new Promise(c => {
                    this.stack.push({
                        Tk: c,
                        sh: a
                    })
                });
            this.history.pushState(a, "");
            return {
                navigatedBack: b,
                triggerNavigateBack: () => {
                    const c = DE(this, a.googNavStackStateId);
                    var d;
                    if (d = c.length >
                        0) {
                        d = c[0].sh;
                        const e = BE(this, this.history.state);
                        d = e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId
                    }
                    d && this.history.go(-c.length);
                    CE(this, c)
                }
            }
        }
        init() {
            this.K.addEventListener("popstate", this.j)
        }
        g() {
            this.K.removeEventListener("popstate", this.j);
            super.g()
        }
    };

    function EE(a) {
        return (a = zE(a)) ? new FE(a) : null
    }

    function GE(a) {
        if (!a.i) {
            var {
                navigatedBack: b,
                triggerNavigateBack: c
            } = a.l.pushEvent();
            a.i = c;
            b.then(() => {
                a.i && !a.A && (a.i = null, is(a.j))
            })
        }
    }
    var FE = class extends R {
        constructor(a) {
            super();
            this.l = a;
            this.j = new js;
            this.i = null
        }
    };

    function HE(a, b, c) {
        var d = c.sf ? null : new kE(a);
        const e = XD(new bE(a), c.zIndex - 1);
        b = IE(a, b, c);
        d = new JE(a, b, d, c.Wc, lE(a), e);
        d.init();
        (c.eh || c.eh === void 0) && KE(d);
        c.Tc && ((a = EE(a)) ? LE(d, a, c.cg) : c.cg ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function KE(a) {
        a.C = b => {
            b.key === "Escape" && a.i.O && a.collapse()
        };
        a.B.document.body.addEventListener("keydown", a.C)
    }

    function LE(a, b, c) {
        cs(a.i, !0, () => {
            try {
                GE(b)
            } catch (d) {
                c ? .(d)
            }
        });
        cs(a.i, !1, () => {
            try {
                b.i && (b.i(), b.i = null)
            } catch (d) {
                c ? .(d)
            }
        });
        gs(b.j).listen(() => void a.collapse());
        Qr(a, b)
    }

    function ME(a) {
        if (a.A) throw Error("Accessing domItems after disposal");
        return a.D
    }

    function NE(a) {
        a.B.setTimeout(() => {
            a.i.O && ME(a).Na.focus()
        }, 500)
    }

    function OE(a) {
        const {
            bg: b,
            dj: c
        } = ME(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }

    function PE(a) {
        cs(a.j, !1, () => {
            ME(a).Na.classList.add("hd-hidden")
        })
    }
    var JE = class extends R {
        constructor(a, b, c, d = !0, e, f) {
            super();
            this.B = a;
            this.D = b;
            this.l = c;
            this.Wc = d;
            this.i = new S(!1);
            this.j = xE(a, this.i);
            cs(this.j, !0, () => {
                nE(e);
                cE(f)
            });
            cs(this.j, !1, () => {
                qE(e);
                dE(f)
            })
        }
        show({
            ah: a = !1
        } = {}) {
            if (this.A) throw Error("Cannot show drawer after disposal");
            ME(this).Na.classList.remove("hd-hidden");
            Or(this.B);
            ME(this).Na.classList.add("hd-revealed");
            this.i.g(!0);
            this.l && (jE(this.l, ME(this).xb.wb), this.Wc && NE(this));
            a && cs(this.j, !1, () => {
                this.dispose()
            })
        }
        collapse() {
            ME(this).Na.classList.remove("hd-revealed");
            this.i.g(!1);
            this.l ? .Ke()
        }
        isVisible() {
            return this.j
        }
        init() {
            OE(this);
            PE(this)
        }
        g() {
            this.C && this.B.document.body.removeEventListener("keydown", this.C);
            const a = this.D.xb.wb,
                b = a.parentNode;
            b && b.removeChild(a);
            this.l ? .Ke();
            super.g()
        }
    };

    function IE(a, b, c) {
        const d = wE(a, c.tf),
            e = d.shadowRoot;
        e.appendChild(dm(new Rl(a.document), gD(yE({
            Rd: c.Rd,
            qg: c.qg ? ? !0,
            Od: c.Od || !1,
            Hd: c.Hd,
            Qg: c.Qg || "",
            zIndex: c.zIndex,
            Ye: .5,
            bb: c.bb || !1
        }))));
        const f = sE("hd-drawer-container", e);
        c.zf ? .i(g => {
            f.setAttribute("aria-label", g)
        });
        c = sE("hd-content-container", e);
        c.appendChild(b);
        Or(a);
        return {
            Na: f,
            bg: sE("hd-modal-background", e),
            lf: c,
            dj: sE("hd-close-button", e),
            Qo: sE("hd-back-arrow-button", e),
            xb: d
        }
    };

    function QE(a) {
        {
            var b = {};
            var c = a.Ck;
            const f = a.Kj;
            var d = a.zIndex,
                e = a.Ye;
            a = a.bb;
            b = b && b.Oc;
            d = "<style" + (b ? ' nonce="' + X(KD(b)) + '"' : "") + ">#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + Z(d) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
                Z(f) + "%; transition: transform " + Z(e) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round ";
            e = a ? 20 : 28;
            d += Z(e) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
                Z(c / f * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + Z((f - c) / f * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
                Z(c / f * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + Z(c / f * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + Z(80) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
                Z(e) + "px " + Z(e) + "px 0 0; background: white; display: flex; height: " + Z(30) + "px; justify-content: center; cursor: grab;}.ved-handle-icon {" + (a ? "background: #dadce0; width: 50px;" : "background: #747775; opacity: 0.4; width: 32px;") + 'border-radius: 2px; height: 4px; margin-bottom: 8px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
                RE("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + RE("ved-fixed-handle") + "</div></div></div>";
            c = lD(d)
        }
        return c
    }

    function RE(a) {
        return lD('<div class="ved-handle" id="' + X(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function SE(a) {
        return xs(a.g).map(b => b ? TE(a, b) : 0)
    }

    function TE(a, b) {
        switch (a.direction) {
            case 0:
                return UE(-b.ti);
            case 1:
                return UE(-b.si);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function VE(a) {
        return zs(a.g).map(b => TE(a, b))
    }
    var WE = class {
        constructor(a) {
            this.g = a;
            this.direction = 0
        }
    };

    function UE(a) {
        return a === 0 ? 0 : a
    };

    function XE(a) {
        if (a.A) throw Error("Accessing domItems after disposal");
        return a.D
    }

    function YE(a) {
        a.B.setTimeout(() => {
            a.i.O && XE(a).Na.focus()
        }, 500)
    }

    function ZE(a) {
        XE(a).Na.classList.remove("ved-hidden");
        Or(a.B);
        const {
            ra: b,
            rb: c
        } = XE(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || $E(a);
        XE(a).Na.classList.add("ved-revealed");
        a.i.g(!0);
        a.j && (jE(a.j, XE(a).xb.wb), a.Wc && YE(a))
    }

    function aF(a) {
        return xE(a.B, a.i)
    }

    function bF(a, b) {
        const c = new S(b());
        gs(a.J).listen(() => void c.g(b()));
        return Yr(c)
    }

    function cF(a) {
        const {
            ra: b,
            te: c
        } = XE(a);
        return bF(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function dF(a) {
        const {
            ra: b,
            te: c
        } = XE(a);
        return bF(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function eF(a) {
        const {
            ra: b
        } = XE(a);
        return bF(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function fF(a) {
        return Zr(cF(a), eF(a))
    }

    function gF(a) {
        const {
            ra: b,
            rb: c
        } = XE(a);
        return bF(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function $E(a) {
        XE(a).rb.classList.add("ved-snap-point-top");
        var b = hF(a, XE(a).rb);
        XE(a).ra.scrollTop = b;
        iF(a)
    }

    function jF(a) {
        as(cF(a), !0, () => {
            const {
                kh: b,
                rd: c
            } = XE(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        as(cF(a), !1, () => {
            const {
                kh: b,
                rd: c
            } = XE(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function kF(a) {
        const b = Es(a.B, XE(a).lf);
        Hs(b).i(() => void lF(a));
        Qr(a, b)
    }

    function mF(a) {
        as(nF(a), !0, () => {
            XE(a).Oh.classList.remove("ved-hidden")
        });
        as(nF(a), !1, () => {
            XE(a).Oh.classList.add("ved-hidden")
        })
    }

    function oF(a) {
        const b = () => void is(a.G),
            {
                bg: c,
                rb: d,
                Jj: e
            } = XE(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        cs(pF(a), !0, b)
    }

    function qF(a) {
        cs(aF(a), !1, () => {
            $E(a);
            XE(a).Na.classList.add("ved-hidden")
        })
    }

    function iF(a) {
        bs(a.l, !1, () => void is(a.J))
    }

    function lF(a) {
        if (!a.l.O) {
            var {
                Xg: b,
                lf: c
            } = XE(a), d = c.getBoundingClientRect().height;
            d = Math.max(rF(a), d);
            a.l.g(!0);
            var e = sF(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.B.requestAnimationFrame(() => {
                a.B.requestAnimationFrame(() => {
                    a.l.g(!1)
                })
            })
        }
    }

    function nF(a) {
        const {
            ra: b,
            rb: c
        } = XE(a);
        return bF(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function pF(a) {
        return Xr(a.C.map(kt), tF(a))
    }

    function tF(a) {
        return bF(a, () => XE(a).ra.scrollTop === 0)
    }

    function hF(a, b) {
        ({
            rd: a
        } = XE(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function uF(a, b) {
        a.C.g(!0);
        const {
            rd: c,
            ra: d
        } = XE(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void vF(a, b)
    }

    function vF(a, b) {
        const {
            rd: c,
            ra: d
        } = XE(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        XE(a).ra.scrollTop = b;
        iF(a);
        a.C.g(!1)
    }

    function sF(a) {
        const b = XE(a).ra.scrollTop;
        uF(a, b);
        return () => void vF(a, b)
    }

    function rF(a) {
        const {
            ra: b,
            te: c,
            Xg: d,
            rb: e
        } = XE(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var g = d.getBoundingClientRect();
        const h = e.getBoundingClientRect();
        g = g.top - f.top;
        return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g)
    }
    var wF = class extends R {
        constructor(a, b, c, d, e = !0) {
            super();
            this.B = a;
            this.D = b;
            this.M = c;
            this.j = d;
            this.Wc = e;
            this.G = new js;
            this.J = new js;
            this.i = new S(!1);
            this.C = new S(!1);
            this.l = new S(!1)
        }
        init() {
            $E(this);
            jF(this);
            kF(this);
            mF(this);
            oF(this);
            qF(this);
            XE(this).ra.addEventListener("scroll", () => void iF(this))
        }
        g() {
            const a = this.D.xb.wb,
                b = a.parentNode;
            b && b.removeChild(a);
            this.j ? .Ke();
            super.g()
        }
    };

    function xF(a, b, c) {
        const d = wE(a, c.tf),
            e = d.shadowRoot;
        e.appendChild(dm(new Rl(a.document), gD(QE({
            Ck: c.Qh * 100,
            Kj: c.lh * 100,
            zIndex: c.zIndex,
            Ye: .5,
            bb: c.bb || !1
        }))));
        const f = sE("ved-drawer-container", e);
        c.zf ? .i(g => {
            f.setAttribute("aria-label", g)
        });
        c = sE("ved-content-container", e);
        c.appendChild(b);
        Or(a);
        return {
            Na: f,
            bg: sE("ved-modal-background", e),
            li: sE("ved-ui-revealer", e),
            ra: sE("ved-scroller", e),
            rd: sE("ved-scrolled-stack", e),
            Jj: sE("ved-fully-closed-anchor", e),
            rb: sE("ved-partially-extended-anchor", e),
            Xg: sE("ved-content-sizer",
                e),
            lf: c,
            Yo: sE("ved-moving-handle", e),
            te: sE("ved-moving-handle-holder", e),
            Gj: sE("ved-fixed-handle", e),
            kh: sE("ved-fixed-handle-holder", e),
            Oh: sE("ved-over-scroll-block", e),
            xb: d
        }
    };

    function yF(a, b, c) {
        var d = XD(new bE(a), c.zIndex - 1);
        b = xF(a, b, c);
        const e = c.sf ? null : new kE(a);
        var f = b.Gj;
        f = new As(new rs(a, f), new os(f));
        var g = f.g;
        g.l.addEventListener("mousedown", g.D);
        g.A.addEventListener("mouseup", g.C);
        g.A.addEventListener("mousemove", g.H, {
            passive: !1
        });
        g = f.i;
        g.i.addEventListener("touchstart", g.H);
        g.i.addEventListener("touchend", g.l);
        g.i.addEventListener("touchmove", g.C, {
            passive: !1
        });
        b = new wF(a, b, new WE(f), e, c.Wc);
        b.init();
        d = new zF(a, b, lE(a), d);
        Qr(d, b);
        d.init();
        c.Tc && ((a = EE(a)) ? AF(d,
            a, c.cg) : c.cg ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function AF(a, b, c) {
        cs(a.i.i, !0, () => {
            try {
                GE(b)
            } catch (d) {
                c ? .(d)
            }
        });
        cs(a.i.i, !1, () => {
            try {
                b.i && (b.i(), b.i = null)
            } catch (d) {
                c ? .(d)
            }
        });
        gs(b.j).listen(() => void a.collapse());
        Qr(a, b)
    }

    function BF(a) {
        cs(Xr(fF(a.i), gF(a.i)), !0, () => {
            XE(a.i).rb.classList.remove("ved-snap-point-top")
        });
        as(dF(a.i), !0, () => {
            XE(a.i).ra.classList.add("ved-no-snap")
        });
        as(dF(a.i), !1, () => {
            XE(a.i).ra.classList.remove("ved-no-snap")
        });
        cs(dF(a.i), !1, () => {
            var b = a.i;
            var c = XE(b).te;
            c = uF(b, hF(b, c));
            b.B.setTimeout(c, 100)
        })
    }

    function CF(a) {
        const b = a.i.M;
        SE(b).listen(c => {
            c = -c;
            if (c > 0) {
                const {
                    li: d
                } = XE(a.i);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                li: c
            } = XE(a.i)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        VE(b).listen(c => {
            -c > 30 && a.collapse()
        })
    }
    var zF = class extends R {
        constructor(a, b, c, d) {
            super();
            this.B = a;
            this.i = b;
            cs(aF(b), !0, () => {
                nE(c);
                cE(d)
            });
            cs(aF(b), !1, () => {
                qE(c);
                dE(d)
            })
        }
        show({
            ah: a = !1
        } = {}) {
            if (this.A) throw Error("Cannot show drawer after disposal");
            ZE(this.i);
            a && cs(aF(this.i), !1, () => {
                this.dispose()
            })
        }
        collapse() {
            var a = this.i;
            XE(a).Na.classList.remove("ved-revealed");
            a.i.g(!1);
            a.j ? .Ke()
        }
        isVisible() {
            return aF(this.i)
        }
        init() {
            gs(this.i.G).listen(() => {
                this.collapse()
            });
            BF(this);
            CF(this);
            Or(this.B)
        }
    };

    function DF(a, b) {
        return qe() === 2 ? yF(a.B, b, {
            Qh: .95,
            lh: .95,
            zIndex: 2147483645,
            Tc: !0,
            bb: !0
        }) : HE(a.B, b, {
            Rd: "min(65vw, 768px)",
            Hd: "",
            Od: !1,
            zIndex: 2147483645,
            Tc: !0,
            qg: !1,
            bb: !0
        })
    }

    function EF(a) {
        ((d, e) => {
            d[e] = d[e] || function() {
                (d[e].q = d[e].q || []).push(arguments)
            };
            d[e].t = (new Date).getTime()
        })(a.B, "_googCsa");
        const b = a.J.map(d => ({
                container: d,
                relatedSearches: 5
            })),
            c = {
                pubId: a.Za,
                styleId: "5134551505",
                hl: a.language,
                fexp: a.l,
                channel: "AutoRsVariant",
                resultsPageBaseUrl: "http://google.com",
                resultsPageQueryParam: "q",
                relatedSearchTargeting: "content",
                relatedSearchResultClickedCallback: a.nb.bind(a),
                relatedSearchUseResultCallback: !0,
                cx: a.Ma
            };
        a.V && (c.adLoadedCallback = a.X.bind(a));
        a.Xa && a.j instanceof
        Array && (c.fexp = a.j.join(","));
        a.B._googCsa("relatedsearch", c, b)
    }

    function FF(a) {
        a.B.addEventListener("message", b => {
            b.origin === "https://www.gstatic.com" && b.data.action === "resize" && (a.i.style.height = `${Math.ceil(b.data.height)+1}px`)
        })
    }
    var GF = class extends R {
        constructor(a, b, c, d, e, f, g, h, k = () => {}) {
            super();
            this.B = a;
            this.J = b;
            this.G = e;
            this.l = f;
            this.Ya = !0;
            this.Pb = h;
            this.Ja = k;
            this.language = d ? .g() || "en";
            this.pa = d ? .i() || "Search results from ${website}";
            this.V = Q(Pv);
            this.Za = c.replace("ca", "partner");
            this.D = new Rl(a.document);
            this.i = cm(this.D, "IFRAME");
            this.Ma = g.g ? g.Ma : "9d449ff4a772956c6";
            this.j = (this.Xa = !0, P(Wq).g().concat(this.l));
            this.C = new TD({
                Oa: this.i,
                Ma: this.Ma,
                jc: "auto-rs-prose",
                Za: this.Za,
                wd: "AutoRsVariant",
                location: a.location,
                language: this.language,
                tc: this.pa,
                Wa: this.j,
                Ya: this.Ya,
                Pb: this.Pb,
                md: !1,
                wg: !1,
                Xa: this.Xa
            });
            this.M = DF(this, this.i);
            Qr(this, this.M)
        }
        init() {
            this.J.length !== 0 && (this.V || uy(1075, () => {
                this.C.init()
            }, this.B), uy(1076, () => {
                const a = cm(this.D, "SCRIPT");
                bd(a, Jd `https://www.google.com/adsense/search/async-ads.js`);
                this.B.document.head.appendChild(a)
            }, this.B), EF(this), Gu(this.G, {
                sts: "ok"
            }), this.Ya && FF(this))
        }
        X(a, b) {
            b ? uy(1075, () => {
                this.C.init()
            }, this.B) : (this.Ja(), Iu(this.G, "pfns"))
        }
        nb(a, b) {
            SD(this.C, a, b);
            (() => {
                if (!this.Ya) {
                    const c = new ResizeObserver(async e => {
                            this.i.height = "0";
                            q(await q(new Promise(f => {
                                this.B.requestAnimationFrame(f)
                            })));
                            this.i.height = e[0].target.scrollHeight.toString()
                        }),
                        d = () => {
                            const e = this.i.contentDocument ? .documentElement;
                            e ? c.observe(e) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
                        };
                    d()
                }
                this.M.show()
            })()
        }
    };
    var HF = class {
        constructor(a, b) {
            this.g = a;
            this.Ma = b
        }
    };
    var IF = class {
        constructor(a, b, c) {
            this.l = a;
            this.i = b;
            this.C = c;
            this.A = "autors-widget";
            this.g = null;
            this.j = new S(null)
        }
        init() {
            var a = this.i.ga;
            a = Ru(a.g.document, a.G || !1);
            const b = this.C.Yc(this.l);
            a.appendChild(b);
            this.A && (a.className = this.A);
            this.g = a;
            qz(this.i, this.g);
            this.j.g(b)
        }
    };
    async function JF(a) {
        q(await q(new Promise(b => {
            setTimeout(() => {
                a.run();
                b()
            })
        })))
    }

    function KF(a) {
        if ((!a.Nd || !LF(a.config, a.ca, a.i)) && MF(z(a.g, Xt, 5), a.i)) {
            var b = a.g.i();
            b = VC(a.B, a.config, a.ca, a.i, {
                ml: !!b ? .l(),
                Nd: a.Nd,
                Zo: !!b ? .g(),
                kl: !!b ? .C()
            });
            b = NF(b, a.B);
            var c = Object.keys(b),
                d = Object.values(b),
                e = Eu(a.g.g() ? .g()) || 0,
                f = OF(a.g),
                g = String(D(a.g, 13));
            if (!z(a.config, Ut, 25) ? .g()) {
                var h = () => {
                    d.forEach(k => {
                        k.g && k.g.parentNode && k.g.parentNode.removeChild(k.g);
                        k.g = null;
                        k.j.g(null)
                    })
                };
                uy(1074, () => {
                    (new GF(a.B, c, a.Va, z(a.g, Xt, 5), a.i, e, f, g, h)).init()
                }, a.B)
            }
        }
    }
    var PF = class {
        constructor(a, b, c, d, e) {
            this.B = a;
            this.config = c;
            this.Va = d;
            this.ca = e;
            this.Nd = !0;
            this.g = pb(z(this.config, Zt, 28));
            this.i = new Ju(a, b, this.g)
        }
        run() {
            try {
                KF(this)
            } catch (a) {
                Iu(this.i, "pfere", a)
            }
        }
    };

    function LF(a, b, c) {
        a = Eu(z(a, Zt, 28) ? .g() ? .g()) || 0;
        const d = P(tx).g(Tv.g, Tv.defaultValue);
        return d && d.includes(a.toString()) ? !1 : (b ? ni(b, 2) : []).length === 0 ? (Iu(c, "pfeu"), !0) : !1
    }

    function MF(a, b) {
        const c = P(tx).g(Sv.g, Sv.defaultValue);
        a = a ? .g() || "";
        return c && c.length !== 0 && !c.includes(a.toString()) ? (Iu(b, "pflna"), !1) : !0
    }

    function NF(a, b) {
        const c = {};
        for (let e = 0; e < a.length; e++) {
            var d = a[e];
            const f = "autors-container-" + e.toString(),
                g = b.document.createElement("div");
            g.setAttribute("id", f);
            d = new IF(b, d, new Ou(g));
            d.init();
            c[f] = d
        }
        return c
    }

    function OF(a) {
        const b = B(a, 11) || !1;
        a = D(a, 8) || "";
        return new HF(b, a)
    };
    var QF = (a, b) => {
        const c = [];
        z(a, hu, 18) && c.push(2);
        b.ca && c.push(0);
        if (b = z(a, Zt, 28)) b = z(a, Zt, 28), b = F(b, 1) == 1;
        b && c.push(1);
        if (b = z(a, ku, 34)) a = z(a, ku, 34), b = B(a, 3);
        b && c.push(7);
        return c
    };
    var RF = a => a.googlefc = a.googlefc || {},
        SF = a => {
            a = a.googlefc = a.googlefc || {};
            return a.__fcusi = a.__fcusi || {}
        },
        TF = a => {
            a = a.googlefc = a.googlefc || {};
            if (!a.getFloatingToolbarTranslatedMessages) return null;
            if (a = a.getFloatingToolbarTranslatedMessages()) {
                var b = new $t;
                b = yi(b, 1, a.defaultFloatingToolbarToggleExpansionText);
                b = yi(b, 2, a.defaultFloatingToolbarTogglePrivacySettings);
                a = yi(b, 3, a.defaultFloatingToolbarDismissPrivacySettings);
                a = wh(a)
            } else a = null;
            return a
        };

    function UF(a, b) {
        b = b.filter(c => z(c, wt, 4) ? .g() === 5 && lg(y(c, 8)) === 1);
        b = Ly(b, a);
        a = sz(b, a);
        a.sort((c, d) => d.ma.g - c.ma.g);
        return a[0] || null
    };

    function VF({
        zg: a,
        Af: b,
        dg: c,
        Ag: d,
        Bf: e,
        eg: f
    }) {
        const g = [];
        for (let n = 0; n < f; n++)
            for (let p = 0; p < c; p++) {
                var h = p,
                    k = c - 1,
                    l = n,
                    m = f - 1;
                g.push({
                    x: a + (k === 0 ? 0 : h / k) * (b - a),
                    y: d + (m === 0 ? 0 : l / m) * (e - d)
                })
            }
        return g
    }

    function WF(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };

    function XF(a, b) {
        var c = VF({
            zg: b.left,
            Af: b.right,
            dg: 10,
            Ag: b.top,
            Bf: b.bottom,
            eg: 10
        });
        b = new Set;
        for (const d of c)(c = YF(a, d)) && b.add(c);
        return b
    }

    function ZF(a, b, c = !1) {
        for (const d of b)
            if ((b = YF(a, d)) && !b.hasAttribute("google-allow-overlap")) {
                if (c) {
                    const e = b.getBoundingClientRect();
                    if (e.width >= a.K.innerWidth && e.height >= a.K.innerHeight) continue
                }
                return b
            }
        return null
    }

    function $F(a, b, c = !1) {
        return ZF(a, b, c) != null
    }

    function aG(a, b, c) {
        if (jm(b, "position") !== "fixed") return null;
        var d = b.getAttribute("class") === "GoogleActiveViewInnerContainer" || mm(b).width <= 1 && mm(b).height <= 1 || a.g.vj && !a.g.vj(b) ? !0 : !1;
        a.g.jh && a.g.jh(b, c, d);
        return d ? null : b
    }

    function YF(a, b) {
        var c = WF(a.K.document, b);
        if (c) {
            var d;
            if (!(d = aG(a, c, b))) a: {
                d = a.K.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    const e = aG(a, c, b);
                    if (e) {
                        d = e;
                        break a
                    }
                }
                d = null
            }
            a = d || null
        } else a = null;
        return a
    }
    var bG = class {
        constructor(a, b = {}) {
            this.K = a;
            this.g = b
        }
    };
    var cG = class {
        constructor(a, b, c) {
            this.position = a;
            this.Xb = b;
            this.Hf = c
        }
    };

    function dG(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    };

    function eG(a, b, c) {
        var d = nr(a);
        d = new cG(b.Ec.Kh(b.Eb), b.Xb + 2 * b.Eb, Math.min(d, b.ge) - b.Ec.Sd() + 2 * b.Eb);
        d = d.position.Yg(a, d.Xb, d.Hf);
        var e = mr(a),
            f = nr(a);
        c = fG(a, new Al(wl(d.top, 0, f - 1), wl(d.right, 0, e - 1), wl(d.bottom, 0, f - 1), wl(d.left, 0, e - 1)), c);
        f = gG(c);
        let g = d.top;
        e = [];
        for (let h = 0; h < f.length; h++) f[h].start > g && e.push(new dG(g, f[h].start)), g = f[h].end;
        g < d.bottom && e.push(new dG(g, d.bottom));
        a = nr(a);
        d = [];
        for (f = e.length - 1; f >= 0; f--) d.push(new dG(a - e[f].end, a - e[f].start));
        a: {
            for (const h of d)
                if (a = h.start + b.Eb, a >
                    b.Ec.Sd() + b.Vf ? a = null : (d = Math.min(h.end - b.Eb, b.ge) - a, a = d < b.ag ? null : {
                        position: b.Ec.ri(a),
                        jd: d
                    }), a) {
                    b = a;
                    break a
                }
            b = null
        }
        return {
            df: b,
            Po: c
        }
    }

    function fG(a, b, c) {
        const d = XF(new bG(a), b);
        c.forEach(e => void d.delete(e));
        return d
    }

    function gG(a) {
        return [...a].map(hG).sort((b, c) => b.start - c.start)
    }

    function hG(a) {
        a = a.getBoundingClientRect();
        return new dG(a.top, a.bottom)
    };

    function iG({
        ha: a,
        Ca: b
    }) {
        return new jG(a, b)
    }
    var jG = class {
        constructor(a, b) {
            this.ha = a;
            this.Ca = b
        }
        Kh(a) {
            return new jG(this.ha - a, this.Ca - a)
        }
        Yg(a, b, c) {
            a = nr(a) - this.ha - c;
            return new Al(a, this.Ca + b, a + c, this.Ca)
        }
        Pg(a) {
            a.bottom = `${this.ha}px`;
            a.left = `${this.Ca}px`;
            a.right = ""
        }
        mh() {
            return 0
        }
        Sd() {
            return this.ha
        }
        ri(a) {
            return new jG(a, this.Ca)
        }
    };

    function kG({
        ha: a,
        Ua: b
    }) {
        return new lG(a, b)
    }
    var lG = class {
        constructor(a, b) {
            this.ha = a;
            this.Ua = b
        }
        Kh(a) {
            return new lG(this.ha - a, this.Ua - a)
        }
        Yg(a, b, c) {
            var d = mr(a);
            a = nr(a) - this.ha - c;
            d = d - this.Ua - b;
            return new Al(a, d + b, a + c, d)
        }
        Pg(a) {
            a.bottom = `${this.ha}px`;
            a.right = `${this.Ua}px`;
            a.left = ""
        }
        mh() {
            return 1
        }
        Sd() {
            return this.ha
        }
        ri(a) {
            return new lG(a, this.Ua)
        }
    };

    function mG(a) {
        var b = {};
        const c = a.Bj,
            d = a.fj,
            e = a.Xi,
            f = a.Wk,
            g = a.Yi;
        a = a.Wi;
        b = b && b.Oc;
        return lD('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"' + (b ? ' nonce="' + X(KD(b)) + '"' : "") + '/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500,700" rel="stylesheet"' + (b ? ' nonce="' + X(KD(b)) + '"' : "") + "><style" + (b ? ' nonce="' + X(KD(b)) + '"' : "") + ">.ft-styless-button {border: none; background: none; user-select: none; cursor: pointer; border-radius: " +
            Z(16) + "px;}.ft-container {position: fixed;}.ft-menu {position: absolute; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); min-height: " + Z(e) + "px;}.ft-menu:not(.ft-multiple-buttons *) {transition: padding 0.25s 0.25s, margin 0.25s 0.25s, border-radius 0.25s 0.25s, background-color 0s 0.5s; padding: 0; margin: " + Z(a) + "px; border-radius: " + Z(16) + "px; background-color: rgba(255, 255, 255, 0);}.ft-multiple-buttons .ft-menu {transition: margin 0.25s, padding 0.25s, border-radius 0.25s 0.25s, background-color 0s; padding: " +
            Z(a) + "px; margin: 0; border-radius: " + Z(16 + a) + "px; background-color: rgba(255, 255, 255, 1);}.ft-left-pos .ft-menu {left: 0;}.ft-right-pos .ft-menu {right: 0;}.ft-container.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}.ft-container:not(.ft-hidden) {transition: opacity 0.25s, bottom 0.5s ease; opacity: 1;}.google-symbols {font-size: 26px; color: #3c4043;}.ft-button-holder {display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0;}.ft-flip-vertically {transform: scaleY(-1);}.ft-expand-toggle {width: " +
            Z(e) + "px; height: " + Z(e) + "px;}.ft-collapsed .ft-expand-icon {transition: transform 0.25s; transform: rotate(180deg);}.ft-expand-icon:not(.ft-collapsed *) {transition: transform 0.25s; transform: rotate(0deg);}.ft-button {position: relative; height: " + Z(e) + "px; margin-bottom: " + Z(g) + "px; transform: margin 0.25s 0.25s;}.ft-button.ft-last-button {margin-bottom: 0;}.ft-button > button {position: relative; height: " + Z(e) + "px; width: " + Z(e) + "px; margin: 0; padding: 0; border: none;}.ft-button > button > * {position: relative;}.ft-button .ft-highlighter {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: " +
            Z(e - 6) + "px; width: " + Z(e - 6) + "px; border-radius: " + Z(e / 2) + "px; background-color: #d2e3fc; opacity: 0; transition: opacity 0.25s;}.ft-button.ft-highlighted .ft-highlighter {opacity: 1;}.ft-button-corner-info {display: none;}.ft-button.ft-show-corner-info .ft-button-corner-info {position: absolute; left: -5px; top: 4px; background: #b3261e; border: 1.5px solid #ffffff; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); border-radius: 100px; color: ffffff; font-family: 'Google Sans Text'; font-style: normal; font-weight: 700; font-size: 11px; line-height: 14px; min-width: 16px; height: 16px; display: flex; flex-direction: row; justify-content: center; align-items: center;}.ft-separator {display: block; width: 100%; height: " +
            Z(f) + "px;}.ft-separator > span {display: block; width: 28px; margin: 0 auto 10px auto; height: 0; border-bottom: 1px solid #dadce0;}.ft-expand-toggle-container {height: " + Z(e) + "px;}.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}:not(.ft-hidden) {transition: opacity 0.25s; opacity: 1;}.ft-collapsed .ft-collapsible, .ft-collapsible.ft-collapsed, .ft-expand-toggle-container.ft-collapsed {transition: opacity 0.25s, margin 0.25s 0.25s, height 0.25s 0.25s, overflow 0.25s 0s, visibility 1s 0s; height: 0; opacity: 0; overflow: hidden; visibility: hidden; margin: 0;}.ft-collapsible:not(.ft-collapsed *):not(.ft-collapsed), .ft-expand-toggle-container:not(.ft-collapsed) {transition: margin 0.25s, height 0.25s, opacity 0.25s 0.25s; opacity: 1;}.ft-symbol-font-load-test {position: fixed; left: -1000px; top: -1000px; font-size: 26px; visibility: hidden;}.ft-reg-bubble {position: absolute; bottom: 0; padding: 10px 10px 0 10px; background: #fff; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); border-radius: " +
            Z(16) + "px; max-width: calc(90vw - " + Z(e * 2) + "px); width: 300px; height: 200px;}.ft-left-pos .ft-reg-bubble {left: " + Z(e + 10 + a) + "px;}.ft-right-pos .ft-reg-bubble {right: " + Z(e + 10 + a) + "px;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-collapsed {transition: width 0.25s ease-in 0.25s, height 0.25s ease-in 0.25s, opacity 0.05s linear 0.45s, overflow 0s 0.25s, visibility 0s 0.5s; width: 0; overflow: hidden; opacity: 0; visibility: hidden;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-no-messages {height: 0 !important;}.ft-reg-bubble:not(.ft-collapsed *):not(.ft-collapsed) {transition: width 0.25s ease-out, height 0.25s ease-out, opacity 0.05s linear;}.ft-reg-bubble-content {display: flex; flex-direction: row; max-width: calc(90vw - " +
            Z(e * 2) + 'px); width: 300px;}.ft-collapsed .ft-reg-bubble-content {transition: opacity 0.25s; opacity: 0;}.ft-reg-bubble-content:not(.ft-collapsed *) {transition: opacity 0.25s 0.25s; opacity: 1;}.ft-reg-message-holder {flex-grow: 1; display: flex; flex-direction: column; height: auto;}.ft-reg-controls {flex-grow: 0; padding-left: 5px;}.ft-reg-bubble-close-icon {font-size: 16px;}.ft-reg-message {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid #dadce0;}.ft-reg-message:last-of-type {border-bottom: none;}.ft-reg-message-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0; text-align: start;}.ft-display-none {display: none;}</style><toolbar id="ft-floating-toolbar" class="ft-container ft-hidden"><div class="ft-menu"><div class="ft-button-holder"></div><div class="ft-separator ft-collapsible ft-collapsed"><span></span></div><div class="ft-bottom-button-holder"></div><div class="ft-expand-toggle-container"><button class="ft-expand-toggle ft-styless-button" aria-controls="ft-floating-toolbar" aria-label="' +
            X(c) + '"><span class="google-symbols ft-expand-icon" aria-hidden="true">expand_more</span></button></div></div><div id="ft-reg-bubble" class="ft-reg-bubble ft-collapsed ft-no-messages"><div class="ft-reg-bubble-content"><div class="ft-reg-message-holder"></div><div class="ft-reg-controls"><button class="ft-reg-bubble-close ft-styless-button" aria-controls="ft-reg-bubble" aria-label="' + X(d) + '"><span class="google-symbols ft-reg-bubble-close-icon" aria-hidden="true">close</span></button></div></div></div></toolbar><span inert class="ft-symbol-font-load-test"><span class="ft-symbol-reference google-symbols" aria-hidden="true">keyboard_double_arrow_right</span><span class="ft-text-reference" aria-hidden="true">keyboard_double_arrow_right</span></span>')
    }

    function nG(a) {
        const b = a.googleIconName,
            c = a.backgroundColorCss,
            d = a.iconColorCss;
        return lD('<div class="ft-button ft-collapsible ft-collapsed ft-last-button"><button class="ft-styless-button" aria-label="' + X(a.ariaLabel) + '" style="background-color: ' + X(Z(c)) + '"><span class="ft-highlighter"></span><span class="google-symbols" style="color: ' + X(Z(d)) + '" aria-hidden="true">' + jD(b) + '</span></button><span class="ft-button-corner-info"></span></div>')
    };
    const oG = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500,700"];

    function pG(a, b) {
        a = new qG(a, b, rG(a, b));
        a.init();
        return a
    }

    function sG() {
        ({
            Lc: a
        } = {
            Lc: 2
        });
        var a;
        return a > 1 ? 50 : 120
    }

    function tG(a, b, c) {
        uG(a) === 0 && b.classList.remove("ft-collapsed");
        vG(b, c);
        Or(a.B);
        b.classList.remove("ft-collapsed");
        wG(a);
        return () => void xG(a, b, c)
    }

    function yG(a) {
        zG(a.i.ja.kd).length === 0 ? (a.l.O ? .Mk(), a.l.g(null), a.i.ja.Gf.g(!1), a.i.ja.zh.g(!1), a.i.ja.Rf.g(!1)) : (a.i.ja.Gf.g(!0), AG(a))
    }

    function BG(a, {
        Ei: b = 0,
        Oo: c = 0
    }) {
        b = Math.max(zG(a.i.ec).length + b, 0);
        c = Math.max(zG(a.i.Db).length + c, 0);
        const d = b + c;
        let e = d * 50;
        b > 0 && c > 0 && (e += 11);
        e += Math.max(0, d - 1) * 10;
        d >= a.j.Lc && (e += 60);
        d > 1 && (e += 10);
        return e
    }

    function uG(a) {
        const b = a.i.Db;
        return zG(a.i.ec).length + zG(b).length
    }

    function wG(a) {
        const b = a.i.Db,
            c = a.i.separator;
        zG(a.i.ec).length > 0 && zG(b).length > 0 ? c.classList.remove("ft-collapsed") : c.classList.add("ft-collapsed");
        uG(a) >= a.j.Lc ? a.i.yh.g(!0) : a.i.yh.g(!1);
        uG(a) > 1 ? a.i.rh.g(!0) : a.i.rh.g(!1);
        uG(a) > 0 ? a.i.isVisible.g(!0) : a.i.isVisible.g(!1);
        CG(a);
        DG(a)
    }

    function xG(a, b, c) {
        b.classList.contains("ft-removing") || (b.classList.add("ft-removing"), b.classList.add("ft-collapsed"), wG(a), a.B.setTimeout(() => {
            c.removeChild(b)
        }, 750))
    }

    function CG(a) {
        const b = zG(a.i.ec).concat(zG(a.i.Db));
        b.forEach(c => {
            c.classList.remove("ft-last-button")
        });
        uG(a) >= a.j.Lc || b[b.length - 1] ? .classList.add("ft-last-button")
    }

    function DG(a) {
        const b = zG(a.i.ec).concat(zG(a.i.Db)).filter(c => !c.classList.contains("ft-reg-button"));
        a.G.g(b.length > 0)
    }

    function EG(a) {
        Br(a.i.ja.kd.children, b => {
            const c = a.i.ja.od;
            xG(a, b, a.i.ja.kd);
            const d = c.get(b);
            c.delete(b);
            d ? .isDismissed.g(!0)
        });
        yG(a)
    }

    function AG(a) {
        if (!a.l.O) {
            var b = FG(a.B, {
                googleIconName: "verified_user",
                ariaLabel: D(a.j.gb, 2),
                orderingIndex: 0,
                onClick: () => {
                    a.i.ja.zh.g(!a.i.ja.isVisible.O);
                    for (const [, c] of a.i.ja.od) c.Ch = !0;
                    a.i.ja.Rf.g(!1)
                },
                backgroundColorCss: "#fff"
            });
            b.Ed.classList.add("ft-reg-button");
            tG(a, b.Ed, a.i.Db);
            ds(b.ck, a.i.ja.isVisible);
            a.l.g({
                To: b,
                Mk: () => void xG(a, b.Ed, a.i.Db)
            })
        }
    }

    function GG(a) {
        var b = a.i.ja.Rf,
            c = b.g;
        a: {
            for ([, d] of a.i.ja.od)
                if (a = d, a.showUnlessUserInControl && !a.Ch) {
                    var d = !0;
                    break a
                }
            d = !1
        }
        c.call(b, d)
    }

    function HG(a) {
        a.i.ja.ej.listen(() => {
            EG(a)
        })
    }
    var qG = class extends R {
        constructor(a, b, c) {
            super();
            this.B = a;
            this.j = b;
            this.i = c;
            this.l = new S(null);
            this.G = new S(!1)
        }
        addButton(a) {
            a = FG(this.B, a);
            return tG(this, a.Ed, this.i.ec)
        }
        addRegulatoryMessage(a) {
            const b = this.i.ja.kd,
                c = IG(this.B, a);
            vG(c.Yf, b);
            this.i.ja.od.set(c.Yf, c);
            yG(this);
            return {
                showUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !0;
                    GG(this)
                },
                hideUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !1;
                    GG(this)
                },
                isDismissed: fs(c.isDismissed),
                removeCallback: () => {
                    var d = c.Yf;
                    const e = this.i.ja.kd;
                    d.parentNode === e && e.removeChild(d);
                    this.i.ja.od.delete(d);
                    yG(this)
                }
            }
        }
        J() {
            return Yr(this.l.map(a => a != null))
        }
        D() {
            return Yr(this.G)
        }
        C() {
            return [this.i.container]
        }
        g() {
            const a = this.i.xb.wb;
            a.parentNode ? .removeChild(a);
            super.g()
        }
        init() {
            Os(this.B, oG);
            ds(this.i.ul, this.j.Jb);
            this.B.document.body.appendChild(this.i.xb.wb);
            HG(this)
        }
    };

    function rG(a, b) {
        const c = vE(a),
            d = c.shadowRoot;
        d.appendChild(dm(new Rl(a.document), gD(mG({
            Bj: D(b.gb, 1),
            fj: D(b.gb, 3),
            Xi: 50,
            Wk: 11,
            Yi: 10,
            Wi: 5
        }))));
        const e = uE("ft-container", d),
            f = uE("ft-expand-toggle", d),
            g = uE("ft-expand-toggle-container", d),
            h = new S(null);
        h.i(p => {
            e.style.zIndex = String(p ? ? 2147483647)
        });
        const k = new S(!0);
        as(k, !0, () => {
            e.classList.remove("ft-collapsed");
            f.setAttribute("aria-expanded", "true")
        });
        as(k, !1, () => {
            e.classList.add("ft-collapsed");
            f.setAttribute("aria-expanded", "false")
        });
        f.addEventListener("click",
            () => {
                k.g(!k.O)
            });
        const l = new S(!1);
        as(l, !0, () => {
            g.classList.remove("ft-collapsed");
            e.classList.add("ft-toolbar-collapsible")
        });
        as(l, !1, () => {
            g.classList.add("ft-collapsed");
            e.classList.remove("ft-toolbar-collapsible");
            k.g(!0)
        });
        const m = new S(!1);
        as(m, !0, () => {
            e.classList.add("ft-multiple-buttons")
        });
        as(m, !1, () => {
            e.classList.remove("ft-multiple-buttons")
        });
        b.position.i(p => {
            if (p) {
                p.Pg(e.style);
                p = p.mh();
                switch (p) {
                    case 0:
                        e.classList.add("ft-left-pos");
                        e.classList.remove("ft-right-pos");
                        break;
                    case 1:
                        e.classList.add("ft-right-pos");
                        e.classList.remove("ft-left-pos");
                        break;
                    default:
                        throw Error(`Unknown HorizontalAnchoring: ${p}`);
                }
                Or(a)
            }
        });
        const n = new S(!1);
        b = Xr(JG(a, d), n, b.position.map(p => p !== null));
        as(b, !0, () => {
            e.classList.remove("ft-hidden")
        });
        as(b, !1, () => {
            e.classList.add("ft-hidden")
        });
        b = KG(a, uE("ft-reg-bubble", d));
        return {
            container: e,
            ec: uE("ft-button-holder", d),
            Db: uE("ft-bottom-button-holder", d),
            separator: uE("ft-separator", d),
            xb: c,
            ul: h,
            Wo: k,
            yh: l,
            rh: m,
            isVisible: n,
            ja: b
        }
    }

    function KG(a, b) {
        const c = new S(!1),
            d = new S(!1),
            e = Zr(c, d);
        as(e, !0, () => {
            b.classList.remove("ft-collapsed")
        });
        as(e, !1, () => {
            b.classList.add("ft-collapsed")
        });
        const f = new S(!1);
        as(f, !0, () => {
            b.classList.remove("ft-no-messages")
        });
        as(f, !1, () => {
            b.classList.add("ft-no-messages")
        });
        const g = uE("ft-reg-bubble-close", b),
            h = new js;
        g.addEventListener("click", () => {
            is(h)
        });
        const k = uE("ft-reg-message-holder", b);
        Hs(Es(a, k)).i(() => {
            b.style.height = `${k.offsetHeight}px`
        });
        return {
            kd: k,
            zh: c,
            Rf: d,
            isVisible: e,
            Gf: f,
            od: new Map,
            ej: gs(h)
        }
    }

    function FG(a, b) {
        const c = dm(new Rl(a.document), gD(nG({
            googleIconName: b.googleIconName,
            ariaLabel: b.ariaLabel,
            backgroundColorCss: b.backgroundColorCss || "#e2eaf6",
            iconColorCss: b.iconColorCss || "#3c4043"
        })));
        b.buttonExtension ? .styleSheet && c.appendChild(b.buttonExtension.styleSheet);
        if (b.cornerNumber !== void 0) {
            const d = wl(Math.round(b.cornerNumber), 0, 99);
            uE("ft-button-corner-info", c).appendChild(a.document.createTextNode(String(d)));
            c.classList.add("ft-show-corner-info")
        }
        c.orderingIndex = b.orderingIndex;
        b.onClick &&
            tE("BUTTON", c).addEventListener("click", b.onClick);
        a = new S(!1);
        as(a, !0, () => {
            c.classList.add("ft-highlighted")
        });
        as(a, !1, () => {
            c.classList.remove("ft-highlighted")
        });
        return {
            Ed: c,
            ck: a
        }
    }

    function IG(a, b) {
        a = new Rl(a.document);
        var c = lD('<div class="ft-reg-message"><button class="ft-reg-message-button"></button><div class="ft-reg-message-info"></div></div>');
        a = dm(a, gD(c));
        c = uE("ft-reg-message-button", a);
        b.regulatoryMessage.actionButton ? (c.appendChild(b.regulatoryMessage.actionButton.buttonText), c.addEventListener("click", b.regulatoryMessage.actionButton.onClick)) : c.classList.add("ft-display-none");
        c = uE("ft-reg-message-info", a);
        b.regulatoryMessage.informationText ? c.appendChild(b.regulatoryMessage.informationText) :
            c.classList.add("ft-display-none");
        a.orderingIndex = b.orderingIndex;
        return {
            Yf: a,
            showUnlessUserInControl: !1,
            Ch: !1,
            isDismissed: new S(!1)
        }
    }

    function vG(a, b) {
        a: {
            var c = Array.from(b.children);
            for (let d = 0; d < c.length; ++d)
                if (c[d].orderingIndex >= a.orderingIndex) {
                    c = d;
                    break a
                }
            c = c.length
        }
        b.insertBefore(a, b.childNodes[c] || null)
    }

    function zG(a) {
        return Array.from(a.children).filter(b => !b.classList.contains("ft-removing"))
    }

    function JG(a, b) {
        const c = new S(!1),
            d = uE("ft-symbol-font-load-test", b);
        b = uE("ft-symbol-reference", d);
        const e = uE("ft-text-reference", d),
            f = Es(a, b);
        bs(Hs(f).map(g => g.width > 0 && g.width < e.offsetWidth / 2), !0, () => {
            c.g(!0);
            d.parentNode ? .removeChild(d);
            f.dispose()
        });
        return c
    };

    function LG(a) {
        const b = new js,
            c = us(a, 2500, () => void is(b));
        return new MG(a, () => void NG(a, () => void c()), gs(b))
    }

    function OG(a) {
        const b = new MutationObserver(() => {
            a.i()
        });
        b.observe(a.B.document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "style"]
        });
        Rr(a, () => void b.disconnect())
    }

    function PG(a) {
        a.B.addEventListener("resize", a.i);
        Rr(a, () => void a.B.removeEventListener("resize", a.i))
    }
    var MG = class extends R {
        constructor(a, b, c) {
            super();
            this.B = a;
            this.i = b;
            this.l = c;
            this.j = !1
        }
    };

    function NG(a, b) {
        b();
        a.setTimeout(b, 1500)
    };

    function QG(a) {
        return a.g[a.g.length - 1]
    }
    var SG = class {
        constructor() {
            this.j = RG;
            this.g = [];
            this.i = new Set
        }
        add(a) {
            if (this.i.has(a)) return !1;
            const b = fb(this.g, a, this.j);
            this.g.splice(b >= 0 ? b : -b - 1, 0, a);
            this.i.add(a);
            return !0
        }
        first() {
            return this.g[0]
        }
        has(a) {
            return this.i.has(a)
        }
        delete(a) {
            $a(this.g, b => b === a);
            return this.i.delete(a)
        }
        clear() {
            this.i.clear();
            return this.g.splice(0, this.g.length)
        }
        size() {
            return this.g.length
        }
    };

    function TG(a) {
        var b = a.jd.O;
        let c;
        for (; a.j.ij() > b && (c = a.i.first());) {
            var d = a,
                e = c;
            UG(d, e);
            d.g.add(e)
        }
        for (;
            (d = QG(a.g)) && a.j.Pj() <= b;) VG(a, d);
        for (;
            (d = QG(a.g)) && (c = a.i.first()) && d.priority > c.priority;) b = a, e = c, UG(b, e), b.g.add(e), VG(a, d)
    }

    function VG(a, b) {
        a.g.delete(b);
        a.i.add(b) && (b.Eg = a.j.addButton(b.buttonSpec));
        b.isInToolbar.g(!0)
    }

    function UG(a, b) {
        b.Eg && b.Eg();
        b.Eg = void 0;
        a.i.delete(b);
        b.isInToolbar.g(!1)
    }
    var WG = class {
        constructor(a, b) {
            this.jd = a;
            this.j = b;
            this.g = new SG;
            this.i = new SG;
            this.A = 0;
            this.jd.listen(() => void TG(this))
        }
        addButton(a) {
            const b = {
                buttonSpec: a.buttonSpec,
                priority: a.priority,
                Gg: this.A++,
                isInToolbar: new S(!1)
            };
            this.g.add(b);
            TG(this);
            return {
                isInToolbar: fs(Yr(b.isInToolbar)),
                removeCallback: () => {
                    UG(this, b);
                    this.g.delete(b);
                    TG(this)
                }
            }
        }
    };

    function RG(a, b) {
        return a.priority === b.priority ? b.Gg - a.Gg : a.priority - b.priority
    };

    function XG(a) {
        if (!rE(a.B)) {
            if (a.j.O) {
                const b = wr(a.B);
                if (b > a.i + 100 || b < a.i - 100) a.j.g(!1), a.i = pr(a.B)
            }
            a.l && a.B.clearTimeout(a.l);
            a.l = a.B.setTimeout(() => void YG(a), 200)
        }
    }

    function YG(a) {
        if (!rE(a.B)) {
            var b = pr(a.B);
            a.i && a.i > b && (a.i = b);
            b = wr(a.B);
            b >= a.i - 100 && (a.i = Math.max(a.i, b), a.j.g(!0))
        }
    }
    var ZG = class extends R {
        constructor(a) {
            super();
            this.B = a;
            this.j = new S(!1);
            this.i = 0;
            this.l = null;
            this.C = () => void XG(this)
        }
        init() {
            this.B.addEventListener("scroll", this.C);
            this.i = pr(this.B);
            YG(this)
        }
        g() {
            this.B.removeEventListener("scroll", this.C);
            this.j.g(!1);
            super.g()
        }
    };

    function $G(a) {
        if (!a.i) {
            var b = new ZG(a.B);
            b.init();
            a.i = Yr(b.j);
            Qr(a, b)
        }
        return a.i
    }

    function aH(a, b, c) {
        const d = a.j.addRegulatoryMessage(b.messageSpec);
        b.messageSpec.regulatoryMessage.disableFloatingToolbarAutoShow || bH(a, d, c);
        bs(c, !0, () => {
            d.removeCallback()
        })
    }

    function bH(a, b, c) {
        a = $G(a);
        const d = as(a, !0, () => void b.showUnlessUserInControl()),
            e = as(a, !1, () => void b.hideUnlessUserInControl());
        as(Vr(b.isDismissed), !0, () => {
            d();
            e()
        });
        bs(c, !0, () => {
            d();
            e()
        })
    }
    var cH = class extends R {
        constructor(a, b) {
            super();
            this.B = a;
            this.j = b;
            this.i = null
        }
        addRegulatoryMessage(a) {
            const b = new S(!1),
                c = bs($G(this), !0, () => {
                    aH(this, a, b)
                });
            return {
                removeCallback: () => {
                    b.g(!0);
                    c()
                }
            }
        }
    };

    function dH(a, b) {
        a.googFloatingToolbarManager || (a.googFloatingToolbarManager = new eH(a, b));
        return a.googFloatingToolbarManager
    }

    function fH(a) {
        a.i || (a.i = gH(a.B, a.j, a.Jb), Qr(a, a.i.lc), Qr(a, a.i.Wh), hH(a), iH(a, a.i.lc));
        return a.i
    }

    function jH(a) {
        a.Jb.O === null && a.i ? .position.g(kH(a))
    }

    function lH(a) {
        a.B.requestAnimationFrame(() => void jH(a))
    }

    function kH(a) {
        var b = [];
        a.i ? .lc ? .D().l() ? (b.push(() => mH(a)), b.push(() => nH(a))) : (b.push(() => nH(a)), b.push(() => mH(a)));
        a.i ? .lc ? .J() ? .l() && b.push(() => {
            const c = nr(a.B);
            return {
                position: iG({
                    ha: Math.floor(c / 3),
                    Ca: 10
                }),
                jd: 0
            }
        });
        for (const c of b)
            if (b = c()) return b;
        return null
    }

    function hH(a) {
        a.B.googFloatingToolbarManagerAsyncPositionUpdate ? lH(a) : jH(a)
    }

    function iH(a, b) {
        const c = LG(a.B);
        c.j || (OG(c), PG(c), c.j = !0);
        c.l.listen(() => void hH(a));
        Qr(a, c);
        b.J().listen(() => void hH(a));
        b.D().listen(() => void hH(a));
        a.Jb.listen(() => void hH(a))
    }

    function mH(a) {
        var b = a.B;
        const c = nr(a.B);
        return eG(b, {
            Ec: kG({
                ha: 50,
                Ua: 10
            }),
            Vf: Math.floor(c / 3),
            Xb: 60,
            ag: sG(),
            ge: Math.floor(c / 2),
            Eb: 20
        }, [...(a.i ? .lc.C() ? ? []), a.B.document.body]).df
    }

    function nH(a) {
        var b = a.B;
        const c = nr(a.B);
        return eG(b, {
            Ec: iG({
                ha: 50,
                Ca: 10
            }),
            Vf: Math.floor(c / 3),
            Xb: 60,
            ag: sG(),
            ge: Math.floor(c / 2),
            Eb: 40
        }, [...(a.i ? .lc.C() ? ? []), a.B.document.body]).df
    }
    class eH extends R {
        constructor(a, b) {
            super();
            this.B = a;
            this.j = b;
            this.i = null;
            this.Jb = oH(this.B, this)
        }
        addButton(a) {
            return fH(this).uk.addButton(a)
        }
        addRegulatoryMessage(a) {
            return fH(this).Wh.addRegulatoryMessage(a)
        }
    }

    function gH(a, b, c) {
        const d = new S(null),
            e = pG(a, {
                Lc: 2,
                position: d.map(f => f ? .position ? ? null),
                gb: b,
                Jb: c
            });
        b = new WG(d.map(f => f ? .jd || 0), {
            addButton: f => e.addButton(f),
            ij: () => BG(e, {}),
            Pj: () => BG(e, {
                Ei: 1
            })
        });
        a = new cH(a, {
            addRegulatoryMessage: f => e.addRegulatoryMessage(f)
        });
        return {
            lc: e,
            position: d,
            uk: b,
            Wh: a
        }
    }

    function oH(a, b) {
        const c = new bE(a),
            d = new S(null),
            e = f => void d.g(f);
        Rr(b, () => {
            aE(c, e)
        });
        c.floatingAdsStacking.maxZIndexListeners.push(e);
        e($D(c));
        return d
    };
    const pH = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500"];

    function qH(a, b, c, d, e) {
        a = new rH(a, b, c, d, e);
        if (a.l) {
            Os(a.B, pH);
            var f = a.B;
            b = a.message;
            c = vE(f);
            e = c.shadowRoot;
            d = e.appendChild;
            f = new Rl(f.document);
            var g = (g = {}, g.Oc);
            g = lD('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"' + (g ? ' nonce="' + X(KD(g)) + '"' : "") + '/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500" rel="stylesheet"' + (g ? ' nonce="' + X(KD(g)) + '"' : "") + "><style" + (g ? ' nonce="' + X(KD(g)) + '"' :
                "") + '>.ipr-container {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; color: #000; border-top: 2px solid rgb(236, 237, 237); border-bottom: 2px solid rgb(236, 237, 237); background-color: #fff; padding: 5px; margin: 5px 0; text-align: center;}.ipr-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ipr-display-none {display: none;}</style><div class="ipr-container"><button class="ipr-button"></button><div class="ipr-info"></div></div>');
            d.call(e, dm(f, gD(g)));
            d = uE("ipr-container", e);
            e = uE("ipr-button", d);
            b.actionButton ? (e.appendChild(b.actionButton.buttonText), e.addEventListener("click", b.actionButton.onClick)) : e.classList.add("ipr-display-none");
            d = uE("ipr-info", d);
            b.informationText ? d.appendChild(b.informationText) : d.classList.add("ipr-display-none");
            a.i = c.wb;
            qz(a.l, a.i);
            a.j && a.j(Mo(1));
            sH(a)
        } else tH(a);
        return a
    }

    function sH(a) {
        const b = new Rs(a.B);
        b.init(2E3);
        Qr(a, b);
        Ps(b, () => {
            uH(a);
            tH(a);
            b.dispose()
        })
    }

    function tH(a) {
        const b = dH(a.B, a.C).addRegulatoryMessage({
            messageSpec: {
                regulatoryMessage: a.message,
                orderingIndex: 0
            }
        });
        Rr(a, () => void b.removeCallback());
        a.j && a.j(Mo(2))
    }

    function uH(a) {
        a.i && (a.i.parentNode ? .removeChild(a.i), a.i = null)
    }
    var rH = class extends R {
        constructor(a, b, c, d, e) {
            super();
            this.B = a;
            this.l = b;
            this.message = c;
            this.C = d;
            this.j = e;
            this.i = null
        }
        g() {
            uH(this);
            super.g()
        }
    };
    var wH = (a, b, c, d) => vH(a, b, c, d);

    function vH(a, b, c, d) {
        const e = qH(a, UF(a, d), {
            actionButton: {
                buttonText: a.document.createTextNode(b),
                onClick: c
            }
        }, xH(a));
        return () => e.dispose()
    }

    function xH(a) {
        if (a = TF(a)) return a;
        VB(1234, Error("No messages"));
        return Hi(new $t)
    };

    function yH(a, b) {
        b && (a.g = wH(a.i, b.localizedDnsText, () => zH(a, b), a.A))
    }

    function AH(a) {
        const b = RF(a.i);
        b.callbackQueue = b.callbackQueue || [];
        SF(a.i).overrideDnsLink = !0;
        b.callbackQueue.push({
            INITIAL_US_STATES_DATA_READY: c => yH(a, c)
        })
    }

    function zH(a, b) {
        cE(a.j);
        b.openConfirmationDialog(c => {
            c && a.g && (a.g(), a.g = null);
            dE(a.j)
        })
    }
    var BH = class {
        constructor(a, b, c) {
            this.i = a;
            this.j = XD(b, 2147483643);
            this.A = c;
            this.g = null
        }
    };

    function CH(a) {
        DH(a.j, b => {
            var c = a.i,
                d = b.revocationText,
                e = b.attestationText,
                f = b.showRevocationMessage;
            b = UF(c, a.A);
            d = {
                actionButton: {
                    buttonText: c.document.createTextNode(d),
                    onClick: f
                },
                informationText: c.document.createTextNode(e)
            };
            e = TF(c);
            e || (VB(1233, Error("No messages")), e = Hi(new $t));
            qH(c, b, d, e)
        }, () => {
            dE(a.g);
            EH(a)
        })
    }

    function FH(a) {
        cE(a.g);
        CH(a)
    }

    function EH(a) {
        a.i.__tcfapi ? a.i.__tcfapi("addEventListener", 2, (b, c) => {
            c && b.eventStatus == "cmpuishown" ? cE(a.g) : dE(a.g)
        }) : VB(1250, Error("No TCF API function"))
    }
    var GH = class {
        constructor(a, b, c, d) {
            this.i = a;
            this.g = XD(b, 2147483643);
            this.A = c;
            this.j = d
        }
    };
    var HH = a => {
            if (!a || lg(y(a, 1)) == null) return !1;
            a = F(a, 1);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoConsentUiStatus: " + a);
            }
        },
        IH = a => {
            if (!a || lg(y(a, 3)) == null) return !1;
            a = F(a, 3);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + a);
            }
        },
        JH = a => a ? B(a, 5) === !0 : !1;

    function KH(a) {
        let b = a.location.href;
        if (a === a.top) return {
            url: b,
            Tf: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && b.indexOf(a) === -1 && (c = !1, b = a);
        return {
            url: b,
            Tf: c
        }
    };

    function LH(a, b) {
        Ud(a, (c, d) => {
            b[d] = c
        })
    }

    function MH(a) {
        if (a === a.top) return 0;
        for (let b = a; b && b !== b.top && Md(b); b = b.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function NH() {
        if (OH) return OH;
        var a = Ol() || window;
        const b = a.google_persistent_state_async;
        return b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? OH = b : a.google_persistent_state_async = OH = new PH
    }

    function QH(a, b, c) {
        b = RH[b] || `google_ps_${b}`;
        a = a.S;
        const d = a[b];
        return d === void 0 ? (a[b] = c(), a[b]) : d
    }

    function SH(a, b, c) {
        return QH(a, b, () => c)
    }

    function TH(a, b, c) {
        return a.S[RH[b] || `google_ps_${b}`] = c
    }

    function UH(a, b) {
        return TH(a, b, SH(a, b, 0) + 1)
    }

    function VH() {
        var a = NH();
        return SH(a, 20, {})
    }

    function WH() {
        var a = NH();
        const b = SH(a, 41, !1);
        b || TH(a, 41, !0);
        return !b
    }

    function XH() {
        var a = NH();
        return SH(a, 26)
    }

    function YH() {
        var a = NH();
        return SH(a, 28, [])
    }
    var PH = class {
            constructor() {
                this.S = {}
            }
        },
        OH = null;
    const RH = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function ZH(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function $H(a, b) {
        a = ZH(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };

    function Rq(a, b) {
        a.i.size > 0 || aI(a);
        const c = a.i.get(0);
        c ? c.push(b) : a.i.set(0, [b])
    }

    function bI(a, b, c, d) {
        xk(b, c, d);
        Rr(a, () => yk(b, c, d))
    }

    function cI(a, b) {
        a.j !== 1 && (a.j = 1, a.i.size > 0 && dI(a, b))
    }

    function aI(a) {
        a.B.document.visibilityState ? bI(a, a.B.document, "visibilitychange", b => {
            a.B.document.visibilityState === "hidden" && cI(a, b);
            a.B.document.visibilityState === "visible" && (a.j = 0)
        }) : "onpagehide" in a.B ? (bI(a, a.B, "pagehide", b => {
            cI(a, b)
        }), bI(a, a.B, "pageshow", () => {
            a.j = 0
        })) : bI(a, a.B, "beforeunload", b => {
            cI(a, b)
        })
    }

    function dI(a, b) {
        for (let c = 9; c >= 0; c--) a.i.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var eI = class extends R {
        constructor(a) {
            super();
            this.B = a;
            this.j = 0;
            this.i = new Map
        }
    };
    async function fI(a, b) {
        var c = 10;
        return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function gI(a) {
        const b = a.g.pc;
        return b !== null && b !== 0 ? b : a.g.pc = Be(a.B)
    }

    function hI(a) {
        var b = a.g.wpc;
        if (b === null || b === "") b = a.g, a = a.B, a = a.google_ad_client ? String(a.google_ad_client) : ZH(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client") ? ? "", b = b.wpc = a;
        return b
    }

    function iI(a, b) {
        var c = new Cp;
        var d = gI(a);
        c = xi(c, 1, d);
        d = hI(a);
        c = zi(c, 2, d);
        c = Bp(c, a.g.sd);
        return xi(c, 7, Math.round(b || a.B.performance.now()))
    }

    function jI(a, b, c) {
        b(a.I.ne.Je.zd).Ga(c)
    }

    function kI(a, b, c) {
        b(a.I.ne.Je.zd).nd(c)
    }
    async function lI(a) {
        q(await q(fI(a.B, () => !(!gI(a) || !hI(a)))))
    }

    function mI() {
        var a = P(nI);
        a.i && (a.g.tar += 1)
    }

    function oI(a) {
        var b = P(nI);
        if (b.i) {
            var c = b.A;
            a(c);
            b.g.cc = jh(c)
        }
    }
    async function pI(a, b, c) {
        if (a.i && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.B.performance.now();
            q(await q(lI(a)));
            var e = a.I,
                f = e.Rb;
            a = iI(a, d);
            d = new Ao;
            b = G(d, 1, b);
            c = Sh(b, 2, c, mg);
            c = ci(a, 9, Dp, c);
            f.call(e, c)
        }
    }
    async function qI(a, b) {
        q(await q(lI(a)));
        var c = iI(a);
        b = ci(c, 5, Dp, b);
        a.i && !a.g.le.includes(2) && (a.g.le.push(2), a.I.Rb(b))
    }
    async function rI(a, b, c) {
        q(await q(lI(a)));
        var d = a.I,
            e = d.Rb;
        a = Bp(iI(a, c), 1);
        b = ci(a, 6, Dp, b);
        e.call(d, b)
    }
    async function sI(a, b, c) {
        q(await q(lI(a)));
        jI(a, d => b(d.ei), c)
    }
    async function tI(a, b, c) {
        q(await q(lI(a)));
        kI(a, d => b(d.ei), c)
    }
    async function uI(a, b) {
        q(await q(lI(a)));
        var c = a.I,
            d = c.Rb;
        a = Bp(iI(a), 1);
        b = ci(a, 13, Dp, b);
        d.call(c, b)
    }
    async function vI(a, b) {
        if (a.i) {
            q(await q(lI(a)));
            var c = a.I,
                d = c.Rb;
            a = iI(a);
            b = ci(a, 11, Dp, b);
            d.call(c, b)
        }
    }
    async function wI(a, b) {
        q(await q(lI(a)));
        var c = a.I,
            d = c.Rb;
        a = Bp(iI(a), 1);
        b = ci(a, 16, Dp, b);
        d.call(c, b)
    }
    var nI = class {
        constructor(a, b) {
            this.B = Ol() || window;
            this.j = b ? ? new eI(this.B);
            this.I = a ? ? new Tq(Qp(), 100, 100, !0, this.j);
            this.g = QH(NH(), 33, () => {
                const c = W(gv);
                return {
                    sd: c,
                    ssp: c > 0 && Td() < 1 / c,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null,
                    tar: 0,
                    cc: null
                }
            })
        }
        get i() {
            return this.g.ssp
        }
        get ic() {
            return this.g.cu
        }
        set ic(a) {
            this.g.cu = a
        }
        get A() {
            return RB(1227, () => Ii(Bo, kh(this.g.cc || []))) || new Bo
        }
    };
    var xI = class {
        constructor(a, b, c, d, e) {
            this.i = a;
            this.j = b;
            this.g = c;
            this.l = d;
            this.A = e || null
        }
        run() {
            if (this.i.adsbygoogle_ama_fc_has_run !== !0) {
                var a = HH(this.g),
                    b = IH(this.g),
                    c = !1;
                a && (FH(new GH(this.i, this.l, this.A || ai(this.g, gu, 4, Jh()), this.j)), c = !0);
                b && (AH(new BH(this.i, this.l, this.A || ai(this.g, gu, 4, Jh()))), c = !0);
                oI(d => {
                    d = ui(d, 9, !0);
                    d = ui(d, 10, a);
                    ui(d, 11, b)
                });
                JH(this.g) && (c = !0);
                c && (this.j.start(!0), this.i.adsbygoogle_ama_fc_has_run = !0)
            }
        }
    };

    function yI(a, b, c, d, e, f) {
        try {
            const g = a.g,
                h = Rd("SCRIPT", g);
            h.async = !0;
            bd(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", () => {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", () => {
                c > 0 ? yI(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (g) {
            f()
        }
    }

    function zI(a, b, c = () => {}, d = () => {}) {
        yI(Ql(a), b, 0, !1, c, d)
    };

    function AI(a = null) {
        a = a || r;
        return a.googlefc || (a.googlefc = {})
    };
    xc(dr).map(a => Number(a));
    xc(er).map(a => Number(a));
    const BI = r.URL;

    function CI(a) {
        const b = c => encodeURIComponent(c).replace(/[!()~']|(%20)/g, d => ({
            "!": "%21",
            "(": "%28",
            ")": "%29",
            "%20": "+",
            "'": "%27",
            "~": "%7E"
        })[d]);
        return Array.from(a, c => b(c[0]) + "=" + b(c[1])).join("&")
    };

    function DI(a) {
        var b = (new BI(a.location.href)).searchParams;
        a = b.get("fcconsent");
        b = b.get("fc");
        return b === "alwaysshow" ? b : a === "alwaysshow" ? a : null
    }

    function EI(a) {
        const b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = (new BI(a.location.href)).searchParams.get("fctype")) && b.indexOf(a) !== -1 ? a : null
    }

    function FI(a) {
        var b = new BI(a),
            c = {
                search: "",
                hash: ""
            };
        a = {};
        b && (a.protocol = b.protocol, a.username = b.username, a.password = b.password, a.hostname = b.hostname, a.port = b.port, a.pathname = b.pathname, a.search = b.search, a.hash = b.hash);
        Object.assign(a, c);
        if (a.port && a.port[0] === ":") throw Error("port should not start with ':'");
        a.hash && a.hash[0] != "#" && (a.hash = "#" + a.hash);
        c.search ? c.search[0] != "?" && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + CI(c.searchParams), a.searchParams = void 0);
        b = "";
        a.protocol && (b += a.protocol +
            "//");
        c = a.username;
        var d = a.password;
        b = b + (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") + (a.hostname || "");
        a.port && (b += ":" + a.port);
        b += a.pathname || "";
        b += a.search || "";
        b += a.hash || "";
        a = (new BI(b)).toString();
        a.charAt(a.length - 1) === "/" && (a = a.substring(0, a.length - 1));
        return a.toString().length <= 1E3 ? a : null
    };

    function GI(a, b) {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Rd("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var HI = tk(class extends H {});

    function II(a) {
        if (a.i) return a.i;
        a.M && a.M(a.j) ? a.i = a.j : a.i = pe(a.j, a.V);
        return a.i ? ? null
    }

    function JI(a) {
        a.l || (a.l = b => {
            try {
                var c = a.J ? a.J(b) : void 0;
                if (c) {
                    var d = c.jg,
                        e = a.G.get(d);
                    e && (e.Fk || a.G.delete(d), e.Ac ? .(e.mj, c.payload))
                }
            } catch (f) {}
        }, xk(a.j, "message", a.l))
    }

    function KI(a, b, c) {
        if (II(a))
            if (a.i === a.j)(b = a.D.get(b)) && b(a.i, c);
            else {
                var d = a.C.get(b);
                if (d && d.hd) {
                    JI(a);
                    var e = ++a.X;
                    a.G.set(e, {
                        Ac: d.Ac,
                        mj: d.ce(c),
                        Fk: b === "addEventListener"
                    });
                    a.i.postMessage(d.hd(c, e), "*")
                }
            }
    }
    var LI = class extends R {
        constructor(a, b, c, d) {
            super();
            this.V = b;
            this.M = c;
            this.J = d;
            this.D = new Map;
            this.X = 0;
            this.C = new Map;
            this.G = new Map;
            this.l = void 0;
            this.j = a
        }
        g() {
            delete this.i;
            this.D.clear();
            this.C.clear();
            this.G.clear();
            this.l && (yk(this.j, "message", this.l), delete this.l);
            delete this.j;
            delete this.J;
            super.g()
        }
    };
    const MI = (a, b) => {
            const c = {
                cb: d => {
                    d = HI(d);
                    b.pb({
                        Nc: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        NI = {
            ce: a => a.pb,
            hd: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            Ac: (a, b) => {
                a({
                    Nc: b
                })
            }
        };

    function OI(a) {
        a = HI(a.data.__fciReturn);
        return {
            payload: a,
            jg: Fu(ji(a, 1))
        }
    }

    function PI(a, b = !1) {
        if (b) return !1;
        a.j || (a.i = !!II(a.caller), a.j = !0);
        return a.i
    }

    function QI(a) {
        return new Promise(b => {
            PI(a) && KI(a.caller, "getDataWithCallback", {
                command: "loaded",
                pb: c => {
                    b(c.Nc)
                }
            })
        })
    }

    function RI(a, b) {
        PI(a) && KI(a.caller, "getDataWithCallback", {
            command: "prov",
            spsp: Gi(b),
            pb: () => {}
        })
    }
    var SI = class extends R {
        constructor(a) {
            super();
            this.i = this.j = !1;
            this.caller = new LI(a, "googlefcPresent", void 0, OI);
            this.caller.D.set("getDataWithCallback", MI);
            this.caller.C.set("getDataWithCallback", NI)
        }
        g() {
            this.caller.dispose();
            super.g()
        }
    };

    function TI(a) {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    }

    function UI(a) {
        if (a.gdprApplies === !1) return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = TI(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (Zk({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    }

    function VI(a, b = {}) {
        return UI(a) ? a.gdprApplies === !1 ? !0 : a.tcString === "tcunavailable" ? !b.idpcApplies : (b.idpcApplies || a.gdprApplies !== void 0 || b.Uo) && (b.idpcApplies || typeof a.tcString === "string" && a.tcString.length) ? WI(a, "1", 0) : !0 : !1
    }

    function WI(a, b, c) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var d = a.publisher.restrictions[b];
                if (d !== void 0) {
                    d = d["755"];
                    break a
                }
            }
            d = void 0
        }
        if (d === 0) return !1;
        let e = c;c === 2 ? (e = 0, d === 2 && (e = 1)) : c === 3 && (e = 1, d === 1 && (e = 0));
        if (e === 0) a = a.purpose && a.vendor ? (c = XI(a.vendor.consents, "755")) && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : c && XI(a.purpose.consents, b) : !0;
        else {
            var f;
            e === 1 ? f = a.purpose && a.vendor ? XI(a.purpose.legitimateInterests, b) && XI(a.vendor.legitimateInterests, "755") : !0 : f = !0;
            a = f
        }
        return a
    }

    function XI(a, b) {
        return !(!a || !a[b])
    }

    function YI(a, b, c) {
        return a.gdprApplies === !1 ? !0 : b.every(d => WI(a, d, c))
    }

    function ZI(a) {
        if (a.i) return a.i;
        a.i = pe(a.j, "__tcfapiLocator");
        return a.i
    }

    function $I(a) {
        return typeof a.j.__tcfapi === "function" || ZI(a) != null
    }

    function aJ(a, b, c, d) {
        c || (c = () => {});
        var e = a.j;
        typeof e.__tcfapi === "function" ? (a = e.__tcfapi, a(b, 2, c, d)) : ZI(a) ? (bJ(a), e = ++a.J, a.D[e] = c, a.i && a.i.postMessage({
            __tcfapiCall: {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }
        }, "*")) : c({}, !1)
    }

    function cJ(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.C
        };
        const d = oc(() => b(c));
        let e = 0;
        a.G !== -1 && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.G));
        aJ(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = TI(c), c.internalBlockOnErrors = a.C, UI(c) ? (c.internalErrorState !== 0 && (c.tcString = "tcunavailable"), aJ(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : (c.cmpStatus === "error" || c.internalErrorState !== 0) && (f = e) && clearTimeout(f))
        })
    }

    function bJ(a) {
        if (!a.l) {
            var b = c => {
                try {
                    var d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data).__tcfapiReturn;
                    a.D[d.callId](d.returnValue, d.success)
                } catch (e) {}
            };
            a.l = b;
            xk(a.j, "message", b)
        }
    }
    var dJ = class extends R {
        constructor(a, b = {}) {
            super();
            this.i = null;
            this.D = {};
            this.J = 0;
            this.l = null;
            this.j = a;
            this.G = b.timeoutMs ? ? 500;
            this.C = b.Ti ? ? !1
        }
        g() {
            this.D = {};
            this.l && (yk(this.j, "message", this.l), delete this.l);
            delete this.D;
            delete this.j;
            delete this.i;
            super.g()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.C
            };
            const c = oc(() => a(b));
            let d = 0;
            this.G !== -1 && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.G));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState =
                    TI(b), b.internalBlockOnErrors = this.C, g && b.internalErrorState === 0 || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                aJ(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && aJ(this, "removeEventListener", null, a.listenerId)
        }
    };

    function DH(a, b, c) {
        const d = AI(a.B);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = AI(a.B),
                    f = new dJ(a.B);
                $I(f) && cJ(f, g => {
                    g.cmpId === 300 && g.tcString && g.tcString !== "tcunavailable" && g.gdprApplies && b({
                        revocationText: (0, e.getDefaultConsentRevocationText)(),
                        closeText: (0, e.getDefaultConsentRevocationCloseText)(),
                        attestationText: (0, e.getDefaultConsentRevocationAttestationText)(),
                        showRevocationMessage: () => {
                            (0, e.showRevocationMessage)()
                        }
                    })
                });
                c()
            }
        })
    }

    function eJ(a, b = !1, c) {
        const d = {};
        try {
            const f = DI(a.B),
                g = EI(a.B);
            d.fc = f;
            d.fctype = g
        } catch (f) {}
        let e;
        try {
            e = FI(a.B.location.href)
        } catch (f) {}
        b && e && (d.href = e);
        b = fJ(a.g, d);
        zI(a.B, b, () => {}, () => {});
        c && RI(new SI(a.B), c)
    }
    var gJ = class {
        constructor(a, b) {
            this.B = a;
            this.g = b
        }
        start(a = !1, b) {
            if (this.B === this.B.top) try {
                GI(this.B, "googlefcPresent"), eJ(this, a, b)
            } catch (c) {}
        }
    };

    function fJ(a, b) {
        a = Jd `https://fundingchoicesmessages.google.com/i/${a}`;
        return Kd(a, { ...b,
            ers: 2
        })
    };
    const hJ = new Set(["ARTICLE", "SECTION"]);
    var iJ = class {
        constructor(a) {
            this.g = a
        }
    };

    function jJ(a, b) {
        return Array.from(b.classList).map(c => `${a}=${c}`)
    }

    function kJ(a) {
        return a.classList.length > 0
    }

    function lJ(a) {
        return hJ.has(a.tagName)
    };
    var mJ = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function nJ(a) {
        return ra(a) && a.nodeType == 1 && a.tagName == "FIGURE" ? a : (a = a.parentNode) ? nJ(a) : null
    };
    var oJ = a => {
        var b = a.src;
        const c = a.getAttribute("data-src") || a.getAttribute("data-lazy-src");
        (b && b.startsWith("data:") && c ? c : b || c) ? (a.getAttribute("srcset"), b = (b = nJ(a)) ? (b = b.getElementsByTagName("figcaption")[0]) ? b.textContent : null : null, a = new mJ(a, b || a.getAttribute("alt") || null)) : a = null;
        return a
    };

    function pJ(a) {
        return a.map
    }
    var qJ = class {
        constructor() {
            this.map = new Map
        }
        clear() {
            this.map.clear()
        }
        delete(a, b) {
            const c = this.map.get(a);
            return c ? (b = c.delete(b), c.size === 0 && this.map.delete(a), b) : !1
        }
        get(a) {
            return [...(this.map.get(a) ? ? [])]
        }
        keys() {
            return this.map.keys()
        }
        add(a, b) {
            let c = this.map.get(a);
            c || this.map.set(a, c = new Set);
            c.add(b)
        }
        get size() {
            let a = 0;
            for (const b of this.map.values()) a += b.size;
            return a
        }
        values() {
            const a = this.map;
            return function() {
                return function*() {
                    for (const b of a.values()) q(yield* b)
                }()
            }()
        }[Symbol.iterator]() {
            const a = this.map;
            return function() {
                return function*() {
                    for (const [b, c] of a) {
                        const d = b,
                            e = c;
                        for (const f of e) q(yield [d, f])
                    }
                }()
            }()
        }
    };

    function rJ(a) {
        return [a[0],
            [...a[1]]
        ]
    };

    function sJ(a) {
        return Array.from(pJ(tJ(a)).values()).filter(b => b.size >= 3).map(b => [...b])
    }

    function uJ(a, b) {
        return b.every(c => {
            var d = a.g.getBoundingClientRect(c.g);
            if (d = d.height >= 50 && d.width >= a.l) {
                var e = a.g.getBoundingClientRect(c.g);
                d = a.A;
                e = new dG(e.left, e.right);
                d = Math.max(d.start, e.start) <= Math.min(d.end, e.end)
            }
            return d && Lr(a.j, {
                yb: c.g,
                qb: vJ,
                Zb: !0
            }) === null
        })
    }

    function wJ(a) {
        return sJ(a).sort(xJ).find(b => uJ(a, b)) || []
    }

    function tJ(a) {
        return yJ(Array.from(a.B.document.getElementsByTagName("IMG")).map(oJ).filter(mt), b => {
            var c = [...jJ("CLASS_NAME", b.g)],
                d = b.g.parentElement;
            d = [...(d ? jJ("PARENT_CLASS_NAME", d) : [])];
            var e = b.g.parentElement ? .parentElement;
            e = [...(e ? jJ("GRANDPARENT_CLASS_NAME", e) : [])];
            var f = (f = Lr(a.i.g, {
                yb: b.g,
                qb: kJ
            })) ? jJ("NEAREST_ANCESTOR_CLASS_NAME", f) : [];
            return [...c, ...d, ...e, ...f, ...(b.i ? ["HAS_CAPTION=true"] : []), ...(Lr(a.i.g, {
                yb: b.g,
                qb: lJ
            }) ? ["ARTICLE_LIKE_ANCESTOR=true"] : [])]
        })
    }
    var zJ = class {
        constructor(a, b, c, d, e) {
            var f = new Bs;
            this.B = a;
            this.A = b;
            this.l = c;
            this.g = f;
            this.j = d;
            this.i = e
        }
    };

    function yJ(a, b) {
        const c = new qJ;
        for (const d of a)
            for (const e of b(d)) c.add(e, d);
        return c
    }

    function vJ(a) {
        return a.tagName === "A" && a.hasAttribute("href")
    }

    function xJ(a, b) {
        return b.length - a.length
    };

    function AJ(a) {
        const b = a.l.parentNode;
        if (!b) throw Error("Image not in the DOM");
        const c = BJ(a.j),
            d = CJ(a.j);
        c.appendChild(d);
        b.insertBefore(c, a.l.nextSibling);
        a.C.i().i(e => {
            var f = a.j;
            const g = d.getBoundingClientRect(),
                h = g.top - e.top,
                k = g.left - e.left,
                l = g.width - e.width;
            e = g.height - e.height;
            Math.abs(h) < 1 && Math.abs(k) < 1 && Math.abs(l) < 1 && Math.abs(e) < 1 || (f = f.getComputedStyle(d), u(d, {
                top: parseInt(f.top, 10) - h + "px",
                left: parseInt(f.left, 10) - k + "px",
                width: parseInt(f.width, 10) - l + "px",
                height: parseInt(f.height, 10) - e + "px"
            }))
        });
        return d
    }

    function DJ(a) {
        a.i || (a.i = AJ(a));
        return a.i
    }
    var EJ = class extends R {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.l = b;
            this.C = c;
            this.i = null
        }
        g() {
            if (this.i) {
                var a = this.i;
                const b = a.parentNode;
                b && b.removeChild(a);
                this.i = null
            }
            super.g()
        }
    };

    function CJ(a) {
        const b = a.document.createElement("div");
        Lu(a, b);
        u(b, {
            position: "absolute",
            left: "0",
            top: "0",
            width: "0",
            height: "0",
            "pointer-events": "none"
        });
        return b
    }

    function BJ(a) {
        const b = a.document.createElement("div");
        Lu(a, b);
        u(b, {
            position: "relative",
            width: "0",
            height: "0"
        });
        return b
    };

    function FJ(a) {
        const b = new S(a.dataset.adStatus || null);
        (new MutationObserver(() => {
            b.g(a.dataset.adStatus || null)
        })).observe(a, {
            attributes: !0
        });
        return Yr(b)
    };
    const GJ = ["Google Material Icons", "Roboto"];

    function HJ({
        B: a,
        xa: b,
        Rj: c,
        Va: d,
        gb: e,
        U: f
    }) {
        const g = new Ds(a, c);
        c = new EJ(a, c, g);
        Qr(c, g);
        a = new IJ(a, d, e, b, c, f);
        Qr(a, c);
        a.init()
    }
    var IJ = class extends R {
        constructor(a, b, c, d, e, f) {
            super();
            this.B = a;
            this.Va = b;
            this.gb = c;
            this.xa = d;
            this.j = e;
            this.U = f;
            this.i = new S(!1)
        }
        init() {
            const a = JJ(this.B, this.Va, this.gb);
            DJ(this.j).appendChild(a.wj);
            dy(this.B, a.ua);
            FJ(a.ua).i(b => {
                if (b !== null) {
                    switch (b) {
                        case "unfilled":
                            this.dispose();
                            break;
                        case "filled":
                            this.i.g(!0);
                            break;
                        default:
                            this.U ? .reportError("Unhandled AdStatus: " + String(b)), this.dispose()
                    }
                    this.U ? .Pk(this.xa, b)
                }
            });
            bs(this.i, !0, () => void a.Zj.g(!0));
            a.sj.listen(() => void this.dispose());
            a.rj.listen(() =>
                void this.U ? .Nk(this.xa))
        }
    };

    function JJ(a, b, c) {
        const d = new S(!1),
            e = a.document.createElement("div");
        Lu(a, e);
        u(e, {
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "background-color": "rgba(0, 0, 0, 0.75)",
            opacity: "0",
            transition: "opacity 0.25s ease-in-out",
            "box-sizing": "border-box",
            padding: "40px 5px 5px 5px"
        });
        as(d, !0, () => void u(e, {
            opacity: "1"
        }));
        as(d, !1, () => void u(e, {
            opacity: "0"
        }));
        const f = a.document.createElement("div");
        Lu(a, f);
        u(f, {
            display: "block",
            width: "100%",
            height: "100%"
        });
        e.appendChild(f);
        const {
            ta: g,
            Yj: h
        } = KJ(a, b);
        f.appendChild(g);
        e.appendChild(LJ(a, D(c, 1)));
        b = MJ(a, D(c, 2));
        e.appendChild(b.Zi);
        b.kf.listen(() => void d.g(!1));
        return {
            Zj: d,
            wj: e,
            ua: h,
            rj: b.kf,
            sj: b.kf.delay(a, 450)
        }
    }

    function LJ(a, b) {
        const c = a.document.createElement("div");
        Lu(a, c);
        u(c, {
            position: "absolute",
            top: "10px",
            width: "100%",
            color: "white",
            "font-family": "Roboto",
            "font-size": "12px",
            "line-height": "16px",
            "text-align": "center"
        });
        c.appendChild(a.document.createTextNode(b));
        return c
    }

    function MJ(a, b) {
        const c = a.document.createElement("button");
        c.setAttribute("aria-label", b);
        Lu(a, c);
        u(c, {
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "block",
            cursor: "pointer",
            width: "24px",
            height: "24px",
            "font-size": "24px",
            "user-select": "none",
            color: "white"
        });
        b = a.document.createElement("gm-icon");
        b.className = "google-material-icons";
        b.appendChild(a.document.createTextNode("close"));
        c.appendChild(b);
        const d = new js;
        c.addEventListener("click", () => void is(d));
        return {
            Zi: c,
            kf: gs(d)
        }
    }

    function KJ(a, b) {
        a = $x(a.document, b, null, null, {});
        return {
            ta: a.Fb,
            Yj: a.ua
        }
    };

    function NJ({
        target: a,
        threshold: b = 0
    }) {
        const c = new OJ;
        c.init(a, b);
        return c
    }
    var OJ = class extends R {
        constructor() {
            super();
            this.i = new S(!1)
        }
        init(a, b) {
            const c = new IntersectionObserver(d => {
                for (const e of d)
                    if (e.target === a) {
                        this.i.g(e.isIntersecting);
                        break
                    }
            }, {
                threshold: b
            });
            c.observe(a);
            Rr(this, () => void c.disconnect())
        }
    };

    function PJ(a) {
        const b = QJ(a.B, ng(y(a.g, 2)) ? ? 250, ng(y(a.g, 3)) ? ? 300);
        let c = 1;
        return wJ(a.A).map(d => ({
            xa: c++,
            image: d,
            zb: b(d)
        }))
    }

    function RJ(a, b) {
        const c = NJ({
            target: b.image.g,
            threshold: Ih(a.g, 4) ? ? .8
        });
        a.j.push(c);
        bs(es(c.i, a.B, ng(y(a.g, 5)) ? ? 3E3, d => d), !0, () => {
            if (a.i < (ng(y(a.g, 1)) ? ? 1)) {
                HJ({
                    B: a.B,
                    xa: b.xa,
                    Rj: b.image.g,
                    Va: a.Va,
                    gb: a.gb,
                    U: a.U
                });
                a.i++;
                if (!(a.i < (ng(y(a.g, 1)) ? ? 1)))
                    for (; a.j.length;) a.j.pop() ? .dispose();
                a.U ? .Ok(b.xa)
            }
        })
    }
    var TJ = class {
        constructor(a, b, c, d, e, f) {
            this.B = a;
            this.Va = b;
            this.g = c;
            this.gb = d;
            this.A = e;
            this.U = f;
            this.j = [];
            this.i = 0
        }
        run() {
            const a = PJ(this);
            a.filter(SJ).forEach(b => void RJ(this, b));
            this.U ? .Qk(a.map(b => ({
                xa: b.xa,
                zb: b.zb
            })))
        }
    };

    function SJ(a) {
        return a.zb.rejectionReasons.length === 0
    }

    function QJ(a, b, c) {
        const d = nr(a);
        return e => {
            e = e.g.getBoundingClientRect();
            const f = [];
            e.width < b && f.push(1);
            e.height < c && f.push(2);
            e.top <= d && f.push(3);
            return {
                Xb: e.width,
                Hf: e.height,
                tj: e.top - d,
                rejectionReasons: f
            }
        }
    };

    function UJ(a, b) {
        a.xa = b;
        return a
    }
    var VJ = class {
        constructor(a, b, c, d, e) {
            this.l = a;
            this.Va = b;
            this.hostname = c;
            this.j = d;
            this.A = e;
            this.errorMessage = this.i = this.xa = this.g = null
        }
    };

    function WJ(a, b) {
        return new VJ(b, a.Va, a.hostname, a.i, a.A)
    }

    function XJ(a, b, c) {
        var d = a.j++;
        a.g === null ? (a.g = Fm(), a = 0) : a = Fm() - a.g;
        var e = b.l,
            f = b.Va,
            g = b.hostname,
            h = b.j,
            k = b.A.map(encodeURIComponent).join(",");
        if (b.g) {
            var l = {
                imcnt: b.g.length
            };
            var m = Math.min(b.g.length, 10);
            for (let n = 0; n < m; n++) {
                const p = `im${n}`;
                l[`${p}_id`] = b.g[n].xa;
                l[`${p}_s_w`] = b.g[n].zb.Xb;
                l[`${p}_s_h`] = b.g[n].zb.Hf;
                l[`${p}_s_dbf`] = b.g[n].zb.tj;
                b.g[n].zb.rejectionReasons.length > 0 && (l[`${p}_s_rej`] = b.g[n].zb.rejectionReasons.join(","))
            }
        } else l = null;
        UB("abg::imovad", {
            typ: e,
            wpc: f,
            hst: g,
            pvsid: h,
            peid: k,
            rate: c,
            num: d,
            tim: a,
            ...(b.xa === null ? {} : {
                imid: b.xa
            }),
            ...(b.i === null ? {} : {
                astat: b.i
            }),
            ...(b.errorMessage === null ? {} : {
                errm: b.errorMessage
            }),
            ...l
        }, c)
    }
    var YJ = class {
        constructor(a, b, c, d) {
            this.Va = a;
            this.hostname = b;
            this.i = c;
            this.A = d;
            this.j = 0;
            this.g = null
        }
        Qk(a) {
            var b = WJ(this, "fndi");
            b.g = a;
            XJ(this, b, a.length > 0 ? 1 : .1)
        }
        Ok(a) {
            a = UJ(WJ(this, "adpl"), a);
            XJ(this, a, 1)
        }
        Pk(a, b) {
            a = UJ(WJ(this, "adst"), a);
            a.i = b;
            XJ(this, a, 1)
        }
        Nk(a) {
            a = UJ(WJ(this, "adis"), a);
            XJ(this, a, 1)
        }
        reportError(a) {
            var b = WJ(this, "err");
            b.errorMessage = a;
            XJ(this, b, .1)
        }
    };

    function ZJ(a, b, c) {
        return (a = a.g()) && pi(a, 11) ? c.map(d => d.j()) : c.map(d => d.l(b))
    };
    const $J = new Set([7, 1]);
    var aK = class {
        constructor() {
            this.j = new qJ;
            this.A = []
        }
        g(a, b) {
            $J.has(b) || it(ft(pz(a), c => void this.j.add(c, b)), c => void this.A.push(c))
        }
        i(a, b) {
            for (const c of a) this.g(c, b)
        }
    };

    function bK(a) {
        return new yt(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    var cK = class {
        g(a) {
            return bK(Math.floor(a.i))
        }
    };
    var dK = class extends H {};

    function eK(a, b) {
        var c = b.adClient;
        if (typeof c !== "string" || !c) return !1;
        a.Ne = c;
        a.A = !!b.adTest;
        c = b.pubVars;
        ra(c) && (a.F = c);
        if (Array.isArray(b.fillMessage) && b.fillMessage.length > 0) {
            a.C = {};
            for (const d of b.fillMessage) a.C[d.key] = d.value
        }
        a.i = b.adWidth;
        a.g = b.adHeight;
        typeof a.i === "number" && a.i > 0 && typeof a.g === "number" && a.g > 0 || UB("rctnosize", b);
        return !0
    }
    var fK = class {
        constructor() {
            this.C = this.F = this.A = this.Ne = null;
            this.g = this.i = 0
        }
        H() {
            return !0
        }
    };

    function gK(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            const b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return b === "__storage_test__"
        } catch (b) {
            return !1
        }
    }

    function hK(a, b = []) {
        const c = Date.now();
        return Pa(b, d => c - d < a * 1E3)
    }

    function iK(a, b, c) {
        try {
            const d = a.getItem(c);
            if (!d) return [];
            let e;
            try {
                e = JSON.parse(d)
            } catch (f) {}
            if (!Array.isArray(e) || Wa(e, f => !Number.isInteger(f))) return a.removeItem(c), [];
            e = hK(b, e);
            e.length || a ? .removeItem(c);
            return e
        } catch (d) {
            return null
        }
    }

    function jK(a, b, c) {
        return b <= 0 || a == null || !gK(a) ? null : iK(a, b, c)
    };

    function kK(a, b, c) {
        let d = 0;
        try {
            var e = d |= lr(a);
            const h = mr(a),
                k = a.innerWidth;
            var f = h && k ? h / k : 0;
            d = e | (f ? f > 1.05 ? 262144 : f < .95 ? 524288 : 0 : 131072);
            d |= or(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var g;
            if (g = b) g = jK(c, 3600, "__lsv__") ? .length !== 0;
            g && (d |= 134217728)
        } catch (h) {
            d |= 32
        }
        return d
    };
    var lK = class extends fK {
        constructor() {
            super(...arguments);
            this.l = !1;
            this.j = null
        }
        H(a) {
            this.l = !!a.enableAma;
            if (a = a.amaConfig) try {
                var b = tu(a)
            } catch (c) {
                b = null
            } else b = null;
            this.j = b;
            return !0
        }
    };
    var mK = {};

    function nK(a, b, c) {
        let d = oK(a, c, b);
        if (!d) return !0;
        const e = c.H.i;
        for (; d.Cc && d.Cc.length;) {
            const f = d.Cc.shift(),
                g = Ry(f.ga);
            if (g && !(typeof d.dc === "number" && g <= d.dc)) c.C ? .g(f, 18);
            else if (pK(c, f, {
                    de: d.dc
                })) {
                if (d.yd.g.length + 1 >= e) return c.C ? .i(d.Cc, 19), !0;
                d = oK(a, c, b);
                if (!d) return !0
            }
        }
        return c.j
    }
    const oK = (a, b, c) => {
        var d = b.H.i,
            e = b.H.A,
            f = b.H;
        f = iC(b.da(), f.g ? f.g.Kc : void 0, d);
        if (f.g.length >= d) return b.C ? .i(qK(b, f, {
            types: a
        }, c), 19), null;
        e ? (d = f.i || (f.i = rr(f.j).scrollHeight || null), e = !d || d < 0 ? -1 : d * e - oC(f)) : e = void 0;
        const g = (d = e == null || e >= 50) ? qK(b, f, {
            types: a
        }, c) : null;
        d || b.C ? .i(qK(b, f, {
            types: a
        }, c), 18);
        return {
            yd: f,
            dc: e,
            Cc: g
        }
    };
    mK[2] = Ea(function(a, b) {
        a = qK(b, iC(b.da()), {
            types: a,
            Ab: uB(b.da())
        }, 2);
        if (a.length == 0) return !0;
        for (let c = 0; c < a.length; c++)
            if (pK(b, a[c])) return !0;
        return b.j ? (b.A.push(11), !0) : !1
    }, [0]);
    mK[5] = Ea(nK, [0], 5);
    mK[10] = Ea(function(a, b) {
        a = [];
        const c = b.xd;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && a.push(1);
        return nK(a, 10, b)
    }, 10);
    mK[3] = function(a) {
        if (!a.j) return !1;
        const b = qK(a, iC(a.da()), {
            types: [0],
            Ab: uB(a.da())
        }, 3);
        if (b.length == 0) return !0;
        for (let c = b.length - 1; c >= 0; c--)
            if (pK(a, b[c])) return !0;
        a.A.push(11);
        return !0
    };
    const sK = a => {
            const b = a.da().document.body.getBoundingClientRect().width;
            rK(a, bK(b))
        },
        uK = (a, b) => {
            var c = {
                types: [0],
                Ab: vB(),
                Sk: [5]
            };
            c = qK(a, iC(a.da()), c, 8);
            tK(a, c.reverse(), b)
        },
        tK = (a, b, c) => {
            for (const d of b)
                if (b = c.g(d.ma), pK(a, d, {
                        Oe: b
                    })) return !0;
            return !1
        };
    mK[8] = function(a) {
        var b = a.da().document;
        if (b.readyState != "complete") return b.addEventListener("readystatechange", () => mK[8](a), {
            once: !0
        }), !0;
        if (!a.j) return !1;
        if (!a.Xd()) return !0;
        b = {
            types: [0],
            Ab: vB(),
            og: [2, 4, 5]
        };
        b = qK(a, iC(a.da()), b, 8);
        const c = new cK;
        if (tK(a, b, c)) return !0;
        if (a.l.fh) switch (a.l.Rh || 0) {
            case 1:
                uK(a, c);
                break;
            default:
                sK(a)
        }
        return !0
    };
    mK[6] = Ea(nK, [2], 6);
    mK[7] = Ea(nK, [1], 7);
    mK[9] = function(a) {
        const b = oK([0, 2], a, 9);
        if (!b || !b.Cc) return a.A.push(17), a.j;
        for (var c of b.Cc) {
            var d = a.l.Df || null;
            d == null ? d = null : (d = Sy(c.ga, new vK, new wK(d, a.da())), d = new rz(d, c.ia(), c.ma));
            if (!d) continue;
            const e = Ry(d.ga);
            if (e !== null && !(typeof b.dc === "number" && e > b.dc) && pK(a, d, {
                    de: b.dc,
                    gf: !0
                })) return a = d.ga.J, c = c.ga, a = a.length > 0 ? a[0] : null, c.A = !0, a != null && c.J.push(a), !0
        }
        a.A.push(17);
        return a.j
    };
    var vK = class {
        i(a, b, c, d) {
            return cy(d.document, a, b)
        }
        j(a) {
            return nr(a) || 0
        }
    };
    var xK = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.yd = c
        }
        Ba(a) {
            return this.g ? LC(this.i, this.g, a, this.yd) : KC(this.i, a, this.yd)
        }
        wa() {
            return this.g ? 16 : 9
        }
    };
    var yK = class {
        constructor(a) {
            this.Pe = a
        }
        Ba(a) {
            return SC(a.document, this.Pe)
        }
        wa() {
            return 11
        }
    };
    var zK = class {
        constructor(a) {
            this.Mb = a
        }
        Ba(a) {
            return PC(this.Mb, a)
        }
        wa() {
            return 13
        }
    };
    var AK = class {
        Ba(a) {
            return IC(a)
        }
        wa() {
            return 12
        }
    };
    var BK = class {
        constructor(a) {
            this.Vc = a
        }
        Ba() {
            return NC(this.Vc)
        }
        wa() {
            return 2
        }
    };
    var CK = class {
        constructor(a) {
            this.g = a
        }
        Ba() {
            return QC(this.g)
        }
        wa() {
            return 3
        }
    };
    var DK = class {
        Ba() {
            return TC()
        }
        wa() {
            return 17
        }
    };
    var EK = class {
        constructor(a) {
            this.g = a
        }
        Ba() {
            return MC(this.g)
        }
        wa() {
            return 1
        }
    };
    var FK = class {
        Ba() {
            return mc(Ny)
        }
        wa() {
            return 7
        }
    };
    var GK = class {
        constructor(a) {
            this.og = a
        }
        Ba() {
            return OC(this.og)
        }
        wa() {
            return 6
        }
    };
    var HK = class {
        constructor(a) {
            this.g = a
        }
        Ba() {
            return RC(this.g)
        }
        wa() {
            return 5
        }
    };
    var IK = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        Ba() {
            return Ea(UC, this.minWidth, this.maxWidth)
        }
        wa() {
            return 10
        }
    };
    var JK = class {
        constructor(a) {
            this.A = a.i.slice(0);
            this.i = a.g.slice(0);
            this.j = a.j;
            this.l = a.A;
            this.g = a.l
        }
    };

    function KK(a) {
        var b = new LK;
        b.l = a;
        b.i.push(new EK(a));
        return b
    }

    function MK(a, b) {
        a.i.push(new GK(b));
        return a
    }

    function NK(a, b) {
        a.i.push(new BK(b));
        return a
    }

    function OK(a, b) {
        a.i.push(new HK(b));
        return a
    }

    function PK(a, b) {
        a.i.push(new CK(b));
        return a
    }

    function QK(a) {
        a.i.push(new FK);
        return a
    }

    function RK(a) {
        a.g.push(new AK);
        return a
    }

    function SK(a, b = 0, c, d) {
        a.g.push(new xK(b, c, d));
        return a
    }

    function TK(a, b = 0, c = Infinity) {
        a.g.push(new IK(b, c));
        return a
    }

    function UK(a) {
        a.g.push(new DK);
        return a
    }

    function VK(a, b = 0) {
        a.g.push(new zK(b));
        return a
    }

    function WK(a, b) {
        a.j = b;
        return a
    }
    var LK = class {
        constructor() {
            this.j = 0;
            this.A = !1;
            this.i = [].slice(0);
            this.g = [].slice(0)
        }
        build() {
            return new JK(this)
        }
    };
    var wK = class {
        constructor(a, b) {
            this.i = a;
            this.j = b
        }
        g() {
            var a = this.i,
                b = this.j;
            const c = a.F || {};
            c.google_ad_client = a.Ne;
            c.google_ad_height = nr(b) || 0;
            c.google_ad_width = mr(b) || 0;
            c.google_reactive_ad_format = 9;
            b = new dK;
            b = ti(b, 1, a.l);
            a.j && A(b, 2, a.j);
            c.google_rasc = Gi(b);
            a.A && (c.google_adtest = "on");
            return new yt(["fsi_container"], c)
        }
    };
    var XK = rt(new ot(0, {})),
        YK = rt(new ot(1, {})),
        ZK = a => a === XK || a === YK;

    function $K(a, b, c) {
        Dr(a.g, b) || a.g.set(b, []);
        a.g.get(b).push(c)
    }
    var aL = class {
        constructor() {
            this.g = new Hr
        }
    };

    function bL(a, b) {
        a.H.wpc = b;
        return a
    }

    function cL(a, b) {
        for (let c = 0; c < a.l.length; c++)
            if (a.l[c] == b) return a;
        a.l.push(b);
        return a
    }

    function dL(a, b) {
        for (let c = 0; c < b.length; c++) cL(a, b[c]);
        return a
    }

    function eL(a, b) {
        a.j = a.j ? a.j : b;
        return a
    }
    var fL = class {
        constructor(a) {
            this.H = {};
            this.H.c = a;
            this.l = [];
            this.j = null;
            this.C = [];
            this.D = 0
        }
        A(a) {
            const b = yc(this.H);
            this.D > 0 && (b.t = this.D);
            b.err = this.l.join();
            b.warn = this.C.join();
            this.j && (b.excp_n = this.j.name, b.excp_m = this.j.message && this.j.message.substring(0, 512), b.excp_s = this.j.stack && zm(this.j.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function gL(a, b) {
        b && (a.g.apv = ri(b, 4), Eh(b, Vt, 23) && (a.g.sat = "" + z(b, Vt, 23).g()));
        return a
    }

    function hL(a, b) {
        a.g.afm = b.join(",");
        return a
    }
    var iL = class extends fL {
        constructor(a) {
            super(a);
            this.g = {}
        }
        A(a) {
            try {
                this.g.su = a.location.hostname
            } catch (b) {
                this.g.su = "_ex"
            }
            a = super.A(a);
            Ac(a, this.g);
            return a
        }
    };

    function jL(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function kL(a, b, c, d = 30) {
        c.length <= d ? a[b] = lL(c) : (a[b] = lL(c.slice(0, d)), a[b + "_c"] = c.length.toString())
    }

    function lL(a) {
        const b = a.length > 0 && typeof a[0] === "string";
        a = a.map(c => c ? .toString() ? ? "null");
        b && (a = a.map(c => ja(c, "replaceAll").call(c, "~", "")));
        return a.join("~")
    }

    function mL(a) {
        return a == null ? "null" : typeof a === "string" ? a : typeof a === "boolean" ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function nL(a, b) {
        a.i.op = mL(b)
    }

    function oL(a, b, c) {
        kL(a.i, "fap", b);
        a.i.fad = mL(c)
    }

    function pL(a, b, c) {
        kL(a.i, "fmp", b);
        a.i.fmd = mL(c)
    }

    function qL(a, b, c) {
        kL(a.i, "vap", b);
        a.i.vad = mL(c)
    }

    function rL(a, b, c) {
        kL(a.i, "vmp", b);
        a.i.vmd = mL(c)
    }

    function sL(a, b, c) {
        kL(a.i, "pap", b);
        a.i.pad = mL(c)
    }

    function tL(a, b, c) {
        kL(a.i, "pmp", b);
        a.i.pmd = mL(c)
    }

    function uL(a, b) {
        kL(a.i, "psq", b)
    }
    var vL = class extends iL {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.i = {};
            this.errors = []
        }
        A(a) {
            a = super.A(a);
            Object.assign(a, this.i);
            this.errors.length > 0 && (a.e = lL(this.errors));
            return a
        }
    };

    function wL(a, b, c) {
        const d = b.ga;
        Dr(a.g, d) || a.g.set(d, new xL(et(pz(b)) ? ? ""));
        c(a.g.get(d))
    }

    function yL(a, b) {
        wL(a, b, c => {
            c.g = !0
        })
    }

    function zL(a, b) {
        wL(a, b, c => {
            c.i = !0
        })
    }

    function AL(a, b) {
        wL(a, b, c => {
            c.j = !0
        });
        a.M.push(b.ga)
    }

    function BL(a, b, c) {
        wL(a, b, d => {
            d.wc = c
        })
    }

    function CL(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) ZK(f.wc ? ? "") ? ++e : (b = a.i.get(f.wc ? ? "", null), d.push(b));
        return {
            list: d.sort((f, g) => (f ? ? -1) - (g ? ? -1)),
            xc: e
        }
    }

    function DL(a, b) {
        nL(b, a.i.Zc());
        var c = Gr(a.g).filter(f => (f.Sb.startsWith(XK) ? 0 : 1) === 0),
            d = Gr(a.g).filter(f => (f.Sb.startsWith(XK) ? 0 : 1) === 1),
            e = CL(a, f => f.g, c);
        oL(b, e.list, e.xc);
        e = CL(a, f => f.g, d);
        pL(b, e.list, e.xc);
        e = CL(a, f => f.i, c);
        qL(b, e.list, e.xc);
        e = CL(a, f => f.i, d);
        rL(b, e.list, e.xc);
        c = CL(a, f => f.j, c);
        sL(b, c.list, c.xc);
        d = CL(a, f => f.j, d);
        tL(b, d.list, d.xc);
        uL(b, a.M.map(f => a.g.get(f) ? .wc).map(f => a.i.get(f) ? ? null))
    }

    function mo() {
        var a = P(EL);
        if (!a.l) return ao();
        const b = ko(jo(io(ho(go(fo(eo(co($n(Zn(new bo, a.l ? ? []), a.J ? ? []), a.C), a.D), a.G), a.V), a.X), a.H ? ? 0), Gr(a.g).map(c => {
            var d = new Yn;
            d = zi(d, 1, c.Sb);
            var e = a.i.get(c.wc ? ? "", -1);
            d = xi(d, 2, e);
            d = ui(d, 3, c.g);
            return ui(d, 4, c.i)
        })), a.M.map(c => a.g.get(c) ? .wc).map(c => a.i.get(c) ? ? -1));
        a.j != null && ui(b, 6, a.j);
        a.A != null && Th(b, 13, Gg(a.A), "0");
        return b
    }
    var EL = class {
        constructor() {
            this.A = this.J = this.l = null;
            this.G = this.D = !1;
            this.j = null;
            this.X = this.C = this.V = !1;
            this.H = null;
            this.i = new Hr;
            this.g = new Hr;
            this.M = []
        }
    };
    class xL {
        constructor(a) {
            this.j = this.i = this.g = !1;
            this.wc = null;
            this.Sb = a
        }
    };
    var FL = class {
        constructor(a) {
            this.i = a;
            this.g = -1
        }
    };

    function GL(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function HL(a, b) {
        const c = a.J.filter(d => Fr(d.Jd).every(e => d.Jd.get(e) === b.get(e)));
        return c.length === 0 ? (a.i.push(19), null) : c.reduce((d, e) => d.Jd.Zc() > e.Jd.Zc() ? d : e, c[0])
    }

    function IL(a, b) {
        b = pz(b);
        if (!dt(b)) return a.i.push(18), null;
        b = b.getValue();
        if (Dr(a.j, b)) return a.j.get(b);
        var c = pt(b);
        c = HL(a, c);
        a.j.set(b, c);
        return c
    }
    var JL = class {
        constructor(a) {
            this.g = a;
            this.j = new Hr;
            this.J = (z(a, ru, 2) ? .g() || []).map(b => {
                const c = pt(D(b, 1)),
                    d = Fu(ji(b, 2));
                return {
                    Jd: c,
                    Uh: d,
                    Sb: D(b, 1)
                }
            });
            this.i = []
        }
        G() {
            const a = P(EL);
            var b = this.A();
            a.l = b;
            b = this.C();
            a.J = b;
            b = this.l();
            b != null && (a.A = b);
            b = !!this.g.i() ? .g() ? .g();
            a.G = b;
            b = new Hr;
            for (const c of z(this.g, ru, 2) ? .g() ? ? []) b.set(D(c, 1), Fu(ji(c, 2)));
            a.i = b
        }
        H() {
            return [...this.i]
        }
        A() {
            return [...this.g.g()]
        }
        C() {
            return [...Kh(this.g, 4, Eg, 1, void 0, 1024).map(Fu)]
        }
        l() {
            return Eu(z(this.g, lu, 5) ? .g()) ? ? null
        }
        D(a) {
            const b =
                IL(this, a);
            b ? .Sb != null && BL(P(EL), a, b.Sb)
        }
        M(a) {
            return a.length == 0 ? !0 : .75 <= Xs((new Vs(a)).filter(b => {
                b = IL(this, b) ? .Sb || "";
                return b != "" && !(b === XK || b === YK)
            })) / a.length
        }
    };

    function KL(a, b) {
        return Xs(b) == 0 ? b : b.sort((c, d) => (IL(a.g, c) ? .Uh ? ? Number.MAX_VALUE) - (IL(a.g, d) ? .Uh ? ? Number.MAX_VALUE))
    }

    function LL(a, b) {
        var c = b.ma.g,
            d = Math,
            e = d.min;
        const f = b.ia(),
            g = b.ga.i();
        c += 200 * e.call(d, 20, g == 0 || g == 3 ? GL(f.parentElement) : GL(f));
        a = a.i;
        a.g < 0 && (a.g = rr(a.i).scrollHeight || 0);
        a = a.g - b.ma.g;
        a = c + (a > 1E3 ? 0 : 2 * (1E3 - a));
        b.ia();
        return a
    }

    function ML(a, b) {
        return Xs(b) == 0 ? b : b.sort((c, d) => LL(a, c) - LL(a, d))
    }

    function NL(a, b) {
        return b.sort((c, d) => {
            const e = c.ga.H,
                f = d.ga.H;
            var g;
            e == null || f == null ? g = e == null && f == null ? LL(a, c) - LL(a, d) : e == null ? 1 : -1 : g = e - f;
            return g
        })
    }
    var OL = class {
        constructor(a, b = null) {
            this.i = new FL(a);
            this.g = b && new JL(b)
        }
    };

    function PL(a, b, c = 0, d) {
        var e = a.i;
        for (var f of b.A) e = Us(e, f.Ba(a.j), QL(f.wa(), c));
        f = e = e.apply(HC(a.j));
        for (const g of b.i) f = Us(f, g.Ba(a.j), lt([RL(g.wa(), c), h => {
            d ? .g(h, g.wa())
        }]));
        switch (b.j) {
            case 1:
                f = ML(a.g, f);
                break;
            case 2:
                f = NL(a.g, f);
                break;
            case 3:
                const g = P(EL);
                f = KL(a.g, f);
                e.forEach(h => {
                    yL(g, h);
                    a.g.g ? .D(h)
                });
                f.forEach(h => zL(g, h))
        }
        b.l && (f = Ys(f, pd(a.j.location.href + a.j.localStorage.google_experiment_mod)));
        b.g ? .length === 1 && $K(a.A, b.g[0], {
            Cb: Xs(e),
            mi: Xs(f)
        });
        return Ws(f)
    }
    var SL = class {
        constructor(a, b, c = null) {
            this.i = new Vs(a);
            this.g = new OL(b, c);
            this.j = b;
            this.A = new aL
        }
    };
    const QL = (a, b) => c => Qy(c, b, a),
        RL = (a, b) => c => Qy(c.ga, b, a);

    function TL(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = UL(VL(c), a);
                    break a;
                case 3:
                    a = UL(c, a);
                    break a;
                case 2:
                    const e = c.lastChild;
                    a = UL(e ? e.nodeType == 1 ? e : VL(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && b == 2 && !WL(c))) b = b == 1 || b == 2 ? c : c.parentNode,
        d = !(b && !Pu(b) && b.offsetWidth <= 0);
        return d
    }

    function UL(a, b) {
        if (!a) return !1;
        a = Sd(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return a == "left" || a == "right"
    }

    function VL(a) {
        for (a = a.previousSibling; a && a.nodeType != 1;) a = a.previousSibling;
        return a ? a : null
    }

    function WL(a) {
        return !!a.nextSibling || !!a.parentNode && WL(a.parentNode)
    };
    const XL = !bc && !Yb();

    function YL(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (XL && a.dataset) {
            if (!(!Ub("Android") || Zb() || Xb() || Wb() || Ub("Silk") || "adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return a === void 0 ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };

    function ZL(a, b, c) {
        if (!b) return null;
        const d = Vl(document, "INS");
        d.id = "google_pedestal_container";
        d.style.width = "100%";
        d.style.zIndex = "-1";
        if (c) {
            var e = a.getComputedStyle(c),
                f = "";
            if (e && e.position !== "static") {
                var g = c.parentNode.lastElementChild;
                for (f = e.position; g && g !== c;) {
                    if (a.getComputedStyle(g).display !== "none") {
                        f = a.getComputedStyle(g).position;
                        break
                    }
                    g = g.previousElementSibling
                }
            }
            if (c = f) d.style.position = c
        }
        b.appendChild(d);
        if (d) {
            var h = a.document;
            f = h.createElement("div");
            f.style.width = "100%";
            f.style.height =
                "2000px";
            c = nr(a);
            e = h.body.scrollHeight;
            a = a.innerHeight;
            g = h.body.getBoundingClientRect().bottom;
            d.appendChild(f);
            var k = f.getBoundingClientRect().top;
            h = h.body.getBoundingClientRect().top;
            d.removeChild(f);
            f = e;
            e <= a && c > 0 && g > 0 && (f = g - h);
            a = k - h >= .8 * f
        } else a = !1;
        return a ? d : (b.removeChild(d), null)
    }

    function $L(a) {
        const b = a.document.body;
        var c = ZL(a, b, null);
        if (c) return c;
        if (a.document.body) {
            c = Math.floor(a.document.body.getBoundingClientRect().width);
            for (var d = [{
                    element: a.document.body,
                    depth: 0,
                    height: 0
                }], e = -1, f = null; d.length > 0;) {
                const h = d.pop(),
                    k = h.element;
                var g = h.height;
                h.depth > 0 && g > e && (e = g, f = k);
                if (h.depth < 5)
                    for (g = 0; g < k.children.length; g++) {
                        const l = k.children[g],
                            m = l.getBoundingClientRect().width;
                        (m == null || c == null ? 0 : m >= c * .9 && m <= c * 1.01) && d.push({
                            element: l,
                            depth: h.depth + 1,
                            height: l.getBoundingClientRect().height
                        })
                    }
            }
            c =
                f
        } else c = null;
        return c ? ZL(a, c.parentNode || b, c) : null
    }

    function aM(a) {
        let b = 0;
        try {
            b |= lr(a), rc() || (b |= 1048576), Math.floor(a.document.body.getBoundingClientRect().width) <= 1200 || (b |= 32768), bM(a) && (b |= 33554432)
        } catch (c) {
            b |= 32
        }
        return b
    }

    function bM(a) {
        a = a.document.getElementsByClassName("adsbygoogle");
        for (let b = 0; b < a.length; b++)
            if (YL(a[b]) === "autorelaxed") return !0;
        return !1
    };

    function cM(a) {
        const b = qr(a, !0),
            c = rr(a).scrollWidth,
            d = rr(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = wr(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            n = [],
            p = [];
        let w = 0,
            v = 0,
            t = Infinity,
            C = Infinity,
            I = null;
        var V = XB({
            qc: !1
        }, a);
        for (var N of V) {
            V = N.getBoundingClientRect();
            const Ka = b - (V.bottom + f);
            var O = void 0,
                J = void 0;
            if (N.className && N.className.indexOf("adsbygoogle-ablated-ad-slot") != -1) {
                O = N.getAttribute("google_element_uid");
                J = a.google_sv_map;
                if (!O ||
                    !J || !J[O]) continue;
                O = (J = um(J[O])) ? J.height : 0;
                J = J ? J.width : 0
            } else if (O = V.bottom - V.top, J = V.right - V.left, O <= 1 || J <= 1) continue;
            g.push(O);
            k.push(J);
            l.push(O * J);
            eC(N) ? (v += 1, N.className && N.className.indexOf("pedestal_container") != -1 && (I = O)) : (t = Math.min(t, Ka), n.push(V), w += 1, h.push(O), m.push(O * J));
            C = Math.min(C, Ka);
            p.push(V)
        }
        t = t === Infinity ? null : t;
        C = C === Infinity ? null : C;
        f = dM(n);
        p = dM(p);
        h = eM(b, h);
        n = eM(b, g);
        m = eM(b * c, m);
        N = eM(b * c, l);
        return new fM(a, {
            uj: e,
            ig: b,
            Bk: c,
            zk: d,
            jk: w,
            Oi: v,
            Qi: gM(g),
            Ri: gM(k),
            Pi: gM(l),
            sk: f,
            rk: p,
            qk: t,
            pk: C,
            qf: h,
            pf: n,
            Mi: m,
            Li: N,
            Dk: I
        })
    }

    function hM(a, b, c, d) {
        const e = rc() && !(mr(a.B) >= 900);
        d = Pa(d, f => Xa(a.i, f)).join(",");
        b = {
            wpc: b,
            su: c,
            eid: d,
            doc: a.g.uj ? ? null,
            pg_h: iM(a.g.ig),
            pg_w: iM(a.g.Bk),
            pg_hs: iM(a.g.zk),
            c: iM(a.g.jk),
            aa_c: iM(a.g.Oi),
            av_h: iM(a.g.Qi),
            av_w: iM(a.g.Ri),
            av_a: iM(a.g.Pi),
            s: iM(a.g.sk),
            all_s: iM(a.g.rk),
            b: iM(a.g.qk),
            all_b: iM(a.g.pk),
            d: iM(a.g.qf),
            all_d: iM(a.g.pf),
            ard: iM(a.g.Mi),
            all_ard: iM(a.g.Li),
            pd_h: iM(a.g.Dk),
            dt: e ? "m" : "d"
        };
        c = {};
        for (const f of Object.keys(b)) b[f] !== null && (c[f] = b[f]);
        return c
    }
    var fM = class {
        constructor(a, b) {
            this.i = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ");
            this.B = a;
            this.g = b
        }
    };

    function gM(a) {
        return yl.apply(null, Pa(a, b => b > 0)) || null
    }

    function eM(a, b) {
        return a <= 0 ? null : xl.apply(null, b) / a
    }

    function dM(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                c > 0 && (b = Math.min(c, b))
            }
        return b !== Infinity ? b : null
    }

    function iM(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function jM(a) {
        var b = gC({
            qc: !1,
            Ud: !1
        }, a);
        a = (nr(a) || 0) - wr(a);
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d].getBoundingClientRect();
            mC(e) && e.top <= a && (c += 1)
        }
        return c > 0
    }

    function kM(a) {
        const b = {};
        var c = gC({
            qc: !1,
            Ud: !1,
            Nf: !1,
            Of: !1
        }, a).map(d => d.getBoundingClientRect()).filter(mC);
        b.Hg = c.length;
        c = hC({
            Nf: !0
        }, a).map(d => d.getBoundingClientRect()).filter(mC);
        b.bh = c.length;
        c = hC({
            Of: !0
        }, a).map(d => d.getBoundingClientRect()).filter(mC);
        b.Lh = c.length;
        c = hC({
            Ud: !0
        }, a).map(d => d.getBoundingClientRect()).filter(mC);
        b.Lg = c.length;
        c = (nr(a) || 0) - wr(a);
        c = gC({
            qc: !1
        }, a).map(d => d.getBoundingClientRect()).filter(mC).filter(Da(lM, null, c));
        b.Ig = c.length;
        a = cM(a);
        c = a.g.qf != null ? a.g.qf : null;
        c !=
            null && (b.Fh = c);
        a = a.g.pf != null ? a.g.pf : null;
        a != null && (b.Jg = a);
        return b
    }

    function pK(a, b, {
        de: c,
        Oe: d,
        gf: e
    } = {}) {
        return uy(997, () => mM(a, b, {
            de: c,
            Oe: d,
            gf: e
        }), a.g)
    }

    function qK(a, b, c, d) {
        var e = c.Ab ? c.Ab : a.H;
        const f = wB(e, b.g.length);
        e = a.l.Kg ? e.g : void 0;
        const g = UK(VK(RK(TK(SK(QK(OK(PK(MK(NK(KK(c.types), a.Ja), c.og || []), a.pa), c.Sk || [])), f.ld || void 0, e, b), c.minWidth, c.maxWidth)), f.Mb || void 0));
        a.X && g.g.push(new yK(a.X));
        b = 1;
        a.Ib() && (b = 3);
        WK(g, b);
        a.l.fi && (g.A = !0);
        return uy(995, () => PL(a.i, g.build(), d, a.C || void 0), a.g)
    }

    function rK(a, b) {
        const c = $L(a.g);
        if (c) {
            const d = xt(a.V, b),
                e = $x(a.g.document, a.G, null, null, {}, d);
            e && (yx(e.Fb, c, 2, 256), uy(996, () => nM(a, e, d), a.g))
        }
    }

    function oM(a) {
        return a.J ? a.J : a.J = a.g.google_ama_state
    }

    function mM(a, b, {
        de: c,
        Oe: d,
        gf: e
    } = {}) {
        const f = b.ga;
        if (f.A) return !1;
        var g = b.ia(),
            h = f.i();
        if (!TL(a.g, h, g, a.j)) return !1;
        h = null;
        f.ed ? .includes(6) ? (h = Math.round(g.getBoundingClientRect().height), h = new yt(null, {
            google_max_responsive_height: c == null ? h : Math.min(c, h),
            google_full_width_responsive: "false"
        })) : h = c == null ? null : new yt(null, {
            google_max_responsive_height: c
        });
        c = zt(si(f.Fe, 2) || 0);
        g = At(f.H);
        const k = pM(a, f),
            l = qM(a),
            m = xt(a.V, f.V ? f.V.g(b.ma) : null, h, d || null, c, g, k, l),
            n = b.fill(a.G, m);
        if (e && !rM(a, n, m) || !uy(996,
                () => nM(a, n, m), a.g)) return !1;
        vl(9, [f.H, f.uc]);
        a.Ib() && AL(P(EL), b);
        return !0
    }

    function pM(a, b) {
        return et(it(nz(b).map(Bt), () => {
            a.A.push(18)
        }))
    }

    function qM(a) {
        if (!a.Ib()) return null;
        var b = a.i.g.g ? .C();
        if (b == null) return null;
        b = b.join("~");
        a = a.i.g.g ? .l() ? ? null;
        return Ct({
            jj: b,
            Cj: a
        })
    }

    function rM(a, b, c) {
        if (!b) return !1;
        var d = b.ua;
        const e = d.style.width;
        d.style.width = "100%";
        const f = d.offsetWidth;
        d.style.width = e;
        if (Jx(f, a.g, b.ua, c && c.bd() || {})) return Px(a.g, b.ua), !0;
        Tu(b.Fb);
        return !1
    }

    function nM(a, b, c) {
        if (!b) return !1;
        try {
            dy(a.g, b.ua, c)
        } catch (d) {
            return Tu(b.Fb), a.A.push(6), !1
        }
        return !0
    }
    var sM = class {
        constructor(a, b, c, d, e = {}, f = [], g = !1) {
            this.i = a;
            this.G = b;
            this.g = c;
            this.H = d.Ab;
            this.Ja = d.Vc || [];
            this.V = d.Ej || null;
            this.pa = d.oj || [];
            this.X = d.Pe || [];
            this.l = e;
            this.j = !1;
            this.D = [];
            this.A = [];
            this.M = this.J = void 0;
            this.xd = f;
            this.C = g ? new aK : null
        }
        da() {
            return this.g
        }
        Ib() {
            if ((this.i.g.g ? .A().length ? ? 0) == 0) return !1;
            if (this.M === void 0) {
                const a = WK(RK(QK(KK([0, 1, 2]))), 1).build(),
                    b = uy(995, () => PL(this.i, a), this.g);
                this.M = this.i.g.g ? .M(b) || !1
            }
            return this.M
        }
        Sf() {
            return !!this.l.Zh
        }
        Xd() {
            return !bM(this.g)
        }
        nb() {
            return this.C
        }
    };
    const lM = (a, b) => b.top <= a;

    function tM(a, b, c, d, e, f = 0, g = 0) {
        this.ob = a;
        this.ye = f;
        this.xe = g;
        this.errors = b;
        this.Wb = c;
        this.g = d;
        this.i = e
    };
    var uM = (a, {
        Xd: b = !1,
        Sf: c = !1,
        Uk: d = !1,
        Ib: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function vM(a, b, c) {
        a = uM(a, {
            Xd: b.Xd(),
            Sf: b.Sf(),
            Uk: !!b.l.Df,
            Ib: b.Ib()
        });
        return new wM(a, b, c)
    }

    function xM(a, b) {
        const c = mK[b];
        return c ? uy(998, () => c(a.g), a.l) : (a.g.D.push(12), !0)
    }

    function yM(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(xM(a, b))
            })
        })
    }

    function zM(a) {
        a.g.j = !0;
        return Promise.all(a.i.map(b => yM(a, b))).then(b => {
            b.includes(!1) && a.g.D.push(5);
            a.i.splice(0, a.i.length)
        })
    }
    var wM = class {
        constructor(a, b, c) {
            this.A = a.slice(0);
            this.i = a.slice(0);
            this.j = Za(this.i, 1);
            this.g = b;
            this.l = c
        }
    };
    var AM = class {
        constructor(a) {
            this.g = a;
            this.exception = void 0
        }
    };

    function BM(a) {
        return zM(a).then(() => {
            var b = Xs(a.g.i.i.filter(Ny));
            var c = a.g.D.slice(0);
            var d = a.g;
            d = [...d.A, ...(d.i.g.g ? .H() || [])];
            b = new tM(b, c, d, Xs(a.g.i.i), a.g.i.A.g, Xs(a.g.i.i.filter(Ny).filter(Oy)), Xs(a.g.i.i.filter(Oy)));
            return new AM(b)
        })
    };
    var CM = class {
        g() {
            return new yt([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    var DM = class {
        g() {
            return new yt(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function EM(a) {
        return Qu(a.g.document).map(b => {
            const c = new Gy(b, 3);
            b = new Iy(fy(a.g, b));
            return new My(c, b, a.i, !1, 0, [], null, a.g, null)
        })
    }
    var FM = class {
        constructor(a) {
            var b = new DM;
            this.g = a;
            this.i = b || null
        }
    };
    const GM = {
        Dg: "10px",
        ef: "10px"
    };

    function HM(a) {
        return Cr(a.g.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new My(new Gy(b, 1), new Ey(GM), a.i, !1, 0, [], null, a.g, null))
    }
    var IM = class {
        constructor(a, b) {
            this.g = a;
            this.i = b || null
        }
    };

    function JM(a, b) {
        const c = [];
        b.forEach((d, e) => {
            c.push(ja(e, "replaceAll").call(e, "~", "_") + "--" + d.map(f => Number(f)).join("_"))
        });
        kL(a.g, "cnstr", c, 80)
    }
    var KM = class extends fL {
        constructor() {
            super(-1);
            this.g = {}
        }
        A(a) {
            a = super.A(a);
            Object.assign(a, this.g);
            return a
        }
    };
    var LM = class extends Error {
        constructor(a, b, c) {
            super(a);
            this.g = b;
            this.i = c
        }
    };

    function MM(a, b, c) {
        return a == null ? new LM(b + "ShouldNotBeNull", 2, c) : a == 0 ? new LM(b + "ShouldNotBeZero", 3, c) : a < -1 ? new LM(b + "ShouldNotBeLessMinusOne", 4, c) : null
    }

    function NM(a, b, c) {
        const d = MM(c.Xc, "gapsMeasurementWindow", 1) || MM(c.mc, "gapsPerMeasurementWindow", 2) || MM(c.zc, "maxGapsToReport", 3);
        return d != null ? bt(d) : c.Re || c.mc != -1 || c.zc != -1 ? $s(new OM(a, b, c)) : bt(new LM("ShouldHaveLimits", 1, 0))
    }

    function PM(a) {
        return oM(a.j) && oM(a.j).placed || []
    }

    function QM(a) {
        return PM(a).map(b => Ms(Ks(b.element, a.g)))
    }

    function RM(a) {
        return PM(a).map(b => b.index)
    }

    function SM(a, b) {
        const c = b.ga;
        return !a.C && c.j && lg(y(c.j, 8)) != null && si(c.j, 8) == 1 ? [] : c.A ? (c.J || []).map(d => Ms(Ks(d, a.g))) : [Ms(new Ls(b.ma.g, 0))]
    }

    function TM(a) {
        a.sort((e, f) => e.g - f.g);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.g;
            d = d.g + d.i;
            f <= c ? c = Math.max(c, d) : (b.push(new Ls(c, f - c)), c = d)
        }
        return b
    }

    function UM(a, b) {
        b = b.map(c => {
            var d = new En;
            d = vi(d, 1, c.g);
            c = c.getHeight();
            return vi(d, 2, c)
        });
        return Gn(Fn(new Hn, a), b)
    }

    function VM(a) {
        const b = ai(a, En, 2, Jh()).map(c => `G${ii(c,1)}~${c.getHeight()}`);
        return `W${ii(a,1)}${b.join("")}`
    }

    function WM(a, b) {
        const c = [];
        let d = 0;
        for (const e of Fr(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.G || f.splice(a.l, f.length);
            !a.H && d + f.length > a.i && f.splice(a.i - d, f.length);
            c.push(UM(e, f));
            d += f.length;
            if (!a.H && d >= a.i) break
        }
        return c
    }

    function XM(a) {
        const b = ai(a, Hn, 5, Jh()).map(c => VM(c));
        return `M${ii(a,1)}H${ii(a,2)}C${ii(a,3)}B${Number(!!B(a,4))}${b.join("")}`
    }

    function YM(a) {
        var b = sz(Ws(a.j.i.i), a.g),
            c = QM(a),
            d = new Ir(RM(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = SM(a, b[e]);
                c.push(...f)
            }
        c.push(new Ls(0, 0));
        c.push(Ms(new Ls(rr(a.g).scrollHeight, 0)));
        b = TM(c);
        c = new Hr;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.D ? 0 : Math.floor(e.g / a.A), Dr(c, f) || c.set(f, []), c.get(f).push(e);
        b = WM(a, c);
        c = new In;
        c = vi(c, 1, a.i);
        c = vi(c, 2, a.A);
        c = vi(c, 3, a.l);
        a = ti(c, 4, a.C);
        return di(a, 5, b)
    }

    function ZM(a) {
        a = YM(a);
        return XM(a)
    }
    var OM = class {
        constructor(a, b, c) {
            this.D = c.Xc == -1;
            this.A = c.Xc;
            this.G = c.mc == -1;
            this.l = c.mc;
            this.H = c.zc == -1;
            this.i = c.zc;
            this.C = c.Mf;
            this.j = b;
            this.g = a
        }
    };

    function Hu(a, b, c) {
        let d = b.ub;
        b.sc && Q(Nv) && (d = 1, "r" in c && (c.r += "F"));
        d <= 0 || (!b.Hb || "pvc" in c || (c.pvc = Be(a.g)), UB(b.nc, c, d))
    }

    function $M(a, b, c) {
        c = c.A(a.g);
        b.Hb && (c.pvc = Be(a.g));
        0 <= b.ub && (c.r = b.ub, Hu(a, b, c))
    }
    var aN = class {
        constructor(a) {
            this.g = a
        }
    };
    const bN = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function cN(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        UB("ama", b, .01)
    }

    function dN(a) {
        const b = {};
        Ud(bN, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function eN(a) {
        return a.replace(/(^\/)|(\/$)/g, "")
    }

    function fN(a) {
        const b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, d => {
            if (!d.match(c)) {
                const e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function gN(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function hN(a, b) {
        a = ni(a, 2);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    }

    function iN(a, b) {
        a = eN(gN(fN(a.location.pathname)));
        const c = Wd(a),
            d = jN(a);
        return b.find(e => {
            if (Eh(e, Lt, 7)) {
                var f = z(e, Lt, 7);
                f = pg(y(f, 1, void 0, Ah))
            } else f = pg(y(e, 1, void 0, Ah));
            Eh(e, Lt, 7) ? (e = z(e, Lt, 7), e = si(e, 2)) : e = 2;
            if (typeof f !== "number") return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function jN(a) {
        const b = {};
        for (;;) {
            b[Wd(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };

    function kN(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            cN(a, {
                lserr: 1
            })
        }
    };
    var mN = (a, b, c, d, e = null, f = null) => {
            lN(a, new aN(a), b, c, d, e, f)
        },
        lN = (a, b, c, d, e, f = null, g = null) => {
            if (c)
                if (d) {
                    var h = QF(d, e);
                    try {
                        const k = new nN(a, b, c, d, e, h, f, g);
                        uy(990, () => oN(k), a)
                    } catch (k) {
                        ul() && vl(15, [k]), $M(b, zu, eL(cL(bL(hL(gL(new iL(0), d), h), c), 1), k)), qI(P(nI), qo(new zo, Bn(1)))
                    }
                } else $M(b, zu, cL(bL(new iL(0), c), 8)), qI(P(nI), qo(new zo, Bn(8)));
            else $M(b, zu, cL(new iL(0), 9)), qI(P(nI), qo(new zo, Bn(9)))
        };

    function oN(a) {
        a.J.forEach(b => {
            switch (b) {
                case 0:
                    uy(991, () => pN(a), a.g);
                    break;
                case 1:
                    uy(1073, () => {
                        JF(new PF(a.g, a.C, a.A, a.l, a.i.ca))
                    }, a.g);
                    break;
                case 2:
                    qN(a);
                    break;
                case 7:
                    uy(1203, () => {
                        var c = z(a.A, ku, 34);
                        if (c) {
                            var d = a.g,
                                e = a.l,
                                f = wh(c);
                            c = d.location.hostname;
                            var g = z(f, ju, 1) ? .g() ? ? [];
                            c = new YJ(e, c, Be(r), g);
                            if (g = z(f, ju, 1))
                                if (f = z(f, iu, 2)) {
                                    Os(d, GJ);
                                    const l = new Nr;
                                    var h = d.innerWidth;
                                    var k = .375 * h;
                                    h = new dG(k, h - k);
                                    k = d.innerWidth;
                                    k = mr(d) >= 900 ? .2 * k : .5 * k;
                                    (new TJ(d, e, g, f, new zJ(d, h, k, l, new iJ(l)), c)).run()
                                } else c.reportError("No messages");
                            else c.reportError("No settings")
                        }
                    }, a.g)
            }
        })
    }

    function pN(a) {
        var b = Q(zv) ? void 0 : a.i.Gk;
        let c = null;
        c = Q(zv) ? uB(a.g) : sB(a.g, b);
        if (a.i.ca && Eh(a.i.ca, Kt, 10)) {
            var d = Jt(a.i.ca.g());
            d !== null && d !== void 0 && (c = wz(a.g, d, b));
            Q(Rv) && a.i.ca.g() ? .g() === 2 && (c = rB(a.i.ca.g(), c))
        }
        Eh(a.A, Gt, 26) && (c = xB(c, z(a.A, Gt, 26), a.g));
        c = zB(c, a.g);
        b = a.i.ca ? ni(a.i.ca, 6) : [];
        d = a.i.ca ? ai(a.i.ca, Qt, 5, Jh()) : [];
        const e = a.i.ca ? ni(a.i.ca, 2) : [],
            f = uy(993, () => {
                var g = a.A,
                    h = ai(g, gu, 1, Jh()),
                    k = a.i.ca && hN(a.i.ca, 1) ? "text_image" : "text",
                    l = new CM,
                    m = Ly(h, a.g, {
                        Si: l,
                        Xj: new Jy(k)
                    });
                h.length != m.length &&
                    a.G.push(13);
                m = m.concat(HM(new IM(a.g, l)));
                h = Q(Ov);
                l = z(g, su, 24) ? .i() ? .g() ? .g() || !1;
                if (h || l) h = EM(new FM(a.g)), l = P(EL), m = m.concat(h), l.V = !0, l.H = h.length, a.D === "n" && (a.D = z(g, su, 24) ? .g() ? .length ? "o" : "p");
                h = Q(Rv) && a.i.ca.g() ? .g() === 2 && a.i.ca.g() ? .i();
                h = Q(xv) || h;
                a: {
                    if (l = z(g, cu, 6))
                        for (n of l.g())
                            if (Eh(n, nt, 4)) {
                                var n = !0;
                                break a
                            }
                    n = !1
                }
                h && n ? (n = m.concat, h = a.g, (l = z(g, cu, 6)) ? (h = kz(l.g(), h), k = ZJ(g, k, h)) : k = [], k = n.call(m, k)) : (n = m.concat, h = a.g, (l = z(g, cu, 6)) ? (h = jz(l.g(), h), k = ZJ(g, k, h)) : k = [], k = n.call(m, k));
                m = k;
                g = z(g,
                    su, 24);
                return new SL(m, a.g, g)
            }, a.g);
        a.j = new sM(f, a.l, a.g, {
            Ab: c,
            Ej: a.V,
            Vc: a.i.Vc,
            oj: b,
            Pe: d
        }, rN(a), e, Q(Nv));
        oM(a.j) ? .optimization ? .ablatingThisPageview && !a.j.Ib() && (ey(a.g), P(EL).C = !0, a.D = "f");
        a.H = vM(e, a.j, a.g);
        uy(992, () => BM(a.H), a.g).then(uy(994, () => a.pa.bind(a), a.g), a.X.bind(a))
    }

    function qN(a) {
        const b = z(a.A, hu, 18);
        b && (new xI(a.g, new gJ(a.g, a.l), b, new bE(a.g), ai(a.A, gu, 1, Jh()))).run()
    }

    function rN(a) {
        const b = Q(Qv);
        if (!a.A.g()) return {
            fi: b,
            fh: !1,
            Zh: !1,
            Ek: 0,
            Rh: 0,
            Kg: sN(a),
            Df: a.M
        };
        const c = a.A.g();
        return {
            fi: b || B(c, 14),
            fh: B(c, 5),
            Zh: B(c, 6),
            Ek: ki(c, 8),
            Rh: si(c, 10),
            Kg: sN(a),
            Df: a.M
        }
    }

    function sN(a) {
        return Q(Hv) || Q(Rv) && a.i.ca ? .g() ? .g() === 2 ? !1 : a.i.ca && Eh(a.i.ca, Kt, 10) ? (Jt(a.i.ca.g()) || 0) >= .5 : !0
    }

    function tN(a, b) {
        var c = new iL(b.ob);
        c.g.pp = b.xe;
        c.g.ppp = b.ye;
        c.g.ppos = b.placementPositionDiffs;
        c.g.eatf = b.Pc;
        c.g.eatfAbg = b.Qc;
        c.g.reatf = b.oc;
        c.g.a = a.H.A.slice(0).join(",");
        c = hL(gL(c, a.A), a.J);
        var d = b.Ka;
        d && (c.g.as_count = d.Hg, c.g.d_count = d.bh, c.g.ng_count = d.Lh, c.g.am_count = d.Lg, c.g.atf_count = d.Ig, c.g.mdns = jL(d.Fh), c.g.alldns = jL(d.Jg));
        d = b.Bc;
        d != null && (c.g.allp = d);
        if (d = b.Qd) {
            var e = [];
            for (var f of Fr(d))
                if (d.get(f).length > 0) {
                    var g = d.get(f)[0];
                    e.push("(" + [f, g.Cb, g.mi].join() + ")")
                }
            c.g.fd = e.join(",")
        }
        f =
            b.ig;
        f != null && (c.g.pgh = f);
        c.g.abl = b.qh;
        c.g.rr = a.D;
        a = dL(dL(bL(c, a.l), b.errors), a.G);
        c = b.Wb;
        for (e = 0; e < c.length; e++) a: {
            f = a;d = c[e];
            for (g = 0; g < f.C.length; g++)
                if (f.C[g] == d) break a;f.C.push(d)
        }
        b.exception !== void 0 && cL(eL(a, b.exception), 1);
        return a
    }

    function uN(a, b) {
        var c = tN(a, b);
        $M(a.C, b.errors.length > 0 || a.G.length > 0 || b.exception !== void 0 ? zu : yu, c);
        if (z(a.A, su, 24)) {
            a.j.i.g.g ? .G();
            b = oM(a.j);
            const d = P(EL);
            d.j = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.D = !0);
            d.X = !!b ? .optimization ? .availableAbg;
            b = P(EL);
            c = new vL(c);
            b.l ? (c.i.sl = lL(b.l ? ? []), c.i.daaos = lL(b.J ? ? []), c.i.ab = mL(b.D), c.i.rr = mL(b.V), c.i.oab = mL(b.G), b.j != null && (c.i.sab = mL(b.j)), b.C && (c.i.fb = mL(b.C)), c.i.ls = mL(b.X), nL(c, b.i.Zc()), b.H != null && (c.i.rp = mL(b.H)),
                b.A != null && (c.i.expl = mL(b.A)), DL(b, c)) : c.errors.push("irr");
            $M(a.C, Bu, c)
        }
        c = a.j ? .nb();
        Q(Nv) && c != null && (c = new Map([...c.j.map.entries()].map(rJ)), b = new KM, JM(b, c), $M(a.C, Du, b))
    }

    function vN(a, b) {
        if (Q(Bv) && a.j != null) {
            var c = NM(a.g, a.j, {
                Xc: W(Mv),
                mc: W(Lv),
                zc: W(Dv),
                Mf: !0,
                Re: !1
            });
            if (dt(c)) a = new Ln, c = YM(c.getValue()), a = ci(a, 2, Kn, c), A(b, 16, a);
            else {
                var d = c.g;
                a = new Ln;
                c = a.setError;
                var e = new Jn;
                e = Ai(e, 2, d.i);
                d = Ai(e, 1, d.g);
                a = c.call(a, d);
                A(b, 16, a)
            }
        }
    }

    function wN(a, b) {
        const c = P(nI);
        if (c.i) {
            var d = new zo,
                e = b.Wb.filter(g => g !== null),
                f = a.G.concat(b.errors, b.exception ? [1] : []).filter(g => g !== null);
            vo(so(yo(xo(wo(uo(to(no(po(ro(oo(d, a.H.A.slice(0).map(g => {
                var h = new An;
                return Ai(h, 1, g)
            })), e.map(g => {
                var h = new Dn;
                return Ai(h, 1, g)
            })), f.map(g => Bn(g))), z(a.A, Vt, 23) ? .g()), b.ob), b.Bc), b.oc), b.Pc), b.Qc), a.J.map(g => g.toString())), Sn(Rn(Qn(Pn(On(Nn(Mn(new Tn, b.Ka ? .Hg), b.Ka ? .bh), b.Ka ? .Lh), b.Ka ? .Lg), b.Ka ? .Ig), b.Ka ? .Fh), b.Ka ? .Jg));
            if (b.Qd)
                for (let g of Fr(b.Qd)) {
                    e = new Rh;
                    for (let h of b.Qd.get(g)) Xn(e, Vn(Un(new Wn, h.Cb), h.mi));
                    Qh(d).set(g.toString(), e)
                }
            z(a.A, su, 24) && lo(d);
            vN(a, d);
            qI(c, d)
        }
    }

    function xN(a, b, c) {
        {
            var d = oM(a.j),
                e = b.g;
            const f = e.g,
                g = e.xe;
            let h = e.ob,
                k = e.ye,
                l = e.errors.slice(),
                m = e.Wb.slice(),
                n = b.exception;
            const p = ZH(a.g).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.H.j && m.push(13), d.exception !== void 0 && (n = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
                ob: h,
                xe: g,
                ye: k,
                Bc: f,
                errors: e.errors.slice(),
                Wb: m,
                exception: n,
                oc: c,
                Pc: !!d.eatf,
                Qc: !!d.eatfAbg,
                qh: p
            }) : (m.push(12), a.H.j && m.push(13), c = {
                ob: h,
                xe: g,
                ye: k,
                Bc: f,
                errors: l,
                Wb: m,
                exception: n,
                oc: c,
                Pc: !1,
                Qc: !1,
                qh: p
            })
        }
        c.Ka = kM(a.j.g);
        if (b = b.g.i) c.Qd = b;
        c.ig = rr(a.g).scrollHeight;
        if (ul() || z(a.A, Ut, 25) ? .i()) {
            d = Ws(a.j.i.i);
            b = [];
            for (const f of d) {
                d = {};
                e = f.M;
                for (const g of Fr(e)) d[g] = e.get(g);
                d = {
                    anchorElement: f.D.g(f.g),
                    position: f.i(),
                    clearBoth: f.G,
                    locationType: f.uc,
                    placed: f.A,
                    placementProto: f.j ? jh(f.j) : null,
                    articleStructure: f.l ? jh(f.l) : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            vl(14, [{
                placementIdentifiers: b
            }, a.j.G, c.Ka])
        }
        return c
    }

    function yN(a, b) {
        var c = a.j.g;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.Bc;
        c.numAutoAdsPlaced = b.ob;
        c.hasAtfAd = b.oc;
        b.exception !== void 0 && (c.exception = b.exception);
        if (a.j != null)
            if (a = NM(a.g, a.j, {
                    Xc: -1,
                    mc: -1,
                    zc: -1,
                    Mf: !0,
                    Re: !0
                }), dt(a)) c.placementPositionDiffs = ZM(a.getValue()), b = YM(a.getValue()), a = new Ln, a = ci(a, 2, Kn, b), c.placementPositionDiffsReport = Gi(a);
            else {
                c.placementPositionDiffs = "E" + a.g.message;
                var d = a.g;
                a = new Ln;
                b = a.setError;
                var e = new Jn;
                e = Ai(e, 2, d.i);
                d = Ai(e,
                    1, d.g);
                a = b.call(a, d);
                c.placementPositionDiffsReport = Gi(a)
            }
    }

    function zN(a, b) {
        uN(a, {
            ob: 0,
            Bc: void 0,
            errors: [],
            Wb: [],
            exception: b,
            oc: void 0,
            Pc: void 0,
            Qc: void 0,
            Ka: void 0
        });
        wN(a, {
            ob: 0,
            Bc: void 0,
            errors: [],
            Wb: [],
            exception: b,
            oc: void 0,
            Pc: void 0,
            Qc: void 0,
            Ka: void 0
        })
    }
    var nN = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.g = a;
            this.C = b;
            this.l = c;
            this.A = d;
            this.i = e;
            this.J = f;
            this.V = g || null;
            this.G = [];
            this.M = h;
            this.D = "n"
        }
        pa(a) {
            try {
                const b = jM(this.j.g) || void 0;
                xu({
                    uf: b
                }, this.g);
                const c = xN(this, a, jM(this.j.g));
                Eh(this.A, Ut, 25) && Tt(z(this.A, Ut, 25)) && yN(this, c);
                uN(this, c);
                wN(this, c);
                SB(753, () => {
                    if (Q(Av) && this.j != null) {
                        var d = NM(this.g, this.j, {
                                Xc: W(Mv),
                                mc: W(Lv),
                                zc: W(Dv),
                                Mf: !0,
                                Re: !1
                            }),
                            e = yc(c);
                        dt(d) ? (d = ZM(d.getValue()), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.g.message;
                        e = tN(this, e);
                        $M(this.C, Au, e)
                    }
                })()
            } catch (b) {
                zN(this, b)
            }
        }
        X(a) {
            zN(this, a)
        }
    };
    var AN = class extends H {},
        BN = tk(AN);

    function CN(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? ct(() => BN(c)) : $s(null)
    };

    function DN(a) {
        this.g = a || {
            cookie: ""
        }
    }
    ba = DN.prototype;
    ba.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        typeof c === "object" && (h = c.ai, g = c.Ee || !1, f = c.domain || void 0, e = c.path || void 0, d = c.ee);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        d === void 0 && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (g ? ";secure" : "") + (h != null ? ";samesite=" + h : "")
    };
    ba.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Lb(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };

    function EN(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            ee: 0,
            path: c,
            domain: d
        })
    }
    ba.isEmpty = function() {
        return !this.g.cookie
    };
    ba.Zc = function() {
        return this.g.cookie ? (this.g.cookie || "").split(";").length : 0
    };
    ba.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Lb(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; a >= 0; a--) EN(this, b[a])
    };

    function FN(a, b = window) {
        if (a.g()) try {
            return b.localStorage
        } catch {}
        return null
    }
    let GN;

    function HN(a) {
        return GN ? GN : a.origin === "null" ? GN = !1 : GN = IN(a)
    }

    function IN(a) {
        if (!a.navigator.cookieEnabled) return !1;
        const b = new DN(a.document);
        if (!b.isEmpty()) return !0;
        b.set("TESTCOOKIESENABLED", "1", {
            ee: 60,
            ai: a.isSecureContext ? "none" : void 0,
            Ee: a.isSecureContext || void 0
        });
        if (b.get("TESTCOOKIESENABLED") !== "1") return !1;
        EN(b, "TESTCOOKIESENABLED");
        return !0
    }

    function JN(a, b) {
        b = b.origin !== "null" ? b.document.cookie : null;
        return b === null ? null : (new DN({
            cookie: b
        })).get(a) || ""
    }

    function KN(a, b, c, d) {
        d.origin !== "null" && (d.isSecureContext && (c = { ...c,
            ai: "none",
            Ee: !0
        }), (new DN(d.document)).set(a, b, c))
    };

    function LN(a, b) {
        return ti(a, 5, b)
    }

    function MN(a, b) {
        return ti(a, 8, b)
    }

    function NN(a, b) {
        return ti(a, 12, b)
    }

    function ON(a, b) {
        return ti(a, 16, b)
    }
    var PN = class extends H {
        A() {
            return hi(this, 1) != null
        }
        i() {
            return hi(this, 2) != null
        }
        l() {
            return B(this, 3)
        }
        g() {
            return B(this, 5)
        }
    };
    var SN = ({
        B: a,
        Ha: b,
        uh: c = !1,
        wh: d = !1
    }) => {
        if (!QN({
                B: a,
                Ha: b,
                uh: c,
                wh: d
            })) return RN(a, LN(new PN, !0));
        b = NH();
        return (b = SH(b, 24)) ? RN(a, LN(new PN, VI(b))) : bt(Error("tcunav"))
    };

    function QN({
        B: a,
        Ha: b,
        uh: c,
        wh: d
    }) {
        if (!(d = !d && $I(new dJ(a)))) {
            if (c = !c) {
                if (b) {
                    a = CN(a);
                    if (dt(a))
                        if ((a = a.getValue()) && lg(y(a, 1)) != null) b: switch (a = F(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else VB(806, a.g), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function RN(a, b) {
        return (a = FN(b, a)) ? $s(a) : bt(Error("unav"))
    };
    var TN = class {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.l = b;
            this.A = c;
            this.i = !1;
            this.j = d;
            this.C = e
        }
        run() {
            const a = this.A;
            if (this.i) {
                var b = this.g;
                if (this.j && !HH(a)) {
                    var c = new AN;
                    c = Ai(c, 1, 1)
                } else c = null;
                if (c) {
                    c = Gi(c);
                    try {
                        b.localStorage.setItem("google_auto_fc_cmp_setting", c)
                    } catch (d) {}
                }
            }
            b = HH(a) && (this.j || this.C);
            a && b && (new xI(this.g, new gJ(this.g, this.l), a, new bE(this.g))).run()
        }
    };
    var UN = class extends H {
        getName() {
            return F(this, 1)
        }
        getVersion() {
            return D(this, 3)
        }
    };
    var VN = [0, ok, -1, ik];
    var WN = class extends H {
        Mj() {
            return F(this, 3)
        }
    };
    const XN = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var YN = class extends H {
        getVersion() {
            return ii(this, 2)
        }
    };

    function ZN(a) {
        return a.includes("~") ? a.split("~").slice(1) : []
    };

    function $N(a) {
        return Xe(a.length % 4 !== 0 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function aO(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function bO(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    }

    function cO(a, b) {
        a = $N(a);
        return a.length < b ? a.padEnd(b, "0") : a
    };

    function dO(a) {
        var b = $N(a),
            c = aO(b.slice(0, 6));
        a = aO(b.slice(6, 12));
        var d = new YN;
        c = wi(d, 1, c);
        a = wi(c, 2, a);
        b = b.slice(12);
        c = aO(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (e.length === 0) throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = aO(e[0]) === 0;
            e = e.slice(1);
            var g = eO(e, b),
                h = d.length === 0 ? 0 : d[d.length - 1];
            h = bO(g) + h;
            e = e.slice(g.length);
            if (f) d.push(h);
            else {
                f = eO(e, b);
                g = bO(f);
                for (let l = 0; l <= g; l++) d.push(h + l);
                e = e.slice(f.length)
            }
        }
        if (e.length >
            0) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return Sh(a, 3, d, mg)
    }

    function eO(a, b) {
        const c = a.indexOf("11");
        if (c === -1) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var fO = class extends H {
        g() {
            return F(this, 1)
        }
        i() {
            return F(this, 2)
        }
    };
    var gO = class extends H {};
    var hO = class extends H {
        getVersion() {
            return ii(this, 1)
        }
    };
    var iO = class extends H {};

    function jO(a) {
        var b = new kO;
        return A(b, 1, a)
    }
    var kO = class extends H {};
    const lO = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        mO = 6 + lO.reduce((a, b) => a + b);
    var nO = class extends H {};
    var oO = class extends H {
        getVersion() {
            return ii(this, 1)
        }
    };
    var pO = class extends H {};

    function qO(a) {
        var b = new rO;
        return A(b, 1, a)
    }
    var rO = class extends H {};
    const sO = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        tO = 6 + sO.reduce((a, b) => a + b);
    var uO = class extends H {
        g() {
            return F(this, 1)
        }
        i() {
            return F(this, 2)
        }
        A() {
            return F(this, 3)
        }
    };
    var vO = class extends H {};
    var wO = class extends H {
        getVersion() {
            return ii(this, 1)
        }
    };
    var xO = class extends H {};

    function yO(a) {
        var b = new zO;
        return A(b, 1, a)
    }
    var zO = class extends H {};
    const AO = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        BO = 6 + AO.reduce((a, b) => a + b);
    var CO = class extends H {
        g() {
            return F(this, 1)
        }
        i() {
            return F(this, 2)
        }
        A() {
            return F(this, 3)
        }
    };
    var DO = class extends H {};
    var EO = class extends H {
        getVersion() {
            return ii(this, 1)
        }
    };
    const FO = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        GO = 6 + FO.reduce((a, b) => a + b);
    var HO = class extends H {
        g() {
            return F(this, 1)
        }
        i() {
            return F(this, 2)
        }
    };
    var IO = class extends H {};
    var JO = class extends H {
        getVersion() {
            return ii(this, 1)
        }
    };
    var KO = class extends H {};

    function LO(a) {
        var b = new MO;
        return A(b, 1, a)
    }
    var MO = class extends H {};
    const NO = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        OO = 6 + NO.reduce((a, b) => a + b);
    var PO = class extends H {};
    var QO = class extends H {
        getVersion() {
            return ii(this, 1)
        }
    };
    const RO = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        SO = 6 + RO.reduce((a, b) => a + b);
    var TO = class extends H {};

    function UO(a, b) {
        return Sh(a, 1, b, kg)
    }

    function VO(a, b) {
        return Sh(a, 2, b, kg)
    }

    function WO(a, b) {
        return Sh(a, 3, b, mg)
    }

    function XO(a, b) {
        Sh(a, 4, b, mg)
    }
    var YO = class extends H {};

    function ZO(a, b) {
        return xi(a, 1, b)
    }

    function $O(a) {
        var b = Number; {
            var c = y(a, 1);
            const d = typeof c;
            c = c == null ? c : d === "bigint" ? String($f(64, c)) : jg(c) ? d === "string" ? rg(c) : sg(c) : void 0
        }
        b = b(c ? ? "0");
        a = ii(a, 2);
        return new Date(b * 1E3 + a / 1E6)
    }
    var aP = class extends H {};

    function bP(a, b) {
        return wi(a, 1, b)
    }

    function cP(a, b) {
        return A(a, 2, b)
    }

    function dP(a, b) {
        return A(a, 3, b)
    }

    function eP(a, b) {
        return wi(a, 4, b)
    }

    function fP(a, b) {
        return wi(a, 5, b)
    }

    function gP(a, b) {
        return wi(a, 6, b)
    }

    function hP(a, b) {
        return zi(a, 7, b)
    }

    function iP(a, b) {
        return wi(a, 8, b)
    }

    function jP(a, b) {
        return wi(a, 9, b)
    }

    function kP(a, b) {
        return ui(a, 10, b)
    }

    function lP(a, b) {
        return ui(a, 11, b)
    }

    function mP(a, b) {
        return Sh(a, 12, b, kg)
    }

    function nP(a, b) {
        return Sh(a, 13, b, kg)
    }

    function oP(a, b) {
        return Sh(a, 14, b, kg)
    }

    function pP(a, b) {
        return ui(a, 15, b)
    }

    function qP(a, b) {
        return zi(a, 16, b)
    }

    function rP(a, b) {
        return Sh(a, 17, b, mg)
    }

    function sP(a, b) {
        return Sh(a, 18, b, mg)
    }

    function tP(a, b) {
        return di(a, 19, b)
    }
    var uP = class extends H {
        getVersion() {
            return ii(this, 1)
        }
    };
    var vP = class extends H {};
    var wP = "a".charCodeAt(),
        xP = xc(dr),
        yP = xc(er);

    function zP(a, b) {
        if (a.g + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function AP(a) {
        a = zP(a, 36);
        var b = ZO(new aP, Math.floor(a / 10));
        return wi(b, 2, a % 10 * 1E8)
    }

    function BP(a) {
        return String.fromCharCode(wP + zP(a, 6)) + String.fromCharCode(wP + zP(a, 6))
    }

    function CP(a) {
        let b = zP(a, 12);
        const c = [];
        for (; b--;) {
            var d = !!zP(a, 1) === !0,
                e = zP(a, 16);
            if (d)
                for (d = zP(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function DP(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (zP(a, 1)) {
                const f = e + 1;
                if (c && c.indexOf(f) === -1) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function EP(a) {
        const b = zP(a, 16);
        return !!zP(a, 1) === !0 ? (a = CP(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : DP(a, b)
    }

    function FP(a) {
        const b = [];
        let c = zP(a, 12);
        for (; c--;) {
            const k = zP(a, 6);
            var d = zP(a, 2),
                e = CP(a),
                f = b,
                g = f.push;
            var h = new TO;
            h = G(h, 1, k);
            d = G(h, 2, d);
            e = Sh(d, 3, e, mg);
            g.call(f, e)
        }
        return b
    }
    var GP = class {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    };
    var HP = a => {
        try {
            const b = Xe(a).map(f => f.toString(2).padStart(8, "0")).join(""),
                c = new GP(b);
            if (zP(c, 3) !== 3) return null;
            const d = VO(UO(new YO, DP(c, 24, xP)), DP(c, 24, xP)),
                e = zP(c, 6);
            e !== 0 && XO(WO(d, DP(c, e)), DP(c, e));
            return d
        } catch (b) {
            return null
        }
    };
    var IP = a => {
        try {
            const b = Xe(a).map(d => d.toString(2).padStart(8, "0")).join(""),
                c = new GP(b);
            return tP(sP(rP(qP(pP(oP(nP(mP(lP(kP(jP(iP(hP(gP(fP(eP(dP(cP(bP(new uP, zP(c, 6)), AP(c)), AP(c)), zP(c, 12)), zP(c, 12)), zP(c, 6)), BP(c)), zP(c, 12)), zP(c, 6)), !!zP(c, 1)), !!zP(c, 1)), DP(c, 12, yP)), DP(c, 24, xP)), DP(c, 24, xP)), !!zP(c, 1)), BP(c)), EP(c)), EP(c)), FP(c))
        } catch (b) {
            return null
        }
    };
    var KP = a => {
        if (!a) return null;
        a = a.split(".");
        if (a.length > 4) return null;
        var b = IP(a[0]);
        if (!b) return null;
        var c = new vP;
        b = A(c, 1, b);
        a.shift();
        for (const d of a) switch (JP(d)) {
            case 1:
            case 2:
                break;
            case 3:
                a = HP(d);
                if (!a) return null;
                A(b, 2, a);
                break;
            default:
                return null
        }
        return b
    };
    const JP = a => {
        try {
            const b = Xe(a).map(c => c.toString(2).padStart(8, "0")).join("");
            return zP(new GP(b), 3)
        } catch (b) {
            return -1
        }
    };
    const LP = (a, b) => {
        const c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (const d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var NP = (a, b) => {
        try {
            var c = Xe(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new GP(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = b;
            d.skip(78);
            c.cmpId = zP(d, 12);
            c.cmpVersion = zP(d, 12);
            d.skip(30);
            c.tcfPolicyVersion = zP(d, 6);
            c.isServiceSpecific = !!zP(d, 1);
            c.useNonStandardStacks = !!zP(d, 1);
            c.specialFeatureOptins = MP(DP(d, 12, yP), yP);
            c.purpose = {
                consents: MP(DP(d, 24, xP), xP),
                legitimateInterests: MP(DP(d, 24, xP), xP)
            };
            c.purposeOneTreatment = !!zP(d, 1);
            c.publisherCC = BP(d);
            c.vendor = {
                consents: MP(EP(d), null),
                legitimateInterests: MP(EP(d), null)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const MP = (a, b) => {
        const c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (const d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };

    function Lq(a, ...b) {
        try {
            const c = encodeURIComponent(Ue(bn(b, a.i)));
            a.j(`${"https://pagead2.googlesyndication.com/pagead/ping"}?e=${4}&d=${c}`)
        } catch (c) {
            an(c, a.i)
        }
    }
    var OP = class extends Mq {
        constructor(a) {
            super(7, Qp());
            this.j = a
        }
    };
    var PP = class extends H {
        g() {
            return hi(this, 2) != null
        }
    };
    var QP = class extends H {
        A() {
            return hi(this, 2) != null
        }
    };
    var RP = class extends H {
        i() {
            return hi(this, 1) != null
        }
    };
    var SP = tk(class extends H {});

    function TP(a) {
        a = UP(a);
        try {
            var b = a ? SP(a) : null
        } catch (c) {
            b = null
        }
        return b ? z(b, RP, 4) || null : null
    }

    function UP(a) {
        a = (new DN(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };

    function VP(a) {
        a.__tcfapiPostMessageReady || WP(new XP(a))
    }

    function WP(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener") && (0, a.B.__tcfapi)(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = e.command === "removeEventListener" ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.B.addEventListener("message", a.g);
        a.B.__tcfapiPostMessageReady = !0
    }
    var XP = class {
        constructor(a) {
            this.B = a
        }
    };

    function YP(a) {
        a.__uspapiPostMessageReady || ZP(new $P(a))
    }

    function ZP(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && e.command === "getUSPData" && a.B.__uspapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__uspapiReturn = {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
                return f
            })
        };
        a.B.addEventListener("message", a.g);
        a.B.__uspapiPostMessageReady = !0
    }
    var $P = class {
        constructor(a) {
            this.B = a;
            this.g = null
        }
    };
    var aQ = class extends H {};
    var bQ = tk(class extends H {
        g() {
            return hi(this, 1) != null
        }
    });

    function cQ(a, b) {
        function c(n) {
            if (n.length < 10) return null;
            var p = h(n.slice(0, 4));
            p = k(p);
            n = h(n.slice(6, 10));
            n = l(n);
            return "1" + p + n + "N"
        }

        function d(n) {
            if (n.length < 10) return null;
            var p = h(n.slice(0, 6));
            p = k(p);
            n = h(n.slice(6, 10));
            n = l(n);
            return "1" + p + n + "N"
        }

        function e(n) {
            if (n.length < 12) return null;
            var p = h(n.slice(0, 6));
            p = k(p);
            n = h(n.slice(8, 12));
            n = l(n);
            return "1" + p + n + "N"
        }

        function f(n) {
            if (n.length < 18) return null;
            var p = h(n.slice(0, 8));
            p = k(p);
            n = h(n.slice(12, 18));
            n = l(n);
            return "1" + p + n + "N"
        }

        function g(n) {
            if (n.length < 10) return null;
            var p = h(n.slice(0, 6));
            p = k(p);
            n = h(n.slice(6, 10));
            n = l(n);
            return "1" + p + n + "N"
        }

        function h(n) {
            const p = [];
            let w = 0;
            for (let v = 0; v < n.length / 2; v++) p.push(aO(n.slice(w, w + 2))), w += 2;
            return p
        }

        function k(n) {
            return n.every(p => p === 1) ? "Y" : "N"
        }

        function l(n) {
            return n.some(p => p === 1) ? "Y" : "N"
        }
        if (a.length === 0) return null;
        a = a.split(".");
        if (a.length > 2) return null;
        a = $N(a[0]);
        const m = aO(a.slice(0, 6));
        a = a.slice(6);
        if (m !== 1) return null;
        switch (b) {
            case 8:
                return c(a);
            case 10:
            case 12:
            case 9:
                return d(a);
            case 11:
                return e(a);
            case 7:
                return f(a);
            case 13:
                return g(a);
            default:
                return null
        }
    };

    function dQ(a) {
        !a.A || a.B.__uspapi || a.B.frames.__uspapiLocator || (a.B.__uspapiManager = "fc", GI(a.B, "__uspapiLocator"), Fa("__uspapi", (b, c, d) => {
            typeof d === "function" && b === "getUSPData" && (b = a.i && !B(a.j, 3), d({
                version: 1,
                uspString: b ? "1---" : a.A
            }, !0))
        }, a.B), YP(a.B))
    }

    function eQ(a) {
        !a.tcString || a.B.__tcfapi || a.B.frames.__tcfapiLocator || (a.B.__tcfapiManager = "fc", GI(a.B, "__tcfapiLocator"), a.B.__tcfapiEventListeners = a.B.__tcfapiEventListeners || [], Fa("__tcfapi", (b, c, d, e) => {
            if (typeof d === "function")
                if (c && (c > 2.2 || c <= 1)) d(null, !1);
                else {
                    var f = a.B.__tcfapiEventListeners;
                    c = a.i && !a.j.g();
                    switch (b) {
                        case "ping":
                            d({
                                gdprApplies: !c,
                                cmpLoaded: !0,
                                cmpStatus: "loaded",
                                displayStatus: "disabled",
                                apiVersion: "2.2",
                                cmpVersion: 2,
                                cmpId: 300
                            });
                            break;
                        case "addEventListener":
                            e = f.push(d);
                            b = !c;
                            --e;
                            a.tcString ? (b = NP(a.tcString, b), b.addtlConsent = a.g != null ? a.g : void 0, b.cmpStatus = "loaded", b.eventStatus = "tcloaded", e != null && (b.listenerId = e)) : b = null;
                            d(b, !0);
                            break;
                        case "removeEventListener":
                            e !== void 0 && f[e] ? (f[e] = null, d(!0)) : d(!1);
                            break;
                        case "getInAppTCData":
                        case "getVendorList":
                            d(null, !1);
                            break;
                        case "getTCData":
                            d(null, !1)
                    }
                }
        }, a.B), VP(a.B))
    }

    function fQ(a) {
        if (!a ? .g() || D(a, 1).length === 0 || ai(a, aQ, 2, Jh()).length === 0) return null;
        const b = D(a, 1);
        let c;
        try {
            var d = dO(b.split("~")[0]);
            c = ZN(b)
        } catch (e) {
            return null
        }
        a = ai(a, aQ, 2, Jh()).reduce((e, f) => {
            var g = gQ(e);
            g = ji(g, 1);
            g = Fu(g);
            var h = gQ(f);
            h = ji(h, 1);
            return g > Fu(h) ? e : f
        });
        d = li(d, 3).indexOf(ii(a, 1));
        return d === -1 || d >= c.length ? null : {
            uspString: cQ(c[d], ii(a, 1)),
            nf: $O(gQ(a))
        }
    }

    function hQ(a) {
        a = a.find(b => b && F(b, 1) === 13);
        if (a ? .g()) try {
            return bQ(D(a, 2))
        } catch (b) {}
        return null
    }

    function gQ(a) {
        return Eh(a, aP, 2) ? z(a, aP, 2) : ZO(new aP, 0)
    }
    var iQ = class {
        constructor(a, b, c) {
            this.B = a;
            this.j = b;
            this.i = c;
            b = UP(this.B.document);
            try {
                var d = b ? SP(b) : null
            } catch (e) {
                d = null
            }(b = d) ? (d = z(b, QP, 5) || null, b = ai(b, PP, 7, Jh()), b = hQ(b ? ? []), d = {
                Rg: d,
                oh: b
            }) : d = {
                Rg: null,
                oh: null
            };
            b = d;
            d = fQ(b.oh);
            b = b.Rg;
            b ? .A() && D(b, 2).length !== 0 ? (c = Eh(b, aP, 1) ? z(b, aP, 1) : ZO(new aP, 0), b = {
                uspString: D(b, 2),
                nf: $O(c)
            }) : b = null;
            this.A = b && d ? d.nf > b.nf ? d.uspString : b.uspString : b ? b.uspString : d ? d.uspString : null;
            this.tcString = (d = TP(a.document)) && d.i() ? D(d, 1) : null;
            this.g = (a = TP(a.document)) && hi(a, 2) != null ?
                D(a, 2) : null
        }
    };

    function jQ() {
        const a = Nb();
        return a ? Wa("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), b => Mb(a, b)) || Mb(a, "OMI/") && !Mb(a, "XiaoMi/") ? !0 : Mb(a, "Presto") && Mb(a, "Linux") && !Mb(a, "X11") && !Mb(a, "Android") && !Mb(a, "Mobi") : !1
    };

    function kQ(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return (b <= .03928 ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) * .2126 + (c <= .03928 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) * .7152 + (a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)) * .0722
    }
    var lQ = (a, b) => {
        a = kQ(a);
        b = kQ(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };

    function mQ(a, b, c, d = null) {
        const e = g => {
            let h;
            try {
                h = JSON.parse(g.data)
            } catch (k) {
                return
            }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
        };
        xk(a, "message", e);
        let f = !1;
        return () => {
            let g = !1;
            f || (f = !0, g = yk(a, "message", e));
            return g
        }
    }

    function nQ(a, b, c, d = null) {
        const e = mQ(a, b, lc(c, () => e()), d);
        return e
    }

    function oQ(a, b, c, d) {
        c.googMsgType = b;
        a.postMessage(JSON.stringify(c), d)
    }

    function pQ(a, b, c, d, e) {
        if (!(e <= 0) && (oQ(a, b, c, d), a = a.frames))
            for (let f = 0; f < a.length; ++f) e > 1 && pQ(a[f], b, c, d, --e)
    };

    function qQ(a, b, c, d) {
        return mQ(a, "fullscreen", d.tb(952, (e, f) => {
            if (f.source === b) {
                if (!("eventType" in e)) throw Error(`bad message ${JSON.stringify(e)}`);
                delete e.googMsgType;
                c(e)
            }
        }))
    };
    class rQ {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };
    async function sQ(a) {
        return a.C.promise
    }
    async function tQ(a) {
        return a.j.promise
    }
    async function uQ(a) {
        return a.l.promise
    }

    function vQ(a, b) {
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = .25;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.D.dl;
        b.version = a.D.version;
        Wm(a.I, "fullscreen_tag", b, !1, .25)
    }
    class wQ extends R {
        constructor(a, b, c) {
            var d = OB,
                e = MB,
                f = {
                    dl: 2,
                    version: Qp()
                };
            super();
            this.slotType = a;
            this.pubWin = b;
            this.mf = c;
            this.Aa = d;
            this.I = e;
            this.D = f;
            this.i = 1;
            this.qem = null;
            this.C = new rQ;
            this.j = new rQ;
            this.l = new rQ
        }
        init() {
            const a = qQ(this.pubWin, this.mf, b => {
                if (b.eventType === "adError") this.l.resolve(), this.i = 4;
                else if (b.eventType === "adReady" && this.i === 1) this.qem = b.qem, b.slotType !== this.slotType && (vQ(this, {
                    cur_st: this.i,
                    evt: b.eventType,
                    adp_tp: b.slotType
                }), this.i = 4), this.C.resolve(), this.i = 2;
                else if (b.eventType ===
                    "adClosed" && this.i === 2) this.j.resolve(b.result), this.i = 3;
                else if (b.eventType !== "adClosed" || this.i !== 3) b.eventType === "adClosed" && b.closeAfterError && (this.j.resolve(b.result), this.i = 3), vQ(this, {
                    cur_st: this.i,
                    evt: b.eventType
                }), this.i = 4
            }, this.Aa);
            Rr(this, a)
        }
    };
    var xQ = rk(tn);
    var yQ = rk(un);
    var zQ = rk(wn);
    var AQ = rk(sn);
    var BQ = rk(vn);
    var CQ = {
            qm: "google_ads_preview",
            Nm: "google_mc_lab",
            Wm: "google_anchor_debug",
            Vm: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            wn: "google_scr_debug",
            zn: "google_ia_debug_allow_onclick",
            Tn: "googleads",
            yi: "google_pedestal_debug",
            qo: "google_responsive_slot_preview",
            po: "google_responsive_dummy_ad"
        },
        DQ = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var EQ = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR"
    };

    function FQ(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (a.indexOf(b) != -1) return !0;
        b = GQ(b);
        return b != "go" && a.indexOf(b) != -1 ? !0 : !1
    }

    function GQ(a) {
        let b = "";
        Ud(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function HQ() {
        var a = r.location;
        let b = !1;
        Ud(CQ, c => {
            FQ(a, c) && (b = !0)
        });
        return b
    }

    function IQ(a, b) {
        switch (a) {
            case 1:
                return FQ(b, "google_ia_debug");
            case 2:
                return FQ(b, "google_bottom_anchor_debug");
            case 3:
                return FQ(b, "google_anchor_debug") || FQ(b, "googleads")
        }
    };

    function JQ(a) {
        var b = window;
        return a.google_adtest === "on" || a.google_adbreak_test === "on" || b.location.host.endsWith("h5games.usercontent.goog") || b.location.host === "gamesnacks.com" ? b.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(c => Math.floor(Number(c))).filter(c => !isNaN(c) && c > 0) || [] : []
    };

    function KQ(a, b) {
        b && !a.g && (b = LQ(b), a.g = b.id, a.j = b.creationTimeSeconds)
    }
    var MQ = class {
            constructor() {
                this.A = new Date(Date.now());
                this.j = this.g = null;
                this.i = {
                    [3]: {},
                    [4]: {},
                    [5]: {}
                };
                this.i[3] = {
                    [71]: (...a) => {
                        var b = this.g;
                        var c = this.A,
                            d = Number(a[0]);
                        a = Number(a[1]);
                        b = b !== null ? Wd(`${"w5uHecUBa2S"}:${d}:${b}`) % a === Math.floor(c.valueOf() / 864E5) % a : void 0;
                        return b
                    }
                };
                this.i[4] = {
                    [15]: () => {
                        var a = Number(this.j || void 0);
                        isNaN(a) ? a = void 0 : (a = new Date(a * 1E3), a = a.getFullYear() * 1E4 + (a.getMonth() + 1) * 100 + a.getDate());
                        return a
                    }
                }
            }
        },
        NQ;

    function OQ(a, b, c = "") {
        return b && (PQ(a, c, b) ? .g() ? ? !1) ? !0 : QQ(a, c, d => Wa(ai(d, Sk, 2, Jh()), e => si(e, 1) === 1), Q(gx) ? !!z(b, Yh, 26) ? .g() : B(b, 6))
    }

    function QQ(a, b, c, d) {
        a = Pd(a) || a;
        const e = RQ(a, d);
        b && (b = vm(String(b)));
        return uc(e, (f, g) => Object.prototype.hasOwnProperty.call(e, g) && (!b || b === g) && c(f))
    }

    function RQ(a, b) {
        a = SQ(a, b);
        const c = {};
        Ud(a, (d, e) => {
            try {
                const f = Ii(Vk, kh(d));
                c[e] = f
            } catch (f) {}
        });
        return c
    }

    function SQ(a, b) {
        a = SN({
            B: a,
            Ha: b
        });
        return dt(a) ? TQ(a.getValue()) : {}
    }

    function TQ(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : tc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && typeof e === "string" && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function PQ(a, b, c) {
        if (!b) return null;
        const d = oi(c, UQ, 27, VQ) ? .i();
        a = oi(c, UQ, 27, VQ) ? .A() ? .g() === b && a.location.host && D(c, 17) === a.location.host;
        return d === b || a ? oi(c, UQ, 27, VQ) : null
    };

    function WQ(a = r) {
        return a.ggeac || (a.ggeac = {})
    };

    function XQ(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function YQ(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    }

    function ZQ(a = navigator) {
        try {
            return !!a.protectedAudience ? .queryFeatureSupport ? .("deprecatedRenderURLReplacements")
        } catch (b) {
            return !1
        }
    }

    function $Q(a, b, c = b.document) {
        return !!(a && "sharedStorage" in b && b.sharedStorage && YQ("shared-storage", c) && YQ("shared-storage-select-url", c))
    };

    function aR(a = Td()) {
        return b => Wd(`${b} + ${a}`) % 1E3
    };

    function bR(a, b) {
        a.g = Uq(14, b, () => {})
    }
    class cR {
        constructor() {
            this.g = () => {}
        }
    }

    function dR(a) {
        P(cR).g(a)
    };

    function eR(a = WQ()) {
        Vq(P(Wq), a);
        fR(a);
        bR(P(cR), a);
        P(tx).i()
    }

    function fR(a) {
        const b = P(tx);
        b.j = (c, d) => Uq(5, a, () => !1)(c, d, 1);
        b.l = (c, d) => Uq(6, a, () => 0)(c, d, 1);
        b.C = (c, d) => Uq(7, a, () => "")(c, d, 1);
        b.g = (c, d) => Uq(8, a, () => [])(c, d, 1);
        b.A = (c, d) => Uq(17, a, () => [])(c, d, 1);
        b.i = () => {
            Uq(15, a, () => {})(1)
        }
    };

    function LQ(a) {
        var b = a.split(":");
        a = b.find(c => c.indexOf("ID=") === 0) || null;
        b = b.find(c => c.indexOf("T=") === 0) ? .substring(2) || null;
        return {
            id: a,
            creationTimeSeconds: b
        }
    }

    function gR(a, b, c) {
        c ? (a = a.B, b = c.g() ? JN(b, a) : null) : b = null;
        return b
    }

    function hR(a, b, c, d) {
        if (d) {
            var e = Fu(ji(c, 2)) - Date.now() / 1E3;
            e = {
                ee: Math.max(e, 0),
                path: D(c, 3),
                domain: D(c, 4),
                Ee: !1
            };
            c = c.getValue();
            a = a.B;
            d.g() && KN(b, c, e, a)
        }
    }

    function iR(a, b, c) {
        var d;
        (d = !c) || (d = a.B, d = !(c.g() && JN(b, d)));
        if (!d)
            for (const f of jR(a.B.location.hostname)) {
                d = b;
                var e = a.B;
                c.g() && e.origin !== "null" && EN(new DN(e.document), d, "/", f)
            }
    }
    var kR = class {
        constructor(a) {
            this.B = a
        }
    };

    function jR(a) {
        if (a === "localhost") return ["localhost"];
        a = a.split(".");
        if (a.length < 2) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function lR(a, b, c) {
        var d = {
            [0]: aR(Be(b).toString())
        };
        if (c) {
            c = gR(new kR(b), "__gads", c) || "";
            NQ || (NQ = new MQ);
            b = NQ;
            KQ(b, c);
            dR(b.i);
            const e = (new RegExp(/(?:^|:)(ID=[^\s:]+)/)).exec(c) ? .[1];
            d[1] = f => e ? aR(e)(f) : void 0
        }
        d = Xq(a, d);
        br(pI(P(nI), a, d))
    }

    function mR(a) {
        const b = P(Wq).g();
        a = JQ(a);
        return b.concat(a).join(",")
    }

    function nR(a) {
        const b = Em();
        b && (a.debug_experiment_id = b)
    };

    function oR(a, b) {
        if (a && !ZH(a).ads_density_stats_processed && !Jl(a) && (ZH(a).ads_density_stats_processed = !0, Q(Wv) || Td() < .01)) {
            const c = () => {
                if (a) {
                    var d = hM(cM(a), b.google_ad_client, a.location.hostname, mR(b).split(","));
                    UB("ama_stats", d, 1)
                }
            };
            Ce(a, () => {
                r.setTimeout(c, 1E3)
            })
        }
    };

    function pR(a, b, c, d, e, f = null) {
        if (e) {
            if (Q(yv)) var g = null;
            else try {
                g = e.getItem("google_ama_config")
            } catch (l) {
                g = null
            }
            try {
                var h = g ? tu(g) : null
            } catch (l) {
                h = null
            }
        } else h = null;
        a: {
            if (d) try {
                var k = tu(d);
                break a
            } catch (l) {
                cN(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            k = null
        }
        if (d = k) {
            if (e) {
                k = new It;
                A(d, 3, k);
                h = Eu(d ? .g() ? .i()) || 1;
                h = Date.now() + 864E5 * h;
                Number.isFinite(h) && Ch(k, 1, wg(Math.round(h)));
                k = vh(d);
                d.g() && (h = new Ht, g = d ? .g() ? .g(), h = ti(h, 23, g), g = d ? .g() ? .A(), h = ti(h, 12, g), A(k, 15, h));
                h = ai(k, gu, 1, Jh());
                for (g = 0; g < h.length; g++) Ch(h[g], 11);
                Ch(k,
                    22);
                if (Q(yv)) kN(a, e);
                else try {
                    e.setItem("google_ama_config", Gi(k))
                } catch (l) {
                    cN(a, {
                        lserr: 1
                    })
                }
            }
            e = iN(a, ai(d, St, 7, Jh()));
            k = {};
            Q(zv) || (k.Gk = z(d, au, 8) || new au);
            e && (k.ca = e);
            e && hN(e, 3) && (k.Vc = [1]);
            e = k;
            $H(a, 2) && (vl(5, [jh(d)]), c = dN(c), k = (k = e.ca) && ri(k, 4) || "", c.google_package = k, mN(a, b, d, e, new yt(["google-auto-placed"], c), f));
            return !0
        }
        h && (cN(a, {
            cfg: 1,
            cl: 1
        }), e != null && kN(a, e));
        return !1
    };

    function qR(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = Tl(a.g.da() || window);
        if (c.bottom <= 0 || c.bottom > d.height || c.right <= 0 || c.left >= d.width) return null;
        var e = rR(a, b, c, a.g.g.elementsFromPoint(wl(c.left + c.width / 2, c.left, c.right - 1), wl(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = rR(a, b, c, a.g.g.elementsFromPoint(wl(c.left + c.width / 2, c.left, c.right - 1), wl(c.top + 2, c.top, c.bottom - 1)), 2, e.Gb),
            g = rR(a, b, c, a.g.g.elementsFromPoint(wl(c.left + 2, c.left, c.right - 1), wl(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.Gb, ...f.Gb]);
        const h = rR(a, b, c, a.g.g.elementsFromPoint(wl(c.right - 1 - 2, c.left, c.right - 1), wl(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.Gb, ...f.Gb, ...g.Gb]);
        var k = sR(a, b, c),
            l = n => Xa(a.j, n.Ob) && Xa(a.A, n.hg) && Xa(a.i, n.Ph);
        e = Pa([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = Pa(k, l);
        k = [...e, ...l];
        f = c.left < -2 || c.right > d.width + 2;
        f = k.length > 0 || f;
        g = Ul(a.g.g);
        const m = new Fl(c.left, c.top, c.width, c.height);
        e = [...Ra(e, n => new Fl(n.Sc.left, n.Sc.top, n.Sc.width, n.Sc.height)), ...ib(Ra(l,
            n => Hl(m, n.Sc))), ...Pa(Hl(m, new Fl(0, 0, d.width, d.height)), n => n.top >= 0 && n.top + n.height <= d.height)];
        return {
            entries: k,
            Ah: f,
            bi: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            Gc: c,
            oi: {
                width: d.width,
                height: d.height
            },
            wk: e.length < 20 ? tR(m, e) : uR(c, e)
        }
    }

    function vR(a, b) {
        const c = a.g.da(),
            d = a.g.g;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new Om,
                                        m = Nm(l, () => qR(a, k));
                                    m && (l.i.length && (m.Aj = Math.round(Number(l.i[0].duration))), h.disconnect(), e(m))
                                }, wR);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function rR(a, b, c, d, e, f) {
        if (c.width === 0 || c.height === 0) return {
            entries: [],
            Gb: []
        };
        const g = [],
            h = [];
        for (let m = 0; m < d.length; m++) {
            const n = d[m];
            if (n === b) continue;
            if (Xa(f, n)) continue;
            h.push(n);
            const p = n.getBoundingClientRect();
            if (a.g.contains(n, b)) {
                g.push(xR(a, c, n, p, 1, e));
                continue
            }
            if (a.g.contains(b, n)) {
                g.push(xR(a, c, n, p, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b;
                const t = k.g.Fj(l, n);
                if (!t) {
                    k = null;
                    break a
                }
                const {
                    Ia: C,
                    hc: I
                } = yR(k, l, t, n) || {},
                {
                    Ia: V,
                    hc: N
                } = yR(k, n, t, l) || {};k = C && I && V && N ? I <= N ? {
                    Ia: C,
                    Ob: zR[I]
                } : {
                    Ia: V,
                    Ob: AR[N]
                } : C && I ? {
                    Ia: C,
                    Ob: zR[I]
                } : V && N ? {
                    Ia: V,
                    Ob: AR[N]
                } : null
            }
            const {
                Ia: w,
                Ob: v
            } = k || {};
            w && v ? g.push(xR(a, c, n, p, v, e, w)) : g.push(xR(a, c, n, p, 9, e))
        }
        return {
            entries: g,
            Gb: h
        }
    }

    function sR(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = Sd(b, a.g.da());
                e && e.overflow !== "visible" && (e.overflowY !== "auto" && e.overflowY !== "scroll" && c.bottom > f.bottom + 2 ? d.push(xR(a, c, b, f, 5, 1)) : (e = e.overflowX === "auto" || e.overflowX === "scroll", !e && c.left < f.left - 2 ? d.push(xR(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(xR(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function tR(a, b) {
        if (a.width === 0 || a.height === 0 || b.length === 0) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Gl(e, b[g]), e)); g++);
            e && (c = f % 2 === 1 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function uR(a, b) {
        if (a.width === 0 || a.height === 0 || b.length === 0) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function xR(a, b, c, d, e, f, g) {
        g = {
            element: c,
            Sc: d,
            Ob: e,
            Ph: f,
            hg: null,
            Ia: g || null
        };
        if (Xa(a.j, e) && Xa(a.i, f)) {
            b = new Al(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = BR(a, c)) && Cl(b, a)) c = 4;
            else {
                a = CR(c, d);
                e = im(c, "paddingLeft");
                f = im(c, "paddingRight");
                const h = im(c, "paddingTop"),
                    k = im(c, "paddingBottom");
                e = new Al(parseFloat(h), parseFloat(f), parseFloat(k), parseFloat(e));
                Cl(b, new Al(a.top + e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = CR(c, d), c = Cl(b, c) ? 2 : 1)
            }
            g.hg = c
        }
        return g
    }

    function yR(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.g.da();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = Sd(h, c);
            if (g) {
                if (g.position === "fixed") return {
                    Ia: h,
                    hc: 1
                };
                if (g.position === "sticky" && a.g.contains(h.parentElement, d)) return {
                    Ia: h,
                    hc: 2
                };
                if (g.position === "absolute") return {
                    Ia: h,
                    hc: 3
                };
                if (g.cssFloat !== "none") {
                    g = h === e[0];
                    const k = DR(a, e.slice(0, f), h);
                    if (g || k) return {
                        Ia: h,
                        hc: 4
                    }
                }
            }
        }
        return (a = DR(a, e, b)) ? {
            Ia: a,
            hc: 5
        } : null
    }

    function DR(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.g.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = Sd(f, a.g.da());
            if (h && d.bottom > g.bottom + 2 && h.overflowY === "visible") return f
        }
        return null
    }

    function BR(a, b) {
        var c = a.g.g;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => d.nodeValue === null || /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return a.width === 0 || a.height === 0 ? null : new Al(a.top, a.right, a.bottom, a.left)
    }

    function CR(a, b) {
        var c = im(a, "borderLeftWidth");
        const d = im(a, "borderRightWidth"),
            e = im(a, "borderTopWidth");
        a = im(a, "borderBottomWidth");
        c = new Al(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c));
        return new Al(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    var FR = class {
        constructor(a) {
            var b = ER;
            this.j = [5, 8, 9];
            this.A = [3, 4];
            this.i = b;
            this.g = Ql(a)
        }
    };
    const ER = [1, 2, 3, 4],
        zR = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        AR = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        },
        wR = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function GR(a) {
        a.i != null || a.A || (a.i = new MutationObserver(b => {
            for (const c of b)
                for (const d of c.addedNodes) ra(d) && d.nodeType == 1 && (b = a, d.matches('A[href]:not([href=""])') && is(b.j, d))
        }), a.i.observe(a.B.document.documentElement, {
            childList: !0,
            subtree: !0
        }))
    }
    var HR = class extends R {
        constructor(a) {
            super();
            this.B = a;
            this.j = new js;
            this.i = null;
            Rr(this, () => {
                this.i ? .disconnect();
                this.i = null
            })
        }
    };

    function IR(a, b) {
        b.addEventListener("click", () => {
            var c = a.g;
            var d = b.getAttribute("href");
            c = d ? d === "#" ? $s(Co(4)) : d.startsWith("#") ? $s(Co(5)) : JR(d, c) : bt(Error("Empty href"));
            if (dt(c)) {
                d = c.getValue();
                c = a.U;
                var e = new Eo;
                d = A(e, 1, d);
                c.call(a, d)
            } else a.i(c.g)
        })
    }
    var LR = class {
        constructor(a, b, c) {
            var d = KR();
            this.B = a;
            this.g = b;
            this.U = c;
            this.i = d
        }
        init() {
            const a = new HR(this.B);
            Array.from(a.B.document.querySelectorAll('A[href]:not([href=""])')).forEach(b => {
                IR(this, b)
            });
            GR(a);
            gs(a.j).listen(b => {
                IR(this, b)
            })
        }
    };

    function JR(a, b) {
        return MR(a, b).map(c => MR(b).map(d => {
            if (c.protocol === "http:" || c.protocol === "https:") {
                var e = Co(2);
                e = zi(e, 2, `${c.host}${c.pathname}`);
                d = zi(e, 3, `${d.host}${d.pathname}`)
            } else d = c.protocol === "javascript:" ? Co(3) : Co(1);
            return d
        }))
    }

    function MR(a, b) {
        return gt(ct(() => new URL(a, b)), () => Error("Invalid URL"))
    };

    function NR(a) {
        if (a < 0 || !Number.isInteger(a)) return bt(Error(`Not a non-negative integer: ${a}`));
        const b = [];
        do b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a % 64)), a = Math.floor(a / 64); while (a > 0);
        return $s(b.reverse().join(""))
    };
    class OR {
        constructor() {
            this.xi = 5E3
        }
        gj() {
            return 5E3
        }
    }

    function PR(a, b) {
        return a.quantizer ? Math.floor(b / 5E3) * 5E3 / a.quantizer.xi : b
    }

    function QR(a, b) {
        b = b.map(c => PR(a, c));
        return RR(b, a.g === void 0 ? void 0 : PR(a, a.g)).map(c => {
            a: {
                var d = SR;
                const e = [];
                for (const f of c) {
                    c = d(f);
                    if (!dt(c)) {
                        d = bt(c.g);
                        break a
                    }
                    e.push(c.getValue())
                }
                d = $s(e)
            }
            return d
        }).map(c => c.join(".")).map(c => TR(c, a.quantizer ? .gj()))
    }
    var UR = class {
        constructor(a, b) {
            this.quantizer = a;
            this.g = b
        }
    };

    function SR(a) {
        const b = NR(a.value);
        if (!dt(b)) return b;
        const c = b.getValue();
        return a.Be === 1 ? $s(`${c}`) : a.Be === 2 ? $s(`${c}${"~"}`) : it(NR(a.Be - 2), d => {
            throw d;
        }).map(d => `${c}${"~"}${d}`)
    }

    function RR(a, b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            const e = a[d] ? ? b;
            if (e === void 0) return bt(Error("Sparse but no default"));
            c.length === 0 || e !== c[c.length - 1].value ? c.push({
                value: e,
                Be: 1
            }) : c[c.length - 1].Be++
        }
        return $s(c)
    }

    function TR(a, b) {
        return a === "" ? $s("") : VR(b).map(c => `${c}${a}`)
    }

    function VR(a) {
        return a === void 0 || a === 1 ? $s("") : ht(NR(a), "ComFactor: ").map(b => `${"~"}${b}${"."}`)
    };
    var WR = class extends R {
        constructor(a) {
            super();
            this.B = a;
            this.j = new S(!1);
            this.i = () => {
                this.j.g(this.B.document.hasFocus())
            }
        }
        init() {
            this.B.addEventListener("focus", this.i);
            this.B.addEventListener("blur", this.i);
            Rr(this, () => void this.B.removeEventListener("focus", this.i));
            Rr(this, () => void this.B.removeEventListener("blur", this.i));
            this.j.g(this.B.document.hasFocus())
        }
    };

    function YR(a) {
        a.j.g(a.B.document.visibilityState === "visible")
    }
    var ZR = class extends R {
        constructor(a) {
            super();
            this.B = a;
            this.j = new S(!1);
            this.i = () => void YR(this)
        }
        init() {
            this.B.addEventListener("visibilitychange", this.i);
            Rr(this, () => void this.B.removeEventListener("visibilitychange", this.i));
            YR(this)
        }
    };

    function $R(a) {
        return a.g !== null ? a.i + a.j() - a.g : a.i
    }
    var bS = class {
        constructor(a) {
            this.B = a;
            this.i = 0;
            this.g = null;
            this.j = aS(this.B)
        }
        start() {
            this.g === null && (this.g = this.j())
        }
    };

    function aS(a) {
        return a.performance && a.performance.now ? () => a.performance.now() : () => Date.now()
    };

    function cS(a) {
        a = new dS(a);
        a.init();
        return a
    }

    function eS(a) {
        const b = us(a.B, 1E3, () => void a.handleEvent());
        a.B.addEventListener("scroll", () => void b())
    }

    function fS(a) {
        const b = gS(a.B),
            c = () => {
                const d = gS(a.B),
                    e = Math.abs(d.height - b.height);
                if (Math.abs(d.width - b.width) > 20 || e > 20) a.G = !0, a.B.removeEventListener("resize", c)
            };
        a.B.addEventListener("resize", c)
    }

    function hS(a) {
        a.A = !a.g.O;
        bs(a.g, !1, () => {
            a.B.setTimeout(() => {
                a.A = !0
            }, 100)
        })
    }

    function iS(a) {
        as(a.g, !0, () => void a.j.start());
        as(a.g, !1, () => {
            var b = a.j;
            b.g !== null && (b.i += b.j() - b.g);
            b.g = null
        });
        a.D.start()
    }

    function jS(a) {
        var b = a.B.scrollY;
        var c = nr(a.B);
        b = {
            Ie: Math.floor(b / 100),
            Md: Math.floor((b + c) / 100),
            ii: a.B.performance.now()
        };
        if (b.Ie < 0 || b.Md < 0 || b.Ie > 1E3 || b.Md > 1E3) a.H = !0, a.i = null;
        else {
            if (a.i) {
                c = a.i;
                var d = new dG(c.Ie, c.Md),
                    e = new dG(b.Ie, b.Md);
                var f = Math.max(d.start, e.start);
                d = Math.min(d.end, e.end);
                if (f = f <= d ? new dG(f, d) : null)
                    for (c = b.ii - c.ii, d = f.start; d <= f.end; d++) a.C[d] = (a.C[d] ? ? 0) + c
            }
            a.i = a.l.O ? b : null
        }
    }
    var dS = class {
        constructor(a) {
            this.B = a;
            this.C = [];
            this.G = this.A = this.H = !1;
            this.i = null;
            var b = this.B;
            a = new WR(b);
            a.init();
            a = Yr(a.j);
            b = new ZR(b);
            b.init();
            b = Yr(b.j);
            this.l = this.g = Xr(a, b);
            this.j = new bS(this.B);
            this.D = new bS(this.B);
            this.J = new UR((new UR(new OR)).quantizer, 0)
        }
        init() {
            eS(this);
            fS(this);
            hS(this);
            iS(this);
            this.l.listen(() => void jS(this));
            r.setInterval(() => void this.handleEvent(), 5E3);
            this.handleEvent()
        }
        handleEvent() {
            this.l.O && jS(this)
        }
    };

    function gS(a) {
        return new Dl(mr(a), nr(a))
    };

    function kS(a, {
        Ha: b
    }) {
        a = new lS(a, b);
        if (!a.Ha && Q(aw)) {
            b = a.B;
            var c = mS(nS(a));
            (new LR(b, b.document.baseURI, c)).init()
        }
        oS(a)
    }

    function oS(a) {
        if (Q(bw)) {
            var b = cS(a.B);
            Rq(new eI(a.B), pS(() => {
                var c = nS(a),
                    d = new Ho,
                    e = QR(b.J, b.C);
                if (!dt(e)) throw ht(e, "PVDC: ").g;
                var f = new Go;
                f = wi(f, 2, 5E3);
                f = wi(f, 1, 100);
                e = e.getValue();
                e = zi(f, 3, e);
                f = gS(b.B);
                var g = new Fo;
                g = wi(g, 1, f.width);
                f = wi(g, 2, f.height);
                e = A(e, 4, f);
                f = new Fo;
                f = wi(f, 1, rr(b.B).scrollWidth);
                f = wi(f, 2, rr(b.B).scrollHeight);
                e = A(e, 5, f);
                e = ui(e, 6, b.A);
                f = Math.round($R(b.D) / 1E3);
                e = wi(e, 8, f);
                f = Math.round($R(b.j) / 1E3);
                e = wi(e, 9, f);
                b.H && ei(e, 7, kg, 1, lg);
                b.G && ei(e, 7, kg, 2, lg);
                d = ci(d, 2, Io, e);
                c(d)
            }))
        }
    }

    function nS(a) {
        if (!a.U) {
            const b = P(nI);
            a.U = c => {
                uI(b, c)
            }
        }
        return a.U
    }
    var lS = class {
        constructor(a, b) {
            this.B = a;
            this.Ha = b;
            this.U = null
        }
    };

    function mS(a) {
        return b => {
            var c = new Ho;
            b = ci(c, 1, Io, b);
            return void a(b)
        }
    }

    function KR() {
        return a => {
            VB(1243, a, void 0, qS("LCC"))
        }
    }

    function pS(a) {
        return () => void RB(1243, a, qS("PVC"))
    }

    function qS(a) {
        return b => {
            b.errSrc = a
        }
    };
    var rS = class extends R {
        constructor(a, b) {
            super();
            this.value = a;
            Rr(this, b)
        }
    };

    function sS(a, b) {
        const c = tS(a.getBoundingClientRect()),
            d = new S(c),
            e = uS(a, b, f => {
                d.g(tS(f.boundingClientRect))
            });
        return new rS(Yr(d), () => void e.disconnect())
    }

    function uS(a, b, c) {
        b = new IntersectionObserver(d => {
            d.filter(e => e.target === a).forEach(c)
        }, {
            root: b
        });
        b.observe(a);
        return b
    }

    function tS(a) {
        return a.height > 0 || a.width > 0
    };
    var vS = {
        yn: 0,
        Ho: 1,
        lo: 2,
        0: "INITIAL_RENDER",
        1: "UNRENDER",
        2: "RENDER_BACK"
    };

    function wS(a, b, c) {
        var d = [1, 2];
        const e = sS(b, c),
            f = e.value,
            g = new js;
        bs(f, !0, () => void xS(a, f, g, d));
        return new rS(gs(g), () => void e.dispose())
    }

    function xS(a, b, c, d) {
        const e = new bS(a);
        let f = new bS(a);
        e.start();
        f.start();
        let g = 0;
        const h = k => {
            k = {
                type: k,
                Nh: ++g,
                nk: $R(f),
                mk: $R(e)
            };
            f = new bS(a);
            f.start();
            return k
        };
        d && !d.includes(0) || is(c, h(0));
        b.listen(k => {
            k = k ? 2 : 1;
            d && !d.includes(k) || is(c, h(k))
        })
    };

    function yS(a, b) {
        var c = P(nI);
        RB(1282, () => void zS(a, b, c))
    }

    function zS(a, b, c) {
        const d = AS(a);
        if (!d) throw Error("No adsbygoogle INS found");
        const e = wS(a.pubWin, b, d);
        e.value.listen(f => {
            BS(f, d, c, () => void e.dispose())
        })
    }

    function AS(a) {
        return (a = a.ba.parentElement) && Yx.test(a.className) ? a : null
    }

    function BS(a, b, c, d) {
        if (a.Nh > 5) d();
        else {
            var e = a.type === 1;
            d = a.type === 2;
            if (!e && !d) throw Error(`Unsupported event type: ${vS[a.type]}`);
            var f = Fi(zQ());
            f = Ch(f, 1, wg(a.nk));
            f = Ch(f, 2, wg(a.mk));
            a = Ch(f, 3, wg(a.Nh));
            f = b.dataset.vignetteLoaded;
            var g = Fi(xQ());
            g = yi(g, 1, b.dataset.adStatus);
            g = yi(g, 2, b.dataset.sideRailStatus);
            g = yi(g, 3, b.dataset.anchorStatus);
            f = ti(g, 4, f !== void 0 ? f === "true" : void 0);
            b = getComputedStyle(b);
            g = Fi(AQ());
            g = yi(g, 1, b.display);
            g = yi(g, 2, b.position);
            g = yi(g, 3, b.width);
            b = yi(g, 4, b.height);
            b = wh(b);
            b = A(f, 5, b);
            b = wh(b);
            a = A(a, 4, b);
            e = e ? BQ() : void 0;
            e = ci(a, 5, xn, e);
            d = d ? yQ() : void 0;
            d = ci(e, 6, xn, d);
            d = Hi(Fi(wh(d)));
            wI(c, d)
        }
    };
    var CS = class extends Error {
        constructor(a) {
            super(a)
        }
    };
    class DS {
        constructor() {
            this.g = !1
        }
    }

    function ES(a, b) {
        a.g || (a.g = !0, a.A = b, a.i.resolve(b))
    }
    class FS extends DS {
        constructor() {
            super(...arguments);
            this.i = new rQ
        }
        get promise() {
            return this.i.promise
        }
        get Yh() {
            return this.g
        }
        get error() {
            return this.j
        }
    }
    var GS = class extends FS {
        setError(a, b) {
            this.g || (this.g = !0, this.A = null, this.j = a, b && b(this.j), this.i.reject(a))
        }
    };
    class HS extends DS {
        constructor(a) {
            super();
            this.i = a
        }
        get error() {
            return this.i.j
        }
        Yh() {
            return this.i.g
        }
    }
    var IS = class extends HS {
            constructor(a) {
                super(a);
                this.i = a
            }
            get value() {
                return this.i.A ? ? null
            }
        },
        JS = class extends FS {
            notify() {
                ES(this, null)
            }
        };

    function KS(a, b) {
        a.i.push({
            Dd: !1,
            rf: b
        })
    }
    var LS = class extends R {
        constructor() {
            super(...arguments);
            this.j = [];
            this.i = [];
            this.l = []
        }
        Dd(a) {
            const b = this.i.find(c => c.rf === a);
            b && (b.Dd = !0)
        }
        g() {
            this.j.length = 0;
            this.l.length = 0;
            this.i.length = 0;
            super.g()
        }
    };
    async function MS(a, b) {
        const c = b ? a.filter(d => !d.Dd) : a;
        q(await q(Promise.all(c.map(({
            rf: d
        }) => d.promise))));
        a.length !== c.length && (a = a.filter(d => d.Dd), q(await q(Promise.race([Promise.all(a.map(({
            rf: d
        }) => d.promise)), new Promise(d => void setTimeout(d, b))]))))
    }
    var OS = class extends R {
        constructor(a, b) {
            super();
            this.id = a;
            this.D = b;
            this.timeoutMs = void 0;
            this.l = !1;
            this.i = new LS;
            Qr(this, this.i)
        }
        async start() {
            if (!this.l) {
                this.l = !0;
                try {
                    if (q(await q(MS(this.i.i, this.M ? ? this.timeoutMs))), !this.A) {
                        var a = 0;
                        for (const d of this.i.l) {
                            if (d.i.A == null) throw Error(`missing input: ${this.id}/${a}`);
                            ++a
                        }
                        var b = this.f;
                        a = {};
                        for (const [d, e] of Object.entries(this.G)) a[d] = e.value;
                        const c = b.call(this, a, ...this.J);
                        NS(this, c)
                    }
                } catch (c) {
                    this.A || (c instanceof CS ? this.C(c) : c instanceof Error &&
                        (this.D.be({
                            methodName: this.id,
                            Gd: c
                        }), this.j(c)))
                }
            }
        }
        C() {}
        j(a) {
            if (this.i.j.length) {
                var b = new CS(a.message);
                for (const e of this.i.j)
                    if (!e.Yh) {
                        var c = e,
                            d = b;
                        c.g = !0;
                        c.j = d;
                        c.i.reject(d)
                    }
            }
            a instanceof CS || console ? .error(a)
        }
    };

    function PS(a, b) {
        if (a.l) throw Error("Invalid operation: producer has already started");
        KS(a.i, b);
        return a
    }
    var QS = class extends OS {
        constructor(a, b, c, d, e) {
            super(a, c);
            this.f = b;
            this.J = e;
            a = {};
            for (const [f, g] of Object.entries(d))
                if (d = g) KS(this.i, d), a[f] = new IS(d);
            this.G = a
        }
        C(a) {
            this.j(a)
        }
        reportError() {}
    };

    function NS(a, b) {
        for (const [c, d] of Object.entries(b)) {
            b = c;
            const e = d;
            e instanceof Error && a[b].setError(e);
            ES(a[b], e)
        }
        a.finished.notify()
    }
    class RS extends QS {
        constructor(a, b, c, d, e, f, g) {
            super(a, b, c, d, g);
            this.eb = f;
            this.finished = new JS;
            a = Object.keys(e);
            for (const h of a) a = new GS, this.i.j.push(a), this[h] = a
        }
        j(a) {
            this.eb ? NS(this, this.eb(a)) : super.j(a)
        }
    }

    function SS(a, b) {
        a.id = b.id;
        a.Nb = b.Nb;
        a.eb = b.eb;
        return a
    }

    function TS(a, b, c, ...d) {
        return new RS(a.id, a, b, c, a.Nb, a.eb, d)
    };
    var US = SS(function(a, b, c, d) {
        const e = a.Da,
            f = a.Z,
            g = a.pageState;
        a = g.g();
        const h = b(e, f, ii(a, 1), a.g(), D(a, 9));
        d.google_sa_impl = k => c({
            Z: f,
            La: h,
            Da: e,
            slot: k,
            pageState: g
        });
        d.google_process_slots ? .();
        return {}
    }, {
        id: 1338,
        Nb: {}
    });

    function VS({
        Ug: a,
        di: b
    }) {
        return a || (b === "dev" ? "dev" : "")
    };

    function WS(a) {
        OB.j(b => {
            b.shv = String(a);
            b.mjsv = VS({
                Ug: Qp(),
                di: a
            });
            b.eid = mR(r)
        })
    };
    var XS = SS(function(a, b) {
        a = a.pageState ? .g() ? .g() || D(a.Z, 2);
        WS(a);
        eR(WQ(b));
        return {}
    }, {
        id: 1337,
        Nb: {}
    });
    var YS = SS(function(a, b) {
        let c = null;
        c = c ? ? new Tq(b);
        try {
            bf(d => {
                FB(c, 1192, d)
            })
        } catch (d) {}
        return {}
    }, {
        id: 1335,
        Nb: {}
    });
    var Yh = class extends H {
        g() {
            return B(this, 1)
        }
    };

    function ZS(a) {
        return B(a, 4)
    }

    function $S(a) {
        return gi(a, 4) != null
    }

    function aT(a) {
        return B(a, 6)
    }

    function bT(a) {
        return gi(a, 6) != null
    }

    function cT(a) {
        return D(a, 8)
    }
    var dT = class extends H {
        g() {
            return D(this, 3)
        }
    };
    var eT = class extends H {
            g() {
                return Zh(this, dT, 1)
            }
        },
        fT = tk(eT);
    var gT = class extends H {
        g() {
            return D(this, 1)
        }
    };
    var UQ = class extends H {
        i() {
            return D(this, 1)
        }
        A() {
            return z(this, gT, 2)
        }
        g() {
            return B(this, 3)
        }
    };
    var hT = class extends H {
        i() {
            return B(this, 1)
        }
        g() {
            return z(this, hu, 2)
        }
    };
    var iT = class extends H {},
        VQ = [27, 28];
    var jT = typeof sttc === "undefined" ? void 0 : sttc;
    var kT = SS(function(a, b, c, d) {
        try {
            const g = c.adsbygoogle.pageState;
            mb(g);
            var e = fT(g)
        } catch (g) {
            e = new eT
        }
        a = e;
        c = a.g();
        a: {
            e = OB;
            try {
                if (mb(b), b.length > 0) {
                    var f = new iT(JSON.parse(b));
                    break a
                }
            } catch (g) {
                e.na(838, g instanceof Error ? g : Error(String(g)))
            }
            f = new iT
        }
        b = f;
        vl(16, [3, jh(b)]);
        d = VS({
            Ug: d,
            di: c.g() || D(b, 2)
        });
        return {
            pageState: a,
            Z: b,
            Da: d
        }
    }, {
        id: 1336,
        Nb: {
            pageState: void 0,
            Z: void 0,
            Da: void 0
        }
    });
    var lT = SS(function(a, b) {
        a = (b.Prototype || {}).Version;
        a != null && UB("prtpjs", {
            version: a
        });
        return {}
    }, {
        id: 1339,
        Nb: {}
    });

    function mT(a, b, c, ...d) {
        b = TS(b, a.J, c, ...d);
        Qr(a, b);
        a.l.push(b);
        return b
    }
    async function nT(a) {
        a.i.length && q(await q(Promise.all(a.i.map(d => d.C.promise))));
        for (var b of a.l) b.start();
        for (var c of a.G) nT(c);
        if (a.j && (b = Object.keys(a.j), b.length)) {
            c = q(await q(Promise.all(Object.values(a.j).map(e => e.promise))));
            let d = 0;
            for (const e of b) a.D[e] = c[d++]
        }
        a.C.resolve(a.D)
    }
    var oT = class extends R {
        constructor(a) {
            super();
            this.J = a;
            this.l = [];
            this.G = [];
            this.D = {};
            this.i = [];
            this.C = new rQ;
            this.j = {}
        }
        run() {
            nT(this)
        }
        g() {
            super.g();
            this.l.length = 0;
            this.G.length = 0;
            this.i.length = 0
        }
    };

    function pT(a, b, c) {
        var d = OB,
            e = qT;
        const f = new oT({
                be: m => {
                    const n = m.Gd;
                    d.na(m.methodName ? ? 0, n instanceof Error ? n : Error(String(n)))
                }
            }),
            g = mT(f, YS, {}, b),
            {
                pageState: h,
                Z: k,
                Da: l
            } = PS(mT(f, kT, {}, a, r, b), g.finished);
        a = mT(f, XS, {
            Z: k,
            pageState: h
        }, r);
        c = PS(mT(f, US, {
            Da: l,
            Z: k,
            pageState: h
        }, c, e, r), a.finished);
        PS(mT(f, lT, {}, r), c.finished);
        f.run()
    };
    var sT = a => {
        const b = a.F;
        b.google_ad_output == null && (b.google_ad_output = "html");
        b.google_ad_client != null && (b.google_ad_client = vm(String(b.google_ad_client)));
        b.google_ad_slot != null && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!bl.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        const c = (new Date).getTime();
        Array.isArray(b.google_color_bg) && (b.google_color_bg = rT(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) &&
            (b.google_color_text = rT(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = rT(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = rT(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = rT(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = rT(a, b.google_color_line, c))
    };

    function rT(a, b, c) {
        a.g |= 2;
        return b[c % b.length]
    };
    const tT = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    Jd `https://securepubads.g.doubleclick.net/pagead/js/car.js`;
    Jd `https://securepubads.g.doubleclick.net/pagead/js/cocar.js`;
    var uT = Jd `https://ep3.adtrafficquality.google/ivt/worklet/caw.js`;

    function vT(a) {
        const b = [];
        for (let c = 0; c < 8; ++c) {
            const d = new OP(f => {
                    b.push({
                        url: f
                    })
                }),
                e = Kp(Jp(Ip(new Lp, a), c));
            d.D(e)
        }
        return b
    }

    function wT(a, b = () => {}) {
        var c = uT;
        const d = window;
        d.sharedStorage && !d.clientAgeRequested && (d.sharedStorage.createWorklet(c.toString(), {
            dataOrigin: "script-origin"
        }).then(e => {
            xT(e, d, a, b)
        }).catch(b), d.clientAgeRequested = !0)
    }

    function xT(a, b, c, d = () => {}) {
        a.selectURL("ps_caus", vT(c), {
            resolveToConfig: !0,
            savedQuery: "ps_cac"
        }).then(e => {
            if (e) {
                var f = b.document.body;
                const g = document.createElement("fencedframe");
                g.id = "ps_caff";
                g.name = "ps_caff";
                g.mode = "opaque-ads";
                g.config = e;
                em(g, "display", "none");
                f.appendChild(g)
            }
        }).catch(d)
    };

    function yT(a, b) {
        const c = $Q(a.isSecureContext, a, a.document),
            d = !!a.sharedStorage ? .createWorklet;
        b && c && d && !SH(NH(), 34, !1) && (TH(NH(), 34, !0), wT(Be(a), e => {
            VB(1279, e)
        }))
    };
    const zT = (a, b) => {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        AT = (a, b) => {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        BT = {
            ce: a => a.listener,
            hd: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }
            }),
            Ac: (a, b) => {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        CT = {
            ce: a => a.listener,
            hd: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }
            }),
            Ac: (a, b) => {
                b = b.__gppReturn;
                const c = b.returnValue.data;
                a ? .(c, b.success)
            }
        };

    function DT(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            jg: b.__gppReturn.callId
        }
    }

    function ET(a, b, c) {
        let d = !(b.includes(2) && c ? .idpcApplies),
            e = !1,
            f = !1,
            g = !1;
        if (a && !a.startsWith("GPP_ERROR_STRING_")) {
            const $W = dO(a.split("~")[0]),
                aX = ZN(a),
                Bz = li($W, 3);
            for (let el = 0; el < Bz.length; ++el) {
                const Cz = Bz[el];
                if (!b.includes(Cz)) continue;
                const cb = aX[el];
                switch (Cz) {
                    case 2:
                        if (c ? .supportTcfeu) {
                            a: {
                                const Y = KP(cb);
                                if (!Y || !cb) {
                                    var h = null;
                                    break a
                                }
                                const Sa = z(Y, uP, 1),
                                    fl = z(Y, YO, 2) || new YO;
                                var k = ii(Sa, 9),
                                    l = ii(Sa, 4),
                                    m = ii(Sa, 5),
                                    n = B(Sa, 10),
                                    p = B(Sa, 11),
                                    w = D(Sa, 16),
                                    v = B(Sa, 15),
                                    t = {
                                        consents: LP(ni(Sa, 13), xP),
                                        legitimateInterests: LP(ni(Sa,
                                            14), xP)
                                    },
                                    C = {
                                        consents: LP(li(Sa, 17)),
                                        legitimateInterests: LP(li(Sa, 18))
                                    },
                                    I = LP(ni(Sa, 12), yP),
                                    V = ai(Sa, TO, 19, Jh());
                                const gl = {};
                                for (const Tp of V) {
                                    const Up = F(Tp, 1);
                                    gl[Up] = gl[Up] || {};
                                    for (const bX of li(Tp, 3)) gl[Up][bX] = F(Tp, 2)
                                }
                                h = {
                                    tcString: cb,
                                    tcfPolicyVersion: k,
                                    gdprApplies: !0,
                                    cmpId: l,
                                    cmpVersion: m,
                                    isServiceSpecific: n,
                                    useNonStandardStacks: p,
                                    publisherCC: w,
                                    purposeOneTreatment: v,
                                    purpose: t,
                                    vendor: C,
                                    specialFeatureOptins: I,
                                    publisher: {
                                        restrictions: gl,
                                        consents: LP(ni(fl, 1), xP),
                                        legitimateInterests: LP(ni(fl, 2), xP),
                                        customPurposes: {
                                            consents: LP(li(fl,
                                                3)),
                                            legitimateInterests: LP(li(fl, 4))
                                        }
                                    }
                                }
                            }
                            const aa = h;
                            if (!aa) throw Error("Cannot decode TCF V2 section string.");d = VI(aa);!YI(aa, ["3", "4"], 0) && (e = !0);!YI(aa, ["2", "7", "9", "10"], 3) && (f = !0)
                        }
                        break;
                    case 7:
                        if (cb.length === 0) throw Error("Cannot decode empty USNat section string.");
                        const Bi = cb.split(".");
                        if (Bi.length > 2) throw Error(`Expected at most 2 segments but got ${Bi.length} when decoding ${cb}.`);
                        var N = void 0,
                            O = void 0,
                            J = void 0,
                            Ka = void 0,
                            lb = void 0,
                            sa = void 0,
                            Ca = void 0,
                            Gb = void 0,
                            va = void 0,
                            Qb = void 0,
                            Dc = void 0,
                            la = void 0,
                            hc = void 0,
                            Je = void 0,
                            Hd = void 0,
                            Ke = void 0,
                            xf = void 0,
                            yf = void 0,
                            Hb = void 0,
                            Le = void 0,
                            ld = void 0,
                            ce = void 0,
                            zf = void 0,
                            Af = void 0,
                            Id = void 0,
                            Me = void 0,
                            Bf = void 0,
                            Mg = void 0,
                            Cf = void 0,
                            Rc = void 0,
                            de = Bi[0];
                        if (de.length === 0) throw Error("Cannot decode empty core segment string.");
                        let hl = cO(de, OO);
                        const Vp = aO(hl.slice(0, 6));
                        hl = hl.slice(6);
                        if (Vp !== 1) throw Error(`Unable to decode unsupported USNat Section specification version ${Vp} - only version 1 is supported.`);
                        let Wp = 0;
                        const za = [];
                        for (let aa = 0; aa < NO.length; aa++) {
                            const Y =
                                NO[aa];
                            za.push(aO(hl.slice(Wp, Wp + Y)));
                            Wp += Y
                        }
                        var Sc = new JO;
                        Rc = wi(Sc, 1, Vp);
                        var Df = za.shift();
                        Cf = G(Rc, 2, Df);
                        var ic = za.shift();
                        Mg = G(Cf, 3, ic);
                        var Ef = za.shift();
                        Bf = G(Mg, 4, Ef);
                        var Ec = za.shift();
                        Me = G(Bf, 5, Ec);
                        var Ng = za.shift();
                        Id = G(Me, 6, Ng);
                        var ee = za.shift();
                        Af = G(Id, 7, ee);
                        var fe = za.shift();
                        zf = G(Af, 8, fe);
                        var jc = za.shift();
                        ce = G(zf, 9, jc);
                        var xa = za.shift();
                        ld = G(ce, 10, xa);
                        var ge = new IO,
                            Og = za.shift();
                        Le = G(ge, 1, Og);
                        var Ne = za.shift();
                        Hb = G(Le, 2, Ne);
                        var Oe = za.shift();
                        yf = G(Hb, 3, Oe);
                        var Ff = za.shift();
                        xf = G(yf, 4, Ff);
                        var kc =
                            za.shift();
                        Ke = G(xf, 5, kc);
                        var md = za.shift();
                        Hd = G(Ke, 6, md);
                        var Rb = za.shift();
                        Je = G(Hd, 7, Rb);
                        var Sb = za.shift();
                        hc = G(Je, 8, Sb);
                        var Gf = za.shift();
                        la = G(hc, 9, Gf);
                        var Pe = za.shift();
                        Dc = G(la, 10, Pe);
                        var Hf = za.shift();
                        Qb = G(Dc, 11, Hf);
                        var E = za.shift();
                        va = G(Qb, 12, E);
                        Gb = A(ld, 11, va);
                        var da = new HO,
                            qa = za.shift();
                        Ca = G(da, 1, qa);
                        var Qa = za.shift();
                        sa = G(Ca, 2, Qa);
                        lb = A(Gb, 12, sa);
                        var Aa = za.shift();
                        Ka = G(lb, 13, Aa);
                        var Oa = za.shift();
                        J = G(Ka, 14, Oa);
                        var Qe = za.shift();
                        O = G(J, 15, Qe);
                        var If = za.shift();
                        const Dz = N = G(O, 16, If);
                        if (Bi.length ===
                            1) var he = LO(Dz);
                        else {
                            var nd = LO(Dz),
                                Jf = void 0,
                                ie = void 0,
                                Re = void 0,
                                od = Bi[1];
                            if (od.length === 0) throw Error("Cannot decode empty GPC segment string.");
                            const aa = cO(od, 3),
                                Y = aO(aa.slice(0, 2));
                            if (Y < 0 || Y > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Y}.`);
                            Re = Y + 1;
                            const Sa = aO(aa.charAt(2));
                            var Pg = new KO;
                            ie = G(Pg, 2, Re);
                            Jf = ui(ie, 1, !!Sa);
                            he = A(nd, 2, Jf)
                        }
                        const Ez = he,
                            il = pb(z(Ez, JO, 1)),
                            cX = z(il, HO, 12);
                        F(il, 8) !== 1 && F(il, 9) !== 1 && F(il, 10) !== 1 && cX ? .g() !== 1 || (e = !0);
                        var Qg = pb(z(Ez, JO, 1));
                        const Fz =
                            z(Qg, HO, 12) ? .i();
                        Fz !== 1 && Fz !== 2 || (g = !0);
                        break;
                    case 8:
                        if (cb.length === 0) throw Error("Cannot decode empty USCA section string.");
                        const Ci = cb.split(".");
                        if (Ci.length > 2) throw Error(`Expected at most 1 sub-section but got ${Ci.length-1} when decoding ${cb}.`);
                        var Xp = void 0,
                            Ib = void 0,
                            Rg = void 0,
                            Kf = void 0,
                            Lf = void 0,
                            Gz = void 0,
                            Hz = void 0,
                            Iz = void 0,
                            Jz = void 0,
                            Kz = void 0,
                            Lz = void 0,
                            Mz = void 0,
                            Nz = void 0,
                            Oz = void 0,
                            Pz = void 0,
                            Qz = void 0,
                            Rz = void 0,
                            Sz = void 0,
                            Tz = void 0,
                            Uz = void 0,
                            Vz = void 0,
                            Wz = void 0,
                            Xz = void 0,
                            Yz = Ci[0];
                        if (Yz.length ===
                            0) throw Error("Cannot decode empty core segment string.");
                        let jl = cO(Yz, mO);
                        const Yp = aO(jl.slice(0, 6));
                        jl = jl.slice(6);
                        if (Yp !== 1) throw Error(`Unable to decode unsupported USCA Section specification version ${Yp} - only version 1 is supported.`);
                        let Zp = 0;
                        const Ta = [];
                        for (let aa = 0; aa < lO.length; aa++) {
                            const Y = lO[aa];
                            Ta.push(aO(jl.slice(Zp, Zp + Y)));
                            Zp += Y
                        }
                        var dX = new hO;
                        Xz = wi(dX, 1, Yp);
                        var eX = Ta.shift();
                        Wz = G(Xz, 2, eX);
                        var fX = Ta.shift();
                        Vz = G(Wz, 3, fX);
                        var gX = Ta.shift();
                        Uz = G(Vz, 4, gX);
                        var hX = Ta.shift();
                        Tz = G(Uz, 5,
                            hX);
                        var iX = Ta.shift();
                        Sz = G(Tz, 6, iX);
                        var jX = new gO,
                            kX = Ta.shift();
                        Rz = G(jX, 1, kX);
                        var lX = Ta.shift();
                        Qz = G(Rz, 2, lX);
                        var mX = Ta.shift();
                        Pz = G(Qz, 3, mX);
                        var nX = Ta.shift();
                        Oz = G(Pz, 4, nX);
                        var oX = Ta.shift();
                        Nz = G(Oz, 5, oX);
                        var pX = Ta.shift();
                        Mz = G(Nz, 6, pX);
                        var qX = Ta.shift();
                        Lz = G(Mz, 7, qX);
                        var rX = Ta.shift();
                        Kz = G(Lz, 8, rX);
                        var sX = Ta.shift();
                        Jz = G(Kz, 9, sX);
                        Iz = A(Sz, 7, Jz);
                        var tX = new fO,
                            uX = Ta.shift();
                        Hz = G(tX, 1, uX);
                        var vX = Ta.shift();
                        Gz = G(Hz, 2, vX);
                        Lf = A(Iz, 8, Gz);
                        var wX = Ta.shift();
                        Kf = G(Lf, 9, wX);
                        var xX = Ta.shift();
                        Rg = G(Kf, 10, xX);
                        var yX = Ta.shift();
                        Ib = G(Rg, 11, yX);
                        var zX = Ta.shift();
                        const Zz = Xp = G(Ib, 12, zX);
                        if (Ci.length === 1) var $z = jO(Zz);
                        else {
                            var AX = jO(Zz),
                                aA = void 0,
                                bA = void 0,
                                cA = void 0,
                                dA = Ci[1];
                            if (dA.length === 0) throw Error("Cannot decode empty GPC segment string.");
                            const aa = cO(dA, 3),
                                Y = aO(aa.slice(0, 2));
                            if (Y < 0 || Y > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Y}.`);
                            cA = Y + 1;
                            const Sa = aO(aa.charAt(2));
                            var BX = new iO;
                            bA = G(BX, 2, cA);
                            aA = ui(bA, 1, !!Sa);
                            $z = A(AX, 2, aA)
                        }
                        const eA = $z,
                            fA = pb(z(eA, hO, 1));
                        F(fA, 5) !== 1 && F(fA,
                            6) !== 1 || (e = !0);
                        var CX = pb(z(eA, hO, 1));
                        const kl = z(CX, fO, 8);
                        kl ? .g() !== 1 && kl ? .g() !== 2 && kl ? .i() !== 1 && kl ? .i() !== 2 || (g = !0);
                        break;
                    case 9:
                        if (cb.length === 0) throw Error("Cannot decode empty USVA section string.");
                        let ll = cO(cb, SO);
                        const $p = aO(ll.slice(0, 6));
                        ll = ll.slice(6);
                        if ($p !== 1) throw Error(`Unable to decode unsupported USVA Section specification version ${$p} - only version 1 is supported.`);
                        let aq = 0;
                        const hb = [];
                        for (let aa = 0; aa < RO.length; aa++) {
                            const Y = RO[aa];
                            hb.push(aO(ll.slice(aq, aq + Y)));
                            aq += Y
                        }
                        var DX = $p,
                            EX = new QO,
                            FX = wi(EX, 1, DX),
                            GX = hb.shift(),
                            HX = G(FX, 2, GX),
                            IX = hb.shift(),
                            JX = G(HX, 3, IX),
                            KX = hb.shift(),
                            LX = G(JX, 4, KX),
                            MX = hb.shift(),
                            NX = G(LX, 5, MX),
                            OX = hb.shift();
                        var PX = G(NX, 6, OX);
                        var QX = new PO,
                            RX = hb.shift(),
                            SX = G(QX, 1, RX),
                            TX = hb.shift(),
                            UX = G(SX, 2, TX),
                            VX = hb.shift(),
                            WX = G(UX, 3, VX),
                            XX = hb.shift(),
                            YX = G(WX, 4, XX),
                            ZX = hb.shift(),
                            $X = G(YX, 5, ZX),
                            aY = hb.shift(),
                            bY = G($X, 6, aY),
                            cY = hb.shift(),
                            dY = G(bY, 7, cY),
                            eY = hb.shift();
                        var fY = G(dY, 8, eY);
                        var gY = A(PX, 7, fY),
                            hY = hb.shift(),
                            iY = G(gY, 8, hY),
                            jY = hb.shift(),
                            kY = G(iY, 9, jY),
                            lY = hb.shift(),
                            mY =
                            G(kY, 10, lY),
                            nY = hb.shift();
                        const bq = G(mY, 11, nY);
                        F(bq, 5) !== 1 && F(bq, 6) !== 1 || (e = !0);
                        const gA = F(bq, 8);
                        gA !== 1 && gA !== 2 || (g = !0);
                        break;
                    case 10:
                        if (cb.length === 0) throw Error("Cannot decode empty USCO section string.");
                        const Di = cb.split(".");
                        if (Di.length > 2) throw Error(`Expected at most 2 segments but got ${Di.length} when decoding ${cb}.`);
                        var oY = void 0,
                            hA = void 0,
                            iA = void 0,
                            jA = void 0,
                            kA = void 0,
                            lA = void 0,
                            mA = void 0,
                            nA = void 0,
                            oA = void 0,
                            pA = void 0,
                            qA = void 0,
                            rA = void 0,
                            sA = void 0,
                            tA = void 0,
                            uA = void 0,
                            vA = void 0,
                            wA = void 0,
                            xA = void 0,
                            yA = Di[0];
                        if (yA.length === 0) throw Error("Cannot decode empty core segment string.");
                        let ml = cO(yA, tO);
                        const cq = aO(ml.slice(0, 6));
                        ml = ml.slice(6);
                        if (cq !== 1) throw Error(`Unable to decode unsupported USCO Section specification version ${cq} - only version 1 is supported.`);
                        let dq = 0;
                        const wb = [];
                        for (let aa = 0; aa < sO.length; aa++) {
                            const Y = sO[aa];
                            wb.push(aO(ml.slice(dq, dq + Y)));
                            dq += Y
                        }
                        var pY = new oO;
                        xA = wi(pY, 1, cq);
                        var qY = wb.shift();
                        wA = G(xA, 2, qY);
                        var rY = wb.shift();
                        vA = G(wA, 3, rY);
                        var sY = wb.shift();
                        uA = G(vA,
                            4, sY);
                        var tY = wb.shift();
                        tA = G(uA, 5, tY);
                        var uY = wb.shift();
                        sA = G(tA, 6, uY);
                        var vY = new nO,
                            wY = wb.shift();
                        rA = G(vY, 1, wY);
                        var xY = wb.shift();
                        qA = G(rA, 2, xY);
                        var yY = wb.shift();
                        pA = G(qA, 3, yY);
                        var zY = wb.shift();
                        oA = G(pA, 4, zY);
                        var AY = wb.shift();
                        nA = G(oA, 5, AY);
                        var BY = wb.shift();
                        mA = G(nA, 6, BY);
                        var CY = wb.shift();
                        lA = G(mA, 7, CY);
                        kA = A(sA, 7, lA);
                        var DY = wb.shift();
                        jA = G(kA, 8, DY);
                        var EY = wb.shift();
                        iA = G(jA, 9, EY);
                        var FY = wb.shift();
                        hA = G(iA, 10, FY);
                        var GY = wb.shift();
                        const zA = oY = G(hA, 11, GY);
                        if (Di.length === 1) var AA = qO(zA);
                        else {
                            var HY = qO(zA),
                                BA = void 0,
                                CA = void 0,
                                DA = void 0,
                                EA = Di[1];
                            if (EA.length === 0) throw Error("Cannot decode empty GPC segment string.");
                            const aa = cO(EA, 3),
                                Y = aO(aa.slice(0, 2));
                            if (Y < 0 || Y > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Y}.`);
                            DA = Y + 1;
                            const Sa = aO(aa.charAt(2));
                            var IY = new pO;
                            CA = G(IY, 2, DA);
                            BA = ui(CA, 1, !!Sa);
                            AA = A(HY, 2, BA)
                        }
                        const FA = AA,
                            GA = pb(z(FA, oO, 1));
                        F(GA, 5) !== 1 && F(GA, 6) !== 1 || (e = !0);
                        var JY = pb(z(FA, oO, 1));
                        const HA = F(JY, 8);
                        HA !== 1 && HA !== 2 || (g = !0);
                        break;
                    case 12:
                        if (cb.length === 0) throw Error("Cannot decode empty usct section string.");
                        const Ei = cb.split(".");
                        if (Ei.length > 2) throw Error(`Expected at most 2 segments but got ${Ei.length} when decoding ${cb}.`);
                        var KY = void 0,
                            IA = void 0,
                            JA = void 0,
                            KA = void 0,
                            LA = void 0,
                            MA = void 0,
                            NA = void 0,
                            OA = void 0,
                            PA = void 0,
                            QA = void 0,
                            RA = void 0,
                            SA = void 0,
                            TA = void 0,
                            UA = void 0,
                            VA = void 0,
                            WA = void 0,
                            XA = void 0,
                            YA = void 0,
                            ZA = void 0,
                            $A = void 0,
                            aB = void 0,
                            bB = void 0,
                            cB = Ei[0];
                        if (cB.length === 0) throw Error("Cannot decode empty core segment string.");
                        let nl = cO(cB, BO);
                        const eq = aO(nl.slice(0, 6));
                        nl = nl.slice(6);
                        if (eq !== 1) throw Error(`Unable to decode unsupported USCT Section specification version ${eq} - only version 1 is supported.`);
                        let fq = 0;
                        const Ya = [];
                        for (let aa = 0; aa < AO.length; aa++) {
                            const Y = AO[aa];
                            Ya.push(aO(nl.slice(fq, fq + Y)));
                            fq += Y
                        }
                        var LY = new wO;
                        bB = wi(LY, 1, eq);
                        var MY = Ya.shift();
                        aB = G(bB, 2, MY);
                        var NY = Ya.shift();
                        $A = G(aB, 3, NY);
                        var OY = Ya.shift();
                        ZA = G($A, 4, OY);
                        var PY = Ya.shift();
                        YA = G(ZA, 5, PY);
                        var QY = Ya.shift();
                        XA = G(YA, 6, QY);
                        var RY = new vO,
                            SY = Ya.shift();
                        WA = G(RY, 1, SY);
                        var TY = Ya.shift();
                        VA = G(WA, 2, TY);
                        var UY = Ya.shift();
                        UA = G(VA, 3, UY);
                        var VY = Ya.shift();
                        TA = G(UA, 4, VY);
                        var WY = Ya.shift();
                        SA = G(TA, 5, WY);
                        var XY = Ya.shift();
                        RA = G(SA, 6, XY);
                        var YY =
                            Ya.shift();
                        QA = G(RA, 7, YY);
                        var ZY = Ya.shift();
                        PA = G(QA, 8, ZY);
                        OA = A(XA, 7, PA);
                        var $Y = new uO,
                            aZ = Ya.shift();
                        NA = G($Y, 1, aZ);
                        var bZ = Ya.shift();
                        MA = G(NA, 2, bZ);
                        var cZ = Ya.shift();
                        LA = G(MA, 3, cZ);
                        KA = A(OA, 8, LA);
                        var dZ = Ya.shift();
                        JA = G(KA, 9, dZ);
                        var eZ = Ya.shift();
                        IA = G(JA, 10, eZ);
                        var fZ = Ya.shift();
                        const dB = KY = G(IA, 11, fZ);
                        if (Ei.length === 1) var eB = yO(dB);
                        else {
                            var gZ = yO(dB),
                                fB = void 0,
                                gB = void 0,
                                hB = void 0,
                                iB = Ei[1];
                            if (iB.length === 0) throw Error("Cannot decode empty GPC segment string.");
                            const aa = cO(iB, 3),
                                Y = aO(aa.slice(0, 2));
                            if (Y <
                                0 || Y > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Y}.`);
                            hB = Y + 1;
                            const Sa = aO(aa.charAt(2));
                            var hZ = new xO;
                            gB = G(hZ, 2, hB);
                            fB = ui(gB, 1, !!Sa);
                            eB = A(gZ, 2, fB)
                        }
                        const jB = eB,
                            gq = pb(z(jB, wO, 1)),
                            kB = z(gq, uO, 8);
                        F(gq, 5) !== 1 && F(gq, 6) !== 1 && kB ? .i() !== 1 && kB ? .A() !== 1 || (e = !0);
                        var iZ = pb(z(jB, wO, 1));
                        const lB = z(iZ, uO, 8);
                        lB ? .g() !== 1 && lB ? .g() !== 2 || (g = !0);
                        break;
                    case 13:
                        if (cb.length === 0) throw Error("Cannot decode empty USFL section string.");
                        let ol = cO(cb, GO);
                        const hq = aO(ol.slice(0, 6));
                        ol = ol.slice(6);
                        if (hq !== 1) throw Error(`Unable to decode unsupported USFL Section specification version ${hq} - only version 1 is supported.`);
                        let iq = 0;
                        const Ua = [];
                        for (let aa = 0; aa < FO.length; aa++) {
                            const Y = FO[aa];
                            Ua.push(aO(ol.slice(iq, iq + Y)));
                            iq += Y
                        }
                        var jZ = hq,
                            kZ = new EO,
                            lZ = wi(kZ, 1, jZ),
                            mZ = Ua.shift(),
                            nZ = G(lZ, 2, mZ),
                            oZ = Ua.shift(),
                            pZ = G(nZ, 3, oZ),
                            qZ = Ua.shift(),
                            rZ = G(pZ, 4, qZ),
                            sZ = Ua.shift(),
                            tZ = G(rZ, 5, sZ),
                            uZ = Ua.shift();
                        var vZ = G(tZ, 6, uZ);
                        var wZ = new DO,
                            xZ = Ua.shift(),
                            yZ = G(wZ, 1, xZ),
                            zZ = Ua.shift(),
                            AZ = G(yZ, 2, zZ),
                            BZ = Ua.shift(),
                            CZ = G(AZ,
                                3, BZ),
                            DZ = Ua.shift(),
                            EZ = G(CZ, 4, DZ),
                            FZ = Ua.shift(),
                            GZ = G(EZ, 5, FZ),
                            HZ = Ua.shift(),
                            IZ = G(GZ, 6, HZ),
                            JZ = Ua.shift(),
                            KZ = G(IZ, 7, JZ),
                            LZ = Ua.shift();
                        var MZ = G(KZ, 8, LZ);
                        var NZ = A(vZ, 7, MZ);
                        var OZ = new CO,
                            PZ = Ua.shift(),
                            QZ = G(OZ, 1, PZ),
                            RZ = Ua.shift(),
                            SZ = G(QZ, 2, RZ),
                            TZ = Ua.shift();
                        var UZ = G(SZ, 3, TZ);
                        var VZ = A(NZ, 8, UZ),
                            WZ = Ua.shift(),
                            XZ = G(VZ, 9, WZ),
                            YZ = Ua.shift(),
                            ZZ = G(XZ, 10, YZ),
                            $Z = Ua.shift(),
                            a_ = G(ZZ, 11, $Z),
                            b_ = Ua.shift();
                        const pl = G(a_, 12, b_),
                            mB = z(pl, CO, 8);
                        F(pl, 5) !== 1 && F(pl, 6) !== 1 && mB ? .i() !== 1 && mB ? .A() !== 1 || (e = !0);
                        const nB = z(pl, CO, 8) ? .g();
                        nB !== 1 && nB !== 2 || (g = !0)
                }
            }
        }
        return {
            al: d,
            Mh: e,
            fl: f,
            Sg: g
        }
    }
    var IT = class extends R {
        constructor(a) {
            ({
                timeoutMs: b
            } = {});
            var b;
            super();
            this.caller = new LI(a, "__gppLocator", c => typeof c.__gpp === "function", DT);
            this.caller.D.set("addEventListener", zT);
            this.caller.C.set("addEventListener", BT);
            this.caller.D.set("removeEventListener", AT);
            this.caller.C.set("removeEventListener", CT);
            this.timeoutMs = b ? ? 500
        }
        g() {
            this.caller.dispose();
            super.g()
        }
        i() {
            return !!II(this.caller)
        }
        addEventListener(a) {
            const b = oc(() => {
                    a(FT, !0)
                }),
                c = this.timeoutMs === -1 ? void 0 : setTimeout(() => {
                    b()
                }, this.timeoutMs);
            KI(this.caller, "addEventListener", {
                listener: (d, e) => {
                    clearTimeout(c);
                    try {
                        if (d.pingData ? .gppVersion === void 0 || d.pingData.gppVersion === "1" || d.pingData.gppVersion === "1.0") {
                            this.removeEventListener(d.listenerId);
                            var f = {
                                eventName: "signalStatus",
                                data: "ready",
                                pingData: {
                                    internalErrorState: 1,
                                    gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                    applicableSections: [-1]
                                }
                            }
                        } else Array.isArray(d.pingData.applicableSections) ? f = d : (this.removeEventListener(d.listenerId), f = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 2,
                                gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                                applicableSections: [-1]
                            }
                        });
                        a(f, e)
                    } catch {
                        if (d ? .listenerId) try {
                            this.removeEventListener(d.listenerId)
                        } catch {
                            a(GT, !0);
                            return
                        }
                        a(HT, !0)
                    }
                }
            })
        }
        removeEventListener(a) {
            KI(this.caller, "removeEventListener", {
                listener: () => {},
                listenerId: a
            })
        }
    };
    const HT = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        FT = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        GT = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };

    function JT(a) {
        return !a || a.length === 1 && a[0] === -1
    };

    function KT(a) {
        a = new IT(a);
        if (!a.i()) return Promise.resolve(null);
        const b = NH(),
            c = SH(b, 35);
        if (c) return Promise.resolve(c);
        const d = new Promise(e => {
            e = {
                resolve: e
            };
            const f = SH(b, 36, []);
            f.push(e);
            TH(b, 36, f)
        });
        c || c === null || (TH(b, 35, null), a.addEventListener(e => {
            if (e.pingData.signalStatus === "ready" || JT(e.pingData.applicableSections)) {
                e = e.pingData;
                TH(b, 35, e);
                for (const f of SH(b, 36, [])) f.resolve(e);
                TH(b, 36, [])
            }
        }));
        return d
    };

    function LT(a) {
        a = new dJ(a, {
            timeoutMs: -1,
            Ti: !0
        });
        if (!$I(a)) return Promise.resolve(null);
        const b = NH(),
            c = SH(b, 24);
        if (c) return Promise.resolve(c);
        const d = new Promise(e => {
            e = {
                resolve: e
            };
            const f = SH(b, 25, []);
            f.push(e);
            TH(b, 25, f)
        });
        c || c === null || (TH(b, 24, null), a.addEventListener(e => {
            if (UI(e)) {
                TH(b, 24, e);
                for (const f of SH(b, 25, [])) f.resolve(e);
                TH(b, 25, [])
            } else TH(b, 24, null)
        }));
        return d
    };
    const MT = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.pb({
                    Nc: c ? ? void 0,
                    hh: d ? void 0 : 2
                })
            })
        },
        NT = {
            ce: a => a.pb,
            hd: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            Ac: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    Nc: b.returnValue ? ? void 0,
                    hh: b.success ? void 0 : 2
                })
            }
        };

    function OT(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            jg: b.__uspapiReturn.callId
        }
    }

    function PT(a, b) {
        let c = {};
        if (II(a.caller)) {
            var d = oc(() => {
                b(c)
            });
            KI(a.caller, "getDataWithCallback", {
                pb: e => {
                    e.hh || (c = e.Nc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    }
    var QT = class extends R {
        constructor(a) {
            super();
            this.timeoutMs = {}.timeoutMs ? ? 500;
            this.caller = new LI(a, "__uspapiLocator", b => typeof b.__uspapi === "function", OT);
            this.caller.D.set("getDataWithCallback", MT);
            this.caller.C.set("getDataWithCallback", NT)
        }
        g() {
            this.caller.dispose();
            super.g()
        }
    };

    function RT(a) {
        const b = new QT(a);
        return new Promise(c => {
            PT(b, d => {
                d && typeof d.uspString === "string" ? c(d.uspString) : c(null)
            })
        })
    }

    function ST(a, {
        el: b,
        ql: c,
        Oj: d
    }) {
        var e = new PN;
        var f = Q(Vw) ? gi(d, 5) != null ? d.g() : gi(b, 5) != null ? b.g() : a.g() : gi(b, 5) != null ? b.g() : a.g();
        e = LN(e, f);
        f = Q(Vw) ? gi(d, 8) != null ? B(d, 8) : gi(b, 8) != null ? B(b, 8) : void 0 : gi(b, 8);
        e = MN(e, f);
        a = gi(a, 14);
        a = ti(e, 14, a);
        f = gi(b, 3);
        a = ti(a, 3, f);
        f = hi(b, 2);
        a = yi(a, 2, f);
        f = hi(b, 4);
        a = yi(a, 4, f);
        f = lg(y(b, 7));
        a = Ai(a, 7, f);
        b = gi(b, 9);
        b = ti(a, 9, b);
        a = hi(c, 1);
        b = yi(b, 1, a);
        c = gi(c, 13);
        c = ti(b, 13, c);
        b = hi(d, 11);
        c = yi(c, 11, b);
        b = Kh(d, 10, Dg, Jh(), void 0, 0);
        NN(Sh(c, 10, b, qg), gi(d, 12));
        return e
    }
    async function TT(a, {
        Ha: b,
        bk: c
    }) {
        const [d, e, f] = q(await q(Promise.all([LT(a.pubWin), RT(a.pubWin), KT(a.pubWin)])));
        b = !!b && (Q(Ww) || !jQ());
        var g = LN(new PN, !b);
        c = ti(g, 14, c && navigator.globalPrivacyControl);
        g = new PN;
        if (d) {
            var h = LN(g, VI(d, {
                idpcApplies: b
            }));
            h = yi(h, 2, d.tcString);
            h = yi(h, 4, d.addtlConsent || "");
            h = Ai(h, 7, d.internalErrorState);
            var k = !YI(d, ["3", "4"], 0);
            h = ti(h, 9, k);
            MN(h, !YI(d, ["2", "7", "9", "10"], 3));
            d.gdprApplies != null && ti(g, 3, d.gdprApplies)
        }
        h = new PN;
        if (e) {
            k = yi(h, 1, e);
            var l = e.toUpperCase();
            if (l.length ==
                4 && (l.indexOf("-") == -1 || l.substring(1) === "---") && l[0] >= "1" && l[0] <= "9" && XN.hasOwnProperty(l[1]) && XN.hasOwnProperty(l[2]) && XN.hasOwnProperty(l[3])) {
                var m = new WN;
                m = wi(m, 1, parseInt(l[0], 10));
                m = G(m, 2, XN[l[1]]);
                m = G(m, 3, XN[l[2]]);
                l = G(m, 4, XN[l[3]])
            } else l = null;
            l = l ? .Mj() === 2;
            ti(k, 13, l)
        }
        k = new PN;
        if (f)
            if (f.internalErrorState) yi(k, 11, f.gppString);
            else if (JT(f.applicableSections)) NN(Sh(k, 10, f.applicableSections, qg), !1), Q(Vw) && LN(k, !0);
        else if (l = Sh(k, 10, f.applicableSections, qg), yi(l, 11, f.gppString), Q(Vw)) try {
            const n =
                ET(f.gppString, f.applicableSections, {
                    idpcApplies: b,
                    supportTcfeu: !0
                });
            MN(ON(NN(LN(k, n.al), n.Mh), n.Sg), n.fl)
        } catch (n) {
            VB(1182, n), MN(ON(NN(LN(k, !b), !1), !1), !1)
        } else try {
            const n = ET(f.gppString, f.applicableSections, {
                idpcApplies: b
            });
            ON(NN(k, n.Mh), n.Sg)
        } catch (n) {
            VB(1182, n), ON(NN(k, !1), !1)
        }
        a.j = ST(c, {
            el: g,
            ql: h,
            Oj: k
        })
    };
    async function UT(a) {
        const b = Fm(),
            c = a.Z,
            d = a.pageState.g();
        oI(g => {
            if (F(g, 1) === 0) {
                var h = !!($S(d) ? ZS(d) : Q(gx) ? z(c, Yh, 26) ? .g() : B(c, 6));
                g = ui(g, 2, h);
                h = !(gi(d, 5) != null ? !B(d, 5) : !B(c, 20));
                g = ui(g, 6, h);
                G(g, 1, 1)
            }
        });
        VT(a.pubWin, z(d, Yh, 10) || Xh(c));
        WT(a.F.google_ad_client);
        oI(g => {
            F(g, 1) === 1 && G(g, 1, 2)
        });
        const e = new SI(a.pubWin);
        q(await q(XT(e, cT(d) || D(c, 8))));
        oI(g => {
            F(g, 1) === 2 && (g = ui(g, 3, !0), G(g, 1, 3))
        });
        q(await q(TT(a, {
            Ha: $S(d) ? ZS(d) : Q(gx) ? !!z(c, Yh, 26) ? .g() : B(c, 6),
            bk: gi(d, 7) != null ? B(d, 7) : Q(gx) ? !!z(c, Yh, 26) ? .g() :
                B(c, 25)
        })));
        const f = Fm();
        oI(g => {
            if (F(g, 1) === 3) {
                g = ui(g, 3, f - b > 500);
                var h = !!a.j ? .l();
                g = ui(g, 4, h);
                h = !!a.j ? .g();
                g = ui(g, 5, h);
                h = !!a.j ? .i();
                g = ui(g, 7, h);
                h = !!a.j ? .A();
                g = ui(g, 8, h);
                G(g, 1, 4)
            }
        })
    }

    function VT(a, b) {
        var c = Q(Xw);
        a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new iQ(a, b, c), dQ(a), eQ(a))
    }

    function WT(a) {
        var b = oe(r.top, "googlefcPresent");
        r.googlefc && !b && UB("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function XT(a, b) {
        return PI(a, b === ".google.cn") ? QI(a) : Promise.resolve(null)
    };

    function YT(a, b = !1) {
        try {
            return b ? (new Dl(a.innerWidth, a.innerHeight)).round() : Tl(a || window).round()
        } catch (c) {
            return new Dl(-12245933, -12245933)
        }
    }

    function ZT(a = r) {
        a = a.devicePixelRatio;
        return typeof a === "number" ? +a.toFixed(3) : null
    }

    function $T(a, b = r) {
        a = a.scrollingElement || (a.compatMode === "CSS1Compat" ? a.documentElement : a.body);
        return new zl(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function aU(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function bU(a, b) {
        var c = OB,
            d;
        var e;
        d = (e = (e = Jl()) && (d = e.initialLayoutRect) && typeof d.top === "number" && typeof d.left === "number" && typeof d.width === "number" && typeof d.height === "number" ? new Fl(d.left, d.top, d.width, d.height) : null) ? new zl(e.left, e.top) : (d = Ml()) && d.rootBounds && ra(d.rootBounds) ? new zl(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            {
                const k = new zl(0, 0);
                var f = Sl(b);
                let l = f ? f.defaultView : window;
                if (ac(l, "parent")) {
                    do {
                        if (l == a) var g = lm(b);
                        else {
                            const m = km(b);
                            g = new zl(m.left, m.top)
                        }
                        f = g;
                        k.x += f.x;
                        k.y += f.y
                    } while (l && l != a && l != l.parent && (b = l.frameElement) && (l = l.parent))
                }
                var h = k
            }
            return h
        } catch (k) {
            return c.na(888, k), new zl(-12245933, -12245933)
        }
    }

    function cU(a, b, c, d = !1) {
        a = bU(a, c);
        c = Nl() || YT(b.top);
        if (!a || a.y === -12245933 || c.width === -12245933 || c.height === -12245933 || !c.height) return 0;
        let e = 0;
        try {
            const f = b.top;
            e = $T(f.document, f).y
        } catch (f) {
            return 0
        }
        b = e + c.height;
        return a.y < e ? d ? 0 : (e - a.y) / c.height : a.y > b ? (a.y - b) / c.height : 0
    };

    function dU(a, b, c, d) {
        const e = mQ(a, "gpi-uoo", (f, g) => {
            if (g.source === c) {
                g = Tk(f.userOptOut ? "1" : "0");
                g = Ch(g, 2, wg(2147483647));
                g = yi(g, 3, "/");
                g = yi(g, 4, a.location.hostname);
                var h = new kR(a);
                hR(h, "__gpi_opt_out", g, b);
                if (f.userOptOut || f.clearAdsData) iR(h, "__gads", b), iR(h, "__gpi", b)
            }
        });
        d.push(e)
    };

    function eU(a, b) {
        const c = a.pubWin,
            d = a.F.google_ad_client,
            e = VH();
        let f = null;
        const g = mQ(c, "pvt", (h, k) => {
            typeof h.token === "string" && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), e[d].length > 100 && e[d].shift())
        });
        a.i.push(g);
        return () => {
            f && Array.isArray(e[d]) && (Za(e[d], f), e[d].length || delete e[d], f = null)
        }
    };

    function fU(a) {
        return a.length ? a.join("~") : void 0
    };

    function gU({
        K: a,
        tk: b,
        kk: c,
        bj: d,
        cp: e,
        ep: f,
        I: g,
        Qj: h
    }) {
        let k = 0;
        try {
            k |= lr(a, f);
            const n = Math.min(a.screen.width || 0, a.screen.height || 0);
            k |= n ? n < 320 ? 8192 : 0 : 2048;
            k |= a.navigator && hU(a.navigator.userAgent) ? 1048576 : 0;
            if (b) {
                f = k;
                const p = a.innerHeight;
                var l = (Zb() && rc() ? Fe(a) : 1) * p >= b;
                var m = f | (l ? 0 : 1024)
            } else m = k | (a.innerHeight >= a.innerWidth ? 0 : 8);
            k = m;
            k |= or(a, c, !0, e)
        } catch {
            k |= 32
        }
        switch (d) {
            case 2:
                iU(a, g, h) && (k |= 16777216);
                break;
            case 1:
                jU(a, g, h) && (k |= 16777216)
        }
        return k
    }

    function hU(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }

    function iU(a, b = null, c = !1) {
        const d = VF({
            zg: 0,
            Af: a.innerWidth,
            dg: 3,
            Ag: 0,
            Bf: Math.min(Math.round(a.innerWidth / 320 * 50), kU) + 15,
            eg: 3
        });
        return $F(lU(a, b), d, c)
    }

    function jU(a, b = null, c = !1) {
        const d = a.innerWidth,
            e = a.innerHeight,
            f = Math.min(Math.round(a.innerWidth / 320 * 50), kU) + 15,
            g = VF({
                zg: 0,
                Af: d,
                dg: 3,
                Ag: e - f,
                Bf: e,
                eg: 3
            });
        f > 25 && g.push({
            x: d - 25,
            y: e - 25
        });
        return $F(lU(a, b), g, c)
    }

    function lU(a, b = null) {
        return new bG(a, {
            jh: mU(a, b)
        })
    }

    function mU(a, b = null) {
        if (b) return (c, d, e) => {
            Wm(b, "ach_evt", {
                tn: c.tagName,
                id: c.getAttribute("id") ? ? "",
                cls: c.getAttribute("class") ? ? "",
                ign: String(e),
                pw: a.innerWidth,
                ph: a.innerHeight,
                x: d.x,
                y: d.y
            }, !0, 1)
        }
    }
    const kU = 90 * 1.38;

    function nU(a, b) {
        return gU({
            K: a,
            kk: 3E3,
            tk: a.innerWidth > kr ? 650 : 0,
            I: MB,
            bj: b,
            Qj: Q(ov)
        })
    };

    function oU(a) {
        let b = 0;
        try {
            b |= lr(a)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function pU(a) {
        let b = 0;
        try {
            b |= lr(a), b |= or(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function qU() {
        const a = {};
        ux(pv) && (a.bust = ux(pv));
        return a
    };

    function rU() {
        const {
            promise: a,
            resolve: b
        } = new rQ;
        return {
            promise: a,
            resolve: b
        }
    };

    function sU(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = rU();
        b[a] = d;
        c();
        return d
    }

    function tU(a, b, c) {
        return sU(a, b, () => {
            Qd(b.document, c)
        }).promise
    };

    function uU(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5,
            "": 0
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] ? ? 0
    }

    function vU(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function wU(a) {
        return a.hidden != null ? a.hidden : a.mozHidden != null ? a.mozHidden : a.webkitHidden != null ? a.webkitHidden : null
    }

    function xU(a, b) {
        if (uU(b) === 3) var c = !1;
        else a(), c = !0;
        if (!c) {
            const d = () => {
                yk(b, "prerenderingchange", d);
                a()
            };
            xk(b, "prerenderingchange", d)
        }
    };
    Array.from({
        length: 11
    }, (a, b) => b / 10);

    function yU(a, b = !1) {
        let c = 0;
        try {
            c |= lr(a);
            var d;
            if (!(d = !a.navigator)) {
                var e = a.navigator;
                d = "brave" in e && "isBrave" in e.brave || !1
            }
            c |= d || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            c |= or(a, b ? Number.MAX_SAFE_INTEGER : 2500, !0)
        } catch (f) {
            c |= 32
        }
        return c
    };
    const zU = "body div footer header html main section".split(" ");

    function AU(a, b = null, c = !1, d = !1, e = !1) {
        let f = lr(a);
        hU(a.navigator ? .userAgent) && (f |= 1048576);
        const g = a.innerWidth;
        g < 1200 && (f |= 65536);
        const h = a.innerHeight;
        h < 650 && (f |= 2097152);
        b && f === 0 && (b = b === 3 ? "left" : "right", (c = BU({
            K: a,
            fk: !1,
            Vk: 1,
            position: b,
            T: g,
            W: h,
            kc: new Set,
            minWidth: 120,
            minHeight: 500,
            Kf: c,
            gg: d,
            fg: e
        })) ? UD(a).sideRailPlasParam.set(b, `${c.width}x${c.height}_${String(b).charAt(0)}`) : f |= 16);
        return f
    }

    function CU(a) {
        a = UD(a).sideRailPlasParam;
        return [...Array.from(a.values())].join("|")
    }

    function DU(a, b) {
        return bm(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c)) !== null
    }

    function EU(a, b) {
        return bm(a, c => c.nodeType === Node.ELEMENT_NODE && b.getComputedStyle(c, null).position === "fixed")
    }

    function FU(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            d.position === "fixed" && d.display !== "none" && d.visibility !== "hidden" && b.push(c)
        }
        return b
    }

    function GU(a, b) {
        const {
            top: c,
            left: d,
            bottom: e,
            right: f
        } = b.getBoundingClientRect();
        return c >= 0 && d >= 0 && e <= a.innerHeight && f <= a.innerWidth
    }

    function HU(a) {
        return Math.round(Math.round(a / 10) * 10)
    }

    function IU(a) {
        return `${a.position}-${HU(a.T)}x${HU(a.W)}-${HU(a.scrollY+a.Dc)}Y`
    }

    function JU(a) {
        return `f-${IU({position:a.position,Dc:a.Dc,scrollY:0,T:a.T,W:a.W})}`
    }

    function KU(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return a !== Infinity ? a : 0
    }

    function LU(a, b, c) {
        const d = UD(c.K).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.W),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.T);
                for (var k = c.T * .3; f <= g; f += 10) {
                    if (e > 0 && h < k) {
                        var l = JU({
                            position: "left",
                            Dc: f,
                            T: c.T,
                            W: c.W
                        });
                        b.set(l, KU(b.get(l), h))
                    }
                    if (h < c.T && e > c.T - k) {
                        l = JU({
                            position: "right",
                            Dc: f,
                            T: c.T,
                            W: c.W
                        });
                        const m = c.T - e;
                        b.set(l, KU(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function MU(a, b) {
        const c = b.K,
            d = b.Kf,
            e = b.fg;
        var f = `f-${HU(b.T)}x${HU(b.W)}`;
        a.has(f) || (a.set(f, 0), f = FU(c), d || e ? (NU(a, b, f.filter(g => GU(c, g))), OU(c, f.filter(g => !GU(c, g)).concat(e ? Array.from(c.document.querySelectorAll("[google-side-rail-overlap=false]")) : []))) : NU(a, b, f))
    }

    function NU(a, b, c) {
        var d = b.kc;
        const e = b.K;
        UD(e).sideRailProcessedFixedElements.clear();
        d = new Set([...Array.from(e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...d]);
        for (const f of c) DU(f, d) || LU(f, a, b)
    }

    function PU(a) {
        if (a.T < 1200 || a.W < 650) return null;
        var b = UD(a.K).sideRailAvailableSpace;
        a.fk || MU(b, {
            K: a.K,
            T: a.T,
            W: a.W,
            kc: a.kc,
            Kf: a.Kf,
            fg: a.fg
        });
        const c = [];
        var d = a.W * .9,
            e = wr(a.K),
            f = (a.W - d) / 2,
            g = f,
            h = d / 7;
        for (var k = 0; k < 8; k++) {
            var l = c,
                m = l.push;
            a: {
                var n = g;
                var p = a.position,
                    w = b,
                    v = {
                        K: a.K,
                        T: a.T,
                        W: a.W,
                        kc: a.kc,
                        gg: a.gg
                    };
                const V = JU({
                        position: p,
                        Dc: n,
                        T: v.T,
                        W: v.W
                    }),
                    N = IU({
                        position: p,
                        Dc: n,
                        scrollY: e,
                        T: v.T,
                        W: v.W
                    });
                if (w.has(N)) {
                    n = KU(w.get(V), w.get(N));
                    break a
                }
                const O = p === "left" ? 20 : v.T - 20;
                let J = O;p = v.T * .3 / 5 * (p === "left" ? 1 : -1);
                for (let Ka = 0; Ka < 6; Ka++) {
                    var t = WF(v.K.document, {
                            x: Math.round(J),
                            y: Math.round(n)
                        }),
                        C = DU(t, v.kc),
                        I = EU(t, v.K);
                    if (!C && I !== null) {
                        LU(I, w, v);
                        w.delete(N);
                        break
                    }
                    C || (C = v, t.getAttribute("google-side-rail-overlap") === "true" ? C = !0 : t.getAttribute("google-side-rail-overlap") === "false" || C.gg && !zU.includes(t.tagName.toLowerCase()) ? C = !1 : (I = t.offsetHeight >= C.W * .25, C = t.offsetWidth >= C.T * .9 && I));
                    if (C) w.set(N, Math.round(Math.abs(J - O) + 20));
                    else if (J !== O) J -= p, p /= 2;
                    else {
                        w.set(N, 0);
                        break
                    }
                    J += p
                }
                n = KU(w.get(V), w.get(N))
            }
            m.call(l,
                n);
            g += h
        }
        b = a.Vk;
        e = a.position;
        d = Math.round(d / 8);
        f = Math.round(f);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (l = 0; l < c.length; l++) {
            for (; m.length !== 0 && c[m[m.length - 1]] >= c[l];) m.pop();
            h[l] = m.length === 0 ? 0 : m[m.length - 1] + 1;
            m.push(l)
        }
        m = [];
        k = c.length - 1;
        l = Array(c.length).fill(0);
        for (n = k; n >= 0; n--) {
            for (; m.length !== 0 && c[m[m.length - 1]] >= c[n];) m.pop();
            l[n] = m.length === 0 ? k : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (k = 0; k < c.length; k++)
            if (n = {
                    position: e,
                    width: Math.round(c[k]),
                    height: Math.round((l[k] - h[k] + 1) *
                        d),
                    offsetY: f + h[k] * d
                }, w = n.width >= g && n.height >= a, b === 0 && w) {
                m = n;
                break
            } else b === 1 && w && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    }

    function OU(a, b) {
        const c = UD(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(() => {
                setTimeout(() => {
                    QU(a);
                    for (const e of c.sideRailMutationCallbacks) e()
                }, 500)
            });
            for (const e of b) d.observe(e, {
                attributes: !0
            });
            c.g = d
        }
    }

    function QU(a) {
        ({
            sideRailAvailableSpace: a
        } = UD(a));
        const b = Array.from(a.keys()).filter(c => c.startsWith("f-"));
        for (const c of b) a.delete(c)
    }

    function BU(a) {
        if (a.Aa) return a.Aa.sb(1228, () => PU(a)) || null;
        try {
            return PU(a)
        } catch {}
        return null
    };
    const RU = {
        [27]: 512,
        [26]: 128
    };
    var SU = (a, b, c, d) => {
            d = FN(d);
            switch (c) {
                case 1:
                case 2:
                    return nU(a, c) === 0;
                case 3:
                case 4:
                    return AU(a, c, !0, Q($v), !0) === 0;
                case 8:
                    return yU(a, Q(cv)) === 0;
                case 9:
                    return b = !(b.google_adtest === "on" || FQ(a.location, "google_scr_debug")), !kK(a, b, d);
                case 30:
                    return aM(a) === 0;
                case 26:
                    return pU(a) === 0;
                case 27:
                    return oU(a) === 0;
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        TU = (a, b, c, d) => {
            d = d ? FN(d) : null;
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return nU(a, c);
                case 3:
                case 4:
                    return AU(a, c, !1, Q($v));
                case 8:
                    return yU(a,
                        Q(cv));
                case 9:
                    return kK(a, !(b.google_adtest === "on" || FQ(a.location, "google_scr_debug")), d);
                case 16:
                    return Hx(b, a) ? 0 : 8388608;
                case 30:
                    return aM(a);
                case 26:
                    return pU(a);
                case 27:
                    return oU(a);
                default:
                    return 32
            }
        },
        UU = a => {
            if (!a.hash) return null;
            let b = null;
            Ud(CQ, c => {
                !b && FQ(a, c) && (b = DQ[c] || null)
            });
            return b
        },
        WU = (a, b) => {
            const c = UD(a).tagSpecificState[1] || null;
            c !== null && c.debugCard == null && Ud(EQ, d => {
                !c.debugCardRequested && typeof d === "number" && IQ(d, a.location) && (c.debugCardRequested = !0, VU(a, b, e => {
                    c.debugCard = e.createDebugCard(d,
                        a)
                }))
            })
        },
        YU = (a, b, c) => {
            if (!b) return null;
            const d = UD(b);
            let e = 0;
            Ud(wc, f => {
                const g = RU[f];
                g && XU(a, b, f, c) === 0 && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? `${e}` : null
        },
        ZU = (a, b, c) => {
            const d = [];
            Ud(wc, e => {
                const f = XU(b, a, e, c);
                f !== 0 && d.push(`${e}:${f}`)
            });
            return d.join(",") || null
        },
        $U = a => {
            const b = [],
                c = {};
            Ud(a, (d, e) => {
                if ((e = ir[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (d === !1) d = 2;
                    else return;
                    b.push(`${e}:${d}`)
                }
            });
            return b.join(",")
        },
        aV = a => {
            a = a.overlays;
            if (!a) return "";
            a =
                a.bottom;
            return typeof a === "boolean" ? a ? "1" : "0" : ""
        },
        XU = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = UD(b),
                g = sr(f, c);
            if (a.google_reactive_ad_format === c || g) e |= 64;
            let h = !1;
            Ud(f.reactiveTypeDisabledByPublisher, (k, l) => {
                String(c) === String(l) && (h = !0)
            });
            return h && UU(b.location) !== c && (e |= 128, c === 2 || c === 1 || c === 3 || c === 4 || c === 8) ? e : e | TU(b, a, c, d)
        },
        bV = (a, b) => {
            if (a) {
                var c = UD(a),
                    d = {};
                Ud(b, (e, f) => {
                    (f = ir[f]) && (e === !1 || /^false$/i.test(e)) && (d[f] = !0)
                });
                Ud(wc, e => {
                    d[jr[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        cV = (a, b, c) => {
            b = SB(b, c);
            c = { ...qU()
            };
            const d = W(Yw);
            [0, 1].includes(d) && (c.osttc = `${d}`);
            return tU(1, window, Kd(a, new Map(Object.entries(c)))).then(b)
        },
        VU = (a, b, c) => {
            c = SB(212, c);
            tU(3, a, b).then(c)
        },
        dV = (a, b, c) => {
            a.dataset.adsbygoogleStatus = "reserved";
            a.className += " adsbygoogle-noablate";
            c.adsbygoogle || (c.adsbygoogle = [], Qd(c.document, Jd `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
            c.adsbygoogle.push({
                element: a,
                params: b
            })
        },
        eV = a => {
            a = a.google_reactive_ad_format;
            return vc(a) ? `${a}` : null
        },
        fV = a => !!eV(a) || a.google_pgb_reactive != null,
        gV = a => {
            a = Number(eV(a));
            return a === 26 || a === 27 || a === 30 || a === 16 || a === 40 || a === 41
        };

    function hV(a) {
        return typeof a.google_reactive_sra_index === "number"
    }

    function iV(a, b, c) {
        const d = b.K || b.pubWin,
            e = b.F,
            f = FN(c);
        c = ZU(d, e, c);
        e.google_reactive_plat = c;
        (c = $U(a)) && (e.google_reactive_plaf = c);
        (c = aV(a)) && (e.google_reactive_fba = c);
        (c = CU(d)) && (e.google_plas = c);
        jV(a, e);
        c = UU(b.pubWin.location);
        kV(a, c, e);
        c ? (e.fra = c, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        e.asro = Q(tw);
        e.aihb = Q(cw);
        e.aifxl = fU(vx(gw));
        W(yw) && (e.aiapm = W(yw));
        W(zw) && (e.aiapmi = W(zw));
        W(xw) && (e.aiact = W(xw));
        W(Fw) && (e.aicct = W(Fw));
        W(Gw) && (e.ailct = W(Gw));
        W(Jw) && (e.aimart = W(Jw));
        e.aiof = fU(vx(pw));
        e.fsapi = !0;
        c !== 8 && (f && gK(f) ? (c = jK(f, 86400, "__lsv__"), c ? .length && (c = Math.floor((Date.now() - Math.max(...c)) / 6E4), c >= 0 && (e.vmsli = c))) : e.vmsli = -1);
        c = jK(f, 600, "__lsa__");
        c ? .length && Math.floor((Date.now() - Math.max(...c)) / 6E4) <= W(Xu) && (e.dap = 3);
        Nl() || YT(b.pubWin.top);
        c = nQ(b.pubWin, "rsrai", SB(429, (g, h) => lV(b, d, e.google_ad_client, a, g, h, f)), SB(430, (g, h) => zr(b.pubWin, "431", MB, h)));
        b.i.push(c);
        UD(d).wasReactiveTagRequestSent = !0;
        mV(b, a, f)
    }

    function mV(a, b, c) {
        const d = a.F,
            e = ra(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = nQ(a.pubWin, "apcnf", SB(353, (f, g) => {
            var h = a.pubWin,
                k = d.google_ad_client;
            return ye(g.origin) ? pR(h, k, e, f.config, c, null) : !1
        }), SB(353, (f, g) => zr(a.pubWin, "353", MB, g)));
        a.i.push(b)
    }

    function lV(a, b, c, d, e, f, g) {
        if (!ye(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!$H(b, 1)) return !0;
        f && vl(6, [f]);
        e = e.amaConfig;
        const h = [],
            k = [],
            l = UD(b);
        let m = null;
        for (let n = 0; n < f.length; n++) {
            if (!f[n]) continue;
            const p = f[n],
                w = p.adFormat;
            l && p.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[w] = !0);
            if (!p.noCreative) {
                p.google_reactive_sra_index = n;
                if (w === 9 && e) {
                    p.pubVars = Object.assign(p.pubVars || {}, nV(d, p));
                    const v = new lK;
                    if (eK(v, p) && v.H(p)) {
                        m = v;
                        continue
                    }
                }
                h.push(p);
                k.push(w)
            }
        }
        h.length && cV(a.La.Vh,
            522, n => {
                oV(h, b, n, d, g)
            });
        e && pR(b, c, d, e, g, m);
        return !0
    }

    function nV(a, b) {
        const c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        const e = {};
        a = a.page_level_pubvars;
        ra(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        c === 30 && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function oV(a, b, c, d, e) {
        const f = [];
        for (let g = 0; g < a.length; g++) {
            const h = a[g],
                k = h.adFormat,
                l = h.adKey,
                m = c.configProcessorForAdFormat(k);
            k && m && l && (h.pubVars = nV(d, h), delete h.google_reactive_sra_index, f.push(k), RB(466, () => m.verifyAndProcessConfig(b, h, e)))
        }
    }

    function jV(a, b) {
        const c = [];
        let d = !1;
        Ud(ir, (e, f) => {
            let g;
            a.hasOwnProperty(f) && (f = a[f], f ? .google_ad_channel && (g = String(f.google_ad_channel)));
            --e;
            c[e] && c[e] !== "+" || (c[e] = g ? g.replace(/,/g, "+") : "+", d || (d = !!g))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function kV(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if (a.google_adtest === "on" || d ? .google_adtest === "on" || b) c.google_adtest = "on"
        }
    };
    var pV = class {
        constructor(a, b) {
            this.g = a;
            this.A = b
        }
        height() {
            return this.A
        }
        i(a) {
            return a > W(vv) && this.A > 300 ? this.g : Math.min(1200, Math.round(a))
        }
        j() {}
    };

    function qV(a) {
        return b => !!(b.vb() & a)
    }
    var rV = class extends pV {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.C = c;
            this.l = d
        }
        vb() {
            return this.C
        }
        j(a, b, c) {
            c.style.height = `${this.height()}px`;
            b.rpe = !0
        }
    };
    const sV = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            mobile_banner_image_sidebyside: 1 / 3.82,
            pub_control_image_stacked: 1 / 1.91,
            pub_control_image_sidebyside: 1 / 3.82,
            pub_control_image_card_stacked: 1 / 1.91,
            pub_control_image_card_sidebyside: 1 / 3.74,
            pub_control_text: 0,
            pub_control_text_card: 0
        },
        tV = {
            image_stacked: 80,
            image_sidebyside: 0,
            mobile_banner_image_sidebyside: 0,
            pub_control_image_stacked: 80,
            pub_control_image_sidebyside: 0,
            pub_control_image_card_stacked: 85,
            pub_control_image_card_sidebyside: 0,
            pub_control_text: 80,
            pub_control_text_card: 80
        },
        uV = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };

    function vV(a) {
        var b = 0;
        a.Qa && b++;
        a.Ea && b++;
        a.Fa && b++;
        if (b < 3) return {
            mb: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.Qa.split(",");
        const c = a.Fa.split(",");
        a = a.Ea.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            mb: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (b.length > 2) return {
            mb: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || f === 0) return {
                mb: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || f === 0) return {
                mb: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            Fa: d,
            Ea: e,
            Dh: b
        }
    }

    function wV(a) {
        return a >= 1200 ? {
            width: 1200,
            height: 600
        } : a >= 850 ? {
            width: a,
            height: Math.floor(a * .5)
        } : a >= 550 ? {
            width: a,
            height: Math.floor(a * .6)
        } : a >= 468 ? {
            width: a,
            height: Math.floor(a * .7)
        } : {
            width: a,
            height: Math.floor(a * 3.44)
        }
    }

    function xV(a, b, c, d) {
        b = Math.floor(((a - 8 * b - 8) / b * sV[d] + tV[d]) * c + 8 * c + 8);
        return a > 1500 ? {
            width: 0,
            height: 0,
            Xk: `Calculated slot width is too large: ${a}`
        } : b > 1500 ? {
            width: 0,
            height: 0,
            Xk: `Calculated slot height is too large: ${b}`
        } : {
            width: a,
            height: b
        }
    }

    function yV(a, b) {
        const c = a - 8 - 8;
        --b;
        return {
            width: a,
            height: Math.floor(c / 1.91 + 70) + Math.floor((c * sV.mobile_banner_image_sidebyside + tV.mobile_banner_image_sidebyside) * b + 8 * b + 8)
        }
    };
    const zV = $b("script");
    var AV = class {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, k = null, l = null, m = null, n = null) {
            this.H = a;
            this.ib = b;
            this.vb = c;
            this.g = d;
            this.D = e;
            this.la = f;
            this.Pa = g;
            this.A = h;
            this.l = k;
            this.i = l;
            this.j = m;
            this.C = n
        }
        size() {
            return this.ib
        }
    };
    const BV = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var CV = class extends pV {
        i(a) {
            return Math.min(1200, Math.max(this.g, Math.round(a)))
        }
    };

    function DV(a, b) {
        EV(a, b);
        if (b.google_content_recommendation_ui_type === "pedestal") return new AV(9, new CV(a, Math.floor(a * 2.189)));
        if (Q($u)) {
            var c = rc();
            var d = W(av);
            var e = W(Zu),
                f = W(Yu);
            a < 468 ? c ? (a = yV(a, d), d = {
                jb: a.width,
                hb: a.height,
                Ea: 1,
                Fa: d,
                Qa: "mobile_banner_image_sidebyside"
            }) : (a = xV(a, 1, d, "image_sidebyside"), d = {
                jb: a.width,
                hb: a.height,
                Ea: 1,
                Fa: d,
                Qa: "image_sidebyside"
            }) : (d = wV(a), e === 1 && (d.height = Math.floor(d.height * .5)), d = {
                jb: d.width,
                hb: d.height,
                Ea: f,
                Fa: e,
                Qa: "image_stacked"
            })
        } else d = rc(), a < 468 ? d ? (d = yV(a,
            12), d = {
            jb: d.width,
            hb: d.height,
            Ea: 1,
            Fa: 12,
            Qa: "mobile_banner_image_sidebyside"
        }) : (d = wV(a), d = {
            jb: d.width,
            hb: d.height,
            Ea: 1,
            Fa: 13,
            Qa: "image_sidebyside"
        }) : (d = wV(a), d = {
            jb: d.width,
            hb: d.height,
            Ea: 4,
            Fa: 2,
            Qa: "image_stacked"
        });
        FV(b, d);
        return new AV(9, new CV(d.jb, d.hb))
    }

    function GV(a, b) {
        EV(a, b); {
            const f = vV({
                Fa: b.google_content_recommendation_rows_num,
                Ea: b.google_content_recommendation_columns_num,
                Qa: b.google_content_recommendation_ui_type
            });
            if (f.mb) a = {
                jb: 0,
                hb: 0,
                Ea: 0,
                Fa: 0,
                Qa: "image_stacked",
                mb: f.mb
            };
            else {
                var c = f.Dh.length === 2 && a >= 468 ? 1 : 0;
                var d = f.Dh[c];
                d = d.indexOf("pub_control_") === 0 ? d : "pub_control_" + d;
                var e = uV[d];
                let g = f.Ea[c];
                for (; a / g < e && g > 1;) g--;
                e = g;
                c = f.Fa[c];
                a = xV(a, e, c, d);
                a = {
                    jb: a.width,
                    hb: a.height,
                    Ea: e,
                    Fa: c,
                    Qa: d
                }
            }
        }
        if (a.mb) throw new LB(a.mb);
        FV(b, a);
        return new AV(9,
            new CV(a.jb, a.hb))
    }

    function EV(a, b) {
        if (a <= 0) throw new LB(`Invalid responsive width from Matched Content slot ${b.google_ad_slot}: ${a}. Please ensure to put this Matched Content slot into a non-zero width div container.`);
    }

    function FV(a, b) {
        a.google_content_recommendation_ui_type = b.Qa;
        a.google_content_recommendation_columns_num = b.Ea;
        a.google_content_recommendation_rows_num = b.Fa
    };
    var HV = class extends pV {
        i() {
            return this.g
        }
        j(a, b, c) {
            Px(a, c);
            c.style.height = `${this.height()}px`;
            b.rpe = !0
        }
    };
    const IV = {
        "image-top": a => a <= 600 ? 284 + (a - 250) * .414 : 429,
        "image-middle": a => a <= 500 ? 196 - (a - 250) * .13 : 164 + (a - 500) * .2,
        "image-side": a => a <= 500 ? 205 - (a - 250) * .28 : 134 + (a - 500) * .21,
        "text-only": a => a <= 500 ? 187 - .228 * (a - 250) : 130,
        "in-article": a => a <= 420 ? a / 1.2 : a <= 460 ? a / 1.91 + 130 : a <= 800 ? a / 4 : 200
    };
    var JV = {
            "image-top": 0,
            "image-middle": 1,
            "image-side": 2,
            "text-only": 3,
            "in-article": 4
        },
        KV = class extends pV {
            i() {
                return Math.min(1200, this.g)
            }
        };

    function LV(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if (f === "in-article") {
            var g = a;
            if (e.google_full_width_responsive === "false") a = g;
            else if (a = Ix(b, c, g, W(iv), e), a !== !0) e.gfwrnwer = a, a = g;
            else if (a = mr(b))
                if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                    b: {
                        g = c;
                        for (let h = 0; h < 100 && g.parentElement; ++h) {
                            const k = g.parentElement.childNodes;
                            for (let l = 0; l < k.length; ++l) {
                                const m = k[l];
                                if (m !== g && Lx(b, m)) break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    Px(b, c)
                }
            else a = g;
            else a =
                g
        }
        if (a < 250) throw new LB("Fluid responsive ads must be at least 250px wide: " + `availableWidth=${a}`);
        a = Math.min(1200, Math.floor(a));
        if (d && f !== "in-article") {
            f = Math.ceil(d);
            if (f < 50) throw new LB("Fluid responsive ads must be at least 50px tall: " + `height=${f}`);
            return new AV(11, new pV(a, f))
        }
        if (f !== "in-article" && (d = e.google_ad_layout_key)) {
            f = `${d}`;
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length)
                for (b = [], e = 0; e < d; e++) b.push(parseInt(c[e], 36) / 1E3);
            else b = null;
            if (!b) throw new LB(`Invalid data-ad-layout-key value: ${f}`);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(c * 1E3 - -725 + 10);
            if (isNaN(f)) throw new LB(`Invalid height: height=${f}`);
            if (f < 50) throw new LB("Fluid responsive ads must be at least 50px tall: " + `height=${f}`);
            if (f > 1200) throw new LB("Fluid responsive ads must be at most 1200px tall: " + `height=${f}`);
            return new AV(11, new pV(a, f))
        }
        d = IV[f];
        if (!d) throw new LB("Invalid data-ad-layout value: " + f);
        c = Vx(c, b);
        b = mr(b);
        b = f !== "in-article" || c || a !== b ? Math.ceil(d(a)) : Math.ceil(d(a) * 1.25);
        return new AV(11, f === "in-article" ? new KV(a, b) : new pV(a, b))
    };

    function MV(a) {
        return b => {
            for (let c = a.length - 1; c >= 0; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function NV(a, b) {
        var c = OV.slice(0);
        const d = c.length;
        let e = null;
        for (let f = 0; f < d; ++f) {
            const g = c[f];
            if (a(g)) {
                if (b == null || b(g)) return g;
                e === null && (e = g)
            }
        }
        return e
    };
    var PV = [new rV(970, 90, 2), new rV(728, 90, 2), new rV(468, 60, 2), new rV(336, 280, 1), new rV(320, 100, 2), new rV(320, 50, 2), new rV(300, 600, 4), new rV(300, 250, 1), new rV(250, 250, 1), new rV(234, 60, 2), new rV(200, 200, 1), new rV(180, 150, 1), new rV(160, 600, 4), new rV(125, 125, 1), new rV(120, 600, 4), new rV(120, 240, 4), new rV(120, 120, 1, !0)],
        OV = [PV[6], PV[12], PV[3], PV[0], PV[7], PV[14], PV[1], PV[8], PV[10], PV[4], PV[15], PV[2], PV[11], PV[5], PV[13], PV[9], PV[16]];

    function QV(a, b, c, d, e) {
        e.google_full_width_responsive === "false" ? c = {
            va: a,
            la: 1
        } : b === "autorelaxed" && e.google_full_width_responsive || RV(b) || e.google_ad_resize ? (b = Jx(a, c, d, e), c = b !== !0 ? {
            va: a,
            la: b
        } : {
            va: mr(c) || a,
            la: !0
        }) : c = {
            va: a,
            la: 2
        };
        const {
            va: f,
            la: g
        } = c;
        return g !== !0 ? {
            va: a,
            la: g
        } : d.parentElement ? {
            va: f,
            la: g
        } : {
            va: a,
            la: g
        }
    }

    function SV(a, b, c, d, e) {
        const {
            va: f,
            la: g
        } = RB(247, () => QV(a, b, c, d, e));
        var h = g === !0;
        const k = be(d.style.width),
            l = be(d.style.height),
            {
                ib: m,
                Pa: n,
                vb: p,
                Bh: w
            } = TV(f, b, c, d, e, h);
        h = UV(b, p);
        var v;
        const t = (v = Qx(d, c, "marginLeft")) ? `${v}px` : "",
            C = (v = Qx(d, c, "marginRight")) ? `${v}px` : "";
        v = Sx(d, c) || "";
        return new AV(h, m, p, null, w, g, n, t, C, l, k, v)
    }

    function RV(a) {
        return a === "auto" || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function TV(a, b, c, d, e, f) {
        b = VV(c, a, b);
        let g;
        var h = !1;
        let k = !1;
        var l = mr(c) < 488;
        if (l) {
            g = Cx(d, c);
            var m = Vx(d, c);
            h = !m && g;
            k = m && g
        }
        m = [Tx(a), qV(b)];
        Q(tv) || m.push(Ux(l, c, d, k));
        e.google_max_responsive_height != null && m.push(Wx(e.google_max_responsive_height));
        l = [v => !v.l];
        if (h || k) h = Xx(c, d), l.push(Wx(h));
        const n = NV(MV(m), MV(l));
        if (!n) throw new LB(`No slot size for availableWidth=${a}`);
        const {
            ib: p,
            Pa: w
        } = RB(248, () => {
            var v;
            a: if (f) {
                if (e.gfwrnh && (v = be(e.gfwrnh))) {
                    v = {
                        ib: new HV(a, v),
                        Pa: !0
                    };
                    break a
                }
                v = W(kv);
                v = v > 0 ? a / v : a /
                    1.2;
                if (e.google_resizing_allowed || e.google_full_width_responsive === "true") var t = Infinity;
                else {
                    t = d;
                    let I = Infinity;
                    do {
                        var C = Qx(t, c, "height");
                        C && (I = Math.min(I, C));
                        (C = Qx(t, c, "maxHeight")) && (I = Math.min(I, C))
                    } while (t.parentElement && (t = t.parentElement) && t.tagName !== "HTML");
                    t = I
                }!(Q(mv) && t <= v * 2) && (t = Math.min(v, t), t < v * .5 || t < 100) && (t = v);
                v = {
                    ib: new HV(a, Math.floor(t)),
                    Pa: t < v ? 102 : !0
                }
            } else v = {
                ib: n,
                Pa: 100
            };
            return v
        });
        return e.google_ad_layout === "in-article" ? {
            ib: WV(a, c, d, p, e),
            Pa: !1,
            vb: b,
            Bh: g
        } : {
            ib: p,
            Pa: w,
            vb: b,
            Bh: g
        }
    }

    function UV(a, b) {
        if (a === "auto") return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8;
            default:
                throw Error("bad mask");
        }
    }

    function VV(a, b, c) {
        if (c === "auto") c = Math.min(1200, mr(a)), b = b / c <= .25 ? 4 : 3;
        else {
            b = 0;
            for (const d in Bx) c.indexOf(d) !== -1 && (b |= Bx[d])
        }
        return b
    }

    function WV(a, b, c, d, e) {
        const f = e.google_ad_height || Qx(c, b, "height");
        b = LV(a, b, c, f, e).size();
        return b.g * b.height() > a * d.height() ? new rV(b.g, b.height(), 1) : d
    };

    function XV(a, b, c, d, e) {
        var f;
        (f = mr(b)) ? mr(b) < 488 ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Px(b, c), f = {
            va: f,
            la: !0
        }) : f = {
            va: a,
            la: 5
        } : f = {
            va: a,
            la: 4
        }: f = {
            va: a,
            la: 10
        };
        const {
            va: g,
            la: h
        } = f;
        if (h !== !0 || a === g) return new AV(12, new pV(a, d), null, null, !0, h, 100);
        const {
            ib: k,
            Pa: l,
            vb: m
        } = TV(g, "auto", b, c, e, !0);
        return new AV(1, k, m, 2, !0, h, l)
    };

    function YV(a) {
        const b = a.google_ad_format;
        if (b === "autorelaxed") {
            if (Q(wv)) return a.google_ad_format = "auto", 1;
            a: {
                if (a.google_content_recommendation_ui_type !== "pedestal")
                    for (const c of BV)
                        if (a[c] != null) {
                            a = !0;
                            break a
                        }
                a = !1
            }
            return a ? 9 : 5
        }
        if (RV(b)) return 1;
        if (b === "link") return 4;
        if (b === "fluid") return a.google_ad_layout === "in-article" ? (ZV(a), 1) : 8;
        if (a.google_reactive_ad_format === 27) return ZV(a), 1
    }

    function $V(a, b, c, d, e = !1) {
        var f = b.offsetWidth || (c.google_ad_resize || e) && Qx(b, d, "width") || c.google_ad_width || 0;
        a === 4 && (c.google_ad_format = "auto", a = 1);
        e = (e = aW(a, f, b, c, d)) ? e : SV(f, c.google_ad_format, d, b, c);
        e.size().j(d, c, b);
        e.vb != null && (c.google_responsive_formats = e.vb);
        e.D != null && (c.google_safe_for_responsive_override = e.D);
        e.la != null && (e.la === !0 ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = e.la));
        e.Pa != null && e.Pa !== !0 && (c.gfwrnher = e.Pa);
        d = e.j || c.google_ad_width;
        d != null && (c.google_resizing_width = d);
        d = e.i || c.google_ad_height;
        d != null && (c.google_resizing_height = d);
        d = e.size().i(f);
        const g = e.size().height();
        c.google_ad_width = d;
        c.google_ad_height = g;
        var h = e.size();
        f = `${h.i(f)}x${h.height()}`;
        c.google_ad_format = f;
        c.google_responsive_auto_format = e.H;
        e.g != null && (c.armr = e.g);
        c.google_ad_resizable = !0;
        c.google_override_format = 1;
        c.google_loader_features_used = 128;
        e.la === !0 && (c.gfwrnh = `${e.size().height()}px`);
        e.A != null && (c.gfwroml = e.A);
        e.l != null && (c.gfwromr = e.l);
        e.i != null &&
            (c.gfwroh = e.i);
        e.j != null && (c.gfwrow = e.j);
        e.C != null && (c.gfwroz = e.C);
        f = Pd(window) || window;
        FQ(f.location, "google_responsive_dummy_ad") && (Xa([1, 2, 3, 4, 5, 6, 7, 8], e.H) || e.g === 1) && e.g !== 2 && (f = JSON.stringify({
            googMsgType: "adpnt",
            key_value: [{
                key: "qid",
                value: "DUMMY_AD"
            }]
        }), c.dash = `<${zV}>window.top.postMessage('${f}', '*'); 
          </${zV}> 
          <div id="dummyAd" style="width:${d}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${g}</p> 
            <p>Rendered size:${d}x${g}</p> 
          </div>`);
        a !== 1 && (a = e.size().height(), b.style.height = `${a}px`)
    }

    function aW(a, b, c, d, e) {
        const f = d.google_ad_height || Qx(c, e, "height") || 0;
        switch (a) {
            case 5:
                const {
                    va: g,
                    la: h
                } = RB(247, () => QV(b, d.google_ad_format, e, c, d));
                h === !0 && b !== g && Px(e, c);
                h === !0 ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                return DV(g, d);
            case 9:
                return GV(b, d);
            case 8:
                return LV(b, e, c, f, d);
            case 10:
                return XV(b, e, c, f, d)
        }
    }

    function ZV(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function bW(a, b) {
        a.google_resizing_allowed = !0;
        a.ovlp = !0;
        a.google_ad_format = "auto";
        a.iaaso = !0;
        a.armr = b
    };
    var cW = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function dW(a, b) {
        if (b == 15) {
            if (a >= 728) return 728;
            if (a >= 468) return 468
        } else if (b == 90) {
            if (a >= 200) return 200;
            if (a >= 180) return 180;
            if (a >= 160) return 160;
            if (a >= 120) return 120
        }
        return null
    };

    function eW(a, b) {
        var c = Pd(b);
        if (c) {
            c = mr(c);
            const d = Sd(a, b) || {},
                e = d.direction;
            if (d.width === "0px" && d.cssFloat !== "none") return -1;
            if (e === "ltr" && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if (e === "rtl" && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function fW(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            default:
                return b
        }
    }

    function gW(a, b) {
        if (a = Jl(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return b.google_ad_intent_query ? 17 : 12
    };

    function hW(a, b) {
        if (!Hx(b, a)) return () => {};
        a = iW(b, a);
        if (!a) return () => {};
        const c = YH();
        b = yc(b);
        const d = {
            Qb: a,
            F: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => Za(c, d)
    }

    function iW(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !Yx.test(a.className);) a = a.parentElement;
        return a
    }

    function jW(a, b) {
        for (let c = 0; c < a.childNodes.length; c++) {
            const d = {},
                e = a.childNodes[c];
            Dx(e.style, d);
            if (d.google_ad_width == b.google_ad_width && d.google_ad_height == b.google_ad_height) return e
        }
        return null
    }

    function kW(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function lW(a, b, c) {
        const d = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.i != d) {
            a.i = d;
            a = YH();
            for (const e of a)
                if (e.Qb.offsetWidth != e.offsetWidth || e.F.google_full_width_responsive_allowed) e.offsetWidth = e.Qb.offsetWidth, RB(467, () => {
                    var f = e.Qb,
                        g = e.F;
                    const h = jW(f, g);
                    g.google_full_width_responsive_allowed && (f.style.marginLeft = g.gfwroml || "", f.style.marginRight = g.gfwromr || "", f.style.height = g.gfwroh ? `${g.gfwroh}px` : "", f.style.width = g.gfwrow ? `${g.gfwrow}px` : "", f.style.zIndex = g.gfwroz || "", delete g.google_full_width_responsive_allowed);
                    delete g.google_ad_format;
                    delete g.google_ad_width;
                    delete g.google_ad_height;
                    delete g.google_content_recommendation_ui_type;
                    delete g.google_content_recommendation_rows_num;
                    delete g.google_content_recommendation_columns_num;
                    if (f.getAttribute("src")) {
                        var k = f.getAttribute("src") || "",
                            l = ud(k, "client");
                        l && (g.google_ad_client = fW("google_ad_client", l));
                        (k = ud(k, "host")) && (g.google_ad_host = fW("google_ad_host", k))
                    }
                    for (var m of f.attributes) /data-/.test(m.name) && (k = Lb(m.name.replace("data-matched-content", "google_content_recommendation").replace("data",
                        "google").replace(/-/g, "_")), g.hasOwnProperty(k) || (l = fW(k, m.value), l !== null && (g[k] = l)));
                    if (b.document && b.document.body && !YV(g) && !g.google_reactive_ad_format && !g.google_ad_intent_query && (l = parseInt(f.style.width, 10), k = eW(f, b), k > 0 && l > k)) {
                        m = parseInt(f.style.height, 10);
                        l = !!cW[l + "x" + m];
                        let n = k;
                        if (l) {
                            const p = dW(k, m);
                            if (p) n = p, g.google_ad_format = p + "x" + m + "_0ads_al";
                            else throw new LB("No slot size for availableWidth=" + k);
                        }
                        g.google_ad_resize = !0;
                        g.google_ad_width = n;
                        l || (g.google_ad_format = null, g.google_override_format = !0);
                        k = n;
                        f.style.width = `${k}px`;
                        bW(g, 4)
                    }
                    if (Q(bv) || mr(b) < 488) {
                        k = Pd(b) || b;
                        m = f.offsetWidth || Qx(f, b, "width") || g.google_ad_width || 0;
                        l = g.google_ad_client;
                        if (k = FQ(k.location, "google_responsive_slot_preview") || OQ(k, c, l)) b: if (g.google_reactive_ad_format || g.google_ad_resize || YV(g) || Ex(f, g)) k = !1;
                            else {
                                for (k = f; k; k = k.parentElement) {
                                    l = Sd(k, b);
                                    if (!l) {
                                        g.gfwrnwer = 18;
                                        k = !1;
                                        break b
                                    }
                                    if (!Xa(["static", "relative"], l.position)) {
                                        g.gfwrnwer = 17;
                                        k = !1;
                                        break b
                                    }
                                }
                                if (!Q(uv) && (k = W(jv), m = Ix(b, f, m, k, g), m !== !0)) {
                                    g.gfwrnwer = m;
                                    k = !1;
                                    break b
                                }
                                k =
                                    b === b.top ? !0 : !1
                            }
                        k ? (bW(g, 1), m = !0) : m = !1
                    } else m = !1;
                    if (k = YV(g)) $V(k, f, g, b, m);
                    else {
                        if (Ex(f, g)) {
                            if (m = Sd(f, b)) f.style.width = m.width, f.style.height = m.height, Dx(m, g);
                            g.google_ad_width || (g.google_ad_width = f.offsetWidth);
                            g.google_ad_height || (g.google_ad_height = f.offsetHeight);
                            g.google_loader_features_used = 256;
                            g.google_responsive_auto_format = gW(b, g)
                        } else Dx(f.style, g);
                        b.location && b.location.hash === "#gfwmrp" || g.google_responsive_auto_format === 12 && g.google_full_width_responsive === "true" ? $V(10, f, g, b, !1) : Math.random() <
                            .01 && g.google_responsive_auto_format === 12 && (m = Jx(f.offsetWidth || parseInt(f.style.width, 10) || g.google_ad_width, b, f, g), m !== !0 ? (g.efwr = !1, g.gfwrnwer = m) : g.efwr = !0)
                    }
                    m = jW(f, g);
                    !m && h && f.childNodes.length == 1 ? (kW(h, !1), g.google_reactive_ad_format = 16, g.google_ad_section = "responsive_resize", dV(f, g, b)) : m && h && m != h && (kW(h, !1), kW(m, !0))
                })
        }
    }
    var mW = class extends R {
        constructor() {
            super(...arguments);
            this.i = null
        }
        init(a, b) {
            const c = NH();
            if (!SH(c, 27, !1)) {
                TH(c, 27, !0);
                this.i = a.innerHeight >= a.innerWidth ? 1 : 2;
                var d = () => {
                    lW(this, a, b)
                };
                xk(a, "resize", d);
                Rr(this, () => {
                    yk(a, "resize", d)
                })
            }
        }
    };
    var nW = class {
        constructor(a, b) {
            this.K = a;
            this.Qb = b;
            this.g = null;
            this.j = 0
        }
        run() {
            this.g = r.setInterval(Da(this.i, this), 500);
            this.i()
        }
        i() {
            ++this.j >= 10 && r.clearInterval(this.g);
            var a = Nx(this.K, this.Qb);
            Ox(this.K, this.Qb, a);
            a = Gx(this.Qb, this.K);
            a != null && a.x === 0 || r.clearInterval(this.g)
        }
    };
    var oW = class {
        constructor(a) {
            this.g = 0;
            this.j = this.J = null;
            this.G = 0;
            this.i = [];
            this.Uc = this.D = "";
            this.C = null;
            this.H = !1;
            this.K = a.K;
            this.pubWin = a.pubWin;
            this.F = a.F;
            this.Z = a.Z;
            this.La = a.La;
            this.Da = a.Da;
            this.ba = a.ba;
            this.pageState = a.pageState
        }
    };

    function pW(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : a >= 0 ? a : "-M"
    };
    Jd `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;
    async function qW(a) {
        YQ("browsing-topics", a.document)
    };

    function rW(a, b, c) {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => {
            sW(d)
        });
        return nQ(a, "adpnt", (e, f) => {
            if (vr(f, c.contentWindow)) {
                e = yr(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e), a.googletag ? ? (a.googletag = {
                        cmd: []
                    }), a.googletag.queryIds = a.googletag.queryIds ? ? [], a.googletag.queryIds.push(e), a.googletag.queryIds.length > 500 && a.googletag.queryIds.shift()
                } catch {}
                d.dataset.adStatus = "filled";
                e = !0
            } else e = !1;
            return e
        })
    }

    function sW(a) {
        setTimeout(() => {
            a.dataset.adStatus !== "filled" && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function tW(a, b, {
        kg: c,
        lg: d
    }) {
        return B(b, 8) || (c || !b.g()) && d || !HN(a.g) ? !1 : !0
    }

    function uW(a, b, {
        kg: c,
        lg: d
    }) {
        if (tW(a, b, {
                kg: c,
                lg: d
            })) return JN("__eoi", a.g) ? ? void 0
    }
    var vW = class {
        constructor(a) {
            this.g = a
        }
    };

    function wW(a, b, c) {
        try {
            if (!ye(c.origin) || !vr(c, a.i.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e = null;
        typeof d === "string" && (e = a.messageHandlers[d]) && a.Aa.sb(168, () => {
            e.call(a, b, c)
        })
    }
    var xW = class extends R {
        constructor(a, b) {
            var c = OB,
                d = MB;
            super();
            this.j = a;
            this.i = b;
            this.Aa = c;
            this.I = d;
            this.messageHandlers = {};
            this.V = [];
            this.Ja = this.Aa.tb(168, (e, f) => void wW(this, e, f));
            this.Fg = this.Aa.tb(169, (e, f) => zr(this.j, "ras::xsf", this.I, f));
            this.init({})
        }
        init() {
            this.X(this.messageHandlers);
            this.V.push(mQ(this.j, "sth", this.Ja, this.Fg))
        }
        g() {
            for (const a of this.V) a();
            this.V.length = 0;
            super.g()
        }
    };
    var yW = class extends xW {};

    function zW(a, b, c, d = null) {
        return new AW(a, b, c, d)
    }
    var AW = class extends yW {
        constructor(a, b, c, d) {
            super(a, b);
            this.Ha = c;
            this.C = d;
            this.D = P(nI);
            this.l = () => {};
            xk(this.i, "load", this.l)
        }
        g() {
            yk(this.i, "load", this.l);
            super.g()
        }
        X(a) {
            a["adsense-labs"] = b => {
                if (b = yr(b).settings)
                    if (b = Ii(Vk, JSON.parse(b)), hi(b, 1) != null) {
                        var c = b.P;
                        if ($h(b, c, c[x] | 0, Uk, 4, 3).length > 0) {
                            var d = c = ai(b, Uk, 4, Jh(vf)),
                                e = this.D;
                            const h = new Jo;
                            for (var f of d) switch (f.getVersion()) {
                                case 1:
                                    ti(h, 1, !0);
                                    break;
                                case 2:
                                    ti(h, 2, !0)
                            }
                            f = new Ko;
                            f = ci(f, 1, Lo, h);
                            vI(e, f);
                            f = this.j;
                            e = this.C;
                            if (!SH(NH(), 37, !1)) {
                                f =
                                    new kR(f);
                                for (var g of c) switch (g.getVersion()) {
                                    case 1:
                                        hR(f, "__gads", g, e);
                                        break;
                                    case 2:
                                        hR(f, "__gpi", g, e)
                                }
                                TH(NH(), 37, !0)
                            }
                            Ch(b, 4)
                        }
                        if (g = z(b, Uk, 5)) c = this.j, SH(NH(), 40, !1) || (c = new vW(c), f = pb(Fu(ji(g, 2))) - Date.now() / 1E3, f = {
                            ee: Math.max(f, 0),
                            path: pb(D(g, 3)),
                            domain: pb(D(g, 4)),
                            Ee: !1
                        }, KN("__eoi", pb(g.getValue()), f, c.g), TH(NH(), 40, !0));
                        Ch(b, 5);
                        g = this.j;
                        c = D(b, 1) || "";
                        f = this.Ha;
                        if (dt(SN({
                                B: g,
                                Ha: f
                            }))) {
                            f = SQ(g, f);
                            b !== null && (f[c] = jh(b));
                            try {
                                g.localStorage.setItem("google_adsense_settings", JSON.stringify(f))
                            } catch (h) {}
                        }
                    }
            }
        }
    };

    function BW(a) {
        a.l = a.C;
        a.D.style.transition = "height 500ms";
        a.ta.style.transition = "height 500ms";
        a.i.style.transition = "height 500ms";
        CW(a)
    }

    function DW(a, b) {
        oQ(a.i.contentWindow, "sth", {
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b
        }, "*")
    }

    function CW(a) {
        const b = `rect(0px, ${a.i.width}px, ${a.l}px, 0px)`;
        a.i.style.clip = b;
        a.ta.style.clip = b;
        a.i.setAttribute("height", a.l.toString());
        a.i.style.height = `${a.l}px`;
        a.ta.setAttribute("height", a.l.toString());
        a.ta.style.height = `${a.l}px`;
        a.D.style.height = `${a.l}px`
    }

    function EW(a, b) {
        b = ae(b.r_nh);
        a.C = b == null ? 0 : b;
        if (a.C <= 0) return "1";
        a.J = lm(a.D).y;
        a.G = wr(a.j);
        if (a.J + a.l < a.G) return "2";
        if (a.J > qr(a.j) - a.j.innerHeight) return "3";
        b = a.G;
        a.i.setAttribute("height", a.C.toString());
        a.i.style.height = `${a.C}px`;
        a.ta.style.overflow = "hidden";
        a.D.style.position = "relative";
        a.D.style.transition = "height 100ms";
        a.ta.style.transition = "height 100ms";
        a.i.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.J, a.l);
        em(a.ta, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.i.width}px, ${b}px, 0px)`;
        em(a.i, {
            clip: b
        });
        em(a.ta, {
            clip: b
        });
        return "0"
    }
    var FW = class extends yW {
        constructor(a, b) {
            super(a.K, b);
            this.nb = this.xd = !1;
            this.pa = this.G = this.C = 0;
            this.ta = a.ba;
            this.D = this.ta.parentElement && this.ta.parentElement.classList.contains("adsbygoogle") ? this.ta.parentElement : this.ta;
            this.l = parseInt(this.ta.style.height, 10);
            this.Ai = this.l / 5;
            this.J = lm(this.D).y;
            this.zi = qc(SB(651, () => {
                this.J = lm(this.D).y;
                var c = this.G;
                this.G = wr(this.j);
                this.l < this.C ? (c = this.G - c, c > 0 && (this.pa += c, this.pa >= this.Ai ? (BW(this), DW(this, this.C)) : (this.l = Math.min(this.C, this.l + c), DW(this,
                    c), CW(this)))) : yk(this.j, "scroll", this.M)
            }), this);
            this.M = () => {
                var c = this.zi;
                bl.requestAnimationFrame ? bl.requestAnimationFrame(c) : c()
            }
        }
        X(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = yr(b);
                this.xd || (this.xd = !0, b = EW(this, b), b === "0" && xk(this.j, "scroll", this.M, uk), oQ(c.target, "sth", {
                    msg_type: "expand-on-scroll-result",
                    eos_success: b === "0"
                }, "*"))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.nb || (this.nb = !0, BW(this), yk(this.j, "scroll", this.M))
            }
        }
        g() {
            this.M && yk(this.j, "scroll", this.M, uk);
            super.g()
        }
    };

    function GW(a) {
        const b = a.J.getBoundingClientRect(),
            c = b.top + b.height < 0;
        return !(b.top > a.i.innerHeight) && !c
    }
    var HW = class extends R {
        constructor(a, b, c) {
            super();
            this.i = a;
            this.C = b;
            this.J = c;
            this.D = 0;
            this.l = GW(this);
            const d = pc(this.G, this);
            this.j = SB(433, () => {
                bl.requestAnimationFrame ? bl.requestAnimationFrame(d) : d()
            });
            xk(this.i, "scroll", this.j, uk)
        }
        G() {
            const a = GW(this);
            if (a && !this.l) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.C.contentWindow;
                c && (pQ(c, "ig", b, "*", 2), ++this.D >= 10 && this.dispose())
            }
            this.l = a
        }
        dispose() {
            this.j && yk(this.i, "scroll", this.j, uk)
        }
    };

    function IW(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return typeof c === "string" ? c : c.property + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        em(a, "transition", b.join(","))
    }
    var JW = nc(function() {
        const a = Vl(document, "DIV"),
            b = ec ? "-webkit" : dc ? "-moz" : null;
        let c = "transition:opacity 1s linear;";
        b && (c += b + "-transition:opacity 1s linear;");
        dd(a, Fd("div", {
            style: c
        }));
        return hm(a.firstChild, "transition") != ""
    });

    function KW(a, b, c) {
        a.i[b].indexOf(c) < 0 && (a.i[b] += c)
    }

    function LW(a, b) {
        a.g.indexOf(b) >= 0 || (a.g = b + a.g)
    }

    function MW(a, b) {
        a.errors.indexOf(b) < 0 && (a.errors = b + a.errors)
    }

    function NW(a, b, c, d) {
        return a.errors != "" || b ? null : a.g.replace(OW, "") == "" ? c != null && a.i[0] || d != null && a.i[1] ? !1 : !0 : !1
    }

    function PW(a) {
        var b = NW(a, "", null, 0);
        if (b === null) return "XS";
        b = b ? "C" : "N";
        a = a.g;
        return a.indexOf("a") >= 0 ? b + "A" : a.indexOf("f") >= 0 ? b + "F" : b + "S"
    }
    var QW = class {
        constructor(a, b) {
            this.i = ["", ""];
            this.g = a || "";
            this.errors = b || ""
        }
        toString() {
            return [this.i[0], this.i[1], this.g, this.errors].join("|")
        }
    };

    function RW(a) {
        let b = a.X;
        a.D = () => {};
        SW(a, a.C, b);
        let c = a.C.parentElement;
        if (!c) return a.g;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Sd(c, b)
            } catch (g) {
                MW(a.g, "c")
            }
            const f = TW(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.V = !0);
            if (d && !f && UW(e)) {
                LW(a.g, "l");
                a.G = c;
                break
            }
            d = d && f;
            if (e && VW(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.pubWin) break;
                try {
                    if (c = b.frameElement, b = b.parent, !Md(b)) {
                        LW(a.g, "c");
                        break
                    }
                } catch (g) {
                    LW(a.g,
                        "c");
                    break
                }
            }
        }
        a.H && a.l && WW(a);
        return a.g
    }

    function XW(a) {
        function b(m) {
            for (let n = 0; n < m.length; n++) em(k, m[n], "0px")
        }

        function c() {
            YW(d, g, h);
            !k || l || h || (b(ZW), b(c_))
        }
        const d = a.C;
        d.style.overflow = a.Bd ? "visible" : "hidden";
        a.H && (a.G ? (IW(d, d_()), IW(a.G, d_())) : IW(d, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        a.M !== null && (d.style.opacity = String(a.M));
        const e = a.width != null && a.j != null && (a.Ae || a.j > a.width) ? a.j : null,
            f = a.height != null && a.i != null && (a.Ae || a.i > a.height) ? a.i : null;
        if (a.J) {
            const m =
                a.J.length;
            for (let n = 0; n < m; n++) YW(a.J[n], e, f)
        }
        const g = a.j,
            h = a.i,
            k = a.G,
            l = a.V;
        a.H ? r.setTimeout(c, 1E3) : c()
    }

    function e_(a) {
        if (a.l && !a.pa || a.j == null && a.i == null && a.M == null && a.l) return a.g;
        var b = a.l;
        a.l = !1;
        RW(a);
        a.l = b;
        if (!b || a.check != null && !NW(a.g, a.check, a.j, a.i)) return a.g;
        a.g.g.indexOf("n") >= 0 && (a.width = null, a.height = null);
        if (a.width == null && a.j !== null || a.height == null && a.i !== null) a.H = !1;
        (a.j == 0 || a.i == 0) && a.g.g.indexOf("l") >= 0 && (a.j = 0, a.i = 0);
        b = a.g;
        b.i[0] = "";
        b.i[1] = "";
        b.g = "";
        b.errors = "";
        XW(a);
        return RW(a)
    }

    function VW(a, b) {
        let c = !1;
        b.display == "none" && (LW(a.g, "n"), a.l && (c = !0));
        b.visibility != "hidden" && b.visibility != "collapse" || LW(a.g, "v");
        b.overflow == "hidden" && LW(a.g, "o");
        b.position == "absolute" ? (LW(a.g, "a"), c = !0) : b.position == "fixed" && (LW(a.g, "f"), c = !0);
        return c
    }

    function SW(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = f_(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && KW(a.g, 0, "o"), d & 4 && KW(a.g, 1, "o"));
        return !(d & 1)
    }

    function TW(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (t) {
            MW(a.g, "s")
        }
        var f = c.getAttribute("width"),
            g = ae(f),
            h = c.getAttribute("height"),
            k = ae(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = SW(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var p = e && e.width,
            w = e && e.height,
            v = be(m) == a.width && be(n) == a.height;
        m = v ? m : p;
        w = v ? n : w;
        p = be(m);
        v = be(w);
        g = a.width !== null && (p !== null && a.width >= p || g !== null && a.width >= g);
        v = a.height !== null && (v !== null && a.height >= v || k !== null && a.height >= k);
        k = !b && UW(d);
        v = b || v || k || !(f ||
            m || d && (!g_(String(d.minWidth)) || !h_(String(d.maxWidth))));
        l = b || g || k || l || !(h || w || d && (!g_(String(d.minHeight)) || !h_(String(d.maxHeight))));
        i_(a, 0, v, c, "width", f, a.width, a.j);
        j_(a, 0, "d", v, e, d, "width", m, a.width, a.j);
        j_(a, 0, "m", v, e, d, "minWidth", e && e.minWidth, a.width, a.j);
        j_(a, 0, "M", v, e, d, "maxWidth", e && e.maxWidth, a.width, a.j);
        a.pg ? (c = /^html|body$/i.test(c.nodeName), f = be(n), h = d ? d.overflowY === "auto" || d.overflowY === "scroll" : !1, h = a.i != null && d && f && Math.round(f) !== a.i && !h && d.minHeight !== "100%", a.l && !c && h && (e.setProperty("height",
            "auto", "important"), d && !g_(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !h_(String(d.maxHeight)) && a.i && Math.round(f) < a.i && e.setProperty("max-height", "none", "important"))) : (i_(a, 1, l, c, "height", h, a.height, a.i), j_(a, 1, "d", l, e, d, "height", w, a.height, a.i), j_(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.height, a.i), j_(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.height, a.i));
        return b
    }

    function WW(a) {
        function b() {
            if (c > 0) {
                var l = Sd(e, d) || {
                    width: 0,
                    height: 0
                };
                const m = be(l.width);
                l = be(l.height);
                m !== null && f !== null && h && h(0, f - m);
                l !== null && g !== null && h && h(1, g - l);
                --c
            } else r.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.X,
            e = a.C,
            f = a.j,
            g = a.i,
            h = a.D;
        let k;
        r.setTimeout(() => {
            k = r.setInterval(b, 16)
        }, 990)
    }

    function f_(a, b, c) {
        if (b.nodeType == 3) return /\S/.test(b.data) ? 1 : 0;
        if (b.nodeType == 1) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = Sd(b, c)
            } catch (e) {}
            if (d) {
                if (d.display == "none" || d.position == "fixed") return 0;
                if (d.position == "absolute") {
                    if (!a.A.boundingClientRect || d.visibility == "hidden" || d.visibility == "collapse") return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.A.boundingClientRect.left ? 2 : 0) | (c.bottom > a.A.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function i_(a, b, c, d, e, f, g, h) {
        if (h != null) {
            if (typeof f == "string") {
                if (f == "100%" || !f) return;
                f = ae(f);
                f == null && (MW(a.g, "n"), KW(a.g, b, "d"))
            }
            if (f != null)
                if (c) {
                    if (a.l)
                        if (a.H) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.D;
                            a.D = (m, n) => {
                                m == b && ed(d, e, String(k - n));
                                l && l(m, n)
                            }
                        } else ed(d, e, String(h))
                } else KW(a.g, b, "d")
        }
    }

    function j_(a, b, c, d, e, f, g, h, k, l) {
        if (l != null) {
            f = f && f[g];
            typeof f != "string" || (c == "m" ? g_(f) : h_(f)) || (f = be(f), f == null ? LW(a.g, "p") : k != null && LW(a.g, f == k ? "E" : "e"));
            if (typeof h == "string") {
                if (c == "m" ? g_(h) : h_(h)) return;
                h = be(h);
                h == null && (MW(a.g, "p"), KW(a.g, b, c))
            }
            if (h != null)
                if (d && e) {
                    if (a.l)
                        if (a.H) {
                            const m = Math.max(h + l - (k || 0), 0),
                                n = a.D;
                            a.D = (p, w) => {
                                p == b && (e[g] = `${m-w}px`);
                                n && n(p, w)
                            }
                        } else e[g] = `${l}px`
                } else KW(a.g, b, c)
        }
    }
    var o_ = class {
        constructor(a, b, c, d, e, f, g) {
            this.pubWin = a;
            this.C = b;
            this.J = c;
            this.G = this.D = null;
            this.V = !1;
            this.A = new k_(this.C);
            this.X = (a = this.C.ownerDocument) && (a.defaultView || a.parentWindow);
            this.A = new k_(this.C);
            this.l = g;
            this.pa = l_(this.A, d.Bg, d.height, d.pd);
            this.width = this.l ? this.A.boundingClientRect ? this.A.boundingClientRect.right - this.A.boundingClientRect.left : null : e;
            this.height = this.l ? this.A.boundingClientRect ? this.A.boundingClientRect.bottom - this.A.boundingClientRect.top : null : f;
            this.j = m_(d.width);
            this.i = m_(d.height);
            this.M = this.l ? m_(d.opacity) : null;
            this.check = d.check;
            this.pd = !!d.pd;
            this.H = d.Bg == "animate" && !n_(this.A, this.i, this.pd) && JW();
            this.Bd = !!d.Bd;
            this.g = new QW;
            n_(this.A, this.i, this.pd) && LW(this.g, "r");
            e = this.A;
            e.g && e.i >= e.W && LW(this.g, "b");
            this.Ae = !!d.Ae;
            this.pg = !!d.pg
        }
    };

    function n_(a, b, c) {
        var d;
        (d = a.g) && !(d = !a.visible) && (c ? (b = a.i + Math.min(b, m_(a.getHeight())), a = a.g && b >= a.W) : a = a.g && a.i >= a.W, d = a);
        return d
    }
    var k_ = class {
        constructor(a) {
            this.boundingClientRect = null;
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && Pd(c);
            this.g = !!c;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.i = e;
            c = c || r;
            this.W = (c.document.compatMode == "CSS1Compat" ? c.document.documentElement : c.document.body).clientHeight;
            b = b && uU(b);
            this.visible = !!a && !(b == 2 || b == 3) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.visible
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function l_(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return n_(a, c, d)
        }
    }

    function UW(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }
    var p_ = new QW("s", ""),
        OW = RegExp("[lonvafrbpEe]", "g");

    function h_(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function g_(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function YW(a, b, c) {
        b !== null && ae(a.getAttribute("width")) !== null && a.setAttribute("width", String(b));
        c !== null && ae(a.getAttribute("height")) !== null && a.setAttribute("height", String(c));
        b !== null && (a.style.width = `${b}px`);
        c !== null && (a.style.height = `${c}px`)
    }
    var ZW = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        c_ = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");

    function d_() {
        let a = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
            b = ZW;
        for (var c = 0; c < b.length; c++) a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
        b = c_;
        for (c = 0; c < b.length; c++) a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
        return a
    }

    function m_(a) {
        return typeof a === "string" ? ae(a) : typeof a === "number" && isFinite(a) ? a : null
    };
    var q_ = class extends yW {
        constructor(a, b, c) {
            super(a, b);
            this.ba = c
        }
        X(a) {
            a["resize-me"] = (b, c) => {
                b = yr(b);
                var d = b.r_chk;
                if (d == null || d === "") {
                    var e = ae(b.r_nw),
                        f = ae(b.r_nh),
                        g = ae(b.r_no);
                    g != null || e !== 0 && f !== 0 || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null; {
                        var k = /^true$/.test(b.r_ao),
                            l = /^true$/.test(b.r_ifr),
                            m = /^true$/.test(b.r_cab);
                        const w = window;
                        if (w)
                            if (h === "no_rsz") b.err = "7", e = !0;
                            else {
                                var n = new k_(this.i);
                                if (n.g) {
                                    var p = n.getWidth();
                                    p != null && (b.w = p);
                                    p = n.getHeight();
                                    p != null && (b.h = p);
                                    l_(n, h, f, m) ? (n = this.ba, d = e_(new o_(w,
                                        n, [this.i], {
                                            width: e,
                                            height: f,
                                            opacity: g,
                                            check: d,
                                            Bg: h,
                                            Bd: k,
                                            Ae: l,
                                            pd: m
                                        }, null, null, !0)), b.r_cui && /^true$/.test(b.r_cui.toString()) && u(n, {
                                        height: `${f===null?0:f-48}px`,
                                        top: "24px"
                                    }), e != null && (b.nw = e), f != null && (b.nh = f), b.rsz = d.toString(), b.abl = PW(d), b.frsz = (h === "force").toString(), b.err = "0", e = !0) : (b.err = "1", e = !1)
                                } else b.err = "3", e = !1
                            }
                        else b.err = "2", e = !1
                    }
                    oQ(c.source, "sth", {
                        msg_type: "resize-result",
                        r_str: h,
                        r_status: e
                    }, "*");
                    this.i.dataset.googleQueryId || this.i.setAttribute("data-google-query-id", b.qid)
                }
            }
        }
    };

    function r_(a, b) {
        return new IntersectionObserver(b, a)
    }

    function s_(a, b, c) {
        xk(a, b, c);
        return () => yk(a, b, c)
    }
    let t_ = null;

    function u_() {
        t_ = Fm()
    }

    function v_(a, b) {
        return b ? t_ === null ? (xk(a, "mousemove", u_, {
            passive: !0
        }), xk(a, "scroll", u_, {
            passive: !0
        }), u_(), !1) : Fm() - t_ >= b * 1E3 : !1
    }

    function w_({
        B: a,
        element: b,
        gl: c,
        Zk: d,
        Yk: e = 0,
        pb: f,
        zj: g,
        options: h = {},
        lk: k = !0,
        Vo: l = r_
    }) {
        let m, n = !1,
            p = !1;
        const w = [],
            v = l(h, (t, C) => {
                try {
                    const I = () => {
                        w.length || (d && (w.push(s_(b, "mouseenter", () => {
                            n = !0;
                            I()
                        })), w.push(s_(b, "mouseleave", () => {
                            n = !1;
                            I()
                        }))), w.push(s_(a.document, "visibilitychange", () => I())));
                        const V = v_(a, e),
                            N = wU(a.document);
                        if (p && !n && !V && !N) m = m || a.setTimeout(() => {
                            v_(a, e) ? I() : (f(), C.disconnect())
                        }, c * 1E3);
                        else if (k || n || V || N) a.clearTimeout(m), m = void 0
                    };
                    ({
                        isIntersecting: p
                    } = t[t.length - 1]);
                    I()
                } catch (I) {
                    g &&
                        g(I)
                }
            });
        v.observe(b);
        return () => {
            v.disconnect();
            for (const t of w) t();
            m != null && a.clearTimeout(m)
        }
    };

    function x_(a, b, c, d, e) {
        return new y_(a, b, c, d, e)
    }

    function z_(a, b, c) {
        const d = a.i,
            e = a.D;
        if (e != null && d != null && vr(c, d.contentWindow) && (b = b.config, typeof b === "string")) {
            try {
                var f = JSON.parse(b);
                if (!Array.isArray(f)) return;
                a.l = Ii(Wk, f)
            } catch (g) {
                return
            }
            a.dispose();
            f = ii(a.l, 1);
            f <= 0 || (a.C = w_({
                B: a.j,
                element: e,
                gl: f - .2,
                Zk: !rc(),
                Yk: ii(a.l, 3),
                pb: () => void A_(a, e),
                zj: g => $q.na(1223, g, void 0, void 0),
                options: {
                    threshold: ki(a.l, 2, 1)
                },
                lk: !0
            }))
        }
    }

    function A_(a, b) {
        a.G();
        setTimeout($q.tb(1224, () => {
            var c = Number(a.F.rc);
            a.F.rc = c ? c + 1 : 1;
            c = b.parentElement || null;
            c && Yx.test(c.className) || (c = Vl(document, "INS"), c.className = "adsbygoogle", b.parentNode && b.parentNode.insertBefore(c, b.nextSibling));
            Q(Uv) ? (B_(a, c, b), a.F.no_resize = !0, bs(FJ(c), "filled", () => {
                Wl(b)
            })) : Wl(b);
            dV(c, a.F, a.j)
        }), 200)
    }

    function B_(a, b, c) {
        a.j.getComputedStyle(b).position === "static" && (b.style.position = "relative");
        c.style.position = "absolute";
        c.style.top = "0";
        c.style.left = "0";
        delete b.dataset.adsbygoogleStatus;
        delete b.dataset.adStatus;
        b.classList.remove("adsbygoogle-noablate")
    }
    var y_ = class extends yW {
        constructor(a, b, c, d, e) {
            super(a, b);
            this.F = c;
            this.D = d;
            this.G = e;
            this.l = this.C = null;
            (b = (b = b.contentWindow) && b.parent) && a !== b && this.V.push(mQ(b, "sth", this.Ja, this.Fg))
        }
        X(a) {
            a.av_ref = (b, c) => {
                z_(this, b, c)
            }
        }
        g() {
            super.g();
            this.D = null;
            this.C && this.C()
        }
    };
    const C_ = /^blogger$/,
        D_ = /^wordpress(.|\s|$)/i,
        E_ = /^joomla!/i,
        F_ = /^drupal/i,
        G_ = /\/wp-content\//,
        H_ = /\/wp-content\/plugins\/advanced-ads/,
        I_ = /\/wp-content\/themes\/genesis/,
        J_ = /\/wp-content\/plugins\/genesis/;

    function K_(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (H_.test(e)) return 5;
                if (J_.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", I_.test(e) || J_.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if (f.getAttribute("name") == "generator" && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (C_.test(f)) return 1;
                if (D_.test(f)) return 2;
                if (E_.test(f)) return 3;
                if (F_.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], d.getAttribute("rel") == "stylesheet" && d.hasAttribute("href") && (d = d.getAttribute("href") || "", G_.test(d))) return 2;
        return 0
    };
    var L_ = {
        google_ad_block: "ad_block",
        google_ad_client: "client",
        google_ad_intent_query: "ait_q",
        google_ad_output: "output",
        google_ad_callback: "callback",
        google_ad_height: "h",
        google_ad_resize: "twa",
        google_ad_slot: "slotname",
        google_ad_unit_key: "adk",
        google_ad_dom_fingerprint: "adf",
        google_ad_intent_qetid: "aiqeid",
        google_ad_intents_format: "ait_f",
        google_placement_id: "pi",
        google_daaos_ts: "daaos",
        google_erank: "epr",
        google_ad_width: "w",
        abgtt: "abgtt",
        google_captcha_token: "captok",
        google_content_recommendation_columns_num: "cr_col",
        google_content_recommendation_rows_num: "cr_row",
        google_ctr_threshold: "ctr_t",
        google_cust_criteria: "cust_params",
        gfwrnwer: "fwrn",
        gfwrnher: "fwrnh",
        google_image_size: "image_size",
        google_last_modified_time: "lmt",
        google_loeid: "loeid",
        google_max_num_ads: "num_ads",
        google_max_radlink_len: "max_radlink_len",
        google_mtl: "mtl",
        google_native_settings_key: "nsk",
        google_enable_content_recommendations: "ecr",
        google_num_radlinks: "num_radlinks",
        google_num_radlinks_per_unit: "num_radlinks_per_unit",
        google_pucrd: "pucrd",
        google_reactive_plaf: "plaf",
        google_reactive_plat: "plat",
        google_reactive_fba: "fba",
        google_reactive_sra_channels: "plach",
        google_responsive_auto_format: "rafmt",
        armr: "armr",
        google_plas: "plas",
        google_rl_dest_url: "rl_dest_url",
        google_rl_filtering: "rl_filtering",
        google_rl_mode: "rl_mode",
        google_rt: "rt",
        google_video_play_muted: "vpmute",
        google_source_type: "src_type",
        google_restrict_data_processing: "rdp",
        google_tag_for_child_directed_treatment: "tfcd",
        google_tag_for_under_age_of_consent: "tfua",
        google_tag_origin: "to",
        google_ad_semantic_area: "sem",
        google_tfs: "tfs",
        google_package: "pwprc",
        google_tag_partner: "tp",
        fra: "fpla",
        google_ml_rank: "mlr",
        google_apsail: "psa",
        google_ad_channel: "channel",
        google_ad_type: "ad_type",
        google_ad_format: "format",
        google_color_bg: "color_bg",
        google_color_border: "color_border",
        google_color_link: "color_link",
        google_color_text: "color_text",
        google_color_url: "color_url",
        google_page_url: "url",
        google_ad_section: "region",
        google_cpm: "cpm",
        google_encoding: "oe",
        google_safe: "adsafe",
        google_font_face: "f",
        google_font_size: "fs",
        google_hints: "hints",
        google_ad_host: "host",
        google_ad_host_channel: "h_ch",
        google_ad_host_tier_id: "ht_id",
        google_kw_type: "kw_type",
        google_kw: "kw",
        google_contents: "contents",
        google_targeting: "targeting",
        google_adtest: "adtest",
        google_alternate_color: "alt_color",
        google_alternate_ad_url: "alternate_ad_url",
        google_cust_age: "cust_age",
        google_cust_gender: "cust_gender",
        google_cust_l: "cust_l",
        google_cust_lh: "cust_lh",
        google_language: "hl",
        google_city: "gcs",
        google_country: "gl",
        google_region: "gr",
        google_content_recommendation_ad_positions: "ad_pos",
        google_content_recommendation_ui_type: "crui",
        google_content_recommendation_use_square_imgs: "cr_sq_img",
        sso: "sso",
        google_color_line: "color_line",
        google_disable_video_autoplay: "disable_video_autoplay",
        google_full_width_responsive_allowed: "fwr",
        google_full_width_responsive: "fwrattr",
        efwr: "efwr",
        google_pgb_reactive: "pra",
        rc: "rc",
        google_resizing_allowed: "rs",
        google_resizing_height: "rh",
        google_resizing_width: "rw",
        rpe: "rpe",
        google_responsive_formats: "resp_fmts",
        google_safe_for_responsive_override: "sfro",
        google_video_doc_id: "video_doc_id",
        google_video_product_type: "video_product_type",
        google_webgl_support: "wgl",
        aihb: "aihb",
        aiof: "aiof",
        asro: "asro",
        aifxl: "aifxl",
        vmsli: "itsi",
        dap: "dap",
        aiapm: "aiapm",
        aiapmi: "aiapmi",
        aiact: "aiact",
        aicct: "aicct",
        ailct: "ailct",
        aimart: "aimart"
    };

    function M_(a) {
        a.g === -1 && (a.g = a.data.reduce((b, c, d) => b + (c ? 2 ** d : 0), 0));
        return a.g
    }
    var N_ = class {
        constructor() {
            this.data = [];
            this.g = -1
        }
        set(a, b = !0) {
            0 <= a && a < 52 && Number.isInteger(a) && this.data[a] !== b && (this.data[a] = b, this.g = -1)
        }
        get(a) {
            return !!this.data[a]
        }
    };

    function O_() {
        const a = new N_;
        "SVGElement" in r && "createElementNS" in r.document && a.set(0);
        const b = me();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        r.crypto && r.crypto.subtle && a.set(3);
        "TextDecoder" in r && "TextEncoder" in r && a.set(4);
        return M_(a)
    };
    var P_ = sk(VN);

    function Q_(a = document) {
        const b = [],
            c = [];
        for (const f of Array.from(a.querySelectorAll("meta[name=generator][content]"))) {
            if (!f) continue;
            var d = f.getAttribute("content") ? ? "";
            const [, g, h] = /^([^0-9]+)(?:\s([0-9]+(?:\.[0-9]+){0,2})[.0-9]*)?[^0-9]*$/.exec(d) ? ? [], k = g, l = h;
            a = new UN;
            l && yi(a, 3, l.substring(0, 20));
            let m, n;
            if (k) {
                for (const [p, w] of (new Map([
                        [1, "WordPress"],
                        [2, "Drupal"],
                        [3, "MediaWiki"],
                        [4, "Blogger"],
                        [5, "SEOmatic"],
                        [7, "Flutter"],
                        [8, "Joomla! - Open Source Content Management"]
                    ])).entries()) {
                    var e = p;
                    if (w ===
                        k.trim()) {
                        m = e;
                        break
                    }
                }
                for (const [p, w] of (new Map([
                        [1, "All in One SEO (AIOSEO)"],
                        [2, "All in One SEO Pro (AIOSEO)"],
                        [3, "AMP for WP"],
                        [4, "Site Kit by Google"],
                        [5, "Elementor"],
                        [6, "Powered by WPBakery Page Builder - drag and drop page builder for WordPress."]
                    ])).entries())
                    if (e = p, w === k.trim()) {
                        n = e;
                        break
                    }
            }
            n ? (d = Ai(a, 1, 1), Ai(d, 2, n)) : m ? Ai(a, 1, m) : (e = Ai(a, 1, 0), Ch(e, 3), c.push({
                content: d,
                name: k,
                version: l
            }));
            b.push(a)
        }
        return {
            labels: b,
            bp: c
        }
    };
    const R_ = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        S_ = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function T_(a) {
        try {
            const b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (b ? .type) return R_.get(b.type) ? ? null
        } catch {}
        return S_.get(a.performance ? .navigation ? .type) ? ? null
    };
    var U_ = class extends H {};
    var V_ = class extends H {};

    function W_(a, b) {
        if (Zb()) {
            var c = a.document.documentElement.lang;
            X_(a) ? Y_(b, Be(a), !0, "", c) : (new MutationObserver((d, e) => {
                X_(a) && (Y_(b, Be(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function X_(a) {
        a = a.document ? .documentElement ? .classList;
        return !(!a ? .contains("translated-rtl") && !a ? .contains("translated-ltr"))
    }

    function Y_(a, b, c, d, e) {
        Zk({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function Z_(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const $_ = /[+, ]/;

    function a0(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (a.nodeType === 9) a: {
            try {
                const c = a ? a.defaultView : window;
                if (c) {
                    const d = c.frameElement;
                    if (d && Md(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function b0(a, b) {
        var c = mR(a.pubWin);
        a.F.saaei && (c += (c === "" ? "" : ",") + a.F.saaei);
        a.F.google_ad_intent_eids && (c += `${c===""?"":","}${a.F.google_ad_intent_eids}`);
        b.eid = c;
        c = a.F.google_loeid;
        typeof c === "string" && (a.g |= 4096, b.loeid = c)
    }

    function c0(a, b) {
        a = (a = Pd(a.pubWin)) && a.document ? $T(a.document, a) : new zl(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function d0(a) {
        try {
            const b = r.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function e0(a, b, c) {
        const d = a.F;
        var e = a.pubWin,
            f = a.K,
            g = Ee(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = Jl(e)) && h.data && ra(h.data) && typeof h.data.type === "string" ? (h = h.data.type.toLowerCase(), h = h === "doubleclick" || h === "adsense" ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = KH(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.Tf || (b.usrc = 1));
        g.url != (b.loc || b.url) && (b.top = g.url);
        a.Uc && (b.etu = a.Uc);
        (c = YU(d, f, c)) && (b.fc = c);
        if (!tm(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode &&
                (h = cm(new Rl(c), "IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    const la = h.contentWindow.document;
                    la.open();
                    var k = Zc("<!DOCTYPE html>");
                    la.write($c(k));
                    la.close();
                    g += la.documentMode
                } catch (la) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let l, m, n, p, w, v, t, C, I, V;
        try {
            l = e.screenX, m = e.screenY
        } catch (la) {}
        try {
            n = e.outerWidth, p = e.outerHeight
        } catch (la) {}
        try {
            w = e.innerWidth, v = e.innerHeight
        } catch (la) {}
        try {
            t = e.screenLeft, C = e.screenTop
        } catch (la) {}
        try {
            w =
                e.innerWidth, v = e.innerHeight
        } catch (la) {}
        try {
            I = e.screen.availWidth, V = e.screen.availTop
        } catch (la) {}
        b.brdim = [t, C, l, m, I, V, n, p, w, v].join();
        k = 0;
        r.postMessage === void 0 && (k |= 1);
        k > 0 && (b.osd = k);
        b.vis = uU(e.document);
        k = a.ba;
        e = fV(d) ? p_ : e_(new o_(e, k, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = PW(e);
        if (!fV(d) && (e = um(d), e != null)) {
            k = 0;
            a: {
                try {
                    {
                        var N = d.google_async_iframe_id;
                        const la = window.document;
                        if (N) var O = la.getElementById(N);
                        else {
                            var J = la.getElementsByTagName("script"),
                                Ka = J[J.length - 1];
                            O = Ka && Ka.parentNode || null
                        }
                    }
                    if (N = O) {
                        O = [];
                        J = 0;
                        for (var lb = Date.now(); ++J <= 100 && Date.now() - lb < 50 && (N = a0(N));) N.nodeType === 1 && O.push(N);
                        var sa = O;
                        b: {
                            for (lb = 0; lb < sa.length; lb++) {
                                c: {
                                    var Ca = sa[lb];
                                    try {
                                        if (Ca.parentNode && Ca.offsetWidth > 0 && Ca.offsetHeight > 0 && Ca.style && Ca.style.display !== "none" && Ca.style.visibility !== "hidden" && (!Ca.style.opacity || Number(Ca.style.opacity) !== 0)) {
                                            const la = Ca.getBoundingClientRect();
                                            var Gb = la.right > 0 && la.bottom > 0;
                                            break c
                                        }
                                    } catch (la) {}
                                    Gb = !1
                                }
                                if (!Gb) {
                                    var va = !1;
                                    break b
                                }
                            }
                            va = !0
                        }
                        if (va) {
                            b: {
                                const la = Date.now();va = /^html|body$/i;Gb = /^fixed/i;
                                for (Ca = 0; Ca < sa.length && Date.now() - la < 50; Ca++) {
                                    const hc = sa[Ca];
                                    if (!va.test(hc.tagName) && Gb.test(hc.style.position || jm(hc, "position"))) {
                                        var Qb = hc;
                                        break b
                                    }
                                }
                                Qb = null
                            }
                            break a
                        }
                    }
                } catch {}
                Qb = null
            }
            Qb && Qb.offsetWidth * Qb.offsetHeight <= e.width * e.height * 4 && (k = 1);
            b.pfx = k
        }
        a: {
            if (Math.random() < .05 && f) try {
                const la = f.document.getElementsByTagName("head")[0];
                var Dc = la ? K_(la) : 0;
                break a
            } catch (la) {}
            Dc = 0
        }
        f = Dc;
        f !== 0 && (b.cms = f);
        d.google_lrv !== a.Da && (b.alvm = d.google_lrv ||
            "none")
    }

    function f0(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : Nd(() => {
            c++;
            return !1
        }, a);
        c && (b.nhd = c)
    }

    function g0(a, b) {
        const c = SH(b, 8, {});
        b = SH(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function h0(a, b, c) {
        const d = a.F;
        var e = a.F;
        b.dt = cr;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = r.performance;
                if (f && f.timing && f.now) {
                    var g = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (m) {}
            g = null
        }(e = (e = g) ? pW(e, r.Date.now() - cr, 1E6) : null) && (b.bdt = e);
        b.idt = pW(a.G, cr);
        e = a.F;
        b.shv = a.pageState.g().g() || D(a.Z, 2);
        a.Da && (b.mjsv = a.Da);
        e.google_loader_used == "sd" ? b.ptt = 5 : e.google_loader_used == "aa" && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) &&
            (b.saldr = e.google_loader_used);
        if (e = Jl(a.pubWin)) b.is_amp = 1, b.amp_v = Kl(e), (e = Ll(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        e = new kR(a.pubWin);
        (g = gR(e, "__gads", c)) ? b.cookie = g: c.g() && HN(e.B) && (b.cookie_enabled = "1");
        (g = gR(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g);
        gR(e, "__gpi_opt_out", c) === "1" && (b.pdopt = "1");
        e = new vW(a.pubWin);
        g = {
            kg: !1,
            lg: !a.H
        };
        (f = uW(e, c, g)) ? b.eo_id_str = f: tW(e, c, g) && (b.eoidce = "1");
        c = NH();
        g = SH(c, 8, {});
        e = d.google_ad_section;
        g[e] && (b.prev_fmts = g[e]);
        g = SH(c, 9, {});
        g[e] && (b.prev_slotnames =
            g[e].toLowerCase());
        g0(d, c);
        e = SH(c, 15, 0);
        e > 0 && (b.nras = String(e));
        (g = Jl(window)) ? (g ? (e = g.pageViewId, g = g.clientId, typeof g === "string" && (e += g.replace(/\D/g, "").substring(0, 6))) : e = null, e = +e) : (e = Ee(window), g = e.google_global_correlator, g || (e.google_global_correlator = g = 1 + Math.floor(Math.random() * 8796093022208)), e = g);
        b.correlator = SH(c, 7, e);
        Q(mx) && (b.rume = 1);
        if (d.google_ad_channel) {
            e = SH(c, 10, {});
            g = "";
            f = d.google_ad_channel.split($_);
            for (var h = 0; h < f.length; h++) {
                var k = f[h];
                e[k] ? g += k + "+" : e[k] = !0
            }
            b.pv_ch = g
        }
        if (d.google_ad_host_channel) {
            e =
                d.google_ad_host_channel;
            g = SH(c, 11, []);
            f = e.split("|");
            c = -1;
            e = [];
            for (h = 0; h < f.length; h++) {
                k = f[h].split($_);
                g[h] || (g[h] = {});
                let m = "";
                for (let n = 0; n < k.length; n++) {
                    const p = k[n];
                    p !== "" && (g[h][p] ? m += "+" + p : g[h][p] = !0)
                }
                m = m.slice(1);
                e[h] = m;
                m !== "" && (c = h)
            }
            g = "";
            if (c > -1) {
                for (f = 0; f < c; f++) g += e[f] + "|";
                g += e[c]
            }
            b.pv_h_ch = g
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        a: {
            c = d.google_ad_client;
            try {
                const m = Ee(window);
                let n = m.google_prev_clients;
                n || (n = m.google_prev_clients = {});
                if (c in n) {
                    var l = 1;
                    break a
                }
                n[c] = !0;
                l = 2;
                break a
            } catch {
                l = 0;
                break a
            }
            l = void 0
        }
        b.pv = l;
        a.K && Q(Yv) && (l = a.K, l = Zb() && X_(l) ? l.document.documentElement.lang : void 0, l && (b.tl = l));
        Q(Zv) && a.pubWin.location.host.endsWith("h5games.usercontent.goog") && (b.cdm = a.pubWin.location.host);
        f0(a.pubWin, b);
        (a = d.google_ad_layout) && JV[a] >= 0 && (b.rplot = JV[a])
    }

    function i0(a, b) {
        a = a.j;
        XH() && (b.npa = 1);
        if (a) {
            gi(a, 3) != null && (b.gdpr = a.l() ? "1" : "0");
            var c = ri(a, 1);
            c && (b.us_privacy = c);
            (c = ri(a, 2)) && (b.gdpr_consent = c);
            (c = ri(a, 4)) && (b.addtl_consent = c);
            (c = si(a, 7)) && (b.tcfe = c);
            (c = D(a, 11)) && (b.gpp = c);
            (a = Kh(a, 10, Eg, 1, void 0, 1024)) && a.length > 0 && (b.gpp_sid = a.join(","))
        }
    }

    function j0(a, b) {
        const c = a.F;
        i0(a, b);
        Ud(L_, (d, e) => {
            b[d] = c[e]
        });
        fV(c) && (a = eV(c), b.fa = a);
        b.pi || c.google_ad_slot == null || (a = lz(c), dt(a) && (a = rt(a.getValue()), b.pi = a))
    }

    function k0(a, b) {
        var c = Nl() || YT(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = YT(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function l0(a, b) {
        var c = a.pubWin;
        c !== null && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = YT(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = Wd(a.join(""))) : a = 0;
        a !== 0 && (b.ifk = a)
    }

    function m0(a, b) {
        (a = VH()[a.F.google_ad_client]) && (b.psts = a.join())
    }

    function n0(a, b) {
        a = a.pageState.g();
        (a = ii(a, 2)) && a >= 0 && (b.tmod = a)
    }

    function o0(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = We(a))
    }

    function p0(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                d >= 0 && (b.wsm = d + 1)
            }
        } catch {}
    }

    function q0(a, b) {
        a.F.google_ad_public_floor >= 0 && (b.pubf = a.F.google_ad_public_floor);
        a.F.google_ad_private_floor >= 0 && (b.pvtf = a.F.google_ad_private_floor)
    }

    function r0(a, b) {
        const c = Number(a.F.google_traffic_source);
        c && Object.values(Ia).includes(c) && (b.trt = a.F.google_traffic_source)
    }

    function s0(a, b) {
        var c;
        if (c = !Q(sx)) c = a.l ? .label, c = !(Q(bx) && c && c.match(ux($w)));
        c && ("runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = 1), c = a.pubWin.navigator, a.pubWin.isSecureContext && "runAdAuction" in c && c.runAdAuction instanceof Function && YQ("run-ad-auction", a.pubWin.document) && (c = new N_, c.set(1, ZQ(a.pubWin.navigator)), b.tdf = M_(c)))
    }

    function t0(a, b) {
        if (navigator.deprecatedRunAdAuctionEnforcesKAnonymity) {
            var c = new V_;
            var d = new U_;
            d = zi(d, 4, "deprecated_kanon");
            c = A(c, 2, d)
        }
        a.l != null && Zb() && (c ? ? (c = new V_), d = zi(c, 3, a.l.label), G(d, 4, a.l.status));
        c && (b.psd = We(Gi(c)))
    }

    function u0(a, b) {
        Q(jx) || YQ("attribution-reporting", a.pubWin.document) && (b.nt = 1)
    }

    function v0(a, b) {
        if (typeof a.F.google_privacy_treatments === "string") {
            var c = new Map([
                ["disablePersonalization", 1]
            ]);
            a = a.F.google_privacy_treatments.split(",");
            var d = [];
            for (const [e, f] of c.entries()) c = f, a.includes(e) && d.push(c);
            d.length && (b.ppt = d.join("~"))
        }
    }

    function w0(a, b) {
        if (a.A) {
            a.A.ak && (b.xatf = 1);
            try {
                a.A.Jf ? .disconnect(), a.A.Jf = void 0
            } catch {}
        }
    }

    function x0(a, b = document) {
        if (Q(fv)) try {
            const {
                labels: c
            } = Q_(b);
            c.length && (a.pgls = c.map(d => {
                d = P_(d);
                return Ue(d)
            }).join("~"))
        } catch (c) {
            OB.na(1278, c)
        }
    }

    function y0(a, b) {
        const c = {};
        j0(a, c);
        o0(a, c);
        h0(a, c, b);
        c.u_tz = -(new Date).getTimezoneOffset();
        try {
            var d = bl.history.length
        } catch (e) {
            d = 0
        }
        c.u_his = d;
        c.u_h = bl.screen ? .height;
        c.u_w = bl.screen ? .width;
        c.u_ah = bl.screen ? .availHeight;
        c.u_aw = bl.screen ? .availWidth;
        c.u_cd = bl.screen ? .colorDepth;
        c.u_sd = ZT(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        RB(889, () => {
            if (a.K == null) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = bU(a.K, a.ba);
                c.adx && c.adx != -12245933 && c.ady && c.ady != -12245933 || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                aU(a.ba) || (c.adx = -12245933, c.ady = -12245933, a.g |= 32768)
            }
        });
        k0(a, c);
        l0(a, c);
        c0(a, c);
        b0(a, c);
        c.oid = 2;
        m0(a, c);
        c.pvsid = Be(a.pubWin, OB);
        n0(a, c);
        p0(a, c);
        c.uas = Z_(a.pubWin);
        (d = T_(a.pubWin)) && (c.nvt = d);
        a.D && (c.scar = a.D);
        a.C instanceof Uint8Array ? c.topics = Ue(a.C) : a.C && (c.topics = a.C, c.tps = a.C);
        w0(a, c);
        e0(a, c, b);
        c.fu = a.g;
        c.bc = O_();
        if (bT(a.pageState.g()) ? aT(a.pageState.g()) : B(a.Z, 9))
            if (nR(c), c.creatives = d0(/\b(?:creatives)=([\d,]+)/), c.adgroups = d0(/\b(?:adgroups)=([\d,]+)/), c.adgroups || c.sso) c.adtest = "on", c.disable_budget_throttling = !0, c.use_budget_filtering = !1, c.retrieve_only = !0, c.disable_fcap = !0;
        tl() && (c.atl = !0);
        c.bz = Fe(a.pubWin);
        q0(a, c);
        r0(a, c);
        s0(a, c);
        t0(a, c);
        u0(a, c);
        v0(a, c);
        String(a.F.google_special_category_data) === "true" && (c.scd = 1);
        x0(c, a.pubWin.document);
        return c
    }
    const z0 = /YtLoPri/;
    var A0 = class extends H {};

    function B0(a) {
        return ai(a, A0, 15, Jh())
    }
    var C0 = class extends H {},
        D0 = tk(C0);

    function E0() {
        var a = new F0;
        var b = new gu;
        b = Ai(b, 2, 4);
        b = Ai(b, 8, 1);
        var c = new nt;
        c = yi(c, 7, "#dpId");
        b = A(b, 1, c);
        return fi(a, 3, gu, b)
    }
    var F0 = class extends H {},
        G0 = tk(F0);

    function H0(a, b) {
        return D(a, 10).replace("TERM", b)
    };
    var I0 = class {
        constructor(a) {
            this.Kb = a.Kb ? ? [];
            this.vf = !!a.vf;
            this.xf = !!a.xf;
            this.wf = !!a.wf;
            this.re = a.re ? ? 250;
            this.qe = a.qe ? ? 300;
            this.Ue = a.Ue ? ? 15E3;
            this.Te = a.Te ? ? 15E3;
            this.Ve = a.Ve ? ? 0;
            this.he = a.he ? ? 0;
            this.ke = a.ke ? ? 670;
            this.ud = !!a.ud;
            this.Ef = a.Ef ? ? [];
            this.Ce = a.Ce || "450px";
            this.De = !!a.De;
            this.Pf = !!a.Pf;
            this.je = a.je ? ? 0;
            this.ng = a.ng ? ? !0;
            this.fe = a.fe ? ? 0;
            this.Th = !!a.Th;
            this.pe = a.pe ? ? 0;
            this.yc = a.yc ? ? 0;
            this.Zf = new Set(a.Zf ? ? []);
            this.mg = !!a.mg;
            this.Lb = a.Lb ? ? 0
        }
    };

    function J0(a, b, c, d, e, f, g, h, k) {
        const l = k(999, a.top, m => {
            m.data.action === "init" && m.data.adChannel === "ShoppingVariant" && K0(a, b, d, c, e, f, g, h)
        });
        g(() => {
            a.top.removeEventListener("message", l)
        })
    }

    function K0(a, b, c, d, e, f, g, h) {
        B(f, 13) || SD(c, d, e);
        const k = b.contentDocument.documentElement,
            l = new ResizeObserver(() => {
                b.height = `${Math.ceil(k.offsetHeight+26)}px`
            });
        l.observe(k);
        const m = h(1066, a, () => {
            const n = k.offsetHeight;
            n && (b.height = `${n+26}px`)
        }, 1E3);
        g(() => {
            l.disconnect();
            a.clearInterval(m)
        })
    }
    var L0 = class {
        constructor(a) {
            this.Yb = a
        }
        ff(a) {
            const b = a.B.document.createElement("iframe"),
                c = a.R,
                d = new TD({
                    Oa: b,
                    Ma: D(c, 16),
                    jc: "anno-cse",
                    Za: this.Yb.replace("ca", "partner"),
                    wd: "ShoppingVariant",
                    location: a.B.location,
                    language: D(c, 7),
                    tc: H0(c, a.sa),
                    Wa: a.L.Kb.filter(e => e !== 42),
                    Ya: !1,
                    Pb: void 0,
                    md: !0,
                    wg: void 0,
                    Xa: !0
                });
            d.init();
            J0(a.B, b, a.sa, d, a.rg, c, a.Ta, a.Tb, a.Bb);
            return b
        }
    };

    function M0(a) {
        var b = {},
            c = a.sa;
        const d = a.yj;
        var e = a.Yb,
            f = a.If;
        const g = a.Ld,
            h = a.Bi,
            k = a.Hj,
            l = a.gk,
            m = a.ll,
            n = a.eids,
            p = a.Rk,
            w = a.xk,
            v = a.yk;
        var t = a.Ak,
            C = a.Ci;
        const I = b && b.Oc;
        a = b && b.hj;
        b = lD;
        f = (m ? "" : '<link href="https://fonts.googleapis.com/css?family=Google+Sans:500" rel="stylesheet"' + (I ? ' nonce="' + X(KD(I)) + '"' : "") + ">") + "<style" + (I ? ' nonce="' + X(KD(I)) + '"' : "") + ">#gda-search-term {height: 24px; font-size: 18px; font-weight: 500; color: #202124; font-family: 'Google Sans'; padding-bottom: 6px;" + (l ? "padding-right: 16px;" :
                "padding-left: 16px;") + "}" + (k ? "#display-slot {display: inline-block; height: " + Z(h) + "; width: " + Z(g) + "px;}" : "") + '</style><div id="gda-search-term">' + jD(c) + "</div>" + (v !== -1 ? "<script" + (a ? ' nonce="' + X(KD(a)) + '"' : "") + ">window[" + vD(wD(w)) + "] = " + vD(wD(v)) + ";\x3c/script>" : "") + (f !== "" ? '<meta name="google-adsense-platform-account" content="' + X(f) + '">' : "") + '<ins id="display-slot" class="adsbygoogle"' + (k ? "" : ' style="display:inline-block;width:' + X(Z(g)) + "px;height:calc(" + X(Z(h)) + ')"') + ' data-ad-client="' + X(e) +
            '"></ins>' + (p ? "<script" + (a ? ' nonce="' + X(KD(a)) + '"' : "") + ">(adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1;\x3c/script>" : "") + (m ? "<script" + (a ? ' nonce="' + X(KD(a)) + '"' : "") + ">const el = document.querySelector('ins.adsbygoogle'); el.dir = 'ltr'; el.style.backgroundColor = 'lightblue'; el.style.fontSize = '25px'; el.style.textDecoration = 'none'; el.textContent = \"Loading display ads inside this slot for query = " + String(c).replace(xD, yD) + ' and " + "property code = ' + String(e).replace(xD,
                yD) + '";\x3c/script>' : "") + "<script" + (a ? ' nonce="' + X(KD(a)) + '"' : "") + ">top.postMessage({'action':'sgda-ready'}, top.location.origin);\x3c/script>";
        m ? e = "" : (c = '<script data-ad-intent-query="' + X(c) + '" data-ad-intent-qetid="' + X(d) + '" data-ad-intent-eids="' + X(n) + '"', t ? (kD(t, cD) || kD(t, dD) ? t = String(t).replace(CD, DD) : Mc(t) ? t = BD(Nc(t)) : t instanceof Hc ? t = BD(Jc(t).toString()) : (t = String(t), t = HD.test(t) ? t.replace(CD, DD) : "about:invalid#zSoyz"), t = ' data-page-url="' + X(t) + '"') : t = "", C = c + t + ' data-ad-intents-format="' +
            X(C) + '" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=', e = encodeURIComponent(String(e)), zD.lastIndex = 0, e = zD.test(e) ? e.replace(zD, AD) : e, e = C + e + '" crossorigin="anonymous"' + (a ? ' nonce="' + X(KD(a)) + '"' : "") + ">\x3c/script>");
        return b(f + e)
    };

    function N0(a, b) {
        return a ? .95 * b.innerHeight - 30 : b.innerHeight
    };
    var R0 = class {
        constructor(a, b, c, d) {
            this.Yb = a;
            this.If = b;
            this.g = c;
            this.ic = d
        }
        ff(a) {
            var b = M0({
                sa: a.sa,
                yj: a.gh || "",
                Yb: this.Yb,
                If: this.If ? ? "",
                Ld: a.Ld,
                Bi: a.L.De ? a.L.Ce.replace("<DH>", `${N0(a.qa,a.B)}px`) : a.L.Ce,
                Hj: a.L.De,
                gk: a.aa,
                ll: !!B(a.R, 13),
                eids: a.L.Ef.join(","),
                Rk: a.L.ng,
                xk: "goog_pvsid",
                yk: this.g,
                Ak: this.ic,
                Ci: a.format
            });
            b = Fd("body", {
                dir: a.aa ? "rtl" : "ltr",
                lang: D(a.R, 7),
                style: "margin:0;height:100%;padding-top:0;overflow:hidden"
            }, gD(b));
            const c = a.B.document.createElement("iframe");
            u(c, {
                border: "0",
                width: "100%"
            });
            c.height = "24px";
            const d = a.Bb(999, a.B, e => {
                if (e.data.action === "sgda-ready" && (e = c.contentDocument, e ? .body)) {
                    var f = e.getElementById("display-slot");
                    if (f) {
                        var g = e.createElement("iframe"),
                            h = new MutationObserver((k, l) => {
                                if (f.getAttribute("data-ad-status") === "unfilled") Wl(f);
                                else if (Q(qw) && f.getAttribute("data-ad-status") === "filled") g.contentDocument ? .body && (g.contentDocument.body.innerText = "");
                                else if (f.getAttribute("data-ad-status") !== "filled") return;
                                O0(g, c);
                                P0(a.B, g, c, a.Ta, a.Tb);
                                l.disconnect()
                            });
                        h.observe(f, {
                            attributes: !0,
                            attributeFilter: ["data-ad-status"]
                        });
                        a.Ta(() => void h.disconnect());
                        Q0(this.Yb, g, a);
                        e.body.append(g)
                    }
                }
            });
            a.Ta(() => {
                a.B.removeEventListener("message", d)
            });
            c.srcdoc = $c(b);
            return c
        }
    };

    function Q0(a, b, c) {
        const d = new TD({
                Oa: b,
                Ma: D(c.R, 16),
                jc: "anno-cse",
                Za: a.replace("ca", "partner"),
                wd: "ShoppingVariant",
                location: c.B.location,
                language: D(c.R, 7),
                tc: H0(c.R, c.sa),
                Wa: c.L.Kb.filter(f => f !== 42),
                Ya: !1,
                Pb: void 0,
                md: !0,
                wg: void 0,
                Xa: !0,
                xg: !0
            }),
            e = c.Bb(999, c.B, f => {
                f.data.action === "init" && f.data.adChannel === "ShoppingVariant" && (B(c.R, 13) || SD(d, c.sa, c.rg))
            });
        d.init();
        c.Ta(() => {
            c.B.removeEventListener("message", e)
        })
    }

    function P0(a, b, c, d, e) {
        const f = b.contentDocument.documentElement,
            g = new ResizeObserver(() => void O0(b, c));
        g.observe(f);
        const h = e(1066, a, () => void O0(b, c), 1E3);
        d(() => {
            g.disconnect();
            a.clearInterval(h)
        })
    }

    function O0(a, b) {
        const c = a.contentDocument ? .documentElement ? .offsetHeight;
        if (Q(qw)) {
            if (c === void 0) return
        } else if (!c) return;
        const d = b.contentDocument ? .getElementById("display-slot") ? .offsetHeight ? ? 0;
        a.height = `${Math.ceil(c+26)}px`;
        b.height = `${Math.ceil(c+26+d)}px`
    };

    function S0(a, b) {
        a = sz(Ly([...b], a), a);
        if (a.length !== 0) return a.reduce((c, d) => c.ma.g > d.ma.g ? c : d)
    };
    async function T0(a, b) {
        q(await q(new Promise(c => void a.B.setTimeout(c, 0))));
        a.i = a.g.ka(b) + a.j
    }
    var U0 = class {
        constructor(a, b) {
            var c = W(Ew);
            this.B = a;
            this.g = b;
            this.j = c;
            this.i = b.ka(2) + c
        }
    };
    var V0 = class {
            constructor(a) {
                this.performance = a
            }
            ka() {
                return this.performance.now()
            }
        },
        W0 = class {
            ka() {
                return Date.now()
            }
        };
    const X0 = [255, 255, 255];

    function Y0(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), d.length > 4 ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if (a === "transparent" || a === "") return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function Z0(a) {
        var b = getComputedStyle(a);
        if (b.backgroundImage !== "none") return null;
        b = Y0(b.backgroundColor);
        var c = $0(b);
        if (c) return c;
        a = (a = a.parentElement) ? Z0(a) : X0;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function $0(a) {
        return a[3] === 1 ? [a[0], a[1], a[2]] : null
    };

    function a1(a, b) {
        const c = b.qa === b.aa;
        var d = b1(a, b, c);
        if (!d) return null;
        d = d.position.Sd();
        a = c1(a, d, b, function(f) {
            f = f.getBoundingClientRect();
            return c ? b.T - f.right : f.left
        });
        if (!a || a - 16 < 200) return null;
        const e = b.T;
        return {
            Ca: c ? e - a : 16,
            Ua: c ? 16 : e - a,
            ha: d
        }
    }

    function d1(a, b) {
        const c = mr(a),
            d = nr(a);
        return XF(new bG(a), new Al(d - b.ha - 50, c - b.Ua, d - b.ha, b.Ca)).size > 0
    }

    function b1(a, b, c) {
        b = Math.floor(b.W * .3);
        return b < 66 ? null : eG(a, {
            Ec: c ? kG({
                ha: 16,
                Ua: 16
            }) : iG({
                ha: 16,
                Ca: 16
            }),
            Vf: b - 66,
            Xb: 200,
            ag: 50,
            ge: b,
            Eb: 16
        }, [a.document.body]).df
    }

    function c1(a, b, c, d) {
        a = c.qa ? e1(a, b, c) : f1(a, b, c);
        b = c.T;
        let e = c.qa ? b : b * .35;
        a.forEach(f => {
            e = Math.min(e, d(f))
        });
        return e < 16 ? null : e - 16
    }

    function e1(a, b, c) {
        const d = c.W;
        return XF(new bG(a), new Al(d - b - 50, c.T - 16, d - b, 16))
    }

    function f1(a, b, c) {
        const d = c.W,
            e = c.T;
        c = c.aa;
        return XF(new bG(a), new Al(d - b - 50, (c ? e * .35 : e) - 16, d - b, (c ? 16 : e * .65) + 16))
    }

    function g1(a, b, c) {
        const d = a.aa;
        return {
            Ca: d ? h1(a, b, c) : c,
            Ua: d ? c : h1(a, b, c),
            ha: 16
        }
    }

    function h1(a, b, c) {
        const d = a.T;
        return a.qa ? d - b + 16 : Math.max(d - c - d * .35, d - b + 16)
    }

    function i1(a, b) {
        const c = b.aa,
            d = b.T;
        return [...(b.qa ? e1(a, 16, b) : f1(a, 16, b))].map(e => new dG(c ? d - e.getBoundingClientRect().right : e.getBoundingClientRect().left, c ? d - e.getBoundingClientRect().left : e.getBoundingClientRect().right)).sort((e, f) => e.start - f.start)
    };

    function j1(a) {
        u(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    }

    function k1(a, b) {
        b = a.document.createElement(b);
        Lu(a, b);
        u(b, {
            color: "inherit",
            cursor: "inherit",
            direction: "inherit",
            "font-family": "inherit",
            "font-size": "inherit",
            "font-weight": "inherit",
            "text-align": "inherit",
            "text-orientation": "inherit",
            visibility: "inherit",
            "writing-mode": "inherit"
        });
        return b
    }

    function l1(a) {
        a.dataset.googleVignette = "false";
        a.dataset.googleInterstitial = "false"
    };

    function m1(a, b, c) {
        a = n1(a, "100 -1000 840 840", `calc(${b} - 2px)`, b, o1[c]);
        u(a, {
            color: "inherit",
            cursor: "inherit",
            fill: "currentcolor"
        });
        return a
    }

    function p1(a, b) {
        a = q1(a, "20px", "#1A73E8", b);
        a.classList.add("google-anno-sa-intent-icon");
        return a
    }

    function r1(a, b) {
        a = n1(a, "0 -960 960 960", "20px", "20px", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");
        u(a, {
            left: "13px",
            right: "",
            "pointer-events": "initial",
            position: "absolute",
            top: "15px",
            transform: "none",
            fill: "#1A73E8"
        });
        a.role = "button";
        a.ariaLabel = b;
        a.tabIndex = 0;
        return a
    }
    const o1 = {
        [0]: "M503-104q-24 24-57 24t-57-24L103-390q-23-23-23-56.5t23-56.5l352-353q11-11 26-17.5t32-6.5h286q33 0 56.5 23.5T879-800v286q0 17-6.5 32T855-456L503-104Zm196-536q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM446-160l353-354v-286H513L160-446l286 286Zm353-640Z",
        [1]: "m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z",
        [2]: "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",
        [3]: "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm200-500 54-18 16-54q-32-48-77-82.5T574-786l-54 38v56l160 112Zm-400 0 160-112v-56l-54-38q-54 17-99 51.5T210-652l16 54 54 18Zm-42 308 46-4 30-54-58-174-56-20-40 30q0 65 18 118.5T238-272Zm242 112q26 0 51-4t49-12l28-60-26-44H378l-26 44 28 60q24 8 49 12t51 4Zm-90-200h180l56-160-146-102-144 102 54 160Zm332 88q42-50 60-103.5T800-494l-40-28-56 18-58 174 30 54 46 4Z",
        [4]: "M120-680v-160l160 80-160 80Zm600 0v-160l160 80-160 80Zm-280-40v-160l160 80-160 80Zm0 640q-76-2-141.5-12.5t-114-26.5Q136-135 108-156t-28-44v-360q0-25 31.5-46.5t85.5-38q54-16.5 127-26t156-9.5q83 0 156 9.5t127 26q54 16.5 85.5 38T880-560v360q0 23-28 44t-76.5 37q-48.5 16-114 26.5T520-80v-160h-80v160Zm40-440q97 0 167.5-11.5T760-558q0-5-76-23.5T480-600q-128 0-204 18.5T200-558q42 15 112.5 26.5T480-520ZM360-166v-154h240v154q80-8 131-23.5t69-27.5v-271q-55 22-138 35t-182 13q-99 0-182-13t-138-35v271q18 12 69 27.5T360-166Zm120-161Z",
        [5]: "M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z",
        [6]: "M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z",
        [7]: "M400-40v-80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h200v-80h80v880h-80ZM200-240h200v-240L200-240Zm360 120v-360l200 240v-520H560v-80h200q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H560Z",
        [8]: "M300-240q25 0 42.5-17.5T360-300q0-25-17.5-42.5T300-360q-25 0-42.5 17.5T240-300q0 25 17.5 42.5T300-240Zm0-360q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm180 180q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm180 180q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm0-360q25 0 42.5-17.5T720-660q0-25-17.5-42.5T660-720q-25 0-42.5 17.5T600-660q0 25 17.5 42.5T660-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z",
        [9]: "M160-80v-440H80v-240h208q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h208v240h-80v440H160Zm400-760q-17 0-28.5 11.5T520-800q0 17 11.5 28.5T560-760q17 0 28.5-11.5T600-800q0-17-11.5-28.5T560-840Zm-200 40q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z",
        [10]: "m456-200 174-340H510v-220L330-420h126v220Zm24 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
    };

    function q1(a, b, c, d) {
        a = n1(a, "0 -960 960 960", b, b, o1[d]);
        u(a, {
            fill: c,
            cursor: "inherit"
        });
        return a
    }

    function n1(a, b, c, d, e) {
        const f = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
        f.setAttribute("d", e);
        e = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
        Lu(a, e);
        e.setAttribute("viewBox", b);
        e.setAttribute("width", c);
        e.setAttribute("height", d);
        j1(e);
        e.appendChild(f);
        return e
    };

    function s1(a, b, c, d) {
        const e = document.createElement("SPAN");
        Lu(a, e);
        e.id = "gda";
        e.appendChild(r1(a, D(b.R, 18)));
        l1(e);
        t1(b, 1064, e, f => {
            d ? .();
            Wl(c);
            f.preventDefault();
            f.stopImmediatePropagation();
            return !1
        });
        return e
    }

    function u1(a, b, c, d, e) {
        const f = document.createElement("SPAN");
        Lu(a, f);
        j1(f);
        u(f, {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: (b.aa(), "50px"),
            right: b.aa() ? "24px" : "12px",
            display: "flex",
            "flex-direction": "row",
            color: "#1A73E8",
            cursor: "pointer",
            transition: "width 5s"
        });
        b.qa || u(f, {
            "justify-content": ""
        });
        const g = p1(a, b.g.get(d.za) || 0),
            h = document.createElement("SPAN");
        u(h, {
            display: "inline-block",
            cursor: "inherit"
        });
        u(h, {
            "margin-left": b.aa() ? "6px" : "4px",
            "margin-right": b.aa() ? "4px" : "6px",
            "margin-top": "12px"
        });
        f.appendChild(h);
        h.appendChild(g);
        c.classList ? .add("google-anno-sa-qtx", "google-anno-skip");
        c.tabIndex = 0;
        c.role = "link";
        c.ariaLive = "polite";
        v1(c, d.za, D(b.R, 19));
        u(c, {
            height: "40px",
            "align-items": "center",
            "line-height": "44px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent",
            color: "#1A73E8"
        });
        l1(f);
        t1(b, 999, f, k => {
            k.preventDefault();
            if ((d.Mg ? ? 0) + 800 <= b.ka(26)) {
                k =
                    d.za;
                const m = b.A.get(k) || "";
                var l = qp(op(k), d.gd);
                l = Ch(l, 3, wg(d.ae));
                l = b.U.Jc(l);
                w1(e, a, b, l, k, m, 2, b.L.ud ? b.j.get(k) || "" : null)
            }
            return !1
        });
        f.appendChild(c);
        return f
    }

    function x1(a, b, c, d, e, f) {
        const g = document.createElement("div");
        Lu(a, g);
        g.id = "google-anno-sa";
        g.dir = b.aa() ? "rtl" : "ltr";
        g.tabIndex = 0;
        u(g, {
            background: "#FFFFFF",
            "border-style": "solid",
            bottom: `${d.ha}px`,
            "border-radius": "16px",
            height: "50px",
            position: "fixed",
            "text-align": "center",
            border: "0px",
            left: `${d.Ca}px`,
            right: `${d.Ua}px`,
            "box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            "z-index": "1000"
        });
        u(g, {
            fill: "white"
        });
        d = document.createElement("SPAN");
        Lu(a, d);
        u(d, {
            cursor: "inherit"
        });
        g.appendChild(u1(a, b, d, c, f));
        g.appendChild(s1(a, b, g, e));
        return g
    }

    function y1(a, b, c, d, e) {
        var f = c.getElementsByClassName("google-anno-sa-qtx")[0];
        f instanceof HTMLElement && (f.innerText = a.za);
        if ((d.g.get(e) || 0) !== (d.g.get(a.za) || 0)) {
            b = p1(b, d.g.get(a.za) || 0);
            for (const g of c.getElementsByClassName("google-anno-sa-intent-icon")) g.replaceWith(b)
        }
        v1(f, a.za, D(d.R, 19));
        c = d.U;
        d = c.Xe;
        f = new So;
        f = Ch(f, 2, Gg(a.gd));
        a = zi(f, 4, a.za);
        return d.call(c, a)
    }

    function z1(a, b, c, d, e) {
        if (d1(b, d)) return null;
        a.Mg = c.ka(25);
        d = x1(b, c, a, d, () => {
            a.g = !0;
            var f = c.U,
                g = f.Se;
            var h = new Qo;
            h = Th(h, 3, Gg(a.gd), "0");
            h = zi(h, 2, a.za);
            g.call(f, h)
        }, e);
        e = y1(a, b, d, c, a.za);
        b.document.body.appendChild(d);
        return e
    }

    function A1(a, b, c, d, e, f, g, h) {
        if (!(a.g || a.za === e && a.gd === d && a.i === f)) {
            if (a.ae !== null) {
                var k = a.ae,
                    l = c.U,
                    m = l.We,
                    n = new Ro;
                k = xi(n, 1, k);
                m.call(l, k)
            }
            l = a.za;
            a.za = e;
            a.gd = d;
            a.i = f;
            B(c.R, 17) || (d = b.document.getElementById("google-anno-sa"), a.ae = d ? y1(a, b, d, c, l) : z1(a, b, c, g, h))
        }
    }
    var B1 = class {
        constructor() {
            this.za = "";
            this.gd = null;
            this.i = "";
            this.ae = null;
            this.g = !1;
            this.Mg = null
        }
    };

    function v1(a, b, c) {
        a.ariaLabel = c.replace("TERM", b)
    };

    function C1(a, b) {
        a.g >= a.j.length && (a.g = 0, a.l++);
        if (!(a.config.L.he && a.l >= a.config.L.he))
            if (a.i.g) a.i.Ta(() => void C1(a, b));
            else {
                var c = a.j[a.g++];
                a.A = !1;
                A1(a.H, a.B, a.config, c.g, c.sa, c.i, a.C, a.i);
                D1(a.config, 898, a.B, () => void C1(a, b), a.Cg)
            }
    }
    var E1 = class {
        constructor(a, b, c, d) {
            var e = new B1;
            this.B = a;
            this.config = b;
            this.H = e;
            this.C = c;
            this.i = d;
            this.j = [];
            this.A = !0;
            this.l = this.g = 0;
            this.Cg = b.params.Cg
        }
    };
    class F1 {
        constructor(a, b, c) {
            this.g = a;
            this.sa = b;
            this.i = c
        }
    };

    function G1(a) {
        return a.ie > 0 && a.i.j >= a.ie
    }
    var I1 = class {
        constructor(a, b, c, d) {
            this.sg = b;
            this.cf = c;
            this.ie = d;
            this.g = 0;
            this.i = new H1(a)
        }
    };

    function J1(a, b) {
        b -= a.A;
        for (const c of a.g.keys()) {
            const d = a.g.get(c);
            let e = 0;
            for (; e < d.length && d[e] < b;) e++;
            a.i -= e;
            e > 0 && a.g.set(c, d.slice(e))
        }
    }

    function K1(a, b, c) {
        let d = [];
        a.g.has(b) && (d = a.g.get(b));
        d.push(c);
        a.i++;
        a.g.set(b, d)
    }
    class H1 {
        constructor(a) {
            this.A = a;
            this.g = new Map;
            this.i = 0
        }
        get j() {
            return this.i
        }
    };

    function L1(a, b, c, d) {
        const e = k1(a, "div");
        e.classList.add("google-anno-skip", "google-anno-sc");
        d = a.getComputedStyle(d).fontSize || "16px";
        var f = e.appendChild;
        var g = b.g.get(c) || 0;
        g = q1(a, d, "#FFFFFF", g);
        u(g, {
            position: "relative",
            top: "3px"
        });
        const h = k1(a, "span");
        u(h, {
            display: "inline-block",
            "padding-left": b.aa() ? "" : "3px",
            "padding-right": b.aa() ? "3px" : ""
        });
        h.appendChild(g);
        f.call(e, h);
        f = e.appendChild;
        g = k1(a, "span");
        g.appendChild(a.document.createTextNode(c));
        u(g, {
            position: "relative",
            left: b.aa() ? "" : "3px",
            right: b.aa() ?
                "3px" : "",
            "padding-left": b.aa() ? "6px" : "",
            "padding-right": b.aa() ? "" : "6px"
        });
        f.call(e, g);
        u(e, {
            display: "inline-block",
            "border-radius": "20px",
            "padding-left": b.aa() ? "7px" : "6px",
            "padding-right": b.aa() ? "6px" : "7px",
            "padding-top": "3px",
            "padding-bottom": "3px",
            "border-width": "1px",
            "border-style": "solid",
            color: "#FFFFFF",
            "font-family": "Roboto",
            "font-weight": "500",
            "font-size": d,
            "border-color": "#D7D7D7",
            background: "#0B57D0",
            cursor: "pointer",
            "margin-top": "-3px"
        });
        e.tabIndex = 0;
        e.role = "link";
        e.ariaLabel = c;
        return e
    };
    const M1 = ["BTN", "BUTTON"];

    function N1(a) {
        switch (a.tagName ? .toUpperCase ? .()) {
            case "IFRAME":
            case "A":
            case "AUDIO":
            case "BUTTON":
            case "CANVAS":
            case "CITE":
            case "CODE":
            case "EMBED":
            case "FOOTER":
            case "FORM":
            case "KBD":
            case "LABEL":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "STYLE":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "TIME":
            case "VAR":
            case "VIDEO":
            case null:
                return !1
        }
        return (a.className.toUpperCase ? .() ? .includes("CRUMB") || a.id.toUpperCase ? .() ? .includes("CRUMB")) && a.offsetHeight <= 50 ||
            O1(a) ? !1 : !a.classList ? .contains("google-anno-skip") && !a.classList ? .contains("adsbygoogle")
    }

    function O1(a) {
        return M1.some(b => a.className.toUpperCase ? .() ? .includes(b) || a.id.toUpperCase ? .() ? .includes(b))
    };

    function P1(a, b, c) {
        b = b.getBoundingClientRect();
        a = ip(hp(new jp, a), 3);
        c = zi(a, 4, c);
        c = wi(c, 6, Math.round(b.x));
        return wi(c, 7, Math.round(b.y))
    }

    function Q1(a) {
        a = Y0(a);
        var b = new fp;
        b = wi(b, 1, a[0]);
        b = wi(b, 2, a[1]);
        b = wi(b, 3, a[2]);
        return Th(b, 4, eg(a[3]), 0)
    };
    const R1 = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function S1(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return a === "" || R1.test(a)
        }
    };

    function T1(a, b) {
        const c = new U1(b);
        for (const d of a) D(d, 5) && mi(d, 3).forEach(e => {
            V1(c, e, e)
        });
        W1(c);
        return new X1(c)
    }

    function Y1(a, b) {
        b = a.match(b);
        a = new Map;
        for (const c of b)
            if (b = c.j, a.has(b)) {
                const d = a.get(b);
                c.length > d.length && a.set(b, c)
            } else a.set(b, c);
        return [...a.values()]
    }
    var X1 = class {
        constructor(a) {
            this.g = a
        }
        isEmpty() {
            return this.g.isEmpty()
        }
        match(a) {
            return this.g.match(a)
        }
    };

    function V1(a, b, c) {
        const d = a.i.has(c) ? a.i.get(c) : a.A++;
        a.i.set(c, d);
        a.l.set(d, c);
        c = 0;
        for (let e = 0; e < b.length; e++) {
            const f = b.charCodeAt(e);
            a.g[c].contains(f) || (a.g.push(new Z1), a.g[a.size].l = c, a.g[a.size].H = f, a.g[c].j.set(f, a.size), a.size++);
            c = a.g[c].j.get(f)
        }
        a.g[c].A = !0;
        a.g[c].C = d;
        a.g[c].D = a.j.length;
        a.j.push(b.length)
    }

    function W1(a) {
        const b = [];
        for (b.push(0); b.length > 0;) {
            const f = b.shift();
            var c = a,
                d = c.g[f];
            if (f === 0) d.g = 0, d.i = 0;
            else if (d.l === 0) d.g = 0, d.i = d.A ? f : c.g[c.g[f].g].i;
            else {
                d = c.g[c.g[f].l].g;
                for (var e = c.g[f].H;;) {
                    if (c.g[d].contains(e)) {
                        c.g[f].g = c.g[d].j.get(e);
                        break
                    }
                    if (d === 0) {
                        c.g[f].g = 0;
                        break
                    }
                    d = c.g[d].g
                }
                c.g[f].i = c.g[f].A ? f : c.g[c.g[f].g].i
            }
            for (const g of a.g[f].nb) b.push(g)
        }
    }
    class U1 {
        constructor(a) {
            this.C = a;
            this.size = 1;
            this.g = [new Z1];
            this.j = [];
            this.i = new Map;
            this.l = new Map;
            this.A = 0
        }
        isEmpty() {
            return this.A === 0
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let g = 0; g < a.length; g++) {
                for (;;) {
                    var d = a.charCodeAt(g),
                        e = this.g[b];
                    if (e.contains(d)) {
                        b = e.j.get(d);
                        break
                    }
                    if (b === 0) break;
                    b = e.g
                }
                let h = b;
                for (;;) {
                    h = this.g[h].i;
                    if (h === 0) break;
                    const k = g + 1 - this.j[this.g[h].D],
                        l = g;
                    d = a;
                    e = l;
                    var f = this.C;
                    S1(d.charAt(k - 1), f) && S1(d.charAt(e + 1), f) && c.push(new $1(k, l, this.l.get(this.g[h].C)));
                    h = this.g[h].g
                }
            }
            return c
        }
    }
    class Z1 {
        constructor() {
            this.j = new Map;
            this.M = !1;
            this.Ja = this.J = this.G = this.pa = this.V = this.X = -1
        }
        contains(a) {
            return this.j.has(a)
        }
        set l(a) {
            this.X = a
        }
        get l() {
            return this.X
        }
        set H(a) {
            this.V = a
        }
        get H() {
            return this.V
        }
        set A(a) {
            this.M = a
        }
        get A() {
            return this.M
        }
        set C(a) {
            this.J = a
        }
        get C() {
            return this.J
        }
        set g(a) {
            this.pa = a
        }
        get g() {
            return this.pa
        }
        set i(a) {
            this.G = a
        }
        get i() {
            return this.G
        }
        set D(a) {
            this.Ja = a
        }
        get D() {
            return this.Ja
        }
        get nb() {
            return this.j.values()
        }
    }
    var $1 = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.l = c
        }
        get j() {
            return this.i
        }
        get A() {
            return this.g
        }
        get sa() {
            return this.l
        }
        get length() {
            return this.g - this.i
        }
    };
    async function a2(a, b, c, d, e, f) {
        const g = T1(B0(b.R), b.i);
        if (!g.isEmpty()) {
            var h = new Map;
            for (const k of B0(b.R).filter(l => D(l, 5))) mi(k, 3).forEach(l => {
                h.set(l, D(k, 1))
            });
            q(await q(b2(a, a.document.body, b, g, h, new Set, c, d, b.L.je ? new I1(0, 0, 0, b.L.je) : null, b.L.pe || b.L.Lb ? new c2(b.L.pe, b.L.Lb) : null, e, f)))
        }
    }
    async function b2(a, b, c, d, e, f, g, h, k, l, m, n) {
        g.g.ka(9) >= g.i && q(await q(T0(g, 10)));
        if (b.nodeType !== Node.ELEMENT_NODE || N1(b))
            if (c.L.Pf && f.size && b.nodeType === Node.ELEMENT_NODE && d2(a, b) && b.parentElement && !e2(a, c, b.parentElement) && f2(a, l, b.getBoundingClientRect().top) && g2(a, f, c, h, b.parentElement, b, k, l, n), b.nodeType === Node.TEXT_NODE && b.textContent) Y1(d, b.textContent).map(p => e.get(p.sa)).filter(p => !!p).forEach(p => void f.add(p));
            else {
                for (const p of b.childNodes) q(await q(b2(a, p, c, d, e, f, g, h, k, l, m, n)));
                f.size &&
                    b.nodeType === Node.ELEMENT_NODE && ["block", "table-cell"].includes(a.getComputedStyle(b).display) && !e2(a, c, b) && f2(a, l, b.getBoundingClientRect().bottom) && g2(a, f, c, h, b, null, k, l, n)
            }
        else c.L.Lb && l && b.classList ? .contains("adsbygoogle") && b.dataset.adStatus === "filled" && h2(l, b.getBoundingClientRect().bottom + a.scrollY)
    }

    function g2(a, b, c, d, e, f, g, h, k) {
        for (const [m, n] of [...b].entries()) {
            var l = m;
            const p = n;
            if (g && G1(g) || c.L.yc && l === c.L.yc) return;
            c.L.yc && b.delete(p);
            const w = P1(c.U.Cd(), f ? ? e, p);
            d.entries.push(vh(w));
            g && K1(g.i, p, g.g);
            if (B(c.R, 17)) continue;
            l = L1(a, c, p, e);
            const v = i2(l, c, Hg(y(w, 10)) ? ? "0");
            l1(l);
            t1(c, 999, l, t => {
                try {
                    var C = qp(op(p), Hg(y(w, 10)) ? ? "0");
                    var I = Ch(C, 7, wg(v.j));
                    const V = c.U.Jc(I);
                    w1(k, a, c, V, p, c.l.get(p) || "", 3);
                    return !1
                } finally {
                    t.preventDefault(), t.stopImmediatePropagation()
                }
            });
            e.insertBefore(l, f);
            !j2(l,
                c) && h && k2(h, l.getBoundingClientRect().bottom + window.scrollY)
        }
        c.L.yc || b.clear()
    }

    function d2(a, b) {
        return ["BR", "IMG", "TABLE"].includes(b.tagName) || a.getComputedStyle(b).display === "block"
    }

    function e2(a, b, c) {
        if (!b.L.fe) return !1;
        a = be(a.getComputedStyle(c).fontSize);
        return a !== null && a > b.L.fe
    }

    function f2(a, b, c) {
        b ? (a = c + a.scrollY, b = (b.g === void 0 || a - b.g > b.j) && (b.i === void 0 || a - b.i > b.Lb)) : b = !0;
        return b
    }
    class l2 {
        constructor() {
            this.i = this.g = null
        }
        get j() {
            return this.g
        }
    }

    function i2(a, b, c) {
        const d = new l2;
        m2(b, e => {
            for (const l of e)
                if (l.isIntersecting) {
                    if (!j2(a, b)) {
                        var f = d,
                            g = b.U;
                        e = c;
                        if (!f.g) {
                            var h = g.jf,
                                k = new Po;
                            e = Th(k, 1, Gg(e), "0");
                            f.g = h.call(g, e)
                        }
                    }
                } else d.g && !d.i && (e = b.U, f = e.hf, g = new Oo, g = xi(g, 1, d.g), d.i = f.call(e, g))
        }).observe(a);
        return d
    }

    function j2(a, b) {
        return b.L.mg && (b = document.elementFromPoint(a.getBoundingClientRect().x + a.getBoundingClientRect().width / 2, a.getBoundingClientRect().y + a.getBoundingClientRect().height / 2)) && !a.contains(b) ? (a.remove(), !0) : !1
    }

    function h2(a, b) {
        a.i = b
    }

    function k2(a, b) {
        a.g = b
    }
    class c2 {
        constructor(a, b) {
            this.j = a;
            this.Lb = b;
            this.i = this.g = void 0
        }
    };

    function n2(a, b, c, d, e, f, g) {
        if (!a.g) {
            var h = b.document.createElement("span");
            h.appendChild(m1(b, "12px", f));
            h.appendChild(b.document.createTextNode(d));
            qH(b, c || null, {
                informationText: h
            }, e, g ? k => {
                g.yf(k)
            } : g);
            a.g = !0
        }
    }
    var o2 = class {
        constructor() {
            this.g = !1
        }
    };
    const p2 = [{
        tg: "1907259590",
        se: 480,
        Qe: 220
    }, {
        tg: "2837189651",
        se: 400,
        Qe: 180
    }, {
        tg: "9211025045",
        se: 360,
        Qe: 160
    }, {
        tg: "6584860439",
        se: -Infinity,
        Qe: 150
    }];

    function q2(a) {
        p2.find(b => b.se <= a)
    };
    var r2 = class {
        constructor() {
            this.g = []
        }
    };

    function s2(a) {
        D1(a.config, 1065, a.B, () => {
            if (!a.g) {
                var b = new xp;
                b = xi(b, 1, a.i);
                var c = new wp;
                b = ci(b, 2, yp, c);
                a.config.U.ze(b)
            }
        }, 1E4)
    }
    class t2 {
        constructor(a, b, c) {
            this.B = a;
            this.config = b;
            this.i = c;
            this.g = !1
        }
        cancel(a) {
            this.B.clearTimeout(a)
        }
    }

    function w1(a, b, c, d, e, f, g, h = null) {
        q2(b.document.body.clientWidth);
        e = c.qa ? u2(a, b, c, e, f, h, g) : v2(a, b, c, e, f, h, g);
        cs(e.isVisible(), !1, () => {
            a.g = !1;
            var l = a.i;
            for (const m of l.g) m();
            l.g.length = 0
        });
        e.show({
            ah: !0
        });
        a.g = !0;
        const k = new t2(b, c, d);
        s2(k);
        a.Ta(() => {
            var l = c.U,
                m = l.ze;
            var n = new xp;
            n = xi(n, 1, d);
            var p = new vp;
            n = ci(n, 3, yp, p);
            m.call(l, n);
            k.g = !0
        })
    }

    function u2(a, b, c, d, e, f, g) {
        e = c.Kd.ff({
            B: b,
            sa: d,
            rg: e,
            L: c.L,
            qa: c.qa,
            aa: c.aa(),
            R: c.R,
            gh: f,
            Ld: c.qa ? b.innerWidth : Math.min(b.document.body.clientWidth, c.L.ke),
            Bb: c.Bb.bind(c),
            Tb: c.Tb.bind(c),
            Ta: h => void a.Ta(h),
            format: g
        });
        return yF(b, e, {
            Qh: .95,
            lh: .95,
            zIndex: 2147483647,
            Tc: !0,
            tf: "adpub-drawer-root",
            sf: !1,
            bb: !0,
            zf: new S(H0(c.R, d))
        })
    }

    function v2(a, b, c, d, e, f, g) {
        const h = c.qa ? b.innerWidth : Math.min(b.document.body.clientWidth, c.L.ke);
        e = c.Kd.ff({
            B: b,
            sa: d,
            rg: e,
            L: c.L,
            qa: c.qa,
            aa: c.aa(),
            R: c.R,
            gh: f,
            Ld: h,
            Bb: c.Bb.bind(c),
            Tb: c.Tb.bind(c),
            Ta: k => void a.Ta(k),
            format: g
        });
        return HE(b, e, {
            Rd: `${h}px`,
            Od: c.aa(),
            Hd: D(c.R, 14),
            zIndex: 2147483647,
            Tc: !0,
            eh: !0,
            tf: "adpub-drawer-root",
            sf: !1,
            bb: !0,
            zf: new S(H0(c.R, d))
        })
    }
    var w2 = class {
        constructor() {
            this.g = !1;
            this.i = new r2
        }
        Ta(a) {
            this.i.g.push(a)
        }
    };
    const x2 = ["block", "inline", "inline-block", "list-item", "table-cell"];
    async function y2(a, b, c, d, e) {
        d.g.ka(5) >= d.i && q(await q(T0(d, 6)));
        const f = new w2;
        c.L.vf || z2(a, b, c, e, B0(c.R), f);
        c.L.wf && !A2(a) || q(await q(c.Sa(898, a2(a, c, d, e, b, f))));
        c.L.xf || q(await q(B2(a, c, () => new o2, d, e, f)))
    }

    function A2(a) {
        try {
            const b = a.location ? .href ? .match(/goog_fac=1/);
            return b !== null && b !== void 0
        } catch (b) {
            return !1
        }
    }
    async function B2(a, b, c, d, e, f) {
        var g = B0(b.R);
        var h = new U1(b.i);
        for (const k of g) D(k, 6) !== "" && (g = D(k, 1), V1(h, g, g));
        W1(h);
        h = new X1(h);
        h.isEmpty() || q(await q(b.Sa(898, C2(a, b, d, e, h, new I1(b.params.rl, b.params.sg, b.params.cf, b.params.ie), c(), f))))
    }
    async function C2(a, b, c, d, e, f, g, h) {
        let k = a.document.body;
        if (B(b.R, 17) || z(b.R, $t, 21))
            for (; k;) {
                c.g.ka(7) >= c.i && q(await q(T0(c, 8)));
                if (k.nodeType === Node.TEXT_NODE && k.textContent !== "" && k.parentElement) {
                    const kc = k.parentElement;
                    a: {
                        var l = a,
                            m = b,
                            n = kc,
                            p = k.textContent,
                            w = d,
                            v = e,
                            t = f,
                            C = h;
                        const Rb = [];b: {
                            var I = p;
                            switch (m.i) {
                                case 1:
                                    var V = I;
                                    const E = Array(V.length);
                                    let da = 0;
                                    for (let Oa = 0; Oa < V.length; Oa++) R1.test(V[Oa]) || da++, E[Oa] = da;
                                    var N = E;
                                    break b;
                                default:
                                    var O = I;
                                    const qa = Array(O.length);
                                    let Qa = 0,
                                        Aa = 0;
                                    for (; Aa < O.length;) {
                                        for (;
                                            /\s/.test(O[Aa]);) qa[Aa] =
                                            Qa, Aa++;
                                        let Oa = !1;
                                        for (; Aa < O.length && !/\s/.test(O[Aa]);) Oa = !0, qa[Aa] = Qa, Aa++;
                                        Oa && (Qa++, qa[Aa - 1] = Qa)
                                    }
                                    N = qa
                            }
                        }
                        const Sb = N,
                            Gf = p.includes("\u00bb") ? [] : Y1(v, p);
                        let Pe = -1;
                        for (const E of Gf) {
                            const da = E.j,
                                qa = E.A;
                            if (da < Pe) continue;
                            var J = t,
                                Ka = E.sa;
                            J1(J.i, J.g + Sb[da]);
                            var lb = J,
                                sa = lb.i,
                                Ca = Ka;
                            if (!((sa.g.has(Ca) ? sa.g.get(Ca).length : 0) < lb.sg && J.i.j < J.cf)) continue;
                            const Qa = l.getComputedStyle(n),
                                Aa = Qa.fontSize.match(/\d+/);
                            if (!(Aa && Number(Aa[0]) >= 12 && Number(Aa[0]) <= 22 && Xa(x2, Qa.display))) {
                                t.g += Sb[Sb.length - 1];
                                var Gb = [];
                                break a
                            }
                            const Oa = Pe + 1;
                            Oa < da && Rb.push(l.document.createTextNode(p.substring(Oa, da)));
                            const Qe = p.substring(da, qa + 1);
                            var va = p,
                                Qb = da,
                                Dc = qa + 1;
                            const If = va.substring(Math.max(Qb - 30, 0), Qb) + "~~" + va.substring(Dc, Math.min(Dc + 30, va.length));
                            var la = l,
                                hc = m.U.Cd(),
                                Je = n,
                                Hd = Qe,
                                Ke = If,
                                xf = E.sa,
                                yf = Sb[da];
                            const he = Je.getBoundingClientRect();
                            var Hb = ip(hp(new jp, hc), 2);
                            var Le = zi(Hb, 2, Hd);
                            var ld = zi(Le, 3, Ke);
                            var ce = zi(ld, 4, xf);
                            var zf = wi(ce, 5, yf);
                            var Af = wi(zf, 6, Math.round(he.x));
                            var Id = wi(Af, 7, Math.round(he.y));
                            const nd = la.getComputedStyle(Je);
                            var Me = new gp;
                            var Bf = zi(Me, 1, nd.fontFamily);
                            var Mg = Q1(nd.color);
                            var Cf = A(Bf, 7, Mg);
                            var Rc = Q1(nd.backgroundColor);
                            var de = A(Cf, 8, Rc);
                            const Jf = nd.fontSize.match(/^(\d+(\.\d+)?)px$/);
                            var Sc = wi(de, 4, Jf ? Math.round(Number(Jf[1])) : 0);
                            const ie = Math.round(Number(nd.fontWeight));
                            isNaN(ie) || ie === 400 || wi(Sc, 5, ie);
                            nd.textDecorationLine !== "none" && zi(Sc, 6, nd.textDecorationLine);
                            var Df = A(Id, 8, Sc);
                            const Re = [];
                            let od = Je;
                            for (; od && Re.length < 20;) {
                                var ic = Re,
                                    Ef = ic.push,
                                    Ec = od,
                                    Ng = new ep;
                                const Qg = zi(Ng, 1, Ec.tagName);
                                Ec.className !==
                                    "" && Sh(Qg, 2, Ec.className.split(" "), Kg);
                                Ef.call(ic, Qg);
                                if (od.tagName === "BODY") break;
                                od = od.parentElement
                            }
                            var ee = Re.reverse();
                            const Pg = di(Df, 9, ee);
                            w.entries.push(vh(Pg));
                            Rb.push(D2(l, m, Hg(y(Pg, 10)) ? ? "0", E.sa, Qe, n, C));
                            K1(t.i, E.sa, t.g + Sb[da]);
                            Pe = qa;
                            if (G1(t)) break
                        }
                        const Hf = Pe + 1;Hf !== 0 && Hf < p.length && Rb.push(l.document.createTextNode(p.substring(Hf)));t.g += Sb[Sb.length - 1];Gb = Rb
                    }
                    const md = Gb;
                    if (md.length && !B(b.R, 17)) {
                        !b.L.ud && n2(g, a, b.params.Zg ? S0(a, b.params.Zg) : void 0, D(b.R, 3), Hi(z(b.R, $t, 21)), b.params.Eh,
                            b.U);
                        for (const Rb of md) kc.insertBefore(Rb, k), E2(Rb);
                        kc.removeChild(k);
                        for (k = md[md.length - 1]; k.lastChild;) k = k.lastChild;
                        if (G1(f)) break
                    }
                }
                a: {
                    var fe = a,
                        jc = k,
                        xa = f,
                        ge = b.i;
                    if (jc.firstChild && (jc.nodeType !== Node.ELEMENT_NODE ? 0 : !jc.classList ? .contains("google-anno-skip") && (jc.offsetHeight || fe.getComputedStyle(jc).display === "contents"))) {
                        if (N1(jc)) {
                            k = jc.firstChild;
                            break a
                        }
                        if (jc.textContent ? .length) {
                            var Og = xa;
                            b: {
                                var Ne = jc.textContent;
                                switch (ge) {
                                    case 1:
                                        var Oe = Ne;
                                        let md = 0;
                                        for (let Sb = Oe.length - 1; Sb >= 0; Sb--) R1.test(Oe[Sb]) ||
                                            md++;
                                        var Ff = md;
                                        break b;
                                    default:
                                        const Rb = Ne.trim();
                                        Ff = Rb === "" ? 0 : Rb.split(/\s+/).length
                                }
                            }
                            J1(Og.i, Og.g + Ff)
                        }
                    }
                    let kc = jc;
                    for (;;) {
                        if (kc.nextSibling) {
                            k = kc.nextSibling;
                            break a
                        }
                        if (!kc.parentNode) {
                            k = null;
                            break a
                        }
                        kc = kc.parentNode
                    }
                    k = void 0
                }
            }
    }

    function F2(a, b) {
        b = {
            aa: b.aa(),
            qa: b.qa,
            T: mr(a),
            W: nr(a)
        };
        if (b.W >= 400) {
            var c;
            if ((c = a1(a, b)) != null) var d = c;
            else a: {
                c = b.T;
                var e = i1(a, b);a = 16;
                for (d of e) {
                    e = d.start;
                    const f = d.end;
                    if (e > a) {
                        if (e - a - 16 >= 200) {
                            d = g1(b, e, a);
                            break a
                        }
                        a = f + 16
                    } else f >= a && (a = f + 16)
                }
                d = c - a - 16 >= 200 ? g1(b, c, a) : null
            }
        } else d = null;
        return d
    }

    function z2(a, b, c, d, e, f) {
        function g() {
            return k ? ? (k = c.Tb(898, a, () => {
                if (!h) {
                    var m = c.ka(12);
                    a.clearInterval(k);
                    h = !0;
                    var n = F2(a, c);
                    n && G2(a, b, c, d, m, e, n, f)
                }
            }, c.L.Ue))
        }
        if (e.filter(m => D(m, 7).length).length) {
            var h = !1,
                k = void 0,
                l = H2(c, a, () => {
                    if (!(a.scrollY <= c.L.Ve || h)) {
                        var m = c.ka(12),
                            n = F2(a, c);
                        n ? (h = !0, a.removeEventListener("scroll", l), G2(a, b, c, d, m, e, n, f)) : k = g()
                    }
                });
            D1(c, 898, a, () => {
                if (!h) {
                    var m = c.ka(12),
                        n = F2(a, c);
                    n ? (h = !0, G2(a, b, c, d, m, e, n, f)) : k = g()
                }
            }, c.L.Te)
        }
    }

    function G2(a, b, c, d, e, f, g, h) {
        const k = new E1(a, c, g, h);
        f.filter(l => D(l, 7).length).forEach(l => {
            var m = c.U.Cd();
            var n = D(l, 1);
            m = ip(hp(new jp, m), 1);
            n = zi(m, 4, n);
            d.entries.push(vh(n));
            n = Hg(y(n, 10)) ? ? "0";
            m = D(l, 1);
            l = D(l, 1);
            k.j.push(new F1(n, m, l));
            k.A && C1(k, b)
        });
        c.U.Uf(I2(d, c.ka(13) - e))
    }

    function E2(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if (a.tagName === "A") {
                var b = $0(Y0(getComputedStyle(a.parentElement).color)),
                    c = $0(Y0(getComputedStyle(a).color));
                var d = Z0(a);
                if (d = b && c && d ? lQ(c, d) < Math.min(lQ(b, d), 2.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = b < 16 ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    u(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) E2(a.children[b])
        }
    }
    class J2 {
        constructor() {
            this.i = this.g = null
        }
        get j() {
            return this.g
        }
    }

    function D2(a, b, c, d, e, f, g) {
        const h = a.document.createElement("SPAN");
        h.className = "google-anno-t";
        j1(h);
        u(h, {
            "text-decoration": "underline"
        });
        u(h, {
            "text-decoration-style": "dotted"
        });
        u(h, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        });
        u(h, {
            color: "inherit",
            "font-family": "inherit",
            "font-size": "inherit",
            "font-style": "inherit",
            "font-weight": "inherit"
        });
        h.appendChild(a.document.createTextNode(e));
        e = a.document.createElement("A");
        j1(e);
        u(e, {
            "text-decoration": "none",
            fill: "currentColor"
        });
        Wc(e);
        e.className = "google-anno";
        l1(e);
        e.appendChild(K2(a, b, f));
        e.appendChild(a.document.createTextNode("\u00a0"));
        e.appendChild(h);
        const k = L2(b, c, e);
        t1(b, 999, e, l => {
            try {
                var m = qp(op(d), c);
                var n = Ch(m, 2, wg(k.j));
                const p = b.U.Jc(n);
                w1(g, a, b, p, d, b.C.get(d) || "", 1, b.L.ud ? b.j.get(d) || "" : null);
                return !1
            } finally {
                l.preventDefault(), l.stopImmediatePropagation()
            }
        });
        return e
    }

    function K2(a, b, c) {
        return m1(a, a.getComputedStyle(c).fontSize, b.params.Eh)
    }

    function L2(a, b, c) {
        const d = new J2;
        m2(a, e => {
            for (const l of e)
                if (l.isIntersecting) {
                    var f = d,
                        g = a.U;
                    e = b;
                    if (!f.g) {
                        var h = g.Xf,
                            k = new up;
                        e = Th(k, 2, Gg(e), "0");
                        f.g = h.call(g, e)
                    }
                } else d.g && !d.i && (e = a.U, f = e.Wf, g = new tp, g = xi(g, 1, d.g), d.i = f.call(e, g))
        }).observe(c);
        return d
    };

    function I2(a, b) {
        const c = a.g;
        a.g = a.entries.length;
        var d = new sp,
            e = new kp;
        a = di(e, 2, a.entries.slice(c));
        d = A(d, 1, a);
        b !== 0 && xi(d, 2, Math.round(b));
        return d
    }
    var M2 = class {
        constructor() {
            this.entries = [];
            this.language = null;
            this.g = 0
        }
    };

    function N2(a) {
        return a ? 1 : 0
    };

    function O2(a, b, c) {
        P2(a);
        var d = new Map;
        for (const e of b) b = Q2(e), d.set(b, (d.get(b) ? ? 0) + 1);
        for (const [e, f] of d) d = e, R2(a, f, d, c), S2(a, d)
    }

    function T2(a, b, c, d) {
        a.i.forEach(e => {
            U2(e, { ...a.g,
                outcome: b,
                cd: c,
                Ff: d
            })
        })
    }

    function V2(a, b, c, d, e) {
        a.i.forEach(f => {
            f.Ze(b, { ...a.g,
                outcome: c,
                cd: d,
                Ff: e
            })
        })
    }

    function P2(a) {
        a.A || (a.A = !0, a.i.forEach(b => {
            W2(b, a.g)
        }))
    }

    function R2(a, b, c, d) {
        a.i.forEach(e => {
            e.bf(b, { ...a.g,
                format: c,
                cd: d
            })
        })
    }

    function S2(a, b) {
        a.C.has(b) || (a.C.add(b), a.i.forEach(c => {
            X2(c, { ...a.g,
                format: b
            })
        }))
    }

    function Y2(a, b) {
        a.i.forEach(c => {
            Z2(c, { ...a.g,
                reason: $2(b)
            })
        })
    }
    var h3 = class {
        constructor(a, b, c) {
            this.H = this.j = 1;
            this.l = this.A = !1;
            this.g = {
                language: a.Zf.has(b) ? b : "other",
                ya: Zb() ? 2 : Xb() ? 4 : Yb() ? 7 : 10
            };
            this.C = new Set;
            this.i = [...c]
        }
        Cd() {
            return this.H++
        }
        af(a) {
            a: switch (Hh(a, mp)) {
                case 4:
                    var b = 1;
                    break a;
                case 5:
                    b = 2;
                    break a;
                default:
                    b = 0
            }
            const c = a3(a);
            var d = Fu(ji(a, 3)),
                e = c.length > 0;T2(this, b, !1, e);V2(this, d, b, !1, e);a.g() && c.length > 0 && O2(this, c, !1);
            if (Gh(a, dp, 5, mp)) {
                a = oi(a, dp, 5, mp);
                for (const f of ai(a, Zo, 1, Jh())) Y2(this, f)
            }
            this.j++
        }
        Uf(a) {
            const b = a.g() ? 1 : 0,
                c = a3(a);
            var d = Fu(ji(a,
                    2)),
                e = c.length > 0;
            T2(this, b, !0, e);
            V2(this, d, b, !0, e);
            a.g() && c.length > 0 && O2(this, c, !0);
            this.j++
        }
        Xf() {
            this.i.forEach(a => {
                b3(a, { ...this.g,
                    format: 2
                })
            });
            return this.j++
        }
        Wf() {
            this.i.forEach(a => {
                c3(a, { ...this.g,
                    format: 2
                })
            });
            return this.j++
        }
        Xe() {
            this.i.forEach(a => {
                b3(a, { ...this.g,
                    format: 1
                })
            });
            return this.j++
        }
        We() {
            this.i.forEach(a => {
                c3(a, { ...this.g,
                    format: 1
                })
            });
            this.j++
        }
        jf() {
            this.i.forEach(a => {
                b3(a, { ...this.g,
                    format: 3
                })
            });
            return this.j++
        }
        hf() {
            this.i.forEach(a => {
                c3(a, { ...this.g,
                    format: 3
                })
            });
            return this.j++
        }
        Jc(a) {
            let b =
                0;
            Dg(y(a, 2)) != null ? b = 2 : Dg(y(a, 3)) != null ? b = 1 : Dg(y(a, 7)) != null && (b = 3);
            this.i.forEach(c => {
                c.click({ ...this.g,
                    format: b
                })
            });
            return this.j++
        }
        ze(a) {
            let b = 0;
            Gh(a, wp, 2, yp) ? b = 1 : Gh(a, vp, 3, yp) && (b = 2);
            this.i.forEach(c => {
                d3(c, { ...this.g,
                    type: b
                })
            });
            this.j++
        }
        yf(a) {
            a: switch (F(a, 1)) {
                case 1:
                    a = 1;
                    break a;
                case 2:
                    a = 2;
                    break a;
                default:
                    a = 0
            }
            const b = a;this.i.forEach(c => {
                e3(c, { ...this.g,
                    type: b
                })
            });this.l || (this.l = !0, this.i.forEach(c => {
                f3(c, this.g)
            }));this.j++
        }
        Se() {
            this.i.forEach(a => {
                g3(a, this.g)
            });
            this.j++
        }
    };

    function a3(a) {
        a.g() ? (a = a.i(), a = [...ai(a, jp, 2, Jh())]) : a = [];
        return a
    }

    function $2(a) {
        switch (Hh(a, $o)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            case 9:
                return 4;
            case 11:
                return 5;
            case 12:
                return 6;
            case 13:
                return 7;
            default:
                return 0
        }
    }

    function Q2(a) {
        switch (F(a, 1)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                return 0
        }
    };

    function i3(a, b) {
        var c = new zp;
        var d = a.j++;
        c = xi(c, 1, d);
        b = xi(c, 2, Math.round(a.A.ka(b) - a.C));
        b = A(b, 10, a.H);
        return ti(b, 15, a.D ? !0 : void 0)
    }
    var j3 = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.A = b;
            this.C = c;
            this.H = d;
            this.D = f;
            this.i = this.j = 1;
            this.l = [...g];
            this.g = h.length ? new h3(e, a, h) : null
        }
        Cd() {
            return this.i++
        }
        af(a) {
            this.g ? .af(a);
            var b = this.handle,
                c = i3(this, 11);
            a = ci(c, 3, Ap, a);
            b.call(this, a)
        }
        Uf(a) {
            this.g ? .Uf(a);
            var b = this.handle,
                c = i3(this, 11);
            a = ci(c, 14, Ap, a);
            b.call(this, a)
        }
        Xf(a) {
            this.g ? .Xf(a);
            var b = this.handle,
                c = i3(this, 15);
            a = ci(c, 4, Ap, a);
            return b.call(this, a)
        }
        Wf(a) {
            this.g ? .Wf(a);
            var b = this.handle,
                c = i3(this, 16);
            a = ci(c, 5, Ap, a);
            return b.call(this,
                a)
        }
        Xe(a) {
            this.g ? .Xe(a);
            var b = this.handle,
                c = i3(this, 17);
            a = ci(c, 6, Ap, a);
            return b.call(this, a)
        }
        We(a) {
            this.g ? .We(a);
            var b = this.handle,
                c = i3(this, 18);
            a = ci(c, 7, Ap, a);
            b.call(this, a)
        }
        jf(a) {
            this.g ? .jf(a);
            var b = this.handle,
                c = i3(this, 19);
            a = ci(c, 16, Ap, a);
            return b.call(this, a)
        }
        hf(a) {
            this.g ? .hf(a);
            var b = this.handle,
                c = i3(this, 20);
            a = ci(c, 17, Ap, a);
            return b.call(this, a)
        }
        Jc(a) {
            this.g ? .Jc(a);
            var b = this.handle,
                c = i3(this, 14);
            a = ci(c, 8, Ap, a);
            return b.call(this, a)
        }
        ze(a) {
            this.g ? .ze(a);
            var b = this.handle,
                c = i3(this, 21);
            a = ci(c,
                9, Ap, a);
            b.call(this, a)
        }
        yf(a) {
            this.g ? .yf(a);
            var b = this.handle,
                c = i3(this, 22);
            a = ci(c, 11, Ap, a);
            b.call(this, a)
        }
        Se(a) {
            this.g ? .Se(a);
            var b = this.handle,
                c = i3(this, 24);
            a = ci(c, 12, Ap, a);
            b.call(this, a)
        }
        handle(a) {
            for (const b of this.l) b(a);
            return Fu(ji(a, 1))
        }
    };

    function t1(a, b, c, d) {
        c.addEventListener("click", k3(a, b, d))
    }

    function D1(a, b, c, d, e) {
        c.setTimeout(k3(a, b, d), e)
    }

    function m2(a, b) {
        return new IntersectionObserver(k3(a, 1065, b), {
            threshold: .98
        })
    }

    function H2(a, b, c) {
        a = k3(a, 898, c);
        b.addEventListener("scroll", a, {
            passive: !0
        });
        return a
    }

    function k3(a, b, c) {
        return a.Aa.tb(b, c, void 0, d => {
            d.es = a.L.Kb.join(",")
        })
    }
    var m3 = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.qa = a;
            this.R = b;
            this.Aa = c;
            this.U = d;
            this.H = e;
            this.params = f;
            this.L = g;
            this.Kd = h;
            this.C = new Map;
            this.A = new Map;
            this.l = new Map;
            this.g = new Map;
            this.j = new Map;
            this.i = Xa(l3, D(b, 7)) ? 1 : 0;
            for (const k of B0(this.R)) hi(k, 6) != null && this.C.set(D(k, 1), D(k, 6)), hi(k, 7) != null && this.A.set(D(k, 1), D(k, 7)), hi(k, 5) != null && this.l.set(D(k, 1), D(k, 5)), lg(y(k, 10)) != null && this.g.set(D(k, 1), F(k, 10)), hi(k, 11) != null && this.j.set(D(k, 1), D(k, 11))
        }
        Bb(a, b, c) {
            a = k3(this, a, c);
            b.addEventListener("message",
                a);
            return a
        }
        Tb(a, b, c, d) {
            return b.setInterval(k3(this, a, c), d)
        }
        Sa(a, b) {
            this.Aa.Sa(a, b, c => {
                c.es = this.L.Kb.join(",")
            });
            return b
        }
        ka(a) {
            return this.H.ka(a)
        }
        aa() {
            return F(this.R, 12) === 2
        }
    };
    const l3 = ["ja", "zh_CN", "zh_TW"];
    const n3 = new Map([
        [1, 1],
        [2, 2]
    ]);
    async function o3(a, b, c, d, e, f, g, h) {
        var k = OB;
        h = a ? (h = gR(new kR(a), "__gads", h)) ? Wd(h + "t2Z7mVic") % 20 : null : null;
        var l = h ? ? Math.floor(Td() * 20),
            m = f.ka(0),
            n = !!a && mr(a) < 488;
        h = c.R;
        var p;
        p = (p = D(h, 7)) ? (p = p.match(/^[a-z]{2,3}/i)) ? p[0].toLowerCase() : "" : "";
        var w = c.L,
            v = new rp;
        l = wi(v, 2, l);
        l = ei(l, 3, qg, w.Kb, Dg, void 0, void 0, !0);
        d = new j3(p, f, m, l, w, B(h, 17), d, e);
        e = new m3(n, h, k, d, f, c.params, c.L, c.Kd);
        k = new M2;
        k.language = p;
        g = q(await q(p3(a, b, e, g, k)));
        b = d.af;
        e = c.ic;
        a = a ? .location ? .hostname || "";
        c = c.Nj;
        f = f.ka(11) - m;
        m = new np;
        p = new To;
        e = zi(p, 1, e);
        a = zi(e, 2, a);
        n = ui(a, 3, n);
        n = A(m, 1, n);
        a = new Uo;
        a = zi(a, 2, k.language);
        c = zi(a, 3, c);
        n = A(n, 2, c);
        n = xi(n, 3, Math.round(f));
        e = B0(h);
        h = f = c = a = m = 0;
        for (t of e) m += N2(D(t, 6) !== "") + N2(D(t, 7) !== "") + N2(D(t, 5) !== ""), a += N2(D(t, 6) !== "") + N2(D(t, 7) !== "") + N2(D(t, 5) !== ""), c += N2(D(t, 6) !== ""), f += N2(D(t, 7) !== ""), h += N2(D(t, 5) !== "");
        var t = new lp;
        t = vi(t, 1, e.length);
        t = vi(t, 2, m);
        t = Ch(t, 3, a == null ? a : og(a));
        t = Ch(t, 4, c == null ? c : og(c));
        t = Ch(t, 5, f == null ? f : og(f));
        t = vi(t, 6, h);
        t = A(n, 6, t);
        if (g.length) {
            var C = new dp;
            C = di(C,
                1, g);
            ci(t, 5, mp, C)
        } else {
            k.g = k.entries.length;
            h = new kp;
            f = k.entries;
            yh(h);
            k = h.P;
            k = $h(h, k, k[x] | 0, jp, 2, 2, void 0, !0);
            n = g = 0;
            if (Array.isArray(f))
                for (C = f.length, c = 0; c < C; c++) a = f[c], k.push(a), (a = sf(a)) && !g++ && (k[x] &= -9), a || n++ || (k[x] |= 4096);
            else
                for (C of f) f = C, k.push(f), (f = sf(f)) && !g++ && (k[x] &= -9), f || n++ || (k[x] |= 4096);
            ci(t, 4, mp, h)
        }
        b.call(d, t)
    }
    async function p3(a, b, c, d, e) {
        if (!a) return [ap()];
        var f = a.document.body;
        if (!f || !q3(f)) return [Yo()];
        d.g.ka(3) >= d.i && q(await q(T0(d, 4)));
        f = [];
        (c.L.re && mr(a) < c.L.re || c.L.qe && nr(a) < c.L.qe) && f.push(Yo());
        if (ni(c.R, 1).length) {
            const g = ni(c.R, 1).map(h => n3.get(h) ? ? 0);
            f.push(cp(new Zo, Vo(g)))
        }
        Yd() && f.push(bp());
        f.length || q(await q(y2(a, b, c, d, e)));
        return f
    }

    function q3(a) {
        try {
            (new ResizeObserver(() => {})).disconnect()
        } catch {
            return !1
        }
        return a.classList && a.classList.contains !== void 0 && a.attachShadow !== void 0
    };
    async function r3(a, b, c, d, e, f, g) {
        const h = a.performance ? .now ? new V0(a.performance) : new W0,
            k = new U0(a, h);
        if (typeof e !== "string") throw Error(`Invalid config string ${e}`);
        e = G0(e);
        var l = Zh(e, C0, 1),
            m = c.google_ad_client;
        if (typeof m !== "string") throw new LB(`Invalid property code ${m}`);
        if (!Q(vw) || !D(e, 5) || m === D(e, 5)) {
            c = c.google_page_url;
            c = typeof c === "string" ? c : "";
            if (F(e, 4) === 2) {
                var n = ZH(a) ? .head_tag_slot_vars ? .google_ad_host ? ? a.document ? .querySelector('meta[name="google-adsense-platform-account"]') ? .getAttribute("content") ? ?
                    null;
                a = new R0(m, n, Be(a), c)
            } else a = new L0(m);
            m = a;
            a = P(nI);
            l = s3(l);
            a: {
                try {
                    n = b ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/);
                    if (!n) {
                        var p = null;
                        break a
                    }
                    var w = decodeURIComponent(n[1]);
                    p = D0(w);
                    break a
                } catch (v) {
                    p = null;
                    break a
                }
                p = void 0
            }
            p = p || Zh(e, C0, 1);
            w = F(e, 4);
            n = e.P;
            n = $h(e, n, n[x] | 0, gu, 3, 1);
            w = {
                rl: W(Dw),
                sg: W(Nw),
                cf: W(Lw),
                ie: W(Mw),
                Zg: n,
                Cg: W(Rw),
                Eh: w === 2 ? 10 : 2
            };
            g = {
                R: p,
                ic: c,
                Nj: g,
                params: w,
                L: new I0({
                    Kb: l,
                    vf: Q(dw),
                    xf: Q(fw),
                    re: W(Pw),
                    qe: W(Ow),
                    Ue: W(Bw),
                    Te: W(Aw),
                    Ve: W(Cw),
                    he: W(Hw),
                    wf: Q(ew),
                    ke: W(lw),
                    ud: F(e, 4) === 2,
                    Ef: vx(jw),
                    Ce: ux(hw),
                    De: Q(iw),
                    Pf: Q(kw),
                    je: W(Iw),
                    ng: Q(uw),
                    fe: W(mw),
                    Th: Q(rw),
                    pe: W(Qw),
                    yc: W(Kw),
                    Zf: P(tx).g(nw.g, nw.defaultValue),
                    mg: Q(sw),
                    Lb: W(ow)
                }),
                Kd: m
            };
            q(await q(t3(b, d, a, g, h, k, f)))
        }
    }

    function s3(a) {
        const b = P(Wq).g();
        a && b.push(...li(a, 24));
        b.push(...vx(ww).map(Number));
        b.push(42);
        b.sort((c, d) => c - d);
        return b
    }
    async function t3(a, b, c, d, e, f, g) {
        if (a) {
            const h = UD(a);
            if (h.wasReactiveAdConfigReceived[42]) return;
            h.wasReactiveAdConfigReceived[42] = !0
        }
        q(await q(o3(a, b, d, [h => {
            OB.Sa(1214, rI(c, h, e.ka(23)), k => {
                k.es = s3(d.R)
            })
        }], [new u3(c, d.R)], e, f, g)))
    }

    function W2(a, b) {
        v3(a, c => c.Gi, {
            ea: 1,
            ...b
        })
    }

    function X2(a, b) {
        v3(a, c => c.Ij, {
            ea: 1,
            ...b
        })
    }

    function U2(a, b) {
        v3(a, c => c.Hi, {
            ea: 1,
            ...b
        })
    }

    function Z2(a, b) {
        v3(a, c => c.Ii, {
            ea: 1,
            ...b
        })
    }

    function b3(a, b) {
        v3(a, c => c.Ki, {
            ea: 1,
            ...b
        })
    }

    function c3(a, b) {
        v3(a, c => c.Ji, {
            ea: 1,
            ...b
        })
    }

    function d3(a, b) {
        v3(a, c => c.Ik, {
            ea: 1,
            ...b
        })
    }

    function e3(a, b) {
        v3(a, c => c.qj, {
            ea: 1,
            ...b
        })
    }

    function f3(a, b) {
        v3(a, c => c.pj, {
            ea: 1,
            ...b
        })
    }

    function g3(a, b) {
        v3(a, c => c.Fi, {
            ea: 1,
            ...b
        })
    }

    function v3(a, b, c) {
        a.g && a.Aa.Sa(1214, sI(a.g, b, c), d => {
            d.es = s3(a.i)
        })
    }

    function w3(a, b, c) {
        a.g && a.Aa.Sa(1214, tI(a.g, b, c), d => {
            d.es = s3(a.i)
        })
    }
    class u3 {
        constructor(a, b) {
            var c = OB;
            this.g = a;
            this.Aa = c;
            this.i = b
        }
        Ze(a, b) {
            w3(this, c => c.Ze, {
                qd: a,
                ...b
            })
        }
        bf(a, b) {
            v3(this, c => c.bf, {
                ea: a,
                ...b
            })
        }
        click(a) {
            v3(this, b => b.cj, {
                ea: 1,
                ...a
            })
        }
    };

    function x3(a, b) {
        const c = Rd("STYLE", a);
        c.textContent = hd(vd `* { pointer-events: none; }`);
        a ? .head.appendChild(c);
        setTimeout(() => {
            a ? .head.removeChild(c)
        }, b)
    }

    function y3(a, b, c) {
        if (!a.body) return null;
        const d = new z3;
        d.apply(a, b);
        return () => {
            var e = c || 0;
            e > 0 && x3(b.document, e);
            em(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.j,
                position: d.A,
                top: d.l
            });
            b.scrollTo(0, d.i)
        }
    }
    class z3 {
        constructor() {
            this.g = this.l = this.A = this.j = null;
            this.i = 0
        }
        apply(a, b) {
            this.j = a.body.style.overflow;
            this.A = a.body.style.position;
            this.l = a.body.style.top;
            this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.i = wr(b);
            em(a.body, "top", `${-this.i}px`)
        }
    };

    function A3(a, b) {
        var c;
        if (!a.j)
            for (a.j = [], c = a.i.parentElement; c;) {
                a.j.push(c);
                if (a.J(c)) break;
                c = c.parentNode && c.parentNode.nodeType === 1 ? c.parentNode : null
            }
        c = a.j.slice();
        let d, e;
        for (d = 0; d < c.length; ++d)(e = c[d]) && b.call(a, e, d, c)
    }
    var B3 = class extends R {
        constructor(a, b, c) {
            super();
            this.i = a;
            this.V = b;
            this.D = c;
            this.j = null;
            Rr(this, () => this.j = null)
        }
        J(a) {
            return this.D === a
        }
    };

    function C3(a, b) {
        const c = a.D;
        c && (b ? (cE(a.G), u(c, {
            display: "block"
        }), a.C.body && !a.l && (a.l = y3(a.C, a.V, a.X)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.C.body.setAttribute("aria-hidden", "true")) : (dE(a.G), u(c, {
            display: "none"
        }), a.l && (a.l(), a.l = null), a.C.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
    }

    function D3(a) {
        C3(a, !1);
        const b = a.D;
        if (b) {
            var c = E3(a.M);
            A3(a, d => {
                u(d, c);
                Ar(d)
            });
            a.i.setAttribute("width", "");
            a.i.setAttribute("height", "");
            em(a.i, c);
            em(a.i, F3);
            em(b, G3);
            em(b, {
                background: "transparent"
            });
            u(b, {
                display: "none",
                position: "fixed"
            });
            Ar(b);
            Ar(a.i);
            (Zb() && rc() ? Fe(a.M) : 1) <= 1 || (em(b, {
                overflow: "scroll",
                "max-width": "100vw"
            }), te(b))
        }
    }
    var H3 = class extends B3 {
            constructor(a, b, c) {
                var d = W(hx);
                super(a, b, c);
                this.M = b;
                this.X = d;
                this.l = null;
                this.C = b.document;
                this.G = XD(new bE(b), 2147483646)
            }
        },
        G3 = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            padding: "0px",
            display: "none",
            zIndex: "2147483647"
        },
        F3 = {
            left: "0",
            position: "absolute",
            top: "0"
        };

    function E3(a) {
        a = Zb() && rc() ? Fe(a) : 1;
        a = 100 * (a < 1 ? 1 : a);
        return {
            width: `${a}vw`,
            height: `${a}vh`
        }
    };
    var I3 = class extends H3 {
        constructor(a, b, c) {
            super(b, a, c);
            D3(this)
        }
        J(a) {
            return a.classList ? a.classList.contains("adsbygoogle") : Xa(a.classList ? a.classList : (typeof a.className == "string" ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle")
        }
    };
    const J3 = {
        [1]: "closed",
        [2]: "viewed",
        [3]: "dismissed"
    };
    async function K3(a, b, c, d, e) {
        a = new L3(a, b, c, d, e);
        q(await q(a.init()));
        return a
    }

    function M3(a) {
        return setTimeout(SB(728, () => {
            N3(() => {
                a.C.reject()
            });
            a.dispose()
        }), W(cx) * 1E3)
    }

    function O3(a, b) {
        var c = sQ(a.i).then(() => {
            clearTimeout(b);
            a.C.resolve()
        });
        TB(1005, c);
        c = tQ(a.i).then(d => {
            P3(a, J3[d.status], d.payload)
        });
        TB(1006, c);
        c = uQ(a.i).then(() => {
            P3(a, "error")
        });
        TB(1004, c)
    }

    function Q3(a) {
        if (Q(dx)) {
            a.B.location.hash !== "" && UB("pub_hash", {
                o_url: a.B.location.href
            }, .1);
            a.B.location.hash = "goog_fullscreen_ad";
            var b = SB(950, c => {
                c.oldURL.endsWith("#goog_fullscreen_ad") && (a.j === 10 ? (P3(a, "closed"), a.B.removeEventListener("hashchange", b)) : (a.B.location.hash = "goog_fullscreen_ad", oQ(a.i.mf, "fullscreen", {
                    eventType: "backButton"
                }, "*")))
            });
            a.B.addEventListener("hashchange", b);
            Rr(a, () => {
                a.B.removeEventListener("hashchange", b);
                a.B.location.hash === "#goog_fullscreen_ad" && a.B.history.back()
            })
        }
    }

    function N3(a) {
        try {
            a()
        } catch (b) {}
    }

    function P3(a, b, c) {
        C3(a.G, !1);
        a.l && (c && b === "viewed" ? N3(() => {
            a.l({
                status: b,
                reward: c
            })
        }) : N3(() => {
            a.l({
                status: b
            })
        }));
        a.j === 11 && UB("fs_ad", {
            tgorigin: a.F.google_tag_origin,
            client: a.F.google_ad_client,
            url: a.F.google_page_url ? ? "",
            slot: a.F.google_ad_slot ? ? "0",
            ratype: a.j,
            clostat: b
        }, 1);
        a.dispose()
    }
    var L3 = class extends R {
        constructor(a, b, c, d, e) {
            super();
            this.B = a;
            this.D = b;
            this.J = c;
            this.j = d;
            this.F = e;
            this.l = null;
            this.G = new I3(a, c, b);
            a = new wQ(this.j === 10 ? 1 : 2, this.B, this.J.contentWindow);
            a.init();
            this.i = a;
            this.C = new rQ;
            this.D.dataset["slotcar" + (this.j === 10 ? "Interstitial" : "Rewarded")] = "true"
        }
        async init() {
            const a = M3(this);
            O3(this, a);
            Rr(this, () => {
                this.i.dispose();
                clearTimeout(a);
                Wl(this.D)
            });
            q(await this.C.promise)
        }
        show(a) {
            this.A || (this.l = a, C3(this.G, !0), r.IntersectionObserver || oQ(this.i.mf, "fullscreen", {
                eventType: "visible"
            }, "*"), Q3(this))
        }
        disposeAd() {
            this.dispose()
        }
    };

    function R3(a, b, c, d) {
        const e = new rQ;
        let f = "";
        const g = k => {
            try {
                const l = typeof k.data === "object" ? k.data : JSON.parse(k.data);
                f === l.paw_id && (yk(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
            } catch (l) {}
        };
        var h = typeof a.gmaSdk ? .getQueryInfo === "function" ? a.gmaSdk : void 0;
        if (h) return xk(a, "message", g), f = c(h), e.promise;
        c = typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage === "function" || typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage === "function" ? a.webkit.messageHandlers :
            void 0;
        return c ? (f = String(Math.floor(Td() * 2147483647)), xk(a, "message", g), b(c, f), e.promise) : null
    }

    function S3(a) {
        return R3(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    }(function(a) {
        return qb(b => {
            if (!sb(b)) return !1;
            for (const [c, d] of Object.entries(a)) {
                const e = c,
                    f = d;
                if (!(e in b)) {
                    if (f.ek === !0) continue;
                    return !1
                }
                if (!f(b[e])) return !1
            }
            return !0
        })
    })({
        vc: ob,
        pn: ob,
        eid: tb(),
        vnm: tb(),
        js: ob
    }, "RawGmaSdkStaticSignalObject");
    const T3 = (a, b) => {
        try {
            const m = B(b, 6) === void 0 ? !0 : B(b, 6);
            var c = Pk(F(b, 2)),
                d = D(b, 3);
            a: switch (F(b, 4)) {
                case 1:
                    var e = "pt";
                    break a;
                case 2:
                    e = "cr";
                    break a;
                default:
                    e = ""
            }
            var f = new Rk(c, d, e),
                g = z(b, Ik, 5) ? .g() ? ? "";
            f.dd = g;
            f.g = m;
            var h = !!B(b, 7);
            f.lb = h;
            var k = !!B(b, 8);
            f.i = k;
            f.B = a;
            var l = f.build();
            Gk(l)
        } catch {}
    };

    function U3(a, b) {
        var c = T3;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), a.document.readyState === "complete" ? c(a, b) : xk(a, "load", () => void c(a, b)))
    };

    function V3(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function W3(a) {
        if (a === a.top || Md(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && V3(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new rQ;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            d.data.msgType === "__goog_top_url_resp" && c.resolve({
                Uc: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };

    function X3() {
        return navigator.cookieDeprecationLabel ? Promise.race([navigator.cookieDeprecationLabel.getValue().then(a => ({
            status: 1,
            label: a
        })).catch(() => ({
            status: 2
        })), De(W(ax), {
            status: 5
        })]) : Promise.resolve({
            status: 3
        })
    }

    function Y3(a) {
        a = a.innerInsElement;
        if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
        return a
    }
    async function qT({
        Z: a,
        La: b,
        Da: c,
        slot: d,
        pageState: e
    }) {
        const f = d.vars,
            g = Pd(d.pubWin);
        var h = Y3(d);
        const k = new oW({
            K: g,
            pubWin: d.pubWin,
            F: f,
            Z: a,
            La: b,
            Da: c,
            ba: h,
            pageState: e
        });
        k.G = Date.now();
        vl(1, [k.F]);
        RB(1032, () => {
            if (g && Q(qx)) {
                var m = k.F;
                SH(NH(), 32, !1) || (TH(NH(), 32, !0), W_(g, m.google_loader_used === "sd" ? 5 : 9))
            }
        });
        try {
            q(await q(Z3(k)))
        } catch (m) {
            if (!VB(159, m)) throw m;
        }
        RB(639, () => {
            var m;
            var n = k.F;
            (m = k.K) && n.google_responsive_auto_format === 1 && n.google_full_width_responsive_allowed === !0 ? (n = (n = m.document.getElementById(n.google_async_iframe_id)) ?
                am(n, "INS", "adsbygoogle") : null) ? ((new nW(m, n)).run(), m = !0) : m = !1 : m = !1;
            return m
        });
        if (g ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/)) {
            b = d.pubWin;
            c = k.i;
            h = E0();
            try {
                var l = !!g ? .location ? .hash ? .match(/\bgoog_aidd/)
            } catch (m) {
                l = !1
            }
            TB(1008, $3(b, g, f, c, Gi(Ai(h, 4, l ? 2 : 1)), k.j, cT(e.g()) || D(a, 8)), m => {
                m.es = s3(null)
            })
        } else nQ(k.pubWin, "affa", m => {
            TB(1008, $3(d.pubWin, g, f, k.i, m.config, k.j, cT(e.g()) || D(a, 8)), n => {
                n.es = s3(null)
            });
            return !0
        });
        a4(k);
        return k
    }
    async function $3(a, b, c, d, e, f, g) {
        q(await q(r3(a, b, c, d, e, f, g)))
    }

    function Z3(a) {
        if (/_sdo/.test(a.F.google_ad_format)) return Promise.resolve();
        var b = a.pubWin;
        lR(13, b);
        lR(11, b);
        a.H = oi(a.Z, hT, 28, VQ) ? .i() ? ? !0;
        b = NH();
        var c = SH(b, 23, !1);
        c || TH(b, 23, !0);
        if (!c) {
            var d = oi(a.Z, hT, 28, VQ) ? .g() ? ? null,
                e = Q(gx) ? !!z(a.Z, Yh, 26) ? .g() : B(a.Z, 6);
            b = a.pubWin;
            c = a.F.google_ad_client;
            var f = B(a.Z, 20);
            b = new TN(b, c, d, e, f);
            b.i = !0;
            b.run()
        }
        Q(Vv) && (a.pubWin.googFloatingToolbarManagerAsyncPositionUpdate = !0, a.K && a.K !== a.pubWin && (a.K.googFloatingToolbarManagerAsyncPositionUpdate = !0));
        Q(Xv) && (oE(a.pubWin).dontOverrideDocumentOverflowUnlessNeeded = !0, a.K && a.K !== a.pubWin && (oE(a.K).dontOverrideDocumentOverflowUnlessNeeded = !0));
        b = !Jl() && !Wb();
        return !b || b && !b4(a) ? c4(a) : Promise.resolve()
    }

    function b4(a) {
        return d4(a) || e4(a)
    }

    function d4(a) {
        const b = a.F;
        if (!b.google_pause_ad_requests) return !1;
        const c = r.setTimeout(() => {
                UB("abg:cmppar", {
                    client: a.F.google_ad_client,
                    url: a.F.google_page_url
                })
            }, 1E4),
            d = SB(450, () => {
                b.google_pause_ad_requests = !1;
                r.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                if (!b4(a)) {
                    const e = c4(a);
                    TB(1222, e)
                }
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function e4(a) {
        const b = a.pubWin.document,
            c = a.ba;
        if (uU(b) === 3) return xU(SB(332, () => {
            if (!f4(a, g4().visible, c)) {
                const g = c4(a);
                TB(1222, g)
            }
        }), b), !0;
        const d = g4();
        if (d.hidden < 0 && d.visible < 0) return !1;
        const e = vU(b);
        if (!e) return !1;
        if (!wU(b)) return f4(a, d.visible, c);
        if (cU(a.K, a.pubWin, c) <= d.hidden) return !1;
        let f = SB(332, () => {
            if (!wU(b) && f) {
                yk(b, e, f);
                if (!f4(a, d.visible, c)) {
                    const g = c4(a);
                    TB(1222, g)
                }
                f = null
            }
        });
        return xk(b, e, f)
    }

    function g4() {
        var a = W(rv);
        const b = W(sv);
        return b === 3 && a === 6 ? (a = {
            hidden: 0,
            visible: 3
        }, r.IntersectionObserver || (a.visible = -1), rc() && (a.visible *= 2), a) : {
            hidden: 0,
            visible: r.IntersectionObserver ? rc() ? a : b : -1
        }
    }

    function f4(a, b, c) {
        if (!c || b < 0) return !1;
        var d = a.F;
        if (!ur(d.google_reactive_ad_format) && (fV(d) || d.google_reactive_ads_config) || !aU(c) || cU(a.K, a.pubWin, c) <= b) return !1;
        var e = NH(),
            f = SH(e, 8, {});
        e = SH(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new Promise(h => {
            const k = new r.IntersectionObserver((l, m) => {
                Ma(l, n => {
                    n.intersectionRatio <= 0 || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: `${b*100}%`
            });
            a.J = k;
            k.observe(c)
        });
        e = new Promise(h => {
            c.addEventListener("adsbygoogle-close-to-visible-event", () => {
                h(void 0)
            })
        });
        ja(Promise, "any").call(Promise, [f, e]).then(() => {
            RB(294, () => {
                const h = c4(a);
                TB(1222, h)
            })
        });
        return !0
    }

    function c4(a) {
        RB(326, () => {
            var c = a.pubWin,
                d = a.K,
                e = a.Z,
                f = a.pageState,
                g = a.La;
            if (rm(a.F) === 1) {
                var h = Q(rx);
                if ((h || Q(px)) && c === d) {
                    var k = new dl;
                    d = new ql;
                    var l = k.setCorrelator(Be(c));
                    var m = mR(c);
                    l = zi(l, 5, m);
                    G(l, 2, 1);
                    k = A(d, 1, k);
                    l = new cl;
                    l = ui(l, 10, !0);
                    m = Q(kx);
                    l = ui(l, 8, m);
                    m = Q(lx);
                    l = ui(l, 12, m);
                    m = Q(ox);
                    l = ui(l, 7, m);
                    m = Q(nx);
                    l = ui(l, 13, m);
                    A(k, 2, l);
                    c.google_rum_config = jh(d);
                    e = (bT(f.g()) ? aT(f.g()) : B(e, 9)) && h ? g.Kk : g.Lk;
                    Qd(c.document, e)
                } else Mm(PB)
            }
        });
        a.F.google_ad_channel = h4(a, a.F.google_ad_channel);
        a.F.google_tag_partner =
            i4(a, a.F.google_tag_partner);
        oR(a.K, a.F);
        const b = a.F.google_start_time;
        typeof b === "number" && (cr = b, a.F.google_start_time = null);
        sT(a);
        a.K && WU(a.K, Kd(a.La.kj, new Map(Object.entries(qU()))));
        fV(a.F) && (HQ() && (a.F.google_adtest = a.F.google_adtest || "on"), a.F.google_pgb_reactive = a.F.google_pgb_reactive || 3);
        return j4(a)
    }

    function h4(a, b) {
        return (b ? [b] : []).concat(ZH(a.pubWin).ad_channels || []).join("+")
    }

    function i4(a, b) {
        return (b ? [b] : []).concat(ZH(a.pubWin).tag_partners || []).join("+")
    }

    function k4(a) {
        const b = Rd("IFRAME");
        Ud(a, (c, d) => {
            c != null && b.setAttribute(d, c)
        });
        return b
    }

    function l4(a, b, c) {
        return a.F.google_reactive_ad_format === 9 && am(a.ba, null, "fsi_container") ? (a.ba.appendChild(b), Promise.resolve(b)) : cV(a.La.Vh, 525, d => {
            a.ba.appendChild(b);
            d.createAdSlot(a.K, a.F, b, a.ba.parentElement, Gi(c), a.pubWin);
            return b
        })
    }

    function m4(a, b, c, d) {
        mI();
        P(nI).ic = a.F.google_page_url;
        d = Nk(Lk(Kk(Mk(Jk(new Ok, Hk(new Ik, String(Be(a.pubWin)))))), a.pageState.g().g() || D(a.Z, 2)), d.g());
        Q(ev) && ui(d, 7, !0);
        Q(ex) && ui(d, 8, !0);
        U3(a.pubWin, d);
        const e = a.K;
        if (a.F.google_acr)
            if (a.F.google_wrap_fullscreen_ad) {
                const g = a.F.google_acr;
                K3(a.pubWin, a.ba.parentElement, b, a.F.google_reactive_ad_format, a.F).then(g).catch(() => {
                    g(null)
                })
            } else a.F.google_acr(b);
        xk(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const g = e ? ZH(e).enable_overlap_observer ||
                !1 : !1;
            (a.F.ovlp || g) && e && e === a.pubWin && n4(e, a, a.ba, b)
        });
        d = g => {
            g && a.i.push(() => {
                g.dispose()
            })
        };
        const f = eU(a, b);
        dU(a.pubWin, a.j, b.contentWindow, a.i);
        !e || fV(a.F) && !gV(a.F) || (a.F.no_resize || d(new q_(e, b, a.ba)), d(new FW(a, b)), d(e.IntersectionObserver ? null : new HW(e, b, a.ba)), e.IntersectionObserver && d(x_(e, b, a.F, a.ba, SB(1225, () => {
            f();
            for (const g of a.i) g();
            a.i.length = 0
        }))));
        e && (d(zW(e, b, ZS(a.pageState.g()), a.j)), a.i.push(hW(e, a.F)), P(mW).init(e, a.Z), a.i.push(rW(e, a.ba, b)));
        b && b.setAttribute("data-google-container-id",
            c);
        c = a.F.iaaso;
        if (c != null) {
            d = a.ba;
            const g = d.parentElement;
            (g && Yx.test(g.className) ? g : d).setAttribute("data-auto-ad-size", c)
        }
        b.setAttribute("tabindex", "0");
        b.setAttribute("title", "Advertisement");
        b.setAttribute("aria-label", "Advertisement");
        o4(a);
        Q(dv) && yS(a, b)
    }

    function o4(a) {
        const b = Jl(a.pubWin);
        if (b)
            if (b.container === "AMP-STICKY-AD") {
                const c = d => {
                    d.data === "fill_sticky" && b.renderStart && b.renderStart()
                };
                xk(a.pubWin, "message", SB(616, c));
                a.i.push(() => {
                    yk(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function n4(a, b, c, d) {
        vR(new FR(a), c).then(e => {
            vl(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && Yx.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", String(e.Ah));
            return e
        }).then(e => {
            const f = b.F.armr || "",
                g = e.Aj || "",
                h = b.F.iaaso == null ? "" : Number(b.F.iaaso),
                k = Number(e.Ah),
                l = Ra(e.entries, C => `${C.Ob}:${C.hg}:${C.Ph}`),
                m = Number(e.wk.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                p = m * e.Gc.width * e.Gc.height,
                w = `${e.bi.scrollX},${e.bi.scrollY}`,
                v = sm(e.target),
                t = [e.Gc.left, e.Gc.top, e.Gc.right,
                    e.Gc.bottom
                ].join();
            e = `${e.oi.width}x${e.oi.height}`;
            UB("ovlp", {
                adf: b.F.google_ad_dom_fingerprint,
                armr: f,
                client: b.F.google_ad_client,
                eid: mR(b.F),
                et: g,
                fwrattr: b.F.google_full_width_responsive,
                iaaso: h,
                io: k,
                saldr: b.F.google_loader_used,
                oa: m,
                oe: l.join(","),
                qid: n,
                rafmt: b.F.google_responsive_auto_format,
                roa: p,
                slot: b.F.google_ad_slot,
                sp: w,
                tgt: v,
                tr: t,
                url: b.F.google_page_url,
                vp: e,
                pvc: Be(a)
            }, 1)
        }).catch(e => {
            vl(8, ["Error:", e.message, c]);
            UB("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function p4(a, b) {
        b.allow = b.allow && b.allow.length > 0 ? b.allow + ("; " + a) : a
    }
    async function q4(a) {
        const b = a.F,
            c = a.pubWin,
            d = a.j;
        r4(a);
        if (d.g()) {
            var e = new kR(a.pubWin),
                f = a.j,
                g = a.pubWin.location.hostname;
            const E = gR(e, "__gpi_opt_out", f);
            if (E) {
                var h = Tk(E);
                var k = Ch(h, 2, wg(2147483647));
                var l = yi(k, 3, "/");
                var m = yi(l, 4, g);
                hR(e, "__gpi_opt_out", m, f)
            }
        }
        if (!d.g() && !a.H) return UB("afc_noc_req", {
            client: a.F.google_ad_client,
            isGdprCountry: ($S(a.pageState.g()) ? ZS(a.pageState.g()) : Q(gx) ? !!z(a.Z, Yh, 26) ? .g() : B(a.Z, 6)).toString()
        }, W(qv)), Promise.resolve();
        var n = a.La;
        b: {
            const E = [r.top],
                da = [];
            let qa =
                0,
                Qa;
            for (; Qa = E[qa++];) {
                da.push(Qa);
                try {
                    if (Qa.frames)
                        for (let Aa = 0; Aa < Qa.frames.length && E.length < 1024; ++Aa) E.push(Qa.frames[Aa])
                } catch {}
            }
            var p = da;
            for (let Aa = 0; Aa < p.length; Aa++) try {
                const Oa = p[Aa].frames.google_esf;
                if (Oa) {
                    al = Oa;
                    break b
                }
            } catch (Oa) {}
            al = null
        }
        if (al) var w = null;
        else {
            var v = Rd("IFRAME");
            v.id = "google_esf";
            v.name = "google_esf";
            var t = d.g() ? n.vi : n.ui;
            v.src = Jc(t).toString();
            v.style.display = "none";
            w = v
        }
        const C = w;
        C && document.documentElement.appendChild(C);
        if (Q(Zw) && d.g()) {
            var I = NH();
            var V = QH(I, 39, X3);
            a.l = q(await V)
        }
        var N = a.pubWin;
        lR(20, N, d);
        lR(17, N, d);
        const O = a.F.google_reactive_ads_config;
        if (O) {
            bV(a.K, O);
            iV(O, a, d);
            const E = O.page_level_pubvars;
            ra(E) && Ac(a.F, E)
        }
        Q(Sw) && yT(a.pubWin, a.H);
        q(await q(qW(a.pubWin)));
        q(await a.A ? .nj);
        let J = "";
        if (hV(b)) J = (d.g() ? a.La.vi : a.La.ui).toString() + "#" + (encodeURIComponent("RS-" + b.google_reactive_sra_index + "-") + "&" + om({
            adk: b.google_ad_unit_key,
            client: b.google_ad_client,
            fa: b.google_reactive_ad_format
        })), g0(b, NH()), s4(b);
        else {
            var Ka, lb;
            if (!(lb = b.google_pgb_reactive ===
                    5 && !!b.google_reactive_ads_config)) {
                const E = b.google_reactive_ad_format;
                lb = !(!b.google_reactive_ads_config && fV(b) && E !== 16 && E !== 10 && E !== 11 && E !== 40 && E !== 41 && E !== 42)
            }
            if (!(Ka = lb)) {
                {
                    const E = b.google_reactive_ad_format;
                    if (vc(E)) {
                        var sa = Pd(c);
                        if (sa && SU(sa, b, E, d)) {
                            var Ca = UD(sa);
                            sr(Ca, E) ? Ka = !1 : (Ca.adCount[E] || (Ca.adCount[E] = 0), Ca.adCount[E]++, Ka = !0)
                        } else Ka = !1
                    } else Ka = !1
                }
            }
            if (Ka && s4(b)) {
                const E = a.F;
                var Gb = E,
                    va = a.pubWin;
                const da = {},
                    qa = va.document;
                const Qa = {
                    ki: Ee(va),
                    Lf: !1,
                    th: "",
                    Cf: 1
                };
                a: {
                    const Ib = Gb.google_ad_width ||
                        va.google_ad_width,
                        Rg = Gb.google_ad_height || va.google_ad_height;
                    if (va && va.top === va) var Qb = !1;
                    else {
                        var Dc = va.document,
                            la = Dc.documentElement;
                        if (Ib && Rg) {
                            let Kf = 1,
                                Lf = 1;
                            va.innerHeight ? (Kf = va.innerWidth, Lf = va.innerHeight) : la && la.clientHeight ? (Kf = la.clientWidth, Lf = la.clientHeight) : Dc.body && (Kf = Dc.body.clientWidth, Lf = Dc.body.clientHeight);
                            if (Lf > 2 * Rg || Kf > 2 * Ib) {
                                Qb = !1;
                                break a
                            }
                        }
                        Qb = !0
                    }
                }
                Qa.Lf = Qb;
                var hc = Qa.Lf,
                    Je = KH(Qa.ki).Tf;
                const Aa = va.top == va ? 0 : Md(va.top) ? 1 : 2;
                let Oa = 4;
                hc || Aa !== 1 ? hc || Aa !== 2 ? hc && Aa === 1 ? Oa = 7 : hc &&
                    Aa === 2 && (Oa = 8) : Oa = 6 : Oa = 5;
                Je && (Oa |= 16);
                Qa.th = String(Oa);
                Qa.Cf = MH(va);
                var Hd = Qa;
                const Qe = Hd.ki,
                    If = Hd.Lf;
                let he = !!Gb.google_page_url;
                da.google_iframing = Hd.th;
                Hd.Cf !== 0 && (da.google_iframing_environment = Hd.Cf);
                if (!he && qa.domain === "ad.yieldmanager.com") {
                    let Ib = qa.URL.substring(qa.URL.lastIndexOf("http"));
                    for (; Ib.indexOf("%") > -1;) try {
                        Ib = decodeURIComponent(Ib)
                    } catch (Rg) {
                        break
                    }
                    Gb.google_page_url = Ib;
                    he = !!Ib
                }
                he ? (da.google_page_url = Gb.google_page_url, da.google_page_location = (If ? qa.referrer : qa.URL) || "EMPTY") :
                    (If && Md(va.top) && qa.referrer && va.top.document.referrer === qa.referrer ? da.google_page_url = va.top.document.URL : da.google_page_url = If ? qa.referrer : qa.URL, da.google_page_location = null);
                if (qa.URL === da.google_page_url) try {
                    var Ke = Math.round(Date.parse(qa.lastModified) / 1E3) || null
                } catch {
                    Ke = null
                } else Ke = null;
                da.google_last_modified_time = Ke;
                if (Qe === Qe.top) var xf = Qe.document.referrer;
                else {
                    var yf = Jl();
                    xf = yf && yf.referrer || ""
                }
                da.google_referrer_url = xf;
                LH(da, E);
                if (d.g()) {
                    {
                        let Ib = E.google_page_location || E.google_page_url;
                        "EMPTY" === Ib && (Ib = E.google_page_url);
                        if (Ib) {
                            var Hb = Ib.toString();
                            Hb.indexOf("http://") == 0 ? Hb = Hb.substring(7, Hb.length) : Hb.indexOf("https://") == 0 && (Hb = Hb.substring(8, Hb.length));
                            var Le = Hb.indexOf("/");
                            Le === -1 && (Le = Hb.length);
                            var ld = Hb.substring(0, Le).split("."),
                                ce = !1;
                            ld.length >= 3 && (ce = ld[ld.length - 3] in tT);
                            ld.length >= 2 && (ce = ce || ld[ld.length - 2] in tT);
                            var zf = ce
                        } else zf = !1
                    }
                    var Af = zf ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net"
                } else Af = "pagead2.googlesyndication.com";
                const nd = Af,
                    Jf = y0(a,
                        d),
                    ie = a.F,
                    Re = ie.google_ad_channel;
                let od = "/pagead/ads?";
                ie.google_ad_client === "ca-pub-6219811747049371" && z0.test(Re) && (od = "/pagead/lopri?");
                const Pg = `https://${nd}${od}`,
                    Qg = (bT(a.pageState.g()) ? aT(a.pageState.g()) : B(a.Z, 9)) && E.google_debug_params ? E.google_debug_params : "",
                    Xp = pm(Jf, Pg + Qg);
                J = E.google_ad_url = Xp
            }
        }
        vl(2, [b, J]);
        if (!J) return Promise.resolve();
        if (!b.google_async_iframe_id) {
            var Id = c;
            Id = Ol(Jl(Id)) || Id;
            Id.google_unique_id = (Id.google_unique_id || 0) + 1
        }
        const Me = rm(b),
            Bf = a.pubWin === a.K ? "a!" + Me.toString(36) :
            `${Me.toString(36)}.${Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)}`,
            Mg = cU(a.K, a.pubWin, a.ba, !0) > 0,
            Cf = {
                ifi: Me,
                uci: Bf
            };
        if (Mg) {
            const E = NH();
            Cf.btvi = SH(E, 21, 1);
            UH(E, 21)
        }
        J = pm(Cf, J);
        if (ne() && !hV(b)) {
            var Rc = J;
            var de = "fsb=" + encodeURIComponent("1");
            if (de) {
                let E = Rc.indexOf("#");
                E < 0 && (E = Rc.length);
                let da = Rc.indexOf("?"),
                    qa;
                da < 0 || da > E ? (da = E, qa = "") : qa = Rc.substring(da + 1, E);
                var Sc = [Rc.slice(0, da), qa, Rc.slice(E)];
                var Df = Sc[1];
                Sc[1] = de ? Df ?
                    Df + "&" + de : de : Df;
                J = Sc[0] + (Sc[1] ? "?" + Sc[1] : "") + Sc[2]
            } else J = Rc
        }
        var ic = J;
        ic.length > 61440 && (ic = ic.substring(0, 61432), ic = ic.replace(/%\w?$/, ""), ic = ic.replace(/&[^=]*=?$/, ""), ic += "&trunc=1");
        var Ef = ic;
        if (Ef !== J) {
            let E = J.lastIndexOf("&", 61432);
            E === -1 && (E = J.lastIndexOf("?", 61432));
            UB("trn", {
                ol: J.length,
                tr: E === -1 ? "" : J.substring(E + 1),
                url: J
            }, .01)
        }
        const Ec = a.F,
            Ng = Ec.google_async_iframe_id,
            ee = Ec.google_ad_width,
            fe = Ec.google_ad_height,
            jc = hV(Ec),
            xa = {
                id: Ng,
                name: Ng
            };
        var ge = a.F,
            Og = a.l,
            Ne, Oe;
        if (Oe = YQ("browsing-topics",
                a.pubWin.document)) Oe = !ge.google_restrict_data_processing && ge.google_tag_for_under_age_of_consent !== 1 && ge.google_tag_for_child_directed_treatment !== 1 && !!d.g() && !XH() && !B(d, 9) && !B(d, 13) && !B(d, 12) && (typeof ge.google_privacy_treatments !== "string" || !ge.google_privacy_treatments.split(",").includes("disablePersonalization")) && !B(d, 14) && !B(d, 16);
        if (Ne = Oe && !Q(fx)) {
            var Ff = Og ? .label;
            Ne = !(Q(bx) && Ff && Ff.match(ux($w)))
        }
        Ne && (xa.browsingTopics = "true");
        jc ? Q(hv) ? xa.style = `width:${ee}px !IMPORTANT;height:${fe}px !IMPORTANT;` :
            xa.style = [`width:${ee}px !IMPORTANT`, `height:${fe}px !IMPORTANT`].join(";") : xa.style = "left:0;position:absolute;top:0;border:0;" + `width:${ee}px;` + `height:${fe}px;`;
        Q(hv) && (xa.style += "min-height:auto;max-height:none;min-width:auto;max-width:none;");
        ne() && (xa.sandbox = le().join(" "));
        Ec.google_video_play_muted === !1 && p4("autoplay", xa);
        ee != null && (xa.width = String(ee));
        fe != null && (xa.height = String(fe));
        xa.frameborder = "0";
        xa.marginwidth = "0";
        xa.marginheight = "0";
        xa.vspace = "0";
        xa.hspace = "0";
        xa.allowtransparency =
            "true";
        xa.scrolling = "no";
        Ec.dash && (xa.srcdoc = Ec.dash);
        XQ("attribution-reporting", a.pubWin.document) && p4("attribution-reporting", xa);
        XQ("run-ad-auction", a.pubWin.document) && p4("run-ad-auction", xa);
        if (Q(Tw)) {
            const E = a.pubWin;
            E.credentialless !== void 0 && (Q(Uw) || E.crossOriginIsolated) && (xa.credentialless = "true")
        }
        if (hV(a.F)) {
            xa.src = Ef;
            const E = k4(xa);
            var kc = l4(a, E, d)
        } else {
            const E = {};
            E.dtd = pW((new Date).getTime(), cr);
            var md = pm(E, Ef);
            xa.src = md;
            var Rb = a.pubWin;
            var Sb = Rb == Rb.top;
            const da = k4(xa);
            Sb && a.i.push(Pl(a.pubWin,
                da));
            a.ba.style.visibility = "visible";
            var Gf = a.ba;
            let qa;
            for (; qa = Gf.firstChild;) Gf.removeChild(qa);
            Gf.appendChild(da);
            kc = Promise.resolve(da)
        }
        var Pe = kc;
        a.F.rpe && e_(new o_(a.pubWin, a.ba, void 0, {
            height: a.F.google_ad_height,
            Bg: "force",
            Bd: !0,
            pg: !0,
            Ne: a.F.google_ad_client
        }, null, null, !0));
        const Hf = q(await Pe);
        try {
            m4(a, Hf, Bf, d)
        } catch (E) {
            VB(223, E)
        }
    }

    function t4(a) {
        const b = W(nv);
        if (b <= 0) return null;
        const c = Fm(),
            d = S3(a.pubWin);
        if (!d) return null;
        a.D = "0";
        return Promise.race([d, De(b, "0")]).then(e => {
            UB("adsense_paw", {
                time: Fm() - c
            });
            e ? .length > 1E4 ? VB(809, Error(`ML:${e.length}`)) : a.D = e
        }).catch(e => {
            VB(809, e)
        })
    }

    function r4(a) {
        var b = a.pubWin;
        const c = a.ba;
        var d = a.F;
        const e = a.Da,
            f = W(ix);
        d = !ur(d.google_reactive_ad_format) && (fV(d) || d.google_reactive_ads_config);
        if (!(a.A ? .Jf || f <= 0 || Pd(b) || !r.IntersectionObserver || d)) {
            a.A = {};
            var g = new Pq(e),
                h = Fm();
            b = new Promise(k => {
                let l = 0;
                const m = a.A,
                    n = new r.IntersectionObserver(SB(1236, p => {
                        if (p = p.find(w => w.target === c)) g.ne.Je.zd.g.g.nd({
                            qd: Fm() - h,
                            il: ++l
                        }), m.ak = p.isIntersecting && p.intersectionRatio >= .8, k()
                    }), {
                        threshold: [.8]
                    });
                n.observe(c);
                m.Jf = n
            });
            a.A.nj = Promise.race([b, De(f,
                null)]).then(k => {
                g.ne.Je.zd.g.i.nd({
                    qd: Fm() - h,
                    status: k === null ? "TIMEOUT" : "OK"
                })
            })
        }
    }

    function u4(a) {
        const b = Fm();
        return Promise.race([RB(832, () => W3(a)), De(200)]).then(c => {
            UB("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: Fm() - b,
                tms: 200
            });
            return c ? .Uc
        })
    }
    async function v4(a) {
        const b = t4(a),
            c = RB(868, () => u4(a.pubWin));
        q(await q(UT(a)));
        q(await b);
        a.Uc = q(await c) || "";
        q(await q(q4(a)))
    }

    function j4(a) {
        Ee(a.pubWin) !== a.pubWin && (a.g |= 4);
        uU(a.pubWin.document) === 3 && (a.g |= 32);
        var b;
        if (b = a.K) {
            b = a.K;
            const c = mr(b);
            b = !(rr(b).scrollWidth <= c)
        }
        b && (a.g |= 1024);
        a.pubWin.Prototype ? .Version && (a.g |= 16384);
        a.F.google_loader_features_used && (a.g |= a.F.google_loader_features_used);
        return v4(a)
    }

    function s4(a) {
        const b = NH(),
            c = a.google_ad_section;
        fV(a) && UH(b, 15);
        if (tm(a)) {
            if (UH(b, 5) > 100) return !1
        } else if (UH(b, 6) - SH(b, 15, 0) > 100 && c === "") return !1;
        return !0
    }

    function a4(a) {
        WH() && r.setTimeout(SB(1244, () => void kS(a.K || a.pubWin, {
            Ha: $S(a.pageState.g()) ? ZS(a.pageState.g()) : Q(gx) ? !!z(a.Z, Yh, 26) ? .g() : B(a.Z, 6)
        })), 1E3)
    };
    (function(a, b, c) {
        RB(843, () => {
            r.google_sa_impl || pT(a, b, c)
        })
    })(jT, Qp(), function(a, b, c, d, e) {
        c = c > 2012 ? `_fy${c}` : "";
        e || (e = D(b, 3));
        d || (d = D(b, 2));
        return {
            Lk: Jd `https://pagead2.googlesyndication.com/pagead/js/${d}/${e}/rum${c}.js`,
            Kk: Jd `https://pagead2.googlesyndication.com/pagead/js/${d}/${e}/rum_debug${c}.js`,
            Vh: Jd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
            kj: Jd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
            ap: Jd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
            vi: Jd `https://googleads.g.doubleclick.net/pagead/html/${d}/${e}/zrt_lookup${c}.html`,
            ui: Jd `https://pagead2.googlesyndication.com/pagead/html/${d}/${e}/zrt_lookup${c}.html`
        }
    });
}).call(this, "");