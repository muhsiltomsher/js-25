import { __commonJSMin as e, __esmMin as t, __export as n, __require as r, __toCommonJS as i, __toESM as a } from "./chunk-GxRd6SvM.min.js";
import { __vitePreload as o } from "./preload-helper-DApxheAR.min.js";
import { Buffer as s, init_dist$1 as c } from "./dist-BSmntxBi.min.js";
import { version as l } from "./package-CeqyRlFS.min.js";
import { require_hasown as u, require_lib$1 as d } from "./lib-BxXHRCGk.min.js";
import { init_dist$2 as f, process$1 as p } from "./dist-Doa7WVF-.min.js";
import { require_path_browserify as m } from "./path-browserify-DTdOVQJJ.min.js";
import { isValidUrl as h, postcss_default as g, __tla as __tla_0 } from "./cssesc-5IgvSXT7.js";
import { browserslistToTargets as _, init as v, lightningcss_node_default as y, transform as b, __tla as __tla_1 } from "./lightningcss-wasm-DXap5Yub.min.js";
import { require_lib as x } from "./lib-DdIaIIpq.min.js";
import { F as S, N as ee, Pu as C, V as w, _ as te, ne as T, require_postcss_nested as E, resolveConfig as D, st as O, w as k, x as A, xs as j } from "./resolve-config--ZlvvkqJ.js";
let Xs, Zs;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  var M = e((exports, t2) => {
    t2.exports = function(e2, t3, n2) {
      let r2 = [];
      if (e2 !== void 0) {
        let t4 = `layer`;
        e2 && (t4 = `layer(${e2})`), r2.push(t4);
      }
      return n2 !== void 0 && r2.push(`supports(${n2})`), t3 !== void 0 && r2.push(t3), r2.join(` `);
    };
  }), ne = e((exports, t2) => {
    c();
    let n2 = M();
    t2.exports = function(e2, t3) {
      t3.reverse();
      let r2 = t3.pop(), i2 = `${e2} ${n2(r2.layer, r2.media, r2.supports)}`;
      for (let e3 of t3) i2 = `'data:text/css;base64,${s.from(`@import ${i2}`).toString(`base64`)}' ${n2(e3.layer, e3.media, e3.supports)}`;
      return i2;
    };
  }), re = e((exports, t2) => {
    let n2 = ne();
    t2.exports = function(e2, t3) {
      e2.forEach((e3) => {
        var _a2;
        if (e3.type === `charset` || e3.type === `warning` || !((_a2 = e3.conditions) == null ? void 0 : _a2.length)) return;
        if (e3.type === `import`) {
          e3.node.params = n2(e3.fullUri, e3.conditions);
          return;
        }
        let { nodes: r2 } = e3, { parent: i2 } = r2[0], a2 = [];
        for (let n3 of e3.conditions) {
          if (n3.media !== void 0) {
            let e4 = t3({
              name: `media`,
              params: n3.media,
              source: i2.source
            });
            a2.push(e4);
          }
          if (n3.supports !== void 0) {
            let e4 = t3({
              name: `supports`,
              params: `(${n3.supports})`,
              source: i2.source
            });
            a2.push(e4);
          }
          if (n3.layer !== void 0) {
            let e4 = t3({
              name: `layer`,
              params: n3.layer,
              source: i2.source
            });
            a2.push(e4);
          }
        }
        let o2 = a2.shift(), s2 = a2.reduce((e4, t4) => (e4.append(t4), t4), o2);
        i2.insertBefore(r2[0], o2), r2.forEach((e4) => {
          e4.parent = void 0;
        }), r2[0].raws.before = r2[0].raws.before || `
`, s2.append(r2), e3.type = `nodes`, e3.nodes = [
          o2
        ], delete e3.node;
      });
    };
  }), ie = e((exports, t2) => {
    t2.exports = function(e2) {
      e2.forEach((e3, t3) => {
        if (t3 !== 0) if (e3.parent) {
          let { before: t4 } = e3.parent.node.raws;
          e3.type === `nodes` ? e3.nodes[0].raws.before = t4 : e3.node.raws.before = t4;
        } else e3.type === `nodes` && (e3.nodes[0].raws.before = e3.nodes[0].raws.before || `
`);
      });
    };
  }), ae = e((exports, t2) => {
    t2.exports = function(e2, t3) {
      t3.nodes = [], e2.forEach((e3) => {
        [
          `charset`,
          `import`
        ].includes(e3.type) ? (e3.node.parent = void 0, t3.append(e3.node)) : e3.type === `nodes` && e3.nodes.forEach((e4) => {
          e4.parent = void 0, t3.append(e4);
        });
      });
    };
  }), oe = e((exports, t2) => {
    var n2 = function(e2, t3, n3) {
      return function() {
        for (var r3 = this, i2 = Array(arguments.length), a2 = 0; a2 < arguments.length; a2++) i2[a2] = arguments[a2];
        return new t3(function(t4, a3) {
          i2.push(function(e3, r4) {
            if (e3) a3(e3);
            else if (n3.multiArgs) {
              for (var i3 = Array(arguments.length - 1), o2 = 1; o2 < arguments.length; o2++) i3[o2 - 1] = arguments[o2];
              t4(i3);
            } else t4(r4);
          }), e2.apply(r3, i2);
        });
      };
    }, r2 = t2.exports = function(e2, t3, r3) {
      typeof t3 != `function` && (r3 = t3, t3 = Promise), r3 || (r3 = {}), r3.exclude = r3.exclude || [
        /.+Sync$/
      ];
      var i2 = function(e3) {
        var t4 = function(t5) {
          return typeof t5 == `string` ? e3 === t5 : t5.test(e3);
        };
        return r3.include ? r3.include.some(t4) : !r3.exclude.some(t4);
      }, a2 = typeof e2 == `function` ? function() {
        return r3.excludeMain ? e2.apply(this, arguments) : n2(e2, t3, r3).apply(this, arguments);
      } : {};
      return Object.keys(e2).reduce(function(a3, o2) {
        var s2 = e2[o2];
        return a3[o2] = typeof s2 == `function` && i2(o2) ? n2(s2, t3, r3) : s2, a3;
      }, a2);
    };
    r2.all = r2;
  }), se = e((exports, t2) => {
    c();
    var n2 = d(), r2 = m(), i2 = oe(), a2 = i2(n2.stat), o2 = i2(n2.readFile), l2 = r2.resolve, u2 = /* @__PURE__ */ Object.create(null);
    function f2(e2, t3) {
      return s.isEncoding(t3) ? e2.toString(t3) : e2;
    }
    t2.exports = function(e2, t3) {
      return e2 = l2(e2), a2(e2).then(function(n3) {
        var r3 = u2[e2];
        return r3 && r3.mtime.getTime() === n3.mtime.getTime() ? f2(r3.content, t3) : o2(e2).then(function(r4) {
          return u2[e2] = {
            mtime: n3.mtime,
            content: r4
          }, f2(r4, t3);
        });
      }).catch(function(t4) {
        return u2[e2] = null, Promise.reject(t4);
      });
    }, t2.exports.sync = function(e2, t3) {
      e2 = l2(e2);
      try {
        var r3 = n2.statSync(e2), i3 = u2[e2];
        if (i3 && i3.mtime.getTime() === r3.mtime.getTime()) return f2(i3.content, t3);
        var a3 = n2.readFileSync(e2);
        return u2[e2] = {
          mtime: r3.mtime,
          content: a3
        }, f2(a3, t3);
      } catch (t4) {
        throw u2[e2] = null, t4;
      }
    }, t2.exports.get = function(e2, t3) {
      return e2 = l2(e2), u2[e2] ? f2(u2[e2].content, t3) : null;
    }, t2.exports.clear = function() {
      u2 = /* @__PURE__ */ Object.create(null);
    };
  }), ce = e((exports, t2) => {
    c();
    let n2 = /^data:text\/css(?:;(base64|plain))?,/i, r2 = /^data:text\/css;base64,/i, i2 = /^data:text\/css;plain,/i;
    function a2(e2) {
      return n2.test(e2);
    }
    function o2(e2) {
      return r2.test(e2) ? s.from(e2.slice(21), `base64`).toString() : i2.test(e2) ? decodeURIComponent(e2.slice(20)) : decodeURIComponent(e2.slice(14));
    }
    t2.exports = {
      isValid: a2,
      contents: o2
    };
  }), le = e((exports, t2) => {
    let n2 = se(), r2 = ce();
    t2.exports = function(e2) {
      return r2.isValid(e2) ? r2.contents(e2) : n2(e2, `utf-8`);
    };
  }), ue = e((exports, t2) => {
    let n2 = x(), { stringify: r2 } = n2;
    t2.exports = function(e2, t3, n3, r3) {
      let o2 = [], s2 = [];
      return t3.each((t4) => {
        let c2;
        t4.type === `atrule` && (t4.name === `import` ? c2 = a2(e2, t4, n3, r3) : t4.name === `charset` && (c2 = i2(e2, t4, n3, r3))), c2 ? (s2.length && (o2.push({
          type: `nodes`,
          nodes: s2,
          conditions: [
            ...n3
          ],
          from: r3
        }), s2 = []), o2.push(c2)) : s2.push(t4);
      }), s2.length && o2.push({
        type: `nodes`,
        nodes: s2,
        conditions: [
          ...n3
        ],
        from: r3
      }), o2;
    };
    function i2(e2, t3, n3, r3) {
      return t3.prev() ? e2.warn(`@charset must precede all other statements`, {
        node: t3
      }) : {
        type: `charset`,
        node: t3,
        conditions: [
          ...n3
        ],
        from: r3
      };
    }
    function a2(e2, t3, i3, a3) {
      var _a2, _b;
      let o2 = t3.prev();
      if (o2) do {
        if (o2.type === `comment` || o2.type === `atrule` && o2.name === `import`) {
          o2 = o2.prev();
          continue;
        }
        break;
      } while (o2);
      if (o2) do {
        if (o2.type === `comment` || o2.type === `atrule` && (o2.name === `charset` || o2.name === `layer` && !o2.nodes)) {
          o2 = o2.prev();
          continue;
        }
        return e2.warn(`@import must precede all other statements (besides @charset or empty @layer)`, {
          node: t3
        });
      } while (o2);
      if (t3.nodes) return e2.warn(`It looks like you didn't end your @import statement correctly. Child nodes are attached to it.`, {
        node: t3
      });
      let s2 = n2(t3.params).nodes, c2 = {
        type: `import`,
        uri: ``,
        fullUri: ``,
        node: t3,
        conditions: [
          ...i3
        ],
        from: a3
      }, l2, u2, d2;
      for (let n3 = 0; n3 < s2.length; n3++) {
        let i4 = s2[n3];
        if (!(i4.type === `space` || i4.type === `comment`)) {
          if (i4.type === `string`) {
            if (c2.uri) return e2.warn(`Multiple url's in '${t3.toString()}'`, {
              node: t3
            });
            if (!i4.value) return e2.warn(`Unable to find uri in '${t3.toString()}'`, {
              node: t3
            });
            c2.uri = i4.value, c2.fullUri = r2(i4);
            continue;
          }
          if (i4.type === `function` && /^url$/i.test(i4.value)) {
            if (c2.uri) return e2.warn(`Multiple url's in '${t3.toString()}'`, {
              node: t3
            });
            if (!((_b = (_a2 = i4.nodes) == null ? void 0 : _a2[0]) == null ? void 0 : _b.value)) return e2.warn(`Unable to find uri in '${t3.toString()}'`, {
              node: t3
            });
            c2.uri = i4.nodes[0].value, c2.fullUri = r2(i4);
            continue;
          }
          if (!c2.uri) return e2.warn(`Unable to find uri in '${t3.toString()}'`, {
            node: t3
          });
          if ((i4.type === `word` || i4.type === `function`) && /^layer$/i.test(i4.value)) {
            if (l2 !== void 0) return e2.warn(`Multiple layers in '${t3.toString()}'`, {
              node: t3
            });
            if (d2 !== void 0) return e2.warn(`layers must be defined before support conditions in '${t3.toString()}'`, {
              node: t3
            });
            l2 = i4.nodes ? r2(i4.nodes) : ``;
            continue;
          }
          if (i4.type === `function` && /^supports$/i.test(i4.value)) {
            if (d2 !== void 0) return e2.warn(`Multiple support conditions in '${t3.toString()}'`, {
              node: t3
            });
            d2 = r2(i4.nodes);
            continue;
          }
          u2 = r2(s2.slice(n3));
          break;
        }
      }
      return c2.uri ? ((u2 !== void 0 || l2 !== void 0 || d2 !== void 0) && c2.conditions.push({
        layer: l2,
        media: u2,
        supports: d2
      }), c2) : e2.warn(`Unable to find uri in '${t3.toString()}'`, {
        node: t3
      });
    }
  }), de = e((exports, t2) => {
    let n2 = m(), i2;
    t2.exports = function(e2, t3, o2, s2, c2) {
      var _a2;
      let { plugins: l2 } = s2, u2 = n2.extname(o2), d2 = [];
      if (u2 === `.sss`) {
        if (!i2) try {
          i2 = r(`sugarss`);
        } catch {
        }
        if (i2) return a2(c2, t3, o2, l2, [
          i2
        ]);
      }
      return ((_a2 = e2.opts.syntax) == null ? void 0 : _a2.parse) && d2.push(e2.opts.syntax.parse), e2.opts.parser && d2.push(e2.opts.parser), d2.push(null), a2(c2, t3, o2, l2, d2);
    };
    function a2(e2, t3, n3, r2, i3, o2) {
      return o2 || (o2 = 0), e2(r2).process(t3, {
        from: n3,
        parser: i3[o2]
      }).catch((s2) => {
        if (o2++, o2 === i3.length) throw s2;
        return a2(e2, t3, n3, r2, i3, o2);
      });
    }
  }), fe = e((exports) => {
    exports.endianness = function() {
      return `LE`;
    }, exports.hostname = function() {
      return typeof location < `u` ? location.hostname : ``;
    }, exports.loadavg = function() {
      return [];
    }, exports.uptime = function() {
      return 0;
    }, exports.freemem = function() {
      return Number.MAX_VALUE;
    }, exports.totalmem = function() {
      return Number.MAX_VALUE;
    }, exports.cpus = function() {
      return [];
    }, exports.type = function() {
      return `Browser`;
    }, exports.release = function() {
      return typeof navigator < `u` ? navigator.appVersion : ``;
    }, exports.networkInterfaces = exports.getNetworkInterfaces = function() {
      return {};
    }, exports.arch = function() {
      return `javascript`;
    }, exports.platform = function() {
      return `browser`;
    }, exports.tmpdir = exports.tmpDir = function() {
      return `/tmp`;
    }, exports.EOL = `
`, exports.homedir = function() {
      return `/`;
    };
  }), pe = e((exports, t2) => {
    f();
    var n2 = fe();
    t2.exports = n2.homedir || function() {
      var e2 = {}.HOME, t3 = {}.LOGNAME || {}.USER || {}.LNAME || {}.USERNAME;
      return p.platform === `win32` ? {}.USERPROFILE || {}.HOMEDRIVE + {}.HOMEPATH || e2 || null : p.platform === `darwin` ? e2 || (t3 ? `/Users/` + t3 : null) : p.platform === `linux` ? e2 || (p.getuid() === 0 ? `/root` : t3 ? `/home/` + t3 : null) : e2 || null;
    };
  }), me = e((exports, t2) => {
    t2.exports = function() {
      var e2 = Error.prepareStackTrace;
      Error.prepareStackTrace = function(e3, t4) {
        return t4;
      };
      var t3 = Error().stack;
      return Error.prepareStackTrace = e2, t3[2].getFileName();
    };
  }), he = e((exports, t2) => {
    f();
    var n2 = p.platform === `win32`, r2 = /^(((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?[\\\/]?)(?:[^\\\/]*[\\\/])*)((\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))[\\\/]*$/, i2 = {};
    function a2(e2) {
      return r2.exec(e2).slice(1);
    }
    i2.parse = function(e2) {
      if (typeof e2 != `string`) throw TypeError(`Parameter 'pathString' must be a string, not ` + typeof e2);
      var t3 = a2(e2);
      if (!t3 || t3.length !== 5) throw TypeError(`Invalid path '` + e2 + `'`);
      return {
        root: t3[1],
        dir: t3[0] === t3[1] ? t3[0] : t3[0].slice(0, -1),
        base: t3[2],
        ext: t3[4],
        name: t3[3]
      };
    };
    var o2 = /^((\/?)(?:[^\/]*\/)*)((\.{1,2}|[^\/]+?|)(\.[^.\/]*|))[\/]*$/, s2 = {};
    function c2(e2) {
      return o2.exec(e2).slice(1);
    }
    s2.parse = function(e2) {
      if (typeof e2 != `string`) throw TypeError(`Parameter 'pathString' must be a string, not ` + typeof e2);
      var t3 = c2(e2);
      if (!t3 || t3.length !== 5) throw TypeError(`Invalid path '` + e2 + `'`);
      return {
        root: t3[1],
        dir: t3[0].slice(0, -1),
        base: t3[2],
        ext: t3[4],
        name: t3[3]
      };
    }, n2 ? t2.exports = i2.parse : t2.exports = s2.parse, t2.exports.posix = s2.parse, t2.exports.win32 = i2.parse;
  }), ge = e((exports, t2) => {
    var n2 = m(), r2 = n2.parse || he(), i2 = function(e2, t3) {
      var i3 = `/`;
      /^([A-Za-z]:)/.test(e2) ? i3 = `` : /^\\\\/.test(e2) && (i3 = `\\\\`);
      for (var a2 = [
        e2
      ], o2 = r2(e2); o2.dir !== a2[a2.length - 1]; ) a2.push(o2.dir), o2 = r2(o2.dir);
      return a2.reduce(function(e3, r3) {
        return e3.concat(t3.map(function(e4) {
          return n2.resolve(i3, r3, e4);
        }));
      }, []);
    };
    t2.exports = function(e2, t3, n3) {
      var r3 = t3 && t3.moduleDirectory ? [].concat(t3.moduleDirectory) : [
        `node_modules`
      ];
      if (t3 && typeof t3.paths == `function`) return t3.paths(n3, e2, function() {
        return i2(e2, r3);
      }, t3);
      var a2 = i2(e2, r3);
      return t3 && t3.paths ? a2.concat(t3.paths) : a2;
    };
  }), _e = e((exports, t2) => {
    t2.exports = function(e2, t3) {
      return t3 || {};
    };
  }), ve = {};
  n(ve, {
    _debug_agent: () => Oe,
    _debugger: () => ke,
    _http_agent: () => Le,
    _http_client: () => Re,
    _http_common: () => ze,
    _http_incoming: () => Be,
    _http_outgoing: () => Ve,
    _http_server: () => He,
    _linklist: () => qe,
    _stream_duplex: () => at,
    _stream_passthrough: () => ct,
    _stream_readable: () => lt,
    _stream_transform: () => ot,
    _stream_wrap: () => st,
    _stream_writable: () => ut,
    _tls_common: () => ht,
    _tls_legacy: () => gt,
    _tls_wrap: () => _t,
    assert: () => ye,
    async_hooks: () => be,
    buffer: () => Se,
    buffer_ieee754: () => xe,
    child_process: () => Ce,
    cluster: () => we,
    console: () => Te,
    constants: () => Ee,
    crypto: () => De,
    default: () => Ot,
    dgram: () => Ae,
    diagnostics_channel: () => je,
    dns: () => Me,
    domain: () => Ne,
    events: () => Pe,
    freelist: () => Fe,
    fs: () => Ie,
    http: () => Ue,
    http2: () => We,
    https: () => Ge,
    inspector: () => Ke,
    module: () => Je,
    net: () => Ye,
    os: () => Xe,
    path: () => Ze,
    perf_hooks: () => Qe,
    process: () => $e,
    punycode: () => et,
    querystring: () => tt,
    readline: () => nt,
    repl: () => rt,
    smalloc: () => it,
    stream: () => dt,
    string_decoder: () => ft,
    sys: () => pt,
    timers: () => mt,
    tls: () => vt,
    trace_events: () => yt,
    tty: () => bt,
    url: () => xt,
    util: () => St,
    v8: () => Ct,
    vm: () => wt,
    wasi: () => Tt,
    worker_threads: () => Et,
    zlib: () => Dt
  });
  var ye, be, xe, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut, dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt = t(() => {
    ye = true, be = `>= 8`, xe = `>= 0.5 && < 0.9.7`, Se = true, Ce = true, we = `>= 0.5`, Te = true, Ee = true, De = true, Oe = `>= 1 && < 8`, ke = `< 8`, Ae = true, je = [
      `>= 14.17 && < 15`,
      `>= 15.1`
    ], Me = true, Ne = `>= 0.7.12`, Pe = true, Fe = `< 6`, Ie = true, Le = `>= 0.11.1`, Re = `>= 0.11.1`, ze = `>= 0.11.1`, Be = `>= 0.11.1`, Ve = `>= 0.11.1`, He = `>= 0.11.1`, Ue = true, We = `>= 8.8`, Ge = true, Ke = `>= 8`, qe = `< 8`, Je = true, Ye = true, Xe = true, Ze = true, Qe = `>= 8.5`, $e = `>= 1`, et = `>= 0.5`, tt = true, nt = true, rt = true, it = `>= 0.11.5 && < 3`, at = `>= 0.9.4`, ot = `>= 0.9.4`, st = `>= 1.4.1`, ct = `>= 0.9.4`, lt = `>= 0.9.4`, ut = `>= 0.9.4`, dt = true, ft = true, pt = [
      `>= 0.4 && < 0.7`,
      `>= 0.8`
    ], mt = true, ht = `>= 0.11.13`, gt = `>= 0.11.3 && < 10`, _t = `>= 0.11.3`, vt = true, yt = `>= 10`, bt = true, xt = true, St = true, Ct = `>= 1`, wt = true, Tt = [
      `>= 13.4 && < 13.5`,
      `>= 18.17 && < 19`,
      `>= 20`
    ], Et = `>= 11.7`, Dt = `>= 0.5`, Ot = {
      assert: ye,
      "node:assert": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "assert/strict": `>= 15`,
      "node:assert/strict": `>= 16`,
      async_hooks: be,
      "node:async_hooks": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      buffer_ieee754: xe,
      buffer: Se,
      "node:buffer": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      child_process: Ce,
      "node:child_process": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      cluster: we,
      "node:cluster": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      console: Te,
      "node:console": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      constants: Ee,
      "node:constants": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      crypto: De,
      "node:crypto": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _debug_agent: Oe,
      _debugger: ke,
      dgram: Ae,
      "node:dgram": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      diagnostics_channel: je,
      "node:diagnostics_channel": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      dns: Me,
      "node:dns": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "dns/promises": `>= 15`,
      "node:dns/promises": `>= 16`,
      domain: Ne,
      "node:domain": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      events: Pe,
      "node:events": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      freelist: Fe,
      fs: Ie,
      "node:fs": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "fs/promises": [
        `>= 10 && < 10.1`,
        `>= 14`
      ],
      "node:fs/promises": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _http_agent: Le,
      "node:_http_agent": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _http_client: Re,
      "node:_http_client": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _http_common: ze,
      "node:_http_common": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _http_incoming: Be,
      "node:_http_incoming": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _http_outgoing: Ve,
      "node:_http_outgoing": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _http_server: He,
      "node:_http_server": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      http: Ue,
      "node:http": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      http2: We,
      "node:http2": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      https: Ge,
      "node:https": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      inspector: Ke,
      "node:inspector": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "inspector/promises": [
        `>= 19`
      ],
      "node:inspector/promises": [
        `>= 19`
      ],
      _linklist: qe,
      module: Je,
      "node:module": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      net: Ye,
      "node:net": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "node-inspect/lib/_inspect": `>= 7.6 && < 12`,
      "node-inspect/lib/internal/inspect_client": `>= 7.6 && < 12`,
      "node-inspect/lib/internal/inspect_repl": `>= 7.6 && < 12`,
      os: Xe,
      "node:os": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      path: Ze,
      "node:path": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "path/posix": `>= 15.3`,
      "node:path/posix": `>= 16`,
      "path/win32": `>= 15.3`,
      "node:path/win32": `>= 16`,
      perf_hooks: Qe,
      "node:perf_hooks": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      process: $e,
      "node:process": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      punycode: et,
      "node:punycode": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      querystring: tt,
      "node:querystring": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      readline: nt,
      "node:readline": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "readline/promises": `>= 17`,
      "node:readline/promises": `>= 17`,
      repl: rt,
      "node:repl": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "node:sea": [
        `>= 20.12 && < 21`,
        `>= 21.7`
      ],
      smalloc: it,
      "node:sqlite": [
        `>= 22.13 && < 23`,
        `>= 23.4`
      ],
      _stream_duplex: at,
      "node:_stream_duplex": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _stream_transform: ot,
      "node:_stream_transform": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _stream_wrap: st,
      "node:_stream_wrap": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _stream_passthrough: ct,
      "node:_stream_passthrough": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _stream_readable: lt,
      "node:_stream_readable": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _stream_writable: ut,
      "node:_stream_writable": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      stream: dt,
      "node:stream": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "stream/consumers": `>= 16.7`,
      "node:stream/consumers": `>= 16.7`,
      "stream/promises": `>= 15`,
      "node:stream/promises": `>= 16`,
      "stream/web": `>= 16.5`,
      "node:stream/web": `>= 16.5`,
      string_decoder: ft,
      "node:string_decoder": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      sys: pt,
      "node:sys": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "test/reporters": `>= 19.9 && < 20.2`,
      "node:test/reporters": [
        `>= 18.17 && < 19`,
        `>= 19.9`,
        `>= 20`
      ],
      "test/mock_loader": `>= 22.3 && < 22.7`,
      "node:test/mock_loader": `>= 22.3 && < 22.7`,
      "node:test": [
        `>= 16.17 && < 17`,
        `>= 18`
      ],
      timers: mt,
      "node:timers": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "timers/promises": `>= 15`,
      "node:timers/promises": `>= 16`,
      _tls_common: ht,
      "node:_tls_common": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _tls_legacy: gt,
      _tls_wrap: _t,
      "node:_tls_wrap": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      tls: vt,
      "node:tls": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      trace_events: yt,
      "node:trace_events": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      tty: bt,
      "node:tty": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      url: xt,
      "node:url": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      util: St,
      "node:util": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "util/types": `>= 15.3`,
      "node:util/types": `>= 16`,
      "v8/tools/arguments": `>= 10 && < 12`,
      "v8/tools/codemap": [
        `>= 4.4 && < 5`,
        `>= 5.2 && < 12`
      ],
      "v8/tools/consarray": [
        `>= 4.4 && < 5`,
        `>= 5.2 && < 12`
      ],
      "v8/tools/csvparser": [
        `>= 4.4 && < 5`,
        `>= 5.2 && < 12`
      ],
      "v8/tools/logreader": [
        `>= 4.4 && < 5`,
        `>= 5.2 && < 12`
      ],
      "v8/tools/profile_view": [
        `>= 4.4 && < 5`,
        `>= 5.2 && < 12`
      ],
      "v8/tools/splaytree": [
        `>= 4.4 && < 5`,
        `>= 5.2 && < 12`
      ],
      v8: Ct,
      "node:v8": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      vm: wt,
      "node:vm": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      wasi: Tt,
      "node:wasi": [
        `>= 18.17 && < 19`,
        `>= 20`
      ],
      worker_threads: Et,
      "node:worker_threads": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      zlib: Dt,
      "node:zlib": [
        `>= 14.18 && < 15`,
        `>= 16`
      ]
    };
  }), At = e((exports, t2) => {
    f();
    var n2 = u();
    function r2(e2, t3) {
      for (var n3 = e2.split(`.`), r3 = t3.split(` `), i2 = r3.length > 1 ? r3[0] : `=`, a3 = (r3.length > 1 ? r3[1] : r3[0]).split(`.`), o3 = 0; o3 < 3; ++o3) {
        var s3 = parseInt(n3[o3] || 0, 10), c2 = parseInt(a3[o3] || 0, 10);
        if (s3 !== c2) return i2 === `<` ? s3 < c2 : i2 === `>=` ? s3 >= c2 : false;
      }
      return i2 === `>=`;
    }
    function a2(e2, t3) {
      var n3 = t3.split(/ ?&& ?/);
      if (n3.length === 0) return false;
      for (var i2 = 0; i2 < n3.length; ++i2) if (!r2(e2, n3[i2])) return false;
      return true;
    }
    function o2(e2, t3) {
      if (typeof t3 == `boolean`) return t3;
      var n3 = e2 === void 0 ? p.versions && p.versions.node : e2;
      if (typeof n3 != `string`) return true;
      if (t3 && typeof t3 == `object`) {
        for (var r3 = 0; r3 < t3.length; ++r3) if (a2(n3, t3[r3])) return true;
        return false;
      }
      return a2(n3, t3);
    }
    var s2 = (kt(), i(ve));
    t2.exports = function(e2, t3) {
      return n2(s2, e2) && o2(t3, s2[e2]);
    };
  }), jt = e((exports, t2) => {
    f();
    var n2 = d(), r2 = pe(), i2 = m(), a2 = me(), o2 = ge(), s2 = _e(), c2 = At(), l2 = p.platform !== `win32` && n2.realpath && typeof n2.realpath.native == `function` ? n2.realpath.native : n2.realpath, u2 = r2(), h2 = function() {
      return [
        i2.join(u2, `.node_modules`),
        i2.join(u2, `.node_libraries`)
      ];
    }, g2 = function(e2, t3) {
      n2.stat(e2, function(e3, n3) {
        return e3 ? e3.code === `ENOENT` || e3.code === `ENOTDIR` ? t3(null, false) : t3(e3) : t3(null, n3.isFile() || n3.isFIFO());
      });
    }, _2 = function(e2, t3) {
      n2.stat(e2, function(e3, n3) {
        return e3 ? e3.code === `ENOENT` || e3.code === `ENOTDIR` ? t3(null, false) : t3(e3) : t3(null, n3.isDirectory());
      });
    }, v2 = function(e2, t3) {
      l2(e2, function(n3, r3) {
        n3 && n3.code !== `ENOENT` ? t3(n3) : t3(null, n3 ? e2 : r3);
      });
    }, y2 = function(e2, t3, n3, r3) {
      n3 && n3.preserveSymlinks === false ? e2(t3, r3) : r3(null, t3);
    }, b2 = function(e2, t3, n3) {
      e2(t3, function(e3, t4) {
        if (e3) n3(e3);
        else try {
          var r3 = JSON.parse(t4);
          n3(null, r3);
        } catch {
          n3(null);
        }
      });
    }, x2 = function(e2, t3, n3) {
      for (var r3 = o2(t3, n3, e2), a3 = 0; a3 < r3.length; a3++) r3[a3] = i2.join(r3[a3], e2);
      return r3;
    };
    t2.exports = function(e2, t3, r3) {
      var o3 = r3, l3 = t3;
      if (typeof t3 == `function` && (o3 = l3, l3 = {}), typeof e2 != `string`) {
        var u3 = TypeError(`Path must be a string.`);
        return p.nextTick(function() {
          o3(u3);
        });
      }
      l3 = s2(e2, l3);
      var d2 = l3.isFile || g2, f2 = l3.isDirectory || _2, m2 = l3.readFile || n2.readFile, S2 = l3.realpath || v2, ee2 = l3.readPackage || b2;
      if (l3.readFile && l3.readPackage) {
        var C2 = TypeError("`readFile` and `readPackage` are mutually exclusive.");
        return p.nextTick(function() {
          o3(C2);
        });
      }
      var w2 = l3.packageIterator, te2 = l3.extensions || [
        `.js`
      ], T2 = l3.includeCoreModules !== false, E2 = l3.basedir || i2.dirname(a2()), D2 = l3.filename || E2;
      l3.paths = l3.paths || h2();
      var O2 = i2.resolve(E2);
      y2(S2, O2, l3, function(e3, t4) {
        e3 ? o3(e3) : A2(t4);
      });
      var k2;
      function A2(t4) {
        if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(e2)) k2 = i2.resolve(t4, e2), (e2 === `.` || e2 === `..` || e2.slice(-1) === `/`) && (k2 += `/`), /\/$/.test(e2) && k2 === t4 ? re2(k2, l3.package, j2) : M2(k2, l3.package, j2);
        else if (T2 && c2(e2)) return o3(null, e2);
        else ae2(e2, t4, function(t5, n3, r4) {
          if (t5) o3(t5);
          else if (n3) return y2(S2, n3, l3, function(e3, t6) {
            e3 ? o3(e3) : o3(null, t6, r4);
          });
          else {
            var i3 = Error(`Cannot find module '` + e2 + `' from '` + D2 + `'`);
            i3.code = `MODULE_NOT_FOUND`, o3(i3);
          }
        });
      }
      function j2(t4, n3, r4) {
        t4 ? o3(t4) : n3 ? o3(null, n3, r4) : re2(k2, function(t5, n4, r5) {
          if (t5) o3(t5);
          else if (n4) y2(S2, n4, l3, function(e3, t6) {
            e3 ? o3(e3) : o3(null, t6, r5);
          });
          else {
            var i3 = Error(`Cannot find module '` + e2 + `' from '` + D2 + `'`);
            i3.code = `MODULE_NOT_FOUND`, o3(i3);
          }
        });
      }
      function M2(e3, t4, n3) {
        var r4 = t4, a3 = n3;
        typeof r4 == `function` && (a3 = r4, r4 = void 0);
        var o4 = [
          ``
        ].concat(te2);
        s3(o4, e3, r4);
        function s3(e4, t5, n4) {
          if (e4.length === 0) return a3(null, void 0, n4);
          var r5 = t5 + e4[0], o5 = n4;
          o5 ? c3(null, o5) : ne2(i2.dirname(r5), c3);
          function c3(n5, c4, f3) {
            if (o5 = c4, n5) return a3(n5);
            if (f3 && o5 && l3.pathFilter) {
              var p2 = i2.relative(f3, r5), m3 = p2.slice(0, p2.length - e4[0].length), h3 = l3.pathFilter(o5, t5, m3);
              if (h3) return s3([
                ``
              ].concat(te2.slice()), i2.resolve(f3, h3), o5);
            }
            d2(r5, u4);
          }
          function u4(n5, i3) {
            if (n5) return a3(n5);
            if (i3) return a3(null, r5, o5);
            s3(e4.slice(1), t5, o5);
          }
        }
      }
      function ne2(e3, t4) {
        if (e3 === `` || e3 === `/` || p.platform === `win32` && /^\w:[/\\]*$/.test(e3) || /[/\\]node_modules[/\\]*$/.test(e3)) return t4(null);
        y2(S2, e3, l3, function(n3, r4) {
          if (n3) return ne2(i2.dirname(e3), t4);
          var a3 = i2.join(r4, `package.json`);
          d2(a3, function(n4, r5) {
            if (!r5) return ne2(i2.dirname(e3), t4);
            ee2(m2, a3, function(n5, r6) {
              n5 && t4(n5);
              var i3 = r6;
              i3 && l3.packageFilter && (i3 = l3.packageFilter(i3, a3)), t4(null, i3, e3);
            });
          });
        });
      }
      function re2(e3, t4, n3) {
        var r4 = n3, a3 = t4;
        typeof a3 == `function` && (r4 = a3, a3 = l3.package), y2(S2, e3, l3, function(t5, n4) {
          if (t5) return r4(t5);
          var o4 = i2.join(n4, `package.json`);
          d2(o4, function(t6, n5) {
            if (t6) return r4(t6);
            if (!n5) return M2(i2.join(e3, `index`), a3, r4);
            ee2(m2, o4, function(t7, n6) {
              if (t7) return r4(t7);
              var a4 = n6;
              if (a4 && l3.packageFilter && (a4 = l3.packageFilter(a4, o4)), a4 && a4.main) {
                if (typeof a4.main != `string`) {
                  var s3 = TypeError(`package \u201C` + a4.name + "\u201D `main` must be a string");
                  return s3.code = `INVALID_PACKAGE_MAIN`, r4(s3);
                }
                (a4.main === `.` || a4.main === `./`) && (a4.main = `index`), M2(i2.resolve(e3, a4.main), a4, function(t8, n7, a5) {
                  if (t8) return r4(t8);
                  if (n7) return r4(null, n7, a5);
                  if (!a5) return M2(i2.join(e3, `index`), a5, r4);
                  var o5 = i2.resolve(e3, a5.main);
                  re2(o5, a5, function(t9, n8, a6) {
                    if (t9) return r4(t9);
                    if (n8) return r4(null, n8, a6);
                    M2(i2.join(e3, `index`), a6, r4);
                  });
                });
                return;
              }
              M2(i2.join(e3, `/index`), a4, r4);
            });
          });
        });
      }
      function ie2(e3, t4) {
        if (t4.length === 0) return e3(null, void 0);
        var n3 = t4[0];
        f2(i2.dirname(n3), r4);
        function r4(r5, i3) {
          if (r5) return e3(r5);
          if (!i3) return ie2(e3, t4.slice(1));
          M2(n3, l3.package, a3);
        }
        function a3(t5, r5, i3) {
          if (t5) return e3(t5);
          if (r5) return e3(null, r5, i3);
          re2(n3, l3.package, o4);
        }
        function o4(n4, r5, i3) {
          if (n4) return e3(n4);
          if (r5) return e3(null, r5, i3);
          ie2(e3, t4.slice(1));
        }
      }
      function ae2(e3, t4, n3) {
        var r4 = function() {
          return x2(e3, t4, l3);
        };
        ie2(n3, w2 ? w2(e3, t4, r4, l3) : r4());
      }
    };
  }), Mt = {};
  n(Mt, {
    _debug_agent: () => Ht,
    _debugger: () => Ut,
    _http_agent: () => Zt,
    _http_client: () => Qt,
    _http_common: () => $t,
    _http_incoming: () => en,
    _http_outgoing: () => tn,
    _http_server: () => nn,
    _linklist: () => cn,
    _stream_duplex: () => bn,
    _stream_passthrough: () => Cn,
    _stream_readable: () => wn,
    _stream_transform: () => xn,
    _stream_wrap: () => Sn,
    _stream_writable: () => Tn,
    _tls_common: () => An,
    _tls_legacy: () => jn,
    _tls_wrap: () => Mn,
    assert: () => Nt,
    async_hooks: () => Pt,
    buffer: () => It,
    buffer_ieee754: () => Ft,
    child_process: () => Lt,
    cluster: () => Rt,
    console: () => zt,
    constants: () => Bt,
    crypto: () => Vt,
    default: () => Un,
    dgram: () => Wt,
    diagnostics_channel: () => Gt,
    dns: () => Kt,
    domain: () => qt,
    events: () => Jt,
    freelist: () => Yt,
    fs: () => Xt,
    http: () => rn,
    http2: () => an,
    https: () => on,
    inspector: () => sn,
    module: () => ln,
    net: () => un,
    os: () => dn,
    path: () => fn,
    perf_hooks: () => pn,
    process: () => mn,
    punycode: () => hn,
    querystring: () => gn,
    readline: () => _n,
    repl: () => vn,
    smalloc: () => yn,
    stream: () => En,
    string_decoder: () => Dn,
    sys: () => On,
    timers: () => kn,
    tls: () => Nn,
    trace_events: () => Pn,
    tty: () => Fn,
    url: () => In,
    util: () => Ln,
    v8: () => Rn,
    vm: () => zn,
    wasi: () => Bn,
    worker_threads: () => Vn,
    zlib: () => Hn
  });
  var Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn = t(() => {
    Nt = true, Pt = `>= 8`, Ft = `>= 0.5 && < 0.9.7`, It = true, Lt = true, Rt = `>= 0.5`, zt = true, Bt = true, Vt = true, Ht = `>= 1 && < 8`, Ut = `< 8`, Wt = true, Gt = [
      `>= 14.17 && < 15`,
      `>= 15.1`
    ], Kt = true, qt = `>= 0.7.12`, Jt = true, Yt = `< 6`, Xt = true, Zt = `>= 0.11.1`, Qt = `>= 0.11.1`, $t = `>= 0.11.1`, en = `>= 0.11.1`, tn = `>= 0.11.1`, nn = `>= 0.11.1`, rn = true, an = `>= 8.8`, on = true, sn = `>= 8`, cn = `< 8`, ln = true, un = true, dn = true, fn = true, pn = `>= 8.5`, mn = `>= 1`, hn = `>= 0.5`, gn = true, _n = true, vn = true, yn = `>= 0.11.5 && < 3`, bn = `>= 0.9.4`, xn = `>= 0.9.4`, Sn = `>= 1.4.1`, Cn = `>= 0.9.4`, wn = `>= 0.9.4`, Tn = `>= 0.9.4`, En = true, Dn = true, On = [
      `>= 0.4 && < 0.7`,
      `>= 0.8`
    ], kn = true, An = `>= 0.11.13`, jn = `>= 0.11.3 && < 10`, Mn = `>= 0.11.3`, Nn = true, Pn = `>= 10`, Fn = true, In = true, Ln = true, Rn = `>= 1`, zn = true, Bn = [
      `>= 13.4 && < 13.5`,
      `>= 18.17 && < 19`,
      `>= 20`
    ], Vn = `>= 11.7`, Hn = `>= 0.5`, Un = {
      assert: Nt,
      "node:assert": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "assert/strict": `>= 15`,
      "node:assert/strict": `>= 16`,
      async_hooks: Pt,
      "node:async_hooks": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      buffer_ieee754: Ft,
      buffer: It,
      "node:buffer": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      child_process: Lt,
      "node:child_process": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      cluster: Rt,
      "node:cluster": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      console: zt,
      "node:console": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      constants: Bt,
      "node:constants": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      crypto: Vt,
      "node:crypto": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _debug_agent: Ht,
      _debugger: Ut,
      dgram: Wt,
      "node:dgram": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      diagnostics_channel: Gt,
      "node:diagnostics_channel": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      dns: Kt,
      "node:dns": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "dns/promises": `>= 15`,
      "node:dns/promises": `>= 16`,
      domain: qt,
      "node:domain": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      events: Jt,
      "node:events": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      freelist: Yt,
      fs: Xt,
      "node:fs": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "fs/promises": [
        `>= 10 && < 10.1`,
        `>= 14`
      ],
      "node:fs/promises": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _http_agent: Zt,
      "node:_http_agent": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _http_client: Qt,
      "node:_http_client": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _http_common: $t,
      "node:_http_common": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _http_incoming: en,
      "node:_http_incoming": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _http_outgoing: tn,
      "node:_http_outgoing": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _http_server: nn,
      "node:_http_server": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      http: rn,
      "node:http": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      http2: an,
      "node:http2": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      https: on,
      "node:https": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      inspector: sn,
      "node:inspector": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "inspector/promises": [
        `>= 19`
      ],
      "node:inspector/promises": [
        `>= 19`
      ],
      _linklist: cn,
      module: ln,
      "node:module": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      net: un,
      "node:net": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "node-inspect/lib/_inspect": `>= 7.6 && < 12`,
      "node-inspect/lib/internal/inspect_client": `>= 7.6 && < 12`,
      "node-inspect/lib/internal/inspect_repl": `>= 7.6 && < 12`,
      os: dn,
      "node:os": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      path: fn,
      "node:path": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "path/posix": `>= 15.3`,
      "node:path/posix": `>= 16`,
      "path/win32": `>= 15.3`,
      "node:path/win32": `>= 16`,
      perf_hooks: pn,
      "node:perf_hooks": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      process: mn,
      "node:process": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      punycode: hn,
      "node:punycode": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      querystring: gn,
      "node:querystring": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      readline: _n,
      "node:readline": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "readline/promises": `>= 17`,
      "node:readline/promises": `>= 17`,
      repl: vn,
      "node:repl": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "node:sea": [
        `>= 20.12 && < 21`,
        `>= 21.7`
      ],
      smalloc: yn,
      "node:sqlite": `>= 23.4`,
      _stream_duplex: bn,
      "node:_stream_duplex": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _stream_transform: xn,
      "node:_stream_transform": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _stream_wrap: Sn,
      "node:_stream_wrap": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _stream_passthrough: Cn,
      "node:_stream_passthrough": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _stream_readable: wn,
      "node:_stream_readable": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _stream_writable: Tn,
      "node:_stream_writable": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      stream: En,
      "node:stream": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "stream/consumers": `>= 16.7`,
      "node:stream/consumers": `>= 16.7`,
      "stream/promises": `>= 15`,
      "node:stream/promises": `>= 16`,
      "stream/web": `>= 16.5`,
      "node:stream/web": `>= 16.5`,
      string_decoder: Dn,
      "node:string_decoder": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      sys: On,
      "node:sys": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "test/reporters": `>= 19.9 && < 20.2`,
      "node:test/reporters": [
        `>= 18.17 && < 19`,
        `>= 19.9`,
        `>= 20`
      ],
      "test/mock_loader": `>= 22.3 && < 22.7`,
      "node:test/mock_loader": `>= 22.3 && < 22.7`,
      "node:test": [
        `>= 16.17 && < 17`,
        `>= 18`
      ],
      timers: kn,
      "node:timers": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "timers/promises": `>= 15`,
      "node:timers/promises": `>= 16`,
      _tls_common: An,
      "node:_tls_common": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      _tls_legacy: jn,
      _tls_wrap: Mn,
      "node:_tls_wrap": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      tls: Nn,
      "node:tls": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      trace_events: Pn,
      "node:trace_events": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      tty: Fn,
      "node:tty": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      url: In,
      "node:url": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      util: Ln,
      "node:util": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      "util/types": `>= 15.3`,
      "node:util/types": `>= 16`,
      "v8/tools/arguments": `>= 10 && < 12`,
      "v8/tools/codemap": [
        `>= 4.4 && < 5`,
        `>= 5.2 && < 12`
      ],
      "v8/tools/consarray": [
        `>= 4.4 && < 5`,
        `>= 5.2 && < 12`
      ],
      "v8/tools/csvparser": [
        `>= 4.4 && < 5`,
        `>= 5.2 && < 12`
      ],
      "v8/tools/logreader": [
        `>= 4.4 && < 5`,
        `>= 5.2 && < 12`
      ],
      "v8/tools/profile_view": [
        `>= 4.4 && < 5`,
        `>= 5.2 && < 12`
      ],
      "v8/tools/splaytree": [
        `>= 4.4 && < 5`,
        `>= 5.2 && < 12`
      ],
      v8: Rn,
      "node:v8": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      vm: zn,
      "node:vm": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      wasi: Bn,
      "node:wasi": [
        `>= 18.17 && < 19`,
        `>= 20`
      ],
      worker_threads: Vn,
      "node:worker_threads": [
        `>= 14.18 && < 15`,
        `>= 16`
      ],
      zlib: Hn,
      "node:zlib": [
        `>= 14.18 && < 15`,
        `>= 16`
      ]
    };
  }), Gn = e((exports, t2) => {
    var n2 = At(), r2 = (Wn(), i(Mt)), a2 = {};
    for (var o2 in r2) Object.prototype.hasOwnProperty.call(r2, o2) && (a2[o2] = n2(o2));
    t2.exports = a2;
  }), Kn = e((exports, t2) => {
    var n2 = At();
    t2.exports = function(e2) {
      return n2(e2);
    };
  }), qn = e((exports, t2) => {
    f();
    var n2 = At(), r2 = d(), i2 = m(), a2 = pe(), o2 = me(), s2 = ge(), c2 = _e(), l2 = p.platform !== `win32` && r2.realpathSync && typeof r2.realpathSync.native == `function` ? r2.realpathSync.native : r2.realpathSync, u2 = a2(), h2 = function() {
      return [
        i2.join(u2, `.node_modules`),
        i2.join(u2, `.node_libraries`)
      ];
    }, g2 = function(e2) {
      try {
        var t3 = r2.statSync(e2, {
          throwIfNoEntry: false
        });
      } catch (e3) {
        if (e3 && (e3.code === `ENOENT` || e3.code === `ENOTDIR`)) return false;
        throw e3;
      }
      return !!t3 && (t3.isFile() || t3.isFIFO());
    }, _2 = function(e2) {
      try {
        var t3 = r2.statSync(e2, {
          throwIfNoEntry: false
        });
      } catch (e3) {
        if (e3 && (e3.code === `ENOENT` || e3.code === `ENOTDIR`)) return false;
        throw e3;
      }
      return !!t3 && t3.isDirectory();
    }, v2 = function(e2) {
      try {
        return l2(e2);
      } catch (e3) {
        if (e3.code !== `ENOENT`) throw e3;
      }
      return e2;
    }, y2 = function(e2, t3, n3) {
      return n3 && n3.preserveSymlinks === false ? e2(t3) : t3;
    }, b2 = function(e2, t3) {
      var n3 = e2(t3);
      try {
        var r3 = JSON.parse(n3);
        return r3;
      } catch {
      }
    }, x2 = function(e2, t3, n3) {
      for (var r3 = s2(t3, n3, e2), a3 = 0; a3 < r3.length; a3++) r3[a3] = i2.join(r3[a3], e2);
      return r3;
    };
    t2.exports = function(e2, t3) {
      if (typeof e2 != `string`) throw TypeError(`Path must be a string.`);
      var a3 = c2(e2, t3), s3 = a3.isFile || g2, l3 = a3.readFileSync || r2.readFileSync, u3 = a3.isDirectory || _2, d2 = a3.realpathSync || v2, f2 = a3.readPackageSync || b2;
      if (a3.readFileSync && a3.readPackageSync) throw TypeError("`readFileSync` and `readPackageSync` are mutually exclusive.");
      var m2 = a3.packageIterator, S2 = a3.extensions || [
        `.js`
      ], ee2 = a3.includeCoreModules !== false, C2 = a3.basedir || i2.dirname(o2()), w2 = a3.filename || C2;
      a3.paths = a3.paths || h2();
      var te2 = y2(d2, i2.resolve(C2), a3);
      if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(e2)) {
        var T2 = i2.resolve(te2, e2);
        (e2 === `.` || e2 === `..` || e2.slice(-1) === `/`) && (T2 += `/`);
        var E2 = k2(T2) || j2(T2);
        if (E2) return y2(d2, E2, a3);
      } else if (ee2 && n2(e2)) return e2;
      else {
        var D2 = M2(e2, te2);
        if (D2) return y2(d2, D2, a3);
      }
      var O2 = Error(`Cannot find module '` + e2 + `' from '` + w2 + `'`);
      throw O2.code = `MODULE_NOT_FOUND`, O2;
      function k2(e3) {
        var t4 = A2(i2.dirname(e3));
        if (t4 && t4.dir && t4.pkg && a3.pathFilter) {
          var n3 = i2.relative(t4.dir, e3), r3 = a3.pathFilter(t4.pkg, e3, n3);
          r3 && (e3 = i2.resolve(t4.dir, r3));
        }
        if (s3(e3)) return e3;
        for (var o3 = 0; o3 < S2.length; o3++) {
          var c3 = e3 + S2[o3];
          if (s3(c3)) return c3;
        }
      }
      function A2(e3) {
        if (!(e3 === `` || e3 === `/`) && !(p.platform === `win32` && /^\w:[/\\]*$/.test(e3)) && !/[/\\]node_modules[/\\]*$/.test(e3)) {
          var t4 = i2.join(y2(d2, e3, a3), `package.json`);
          if (!s3(t4)) return A2(i2.dirname(e3));
          var n3 = f2(l3, t4);
          return n3 && a3.packageFilter && (n3 = a3.packageFilter(n3, e3)), {
            pkg: n3,
            dir: e3
          };
        }
      }
      function j2(e3) {
        var t4 = i2.join(y2(d2, e3, a3), `/package.json`);
        if (s3(t4)) {
          try {
            var n3 = f2(l3, t4);
          } catch {
          }
          if (n3 && a3.packageFilter && (n3 = a3.packageFilter(n3, e3)), n3 && n3.main) {
            if (typeof n3.main != `string`) {
              var r3 = TypeError(`package \u201C` + n3.name + "\u201D `main` must be a string");
              throw r3.code = `INVALID_PACKAGE_MAIN`, r3;
            }
            (n3.main === `.` || n3.main === `./`) && (n3.main = `index`);
            try {
              var o3 = k2(i2.resolve(e3, n3.main));
              if (o3) return o3;
              var c3 = j2(i2.resolve(e3, n3.main));
              if (c3) return c3;
            } catch {
            }
          }
        }
        return k2(i2.join(e3, `/index`));
      }
      function M2(e3, t4) {
        for (var n3 = function() {
          return x2(e3, t4, a3);
        }, r3 = m2 ? m2(e3, t4, n3, a3) : n3(), o3 = 0; o3 < r3.length; o3++) {
          var s4 = r3[o3];
          if (u3(i2.dirname(s4))) {
            var c3 = k2(s4);
            if (c3) return c3;
            var l4 = j2(s4);
            if (l4) return l4;
          }
        }
      }
    };
  }), Jn = e((exports, t2) => {
    var n2 = jt();
    n2.core = Gn(), n2.isCore = Kn(), n2.sync = qn(), t2.exports = n2;
  }), Yn = e((exports, t2) => {
    let n2 = Jn(), r2 = [
      `web_modules`,
      `node_modules`
    ];
    function i2(e2, t3) {
      return new Promise((r3, i3) => {
        n2(e2, t3, (e3, t4) => e3 ? i3(e3) : r3(t4));
      });
    }
    t2.exports = function(e2, t3, n3, a2) {
      let o2 = n3.path, s2 = {
        basedir: t3,
        moduleDirectory: r2.concat(n3.addModulesDirectories),
        paths: o2,
        extensions: [
          `.css`
        ],
        packageFilter: function(e3) {
          return e3.style ? e3.main = e3.style : (!e3.main || !/\.css$/.test(e3.main)) && (e3.main = `index.css`), e3;
        },
        preserveSymlinks: false
      };
      return i2(`./${e2}`, s2).catch(() => i2(e2, s2)).catch(() => {
        throw o2.indexOf(t3) === -1 && o2.unshift(t3), a2.error(`Failed to find '${e2}'
  in [
    ${o2.join(`,
    `)}
  ]`);
      });
    };
  }), Xn = e((exports, t2) => {
    let n2 = m(), r2 = ce(), i2 = ue(), a2 = de(), o2 = Yn(), s2 = M();
    async function c2(e2, t3, n3, r3, a3, o3, s3) {
      let c3 = i2(e2, t3, a3, o3);
      for (let t4 of c3) {
        if (t4.type !== `import` || !d2(t4.uri) || n3.filter && !n3.filter(t4.uri)) continue;
        await l2(e2, t4, n3, r3, s3);
      }
      let u3, f2 = [], p2 = [];
      function m2(e3) {
        if (!u3) u3 = e3;
        else if (e3.node.params.toLowerCase() !== u3.node.params.toLowerCase()) throw e3.node.error(`Incompatible @charset statements:
  ${e3.node.params} specified in ${e3.node.source.input.file}
  ${u3.node.params} specified in ${u3.node.source.input.file}`);
      }
      return c3.forEach((e3) => {
        e3.type === `charset` ? m2(e3) : e3.type === `import` ? e3.children ? e3.children.forEach((t4, n4) => {
          t4.type === `import` ? f2.push(t4) : t4.type === `charset` ? m2(t4) : p2.push(t4), n4 === 0 && (t4.parent = e3);
        }) : f2.push(e3) : e3.type === `nodes` && p2.push(e3);
      }), u3 ? [
        u3,
        ...f2.concat(p2)
      ] : f2.concat(p2);
    }
    async function l2(e2, t3, i3, a3, s3) {
      var _a2, _b;
      if (r2.isValid(t3.uri)) {
        t3.children = await u2(e2, t3, t3.uri, i3, a3, s3);
        return;
      } else if (r2.isValid(t3.from.slice(-1))) throw t3.node.error(`Unable to import '${t3.uri}' from a stylesheet that is embedded in a data url`);
      let c3 = t3.node, l3;
      ((_b = (_a2 = c3.source) == null ? void 0 : _a2.input) == null ? void 0 : _b.file) && (l3 = c3.source.input.file);
      let d3 = l3 ? n2.dirname(c3.source.input.file) : i3.root, f2 = [
        await i3.resolve(t3.uri, d3, i3, c3)
      ].flat(), p2 = await Promise.all(f2.map((e3) => n2.isAbsolute(e3) ? e3 : o2(e3, d3, i3, c3)));
      p2.forEach((t4) => {
        e2.messages.push({
          type: `dependency`,
          plugin: `postcss-import`,
          file: t4,
          parent: l3
        });
      });
      let m2 = await Promise.all(p2.map((n3) => u2(e2, t3, n3, i3, a3, s3)));
      t3.children = m2.flat().filter((e3) => !!e3);
    }
    async function u2(e2, t3, n3, r3, i3, o3) {
      var _a2, _b;
      let l3 = t3.node, { conditions: u3, from: d3 } = t3, f2 = u3.map((e3) => s2(e3.layer, e3.media, e3.supports)).join(`:`);
      if (r3.skipDuplicates) {
        if ((_a2 = i3.importedFiles[n3]) == null ? void 0 : _a2[f2]) return;
        i3.importedFiles[n3] || (i3.importedFiles[n3] = {}), i3.importedFiles[n3][f2] = true;
      }
      if (d3.includes(n3)) return;
      let p2 = await r3.load(n3, r3);
      if (p2.trim() === `` && r3.warnOnEmpty) {
        e2.warn(`${n3} is empty`, {
          node: l3
        });
        return;
      }
      if (r3.skipDuplicates && ((_b = i3.hashFiles[p2]) == null ? void 0 : _b[f2])) return;
      let m2 = await a2(e2, p2, n3, r3, o3), h2 = m2.root;
      if (e2.messages = e2.messages.concat(m2.messages), r3.skipDuplicates) {
        let e3 = h2.some((e4) => e4.type === `atrule` && e4.name === `import`);
        e3 || (i3.hashFiles[p2] || (i3.hashFiles[p2] = {}), i3.hashFiles[p2][f2] = true);
      }
      return c2(e2, h2, r3, i3, u3, [
        ...d3,
        n3
      ], o3);
    }
    function d2(e2) {
      if (/^(?:[a-z]+:)?\/\//i.test(e2)) return false;
      try {
        let t3 = new URL(e2, `https://example.com`);
        if (t3.search) return false;
      } catch {
      }
      return true;
    }
    t2.exports = c2;
  }), Zn = e((exports, t2) => {
    f();
    let n2 = m(), r2 = re(), i2 = ie(), a2 = ae(), o2 = le(), s2 = Xn(), c2 = Yn();
    function l2(e2) {
      return e2 = {
        root: p.cwd(),
        path: [],
        skipDuplicates: true,
        resolve: c2,
        load: o2,
        plugins: [],
        addModulesDirectories: [],
        warnOnEmpty: true,
        ...e2
      }, e2.root = n2.resolve(e2.root), typeof e2.path == `string` && (e2.path = [
        e2.path
      ]), Array.isArray(e2.path) || (e2.path = []), e2.path = e2.path.map((t3) => n2.resolve(e2.root, t3)), {
        postcssPlugin: `postcss-import`,
        async Once(t3, { result: n3, atRule: o3, postcss: c3 }) {
          var _a2, _b;
          let l3 = {
            importedFiles: {},
            hashFiles: {}
          };
          if (((_b = (_a2 = t3.source) == null ? void 0 : _a2.input) == null ? void 0 : _b.file) && (l3.importedFiles[t3.source.input.file] = {}), e2.plugins && !Array.isArray(e2.plugins)) throw Error(`plugins option must be an array`);
          let u2 = await s2(n3, t3, e2, l3, [], [], c3);
          i2(u2), r2(u2, o3), a2(u2, t3);
        }
      };
    }
    l2.postcss = true, t2.exports = l2;
  }), Qn = Object.create, $n = Object.defineProperty, er = Object.getOwnPropertyDescriptor, tr = Object.getOwnPropertyNames, nr = Object.getPrototypeOf, rr = Object.prototype.hasOwnProperty, ir = (e2, t2) => () => (t2 || e2((t2 = {
    exports: {}
  }).exports, t2), t2.exports), ar = (e2, t2, n2, r2) => {
    if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of tr(t2)) !rr.call(e2, i2) && i2 !== n2 && $n(e2, i2, {
      get: () => t2[i2],
      enumerable: !(r2 = er(t2, i2)) || r2.enumerable
    });
    return e2;
  }, or = (e2, t2, n2) => (n2 = e2 == null ? {} : Qn(nr(e2)), ar(t2 || !e2 || !e2.__esModule ? $n(n2, `default`, {
    value: e2,
    enumerable: true
  }) : n2, e2)), sr = ir((e2, t2) => {
    "use strict";
    var n2 = class {
      constructor(e3 = {}) {
        if (!(e3.maxSize && e3.maxSize > 0)) throw TypeError("`maxSize` must be a number greater than 0");
        if (typeof e3.maxAge == `number` && e3.maxAge === 0) throw TypeError("`maxAge` must be a number greater than 0");
        this.maxSize = e3.maxSize, this.maxAge = e3.maxAge || 1 / 0, this.onEviction = e3.onEviction, this.cache = /* @__PURE__ */ new Map(), this.oldCache = /* @__PURE__ */ new Map(), this._size = 0;
      }
      _emitEvictions(e3) {
        if (typeof this.onEviction == `function`) for (let [t3, n3] of e3) this.onEviction(t3, n3.value);
      }
      _deleteIfExpired(e3, t3) {
        return typeof t3.expiry == `number` && t3.expiry <= Date.now() ? (typeof this.onEviction == `function` && this.onEviction(e3, t3.value), this.delete(e3)) : false;
      }
      _getOrDeleteIfExpired(e3, t3) {
        if (this._deleteIfExpired(e3, t3) === false) return t3.value;
      }
      _getItemValue(e3, t3) {
        return t3.expiry ? this._getOrDeleteIfExpired(e3, t3) : t3.value;
      }
      _peek(e3, t3) {
        let n3 = t3.get(e3);
        return this._getItemValue(e3, n3);
      }
      _set(e3, t3) {
        this.cache.set(e3, t3), this._size++, this._size >= this.maxSize && (this._size = 0, this._emitEvictions(this.oldCache), this.oldCache = this.cache, this.cache = /* @__PURE__ */ new Map());
      }
      _moveToRecent(e3, t3) {
        this.oldCache.delete(e3), this._set(e3, t3);
      }
      *_entriesAscending() {
        for (let e3 of this.oldCache) {
          let [t3, n3] = e3;
          this.cache.has(t3) || this._deleteIfExpired(t3, n3) === false && (yield e3);
        }
        for (let e3 of this.cache) {
          let [t3, n3] = e3;
          this._deleteIfExpired(t3, n3) === false && (yield e3);
        }
      }
      get(e3) {
        if (this.cache.has(e3)) {
          let t3 = this.cache.get(e3);
          return this._getItemValue(e3, t3);
        }
        if (this.oldCache.has(e3)) {
          let t3 = this.oldCache.get(e3);
          if (this._deleteIfExpired(e3, t3) === false) return this._moveToRecent(e3, t3), t3.value;
        }
      }
      set(e3, t3, { maxAge: n3 = this.maxAge === 1 / 0 ? void 0 : Date.now() + this.maxAge } = {}) {
        this.cache.has(e3) ? this.cache.set(e3, {
          value: t3,
          maxAge: n3
        }) : this._set(e3, {
          value: t3,
          expiry: n3
        });
      }
      has(e3) {
        return this.cache.has(e3) ? !this._deleteIfExpired(e3, this.cache.get(e3)) : this.oldCache.has(e3) ? !this._deleteIfExpired(e3, this.oldCache.get(e3)) : false;
      }
      peek(e3) {
        if (this.cache.has(e3)) return this._peek(e3, this.cache);
        if (this.oldCache.has(e3)) return this._peek(e3, this.oldCache);
      }
      delete(e3) {
        let t3 = this.cache.delete(e3);
        return t3 && this._size--, this.oldCache.delete(e3) || t3;
      }
      clear() {
        this.cache.clear(), this.oldCache.clear(), this._size = 0;
      }
      resize(e3) {
        if (!(e3 && e3 > 0)) throw TypeError("`maxSize` must be a number greater than 0");
        let t3 = [
          ...this._entriesAscending()
        ], n3 = t3.length - e3;
        n3 < 0 ? (this.cache = new Map(t3), this.oldCache = /* @__PURE__ */ new Map(), this._size = t3.length) : (n3 > 0 && this._emitEvictions(t3.slice(0, n3)), this.oldCache = new Map(t3.slice(n3)), this.cache = /* @__PURE__ */ new Map(), this._size = 0), this.maxSize = e3;
      }
      *keys() {
        for (let [e3] of this) yield e3;
      }
      *values() {
        for (let [, e3] of this) yield e3;
      }
      *[Symbol.iterator]() {
        for (let e3 of this.cache) {
          let [t3, n3] = e3;
          this._deleteIfExpired(t3, n3) === false && (yield [
            t3,
            n3.value
          ]);
        }
        for (let e3 of this.oldCache) {
          let [t3, n3] = e3;
          this.cache.has(t3) || this._deleteIfExpired(t3, n3) === false && (yield [
            t3,
            n3.value
          ]);
        }
      }
      *entriesDescending() {
        let e3 = [
          ...this.cache
        ];
        for (let t3 = e3.length - 1; t3 >= 0; --t3) {
          let n3 = e3[t3], [r2, i2] = n3;
          this._deleteIfExpired(r2, i2) === false && (yield [
            r2,
            i2.value
          ]);
        }
        e3 = [
          ...this.oldCache
        ];
        for (let t3 = e3.length - 1; t3 >= 0; --t3) {
          let n3 = e3[t3], [r2, i2] = n3;
          this.cache.has(r2) || this._deleteIfExpired(r2, i2) === false && (yield [
            r2,
            i2.value
          ]);
        }
      }
      *entriesAscending() {
        for (let [e3, t3] of this._entriesAscending()) yield [
          e3,
          t3.value
        ];
      }
      get size() {
        if (!this._size) return this.oldCache.size;
        let e3 = 0;
        for (let t3 of this.oldCache.keys()) this.cache.has(t3) || e3++;
        return Math.min(this._size + e3, this.maxSize);
      }
    };
    t2.exports = n2;
  }), cr = or(sr()), lr = cr.default ?? cr, ur = Object.create, dr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, pr = Object.getOwnPropertyNames, mr = Object.getPrototypeOf, hr = Object.prototype.hasOwnProperty, gr = (e2, t2) => () => (t2 || e2((t2 = {
    exports: {}
  }).exports, t2), t2.exports), _r = (e2, t2, n2, r2) => {
    if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of pr(t2)) !hr.call(e2, i2) && i2 !== n2 && dr(e2, i2, {
      get: () => t2[i2],
      enumerable: !(r2 = fr(t2, i2)) || r2.enumerable
    });
    return e2;
  }, vr = (e2, t2, n2) => (n2 = e2 == null ? {} : ur(mr(e2)), _r(t2 || !e2 || !e2.__esModule ? dr(n2, `default`, {
    value: e2,
    enumerable: true
  }) : n2, e2)), yr = gr((e2, t2) => {
    var n2 = 40, r2 = 41, i2 = 39, a2 = 34, o2 = 92, s2 = 47, c2 = 44, l2 = 58, u2 = 42, d2 = 117, f2 = 85, p2 = 43, m2 = /^[a-f0-9?-]+$/i;
    t2.exports = function(e3) {
      for (var t3 = [], h2 = e3, g2, _2, v2, y2, b2, x2, S2, ee2, C2 = 0, w2 = h2.charCodeAt(C2), te2 = h2.length, T2 = [
        {
          nodes: t3
        }
      ], E2 = 0, D2, O2 = ``, k2 = ``, A2 = ``; C2 < te2; ) if (w2 <= 32) {
        g2 = C2;
        do
          g2 += 1, w2 = h2.charCodeAt(g2);
        while (w2 <= 32);
        y2 = h2.slice(C2, g2), v2 = t3[t3.length - 1], w2 === r2 && E2 ? A2 = y2 : v2 && v2.type === `div` ? (v2.after = y2, v2.sourceEndIndex += y2.length) : w2 === c2 || w2 === l2 || w2 === s2 && h2.charCodeAt(g2 + 1) !== u2 && (!D2 || D2 && D2.type === `function` && false) ? k2 = y2 : t3.push({
          type: `space`,
          sourceIndex: C2,
          sourceEndIndex: g2,
          value: y2
        }), C2 = g2;
      } else if (w2 === i2 || w2 === a2) {
        g2 = C2, _2 = w2 === i2 ? `'` : `"`, y2 = {
          type: `string`,
          sourceIndex: C2,
          quote: _2
        };
        do
          if (b2 = false, g2 = h2.indexOf(_2, g2 + 1), ~g2) for (x2 = g2; h2.charCodeAt(x2 - 1) === o2; ) --x2, b2 = !b2;
          else h2 += _2, g2 = h2.length - 1, y2.unclosed = true;
        while (b2);
        y2.value = h2.slice(C2 + 1, g2), y2.sourceEndIndex = y2.unclosed ? g2 : g2 + 1, t3.push(y2), C2 = g2 + 1, w2 = h2.charCodeAt(C2);
      } else if (w2 === s2 && h2.charCodeAt(C2 + 1) === u2) g2 = h2.indexOf(`*/`, C2), y2 = {
        type: `comment`,
        sourceIndex: C2,
        sourceEndIndex: g2 + 2
      }, g2 === -1 && (y2.unclosed = true, g2 = h2.length, y2.sourceEndIndex = g2), y2.value = h2.slice(C2 + 2, g2), t3.push(y2), C2 = g2 + 2, w2 = h2.charCodeAt(C2);
      else if ((w2 === s2 || w2 === u2) && D2 && D2.type === `function`) y2 = h2[C2], t3.push({
        type: `word`,
        sourceIndex: C2 - k2.length,
        sourceEndIndex: C2 + y2.length,
        value: y2
      }), C2 += 1, w2 = h2.charCodeAt(C2);
      else if (w2 === s2 || w2 === c2 || w2 === l2) y2 = h2[C2], t3.push({
        type: `div`,
        sourceIndex: C2 - k2.length,
        sourceEndIndex: C2 + y2.length,
        value: y2,
        before: k2,
        after: ``
      }), k2 = ``, C2 += 1, w2 = h2.charCodeAt(C2);
      else if (n2 === w2) {
        g2 = C2;
        do
          g2 += 1, w2 = h2.charCodeAt(g2);
        while (w2 <= 32);
        if (ee2 = C2, y2 = {
          type: `function`,
          sourceIndex: C2 - O2.length,
          value: O2,
          before: h2.slice(ee2 + 1, g2)
        }, C2 = g2, O2 === `url` && w2 !== i2 && w2 !== a2) {
          --g2;
          do
            if (b2 = false, g2 = h2.indexOf(`)`, g2 + 1), ~g2) for (x2 = g2; h2.charCodeAt(x2 - 1) === o2; ) --x2, b2 = !b2;
            else h2 += `)`, g2 = h2.length - 1, y2.unclosed = true;
          while (b2);
          S2 = g2;
          do
            --S2, w2 = h2.charCodeAt(S2);
          while (w2 <= 32);
          ee2 < S2 ? (C2 === S2 + 1 ? y2.nodes = [] : y2.nodes = [
            {
              type: `word`,
              sourceIndex: C2,
              sourceEndIndex: S2 + 1,
              value: h2.slice(C2, S2 + 1)
            }
          ], y2.unclosed && S2 + 1 !== g2 ? (y2.after = ``, y2.nodes.push({
            type: `space`,
            sourceIndex: S2 + 1,
            sourceEndIndex: g2,
            value: h2.slice(S2 + 1, g2)
          })) : (y2.after = h2.slice(S2 + 1, g2), y2.sourceEndIndex = g2)) : (y2.after = ``, y2.nodes = []), C2 = g2 + 1, y2.sourceEndIndex = y2.unclosed ? g2 : C2, w2 = h2.charCodeAt(C2), t3.push(y2);
        } else E2 += 1, y2.after = ``, y2.sourceEndIndex = C2 + 1, t3.push(y2), T2.push(y2), t3 = y2.nodes = [], D2 = y2;
        O2 = ``;
      } else if (r2 === w2 && E2) C2 += 1, w2 = h2.charCodeAt(C2), D2.after = A2, D2.sourceEndIndex += A2.length, A2 = ``, --E2, T2[T2.length - 1].sourceEndIndex = C2, T2.pop(), D2 = T2[E2], t3 = D2.nodes;
      else {
        g2 = C2;
        do
          w2 === o2 && (g2 += 1), g2 += 1, w2 = h2.charCodeAt(g2);
        while (g2 < te2 && !(w2 <= 32 || w2 === i2 || w2 === a2 || w2 === c2 || w2 === l2 || w2 === s2 || w2 === n2 || w2 === u2 && D2 && D2.type === `function` || w2 === s2 && D2.type === `function` || w2 === r2 && E2));
        y2 = h2.slice(C2, g2), n2 === w2 ? O2 = y2 : (d2 === y2.charCodeAt(0) || f2 === y2.charCodeAt(0)) && p2 === y2.charCodeAt(1) && m2.test(y2.slice(2)) ? t3.push({
          type: `unicode-range`,
          sourceIndex: C2,
          sourceEndIndex: g2,
          value: y2
        }) : t3.push({
          type: `word`,
          sourceIndex: C2,
          sourceEndIndex: g2,
          value: y2
        }), C2 = g2;
      }
      for (C2 = T2.length - 1; C2; --C2) T2[C2].unclosed = true, T2[C2].sourceEndIndex = h2.length;
      return T2[0].nodes;
    };
  }), br = gr((e2, t2) => {
    t2.exports = function e3(t3, n2, r2) {
      var i2, a2, o2, s2;
      for (i2 = 0, a2 = t3.length; i2 < a2; i2 += 1) o2 = t3[i2], r2 || (s2 = n2(o2, i2, t3)), s2 !== false && o2.type === `function` && Array.isArray(o2.nodes) && e3(o2.nodes, n2, r2), r2 && n2(o2, i2, t3);
    };
  }), xr = gr((e2, t2) => {
    function n2(e3, t3) {
      var n3 = e3.type, i2 = e3.value, a2, o2;
      return t3 && (o2 = t3(e3)) !== void 0 ? o2 : n3 === `word` || n3 === `space` ? i2 : n3 === `string` ? (a2 = e3.quote || ``, a2 + i2 + (e3.unclosed ? `` : a2)) : n3 === `comment` ? `/*` + i2 + (e3.unclosed ? `` : `*/`) : n3 === `div` ? (e3.before || ``) + i2 + (e3.after || ``) : Array.isArray(e3.nodes) ? (a2 = r2(e3.nodes, t3), n3 === `function` ? i2 + `(` + (e3.before || ``) + a2 + (e3.after || ``) + (e3.unclosed ? `` : `)`) : a2) : i2;
    }
    function r2(e3, t3) {
      var r3, i2;
      if (Array.isArray(e3)) {
        for (r3 = ``, i2 = e3.length - 1; ~i2; --i2) r3 = n2(e3[i2], t3) + r3;
        return r3;
      }
      return n2(e3, t3);
    }
    t2.exports = r2;
  }), Sr = gr((e2, t2) => {
    var n2 = 45, r2 = 43, i2 = 46, a2 = 101, o2 = 69;
    function s2(e3) {
      var t3 = e3.charCodeAt(0), a3;
      if (t3 === r2 || t3 === n2) {
        if (a3 = e3.charCodeAt(1), a3 >= 48 && a3 <= 57) return true;
        var o3 = e3.charCodeAt(2);
        return a3 === i2 && o3 >= 48 && o3 <= 57;
      }
      return t3 === i2 ? (a3 = e3.charCodeAt(1), a3 >= 48 && a3 <= 57) : t3 >= 48 && t3 <= 57;
    }
    t2.exports = function(e3) {
      var t3 = 0, c2 = e3.length, l2, u2, d2;
      if (c2 === 0 || !s2(e3)) return false;
      for (l2 = e3.charCodeAt(t3), (l2 === r2 || l2 === n2) && t3++; t3 < c2 && (l2 = e3.charCodeAt(t3), !(l2 < 48 || l2 > 57)); ) t3 += 1;
      if (l2 = e3.charCodeAt(t3), u2 = e3.charCodeAt(t3 + 1), l2 === i2 && u2 >= 48 && u2 <= 57) for (t3 += 2; t3 < c2 && (l2 = e3.charCodeAt(t3), !(l2 < 48 || l2 > 57)); ) t3 += 1;
      if (l2 = e3.charCodeAt(t3), u2 = e3.charCodeAt(t3 + 1), d2 = e3.charCodeAt(t3 + 2), (l2 === a2 || l2 === o2) && (u2 >= 48 && u2 <= 57 || (u2 === r2 || u2 === n2) && d2 >= 48 && d2 <= 57)) for (t3 += u2 === r2 || u2 === n2 ? 3 : 2; t3 < c2 && (l2 = e3.charCodeAt(t3), !(l2 < 48 || l2 > 57)); ) t3 += 1;
      return {
        number: e3.slice(0, t3),
        unit: e3.slice(t3)
      };
    };
  }), Cr = gr((e2, t2) => {
    var n2 = yr(), r2 = br(), i2 = xr();
    function a2(e3) {
      return this instanceof a2 ? (this.nodes = n2(e3), this) : new a2(e3);
    }
    a2.prototype.toString = function() {
      return Array.isArray(this.nodes) ? i2(this.nodes) : ``;
    }, a2.prototype.walk = function(e3, t3) {
      return r2(this.nodes, e3, t3), this;
    }, a2.unit = Sr(), a2.walk = r2, a2.stringify = i2, t2.exports = a2;
  }), wr = /* @__PURE__ */ new Set();
  function Tr(e2, t2, n2) {
    typeof j < `u` && j.env.JEST_WORKER_ID || n2 && wr.has(n2) || (n2 && wr.add(n2), console.warn(``), t2.forEach((t3) => console.warn(e2, `-`, t3)));
  }
  var N = {
    info(e2, t2) {
      Tr(T.bold(T.cyan(`info`)), ...Array.isArray(e2) ? [
        e2
      ] : [
        t2,
        e2
      ]);
    },
    warn(e2, t2) {
      Tr(T.bold(T.yellow(`warn`)), ...Array.isArray(e2) ? [
        e2
      ] : [
        t2,
        e2
      ]);
    },
    risk(e2, t2) {
      Tr(T.bold(T.magenta(`risk`)), ...Array.isArray(e2) ? [
        e2
      ] : [
        t2,
        e2
      ]);
    }
  };
  function Er(e2) {
    let t2 = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Set();
    if (e2.walkAtRules((e3) => {
      e3.name === `apply` && r2.add(e3), e3.name === `import` && (e3.params === `"tailwindcss/base"` || e3.params === `'tailwindcss/base'` ? (e3.name = `tailwind`, e3.params = `base`) : e3.params === `"tailwindcss/components"` || e3.params === `'tailwindcss/components'` ? (e3.name = `tailwind`, e3.params = `components`) : e3.params === `"tailwindcss/utilities"` || e3.params === `'tailwindcss/utilities'` ? (e3.name = `tailwind`, e3.params = `utilities`) : (e3.params === `"tailwindcss/screens"` || e3.params === `'tailwindcss/screens'` || e3.params === `"tailwindcss/variants"` || e3.params === `'tailwindcss/variants'`) && (e3.name = `tailwind`, e3.params = `variants`)), e3.name === `tailwind` && (e3.params === `screens` && (e3.params = `variants`), t2.add(e3.params)), [
        `layer`,
        `responsive`,
        `variants`
      ].includes(e3.name) && ([
        `responsive`,
        `variants`
      ].includes(e3.name) && N.warn(`${e3.name}-at-rule-deprecated`, [
        `The \`@${e3.name}\` directive has been deprecated in Tailwind CSS v3.0.`,
        "Use `@layer utilities` or `@layer components` instead.",
        `https://tailwindcss.com/docs/upgrade-guide#replace-variants-with-layer`
      ]), n2.add(e3));
    }), !t2.has(`base`) || !t2.has(`components`) || !t2.has(`utilities`)) {
      for (let e3 of n2) if (e3.name === `layer` && [
        `base`,
        `components`,
        `utilities`
      ].includes(e3.params)) {
        if (!t2.has(e3.params)) throw e3.error(`\`@layer ${e3.params}\` is used but no matching \`@tailwind ${e3.params}\` directive is present.`);
      } else if (e3.name === `responsive`) {
        if (!t2.has(`utilities`)) throw e3.error("`@responsive` is used but `@tailwind utilities` is missing.");
      } else if (e3.name === `variants` && !t2.has(`utilities`)) throw e3.error("`@variants` is used but `@tailwind utilities` is missing.");
    }
    return {
      tailwindDirectives: t2,
      applyDirectives: r2
    };
  }
  var Dr = typeof j < `u` ? {
    NODE_ENV: `production`,
    DEBUG: jr(j.env.DEBUG)
  } : {
    NODE_ENV: `production`,
    DEBUG: false
  }, Or = /* @__PURE__ */ new Map(), kr = new String(`*`), Ar = Symbol(`__NONE__`);
  function jr(e2) {
    if (e2 === void 0) return false;
    if (e2 === `true` || e2 === `1`) return true;
    if (e2 === `false` || e2 === `0`) return false;
    if (e2 === `*`) return true;
    let t2 = e2.split(`,`).map((e3) => e3.split(`:`)[0]);
    return t2.includes(`-tailwindcss`) ? false : !!t2.includes(`tailwindcss`);
  }
  function Mr(e2) {
    return Array.isArray(e2) ? e2.flatMap((e3) => S([
      w({
        bubble: [
          `screen`
        ]
      })
    ]).process(e3, {
      parser: k
    }).root.nodes) : Mr([
      e2
    ]);
  }
  function Nr(e2) {
    if (Object.prototype.toString.call(e2) !== `[object Object]`) return false;
    let t2 = Object.getPrototypeOf(e2);
    return t2 === null || Object.getPrototypeOf(t2) === null;
  }
  function Pr(e2, t2, n2 = false) {
    if (e2 === ``) return t2;
    let r2 = typeof t2 == `string` ? C().astSync(t2) : t2;
    return r2.walkClasses((t3) => {
      let r3 = t3.value, i2 = n2 && r3.startsWith(`-`);
      t3.value = i2 ? `-${e2}${r3.slice(1)}` : `${e2}${r3}`;
    }), typeof t2 == `string` ? r2.toString() : r2;
  }
  function Fr(e2) {
    return e2.replace(/\\,/g, `\\2c `);
  }
  var Ir = {
    aliceblue: [
      240,
      248,
      255
    ],
    antiquewhite: [
      250,
      235,
      215
    ],
    aqua: [
      0,
      255,
      255
    ],
    aquamarine: [
      127,
      255,
      212
    ],
    azure: [
      240,
      255,
      255
    ],
    beige: [
      245,
      245,
      220
    ],
    bisque: [
      255,
      228,
      196
    ],
    black: [
      0,
      0,
      0
    ],
    blanchedalmond: [
      255,
      235,
      205
    ],
    blue: [
      0,
      0,
      255
    ],
    blueviolet: [
      138,
      43,
      226
    ],
    brown: [
      165,
      42,
      42
    ],
    burlywood: [
      222,
      184,
      135
    ],
    cadetblue: [
      95,
      158,
      160
    ],
    chartreuse: [
      127,
      255,
      0
    ],
    chocolate: [
      210,
      105,
      30
    ],
    coral: [
      255,
      127,
      80
    ],
    cornflowerblue: [
      100,
      149,
      237
    ],
    cornsilk: [
      255,
      248,
      220
    ],
    crimson: [
      220,
      20,
      60
    ],
    cyan: [
      0,
      255,
      255
    ],
    darkblue: [
      0,
      0,
      139
    ],
    darkcyan: [
      0,
      139,
      139
    ],
    darkgoldenrod: [
      184,
      134,
      11
    ],
    darkgray: [
      169,
      169,
      169
    ],
    darkgreen: [
      0,
      100,
      0
    ],
    darkgrey: [
      169,
      169,
      169
    ],
    darkkhaki: [
      189,
      183,
      107
    ],
    darkmagenta: [
      139,
      0,
      139
    ],
    darkolivegreen: [
      85,
      107,
      47
    ],
    darkorange: [
      255,
      140,
      0
    ],
    darkorchid: [
      153,
      50,
      204
    ],
    darkred: [
      139,
      0,
      0
    ],
    darksalmon: [
      233,
      150,
      122
    ],
    darkseagreen: [
      143,
      188,
      143
    ],
    darkslateblue: [
      72,
      61,
      139
    ],
    darkslategray: [
      47,
      79,
      79
    ],
    darkslategrey: [
      47,
      79,
      79
    ],
    darkturquoise: [
      0,
      206,
      209
    ],
    darkviolet: [
      148,
      0,
      211
    ],
    deeppink: [
      255,
      20,
      147
    ],
    deepskyblue: [
      0,
      191,
      255
    ],
    dimgray: [
      105,
      105,
      105
    ],
    dimgrey: [
      105,
      105,
      105
    ],
    dodgerblue: [
      30,
      144,
      255
    ],
    firebrick: [
      178,
      34,
      34
    ],
    floralwhite: [
      255,
      250,
      240
    ],
    forestgreen: [
      34,
      139,
      34
    ],
    fuchsia: [
      255,
      0,
      255
    ],
    gainsboro: [
      220,
      220,
      220
    ],
    ghostwhite: [
      248,
      248,
      255
    ],
    gold: [
      255,
      215,
      0
    ],
    goldenrod: [
      218,
      165,
      32
    ],
    gray: [
      128,
      128,
      128
    ],
    green: [
      0,
      128,
      0
    ],
    greenyellow: [
      173,
      255,
      47
    ],
    grey: [
      128,
      128,
      128
    ],
    honeydew: [
      240,
      255,
      240
    ],
    hotpink: [
      255,
      105,
      180
    ],
    indianred: [
      205,
      92,
      92
    ],
    indigo: [
      75,
      0,
      130
    ],
    ivory: [
      255,
      255,
      240
    ],
    khaki: [
      240,
      230,
      140
    ],
    lavender: [
      230,
      230,
      250
    ],
    lavenderblush: [
      255,
      240,
      245
    ],
    lawngreen: [
      124,
      252,
      0
    ],
    lemonchiffon: [
      255,
      250,
      205
    ],
    lightblue: [
      173,
      216,
      230
    ],
    lightcoral: [
      240,
      128,
      128
    ],
    lightcyan: [
      224,
      255,
      255
    ],
    lightgoldenrodyellow: [
      250,
      250,
      210
    ],
    lightgray: [
      211,
      211,
      211
    ],
    lightgreen: [
      144,
      238,
      144
    ],
    lightgrey: [
      211,
      211,
      211
    ],
    lightpink: [
      255,
      182,
      193
    ],
    lightsalmon: [
      255,
      160,
      122
    ],
    lightseagreen: [
      32,
      178,
      170
    ],
    lightskyblue: [
      135,
      206,
      250
    ],
    lightslategray: [
      119,
      136,
      153
    ],
    lightslategrey: [
      119,
      136,
      153
    ],
    lightsteelblue: [
      176,
      196,
      222
    ],
    lightyellow: [
      255,
      255,
      224
    ],
    lime: [
      0,
      255,
      0
    ],
    limegreen: [
      50,
      205,
      50
    ],
    linen: [
      250,
      240,
      230
    ],
    magenta: [
      255,
      0,
      255
    ],
    maroon: [
      128,
      0,
      0
    ],
    mediumaquamarine: [
      102,
      205,
      170
    ],
    mediumblue: [
      0,
      0,
      205
    ],
    mediumorchid: [
      186,
      85,
      211
    ],
    mediumpurple: [
      147,
      112,
      219
    ],
    mediumseagreen: [
      60,
      179,
      113
    ],
    mediumslateblue: [
      123,
      104,
      238
    ],
    mediumspringgreen: [
      0,
      250,
      154
    ],
    mediumturquoise: [
      72,
      209,
      204
    ],
    mediumvioletred: [
      199,
      21,
      133
    ],
    midnightblue: [
      25,
      25,
      112
    ],
    mintcream: [
      245,
      255,
      250
    ],
    mistyrose: [
      255,
      228,
      225
    ],
    moccasin: [
      255,
      228,
      181
    ],
    navajowhite: [
      255,
      222,
      173
    ],
    navy: [
      0,
      0,
      128
    ],
    oldlace: [
      253,
      245,
      230
    ],
    olive: [
      128,
      128,
      0
    ],
    olivedrab: [
      107,
      142,
      35
    ],
    orange: [
      255,
      165,
      0
    ],
    orangered: [
      255,
      69,
      0
    ],
    orchid: [
      218,
      112,
      214
    ],
    palegoldenrod: [
      238,
      232,
      170
    ],
    palegreen: [
      152,
      251,
      152
    ],
    paleturquoise: [
      175,
      238,
      238
    ],
    palevioletred: [
      219,
      112,
      147
    ],
    papayawhip: [
      255,
      239,
      213
    ],
    peachpuff: [
      255,
      218,
      185
    ],
    peru: [
      205,
      133,
      63
    ],
    pink: [
      255,
      192,
      203
    ],
    plum: [
      221,
      160,
      221
    ],
    powderblue: [
      176,
      224,
      230
    ],
    purple: [
      128,
      0,
      128
    ],
    rebeccapurple: [
      102,
      51,
      153
    ],
    red: [
      255,
      0,
      0
    ],
    rosybrown: [
      188,
      143,
      143
    ],
    royalblue: [
      65,
      105,
      225
    ],
    saddlebrown: [
      139,
      69,
      19
    ],
    salmon: [
      250,
      128,
      114
    ],
    sandybrown: [
      244,
      164,
      96
    ],
    seagreen: [
      46,
      139,
      87
    ],
    seashell: [
      255,
      245,
      238
    ],
    sienna: [
      160,
      82,
      45
    ],
    silver: [
      192,
      192,
      192
    ],
    skyblue: [
      135,
      206,
      235
    ],
    slateblue: [
      106,
      90,
      205
    ],
    slategray: [
      112,
      128,
      144
    ],
    slategrey: [
      112,
      128,
      144
    ],
    snow: [
      255,
      250,
      250
    ],
    springgreen: [
      0,
      255,
      127
    ],
    steelblue: [
      70,
      130,
      180
    ],
    tan: [
      210,
      180,
      140
    ],
    teal: [
      0,
      128,
      128
    ],
    thistle: [
      216,
      191,
      216
    ],
    tomato: [
      255,
      99,
      71
    ],
    turquoise: [
      64,
      224,
      208
    ],
    violet: [
      238,
      130,
      238
    ],
    wheat: [
      245,
      222,
      179
    ],
    white: [
      255,
      255,
      255
    ],
    whitesmoke: [
      245,
      245,
      245
    ],
    yellow: [
      255,
      255,
      0
    ],
    yellowgreen: [
      154,
      205,
      50
    ]
  }, Lr = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, Rr = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, P = /(?:\d+|\d*\.\d+)%?/, zr = /(?:\s*,\s*|\s+)/, Br = /\s*[,/]\s*/, F = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/, Vr = RegExp(`^(rgba?)\\(\\s*(${P.source}|${F.source})(?:${zr.source}(${P.source}|${F.source}))?(?:${zr.source}(${P.source}|${F.source}))?(?:${Br.source}(${P.source}|${F.source}))?\\s*\\)$`), Hr = RegExp(`^(hsla?)\\(\\s*((?:${P.source})(?:deg|rad|grad|turn)?|${F.source})(?:${zr.source}(${P.source}|${F.source}))?(?:${zr.source}(${P.source}|${F.source}))?(?:${Br.source}(${P.source}|${F.source}))?\\s*\\)$`);
  function Ur(e2, { loose: t2 = false } = {}) {
    var _a2, _b;
    if (typeof e2 != `string`) return null;
    if (e2 = e2.trim(), e2 === `transparent`) return {
      mode: `rgb`,
      color: [
        `0`,
        `0`,
        `0`
      ],
      alpha: `0`
    };
    if (e2 in Ir) return {
      mode: `rgb`,
      color: Ir[e2].map((e3) => e3.toString())
    };
    let n2 = e2.replace(Rr, (e3, t3, n3, r3, i3) => [
      `#`,
      t3,
      t3,
      n3,
      n3,
      r3,
      r3,
      i3 ? i3 + i3 : ``
    ].join(``)).match(Lr);
    if (n2 !== null) return {
      mode: `rgb`,
      color: [
        parseInt(n2[1], 16),
        parseInt(n2[2], 16),
        parseInt(n2[3], 16)
      ].map((e3) => e3.toString()),
      alpha: n2[4] ? (parseInt(n2[4], 16) / 255).toString() : void 0
    };
    let r2 = e2.match(Vr) ?? e2.match(Hr);
    if (r2 === null) return null;
    let i2 = [
      r2[2],
      r2[3],
      r2[4]
    ].filter(Boolean).map((e3) => e3.toString());
    return i2.length === 2 && i2[0].startsWith(`var(`) ? {
      mode: r2[1],
      color: [
        i2[0]
      ],
      alpha: i2[1]
    } : !t2 && i2.length !== 3 || i2.length < 3 && !i2.some((e3) => /^var\(.*?\)$/.test(e3)) ? null : {
      mode: r2[1],
      color: i2,
      alpha: (_b = (_a2 = r2[5]) == null ? void 0 : _a2.toString) == null ? void 0 : _b.call(_a2)
    };
  }
  function Wr({ mode: e2, color: t2, alpha: n2 }) {
    let r2 = n2 !== void 0;
    return e2 === `rgba` || e2 === `hsla` ? `${e2}(${t2.join(`, `)}${r2 ? `, ${n2}` : ``})` : `${e2}(${t2.join(` `)}${r2 ? ` / ${n2}` : ``})`;
  }
  function Gr(e2, t2, n2) {
    if (typeof e2 == `function`) return e2({
      opacityValue: t2
    });
    let r2 = Ur(e2, {
      loose: true
    });
    return r2 === null ? n2 : Wr({
      ...r2,
      alpha: t2
    });
  }
  function I({ color: e2, property: t2, variable: n2 }) {
    let r2 = [].concat(t2);
    if (typeof e2 == `function`) return {
      [n2]: `1`,
      ...Object.fromEntries(r2.map((t3) => [
        t3,
        e2({
          opacityVariable: n2,
          opacityValue: `var(${n2}, 1)`
        })
      ]))
    };
    let i2 = Ur(e2);
    return i2 === null ? Object.fromEntries(r2.map((t3) => [
      t3,
      e2
    ])) : i2.alpha === void 0 ? {
      [n2]: `1`,
      ...Object.fromEntries(r2.map((e3) => [
        e3,
        Wr({
          ...i2,
          alpha: `var(${n2}, 1)`
        })
      ]))
    } : Object.fromEntries(r2.map((t3) => [
      t3,
      e2
    ]));
  }
  function L(e2, t2) {
    let n2 = [], r2 = [], i2 = 0, a2 = false;
    for (let o2 = 0; o2 < e2.length; o2++) {
      let s2 = e2[o2];
      n2.length === 0 && s2 === t2[0] && !a2 && (t2.length === 1 || e2.slice(o2, o2 + t2.length) === t2) && (r2.push(e2.slice(i2, o2)), i2 = o2 + t2.length), a2 = a2 ? false : s2 === `\\`, s2 === `(` || s2 === `[` || s2 === `{` ? n2.push(s2) : (s2 === `)` && n2[n2.length - 1] === `(` || s2 === `]` && n2[n2.length - 1] === `[` || s2 === `}` && n2[n2.length - 1] === `{`) && n2.pop();
    }
    return r2.push(e2.slice(i2)), r2;
  }
  var Kr = /* @__PURE__ */ new Set([
    `inset`,
    `inherit`,
    `initial`,
    `revert`,
    `unset`
  ]), qr = /\ +(?![^(]*\))/g, Jr = /^-?(\d+|\.\d+)(.*?)$/g;
  function Yr(e2) {
    return L(e2, `,`).map((e3) => {
      let t2 = e3.trim(), n2 = {
        raw: t2
      }, r2 = t2.split(qr), i2 = /* @__PURE__ */ new Set();
      for (let e4 of r2) Jr.lastIndex = 0, !i2.has(`KEYWORD`) && Kr.has(e4) ? (n2.keyword = e4, i2.add(`KEYWORD`)) : Jr.test(e4) ? i2.has(`X`) ? i2.has(`Y`) ? i2.has(`BLUR`) ? i2.has(`SPREAD`) || (n2.spread = e4, i2.add(`SPREAD`)) : (n2.blur = e4, i2.add(`BLUR`)) : (n2.y = e4, i2.add(`Y`)) : (n2.x = e4, i2.add(`X`)) : n2.color ? (n2.unknown || (n2.unknown = []), n2.unknown.push(e4)) : n2.color = e4;
      return n2.valid = n2.x !== void 0 && n2.y !== void 0, n2;
    });
  }
  function Xr(e2) {
    return e2.map((e3) => e3.valid ? [
      e3.keyword,
      e3.x,
      e3.y,
      e3.blur,
      e3.spread,
      e3.color
    ].filter(Boolean).join(` `) : e3.raw).join(`, `);
  }
  var Zr = [
    `min`,
    `max`,
    `clamp`,
    `calc`
  ];
  function Qr(e2) {
    return Zr.some((t2) => RegExp(`^${t2}\\(.*\\)`).test(e2));
  }
  var $r = /* @__PURE__ */ new Set([
    `scroll-timeline-name`,
    `timeline-scope`,
    `view-timeline-name`,
    `font-palette`,
    `anchor-name`,
    `anchor-scope`,
    `position-anchor`,
    `position-try-options`,
    `scroll-timeline`,
    `animation-timeline`,
    `view-timeline`,
    `position-try`
  ]);
  function R(e2, t2 = null, n2 = true) {
    let r2 = t2 && $r.has(t2.property);
    return e2.startsWith(`--`) && !r2 ? `var(${e2})` : e2.includes(`url(`) ? e2.split(/(url\(.*?\))/g).filter(Boolean).map((e3) => /^url\(.*?\)$/.test(e3) ? e3 : R(e3, t2, false)).join(``) : (e2 = e2.replace(/([^\\])_+/g, (e3, t3) => t3 + ` `.repeat(e3.length - 1)).replace(/^_/g, ` `).replace(/\\_/g, `_`), n2 && (e2 = e2.trim()), e2 = ei(e2), e2);
  }
  function z(e2) {
    return e2.includes(`=`) && (e2 = e2.replace(/(=.*)/g, (e3, t2) => {
      if (t2[1] === `'` || t2[1] === `"`) return t2;
      if (t2.length > 2) {
        let e4 = t2[t2.length - 1];
        if (t2[t2.length - 2] === ` ` && (e4 === `i` || e4 === `I` || e4 === `s` || e4 === `S`)) return `="${t2.slice(1, -2)}" ${t2[t2.length - 1]}`;
      }
      return `="${t2.slice(1)}"`;
    })), e2;
  }
  function ei(e2) {
    let t2 = [
      `theme`
    ], n2 = [
      `min-content`,
      `max-content`,
      `fit-content`,
      `safe-area-inset-top`,
      `safe-area-inset-right`,
      `safe-area-inset-bottom`,
      `safe-area-inset-left`,
      `titlebar-area-x`,
      `titlebar-area-y`,
      `titlebar-area-width`,
      `titlebar-area-height`,
      `keyboard-inset-top`,
      `keyboard-inset-right`,
      `keyboard-inset-bottom`,
      `keyboard-inset-left`,
      `keyboard-inset-width`,
      `keyboard-inset-height`,
      `radial-gradient`,
      `linear-gradient`,
      `conic-gradient`,
      `repeating-radial-gradient`,
      `repeating-linear-gradient`,
      `repeating-conic-gradient`,
      `anchor-size`
    ];
    return e2.replace(/(calc|min|max|clamp)\(.+\)/g, (e3) => {
      let r2 = ``;
      function i2() {
        let e4 = r2.trimEnd();
        return e4[e4.length - 1];
      }
      for (let a2 = 0; a2 < e3.length; a2++) {
        let o2 = function(t3) {
          return t3.split(``).every((t4, n3) => e3[a2 + n3] === t4);
        }, s2 = function(t3) {
          let n3 = 1 / 0;
          for (let r4 of t3) {
            let t4 = e3.indexOf(r4, a2);
            t4 !== -1 && t4 < n3 && (n3 = t4);
          }
          let r3 = e3.slice(a2, n3);
          return a2 += r3.length - 1, r3;
        }, c2 = e3[a2];
        if (o2(`var`)) r2 += s2([
          `)`,
          `,`
        ]);
        else if (n2.some((e4) => o2(e4))) {
          let e4 = n2.find((e5) => o2(e5));
          r2 += e4, a2 += e4.length - 1;
        } else t2.some((e4) => o2(e4)) ? r2 += s2([
          `)`
        ]) : o2(`[`) ? r2 += s2([
          `]`
        ]) : [
          `+`,
          `-`,
          `*`,
          `/`
        ].includes(c2) && ![
          `(`,
          `+`,
          `-`,
          `*`,
          `/`,
          `,`
        ].includes(i2()) ? r2 += ` ${c2} ` : r2 += c2;
      }
      return r2.replace(/\s+/g, ` `);
    });
  }
  function ti(e2) {
    return e2.startsWith(`url(`);
  }
  function ni(e2) {
    return !isNaN(Number(e2)) || Qr(e2);
  }
  function ri(e2) {
    return e2.endsWith(`%`) && ni(e2.slice(0, -1)) || Qr(e2);
  }
  var ii = `cm.mm.Q.in.pc.pt.px.em.ex.ch.rem.lh.rlh.vw.vh.vmin.vmax.vb.vi.svw.svh.lvw.lvh.dvw.dvh.cqw.cqh.cqi.cqb.cqmin.cqmax`.split(`.`), ai = `(?:${ii.join(`|`)})`;
  function oi(e2) {
    return e2 === `0` || RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${ai}$`).test(e2) || Qr(e2);
  }
  var si = /* @__PURE__ */ new Set([
    `thin`,
    `medium`,
    `thick`
  ]);
  function ci(e2) {
    return si.has(e2);
  }
  function li(e2) {
    let t2 = Yr(R(e2));
    for (let e3 of t2) if (!e3.valid) return false;
    return true;
  }
  function ui(e2) {
    let t2 = 0;
    return L(e2, `_`).every((e3) => (e3 = R(e3), e3.startsWith(`var(`) ? true : Ur(e3, {
      loose: true
    }) === null ? false : (t2++, true))) ? t2 > 0 : false;
  }
  function di(e2) {
    let t2 = 0;
    return L(e2, `,`).every((e3) => (e3 = R(e3), e3.startsWith(`var(`) ? true : ti(e3) || pi(e3) || [
      `element(`,
      `image(`,
      `cross-fade(`,
      `image-set(`
    ].some((t3) => e3.startsWith(t3)) ? (t2++, true) : false)) ? t2 > 0 : false;
  }
  var fi = /* @__PURE__ */ new Set([
    `conic-gradient`,
    `linear-gradient`,
    `radial-gradient`,
    `repeating-conic-gradient`,
    `repeating-linear-gradient`,
    `repeating-radial-gradient`
  ]);
  function pi(e2) {
    e2 = R(e2);
    for (let t2 of fi) if (e2.startsWith(`${t2}(`)) return true;
    return false;
  }
  var mi = /* @__PURE__ */ new Set([
    `center`,
    `top`,
    `right`,
    `bottom`,
    `left`
  ]);
  function hi(e2) {
    let t2 = 0;
    return L(e2, `_`).every((e3) => (e3 = R(e3), e3.startsWith(`var(`) ? true : mi.has(e3) || oi(e3) || ri(e3) ? (t2++, true) : false)) ? t2 > 0 : false;
  }
  function gi(e2) {
    let t2 = 0;
    return L(e2, `,`).every((e3) => (e3 = R(e3), e3.startsWith(`var(`) ? true : e3.includes(` `) && !/(['"])([^"']+)\1/g.test(e3) || /^\d/g.test(e3) ? false : (t2++, true))) ? t2 > 0 : false;
  }
  var _i = /* @__PURE__ */ new Set([
    `serif`,
    `sans-serif`,
    `monospace`,
    `cursive`,
    `fantasy`,
    `system-ui`,
    `ui-serif`,
    `ui-sans-serif`,
    `ui-monospace`,
    `ui-rounded`,
    `math`,
    `emoji`,
    `fangsong`
  ]);
  function vi(e2) {
    return _i.has(e2);
  }
  var yi = /* @__PURE__ */ new Set([
    `xx-small`,
    `x-small`,
    `small`,
    `medium`,
    `large`,
    `x-large`,
    `xx-large`,
    `xxx-large`
  ]);
  function bi(e2) {
    return yi.has(e2);
  }
  var xi = /* @__PURE__ */ new Set([
    `larger`,
    `smaller`
  ]);
  function Si(e2) {
    return xi.has(e2);
  }
  function Ci(e2) {
    if (e2 = `${e2}`, e2 === `0`) return `0`;
    if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(e2)) return e2.replace(/^[+-]?/, (e3) => e3 === `-` ? `` : `-`);
    let t2 = [
      `var`,
      `calc`,
      `min`,
      `max`,
      `clamp`
    ];
    for (let n2 of t2) if (e2.includes(`${n2}(`)) return `calc(${e2} * -1)`;
  }
  function wi(e2) {
    let t2 = [
      `cover`,
      `contain`
    ];
    return L(e2, `,`).every((e3) => {
      let n2 = L(e3, `_`).filter(Boolean);
      return n2.length === 1 && t2.includes(n2[0]) ? true : n2.length !== 1 && n2.length !== 2 ? false : n2.every((e4) => oi(e4) || ri(e4) || e4 === `auto`);
    });
  }
  var Ti = {
    optimizeUniversalDefaults: false,
    generalizedModifiers: true,
    disableColorOpacityUtilitiesByDefault: false,
    relativeContentPathsByDefault: false
  }, Ei = {
    future: [
      `hoverOnlyWhenSupported`,
      `respectDefaultRingColorOpacity`,
      `disableColorOpacityUtilitiesByDefault`,
      `relativeContentPathsByDefault`
    ],
    experimental: [
      `optimizeUniversalDefaults`,
      `generalizedModifiers`
    ]
  };
  function B(e2, t2) {
    var _a2, _b;
    return Ei.future.includes(t2) ? e2.future === `all` || (((_a2 = e2 == null ? void 0 : e2.future) == null ? void 0 : _a2[t2]) ?? Ti[t2] ?? false) : Ei.experimental.includes(t2) ? e2.experimental === `all` || (((_b = e2 == null ? void 0 : e2.experimental) == null ? void 0 : _b[t2]) ?? Ti[t2] ?? false) : false;
  }
  function Di(e2) {
    return e2.experimental === `all` ? Ei.experimental : Object.keys((e2 == null ? void 0 : e2.experimental) ?? {}).filter((t2) => Ei.experimental.includes(t2) && e2.experimental[t2]);
  }
  function Oi(e2) {
    if (j.env.JEST_WORKER_ID === void 0 && Di(e2).length > 0) {
      let t2 = Di(e2).map((e3) => T.yellow(e3)).join(`, `);
      N.warn(`experimental-flags-enabled`, [
        `You have enabled experimental features: ${t2}`,
        `Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time.`
      ]);
    }
  }
  function ki(e2, t2) {
    e2.walkClasses((e3) => {
      e3.value = t2(e3.value), e3.raws && e3.raws.value && (e3.raws.value = Fr(e3.raws.value));
    });
  }
  function Ai(e2, t2) {
    if (!V(e2)) return;
    let n2 = e2.slice(1, -1);
    if (t2(n2)) return R(n2);
  }
  function ji(e2, t2 = {}, n2) {
    let r2 = t2[e2];
    if (r2 !== void 0) return Ci(r2);
    if (V(e2)) {
      let t3 = Ai(e2, n2);
      return t3 === void 0 ? void 0 : Ci(t3);
    }
  }
  function Mi(e2, t2 = {}, { validate: n2 = () => true } = {}) {
    var _a2;
    let r2 = (_a2 = t2.values) == null ? void 0 : _a2[e2];
    return r2 === void 0 ? t2.supportsNegativeValues && e2.startsWith(`-`) ? ji(e2.slice(1), t2.values, n2) : Ai(e2, n2) : r2;
  }
  function V(e2) {
    return e2.startsWith(`[`) && e2.endsWith(`]`);
  }
  function Ni(e2) {
    let t2 = e2.lastIndexOf(`/`), n2 = e2.lastIndexOf(`[`, t2), r2 = e2.indexOf(`]`, t2);
    return e2[t2 - 1] === `]` || e2[t2 + 1] === `[` || n2 !== -1 && r2 !== -1 && n2 < t2 && t2 < r2 && (t2 = e2.lastIndexOf(`/`, n2)), t2 === -1 || t2 === e2.length - 1 || V(e2) && !e2.includes(`]/[`) ? [
      e2,
      void 0
    ] : [
      e2.slice(0, t2),
      e2.slice(t2 + 1)
    ];
  }
  function Pi(e2) {
    if (typeof e2 == `string` && e2.includes(`<alpha-value>`)) {
      let t2 = e2;
      return ({ opacityValue: e3 = 1 }) => t2.replace(/<alpha-value>/g, e3);
    }
    return e2;
  }
  function Fi(e2) {
    return R(e2.slice(1, -1));
  }
  function Ii(e2, t2 = {}, { tailwindConfig: n2 = {} } = {}) {
    var _a2, _b, _c, _d, _e2;
    if (((_a2 = t2.values) == null ? void 0 : _a2[e2]) !== void 0) return Pi((_b = t2.values) == null ? void 0 : _b[e2]);
    let [r2, i2] = Ni(e2);
    if (i2 !== void 0) {
      let e3 = ((_c = t2.values) == null ? void 0 : _c[r2]) ?? (V(r2) ? r2.slice(1, -1) : void 0);
      return e3 === void 0 ? void 0 : (e3 = Pi(e3), V(i2) ? Gr(e3, Fi(i2)) : ((_e2 = (_d = n2.theme) == null ? void 0 : _d.opacity) == null ? void 0 : _e2[i2]) === void 0 ? void 0 : Gr(e3, n2.theme.opacity[i2]));
    }
    return Mi(e2, t2, {
      validate: ui
    });
  }
  function Li(e2, t2 = {}) {
    var _a2;
    return (_a2 = t2.values) == null ? void 0 : _a2[e2];
  }
  function H(e2) {
    return (t2, n2) => Mi(t2, n2, {
      validate: e2
    });
  }
  var Ri = {
    any: Mi,
    color: Ii,
    url: H(ti),
    image: H(di),
    length: H(oi),
    percentage: H(ri),
    position: H(hi),
    lookup: Li,
    "generic-name": H(vi),
    "family-name": H(gi),
    number: H(ni),
    "line-width": H(ci),
    "absolute-size": H(bi),
    "relative-size": H(Si),
    shadow: H(li),
    size: H(wi)
  }, zi = Object.keys(Ri);
  function Bi(e2, t2) {
    let n2 = e2.indexOf(t2);
    return n2 === -1 ? [
      void 0,
      e2
    ] : [
      e2.slice(0, n2),
      e2.slice(n2 + 1)
    ];
  }
  function Vi(e2, t2, n2, r2) {
    if (n2.values && t2 in n2.values) for (let { type: i3 } of e2 ?? []) {
      let e3 = Ri[i3](t2, n2, {
        tailwindConfig: r2
      });
      if (e3 !== void 0) return [
        e3,
        i3,
        null
      ];
    }
    if (V(t2)) {
      let e3 = t2.slice(1, -1), [r3, i3] = Bi(e3, `:`);
      if (!/^[\w-_]+$/g.test(r3)) i3 = e3;
      else if (r3 !== void 0 && !zi.includes(r3)) return [];
      if (i3.length > 0 && zi.includes(r3)) return [
        Mi(`[${i3}]`, n2),
        r3,
        null
      ];
    }
    let i2 = Hi(e2, t2, n2, r2);
    for (let e3 of i2) return e3;
    return [];
  }
  function* Hi(e2, t2, n2, r2) {
    var _a2;
    let i2 = B(r2, `generalizedModifiers`), [a2, o2] = Ni(t2);
    if (i2 && n2.modifiers != null && (n2.modifiers === `any` || typeof n2.modifiers == `object` && (o2 && V(o2) || o2 in n2.modifiers)) || (a2 = t2, o2 = void 0), o2 !== void 0 && a2 === `` && (a2 = `DEFAULT`), o2 !== void 0 && typeof n2.modifiers == `object`) {
      let e3 = ((_a2 = n2.modifiers) == null ? void 0 : _a2[o2]) ?? null;
      e3 === null ? V(o2) && (o2 = Fi(o2)) : o2 = e3;
    }
    for (let { type: t3 } of e2 ?? []) {
      let e3 = Ri[t3](a2, n2, {
        tailwindConfig: r2
      });
      e3 !== void 0 && (yield [
        e3,
        t3,
        o2 ?? null
      ]);
    }
  }
  function U(e2) {
    var _a2;
    let t2 = C.className();
    return t2.value = e2, Fr(((_a2 = t2 == null ? void 0 : t2.raws) == null ? void 0 : _a2.value) ?? t2.value);
  }
  var Ui = {
    "::after": [
      `terminal`,
      `jumpable`
    ],
    "::backdrop": [
      `terminal`,
      `jumpable`
    ],
    "::before": [
      `terminal`,
      `jumpable`
    ],
    "::cue": [
      `terminal`
    ],
    "::cue-region": [
      `terminal`
    ],
    "::first-letter": [
      `terminal`,
      `jumpable`
    ],
    "::first-line": [
      `terminal`,
      `jumpable`
    ],
    "::grammar-error": [
      `terminal`
    ],
    "::marker": [
      `terminal`,
      `jumpable`
    ],
    "::part": [
      `terminal`,
      `actionable`
    ],
    "::placeholder": [
      `terminal`,
      `jumpable`
    ],
    "::selection": [
      `terminal`,
      `jumpable`
    ],
    "::slotted": [
      `terminal`
    ],
    "::spelling-error": [
      `terminal`
    ],
    "::target-text": [
      `terminal`
    ],
    "::file-selector-button": [
      `terminal`,
      `actionable`
    ],
    "::deep": [
      `actionable`
    ],
    "::v-deep": [
      `actionable`
    ],
    "::ng-deep": [
      `actionable`
    ],
    ":after": [
      `terminal`,
      `jumpable`
    ],
    ":before": [
      `terminal`,
      `jumpable`
    ],
    ":first-letter": [
      `terminal`,
      `jumpable`
    ],
    ":first-line": [
      `terminal`,
      `jumpable`
    ],
    ":where": [],
    ":is": [],
    ":has": [],
    __default__: [
      `terminal`,
      `actionable`
    ]
  };
  function Wi(e2) {
    let [t2] = Gi(e2);
    return t2.forEach(([e3, t3]) => e3.removeChild(t3)), e2.nodes.push(...t2.map(([, e3]) => e3)), e2;
  }
  function Gi(e2) {
    let t2 = [], n2 = null;
    for (let r2 of e2.nodes) if (r2.type === `combinator`) t2 = t2.filter(([, e3]) => Yi(e3).includes(`jumpable`)), n2 = null;
    else if (r2.type === `pseudo`) {
      qi(r2) ? (n2 = r2, t2.push([
        e2,
        r2,
        null
      ])) : n2 && Ji(r2, n2) ? t2.push([
        e2,
        r2,
        n2
      ]) : n2 = null;
      for (let e3 of r2.nodes ?? []) {
        let [r3, i2] = Gi(e3);
        n2 = i2 || n2, t2.push(...r3);
      }
    }
    return [
      t2,
      n2
    ];
  }
  function Ki(e2) {
    return e2.value.startsWith(`::`) || Ui[e2.value] !== void 0;
  }
  function qi(e2) {
    return Ki(e2) && Yi(e2).includes(`terminal`);
  }
  function Ji(e2, t2) {
    return e2.type !== `pseudo` || Ki(e2) ? false : Yi(t2).includes(`actionable`);
  }
  function Yi(e2) {
    return Ui[e2.value] ?? Ui.__default__;
  }
  var Xi = `:merge`;
  function Zi(e2, { context: t2, candidate: n2 }) {
    let r2 = (t2 == null ? void 0 : t2.tailwindConfig.prefix) ?? ``, i2 = e2.map((e3) => {
      let t3 = C().astSync(e3.format);
      return {
        ...e3,
        ast: e3.respectPrefix ? Pr(r2, t3) : t3
      };
    }), a2 = C.root({
      nodes: [
        C.selector({
          nodes: [
            C.className({
              value: U(n2)
            })
          ]
        })
      ]
    });
    for (let { ast: e3 } of i2) [a2, e3] = na(a2, e3), e3.walkNesting((e4) => e4.replaceWith(...a2.nodes[0].nodes)), a2 = e3;
    return a2;
  }
  function Qi(e2) {
    let t2 = [];
    for (; e2.prev() && e2.prev().type !== `combinator`; ) e2 = e2.prev();
    for (; e2 && e2.type !== `combinator`; ) t2.push(e2), e2 = e2.next();
    return t2;
  }
  function $i(e2) {
    return e2.sort((t2, n2) => t2.type === `tag` && n2.type === `class` ? -1 : t2.type === `class` && n2.type === `tag` ? 1 : t2.type === `class` && n2.type === `pseudo` && n2.value.startsWith(`::`) ? -1 : t2.type === `pseudo` && t2.value.startsWith(`::`) && n2.type === `class` ? 1 : e2.index(t2) - e2.index(n2)), e2;
  }
  function ea(e2, t2) {
    let n2 = false;
    e2.walk((e3) => {
      if (e3.type === `class` && e3.value === t2) return n2 = true, false;
    }), n2 || e2.remove();
  }
  function ta(e2, t2, { context: n2, candidate: r2, base: i2 }) {
    var _a2;
    let a2 = ((_a2 = n2 == null ? void 0 : n2.tailwindConfig) == null ? void 0 : _a2.separator) ?? `:`;
    i2 ?? (i2 = L(r2, a2).pop());
    let o2 = C().astSync(e2);
    if (o2.walkClasses((e3) => {
      e3.raws && e3.value.includes(i2) && (e3.raws.value = U(te(e3.raws.value)));
    }), o2.each((e3) => ea(e3, i2)), o2.length === 0) return null;
    let s2 = Array.isArray(t2) ? Zi(t2, {
      context: n2,
      candidate: r2
    }) : t2;
    if (s2 === null) return o2.toString();
    let c2 = C.comment({
      value: `/*__simple__*/`
    }), l2 = C.comment({
      value: `/*__simple__*/`
    });
    return o2.walkClasses((e3) => {
      if (e3.value !== i2) return;
      let t3 = e3.parent, n3 = s2.nodes[0].nodes;
      if (t3.nodes.length === 1) {
        e3.replaceWith(...n3);
        return;
      }
      let r3 = Qi(e3);
      t3.insertBefore(r3[0], c2), t3.insertAfter(r3[r3.length - 1], l2);
      for (let e4 of n3) t3.insertBefore(r3[0], e4.clone());
      e3.remove(), r3 = Qi(c2);
      let a3 = t3.index(c2);
      t3.nodes.splice(a3, r3.length, ...$i(C.selector({
        nodes: r3
      })).nodes), c2.remove(), l2.remove();
    }), o2.walkPseudos((e3) => {
      e3.value === Xi && e3.replaceWith(e3.nodes);
    }), o2.each((e3) => Wi(e3)), o2.toString();
  }
  function na(e2, t2) {
    let n2 = [];
    return e2.walkPseudos((e3) => {
      e3.value === Xi && n2.push({
        pseudo: e3,
        value: e3.nodes[0].toString()
      });
    }), t2.walkPseudos((e3) => {
      if (e3.value !== Xi) return;
      let t3 = e3.nodes[0].toString(), r2 = n2.find((e4) => e4.value === t3);
      if (!r2) return;
      let i2 = [], a2 = e3.next();
      for (; a2 && a2.type !== `combinator`; ) i2.push(a2), a2 = a2.next();
      let o2 = a2;
      r2.pseudo.parent.insertAfter(r2.pseudo, C.selector({
        nodes: i2.map((e4) => e4.clone())
      })), e3.remove(), i2.forEach((e4) => e4.remove()), o2 && o2.type === `combinator` && o2.remove();
    }), [
      e2,
      t2
    ];
  }
  function ra(e2) {
    return Fr(`.${U(e2)}`);
  }
  function ia(e2, t2) {
    return ra(aa(e2, t2));
  }
  function aa(e2, t2) {
    return t2 === `DEFAULT` ? e2 : t2 === `-` || t2 === `-DEFAULT` ? `-${e2}` : t2.startsWith(`-`) ? `-${e2}${t2}` : t2.startsWith(`/`) ? `${e2}${t2}` : `${e2}-${t2}`;
  }
  function oa(e2) {
    return [
      `fontSize`,
      `outline`
    ].includes(e2) ? (e3) => (typeof e3 == `function` && (e3 = e3({})), Array.isArray(e3) && (e3 = e3[0]), e3) : e2 === `fontFamily` ? (e3) => {
      typeof e3 == `function` && (e3 = e3({}));
      let t2 = Array.isArray(e3) && Nr(e3[1]) ? e3[0] : e3;
      return Array.isArray(t2) ? t2.join(`, `) : t2;
    } : [
      `boxShadow`,
      `transitionProperty`,
      `transitionDuration`,
      `transitionDelay`,
      `transitionTimingFunction`,
      `backgroundImage`,
      `backgroundSize`,
      `backgroundColor`,
      `cursor`,
      `animation`
    ].includes(e2) ? (e3) => (typeof e3 == `function` && (e3 = e3({})), Array.isArray(e3) && (e3 = e3.join(`, `)), e3) : [
      `gridTemplateColumns`,
      `gridTemplateRows`,
      `objectPosition`
    ].includes(e2) ? (e3) => (typeof e3 == `function` && (e3 = e3({})), typeof e3 == `string` && (e3 = S.list.comma(e3).join(` `)), e3) : (e3, t2 = {}) => (typeof e3 == `function` && (e3 = e3(t2)), e3);
  }
  function W(e2, t2 = [
    [
      e2,
      [
        e2
      ]
    ]
  ], { filterDefault: n2 = false, ...r2 } = {}) {
    let i2 = oa(e2);
    return function({ matchUtilities: a2, theme: o2 }) {
      for (let s2 of t2) {
        let t3 = Array.isArray(s2[0]) ? s2 : [
          s2
        ];
        a2(t3.reduce((e3, [t4, n3]) => Object.assign(e3, {
          [t4]: (e4) => n3.reduce((t5, n4) => Array.isArray(n4) ? Object.assign(t5, {
            [n4[0]]: n4[1]
          }) : Object.assign(t5, {
            [n4]: i2(e4)
          }), {})
        }), {}), {
          ...r2,
          values: n2 ? Object.fromEntries(Object.entries(o2(e2) ?? {}).filter(([e3]) => e3 !== `DEFAULT`)) : o2(e2)
        });
      }
    };
  }
  function sa(e2) {
    return e2 = Array.isArray(e2) ? e2 : [
      e2
    ], e2.map((e3) => {
      let t2 = e3.values.map((e4) => e4.raw === void 0 ? [
        e4.min && `(min-width: ${e4.min})`,
        e4.max && `(max-width: ${e4.max})`
      ].filter(Boolean).join(` and `) : e4.raw);
      return e3.not ? `not all and ${t2}` : t2;
    }).join(`, `);
  }
  var ca = /* @__PURE__ */ new Set([
    `normal`,
    `reverse`,
    `alternate`,
    `alternate-reverse`
  ]), la = /* @__PURE__ */ new Set([
    `running`,
    `paused`
  ]), ua = /* @__PURE__ */ new Set([
    `none`,
    `forwards`,
    `backwards`,
    `both`
  ]), da = /* @__PURE__ */ new Set([
    `infinite`
  ]), fa = /* @__PURE__ */ new Set([
    `linear`,
    `ease`,
    `ease-in`,
    `ease-out`,
    `ease-in-out`,
    `step-start`,
    `step-end`
  ]), pa = [
    `cubic-bezier`,
    `steps`
  ], ma = /\,(?![^(]*\))/g, ha = /\ +(?![^(]*\))/g, ga = /^(-?[\d.]+m?s)$/, _a = /^(\d+)$/;
  function va(e2) {
    return e2.split(ma).map((e3) => {
      let t2 = e3.trim(), n2 = {
        value: t2
      }, r2 = t2.split(ha), i2 = /* @__PURE__ */ new Set();
      for (let e4 of r2) !i2.has(`DIRECTIONS`) && ca.has(e4) ? (n2.direction = e4, i2.add(`DIRECTIONS`)) : !i2.has(`PLAY_STATES`) && la.has(e4) ? (n2.playState = e4, i2.add(`PLAY_STATES`)) : !i2.has(`FILL_MODES`) && ua.has(e4) ? (n2.fillMode = e4, i2.add(`FILL_MODES`)) : !i2.has(`ITERATION_COUNTS`) && (da.has(e4) || _a.test(e4)) ? (n2.iterationCount = e4, i2.add(`ITERATION_COUNTS`)) : !i2.has(`TIMING_FUNCTION`) && fa.has(e4) || !i2.has(`TIMING_FUNCTION`) && pa.some((t3) => e4.startsWith(`${t3}(`)) ? (n2.timingFunction = e4, i2.add(`TIMING_FUNCTION`)) : !i2.has(`DURATION`) && ga.test(e4) ? (n2.duration = e4, i2.add(`DURATION`)) : !i2.has(`DELAY`) && ga.test(e4) ? (n2.delay = e4, i2.add(`DELAY`)) : i2.has(`NAME`) ? (n2.unknown || (n2.unknown = []), n2.unknown.push(e4)) : (n2.name = e4, i2.add(`NAME`));
      return n2;
    });
  }
  var ya = (e2) => Object.assign({}, ...Object.entries(e2 ?? {}).flatMap(([e3, t2]) => typeof t2 == `object` ? Object.entries(ya(t2)).map(([t3, n2]) => ({
    [e3 + (t3 === `DEFAULT` ? `` : `-${t3}`)]: n2
  })) : [
    {
      [`${e3}`]: t2
    }
  ])), G = ya;
  function K(e2) {
    return typeof e2 == `function` ? e2({}) : e2;
  }
  var ba = `3.4.17`;
  function xa(e2, t2 = true) {
    return Array.isArray(e2) ? e2.map((e3) => {
      if (t2 && Array.isArray(e3)) throw Error("The tuple syntax is not supported for `screens`.");
      if (typeof e3 == `string`) return {
        name: e3.toString(),
        not: false,
        values: [
          {
            min: e3,
            max: void 0
          }
        ]
      };
      let [n2, r2] = e3;
      return n2 = n2.toString(), typeof r2 == `string` ? {
        name: n2,
        not: false,
        values: [
          {
            min: r2,
            max: void 0
          }
        ]
      } : Array.isArray(r2) ? {
        name: n2,
        not: false,
        values: r2.map((e4) => Ta(e4))
      } : {
        name: n2,
        not: false,
        values: [
          Ta(r2)
        ]
      };
    }) : xa(Object.entries(e2 ?? {}), false);
  }
  function Sa(e2) {
    return e2.values.length === 1 ? e2.values[0].raw === void 0 ? e2.values[0].min !== void 0 && e2.values[0].max !== void 0 ? {
      result: false,
      reason: `min-and-max`
    } : {
      result: true,
      reason: null
    } : {
      result: false,
      reason: `raw-values`
    } : {
      result: false,
      reason: `multiple-values`
    };
  }
  function Ca(e2, t2, n2) {
    let r2 = wa(t2, e2), i2 = wa(n2, e2), a2 = Sa(r2), o2 = Sa(i2);
    if (a2.reason === `multiple-values` || o2.reason === `multiple-values`) throw Error(`Attempted to sort a screen with multiple values. This should never happen. Please open a bug report.`);
    if (a2.reason === `raw-values` || o2.reason === `raw-values`) throw Error(`Attempted to sort a screen with raw values. This should never happen. Please open a bug report.`);
    if (a2.reason === `min-and-max` || o2.reason === `min-and-max`) throw Error(`Attempted to sort a screen with both min and max values. This should never happen. Please open a bug report.`);
    let { min: s2, max: c2 } = r2.values[0], { min: l2, max: u2 } = i2.values[0];
    t2.not && ([s2, c2] = [
      c2,
      s2
    ]), n2.not && ([l2, u2] = [
      u2,
      l2
    ]), s2 = s2 === void 0 ? s2 : parseFloat(s2), c2 = c2 === void 0 ? c2 : parseFloat(c2), l2 = l2 === void 0 ? l2 : parseFloat(l2), u2 = u2 === void 0 ? u2 : parseFloat(u2);
    let [d2, f2] = e2 === `min` ? [
      s2,
      l2
    ] : [
      u2,
      c2
    ];
    return d2 - f2;
  }
  function wa(e2, t2) {
    return typeof e2 == `object` ? e2 : {
      name: `arbitrary-screen`,
      values: [
        {
          [t2]: e2
        }
      ]
    };
  }
  function Ta({ "min-width": e2, min: t2 = e2, max: n2, raw: r2 } = {}) {
    return {
      min: t2,
      max: n2,
      raw: r2
    };
  }
  function Ea(e2, t2) {
    e2.walkDecls((e3) => {
      if (t2.includes(e3.prop)) {
        e3.remove();
        return;
      }
      for (let n2 of t2) e3.value.includes(`/ var(${n2})`) ? e3.value = e3.value.replace(`/ var(${n2})`, ``) : e3.value.includes(`/ var(${n2}, 1)`) && (e3.value = e3.value.replace(`/ var(${n2}, 1)`, ``));
    });
  }
  var q = {
    childVariant: ({ addVariant: e2 }) => {
      e2(`*`, `& > *`);
    },
    pseudoElementVariants: ({ addVariant: e2 }) => {
      e2(`first-letter`, `&::first-letter`), e2(`first-line`, `&::first-line`), e2(`marker`, [
        ({ container: e3 }) => (Ea(e3, [
          `--tw-text-opacity`
        ]), `& *::marker`),
        ({ container: e3 }) => (Ea(e3, [
          `--tw-text-opacity`
        ]), `&::marker`)
      ]), e2(`selection`, [
        `& *::selection`,
        `&::selection`
      ]), e2(`file`, `&::file-selector-button`), e2(`placeholder`, `&::placeholder`), e2(`backdrop`, `&::backdrop`), e2(`before`, ({ container: e3 }) => (e3.walkRules((e4) => {
        let t2 = false;
        e4.walkDecls(`content`, () => {
          t2 = true;
        }), t2 || e4.prepend(S.decl({
          prop: `content`,
          value: `var(--tw-content)`
        }));
      }), `&::before`)), e2(`after`, ({ container: e3 }) => (e3.walkRules((e4) => {
        let t2 = false;
        e4.walkDecls(`content`, () => {
          t2 = true;
        }), t2 || e4.prepend(S.decl({
          prop: `content`,
          value: `var(--tw-content)`
        }));
      }), `&::after`));
    },
    pseudoClassVariants: ({ addVariant: e2, matchVariant: t2, config: n2, prefix: r2 }) => {
      let i2 = [
        [
          `first`,
          `&:first-child`
        ],
        [
          `last`,
          `&:last-child`
        ],
        [
          `only`,
          `&:only-child`
        ],
        [
          `odd`,
          `&:nth-child(odd)`
        ],
        [
          `even`,
          `&:nth-child(even)`
        ],
        `first-of-type`,
        `last-of-type`,
        `only-of-type`,
        [
          `visited`,
          ({ container: e3 }) => (Ea(e3, [
            `--tw-text-opacity`,
            `--tw-border-opacity`,
            `--tw-bg-opacity`
          ]), `&:visited`)
        ],
        `target`,
        [
          `open`,
          `&[open]`
        ],
        `default`,
        `checked`,
        `indeterminate`,
        `placeholder-shown`,
        `autofill`,
        `optional`,
        `required`,
        `valid`,
        `invalid`,
        `in-range`,
        `out-of-range`,
        `read-only`,
        `empty`,
        `focus-within`,
        [
          `hover`,
          B(n2(), `hoverOnlyWhenSupported`) ? `@media (hover: hover) and (pointer: fine) { &:hover }` : `&:hover`
        ],
        `focus`,
        `focus-visible`,
        `active`,
        `enabled`,
        `disabled`
      ].map((e3) => Array.isArray(e3) ? e3 : [
        e3,
        `&:${e3}`
      ]);
      for (let [t3, n3] of i2) e2(t3, (e3) => typeof n3 == `function` ? n3(e3) : n3);
      let a2 = {
        group: (e3, { modifier: t3 }) => t3 ? [
          `:merge(${r2(`.group`)}\\/${U(t3)})`,
          ` &`
        ] : [
          `:merge(${r2(`.group`)})`,
          ` &`
        ],
        peer: (e3, { modifier: t3 }) => t3 ? [
          `:merge(${r2(`.peer`)}\\/${U(t3)})`,
          ` ~ &`
        ] : [
          `:merge(${r2(`.peer`)})`,
          ` ~ &`
        ]
      };
      for (let [e3, n3] of Object.entries(a2)) t2(e3, (e4 = ``, t3) => {
        let r3 = R(typeof e4 == `function` ? e4(t3) : e4);
        r3.includes(`&`) || (r3 = `&` + r3);
        let [i3, a3] = n3(``, t3), o2 = null, s2 = null, c2 = 0;
        for (let e5 = 0; e5 < r3.length; ++e5) {
          let t4 = r3[e5];
          t4 === `&` ? o2 = e5 : t4 === `'` || t4 === `"` ? c2 += 1 : o2 !== null && t4 === ` ` && !c2 && (s2 = e5);
        }
        return o2 !== null && s2 === null && (s2 = r3.length), r3.slice(0, o2) + i3 + r3.slice(o2 + 1, s2) + a3 + r3.slice(s2);
      }, {
        values: Object.fromEntries(i2),
        [Ra]: {
          respectPrefix: false
        }
      });
    },
    directionVariants: ({ addVariant: e2 }) => {
      e2(`ltr`, `&:where([dir="ltr"], [dir="ltr"] *)`), e2(`rtl`, `&:where([dir="rtl"], [dir="rtl"] *)`);
    },
    reducedMotionVariants: ({ addVariant: e2 }) => {
      e2(`motion-safe`, `@media (prefers-reduced-motion: no-preference)`), e2(`motion-reduce`, `@media (prefers-reduced-motion: reduce)`);
    },
    darkVariants: ({ config: e2, addVariant: t2 }) => {
      let [n2, r2 = `.dark`] = [].concat(e2(`darkMode`, `media`));
      if (n2 === false && (n2 = `media`, N.warn(`darkmode-false`, [
        "The `darkMode` option in your Tailwind CSS configuration is set to `false`, which now behaves the same as `media`.",
        "Change `darkMode` to `media` or remove it entirely.",
        `https://tailwindcss.com/docs/upgrade-guide#remove-dark-mode-configuration`
      ])), n2 === `variant`) {
        let e3;
        if (Array.isArray(r2) || typeof r2 == `function` ? e3 = r2 : typeof r2 == `string` && (e3 = [
          r2
        ]), Array.isArray(e3)) for (let t3 of e3) t3 === `.dark` ? (n2 = false, N.warn(`darkmode-variant-without-selector`, [
          "When using `variant` for `darkMode`, you must provide a selector.",
          'Example: `darkMode: ["variant", ".your-selector &"]`'
        ])) : t3.includes(`&`) || (n2 = false, N.warn(`darkmode-variant-without-ampersand`, [
          "When using `variant` for `darkMode`, your selector must contain `&`.",
          'Example `darkMode: ["variant", ".your-selector &"]`'
        ]));
        r2 = e3;
      }
      n2 === `selector` ? t2(`dark`, `&:where(${r2}, ${r2} *)`) : n2 === `media` ? t2(`dark`, `@media (prefers-color-scheme: dark)`) : n2 === `variant` ? t2(`dark`, r2) : n2 === `class` && t2(`dark`, `&:is(${r2} *)`);
    },
    printVariant: ({ addVariant: e2 }) => {
      e2(`print`, `@media print`);
    },
    screenVariants: ({ theme: e2, addVariant: t2, matchVariant: n2 }) => {
      let r2 = e2(`screens`) ?? {}, i2 = Object.values(r2).every((e3) => typeof e3 == `string`), a2 = xa(e2(`screens`)), o2 = /* @__PURE__ */ new Set([]);
      function s2(e3) {
        var _a2;
        return ((_a2 = e3.match(/(\D+)$/)) == null ? void 0 : _a2[1]) ?? `(none)`;
      }
      function c2(e3) {
        e3 !== void 0 && o2.add(s2(e3));
      }
      function l2(e3) {
        return c2(e3), o2.size === 1;
      }
      for (let e3 of a2) for (let t3 of e3.values) c2(t3.min), c2(t3.max);
      let u2 = o2.size <= 1;
      function d2(e3) {
        return Object.fromEntries(a2.filter((e4) => Sa(e4).result).map((t3) => {
          let { min: n3, max: r3 } = t3.values[0];
          if (e3 === `min` && n3 !== void 0) return t3;
          if (e3 === `min` && r3 !== void 0) return {
            ...t3,
            not: !t3.not
          };
          if (e3 === `max` && r3 !== void 0) return t3;
          if (e3 === `max` && n3 !== void 0) return {
            ...t3,
            not: !t3.not
          };
        }).map((e4) => [
          e4.name,
          e4
        ]));
      }
      function f2(e3) {
        return (t3, n3) => Ca(e3, t3.value, n3.value);
      }
      let p2 = f2(`max`), m2 = f2(`min`);
      function h2(e3) {
        return (t3) => {
          if (i2) if (u2) {
            if (typeof t3 == `string` && !l2(t3)) return N.warn(`minmax-have-mixed-units`, [
              "The `min-*` and `max-*` variants are not supported with a `screens` configuration containing mixed units."
            ]), [];
          } else return N.warn(`mixed-screen-units`, [
            "The `min-*` and `max-*` variants are not supported with a `screens` configuration containing mixed units."
          ]), [];
          else return N.warn(`complex-screen-config`, [
            "The `min-*` and `max-*` variants are not supported with a `screens` configuration containing objects."
          ]), [];
          return [
            `@media ${sa(wa(t3, e3))}`
          ];
        };
      }
      n2(`max`, h2(`max`), {
        sort: p2,
        values: i2 ? d2(`max`) : {}
      });
      let g2 = `min-screens`;
      for (let e3 of a2) t2(e3.name, `@media ${sa(e3)}`, {
        id: g2,
        sort: i2 && u2 ? m2 : void 0,
        value: e3
      });
      n2(`min`, h2(`min`), {
        id: g2,
        sort: m2
      });
    },
    supportsVariants: ({ matchVariant: e2, theme: t2 }) => {
      e2(`supports`, (e3 = ``) => {
        let t3 = R(e3), n2 = /^\w*\s*\(/.test(t3);
        return t3 = n2 ? t3.replace(/\b(and|or|not)\b/g, ` $1 `) : t3, n2 ? `@supports ${t3}` : (t3.includes(`:`) || (t3 = `${t3}: var(--tw)`), t3.startsWith(`(`) && t3.endsWith(`)`) || (t3 = `(${t3})`), `@supports ${t3}`);
      }, {
        values: t2(`supports`) ?? {}
      });
    },
    hasVariants: ({ matchVariant: e2, prefix: t2 }) => {
      e2(`has`, (e3) => `&:has(${R(e3)})`, {
        values: {},
        [Ra]: {
          respectPrefix: false
        }
      }), e2(`group-has`, (e3, { modifier: n2 }) => n2 ? `:merge(${t2(`.group`)}\\/${n2}):has(${R(e3)}) &` : `:merge(${t2(`.group`)}):has(${R(e3)}) &`, {
        values: {},
        [Ra]: {
          respectPrefix: false
        }
      }), e2(`peer-has`, (e3, { modifier: n2 }) => n2 ? `:merge(${t2(`.peer`)}\\/${n2}):has(${R(e3)}) ~ &` : `:merge(${t2(`.peer`)}):has(${R(e3)}) ~ &`, {
        values: {},
        [Ra]: {
          respectPrefix: false
        }
      });
    },
    ariaVariants: ({ matchVariant: e2, theme: t2 }) => {
      e2(`aria`, (e3) => `&[aria-${z(R(e3))}]`, {
        values: t2(`aria`) ?? {}
      }), e2(`group-aria`, (e3, { modifier: t3 }) => t3 ? `:merge(.group\\/${t3})[aria-${z(R(e3))}] &` : `:merge(.group)[aria-${z(R(e3))}] &`, {
        values: t2(`aria`) ?? {}
      }), e2(`peer-aria`, (e3, { modifier: t3 }) => t3 ? `:merge(.peer\\/${t3})[aria-${z(R(e3))}] ~ &` : `:merge(.peer)[aria-${z(R(e3))}] ~ &`, {
        values: t2(`aria`) ?? {}
      });
    },
    dataVariants: ({ matchVariant: e2, theme: t2 }) => {
      e2(`data`, (e3) => `&[data-${z(R(e3))}]`, {
        values: t2(`data`) ?? {}
      }), e2(`group-data`, (e3, { modifier: t3 }) => t3 ? `:merge(.group\\/${t3})[data-${z(R(e3))}] &` : `:merge(.group)[data-${z(R(e3))}] &`, {
        values: t2(`data`) ?? {}
      }), e2(`peer-data`, (e3, { modifier: t3 }) => t3 ? `:merge(.peer\\/${t3})[data-${z(R(e3))}] ~ &` : `:merge(.peer)[data-${z(R(e3))}] ~ &`, {
        values: t2(`data`) ?? {}
      });
    },
    orientationVariants: ({ addVariant: e2 }) => {
      e2(`portrait`, `@media (orientation: portrait)`), e2(`landscape`, `@media (orientation: landscape)`);
    },
    prefersContrastVariants: ({ addVariant: e2 }) => {
      e2(`contrast-more`, `@media (prefers-contrast: more)`), e2(`contrast-less`, `@media (prefers-contrast: less)`);
    },
    forcedColorsVariants: ({ addVariant: e2 }) => {
      e2(`forced-colors`, `@media (forced-colors: active)`);
    }
  }, J = [
    `translate(var(--tw-translate-x), var(--tw-translate-y))`,
    `rotate(var(--tw-rotate))`,
    `skewX(var(--tw-skew-x))`,
    `skewY(var(--tw-skew-y))`,
    `scaleX(var(--tw-scale-x))`,
    `scaleY(var(--tw-scale-y))`
  ].join(` `), Y = [
    `var(--tw-blur)`,
    `var(--tw-brightness)`,
    `var(--tw-contrast)`,
    `var(--tw-grayscale)`,
    `var(--tw-hue-rotate)`,
    `var(--tw-invert)`,
    `var(--tw-saturate)`,
    `var(--tw-sepia)`,
    `var(--tw-drop-shadow)`
  ].join(` `), X = [
    `var(--tw-backdrop-blur)`,
    `var(--tw-backdrop-brightness)`,
    `var(--tw-backdrop-contrast)`,
    `var(--tw-backdrop-grayscale)`,
    `var(--tw-backdrop-hue-rotate)`,
    `var(--tw-backdrop-invert)`,
    `var(--tw-backdrop-opacity)`,
    `var(--tw-backdrop-saturate)`,
    `var(--tw-backdrop-sepia)`
  ].join(` `), Da = {
    preflight: ({ addBase: e2 }) => {
      let t2 = S.parse(`/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: theme('borderColor.DEFAULT', currentColor); /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  tab-size: 4; /* 3 */
  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"); /* 4 */
  font-feature-settings: theme('fontFamily.sans[1].fontFeatureSettings', normal); /* 5 */
  font-variation-settings: theme('fontFamily.sans[1].fontVariationSettings', normal); /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace); /* 1 */
  font-feature-settings: theme('fontFamily.mono[1].fontFeatureSettings', normal); /* 2 */
  font-variation-settings: theme('fontFamily.mono[1].fontVariationSettings', normal); /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: theme('colors.gray.400', #9ca3af); /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
`);
      e2([
        S.comment({
          text: `! tailwindcss v${ba} | MIT License | https://tailwindcss.com`
        }),
        ...t2.nodes
      ]);
    },
    container: /* @__PURE__ */ (() => {
      function e2(e3 = []) {
        return e3.flatMap((e4) => e4.values.map((e5) => e5.min)).filter((e4) => e4 !== void 0);
      }
      function t2(e3, t3, n2) {
        if (typeof n2 > `u`) return [];
        if (!(typeof n2 == `object` && n2)) return [
          {
            screen: `DEFAULT`,
            minWidth: 0,
            padding: n2
          }
        ];
        let r2 = [];
        n2.DEFAULT && r2.push({
          screen: `DEFAULT`,
          minWidth: 0,
          padding: n2.DEFAULT
        });
        for (let i2 of e3) for (let e4 of t3) for (let { min: t4 } of e4.values) t4 === i2 && r2.push({
          minWidth: i2,
          padding: n2[e4.name]
        });
        return r2;
      }
      return function({ addComponents: n2, theme: r2 }) {
        let i2 = xa(r2(`container.screens`, r2(`screens`))), a2 = e2(i2), o2 = t2(a2, i2, r2(`container.padding`)), s2 = (e3) => {
          let t3 = o2.find((t4) => t4.minWidth === e3);
          return t3 ? {
            paddingRight: t3.padding,
            paddingLeft: t3.padding
          } : {};
        }, c2 = Array.from(new Set(a2.slice().sort((e3, t3) => parseInt(e3) - parseInt(t3)))).map((e3) => ({
          [`@media (min-width: ${e3})`]: {
            ".container": {
              "max-width": e3,
              ...s2(e3)
            }
          }
        }));
        n2([
          {
            ".container": Object.assign({
              width: `100%`
            }, r2(`container.center`, false) ? {
              marginRight: `auto`,
              marginLeft: `auto`
            } : {}, s2(0))
          },
          ...c2
        ]);
      };
    })(),
    accessibility: ({ addUtilities: e2 }) => {
      e2({
        ".sr-only": {
          position: `absolute`,
          width: `1px`,
          height: `1px`,
          padding: `0`,
          margin: `-1px`,
          overflow: `hidden`,
          clip: `rect(0, 0, 0, 0)`,
          whiteSpace: `nowrap`,
          borderWidth: `0`
        },
        ".not-sr-only": {
          position: `static`,
          width: `auto`,
          height: `auto`,
          padding: `0`,
          margin: `0`,
          overflow: `visible`,
          clip: `auto`,
          whiteSpace: `normal`
        }
      });
    },
    pointerEvents: ({ addUtilities: e2 }) => {
      e2({
        ".pointer-events-none": {
          "pointer-events": `none`
        },
        ".pointer-events-auto": {
          "pointer-events": `auto`
        }
      });
    },
    visibility: ({ addUtilities: e2 }) => {
      e2({
        ".visible": {
          visibility: `visible`
        },
        ".invisible": {
          visibility: `hidden`
        },
        ".collapse": {
          visibility: `collapse`
        }
      });
    },
    position: ({ addUtilities: e2 }) => {
      e2({
        ".static": {
          position: `static`
        },
        ".fixed": {
          position: `fixed`
        },
        ".absolute": {
          position: `absolute`
        },
        ".relative": {
          position: `relative`
        },
        ".sticky": {
          position: `sticky`
        }
      });
    },
    inset: W(`inset`, [
      [
        `inset`,
        [
          `inset`
        ]
      ],
      [
        [
          `inset-x`,
          [
            `left`,
            `right`
          ]
        ],
        [
          `inset-y`,
          [
            `top`,
            `bottom`
          ]
        ]
      ],
      [
        [
          `start`,
          [
            `inset-inline-start`
          ]
        ],
        [
          `end`,
          [
            `inset-inline-end`
          ]
        ],
        [
          `top`,
          [
            `top`
          ]
        ],
        [
          `right`,
          [
            `right`
          ]
        ],
        [
          `bottom`,
          [
            `bottom`
          ]
        ],
        [
          `left`,
          [
            `left`
          ]
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    isolation: ({ addUtilities: e2 }) => {
      e2({
        ".isolate": {
          isolation: `isolate`
        },
        ".isolation-auto": {
          isolation: `auto`
        }
      });
    },
    zIndex: W(`zIndex`, [
      [
        `z`,
        [
          `zIndex`
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    order: W(`order`, void 0, {
      supportsNegativeValues: true
    }),
    gridColumn: W(`gridColumn`, [
      [
        `col`,
        [
          `gridColumn`
        ]
      ]
    ]),
    gridColumnStart: W(`gridColumnStart`, [
      [
        `col-start`,
        [
          `gridColumnStart`
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    gridColumnEnd: W(`gridColumnEnd`, [
      [
        `col-end`,
        [
          `gridColumnEnd`
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    gridRow: W(`gridRow`, [
      [
        `row`,
        [
          `gridRow`
        ]
      ]
    ]),
    gridRowStart: W(`gridRowStart`, [
      [
        `row-start`,
        [
          `gridRowStart`
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    gridRowEnd: W(`gridRowEnd`, [
      [
        `row-end`,
        [
          `gridRowEnd`
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    float: ({ addUtilities: e2 }) => {
      e2({
        ".float-start": {
          float: `inline-start`
        },
        ".float-end": {
          float: `inline-end`
        },
        ".float-right": {
          float: `right`
        },
        ".float-left": {
          float: `left`
        },
        ".float-none": {
          float: `none`
        }
      });
    },
    clear: ({ addUtilities: e2 }) => {
      e2({
        ".clear-start": {
          clear: `inline-start`
        },
        ".clear-end": {
          clear: `inline-end`
        },
        ".clear-left": {
          clear: `left`
        },
        ".clear-right": {
          clear: `right`
        },
        ".clear-both": {
          clear: `both`
        },
        ".clear-none": {
          clear: `none`
        }
      });
    },
    margin: W(`margin`, [
      [
        `m`,
        [
          `margin`
        ]
      ],
      [
        [
          `mx`,
          [
            `margin-left`,
            `margin-right`
          ]
        ],
        [
          `my`,
          [
            `margin-top`,
            `margin-bottom`
          ]
        ]
      ],
      [
        [
          `ms`,
          [
            `margin-inline-start`
          ]
        ],
        [
          `me`,
          [
            `margin-inline-end`
          ]
        ],
        [
          `mt`,
          [
            `margin-top`
          ]
        ],
        [
          `mr`,
          [
            `margin-right`
          ]
        ],
        [
          `mb`,
          [
            `margin-bottom`
          ]
        ],
        [
          `ml`,
          [
            `margin-left`
          ]
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    boxSizing: ({ addUtilities: e2 }) => {
      e2({
        ".box-border": {
          "box-sizing": `border-box`
        },
        ".box-content": {
          "box-sizing": `content-box`
        }
      });
    },
    lineClamp: ({ matchUtilities: e2, addUtilities: t2, theme: n2 }) => {
      e2({
        "line-clamp": (e3) => ({
          overflow: `hidden`,
          display: `-webkit-box`,
          "-webkit-box-orient": `vertical`,
          "-webkit-line-clamp": `${e3}`
        })
      }, {
        values: n2(`lineClamp`)
      }), t2({
        ".line-clamp-none": {
          overflow: `visible`,
          display: `block`,
          "-webkit-box-orient": `horizontal`,
          "-webkit-line-clamp": `none`
        }
      });
    },
    display: ({ addUtilities: e2 }) => {
      e2({
        ".block": {
          display: `block`
        },
        ".inline-block": {
          display: `inline-block`
        },
        ".inline": {
          display: `inline`
        },
        ".flex": {
          display: `flex`
        },
        ".inline-flex": {
          display: `inline-flex`
        },
        ".table": {
          display: `table`
        },
        ".inline-table": {
          display: `inline-table`
        },
        ".table-caption": {
          display: `table-caption`
        },
        ".table-cell": {
          display: `table-cell`
        },
        ".table-column": {
          display: `table-column`
        },
        ".table-column-group": {
          display: `table-column-group`
        },
        ".table-footer-group": {
          display: `table-footer-group`
        },
        ".table-header-group": {
          display: `table-header-group`
        },
        ".table-row-group": {
          display: `table-row-group`
        },
        ".table-row": {
          display: `table-row`
        },
        ".flow-root": {
          display: `flow-root`
        },
        ".grid": {
          display: `grid`
        },
        ".inline-grid": {
          display: `inline-grid`
        },
        ".contents": {
          display: `contents`
        },
        ".list-item": {
          display: `list-item`
        },
        ".hidden": {
          display: `none`
        }
      });
    },
    aspectRatio: W(`aspectRatio`, [
      [
        `aspect`,
        [
          `aspect-ratio`
        ]
      ]
    ]),
    size: W(`size`, [
      [
        `size`,
        [
          `width`,
          `height`
        ]
      ]
    ]),
    height: W(`height`, [
      [
        `h`,
        [
          `height`
        ]
      ]
    ]),
    maxHeight: W(`maxHeight`, [
      [
        `max-h`,
        [
          `maxHeight`
        ]
      ]
    ]),
    minHeight: W(`minHeight`, [
      [
        `min-h`,
        [
          `minHeight`
        ]
      ]
    ]),
    width: W(`width`, [
      [
        `w`,
        [
          `width`
        ]
      ]
    ]),
    minWidth: W(`minWidth`, [
      [
        `min-w`,
        [
          `minWidth`
        ]
      ]
    ]),
    maxWidth: W(`maxWidth`, [
      [
        `max-w`,
        [
          `maxWidth`
        ]
      ]
    ]),
    flex: W(`flex`),
    flexShrink: W(`flexShrink`, [
      [
        `flex-shrink`,
        [
          `flex-shrink`
        ]
      ],
      [
        `shrink`,
        [
          `flex-shrink`
        ]
      ]
    ]),
    flexGrow: W(`flexGrow`, [
      [
        `flex-grow`,
        [
          `flex-grow`
        ]
      ],
      [
        `grow`,
        [
          `flex-grow`
        ]
      ]
    ]),
    flexBasis: W(`flexBasis`, [
      [
        `basis`,
        [
          `flex-basis`
        ]
      ]
    ]),
    tableLayout: ({ addUtilities: e2 }) => {
      e2({
        ".table-auto": {
          "table-layout": `auto`
        },
        ".table-fixed": {
          "table-layout": `fixed`
        }
      });
    },
    captionSide: ({ addUtilities: e2 }) => {
      e2({
        ".caption-top": {
          "caption-side": `top`
        },
        ".caption-bottom": {
          "caption-side": `bottom`
        }
      });
    },
    borderCollapse: ({ addUtilities: e2 }) => {
      e2({
        ".border-collapse": {
          "border-collapse": `collapse`
        },
        ".border-separate": {
          "border-collapse": `separate`
        }
      });
    },
    borderSpacing: ({ addDefaults: e2, matchUtilities: t2, theme: n2 }) => {
      e2(`border-spacing`, {
        "--tw-border-spacing-x": 0,
        "--tw-border-spacing-y": 0
      }), t2({
        "border-spacing": (e3) => ({
          "--tw-border-spacing-x": e3,
          "--tw-border-spacing-y": e3,
          "@defaults border-spacing": {},
          "border-spacing": `var(--tw-border-spacing-x) var(--tw-border-spacing-y)`
        }),
        "border-spacing-x": (e3) => ({
          "--tw-border-spacing-x": e3,
          "@defaults border-spacing": {},
          "border-spacing": `var(--tw-border-spacing-x) var(--tw-border-spacing-y)`
        }),
        "border-spacing-y": (e3) => ({
          "--tw-border-spacing-y": e3,
          "@defaults border-spacing": {},
          "border-spacing": `var(--tw-border-spacing-x) var(--tw-border-spacing-y)`
        })
      }, {
        values: n2(`borderSpacing`)
      });
    },
    transformOrigin: W(`transformOrigin`, [
      [
        `origin`,
        [
          `transformOrigin`
        ]
      ]
    ]),
    translate: W(`translate`, [
      [
        [
          `translate-x`,
          [
            [
              `@defaults transform`,
              {}
            ],
            `--tw-translate-x`,
            [
              `transform`,
              J
            ]
          ]
        ],
        [
          `translate-y`,
          [
            [
              `@defaults transform`,
              {}
            ],
            `--tw-translate-y`,
            [
              `transform`,
              J
            ]
          ]
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    rotate: W(`rotate`, [
      [
        `rotate`,
        [
          [
            `@defaults transform`,
            {}
          ],
          `--tw-rotate`,
          [
            `transform`,
            J
          ]
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    skew: W(`skew`, [
      [
        [
          `skew-x`,
          [
            [
              `@defaults transform`,
              {}
            ],
            `--tw-skew-x`,
            [
              `transform`,
              J
            ]
          ]
        ],
        [
          `skew-y`,
          [
            [
              `@defaults transform`,
              {}
            ],
            `--tw-skew-y`,
            [
              `transform`,
              J
            ]
          ]
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    scale: W(`scale`, [
      [
        `scale`,
        [
          [
            `@defaults transform`,
            {}
          ],
          `--tw-scale-x`,
          `--tw-scale-y`,
          [
            `transform`,
            J
          ]
        ]
      ],
      [
        [
          `scale-x`,
          [
            [
              `@defaults transform`,
              {}
            ],
            `--tw-scale-x`,
            [
              `transform`,
              J
            ]
          ]
        ],
        [
          `scale-y`,
          [
            [
              `@defaults transform`,
              {}
            ],
            `--tw-scale-y`,
            [
              `transform`,
              J
            ]
          ]
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    transform: ({ addDefaults: e2, addUtilities: t2 }) => {
      e2(`transform`, {
        "--tw-translate-x": `0`,
        "--tw-translate-y": `0`,
        "--tw-rotate": `0`,
        "--tw-skew-x": `0`,
        "--tw-skew-y": `0`,
        "--tw-scale-x": `1`,
        "--tw-scale-y": `1`
      }), t2({
        ".transform": {
          "@defaults transform": {},
          transform: J
        },
        ".transform-cpu": {
          transform: J
        },
        ".transform-gpu": {
          transform: J.replace(`translate(var(--tw-translate-x), var(--tw-translate-y))`, `translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)`)
        },
        ".transform-none": {
          transform: `none`
        }
      });
    },
    animation: ({ matchUtilities: e2, theme: t2, config: n2 }) => {
      let r2 = (e3) => U(n2(`prefix`) + e3), i2 = Object.fromEntries(Object.entries(t2(`keyframes`) ?? {}).map(([e3, t3]) => [
        e3,
        {
          [`@keyframes ${r2(e3)}`]: t3
        }
      ]));
      e2({
        animate: (e3) => {
          let t3 = va(e3);
          return [
            ...t3.flatMap((e4) => i2[e4.name]),
            {
              animation: t3.map(({ name: e4, value: t4 }) => e4 === void 0 || i2[e4] === void 0 ? t4 : t4.replace(e4, r2(e4))).join(`, `)
            }
          ];
        }
      }, {
        values: t2(`animation`)
      });
    },
    cursor: W(`cursor`),
    touchAction: ({ addDefaults: e2, addUtilities: t2 }) => {
      e2(`touch-action`, {
        "--tw-pan-x": ` `,
        "--tw-pan-y": ` `,
        "--tw-pinch-zoom": ` `
      });
      let n2 = `var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)`;
      t2({
        ".touch-auto": {
          "touch-action": `auto`
        },
        ".touch-none": {
          "touch-action": `none`
        },
        ".touch-pan-x": {
          "@defaults touch-action": {},
          "--tw-pan-x": `pan-x`,
          "touch-action": n2
        },
        ".touch-pan-left": {
          "@defaults touch-action": {},
          "--tw-pan-x": `pan-left`,
          "touch-action": n2
        },
        ".touch-pan-right": {
          "@defaults touch-action": {},
          "--tw-pan-x": `pan-right`,
          "touch-action": n2
        },
        ".touch-pan-y": {
          "@defaults touch-action": {},
          "--tw-pan-y": `pan-y`,
          "touch-action": n2
        },
        ".touch-pan-up": {
          "@defaults touch-action": {},
          "--tw-pan-y": `pan-up`,
          "touch-action": n2
        },
        ".touch-pan-down": {
          "@defaults touch-action": {},
          "--tw-pan-y": `pan-down`,
          "touch-action": n2
        },
        ".touch-pinch-zoom": {
          "@defaults touch-action": {},
          "--tw-pinch-zoom": `pinch-zoom`,
          "touch-action": n2
        },
        ".touch-manipulation": {
          "touch-action": `manipulation`
        }
      });
    },
    userSelect: ({ addUtilities: e2 }) => {
      e2({
        ".select-none": {
          "user-select": `none`
        },
        ".select-text": {
          "user-select": `text`
        },
        ".select-all": {
          "user-select": `all`
        },
        ".select-auto": {
          "user-select": `auto`
        }
      });
    },
    resize: ({ addUtilities: e2 }) => {
      e2({
        ".resize-none": {
          resize: `none`
        },
        ".resize-y": {
          resize: `vertical`
        },
        ".resize-x": {
          resize: `horizontal`
        },
        ".resize": {
          resize: `both`
        }
      });
    },
    scrollSnapType: ({ addDefaults: e2, addUtilities: t2 }) => {
      e2(`scroll-snap-type`, {
        "--tw-scroll-snap-strictness": `proximity`
      }), t2({
        ".snap-none": {
          "scroll-snap-type": `none`
        },
        ".snap-x": {
          "@defaults scroll-snap-type": {},
          "scroll-snap-type": `x var(--tw-scroll-snap-strictness)`
        },
        ".snap-y": {
          "@defaults scroll-snap-type": {},
          "scroll-snap-type": `y var(--tw-scroll-snap-strictness)`
        },
        ".snap-both": {
          "@defaults scroll-snap-type": {},
          "scroll-snap-type": `both var(--tw-scroll-snap-strictness)`
        },
        ".snap-mandatory": {
          "--tw-scroll-snap-strictness": `mandatory`
        },
        ".snap-proximity": {
          "--tw-scroll-snap-strictness": `proximity`
        }
      });
    },
    scrollSnapAlign: ({ addUtilities: e2 }) => {
      e2({
        ".snap-start": {
          "scroll-snap-align": `start`
        },
        ".snap-end": {
          "scroll-snap-align": `end`
        },
        ".snap-center": {
          "scroll-snap-align": `center`
        },
        ".snap-align-none": {
          "scroll-snap-align": `none`
        }
      });
    },
    scrollSnapStop: ({ addUtilities: e2 }) => {
      e2({
        ".snap-normal": {
          "scroll-snap-stop": `normal`
        },
        ".snap-always": {
          "scroll-snap-stop": `always`
        }
      });
    },
    scrollMargin: W(`scrollMargin`, [
      [
        `scroll-m`,
        [
          `scroll-margin`
        ]
      ],
      [
        [
          `scroll-mx`,
          [
            `scroll-margin-left`,
            `scroll-margin-right`
          ]
        ],
        [
          `scroll-my`,
          [
            `scroll-margin-top`,
            `scroll-margin-bottom`
          ]
        ]
      ],
      [
        [
          `scroll-ms`,
          [
            `scroll-margin-inline-start`
          ]
        ],
        [
          `scroll-me`,
          [
            `scroll-margin-inline-end`
          ]
        ],
        [
          `scroll-mt`,
          [
            `scroll-margin-top`
          ]
        ],
        [
          `scroll-mr`,
          [
            `scroll-margin-right`
          ]
        ],
        [
          `scroll-mb`,
          [
            `scroll-margin-bottom`
          ]
        ],
        [
          `scroll-ml`,
          [
            `scroll-margin-left`
          ]
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    scrollPadding: W(`scrollPadding`, [
      [
        `scroll-p`,
        [
          `scroll-padding`
        ]
      ],
      [
        [
          `scroll-px`,
          [
            `scroll-padding-left`,
            `scroll-padding-right`
          ]
        ],
        [
          `scroll-py`,
          [
            `scroll-padding-top`,
            `scroll-padding-bottom`
          ]
        ]
      ],
      [
        [
          `scroll-ps`,
          [
            `scroll-padding-inline-start`
          ]
        ],
        [
          `scroll-pe`,
          [
            `scroll-padding-inline-end`
          ]
        ],
        [
          `scroll-pt`,
          [
            `scroll-padding-top`
          ]
        ],
        [
          `scroll-pr`,
          [
            `scroll-padding-right`
          ]
        ],
        [
          `scroll-pb`,
          [
            `scroll-padding-bottom`
          ]
        ],
        [
          `scroll-pl`,
          [
            `scroll-padding-left`
          ]
        ]
      ]
    ]),
    listStylePosition: ({ addUtilities: e2 }) => {
      e2({
        ".list-inside": {
          "list-style-position": `inside`
        },
        ".list-outside": {
          "list-style-position": `outside`
        }
      });
    },
    listStyleType: W(`listStyleType`, [
      [
        `list`,
        [
          `listStyleType`
        ]
      ]
    ]),
    listStyleImage: W(`listStyleImage`, [
      [
        `list-image`,
        [
          `listStyleImage`
        ]
      ]
    ]),
    appearance: ({ addUtilities: e2 }) => {
      e2({
        ".appearance-none": {
          appearance: `none`
        },
        ".appearance-auto": {
          appearance: `auto`
        }
      });
    },
    columns: W(`columns`, [
      [
        `columns`,
        [
          `columns`
        ]
      ]
    ]),
    breakBefore: ({ addUtilities: e2 }) => {
      e2({
        ".break-before-auto": {
          "break-before": `auto`
        },
        ".break-before-avoid": {
          "break-before": `avoid`
        },
        ".break-before-all": {
          "break-before": `all`
        },
        ".break-before-avoid-page": {
          "break-before": `avoid-page`
        },
        ".break-before-page": {
          "break-before": `page`
        },
        ".break-before-left": {
          "break-before": `left`
        },
        ".break-before-right": {
          "break-before": `right`
        },
        ".break-before-column": {
          "break-before": `column`
        }
      });
    },
    breakInside: ({ addUtilities: e2 }) => {
      e2({
        ".break-inside-auto": {
          "break-inside": `auto`
        },
        ".break-inside-avoid": {
          "break-inside": `avoid`
        },
        ".break-inside-avoid-page": {
          "break-inside": `avoid-page`
        },
        ".break-inside-avoid-column": {
          "break-inside": `avoid-column`
        }
      });
    },
    breakAfter: ({ addUtilities: e2 }) => {
      e2({
        ".break-after-auto": {
          "break-after": `auto`
        },
        ".break-after-avoid": {
          "break-after": `avoid`
        },
        ".break-after-all": {
          "break-after": `all`
        },
        ".break-after-avoid-page": {
          "break-after": `avoid-page`
        },
        ".break-after-page": {
          "break-after": `page`
        },
        ".break-after-left": {
          "break-after": `left`
        },
        ".break-after-right": {
          "break-after": `right`
        },
        ".break-after-column": {
          "break-after": `column`
        }
      });
    },
    gridAutoColumns: W(`gridAutoColumns`, [
      [
        `auto-cols`,
        [
          `gridAutoColumns`
        ]
      ]
    ]),
    gridAutoFlow: ({ addUtilities: e2 }) => {
      e2({
        ".grid-flow-row": {
          gridAutoFlow: `row`
        },
        ".grid-flow-col": {
          gridAutoFlow: `column`
        },
        ".grid-flow-dense": {
          gridAutoFlow: `dense`
        },
        ".grid-flow-row-dense": {
          gridAutoFlow: `row dense`
        },
        ".grid-flow-col-dense": {
          gridAutoFlow: `column dense`
        }
      });
    },
    gridAutoRows: W(`gridAutoRows`, [
      [
        `auto-rows`,
        [
          `gridAutoRows`
        ]
      ]
    ]),
    gridTemplateColumns: W(`gridTemplateColumns`, [
      [
        `grid-cols`,
        [
          `gridTemplateColumns`
        ]
      ]
    ]),
    gridTemplateRows: W(`gridTemplateRows`, [
      [
        `grid-rows`,
        [
          `gridTemplateRows`
        ]
      ]
    ]),
    flexDirection: ({ addUtilities: e2 }) => {
      e2({
        ".flex-row": {
          "flex-direction": `row`
        },
        ".flex-row-reverse": {
          "flex-direction": `row-reverse`
        },
        ".flex-col": {
          "flex-direction": `column`
        },
        ".flex-col-reverse": {
          "flex-direction": `column-reverse`
        }
      });
    },
    flexWrap: ({ addUtilities: e2 }) => {
      e2({
        ".flex-wrap": {
          "flex-wrap": `wrap`
        },
        ".flex-wrap-reverse": {
          "flex-wrap": `wrap-reverse`
        },
        ".flex-nowrap": {
          "flex-wrap": `nowrap`
        }
      });
    },
    placeContent: ({ addUtilities: e2 }) => {
      e2({
        ".place-content-center": {
          "place-content": `center`
        },
        ".place-content-start": {
          "place-content": `start`
        },
        ".place-content-end": {
          "place-content": `end`
        },
        ".place-content-between": {
          "place-content": `space-between`
        },
        ".place-content-around": {
          "place-content": `space-around`
        },
        ".place-content-evenly": {
          "place-content": `space-evenly`
        },
        ".place-content-baseline": {
          "place-content": `baseline`
        },
        ".place-content-stretch": {
          "place-content": `stretch`
        }
      });
    },
    placeItems: ({ addUtilities: e2 }) => {
      e2({
        ".place-items-start": {
          "place-items": `start`
        },
        ".place-items-end": {
          "place-items": `end`
        },
        ".place-items-center": {
          "place-items": `center`
        },
        ".place-items-baseline": {
          "place-items": `baseline`
        },
        ".place-items-stretch": {
          "place-items": `stretch`
        }
      });
    },
    alignContent: ({ addUtilities: e2 }) => {
      e2({
        ".content-normal": {
          "align-content": `normal`
        },
        ".content-center": {
          "align-content": `center`
        },
        ".content-start": {
          "align-content": `flex-start`
        },
        ".content-end": {
          "align-content": `flex-end`
        },
        ".content-between": {
          "align-content": `space-between`
        },
        ".content-around": {
          "align-content": `space-around`
        },
        ".content-evenly": {
          "align-content": `space-evenly`
        },
        ".content-baseline": {
          "align-content": `baseline`
        },
        ".content-stretch": {
          "align-content": `stretch`
        }
      });
    },
    alignItems: ({ addUtilities: e2 }) => {
      e2({
        ".items-start": {
          "align-items": `flex-start`
        },
        ".items-end": {
          "align-items": `flex-end`
        },
        ".items-center": {
          "align-items": `center`
        },
        ".items-baseline": {
          "align-items": `baseline`
        },
        ".items-stretch": {
          "align-items": `stretch`
        }
      });
    },
    justifyContent: ({ addUtilities: e2 }) => {
      e2({
        ".justify-normal": {
          "justify-content": `normal`
        },
        ".justify-start": {
          "justify-content": `flex-start`
        },
        ".justify-end": {
          "justify-content": `flex-end`
        },
        ".justify-center": {
          "justify-content": `center`
        },
        ".justify-between": {
          "justify-content": `space-between`
        },
        ".justify-around": {
          "justify-content": `space-around`
        },
        ".justify-evenly": {
          "justify-content": `space-evenly`
        },
        ".justify-stretch": {
          "justify-content": `stretch`
        }
      });
    },
    justifyItems: ({ addUtilities: e2 }) => {
      e2({
        ".justify-items-start": {
          "justify-items": `start`
        },
        ".justify-items-end": {
          "justify-items": `end`
        },
        ".justify-items-center": {
          "justify-items": `center`
        },
        ".justify-items-stretch": {
          "justify-items": `stretch`
        }
      });
    },
    gap: W(`gap`, [
      [
        `gap`,
        [
          `gap`
        ]
      ],
      [
        [
          `gap-x`,
          [
            `columnGap`
          ]
        ],
        [
          `gap-y`,
          [
            `rowGap`
          ]
        ]
      ]
    ]),
    space: ({ matchUtilities: e2, addUtilities: t2, theme: n2 }) => {
      e2({
        "space-x": (e3) => (e3 = e3 === `0` ? `0px` : e3, {
          "& > :not([hidden]) ~ :not([hidden])": {
            "--tw-space-x-reverse": `0`,
            "margin-right": `calc(${e3} * var(--tw-space-x-reverse))`,
            "margin-left": `calc(${e3} * calc(1 - var(--tw-space-x-reverse)))`
          }
        }),
        "space-y": (e3) => (e3 = e3 === `0` ? `0px` : e3, {
          "& > :not([hidden]) ~ :not([hidden])": {
            "--tw-space-y-reverse": `0`,
            "margin-top": `calc(${e3} * calc(1 - var(--tw-space-y-reverse)))`,
            "margin-bottom": `calc(${e3} * var(--tw-space-y-reverse))`
          }
        })
      }, {
        values: n2(`space`),
        supportsNegativeValues: true
      }), t2({
        ".space-y-reverse > :not([hidden]) ~ :not([hidden])": {
          "--tw-space-y-reverse": `1`
        },
        ".space-x-reverse > :not([hidden]) ~ :not([hidden])": {
          "--tw-space-x-reverse": `1`
        }
      });
    },
    divideWidth: ({ matchUtilities: e2, addUtilities: t2, theme: n2 }) => {
      e2({
        "divide-x": (e3) => (e3 = e3 === `0` ? `0px` : e3, {
          "& > :not([hidden]) ~ :not([hidden])": {
            "@defaults border-width": {},
            "--tw-divide-x-reverse": `0`,
            "border-right-width": `calc(${e3} * var(--tw-divide-x-reverse))`,
            "border-left-width": `calc(${e3} * calc(1 - var(--tw-divide-x-reverse)))`
          }
        }),
        "divide-y": (e3) => (e3 = e3 === `0` ? `0px` : e3, {
          "& > :not([hidden]) ~ :not([hidden])": {
            "@defaults border-width": {},
            "--tw-divide-y-reverse": `0`,
            "border-top-width": `calc(${e3} * calc(1 - var(--tw-divide-y-reverse)))`,
            "border-bottom-width": `calc(${e3} * var(--tw-divide-y-reverse))`
          }
        })
      }, {
        values: n2(`divideWidth`),
        type: [
          `line-width`,
          `length`,
          `any`
        ]
      }), t2({
        ".divide-y-reverse > :not([hidden]) ~ :not([hidden])": {
          "@defaults border-width": {},
          "--tw-divide-y-reverse": `1`
        },
        ".divide-x-reverse > :not([hidden]) ~ :not([hidden])": {
          "@defaults border-width": {},
          "--tw-divide-x-reverse": `1`
        }
      });
    },
    divideStyle: ({ addUtilities: e2 }) => {
      e2({
        ".divide-solid > :not([hidden]) ~ :not([hidden])": {
          "border-style": `solid`
        },
        ".divide-dashed > :not([hidden]) ~ :not([hidden])": {
          "border-style": `dashed`
        },
        ".divide-dotted > :not([hidden]) ~ :not([hidden])": {
          "border-style": `dotted`
        },
        ".divide-double > :not([hidden]) ~ :not([hidden])": {
          "border-style": `double`
        },
        ".divide-none > :not([hidden]) ~ :not([hidden])": {
          "border-style": `none`
        }
      });
    },
    divideColor: ({ matchUtilities: e2, theme: t2, corePlugins: n2 }) => {
      e2({
        divide: (e3) => n2(`divideOpacity`) ? {
          "& > :not([hidden]) ~ :not([hidden])": I({
            color: e3,
            property: `border-color`,
            variable: `--tw-divide-opacity`
          })
        } : {
          "& > :not([hidden]) ~ :not([hidden])": {
            "border-color": K(e3)
          }
        }
      }, {
        values: (({ DEFAULT: e3, ...t3 }) => t3)(G(t2(`divideColor`))),
        type: [
          `color`,
          `any`
        ]
      });
    },
    divideOpacity: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        "divide-opacity": (e3) => ({
          "& > :not([hidden]) ~ :not([hidden])": {
            "--tw-divide-opacity": e3
          }
        })
      }, {
        values: t2(`divideOpacity`)
      });
    },
    placeSelf: ({ addUtilities: e2 }) => {
      e2({
        ".place-self-auto": {
          "place-self": `auto`
        },
        ".place-self-start": {
          "place-self": `start`
        },
        ".place-self-end": {
          "place-self": `end`
        },
        ".place-self-center": {
          "place-self": `center`
        },
        ".place-self-stretch": {
          "place-self": `stretch`
        }
      });
    },
    alignSelf: ({ addUtilities: e2 }) => {
      e2({
        ".self-auto": {
          "align-self": `auto`
        },
        ".self-start": {
          "align-self": `flex-start`
        },
        ".self-end": {
          "align-self": `flex-end`
        },
        ".self-center": {
          "align-self": `center`
        },
        ".self-stretch": {
          "align-self": `stretch`
        },
        ".self-baseline": {
          "align-self": `baseline`
        }
      });
    },
    justifySelf: ({ addUtilities: e2 }) => {
      e2({
        ".justify-self-auto": {
          "justify-self": `auto`
        },
        ".justify-self-start": {
          "justify-self": `start`
        },
        ".justify-self-end": {
          "justify-self": `end`
        },
        ".justify-self-center": {
          "justify-self": `center`
        },
        ".justify-self-stretch": {
          "justify-self": `stretch`
        }
      });
    },
    overflow: ({ addUtilities: e2 }) => {
      e2({
        ".overflow-auto": {
          overflow: `auto`
        },
        ".overflow-hidden": {
          overflow: `hidden`
        },
        ".overflow-clip": {
          overflow: `clip`
        },
        ".overflow-visible": {
          overflow: `visible`
        },
        ".overflow-scroll": {
          overflow: `scroll`
        },
        ".overflow-x-auto": {
          "overflow-x": `auto`
        },
        ".overflow-y-auto": {
          "overflow-y": `auto`
        },
        ".overflow-x-hidden": {
          "overflow-x": `hidden`
        },
        ".overflow-y-hidden": {
          "overflow-y": `hidden`
        },
        ".overflow-x-clip": {
          "overflow-x": `clip`
        },
        ".overflow-y-clip": {
          "overflow-y": `clip`
        },
        ".overflow-x-visible": {
          "overflow-x": `visible`
        },
        ".overflow-y-visible": {
          "overflow-y": `visible`
        },
        ".overflow-x-scroll": {
          "overflow-x": `scroll`
        },
        ".overflow-y-scroll": {
          "overflow-y": `scroll`
        }
      });
    },
    overscrollBehavior: ({ addUtilities: e2 }) => {
      e2({
        ".overscroll-auto": {
          "overscroll-behavior": `auto`
        },
        ".overscroll-contain": {
          "overscroll-behavior": `contain`
        },
        ".overscroll-none": {
          "overscroll-behavior": `none`
        },
        ".overscroll-y-auto": {
          "overscroll-behavior-y": `auto`
        },
        ".overscroll-y-contain": {
          "overscroll-behavior-y": `contain`
        },
        ".overscroll-y-none": {
          "overscroll-behavior-y": `none`
        },
        ".overscroll-x-auto": {
          "overscroll-behavior-x": `auto`
        },
        ".overscroll-x-contain": {
          "overscroll-behavior-x": `contain`
        },
        ".overscroll-x-none": {
          "overscroll-behavior-x": `none`
        }
      });
    },
    scrollBehavior: ({ addUtilities: e2 }) => {
      e2({
        ".scroll-auto": {
          "scroll-behavior": `auto`
        },
        ".scroll-smooth": {
          "scroll-behavior": `smooth`
        }
      });
    },
    textOverflow: ({ addUtilities: e2 }) => {
      e2({
        ".truncate": {
          overflow: `hidden`,
          "text-overflow": `ellipsis`,
          "white-space": `nowrap`
        },
        ".overflow-ellipsis": {
          "text-overflow": `ellipsis`
        },
        ".text-ellipsis": {
          "text-overflow": `ellipsis`
        },
        ".text-clip": {
          "text-overflow": `clip`
        }
      });
    },
    hyphens: ({ addUtilities: e2 }) => {
      e2({
        ".hyphens-none": {
          hyphens: `none`
        },
        ".hyphens-manual": {
          hyphens: `manual`
        },
        ".hyphens-auto": {
          hyphens: `auto`
        }
      });
    },
    whitespace: ({ addUtilities: e2 }) => {
      e2({
        ".whitespace-normal": {
          "white-space": `normal`
        },
        ".whitespace-nowrap": {
          "white-space": `nowrap`
        },
        ".whitespace-pre": {
          "white-space": `pre`
        },
        ".whitespace-pre-line": {
          "white-space": `pre-line`
        },
        ".whitespace-pre-wrap": {
          "white-space": `pre-wrap`
        },
        ".whitespace-break-spaces": {
          "white-space": `break-spaces`
        }
      });
    },
    textWrap: ({ addUtilities: e2 }) => {
      e2({
        ".text-wrap": {
          "text-wrap": `wrap`
        },
        ".text-nowrap": {
          "text-wrap": `nowrap`
        },
        ".text-balance": {
          "text-wrap": `balance`
        },
        ".text-pretty": {
          "text-wrap": `pretty`
        }
      });
    },
    wordBreak: ({ addUtilities: e2 }) => {
      e2({
        ".break-normal": {
          "overflow-wrap": `normal`,
          "word-break": `normal`
        },
        ".break-words": {
          "overflow-wrap": `break-word`
        },
        ".break-all": {
          "word-break": `break-all`
        },
        ".break-keep": {
          "word-break": `keep-all`
        }
      });
    },
    borderRadius: W(`borderRadius`, [
      [
        `rounded`,
        [
          `border-radius`
        ]
      ],
      [
        [
          `rounded-s`,
          [
            `border-start-start-radius`,
            `border-end-start-radius`
          ]
        ],
        [
          `rounded-e`,
          [
            `border-start-end-radius`,
            `border-end-end-radius`
          ]
        ],
        [
          `rounded-t`,
          [
            `border-top-left-radius`,
            `border-top-right-radius`
          ]
        ],
        [
          `rounded-r`,
          [
            `border-top-right-radius`,
            `border-bottom-right-radius`
          ]
        ],
        [
          `rounded-b`,
          [
            `border-bottom-right-radius`,
            `border-bottom-left-radius`
          ]
        ],
        [
          `rounded-l`,
          [
            `border-top-left-radius`,
            `border-bottom-left-radius`
          ]
        ]
      ],
      [
        [
          `rounded-ss`,
          [
            `border-start-start-radius`
          ]
        ],
        [
          `rounded-se`,
          [
            `border-start-end-radius`
          ]
        ],
        [
          `rounded-ee`,
          [
            `border-end-end-radius`
          ]
        ],
        [
          `rounded-es`,
          [
            `border-end-start-radius`
          ]
        ],
        [
          `rounded-tl`,
          [
            `border-top-left-radius`
          ]
        ],
        [
          `rounded-tr`,
          [
            `border-top-right-radius`
          ]
        ],
        [
          `rounded-br`,
          [
            `border-bottom-right-radius`
          ]
        ],
        [
          `rounded-bl`,
          [
            `border-bottom-left-radius`
          ]
        ]
      ]
    ]),
    borderWidth: W(`borderWidth`, [
      [
        `border`,
        [
          [
            `@defaults border-width`,
            {}
          ],
          `border-width`
        ]
      ],
      [
        [
          `border-x`,
          [
            [
              `@defaults border-width`,
              {}
            ],
            `border-left-width`,
            `border-right-width`
          ]
        ],
        [
          `border-y`,
          [
            [
              `@defaults border-width`,
              {}
            ],
            `border-top-width`,
            `border-bottom-width`
          ]
        ]
      ],
      [
        [
          `border-s`,
          [
            [
              `@defaults border-width`,
              {}
            ],
            `border-inline-start-width`
          ]
        ],
        [
          `border-e`,
          [
            [
              `@defaults border-width`,
              {}
            ],
            `border-inline-end-width`
          ]
        ],
        [
          `border-t`,
          [
            [
              `@defaults border-width`,
              {}
            ],
            `border-top-width`
          ]
        ],
        [
          `border-r`,
          [
            [
              `@defaults border-width`,
              {}
            ],
            `border-right-width`
          ]
        ],
        [
          `border-b`,
          [
            [
              `@defaults border-width`,
              {}
            ],
            `border-bottom-width`
          ]
        ],
        [
          `border-l`,
          [
            [
              `@defaults border-width`,
              {}
            ],
            `border-left-width`
          ]
        ]
      ]
    ], {
      type: [
        `line-width`,
        `length`
      ]
    }),
    borderStyle: ({ addUtilities: e2 }) => {
      e2({
        ".border-solid": {
          "border-style": `solid`
        },
        ".border-dashed": {
          "border-style": `dashed`
        },
        ".border-dotted": {
          "border-style": `dotted`
        },
        ".border-double": {
          "border-style": `double`
        },
        ".border-hidden": {
          "border-style": `hidden`
        },
        ".border-none": {
          "border-style": `none`
        }
      });
    },
    borderColor: ({ matchUtilities: e2, theme: t2, corePlugins: n2 }) => {
      e2({
        border: (e3) => n2(`borderOpacity`) ? I({
          color: e3,
          property: `border-color`,
          variable: `--tw-border-opacity`
        }) : {
          "border-color": K(e3)
        }
      }, {
        values: (({ DEFAULT: e3, ...t3 }) => t3)(G(t2(`borderColor`))),
        type: [
          `color`,
          `any`
        ]
      }), e2({
        "border-x": (e3) => n2(`borderOpacity`) ? I({
          color: e3,
          property: [
            `border-left-color`,
            `border-right-color`
          ],
          variable: `--tw-border-opacity`
        }) : {
          "border-left-color": K(e3),
          "border-right-color": K(e3)
        },
        "border-y": (e3) => n2(`borderOpacity`) ? I({
          color: e3,
          property: [
            `border-top-color`,
            `border-bottom-color`
          ],
          variable: `--tw-border-opacity`
        }) : {
          "border-top-color": K(e3),
          "border-bottom-color": K(e3)
        }
      }, {
        values: (({ DEFAULT: e3, ...t3 }) => t3)(G(t2(`borderColor`))),
        type: [
          `color`,
          `any`
        ]
      }), e2({
        "border-s": (e3) => n2(`borderOpacity`) ? I({
          color: e3,
          property: `border-inline-start-color`,
          variable: `--tw-border-opacity`
        }) : {
          "border-inline-start-color": K(e3)
        },
        "border-e": (e3) => n2(`borderOpacity`) ? I({
          color: e3,
          property: `border-inline-end-color`,
          variable: `--tw-border-opacity`
        }) : {
          "border-inline-end-color": K(e3)
        },
        "border-t": (e3) => n2(`borderOpacity`) ? I({
          color: e3,
          property: `border-top-color`,
          variable: `--tw-border-opacity`
        }) : {
          "border-top-color": K(e3)
        },
        "border-r": (e3) => n2(`borderOpacity`) ? I({
          color: e3,
          property: `border-right-color`,
          variable: `--tw-border-opacity`
        }) : {
          "border-right-color": K(e3)
        },
        "border-b": (e3) => n2(`borderOpacity`) ? I({
          color: e3,
          property: `border-bottom-color`,
          variable: `--tw-border-opacity`
        }) : {
          "border-bottom-color": K(e3)
        },
        "border-l": (e3) => n2(`borderOpacity`) ? I({
          color: e3,
          property: `border-left-color`,
          variable: `--tw-border-opacity`
        }) : {
          "border-left-color": K(e3)
        }
      }, {
        values: (({ DEFAULT: e3, ...t3 }) => t3)(G(t2(`borderColor`))),
        type: [
          `color`,
          `any`
        ]
      });
    },
    borderOpacity: W(`borderOpacity`, [
      [
        `border-opacity`,
        [
          `--tw-border-opacity`
        ]
      ]
    ]),
    backgroundColor: ({ matchUtilities: e2, theme: t2, corePlugins: n2 }) => {
      e2({
        bg: (e3) => n2(`backgroundOpacity`) ? I({
          color: e3,
          property: `background-color`,
          variable: `--tw-bg-opacity`
        }) : {
          "background-color": K(e3)
        }
      }, {
        values: G(t2(`backgroundColor`)),
        type: [
          `color`,
          `any`
        ]
      });
    },
    backgroundOpacity: W(`backgroundOpacity`, [
      [
        `bg-opacity`,
        [
          `--tw-bg-opacity`
        ]
      ]
    ]),
    backgroundImage: W(`backgroundImage`, [
      [
        `bg`,
        [
          `background-image`
        ]
      ]
    ], {
      type: [
        `lookup`,
        `image`,
        `url`
      ]
    }),
    gradientColorStops: /* @__PURE__ */ (() => {
      function e2(e3) {
        return Gr(e3, 0, `rgb(255 255 255 / 0)`);
      }
      return function({ matchUtilities: t2, theme: n2, addDefaults: r2 }) {
        r2(`gradient-color-stops`, {
          "--tw-gradient-from-position": ` `,
          "--tw-gradient-via-position": ` `,
          "--tw-gradient-to-position": ` `
        });
        let i2 = {
          values: G(n2(`gradientColorStops`)),
          type: [
            `color`,
            `any`
          ]
        }, a2 = {
          values: n2(`gradientColorStopPositions`),
          type: [
            `length`,
            `percentage`
          ]
        };
        t2({
          from: (t3) => {
            let n3 = e2(t3);
            return {
              "@defaults gradient-color-stops": {},
              "--tw-gradient-from": `${K(t3)} var(--tw-gradient-from-position)`,
              "--tw-gradient-to": `${n3} var(--tw-gradient-to-position)`,
              "--tw-gradient-stops": `var(--tw-gradient-from), var(--tw-gradient-to)`
            };
          }
        }, i2), t2({
          from: (e3) => ({
            "--tw-gradient-from-position": e3
          })
        }, a2), t2({
          via: (t3) => {
            let n3 = e2(t3);
            return {
              "@defaults gradient-color-stops": {},
              "--tw-gradient-to": `${n3}  var(--tw-gradient-to-position)`,
              "--tw-gradient-stops": `var(--tw-gradient-from), ${K(t3)} var(--tw-gradient-via-position), var(--tw-gradient-to)`
            };
          }
        }, i2), t2({
          via: (e3) => ({
            "--tw-gradient-via-position": e3
          })
        }, a2), t2({
          to: (e3) => ({
            "@defaults gradient-color-stops": {},
            "--tw-gradient-to": `${K(e3)} var(--tw-gradient-to-position)`
          })
        }, i2), t2({
          to: (e3) => ({
            "--tw-gradient-to-position": e3
          })
        }, a2);
      };
    })(),
    boxDecorationBreak: ({ addUtilities: e2 }) => {
      e2({
        ".decoration-slice": {
          "box-decoration-break": `slice`
        },
        ".decoration-clone": {
          "box-decoration-break": `clone`
        },
        ".box-decoration-slice": {
          "box-decoration-break": `slice`
        },
        ".box-decoration-clone": {
          "box-decoration-break": `clone`
        }
      });
    },
    backgroundSize: W(`backgroundSize`, [
      [
        `bg`,
        [
          `background-size`
        ]
      ]
    ], {
      type: [
        `lookup`,
        `length`,
        `percentage`,
        `size`
      ]
    }),
    backgroundAttachment: ({ addUtilities: e2 }) => {
      e2({
        ".bg-fixed": {
          "background-attachment": `fixed`
        },
        ".bg-local": {
          "background-attachment": `local`
        },
        ".bg-scroll": {
          "background-attachment": `scroll`
        }
      });
    },
    backgroundClip: ({ addUtilities: e2 }) => {
      e2({
        ".bg-clip-border": {
          "background-clip": `border-box`
        },
        ".bg-clip-padding": {
          "background-clip": `padding-box`
        },
        ".bg-clip-content": {
          "background-clip": `content-box`
        },
        ".bg-clip-text": {
          "background-clip": `text`
        }
      });
    },
    backgroundPosition: W(`backgroundPosition`, [
      [
        `bg`,
        [
          `background-position`
        ]
      ]
    ], {
      type: [
        `lookup`,
        [
          `position`,
          {
            preferOnConflict: true
          }
        ]
      ]
    }),
    backgroundRepeat: ({ addUtilities: e2 }) => {
      e2({
        ".bg-repeat": {
          "background-repeat": `repeat`
        },
        ".bg-no-repeat": {
          "background-repeat": `no-repeat`
        },
        ".bg-repeat-x": {
          "background-repeat": `repeat-x`
        },
        ".bg-repeat-y": {
          "background-repeat": `repeat-y`
        },
        ".bg-repeat-round": {
          "background-repeat": `round`
        },
        ".bg-repeat-space": {
          "background-repeat": `space`
        }
      });
    },
    backgroundOrigin: ({ addUtilities: e2 }) => {
      e2({
        ".bg-origin-border": {
          "background-origin": `border-box`
        },
        ".bg-origin-padding": {
          "background-origin": `padding-box`
        },
        ".bg-origin-content": {
          "background-origin": `content-box`
        }
      });
    },
    fill: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        fill: (e3) => ({
          fill: K(e3)
        })
      }, {
        values: G(t2(`fill`)),
        type: [
          `color`,
          `any`
        ]
      });
    },
    stroke: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        stroke: (e3) => ({
          stroke: K(e3)
        })
      }, {
        values: G(t2(`stroke`)),
        type: [
          `color`,
          `url`,
          `any`
        ]
      });
    },
    strokeWidth: W(`strokeWidth`, [
      [
        `stroke`,
        [
          `stroke-width`
        ]
      ]
    ], {
      type: [
        `length`,
        `number`,
        `percentage`
      ]
    }),
    objectFit: ({ addUtilities: e2 }) => {
      e2({
        ".object-contain": {
          "object-fit": `contain`
        },
        ".object-cover": {
          "object-fit": `cover`
        },
        ".object-fill": {
          "object-fit": `fill`
        },
        ".object-none": {
          "object-fit": `none`
        },
        ".object-scale-down": {
          "object-fit": `scale-down`
        }
      });
    },
    objectPosition: W(`objectPosition`, [
      [
        `object`,
        [
          `object-position`
        ]
      ]
    ]),
    padding: W(`padding`, [
      [
        `p`,
        [
          `padding`
        ]
      ],
      [
        [
          `px`,
          [
            `padding-left`,
            `padding-right`
          ]
        ],
        [
          `py`,
          [
            `padding-top`,
            `padding-bottom`
          ]
        ]
      ],
      [
        [
          `ps`,
          [
            `padding-inline-start`
          ]
        ],
        [
          `pe`,
          [
            `padding-inline-end`
          ]
        ],
        [
          `pt`,
          [
            `padding-top`
          ]
        ],
        [
          `pr`,
          [
            `padding-right`
          ]
        ],
        [
          `pb`,
          [
            `padding-bottom`
          ]
        ],
        [
          `pl`,
          [
            `padding-left`
          ]
        ]
      ]
    ]),
    textAlign: ({ addUtilities: e2 }) => {
      e2({
        ".text-left": {
          "text-align": `left`
        },
        ".text-center": {
          "text-align": `center`
        },
        ".text-right": {
          "text-align": `right`
        },
        ".text-justify": {
          "text-align": `justify`
        },
        ".text-start": {
          "text-align": `start`
        },
        ".text-end": {
          "text-align": `end`
        }
      });
    },
    textIndent: W(`textIndent`, [
      [
        `indent`,
        [
          `text-indent`
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    verticalAlign: ({ addUtilities: e2, matchUtilities: t2 }) => {
      e2({
        ".align-baseline": {
          "vertical-align": `baseline`
        },
        ".align-top": {
          "vertical-align": `top`
        },
        ".align-middle": {
          "vertical-align": `middle`
        },
        ".align-bottom": {
          "vertical-align": `bottom`
        },
        ".align-text-top": {
          "vertical-align": `text-top`
        },
        ".align-text-bottom": {
          "vertical-align": `text-bottom`
        },
        ".align-sub": {
          "vertical-align": `sub`
        },
        ".align-super": {
          "vertical-align": `super`
        }
      }), t2({
        align: (e3) => ({
          "vertical-align": e3
        })
      });
    },
    fontFamily: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        font: (e3) => {
          let [t3, n2 = {}] = Array.isArray(e3) && Nr(e3[1]) ? e3 : [
            e3
          ], { fontFeatureSettings: r2, fontVariationSettings: i2 } = n2;
          return {
            "font-family": Array.isArray(t3) ? t3.join(`, `) : t3,
            ...r2 === void 0 ? {} : {
              "font-feature-settings": r2
            },
            ...i2 === void 0 ? {} : {
              "font-variation-settings": i2
            }
          };
        }
      }, {
        values: t2(`fontFamily`),
        type: [
          `lookup`,
          `generic-name`,
          `family-name`
        ]
      });
    },
    fontSize: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        text: (e3, { modifier: t3 }) => {
          let [n2, r2] = Array.isArray(e3) ? e3 : [
            e3
          ];
          if (t3) return {
            "font-size": n2,
            "line-height": t3
          };
          let { lineHeight: i2, letterSpacing: a2, fontWeight: o2 } = Nr(r2) ? r2 : {
            lineHeight: r2
          };
          return {
            "font-size": n2,
            ...i2 === void 0 ? {} : {
              "line-height": i2
            },
            ...a2 === void 0 ? {} : {
              "letter-spacing": a2
            },
            ...o2 === void 0 ? {} : {
              "font-weight": o2
            }
          };
        }
      }, {
        values: t2(`fontSize`),
        modifiers: t2(`lineHeight`),
        type: [
          `absolute-size`,
          `relative-size`,
          `length`,
          `percentage`
        ]
      });
    },
    fontWeight: W(`fontWeight`, [
      [
        `font`,
        [
          `fontWeight`
        ]
      ]
    ], {
      type: [
        `lookup`,
        `number`,
        `any`
      ]
    }),
    textTransform: ({ addUtilities: e2 }) => {
      e2({
        ".uppercase": {
          "text-transform": `uppercase`
        },
        ".lowercase": {
          "text-transform": `lowercase`
        },
        ".capitalize": {
          "text-transform": `capitalize`
        },
        ".normal-case": {
          "text-transform": `none`
        }
      });
    },
    fontStyle: ({ addUtilities: e2 }) => {
      e2({
        ".italic": {
          "font-style": `italic`
        },
        ".not-italic": {
          "font-style": `normal`
        }
      });
    },
    fontVariantNumeric: ({ addDefaults: e2, addUtilities: t2 }) => {
      let n2 = `var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)`;
      e2(`font-variant-numeric`, {
        "--tw-ordinal": ` `,
        "--tw-slashed-zero": ` `,
        "--tw-numeric-figure": ` `,
        "--tw-numeric-spacing": ` `,
        "--tw-numeric-fraction": ` `
      }), t2({
        ".normal-nums": {
          "font-variant-numeric": `normal`
        },
        ".ordinal": {
          "@defaults font-variant-numeric": {},
          "--tw-ordinal": `ordinal`,
          "font-variant-numeric": n2
        },
        ".slashed-zero": {
          "@defaults font-variant-numeric": {},
          "--tw-slashed-zero": `slashed-zero`,
          "font-variant-numeric": n2
        },
        ".lining-nums": {
          "@defaults font-variant-numeric": {},
          "--tw-numeric-figure": `lining-nums`,
          "font-variant-numeric": n2
        },
        ".oldstyle-nums": {
          "@defaults font-variant-numeric": {},
          "--tw-numeric-figure": `oldstyle-nums`,
          "font-variant-numeric": n2
        },
        ".proportional-nums": {
          "@defaults font-variant-numeric": {},
          "--tw-numeric-spacing": `proportional-nums`,
          "font-variant-numeric": n2
        },
        ".tabular-nums": {
          "@defaults font-variant-numeric": {},
          "--tw-numeric-spacing": `tabular-nums`,
          "font-variant-numeric": n2
        },
        ".diagonal-fractions": {
          "@defaults font-variant-numeric": {},
          "--tw-numeric-fraction": `diagonal-fractions`,
          "font-variant-numeric": n2
        },
        ".stacked-fractions": {
          "@defaults font-variant-numeric": {},
          "--tw-numeric-fraction": `stacked-fractions`,
          "font-variant-numeric": n2
        }
      });
    },
    lineHeight: W(`lineHeight`, [
      [
        `leading`,
        [
          `lineHeight`
        ]
      ]
    ]),
    letterSpacing: W(`letterSpacing`, [
      [
        `tracking`,
        [
          `letterSpacing`
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    textColor: ({ matchUtilities: e2, theme: t2, corePlugins: n2 }) => {
      e2({
        text: (e3) => n2(`textOpacity`) ? I({
          color: e3,
          property: `color`,
          variable: `--tw-text-opacity`
        }) : {
          color: K(e3)
        }
      }, {
        values: G(t2(`textColor`)),
        type: [
          `color`,
          `any`
        ]
      });
    },
    textOpacity: W(`textOpacity`, [
      [
        `text-opacity`,
        [
          `--tw-text-opacity`
        ]
      ]
    ]),
    textDecoration: ({ addUtilities: e2 }) => {
      e2({
        ".underline": {
          "text-decoration-line": `underline`
        },
        ".overline": {
          "text-decoration-line": `overline`
        },
        ".line-through": {
          "text-decoration-line": `line-through`
        },
        ".no-underline": {
          "text-decoration-line": `none`
        }
      });
    },
    textDecorationColor: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        decoration: (e3) => ({
          "text-decoration-color": K(e3)
        })
      }, {
        values: G(t2(`textDecorationColor`)),
        type: [
          `color`,
          `any`
        ]
      });
    },
    textDecorationStyle: ({ addUtilities: e2 }) => {
      e2({
        ".decoration-solid": {
          "text-decoration-style": `solid`
        },
        ".decoration-double": {
          "text-decoration-style": `double`
        },
        ".decoration-dotted": {
          "text-decoration-style": `dotted`
        },
        ".decoration-dashed": {
          "text-decoration-style": `dashed`
        },
        ".decoration-wavy": {
          "text-decoration-style": `wavy`
        }
      });
    },
    textDecorationThickness: W(`textDecorationThickness`, [
      [
        `decoration`,
        [
          `text-decoration-thickness`
        ]
      ]
    ], {
      type: [
        `length`,
        `percentage`
      ]
    }),
    textUnderlineOffset: W(`textUnderlineOffset`, [
      [
        `underline-offset`,
        [
          `text-underline-offset`
        ]
      ]
    ], {
      type: [
        `length`,
        `percentage`,
        `any`
      ]
    }),
    fontSmoothing: ({ addUtilities: e2 }) => {
      e2({
        ".antialiased": {
          "-webkit-font-smoothing": `antialiased`,
          "-moz-osx-font-smoothing": `grayscale`
        },
        ".subpixel-antialiased": {
          "-webkit-font-smoothing": `auto`,
          "-moz-osx-font-smoothing": `auto`
        }
      });
    },
    placeholderColor: ({ matchUtilities: e2, theme: t2, corePlugins: n2 }) => {
      e2({
        placeholder: (e3) => n2(`placeholderOpacity`) ? {
          "&::placeholder": I({
            color: e3,
            property: `color`,
            variable: `--tw-placeholder-opacity`
          })
        } : {
          "&::placeholder": {
            color: K(e3)
          }
        }
      }, {
        values: G(t2(`placeholderColor`)),
        type: [
          `color`,
          `any`
        ]
      });
    },
    placeholderOpacity: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        "placeholder-opacity": (e3) => ({
          "&::placeholder": {
            "--tw-placeholder-opacity": e3
          }
        })
      }, {
        values: t2(`placeholderOpacity`)
      });
    },
    caretColor: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        caret: (e3) => ({
          "caret-color": K(e3)
        })
      }, {
        values: G(t2(`caretColor`)),
        type: [
          `color`,
          `any`
        ]
      });
    },
    accentColor: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        accent: (e3) => ({
          "accent-color": K(e3)
        })
      }, {
        values: G(t2(`accentColor`)),
        type: [
          `color`,
          `any`
        ]
      });
    },
    opacity: W(`opacity`, [
      [
        `opacity`,
        [
          `opacity`
        ]
      ]
    ]),
    backgroundBlendMode: ({ addUtilities: e2 }) => {
      e2({
        ".bg-blend-normal": {
          "background-blend-mode": `normal`
        },
        ".bg-blend-multiply": {
          "background-blend-mode": `multiply`
        },
        ".bg-blend-screen": {
          "background-blend-mode": `screen`
        },
        ".bg-blend-overlay": {
          "background-blend-mode": `overlay`
        },
        ".bg-blend-darken": {
          "background-blend-mode": `darken`
        },
        ".bg-blend-lighten": {
          "background-blend-mode": `lighten`
        },
        ".bg-blend-color-dodge": {
          "background-blend-mode": `color-dodge`
        },
        ".bg-blend-color-burn": {
          "background-blend-mode": `color-burn`
        },
        ".bg-blend-hard-light": {
          "background-blend-mode": `hard-light`
        },
        ".bg-blend-soft-light": {
          "background-blend-mode": `soft-light`
        },
        ".bg-blend-difference": {
          "background-blend-mode": `difference`
        },
        ".bg-blend-exclusion": {
          "background-blend-mode": `exclusion`
        },
        ".bg-blend-hue": {
          "background-blend-mode": `hue`
        },
        ".bg-blend-saturation": {
          "background-blend-mode": `saturation`
        },
        ".bg-blend-color": {
          "background-blend-mode": `color`
        },
        ".bg-blend-luminosity": {
          "background-blend-mode": `luminosity`
        }
      });
    },
    mixBlendMode: ({ addUtilities: e2 }) => {
      e2({
        ".mix-blend-normal": {
          "mix-blend-mode": `normal`
        },
        ".mix-blend-multiply": {
          "mix-blend-mode": `multiply`
        },
        ".mix-blend-screen": {
          "mix-blend-mode": `screen`
        },
        ".mix-blend-overlay": {
          "mix-blend-mode": `overlay`
        },
        ".mix-blend-darken": {
          "mix-blend-mode": `darken`
        },
        ".mix-blend-lighten": {
          "mix-blend-mode": `lighten`
        },
        ".mix-blend-color-dodge": {
          "mix-blend-mode": `color-dodge`
        },
        ".mix-blend-color-burn": {
          "mix-blend-mode": `color-burn`
        },
        ".mix-blend-hard-light": {
          "mix-blend-mode": `hard-light`
        },
        ".mix-blend-soft-light": {
          "mix-blend-mode": `soft-light`
        },
        ".mix-blend-difference": {
          "mix-blend-mode": `difference`
        },
        ".mix-blend-exclusion": {
          "mix-blend-mode": `exclusion`
        },
        ".mix-blend-hue": {
          "mix-blend-mode": `hue`
        },
        ".mix-blend-saturation": {
          "mix-blend-mode": `saturation`
        },
        ".mix-blend-color": {
          "mix-blend-mode": `color`
        },
        ".mix-blend-luminosity": {
          "mix-blend-mode": `luminosity`
        },
        ".mix-blend-plus-darker": {
          "mix-blend-mode": `plus-darker`
        },
        ".mix-blend-plus-lighter": {
          "mix-blend-mode": `plus-lighter`
        }
      });
    },
    boxShadow: (() => {
      let e2 = oa(`boxShadow`), t2 = [
        `var(--tw-ring-offset-shadow, 0 0 #0000)`,
        `var(--tw-ring-shadow, 0 0 #0000)`,
        `var(--tw-shadow)`
      ].join(`, `);
      return function({ matchUtilities: n2, addDefaults: r2, theme: i2 }) {
        r2(`box-shadow`, {
          "--tw-ring-offset-shadow": `0 0 #0000`,
          "--tw-ring-shadow": `0 0 #0000`,
          "--tw-shadow": `0 0 #0000`,
          "--tw-shadow-colored": `0 0 #0000`
        }), n2({
          shadow: (n3) => {
            n3 = e2(n3);
            let r3 = Yr(n3);
            for (let e3 of r3) e3.valid && (e3.color = `var(--tw-shadow-color)`);
            return {
              "@defaults box-shadow": {},
              "--tw-shadow": n3 === `none` ? `0 0 #0000` : n3,
              "--tw-shadow-colored": n3 === `none` ? `0 0 #0000` : Xr(r3),
              "box-shadow": t2
            };
          }
        }, {
          values: i2(`boxShadow`),
          type: [
            `shadow`
          ]
        });
      };
    })(),
    boxShadowColor: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        shadow: (e3) => ({
          "--tw-shadow-color": K(e3),
          "--tw-shadow": `var(--tw-shadow-colored)`
        })
      }, {
        values: G(t2(`boxShadowColor`)),
        type: [
          `color`,
          `any`
        ]
      });
    },
    outlineStyle: ({ addUtilities: e2 }) => {
      e2({
        ".outline-none": {
          outline: `2px solid transparent`,
          "outline-offset": `2px`
        },
        ".outline": {
          "outline-style": `solid`
        },
        ".outline-dashed": {
          "outline-style": `dashed`
        },
        ".outline-dotted": {
          "outline-style": `dotted`
        },
        ".outline-double": {
          "outline-style": `double`
        }
      });
    },
    outlineWidth: W(`outlineWidth`, [
      [
        `outline`,
        [
          `outline-width`
        ]
      ]
    ], {
      type: [
        `length`,
        `number`,
        `percentage`
      ]
    }),
    outlineOffset: W(`outlineOffset`, [
      [
        `outline-offset`,
        [
          `outline-offset`
        ]
      ]
    ], {
      type: [
        `length`,
        `number`,
        `percentage`,
        `any`
      ],
      supportsNegativeValues: true
    }),
    outlineColor: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        outline: (e3) => ({
          "outline-color": K(e3)
        })
      }, {
        values: G(t2(`outlineColor`)),
        type: [
          `color`,
          `any`
        ]
      });
    },
    ringWidth: ({ matchUtilities: e2, addDefaults: t2, addUtilities: n2, theme: r2, config: i2 }) => {
      let a2 = (() => {
        var _a2, _b;
        if (B(i2(), `respectDefaultRingColorOpacity`)) return r2(`ringColor.DEFAULT`);
        let e3 = r2(`ringOpacity.DEFAULT`, `0.5`);
        return ((_a2 = r2(`ringColor`)) == null ? void 0 : _a2.DEFAULT) ? Gr((_b = r2(`ringColor`)) == null ? void 0 : _b.DEFAULT, e3, `rgb(147 197 253 / ${e3})`) : `rgb(147 197 253 / ${e3})`;
      })();
      t2(`ring-width`, {
        "--tw-ring-inset": ` `,
        "--tw-ring-offset-width": r2(`ringOffsetWidth.DEFAULT`, `0px`),
        "--tw-ring-offset-color": r2(`ringOffsetColor.DEFAULT`, `#fff`),
        "--tw-ring-color": a2,
        "--tw-ring-offset-shadow": `0 0 #0000`,
        "--tw-ring-shadow": `0 0 #0000`,
        "--tw-shadow": `0 0 #0000`,
        "--tw-shadow-colored": `0 0 #0000`
      }), e2({
        ring: (e3) => ({
          "@defaults ring-width": {},
          "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
          "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${e3} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
          "box-shadow": [
            `var(--tw-ring-offset-shadow)`,
            `var(--tw-ring-shadow)`,
            `var(--tw-shadow, 0 0 #0000)`
          ].join(`, `)
        })
      }, {
        values: r2(`ringWidth`),
        type: `length`
      }), n2({
        ".ring-inset": {
          "@defaults ring-width": {},
          "--tw-ring-inset": `inset`
        }
      });
    },
    ringColor: ({ matchUtilities: e2, theme: t2, corePlugins: n2 }) => {
      e2({
        ring: (e3) => n2(`ringOpacity`) ? I({
          color: e3,
          property: `--tw-ring-color`,
          variable: `--tw-ring-opacity`
        }) : {
          "--tw-ring-color": K(e3)
        }
      }, {
        values: Object.fromEntries(Object.entries(G(t2(`ringColor`))).filter(([e3]) => e3 !== `DEFAULT`)),
        type: [
          `color`,
          `any`
        ]
      });
    },
    ringOpacity: (e2) => {
      let { config: t2 } = e2;
      return W(`ringOpacity`, [
        [
          `ring-opacity`,
          [
            `--tw-ring-opacity`
          ]
        ]
      ], {
        filterDefault: !B(t2(), `respectDefaultRingColorOpacity`)
      })(e2);
    },
    ringOffsetWidth: W(`ringOffsetWidth`, [
      [
        `ring-offset`,
        [
          `--tw-ring-offset-width`
        ]
      ]
    ], {
      type: `length`
    }),
    ringOffsetColor: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        "ring-offset": (e3) => ({
          "--tw-ring-offset-color": K(e3)
        })
      }, {
        values: G(t2(`ringOffsetColor`)),
        type: [
          `color`,
          `any`
        ]
      });
    },
    blur: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        blur: (e3) => ({
          "--tw-blur": e3.trim() === `` ? ` ` : `blur(${e3})`,
          "@defaults filter": {},
          filter: Y
        })
      }, {
        values: t2(`blur`)
      });
    },
    brightness: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        brightness: (e3) => ({
          "--tw-brightness": `brightness(${e3})`,
          "@defaults filter": {},
          filter: Y
        })
      }, {
        values: t2(`brightness`)
      });
    },
    contrast: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        contrast: (e3) => ({
          "--tw-contrast": `contrast(${e3})`,
          "@defaults filter": {},
          filter: Y
        })
      }, {
        values: t2(`contrast`)
      });
    },
    dropShadow: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        "drop-shadow": (e3) => ({
          "--tw-drop-shadow": Array.isArray(e3) ? e3.map((e4) => `drop-shadow(${e4})`).join(` `) : `drop-shadow(${e3})`,
          "@defaults filter": {},
          filter: Y
        })
      }, {
        values: t2(`dropShadow`)
      });
    },
    grayscale: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        grayscale: (e3) => ({
          "--tw-grayscale": `grayscale(${e3})`,
          "@defaults filter": {},
          filter: Y
        })
      }, {
        values: t2(`grayscale`)
      });
    },
    hueRotate: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        "hue-rotate": (e3) => ({
          "--tw-hue-rotate": `hue-rotate(${e3})`,
          "@defaults filter": {},
          filter: Y
        })
      }, {
        values: t2(`hueRotate`),
        supportsNegativeValues: true
      });
    },
    invert: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        invert: (e3) => ({
          "--tw-invert": `invert(${e3})`,
          "@defaults filter": {},
          filter: Y
        })
      }, {
        values: t2(`invert`)
      });
    },
    saturate: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        saturate: (e3) => ({
          "--tw-saturate": `saturate(${e3})`,
          "@defaults filter": {},
          filter: Y
        })
      }, {
        values: t2(`saturate`)
      });
    },
    sepia: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        sepia: (e3) => ({
          "--tw-sepia": `sepia(${e3})`,
          "@defaults filter": {},
          filter: Y
        })
      }, {
        values: t2(`sepia`)
      });
    },
    filter: ({ addDefaults: e2, addUtilities: t2 }) => {
      e2(`filter`, {
        "--tw-blur": ` `,
        "--tw-brightness": ` `,
        "--tw-contrast": ` `,
        "--tw-grayscale": ` `,
        "--tw-hue-rotate": ` `,
        "--tw-invert": ` `,
        "--tw-saturate": ` `,
        "--tw-sepia": ` `,
        "--tw-drop-shadow": ` `
      }), t2({
        ".filter": {
          "@defaults filter": {},
          filter: Y
        },
        ".filter-none": {
          filter: `none`
        }
      });
    },
    backdropBlur: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        "backdrop-blur": (e3) => ({
          "--tw-backdrop-blur": e3.trim() === `` ? ` ` : `blur(${e3})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": X,
          "backdrop-filter": X
        })
      }, {
        values: t2(`backdropBlur`)
      });
    },
    backdropBrightness: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        "backdrop-brightness": (e3) => ({
          "--tw-backdrop-brightness": `brightness(${e3})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": X,
          "backdrop-filter": X
        })
      }, {
        values: t2(`backdropBrightness`)
      });
    },
    backdropContrast: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        "backdrop-contrast": (e3) => ({
          "--tw-backdrop-contrast": `contrast(${e3})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": X,
          "backdrop-filter": X
        })
      }, {
        values: t2(`backdropContrast`)
      });
    },
    backdropGrayscale: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        "backdrop-grayscale": (e3) => ({
          "--tw-backdrop-grayscale": `grayscale(${e3})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": X,
          "backdrop-filter": X
        })
      }, {
        values: t2(`backdropGrayscale`)
      });
    },
    backdropHueRotate: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        "backdrop-hue-rotate": (e3) => ({
          "--tw-backdrop-hue-rotate": `hue-rotate(${e3})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": X,
          "backdrop-filter": X
        })
      }, {
        values: t2(`backdropHueRotate`),
        supportsNegativeValues: true
      });
    },
    backdropInvert: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        "backdrop-invert": (e3) => ({
          "--tw-backdrop-invert": `invert(${e3})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": X,
          "backdrop-filter": X
        })
      }, {
        values: t2(`backdropInvert`)
      });
    },
    backdropOpacity: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        "backdrop-opacity": (e3) => ({
          "--tw-backdrop-opacity": `opacity(${e3})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": X,
          "backdrop-filter": X
        })
      }, {
        values: t2(`backdropOpacity`)
      });
    },
    backdropSaturate: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        "backdrop-saturate": (e3) => ({
          "--tw-backdrop-saturate": `saturate(${e3})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": X,
          "backdrop-filter": X
        })
      }, {
        values: t2(`backdropSaturate`)
      });
    },
    backdropSepia: ({ matchUtilities: e2, theme: t2 }) => {
      e2({
        "backdrop-sepia": (e3) => ({
          "--tw-backdrop-sepia": `sepia(${e3})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": X,
          "backdrop-filter": X
        })
      }, {
        values: t2(`backdropSepia`)
      });
    },
    backdropFilter: ({ addDefaults: e2, addUtilities: t2 }) => {
      e2(`backdrop-filter`, {
        "--tw-backdrop-blur": ` `,
        "--tw-backdrop-brightness": ` `,
        "--tw-backdrop-contrast": ` `,
        "--tw-backdrop-grayscale": ` `,
        "--tw-backdrop-hue-rotate": ` `,
        "--tw-backdrop-invert": ` `,
        "--tw-backdrop-opacity": ` `,
        "--tw-backdrop-saturate": ` `,
        "--tw-backdrop-sepia": ` `
      }), t2({
        ".backdrop-filter": {
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": X,
          "backdrop-filter": X
        },
        ".backdrop-filter-none": {
          "-webkit-backdrop-filter": `none`,
          "backdrop-filter": `none`
        }
      });
    },
    transitionProperty: ({ matchUtilities: e2, theme: t2 }) => {
      let n2 = t2(`transitionTimingFunction.DEFAULT`), r2 = t2(`transitionDuration.DEFAULT`);
      e2({
        transition: (e3) => ({
          "transition-property": e3,
          ...e3 === `none` ? {} : {
            "transition-timing-function": n2,
            "transition-duration": r2
          }
        })
      }, {
        values: t2(`transitionProperty`)
      });
    },
    transitionDelay: W(`transitionDelay`, [
      [
        `delay`,
        [
          `transitionDelay`
        ]
      ]
    ]),
    transitionDuration: W(`transitionDuration`, [
      [
        `duration`,
        [
          `transitionDuration`
        ]
      ]
    ], {
      filterDefault: true
    }),
    transitionTimingFunction: W(`transitionTimingFunction`, [
      [
        `ease`,
        [
          `transitionTimingFunction`
        ]
      ]
    ], {
      filterDefault: true
    }),
    willChange: W(`willChange`, [
      [
        `will-change`,
        [
          `will-change`
        ]
      ]
    ]),
    contain: ({ addDefaults: e2, addUtilities: t2 }) => {
      let n2 = `var(--tw-contain-size) var(--tw-contain-layout) var(--tw-contain-paint) var(--tw-contain-style)`;
      e2(`contain`, {
        "--tw-contain-size": ` `,
        "--tw-contain-layout": ` `,
        "--tw-contain-paint": ` `,
        "--tw-contain-style": ` `
      }), t2({
        ".contain-none": {
          contain: `none`
        },
        ".contain-content": {
          contain: `content`
        },
        ".contain-strict": {
          contain: `strict`
        },
        ".contain-size": {
          "@defaults contain": {},
          "--tw-contain-size": `size`,
          contain: n2
        },
        ".contain-inline-size": {
          "@defaults contain": {},
          "--tw-contain-size": `inline-size`,
          contain: n2
        },
        ".contain-layout": {
          "@defaults contain": {},
          "--tw-contain-layout": `layout`,
          contain: n2
        },
        ".contain-paint": {
          "@defaults contain": {},
          "--tw-contain-paint": `paint`,
          contain: n2
        },
        ".contain-style": {
          "@defaults contain": {},
          "--tw-contain-style": `style`,
          contain: n2
        }
      });
    },
    content: W(`content`, [
      [
        `content`,
        [
          `--tw-content`,
          [
            `content`,
            `var(--tw-content)`
          ]
        ]
      ]
    ]),
    forcedColorAdjust: ({ addUtilities: e2 }) => {
      e2({
        ".forced-color-adjust-auto": {
          "forced-color-adjust": `auto`
        },
        ".forced-color-adjust-none": {
          "forced-color-adjust": `none`
        }
      });
    }
  };
  function Oa(e2) {
    if (Array.isArray(e2)) return e2;
    let t2 = e2.split(`[`).length - 1, n2 = e2.split(`]`).length - 1;
    if (t2 !== n2) throw Error(`Path is invalid. Has unbalanced brackets: ${e2}`);
    return e2.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
  }
  var ka = /* @__PURE__ */ new Map([
    [
      `{`,
      `}`
    ],
    [
      `[`,
      `]`
    ],
    [
      `(`,
      `)`
    ]
  ]), Aa = new Map(Array.from(ka.entries()).map(([e2, t2]) => [
    t2,
    e2
  ])), ja = /* @__PURE__ */ new Set([
    `"`,
    `'`,
    "`"
  ]);
  function Ma(e2) {
    let t2 = [], n2 = false;
    for (let r2 = 0; r2 < e2.length; r2++) {
      let i2 = e2[r2];
      if (i2 === `:` && !n2 && t2.length === 0) return false;
      if (ja.has(i2) && e2[r2 - 1] !== `\\` && (n2 = !n2), !n2 && e2[r2 - 1] !== `\\`) {
        if (ka.has(i2)) t2.push(i2);
        else if (Aa.has(i2)) {
          let e3 = Aa.get(i2);
          if (t2.length <= 0 || t2.pop() !== e3) return false;
        }
      }
    }
    return !(t2.length > 0);
  }
  function Na(e2) {
    return (e2 > 0n) - (e2 < 0n);
  }
  function Pa(e2, t2) {
    let n2 = 0n, r2 = 0n;
    for (let [i2, a2] of t2) e2 & i2 && (n2 |= i2, r2 |= a2);
    return e2 & ~n2 | r2;
  }
  var Fa = class {
    constructor() {
      this.offsets = {
        defaults: 0n,
        base: 0n,
        components: 0n,
        utilities: 0n,
        variants: 0n,
        user: 0n
      }, this.layerPositions = {
        defaults: 0n,
        base: 1n,
        components: 2n,
        utilities: 3n,
        user: 4n,
        variants: 5n
      }, this.reservedVariantBits = 0n, this.variantOffsets = /* @__PURE__ */ new Map();
    }
    create(e2) {
      return {
        layer: e2,
        parentLayer: e2,
        arbitrary: 0n,
        variants: 0n,
        parallelIndex: 0n,
        index: this.offsets[e2]++,
        propertyOffset: 0n,
        property: ``,
        options: []
      };
    }
    arbitraryProperty(e2) {
      return {
        ...this.create(`utilities`),
        arbitrary: 1n,
        property: e2
      };
    }
    forVariant(e2, t2 = 0) {
      let n2 = this.variantOffsets.get(e2);
      if (n2 === void 0) throw Error(`Cannot find offset for unknown variant ${e2}`);
      return {
        ...this.create(`variants`),
        variants: n2 << BigInt(t2)
      };
    }
    applyVariantOffset(e2, t2, n2) {
      return n2.variant = t2.variants, {
        ...e2,
        layer: `variants`,
        parentLayer: e2.layer === `variants` ? e2.parentLayer : e2.layer,
        variants: e2.variants | t2.variants,
        options: n2.sort ? [].concat(n2, e2.options) : e2.options,
        parallelIndex: Ia([
          e2.parallelIndex,
          t2.parallelIndex
        ])
      };
    }
    applyParallelOffset(e2, t2) {
      return {
        ...e2,
        parallelIndex: BigInt(t2)
      };
    }
    recordVariants(e2, t2) {
      for (let n2 of e2) this.recordVariant(n2, t2(n2));
    }
    recordVariant(e2, t2 = 1) {
      return this.variantOffsets.set(e2, 1n << this.reservedVariantBits), this.reservedVariantBits += BigInt(t2), {
        ...this.create(`variants`),
        variants: this.variantOffsets.get(e2)
      };
    }
    compare(e2, t2) {
      if (e2.layer !== t2.layer) return this.layerPositions[e2.layer] - this.layerPositions[t2.layer];
      if (e2.parentLayer !== t2.parentLayer) return this.layerPositions[e2.parentLayer] - this.layerPositions[t2.parentLayer];
      for (let n2 of e2.options) for (let r2 of t2.options) {
        if (n2.id !== r2.id || !n2.sort || !r2.sort) continue;
        let i2 = Ia([
          n2.variant,
          r2.variant
        ]) ?? 0n, a2 = ~(i2 | i2 - 1n), o2 = e2.variants & a2, s2 = t2.variants & a2;
        if (o2 !== s2) continue;
        let c2 = n2.sort({
          value: n2.value,
          modifier: n2.modifier
        }, {
          value: r2.value,
          modifier: r2.modifier
        });
        if (c2 !== 0) return c2;
      }
      return e2.variants === t2.variants ? e2.parallelIndex === t2.parallelIndex ? e2.arbitrary === t2.arbitrary ? e2.propertyOffset === t2.propertyOffset ? e2.index - t2.index : e2.propertyOffset - t2.propertyOffset : e2.arbitrary - t2.arbitrary : e2.parallelIndex - t2.parallelIndex : e2.variants - t2.variants;
    }
    recalculateVariantOffsets() {
      let e2 = Array.from(this.variantOffsets.entries()).filter(([e3]) => e3.startsWith(`[`)).sort(([e3], [t3]) => La(e3, t3)), t2 = e2.map(([, e3]) => e3).sort((e3, t3) => Na(e3 - t3));
      return e2.map(([, e3], n2) => [
        e3,
        t2[n2]
      ]).filter(([e3, t3]) => e3 !== t3);
    }
    remapArbitraryVariantOffsets(e2) {
      let t2 = this.recalculateVariantOffsets();
      return t2.length === 0 ? e2 : e2.map((e3) => {
        let [n2, r2] = e3;
        return n2 = {
          ...n2,
          variants: Pa(n2.variants, t2)
        }, [
          n2,
          r2
        ];
      });
    }
    sortArbitraryProperties(e2) {
      let t2 = /* @__PURE__ */ new Set();
      for (let [n3] of e2) n3.arbitrary === 1n && t2.add(n3.property);
      if (t2.size === 0) return e2;
      let n2 = Array.from(t2).sort(), r2 = /* @__PURE__ */ new Map(), i2 = 1n;
      for (let e3 of n2) r2.set(e3, i2++);
      return e2.map((e3) => {
        let [t3, n3] = e3;
        return t3 = {
          ...t3,
          propertyOffset: r2.get(t3.property) ?? 0n
        }, [
          t3,
          n3
        ];
      });
    }
    sort(e2) {
      return e2 = this.remapArbitraryVariantOffsets(e2), e2 = this.sortArbitraryProperties(e2), e2.sort(([e3], [t2]) => Na(this.compare(e3, t2)));
    }
  };
  function Ia(e2) {
    let t2 = null;
    for (let n2 of e2) t2 ?? (t2 = n2), t2 = t2 > n2 ? t2 : n2;
    return t2;
  }
  function La(e2, t2) {
    let n2 = e2.length, r2 = t2.length, i2 = n2 < r2 ? n2 : r2;
    for (let n3 = 0; n3 < i2; n3++) {
      let r3 = e2.charCodeAt(n3) - t2.charCodeAt(n3);
      if (r3 !== 0) return r3;
    }
    return n2 - r2;
  }
  var Ra = Symbol(), za = {
    AddVariant: Symbol.for(`ADD_VARIANT`),
    MatchVariant: Symbol.for(`MATCH_VARIANT`)
  }, Ba = {
    Base: 1,
    Dynamic: 2
  };
  function Va(e2, t2) {
    let n2 = e2.tailwindConfig.prefix;
    return typeof n2 == `function` ? n2(t2) : n2 + t2;
  }
  function Ha({ type: e2 = `any`, ...t2 }) {
    let n2 = [].concat(e2);
    return {
      ...t2,
      types: n2.map((e3) => Array.isArray(e3) ? {
        type: e3[0],
        ...e3[1]
      } : {
        type: e3,
        preferOnConflict: false
      })
    };
  }
  function Ua(e2) {
    let t2 = [], n2 = ``, r2 = 0;
    for (let i2 = 0; i2 < e2.length; i2++) {
      let a2 = e2[i2];
      if (a2 === `\\`) n2 += `\\` + e2[++i2];
      else if (a2 === `{`) ++r2, t2.push(n2.trim()), n2 = ``;
      else if (a2 === `}`) {
        if (--r2 < 0) throw Error(`Your { and } are unbalanced.`);
        t2.push(n2.trim()), n2 = ``;
      } else n2 += a2;
    }
    return n2.length > 0 && t2.push(n2.trim()), t2 = t2.filter((e3) => e3 !== ``), t2;
  }
  function Wa(e2, t2, { before: n2 = [] } = {}) {
    if (n2 = [].concat(n2), n2.length <= 0) {
      e2.push(t2);
      return;
    }
    let r2 = e2.length - 1;
    for (let t3 of n2) {
      let n3 = e2.indexOf(t3);
      n3 !== -1 && (r2 = Math.min(r2, n3));
    }
    e2.splice(r2, 0, t2);
  }
  function Ga(e2) {
    return Array.isArray(e2) ? e2.flatMap((e3) => !Array.isArray(e3) && !Nr(e3) ? e3 : Mr(e3)) : Ga([
      e2
    ]);
  }
  function Ka(e2, t2) {
    return C((e3) => {
      let n2 = [];
      return t2 && t2(e3), e3.walkClasses((e4) => {
        n2.push(e4.value);
      }), n2;
    }).transformSync(e2);
  }
  function qa(e2) {
    e2.walkPseudos((e3) => {
      e3.value === `:not` && e3.remove();
    });
  }
  function Ja(e2, t2 = {
    containsNonOnDemandable: false
  }, n2 = 0) {
    let r2 = [], i2 = [];
    e2.type === `rule` ? i2.push(...e2.selectors) : e2.type === `atrule` && e2.walkRules((e3) => i2.push(...e3.selectors));
    for (let e3 of i2) {
      let n3 = Ka(e3, qa);
      n3.length === 0 && (t2.containsNonOnDemandable = true);
      for (let e4 of n3) r2.push(e4);
    }
    return n2 === 0 ? [
      t2.containsNonOnDemandable || r2.length === 0,
      r2
    ] : r2;
  }
  function Ya(e2) {
    return Ga(e2).flatMap((e3) => {
      let t2 = /* @__PURE__ */ new Map(), [n2, r2] = Ja(e3);
      return n2 && r2.unshift(kr), r2.map((n3) => (t2.has(e3) || t2.set(e3, e3), [
        n3,
        t2.get(e3)
      ]));
    });
  }
  function Xa(e2) {
    return e2.startsWith(`@`) || e2.includes(`&`);
  }
  function Za(e2) {
    e2 = e2.replace(/\n+/g, ``).replace(/\s{1,}/g, ` `).trim();
    let t2 = Ua(e2).map((e3) => {
      if (!e3.startsWith(`@`)) return ({ format: t4 }) => t4(e3);
      let [, t3, n2] = /@(\S*)( .+|[({].*)?/g.exec(e3);
      return ({ wrap: e4 }) => e4(S.atRule({
        name: t3,
        params: (n2 == null ? void 0 : n2.trim()) ?? ``
      }));
    }).reverse();
    return (e3) => {
      for (let n2 of t2) n2(e3);
    };
  }
  function Qa(e2, t2, { variantList: n2, variantMap: r2, offsets: i2, classList: a2 }) {
    function o2(t3, n3) {
      return t3 ? A(e2, t3, n3) : e2;
    }
    function s2(t3) {
      return Pr(e2.prefix, t3);
    }
    function c2(e3, n3) {
      return e3 === kr ? kr : n3.respectPrefix ? t2.tailwindConfig.prefix + e3 : e3;
    }
    function l2(e3, t3, n3 = {}) {
      let r3 = Oa(e3), i3 = o2([
        `theme`,
        ...r3
      ], t3);
      return oa(r3[0])(i3, n3);
    }
    let u2 = 0, d2 = {
      postcss: S,
      prefix: s2,
      e: U,
      config: o2,
      theme: l2,
      corePlugins: (t3) => Array.isArray(e2.corePlugins) ? e2.corePlugins.includes(t3) : o2([
        `corePlugins`,
        t3
      ], true),
      variants: () => [],
      addBase(e3) {
        for (let [n3, r3] of Ya(e3)) {
          let e4 = c2(n3, {}), a3 = i2.create(`base`);
          t2.candidateRuleMap.has(e4) || t2.candidateRuleMap.set(e4, []), t2.candidateRuleMap.get(e4).push([
            {
              sort: a3,
              layer: `base`
            },
            r3
          ]);
        }
      },
      addDefaults(e3, n3) {
        let r3 = {
          [`@defaults ${e3}`]: n3
        };
        for (let [e4, n4] of Ya(r3)) {
          let r4 = c2(e4, {});
          t2.candidateRuleMap.has(r4) || t2.candidateRuleMap.set(r4, []), t2.candidateRuleMap.get(r4).push([
            {
              sort: i2.create(`defaults`),
              layer: `defaults`
            },
            n4
          ]);
        }
      },
      addComponents(e3, n3) {
        n3 = Object.assign({}, {
          preserveSource: false,
          respectPrefix: true,
          respectImportant: false
        }, Array.isArray(n3) ? {} : n3);
        for (let [r3, o3] of Ya(e3)) {
          let e4 = c2(r3, n3);
          a2.add(e4), t2.candidateRuleMap.has(e4) || t2.candidateRuleMap.set(e4, []), t2.candidateRuleMap.get(e4).push([
            {
              sort: i2.create(`components`),
              layer: `components`,
              options: n3
            },
            o3
          ]);
        }
      },
      addUtilities(e3, n3) {
        n3 = Object.assign({}, {
          preserveSource: false,
          respectPrefix: true,
          respectImportant: true
        }, Array.isArray(n3) ? {} : n3);
        for (let [r3, o3] of Ya(e3)) {
          let e4 = c2(r3, n3);
          a2.add(e4), t2.candidateRuleMap.has(e4) || t2.candidateRuleMap.set(e4, []), t2.candidateRuleMap.get(e4).push([
            {
              sort: i2.create(`utilities`),
              layer: `utilities`,
              options: n3
            },
            o3
          ]);
        }
      },
      matchUtilities: function(n3, r3) {
        r3 = Ha({
          respectPrefix: true,
          respectImportant: true,
          modifiers: false,
          ...r3
        });
        let o3 = i2.create(`utilities`);
        for (let i3 in n3) {
          let s3 = function(t3, { isOnlyPlugin: n4 }) {
            let [a3, o4, s4] = Vi(r3.types, t3, r3, e2);
            if (a3 === void 0) return [];
            if (!r3.types.some(({ type: e3 }) => e3 === o4)) if (n4) N.warn([
              `Unnecessary typehint \`${o4}\` in \`${i3}-${t3}\`.`,
              `You can safely update it to \`${i3}-${t3.replace(o4 + `:`, ``)}\`.`
            ]);
            else return [];
            if (!Ma(a3)) return [];
            let c3 = {
              get modifier() {
                return r3.modifiers || N.warn(`modifier-used-without-options-for-${i3}`, [
                  "Your plugin must set `modifiers: true` in its options to support modifiers."
                ]), s4;
              }
            }, l4 = B(e2, `generalizedModifiers`);
            return [].concat(l4 ? u3(a3, c3) : u3(a3)).filter(Boolean).map((e3) => ({
              [ia(i3, t3)]: e3
            }));
          }, l3 = c2(i3, r3), u3 = n3[i3];
          a2.add([
            l3,
            r3
          ]);
          let d3 = [
            {
              sort: o3,
              layer: `utilities`,
              options: r3
            },
            s3
          ];
          t2.candidateRuleMap.has(l3) || t2.candidateRuleMap.set(l3, []), t2.candidateRuleMap.get(l3).push(d3);
        }
      },
      matchComponents: function(n3, r3) {
        r3 = Ha({
          respectPrefix: true,
          respectImportant: false,
          modifiers: false,
          ...r3
        });
        let o3 = i2.create(`components`);
        for (let i3 in n3) {
          let s3 = function(t3, { isOnlyPlugin: n4 }) {
            let [a3, o4, s4] = Vi(r3.types, t3, r3, e2);
            if (a3 === void 0) return [];
            if (!r3.types.some(({ type: e3 }) => e3 === o4)) if (n4) N.warn([
              `Unnecessary typehint \`${o4}\` in \`${i3}-${t3}\`.`,
              `You can safely update it to \`${i3}-${t3.replace(o4 + `:`, ``)}\`.`
            ]);
            else return [];
            if (!Ma(a3)) return [];
            let c3 = {
              get modifier() {
                return r3.modifiers || N.warn(`modifier-used-without-options-for-${i3}`, [
                  "Your plugin must set `modifiers: true` in its options to support modifiers."
                ]), s4;
              }
            }, l4 = B(e2, `generalizedModifiers`);
            return [].concat(l4 ? u3(a3, c3) : u3(a3)).filter(Boolean).map((e3) => ({
              [ia(i3, t3)]: e3
            }));
          }, l3 = c2(i3, r3), u3 = n3[i3];
          a2.add([
            l3,
            r3
          ]);
          let d3 = [
            {
              sort: o3,
              layer: `components`,
              options: r3
            },
            s3
          ];
          t2.candidateRuleMap.has(l3) || t2.candidateRuleMap.set(l3, []), t2.candidateRuleMap.get(l3).push(d3);
        }
      },
      addVariant(e3, i3, a3 = {}) {
        i3 = [].concat(i3).map((t3) => {
          if (typeof t3 != `string`) return (n3 = {}) => {
            let { args: r3, modifySelectors: i4, container: o3, separator: s3, wrap: c3, format: l3 } = n3, u3 = t3(Object.assign({
              modifySelectors: i4,
              container: o3,
              separator: s3
            }, a3.type === za.MatchVariant && {
              args: r3,
              wrap: c3,
              format: l3
            }));
            if (typeof u3 == `string` && !Xa(u3)) throw Error(`Your custom variant \`${e3}\` has an invalid format string. Make sure it's an at-rule or contains a \`&\` placeholder.`);
            return Array.isArray(u3) ? u3.filter((e4) => typeof e4 == `string`).map((e4) => Za(e4)) : u3 && typeof u3 == `string` && Za(u3)(n3);
          };
          if (!Xa(t3)) throw Error(`Your custom variant \`${e3}\` has an invalid format string. Make sure it's an at-rule or contains a \`&\` placeholder.`);
          return Za(t3);
        }), Wa(n2, e3, a3), r2.set(e3, i3), t2.variantOptions.set(e3, a3);
      },
      matchVariant(t3, n3, r3) {
        let i3 = (r3 == null ? void 0 : r3.id) ?? ++u2, a3 = t3 === `@`, o3 = B(e2, `generalizedModifiers`);
        for (let [e3, s4] of Object.entries((r3 == null ? void 0 : r3.values) ?? {})) e3 !== `DEFAULT` && d2.addVariant(a3 ? `${t3}${e3}` : `${t3}-${e3}`, ({ args: e4, container: t4 }) => n3(s4, o3 ? {
          modifier: e4 == null ? void 0 : e4.modifier,
          container: t4
        } : {
          container: t4
        }), {
          ...r3,
          value: s4,
          id: i3,
          type: za.MatchVariant,
          variantInfo: Ba.Base
        });
        let s3 = `DEFAULT` in ((r3 == null ? void 0 : r3.values) ?? {});
        d2.addVariant(t3, ({ args: e3, container: t4 }) => (e3 == null ? void 0 : e3.value) === Ar && !s3 ? null : n3((e3 == null ? void 0 : e3.value) === Ar ? r3.values.DEFAULT : (e3 == null ? void 0 : e3.value) ?? (typeof e3 == `string` ? e3 : ``), o3 ? {
          modifier: e3 == null ? void 0 : e3.modifier,
          container: t4
        } : {
          container: t4
        }), {
          ...r3,
          id: i3,
          type: za.MatchVariant,
          variantInfo: Ba.Dynamic
        });
      }
    };
    return d2;
  }
  function $a(e2) {
    e2.walkAtRules((e3) => {
      [
        `responsive`,
        `variants`
      ].includes(e3.name) && ($a(e3), e3.before(e3.nodes), e3.remove());
    });
  }
  function eo(e2) {
    let t2 = [];
    return e2.each((e3) => {
      e3.type === `atrule` && [
        `responsive`,
        `variants`
      ].includes(e3.name) && (e3.name = `layer`, e3.params = `utilities`);
    }), e2.walkAtRules(`layer`, (e3) => {
      if ($a(e3), e3.params === `base`) {
        for (let n2 of e3.nodes) t2.push(function({ addBase: e4 }) {
          e4(n2, {
            respectPrefix: false
          });
        });
        e3.remove();
      } else if (e3.params === `components`) {
        for (let n2 of e3.nodes) t2.push(function({ addComponents: e4 }) {
          e4(n2, {
            respectPrefix: false,
            preserveSource: true
          });
        });
        e3.remove();
      } else if (e3.params === `utilities`) {
        for (let n2 of e3.nodes) t2.push(function({ addUtilities: e4 }) {
          e4(n2, {
            respectPrefix: false,
            preserveSource: true
          });
        });
        e3.remove();
      }
    }), t2;
  }
  function to(e2, t2) {
    let n2 = Object.entries({
      ...q,
      ...Da
    }).map(([t3, n3]) => e2.tailwindConfig.corePlugins.includes(t3) ? n3 : null).filter(Boolean), r2 = e2.tailwindConfig.plugins.map((e3) => (e3.__isOptionsFunction && (e3 = e3()), typeof e3 == `function` ? e3 : e3.handler)), i2 = eo(t2), a2 = [
      q.childVariant,
      q.pseudoElementVariants,
      q.pseudoClassVariants,
      q.hasVariants,
      q.ariaVariants,
      q.dataVariants
    ], o2 = [
      q.supportsVariants,
      q.reducedMotionVariants,
      q.prefersContrastVariants,
      q.screenVariants,
      q.orientationVariants,
      q.directionVariants,
      q.darkVariants,
      q.forcedColorsVariants,
      q.printVariant
    ];
    return (e2.tailwindConfig.darkMode === `class` || Array.isArray(e2.tailwindConfig.darkMode) && e2.tailwindConfig.darkMode[0] === `class`) && (o2 = [
      q.supportsVariants,
      q.reducedMotionVariants,
      q.prefersContrastVariants,
      q.darkVariants,
      q.screenVariants,
      q.orientationVariants,
      q.directionVariants,
      q.forcedColorsVariants,
      q.printVariant
    ]), [
      ...n2,
      ...a2,
      ...r2,
      ...o2,
      ...i2
    ];
  }
  function no(e2, t2) {
    let n2 = [], r2 = /* @__PURE__ */ new Map();
    t2.variantMap = r2;
    let i2 = new Fa();
    t2.offsets = i2;
    let a2 = /* @__PURE__ */ new Set(), o2 = Qa(t2.tailwindConfig, t2, {
      variantList: n2,
      variantMap: r2,
      offsets: i2,
      classList: a2
    });
    for (let t3 of e2) if (Array.isArray(t3)) for (let e3 of t3) e3(o2);
    else t3 == null ? void 0 : t3(o2);
    i2.recordVariants(n2, (e3) => r2.get(e3).length);
    for (let [e3, n3] of r2.entries()) t2.variantMap.set(e3, n3.map((t3, n4) => [
      i2.forVariant(e3, n4),
      t3
    ]));
    let s2 = (t2.tailwindConfig.safelist ?? []).filter(Boolean);
    if (s2.length > 0) {
      let e3 = [];
      for (let n3 of s2) {
        if (typeof n3 == `string`) {
          t2.changedContent.push({
            content: n3,
            extension: `html`
          });
          continue;
        }
        if (n3 instanceof RegExp) {
          N.warn(`root-regex`, [
            "Regular expressions in `safelist` work differently in Tailwind CSS v3.0.",
            "Update your `safelist` configuration to eliminate this warning.",
            `https://tailwindcss.com/docs/content-configuration#safelisting-classes`
          ]);
          continue;
        }
        e3.push(n3);
      }
      if (e3.length > 0) {
        let n3 = /* @__PURE__ */ new Map(), r3 = t2.tailwindConfig.prefix.length, i3 = e3.some((e4) => e4.pattern.source.includes(`!`));
        for (let o3 of a2) {
          let a3 = Array.isArray(o3) ? (() => {
            let [e4, n4] = o3, a4 = Object.keys((n4 == null ? void 0 : n4.values) ?? {}).map((t3) => aa(e4, t3));
            return (n4 == null ? void 0 : n4.supportsNegativeValues) && (a4 = [
              ...a4,
              ...a4.map((e5) => `-` + e5)
            ], a4 = [
              ...a4,
              ...a4.map((e5) => e5.slice(0, r3) + `-` + e5.slice(r3))
            ]), n4.types.some(({ type: e5 }) => e5 === `color`) && (a4 = [
              ...a4,
              ...a4.flatMap((e5) => Object.keys(t2.tailwindConfig.theme.opacity).map((t3) => `${e5}/${t3}`))
            ]), i3 && (n4 == null ? void 0 : n4.respectImportant) && (a4 = [
              ...a4,
              ...a4.map((e5) => `!` + e5)
            ]), a4;
          })() : [
            o3
          ];
          for (let r4 of a3) for (let { pattern: i4, variants: a4 = [] } of e3) if (i4.lastIndex = 0, n3.has(i4) || n3.set(i4, 0), i4.test(r4)) {
            n3.set(i4, n3.get(i4) + 1), t2.changedContent.push({
              content: r4,
              extension: `html`
            });
            for (let e4 of a4) t2.changedContent.push({
              content: e4 + t2.tailwindConfig.separator + r4,
              extension: `html`
            });
          }
        }
        for (let [e4, t3] of n3.entries()) t3 === 0 && N.warn([
          `The safelist pattern \`${e4}\` doesn't match any Tailwind CSS classes.`,
          "Fix this pattern or remove it from your `safelist` configuration.",
          `https://tailwindcss.com/docs/content-configuration#safelisting-classes`
        ]);
      }
    }
    let c2 = [].concat(t2.tailwindConfig.darkMode ?? `media`)[1] ?? `dark`, l2 = [
      Va(t2, c2),
      Va(t2, `group`),
      Va(t2, `peer`)
    ];
    t2.getClassOrder = function(e3) {
      let n3 = [
        ...e3
      ].sort((e4, t3) => e4 === t3 ? 0 : e4 < t3 ? -1 : 1), r3 = new Map(n3.map((e4) => [
        e4,
        null
      ])), i3 = Oo(new Set(n3), t2, true);
      i3 = t2.offsets.sort(i3);
      let a3 = BigInt(l2.length);
      for (let [, e4] of i3) {
        let t3 = e4.raws.tailwind.candidate;
        r3.set(t3, r3.get(t3) ?? a3++);
      }
      return e3.map((e4) => {
        let t3 = r3.get(e4) ?? null, n4 = l2.indexOf(e4);
        return t3 === null && n4 !== -1 && (t3 = BigInt(n4)), [
          e4,
          t3
        ];
      });
    }, t2.getClassList = function(e3 = {}) {
      var _a2;
      let n3 = [];
      for (let r3 of a2) if (Array.isArray(r3)) {
        let [i3, a3] = r3, o3 = [], s3 = Object.keys((a3 == null ? void 0 : a3.modifiers) ?? {});
        ((_a2 = a3 == null ? void 0 : a3.types) == null ? void 0 : _a2.some(({ type: e4 }) => e4 === `color`)) && s3.push(...Object.keys(t2.tailwindConfig.theme.opacity ?? {}));
        let c3 = {
          modifiers: s3
        }, l3 = e3.includeMetadata && s3.length > 0;
        for (let [e4, t3] of Object.entries((a3 == null ? void 0 : a3.values) ?? {})) {
          if (t3 == null) continue;
          let r4 = aa(i3, e4);
          if (n3.push(l3 ? [
            r4,
            c3
          ] : r4), (a3 == null ? void 0 : a3.supportsNegativeValues) && Ci(t3)) {
            let t4 = aa(i3, `-${e4}`);
            o3.push(l3 ? [
              t4,
              c3
            ] : t4);
          }
        }
        n3.push(...o3);
      } else n3.push(r3);
      return n3;
    }, t2.getVariants = function() {
      let e3 = Math.random().toString(36).substring(7).toUpperCase(), n3 = [];
      for (let [r3, i3] of t2.variantOptions.entries()) i3.variantInfo !== Ba.Base && n3.push({
        name: r3,
        isArbitrary: i3.type === Symbol.for(`MATCH_VARIANT`),
        values: Object.keys(i3.values ?? {}),
        hasDash: r3 !== `@`,
        selectors({ modifier: n4, value: a3 } = {}) {
          var _a2;
          let o3 = `TAILWINDPLACEHOLDER${e3}`, s3 = S.rule({
            selector: `.${o3}`
          }), c3 = S.root({
            nodes: [
              s3.clone()
            ]
          }), l3 = c3.toString(), u2 = (t2.variantMap.get(r3) ?? []).flatMap(([e4, t3]) => t3), d2 = [];
          for (let e4 of u2) {
            let r4 = [], o4 = {
              args: {
                modifier: n4,
                value: ((_a2 = i3.values) == null ? void 0 : _a2[a3]) ?? a3
              },
              separator: t2.tailwindConfig.separator,
              modifySelectors(e5) {
                return c3.each((t3) => {
                  t3.type === `rule` && (t3.selectors = t3.selectors.map((t4) => e5({
                    get className() {
                      return co(t4);
                    },
                    selector: t4
                  })));
                }), c3;
              },
              format(e5) {
                r4.push(e5);
              },
              wrap(e5) {
                r4.push(`@${e5.name} ${e5.params} { & }`);
              },
              container: c3
            }, s4 = e4(o4);
            if (r4.length > 0 && d2.push(r4), Array.isArray(s4)) for (let e5 of s4) r4 = [], e5(o4), d2.push(r4);
          }
          let f2 = [], p2 = c3.toString();
          l3 !== p2 && (c3.walkRules((e4) => {
            let n5 = e4.selector, i4 = C((e5) => {
              e5.walkClasses((e6) => {
                e6.value = `${r3}${t2.tailwindConfig.separator}${e6.value}`;
              });
            }).processSync(n5);
            f2.push(n5.replace(i4, `&`).replace(o3, `&`));
          }), c3.walkAtRules((e4) => {
            f2.push(`@${e4.name} (${e4.params}) { & }`);
          }));
          let m2 = !(a3 in (i3.values ?? {})), h2 = i3[Ra] ?? {}, g2 = !(m2 || h2.respectPrefix === false);
          d2 = d2.map((e4) => e4.map((e5) => ({
            format: e5,
            respectPrefix: g2
          }))), f2 = f2.map((e4) => ({
            format: e4,
            respectPrefix: g2
          }));
          let _2 = {
            candidate: o3,
            context: t2
          }, v2 = d2.map((e4) => ta(`.${o3}`, Zi(e4, _2), _2).replace(`.${o3}`, `&`).replace(`{ & }`, ``).trim());
          return f2.length > 0 && v2.push(Zi(f2, _2).toString().replace(`.${o3}`, `&`)), v2;
        }
      });
      return n3;
    };
  }
  function ro(e2, t2) {
    e2.classCache.has(t2) && (e2.notClassCache.add(t2), e2.classCache.delete(t2), e2.applyClassCache.delete(t2), e2.candidateRuleMap.delete(t2), e2.candidateRuleCache.delete(t2), e2.stylesheetCache = null);
  }
  function io(e2, t2) {
    let n2 = t2.raws.tailwind.candidate;
    if (n2) {
      for (let t3 of e2.ruleCache) t3[1].raws.tailwind.candidate === n2 && e2.ruleCache.delete(t3);
      ro(e2, n2);
    }
  }
  function ao(e2, t2 = [], n2 = S.root()) {
    let r2 = {
      disposables: [],
      ruleCache: /* @__PURE__ */ new Set(),
      candidateRuleCache: /* @__PURE__ */ new Map(),
      classCache: /* @__PURE__ */ new Map(),
      applyClassCache: /* @__PURE__ */ new Map(),
      notClassCache: new Set(e2.blocklist ?? []),
      postCssNodeCache: /* @__PURE__ */ new Map(),
      candidateRuleMap: /* @__PURE__ */ new Map(),
      tailwindConfig: e2,
      changedContent: t2,
      variantMap: /* @__PURE__ */ new Map(),
      stylesheetCache: null,
      variantOptions: /* @__PURE__ */ new Map(),
      markInvalidUtilityCandidate: (e3) => ro(r2, e3),
      markInvalidUtilityNode: (e3) => io(r2, e3)
    }, i2 = to(r2, n2);
    return no(i2, r2), r2;
  }
  function oo(e2, t2) {
    let n2 = C().astSync(e2);
    return n2.each((e3) => {
      e3.nodes.some((e4) => e4.type === `combinator`) && (e3.nodes = [
        C.pseudo({
          value: `:is`,
          nodes: [
            e3.clone()
          ]
        })
      ]), Wi(e3);
    }), `${t2} ${n2.toString()}`;
  }
  var so = C((e2) => e2.first.filter(({ type: e3 }) => e3 === `class`).pop().value);
  function co(e2) {
    return so.transformSync(e2);
  }
  function* lo(e2) {
    let t2 = 1 / 0;
    for (; t2 >= 0; ) {
      let n2, r2 = false;
      if (t2 === 1 / 0 && e2.endsWith(`]`)) {
        let t3 = e2.indexOf(`[`);
        e2[t3 - 1] === `-` ? n2 = t3 - 1 : e2[t3 - 1] === `/` ? (n2 = t3 - 1, r2 = true) : n2 = -1;
      } else t2 === 1 / 0 && e2.includes(`/`) ? (n2 = e2.lastIndexOf(`/`), r2 = true) : n2 = e2.lastIndexOf(`-`, t2);
      if (n2 < 0) break;
      let i2 = e2.slice(0, n2), a2 = e2.slice(r2 ? n2 : n2 + 1);
      t2 = n2 - 1, !(i2 === `` || a2 === `/`) && (yield [
        i2,
        a2
      ]);
    }
  }
  function uo(e2, t2) {
    if (e2.length === 0 || t2.tailwindConfig.prefix === ``) return e2;
    for (let n2 of e2) {
      let [e3] = n2;
      if (e3.options.respectPrefix) {
        let e4 = S.root({
          nodes: [
            n2[1].clone()
          ]
        }), r2 = n2[1].raws.tailwind.classCandidate;
        e4.walkRules((e5) => {
          let n3 = r2.startsWith(`-`);
          e5.selector = Pr(t2.tailwindConfig.prefix, e5.selector, n3);
        }), n2[1] = e4.nodes[0];
      }
    }
    return e2;
  }
  function fo(e2, t2) {
    if (e2.length === 0) return e2;
    let n2 = [];
    function r2(e3) {
      return e3.parent && e3.parent.type === `atrule` && e3.parent.name === `keyframes`;
    }
    for (let [i2, a2] of e2) {
      let e3 = S.root({
        nodes: [
          a2.clone()
        ]
      });
      e3.walkRules((e4) => {
        if (r2(e4)) return;
        let n3 = C().astSync(e4.selector);
        n3.each((e5) => ea(e5, t2)), ki(n3, (e5) => e5 === t2 ? `!${e5}` : e5), e4.selector = n3.toString(), e4.walkDecls((e5) => e5.important = true);
      }), n2.push([
        {
          ...i2,
          important: true
        },
        e3.nodes[0]
      ]);
    }
    return n2;
  }
  function po(e2, t2, n2) {
    var _a2;
    if (t2.length === 0) return t2;
    let r2 = {
      modifier: null,
      value: Ar
    };
    {
      let [t3, ...i2] = L(e2, `/`);
      if (i2.length > 1 && (t3 = t3 + `/` + i2.slice(0, -1).join(`/`), i2 = i2.slice(-1)), i2.length && !n2.variantMap.has(e2) && (e2 = t3, r2.modifier = i2[0], !B(n2.tailwindConfig, `generalizedModifiers`))) return [];
    }
    if (e2.endsWith(`]`) && !e2.startsWith(`[`)) {
      let t3 = /(.)(-?)\[(.*)\]/g.exec(e2);
      if (t3) {
        let [, n3, i2, a2] = t3;
        if (n3 === `@` && i2 === `-` || n3 !== `@` && i2 === ``) return [];
        e2 = e2.replace(`${i2}[${a2}]`, ``), r2.value = a2;
      }
    }
    if (ko(e2) && !n2.variantMap.has(e2)) {
      let t3 = n2.offsets.recordVariant(e2), r3 = R(e2.slice(1, -1)), i2 = L(r3, `,`);
      if (i2.length > 1 || !i2.every(Xa)) return [];
      let a2 = i2.map((e3, r4) => [
        n2.offsets.applyParallelOffset(t3, r4),
        Za(e3.trim())
      ]);
      n2.variantMap.set(e2, a2);
    }
    if (n2.variantMap.has(e2)) {
      let i2 = ko(e2), a2 = ((_a2 = n2.variantOptions.get(e2)) == null ? void 0 : _a2[Ra]) ?? {}, o2 = n2.variantMap.get(e2).slice(), s2 = [], c2 = !(i2 || a2.respectPrefix === false);
      for (let [i3, a3] of t2) {
        if (i3.layer === `user`) continue;
        let t3 = S.root({
          nodes: [
            a3.clone()
          ]
        });
        for (let [a4, l2, u2] of o2) {
          let d2 = function() {
            p2.raws.neededBackup || (p2.raws.neededBackup = true, p2.walkRules((e3) => e3.raws.originalSelector = e3.selector));
          }, f2 = function(e3) {
            return d2(), p2.each((t4) => {
              t4.type === `rule` && (t4.selectors = t4.selectors.map((t5) => e3({
                get className() {
                  return co(t5);
                },
                selector: t5
              })));
            }), p2;
          }, p2 = (u2 ?? t3).clone(), m2 = [], h2 = l2({
            get container() {
              return d2(), p2;
            },
            separator: n2.tailwindConfig.separator,
            modifySelectors: f2,
            wrap(e3) {
              let t4 = p2.nodes;
              p2.removeAll(), e3.append(t4), p2.append(e3);
            },
            format(e3) {
              m2.push({
                format: e3,
                respectPrefix: c2
              });
            },
            args: r2
          });
          if (Array.isArray(h2)) {
            for (let [e3, t4] of h2.entries()) o2.push([
              n2.offsets.applyParallelOffset(a4, e3),
              t4,
              p2.clone()
            ]);
            continue;
          }
          if (typeof h2 == `string` && m2.push({
            format: h2,
            respectPrefix: c2
          }), h2 === null) continue;
          p2.raws.neededBackup && (delete p2.raws.neededBackup, p2.walkRules((t4) => {
            let r3 = t4.raws.originalSelector;
            if (!r3 || (delete t4.raws.originalSelector, r3 === t4.selector)) return;
            let i4 = t4.selector, a5 = C((t5) => {
              t5.walkClasses((t6) => {
                t6.value = `${e2}${n2.tailwindConfig.separator}${t6.value}`;
              });
            }).processSync(r3);
            m2.push({
              format: i4.replace(a5, `&`),
              respectPrefix: c2
            }), t4.selector = r3;
          })), p2.nodes[0].raws.tailwind = {
            ...p2.nodes[0].raws.tailwind,
            parentLayer: i3.layer
          };
          let g2 = [
            {
              ...i3,
              sort: n2.offsets.applyVariantOffset(i3.sort, a4, Object.assign(r2, n2.variantOptions.get(e2))),
              collectedFormats: (i3.collectedFormats ?? []).concat(m2)
            },
            p2.nodes[0]
          ];
          s2.push(g2);
        }
      }
      return s2;
    }
    return [];
  }
  function mo(e2, t2, n2 = {}) {
    return !Nr(e2) && !Array.isArray(e2) ? [
      [
        e2
      ],
      n2
    ] : Array.isArray(e2) ? mo(e2[0], t2, e2[1]) : (t2.has(e2) || t2.set(e2, Mr(e2)), [
      t2.get(e2),
      n2
    ]);
  }
  var ho = /^[a-z_-]/;
  function go(e2) {
    return ho.test(e2);
  }
  function _o(e2) {
    if (!e2.includes(`://`)) return false;
    try {
      let t2 = new URL(e2);
      return t2.scheme !== `` && t2.host !== ``;
    } catch {
      return false;
    }
  }
  function vo(e2) {
    let t2 = true;
    return e2.walkDecls((e3) => {
      if (!yo(e3.prop, e3.value)) return t2 = false, false;
    }), t2;
  }
  function yo(e2, t2) {
    if (_o(`${e2}:${t2}`)) return false;
    try {
      return S.parse(`a{${e2}:${t2}}`).toResult(), true;
    } catch {
      return false;
    }
  }
  function bo(e2, t2) {
    let [, n2, r2] = e2.match(/^\[([a-zA-Z0-9-_]+):(\S+)\]$/) ?? [];
    if (r2 === void 0 || !go(n2) || !Ma(r2)) return null;
    let i2 = R(r2, {
      property: n2
    });
    return yo(n2, i2) ? [
      [
        {
          sort: t2.offsets.arbitraryProperty(e2),
          layer: `utilities`,
          options: {
            respectImportant: true
          }
        },
        () => ({
          [ra(e2)]: {
            [n2]: i2
          }
        })
      ]
    ] : null;
  }
  function* xo(e2, t2) {
    t2.candidateRuleMap.has(e2) && (yield [
      t2.candidateRuleMap.get(e2),
      `DEFAULT`
    ]), yield* function* (e3) {
      e3 !== null && (yield [
        e3,
        `DEFAULT`
      ]);
    }(bo(e2, t2));
    let n2 = e2, r2 = false, i2 = t2.tailwindConfig.prefix, a2 = i2.length, o2 = n2.startsWith(i2) || n2.startsWith(`-${i2}`);
    n2[a2] === `-` && o2 && (r2 = true, n2 = i2 + n2.slice(a2 + 1)), r2 && t2.candidateRuleMap.has(n2) && (yield [
      t2.candidateRuleMap.get(n2),
      `-DEFAULT`
    ]);
    for (let [e3, i3] of lo(n2)) t2.candidateRuleMap.has(e3) && (yield [
      t2.candidateRuleMap.get(e3),
      r2 ? `-${i3}` : i3
    ]);
  }
  function So(e2, t2) {
    return e2 === kr ? [
      kr
    ] : L(e2, t2);
  }
  function* Co(e2, t2) {
    var _a2;
    for (let n2 of e2) n2[1].raws.tailwind = {
      ...n2[1].raws.tailwind,
      classCandidate: t2,
      preserveSource: ((_a2 = n2[0].options) == null ? void 0 : _a2.preserveSource) ?? false
    }, yield n2;
  }
  function* wo(e2, t2) {
    var _a2;
    let n2 = t2.tailwindConfig.separator, [r2, ...i2] = So(e2, n2).reverse(), a2 = false;
    r2.startsWith(`!`) && (a2 = true, r2 = r2.slice(1));
    for (let n3 of xo(r2, t2)) {
      let o2 = [], s2 = /* @__PURE__ */ new Map(), [c2, l2] = n3, u2 = c2.length === 1;
      for (let [e3, n4] of c2) {
        let r3 = [];
        if (typeof n4 == `function`) for (let i3 of [].concat(n4(l2, {
          isOnlyPlugin: u2
        }))) {
          let [n5, a3] = mo(i3, t2.postCssNodeCache);
          for (let t3 of n5) r3.push([
            {
              ...e3,
              options: {
                ...e3.options,
                ...a3
              }
            },
            t3
          ]);
        }
        else if (l2 === `DEFAULT` || l2 === `-DEFAULT`) {
          let i3 = n4, [a3, o3] = mo(i3, t2.postCssNodeCache);
          for (let t3 of a3) r3.push([
            {
              ...e3,
              options: {
                ...e3.options,
                ...o3
              }
            },
            t3
          ]);
        }
        if (r3.length > 0) {
          let n5 = Array.from(Hi(((_a2 = e3.options) == null ? void 0 : _a2.types) ?? [], l2, e3.options ?? {}, t2.tailwindConfig)).map(([e4, t3]) => t3);
          n5.length > 0 && s2.set(r3, n5), o2.push(r3);
        }
      }
      if (ko(l2)) {
        if (o2.length > 1) {
          let t3 = function(e3) {
            return e3.length === 1 ? e3[0] : e3.find((e4) => {
              let t4 = s2.get(e4);
              return e4.some(([{ options: e5 }, n5]) => vo(n5) ? e5.types.some(({ type: e6, preferOnConflict: n6 }) => t4.includes(e6) && n6) : false);
            });
          }, [n4, r3] = o2.reduce((e3, t4) => (t4.some(([{ options: e4 }]) => e4.types.some(({ type: e5 }) => e5 === `any`)) ? e3[0].push(t4) : e3[1].push(t4), e3), [
            [],
            []
          ]), i3 = t3(r3) ?? t3(n4);
          if (i3) o2 = [
            i3
          ];
          else {
            let t4 = o2.map((e3) => /* @__PURE__ */ new Set([
              ...s2.get(e3) ?? []
            ]));
            for (let e3 of t4) for (let n6 of e3) {
              let r4 = false;
              for (let i4 of t4) e3 !== i4 && i4.has(n6) && (i4.delete(n6), r4 = true);
              r4 && e3.delete(n6);
            }
            let n5 = [];
            for (let [r4, i4] of t4.entries()) for (let t5 of i4) {
              let i5 = o2[r4].map(([, e3]) => e3).flat().map((e3) => e3.toString().split(`
`).slice(1, -1).map((e4) => e4.trim()).map((e4) => `      ${e4}`).join(`
`)).join(`

`);
              n5.push(`  Use \`${e2.replace(`[`, `[${t5}:`)}\` for \`${i5.trim()}\``);
              break;
            }
            N.warn([
              `The class \`${e2}\` is ambiguous and matches multiple utilities.`,
              ...n5,
              `If this is content and not a class, replace it with \`${e2.replace(`[`, `&lsqb;`).replace(`]`, `&rsqb;`)}\` to silence this warning.`
            ]);
            continue;
          }
        }
        o2 = o2.map((e3) => e3.filter((e4) => vo(e4[1])));
      }
      o2 = o2.flat(), o2 = Array.from(Co(o2, r2)), o2 = uo(o2, t2), a2 && (o2 = fo(o2, r2));
      for (let e3 of i2) o2 = po(e3, o2, t2);
      for (let n4 of o2) n4[1].raws.tailwind = {
        ...n4[1].raws.tailwind,
        candidate: e2
      }, n4 = To(n4, {
        context: t2,
        candidate: e2
      }), n4 !== null && (yield n4);
    }
  }
  function To(e2, { context: t2, candidate: n2 }) {
    if (!e2[0].collectedFormats) return e2;
    let r2 = true, i2;
    try {
      i2 = Zi(e2[0].collectedFormats, {
        context: t2,
        candidate: n2
      });
    } catch {
      return null;
    }
    let a2 = S.root({
      nodes: [
        e2[1].clone()
      ]
    });
    return a2.walkRules((e3) => {
      if (!Eo(e3)) try {
        let r3 = ta(e3.selector, i2, {
          candidate: n2,
          context: t2
        });
        if (r3 === null) {
          e3.remove();
          return;
        }
        e3.selector = r3;
      } catch {
        return r2 = false, false;
      }
    }), !r2 || a2.nodes.length === 0 ? null : (e2[1] = a2.nodes[0], e2);
  }
  function Eo(e2) {
    return e2.parent && e2.parent.type === `atrule` && e2.parent.name === `keyframes`;
  }
  function Do(e2) {
    if (e2 === true) return (e3) => {
      Eo(e3) || e3.walkDecls((e4) => {
        e4.parent.type === `rule` && !Eo(e4.parent) && (e4.important = true);
      });
    };
    if (typeof e2 == `string`) return (t2) => {
      Eo(t2) || (t2.selectors = t2.selectors.map((t3) => oo(t3, e2)));
    };
  }
  function Oo(e2, t2, n2 = false) {
    let r2 = [], i2 = Do(t2.tailwindConfig.important);
    for (let a2 of e2) {
      if (t2.notClassCache.has(a2)) continue;
      if (t2.candidateRuleCache.has(a2)) {
        r2 = r2.concat(Array.from(t2.candidateRuleCache.get(a2)));
        continue;
      }
      let e3 = Array.from(wo(a2, t2));
      if (e3.length === 0) {
        t2.notClassCache.add(a2);
        continue;
      }
      t2.classCache.set(a2, e3);
      let o2 = t2.candidateRuleCache.get(a2) ?? /* @__PURE__ */ new Set();
      t2.candidateRuleCache.set(a2, o2);
      for (let a3 of e3) {
        let [{ sort: e4, options: s2 }, c2] = a3;
        if (s2.respectImportant && i2) {
          let e5 = S.root({
            nodes: [
              c2.clone()
            ]
          });
          e5.walkRules(i2), c2 = e5.nodes[0];
        }
        let l2 = [
          e4,
          n2 ? c2.clone() : c2
        ];
        o2.add(l2), t2.ruleCache.add(l2), r2.push(l2);
      }
    }
    return r2;
  }
  function ko(e2) {
    return e2.startsWith(`[`) && e2.endsWith(`]`);
  }
  function Ao(e2, t2 = void 0, n2 = void 0) {
    return e2.map((e3) => {
      let r2 = e3.clone();
      return n2 !== void 0 && (r2.raws.tailwind = {
        ...r2.raws.tailwind,
        ...n2
      }), t2 !== void 0 && jo(r2, (e4) => {
        var _a2;
        if (((_a2 = e4.raws.tailwind) == null ? void 0 : _a2.preserveSource) === true && e4.source) return false;
        e4.source = t2;
      }), r2;
    });
  }
  function jo(e2, t2) {
    var _a2;
    t2(e2) !== false && ((_a2 = e2.each) == null ? void 0 : _a2.call(e2, (e3) => jo(e3, t2)));
  }
  var Mo = /[\\^$.*+?()[\]{}|]/g, No = RegExp(Mo.source);
  function Po(e2) {
    return e2 = Array.isArray(e2) ? e2 : [
      e2
    ], e2 = e2.map((e3) => e3 instanceof RegExp ? e3.source : e3), e2.join(``);
  }
  function Z(e2) {
    return new RegExp(Po(e2), `g`);
  }
  function Fo(e2) {
    return `(?:${e2.map(Po).join(`|`)})`;
  }
  function Io(e2) {
    return `(?:${Po(e2)})?`;
  }
  function Lo(e2) {
    return e2 && No.test(e2) ? e2.replace(Mo, `\\$&`) : e2 || ``;
  }
  function Ro(e2) {
    let t2 = Array.from(zo(e2));
    return (e3) => {
      let n2 = [];
      for (let r2 of t2) for (let t3 of e3.match(r2) ?? []) n2.push(Ho(t3));
      for (let e4 of n2.slice()) {
        let t3 = L(e4, `.`);
        for (let e5 = 0; e5 < t3.length; e5++) {
          let r2 = t3[e5];
          if (e5 >= t3.length - 1) {
            n2.push(r2);
            continue;
          }
          let i2 = Number(t3[e5 + 1]);
          isNaN(i2) ? n2.push(r2) : e5++;
        }
      }
      return n2;
    };
  }
  function* zo(e2) {
    let t2 = e2.tailwindConfig.separator, n2 = e2.tailwindConfig.prefix === `` ? `` : Io(Z([
      /-?/,
      Lo(e2.tailwindConfig.prefix)
    ])), r2 = Fo([
      /\[[^\s:'"`]+:[^\s\[\]]+\]/,
      /\[[^\s:'"`\]]+:[^\s]+?\[[^\s]+\][^\s]+?\]/,
      Z([
        Fo([
          /-?(?:\w+)/,
          /@(?:\w+)/
        ]),
        Io(Fo([
          Z([
            Fo([
              /-(?:\w+-)*\['[^\s]+'\]/,
              /-(?:\w+-)*\["[^\s]+"\]/,
              /-(?:\w+-)*\[`[^\s]+`\]/,
              /-(?:\w+-)*\[(?:[^\s\[\]]+\[[^\s\[\]]+\])*[^\s:\[\]]+\]/
            ]),
            /(?![{([]])/,
            /(?:\/[^\s'"`\\><$]*)?/
          ]),
          Z([
            Fo([
              /-(?:\w+-)*\['[^\s]+'\]/,
              /-(?:\w+-)*\["[^\s]+"\]/,
              /-(?:\w+-)*\[`[^\s]+`\]/,
              /-(?:\w+-)*\[(?:[^\s\[\]]+\[[^\s\[\]]+\])*[^\s\[\]]+\]/
            ]),
            /(?![{([]])/,
            /(?:\/[^\s'"`\\$]*)?/
          ]),
          /[-\/][^\s'"`\\$={><]*/
        ]))
      ])
    ]), i2 = [
      Fo([
        Z([
          /@\[[^\s"'`]+\](\/[^\s"'`]+)?/,
          t2
        ]),
        Z([
          /([^\s"'`\[\\]+-)?\[[^\s"'`]+\]\/[\w_-]+/,
          t2
        ]),
        Z([
          /([^\s"'`\[\\]+-)?\[[^\s"'`]+\]/,
          t2
        ]),
        Z([
          /[^\s"'`\[\\]+/,
          t2
        ])
      ]),
      Fo([
        Z([
          /([^\s"'`\[\\]+-)?\[[^\s`]+\]\/[\w_-]+/,
          t2
        ]),
        Z([
          /([^\s"'`\[\\]+-)?\[[^\s`]+\]/,
          t2
        ]),
        Z([
          /[^\s`\[\\]+/,
          t2
        ])
      ])
    ];
    for (let e3 of i2) yield Z([
      `((?=((`,
      e3,
      `)+))\\2)?`,
      /!?/,
      n2,
      r2
    ]);
    yield /[^<>"'`\s.(){}[\]#=%$][^<>"'`\s(){}[\]#=%$]*[^<>"'`\s.(){}[\]#=%:$]/g;
  }
  var Bo = /([\[\]'"`])([^\[\]'"`])?/g, Vo = /[^"'`\s<>\]]+/;
  function Ho(e2) {
    if (!e2.includes(`-[`)) return e2;
    let t2 = 0, n2 = [], r2 = e2.matchAll(Bo);
    r2 = Array.from(r2).flatMap((e3) => {
      let [, ...t3] = e3;
      return t3.map((t4, n3) => Object.assign([], e3, {
        index: e3.index + n3,
        0: t4
      }));
    });
    for (let i2 of r2) {
      let r3 = i2[0], a2 = n2[n2.length - 1];
      if (r3 === a2 ? n2.pop() : (r3 === `'` || r3 === `"` || r3 === "`") && n2.push(r3), !a2) {
        if (r3 === `[`) {
          t2++;
          continue;
        } else if (r3 === `]`) {
          t2--;
          continue;
        }
        if (t2 < 0) return e2.substring(0, i2.index - 1);
        if (t2 === 0 && !Vo.test(r3)) return e2.substring(0, i2.index);
      }
    }
    return e2;
  }
  var Q = Dr, Uo = {
    DEFAULT: Ro
  }, Wo = {
    DEFAULT: (e2) => e2,
    svelte: (e2) => e2.replace(/(?:^|\s)class:/g, ` `)
  };
  function Go(e2, t2) {
    let n2 = e2.tailwindConfig.content.extract;
    return n2[t2] || n2.DEFAULT || Uo[t2] || Uo.DEFAULT(e2);
  }
  function Ko(e2, t2) {
    let n2 = e2.content.transform;
    return n2[t2] || n2.DEFAULT || Wo[t2] || Wo.DEFAULT;
  }
  var qo = /* @__PURE__ */ new WeakMap();
  function Jo(e2, t2, n2, r2) {
    qo.has(t2) || qo.set(t2, new lr({
      maxSize: 25e3
    }));
    for (let i2 of e2.split(`
`)) if (i2 = i2.trim(), !r2.has(i2)) if (r2.add(i2), qo.get(t2).has(i2)) for (let e3 of qo.get(t2).get(i2)) n2.add(e3);
    else {
      let e3 = t2(i2).filter((e4) => e4 !== `!*`), r3 = new Set(e3);
      for (let e4 of r3) n2.add(e4);
      qo.get(t2).set(i2, r3);
    }
  }
  function Yo(e2, t2) {
    let n2 = t2.offsets.sort(e2), r2 = {
      base: /* @__PURE__ */ new Set(),
      defaults: /* @__PURE__ */ new Set(),
      components: /* @__PURE__ */ new Set(),
      utilities: /* @__PURE__ */ new Set(),
      variants: /* @__PURE__ */ new Set()
    };
    for (let [e3, t3] of n2) r2[e3.layer].add(t3);
    return r2;
  }
  function Xo(e2) {
    return async (t2) => {
      let n2 = {
        base: null,
        components: null,
        utilities: null,
        variants: null
      };
      if (t2.walkAtRules((e3) => {
        e3.name === `tailwind` && Object.keys(n2).includes(e3.params) && (n2[e3.params] = e3);
      }), Object.values(n2).every((e3) => e3 === null)) return t2;
      let r2 = /* @__PURE__ */ new Set([
        ...e2.candidates ?? [],
        kr
      ]), i2 = /* @__PURE__ */ new Set();
      Q.DEBUG && console.time(`Reading changed files`);
      let a2 = [];
      for (let t3 of e2.changedContent) {
        let n3 = Ko(e2.tailwindConfig, t3.extension), r3 = Go(e2, t3.extension);
        a2.push([
          t3,
          {
            transformer: n3,
            extractor: r3
          }
        ]);
      }
      let o2 = 500;
      for (let e3 = 0; e3 < a2.length; e3 += o2) {
        let t3 = a2.slice(e3, e3 + o2);
        await Promise.all(t3.map(async ([{ file: e4, content: t4 }, { transformer: n3, extractor: a3 }]) => {
          t4 = e4 ? await O.promises.readFile(e4, `utf8`) : t4, Jo(n3(t4), a3, r2, i2);
        }));
      }
      Q.DEBUG && console.timeEnd(`Reading changed files`);
      let s2 = e2.classCache.size;
      Q.DEBUG && console.time(`Generate rules`), Q.DEBUG && console.time(`Sorting candidates`);
      let c2 = new Set([
        ...r2
      ].sort((e3, t3) => e3 === t3 ? 0 : e3 < t3 ? -1 : 1));
      Q.DEBUG && console.timeEnd(`Sorting candidates`), Oo(c2, e2), Q.DEBUG && console.timeEnd(`Generate rules`), Q.DEBUG && console.time(`Build stylesheet`), (e2.stylesheetCache === null || e2.classCache.size !== s2) && (e2.stylesheetCache = Yo([
        ...e2.ruleCache
      ], e2)), Q.DEBUG && console.timeEnd(`Build stylesheet`);
      let { defaults: l2, base: u2, components: d2, utilities: f2, variants: p2 } = e2.stylesheetCache;
      n2.base && (n2.base.before(Ao([
        ...l2,
        ...u2
      ], n2.base.source, {
        layer: `base`
      })), n2.base.remove()), n2.components && (n2.components.before(Ao([
        ...d2
      ], n2.components.source, {
        layer: `components`
      })), n2.components.remove()), n2.utilities && (n2.utilities.before(Ao([
        ...f2
      ], n2.utilities.source, {
        layer: `utilities`
      })), n2.utilities.remove());
      let m2 = Array.from(p2).filter((e3) => {
        var _a2;
        let t3 = (_a2 = e3.raws.tailwind) == null ? void 0 : _a2.parentLayer;
        return t3 === `components` ? n2.components !== null : t3 === `utilities` ? n2.utilities !== null : true;
      });
      n2.variants ? (n2.variants.before(Ao(m2, n2.variants.source, {
        layer: `variants`
      })), n2.variants.remove()) : m2.length > 0 && t2.append(Ao(m2, t2.source, {
        layer: `variants`
      })), t2.source.end = t2.source.end ?? t2.source.start;
      let h2 = m2.some((e3) => {
        var _a2;
        return ((_a2 = e3.raws.tailwind) == null ? void 0 : _a2.parentLayer) === `utilities`;
      });
      n2.utilities && f2.size === 0 && !h2 && N.warn(`content-problems`, [
        "No utility classes were detected in your source files. If this is unexpected, double-check the `content` option in your Tailwind CSS configuration.",
        `https://tailwindcss.com/docs/content-configuration`
      ]), Q.DEBUG && (console.log(`Potential classes: `, r2.size), console.log(`Active contexts: `, Or.size)), e2.changedContent = [], t2.walkAtRules(`layer`, (e3) => {
        Object.keys(n2).includes(e3.params) && e3.remove();
      });
    };
  }
  function Zo(e2) {
    let t2 = /* @__PURE__ */ new Map();
    S.root({
      nodes: [
        e2.clone()
      ]
    }).walkRules((e3) => {
      C((e4) => {
        e4.walkClasses((e5) => {
          let n3 = e5.parent.toString(), r3 = t2.get(n3);
          r3 || t2.set(n3, r3 = /* @__PURE__ */ new Set()), r3.add(e5.value);
        });
      }).processSync(e3.selector);
    });
    let n2 = Array.from(t2.values(), (e3) => Array.from(e3)), r2 = n2.flat();
    return Object.assign(r2, {
      groups: n2
    });
  }
  var Qo = C();
  function $o(e2) {
    return Qo.astSync(e2);
  }
  function es(e2, t2) {
    let n2 = /* @__PURE__ */ new Set();
    for (let r2 of e2) n2.add(r2.split(t2).pop());
    return Array.from(n2);
  }
  function ts(e2, t2) {
    let n2 = e2.tailwindConfig.prefix;
    return typeof n2 == `function` ? n2(t2) : n2 + t2;
  }
  function* ns(e2) {
    for (yield e2; e2.parent; ) yield e2.parent, e2 = e2.parent;
  }
  function rs(e2, t2 = {}) {
    let n2 = e2.nodes;
    e2.nodes = [];
    let r2 = e2.clone(t2);
    return e2.nodes = n2, r2;
  }
  function os(e2) {
    for (let t2 of ns(e2)) if (e2 !== t2) {
      if (t2.type === `root`) break;
      e2 = rs(t2, {
        nodes: [
          e2
        ]
      });
    }
    return e2;
  }
  function ss(e2, t2) {
    let n2 = /* @__PURE__ */ new Map();
    return e2.walkRules((e3) => {
      var _a2;
      for (let t3 of ns(e3)) if (((_a2 = t3.raws.tailwind) == null ? void 0 : _a2.layer) !== void 0) return;
      let r2 = os(e3), i2 = t2.offsets.create(`user`);
      for (let t3 of Zo(e3)) {
        let e4 = n2.get(t3) || [];
        n2.set(t3, e4), e4.push([
          {
            layer: `user`,
            sort: i2,
            important: false
          },
          r2
        ]);
      }
    }), n2;
  }
  function cs(e2, t2) {
    for (let n2 of e2) {
      if (t2.notClassCache.has(n2) || t2.applyClassCache.has(n2)) continue;
      if (t2.classCache.has(n2)) {
        t2.applyClassCache.set(n2, t2.classCache.get(n2).map(([e4, t3]) => [
          e4,
          t3.clone()
        ]));
        continue;
      }
      let e3 = Array.from(wo(n2, t2));
      if (e3.length === 0) {
        t2.notClassCache.add(n2);
        continue;
      }
      t2.applyClassCache.set(n2, e3);
    }
    return t2.applyClassCache;
  }
  function ls(e2) {
    let t2 = null;
    return {
      get: (n2) => (t2 || (t2 = e2()), t2.get(n2)),
      has: (n2) => (t2 || (t2 = e2()), t2.has(n2))
    };
  }
  function us(e2) {
    return {
      get: (t2) => e2.flatMap((e3) => e3.get(t2) || []),
      has: (t2) => e2.some((e3) => e3.has(t2))
    };
  }
  function ds(e2) {
    let t2 = e2.split(/[\s\t\n]+/g);
    return t2[t2.length - 1] === `!important` ? [
      t2.slice(0, -1),
      true
    ] : [
      t2,
      false
    ];
  }
  function fs(e2, t2, n2) {
    let r2 = /* @__PURE__ */ new Set(), i2 = [];
    if (e2.walkAtRules(`apply`, (e3) => {
      let [t3] = ds(e3.params);
      for (let e4 of t3) r2.add(e4);
      i2.push(e3);
    }), i2.length === 0) return;
    let a2 = us([
      n2,
      cs(r2, t2)
    ]);
    function o2(e3, t3, n3) {
      let r3 = $o(e3), i3 = $o(t3), a3 = $o(`.${U(n3)}`).nodes[0].nodes[0];
      return r3.each((e4) => {
        let t4 = /* @__PURE__ */ new Set();
        i3.each((n4) => {
          let r4 = false;
          n4 = n4.clone(), n4.walkClasses((i4) => {
            i4.value === a3.value && (r4 || (i4.replaceWith(...e4.nodes.map((e5) => e5.clone())), t4.add(n4), r4 = true));
          });
        });
        for (let e5 of t4) {
          let t5 = [
            []
          ];
          for (let n4 of e5.nodes) n4.type === `combinator` ? (t5.push(n4), t5.push([])) : t5[t5.length - 1].push(n4);
          e5.nodes = [];
          for (let n4 of t5) Array.isArray(n4) && n4.sort((e6, t6) => e6.type === `tag` && t6.type === `class` ? -1 : e6.type === `class` && t6.type === `tag` ? 1 : e6.type === `class` && t6.type === `pseudo` && t6.value.startsWith(`::`) ? -1 : e6.type === `pseudo` && e6.value.startsWith(`::`) && t6.type === `class` ? 1 : 0), e5.nodes = e5.nodes.concat(n4);
        }
        e4.replaceWith(...t4);
      }), r3.toString();
    }
    let s2 = /* @__PURE__ */ new Map();
    for (let e3 of i2) {
      let [n3] = s2.get(e3.parent) || [
        [],
        e3.source
      ];
      s2.set(e3.parent, [
        n3,
        e3.source
      ]);
      let [r3, i3] = ds(e3.params);
      if (e3.parent.type === `atrule`) {
        if (e3.parent.name === `screen`) {
          let t3 = e3.parent.params;
          throw e3.error(`@apply is not supported within nested at-rules like @screen. We suggest you write this as @apply ${r3.map((e4) => `${t3}:${e4}`).join(` `)} instead.`);
        }
        throw e3.error(`@apply is not supported within nested at-rules like @${e3.parent.name}. You can fix this by un-nesting @${e3.parent.name}.`);
      }
      for (let o3 of r3) {
        if ([
          ts(t2, `group`),
          ts(t2, `peer`)
        ].includes(o3)) throw e3.error(`@apply should not be used with the '${o3}' utility`);
        if (!a2.has(o3)) throw e3.error(`The \`${o3}\` class does not exist. If \`${o3}\` is a custom class, make sure it is defined within a \`@layer\` directive.`);
        let r4 = a2.get(o3);
        for (let [, t3] of r4) t3.type !== `atrule` && t3.walkRules(() => {
          throw e3.error([
            `The \`${o3}\` class cannot be used with \`@apply\` because \`@apply\` does not currently support nested CSS.`,
            "Rewrite the selector without nesting or configure the `tailwindcss/nesting` plugin:",
            `https://tailwindcss.com/docs/using-with-preprocessors#nesting`
          ].join(`
`));
        });
        n3.push([
          o3,
          i3,
          r4
        ]);
      }
    }
    for (let [e3, [n3, r3]] of s2) {
      let i3 = [];
      for (let [a4, s3, c2] of n3) {
        let n4 = [
          a4,
          ...es([
            a4
          ], t2.tailwindConfig.separator)
        ];
        for (let [l2, u2] of c2) {
          let c3 = Zo(e3), d2 = Zo(u2);
          if (d2 = d2.groups.filter((e4) => e4.some((e5) => n4.includes(e5))).flat(), d2 = d2.concat(es(d2, t2.tailwindConfig.separator)), c3.some((e4) => d2.includes(e4))) throw u2.error(`You cannot \`@apply\` the \`${a4}\` utility here because it creates a circular dependency.`);
          let f2 = S.root({
            nodes: [
              u2.clone()
            ]
          });
          f2.walk((e4) => {
            e4.source = r3;
          }), (u2.type !== `atrule` || u2.type === `atrule` && u2.name !== `keyframes`) && f2.walkRules((n5) => {
            if (!Zo(n5).some((e4) => e4 === a4)) {
              n5.remove();
              return;
            }
            let r4 = typeof t2.tailwindConfig.important == `string` ? t2.tailwindConfig.important : null, i4 = e3.raws.tailwind !== void 0 && r4 && e3.selector.indexOf(r4) === 0 ? e3.selector.slice(r4.length) : e3.selector;
            i4 === `` && (i4 = e3.selector), n5.selector = o2(i4, n5.selector, a4), r4 && i4 !== e3.selector && (n5.selector = oo(n5.selector, r4)), n5.walkDecls((e4) => {
              e4.important = l2.important || s3;
            });
            let c4 = C().astSync(n5.selector);
            c4.each((e4) => Wi(e4)), n5.selector = c4.toString();
          }), f2.nodes[0] && i3.push([
            l2.sort,
            f2.nodes[0]
          ]);
        }
      }
      let a3 = t2.offsets.sort(i3).map((e4) => e4[1]);
      e3.after(a3);
    }
    for (let e3 of i2) e3.parent.nodes.length > 1 ? e3.remove() : e3.parent.remove();
    fs(e2, t2, n2);
  }
  function ps(e2) {
    return (t2) => {
      let n2 = ls(() => ss(t2, e2));
      fs(t2, e2, n2);
    };
  }
  var ms = vr(Cr());
  function hs(e2) {
    return typeof e2 == `object` && !!e2;
  }
  function gs(e2, t2) {
    let n2 = Oa(t2);
    do
      if (n2.pop(), A(e2, n2) !== void 0) break;
    while (n2.length);
    return n2.length ? n2 : void 0;
  }
  function _s(e2) {
    return typeof e2 == `string` ? e2 : e2.reduce((e3, t2, n2) => t2.includes(`.`) ? `${e3}[${t2}]` : n2 === 0 ? t2 : `${e3}.${t2}`, ``);
  }
  function vs(e2) {
    return e2.map((e3) => `'${e3}'`).join(`, `);
  }
  function ys(e2) {
    return vs(Object.keys(e2));
  }
  function bs(e2, t2, n2, r2 = {}) {
    let i2 = Array.isArray(t2) ? _s(t2) : t2.replace(/^['"]+|['"]+$/g, ``), a2 = Array.isArray(t2) ? t2 : Oa(i2), o2 = A(e2.theme, a2, n2);
    if (o2 === void 0) {
      let t3 = `'${i2}' does not exist in your theme config.`, n3 = a2.slice(0, -1), r3 = A(e2.theme, n3);
      if (hs(r3)) {
        let i3 = Object.keys(r3).filter((t4) => bs(e2, [
          ...n3,
          t4
        ]).isValid), o3 = ee(a2[a2.length - 1], i3);
        o3 ? t3 += ` Did you mean '${_s([
          ...n3,
          o3
        ])}'?` : i3.length > 0 && (t3 += ` '${_s(n3)}' has the following valid keys: ${vs(i3)}`);
      } else {
        let n4 = gs(e2.theme, i2);
        if (n4) {
          let r4 = A(e2.theme, n4);
          hs(r4) ? t3 += ` '${_s(n4)}' has the following keys: ${ys(r4)}` : t3 += ` '${_s(n4)}' is not an object.`;
        } else t3 += ` Your theme has the following top-level keys: ${ys(e2.theme)}`;
      }
      return {
        isValid: false,
        error: t3
      };
    }
    if (!(typeof o2 == `string` || typeof o2 == `number` || typeof o2 == `function` || o2 instanceof String || o2 instanceof Number || Array.isArray(o2))) {
      let t3 = `'${i2}' was found but does not resolve to a string.`;
      if (hs(o2)) {
        let n3 = Object.keys(o2).filter((t4) => bs(e2, [
          ...a2,
          t4
        ]).isValid);
        n3.length && (t3 += ` Did you mean something like '${_s([
          ...a2,
          n3[0]
        ])}'?`);
      }
      return {
        isValid: false,
        error: t3
      };
    }
    let [s2] = a2;
    return {
      isValid: true,
      value: oa(s2)(o2, r2)
    };
  }
  function xs(e2, t2, n2) {
    t2 = t2.map((t3) => Ss(e2, t3, n2));
    let r2 = [
      ``
    ];
    for (let e3 of t2) e3.type === `div` && e3.value === `,` ? r2.push(``) : r2[r2.length - 1] += ms.default.stringify(e3);
    return r2;
  }
  function Ss(e2, t2, n2) {
    if (t2.type === `function` && n2[t2.value] !== void 0) {
      let r2 = xs(e2, t2.nodes, n2);
      t2.type = `word`, t2.value = n2[t2.value](e2, ...r2);
    }
    return t2;
  }
  function Cs(e2, t2, n2) {
    return Object.keys(n2).some((e3) => t2.includes(`${e3}(`)) ? (0, ms.default)(t2).walk((t3) => {
      Ss(e2, t3, n2);
    }).toString() : t2;
  }
  var ws = {
    atrule: `params`,
    decl: `value`
  };
  function* Ts(e2) {
    e2 = e2.replace(/^['"]+|['"]+$/g, ``);
    let t2 = e2.match(/^([^\s]+)(?![^\[]*\])(?:\s*\/\s*([^\/\s]+))$/), n2;
    yield [
      e2,
      void 0
    ], t2 && (e2 = t2[1], n2 = t2[2], yield [
      e2,
      n2
    ]);
  }
  function Es(e2, t2, n2) {
    let r2 = Array.from(Ts(t2)).map(([t3, r3]) => Object.assign(bs(e2, t3, n2, {
      opacityValue: r3
    }), {
      resolvedPath: t3,
      alpha: r3
    }));
    return r2.find((e3) => e3.isValid) ?? r2[0];
  }
  function Ds(e2) {
    let t2 = e2.tailwindConfig, n2 = {
      theme: (n3, r2, ...i2) => {
        var _a2;
        let { isValid: a2, value: o2, error: s2, alpha: c2 } = Es(t2, r2, i2.length ? i2 : void 0);
        if (!a2) {
          let t3 = n3.parent, r3 = (_a2 = t3 == null ? void 0 : t3.raws.tailwind) == null ? void 0 : _a2.candidate;
          if (t3 && r3 !== void 0) {
            e2.markInvalidUtilityNode(t3), t3.remove(), N.warn(`invalid-theme-key-in-class`, [
              `The utility \`${r3}\` contains an invalid theme value and was not generated.`
            ]);
            return;
          }
          throw n3.error(s2);
        }
        let l2 = Pi(o2);
        return (c2 !== void 0 || l2 !== void 0 && typeof l2 == `function`) && (c2 === void 0 && (c2 = 1), o2 = Gr(l2, c2, l2)), o2;
      },
      screen: (e3, n3) => {
        n3 = n3.replace(/^['"]+/g, ``).replace(/['"]+$/g, ``);
        let r2 = xa(t2.theme.screens).find(({ name: e4 }) => e4 === n3);
        if (!r2) throw e3.error(`The '${n3}' screen does not exist in your theme.`);
        return sa(r2);
      }
    };
    return (e3) => {
      e3.walk((e4) => {
        let t3 = ws[e4.type];
        t3 !== void 0 && (e4[t3] = Cs(e4, e4[t3], n2));
      });
    };
  }
  function Os({ tailwindConfig: { theme: e2 } }) {
    return function(t2) {
      t2.walkAtRules(`screen`, (t3) => {
        let n2 = t3.params, r2 = xa(e2.screens).find(({ name: e3 }) => e3 === n2);
        if (!r2) throw t3.error(`No \`${n2}\` screen found.`);
        t3.name = `media`, t3.params = sa(r2);
      });
    };
  }
  var ks = {
    id(e2) {
      return C.attribute({
        attribute: `id`,
        operator: `=`,
        value: e2.value,
        quoteMark: `"`
      });
    }
  };
  function As(e2) {
    let t2 = e2.filter((e3) => e3.type !== `pseudo` || e3.nodes.length > 0 ? true : e3.value.startsWith(`::`) || [
      `:before`,
      `:after`,
      `:first-line`,
      `:first-letter`
    ].includes(e3.value)).reverse(), n2 = /* @__PURE__ */ new Set([
      `tag`,
      `class`,
      `id`,
      `attribute`
    ]), r2 = t2.findIndex((e3) => n2.has(e3.type));
    if (r2 === -1) return t2.reverse().join(``).trim();
    let i2 = t2[r2], a2 = ks[i2.type] ? ks[i2.type](i2) : i2;
    t2 = t2.slice(0, r2);
    let o2 = t2.findIndex((e3) => e3.type === `combinator` && e3.value === `>`);
    return o2 !== -1 && (t2.splice(0, o2), t2.unshift(C.universal())), [
      a2,
      ...t2.reverse()
    ].join(``).trim();
  }
  var js = C((e2) => e2.map((e3) => {
    let t2 = e3.split((e4) => e4.type === `combinator` && e4.value === ` `).pop();
    return As(t2);
  })), Ms = /* @__PURE__ */ new Map();
  function Ns(e2) {
    return Ms.has(e2) || Ms.set(e2, js.transformSync(e2)), Ms.get(e2);
  }
  function Ps({ tailwindConfig: e2 }) {
    return (t2) => {
      let n2 = /* @__PURE__ */ new Map(), r2 = /* @__PURE__ */ new Set();
      if (t2.walkAtRules(`defaults`, (e3) => {
        if (e3.nodes && e3.nodes.length > 0) {
          r2.add(e3);
          return;
        }
        let t3 = e3.params;
        n2.has(t3) || n2.set(t3, /* @__PURE__ */ new Set()), n2.get(t3).add(e3.parent), e3.remove();
      }), B(e2, `optimizeUniversalDefaults`)) for (let e3 of r2) {
        let t3 = /* @__PURE__ */ new Map(), r3 = n2.get(e3.params) ?? [];
        for (let e4 of r3) for (let n3 of Ns(e4.selector)) {
          let e5 = n3.includes(`:-`) || n3.includes(`::-`) || n3.includes(`:has`) ? n3 : `__DEFAULT__`, r4 = t3.get(e5) ?? /* @__PURE__ */ new Set();
          t3.set(e5, r4), r4.add(n3);
        }
        if (t3.size === 0) {
          e3.remove();
          continue;
        }
        for (let [, n3] of t3) {
          let t4 = S.rule({
            source: e3.source
          });
          t4.selectors = [
            ...n3
          ], t4.append(e3.nodes.map((e4) => e4.clone())), e3.before(t4);
        }
        e3.remove();
      }
      else if (r2.size) {
        let e3 = S.rule({
          selectors: [
            `*`,
            `::before`,
            `::after`
          ]
        });
        for (let t4 of r2) e3.append(t4.nodes), e3.parent || t4.before(e3), e3.source || (e3.source = t4.source), t4.remove();
        let t3 = e3.clone({
          selectors: [
            `::backdrop`
          ]
        });
        e3.after(t3);
      }
    };
  }
  var Fs = {
    atrule: [
      `name`,
      `params`
    ],
    rule: [
      `selector`
    ]
  }, Is = new Set(Object.keys(Fs));
  function Ls() {
    function e2(t2) {
      let n2 = null;
      t2.each((e3) => {
        if (!Is.has(e3.type)) {
          n2 = null;
          return;
        }
        if (n2 === null) {
          n2 = e3;
          return;
        }
        let t3 = Fs[e3.type];
        e3.type === `atrule` && e3.name === `font-face` ? n2 = e3 : t3.every((t4) => (e3[t4] ?? ``).replace(/\s+/g, ` `) === (n2[t4] ?? ``).replace(/\s+/g, ` `)) ? (e3.nodes && n2.append(e3.nodes), e3.remove()) : n2 = e3;
      }), t2.each((t3) => {
        t3.type === `atrule` && e2(t3);
      });
    }
    return (t2) => {
      e2(t2);
    };
  }
  function Rs() {
    return (e2) => {
      e2.walkRules((e3) => {
        let t2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Set([]), r2 = /* @__PURE__ */ new Map();
        e3.walkDecls((i2) => {
          if (i2.parent === e3) {
            if (t2.has(i2.prop)) {
              if (t2.get(i2.prop).value === i2.value) {
                n2.add(t2.get(i2.prop)), t2.set(i2.prop, i2);
                return;
              }
              r2.has(i2.prop) || r2.set(i2.prop, /* @__PURE__ */ new Set()), r2.get(i2.prop).add(t2.get(i2.prop)), r2.get(i2.prop).add(i2);
            }
            t2.set(i2.prop, i2);
          }
        });
        for (let e4 of n2) e4.remove();
        for (let e4 of r2.values()) {
          let t3 = /* @__PURE__ */ new Map();
          for (let n3 of e4) {
            let e5 = Bs(n3.value);
            e5 !== null && (t3.has(e5) || t3.set(e5, /* @__PURE__ */ new Set()), t3.get(e5).add(n3));
          }
          for (let e5 of t3.values()) {
            let t4 = Array.from(e5).slice(0, -1);
            for (let e6 of t4) e6.remove();
          }
        }
      });
    };
  }
  var zs = Symbol(`unitless-number`);
  function Bs(e2) {
    let t2 = /^-?\d*.?\d+([\w%]+)?$/g.exec(e2);
    return t2 ? t2[1] ?? zs : null;
  }
  function Vs(e2) {
    if (!e2.walkAtRules) return;
    let t2 = /* @__PURE__ */ new Set();
    if (e2.walkAtRules(`apply`, (e3) => {
      t2.add(e3.parent);
    }), t2.size !== 0) for (let e3 of t2) {
      let t3 = [], n2 = [];
      for (let r2 of e3.nodes) r2.type === `atrule` && r2.name === `apply` ? (n2.length > 0 && (t3.push(n2), n2 = []), t3.push([
        r2
      ])) : n2.push(r2);
      if (n2.length > 0 && t3.push(n2), t3.length !== 1) {
        for (let n3 of [
          ...t3
        ].reverse()) {
          let t4 = e3.clone({
            nodes: []
          });
          t4.append(n3), e3.after(t4);
        }
        e3.remove();
      }
    }
  }
  function Hs() {
    return (e2) => {
      Vs(e2);
    };
  }
  function Us(e2) {
    return async function(t2, n2) {
      let { tailwindDirectives: r2, applyDirectives: i2 } = Er(t2);
      Hs()(t2, n2);
      let a2 = e2({
        tailwindDirectives: r2,
        applyDirectives: i2,
        registerDependency(e3) {
          n2.messages.push({
            plugin: `tailwindcss`,
            parent: n2.opts.from,
            ...e3
          });
        },
        createContext(e3, n3) {
          return ao(e3, n3, t2);
        }
      })(t2, n2);
      if (a2.tailwindConfig.separator === `-`) throw Error(`The '-' character cannot be used as a custom separator in JIT mode due to parsing ambiguity. Please use another character like '_' instead.`);
      Oi(a2.tailwindConfig), await Xo(a2)(t2, n2), Hs()(t2, n2), ps(a2)(t2, n2), Ds(a2)(t2, n2), Os(a2)(t2, n2), Ps(a2)(t2, n2), Ls(a2)(t2, n2), Rs(a2)(t2, n2);
    };
  }
  var Ws = Object.assign(function(e2, t2) {
    return {
      postcssPlugin: `tailwindcss`,
      async Once(n2, { result: r2 }) {
        await Us(({ createContext: n3 }) => () => n3(e2, t2))(n2, r2);
      }
    };
  }, {
    postcss: true
  }), Gs = a(E());
  function Ks(e2 = Gs.default) {
    return (t2, n2) => {
      t2.walkAtRules(`screen`, (e3) => {
        e3.name = `media`, e3.params = `screen(${e3.params})`;
      }), t2.walkAtRules(`apply`, (e3) => {
        e3.before(g.decl({
          prop: `__apply`,
          value: e3.params,
          source: e3.source
        })), e3.remove();
      });
      let i2 = (() => {
        var _a2;
        if (typeof e2 == `function` || typeof e2 == `object` && ((_a2 = e2 == null ? void 0 : e2.hasOwnProperty) == null ? void 0 : _a2.call(e2, `postcssPlugin`))) return e2;
        if (typeof e2 == `string`) return r(e2);
        if (Object.keys(e2).length <= 0) return Gs.default;
        throw Error(`tailwindcss/nesting should be loaded with a nesting plugin.`);
      })();
      g([
        i2
      ]).process(t2, n2.opts).sync(), t2.walkDecls(`__apply`, (e3) => {
        e3.before(g.atRule({
          name: `apply`,
          params: e3.value,
          source: e3.source
        })), e3.remove();
      });
      function a2(e3) {
        `markDirty` in e3 && (e3.nodes && e3.nodes.forEach((e4) => a2(e4)), e3.nodes || e3.markDirty());
      }
      return a2(t2), t2;
    };
  }
  var qs = Object.assign(function(e2) {
    return {
      postcssPlugin: `tailwindcss/nesting`,
      Once(t2, { result: n2 }) {
        return Ks(e2)(t2, n2);
      }
    };
  }, {
    postcss: true
  }), $ = a(m()), Js = a(Zn());
  async function Ys({ contents: e2 = [], volume: t2 = {}, ...n2 }) {
    let r2 = {
      contents: e2,
      volume: t2,
      ...n2
    };
    r2.contents = r2.contents.map((e3) => typeof e3 == `string` ? {
      content: e3
    } : e3);
    let i2 = await D(r2.volume, r2.entrypoint.config), a2 = g().use((0, Js.default)({
      filter: () => true,
      async resolve(e3, t3) {
        var _a2, _b;
        if (h(e3)) return new URL(e3).toString();
        {
          e3.startsWith(`.`) && (e3 = $.default.resolve($.default.dirname(t3), e3), e3.endsWith(`.css`) || (e3 = Object.keys(r2.volume ?? {}).some((t4) => t4.includes(e3.concat(`.css`))) ? e3.concat(`.css`) : e3.concat(`/index.css`)));
          let n3 = $.default.resolve(t3, e3);
          return ((_a2 = r2.volume) == null ? void 0 : _a2[n3]) || (e3.endsWith(`.css`) || (e3 = e3.concat(`/index.css`)), n3 = $.default.join(t3, e3), (_b = r2.volume) == null ? void 0 : _b[n3]) || await fetch(`https://esm.sh${n3}`).then((e4) => e4.text()).then((t4) => {
            t4 = t4.replace(/@config\s+['|"](.*)['|"]/g, (t5, n4) => `@config 'https://esm.sh${$.default.resolve($.default.dirname(e3))}${$.default.resolve(n4)}'`).replace(/@plugin\s+['|"](.*)['|"]/g, (t5, n4) => `@plugin 'https://esm.sh${$.default.resolve($.default.dirname(e3))}${$.default.resolve(n4)}'`), r2.volume && (r2.volume[n3] = t4);
          }), n3;
        }
      },
      load(e3) {
        var _a2;
        return h(e3) ? fetch(e3).then((e4) => e4.text()) : ((_a2 = r2.volume) == null ? void 0 : _a2[e3]) ? r2.volume[e3] : ``;
      }
    })).use(Ws(i2, r2.contents)).use(qs());
    return await a2.process((r2.volume ?? {})[r2.entrypoint.css], {
      from: void 0
    }).then((e3) => e3.css);
  }
  Xs = async function({ contents: e2 = [], entrypoint: t2 = {
    css: `/main.css`,
    config: `/tailwind.config.js`
  }, volume: n2 = {}, ...r2 }) {
    r2 = {
      contents: e2,
      entrypoint: t2,
      volume: n2,
      ...r2
    };
    let i2 = await Ys(r2);
    return `/*! tailwindcss v${l} | MIT License | https://tailwindcss.com */
${i2}`;
  };
  Zs = async function(e2, t2 = false) {
    await v(y);
    let { default: n2 } = await o(async () => {
      let { default: e3 } = await import("./browserslist-BKnixzN3.min.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      });
      return {
        default: e3
      };
    }, [], import.meta.url), r2 = b({
      filename: `main.css`,
      code: new TextEncoder().encode(e2),
      minify: t2,
      sourceMap: false,
      targets: _(n2(`defaults`)),
      errorRecovery: true
    });
    return {
      code: r2.code,
      css: new TextDecoder().decode(r2.code),
      warnings: r2.warnings
    };
  };
});
export {
  __tla,
  Xs as build,
  Zs as optimize$1
};
