import { __toESM as e } from "./chunk-GxRd6SvM.min.js";
import { Ca as t, loadStylesheet as n, preprocess as r } from "./pre-process-CIY4vBOu.js";
import { loadModule as i } from "./cssesc-5IgvSXT7.js";
import { require_lib as a } from "./lib-DdIaIIpq.min.js";
async function o({ entrypoint: e2 = `/main.css`, volume: a2 = {}, ...o2 } = {}) {
  return o2 = { entrypoint: e2, volume: a2, ...o2 }, o2.volume[o2.entrypoint] = (await r(o2)).css, t(o2.volume[o2.entrypoint], { ...o2, loadModule: async (e3, t2, n2) => i(e3, t2, n2, o2.volume), loadStylesheet: async (e3, t2) => n(e3, t2, o2.volume) });
}
const s = 48, c = 57;
function l(e2, t2) {
  let n2 = e2.length, r2 = t2.length, i2 = n2 < r2 ? n2 : r2;
  for (let n3 = 0; n3 < i2; n3++) {
    let r3 = e2.charCodeAt(n3), i3 = t2.charCodeAt(n3);
    if (r3 >= s && r3 <= c && i3 >= s && i3 <= c) {
      let a2 = n3, o2 = n3 + 1, l2 = n3, u2 = n3 + 1;
      for (r3 = e2.charCodeAt(o2); r3 >= s && r3 <= c; ) r3 = e2.charCodeAt(++o2);
      for (i3 = t2.charCodeAt(u2); i3 >= s && i3 <= c; ) i3 = t2.charCodeAt(++u2);
      let d2 = e2.slice(a2, o2), f2 = t2.slice(l2, u2), p2 = Number(d2) - Number(f2);
      if (p2) return p2;
      if (d2 < f2) return -1;
      if (d2 > f2) return 1;
      continue;
    }
    if (r3 !== i3) return r3 - i3;
  }
  return e2.length - t2.length;
}
var u = class extends Map {
  constructor(e2) {
    super(), this.factory = e2;
  }
  get(e2) {
    let t2 = super.get(e2);
    return t2 === void 0 && (t2 = this.factory(e2, this), this.set(e2, t2)), t2;
  }
};
const d = 92, f = 123, p = 125, ee = 40, m = 41, h = 91, g = 93, te = 34, ne = 39, _ = new Uint8Array(256);
function v(e2, t2) {
  let n2 = 0, r2 = [], i2 = 0, a2 = e2.length, o2 = t2.charCodeAt(0);
  for (let t3 = 0; t3 < a2; t3++) {
    let s2 = e2.charCodeAt(t3);
    if (n2 === 0 && s2 === o2) {
      r2.push(e2.slice(i2, t3)), i2 = t3 + 1;
      continue;
    }
    switch (s2) {
      case d:
        t3 += 1;
        break;
      case ne:
      case te:
        for (; ++t3 < a2; ) {
          let n3 = e2.charCodeAt(t3);
          if (n3 === d) {
            t3 += 1;
            continue;
          }
          if (n3 === s2) break;
        }
        break;
      case ee:
        _[n2] = m, n2++;
        break;
      case h:
        _[n2] = g, n2++;
        break;
      case f:
        _[n2] = p, n2++;
        break;
      case g:
      case p:
      case m:
        n2 > 0 && s2 === _[n2 - 1] && n2--;
        break;
    }
  }
  return r2.push(e2.slice(i2)), r2;
}
function y(e2) {
  return { kind: `word`, value: e2 };
}
function re(e2, t2) {
  return { kind: `function`, value: e2, nodes: t2 };
}
function ie(e2) {
  return { kind: `separator`, value: e2 };
}
let b = function(e2) {
  return e2[e2.Continue = 0] = `Continue`, e2[e2.Skip = 1] = `Skip`, e2[e2.Stop = 2] = `Stop`, e2;
}({});
function x(e2, t2, n2 = null) {
  for (let r2 = 0; r2 < e2.length; r2++) {
    let i2 = e2[r2], a2 = false, o2 = 0, s2 = t2(i2, { parent: n2, replaceWith(t3) {
      a2 || (a2 = true, Array.isArray(t3) ? t3.length === 0 ? (e2.splice(r2, 1), o2 = 0) : t3.length === 1 ? (e2[r2] = t3[0], o2 = 1) : (e2.splice(r2, 1, ...t3), o2 = t3.length) : e2[r2] = t3);
    } }) ?? b.Continue;
    if (a2) {
      s2 === b.Continue ? r2-- : r2 += o2 - 1;
      continue;
    }
    if (s2 === b.Stop || s2 !== b.Skip && i2.kind === `function` && x(i2.nodes, t2, i2) === b.Stop) return b.Stop;
  }
}
function S(e2) {
  let t2 = ``;
  for (let n2 of e2) switch (n2.kind) {
    case `word`:
    case `separator`:
      t2 += n2.value;
      break;
    case `function`:
      t2 += n2.value + `(` + S(n2.nodes) + `)`;
  }
  return t2;
}
const C = 92, ae = 41, w = 58, T = 44, oe = 34, E = 61, D = 62, O = 60, k = 10, se = 40, ce = 39, A = 47, j = 32, M = 9;
function N(e2) {
  e2 = e2.replaceAll(`\r
`, `
`);
  let t2 = [], n2 = [], r2 = null, i2 = ``, a2;
  for (let o2 = 0; o2 < e2.length; o2++) {
    let s2 = e2.charCodeAt(o2);
    switch (s2) {
      case C:
        i2 += e2[o2] + e2[o2 + 1], o2++;
        break;
      case w:
      case T:
      case E:
      case D:
      case O:
      case k:
      case A:
      case j:
      case M: {
        if (i2.length > 0) {
          let e3 = y(i2);
          r2 ? r2.nodes.push(e3) : t2.push(e3), i2 = ``;
        }
        let n3 = o2, s3 = o2 + 1;
        for (; s3 < e2.length && (a2 = e2.charCodeAt(s3), !(a2 !== w && a2 !== T && a2 !== E && a2 !== D && a2 !== O && a2 !== k && a2 !== A && a2 !== j && a2 !== M)); s3++) ;
        o2 = s3 - 1;
        let c2 = ie(e2.slice(n3, s3));
        r2 ? r2.nodes.push(c2) : t2.push(c2);
        break;
      }
      case ce:
      case oe: {
        let t3 = o2;
        for (let t4 = o2 + 1; t4 < e2.length; t4++) if (a2 = e2.charCodeAt(t4), a2 === C) t4 += 1;
        else if (a2 === s2) {
          o2 = t4;
          break;
        }
        i2 += e2.slice(t3, o2 + 1);
        break;
      }
      case se: {
        let e3 = re(i2, []);
        i2 = ``, r2 ? r2.nodes.push(e3) : t2.push(e3), n2.push(e3), r2 = e3;
        break;
      }
      case ae: {
        let e3 = n2.pop();
        if (i2.length > 0) {
          let t3 = y(i2);
          e3 == null ? void 0 : e3.nodes.push(t3), i2 = ``;
        }
        r2 = n2.length > 0 ? n2[n2.length - 1] : null;
        break;
      }
      default:
        i2 += String.fromCharCode(s2);
    }
  }
  return i2.length > 0 && t2.push(y(i2)), t2;
}
const le = [`anchor-size`], ue = RegExp(`(${le.join(`|`)})\\(`, `g`), P = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/, de = RegExp(`^${P.source}$`), fe = RegExp(`^${P.source}%$`), pe = RegExp(`^${P.source}s*/s*${P.source}$`), F = `cm.mm.Q.in.pc.pt.px.em.ex.ch.rem.lh.rlh.vw.vh.vmin.vmax.vb.vi.svw.svh.lvw.lvh.dvw.dvh.cqw.cqh.cqi.cqb.cqmin.cqmax`.split(`.`), me = RegExp(`^${P.source}(${F.join(`|`)})$`), I = [`deg`, `rad`, `grad`, `turn`], he = RegExp(`^${P.source}(${I.join(`|`)})$`), ge = RegExp(`^${P.source} +${P.source} +${P.source}$`);
function L(e2) {
  let t2 = Number(e2);
  return Number.isInteger(t2) && t2 >= 0 && String(t2) === String(e2);
}
function R(e2, t2) {
  if (t2 === null) return e2;
  let n2 = Number(t2);
  return Number.isNaN(n2) || (t2 = `${n2 * 100}%`), t2 === `100%` ? e2 : `color-mix(in oklab, ${e2} ${t2}, transparent)`;
}
const z = { "--alpha": B, "--spacing": _e, "--theme": ve, theme: ye };
function B(e2, t2, n2, ...r2) {
  let [i2, a2] = v(n2, `/`).map((e3) => e3.trim());
  if (!i2 || !a2) throw Error(`The --alpha(\u2026) function requires a color and an alpha value, e.g.: \`--alpha(${i2 || `var(--my-color)`} / ${a2 || `50%`})\``);
  if (r2.length > 0) throw Error(`The --alpha(\u2026) function only accepts one argument, e.g.: \`--alpha(${i2 || `var(--my-color)`} / ${a2 || `50%`})\``);
  return R(i2, a2);
}
function _e(e2, t2, n2, ...r2) {
  if (!n2) throw Error(`The --spacing(\u2026) function requires an argument, but received none.`);
  if (r2.length > 0) throw Error(`The --spacing(\u2026) function only accepts a single argument, but received ${r2.length + 1}.`);
  let i2 = e2.theme.resolve(null, [`--spacing`]);
  if (!i2) throw Error("The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found.");
  return `calc(${i2} * ${n2})`;
}
function ve(e2, t2, n2, ...r2) {
  if (!n2.startsWith(`--`)) throw Error(`The --theme(\u2026) function can only be used with CSS variables from your theme.`);
  let i2 = false;
  n2.endsWith(` inline`) && (i2 = true, n2 = n2.slice(0, -7)), t2.kind === `at-rule` && (i2 = true);
  let a2 = e2.resolveThemeValue(n2, i2);
  if (!a2) {
    if (r2.length > 0) return r2.join(`, `);
    throw Error(`Could not resolve value for theme function: \`theme(${n2})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`);
  }
  if (r2.length === 0) return a2;
  let o2 = r2.join(`, `);
  if (o2 === `initial`) return a2;
  if (a2 === `initial`) return o2;
  if (a2.startsWith(`var(`) || a2.startsWith(`theme(`) || a2.startsWith(`--theme(`)) {
    let e3 = N(a2);
    return Se(e3, o2), S(e3);
  }
  return a2;
}
function ye(e2, t2, n2, ...r2) {
  n2 = xe(n2);
  let i2 = e2.resolveThemeValue(n2);
  if (!i2 && r2.length > 0) return r2.join(`, `);
  if (!i2) throw Error(`Could not resolve value for theme function: \`theme(${n2})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);
  return i2;
}
const be = new RegExp(Object.keys(z).map((e2) => `${e2}\\(`).join(`|`));
function xe(e2) {
  if (e2[0] !== `'` && e2[0] !== `"`) return e2;
  let t2 = ``, n2 = e2[0];
  for (let r2 = 1; r2 < e2.length - 1; r2++) {
    let i2 = e2[r2], a2 = e2[r2 + 1];
    i2 === `\\` && (a2 === n2 || a2 === `\\`) ? (t2 += a2, r2++) : t2 += i2;
  }
  return t2;
}
function Se(e2, t2) {
  x(e2, (e3) => {
    if (e3.kind === `function` && !(e3.value !== `var` && e3.value !== `theme` && e3.value !== `--theme`)) if (e3.nodes.length === 1) e3.nodes.push({ kind: `word`, value: `, ${t2}` });
    else {
      let n2 = e3.nodes[e3.nodes.length - 1];
      n2.kind === `word` && n2.value === `initial` && (n2.value = t2);
    }
  });
}
var Ce = { inherit: `inherit`, current: `currentcolor`, transparent: `transparent`, black: `#000`, white: `#fff`, slate: { 50: `oklch(98.4% 0.003 247.858)`, 100: `oklch(96.8% 0.007 247.896)`, 200: `oklch(92.9% 0.013 255.508)`, 300: `oklch(86.9% 0.022 252.894)`, 400: `oklch(70.4% 0.04 256.788)`, 500: `oklch(55.4% 0.046 257.417)`, 600: `oklch(44.6% 0.043 257.281)`, 700: `oklch(37.2% 0.044 257.287)`, 800: `oklch(27.9% 0.041 260.031)`, 900: `oklch(20.8% 0.042 265.755)`, 950: `oklch(12.9% 0.042 264.695)` }, gray: { 50: `oklch(98.5% 0.002 247.839)`, 100: `oklch(96.7% 0.003 264.542)`, 200: `oklch(92.8% 0.006 264.531)`, 300: `oklch(87.2% 0.01 258.338)`, 400: `oklch(70.7% 0.022 261.325)`, 500: `oklch(55.1% 0.027 264.364)`, 600: `oklch(44.6% 0.03 256.802)`, 700: `oklch(37.3% 0.034 259.733)`, 800: `oklch(27.8% 0.033 256.848)`, 900: `oklch(21% 0.034 264.665)`, 950: `oklch(13% 0.028 261.692)` }, zinc: { 50: `oklch(98.5% 0 0)`, 100: `oklch(96.7% 0.001 286.375)`, 200: `oklch(92% 0.004 286.32)`, 300: `oklch(87.1% 0.006 286.286)`, 400: `oklch(70.5% 0.015 286.067)`, 500: `oklch(55.2% 0.016 285.938)`, 600: `oklch(44.2% 0.017 285.786)`, 700: `oklch(37% 0.013 285.805)`, 800: `oklch(27.4% 0.006 286.033)`, 900: `oklch(21% 0.006 285.885)`, 950: `oklch(14.1% 0.005 285.823)` }, neutral: { 50: `oklch(98.5% 0 0)`, 100: `oklch(97% 0 0)`, 200: `oklch(92.2% 0 0)`, 300: `oklch(87% 0 0)`, 400: `oklch(70.8% 0 0)`, 500: `oklch(55.6% 0 0)`, 600: `oklch(43.9% 0 0)`, 700: `oklch(37.1% 0 0)`, 800: `oklch(26.9% 0 0)`, 900: `oklch(20.5% 0 0)`, 950: `oklch(14.5% 0 0)` }, stone: { 50: `oklch(98.5% 0.001 106.423)`, 100: `oklch(97% 0.001 106.424)`, 200: `oklch(92.3% 0.003 48.717)`, 300: `oklch(86.9% 0.005 56.366)`, 400: `oklch(70.9% 0.01 56.259)`, 500: `oklch(55.3% 0.013 58.071)`, 600: `oklch(44.4% 0.011 73.639)`, 700: `oklch(37.4% 0.01 67.558)`, 800: `oklch(26.8% 0.007 34.298)`, 900: `oklch(21.6% 0.006 56.043)`, 950: `oklch(14.7% 0.004 49.25)` }, red: { 50: `oklch(97.1% 0.013 17.38)`, 100: `oklch(93.6% 0.032 17.717)`, 200: `oklch(88.5% 0.062 18.334)`, 300: `oklch(80.8% 0.114 19.571)`, 400: `oklch(70.4% 0.191 22.216)`, 500: `oklch(63.7% 0.237 25.331)`, 600: `oklch(57.7% 0.245 27.325)`, 700: `oklch(50.5% 0.213 27.518)`, 800: `oklch(44.4% 0.177 26.899)`, 900: `oklch(39.6% 0.141 25.723)`, 950: `oklch(25.8% 0.092 26.042)` }, orange: { 50: `oklch(98% 0.016 73.684)`, 100: `oklch(95.4% 0.038 75.164)`, 200: `oklch(90.1% 0.076 70.697)`, 300: `oklch(83.7% 0.128 66.29)`, 400: `oklch(75% 0.183 55.934)`, 500: `oklch(70.5% 0.213 47.604)`, 600: `oklch(64.6% 0.222 41.116)`, 700: `oklch(55.3% 0.195 38.402)`, 800: `oklch(47% 0.157 37.304)`, 900: `oklch(40.8% 0.123 38.172)`, 950: `oklch(26.6% 0.079 36.259)` }, amber: { 50: `oklch(98.7% 0.022 95.277)`, 100: `oklch(96.2% 0.059 95.617)`, 200: `oklch(92.4% 0.12 95.746)`, 300: `oklch(87.9% 0.169 91.605)`, 400: `oklch(82.8% 0.189 84.429)`, 500: `oklch(76.9% 0.188 70.08)`, 600: `oklch(66.6% 0.179 58.318)`, 700: `oklch(55.5% 0.163 48.998)`, 800: `oklch(47.3% 0.137 46.201)`, 900: `oklch(41.4% 0.112 45.904)`, 950: `oklch(27.9% 0.077 45.635)` }, yellow: { 50: `oklch(98.7% 0.026 102.212)`, 100: `oklch(97.3% 0.071 103.193)`, 200: `oklch(94.5% 0.129 101.54)`, 300: `oklch(90.5% 0.182 98.111)`, 400: `oklch(85.2% 0.199 91.936)`, 500: `oklch(79.5% 0.184 86.047)`, 600: `oklch(68.1% 0.162 75.834)`, 700: `oklch(55.4% 0.135 66.442)`, 800: `oklch(47.6% 0.114 61.907)`, 900: `oklch(42.1% 0.095 57.708)`, 950: `oklch(28.6% 0.066 53.813)` }, lime: { 50: `oklch(98.6% 0.031 120.757)`, 100: `oklch(96.7% 0.067 122.328)`, 200: `oklch(93.8% 0.127 124.321)`, 300: `oklch(89.7% 0.196 126.665)`, 400: `oklch(84.1% 0.238 128.85)`, 500: `oklch(76.8% 0.233 130.85)`, 600: `oklch(64.8% 0.2 131.684)`, 700: `oklch(53.2% 0.157 131.589)`, 800: `oklch(45.3% 0.124 130.933)`, 900: `oklch(40.5% 0.101 131.063)`, 950: `oklch(27.4% 0.072 132.109)` }, green: { 50: `oklch(98.2% 0.018 155.826)`, 100: `oklch(96.2% 0.044 156.743)`, 200: `oklch(92.5% 0.084 155.995)`, 300: `oklch(87.1% 0.15 154.449)`, 400: `oklch(79.2% 0.209 151.711)`, 500: `oklch(72.3% 0.219 149.579)`, 600: `oklch(62.7% 0.194 149.214)`, 700: `oklch(52.7% 0.154 150.069)`, 800: `oklch(44.8% 0.119 151.328)`, 900: `oklch(39.3% 0.095 152.535)`, 950: `oklch(26.6% 0.065 152.934)` }, emerald: { 50: `oklch(97.9% 0.021 166.113)`, 100: `oklch(95% 0.052 163.051)`, 200: `oklch(90.5% 0.093 164.15)`, 300: `oklch(84.5% 0.143 164.978)`, 400: `oklch(76.5% 0.177 163.223)`, 500: `oklch(69.6% 0.17 162.48)`, 600: `oklch(59.6% 0.145 163.225)`, 700: `oklch(50.8% 0.118 165.612)`, 800: `oklch(43.2% 0.095 166.913)`, 900: `oklch(37.8% 0.077 168.94)`, 950: `oklch(26.2% 0.051 172.552)` }, teal: { 50: `oklch(98.4% 0.014 180.72)`, 100: `oklch(95.3% 0.051 180.801)`, 200: `oklch(91% 0.096 180.426)`, 300: `oklch(85.5% 0.138 181.071)`, 400: `oklch(77.7% 0.152 181.912)`, 500: `oklch(70.4% 0.14 182.503)`, 600: `oklch(60% 0.118 184.704)`, 700: `oklch(51.1% 0.096 186.391)`, 800: `oklch(43.7% 0.078 188.216)`, 900: `oklch(38.6% 0.063 188.416)`, 950: `oklch(27.7% 0.046 192.524)` }, cyan: { 50: `oklch(98.4% 0.019 200.873)`, 100: `oklch(95.6% 0.045 203.388)`, 200: `oklch(91.7% 0.08 205.041)`, 300: `oklch(86.5% 0.127 207.078)`, 400: `oklch(78.9% 0.154 211.53)`, 500: `oklch(71.5% 0.143 215.221)`, 600: `oklch(60.9% 0.126 221.723)`, 700: `oklch(52% 0.105 223.128)`, 800: `oklch(45% 0.085 224.283)`, 900: `oklch(39.8% 0.07 227.392)`, 950: `oklch(30.2% 0.056 229.695)` }, sky: { 50: `oklch(97.7% 0.013 236.62)`, 100: `oklch(95.1% 0.026 236.824)`, 200: `oklch(90.1% 0.058 230.902)`, 300: `oklch(82.8% 0.111 230.318)`, 400: `oklch(74.6% 0.16 232.661)`, 500: `oklch(68.5% 0.169 237.323)`, 600: `oklch(58.8% 0.158 241.966)`, 700: `oklch(50% 0.134 242.749)`, 800: `oklch(44.3% 0.11 240.79)`, 900: `oklch(39.1% 0.09 240.876)`, 950: `oklch(29.3% 0.066 243.157)` }, blue: { 50: `oklch(97% 0.014 254.604)`, 100: `oklch(93.2% 0.032 255.585)`, 200: `oklch(88.2% 0.059 254.128)`, 300: `oklch(80.9% 0.105 251.813)`, 400: `oklch(70.7% 0.165 254.624)`, 500: `oklch(62.3% 0.214 259.815)`, 600: `oklch(54.6% 0.245 262.881)`, 700: `oklch(48.8% 0.243 264.376)`, 800: `oklch(42.4% 0.199 265.638)`, 900: `oklch(37.9% 0.146 265.522)`, 950: `oklch(28.2% 0.091 267.935)` }, indigo: { 50: `oklch(96.2% 0.018 272.314)`, 100: `oklch(93% 0.034 272.788)`, 200: `oklch(87% 0.065 274.039)`, 300: `oklch(78.5% 0.115 274.713)`, 400: `oklch(67.3% 0.182 276.935)`, 500: `oklch(58.5% 0.233 277.117)`, 600: `oklch(51.1% 0.262 276.966)`, 700: `oklch(45.7% 0.24 277.023)`, 800: `oklch(39.8% 0.195 277.366)`, 900: `oklch(35.9% 0.144 278.697)`, 950: `oklch(25.7% 0.09 281.288)` }, violet: { 50: `oklch(96.9% 0.016 293.756)`, 100: `oklch(94.3% 0.029 294.588)`, 200: `oklch(89.4% 0.057 293.283)`, 300: `oklch(81.1% 0.111 293.571)`, 400: `oklch(70.2% 0.183 293.541)`, 500: `oklch(60.6% 0.25 292.717)`, 600: `oklch(54.1% 0.281 293.009)`, 700: `oklch(49.1% 0.27 292.581)`, 800: `oklch(43.2% 0.232 292.759)`, 900: `oklch(38% 0.189 293.745)`, 950: `oklch(28.3% 0.141 291.089)` }, purple: { 50: `oklch(97.7% 0.014 308.299)`, 100: `oklch(94.6% 0.033 307.174)`, 200: `oklch(90.2% 0.063 306.703)`, 300: `oklch(82.7% 0.119 306.383)`, 400: `oklch(71.4% 0.203 305.504)`, 500: `oklch(62.7% 0.265 303.9)`, 600: `oklch(55.8% 0.288 302.321)`, 700: `oklch(49.6% 0.265 301.924)`, 800: `oklch(43.8% 0.218 303.724)`, 900: `oklch(38.1% 0.176 304.987)`, 950: `oklch(29.1% 0.149 302.717)` }, fuchsia: { 50: `oklch(97.7% 0.017 320.058)`, 100: `oklch(95.2% 0.037 318.852)`, 200: `oklch(90.3% 0.076 319.62)`, 300: `oklch(83.3% 0.145 321.434)`, 400: `oklch(74% 0.238 322.16)`, 500: `oklch(66.7% 0.295 322.15)`, 600: `oklch(59.1% 0.293 322.896)`, 700: `oklch(51.8% 0.253 323.949)`, 800: `oklch(45.2% 0.211 324.591)`, 900: `oklch(40.1% 0.17 325.612)`, 950: `oklch(29.3% 0.136 325.661)` }, pink: { 50: `oklch(97.1% 0.014 343.198)`, 100: `oklch(94.8% 0.028 342.258)`, 200: `oklch(89.9% 0.061 343.231)`, 300: `oklch(82.3% 0.12 346.018)`, 400: `oklch(71.8% 0.202 349.761)`, 500: `oklch(65.6% 0.241 354.308)`, 600: `oklch(59.2% 0.249 0.584)`, 700: `oklch(52.5% 0.223 3.958)`, 800: `oklch(45.9% 0.187 3.815)`, 900: `oklch(40.8% 0.153 2.432)`, 950: `oklch(28.4% 0.109 3.907)` }, rose: { 50: `oklch(96.9% 0.015 12.422)`, 100: `oklch(94.1% 0.03 12.58)`, 200: `oklch(89.2% 0.058 10.001)`, 300: `oklch(81% 0.117 11.638)`, 400: `oklch(71.2% 0.194 13.428)`, 500: `oklch(64.5% 0.246 16.439)`, 600: `oklch(58.6% 0.253 17.585)`, 700: `oklch(51.4% 0.222 16.935)`, 800: `oklch(45.5% 0.188 13.697)`, 900: `oklch(41% 0.159 10.272)`, 950: `oklch(27.1% 0.105 12.094)` } };
function V(e2) {
  return { __BARE_VALUE__: e2 };
}
let H = V((e2) => {
  if (L(e2.value)) return e2.value;
}), U = V((e2) => {
  if (L(e2.value)) return `${e2.value}%`;
}), W = V((e2) => {
  if (L(e2.value)) return `${e2.value}px`;
}), G = V((e2) => {
  if (L(e2.value)) return `${e2.value}ms`;
}), K = V((e2) => {
  if (L(e2.value)) return `${e2.value}deg`;
}), we = V((e2) => {
  if (e2.fraction === null) return;
  let [t2, n2] = v(e2.fraction, `/`);
  if (!(!L(t2) || !L(n2))) return e2.fraction;
}), q = V((e2) => {
  if (L(Number(e2.value))) return `repeat(${e2.value}, minmax(0, 1fr))`;
});
var Te = { accentColor: ({ theme: e2 }) => e2(`colors`), animation: { none: `none`, spin: `spin 1s linear infinite`, ping: `ping 1s cubic-bezier(0, 0, 0.2, 1) infinite`, pulse: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`, bounce: `bounce 1s infinite` }, aria: { busy: `busy="true"`, checked: `checked="true"`, disabled: `disabled="true"`, expanded: `expanded="true"`, hidden: `hidden="true"`, pressed: `pressed="true"`, readonly: `readonly="true"`, required: `required="true"`, selected: `selected="true"` }, aspectRatio: { auto: `auto`, square: `1 / 1`, video: `16 / 9`, ...we }, backdropBlur: ({ theme: e2 }) => e2(`blur`), backdropBrightness: ({ theme: e2 }) => ({ ...e2(`brightness`), ...U }), backdropContrast: ({ theme: e2 }) => ({ ...e2(`contrast`), ...U }), backdropGrayscale: ({ theme: e2 }) => ({ ...e2(`grayscale`), ...U }), backdropHueRotate: ({ theme: e2 }) => ({ ...e2(`hueRotate`), ...K }), backdropInvert: ({ theme: e2 }) => ({ ...e2(`invert`), ...U }), backdropOpacity: ({ theme: e2 }) => ({ ...e2(`opacity`), ...U }), backdropSaturate: ({ theme: e2 }) => ({ ...e2(`saturate`), ...U }), backdropSepia: ({ theme: e2 }) => ({ ...e2(`sepia`), ...U }), backgroundColor: ({ theme: e2 }) => e2(`colors`), backgroundImage: { none: `none`, "gradient-to-t": `linear-gradient(to top, var(--tw-gradient-stops))`, "gradient-to-tr": `linear-gradient(to top right, var(--tw-gradient-stops))`, "gradient-to-r": `linear-gradient(to right, var(--tw-gradient-stops))`, "gradient-to-br": `linear-gradient(to bottom right, var(--tw-gradient-stops))`, "gradient-to-b": `linear-gradient(to bottom, var(--tw-gradient-stops))`, "gradient-to-bl": `linear-gradient(to bottom left, var(--tw-gradient-stops))`, "gradient-to-l": `linear-gradient(to left, var(--tw-gradient-stops))`, "gradient-to-tl": `linear-gradient(to top left, var(--tw-gradient-stops))` }, backgroundOpacity: ({ theme: e2 }) => e2(`opacity`), backgroundPosition: { bottom: `bottom`, center: `center`, left: `left`, "left-bottom": `left bottom`, "left-top": `left top`, right: `right`, "right-bottom": `right bottom`, "right-top": `right top`, top: `top` }, backgroundSize: { auto: `auto`, cover: `cover`, contain: `contain` }, blur: { 0: `0`, none: ``, sm: `4px`, DEFAULT: `8px`, md: `12px`, lg: `16px`, xl: `24px`, "2xl": `40px`, "3xl": `64px` }, borderColor: ({ theme: e2 }) => ({ DEFAULT: `currentcolor`, ...e2(`colors`) }), borderOpacity: ({ theme: e2 }) => e2(`opacity`), borderRadius: { none: `0px`, sm: `0.125rem`, DEFAULT: `0.25rem`, md: `0.375rem`, lg: `0.5rem`, xl: `0.75rem`, "2xl": `1rem`, "3xl": `1.5rem`, full: `9999px` }, borderSpacing: ({ theme: e2 }) => e2(`spacing`), borderWidth: { DEFAULT: `1px`, 0: `0px`, 2: `2px`, 4: `4px`, 8: `8px`, ...W }, boxShadow: { sm: `0 1px 2px 0 rgb(0 0 0 / 0.05)`, DEFAULT: `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`, md: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`, lg: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`, xl: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`, "2xl": `0 25px 50px -12px rgb(0 0 0 / 0.25)`, inner: `inset 0 2px 4px 0 rgb(0 0 0 / 0.05)`, none: `none` }, boxShadowColor: ({ theme: e2 }) => e2(`colors`), brightness: { 0: `0`, 50: `.5`, 75: `.75`, 90: `.9`, 95: `.95`, 100: `1`, 105: `1.05`, 110: `1.1`, 125: `1.25`, 150: `1.5`, 200: `2`, ...U }, caretColor: ({ theme: e2 }) => e2(`colors`), colors: () => ({ ...Ce }), columns: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, "3xs": `16rem`, "2xs": `18rem`, xs: `20rem`, sm: `24rem`, md: `28rem`, lg: `32rem`, xl: `36rem`, "2xl": `42rem`, "3xl": `48rem`, "4xl": `56rem`, "5xl": `64rem`, "6xl": `72rem`, "7xl": `80rem`, ...H }, container: {}, content: { none: `none` }, contrast: { 0: `0`, 50: `.5`, 75: `.75`, 100: `1`, 125: `1.25`, 150: `1.5`, 200: `2`, ...U }, cursor: { auto: `auto`, default: `default`, pointer: `pointer`, wait: `wait`, text: `text`, move: `move`, help: `help`, "not-allowed": `not-allowed`, none: `none`, "context-menu": `context-menu`, progress: `progress`, cell: `cell`, crosshair: `crosshair`, "vertical-text": `vertical-text`, alias: `alias`, copy: `copy`, "no-drop": `no-drop`, grab: `grab`, grabbing: `grabbing`, "all-scroll": `all-scroll`, "col-resize": `col-resize`, "row-resize": `row-resize`, "n-resize": `n-resize`, "e-resize": `e-resize`, "s-resize": `s-resize`, "w-resize": `w-resize`, "ne-resize": `ne-resize`, "nw-resize": `nw-resize`, "se-resize": `se-resize`, "sw-resize": `sw-resize`, "ew-resize": `ew-resize`, "ns-resize": `ns-resize`, "nesw-resize": `nesw-resize`, "nwse-resize": `nwse-resize`, "zoom-in": `zoom-in`, "zoom-out": `zoom-out` }, divideColor: ({ theme: e2 }) => e2(`borderColor`), divideOpacity: ({ theme: e2 }) => e2(`borderOpacity`), divideWidth: ({ theme: e2 }) => ({ ...e2(`borderWidth`), ...W }), dropShadow: { sm: `0 1px 1px rgb(0 0 0 / 0.05)`, DEFAULT: [`0 1px 2px rgb(0 0 0 / 0.1)`, `0 1px 1px rgb(0 0 0 / 0.06)`], md: [`0 4px 3px rgb(0 0 0 / 0.07)`, `0 2px 2px rgb(0 0 0 / 0.06)`], lg: [`0 10px 8px rgb(0 0 0 / 0.04)`, `0 4px 3px rgb(0 0 0 / 0.1)`], xl: [`0 20px 13px rgb(0 0 0 / 0.03)`, `0 8px 5px rgb(0 0 0 / 0.08)`], "2xl": `0 25px 25px rgb(0 0 0 / 0.15)`, none: `0 0 #0000` }, fill: ({ theme: e2 }) => e2(`colors`), flex: { 1: `1 1 0%`, auto: `1 1 auto`, initial: `0 1 auto`, none: `none` }, flexBasis: ({ theme: e2 }) => ({ auto: `auto`, "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, "1/12": `8.333333%`, "2/12": `16.666667%`, "3/12": `25%`, "4/12": `33.333333%`, "5/12": `41.666667%`, "6/12": `50%`, "7/12": `58.333333%`, "8/12": `66.666667%`, "9/12": `75%`, "10/12": `83.333333%`, "11/12": `91.666667%`, full: `100%`, ...e2(`spacing`) }), flexGrow: { 0: `0`, DEFAULT: `1`, ...H }, flexShrink: { 0: `0`, DEFAULT: `1`, ...H }, fontFamily: { sans: [`ui-sans-serif`, `system-ui`, `sans-serif`, `"Apple Color Emoji"`, `"Segoe UI Emoji"`, `"Segoe UI Symbol"`, `"Noto Color Emoji"`], serif: [`ui-serif`, `Georgia`, `Cambria`, `"Times New Roman"`, `Times`, `serif`], mono: [`ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `"Liberation Mono"`, `"Courier New"`, `monospace`] }, fontSize: { xs: [`0.75rem`, { lineHeight: `1rem` }], sm: [`0.875rem`, { lineHeight: `1.25rem` }], base: [`1rem`, { lineHeight: `1.5rem` }], lg: [`1.125rem`, { lineHeight: `1.75rem` }], xl: [`1.25rem`, { lineHeight: `1.75rem` }], "2xl": [`1.5rem`, { lineHeight: `2rem` }], "3xl": [`1.875rem`, { lineHeight: `2.25rem` }], "4xl": [`2.25rem`, { lineHeight: `2.5rem` }], "5xl": [`3rem`, { lineHeight: `1` }], "6xl": [`3.75rem`, { lineHeight: `1` }], "7xl": [`4.5rem`, { lineHeight: `1` }], "8xl": [`6rem`, { lineHeight: `1` }], "9xl": [`8rem`, { lineHeight: `1` }] }, fontWeight: { thin: `100`, extralight: `200`, light: `300`, normal: `400`, medium: `500`, semibold: `600`, bold: `700`, extrabold: `800`, black: `900` }, gap: ({ theme: e2 }) => e2(`spacing`), gradientColorStops: ({ theme: e2 }) => e2(`colors`), gradientColorStopPositions: { "0%": `0%`, "5%": `5%`, "10%": `10%`, "15%": `15%`, "20%": `20%`, "25%": `25%`, "30%": `30%`, "35%": `35%`, "40%": `40%`, "45%": `45%`, "50%": `50%`, "55%": `55%`, "60%": `60%`, "65%": `65%`, "70%": `70%`, "75%": `75%`, "80%": `80%`, "85%": `85%`, "90%": `90%`, "95%": `95%`, "100%": `100%`, ...U }, grayscale: { 0: `0`, DEFAULT: `100%`, ...U }, gridAutoColumns: { auto: `auto`, min: `min-content`, max: `max-content`, fr: `minmax(0, 1fr)` }, gridAutoRows: { auto: `auto`, min: `min-content`, max: `max-content`, fr: `minmax(0, 1fr)` }, gridColumn: { auto: `auto`, "span-1": `span 1 / span 1`, "span-2": `span 2 / span 2`, "span-3": `span 3 / span 3`, "span-4": `span 4 / span 4`, "span-5": `span 5 / span 5`, "span-6": `span 6 / span 6`, "span-7": `span 7 / span 7`, "span-8": `span 8 / span 8`, "span-9": `span 9 / span 9`, "span-10": `span 10 / span 10`, "span-11": `span 11 / span 11`, "span-12": `span 12 / span 12`, "span-full": `1 / -1` }, gridColumnEnd: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13`, ...H }, gridColumnStart: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13`, ...H }, gridRow: { auto: `auto`, "span-1": `span 1 / span 1`, "span-2": `span 2 / span 2`, "span-3": `span 3 / span 3`, "span-4": `span 4 / span 4`, "span-5": `span 5 / span 5`, "span-6": `span 6 / span 6`, "span-7": `span 7 / span 7`, "span-8": `span 8 / span 8`, "span-9": `span 9 / span 9`, "span-10": `span 10 / span 10`, "span-11": `span 11 / span 11`, "span-12": `span 12 / span 12`, "span-full": `1 / -1` }, gridRowEnd: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13`, ...H }, gridRowStart: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13`, ...H }, gridTemplateColumns: { none: `none`, subgrid: `subgrid`, 1: `repeat(1, minmax(0, 1fr))`, 2: `repeat(2, minmax(0, 1fr))`, 3: `repeat(3, minmax(0, 1fr))`, 4: `repeat(4, minmax(0, 1fr))`, 5: `repeat(5, minmax(0, 1fr))`, 6: `repeat(6, minmax(0, 1fr))`, 7: `repeat(7, minmax(0, 1fr))`, 8: `repeat(8, minmax(0, 1fr))`, 9: `repeat(9, minmax(0, 1fr))`, 10: `repeat(10, minmax(0, 1fr))`, 11: `repeat(11, minmax(0, 1fr))`, 12: `repeat(12, minmax(0, 1fr))`, ...q }, gridTemplateRows: { none: `none`, subgrid: `subgrid`, 1: `repeat(1, minmax(0, 1fr))`, 2: `repeat(2, minmax(0, 1fr))`, 3: `repeat(3, minmax(0, 1fr))`, 4: `repeat(4, minmax(0, 1fr))`, 5: `repeat(5, minmax(0, 1fr))`, 6: `repeat(6, minmax(0, 1fr))`, 7: `repeat(7, minmax(0, 1fr))`, 8: `repeat(8, minmax(0, 1fr))`, 9: `repeat(9, minmax(0, 1fr))`, 10: `repeat(10, minmax(0, 1fr))`, 11: `repeat(11, minmax(0, 1fr))`, 12: `repeat(12, minmax(0, 1fr))`, ...q }, height: ({ theme: e2 }) => ({ auto: `auto`, "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, full: `100%`, screen: `100vh`, svh: `100svh`, lvh: `100lvh`, dvh: `100dvh`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e2(`spacing`) }), hueRotate: { 0: `0deg`, 15: `15deg`, 30: `30deg`, 60: `60deg`, 90: `90deg`, 180: `180deg`, ...K }, inset: ({ theme: e2 }) => ({ auto: `auto`, "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, full: `100%`, ...e2(`spacing`) }), invert: { 0: `0`, DEFAULT: `100%`, ...U }, keyframes: { spin: { to: { transform: `rotate(360deg)` } }, ping: { "75%, 100%": { transform: `scale(2)`, opacity: `0` } }, pulse: { "50%": { opacity: `.5` } }, bounce: { "0%, 100%": { transform: `translateY(-25%)`, animationTimingFunction: `cubic-bezier(0.8,0,1,1)` }, "50%": { transform: `none`, animationTimingFunction: `cubic-bezier(0,0,0.2,1)` } } }, letterSpacing: { tighter: `-0.05em`, tight: `-0.025em`, normal: `0em`, wide: `0.025em`, wider: `0.05em`, widest: `0.1em` }, lineHeight: { none: `1`, tight: `1.25`, snug: `1.375`, normal: `1.5`, relaxed: `1.625`, loose: `2`, 3: `.75rem`, 4: `1rem`, 5: `1.25rem`, 6: `1.5rem`, 7: `1.75rem`, 8: `2rem`, 9: `2.25rem`, 10: `2.5rem` }, listStyleType: { none: `none`, disc: `disc`, decimal: `decimal` }, listStyleImage: { none: `none` }, margin: ({ theme: e2 }) => ({ auto: `auto`, ...e2(`spacing`) }), lineClamp: { 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, ...H }, maxHeight: ({ theme: e2 }) => ({ none: `none`, full: `100%`, screen: `100vh`, svh: `100svh`, lvh: `100lvh`, dvh: `100dvh`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e2(`spacing`) }), maxWidth: ({ theme: e2 }) => ({ none: `none`, xs: `20rem`, sm: `24rem`, md: `28rem`, lg: `32rem`, xl: `36rem`, "2xl": `42rem`, "3xl": `48rem`, "4xl": `56rem`, "5xl": `64rem`, "6xl": `72rem`, "7xl": `80rem`, full: `100%`, min: `min-content`, max: `max-content`, fit: `fit-content`, prose: `65ch`, ...e2(`spacing`) }), minHeight: ({ theme: e2 }) => ({ full: `100%`, screen: `100vh`, svh: `100svh`, lvh: `100lvh`, dvh: `100dvh`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e2(`spacing`) }), minWidth: ({ theme: e2 }) => ({ full: `100%`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e2(`spacing`) }), objectPosition: { bottom: `bottom`, center: `center`, left: `left`, "left-bottom": `left bottom`, "left-top": `left top`, right: `right`, "right-bottom": `right bottom`, "right-top": `right top`, top: `top` }, opacity: { 0: `0`, 5: `0.05`, 10: `0.1`, 15: `0.15`, 20: `0.2`, 25: `0.25`, 30: `0.3`, 35: `0.35`, 40: `0.4`, 45: `0.45`, 50: `0.5`, 55: `0.55`, 60: `0.6`, 65: `0.65`, 70: `0.7`, 75: `0.75`, 80: `0.8`, 85: `0.85`, 90: `0.9`, 95: `0.95`, 100: `1`, ...U }, order: { first: `-9999`, last: `9999`, none: `0`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, ...H }, outlineColor: ({ theme: e2 }) => e2(`colors`), outlineOffset: { 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...W }, outlineWidth: { 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...W }, padding: ({ theme: e2 }) => e2(`spacing`), placeholderColor: ({ theme: e2 }) => e2(`colors`), placeholderOpacity: ({ theme: e2 }) => e2(`opacity`), ringColor: ({ theme: e2 }) => ({ DEFAULT: `currentcolor`, ...e2(`colors`) }), ringOffsetColor: ({ theme: e2 }) => e2(`colors`), ringOffsetWidth: { 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...W }, ringOpacity: ({ theme: e2 }) => ({ DEFAULT: `0.5`, ...e2(`opacity`) }), ringWidth: { DEFAULT: `3px`, 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...W }, rotate: { 0: `0deg`, 1: `1deg`, 2: `2deg`, 3: `3deg`, 6: `6deg`, 12: `12deg`, 45: `45deg`, 90: `90deg`, 180: `180deg`, ...K }, saturate: { 0: `0`, 50: `.5`, 100: `1`, 150: `1.5`, 200: `2`, ...U }, scale: { 0: `0`, 50: `.5`, 75: `.75`, 90: `.9`, 95: `.95`, 100: `1`, 105: `1.05`, 110: `1.1`, 125: `1.25`, 150: `1.5`, ...U }, screens: { sm: `40rem`, md: `48rem`, lg: `64rem`, xl: `80rem`, "2xl": `96rem` }, scrollMargin: ({ theme: e2 }) => e2(`spacing`), scrollPadding: ({ theme: e2 }) => e2(`spacing`), sepia: { 0: `0`, DEFAULT: `100%`, ...U }, skew: { 0: `0deg`, 1: `1deg`, 2: `2deg`, 3: `3deg`, 6: `6deg`, 12: `12deg`, ...K }, space: ({ theme: e2 }) => e2(`spacing`), spacing: { px: `1px`, 0: `0px`, 0.5: `0.125rem`, 1: `0.25rem`, 1.5: `0.375rem`, 2: `0.5rem`, 2.5: `0.625rem`, 3: `0.75rem`, 3.5: `0.875rem`, 4: `1rem`, 5: `1.25rem`, 6: `1.5rem`, 7: `1.75rem`, 8: `2rem`, 9: `2.25rem`, 10: `2.5rem`, 11: `2.75rem`, 12: `3rem`, 14: `3.5rem`, 16: `4rem`, 20: `5rem`, 24: `6rem`, 28: `7rem`, 32: `8rem`, 36: `9rem`, 40: `10rem`, 44: `11rem`, 48: `12rem`, 52: `13rem`, 56: `14rem`, 60: `15rem`, 64: `16rem`, 72: `18rem`, 80: `20rem`, 96: `24rem` }, stroke: ({ theme: e2 }) => ({ none: `none`, ...e2(`colors`) }), strokeWidth: { 0: `0`, 1: `1`, 2: `2`, ...H }, supports: {}, data: {}, textColor: ({ theme: e2 }) => e2(`colors`), textDecorationColor: ({ theme: e2 }) => e2(`colors`), textDecorationThickness: { auto: `auto`, "from-font": `from-font`, 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...W }, textIndent: ({ theme: e2 }) => e2(`spacing`), textOpacity: ({ theme: e2 }) => e2(`opacity`), textUnderlineOffset: { auto: `auto`, 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...W }, transformOrigin: { center: `center`, top: `top`, "top-right": `top right`, right: `right`, "bottom-right": `bottom right`, bottom: `bottom`, "bottom-left": `bottom left`, left: `left`, "top-left": `top left` }, transitionDelay: { 0: `0s`, 75: `75ms`, 100: `100ms`, 150: `150ms`, 200: `200ms`, 300: `300ms`, 500: `500ms`, 700: `700ms`, 1e3: `1000ms`, ...G }, transitionDuration: { DEFAULT: `150ms`, 0: `0s`, 75: `75ms`, 100: `100ms`, 150: `150ms`, 200: `200ms`, 300: `300ms`, 500: `500ms`, 700: `700ms`, 1e3: `1000ms`, ...G }, transitionProperty: { none: `none`, all: `all`, DEFAULT: `color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter`, colors: `color, background-color, border-color, outline-color, text-decoration-color, fill, stroke`, opacity: `opacity`, shadow: `box-shadow`, transform: `transform` }, transitionTimingFunction: { DEFAULT: `cubic-bezier(0.4, 0, 0.2, 1)`, linear: `linear`, in: `cubic-bezier(0.4, 0, 1, 1)`, out: `cubic-bezier(0, 0, 0.2, 1)`, "in-out": `cubic-bezier(0.4, 0, 0.2, 1)` }, translate: ({ theme: e2 }) => ({ "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, full: `100%`, ...e2(`spacing`) }), size: ({ theme: e2 }) => ({ auto: `auto`, "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, "1/12": `8.333333%`, "2/12": `16.666667%`, "3/12": `25%`, "4/12": `33.333333%`, "5/12": `41.666667%`, "6/12": `50%`, "7/12": `58.333333%`, "8/12": `66.666667%`, "9/12": `75%`, "10/12": `83.333333%`, "11/12": `91.666667%`, full: `100%`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e2(`spacing`) }), width: ({ theme: e2 }) => ({ auto: `auto`, "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, "1/12": `8.333333%`, "2/12": `16.666667%`, "3/12": `25%`, "4/12": `33.333333%`, "5/12": `41.666667%`, "6/12": `50%`, "7/12": `58.333333%`, "8/12": `66.666667%`, "9/12": `75%`, "10/12": `83.333333%`, "11/12": `91.666667%`, full: `100%`, screen: `100vw`, svw: `100svw`, lvw: `100lvw`, dvw: `100dvw`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e2(`spacing`) }), willChange: { auto: `auto`, scroll: `scroll-position`, contents: `contents`, transform: `transform` }, zIndex: { auto: `auto`, 0: `0`, 10: `10`, 20: `20`, 30: `30`, 40: `40`, 50: `50`, ...H } };
const Ee = new Uint8Array(256), De = new u((e2) => {
  let t2 = N(e2), n2 = /* @__PURE__ */ new Set();
  return x(t2, (e3, { parent: r2 }) => {
    let i2 = r2 === null ? t2 : r2.nodes ?? [];
    if (e3.kind === `word` && (e3.value === `+` || e3.value === `-` || e3.value === `*` || e3.value === `/`)) {
      let t3 = i2.indexOf(e3) ?? -1;
      if (t3 === -1) return;
      let r3 = i2[t3 - 1];
      if ((r3 == null ? void 0 : r3.kind) !== `separator` || r3.value !== ` `) return;
      let a2 = i2[t3 + 1];
      if ((a2 == null ? void 0 : a2.kind) !== `separator` || a2.value !== ` `) return;
      n2.add(r3), n2.add(a2);
    } else e3.kind === `separator` && e3.value.trim() === `/` ? e3.value = `/` : e3.kind === `separator` && e3.value.length > 0 && e3.value.trim() === `` ? (i2[0] === e3 || i2[i2.length - 1] === e3) && n2.add(e3) : e3.kind === `separator` && e3.value.trim() === `,` && (e3.value = `,`);
  }), n2.size > 0 && x(t2, (e3, { replaceWith: t3 }) => {
    n2.has(e3) && (n2.delete(e3), t3([]));
  }), J(t2), S(t2);
}), Oe = new u((e2) => {
  let t2 = N(e2);
  return t2.length === 3 && t2[0].kind === `word` && t2[0].value === `&` && t2[1].kind === `separator` && t2[1].value === `:` && t2[2].kind === `function` && t2[2].value === `is` ? S(t2[2].nodes) : e2;
});
function J(e2) {
  for (let t2 of e2) switch (t2.kind) {
    case `function`:
      if (t2.value === `url` || t2.value.endsWith(`_url`)) {
        t2.value = Y(t2.value);
        break;
      }
      if (t2.value === `var` || t2.value.endsWith(`_var`) || t2.value === `theme` || t2.value.endsWith(`_theme`)) {
        t2.value = Y(t2.value);
        for (let e3 = 0; e3 < t2.nodes.length; e3++) J([t2.nodes[e3]]);
        break;
      }
      t2.value = Y(t2.value), J(t2.nodes);
      break;
    case `separator`:
      t2.value = Y(t2.value);
      break;
    case `word`:
      (t2.value[0] !== `-` || t2.value[1] !== `-`) && (t2.value = Y(t2.value));
      break;
    default:
      Ae(t2);
  }
}
const ke = new u((e2) => {
  let t2 = N(e2);
  return t2.length === 1 && t2[0].kind === `function` && t2[0].value === `var`;
});
function Ae(e2) {
  throw Error(`Unexpected value: ${e2}`);
}
function Y(e2) {
  return e2.replaceAll(`_`, String.raw`\_`).replaceAll(` `, `_`);
}
function je(e2, t2, { onInvalidCandidate: n2 } = {}) {
  let r2 = /* @__PURE__ */ new Map(), i2 = [], a2 = /* @__PURE__ */ new Map();
  for (let r3 of e2) {
    if (t2.invalidCandidates.has(r3)) {
      n2 == null ? void 0 : n2(r3);
      continue;
    }
    let e3 = t2.parseCandidate(r3);
    if (e3.length === 0) {
      n2 == null ? void 0 : n2(r3);
      continue;
    }
    a2.set(r3, e3);
  }
  let o2 = t2.getVariantOrder();
  for (let [e3, s2] of a2) {
    let a3 = false;
    for (let n3 of s2) {
      let s3 = t2.compileAstNodes(n3);
      if (s3.length === 0) continue;
      a3 = true;
      for (let { node: t3, propertySort: a4 } of s3) {
        let s4 = 0n;
        for (let e4 of n3.variants) s4 |= 1n << BigInt(o2.get(e4));
        r2.set(t3, { properties: a4, variants: s4, candidate: e3 }), i2.push(t3);
      }
    }
    a3 || (n2 == null ? void 0 : n2(e3));
  }
  return i2.sort((e3, t3) => {
    let n3 = r2.get(e3), i3 = r2.get(t3);
    if (n3.variants - i3.variants !== 0n) return Number(n3.variants - i3.variants);
    let a3 = 0;
    for (; a3 < n3.properties.order.length && a3 < i3.properties.order.length && n3.properties.order[a3] === i3.properties.order[a3]; ) a3 += 1;
    return (n3.properties.order[a3] ?? 1 / 0) - (i3.properties.order[a3] ?? 1 / 0) || i3.properties.count - n3.properties.count || l(n3.candidate, i3.candidate);
  }), { astNodes: i2, nodeSorting: r2 };
}
var X = e(a());
function Me(e2) {
  return e2.getClassList().map((e3) => ({ kind: `utility`, selector: e3[0] }));
}
function Z(e2) {
  return e2.getVariants().map((e3) => ({ kind: `variant`, selector: e3.name }));
}
function Ne() {
  return [{ kind: `utility`, selector: `flex` }];
}
function Pe(e2) {
  return e2.sort(([, e3], [, t2]) => e3 === t2 ? 0 : e3 === null ? -1 : t2 === null ? 1 : Q(e3 - t2)).map(([e3]) => e3);
}
function Q(e2) {
  return e2 > 0n ? 1 : e2 === 0n ? 0 : -1;
}
async function Fe(e2) {
  return Array.from(e2.theme.entries()).map((e3, t2) => {
    let n2 = e3[0], r2 = false, i2 = null, a2 = e3[1].value;
    return typeof a2 == `string` && a2.includes(`rem`) && (i2 = `${parseFloat(a2) * 16}px`, r2 = true), { key: n2, value: r2 ? i2 : a2, index: t2 };
  });
}
async function Ie(e2, t2) {
  return Pe(e2.getClassOrder(t2));
}
function $(e2, t2) {
  if (!(e2 == null ? void 0 : e2.includes(`rem`))) return e2;
  let n2 = [];
  (0, X.default)(e2).walk((e3) => {
    if (e3.type !== `word`) return true;
    let r3 = X.default.unit(e3.value);
    if (!r3 || r3.unit !== `rem` && r3.unit !== `rem;`) return false;
    let i2 = ` /* ${parseFloat(r3.number) * t2}px */`;
    return n2.push({ content: i2, sourceEndIndex: e3.sourceEndIndex }), false;
  });
  let r2 = 0;
  return n2.forEach((t3) => {
    e2 = e2.slice(0, t3.sourceEndIndex + r2) + t3.content + e2.slice(t3.sourceEndIndex + r2), r2 += t3.content.length;
  }), e2;
}
async function Le(e2, t2) {
  let n2 = e2.candidatesToCss(t2);
  return n2 = n2.map((e3) => e3 && $(e3, 16)), n2;
}
function Re(e2) {
  let t2 = Me(e2).concat(Z(e2).concat(Ne())), n2 = (e3) => e3.selector !== `*`, r2 = (t3) => {
    let n3 = je([t3.selector], e2).astNodes, r3 = n3.flatMap((e3) => `nodes` in e3 ? e3.nodes : []), i3 = e2.candidatesToCss([t3.selector]).at(0);
    return i3 && (i3 = i3.replaceAll(/([0-9.]+)rem/g, (e3, t4) => `${parseFloat(t4) * 16}px`)), i3 = i3 == null ? void 0 : i3.replaceAll(/\\/g, ``), { ...t3, declarations: r3 == null ? void 0 : r3.filter((e3) => e3.kind === `declaration`), css: i3 };
  }, i2 = (e3, t3) => e3.selector.startsWith(`-`) && !t3.selector.startsWith(`-`) ? 1 : !e3.selector.startsWith(`-`) && t3.selector.startsWith(`-`) ? -1 : l(e3.selector, t3.selector);
  return t2.filter(n2).map(r2).sort(i2);
}
function ze(e2, t2) {
  let n2 = typeof t2 == `number` ? t2.toString().length : 8;
  return (`0`.repeat(n2) + e2).slice(-n2);
}
export {
  $ as addPixelEquivalentsToValue,
  Q as bigSign,
  Le as candidatesToCss,
  Re as getClassList,
  Fe as getVariableList,
  o as loadDesignSystem,
  ze as naturalExpand,
  Ie as sortClasses
};
