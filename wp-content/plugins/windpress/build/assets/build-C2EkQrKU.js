import { __commonJSMin as e, __toESM as t } from "./chunk-GxRd6SvM.min.js";
import { Buffer as n, init_dist$1 as r } from "./dist-BSmntxBi.min.js";
import { Aa as i, loadStylesheet as a, preprocess as o } from "./pre-process-CIY4vBOu.js";
import { loadModule as s } from "./cssesc-5IgvSXT7.js";
import { Features as c, init as l, lightningcss_node_default as u, transform as d } from "./lightningcss-wasm-DXap5Yub.min.js";
var f = e((exports, t2) => {
  r(), function(n2, r2) {
    typeof exports == `object` && t2 !== void 0 ? r2(exports) : typeof define == `function` && define.amd ? define([`exports`], r2) : (n2 = typeof globalThis < `u` ? globalThis : n2 || self, r2(n2.sourcemapCodec = {}));
  }(void 0, function(e5) {
    "use strict";
    let t3 = 44, r2 = 59, i2 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`, a2 = new Uint8Array(64), o2 = new Uint8Array(128);
    for (let e6 = 0; e6 < i2.length; e6++) {
      let t4 = i2.charCodeAt(e6);
      a2[e6] = t4, o2[t4] = e6;
    }
    function s2(e6, t4) {
      let n2 = 0, r3 = 0, i3 = 0;
      do {
        let t5 = e6.next();
        i3 = o2[t5], n2 |= (i3 & 31) << r3, r3 += 5;
      } while (i3 & 32);
      let a3 = n2 & 1;
      return n2 >>>= 1, a3 && (n2 = -2147483648 | -n2), t4 + n2;
    }
    function c2(e6, t4, n2) {
      let r3 = t4 - n2;
      r3 = r3 < 0 ? -r3 << 1 | 1 : r3 << 1;
      do {
        let t5 = r3 & 31;
        r3 >>>= 5, r3 > 0 && (t5 |= 32), e6.write(a2[t5]);
      } while (r3 > 0);
      return t4;
    }
    function l2(e6, n2) {
      return e6.pos >= n2 ? false : e6.peek() !== t3;
    }
    let u2 = 1024 * 16, d2 = typeof TextDecoder < `u` ? new TextDecoder() : n === void 0 ? { decode(e6) {
      let t4 = ``;
      for (let n2 = 0; n2 < e6.length; n2++) t4 += String.fromCharCode(e6[n2]);
      return t4;
    } } : { decode(e6) {
      let t4 = n.from(e6.buffer, e6.byteOffset, e6.byteLength);
      return t4.toString();
    } };
    class f2 {
      constructor() {
        this.pos = 0, this.out = ``, this.buffer = new Uint8Array(u2);
      }
      write(e6) {
        let { buffer: t4 } = this;
        t4[this.pos++] = e6, this.pos === u2 && (this.out += d2.decode(t4), this.pos = 0);
      }
      flush() {
        let { buffer: e6, out: t4, pos: n2 } = this;
        return n2 > 0 ? t4 + d2.decode(e6.subarray(0, n2)) : t4;
      }
    }
    class p2 {
      constructor(e6) {
        this.pos = 0, this.buffer = e6;
      }
      next() {
        return this.buffer.charCodeAt(this.pos++);
      }
      peek() {
        return this.buffer.charCodeAt(this.pos);
      }
      indexOf(e6) {
        let { buffer: t4, pos: n2 } = this, r3 = t4.indexOf(e6, n2);
        return r3 === -1 ? t4.length : r3;
      }
    }
    let m2 = [];
    function h2(e6) {
      let { length: t4 } = e6, n2 = new p2(e6), r3 = [], i3 = [], a3 = 0;
      for (; n2.pos < t4; n2.pos++) {
        a3 = s2(n2, a3);
        let e7 = s2(n2, 0);
        if (!l2(n2, t4)) {
          let t5 = i3.pop();
          t5[2] = a3, t5[3] = e7;
          continue;
        }
        let o3 = s2(n2, 0), c3 = s2(n2, 0), u3 = c3 & 1, d3 = u3 ? [a3, e7, 0, 0, o3, s2(n2, 0)] : [a3, e7, 0, 0, o3], f3 = m2;
        if (l2(n2, t4)) {
          f3 = [];
          do {
            let e8 = s2(n2, 0);
            f3.push(e8);
          } while (l2(n2, t4));
        }
        d3.vars = f3, r3.push(d3), i3.push(d3);
      }
      return r3;
    }
    function g2(e6) {
      let t4 = new f2();
      for (let n2 = 0; n2 < e6.length; ) n2 = _2(e6, n2, t4, [0]);
      return t4.flush();
    }
    function _2(e6, n2, r3, i3) {
      let a3 = e6[n2], { 0: o3, 1: s3, 2: l3, 3: u3, 4: d3, vars: f3 } = a3;
      n2 > 0 && r3.write(t3), i3[0] = c2(r3, o3, i3[0]), c2(r3, s3, 0), c2(r3, d3, 0);
      let p3 = a3.length === 6 ? 1 : 0;
      c2(r3, p3, 0), a3.length === 6 && c2(r3, a3[5], 0);
      for (let e7 of f3) c2(r3, e7, 0);
      for (n2++; n2 < e6.length; ) {
        let t4 = e6[n2], { 0: a4, 1: o4 } = t4;
        if (a4 > l3 || a4 === l3 && o4 >= u3) break;
        n2 = _2(e6, n2, r3, i3);
      }
      return r3.write(t3), i3[0] = c2(r3, l3, i3[0]), c2(r3, u3, 0), n2;
    }
    function v2(e6) {
      let { length: t4 } = e6, n2 = new p2(e6), r3 = [], i3 = [], a3 = 0, o3 = 0, c3 = 0, u3 = 0, d3 = 0, f3 = 0, h3 = 0, g3 = 0;
      do {
        let e7 = n2.indexOf(`;`), t5 = 0;
        for (; n2.pos < e7; n2.pos++) {
          if (t5 = s2(n2, t5), !l2(n2, e7)) {
            let e8 = i3.pop();
            e8[2] = a3, e8[3] = t5;
            continue;
          }
          let p3 = s2(n2, 0), _3 = p3 & 1, v3 = p3 & 2, y3 = p3 & 4, b3 = null, x3 = m2, S3;
          if (_3) {
            let e8 = s2(n2, o3);
            c3 = s2(n2, o3 === e8 ? c3 : 0), o3 = e8, S3 = [a3, t5, 0, 0, e8, c3];
          } else S3 = [a3, t5, 0, 0];
          if (S3.isScope = !!y3, v3) {
            let e8 = u3, t6 = d3;
            u3 = s2(n2, u3);
            let r4 = e8 === u3;
            d3 = s2(n2, r4 ? d3 : 0), f3 = s2(n2, r4 && t6 === d3 ? f3 : 0), b3 = [u3, d3, f3];
          }
          if (S3.callsite = b3, l2(n2, e7)) {
            x3 = [];
            do {
              h3 = a3, g3 = t5;
              let e8 = s2(n2, 0), r4;
              if (e8 < -1) {
                r4 = [[s2(n2, 0)]];
                for (let t6 = -1; t6 > e8; t6--) {
                  let e9 = h3;
                  h3 = s2(n2, h3), g3 = s2(n2, h3 === e9 ? g3 : 0);
                  let t7 = s2(n2, 0);
                  r4.push([t7, h3, g3]);
                }
              } else r4 = [[e8]];
              x3.push(r4);
            } while (l2(n2, e7));
          }
          S3.bindings = x3, r3.push(S3), i3.push(S3);
        }
        a3++, n2.pos = e7 + 1;
      } while (n2.pos < t4);
      return r3;
    }
    function y2(e6) {
      if (e6.length === 0) return ``;
      let t4 = new f2();
      for (let n2 = 0; n2 < e6.length; ) n2 = b2(e6, n2, t4, [0, 0, 0, 0, 0, 0, 0]);
      return t4.flush();
    }
    function b2(e6, n2, r3, i3) {
      let a3 = e6[n2], { 0: o3, 1: s3, 2: l3, 3: u3, isScope: d3, callsite: f3, bindings: p3 } = a3;
      i3[0] < o3 ? (x2(r3, i3[0], o3), i3[0] = o3, i3[1] = 0) : n2 > 0 && r3.write(t3), i3[1] = c2(r3, a3[1], i3[1]);
      let m3 = (a3.length === 6 ? 1 : 0) | (f3 ? 2 : 0) | (d3 ? 4 : 0);
      if (c2(r3, m3, 0), a3.length === 6) {
        let { 4: e7, 5: t4 } = a3;
        e7 !== i3[2] && (i3[3] = 0), i3[2] = c2(r3, e7, i3[2]), i3[3] = c2(r3, t4, i3[3]);
      }
      if (f3) {
        let { 0: e7, 1: t4, 2: n3 } = a3.callsite;
        e7 === i3[4] ? t4 !== i3[5] && (i3[6] = 0) : (i3[5] = 0, i3[6] = 0), i3[4] = c2(r3, e7, i3[4]), i3[5] = c2(r3, t4, i3[5]), i3[6] = c2(r3, n3, i3[6]);
      }
      if (p3) for (let e7 of p3) {
        e7.length > 1 && c2(r3, -e7.length, 0);
        let t4 = e7[0][0];
        c2(r3, t4, 0);
        let n3 = o3, i4 = s3;
        for (let t5 = 1; t5 < e7.length; t5++) {
          let a4 = e7[t5];
          n3 = c2(r3, a4[1], n3), i4 = c2(r3, a4[2], i4), c2(r3, a4[0], 0);
        }
      }
      for (n2++; n2 < e6.length; ) {
        let t4 = e6[n2], { 0: a4, 1: o4 } = t4;
        if (a4 > l3 || a4 === l3 && o4 >= u3) break;
        n2 = b2(e6, n2, r3, i3);
      }
      return i3[0] < l3 ? (x2(r3, i3[0], l3), i3[0] = l3, i3[1] = 0) : r3.write(t3), i3[1] = c2(r3, u3, i3[1]), n2;
    }
    function x2(e6, t4, n2) {
      do
        e6.write(r2);
      while (++t4 < n2);
    }
    function S2(e6) {
      let { length: t4 } = e6, n2 = new p2(e6), r3 = [], i3 = 0, a3 = 0, o3 = 0, c3 = 0, u3 = 0;
      do {
        let e7 = n2.indexOf(`;`), t5 = [], d3 = true, f3 = 0;
        for (i3 = 0; n2.pos < e7; ) {
          let r4;
          i3 = s2(n2, i3), i3 < f3 && (d3 = false), f3 = i3, l2(n2, e7) ? (a3 = s2(n2, a3), o3 = s2(n2, o3), c3 = s2(n2, c3), l2(n2, e7) ? (u3 = s2(n2, u3), r4 = [i3, a3, o3, c3, u3]) : r4 = [i3, a3, o3, c3]) : r4 = [i3], t5.push(r4), n2.pos++;
        }
        d3 || C2(t5), r3.push(t5), n2.pos = e7 + 1;
      } while (n2.pos <= t4);
      return r3;
    }
    function C2(e6) {
      e6.sort(w2);
    }
    function w2(e6, t4) {
      return e6[0] - t4[0];
    }
    function T2(e6) {
      let n2 = new f2(), i3 = 0, a3 = 0, o3 = 0, s3 = 0;
      for (let l3 = 0; l3 < e6.length; l3++) {
        let u3 = e6[l3];
        if (l3 > 0 && n2.write(r2), u3.length === 0) continue;
        let d3 = 0;
        for (let e7 = 0; e7 < u3.length; e7++) {
          let r3 = u3[e7];
          e7 > 0 && n2.write(t3), d3 = c2(n2, r3[0], d3), r3.length !== 1 && (i3 = c2(n2, r3[1], i3), a3 = c2(n2, r3[2], a3), o3 = c2(n2, r3[3], o3), r3.length !== 4 && (s3 = c2(n2, r3[4], s3)));
        }
      }
      return n2.flush();
    }
    e5.decode = S2, e5.decodeGeneratedRanges = v2, e5.decodeOriginalScopes = h2, e5.encode = T2, e5.encodeGeneratedRanges = y2, e5.encodeOriginalScopes = g2, Object.defineProperty(e5, `__esModule`, { value: true });
  });
});
r();
var p = t(f(), 1), m = class e2 {
  constructor(t2) {
    this.bits = t2 instanceof e2 ? t2.bits.slice() : [];
  }
  add(e5) {
    this.bits[e5 >> 5] |= 1 << (e5 & 31);
  }
  has(e5) {
    return !!(this.bits[e5 >> 5] & 1 << (e5 & 31));
  }
}, h = class e3 {
  constructor(e5, t2, n2) {
    this.start = e5, this.end = t2, this.original = n2, this.intro = ``, this.outro = ``, this.content = n2, this.storeName = false, this.edited = false, this.previous = null, this.next = null;
  }
  appendLeft(e5) {
    this.outro += e5;
  }
  appendRight(e5) {
    this.intro += e5;
  }
  clone() {
    let t2 = new e3(this.start, this.end, this.original);
    return t2.intro = this.intro, t2.outro = this.outro, t2.content = this.content, t2.storeName = this.storeName, t2.edited = this.edited, t2;
  }
  contains(e5) {
    return this.start < e5 && e5 < this.end;
  }
  eachNext(e5) {
    let t2 = this;
    for (; t2; ) e5(t2), t2 = t2.next;
  }
  eachPrevious(e5) {
    let t2 = this;
    for (; t2; ) e5(t2), t2 = t2.previous;
  }
  edit(e5, t2, n2) {
    return this.content = e5, n2 || (this.intro = ``, this.outro = ``), this.storeName = t2, this.edited = true, this;
  }
  prependLeft(e5) {
    this.outro = e5 + this.outro;
  }
  prependRight(e5) {
    this.intro = e5 + this.intro;
  }
  reset() {
    this.intro = ``, this.outro = ``, this.edited && (this.content = this.original, this.storeName = false, this.edited = false);
  }
  split(t2) {
    let n2 = t2 - this.start, r2 = this.original.slice(0, n2), i2 = this.original.slice(n2);
    this.original = r2;
    let a2 = new e3(t2, this.end, i2);
    return a2.outro = this.outro, this.outro = ``, this.end = t2, this.edited ? (a2.edit(``, false), this.content = ``) : this.content = r2, a2.next = this.next, a2.next && (a2.next.previous = a2), a2.previous = this, this.next = a2, a2;
  }
  toString() {
    return this.intro + this.content + this.outro;
  }
  trimEnd(e5) {
    if (this.outro = this.outro.replace(e5, ``), this.outro.length) return true;
    let t2 = this.content.replace(e5, ``);
    if (t2.length) return t2 !== this.content && (this.split(this.start + t2.length).edit(``, void 0, true), this.edited && this.edit(t2, this.storeName, true)), true;
    if (this.edit(``, void 0, true), this.intro = this.intro.replace(e5, ``), this.intro.length) return true;
  }
  trimStart(e5) {
    if (this.intro = this.intro.replace(e5, ``), this.intro.length) return true;
    let t2 = this.content.replace(e5, ``);
    if (t2.length) {
      if (t2 !== this.content) {
        let e6 = this.split(this.end - t2.length);
        this.edited && e6.edit(t2, this.storeName, true), this.edit(``, void 0, true);
      }
      return true;
    } else if (this.edit(``, void 0, true), this.outro = this.outro.replace(e5, ``), this.outro.length) return true;
  }
};
function g() {
  return typeof globalThis < `u` && typeof globalThis.btoa == `function` ? (e5) => globalThis.btoa(unescape(encodeURIComponent(e5))) : typeof n == `function` ? (e5) => n.from(e5, `utf-8`).toString(`base64`) : () => {
    throw Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
  };
}
const _ = g();
var v = class {
  constructor(e5) {
    this.version = 3, this.file = e5.file, this.sources = e5.sources, this.sourcesContent = e5.sourcesContent, this.names = e5.names, this.mappings = (0, p.encode)(e5.mappings), e5.x_google_ignoreList !== void 0 && (this.x_google_ignoreList = e5.x_google_ignoreList), e5.debugId !== void 0 && (this.debugId = e5.debugId);
  }
  toString() {
    return JSON.stringify(this);
  }
  toUrl() {
    return `data:application/json;charset=utf-8;base64,` + _(this.toString());
  }
};
function y(e5) {
  let t2 = e5.split(`
`), n2 = t2.filter((e6) => /^\t+/.test(e6)), r2 = t2.filter((e6) => /^ {2,}/.test(e6));
  if (n2.length === 0 && r2.length === 0) return null;
  if (n2.length >= r2.length) return `	`;
  let i2 = r2.reduce((e6, t3) => {
    let n3 = /^ +/.exec(t3)[0].length;
    return Math.min(n3, e6);
  }, 1 / 0);
  return Array(i2 + 1).join(` `);
}
function b(e5, t2) {
  let n2 = e5.split(/[/\\]/), r2 = t2.split(/[/\\]/);
  for (n2.pop(); n2[0] === r2[0]; ) n2.shift(), r2.shift();
  if (n2.length) {
    let e6 = n2.length;
    for (; e6--; ) n2[e6] = `..`;
  }
  return n2.concat(r2).join(`/`);
}
const x = Object.prototype.toString;
function S(e5) {
  return x.call(e5) === `[object Object]`;
}
function C(e5) {
  let t2 = e5.split(`
`), n2 = [];
  for (let e6 = 0, r2 = 0; e6 < t2.length; e6++) n2.push(r2), r2 += t2[e6].length + 1;
  return function(e6) {
    let t3 = 0, r2 = n2.length;
    for (; t3 < r2; ) {
      let i3 = t3 + r2 >> 1;
      e6 < n2[i3] ? r2 = i3 : t3 = i3 + 1;
    }
    let i2 = t3 - 1, a2 = e6 - n2[i2];
    return { line: i2, column: a2 };
  };
}
const w = /\w/;
var T = class {
  constructor(e5) {
    this.hires = e5, this.generatedCodeLine = 0, this.generatedCodeColumn = 0, this.raw = [], this.rawSegments = this.raw[this.generatedCodeLine] = [], this.pending = null;
  }
  addEdit(e5, t2, n2, r2) {
    if (t2.length) {
      let i2 = t2.length - 1, a2 = t2.indexOf(`
`, 0), o2 = -1;
      for (; a2 >= 0 && i2 > a2; ) {
        let i3 = [this.generatedCodeColumn, e5, n2.line, n2.column];
        r2 >= 0 && i3.push(r2), this.rawSegments.push(i3), this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, o2 = a2, a2 = t2.indexOf(`
`, a2 + 1);
      }
      let s2 = [this.generatedCodeColumn, e5, n2.line, n2.column];
      r2 >= 0 && s2.push(r2), this.rawSegments.push(s2), this.advance(t2.slice(o2 + 1));
    } else this.pending && (this.rawSegments.push(this.pending), this.advance(t2));
    this.pending = null;
  }
  addUneditedChunk(e5, t2, n2, r2, i2) {
    let a2 = t2.start, o2 = true, s2 = false;
    for (; a2 < t2.end; ) {
      if (n2[a2] === `
`) r2.line += 1, r2.column = 0, this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, o2 = true, s2 = false;
      else {
        if (this.hires || o2 || i2.has(a2)) {
          let t3 = [this.generatedCodeColumn, e5, r2.line, r2.column];
          this.hires === `boundary` ? w.test(n2[a2]) ? s2 || (this.rawSegments.push(t3), s2 = true) : (this.rawSegments.push(t3), s2 = false) : this.rawSegments.push(t3);
        }
        r2.column += 1, this.generatedCodeColumn += 1, o2 = false;
      }
      a2 += 1;
    }
    this.pending = null;
  }
  advance(e5) {
    if (!e5) return;
    let t2 = e5.split(`
`);
    if (t2.length > 1) {
      for (let e6 = 0; e6 < t2.length - 1; e6++) this.generatedCodeLine++, this.raw[this.generatedCodeLine] = this.rawSegments = [];
      this.generatedCodeColumn = 0;
    }
    this.generatedCodeColumn += t2[t2.length - 1].length;
  }
};
const E = `
`, D = { insertLeft: false, insertRight: false, storeName: false };
var O = class e4 {
  constructor(e5, t2 = {}) {
    let n2 = new h(0, e5.length, e5);
    Object.defineProperties(this, { original: { writable: true, value: e5 }, outro: { writable: true, value: `` }, intro: { writable: true, value: `` }, firstChunk: { writable: true, value: n2 }, lastChunk: { writable: true, value: n2 }, lastSearchedChunk: { writable: true, value: n2 }, byStart: { writable: true, value: {} }, byEnd: { writable: true, value: {} }, filename: { writable: true, value: t2.filename }, indentExclusionRanges: { writable: true, value: t2.indentExclusionRanges }, sourcemapLocations: { writable: true, value: new m() }, storedNames: { writable: true, value: {} }, indentStr: { writable: true, value: void 0 }, ignoreList: { writable: true, value: t2.ignoreList }, offset: { writable: true, value: t2.offset || 0 } }), this.byStart[0] = n2, this.byEnd[e5.length] = n2;
  }
  addSourcemapLocation(e5) {
    this.sourcemapLocations.add(e5);
  }
  append(e5) {
    if (typeof e5 != `string`) throw TypeError(`outro content must be a string`);
    return this.outro += e5, this;
  }
  appendLeft(e5, t2) {
    if (e5 += this.offset, typeof t2 != `string`) throw TypeError(`inserted content must be a string`);
    this._split(e5);
    let n2 = this.byEnd[e5];
    return n2 ? n2.appendLeft(t2) : this.intro += t2, this;
  }
  appendRight(e5, t2) {
    if (e5 += this.offset, typeof t2 != `string`) throw TypeError(`inserted content must be a string`);
    this._split(e5);
    let n2 = this.byStart[e5];
    return n2 ? n2.appendRight(t2) : this.outro += t2, this;
  }
  clone() {
    let t2 = new e4(this.original, { filename: this.filename, offset: this.offset }), n2 = this.firstChunk, r2 = t2.firstChunk = t2.lastSearchedChunk = n2.clone();
    for (; n2; ) {
      t2.byStart[r2.start] = r2, t2.byEnd[r2.end] = r2;
      let e5 = n2.next, i2 = e5 && e5.clone();
      i2 && (r2.next = i2, i2.previous = r2, r2 = i2), n2 = e5;
    }
    return t2.lastChunk = r2, this.indentExclusionRanges && (t2.indentExclusionRanges = this.indentExclusionRanges.slice()), t2.sourcemapLocations = new m(this.sourcemapLocations), t2.intro = this.intro, t2.outro = this.outro, t2;
  }
  generateDecodedMap(e5) {
    e5 || (e5 = {});
    let t2 = 0, n2 = Object.keys(this.storedNames), r2 = new T(e5.hires), i2 = C(this.original);
    return this.intro && r2.advance(this.intro), this.firstChunk.eachNext((e6) => {
      let a2 = i2(e6.start);
      e6.intro.length && r2.advance(e6.intro), e6.edited ? r2.addEdit(t2, e6.content, a2, e6.storeName ? n2.indexOf(e6.original) : -1) : r2.addUneditedChunk(t2, e6, this.original, a2, this.sourcemapLocations), e6.outro.length && r2.advance(e6.outro);
    }), { file: e5.file ? e5.file.split(/[/\\]/).pop() : void 0, sources: [e5.source ? b(e5.file || ``, e5.source) : e5.file || ``], sourcesContent: e5.includeContent ? [this.original] : void 0, names: n2, mappings: r2.raw, x_google_ignoreList: this.ignoreList ? [t2] : void 0 };
  }
  generateMap(e5) {
    return new v(this.generateDecodedMap(e5));
  }
  _ensureindentStr() {
    this.indentStr === void 0 && (this.indentStr = y(this.original));
  }
  _getRawIndentString() {
    return this._ensureindentStr(), this.indentStr;
  }
  getIndentString() {
    return this._ensureindentStr(), this.indentStr === null ? `	` : this.indentStr;
  }
  indent(e5, t2) {
    let n2 = /^[^\r\n]/gm;
    if (S(e5) && (t2 = e5, e5 = void 0), e5 === void 0 && (this._ensureindentStr(), e5 = this.indentStr || `	`), e5 === ``) return this;
    t2 || (t2 = {});
    let r2 = {};
    if (t2.exclude) {
      let e6 = typeof t2.exclude[0] == `number` ? [t2.exclude] : t2.exclude;
      e6.forEach((e7) => {
        for (let t3 = e7[0]; t3 < e7[1]; t3 += 1) r2[t3] = true;
      });
    }
    let i2 = t2.indentStart !== false, a2 = (t3) => i2 ? `${e5}${t3}` : (i2 = true, t3);
    this.intro = this.intro.replace(n2, a2);
    let o2 = 0, s2 = this.firstChunk;
    for (; s2; ) {
      let t3 = s2.end;
      if (s2.edited) r2[o2] || (s2.content = s2.content.replace(n2, a2), s2.content.length && (i2 = s2.content[s2.content.length - 1] === `
`));
      else for (o2 = s2.start; o2 < t3; ) {
        if (!r2[o2]) {
          let t4 = this.original[o2];
          t4 === `
` ? i2 = true : t4 !== `\r` && i2 && (i2 = false, o2 === s2.start ? s2.prependRight(e5) : (this._splitChunk(s2, o2), s2 = s2.next, s2.prependRight(e5)));
        }
        o2 += 1;
      }
      o2 = s2.end, s2 = s2.next;
    }
    return this.outro = this.outro.replace(n2, a2), this;
  }
  insert() {
    throw Error(`magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)`);
  }
  insertLeft(e5, t2) {
    return D.insertLeft || (console.warn(`magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead`), D.insertLeft = true), this.appendLeft(e5, t2);
  }
  insertRight(e5, t2) {
    return D.insertRight || (console.warn(`magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead`), D.insertRight = true), this.prependRight(e5, t2);
  }
  move(e5, t2, n2) {
    if (e5 += this.offset, t2 += this.offset, n2 += this.offset, n2 >= e5 && n2 <= t2) throw Error(`Cannot move a selection inside itself`);
    this._split(e5), this._split(t2), this._split(n2);
    let r2 = this.byStart[e5], i2 = this.byEnd[t2], a2 = r2.previous, o2 = i2.next, s2 = this.byStart[n2];
    if (!s2 && i2 === this.lastChunk) return this;
    let c2 = s2 ? s2.previous : this.lastChunk;
    return a2 && (a2.next = o2), o2 && (o2.previous = a2), c2 && (c2.next = r2), s2 && (s2.previous = i2), r2.previous || (this.firstChunk = i2.next), i2.next || (this.lastChunk = r2.previous, this.lastChunk.next = null), r2.previous = c2, i2.next = s2 || null, c2 || (this.firstChunk = r2), s2 || (this.lastChunk = i2), this;
  }
  overwrite(e5, t2, n2, r2) {
    return r2 || (r2 = {}), this.update(e5, t2, n2, { ...r2, overwrite: !r2.contentOnly });
  }
  update(e5, t2, n2, r2) {
    if (e5 += this.offset, t2 += this.offset, typeof n2 != `string`) throw TypeError(`replacement content must be a string`);
    if (this.original.length !== 0) {
      for (; e5 < 0; ) e5 += this.original.length;
      for (; t2 < 0; ) t2 += this.original.length;
    }
    if (t2 > this.original.length) throw Error(`end is out of bounds`);
    if (e5 === t2) throw Error(`Cannot overwrite a zero-length range \u2013 use appendLeft or prependRight instead`);
    this._split(e5), this._split(t2), r2 === true && (D.storeName || (console.warn(`The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string`), D.storeName = true), r2 = { storeName: true });
    let i2 = r2 === void 0 ? false : r2.storeName, a2 = r2 === void 0 ? false : r2.overwrite;
    if (i2) {
      let n3 = this.original.slice(e5, t2);
      Object.defineProperty(this.storedNames, n3, { writable: true, value: true, enumerable: true });
    }
    let o2 = this.byStart[e5], s2 = this.byEnd[t2];
    if (o2) {
      let e6 = o2;
      for (; e6 !== s2; ) {
        if (e6.next !== this.byStart[e6.end]) throw Error(`Cannot overwrite across a split point`);
        e6 = e6.next, e6.edit(``, false);
      }
      o2.edit(n2, i2, !a2);
    } else {
      let r3 = new h(e5, t2, ``).edit(n2, i2);
      s2.next = r3, r3.previous = s2;
    }
    return this;
  }
  prepend(e5) {
    if (typeof e5 != `string`) throw TypeError(`outro content must be a string`);
    return this.intro = e5 + this.intro, this;
  }
  prependLeft(e5, t2) {
    if (e5 += this.offset, typeof t2 != `string`) throw TypeError(`inserted content must be a string`);
    this._split(e5);
    let n2 = this.byEnd[e5];
    return n2 ? n2.prependLeft(t2) : this.intro = t2 + this.intro, this;
  }
  prependRight(e5, t2) {
    if (e5 += this.offset, typeof t2 != `string`) throw TypeError(`inserted content must be a string`);
    this._split(e5);
    let n2 = this.byStart[e5];
    return n2 ? n2.prependRight(t2) : this.outro = t2 + this.outro, this;
  }
  remove(e5, t2) {
    if (e5 += this.offset, t2 += this.offset, this.original.length !== 0) {
      for (; e5 < 0; ) e5 += this.original.length;
      for (; t2 < 0; ) t2 += this.original.length;
    }
    if (e5 === t2) return this;
    if (e5 < 0 || t2 > this.original.length) throw Error(`Character is out of bounds`);
    if (e5 > t2) throw Error(`end must be greater than start`);
    this._split(e5), this._split(t2);
    let n2 = this.byStart[e5];
    for (; n2; ) n2.intro = ``, n2.outro = ``, n2.edit(``), n2 = t2 > n2.end ? this.byStart[n2.end] : null;
    return this;
  }
  reset(e5, t2) {
    if (e5 += this.offset, t2 += this.offset, this.original.length !== 0) {
      for (; e5 < 0; ) e5 += this.original.length;
      for (; t2 < 0; ) t2 += this.original.length;
    }
    if (e5 === t2) return this;
    if (e5 < 0 || t2 > this.original.length) throw Error(`Character is out of bounds`);
    if (e5 > t2) throw Error(`end must be greater than start`);
    this._split(e5), this._split(t2);
    let n2 = this.byStart[e5];
    for (; n2; ) n2.reset(), n2 = t2 > n2.end ? this.byStart[n2.end] : null;
    return this;
  }
  lastChar() {
    if (this.outro.length) return this.outro[this.outro.length - 1];
    let e5 = this.lastChunk;
    do {
      if (e5.outro.length) return e5.outro[e5.outro.length - 1];
      if (e5.content.length) return e5.content[e5.content.length - 1];
      if (e5.intro.length) return e5.intro[e5.intro.length - 1];
    } while (e5 = e5.previous);
    return this.intro.length ? this.intro[this.intro.length - 1] : ``;
  }
  lastLine() {
    let e5 = this.outro.lastIndexOf(E);
    if (e5 !== -1) return this.outro.substr(e5 + 1);
    let t2 = this.outro, n2 = this.lastChunk;
    do {
      if (n2.outro.length > 0) {
        if (e5 = n2.outro.lastIndexOf(E), e5 !== -1) return n2.outro.substr(e5 + 1) + t2;
        t2 = n2.outro + t2;
      }
      if (n2.content.length > 0) {
        if (e5 = n2.content.lastIndexOf(E), e5 !== -1) return n2.content.substr(e5 + 1) + t2;
        t2 = n2.content + t2;
      }
      if (n2.intro.length > 0) {
        if (e5 = n2.intro.lastIndexOf(E), e5 !== -1) return n2.intro.substr(e5 + 1) + t2;
        t2 = n2.intro + t2;
      }
    } while (n2 = n2.previous);
    return e5 = this.intro.lastIndexOf(E), e5 === -1 ? this.intro + t2 : this.intro.substr(e5 + 1) + t2;
  }
  slice(e5 = 0, t2 = this.original.length - this.offset) {
    if (e5 += this.offset, t2 += this.offset, this.original.length !== 0) {
      for (; e5 < 0; ) e5 += this.original.length;
      for (; t2 < 0; ) t2 += this.original.length;
    }
    let n2 = ``, r2 = this.firstChunk;
    for (; r2 && (r2.start > e5 || r2.end <= e5); ) {
      if (r2.start < t2 && r2.end >= t2) return n2;
      r2 = r2.next;
    }
    if (r2 && r2.edited && r2.start !== e5) throw Error(`Cannot use replaced character ${e5} as slice start anchor.`);
    let i2 = r2;
    for (; r2; ) {
      r2.intro && (i2 !== r2 || r2.start === e5) && (n2 += r2.intro);
      let a2 = r2.start < t2 && r2.end >= t2;
      if (a2 && r2.edited && r2.end !== t2) throw Error(`Cannot use replaced character ${t2} as slice end anchor.`);
      let o2 = i2 === r2 ? e5 - r2.start : 0, s2 = a2 ? r2.content.length + t2 - r2.end : r2.content.length;
      if (n2 += r2.content.slice(o2, s2), r2.outro && (!a2 || r2.end === t2) && (n2 += r2.outro), a2) break;
      r2 = r2.next;
    }
    return n2;
  }
  snip(e5, t2) {
    let n2 = this.clone();
    return n2.remove(0, e5), n2.remove(t2, n2.original.length), n2;
  }
  _split(e5) {
    if (this.byStart[e5] || this.byEnd[e5]) return;
    let t2 = this.lastSearchedChunk, n2 = e5 > t2.end;
    for (; t2; ) {
      if (t2.contains(e5)) return this._splitChunk(t2, e5);
      t2 = n2 ? this.byStart[t2.end] : this.byEnd[t2.start];
    }
  }
  _splitChunk(e5, t2) {
    if (e5.edited && e5.content.length) {
      let n3 = C(this.original)(t2);
      throw Error(`Cannot split a chunk that has already been edited (${n3.line}:${n3.column} \u2013 "${e5.original}")`);
    }
    let n2 = e5.split(t2);
    return this.byEnd[t2] = e5, this.byStart[t2] = n2, this.byEnd[n2.end] = n2, e5 === this.lastChunk && (this.lastChunk = n2), this.lastSearchedChunk = e5, true;
  }
  toString() {
    let e5 = this.intro, t2 = this.firstChunk;
    for (; t2; ) e5 += t2.toString(), t2 = t2.next;
    return e5 + this.outro;
  }
  isEmpty() {
    let e5 = this.firstChunk;
    do
      if (e5.intro.length && e5.intro.trim() || e5.content.length && e5.content.trim() || e5.outro.length && e5.outro.trim()) return false;
    while (e5 = e5.next);
    return true;
  }
  length() {
    let e5 = this.firstChunk, t2 = 0;
    do
      t2 += e5.intro.length + e5.content.length + e5.outro.length;
    while (e5 = e5.next);
    return t2;
  }
  trimLines() {
    return this.trim(`[\\r\\n]`);
  }
  trim(e5) {
    return this.trimStart(e5).trimEnd(e5);
  }
  trimEndAborted(e5) {
    let t2 = RegExp((e5 || `\\s`) + `+$`);
    if (this.outro = this.outro.replace(t2, ``), this.outro.length) return true;
    let n2 = this.lastChunk;
    do {
      let e6 = n2.end, r2 = n2.trimEnd(t2);
      if (n2.end !== e6 && (this.lastChunk === n2 && (this.lastChunk = n2.next), this.byEnd[n2.end] = n2, this.byStart[n2.next.start] = n2.next, this.byEnd[n2.next.end] = n2.next), r2) return true;
      n2 = n2.previous;
    } while (n2);
    return false;
  }
  trimEnd(e5) {
    return this.trimEndAborted(e5), this;
  }
  trimStartAborted(e5) {
    let t2 = RegExp(`^` + (e5 || `\\s`) + `+`);
    if (this.intro = this.intro.replace(t2, ``), this.intro.length) return true;
    let n2 = this.firstChunk;
    do {
      let e6 = n2.end, r2 = n2.trimStart(t2);
      if (n2.end !== e6 && (n2 === this.lastChunk && (this.lastChunk = n2.next), this.byEnd[n2.end] = n2, this.byStart[n2.next.start] = n2.next, this.byEnd[n2.next.end] = n2.next), r2) return true;
      n2 = n2.next;
    } while (n2);
    return false;
  }
  trimStart(e5) {
    return this.trimStartAborted(e5), this;
  }
  hasChanged() {
    return this.original !== this.toString();
  }
  _replaceRegexp(e5, t2) {
    function n2(e6, n3) {
      return typeof t2 == `string` ? t2.replace(/\$(\$|&|\d+)/g, (t3, n4) => {
        if (n4 === `$`) return `$`;
        if (n4 === `&`) return e6[0];
        let r3 = +n4;
        return r3 < e6.length ? e6[+n4] : `$${n4}`;
      }) : t2(...e6, e6.index, n3, e6.groups);
    }
    function r2(e6, t3) {
      let n3, r3 = [];
      for (; n3 = e6.exec(t3); ) r3.push(n3);
      return r3;
    }
    if (e5.global) {
      let t3 = r2(e5, this.original);
      t3.forEach((e6) => {
        if (e6.index != null) {
          let t4 = n2(e6, this.original);
          t4 !== e6[0] && this.overwrite(e6.index, e6.index + e6[0].length, t4);
        }
      });
    } else {
      let t3 = this.original.match(e5);
      if (t3 && t3.index != null) {
        let e6 = n2(t3, this.original);
        e6 !== t3[0] && this.overwrite(t3.index, t3.index + t3[0].length, e6);
      }
    }
    return this;
  }
  _replaceString(e5, t2) {
    let { original: n2 } = this, r2 = n2.indexOf(e5);
    return r2 !== -1 && this.overwrite(r2, r2 + e5.length, t2), this;
  }
  replace(e5, t2) {
    return typeof e5 == `string` ? this._replaceString(e5, t2) : this._replaceRegexp(e5, t2);
  }
  _replaceAllString(e5, t2) {
    let { original: n2 } = this, r2 = e5.length;
    for (let i2 = n2.indexOf(e5); i2 !== -1; i2 = n2.indexOf(e5, i2 + r2)) {
      let e6 = n2.slice(i2, i2 + r2);
      e6 !== t2 && this.overwrite(i2, i2 + r2, t2);
    }
    return this;
  }
  replaceAll(e5, t2) {
    if (typeof e5 == `string`) return this._replaceAllString(e5, t2);
    if (!e5.global) throw TypeError(`MagicString.prototype.replaceAll called with a non-global RegExp argument`);
    return this._replaceRegexp(e5, t2);
  }
}, k = e((exports, t2) => {
  (function(n2, r2) {
    typeof exports == `object` && t2 !== void 0 ? t2.exports = r2() : typeof define == `function` && define.amd ? define(r2) : (n2 = typeof globalThis < `u` ? globalThis : n2 || self, n2.resolveURI = r2());
  })(void 0, function() {
    "use strict";
    let e5 = /^[\w+.-]+:\/\//, t3 = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/, n2 = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
    function r2(t4) {
      return e5.test(t4);
    }
    function i2(e6) {
      return e6.startsWith(`//`);
    }
    function a2(e6) {
      return e6.startsWith(`/`);
    }
    function o2(e6) {
      return e6.startsWith(`file:`);
    }
    function s2(e6) {
      return /^[.?#]/.test(e6);
    }
    function c2(e6) {
      let n3 = t3.exec(e6);
      return u2(n3[1], n3[2] || ``, n3[3], n3[4] || ``, n3[5] || `/`, n3[6] || ``, n3[7] || ``);
    }
    function l2(e6) {
      let t4 = n2.exec(e6), r3 = t4[2];
      return u2(`file:`, ``, t4[1] || ``, ``, a2(r3) ? r3 : `/` + r3, t4[3] || ``, t4[4] || ``);
    }
    function u2(e6, t4, n3, r3, i3, a3, o3) {
      return { scheme: e6, user: t4, host: n3, port: r3, path: i3, query: a3, hash: o3, type: 7 };
    }
    function d2(e6) {
      if (i2(e6)) {
        let t5 = c2(`http:` + e6);
        return t5.scheme = ``, t5.type = 6, t5;
      }
      if (a2(e6)) {
        let t5 = c2(`http://foo.com` + e6);
        return t5.scheme = ``, t5.host = ``, t5.type = 5, t5;
      }
      if (o2(e6)) return l2(e6);
      if (r2(e6)) return c2(e6);
      let t4 = c2(`http://foo.com/` + e6);
      return t4.scheme = ``, t4.host = ``, t4.type = e6 ? e6.startsWith(`?`) ? 3 : e6.startsWith(`#`) ? 2 : 4 : 1, t4;
    }
    function f2(e6) {
      if (e6.endsWith(`/..`)) return e6;
      let t4 = e6.lastIndexOf(`/`);
      return e6.slice(0, t4 + 1);
    }
    function p2(e6, t4) {
      m2(t4, t4.type), e6.path === `/` ? e6.path = t4.path : e6.path = f2(t4.path) + e6.path;
    }
    function m2(e6, t4) {
      let n3 = t4 <= 4, r3 = e6.path.split(`/`), i3 = 1, a3 = 0, o3 = false;
      for (let e7 = 1; e7 < r3.length; e7++) {
        let t5 = r3[e7];
        if (!t5) {
          o3 = true;
          continue;
        }
        if (o3 = false, t5 !== `.`) {
          if (t5 === `..`) {
            a3 ? (o3 = true, a3--, i3--) : n3 && (r3[i3++] = t5);
            continue;
          }
          r3[i3++] = t5, a3++;
        }
      }
      let s3 = ``;
      for (let e7 = 1; e7 < i3; e7++) s3 += `/` + r3[e7];
      (!s3 || o3 && !s3.endsWith(`/..`)) && (s3 += `/`), e6.path = s3;
    }
    function h2(e6, t4) {
      if (!e6 && !t4) return ``;
      let n3 = d2(e6), r3 = n3.type;
      if (t4 && r3 !== 7) {
        let e7 = d2(t4), i4 = e7.type;
        switch (r3) {
          case 1:
            n3.hash = e7.hash;
          case 2:
            n3.query = e7.query;
          case 3:
          case 4:
            p2(n3, e7);
          case 5:
            n3.user = e7.user, n3.host = e7.host, n3.port = e7.port;
          case 6:
            n3.scheme = e7.scheme;
        }
        i4 > r3 && (r3 = i4);
      }
      m2(n3, r3);
      let i3 = n3.query + n3.hash;
      switch (r3) {
        case 2:
        case 3:
          return i3;
        case 4: {
          let r4 = n3.path.slice(1);
          return r4 ? s2(t4 || e6) && !s2(r4) ? `./` + r4 + i3 : r4 + i3 : i3 || `.`;
        }
        case 5:
          return n3.path + i3;
        default:
          return n3.scheme + `//` + n3.user + n3.host + n3.port + n3.path + i3;
      }
    }
    return h2;
  });
}), A = e((exports, t2) => {
  (function(n2, r2) {
    typeof exports == `object` && t2 !== void 0 ? r2(exports, f(), k()) : typeof define == `function` && define.amd ? define([`exports`, `@jridgewell/sourcemap-codec`, `@jridgewell/resolve-uri`], r2) : (n2 = typeof globalThis < `u` ? globalThis : n2 || self, r2(n2.traceMapping = {}, n2.sourcemapCodec, n2.resolveURI));
  })(void 0, function(e5, t3, n2) {
    "use strict";
    function r2(e6, t4) {
      return t4 && !t4.endsWith(`/`) && (t4 += `/`), n2(e6, t4);
    }
    function i2(e6) {
      if (!e6) return ``;
      let t4 = e6.lastIndexOf(`/`);
      return e6.slice(0, t4 + 1);
    }
    let a2 = 0, o2 = 1, s2 = 2, c2 = 3, l2 = 4, u2 = 1, d2 = 2;
    function f2(e6, t4) {
      let n3 = p2(e6, 0);
      if (n3 === e6.length) return e6;
      t4 || (e6 = e6.slice());
      for (let r3 = n3; r3 < e6.length; r3 = p2(e6, r3 + 1)) e6[r3] = h2(e6[r3], t4);
      return e6;
    }
    function p2(e6, t4) {
      for (let n3 = t4; n3 < e6.length; n3++) if (!m2(e6[n3])) return n3;
      return e6.length;
    }
    function m2(e6) {
      for (let t4 = 1; t4 < e6.length; t4++) if (e6[t4][a2] < e6[t4 - 1][a2]) return false;
      return true;
    }
    function h2(e6, t4) {
      return t4 || (e6 = e6.slice()), e6.sort(g2);
    }
    function g2(e6, t4) {
      return e6[a2] - t4[a2];
    }
    let _2 = false;
    function v2(e6, t4, n3, r3) {
      for (; n3 <= r3; ) {
        let i3 = n3 + (r3 - n3 >> 1), o3 = e6[i3][a2] - t4;
        if (o3 === 0) return _2 = true, i3;
        o3 < 0 ? n3 = i3 + 1 : r3 = i3 - 1;
      }
      return _2 = false, n3 - 1;
    }
    function y2(e6, t4, n3) {
      for (let r3 = n3 + 1; r3 < e6.length && e6[r3][a2] === t4; n3 = r3++) ;
      return n3;
    }
    function b2(e6, t4, n3) {
      for (let r3 = n3 - 1; r3 >= 0 && e6[r3][a2] === t4; n3 = r3--) ;
      return n3;
    }
    function x2() {
      return { lastKey: -1, lastNeedle: -1, lastIndex: -1 };
    }
    function S2(e6, t4, n3, r3) {
      let { lastKey: i3, lastNeedle: o3, lastIndex: s3 } = n3, c3 = 0, l3 = e6.length - 1;
      if (r3 === i3) {
        if (t4 === o3) return _2 = s3 !== -1 && e6[s3][a2] === t4, s3;
        t4 >= o3 ? c3 = s3 === -1 ? 0 : s3 : l3 = s3;
      }
      return n3.lastKey = r3, n3.lastNeedle = t4, n3.lastIndex = v2(e6, t4, c3, l3);
    }
    function C2(e6, t4) {
      let n3 = t4.map(T2);
      for (let r3 = 0; r3 < e6.length; r3++) {
        let i3 = e6[r3];
        for (let e7 = 0; e7 < i3.length; e7++) {
          let l3 = i3[e7];
          if (l3.length === 1) continue;
          let u3 = l3[o2], d3 = l3[s2], f3 = l3[c2], p3 = n3[u3], m3 = p3[d3] || (p3[d3] = []), h3 = t4[u3], g3 = y2(m3, f3, S2(m3, f3, h3, d3));
          h3.lastIndex = ++g3, w2(m3, g3, [f3, r3, l3[a2]]);
        }
      }
      return n3;
    }
    function w2(e6, t4, n3) {
      for (let n4 = e6.length; n4 > t4; n4--) e6[n4] = e6[n4 - 1];
      e6[t4] = n3;
    }
    function T2() {
      return { __proto__: null };
    }
    let E2 = function(e6, t4) {
      let n3 = D2(e6);
      if (!(`sections` in n3)) return new I2(n3, t4);
      let r3 = [], i3 = [], a3 = [], o3 = [], s3 = [];
      O2(n3, t4, r3, i3, a3, o3, s3, 0, 0, 1 / 0, 1 / 0);
      let c3 = { version: 3, file: n3.file, names: o3, sources: i3, sourcesContent: a3, mappings: r3, ignoreList: s3 };
      return J(c3);
    };
    function D2(e6) {
      return typeof e6 == `string` ? JSON.parse(e6) : e6;
    }
    function O2(e6, t4, n3, r3, i3, a3, o3, s3, c3, l3, u3) {
      let { sections: d3 } = e6;
      for (let e7 = 0; e7 < d3.length; e7++) {
        let { map: f3, offset: p3 } = d3[e7], m3 = l3, h3 = u3;
        if (e7 + 1 < d3.length) {
          let t5 = d3[e7 + 1].offset;
          m3 = Math.min(l3, s3 + t5.line), m3 === l3 ? h3 = Math.min(u3, c3 + t5.column) : m3 < l3 && (h3 = c3 + t5.column);
        }
        k2(f3, t4, n3, r3, i3, a3, o3, s3 + p3.line, c3 + p3.column, m3, h3);
      }
    }
    function k2(e6, t4, n3, r3, i3, u3, d3, f3, p3, m3, h3) {
      let g3 = D2(e6);
      if (`sections` in g3) return O2(...arguments);
      let _3 = new I2(g3, t4), v3 = r3.length, y3 = u3.length, b3 = z(_3), { resolvedSources: x3, sourcesContent: S3, ignoreList: C3 } = _3;
      if (A2(r3, x3), A2(u3, _3.names), S3) A2(i3, S3);
      else for (let e7 = 0; e7 < x3.length; e7++) i3.push(null);
      if (C3) for (let e7 = 0; e7 < C3.length; e7++) d3.push(C3[e7] + v3);
      for (let e7 = 0; e7 < b3.length; e7++) {
        let t5 = f3 + e7;
        if (t5 > m3) return;
        let r4 = j2(n3, t5), i4 = e7 === 0 ? p3 : 0, u4 = b3[e7];
        for (let e8 = 0; e8 < u4.length; e8++) {
          let n4 = u4[e8], d4 = i4 + n4[a2];
          if (t5 === m3 && d4 >= h3) return;
          if (n4.length === 1) {
            r4.push([d4]);
            continue;
          }
          let f4 = v3 + n4[o2], p4 = n4[s2], g4 = n4[c2];
          r4.push(n4.length === 4 ? [d4, f4, p4, g4] : [d4, f4, p4, g4, y3 + n4[l2]]);
        }
      }
    }
    function A2(e6, t4) {
      for (let n3 = 0; n3 < t4.length; n3++) e6.push(t4[n3]);
    }
    function j2(e6, t4) {
      for (let n3 = e6.length; n3 <= t4; n3++) e6[n3] = [];
      return e6[t4];
    }
    let M2 = "`line` must be greater than 0 (lines start at line 1)", N2 = "`column` must be greater than or equal to 0 (columns start at column 0)", P2 = -1, F2 = 1;
    class I2 {
      constructor(e6, t4) {
        let n3 = typeof e6 == `string`;
        if (!n3 && e6._decodedMemo) return e6;
        let a3 = n3 ? JSON.parse(e6) : e6, { version: o3, file: s3, names: c3, sourceRoot: l3, sources: u3, sourcesContent: d3 } = a3;
        this.version = o3, this.file = s3, this.names = c3 || [], this.sourceRoot = l3, this.sources = u3, this.sourcesContent = d3, this.ignoreList = a3.ignoreList || a3.x_google_ignoreList || void 0;
        let p3 = r2(l3 || ``, i2(t4));
        this.resolvedSources = u3.map((e7) => r2(e7 || ``, p3));
        let { mappings: m3 } = a3;
        typeof m3 == `string` ? (this._encoded = m3, this._decoded = void 0) : (this._encoded = void 0, this._decoded = f2(m3, n3)), this._decodedMemo = x2(), this._bySources = void 0, this._bySourceMemos = void 0;
      }
    }
    function L(e6) {
      return e6;
    }
    function R(e6) {
      var n3, r3;
      return (n3 = (r3 = L(e6))._encoded) ?? (r3._encoded = t3.encode(L(e6)._decoded));
    }
    function z(e6) {
      var n3;
      return (n3 = L(e6))._decoded || (n3._decoded = t3.decode(L(e6)._encoded));
    }
    function B(e6, t4, n3) {
      let r3 = z(e6);
      if (t4 >= r3.length) return null;
      let i3 = r3[t4], a3 = Q(i3, L(e6)._decodedMemo, t4, n3, F2);
      return a3 === -1 ? null : i3[a3];
    }
    function V(e6, t4) {
      let { line: n3, column: r3, bias: i3 } = t4;
      if (n3--, n3 < 0) throw Error(M2);
      if (r3 < 0) throw Error(N2);
      let a3 = z(e6);
      if (n3 >= a3.length) return X(null, null, null, null);
      let u3 = a3[n3], d3 = Q(u3, L(e6)._decodedMemo, n3, r3, i3 || F2);
      if (d3 === -1) return X(null, null, null, null);
      let f3 = u3[d3];
      if (f3.length === 1) return X(null, null, null, null);
      let { names: p3, resolvedSources: m3 } = e6;
      return X(m3[f3[o2]], f3[s2] + 1, f3[c2], f3.length === 5 ? p3[f3[l2]] : null);
    }
    function H(e6, t4) {
      let { source: n3, line: r3, column: i3, bias: a3 } = t4;
      return $(e6, n3, r3, i3, a3 || F2, false);
    }
    function U(e6, t4) {
      let { source: n3, line: r3, column: i3, bias: a3 } = t4;
      return $(e6, n3, r3, i3, a3 || P2, true);
    }
    function W(e6, t4) {
      let n3 = z(e6), { names: r3, resolvedSources: i3 } = e6;
      for (let e7 = 0; e7 < n3.length; e7++) {
        let a3 = n3[e7];
        for (let n4 = 0; n4 < a3.length; n4++) {
          let o3 = a3[n4], s3 = e7 + 1, c3 = o3[0], l3 = null, u3 = null, d3 = null, f3 = null;
          o3.length !== 1 && (l3 = i3[o3[1]], u3 = o3[2] + 1, d3 = o3[3]), o3.length === 5 && (f3 = r3[o3[4]]), t4({ generatedLine: s3, generatedColumn: c3, source: l3, originalLine: u3, originalColumn: d3, name: f3 });
        }
      }
    }
    function G(e6, t4) {
      let { sources: n3, resolvedSources: r3 } = e6, i3 = n3.indexOf(t4);
      return i3 === -1 && (i3 = r3.indexOf(t4)), i3;
    }
    function K(e6, t4) {
      let { sourcesContent: n3 } = e6;
      if (n3 == null) return null;
      let r3 = G(e6, t4);
      return r3 === -1 ? null : n3[r3];
    }
    function q(e6, t4) {
      let { ignoreList: n3 } = e6;
      if (n3 == null) return false;
      let r3 = G(e6, t4);
      return r3 === -1 ? false : n3.includes(r3);
    }
    function J(e6, t4) {
      let n3 = new I2(Y(e6, []), t4);
      return L(n3)._decoded = e6.mappings, n3;
    }
    function ee(e6) {
      return Y(e6, z(e6));
    }
    function te(e6) {
      return Y(e6, R(e6));
    }
    function Y(e6, t4) {
      return { version: e6.version, file: e6.file, names: e6.names, sourceRoot: e6.sourceRoot, sources: e6.sources, sourcesContent: e6.sourcesContent, mappings: t4, ignoreList: e6.ignoreList || e6.x_google_ignoreList };
    }
    function X(e6, t4, n3, r3) {
      return { source: e6, line: t4, column: n3, name: r3 };
    }
    function Z(e6, t4) {
      return { line: e6, column: t4 };
    }
    function Q(e6, t4, n3, r3, i3) {
      let a3 = S2(e6, r3, t4, n3);
      return _2 ? a3 = (i3 === P2 ? y2 : b2)(e6, r3, a3) : i3 === P2 && a3++, a3 === -1 || a3 === e6.length ? -1 : a3;
    }
    function ne(e6, t4, n3, r3, i3) {
      let o3 = Q(e6, t4, n3, r3, F2);
      if (!_2 && i3 === P2 && o3++, o3 === -1 || o3 === e6.length) return [];
      let s3 = _2 ? r3 : e6[o3][a2];
      _2 || (o3 = b2(e6, s3, o3));
      let c3 = y2(e6, s3, o3), l3 = [];
      for (; o3 <= c3; o3++) {
        let t5 = e6[o3];
        l3.push(Z(t5[u2] + 1, t5[d2]));
      }
      return l3;
    }
    function $(e6, t4, n3, r3, i3, a3) {
      var o3;
      if (n3--, n3 < 0) throw Error(M2);
      if (r3 < 0) throw Error(N2);
      let { sources: s3, resolvedSources: c3 } = e6, l3 = s3.indexOf(t4);
      if (l3 === -1 && (l3 = c3.indexOf(t4)), l3 === -1) return a3 ? [] : Z(null, null);
      let f3 = (o3 = L(e6))._bySources || (o3._bySources = C2(z(e6), L(e6)._bySourceMemos = s3.map(x2))), p3 = f3[l3][n3];
      if (p3 == null) return a3 ? [] : Z(null, null);
      let m3 = L(e6)._bySourceMemos[l3];
      if (a3) return ne(p3, m3, n3, r3, i3);
      let h3 = Q(p3, m3, n3, r3, i3);
      if (h3 === -1) return Z(null, null);
      let g3 = p3[h3];
      return Z(g3[u2] + 1, g3[d2]);
    }
    e5.AnyMap = E2, e5.GREATEST_LOWER_BOUND = F2, e5.LEAST_UPPER_BOUND = P2, e5.TraceMap = I2, e5.allGeneratedPositionsFor = U, e5.decodedMap = ee, e5.decodedMappings = z, e5.eachMapping = W, e5.encodedMap = te, e5.encodedMappings = R, e5.generatedPositionFor = H, e5.isIgnored = q, e5.originalPositionFor = V, e5.presortedDecodedMap = J, e5.sourceContentFor = K, e5.traceSegment = B;
  });
}), j = e((exports, t2) => {
  (function(n2, r2) {
    typeof exports == `object` && t2 !== void 0 ? r2(exports) : typeof define == `function` && define.amd ? define([`exports`], r2) : (n2 = typeof globalThis < `u` ? globalThis : n2 || self, r2(n2.setArray = {}));
  })(void 0, function(e5) {
    "use strict";
    class t3 {
      constructor() {
        this._indexes = { __proto__: null }, this.array = [];
      }
    }
    function n2(e6) {
      return e6;
    }
    function r2(e6, t4) {
      return n2(e6)._indexes[t4];
    }
    function i2(e6, t4) {
      let i3 = r2(e6, t4);
      if (i3 !== void 0) return i3;
      let { array: a3, _indexes: o3 } = n2(e6), s2 = a3.push(t4);
      return o3[t4] = s2 - 1;
    }
    function a2(e6) {
      let { array: t4, _indexes: r3 } = n2(e6);
      if (t4.length === 0) return;
      let i3 = t4.pop();
      r3[i3] = void 0;
    }
    function o2(e6, t4) {
      let i3 = r2(e6, t4);
      if (i3 === void 0) return;
      let { array: a3, _indexes: o3 } = n2(e6);
      for (let e7 = i3 + 1; e7 < a3.length; e7++) {
        let t5 = a3[e7];
        a3[e7 - 1] = t5, o3[t5]--;
      }
      o3[t4] = void 0, a3.pop();
    }
    e5.SetArray = t3, e5.get = r2, e5.pop = a2, e5.put = i2, e5.remove = o2, Object.defineProperty(e5, `__esModule`, { value: true });
  });
}), M = e((exports, t2) => {
  (function(n2, r2) {
    typeof exports == `object` && t2 !== void 0 ? r2(exports, j(), f(), A()) : typeof define == `function` && define.amd ? define([`exports`, `@jridgewell/set-array`, `@jridgewell/sourcemap-codec`, `@jridgewell/trace-mapping`], r2) : (n2 = typeof globalThis < `u` ? globalThis : n2 || self, r2(n2.genMapping = {}, n2.setArray, n2.sourcemapCodec, n2.traceMapping));
  })(void 0, function(e5, t3, n2, r2) {
    "use strict";
    let i2 = 0, a2 = 1, o2 = 2, s2 = 3, c2 = 4, l2 = -1;
    class u2 {
      constructor({ file: e6, sourceRoot: n3 } = {}) {
        this._names = new t3.SetArray(), this._sources = new t3.SetArray(), this._sourcesContent = [], this._mappings = [], this.file = e6, this.sourceRoot = n3, this._ignoreList = new t3.SetArray();
      }
    }
    function d2(e6) {
      return e6;
    }
    function f2(e6, t4, n3, r3, i3, a3, o3, s3) {
      return S2(false, e6, t4, n3, r3, i3, a3, o3, s3);
    }
    function p2(e6, t4) {
      return A2(false, e6, t4);
    }
    let m2 = (e6, t4, n3, r3, i3, a3, o3, s3) => S2(true, e6, t4, n3, r3, i3, a3, o3, s3), h2 = (e6, t4) => A2(true, e6, t4);
    function g2(e6, n3, r3) {
      let { _sources: i3, _sourcesContent: a3 } = d2(e6), o3 = t3.put(i3, n3);
      a3[o3] = r3;
    }
    function _2(e6, n3, r3 = true) {
      let { _sources: i3, _sourcesContent: a3, _ignoreList: o3 } = d2(e6), s3 = t3.put(i3, n3);
      s3 === a3.length && (a3[s3] = null), r3 ? t3.put(o3, s3) : t3.remove(o3, s3);
    }
    function v2(e6) {
      let { _mappings: t4, _sources: n3, _sourcesContent: r3, _names: i3, _ignoreList: a3 } = d2(e6);
      return E2(t4), { version: 3, file: e6.file || void 0, names: i3.array, sourceRoot: e6.sourceRoot || void 0, sources: n3.array, sourcesContent: r3, mappings: t4, ignoreList: a3.array };
    }
    function y2(e6) {
      let t4 = v2(e6);
      return Object.assign(Object.assign({}, t4), { mappings: n2.encode(t4.mappings) });
    }
    function b2(e6) {
      let t4 = new r2.TraceMap(e6), n3 = new u2({ file: t4.file, sourceRoot: t4.sourceRoot });
      return D2(d2(n3)._names, t4.names), D2(d2(n3)._sources, t4.sources), d2(n3)._sourcesContent = t4.sourcesContent || t4.sources.map(() => null), d2(n3)._mappings = r2.decodedMappings(t4), t4.ignoreList && D2(d2(n3)._ignoreList, t4.ignoreList), n3;
    }
    function x2(e6) {
      let t4 = [], { _mappings: n3, _sources: r3, _names: l3 } = d2(e6);
      for (let e7 = 0; e7 < n3.length; e7++) {
        let u3 = n3[e7];
        for (let n4 = 0; n4 < u3.length; n4++) {
          let d3 = u3[n4], f3 = { line: e7 + 1, column: d3[i2] }, p3, m3, h3;
          d3.length !== 1 && (p3 = r3.array[d3[a2]], m3 = { line: d3[o2] + 1, column: d3[s2] }, d3.length === 5 && (h3 = l3.array[d3[c2]])), t4.push({ generated: f3, source: p3, original: m3, name: h3 });
        }
      }
      return t4;
    }
    function S2(e6, n3, r3, i3, a3, o3, s3, c3, u3) {
      let { _mappings: f3, _sources: p3, _sourcesContent: m3, _names: h3 } = d2(n3), g3 = C2(f3, r3), _3 = w2(g3, i3);
      if (!a3) return e6 && O2(g3, _3) ? void 0 : T2(g3, _3, [i3]);
      let v3 = t3.put(p3, a3), y3 = c3 ? t3.put(h3, c3) : l2;
      if (v3 === m3.length && (m3[v3] = u3 ?? null), !(e6 && k2(g3, _3, v3, o3, s3, y3))) return T2(g3, _3, c3 ? [i3, v3, o3, s3, y3] : [i3, v3, o3, s3]);
    }
    function C2(e6, t4) {
      for (let n3 = e6.length; n3 <= t4; n3++) e6[n3] = [];
      return e6[t4];
    }
    function w2(e6, t4) {
      let n3 = e6.length;
      for (let r3 = n3 - 1; r3 >= 0; n3 = r3--) {
        let n4 = e6[r3];
        if (t4 >= n4[i2]) break;
      }
      return n3;
    }
    function T2(e6, t4, n3) {
      for (let n4 = e6.length; n4 > t4; n4--) e6[n4] = e6[n4 - 1];
      e6[t4] = n3;
    }
    function E2(e6) {
      let { length: t4 } = e6, n3 = t4;
      for (let t5 = n3 - 1; t5 >= 0 && !(e6[t5].length > 0); n3 = t5, t5--) ;
      n3 < t4 && (e6.length = n3);
    }
    function D2(e6, n3) {
      for (let r3 = 0; r3 < n3.length; r3++) t3.put(e6, n3[r3]);
    }
    function O2(e6, t4) {
      if (t4 === 0) return true;
      let n3 = e6[t4 - 1];
      return n3.length === 1;
    }
    function k2(e6, t4, n3, r3, i3, u3) {
      if (t4 === 0) return false;
      let d3 = e6[t4 - 1];
      return d3.length === 1 ? false : n3 === d3[a2] && r3 === d3[o2] && i3 === d3[s2] && u3 === (d3.length === 5 ? d3[c2] : l2);
    }
    function A2(e6, t4, n3) {
      let { generated: r3, source: i3, original: a3, name: o3, content: s3 } = n3;
      return i3 ? S2(e6, t4, r3.line - 1, r3.column, i3, a3.line - 1, a3.column, o3, s3) : S2(e6, t4, r3.line - 1, r3.column, null, null, null, null, null);
    }
    e5.GenMapping = u2, e5.addMapping = p2, e5.addSegment = f2, e5.allMappings = x2, e5.fromMap = b2, e5.maybeAddMapping = h2, e5.maybeAddSegment = m2, e5.setIgnore = _2, e5.setSourceContent = g2, e5.toDecodedMap = v2, e5.toEncodedMap = y2, Object.defineProperty(e5, `__esModule`, { value: true });
  });
}), N = e((exports, t2) => {
  (function(n2, r2) {
    typeof exports == `object` && t2 !== void 0 ? t2.exports = r2(A(), M()) : typeof define == `function` && define.amd ? define([`@jridgewell/trace-mapping`, `@jridgewell/gen-mapping`], r2) : (n2 = typeof globalThis < `u` ? globalThis : n2 || self, n2.remapping = r2(n2.traceMapping, n2.genMapping));
  })(void 0, function(e5, t3) {
    "use strict";
    let n2 = i2(``, -1, -1, ``, null, false), r2 = [];
    function i2(e6, t4, n3, r3, i3, a3) {
      return { source: e6, line: t4, column: n3, name: r3, content: i3, ignore: a3 };
    }
    function a2(e6, t4, n3, r3, i3) {
      return { map: e6, sources: t4, source: n3, content: r3, ignore: i3 };
    }
    function o2(e6, t4) {
      return a2(e6, t4, ``, null, false);
    }
    function s2(e6, t4, n3) {
      return a2(null, r2, e6, t4, n3);
    }
    function c2(r3) {
      let i3 = new t3.GenMapping({ file: r3.map.file }), { sources: a3, map: o3 } = r3, s3 = o3.names, c3 = e5.decodedMappings(o3);
      for (let e6 = 0; e6 < c3.length; e6++) {
        let r4 = c3[e6];
        for (let o4 = 0; o4 < r4.length; o4++) {
          let c4 = r4[o4], u3 = c4[0], d3 = n2;
          if (c4.length !== 1) {
            let e7 = a3[c4[1]];
            if (d3 = l2(e7, c4[2], c4[3], c4.length === 5 ? s3[c4[4]] : ``), d3 == null) continue;
          }
          let { column: f3, line: p3, name: m3, content: h2, source: g2, ignore: _2 } = d3;
          t3.maybeAddSegment(i3, e6, u3, g2, p3, f3, m3), g2 && h2 != null && t3.setSourceContent(i3, g2, h2), _2 && t3.setIgnore(i3, g2, true);
        }
      }
      return i3;
    }
    function l2(t4, r3, a3, o3) {
      if (!t4.map) return i2(t4.source, r3, a3, o3, t4.content, t4.ignore);
      let s3 = e5.traceSegment(t4.map, r3, a3);
      return s3 == null ? null : s3.length === 1 ? n2 : l2(t4.sources[s3[1]], s3[2], s3[3], s3.length === 5 ? t4.map.names[s3[4]] : o3);
    }
    function u2(e6) {
      return Array.isArray(e6) ? e6 : [e6];
    }
    function d2(t4, n3) {
      let r3 = u2(t4).map((t5) => new e5.TraceMap(t5, ``)), i3 = r3.pop();
      for (let e6 = 0; e6 < r3.length; e6++) if (r3[e6].sources.length > 1) throw Error(`Transformation map ${e6} must have exactly one source file.
Did you specify these with the most recent transformation maps first?`);
      let a3 = f2(i3, n3, ``, 0);
      for (let e6 = r3.length - 1; e6 >= 0; e6--) a3 = o2(r3[e6], [a3]);
      return a3;
    }
    function f2(t4, n3, r3, i3) {
      let { resolvedSources: a3, sourcesContent: c3, ignoreList: l3 } = t4, u3 = i3 + 1, d3 = a3.map((t5, i4) => {
        let a4 = { importer: r3, depth: u3, source: t5 || ``, content: void 0, ignore: void 0 }, o3 = n3(a4.source, a4), { source: d4, content: p3, ignore: m3 } = a4;
        if (o3) return f2(new e5.TraceMap(o3, d4), n3, d4, u3);
        let h2 = p3 === void 0 ? c3 ? c3[i4] : null : p3, g2 = m3 === void 0 ? l3 ? l3.includes(i4) : false : m3;
        return s2(d4, h2, g2);
      });
      return o2(t4, d3);
    }
    class p2 {
      constructor(e6, n3) {
        let r3 = n3.decodedMappings ? t3.toDecodedMap(e6) : t3.toEncodedMap(e6);
        this.version = r3.version, this.file = r3.file, this.mappings = r3.mappings, this.names = r3.names, this.ignoreList = r3.ignoreList, this.sourceRoot = r3.sourceRoot, this.sources = r3.sources, n3.excludeContent || (this.sourcesContent = r3.sourcesContent);
      }
      toString() {
        return JSON.stringify(this);
      }
    }
    function m2(e6, t4, n3) {
      let r3 = typeof n3 == `object` ? n3 : { excludeContent: !!n3, decodedMappings: false }, i3 = d2(e6, t4);
      return new p2(c2(i3), r3);
    }
    return m2;
  });
}), P = t(N());
async function F({ candidates: e5 = [], entrypoint: t2 = `/main.css`, volume: n2 = {}, ...r2 }) {
  return r2 = { candidates: e5, entrypoint: t2, volume: n2, ...r2 }, r2.volume[r2.entrypoint] = (await o(r2)).css, await i(r2.volume[r2.entrypoint], { loadModule: async (e6, t3, n3) => s(e6, t3, n3, r2.volume), loadStylesheet: async (e6, t3) => a(e6, t3, r2.volume) });
}
async function I({ css: e5, minify: t2 = false, map: n2 }) {
  await l(u);
  function r2(e6, n3) {
    return d({ filename: `main.css`, code: typeof e6 == `string` ? new TextEncoder().encode(e6) : e6, minify: t2, sourceMap: n3 !== void 0, inputSourceMap: n3, drafts: { customMedia: true }, nonStandard: { deepSelectorCombinator: true }, include: c.Nesting | c.MediaQueries, exclude: c.LogicalProperties | c.DirSelector | c.LightDark, targets: { safari: 1049600, ios_saf: 1049600, firefox: 8388608, chrome: 7274496 } });
  }
  let i2 = r2(e5, n2);
  n2 = new TextDecoder().decode(i2.map || new Uint8Array()), i2 = r2(i2.code, n2), n2 = new TextDecoder().decode(i2.map || new Uint8Array());
  let a2 = new TextDecoder().decode(i2.code), o2 = new O(a2);
  if (o2.replaceAll(`@media not (`, `@media not all and (`), n2 !== void 0 && o2.hasChanged()) {
    let e6 = o2.generateMap({ source: `original`, hires: `boundary` }).toString(), t3 = (0, P.default)([e6, n2], () => null);
    n2 = t3.toString();
  }
  return a2 = o2.toString(), { css: a2, warnings: i2.warnings, map: n2 };
}
export {
  F as compile,
  I as optimize
};
