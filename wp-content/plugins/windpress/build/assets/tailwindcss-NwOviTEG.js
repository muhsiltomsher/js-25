var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
import { __commonJSMin as e, __export as t, __toESM as n } from "./chunk-GxRd6SvM.min.js";
import { Buffer as r, init_dist$1 as i } from "./dist-BSmntxBi.min.js";
import { createLogComposable as a } from "./log-yMc5ppo1.js";
import { useApi as o } from "./api-wSmiQczm.js";
import { init_dist$2 as s, process$1 as c } from "./dist-Doa7WVF-.min.js";
let E, Qe;
let __tla = (async () => {
  var _root, _hasMagic, _uflag, _parts, _parent, _parentIndex, _negs, _filledNegs, _options, _toString, _emptyExt, _e_instances, fillNegs_fn, _e_static, _a, parseAST_fn, partsToRegExp_fn, parseGlob_fn;
  var l = `` + new URL(`oxide_parser_wasm_bg-BLow32fC.wasm`, import.meta.url).href;
  i();
  var u = async (e2 = {}, t2) => {
    let n2;
    if (t2.startsWith(`data:`)) {
      let i2 = t2.replace(/^data:.*?base64,/, ``), a2;
      if (typeof r == `function` && typeof r.from == `function`) a2 = r.from(i2, `base64`);
      else if (typeof atob == `function`) {
        let e3 = atob(i2);
        a2 = new Uint8Array(e3.length);
        for (let t3 = 0; t3 < e3.length; t3++) a2[t3] = e3.charCodeAt(t3);
      } else throw Error(`Cannot decode base64-encoded data URL`);
      n2 = await WebAssembly.instantiate(a2, e2);
    } else {
      let r2 = await fetch(t2), i2 = r2.headers.get(`Content-Type`) || ``;
      if (`instantiateStreaming` in WebAssembly && i2.startsWith(`application/wasm`)) n2 = await WebAssembly.instantiateStreaming(r2, e2);
      else {
        let t3 = await r2.arrayBuffer();
        n2 = await WebAssembly.instantiate(t3, e2);
      }
    }
    return n2.instance.exports;
  };
  let d;
  function f(e2) {
    d = e2;
  }
  const p = typeof TextDecoder > `u` ? (0, module.require)(`util`).TextDecoder : TextDecoder;
  let m = new p(`utf-8`, {
    ignoreBOM: true,
    fatal: true
  });
  m.decode();
  let h = null;
  function g() {
    return (h === null || h.byteLength === 0) && (h = new Uint8Array(d.memory.buffer)), h;
  }
  function _(e2, t2) {
    return e2 >>>= 0, m.decode(g().subarray(e2, e2 + t2));
  }
  let v = 0;
  const y = typeof TextEncoder > `u` ? (0, module.require)(`util`).TextEncoder : TextEncoder;
  let b = new y(`utf-8`);
  const x = typeof b.encodeInto == `function` ? function(e2, t2) {
    return b.encodeInto(e2, t2);
  } : function(e2, t2) {
    let n2 = b.encode(e2);
    return t2.set(n2), {
      read: e2.length,
      written: n2.length
    };
  };
  function S(e2, t2, n2) {
    if (n2 === void 0) {
      let n3 = b.encode(e2), r3 = t2(n3.length, 1) >>> 0;
      return g().subarray(r3, r3 + n3.length).set(n3), v = n3.length, r3;
    }
    let r2 = e2.length, i2 = t2(r2, 1) >>> 0, a2 = g(), o2 = 0;
    for (; o2 < r2; o2++) {
      let t3 = e2.charCodeAt(o2);
      if (t3 > 127) break;
      a2[i2 + o2] = t3;
    }
    if (o2 !== r2) {
      o2 !== 0 && (e2 = e2.slice(o2)), i2 = n2(i2, r2, r2 = o2 + e2.length * 3, 1) >>> 0;
      let t3 = g().subarray(i2 + o2, i2 + r2), a3 = x(e2, t3);
      o2 += a3.written, i2 = n2(i2, r2, o2, 1) >>> 0;
    }
    return v = o2, i2;
  }
  let C = null;
  function w() {
    return (C === null || C.buffer.detached === true || C.buffer.detached === void 0 && C.buffer !== d.memory.buffer) && (C = new DataView(d.memory.buffer)), C;
  }
  function T(e2, t2) {
    e2 >>>= 0;
    let n2 = w(), r2 = [];
    for (let i2 = e2; i2 < e2 + 4 * t2; i2 += 4) r2.push(d.__wbindgen_export_0.get(n2.getUint32(i2, true)));
    return d.__externref_drop_slice(e2, t2), r2;
  }
  E = function(e2) {
    let t2 = S(e2, d.__wbindgen_malloc, d.__wbindgen_realloc), n2 = v, r2 = d.find_tw_candidates(t2, n2);
    var i2 = T(r2[0], r2[1]).slice();
    return d.__wbindgen_free(r2[0], r2[1] * 4, 4), i2;
  };
  function D() {
    let e2 = d.__wbindgen_export_0, t2 = e2.grow(4);
    e2.set(0, void 0), e2.set(t2 + 0, void 0), e2.set(t2 + 1, null), e2.set(t2 + 2, true), e2.set(t2 + 3, false);
  }
  function O(e2, t2) {
    let n2 = _(e2, t2);
    return n2;
  }
  var k = {};
  t(k, {
    __externref_drop_slice: () => re,
    __wbindgen_export_0: () => ee,
    __wbindgen_free: () => ie,
    __wbindgen_malloc: () => te,
    __wbindgen_realloc: () => ne,
    __wbindgen_start: () => F,
    find_tw_candidates: () => P,
    find_tw_candidates_ffi: () => M,
    free_candidates: () => N,
    memory: () => j
  }), URL = globalThis.URL;
  const A = await u({
    "./oxide_parser_wasm_bg.js": {
      __wbindgen_string_new: O,
      __wbindgen_init_externref_table: D
    }
  }, l), j = A.memory, M = A.find_tw_candidates_ffi, N = A.free_candidates, P = A.find_tw_candidates, ee = A.__wbindgen_export_0, te = A.__wbindgen_malloc, ne = A.__wbindgen_realloc, re = A.__externref_drop_slice, ie = A.__wbindgen_free, F = A.__wbindgen_start;
  f(k), F();
  var ae = e((exports, t2) => {
    t2.exports = n2;
    function n2(e2, t3, n3) {
      e2 instanceof RegExp && (e2 = r2(e2, n3)), t3 instanceof RegExp && (t3 = r2(t3, n3));
      var a2 = i2(e2, t3, n3);
      return a2 && {
        start: a2[0],
        end: a2[1],
        pre: n3.slice(0, a2[0]),
        body: n3.slice(a2[0] + e2.length, a2[1]),
        post: n3.slice(a2[1] + t3.length)
      };
    }
    function r2(e2, t3) {
      var n3 = t3.match(e2);
      return n3 ? n3[0] : null;
    }
    n2.range = i2;
    function i2(e2, t3, n3) {
      var r3, i3, a2, o2, s2, c2 = n3.indexOf(e2), l2 = n3.indexOf(t3, c2 + 1), u2 = c2;
      if (c2 >= 0 && l2 > 0) {
        if (e2 === t3) return [
          c2,
          l2
        ];
        for (r3 = [], a2 = n3.length; u2 >= 0 && !s2; ) u2 == c2 ? (r3.push(u2), c2 = n3.indexOf(e2, u2 + 1)) : r3.length == 1 ? s2 = [
          r3.pop(),
          l2
        ] : (i3 = r3.pop(), i3 < a2 && (a2 = i3, o2 = l2), l2 = n3.indexOf(t3, u2 + 1)), u2 = c2 < l2 && c2 >= 0 ? c2 : l2;
        r3.length && (s2 = [
          a2,
          o2
        ]);
      }
      return s2;
    }
  }), oe = e((exports, t2) => {
    var n2 = ae();
    t2.exports = f2;
    var r2 = `\0SLASH` + Math.random() + `\0`, i2 = `\0OPEN` + Math.random() + `\0`, a2 = `\0CLOSE` + Math.random() + `\0`, o2 = `\0COMMA` + Math.random() + `\0`, s2 = `\0PERIOD` + Math.random() + `\0`;
    function c2(e2) {
      return parseInt(e2, 10) == e2 ? parseInt(e2, 10) : e2.charCodeAt(0);
    }
    function l2(e2) {
      return e2.split(`\\\\`).join(r2).split(`\\{`).join(i2).split(`\\}`).join(a2).split(`\\,`).join(o2).split(`\\.`).join(s2);
    }
    function u2(e2) {
      return e2.split(r2).join(`\\`).split(i2).join(`{`).split(a2).join(`}`).split(o2).join(`,`).split(s2).join(`.`);
    }
    function d2(e2) {
      if (!e2) return [
        ``
      ];
      var t3 = [], r3 = n2(`{`, `}`, e2);
      if (!r3) return e2.split(`,`);
      var i3 = r3.pre, a3 = r3.body, o3 = r3.post, s3 = i3.split(`,`);
      s3[s3.length - 1] += `{` + a3 + `}`;
      var c3 = d2(o3);
      return o3.length && (s3[s3.length - 1] += c3.shift(), s3.push.apply(s3, c3)), t3.push.apply(t3, s3), t3;
    }
    function f2(e2) {
      return e2 ? (e2.substr(0, 2) === `{}` && (e2 = `\\{\\}` + e2.substr(2)), _2(l2(e2), true).map(u2)) : [];
    }
    function p2(e2) {
      return `{` + e2 + `}`;
    }
    function m2(e2) {
      return /^-?0\d/.test(e2);
    }
    function h2(e2, t3) {
      return e2 <= t3;
    }
    function g2(e2, t3) {
      return e2 >= t3;
    }
    function _2(e2, t3) {
      var r3 = [], i3 = n2(`{`, `}`, e2);
      if (!i3) return [
        e2
      ];
      var o3 = i3.pre, s3 = i3.post.length ? _2(i3.post, false) : [
        ``
      ];
      if (/\$$/.test(i3.pre)) for (var l3 = 0; l3 < s3.length; l3++) {
        var u3 = o3 + `{` + i3.body + `}` + s3[l3];
        r3.push(u3);
      }
      else {
        var f3 = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i3.body), v2 = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i3.body), y2 = f3 || v2, b2 = i3.body.indexOf(`,`) >= 0;
        if (!y2 && !b2) return i3.post.match(/,.*\}/) ? (e2 = i3.pre + `{` + i3.body + a2 + i3.post, _2(e2)) : [
          e2
        ];
        var x2;
        if (y2) x2 = i3.body.split(/\.\./);
        else if (x2 = d2(i3.body), x2.length === 1 && (x2 = _2(x2[0], false).map(p2), x2.length === 1)) return s3.map(function(e3) {
          return i3.pre + x2[0] + e3;
        });
        var S2;
        if (y2) {
          var C2 = c2(x2[0]), w2 = c2(x2[1]), T2 = Math.max(x2[0].length, x2[1].length), E2 = x2.length == 3 ? Math.abs(c2(x2[2])) : 1, D2 = h2, O2 = w2 < C2;
          O2 && (E2 *= -1, D2 = g2);
          var k2 = x2.some(m2);
          S2 = [];
          for (var A2 = C2; D2(A2, w2); A2 += E2) {
            var j2;
            if (v2) j2 = String.fromCharCode(A2), j2 === `\\` && (j2 = ``);
            else if (j2 = String(A2), k2) {
              var M2 = T2 - j2.length;
              if (M2 > 0) {
                var N2 = Array(M2 + 1).join(`0`);
                j2 = A2 < 0 ? `-` + N2 + j2.slice(1) : N2 + j2;
              }
            }
            S2.push(j2);
          }
        } else {
          S2 = [];
          for (var P2 = 0; P2 < x2.length; P2++) S2.push.apply(S2, _2(x2[P2], false));
        }
        for (var P2 = 0; P2 < S2.length; P2++) for (var l3 = 0; l3 < s3.length; l3++) {
          var u3 = o3 + S2[P2] + s3[l3];
          (!t3 || y2 || u3) && r3.push(u3);
        }
      }
      return r3;
    }
  });
  const se = 1024 * 64, I = (e2) => {
    if (typeof e2 != `string`) throw TypeError(`invalid pattern`);
    if (e2.length > se) throw TypeError(`pattern is too long`);
  }, ce = {
    "[:alnum:]": [
      `\\p{L}\\p{Nl}\\p{Nd}`,
      true
    ],
    "[:alpha:]": [
      `\\p{L}\\p{Nl}`,
      true
    ],
    "[:ascii:]": [
      `\\x00-\\x7f`,
      false
    ],
    "[:blank:]": [
      `\\p{Zs}\\t`,
      true
    ],
    "[:cntrl:]": [
      `\\p{Cc}`,
      true
    ],
    "[:digit:]": [
      `\\p{Nd}`,
      true
    ],
    "[:graph:]": [
      `\\p{Z}\\p{C}`,
      true,
      true
    ],
    "[:lower:]": [
      `\\p{Ll}`,
      true
    ],
    "[:print:]": [
      `\\p{C}`,
      true
    ],
    "[:punct:]": [
      `\\p{P}`,
      true
    ],
    "[:space:]": [
      `\\p{Z}\\t\\r\\n\\v\\f`,
      true
    ],
    "[:upper:]": [
      `\\p{Lu}`,
      true
    ],
    "[:word:]": [
      `\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}`,
      true
    ],
    "[:xdigit:]": [
      `A-Fa-f0-9`,
      false
    ]
  }, L = (e2) => e2.replace(/[[\]\\-]/g, `\\$&`), le = (e2) => e2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`), R = (e2) => e2.join(``), ue = (e2, t2) => {
    let n2 = t2;
    if (e2.charAt(n2) !== `[`) throw Error(`not in a brace expression`);
    let r2 = [], i2 = [], a2 = n2 + 1, o2 = false, s2 = false, c2 = false, l2 = false, u2 = n2, d2 = ``;
    WHILE: for (; a2 < e2.length; ) {
      let t3 = e2.charAt(a2);
      if ((t3 === `!` || t3 === `^`) && a2 === n2 + 1) {
        l2 = true, a2++;
        continue;
      }
      if (t3 === `]` && o2 && !c2) {
        u2 = a2 + 1;
        break;
      }
      if (o2 = true, t3 === `\\` && !c2) {
        c2 = true, a2++;
        continue;
      }
      if (t3 === `[` && !c2) {
        for (let [t4, [o3, c3, l3]] of Object.entries(ce)) if (e2.startsWith(t4, a2)) {
          if (d2) return [
            `$.`,
            false,
            e2.length - n2,
            true
          ];
          a2 += t4.length, l3 ? i2.push(o3) : r2.push(o3), s2 || (s2 = c3);
          continue WHILE;
        }
      }
      if (c2 = false, d2) {
        t3 > d2 ? r2.push(L(d2) + `-` + L(t3)) : t3 === d2 && r2.push(L(t3)), d2 = ``, a2++;
        continue;
      }
      if (e2.startsWith(`-]`, a2 + 1)) {
        r2.push(L(t3 + `-`)), a2 += 2;
        continue;
      }
      if (e2.startsWith(`-`, a2 + 1)) {
        d2 = t3, a2 += 2;
        continue;
      }
      r2.push(L(t3)), a2++;
    }
    if (u2 < a2) return [
      ``,
      false,
      0,
      false
    ];
    if (!r2.length && !i2.length) return [
      `$.`,
      false,
      e2.length - n2,
      true
    ];
    if (i2.length === 0 && r2.length === 1 && /^\\?.$/.test(r2[0]) && !l2) {
      let e3 = r2[0].length === 2 ? r2[0].slice(-1) : r2[0];
      return [
        le(e3),
        false,
        u2 - n2,
        false
      ];
    }
    let f2 = `[` + (l2 ? `^` : ``) + R(r2) + `]`, p2 = `[` + (l2 ? `` : `^`) + R(i2) + `]`, m2 = r2.length && i2.length ? `(` + f2 + `|` + p2 + `)` : r2.length ? f2 : p2;
    return [
      m2,
      s2,
      u2 - n2,
      true
    ];
  }, z = (e2, { windowsPathsNoEscape: t2 = false } = {}) => t2 ? e2.replace(/\[([^\/\\])\]/g, `$1`) : e2.replace(/((?!\\).|^)\[([^\/\\])\]/g, `$1$2`).replace(/\\([^\/])/g, `$1`), de = /* @__PURE__ */ new Set([
    `!`,
    `?`,
    `+`,
    `*`,
    `@`
  ]), B = (e2) => de.has(e2), fe = `(?!(?:^|/)\\.\\.?(?:$|/))`, V = `(?!\\.)`, pe = /* @__PURE__ */ new Set([
    `[`,
    `.`
  ]), me = /* @__PURE__ */ new Set([
    `..`,
    `.`
  ]), he = new Set(`().*{}+?[]^$\\!`), ge = (e2) => e2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`), H = `[^/]`, U = H + `*?`, W = H + `+?`;
  var G = (_a = class {
    constructor(e2, t2, n2 = {}) {
      __privateAdd(this, _e_instances);
      __publicField(this, "type");
      __privateAdd(this, _root);
      __privateAdd(this, _hasMagic);
      __privateAdd(this, _uflag, false);
      __privateAdd(this, _parts, []);
      __privateAdd(this, _parent);
      __privateAdd(this, _parentIndex);
      __privateAdd(this, _negs);
      __privateAdd(this, _filledNegs, false);
      __privateAdd(this, _options);
      __privateAdd(this, _toString);
      __privateAdd(this, _emptyExt, false);
      this.type = e2, e2 && __privateSet(this, _hasMagic, true), __privateSet(this, _parent, t2), __privateSet(this, _root, __privateGet(this, _parent) ? __privateGet(__privateGet(this, _parent), _root) : this), __privateSet(this, _options, __privateGet(this, _root) === this ? n2 : __privateGet(__privateGet(this, _root), _options)), __privateSet(this, _negs, __privateGet(this, _root) === this ? [] : __privateGet(__privateGet(this, _root), _negs)), e2 === `!` && !__privateGet(__privateGet(this, _root), _filledNegs) && __privateGet(this, _negs).push(this), __privateSet(this, _parentIndex, __privateGet(this, _parent) ? __privateGet(__privateGet(this, _parent), _parts).length : 0);
    }
    get hasMagic() {
      if (__privateGet(this, _hasMagic) !== void 0) return __privateGet(this, _hasMagic);
      for (let e2 of __privateGet(this, _parts)) {
        if (typeof e2 == `string`) continue;
        if (e2.type || e2.hasMagic) return __privateSet(this, _hasMagic, true);
      }
      return __privateGet(this, _hasMagic);
    }
    toString() {
      return __privateGet(this, _toString) === void 0 ? this.type ? __privateSet(this, _toString, this.type + `(` + __privateGet(this, _parts).map((e2) => String(e2)).join(`|`) + `)`) : __privateSet(this, _toString, __privateGet(this, _parts).map((e2) => String(e2)).join(``)) : __privateGet(this, _toString);
    }
    push(...t2) {
      for (let n2 of t2) {
        if (n2 === ``) continue;
        if (typeof n2 != `string` && !(n2 instanceof _a && __privateGet(n2, _parent) === this)) throw Error(`invalid part: ` + n2);
        __privateGet(this, _parts).push(n2);
      }
    }
    toJSON() {
      var _a2;
      let e2 = this.type === null ? __privateGet(this, _parts).slice().map((e3) => typeof e3 == `string` ? e3 : e3.toJSON()) : [
        this.type,
        ...__privateGet(this, _parts).map((e3) => e3.toJSON())
      ];
      return this.isStart() && !this.type && e2.unshift([]), this.isEnd() && (this === __privateGet(this, _root) || __privateGet(__privateGet(this, _root), _filledNegs) && ((_a2 = __privateGet(this, _parent)) == null ? void 0 : _a2.type) === `!`) && e2.push({}), e2;
    }
    isStart() {
      var _a2;
      if (__privateGet(this, _root) === this) return true;
      if (!((_a2 = __privateGet(this, _parent)) == null ? void 0 : _a2.isStart())) return false;
      if (__privateGet(this, _parentIndex) === 0) return true;
      let t2 = __privateGet(this, _parent);
      for (let n2 = 0; n2 < __privateGet(this, _parentIndex); n2++) {
        let r2 = __privateGet(t2, _parts)[n2];
        if (!(r2 instanceof _a && r2.type === `!`)) return false;
      }
      return true;
    }
    isEnd() {
      var _a2, _b, _c;
      if (__privateGet(this, _root) === this || ((_a2 = __privateGet(this, _parent)) == null ? void 0 : _a2.type) === `!`) return true;
      if (!((_b = __privateGet(this, _parent)) == null ? void 0 : _b.isEnd())) return false;
      if (!this.type) return (_c = __privateGet(this, _parent)) == null ? void 0 : _c.isEnd();
      let e2 = __privateGet(this, _parent) ? __privateGet(__privateGet(this, _parent), _parts).length : 0;
      return __privateGet(this, _parentIndex) === e2 - 1;
    }
    copyIn(e2) {
      typeof e2 == `string` ? this.push(e2) : this.push(e2.clone(this));
    }
    clone(t2) {
      let n2 = new _a(this.type, t2);
      for (let e2 of __privateGet(this, _parts)) n2.copyIn(e2);
      return n2;
    }
    static fromGlob(t2, n2 = {}) {
      var _a2;
      let r2 = new _a(null, void 0, n2);
      return __privateMethod(_a2 = _a, _e_static, parseAST_fn).call(_a2, t2, r2, 0, n2), r2;
    }
    toMMPattern() {
      if (this !== __privateGet(this, _root)) return __privateGet(this, _root).toMMPattern();
      let e2 = this.toString(), [t2, n2, r2, i2] = this.toRegExpSource(), a2 = r2 || __privateGet(this, _hasMagic) || __privateGet(this, _options).nocase && !__privateGet(this, _options).nocaseMagicOnly && e2.toUpperCase() !== e2.toLowerCase();
      if (!a2) return n2;
      let o2 = (__privateGet(this, _options).nocase ? `i` : ``) + (i2 ? `u` : ``);
      return Object.assign(RegExp(`^${t2}$`, o2), {
        _src: t2,
        _glob: e2
      });
    }
    get options() {
      return __privateGet(this, _options);
    }
    toRegExpSource(t2) {
      var _a2;
      let n2 = t2 ?? !!__privateGet(this, _options).dot;
      if (__privateGet(this, _root) === this && __privateMethod(this, _e_instances, fillNegs_fn).call(this), !this.type) {
        let r3 = this.isStart() && this.isEnd(), i3 = __privateGet(this, _parts).map((n3) => {
          var _a3;
          let [i4, a4, o4, s4] = typeof n3 == `string` ? __privateMethod(_a3 = _a, _e_static, parseGlob_fn).call(_a3, n3, __privateGet(this, _hasMagic), r3) : n3.toRegExpSource(t2);
          return __privateSet(this, _hasMagic, __privateGet(this, _hasMagic) || o4), __privateSet(this, _uflag, __privateGet(this, _uflag) || s4), i4;
        }).join(``), a3 = ``;
        if (this.isStart() && typeof __privateGet(this, _parts)[0] == `string`) {
          let e2 = __privateGet(this, _parts).length === 1 && me.has(__privateGet(this, _parts)[0]);
          if (!e2) {
            let e3 = pe, r4 = n2 && e3.has(i3.charAt(0)) || i3.startsWith(`\\.`) && e3.has(i3.charAt(2)) || i3.startsWith(`\\.\\.`) && e3.has(i3.charAt(4)), o4 = !n2 && !t2 && e3.has(i3.charAt(0));
            a3 = r4 ? fe : o4 ? V : ``;
          }
        }
        let o3 = ``;
        this.isEnd() && __privateGet(__privateGet(this, _root), _filledNegs) && ((_a2 = __privateGet(this, _parent)) == null ? void 0 : _a2.type) === `!` && (o3 = `(?:$|\\/)`);
        let s3 = a3 + i3 + o3;
        return [
          s3,
          z(i3),
          __privateSet(this, _hasMagic, !!__privateGet(this, _hasMagic)),
          __privateGet(this, _uflag)
        ];
      }
      let r2 = this.type === `*` || this.type === `+`, i2 = this.type === `!` ? `(?:(?!(?:` : `(?:`, a2 = __privateMethod(this, _e_instances, partsToRegExp_fn).call(this, n2);
      if (this.isStart() && this.isEnd() && !a2 && this.type !== `!`) {
        let e2 = this.toString();
        return __privateSet(this, _parts, [
          e2
        ]), this.type = null, __privateSet(this, _hasMagic, void 0), [
          e2,
          z(this.toString()),
          false,
          false
        ];
      }
      let o2 = !r2 || t2 || n2 || !V ? `` : __privateMethod(this, _e_instances, partsToRegExp_fn).call(this, true);
      o2 === a2 && (o2 = ``), o2 && (a2 = `(?:${a2})(?:${o2})*?`);
      let s2 = ``;
      if (this.type === `!` && __privateGet(this, _emptyExt)) s2 = (this.isStart() && !n2 ? V : ``) + W;
      else {
        let e2 = this.type === `!` ? `))` + (this.isStart() && !n2 && !t2 ? V : ``) + U + `)` : this.type === `@` ? `)` : this.type === `?` ? `)?` : this.type === `+` && o2 ? `)` : this.type === `*` && o2 ? `)?` : `)${this.type}`;
        s2 = i2 + a2 + e2;
      }
      return [
        s2,
        z(a2),
        __privateSet(this, _hasMagic, !!__privateGet(this, _hasMagic)),
        __privateGet(this, _uflag)
      ];
    }
  }, _root = new WeakMap(), _hasMagic = new WeakMap(), _uflag = new WeakMap(), _parts = new WeakMap(), _parent = new WeakMap(), _parentIndex = new WeakMap(), _negs = new WeakMap(), _filledNegs = new WeakMap(), _options = new WeakMap(), _toString = new WeakMap(), _emptyExt = new WeakMap(), _e_instances = new WeakSet(), fillNegs_fn = function() {
    if (this !== __privateGet(this, _root)) throw Error(`should only call on root`);
    if (__privateGet(this, _filledNegs)) return this;
    this.toString(), __privateSet(this, _filledNegs, true);
    let e2;
    for (; e2 = __privateGet(this, _negs).pop(); ) {
      if (e2.type !== `!`) continue;
      let t2 = e2, n2 = __privateGet(t2, _parent);
      for (; n2; ) {
        for (let r2 = __privateGet(t2, _parentIndex) + 1; !n2.type && r2 < __privateGet(n2, _parts).length; r2++) for (let t3 of __privateGet(e2, _parts)) {
          if (typeof t3 == `string`) throw Error(`string part in extglob AST??`);
          t3.copyIn(__privateGet(n2, _parts)[r2]);
        }
        t2 = n2, n2 = __privateGet(t2, _parent);
      }
    }
    return this;
  }, _e_static = new WeakSet(), parseAST_fn = function(t2, n2, r2, i2) {
    var _a2, _b;
    let a2 = false, o2 = false, s2 = -1, c2 = false;
    if (n2.type === null) {
      let l3 = r2, u3 = ``;
      for (; l3 < t2.length; ) {
        let r3 = t2.charAt(l3++);
        if (a2 || r3 === `\\`) {
          a2 = !a2, u3 += r3;
          continue;
        }
        if (o2) {
          l3 === s2 + 1 ? (r3 === `^` || r3 === `!`) && (c2 = true) : r3 === `]` && !(l3 === s2 + 2 && c2) && (o2 = false), u3 += r3;
          continue;
        } else if (r3 === `[`) {
          o2 = true, s2 = l3, c2 = false, u3 += r3;
          continue;
        }
        if (!i2.noext && B(r3) && t2.charAt(l3) === `(`) {
          n2.push(u3), u3 = ``;
          let a3 = new _a(r3, n2);
          l3 = __privateMethod(_a2 = _a, _e_static, parseAST_fn).call(_a2, t2, a3, l3, i2), n2.push(a3);
          continue;
        }
        u3 += r3;
      }
      return n2.push(u3), l3;
    }
    let l2 = r2 + 1, u2 = new _a(null, n2), d2 = [], f2 = ``;
    for (; l2 < t2.length; ) {
      let r3 = t2.charAt(l2++);
      if (a2 || r3 === `\\`) {
        a2 = !a2, f2 += r3;
        continue;
      }
      if (o2) {
        l2 === s2 + 1 ? (r3 === `^` || r3 === `!`) && (c2 = true) : r3 === `]` && !(l2 === s2 + 2 && c2) && (o2 = false), f2 += r3;
        continue;
      } else if (r3 === `[`) {
        o2 = true, s2 = l2, c2 = false, f2 += r3;
        continue;
      }
      if (B(r3) && t2.charAt(l2) === `(`) {
        u2.push(f2), f2 = ``;
        let n3 = new _a(r3, u2);
        u2.push(n3), l2 = __privateMethod(_b = _a, _e_static, parseAST_fn).call(_b, t2, n3, l2, i2);
        continue;
      }
      if (r3 === `|`) {
        u2.push(f2), f2 = ``, d2.push(u2), u2 = new _a(null, n2);
        continue;
      }
      if (r3 === `)`) return f2 === `` && __privateGet(n2, _parts).length === 0 && __privateSet(n2, _emptyExt, true), u2.push(f2), f2 = ``, n2.push(...d2, u2), l2;
      f2 += r3;
    }
    return n2.type = null, __privateSet(n2, _hasMagic, void 0), __privateSet(n2, _parts, [
      t2.substring(r2 - 1)
    ]), l2;
  }, partsToRegExp_fn = function(e2) {
    return __privateGet(this, _parts).map((t2) => {
      if (typeof t2 == `string`) throw Error(`string type in extglob ast??`);
      let [n2, r2, i2, a2] = t2.toRegExpSource(e2);
      return __privateSet(this, _uflag, __privateGet(this, _uflag) || a2), n2;
    }).filter((e3) => !(this.isStart() && this.isEnd()) || !!e3).join(`|`);
  }, parseGlob_fn = function(e2, t2, n2 = false) {
    let r2 = false, i2 = ``, a2 = false;
    for (let o2 = 0; o2 < e2.length; o2++) {
      let s2 = e2.charAt(o2);
      if (r2) {
        r2 = false, i2 += (he.has(s2) ? `\\` : ``) + s2;
        continue;
      }
      if (s2 === `\\`) {
        o2 === e2.length - 1 ? i2 += `\\\\` : r2 = true;
        continue;
      }
      if (s2 === `[`) {
        let [n3, r3, s3, c2] = ue(e2, o2);
        if (s3) {
          i2 += n3, a2 || (a2 = r3), o2 += s3 - 1, t2 || (t2 = c2);
          continue;
        }
      }
      if (s2 === `*`) {
        n2 && e2 === `*` ? i2 += W : i2 += U, t2 = true;
        continue;
      }
      if (s2 === `?`) {
        i2 += H, t2 = true;
        continue;
      }
      i2 += ge(s2);
    }
    return [
      i2,
      z(e2),
      !!t2,
      a2
    ];
  }, __privateAdd(_a, _e_static), _a);
  const _e = (e2, { windowsPathsNoEscape: t2 = false } = {}) => t2 ? e2.replace(/[?*()[\]]/g, `[$&]`) : e2.replace(/[?*()[\]\\]/g, `\\$&`);
  s();
  var ve = n(oe());
  const K = (e2, t2, n2 = {}) => (I(t2), !n2.nocomment && t2.charAt(0) === `#` ? false : new $(t2, n2).match(e2)), ye = /^\*+([^+@!?\*\[\(]*)$/, be = (e2) => (t2) => !t2.startsWith(`.`) && t2.endsWith(e2), xe = (e2) => (t2) => t2.endsWith(e2), Se = (e2) => (e2 = e2.toLowerCase(), (t2) => !t2.startsWith(`.`) && t2.toLowerCase().endsWith(e2)), Ce = (e2) => (e2 = e2.toLowerCase(), (t2) => t2.toLowerCase().endsWith(e2)), we = /^\*+\.\*+$/, Te = (e2) => !e2.startsWith(`.`) && e2.includes(`.`), Ee = (e2) => e2 !== `.` && e2 !== `..` && e2.includes(`.`), De = /^\.\*+$/, Oe = (e2) => e2 !== `.` && e2 !== `..` && e2.startsWith(`.`), ke = /^\*+$/, Ae = (e2) => e2.length !== 0 && !e2.startsWith(`.`), je = (e2) => e2.length !== 0 && e2 !== `.` && e2 !== `..`, Me = /^\?+([^+@!?\*\[\(]*)?$/, Ne = ([e2, t2 = ``]) => {
    let n2 = q([
      e2
    ]);
    return t2 ? (t2 = t2.toLowerCase(), (e3) => n2(e3) && e3.toLowerCase().endsWith(t2)) : n2;
  }, Pe = ([e2, t2 = ``]) => {
    let n2 = J([
      e2
    ]);
    return t2 ? (t2 = t2.toLowerCase(), (e3) => n2(e3) && e3.toLowerCase().endsWith(t2)) : n2;
  }, Fe = ([e2, t2 = ``]) => {
    let n2 = J([
      e2
    ]);
    return t2 ? (e3) => n2(e3) && e3.endsWith(t2) : n2;
  }, Ie = ([e2, t2 = ``]) => {
    let n2 = q([
      e2
    ]);
    return t2 ? (e3) => n2(e3) && e3.endsWith(t2) : n2;
  }, q = ([e2]) => {
    let t2 = e2.length;
    return (e3) => e3.length === t2 && !e3.startsWith(`.`);
  }, J = ([e2]) => {
    let t2 = e2.length;
    return (e3) => e3.length === t2 && e3 !== `.` && e3 !== `..`;
  }, Y = typeof c == `object` && c ? {}.__MINIMATCH_TESTING_PLATFORM__ || c.platform : `posix`, X = {
    win32: {
      sep: `\\`
    },
    posix: {
      sep: `/`
    }
  }, Le = Y === `win32` ? X.win32.sep : X.posix.sep;
  K.sep = Le;
  const Z = Symbol(`globstar **`);
  K.GLOBSTAR = Z;
  const Re = `[^/]`, ze = Re + `*?`, Be = `(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?`, Ve = `(?:(?!(?:\\/|^)\\.).)*?`, He = (e2, t2 = {}) => (n2) => K(n2, e2, t2);
  K.filter = He;
  const Q = (e2, t2 = {}) => Object.assign({}, e2, t2), Ue = (e2) => {
    if (!e2 || typeof e2 != `object` || !Object.keys(e2).length) return K;
    let t2 = K, n2 = (n3, r2, i2 = {}) => t2(n3, r2, Q(e2, i2));
    return Object.assign(n2, {
      Minimatch: class extends t2.Minimatch {
        constructor(t3, n3 = {}) {
          super(t3, Q(e2, n3));
        }
        static defaults(n3) {
          return t2.defaults(Q(e2, n3)).Minimatch;
        }
      },
      AST: class extends t2.AST {
        constructor(t3, n3, r2 = {}) {
          super(t3, n3, Q(e2, r2));
        }
        static fromGlob(n3, r2 = {}) {
          return t2.AST.fromGlob(n3, Q(e2, r2));
        }
      },
      unescape: (n3, r2 = {}) => t2.unescape(n3, Q(e2, r2)),
      escape: (n3, r2 = {}) => t2.escape(n3, Q(e2, r2)),
      filter: (n3, r2 = {}) => t2.filter(n3, Q(e2, r2)),
      defaults: (n3) => t2.defaults(Q(e2, n3)),
      makeRe: (n3, r2 = {}) => t2.makeRe(n3, Q(e2, r2)),
      braceExpand: (n3, r2 = {}) => t2.braceExpand(n3, Q(e2, r2)),
      match: (n3, r2, i2 = {}) => t2.match(n3, r2, Q(e2, i2)),
      sep: t2.sep,
      GLOBSTAR: Z
    });
  };
  K.defaults = Ue;
  const We = (e2, t2 = {}) => (I(e2), t2.nobrace || !/\{(?:(?!\{).)*\}/.test(e2) ? [
    e2
  ] : (0, ve.default)(e2));
  K.braceExpand = We;
  const Ge = (e2, t2 = {}) => new $(e2, t2).makeRe();
  K.makeRe = Ge;
  const Ke = (e2, t2, n2 = {}) => {
    let r2 = new $(t2, n2);
    return e2 = e2.filter((e3) => r2.match(e3)), r2.options.nonull && !e2.length && e2.push(t2), e2;
  };
  K.match = Ke;
  const qe = /[?*]|[+@!]\(.*?\)|\[|\]/, Je = (e2) => e2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`);
  var $ = class {
    constructor(e2, t2 = {}) {
      __publicField(this, "options");
      __publicField(this, "set");
      __publicField(this, "pattern");
      __publicField(this, "windowsPathsNoEscape");
      __publicField(this, "nonegate");
      __publicField(this, "negate");
      __publicField(this, "comment");
      __publicField(this, "empty");
      __publicField(this, "preserveMultipleSlashes");
      __publicField(this, "partial");
      __publicField(this, "globSet");
      __publicField(this, "globParts");
      __publicField(this, "nocase");
      __publicField(this, "isWindows");
      __publicField(this, "platform");
      __publicField(this, "windowsNoMagicRoot");
      __publicField(this, "regexp");
      I(e2), t2 || (t2 = {}), this.options = t2, this.pattern = e2, this.platform = t2.platform || Y, this.isWindows = this.platform === `win32`, this.windowsPathsNoEscape = !!t2.windowsPathsNoEscape || t2.allowWindowsEscape === false, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, `/`)), this.preserveMultipleSlashes = !!t2.preserveMultipleSlashes, this.regexp = null, this.negate = false, this.nonegate = !!t2.nonegate, this.comment = false, this.empty = false, this.partial = !!t2.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = t2.windowsNoMagicRoot === void 0 ? !!(this.isWindows && this.nocase) : t2.windowsNoMagicRoot, this.globSet = [], this.globParts = [], this.set = [], this.make();
    }
    hasMagic() {
      if (this.options.magicalBraces && this.set.length > 1) return true;
      for (let e2 of this.set) for (let t2 of e2) if (typeof t2 != `string`) return true;
      return false;
    }
    debug(...e2) {
    }
    make() {
      let e2 = this.pattern, t2 = this.options;
      if (!t2.nocomment && e2.charAt(0) === `#`) {
        this.comment = true;
        return;
      }
      if (!e2) {
        this.empty = true;
        return;
      }
      this.parseNegate(), this.globSet = [
        ...new Set(this.braceExpand())
      ], t2.debug && (this.debug = (...e3) => console.error(...e3)), this.debug(this.pattern, this.globSet);
      let n2 = this.globSet.map((e3) => this.slashSplit(e3));
      this.globParts = this.preprocess(n2), this.debug(this.pattern, this.globParts);
      let r2 = this.globParts.map((e3, t3, n3) => {
        if (this.isWindows && this.windowsNoMagicRoot) {
          let t4 = e3[0] === `` && e3[1] === `` && (e3[2] === `?` || !qe.test(e3[2])) && !qe.test(e3[3]), n4 = /^[a-z]:/i.test(e3[0]);
          if (t4) return [
            ...e3.slice(0, 4),
            ...e3.slice(4).map((e4) => this.parse(e4))
          ];
          if (n4) return [
            e3[0],
            ...e3.slice(1).map((e4) => this.parse(e4))
          ];
        }
        return e3.map((e4) => this.parse(e4));
      });
      if (this.debug(this.pattern, r2), this.set = r2.filter((e3) => e3.indexOf(false) === -1), this.isWindows) for (let e3 = 0; e3 < this.set.length; e3++) {
        let t3 = this.set[e3];
        t3[0] === `` && t3[1] === `` && this.globParts[e3][2] === `?` && typeof t3[3] == `string` && /^[a-z]:$/i.test(t3[3]) && (t3[2] = `?`);
      }
      this.debug(this.pattern, this.set);
    }
    preprocess(e2) {
      if (this.options.noglobstar) for (let t3 = 0; t3 < e2.length; t3++) for (let n2 = 0; n2 < e2[t3].length; n2++) e2[t3][n2] === `**` && (e2[t3][n2] = `*`);
      let { optimizationLevel: t2 = 1 } = this.options;
      return t2 >= 2 ? (e2 = this.firstPhasePreProcess(e2), e2 = this.secondPhasePreProcess(e2)) : e2 = t2 >= 1 ? this.levelOneOptimize(e2) : this.adjascentGlobstarOptimize(e2), e2;
    }
    adjascentGlobstarOptimize(e2) {
      return e2.map((e3) => {
        let t2 = -1;
        for (; (t2 = e3.indexOf(`**`, t2 + 1)) !== -1; ) {
          let n2 = t2;
          for (; e3[n2 + 1] === `**`; ) n2++;
          n2 !== t2 && e3.splice(t2, n2 - t2);
        }
        return e3;
      });
    }
    levelOneOptimize(e2) {
      return e2.map((e3) => (e3 = e3.reduce((e4, t2) => {
        let n2 = e4[e4.length - 1];
        return t2 === `**` && n2 === `**` ? e4 : t2 === `..` && n2 && n2 !== `..` && n2 !== `.` && n2 !== `**` ? (e4.pop(), e4) : (e4.push(t2), e4);
      }, []), e3.length === 0 ? [
        ``
      ] : e3));
    }
    levelTwoFileOptimize(e2) {
      Array.isArray(e2) || (e2 = this.slashSplit(e2));
      let t2 = false;
      do {
        if (t2 = false, !this.preserveMultipleSlashes) {
          for (let n3 = 1; n3 < e2.length - 1; n3++) {
            let r2 = e2[n3];
            n3 === 1 && r2 === `` && e2[0] === `` || (r2 === `.` || r2 === ``) && (t2 = true, e2.splice(n3, 1), n3--);
          }
          e2[0] === `.` && e2.length === 2 && (e2[1] === `.` || e2[1] === ``) && (t2 = true, e2.pop());
        }
        let n2 = 0;
        for (; (n2 = e2.indexOf(`..`, n2 + 1)) !== -1; ) {
          let r2 = e2[n2 - 1];
          r2 && r2 !== `.` && r2 !== `..` && r2 !== `**` && (t2 = true, e2.splice(n2 - 1, 2), n2 -= 2);
        }
      } while (t2);
      return e2.length === 0 ? [
        ``
      ] : e2;
    }
    firstPhasePreProcess(e2) {
      let t2 = false;
      do {
        t2 = false;
        for (let n2 of e2) {
          let r2 = -1;
          for (; (r2 = n2.indexOf(`**`, r2 + 1)) !== -1; ) {
            let i3 = r2;
            for (; n2[i3 + 1] === `**`; ) i3++;
            i3 > r2 && n2.splice(r2 + 1, i3 - r2);
            let a2 = n2[r2 + 1], o2 = n2[r2 + 2], s2 = n2[r2 + 3];
            if (a2 !== `..` || !o2 || o2 === `.` || o2 === `..` || !s2 || s2 === `.` || s2 === `..`) continue;
            t2 = true, n2.splice(r2, 1);
            let c2 = n2.slice(0);
            c2[r2] = `**`, e2.push(c2), r2--;
          }
          if (!this.preserveMultipleSlashes) {
            for (let e3 = 1; e3 < n2.length - 1; e3++) {
              let r3 = n2[e3];
              e3 === 1 && r3 === `` && n2[0] === `` || (r3 === `.` || r3 === ``) && (t2 = true, n2.splice(e3, 1), e3--);
            }
            n2[0] === `.` && n2.length === 2 && (n2[1] === `.` || n2[1] === ``) && (t2 = true, n2.pop());
          }
          let i2 = 0;
          for (; (i2 = n2.indexOf(`..`, i2 + 1)) !== -1; ) {
            let e3 = n2[i2 - 1];
            if (e3 && e3 !== `.` && e3 !== `..` && e3 !== `**`) {
              t2 = true;
              let e4 = i2 === 1 && n2[i2 + 1] === `**`, r3 = e4 ? [
                `.`
              ] : [];
              n2.splice(i2 - 1, 2, ...r3), n2.length === 0 && n2.push(``), i2 -= 2;
            }
          }
        }
      } while (t2);
      return e2;
    }
    secondPhasePreProcess(e2) {
      for (let t2 = 0; t2 < e2.length - 1; t2++) for (let n2 = t2 + 1; n2 < e2.length; n2++) {
        let r2 = this.partsMatch(e2[t2], e2[n2], !this.preserveMultipleSlashes);
        if (r2) {
          e2[t2] = [], e2[n2] = r2;
          break;
        }
      }
      return e2.filter((e3) => e3.length);
    }
    partsMatch(e2, t2, n2 = false) {
      let r2 = 0, i2 = 0, a2 = [], o2 = ``;
      for (; r2 < e2.length && i2 < t2.length; ) if (e2[r2] === t2[i2]) a2.push(o2 === `b` ? t2[i2] : e2[r2]), r2++, i2++;
      else if (n2 && e2[r2] === `**` && t2[i2] === e2[r2 + 1]) a2.push(e2[r2]), r2++;
      else if (n2 && t2[i2] === `**` && e2[r2] === t2[i2 + 1]) a2.push(t2[i2]), i2++;
      else if (e2[r2] === `*` && t2[i2] && (this.options.dot || !t2[i2].startsWith(`.`)) && t2[i2] !== `**`) {
        if (o2 === `b`) return false;
        o2 = `a`, a2.push(e2[r2]), r2++, i2++;
      } else if (t2[i2] === `*` && e2[r2] && (this.options.dot || !e2[r2].startsWith(`.`)) && e2[r2] !== `**`) {
        if (o2 === `a`) return false;
        o2 = `b`, a2.push(t2[i2]), r2++, i2++;
      } else return false;
      return e2.length === t2.length && a2;
    }
    parseNegate() {
      if (this.nonegate) return;
      let e2 = this.pattern, t2 = false, n2 = 0;
      for (let r2 = 0; r2 < e2.length && e2.charAt(r2) === `!`; r2++) t2 = !t2, n2++;
      n2 && (this.pattern = e2.slice(n2)), this.negate = t2;
    }
    matchOne(e2, t2, n2 = false) {
      let r2 = this.options;
      if (this.isWindows) {
        let n3 = typeof e2[0] == `string` && /^[a-z]:$/i.test(e2[0]), r3 = !n3 && e2[0] === `` && e2[1] === `` && e2[2] === `?` && /^[a-z]:$/i.test(e2[3]), i3 = typeof t2[0] == `string` && /^[a-z]:$/i.test(t2[0]), a3 = !i3 && t2[0] === `` && t2[1] === `` && t2[2] === `?` && typeof t2[3] == `string` && /^[a-z]:$/i.test(t2[3]), o3 = r3 ? 3 : n3 ? 0 : void 0, s3 = a3 ? 3 : i3 ? 0 : void 0;
        if (typeof o3 == `number` && typeof s3 == `number`) {
          let [n4, r4] = [
            e2[o3],
            t2[s3]
          ];
          n4.toLowerCase() === r4.toLowerCase() && (t2[s3] = n4, s3 > o3 ? t2 = t2.slice(s3) : o3 > s3 && (e2 = e2.slice(o3)));
        }
      }
      let { optimizationLevel: i2 = 1 } = this.options;
      i2 >= 2 && (e2 = this.levelTwoFileOptimize(e2)), this.debug(`matchOne`, this, {
        file: e2,
        pattern: t2
      }), this.debug(`matchOne`, e2.length, t2.length);
      for (var a2 = 0, o2 = 0, s2 = e2.length, c2 = t2.length; a2 < s2 && o2 < c2; a2++, o2++) {
        this.debug(`matchOne loop`);
        var l2 = t2[o2], u2 = e2[a2];
        if (this.debug(t2, l2, u2), l2 === false) return false;
        if (l2 === Z) {
          this.debug(`GLOBSTAR`, [
            t2,
            l2,
            u2
          ]);
          var d2 = a2, f2 = o2 + 1;
          if (f2 === c2) {
            for (this.debug(`** at the end`); a2 < s2; a2++) if (e2[a2] === `.` || e2[a2] === `..` || !r2.dot && e2[a2].charAt(0) === `.`) return false;
            return true;
          }
          for (; d2 < s2; ) {
            var p2 = e2[d2];
            if (this.debug(`
globstar while`, e2, d2, t2, f2, p2), this.matchOne(e2.slice(d2), t2.slice(f2), n2)) return this.debug(`globstar found match!`, d2, s2, p2), true;
            if (p2 === `.` || p2 === `..` || !r2.dot && p2.charAt(0) === `.`) {
              this.debug(`dot detected!`, e2, d2, t2, f2);
              break;
            }
            this.debug(`globstar swallow a segment, and continue`), d2++;
          }
          return !!(n2 && (this.debug(`
>>> no match, partial?`, e2, d2, t2, f2), d2 === s2));
        }
        let i3;
        if (typeof l2 == `string` ? (i3 = u2 === l2, this.debug(`string match`, l2, u2, i3)) : (i3 = l2.test(u2), this.debug(`pattern match`, l2, u2, i3)), !i3) return false;
      }
      if (a2 === s2 && o2 === c2) return true;
      if (a2 === s2) return n2;
      if (o2 === c2) return a2 === s2 - 1 && e2[a2] === ``;
      throw Error(`wtf?`);
    }
    braceExpand() {
      return We(this.pattern, this.options);
    }
    parse(e2) {
      I(e2);
      let t2 = this.options;
      if (e2 === `**`) return Z;
      if (e2 === ``) return ``;
      let n2, r2 = null;
      (n2 = e2.match(ke)) ? r2 = t2.dot ? je : Ae : (n2 = e2.match(ye)) ? r2 = (t2.nocase ? t2.dot ? Ce : Se : t2.dot ? xe : be)(n2[1]) : (n2 = e2.match(Me)) ? r2 = (t2.nocase ? t2.dot ? Pe : Ne : t2.dot ? Fe : Ie)(n2) : (n2 = e2.match(we)) ? r2 = t2.dot ? Ee : Te : (n2 = e2.match(De)) && (r2 = Oe);
      let i2 = G.fromGlob(e2, this.options).toMMPattern();
      return r2 && typeof i2 == `object` && Reflect.defineProperty(i2, `test`, {
        value: r2
      }), i2;
    }
    makeRe() {
      if (this.regexp || this.regexp === false) return this.regexp;
      let e2 = this.set;
      if (!e2.length) return this.regexp = false, this.regexp;
      let t2 = this.options, n2 = t2.noglobstar ? ze : t2.dot ? Be : Ve, r2 = new Set(t2.nocase ? [
        `i`
      ] : []), i2 = e2.map((e3) => {
        let t3 = e3.map((e4) => {
          if (e4 instanceof RegExp) for (let t4 of e4.flags.split(``)) r2.add(t4);
          return typeof e4 == `string` ? Je(e4) : e4 === Z ? Z : e4._src;
        });
        return t3.forEach((e4, r3) => {
          let i3 = t3[r3 + 1], a3 = t3[r3 - 1];
          e4 !== Z || a3 === Z || (a3 === void 0 ? i3 !== void 0 && i3 !== Z ? t3[r3 + 1] = `(?:\\/|` + n2 + `\\/)?` + i3 : t3[r3] = n2 : i3 === void 0 ? t3[r3 - 1] = a3 + `(?:\\/|` + n2 + `)?` : i3 !== Z && (t3[r3 - 1] = a3 + `(?:\\/|\\/` + n2 + `\\/)` + i3, t3[r3 + 1] = Z));
        }), t3.filter((e4) => e4 !== Z).join(`/`);
      }).join(`|`), [a2, o2] = e2.length > 1 ? [
        `(?:`,
        `)`
      ] : [
        ``,
        ``
      ];
      i2 = `^` + a2 + i2 + o2 + `$`, this.negate && (i2 = `^(?!` + i2 + `).+$`);
      try {
        this.regexp = new RegExp(i2, [
          ...r2
        ].join(``));
      } catch {
        this.regexp = false;
      }
      return this.regexp;
    }
    slashSplit(e2) {
      return this.preserveMultipleSlashes ? e2.split(`/`) : this.isWindows && /^\/\/[^\/]+/.test(e2) ? [
        ``,
        ...e2.split(/\/+/)
      ] : e2.split(/\/+/);
    }
    match(e2, t2 = this.partial) {
      if (this.debug(`match`, e2, this.pattern), this.comment) return false;
      if (this.empty) return e2 === ``;
      if (e2 === `/` && t2) return true;
      let n2 = this.options;
      this.isWindows && (e2 = e2.split(`\\`).join(`/`));
      let r2 = this.slashSplit(e2);
      this.debug(this.pattern, `split`, r2);
      let i2 = this.set;
      this.debug(this.pattern, `set`, i2);
      let a2 = r2[r2.length - 1];
      if (!a2) for (let e3 = r2.length - 2; !a2 && e3 >= 0; e3--) a2 = r2[e3];
      for (let e3 = 0; e3 < i2.length; e3++) {
        let o2 = i2[e3], s2 = r2;
        n2.matchBase && o2.length === 1 && (s2 = [
          a2
        ]);
        let c2 = this.matchOne(s2, o2, t2);
        if (c2) return n2.flipNegate ? true : !this.negate;
      }
      return n2.flipNegate ? false : this.negate;
    }
    static defaults(e2) {
      return K.defaults(e2).Minimatch;
    }
  };
  K.AST = G, K.Minimatch = $, K.escape = _e, K.unescape = z;
  var Ye = /^(@[^\/]+\/[^@\/]+)(?:@([^\/]+))?(\/.*)?$/, Xe = /^([^@\/]+)(?:@([^\/]+))?(\/.*)?$/;
  function Ze(e2) {
    let t2 = Ye.exec(e2) || Xe.exec(e2);
    if (!t2) throw Error(`[parse-package-name] invalid package name: ${e2}`);
    return {
      name: t2[1] || ``,
      version: t2[2] || `latest`,
      path: t2[3] || ``
    };
  }
  Qe = async function(e2) {
    let t2 = a(), n2 = [], r2 = e2.map(async (e3) => {
      if (e3.negated) return;
      let r3;
      if (e3.pattern.startsWith(`jsdelivr:`) ? (r3 = t2.add({
        message: `Loading source: jsDelivr (${e3.pattern})`,
        type: `info`,
        group: `source`
      }), n2.push(...await $e(e3))) : e3.pattern.startsWith(`http`) ? (r3 = t2.add({
        message: `Loading source: Network (${e3.pattern})`,
        type: `info`,
        group: `source`
      }), n2.push(...await et(e3))) : e3.pattern.startsWith(`wp-content:`) && (r3 = t2.add({
        message: `Loading source: WP Content (${e3.pattern})`,
        type: `info`,
        group: `source`
      }), n2.push(...await tt(e3))), r3) {
        let e4 = t2.logs.value.find((e5) => e5.id === r3);
        e4 && (e4.message += ` - done`);
      }
    });
    await Promise.all(r2);
    let i2 = [], o2 = t2.add({
      message: `Scanning sources...`,
      type: `info`,
      group: `source`
    });
    n2.forEach((e3) => {
      let t3 = E(e3);
      i2.push(...t3);
    });
    let s2 = t2.logs.value.find((e3) => e3.id === o2);
    return s2 && (s2.message += ` - done`), Array.from(new Set(i2));
  };
  async function $e(e2) {
    let t2 = [], n2 = e2.pattern.slice(9), { name: r2, version: i2, path: a2 } = Ze(n2), o2 = await fetch(`https://data.jsdelivr.com/v1/packages/npm/${r2}@${i2}?structure=flat`).then((e3) => e3.json()).then((e3) => e3.files).then((e3) => e3.map((e4) => e4.name)).then((e3) => e3.filter((e4) => K(e4, a2))), s2 = o2.map(async (e3) => {
      let n3 = await fetch(`https://cdn.jsdelivr.net/npm/${r2}@${i2}${e3}`).then((e4) => e4.text());
      t2.push(n3);
    });
    return await Promise.all(s2), t2;
  }
  async function et(e2) {
    let t2 = await fetch(e2.pattern).then((e3) => e3.text());
    return [
      t2
    ];
  }
  async function tt(e2) {
    let t2 = e2.pattern.slice(11), n2 = await o().post(`admin/local-file-provider/scan`, {
      path: t2
    }).then((e3) => e3.data);
    return n2.contents.map((e3) => e3.content);
  }
})();
export {
  __tla,
  E as find_tw_candidates,
  Qe as loadSource
};
