"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e };
! function(e) {
    if ("object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.AV = e() } }(function() {
    var e;
    return function t(e, n, r) {
        function i(o, a) {
            if (!n[o]) {
                if (!e[o]) {
                    var u = "function" == typeof require && require;
                    if (!a && u) return u(o, !0);
                    if (s) return s(o, !0);
                    var c = new Error("Cannot find module '" + o + "'");
                    throw c.code = "MODULE_NOT_FOUND", c }
                var l = n[o] = { exports: {} };
                e[o][0].call(l.exports, function(t) {
                    var n = e[o][1][t];
                    return i(n ? n : t) }, l, l.exports, t, e, n, r) }
            return n[o].exports }
        for (var s = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
        return i }({
        1: [function(e, t, n) {}, {}],
        2: [function(e, t, n) {
            function r() { l = !1, a.length ? c = a.concat(c) : h = -1, c.length && i() }

            function i() {
                if (!l) {
                    var e = setTimeout(r);
                    l = !0;
                    for (var t = c.length; t;) {
                        for (a = c, c = []; ++h < t;) a && a[h].run();
                        h = -1, t = c.length }
                    a = null, l = !1, clearTimeout(e) } }

            function s(e, t) { this.fun = e, this.array = t }

            function o() {}
            var a, u = t.exports = {},
                c = [],
                l = !1,
                h = -1;
            u.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                c.push(new s(e, t)), 1 !== c.length || l || setTimeout(i, 0) }, s.prototype.run = function() { this.fun.apply(null, this.array) }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = o, u.addListener = o, u.once = o, u.off = o, u.removeListener = o, u.removeAllListeners = o, u.emit = o, u.binding = function(e) {
                throw new Error("process.binding is not supported") }, u.cwd = function() {
                return "/" }, u.chdir = function(e) {
                throw new Error("process.chdir is not supported") }, u.umask = function() {
                return 0 } }, {}],
        3: [function(e, t, n) {
            function r(e) {
                return e ? i(e) : void 0 }

            function i(e) {
                for (var t in r.prototype) e[t] = r.prototype[t];
                return e } "undefined" != typeof t && (t.exports = r), r.prototype.on = r.prototype.addEventListener = function(e, t) {
                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this }, r.prototype.once = function(e, t) {
                function n() { this.off(e, n), t.apply(this, arguments) }
                return n.fn = t, this.on(e, n), this }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var n = this._callbacks["$" + e];
                if (!n) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + e], this;
                for (var r, i = 0; i < n.length; i++)
                    if (r = n[i], r === t || r.fn === t) { n.splice(i, 1);
                        break }
                return this }, r.prototype.emit = function(e) { this._callbacks = this._callbacks || {};
                var t = [].slice.call(arguments, 1),
                    n = this._callbacks["$" + e];
                if (n) { n = n.slice(0);
                    for (var r = 0, i = n.length; i > r; ++r) n[r].apply(this, t) }
                return this }, r.prototype.listeners = function(e) {
                return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [] }, r.prototype.hasListeners = function(e) {
                return !!this.listeners(e).length } }, {}],
        4: [function(e, t, n) {
            function r() {
                return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 }

            function i() {
                var e = arguments,
                    t = this.useColors;
                if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + n.humanize(this.diff), !t) return e;
                var r = "color: " + this.color;
                e = [e[0], r, "color: inherit"].concat(Array.prototype.slice.call(e, 1));
                var i = 0,
                    s = 0;
                return e[0].replace(/%[a-z%]/g, function(e) { "%%" !== e && (i++, "%c" === e && (s = i)) }), e.splice(s, 0, r), e }

            function s() {
                return "object" === ("undefined" == typeof console ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments) }

            function o(e) {
                try { null == e ? n.storage.removeItem("debug") : n.storage.debug = e } catch (t) {} }

            function a() {
                var e;
                try { e = n.storage.debug } catch (t) {}
                return e }

            function u() {
                try {
                    return window.localStorage } catch (e) {} }
            n = t.exports = e("./debug"), n.log = s, n.formatArgs = i, n.save = o, n.load = a, n.useColors = r, n.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u(), n.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], n.formatters.j = function(e) {
                return JSON.stringify(e) }, n.enable(a()) }, { "./debug": 5 }],
        5: [function(e, t, n) {
            function r() {
                return n.colors[l++ % n.colors.length] }

            function i(e) {
                function t() {}

                function i() {
                    var e = i,
                        t = +new Date,
                        s = t - (c || t);
                    e.diff = s, e.prev = c, e.curr = t, c = t, null == e.useColors && (e.useColors = n.useColors()), null == e.color && e.useColors && (e.color = r());
                    var o = Array.prototype.slice.call(arguments);
                    o[0] = n.coerce(o[0]), "string" != typeof o[0] && (o = ["%o"].concat(o));
                    var a = 0;
                    o[0] = o[0].replace(/%([a-z%])/g, function(t, r) {
                        if ("%%" === t) return t;
                        a++;
                        var i = n.formatters[r];
                        if ("function" == typeof i) {
                            var s = o[a];
                            t = i.call(e, s), o.splice(a, 1), a-- }
                        return t }), "function" == typeof n.formatArgs && (o = n.formatArgs.apply(e, o));
                    var u = i.log || n.log || console.log.bind(console);
                    u.apply(e, o) }
                t.enabled = !1, i.enabled = !0;
                var s = n.enabled(e) ? i : t;
                return s.namespace = e, s }

            function s(e) { n.save(e);
                for (var t = (e || "").split(/[\s,]+/), r = t.length, i = 0; r > i; i++) t[i] && (e = t[i].replace(/\*/g, ".*?"), "-" === e[0] ? n.skips.push(new RegExp("^" + e.substr(1) + "$")) : n.names.push(new RegExp("^" + e + "$"))) }

            function o() { n.enable("") }

            function a(e) {
                var t, r;
                for (t = 0, r = n.skips.length; r > t; t++)
                    if (n.skips[t].test(e)) return !1;
                for (t = 0, r = n.names.length; r > t; t++)
                    if (n.names[t].test(e)) return !0;
                return !1 }

            function u(e) {
                return e instanceof Error ? e.stack || e.message : e }
            n = t.exports = i, n.coerce = u, n.disable = o, n.enable = s, n.enabled = a, n.humanize = e("ms"), n.names = [], n.skips = [], n.formatters = {};
            var c, l = 0 }, { ms: 6 }],
        6: [function(e, t, n) {
            function r(e) {
                if (e = "" + e, !(e.length > 1e4)) {
                    var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                    if (t) {
                        var n = parseFloat(t[1]),
                            r = (t[2] || "ms").toLowerCase();
                        switch (r) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return n * h;
                            case "days":
                            case "day":
                            case "d":
                                return n * l;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return n * c;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return n * u;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return n * a;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return n } } } }

            function i(e) {
                return e >= l ? Math.round(e / l) + "d" : e >= c ? Math.round(e / c) + "h" : e >= u ? Math.round(e / u) + "m" : e >= a ? Math.round(e / a) + "s" : e + "ms" }

            function s(e) {
                return o(e, l, "day") || o(e, c, "hour") || o(e, u, "minute") || o(e, a, "second") || e + " ms" }

            function o(e, t, n) {
                return t > e ? void 0 : 1.5 * t > e ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s" }
            var a = 1e3,
                u = 60 * a,
                c = 60 * u,
                l = 24 * c,
                h = 365.25 * l;
            t.exports = function(e, t) {
                return t = t || {}, "string" == typeof e ? r(e) : t["long"] ? s(e) : i(e) } }, {}],
        7: [function(e, t, n) {! function(e) {
                var r = {},
                    i = {};
                r.length = 0, r.getItem = function(e) {
                    return i[e] || null }, r.setItem = function(e, t) { "undefined" == typeof t ? r.removeItem(e) : (i.hasOwnProperty(e) || r.length++, i[e] = "" + t) }, r.removeItem = function(e) { i.hasOwnProperty(e) && (delete i[e], r.length--) }, r.key = function(e) {
                    return Object.keys(i)[e] || null }, r.clear = function() { i = {}, r.length = 0 }, "object" === ("undefined" == typeof n ? "undefined" : _typeof(n)) ? t.exports = r : e.localStorageMemory = r }(this) }, {}],
        8: [function(e, t, n) {! function() {
                var n = e("crypt"),
                    r = e("charenc").utf8,
                    i = e("is-buffer"),
                    s = e("charenc").bin,
                    o = function a(e, t) { e.constructor == String ? e = t && "binary" === t.encoding ? s.stringToBytes(e) : r.stringToBytes(e) : i(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
                        for (var o = n.bytesToWords(e), u = 8 * e.length, c = 1732584193, l = -271733879, h = -1732584194, f = 271733878, d = 0; d < o.length; d++) o[d] = 16711935 & (o[d] << 8 | o[d] >>> 24) | 4278255360 & (o[d] << 24 | o[d] >>> 8);
                        o[u >>> 5] |= 128 << u % 32, o[(u + 64 >>> 9 << 4) + 14] = u;
                        for (var p = a._ff, _ = a._gg, m = a._hh, v = a._ii, d = 0; d < o.length; d += 16) {
                            var g = c,
                                b = l,
                                y = h,
                                w = f;
                            c = p(c, l, h, f, o[d + 0], 7, -680876936), f = p(f, c, l, h, o[d + 1], 12, -389564586), h = p(h, f, c, l, o[d + 2], 17, 606105819), l = p(l, h, f, c, o[d + 3], 22, -1044525330), c = p(c, l, h, f, o[d + 4], 7, -176418897), f = p(f, c, l, h, o[d + 5], 12, 1200080426), h = p(h, f, c, l, o[d + 6], 17, -1473231341), l = p(l, h, f, c, o[d + 7], 22, -45705983), c = p(c, l, h, f, o[d + 8], 7, 1770035416), f = p(f, c, l, h, o[d + 9], 12, -1958414417), h = p(h, f, c, l, o[d + 10], 17, -42063), l = p(l, h, f, c, o[d + 11], 22, -1990404162), c = p(c, l, h, f, o[d + 12], 7, 1804603682), f = p(f, c, l, h, o[d + 13], 12, -40341101), h = p(h, f, c, l, o[d + 14], 17, -1502002290), l = p(l, h, f, c, o[d + 15], 22, 1236535329), c = _(c, l, h, f, o[d + 1], 5, -165796510), f = _(f, c, l, h, o[d + 6], 9, -1069501632), h = _(h, f, c, l, o[d + 11], 14, 643717713), l = _(l, h, f, c, o[d + 0], 20, -373897302), c = _(c, l, h, f, o[d + 5], 5, -701558691), f = _(f, c, l, h, o[d + 10], 9, 38016083), h = _(h, f, c, l, o[d + 15], 14, -660478335), l = _(l, h, f, c, o[d + 4], 20, -405537848), c = _(c, l, h, f, o[d + 9], 5, 568446438), f = _(f, c, l, h, o[d + 14], 9, -1019803690), h = _(h, f, c, l, o[d + 3], 14, -187363961), l = _(l, h, f, c, o[d + 8], 20, 1163531501), c = _(c, l, h, f, o[d + 13], 5, -1444681467), f = _(f, c, l, h, o[d + 2], 9, -51403784), h = _(h, f, c, l, o[d + 7], 14, 1735328473), l = _(l, h, f, c, o[d + 12], 20, -1926607734), c = m(c, l, h, f, o[d + 5], 4, -378558), f = m(f, c, l, h, o[d + 8], 11, -2022574463), h = m(h, f, c, l, o[d + 11], 16, 1839030562), l = m(l, h, f, c, o[d + 14], 23, -35309556), c = m(c, l, h, f, o[d + 1], 4, -1530992060), f = m(f, c, l, h, o[d + 4], 11, 1272893353), h = m(h, f, c, l, o[d + 7], 16, -155497632), l = m(l, h, f, c, o[d + 10], 23, -1094730640), c = m(c, l, h, f, o[d + 13], 4, 681279174), f = m(f, c, l, h, o[d + 0], 11, -358537222), h = m(h, f, c, l, o[d + 3], 16, -722521979), l = m(l, h, f, c, o[d + 6], 23, 76029189), c = m(c, l, h, f, o[d + 9], 4, -640364487), f = m(f, c, l, h, o[d + 12], 11, -421815835), h = m(h, f, c, l, o[d + 15], 16, 530742520), l = m(l, h, f, c, o[d + 2], 23, -995338651), c = v(c, l, h, f, o[d + 0], 6, -198630844), f = v(f, c, l, h, o[d + 7], 10, 1126891415), h = v(h, f, c, l, o[d + 14], 15, -1416354905), l = v(l, h, f, c, o[d + 5], 21, -57434055), c = v(c, l, h, f, o[d + 12], 6, 1700485571), f = v(f, c, l, h, o[d + 3], 10, -1894986606), h = v(h, f, c, l, o[d + 10], 15, -1051523), l = v(l, h, f, c, o[d + 1], 21, -2054922799), c = v(c, l, h, f, o[d + 8], 6, 1873313359), f = v(f, c, l, h, o[d + 15], 10, -30611744), h = v(h, f, c, l, o[d + 6], 15, -1560198380), l = v(l, h, f, c, o[d + 13], 21, 1309151649), c = v(c, l, h, f, o[d + 4], 6, -145523070), f = v(f, c, l, h, o[d + 11], 10, -1120210379), h = v(h, f, c, l, o[d + 2], 15, 718787259), l = v(l, h, f, c, o[d + 9], 21, -343485551), c = c + g >>> 0, l = l + b >>> 0, h = h + y >>> 0, f = f + w >>> 0 }
                        return n.endian([c, l, h, f]) };
                o._ff = function(e, t, n, r, i, s, o) {
                    var a = e + (t & n | ~t & r) + (i >>> 0) + o;
                    return (a << s | a >>> 32 - s) + t }, o._gg = function(e, t, n, r, i, s, o) {
                    var a = e + (t & r | n & ~r) + (i >>> 0) + o;
                    return (a << s | a >>> 32 - s) + t }, o._hh = function(e, t, n, r, i, s, o) {
                    var a = e + (t ^ n ^ r) + (i >>> 0) + o;
                    return (a << s | a >>> 32 - s) + t }, o._ii = function(e, t, n, r, i, s, o) {
                    var a = e + (n ^ (t | ~r)) + (i >>> 0) + o;
                    return (a << s | a >>> 32 - s) + t }, o._blocksize = 16, o._digestsize = 16, t.exports = function(e, t) {
                    if ("undefined" != typeof e) {
                        var r = n.wordsToBytes(o(e, t));
                        return t && t.asBytes ? r : t && t.asString ? s.bytesToString(r) : n.bytesToHex(r) } } }() }, { charenc: 9, crypt: 10, "is-buffer": 11 }],
        9: [function(e, t, n) {
            var r = { utf8: { stringToBytes: function(e) {
                        return r.bin.stringToBytes(unescape(encodeURIComponent(e))) }, bytesToString: function(e) {
                        return decodeURIComponent(escape(r.bin.bytesToString(e))) } }, bin: { stringToBytes: function(e) {
                        for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                        return t }, bytesToString: function(e) {
                        for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                        return t.join("") } } };
            t.exports = r }, {}],
        10: [function(e, t, n) {! function() {
                var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    n = { rotl: function(e, t) {
                            return e << t | e >>> 32 - t }, rotr: function(e, t) {
                            return e << 32 - t | e >>> t }, endian: function(e) {
                            if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                            for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                            return e }, randomBytes: function(e) {
                            for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                            return t }, bytesToWords: function(e) {
                            for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
                            return t }, wordsToBytes: function(e) {
                            for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                            return t }, bytesToHex: function(e) {
                            for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                            return t.join("") }, hexToBytes: function(e) {
                            for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                            return t }, bytesToBase64: function(t) {
                            for (var n = [], r = 0; r < t.length; r += 3)
                                for (var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2], s = 0; 4 > s; s++) 8 * r + 6 * s <= 8 * t.length ? n.push(e.charAt(i >>> 6 * (3 - s) & 63)) : n.push("=");
                            return n.join("") }, base64ToBytes: function(t) { t = t.replace(/[^A-Z0-9+\/]/gi, "");
                            for (var n = [], r = 0, i = 0; r < t.length; i = ++r % 4) 0 != i && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | e.indexOf(t.charAt(r)) >>> 6 - 2 * i);
                            return n } };
                t.exports = n }() }, {}],
        11: [function(e, t, n) { t.exports = function(e) {
                return !(null == e || !e.constructor || "function" != typeof e.constructor.isBuffer || !e.constructor.isBuffer(e)) } }, {}],
        12: [function(e, t, n) { t.exports = function(e, t, n) {
                for (var r = 0, i = e.length, s = 3 == arguments.length ? n : e[r++]; i > r;) s = t.call(null, s, e[r], ++r, e);
                return s } }, {}],
        13: [function(e, t, n) {
            function r() {}

            function i(e) {
                if (!g(e)) return e;
                var t = [];
                for (var n in e) null != e[n] && s(t, n, e[n]);
                return t.join("&") }

            function s(e, t, n) {
                if (Array.isArray(n)) return n.forEach(function(n) { s(e, t, n) });
                if (g(n))
                    for (var r in n) s(e, t + "[" + r + "]", n[r]);
                else e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n)) }

            function o(e) {
                for (var t, n, r = {}, i = e.split("&"), s = 0, o = i.length; o > s; ++s) t = i[s], n = t.indexOf("="), -1 == n ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
                return r }

            function a(e) {
                var t, n, r, i, s = e.split(/\r?\n/),
                    o = {};
                s.pop();
                for (var a = 0, u = s.length; u > a; ++a) n = s[a], t = n.indexOf(":"), r = n.slice(0, t).toLowerCase(), i = y(n.slice(t + 1)), o[r] = i;
                return o }

            function u(e) {
                return /[\/+]json\b/.test(e) }

            function c(e) {
                return e.split(/ *; */).shift() }

            function l(e) {
                return m(e.split(/ *; */), function(e, t) {
                    var n = t.split(/ *= */),
                        r = n.shift(),
                        i = n.shift();
                    return r && i && (e[r] = i), e }, {}) }

            function h(e, t) { t = t || {}, this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || "undefined" == typeof this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText, this._setStatusProperties(this.xhr.status), this.header = this.headers = a(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null }

            function f(e, t) {
                var n = this;
                this._query = this._query || [], this.method = e, this.url = t, this.header = {}, this._header = {}, this.on("end", function() {
                    var e = null,
                        t = null;
                    try { t = new h(n) } catch (r) {
                        return e = new Error("Parser is unable to parse the response"), e.parse = !0, e.original = r, e.rawResponse = n.xhr && n.xhr.responseText ? n.xhr.responseText : null, e.statusCode = n.xhr && n.xhr.status ? n.xhr.status : null, n.callback(e) }
                    if (n.emit("response", t), e) return n.callback(e, t);
                    if (t.status >= 200 && t.status < 300) return n.callback(e, t);
                    var i = new Error(t.statusText || "Unsuccessful HTTP response");
                    i.original = e, i.response = t, i.status = t.status, n.callback(i, t) }) }

            function d(e, t) {
                var n = b("DELETE", e);
                return t && n.end(t), n }
            var p, _ = e("emitter"),
                m = e("reduce"),
                v = e("./request-base"),
                g = e("./is-object");
            p = "undefined" != typeof window ? window : "undefined" != typeof self ? self : this;
            var b = t.exports = e("./request").bind(null, f);
            b.getXHR = function() {
                if (!(!p.XMLHttpRequest || p.location && "file:" == p.location.protocol && p.ActiveXObject)) return new XMLHttpRequest;
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP") } catch (e) {}
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP.6.0") } catch (e) {}
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP.3.0") } catch (e) {}
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP") } catch (e) {}
                return !1 };
            var y = "".trim ? function(e) {
                return e.trim() } : function(e) {
                return e.replace(/(^\s*|\s*$)/g, "") };
            b.serializeObject = i, b.parseString = o, b.types = { html: "text/html", json: "application/json", xml: "application/xml", urlencoded: "application/x-www-form-urlencoded", form: "application/x-www-form-urlencoded", "form-data": "application/x-www-form-urlencoded" }, b.serialize = { "application/x-www-form-urlencoded": i, "application/json": JSON.stringify }, b.parse = { "application/x-www-form-urlencoded": o, "application/json": JSON.parse }, h.prototype.get = function(e) {
                return this.header[e.toLowerCase()] }, h.prototype._setHeaderProperties = function(e) {
                var t = this.header["content-type"] || "";
                this.type = c(t);
                var n = l(t);
                for (var r in n) this[r] = n[r] }, h.prototype._parseBody = function(e) {
                var t = b.parse[this.type];
                return !t && u(this.type) && (t = b.parse["application/json"]), t && e && (e.length || e instanceof Object) ? t(e) : null }, h.prototype._setStatusProperties = function(e) { 1223 === e && (e = 204);
                var t = e / 100 | 0;
                this.status = this.statusCode = e, this.statusType = t, this.info = 1 == t, this.ok = 2 == t, this.clientError = 4 == t, this.serverError = 5 == t, this.error = 4 == t || 5 == t ? this.toError() : !1, this.accepted = 202 == e, this.noContent = 204 == e, this.badRequest = 400 == e, this.unauthorized = 401 == e, this.notAcceptable = 406 == e, this.notFound = 404 == e, this.forbidden = 403 == e }, h.prototype.toError = function() {
                var e = this.req,
                    t = e.method,
                    n = e.url,
                    r = "cannot " + t + " " + n + " (" + this.status + ")",
                    i = new Error(r);
                return i.status = this.status, i.method = t, i.url = n, i }, b.Response = h, _(f.prototype);
            for (var w in v) f.prototype[w] = v[w];
            f.prototype.type = function(e) {
                return this.set("Content-Type", b.types[e] || e), this }, f.prototype.responseType = function(e) {
                return this._responseType = e, this }, f.prototype.accept = function(e) {
                return this.set("Accept", b.types[e] || e), this }, f.prototype.auth = function(e, t, n) {
                switch (n || (n = { type: "basic" }), n.type) {
                    case "basic":
                        var r = btoa(e + ":" + t);
                        this.set("Authorization", "Basic " + r);
                        break;
                    case "auto":
                        this.username = e, this.password = t }
                return this }, f.prototype.query = function(e) {
                return "string" != typeof e && (e = i(e)), e && this._query.push(e), this }, f.prototype.attach = function(e, t, n) {
                return this._getFormData().append(e, t, n || t.name), this }, f.prototype._getFormData = function() {
                return this._formData || (this._formData = new p.FormData), this._formData }, f.prototype.callback = function(e, t) {
                var n = this._callback;
                this.clearTimeout(), n(e, t) }, f.prototype.crossDomainError = function() {
                var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
                e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e) }, f.prototype._timeoutError = function() {
                var e = this._timeout,
                    t = new Error("timeout of " + e + "ms exceeded");
                t.timeout = e, this.callback(t) }, f.prototype._appendQueryString = function() {
                var e = this._query.join("&");
                e && (this.url += ~this.url.indexOf("?") ? "&" + e : "?" + e) }, f.prototype.end = function(e) {
                var t = this,
                    n = this.xhr = b.getXHR(),
                    i = this._timeout,
                    s = this._formData || this._data;
                this._callback = e || r, n.onreadystatechange = function() {
                    if (4 == n.readyState) {
                        var e;
                        try { e = n.status } catch (r) { e = 0 }
                        if (0 == e) {
                            if (t.timedout) return t._timeoutError();
                            if (t._aborted) return;
                            return t.crossDomainError() }
                        t.emit("end") } };
                var o = function(e) { e.total > 0 && (e.percent = e.loaded / e.total * 100), e.direction = "download", t.emit("progress", e) };
                this.hasListeners("progress") && (n.onprogress = o);
                try { n.upload && this.hasListeners("progress") && (n.upload.onprogress = o) } catch (a) {}
                if (i && !this._timer && (this._timer = setTimeout(function() { t.timedout = !0, t.abort() }, i)), this._appendQueryString(), this.username && this.password ? n.open(this.method, this.url, !0, this.username, this.password) : n.open(this.method, this.url, !0), this._withCredentials && (n.withCredentials = !0), "GET" != this.method && "HEAD" != this.method && "string" != typeof s && !this._isHost(s)) {
                    var c = this._header["content-type"],
                        l = this._serializer || b.serialize[c ? c.split(";")[0] : ""];!l && u(c) && (l = b.serialize["application/json"]), l && (s = l(s)) }
                for (var h in this.header) null != this.header[h] && n.setRequestHeader(h, this.header[h]);
                return this._responseType && (n.responseType = this._responseType), this.emit("request", this), n.send("undefined" != typeof s ? s : null), this }, b.Request = f, b.get = function(e, t, n) {
                var r = b("GET", e);
                return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r }, b.head = function(e, t, n) {
                var r = b("HEAD", e);
                return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r }, b.options = function(e, t, n) {
                var r = b("OPTIONS", e);
                return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r }, b.del = d, b["delete"] = d, b.patch = function(e, t, n) {
                var r = b("PATCH", e);
                return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r }, b.post = function(e, t, n) {
                var r = b("POST", e);
                return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r }, b.put = function(e, t, n) {
                var r = b("PUT", e);
                return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r } }, { "./is-object": 14, "./request": 16, "./request-base": 15, emitter: 3, reduce: 12 }],
        14: [function(e, t, n) {
            function r(e) {
                return null !== e && "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) }
            t.exports = r }, {}],
        15: [function(e, t, n) {
            var r = e("./is-object");
            n.clearTimeout = function() {
                return this._timeout = 0, clearTimeout(this._timer), this }, n.parse = function(e) {
                return this._parser = e, this }, n.serialize = function(e) {
                return this._serializer = e, this }, n.timeout = function(e) {
                return this._timeout = e, this }, n.then = function(e, t) {
                if (!this._fullfilledPromise) {
                    var n = this;
                    this._fullfilledPromise = new Promise(function(e, t) { n.end(function(n, r) { n ? t(n) : e(r) }) }) }
                return this._fullfilledPromise.then(e, t) }, n.use = function(e) {
                return e(this), this }, n.get = function(e) {
                return this._header[e.toLowerCase()] }, n.getHeader = n.get, n.set = function(e, t) {
                if (r(e)) {
                    for (var n in e) this.set(n, e[n]);
                    return this }
                return this._header[e.toLowerCase()] = t, this.header[e] = t, this }, n.unset = function(e) {
                return delete this._header[e.toLowerCase()], delete this.header[e], this }, n.field = function(e, t) {
                return this._getFormData().append(e, t), this }, n.abort = function() {
                return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this) }, n.withCredentials = function() {
                return this._withCredentials = !0, this }, n.redirects = function(e) {
                return this._maxRedirects = e, this }, n.toJSON = function() {
                return { method: this.method, url: this.url, data: this._data } }, n._isHost = function(e) {
                var t = {}.toString.call(e);
                switch (t) {
                    case "[object File]":
                    case "[object Blob]":
                    case "[object FormData]":
                        return !0;
                    default:
                        return !1 } }, n.send = function(e) {
                var t = r(e),
                    n = this._header["content-type"];
                if (t && r(this._data))
                    for (var i in e) this._data[i] = e[i];
                else "string" == typeof e ? (n || this.type("form"), n = this._header["content-type"], "application/x-www-form-urlencoded" == n ? this._data = this._data ? this._data + "&" + e : e : this._data = (this._data || "") + e) : this._data = e;
                return !t || this._isHost(e) ? this : (n || this.type("json"), this) } }, { "./is-object": 14 }],
        16: [function(e, t, n) {
            function r(e, t, n) {
                return "function" == typeof n ? new e("GET", t).end(n) : 2 == arguments.length ? new e("GET", t) : new e(t, n) }
            t.exports = r }, {}],
        17: [function(t, n, r) {
            (function() {
                function t(e) {
                    function t(t, n, r, i, s, o) {
                        for (; s >= 0 && o > s; s += e) {
                            var a = i ? i[s] : s;
                            r = n(r, t[a], a, t) }
                        return r }
                    return function(n, r, i, s) { r = A(r, s, 4);
                        var o = !N(n) && w.keys(n),
                            a = (o || n).length,
                            u = e > 0 ? 0 : a - 1;
                        return arguments.length < 3 && (i = n[o ? o[u] : u], u += e), t(n, r, i, o, u, a) } }

                function i(e) {
                    return function(t, n, r) { n = x(n, r);
                        for (var i = E(t), s = e > 0 ? 0 : i - 1; s >= 0 && i > s; s += e)
                            if (n(t[s], s, t)) return s;
                        return -1 } }

                function s(e, t, n) {
                    return function(r, i, s) {
                        var o = 0,
                            a = E(r);
                        if ("number" == typeof s) e > 0 ? o = s >= 0 ? s : Math.max(s + a, o) : a = s >= 0 ? Math.min(s + 1, a) : s + a + 1;
                        else if (n && s && a) return s = n(r, i), r[s] === i ? s : -1;
                        if (i !== i) return s = t(d.call(r, o, a), w.isNaN), s >= 0 ? s + o : -1;
                        for (s = e > 0 ? o : a - 1; s >= 0 && a > s; s += e)
                            if (r[s] === i) return s;
                        return -1 } }

                function o(e, t) {
                    var n = P.length,
                        r = e.constructor,
                        i = w.isFunction(r) && r.prototype || l,
                        s = "constructor";
                    for (w.has(e, s) && !w.contains(t, s) && t.push(s); n--;) s = P[n], s in e && e[s] !== i[s] && !w.contains(t, s) && t.push(s) }
                var a = this,
                    u = a._,
                    c = Array.prototype,
                    l = Object.prototype,
                    h = Function.prototype,
                    f = c.push,
                    d = c.slice,
                    p = l.toString,
                    _ = l.hasOwnProperty,
                    m = Array.isArray,
                    v = Object.keys,
                    g = h.bind,
                    b = Object.create,
                    y = function() {},
                    w = function z(e) {
                        return e instanceof z ? e : this instanceof z ? void(this._wrapped = e) : new z(e) };
                "undefined" != typeof r ? ("undefined" != typeof n && n.exports && (r = n.exports = w), r._ = w) : a._ = w, w.VERSION = "1.8.3";
                var A = function(e, t, n) {
                        if (void 0 === t) return e;
                        switch (null == n ? 3 : n) {
                            case 1:
                                return function(n) {
                                    return e.call(t, n) };
                            case 2:
                                return function(n, r) {
                                    return e.call(t, n, r) };
                            case 3:
                                return function(n, r, i) {
                                    return e.call(t, n, r, i) };
                            case 4:
                                return function(n, r, i, s) {
                                    return e.call(t, n, r, i, s) } }
                        return function() {
                            return e.apply(t, arguments) } },
                    x = function(e, t, n) {
                        return null == e ? w.identity : w.isFunction(e) ? A(e, t, n) : w.isObject(e) ? w.matcher(e) : w.property(e) };
                w.iteratee = function(e, t) {
                    return x(e, t, 1 / 0) };
                var O = function(e, t) {
                        return function(n) {
                            var r = arguments.length;
                            if (2 > r || null == n) return n;
                            for (var i = 1; r > i; i++)
                                for (var s = arguments[i], o = e(s), a = o.length, u = 0; a > u; u++) {
                                    var c = o[u];
                                    t && void 0 !== n[c] || (n[c] = s[c]) }
                            return n } },
                    S = function(e) {
                        if (!w.isObject(e)) return {};
                        if (b) return b(e);
                        y.prototype = e;
                        var t = new y;
                        return y.prototype = null, t },
                    C = function(e) {
                        return function(t) {
                            return null == t ? void 0 : t[e] } },
                    j = Math.pow(2, 53) - 1,
                    E = C("length"),
                    N = function(e) {
                        var t = E(e);
                        return "number" == typeof t && t >= 0 && j >= t };
                w.each = w.forEach = function(e, t, n) { t = A(t, n);
                    var r, i;
                    if (N(e))
                        for (r = 0, i = e.length; i > r; r++) t(e[r], r, e);
                    else {
                        var s = w.keys(e);
                        for (r = 0, i = s.length; i > r; r++) t(e[s[r]], s[r], e) }
                    return e }, w.map = w.collect = function(e, t, n) { t = x(t, n);
                    for (var r = !N(e) && w.keys(e), i = (r || e).length, s = Array(i), o = 0; i > o; o++) {
                        var a = r ? r[o] : o;
                        s[o] = t(e[a], a, e) }
                    return s }, w.reduce = w.foldl = w.inject = t(1), w.reduceRight = w.foldr = t(-1), w.find = w.detect = function(e, t, n) {
                    var r;
                    return r = N(e) ? w.findIndex(e, t, n) : w.findKey(e, t, n), void 0 !== r && -1 !== r ? e[r] : void 0 }, w.filter = w.select = function(e, t, n) {
                    var r = [];
                    return t = x(t, n), w.each(e, function(e, n, i) { t(e, n, i) && r.push(e) }), r }, w.reject = function(e, t, n) {
                    return w.filter(e, w.negate(x(t)), n) }, w.every = w.all = function(e, t, n) { t = x(t, n);
                    for (var r = !N(e) && w.keys(e), i = (r || e).length, s = 0; i > s; s++) {
                        var o = r ? r[s] : s;
                        if (!t(e[o], o, e)) return !1 }
                    return !0 }, w.some = w.any = function(e, t, n) { t = x(t, n);
                    for (var r = !N(e) && w.keys(e), i = (r || e).length, s = 0; i > s; s++) {
                        var o = r ? r[s] : s;
                        if (t(e[o], o, e)) return !0 }
                    return !1 }, w.contains = w.includes = w.include = function(e, t, n, r) {
                    return N(e) || (e = w.values(e)), ("number" != typeof n || r) && (n = 0), w.indexOf(e, t, n) >= 0 }, w.invoke = function(e, t) {
                    var n = d.call(arguments, 2),
                        r = w.isFunction(t);
                    return w.map(e, function(e) {
                        var i = r ? t : e[t];
                        return null == i ? i : i.apply(e, n) }) }, w.pluck = function(e, t) {
                    return w.map(e, w.property(t)) }, w.where = function(e, t) {
                    return w.filter(e, w.matcher(t)) }, w.findWhere = function(e, t) {
                    return w.find(e, w.matcher(t)) }, w.max = function(e, t, n) {
                    var r, i, s = -(1 / 0),
                        o = -(1 / 0);
                    if (null == t && null != e) { e = N(e) ? e : w.values(e);
                        for (var a = 0, u = e.length; u > a; a++) r = e[a], r > s && (s = r) } else t = x(t, n), w.each(e, function(e, n, r) { i = t(e, n, r), (i > o || i === -(1 / 0) && s === -(1 / 0)) && (s = e, o = i) });
                    return s }, w.min = function(e, t, n) {
                    var r, i, s = 1 / 0,
                        o = 1 / 0;
                    if (null == t && null != e) { e = N(e) ? e : w.values(e);
                        for (var a = 0, u = e.length; u > a; a++) r = e[a], s > r && (s = r) } else t = x(t, n), w.each(e, function(e, n, r) { i = t(e, n, r), (o > i || i === 1 / 0 && s === 1 / 0) && (s = e, o = i) });
                    return s }, w.shuffle = function(e) {
                    for (var t, n = N(e) ? e : w.values(e), r = n.length, i = Array(r), s = 0; r > s; s++) t = w.random(0, s), t !== s && (i[s] = i[t]), i[t] = n[s];
                    return i }, w.sample = function(e, t, n) {
                    return null == t || n ? (N(e) || (e = w.values(e)), e[w.random(e.length - 1)]) : w.shuffle(e).slice(0, Math.max(0, t)) }, w.sortBy = function(e, t, n) {
                    return t = x(t, n), w.pluck(w.map(e, function(e, n, r) {
                        return { value: e, index: n, criteria: t(e, n, r) } }).sort(function(e, t) {
                        var n = e.criteria,
                            r = t.criteria;
                        if (n !== r) {
                            if (n > r || void 0 === n) return 1;
                            if (r > n || void 0 === r) return -1 }
                        return e.index - t.index }), "value") };
                var T = function(e) {
                    return function(t, n, r) {
                        var i = {};
                        return n = x(n, r), w.each(t, function(r, s) {
                            var o = n(r, s, t);
                            e(i, r, o) }), i } };
                w.groupBy = T(function(e, t, n) { w.has(e, n) ? e[n].push(t) : e[n] = [t] }), w.indexBy = T(function(e, t, n) { e[n] = t }), w.countBy = T(function(e, t, n) { w.has(e, n) ? e[n]++ : e[n] = 1 }), w.toArray = function(e) {
                    return e ? w.isArray(e) ? d.call(e) : N(e) ? w.map(e, w.identity) : w.values(e) : [] }, w.size = function(e) {
                    return null == e ? 0 : N(e) ? e.length : w.keys(e).length }, w.partition = function(e, t, n) { t = x(t, n);
                    var r = [],
                        i = [];
                    return w.each(e, function(e, n, s) {
                        (t(e, n, s) ? r : i).push(e) }), [r, i] }, w.first = w.head = w.take = function(e, t, n) {
                    return null != e ? null == t || n ? e[0] : w.initial(e, e.length - t) : void 0 }, w.initial = function(e, t, n) {
                    return d.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t))) }, w.last = function(e, t, n) {
                    return null != e ? null == t || n ? e[e.length - 1] : w.rest(e, Math.max(0, e.length - t)) : void 0 }, w.rest = w.tail = w.drop = function(e, t, n) {
                    return d.call(e, null == t || n ? 1 : t) }, w.compact = function(e) {
                    return w.filter(e, w.identity) };
                var U = function W(e, t, n, r) {
                    for (var i = [], s = 0, o = r || 0, a = E(e); a > o; o++) {
                        var u = e[o];
                        if (N(u) && (w.isArray(u) || w.isArguments(u))) { t || (u = W(u, t, n));
                            var c = 0,
                                l = u.length;
                            for (i.length += l; l > c;) i[s++] = u[c++] } else n || (i[s++] = u) }
                    return i };
                w.flatten = function(e, t) {
                    return U(e, t, !1) }, w.without = function(e) {
                    return w.difference(e, d.call(arguments, 1)) }, w.uniq = w.unique = function(e, t, n, r) { w.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = x(n, r));
                    for (var i = [], s = [], o = 0, a = E(e); a > o; o++) {
                        var u = e[o],
                            c = n ? n(u, o, e) : u;
                        t ? (o && s === c || i.push(u), s = c) : n ? w.contains(s, c) || (s.push(c), i.push(u)) : w.contains(i, u) || i.push(u) }
                    return i }, w.union = function() {
                    return w.uniq(U(arguments, !0, !0)) }, w.intersection = function(e) {
                    for (var t = [], n = arguments.length, r = 0, i = E(e); i > r; r++) {
                        var s = e[r];
                        if (!w.contains(t, s)) {
                            for (var o = 1; n > o && w.contains(arguments[o], s); o++);
                            o === n && t.push(s) } }
                    return t }, w.difference = function(e) {
                    var t = U(arguments, !0, !0, 1);
                    return w.filter(e, function(e) {
                        return !w.contains(t, e) }) }, w.zip = function() {
                    return w.unzip(arguments) }, w.unzip = function(e) {
                    for (var t = e && w.max(e, E).length || 0, n = Array(t), r = 0; t > r; r++) n[r] = w.pluck(e, r);
                    return n }, w.object = function(e, t) {
                    for (var n = {}, r = 0, i = E(e); i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
                    return n }, w.findIndex = i(1), w.findLastIndex = i(-1), w.sortedIndex = function(e, t, n, r) { n = x(n, r, 1);
                    for (var i = n(t), s = 0, o = E(e); o > s;) {
                        var a = Math.floor((s + o) / 2);
                        n(e[a]) < i ? s = a + 1 : o = a }
                    return s }, w.indexOf = s(1, w.findIndex, w.sortedIndex), w.lastIndexOf = s(-1, w.findLastIndex), w.range = function(e, t, n) { null == t && (t = e || 0, e = 0), n = n || 1;
                    for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), s = 0; r > s; s++, e += n) i[s] = e;
                    return i };
                var R = function(e, t, n, r, i) {
                    if (!(r instanceof t)) return e.apply(n, i);
                    var s = S(e.prototype),
                        o = e.apply(s, i);
                    return w.isObject(o) ? o : s };
                w.bind = function(e, t) {
                    if (g && e.bind === g) return g.apply(e, d.call(arguments, 1));
                    if (!w.isFunction(e)) throw new TypeError("Bind must be called on a function");
                    var n = d.call(arguments, 2),
                        r = function i() {
                            return R(e, i, t, this, n.concat(d.call(arguments))) };
                    return r }, w.partial = function(e) {
                    var t = d.call(arguments, 1),
                        n = function r() {
                            for (var n = 0, i = t.length, s = Array(i), o = 0; i > o; o++) s[o] = t[o] === w ? arguments[n++] : t[o];
                            for (; n < arguments.length;) s.push(arguments[n++]);
                            return R(e, r, this, this, s) };
                    return n }, w.bindAll = function(e) {
                    var t, n, r = arguments.length;
                    if (1 >= r) throw new Error("bindAll must be passed function names");
                    for (t = 1; r > t; t++) n = arguments[t], e[n] = w.bind(e[n], e);
                    return e }, w.memoize = function(e, t) {
                    var n = function r(n) {
                        var i = r.cache,
                            s = "" + (t ? t.apply(this, arguments) : n);
                        return w.has(i, s) || (i[s] = e.apply(this, arguments)), i[s] };
                    return n.cache = {}, n }, w.delay = function(e, t) {
                    var n = d.call(arguments, 2);
                    return setTimeout(function() {
                        return e.apply(null, n) }, t) }, w.defer = w.partial(w.delay, w, 1), w.throttle = function(e, t, n) {
                    var r, i, s, o = null,
                        a = 0;
                    n || (n = {});
                    var u = function() { a = n.leading === !1 ? 0 : w.now(), o = null, s = e.apply(r, i), o || (r = i = null) };
                    return function() {
                        var c = w.now();
                        a || n.leading !== !1 || (a = c);
                        var l = t - (c - a);
                        return r = this, i = arguments, 0 >= l || l > t ? (o && (clearTimeout(o), o = null), a = c, s = e.apply(r, i), o || (r = i = null)) : o || n.trailing === !1 || (o = setTimeout(u, l)), s } }, w.debounce = function(e, t, n) {
                    var r, i, s, o, a, u = function c() {
                        var u = w.now() - o;
                        t > u && u >= 0 ? r = setTimeout(c, t - u) : (r = null, n || (a = e.apply(s, i), r || (s = i = null))) };
                    return function() { s = this, i = arguments, o = w.now();
                        var c = n && !r;
                        return r || (r = setTimeout(u, t)), c && (a = e.apply(s, i), s = i = null), a } }, w.wrap = function(e, t) {
                    return w.partial(t, e) }, w.negate = function(e) {
                    return function() {
                        return !e.apply(this, arguments) } }, w.compose = function() {
                    var e = arguments,
                        t = e.length - 1;
                    return function() {
                        for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
                        return r } }, w.after = function(e, t) {
                    return function() {
                        return --e < 1 ? t.apply(this, arguments) : void 0 } }, w.before = function(e, t) {
                    var n;
                    return function() {
                        return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = null), n } }, w.once = w.partial(w.before, 2);
                var I = !{ toString: null }.propertyIsEnumerable("toString"),
                    P = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
                w.keys = function(e) {
                    if (!w.isObject(e)) return [];
                    if (v) return v(e);
                    var t = [];
                    for (var n in e) w.has(e, n) && t.push(n);
                    return I && o(e, t), t }, w.allKeys = function(e) {
                    if (!w.isObject(e)) return [];
                    var t = [];
                    for (var n in e) t.push(n);
                    return I && o(e, t), t }, w.values = function(e) {
                    for (var t = w.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = e[t[i]];
                    return r }, w.mapObject = function(e, t, n) { t = x(t, n);
                    for (var r, i = w.keys(e), s = i.length, o = {}, a = 0; s > a; a++) r = i[a], o[r] = t(e[r], r, e);
                    return o }, w.pairs = function(e) {
                    for (var t = w.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = [t[i], e[t[i]]];
                    return r }, w.invert = function(e) {
                    for (var t = {}, n = w.keys(e), r = 0, i = n.length; i > r; r++) t[e[n[r]]] = n[r];
                    return t }, w.functions = w.methods = function(e) {
                    var t = [];
                    for (var n in e) w.isFunction(e[n]) && t.push(n);
                    return t.sort() }, w.extend = O(w.allKeys), w.extendOwn = w.assign = O(w.keys), w.findKey = function(e, t, n) { t = x(t, n);
                    for (var r, i = w.keys(e), s = 0, o = i.length; o > s; s++)
                        if (r = i[s], t(e[r], r, e)) return r }, w.pick = function(e, t, n) {
                    var r, i, s = {},
                        o = e;
                    if (null == o) return s;
                    w.isFunction(t) ? (i = w.allKeys(o), r = A(t, n)) : (i = U(arguments, !1, !1, 1), r = function(e, t, n) {
                        return t in n }, o = Object(o));
                    for (var a = 0, u = i.length; u > a; a++) {
                        var c = i[a],
                            l = o[c];
                        r(l, c, o) && (s[c] = l) }
                    return s }, w.omit = function(e, t, n) {
                    if (w.isFunction(t)) t = w.negate(t);
                    else {
                        var r = w.map(U(arguments, !1, !1, 1), String);
                        t = function(e, t) {
                            return !w.contains(r, t) } }
                    return w.pick(e, t, n) }, w.defaults = O(w.allKeys, !0), w.create = function(e, t) {
                    var n = S(e);
                    return t && w.extendOwn(n, t), n }, w.clone = function(e) {
                    return w.isObject(e) ? w.isArray(e) ? e.slice() : w.extend({}, e) : e }, w.tap = function(e, t) {
                    return t(e), e }, w.isMatch = function(e, t) {
                    var n = w.keys(t),
                        r = n.length;
                    if (null == e) return !r;
                    for (var i = Object(e), s = 0; r > s; s++) {
                        var o = n[s];
                        if (t[o] !== i[o] || !(o in i)) return !1 }
                    return !0 };
                var k = function G(e, t, n, r) {
                    if (e === t) return 0 !== e || 1 / e === 1 / t;
                    if (null == e || null == t) return e === t;
                    e instanceof w && (e = e._wrapped), t instanceof w && (t = t._wrapped);
                    var i = p.call(e);
                    if (i !== p.call(t)) return !1;
                    switch (i) {
                        case "[object RegExp]":
                        case "[object String]":
                            return "" + e == "" + t;
                        case "[object Number]":
                            return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                        case "[object Date]":
                        case "[object Boolean]":
                            return +e === +t }
                    var s = "[object Array]" === i;
                    if (!s) {
                        if ("object" != ("undefined" == typeof e ? "undefined" : _typeof(e)) || "object" != ("undefined" == typeof t ? "undefined" : _typeof(t))) return !1;
                        var o = e.constructor,
                            a = t.constructor;
                        if (o !== a && !(w.isFunction(o) && o instanceof o && w.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1 }
                    n = n || [], r = r || [];
                    for (var u = n.length; u--;)
                        if (n[u] === e) return r[u] === t;
                    if (n.push(e), r.push(t), s) {
                        if (u = e.length, u !== t.length) return !1;
                        for (; u--;)
                            if (!G(e[u], t[u], n, r)) return !1 } else {
                        var c, l = w.keys(e);
                        if (u = l.length, w.keys(t).length !== u) return !1;
                        for (; u--;)
                            if (c = l[u], !w.has(t, c) || !G(e[c], t[c], n, r)) return !1 }
                    return n.pop(), r.pop(), !0 };
                w.isEqual = function(e, t) {
                    return k(e, t) }, w.isEmpty = function(e) {
                    return null == e ? !0 : N(e) && (w.isArray(e) || w.isString(e) || w.isArguments(e)) ? 0 === e.length : 0 === w.keys(e).length }, w.isElement = function(e) {
                    return !(!e || 1 !== e.nodeType) }, w.isArray = m || function(e) {
                    return "[object Array]" === p.call(e) }, w.isObject = function(e) {
                    var t = "undefined" == typeof e ? "undefined" : _typeof(e);
                    return "function" === t || "object" === t && !!e }, w.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) { w["is" + e] = function(t) {
                        return p.call(t) === "[object " + e + "]" } }), w.isArguments(arguments) || (w.isArguments = function(e) {
                    return w.has(e, "callee") }), "function" != typeof /./ && "object" != ("undefined" == typeof Int8Array ? "undefined" : _typeof(Int8Array)) && (w.isFunction = function(e) {
                    return "function" == typeof e || !1 }), w.isFinite = function(e) {
                    return isFinite(e) && !isNaN(parseFloat(e)) }, w.isNaN = function(e) {
                    return w.isNumber(e) && e !== +e }, w.isBoolean = function(e) {
                    return e === !0 || e === !1 || "[object Boolean]" === p.call(e) }, w.isNull = function(e) {
                    return null === e }, w.isUndefined = function(e) {
                    return void 0 === e }, w.has = function(e, t) {
                    return null != e && _.call(e, t) }, w.noConflict = function() {
                    return a._ = u, this }, w.identity = function(e) {
                    return e }, w.constant = function(e) {
                    return function() {
                        return e } }, w.noop = function() {}, w.property = C, w.propertyOf = function(e) {
                    return null == e ? function() {} : function(t) {
                        return e[t] } }, w.matcher = w.matches = function(e) {
                    return e = w.extendOwn({}, e),
                        function(t) {
                            return w.isMatch(t, e) } }, w.times = function(e, t, n) {
                    var r = Array(Math.max(0, e));
                    t = A(t, n, 1);
                    for (var i = 0; e > i; i++) r[i] = t(i);
                    return r }, w.random = function(e, t) {
                    return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1)) }, w.now = Date.now || function() {
                    return (new Date).getTime() };
                var D = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                    q = w.invert(D),
                    L = function(e) {
                        var t = function(t) {
                                return e[t] },
                            n = "(?:" + w.keys(e).join("|") + ")",
                            r = RegExp(n),
                            i = RegExp(n, "g");
                        return function(e) {
                            return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e } };
                w.escape = L(D), w.unescape = L(q), w.result = function(e, t, n) {
                    var r = null == e ? void 0 : e[t];
                    return void 0 === r && (r = n), w.isFunction(r) ? r.call(e) : r };
                var F = 0;
                w.uniqueId = function(e) {
                    var t = ++F + "";
                    return e ? e + t : t }, w.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };
                var M = /(.)^/,
                    V = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                    J = /\\|'|\r|\n|\u2028|\u2029/g,
                    B = function(e) {
                        return "\\" + V[e] };
                w.template = function(e, t, n) {!t && n && (t = n), t = w.defaults({}, t, w.templateSettings);
                    var r = RegExp([(t.escape || M).source, (t.interpolate || M).source, (t.evaluate || M).source].join("|") + "|$", "g"),
                        i = 0,
                        s = "__p+='";
                    e.replace(r, function(t, n, r, o, a) {
                        return s += e.slice(i, a).replace(J, B), i = a + t.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), t }), s += "';\n", t.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
                    try {
                        var o = new Function(t.variable || "obj", "_", s) } catch (a) {
                        throw a.source = s, a }
                    var u = function(e) {
                            return o.call(this, e, w) },
                        c = t.variable || "obj";
                    return u.source = "function(" + c + "){\n" + s + "}", u }, w.chain = function(e) {
                    var t = w(e);
                    return t._chain = !0, t };
                var Q = function(e, t) {
                    return e._chain ? w(t).chain() : t };
                w.mixin = function(e) { w.each(w.functions(e), function(t) {
                        var n = w[t] = e[t];
                        w.prototype[t] = function() {
                            var e = [this._wrapped];
                            return f.apply(e, arguments), Q(this, n.apply(w, e)) } }) }, w.mixin(w), w.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
                    var t = c[e];
                    w.prototype[e] = function() {
                        var n = this._wrapped;
                        return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], Q(this, n) } }), w.each(["concat", "join", "slice"], function(e) {
                    var t = c[e];
                    w.prototype[e] = function() {
                        return Q(this, t.apply(this._wrapped, arguments)) } }), w.prototype.value = function() {
                    return this._wrapped }, w.prototype.valueOf = w.prototype.toJSON = w.prototype.value, w.prototype.toString = function() {
                    return "" + this._wrapped }, "function" == typeof e && e.amd && e("underscore", [], function() {
                    return w })
            }).call(this)
        }, {}],
        18: [function(e, t, n) {
            var r = e("underscore");
            t.exports = function(e) {
                var t = "*";
                e.ACL = function(t) {
                    var n = this;
                    if (n.permissionsById = {}, r.isObject(t))
                        if (t instanceof e.User) n.setReadAccess(t, !0), n.setWriteAccess(t, !0);
                        else {
                            if (r.isFunction(t)) throw "AV.ACL() called with a function.  Did you forget ()?";
                            e._objectEach(t, function(t, i) {
                                if (!r.isString(i)) throw "Tried to create an ACL with an invalid userId.";
                                n.permissionsById[i] = {}, e._objectEach(t, function(e, t) {
                                    if ("read" !== t && "write" !== t) throw "Tried to create an ACL with an invalid permission type.";
                                    if (!r.isBoolean(e)) throw "Tried to create an ACL with an invalid permission value.";
                                    n.permissionsById[i][t] = e }) }) } }, e.ACL.prototype.toJSON = function() {
                    return r.clone(this.permissionsById) }, e.ACL.prototype._setAccess = function(t, n, i) {
                    if (n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName()), !r.isString(n)) throw "userId must be a string.";
                    if (!r.isBoolean(i)) throw "allowed must be either true or false.";
                    var s = this.permissionsById[n];
                    if (!s) {
                        if (!i) return;
                        s = {}, this.permissionsById[n] = s }
                    i ? this.permissionsById[n][t] = !0 : (delete s[t], r.isEmpty(s) && delete s[n]) }, e.ACL.prototype._getAccess = function(t, n) { n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName());
                    var r = this.permissionsById[n];
                    return r && r[t] ? !0 : !1 }, e.ACL.prototype.setReadAccess = function(e, t) { this._setAccess("read", e, t) }, e.ACL.prototype.getReadAccess = function(e) {
                    return this._getAccess("read", e) }, e.ACL.prototype.setWriteAccess = function(e, t) { this._setAccess("write", e, t) }, e.ACL.prototype.getWriteAccess = function(e) {
                    return this._getAccess("write", e) }, e.ACL.prototype.setPublicReadAccess = function(e) { this.setReadAccess(t, e) }, e.ACL.prototype.getPublicReadAccess = function() {
                    return this.getReadAccess(t) }, e.ACL.prototype.setPublicWriteAccess = function(e) { this.setWriteAccess(t, e) }, e.ACL.prototype.getPublicWriteAccess = function() {
                    return this.getWriteAccess(t) }, e.ACL.prototype.getRoleReadAccess = function(t) {
                    if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getReadAccess("role:" + t);
                    throw "role must be a AV.Role or a String" }, e.ACL.prototype.getRoleWriteAccess = function(t) {
                    if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getWriteAccess("role:" + t);
                    throw "role must be a AV.Role or a String" }, e.ACL.prototype.setRoleReadAccess = function(t, n) {
                    if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return void this.setReadAccess("role:" + t, n);
                    throw "role must be a AV.Role or a String" }, e.ACL.prototype.setRoleWriteAccess = function(t, n) {
                    if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return void this.setWriteAccess("role:" + t, n);
                    throw "role must be a AV.Role or a String" } } }, { underscore: 17 }],
        19: [function(e, t, n) {
            var r = t.exports = {};
            r._ = e("underscore"), r.version = e("./version"), r.Promise = e("./promise"), r.localStorage = e("./localstorage"), r.Cache = e("./cache"), r._config = r._config || {}, e("./utils").init(r), e("./event")(r), e("./geopoint")(r), e("./acl")(r), e("./op")(r), e("./relation")(r), e("./file")(r), e("./object")(r), e("./role")(r), e("./user")(r), e("./query")(r), e("./cloudfunction")(r), e("./push")(r), e("./status")(r), e("./search")(r), e("./insight")(r);
            var i = e("./error");
            r.Error = function() {
                for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
                console.warn("AV.Error() is deprecated, and will be removed in next release."), new(Function.prototype.bind.apply(i, [null].concat(t))) } }, { "./acl": 18, "./cache": 22, "./cloudfunction": 23, "./error": 24, "./event": 25, "./file": 26, "./geopoint": 27, "./insight": 28, "./localstorage": 29, "./object": 30, "./op": 31, "./promise": 32, "./push": 33, "./query": 34, "./relation": 35, "./role": 37, "./search": 38, "./status": 39, "./user": 42, "./utils": 43, "./version": 44, underscore: 17 }],
        20: [function(e, t, n) {
            (function(n) {
                var r = e("underscore"),
                    i = e("../promise"),
                    s = {},
                    o = ["getItem", "setItem", "removeItem", "clear"];
                if (n.localStorage) {
                    var a = n.localStorage;
                    try {
                        var u = "__storejs__";
                        if (a.setItem(u, u), a.getItem(u) != u) throw new Error;
                        a.removeItem(u) } catch (c) { a = e("localstorage-memory") }
                    r(o).each(function(e) { s[e] = function() {
                            return n.localStorage[e].apply(n.localStorage, arguments) } }), s.async = !1 } else {
                    var l = e("react-native").AsyncStorage;
                    r(o).each(function(e) { s[e + "Async"] = function() {
                            return i.as(l[e].apply(l, arguments)) } }), s.async = !0 }
                t.exports = s }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { "../promise": 32, "localstorage-memory": 7, "react-native": 1, underscore: 17 }],
        21: [function(e, t, n) {
            var r = function(e, t) {
                var n;
                n = e.indexOf("base64") < 0 ? atob(e) : e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : unescape(e.split(",")[1]);
                for (var r = t || e.split(",")[0].split(":")[1].split(";")[0], i = new Uint8Array(n.length), s = 0; s < n.length; s++) i[s] = n.charCodeAt(s);
                return new Blob([i], { type: r }) };
            t.exports = r }, {}],
        22: [function(e, t, n) {
            var r = e("./localstorage"),
                i = e("./av"),
                s = n.remove = r.removeItemAsync.bind(r);
            n.get = function(e) {
                return r.getItemAsync(i.applicationId + "/" + e).then(function(t) {
                    try { t = JSON.parse(t) } catch (n) {
                        return null }
                    if (t) {
                        var r = t.expiredAt && t.expiredAt < Date.now();
                        return r ? s(e).then(function() {
                            return null }) : t.value }
                    return null }) }, n.set = function(e, t, n) {
                var s = { value: t };
                return "number" == typeof n && (s.expiredAt = Date.now() + n), r.setItemAsync(i.applicationId + "/" + e, JSON.stringify(s)) } }, { "./av": 19, "./localstorage": 29 }],
        23: [function(e, t, n) {
            var r = e("underscore"),
                i = e("./request").request;
            t.exports = function(e) { e.Cloud = e.Cloud || {}, r.extend(e.Cloud, { run: function(t, n, r) {
                        var s = i("functions", t, null, "POST", e._encode(n, null, !0), r && r.sessionToken);
                        return s.then(function(t) {
                            return e._decode(null, t).result })._thenRunCallbacks(r) }, rpc: function(t, n, s) {
                        return r.isArray(n) ? e.Promise.error(new Error("Can't pass Array as the param of rpc function in JavaScript SDK."))._thenRunCallbacks(s) : i("call", t, null, "POST", e._encodeObjectOrArray(n), s && s.sessionToken).then(function(t) {
                            return e._decode("", t).result })._thenRunCallbacks(s) }, getServerDate: function(t) {
                        var n = i("date", null, null, "GET");
                        return n.then(function(t) {
                            return e._decode(null, t) })._thenRunCallbacks(t) }, requestSmsCode: function(e, t) {
                        if (r.isString(e) && (e = { mobilePhoneNumber: e }), !e.mobilePhoneNumber) throw "Missing mobilePhoneNumber.";
                        var n = i("requestSmsCode", null, null, "POST", e);
                        return n._thenRunCallbacks(t) }, verifySmsCode: function(e, t, n) {
                        if (!e) throw "Missing sms code.";
                        var s = {};
                        r.isString(t) ? s.mobilePhoneNumber = t : n = t;
                        var o = i("verifySmsCode", e, null, "POST", s);
                        return o._thenRunCallbacks(n) } }) } }, { "./request": 36, underscore: 17 }],
        24: [function(e, t, n) {
            function r(e, t) { this.code = e, this.message = t }
            var i = e("underscore");
            i.extend(r, { OTHER_CAUSE: -1, INTERNAL_SERVER_ERROR: 1, CONNECTION_FAILED: 100, OBJECT_NOT_FOUND: 101, INVALID_QUERY: 102, INVALID_CLASS_NAME: 103, MISSING_OBJECT_ID: 104, INVALID_KEY_NAME: 105, INVALID_POINTER: 106, INVALID_JSON: 107, COMMAND_UNAVAILABLE: 108, NOT_INITIALIZED: 109, INCORRECT_TYPE: 111, INVALID_CHANNEL_NAME: 112, PUSH_MISCONFIGURED: 115, OBJECT_TOO_LARGE: 116, OPERATION_FORBIDDEN: 119, CACHE_MISS: 120, INVALID_NESTED_KEY: 121, INVALID_FILE_NAME: 122, INVALID_ACL: 123, TIMEOUT: 124, INVALID_EMAIL_ADDRESS: 125, MISSING_CONTENT_TYPE: 126, MISSING_CONTENT_LENGTH: 127, INVALID_CONTENT_LENGTH: 128, FILE_TOO_LARGE: 129, FILE_SAVE_ERROR: 130, FILE_DELETE_ERROR: 153, DUPLICATE_VALUE: 137, INVALID_ROLE_NAME: 139, EXCEEDED_QUOTA: 140, SCRIPT_FAILED: 141, VALIDATION_ERROR: 142, INVALID_IMAGE_DATA: 150, UNSAVED_FILE_ERROR: 151, INVALID_PUSH_TIME_ERROR: 152, USERNAME_MISSING: 200, PASSWORD_MISSING: 201, USERNAME_TAKEN: 202, EMAIL_TAKEN: 203, EMAIL_MISSING: 204, EMAIL_NOT_FOUND: 205, SESSION_MISSING: 206, MUST_CREATE_USER_THROUGH_SIGNUP: 207, ACCOUNT_ALREADY_LINKED: 208, LINKED_ID_MISSING: 250, INVALID_LINKED_SESSION: 251, UNSUPPORTED_SERVICE: 252, X_DOMAIN_REQUEST: 602 }), t.exports = r }, { underscore: 17 }],
        25: [function(e, t, n) { t.exports = function(e) {
                var t = /\s+/,
                    n = Array.prototype.slice;
                e.Events = { on: function(e, n, r) {
                        var i, s, o, a, u;
                        if (!n) return this;
                        for (e = e.split(t), i = this._callbacks || (this._callbacks = {}), s = e.shift(); s;) u = i[s], o = u ? u.tail : {}, o.next = a = {}, o.context = r, o.callback = n, i[s] = { tail: a, next: u ? u.next : o }, s = e.shift();
                        return this }, off: function(e, n, r) {
                        var i, s, o, a, u, c;
                        if (s = this._callbacks) {
                            if (!(e || n || r)) return delete this._callbacks, this;
                            for (e = e ? e.split(t) : _.keys(s), i = e.shift(); i;)
                                if (o = s[i], delete s[i], o && (n || r)) {
                                    for (a = o.tail, o = o.next; o !== a;) u = o.callback, c = o.context, (n && u !== n || r && c !== r) && this.on(i, u, c), o = o.next;
                                    i = e.shift() }
                            return this } }, trigger: function(e) {
                        var r, i, s, o, a, u, c;
                        if (!(s = this._callbacks)) return this;
                        for (u = s.all, e = e.split(t), c = n.call(arguments, 1), r = e.shift(); r;) {
                            if (i = s[r])
                                for (o = i.tail;
                                    (i = i.next) !== o;) i.callback.apply(i.context || this, c);
                            if (i = u)
                                for (o = i.tail, a = [r].concat(c);
                                    (i = i.next) !== o;) i.callback.apply(i.context || this, a);
                            r = e.shift() }
                        return this } }, e.Events.bind = e.Events.on, e.Events.unbind = e.Events.off } }, {}],
        26: [function(e, t, n) {
            (function(n) {
                var r = e("underscore"),
                    i = e("./uploader/cos"),
                    s = e("./uploader/qiniu"),
                    o = e("./error"),
                    a = e("./request").request;
                t.exports = function(t) {
                    var u = t._config,
                        c = function(e) {
                            return e.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4] },
                        l = function(e) {
                            if (26 > e) return String.fromCharCode(65 + e);
                            if (52 > e) return String.fromCharCode(97 + (e - 26));
                            if (62 > e) return String.fromCharCode(48 + (e - 52));
                            if (62 === e) return "+";
                            if (63 === e) return "/";
                            throw new Error("Tried to encode large digit " + e + " in base64.") },
                        h = function(e) {
                            var t = [];
                            return t.length = Math.ceil(e.length / 3), r.times(t.length, function(n) {
                                var r = e[3 * n],
                                    i = e[3 * n + 1] || 0,
                                    s = e[3 * n + 2] || 0,
                                    o = 3 * n + 1 < e.length,
                                    a = 3 * n + 2 < e.length;
                                t[n] = [l(r >> 2 & 63), l(r << 4 & 48 | i >> 4 & 15), o ? l(i << 2 & 60 | s >> 6 & 3) : "=", a ? l(63 & s) : "="].join("") }), t.join("") },
                        f = function(e) {
                            return e.split(",")[0] && e.split(",")[0].indexOf("base64") >= 0 && (e = e.split(",")[1]), e },
                        d = function() {
                            return "cn" === u.region },
                        p = { ai: "application/postscript", aif: "audio/x-aiff", aifc: "audio/x-aiff", aiff: "audio/x-aiff", asc: "text/plain", atom: "application/atom+xml", au: "audio/basic", avi: "video/x-msvideo", bcpio: "application/x-bcpio", bin: "application/octet-stream", bmp: "image/bmp", cdf: "application/x-netcdf", cgm: "image/cgm", "class": "application/octet-stream", cpio: "application/x-cpio", cpt: "application/mac-compactpro", csh: "application/x-csh", css: "text/css", dcr: "application/x-director", dif: "video/x-dv", dir: "application/x-director", djv: "image/vnd.djvu", djvu: "image/vnd.djvu", dll: "application/octet-stream", dmg: "application/octet-stream", dms: "application/octet-stream", doc: "application/msword", docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template", docm: "application/vnd.ms-word.document.macroEnabled.12", dotm: "application/vnd.ms-word.template.macroEnabled.12", dtd: "application/xml-dtd", dv: "video/x-dv", dvi: "application/x-dvi", dxr: "application/x-director", eps: "application/postscript", etx: "text/x-setext", exe: "application/octet-stream", ez: "application/andrew-inset", gif: "image/gif", gram: "application/srgs", grxml: "application/srgs+xml", gtar: "application/x-gtar", hdf: "application/x-hdf", hqx: "application/mac-binhex40", htm: "text/html", html: "text/html", ice: "x-conference/x-cooltalk", ico: "image/x-icon", ics: "text/calendar", ief: "image/ief", ifb: "text/calendar", iges: "model/iges", igs: "model/iges", jnlp: "application/x-java-jnlp-file", jp2: "image/jp2", jpe: "image/jpeg", jpeg: "image/jpeg", jpg: "image/jpeg", js: "application/x-javascript", kar: "audio/midi", latex: "application/x-latex", lha: "application/octet-stream", lzh: "application/octet-stream", m3u: "audio/x-mpegurl", m4a: "audio/mp4a-latm", m4b: "audio/mp4a-latm", m4p: "audio/mp4a-latm", m4u: "video/vnd.mpegurl", m4v: "video/x-m4v", mac: "image/x-macpaint", man: "application/x-troff-man", mathml: "application/mathml+xml", me: "application/x-troff-me", mesh: "model/mesh", mid: "audio/midi", midi: "audio/midi", mif: "application/vnd.mif", mov: "video/quicktime", movie: "video/x-sgi-movie", mp2: "audio/mpeg", mp3: "audio/mpeg", mp4: "video/mp4", mpe: "video/mpeg", mpeg: "video/mpeg", mpg: "video/mpeg", mpga: "audio/mpeg", ms: "application/x-troff-ms", msh: "model/mesh", mxu: "video/vnd.mpegurl", nc: "application/x-netcdf", oda: "application/oda", ogg: "application/ogg", pbm: "image/x-portable-bitmap", pct: "image/pict", pdb: "chemical/x-pdb", pdf: "application/pdf", pgm: "image/x-portable-graymap", pgn: "application/x-chess-pgn", pic: "image/pict", pict: "image/pict", png: "image/png", pnm: "image/x-portable-anymap", pnt: "image/x-macpaint", pntg: "image/x-macpaint", ppm: "image/x-portable-pixmap", ppt: "application/vnd.ms-powerpoint", pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation", potx: "application/vnd.openxmlformats-officedocument.presentationml.template", ppsx: "application/vnd.openxmlformats-officedocument.presentationml.slideshow", ppam: "application/vnd.ms-powerpoint.addin.macroEnabled.12", pptm: "application/vnd.ms-powerpoint.presentation.macroEnabled.12", potm: "application/vnd.ms-powerpoint.template.macroEnabled.12", ppsm: "application/vnd.ms-powerpoint.slideshow.macroEnabled.12", ps: "application/postscript", qt: "video/quicktime", qti: "image/x-quicktime", qtif: "image/x-quicktime", ra: "audio/x-pn-realaudio", ram: "audio/x-pn-realaudio", ras: "image/x-cmu-raster", rdf: "application/rdf+xml", rgb: "image/x-rgb", rm: "application/vnd.rn-realmedia", roff: "application/x-troff", rtf: "text/rtf", rtx: "text/richtext", sgm: "text/sgml", sgml: "text/sgml", sh: "application/x-sh", shar: "application/x-shar", silo: "model/mesh", sit: "application/x-stuffit", skd: "application/x-koan", skm: "application/x-koan", skp: "application/x-koan", skt: "application/x-koan", smi: "application/smil", smil: "application/smil", snd: "audio/basic", so: "application/octet-stream", spl: "application/x-futuresplash", src: "application/x-wais-source", sv4cpio: "application/x-sv4cpio", sv4crc: "application/x-sv4crc", svg: "image/svg+xml", swf: "application/x-shockwave-flash", t: "application/x-troff", tar: "application/x-tar", tcl: "application/x-tcl", tex: "application/x-tex", texi: "application/x-texinfo", texinfo: "application/x-texinfo", tif: "image/tiff", tiff: "image/tiff", tr: "application/x-troff", tsv: "text/tab-separated-values", txt: "text/plain", ustar: "application/x-ustar", vcd: "application/x-cdlink", vrml: "model/vrml", vxml: "application/voicexml+xml", wav: "audio/x-wav", wbmp: "image/vnd.wap.wbmp", wbmxl: "application/vnd.wap.wbxml", wml: "text/vnd.wap.wml", wmlc: "application/vnd.wap.wmlc", wmls: "text/vnd.wap.wmlscript", wmlsc: "application/vnd.wap.wmlscriptc", wrl: "model/vrml", xbm: "image/x-xbitmap", xht: "application/xhtml+xml", xhtml: "application/xhtml+xml", xls: "application/vnd.ms-excel", xml: "application/xml", xpm: "image/x-xpixmap", xsl: "application/xml", xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template", xlsm: "application/vnd.ms-excel.sheet.macroEnabled.12", xltm: "application/vnd.ms-excel.template.macroEnabled.12", xlam: "application/vnd.ms-excel.addin.macroEnabled.12", xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.12", xslt: "application/xslt+xml", xul: "application/vnd.mozilla.xul+xml", xwd: "image/x-xwindowdump", xyz: "chemical/x-xyz", zip: "application/zip" },
                        _ = function(e, r) {
                            var i = new t.Promise;
                            if ("undefined" == typeof FileReader) return t.Promise.error(new o(-1, "Attempted to use a FileReader on an unsupported browser."));
                            var s = new n.FileReader;
                            return s.onloadend = function() {
                                if (2 !== s.readyState) return void i.reject(new o(-1, "Error reading file."));
                                var e = s.result,
                                    t = /^data:([^;]*);base64,(.*)$/.exec(e);
                                return t ? void i.resolve(t[2], r || t[1]) : void i.reject(new o(-1, "Unable to interpret data URL: " + e)) }, s.readAsDataURL(e), i };
                    t.File = function(i, s, o) { this.attributes = { name: i, url: "", metaData: {}, base64: "" };
                        var a = void 0;
                        if (s && s.owner) a = s.owner;
                        else if (!t._config.disableCurrentUser) try { a = t.User.current() } catch (u) { console.warn("Get current user failed. It seems this runtime use an async storage system, please new AV.File in the callback of AV.User.currentAsync().") }
                        this.attributes.metaData = { owner: a ? a.id : "unknown" };
                        var c = /\.([^.]*)$/.exec(i);
                        c && (c = c[1].toLowerCase());
                        var l = o || p[c] || "text/plain";
                        if (this._guessedType = l, r.isArray(s) && (this.attributes.metaData.size = s.length, s = { base64: h(s) }), s && s.base64) {
                            var d = e("./browserify-wrapper/parse-base64"),
                                _ = d(s.base64, l);
                            this.attributes.base64 = f(s.base64), this._source = t.Promise.as(_, l) } else if (s && s.blob) s.blob.type || (s.blob.type = l), this._source = t.Promise.as(s.blob, l);
                        else if ("undefined" != typeof File && s instanceof n.File) this._source = t.Promise.as(s, l);
                        else if ("undefined" != typeof n.Buffer && n.Buffer.isBuffer(s)) this.attributes.metaData.size = s.length, this._source = t.Promise.as(s, l);
                        else if (r.isString(s)) throw new Error("Creating a AV.File from a String is not yet supported.") }, t.File.withURL = function(e, n, r, i) {
                        if (!e || !n) throw "Please provide file name and url";
                        var s = new t.File(e, null, i);
                        if (r)
                            for (var o in r) s.attributes.metaData[o] || (s.attributes.metaData[o] = r[o]);
                        return s.attributes.url = n, s.attributes.metaData.__source = "external", s }, t.File.createWithoutData = function(e) {
                        var n = new t.File;
                        return n.id = e, n }, t.File.prototype = { toJSON: function() {
                            return t._encode(this) }, getACL: function() {
                            return this._acl }, setACL: function(e) {
                            return e instanceof t.ACL ? void(this._acl = e) : new o(o.OTHER_CAUSE, "ACL must be a AV.ACL.") }, name: function() {
                            return this.get("name") }, url: function() {
                            return this.get("url") }, get: function(e) {
                            switch (e) {
                                case "objectId":
                                    return this.id;
                                default:
                                    return void 0 === this.attributes[e] ? this.attributes.metaData[e] : this.attributes[e] } }, set: function m() {
                            var e = this,
                                m = function(t, n) {
                                    switch (t) {
                                        case "name":
                                        case "url":
                                        case "base64":
                                        case "metaData":
                                            e.attributes[t] = n;
                                            break;
                                        default:
                                            e.attributes.metaData[t] = n } };
                            switch (arguments.length) {
                                case 1:
                                    for (var t in arguments.length <= 0 ? void 0 : arguments[0]) m(t, (arguments.length <= 0 ? void 0 : arguments[0])[t]);
                                    break;
                                case 2:
                                    m(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1]) } }, metaData: function(e, t) {
                            return e && t ? (this.attributes.metaData[e] = t, this) : e && !t ? this.attributes.metaData[e] : this.attributes.metaData }, thumbnailURL: function(e, t, n, r, i) {
                            var s = this.attributes.url;
                            if (!s) throw new Error("Invalid url.");
                            if (!e || !t || 0 >= e || 0 >= t) throw new Error("Invalid width or height value.");
                            if (n = n || 100, r = r ? r : !0, 0 >= n || n > 100) throw new Error("Invalid quality value.");
                            i = i || "png";
                            var o = r ? 2 : 1;
                            return s + "?imageView/" + o + "/w/" + e + "/h/" + t + "/q/" + n + "/format/" + i }, size: function() {
                            return this.metaData().size }, ownerId: function() {
                            return this.metaData().owner }, destroy: function(e) {
                            if (!this.id) return t.Promise.error("The file id is not eixsts.")._thenRunCallbacks(e);
                            var n = a("files", null, this.id, "DELETE", e && e.sessionToken);
                            return n._thenRunCallbacks(e) }, _fileToken: function(e) {
                            var t = arguments.length <= 1 || void 0 === arguments[1] ? "fileTokens" : arguments[1],
                                n = this.attributes.name,
                                r = c(n),
                                i = function() {
                                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) },
                                s = i() + i() + i() + i() + i() + r,
                                o = { key: s, ACL: this._acl, name: n, mime_type: e, metaData: this.attributes.metaData };
                            return e && !this.attributes.metaData.mime_type && (this.attributes.metaData.mime_type = e), this._qiniu_key = s, a(t, null, null, "POST", o) }, save: function() {
                            var e = this;
                            if (this.id) throw new Error("File already saved. If you want to manipulate a file, use AV.Query to get it.");
                            var t = void 0,
                                r = {};
                            switch (arguments.length) {
                                case 1:
                                    t = arguments.length <= 0 ? void 0 : arguments[0];
                                    break;
                                case 2:
                                    r = arguments.length <= 0 ? void 0 : arguments[0], t = arguments.length <= 1 ? void 0 : arguments[1] }
                            if (!this._previousSave) {
                                var o = d();
                                if (this._source && o) this._previousSave = this._source.then(function(t, n) {
                                    return e._fileToken(n)["catch"](function() {
                                        return e._fileToken(n, "qiniu") }).then(function(n) {
                                        var o = void 0;
                                        return o = "qcloud" === n.provider ? i(n, t, e, r) : s(n, t, e, r), o["catch"](function(t) {
                                            throw e.destroy(), t }) }) });
                                else if (this.attributes.url && "external" === this.attributes.metaData.__source) {
                                    var u = { name: this.attributes.name, ACL: this._acl, metaData: this.attributes.metaData, mime_type: this._guessedType, url: this.attributes.url };
                                    this._previousSave = a("files", this.attributes.name, null, "post", u).then(function(t) {
                                        return e.attributes.name = t.name, e.attributes.url = t.url, e.id = t.objectId, t.size && (e.attributes.metaData.size = t.size), e }) } else o || (this._previousSave = this._source.then(function(t, r) {
                                    var i = { base64: "", _ContentType: r, ACL: e._acl, mime_type: r, metaData: e.attributes.metaData };
                                    return e.attributes.base64 ? (i.base64 = e.attributes.base64, a("files", e.attributes.name, null, "POST", i)) : "undefined" != typeof n.Buffer && n.Buffer.isBuffer(t) ? (i.base64 = t.toString("base64"), a("files", e.attributes.name, null, "POST", i)) : _(t).then(function(e) {
                                        return i.base64 = e, a("files", this.attributes.name, null, "POST", i) }) }).then(function(t) {
                                    return e.attributes.name = t.name, e.attributes.url = t.url, e.id = t.objectId, t.size && (e.attributes.metaData.size = t.size), e })) }
                            return this._previousSave._thenRunCallbacks(t) }, fetch: function() {
                            var e = this,
                                n = null,
                                i = {};
                            1 === arguments.length ? n = arguments[0] : 2 === arguments.length && (i = arguments[0], n = arguments[1]);
                            var s = a("files", null, this.id, "GET", i);
                            return s.then(function(n) {
                                var i = t.Object.prototype.parse(n);
                                return i.attributes = { name: i.name, url: i.url }, i.attributes.metaData = i.metaData || {}, delete i.objectId, delete i.metaData, delete i.url, delete i.name, r.extend(e, i), e })._thenRunCallbacks(n) } } } }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { "./browserify-wrapper/parse-base64": 21, "./error": 24, "./request": 36, "./uploader/cos": 40, "./uploader/qiniu": 41, underscore: 17 }],
        27: [function(e, t, n) {
            var r = e("underscore");
            t.exports = function(e) { e.GeoPoint = function(t, n) { r.isArray(t) ? (e.GeoPoint._validate(t[0], t[1]), this.latitude = t[0], this.longitude = t[1]) : r.isObject(t) ? (e.GeoPoint._validate(t.latitude, t.longitude), this.latitude = t.latitude, this.longitude = t.longitude) : r.isNumber(t) && r.isNumber(n) ? (e.GeoPoint._validate(t, n), this.latitude = t, this.longitude = n) : (this.latitude = 0, this.longitude = 0);
                    var i = this;
                    this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, this._longitude = this.longitude, this.__defineGetter__("latitude", function() {
                        return i._latitude }), this.__defineGetter__("longitude", function() {
                        return i._longitude }), this.__defineSetter__("latitude", function(t) { e.GeoPoint._validate(t, i.longitude), i._latitude = t }), this.__defineSetter__("longitude", function(t) { e.GeoPoint._validate(i.latitude, t), i._longitude = t })) }, e.GeoPoint._validate = function(e, t) {
                    if (-90 > e) throw "AV.GeoPoint latitude " + e + " < -90.0.";
                    if (e > 90) throw "AV.GeoPoint latitude " + e + " > 90.0.";
                    if (-180 > t) throw "AV.GeoPoint longitude " + t + " < -180.0.";
                    if (t > 180) throw "AV.GeoPoint longitude " + t + " > 180.0." }, e.GeoPoint.current = function(t) {
                    var n = new e.Promise;
                    return navigator.geolocation.getCurrentPosition(function(t) { n.resolve(new e.GeoPoint({ latitude: t.coords.latitude, longitude: t.coords.longitude })) }, function(e) { n.reject(e) }), n._thenRunCallbacks(t) }, e.GeoPoint.prototype = { toJSON: function() {
                        return e.GeoPoint._validate(this.latitude, this.longitude), { __type: "GeoPoint", latitude: this.latitude, longitude: this.longitude } }, radiansTo: function(e) {
                        var t = Math.PI / 180,
                            n = this.latitude * t,
                            r = this.longitude * t,
                            i = e.latitude * t,
                            s = e.longitude * t,
                            o = n - i,
                            a = r - s,
                            u = Math.sin(o / 2),
                            c = Math.sin(a / 2),
                            l = u * u + Math.cos(n) * Math.cos(i) * c * c;
                        return l = Math.min(1, l), 2 * Math.asin(Math.sqrt(l)) }, kilometersTo: function(e) {
                        return 6371 * this.radiansTo(e) }, milesTo: function(e) {
                        return 3958.8 * this.radiansTo(e) } } } }, { underscore: 17 }],
        28: [function(e, t, n) {
            var r = e("underscore"),
                i = e("./error"),
                s = e("./request").request;
            t.exports = function(e) { e.Insight = e.Insight || {}, r.extend(e.Insight, { startJob: function(t, n) {
                        if (!t || !t.sql) throw new Error("Please provide the sql to run the job.");
                        var r = { jobConfig: t, appId: e.applicationId },
                            i = s("bigquery", "jobs", null, "POST", e._encode(r, null, !0));
                        return i.then(function(t) {
                            return e._decode(null, t).id })._thenRunCallbacks(n) }, on: function(e, t) {} }), e.Insight.JobQuery = function(e, t) {
                    if (!e) throw new Error("Please provide the job id.");
                    this.id = e, this.className = t, this._skip = 0, this._limit = 100 }, e.Insight.JobQuery.prototype = { skip: function(e) {
                        return this._skip = e, this }, limit: function(e) {
                        return this._limit = e, this }, find: function(t) {
                        var n = { skip: this._skip, limit: this._limit },
                            r = s("bigquery", "jobs", this.id, "GET", n);
                        return r.then(function(t) {
                            return t.error ? e.Promise.error(new i(t.code, t.error)) : e.Promise.as(t) })._thenRunCallbacks(t) } } } }, { "./error": 24, "./request": 36, underscore: 17 }],
        29: [function(e, t, n) {
            var r = e("underscore"),
                i = e("./promise"),
                s = e("./browserify-wrapper/localStorage"),
                o = ["getItem", "setItem", "removeItem", "clear"];
            s.async ? r(o).each(function(e) { "function" != typeof s[e] && (s[e] = function() {
                    throw new Error("Synchronous API [" + e + "] is not available in this runtime.") }) }) : r(o).each(function(e) { "function" == typeof s[e] && (s[e + "Async"] = function() {
                    return i.as(s[e].apply(s, arguments)) }) }), t.exports = s }, { "./browserify-wrapper/localStorage": 20, "./promise": 32, underscore: 17 }],
        30: [function(e, t, n) {
            var r = e("underscore"),
                i = e("./error"),
                s = e("./request").request,
                o = e("./utils");
            t.exports = function(e) {
                e.Object = function(t, n) {
                    if (r.isString(t)) return e.Object._create.apply(this, arguments);
                    t = t || {}, n && n.parse && (t = this.parse(t));
                    var i = e._getValue(this, "defaults");
                    if (i && (t = r.extend({}, i, t)), n && n.collection && (this.collection = n.collection), this._serverData = {}, this._opSetQueue = [{}], this.attributes = {}, this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = r.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, !this.set(t, { silent: !0 })) throw new Error("Can't create an invalid AV.Object");
                    this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, this._previousAttributes = r.clone(this.attributes), this.initialize.apply(this, arguments) }, e.Object.saveAll = function(t, n) {
                    return e.Object._deepSaveAsync(t, null, n)._thenRunCallbacks(n)
                }, r.extend(e.Object.prototype, e.Events, { _fetchWhenSave: !1, initialize: function() {}, fetchWhenSave: function(e) {
                        if (console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."), !r.isBoolean(e)) throw "Expect boolean value for fetchWhenSave";
                        this._fetchWhenSave = e }, getObjectId: function() {
                        return this.id }, getCreatedAt: function() {
                        return this.createdAt || this.get("createdAt") }, getUpdatedAt: function() {
                        return this.updatedAt || this.get("updatedAt") }, toJSON: function() {
                        var t = this._toFullJSON();
                        return e._arrayEach(["__type", "className"], function(e) { delete t[e] }), t }, _toFullJSON: function(t) {
                        var n = r.clone(this.attributes);
                        return e._objectEach(n, function(r, i) { n[i] = e._encode(r, t) }), e._objectEach(this._operations, function(e, t) { n[t] = e }), r.has(this, "id") && (n.objectId = this.id), r.has(this, "createdAt") && (r.isDate(this.createdAt) ? n.createdAt = this.createdAt.toJSON() : n.createdAt = this.createdAt), r.has(this, "updatedAt") && (r.isDate(this.updatedAt) ? n.updatedAt = this.updatedAt.toJSON() : n.updatedAt = this.updatedAt), n.__type = "Object", n.className = this.className, n }, _refreshCache: function() {
                        var t = this;
                        t._refreshingCache || (t._refreshingCache = !0, e._objectEach(this.attributes, function(n, i) { n instanceof e.Object ? n._refreshCache() : r.isObject(n) && t._resetCacheForKey(i) && t.set(i, new e.Op.Set(n), { silent: !0 }) }), delete t._refreshingCache) }, dirty: function(e) { this._refreshCache();
                        var t = r.last(this._opSetQueue);
                        return e ? t[e] ? !0 : !1 : this.id ? r.keys(t).length > 0 ? !0 : !1 : !0 }, _toPointer: function() {
                        return { __type: "Pointer", className: this.className, objectId: this.id } }, get: function(e) {
                        switch (e) {
                            case "objectId":
                                return this.id;
                            default:
                                return void 0 === this.attributes[e] ? this[e] : this.attributes[e] } }, relation: function(t) {
                        var n = this.get(t);
                        if (n) {
                            if (!(n instanceof e.Relation)) throw "Called relation() on non-relation field " + t;
                            return n._ensureParentAndKey(this, t), n }
                        return new e.Relation(this, t) }, escape: function(e) {
                        var t = this._escapedAttributes[e];
                        if (t) return t;
                        var n, i = this.attributes[e];
                        return n = o.isNullOrUndefined(i) ? "" : r.escape(i.toString()), this._escapedAttributes[e] = n, n }, has: function(e) {
                        return !o.isNullOrUndefined(this.attributes[e]) }, _mergeMagicFields: function(t) {
                        var n = this,
                            i = ["id", "objectId", "createdAt", "updatedAt"];
                        e._arrayEach(i, function(i) { t[i] && ("objectId" === i ? n.id = t[i] : "createdAt" !== i && "updatedAt" !== i || r.isDate(t[i]) ? n[i] = t[i] : n[i] = e._parseDate(t[i]), delete t[i]) }) }, _startSave: function() { this._opSetQueue.push({}) }, _cancelSave: function() {
                        var t = r.first(this._opSetQueue);
                        this._opSetQueue = r.rest(this._opSetQueue);
                        var n = r.first(this._opSetQueue);
                        e._objectEach(t, function(e, r) {
                            var i = t[r],
                                s = n[r];
                            i && s ? n[r] = s._mergeWithPrevious(i) : i && (n[r] = i) }), this._saving = this._saving - 1 }, _finishSave: function(t) {
                        var n = {};
                        e._traverse(this.attributes, function(t) { t instanceof e.Object && t.id && t._hasData && (n[t.id] = t) });
                        var i = r.first(this._opSetQueue);
                        this._opSetQueue = r.rest(this._opSetQueue), this._applyOpSet(i, this._serverData), this._mergeMagicFields(t);
                        var s = this;
                        e._objectEach(t, function(t, r) { s._serverData[r] = e._decode(r, t);
                            var i = e._traverse(s._serverData[r], function(t) {
                                return t instanceof e.Object && n[t.id] ? n[t.id] : void 0 });
                            i && (s._serverData[r] = i) }), this._rebuildAllEstimatedData(), this._saving = this._saving - 1 }, _finishFetch: function(t, n) { this._opSetQueue = [{}], this._mergeMagicFields(t);
                        var r = this;
                        e._objectEach(t, function(t, n) { r._serverData[n] = e._decode(n, t) }), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [{}], this._hasData = n }, _applyOpSet: function(t, n) {
                        var r = this;
                        e._objectEach(t, function(t, i) { n[i] = t._estimate(n[i], r, i), n[i] === e.Op._UNSET && delete n[i] }) }, _resetCacheForKey: function(t) {
                        var n = this.attributes[t];
                        if (r.isObject(n) && !(n instanceof e.Object) && !(n instanceof e.File)) { n = n.toJSON ? n.toJSON() : n;
                            var i = JSON.stringify(n);
                            if (this._hashedJSON[t] !== i) {
                                var s = !!this._hashedJSON[t];
                                return this._hashedJSON[t] = i, s } }
                        return !1 }, _rebuildEstimatedDataForKey: function(t) {
                        var n = this;
                        delete this.attributes[t], this._serverData[t] && (this.attributes[t] = this._serverData[t]), e._arrayEach(this._opSetQueue, function(r) {
                            var i = r[t];
                            i && (n.attributes[t] = i._estimate(n.attributes[t], n, t), n.attributes[t] === e.Op._UNSET ? delete n.attributes[t] : n._resetCacheForKey(t)) }) }, _rebuildAllEstimatedData: function() {
                        var t = this,
                            n = r.clone(this.attributes);
                        this.attributes = r.clone(this._serverData), e._arrayEach(this._opSetQueue, function(n) { t._applyOpSet(n, t.attributes), e._objectEach(n, function(e, n) { t._resetCacheForKey(n) }) }), e._objectEach(n, function(e, n) { t.attributes[n] !== e && t.trigger("change:" + n, t, t.attributes[n], {}) }), e._objectEach(this.attributes, function(e, i) { r.has(n, i) || t.trigger("change:" + i, t, e, {}) }) }, set: function(t, n, i) {
                        var s;
                        if (r.isObject(t) || o.isNullOrUndefined(t) ? (s = t, e._objectEach(s, function(t, n) { s[n] = e._decode(n, t) }), i = n) : (s = {}, s[t] = e._decode(t, n)), i = i || {}, !s) return this;
                        s instanceof e.Object && (s = s.attributes), i.unset && e._objectEach(s, function(t, n) { s[n] = new e.Op.Unset });
                        var a = r.clone(s),
                            u = this;
                        if (e._objectEach(a, function(t, n) { t instanceof e.Op && (a[n] = t._estimate(u.attributes[n], u, n), a[n] === e.Op._UNSET && delete a[n]) }), !this._validate(s, i)) return !1;
                        this._mergeMagicFields(s), i.changes = {};
                        var c = this._escapedAttributes;
                        this._previousAttributes || {};
                        return e._arrayEach(r.keys(s), function(t) {
                            var n = s[t];
                            n instanceof e.Relation && (n.parent = u), n instanceof e.Op || (n = new e.Op.Set(n));
                            var o = !0;
                            n instanceof e.Op.Set && r.isEqual(u.attributes[t], n.value) && (o = !1), o && (delete c[t], i.silent ? u._silent[t] = !0 : i.changes[t] = !0);
                            var a = r.last(u._opSetQueue);
                            a[t] = n._mergeWithPrevious(a[t]), u._rebuildEstimatedDataForKey(t), o ? (u.changed[t] = u.attributes[t], i.silent || (u._pending[t] = !0)) : (delete u.changed[t], delete u._pending[t]) }), i.silent || this.change(i), this }, unset: function(e, t) {
                        return t = t || {}, t.unset = !0, this.set(e, null, t) }, increment: function(t, n) {
                        return (r.isUndefined(n) || r.isNull(n)) && (n = 1), this.set(t, new e.Op.Increment(n)) }, add: function(t, n) {
                        return this.set(t, new e.Op.Add([n])) }, addUnique: function(t, n) {
                        return this.set(t, new e.Op.AddUnique([n])) }, remove: function(t, n) {
                        return this.set(t, new e.Op.Remove([n])) }, op: function(e) {
                        return r.last(this._opSetQueue)[e] }, clear: function(e) { e = e || {}, e.unset = !0;
                        var t = r.extend(this.attributes, this._operations);
                        return this.set(t, e) }, _getSaveJSON: function() {
                        var t = r.clone(r.first(this._opSetQueue));
                        return e._objectEach(t, function(e, n) { t[n] = e.toJSON() }), t }, _canBeSerialized: function() {
                        return e.Object._canBeSerializedAsValue(this.attributes) }, fetch: function() {
                        var e = {},
                            t = {};
                        1 === arguments.length ? e = arguments[0] : 2 === arguments.length && (t = arguments[0], e = arguments[1] || {}), t && t.include && r.isArray(t.include) && (t.include = t.include.join(","));
                        var n = this,
                            i = s("classes", this.className, this.id, "GET", t, e.sessionToken);
                        return i.then(function(e) {
                            return n._finishFetch(n.parse(e), !0), n })._thenRunCallbacks(e, this) }, save: function(t, n, i) {
                        var a, u, c;
                        if (r.isObject(t) || o.isNullOrUndefined(t) ? (a = t, c = n) : (a = {}, a[t] = n, c = i), !c && a) {
                            var l = r.reject(a, function(e, t) {
                                return r.include(["success", "error", "wait"], t) });
                            if (0 === l.length) {
                                var h = !0;
                                if (r.has(a, "success") && !r.isFunction(a.success) && (h = !1), r.has(a, "error") && !r.isFunction(a.error) && (h = !1), h) return this.save(null, a) } }
                        c = r.clone(c) || {}, c.wait && (u = r.clone(this.attributes));
                        var f = r.clone(c) || {};
                        f.wait && (f.silent = !0);
                        var d;
                        if (f.error = function(e, t) { d = t }, a && !this.set(a, f)) return e.Promise.error(d)._thenRunCallbacks(c, this);
                        var p = this;
                        p._refreshCache();
                        var _ = [],
                            m = [];
                        return e.Object._findUnsavedChildren(p.attributes, _, m), _.length + m.length > 0 ? e.Object._deepSaveAsync(this.attributes, p, c).then(function() {
                            return p.save(null, c) }, function(t) {
                            return e.Promise.error(t)._thenRunCallbacks(c, p) }) : (this._startSave(), this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || e.Promise.as(), this._allPreviousSaves = this._allPreviousSaves._continueWith(function() {
                            var t = p.id ? "PUT" : "POST",
                                n = p._getSaveJSON();
                            if (p._fetchWhenSave && (n._fetchWhenSave = !0), c.fetchWhenSave && (n._fetchWhenSave = !0), c.query) {
                                var i;
                                if ("function" == typeof c.query.toJSON && (i = c.query.toJSON(), i && (n._where = i.where)), !n._where) {
                                    var o = new Error("options.query is not an AV.Query");
                                    return e.Promise.error(o)._thenRunCallbacks(c, p) } }
                            var l = "classes",
                                h = p.className; "_User" !== p.className || p.id || (l = "users", h = null);
                            var d = c._makeRequest || s,
                                _ = d(l, h, p.id, t, n, c.sessionToken);
                            return _ = _.then(function(e) {
                                var t = p.parse(e);
                                return c.wait && (t = r.extend(a || {}, t)), p._finishSave(t), c.wait && p.set(u, f), p }, function(t) {
                                return p._cancelSave(), e.Promise.error(t) })._thenRunCallbacks(c, p) }), this._allPreviousSaves) }, destroy: function(e) { e = e || {};
                        var t = this,
                            n = function() { t.trigger("destroy", t, t.collection, e) };
                        if (!this.id) return n();
                        e.wait || n();
                        var r = s("classes", this.className, this.id, "DELETE", null, e.sessionToken);
                        return r.then(function() {
                            return e.wait && n(), t })._thenRunCallbacks(e, this) }, parse: function(t) {
                        var n = r.clone(t);
                        return r(["createdAt", "updatedAt"]).each(function(t) { n[t] && (n[t] = e._parseDate(n[t])) }), n.updatedAt || (n.updatedAt = n.createdAt), n }, clone: function() {
                        return new this.constructor(this.attributes) }, isNew: function() {
                        return !this.id }, change: function(t) { t = t || {};
                        var n = this._changing;
                        this._changing = !0;
                        var i = this;
                        e._objectEach(this._silent, function(e) { i._pending[e] = !0 });
                        var s = r.extend({}, t.changes, this._silent);
                        if (this._silent = {}, e._objectEach(s, function(e, n) { i.trigger("change:" + n, i, i.get(n), t) }), n) return this;
                        for (var o = function(e, t) { i._pending[t] || i._silent[t] || delete i.changed[t] }; !r.isEmpty(this._pending);) this._pending = {}, this.trigger("change", this, t), e._objectEach(this.changed, o), i._previousAttributes = r.clone(this.attributes);
                        return this._changing = !1, this }, existed: function() {
                        return console.warn("AV.Object.prototype.existed() is deprecated."), !1 }, hasChanged: function(e) {
                        return arguments.length ? this.changed && r.has(this.changed, e) : !r.isEmpty(this.changed) }, changedAttributes: function(t) {
                        if (!t) return this.hasChanged() ? r.clone(this.changed) : !1;
                        var n = {},
                            i = this._previousAttributes;
                        return e._objectEach(t, function(e, t) { r.isEqual(i[t], e) || (n[t] = e) }), n }, previous: function(e) {
                        return arguments.length && this._previousAttributes ? this._previousAttributes[e] : null }, previousAttributes: function() {
                        return r.clone(this._previousAttributes) }, isValid: function() {
                        return !this.validate(this.attributes) }, validate: function(t, n) {
                        return !r.has(t, "ACL") || t.ACL instanceof e.ACL ? !1 : new i(i.OTHER_CAUSE, "ACL must be a AV.ACL.") }, _validate: function(e, t) {
                        if (t.silent || !this.validate) return !0;
                        e = r.extend({}, this.attributes, e);
                        var n = this.validate(e, t);
                        return n ? (t && t.error ? t.error(this, n, t) : this.trigger("error", this, n, t), !1) : !0 }, getACL: function() {
                        return this.get("ACL") }, setACL: function(e, t) {
                        return this.set("ACL", e, t) } }), e.Object.createWithoutData = function(t, n, r) {
                    var i = new e.Object(t);
                    return i.id = n, i._hasData = r, i }, e.Object.destroyAll = function(t, n) {
                    if (n = n || {}, !t || 0 === t.length) return e.Promise.as()._thenRunCallbacks(n);
                    var r = t[0].className,
                        i = "",
                        o = !0;
                    t.forEach(function(e) {
                        if (e.className != r) throw "AV.Object.destroyAll requires the argument object array's classNames must be the same";
                        if (!e.id) throw "Could not delete unsaved object";
                        o ? (i = e.id, o = !1) : i = i + "," + e.id });
                    var a = s("classes", r, i, "DELETE", null, n.sessionToken);
                    return a._thenRunCallbacks(n) }, e.Object._getSubclass = function(t) {
                    if (!r.isString(t)) throw "AV.Object._getSubclass requires a string argument.";
                    var n = e.Object._classMap[t];
                    return n || (n = e.Object.extend(t), e.Object._classMap[t] = n), n }, e.Object._create = function(t, n, r) {
                    var i = e.Object._getSubclass(t);
                    return new i(n, r) }, e.Object._classMap = {}, e.Object._extend = e._extend, e.Object["new"] = function(t, n) {
                    return new e.Object(t, n) }, e.Object.extend = function(t, n, i) {
                    if (!r.isString(t)) {
                        if (t && r.has(t, "className")) return e.Object.extend(t.className, t, n);
                        throw new Error("AV.Object.extend's first argument should be the className.") } "User" === t && (t = "_User");
                    var s = null;
                    if (r.has(e.Object._classMap, t)) {
                        var o = e.Object._classMap[t];
                        s = o._extend(n, i) } else n = n || {}, n.className = t, s = this._extend(n, i);
                    return s.extend = function(n) {
                        if (r.isString(n) || n && r.has(n, "className")) return e.Object.extend.apply(s, arguments);
                        var i = [t].concat(r.toArray(arguments));
                        return e.Object.extend.apply(s, i) }, s["new"] = function(e, t) {
                        return new s(e, t) }, e.Object._classMap[t] = s, s }, e.Object._findUnsavedChildren = function(t, n, r) { e._traverse(t, function(t) {
                        return t instanceof e.Object ? (t._refreshCache(), void(t.dirty() && n.push(t))) : t instanceof e.File ? void(t.url() || t.id || r.push(t)) : void 0 }) }, e.Object._canBeSerializedAsValue = function(t) {
                    var n = !0;
                    return t instanceof e.Object || t instanceof e.File ? n = !!t.id : r.isArray(t) ? e._arrayEach(t, function(t) { e.Object._canBeSerializedAsValue(t) || (n = !1) }) : r.isObject(t) && e._objectEach(t, function(t) { e.Object._canBeSerializedAsValue(t) || (n = !1) }), n }, e.Object._deepSaveAsync = function(t, n, o) {
                    var a = [],
                        u = [];
                    e.Object._findUnsavedChildren(t, a, u), n && (a = r.filter(a, function(e) {
                        return e != n }));
                    var c = e.Promise.as();
                    r.each(u, function(e) { c = c.then(function() {
                            return e.save() }) });
                    var l = r.uniq(a),
                        h = r.uniq(l);
                    return c.then(function() {
                        return e.Promise._continueWhile(function() {
                            return h.length > 0 }, function() {
                            var t = [],
                                n = [];
                            if (e._arrayEach(h, function(e) {
                                    return t.length > 20 ? void n.push(e) : void(e._canBeSerialized() ? t.push(e) : n.push(e)) }), h = n, 0 === t.length) return e.Promise.error(new i(i.OTHER_CAUSE, "Tried to save a batch with a cycle."));
                            var a = e.Promise.when(r.map(t, function(t) {
                                    return t._allPreviousSaves || e.Promise.as() })),
                                u = new e.Promise;
                            return e._arrayEach(t, function(e) { e._allPreviousSaves = u }), a._continueWith(function() {
                                return s("batch", null, null, "POST", { requests: r.map(t, function(e) {
                                        var t = e._getSaveJSON(),
                                            n = "POST",
                                            r = "/1.1/classes/" + e.className;
                                        return e.id && (r = r + "/" + e.id, n = "PUT"), e._startSave(), { method: n, path: r, body: t } }) }, o && o.sessionToken).then(function(n) {
                                    var r;
                                    return e._arrayEach(t, function(e, t) { n[t].success ? e._finishSave(e.parse(n[t].success)) : (r = r || n[t].error, e._cancelSave()) }), r ? e.Promise.error(new i(r.code, r.error)) : void 0 }).then(function(e) {
                                    return u.resolve(e), e }, function(t) {
                                    return u.reject(t), e.Promise.error(t) }) }) }) }).then(function() {
                        return t }) }
            }
        }, { "./error": 24, "./request": 36, "./utils": 43, underscore: 17 }],
        31: [function(e, t, n) {
            var r = e("underscore");
            t.exports = function(e) { e.Op = function() { this._initialize.apply(this, arguments) }, e.Op.prototype = { _initialize: function() {} }, r.extend(e.Op, { _extend: e._extend, _opDecoderMap: {}, _registerDecoder: function(t, n) { e.Op._opDecoderMap[t] = n }, _decode: function(t) {
                        var n = e.Op._opDecoderMap[t.__op];
                        return n ? n(t) : void 0 } }), e.Op._registerDecoder("Batch", function(t) {
                    var n = null;
                    return e._arrayEach(t.ops, function(t) { t = e.Op._decode(t), n = t._mergeWithPrevious(n) }), n }), e.Op.Set = e.Op._extend({ _initialize: function(e) { this._value = e }, value: function() {
                        return this._value }, toJSON: function() {
                        return e._encode(this.value()) }, _mergeWithPrevious: function(e) {
                        return this }, _estimate: function(e) {
                        return this.value() } }), e.Op._UNSET = {}, e.Op.Unset = e.Op._extend({ toJSON: function() {
                        return { __op: "Delete" } }, _mergeWithPrevious: function(e) {
                        return this }, _estimate: function(t) {
                        return e.Op._UNSET } }), e.Op._registerDecoder("Delete", function(t) {
                    return new e.Op.Unset }), e.Op.Increment = e.Op._extend({ _initialize: function(e) { this._amount = e }, amount: function() {
                        return this._amount }, toJSON: function() {
                        return { __op: "Increment", amount: this._amount } }, _mergeWithPrevious: function(t) {
                        if (t) {
                            if (t instanceof e.Op.Unset) return new e.Op.Set(this.amount());
                            if (t instanceof e.Op.Set) return new e.Op.Set(t.value() + this.amount());
                            if (t instanceof e.Op.Increment) return new e.Op.Increment(this.amount() + t.amount());
                            throw "Op is invalid after previous op." }
                        return this }, _estimate: function(e) {
                        return e ? e + this.amount() : this.amount() } }), e.Op._registerDecoder("Increment", function(t) {
                    return new e.Op.Increment(t.amount) }), e.Op.Add = e.Op._extend({ _initialize: function(e) { this._objects = e }, objects: function() {
                        return this._objects }, toJSON: function() {
                        return { __op: "Add", objects: e._encode(this.objects()) } }, _mergeWithPrevious: function(t) {
                        if (t) {
                            if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
                            if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
                            if (t instanceof e.Op.Add) return new e.Op.Add(t.objects().concat(this.objects()));
                            throw "Op is invalid after previous op." }
                        return this }, _estimate: function(e) {
                        return e ? e.concat(this.objects()) : r.clone(this.objects()) } }), e.Op._registerDecoder("Add", function(t) {
                    return new e.Op.Add(e._decode(void 0, t.objects)) }), e.Op.AddUnique = e.Op._extend({ _initialize: function(e) { this._objects = r.uniq(e) }, objects: function() {
                        return this._objects }, toJSON: function() {
                        return { __op: "AddUnique", objects: e._encode(this.objects()) } }, _mergeWithPrevious: function(t) {
                        if (t) {
                            if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
                            if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
                            if (t instanceof e.Op.AddUnique) return new e.Op.AddUnique(this._estimate(t.objects()));
                            throw "Op is invalid after previous op." }
                        return this }, _estimate: function(t) {
                        if (t) {
                            var n = r.clone(t);
                            return e._arrayEach(this.objects(), function(t) {
                                if (t instanceof e.Object && t.id) {
                                    var i = r.find(n, function(n) {
                                        return n instanceof e.Object && n.id === t.id });
                                    if (i) {
                                        var s = r.indexOf(n, i);
                                        n[s] = t } else n.push(t) } else r.contains(n, t) || n.push(t) }), n }
                        return r.clone(this.objects()) } }), e.Op._registerDecoder("AddUnique", function(t) {
                    return new e.Op.AddUnique(e._decode(void 0, t.objects)) }), e.Op.Remove = e.Op._extend({ _initialize: function(e) { this._objects = r.uniq(e) }, objects: function() {
                        return this._objects }, toJSON: function() {
                        return { __op: "Remove", objects: e._encode(this.objects()) } }, _mergeWithPrevious: function(t) {
                        if (t) {
                            if (t instanceof e.Op.Unset) return t;
                            if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
                            if (t instanceof e.Op.Remove) return new e.Op.Remove(r.union(t.objects(), this.objects()));
                            throw "Op is invalid after previous op." }
                        return this }, _estimate: function(t) {
                        if (t) {
                            var n = r.difference(t, this.objects());
                            return e._arrayEach(this.objects(), function(t) { t instanceof e.Object && t.id && (n = r.reject(n, function(n) {
                                    return n instanceof e.Object && n.id === t.id })) }), n }
                        return [] } }), e.Op._registerDecoder("Remove", function(t) {
                    return new e.Op.Remove(e._decode(void 0, t.objects)) }), e.Op.Relation = e.Op._extend({ _initialize: function(t, n) { this._targetClassName = null;
                        var i = this,
                            s = function(t) {
                                if (t instanceof e.Object) {
                                    if (!t.id) throw "You can't add an unsaved AV.Object to a relation.";
                                    if (i._targetClassName || (i._targetClassName = t.className), i._targetClassName !== t.className) throw "Tried to create a AV.Relation with 2 different types: " + i._targetClassName + " and " + t.className + ".";
                                    return t.id }
                                return t };
                        this.relationsToAdd = r.uniq(r.map(t, s)), this.relationsToRemove = r.uniq(r.map(n, s)) }, added: function() {
                        var t = this;
                        return r.map(this.relationsToAdd, function(n) {
                            var r = e.Object._create(t._targetClassName);
                            return r.id = n, r }) }, removed: function() {
                        var t = this;
                        return r.map(this.relationsToRemove, function(n) {
                            var r = e.Object._create(t._targetClassName);
                            return r.id = n, r }) }, toJSON: function() {
                        var e = null,
                            t = null,
                            n = this,
                            i = function(e) {
                                return { __type: "Pointer", className: n._targetClassName, objectId: e } },
                            s = null;
                        return this.relationsToAdd.length > 0 && (s = r.map(this.relationsToAdd, i), e = { __op: "AddRelation", objects: s }), this.relationsToRemove.length > 0 && (s = r.map(this.relationsToRemove, i), t = { __op: "RemoveRelation", objects: s }), e && t ? { __op: "Batch", ops: [e, t] } : e || t || {} }, _mergeWithPrevious: function(t) {
                        if (t) {
                            if (t instanceof e.Op.Unset) throw "You can't modify a relation after deleting it.";
                            if (t instanceof e.Op.Relation) {
                                if (t._targetClassName && t._targetClassName !== this._targetClassName) throw "Related object must be of class " + t._targetClassName + ", but " + this._targetClassName + " was passed in.";
                                var n = r.union(r.difference(t.relationsToAdd, this.relationsToRemove), this.relationsToAdd),
                                    i = r.union(r.difference(t.relationsToRemove, this.relationsToAdd), this.relationsToRemove),
                                    s = new e.Op.Relation(n, i);
                                return s._targetClassName = this._targetClassName, s }
                            throw "Op is invalid after previous op." }
                        return this }, _estimate: function(t, n, r) {
                        if (t) {
                            if (t instanceof e.Relation) {
                                if (this._targetClassName)
                                    if (t.targetClassName) {
                                        if (t.targetClassName !== this._targetClassName) throw "Related object must be a " + t.targetClassName + ", but a " + this._targetClassName + " was passed in." } else t.targetClassName = this._targetClassName;
                                return t }
                            throw "Op is invalid after previous op." }
                        var i = new e.Relation(n, r);
                        i.targetClassName = this._targetClassName } }), e.Op._registerDecoder("AddRelation", function(t) {
                    return new e.Op.Relation(e._decode(void 0, t.objects), []) }), e.Op._registerDecoder("RemoveRelation", function(t) {
                    return new e.Op.Relation([], e._decode(void 0, t.objects)) }) } }, { underscore: 17 }],
        32: [function(e, t, n) {
            (function(n) {
                var r = e("underscore"),
                    i = t.exports = function(e) { this._resolved = !1, this._rejected = !1, this._resolvedCallbacks = [], this._rejectedCallbacks = [], this.doResolve(e) },
                    s = function(e) {
                        return r.isNull(e) || r.isUndefined(e) },
                    o = !1; "undefined" != typeof n && n.versions && n.versions.node && (o = !0), r.extend(i, { _isPromisesAPlusCompliant: !o, _debugError: !1, setPromisesAPlusCompliant: function(e) { i._isPromisesAPlusCompliant = e }, setDebugError: function(e) { i._debugError = e }, is: function(e) {
                        return e && e.then && r.isFunction(e.then) }, as: function() {
                        var e = new i;
                        return arguments[0] && r.isFunction(arguments[0].then) ? arguments[0].then(function(t) { e.resolve.call(e, t) }, function(t) { e.reject.call(e, t) }) : e.resolve.apply(e, arguments), e }, error: function() {
                        var e = new i;
                        return e.reject.apply(e, arguments), e }, when: function(e) {
                        var t;
                        t = e && s(e.length) ? arguments : e;
                        var n = r.last(arguments);
                        n = r.isBoolean(n) ? n : !1;
                        var o = t.length,
                            a = !1,
                            u = [],
                            c = [];
                        if (u.length = t.length, c.length = t.length, 0 === o) return n ? i.as.call(this, u) : i.as.apply(this, u);
                        var l = new i,
                            h = function(e) {
                                return o -= 1, a && !l._rejected && n ? void l.reject.call(l, c[e]) : void(0 === o && (a && !l._rejected ? l.reject.call(l, c) : n ? l._rejected || l.resolve.call(l, u) : l.resolve.apply(l, u))) };
                        return r.each(t, function(e, t) { i.is(e) ? e.then(function(e) { u[t] = e, h(t) }, function(e) { c[t] = e, a = !0, h(t) }) : (u[t] = e, h(t)) }), l }, race: function(e) {
                        var t;
                        t = e && s(e.length) ? arguments : e;
                        var n = t.length,
                            o = !1,
                            a = [],
                            u = [];
                        if (a.length = u.length = t.length, 0 === n) return i.as.call(this);
                        var c = new i,
                            l = function(e) { c._resolved || c._rejected || (o ? c.reject.call(c, u[e]) : c.resolve.call(c, a[e])) };
                        return r.each(t, function(e, t) { i.is(e) ? e.then(function(e) { a[t] = e, l(t) }, function(e) { u[t] = e, o = !0, l(t) }) : (a[t] = e, l(t)) }), c }, _continueWhile: function(e, t) {
                        return e() ? t().then(function() {
                            return i._continueWhile(e, t) }) : i.as() } }), i.all = function(e) {
                    return i.when(e, !0) }, r.extend(i.prototype, { resolve: function(e) {
                        if (this._resolved || this._rejected) throw "A promise was resolved even though it had already been " + (this._resolved ? "resolved" : "rejected") + ".";
                        this._resolved = !0, this._result = arguments;
                        var t = arguments;
                        r.each(this._resolvedCallbacks, function(e) { e.apply(this, t) }), this._resolvedCallbacks = [], this._rejectedCallbacks = [] }, doResolve: function(e) {
                        if (e) {
                            var t = !1,
                                n = this;
                            try { e(function(e) { t || (t = !0, n.resolve.call(n, e)) }, function(e) { t || (t = !0, n.reject.call(n, e)) }) } catch (r) {
                                if (t) return;
                                t = !0, n.reject.call(n, r) } } }, reject: function(e) {
                        if (this._resolved || this._rejected) throw "A promise was rejected even though it had already been " + (this._resolved ? "resolved" : "rejected") + ".";
                        this._rejected = !0, this._error = e, r.each(this._rejectedCallbacks, function(t) { t(e) }), this._resolvedCallbacks = [], this._rejectedCallbacks = [] }, then: function(e, t) {
                        var s = new i,
                            o = function() {
                                var t = arguments;
                                if (e)
                                    if (i._isPromisesAPlusCompliant) try { t = [e.apply(this, t)] } catch (n) { i._debugError && n && console.error("Error occurred in promise resolve callback.", n.stack || n), t = [i.error(n)] } else t = [e.apply(this, t)];
                                1 === t.length && i.is(t[0]) ? t[0].then(function() { s.resolve.apply(s, arguments) }, function(e) { s.reject(e) }) : s.resolve.apply(s, t) },
                            a = function(e) {
                                var n = [];
                                if (t) {
                                    if (i._isPromisesAPlusCompliant) try { n = [t(e)] } catch (r) { i._debugError && r && console.error("Error occurred in promise reject callback.", r.stack || r), n = [i.error(r)] } else n = [t(e)];
                                    1 === n.length && i.is(n[0]) ? n[0].then(function() { s.resolve.apply(s, arguments) }, function(e) { s.reject(e) }) : i._isPromisesAPlusCompliant ? s.resolve.apply(s, n) : s.reject(n[0]) } else s.reject(e) },
                            u = function(e) { e.call() };
                        i._isPromisesAPlusCompliant && ("undefined" != typeof window && r.isFunction(window.setImmediate) ? u = function(e) { window.setImmediate(e) } : "undefined" != typeof n && n.nextTick ? u = function(e) { n.nextTick(e) } : "undefined" != typeof setTimeout && r.isFunction(setTimeout) && (u = function(e) { setTimeout(e, 0) }));
                        var c = this;
                        return this._resolved ? u(function() { o.apply(c, c._result) }) : this._rejected ? u(function() { a.apply(c, [c._error]) }) : (this._resolvedCallbacks.push(o), this._rejectedCallbacks.push(a)), s }, "catch": function(e) {
                        return this.then(void 0, e) }, always: function(e) {
                        return this.then(e, e) }, done: function(e) {
                        return this.then(e) }, fail: function(e) {
                        return this.then(null, e) }, _thenRunCallbacks: function(e, t) {
                        var n;
                        if (r.isFunction(e)) {
                            var s = e;
                            n = { success: function(e) { s(e, null) }, error: function(e) { s(null, e) } } } else n = r.clone(e);
                        return n = n || {}, this.then(function(e) {
                            return n.success ? n.success.apply(this, arguments) : t && t.trigger("sync", t, e, n), i.as.apply(i, arguments) }, function(e) {
                            return n.error ? r.isUndefined(t) ? n.error(e) : n.error(t, e) : t && t.trigger("error", t, e, n), i.error(e) }) }, _continueWith: function(e) {
                        return this.then(function() {
                            return e(arguments, null) }, function(t) {
                            return e(null, t) }) } }), i.prototype["finally"] = i.prototype.always, i.prototype["try"] = i.prototype.done }).call(this, e("_process")) }, { _process: 2, underscore: 17 }],
        33: [function(e, t, n) {
            var r = e("./request").request;
            t.exports = function(e) { e.Installation = e.Object.extend("_Installation"), e.Push = e.Push || {}, e.Push.send = function(e, t) {
                    if (e.where && (e.where = e.where.toJSON().where), e.where && e.cql) throw "Both where and cql can't be set";
                    if (e.push_time && (e.push_time = e.push_time.toJSON()), e.expiration_time && (e.expiration_time = e.expiration_time.toJSON()), e.expiration_time && e.expiration_time_interval) throw "Both expiration_time and expiration_time_interval can't be set";
                    var n = r("push", null, null, "POST", e);
                    return n._thenRunCallbacks(t) } } }, { "./request": 36 }],
        34: [function(e, t, n) {
            var r = e("underscore"),
                i = e("./error"),
                s = e("./request").request;
            t.exports = function(e) {
                e.Query = function(t) { r.isString(t) && (t = e.Object._getSubclass(t)), this.objectClass = t, this.className = t.prototype.className, this._where = {}, this._include = [], this._limit = -1, this._skip = 0, this._extraOptions = {} }, e.Query.or = function() {
                    var t = r.toArray(arguments),
                        n = null;
                    e._arrayEach(t, function(e) {
                        if (r.isNull(n) && (n = e.className), n !== e.className) throw "All queries must be for the same class" });
                    var i = new e.Query(n);
                    return i._orQuery(t), i }, e.Query.and = function() {
                    var t = r.toArray(arguments),
                        n = null;
                    e._arrayEach(t, function(e) {
                        if (r.isNull(n) && (n = e.className), n !== e.className) throw "All queries must be for the same class" });
                    var i = new e.Query(n);
                    return i._andQuery(t), i }, e.Query.doCloudQuery = function(t, n, i) {
                    var o = { cql: t };
                    r.isArray(n) ? o.pvalues = n : i = n;
                    var a = s("cloudQuery", null, null, "GET", o, i && i.sessionToken);
                    return a.then(function(t) {
                        var n = new e.Query(t.className),
                            i = r.map(t.results, function(e) {
                                var r = n._newObject(t);
                                return r._finishFetch(n._processResult(e), !0), r });
                        return { results: i, count: t.count, className: t.className } })._thenRunCallbacks(i) }, e.Query._extend = e._extend, e.Query.prototype = {
                    _processResult: function(e) {
                        return e },
                    get: function(t, n) {
                        if (!t) {
                            var s = new i(i.OBJECT_NOT_FOUND, "Object not found.");
                            throw s }
                        var o = this;
                        return o.equalTo("objectId", t), o.first().then(function(t) {
                            if (!r.isEmpty(t)) return t;
                            var n = new i(i.OBJECT_NOT_FOUND, "Object not found.");
                            return e.Promise.error(n) })._thenRunCallbacks(n, null) },
                    toJSON: function() {
                        var t = { where: this._where };
                        return this._include.length > 0 && (t.include = this._include.join(",")), this._select && (t.keys = this._select.join(",")), this._limit >= 0 && (t.limit = this._limit), this._skip > 0 && (t.skip = this._skip), void 0 !== this._order && (t.order = this._order), e._objectEach(this._extraOptions, function(e, n) { t[n] = e }), t },
                    _newObject: function(t) {
                        var n;
                        return n = t && t.className ? new e.Object(t.className) : new this.objectClass },
                    _createRequest: function(e, t) {
                        return s("classes", this.className, null, "GET", e || this.toJSON(), t && t.sessionToken) },
                    find: function(e) {
                        var t = this,
                            n = this._createRequest(null, e);
                        return n.then(function(e) {
                            return r.map(e.results, function(n) {
                                var r = t._newObject(e);
                                return r._finishFetch(t._processResult(n), !0), r }) })._thenRunCallbacks(e) },
                    destroyAll: function(t) {
                        var n = this;
                        return n.find().then(function(t) {
                            return e.Object.destroyAll(t) })._thenRunCallbacks(t) },
                    count: function(e) {
                        var t = this.toJSON();
                        t.limit = 0, t.count = 1;
                        var n = this._createRequest(t, e);
                        return n.then(function(e) {
                            return e.count })._thenRunCallbacks(e) },
                    first: function(e) {
                        var t = this,
                            n = this.toJSON();
                        n.limit = 1;
                        var i = this._createRequest(n, e);
                        return i.then(function(e) {
                            return r.map(e.results, function(e) {
                                var n = t._newObject();
                                return n._finishFetch(t._processResult(e), !0), n })[0] })._thenRunCallbacks(e) },
                    collection: function(t, n) {
                        return n = n || {}, new e.Collection(t, r.extend(n, { model: this._objectClass || this.objectClass, query: this })) },
                    skip: function(e) {
                        return this._skip = e, this },
                    limit: function(e) {
                        return this._limit = e, this },
                    equalTo: function(t, n) {
                        return this._where[t] = e._encode(n), this },
                    _addCondition: function(t, n, r) {
                        return this._where[t] || (this._where[t] = {}), this._where[t][n] = e._encode(r), this },
                    sizeEqualTo: function(e, t) { this._addCondition(e, "$size", t) },
                    notEqualTo: function(e, t) {
                        return this._addCondition(e, "$ne", t), this },
                    lessThan: function(e, t) {
                        return this._addCondition(e, "$lt", t), this },
                    greaterThan: function(e, t) {
                        return this._addCondition(e, "$gt", t), this },
                    lessThanOrEqualTo: function(e, t) {
                        return this._addCondition(e, "$lte", t), this },
                    greaterThanOrEqualTo: function(e, t) {
                        return this._addCondition(e, "$gte", t), this },
                    containedIn: function(e, t) {
                        return this._addCondition(e, "$in", t), this },
                    notContainedIn: function(e, t) {
                        return this._addCondition(e, "$nin", t), this },
                    containsAll: function(e, t) {
                        return this._addCondition(e, "$all", t), this },
                    exists: function(e) {
                        return this._addCondition(e, "$exists", !0), this },
                    doesNotExist: function(e) {
                        return this._addCondition(e, "$exists", !1), this },
                    matches: function(e, t, n) {
                        return this._addCondition(e, "$regex", t), n || (n = ""), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), n && n.length && this._addCondition(e, "$options", n), this },
                    matchesQuery: function(e, t) {
                        var n = t.toJSON();
                        return n.className = t.className, this._addCondition(e, "$inQuery", n), this },
                    doesNotMatchQuery: function(e, t) {
                        var n = t.toJSON();
                        return n.className = t.className, this._addCondition(e, "$notInQuery", n), this },
                    matchesKeyInQuery: function(e, t, n) {
                        var r = n.toJSON();
                        return r.className = n.className, this._addCondition(e, "$select", { key: t, query: r }), this },
                    doesNotMatchKeyInQuery: function(e, t, n) {
                        var r = n.toJSON();
                        return r.className = n.className, this._addCondition(e, "$dontSelect", { key: t, query: r }), this },
                    _orQuery: function(e) {
                        var t = r.map(e, function(e) {
                            return e.toJSON().where });
                        return this._where.$or = t, this },
                    _andQuery: function(e) {
                        var t = r.map(e, function(e) {
                            return e.toJSON().where });
                        return this._where.$and = t, this },
                    _quote: function(e) {
                        return "\\Q" + e.replace("\\E", "\\E\\\\E\\Q") + "\\E" },
                    contains: function(e, t) {
                        return this._addCondition(e, "$regex", this._quote(t)), this },
                    startsWith: function(e, t) {
                        return this._addCondition(e, "$regex", "^" + this._quote(t)), this },
                    endsWith: function(e, t) {
                        return this._addCondition(e, "$regex", this._quote(t) + "$"), this },
                    ascending: function(e) {
                        return this._order = e, this },
                    addAscending: function(e) {
                        return this._order ? this._order += "," + e : this._order = e, this },
                    descending: function(e) {
                        return this._order = "-" + e, this },
                    addDescending: function(e) {
                        return this._order ? this._order += ",-" + e : this._order = "-" + e, e },
                    near: function(t, n) {
                        return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), this._addCondition(t, "$nearSphere", n), this },
                    withinRadians: function(e, t, n) {
                        return this.near(e, t), this._addCondition(e, "$maxDistance", n), this },
                    withinMiles: function(e, t, n) {
                        return this.withinRadians(e, t, n / 3958.8) },
                    withinKilometers: function(e, t, n) {
                        return this.withinRadians(e, t, n / 6371) },
                    withinGeoBox: function(t, n, r) {
                        return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), r instanceof e.GeoPoint || (r = new e.GeoPoint(r)), this._addCondition(t, "$within", { $box: [n, r] }), this },
                    include: function() {
                        var t = this;
                        return e._arrayEach(arguments, function(e) { r.isArray(e) ? t._include = t._include.concat(e) : t._include.push(e) }), this },
                    select: function() {
                        var t = this;
                        return this._select = this._select || [], e._arrayEach(arguments, function(e) { r.isArray(e) ? t._select = t._select.concat(e) : t._select.push(e) }), this },
                    each: function(t, n) {
                        if (n = n || {}, this._order || this._skip || this._limit >= 0) {
                            var i = "Cannot iterate on a query with sort, skip, or limit.";
                            return e.Promise.error(i)._thenRunCallbacks(n) }
                        var s = (new e.Promise, new e.Query(this.objectClass));
                        s._limit = n.batchSize || 100, s._where = r.clone(this._where), s._include = r.clone(this._include), s.ascending("objectId");
                        var o = !1;
                        return e.Promise._continueWhile(function() {
                            return !o }, function() {
                            return s.find().then(function(n) {
                                var i = e.Promise.as();
                                return r.each(n, function(e) { i = i.then(function() {
                                        return t(e) }) }), i.then(function() { n.length >= s._limit ? s.greaterThan("objectId", n[n.length - 1].id) : o = !0 }) }) })._thenRunCallbacks(n)
                    }
                }, e.FriendShipQuery = e.Query._extend({ _objectClass: e.User, _newObject: function() {
                        return new e.User }, _processResult: function(e) {
                        if (e && e[this._friendshipTag]) {
                            var t = e[this._friendshipTag];
                            return "Pointer" === t.__type && "_User" === t.className && (delete t.__type, delete t.className), t }
                        return null } })
            }
        }, { "./error": 24, "./request": 36, underscore: 17 }],
        35: [function(e, t, n) {
            var r = e("underscore");
            t.exports = function(e) { e.Relation = function(e, t) {
                    if (!r.isString(t)) throw new TypeError("key must be a string");
                    this.parent = e, this.key = t, this.targetClassName = null }, e.Relation.reverseQuery = function(t, n, r) {
                    var i = new e.Query(t);
                    return i.equalTo(n, r._toPointer()), i }, e.Relation.prototype = { _ensureParentAndKey: function(e, t) {
                        if (this.parent = this.parent || e, this.key = this.key || t, this.parent !== e) throw "Internal Error. Relation retrieved from two different Objects.";
                        if (this.key !== t) throw "Internal Error. Relation retrieved from two different keys." }, add: function(t) { r.isArray(t) || (t = [t]);
                        var n = new e.Op.Relation(t, []);
                        this.parent.set(this.key, n), this.targetClassName = n._targetClassName }, remove: function(t) { r.isArray(t) || (t = [t]);
                        var n = new e.Op.Relation([], t);
                        this.parent.set(this.key, n), this.targetClassName = n._targetClassName }, toJSON: function() {
                        return { __type: "Relation", className: this.targetClassName } }, query: function t() {
                        var n, t;
                        return this.targetClassName ? (n = e.Object._getSubclass(this.targetClassName), t = new e.Query(n)) : (n = e.Object._getSubclass(this.parent.className), t = new e.Query(n), t._extraOptions.redirectClassNameForKey = this.key), t._addCondition("$relatedTo", "object", this.parent._toPointer()), t._addCondition("$relatedTo", "key", this.key), t } } } }, { underscore: 17 }],
        36: [function(e, t, n) {
            (function(n) {
                var r = e("superagent"),
                    i = e("debug")("request"),
                    s = e("md5"),
                    o = e("./promise"),
                    a = e("./cache"),
                    u = e("./error"),
                    c = e("./av"),
                    l = function(e, t) {
                        var n = (new Date).getTime(),
                            r = s(n + e);
                        return t ? r + "," + n + ",master" : r + "," + n },
                    h = function(e) {
                        var t = ["batch", "classes", "files", "date", "functions", "call", "login", "push", "search/select", "requestPasswordReset", "requestEmailVerify", "requestPasswordResetBySmsCode", "resetPasswordBySmsCode", "requestMobilePhoneVerify", "requestLoginSmsCode", "verifyMobilePhone", "requestSmsCode", "verifySmsCode", "users", "usersByMobilePhone", "cloudQuery", "qiniu", "fileTokens", "statuses", "bigquery", "search/select", "subscribe/statuses/count", "subscribe/statuses", "installations"];
                        if (-1 === t.indexOf(e) && !/users\/[^\/]+\/updatePassword/.test(e) && !/users\/[^\/]+\/friendship\/[^\/]+/.test(e)) throw new Error("Bad router: " + e + ".") },
                    f = function(e, t, n) {
                        var s = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3],
                            a = arguments[4];
                        i(e, t, n, s);
                        var u = new o,
                            c = r(e, t).set(s).send(n).end(function(e, t) {
                                return t && i(t.status, t.body, t.text), e ? (t && (e.statusCode = t.status, e.responseText = t.text, e.response = t.body), u.reject(e)) : u.resolve(t.body, t.status, t) });
                        return a && c.on("progress", a), u },
                    d = function(e) {
                        var t = { "X-LC-Id": c.applicationId, "Content-Type": "application/json;charset=UTF-8" };
                        c.masterKey && c._useMasterKey ? t["X-LC-Sign"] = l(c.masterKey, !0) : t["X-LC-Sign"] = l(c.applicationKey), null !== c._config.applicationProduction && (t["X-LC-Prod"] = c._config.applicationProduction), c._config.isNode ? t["User-Agent"] = c._config.userAgent || "AV/" + c.version + "; Node.js/" + n.version : t["X-LC-UA"] = "AV/" + c.version;
                        var r = new o;
                        return e ? (t["X-LC-Session"] = e, r.resolve(t)) : c._config.disableCurrentUser ? r.resolve(t) : c.User.currentAsync().then(function(e) { e && e._sessionToken && (t["X-LC-Session"] = e._sessionToken), r.resolve(t) }), r },
                    p = function(e, t, n, r, i) { c.serverURL && (c._config.APIServerURL = c.serverURL, console.warn("Please use AV._config.APIServerURL to replace AV.serverURL, and it is an internal interface."));
                        var s = c._config.APIServerURL;
                        if ("/" !== s.charAt(s.length - 1) && (s += "/"), s += "1.1/" + e, t && (s += "/" + t), n && (s += "/" + n), "users" !== e && "classes" !== e || !i || (s += "?", i._fetchWhenSave && (delete i._fetchWhenSave, s += "&new=true"), i._where && (s += "&where=" + encodeURIComponent(JSON.stringify(i._where)), delete i._where)), "get" === r.toLowerCase()) {-1 === s.indexOf("?") && (s += "?");
                            for (var o in i) "object" === _typeof(i[o]) && (i[o] = JSON.stringify(i[o])), s += "&" + o + "=" + encodeURIComponent(i[o]) }
                        return s },
                    _ = function(e, t) { "number" != typeof t && (t = 3600), a.set("APIServerURL", e, 1e3 * t) },
                    m = function(e) {
                        var t = new o;
                        if (410 === e.statusCode) _(e.response.api_server, e.response.ttl), t.resolve(e.response.location);
                        else {
                            var n = { code: -1, error: e.responseText };
                            if (e.response && e.response.code) n = e.response;
                            else if (e.responseText) try { n = JSON.parse(e.responseText) } catch (r) {}
                            var i = new u(n.code, n.error);
                            t.reject(i) }
                        return t },
                    v = function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? "cn" : arguments[0],
                            t = { cn: "https://api.leancloud.cn", us: "https://us-api.leancloud.cn" },
                            n = c._config;
                        n.region = e, n.APIServerURL || (n.APIServerURL = t[e], "cn" === e && a.get("APIServerURL").then(function(e) {
                            return e ? e : f("get", "https://app-router.leancloud.cn/1/route?appId=" + c.applicationId).then(function(e) {
                                return e.api_server ? (_(e.api_server, e.ttl), e.api_server) : void 0 }) }).then(function(r) { n.APIServerURL === t[e] && (n.APIServerURL = "https://" + r) })) },
                    g = function(e, t, n, r) {
                        var i = arguments.length <= 4 || void 0 === arguments[4] ? {} : arguments[4],
                            s = arguments[5];
                        if (!c.applicationId) throw new Error("You must specify your applicationId using AV.init()");
                        if (!c.applicationKey && !c.masterKey) throw new Error("You must specify a AppKey using AV.init()");
                        h(e);
                        var o = p(e, t, n, r, i);
                        return d(s).then(function(e) {
                            return f(r, o, i, e).then(null, function(t) {
                                return m(t).then(function(t) {
                                    return f(r, t, i, e) }) }) }) };
                t.exports = { ajax: f, request: g, setServerUrlByRegion: v } }).call(this, e("_process")) }, { "./av": 19, "./cache": 22, "./error": 24, "./promise": 32, _process: 2, debug: 4, md5: 8, superagent: 13 }],
        37: [function(e, t, n) {
            var r = e("underscore"),
                i = e("./error");
            t.exports = function(e) { e.Role = e.Object.extend("_Role", { constructor: function(t, n) {
                        if (r.isString(t) ? (e.Object.prototype.constructor.call(this, null, null), this.setName(t)) : e.Object.prototype.constructor.call(this, t, n), void 0 === n) {
                            var i = new e.ACL;
                            i.setPublicReadAccess(!0), this.getACL() || this.setACL(i) } else {
                            if (!(n instanceof e.ACL)) throw new TypeError("acl must be an instance of AV.ACL");
                            this.setACL(n) } }, getName: function() {
                        return this.get("name") }, setName: function(e, t) {
                        return this.set("name", e, t) }, getUsers: function() {
                        return this.relation("users") }, getRoles: function() {
                        return this.relation("roles") }, validate: function(t, n) {
                        if ("name" in t && t.name !== this.getName()) {
                            var s = t.name;
                            if (this.id && this.id !== t.objectId) return new i(i.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
                            if (!r.isString(s)) return new i(i.OTHER_CAUSE, "A role's name must be a String.");
                            if (!/^[0-9a-zA-Z\-_ ]+$/.test(s)) return new i(i.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.") }
                        return e.Object.prototype.validate ? e.Object.prototype.validate.call(this, t, n) : !1 } }) } }, { "./error": 24, underscore: 17 }],
        38: [function(e, t, n) {
            var r = e("underscore"),
                i = e("./request").request;
            t.exports = function(e) { e.SearchSortBuilder = function() { this._sortFields = [] }, e.SearchSortBuilder.prototype = { _addField: function(e, t, n, r) {
                        var i = {};
                        return i[e] = { order: t || "asc", mode: n || "avg", missing: "_" + (r || "last") }, this._sortFields.push(i), this }, ascending: function(e, t, n) {
                        return this._addField(e, "asc", t, n) }, descending: function(e, t, n) {
                        return this._addField(e, "desc", t, n) }, whereNear: function(e, t, n) { n = n || {};
                        var r = {},
                            i = { lat: t.latitude, lon: t.longitude },
                            s = { order: n.order || "asc", mode: n.mode || "avg", unit: n.unit || "km" };
                        return s[e] = i, r._geo_distance = s, this._sortFields.push(r), this }, build: function() {
                        return JSON.stringify(e._encode(this._sortFields)) } }, e.SearchQuery = e.Query._extend({ _sid: null, _hits: 0, _queryString: null, _highlights: null, _sortBuilder: null, _createRequest: function(e, t) {
                        return i("search/select", null, null, "GET", e || this.toJSON(), t && t.sessionToken) }, sid: function(e) {
                        return this._sid = e, this }, queryString: function(e) {
                        return this._queryString = e, this }, highlights: function(e) {
                        var t;
                        return t = e && r.isString(e) ? arguments : e, this._highlights = t, this }, sortBy: function(e) {
                        return this._sortBuilder = e, this }, hits: function() {
                        return this._hits || (this._hits = 0), this._hits }, _processResult: function(e) {
                        return delete e.className, delete e._app_url, delete e._deeplink, e }, hasMore: function() {
                        return !this._hitEnd }, reset: function() { this._hitEnd = !1, this._sid = null, this._hits = 0 }, find: function(e) {
                        var t = this,
                            n = this._createRequest();
                        return n.then(function(e) {
                            return e.sid ? (t._oldSid = t._sid, t._sid = e.sid) : (t._sid = null, t._hitEnd = !0), t._hits = e.hits || 0, r.map(e.results, function(n) { n.className && (e.className = n.className);
                                var r = t._newObject(e);
                                return r.appURL = n._app_url, r._finishFetch(t._processResult(n), !0), r }) })._thenRunCallbacks(e) }, toJSON: function() {
                        var t = e.SearchQuery.__super__.toJSON.call(this);
                        if (delete t.where, this.className && (t.clazz = this.className), this._sid && (t.sid = this._sid), !this._queryString) throw "Please set query string.";
                        if (t.q = this._queryString, this._highlights && (t.highlights = this._highlights.join(",")), this._sortBuilder && t.order) throw "sort and order can not be set at same time.";
                        return this._sortBuilder && (t.sort = this._sortBuilder.build()), t } }) } }, { "./request": 36, underscore: 17 }],
        39: [function(e, t, n) {
            var r = e("underscore"),
                i = e("./request").request;
            t.exports = function(e) { e.Status = function(e, t) {
                    return this.data = {}, this.inboxType = "default", this.query = null, e && "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) ? this.data = e : (e && (this.data.image = e), t && (this.data.message = t)), this }, e.Status.prototype = { get: function(e) {
                        return this.data[e] }, set: function(e, t) {
                        return this.data[e] = t, this }, destroy: function(t) {
                        if (!this.id) return e.Promise.error("The status id is not exists.")._thenRunCallbacks(t);
                        var n = i("statuses", null, this.id, "DELETE", t && t.sessionToken);
                        return n._thenRunCallbacks(t) }, toObject: function() {
                        return this.id ? e.Object.createWithoutData("_Status", this.id) : null }, _getDataJSON: function() {
                        var t = r.clone(this.data);
                        return e._encode(t) }, send: function(t) {
                        if (!e.User.current()) throw "Please signin an user.";
                        if (!this.query) return e.Status.sendStatusToFollowers(this, t);
                        var n = this.query.toJSON();
                        n.className = this.query.className;
                        var r = {};
                        r.query = n, this.data = this.data || {};
                        var s = e.Object.createWithoutData("_User", e.User.current().id)._toPointer();
                        this.data.source = this.data.source || s, r.data = this._getDataJSON(), r.inboxType = this.inboxType || "default";
                        var o = i("statuses", null, null, "POST", r, t && t.sessionToken),
                            a = this;
                        return o.then(function(t) {
                            return a.id = t.objectId, a.createdAt = e._parseDate(t.createdAt), a })._thenRunCallbacks(t) }, _finishFetch: function(t) { this.id = t.objectId, this.createdAt = e._parseDate(t.createdAt), this.updatedAt = e._parseDate(t.updatedAt), this.messageId = t.messageId, delete t.messageId, delete t.objectId, delete t.createdAt, delete t.updatedAt, this.data = e._decode(void 0, t) } }, e.Status.sendStatusToFollowers = function(t, n) {
                    if (!e.User.current()) throw "Please signin an user.";
                    var r = {};
                    r.className = "_Follower", r.keys = "follower";
                    var s = e.Object.createWithoutData("_User", e.User.current().id)._toPointer();
                    r.where = { user: s };
                    var o = {};
                    o.query = r, t.data = t.data || {}, t.data.source = t.data.source || s, o.data = t._getDataJSON(), o.inboxType = t.inboxType || "default";
                    var a = i("statuses", null, null, "POST", o, n && n.sessionToken);
                    return a.then(function(n) {
                        return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t })._thenRunCallbacks(n) }, e.Status.sendPrivateStatus = function(t, n, s) {
                    if (!e.User.current()) throw "Please signin an user.";
                    if (!n) throw "Invalid target user.";
                    var o = r.isString(n) ? n : n.id;
                    if (!o) throw "Invalid target user.";
                    var a = {};
                    a.className = "_User";
                    var u = e.Object.createWithoutData("_User", e.User.current().id)._toPointer();
                    a.where = { objectId: o };
                    var c = {};
                    c.query = a, t.data = t.data || {}, t.data.source = t.data.source || u, c.data = t._getDataJSON(), c.inboxType = "private", t.inboxType = "private";
                    var l = i("statuses", null, null, "POST", c, s && s.sessionToken);
                    return l.then(function(n) {
                        return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t })._thenRunCallbacks(s) }, e.Status.countUnreadStatuses = function(t) {
                    if (!e.User.current() && null == t) throw "Please signin an user or pass the owner objectId.";
                    t = t || e.User.current();
                    var n = r.isString(arguments[1]) ? arguments[2] : arguments[1],
                        s = r.isString(arguments[1]) ? arguments[1] : "default",
                        o = {};
                    o.inboxType = e._encode(s), o.owner = e._encode(t);
                    var a = i("subscribe/statuses/count", null, null, "GET", o, n && n.sessionToken);
                    return a._thenRunCallbacks(n) }, e.Status.statusQuery = function(t) {
                    var n = new e.Query("_Status");
                    return t && n.equalTo("source", t), n }, e.InboxQuery = e.Query._extend({ _objectClass: e.Status, _sinceId: 0, _maxId: 0, _inboxType: "default", _owner: null, _newObject: function() {
                        return new e.Status }, _createRequest: function(e, t) {
                        return i("subscribe/statuses", null, null, "GET", e || this.toJSON(), t && t.sessionToken) }, sinceId: function(e) {
                        return this._sinceId = e, this }, maxId: function(e) {
                        return this._maxId = e, this }, owner: function(e) {
                        return this._owner = e, this }, inboxType: function(e) {
                        return this._inboxType = e, this }, toJSON: function() {
                        var t = e.InboxQuery.__super__.toJSON.call(this);
                        return t.owner = e._encode(this._owner), t.inboxType = e._encode(this._inboxType), t.sinceId = e._encode(this._sinceId), t.maxId = e._encode(this._maxId), t } }), e.Status.inboxQuery = function(t, n) {
                    var r = new e.InboxQuery(e.Status);
                    return t && (r._owner = t), n && (r._inboxType = n), r } } }, { "./request": 36, underscore: 17 }],
        40: [function(e, t, n) {
            var r = e("superagent"),
                i = e("debug")("cos"),
                s = e("../promise");
            t.exports = function(e, t, n) {
                var o = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
                n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
                var a = e.upload_url + "?sign=" + encodeURIComponent(e.token),
                    u = new s,
                    c = r("POST", a).field("fileContent", t).field("op", "upload").end(function(e, t) {
                        return t && i(t.status, t.body, t.text), e ? (t && (e.statusCode = t.status, e.responseText = t.text, e.response = t.body), u.reject(e)) : void u.resolve(n) });
                return o.onprogress && c.on("progress", o.onprogress), u } }, { "../promise": 32, debug: 4, superagent: 13 }],
        41: [function(e, t, n) {
            var r = e("superagent"),
                i = e("../promise"),
                s = e("debug")("qiniu");
            t.exports = function(e, t, n) {
                var o = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
                n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
                var a = e.token,
                    u = new i,
                    c = r("POST", "https://up.qbox.me").field("file", t).field("name", n.attributes.name).field("key", n._qiniu_key).field("token", a).end(function(e, t) {
                        return t && s(t.status, t.body, t.text), e ? (t && (e.statusCode = t.status, e.responseText = t.text, e.response = t.body), u.reject(e)) : void u.resolve(n) });
                return o.onprogress && c.on("progress", o.onprogress), u } }, { "../promise": 32, debug: 4, superagent: 13 }],
        42: [function(e, t, n) {
            function r(e) {
                var t = i.clone(e) || {};
                return delete t.success, delete t.error, t }
            var i = e("underscore"),
                s = e("./error"),
                o = e("./request").request;
            t.exports = function(e) { e.User = e.Object.extend("_User", { _isCurrentUser: !1, _mergeMagicFields: function(t) { t.sessionToken && (this._sessionToken = t.sessionToken, delete t.sessionToken), e.User.__super__._mergeMagicFields.call(this, t) }, _cleanupAuthData: function() {
                        if (this.isCurrent()) {
                            var t = this.get("authData");
                            t && e._objectEach(this.get("authData"), function(e, n) { t[n] || delete t[n] }) } }, _synchronizeAllAuthData: function() {
                        var t = this.get("authData");
                        if (t) {
                            var n = this;
                            e._objectEach(this.get("authData"), function(e, t) { n._synchronizeAuthData(t) }) } }, _synchronizeAuthData: function(t) {
                        if (this.isCurrent()) {
                            var n;
                            i.isString(t) ? (n = t, t = e.User._authProviders[n]) : n = t.getAuthType();
                            var r = this.get("authData");
                            if (r && t) {
                                var s = t.restoreAuthentication(r[n]);
                                s || this._unlinkFrom(t) } } }, _handleSaveResult: function(t) {
                        return t && !e._config.disableCurrentUser && (this._isCurrentUser = !0), this._cleanupAuthData(), this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), this._refreshCache(), !t && !this.isCurrent() || e._config.disableCurrentUser ? e.Promise.as() : e.Promise.as(e.User._saveCurrentUser(this)) }, _linkWith: function(t, n) {
                        var s;
                        if (i.isString(t) ? (s = t, t = e.User._authProviders[t]) : s = t.getAuthType(), i.has(n, "authData")) {
                            var o = this.get("authData") || {};
                            return o[s] = n.authData, this.set("authData", o), this.save({ authData: o }, r(n)).then(function(e) {
                                return e._handleSaveResult(!0).then(function() {
                                    return e }) })._thenRunCallbacks(n) }
                        var a = this,
                            u = new e.Promise;
                        return t.authenticate({ success: function(e, t) { a._linkWith(e, { authData: t, success: n.success, error: n.error }).then(function() { u.resolve(a) }) }, error: function(e, t) { n.error && n.error(a, t), u.reject(t) } }), u }, _unlinkFrom: function(t, n) {
                        var r;
                        i.isString(t) ? (r = t, t = e.User._authProviders[t]) : r = t.getAuthType();
                        var s = i.clone(n),
                            o = this;
                        return s.authData = null, s.success = function(e) { o._synchronizeAuthData(t), n.success && n.success.apply(this, arguments) }, this._linkWith(t, s) }, _isLinked: function(e) {
                        var t;
                        t = i.isString(e) ? e : e.getAuthType();
                        var n = this.get("authData") || {};
                        return !!n[t] }, logOut: function() { this._logOutWithAll(), this._isCurrentUser = !1 }, _logOutWithAll: function() {
                        var t = this.get("authData");
                        if (t) {
                            var n = this;
                            e._objectEach(this.get("authData"), function(e, t) { n._logOutWith(t) }) } }, _logOutWith: function(t) { this.isCurrent() && (i.isString(t) && (t = e.User._authProviders[t]), t && t.deauthenticate && t.deauthenticate()) }, signUp: function(e, t) {
                        var n;
                        t = t || {};
                        var i = e && e.username || this.get("username");
                        if (!i || "" === i) throw n = new s(s.OTHER_CAUSE, "Cannot sign up user with an empty name."), t && t.error && t.error(this, n), n;
                        var o = e && e.password || this.get("password");
                        if (!o || "" === o) throw n = new s(s.OTHER_CAUSE, "Cannot sign up user with an empty password."), t && t.error && t.error(this, n), n;
                        return this.save(e, r(t)).then(function(e) {
                            return e._handleSaveResult(!0).then(function() {
                                return e }) })._thenRunCallbacks(t, this) }, signUpOrlogInWithMobilePhone: function(e, t) {
                        var n;
                        t = t || {};
                        var i = e && e.mobilePhoneNumber || this.get("mobilePhoneNumber");
                        if (!i || "" === i) throw n = new s(s.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber."), t && t.error && t.error(this, n), n;
                        var a = e && e.smsCode || this.get("smsCode");
                        if (!a || "" === a) throw n = new s(s.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode."), t && t.error && t.error(this, n), n;
                        var u = r(t);
                        return u._makeRequest = function(e, t, n, r, i) {
                            return o("usersByMobilePhone", null, null, "POST", i) }, this.save(e, u).then(function(e) {
                            return delete e.attributes.smsCode, delete e._serverData.smsCode, e._handleSaveResult(!0).then(function() {
                                return e }) })._thenRunCallbacks(t) }, logIn: function(e) {
                        var t = this,
                            n = o("login", null, null, "GET", this.toJSON());
                        return n.then(function(e, n, r) {
                            var i = t.parse(e, n, r);
                            return t._finishFetch(i), t._handleSaveResult(!0).then(function() {
                                return i.smsCode || delete t.attributes.smsCode, t }) })._thenRunCallbacks(e, this) }, save: function(t, n, s) {
                        var o, a;
                        return i.isObject(t) || i.isNull(t) || i.isUndefined(t) ? (o = t, a = n) : (o = {}, o[t] = n, a = s), a = a || {}, e.Object.prototype.save.call(this, o, r(a)).then(function(e) {
                            return e._handleSaveResult(!1).then(function() {
                                return e }) })._thenRunCallbacks(a) }, follow: function(e, t) {
                        if (!this.id) throw "Please signin.";
                        if (!e) throw "Invalid target user.";
                        var n = i.isString(e) ? e : e.id;
                        if (!n) throw "Invalid target user.";
                        var r = "users/" + this.id + "/friendship/" + n,
                            s = o(r, null, null, "POST", null, t && t.sessionToken);
                        return s._thenRunCallbacks(t) }, unfollow: function(e, t) {
                        if (!this.id) throw "Please signin.";
                        if (!e) throw "Invalid target user.";
                        var n = i.isString(e) ? e : e.id;
                        if (!n) throw "Invalid target user.";
                        var r = "users/" + this.id + "/friendship/" + n,
                            s = o(r, null, null, "DELETE", null, t && t.sessionToken);
                        return s._thenRunCallbacks(t) }, followerQuery: function() {
                        return e.User.followerQuery(this.id) }, followeeQuery: function() {
                        return e.User.followeeQuery(this.id) }, fetch: function() {
                        var t = null,
                            n = {};
                        return 1 === arguments.length ? t = arguments[0] : 2 === arguments.length && (n = arguments[0], t = arguments[1]), e.Object.prototype.fetch.call(this, n, {}).then(function(e) {
                            return e._handleSaveResult(!1).then(function() {
                                return e }) })._thenRunCallbacks(t) }, updatePassword: function(e, t, n) {
                        var r = "users/" + this.id + "/updatePassword",
                            i = { old_password: e, new_password: t },
                            s = o(r, null, null, "PUT", i, n && n.sessionToken);
                        return s._thenRunCallbacks(n, this) }, isCurrent: function() {
                        return this._isCurrentUser }, getUsername: function() {
                        return this.get("username") }, getMobilePhoneNumber: function() {
                        return this.get("mobilePhoneNumber") }, setMobilePhoneNumber: function(e, t) {
                        return this.set("mobilePhoneNumber", e, t) }, setUsername: function(e, t) {
                        return this.set("username", e, t) }, setPassword: function(e, t) {
                        return this.set("password", e, t) }, getEmail: function() {
                        return this.get("email") }, setEmail: function(e, t) {
                        return this.set("email", e, t) }, authenticated: function() {
                        return !!this._sessionToken && !e._config.disableCurrentUser && e.User.current() && e.User.current().id === this.id }, getSessionToken: function() {
                        return this._sessionToken } }, { _currentUser: null, _currentUserMatchesDisk: !1, _CURRENT_USER_KEY: "currentUser", _authProviders: {}, signUp: function(t, n, r, i) { r = r || {}, r.username = t, r.password = n;
                        var s = e.Object._create("_User");
                        return s.signUp(r, i) }, logIn: function(t, n, r) {
                        var i = e.Object._create("_User");
                        return i._finishFetch({ username: t, password: n }), i.logIn(r) }, become: function(t, n) { n = n || {};
                        var r = e.Object._create("_User");
                        return o("users", "me", null, "GET", { useMasterKey: n.useMasterKey, session_token: t }).then(function(e, t, n) {
                            var i = r.parse(e, t, n);
                            return r._finishFetch(i), r._handleSaveResult(!0).then(function() {
                                return r }) })._thenRunCallbacks(n, r) }, logInWithMobilePhoneSmsCode: function(t, n, r) {
                        var i = e.Object._create("_User");
                        return i._finishFetch({ mobilePhoneNumber: t, smsCode: n }), i.logIn(r) }, signUpOrlogInWithMobilePhone: function(t, n, r, i) { r = r || {}, r.mobilePhoneNumber = t, r.smsCode = n;
                        var s = e.Object._create("_User");
                        return s.signUpOrlogInWithMobilePhone(r, i) }, logInWithMobilePhone: function(t, n, r) {
                        var i = e.Object._create("_User");
                        return i._finishFetch({ mobilePhoneNumber: t, password: n }), i.logIn(r) }, signUpOrlogInWithAuthData: function(t, n, r) {
                        return e.User._logInWith(n, { authData: t, success: function(e) { r.success(e) }, error: function(e) { r.error(e) } }) }, logOut: function() {
                        return e._config.disableCurrentUser ? (console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), e.Promise.as(null)) : (null !== e.User._currentUser && (e.User._currentUser._logOutWithAll(), e.User._currentUser._isCurrentUser = !1), e.User._currentUserMatchesDisk = !0, e.User._currentUser = null, e.localStorage.removeItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY))) }, followerQuery: function(t) {
                        if (!t || !i.isString(t)) throw "Invalid user object id.";
                        var n = new e.FriendShipQuery("_Follower");
                        return n._friendshipTag = "follower", n.equalTo("user", e.Object.createWithoutData("_User", t)), n }, followeeQuery: function(t) {
                        if (!t || !i.isString(t)) throw "Invalid user object id.";
                        var n = new e.FriendShipQuery("_Followee");
                        return n._friendshipTag = "followee", n.equalTo("user", e.Object.createWithoutData("_User", t)), n }, requestPasswordReset: function(e, t) {
                        var n = { email: e },
                            r = o("requestPasswordReset", null, null, "POST", n);
                        return r._thenRunCallbacks(t) }, requestEmailVerify: function(e, t) {
                        var n = { email: e },
                            r = o("requestEmailVerify", null, null, "POST", n);
                        return r._thenRunCallbacks(t) }, requestEmailVerfiy: function(e, t) {
                        var n = { email: e },
                            r = o("requestEmailVerify", null, null, "POST", n);
                        return r._thenRunCallbacks(t) }, requestMobilePhoneVerify: function(e, t) {
                        var n = { mobilePhoneNumber: e },
                            r = o("requestMobilePhoneVerify", null, null, "POST", n);
                        return r._thenRunCallbacks(t) }, requestPasswordResetBySmsCode: function(e, t) {
                        var n = { mobilePhoneNumber: e },
                            r = o("requestPasswordResetBySmsCode", null, null, "POST", n);
                        return r._thenRunCallbacks(t) }, resetPasswordBySmsCode: function(e, t, n) {
                        var r = { password: t },
                            i = o("resetPasswordBySmsCode", null, e, "PUT", r);
                        return i._thenRunCallbacks(n) }, verifyMobilePhone: function(e, t) {
                        var n = o("verifyMobilePhone", null, e, "POST", null);
                        return n._thenRunCallbacks(t) }, requestLoginSmsCode: function(e, t) {
                        var n = { mobilePhoneNumber: e },
                            r = o("requestLoginSmsCode", null, null, "POST", n);
                        return r._thenRunCallbacks(t) }, currentAsync: function() {
                        return e._config.disableCurrentUser ? (console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), e.Promise.as(null)) : e.User._currentUser ? e.Promise.as(e.User._currentUser) : e.User._currentUserMatchesDisk ? e.Promise.as(e.User._currentUser) : e.localStorage.getItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)).then(function(t) {
                            if (!t) return null;
                            e.User._currentUserMatchesDisk = !0, e.User._currentUser = e.Object._create("_User"), e.User._currentUser._isCurrentUser = !0;
                            var n = JSON.parse(t);
                            return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [{}], e.User._currentUser }) }, current: function() {
                        if (e._config.disableCurrentUser) return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), null;
                        if (e.User._currentUser) return e.User._currentUser;
                        if (e.User._currentUserMatchesDisk) return e.User._currentUser;
                        e.User._currentUserMatchesDisk = !0;
                        var t = e.localStorage.getItem(e._getAVPath(e.User._CURRENT_USER_KEY));
                        if (!t) return null;
                        e.User._currentUser = e.Object._create("_User"), e.User._currentUser._isCurrentUser = !0;
                        var n = JSON.parse(t);
                        return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [{}], e.User._currentUser }, _saveCurrentUser: function(t) {
                        var n;
                        return n = e.User._currentUser !== t ? e.User.logOut() : e.Promise.as(), n.then(function() { t._isCurrentUser = !0, e.User._currentUser = t;
                            var n = t.toJSON();
                            return n._id = t.id, n._sessionToken = t._sessionToken, e.localStorage.setItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY), JSON.stringify(n)).then(function() { e.User._currentUserMatchesDisk = !0 }) }) }, _registerAuthenticationProvider: function(t) { e.User._authProviders[t.getAuthType()] = t, !e._config.disableCurrentUser && e.User.current() && e.User.current()._synchronizeAuthData(t.getAuthType()) }, _logInWith: function(t, n) {
                        var r = e.Object._create("_User");
                        return r._linkWith(t, n) } }) } }, { "./error": 24, "./request": 36, underscore: 17 }],
        43: [function(e, t, n) {
            (function(n) {
                var r = e("underscore"),
                    i = e("./request"),
                    s = function(e) {
                        return r.isNull(e) || r.isUndefined(e) },
                    o = function(e) {
                        var t = e._config;
                        r.extend(t, { region: "cn", APIServerURL: t.APIServerURL || "", isNode: !1, disableCurrentUser: !1, userAgent: null, applicationProduction: null }), "undefined" != typeof n && n.versions && n.versions.node && (t.isNode = !0);
                        var o = function() {},
                            a = function(e, t, n) {
                                var i;
                                return i = t && t.hasOwnProperty("constructor") ? t.constructor : function() { e.apply(this, arguments) }, r.extend(i, e), o.prototype = e.prototype, i.prototype = new o, t && r.extend(i.prototype, t), n && r.extend(i, n), i.prototype.constructor = i, i.__super__ = e.prototype, i },
                            u = function(t, n, r) { e.applicationId && t !== e.applicationId && n !== e.applicationKey && r !== e.masterKey && console.warn("LeanCloud SDK is already initialized, please do not reinitialize it."), e.applicationId = t, e.applicationKey = n, e.masterKey = r, e._useMasterKey = !1 };
                        e.init = function() {
                            var e = function() { console.warn("MasterKey should not be used in the browser. The permissions of MasterKey can be across all the server permissions, including the setting of ACL .") };
                            switch (arguments.length) {
                                case 1:
                                    var n = arguments.length <= 0 ? void 0 : arguments[0];
                                    if ("object" !== ("undefined" == typeof n ? "undefined" : _typeof(n))) throw new Error("AV.init(): Parameter is not correct.");!t.isNode && n.masterKey && e(), u(n.appId, n.appKey, n.masterKey), i.setServerUrlByRegion(n.region), t.disableCurrentUser = n.disableCurrentUser;
                                    break;
                                case 2:
                                case 3:
                                    console.warn("Please use AV.init() to replace AV.initialize() ."), t.isNode || 3 !== arguments.length || e(), u.apply(void 0, arguments), i.setServerUrlByRegion("cn") } }, t.isNode && (e.Cloud = e.Cloud || {}, e.Cloud.useMasterKey = function() { e._useMasterKey = !0 }), e.initialize = e.init, e.setProduction = function(e) { s(e) ? t.applicationProduction = null : t.applicationProduction = e ? 1 : 0 }, e.useAVCloudCN = function() { i.setServerUrlByRegion("cn"), console.warn("Do not use AV.useAVCloudCN. Please use AV.init(), you can set the region of server.") }, e.useAVCloudUS = function() { i.setServerUrlByRegion("us"), console.warn("Do not use AV.useAVCloudUS. Please use AV.init(), you can set the region of server.") }, e._getAVPath = function(t) {
                            if (!e.applicationId) throw "You need to call AV.initialize before using AV.";
                            if (t || (t = ""), !r.isString(t)) throw "Tried to get a localStorage path that wasn't a String.";
                            return "/" === t[0] && (t = t.substring(1)), "AV/" + e.applicationId + "/" + t }, e._installationId = null, e._getInstallationId = function() {
                            if (e._installationId) return e.Promise.as(e._installationId);
                            var t = e._getAVPath("installationId");
                            return e.localStorage.getItemAsync(t).then(function(n) {
                                if (e._installationId = n, e._installationId) return n;
                                var r = function() {
                                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) };
                                return e._installationId = r() + r() + "-" + r() + "-" + r() + "-" + r() + "-" + r() + r() + r(), e.localStorage.setItemAsync(t, e._installationId) }) }, e._parseDate = function(e) {
                            var t = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"),
                                n = t.exec(e);
                            if (!n) return null;
                            var r = n[1] || 0,
                                i = (n[2] || 1) - 1,
                                s = n[3] || 0,
                                o = n[4] || 0,
                                a = n[5] || 0,
                                u = n[6] || 0,
                                c = n[8] || 0;
                            return new Date(Date.UTC(r, i, s, o, a, u, c)) }, e._ajax = function() { console.warn("AV._ajax is deprecated, and will be removed in next release."), i.ajax.apply(i, arguments) }, e._request = function() { console.warn("AV._request is deprecated, and will be removed in next release."), i.request.apply(i, arguments) }, e._extend = function(e, t) {
                            var n = a(this, e, t);
                            return n.extend = this.extend, n }, e._getValue = function(e, t) {
                            return e && e[t] ? r.isFunction(e[t]) ? e[t]() : e[t] : null }, e._encode = function(t, n, i) {
                            if (t instanceof e.Object) {
                                if (i) throw "AV.Objects not allowed here";
                                if (!n || r.include(n, t) || !t._hasData) return t._toPointer();
                                if (!t.dirty()) return n = n.concat(t), e._encode(t._toFullJSON(n), n, i);
                                throw "Tried to save an object with a pointer to a new, unsaved object." }
                            if (t instanceof e.ACL) return t.toJSON();
                            if (r.isDate(t)) return { __type: "Date", iso: t.toJSON() };
                            if (t instanceof e.GeoPoint) return t.toJSON();
                            if (r.isArray(t)) return r.map(t, function(t) {
                                return e._encode(t, n, i) });
                            if (r.isRegExp(t)) return t.source;
                            if (t instanceof e.Relation) return t.toJSON();
                            if (t instanceof e.Op) return t.toJSON();
                            if (t instanceof e.File) {
                                if (!t.url() && !t.id) throw "Tried to save an object containing an unsaved file.";
                                return { __type: "File", id: t.id, name: t.name(), url: t.url() } }
                            if (r.isObject(t)) {
                                var s = {};
                                return e._objectEach(t, function(t, r) { s[r] = e._encode(t, n, i) }), s }
                            return t }, e._decode = function(t, n) {
                            if (!r.isObject(n)) return n;
                            if (r.isArray(n)) return e._arrayEach(n, function(t, r) { n[r] = e._decode(r, t) }), n;
                            if (n instanceof e.Object) return n;
                            if (n instanceof e.File) return n;
                            if (n instanceof e.Op) return n;
                            if (n.__op) return e.Op._decode(n);
                            var i;
                            if ("Pointer" === n.__type) { i = n.className;
                                var s = e.Object._create(i);
                                return Object.keys(n).length > 3 ? (delete n.__type, delete n.className, s._finishFetch(n, !0)) : s._finishFetch({ objectId: n.objectId }, !1), s }
                            if ("Object" === n.__type) { i = n.className, delete n.__type, delete n.className;
                                var o = e.Object._create(i);
                                return o._finishFetch(n, !0), o }
                            if ("Date" === n.__type) return e._parseDate(n.iso);
                            if ("GeoPoint" === n.__type) return new e.GeoPoint({ latitude: n.latitude, longitude: n.longitude });
                            if ("ACL" === t) return n instanceof e.ACL ? n : new e.ACL(n);
                            if ("Relation" === n.__type) {
                                var a = new e.Relation(null, t);
                                return a.targetClassName = n.className, a }
                            if ("File" === n.__type) {
                                var u = new e.File(n.name);
                                return u.attributes.metaData = n.metaData || {},
                                    u.attributes.url = n.url, u.id = n.objectId, u
                            }
                            return e._objectEach(n, function(t, r) { n[r] = e._decode(r, t) }), n
                        }, e._encodeObjectOrArray = function(t) {
                            var n = function(t) {
                                return t && t._toFullJSON && (t = t._toFullJSON([])), r.mapObject(t, function(t) {
                                    return e._encode(t, []) }) };
                            return r.isArray(t) ? t.map(function(e) {
                                return n(e) }) : n(t) }, e._arrayEach = r.each, e._traverse = function(t, n, i) {
                            if (t instanceof e.Object) {
                                if (i = i || [], r.indexOf(i, t) >= 0) return;
                                return i.push(t), e._traverse(t.attributes, n, i), n(t) }
                            return t instanceof e.Relation || t instanceof e.File ? n(t) : r.isArray(t) ? (r.each(t, function(r, s) {
                                var o = e._traverse(r, n, i);
                                o && (t[s] = o) }), n(t)) : r.isObject(t) ? (e._each(t, function(r, s) {
                                var o = e._traverse(r, n, i);
                                o && (t[s] = o) }), n(t)) : n(t) }, e._objectEach = e._each = function(e, t) { r.isObject(e) ? r.each(r.keys(e), function(n) { t(e[n], n) }) : r.each(e, t) }
                    };
                t.exports = { init: o, isNullOrUndefined: s }
            }).call(this, e("_process"))
        }, { "./request": 36, _process: 2, underscore: 17 }],
        44: [function(e, t, n) { t.exports = "js1.0.0" }, {}]
    }, {}, [19])(19)
});
