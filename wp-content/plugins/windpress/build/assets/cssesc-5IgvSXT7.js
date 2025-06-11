import { __commonJSMin as e, __toCommonJS as t, __toESM as n } from "./chunk-GxRd6SvM.min.js";
import { __vitePreload as r } from "./preload-helper-DApxheAR.min.js";
import { require_array_set as i, require_base64_vlq as a, require_source_map_generator as o, require_util$1 as s } from "./source-map-generator-CbHQi4uj.min.js";
import { Buffer as c, init_dist$1 as l } from "./dist-BSmntxBi.min.js";
import { encodeBase64 as u } from "./base64-C-ng-gTH.min.js";
import { init_url as d, require___vite_browser_external as f, require_lib$1 as p, url_exports as m } from "./lib-BxXHRCGk.min.js";
import { require_path_browserify as h } from "./path-browserify-DTdOVQJJ.min.js";
let b, g, v, re, Oe, S, Q;
let __tla = (async () => {
  g = function(e2) {
    try {
      let t2 = new URL(e2);
      return t2.protocol === `http:` || t2.protocol === `https:`;
    } catch {
      return false;
    }
  };
  var _ = n(h());
  v = async function(e2, t2, n2, r2 = {}) {
    let i2;
    if (e2.startsWith(`.`) || e2.startsWith(`/`)) return b(e2, t2, n2, r2);
    if (n2 === `plugin`) {
      e2.startsWith(`http`) || (e2 = `https://esm.sh/${e2}`);
      try {
        i2 = await y(e2, t2, n2);
      } catch (t3) {
        throw t3 instanceof Error ? Error(`The ${n2} file "${e2}" could not be loaded. ${t3.message}`) : Error(`The ${n2} file "${e2}" could not be loaded.`);
      }
    }
    if (!i2) throw Error(`The ${n2} file "${e2}" is not a valid module.`);
    return {
      module: i2,
      base: t2
    };
  };
  async function y(e2, t2, n2) {
    let r2 = await import(e2).then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e3) => e3.default ?? e3);
    return r2;
  }
  b = async function(e2, t2 = `/`, n2, i2 = {}) {
    t2 ?? (t2 = `/`);
    let a2 = _.default.resolve(t2, e2);
    if (!i2[a2]) throw Error(`The ${n2} file "${_.default.resolve(`/`, e2)}" does not exist in the volume.`);
    let o2 = x(i2[a2], e2, i2);
    return {
      module: await r(() => import(`data:text/javascript;base64,${u(o2)}`).then(async (m2) => {
        await m2.__tla;
        return m2;
      }), [], import.meta.url).then((e3) => e3.default ?? e3),
      base: _.default.dirname(e2)
    };
  };
  function x(e2, t2, n2 = {}) {
    let r2 = e2.replace(/module.exports\s*=\s*/, `export default `).replace(/import\s+({[^}]+})\s+from\s+['"](.+)['"]/g, (e3, t3, n3) => `import ${t3.replace(/\n/g, ``)} from '${n3}'`).split(`
`).map((e3) => e3.replace(/\bimport\s+(.+)\s+from\s+['"](.+)['"]/g, (e4, t3, n3) => (!n3.startsWith(`http`) && !n3.startsWith(`.`) && !n3.startsWith(`/`) && (n3 = `https://esm.sh/${n3}`), `const ${t3.indexOf(`{`) === -1 ? `{default: ${t3}}` : t3.replace(/\s+as\s+/, `: `)} = await import('${n3}')`)).replace(/\brequire\(['"]([^'"]*)['"]\)/g, (e4, t3) => (!t3.startsWith(`http`) && !t3.startsWith(`.`) && !t3.startsWith(`/`) && (t3 = `https://esm.sh/${t3}`), `(await import('${t3}')).default`))).join(`
`), i2 = /import\s*(?:[^'"]*\s*from\s*)?['"]([^'"]+)['"]|import\(\s*['"]([^'"]+)['"]\s*\)/g, a2 = [], o2, s2 = 0;
    for (; (o2 = i2.exec(r2)) !== null; ) {
      let [e3, r3, i3] = o2, s3 = r3 || i3;
      if (g(s3) || !s3.startsWith(`.`) && !s3.startsWith(`/`)) continue;
      let c2 = _.default.resolve(_.default.dirname(t2), s3), l2 = n2[c2];
      if (!l2) throw Error(`${t2}: The module file "${c2}" does not exist in the volume.`);
      a2.push({
        start: o2.index + e3.indexOf(s3),
        end: o2.index + e3.indexOf(s3) + s3.length,
        replacement: new URL(s3, window.windpress.user_data.data_dir.url).href
      });
    }
    return a2.forEach(({ start: e3, end: t3, replacement: n3 }) => {
      r2 = r2.slice(0, e3 + s2) + n3 + r2.slice(t3 + s2), s2 += n3.length - (t3 - e3);
    }), r2;
  }
  let C, w, T, E, D, O, k, A, j, M, N, P, F, I, L, R, z, B, V, H, U, W, G, ee, K, q, J, Y, X, Z, te, ne, $;
  S = e((exports, t2) => {
    var n2 = String, r2 = function() {
      return {
        isColorSupported: false,
        reset: n2,
        bold: n2,
        dim: n2,
        italic: n2,
        underline: n2,
        inverse: n2,
        hidden: n2,
        strikethrough: n2,
        black: n2,
        red: n2,
        green: n2,
        yellow: n2,
        blue: n2,
        magenta: n2,
        cyan: n2,
        white: n2,
        gray: n2,
        bgBlack: n2,
        bgRed: n2,
        bgGreen: n2,
        bgYellow: n2,
        bgBlue: n2,
        bgMagenta: n2,
        bgCyan: n2,
        bgWhite: n2,
        blackBright: n2,
        redBright: n2,
        greenBright: n2,
        yellowBright: n2,
        blueBright: n2,
        magentaBright: n2,
        cyanBright: n2,
        whiteBright: n2,
        bgBlackBright: n2,
        bgRedBright: n2,
        bgGreenBright: n2,
        bgYellowBright: n2,
        bgBlueBright: n2,
        bgMagentaBright: n2,
        bgCyanBright: n2,
        bgWhiteBright: n2
      };
    };
    t2.exports = r2(), t2.exports.createColors = r2;
  });
  C = e((exports, t2) => {
    let n2 = S(), r2 = f();
    var i2 = class e2 extends Error {
      constructor(t3, n3, r3, i3, a2, o2) {
        super(t3), this.name = `CssSyntaxError`, this.reason = t3, a2 && (this.file = a2), i3 && (this.source = i3), o2 && (this.plugin = o2), n3 !== void 0 && r3 !== void 0 && (typeof n3 == `number` ? (this.line = n3, this.column = r3) : (this.line = n3.line, this.column = n3.column, this.endLine = r3.line, this.endColumn = r3.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, e2);
      }
      setMessage() {
        this.message = this.plugin ? this.plugin + `: ` : ``, this.message += this.file ? this.file : `<css input>`, this.line !== void 0 && (this.message += `:` + this.line + `:` + this.column), this.message += `: ` + this.reason;
      }
      showSourceCode(e3) {
        if (!this.source) return ``;
        let t3 = this.source;
        e3 ?? (e3 = n2.isColorSupported);
        let i3 = (e4) => e4, a2 = (e4) => e4, o2 = (e4) => e4;
        if (e3) {
          let { bold: e4, gray: t4, red: s3 } = n2.createColors(true);
          a2 = (t5) => e4(s3(t5)), i3 = (e5) => t4(e5), r2 && (o2 = (e5) => r2(e5));
        }
        let s2 = t3.split(/\r?\n/), c2 = Math.max(this.line - 3, 0), l2 = Math.min(this.line + 2, s2.length), u2 = String(l2).length;
        return s2.slice(c2, l2).map((e4, t4) => {
          let n3 = c2 + 1 + t4, r3 = ` ` + (` ` + n3).slice(-u2) + ` | `;
          if (n3 === this.line) {
            if (e4.length > 160) {
              let t6 = 20, n4 = Math.max(0, this.column - t6), s3 = Math.max(this.column + t6, this.endColumn + t6), c3 = e4.slice(n4, s3), l3 = i3(r3.replace(/\d/g, ` `)) + e4.slice(0, Math.min(this.column - 1, t6 - 1)).replace(/[^\t]/g, ` `);
              return a2(`>`) + i3(r3) + o2(c3) + `
 ` + l3 + a2(`^`);
            }
            let t5 = i3(r3.replace(/\d/g, ` `)) + e4.slice(0, this.column - 1).replace(/[^\t]/g, ` `);
            return a2(`>`) + i3(r3) + o2(e4) + `
 ` + t5 + a2(`^`);
          }
          return ` ` + i3(r3) + o2(e4);
        }).join(`
`);
      }
      toString() {
        let e3 = this.showSourceCode();
        return e3 && (e3 = `

` + e3 + `
`), this.name + `: ` + this.message + e3;
      }
    };
    t2.exports = i2, i2.default = i2;
  });
  w = e((exports, t2) => {
    let n2 = {
      after: `
`,
      beforeClose: `
`,
      beforeComment: `
`,
      beforeDecl: `
`,
      beforeOpen: ` `,
      beforeRule: `
`,
      colon: `: `,
      commentLeft: ` `,
      commentRight: ` `,
      emptyBody: ``,
      indent: `    `,
      semicolon: false
    };
    function r2(e2) {
      return e2[0].toUpperCase() + e2.slice(1);
    }
    var i2 = class {
      constructor(e2) {
        this.builder = e2;
      }
      atrule(e2, t3) {
        let n3 = `@` + e2.name, r3 = e2.params ? this.rawValue(e2, `params`) : ``;
        if (e2.raws.afterName === void 0 ? r3 && (n3 += ` `) : n3 += e2.raws.afterName, e2.nodes) this.block(e2, n3 + r3);
        else {
          let i3 = (e2.raws.between || ``) + (t3 ? `;` : ``);
          this.builder(n3 + r3 + i3, e2);
        }
      }
      beforeAfter(e2, t3) {
        let n3;
        n3 = e2.type === `decl` ? this.raw(e2, null, `beforeDecl`) : e2.type === `comment` ? this.raw(e2, null, `beforeComment`) : t3 === `before` ? this.raw(e2, null, `beforeRule`) : this.raw(e2, null, `beforeClose`);
        let r3 = e2.parent, i3 = 0;
        for (; r3 && r3.type !== `root`; ) i3 += 1, r3 = r3.parent;
        if (n3.includes(`
`)) {
          let t4 = this.raw(e2, null, `indent`);
          if (t4.length) for (let e3 = 0; e3 < i3; e3++) n3 += t4;
        }
        return n3;
      }
      block(e2, t3) {
        let n3 = this.raw(e2, `between`, `beforeOpen`);
        this.builder(t3 + n3 + `{`, e2, `start`);
        let r3;
        e2.nodes && e2.nodes.length ? (this.body(e2), r3 = this.raw(e2, `after`)) : r3 = this.raw(e2, `after`, `emptyBody`), r3 && this.builder(r3), this.builder(`}`, e2, `end`);
      }
      body(e2) {
        let t3 = e2.nodes.length - 1;
        for (; t3 > 0 && e2.nodes[t3].type === `comment`; ) --t3;
        let n3 = this.raw(e2, `semicolon`);
        for (let r3 = 0; r3 < e2.nodes.length; r3++) {
          let i3 = e2.nodes[r3], a2 = this.raw(i3, `before`);
          a2 && this.builder(a2), this.stringify(i3, t3 !== r3 || n3);
        }
      }
      comment(e2) {
        let t3 = this.raw(e2, `left`, `commentLeft`), n3 = this.raw(e2, `right`, `commentRight`);
        this.builder(`/*` + t3 + e2.text + n3 + `*/`, e2);
      }
      decl(e2, t3) {
        let n3 = this.raw(e2, `between`, `colon`), r3 = e2.prop + n3 + this.rawValue(e2, `value`);
        e2.important && (r3 += e2.raws.important || ` !important`), t3 && (r3 += `;`), this.builder(r3, e2);
      }
      document(e2) {
        this.body(e2);
      }
      raw(e2, t3, i3) {
        let a2;
        if (i3 || (i3 = t3), t3 && (a2 = e2.raws[t3], a2 !== void 0)) return a2;
        let o2 = e2.parent;
        if (i3 === `before` && (!o2 || o2.type === `root` && o2.first === e2 || o2 && o2.type === `document`)) return ``;
        if (!o2) return n2[i3];
        let s2 = e2.root();
        if (s2.rawCache || (s2.rawCache = {}), s2.rawCache[i3] !== void 0) return s2.rawCache[i3];
        if (i3 === `before` || i3 === `after`) return this.beforeAfter(e2, i3);
        {
          let n3 = `raw` + r2(i3);
          this[n3] ? a2 = this[n3](s2, e2) : s2.walk((e3) => {
            if (a2 = e3.raws[t3], a2 !== void 0) return false;
          });
        }
        return a2 === void 0 && (a2 = n2[i3]), s2.rawCache[i3] = a2, a2;
      }
      rawBeforeClose(e2) {
        let t3;
        return e2.walk((e3) => {
          if (e3.nodes && e3.nodes.length > 0 && e3.raws.after !== void 0) return t3 = e3.raws.after, t3.includes(`
`) && (t3 = t3.replace(/[^\n]+$/, ``)), false;
        }), t3 && (t3 = t3.replace(/\S/g, ``)), t3;
      }
      rawBeforeComment(e2, t3) {
        let n3;
        return e2.walkComments((e3) => {
          if (e3.raws.before !== void 0) return n3 = e3.raws.before, n3.includes(`
`) && (n3 = n3.replace(/[^\n]+$/, ``)), false;
        }), n3 === void 0 ? n3 = this.raw(t3, null, `beforeDecl`) : n3 && (n3 = n3.replace(/\S/g, ``)), n3;
      }
      rawBeforeDecl(e2, t3) {
        let n3;
        return e2.walkDecls((e3) => {
          if (e3.raws.before !== void 0) return n3 = e3.raws.before, n3.includes(`
`) && (n3 = n3.replace(/[^\n]+$/, ``)), false;
        }), n3 === void 0 ? n3 = this.raw(t3, null, `beforeRule`) : n3 && (n3 = n3.replace(/\S/g, ``)), n3;
      }
      rawBeforeOpen(e2) {
        let t3;
        return e2.walk((e3) => {
          if (e3.type !== `decl` && (t3 = e3.raws.between, t3 !== void 0)) return false;
        }), t3;
      }
      rawBeforeRule(e2) {
        let t3;
        return e2.walk((n3) => {
          if (n3.nodes && (n3.parent !== e2 || e2.first !== n3) && n3.raws.before !== void 0) return t3 = n3.raws.before, t3.includes(`
`) && (t3 = t3.replace(/[^\n]+$/, ``)), false;
        }), t3 && (t3 = t3.replace(/\S/g, ``)), t3;
      }
      rawColon(e2) {
        let t3;
        return e2.walkDecls((e3) => {
          if (e3.raws.between !== void 0) return t3 = e3.raws.between.replace(/[^\s:]/g, ``), false;
        }), t3;
      }
      rawEmptyBody(e2) {
        let t3;
        return e2.walk((e3) => {
          if (e3.nodes && e3.nodes.length === 0 && (t3 = e3.raws.after, t3 !== void 0)) return false;
        }), t3;
      }
      rawIndent(e2) {
        if (e2.raws.indent) return e2.raws.indent;
        let t3;
        return e2.walk((n3) => {
          let r3 = n3.parent;
          if (r3 && r3 !== e2 && r3.parent && r3.parent === e2 && n3.raws.before !== void 0) {
            let e3 = n3.raws.before.split(`
`);
            return t3 = e3[e3.length - 1], t3 = t3.replace(/\S/g, ``), false;
          }
        }), t3;
      }
      rawSemicolon(e2) {
        let t3;
        return e2.walk((e3) => {
          if (e3.nodes && e3.nodes.length && e3.last.type === `decl` && (t3 = e3.raws.semicolon, t3 !== void 0)) return false;
        }), t3;
      }
      rawValue(e2, t3) {
        let n3 = e2[t3], r3 = e2.raws[t3];
        return r3 && r3.value === n3 ? r3.raw : n3;
      }
      root(e2) {
        this.body(e2), e2.raws.after && this.builder(e2.raws.after);
      }
      rule(e2) {
        this.block(e2, this.rawValue(e2, `selector`)), e2.raws.ownSemicolon && this.builder(e2.raws.ownSemicolon, e2, `end`);
      }
      stringify(e2, t3) {
        if (!this[e2.type]) throw Error(`Unknown AST node type ` + e2.type + `. Maybe you need to change PostCSS stringifier.`);
        this[e2.type](e2, t3);
      }
    };
    t2.exports = i2, i2.default = i2;
  });
  T = e((exports, t2) => {
    let n2 = w();
    function r2(e2, t3) {
      let r3 = new n2(t3);
      r3.stringify(e2);
    }
    t2.exports = r2, r2.default = r2;
  });
  E = e((exports, t2) => {
    t2.exports.isClean = Symbol(`isClean`), t2.exports.my = Symbol(`my`);
  });
  D = e((exports, t2) => {
    let n2 = C(), r2 = w(), i2 = T(), { isClean: a2, my: o2 } = E();
    function s2(e2, t3) {
      let n3 = new e2.constructor();
      for (let r3 in e2) {
        if (!Object.prototype.hasOwnProperty.call(e2, r3) || r3 === `proxyCache`) continue;
        let i3 = e2[r3], a3 = typeof i3;
        r3 === `parent` && a3 === `object` ? t3 && (n3[r3] = t3) : r3 === `source` ? n3[r3] = i3 : Array.isArray(i3) ? n3[r3] = i3.map((e3) => s2(e3, n3)) : (a3 === `object` && i3 !== null && (i3 = s2(i3)), n3[r3] = i3);
      }
      return n3;
    }
    function c2(e2, t3) {
      if (t3 && t3.offset !== void 0) return t3.offset;
      let n3 = 1, r3 = 1, i3 = 0;
      for (let a3 = 0; a3 < e2.length; a3++) {
        if (r3 === t3.line && n3 === t3.column) {
          i3 = a3;
          break;
        }
        e2[a3] === `
` ? (n3 = 1, r3 += 1) : n3 += 1;
      }
      return i3;
    }
    var l2 = class {
      get proxyOf() {
        return this;
      }
      constructor(e2 = {}) {
        for (let t3 in this.raws = {}, this[a2] = false, this[o2] = true, e2) if (t3 === `nodes`) {
          this.nodes = [];
          for (let n3 of e2[t3]) typeof n3.clone == `function` ? this.append(n3.clone()) : this.append(n3);
        } else this[t3] = e2[t3];
      }
      addToError(e2) {
        if (e2.postcssNode = this, e2.stack && this.source && /\n\s{4}at /.test(e2.stack)) {
          let t3 = this.source;
          e2.stack = e2.stack.replace(/\n\s{4}at /, `$&${t3.input.from}:${t3.start.line}:${t3.start.column}$&`);
        }
        return e2;
      }
      after(e2) {
        return this.parent.insertAfter(this, e2), this;
      }
      assign(e2 = {}) {
        for (let t3 in e2) this[t3] = e2[t3];
        return this;
      }
      before(e2) {
        return this.parent.insertBefore(this, e2), this;
      }
      cleanRaws(e2) {
        delete this.raws.before, delete this.raws.after, e2 || delete this.raws.between;
      }
      clone(e2 = {}) {
        let t3 = s2(this);
        for (let n3 in e2) t3[n3] = e2[n3];
        return t3;
      }
      cloneAfter(e2 = {}) {
        let t3 = this.clone(e2);
        return this.parent.insertAfter(this, t3), t3;
      }
      cloneBefore(e2 = {}) {
        let t3 = this.clone(e2);
        return this.parent.insertBefore(this, t3), t3;
      }
      error(e2, t3 = {}) {
        if (this.source) {
          let { end: n3, start: r3 } = this.rangeBy(t3);
          return this.source.input.error(e2, {
            column: r3.column,
            line: r3.line
          }, {
            column: n3.column,
            line: n3.line
          }, t3);
        }
        return new n2(e2);
      }
      getProxyProcessor() {
        return {
          get(e2, t3) {
            return t3 === `proxyOf` ? e2 : t3 === `root` ? () => e2.root().toProxy() : e2[t3];
          },
          set(e2, t3, n3) {
            return e2[t3] === n3 ? true : (e2[t3] = n3, (t3 === `prop` || t3 === `value` || t3 === `name` || t3 === `params` || t3 === `important` || t3 === `text`) && e2.markDirty(), true);
          }
        };
      }
      markClean() {
        this[a2] = true;
      }
      markDirty() {
        if (this[a2]) {
          this[a2] = false;
          let e2 = this;
          for (; e2 = e2.parent; ) e2[a2] = false;
        }
      }
      next() {
        if (!this.parent) return;
        let e2 = this.parent.index(this);
        return this.parent.nodes[e2 + 1];
      }
      positionBy(e2 = {}) {
        let t3 = this.source.start;
        if (e2.index) t3 = this.positionInside(e2.index);
        else if (e2.word) {
          let n3 = `document` in this.source.input ? this.source.input.document : this.source.input.css, r3 = n3.slice(c2(n3, this.source.start), c2(n3, this.source.end)), i3 = r3.indexOf(e2.word);
          i3 !== -1 && (t3 = this.positionInside(i3));
        }
        return t3;
      }
      positionInside(e2) {
        let t3 = this.source.start.column, n3 = this.source.start.line, r3 = `document` in this.source.input ? this.source.input.document : this.source.input.css, i3 = c2(r3, this.source.start), a3 = i3 + e2;
        for (let e3 = i3; e3 < a3; e3++) r3[e3] === `
` ? (t3 = 1, n3 += 1) : t3 += 1;
        return {
          column: t3,
          line: n3,
          offset: a3
        };
      }
      prev() {
        if (!this.parent) return;
        let e2 = this.parent.index(this);
        return this.parent.nodes[e2 - 1];
      }
      rangeBy(e2 = {}) {
        let t3 = `document` in this.source.input ? this.source.input.document : this.source.input.css, n3 = {
          column: this.source.start.column,
          line: this.source.start.line,
          offset: c2(t3, this.source.start)
        }, r3 = this.source.end ? {
          column: this.source.end.column + 1,
          line: this.source.end.line,
          offset: typeof this.source.end.offset == `number` ? this.source.end.offset : c2(t3, this.source.end) + 1
        } : {
          column: n3.column + 1,
          line: n3.line,
          offset: n3.offset + 1
        };
        if (e2.word) {
          let i3 = t3.slice(c2(t3, this.source.start), c2(t3, this.source.end)), a3 = i3.indexOf(e2.word);
          a3 !== -1 && (n3 = this.positionInside(a3), r3 = this.positionInside(a3 + e2.word.length));
        } else e2.start ? n3 = {
          column: e2.start.column,
          line: e2.start.line,
          offset: c2(t3, e2.start)
        } : e2.index && (n3 = this.positionInside(e2.index)), e2.end ? r3 = {
          column: e2.end.column,
          line: e2.end.line,
          offset: c2(t3, e2.end)
        } : typeof e2.endIndex == `number` ? r3 = this.positionInside(e2.endIndex) : e2.index && (r3 = this.positionInside(e2.index + 1));
        return (r3.line < n3.line || r3.line === n3.line && r3.column <= n3.column) && (r3 = {
          column: n3.column + 1,
          line: n3.line,
          offset: n3.offset + 1
        }), {
          end: r3,
          start: n3
        };
      }
      raw(e2, t3) {
        let n3 = new r2();
        return n3.raw(this, e2, t3);
      }
      remove() {
        return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
      }
      replaceWith(...e2) {
        if (this.parent) {
          let t3 = this, n3 = false;
          for (let r3 of e2) r3 === this ? n3 = true : n3 ? (this.parent.insertAfter(t3, r3), t3 = r3) : this.parent.insertBefore(t3, r3);
          n3 || this.remove();
        }
        return this;
      }
      root() {
        let e2 = this;
        for (; e2.parent && e2.parent.type !== `document`; ) e2 = e2.parent;
        return e2;
      }
      toJSON(e2, t3) {
        let n3 = {}, r3 = t3 == null;
        t3 || (t3 = /* @__PURE__ */ new Map());
        let i3 = 0;
        for (let e3 in this) {
          if (!Object.prototype.hasOwnProperty.call(this, e3) || e3 === `parent` || e3 === `proxyCache`) continue;
          let r4 = this[e3];
          if (Array.isArray(r4)) n3[e3] = r4.map((e4) => typeof e4 == `object` && e4.toJSON ? e4.toJSON(null, t3) : e4);
          else if (typeof r4 == `object` && r4.toJSON) n3[e3] = r4.toJSON(null, t3);
          else if (e3 === `source`) {
            if (r4 == null) continue;
            let a3 = t3.get(r4.input);
            a3 ?? (a3 = i3, t3.set(r4.input, i3), i3++), n3[e3] = {
              end: r4.end,
              inputId: a3,
              start: r4.start
            };
          } else n3[e3] = r4;
        }
        return r3 && (n3.inputs = [
          ...t3.keys()
        ].map((e3) => e3.toJSON())), n3;
      }
      toProxy() {
        return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
      }
      toString(e2 = i2) {
        e2.stringify && (e2 = e2.stringify);
        let t3 = ``;
        return e2(this, (e3) => {
          t3 += e3;
        }), t3;
      }
      warn(e2, t3, n3 = {}) {
        let r3 = {
          node: this
        };
        for (let e3 in n3) r3[e3] = n3[e3];
        return e2.warn(t3, r3);
      }
    };
    t2.exports = l2, l2.default = l2;
  });
  O = e((exports, t2) => {
    let n2 = D();
    var r2 = class extends n2 {
      constructor(e2) {
        super(e2), this.type = `comment`;
      }
    };
    t2.exports = r2, r2.default = r2;
  });
  k = e((exports, t2) => {
    let n2 = D();
    var r2 = class extends n2 {
      get variable() {
        return this.prop.startsWith(`--`) || this.prop[0] === `$`;
      }
      constructor(e2) {
        e2 && e2.value !== void 0 && typeof e2.value != `string` && (e2 = {
          ...e2,
          value: String(e2.value)
        }), super(e2), this.type = `decl`;
      }
    };
    t2.exports = r2, r2.default = r2;
  });
  A = e((exports, t2) => {
    let n2 = O(), r2 = k(), i2 = D(), { isClean: a2, my: o2 } = E(), s2, c2, l2, u2;
    function d2(e2) {
      return e2.map((e3) => (e3.nodes && (e3.nodes = d2(e3.nodes)), delete e3.source, e3));
    }
    function f2(e2) {
      if (e2[a2] = false, e2.proxyOf.nodes) for (let t3 of e2.proxyOf.nodes) f2(t3);
    }
    var p2 = class e2 extends i2 {
      get first() {
        if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
      }
      get last() {
        if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
      }
      append(...e3) {
        for (let t3 of e3) {
          let e4 = this.normalize(t3, this.last);
          for (let t4 of e4) this.proxyOf.nodes.push(t4);
        }
        return this.markDirty(), this;
      }
      cleanRaws(e3) {
        if (super.cleanRaws(e3), this.nodes) for (let t3 of this.nodes) t3.cleanRaws(e3);
      }
      each(e3) {
        if (!this.proxyOf.nodes) return;
        let t3 = this.getIterator(), n3, r3;
        for (; this.indexes[t3] < this.proxyOf.nodes.length && (n3 = this.indexes[t3], r3 = e3(this.proxyOf.nodes[n3], n3), r3 !== false); ) this.indexes[t3] += 1;
        return delete this.indexes[t3], r3;
      }
      every(e3) {
        return this.nodes.every(e3);
      }
      getIterator() {
        this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
        let e3 = this.lastEach;
        return this.indexes[e3] = 0, e3;
      }
      getProxyProcessor() {
        return {
          get(e3, t3) {
            return t3 === `proxyOf` ? e3 : e3[t3] ? t3 === `each` || typeof t3 == `string` && t3.startsWith(`walk`) ? (...n3) => e3[t3](...n3.map((e4) => typeof e4 == `function` ? (t4, n4) => e4(t4.toProxy(), n4) : e4)) : t3 === `every` || t3 === `some` ? (n3) => e3[t3]((e4, ...t4) => n3(e4.toProxy(), ...t4)) : t3 === `root` ? () => e3.root().toProxy() : t3 === `nodes` ? e3.nodes.map((e4) => e4.toProxy()) : t3 === `first` || t3 === `last` ? e3[t3].toProxy() : e3[t3] : e3[t3];
          },
          set(e3, t3, n3) {
            return e3[t3] === n3 ? true : (e3[t3] = n3, (t3 === `name` || t3 === `params` || t3 === `selector`) && e3.markDirty(), true);
          }
        };
      }
      index(e3) {
        return typeof e3 == `number` ? e3 : (e3.proxyOf && (e3 = e3.proxyOf), this.proxyOf.nodes.indexOf(e3));
      }
      insertAfter(e3, t3) {
        let n3 = this.index(e3), r3 = this.normalize(t3, this.proxyOf.nodes[n3]).reverse();
        n3 = this.index(e3);
        for (let e4 of r3) this.proxyOf.nodes.splice(n3 + 1, 0, e4);
        let i3;
        for (let e4 in this.indexes) i3 = this.indexes[e4], n3 < i3 && (this.indexes[e4] = i3 + r3.length);
        return this.markDirty(), this;
      }
      insertBefore(e3, t3) {
        let n3 = this.index(e3), r3 = n3 === 0 ? `prepend` : false, i3 = this.normalize(t3, this.proxyOf.nodes[n3], r3).reverse();
        n3 = this.index(e3);
        for (let e4 of i3) this.proxyOf.nodes.splice(n3, 0, e4);
        let a3;
        for (let e4 in this.indexes) a3 = this.indexes[e4], n3 <= a3 && (this.indexes[e4] = a3 + i3.length);
        return this.markDirty(), this;
      }
      normalize(t3, i3) {
        if (typeof t3 == `string`) t3 = d2(c2(t3).nodes);
        else if (t3 === void 0) t3 = [];
        else if (Array.isArray(t3)) {
          t3 = t3.slice(0);
          for (let e3 of t3) e3.parent && e3.parent.removeChild(e3, `ignore`);
        } else if (t3.type === `root` && this.type !== `document`) {
          t3 = t3.nodes.slice(0);
          for (let e3 of t3) e3.parent && e3.parent.removeChild(e3, `ignore`);
        } else if (t3.type) t3 = [
          t3
        ];
        else if (t3.prop) {
          if (t3.value === void 0) throw Error(`Value field is missed in node creation`);
          typeof t3.value != `string` && (t3.value = String(t3.value)), t3 = [
            new r2(t3)
          ];
        } else if (t3.selector || t3.selectors) t3 = [
          new u2(t3)
        ];
        else if (t3.name) t3 = [
          new s2(t3)
        ];
        else if (t3.text) t3 = [
          new n2(t3)
        ];
        else throw Error(`Unknown node type in node creation`);
        let l3 = t3.map((t4) => (t4[o2] || e2.rebuild(t4), t4 = t4.proxyOf, t4.parent && t4.parent.removeChild(t4), t4[a2] && f2(t4), t4.raws || (t4.raws = {}), t4.raws.before === void 0 && i3 && i3.raws.before !== void 0 && (t4.raws.before = i3.raws.before.replace(/\S/g, ``)), t4.parent = this.proxyOf, t4));
        return l3;
      }
      prepend(...e3) {
        e3 = e3.reverse();
        for (let t3 of e3) {
          let e4 = this.normalize(t3, this.first, `prepend`).reverse();
          for (let t4 of e4) this.proxyOf.nodes.unshift(t4);
          for (let t4 in this.indexes) this.indexes[t4] = this.indexes[t4] + e4.length;
        }
        return this.markDirty(), this;
      }
      push(e3) {
        return e3.parent = this, this.proxyOf.nodes.push(e3), this;
      }
      removeAll() {
        for (let e3 of this.proxyOf.nodes) e3.parent = void 0;
        return this.proxyOf.nodes = [], this.markDirty(), this;
      }
      removeChild(e3) {
        e3 = this.index(e3), this.proxyOf.nodes[e3].parent = void 0, this.proxyOf.nodes.splice(e3, 1);
        let t3;
        for (let n3 in this.indexes) t3 = this.indexes[n3], t3 >= e3 && (this.indexes[n3] = t3 - 1);
        return this.markDirty(), this;
      }
      replaceValues(e3, t3, n3) {
        return n3 || (n3 = t3, t3 = {}), this.walkDecls((r3) => {
          t3.props && !t3.props.includes(r3.prop) || t3.fast && !r3.value.includes(t3.fast) || (r3.value = r3.value.replace(e3, n3));
        }), this.markDirty(), this;
      }
      some(e3) {
        return this.nodes.some(e3);
      }
      walk(e3) {
        return this.each((t3, n3) => {
          let r3;
          try {
            r3 = e3(t3, n3);
          } catch (e4) {
            throw t3.addToError(e4);
          }
          return r3 !== false && t3.walk && (r3 = t3.walk(e3)), r3;
        });
      }
      walkAtRules(e3, t3) {
        return t3 ? e3 instanceof RegExp ? this.walk((n3, r3) => {
          if (n3.type === `atrule` && e3.test(n3.name)) return t3(n3, r3);
        }) : this.walk((n3, r3) => {
          if (n3.type === `atrule` && n3.name === e3) return t3(n3, r3);
        }) : (t3 = e3, this.walk((e4, n3) => {
          if (e4.type === `atrule`) return t3(e4, n3);
        }));
      }
      walkComments(e3) {
        return this.walk((t3, n3) => {
          if (t3.type === `comment`) return e3(t3, n3);
        });
      }
      walkDecls(e3, t3) {
        return t3 ? e3 instanceof RegExp ? this.walk((n3, r3) => {
          if (n3.type === `decl` && e3.test(n3.prop)) return t3(n3, r3);
        }) : this.walk((n3, r3) => {
          if (n3.type === `decl` && n3.prop === e3) return t3(n3, r3);
        }) : (t3 = e3, this.walk((e4, n3) => {
          if (e4.type === `decl`) return t3(e4, n3);
        }));
      }
      walkRules(e3, t3) {
        return t3 ? e3 instanceof RegExp ? this.walk((n3, r3) => {
          if (n3.type === `rule` && e3.test(n3.selector)) return t3(n3, r3);
        }) : this.walk((n3, r3) => {
          if (n3.type === `rule` && n3.selector === e3) return t3(n3, r3);
        }) : (t3 = e3, this.walk((e4, n3) => {
          if (e4.type === `rule`) return t3(e4, n3);
        }));
      }
    };
    p2.registerParse = (e2) => {
      c2 = e2;
    }, p2.registerRule = (e2) => {
      u2 = e2;
    }, p2.registerAtRule = (e2) => {
      s2 = e2;
    }, p2.registerRoot = (e2) => {
      l2 = e2;
    }, t2.exports = p2, p2.default = p2, p2.rebuild = (e2) => {
      e2.type === `atrule` ? Object.setPrototypeOf(e2, s2.prototype) : e2.type === `rule` ? Object.setPrototypeOf(e2, u2.prototype) : e2.type === `decl` ? Object.setPrototypeOf(e2, r2.prototype) : e2.type === `comment` ? Object.setPrototypeOf(e2, n2.prototype) : e2.type === `root` && Object.setPrototypeOf(e2, l2.prototype), e2[o2] = true, e2.nodes && e2.nodes.forEach((e3) => {
        p2.rebuild(e3);
      });
    };
  });
  j = e((exports, t2) => {
    let n2 = A();
    var r2 = class extends n2 {
      constructor(e2) {
        super(e2), this.type = `atrule`;
      }
      append(...e2) {
        return this.proxyOf.nodes || (this.nodes = []), super.append(...e2);
      }
      prepend(...e2) {
        return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e2);
      }
    };
    t2.exports = r2, r2.default = r2, n2.registerAtRule(r2);
  });
  M = e((exports, t2) => {
    let n2 = A(), r2, i2;
    var a2 = class extends n2 {
      constructor(e2) {
        super({
          type: `document`,
          ...e2
        }), this.nodes || (this.nodes = []);
      }
      toResult(e2 = {}) {
        let t3 = new r2(new i2(), this, e2);
        return t3.stringify();
      }
    };
    a2.registerLazyResult = (e2) => {
      r2 = e2;
    }, a2.registerProcessor = (e2) => {
      i2 = e2;
    }, t2.exports = a2, a2.default = a2;
  });
  N = e((exports, t2) => {
    let n2 = `useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`, r2 = (e2, t3 = 21) => (n3 = t3) => {
      let r3 = ``, i3 = n3 | 0;
      for (; i3--; ) r3 += e2[Math.random() * e2.length | 0];
      return r3;
    }, i2 = (e2 = 21) => {
      let t3 = ``, r3 = e2 | 0;
      for (; r3--; ) t3 += n2[Math.random() * 64 | 0];
      return t3;
    };
    t2.exports = {
      nanoid: i2,
      customAlphabet: r2
    };
  });
  P = e((exports) => {
    exports.GREATEST_LOWER_BOUND = 1, exports.LEAST_UPPER_BOUND = 2;
    function t2(n2, r2, i2, a2, o2, s2) {
      var c2 = Math.floor((r2 - n2) / 2) + n2, l2 = o2(i2, a2[c2], true);
      return l2 === 0 ? c2 : l2 > 0 ? r2 - c2 > 1 ? t2(c2, r2, i2, a2, o2, s2) : s2 == exports.LEAST_UPPER_BOUND ? r2 < a2.length ? r2 : -1 : c2 : c2 - n2 > 1 ? t2(n2, c2, i2, a2, o2, s2) : s2 == exports.LEAST_UPPER_BOUND ? c2 : n2 < 0 ? -1 : n2;
    }
    exports.search = function(n2, r2, i2, a2) {
      if (r2.length === 0) return -1;
      var o2 = t2(-1, r2.length, n2, r2, i2, a2 || exports.GREATEST_LOWER_BOUND);
      if (o2 < 0) return -1;
      for (; o2 - 1 >= 0 && i2(r2[o2], r2[o2 - 1], true) === 0; ) --o2;
      return o2;
    };
  });
  F = e((exports) => {
    function t2(e2, t3, n3) {
      var r3 = e2[t3];
      e2[t3] = e2[n3], e2[n3] = r3;
    }
    function n2(e2, t3) {
      return Math.round(e2 + Math.random() * (t3 - e2));
    }
    function r2(e2, i2, a2, o2) {
      if (a2 < o2) {
        var s2 = n2(a2, o2), c2 = a2 - 1;
        t2(e2, s2, o2);
        for (var l2 = e2[o2], u2 = a2; u2 < o2; u2++) i2(e2[u2], l2) <= 0 && (c2 += 1, t2(e2, c2, u2));
        t2(e2, c2 + 1, u2);
        var d2 = c2 + 1;
        r2(e2, i2, a2, d2 - 1), r2(e2, i2, d2 + 1, o2);
      }
    }
    exports.quickSort = function(e2, t3) {
      r2(e2, t3, 0, e2.length - 1);
    };
  });
  I = e((exports) => {
    var t2 = s(), n2 = P(), r2 = i().ArraySet, o2 = a(), c2 = F().quickSort;
    function l2(e2, n3) {
      var r3 = e2;
      return typeof e2 == `string` && (r3 = t2.parseSourceMapInput(e2)), r3.sections == null ? new u2(r3, n3) : new f2(r3, n3);
    }
    l2.fromSourceMap = function(e2, t3) {
      return u2.fromSourceMap(e2, t3);
    }, l2.prototype._version = 3, l2.prototype.__generatedMappings = null, Object.defineProperty(l2.prototype, `_generatedMappings`, {
      configurable: true,
      enumerable: true,
      get: function() {
        return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
      }
    }), l2.prototype.__originalMappings = null, Object.defineProperty(l2.prototype, `_originalMappings`, {
      configurable: true,
      enumerable: true,
      get: function() {
        return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
      }
    }), l2.prototype._charIsMappingSeparator = function(e2, t3) {
      var n3 = e2.charAt(t3);
      return n3 === `;` || n3 === `,`;
    }, l2.prototype._parseMappings = function(e2, t3) {
      throw Error(`Subclasses must implement _parseMappings`);
    }, l2.GENERATED_ORDER = 1, l2.ORIGINAL_ORDER = 2, l2.GREATEST_LOWER_BOUND = 1, l2.LEAST_UPPER_BOUND = 2, l2.prototype.eachMapping = function(e2, n3, r3) {
      var i2 = n3 || null, a2 = r3 || l2.GENERATED_ORDER, o3;
      switch (a2) {
        case l2.GENERATED_ORDER:
          o3 = this._generatedMappings;
          break;
        case l2.ORIGINAL_ORDER:
          o3 = this._originalMappings;
          break;
        default:
          throw Error(`Unknown order of iteration.`);
      }
      var s2 = this.sourceRoot;
      o3.map(function(e3) {
        var n4 = e3.source === null ? null : this._sources.at(e3.source);
        return n4 = t2.computeSourceURL(s2, n4, this._sourceMapURL), {
          source: n4,
          generatedLine: e3.generatedLine,
          generatedColumn: e3.generatedColumn,
          originalLine: e3.originalLine,
          originalColumn: e3.originalColumn,
          name: e3.name === null ? null : this._names.at(e3.name)
        };
      }, this).forEach(e2, i2);
    }, l2.prototype.allGeneratedPositionsFor = function(e2) {
      var r3 = t2.getArg(e2, `line`), i2 = {
        source: t2.getArg(e2, `source`),
        originalLine: r3,
        originalColumn: t2.getArg(e2, `column`, 0)
      };
      if (i2.source = this._findSourceIndex(i2.source), i2.source < 0) return [];
      var a2 = [], o3 = this._findMapping(i2, this._originalMappings, `originalLine`, `originalColumn`, t2.compareByOriginalPositions, n2.LEAST_UPPER_BOUND);
      if (o3 >= 0) {
        var s2 = this._originalMappings[o3];
        if (e2.column === void 0) for (var c3 = s2.originalLine; s2 && s2.originalLine === c3; ) a2.push({
          line: t2.getArg(s2, `generatedLine`, null),
          column: t2.getArg(s2, `generatedColumn`, null),
          lastColumn: t2.getArg(s2, `lastGeneratedColumn`, null)
        }), s2 = this._originalMappings[++o3];
        else for (var l3 = s2.originalColumn; s2 && s2.originalLine === r3 && s2.originalColumn == l3; ) a2.push({
          line: t2.getArg(s2, `generatedLine`, null),
          column: t2.getArg(s2, `generatedColumn`, null),
          lastColumn: t2.getArg(s2, `lastGeneratedColumn`, null)
        }), s2 = this._originalMappings[++o3];
      }
      return a2;
    }, exports.SourceMapConsumer = l2;
    function u2(e2, n3) {
      var i2 = e2;
      typeof e2 == `string` && (i2 = t2.parseSourceMapInput(e2));
      var a2 = t2.getArg(i2, `version`), o3 = t2.getArg(i2, `sources`), s2 = t2.getArg(i2, `names`, []), c3 = t2.getArg(i2, `sourceRoot`, null), l3 = t2.getArg(i2, `sourcesContent`, null), u3 = t2.getArg(i2, `mappings`), d3 = t2.getArg(i2, `file`, null);
      if (a2 != this._version) throw Error(`Unsupported version: ` + a2);
      c3 && (c3 = t2.normalize(c3)), o3 = o3.map(String).map(t2.normalize).map(function(e3) {
        return c3 && t2.isAbsolute(c3) && t2.isAbsolute(e3) ? t2.relative(c3, e3) : e3;
      }), this._names = r2.fromArray(s2.map(String), true), this._sources = r2.fromArray(o3, true), this._absoluteSources = this._sources.toArray().map(function(e3) {
        return t2.computeSourceURL(c3, e3, n3);
      }), this.sourceRoot = c3, this.sourcesContent = l3, this._mappings = u3, this._sourceMapURL = n3, this.file = d3;
    }
    u2.prototype = Object.create(l2.prototype), u2.prototype.consumer = l2, u2.prototype._findSourceIndex = function(e2) {
      var n3 = e2;
      if (this.sourceRoot != null && (n3 = t2.relative(this.sourceRoot, n3)), this._sources.has(n3)) return this._sources.indexOf(n3);
      var r3;
      for (r3 = 0; r3 < this._absoluteSources.length; ++r3) if (this._absoluteSources[r3] == e2) return r3;
      return -1;
    }, u2.fromSourceMap = function(e2, n3) {
      var i2 = Object.create(u2.prototype), a2 = i2._names = r2.fromArray(e2._names.toArray(), true), o3 = i2._sources = r2.fromArray(e2._sources.toArray(), true);
      i2.sourceRoot = e2._sourceRoot, i2.sourcesContent = e2._generateSourcesContent(i2._sources.toArray(), i2.sourceRoot), i2.file = e2._file, i2._sourceMapURL = n3, i2._absoluteSources = i2._sources.toArray().map(function(e3) {
        return t2.computeSourceURL(i2.sourceRoot, e3, n3);
      });
      for (var s2 = e2._mappings.toArray().slice(), l3 = i2.__generatedMappings = [], f3 = i2.__originalMappings = [], p2 = 0, m2 = s2.length; p2 < m2; p2++) {
        var h2 = s2[p2], g2 = new d2();
        g2.generatedLine = h2.generatedLine, g2.generatedColumn = h2.generatedColumn, h2.source && (g2.source = o3.indexOf(h2.source), g2.originalLine = h2.originalLine, g2.originalColumn = h2.originalColumn, h2.name && (g2.name = a2.indexOf(h2.name)), f3.push(g2)), l3.push(g2);
      }
      return c2(i2.__originalMappings, t2.compareByOriginalPositions), i2;
    }, u2.prototype._version = 3, Object.defineProperty(u2.prototype, `sources`, {
      get: function() {
        return this._absoluteSources.slice();
      }
    });
    function d2() {
      this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
    }
    u2.prototype._parseMappings = function(e2, n3) {
      for (var r3 = 1, i2 = 0, a2 = 0, s2 = 0, l3 = 0, u3 = 0, f3 = e2.length, p2 = 0, m2 = {}, h2 = {}, g2 = [], _2 = [], v2, y2, b2, x2, S2; p2 < f3; ) if (e2.charAt(p2) === `;`) r3++, p2++, i2 = 0;
      else if (e2.charAt(p2) === `,`) p2++;
      else {
        for (v2 = new d2(), v2.generatedLine = r3, x2 = p2; x2 < f3 && !this._charIsMappingSeparator(e2, x2); x2++) ;
        if (y2 = e2.slice(p2, x2), b2 = m2[y2], b2) p2 += y2.length;
        else {
          for (b2 = []; p2 < x2; ) o2.decode(e2, p2, h2), S2 = h2.value, p2 = h2.rest, b2.push(S2);
          if (b2.length === 2) throw Error(`Found a source, but no line and column`);
          if (b2.length === 3) throw Error(`Found a source and line, but no column`);
          m2[y2] = b2;
        }
        v2.generatedColumn = i2 + b2[0], i2 = v2.generatedColumn, b2.length > 1 && (v2.source = l3 + b2[1], l3 += b2[1], v2.originalLine = a2 + b2[2], a2 = v2.originalLine, v2.originalLine += 1, v2.originalColumn = s2 + b2[3], s2 = v2.originalColumn, b2.length > 4 && (v2.name = u3 + b2[4], u3 += b2[4])), _2.push(v2), typeof v2.originalLine == `number` && g2.push(v2);
      }
      c2(_2, t2.compareByGeneratedPositionsDeflated), this.__generatedMappings = _2, c2(g2, t2.compareByOriginalPositions), this.__originalMappings = g2;
    }, u2.prototype._findMapping = function(e2, t3, r3, i2, a2, o3) {
      if (e2[r3] <= 0) throw TypeError(`Line must be greater than or equal to 1, got ` + e2[r3]);
      if (e2[i2] < 0) throw TypeError(`Column must be greater than or equal to 0, got ` + e2[i2]);
      return n2.search(e2, t3, a2, o3);
    }, u2.prototype.computeColumnSpans = function() {
      for (var e2 = 0; e2 < this._generatedMappings.length; ++e2) {
        var t3 = this._generatedMappings[e2];
        if (e2 + 1 < this._generatedMappings.length) {
          var n3 = this._generatedMappings[e2 + 1];
          if (t3.generatedLine === n3.generatedLine) {
            t3.lastGeneratedColumn = n3.generatedColumn - 1;
            continue;
          }
        }
        t3.lastGeneratedColumn = 1 / 0;
      }
    }, u2.prototype.originalPositionFor = function(e2) {
      var n3 = {
        generatedLine: t2.getArg(e2, `line`),
        generatedColumn: t2.getArg(e2, `column`)
      }, r3 = this._findMapping(n3, this._generatedMappings, `generatedLine`, `generatedColumn`, t2.compareByGeneratedPositionsDeflated, t2.getArg(e2, `bias`, l2.GREATEST_LOWER_BOUND));
      if (r3 >= 0) {
        var i2 = this._generatedMappings[r3];
        if (i2.generatedLine === n3.generatedLine) {
          var a2 = t2.getArg(i2, `source`, null);
          a2 !== null && (a2 = this._sources.at(a2), a2 = t2.computeSourceURL(this.sourceRoot, a2, this._sourceMapURL));
          var o3 = t2.getArg(i2, `name`, null);
          return o3 !== null && (o3 = this._names.at(o3)), {
            source: a2,
            line: t2.getArg(i2, `originalLine`, null),
            column: t2.getArg(i2, `originalColumn`, null),
            name: o3
          };
        }
      }
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }, u2.prototype.hasContentsOfAllSources = function() {
      return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(e2) {
        return e2 == null;
      }) : false;
    }, u2.prototype.sourceContentFor = function(e2, n3) {
      if (!this.sourcesContent) return null;
      var r3 = this._findSourceIndex(e2);
      if (r3 >= 0) return this.sourcesContent[r3];
      var i2 = e2;
      this.sourceRoot != null && (i2 = t2.relative(this.sourceRoot, i2));
      var a2;
      if (this.sourceRoot != null && (a2 = t2.urlParse(this.sourceRoot))) {
        var o3 = i2.replace(/^file:\/\//, ``);
        if (a2.scheme == `file` && this._sources.has(o3)) return this.sourcesContent[this._sources.indexOf(o3)];
        if ((!a2.path || a2.path == `/`) && this._sources.has(`/` + i2)) return this.sourcesContent[this._sources.indexOf(`/` + i2)];
      }
      if (n3) return null;
      throw Error(`"` + i2 + `" is not in the SourceMap.`);
    }, u2.prototype.generatedPositionFor = function(e2) {
      var n3 = t2.getArg(e2, `source`);
      if (n3 = this._findSourceIndex(n3), n3 < 0) return {
        line: null,
        column: null,
        lastColumn: null
      };
      var r3 = {
        source: n3,
        originalLine: t2.getArg(e2, `line`),
        originalColumn: t2.getArg(e2, `column`)
      }, i2 = this._findMapping(r3, this._originalMappings, `originalLine`, `originalColumn`, t2.compareByOriginalPositions, t2.getArg(e2, `bias`, l2.GREATEST_LOWER_BOUND));
      if (i2 >= 0) {
        var a2 = this._originalMappings[i2];
        if (a2.source === r3.source) return {
          line: t2.getArg(a2, `generatedLine`, null),
          column: t2.getArg(a2, `generatedColumn`, null),
          lastColumn: t2.getArg(a2, `lastGeneratedColumn`, null)
        };
      }
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }, exports.BasicSourceMapConsumer = u2;
    function f2(e2, n3) {
      var i2 = e2;
      typeof e2 == `string` && (i2 = t2.parseSourceMapInput(e2));
      var a2 = t2.getArg(i2, `version`), o3 = t2.getArg(i2, `sections`);
      if (a2 != this._version) throw Error(`Unsupported version: ` + a2);
      this._sources = new r2(), this._names = new r2();
      var s2 = {
        line: -1,
        column: 0
      };
      this._sections = o3.map(function(e3) {
        if (e3.url) throw Error(`Support for url field in sections not implemented.`);
        var r3 = t2.getArg(e3, `offset`), i3 = t2.getArg(r3, `line`), a3 = t2.getArg(r3, `column`);
        if (i3 < s2.line || i3 === s2.line && a3 < s2.column) throw Error(`Section offsets must be ordered and non-overlapping.`);
        return s2 = r3, {
          generatedOffset: {
            generatedLine: i3 + 1,
            generatedColumn: a3 + 1
          },
          consumer: new l2(t2.getArg(e3, `map`), n3)
        };
      });
    }
    f2.prototype = Object.create(l2.prototype), f2.prototype.constructor = l2, f2.prototype._version = 3, Object.defineProperty(f2.prototype, `sources`, {
      get: function() {
        for (var e2 = [], t3 = 0; t3 < this._sections.length; t3++) for (var n3 = 0; n3 < this._sections[t3].consumer.sources.length; n3++) e2.push(this._sections[t3].consumer.sources[n3]);
        return e2;
      }
    }), f2.prototype.originalPositionFor = function(e2) {
      var r3 = {
        generatedLine: t2.getArg(e2, `line`),
        generatedColumn: t2.getArg(e2, `column`)
      }, i2 = n2.search(r3, this._sections, function(e3, t3) {
        var n3 = e3.generatedLine - t3.generatedOffset.generatedLine;
        return n3 || e3.generatedColumn - t3.generatedOffset.generatedColumn;
      }), a2 = this._sections[i2];
      return a2 ? a2.consumer.originalPositionFor({
        line: r3.generatedLine - (a2.generatedOffset.generatedLine - 1),
        column: r3.generatedColumn - (a2.generatedOffset.generatedLine === r3.generatedLine ? a2.generatedOffset.generatedColumn - 1 : 0),
        bias: e2.bias
      }) : {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }, f2.prototype.hasContentsOfAllSources = function() {
      return this._sections.every(function(e2) {
        return e2.consumer.hasContentsOfAllSources();
      });
    }, f2.prototype.sourceContentFor = function(e2, t3) {
      for (var n3 = 0; n3 < this._sections.length; n3++) {
        var r3 = this._sections[n3], i2 = r3.consumer.sourceContentFor(e2, true);
        if (i2) return i2;
      }
      if (t3) return null;
      throw Error(`"` + e2 + `" is not in the SourceMap.`);
    }, f2.prototype.generatedPositionFor = function(e2) {
      for (var n3 = 0; n3 < this._sections.length; n3++) {
        var r3 = this._sections[n3];
        if (r3.consumer._findSourceIndex(t2.getArg(e2, `source`)) !== -1) {
          var i2 = r3.consumer.generatedPositionFor(e2);
          if (i2) {
            var a2 = {
              line: i2.line + (r3.generatedOffset.generatedLine - 1),
              column: i2.column + (r3.generatedOffset.generatedLine === i2.line ? r3.generatedOffset.generatedColumn - 1 : 0)
            };
            return a2;
          }
        }
      }
      return {
        line: null,
        column: null
      };
    }, f2.prototype._parseMappings = function(e2, n3) {
      this.__generatedMappings = [], this.__originalMappings = [];
      for (var r3 = 0; r3 < this._sections.length; r3++) for (var i2 = this._sections[r3], a2 = i2.consumer._generatedMappings, o3 = 0; o3 < a2.length; o3++) {
        var s2 = a2[o3], l3 = i2.consumer._sources.at(s2.source);
        l3 = t2.computeSourceURL(i2.consumer.sourceRoot, l3, this._sourceMapURL), this._sources.add(l3), l3 = this._sources.indexOf(l3);
        var u3 = null;
        s2.name && (u3 = i2.consumer._names.at(s2.name), this._names.add(u3), u3 = this._names.indexOf(u3));
        var d3 = {
          source: l3,
          generatedLine: s2.generatedLine + (i2.generatedOffset.generatedLine - 1),
          generatedColumn: s2.generatedColumn + (i2.generatedOffset.generatedLine === s2.generatedLine ? i2.generatedOffset.generatedColumn - 1 : 0),
          originalLine: s2.originalLine,
          originalColumn: s2.originalColumn,
          name: u3
        };
        this.__generatedMappings.push(d3), typeof d3.originalLine == `number` && this.__originalMappings.push(d3);
      }
      c2(this.__generatedMappings, t2.compareByGeneratedPositionsDeflated), c2(this.__originalMappings, t2.compareByOriginalPositions);
    }, exports.IndexedSourceMapConsumer = f2;
  });
  L = e((exports) => {
    var t2 = o().SourceMapGenerator, n2 = s(), r2 = /(\r?\n)/, i2 = 10, a2 = `$$$isSourceNode$$$`;
    function c2(e2, t3, n3, r3, i3) {
      this.children = [], this.sourceContents = {}, this.line = e2 ?? null, this.column = t3 ?? null, this.source = n3 ?? null, this.name = i3 ?? null, this[a2] = true, r3 != null && this.add(r3);
    }
    c2.fromStringWithSourceMap = function(e2, t3, i3) {
      var a3 = new c2(), o2 = e2.split(r2), s2 = 0, l2 = function() {
        var e3 = n3(), t4 = n3() || ``;
        return e3 + t4;
        function n3() {
          return s2 < o2.length ? o2[s2++] : void 0;
        }
      }, u2 = 1, d2 = 0, f2 = null;
      return t3.eachMapping(function(e3) {
        if (f2 !== null) if (u2 < e3.generatedLine) p2(f2, l2()), u2++, d2 = 0;
        else {
          var t4 = o2[s2] || ``, n3 = t4.substr(0, e3.generatedColumn - d2);
          o2[s2] = t4.substr(e3.generatedColumn - d2), d2 = e3.generatedColumn, p2(f2, n3), f2 = e3;
          return;
        }
        for (; u2 < e3.generatedLine; ) a3.add(l2()), u2++;
        if (d2 < e3.generatedColumn) {
          var t4 = o2[s2] || ``;
          a3.add(t4.substr(0, e3.generatedColumn)), o2[s2] = t4.substr(e3.generatedColumn), d2 = e3.generatedColumn;
        }
        f2 = e3;
      }, this), s2 < o2.length && (f2 && p2(f2, l2()), a3.add(o2.splice(s2).join(``))), t3.sources.forEach(function(e3) {
        var r3 = t3.sourceContentFor(e3);
        r3 != null && (i3 != null && (e3 = n2.join(i3, e3)), a3.setSourceContent(e3, r3));
      }), a3;
      function p2(e3, t4) {
        if (e3 === null || e3.source === void 0) a3.add(t4);
        else {
          var r3 = i3 ? n2.join(i3, e3.source) : e3.source;
          a3.add(new c2(e3.originalLine, e3.originalColumn, r3, t4, e3.name));
        }
      }
    }, c2.prototype.add = function(e2) {
      if (Array.isArray(e2)) e2.forEach(function(e3) {
        this.add(e3);
      }, this);
      else if (e2[a2] || typeof e2 == `string`) e2 && this.children.push(e2);
      else throw TypeError(`Expected a SourceNode, string, or an array of SourceNodes and strings. Got ` + e2);
      return this;
    }, c2.prototype.prepend = function(e2) {
      if (Array.isArray(e2)) for (var t3 = e2.length - 1; t3 >= 0; t3--) this.prepend(e2[t3]);
      else if (e2[a2] || typeof e2 == `string`) this.children.unshift(e2);
      else throw TypeError(`Expected a SourceNode, string, or an array of SourceNodes and strings. Got ` + e2);
      return this;
    }, c2.prototype.walk = function(e2) {
      for (var t3, n3 = 0, r3 = this.children.length; n3 < r3; n3++) t3 = this.children[n3], t3[a2] ? t3.walk(e2) : t3 !== `` && e2(t3, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
    }, c2.prototype.join = function(e2) {
      var t3, n3, r3 = this.children.length;
      if (r3 > 0) {
        for (t3 = [], n3 = 0; n3 < r3 - 1; n3++) t3.push(this.children[n3]), t3.push(e2);
        t3.push(this.children[n3]), this.children = t3;
      }
      return this;
    }, c2.prototype.replaceRight = function(e2, t3) {
      var n3 = this.children[this.children.length - 1];
      return n3[a2] ? n3.replaceRight(e2, t3) : typeof n3 == `string` ? this.children[this.children.length - 1] = n3.replace(e2, t3) : this.children.push(``.replace(e2, t3)), this;
    }, c2.prototype.setSourceContent = function(e2, t3) {
      this.sourceContents[n2.toSetString(e2)] = t3;
    }, c2.prototype.walkSourceContents = function(e2) {
      for (var t3 = 0, r3 = this.children.length; t3 < r3; t3++) this.children[t3][a2] && this.children[t3].walkSourceContents(e2);
      for (var i3 = Object.keys(this.sourceContents), t3 = 0, r3 = i3.length; t3 < r3; t3++) e2(n2.fromSetString(i3[t3]), this.sourceContents[i3[t3]]);
    }, c2.prototype.toString = function() {
      var e2 = ``;
      return this.walk(function(t3) {
        e2 += t3;
      }), e2;
    }, c2.prototype.toStringWithSourceMap = function(e2) {
      var n3 = {
        code: ``,
        line: 1,
        column: 0
      }, r3 = new t2(e2), a3 = false, o2 = null, s2 = null, c3 = null, l2 = null;
      return this.walk(function(e3, t3) {
        n3.code += e3, t3.source !== null && t3.line !== null && t3.column !== null ? ((o2 !== t3.source || s2 !== t3.line || c3 !== t3.column || l2 !== t3.name) && r3.addMapping({
          source: t3.source,
          original: {
            line: t3.line,
            column: t3.column
          },
          generated: {
            line: n3.line,
            column: n3.column
          },
          name: t3.name
        }), o2 = t3.source, s2 = t3.line, c3 = t3.column, l2 = t3.name, a3 = true) : a3 && (r3.addMapping({
          generated: {
            line: n3.line,
            column: n3.column
          }
        }), o2 = null, a3 = false);
        for (var u2 = 0, d2 = e3.length; u2 < d2; u2++) e3.charCodeAt(u2) === i2 ? (n3.line++, n3.column = 0, u2 + 1 === d2 ? (o2 = null, a3 = false) : a3 && r3.addMapping({
          source: t3.source,
          original: {
            line: t3.line,
            column: t3.column
          },
          generated: {
            line: n3.line,
            column: n3.column
          },
          name: t3.name
        })) : n3.column++;
      }), this.walkSourceContents(function(e3, t3) {
        r3.setSourceContent(e3, t3);
      }), {
        code: n3.code,
        map: r3
      };
    }, exports.SourceNode = c2;
  });
  R = e((exports) => {
    exports.SourceMapGenerator = o().SourceMapGenerator, exports.SourceMapConsumer = I().SourceMapConsumer, exports.SourceNode = L().SourceNode;
  });
  z = e((exports, t2) => {
    l();
    let { existsSync: n2, readFileSync: r2 } = p(), { dirname: i2, join: a2 } = h(), { SourceMapConsumer: o2, SourceMapGenerator: s2 } = R();
    function u2(e2) {
      return c ? c.from(e2, `base64`).toString() : window.atob(e2);
    }
    var d2 = class {
      constructor(e2, t3) {
        if (t3.map === false) return;
        this.loadAnnotation(e2), this.inline = this.startWith(this.annotation, `data:`);
        let n3 = t3.map ? t3.map.prev : void 0, r3 = this.loadMap(t3.from, n3);
        !this.mapFile && t3.from && (this.mapFile = t3.from), this.mapFile && (this.root = i2(this.mapFile)), r3 && (this.text = r3);
      }
      consumer() {
        return this.consumerCache || (this.consumerCache = new o2(this.text)), this.consumerCache;
      }
      decodeInline(e2) {
        let t3 = /^data:application\/json;charset=utf-?8;base64,/, n3 = /^data:application\/json;base64,/, r3 = /^data:application\/json;charset=utf-?8,/, i3 = /^data:application\/json,/, a3 = e2.match(r3) || e2.match(i3);
        if (a3) return decodeURIComponent(e2.substr(a3[0].length));
        let o3 = e2.match(t3) || e2.match(n3);
        if (o3) return u2(e2.substr(o3[0].length));
        let s3 = e2.match(/data:application\/json;([^,]+),/)[1];
        throw Error(`Unsupported source map encoding ` + s3);
      }
      getAnnotationURL(e2) {
        return e2.replace(/^\/\*\s*# sourceMappingURL=/, ``).trim();
      }
      isMap(e2) {
        return typeof e2 == `object` ? typeof e2.mappings == `string` || typeof e2._mappings == `string` || Array.isArray(e2.sections) : false;
      }
      loadAnnotation(e2) {
        let t3 = e2.match(/\/\*\s*# sourceMappingURL=/g);
        if (!t3) return;
        let n3 = e2.lastIndexOf(t3.pop()), r3 = e2.indexOf(`*/`, n3);
        n3 > -1 && r3 > -1 && (this.annotation = this.getAnnotationURL(e2.substring(n3, r3)));
      }
      loadFile(e2) {
        if (this.root = i2(e2), n2(e2)) return this.mapFile = e2, r2(e2, `utf-8`).toString().trim();
      }
      loadMap(e2, t3) {
        if (t3 === false) return false;
        if (t3) {
          if (typeof t3 == `string`) return t3;
          if (typeof t3 == `function`) {
            let n3 = t3(e2);
            if (n3) {
              let e3 = this.loadFile(n3);
              if (!e3) throw Error(`Unable to load previous source map: ` + n3.toString());
              return e3;
            }
          } else if (t3 instanceof o2) return s2.fromSourceMap(t3).toString();
          else if (t3 instanceof s2) return t3.toString();
          else if (this.isMap(t3)) return JSON.stringify(t3);
          else throw Error(`Unsupported previous source map format: ` + t3.toString());
        } else if (this.inline) return this.decodeInline(this.annotation);
        else if (this.annotation) {
          let t4 = this.annotation;
          return e2 && (t4 = a2(i2(e2), t4)), this.loadFile(t4);
        }
      }
      startWith(e2, t3) {
        return e2 ? e2.substr(0, t3.length) === t3 : false;
      }
      withContent() {
        return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
      }
    };
    t2.exports = d2, d2.default = d2;
  });
  B = e((exports, n2) => {
    let { nanoid: r2 } = N(), { isAbsolute: i2, resolve: a2 } = h(), { SourceMapConsumer: o2, SourceMapGenerator: s2 } = R(), { fileURLToPath: c2, pathToFileURL: l2 } = (d(), t(m)), u2 = C(), p2 = z(), g2 = f(), _2 = Symbol(`lineToIndexCache`), v2 = !!(o2 && s2), y2 = !!(a2 && i2);
    function b2(e2) {
      if (e2[_2]) return e2[_2];
      let t2 = e2.css.split(`
`), n3 = Array(t2.length), r3 = 0;
      for (let e3 = 0, i3 = t2.length; e3 < i3; e3++) n3[e3] = r3, r3 += t2[e3].length + 1;
      return e2[_2] = n3, n3;
    }
    var x2 = class {
      get from() {
        return this.file || this.id;
      }
      constructor(e2, t2 = {}) {
        if (e2 == null || typeof e2 == `object` && !e2.toString) throw Error(`PostCSS received ${e2} instead of CSS string`);
        if (this.css = e2.toString(), this.css[0] === `\uFEFF` || this.css[0] === `\uFFFE` ? (this.hasBOM = true, this.css = this.css.slice(1)) : this.hasBOM = false, this.document = this.css, t2.document && (this.document = t2.document.toString()), t2.from && (!y2 || /^\w+:\/\//.test(t2.from) || i2(t2.from) ? this.file = t2.from : this.file = a2(t2.from)), y2 && v2) {
          let e3 = new p2(this.css, t2);
          if (e3.text) {
            this.map = e3;
            let t3 = e3.consumer().file;
            !this.file && t3 && (this.file = this.mapResolve(t3));
          }
        }
        this.file || (this.id = `<input css ` + r2(6) + `>`), this.map && (this.map.file = this.from);
      }
      error(e2, t2, n3, r3 = {}) {
        let i3, a3, o3, s3, c3;
        if (t2 && typeof t2 == `object`) {
          let e3 = t2, r4 = n3;
          if (typeof e3.offset == `number`) {
            s3 = e3.offset;
            let r5 = this.fromOffset(s3);
            t2 = r5.line, n3 = r5.col;
          } else t2 = e3.line, n3 = e3.column, s3 = this.fromLineAndColumn(t2, n3);
          if (typeof r4.offset == `number`) {
            o3 = r4.offset;
            let e4 = this.fromOffset(o3);
            a3 = e4.line, i3 = e4.col;
          } else a3 = r4.line, i3 = r4.column, o3 = this.fromLineAndColumn(r4.line, r4.column);
        } else if (n3) s3 = this.fromLineAndColumn(t2, n3);
        else {
          s3 = t2;
          let e3 = this.fromOffset(s3);
          t2 = e3.line, n3 = e3.col;
        }
        let d2 = this.origin(t2, n3, a3, i3);
        return c3 = d2 ? new u2(e2, d2.endLine === void 0 ? d2.line : {
          column: d2.column,
          line: d2.line
        }, d2.endLine === void 0 ? d2.column : {
          column: d2.endColumn,
          line: d2.endLine
        }, d2.source, d2.file, r3.plugin) : new u2(e2, a3 === void 0 ? t2 : {
          column: n3,
          line: t2
        }, a3 === void 0 ? n3 : {
          column: i3,
          line: a3
        }, this.css, this.file, r3.plugin), c3.input = {
          column: n3,
          endColumn: i3,
          endLine: a3,
          endOffset: o3,
          line: t2,
          offset: s3,
          source: this.css
        }, this.file && (l2 && (c3.input.url = l2(this.file).toString()), c3.input.file = this.file), c3;
      }
      fromLineAndColumn(e2, t2) {
        let n3 = b2(this), r3 = n3[e2 - 1];
        return r3 + t2 - 1;
      }
      fromOffset(e2) {
        let t2 = b2(this), n3 = t2[t2.length - 1], r3 = 0;
        if (e2 >= n3) r3 = t2.length - 1;
        else {
          let n4 = t2.length - 2, i3;
          for (; r3 < n4; ) if (i3 = r3 + (n4 - r3 >> 1), e2 < t2[i3]) n4 = i3 - 1;
          else if (e2 >= t2[i3 + 1]) r3 = i3 + 1;
          else {
            r3 = i3;
            break;
          }
        }
        return {
          col: e2 - t2[r3] + 1,
          line: r3 + 1
        };
      }
      mapResolve(e2) {
        return /^\w+:\/\//.test(e2) ? e2 : a2(this.map.consumer().sourceRoot || this.map.root || `.`, e2);
      }
      origin(e2, t2, n3, r3) {
        if (!this.map) return false;
        let a3 = this.map.consumer(), o3 = a3.originalPositionFor({
          column: t2,
          line: e2
        });
        if (!o3.source) return false;
        let s3;
        typeof n3 == `number` && (s3 = a3.originalPositionFor({
          column: r3,
          line: n3
        }));
        let u3;
        u3 = i2(o3.source) ? l2(o3.source) : new URL(o3.source, this.map.consumer().sourceRoot || l2(this.map.mapFile));
        let d2 = {
          column: o3.column,
          endColumn: s3 && s3.column,
          endLine: s3 && s3.line,
          line: o3.line,
          url: u3.toString()
        };
        if (u3.protocol === `file:`) if (c2) d2.file = c2(u3);
        else throw Error(`file: protocol is not available in this PostCSS build`);
        let f2 = a3.sourceContentFor(o3.source);
        return f2 && (d2.source = f2), d2;
      }
      toJSON() {
        let e2 = {};
        for (let t2 of [
          `hasBOM`,
          `css`,
          `file`,
          `id`
        ]) this[t2] != null && (e2[t2] = this[t2]);
        return this.map && (e2.map = {
          ...this.map
        }, e2.map.consumerCache && (e2.map.consumerCache = void 0)), e2;
      }
    };
    n2.exports = x2, x2.default = x2, g2 && g2.registerInput && g2.registerInput(x2);
  });
  V = e((exports, t2) => {
    let n2 = A(), r2, i2;
    var a2 = class extends n2 {
      constructor(e2) {
        super(e2), this.type = `root`, this.nodes || (this.nodes = []);
      }
      normalize(e2, t3, n3) {
        let r3 = super.normalize(e2);
        if (t3) {
          if (n3 === `prepend`) this.nodes.length > 1 ? t3.raws.before = this.nodes[1].raws.before : delete t3.raws.before;
          else if (this.first !== t3) for (let e3 of r3) e3.raws.before = t3.raws.before;
        }
        return r3;
      }
      removeChild(e2, t3) {
        let n3 = this.index(e2);
        return !t3 && n3 === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n3].raws.before), super.removeChild(e2);
      }
      toResult(e2 = {}) {
        let t3 = new r2(new i2(), this, e2);
        return t3.stringify();
      }
    };
    a2.registerLazyResult = (e2) => {
      r2 = e2;
    }, a2.registerProcessor = (e2) => {
      i2 = e2;
    }, t2.exports = a2, a2.default = a2, n2.registerRoot(a2);
  });
  H = e((exports, t2) => {
    let n2 = {
      comma(e2) {
        return n2.split(e2, [
          `,`
        ], true);
      },
      space(e2) {
        let t3 = [
          ` `,
          `
`,
          `	`
        ];
        return n2.split(e2, t3);
      },
      split(e2, t3, n3) {
        let r2 = [], i2 = ``, a2 = false, o2 = 0, s2 = false, c2 = ``, l2 = false;
        for (let n4 of e2) l2 ? l2 = false : n4 === `\\` ? l2 = true : s2 ? n4 === c2 && (s2 = false) : n4 === `"` || n4 === `'` ? (s2 = true, c2 = n4) : n4 === `(` ? o2 += 1 : n4 === `)` ? o2 > 0 && --o2 : o2 === 0 && t3.includes(n4) && (a2 = true), a2 ? (i2 !== `` && r2.push(i2.trim()), i2 = ``, a2 = false) : i2 += n4;
        return (n3 || i2 !== ``) && r2.push(i2.trim()), r2;
      }
    };
    t2.exports = n2, n2.default = n2;
  });
  U = e((exports, t2) => {
    let n2 = A(), r2 = H();
    var i2 = class extends n2 {
      get selectors() {
        return r2.comma(this.selector);
      }
      set selectors(e2) {
        let t3 = this.selector ? this.selector.match(/,\s*/) : null, n3 = t3 ? t3[0] : `,` + this.raw(`between`, `beforeOpen`);
        this.selector = e2.join(n3);
      }
      constructor(e2) {
        super(e2), this.type = `rule`, this.nodes || (this.nodes = []);
      }
    };
    t2.exports = i2, i2.default = i2, n2.registerRule(i2);
  });
  W = e((exports, t2) => {
    let n2 = j(), r2 = O(), i2 = k(), a2 = B(), o2 = z(), s2 = V(), c2 = U();
    function l2(e2, t3) {
      if (Array.isArray(e2)) return e2.map((e3) => l2(e3));
      let { inputs: u2, ...d2 } = e2;
      if (u2) {
        t3 = [];
        for (let e3 of u2) {
          let n3 = {
            ...e3,
            __proto__: a2.prototype
          };
          n3.map && (n3.map = {
            ...n3.map,
            __proto__: o2.prototype
          }), t3.push(n3);
        }
      }
      if (d2.nodes && (d2.nodes = e2.nodes.map((e3) => l2(e3, t3))), d2.source) {
        let { inputId: e3, ...n3 } = d2.source;
        d2.source = n3, e3 != null && (d2.source.input = t3[e3]);
      }
      if (d2.type === `root`) return new s2(d2);
      if (d2.type === `decl`) return new i2(d2);
      if (d2.type === `rule`) return new c2(d2);
      if (d2.type === `comment`) return new r2(d2);
      if (d2.type === `atrule`) return new n2(d2);
      throw Error(`Unknown node type: ` + e2.type);
    }
    t2.exports = l2, l2.default = l2;
  });
  G = e((exports, n2) => {
    l();
    let { dirname: r2, relative: i2, resolve: a2, sep: o2 } = h(), { SourceMapConsumer: s2, SourceMapGenerator: u2 } = R(), { pathToFileURL: f2 } = (d(), t(m)), p2 = B(), g2 = !!(s2 && u2), _2 = !!(r2 && a2 && i2 && o2);
    var v2 = class {
      constructor(e2, t2, n3, r3) {
        this.stringify = e2, this.mapOpts = n3.map || {}, this.root = t2, this.opts = n3, this.css = r3, this.originalCSS = r3, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
      }
      addAnnotation() {
        let e2;
        e2 = this.isInline() ? `data:application/json;base64,` + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == `string` ? this.mapOpts.annotation : typeof this.mapOpts.annotation == `function` ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + `.map`;
        let t2 = `
`;
        this.css.includes(`\r
`) && (t2 = `\r
`), this.css += t2 + `/*# sourceMappingURL=` + e2 + ` */`;
      }
      applyPrevMaps() {
        for (let e2 of this.previous()) {
          let t2 = this.toUrl(this.path(e2.file)), n3 = e2.root || r2(e2.file), i3;
          this.mapOpts.sourcesContent === false ? (i3 = new s2(e2.text), i3.sourcesContent && (i3.sourcesContent = null)) : i3 = e2.consumer(), this.map.applySourceMap(i3, t2, this.toUrl(this.path(n3)));
        }
      }
      clearAnnotation() {
        if (this.mapOpts.annotation !== false) if (this.root) {
          let e2;
          for (let t2 = this.root.nodes.length - 1; t2 >= 0; t2--) e2 = this.root.nodes[t2], e2.type === `comment` && e2.text.startsWith(`# sourceMappingURL=`) && this.root.removeChild(t2);
        } else this.css && (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, ``));
      }
      generate() {
        if (this.clearAnnotation(), _2 && g2 && this.isMap()) return this.generateMap();
        {
          let e2 = ``;
          return this.stringify(this.root, (t2) => {
            e2 += t2;
          }), [
            e2
          ];
        }
      }
      generateMap() {
        if (this.root) this.generateString();
        else if (this.previous().length === 1) {
          let e2 = this.previous()[0].consumer();
          e2.file = this.outputFile(), this.map = u2.fromSourceMap(e2, {
            ignoreInvalidMapping: true
          });
        } else this.map = new u2({
          file: this.outputFile(),
          ignoreInvalidMapping: true
        }), this.map.addMapping({
          generated: {
            column: 0,
            line: 1
          },
          original: {
            column: 0,
            line: 1
          },
          source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : `<no source>`
        });
        return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [
          this.css
        ] : [
          this.css,
          this.map
        ];
      }
      generateString() {
        this.css = ``, this.map = new u2({
          file: this.outputFile(),
          ignoreInvalidMapping: true
        });
        let e2 = 1, t2 = 1, n3 = `<no source>`, r3 = {
          generated: {
            column: 0,
            line: 0
          },
          original: {
            column: 0,
            line: 0
          },
          source: ``
        }, i3, a3;
        this.stringify(this.root, (o3, s3, c2) => {
          if (this.css += o3, s3 && c2 !== `end` && (r3.generated.line = e2, r3.generated.column = t2 - 1, s3.source && s3.source.start ? (r3.source = this.sourcePath(s3), r3.original.line = s3.source.start.line, r3.original.column = s3.source.start.column - 1, this.map.addMapping(r3)) : (r3.source = n3, r3.original.line = 1, r3.original.column = 0, this.map.addMapping(r3))), a3 = o3.match(/\n/g), a3 ? (e2 += a3.length, i3 = o3.lastIndexOf(`
`), t2 = o3.length - i3) : t2 += o3.length, s3 && c2 !== `start`) {
            let i4 = s3.parent || {
              raws: {}
            }, a4 = s3.type === `decl` || s3.type === `atrule` && !s3.nodes;
            (!a4 || s3 !== i4.last || i4.raws.semicolon) && (s3.source && s3.source.end ? (r3.source = this.sourcePath(s3), r3.original.line = s3.source.end.line, r3.original.column = s3.source.end.column - 1, r3.generated.line = e2, r3.generated.column = t2 - 2, this.map.addMapping(r3)) : (r3.source = n3, r3.original.line = 1, r3.original.column = 0, r3.generated.line = e2, r3.generated.column = t2 - 1, this.map.addMapping(r3)));
          }
        });
      }
      isAnnotation() {
        return this.isInline() ? true : this.mapOpts.annotation === void 0 ? this.previous().length ? this.previous().some((e2) => e2.annotation) : true : this.mapOpts.annotation;
      }
      isInline() {
        if (this.mapOpts.inline !== void 0) return this.mapOpts.inline;
        let e2 = this.mapOpts.annotation;
        return e2 !== void 0 && e2 !== true ? false : this.previous().length ? this.previous().some((e3) => e3.inline) : true;
      }
      isMap() {
        return this.opts.map === void 0 ? this.previous().length > 0 : !!this.opts.map;
      }
      isSourcesContent() {
        return this.mapOpts.sourcesContent === void 0 ? this.previous().length ? this.previous().some((e2) => e2.withContent()) : true : this.mapOpts.sourcesContent;
      }
      outputFile() {
        return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : `to.css`;
      }
      path(e2) {
        if (this.mapOpts.absolute || e2.charCodeAt(0) === 60 || /^\w+:\/\//.test(e2)) return e2;
        let t2 = this.memoizedPaths.get(e2);
        if (t2) return t2;
        let n3 = this.opts.to ? r2(this.opts.to) : `.`;
        typeof this.mapOpts.annotation == `string` && (n3 = r2(a2(n3, this.mapOpts.annotation)));
        let o3 = i2(n3, e2);
        return this.memoizedPaths.set(e2, o3), o3;
      }
      previous() {
        if (!this.previousMaps) if (this.previousMaps = [], this.root) this.root.walk((e2) => {
          if (e2.source && e2.source.input.map) {
            let t2 = e2.source.input.map;
            this.previousMaps.includes(t2) || this.previousMaps.push(t2);
          }
        });
        else {
          let e2 = new p2(this.originalCSS, this.opts);
          e2.map && this.previousMaps.push(e2.map);
        }
        return this.previousMaps;
      }
      setSourcesContent() {
        let e2 = {};
        if (this.root) this.root.walk((t2) => {
          if (t2.source) {
            let n3 = t2.source.input.from;
            if (n3 && !e2[n3]) {
              e2[n3] = true;
              let r3 = this.usesFileUrls ? this.toFileUrl(n3) : this.toUrl(this.path(n3));
              this.map.setSourceContent(r3, t2.source.input.css);
            }
          }
        });
        else if (this.css) {
          let e3 = this.opts.from ? this.toUrl(this.path(this.opts.from)) : `<no source>`;
          this.map.setSourceContent(e3, this.css);
        }
      }
      sourcePath(e2) {
        return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e2.source.input.from) : this.toUrl(this.path(e2.source.input.from));
      }
      toBase64(e2) {
        return c ? c.from(e2).toString(`base64`) : window.btoa(unescape(encodeURIComponent(e2)));
      }
      toFileUrl(e2) {
        let t2 = this.memoizedFileURLs.get(e2);
        if (t2) return t2;
        if (f2) {
          let t3 = f2(e2).toString();
          return this.memoizedFileURLs.set(e2, t3), t3;
        } else throw Error("`map.absolute` option is not available in this PostCSS build");
      }
      toUrl(e2) {
        let t2 = this.memoizedURLs.get(e2);
        if (t2) return t2;
        o2 === `\\` && (e2 = e2.replace(/\\/g, `/`));
        let n3 = encodeURI(e2).replace(/[#?]/g, encodeURIComponent);
        return this.memoizedURLs.set(e2, n3), n3;
      }
    };
    n2.exports = v2;
  });
  ee = e((exports, t2) => {
    let n2 = 39, r2 = 34, i2 = 92, a2 = 47, o2 = 10, s2 = 32, c2 = 12, l2 = 9, u2 = 13, d2 = 91, f2 = 93, p2 = 40, m2 = 41, h2 = 123, g2 = 125, _2 = 59, v2 = 42, y2 = 58, b2 = 64, x2 = /[\t\n\f\r "#'()/;[\\\]{}]/g, S2 = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, C2 = /.[\r\n"'(/\\]/, w2 = /[\da-f]/i;
    t2.exports = function(e2, t3 = {}) {
      let T2 = e2.css.valueOf(), E2 = t3.ignoreErrors, D2, O2, k2, A2, j2, M2, N2, P2, F2, I2, L2 = T2.length, R2 = 0, z2 = [], B2 = [];
      function V2() {
        return R2;
      }
      function H2(t4) {
        throw e2.error(`Unclosed ` + t4, R2);
      }
      function U2() {
        return B2.length === 0 && R2 >= L2;
      }
      function W2(e3) {
        if (B2.length) return B2.pop();
        if (R2 >= L2) return;
        let t4 = e3 ? e3.ignoreUnclosed : false;
        switch (D2 = T2.charCodeAt(R2), D2) {
          case o2:
          case s2:
          case l2:
          case u2:
          case c2:
            A2 = R2;
            do
              A2 += 1, D2 = T2.charCodeAt(A2);
            while (D2 === s2 || D2 === o2 || D2 === l2 || D2 === u2 || D2 === c2);
            M2 = [
              `space`,
              T2.slice(R2, A2)
            ], R2 = A2 - 1;
            break;
          case d2:
          case f2:
          case h2:
          case g2:
          case y2:
          case _2:
          case m2: {
            let e4 = String.fromCharCode(D2);
            M2 = [
              e4,
              e4,
              R2
            ];
            break;
          }
          case p2:
            if (I2 = z2.length ? z2.pop()[1] : ``, F2 = T2.charCodeAt(R2 + 1), I2 === `url` && F2 !== n2 && F2 !== r2 && F2 !== s2 && F2 !== o2 && F2 !== l2 && F2 !== c2 && F2 !== u2) {
              A2 = R2;
              do {
                if (N2 = false, A2 = T2.indexOf(`)`, A2 + 1), A2 === -1) if (E2 || t4) {
                  A2 = R2;
                  break;
                } else H2(`bracket`);
                for (P2 = A2; T2.charCodeAt(P2 - 1) === i2; ) --P2, N2 = !N2;
              } while (N2);
              M2 = [
                `brackets`,
                T2.slice(R2, A2 + 1),
                R2,
                A2
              ], R2 = A2;
            } else A2 = T2.indexOf(`)`, R2 + 1), O2 = T2.slice(R2, A2 + 1), A2 === -1 || C2.test(O2) ? M2 = [
              `(`,
              `(`,
              R2
            ] : (M2 = [
              `brackets`,
              O2,
              R2,
              A2
            ], R2 = A2);
            break;
          case n2:
          case r2:
            j2 = D2 === n2 ? `'` : `"`, A2 = R2;
            do {
              if (N2 = false, A2 = T2.indexOf(j2, A2 + 1), A2 === -1) if (E2 || t4) {
                A2 = R2 + 1;
                break;
              } else H2(`string`);
              for (P2 = A2; T2.charCodeAt(P2 - 1) === i2; ) --P2, N2 = !N2;
            } while (N2);
            M2 = [
              `string`,
              T2.slice(R2, A2 + 1),
              R2,
              A2
            ], R2 = A2;
            break;
          case b2:
            x2.lastIndex = R2 + 1, x2.test(T2), A2 = x2.lastIndex === 0 ? T2.length - 1 : x2.lastIndex - 2, M2 = [
              `at-word`,
              T2.slice(R2, A2 + 1),
              R2,
              A2
            ], R2 = A2;
            break;
          case i2:
            for (A2 = R2, k2 = true; T2.charCodeAt(A2 + 1) === i2; ) A2 += 1, k2 = !k2;
            if (D2 = T2.charCodeAt(A2 + 1), k2 && D2 !== a2 && D2 !== s2 && D2 !== o2 && D2 !== l2 && D2 !== u2 && D2 !== c2 && (A2 += 1, w2.test(T2.charAt(A2)))) {
              for (; w2.test(T2.charAt(A2 + 1)); ) A2 += 1;
              T2.charCodeAt(A2 + 1) === s2 && (A2 += 1);
            }
            M2 = [
              `word`,
              T2.slice(R2, A2 + 1),
              R2,
              A2
            ], R2 = A2;
            break;
          default:
            D2 === a2 && T2.charCodeAt(R2 + 1) === v2 ? (A2 = T2.indexOf(`*/`, R2 + 2) + 1, A2 === 0 && (E2 || t4 ? A2 = T2.length : H2(`comment`)), M2 = [
              `comment`,
              T2.slice(R2, A2 + 1),
              R2,
              A2
            ], R2 = A2) : (S2.lastIndex = R2 + 1, S2.test(T2), A2 = S2.lastIndex === 0 ? T2.length - 1 : S2.lastIndex - 2, M2 = [
              `word`,
              T2.slice(R2, A2 + 1),
              R2,
              A2
            ], z2.push(M2), R2 = A2);
            break;
        }
        return R2++, M2;
      }
      function G2(e3) {
        B2.push(e3);
      }
      return {
        back: G2,
        endOfFile: U2,
        nextToken: W2,
        position: V2
      };
    };
  });
  K = e((exports, t2) => {
    let n2 = j(), r2 = O(), i2 = k(), a2 = V(), o2 = U(), s2 = ee(), c2 = {
      empty: true,
      space: true
    };
    function l2(e2) {
      for (let t3 = e2.length - 1; t3 >= 0; t3--) {
        let n3 = e2[t3], r3 = n3[3] || n3[2];
        if (r3) return r3;
      }
    }
    var u2 = class {
      constructor(e2) {
        this.input = e2, this.root = new a2(), this.current = this.root, this.spaces = ``, this.semicolon = false, this.createTokenizer(), this.root.source = {
          input: e2,
          start: {
            column: 1,
            line: 1,
            offset: 0
          }
        };
      }
      atrule(e2) {
        let t3 = new n2();
        t3.name = e2[1].slice(1), t3.name === `` && this.unnamedAtrule(t3, e2), this.init(t3, e2[2]);
        let r3, i3, a3, o3 = false, s3 = false, c3 = [], l3 = [];
        for (; !this.tokenizer.endOfFile(); ) {
          if (e2 = this.tokenizer.nextToken(), r3 = e2[0], r3 === `(` || r3 === `[` ? l3.push(r3 === `(` ? `)` : `]`) : r3 === `{` && l3.length > 0 ? l3.push(`}`) : r3 === l3[l3.length - 1] && l3.pop(), l3.length === 0) if (r3 === `;`) {
            t3.source.end = this.getPosition(e2[2]), t3.source.end.offset++, this.semicolon = true;
            break;
          } else if (r3 === `{`) {
            s3 = true;
            break;
          } else if (r3 === `}`) {
            if (c3.length > 0) {
              for (a3 = c3.length - 1, i3 = c3[a3]; i3 && i3[0] === `space`; ) i3 = c3[--a3];
              i3 && (t3.source.end = this.getPosition(i3[3] || i3[2]), t3.source.end.offset++);
            }
            this.end(e2);
            break;
          } else c3.push(e2);
          else c3.push(e2);
          if (this.tokenizer.endOfFile()) {
            o3 = true;
            break;
          }
        }
        t3.raws.between = this.spacesAndCommentsFromEnd(c3), c3.length ? (t3.raws.afterName = this.spacesAndCommentsFromStart(c3), this.raw(t3, `params`, c3), o3 && (e2 = c3[c3.length - 1], t3.source.end = this.getPosition(e2[3] || e2[2]), t3.source.end.offset++, this.spaces = t3.raws.between, t3.raws.between = ``)) : (t3.raws.afterName = ``, t3.params = ``), s3 && (t3.nodes = [], this.current = t3);
      }
      checkMissedSemicolon(e2) {
        let t3 = this.colon(e2);
        if (t3 === false) return;
        let n3 = 0, r3;
        for (let i3 = t3 - 1; i3 >= 0 && (r3 = e2[i3], !(r3[0] !== `space` && (n3 += 1, n3 === 2))); i3--) ;
        throw this.input.error(`Missed semicolon`, r3[0] === `word` ? r3[3] + 1 : r3[2]);
      }
      colon(e2) {
        let t3 = 0, n3, r3, i3;
        for (let [a3, o3] of e2.entries()) {
          if (r3 = o3, i3 = r3[0], i3 === `(` && (t3 += 1), i3 === `)` && --t3, t3 === 0 && i3 === `:`) if (!n3) this.doubleColon(r3);
          else if (n3[0] === `word` && n3[1] === `progid`) continue;
          else return a3;
          n3 = r3;
        }
        return false;
      }
      comment(e2) {
        let t3 = new r2();
        this.init(t3, e2[2]), t3.source.end = this.getPosition(e2[3] || e2[2]), t3.source.end.offset++;
        let n3 = e2[1].slice(2, -2);
        if (/^\s*$/.test(n3)) t3.text = ``, t3.raws.left = n3, t3.raws.right = ``;
        else {
          let e3 = n3.match(/^(\s*)([^]*\S)(\s*)$/);
          t3.text = e3[2], t3.raws.left = e3[1], t3.raws.right = e3[3];
        }
      }
      createTokenizer() {
        this.tokenizer = s2(this.input);
      }
      decl(e2, t3) {
        let n3 = new i2();
        this.init(n3, e2[0][2]);
        let r3 = e2[e2.length - 1];
        for (r3[0] === `;` && (this.semicolon = true, e2.pop()), n3.source.end = this.getPosition(r3[3] || r3[2] || l2(e2)), n3.source.end.offset++; e2[0][0] !== `word`; ) e2.length === 1 && this.unknownWord(e2), n3.raws.before += e2.shift()[1];
        for (n3.source.start = this.getPosition(e2[0][2]), n3.prop = ``; e2.length; ) {
          let t4 = e2[0][0];
          if (t4 === `:` || t4 === `space` || t4 === `comment`) break;
          n3.prop += e2.shift()[1];
        }
        n3.raws.between = ``;
        let a3;
        for (; e2.length; ) if (a3 = e2.shift(), a3[0] === `:`) {
          n3.raws.between += a3[1];
          break;
        } else a3[0] === `word` && /\w/.test(a3[1]) && this.unknownWord([
          a3
        ]), n3.raws.between += a3[1];
        (n3.prop[0] === `_` || n3.prop[0] === `*`) && (n3.raws.before += n3.prop[0], n3.prop = n3.prop.slice(1));
        let o3 = [], s3;
        for (; e2.length && (s3 = e2[0][0], !(s3 !== `space` && s3 !== `comment`)); ) o3.push(e2.shift());
        this.precheckMissedSemicolon(e2);
        for (let t4 = e2.length - 1; t4 >= 0; t4--) {
          if (a3 = e2[t4], a3[1].toLowerCase() === `!important`) {
            n3.important = true;
            let r4 = this.stringFrom(e2, t4);
            r4 = this.spacesFromEnd(e2) + r4, r4 !== ` !important` && (n3.raws.important = r4);
            break;
          } else if (a3[1].toLowerCase() === `important`) {
            let r4 = e2.slice(0), i3 = ``;
            for (let e3 = t4; e3 > 0; e3--) {
              let t5 = r4[e3][0];
              if (i3.trim().startsWith(`!`) && t5 !== `space`) break;
              i3 = r4.pop()[1] + i3;
            }
            i3.trim().startsWith(`!`) && (n3.important = true, n3.raws.important = i3, e2 = r4);
          }
          if (a3[0] !== `space` && a3[0] !== `comment`) break;
        }
        let c3 = e2.some((e3) => e3[0] !== `space` && e3[0] !== `comment`);
        c3 && (n3.raws.between += o3.map((e3) => e3[1]).join(``), o3 = []), this.raw(n3, `value`, o3.concat(e2), t3), n3.value.includes(`:`) && !t3 && this.checkMissedSemicolon(e2);
      }
      doubleColon(e2) {
        throw this.input.error(`Double colon`, {
          offset: e2[2]
        }, {
          offset: e2[2] + e2[1].length
        });
      }
      emptyRule(e2) {
        let t3 = new o2();
        this.init(t3, e2[2]), t3.selector = ``, t3.raws.between = ``, this.current = t3;
      }
      end(e2) {
        this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = false, this.current.raws.after = (this.current.raws.after || ``) + this.spaces, this.spaces = ``, this.current.parent ? (this.current.source.end = this.getPosition(e2[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e2);
      }
      endFile() {
        this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || ``) + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
      }
      freeSemicolon(e2) {
        if (this.spaces += e2[1], this.current.nodes) {
          let t3 = this.current.nodes[this.current.nodes.length - 1];
          t3 && t3.type === `rule` && !t3.raws.ownSemicolon && (t3.raws.ownSemicolon = this.spaces, this.spaces = ``, t3.source.end = this.getPosition(e2[2]), t3.source.end.offset += t3.raws.ownSemicolon.length);
        }
      }
      getPosition(e2) {
        let t3 = this.input.fromOffset(e2);
        return {
          column: t3.col,
          line: t3.line,
          offset: e2
        };
      }
      init(e2, t3) {
        this.current.push(e2), e2.source = {
          input: this.input,
          start: this.getPosition(t3)
        }, e2.raws.before = this.spaces, this.spaces = ``, e2.type !== `comment` && (this.semicolon = false);
      }
      other(e2) {
        let t3 = false, n3 = null, r3 = false, i3 = null, a3 = [], o3 = e2[1].startsWith(`--`), s3 = [], c3 = e2;
        for (; c3; ) {
          if (n3 = c3[0], s3.push(c3), n3 === `(` || n3 === `[`) i3 || (i3 = c3), a3.push(n3 === `(` ? `)` : `]`);
          else if (o3 && r3 && n3 === `{`) i3 || (i3 = c3), a3.push(`}`);
          else if (a3.length === 0) if (n3 === `;`) if (r3) {
            this.decl(s3, o3);
            return;
          } else break;
          else if (n3 === `{`) {
            this.rule(s3);
            return;
          } else if (n3 === `}`) {
            this.tokenizer.back(s3.pop()), t3 = true;
            break;
          } else n3 === `:` && (r3 = true);
          else n3 === a3[a3.length - 1] && (a3.pop(), a3.length === 0 && (i3 = null));
          c3 = this.tokenizer.nextToken();
        }
        if (this.tokenizer.endOfFile() && (t3 = true), a3.length > 0 && this.unclosedBracket(i3), t3 && r3) {
          if (!o3) for (; s3.length && (c3 = s3[s3.length - 1][0], !(c3 !== `space` && c3 !== `comment`)); ) this.tokenizer.back(s3.pop());
          this.decl(s3, o3);
        } else this.unknownWord(s3);
      }
      parse() {
        let e2;
        for (; !this.tokenizer.endOfFile(); ) switch (e2 = this.tokenizer.nextToken(), e2[0]) {
          case `space`:
            this.spaces += e2[1];
            break;
          case `;`:
            this.freeSemicolon(e2);
            break;
          case `}`:
            this.end(e2);
            break;
          case `comment`:
            this.comment(e2);
            break;
          case `at-word`:
            this.atrule(e2);
            break;
          case `{`:
            this.emptyRule(e2);
            break;
          default:
            this.other(e2);
            break;
        }
        this.endFile();
      }
      precheckMissedSemicolon() {
      }
      raw(e2, t3, n3, r3) {
        let i3, a3, o3 = n3.length, s3 = ``, l3 = true, u3, d2;
        for (let e3 = 0; e3 < o3; e3 += 1) i3 = n3[e3], a3 = i3[0], a3 === `space` && e3 === o3 - 1 && !r3 ? l3 = false : a3 === `comment` ? (d2 = n3[e3 - 1] ? n3[e3 - 1][0] : `empty`, u3 = n3[e3 + 1] ? n3[e3 + 1][0] : `empty`, !c2[d2] && !c2[u3] ? s3.slice(-1) === `,` ? l3 = false : s3 += i3[1] : l3 = false) : s3 += i3[1];
        if (!l3) {
          let r4 = n3.reduce((e3, t4) => e3 + t4[1], ``);
          e2.raws[t3] = {
            raw: r4,
            value: s3
          };
        }
        e2[t3] = s3;
      }
      rule(e2) {
        e2.pop();
        let t3 = new o2();
        this.init(t3, e2[0][2]), t3.raws.between = this.spacesAndCommentsFromEnd(e2), this.raw(t3, `selector`, e2), this.current = t3;
      }
      spacesAndCommentsFromEnd(e2) {
        let t3, n3 = ``;
        for (; e2.length && (t3 = e2[e2.length - 1][0], !(t3 !== `space` && t3 !== `comment`)); ) n3 = e2.pop()[1] + n3;
        return n3;
      }
      spacesAndCommentsFromStart(e2) {
        let t3, n3 = ``;
        for (; e2.length && (t3 = e2[0][0], !(t3 !== `space` && t3 !== `comment`)); ) n3 += e2.shift()[1];
        return n3;
      }
      spacesFromEnd(e2) {
        let t3, n3 = ``;
        for (; e2.length && (t3 = e2[e2.length - 1][0], t3 === `space`); ) n3 = e2.pop()[1] + n3;
        return n3;
      }
      stringFrom(e2, t3) {
        let n3 = ``;
        for (let r3 = t3; r3 < e2.length; r3++) n3 += e2[r3][1];
        return e2.splice(t3, e2.length - t3), n3;
      }
      unclosedBlock() {
        let e2 = this.current.source.start;
        throw this.input.error(`Unclosed block`, e2.line, e2.column);
      }
      unclosedBracket(e2) {
        throw this.input.error(`Unclosed bracket`, {
          offset: e2[2]
        }, {
          offset: e2[2] + 1
        });
      }
      unexpectedClose(e2) {
        throw this.input.error(`Unexpected }`, {
          offset: e2[2]
        }, {
          offset: e2[2] + 1
        });
      }
      unknownWord(e2) {
        throw this.input.error(`Unknown word ` + e2[0][1], {
          offset: e2[0][2]
        }, {
          offset: e2[0][2] + e2[0][1].length
        });
      }
      unnamedAtrule(e2, t3) {
        throw this.input.error(`At-rule without name`, {
          offset: t3[2]
        }, {
          offset: t3[2] + t3[1].length
        });
      }
    };
    t2.exports = u2;
  });
  q = e((exports, t2) => {
    let n2 = A(), r2 = B(), i2 = K();
    function a2(e2, t3) {
      let n3 = new r2(e2, t3), a3 = new i2(n3);
      try {
        a3.parse();
      } catch (e3) {
        throw e3;
      }
      return a3.root;
    }
    t2.exports = a2, a2.default = a2, n2.registerParse(a2);
  });
  J = e((exports, t2) => {
    var n2 = class {
      constructor(e2, t3 = {}) {
        if (this.type = `warning`, this.text = e2, t3.node && t3.node.source) {
          let e3 = t3.node.rangeBy(t3);
          this.line = e3.start.line, this.column = e3.start.column, this.endLine = e3.end.line, this.endColumn = e3.end.column;
        }
        for (let e3 in t3) this[e3] = t3[e3];
      }
      toString() {
        return this.node ? this.node.error(this.text, {
          index: this.index,
          plugin: this.plugin,
          word: this.word
        }).message : this.plugin ? this.plugin + `: ` + this.text : this.text;
      }
    };
    t2.exports = n2, n2.default = n2;
  });
  Y = e((exports, t2) => {
    let n2 = J();
    var r2 = class {
      get content() {
        return this.css;
      }
      constructor(e2, t3, n3) {
        this.processor = e2, this.messages = [], this.root = t3, this.opts = n3, this.css = ``, this.map = void 0;
      }
      toString() {
        return this.css;
      }
      warn(e2, t3 = {}) {
        t3.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t3.plugin = this.lastPlugin.postcssPlugin);
        let r3 = new n2(e2, t3);
        return this.messages.push(r3), r3;
      }
      warnings() {
        return this.messages.filter((e2) => e2.type === `warning`);
      }
    };
    t2.exports = r2, r2.default = r2;
  });
  X = e((exports, t2) => {
    let n2 = {};
    t2.exports = function(e2) {
      n2[e2] || (n2[e2] = true, typeof console < `u` && console.warn && console.warn(e2));
    };
  });
  Z = e((exports, t2) => {
    let n2 = A(), r2 = M(), i2 = G(), a2 = q(), o2 = Y(), s2 = V(), c2 = T(), { isClean: l2, my: u2 } = E(), d2 = X(), f2 = {
      atrule: `AtRule`,
      comment: `Comment`,
      decl: `Declaration`,
      document: `Document`,
      root: `Root`,
      rule: `Rule`
    }, p2 = {
      AtRule: true,
      AtRuleExit: true,
      Comment: true,
      CommentExit: true,
      Declaration: true,
      DeclarationExit: true,
      Document: true,
      DocumentExit: true,
      Once: true,
      OnceExit: true,
      postcssPlugin: true,
      prepare: true,
      Root: true,
      RootExit: true,
      Rule: true,
      RuleExit: true
    }, m2 = {
      Once: true,
      postcssPlugin: true,
      prepare: true
    }, h2 = 0;
    function g2(e2) {
      return typeof e2 == `object` && typeof e2.then == `function`;
    }
    function _2(e2) {
      let t3 = false, n3 = f2[e2.type];
      return e2.type === `decl` ? t3 = e2.prop.toLowerCase() : e2.type === `atrule` && (t3 = e2.name.toLowerCase()), t3 && e2.append ? [
        n3,
        n3 + `-` + t3,
        h2,
        n3 + `Exit`,
        n3 + `Exit-` + t3
      ] : t3 ? [
        n3,
        n3 + `-` + t3,
        n3 + `Exit`,
        n3 + `Exit-` + t3
      ] : e2.append ? [
        n3,
        h2,
        n3 + `Exit`
      ] : [
        n3,
        n3 + `Exit`
      ];
    }
    function v2(e2) {
      let t3;
      return t3 = e2.type === `document` ? [
        `Document`,
        h2,
        `DocumentExit`
      ] : e2.type === `root` ? [
        `Root`,
        h2,
        `RootExit`
      ] : _2(e2), {
        eventIndex: 0,
        events: t3,
        iterator: 0,
        node: e2,
        visitorIndex: 0,
        visitors: []
      };
    }
    function y2(e2) {
      return e2[l2] = false, e2.nodes && e2.nodes.forEach((e3) => y2(e3)), e2;
    }
    let b2 = {};
    var x2 = class e2 {
      get content() {
        return this.stringify().content;
      }
      get css() {
        return this.stringify().css;
      }
      get map() {
        return this.stringify().map;
      }
      get messages() {
        return this.sync().messages;
      }
      get opts() {
        return this.result.opts;
      }
      get processor() {
        return this.result.processor;
      }
      get root() {
        return this.sync().root;
      }
      get [Symbol.toStringTag]() {
        return `LazyResult`;
      }
      constructor(t3, r3, i3) {
        this.stringified = false, this.processed = false;
        let s3;
        if (typeof r3 == `object` && r3 && (r3.type === `root` || r3.type === `document`)) s3 = y2(r3);
        else if (r3 instanceof e2 || r3 instanceof o2) s3 = y2(r3.root), r3.map && (i3.map === void 0 && (i3.map = {}), i3.map.inline || (i3.map.inline = false), i3.map.prev = r3.map);
        else {
          let e3 = a2;
          i3.syntax && (e3 = i3.syntax.parse), i3.parser && (e3 = i3.parser), e3.parse && (e3 = e3.parse);
          try {
            s3 = e3(r3, i3);
          } catch (e4) {
            this.processed = true, this.error = e4;
          }
          s3 && !s3[u2] && n2.rebuild(s3);
        }
        this.result = new o2(t3, s3, i3), this.helpers = {
          ...b2,
          postcss: b2,
          result: this.result
        }, this.plugins = this.processor.plugins.map((e3) => typeof e3 == `object` && e3.prepare ? {
          ...e3,
          ...e3.prepare(this.result)
        } : e3);
      }
      async() {
        return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
      }
      catch(e3) {
        return this.async().catch(e3);
      }
      finally(e3) {
        return this.async().then(e3, e3);
      }
      getAsyncError() {
        throw Error(`Use process(css).then(cb) to work with async plugins`);
      }
      handleError(e3, t3) {
        let n3 = this.result.lastPlugin;
        try {
          t3 && t3.addToError(e3), this.error = e3, e3.name === `CssSyntaxError` && !e3.plugin ? (e3.plugin = n3.postcssPlugin, e3.setMessage()) : n3.postcssVersion;
        } catch (e4) {
          console && console.error && console.error(e4);
        }
        return e3;
      }
      prepareVisitors() {
        this.listeners = {};
        let e3 = (e4, t3, n3) => {
          this.listeners[t3] || (this.listeners[t3] = []), this.listeners[t3].push([
            e4,
            n3
          ]);
        };
        for (let t3 of this.plugins) if (typeof t3 == `object`) for (let n3 in t3) {
          if (!p2[n3] && /^[A-Z]/.test(n3)) throw Error(`Unknown event ${n3} in ${t3.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
          if (!m2[n3]) if (typeof t3[n3] == `object`) for (let r3 in t3[n3]) r3 === `*` ? e3(t3, n3, t3[n3][r3]) : e3(t3, n3 + `-` + r3.toLowerCase(), t3[n3][r3]);
          else typeof t3[n3] == `function` && e3(t3, n3, t3[n3]);
        }
        this.hasListener = Object.keys(this.listeners).length > 0;
      }
      async runAsync() {
        this.plugin = 0;
        for (let e3 = 0; e3 < this.plugins.length; e3++) {
          let t3 = this.plugins[e3], n3 = this.runOnRoot(t3);
          if (g2(n3)) try {
            await n3;
          } catch (e4) {
            throw this.handleError(e4);
          }
        }
        if (this.prepareVisitors(), this.hasListener) {
          let e3 = this.result.root;
          for (; !e3[l2]; ) {
            e3[l2] = true;
            let t3 = [
              v2(e3)
            ];
            for (; t3.length > 0; ) {
              let e4 = this.visitTick(t3);
              if (g2(e4)) try {
                await e4;
              } catch (e5) {
                let n3 = t3[t3.length - 1].node;
                throw this.handleError(e5, n3);
              }
            }
          }
          if (this.listeners.OnceExit) for (let [t3, n3] of this.listeners.OnceExit) {
            this.result.lastPlugin = t3;
            try {
              if (e3.type === `document`) {
                let t4 = e3.nodes.map((e4) => n3(e4, this.helpers));
                await Promise.all(t4);
              } else await n3(e3, this.helpers);
            } catch (e4) {
              throw this.handleError(e4);
            }
          }
        }
        return this.processed = true, this.stringify();
      }
      runOnRoot(e3) {
        this.result.lastPlugin = e3;
        try {
          if (typeof e3 == `object` && e3.Once) {
            if (this.result.root.type === `document`) {
              let t3 = this.result.root.nodes.map((t4) => e3.Once(t4, this.helpers));
              return g2(t3[0]) ? Promise.all(t3) : t3;
            }
            return e3.Once(this.result.root, this.helpers);
          } else if (typeof e3 == `function`) return e3(this.result.root, this.result);
        } catch (e4) {
          throw this.handleError(e4);
        }
      }
      stringify() {
        if (this.error) throw this.error;
        if (this.stringified) return this.result;
        this.stringified = true, this.sync();
        let e3 = this.result.opts, t3 = c2;
        e3.syntax && (t3 = e3.syntax.stringify), e3.stringifier && (t3 = e3.stringifier), t3.stringify && (t3 = t3.stringify);
        let n3 = new i2(t3, this.result.root, this.result.opts), r3 = n3.generate();
        return this.result.css = r3[0], this.result.map = r3[1], this.result;
      }
      sync() {
        if (this.error) throw this.error;
        if (this.processed) return this.result;
        if (this.processed = true, this.processing) throw this.getAsyncError();
        for (let e3 of this.plugins) {
          let t3 = this.runOnRoot(e3);
          if (g2(t3)) throw this.getAsyncError();
        }
        if (this.prepareVisitors(), this.hasListener) {
          let e3 = this.result.root;
          for (; !e3[l2]; ) e3[l2] = true, this.walkSync(e3);
          if (this.listeners.OnceExit) if (e3.type === `document`) for (let t3 of e3.nodes) this.visitSync(this.listeners.OnceExit, t3);
          else this.visitSync(this.listeners.OnceExit, e3);
        }
        return this.result;
      }
      then(e3, t3) {
        return this.async().then(e3, t3);
      }
      toString() {
        return this.css;
      }
      visitSync(e3, t3) {
        for (let [n3, r3] of e3) {
          this.result.lastPlugin = n3;
          let e4;
          try {
            e4 = r3(t3, this.helpers);
          } catch (e5) {
            throw this.handleError(e5, t3.proxyOf);
          }
          if (t3.type !== `root` && t3.type !== `document` && !t3.parent) return true;
          if (g2(e4)) throw this.getAsyncError();
        }
      }
      visitTick(e3) {
        let t3 = e3[e3.length - 1], { node: n3, visitors: r3 } = t3;
        if (n3.type !== `root` && n3.type !== `document` && !n3.parent) {
          e3.pop();
          return;
        }
        if (r3.length > 0 && t3.visitorIndex < r3.length) {
          let [e4, i4] = r3[t3.visitorIndex];
          t3.visitorIndex += 1, t3.visitorIndex === r3.length && (t3.visitors = [], t3.visitorIndex = 0), this.result.lastPlugin = e4;
          try {
            return i4(n3.toProxy(), this.helpers);
          } catch (e5) {
            throw this.handleError(e5, n3);
          }
        }
        if (t3.iterator !== 0) {
          let r4 = t3.iterator, i4;
          for (; i4 = n3.nodes[n3.indexes[r4]]; ) if (n3.indexes[r4] += 1, !i4[l2]) {
            i4[l2] = true, e3.push(v2(i4));
            return;
          }
          t3.iterator = 0, delete n3.indexes[r4];
        }
        let i3 = t3.events;
        for (; t3.eventIndex < i3.length; ) {
          let e4 = i3[t3.eventIndex];
          if (t3.eventIndex += 1, e4 === h2) {
            n3.nodes && n3.nodes.length && (n3[l2] = true, t3.iterator = n3.getIterator());
            return;
          } else if (this.listeners[e4]) {
            t3.visitors = this.listeners[e4];
            return;
          }
        }
        e3.pop();
      }
      walkSync(e3) {
        e3[l2] = true;
        let t3 = _2(e3);
        for (let n3 of t3) if (n3 === h2) e3.nodes && e3.each((e4) => {
          e4[l2] || this.walkSync(e4);
        });
        else {
          let t4 = this.listeners[n3];
          if (t4 && this.visitSync(t4, e3.toProxy())) return;
        }
      }
      warnings() {
        return this.sync().warnings();
      }
    };
    x2.registerPostcss = (e2) => {
      b2 = e2;
    }, t2.exports = x2, x2.default = x2, s2.registerLazyResult(x2), r2.registerLazyResult(x2);
  });
  te = e((exports, t2) => {
    let n2 = G(), r2 = q(), i2 = Y(), a2 = T(), o2 = X();
    var s2 = class {
      get content() {
        return this.result.css;
      }
      get css() {
        return this.result.css;
      }
      get map() {
        return this.result.map;
      }
      get messages() {
        return [];
      }
      get opts() {
        return this.result.opts;
      }
      get processor() {
        return this.result.processor;
      }
      get root() {
        if (this._root) return this._root;
        let e2, t3 = r2;
        try {
          e2 = t3(this._css, this._opts);
        } catch (e3) {
          this.error = e3;
        }
        if (this.error) throw this.error;
        return this._root = e2, e2;
      }
      get [Symbol.toStringTag]() {
        return `NoWorkResult`;
      }
      constructor(e2, t3, r3) {
        t3 = t3.toString(), this.stringified = false, this._processor = e2, this._css = t3, this._opts = r3, this._map = void 0;
        let o3, s3 = a2;
        this.result = new i2(this._processor, o3, this._opts), this.result.css = t3;
        let c2 = this;
        Object.defineProperty(this.result, `root`, {
          get() {
            return c2.root;
          }
        });
        let l2 = new n2(s3, o3, this._opts, t3);
        if (l2.isMap()) {
          let [e3, t4] = l2.generate();
          e3 && (this.result.css = e3), t4 && (this.result.map = t4);
        } else l2.clearAnnotation(), this.result.css = l2.css;
      }
      async() {
        return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
      }
      catch(e2) {
        return this.async().catch(e2);
      }
      finally(e2) {
        return this.async().then(e2, e2);
      }
      sync() {
        if (this.error) throw this.error;
        return this.result;
      }
      then(e2, t3) {
        return this.async().then(e2, t3);
      }
      toString() {
        return this._css;
      }
      warnings() {
        return [];
      }
    };
    t2.exports = s2, s2.default = s2;
  });
  ne = e((exports, t2) => {
    let n2 = M(), r2 = Z(), i2 = te(), a2 = V();
    var o2 = class {
      constructor(e2 = []) {
        this.version = `8.5.4`, this.plugins = this.normalize(e2);
      }
      normalize(e2) {
        let t3 = [];
        for (let n3 of e2) if (n3.postcss === true ? n3 = n3() : n3.postcss && (n3 = n3.postcss), typeof n3 == `object` && Array.isArray(n3.plugins)) t3 = t3.concat(n3.plugins);
        else if (typeof n3 == `object` && n3.postcssPlugin) t3.push(n3);
        else if (typeof n3 == `function`) t3.push(n3);
        else if (!(typeof n3 == `object` && (n3.parse || n3.stringify))) throw Error(n3 + ` is not a PostCSS plugin`);
        return t3;
      }
      process(e2, t3 = {}) {
        return !this.plugins.length && !t3.parser && !t3.stringifier && !t3.syntax ? new i2(this, e2, t3) : new r2(this, e2, t3);
      }
      use(e2) {
        return this.plugins = this.plugins.concat(this.normalize([
          e2
        ])), this;
      }
    };
    t2.exports = o2, o2.default = o2, a2.registerProcessor(o2), n2.registerProcessor(o2);
  });
  Q = e((exports, t2) => {
    let n2 = j(), r2 = O(), i2 = A(), a2 = C(), o2 = k(), s2 = M(), c2 = W(), l2 = B(), u2 = Z(), d2 = H(), f2 = D(), p2 = q(), m2 = ne(), h2 = Y(), g2 = V(), _2 = U(), v2 = T(), y2 = J();
    function b2(...e2) {
      return e2.length === 1 && Array.isArray(e2[0]) && (e2 = e2[0]), new m2(e2);
    }
    b2.plugin = function(e2, t3) {
      let n3 = false;
      function r3(...r4) {
        console && console.warn && !n3 && (n3 = true, console.warn(e2 + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`), {}.LANG && {}.LANG.startsWith(`cn`) && console.warn(e2 + `: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));
        let i4 = t3(...r4);
        return i4.postcssPlugin = e2, i4.postcssVersion = new m2().version, i4;
      }
      let i3;
      return Object.defineProperty(r3, `postcss`, {
        get() {
          return i3 || (i3 = r3()), i3;
        }
      }), r3.process = function(e3, t4, n4) {
        return b2([
          r3(n4)
        ]).process(e3, t4);
      }, r3;
    }, b2.stringify = v2, b2.parse = p2, b2.fromJSON = c2, b2.list = d2, b2.comment = (e2) => new r2(e2), b2.atRule = (e2) => new n2(e2), b2.decl = (e2) => new o2(e2), b2.rule = (e2) => new _2(e2), b2.root = (e2) => new g2(e2), b2.document = (e2) => new s2(e2), b2.CssSyntaxError = a2, b2.Declaration = o2, b2.Container = i2, b2.Processor = m2, b2.Document = s2, b2.Comment = r2, b2.Warning = y2, b2.AtRule = n2, b2.Result = h2, b2.Input = l2, b2.Rule = _2, b2.Root = g2, b2.Node = f2, u2.registerPostcss(b2), t2.exports = b2, b2.default = b2;
  });
  $ = n(Q(), 1);
  re = $.default;
  const ie = $.default.stringify, ae = $.default.fromJSON, oe = $.default.plugin, se = $.default.parse, ce = $.default.list, le = $.default.document, ue = $.default.comment, de = $.default.atRule, fe = $.default.rule, pe = $.default.decl, me = $.default.root, he = $.default.CssSyntaxError, ge = $.default.Declaration, _e = $.default.Container, ve = $.default.Processor, ye = $.default.Document, be = $.default.Comment, xe = $.default.Warning, Se = $.default.AtRule, Ce = $.default.Result, we = $.default.Input, Te = $.default.Rule, Ee = $.default.Root, De = $.default.Node;
  Oe = e((exports, t2) => {
    var n2 = {}, r2 = n2.hasOwnProperty, i2 = function(e2, t3) {
      if (!e2) return t3;
      var n3 = {};
      for (var i3 in t3) n3[i3] = r2.call(e2, i3) ? e2[i3] : t3[i3];
      return n3;
    }, a2 = /[ -,\.\/:-@\[-\^`\{-~]/, o2 = /[ -,\.\/:-@\[\]\^`\{-~]/, s2 = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g, c2 = function e2(t3, n3) {
      n3 = i2(n3, e2.options), n3.quotes != `single` && n3.quotes != `double` && (n3.quotes = `single`);
      for (var r3 = n3.quotes == `double` ? `"` : `'`, c3 = n3.isIdentifier, l2 = t3.charAt(0), u2 = ``, d2 = 0, f2 = t3.length; d2 < f2; ) {
        var p2 = t3.charAt(d2++), m2 = p2.charCodeAt(), h2 = void 0;
        if (m2 < 32 || m2 > 126) {
          if (m2 >= 55296 && m2 <= 56319 && d2 < f2) {
            var g2 = t3.charCodeAt(d2++);
            (g2 & 64512) == 56320 ? m2 = ((m2 & 1023) << 10) + (g2 & 1023) + 65536 : d2--;
          }
          h2 = `\\` + m2.toString(16).toUpperCase() + ` `;
        } else h2 = n3.escapeEverything ? a2.test(p2) ? `\\` + p2 : `\\` + m2.toString(16).toUpperCase() + ` ` : /[\t\n\f\r\x0B]/.test(p2) ? `\\` + m2.toString(16).toUpperCase() + ` ` : p2 == `\\` || !c3 && (p2 == `"` && r3 == p2 || p2 == `'` && r3 == p2) || c3 && o2.test(p2) ? `\\` + p2 : p2;
        u2 += h2;
      }
      return c3 && (/^-[-\d]/.test(u2) ? u2 = `\\-` + u2.slice(1) : /\d/.test(l2) && (u2 = `\\3` + l2 + ` ` + u2.slice(1))), u2 = u2.replace(s2, function(e3, t4, n4) {
        return t4 && t4.length % 2 ? e3 : (t4 || ``) + n4;
      }), !c3 && n3.wrap ? r3 + u2 + r3 : u2;
    };
    c2.options = {
      escapeEverything: false,
      isIdentifier: false,
      quotes: `single`,
      wrap: false
    }, c2.version = `3.0.0`, t2.exports = c2;
  });
})();
export {
  __tla,
  b as importLocalModule,
  g as isValidUrl,
  v as loadModule,
  re as postcss_default,
  Oe as require_cssesc,
  S as require_picocolors_browser,
  Q as require_postcss
};
