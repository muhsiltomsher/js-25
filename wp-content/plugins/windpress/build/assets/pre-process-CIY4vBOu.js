var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _et_instances, r_fn, e_fn, t_fn, _a;
import { __commonJSMin as e, __toESM as t } from "./chunk-GxRd6SvM.min.js";
import { l as n } from "./chunk-HTB5LLOP-DipP7bJV.min.js";
import { require_browser as r } from "./lib-BxXHRCGk.min.js";
import { require_path_browserify as i } from "./path-browserify-DTdOVQJJ.min.js";
import { isValidUrl as a, postcss_default as o, require_cssesc as s, require_postcss as c } from "./cssesc-5IgvSXT7.js";
var l = new Set(`black.silver.gray.white.maroon.red.purple.fuchsia.green.lime.olive.yellow.navy.blue.teal.aqua.aliceblue.antiquewhite.aqua.aquamarine.azure.beige.bisque.black.blanchedalmond.blue.blueviolet.brown.burlywood.cadetblue.chartreuse.chocolate.coral.cornflowerblue.cornsilk.crimson.cyan.darkblue.darkcyan.darkgoldenrod.darkgray.darkgreen.darkgrey.darkkhaki.darkmagenta.darkolivegreen.darkorange.darkorchid.darkred.darksalmon.darkseagreen.darkslateblue.darkslategray.darkslategrey.darkturquoise.darkviolet.deeppink.deepskyblue.dimgray.dimgrey.dodgerblue.firebrick.floralwhite.forestgreen.fuchsia.gainsboro.ghostwhite.gold.goldenrod.gray.green.greenyellow.grey.honeydew.hotpink.indianred.indigo.ivory.khaki.lavender.lavenderblush.lawngreen.lemonchiffon.lightblue.lightcoral.lightcyan.lightgoldenrodyellow.lightgray.lightgreen.lightgrey.lightpink.lightsalmon.lightseagreen.lightskyblue.lightslategray.lightslategrey.lightsteelblue.lightyellow.lime.limegreen.linen.magenta.maroon.mediumaquamarine.mediumblue.mediumorchid.mediumpurple.mediumseagreen.mediumslateblue.mediumspringgreen.mediumturquoise.mediumvioletred.midnightblue.mintcream.mistyrose.moccasin.navajowhite.navy.oldlace.olive.olivedrab.orange.orangered.orchid.palegoldenrod.palegreen.paleturquoise.palevioletred.papayawhip.peachpuff.peru.pink.plum.powderblue.purple.rebeccapurple.red.rosybrown.royalblue.saddlebrown.salmon.sandybrown.seagreen.seashell.sienna.silver.skyblue.slateblue.slategray.slategrey.snow.springgreen.steelblue.tan.teal.thistle.tomato.turquoise.violet.wheat.white.whitesmoke.yellow.yellowgreen.transparent.currentcolor.canvas.canvastext.linktext.visitedtext.activetext.buttonface.buttontext.buttonborder.field.fieldtext.highlight.highlighttext.selecteditem.selecteditemtext.mark.marktext.graytext.accentcolor.accentcolortext`.split(`.`)), u = /^(rgba?|hsla?|hwb|color|(ok)?(lab|lch)|light-dark|color-mix)\(/i;
function d(e2) {
  return e2.charCodeAt(0) === 35 || u.test(e2) || l.has(e2.toLowerCase());
}
var f = [`calc`, `min`, `max`, `clamp`, `mod`, `rem`, `sin`, `cos`, `tan`, `asin`, `acos`, `atan`, `atan2`, `pow`, `sqrt`, `hypot`, `log`, `exp`, `round`], p = [`anchor-size`], m = RegExp(`(${p.join(`|`)})\\(`, `g`);
function h(e2) {
  return e2.indexOf(`(`) !== -1 && f.some((t2) => e2.includes(`${t2}(`));
}
function g(e2) {
  if (!f.some((t3) => e2.includes(t3))) return e2;
  let t2 = false;
  p.some((t3) => e2.includes(t3)) && (m.lastIndex = 0, e2 = e2.replace(m, (e3, n3) => (t2 = true, `$${p.indexOf(n3)}$(`)));
  let n2 = ``, r2 = [];
  for (let t3 = 0; t3 < e2.length; t3++) {
    let i2 = e2[t3];
    if (i2 === `(`) {
      n2 += i2;
      let a2 = t3;
      for (let n3 = t3 - 1; n3 >= 0; n3--) {
        let t4 = e2.charCodeAt(n3);
        if (t4 >= 48 && t4 <= 57) a2 = n3;
        else if (t4 >= 97 && t4 <= 122) a2 = n3;
        else break;
      }
      let o2 = e2.slice(a2, t3);
      if (f.includes(o2)) {
        r2.unshift(true);
        continue;
      } else if (r2[0] && o2 === ``) {
        r2.unshift(true);
        continue;
      }
      r2.unshift(false);
      continue;
    } else if (i2 === `)`) n2 += i2, r2.shift();
    else if (i2 === `,` && r2[0]) {
      n2 += `, `;
      continue;
    } else {
      if (i2 === ` ` && r2[0] && n2[n2.length - 1] === ` `) continue;
      if ((i2 === `+` || i2 === `*` || i2 === `/` || i2 === `-`) && r2[0]) {
        let r3 = n2.trimEnd(), a2 = r3[r3.length - 1];
        if (a2 === `+` || a2 === `*` || a2 === `/` || a2 === `-`) {
          n2 += i2;
          continue;
        } else if (a2 === `(` || a2 === `,`) {
          n2 += i2;
          continue;
        } else e2[t3 - 1] === ` ` ? n2 += `${i2} ` : n2 += ` ${i2} `;
      } else if (r2[0] && e2.startsWith(`to-zero`, t3)) {
        let r3 = t3;
        t3 += 7, n2 += e2.slice(r3, t3 + 1);
      } else n2 += i2;
    }
  }
  return t2 ? n2.replace(/\$(\d+)\$/g, (e3, t3) => p[t3] ?? e3) : n2;
}
var _ = new Uint8Array(256);
function v(e2, t2) {
  let n2 = 0, r2 = [], i2 = 0, a2 = e2.length, o2 = t2.charCodeAt(0);
  for (let t3 = 0; t3 < a2; t3++) {
    let s2 = e2.charCodeAt(t3);
    if (n2 === 0 && s2 === o2) {
      r2.push(e2.slice(i2, t3)), i2 = t3 + 1;
      continue;
    }
    switch (s2) {
      case 92:
        t3 += 1;
        break;
      case 39:
      case 34:
        for (; ++t3 < a2; ) {
          let n3 = e2.charCodeAt(t3);
          if (n3 === 92) {
            t3 += 1;
            continue;
          }
          if (n3 === s2) break;
        }
        break;
      case 40:
        _[n2] = 41, n2++;
        break;
      case 91:
        _[n2] = 93, n2++;
        break;
      case 123:
        _[n2] = 125, n2++;
        break;
      case 93:
      case 125:
      case 41:
        n2 > 0 && s2 === _[n2 - 1] && n2--;
        break;
    }
  }
  return r2.push(e2.slice(i2)), r2;
}
var y = { color: d, length: ce, percentage: re, ratio: ae, number: te, integer: M, url: S, position: le, "bg-size": ue, "line-width": C, image: E, "family-name": O, "generic-name": D, "absolute-size": k, "relative-size": A, angle: pe, vector: he };
function b(e2, t2) {
  var _a2;
  if (e2.startsWith(`var(`)) return null;
  for (let n2 of t2) if ((_a2 = y[n2]) == null ? void 0 : _a2.call(y, e2)) return n2;
  return null;
}
var x = /^url\(.*\)$/;
function S(e2) {
  return x.test(e2);
}
function C(e2) {
  return v(e2, ` `).every((e3) => ce(e3) || te(e3) || e3 === `thin` || e3 === `medium` || e3 === `thick`);
}
var w = /^(?:element|image|cross-fade|image-set)\(/, T = /^(repeating-)?(conic|linear|radial)-gradient\(/;
function E(e2) {
  let t2 = 0;
  for (let n2 of v(e2, `,`)) if (!n2.startsWith(`var(`)) {
    if (S(n2)) {
      t2 += 1;
      continue;
    }
    if (T.test(n2)) {
      t2 += 1;
      continue;
    }
    if (w.test(n2)) {
      t2 += 1;
      continue;
    }
    return false;
  }
  return t2 > 0;
}
function D(e2) {
  return e2 === `serif` || e2 === `sans-serif` || e2 === `monospace` || e2 === `cursive` || e2 === `fantasy` || e2 === `system-ui` || e2 === `ui-serif` || e2 === `ui-sans-serif` || e2 === `ui-monospace` || e2 === `ui-rounded` || e2 === `math` || e2 === `emoji` || e2 === `fangsong`;
}
function O(e2) {
  let t2 = 0;
  for (let n2 of v(e2, `,`)) {
    let e3 = n2.charCodeAt(0);
    if (e3 >= 48 && e3 <= 57) return false;
    n2.startsWith(`var(`) || (t2 += 1);
  }
  return t2 > 0;
}
function k(e2) {
  return e2 === `xx-small` || e2 === `x-small` || e2 === `small` || e2 === `medium` || e2 === `large` || e2 === `x-large` || e2 === `xx-large` || e2 === `xxx-large`;
}
function A(e2) {
  return e2 === `larger` || e2 === `smaller`;
}
var j = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/, ee = RegExp(`^${j.source}$`);
function te(e2) {
  return ee.test(e2) || h(e2);
}
var ne = RegExp(`^${j.source}%$`);
function re(e2) {
  return ne.test(e2) || h(e2);
}
var ie = RegExp(`^${j.source}s*/s*${j.source}$`);
function ae(e2) {
  return ie.test(e2) || h(e2);
}
var oe = `cm.mm.Q.in.pc.pt.px.em.ex.ch.rem.lh.rlh.vw.vh.vmin.vmax.vb.vi.svw.svh.lvw.lvh.dvw.dvh.cqw.cqh.cqi.cqb.cqmin.cqmax`.split(`.`), se = RegExp(`^${j.source}(${oe.join(`|`)})$`);
function ce(e2) {
  return se.test(e2) || h(e2);
}
function le(e2) {
  let t2 = 0;
  for (let n2 of v(e2, ` `)) {
    if (n2 === `center` || n2 === `top` || n2 === `right` || n2 === `bottom` || n2 === `left`) {
      t2 += 1;
      continue;
    }
    if (!n2.startsWith(`var(`)) {
      if (ce(n2) || re(n2)) {
        t2 += 1;
        continue;
      }
      return false;
    }
  }
  return t2 > 0;
}
function ue(e2) {
  let t2 = 0;
  for (let n2 of v(e2, `,`)) {
    if (n2 === `cover` || n2 === `contain`) {
      t2 += 1;
      continue;
    }
    let e3 = v(n2, ` `);
    if (e3.length !== 1 && e3.length !== 2) return false;
    if (e3.every((e4) => e4 === `auto` || ce(e4) || re(e4))) {
      t2 += 1;
      continue;
    }
  }
  return t2 > 0;
}
var de = [`deg`, `rad`, `grad`, `turn`], fe = RegExp(`^${j.source}(${de.join(`|`)})$`);
function pe(e2) {
  return fe.test(e2);
}
var me = RegExp(`^${j.source} +${j.source} +${j.source}$`);
function he(e2) {
  return me.test(e2);
}
function M(e2) {
  let t2 = Number(e2);
  return Number.isInteger(t2) && t2 >= 0 && String(t2) === String(e2);
}
function ge(e2) {
  let t2 = Number(e2);
  return Number.isInteger(t2) && t2 > 0 && String(t2) === String(e2);
}
function _e(e2) {
  return ye(e2, 0.25);
}
function ve(e2) {
  return ye(e2, 0.25);
}
function ye(e2, t2) {
  let n2 = Number(e2);
  return n2 >= 0 && n2 % t2 === 0 && String(n2) === String(e2);
}
function be(e2) {
  return { __BARE_VALUE__: e2 };
}
var N = be((e2) => {
  if (M(e2.value)) return e2.value;
}), P = be((e2) => {
  if (M(e2.value)) return `${e2.value}%`;
}), xe = be((e2) => {
  if (M(e2.value)) return `${e2.value}px`;
}), Se = be((e2) => {
  if (M(e2.value)) return `${e2.value}ms`;
}), Ce = be((e2) => {
  if (M(e2.value)) return `${e2.value}deg`;
}), we = be((e2) => {
  if (e2.fraction === null) return;
  let [t2, n2] = v(e2.fraction, `/`);
  if (!(!M(t2) || !M(n2))) return e2.fraction;
}), Te = be((e2) => {
  if (M(Number(e2.value))) return `repeat(${e2.value}, minmax(0, 1fr))`;
}), Ee = { accentColor: ({ theme: e2 }) => e2(`colors`), animation: { none: `none`, spin: `spin 1s linear infinite`, ping: `ping 1s cubic-bezier(0, 0, 0.2, 1) infinite`, pulse: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`, bounce: `bounce 1s infinite` }, aria: { busy: `busy="true"`, checked: `checked="true"`, disabled: `disabled="true"`, expanded: `expanded="true"`, hidden: `hidden="true"`, pressed: `pressed="true"`, readonly: `readonly="true"`, required: `required="true"`, selected: `selected="true"` }, aspectRatio: { auto: `auto`, square: `1 / 1`, video: `16 / 9`, ...we }, backdropBlur: ({ theme: e2 }) => e2(`blur`), backdropBrightness: ({ theme: e2 }) => ({ ...e2(`brightness`), ...P }), backdropContrast: ({ theme: e2 }) => ({ ...e2(`contrast`), ...P }), backdropGrayscale: ({ theme: e2 }) => ({ ...e2(`grayscale`), ...P }), backdropHueRotate: ({ theme: e2 }) => ({ ...e2(`hueRotate`), ...Ce }), backdropInvert: ({ theme: e2 }) => ({ ...e2(`invert`), ...P }), backdropOpacity: ({ theme: e2 }) => ({ ...e2(`opacity`), ...P }), backdropSaturate: ({ theme: e2 }) => ({ ...e2(`saturate`), ...P }), backdropSepia: ({ theme: e2 }) => ({ ...e2(`sepia`), ...P }), backgroundColor: ({ theme: e2 }) => e2(`colors`), backgroundImage: { none: `none`, "gradient-to-t": `linear-gradient(to top, var(--tw-gradient-stops))`, "gradient-to-tr": `linear-gradient(to top right, var(--tw-gradient-stops))`, "gradient-to-r": `linear-gradient(to right, var(--tw-gradient-stops))`, "gradient-to-br": `linear-gradient(to bottom right, var(--tw-gradient-stops))`, "gradient-to-b": `linear-gradient(to bottom, var(--tw-gradient-stops))`, "gradient-to-bl": `linear-gradient(to bottom left, var(--tw-gradient-stops))`, "gradient-to-l": `linear-gradient(to left, var(--tw-gradient-stops))`, "gradient-to-tl": `linear-gradient(to top left, var(--tw-gradient-stops))` }, backgroundOpacity: ({ theme: e2 }) => e2(`opacity`), backgroundPosition: { bottom: `bottom`, center: `center`, left: `left`, "left-bottom": `left bottom`, "left-top": `left top`, right: `right`, "right-bottom": `right bottom`, "right-top": `right top`, top: `top` }, backgroundSize: { auto: `auto`, cover: `cover`, contain: `contain` }, blur: { 0: `0`, none: ``, sm: `4px`, DEFAULT: `8px`, md: `12px`, lg: `16px`, xl: `24px`, "2xl": `40px`, "3xl": `64px` }, borderColor: ({ theme: e2 }) => ({ DEFAULT: `currentcolor`, ...e2(`colors`) }), borderOpacity: ({ theme: e2 }) => e2(`opacity`), borderRadius: { none: `0px`, sm: `0.125rem`, DEFAULT: `0.25rem`, md: `0.375rem`, lg: `0.5rem`, xl: `0.75rem`, "2xl": `1rem`, "3xl": `1.5rem`, full: `9999px` }, borderSpacing: ({ theme: e2 }) => e2(`spacing`), borderWidth: { DEFAULT: `1px`, 0: `0px`, 2: `2px`, 4: `4px`, 8: `8px`, ...xe }, boxShadow: { sm: `0 1px 2px 0 rgb(0 0 0 / 0.05)`, DEFAULT: `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`, md: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`, lg: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`, xl: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`, "2xl": `0 25px 50px -12px rgb(0 0 0 / 0.25)`, inner: `inset 0 2px 4px 0 rgb(0 0 0 / 0.05)`, none: `none` }, boxShadowColor: ({ theme: e2 }) => e2(`colors`), brightness: { 0: `0`, 50: `.5`, 75: `.75`, 90: `.9`, 95: `.95`, 100: `1`, 105: `1.05`, 110: `1.1`, 125: `1.25`, 150: `1.5`, 200: `2`, ...P }, caretColor: ({ theme: e2 }) => e2(`colors`), colors: () => ({ ...n }), columns: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, "3xs": `16rem`, "2xs": `18rem`, xs: `20rem`, sm: `24rem`, md: `28rem`, lg: `32rem`, xl: `36rem`, "2xl": `42rem`, "3xl": `48rem`, "4xl": `56rem`, "5xl": `64rem`, "6xl": `72rem`, "7xl": `80rem`, ...N }, container: {}, content: { none: `none` }, contrast: { 0: `0`, 50: `.5`, 75: `.75`, 100: `1`, 125: `1.25`, 150: `1.5`, 200: `2`, ...P }, cursor: { auto: `auto`, default: `default`, pointer: `pointer`, wait: `wait`, text: `text`, move: `move`, help: `help`, "not-allowed": `not-allowed`, none: `none`, "context-menu": `context-menu`, progress: `progress`, cell: `cell`, crosshair: `crosshair`, "vertical-text": `vertical-text`, alias: `alias`, copy: `copy`, "no-drop": `no-drop`, grab: `grab`, grabbing: `grabbing`, "all-scroll": `all-scroll`, "col-resize": `col-resize`, "row-resize": `row-resize`, "n-resize": `n-resize`, "e-resize": `e-resize`, "s-resize": `s-resize`, "w-resize": `w-resize`, "ne-resize": `ne-resize`, "nw-resize": `nw-resize`, "se-resize": `se-resize`, "sw-resize": `sw-resize`, "ew-resize": `ew-resize`, "ns-resize": `ns-resize`, "nesw-resize": `nesw-resize`, "nwse-resize": `nwse-resize`, "zoom-in": `zoom-in`, "zoom-out": `zoom-out` }, divideColor: ({ theme: e2 }) => e2(`borderColor`), divideOpacity: ({ theme: e2 }) => e2(`borderOpacity`), divideWidth: ({ theme: e2 }) => ({ ...e2(`borderWidth`), ...xe }), dropShadow: { sm: `0 1px 1px rgb(0 0 0 / 0.05)`, DEFAULT: [`0 1px 2px rgb(0 0 0 / 0.1)`, `0 1px 1px rgb(0 0 0 / 0.06)`], md: [`0 4px 3px rgb(0 0 0 / 0.07)`, `0 2px 2px rgb(0 0 0 / 0.06)`], lg: [`0 10px 8px rgb(0 0 0 / 0.04)`, `0 4px 3px rgb(0 0 0 / 0.1)`], xl: [`0 20px 13px rgb(0 0 0 / 0.03)`, `0 8px 5px rgb(0 0 0 / 0.08)`], "2xl": `0 25px 25px rgb(0 0 0 / 0.15)`, none: `0 0 #0000` }, fill: ({ theme: e2 }) => e2(`colors`), flex: { 1: `1 1 0%`, auto: `1 1 auto`, initial: `0 1 auto`, none: `none` }, flexBasis: ({ theme: e2 }) => ({ auto: `auto`, "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, "1/12": `8.333333%`, "2/12": `16.666667%`, "3/12": `25%`, "4/12": `33.333333%`, "5/12": `41.666667%`, "6/12": `50%`, "7/12": `58.333333%`, "8/12": `66.666667%`, "9/12": `75%`, "10/12": `83.333333%`, "11/12": `91.666667%`, full: `100%`, ...e2(`spacing`) }), flexGrow: { 0: `0`, DEFAULT: `1`, ...N }, flexShrink: { 0: `0`, DEFAULT: `1`, ...N }, fontFamily: { sans: [`ui-sans-serif`, `system-ui`, `sans-serif`, `"Apple Color Emoji"`, `"Segoe UI Emoji"`, `"Segoe UI Symbol"`, `"Noto Color Emoji"`], serif: [`ui-serif`, `Georgia`, `Cambria`, `"Times New Roman"`, `Times`, `serif`], mono: [`ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `"Liberation Mono"`, `"Courier New"`, `monospace`] }, fontSize: { xs: [`0.75rem`, { lineHeight: `1rem` }], sm: [`0.875rem`, { lineHeight: `1.25rem` }], base: [`1rem`, { lineHeight: `1.5rem` }], lg: [`1.125rem`, { lineHeight: `1.75rem` }], xl: [`1.25rem`, { lineHeight: `1.75rem` }], "2xl": [`1.5rem`, { lineHeight: `2rem` }], "3xl": [`1.875rem`, { lineHeight: `2.25rem` }], "4xl": [`2.25rem`, { lineHeight: `2.5rem` }], "5xl": [`3rem`, { lineHeight: `1` }], "6xl": [`3.75rem`, { lineHeight: `1` }], "7xl": [`4.5rem`, { lineHeight: `1` }], "8xl": [`6rem`, { lineHeight: `1` }], "9xl": [`8rem`, { lineHeight: `1` }] }, fontWeight: { thin: `100`, extralight: `200`, light: `300`, normal: `400`, medium: `500`, semibold: `600`, bold: `700`, extrabold: `800`, black: `900` }, gap: ({ theme: e2 }) => e2(`spacing`), gradientColorStops: ({ theme: e2 }) => e2(`colors`), gradientColorStopPositions: { "0%": `0%`, "5%": `5%`, "10%": `10%`, "15%": `15%`, "20%": `20%`, "25%": `25%`, "30%": `30%`, "35%": `35%`, "40%": `40%`, "45%": `45%`, "50%": `50%`, "55%": `55%`, "60%": `60%`, "65%": `65%`, "70%": `70%`, "75%": `75%`, "80%": `80%`, "85%": `85%`, "90%": `90%`, "95%": `95%`, "100%": `100%`, ...P }, grayscale: { 0: `0`, DEFAULT: `100%`, ...P }, gridAutoColumns: { auto: `auto`, min: `min-content`, max: `max-content`, fr: `minmax(0, 1fr)` }, gridAutoRows: { auto: `auto`, min: `min-content`, max: `max-content`, fr: `minmax(0, 1fr)` }, gridColumn: { auto: `auto`, "span-1": `span 1 / span 1`, "span-2": `span 2 / span 2`, "span-3": `span 3 / span 3`, "span-4": `span 4 / span 4`, "span-5": `span 5 / span 5`, "span-6": `span 6 / span 6`, "span-7": `span 7 / span 7`, "span-8": `span 8 / span 8`, "span-9": `span 9 / span 9`, "span-10": `span 10 / span 10`, "span-11": `span 11 / span 11`, "span-12": `span 12 / span 12`, "span-full": `1 / -1` }, gridColumnEnd: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13`, ...N }, gridColumnStart: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13`, ...N }, gridRow: { auto: `auto`, "span-1": `span 1 / span 1`, "span-2": `span 2 / span 2`, "span-3": `span 3 / span 3`, "span-4": `span 4 / span 4`, "span-5": `span 5 / span 5`, "span-6": `span 6 / span 6`, "span-7": `span 7 / span 7`, "span-8": `span 8 / span 8`, "span-9": `span 9 / span 9`, "span-10": `span 10 / span 10`, "span-11": `span 11 / span 11`, "span-12": `span 12 / span 12`, "span-full": `1 / -1` }, gridRowEnd: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13`, ...N }, gridRowStart: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13`, ...N }, gridTemplateColumns: { none: `none`, subgrid: `subgrid`, 1: `repeat(1, minmax(0, 1fr))`, 2: `repeat(2, minmax(0, 1fr))`, 3: `repeat(3, minmax(0, 1fr))`, 4: `repeat(4, minmax(0, 1fr))`, 5: `repeat(5, minmax(0, 1fr))`, 6: `repeat(6, minmax(0, 1fr))`, 7: `repeat(7, minmax(0, 1fr))`, 8: `repeat(8, minmax(0, 1fr))`, 9: `repeat(9, minmax(0, 1fr))`, 10: `repeat(10, minmax(0, 1fr))`, 11: `repeat(11, minmax(0, 1fr))`, 12: `repeat(12, minmax(0, 1fr))`, ...Te }, gridTemplateRows: { none: `none`, subgrid: `subgrid`, 1: `repeat(1, minmax(0, 1fr))`, 2: `repeat(2, minmax(0, 1fr))`, 3: `repeat(3, minmax(0, 1fr))`, 4: `repeat(4, minmax(0, 1fr))`, 5: `repeat(5, minmax(0, 1fr))`, 6: `repeat(6, minmax(0, 1fr))`, 7: `repeat(7, minmax(0, 1fr))`, 8: `repeat(8, minmax(0, 1fr))`, 9: `repeat(9, minmax(0, 1fr))`, 10: `repeat(10, minmax(0, 1fr))`, 11: `repeat(11, minmax(0, 1fr))`, 12: `repeat(12, minmax(0, 1fr))`, ...Te }, height: ({ theme: e2 }) => ({ auto: `auto`, "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, full: `100%`, screen: `100vh`, svh: `100svh`, lvh: `100lvh`, dvh: `100dvh`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e2(`spacing`) }), hueRotate: { 0: `0deg`, 15: `15deg`, 30: `30deg`, 60: `60deg`, 90: `90deg`, 180: `180deg`, ...Ce }, inset: ({ theme: e2 }) => ({ auto: `auto`, "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, full: `100%`, ...e2(`spacing`) }), invert: { 0: `0`, DEFAULT: `100%`, ...P }, keyframes: { spin: { to: { transform: `rotate(360deg)` } }, ping: { "75%, 100%": { transform: `scale(2)`, opacity: `0` } }, pulse: { "50%": { opacity: `.5` } }, bounce: { "0%, 100%": { transform: `translateY(-25%)`, animationTimingFunction: `cubic-bezier(0.8,0,1,1)` }, "50%": { transform: `none`, animationTimingFunction: `cubic-bezier(0,0,0.2,1)` } } }, letterSpacing: { tighter: `-0.05em`, tight: `-0.025em`, normal: `0em`, wide: `0.025em`, wider: `0.05em`, widest: `0.1em` }, lineHeight: { none: `1`, tight: `1.25`, snug: `1.375`, normal: `1.5`, relaxed: `1.625`, loose: `2`, 3: `.75rem`, 4: `1rem`, 5: `1.25rem`, 6: `1.5rem`, 7: `1.75rem`, 8: `2rem`, 9: `2.25rem`, 10: `2.5rem` }, listStyleType: { none: `none`, disc: `disc`, decimal: `decimal` }, listStyleImage: { none: `none` }, margin: ({ theme: e2 }) => ({ auto: `auto`, ...e2(`spacing`) }), lineClamp: { 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, ...N }, maxHeight: ({ theme: e2 }) => ({ none: `none`, full: `100%`, screen: `100vh`, svh: `100svh`, lvh: `100lvh`, dvh: `100dvh`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e2(`spacing`) }), maxWidth: ({ theme: e2 }) => ({ none: `none`, xs: `20rem`, sm: `24rem`, md: `28rem`, lg: `32rem`, xl: `36rem`, "2xl": `42rem`, "3xl": `48rem`, "4xl": `56rem`, "5xl": `64rem`, "6xl": `72rem`, "7xl": `80rem`, full: `100%`, min: `min-content`, max: `max-content`, fit: `fit-content`, prose: `65ch`, ...e2(`spacing`) }), minHeight: ({ theme: e2 }) => ({ full: `100%`, screen: `100vh`, svh: `100svh`, lvh: `100lvh`, dvh: `100dvh`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e2(`spacing`) }), minWidth: ({ theme: e2 }) => ({ full: `100%`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e2(`spacing`) }), objectPosition: { bottom: `bottom`, center: `center`, left: `left`, "left-bottom": `left bottom`, "left-top": `left top`, right: `right`, "right-bottom": `right bottom`, "right-top": `right top`, top: `top` }, opacity: { 0: `0`, 5: `0.05`, 10: `0.1`, 15: `0.15`, 20: `0.2`, 25: `0.25`, 30: `0.3`, 35: `0.35`, 40: `0.4`, 45: `0.45`, 50: `0.5`, 55: `0.55`, 60: `0.6`, 65: `0.65`, 70: `0.7`, 75: `0.75`, 80: `0.8`, 85: `0.85`, 90: `0.9`, 95: `0.95`, 100: `1`, ...P }, order: { first: `-9999`, last: `9999`, none: `0`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, ...N }, outlineColor: ({ theme: e2 }) => e2(`colors`), outlineOffset: { 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...xe }, outlineWidth: { 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...xe }, padding: ({ theme: e2 }) => e2(`spacing`), placeholderColor: ({ theme: e2 }) => e2(`colors`), placeholderOpacity: ({ theme: e2 }) => e2(`opacity`), ringColor: ({ theme: e2 }) => ({ DEFAULT: `currentcolor`, ...e2(`colors`) }), ringOffsetColor: ({ theme: e2 }) => e2(`colors`), ringOffsetWidth: { 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...xe }, ringOpacity: ({ theme: e2 }) => ({ DEFAULT: `0.5`, ...e2(`opacity`) }), ringWidth: { DEFAULT: `3px`, 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...xe }, rotate: { 0: `0deg`, 1: `1deg`, 2: `2deg`, 3: `3deg`, 6: `6deg`, 12: `12deg`, 45: `45deg`, 90: `90deg`, 180: `180deg`, ...Ce }, saturate: { 0: `0`, 50: `.5`, 100: `1`, 150: `1.5`, 200: `2`, ...P }, scale: { 0: `0`, 50: `.5`, 75: `.75`, 90: `.9`, 95: `.95`, 100: `1`, 105: `1.05`, 110: `1.1`, 125: `1.25`, 150: `1.5`, ...P }, screens: { sm: `40rem`, md: `48rem`, lg: `64rem`, xl: `80rem`, "2xl": `96rem` }, scrollMargin: ({ theme: e2 }) => e2(`spacing`), scrollPadding: ({ theme: e2 }) => e2(`spacing`), sepia: { 0: `0`, DEFAULT: `100%`, ...P }, skew: { 0: `0deg`, 1: `1deg`, 2: `2deg`, 3: `3deg`, 6: `6deg`, 12: `12deg`, ...Ce }, space: ({ theme: e2 }) => e2(`spacing`), spacing: { px: `1px`, 0: `0px`, 0.5: `0.125rem`, 1: `0.25rem`, 1.5: `0.375rem`, 2: `0.5rem`, 2.5: `0.625rem`, 3: `0.75rem`, 3.5: `0.875rem`, 4: `1rem`, 5: `1.25rem`, 6: `1.5rem`, 7: `1.75rem`, 8: `2rem`, 9: `2.25rem`, 10: `2.5rem`, 11: `2.75rem`, 12: `3rem`, 14: `3.5rem`, 16: `4rem`, 20: `5rem`, 24: `6rem`, 28: `7rem`, 32: `8rem`, 36: `9rem`, 40: `10rem`, 44: `11rem`, 48: `12rem`, 52: `13rem`, 56: `14rem`, 60: `15rem`, 64: `16rem`, 72: `18rem`, 80: `20rem`, 96: `24rem` }, stroke: ({ theme: e2 }) => ({ none: `none`, ...e2(`colors`) }), strokeWidth: { 0: `0`, 1: `1`, 2: `2`, ...N }, supports: {}, data: {}, textColor: ({ theme: e2 }) => e2(`colors`), textDecorationColor: ({ theme: e2 }) => e2(`colors`), textDecorationThickness: { auto: `auto`, "from-font": `from-font`, 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...xe }, textIndent: ({ theme: e2 }) => e2(`spacing`), textOpacity: ({ theme: e2 }) => e2(`opacity`), textUnderlineOffset: { auto: `auto`, 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...xe }, transformOrigin: { center: `center`, top: `top`, "top-right": `top right`, right: `right`, "bottom-right": `bottom right`, bottom: `bottom`, "bottom-left": `bottom left`, left: `left`, "top-left": `top left` }, transitionDelay: { 0: `0s`, 75: `75ms`, 100: `100ms`, 150: `150ms`, 200: `200ms`, 300: `300ms`, 500: `500ms`, 700: `700ms`, 1e3: `1000ms`, ...Se }, transitionDuration: { DEFAULT: `150ms`, 0: `0s`, 75: `75ms`, 100: `100ms`, 150: `150ms`, 200: `200ms`, 300: `300ms`, 500: `500ms`, 700: `700ms`, 1e3: `1000ms`, ...Se }, transitionProperty: { none: `none`, all: `all`, DEFAULT: `color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter`, colors: `color, background-color, border-color, outline-color, text-decoration-color, fill, stroke`, opacity: `opacity`, shadow: `box-shadow`, transform: `transform` }, transitionTimingFunction: { DEFAULT: `cubic-bezier(0.4, 0, 0.2, 1)`, linear: `linear`, in: `cubic-bezier(0.4, 0, 1, 1)`, out: `cubic-bezier(0, 0, 0.2, 1)`, "in-out": `cubic-bezier(0.4, 0, 0.2, 1)` }, translate: ({ theme: e2 }) => ({ "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, full: `100%`, ...e2(`spacing`) }), size: ({ theme: e2 }) => ({ auto: `auto`, "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, "1/12": `8.333333%`, "2/12": `16.666667%`, "3/12": `25%`, "4/12": `33.333333%`, "5/12": `41.666667%`, "6/12": `50%`, "7/12": `58.333333%`, "8/12": `66.666667%`, "9/12": `75%`, "10/12": `83.333333%`, "11/12": `91.666667%`, full: `100%`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e2(`spacing`) }), width: ({ theme: e2 }) => ({ auto: `auto`, "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, "1/12": `8.333333%`, "2/12": `16.666667%`, "3/12": `25%`, "4/12": `33.333333%`, "5/12": `41.666667%`, "6/12": `50%`, "7/12": `58.333333%`, "8/12": `66.666667%`, "9/12": `75%`, "10/12": `83.333333%`, "11/12": `91.666667%`, full: `100%`, screen: `100vw`, svw: `100svw`, lvw: `100lvw`, dvw: `100dvw`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e2(`spacing`) }), willChange: { auto: `auto`, scroll: `scroll-position`, contents: `contents`, transform: `transform` }, zIndex: { auto: `auto`, 0: `0`, 10: `10`, 20: `20`, 30: `30`, 40: `40`, 50: `50`, ...N } }, De = `4.1.8`, Oe = 92, ke = 47, Ae = 42, je = 34, Me = 39, Ne = 58, Pe = 59, F = 10, Fe = 13, Ie = 32, Le = 9, Re = 123, ze = 125, Be = 40, Ve = 41, He = 91, Ue = 93, We = 45, Ge = 64, Ke = 33;
function qe(e2, t2) {
  let n2 = (t2 == null ? void 0 : t2.from) ? { file: t2.from, code: e2 } : null;
  e2[0] === `\uFEFF` && (e2 = ` ` + e2.slice(1));
  let r2 = [], i2 = [], a2 = [], o2 = null, s2 = null, c2 = ``, l2 = ``, u2 = 0, d2;
  for (let t3 = 0; t3 < e2.length; t3++) {
    let f2 = e2.charCodeAt(t3);
    if (!(f2 === Fe && (d2 = e2.charCodeAt(t3 + 1), d2 === F))) if (f2 === Oe) c2 === `` && (u2 = t3), c2 += e2.slice(t3, t3 + 2), t3 += 1;
    else if (f2 === ke && e2.charCodeAt(t3 + 1) === Ae) {
      let r3 = t3;
      for (let n3 = t3 + 2; n3 < e2.length; n3++) if (d2 = e2.charCodeAt(n3), d2 === Oe) n3 += 1;
      else if (d2 === Ae && e2.charCodeAt(n3 + 1) === ke) {
        t3 = n3 + 1;
        break;
      }
      let a3 = e2.slice(r3, t3 + 1);
      if (a3.charCodeAt(2) === Ke) {
        let e3 = bt(a3.slice(2, -2));
        i2.push(e3), n2 && (e3.src = [n2, r3, t3 + 1], e3.dst = [n2, r3, t3 + 1]);
      }
    } else if (f2 === Me || f2 === je) {
      let n3 = t3;
      for (let r3 = t3 + 1; r3 < e2.length; r3++) if (d2 = e2.charCodeAt(r3), d2 === Oe) r3 += 1;
      else if (d2 === f2) {
        t3 = r3;
        break;
      } else {
        if (d2 === Pe && (e2.charCodeAt(r3 + 1) === F || e2.charCodeAt(r3 + 1) === Fe && e2.charCodeAt(r3 + 2) === F)) throw Error(`Unterminated string: ${e2.slice(n3, r3 + 1) + String.fromCharCode(f2)}`);
        if (d2 === F || d2 === Fe && e2.charCodeAt(r3 + 1) === F) throw Error(`Unterminated string: ${e2.slice(n3, r3) + String.fromCharCode(f2)}`);
      }
      c2 += e2.slice(n3, t3 + 1);
    } else {
      if ((f2 === Ie || f2 === F || f2 === Le) && (d2 = e2.charCodeAt(t3 + 1)) && (d2 === Ie || d2 === F || d2 === Le || d2 === Fe && (d2 = e2.charCodeAt(t3 + 2)) && d2 == F)) continue;
      if (f2 === F) {
        if (c2.length === 0) continue;
        d2 = c2.charCodeAt(c2.length - 1), d2 !== Ie && d2 !== F && d2 !== Le && (c2 += ` `);
      } else if (f2 === We && e2.charCodeAt(t3 + 1) === We && c2.length === 0) {
        let i3 = ``, a3 = t3, s3 = -1;
        for (let n3 = t3 + 2; n3 < e2.length; n3++) if (d2 = e2.charCodeAt(n3), d2 === Oe) n3 += 1;
        else if (d2 === ke && e2.charCodeAt(n3 + 1) === Ae) {
          for (let t4 = n3 + 2; t4 < e2.length; t4++) if (d2 = e2.charCodeAt(t4), d2 === Oe) t4 += 1;
          else if (d2 === Ae && e2.charCodeAt(t4 + 1) === ke) {
            n3 = t4 + 1;
            break;
          }
        } else if (s3 === -1 && d2 === Ne) s3 = c2.length + n3 - a3;
        else if (d2 === Pe && i3.length === 0) {
          c2 += e2.slice(a3, n3), t3 = n3;
          break;
        } else if (d2 === Be) i3 += `)`;
        else if (d2 === He) i3 += `]`;
        else if (d2 === Re) i3 += `}`;
        else if ((d2 === ze || e2.length - 1 === n3) && i3.length === 0) {
          t3 = n3 - 1, c2 += e2.slice(a3, n3);
          break;
        } else (d2 === Ve || d2 === Ue || d2 === ze) && i3.length > 0 && e2[n3] === i3[i3.length - 1] && (i3 = i3.slice(0, -1));
        let l3 = Ye(c2, s3);
        if (!l3) throw Error(`Invalid custom property, expected a value`);
        n2 && (l3.src = [n2, a3, t3], l3.dst = [n2, a3, t3]), o2 ? o2.nodes.push(l3) : r2.push(l3), c2 = ``;
      } else if (f2 === Pe && c2.charCodeAt(0) === Ge) s2 = Je(c2), n2 && (s2.src = [n2, u2, t3], s2.dst = [n2, u2, t3]), o2 ? o2.nodes.push(s2) : r2.push(s2), c2 = ``, s2 = null;
      else if (f2 === Pe && l2[l2.length - 1] !== `)`) {
        let e3 = Ye(c2);
        if (!e3) throw c2.length === 0 ? Error(`Unexpected semicolon`) : Error(`Invalid declaration: \`${c2.trim()}\``);
        n2 && (e3.src = [n2, u2, t3], e3.dst = [n2, u2, t3]), o2 ? o2.nodes.push(e3) : r2.push(e3), c2 = ``;
      } else if (f2 === Re && l2[l2.length - 1] !== `)`) l2 += `}`, s2 = H(c2.trim()), n2 && (s2.src = [n2, u2, t3], s2.dst = [n2, u2, t3]), o2 && o2.nodes.push(s2), a2.push(o2), o2 = s2, c2 = ``, s2 = null;
      else if (f2 === ze && l2[l2.length - 1] !== `)`) {
        if (l2 === ``) throw Error(`Missing opening {`);
        if (l2 = l2.slice(0, -1), c2.length > 0) if (c2.charCodeAt(0) === Ge) s2 = Je(c2), n2 && (s2.src = [n2, u2, t3], s2.dst = [n2, u2, t3]), o2 ? o2.nodes.push(s2) : r2.push(s2), c2 = ``, s2 = null;
        else {
          let e4 = c2.indexOf(`:`);
          if (o2) {
            let r3 = Ye(c2, e4);
            if (!r3) throw Error(`Invalid declaration: \`${c2.trim()}\``);
            n2 && (r3.src = [n2, u2, t3], r3.dst = [n2, u2, t3]), o2.nodes.push(r3);
          }
        }
        let e3 = a2.pop() ?? null;
        e3 === null && o2 && r2.push(o2), o2 = e3, c2 = ``, s2 = null;
      } else if (f2 === Be) l2 += `)`, c2 += `(`;
      else if (f2 === Ve) {
        if (l2[l2.length - 1] !== `)`) throw Error(`Missing opening (`);
        l2 = l2.slice(0, -1), c2 += `)`;
      } else {
        if (c2.length === 0 && (f2 === Ie || f2 === F || f2 === Le)) continue;
        c2 === `` && (u2 = t3), c2 += String.fromCharCode(f2);
      }
    }
  }
  if (c2.charCodeAt(0) === Ge) {
    let t3 = Je(c2);
    n2 && (t3.src = [n2, u2, e2.length], t3.dst = [n2, u2, e2.length]), r2.push(t3);
  }
  if (l2.length > 0 && o2) {
    if (o2.kind === `rule`) throw Error(`Missing closing } at ${o2.selector}`);
    if (o2.kind === `at-rule`) throw Error(`Missing closing } at ${o2.name} ${o2.params}`);
  }
  return i2.length > 0 ? i2.concat(r2) : r2;
}
function Je(e2, t2 = []) {
  let n2 = e2, r2 = ``;
  for (let t3 = 5; t3 < e2.length; t3++) {
    let i2 = e2.charCodeAt(t3);
    if (i2 === Ie || i2 === Be) {
      n2 = e2.slice(0, t3), r2 = e2.slice(t3);
      break;
    }
  }
  return V(n2.trim(), r2.trim(), t2);
}
function Ye(e2, t2 = e2.indexOf(`:`)) {
  if (t2 === -1) return null;
  let n2 = e2.indexOf(`!important`, t2 + 1);
  return U(e2.slice(0, t2).trim(), e2.slice(t2 + 1, n2 === -1 ? e2.length : n2).trim(), n2 !== -1);
}
function Xe(e2) {
  if (arguments.length === 0) throw TypeError("`CSS.escape` requires an argument.");
  let t2 = String(e2), n2 = t2.length, r2 = -1, i2, a2 = ``, o2 = t2.charCodeAt(0);
  if (n2 === 1 && o2 === 45) return `\\` + t2;
  for (; ++r2 < n2; ) {
    if (i2 = t2.charCodeAt(r2), i2 === 0) {
      a2 += `\uFFFD`;
      continue;
    }
    if (i2 >= 1 && i2 <= 31 || i2 === 127 || r2 === 0 && i2 >= 48 && i2 <= 57 || r2 === 1 && i2 >= 48 && i2 <= 57 && o2 === 45) {
      a2 += `\\` + i2.toString(16) + ` `;
      continue;
    }
    if (i2 >= 128 || i2 === 45 || i2 === 95 || i2 >= 48 && i2 <= 57 || i2 >= 65 && i2 <= 90 || i2 >= 97 && i2 <= 122) {
      a2 += t2.charAt(r2);
      continue;
    }
    a2 += `\\` + t2.charAt(r2);
  }
  return a2;
}
function Ze(e2) {
  return e2.replace(/\\([\dA-Fa-f]{1,6}[\t\n\f\r ]?|[\S\s])/g, (e3) => e3.length > 2 ? String.fromCodePoint(Number.parseInt(e3.slice(1).trim(), 16)) : e3[1]);
}
var Qe = /* @__PURE__ */ new Map([[`--font`, [`--font-weight`, `--font-size`]], [`--inset`, [`--inset-shadow`, `--inset-ring`]], [`--text`, [`--text-color`, `--text-decoration-color`, `--text-decoration-thickness`, `--text-indent`, `--text-shadow`, `--text-underline-offset`]]]);
function $e(e2, t2) {
  return (Qe.get(t2) ?? []).some((t3) => e2 === t3 || e2.startsWith(`${t3}-`));
}
var et = (_a = class {
  constructor(e2 = /* @__PURE__ */ new Map(), t2 = /* @__PURE__ */ new Set([])) {
    __privateAdd(this, _et_instances);
    __publicField(this, "prefix", null);
    this.values = e2, this.keyframes = t2;
  }
  get size() {
    return this.values.size;
  }
  add(e2, t2, n2 = 0, r2) {
    if (e2.endsWith(`-*`)) {
      if (t2 !== `initial`) throw Error(`Invalid theme value \`${t2}\` for namespace \`${e2}\``);
      e2 === `--*` ? this.values.clear() : this.clearNamespace(e2.slice(0, -2), 0);
    }
    if (n2 & 4) {
      let t3 = this.values.get(e2);
      if (t3 && !(t3.options & 4)) return;
    }
    t2 === `initial` ? this.values.delete(e2) : this.values.set(e2, { value: t2, options: n2, src: r2 });
  }
  keysInNamespaces(e2) {
    let t2 = [];
    for (let n2 of e2) {
      let e3 = `${n2}-`;
      for (let r2 of this.values.keys()) r2.startsWith(e3) && r2.indexOf(`--`, 2) === -1 && ($e(r2, n2) || t2.push(r2.slice(e3.length)));
    }
    return t2;
  }
  get(e2) {
    for (let t2 of e2) {
      let e3 = this.values.get(t2);
      if (e3) return e3.value;
    }
    return null;
  }
  hasDefault(e2) {
    return (this.getOptions(e2) & 4) == 4;
  }
  getOptions(e2) {
    var _a2;
    return e2 = Ze(__privateMethod(this, _et_instances, r_fn).call(this, e2)), ((_a2 = this.values.get(e2)) == null ? void 0 : _a2.options) ?? 0;
  }
  entries() {
    return this.prefix ? Array.from(this.values, (e2) => (e2[0] = this.prefixKey(e2[0]), e2)) : this.values.entries();
  }
  prefixKey(e2) {
    return this.prefix ? `--${this.prefix}-${e2.slice(2)}` : e2;
  }
  clearNamespace(e2, t2) {
    let n2 = Qe.get(e2) ?? [];
    e: for (let r2 of this.values.keys()) if (r2.startsWith(e2)) {
      if (t2 !== 0 && (this.getOptions(r2) & t2) !== t2) continue;
      for (let e3 of n2) if (r2.startsWith(e3)) continue e;
      this.values.delete(r2);
    }
  }
  markUsedVariable(e2) {
    let t2 = Ze(__privateMethod(this, _et_instances, r_fn).call(this, e2)), n2 = this.values.get(t2);
    if (!n2) return false;
    let r2 = n2.options & 16;
    return n2.options |= 16, !r2;
  }
  resolve(e2, t2, n2 = 0) {
    let r2 = __privateMethod(this, _et_instances, e_fn).call(this, e2, t2);
    if (!r2) return null;
    let i2 = this.values.get(r2);
    return (n2 | i2.options) & 1 ? i2.value : __privateMethod(this, _et_instances, t_fn).call(this, r2);
  }
  resolveValue(e2, t2) {
    let n2 = __privateMethod(this, _et_instances, e_fn).call(this, e2, t2);
    return n2 ? this.values.get(n2).value : null;
  }
  resolveWith(e2, t2, n2 = []) {
    let r2 = __privateMethod(this, _et_instances, e_fn).call(this, e2, t2);
    if (!r2) return null;
    let i2 = {};
    for (let e3 of n2) {
      let t3 = `${r2}${e3}`, n3 = this.values.get(t3);
      n3 && (n3.options & 1 ? i2[e3] = n3.value : i2[e3] = __privateMethod(this, _et_instances, t_fn).call(this, t3));
    }
    let a2 = this.values.get(r2);
    return a2.options & 1 ? [a2.value, i2] : [__privateMethod(this, _et_instances, t_fn).call(this, r2), i2];
  }
  namespace(e2) {
    let t2 = /* @__PURE__ */ new Map(), n2 = `${e2}-`;
    for (let [r2, i2] of this.values) r2 === e2 ? t2.set(null, i2.value) : r2.startsWith(`${n2}-`) ? t2.set(r2.slice(e2.length), i2.value) : r2.startsWith(n2) && t2.set(r2.slice(n2.length), i2.value);
    return t2;
  }
  addKeyframes(e2) {
    this.keyframes.add(e2);
  }
  getKeyframes() {
    return Array.from(this.keyframes);
  }
}, _et_instances = new WeakSet(), r_fn = function(e2) {
  return this.prefix ? `--${e2.slice(3 + this.prefix.length)}` : e2;
}, e_fn = function(e2, t2) {
  for (let n2 of t2) {
    let t3 = e2 === null ? n2 : `${n2}-${e2}`;
    if (!this.values.has(t3)) if (e2 !== null && e2.includes(`.`)) {
      if (t3 = `${n2}-${e2.replaceAll(`.`, `_`)}`, !this.values.has(t3)) continue;
    } else continue;
    if (!$e(t3, n2)) return t3;
  }
  return null;
}, t_fn = function(e2) {
  let t2 = this.values.get(e2);
  if (!t2) return null;
  let n2 = null;
  return t2.options & 2 && (n2 = t2.value), `var(${Xe(this.prefixKey(e2))}${n2 ? `, ${n2}` : ``})`;
}, _a), I = class extends Map {
  constructor(e2) {
    super(), this.factory = e2;
  }
  get(e2) {
    let t2 = super.get(e2);
    return t2 === void 0 && (t2 = this.factory(e2, this), this.set(e2, t2)), t2;
  }
};
function tt(e2) {
  return { kind: `word`, value: e2 };
}
function nt(e2, t2) {
  return { kind: `function`, value: e2, nodes: t2 };
}
function rt(e2) {
  return { kind: `separator`, value: e2 };
}
function L(e2, t2, n2 = null) {
  for (let r2 = 0; r2 < e2.length; r2++) {
    let i2 = e2[r2], a2 = false, o2 = 0, s2 = t2(i2, { parent: n2, replaceWith(t3) {
      a2 || (a2 = true, Array.isArray(t3) ? t3.length === 0 ? (e2.splice(r2, 1), o2 = 0) : t3.length === 1 ? (e2[r2] = t3[0], o2 = 1) : (e2.splice(r2, 1, ...t3), o2 = t3.length) : e2[r2] = t3);
    } }) ?? 0;
    if (a2) {
      s2 === 0 ? r2-- : r2 += o2 - 1;
      continue;
    }
    if (s2 === 2 || s2 !== 1 && i2.kind === `function` && L(i2.nodes, t2, i2) === 2) return 2;
  }
}
function R(e2) {
  let t2 = ``;
  for (let n2 of e2) switch (n2.kind) {
    case `word`:
    case `separator`:
      t2 += n2.value;
      break;
    case `function`:
      t2 += n2.value + `(` + R(n2.nodes) + `)`;
  }
  return t2;
}
var it = 92, at = 41, ot = 58, st = 44, ct = 34, lt = 61, ut = 62, dt = 60, ft = 10, pt = 40, mt = 39, ht = 47, gt = 32, _t = 9;
function z(e2) {
  e2 = e2.replaceAll(`\r
`, `
`);
  let t2 = [], n2 = [], r2 = null, i2 = ``, a2;
  for (let o2 = 0; o2 < e2.length; o2++) {
    let s2 = e2.charCodeAt(o2);
    switch (s2) {
      case it:
        i2 += e2[o2] + e2[o2 + 1], o2++;
        break;
      case ot:
      case st:
      case lt:
      case ut:
      case dt:
      case ft:
      case ht:
      case gt:
      case _t: {
        if (i2.length > 0) {
          let e3 = tt(i2);
          r2 ? r2.nodes.push(e3) : t2.push(e3), i2 = ``;
        }
        let n3 = o2, s3 = o2 + 1;
        for (; s3 < e2.length && (a2 = e2.charCodeAt(s3), !(a2 !== ot && a2 !== st && a2 !== lt && a2 !== ut && a2 !== dt && a2 !== ft && a2 !== ht && a2 !== gt && a2 !== _t)); s3++) ;
        o2 = s3 - 1;
        let c2 = rt(e2.slice(n3, s3));
        r2 ? r2.nodes.push(c2) : t2.push(c2);
        break;
      }
      case mt:
      case ct: {
        let t3 = o2;
        for (let t4 = o2 + 1; t4 < e2.length; t4++) if (a2 = e2.charCodeAt(t4), a2 === it) t4 += 1;
        else if (a2 === s2) {
          o2 = t4;
          break;
        }
        i2 += e2.slice(t3, o2 + 1);
        break;
      }
      case pt: {
        let e3 = nt(i2, []);
        i2 = ``, r2 ? r2.nodes.push(e3) : t2.push(e3), n2.push(e3), r2 = e3;
        break;
      }
      case at: {
        let e3 = n2.pop();
        if (i2.length > 0) {
          let t3 = tt(i2);
          e3 == null ? void 0 : e3.nodes.push(t3), i2 = ``;
        }
        r2 = n2.length > 0 ? n2[n2.length - 1] : null;
        break;
      }
      default:
        i2 += String.fromCharCode(s2);
    }
  }
  return i2.length > 0 && t2.push(tt(i2)), t2;
}
function vt(e2) {
  let t2 = [];
  return L(z(e2), (e3) => {
    if (!(e3.kind !== `function` || e3.value !== `var`)) return L(e3.nodes, (e4) => {
      e4.kind !== `word` || e4.value[0] !== `-` || e4.value[1] !== `-` || t2.push(e4.value);
    }), 1;
  }), t2;
}
var yt = 64;
function B(e2, t2 = []) {
  return { kind: `rule`, selector: e2, nodes: t2 };
}
function V(e2, t2 = ``, n2 = []) {
  return { kind: `at-rule`, name: e2, params: t2, nodes: n2 };
}
function H(e2, t2 = []) {
  return e2.charCodeAt(0) === yt ? Je(e2, t2) : B(e2, t2);
}
function U(e2, t2, n2 = false) {
  return { kind: `declaration`, property: e2, value: t2, important: n2 };
}
function bt(e2) {
  return { kind: `comment`, value: e2 };
}
function xt(e2, t2) {
  return { kind: `context`, context: e2, nodes: t2 };
}
function W(e2) {
  return { kind: `at-root`, nodes: e2 };
}
function G(e2, t2, n2 = [], r2 = {}) {
  for (let i2 = 0; i2 < e2.length; i2++) {
    let a2 = e2[i2], o2 = n2[n2.length - 1] ?? null;
    if (a2.kind === `context`) {
      if (G(a2.nodes, t2, n2, { ...r2, ...a2.context }) === 2) return 2;
      continue;
    }
    n2.push(a2);
    let s2 = false, c2 = 0, l2 = t2(a2, { parent: o2, context: r2, path: n2, replaceWith(t3) {
      s2 || (s2 = true, Array.isArray(t3) ? t3.length === 0 ? (e2.splice(i2, 1), c2 = 0) : t3.length === 1 ? (e2[i2] = t3[0], c2 = 1) : (e2.splice(i2, 1, ...t3), c2 = t3.length) : (e2[i2] = t3, c2 = 1));
    } }) ?? 0;
    if (n2.pop(), s2) {
      l2 === 0 ? i2-- : i2 += c2 - 1;
      continue;
    }
    if (l2 === 2) return 2;
    if (l2 !== 1 && `nodes` in a2) {
      n2.push(a2);
      let e3 = G(a2.nodes, t2, n2, r2);
      if (n2.pop(), e3 === 2) return 2;
    }
  }
}
function St(e2, t2, n2 = [], r2 = {}) {
  for (let i2 = 0; i2 < e2.length; i2++) {
    let a2 = e2[i2], o2 = n2[n2.length - 1] ?? null;
    if (a2.kind === `rule` || a2.kind === `at-rule`) n2.push(a2), St(a2.nodes, t2, n2, r2), n2.pop();
    else if (a2.kind === `context`) {
      St(a2.nodes, t2, n2, { ...r2, ...a2.context });
      continue;
    }
    n2.push(a2), t2(a2, { parent: o2, context: r2, path: n2, replaceWith(t3) {
      Array.isArray(t3) ? t3.length === 0 ? e2.splice(i2, 1) : t3.length === 1 ? e2[i2] = t3[0] : e2.splice(i2, 1, ...t3) : e2[i2] = t3, i2 += t3.length - 1;
    } }), n2.pop();
  }
}
function Ct(e2, t2, n2 = 3) {
  let r2 = [], i2 = /* @__PURE__ */ new Set(), a2 = new I(() => /* @__PURE__ */ new Set()), o2 = new I(() => /* @__PURE__ */ new Set()), s2 = /* @__PURE__ */ new Set(), c2 = /* @__PURE__ */ new Set(), l2 = [], u2 = [], d2 = new I(() => /* @__PURE__ */ new Set());
  function f2(e3, p3, m2 = {}, h2 = 0) {
    if (e3.kind === `declaration`) {
      if (e3.property === `--tw-sort` || e3.value === void 0 || e3.value === null) return;
      if (m2.theme && e3.property[0] === `-` && e3.property[1] === `-`) {
        if (e3.value === `initial`) {
          e3.value = void 0;
          return;
        }
        m2.keyframes || a2.get(p3).add(e3);
      }
      if (e3.value.includes(`var(`)) if (m2.theme && e3.property[0] === `-` && e3.property[1] === `-`) for (let t3 of vt(e3.value)) d2.get(t3).add(e3.property);
      else t2.trackUsedVariables(e3.value);
      if (e3.property === `animation`) for (let t3 of Dt(e3.value)) c2.add(t3);
      n2 & 2 && e3.value.includes(`color-mix(`) && o2.get(p3).add(e3), p3.push(e3);
    } else if (e3.kind === `rule`) if (e3.selector === `&`) for (let t3 of e3.nodes) {
      let e4 = [];
      f2(t3, e4, m2, h2 + 1), e4.length > 0 && p3.push(...e4);
    }
    else {
      let t3 = { ...e3, nodes: [] };
      for (let n3 of e3.nodes) f2(n3, t3.nodes, m2, h2 + 1);
      t3.nodes.length > 0 && p3.push(t3);
    }
    else if (e3.kind === `at-rule` && e3.name === `@property` && h2 === 0) {
      if (i2.has(e3.params)) return;
      if (n2 & 1) {
        let t4 = e3.params, n3 = null, r3 = false;
        for (let t5 of e3.nodes) t5.kind === `declaration` && (t5.property === `initial-value` ? n3 = t5.value : t5.property === `inherits` && (r3 = t5.value === `true`));
        let i3 = U(t4, n3 ?? `initial`);
        i3.src = e3.src, r3 ? l2.push(i3) : u2.push(i3);
      }
      i2.add(e3.params);
      let t3 = { ...e3, nodes: [] };
      for (let n3 of e3.nodes) f2(n3, t3.nodes, m2, h2 + 1);
      p3.push(t3);
    } else if (e3.kind === `at-rule`) {
      e3.name === `@keyframes` && (m2 = { ...m2, keyframes: true });
      let t3 = { ...e3, nodes: [] };
      for (let n3 of e3.nodes) f2(n3, t3.nodes, m2, h2 + 1);
      e3.name === `@keyframes` && m2.theme && s2.add(t3), (t3.nodes.length > 0 || t3.name === `@layer` || t3.name === `@charset` || t3.name === `@custom-media` || t3.name === `@namespace` || t3.name === `@import`) && p3.push(t3);
    } else if (e3.kind === `at-root`) for (let t3 of e3.nodes) {
      let e4 = [];
      f2(t3, e4, m2, 0);
      for (let t4 of e4) r2.push(t4);
    }
    else if (e3.kind === `context`) {
      if (e3.context.reference) return;
      for (let t3 of e3.nodes) f2(t3, p3, { ...m2, ...e3.context }, h2);
    } else e3.kind === `comment` && p3.push(e3);
  }
  let p2 = [];
  for (let t3 of e2) f2(t3, p2, {}, 0);
  e: for (let [e3, n3] of a2) for (let r3 of n3) {
    if (Et(r3.property, t2.theme, d2)) {
      if (r3.property.startsWith(t2.theme.prefixKey(`--animate-`))) for (let e4 of Dt(r3.value)) c2.add(e4);
      continue;
    }
    let n4 = e3.indexOf(r3);
    if (e3.splice(n4, 1), e3.length === 0) {
      let t3 = Tt(p2, (t4) => t4.kind === `rule` && t4.nodes === e3);
      if (!t3 || t3.length === 0) continue e;
      t3.unshift({ kind: `at-root`, nodes: p2 });
      do {
        let e4 = t3.pop();
        if (!e4) break;
        let n5 = t3[t3.length - 1];
        if (!n5 || n5.kind !== `at-root` && n5.kind !== `at-rule`) break;
        let r4 = n5.nodes.indexOf(e4);
        if (r4 === -1) break;
        n5.nodes.splice(r4, 1);
      } while (true);
      continue e;
    }
  }
  for (let e3 of s2) if (!c2.has(e3.params)) {
    let t3 = r2.indexOf(e3);
    r2.splice(t3, 1);
  }
  if (p2 = p2.concat(r2), n2 & 2) for (let [e3, n3] of o2) for (let r3 of n3) {
    let n4 = e3.indexOf(r3);
    if (n4 === -1 || r3.value == null) continue;
    let i3 = z(r3.value), a3 = false;
    if (L(i3, (e4, { replaceWith: n5 }) => {
      if (e4.kind !== `function` || e4.value !== `color-mix`) return;
      let r4 = false, i4 = false;
      if (L(e4.nodes, (e5, { replaceWith: n6 }) => {
        if (e5.kind == `word` && e5.value.toLowerCase() === `currentcolor`) {
          i4 = true, a3 = true;
          return;
        }
        let o4 = e5, s4 = null, c3 = /* @__PURE__ */ new Set();
        do {
          if (o4.kind !== `function` || o4.value !== `var`) return;
          let e6 = o4.nodes[0];
          if (!e6 || e6.kind !== `word`) return;
          let n7 = e6.value;
          if (c3.has(n7)) {
            r4 = true;
            return;
          }
          if (c3.add(n7), a3 = true, s4 = t2.theme.resolveValue(null, [e6.value]), !s4) {
            r4 = true;
            return;
          }
          if (s4.toLowerCase() === `currentcolor`) {
            i4 = true;
            return;
          }
          o4 = s4.startsWith(`var(`) ? z(s4)[0] : null;
        } while (o4);
        n6({ kind: `word`, value: s4 });
      }), r4 || i4) {
        let t3 = e4.nodes.findIndex((e5) => e5.kind === `separator` && e5.value.trim().includes(`,`));
        if (t3 === -1) return;
        let r5 = e4.nodes.length > t3 ? e4.nodes[t3 + 1] : null;
        if (!r5) return;
        n5(r5);
      } else if (a3) {
        let t3 = e4.nodes[2];
        t3.kind === `word` && (t3.value === `oklab` || t3.value === `oklch` || t3.value === `lab` || t3.value === `lch`) && (t3.value = `srgb`);
      }
    }), !a3) continue;
    let o3 = { ...r3, value: R(i3) }, s3 = H(`@supports (color: color-mix(in lab, red, red))`, [r3]);
    s3.src = r3.src, e3.splice(n4, 1, o3, s3);
  }
  if (n2 & 1) {
    let e3 = [];
    if (l2.length > 0) {
      let t3 = H(`:root, :host`, l2);
      t3.src = l2[0].src, e3.push(t3);
    }
    if (u2.length > 0) {
      let t3 = H(`*, ::before, ::after, ::backdrop`, u2);
      t3.src = u2[0].src, e3.push(t3);
    }
    if (e3.length > 0) {
      let t3 = p2.findIndex((e4) => !(e4.kind === `comment` || e4.kind === `at-rule` && (e4.name === `@charset` || e4.name === `@import`))), n3 = V(`@layer`, `properties`, []);
      n3.src = e3[0].src, p2.splice(t3 < 0 ? p2.length : t3, 0, n3);
      let r3 = H(`@layer properties`, [V(`@supports`, `((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b))))`, e3)]);
      r3.src = e3[0].src, r3.nodes[0].src = e3[0].src, p2.push(r3);
    }
  }
  return p2;
}
function wt(e2, t2) {
  let n2 = 0, r2 = { file: null, code: `` };
  function i2(e3, a3 = 0) {
    var _a2;
    let o2 = ``, s2 = `  `.repeat(a3);
    if (e3.kind === `declaration`) {
      if (o2 += `${s2}${e3.property}: ${e3.value}${e3.important ? ` !important` : ``};
`, t2) {
        n2 += s2.length;
        let t3 = n2;
        n2 += e3.property.length, n2 += 2, n2 += ((_a2 = e3.value) == null ? void 0 : _a2.length) ?? 0, e3.important && (n2 += 11);
        let i3 = n2;
        n2 += 2, e3.dst = [r2, t3, i3];
      }
    } else if (e3.kind === `rule`) {
      if (o2 += `${s2}${e3.selector} {
`, t2) {
        n2 += s2.length;
        let t3 = n2;
        n2 += e3.selector.length, n2 += 1;
        let i3 = n2;
        e3.dst = [r2, t3, i3], n2 += 2;
      }
      for (let t3 of e3.nodes) o2 += i2(t3, a3 + 1);
      o2 += `${s2}}
`, t2 && (n2 += s2.length, n2 += 2);
    } else if (e3.kind === `at-rule`) {
      if (e3.nodes.length === 0) {
        let i3 = `${s2}${e3.name} ${e3.params};
`;
        if (t2) {
          n2 += s2.length;
          let t3 = n2;
          n2 += e3.name.length, n2 += 1, n2 += e3.params.length;
          let i4 = n2;
          n2 += 2, e3.dst = [r2, t3, i4];
        }
        return i3;
      }
      if (o2 += `${s2}${e3.name}${e3.params ? ` ${e3.params} ` : ` `}{
`, t2) {
        n2 += s2.length;
        let t3 = n2;
        n2 += e3.name.length, e3.params && (n2 += 1, n2 += e3.params.length), n2 += 1;
        let i3 = n2;
        e3.dst = [r2, t3, i3], n2 += 2;
      }
      for (let t3 of e3.nodes) o2 += i2(t3, a3 + 1);
      o2 += `${s2}}
`, t2 && (n2 += s2.length, n2 += 2);
    } else if (e3.kind === `comment`) {
      if (o2 += `${s2}/*${e3.value}*/
`, t2) {
        n2 += s2.length;
        let t3 = n2;
        n2 += 2 + e3.value.length + 2;
        let i3 = n2;
        e3.dst = [r2, t3, i3], n2 += 1;
      }
    } else if (e3.kind === `context` || e3.kind === `at-root`) return ``;
    return o2;
  }
  let a2 = ``;
  for (let t3 of e2) a2 += i2(t3, 0);
  return r2.code = a2, a2;
}
function Tt(e2, t2) {
  let n2 = [];
  return G(e2, (e3, { path: r2 }) => {
    if (t2(e3)) return n2 = [...r2], 2;
  }), n2;
}
function Et(e2, t2, n2, r2 = /* @__PURE__ */ new Set()) {
  if (r2.has(e2) || (r2.add(e2), t2.getOptions(e2) & 24)) return true;
  {
    let i2 = n2.get(e2) ?? [];
    for (let e3 of i2) if (Et(e3, t2, n2, r2)) return true;
  }
  return false;
}
function Dt(e2) {
  return e2.split(/[\s,]+/);
}
function Ot(e2) {
  if (e2.indexOf(`(`) === -1) return kt(e2);
  let t2 = z(e2);
  return At(t2), e2 = R(t2), e2 = g(e2), e2;
}
function kt(e2, t2 = false) {
  let n2 = ``;
  for (let r2 = 0; r2 < e2.length; r2++) {
    let i2 = e2[r2];
    i2 === `\\` && e2[r2 + 1] === `_` ? (n2 += `_`, r2 += 1) : i2 === `_` && !t2 ? n2 += ` ` : n2 += i2;
  }
  return n2;
}
function At(e2) {
  for (let t2 of e2) switch (t2.kind) {
    case `function`:
      if (t2.value === `url` || t2.value.endsWith(`_url`)) {
        t2.value = kt(t2.value);
        break;
      }
      if (t2.value === `var` || t2.value.endsWith(`_var`) || t2.value === `theme` || t2.value.endsWith(`_theme`)) {
        t2.value = kt(t2.value);
        for (let e3 = 0; e3 < t2.nodes.length; e3++) {
          if (e3 == 0 && t2.nodes[e3].kind === `word`) {
            t2.nodes[e3].value = kt(t2.nodes[e3].value, true);
            continue;
          }
          At([t2.nodes[e3]]);
        }
        break;
      }
      t2.value = kt(t2.value), At(t2.nodes);
      break;
    case `separator`:
    case `word`:
      t2.value = kt(t2.value);
      break;
    default:
      jt(t2);
  }
}
function jt(e2) {
  throw Error(`Unexpected value: ${e2}`);
}
var Mt = new Uint8Array(256);
function Nt(e2) {
  let t2 = 0, n2 = e2.length;
  for (let r2 = 0; r2 < n2; r2++) {
    let i2 = e2.charCodeAt(r2);
    switch (i2) {
      case 92:
        r2 += 1;
        break;
      case 39:
      case 34:
        for (; ++r2 < n2; ) {
          let t3 = e2.charCodeAt(r2);
          if (t3 === 92) {
            r2 += 1;
            continue;
          }
          if (t3 === i2) break;
        }
        break;
      case 40:
        Mt[t2] = 41, t2++;
        break;
      case 91:
        Mt[t2] = 93, t2++;
        break;
      case 123:
        break;
      case 93:
      case 125:
      case 41:
        if (t2 === 0) return false;
        t2 > 0 && i2 === Mt[t2 - 1] && t2--;
        break;
      case 59:
        if (t2 === 0) return false;
        break;
    }
  }
  return true;
}
var Pt = 58, Ft = 45, It = 97, Lt = 122;
function* Rt(e2, t2) {
  var _a2;
  let n2 = v(e2, `:`);
  if (t2.theme.prefix) {
    if (n2.length === 1 || n2[0] !== t2.theme.prefix) return null;
    n2.shift();
  }
  let r2 = n2.pop(), i2 = [];
  for (let e3 = n2.length - 1; e3 >= 0; --e3) {
    let r3 = t2.parseVariant(n2[e3]);
    if (r3 === null) return;
    i2.push(r3);
  }
  let a2 = false;
  r2[r2.length - 1] === `!` ? (a2 = true, r2 = r2.slice(0, -1)) : r2[0] === `!` && (a2 = true, r2 = r2.slice(1)), t2.utilities.has(r2, `static`) && !r2.includes(`[`) && (yield { kind: `static`, root: r2, variants: i2, important: a2, raw: e2 });
  let [o2, s2 = null, c2] = v(r2, `/`);
  if (c2) return;
  let l2 = s2 === null ? null : zt(s2);
  if (s2 !== null && l2 === null) return;
  if (o2[0] === `[`) {
    if (o2[o2.length - 1] !== `]`) return;
    let t3 = o2.charCodeAt(1);
    if (t3 !== Ft && !(t3 >= It && t3 <= Lt)) return;
    o2 = o2.slice(1, -1);
    let n3 = o2.indexOf(`:`);
    if (n3 === -1 || n3 === 0 || n3 === o2.length - 1) return;
    let r3 = o2.slice(0, n3), s3 = Ot(o2.slice(n3 + 1));
    if (!Nt(s3)) return;
    yield { kind: `arbitrary`, property: r3, value: s3, modifier: l2, variants: i2, important: a2, raw: e2 };
    return;
  }
  let u2;
  if (o2[o2.length - 1] === `]`) {
    let e3 = o2.indexOf(`-[`);
    if (e3 === -1) return;
    let n3 = o2.slice(0, e3);
    if (!t2.utilities.has(n3, `functional`)) return;
    let r3 = o2.slice(e3 + 1);
    u2 = [[n3, r3]];
  } else if (o2[o2.length - 1] === `)`) {
    let e3 = o2.indexOf(`-(`);
    if (e3 === -1) return;
    let n3 = o2.slice(0, e3);
    if (!t2.utilities.has(n3, `functional`)) return;
    let r3 = o2.slice(e3 + 2, -1), i3 = v(r3, `:`), a3 = null;
    if (i3.length === 2 && (a3 = i3[0], r3 = i3[1]), r3[0] !== `-` || r3[1] !== `-` || !Nt(r3)) return;
    u2 = [[n3, a3 === null ? `[var(${r3})]` : `[${a3}:var(${r3})]`]];
  } else u2 = Vt(o2, (e3) => t2.utilities.has(e3, `functional`));
  for (let [t3, n3] of u2) {
    let r3 = { kind: `functional`, root: t3, modifier: l2, value: null, variants: i2, important: a2, raw: e2 };
    if (n3 === null) {
      yield r3;
      continue;
    }
    {
      let e3 = n3.indexOf(`[`);
      if (e3 !== -1) {
        if (n3[n3.length - 1] !== `]`) return;
        let t4 = Ot(n3.slice(e3 + 1, -1));
        if (!Nt(t4)) continue;
        let i3 = ``;
        for (let e4 = 0; e4 < t4.length; e4++) {
          let n4 = t4.charCodeAt(e4);
          if (n4 === Pt) {
            i3 = t4.slice(0, e4), t4 = t4.slice(e4 + 1);
            break;
          }
          if (!(n4 === Ft || n4 >= It && n4 <= Lt)) break;
        }
        if (t4.length === 0 || t4.trim().length === 0) continue;
        r3.value = { kind: `arbitrary`, dataType: i3 || null, value: t4 };
      } else {
        let e4 = s2 === null || ((_a2 = r3.modifier) == null ? void 0 : _a2.kind) === `arbitrary` ? null : `${n3}/${s2}`;
        r3.value = { kind: `named`, value: n3, fraction: e4 };
      }
    }
    yield r3;
  }
}
function zt(e2) {
  if (e2[0] === `[` && e2[e2.length - 1] === `]`) {
    let t2 = Ot(e2.slice(1, -1));
    return !Nt(t2) || t2.length === 0 || t2.trim().length === 0 ? null : { kind: `arbitrary`, value: t2 };
  }
  return e2[0] === `(` && e2[e2.length - 1] === `)` ? (e2 = e2.slice(1, -1), e2[0] !== `-` || e2[1] !== `-` || !Nt(e2) ? null : (e2 = `var(${e2})`, { kind: `arbitrary`, value: Ot(e2) })) : { kind: `named`, value: e2 };
}
function Bt(e2, t2) {
  if (e2[0] === `[` && e2[e2.length - 1] === `]`) {
    if (e2[1] === `@` && e2.includes(`&`)) return null;
    let t3 = Ot(e2.slice(1, -1));
    if (!Nt(t3) || t3.length === 0 || t3.trim().length === 0) return null;
    let n2 = t3[0] === `>` || t3[0] === `+` || t3[0] === `~`;
    return !n2 && t3[0] !== `@` && !t3.includes(`&`) && (t3 = `&:is(${t3})`), { kind: `arbitrary`, selector: t3, relative: n2 };
  }
  {
    let [n2, r2 = null, i2] = v(e2, `/`);
    if (i2) return null;
    let a2 = Vt(n2, (e3) => t2.variants.has(e3));
    for (let [e3, n3] of a2) switch (t2.variants.kind(e3)) {
      case `static`:
        return n3 !== null || r2 !== null ? null : { kind: `static`, root: e3 };
      case `functional`: {
        let t3 = r2 === null ? null : zt(r2);
        if (r2 !== null && t3 === null) return null;
        if (n3 === null) return { kind: `functional`, root: e3, modifier: t3, value: null };
        if (n3[n3.length - 1] === `]`) {
          if (n3[0] !== `[`) continue;
          let r3 = Ot(n3.slice(1, -1));
          return !Nt(r3) || r3.length === 0 || r3.trim().length === 0 ? null : { kind: `functional`, root: e3, modifier: t3, value: { kind: `arbitrary`, value: r3 } };
        }
        if (n3[n3.length - 1] === `)`) {
          if (n3[0] !== `(`) continue;
          let r3 = Ot(n3.slice(1, -1));
          return !Nt(r3) || r3.length === 0 || r3.trim().length === 0 || r3[0] !== `-` || r3[1] !== `-` ? null : { kind: `functional`, root: e3, modifier: t3, value: { kind: `arbitrary`, value: `var(${r3})` } };
        }
        return { kind: `functional`, root: e3, modifier: t3, value: { kind: `named`, value: n3 } };
      }
      case `compound`: {
        if (n3 === null) return null;
        let i3 = t2.parseVariant(n3);
        if (i3 === null || !t2.variants.compoundsWith(e3, i3)) return null;
        let a3 = r2 === null ? null : zt(r2);
        return r2 !== null && a3 === null ? null : { kind: `compound`, root: e3, modifier: a3, variant: i3 };
      }
    }
  }
  return null;
}
function* Vt(e2, t2) {
  t2(e2) && (yield [e2, null]);
  let n2 = e2.lastIndexOf(`-`);
  for (; n2 > 0; ) {
    let r2 = e2.slice(0, n2);
    if (t2(r2)) {
      let t3 = [r2, e2.slice(n2 + 1)];
      if (t3[1] === ``) break;
      yield t3;
    }
    n2 = e2.lastIndexOf(`-`, n2 - 1);
  }
  e2[0] === `@` && t2(`@`) && (yield [`@`, e2.slice(1)]);
}
function Ht(e2, t2) {
  let n2 = [];
  for (let e3 of t2.variants) n2.unshift(Wt(e3));
  e2.theme.prefix && n2.unshift(e2.theme.prefix);
  let r2 = ``;
  if (t2.kind === `static` && (r2 += t2.root), t2.kind === `functional` && (r2 += t2.root, t2.value)) if (t2.value.kind === `arbitrary`) {
    if (t2.value !== null) {
      let e3 = Zt(t2.value.value), n3 = e3 ? t2.value.value.slice(4, -1) : t2.value.value, [i2, a2] = e3 ? [`(`, `)`] : [`[`, `]`];
      t2.value.dataType ? r2 += `-${i2}${t2.value.dataType}:${Kt(n3)}${a2}` : r2 += `-${i2}${Kt(n3)}${a2}`;
    }
  } else t2.value.kind === `named` && (r2 += `-${t2.value.value}`);
  return t2.kind === `arbitrary` && (r2 += `[${t2.property}:${Kt(t2.value)}]`), (t2.kind === `arbitrary` || t2.kind === `functional`) && (r2 += Ut(t2.modifier)), t2.important && (r2 += `!`), n2.push(r2), n2.join(`:`);
}
function Ut(e2) {
  if (e2 === null) return ``;
  let t2 = Zt(e2.value), n2 = t2 ? e2.value.slice(4, -1) : e2.value, [r2, i2] = t2 ? [`(`, `)`] : [`[`, `]`];
  return e2.kind === `arbitrary` ? `/${r2}${Kt(n2)}${i2}` : e2.kind === `named` ? `/${e2.value}` : ``;
}
function Wt(e2) {
  if (e2.kind === `static`) return e2.root;
  if (e2.kind === `arbitrary`) return `[${Kt(Jt(e2.selector))}]`;
  let t2 = ``;
  if (e2.kind === `functional`) {
    t2 += e2.root;
    let n2 = e2.root !== `@`;
    if (e2.value) if (e2.value.kind === `arbitrary`) {
      let r2 = Zt(e2.value.value), i2 = r2 ? e2.value.value.slice(4, -1) : e2.value.value, [a2, o2] = r2 ? [`(`, `)`] : [`[`, `]`];
      t2 += `${n2 ? `-` : ``}${a2}${Kt(i2)}${o2}`;
    } else e2.value.kind === `named` && (t2 += `${n2 ? `-` : ``}${e2.value.value}`);
  }
  return e2.kind === `compound` && (t2 += e2.root, t2 += `-`, t2 += Wt(e2.variant)), (e2.kind === `functional` || e2.kind === `compound`) && (t2 += Ut(e2.modifier)), t2;
}
var Gt = new I((e2) => {
  let t2 = z(e2), n2 = /* @__PURE__ */ new Set();
  return L(t2, (e3, { parent: r2 }) => {
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
  }), n2.size > 0 && L(t2, (e3, { replaceWith: t3 }) => {
    n2.has(e3) && (n2.delete(e3), t3([]));
  }), Yt(t2), R(t2);
});
function Kt(e2) {
  return Gt.get(e2);
}
var qt = new I((e2) => {
  let t2 = z(e2);
  return t2.length === 3 && t2[0].kind === `word` && t2[0].value === `&` && t2[1].kind === `separator` && t2[1].value === `:` && t2[2].kind === `function` && t2[2].value === `is` ? R(t2[2].nodes) : e2;
});
function Jt(e2) {
  return qt.get(e2);
}
function Yt(e2) {
  for (let t2 of e2) switch (t2.kind) {
    case `function`:
      if (t2.value === `url` || t2.value.endsWith(`_url`)) {
        t2.value = $t(t2.value);
        break;
      }
      if (t2.value === `var` || t2.value.endsWith(`_var`) || t2.value === `theme` || t2.value.endsWith(`_theme`)) {
        t2.value = $t(t2.value);
        for (let e3 = 0; e3 < t2.nodes.length; e3++) Yt([t2.nodes[e3]]);
        break;
      }
      t2.value = $t(t2.value), Yt(t2.nodes);
      break;
    case `separator`:
      t2.value = $t(t2.value);
      break;
    case `word`:
      (t2.value[0] !== `-` || t2.value[1] !== `-`) && (t2.value = $t(t2.value));
      break;
    default:
      Qt(t2);
  }
}
var Xt = new I((e2) => {
  let t2 = z(e2);
  return t2.length === 1 && t2[0].kind === `function` && t2[0].value === `var`;
});
function Zt(e2) {
  return Xt.get(e2);
}
function Qt(e2) {
  throw Error(`Unexpected value: ${e2}`);
}
function $t(e2) {
  return e2.replaceAll(`_`, String.raw`\_`).replaceAll(` `, `_`);
}
function en(e2, t2, n2) {
  if (e2 === t2) return 0;
  let r2 = e2.indexOf(`(`), i2 = t2.indexOf(`(`), a2 = r2 === -1 ? e2.replace(/[\d.]+/g, ``) : e2.slice(0, r2), o2 = i2 === -1 ? t2.replace(/[\d.]+/g, ``) : t2.slice(0, i2), s2 = (a2 === o2 ? 0 : a2 < o2 ? -1 : 1) || (n2 === `asc` ? parseInt(e2) - parseInt(t2) : parseInt(t2) - parseInt(e2));
  return Number.isNaN(s2) ? e2 < t2 ? -1 : 1 : s2;
}
var tn = /* @__PURE__ */ new Set([`inset`, `inherit`, `initial`, `revert`, `unset`]), nn = /^-?(\d+|\.\d+)(.*?)$/g;
function rn(e2, t2) {
  return v(e2, `,`).map((e3) => {
    e3 = e3.trim();
    let n2 = v(e3, ` `).filter((e4) => e4.trim() !== ``), r2 = null, i2 = null, a2 = null;
    for (let e4 of n2) tn.has(e4) || (nn.test(e4) ? (i2 === null ? i2 = e4 : a2 === null && (a2 = e4), nn.lastIndex = 0) : r2 === null && (r2 = e4));
    if (i2 === null || a2 === null) return e3;
    let o2 = t2(r2 ?? `currentcolor`);
    return r2 === null ? `${e3} ${o2}` : e3.replace(r2, o2);
  }).join(`, `);
}
var an = /^-?[a-z][a-zA-Z0-9/%._-]*$/, on = /^-?[a-z][a-zA-Z0-9/%._-]*-\*$/, sn = `0,0.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40,44,48,52,56,60,64,72,80,96`.split(`,`), cn = class {
  constructor() {
    __publicField(this, "utilities", new I(() => []));
    __publicField(this, "completions", /* @__PURE__ */ new Map());
  }
  static(e2, t2) {
    this.utilities.get(e2).push({ kind: `static`, compileFn: t2 });
  }
  functional(e2, t2, n2) {
    this.utilities.get(e2).push({ kind: `functional`, compileFn: t2, options: n2 });
  }
  has(e2, t2) {
    return this.utilities.has(e2) && this.utilities.get(e2).some((e3) => e3.kind === t2);
  }
  get(e2) {
    return this.utilities.has(e2) ? this.utilities.get(e2) : [];
  }
  getCompletions(e2) {
    var _a2;
    return ((_a2 = this.completions.get(e2)) == null ? void 0 : _a2()) ?? [];
  }
  suggest(e2, t2) {
    this.completions.set(e2, t2);
  }
  keys(e2) {
    let t2 = [];
    for (let [n2, r2] of this.utilities.entries()) for (let i2 of r2) if (i2.kind === e2) {
      t2.push(n2);
      break;
    }
    return t2;
  }
};
function K(e2, t2, n2) {
  return V(`@property`, e2, [U(`syntax`, n2 ? `"${n2}"` : `"*"`), U(`inherits`, `false`), ...t2 ? [U(`initial-value`, t2)] : []]);
}
function q(e2, t2) {
  if (t2 === null) return e2;
  let n2 = Number(t2);
  return Number.isNaN(n2) || (t2 = `${n2 * 100}%`), t2 === `100%` ? e2 : `color-mix(in oklab, ${e2} ${t2}, transparent)`;
}
function ln(e2, t2) {
  let n2 = Number(t2);
  return Number.isNaN(n2) || (t2 = `${n2 * 100}%`), `oklab(from ${e2} l a b / ${t2})`;
}
function J(e2, t2, n2) {
  if (!t2) return e2;
  if (t2.kind === `arbitrary`) return q(e2, t2.value);
  let r2 = n2.resolve(t2.value, [`--opacity`]);
  return r2 ? q(e2, r2) : ve(t2.value) ? q(e2, `${t2.value}%`) : null;
}
function Y(e2, t2, n2) {
  let r2 = null;
  switch (e2.value.value) {
    case `inherit`:
      r2 = `inherit`;
      break;
    case `transparent`:
      r2 = `transparent`;
      break;
    case `current`:
      r2 = `currentcolor`;
      break;
    default:
      r2 = t2.resolve(e2.value.value, n2);
      break;
  }
  return r2 ? J(r2, e2.modifier, t2) : null;
}
var un = /(\d+)_(\d+)/g;
function dn(e2) {
  let t2 = new cn();
  function n2(n3, r3) {
    function* i3(t3) {
      for (let n4 of e2.keysInNamespaces(t3)) yield n4.replace(un, (e3, t4, n5) => `${t4}.${n5}`);
    }
    let a3 = `1/2.1/3.2/3.1/4.2/4.3/4.1/5.2/5.3/5.4/5.1/6.2/6.3/6.4/6.5/6.1/12.2/12.3/12.4/12.5/12.6/12.7/12.8/12.9/12.10/12.11/12`.split(`.`);
    t2.suggest(n3, () => {
      let e3 = [];
      for (let t3 of r3()) {
        if (typeof t3 == `string`) {
          e3.push({ values: [t3], modifiers: [] });
          continue;
        }
        let n4 = [...t3.values ?? [], ...i3(t3.valueThemeKeys ?? [])], r4 = [...t3.modifiers ?? [], ...i3(t3.modifierThemeKeys ?? [])];
        t3.supportsFractions && n4.push(...a3), t3.hasDefaultValue && n4.unshift(null), e3.push({ supportsNegative: t3.supportsNegative, values: n4, modifiers: r4 });
      }
      return e3;
    });
  }
  function r2(e3, n3) {
    t2.static(e3, () => n3.map((e4) => typeof e4 == `function` ? e4() : U(e4[0], e4[1])));
  }
  function i2(r3, i3) {
    function a3({ negative: t3 }) {
      return (n3) => {
        let r4 = null, a4 = null;
        if (n3.value) if (n3.value.kind === `arbitrary`) {
          if (n3.modifier) return;
          r4 = n3.value.value, a4 = n3.value.dataType;
        } else {
          if (r4 = e2.resolve(n3.value.fraction ?? n3.value.value, i3.themeKeys ?? []), r4 === null && i3.supportsFractions && n3.value.fraction) {
            let [e3, t4] = v(n3.value.fraction, `/`);
            if (!M(e3) || !M(t4)) return;
            r4 = `calc(${n3.value.fraction} * 100%)`;
          }
          if (r4 === null && t3 && i3.handleNegativeBareValue) {
            if (r4 = i3.handleNegativeBareValue(n3.value), !(r4 == null ? void 0 : r4.includes(`/`)) && n3.modifier) return;
            if (r4 !== null) return i3.handle(r4, null);
          }
          if (r4 === null && i3.handleBareValue && (r4 = i3.handleBareValue(n3.value), !(r4 == null ? void 0 : r4.includes(`/`)) && n3.modifier)) return;
        }
        else {
          if (n3.modifier) return;
          r4 = i3.defaultValue === void 0 ? e2.resolve(null, i3.themeKeys ?? []) : i3.defaultValue;
        }
        if (r4 !== null) return i3.handle(t3 ? `calc(${r4} * -1)` : r4, a4);
      };
    }
    i3.supportsNegative && t2.functional(`-${r3}`, a3({ negative: true })), t2.functional(r3, a3({ negative: false })), n2(r3, () => [{ supportsNegative: i3.supportsNegative, valueThemeKeys: i3.themeKeys ?? [], hasDefaultValue: i3.defaultValue !== void 0 && i3.defaultValue !== null, supportsFractions: i3.supportsFractions }]);
  }
  function a2(r3, i3) {
    t2.functional(r3, (t3) => {
      if (!t3.value) return;
      let n3 = null;
      if (t3.value.kind === `arbitrary` ? (n3 = t3.value.value, n3 = J(n3, t3.modifier, e2)) : n3 = Y(t3, e2, i3.themeKeys), n3 !== null) return i3.handle(n3);
    }), n2(r3, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: i3.themeKeys, modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`) }]);
  }
  function o2(r3, a3, o3, { supportsNegative: s3 = false, supportsFractions: c3 = false } = {}) {
    s3 && t2.static(`-${r3}-px`, () => o3(`-1px`)), t2.static(`${r3}-px`, () => o3(`1px`)), i2(r3, { themeKeys: a3, supportsFractions: c3, supportsNegative: s3, defaultValue: null, handleBareValue: ({ value: t3 }) => {
      let n3 = e2.resolve(null, [`--spacing`]);
      return !n3 || !_e(t3) ? null : `calc(${n3} * ${t3})`;
    }, handleNegativeBareValue: ({ value: t3 }) => {
      let n3 = e2.resolve(null, [`--spacing`]);
      return !n3 || !_e(t3) ? null : `calc(${n3} * -${t3})`;
    }, handle: o3 }), n2(r3, () => [{ values: e2.get([`--spacing`]) ? sn : [], supportsNegative: s3, supportsFractions: c3, valueThemeKeys: a3 }]);
  }
  r2(`sr-only`, [[`position`, `absolute`], [`width`, `1px`], [`height`, `1px`], [`padding`, `0`], [`margin`, `-1px`], [`overflow`, `hidden`], [`clip`, `rect(0, 0, 0, 0)`], [`white-space`, `nowrap`], [`border-width`, `0`]]), r2(`not-sr-only`, [[`position`, `static`], [`width`, `auto`], [`height`, `auto`], [`padding`, `0`], [`margin`, `0`], [`overflow`, `visible`], [`clip`, `auto`], [`white-space`, `normal`]]), r2(`pointer-events-none`, [[`pointer-events`, `none`]]), r2(`pointer-events-auto`, [[`pointer-events`, `auto`]]), r2(`visible`, [[`visibility`, `visible`]]), r2(`invisible`, [[`visibility`, `hidden`]]), r2(`collapse`, [[`visibility`, `collapse`]]), r2(`static`, [[`position`, `static`]]), r2(`fixed`, [[`position`, `fixed`]]), r2(`absolute`, [[`position`, `absolute`]]), r2(`relative`, [[`position`, `relative`]]), r2(`sticky`, [[`position`, `sticky`]]);
  for (let [e3, t3] of [[`inset`, `inset`], [`inset-x`, `inset-inline`], [`inset-y`, `inset-block`], [`start`, `inset-inline-start`], [`end`, `inset-inline-end`], [`top`, `top`], [`right`, `right`], [`bottom`, `bottom`], [`left`, `left`]]) r2(`${e3}-auto`, [[t3, `auto`]]), r2(`${e3}-full`, [[t3, `100%`]]), r2(`-${e3}-full`, [[t3, `-100%`]]), o2(e3, [`--inset`, `--spacing`], (e4) => [U(t3, e4)], { supportsNegative: true, supportsFractions: true });
  r2(`isolate`, [[`isolation`, `isolate`]]), r2(`isolation-auto`, [[`isolation`, `auto`]]), r2(`z-auto`, [[`z-index`, `auto`]]), i2(`z`, { supportsNegative: true, handleBareValue: ({ value: e3 }) => M(e3) ? e3 : null, themeKeys: [`--z-index`], handle: (e3) => [U(`z-index`, e3)] }), n2(`z`, () => [{ supportsNegative: true, values: [`0`, `10`, `20`, `30`, `40`, `50`], valueThemeKeys: [`--z-index`] }]), r2(`order-first`, [[`order`, `-9999`]]), r2(`order-last`, [[`order`, `9999`]]), i2(`order`, { supportsNegative: true, handleBareValue: ({ value: e3 }) => M(e3) ? e3 : null, themeKeys: [`--order`], handle: (e3) => [U(`order`, e3)] }), n2(`order`, () => [{ supportsNegative: true, values: Array.from({ length: 12 }, (e3, t3) => `${t3 + 1}`), valueThemeKeys: [`--order`] }]), r2(`col-auto`, [[`grid-column`, `auto`]]), i2(`col`, { supportsNegative: true, handleBareValue: ({ value: e3 }) => M(e3) ? e3 : null, themeKeys: [`--grid-column`], handle: (e3) => [U(`grid-column`, e3)] }), r2(`col-span-full`, [[`grid-column`, `1 / -1`]]), i2(`col-span`, { handleBareValue: ({ value: e3 }) => M(e3) ? e3 : null, handle: (e3) => [U(`grid-column`, `span ${e3} / span ${e3}`)] }), r2(`col-start-auto`, [[`grid-column-start`, `auto`]]), i2(`col-start`, { supportsNegative: true, handleBareValue: ({ value: e3 }) => M(e3) ? e3 : null, themeKeys: [`--grid-column-start`], handle: (e3) => [U(`grid-column-start`, e3)] }), r2(`col-end-auto`, [[`grid-column-end`, `auto`]]), i2(`col-end`, { supportsNegative: true, handleBareValue: ({ value: e3 }) => M(e3) ? e3 : null, themeKeys: [`--grid-column-end`], handle: (e3) => [U(`grid-column-end`, e3)] }), n2(`col-span`, () => [{ values: Array.from({ length: 12 }, (e3, t3) => `${t3 + 1}`), valueThemeKeys: [] }]), n2(`col-start`, () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (e3, t3) => `${t3 + 1}`), valueThemeKeys: [`--grid-column-start`] }]), n2(`col-end`, () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (e3, t3) => `${t3 + 1}`), valueThemeKeys: [`--grid-column-end`] }]), r2(`row-auto`, [[`grid-row`, `auto`]]), i2(`row`, { supportsNegative: true, handleBareValue: ({ value: e3 }) => M(e3) ? e3 : null, themeKeys: [`--grid-row`], handle: (e3) => [U(`grid-row`, e3)] }), r2(`row-span-full`, [[`grid-row`, `1 / -1`]]), i2(`row-span`, { themeKeys: [], handleBareValue: ({ value: e3 }) => M(e3) ? e3 : null, handle: (e3) => [U(`grid-row`, `span ${e3} / span ${e3}`)] }), r2(`row-start-auto`, [[`grid-row-start`, `auto`]]), i2(`row-start`, { supportsNegative: true, handleBareValue: ({ value: e3 }) => M(e3) ? e3 : null, themeKeys: [`--grid-row-start`], handle: (e3) => [U(`grid-row-start`, e3)] }), r2(`row-end-auto`, [[`grid-row-end`, `auto`]]), i2(`row-end`, { supportsNegative: true, handleBareValue: ({ value: e3 }) => M(e3) ? e3 : null, themeKeys: [`--grid-row-end`], handle: (e3) => [U(`grid-row-end`, e3)] }), n2(`row-span`, () => [{ values: Array.from({ length: 12 }, (e3, t3) => `${t3 + 1}`), valueThemeKeys: [] }]), n2(`row-start`, () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (e3, t3) => `${t3 + 1}`), valueThemeKeys: [`--grid-row-start`] }]), n2(`row-end`, () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (e3, t3) => `${t3 + 1}`), valueThemeKeys: [`--grid-row-end`] }]), r2(`float-start`, [[`float`, `inline-start`]]), r2(`float-end`, [[`float`, `inline-end`]]), r2(`float-right`, [[`float`, `right`]]), r2(`float-left`, [[`float`, `left`]]), r2(`float-none`, [[`float`, `none`]]), r2(`clear-start`, [[`clear`, `inline-start`]]), r2(`clear-end`, [[`clear`, `inline-end`]]), r2(`clear-right`, [[`clear`, `right`]]), r2(`clear-left`, [[`clear`, `left`]]), r2(`clear-both`, [[`clear`, `both`]]), r2(`clear-none`, [[`clear`, `none`]]);
  for (let [e3, t3] of [[`m`, `margin`], [`mx`, `margin-inline`], [`my`, `margin-block`], [`ms`, `margin-inline-start`], [`me`, `margin-inline-end`], [`mt`, `margin-top`], [`mr`, `margin-right`], [`mb`, `margin-bottom`], [`ml`, `margin-left`]]) r2(`${e3}-auto`, [[t3, `auto`]]), o2(e3, [`--margin`, `--spacing`], (e4) => [U(t3, e4)], { supportsNegative: true });
  r2(`box-border`, [[`box-sizing`, `border-box`]]), r2(`box-content`, [[`box-sizing`, `content-box`]]), r2(`line-clamp-none`, [[`overflow`, `visible`], [`display`, `block`], [`-webkit-box-orient`, `horizontal`], [`-webkit-line-clamp`, `unset`]]), i2(`line-clamp`, { themeKeys: [`--line-clamp`], handleBareValue: ({ value: e3 }) => M(e3) ? e3 : null, handle: (e3) => [U(`overflow`, `hidden`), U(`display`, `-webkit-box`), U(`-webkit-box-orient`, `vertical`), U(`-webkit-line-clamp`, e3)] }), n2(`line-clamp`, () => [{ values: [`1`, `2`, `3`, `4`, `5`, `6`], valueThemeKeys: [`--line-clamp`] }]), r2(`block`, [[`display`, `block`]]), r2(`inline-block`, [[`display`, `inline-block`]]), r2(`inline`, [[`display`, `inline`]]), r2(`hidden`, [[`display`, `none`]]), r2(`inline-flex`, [[`display`, `inline-flex`]]), r2(`table`, [[`display`, `table`]]), r2(`inline-table`, [[`display`, `inline-table`]]), r2(`table-caption`, [[`display`, `table-caption`]]), r2(`table-cell`, [[`display`, `table-cell`]]), r2(`table-column`, [[`display`, `table-column`]]), r2(`table-column-group`, [[`display`, `table-column-group`]]), r2(`table-footer-group`, [[`display`, `table-footer-group`]]), r2(`table-header-group`, [[`display`, `table-header-group`]]), r2(`table-row-group`, [[`display`, `table-row-group`]]), r2(`table-row`, [[`display`, `table-row`]]), r2(`flow-root`, [[`display`, `flow-root`]]), r2(`flex`, [[`display`, `flex`]]), r2(`grid`, [[`display`, `grid`]]), r2(`inline-grid`, [[`display`, `inline-grid`]]), r2(`contents`, [[`display`, `contents`]]), r2(`list-item`, [[`display`, `list-item`]]), r2(`field-sizing-content`, [[`field-sizing`, `content`]]), r2(`field-sizing-fixed`, [[`field-sizing`, `fixed`]]), r2(`aspect-auto`, [[`aspect-ratio`, `auto`]]), r2(`aspect-square`, [[`aspect-ratio`, `1 / 1`]]), i2(`aspect`, { themeKeys: [`--aspect`], handleBareValue: ({ fraction: e3 }) => {
    if (e3 === null) return null;
    let [t3, n3] = v(e3, `/`);
    return !M(t3) || !M(n3) ? null : e3;
  }, handle: (e3) => [U(`aspect-ratio`, e3)] });
  for (let [e3, t3] of [[`full`, `100%`], [`svw`, `100svw`], [`lvw`, `100lvw`], [`dvw`, `100dvw`], [`svh`, `100svh`], [`lvh`, `100lvh`], [`dvh`, `100dvh`], [`min`, `min-content`], [`max`, `max-content`], [`fit`, `fit-content`]]) r2(`size-${e3}`, [[`--tw-sort`, `size`], [`width`, t3], [`height`, t3]]), r2(`w-${e3}`, [[`width`, t3]]), r2(`h-${e3}`, [[`height`, t3]]), r2(`min-w-${e3}`, [[`min-width`, t3]]), r2(`min-h-${e3}`, [[`min-height`, t3]]), r2(`max-w-${e3}`, [[`max-width`, t3]]), r2(`max-h-${e3}`, [[`max-height`, t3]]);
  r2(`size-auto`, [[`--tw-sort`, `size`], [`width`, `auto`], [`height`, `auto`]]), r2(`w-auto`, [[`width`, `auto`]]), r2(`h-auto`, [[`height`, `auto`]]), r2(`min-w-auto`, [[`min-width`, `auto`]]), r2(`min-h-auto`, [[`min-height`, `auto`]]), r2(`h-lh`, [[`height`, `1lh`]]), r2(`min-h-lh`, [[`min-height`, `1lh`]]), r2(`max-h-lh`, [[`max-height`, `1lh`]]), r2(`w-screen`, [[`width`, `100vw`]]), r2(`min-w-screen`, [[`min-width`, `100vw`]]), r2(`max-w-screen`, [[`max-width`, `100vw`]]), r2(`h-screen`, [[`height`, `100vh`]]), r2(`min-h-screen`, [[`min-height`, `100vh`]]), r2(`max-h-screen`, [[`max-height`, `100vh`]]), r2(`max-w-none`, [[`max-width`, `none`]]), r2(`max-h-none`, [[`max-height`, `none`]]), o2(`size`, [`--size`, `--spacing`], (e3) => [U(`--tw-sort`, `size`), U(`width`, e3), U(`height`, e3)], { supportsFractions: true });
  for (let [e3, t3, n3] of [[`w`, [`--width`, `--spacing`, `--container`], `width`], [`min-w`, [`--min-width`, `--spacing`, `--container`], `min-width`], [`max-w`, [`--max-width`, `--spacing`, `--container`], `max-width`], [`h`, [`--height`, `--spacing`], `height`], [`min-h`, [`--min-height`, `--height`, `--spacing`], `min-height`], [`max-h`, [`--max-height`, `--height`, `--spacing`], `max-height`]]) o2(e3, t3, (e4) => [U(n3, e4)], { supportsFractions: true });
  t2.static(`container`, () => {
    let t3 = [...e2.namespace(`--breakpoint`).values()];
    t3.sort((e3, t4) => en(e3, t4, `asc`));
    let n3 = [U(`--tw-sort`, `--tw-container-component`), U(`width`, `100%`)];
    for (let e3 of t3) n3.push(V(`@media`, `(width >= ${e3})`, [U(`max-width`, e3)]));
    return n3;
  }), r2(`flex-auto`, [[`flex`, `auto`]]), r2(`flex-initial`, [[`flex`, `0 auto`]]), r2(`flex-none`, [[`flex`, `none`]]), t2.functional(`flex`, (e3) => {
    if (e3.value) {
      if (e3.value.kind === `arbitrary`) return e3.modifier ? void 0 : [U(`flex`, e3.value.value)];
      if (e3.value.fraction) {
        let [t3, n3] = v(e3.value.fraction, `/`);
        return !M(t3) || !M(n3) ? void 0 : [U(`flex`, `calc(${e3.value.fraction} * 100%)`)];
      }
      if (M(e3.value.value)) return e3.modifier ? void 0 : [U(`flex`, e3.value.value)];
    }
  }), n2(`flex`, () => [{ supportsFractions: true }]), i2(`shrink`, { defaultValue: `1`, handleBareValue: ({ value: e3 }) => M(e3) ? e3 : null, handle: (e3) => [U(`flex-shrink`, e3)] }), i2(`grow`, { defaultValue: `1`, handleBareValue: ({ value: e3 }) => M(e3) ? e3 : null, handle: (e3) => [U(`flex-grow`, e3)] }), n2(`shrink`, () => [{ values: [`0`], valueThemeKeys: [], hasDefaultValue: true }]), n2(`grow`, () => [{ values: [`0`], valueThemeKeys: [], hasDefaultValue: true }]), r2(`basis-auto`, [[`flex-basis`, `auto`]]), r2(`basis-full`, [[`flex-basis`, `100%`]]), o2(`basis`, [`--flex-basis`, `--spacing`, `--container`], (e3) => [U(`flex-basis`, e3)], { supportsFractions: true }), r2(`table-auto`, [[`table-layout`, `auto`]]), r2(`table-fixed`, [[`table-layout`, `fixed`]]), r2(`caption-top`, [[`caption-side`, `top`]]), r2(`caption-bottom`, [[`caption-side`, `bottom`]]), r2(`border-collapse`, [[`border-collapse`, `collapse`]]), r2(`border-separate`, [[`border-collapse`, `separate`]]);
  let s2 = () => W([K(`--tw-border-spacing-x`, `0`, `<length>`), K(`--tw-border-spacing-y`, `0`, `<length>`)]);
  o2(`border-spacing`, [`--border-spacing`, `--spacing`], (e3) => [s2(), U(`--tw-border-spacing-x`, e3), U(`--tw-border-spacing-y`, e3), U(`border-spacing`, `var(--tw-border-spacing-x) var(--tw-border-spacing-y)`)]), o2(`border-spacing-x`, [`--border-spacing`, `--spacing`], (e3) => [s2(), U(`--tw-border-spacing-x`, e3), U(`border-spacing`, `var(--tw-border-spacing-x) var(--tw-border-spacing-y)`)]), o2(`border-spacing-y`, [`--border-spacing`, `--spacing`], (e3) => [s2(), U(`--tw-border-spacing-y`, e3), U(`border-spacing`, `var(--tw-border-spacing-x) var(--tw-border-spacing-y)`)]), r2(`origin-center`, [[`transform-origin`, `center`]]), r2(`origin-top`, [[`transform-origin`, `top`]]), r2(`origin-top-right`, [[`transform-origin`, `top right`]]), r2(`origin-right`, [[`transform-origin`, `right`]]), r2(`origin-bottom-right`, [[`transform-origin`, `bottom right`]]), r2(`origin-bottom`, [[`transform-origin`, `bottom`]]), r2(`origin-bottom-left`, [[`transform-origin`, `bottom left`]]), r2(`origin-left`, [[`transform-origin`, `left`]]), r2(`origin-top-left`, [[`transform-origin`, `top left`]]), i2(`origin`, { themeKeys: [`--transform-origin`], handle: (e3) => [U(`transform-origin`, e3)] }), r2(`perspective-origin-center`, [[`perspective-origin`, `center`]]), r2(`perspective-origin-top`, [[`perspective-origin`, `top`]]), r2(`perspective-origin-top-right`, [[`perspective-origin`, `top right`]]), r2(`perspective-origin-right`, [[`perspective-origin`, `right`]]), r2(`perspective-origin-bottom-right`, [[`perspective-origin`, `bottom right`]]), r2(`perspective-origin-bottom`, [[`perspective-origin`, `bottom`]]), r2(`perspective-origin-bottom-left`, [[`perspective-origin`, `bottom left`]]), r2(`perspective-origin-left`, [[`perspective-origin`, `left`]]), r2(`perspective-origin-top-left`, [[`perspective-origin`, `top left`]]), i2(`perspective-origin`, { themeKeys: [`--perspective-origin`], handle: (e3) => [U(`perspective-origin`, e3)] }), r2(`perspective-none`, [[`perspective`, `none`]]), i2(`perspective`, { themeKeys: [`--perspective`], handle: (e3) => [U(`perspective`, e3)] });
  let c2 = () => W([K(`--tw-translate-x`, `0`), K(`--tw-translate-y`, `0`), K(`--tw-translate-z`, `0`)]);
  r2(`translate-none`, [[`translate`, `none`]]), r2(`-translate-full`, [c2, [`--tw-translate-x`, `-100%`], [`--tw-translate-y`, `-100%`], [`translate`, `var(--tw-translate-x) var(--tw-translate-y)`]]), r2(`translate-full`, [c2, [`--tw-translate-x`, `100%`], [`--tw-translate-y`, `100%`], [`translate`, `var(--tw-translate-x) var(--tw-translate-y)`]]), o2(`translate`, [`--translate`, `--spacing`], (e3) => [c2(), U(`--tw-translate-x`, e3), U(`--tw-translate-y`, e3), U(`translate`, `var(--tw-translate-x) var(--tw-translate-y)`)], { supportsNegative: true, supportsFractions: true });
  for (let e3 of [`x`, `y`]) r2(`-translate-${e3}-full`, [c2, [`--tw-translate-${e3}`, `-100%`], [`translate`, `var(--tw-translate-x) var(--tw-translate-y)`]]), r2(`translate-${e3}-full`, [c2, [`--tw-translate-${e3}`, `100%`], [`translate`, `var(--tw-translate-x) var(--tw-translate-y)`]]), o2(`translate-${e3}`, [`--translate`, `--spacing`], (t3) => [c2(), U(`--tw-translate-${e3}`, t3), U(`translate`, `var(--tw-translate-x) var(--tw-translate-y)`)], { supportsNegative: true, supportsFractions: true });
  o2(`translate-z`, [`--translate`, `--spacing`], (e3) => [c2(), U(`--tw-translate-z`, e3), U(`translate`, `var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)`)], { supportsNegative: true }), r2(`translate-3d`, [c2, [`translate`, `var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)`]]);
  let l2 = () => W([K(`--tw-scale-x`, `1`), K(`--tw-scale-y`, `1`), K(`--tw-scale-z`, `1`)]);
  r2(`scale-none`, [[`scale`, `none`]]);
  function u2({ negative: t3 }) {
    return (n3) => {
      if (!n3.value || n3.modifier) return;
      let r3;
      return n3.value.kind === `arbitrary` ? (r3 = n3.value.value, r3 = t3 ? `calc(${r3} * -1)` : r3, [U(`scale`, r3)]) : (r3 = e2.resolve(n3.value.value, [`--scale`]), !r3 && M(n3.value.value) && (r3 = `${n3.value.value}%`), r3 ? (r3 = t3 ? `calc(${r3} * -1)` : r3, [l2(), U(`--tw-scale-x`, r3), U(`--tw-scale-y`, r3), U(`--tw-scale-z`, r3), U(`scale`, `var(--tw-scale-x) var(--tw-scale-y)`)]) : void 0);
    };
  }
  t2.functional(`-scale`, u2({ negative: true })), t2.functional(`scale`, u2({ negative: false })), n2(`scale`, () => [{ supportsNegative: true, values: [`0`, `50`, `75`, `90`, `95`, `100`, `105`, `110`, `125`, `150`, `200`], valueThemeKeys: [`--scale`] }]);
  for (let e3 of [`x`, `y`, `z`]) i2(`scale-${e3}`, { supportsNegative: true, themeKeys: [`--scale`], handleBareValue: ({ value: e4 }) => M(e4) ? `${e4}%` : null, handle: (t3) => [l2(), U(`--tw-scale-${e3}`, t3), U(`scale`, `var(--tw-scale-x) var(--tw-scale-y)${e3 === `z` ? ` var(--tw-scale-z)` : ``}`)] }), n2(`scale-${e3}`, () => [{ supportsNegative: true, values: [`0`, `50`, `75`, `90`, `95`, `100`, `105`, `110`, `125`, `150`, `200`], valueThemeKeys: [`--scale`] }]);
  r2(`scale-3d`, [l2, [`scale`, `var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)`]]), r2(`rotate-none`, [[`rotate`, `none`]]);
  function d2({ negative: t3 }) {
    return (n3) => {
      if (!n3.value || n3.modifier) return;
      let r3;
      if (n3.value.kind === `arbitrary`) {
        r3 = n3.value.value;
        let e3 = n3.value.dataType ?? b(r3, [`angle`, `vector`]);
        if (e3 === `vector`) return [U(`rotate`, `${r3} var(--tw-rotate)`)];
        if (e3 !== `angle`) return [U(`rotate`, t3 ? `calc(${r3} * -1)` : r3)];
      } else if (r3 = e2.resolve(n3.value.value, [`--rotate`]), !r3 && M(n3.value.value) && (r3 = `${n3.value.value}deg`), !r3) return;
      return [U(`rotate`, t3 ? `calc(${r3} * -1)` : r3)];
    };
  }
  t2.functional(`-rotate`, d2({ negative: true })), t2.functional(`rotate`, d2({ negative: false })), n2(`rotate`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `3`, `6`, `12`, `45`, `90`, `180`], valueThemeKeys: [`--rotate`] }]);
  {
    let e3 = [`var(--tw-rotate-x,)`, `var(--tw-rotate-y,)`, `var(--tw-rotate-z,)`, `var(--tw-skew-x,)`, `var(--tw-skew-y,)`].join(` `), a3 = () => W([K(`--tw-rotate-x`), K(`--tw-rotate-y`), K(`--tw-rotate-z`), K(`--tw-skew-x`), K(`--tw-skew-y`)]);
    for (let t3 of [`x`, `y`, `z`]) i2(`rotate-${t3}`, { supportsNegative: true, themeKeys: [`--rotate`], handleBareValue: ({ value: e4 }) => M(e4) ? `${e4}deg` : null, handle: (n3) => [a3(), U(`--tw-rotate-${t3}`, `rotate${t3.toUpperCase()}(${n3})`), U(`transform`, e3)] }), n2(`rotate-${t3}`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `3`, `6`, `12`, `45`, `90`, `180`], valueThemeKeys: [`--rotate`] }]);
    i2(`skew`, { supportsNegative: true, themeKeys: [`--skew`], handleBareValue: ({ value: e4 }) => M(e4) ? `${e4}deg` : null, handle: (t3) => [a3(), U(`--tw-skew-x`, `skewX(${t3})`), U(`--tw-skew-y`, `skewY(${t3})`), U(`transform`, e3)] }), i2(`skew-x`, { supportsNegative: true, themeKeys: [`--skew`], handleBareValue: ({ value: e4 }) => M(e4) ? `${e4}deg` : null, handle: (t3) => [a3(), U(`--tw-skew-x`, `skewX(${t3})`), U(`transform`, e3)] }), i2(`skew-y`, { supportsNegative: true, themeKeys: [`--skew`], handleBareValue: ({ value: e4 }) => M(e4) ? `${e4}deg` : null, handle: (t3) => [a3(), U(`--tw-skew-y`, `skewY(${t3})`), U(`transform`, e3)] }), n2(`skew`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `3`, `6`, `12`], valueThemeKeys: [`--skew`] }]), n2(`skew-x`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `3`, `6`, `12`], valueThemeKeys: [`--skew`] }]), n2(`skew-y`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `3`, `6`, `12`], valueThemeKeys: [`--skew`] }]), t2.functional(`transform`, (t3) => {
      if (t3.modifier) return;
      let n3 = null;
      if (t3.value ? t3.value.kind === `arbitrary` && (n3 = t3.value.value) : n3 = e3, n3 !== null) return [a3(), U(`transform`, n3)];
    }), n2(`transform`, () => [{ hasDefaultValue: true }]), r2(`transform-cpu`, [[`transform`, e3]]), r2(`transform-gpu`, [[`transform`, `translateZ(0) ${e3}`]]), r2(`transform-none`, [[`transform`, `none`]]);
  }
  r2(`transform-flat`, [[`transform-style`, `flat`]]), r2(`transform-3d`, [[`transform-style`, `preserve-3d`]]), r2(`transform-content`, [[`transform-box`, `content-box`]]), r2(`transform-border`, [[`transform-box`, `border-box`]]), r2(`transform-fill`, [[`transform-box`, `fill-box`]]), r2(`transform-stroke`, [[`transform-box`, `stroke-box`]]), r2(`transform-view`, [[`transform-box`, `view-box`]]), r2(`backface-visible`, [[`backface-visibility`, `visible`]]), r2(`backface-hidden`, [[`backface-visibility`, `hidden`]]);
  for (let e3 of `auto.default.pointer.wait.text.move.help.not-allowed.none.context-menu.progress.cell.crosshair.vertical-text.alias.copy.no-drop.grab.grabbing.all-scroll.col-resize.row-resize.n-resize.e-resize.s-resize.w-resize.ne-resize.nw-resize.se-resize.sw-resize.ew-resize.ns-resize.nesw-resize.nwse-resize.zoom-in.zoom-out`.split(`.`)) r2(`cursor-${e3}`, [[`cursor`, e3]]);
  i2(`cursor`, { themeKeys: [`--cursor`], handle: (e3) => [U(`cursor`, e3)] });
  for (let e3 of [`auto`, `none`, `manipulation`]) r2(`touch-${e3}`, [[`touch-action`, e3]]);
  let f2 = () => W([K(`--tw-pan-x`), K(`--tw-pan-y`), K(`--tw-pinch-zoom`)]);
  for (let e3 of [`x`, `left`, `right`]) r2(`touch-pan-${e3}`, [f2, [`--tw-pan-x`, `pan-${e3}`], [`touch-action`, `var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)`]]);
  for (let e3 of [`y`, `up`, `down`]) r2(`touch-pan-${e3}`, [f2, [`--tw-pan-y`, `pan-${e3}`], [`touch-action`, `var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)`]]);
  r2(`touch-pinch-zoom`, [f2, [`--tw-pinch-zoom`, `pinch-zoom`], [`touch-action`, `var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)`]]);
  for (let e3 of [`none`, `text`, `all`, `auto`]) r2(`select-${e3}`, [[`-webkit-user-select`, e3], [`user-select`, e3]]);
  r2(`resize-none`, [[`resize`, `none`]]), r2(`resize-x`, [[`resize`, `horizontal`]]), r2(`resize-y`, [[`resize`, `vertical`]]), r2(`resize`, [[`resize`, `both`]]), r2(`snap-none`, [[`scroll-snap-type`, `none`]]);
  let p2 = () => W([K(`--tw-scroll-snap-strictness`, `proximity`, `*`)]);
  for (let e3 of [`x`, `y`, `both`]) r2(`snap-${e3}`, [p2, [`scroll-snap-type`, `${e3} var(--tw-scroll-snap-strictness)`]]);
  r2(`snap-mandatory`, [p2, [`--tw-scroll-snap-strictness`, `mandatory`]]), r2(`snap-proximity`, [p2, [`--tw-scroll-snap-strictness`, `proximity`]]), r2(`snap-align-none`, [[`scroll-snap-align`, `none`]]), r2(`snap-start`, [[`scroll-snap-align`, `start`]]), r2(`snap-end`, [[`scroll-snap-align`, `end`]]), r2(`snap-center`, [[`scroll-snap-align`, `center`]]), r2(`snap-normal`, [[`scroll-snap-stop`, `normal`]]), r2(`snap-always`, [[`scroll-snap-stop`, `always`]]);
  for (let [e3, t3] of [[`scroll-m`, `scroll-margin`], [`scroll-mx`, `scroll-margin-inline`], [`scroll-my`, `scroll-margin-block`], [`scroll-ms`, `scroll-margin-inline-start`], [`scroll-me`, `scroll-margin-inline-end`], [`scroll-mt`, `scroll-margin-top`], [`scroll-mr`, `scroll-margin-right`], [`scroll-mb`, `scroll-margin-bottom`], [`scroll-ml`, `scroll-margin-left`]]) o2(e3, [`--scroll-margin`, `--spacing`], (e4) => [U(t3, e4)], { supportsNegative: true });
  for (let [e3, t3] of [[`scroll-p`, `scroll-padding`], [`scroll-px`, `scroll-padding-inline`], [`scroll-py`, `scroll-padding-block`], [`scroll-ps`, `scroll-padding-inline-start`], [`scroll-pe`, `scroll-padding-inline-end`], [`scroll-pt`, `scroll-padding-top`], [`scroll-pr`, `scroll-padding-right`], [`scroll-pb`, `scroll-padding-bottom`], [`scroll-pl`, `scroll-padding-left`]]) o2(e3, [`--scroll-padding`, `--spacing`], (e4) => [U(t3, e4)]);
  r2(`list-inside`, [[`list-style-position`, `inside`]]), r2(`list-outside`, [[`list-style-position`, `outside`]]), r2(`list-none`, [[`list-style-type`, `none`]]), r2(`list-disc`, [[`list-style-type`, `disc`]]), r2(`list-decimal`, [[`list-style-type`, `decimal`]]), i2(`list`, { themeKeys: [`--list-style-type`], handle: (e3) => [U(`list-style-type`, e3)] }), r2(`list-image-none`, [[`list-style-image`, `none`]]), i2(`list-image`, { themeKeys: [`--list-style-image`], handle: (e3) => [U(`list-style-image`, e3)] }), r2(`appearance-none`, [[`appearance`, `none`]]), r2(`appearance-auto`, [[`appearance`, `auto`]]), r2(`scheme-normal`, [[`color-scheme`, `normal`]]), r2(`scheme-dark`, [[`color-scheme`, `dark`]]), r2(`scheme-light`, [[`color-scheme`, `light`]]), r2(`scheme-light-dark`, [[`color-scheme`, `light dark`]]), r2(`scheme-only-dark`, [[`color-scheme`, `only dark`]]), r2(`scheme-only-light`, [[`color-scheme`, `only light`]]), r2(`columns-auto`, [[`columns`, `auto`]]), i2(`columns`, { themeKeys: [`--columns`, `--container`], handleBareValue: ({ value: e3 }) => M(e3) ? e3 : null, handle: (e3) => [U(`columns`, e3)] }), n2(`columns`, () => [{ values: Array.from({ length: 12 }, (e3, t3) => `${t3 + 1}`), valueThemeKeys: [`--columns`, `--container`] }]);
  for (let e3 of [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`]) r2(`break-before-${e3}`, [[`break-before`, e3]]);
  for (let e3 of [`auto`, `avoid`, `avoid-page`, `avoid-column`]) r2(`break-inside-${e3}`, [[`break-inside`, e3]]);
  for (let e3 of [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`]) r2(`break-after-${e3}`, [[`break-after`, e3]]);
  r2(`grid-flow-row`, [[`grid-auto-flow`, `row`]]), r2(`grid-flow-col`, [[`grid-auto-flow`, `column`]]), r2(`grid-flow-dense`, [[`grid-auto-flow`, `dense`]]), r2(`grid-flow-row-dense`, [[`grid-auto-flow`, `row dense`]]), r2(`grid-flow-col-dense`, [[`grid-auto-flow`, `column dense`]]), r2(`auto-cols-auto`, [[`grid-auto-columns`, `auto`]]), r2(`auto-cols-min`, [[`grid-auto-columns`, `min-content`]]), r2(`auto-cols-max`, [[`grid-auto-columns`, `max-content`]]), r2(`auto-cols-fr`, [[`grid-auto-columns`, `minmax(0, 1fr)`]]), i2(`auto-cols`, { themeKeys: [`--grid-auto-columns`], handle: (e3) => [U(`grid-auto-columns`, e3)] }), r2(`auto-rows-auto`, [[`grid-auto-rows`, `auto`]]), r2(`auto-rows-min`, [[`grid-auto-rows`, `min-content`]]), r2(`auto-rows-max`, [[`grid-auto-rows`, `max-content`]]), r2(`auto-rows-fr`, [[`grid-auto-rows`, `minmax(0, 1fr)`]]), i2(`auto-rows`, { themeKeys: [`--grid-auto-rows`], handle: (e3) => [U(`grid-auto-rows`, e3)] }), r2(`grid-cols-none`, [[`grid-template-columns`, `none`]]), r2(`grid-cols-subgrid`, [[`grid-template-columns`, `subgrid`]]), i2(`grid-cols`, { themeKeys: [`--grid-template-columns`], handleBareValue: ({ value: e3 }) => ge(e3) ? `repeat(${e3}, minmax(0, 1fr))` : null, handle: (e3) => [U(`grid-template-columns`, e3)] }), r2(`grid-rows-none`, [[`grid-template-rows`, `none`]]), r2(`grid-rows-subgrid`, [[`grid-template-rows`, `subgrid`]]), i2(`grid-rows`, { themeKeys: [`--grid-template-rows`], handleBareValue: ({ value: e3 }) => ge(e3) ? `repeat(${e3}, minmax(0, 1fr))` : null, handle: (e3) => [U(`grid-template-rows`, e3)] }), n2(`grid-cols`, () => [{ values: Array.from({ length: 12 }, (e3, t3) => `${t3 + 1}`), valueThemeKeys: [`--grid-template-columns`] }]), n2(`grid-rows`, () => [{ values: Array.from({ length: 12 }, (e3, t3) => `${t3 + 1}`), valueThemeKeys: [`--grid-template-rows`] }]), r2(`flex-row`, [[`flex-direction`, `row`]]), r2(`flex-row-reverse`, [[`flex-direction`, `row-reverse`]]), r2(`flex-col`, [[`flex-direction`, `column`]]), r2(`flex-col-reverse`, [[`flex-direction`, `column-reverse`]]), r2(`flex-wrap`, [[`flex-wrap`, `wrap`]]), r2(`flex-nowrap`, [[`flex-wrap`, `nowrap`]]), r2(`flex-wrap-reverse`, [[`flex-wrap`, `wrap-reverse`]]), r2(`place-content-center`, [[`place-content`, `center`]]), r2(`place-content-start`, [[`place-content`, `start`]]), r2(`place-content-end`, [[`place-content`, `end`]]), r2(`place-content-center-safe`, [[`place-content`, `safe center`]]), r2(`place-content-end-safe`, [[`place-content`, `safe end`]]), r2(`place-content-between`, [[`place-content`, `space-between`]]), r2(`place-content-around`, [[`place-content`, `space-around`]]), r2(`place-content-evenly`, [[`place-content`, `space-evenly`]]), r2(`place-content-baseline`, [[`place-content`, `baseline`]]), r2(`place-content-stretch`, [[`place-content`, `stretch`]]), r2(`place-items-center`, [[`place-items`, `center`]]), r2(`place-items-start`, [[`place-items`, `start`]]), r2(`place-items-end`, [[`place-items`, `end`]]), r2(`place-items-center-safe`, [[`place-items`, `safe center`]]), r2(`place-items-end-safe`, [[`place-items`, `safe end`]]), r2(`place-items-baseline`, [[`place-items`, `baseline`]]), r2(`place-items-stretch`, [[`place-items`, `stretch`]]), r2(`content-normal`, [[`align-content`, `normal`]]), r2(`content-center`, [[`align-content`, `center`]]), r2(`content-start`, [[`align-content`, `flex-start`]]), r2(`content-end`, [[`align-content`, `flex-end`]]), r2(`content-center-safe`, [[`align-content`, `safe center`]]), r2(`content-end-safe`, [[`align-content`, `safe flex-end`]]), r2(`content-between`, [[`align-content`, `space-between`]]), r2(`content-around`, [[`align-content`, `space-around`]]), r2(`content-evenly`, [[`align-content`, `space-evenly`]]), r2(`content-baseline`, [[`align-content`, `baseline`]]), r2(`content-stretch`, [[`align-content`, `stretch`]]), r2(`items-center`, [[`align-items`, `center`]]), r2(`items-start`, [[`align-items`, `flex-start`]]), r2(`items-end`, [[`align-items`, `flex-end`]]), r2(`items-center-safe`, [[`align-items`, `safe center`]]), r2(`items-end-safe`, [[`align-items`, `safe flex-end`]]), r2(`items-baseline`, [[`align-items`, `baseline`]]), r2(`items-baseline-last`, [[`align-items`, `last baseline`]]), r2(`items-stretch`, [[`align-items`, `stretch`]]), r2(`justify-normal`, [[`justify-content`, `normal`]]), r2(`justify-center`, [[`justify-content`, `center`]]), r2(`justify-start`, [[`justify-content`, `flex-start`]]), r2(`justify-end`, [[`justify-content`, `flex-end`]]), r2(`justify-center-safe`, [[`justify-content`, `safe center`]]), r2(`justify-end-safe`, [[`justify-content`, `safe flex-end`]]), r2(`justify-between`, [[`justify-content`, `space-between`]]), r2(`justify-around`, [[`justify-content`, `space-around`]]), r2(`justify-evenly`, [[`justify-content`, `space-evenly`]]), r2(`justify-baseline`, [[`justify-content`, `baseline`]]), r2(`justify-stretch`, [[`justify-content`, `stretch`]]), r2(`justify-items-normal`, [[`justify-items`, `normal`]]), r2(`justify-items-center`, [[`justify-items`, `center`]]), r2(`justify-items-start`, [[`justify-items`, `start`]]), r2(`justify-items-end`, [[`justify-items`, `end`]]), r2(`justify-items-center-safe`, [[`justify-items`, `safe center`]]), r2(`justify-items-end-safe`, [[`justify-items`, `safe end`]]), r2(`justify-items-stretch`, [[`justify-items`, `stretch`]]), o2(`gap`, [`--gap`, `--spacing`], (e3) => [U(`gap`, e3)]), o2(`gap-x`, [`--gap`, `--spacing`], (e3) => [U(`column-gap`, e3)]), o2(`gap-y`, [`--gap`, `--spacing`], (e3) => [U(`row-gap`, e3)]), o2(`space-x`, [`--space`, `--spacing`], (e3) => [W([K(`--tw-space-x-reverse`, `0`)]), B(`:where(& > :not(:last-child))`, [U(`--tw-sort`, `row-gap`), U(`--tw-space-x-reverse`, `0`), U(`margin-inline-start`, `calc(${e3} * var(--tw-space-x-reverse))`), U(`margin-inline-end`, `calc(${e3} * calc(1 - var(--tw-space-x-reverse)))`)])], { supportsNegative: true }), o2(`space-y`, [`--space`, `--spacing`], (e3) => [W([K(`--tw-space-y-reverse`, `0`)]), B(`:where(& > :not(:last-child))`, [U(`--tw-sort`, `column-gap`), U(`--tw-space-y-reverse`, `0`), U(`margin-block-start`, `calc(${e3} * var(--tw-space-y-reverse))`), U(`margin-block-end`, `calc(${e3} * calc(1 - var(--tw-space-y-reverse)))`)])], { supportsNegative: true }), r2(`space-x-reverse`, [() => W([K(`--tw-space-x-reverse`, `0`)]), () => B(`:where(& > :not(:last-child))`, [U(`--tw-sort`, `row-gap`), U(`--tw-space-x-reverse`, `1`)])]), r2(`space-y-reverse`, [() => W([K(`--tw-space-y-reverse`, `0`)]), () => B(`:where(& > :not(:last-child))`, [U(`--tw-sort`, `column-gap`), U(`--tw-space-y-reverse`, `1`)])]), r2(`accent-auto`, [[`accent-color`, `auto`]]), a2(`accent`, { themeKeys: [`--accent-color`, `--color`], handle: (e3) => [U(`accent-color`, e3)] }), a2(`caret`, { themeKeys: [`--caret-color`, `--color`], handle: (e3) => [U(`caret-color`, e3)] }), a2(`divide`, { themeKeys: [`--divide-color`, `--color`], handle: (e3) => [B(`:where(& > :not(:last-child))`, [U(`--tw-sort`, `divide-color`), U(`border-color`, e3)])] }), r2(`place-self-auto`, [[`place-self`, `auto`]]), r2(`place-self-start`, [[`place-self`, `start`]]), r2(`place-self-end`, [[`place-self`, `end`]]), r2(`place-self-center`, [[`place-self`, `center`]]), r2(`place-self-end-safe`, [[`place-self`, `safe end`]]), r2(`place-self-center-safe`, [[`place-self`, `safe center`]]), r2(`place-self-stretch`, [[`place-self`, `stretch`]]), r2(`self-auto`, [[`align-self`, `auto`]]), r2(`self-start`, [[`align-self`, `flex-start`]]), r2(`self-end`, [[`align-self`, `flex-end`]]), r2(`self-center`, [[`align-self`, `center`]]), r2(`self-end-safe`, [[`align-self`, `safe flex-end`]]), r2(`self-center-safe`, [[`align-self`, `safe center`]]), r2(`self-stretch`, [[`align-self`, `stretch`]]), r2(`self-baseline`, [[`align-self`, `baseline`]]), r2(`self-baseline-last`, [[`align-self`, `last baseline`]]), r2(`justify-self-auto`, [[`justify-self`, `auto`]]), r2(`justify-self-start`, [[`justify-self`, `flex-start`]]), r2(`justify-self-end`, [[`justify-self`, `flex-end`]]), r2(`justify-self-center`, [[`justify-self`, `center`]]), r2(`justify-self-end-safe`, [[`justify-self`, `safe flex-end`]]), r2(`justify-self-center-safe`, [[`justify-self`, `safe center`]]), r2(`justify-self-stretch`, [[`justify-self`, `stretch`]]);
  for (let e3 of [`auto`, `hidden`, `clip`, `visible`, `scroll`]) r2(`overflow-${e3}`, [[`overflow`, e3]]), r2(`overflow-x-${e3}`, [[`overflow-x`, e3]]), r2(`overflow-y-${e3}`, [[`overflow-y`, e3]]);
  for (let e3 of [`auto`, `contain`, `none`]) r2(`overscroll-${e3}`, [[`overscroll-behavior`, e3]]), r2(`overscroll-x-${e3}`, [[`overscroll-behavior-x`, e3]]), r2(`overscroll-y-${e3}`, [[`overscroll-behavior-y`, e3]]);
  r2(`scroll-auto`, [[`scroll-behavior`, `auto`]]), r2(`scroll-smooth`, [[`scroll-behavior`, `smooth`]]), r2(`truncate`, [[`overflow`, `hidden`], [`text-overflow`, `ellipsis`], [`white-space`, `nowrap`]]), r2(`text-ellipsis`, [[`text-overflow`, `ellipsis`]]), r2(`text-clip`, [[`text-overflow`, `clip`]]), r2(`hyphens-none`, [[`-webkit-hyphens`, `none`], [`hyphens`, `none`]]), r2(`hyphens-manual`, [[`-webkit-hyphens`, `manual`], [`hyphens`, `manual`]]), r2(`hyphens-auto`, [[`-webkit-hyphens`, `auto`], [`hyphens`, `auto`]]), r2(`whitespace-normal`, [[`white-space`, `normal`]]), r2(`whitespace-nowrap`, [[`white-space`, `nowrap`]]), r2(`whitespace-pre`, [[`white-space`, `pre`]]), r2(`whitespace-pre-line`, [[`white-space`, `pre-line`]]), r2(`whitespace-pre-wrap`, [[`white-space`, `pre-wrap`]]), r2(`whitespace-break-spaces`, [[`white-space`, `break-spaces`]]), r2(`text-wrap`, [[`text-wrap`, `wrap`]]), r2(`text-nowrap`, [[`text-wrap`, `nowrap`]]), r2(`text-balance`, [[`text-wrap`, `balance`]]), r2(`text-pretty`, [[`text-wrap`, `pretty`]]), r2(`break-normal`, [[`overflow-wrap`, `normal`], [`word-break`, `normal`]]), r2(`break-words`, [[`overflow-wrap`, `break-word`]]), r2(`break-all`, [[`word-break`, `break-all`]]), r2(`break-keep`, [[`word-break`, `keep-all`]]), r2(`wrap-anywhere`, [[`overflow-wrap`, `anywhere`]]), r2(`wrap-break-word`, [[`overflow-wrap`, `break-word`]]), r2(`wrap-normal`, [[`overflow-wrap`, `normal`]]);
  for (let [e3, t3] of [[`rounded`, [`border-radius`]], [`rounded-s`, [`border-start-start-radius`, `border-end-start-radius`]], [`rounded-e`, [`border-start-end-radius`, `border-end-end-radius`]], [`rounded-t`, [`border-top-left-radius`, `border-top-right-radius`]], [`rounded-r`, [`border-top-right-radius`, `border-bottom-right-radius`]], [`rounded-b`, [`border-bottom-right-radius`, `border-bottom-left-radius`]], [`rounded-l`, [`border-top-left-radius`, `border-bottom-left-radius`]], [`rounded-ss`, [`border-start-start-radius`]], [`rounded-se`, [`border-start-end-radius`]], [`rounded-ee`, [`border-end-end-radius`]], [`rounded-es`, [`border-end-start-radius`]], [`rounded-tl`, [`border-top-left-radius`]], [`rounded-tr`, [`border-top-right-radius`]], [`rounded-br`, [`border-bottom-right-radius`]], [`rounded-bl`, [`border-bottom-left-radius`]]]) r2(`${e3}-none`, t3.map((e4) => [e4, `0`])), r2(`${e3}-full`, t3.map((e4) => [e4, `calc(infinity * 1px)`])), i2(e3, { themeKeys: [`--radius`], handle: (e4) => t3.map((t4) => U(t4, e4)) });
  r2(`border-solid`, [[`--tw-border-style`, `solid`], [`border-style`, `solid`]]), r2(`border-dashed`, [[`--tw-border-style`, `dashed`], [`border-style`, `dashed`]]), r2(`border-dotted`, [[`--tw-border-style`, `dotted`], [`border-style`, `dotted`]]), r2(`border-double`, [[`--tw-border-style`, `double`], [`border-style`, `double`]]), r2(`border-hidden`, [[`--tw-border-style`, `hidden`], [`border-style`, `hidden`]]), r2(`border-none`, [[`--tw-border-style`, `none`], [`border-style`, `none`]]);
  {
    let a3 = function(r3, i3) {
      t2.functional(r3, (t3) => {
        if (!t3.value) {
          if (t3.modifier) return;
          let n3 = e2.get([`--default-border-width`]) ?? `1px`, r4 = i3.width(n3);
          return r4 ? [o3(), ...r4] : void 0;
        }
        if (t3.value.kind === `arbitrary`) {
          let n3 = t3.value.value;
          switch (t3.value.dataType ?? b(n3, [`color`, `line-width`, `length`])) {
            case `line-width`:
            case `length`: {
              if (t3.modifier) return;
              let e3 = i3.width(n3);
              return e3 ? [o3(), ...e3] : void 0;
            }
            default:
              return n3 = J(n3, t3.modifier, e2), n3 === null ? void 0 : i3.color(n3);
          }
        }
        {
          let n3 = Y(t3, e2, [`--border-color`, `--color`]);
          if (n3) return i3.color(n3);
        }
        {
          if (t3.modifier) return;
          let n3 = e2.resolve(t3.value.value, [`--border-width`]);
          if (n3) {
            let e3 = i3.width(n3);
            return e3 ? [o3(), ...e3] : void 0;
          }
          if (M(t3.value.value)) {
            let e3 = i3.width(`${t3.value.value}px`);
            return e3 ? [o3(), ...e3] : void 0;
          }
        }
      }), n2(r3, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--border-color`, `--color`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`), hasDefaultValue: true }, { values: [`0`, `2`, `4`, `8`], valueThemeKeys: [`--border-width`] }]);
    };
    var m2 = a3;
    let o3 = () => W([K(`--tw-border-style`, `solid`)]);
    a3(`border`, { width: (e3) => [U(`border-style`, `var(--tw-border-style)`), U(`border-width`, e3)], color: (e3) => [U(`border-color`, e3)] }), a3(`border-x`, { width: (e3) => [U(`border-inline-style`, `var(--tw-border-style)`), U(`border-inline-width`, e3)], color: (e3) => [U(`border-inline-color`, e3)] }), a3(`border-y`, { width: (e3) => [U(`border-block-style`, `var(--tw-border-style)`), U(`border-block-width`, e3)], color: (e3) => [U(`border-block-color`, e3)] }), a3(`border-s`, { width: (e3) => [U(`border-inline-start-style`, `var(--tw-border-style)`), U(`border-inline-start-width`, e3)], color: (e3) => [U(`border-inline-start-color`, e3)] }), a3(`border-e`, { width: (e3) => [U(`border-inline-end-style`, `var(--tw-border-style)`), U(`border-inline-end-width`, e3)], color: (e3) => [U(`border-inline-end-color`, e3)] }), a3(`border-t`, { width: (e3) => [U(`border-top-style`, `var(--tw-border-style)`), U(`border-top-width`, e3)], color: (e3) => [U(`border-top-color`, e3)] }), a3(`border-r`, { width: (e3) => [U(`border-right-style`, `var(--tw-border-style)`), U(`border-right-width`, e3)], color: (e3) => [U(`border-right-color`, e3)] }), a3(`border-b`, { width: (e3) => [U(`border-bottom-style`, `var(--tw-border-style)`), U(`border-bottom-width`, e3)], color: (e3) => [U(`border-bottom-color`, e3)] }), a3(`border-l`, { width: (e3) => [U(`border-left-style`, `var(--tw-border-style)`), U(`border-left-width`, e3)], color: (e3) => [U(`border-left-color`, e3)] }), i2(`divide-x`, { defaultValue: e2.get([`--default-border-width`]) ?? `1px`, themeKeys: [`--divide-width`, `--border-width`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}px` : null, handle: (e3) => [W([K(`--tw-divide-x-reverse`, `0`)]), B(`:where(& > :not(:last-child))`, [U(`--tw-sort`, `divide-x-width`), o3(), U(`--tw-divide-x-reverse`, `0`), U(`border-inline-style`, `var(--tw-border-style)`), U(`border-inline-start-width`, `calc(${e3} * var(--tw-divide-x-reverse))`), U(`border-inline-end-width`, `calc(${e3} * calc(1 - var(--tw-divide-x-reverse)))`)])] }), i2(`divide-y`, { defaultValue: e2.get([`--default-border-width`]) ?? `1px`, themeKeys: [`--divide-width`, `--border-width`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}px` : null, handle: (e3) => [W([K(`--tw-divide-y-reverse`, `0`)]), B(`:where(& > :not(:last-child))`, [U(`--tw-sort`, `divide-y-width`), o3(), U(`--tw-divide-y-reverse`, `0`), U(`border-bottom-style`, `var(--tw-border-style)`), U(`border-top-style`, `var(--tw-border-style)`), U(`border-top-width`, `calc(${e3} * var(--tw-divide-y-reverse))`), U(`border-bottom-width`, `calc(${e3} * calc(1 - var(--tw-divide-y-reverse)))`)])] }), n2(`divide-x`, () => [{ values: [`0`, `2`, `4`, `8`], valueThemeKeys: [`--divide-width`, `--border-width`], hasDefaultValue: true }]), n2(`divide-y`, () => [{ values: [`0`, `2`, `4`, `8`], valueThemeKeys: [`--divide-width`, `--border-width`], hasDefaultValue: true }]), r2(`divide-x-reverse`, [() => W([K(`--tw-divide-x-reverse`, `0`)]), () => B(`:where(& > :not(:last-child))`, [U(`--tw-divide-x-reverse`, `1`)])]), r2(`divide-y-reverse`, [() => W([K(`--tw-divide-y-reverse`, `0`)]), () => B(`:where(& > :not(:last-child))`, [U(`--tw-divide-y-reverse`, `1`)])]);
    for (let e3 of [`solid`, `dashed`, `dotted`, `double`, `none`]) r2(`divide-${e3}`, [() => B(`:where(& > :not(:last-child))`, [U(`--tw-sort`, `divide-style`), U(`--tw-border-style`, e3), U(`border-style`, e3)])]);
  }
  r2(`bg-auto`, [[`background-size`, `auto`]]), r2(`bg-cover`, [[`background-size`, `cover`]]), r2(`bg-contain`, [[`background-size`, `contain`]]), i2(`bg-size`, { handle(e3) {
    if (e3) return [U(`background-size`, e3)];
  } }), r2(`bg-fixed`, [[`background-attachment`, `fixed`]]), r2(`bg-local`, [[`background-attachment`, `local`]]), r2(`bg-scroll`, [[`background-attachment`, `scroll`]]), r2(`bg-top`, [[`background-position`, `top`]]), r2(`bg-top-left`, [[`background-position`, `left top`]]), r2(`bg-top-right`, [[`background-position`, `right top`]]), r2(`bg-bottom`, [[`background-position`, `bottom`]]), r2(`bg-bottom-left`, [[`background-position`, `left bottom`]]), r2(`bg-bottom-right`, [[`background-position`, `right bottom`]]), r2(`bg-left`, [[`background-position`, `left`]]), r2(`bg-right`, [[`background-position`, `right`]]), r2(`bg-center`, [[`background-position`, `center`]]), i2(`bg-position`, { handle(e3) {
    if (e3) return [U(`background-position`, e3)];
  } }), r2(`bg-repeat`, [[`background-repeat`, `repeat`]]), r2(`bg-no-repeat`, [[`background-repeat`, `no-repeat`]]), r2(`bg-repeat-x`, [[`background-repeat`, `repeat-x`]]), r2(`bg-repeat-y`, [[`background-repeat`, `repeat-y`]]), r2(`bg-repeat-round`, [[`background-repeat`, `round`]]), r2(`bg-repeat-space`, [[`background-repeat`, `space`]]), r2(`bg-none`, [[`background-image`, `none`]]);
  {
    let e3 = function(e4) {
      let t3 = `in oklab`;
      if ((e4 == null ? void 0 : e4.kind) === `named`) switch (e4.value) {
        case `longer`:
        case `shorter`:
        case `increasing`:
        case `decreasing`:
          t3 = `in oklch ${e4.value} hue`;
          break;
        default:
          t3 = `in ${e4.value}`;
      }
      else (e4 == null ? void 0 : e4.kind) === `arbitrary` && (t3 = e4.value);
      return t3;
    }, r3 = function({ negative: t3 }) {
      return (n3) => {
        if (!n3.value) return;
        if (n3.value.kind === `arbitrary`) {
          if (n3.modifier) return;
          let e4 = n3.value.value;
          switch (n3.value.dataType ?? b(e4, [`angle`])) {
            case `angle`:
              return e4 = t3 ? `calc(${e4} * -1)` : `${e4}`, [U(`--tw-gradient-position`, e4), U(`background-image`, `linear-gradient(var(--tw-gradient-stops,${e4}))`)];
            default:
              return t3 ? void 0 : [U(`--tw-gradient-position`, e4), U(`background-image`, `linear-gradient(var(--tw-gradient-stops,${e4}))`)];
          }
        }
        let r4 = n3.value.value;
        if (!t3 && o3.has(r4)) r4 = o3.get(r4);
        else if (M(r4)) r4 = t3 ? `calc(${r4}deg * -1)` : `${r4}deg`;
        else return;
        let i4 = e3(n3.modifier);
        return [U(`--tw-gradient-position`, `${r4}`), H(`@supports (background-image: linear-gradient(in lab, red, red))`, [U(`--tw-gradient-position`, `${r4} ${i4}`)]), U(`background-image`, `linear-gradient(var(--tw-gradient-stops))`)];
      };
    }, i3 = function({ negative: t3 }) {
      return (n3) => {
        var _a2;
        if (((_a2 = n3.value) == null ? void 0 : _a2.kind) === `arbitrary`) {
          if (n3.modifier) return;
          let e4 = n3.value.value;
          return [U(`--tw-gradient-position`, e4), U(`background-image`, `conic-gradient(var(--tw-gradient-stops,${e4}))`)];
        }
        let r4 = e3(n3.modifier);
        if (!n3.value) return [U(`--tw-gradient-position`, r4), U(`background-image`, `conic-gradient(var(--tw-gradient-stops))`)];
        let i4 = n3.value.value;
        if (M(i4)) return i4 = t3 ? `calc(${i4}deg * -1)` : `${i4}deg`, [U(`--tw-gradient-position`, `from ${i4} ${r4}`), U(`background-image`, `conic-gradient(var(--tw-gradient-stops))`)];
      };
    };
    var h2 = e3, g2 = r3, _2 = i3;
    let a3 = [`oklab`, `oklch`, `srgb`, `hsl`, `longer`, `shorter`, `increasing`, `decreasing`], o3 = /* @__PURE__ */ new Map([[`to-t`, `to top`], [`to-tr`, `to top right`], [`to-r`, `to right`], [`to-br`, `to bottom right`], [`to-b`, `to bottom`], [`to-bl`, `to bottom left`], [`to-l`, `to left`], [`to-tl`, `to top left`]]);
    t2.functional(`-bg-linear`, r3({ negative: true })), t2.functional(`bg-linear`, r3({ negative: false })), n2(`bg-linear`, () => [{ values: [...o3.keys()], modifiers: a3 }, { values: [`0`, `30`, `60`, `90`, `120`, `150`, `180`, `210`, `240`, `270`, `300`, `330`], supportsNegative: true, modifiers: a3 }]), t2.functional(`-bg-conic`, i3({ negative: true })), t2.functional(`bg-conic`, i3({ negative: false })), n2(`bg-conic`, () => [{ hasDefaultValue: true, modifiers: a3 }, { values: [`0`, `30`, `60`, `90`, `120`, `150`, `180`, `210`, `240`, `270`, `300`, `330`], supportsNegative: true, modifiers: a3 }]), t2.functional(`bg-radial`, (t3) => {
      if (!t3.value) {
        let n3 = e3(t3.modifier);
        return [U(`--tw-gradient-position`, n3), U(`background-image`, `radial-gradient(var(--tw-gradient-stops))`)];
      }
      if (t3.value.kind === `arbitrary`) {
        if (t3.modifier) return;
        let e4 = t3.value.value;
        return [U(`--tw-gradient-position`, e4), U(`background-image`, `radial-gradient(var(--tw-gradient-stops,${e4}))`)];
      }
    }), n2(`bg-radial`, () => [{ hasDefaultValue: true, modifiers: a3 }]);
  }
  t2.functional(`bg`, (t3) => {
    if (t3.value) {
      if (t3.value.kind === `arbitrary`) {
        let n3 = t3.value.value;
        switch (t3.value.dataType ?? b(n3, [`image`, `color`, `percentage`, `position`, `bg-size`, `length`, `url`])) {
          case `percentage`:
          case `position`:
            return t3.modifier ? void 0 : [U(`background-position`, n3)];
          case `bg-size`:
          case `length`:
          case `size`:
            return t3.modifier ? void 0 : [U(`background-size`, n3)];
          case `image`:
          case `url`:
            return t3.modifier ? void 0 : [U(`background-image`, n3)];
          default:
            return n3 = J(n3, t3.modifier, e2), n3 === null ? void 0 : [U(`background-color`, n3)];
        }
      }
      {
        let n3 = Y(t3, e2, [`--background-color`, `--color`]);
        if (n3) return [U(`background-color`, n3)];
      }
      {
        if (t3.modifier) return;
        let n3 = e2.resolve(t3.value.value, [`--background-image`]);
        if (n3) return [U(`background-image`, n3)];
      }
    }
  }), n2(`bg`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--background-color`, `--color`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`) }, { values: [], valueThemeKeys: [`--background-image`] }]);
  let y2 = () => W([K(`--tw-gradient-position`), K(`--tw-gradient-from`, `#0000`, `<color>`), K(`--tw-gradient-via`, `#0000`, `<color>`), K(`--tw-gradient-to`, `#0000`, `<color>`), K(`--tw-gradient-stops`), K(`--tw-gradient-via-stops`), K(`--tw-gradient-from-position`, `0%`, `<length-percentage>`), K(`--tw-gradient-via-position`, `50%`, `<length-percentage>`), K(`--tw-gradient-to-position`, `100%`, `<length-percentage>`)]);
  function x2(r3, i3) {
    t2.functional(r3, (t3) => {
      if (t3.value) {
        if (t3.value.kind === `arbitrary`) {
          let n3 = t3.value.value;
          switch (t3.value.dataType ?? b(n3, [`color`, `length`, `percentage`])) {
            case `length`:
            case `percentage`:
              return t3.modifier ? void 0 : i3.position(n3);
            default:
              return n3 = J(n3, t3.modifier, e2), n3 === null ? void 0 : i3.color(n3);
          }
        }
        {
          let n3 = Y(t3, e2, [`--background-color`, `--color`]);
          if (n3) return i3.color(n3);
        }
        {
          if (t3.modifier) return;
          let n3 = e2.resolve(t3.value.value, [`--gradient-color-stop-positions`]);
          if (n3) return i3.position(n3);
          if (t3.value.value[t3.value.value.length - 1] === `%` && M(t3.value.value.slice(0, -1))) return i3.position(t3.value.value);
        }
      }
    }), n2(r3, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--background-color`, `--color`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`) }, { values: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}%`), valueThemeKeys: [`--gradient-color-stop-positions`] }]);
  }
  x2(`from`, { color: (e3) => [y2(), U(`--tw-sort`, `--tw-gradient-from`), U(`--tw-gradient-from`, e3), U(`--tw-gradient-stops`, `var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))`)], position: (e3) => [y2(), U(`--tw-gradient-from-position`, e3)] }), r2(`via-none`, [[`--tw-gradient-via-stops`, `initial`]]), x2(`via`, { color: (e3) => [y2(), U(`--tw-sort`, `--tw-gradient-via`), U(`--tw-gradient-via`, e3), U(`--tw-gradient-via-stops`, `var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)`), U(`--tw-gradient-stops`, `var(--tw-gradient-via-stops)`)], position: (e3) => [y2(), U(`--tw-gradient-via-position`, e3)] }), x2(`to`, { color: (e3) => [y2(), U(`--tw-sort`, `--tw-gradient-to`), U(`--tw-gradient-to`, e3), U(`--tw-gradient-stops`, `var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))`)], position: (e3) => [y2(), U(`--tw-gradient-to-position`, e3)] }), r2(`mask-none`, [[`mask-image`, `none`]]), t2.functional(`mask`, (e3) => {
    if (!e3.value || e3.modifier || e3.value.kind !== `arbitrary`) return;
    let t3 = e3.value.value;
    switch (e3.value.dataType ?? b(t3, [`image`, `percentage`, `position`, `bg-size`, `length`, `url`])) {
      case `percentage`:
      case `position`:
        return e3.modifier ? void 0 : [U(`mask-position`, t3)];
      case `bg-size`:
      case `length`:
      case `size`:
        return [U(`mask-size`, t3)];
      case `image`:
      case `url`:
      default:
        return [U(`mask-image`, t3)];
    }
  }), r2(`mask-add`, [[`mask-composite`, `add`]]), r2(`mask-subtract`, [[`mask-composite`, `subtract`]]), r2(`mask-intersect`, [[`mask-composite`, `intersect`]]), r2(`mask-exclude`, [[`mask-composite`, `exclude`]]), r2(`mask-alpha`, [[`mask-mode`, `alpha`]]), r2(`mask-luminance`, [[`mask-mode`, `luminance`]]), r2(`mask-match`, [[`mask-mode`, `match-source`]]), r2(`mask-type-alpha`, [[`mask-type`, `alpha`]]), r2(`mask-type-luminance`, [[`mask-type`, `luminance`]]), r2(`mask-auto`, [[`mask-size`, `auto`]]), r2(`mask-cover`, [[`mask-size`, `cover`]]), r2(`mask-contain`, [[`mask-size`, `contain`]]), i2(`mask-size`, { handle(e3) {
    if (e3) return [U(`mask-size`, e3)];
  } }), r2(`mask-top`, [[`mask-position`, `top`]]), r2(`mask-top-left`, [[`mask-position`, `left top`]]), r2(`mask-top-right`, [[`mask-position`, `right top`]]), r2(`mask-bottom`, [[`mask-position`, `bottom`]]), r2(`mask-bottom-left`, [[`mask-position`, `left bottom`]]), r2(`mask-bottom-right`, [[`mask-position`, `right bottom`]]), r2(`mask-left`, [[`mask-position`, `left`]]), r2(`mask-right`, [[`mask-position`, `right`]]), r2(`mask-center`, [[`mask-position`, `center`]]), i2(`mask-position`, { handle(e3) {
    if (e3) return [U(`mask-position`, e3)];
  } }), r2(`mask-repeat`, [[`mask-repeat`, `repeat`]]), r2(`mask-no-repeat`, [[`mask-repeat`, `no-repeat`]]), r2(`mask-repeat-x`, [[`mask-repeat`, `repeat-x`]]), r2(`mask-repeat-y`, [[`mask-repeat`, `repeat-y`]]), r2(`mask-repeat-round`, [[`mask-repeat`, `round`]]), r2(`mask-repeat-space`, [[`mask-repeat`, `space`]]), r2(`mask-clip-border`, [[`mask-clip`, `border-box`]]), r2(`mask-clip-padding`, [[`mask-clip`, `padding-box`]]), r2(`mask-clip-content`, [[`mask-clip`, `content-box`]]), r2(`mask-clip-fill`, [[`mask-clip`, `fill-box`]]), r2(`mask-clip-stroke`, [[`mask-clip`, `stroke-box`]]), r2(`mask-clip-view`, [[`mask-clip`, `view-box`]]), r2(`mask-no-clip`, [[`mask-clip`, `no-clip`]]), r2(`mask-origin-border`, [[`mask-origin`, `border-box`]]), r2(`mask-origin-padding`, [[`mask-origin`, `padding-box`]]), r2(`mask-origin-content`, [[`mask-origin`, `content-box`]]), r2(`mask-origin-fill`, [[`mask-origin`, `fill-box`]]), r2(`mask-origin-stroke`, [[`mask-origin`, `stroke-box`]]), r2(`mask-origin-view`, [[`mask-origin`, `view-box`]]);
  let S2 = () => W([K(`--tw-mask-linear`, `linear-gradient(#fff, #fff)`), K(`--tw-mask-radial`, `linear-gradient(#fff, #fff)`), K(`--tw-mask-conic`, `linear-gradient(#fff, #fff)`)]);
  function C2(r3, i3) {
    t2.functional(r3, (t3) => {
      if (t3.value) {
        if (t3.value.kind === `arbitrary`) {
          let n3 = t3.value.value;
          switch (t3.value.dataType ?? b(n3, [`length`, `percentage`, `color`])) {
            case `color`:
              return n3 = J(n3, t3.modifier, e2), n3 === null ? void 0 : i3.color(n3);
            case `percentage`:
              return t3.modifier || !M(n3.slice(0, -1)) ? void 0 : i3.position(n3);
            default:
              return t3.modifier ? void 0 : i3.position(n3);
          }
        }
        {
          let n3 = Y(t3, e2, [`--background-color`, `--color`]);
          if (n3) return i3.color(n3);
        }
        {
          if (t3.modifier) return;
          let n3 = b(t3.value.value, [`number`, `percentage`]);
          if (!n3) return;
          switch (n3) {
            case `number`: {
              let n4 = e2.resolve(null, [`--spacing`]);
              return !n4 || !_e(t3.value.value) ? void 0 : i3.position(`calc(${n4} * ${t3.value.value})`);
            }
            case `percentage`:
              return M(t3.value.value.slice(0, -1)) ? i3.position(t3.value.value) : void 0;
            default:
              return;
          }
        }
      }
    }), n2(r3, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--background-color`, `--color`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`) }, { values: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}%`), valueThemeKeys: [`--gradient-color-stop-positions`] }]), n2(r3, () => [{ values: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}%`) }, { values: e2.get([`--spacing`]) ? sn : [] }, { values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--background-color`, `--color`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`) }]);
  }
  let w2 = () => W([K(`--tw-mask-left`, `linear-gradient(#fff, #fff)`), K(`--tw-mask-right`, `linear-gradient(#fff, #fff)`), K(`--tw-mask-bottom`, `linear-gradient(#fff, #fff)`), K(`--tw-mask-top`, `linear-gradient(#fff, #fff)`)]);
  function T2(e3, t3, n3) {
    C2(e3, { color(e4) {
      let r3 = [S2(), w2(), U(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), U(`mask-composite`, `intersect`), U(`--tw-mask-linear`, `var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)`)];
      for (let i3 of [`top`, `right`, `bottom`, `left`]) n3[i3] && (r3.push(U(`--tw-mask-${i3}`, `linear-gradient(to ${i3}, var(--tw-mask-${i3}-from-color) var(--tw-mask-${i3}-from-position), var(--tw-mask-${i3}-to-color) var(--tw-mask-${i3}-to-position))`)), r3.push(W([K(`--tw-mask-${i3}-from-position`, `0%`), K(`--tw-mask-${i3}-to-position`, `100%`), K(`--tw-mask-${i3}-from-color`, `black`), K(`--tw-mask-${i3}-to-color`, `transparent`)])), r3.push(U(`--tw-mask-${i3}-${t3}-color`, e4)));
      return r3;
    }, position(e4) {
      let r3 = [S2(), w2(), U(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), U(`mask-composite`, `intersect`), U(`--tw-mask-linear`, `var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)`)];
      for (let i3 of [`top`, `right`, `bottom`, `left`]) n3[i3] && (r3.push(U(`--tw-mask-${i3}`, `linear-gradient(to ${i3}, var(--tw-mask-${i3}-from-color) var(--tw-mask-${i3}-from-position), var(--tw-mask-${i3}-to-color) var(--tw-mask-${i3}-to-position))`)), r3.push(W([K(`--tw-mask-${i3}-from-position`, `0%`), K(`--tw-mask-${i3}-to-position`, `100%`), K(`--tw-mask-${i3}-from-color`, `black`), K(`--tw-mask-${i3}-to-color`, `transparent`)])), r3.push(U(`--tw-mask-${i3}-${t3}-position`, e4)));
      return r3;
    } });
  }
  T2(`mask-x-from`, `from`, { top: false, right: true, bottom: false, left: true }), T2(`mask-x-to`, `to`, { top: false, right: true, bottom: false, left: true }), T2(`mask-y-from`, `from`, { top: true, right: false, bottom: true, left: false }), T2(`mask-y-to`, `to`, { top: true, right: false, bottom: true, left: false }), T2(`mask-t-from`, `from`, { top: true, right: false, bottom: false, left: false }), T2(`mask-t-to`, `to`, { top: true, right: false, bottom: false, left: false }), T2(`mask-r-from`, `from`, { top: false, right: true, bottom: false, left: false }), T2(`mask-r-to`, `to`, { top: false, right: true, bottom: false, left: false }), T2(`mask-b-from`, `from`, { top: false, right: false, bottom: true, left: false }), T2(`mask-b-to`, `to`, { top: false, right: false, bottom: true, left: false }), T2(`mask-l-from`, `from`, { top: false, right: false, bottom: false, left: true }), T2(`mask-l-to`, `to`, { top: false, right: false, bottom: false, left: true });
  let E2 = () => W([K(`--tw-mask-linear-position`, `0deg`), K(`--tw-mask-linear-from-position`, `0%`), K(`--tw-mask-linear-to-position`, `100%`), K(`--tw-mask-linear-from-color`, `black`), K(`--tw-mask-linear-to-color`, `transparent`)]);
  i2(`mask-linear`, { defaultValue: null, supportsNegative: true, supportsFractions: false, handleBareValue(e3) {
    return M(e3.value) ? `calc(1deg * ${e3.value})` : null;
  }, handleNegativeBareValue(e3) {
    return M(e3.value) ? `calc(1deg * -${e3.value})` : null;
  }, handle: (e3) => [S2(), E2(), U(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), U(`mask-composite`, `intersect`), U(`--tw-mask-linear`, `linear-gradient(var(--tw-mask-linear-stops, var(--tw-mask-linear-position)))`), U(`--tw-mask-linear-position`, e3)] }), n2(`mask-linear`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `3`, `6`, `12`, `45`, `90`, `180`] }]), C2(`mask-linear-from`, { color: (e3) => [S2(), E2(), U(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), U(`mask-composite`, `intersect`), U(`--tw-mask-linear-stops`, `var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)`), U(`--tw-mask-linear`, `linear-gradient(var(--tw-mask-linear-stops))`), U(`--tw-mask-linear-from-color`, e3)], position: (e3) => [S2(), E2(), U(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), U(`mask-composite`, `intersect`), U(`--tw-mask-linear-stops`, `var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)`), U(`--tw-mask-linear`, `linear-gradient(var(--tw-mask-linear-stops))`), U(`--tw-mask-linear-from-position`, e3)] }), C2(`mask-linear-to`, { color: (e3) => [S2(), E2(), U(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), U(`mask-composite`, `intersect`), U(`--tw-mask-linear-stops`, `var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)`), U(`--tw-mask-linear`, `linear-gradient(var(--tw-mask-linear-stops))`), U(`--tw-mask-linear-to-color`, e3)], position: (e3) => [S2(), E2(), U(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), U(`mask-composite`, `intersect`), U(`--tw-mask-linear-stops`, `var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)`), U(`--tw-mask-linear`, `linear-gradient(var(--tw-mask-linear-stops))`), U(`--tw-mask-linear-to-position`, e3)] });
  let D2 = () => W([K(`--tw-mask-radial-from-position`, `0%`), K(`--tw-mask-radial-to-position`, `100%`), K(`--tw-mask-radial-from-color`, `black`), K(`--tw-mask-radial-to-color`, `transparent`), K(`--tw-mask-radial-shape`, `ellipse`), K(`--tw-mask-radial-size`, `farthest-corner`), K(`--tw-mask-radial-position`, `center`)]);
  r2(`mask-circle`, [[`--tw-mask-radial-shape`, `circle`]]), r2(`mask-ellipse`, [[`--tw-mask-radial-shape`, `ellipse`]]), r2(`mask-radial-closest-side`, [[`--tw-mask-radial-size`, `closest-side`]]), r2(`mask-radial-farthest-side`, [[`--tw-mask-radial-size`, `farthest-side`]]), r2(`mask-radial-closest-corner`, [[`--tw-mask-radial-size`, `closest-corner`]]), r2(`mask-radial-farthest-corner`, [[`--tw-mask-radial-size`, `farthest-corner`]]), r2(`mask-radial-at-top`, [[`--tw-mask-radial-position`, `top`]]), r2(`mask-radial-at-top-left`, [[`--tw-mask-radial-position`, `top left`]]), r2(`mask-radial-at-top-right`, [[`--tw-mask-radial-position`, `top right`]]), r2(`mask-radial-at-bottom`, [[`--tw-mask-radial-position`, `bottom`]]), r2(`mask-radial-at-bottom-left`, [[`--tw-mask-radial-position`, `bottom left`]]), r2(`mask-radial-at-bottom-right`, [[`--tw-mask-radial-position`, `bottom right`]]), r2(`mask-radial-at-left`, [[`--tw-mask-radial-position`, `left`]]), r2(`mask-radial-at-right`, [[`--tw-mask-radial-position`, `right`]]), r2(`mask-radial-at-center`, [[`--tw-mask-radial-position`, `center`]]), i2(`mask-radial-at`, { defaultValue: null, supportsNegative: false, supportsFractions: false, handle: (e3) => [U(`--tw-mask-radial-position`, e3)] }), i2(`mask-radial`, { defaultValue: null, supportsNegative: false, supportsFractions: false, handle: (e3) => [S2(), D2(), U(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), U(`mask-composite`, `intersect`), U(`--tw-mask-radial`, `radial-gradient(var(--tw-mask-radial-stops, var(--tw-mask-radial-size)))`), U(`--tw-mask-radial-size`, e3)] }), C2(`mask-radial-from`, { color: (e3) => [S2(), D2(), U(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), U(`mask-composite`, `intersect`), U(`--tw-mask-radial-stops`, `var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)`), U(`--tw-mask-radial`, `radial-gradient(var(--tw-mask-radial-stops))`), U(`--tw-mask-radial-from-color`, e3)], position: (e3) => [S2(), D2(), U(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), U(`mask-composite`, `intersect`), U(`--tw-mask-radial-stops`, `var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)`), U(`--tw-mask-radial`, `radial-gradient(var(--tw-mask-radial-stops))`), U(`--tw-mask-radial-from-position`, e3)] }), C2(`mask-radial-to`, { color: (e3) => [S2(), D2(), U(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), U(`mask-composite`, `intersect`), U(`--tw-mask-radial-stops`, `var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)`), U(`--tw-mask-radial`, `radial-gradient(var(--tw-mask-radial-stops))`), U(`--tw-mask-radial-to-color`, e3)], position: (e3) => [S2(), D2(), U(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), U(`mask-composite`, `intersect`), U(`--tw-mask-radial-stops`, `var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)`), U(`--tw-mask-radial`, `radial-gradient(var(--tw-mask-radial-stops))`), U(`--tw-mask-radial-to-position`, e3)] });
  let O2 = () => W([K(`--tw-mask-conic-position`, `0deg`), K(`--tw-mask-conic-from-position`, `0%`), K(`--tw-mask-conic-to-position`, `100%`), K(`--tw-mask-conic-from-color`, `black`), K(`--tw-mask-conic-to-color`, `transparent`)]);
  i2(`mask-conic`, { defaultValue: null, supportsNegative: true, supportsFractions: false, handleBareValue(e3) {
    return M(e3.value) ? `calc(1deg * ${e3.value})` : null;
  }, handleNegativeBareValue(e3) {
    return M(e3.value) ? `calc(1deg * -${e3.value})` : null;
  }, handle: (e3) => [S2(), O2(), U(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), U(`mask-composite`, `intersect`), U(`--tw-mask-conic`, `conic-gradient(var(--tw-mask-conic-stops, var(--tw-mask-conic-position)))`), U(`--tw-mask-conic-position`, e3)] }), n2(`mask-conic`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `3`, `6`, `12`, `45`, `90`, `180`] }]), C2(`mask-conic-from`, { color: (e3) => [S2(), O2(), U(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), U(`mask-composite`, `intersect`), U(`--tw-mask-conic-stops`, `from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)`), U(`--tw-mask-conic`, `conic-gradient(var(--tw-mask-conic-stops))`), U(`--tw-mask-conic-from-color`, e3)], position: (e3) => [S2(), O2(), U(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), U(`mask-composite`, `intersect`), U(`--tw-mask-conic-stops`, `from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)`), U(`--tw-mask-conic`, `conic-gradient(var(--tw-mask-conic-stops))`), U(`--tw-mask-conic-from-position`, e3)] }), C2(`mask-conic-to`, { color: (e3) => [S2(), O2(), U(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), U(`mask-composite`, `intersect`), U(`--tw-mask-conic-stops`, `from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)`), U(`--tw-mask-conic`, `conic-gradient(var(--tw-mask-conic-stops))`), U(`--tw-mask-conic-to-color`, e3)], position: (e3) => [S2(), O2(), U(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), U(`mask-composite`, `intersect`), U(`--tw-mask-conic-stops`, `from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)`), U(`--tw-mask-conic`, `conic-gradient(var(--tw-mask-conic-stops))`), U(`--tw-mask-conic-to-position`, e3)] }), r2(`box-decoration-slice`, [[`-webkit-box-decoration-break`, `slice`], [`box-decoration-break`, `slice`]]), r2(`box-decoration-clone`, [[`-webkit-box-decoration-break`, `clone`], [`box-decoration-break`, `clone`]]), r2(`bg-clip-text`, [[`background-clip`, `text`]]), r2(`bg-clip-border`, [[`background-clip`, `border-box`]]), r2(`bg-clip-padding`, [[`background-clip`, `padding-box`]]), r2(`bg-clip-content`, [[`background-clip`, `content-box`]]), r2(`bg-origin-border`, [[`background-origin`, `border-box`]]), r2(`bg-origin-padding`, [[`background-origin`, `padding-box`]]), r2(`bg-origin-content`, [[`background-origin`, `content-box`]]);
  for (let e3 of [`normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`]) r2(`bg-blend-${e3}`, [[`background-blend-mode`, e3]]), r2(`mix-blend-${e3}`, [[`mix-blend-mode`, e3]]);
  r2(`mix-blend-plus-darker`, [[`mix-blend-mode`, `plus-darker`]]), r2(`mix-blend-plus-lighter`, [[`mix-blend-mode`, `plus-lighter`]]), r2(`fill-none`, [[`fill`, `none`]]), t2.functional(`fill`, (t3) => {
    if (!t3.value) return;
    if (t3.value.kind === `arbitrary`) {
      let n4 = J(t3.value.value, t3.modifier, e2);
      return n4 === null ? void 0 : [U(`fill`, n4)];
    }
    let n3 = Y(t3, e2, [`--fill`, `--color`]);
    if (n3) return [U(`fill`, n3)];
  }), n2(`fill`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--fill`, `--color`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`) }]), r2(`stroke-none`, [[`stroke`, `none`]]), t2.functional(`stroke`, (t3) => {
    if (t3.value) {
      if (t3.value.kind === `arbitrary`) {
        let n3 = t3.value.value;
        switch (t3.value.dataType ?? b(n3, [`color`, `number`, `length`, `percentage`])) {
          case `number`:
          case `length`:
          case `percentage`:
            return t3.modifier ? void 0 : [U(`stroke-width`, n3)];
          default:
            return n3 = J(t3.value.value, t3.modifier, e2), n3 === null ? void 0 : [U(`stroke`, n3)];
        }
      }
      {
        let n3 = Y(t3, e2, [`--stroke`, `--color`]);
        if (n3) return [U(`stroke`, n3)];
      }
      {
        let n3 = e2.resolve(t3.value.value, [`--stroke-width`]);
        if (n3) return [U(`stroke-width`, n3)];
        if (M(t3.value.value)) return [U(`stroke-width`, t3.value.value)];
      }
    }
  }), n2(`stroke`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--stroke`, `--color`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`) }, { values: [`0`, `1`, `2`, `3`], valueThemeKeys: [`--stroke-width`] }]), r2(`object-contain`, [[`object-fit`, `contain`]]), r2(`object-cover`, [[`object-fit`, `cover`]]), r2(`object-fill`, [[`object-fit`, `fill`]]), r2(`object-none`, [[`object-fit`, `none`]]), r2(`object-scale-down`, [[`object-fit`, `scale-down`]]), r2(`object-top`, [[`object-position`, `top`]]), r2(`object-top-left`, [[`object-position`, `left top`]]), r2(`object-top-right`, [[`object-position`, `right top`]]), r2(`object-bottom`, [[`object-position`, `bottom`]]), r2(`object-bottom-left`, [[`object-position`, `left bottom`]]), r2(`object-bottom-right`, [[`object-position`, `right bottom`]]), r2(`object-left`, [[`object-position`, `left`]]), r2(`object-right`, [[`object-position`, `right`]]), r2(`object-center`, [[`object-position`, `center`]]), i2(`object`, { themeKeys: [`--object-position`], handle: (e3) => [U(`object-position`, e3)] });
  for (let [e3, t3] of [[`p`, `padding`], [`px`, `padding-inline`], [`py`, `padding-block`], [`ps`, `padding-inline-start`], [`pe`, `padding-inline-end`], [`pt`, `padding-top`], [`pr`, `padding-right`], [`pb`, `padding-bottom`], [`pl`, `padding-left`]]) o2(e3, [`--padding`, `--spacing`], (e4) => [U(t3, e4)]);
  r2(`text-left`, [[`text-align`, `left`]]), r2(`text-center`, [[`text-align`, `center`]]), r2(`text-right`, [[`text-align`, `right`]]), r2(`text-justify`, [[`text-align`, `justify`]]), r2(`text-start`, [[`text-align`, `start`]]), r2(`text-end`, [[`text-align`, `end`]]), o2(`indent`, [`--text-indent`, `--spacing`], (e3) => [U(`text-indent`, e3)], { supportsNegative: true }), r2(`align-baseline`, [[`vertical-align`, `baseline`]]), r2(`align-top`, [[`vertical-align`, `top`]]), r2(`align-middle`, [[`vertical-align`, `middle`]]), r2(`align-bottom`, [[`vertical-align`, `bottom`]]), r2(`align-text-top`, [[`vertical-align`, `text-top`]]), r2(`align-text-bottom`, [[`vertical-align`, `text-bottom`]]), r2(`align-sub`, [[`vertical-align`, `sub`]]), r2(`align-super`, [[`vertical-align`, `super`]]), i2(`align`, { themeKeys: [], handle: (e3) => [U(`vertical-align`, e3)] }), t2.functional(`font`, (t3) => {
    if (!(!t3.value || t3.modifier)) {
      if (t3.value.kind === `arbitrary`) {
        let e3 = t3.value.value;
        switch (t3.value.dataType ?? b(e3, [`number`, `generic-name`, `family-name`])) {
          case `generic-name`:
          case `family-name`:
            return [U(`font-family`, e3)];
          default:
            return [W([K(`--tw-font-weight`)]), U(`--tw-font-weight`, e3), U(`font-weight`, e3)];
        }
      }
      {
        let n3 = e2.resolveWith(t3.value.value, [`--font`], [`--font-feature-settings`, `--font-variation-settings`]);
        if (n3) {
          let [e3, t4 = {}] = n3;
          return [U(`font-family`, e3), U(`font-feature-settings`, t4[`--font-feature-settings`]), U(`font-variation-settings`, t4[`--font-variation-settings`])];
        }
      }
      {
        let n3 = e2.resolve(t3.value.value, [`--font-weight`]);
        if (n3) return [W([K(`--tw-font-weight`)]), U(`--tw-font-weight`, n3), U(`font-weight`, n3)];
      }
    }
  }), n2(`font`, () => [{ values: [], valueThemeKeys: [`--font`] }, { values: [], valueThemeKeys: [`--font-weight`] }]), r2(`uppercase`, [[`text-transform`, `uppercase`]]), r2(`lowercase`, [[`text-transform`, `lowercase`]]), r2(`capitalize`, [[`text-transform`, `capitalize`]]), r2(`normal-case`, [[`text-transform`, `none`]]), r2(`italic`, [[`font-style`, `italic`]]), r2(`not-italic`, [[`font-style`, `normal`]]), r2(`underline`, [[`text-decoration-line`, `underline`]]), r2(`overline`, [[`text-decoration-line`, `overline`]]), r2(`line-through`, [[`text-decoration-line`, `line-through`]]), r2(`no-underline`, [[`text-decoration-line`, `none`]]), r2(`font-stretch-normal`, [[`font-stretch`, `normal`]]), r2(`font-stretch-ultra-condensed`, [[`font-stretch`, `ultra-condensed`]]), r2(`font-stretch-extra-condensed`, [[`font-stretch`, `extra-condensed`]]), r2(`font-stretch-condensed`, [[`font-stretch`, `condensed`]]), r2(`font-stretch-semi-condensed`, [[`font-stretch`, `semi-condensed`]]), r2(`font-stretch-semi-expanded`, [[`font-stretch`, `semi-expanded`]]), r2(`font-stretch-expanded`, [[`font-stretch`, `expanded`]]), r2(`font-stretch-extra-expanded`, [[`font-stretch`, `extra-expanded`]]), r2(`font-stretch-ultra-expanded`, [[`font-stretch`, `ultra-expanded`]]), i2(`font-stretch`, { handleBareValue: ({ value: e3 }) => {
    if (!e3.endsWith(`%`)) return null;
    let t3 = Number(e3.slice(0, -1));
    return !M(t3) || Number.isNaN(t3) || t3 < 50 || t3 > 200 ? null : e3;
  }, handle: (e3) => [U(`font-stretch`, e3)] }), n2(`font-stretch`, () => [{ values: [`50%`, `75%`, `90%`, `95%`, `100%`, `105%`, `110%`, `125%`, `150%`, `200%`] }]), a2(`placeholder`, { themeKeys: [`--background-color`, `--color`], handle: (e3) => [B(`&::placeholder`, [U(`--tw-sort`, `placeholder-color`), U(`color`, e3)])] }), r2(`decoration-solid`, [[`text-decoration-style`, `solid`]]), r2(`decoration-double`, [[`text-decoration-style`, `double`]]), r2(`decoration-dotted`, [[`text-decoration-style`, `dotted`]]), r2(`decoration-dashed`, [[`text-decoration-style`, `dashed`]]), r2(`decoration-wavy`, [[`text-decoration-style`, `wavy`]]), r2(`decoration-auto`, [[`text-decoration-thickness`, `auto`]]), r2(`decoration-from-font`, [[`text-decoration-thickness`, `from-font`]]), t2.functional(`decoration`, (t3) => {
    if (t3.value) {
      if (t3.value.kind === `arbitrary`) {
        let n3 = t3.value.value;
        switch (t3.value.dataType ?? b(n3, [`color`, `length`, `percentage`])) {
          case `length`:
          case `percentage`:
            return t3.modifier ? void 0 : [U(`text-decoration-thickness`, n3)];
          default:
            return n3 = J(n3, t3.modifier, e2), n3 === null ? void 0 : [U(`text-decoration-color`, n3)];
        }
      }
      {
        let n3 = e2.resolve(t3.value.value, [`--text-decoration-thickness`]);
        if (n3) return t3.modifier ? void 0 : [U(`text-decoration-thickness`, n3)];
        if (M(t3.value.value)) return t3.modifier ? void 0 : [U(`text-decoration-thickness`, `${t3.value.value}px`)];
      }
      {
        let n3 = Y(t3, e2, [`--text-decoration-color`, `--color`]);
        if (n3) return [U(`text-decoration-color`, n3)];
      }
    }
  }), n2(`decoration`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--text-decoration-color`, `--color`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`) }, { values: [`0`, `1`, `2`], valueThemeKeys: [`--text-decoration-thickness`] }]), r2(`animate-none`, [[`animation`, `none`]]), i2(`animate`, { themeKeys: [`--animate`], handle: (e3) => [U(`animation`, e3)] });
  {
    let a3 = [`var(--tw-blur,)`, `var(--tw-brightness,)`, `var(--tw-contrast,)`, `var(--tw-grayscale,)`, `var(--tw-hue-rotate,)`, `var(--tw-invert,)`, `var(--tw-saturate,)`, `var(--tw-sepia,)`, `var(--tw-drop-shadow,)`].join(` `), o3 = [`var(--tw-backdrop-blur,)`, `var(--tw-backdrop-brightness,)`, `var(--tw-backdrop-contrast,)`, `var(--tw-backdrop-grayscale,)`, `var(--tw-backdrop-hue-rotate,)`, `var(--tw-backdrop-invert,)`, `var(--tw-backdrop-opacity,)`, `var(--tw-backdrop-saturate,)`, `var(--tw-backdrop-sepia,)`].join(` `), s3 = () => W([K(`--tw-blur`), K(`--tw-brightness`), K(`--tw-contrast`), K(`--tw-grayscale`), K(`--tw-hue-rotate`), K(`--tw-invert`), K(`--tw-opacity`), K(`--tw-saturate`), K(`--tw-sepia`), K(`--tw-drop-shadow`), K(`--tw-drop-shadow-color`), K(`--tw-drop-shadow-alpha`, `100%`, `<percentage>`), K(`--tw-drop-shadow-size`)]), c3 = () => W([K(`--tw-backdrop-blur`), K(`--tw-backdrop-brightness`), K(`--tw-backdrop-contrast`), K(`--tw-backdrop-grayscale`), K(`--tw-backdrop-hue-rotate`), K(`--tw-backdrop-invert`), K(`--tw-backdrop-opacity`), K(`--tw-backdrop-saturate`), K(`--tw-backdrop-sepia`)]);
    t2.functional(`filter`, (e3) => {
      if (!e3.modifier) {
        if (e3.value === null) return [s3(), U(`filter`, a3)];
        if (e3.value.kind === `arbitrary`) return [U(`filter`, e3.value.value)];
        switch (e3.value.value) {
          case `none`:
            return [U(`filter`, `none`)];
        }
      }
    }), t2.functional(`backdrop-filter`, (e3) => {
      if (!e3.modifier) {
        if (e3.value === null) return [c3(), U(`-webkit-backdrop-filter`, o3), U(`backdrop-filter`, o3)];
        if (e3.value.kind === `arbitrary`) return [U(`-webkit-backdrop-filter`, e3.value.value), U(`backdrop-filter`, e3.value.value)];
        switch (e3.value.value) {
          case `none`:
            return [U(`-webkit-backdrop-filter`, `none`), U(`backdrop-filter`, `none`)];
        }
      }
    }), i2(`blur`, { themeKeys: [`--blur`], handle: (e3) => [s3(), U(`--tw-blur`, `blur(${e3})`), U(`filter`, a3)] }), r2(`blur-none`, [s3, [`--tw-blur`, ` `], [`filter`, a3]]), i2(`backdrop-blur`, { themeKeys: [`--backdrop-blur`, `--blur`], handle: (e3) => [c3(), U(`--tw-backdrop-blur`, `blur(${e3})`), U(`-webkit-backdrop-filter`, o3), U(`backdrop-filter`, o3)] }), r2(`backdrop-blur-none`, [c3, [`--tw-backdrop-blur`, ` `], [`-webkit-backdrop-filter`, o3], [`backdrop-filter`, o3]]), i2(`brightness`, { themeKeys: [`--brightness`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}%` : null, handle: (e3) => [s3(), U(`--tw-brightness`, `brightness(${e3})`), U(`filter`, a3)] }), i2(`backdrop-brightness`, { themeKeys: [`--backdrop-brightness`, `--brightness`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}%` : null, handle: (e3) => [c3(), U(`--tw-backdrop-brightness`, `brightness(${e3})`), U(`-webkit-backdrop-filter`, o3), U(`backdrop-filter`, o3)] }), n2(`brightness`, () => [{ values: [`0`, `50`, `75`, `90`, `95`, `100`, `105`, `110`, `125`, `150`, `200`], valueThemeKeys: [`--brightness`] }]), n2(`backdrop-brightness`, () => [{ values: [`0`, `50`, `75`, `90`, `95`, `100`, `105`, `110`, `125`, `150`, `200`], valueThemeKeys: [`--backdrop-brightness`, `--brightness`] }]), i2(`contrast`, { themeKeys: [`--contrast`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}%` : null, handle: (e3) => [s3(), U(`--tw-contrast`, `contrast(${e3})`), U(`filter`, a3)] }), i2(`backdrop-contrast`, { themeKeys: [`--backdrop-contrast`, `--contrast`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}%` : null, handle: (e3) => [c3(), U(`--tw-backdrop-contrast`, `contrast(${e3})`), U(`-webkit-backdrop-filter`, o3), U(`backdrop-filter`, o3)] }), n2(`contrast`, () => [{ values: [`0`, `50`, `75`, `100`, `125`, `150`, `200`], valueThemeKeys: [`--contrast`] }]), n2(`backdrop-contrast`, () => [{ values: [`0`, `50`, `75`, `100`, `125`, `150`, `200`], valueThemeKeys: [`--backdrop-contrast`, `--contrast`] }]), i2(`grayscale`, { themeKeys: [`--grayscale`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}%` : null, defaultValue: `100%`, handle: (e3) => [s3(), U(`--tw-grayscale`, `grayscale(${e3})`), U(`filter`, a3)] }), i2(`backdrop-grayscale`, { themeKeys: [`--backdrop-grayscale`, `--grayscale`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}%` : null, defaultValue: `100%`, handle: (e3) => [c3(), U(`--tw-backdrop-grayscale`, `grayscale(${e3})`), U(`-webkit-backdrop-filter`, o3), U(`backdrop-filter`, o3)] }), n2(`grayscale`, () => [{ values: [`0`, `25`, `50`, `75`, `100`], valueThemeKeys: [`--grayscale`], hasDefaultValue: true }]), n2(`backdrop-grayscale`, () => [{ values: [`0`, `25`, `50`, `75`, `100`], valueThemeKeys: [`--backdrop-grayscale`, `--grayscale`], hasDefaultValue: true }]), i2(`hue-rotate`, { supportsNegative: true, themeKeys: [`--hue-rotate`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}deg` : null, handle: (e3) => [s3(), U(`--tw-hue-rotate`, `hue-rotate(${e3})`), U(`filter`, a3)] }), i2(`backdrop-hue-rotate`, { supportsNegative: true, themeKeys: [`--backdrop-hue-rotate`, `--hue-rotate`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}deg` : null, handle: (e3) => [c3(), U(`--tw-backdrop-hue-rotate`, `hue-rotate(${e3})`), U(`-webkit-backdrop-filter`, o3), U(`backdrop-filter`, o3)] }), n2(`hue-rotate`, () => [{ values: [`0`, `15`, `30`, `60`, `90`, `180`], valueThemeKeys: [`--hue-rotate`] }]), n2(`backdrop-hue-rotate`, () => [{ values: [`0`, `15`, `30`, `60`, `90`, `180`], valueThemeKeys: [`--backdrop-hue-rotate`, `--hue-rotate`] }]), i2(`invert`, { themeKeys: [`--invert`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}%` : null, defaultValue: `100%`, handle: (e3) => [s3(), U(`--tw-invert`, `invert(${e3})`), U(`filter`, a3)] }), i2(`backdrop-invert`, { themeKeys: [`--backdrop-invert`, `--invert`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}%` : null, defaultValue: `100%`, handle: (e3) => [c3(), U(`--tw-backdrop-invert`, `invert(${e3})`), U(`-webkit-backdrop-filter`, o3), U(`backdrop-filter`, o3)] }), n2(`invert`, () => [{ values: [`0`, `25`, `50`, `75`, `100`], valueThemeKeys: [`--invert`], hasDefaultValue: true }]), n2(`backdrop-invert`, () => [{ values: [`0`, `25`, `50`, `75`, `100`], valueThemeKeys: [`--backdrop-invert`, `--invert`], hasDefaultValue: true }]), i2(`saturate`, { themeKeys: [`--saturate`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}%` : null, handle: (e3) => [s3(), U(`--tw-saturate`, `saturate(${e3})`), U(`filter`, a3)] }), i2(`backdrop-saturate`, { themeKeys: [`--backdrop-saturate`, `--saturate`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}%` : null, handle: (e3) => [c3(), U(`--tw-backdrop-saturate`, `saturate(${e3})`), U(`-webkit-backdrop-filter`, o3), U(`backdrop-filter`, o3)] }), n2(`saturate`, () => [{ values: [`0`, `50`, `100`, `150`, `200`], valueThemeKeys: [`--saturate`] }]), n2(`backdrop-saturate`, () => [{ values: [`0`, `50`, `100`, `150`, `200`], valueThemeKeys: [`--backdrop-saturate`, `--saturate`] }]), i2(`sepia`, { themeKeys: [`--sepia`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}%` : null, defaultValue: `100%`, handle: (e3) => [s3(), U(`--tw-sepia`, `sepia(${e3})`), U(`filter`, a3)] }), i2(`backdrop-sepia`, { themeKeys: [`--backdrop-sepia`, `--sepia`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}%` : null, defaultValue: `100%`, handle: (e3) => [c3(), U(`--tw-backdrop-sepia`, `sepia(${e3})`), U(`-webkit-backdrop-filter`, o3), U(`backdrop-filter`, o3)] }), n2(`sepia`, () => [{ values: [`0`, `50`, `100`], valueThemeKeys: [`--sepia`], hasDefaultValue: true }]), n2(`backdrop-sepia`, () => [{ values: [`0`, `50`, `100`], valueThemeKeys: [`--backdrop-sepia`, `--sepia`], hasDefaultValue: true }]), r2(`drop-shadow-none`, [s3, [`--tw-drop-shadow`, ` `], [`filter`, a3]]), t2.functional(`drop-shadow`, (t3) => {
      let n3;
      if (t3.modifier && (t3.modifier.kind === `arbitrary` ? n3 = t3.modifier.value : M(t3.modifier.value) && (n3 = `${t3.modifier.value}%`)), !t3.value) {
        let t4 = e2.get([`--drop-shadow`]), r3 = e2.resolve(null, [`--drop-shadow`]);
        return t4 === null || r3 === null ? void 0 : [s3(), U(`--tw-drop-shadow-alpha`, n3), ...hn(`--tw-drop-shadow-size`, t4, n3, (e3) => `var(--tw-drop-shadow-color, ${e3})`), U(`--tw-drop-shadow`, v(r3, `,`).map((e3) => `drop-shadow(${e3})`).join(` `)), U(`filter`, a3)];
      }
      if (t3.value.kind === `arbitrary`) {
        let r3 = t3.value.value;
        switch (t3.value.dataType ?? b(r3, [`color`])) {
          case `color`:
            return r3 = J(r3, t3.modifier, e2), r3 === null ? void 0 : [s3(), U(`--tw-drop-shadow-color`, q(r3, `var(--tw-drop-shadow-alpha)`)), U(`--tw-drop-shadow`, `var(--tw-drop-shadow-size)`)];
          default:
            return t3.modifier && !n3 ? void 0 : [s3(), U(`--tw-drop-shadow-alpha`, n3), ...hn(`--tw-drop-shadow-size`, r3, n3, (e3) => `var(--tw-drop-shadow-color, ${e3})`), U(`--tw-drop-shadow`, `var(--tw-drop-shadow-size)`), U(`filter`, a3)];
        }
      }
      {
        let r3 = e2.get([`--drop-shadow-${t3.value.value}`]), i3 = e2.resolve(t3.value.value, [`--drop-shadow`]);
        if (r3 && i3) return t3.modifier && !n3 ? void 0 : n3 ? [s3(), U(`--tw-drop-shadow-alpha`, n3), ...hn(`--tw-drop-shadow-size`, r3, n3, (e3) => `var(--tw-drop-shadow-color, ${e3})`), U(`--tw-drop-shadow`, `var(--tw-drop-shadow-size)`), U(`filter`, a3)] : [s3(), U(`--tw-drop-shadow-alpha`, n3), ...hn(`--tw-drop-shadow-size`, r3, n3, (e3) => `var(--tw-drop-shadow-color, ${e3})`), U(`--tw-drop-shadow`, v(i3, `,`).map((e3) => `drop-shadow(${e3})`).join(` `)), U(`filter`, a3)];
      }
      {
        let n4 = Y(t3, e2, [`--drop-shadow-color`, `--color`]);
        if (n4) return n4 === `inherit` ? [s3(), U(`--tw-drop-shadow-color`, `inherit`), U(`--tw-drop-shadow`, `var(--tw-drop-shadow-size)`)] : [s3(), U(`--tw-drop-shadow-color`, q(n4, `var(--tw-drop-shadow-alpha)`)), U(`--tw-drop-shadow`, `var(--tw-drop-shadow-size)`)];
      }
    }), n2(`drop-shadow`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--drop-shadow-color`, `--color`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`) }, { valueThemeKeys: [`--drop-shadow`] }]), i2(`backdrop-opacity`, { themeKeys: [`--backdrop-opacity`, `--opacity`], handleBareValue: ({ value: e3 }) => ve(e3) ? `${e3}%` : null, handle: (e3) => [c3(), U(`--tw-backdrop-opacity`, `opacity(${e3})`), U(`-webkit-backdrop-filter`, o3), U(`backdrop-filter`, o3)] }), n2(`backdrop-opacity`, () => [{ values: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`), valueThemeKeys: [`--backdrop-opacity`, `--opacity`] }]);
  }
  {
    let a3 = `var(--tw-ease, ${e2.resolve(null, [`--default-transition-timing-function`]) ?? `ease`})`, o3 = `var(--tw-duration, ${e2.resolve(null, [`--default-transition-duration`]) ?? `0s`})`;
    r2(`transition-none`, [[`transition-property`, `none`]]), r2(`transition-all`, [[`transition-property`, `all`], [`transition-timing-function`, a3], [`transition-duration`, o3]]), r2(`transition-colors`, [[`transition-property`, `color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to`], [`transition-timing-function`, a3], [`transition-duration`, o3]]), r2(`transition-opacity`, [[`transition-property`, `opacity`], [`transition-timing-function`, a3], [`transition-duration`, o3]]), r2(`transition-shadow`, [[`transition-property`, `box-shadow`], [`transition-timing-function`, a3], [`transition-duration`, o3]]), r2(`transition-transform`, [[`transition-property`, `transform, translate, scale, rotate`], [`transition-timing-function`, a3], [`transition-duration`, o3]]), i2(`transition`, { defaultValue: `color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events`, themeKeys: [`--transition-property`], handle: (e3) => [U(`transition-property`, e3), U(`transition-timing-function`, a3), U(`transition-duration`, o3)] }), r2(`transition-discrete`, [[`transition-behavior`, `allow-discrete`]]), r2(`transition-normal`, [[`transition-behavior`, `normal`]]), i2(`delay`, { handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}ms` : null, themeKeys: [`--transition-delay`], handle: (e3) => [U(`transition-delay`, e3)] });
    {
      let n3 = () => W([K(`--tw-duration`)]);
      r2(`duration-initial`, [n3, [`--tw-duration`, `initial`]]), t2.functional(`duration`, (t3) => {
        if (t3.modifier || !t3.value) return;
        let r3 = null;
        if (t3.value.kind === `arbitrary` ? r3 = t3.value.value : (r3 = e2.resolve(t3.value.fraction ?? t3.value.value, [`--transition-duration`]), r3 === null && M(t3.value.value) && (r3 = `${t3.value.value}ms`)), r3 !== null) return [n3(), U(`--tw-duration`, r3), U(`transition-duration`, r3)];
      });
    }
    n2(`delay`, () => [{ values: [`75`, `100`, `150`, `200`, `300`, `500`, `700`, `1000`], valueThemeKeys: [`--transition-delay`] }]), n2(`duration`, () => [{ values: [`75`, `100`, `150`, `200`, `300`, `500`, `700`, `1000`], valueThemeKeys: [`--transition-duration`] }]);
  }
  {
    let e3 = () => W([K(`--tw-ease`)]);
    r2(`ease-initial`, [e3, [`--tw-ease`, `initial`]]), r2(`ease-linear`, [e3, [`--tw-ease`, `linear`], [`transition-timing-function`, `linear`]]), i2(`ease`, { themeKeys: [`--ease`], handle: (t3) => [e3(), U(`--tw-ease`, t3), U(`transition-timing-function`, t3)] });
  }
  r2(`will-change-auto`, [[`will-change`, `auto`]]), r2(`will-change-scroll`, [[`will-change`, `scroll-position`]]), r2(`will-change-contents`, [[`will-change`, `contents`]]), r2(`will-change-transform`, [[`will-change`, `transform`]]), i2(`will-change`, { themeKeys: [], handle: (e3) => [U(`will-change`, e3)] }), r2(`content-none`, [[`--tw-content`, `none`], [`content`, `none`]]), i2(`content`, { themeKeys: [], handle: (e3) => [W([K(`--tw-content`, `""`)]), U(`--tw-content`, e3), U(`content`, `var(--tw-content)`)] });
  {
    let e3 = `var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,)`, t3 = () => W([K(`--tw-contain-size`), K(`--tw-contain-layout`), K(`--tw-contain-paint`), K(`--tw-contain-style`)]);
    r2(`contain-none`, [[`contain`, `none`]]), r2(`contain-content`, [[`contain`, `content`]]), r2(`contain-strict`, [[`contain`, `strict`]]), r2(`contain-size`, [t3, [`--tw-contain-size`, `size`], [`contain`, e3]]), r2(`contain-inline-size`, [t3, [`--tw-contain-size`, `inline-size`], [`contain`, e3]]), r2(`contain-layout`, [t3, [`--tw-contain-layout`, `layout`], [`contain`, e3]]), r2(`contain-paint`, [t3, [`--tw-contain-paint`, `paint`], [`contain`, e3]]), r2(`contain-style`, [t3, [`--tw-contain-style`, `style`], [`contain`, e3]]), i2(`contain`, { themeKeys: [], handle: (e4) => [U(`contain`, e4)] });
  }
  r2(`forced-color-adjust-none`, [[`forced-color-adjust`, `none`]]), r2(`forced-color-adjust-auto`, [[`forced-color-adjust`, `auto`]]), r2(`leading-none`, [() => W([K(`--tw-leading`)]), [`--tw-leading`, `1`], [`line-height`, `1`]]), o2(`leading`, [`--leading`, `--spacing`], (e3) => [W([K(`--tw-leading`)]), U(`--tw-leading`, e3), U(`line-height`, e3)]), i2(`tracking`, { supportsNegative: true, themeKeys: [`--tracking`], handle: (e3) => [W([K(`--tw-tracking`)]), U(`--tw-tracking`, e3), U(`letter-spacing`, e3)] }), r2(`antialiased`, [[`-webkit-font-smoothing`, `antialiased`], [`-moz-osx-font-smoothing`, `grayscale`]]), r2(`subpixel-antialiased`, [[`-webkit-font-smoothing`, `auto`], [`-moz-osx-font-smoothing`, `auto`]]);
  {
    let e3 = `var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)`, t3 = () => W([K(`--tw-ordinal`), K(`--tw-slashed-zero`), K(`--tw-numeric-figure`), K(`--tw-numeric-spacing`), K(`--tw-numeric-fraction`)]);
    r2(`normal-nums`, [[`font-variant-numeric`, `normal`]]), r2(`ordinal`, [t3, [`--tw-ordinal`, `ordinal`], [`font-variant-numeric`, e3]]), r2(`slashed-zero`, [t3, [`--tw-slashed-zero`, `slashed-zero`], [`font-variant-numeric`, e3]]), r2(`lining-nums`, [t3, [`--tw-numeric-figure`, `lining-nums`], [`font-variant-numeric`, e3]]), r2(`oldstyle-nums`, [t3, [`--tw-numeric-figure`, `oldstyle-nums`], [`font-variant-numeric`, e3]]), r2(`proportional-nums`, [t3, [`--tw-numeric-spacing`, `proportional-nums`], [`font-variant-numeric`, e3]]), r2(`tabular-nums`, [t3, [`--tw-numeric-spacing`, `tabular-nums`], [`font-variant-numeric`, e3]]), r2(`diagonal-fractions`, [t3, [`--tw-numeric-fraction`, `diagonal-fractions`], [`font-variant-numeric`, e3]]), r2(`stacked-fractions`, [t3, [`--tw-numeric-fraction`, `stacked-fractions`], [`font-variant-numeric`, e3]]);
  }
  {
    let a3 = () => W([K(`--tw-outline-style`, `solid`)]);
    t2.static(`outline-hidden`, () => [U(`--tw-outline-style`, `none`), U(`outline-style`, `none`), V(`@media`, `(forced-colors: active)`, [U(`outline`, `2px solid transparent`), U(`outline-offset`, `2px`)])]), r2(`outline-none`, [[`--tw-outline-style`, `none`], [`outline-style`, `none`]]), r2(`outline-solid`, [[`--tw-outline-style`, `solid`], [`outline-style`, `solid`]]), r2(`outline-dashed`, [[`--tw-outline-style`, `dashed`], [`outline-style`, `dashed`]]), r2(`outline-dotted`, [[`--tw-outline-style`, `dotted`], [`outline-style`, `dotted`]]), r2(`outline-double`, [[`--tw-outline-style`, `double`], [`outline-style`, `double`]]), t2.functional(`outline`, (t3) => {
      if (t3.value === null) {
        if (t3.modifier) return;
        let n3 = e2.get([`--default-outline-width`]) ?? `1px`;
        return [a3(), U(`outline-style`, `var(--tw-outline-style)`), U(`outline-width`, n3)];
      }
      if (t3.value.kind === `arbitrary`) {
        let n3 = t3.value.value;
        switch (t3.value.dataType ?? b(n3, [`color`, `length`, `number`, `percentage`])) {
          case `length`:
          case `number`:
          case `percentage`:
            return t3.modifier ? void 0 : [a3(), U(`outline-style`, `var(--tw-outline-style)`), U(`outline-width`, n3)];
          default:
            return n3 = J(n3, t3.modifier, e2), n3 === null ? void 0 : [U(`outline-color`, n3)];
        }
      }
      {
        let n3 = Y(t3, e2, [`--outline-color`, `--color`]);
        if (n3) return [U(`outline-color`, n3)];
      }
      {
        if (t3.modifier) return;
        let n3 = e2.resolve(t3.value.value, [`--outline-width`]);
        if (n3) return [a3(), U(`outline-style`, `var(--tw-outline-style)`), U(`outline-width`, n3)];
        if (M(t3.value.value)) return [a3(), U(`outline-style`, `var(--tw-outline-style)`), U(`outline-width`, `${t3.value.value}px`)];
      }
    }), n2(`outline`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--outline-color`, `--color`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`), hasDefaultValue: true }, { values: [`0`, `1`, `2`, `4`, `8`], valueThemeKeys: [`--outline-width`] }]), i2(`outline-offset`, { supportsNegative: true, themeKeys: [`--outline-offset`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}px` : null, handle: (e3) => [U(`outline-offset`, e3)] }), n2(`outline-offset`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `4`, `8`], valueThemeKeys: [`--outline-offset`] }]);
  }
  i2(`opacity`, { themeKeys: [`--opacity`], handleBareValue: ({ value: e3 }) => ve(e3) ? `${e3}%` : null, handle: (e3) => [U(`opacity`, e3)] }), n2(`opacity`, () => [{ values: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`), valueThemeKeys: [`--opacity`] }]), r2(`underline-offset-auto`, [[`text-underline-offset`, `auto`]]), i2(`underline-offset`, { supportsNegative: true, themeKeys: [`--text-underline-offset`], handleBareValue: ({ value: e3 }) => M(e3) ? `${e3}px` : null, handle: (e3) => [U(`text-underline-offset`, e3)] }), n2(`underline-offset`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `4`, `8`], valueThemeKeys: [`--text-underline-offset`] }]), t2.functional(`text`, (t3) => {
    if (t3.value) {
      if (t3.value.kind === `arbitrary`) {
        let n3 = t3.value.value;
        switch (t3.value.dataType ?? b(n3, [`color`, `length`, `percentage`, `absolute-size`, `relative-size`])) {
          case `size`:
          case `length`:
          case `percentage`:
          case `absolute-size`:
          case `relative-size`:
            if (t3.modifier) {
              let r3 = t3.modifier.kind === `arbitrary` ? t3.modifier.value : e2.resolve(t3.modifier.value, [`--leading`]);
              if (!r3 && _e(t3.modifier.value)) {
                let n4 = e2.resolve(null, [`--spacing`]);
                if (!n4) return null;
                r3 = `calc(${n4} * ${t3.modifier.value})`;
              }
              return !r3 && t3.modifier.value === `none` && (r3 = `1`), r3 ? [U(`font-size`, n3), U(`line-height`, r3)] : null;
            }
            return [U(`font-size`, n3)];
          default:
            return n3 = J(n3, t3.modifier, e2), n3 === null ? void 0 : [U(`color`, n3)];
        }
      }
      {
        let n3 = Y(t3, e2, [`--text-color`, `--color`]);
        if (n3) return [U(`color`, n3)];
      }
      {
        let n3 = e2.resolveWith(t3.value.value, [`--text`], [`--line-height`, `--letter-spacing`, `--font-weight`]);
        if (n3) {
          let [r3, i3 = {}] = Array.isArray(n3) ? n3 : [n3];
          if (t3.modifier) {
            let n4 = t3.modifier.kind === `arbitrary` ? t3.modifier.value : e2.resolve(t3.modifier.value, [`--leading`]);
            if (!n4 && _e(t3.modifier.value)) {
              let r4 = e2.resolve(null, [`--spacing`]);
              if (!r4) return null;
              n4 = `calc(${r4} * ${t3.modifier.value})`;
            }
            if (!n4 && t3.modifier.value === `none` && (n4 = `1`), !n4) return null;
            let i4 = [U(`font-size`, r3)];
            return n4 && i4.push(U(`line-height`, n4)), i4;
          }
          return typeof i3 == `string` ? [U(`font-size`, r3), U(`line-height`, i3)] : [U(`font-size`, r3), U(`line-height`, i3[`--line-height`] ? `var(--tw-leading, ${i3[`--line-height`]})` : void 0), U(`letter-spacing`, i3[`--letter-spacing`] ? `var(--tw-tracking, ${i3[`--letter-spacing`]})` : void 0), U(`font-weight`, i3[`--font-weight`] ? `var(--tw-font-weight, ${i3[`--font-weight`]})` : void 0)];
        }
      }
    }
  }), n2(`text`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--text-color`, `--color`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`) }, { values: [], valueThemeKeys: [`--text`], modifiers: [], modifierThemeKeys: [`--leading`] }]);
  let k2 = () => W([K(`--tw-text-shadow-color`), K(`--tw-text-shadow-alpha`, `100%`, `<percentage>`)]);
  r2(`text-shadow-initial`, [k2, [`--tw-text-shadow-color`, `initial`]]), t2.functional(`text-shadow`, (t3) => {
    let n3;
    if (t3.modifier && (t3.modifier.kind === `arbitrary` ? n3 = t3.modifier.value : M(t3.modifier.value) && (n3 = `${t3.modifier.value}%`)), !t3.value) {
      let t4 = e2.get([`--text-shadow`]);
      return t4 === null ? void 0 : [k2(), U(`--tw-text-shadow-alpha`, n3), ...X(`text-shadow`, t4, n3, (e3) => `var(--tw-text-shadow-color, ${e3})`)];
    }
    if (t3.value.kind === `arbitrary`) {
      let r3 = t3.value.value;
      switch (t3.value.dataType ?? b(r3, [`color`])) {
        case `color`:
          return r3 = J(r3, t3.modifier, e2), r3 === null ? void 0 : [k2(), U(`--tw-text-shadow-color`, q(r3, `var(--tw-text-shadow-alpha)`))];
        default:
          return [k2(), U(`--tw-text-shadow-alpha`, n3), ...X(`text-shadow`, r3, n3, (e3) => `var(--tw-text-shadow-color, ${e3})`)];
      }
    }
    switch (t3.value.value) {
      case `none`:
        return t3.modifier ? void 0 : [k2(), U(`text-shadow`, `none`)];
      case `inherit`:
        return t3.modifier ? void 0 : [k2(), U(`--tw-text-shadow-color`, `inherit`)];
    }
    {
      let r3 = e2.get([`--text-shadow-${t3.value.value}`]);
      if (r3) return [k2(), U(`--tw-text-shadow-alpha`, n3), ...X(`text-shadow`, r3, n3, (e3) => `var(--tw-text-shadow-color, ${e3})`)];
    }
    {
      let n4 = Y(t3, e2, [`--text-shadow-color`, `--color`]);
      if (n4) return [k2(), U(`--tw-text-shadow-color`, q(n4, `var(--tw-text-shadow-alpha)`))];
    }
  }), n2(`text-shadow`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--text-shadow-color`, `--color`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`) }, { values: [`none`] }, { valueThemeKeys: [`--text-shadow`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`), hasDefaultValue: e2.get([`--text-shadow`]) !== null }]);
  {
    let i3 = function(e3) {
      return `var(--tw-ring-inset,) 0 0 0 calc(${e3} + var(--tw-ring-offset-width)) var(--tw-ring-color, ${l3})`;
    }, a3 = function(e3) {
      return `inset 0 0 0 ${e3} var(--tw-inset-ring-color, currentcolor)`;
    };
    var A2 = i3, j2 = a3;
    let o3 = [`var(--tw-inset-shadow)`, `var(--tw-inset-ring-shadow)`, `var(--tw-ring-offset-shadow)`, `var(--tw-ring-shadow)`, `var(--tw-shadow)`].join(`, `), s3 = `0 0 #0000`, c3 = () => W([K(`--tw-shadow`, s3), K(`--tw-shadow-color`), K(`--tw-shadow-alpha`, `100%`, `<percentage>`), K(`--tw-inset-shadow`, s3), K(`--tw-inset-shadow-color`), K(`--tw-inset-shadow-alpha`, `100%`, `<percentage>`), K(`--tw-ring-color`), K(`--tw-ring-shadow`, s3), K(`--tw-inset-ring-color`), K(`--tw-inset-ring-shadow`, s3), K(`--tw-ring-inset`), K(`--tw-ring-offset-width`, `0px`, `<length>`), K(`--tw-ring-offset-color`, `#fff`), K(`--tw-ring-offset-shadow`, s3)]);
    r2(`shadow-initial`, [c3, [`--tw-shadow-color`, `initial`]]), t2.functional(`shadow`, (t3) => {
      let n3;
      if (t3.modifier && (t3.modifier.kind === `arbitrary` ? n3 = t3.modifier.value : M(t3.modifier.value) && (n3 = `${t3.modifier.value}%`)), !t3.value) {
        let t4 = e2.get([`--shadow`]);
        return t4 === null ? void 0 : [c3(), U(`--tw-shadow-alpha`, n3), ...X(`--tw-shadow`, t4, n3, (e3) => `var(--tw-shadow-color, ${e3})`), U(`box-shadow`, o3)];
      }
      if (t3.value.kind === `arbitrary`) {
        let r3 = t3.value.value;
        switch (t3.value.dataType ?? b(r3, [`color`])) {
          case `color`:
            return r3 = J(r3, t3.modifier, e2), r3 === null ? void 0 : [c3(), U(`--tw-shadow-color`, q(r3, `var(--tw-shadow-alpha)`))];
          default:
            return [c3(), U(`--tw-shadow-alpha`, n3), ...X(`--tw-shadow`, r3, n3, (e3) => `var(--tw-shadow-color, ${e3})`), U(`box-shadow`, o3)];
        }
      }
      switch (t3.value.value) {
        case `none`:
          return t3.modifier ? void 0 : [c3(), U(`--tw-shadow`, s3), U(`box-shadow`, o3)];
        case `inherit`:
          return t3.modifier ? void 0 : [c3(), U(`--tw-shadow-color`, `inherit`)];
      }
      {
        let r3 = e2.get([`--shadow-${t3.value.value}`]);
        if (r3) return [c3(), U(`--tw-shadow-alpha`, n3), ...X(`--tw-shadow`, r3, n3, (e3) => `var(--tw-shadow-color, ${e3})`), U(`box-shadow`, o3)];
      }
      {
        let n4 = Y(t3, e2, [`--box-shadow-color`, `--color`]);
        if (n4) return [c3(), U(`--tw-shadow-color`, q(n4, `var(--tw-shadow-alpha)`))];
      }
    }), n2(`shadow`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--box-shadow-color`, `--color`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`) }, { values: [`none`] }, { valueThemeKeys: [`--shadow`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`), hasDefaultValue: e2.get([`--shadow`]) !== null }]), r2(`inset-shadow-initial`, [c3, [`--tw-inset-shadow-color`, `initial`]]), t2.functional(`inset-shadow`, (t3) => {
      let n3;
      if (t3.modifier && (t3.modifier.kind === `arbitrary` ? n3 = t3.modifier.value : M(t3.modifier.value) && (n3 = `${t3.modifier.value}%`)), !t3.value) {
        let t4 = e2.get([`--inset-shadow`]);
        return t4 === null ? void 0 : [c3(), U(`--tw-inset-shadow-alpha`, n3), ...X(`--tw-inset-shadow`, t4, n3, (e3) => `var(--tw-inset-shadow-color, ${e3})`), U(`box-shadow`, o3)];
      }
      if (t3.value.kind === `arbitrary`) {
        let r3 = t3.value.value;
        switch (t3.value.dataType ?? b(r3, [`color`])) {
          case `color`:
            return r3 = J(r3, t3.modifier, e2), r3 === null ? void 0 : [c3(), U(`--tw-inset-shadow-color`, q(r3, `var(--tw-inset-shadow-alpha)`))];
          default:
            return [c3(), U(`--tw-inset-shadow-alpha`, n3), ...X(`--tw-inset-shadow`, r3, n3, (e3) => `var(--tw-inset-shadow-color, ${e3})`, `inset `), U(`box-shadow`, o3)];
        }
      }
      switch (t3.value.value) {
        case `none`:
          return t3.modifier ? void 0 : [c3(), U(`--tw-inset-shadow`, s3), U(`box-shadow`, o3)];
        case `inherit`:
          return t3.modifier ? void 0 : [c3(), U(`--tw-inset-shadow-color`, `inherit`)];
      }
      {
        let r3 = e2.get([`--inset-shadow-${t3.value.value}`]);
        if (r3) return [c3(), U(`--tw-inset-shadow-alpha`, n3), ...X(`--tw-inset-shadow`, r3, n3, (e3) => `var(--tw-inset-shadow-color, ${e3})`), U(`box-shadow`, o3)];
      }
      {
        let n4 = Y(t3, e2, [`--box-shadow-color`, `--color`]);
        if (n4) return [c3(), U(`--tw-inset-shadow-color`, q(n4, `var(--tw-inset-shadow-alpha)`))];
      }
    }), n2(`inset-shadow`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--box-shadow-color`, `--color`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`) }, { values: [`none`] }, { valueThemeKeys: [`--inset-shadow`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`), hasDefaultValue: e2.get([`--inset-shadow`]) !== null }]), r2(`ring-inset`, [c3, [`--tw-ring-inset`, `inset`]]);
    let l3 = e2.get([`--default-ring-color`]) ?? `currentcolor`;
    t2.functional(`ring`, (t3) => {
      if (!t3.value) {
        if (t3.modifier) return;
        let n3 = e2.get([`--default-ring-width`]) ?? `1px`;
        return [c3(), U(`--tw-ring-shadow`, i3(n3)), U(`box-shadow`, o3)];
      }
      if (t3.value.kind === `arbitrary`) {
        let n3 = t3.value.value;
        switch (t3.value.dataType ?? b(n3, [`color`, `length`])) {
          case `length`:
            return t3.modifier ? void 0 : [c3(), U(`--tw-ring-shadow`, i3(n3)), U(`box-shadow`, o3)];
          default:
            return n3 = J(n3, t3.modifier, e2), n3 === null ? void 0 : [U(`--tw-ring-color`, n3)];
        }
      }
      {
        let n3 = Y(t3, e2, [`--ring-color`, `--color`]);
        if (n3) return [U(`--tw-ring-color`, n3)];
      }
      {
        if (t3.modifier) return;
        let n3 = e2.resolve(t3.value.value, [`--ring-width`]);
        if (n3 === null && M(t3.value.value) && (n3 = `${t3.value.value}px`), n3) return [c3(), U(`--tw-ring-shadow`, i3(n3)), U(`box-shadow`, o3)];
      }
    }), n2(`ring`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--ring-color`, `--color`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`) }, { values: [`0`, `1`, `2`, `4`, `8`], valueThemeKeys: [`--ring-width`], hasDefaultValue: true }]), t2.functional(`inset-ring`, (t3) => {
      if (!t3.value) return t3.modifier ? void 0 : [c3(), U(`--tw-inset-ring-shadow`, a3(`1px`)), U(`box-shadow`, o3)];
      if (t3.value.kind === `arbitrary`) {
        let n3 = t3.value.value;
        switch (t3.value.dataType ?? b(n3, [`color`, `length`])) {
          case `length`:
            return t3.modifier ? void 0 : [c3(), U(`--tw-inset-ring-shadow`, a3(n3)), U(`box-shadow`, o3)];
          default:
            return n3 = J(n3, t3.modifier, e2), n3 === null ? void 0 : [U(`--tw-inset-ring-color`, n3)];
        }
      }
      {
        let n3 = Y(t3, e2, [`--ring-color`, `--color`]);
        if (n3) return [U(`--tw-inset-ring-color`, n3)];
      }
      {
        if (t3.modifier) return;
        let n3 = e2.resolve(t3.value.value, [`--ring-width`]);
        if (n3 === null && M(t3.value.value) && (n3 = `${t3.value.value}px`), n3) return [c3(), U(`--tw-inset-ring-shadow`, a3(n3)), U(`box-shadow`, o3)];
      }
    }), n2(`inset-ring`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--ring-color`, `--color`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`) }, { values: [`0`, `1`, `2`, `4`, `8`], valueThemeKeys: [`--ring-width`], hasDefaultValue: true }]);
    let u3 = `var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`;
    t2.functional(`ring-offset`, (t3) => {
      if (t3.value) {
        if (t3.value.kind === `arbitrary`) {
          let n3 = t3.value.value;
          switch (t3.value.dataType ?? b(n3, [`color`, `length`])) {
            case `length`:
              return t3.modifier ? void 0 : [U(`--tw-ring-offset-width`, n3), U(`--tw-ring-offset-shadow`, u3)];
            default:
              return n3 = J(n3, t3.modifier, e2), n3 === null ? void 0 : [U(`--tw-ring-offset-color`, n3)];
          }
        }
        {
          let n3 = e2.resolve(t3.value.value, [`--ring-offset-width`]);
          if (n3) return t3.modifier ? void 0 : [U(`--tw-ring-offset-width`, n3), U(`--tw-ring-offset-shadow`, u3)];
          if (M(t3.value.value)) return t3.modifier ? void 0 : [U(`--tw-ring-offset-width`, `${t3.value.value}px`), U(`--tw-ring-offset-shadow`, u3)];
        }
        {
          let n3 = Y(t3, e2, [`--ring-offset-color`, `--color`]);
          if (n3) return [U(`--tw-ring-offset-color`, n3)];
        }
      }
    });
  }
  return n2(`ring-offset`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--ring-offset-color`, `--color`], modifiers: Array.from({ length: 21 }, (e3, t3) => `${t3 * 5}`) }, { values: [`0`, `1`, `2`, `4`, `8`], valueThemeKeys: [`--ring-offset-width`] }]), t2.functional(`@container`, (e3) => {
    let t3 = null;
    if (e3.value === null ? t3 = `inline-size` : e3.value.kind === `arbitrary` ? t3 = e3.value.value : e3.value.kind === `named` && e3.value.value === `normal` && (t3 = `normal`), t3 !== null) return e3.modifier ? [U(`container-type`, t3), U(`container-name`, e3.modifier.value)] : [U(`container-type`, t3)];
  }), n2(`@container`, () => [{ values: [`normal`], valueThemeKeys: [], hasDefaultValue: true }]), t2;
}
var fn = [`number`, `integer`, `ratio`, `percentage`];
function pn(e2) {
  let t2 = e2.params;
  return on.test(t2) ? (n2) => {
    let r2 = { "--value": { usedSpacingInteger: false, usedSpacingNumber: false, themeKeys: /* @__PURE__ */ new Set(), literals: /* @__PURE__ */ new Set() }, "--modifier": { usedSpacingInteger: false, usedSpacingNumber: false, themeKeys: /* @__PURE__ */ new Set(), literals: /* @__PURE__ */ new Set() } };
    G(e2.nodes, (e3) => {
      if (e3.kind !== `declaration` || !e3.value || !e3.value.includes(`--value(`) && !e3.value.includes(`--modifier(`)) return;
      let t3 = z(e3.value);
      L(t3, (e4) => {
        if (e4.kind !== `function`) return;
        if (e4.value === `--spacing` && !(r2[`--modifier`].usedSpacingNumber && r2[`--value`].usedSpacingNumber)) return L(e4.nodes, (e5) => {
          var _a2, _b;
          if (e5.kind !== `function` || e5.value !== `--value` && e5.value !== `--modifier`) return;
          let t5 = e5.value;
          for (let n3 of e5.nodes) if (n3.kind === `word`) {
            if (n3.value === `integer`) (_a2 = r2[t5]).usedSpacingInteger || (_a2.usedSpacingInteger = true);
            else if (n3.value === `number` && ((_b = r2[t5]).usedSpacingNumber || (_b.usedSpacingNumber = true), r2[`--modifier`].usedSpacingNumber && r2[`--value`].usedSpacingNumber)) return 2;
          }
        }), 0;
        if (e4.value !== `--value` && e4.value !== `--modifier`) return;
        let t4 = v(R(e4.nodes), `,`);
        for (let [e5, n3] of t4.entries()) n3 = n3.replace(/\\\*/g, `*`), n3 = n3.replace(/--(.*?)\s--(.*?)/g, `--$1-*--$2`), n3 = n3.replace(/\s+/g, ``), n3 = n3.replace(/(-\*){2,}/g, `-*`), n3[0] === `-` && n3[1] === `-` && !n3.includes(`-*`) && (n3 += `-*`), t4[e5] = n3;
        e4.nodes = z(t4.join(`,`));
        for (let t5 of e4.nodes) if (t5.kind === `word` && (t5.value[0] === `"` || t5.value[0] === `'`) && t5.value[0] === t5.value[t5.value.length - 1]) {
          let n3 = t5.value.slice(1, -1);
          r2[e4.value].literals.add(n3);
        } else if (t5.kind === `word` && t5.value[0] === `-` && t5.value[1] === `-`) {
          let n3 = t5.value.replace(/-\*.*$/g, ``);
          r2[e4.value].themeKeys.add(n3);
        } else if (t5.kind === `word` && !(t5.value[0] === `[` && t5.value[t5.value.length - 1] === `]`) && !fn.includes(t5.value)) {
          console.warn(`Unsupported bare value data type: "${t5.value}".
Only valid data types are: ${fn.map((e5) => `"${e5}"`).join(`, `)}.
`);
          let n3 = t5.value, r3 = structuredClone(e4), i2 = `\xB6`;
          L(r3.nodes, (e5, { replaceWith: t6 }) => {
            e5.kind === `word` && e5.value === n3 && t6({ kind: `word`, value: i2 });
          });
          let a2 = `^`.repeat(R([t5]).length), o2 = R([r3]).indexOf(i2), s2 = ["```css", R([e4]), ` `.repeat(o2) + a2, "```"].join(`
`);
          console.warn(s2);
        }
      }), e3.value = R(t3);
    }), n2.utilities.functional(t2.slice(0, -2), (t3) => {
      let r3 = structuredClone(e2), i2 = t3.value, a2 = t3.modifier;
      if (i2 === null) return;
      let o2 = false, s2 = false, c2 = false, l2 = false, u2 = /* @__PURE__ */ new Map(), d2 = false;
      if (G([r3], (e3, { parent: t4, replaceWith: r4 }) => {
        if ((t4 == null ? void 0 : t4.kind) !== `rule` && (t4 == null ? void 0 : t4.kind) !== `at-rule` || e3.kind !== `declaration` || !e3.value) return;
        let f2 = z(e3.value);
        (L(f2, (f3, { replaceWith: p2 }) => {
          if (f3.kind === `function`) {
            if (f3.value === `--value`) {
              o2 = true;
              let a3 = mn(i2, f3, n2);
              return a3 ? (s2 = true, a3.ratio ? d2 = true : u2.set(e3, t4), p2(a3.nodes), 1) : (o2 || (o2 = false), r4([]), 2);
            } else if (f3.value === `--modifier`) {
              if (a2 === null) return r4([]), 2;
              c2 = true;
              let e4 = mn(a2, f3, n2);
              return e4 ? (l2 = true, p2(e4.nodes), 1) : (c2 || (c2 = false), r4([]), 2);
            }
          }
        }) ?? 0) === 0 && (e3.value = R(f2));
      }), o2 && !s2 || c2 && !l2 || d2 && l2 || a2 && !d2 && !l2) return null;
      if (d2) for (let [e3, t4] of u2) {
        let n3 = t4.nodes.indexOf(e3);
        n3 !== -1 && t4.nodes.splice(n3, 1);
      }
      return r3.nodes;
    }), n2.utilities.suggest(t2.slice(0, -2), () => {
      let e3 = [], t3 = [];
      for (let [i2, { literals: a2, usedSpacingNumber: o2, usedSpacingInteger: s2, themeKeys: c2 }] of [[e3, r2[`--value`]], [t3, r2[`--modifier`]]]) {
        for (let e4 of a2) i2.push(e4);
        if (o2) i2.push(...sn);
        else if (s2) for (let e4 of sn) M(e4) && i2.push(e4);
        for (let e4 of n2.theme.keysInNamespaces(c2)) i2.push(e4.replace(un, (e5, t4, n3) => `${t4}.${n3}`));
      }
      return [{ values: e3, modifiers: t3 }];
    });
  } : an.test(t2) ? (n2) => {
    n2.utilities.static(t2, () => structuredClone(e2.nodes));
  } : null;
}
function mn(e2, t2, n2) {
  for (let r2 of t2.nodes) {
    if (e2.kind === `named` && r2.kind === `word` && (r2.value[0] === `'` || r2.value[0] === `"`) && r2.value[r2.value.length - 1] === r2.value[0] && r2.value.slice(1, -1) === e2.value) return { nodes: z(e2.value) };
    if (e2.kind === `named` && r2.kind === `word` && r2.value[0] === `-` && r2.value[1] === `-`) {
      let t3 = r2.value;
      if (t3.endsWith(`-*`)) {
        t3 = t3.slice(0, -2);
        let r3 = n2.theme.resolve(e2.value, [t3]);
        if (r3) return { nodes: z(r3) };
      } else {
        let r3 = t3.split(`-*`);
        if (r3.length <= 1) continue;
        let i2 = [r3.shift()], a2 = n2.theme.resolveWith(e2.value, i2, r3);
        if (a2) {
          let [, e3 = {}] = a2;
          {
            let t4 = e3[r3.pop()];
            if (t4) return { nodes: z(t4) };
          }
        }
      }
    } else if (e2.kind === `named` && r2.kind === `word`) {
      if (!fn.includes(r2.value)) continue;
      let t3 = r2.value === `ratio` && `fraction` in e2 ? e2.fraction : e2.value;
      if (!t3) continue;
      let n3 = b(t3, [r2.value]);
      if (n3 === null) continue;
      if (n3 === `ratio`) {
        let [e3, n4] = v(t3, `/`);
        if (!M(e3) || !M(n4)) continue;
      } else if (n3 === `number` && !_e(t3) || n3 === `percentage` && !M(t3.slice(0, -1))) continue;
      return { nodes: z(t3), ratio: n3 === `ratio` };
    } else if (e2.kind === `arbitrary` && r2.kind === `word` && r2.value[0] === `[` && r2.value[r2.value.length - 1] === `]`) {
      let t3 = r2.value.slice(1, -1);
      if (t3 === `*`) return { nodes: z(e2.value) };
      if (`dataType` in e2 && e2.dataType && e2.dataType !== t3) continue;
      if (`dataType` in e2 && e2.dataType || b(e2.value, [t3]) !== null) return { nodes: z(e2.value) };
    }
  }
}
function X(e2, t2, n2, r2, i2 = ``) {
  let a2 = false, o2 = rn(t2, (e3) => n2 == null ? r2(e3) : e3.startsWith(`current`) ? r2(q(e3, n2)) : ((e3.startsWith(`var(`) || n2.startsWith(`var(`)) && (a2 = true), r2(ln(e3, n2))));
  function s2(e3) {
    return i2 ? v(e3, `,`).map((e4) => i2 + e4).join(`,`) : e3;
  }
  return a2 ? [U(e2, s2(rn(t2, r2))), H(`@supports (color: lab(from red l a b))`, [U(e2, s2(o2))])] : [U(e2, s2(o2))];
}
function hn(e2, t2, n2, r2, i2 = ``) {
  let a2 = false, o2 = v(t2, `,`).map((e3) => rn(e3, (e4) => n2 == null ? r2(e4) : e4.startsWith(`current`) ? r2(q(e4, n2)) : ((e4.startsWith(`var(`) || n2.startsWith(`var(`)) && (a2 = true), r2(ln(e4, n2))))).map((e3) => `drop-shadow(${e3})`).join(` `);
  return a2 ? [U(e2, i2 + v(t2, `,`).map((e3) => `drop-shadow(${rn(e3, r2)})`).join(` `)), H(`@supports (color: lab(from red l a b))`, [U(e2, i2 + o2)])] : [U(e2, i2 + o2)];
}
var gn = { "--alpha": _n, "--spacing": vn, "--theme": yn, theme: bn };
function _n(e2, t2, n2, ...r2) {
  let [i2, a2] = v(n2, `/`).map((e3) => e3.trim());
  if (!i2 || !a2) throw Error(`The --alpha(\u2026) function requires a color and an alpha value, e.g.: \`--alpha(${i2 || `var(--my-color)`} / ${a2 || `50%`})\``);
  if (r2.length > 0) throw Error(`The --alpha(\u2026) function only accepts one argument, e.g.: \`--alpha(${i2 || `var(--my-color)`} / ${a2 || `50%`})\``);
  return q(i2, a2);
}
function vn(e2, t2, n2, ...r2) {
  if (!n2) throw Error(`The --spacing(\u2026) function requires an argument, but received none.`);
  if (r2.length > 0) throw Error(`The --spacing(\u2026) function only accepts a single argument, but received ${r2.length + 1}.`);
  let i2 = e2.theme.resolve(null, [`--spacing`]);
  if (!i2) throw Error("The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found.");
  return `calc(${i2} * ${n2})`;
}
function yn(e2, t2, n2, ...r2) {
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
    let e3 = z(a2);
    return Tn(e3, o2), R(e3);
  }
  return a2;
}
function bn(e2, t2, n2, ...r2) {
  n2 = wn(n2);
  let i2 = e2.resolveThemeValue(n2);
  if (!i2 && r2.length > 0) return r2.join(`, `);
  if (!i2) throw Error(`Could not resolve value for theme function: \`theme(${n2})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);
  return i2;
}
var xn = new RegExp(Object.keys(gn).map((e2) => `${e2}\\(`).join(`|`));
function Sn(e2, t2) {
  let n2 = 0;
  return G(e2, (e3) => {
    if (e3.kind === `declaration` && e3.value && xn.test(e3.value)) {
      n2 |= 8, e3.value = Cn(e3.value, e3, t2);
      return;
    }
    e3.kind === `at-rule` && (e3.name === `@media` || e3.name === `@custom-media` || e3.name === `@container` || e3.name === `@supports`) && xn.test(e3.params) && (n2 |= 8, e3.params = Cn(e3.params, e3, t2));
  }), n2;
}
function Cn(e2, t2, n2) {
  let r2 = z(e2);
  return L(r2, (e3, { replaceWith: r3 }) => {
    if (e3.kind === `function` && e3.value in gn) {
      let i2 = v(R(e3.nodes).trim(), `,`).map((e4) => e4.trim()), a2 = gn[e3.value](n2, t2, ...i2);
      return r3(z(a2));
    }
  }), R(r2);
}
function wn(e2) {
  if (e2[0] !== `'` && e2[0] !== `"`) return e2;
  let t2 = ``, n2 = e2[0];
  for (let r2 = 1; r2 < e2.length - 1; r2++) {
    let i2 = e2[r2], a2 = e2[r2 + 1];
    i2 === `\\` && (a2 === n2 || a2 === `\\`) ? (t2 += a2, r2++) : t2 += i2;
  }
  return t2;
}
function Tn(e2, t2) {
  L(e2, (e3) => {
    if (e3.kind === `function` && !(e3.value !== `var` && e3.value !== `theme` && e3.value !== `--theme`)) if (e3.nodes.length === 1) e3.nodes.push({ kind: `word`, value: `, ${t2}` });
    else {
      let n2 = e3.nodes[e3.nodes.length - 1];
      n2.kind === `word` && n2.value === `initial` && (n2.value = t2);
    }
  });
}
function En(e2, t2) {
  let n2 = e2.length, r2 = t2.length, i2 = n2 < r2 ? n2 : r2;
  for (let n3 = 0; n3 < i2; n3++) {
    let r3 = e2.charCodeAt(n3), i3 = t2.charCodeAt(n3);
    if (r3 >= 48 && r3 <= 57 && i3 >= 48 && i3 <= 57) {
      let a2 = n3, o2 = n3 + 1, s2 = n3, c2 = n3 + 1;
      for (r3 = e2.charCodeAt(o2); r3 >= 48 && r3 <= 57; ) r3 = e2.charCodeAt(++o2);
      for (i3 = t2.charCodeAt(c2); i3 >= 48 && i3 <= 57; ) i3 = t2.charCodeAt(++c2);
      let l2 = e2.slice(a2, o2), u2 = t2.slice(s2, c2), d2 = Number(l2) - Number(u2);
      if (d2) return d2;
      if (l2 < u2) return -1;
      if (l2 > u2) return 1;
      continue;
    }
    if (r3 !== i3) return r3 - i3;
  }
  return e2.length - t2.length;
}
var Dn = /^\d+\/\d+$/;
function On(e2) {
  let t2 = new I((e3) => ({ name: e3, utility: e3, fraction: false, modifiers: [] }));
  for (let n3 of e2.utilities.keys(`static`)) {
    let e3 = t2.get(n3);
    e3.fraction = false, e3.modifiers = [];
  }
  for (let n3 of e2.utilities.keys(`functional`)) {
    let r2 = e2.utilities.getCompletions(n3);
    for (let e3 of r2) for (let r3 of e3.values) {
      let i2 = r3 !== null && Dn.test(r3), a2 = r3 === null ? n3 : `${n3}-${r3}`, o2 = t2.get(a2);
      if (o2.utility = n3, o2.fraction || (o2.fraction = i2), o2.modifiers.push(...e3.modifiers), e3.supportsNegative) {
        let r4 = t2.get(`-${a2}`);
        r4.utility = `-${n3}`, r4.fraction || (r4.fraction = i2), r4.modifiers.push(...e3.modifiers);
      }
    }
  }
  if (t2.size === 0) return [];
  let n2 = Array.from(t2.values());
  return n2.sort((e3, t3) => En(e3.name, t3.name)), kn(n2);
}
function kn(e2) {
  let t2 = [], n2 = null, r2 = /* @__PURE__ */ new Map(), i2 = new I(() => []);
  for (let a3 of e2) {
    let { utility: e3, fraction: o2 } = a3;
    n2 || (n2 = { utility: e3, items: [] }, r2.set(e3, n2)), e3 !== n2.utility && (t2.push(n2), n2 = { utility: e3, items: [] }, r2.set(e3, n2)), o2 ? i2.get(e3).push(a3) : n2.items.push(a3);
  }
  n2 && t2[t2.length - 1] !== n2 && t2.push(n2);
  for (let [e3, t3] of i2) {
    let n3 = r2.get(e3);
    n3 && n3.items.push(...t3);
  }
  let a2 = [];
  for (let e3 of t2) for (let t3 of e3.items) a2.push([t3.name, { modifiers: t3.modifiers }]);
  return a2;
}
function An(e2) {
  let t2 = [];
  for (let [r2, i2] of e2.variants.entries()) {
    let a2 = function({ value: t3, modifier: n3 } = {}) {
      let i3 = r2;
      t3 && (i3 += o2 ? `-${t3}` : t3), n3 && (i3 += `/${n3}`);
      let a3 = e2.parseVariant(i3);
      if (!a3) return [];
      let s3 = B(`.__placeholder__`, []);
      if (Hn(s3, a3, e2.variants) === null) return [];
      let c2 = [];
      return St(s3.nodes, (e3, { path: t4 }) => {
        if (e3.kind !== `rule` && e3.kind !== `at-rule` || e3.nodes.length > 0) return;
        t4.sort((e4, t5) => {
          let n5 = e4.kind === `at-rule`, r4 = t5.kind === `at-rule`;
          return n5 && !r4 ? -1 : !n5 && r4 ? 1 : 0;
        });
        let n4 = t4.flatMap((e4) => e4.kind === `rule` ? e4.selector === `&` ? [] : [e4.selector] : e4.kind === `at-rule` ? [`${e4.name} ${e4.params}`] : []), r3 = ``;
        for (let e4 = n4.length - 1; e4 >= 0; e4--) r3 = r3 === `` ? n4[e4] : `${n4[e4]} { ${r3} }`;
        c2.push(r3);
      }), c2;
    };
    var n2 = a2;
    if (i2.kind === `arbitrary`) continue;
    let o2 = r2 !== `@`, s2 = e2.variants.getCompletions(r2);
    switch (i2.kind) {
      case `static`:
        t2.push({ name: r2, values: s2, isArbitrary: false, hasDash: o2, selectors: a2 });
        break;
      case `functional`:
        t2.push({ name: r2, values: s2, isArbitrary: true, hasDash: o2, selectors: a2 });
        break;
      case `compound`:
        t2.push({ name: r2, values: s2, isArbitrary: true, hasDash: o2, selectors: a2 });
        break;
    }
  }
  return t2;
}
function jn(e2, t2) {
  var _a2;
  let { astNodes: n2, nodeSorting: r2 } = Bn(Array.from(t2), e2), i2 = new Map(t2.map((e3) => [e3, null])), a2 = 0n;
  for (let e3 of n2) {
    let t3 = (_a2 = r2.get(e3)) == null ? void 0 : _a2.candidate;
    t3 && i2.set(t3, i2.get(t3) ?? a2++);
  }
  return t2.map((e3) => [e3, i2.get(e3) ?? null]);
}
var Mn = /^@?[a-zA-Z0-9_-]*$/, Nn = class {
  constructor() {
    __publicField(this, "compareFns", /* @__PURE__ */ new Map());
    __publicField(this, "variants", /* @__PURE__ */ new Map());
    __publicField(this, "completions", /* @__PURE__ */ new Map());
    __publicField(this, "groupOrder", null);
    __publicField(this, "lastOrder", 0);
  }
  static(e2, t2, { compounds: n2, order: r2 } = {}) {
    this.set(e2, { kind: `static`, applyFn: t2, compoundsWith: 0, compounds: n2 ?? 2, order: r2 });
  }
  fromAst(e2, t2) {
    let n2 = [];
    G(t2, (e3) => {
      e3.kind === `rule` ? n2.push(e3.selector) : e3.kind === `at-rule` && e3.name !== `@slot` && n2.push(`${e3.name} ${e3.params}`);
    }), this.static(e2, (e3) => {
      let n3 = structuredClone(t2);
      Ln(n3, e3.nodes), e3.nodes = n3;
    }, { compounds: Pn(n2) });
  }
  functional(e2, t2, { compounds: n2, order: r2 } = {}) {
    this.set(e2, { kind: `functional`, applyFn: t2, compoundsWith: 0, compounds: n2 ?? 2, order: r2 });
  }
  compound(e2, t2, n2, { compounds: r2, order: i2 } = {}) {
    this.set(e2, { kind: `compound`, applyFn: n2, compoundsWith: t2, compounds: r2 ?? 2, order: i2 });
  }
  group(e2, t2) {
    this.groupOrder = this.nextOrder(), t2 && this.compareFns.set(this.groupOrder, t2), e2(), this.groupOrder = null;
  }
  has(e2) {
    return this.variants.has(e2);
  }
  get(e2) {
    return this.variants.get(e2);
  }
  kind(e2) {
    var _a2;
    return (_a2 = this.variants.get(e2)) == null ? void 0 : _a2.kind;
  }
  compoundsWith(e2, t2) {
    let n2 = this.variants.get(e2), r2 = typeof t2 == `string` ? this.variants.get(t2) : t2.kind === `arbitrary` ? { compounds: Pn([t2.selector]) } : this.variants.get(t2.root);
    return !(!n2 || !r2 || n2.kind !== `compound` || r2.compounds === 0 || n2.compoundsWith === 0 || (n2.compoundsWith & r2.compounds) === 0);
  }
  suggest(e2, t2) {
    this.completions.set(e2, t2);
  }
  getCompletions(e2) {
    var _a2;
    return ((_a2 = this.completions.get(e2)) == null ? void 0 : _a2()) ?? [];
  }
  compare(e2, t2) {
    if (e2 === t2) return 0;
    if (e2 === null) return -1;
    if (t2 === null) return 1;
    if (e2.kind === `arbitrary` && t2.kind === `arbitrary`) return e2.selector < t2.selector ? -1 : 1;
    if (e2.kind === `arbitrary`) return 1;
    if (t2.kind === `arbitrary`) return -1;
    let n2 = this.variants.get(e2.root).order, r2 = this.variants.get(t2.root).order, i2 = n2 - r2;
    if (i2 !== 0) return i2;
    if (e2.kind === `compound` && t2.kind === `compound`) {
      let n3 = this.compare(e2.variant, t2.variant);
      return n3 === 0 ? e2.modifier && t2.modifier ? e2.modifier.value < t2.modifier.value ? -1 : 1 : e2.modifier ? 1 : t2.modifier ? -1 : 0 : n3;
    }
    let a2 = this.compareFns.get(n2);
    if (a2 !== void 0) return a2(e2, t2);
    if (e2.root !== t2.root) return e2.root < t2.root ? -1 : 1;
    let o2 = e2.value, s2 = t2.value;
    return o2 === null ? -1 : s2 === null || o2.kind === `arbitrary` && s2.kind !== `arbitrary` ? 1 : o2.kind !== `arbitrary` && s2.kind === `arbitrary` || o2.value < s2.value ? -1 : 1;
  }
  keys() {
    return this.variants.keys();
  }
  entries() {
    return this.variants.entries();
  }
  set(e2, { kind: t2, applyFn: n2, compounds: r2, compoundsWith: i2, order: a2 }) {
    let o2 = this.variants.get(e2);
    o2 ? Object.assign(o2, { kind: t2, applyFn: n2, compounds: r2 }) : (a2 === void 0 && (this.lastOrder = this.nextOrder(), a2 = this.lastOrder), this.variants.set(e2, { kind: t2, applyFn: n2, order: a2, compoundsWith: i2, compounds: r2 }));
  }
  nextOrder() {
    return this.groupOrder ?? this.lastOrder + 1;
  }
};
function Pn(e2) {
  let t2 = 0;
  for (let n2 of e2) {
    if (n2[0] === `@`) {
      if (!n2.startsWith(`@media`) && !n2.startsWith(`@supports`) && !n2.startsWith(`@container`)) return 0;
      t2 |= 1;
      continue;
    }
    if (n2.includes(`::`)) return 0;
    t2 |= 2;
  }
  return t2;
}
function Fn(e2) {
  let t2 = new Nn();
  function n2(e3, n3, { compounds: r3 } = {}) {
    r3 ?? (r3 = Pn(n3)), t2.static(e3, (e4) => {
      e4.nodes = n3.map((t3) => H(t3, e4.nodes));
    }, { compounds: r3 });
  }
  n2(`*`, [`:is(& > *)`], { compounds: 0 }), n2(`**`, [`:is(& *)`], { compounds: 0 });
  function r2(e3, t3) {
    return t3.map((t4) => {
      t4 = t4.trim();
      let n3 = v(t4, ` `);
      return n3[0] === `not` ? n3.slice(1).join(` `) : e3 === `@container` ? n3[0][0] === `(` ? `not ${t4}` : n3[1] === `not` ? `${n3[0]} ${n3.slice(2).join(` `)}` : `${n3[0]} not ${n3.slice(1).join(` `)}` : `not ${t4}`;
    });
  }
  let i2 = [`@media`, `@supports`, `@container`];
  function a2(e3) {
    for (let t3 of i2) {
      if (t3 !== e3.name) continue;
      let n3 = v(e3.params, `,`);
      return n3.length > 1 ? null : (n3 = r2(e3.name, n3), V(e3.name, n3.join(`, `)));
    }
    return null;
  }
  function o2(e3) {
    return e3.includes(`::`) ? null : `&:not(${v(e3, `,`).map((e4) => (e4 = e4.replaceAll(`&`, `*`), e4)).join(`, `)})`;
  }
  t2.compound(`not`, 3, (e3, t3) => {
    if (t3.variant.kind === `arbitrary` && t3.variant.relative || t3.modifier) return null;
    let n3 = false;
    if (G([e3], (t4, { path: r3 }) => {
      if (t4.kind !== `rule` && t4.kind !== `at-rule` || t4.nodes.length > 0) return 0;
      let i3 = [], s3 = [];
      for (let e4 of r3) e4.kind === `at-rule` ? i3.push(e4) : e4.kind === `rule` && s3.push(e4);
      if (i3.length > 1 || s3.length > 1) return 2;
      let c3 = [];
      for (let e4 of s3) {
        let t5 = o2(e4.selector);
        if (!t5) return n3 = false, 2;
        c3.push(B(t5, []));
      }
      for (let e4 of i3) {
        let t5 = a2(e4);
        if (!t5) return n3 = false, 2;
        c3.push(t5);
      }
      return Object.assign(e3, B(`&`, c3)), n3 = true, 1;
    }), e3.kind === `rule` && e3.selector === `&` && e3.nodes.length === 1 && Object.assign(e3, e3.nodes[0]), !n3) return null;
  }), t2.suggest(`not`, () => Array.from(t2.keys()).filter((e3) => t2.compoundsWith(`not`, e3))), t2.compound(`group`, 2, (t3, n3) => {
    if (n3.variant.kind === `arbitrary` && n3.variant.relative) return null;
    let r3 = n3.modifier ? `:where(.${e2.prefix ? `${e2.prefix}\\:` : ``}group\\/${n3.modifier.value})` : `:where(.${e2.prefix ? `${e2.prefix}\\:` : ``}group)`, i3 = false;
    if (G([t3], (e3, { path: t4 }) => {
      if (e3.kind !== `rule`) return 0;
      for (let e4 of t4.slice(0, -1)) if (e4.kind === `rule`) return i3 = false, 2;
      let n4 = e3.selector.replaceAll(`&`, r3);
      v(n4, `,`).length > 1 && (n4 = `:is(${n4})`), e3.selector = `&:is(${n4} *)`, i3 = true;
    }), !i3) return null;
  }), t2.suggest(`group`, () => Array.from(t2.keys()).filter((e3) => t2.compoundsWith(`group`, e3))), t2.compound(`peer`, 2, (t3, n3) => {
    if (n3.variant.kind === `arbitrary` && n3.variant.relative) return null;
    let r3 = n3.modifier ? `:where(.${e2.prefix ? `${e2.prefix}\\:` : ``}peer\\/${n3.modifier.value})` : `:where(.${e2.prefix ? `${e2.prefix}\\:` : ``}peer)`, i3 = false;
    if (G([t3], (e3, { path: t4 }) => {
      if (e3.kind !== `rule`) return 0;
      for (let e4 of t4.slice(0, -1)) if (e4.kind === `rule`) return i3 = false, 2;
      let n4 = e3.selector.replaceAll(`&`, r3);
      v(n4, `,`).length > 1 && (n4 = `:is(${n4})`), e3.selector = `&:is(${n4} ~ *)`, i3 = true;
    }), !i3) return null;
  }), t2.suggest(`peer`, () => Array.from(t2.keys()).filter((e3) => t2.compoundsWith(`peer`, e3))), n2(`first-letter`, [`&::first-letter`]), n2(`first-line`, [`&::first-line`]), n2(`marker`, [`& *::marker`, `&::marker`, `& *::-webkit-details-marker`, `&::-webkit-details-marker`]), n2(`selection`, [`& *::selection`, `&::selection`]), n2(`file`, [`&::file-selector-button`]), n2(`placeholder`, [`&::placeholder`]), n2(`backdrop`, [`&::backdrop`]), n2(`details-content`, [`&::details-content`]);
  {
    let e3 = function() {
      return W([V(`@property`, `--tw-content`, [U(`syntax`, `"*"`), U(`initial-value`, `""`), U(`inherits`, `false`)])]);
    };
    var s2 = e3;
    t2.static(`before`, (t3) => {
      t3.nodes = [B(`&::before`, [e3(), U(`content`, `var(--tw-content)`), ...t3.nodes])];
    }, { compounds: 0 }), t2.static(`after`, (t3) => {
      t3.nodes = [B(`&::after`, [e3(), U(`content`, `var(--tw-content)`), ...t3.nodes])];
    }, { compounds: 0 });
  }
  n2(`first`, [`&:first-child`]), n2(`last`, [`&:last-child`]), n2(`only`, [`&:only-child`]), n2(`odd`, [`&:nth-child(odd)`]), n2(`even`, [`&:nth-child(even)`]), n2(`first-of-type`, [`&:first-of-type`]), n2(`last-of-type`, [`&:last-of-type`]), n2(`only-of-type`, [`&:only-of-type`]), n2(`visited`, [`&:visited`]), n2(`target`, [`&:target`]), n2(`open`, [`&:is([open], :popover-open, :open)`]), n2(`default`, [`&:default`]), n2(`checked`, [`&:checked`]), n2(`indeterminate`, [`&:indeterminate`]), n2(`placeholder-shown`, [`&:placeholder-shown`]), n2(`autofill`, [`&:autofill`]), n2(`optional`, [`&:optional`]), n2(`required`, [`&:required`]), n2(`valid`, [`&:valid`]), n2(`invalid`, [`&:invalid`]), n2(`user-valid`, [`&:user-valid`]), n2(`user-invalid`, [`&:user-invalid`]), n2(`in-range`, [`&:in-range`]), n2(`out-of-range`, [`&:out-of-range`]), n2(`read-only`, [`&:read-only`]), n2(`empty`, [`&:empty`]), n2(`focus-within`, [`&:focus-within`]), t2.static(`hover`, (e3) => {
    e3.nodes = [B(`&:hover`, [V(`@media`, `(hover: hover)`, e3.nodes)])];
  }), n2(`focus`, [`&:focus`]), n2(`focus-visible`, [`&:focus-visible`]), n2(`active`, [`&:active`]), n2(`enabled`, [`&:enabled`]), n2(`disabled`, [`&:disabled`]), n2(`inert`, [`&:is([inert], [inert] *)`]), t2.compound(`in`, 2, (e3, t3) => {
    if (t3.modifier) return null;
    let n3 = false;
    if (G([e3], (e4, { path: t4 }) => {
      if (e4.kind !== `rule`) return 0;
      for (let e5 of t4.slice(0, -1)) if (e5.kind === `rule`) return n3 = false, 2;
      e4.selector = `:where(${e4.selector.replaceAll(`&`, `*`)}) &`, n3 = true;
    }), !n3) return null;
  }), t2.suggest(`in`, () => Array.from(t2.keys()).filter((e3) => t2.compoundsWith(`in`, e3))), t2.compound(`has`, 2, (e3, t3) => {
    if (t3.modifier) return null;
    let n3 = false;
    if (G([e3], (e4, { path: t4 }) => {
      if (e4.kind !== `rule`) return 0;
      for (let e5 of t4.slice(0, -1)) if (e5.kind === `rule`) return n3 = false, 2;
      e4.selector = `&:has(${e4.selector.replaceAll(`&`, `*`)})`, n3 = true;
    }), !n3) return null;
  }), t2.suggest(`has`, () => Array.from(t2.keys()).filter((e3) => t2.compoundsWith(`has`, e3))), t2.functional(`aria`, (e3, t3) => {
    if (!t3.value || t3.modifier) return null;
    t3.value.kind === `arbitrary` ? e3.nodes = [B(`&[aria-${In(t3.value.value)}]`, e3.nodes)] : e3.nodes = [B(`&[aria-${t3.value.value}="true"]`, e3.nodes)];
  }), t2.suggest(`aria`, () => [`busy`, `checked`, `disabled`, `expanded`, `hidden`, `pressed`, `readonly`, `required`, `selected`]), t2.functional(`data`, (e3, t3) => {
    if (!t3.value || t3.modifier) return null;
    e3.nodes = [B(`&[data-${In(t3.value.value)}]`, e3.nodes)];
  }), t2.functional(`nth`, (e3, t3) => {
    if (!t3.value || t3.modifier || t3.value.kind === `named` && !M(t3.value.value)) return null;
    e3.nodes = [B(`&:nth-child(${t3.value.value})`, e3.nodes)];
  }), t2.functional(`nth-last`, (e3, t3) => {
    if (!t3.value || t3.modifier || t3.value.kind === `named` && !M(t3.value.value)) return null;
    e3.nodes = [B(`&:nth-last-child(${t3.value.value})`, e3.nodes)];
  }), t2.functional(`nth-of-type`, (e3, t3) => {
    if (!t3.value || t3.modifier || t3.value.kind === `named` && !M(t3.value.value)) return null;
    e3.nodes = [B(`&:nth-of-type(${t3.value.value})`, e3.nodes)];
  }), t2.functional(`nth-last-of-type`, (e3, t3) => {
    if (!t3.value || t3.modifier || t3.value.kind === `named` && !M(t3.value.value)) return null;
    e3.nodes = [B(`&:nth-last-of-type(${t3.value.value})`, e3.nodes)];
  }), t2.functional(`supports`, (e3, t3) => {
    if (!t3.value || t3.modifier) return null;
    let n3 = t3.value.value;
    if (n3 === null) return null;
    if (/^[\w-]*\s*\(/.test(n3)) {
      let t4 = n3.replace(/\b(and|or|not)\b/g, ` $1 `);
      e3.nodes = [V(`@supports`, t4, e3.nodes)];
      return;
    }
    n3.includes(`:`) || (n3 = `${n3}: var(--tw)`), (n3[0] !== `(` || n3[n3.length - 1] !== `)`) && (n3 = `(${n3})`), e3.nodes = [V(`@supports`, n3, e3.nodes)];
  }, { compounds: 1 }), n2(`motion-safe`, [`@media (prefers-reduced-motion: no-preference)`]), n2(`motion-reduce`, [`@media (prefers-reduced-motion: reduce)`]), n2(`contrast-more`, [`@media (prefers-contrast: more)`]), n2(`contrast-less`, [`@media (prefers-contrast: less)`]);
  {
    let n3 = function(e3, t3, n4, r3) {
      if (e3 === t3) return 0;
      let i3 = r3.get(e3);
      if (i3 === null) return n4 === `asc` ? -1 : 1;
      let a3 = r3.get(t3);
      return a3 === null ? n4 === `asc` ? 1 : -1 : en(i3, a3, n4);
    };
    var c2 = n3;
    {
      let r3 = e2.namespace(`--breakpoint`), i3 = new I((t3) => {
        switch (t3.kind) {
          case `static`:
            return e2.resolveValue(t3.root, [`--breakpoint`]) ?? null;
          case `functional`: {
            if (!t3.value || t3.modifier) return null;
            let n4 = null;
            return t3.value.kind === `arbitrary` ? n4 = t3.value.value : t3.value.kind === `named` && (n4 = e2.resolveValue(t3.value.value, [`--breakpoint`])), !n4 || n4.includes(`var(`) ? null : n4;
          }
          case `arbitrary`:
          case `compound`:
            return null;
        }
      });
      t2.group(() => {
        t2.functional(`max`, (e3, t3) => {
          if (t3.modifier) return null;
          let n4 = i3.get(t3);
          if (n4 === null) return null;
          e3.nodes = [V(`@media`, `(width < ${n4})`, e3.nodes)];
        }, { compounds: 1 });
      }, (e3, t3) => n3(e3, t3, `desc`, i3)), t2.suggest(`max`, () => Array.from(r3.keys()).filter((e3) => e3 !== null)), t2.group(() => {
        for (let [n4, r4] of e2.namespace(`--breakpoint`)) n4 !== null && t2.static(n4, (e3) => {
          e3.nodes = [V(`@media`, `(width >= ${r4})`, e3.nodes)];
        }, { compounds: 1 });
        t2.functional(`min`, (e3, t3) => {
          if (t3.modifier) return null;
          let n4 = i3.get(t3);
          if (n4 === null) return null;
          e3.nodes = [V(`@media`, `(width >= ${n4})`, e3.nodes)];
        }, { compounds: 1 });
      }, (e3, t3) => n3(e3, t3, `asc`, i3)), t2.suggest(`min`, () => Array.from(r3.keys()).filter((e3) => e3 !== null));
    }
    {
      let r3 = e2.namespace(`--container`), i3 = new I((t3) => {
        switch (t3.kind) {
          case `functional`: {
            if (t3.value === null) return null;
            let n4 = null;
            return t3.value.kind === `arbitrary` ? n4 = t3.value.value : t3.value.kind === `named` && (n4 = e2.resolveValue(t3.value.value, [`--container`])), !n4 || n4.includes(`var(`) ? null : n4;
          }
          case `static`:
          case `arbitrary`:
          case `compound`:
            return null;
        }
      });
      t2.group(() => {
        t2.functional(`@max`, (e3, t3) => {
          let n4 = i3.get(t3);
          if (n4 === null) return null;
          e3.nodes = [V(`@container`, t3.modifier ? `${t3.modifier.value} (width < ${n4})` : `(width < ${n4})`, e3.nodes)];
        }, { compounds: 1 });
      }, (e3, t3) => n3(e3, t3, `desc`, i3)), t2.suggest(`@max`, () => Array.from(r3.keys()).filter((e3) => e3 !== null)), t2.group(() => {
        t2.functional(`@`, (e3, t3) => {
          let n4 = i3.get(t3);
          if (n4 === null) return null;
          e3.nodes = [V(`@container`, t3.modifier ? `${t3.modifier.value} (width >= ${n4})` : `(width >= ${n4})`, e3.nodes)];
        }, { compounds: 1 }), t2.functional(`@min`, (e3, t3) => {
          let n4 = i3.get(t3);
          if (n4 === null) return null;
          e3.nodes = [V(`@container`, t3.modifier ? `${t3.modifier.value} (width >= ${n4})` : `(width >= ${n4})`, e3.nodes)];
        }, { compounds: 1 });
      }, (e3, t3) => n3(e3, t3, `asc`, i3)), t2.suggest(`@min`, () => Array.from(r3.keys()).filter((e3) => e3 !== null)), t2.suggest(`@`, () => Array.from(r3.keys()).filter((e3) => e3 !== null));
    }
  }
  return n2(`portrait`, [`@media (orientation: portrait)`]), n2(`landscape`, [`@media (orientation: landscape)`]), n2(`ltr`, [`&:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)`]), n2(`rtl`, [`&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)`]), n2(`dark`, [`@media (prefers-color-scheme: dark)`]), n2(`starting`, [`@starting-style`]), n2(`print`, [`@media print`]), n2(`forced-colors`, [`@media (forced-colors: active)`]), n2(`inverted-colors`, [`@media (inverted-colors: inverted)`]), n2(`pointer-none`, [`@media (pointer: none)`]), n2(`pointer-coarse`, [`@media (pointer: coarse)`]), n2(`pointer-fine`, [`@media (pointer: fine)`]), n2(`any-pointer-none`, [`@media (any-pointer: none)`]), n2(`any-pointer-coarse`, [`@media (any-pointer: coarse)`]), n2(`any-pointer-fine`, [`@media (any-pointer: fine)`]), n2(`noscript`, [`@media (scripting: none)`]), t2;
}
function In(e2) {
  if (e2.includes(`=`)) {
    let [t2, ...n2] = v(e2, `=`), r2 = n2.join(`=`).trim();
    if (r2[0] === `'` || r2[0] === `"`) return e2;
    if (r2.length > 1) {
      let e3 = r2[r2.length - 1];
      if (r2[r2.length - 2] === ` ` && (e3 === `i` || e3 === `I` || e3 === `s` || e3 === `S`)) return `${t2}="${r2.slice(0, -2)}" ${e3}`;
    }
    return `${t2}="${r2}"`;
  }
  return e2;
}
function Ln(e2, t2) {
  G(e2, (e3, { replaceWith: n2 }) => {
    if (e3.kind === `at-rule` && e3.name === `@slot`) n2(t2);
    else if (e3.kind === `at-rule` && (e3.name === `@keyframes` || e3.name === `@property`)) return Object.assign(e3, W([V(e3.name, e3.params, e3.nodes)])), 1;
  });
}
function Rn(e2) {
  let t2 = dn(e2), n2 = Fn(e2), r2 = new I((e3) => Bt(e3, s2)), i2 = new I((e3) => Array.from(Rt(e3, s2))), a2 = new I((e3) => {
    let t3 = Vn(e3, s2);
    try {
      Sn(t3.map(({ node: e4 }) => e4), s2);
    } catch {
      return [];
    }
    return t3;
  }), o2 = new I((t3) => {
    for (let n3 of vt(t3)) e2.markUsedVariable(n3);
  }), s2 = { theme: e2, utilities: t2, variants: n2, invalidCandidates: /* @__PURE__ */ new Set(), important: false, candidatesToCss(e3) {
    let t3 = [];
    for (let n3 of e3) {
      let e4 = false, { astNodes: r3 } = Bn([n3], this, { onInvalidCandidate() {
        e4 = true;
      } });
      r3 = Ct(r3, s2, 0), r3.length === 0 || e4 ? t3.push(null) : t3.push(wt(r3));
    }
    return t3;
  }, getClassOrder(e3) {
    return jn(this, e3);
  }, getClassList() {
    return On(this);
  }, getVariants() {
    return An(this);
  }, parseCandidate(e3) {
    return i2.get(e3);
  }, parseVariant(e3) {
    return r2.get(e3);
  }, compileAstNodes(e3) {
    return a2.get(e3);
  }, printCandidate(e3) {
    return Ht(s2, e3);
  }, printVariant(e3) {
    return Wt(e3);
  }, getVariantOrder() {
    let e3 = Array.from(r2.values());
    e3.sort((e4, t4) => this.variants.compare(e4, t4));
    let t3 = /* @__PURE__ */ new Map(), n3, i3 = 0;
    for (let r3 of e3) r3 !== null && (n3 !== void 0 && this.variants.compare(n3, r3) !== 0 && i3++, t3.set(r3, i3), n3 = r3);
    return t3;
  }, resolveThemeValue(t3, n3 = true) {
    let r3 = t3.lastIndexOf(`/`), i3 = null;
    r3 !== -1 && (i3 = t3.slice(r3 + 1).trim(), t3 = t3.slice(0, r3).trim());
    let a3 = e2.resolve(null, [t3], n3 ? 1 : 0) ?? void 0;
    return i3 && a3 ? q(a3, i3) : a3;
  }, trackUsedVariables(e3) {
    o2.get(e3);
  } };
  return s2;
}
var zn = `container-type.pointer-events.visibility.position.inset.inset-inline.inset-block.inset-inline-start.inset-inline-end.top.right.bottom.left.isolation.z-index.order.grid-column.grid-column-start.grid-column-end.grid-row.grid-row-start.grid-row-end.float.clear.--tw-container-component.margin.margin-inline.margin-block.margin-inline-start.margin-inline-end.margin-top.margin-right.margin-bottom.margin-left.box-sizing.display.field-sizing.aspect-ratio.height.max-height.min-height.width.max-width.min-width.flex.flex-shrink.flex-grow.flex-basis.table-layout.caption-side.border-collapse.border-spacing.transform-origin.translate.--tw-translate-x.--tw-translate-y.--tw-translate-z.scale.--tw-scale-x.--tw-scale-y.--tw-scale-z.rotate.--tw-rotate-x.--tw-rotate-y.--tw-rotate-z.--tw-skew-x.--tw-skew-y.transform.animation.cursor.touch-action.--tw-pan-x.--tw-pan-y.--tw-pinch-zoom.resize.scroll-snap-type.--tw-scroll-snap-strictness.scroll-snap-align.scroll-snap-stop.scroll-margin.scroll-margin-inline.scroll-margin-block.scroll-margin-inline-start.scroll-margin-inline-end.scroll-margin-top.scroll-margin-right.scroll-margin-bottom.scroll-margin-left.scroll-padding.scroll-padding-inline.scroll-padding-block.scroll-padding-inline-start.scroll-padding-inline-end.scroll-padding-top.scroll-padding-right.scroll-padding-bottom.scroll-padding-left.list-style-position.list-style-type.list-style-image.appearance.columns.break-before.break-inside.break-after.grid-auto-columns.grid-auto-flow.grid-auto-rows.grid-template-columns.grid-template-rows.flex-direction.flex-wrap.place-content.place-items.align-content.align-items.justify-content.justify-items.gap.column-gap.row-gap.--tw-space-x-reverse.--tw-space-y-reverse.divide-x-width.divide-y-width.--tw-divide-y-reverse.divide-style.divide-color.place-self.align-self.justify-self.overflow.overflow-x.overflow-y.overscroll-behavior.overscroll-behavior-x.overscroll-behavior-y.scroll-behavior.border-radius.border-start-radius.border-end-radius.border-top-radius.border-right-radius.border-bottom-radius.border-left-radius.border-start-start-radius.border-start-end-radius.border-end-end-radius.border-end-start-radius.border-top-left-radius.border-top-right-radius.border-bottom-right-radius.border-bottom-left-radius.border-width.border-inline-width.border-block-width.border-inline-start-width.border-inline-end-width.border-top-width.border-right-width.border-bottom-width.border-left-width.border-style.border-inline-style.border-block-style.border-inline-start-style.border-inline-end-style.border-top-style.border-right-style.border-bottom-style.border-left-style.border-color.border-inline-color.border-block-color.border-inline-start-color.border-inline-end-color.border-top-color.border-right-color.border-bottom-color.border-left-color.background-color.background-image.--tw-gradient-position.--tw-gradient-stops.--tw-gradient-via-stops.--tw-gradient-from.--tw-gradient-from-position.--tw-gradient-via.--tw-gradient-via-position.--tw-gradient-to.--tw-gradient-to-position.mask-image.--tw-mask-top.--tw-mask-top-from-color.--tw-mask-top-from-position.--tw-mask-top-to-color.--tw-mask-top-to-position.--tw-mask-right.--tw-mask-right-from-color.--tw-mask-right-from-position.--tw-mask-right-to-color.--tw-mask-right-to-position.--tw-mask-bottom.--tw-mask-bottom-from-color.--tw-mask-bottom-from-position.--tw-mask-bottom-to-color.--tw-mask-bottom-to-position.--tw-mask-left.--tw-mask-left-from-color.--tw-mask-left-from-position.--tw-mask-left-to-color.--tw-mask-left-to-position.--tw-mask-linear.--tw-mask-linear-position.--tw-mask-linear-from-color.--tw-mask-linear-from-position.--tw-mask-linear-to-color.--tw-mask-linear-to-position.--tw-mask-radial.--tw-mask-radial-shape.--tw-mask-radial-size.--tw-mask-radial-position.--tw-mask-radial-from-color.--tw-mask-radial-from-position.--tw-mask-radial-to-color.--tw-mask-radial-to-position.--tw-mask-conic.--tw-mask-conic-position.--tw-mask-conic-from-color.--tw-mask-conic-from-position.--tw-mask-conic-to-color.--tw-mask-conic-to-position.box-decoration-break.background-size.background-attachment.background-clip.background-position.background-repeat.background-origin.mask-composite.mask-mode.mask-type.mask-size.mask-clip.mask-position.mask-repeat.mask-origin.fill.stroke.stroke-width.object-fit.object-position.padding.padding-inline.padding-block.padding-inline-start.padding-inline-end.padding-top.padding-right.padding-bottom.padding-left.text-align.text-indent.vertical-align.font-family.font-size.line-height.font-weight.letter-spacing.text-wrap.overflow-wrap.word-break.text-overflow.hyphens.white-space.color.text-transform.font-style.font-stretch.font-variant-numeric.text-decoration-line.text-decoration-color.text-decoration-style.text-decoration-thickness.text-underline-offset.-webkit-font-smoothing.placeholder-color.caret-color.accent-color.color-scheme.opacity.background-blend-mode.mix-blend-mode.box-shadow.--tw-shadow.--tw-shadow-color.--tw-ring-shadow.--tw-ring-color.--tw-inset-shadow.--tw-inset-shadow-color.--tw-inset-ring-shadow.--tw-inset-ring-color.--tw-ring-offset-width.--tw-ring-offset-color.outline.outline-width.outline-offset.outline-color.--tw-blur.--tw-brightness.--tw-contrast.--tw-drop-shadow.--tw-grayscale.--tw-hue-rotate.--tw-invert.--tw-saturate.--tw-sepia.filter.--tw-backdrop-blur.--tw-backdrop-brightness.--tw-backdrop-contrast.--tw-backdrop-grayscale.--tw-backdrop-hue-rotate.--tw-backdrop-invert.--tw-backdrop-opacity.--tw-backdrop-saturate.--tw-backdrop-sepia.backdrop-filter.transition-property.transition-behavior.transition-delay.transition-duration.transition-timing-function.will-change.contain.content.forced-color-adjust`.split(`.`);
function Bn(e2, t2, { onInvalidCandidate: n2 } = {}) {
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
      if (s3.length !== 0) {
        a3 = true;
        for (let { node: t3, propertySort: a4 } of s3) {
          let s4 = 0n;
          for (let e4 of n3.variants) s4 |= 1n << BigInt(o2.get(e4));
          r2.set(t3, { properties: a4, variants: s4, candidate: e3 }), i2.push(t3);
        }
      }
    }
    a3 || (n2 == null ? void 0 : n2(e3));
  }
  return i2.sort((e3, t3) => {
    let n3 = r2.get(e3), i3 = r2.get(t3);
    if (n3.variants - i3.variants !== 0n) return Number(n3.variants - i3.variants);
    let a3 = 0;
    for (; a3 < n3.properties.order.length && a3 < i3.properties.order.length && n3.properties.order[a3] === i3.properties.order[a3]; ) a3 += 1;
    return (n3.properties.order[a3] ?? 1 / 0) - (i3.properties.order[a3] ?? 1 / 0) || i3.properties.count - n3.properties.count || En(n3.candidate, i3.candidate);
  }), { astNodes: i2, nodeSorting: r2 };
}
function Vn(e2, t2) {
  let n2 = Wn(e2, t2);
  if (n2.length === 0) return [];
  let r2 = [], i2 = `.${Xe(e2.raw)}`;
  for (let a2 of n2) {
    let n3 = Kn(a2);
    (e2.important || t2.important) && Gn(a2);
    let o2 = { kind: `rule`, selector: i2, nodes: a2 };
    for (let n4 of e2.variants) if (Hn(o2, n4, t2.variants) === null) return [];
    r2.push({ node: o2, propertySort: n3 });
  }
  return r2;
}
function Hn(e2, t2, n2, r2 = 0) {
  if (t2.kind === `arbitrary`) {
    if (t2.relative && r2 === 0) return null;
    e2.nodes = [H(t2.selector, e2.nodes)];
    return;
  }
  let { applyFn: i2 } = n2.get(t2.root);
  if (t2.kind === `compound`) {
    let a2 = V(`@slot`);
    if (Hn(a2, t2.variant, n2, r2 + 1) === null || t2.root === `not` && a2.nodes.length > 1) return null;
    for (let e3 of a2.nodes) if (e3.kind !== `rule` && e3.kind !== `at-rule` || i2(e3, t2) === null) return null;
    G(a2.nodes, (t3) => {
      if ((t3.kind === `rule` || t3.kind === `at-rule`) && t3.nodes.length <= 0) return t3.nodes = e2.nodes, 1;
    }), e2.nodes = a2.nodes;
    return;
  }
  if (i2(e2, t2) === null) return null;
}
function Un(e2) {
  var _a2;
  let t2 = ((_a2 = e2.options) == null ? void 0 : _a2.types) ?? [];
  return t2.length > 1 && t2.includes(`any`);
}
function Wn(e2, t2) {
  if (e2.kind === `arbitrary`) {
    let n3 = e2.value;
    return e2.modifier && (n3 = J(n3, e2.modifier, t2.theme)), n3 === null ? [] : [[U(e2.property, n3)]];
  }
  let n2 = t2.utilities.get(e2.root) ?? [], r2 = [], i2 = n2.filter((e3) => !Un(e3));
  for (let t3 of i2) {
    if (t3.kind !== e2.kind) continue;
    let n3 = t3.compileFn(e2);
    if (n3 !== void 0) {
      if (n3 === null) return r2;
      r2.push(n3);
    }
  }
  if (r2.length > 0) return r2;
  let a2 = n2.filter((e3) => Un(e3));
  for (let t3 of a2) {
    if (t3.kind !== e2.kind) continue;
    let n3 = t3.compileFn(e2);
    if (n3 !== void 0) {
      if (n3 === null) return r2;
      r2.push(n3);
    }
  }
  return r2;
}
function Gn(e2) {
  for (let t2 of e2) t2.kind !== `at-root` && (t2.kind === `declaration` ? t2.important = true : (t2.kind === `rule` || t2.kind === `at-rule`) && Gn(t2.nodes));
}
function Kn(e2) {
  let t2 = /* @__PURE__ */ new Set(), n2 = 0, r2 = e2.slice(), i2 = false;
  for (; r2.length > 0; ) {
    let e3 = r2.shift();
    if (e3.kind === `declaration`) {
      if (e3.value === void 0 || (n2++, i2)) continue;
      if (e3.property === `--tw-sort`) {
        let n3 = zn.indexOf(e3.value ?? ``);
        if (n3 !== -1) {
          t2.add(n3), i2 = true;
          continue;
        }
      }
      let r3 = zn.indexOf(e3.property);
      r3 !== -1 && t2.add(r3);
    } else if (e3.kind === `rule` || e3.kind === `at-rule`) for (let t3 of e3.nodes) r2.push(t3);
  }
  return { order: Array.from(t2).sort((e3, t3) => e3 - t3), count: n2 };
}
function qn(e2, t2) {
  let n2 = 0, r2 = H(`&`, e2), i2 = /* @__PURE__ */ new Set(), a2 = new I(() => /* @__PURE__ */ new Set()), o2 = new I(() => /* @__PURE__ */ new Set());
  G([r2], (e3, { parent: r3, path: s3 }) => {
    if (e3.kind === `at-rule`) {
      if (e3.name === `@keyframes`) return G(e3.nodes, (e4) => {
        if (e4.kind === `at-rule` && e4.name === `@apply`) throw Error("You cannot use `@apply` inside `@keyframes`.");
      }), 1;
      if (e3.name === `@utility`) {
        let n3 = e3.params.replace(/-\*$/, ``);
        o2.get(n3).add(e3), G(e3.nodes, (n4) => {
          if (!(n4.kind !== `at-rule` || n4.name !== `@apply`)) {
            i2.add(e3);
            for (let r4 of Jn(n4, t2)) a2.get(e3).add(r4);
          }
        });
        return;
      }
      if (e3.name === `@apply`) {
        if (r3 === null) return;
        n2 |= 1, i2.add(r3);
        for (let n3 of Jn(e3, t2)) for (let t3 of s3) t3 !== e3 && i2.has(t3) && a2.get(t3).add(n3);
      }
    }
  });
  let s2 = /* @__PURE__ */ new Set(), c2 = [], l2 = /* @__PURE__ */ new Set();
  function u2(e3, n3 = []) {
    if (!s2.has(e3)) {
      if (l2.has(e3)) {
        let r3 = n3[(n3.indexOf(e3) + 1) % n3.length];
        throw e3.kind === `at-rule` && e3.name === `@utility` && r3.kind === `at-rule` && r3.name === `@utility` && G(e3.nodes, (e4) => {
          if (e4.kind !== `at-rule` || e4.name !== `@apply`) return;
          let n4 = e4.params.split(/\s+/g);
          for (let e5 of n4) for (let n5 of t2.parseCandidate(e5)) switch (n5.kind) {
            case `arbitrary`:
              break;
            case `static`:
            case `functional`:
              if (r3.params.replace(/-\*$/, ``) === n5.root) throw Error(`You cannot \`@apply\` the \`${e5}\` utility here because it creates a circular dependency.`);
              break;
            default:
          }
        }), Error(`Circular dependency detected:

${wt([e3])}
Relies on:

${wt([r3])}`);
      }
      l2.add(e3);
      for (let t3 of a2.get(e3)) for (let r3 of o2.get(t3)) n3.push(e3), u2(r3, n3), n3.pop();
      s2.add(e3), l2.delete(e3), c2.push(e3);
    }
  }
  for (let e3 of i2) u2(e3);
  for (let e3 of c2) `nodes` in e3 && G(e3.nodes, (e4, { replaceWith: n3 }) => {
    if (e4.kind !== `at-rule` || e4.name !== `@apply`) return;
    let r3 = e4.params.split(/(\s+)/g), i3 = {}, a3 = 0;
    for (let [e5, t3] of r3.entries()) e5 % 2 == 0 && (i3[t3] = a3), a3 += t3.length;
    {
      let r4 = Object.keys(i3), a4 = Bn(r4, t2, { onInvalidCandidate: (e5) => {
        if (t2.theme.prefix && !e5.startsWith(t2.theme.prefix)) throw Error(`Cannot apply unprefixed utility class \`${e5}\`. Did you mean \`${t2.theme.prefix}:${e5}\`?`);
        if (t2.invalidCandidates.has(e5)) throw Error(`Cannot apply utility class \`${e5}\` because it has been explicitly disabled: https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-excluding-classes`);
        let n4 = v(e5, `:`);
        if (n4.length > 1) {
          let r5 = n4.pop();
          if (t2.candidatesToCss([r5])[0]) {
            let r6 = t2.candidatesToCss(n4.map((e6) => `${e6}:[--tw-variant-check:1]`)), i4 = n4.filter((e6, t3) => r6[t3] === null);
            if (i4.length > 0) {
              if (i4.length === 1) throw Error(`Cannot apply utility class \`${e5}\` because the ${i4.map((e6) => `\`${e6}\``)} variant does not exist.`);
              {
                let t3 = new Intl.ListFormat(`en`, { style: `long`, type: `conjunction` });
                throw Error(`Cannot apply utility class \`${e5}\` because the ${t3.format(i4.map((e6) => `\`${e6}\``))} variants do not exist.`);
              }
            }
          }
        }
        throw t2.theme.size === 0 ? Error(`Cannot apply unknown utility class \`${e5}\`. Are you using CSS modules or similar and missing \`@reference\`? https://tailwindcss.com/docs/functions-and-directives#reference-directive`) : Error(`Cannot apply unknown utility class \`${e5}\``);
      } }), o3 = e4.src, s3 = a4.astNodes.map((e5) => {
        var _a2;
        let t3 = (_a2 = a4.nodeSorting.get(e5)) == null ? void 0 : _a2.candidate, n4 = t3 ? i3[t3] : void 0;
        if (e5 = structuredClone(e5), !o3 || !t3 || n4 === void 0) return G([e5], (e6) => {
          e6.src = o3;
        }), e5;
        let r5 = [o3[0], o3[1], o3[2]];
        return r5[1] += 7 + n4, r5[2] = r5[1] + t3.length, G([e5], (e6) => {
          e6.src = r5;
        }), e5;
      }), c3 = [];
      for (let e5 of s3) if (e5.kind === `rule`) for (let t3 of e5.nodes) c3.push(t3);
      else c3.push(e5);
      n3(c3);
    }
  });
  return n2;
}
function* Jn(e2, t2) {
  for (let n2 of e2.params.split(/\s+/g)) for (let e3 of t2.parseCandidate(n2)) switch (e3.kind) {
    case `arbitrary`:
      break;
    case `static`:
    case `functional`:
      yield e3.root;
      break;
    default:
  }
}
async function Yn(e2, t2, n2, r2 = 0, i2 = false) {
  let a2 = 0, o2 = [];
  return G(e2, (e3, { replaceWith: s2 }) => {
    if (e3.kind === `at-rule` && (e3.name === `@import` || e3.name === `@reference`)) {
      let c2 = Xn(z(e3.params));
      if (c2 === null) return;
      e3.name === `@reference` && (c2.media = `reference`), a2 |= 2;
      let { uri: l2, layer: u2, media: d2, supports: f2 } = c2;
      if (l2.startsWith(`data:`) || l2.startsWith(`http://`) || l2.startsWith(`https://`)) return;
      let p2 = xt({}, []);
      return o2.push((async () => {
        if (r2 > 100) throw Error(`Exceeded maximum recursion depth while resolving \`${l2}\` in \`${t2}\`)`);
        let a3 = await n2(l2, t2), o3 = qe(a3.content, { from: i2 ? a3.path : void 0 });
        await Yn(o3, a3.base, n2, r2 + 1, i2), p2.nodes = Zn(e3, [xt({ base: a3.base }, o3)], u2, d2, f2);
      })()), s2(p2), 1;
    }
  }), o2.length > 0 && await Promise.all(o2), a2;
}
function Xn(e2) {
  let t2, n2 = null, r2 = null, i2 = null;
  for (let a2 = 0; a2 < e2.length; a2++) {
    let o2 = e2[a2];
    if (o2.kind !== `separator`) {
      if (o2.kind === `word` && !t2) {
        if (!o2.value || o2.value[0] !== `"` && o2.value[0] !== `'`) return null;
        t2 = o2.value.slice(1, -1);
        continue;
      }
      if (o2.kind === `function` && o2.value.toLowerCase() === `url` || !t2) return null;
      if ((o2.kind === `word` || o2.kind === `function`) && o2.value.toLowerCase() === `layer`) {
        if (n2) return null;
        if (i2) throw Error("`layer(\u2026)` in an `@import` should come before any other functions or conditions");
        n2 = `nodes` in o2 ? R(o2.nodes) : ``;
        continue;
      }
      if (o2.kind === `function` && o2.value.toLowerCase() === `supports`) {
        if (i2) return null;
        i2 = R(o2.nodes);
        continue;
      }
      r2 = R(e2.slice(a2));
      break;
    }
  }
  return t2 ? { uri: t2, layer: n2, media: r2, supports: i2 } : null;
}
function Zn(e2, t2, n2, r2, i2) {
  let a2 = t2;
  if (n2 !== null) {
    let t3 = V(`@layer`, n2, a2);
    t3.src = e2.src, a2 = [t3];
  }
  if (r2 !== null) {
    let t3 = V(`@media`, r2, a2);
    t3.src = e2.src, a2 = [t3];
  }
  if (i2 !== null) {
    let t3 = V(`@supports`, i2[0] === `(` ? i2 : `(${i2})`, a2);
    t3.src = e2.src, a2 = [t3];
  }
  return a2;
}
function Qn(e2, t2 = null) {
  return Array.isArray(e2) && e2.length === 2 && typeof e2[1] == `object` ? t2 ? e2[1][t2] ?? null : e2[0] : Array.isArray(e2) && t2 === null ? e2.join(`, `) : typeof e2 == `string` && t2 === null ? e2 : null;
}
function $n(e2, { theme: t2 }, n2) {
  for (let t3 of n2) {
    let n3 = nr([t3]);
    n3 && e2.theme.clearNamespace(`--${n3}`, 4);
  }
  for (let [n3, r2] of er(t2)) {
    if (typeof r2 != `string` && typeof r2 != `number`) continue;
    if (typeof r2 == `string` && (r2 = r2.replace(/<alpha-value>/g, `1`)), n3[0] === `opacity` && (typeof r2 == `number` || typeof r2 == `string`)) {
      let e3 = typeof r2 == `string` ? parseFloat(r2) : r2;
      e3 >= 0 && e3 <= 1 && (r2 = e3 * 100 + `%`);
    }
    let t3 = nr(n3);
    t3 && e2.theme.add(`--${t3}`, `` + r2, 7);
  }
  if (Object.hasOwn(t2, `fontFamily`)) {
    let n3 = 5;
    {
      let r2 = Qn(t2.fontFamily.sans);
      r2 && e2.theme.hasDefault(`--font-sans`) && (e2.theme.add(`--default-font-family`, r2, n3), e2.theme.add(`--default-font-feature-settings`, Qn(t2.fontFamily.sans, `fontFeatureSettings`) ?? `normal`, n3), e2.theme.add(`--default-font-variation-settings`, Qn(t2.fontFamily.sans, `fontVariationSettings`) ?? `normal`, n3));
    }
    {
      let r2 = Qn(t2.fontFamily.mono);
      r2 && e2.theme.hasDefault(`--font-mono`) && (e2.theme.add(`--default-mono-font-family`, r2, n3), e2.theme.add(`--default-mono-font-feature-settings`, Qn(t2.fontFamily.mono, `fontFeatureSettings`) ?? `normal`, n3), e2.theme.add(`--default-mono-font-variation-settings`, Qn(t2.fontFamily.mono, `fontVariationSettings`) ?? `normal`, n3));
    }
  }
  return t2;
}
function er(e2) {
  let t2 = [];
  return ar(e2, [], (e3, n2) => {
    if (rr(e3)) return t2.push([n2, e3]), 1;
    if (ir(e3)) {
      t2.push([n2, e3[0]]);
      for (let r2 of Reflect.ownKeys(e3[1])) t2.push([[...n2, `-${r2}`], e3[1][r2]]);
      return 1;
    }
    if (Array.isArray(e3) && e3.every((e4) => typeof e4 == `string`)) return n2[0] === `fontSize` ? (t2.push([n2, e3[0]]), e3.length >= 2 && t2.push([[...n2, `-line-height`], e3[1]])) : t2.push([n2, e3.join(`, `)]), 1;
  }), t2;
}
var tr = /^[a-zA-Z0-9-_%/\.]+$/;
function nr(e2) {
  if (e2[0] === `container`) return null;
  e2 = structuredClone(e2), e2[0] === `animation` && (e2[0] = `animate`), e2[0] === `aspectRatio` && (e2[0] = `aspect`), e2[0] === `borderRadius` && (e2[0] = `radius`), e2[0] === `boxShadow` && (e2[0] = `shadow`), e2[0] === `colors` && (e2[0] = `color`), e2[0] === `containers` && (e2[0] = `container`), e2[0] === `fontFamily` && (e2[0] = `font`), e2[0] === `fontSize` && (e2[0] = `text`), e2[0] === `letterSpacing` && (e2[0] = `tracking`), e2[0] === `lineHeight` && (e2[0] = `leading`), e2[0] === `maxWidth` && (e2[0] = `container`), e2[0] === `screens` && (e2[0] = `breakpoint`), e2[0] === `transitionTimingFunction` && (e2[0] = `ease`);
  for (let t2 of e2) if (!tr.test(t2)) return null;
  return e2.map((e3, t2, n2) => e3 === `1` && t2 !== n2.length - 1 ? `` : e3).map((e3) => e3.replaceAll(`.`, `_`).replace(/([a-z])([A-Z])/g, (e4, t2, n2) => `${t2}-${n2.toLowerCase()}`)).filter((t2, n2) => t2 !== `DEFAULT` || n2 !== e2.length - 1).join(`-`);
}
function rr(e2) {
  return typeof e2 == `number` || typeof e2 == `string`;
}
function ir(e2) {
  if (!Array.isArray(e2) || e2.length !== 2 || typeof e2[0] != `string` && typeof e2[0] != `number` || e2[1] === void 0 || e2[1] === null || typeof e2[1] != `object`) return false;
  for (let t2 of Reflect.ownKeys(e2[1])) if (typeof t2 != `string` || typeof e2[1][t2] != `string` && typeof e2[1][t2] != `number`) return false;
  return true;
}
function ar(e2, t2 = [], n2) {
  for (let r2 of Reflect.ownKeys(e2)) {
    let i2 = e2[r2];
    if (i2 == null) continue;
    let a2 = [...t2, r2], o2 = n2(i2, a2) ?? 0;
    if (o2 !== 1 && (o2 === 2 || !(!Array.isArray(i2) && typeof i2 != `object`) && ar(i2, a2, n2) === 2)) return 2;
  }
}
function or(e2) {
  let t2 = [];
  for (let n2 of v(e2, `.`)) {
    if (!n2.includes(`[`)) {
      t2.push(n2);
      continue;
    }
    let e3 = 0;
    for (; ; ) {
      let r2 = n2.indexOf(`[`, e3), i2 = n2.indexOf(`]`, r2);
      if (r2 === -1 || i2 === -1) break;
      r2 > e3 && t2.push(n2.slice(e3, r2)), t2.push(n2.slice(r2 + 1, i2)), e3 = i2 + 1;
    }
    e3 <= n2.length - 1 && t2.push(n2.slice(e3));
  }
  return t2;
}
function sr(e2) {
  if (Object.prototype.toString.call(e2) !== `[object Object]`) return false;
  let t2 = Object.getPrototypeOf(e2);
  return t2 === null || Object.getPrototypeOf(t2) === null;
}
function cr(e2, t2, n2, r2 = []) {
  for (let i2 of t2) if (i2 != null) for (let t3 of Reflect.ownKeys(i2)) {
    r2.push(t3);
    let a2 = n2(e2[t3], i2[t3], r2);
    a2 === void 0 ? !sr(e2[t3]) || !sr(i2[t3]) ? e2[t3] = i2[t3] : e2[t3] = cr({}, [e2[t3], i2[t3]], n2, r2) : e2[t3] = a2, r2.pop();
  }
  return e2;
}
function lr(e2, t2, n2) {
  return function(r2, i2) {
    let a2 = r2.lastIndexOf(`/`), o2 = null;
    a2 !== -1 && (o2 = r2.slice(a2 + 1).trim(), r2 = r2.slice(0, a2).trim());
    let s2 = (() => {
      var _a2;
      let i3 = or(r2), [a3, o3] = ur(e2.theme, i3), s3 = n2(dr(t2() ?? {}, i3) ?? null);
      if (typeof s3 == `string` && (s3 = s3.replace(`<alpha-value>`, `1`)), typeof a3 != `object`) return typeof o3 != `object` && o3 & 4 ? s3 ?? a3 : a3;
      if (typeof s3 == `object` && s3 && !Array.isArray(s3)) {
        let e3 = cr({}, [s3], (e4, t3) => t3);
        if (a3 === null && Object.hasOwn(s3, `__CSS_VALUES__`)) {
          let t3 = {};
          for (let n3 in s3.__CSS_VALUES__) t3[n3] = s3[n3], delete e3[n3];
          a3 = t3;
        }
        for (let t3 in a3) t3 !== `__CSS_VALUES__` && (((_a2 = s3 == null ? void 0 : s3.__CSS_VALUES__) == null ? void 0 : _a2[t3]) & 4 && dr(e3, t3.split(`-`)) !== void 0 || (e3[Ze(t3)] = a3[t3]));
        return e3;
      }
      if (Array.isArray(a3) && Array.isArray(o3) && Array.isArray(s3)) {
        let e3 = a3[0], t3 = a3[1];
        o3[0] & 4 && (e3 = s3[0] ?? e3);
        for (let e4 of Object.keys(t3)) o3[1][e4] & 4 && (t3[e4] = s3[1][e4] ?? t3[e4]);
        return [e3, t3];
      }
      return a3 ?? s3;
    })();
    return o2 && typeof s2 == `string` && (s2 = q(s2, o2)), s2 ?? i2;
  };
}
function ur(e2, t2) {
  if (t2.length === 1 && t2[0].startsWith(`--`)) return [e2.get([t2[0]]), e2.getOptions(t2[0])];
  let n2 = nr(t2), r2 = /* @__PURE__ */ new Map(), i2 = new I(() => /* @__PURE__ */ new Map()), a2 = e2.namespace(`--${n2}`);
  if (a2.size === 0) return [null, 0];
  let o2 = /* @__PURE__ */ new Map();
  for (let [t3, s3] of a2) {
    if (!t3 || !t3.includes(`--`)) {
      r2.set(t3, s3), o2.set(t3, e2.getOptions(t3 ? `--${n2}-${t3}` : `--${n2}`));
      continue;
    }
    let a3 = t3.indexOf(`--`), c3 = t3.slice(0, a3), l3 = t3.slice(a3 + 2);
    l3 = l3.replace(/-([a-z])/g, (e3, t4) => t4.toUpperCase()), i2.get(c3 === `` ? null : c3).set(l3, [s3, e2.getOptions(`--${n2}${t3}`)]);
  }
  let s2 = e2.getOptions(`--${n2}`);
  for (let [e3, t3] of i2) {
    let n3 = r2.get(e3);
    if (typeof n3 != `string`) continue;
    let i3 = {}, a3 = {};
    for (let [e4, [n4, r3]] of t3) i3[e4] = n4, a3[e4] = r3;
    r2.set(e3, [n3, i3]), o2.set(e3, [s2, a3]);
  }
  let c2 = {}, l2 = {};
  for (let [e3, t3] of r2) fr(c2, [e3 ?? `DEFAULT`], t3);
  for (let [e3, t3] of o2) fr(l2, [e3 ?? `DEFAULT`], t3);
  return t2[t2.length - 1] === `DEFAULT` ? [(c2 == null ? void 0 : c2.DEFAULT) ?? null, l2.DEFAULT ?? 0] : `DEFAULT` in c2 && Object.keys(c2).length === 1 ? [c2.DEFAULT, l2.DEFAULT ?? 0] : (c2.__CSS_VALUES__ = l2, [c2, l2]);
}
function dr(e2, t2) {
  for (let n2 = 0; n2 < t2.length; ++n2) {
    let r2 = t2[n2];
    if ((e2 == null ? void 0 : e2[r2]) === void 0) {
      if (t2[n2 + 1] === void 0) return;
      t2[n2 + 1] = `${r2}-${t2[n2 + 1]}`;
      continue;
    }
    e2 = e2[r2];
  }
  return e2;
}
function fr(e2, t2, n2) {
  for (let n3 of t2.slice(0, -1)) e2[n3] === void 0 && (e2[n3] = {}), e2 = e2[n3];
  e2[t2[t2.length - 1]] = n2;
}
function pr(e2) {
  return { kind: `combinator`, value: e2 };
}
function mr(e2, t2) {
  return { kind: `function`, value: e2, nodes: t2 };
}
function hr(e2) {
  return { kind: `selector`, value: e2 };
}
function gr(e2) {
  return { kind: `separator`, value: e2 };
}
function _r(e2) {
  return { kind: `value`, value: e2 };
}
function vr(e2, t2, n2 = null) {
  for (let r2 = 0; r2 < e2.length; r2++) {
    let i2 = e2[r2], a2 = false, o2 = 0, s2 = t2(i2, { parent: n2, replaceWith(t3) {
      a2 || (a2 = true, Array.isArray(t3) ? t3.length === 0 ? (e2.splice(r2, 1), o2 = 0) : t3.length === 1 ? (e2[r2] = t3[0], o2 = 1) : (e2.splice(r2, 1, ...t3), o2 = t3.length) : (e2[r2] = t3, o2 = 1));
    } }) ?? 0;
    if (a2) {
      s2 === 0 ? r2-- : r2 += o2 - 1;
      continue;
    }
    if (s2 === 2 || s2 !== 1 && i2.kind === `function` && vr(i2.nodes, t2, i2) === 2) return 2;
  }
}
function yr(e2) {
  let t2 = ``;
  for (let n2 of e2) switch (n2.kind) {
    case `combinator`:
    case `selector`:
    case `separator`:
    case `value`:
      t2 += n2.value;
      break;
    case `function`:
      t2 += n2.value + `(` + yr(n2.nodes) + `)`;
  }
  return t2;
}
var br = 92, xr = 93, Sr = 41, Cr = 58, wr = 44, Tr = 34, Er = 46, Dr = 62, Or = 10, kr = 35, Ar = 91, jr = 40, Mr = 43, Nr = 39, Pr = 32, Fr = 9, Ir = 126;
function Lr(e2) {
  e2 = e2.replaceAll(`\r
`, `
`);
  let t2 = [], n2 = [], r2 = null, i2 = ``, a2;
  for (let o2 = 0; o2 < e2.length; o2++) {
    let s2 = e2.charCodeAt(o2);
    switch (s2) {
      case wr:
      case Dr:
      case Or:
      case Pr:
      case Mr:
      case Fr:
      case Ir: {
        if (i2.length > 0) {
          let e3 = hr(i2);
          r2 ? r2.nodes.push(e3) : t2.push(e3), i2 = ``;
        }
        let n3 = o2, s3 = o2 + 1;
        for (; s3 < e2.length && (a2 = e2.charCodeAt(s3), !(a2 !== wr && a2 !== Dr && a2 !== Or && a2 !== Pr && a2 !== Mr && a2 !== Fr && a2 !== Ir)); s3++) ;
        o2 = s3 - 1;
        let c2 = e2.slice(n3, s3), l2 = c2.trim() === `,` ? gr(c2) : pr(c2);
        r2 ? r2.nodes.push(l2) : t2.push(l2);
        break;
      }
      case jr: {
        let s3 = mr(i2, []);
        if (i2 = ``, s3.value !== `:not` && s3.value !== `:where` && s3.value !== `:has` && s3.value !== `:is`) {
          let n3 = o2 + 1, c2 = 0;
          for (let t3 = o2 + 1; t3 < e2.length; t3++) {
            if (a2 = e2.charCodeAt(t3), a2 === jr) {
              c2++;
              continue;
            }
            if (a2 === Sr) {
              if (c2 === 0) {
                o2 = t3;
                break;
              }
              c2--;
            }
          }
          let l2 = o2;
          s3.nodes.push(_r(e2.slice(n3, l2))), i2 = ``, o2 = l2, r2 ? r2.nodes.push(s3) : t2.push(s3);
          break;
        }
        r2 ? r2.nodes.push(s3) : t2.push(s3), n2.push(s3), r2 = s3;
        break;
      }
      case Sr: {
        let e3 = n2.pop();
        if (i2.length > 0) {
          let t3 = hr(i2);
          e3.nodes.push(t3), i2 = ``;
        }
        r2 = n2.length > 0 ? n2[n2.length - 1] : null;
        break;
      }
      case Er:
      case Cr:
      case kr:
        if (i2.length > 0) {
          let e3 = hr(i2);
          r2 ? r2.nodes.push(e3) : t2.push(e3);
        }
        i2 = String.fromCharCode(s2);
        break;
      case Ar: {
        if (i2.length > 0) {
          let e3 = hr(i2);
          r2 ? r2.nodes.push(e3) : t2.push(e3);
        }
        i2 = ``;
        let n3 = o2, s3 = 0;
        for (let t3 = o2 + 1; t3 < e2.length; t3++) {
          if (a2 = e2.charCodeAt(t3), a2 === Ar) {
            s3++;
            continue;
          }
          if (a2 === xr) {
            if (s3 === 0) {
              o2 = t3;
              break;
            }
            s3--;
          }
        }
        i2 += e2.slice(n3, o2 + 1);
        break;
      }
      case Nr:
      case Tr: {
        let t3 = o2;
        for (let t4 = o2 + 1; t4 < e2.length; t4++) if (a2 = e2.charCodeAt(t4), a2 === br) t4 += 1;
        else if (a2 === s2) {
          o2 = t4;
          break;
        }
        i2 += e2.slice(t3, o2 + 1);
        break;
      }
      case br: {
        let t3 = e2.charCodeAt(o2 + 1);
        i2 += String.fromCharCode(s2) + String.fromCharCode(t3), o2 += 1;
        break;
      }
      default:
        i2 += String.fromCharCode(s2);
    }
  }
  return i2.length > 0 && t2.push(hr(i2)), t2;
}
var Rr = /^[a-z@][a-zA-Z0-9/%._-]*$/;
function zr({ designSystem: e2, ast: t2, resolvedConfig: n2, featuresRef: r2, referenceMode: i2 }) {
  let a2 = { addBase(n3) {
    if (i2) return;
    let a3 = Z(n3);
    r2.current |= Sn(a3, e2), t2.push(V(`@layer`, `base`, a3));
  }, addVariant(t3, n3) {
    if (!Mn.test(t3)) throw Error(`\`addVariant('${t3}')\` defines an invalid variant name. Variants should only contain alphanumeric, dashes or underscore characters.`);
    if (typeof n3 == `string`) {
      if (n3.includes(`:merge(`)) return;
    } else if (Array.isArray(n3)) {
      if (n3.some((e3) => e3.includes(`:merge(`))) return;
    } else if (typeof n3 == `object`) {
      let e3 = function(t4, n4) {
        return Object.entries(t4).some(([t5, r4]) => t5.includes(n4) || typeof r4 == `object` && e3(r4, n4));
      };
      var r3 = e3;
      if (e3(n3, `:merge(`)) return;
    }
    typeof n3 == `string` || Array.isArray(n3) ? e2.variants.static(t3, (e3) => {
      e3.nodes = Br(n3, e3.nodes);
    }, { compounds: Pn(typeof n3 == `string` ? [n3] : n3) }) : typeof n3 == `object` && e2.variants.fromAst(t3, Z(n3));
  }, matchVariant(t3, n3, r3) {
    function i3(e3, t4, r4) {
      let i4 = n3(e3, { modifier: (t4 == null ? void 0 : t4.value) ?? null });
      return Br(i4, r4);
    }
    try {
      let e3 = n3(`a`, { modifier: null });
      if (typeof e3 == `string` && e3.includes(`:merge(`) || Array.isArray(e3) && e3.some((e4) => e4.includes(`:merge(`))) return;
    } catch {
    }
    let a3 = Object.keys((r3 == null ? void 0 : r3.values) ?? {});
    e2.variants.group(() => {
      e2.variants.functional(t3, (e3, t4) => {
        if (!t4.value) {
          if ((r3 == null ? void 0 : r3.values) && `DEFAULT` in r3.values) {
            e3.nodes = i3(r3.values.DEFAULT, t4.modifier, e3.nodes);
            return;
          }
          return null;
        }
        if (t4.value.kind === `arbitrary`) e3.nodes = i3(t4.value.value, t4.modifier, e3.nodes);
        else if (t4.value.kind === `named` && (r3 == null ? void 0 : r3.values)) {
          let n4 = r3.values[t4.value.value];
          if (typeof n4 != `string`) return;
          e3.nodes = i3(n4, t4.modifier, e3.nodes);
        }
      });
    }, (e3, t4) => {
      var _a2, _b, _c, _d;
      if (e3.kind !== `functional` || t4.kind !== `functional`) return 0;
      let n4 = e3.value ? e3.value.value : `DEFAULT`, i4 = t4.value ? t4.value.value : `DEFAULT`, o2 = ((_a2 = r3 == null ? void 0 : r3.values) == null ? void 0 : _a2[n4]) ?? n4, s2 = ((_b = r3 == null ? void 0 : r3.values) == null ? void 0 : _b[i4]) ?? i4;
      if (r3 && typeof r3.sort == `function`) return r3.sort({ value: o2, modifier: ((_c = e3.modifier) == null ? void 0 : _c.value) ?? null }, { value: s2, modifier: ((_d = t4.modifier) == null ? void 0 : _d.value) ?? null });
      let c2 = a3.indexOf(n4), l2 = a3.indexOf(i4);
      return c2 = c2 === -1 ? a3.length : c2, l2 = l2 === -1 ? a3.length : l2, c2 === l2 ? o2 < s2 ? -1 : 1 : c2 - l2;
    });
  }, addUtilities(n3) {
    n3 = Array.isArray(n3) ? n3 : [n3];
    let a3 = n3.flatMap((e3) => Object.entries(e3));
    a3 = a3.flatMap(([e3, t3]) => v(e3, `,`).map((e4) => [e4.trim(), t3]));
    let o2 = new I(() => []);
    for (let [e3, n4] of a3) {
      if (e3.startsWith(`@keyframes `)) {
        i2 || t2.push(H(e3, Z(n4)));
        continue;
      }
      let r3 = Lr(e3), a4 = false;
      if (vr(r3, (e4) => {
        if (e4.kind === `selector` && e4.value[0] === `.` && Rr.test(e4.value.slice(1))) {
          let t3 = e4.value;
          e4.value = `&`;
          let i3 = yr(r3), s2 = t3.slice(1), c2 = i3 === `&` ? Z(n4) : [H(i3, Z(n4))];
          o2.get(s2).push(...c2), a4 = true, e4.value = t3;
          return;
        }
        if (e4.kind === `function` && e4.value === `:not`) return 1;
      }), !a4) throw Error(`\`addUtilities({ '${e3}' : \u2026 })\` defines an invalid utility selector. Utilities must be a single class name and start with a lowercase letter, eg. \`.scrollbar-none\`.`);
    }
    for (let [t3, n4] of o2) e2.theme.prefix && G(n4, (t4) => {
      if (t4.kind === `rule`) {
        let n5 = Lr(t4.selector);
        vr(n5, (t5) => {
          t5.kind === `selector` && t5.value[0] === `.` && (t5.value = `.${e2.theme.prefix}\\:${t5.value.slice(1)}`);
        }), t4.selector = yr(n5);
      }
    }), e2.utilities.static(t3, (i3) => {
      let a4 = structuredClone(n4);
      return Vr(a4, t3, i3.raw), r2.current |= qn(a4, e2), a4;
    });
  }, matchUtilities(t3, n3) {
    let i3 = (n3 == null ? void 0 : n3.type) ? Array.isArray(n3 == null ? void 0 : n3.type) ? n3.type : [n3.type] : [`any`];
    for (let [o2, s2] of Object.entries(t3)) {
      let t4 = function({ negative: t5 }) {
        return (a4) => {
          var _a2, _b;
          if (((_a2 = a4.value) == null ? void 0 : _a2.kind) === `arbitrary` && i3.length > 0 && !i3.includes(`any`) && (a4.value.dataType && !i3.includes(a4.value.dataType) || !a4.value.dataType && !b(a4.value.value, i3))) return;
          let c2 = i3.includes(`color`), l2 = null, u2 = false;
          {
            let e3 = (n3 == null ? void 0 : n3.values) ?? {};
            c2 && (e3 = Object.assign({ inherit: `inherit`, transparent: `transparent`, current: `currentcolor` }, e3)), a4.value ? a4.value.kind === `arbitrary` ? l2 = a4.value.value : a4.value.fraction && e3[a4.value.fraction] ? (l2 = e3[a4.value.fraction], u2 = true) : e3[a4.value.value] ? l2 = e3[a4.value.value] : e3.__BARE_VALUE__ && (l2 = e3.__BARE_VALUE__(a4.value) ?? null, u2 = (a4.value.fraction !== null && (l2 == null ? void 0 : l2.includes(`/`))) ?? false) : l2 = e3.DEFAULT ?? null;
          }
          if (l2 === null) return;
          let d2;
          {
            let e3 = (n3 == null ? void 0 : n3.modifiers) ?? null;
            d2 = a4.modifier ? e3 === `any` || a4.modifier.kind === `arbitrary` ? a4.modifier.value : (e3 == null ? void 0 : e3[a4.modifier.value]) ? e3[a4.modifier.value] : c2 && !Number.isNaN(Number(a4.modifier.value)) ? `${a4.modifier.value}%` : null : null;
          }
          if (a4.modifier && d2 === null && !u2) return ((_b = a4.value) == null ? void 0 : _b.kind) === `arbitrary` ? null : void 0;
          c2 && d2 !== null && (l2 = q(l2, d2)), t5 && (l2 = `calc(${l2} * -1)`);
          let f2 = Z(s2(l2, { modifier: d2 }));
          return Vr(f2, o2, a4.raw), r2.current |= qn(f2, e2), f2;
        };
      };
      var a3 = t4;
      if (!Rr.test(o2)) throw Error(`\`matchUtilities({ '${o2}' : \u2026 })\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter, eg. \`scrollbar\`.`);
      (n3 == null ? void 0 : n3.supportsNegativeValues) && e2.utilities.functional(`-${o2}`, t4({ negative: true }), { types: i3 }), e2.utilities.functional(o2, t4({ negative: false }), { types: i3 }), e2.utilities.suggest(o2, () => {
        let e3 = (n3 == null ? void 0 : n3.values) ?? {}, t5 = new Set(Object.keys(e3));
        t5.delete(`__BARE_VALUE__`), t5.has(`DEFAULT`) && (t5.delete(`DEFAULT`), t5.add(null));
        let r3 = (n3 == null ? void 0 : n3.modifiers) ?? {}, i4 = r3 === `any` ? [] : Object.keys(r3);
        return [{ supportsNegative: (n3 == null ? void 0 : n3.supportsNegativeValues) ?? false, values: Array.from(t5), modifiers: i4 }];
      });
    }
  }, addComponents(e3, t3) {
    this.addUtilities(e3, t3);
  }, matchComponents(e3, t3) {
    this.matchUtilities(e3, t3);
  }, theme: lr(e2, () => n2.theme ?? {}, (e3) => e3), prefix(e3) {
    return e3;
  }, config(e3, t3) {
    let r3 = n2;
    if (!e3) return r3;
    let i3 = or(e3);
    for (let e4 = 0; e4 < i3.length; ++e4) {
      let n3 = i3[e4];
      if (r3[n3] === void 0) return t3;
      r3 = r3[n3];
    }
    return r3 ?? t3;
  } };
  return a2.addComponents = a2.addComponents.bind(a2), a2.matchComponents = a2.matchComponents.bind(a2), a2;
}
function Z(e2) {
  let t2 = [];
  e2 = Array.isArray(e2) ? e2 : [e2];
  let n2 = e2.flatMap((e3) => Object.entries(e3));
  for (let [e3, r2] of n2) if (typeof r2 != `object`) {
    if (!e3.startsWith(`--`)) {
      if (r2 === `@slot`) {
        t2.push(H(e3, [V(`@slot`)]));
        continue;
      }
      e3 = e3.replace(/([A-Z])/g, `-$1`).toLowerCase();
    }
    t2.push(U(e3, String(r2)));
  } else if (Array.isArray(r2)) for (let n3 of r2) typeof n3 == `string` ? t2.push(U(e3, n3)) : t2.push(H(e3, Z(n3)));
  else r2 !== null && t2.push(H(e3, Z(r2)));
  return t2;
}
function Br(e2, t2) {
  return (typeof e2 == `string` ? [e2] : e2).flatMap((e3) => {
    if (e3.trim().endsWith(`}`)) {
      let n2 = e3.replace(`}`, `{@slot}}`), r2 = qe(n2);
      return Ln(r2, t2), r2;
    } else return H(e3, t2);
  });
}
function Vr(e2, t2, n2) {
  G(e2, (e3) => {
    if (e3.kind === `rule`) {
      let r2 = Lr(e3.selector);
      vr(r2, (e4) => {
        e4.kind === `selector` && e4.value === `.${t2}` && (e4.value = `.${Xe(n2)}`);
      }), e3.selector = yr(r2);
    }
  });
}
function Hr(e2, t2, n2) {
  for (let n3 of Ur(t2)) e2.theme.addKeyframes(n3);
}
function Ur(e2) {
  let t2 = [];
  if (`keyframes` in e2.theme) for (let [n2, r2] of Object.entries(e2.theme.keyframes)) t2.push(V(`@keyframes`, n2, Z(r2)));
  return t2;
}
function Wr(e2) {
  return { theme: { ...Ee, colors: ({ theme: e3 }) => e3(`color`, {}), extend: { fontSize: ({ theme: e3 }) => ({ ...e3(`text`, {}) }), boxShadow: ({ theme: e3 }) => ({ ...e3(`shadow`, {}) }), animation: ({ theme: e3 }) => ({ ...e3(`animate`, {}) }), aspectRatio: ({ theme: e3 }) => ({ ...e3(`aspect`, {}) }), borderRadius: ({ theme: e3 }) => ({ ...e3(`radius`, {}) }), screens: ({ theme: e3 }) => ({ ...e3(`breakpoint`, {}) }), letterSpacing: ({ theme: e3 }) => ({ ...e3(`tracking`, {}) }), lineHeight: ({ theme: e3 }) => ({ ...e3(`leading`, {}) }), transitionDuration: { DEFAULT: e2.get([`--default-transition-duration`]) ?? null }, transitionTimingFunction: { DEFAULT: e2.get([`--default-transition-timing-function`]) ?? null }, maxWidth: ({ theme: e3 }) => ({ ...e3(`container`, {}) }) } } };
}
var Gr = { blocklist: [], future: {}, prefix: ``, important: false, darkMode: null, theme: {}, plugins: [], content: { files: [] } };
function Kr(e2, t2) {
  let n2 = { design: e2, configs: [], plugins: [], content: { files: [] }, theme: {}, extend: {}, result: structuredClone(Gr) };
  for (let e3 of t2) Jr(n2, e3);
  for (let e3 of n2.configs) `darkMode` in e3 && e3.darkMode !== void 0 && (n2.result.darkMode = e3.darkMode ?? null), `prefix` in e3 && e3.prefix !== void 0 && (n2.result.prefix = e3.prefix ?? ``), `blocklist` in e3 && e3.blocklist !== void 0 && (n2.result.blocklist = e3.blocklist ?? []), `important` in e3 && e3.important !== void 0 && (n2.result.important = e3.important ?? false);
  let r2 = Yr(n2);
  return { resolvedConfig: { ...n2.result, content: n2.content, theme: n2.theme, plugins: n2.plugins }, replacedThemeKeys: r2 };
}
function qr(e2, t2) {
  if (Array.isArray(e2) && sr(e2[0])) return e2.concat(t2);
  if (Array.isArray(t2) && sr(t2[0]) && sr(e2)) return [e2, ...t2];
  if (Array.isArray(t2)) return t2;
}
function Jr(e2, { config: t2, base: n2, path: r2, reference: i2 }) {
  let a2 = [];
  for (let e3 of t2.plugins ?? []) `__isOptionsFunction` in e3 ? a2.push({ ...e3(), reference: i2 }) : `handler` in e3 ? a2.push({ ...e3, reference: i2 }) : a2.push({ handler: e3, reference: i2 });
  if (Array.isArray(t2.presets) && t2.presets.length === 0) throw Error("Error in the config file/plugin/preset. An empty preset (`preset: []`) is not currently supported.");
  for (let a3 of t2.presets ?? []) Jr(e2, { path: r2, base: n2, config: a3, reference: i2 });
  for (let t3 of a2) e2.plugins.push(t3), t3.config && Jr(e2, { path: r2, base: n2, config: t3.config, reference: !!t3.reference });
  let o2 = t2.content ?? [], s2 = Array.isArray(o2) ? o2 : o2.files;
  for (let t3 of s2) e2.content.files.push(typeof t3 == `object` ? t3 : { base: n2, pattern: t3 });
  e2.configs.push(t2);
}
function Yr(e2) {
  var _a2;
  let t2 = /* @__PURE__ */ new Set(), r2 = lr(e2.design, () => e2.theme, a2), i2 = Object.assign(r2, { theme: r2, colors: n });
  function a2(e3) {
    return typeof e3 == `function` ? e3(i2) ?? null : e3 ?? null;
  }
  for (let n2 of e2.configs) {
    let r3 = n2.theme ?? {}, i3 = r3.extend ?? {};
    for (let e3 in r3) e3 !== `extend` && t2.add(e3);
    for (let t3 in Object.assign(e2.theme, r3), i3) (_a2 = e2.extend)[t3] ?? (_a2[t3] = []), e2.extend[t3].push(i3[t3]);
  }
  for (let t3 in delete e2.theme.extend, e2.extend) {
    let n2 = [e2.theme[t3], ...e2.extend[t3]];
    e2.theme[t3] = () => {
      let e3 = n2.map(a2);
      return cr({}, e3, qr);
    };
  }
  for (let t3 in e2.theme) e2.theme[t3] = a2(e2.theme[t3]);
  if (e2.theme.screens && typeof e2.theme.screens == `object`) for (let t3 of Object.keys(e2.theme.screens)) {
    let n2 = e2.theme.screens[t3];
    n2 && typeof n2 == `object` && (`raw` in n2 || `max` in n2 || `min` in n2 && (e2.theme.screens[t3] = n2.min));
  }
  return t2;
}
function Xr(e2, t2) {
  let n2 = e2.theme.container || {};
  if (typeof n2 != `object` || !n2) return;
  let r2 = Zr(n2, t2);
  r2.length !== 0 && t2.utilities.static(`container`, () => structuredClone(r2));
}
function Zr({ center: e2, padding: t2, screens: n2 }, r2) {
  let i2 = [], a2 = null;
  if (e2 && i2.push(U(`margin-inline`, `auto`)), (typeof t2 == `string` || typeof t2 == `object` && t2 && `DEFAULT` in t2) && i2.push(U(`padding-inline`, typeof t2 == `string` ? t2 : t2.DEFAULT)), typeof n2 == `object` && n2) {
    a2 = /* @__PURE__ */ new Map();
    let e3 = Array.from(r2.theme.namespace(`--breakpoint`).entries());
    if (e3.sort((e4, t3) => en(e4[1], t3[1], `asc`)), e3.length > 0) {
      let [t3] = e3[0];
      i2.push(V(`@media`, `(width >= --theme(--breakpoint-${t3}))`, [U(`max-width`, `none`)]));
    }
    for (let [e4, t3] of Object.entries(n2)) {
      if (typeof t3 == `object`) if (`min` in t3) t3 = t3.min;
      else continue;
      a2.set(e4, V(`@media`, `(width >= ${t3})`, [U(`max-width`, t3)]));
    }
  }
  if (typeof t2 == `object` && t2) {
    let e3 = Object.entries(t2).filter(([e4]) => e4 !== `DEFAULT`).map(([e4, t3]) => [e4, r2.theme.resolveValue(e4, [`--breakpoint`]), t3]).filter(Boolean);
    e3.sort((e4, t3) => en(e4[1], t3[1], `asc`));
    for (let [t3, , n3] of e3) if (a2 && a2.has(t3)) a2.get(t3).nodes.push(U(`padding-inline`, n3));
    else {
      if (a2) continue;
      i2.push(V(`@media`, `(width >= theme(--breakpoint-${t3}))`, [U(`padding-inline`, n3)]));
    }
  }
  if (a2) for (let [, e3] of a2) i2.push(e3);
  return i2;
}
function Qr({ addVariant: e2, config: t2 }) {
  let n2 = t2(`darkMode`, null), [r2, i2 = `.dark`] = Array.isArray(n2) ? n2 : [n2];
  if (r2 === `variant`) {
    let e3;
    if (Array.isArray(i2) || typeof i2 == `function` ? e3 = i2 : typeof i2 == `string` && (e3 = [i2]), Array.isArray(e3)) for (let t3 of e3) t3 === `.dark` ? (r2 = false, console.warn('When using `variant` for `darkMode`, you must provide a selector.\nExample: `darkMode: ["variant", ".your-selector &"]`')) : t3.includes(`&`) || (r2 = false, console.warn('When using `variant` for `darkMode`, your selector must contain `&`.\nExample `darkMode: ["variant", ".your-selector &"]`'));
    i2 = e3;
  }
  r2 === null || (r2 === `selector` ? e2(`dark`, `&:where(${i2}, ${i2} *)`) : r2 === `media` ? e2(`dark`, `@media (prefers-color-scheme: dark)`) : r2 === `variant` ? e2(`dark`, i2) : r2 === `class` && e2(`dark`, `&:is(${i2} *)`));
}
function $r(e2) {
  for (let [t2, n2] of [[`t`, `top`], [`tr`, `top right`], [`r`, `right`], [`br`, `bottom right`], [`b`, `bottom`], [`bl`, `bottom left`], [`l`, `left`], [`tl`, `top left`]]) e2.utilities.static(`bg-gradient-to-${t2}`, () => [U(`--tw-gradient-position`, `to ${n2} in oklab`), U(`background-image`, `linear-gradient(var(--tw-gradient-stops))`)]);
  e2.utilities.static(`bg-left-top`, () => [U(`background-position`, `left top`)]), e2.utilities.static(`bg-right-top`, () => [U(`background-position`, `right top`)]), e2.utilities.static(`bg-left-bottom`, () => [U(`background-position`, `left bottom`)]), e2.utilities.static(`bg-right-bottom`, () => [U(`background-position`, `right bottom`)]), e2.utilities.static(`object-left-top`, () => [U(`object-position`, `left top`)]), e2.utilities.static(`object-right-top`, () => [U(`object-position`, `right top`)]), e2.utilities.static(`object-left-bottom`, () => [U(`object-position`, `left bottom`)]), e2.utilities.static(`object-right-bottom`, () => [U(`object-position`, `right bottom`)]), e2.utilities.functional(`max-w-screen`, (t2) => {
    if (!t2.value || t2.value.kind === `arbitrary`) return;
    let n2 = e2.theme.resolve(t2.value.value, [`--breakpoint`]);
    if (n2) return [U(`max-width`, n2)];
  }), e2.utilities.static(`overflow-ellipsis`, () => [U(`text-overflow`, `ellipsis`)]), e2.utilities.static(`decoration-slice`, () => [U(`-webkit-box-decoration-break`, `slice`), U(`box-decoration-break`, `slice`)]), e2.utilities.static(`decoration-clone`, () => [U(`-webkit-box-decoration-break`, `clone`), U(`box-decoration-break`, `clone`)]), e2.utilities.functional(`flex-shrink`, (e3) => {
    if (!e3.modifier) {
      if (!e3.value) return [U(`flex-shrink`, `1`)];
      if (e3.value.kind === `arbitrary` || M(e3.value.value)) return [U(`flex-shrink`, e3.value.value)];
    }
  }), e2.utilities.functional(`flex-grow`, (e3) => {
    if (!e3.modifier) {
      if (!e3.value) return [U(`flex-grow`, `1`)];
      if (e3.value.kind === `arbitrary` || M(e3.value.value)) return [U(`flex-grow`, e3.value.value)];
    }
  }), e2.utilities.static(`order-none`, () => [U(`order`, `0`)]);
}
function ei(e2, t2) {
  var _a2;
  let n2 = e2.theme.screens || {}, r2 = ((_a2 = t2.variants.get(`min`)) == null ? void 0 : _a2.order) ?? 0, i2 = [];
  for (let [e3, o2] of Object.entries(n2)) {
    let n3 = function(n4) {
      t2.variants.static(e3, (e4) => {
        e4.nodes = [V(`@media`, u2, e4.nodes)];
      }, { order: n4 });
    };
    var a2 = n3;
    let s2 = t2.variants.get(e3), c2 = t2.theme.resolveValue(e3, [`--breakpoint`]);
    if (s2 && c2 && !t2.theme.hasDefault(`--breakpoint-${e3}`)) continue;
    let l2 = true;
    typeof o2 == `string` && (l2 = false);
    let u2 = ti(o2);
    l2 ? i2.push(n3) : n3(r2);
  }
  if (i2.length !== 0) {
    for (let [, e3] of t2.variants.variants) e3.order > r2 && (e3.order += i2.length);
    t2.variants.compareFns = new Map(Array.from(t2.variants.compareFns).map(([e3, t3]) => (e3 > r2 && (e3 += i2.length), [e3, t3])));
    for (let [e3, t3] of i2.entries()) t3(r2 + e3 + 1);
  }
}
function ti(e2) {
  return (Array.isArray(e2) ? e2 : [e2]).map((e3) => typeof e3 == `string` ? { min: e3 } : e3 && typeof e3 == `object` ? e3 : null).map((e3) => {
    if (e3 === null) return null;
    if (`raw` in e3) return e3.raw;
    let t2 = ``;
    return e3.max !== void 0 && (t2 += `${e3.max} >= `), t2 += `width`, e3.min !== void 0 && (t2 += ` >= ${e3.min}`), `(${t2})`;
  }).filter(Boolean).join(`, `);
}
function ni(e2, t2) {
  let n2 = e2.theme.aria || {}, r2 = e2.theme.supports || {}, i2 = e2.theme.data || {};
  if (Object.keys(n2).length > 0) {
    let e3 = t2.variants.get(`aria`), r3 = e3 == null ? void 0 : e3.applyFn, i3 = e3 == null ? void 0 : e3.compounds;
    t2.variants.functional(`aria`, (e4, t3) => {
      let i4 = t3.value;
      return i4 && i4.kind === `named` && i4.value in n2 ? r3 == null ? void 0 : r3(e4, { ...t3, value: { kind: `arbitrary`, value: n2[i4.value] } }) : r3 == null ? void 0 : r3(e4, t3);
    }, { compounds: i3 });
  }
  if (Object.keys(r2).length > 0) {
    let e3 = t2.variants.get(`supports`), n3 = e3 == null ? void 0 : e3.applyFn, i3 = e3 == null ? void 0 : e3.compounds;
    t2.variants.functional(`supports`, (e4, t3) => {
      let i4 = t3.value;
      return i4 && i4.kind === `named` && i4.value in r2 ? n3 == null ? void 0 : n3(e4, { ...t3, value: { kind: `arbitrary`, value: r2[i4.value] } }) : n3 == null ? void 0 : n3(e4, t3);
    }, { compounds: i3 });
  }
  if (Object.keys(i2).length > 0) {
    let e3 = t2.variants.get(`data`), n3 = e3 == null ? void 0 : e3.applyFn, r3 = e3 == null ? void 0 : e3.compounds;
    t2.variants.functional(`data`, (e4, t3) => {
      let r4 = t3.value;
      return r4 && r4.kind === `named` && r4.value in i2 ? n3 == null ? void 0 : n3(e4, { ...t3, value: { kind: `arbitrary`, value: i2[r4.value] } }) : n3 == null ? void 0 : n3(e4, t3);
    }, { compounds: r3 });
  }
}
var ri = /^[a-z]+$/;
async function ii({ designSystem: e2, base: t2, ast: n2, loadModule: r2, sources: i2 }) {
  let a2 = 0, o2 = [], s2 = [];
  G(n2, (e3, { parent: t3, replaceWith: n3, context: r3 }) => {
    if (e3.kind === `at-rule`) {
      if (e3.name === `@plugin`) {
        if (t3 !== null) throw Error("`@plugin` cannot be nested.");
        let i3 = e3.params.slice(1, -1);
        if (i3.length === 0) throw Error("`@plugin` must have a path.");
        let s3 = {};
        for (let t4 of e3.nodes ?? []) {
          if (t4.kind !== `declaration`) throw Error(`Unexpected \`@plugin\` option:

${wt([t4])}

\`@plugin\` options must be a flat list of declarations.`);
          if (t4.value === void 0) continue;
          let e4 = t4.value, n4 = v(e4, `,`).map((e5) => {
            if (e5 = e5.trim(), e5 === `null`) return null;
            if (e5 === `true`) return true;
            if (e5 === `false`) return false;
            if (Number.isNaN(Number(e5))) {
              if (e5[0] === `"` && e5[e5.length - 1] === `"` || e5[0] === `'` && e5[e5.length - 1] === `'`) return e5.slice(1, -1);
              if (e5[0] === `{` && e5[e5.length - 1] === `}`) throw Error(`Unexpected \`@plugin\` option: Value of declaration \`${wt([t4]).trim()}\` is not supported.

Using an object as a plugin option is currently only supported in JavaScript configuration files.`);
            } else return Number(e5);
            return e5;
          });
          s3[t4.property] = n4.length === 1 ? n4[0] : n4;
        }
        o2.push([{ id: i3, base: r3.base, reference: !!r3.reference }, Object.keys(s3).length > 0 ? s3 : null]), n3([]), a2 |= 4;
        return;
      }
      if (e3.name === `@config`) {
        if (e3.nodes.length > 0) throw Error("`@config` cannot have a body.");
        if (t3 !== null) throw Error("`@config` cannot be nested.");
        s2.push({ id: e3.params.slice(1, -1), base: r3.base, reference: !!r3.reference }), n3([]), a2 |= 4;
        return;
      }
    }
  }), $r(e2);
  let c2 = e2.resolveThemeValue;
  if (e2.resolveThemeValue = function(r3, o3) {
    return r3.startsWith(`--`) ? c2(r3, o3) : (a2 |= ai({ designSystem: e2, base: t2, ast: n2, sources: i2, configs: [], pluginDetails: [] }), e2.resolveThemeValue(r3, o3));
  }, !o2.length && !s2.length) return 0;
  let [l2, u2] = await Promise.all([Promise.all(s2.map(async ({ id: e3, base: t3, reference: n3 }) => {
    let i3 = await r2(e3, t3, `config`);
    return { path: e3, base: i3.base, config: i3.module, reference: n3 };
  })), Promise.all(o2.map(async ([{ id: e3, base: t3, reference: n3 }, i3]) => {
    let a3 = await r2(e3, t3, `plugin`);
    return { path: e3, base: a3.base, plugin: a3.module, options: i3, reference: n3 };
  }))]);
  return a2 |= ai({ designSystem: e2, base: t2, ast: n2, sources: i2, configs: l2, pluginDetails: u2 }), a2;
}
function ai({ designSystem: e2, base: t2, ast: n2, sources: r2, configs: i2, pluginDetails: a2 }) {
  let o2 = 0, s2 = [...a2.map((e3) => {
    if (!e3.options) return { config: { plugins: [e3.plugin] }, base: e3.base, reference: e3.reference };
    if (`__isOptionsFunction` in e3.plugin) return { config: { plugins: [e3.plugin(e3.options)] }, base: e3.base, reference: e3.reference };
    throw Error(`The plugin "${e3.path}" does not accept options`);
  }), ...i2], { resolvedConfig: c2 } = Kr(e2, [{ config: Wr(e2.theme), base: t2, reference: true }, ...s2, { config: { plugins: [Qr] }, base: t2, reference: true }]), { resolvedConfig: l2, replacedThemeKeys: u2 } = Kr(e2, s2), d2 = e2.resolveThemeValue;
  e2.resolveThemeValue = function(e3, t3) {
    if (e3[0] === `-` && e3[1] === `-`) return d2(e3, t3);
    let n3 = p2.theme(e3, void 0);
    if (Array.isArray(n3) && n3.length === 2) return n3[0];
    if (Array.isArray(n3)) return n3.join(`, `);
    if (typeof n3 == `string`) return n3;
  };
  let f2 = { designSystem: e2, ast: n2, resolvedConfig: c2, featuresRef: { set current(e3) {
    o2 |= e3;
  } } }, p2 = zr({ ...f2, referenceMode: false }), m2;
  for (let { handler: e3, reference: t3 } of c2.plugins) t3 ? (m2 || (m2 = zr({ ...f2, referenceMode: true })), e3(m2)) : e3(p2);
  if ($n(e2, l2, u2), Hr(e2, l2, u2), ni(l2, e2), ei(l2, e2), Xr(l2, e2), !e2.theme.prefix && c2.prefix) {
    if (c2.prefix.endsWith(`-`) && (c2.prefix = c2.prefix.slice(0, -1), console.warn(`The prefix "${c2.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only and is written as a variant before all utilities. We have fixed up the prefix for you. Remove the trailing \`-\` to silence this warning.`)), !ri.test(c2.prefix)) throw Error(`The prefix "${c2.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
    e2.theme.prefix = c2.prefix;
  }
  if (!e2.important && c2.important === true && (e2.important = true), typeof c2.important == `string`) {
    let e3 = c2.important;
    G(n2, (t3, { replaceWith: n3, parent: r3 }) => {
      if (t3.kind === `at-rule` && !(t3.name !== `@tailwind` || t3.params !== `utilities`)) return (r3 == null ? void 0 : r3.kind) === `rule` && r3.selector === e3 || n3(B(e3, [t3])), 2;
    });
  }
  for (let t3 of c2.blocklist) e2.invalidCandidates.add(t3);
  for (let e3 of c2.content.files) {
    if (`raw` in e3) throw Error(`Error in the config file/plugin/preset. The \`content\` key contains a \`raw\` entry:

${JSON.stringify(e3, null, 2)}

This feature is not currently supported.`);
    let t3 = false;
    e3.pattern[0] == `!` && (t3 = true, e3.pattern = e3.pattern.slice(1)), r2.push({ ...e3, negated: t3 });
  }
  return o2;
}
function oi(e2) {
  let t2 = [0];
  for (let n3 = 0; n3 < e2.length; n3++) e2.charCodeAt(n3) === 10 && t2.push(n3 + 1);
  function n2(e3) {
    let n3 = 0, r3 = t2.length;
    for (; r3 > 0; ) {
      let i3 = (r3 | 0) >> 1, a2 = n3 + i3;
      t2[a2] <= e3 ? (n3 = a2 + 1, r3 = r3 - i3 - 1) : r3 = i3;
    }
    --n3;
    let i2 = e3 - t2[n3];
    return { line: n3 + 1, column: i2 };
  }
  function r2({ line: e3, column: n3 }) {
    --e3, e3 = Math.min(Math.max(e3, 0), t2.length - 1);
    let r3 = t2[e3], i2 = t2[e3 + 1] ?? r3;
    return Math.min(Math.max(r3 + n3, 0), i2);
  }
  return { find: n2, findOffset: r2 };
}
function si({ ast: e2 }) {
  let t2 = new I((e3) => oi(e3.code)), n2 = new I((e3) => ({ url: e3.file, content: e3.code, ignore: false })), r2 = { file: null, sources: [], mappings: [] };
  G(e2, (e3) => {
    if (!e3.src || !e3.dst) return;
    let i2 = n2.get(e3.src[0]);
    if (!i2.content) return;
    let a2 = t2.get(e3.src[0]), o2 = t2.get(e3.dst[0]), s2 = i2.content.slice(e3.src[1], e3.src[2]), c2 = 0;
    for (let t3 of s2.split(`
`)) {
      if (t3.trim() !== ``) {
        let t4 = a2.find(e3.src[1] + c2), n3 = o2.find(e3.dst[1]);
        r2.mappings.push({ name: null, originalPosition: { source: i2, ...t4 }, generatedPosition: n3 });
      }
      c2 += t3.length, c2 += 1;
    }
    let l2 = a2.find(e3.src[2]), u2 = o2.find(e3.dst[2]);
    r2.mappings.push({ name: null, originalPosition: { source: i2, ...l2 }, generatedPosition: u2 });
  });
  for (let e3 of t2.keys()) r2.sources.push(n2.get(e3));
  return r2.mappings.sort((e3, t3) => {
    var _a2, _b, _c, _d;
    return e3.generatedPosition.line - t3.generatedPosition.line || e3.generatedPosition.column - t3.generatedPosition.column || (((_a2 = e3.originalPosition) == null ? void 0 : _a2.line) ?? 0) - (((_b = t3.originalPosition) == null ? void 0 : _b.line) ?? 0) || (((_c = e3.originalPosition) == null ? void 0 : _c.column) ?? 0) - (((_d = t3.originalPosition) == null ? void 0 : _d.column) ?? 0);
  }), r2;
}
var ci = /^(-?\d+)\.\.(-?\d+)(?:\.\.(-?\d+))?$/;
function li(e2) {
  let t2 = e2.indexOf(`{`);
  if (t2 === -1) return [e2];
  let n2 = [], r2 = e2.slice(0, t2), i2 = e2.slice(t2), a2 = 0, o2 = i2.lastIndexOf(`}`);
  for (let e3 = 0; e3 < i2.length; e3++) {
    let t3 = i2[e3];
    if (t3 === `{`) a2++;
    else if (t3 === `}` && (a2--, a2 === 0)) {
      o2 = e3;
      break;
    }
  }
  if (o2 === -1) throw Error(`The pattern \`${e2}\` is not balanced.`);
  let s2 = i2.slice(1, o2), c2 = i2.slice(o2 + 1), l2;
  l2 = ui(s2) ? di(s2) : v(s2, `,`), l2 = l2.flatMap((e3) => li(e3));
  let u2 = li(c2);
  for (let e3 of u2) for (let t3 of l2) n2.push(r2 + t3 + e3);
  return n2;
}
function ui(e2) {
  return ci.test(e2);
}
function di(e2) {
  let t2 = e2.match(ci);
  if (!t2) return [e2];
  let [, n2, r2, i2] = t2, a2 = i2 ? parseInt(i2, 10) : void 0, o2 = [];
  if (/^-?\d+$/.test(n2) && /^-?\d+$/.test(r2)) {
    let e3 = parseInt(n2, 10), t3 = parseInt(r2, 10);
    if (a2 === void 0 && (a2 = e3 <= t3 ? 1 : -1), a2 === 0) throw Error(`Step cannot be zero in sequence expansion.`);
    let i3 = e3 < t3;
    i3 && a2 < 0 && (a2 = -a2), !i3 && a2 > 0 && (a2 = -a2);
    for (let n3 = e3; i3 ? n3 <= t3 : n3 >= t3; n3 += a2) o2.push(n3.toString());
  }
  return o2;
}
var fi = /^[a-z]+$/, pi = ((e2) => (e2[e2.None = 0] = `None`, e2[e2.AtProperty = 1] = `AtProperty`, e2[e2.ColorMix = 2] = `ColorMix`, e2[e2.All = 3] = `All`, e2))(pi || {});
function mi() {
  throw Error("No `loadModule` function provided to `compile`");
}
function hi() {
  throw Error("No `loadStylesheet` function provided to `compile`");
}
function gi(e2) {
  let t2 = 0, n2 = null;
  for (let r2 of v(e2, ` `)) r2 === `reference` ? t2 |= 2 : r2 === `inline` ? t2 |= 1 : r2 === `default` ? t2 |= 4 : r2 === `static` ? t2 |= 8 : r2.startsWith(`prefix(`) && r2.endsWith(`)`) && (n2 = r2.slice(7, -1));
  return [t2, n2];
}
var _i = ((e2) => (e2[e2.None = 0] = `None`, e2[e2.AtApply = 1] = `AtApply`, e2[e2.AtImport = 2] = `AtImport`, e2[e2.JsPluginCompat = 4] = `JsPluginCompat`, e2[e2.ThemeFunction = 8] = `ThemeFunction`, e2[e2.Utilities = 16] = `Utilities`, e2[e2.Variants = 32] = `Variants`, e2))(_i || {});
async function vi(e2, { base: t2 = ``, from: n2, loadModule: r2 = mi, loadStylesheet: i2 = hi } = {}) {
  let a2 = 0;
  e2 = [xt({ base: t2 }, e2)], a2 |= await Yn(e2, t2, i2, 0, n2 !== void 0);
  let o2 = null, s2 = new et(), c2 = [], l2 = [], u2 = null, d2 = null, f2 = [], p2 = [], m2 = [], h2 = [], g2 = null;
  G(e2, (e3, { parent: t3, replaceWith: n3, context: r3 }) => {
    if (e3.kind === `at-rule`) {
      if (e3.name === `@tailwind` && (e3.params === `utilities` || e3.params.startsWith(`utilities`))) {
        if (d2 !== null) {
          n3([]);
          return;
        }
        if (r3.reference) {
          n3([]);
          return;
        }
        let t4 = v(e3.params, ` `);
        for (let e4 of t4) if (e4.startsWith(`source(`)) {
          let t5 = e4.slice(7, -1);
          if (t5 === `none`) {
            g2 = t5;
            continue;
          }
          if (t5[0] === `"` && t5[t5.length - 1] !== `"` || t5[0] === `'` && t5[t5.length - 1] !== `'` || t5[0] !== `'` && t5[0] !== `"`) throw Error("`source(\u2026)` paths must be quoted.");
          g2 = { base: r3.sourceBase ?? r3.base, pattern: t5.slice(1, -1) };
        }
        d2 = e3, a2 |= 16;
      }
      if (e3.name === `@utility`) {
        if (t3 !== null) throw Error("`@utility` cannot be nested.");
        if (e3.nodes.length === 0) throw Error(`\`@utility ${e3.params}\` is empty. Utilities should include at least one property.`);
        let n4 = pn(e3);
        if (n4 === null) throw Error(`\`@utility ${e3.params}\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter.`);
        l2.push(n4);
      }
      if (e3.name === `@source`) {
        if (e3.nodes.length > 0) throw Error("`@source` cannot have a body.");
        if (t3 !== null) throw Error("`@source` cannot be nested.");
        let i3 = false, a3 = false, o3 = e3.params;
        if (o3[0] === `n` && o3.startsWith(`not `) && (i3 = true, o3 = o3.slice(4)), o3[0] === `i` && o3.startsWith(`inline(`) && (a3 = true, o3 = o3.slice(7, -1)), o3[0] === `"` && o3[o3.length - 1] !== `"` || o3[0] === `'` && o3[o3.length - 1] !== `'` || o3[0] !== `'` && o3[0] !== `"`) throw Error("`@source` paths must be quoted.");
        let s3 = o3.slice(1, -1);
        if (a3) {
          let e4 = i3 ? h2 : m2, t4 = v(s3, ` `);
          for (let n4 of t4) for (let t5 of li(n4)) e4.push(t5);
        } else p2.push({ base: r3.base, pattern: s3, negated: i3 });
        n3([]);
        return;
      }
      if (e3.name === `@variant` && (t3 === null ? e3.nodes.length === 0 ? e3.name = `@custom-variant` : (G(e3.nodes, (t4) => {
        if (t4.kind === `at-rule` && t4.name === `@slot`) return e3.name = `@custom-variant`, 2;
      }), e3.name === `@variant` && f2.push(e3)) : f2.push(e3)), e3.name === `@custom-variant`) {
        if (t3 !== null) throw Error("`@custom-variant` cannot be nested.");
        n3([]);
        let [r4, i3] = v(e3.params, ` `);
        if (!Mn.test(r4)) throw Error(`\`@custom-variant ${r4}\` defines an invalid variant name. Variants should only contain alphanumeric, dashes or underscore characters.`);
        if (e3.nodes.length > 0 && i3) throw Error(`\`@custom-variant ${r4}\` cannot have both a selector and a body.`);
        if (e3.nodes.length === 0) {
          if (!i3) throw Error(`\`@custom-variant ${r4}\` has no selector or body.`);
          let e4 = v(i3.slice(1, -1), `,`);
          if (e4.length === 0 || e4.some((e5) => e5.trim() === ``)) throw Error(`\`@custom-variant ${r4} (${e4.join(`,`)})\` selector is invalid.`);
          let t4 = [], n4 = [];
          for (let r5 of e4) r5 = r5.trim(), r5[0] === `@` ? t4.push(r5) : n4.push(r5);
          c2.push((e5) => {
            e5.variants.static(r4, (e6) => {
              let r5 = [];
              n4.length > 0 && r5.push(B(n4.join(`, `), e6.nodes));
              for (let n5 of t4) r5.push(H(n5, e6.nodes));
              e6.nodes = r5;
            }, { compounds: Pn([...n4, ...t4]) });
          });
          return;
        } else {
          c2.push((t4) => {
            t4.variants.fromAst(r4, e3.nodes);
          });
          return;
        }
      }
      if (e3.name === `@media`) {
        let t4 = v(e3.params, ` `), i3 = [];
        for (let n4 of t4) if (n4.startsWith(`source(`)) {
          let t5 = n4.slice(7, -1);
          G(e3.nodes, (e4, { replaceWith: n5 }) => {
            if (e4.kind === `at-rule` && e4.name === `@tailwind` && e4.params === `utilities`) return e4.params += ` source(${t5})`, n5([xt({ sourceBase: r3.base }, [e4])]), 2;
          });
        } else if (n4.startsWith(`theme(`)) {
          let t5 = n4.slice(6, -1), r4 = t5.includes(`reference`);
          G(e3.nodes, (e4) => {
            if (e4.kind !== `at-rule`) {
              if (r4) throw Error('Files imported with `@import "\u2026" theme(reference)` must only contain `@theme` blocks.\nUse `@reference "\u2026";` instead.');
              return 0;
            }
            if (e4.name === `@theme`) return e4.params += ` ` + t5, 1;
          });
        } else if (n4.startsWith(`prefix(`)) {
          let t5 = n4.slice(7, -1);
          G(e3.nodes, (e4) => {
            if (e4.kind === `at-rule` && e4.name === `@theme`) return e4.params += ` prefix(${t5})`, 1;
          });
        } else n4 === `important` ? o2 = true : n4 === `reference` ? e3.nodes = [xt({ reference: true }, e3.nodes)] : i3.push(n4);
        i3.length > 0 ? e3.params = i3.join(` `) : t4.length > 0 && n3(e3.nodes);
      }
      if (e3.name === `@theme`) {
        let [t4, i3] = gi(e3.params);
        if (r3.reference && (t4 |= 2), i3) {
          if (!fi.test(i3)) throw Error(`The prefix "${i3}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
          s2.prefix = i3;
        }
        return G(e3.nodes, (n4) => {
          if (n4.kind === `at-rule` && n4.name === `@keyframes`) return s2.addKeyframes(n4), 1;
          if (n4.kind === `comment`) return;
          if (n4.kind === `declaration` && n4.property.startsWith(`--`)) {
            s2.add(Ze(n4.property), n4.value ?? ``, t4, n4.src);
            return;
          }
          let r4 = wt([V(e3.name, e3.params, [n4])]).split(`
`).map((e4, t5, n5) => `${t5 === 0 || t5 >= n5.length - 2 ? ` ` : `>`} ${e4}`).join(`
`);
          throw Error(`\`@theme\` blocks must only contain custom properties or \`@keyframes\`.

${r4}`);
        }), u2 ? n3([]) : (u2 = B(`:root, :host`, []), u2.src = e3.src, n3([u2])), 1;
      }
    }
  });
  let _2 = Rn(s2);
  if (o2 && (_2.important = o2), h2.length > 0) for (let e3 of h2) _2.invalidCandidates.add(e3);
  a2 |= await ii({ designSystem: _2, base: t2, ast: e2, loadModule: r2, sources: p2 });
  for (let e3 of c2) e3(_2);
  for (let e3 of l2) e3(_2);
  if (u2) {
    let t3 = [];
    for (let [e3, n4] of _2.theme.entries()) {
      if (n4.options & 2) continue;
      let r3 = U(Xe(e3), n4.value);
      r3.src = n4.src, t3.push(r3);
    }
    let n3 = _2.theme.getKeyframes();
    for (let t4 of n3) e2.push(xt({ theme: true }, [W([t4])]));
    u2.nodes = [xt({ theme: true }, t3)];
  }
  if (f2.length > 0) {
    for (let e3 of f2) {
      let t3 = B(`&`, e3.nodes), n3 = e3.params, r3 = _2.parseVariant(n3);
      if (r3 === null) throw Error(`Cannot use \`@variant\` with unknown variant: ${n3}`);
      if (Hn(t3, r3, _2.variants) === null) throw Error(`Cannot use \`@variant\` with variant: ${n3}`);
      Object.assign(e3, t3);
    }
    a2 |= 32;
  }
  if (a2 |= Sn(e2, _2), a2 |= qn(e2, _2), d2) {
    let e3 = d2;
    e3.kind = `context`, e3.context = {};
  }
  return G(e2, (e3, { replaceWith: t3 }) => {
    if (e3.kind === `at-rule`) return e3.name === `@utility` && t3([]), 1;
  }), { designSystem: _2, ast: e2, sources: p2, root: g2, utilitiesNode: d2, features: a2, inlineCandidates: m2 };
}
async function yi(e2, t2 = {}) {
  let { designSystem: n2, ast: r2, sources: i2, root: a2, utilitiesNode: o2, features: s2, inlineCandidates: c2 } = await vi(e2, t2);
  r2.unshift(bt(`! tailwindcss v${De} | MIT License | https://tailwindcss.com `));
  function l2(e3) {
    n2.invalidCandidates.add(e3);
  }
  let u2 = /* @__PURE__ */ new Set(), d2 = null, f2 = 0, p2 = false;
  for (let e3 of c2) n2.invalidCandidates.has(e3) || (u2.add(e3), p2 = true);
  return { sources: i2, root: a2, features: s2, build(i3) {
    if (s2 === 0) return e2;
    if (!o2) return d2 ?? (d2 = Ct(r2, n2, t2.polyfills)), d2;
    let a3 = p2, c3 = false;
    p2 = false;
    let m2 = u2.size;
    for (let e3 of i3) if (!n2.invalidCandidates.has(e3)) if (e3[0] === `-` && e3[1] === `-`) {
      let t3 = n2.theme.markUsedVariable(e3);
      a3 || (a3 = t3), c3 || (c3 = t3);
    } else u2.add(e3), a3 || (a3 = u2.size !== m2);
    if (!a3) return d2 ?? (d2 = Ct(r2, n2, t2.polyfills)), d2;
    let h2 = Bn(u2, n2, { onInvalidCandidate: l2 }).astNodes;
    return t2.from && G(h2, (e3) => {
      e3.src ?? (e3.src = o2.src);
    }), !c3 && f2 === h2.length ? (d2 ?? (d2 = Ct(r2, n2, t2.polyfills)), d2) : (f2 = h2.length, o2.nodes = h2, d2 = Ct(r2, n2, t2.polyfills), d2);
  } };
}
async function bi(e2, t2 = {}) {
  let n2 = qe(e2, { from: t2.from }), r2 = await yi(n2, t2), i2 = n2, a2 = e2;
  return { ...r2, build(e3) {
    let n3 = r2.build(e3);
    return n3 === i2 || (a2 = wt(n3, !!t2.from), i2 = n3), a2;
  }, buildSourceMap() {
    return si({ ast: i2 });
  } };
}
async function xi(e2, t2 = {}) {
  return (await vi(qe(e2), t2)).designSystem;
}
var Si = `@theme default {
  --font-sans:
    ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  --font-serif: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
  --font-mono:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;

  --color-red-50: oklch(97.1% 0.013 17.38);
  --color-red-100: oklch(93.6% 0.032 17.717);
  --color-red-200: oklch(88.5% 0.062 18.334);
  --color-red-300: oklch(80.8% 0.114 19.571);
  --color-red-400: oklch(70.4% 0.191 22.216);
  --color-red-500: oklch(63.7% 0.237 25.331);
  --color-red-600: oklch(57.7% 0.245 27.325);
  --color-red-700: oklch(50.5% 0.213 27.518);
  --color-red-800: oklch(44.4% 0.177 26.899);
  --color-red-900: oklch(39.6% 0.141 25.723);
  --color-red-950: oklch(25.8% 0.092 26.042);

  --color-orange-50: oklch(98% 0.016 73.684);
  --color-orange-100: oklch(95.4% 0.038 75.164);
  --color-orange-200: oklch(90.1% 0.076 70.697);
  --color-orange-300: oklch(83.7% 0.128 66.29);
  --color-orange-400: oklch(75% 0.183 55.934);
  --color-orange-500: oklch(70.5% 0.213 47.604);
  --color-orange-600: oklch(64.6% 0.222 41.116);
  --color-orange-700: oklch(55.3% 0.195 38.402);
  --color-orange-800: oklch(47% 0.157 37.304);
  --color-orange-900: oklch(40.8% 0.123 38.172);
  --color-orange-950: oklch(26.6% 0.079 36.259);

  --color-amber-50: oklch(98.7% 0.022 95.277);
  --color-amber-100: oklch(96.2% 0.059 95.617);
  --color-amber-200: oklch(92.4% 0.12 95.746);
  --color-amber-300: oklch(87.9% 0.169 91.605);
  --color-amber-400: oklch(82.8% 0.189 84.429);
  --color-amber-500: oklch(76.9% 0.188 70.08);
  --color-amber-600: oklch(66.6% 0.179 58.318);
  --color-amber-700: oklch(55.5% 0.163 48.998);
  --color-amber-800: oklch(47.3% 0.137 46.201);
  --color-amber-900: oklch(41.4% 0.112 45.904);
  --color-amber-950: oklch(27.9% 0.077 45.635);

  --color-yellow-50: oklch(98.7% 0.026 102.212);
  --color-yellow-100: oklch(97.3% 0.071 103.193);
  --color-yellow-200: oklch(94.5% 0.129 101.54);
  --color-yellow-300: oklch(90.5% 0.182 98.111);
  --color-yellow-400: oklch(85.2% 0.199 91.936);
  --color-yellow-500: oklch(79.5% 0.184 86.047);
  --color-yellow-600: oklch(68.1% 0.162 75.834);
  --color-yellow-700: oklch(55.4% 0.135 66.442);
  --color-yellow-800: oklch(47.6% 0.114 61.907);
  --color-yellow-900: oklch(42.1% 0.095 57.708);
  --color-yellow-950: oklch(28.6% 0.066 53.813);

  --color-lime-50: oklch(98.6% 0.031 120.757);
  --color-lime-100: oklch(96.7% 0.067 122.328);
  --color-lime-200: oklch(93.8% 0.127 124.321);
  --color-lime-300: oklch(89.7% 0.196 126.665);
  --color-lime-400: oklch(84.1% 0.238 128.85);
  --color-lime-500: oklch(76.8% 0.233 130.85);
  --color-lime-600: oklch(64.8% 0.2 131.684);
  --color-lime-700: oklch(53.2% 0.157 131.589);
  --color-lime-800: oklch(45.3% 0.124 130.933);
  --color-lime-900: oklch(40.5% 0.101 131.063);
  --color-lime-950: oklch(27.4% 0.072 132.109);

  --color-green-50: oklch(98.2% 0.018 155.826);
  --color-green-100: oklch(96.2% 0.044 156.743);
  --color-green-200: oklch(92.5% 0.084 155.995);
  --color-green-300: oklch(87.1% 0.15 154.449);
  --color-green-400: oklch(79.2% 0.209 151.711);
  --color-green-500: oklch(72.3% 0.219 149.579);
  --color-green-600: oklch(62.7% 0.194 149.214);
  --color-green-700: oklch(52.7% 0.154 150.069);
  --color-green-800: oklch(44.8% 0.119 151.328);
  --color-green-900: oklch(39.3% 0.095 152.535);
  --color-green-950: oklch(26.6% 0.065 152.934);

  --color-emerald-50: oklch(97.9% 0.021 166.113);
  --color-emerald-100: oklch(95% 0.052 163.051);
  --color-emerald-200: oklch(90.5% 0.093 164.15);
  --color-emerald-300: oklch(84.5% 0.143 164.978);
  --color-emerald-400: oklch(76.5% 0.177 163.223);
  --color-emerald-500: oklch(69.6% 0.17 162.48);
  --color-emerald-600: oklch(59.6% 0.145 163.225);
  --color-emerald-700: oklch(50.8% 0.118 165.612);
  --color-emerald-800: oklch(43.2% 0.095 166.913);
  --color-emerald-900: oklch(37.8% 0.077 168.94);
  --color-emerald-950: oklch(26.2% 0.051 172.552);

  --color-teal-50: oklch(98.4% 0.014 180.72);
  --color-teal-100: oklch(95.3% 0.051 180.801);
  --color-teal-200: oklch(91% 0.096 180.426);
  --color-teal-300: oklch(85.5% 0.138 181.071);
  --color-teal-400: oklch(77.7% 0.152 181.912);
  --color-teal-500: oklch(70.4% 0.14 182.503);
  --color-teal-600: oklch(60% 0.118 184.704);
  --color-teal-700: oklch(51.1% 0.096 186.391);
  --color-teal-800: oklch(43.7% 0.078 188.216);
  --color-teal-900: oklch(38.6% 0.063 188.416);
  --color-teal-950: oklch(27.7% 0.046 192.524);

  --color-cyan-50: oklch(98.4% 0.019 200.873);
  --color-cyan-100: oklch(95.6% 0.045 203.388);
  --color-cyan-200: oklch(91.7% 0.08 205.041);
  --color-cyan-300: oklch(86.5% 0.127 207.078);
  --color-cyan-400: oklch(78.9% 0.154 211.53);
  --color-cyan-500: oklch(71.5% 0.143 215.221);
  --color-cyan-600: oklch(60.9% 0.126 221.723);
  --color-cyan-700: oklch(52% 0.105 223.128);
  --color-cyan-800: oklch(45% 0.085 224.283);
  --color-cyan-900: oklch(39.8% 0.07 227.392);
  --color-cyan-950: oklch(30.2% 0.056 229.695);

  --color-sky-50: oklch(97.7% 0.013 236.62);
  --color-sky-100: oklch(95.1% 0.026 236.824);
  --color-sky-200: oklch(90.1% 0.058 230.902);
  --color-sky-300: oklch(82.8% 0.111 230.318);
  --color-sky-400: oklch(74.6% 0.16 232.661);
  --color-sky-500: oklch(68.5% 0.169 237.323);
  --color-sky-600: oklch(58.8% 0.158 241.966);
  --color-sky-700: oklch(50% 0.134 242.749);
  --color-sky-800: oklch(44.3% 0.11 240.79);
  --color-sky-900: oklch(39.1% 0.09 240.876);
  --color-sky-950: oklch(29.3% 0.066 243.157);

  --color-blue-50: oklch(97% 0.014 254.604);
  --color-blue-100: oklch(93.2% 0.032 255.585);
  --color-blue-200: oklch(88.2% 0.059 254.128);
  --color-blue-300: oklch(80.9% 0.105 251.813);
  --color-blue-400: oklch(70.7% 0.165 254.624);
  --color-blue-500: oklch(62.3% 0.214 259.815);
  --color-blue-600: oklch(54.6% 0.245 262.881);
  --color-blue-700: oklch(48.8% 0.243 264.376);
  --color-blue-800: oklch(42.4% 0.199 265.638);
  --color-blue-900: oklch(37.9% 0.146 265.522);
  --color-blue-950: oklch(28.2% 0.091 267.935);

  --color-indigo-50: oklch(96.2% 0.018 272.314);
  --color-indigo-100: oklch(93% 0.034 272.788);
  --color-indigo-200: oklch(87% 0.065 274.039);
  --color-indigo-300: oklch(78.5% 0.115 274.713);
  --color-indigo-400: oklch(67.3% 0.182 276.935);
  --color-indigo-500: oklch(58.5% 0.233 277.117);
  --color-indigo-600: oklch(51.1% 0.262 276.966);
  --color-indigo-700: oklch(45.7% 0.24 277.023);
  --color-indigo-800: oklch(39.8% 0.195 277.366);
  --color-indigo-900: oklch(35.9% 0.144 278.697);
  --color-indigo-950: oklch(25.7% 0.09 281.288);

  --color-violet-50: oklch(96.9% 0.016 293.756);
  --color-violet-100: oklch(94.3% 0.029 294.588);
  --color-violet-200: oklch(89.4% 0.057 293.283);
  --color-violet-300: oklch(81.1% 0.111 293.571);
  --color-violet-400: oklch(70.2% 0.183 293.541);
  --color-violet-500: oklch(60.6% 0.25 292.717);
  --color-violet-600: oklch(54.1% 0.281 293.009);
  --color-violet-700: oklch(49.1% 0.27 292.581);
  --color-violet-800: oklch(43.2% 0.232 292.759);
  --color-violet-900: oklch(38% 0.189 293.745);
  --color-violet-950: oklch(28.3% 0.141 291.089);

  --color-purple-50: oklch(97.7% 0.014 308.299);
  --color-purple-100: oklch(94.6% 0.033 307.174);
  --color-purple-200: oklch(90.2% 0.063 306.703);
  --color-purple-300: oklch(82.7% 0.119 306.383);
  --color-purple-400: oklch(71.4% 0.203 305.504);
  --color-purple-500: oklch(62.7% 0.265 303.9);
  --color-purple-600: oklch(55.8% 0.288 302.321);
  --color-purple-700: oklch(49.6% 0.265 301.924);
  --color-purple-800: oklch(43.8% 0.218 303.724);
  --color-purple-900: oklch(38.1% 0.176 304.987);
  --color-purple-950: oklch(29.1% 0.149 302.717);

  --color-fuchsia-50: oklch(97.7% 0.017 320.058);
  --color-fuchsia-100: oklch(95.2% 0.037 318.852);
  --color-fuchsia-200: oklch(90.3% 0.076 319.62);
  --color-fuchsia-300: oklch(83.3% 0.145 321.434);
  --color-fuchsia-400: oklch(74% 0.238 322.16);
  --color-fuchsia-500: oklch(66.7% 0.295 322.15);
  --color-fuchsia-600: oklch(59.1% 0.293 322.896);
  --color-fuchsia-700: oklch(51.8% 0.253 323.949);
  --color-fuchsia-800: oklch(45.2% 0.211 324.591);
  --color-fuchsia-900: oklch(40.1% 0.17 325.612);
  --color-fuchsia-950: oklch(29.3% 0.136 325.661);

  --color-pink-50: oklch(97.1% 0.014 343.198);
  --color-pink-100: oklch(94.8% 0.028 342.258);
  --color-pink-200: oklch(89.9% 0.061 343.231);
  --color-pink-300: oklch(82.3% 0.12 346.018);
  --color-pink-400: oklch(71.8% 0.202 349.761);
  --color-pink-500: oklch(65.6% 0.241 354.308);
  --color-pink-600: oklch(59.2% 0.249 0.584);
  --color-pink-700: oklch(52.5% 0.223 3.958);
  --color-pink-800: oklch(45.9% 0.187 3.815);
  --color-pink-900: oklch(40.8% 0.153 2.432);
  --color-pink-950: oklch(28.4% 0.109 3.907);

  --color-rose-50: oklch(96.9% 0.015 12.422);
  --color-rose-100: oklch(94.1% 0.03 12.58);
  --color-rose-200: oklch(89.2% 0.058 10.001);
  --color-rose-300: oklch(81% 0.117 11.638);
  --color-rose-400: oklch(71.2% 0.194 13.428);
  --color-rose-500: oklch(64.5% 0.246 16.439);
  --color-rose-600: oklch(58.6% 0.253 17.585);
  --color-rose-700: oklch(51.4% 0.222 16.935);
  --color-rose-800: oklch(45.5% 0.188 13.697);
  --color-rose-900: oklch(41% 0.159 10.272);
  --color-rose-950: oklch(27.1% 0.105 12.094);

  --color-slate-50: oklch(98.4% 0.003 247.858);
  --color-slate-100: oklch(96.8% 0.007 247.896);
  --color-slate-200: oklch(92.9% 0.013 255.508);
  --color-slate-300: oklch(86.9% 0.022 252.894);
  --color-slate-400: oklch(70.4% 0.04 256.788);
  --color-slate-500: oklch(55.4% 0.046 257.417);
  --color-slate-600: oklch(44.6% 0.043 257.281);
  --color-slate-700: oklch(37.2% 0.044 257.287);
  --color-slate-800: oklch(27.9% 0.041 260.031);
  --color-slate-900: oklch(20.8% 0.042 265.755);
  --color-slate-950: oklch(12.9% 0.042 264.695);

  --color-gray-50: oklch(98.5% 0.002 247.839);
  --color-gray-100: oklch(96.7% 0.003 264.542);
  --color-gray-200: oklch(92.8% 0.006 264.531);
  --color-gray-300: oklch(87.2% 0.01 258.338);
  --color-gray-400: oklch(70.7% 0.022 261.325);
  --color-gray-500: oklch(55.1% 0.027 264.364);
  --color-gray-600: oklch(44.6% 0.03 256.802);
  --color-gray-700: oklch(37.3% 0.034 259.733);
  --color-gray-800: oklch(27.8% 0.033 256.848);
  --color-gray-900: oklch(21% 0.034 264.665);
  --color-gray-950: oklch(13% 0.028 261.692);

  --color-zinc-50: oklch(98.5% 0 0);
  --color-zinc-100: oklch(96.7% 0.001 286.375);
  --color-zinc-200: oklch(92% 0.004 286.32);
  --color-zinc-300: oklch(87.1% 0.006 286.286);
  --color-zinc-400: oklch(70.5% 0.015 286.067);
  --color-zinc-500: oklch(55.2% 0.016 285.938);
  --color-zinc-600: oklch(44.2% 0.017 285.786);
  --color-zinc-700: oklch(37% 0.013 285.805);
  --color-zinc-800: oklch(27.4% 0.006 286.033);
  --color-zinc-900: oklch(21% 0.006 285.885);
  --color-zinc-950: oklch(14.1% 0.005 285.823);

  --color-neutral-50: oklch(98.5% 0 0);
  --color-neutral-100: oklch(97% 0 0);
  --color-neutral-200: oklch(92.2% 0 0);
  --color-neutral-300: oklch(87% 0 0);
  --color-neutral-400: oklch(70.8% 0 0);
  --color-neutral-500: oklch(55.6% 0 0);
  --color-neutral-600: oklch(43.9% 0 0);
  --color-neutral-700: oklch(37.1% 0 0);
  --color-neutral-800: oklch(26.9% 0 0);
  --color-neutral-900: oklch(20.5% 0 0);
  --color-neutral-950: oklch(14.5% 0 0);

  --color-stone-50: oklch(98.5% 0.001 106.423);
  --color-stone-100: oklch(97% 0.001 106.424);
  --color-stone-200: oklch(92.3% 0.003 48.717);
  --color-stone-300: oklch(86.9% 0.005 56.366);
  --color-stone-400: oklch(70.9% 0.01 56.259);
  --color-stone-500: oklch(55.3% 0.013 58.071);
  --color-stone-600: oklch(44.4% 0.011 73.639);
  --color-stone-700: oklch(37.4% 0.01 67.558);
  --color-stone-800: oklch(26.8% 0.007 34.298);
  --color-stone-900: oklch(21.6% 0.006 56.043);
  --color-stone-950: oklch(14.7% 0.004 49.25);

  --color-black: #000;
  --color-white: #fff;

  --spacing: 0.25rem;

  --breakpoint-sm: 40rem;
  --breakpoint-md: 48rem;
  --breakpoint-lg: 64rem;
  --breakpoint-xl: 80rem;
  --breakpoint-2xl: 96rem;

  --container-3xs: 16rem;
  --container-2xs: 18rem;
  --container-xs: 20rem;
  --container-sm: 24rem;
  --container-md: 28rem;
  --container-lg: 32rem;
  --container-xl: 36rem;
  --container-2xl: 42rem;
  --container-3xl: 48rem;
  --container-4xl: 56rem;
  --container-5xl: 64rem;
  --container-6xl: 72rem;
  --container-7xl: 80rem;

  --text-xs: 0.75rem;
  --text-xs--line-height: calc(1 / 0.75);
  --text-sm: 0.875rem;
  --text-sm--line-height: calc(1.25 / 0.875);
  --text-base: 1rem;
  --text-base--line-height: calc(1.5 / 1);
  --text-lg: 1.125rem;
  --text-lg--line-height: calc(1.75 / 1.125);
  --text-xl: 1.25rem;
  --text-xl--line-height: calc(1.75 / 1.25);
  --text-2xl: 1.5rem;
  --text-2xl--line-height: calc(2 / 1.5);
  --text-3xl: 1.875rem;
  --text-3xl--line-height: calc(2.25 / 1.875);
  --text-4xl: 2.25rem;
  --text-4xl--line-height: calc(2.5 / 2.25);
  --text-5xl: 3rem;
  --text-5xl--line-height: 1;
  --text-6xl: 3.75rem;
  --text-6xl--line-height: 1;
  --text-7xl: 4.5rem;
  --text-7xl--line-height: 1;
  --text-8xl: 6rem;
  --text-8xl--line-height: 1;
  --text-9xl: 8rem;
  --text-9xl--line-height: 1;

  --font-weight-thin: 100;
  --font-weight-extralight: 200;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;

  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0em;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;

  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  --radius-xs: 0.125rem;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-4xl: 2rem;

  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);
  --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
  --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);

  --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);
  --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);
  --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);
  --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
  --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
  --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);

  --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);
  --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);
  --text-shadow-sm:
    0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075);
  --text-shadow-md:
    0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1);
  --text-shadow-lg:
    0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0 0 0 / 0.1);

  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  --animate-spin: spin 1s linear infinite;
  --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  --animate-bounce: bounce 1s infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  --blur-xs: 4px;
  --blur-sm: 8px;
  --blur-md: 12px;
  --blur-lg: 16px;
  --blur-xl: 24px;
  --blur-2xl: 40px;
  --blur-3xl: 64px;

  --perspective-dramatic: 100px;
  --perspective-near: 300px;
  --perspective-normal: 500px;
  --perspective-midrange: 800px;
  --perspective-distant: 1200px;

  --aspect-video: 16 / 9;

  --default-transition-duration: 150ms;
  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --default-font-family: --theme(--font-sans, initial);
  --default-font-feature-settings: --theme(--font-sans--font-feature-settings, initial);
  --default-font-variation-settings: --theme(--font-sans--font-variation-settings, initial);
  --default-mono-font-family: --theme(--font-mono, initial);
  --default-mono-font-feature-settings: --theme(--font-mono--font-feature-settings, initial);
  --default-mono-font-variation-settings: --theme(--font-mono--font-variation-settings, initial);
}

/* Deprecated */
@theme default inline reference {
  --blur: 8px;
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);
  --radius: 0.25rem;
  --max-width-prose: 65ch;
}
`, Ci = `/*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
  2. Remove default margins and padding
  3. Reset all borders.
*/

*,
::after,
::before,
::backdrop,
::file-selector-button {
  box-sizing: border-box; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 2 */
  border: 0 solid; /* 3 */
}

/*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured \`sans\` font-family by default.
  5. Use the user's configured \`sans\` font-feature-settings by default.
  6. Use the user's configured \`sans\` font-variation-settings by default.
  7. Disable tap highlights on iOS.
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  tab-size: 4; /* 3 */
  font-family: --theme(
    --default-font-family,
    ui-sans-serif,
    system-ui,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji'
  ); /* 4 */
  font-feature-settings: --theme(--default-font-feature-settings, normal); /* 5 */
  font-variation-settings: --theme(--default-font-variation-settings, normal); /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Reset the default border style to a 1px solid border.
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
  -webkit-text-decoration: underline dotted;
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
  -webkit-text-decoration: inherit;
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
  font-family: --theme(
    --default-mono-font-family,
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    'Liberation Mono',
    'Courier New',
    monospace
  ); /* 1 */
  font-feature-settings: --theme(--default-mono-font-feature-settings, normal); /* 2 */
  font-variation-settings: --theme(--default-mono-font-variation-settings, normal); /* 3 */
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
  Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
  Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
  Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
  Make lists unstyled by default.
*/

ol,
ul,
menu {
  list-style: none;
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

/*
  1. Inherit font styles in all browsers.
  2. Remove border radius in all browsers.
  3. Remove background color in all browsers.
  4. Ensure consistent opacity for disabled states in all browsers.
*/

button,
input,
select,
optgroup,
textarea,
::file-selector-button {
  font: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  border-radius: 0; /* 2 */
  background-color: transparent; /* 3 */
  opacity: 1; /* 4 */
}

/*
  Restore default font weight.
*/

:where(select:is([multiple], [size])) optgroup {
  font-weight: bolder;
}

/*
  Restore indentation.
*/

:where(select:is([multiple], [size])) optgroup option {
  padding-inline-start: 20px;
}

/*
  Restore space after button.
*/

::file-selector-button {
  margin-inline-end: 4px;
}

/*
  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
*/

::placeholder {
  opacity: 1;
}

/*
  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not
  crash when using \`color-mix(\u2026)\` with \`currentcolor\`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)
*/

@supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or
  (contain-intrinsic-size: 1px) /* Safari 17+ */ {
  ::placeholder {
    color: color-mix(in oklab, currentcolor 50%, transparent);
  }
}

/*
  Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
  Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
  1. Ensure date/time inputs have the same height when empty in iOS Safari.
  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
*/

::-webkit-date-and-time-value {
  min-height: 1lh; /* 1 */
  text-align: inherit; /* 2 */
}

/*
  Prevent height from changing on date/time inputs in macOS Safari when the input is set to \`display: block\`.
*/

::-webkit-datetime-edit {
  display: inline-flex;
}

/*
  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.
*/

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-datetime-edit,
::-webkit-datetime-edit-year-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-minute-field,
::-webkit-datetime-edit-second-field,
::-webkit-datetime-edit-millisecond-field,
::-webkit-datetime-edit-meridiem-field {
  padding-block: 0;
}

/*
  Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
  Correct the inability to style the border radius in iOS Safari.
*/

button,
input:where([type='button'], [type='reset'], [type='submit']),
::file-selector-button {
  appearance: button;
}

/*
  Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
  Make elements with the HTML hidden attribute stay hidden by default.
*/

[hidden]:where(:not([hidden='until-found'])) {
  display: none !important;
}
`, wi = `@tailwind utilities;
`, Ti = `@layer theme, base, components, utilities;

@layer theme {
  @theme default {
    --font-sans:
      ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    --font-mono:
      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;

    --color-red-50: oklch(97.1% 0.013 17.38);
    --color-red-100: oklch(93.6% 0.032 17.717);
    --color-red-200: oklch(88.5% 0.062 18.334);
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-700: oklch(50.5% 0.213 27.518);
    --color-red-800: oklch(44.4% 0.177 26.899);
    --color-red-900: oklch(39.6% 0.141 25.723);
    --color-red-950: oklch(25.8% 0.092 26.042);

    --color-orange-50: oklch(98% 0.016 73.684);
    --color-orange-100: oklch(95.4% 0.038 75.164);
    --color-orange-200: oklch(90.1% 0.076 70.697);
    --color-orange-300: oklch(83.7% 0.128 66.29);
    --color-orange-400: oklch(75% 0.183 55.934);
    --color-orange-500: oklch(70.5% 0.213 47.604);
    --color-orange-600: oklch(64.6% 0.222 41.116);
    --color-orange-700: oklch(55.3% 0.195 38.402);
    --color-orange-800: oklch(47% 0.157 37.304);
    --color-orange-900: oklch(40.8% 0.123 38.172);
    --color-orange-950: oklch(26.6% 0.079 36.259);

    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-100: oklch(96.2% 0.059 95.617);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-amber-300: oklch(87.9% 0.169 91.605);
    --color-amber-400: oklch(82.8% 0.189 84.429);
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-600: oklch(66.6% 0.179 58.318);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-amber-800: oklch(47.3% 0.137 46.201);
    --color-amber-900: oklch(41.4% 0.112 45.904);
    --color-amber-950: oklch(27.9% 0.077 45.635);

    --color-yellow-50: oklch(98.7% 0.026 102.212);
    --color-yellow-100: oklch(97.3% 0.071 103.193);
    --color-yellow-200: oklch(94.5% 0.129 101.54);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-400: oklch(85.2% 0.199 91.936);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-yellow-600: oklch(68.1% 0.162 75.834);
    --color-yellow-700: oklch(55.4% 0.135 66.442);
    --color-yellow-800: oklch(47.6% 0.114 61.907);
    --color-yellow-900: oklch(42.1% 0.095 57.708);
    --color-yellow-950: oklch(28.6% 0.066 53.813);

    --color-lime-50: oklch(98.6% 0.031 120.757);
    --color-lime-100: oklch(96.7% 0.067 122.328);
    --color-lime-200: oklch(93.8% 0.127 124.321);
    --color-lime-300: oklch(89.7% 0.196 126.665);
    --color-lime-400: oklch(84.1% 0.238 128.85);
    --color-lime-500: oklch(76.8% 0.233 130.85);
    --color-lime-600: oklch(64.8% 0.2 131.684);
    --color-lime-700: oklch(53.2% 0.157 131.589);
    --color-lime-800: oklch(45.3% 0.124 130.933);
    --color-lime-900: oklch(40.5% 0.101 131.063);
    --color-lime-950: oklch(27.4% 0.072 132.109);

    --color-green-50: oklch(98.2% 0.018 155.826);
    --color-green-100: oklch(96.2% 0.044 156.743);
    --color-green-200: oklch(92.5% 0.084 155.995);
    --color-green-300: oklch(87.1% 0.15 154.449);
    --color-green-400: oklch(79.2% 0.209 151.711);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-green-600: oklch(62.7% 0.194 149.214);
    --color-green-700: oklch(52.7% 0.154 150.069);
    --color-green-800: oklch(44.8% 0.119 151.328);
    --color-green-900: oklch(39.3% 0.095 152.535);
    --color-green-950: oklch(26.6% 0.065 152.934);

    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-300: oklch(84.5% 0.143 164.978);
    --color-emerald-400: oklch(76.5% 0.177 163.223);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-emerald-800: oklch(43.2% 0.095 166.913);
    --color-emerald-900: oklch(37.8% 0.077 168.94);
    --color-emerald-950: oklch(26.2% 0.051 172.552);

    --color-teal-50: oklch(98.4% 0.014 180.72);
    --color-teal-100: oklch(95.3% 0.051 180.801);
    --color-teal-200: oklch(91% 0.096 180.426);
    --color-teal-300: oklch(85.5% 0.138 181.071);
    --color-teal-400: oklch(77.7% 0.152 181.912);
    --color-teal-500: oklch(70.4% 0.14 182.503);
    --color-teal-600: oklch(60% 0.118 184.704);
    --color-teal-700: oklch(51.1% 0.096 186.391);
    --color-teal-800: oklch(43.7% 0.078 188.216);
    --color-teal-900: oklch(38.6% 0.063 188.416);
    --color-teal-950: oklch(27.7% 0.046 192.524);

    --color-cyan-50: oklch(98.4% 0.019 200.873);
    --color-cyan-100: oklch(95.6% 0.045 203.388);
    --color-cyan-200: oklch(91.7% 0.08 205.041);
    --color-cyan-300: oklch(86.5% 0.127 207.078);
    --color-cyan-400: oklch(78.9% 0.154 211.53);
    --color-cyan-500: oklch(71.5% 0.143 215.221);
    --color-cyan-600: oklch(60.9% 0.126 221.723);
    --color-cyan-700: oklch(52% 0.105 223.128);
    --color-cyan-800: oklch(45% 0.085 224.283);
    --color-cyan-900: oklch(39.8% 0.07 227.392);
    --color-cyan-950: oklch(30.2% 0.056 229.695);

    --color-sky-50: oklch(97.7% 0.013 236.62);
    --color-sky-100: oklch(95.1% 0.026 236.824);
    --color-sky-200: oklch(90.1% 0.058 230.902);
    --color-sky-300: oklch(82.8% 0.111 230.318);
    --color-sky-400: oklch(74.6% 0.16 232.661);
    --color-sky-500: oklch(68.5% 0.169 237.323);
    --color-sky-600: oklch(58.8% 0.158 241.966);
    --color-sky-700: oklch(50% 0.134 242.749);
    --color-sky-800: oklch(44.3% 0.11 240.79);
    --color-sky-900: oklch(39.1% 0.09 240.876);
    --color-sky-950: oklch(29.3% 0.066 243.157);

    --color-blue-50: oklch(97% 0.014 254.604);
    --color-blue-100: oklch(93.2% 0.032 255.585);
    --color-blue-200: oklch(88.2% 0.059 254.128);
    --color-blue-300: oklch(80.9% 0.105 251.813);
    --color-blue-400: oklch(70.7% 0.165 254.624);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-600: oklch(54.6% 0.245 262.881);
    --color-blue-700: oklch(48.8% 0.243 264.376);
    --color-blue-800: oklch(42.4% 0.199 265.638);
    --color-blue-900: oklch(37.9% 0.146 265.522);
    --color-blue-950: oklch(28.2% 0.091 267.935);

    --color-indigo-50: oklch(96.2% 0.018 272.314);
    --color-indigo-100: oklch(93% 0.034 272.788);
    --color-indigo-200: oklch(87% 0.065 274.039);
    --color-indigo-300: oklch(78.5% 0.115 274.713);
    --color-indigo-400: oklch(67.3% 0.182 276.935);
    --color-indigo-500: oklch(58.5% 0.233 277.117);
    --color-indigo-600: oklch(51.1% 0.262 276.966);
    --color-indigo-700: oklch(45.7% 0.24 277.023);
    --color-indigo-800: oklch(39.8% 0.195 277.366);
    --color-indigo-900: oklch(35.9% 0.144 278.697);
    --color-indigo-950: oklch(25.7% 0.09 281.288);

    --color-violet-50: oklch(96.9% 0.016 293.756);
    --color-violet-100: oklch(94.3% 0.029 294.588);
    --color-violet-200: oklch(89.4% 0.057 293.283);
    --color-violet-300: oklch(81.1% 0.111 293.571);
    --color-violet-400: oklch(70.2% 0.183 293.541);
    --color-violet-500: oklch(60.6% 0.25 292.717);
    --color-violet-600: oklch(54.1% 0.281 293.009);
    --color-violet-700: oklch(49.1% 0.27 292.581);
    --color-violet-800: oklch(43.2% 0.232 292.759);
    --color-violet-900: oklch(38% 0.189 293.745);
    --color-violet-950: oklch(28.3% 0.141 291.089);

    --color-purple-50: oklch(97.7% 0.014 308.299);
    --color-purple-100: oklch(94.6% 0.033 307.174);
    --color-purple-200: oklch(90.2% 0.063 306.703);
    --color-purple-300: oklch(82.7% 0.119 306.383);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-600: oklch(55.8% 0.288 302.321);
    --color-purple-700: oklch(49.6% 0.265 301.924);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-purple-900: oklch(38.1% 0.176 304.987);
    --color-purple-950: oklch(29.1% 0.149 302.717);

    --color-fuchsia-50: oklch(97.7% 0.017 320.058);
    --color-fuchsia-100: oklch(95.2% 0.037 318.852);
    --color-fuchsia-200: oklch(90.3% 0.076 319.62);
    --color-fuchsia-300: oklch(83.3% 0.145 321.434);
    --color-fuchsia-400: oklch(74% 0.238 322.16);
    --color-fuchsia-500: oklch(66.7% 0.295 322.15);
    --color-fuchsia-600: oklch(59.1% 0.293 322.896);
    --color-fuchsia-700: oklch(51.8% 0.253 323.949);
    --color-fuchsia-800: oklch(45.2% 0.211 324.591);
    --color-fuchsia-900: oklch(40.1% 0.17 325.612);
    --color-fuchsia-950: oklch(29.3% 0.136 325.661);

    --color-pink-50: oklch(97.1% 0.014 343.198);
    --color-pink-100: oklch(94.8% 0.028 342.258);
    --color-pink-200: oklch(89.9% 0.061 343.231);
    --color-pink-300: oklch(82.3% 0.12 346.018);
    --color-pink-400: oklch(71.8% 0.202 349.761);
    --color-pink-500: oklch(65.6% 0.241 354.308);
    --color-pink-600: oklch(59.2% 0.249 0.584);
    --color-pink-700: oklch(52.5% 0.223 3.958);
    --color-pink-800: oklch(45.9% 0.187 3.815);
    --color-pink-900: oklch(40.8% 0.153 2.432);
    --color-pink-950: oklch(28.4% 0.109 3.907);

    --color-rose-50: oklch(96.9% 0.015 12.422);
    --color-rose-100: oklch(94.1% 0.03 12.58);
    --color-rose-200: oklch(89.2% 0.058 10.001);
    --color-rose-300: oklch(81% 0.117 11.638);
    --color-rose-400: oklch(71.2% 0.194 13.428);
    --color-rose-500: oklch(64.5% 0.246 16.439);
    --color-rose-600: oklch(58.6% 0.253 17.585);
    --color-rose-700: oklch(51.4% 0.222 16.935);
    --color-rose-800: oklch(45.5% 0.188 13.697);
    --color-rose-900: oklch(41% 0.159 10.272);
    --color-rose-950: oklch(27.1% 0.105 12.094);

    --color-slate-50: oklch(98.4% 0.003 247.858);
    --color-slate-100: oklch(96.8% 0.007 247.896);
    --color-slate-200: oklch(92.9% 0.013 255.508);
    --color-slate-300: oklch(86.9% 0.022 252.894);
    --color-slate-400: oklch(70.4% 0.04 256.788);
    --color-slate-500: oklch(55.4% 0.046 257.417);
    --color-slate-600: oklch(44.6% 0.043 257.281);
    --color-slate-700: oklch(37.2% 0.044 257.287);
    --color-slate-800: oklch(27.9% 0.041 260.031);
    --color-slate-900: oklch(20.8% 0.042 265.755);
    --color-slate-950: oklch(12.9% 0.042 264.695);

    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-gray-950: oklch(13% 0.028 261.692);

    --color-zinc-50: oklch(98.5% 0 0);
    --color-zinc-100: oklch(96.7% 0.001 286.375);
    --color-zinc-200: oklch(92% 0.004 286.32);
    --color-zinc-300: oklch(87.1% 0.006 286.286);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-700: oklch(37% 0.013 285.805);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-zinc-900: oklch(21% 0.006 285.885);
    --color-zinc-950: oklch(14.1% 0.005 285.823);

    --color-neutral-50: oklch(98.5% 0 0);
    --color-neutral-100: oklch(97% 0 0);
    --color-neutral-200: oklch(92.2% 0 0);
    --color-neutral-300: oklch(87% 0 0);
    --color-neutral-400: oklch(70.8% 0 0);
    --color-neutral-500: oklch(55.6% 0 0);
    --color-neutral-600: oklch(43.9% 0 0);
    --color-neutral-700: oklch(37.1% 0 0);
    --color-neutral-800: oklch(26.9% 0 0);
    --color-neutral-900: oklch(20.5% 0 0);
    --color-neutral-950: oklch(14.5% 0 0);

    --color-stone-50: oklch(98.5% 0.001 106.423);
    --color-stone-100: oklch(97% 0.001 106.424);
    --color-stone-200: oklch(92.3% 0.003 48.717);
    --color-stone-300: oklch(86.9% 0.005 56.366);
    --color-stone-400: oklch(70.9% 0.01 56.259);
    --color-stone-500: oklch(55.3% 0.013 58.071);
    --color-stone-600: oklch(44.4% 0.011 73.639);
    --color-stone-700: oklch(37.4% 0.01 67.558);
    --color-stone-800: oklch(26.8% 0.007 34.298);
    --color-stone-900: oklch(21.6% 0.006 56.043);
    --color-stone-950: oklch(14.7% 0.004 49.25);

    --color-black: #000;
    --color-white: #fff;

    --spacing: 0.25rem;

    --breakpoint-sm: 40rem;
    --breakpoint-md: 48rem;
    --breakpoint-lg: 64rem;
    --breakpoint-xl: 80rem;
    --breakpoint-2xl: 96rem;

    --container-3xs: 16rem;
    --container-2xs: 18rem;
    --container-xs: 20rem;
    --container-sm: 24rem;
    --container-md: 28rem;
    --container-lg: 32rem;
    --container-xl: 36rem;
    --container-2xl: 42rem;
    --container-3xl: 48rem;
    --container-4xl: 56rem;
    --container-5xl: 64rem;
    --container-6xl: 72rem;
    --container-7xl: 80rem;

    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --text-6xl: 3.75rem;
    --text-6xl--line-height: 1;
    --text-7xl: 4.5rem;
    --text-7xl--line-height: 1;
    --text-8xl: 6rem;
    --text-8xl--line-height: 1;
    --text-9xl: 8rem;
    --text-9xl--line-height: 1;

    --font-weight-thin: 100;
    --font-weight-extralight: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;
    --font-weight-black: 900;

    --tracking-tighter: -0.05em;
    --tracking-tight: -0.025em;
    --tracking-normal: 0em;
    --tracking-wide: 0.025em;
    --tracking-wider: 0.05em;
    --tracking-widest: 0.1em;

    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --leading-loose: 2;

    --radius-xs: 0.125rem;
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --radius-4xl: 2rem;

    --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md:
      0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg:
      0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl:
      0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

    --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);
    --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
    --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);

    --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);
    --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);
    --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);
    --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
    --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
    --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);

    --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);
    --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);
    --text-shadow-sm:
      0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075),
      0px 2px 2px rgb(0 0 0 / 0.075);
    --text-shadow-md:
      0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1),
      0px 2px 4px rgb(0 0 0 / 0.1);
    --text-shadow-lg:
      0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1),
      0px 4px 8px rgb(0 0 0 / 0.1);

    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

    --animate-spin: spin 1s linear infinite;
    --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --animate-bounce: bounce 1s infinite;

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes ping {
      75%,
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes pulse {
      50% {
        opacity: 0.5;
      }
    }

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }

      50% {
        transform: none;
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }

    --blur-xs: 4px;
    --blur-sm: 8px;
    --blur-md: 12px;
    --blur-lg: 16px;
    --blur-xl: 24px;
    --blur-2xl: 40px;
    --blur-3xl: 64px;

    --perspective-dramatic: 100px;
    --perspective-near: 300px;
    --perspective-normal: 500px;
    --perspective-midrange: 800px;
    --perspective-distant: 1200px;

    --aspect-video: 16 / 9;

    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: --theme(--font-sans, initial);
    --default-font-feature-settings: --theme(
      --font-sans--font-feature-settings,
      initial
    );
    --default-font-variation-settings: --theme(
      --font-sans--font-variation-settings,
      initial
    );
    --default-mono-font-family: --theme(--font-mono, initial);
    --default-mono-font-feature-settings: --theme(
      --font-mono--font-feature-settings,
      initial
    );
    --default-mono-font-variation-settings: --theme(
      --font-mono--font-variation-settings,
      initial
    );
  }

  /* Deprecated */
  @theme default inline reference {
    --blur: 8px;
    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
    --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);
    --radius: 0.25rem;
    --max-width-prose: 65ch;
  }
}

@layer base {
  /*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
  2. Remove default margins and padding
  3. Reset all borders.
*/

  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    box-sizing: border-box; /* 1 */
    margin: 0; /* 2 */
    padding: 0; /* 2 */
    border: 0 solid; /* 3 */
  }

  /*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured \`sans\` font-family by default.
  5. Use the user's configured \`sans\` font-feature-settings by default.
  6. Use the user's configured \`sans\` font-variation-settings by default.
  7. Disable tap highlights on iOS.
*/

  html,
  :host {
    line-height: 1.5; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    tab-size: 4; /* 3 */
    font-family: --theme(
      --default-font-family,
      ui-sans-serif,
      system-ui,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji"
    ); /* 4 */
    font-feature-settings: --theme(
      --default-font-feature-settings,
      normal
    ); /* 5 */
    font-variation-settings: --theme(
      --default-font-variation-settings,
      normal
    ); /* 6 */
    -webkit-tap-highlight-color: transparent; /* 7 */
  }

  /*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Reset the default border style to a 1px solid border.
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
    -webkit-text-decoration: underline dotted;
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
    -webkit-text-decoration: inherit;
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
    font-family: --theme(
      --default-mono-font-family,
      ui-monospace,
      SFMono-Regular,
      Menlo,
      Monaco,
      Consolas,
      "Liberation Mono",
      "Courier New",
      monospace
    ); /* 1 */
    font-feature-settings: --theme(
      --default-mono-font-feature-settings,
      normal
    ); /* 2 */
    font-variation-settings: --theme(
      --default-mono-font-variation-settings,
      normal
    ); /* 3 */
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
  Use the modern Firefox focus style for all focusable elements.
*/

  :-moz-focusring {
    outline: auto;
  }

  /*
  Add the correct vertical alignment in Chrome and Firefox.
*/

  progress {
    vertical-align: baseline;
  }

  /*
  Add the correct display in Chrome and Safari.
*/

  summary {
    display: list-item;
  }

  /*
  Make lists unstyled by default.
*/

  ol,
  ul,
  menu {
    list-style: none;
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

  /*
  1. Inherit font styles in all browsers.
  2. Remove border radius in all browsers.
  3. Remove background color in all browsers.
  4. Ensure consistent opacity for disabled states in all browsers.
*/

  button,
  input,
  select,
  optgroup,
  textarea,
  ::file-selector-button {
    font: inherit; /* 1 */
    font-feature-settings: inherit; /* 1 */
    font-variation-settings: inherit; /* 1 */
    letter-spacing: inherit; /* 1 */
    color: inherit; /* 1 */
    border-radius: 0; /* 2 */
    background-color: transparent; /* 3 */
    opacity: 1; /* 4 */
  }

  /*
  Restore default font weight.
*/

  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }

  /*
  Restore indentation.
*/

  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }

  /*
  Restore space after button.
*/

  ::file-selector-button {
    margin-inline-end: 4px;
  }

  /*
  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
*/

  ::placeholder {
    opacity: 1;
  }

  /*
  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not
  crash when using \`color-mix(\u2026)\` with \`currentcolor\`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)
*/

  @supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or
    (contain-intrinsic-size: 1px) /* Safari 17+ */ {
    ::placeholder {
      color: color-mix(in oklab, currentcolor 50%, transparent);
    }
  }

  /*
  Prevent resizing textareas horizontally by default.
*/

  textarea {
    resize: vertical;
  }

  /*
  Remove the inner padding in Chrome and Safari on macOS.
*/

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /*
  1. Ensure date/time inputs have the same height when empty in iOS Safari.
  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
*/

  ::-webkit-date-and-time-value {
    min-height: 1lh; /* 1 */
    text-align: inherit; /* 2 */
  }

  /*
  Prevent height from changing on date/time inputs in macOS Safari when the input is set to \`display: block\`.
*/

  ::-webkit-datetime-edit {
    display: inline-flex;
  }

  /*
  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.
*/

  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }

  ::-webkit-datetime-edit,
  ::-webkit-datetime-edit-year-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-minute-field,
  ::-webkit-datetime-edit-second-field,
  ::-webkit-datetime-edit-millisecond-field,
  ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }

  /*
  Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

  :-moz-ui-invalid {
    box-shadow: none;
  }

  /*
  Correct the inability to style the border radius in iOS Safari.
*/

  button,
  input:where([type="button"], [type="reset"], [type="submit"]),
  ::file-selector-button {
    appearance: button;
  }

  /*
  Correct the cursor style of increment and decrement buttons in Safari.
*/

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  /*
  Make elements with the HTML hidden attribute stay hidden by default.
*/

  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}

@layer utilities {
  @tailwind utilities;
}
`, Q = t(i());
const Ei = { "/tailwindcss": `@import './tailwindcss/index.css';`, "/tailwindcss/index.css": Ti, "/tailwindcss/theme.css": Si, "/tailwindcss/preflight.css": Ci, "/tailwindcss/utilities.css": wi };
async function Di(e2) {
  return await fetch(e2).then((e3) => e3.text());
}
async function Oi(e2, t2 = `/`, n2 = {}) {
  t2 || (t2 = `/`);
  let r2 = e2;
  if (e2.startsWith(`fetch:`) && a(e2.substring(6))) return { base: Q.default.dirname(e2), content: await Di(new URL(e2.substring(6)).toString()) };
  {
    for (let [e3, t3] of Object.entries(Ei)) Object.keys(n2).includes(e3) || (n2[e3] = t3);
    !e2.startsWith(`/`) && (Object.keys(Ei).includes(Q.default.resolve(e2)) || Object.keys(Ei).includes(Q.default.resolve(e2).concat(`.css`))) && (t2 = `/`, e2 = Q.default.resolve(e2)), e2.startsWith(`.`) && (e2 = Q.default.resolve(t2, e2)), e2.startsWith(`/`) && (e2.endsWith(`.css`) || (Object.keys(n2).some((t3) => t3.includes(e2.concat(`.css`))) ? e2 = e2.concat(`.css`) : Object.keys(n2).some((t3) => t3.includes(e2.concat(`/index.css`))) && (e2 = e2.concat(`/index.css`))));
    let i2 = Q.default.resolve(t2, e2);
    if (n2[i2]) return { base: Q.default.dirname(e2), content: n2[i2] };
    let a2 = new URL(e2, `https://esm.sh`);
    i2 = a2.pathname;
    let o2 = false, s2 = null, c2 = null, l2 = [i2];
    i2.endsWith(`.css`) || (l2.push(i2 + `.css`), l2.push(i2 + `/index.css`)), i2 = i2.concat(a2.search);
    for (let t3 of l2) try {
      c2 = t3;
      let r3 = await fetch(`https://esm.sh${t3}`);
      if (!r3.ok) throw Error();
      let a3 = r3.headers.get(`content-type`) || ``;
      if (!a3.includes(`text/css`)) throw Error(`Response is not a CSS file: ${a3}`);
      let s3 = await r3.text();
      s3 = s3.replace(/@config\s+['|"](.*)['|"]/g, (t4, n3) => `@config 'https://esm.sh${Q.default.resolve(Q.default.dirname(e2))}${Q.default.resolve(n3)}'`).replace(/@plugin\s+['|"](.*)['|"]/g, (t4, n3) => `@plugin 'https://esm.sh${Q.default.resolve(Q.default.dirname(e2))}${Q.default.resolve(n3)}'`), n2[t3] = s3, i2 = t3, o2 = true;
      break;
    } catch (e3) {
      s2 = e3;
    }
    if (s2) if (o2) console.warn(`Warning: The stylesheet '${r2}' was successfully fetched from the CDN using fallback path '${c2}'.`);
    else throw Error(r2.startsWith(`.`) ? `Cannot find stylesheet '${r2}' on the Simple File System` : `Cannot find stylesheet '${r2}' on the CDN`);
    return { base: Q.default.dirname(e2), content: n2[i2] };
  }
}
var ki = e((exports, t2) => {
  exports.__esModule = true, exports.default = i2;
  function n2(e2) {
    for (var t3 = e2.toLowerCase(), n3 = ``, r3 = false, i3 = 0; i3 < 6 && t3[i3] !== void 0; i3++) {
      var a2 = t3.charCodeAt(i3), o2 = a2 >= 97 && a2 <= 102 || a2 >= 48 && a2 <= 57;
      if (r3 = a2 === 32, !o2) break;
      n3 += t3[i3];
    }
    if (n3.length !== 0) {
      var s2 = parseInt(n3, 16), c2 = s2 >= 55296 && s2 <= 57343;
      return c2 || s2 === 0 || s2 > 1114111 ? [`\uFFFD`, n3.length + (r3 ? 1 : 0)] : [String.fromCodePoint(s2), n3.length + (r3 ? 1 : 0)];
    }
  }
  var r2 = /\\/;
  function i2(e2) {
    var t3 = r2.test(e2);
    if (!t3) return e2;
    for (var i3 = ``, a2 = 0; a2 < e2.length; a2++) {
      if (e2[a2] === `\\`) {
        var o2 = n2(e2.slice(a2 + 1, a2 + 7));
        if (o2 !== void 0) {
          i3 += o2[0], a2 += o2[1];
          continue;
        }
        if (e2[a2 + 1] === `\\`) {
          i3 += `\\`, a2++;
          continue;
        }
        e2.length === a2 + 1 && (i3 += e2[a2]);
        continue;
      }
      i3 += e2[a2];
    }
    return i3;
  }
  t2.exports = exports.default;
}), Ai = e((exports, t2) => {
  exports.__esModule = true, exports.default = n2;
  function n2(e2) {
    for (var t3 = arguments.length, n3 = Array(t3 > 1 ? t3 - 1 : 0), r2 = 1; r2 < t3; r2++) n3[r2 - 1] = arguments[r2];
    for (; n3.length > 0; ) {
      var i2 = n3.shift();
      if (!e2[i2]) return;
      e2 = e2[i2];
    }
    return e2;
  }
  t2.exports = exports.default;
}), ji = e((exports, t2) => {
  exports.__esModule = true, exports.default = n2;
  function n2(e2) {
    for (var t3 = arguments.length, n3 = Array(t3 > 1 ? t3 - 1 : 0), r2 = 1; r2 < t3; r2++) n3[r2 - 1] = arguments[r2];
    for (; n3.length > 0; ) {
      var i2 = n3.shift();
      e2[i2] || (e2[i2] = {}), e2 = e2[i2];
    }
  }
  t2.exports = exports.default;
}), Mi = e((exports, t2) => {
  exports.__esModule = true, exports.default = n2;
  function n2(e2) {
    for (var t3 = ``, n3 = e2.indexOf(`/*`), r2 = 0; n3 >= 0; ) {
      t3 += e2.slice(r2, n3);
      var i2 = e2.indexOf(`*/`, n3 + 2);
      if (i2 < 0) return t3;
      r2 = i2 + 2, n3 = e2.indexOf(`/*`, r2);
    }
    return t3 += e2.slice(r2), t3;
  }
  t2.exports = exports.default;
}), Ni = e((exports) => {
  exports.__esModule = true, exports.unesc = exports.stripComments = exports.getProp = exports.ensureObject = void 0;
  var t2 = a2(ki());
  exports.unesc = t2.default;
  var n2 = a2(Ai());
  exports.getProp = n2.default;
  var r2 = a2(ji());
  exports.ensureObject = r2.default;
  var i2 = a2(Mi());
  exports.stripComments = i2.default;
  function a2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
}), Pi = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = Ni();
  function r2(e2, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e2, r3.key, r3);
    }
  }
  function i2(e2, t3, n3) {
    return t3 && r2(e2.prototype, t3), n3 && r2(e2, n3), Object.defineProperty(e2, `prototype`, { writable: false }), e2;
  }
  var a2 = function e2(t3, n3) {
    if (typeof t3 != `object` || !t3) return t3;
    var r3 = new t3.constructor();
    for (var i3 in t3) {
      if (!t3.hasOwnProperty(i3)) continue;
      var a3 = t3[i3], o3 = typeof a3;
      i3 === `parent` && o3 === `object` ? n3 && (r3[i3] = n3) : a3 instanceof Array ? r3[i3] = a3.map(function(t4) {
        return e2(t4, r3);
      }) : r3[i3] = e2(a3, r3);
    }
    return r3;
  }, o2 = function() {
    function e2(e3) {
      e3 === void 0 && (e3 = {}), Object.assign(this, e3), this.spaces = this.spaces || {}, this.spaces.before = this.spaces.before || ``, this.spaces.after = this.spaces.after || ``;
    }
    var t3 = e2.prototype;
    return t3.remove = function() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }, t3.replaceWith = function() {
      if (this.parent) {
        for (var e3 in arguments) this.parent.insertBefore(this, arguments[e3]);
        this.remove();
      }
      return this;
    }, t3.next = function() {
      return this.parent.at(this.parent.index(this) + 1);
    }, t3.prev = function() {
      return this.parent.at(this.parent.index(this) - 1);
    }, t3.clone = function(e3) {
      e3 === void 0 && (e3 = {});
      var t4 = a2(this);
      for (var n3 in e3) t4[n3] = e3[n3];
      return t4;
    }, t3.appendToPropertyAndEscape = function(e3, t4, n3) {
      this.raws || (this.raws = {});
      var r3 = this[e3], i3 = this.raws[e3];
      this[e3] = r3 + t4, i3 || n3 !== t4 ? this.raws[e3] = (i3 || r3) + n3 : delete this.raws[e3];
    }, t3.setPropertyAndEscape = function(e3, t4, n3) {
      this.raws || (this.raws = {}), this[e3] = t4, this.raws[e3] = n3;
    }, t3.setPropertyWithoutEscape = function(e3, t4) {
      this[e3] = t4, this.raws && delete this.raws[e3];
    }, t3.isAtPosition = function(e3, t4) {
      if (this.source && this.source.start && this.source.end) return !(this.source.start.line > e3 || this.source.end.line < e3 || this.source.start.line === e3 && this.source.start.column > t4 || this.source.end.line === e3 && this.source.end.column < t4);
    }, t3.stringifyProperty = function(e3) {
      return this.raws && this.raws[e3] || this[e3];
    }, t3.valueToString = function() {
      return String(this.stringifyProperty(`value`));
    }, t3.toString = function() {
      return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join(``);
    }, i2(e2, [{ key: `rawSpaceBefore`, get: function() {
      var e3 = this.raws && this.raws.spaces && this.raws.spaces.before;
      return e3 === void 0 && (e3 = this.spaces && this.spaces.before), e3 || ``;
    }, set: function(e3) {
      (0, n2.ensureObject)(this, `raws`, `spaces`), this.raws.spaces.before = e3;
    } }, { key: `rawSpaceAfter`, get: function() {
      var e3 = this.raws && this.raws.spaces && this.raws.spaces.after;
      return e3 === void 0 && (e3 = this.spaces.after), e3 || ``;
    }, set: function(e3) {
      (0, n2.ensureObject)(this, `raws`, `spaces`), this.raws.spaces.after = e3;
    } }]), e2;
  }();
  exports.default = o2, t2.exports = exports.default;
}), $ = e((exports) => {
  exports.__esModule = true, exports.UNIVERSAL = exports.TAG = exports.STRING = exports.SELECTOR = exports.ROOT = exports.PSEUDO = exports.NESTING = exports.ID = exports.COMMENT = exports.COMBINATOR = exports.CLASS = exports.ATTRIBUTE = void 0;
  var t2 = `tag`;
  exports.TAG = t2;
  var n2 = `string`;
  exports.STRING = n2;
  var r2 = `selector`;
  exports.SELECTOR = r2;
  var i2 = `root`;
  exports.ROOT = i2;
  var a2 = `pseudo`;
  exports.PSEUDO = a2;
  var o2 = `nesting`;
  exports.NESTING = o2;
  var s2 = `id`;
  exports.ID = s2;
  var c2 = `comment`;
  exports.COMMENT = c2;
  var l2 = `combinator`;
  exports.COMBINATOR = l2;
  var u2 = `class`;
  exports.CLASS = u2;
  var d2 = `attribute`;
  exports.ATTRIBUTE = d2;
  var f2 = `universal`;
  exports.UNIVERSAL = f2;
}), Fi = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = o2(Pi()), r2 = a2($());
  function i2(e2) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (i2 = function(e3) {
      return e3 ? n3 : t3;
    })(e2);
  }
  function a2(e2, t3) {
    if (!t3 && e2 && e2.__esModule) return e2;
    if (e2 === null || typeof e2 != `object` && typeof e2 != `function`) return { default: e2 };
    var n3 = i2(t3);
    if (n3 && n3.has(e2)) return n3.get(e2);
    var r3 = {}, a3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o3 in e2) if (o3 !== `default` && Object.prototype.hasOwnProperty.call(e2, o3)) {
      var s3 = a3 ? Object.getOwnPropertyDescriptor(e2, o3) : null;
      s3 && (s3.get || s3.set) ? Object.defineProperty(r3, o3, s3) : r3[o3] = e2[o3];
    }
    return r3.default = e2, n3 && n3.set(e2, r3), r3;
  }
  function o2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function s2(e2, t3) {
    var n3 = typeof Symbol < `u` && e2[Symbol.iterator] || e2[`@@iterator`];
    if (n3) return (n3 = n3.call(e2)).next.bind(n3);
    if (Array.isArray(e2) || (n3 = c2(e2)) || t3 && e2 && typeof e2.length == `number`) {
      n3 && (e2 = n3);
      var r3 = 0;
      return function() {
        return r3 >= e2.length ? { done: true } : { done: false, value: e2[r3++] };
      };
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function c2(e2, t3) {
    if (e2) {
      if (typeof e2 == `string`) return l2(e2, t3);
      var n3 = Object.prototype.toString.call(e2).slice(8, -1);
      if (n3 === `Object` && e2.constructor && (n3 = e2.constructor.name), n3 === `Map` || n3 === `Set`) return Array.from(e2);
      if (n3 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3)) return l2(e2, t3);
    }
  }
  function l2(e2, t3) {
    (t3 == null || t3 > e2.length) && (t3 = e2.length);
    for (var n3 = 0, r3 = Array(t3); n3 < t3; n3++) r3[n3] = e2[n3];
    return r3;
  }
  function u2(e2, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e2, r3.key, r3);
    }
  }
  function d2(e2, t3, n3) {
    return t3 && u2(e2.prototype, t3), n3 && u2(e2, n3), Object.defineProperty(e2, `prototype`, { writable: false }), e2;
  }
  function f2(e2, t3) {
    e2.prototype = Object.create(t3.prototype), e2.prototype.constructor = e2, p2(e2, t3);
  }
  function p2(e2, t3) {
    return p2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t4) {
      return e3.__proto__ = t4, e3;
    }, p2(e2, t3);
  }
  var m2 = function(e2) {
    f2(t3, e2);
    function t3(t4) {
      var n4;
      return n4 = e2.call(this, t4) || this, n4.nodes || (n4.nodes = []), n4;
    }
    var n3 = t3.prototype;
    return n3.append = function(e3) {
      return e3.parent = this, this.nodes.push(e3), this;
    }, n3.prepend = function(e3) {
      for (var t4 in e3.parent = this, this.nodes.unshift(e3), this.indexes) this.indexes[t4]++;
      return this;
    }, n3.at = function(e3) {
      return this.nodes[e3];
    }, n3.index = function(e3) {
      return typeof e3 == `number` ? e3 : this.nodes.indexOf(e3);
    }, n3.removeChild = function(e3) {
      e3 = this.index(e3), this.at(e3).parent = void 0, this.nodes.splice(e3, 1);
      var t4;
      for (var n4 in this.indexes) t4 = this.indexes[n4], t4 >= e3 && (this.indexes[n4] = t4 - 1);
      return this;
    }, n3.removeAll = function() {
      for (var e3 = s2(this.nodes), t4; !(t4 = e3()).done; ) {
        var n4 = t4.value;
        n4.parent = void 0;
      }
      return this.nodes = [], this;
    }, n3.empty = function() {
      return this.removeAll();
    }, n3.insertAfter = function(e3, t4) {
      var n4;
      t4.parent = this;
      for (var r3 = this.index(e3), i3 = [], a3 = 2; a3 < arguments.length; a3++) i3.push(arguments[a3]);
      (n4 = this.nodes).splice.apply(n4, [r3 + 1, 0, t4].concat(i3)), t4.parent = this;
      var o3;
      for (var s3 in this.indexes) o3 = this.indexes[s3], r3 < o3 && (this.indexes[s3] = o3 + arguments.length - 1);
      return this;
    }, n3.insertBefore = function(e3, t4) {
      var n4;
      t4.parent = this;
      for (var r3 = this.index(e3), i3 = [], a3 = 2; a3 < arguments.length; a3++) i3.push(arguments[a3]);
      (n4 = this.nodes).splice.apply(n4, [r3, 0, t4].concat(i3)), t4.parent = this;
      var o3;
      for (var s3 in this.indexes) o3 = this.indexes[s3], o3 >= r3 && (this.indexes[s3] = o3 + arguments.length - 1);
      return this;
    }, n3._findChildAtPosition = function(e3, t4) {
      var n4 = void 0;
      return this.each(function(r3) {
        if (r3.atPosition) {
          var i3 = r3.atPosition(e3, t4);
          if (i3) return n4 = i3, false;
        } else if (r3.isAtPosition(e3, t4)) return n4 = r3, false;
      }), n4;
    }, n3.atPosition = function(e3, t4) {
      if (this.isAtPosition(e3, t4)) return this._findChildAtPosition(e3, t4) || this;
    }, n3._inferEndPosition = function() {
      this.last && this.last.source && this.last.source.end && (this.source = this.source || {}, this.source.end = this.source.end || {}, Object.assign(this.source.end, this.last.source.end));
    }, n3.each = function(e3) {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
      var t4 = this.lastEach;
      if (this.indexes[t4] = 0, this.length) {
        for (var n4, r3; this.indexes[t4] < this.length && (n4 = this.indexes[t4], r3 = e3(this.at(n4), n4), r3 !== false); ) this.indexes[t4] += 1;
        if (delete this.indexes[t4], r3 === false) return false;
      }
    }, n3.walk = function(e3) {
      return this.each(function(t4, n4) {
        var r3 = e3(t4, n4);
        if (r3 !== false && t4.length && (r3 = t4.walk(e3)), r3 === false) return false;
      });
    }, n3.walkAttributes = function(e3) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.ATTRIBUTE) return e3.call(t4, n4);
      });
    }, n3.walkClasses = function(e3) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.CLASS) return e3.call(t4, n4);
      });
    }, n3.walkCombinators = function(e3) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.COMBINATOR) return e3.call(t4, n4);
      });
    }, n3.walkComments = function(e3) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.COMMENT) return e3.call(t4, n4);
      });
    }, n3.walkIds = function(e3) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.ID) return e3.call(t4, n4);
      });
    }, n3.walkNesting = function(e3) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.NESTING) return e3.call(t4, n4);
      });
    }, n3.walkPseudos = function(e3) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.PSEUDO) return e3.call(t4, n4);
      });
    }, n3.walkTags = function(e3) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.TAG) return e3.call(t4, n4);
      });
    }, n3.walkUniversals = function(e3) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.UNIVERSAL) return e3.call(t4, n4);
      });
    }, n3.split = function(e3) {
      var t4 = this, n4 = [];
      return this.reduce(function(r3, i3, a3) {
        var o3 = e3.call(t4, i3);
        return n4.push(i3), o3 ? (r3.push(n4), n4 = []) : a3 === t4.length - 1 && r3.push(n4), r3;
      }, []);
    }, n3.map = function(e3) {
      return this.nodes.map(e3);
    }, n3.reduce = function(e3, t4) {
      return this.nodes.reduce(e3, t4);
    }, n3.every = function(e3) {
      return this.nodes.every(e3);
    }, n3.some = function(e3) {
      return this.nodes.some(e3);
    }, n3.filter = function(e3) {
      return this.nodes.filter(e3);
    }, n3.sort = function(e3) {
      return this.nodes.sort(e3);
    }, n3.toString = function() {
      return this.map(String).join(``);
    }, d2(t3, [{ key: `first`, get: function() {
      return this.at(0);
    } }, { key: `last`, get: function() {
      return this.at(this.length - 1);
    } }, { key: `length`, get: function() {
      return this.nodes.length;
    } }]), t3;
  }(n2.default);
  exports.default = m2, t2.exports = exports.default;
}), Ii = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Fi()), r2 = $();
  function i2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function a2(e2, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e2, r3.key, r3);
    }
  }
  function o2(e2, t3, n3) {
    return t3 && a2(e2.prototype, t3), n3 && a2(e2, n3), Object.defineProperty(e2, `prototype`, { writable: false }), e2;
  }
  function s2(e2, t3) {
    e2.prototype = Object.create(t3.prototype), e2.prototype.constructor = e2, c2(e2, t3);
  }
  function c2(e2, t3) {
    return c2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t4) {
      return e3.__proto__ = t4, e3;
    }, c2(e2, t3);
  }
  var l2 = function(e2) {
    s2(t3, e2);
    function t3(t4) {
      var n4;
      return n4 = e2.call(this, t4) || this, n4.type = r2.ROOT, n4;
    }
    var n3 = t3.prototype;
    return n3.toString = function() {
      var e3 = this.reduce(function(e4, t4) {
        return e4.push(String(t4)), e4;
      }, []).join(`,`);
      return this.trailingComma ? e3 + `,` : e3;
    }, n3.error = function(e3, t4) {
      return this._error ? this._error(e3, t4) : Error(e3);
    }, o2(t3, [{ key: `errorGenerator`, set: function(e3) {
      this._error = e3;
    } }]), t3;
  }(n2.default);
  exports.default = l2, t2.exports = exports.default;
}), Li = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Fi()), r2 = $();
  function i2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function a2(e2, t3) {
    e2.prototype = Object.create(t3.prototype), e2.prototype.constructor = e2, o2(e2, t3);
  }
  function o2(e2, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t4) {
      return e3.__proto__ = t4, e3;
    }, o2(e2, t3);
  }
  var s2 = function(e2) {
    a2(t3, e2);
    function t3(t4) {
      var n3;
      return n3 = e2.call(this, t4) || this, n3.type = r2.SELECTOR, n3;
    }
    return t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), Ri = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = o2(s()), r2 = Ni(), i2 = o2(Pi()), a2 = $();
  function o2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function c2(e2, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e2, r3.key, r3);
    }
  }
  function l2(e2, t3, n3) {
    return t3 && c2(e2.prototype, t3), n3 && c2(e2, n3), Object.defineProperty(e2, `prototype`, { writable: false }), e2;
  }
  function u2(e2, t3) {
    e2.prototype = Object.create(t3.prototype), e2.prototype.constructor = e2, d2(e2, t3);
  }
  function d2(e2, t3) {
    return d2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t4) {
      return e3.__proto__ = t4, e3;
    }, d2(e2, t3);
  }
  var f2 = function(e2) {
    u2(t3, e2);
    function t3(t4) {
      var n3;
      return n3 = e2.call(this, t4) || this, n3.type = a2.CLASS, n3._constructed = true, n3;
    }
    var i3 = t3.prototype;
    return i3.valueToString = function() {
      return `.` + e2.prototype.valueToString.call(this);
    }, l2(t3, [{ key: `value`, get: function() {
      return this._value;
    }, set: function(e3) {
      if (this._constructed) {
        var t4 = (0, n2.default)(e3, { isIdentifier: true });
        t4 === e3 ? this.raws && delete this.raws.value : ((0, r2.ensureObject)(this, `raws`), this.raws.value = t4);
      }
      this._value = e3;
    } }]), t3;
  }(i2.default);
  exports.default = f2, t2.exports = exports.default;
}), zi = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Pi()), r2 = $();
  function i2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function a2(e2, t3) {
    e2.prototype = Object.create(t3.prototype), e2.prototype.constructor = e2, o2(e2, t3);
  }
  function o2(e2, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t4) {
      return e3.__proto__ = t4, e3;
    }, o2(e2, t3);
  }
  var s2 = function(e2) {
    a2(t3, e2);
    function t3(t4) {
      var n3;
      return n3 = e2.call(this, t4) || this, n3.type = r2.COMMENT, n3;
    }
    return t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), Bi = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Pi()), r2 = $();
  function i2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function a2(e2, t3) {
    e2.prototype = Object.create(t3.prototype), e2.prototype.constructor = e2, o2(e2, t3);
  }
  function o2(e2, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t4) {
      return e3.__proto__ = t4, e3;
    }, o2(e2, t3);
  }
  var s2 = function(e2) {
    a2(t3, e2);
    function t3(t4) {
      var n4;
      return n4 = e2.call(this, t4) || this, n4.type = r2.ID, n4;
    }
    var n3 = t3.prototype;
    return n3.valueToString = function() {
      return `#` + e2.prototype.valueToString.call(this);
    }, t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), Vi = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = a2(s()), r2 = Ni(), i2 = a2(Pi());
  function a2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function o2(e2, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e2, r3.key, r3);
    }
  }
  function c2(e2, t3, n3) {
    return t3 && o2(e2.prototype, t3), n3 && o2(e2, n3), Object.defineProperty(e2, `prototype`, { writable: false }), e2;
  }
  function l2(e2, t3) {
    e2.prototype = Object.create(t3.prototype), e2.prototype.constructor = e2, u2(e2, t3);
  }
  function u2(e2, t3) {
    return u2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t4) {
      return e3.__proto__ = t4, e3;
    }, u2(e2, t3);
  }
  var d2 = function(e2) {
    l2(t3, e2);
    function t3() {
      return e2.apply(this, arguments) || this;
    }
    var i3 = t3.prototype;
    return i3.qualifiedName = function(e3) {
      return this.namespace ? this.namespaceString + `|` + e3 : e3;
    }, i3.valueToString = function() {
      return this.qualifiedName(e2.prototype.valueToString.call(this));
    }, c2(t3, [{ key: `namespace`, get: function() {
      return this._namespace;
    }, set: function(e3) {
      if (e3 === true || e3 === `*` || e3 === `&`) {
        this._namespace = e3, this.raws && delete this.raws.namespace;
        return;
      }
      var t4 = (0, n2.default)(e3, { isIdentifier: true });
      this._namespace = e3, t4 === e3 ? this.raws && delete this.raws.namespace : ((0, r2.ensureObject)(this, `raws`), this.raws.namespace = t4);
    } }, { key: `ns`, get: function() {
      return this._namespace;
    }, set: function(e3) {
      this.namespace = e3;
    } }, { key: `namespaceString`, get: function() {
      if (this.namespace) {
        var e3 = this.stringifyProperty(`namespace`);
        return e3 === true ? `` : e3;
      } else return ``;
    } }]), t3;
  }(i2.default);
  exports.default = d2, t2.exports = exports.default;
}), Hi = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Vi()), r2 = $();
  function i2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function a2(e2, t3) {
    e2.prototype = Object.create(t3.prototype), e2.prototype.constructor = e2, o2(e2, t3);
  }
  function o2(e2, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t4) {
      return e3.__proto__ = t4, e3;
    }, o2(e2, t3);
  }
  var s2 = function(e2) {
    a2(t3, e2);
    function t3(t4) {
      var n3;
      return n3 = e2.call(this, t4) || this, n3.type = r2.TAG, n3;
    }
    return t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), Ui = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Pi()), r2 = $();
  function i2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function a2(e2, t3) {
    e2.prototype = Object.create(t3.prototype), e2.prototype.constructor = e2, o2(e2, t3);
  }
  function o2(e2, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t4) {
      return e3.__proto__ = t4, e3;
    }, o2(e2, t3);
  }
  var s2 = function(e2) {
    a2(t3, e2);
    function t3(t4) {
      var n3;
      return n3 = e2.call(this, t4) || this, n3.type = r2.STRING, n3;
    }
    return t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), Wi = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Fi()), r2 = $();
  function i2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function a2(e2, t3) {
    e2.prototype = Object.create(t3.prototype), e2.prototype.constructor = e2, o2(e2, t3);
  }
  function o2(e2, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t4) {
      return e3.__proto__ = t4, e3;
    }, o2(e2, t3);
  }
  var s2 = function(e2) {
    a2(t3, e2);
    function t3(t4) {
      var n4;
      return n4 = e2.call(this, t4) || this, n4.type = r2.PSEUDO, n4;
    }
    var n3 = t3.prototype;
    return n3.toString = function() {
      var e3 = this.length ? `(` + this.map(String).join(`,`) + `)` : ``;
      return [this.rawSpaceBefore, this.stringifyProperty(`value`), e3, this.rawSpaceAfter].join(``);
    }, t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), Gi = e((exports) => {
  exports.__esModule = true, exports.default = void 0, exports.unescapeValue = v2;
  var t2 = c2(s()), n2 = c2(ki()), i2 = c2(Vi()), a2 = $(), o2;
  function c2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function l2(e2, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r2 = t3[n3];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, `value` in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
    }
  }
  function u2(e2, t3, n3) {
    return t3 && l2(e2.prototype, t3), n3 && l2(e2, n3), Object.defineProperty(e2, `prototype`, { writable: false }), e2;
  }
  function d2(e2, t3) {
    e2.prototype = Object.create(t3.prototype), e2.prototype.constructor = e2, f2(e2, t3);
  }
  function f2(e2, t3) {
    return f2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t4) {
      return e3.__proto__ = t4, e3;
    }, f2(e2, t3);
  }
  var p2 = r(), m2 = /^('|")([^]*)\1$/, h2 = p2(function() {
  }, `Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead.`), g2 = p2(function() {
  }, `Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead.`), _2 = p2(function() {
  }, `Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.`);
  function v2(e2) {
    var t3 = false, r2 = null, i3 = e2, a3 = i3.match(m2);
    return a3 && (r2 = a3[1], i3 = a3[2]), i3 = (0, n2.default)(i3), i3 !== e2 && (t3 = true), { deprecatedUsage: t3, unescaped: i3, quoteMark: r2 };
  }
  function y2(e2) {
    if (e2.quoteMark !== void 0 || e2.value === void 0) return e2;
    _2();
    var t3 = v2(e2.value), n3 = t3.quoteMark, r2 = t3.unescaped;
    return e2.raws || (e2.raws = {}), e2.raws.value === void 0 && (e2.raws.value = e2.value), e2.value = r2, e2.quoteMark = n3, e2;
  }
  var b2 = function(e2) {
    d2(n3, e2);
    function n3(t3) {
      var n4;
      return t3 === void 0 && (t3 = {}), n4 = e2.call(this, y2(t3)) || this, n4.type = a2.ATTRIBUTE, n4.raws = n4.raws || {}, Object.defineProperty(n4.raws, `unquoted`, { get: p2(function() {
        return n4.value;
      }, `attr.raws.unquoted is deprecated. Call attr.value instead.`), set: p2(function() {
        return n4.value;
      }, `Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.`) }), n4._constructed = true, n4;
    }
    var r2 = n3.prototype;
    return r2.getQuotedValue = function(e3) {
      e3 === void 0 && (e3 = {});
      var n4 = this._determineQuoteMark(e3), r3 = x2[n4], i3 = (0, t2.default)(this._value, r3);
      return i3;
    }, r2._determineQuoteMark = function(e3) {
      return e3.smart ? this.smartQuoteMark(e3) : this.preferredQuoteMark(e3);
    }, r2.setValue = function(e3, t3) {
      t3 === void 0 && (t3 = {}), this._value = e3, this._quoteMark = this._determineQuoteMark(t3), this._syncRawValue();
    }, r2.smartQuoteMark = function(e3) {
      var r3 = this.value, i3 = r3.replace(/[^']/g, ``).length, a3 = r3.replace(/[^"]/g, ``).length;
      if (i3 + a3 === 0) {
        var o3 = (0, t2.default)(r3, { isIdentifier: true });
        if (o3 === r3) return n3.NO_QUOTE;
        var s2 = this.preferredQuoteMark(e3);
        if (s2 === n3.NO_QUOTE) {
          var c3 = this.quoteMark || e3.quoteMark || n3.DOUBLE_QUOTE, l3 = x2[c3], u3 = (0, t2.default)(r3, l3);
          if (u3.length < o3.length) return c3;
        }
        return s2;
      } else if (a3 === i3) return this.preferredQuoteMark(e3);
      else if (a3 < i3) return n3.DOUBLE_QUOTE;
      else return n3.SINGLE_QUOTE;
    }, r2.preferredQuoteMark = function(e3) {
      var t3 = e3.preferCurrentQuoteMark ? this.quoteMark : e3.quoteMark;
      return t3 === void 0 && (t3 = e3.preferCurrentQuoteMark ? e3.quoteMark : this.quoteMark), t3 === void 0 && (t3 = n3.DOUBLE_QUOTE), t3;
    }, r2._syncRawValue = function() {
      var e3 = (0, t2.default)(this._value, x2[this.quoteMark]);
      e3 === this._value ? this.raws && delete this.raws.value : this.raws.value = e3;
    }, r2._handleEscapes = function(e3, n4) {
      if (this._constructed) {
        var r3 = (0, t2.default)(n4, { isIdentifier: true });
        r3 === n4 ? delete this.raws[e3] : this.raws[e3] = r3;
      }
    }, r2._spacesFor = function(e3) {
      var t3 = { before: ``, after: `` }, n4 = this.spaces[e3] || {}, r3 = this.raws.spaces && this.raws.spaces[e3] || {};
      return Object.assign(t3, n4, r3);
    }, r2._stringFor = function(e3, t3, n4) {
      t3 === void 0 && (t3 = e3), n4 === void 0 && (n4 = S2);
      var r3 = this._spacesFor(t3);
      return n4(this.stringifyProperty(e3), r3);
    }, r2.offsetOf = function(e3) {
      var t3 = 1, n4 = this._spacesFor(`attribute`);
      if (t3 += n4.before.length, e3 === `namespace` || e3 === `ns`) return this.namespace ? t3 : -1;
      if (e3 === `attributeNS` || (t3 += this.namespaceString.length, this.namespace && (t3 += 1), e3 === `attribute`)) return t3;
      t3 += this.stringifyProperty(`attribute`).length, t3 += n4.after.length;
      var r3 = this._spacesFor(`operator`);
      t3 += r3.before.length;
      var i3 = this.stringifyProperty(`operator`);
      if (e3 === `operator`) return i3 ? t3 : -1;
      t3 += i3.length, t3 += r3.after.length;
      var a3 = this._spacesFor(`value`);
      t3 += a3.before.length;
      var o3 = this.stringifyProperty(`value`);
      if (e3 === `value`) return o3 ? t3 : -1;
      t3 += o3.length, t3 += a3.after.length;
      var s2 = this._spacesFor(`insensitive`);
      return t3 += s2.before.length, e3 === `insensitive` && this.insensitive ? t3 : -1;
    }, r2.toString = function() {
      var e3 = this, t3 = [this.rawSpaceBefore, `[`];
      return t3.push(this._stringFor(`qualifiedAttribute`, `attribute`)), this.operator && (this.value || this.value === ``) && (t3.push(this._stringFor(`operator`)), t3.push(this._stringFor(`value`)), t3.push(this._stringFor(`insensitiveFlag`, `insensitive`, function(t4, n4) {
        return t4.length > 0 && !e3.quoted && n4.before.length === 0 && !(e3.spaces.value && e3.spaces.value.after) && (n4.before = ` `), S2(t4, n4);
      }))), t3.push(`]`), t3.push(this.rawSpaceAfter), t3.join(``);
    }, u2(n3, [{ key: `quoted`, get: function() {
      var e3 = this.quoteMark;
      return e3 === `'` || e3 === `"`;
    }, set: function(e3) {
      g2();
    } }, { key: `quoteMark`, get: function() {
      return this._quoteMark;
    }, set: function(e3) {
      if (!this._constructed) {
        this._quoteMark = e3;
        return;
      }
      this._quoteMark !== e3 && (this._quoteMark = e3, this._syncRawValue());
    } }, { key: `qualifiedAttribute`, get: function() {
      return this.qualifiedName(this.raws.attribute || this.attribute);
    } }, { key: `insensitiveFlag`, get: function() {
      return this.insensitive ? `i` : ``;
    } }, { key: `value`, get: function() {
      return this._value;
    }, set: function(e3) {
      if (this._constructed) {
        var t3 = v2(e3), n4 = t3.deprecatedUsage, r3 = t3.unescaped, i3 = t3.quoteMark;
        if (n4 && h2(), r3 === this._value && i3 === this._quoteMark) return;
        this._value = r3, this._quoteMark = i3, this._syncRawValue();
      } else this._value = e3;
    } }, { key: `insensitive`, get: function() {
      return this._insensitive;
    }, set: function(e3) {
      e3 || (this._insensitive = false, this.raws && (this.raws.insensitiveFlag === `I` || this.raws.insensitiveFlag === `i`) && (this.raws.insensitiveFlag = void 0)), this._insensitive = e3;
    } }, { key: `attribute`, get: function() {
      return this._attribute;
    }, set: function(e3) {
      this._handleEscapes(`attribute`, e3), this._attribute = e3;
    } }]), n3;
  }(i2.default);
  exports.default = b2, b2.NO_QUOTE = null, b2.SINGLE_QUOTE = `'`, b2.DOUBLE_QUOTE = `"`;
  var x2 = (o2 = { "'": { quotes: `single`, wrap: true }, '"': { quotes: `double`, wrap: true } }, o2[null] = { isIdentifier: true }, o2);
  function S2(e2, t3) {
    return `` + t3.before + e2 + t3.after;
  }
}), Ki = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Vi()), r2 = $();
  function i2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function a2(e2, t3) {
    e2.prototype = Object.create(t3.prototype), e2.prototype.constructor = e2, o2(e2, t3);
  }
  function o2(e2, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t4) {
      return e3.__proto__ = t4, e3;
    }, o2(e2, t3);
  }
  var s2 = function(e2) {
    a2(t3, e2);
    function t3(t4) {
      var n3;
      return n3 = e2.call(this, t4) || this, n3.type = r2.UNIVERSAL, n3.value = `*`, n3;
    }
    return t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), qi = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Pi()), r2 = $();
  function i2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function a2(e2, t3) {
    e2.prototype = Object.create(t3.prototype), e2.prototype.constructor = e2, o2(e2, t3);
  }
  function o2(e2, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t4) {
      return e3.__proto__ = t4, e3;
    }, o2(e2, t3);
  }
  var s2 = function(e2) {
    a2(t3, e2);
    function t3(t4) {
      var n3;
      return n3 = e2.call(this, t4) || this, n3.type = r2.COMBINATOR, n3;
    }
    return t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), Ji = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Pi()), r2 = $();
  function i2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function a2(e2, t3) {
    e2.prototype = Object.create(t3.prototype), e2.prototype.constructor = e2, o2(e2, t3);
  }
  function o2(e2, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t4) {
      return e3.__proto__ = t4, e3;
    }, o2(e2, t3);
  }
  var s2 = function(e2) {
    a2(t3, e2);
    function t3(t4) {
      var n3;
      return n3 = e2.call(this, t4) || this, n3.type = r2.NESTING, n3.value = `&`, n3;
    }
    return t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), Yi = e((exports, t2) => {
  exports.__esModule = true, exports.default = n2;
  function n2(e2) {
    return e2.sort(function(e3, t3) {
      return e3 - t3;
    });
  }
  t2.exports = exports.default;
}), Xi = e((exports) => {
  exports.__esModule = true, exports.word = exports.tilde = exports.tab = exports.str = exports.space = exports.slash = exports.singleQuote = exports.semicolon = exports.plus = exports.pipe = exports.openSquare = exports.openParenthesis = exports.newline = exports.greaterThan = exports.feed = exports.equals = exports.doubleQuote = exports.dollar = exports.cr = exports.comment = exports.comma = exports.combinator = exports.colon = exports.closeSquare = exports.closeParenthesis = exports.caret = exports.bang = exports.backslash = exports.at = exports.asterisk = exports.ampersand = void 0;
  var t2 = 38;
  exports.ampersand = t2;
  var n2 = 42;
  exports.asterisk = n2;
  var r2 = 64;
  exports.at = r2;
  var i2 = 44;
  exports.comma = i2;
  var a2 = 58;
  exports.colon = a2;
  var o2 = 59;
  exports.semicolon = o2;
  var s2 = 40;
  exports.openParenthesis = s2;
  var c2 = 41;
  exports.closeParenthesis = c2;
  var l2 = 91;
  exports.openSquare = l2;
  var u2 = 93;
  exports.closeSquare = u2;
  var d2 = 36;
  exports.dollar = d2;
  var f2 = 126;
  exports.tilde = f2;
  var p2 = 94;
  exports.caret = p2;
  var m2 = 43;
  exports.plus = m2;
  var h2 = 61;
  exports.equals = h2;
  var g2 = 124;
  exports.pipe = g2;
  var _2 = 62;
  exports.greaterThan = _2;
  var v2 = 32;
  exports.space = v2;
  var y2 = 39;
  exports.singleQuote = y2;
  var b2 = 34;
  exports.doubleQuote = b2;
  var x2 = 47;
  exports.slash = x2;
  var S2 = 33;
  exports.bang = S2;
  var C2 = 92;
  exports.backslash = C2;
  var w2 = 13;
  exports.cr = w2;
  var T2 = 12;
  exports.feed = T2;
  var E2 = 10;
  exports.newline = E2;
  var D2 = 9;
  exports.tab = D2;
  var O2 = y2;
  exports.str = O2;
  var k2 = -1;
  exports.comment = k2;
  var A2 = -2;
  exports.word = A2;
  var j2 = -3;
  exports.combinator = j2;
}), Zi = e((exports) => {
  exports.__esModule = true, exports.FIELDS = void 0, exports.default = m2;
  var t2 = a2(Xi()), n2, r2;
  function i2(e2) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (i2 = function(e3) {
      return e3 ? n3 : t3;
    })(e2);
  }
  function a2(e2, t3) {
    if (!t3 && e2 && e2.__esModule) return e2;
    if (e2 === null || typeof e2 != `object` && typeof e2 != `function`) return { default: e2 };
    var n3 = i2(t3);
    if (n3 && n3.has(e2)) return n3.get(e2);
    var r3 = {}, a3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o3 in e2) if (o3 !== `default` && Object.prototype.hasOwnProperty.call(e2, o3)) {
      var s3 = a3 ? Object.getOwnPropertyDescriptor(e2, o3) : null;
      s3 && (s3.get || s3.set) ? Object.defineProperty(r3, o3, s3) : r3[o3] = e2[o3];
    }
    return r3.default = e2, n3 && n3.set(e2, r3), r3;
  }
  for (var o2 = (n2 = {}, n2[t2.tab] = true, n2[t2.newline] = true, n2[t2.cr] = true, n2[t2.feed] = true, n2), s2 = (r2 = {}, r2[t2.space] = true, r2[t2.tab] = true, r2[t2.newline] = true, r2[t2.cr] = true, r2[t2.feed] = true, r2[t2.ampersand] = true, r2[t2.asterisk] = true, r2[t2.bang] = true, r2[t2.comma] = true, r2[t2.colon] = true, r2[t2.semicolon] = true, r2[t2.openParenthesis] = true, r2[t2.closeParenthesis] = true, r2[t2.openSquare] = true, r2[t2.closeSquare] = true, r2[t2.singleQuote] = true, r2[t2.doubleQuote] = true, r2[t2.plus] = true, r2[t2.pipe] = true, r2[t2.tilde] = true, r2[t2.greaterThan] = true, r2[t2.equals] = true, r2[t2.dollar] = true, r2[t2.caret] = true, r2[t2.slash] = true, r2), c2 = {}, l2 = `0123456789abcdefABCDEF`, u2 = 0; u2 < l2.length; u2++) c2[l2.charCodeAt(u2)] = true;
  function d2(e2, n3) {
    var r3 = n3, i3;
    do {
      if (i3 = e2.charCodeAt(r3), s2[i3]) return r3 - 1;
      i3 === t2.backslash ? r3 = f2(e2, r3) + 1 : r3++;
    } while (r3 < e2.length);
    return r3 - 1;
  }
  function f2(e2, n3) {
    var r3 = n3, i3 = e2.charCodeAt(r3 + 1);
    if (!o2[i3]) if (c2[i3]) {
      var a3 = 0;
      do
        r3++, a3++, i3 = e2.charCodeAt(r3 + 1);
      while (c2[i3] && a3 < 6);
      a3 < 6 && i3 === t2.space && r3++;
    } else r3++;
    return r3;
  }
  var p2 = { TYPE: 0, START_LINE: 1, START_COL: 2, END_LINE: 3, END_COL: 4, START_POS: 5, END_POS: 6 };
  exports.FIELDS = p2;
  function m2(e2) {
    var n3 = [], r3 = e2.css.valueOf(), i3 = r3, a3 = i3.length, o3 = -1, s3 = 1, c3 = 0, l3 = 0, u3, f3, p3, m3, h2, g2, _2, v2, y2, b2, x2, S2, C2;
    function w2(t3, n4) {
      if (e2.safe) r3 += n4, y2 = r3.length - 1;
      else throw e2.error(`Unclosed ` + t3, s3, c3 - o3, c3);
    }
    for (; c3 < a3; ) {
      switch (u3 = r3.charCodeAt(c3), u3 === t2.newline && (o3 = c3, s3 += 1), u3) {
        case t2.space:
        case t2.tab:
        case t2.newline:
        case t2.cr:
        case t2.feed:
          y2 = c3;
          do
            y2 += 1, u3 = r3.charCodeAt(y2), u3 === t2.newline && (o3 = y2, s3 += 1);
          while (u3 === t2.space || u3 === t2.newline || u3 === t2.tab || u3 === t2.cr || u3 === t2.feed);
          C2 = t2.space, m3 = s3, p3 = y2 - o3 - 1, l3 = y2;
          break;
        case t2.plus:
        case t2.greaterThan:
        case t2.tilde:
        case t2.pipe:
          y2 = c3;
          do
            y2 += 1, u3 = r3.charCodeAt(y2);
          while (u3 === t2.plus || u3 === t2.greaterThan || u3 === t2.tilde || u3 === t2.pipe);
          C2 = t2.combinator, m3 = s3, p3 = c3 - o3, l3 = y2;
          break;
        case t2.asterisk:
        case t2.ampersand:
        case t2.bang:
        case t2.comma:
        case t2.equals:
        case t2.dollar:
        case t2.caret:
        case t2.openSquare:
        case t2.closeSquare:
        case t2.colon:
        case t2.semicolon:
        case t2.openParenthesis:
        case t2.closeParenthesis:
          y2 = c3, C2 = u3, m3 = s3, p3 = c3 - o3, l3 = y2 + 1;
          break;
        case t2.singleQuote:
        case t2.doubleQuote:
          S2 = u3 === t2.singleQuote ? `'` : `"`, y2 = c3;
          do
            for (h2 = false, y2 = r3.indexOf(S2, y2 + 1), y2 === -1 && w2(`quote`, S2), g2 = y2; r3.charCodeAt(g2 - 1) === t2.backslash; ) --g2, h2 = !h2;
          while (h2);
          C2 = t2.str, m3 = s3, p3 = c3 - o3, l3 = y2 + 1;
          break;
        default:
          u3 === t2.slash && r3.charCodeAt(c3 + 1) === t2.asterisk ? (y2 = r3.indexOf(`*/`, c3 + 2) + 1, y2 === 0 && w2(`comment`, `*/`), f3 = r3.slice(c3, y2 + 1), v2 = f3.split(`
`), _2 = v2.length - 1, _2 > 0 ? (b2 = s3 + _2, x2 = y2 - v2[_2].length) : (b2 = s3, x2 = o3), C2 = t2.comment, s3 = b2, m3 = b2, p3 = y2 - x2) : u3 === t2.slash ? (y2 = c3, C2 = u3, m3 = s3, p3 = c3 - o3, l3 = y2 + 1) : (y2 = d2(r3, c3), C2 = t2.word, m3 = s3, p3 = y2 - o3), l3 = y2 + 1;
          break;
      }
      n3.push([C2, s3, c3 - o3, m3, p3, c3, l3]), x2 && (o3 = x2, x2 = null), c3 = l3;
    }
    return n3;
  }
}), Qi = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = C2(Ii()), r2 = C2(Li()), i2 = C2(Ri()), a2 = C2(zi()), o2 = C2(Bi()), s2 = C2(Hi()), c2 = C2(Ui()), l2 = C2(Wi()), u2 = S2(Gi()), d2 = C2(Ki()), f2 = C2(qi()), p2 = C2(Ji()), m2 = C2(Yi()), h2 = S2(Zi()), g2 = S2(Xi()), _2 = S2($()), v2 = Ni(), y2, b2;
  function x2(e2) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (x2 = function(e3) {
      return e3 ? n3 : t3;
    })(e2);
  }
  function S2(e2, t3) {
    if (!t3 && e2 && e2.__esModule) return e2;
    if (e2 === null || typeof e2 != `object` && typeof e2 != `function`) return { default: e2 };
    var n3 = x2(t3);
    if (n3 && n3.has(e2)) return n3.get(e2);
    var r3 = {}, i3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a3 in e2) if (a3 !== `default` && Object.prototype.hasOwnProperty.call(e2, a3)) {
      var o3 = i3 ? Object.getOwnPropertyDescriptor(e2, a3) : null;
      o3 && (o3.get || o3.set) ? Object.defineProperty(r3, a3, o3) : r3[a3] = e2[a3];
    }
    return r3.default = e2, n3 && n3.set(e2, r3), r3;
  }
  function C2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function w2(e2, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e2, r3.key, r3);
    }
  }
  function T2(e2, t3, n3) {
    return t3 && w2(e2.prototype, t3), n3 && w2(e2, n3), Object.defineProperty(e2, `prototype`, { writable: false }), e2;
  }
  var E2 = (y2 = {}, y2[g2.space] = true, y2[g2.cr] = true, y2[g2.feed] = true, y2[g2.newline] = true, y2[g2.tab] = true, y2), D2 = Object.assign({}, E2, (b2 = {}, b2[g2.comment] = true, b2));
  function O2(e2) {
    return { line: e2[h2.FIELDS.START_LINE], column: e2[h2.FIELDS.START_COL] };
  }
  function k2(e2) {
    return { line: e2[h2.FIELDS.END_LINE], column: e2[h2.FIELDS.END_COL] };
  }
  function A2(e2, t3, n3, r3) {
    return { start: { line: e2, column: t3 }, end: { line: n3, column: r3 } };
  }
  function j2(e2) {
    return A2(e2[h2.FIELDS.START_LINE], e2[h2.FIELDS.START_COL], e2[h2.FIELDS.END_LINE], e2[h2.FIELDS.END_COL]);
  }
  function ee2(e2, t3) {
    if (e2) return A2(e2[h2.FIELDS.START_LINE], e2[h2.FIELDS.START_COL], t3[h2.FIELDS.END_LINE], t3[h2.FIELDS.END_COL]);
  }
  function te2(e2, t3) {
    var n3 = e2[t3];
    if (typeof n3 == `string`) return n3.indexOf(`\\`) !== -1 && ((0, v2.ensureObject)(e2, `raws`), e2[t3] = (0, v2.unesc)(n3), e2.raws[t3] === void 0 && (e2.raws[t3] = n3)), e2;
  }
  function ne2(e2, t3) {
    for (var n3 = -1, r3 = []; (n3 = e2.indexOf(t3, n3 + 1)) !== -1; ) r3.push(n3);
    return r3;
  }
  function re2() {
    var e2 = Array.prototype.concat.apply([], arguments);
    return e2.filter(function(t3, n3) {
      return n3 === e2.indexOf(t3);
    });
  }
  var ie2 = function() {
    function e2(e3, t4) {
      t4 === void 0 && (t4 = {}), this.rule = e3, this.options = Object.assign({ lossy: false, safe: false }, t4), this.position = 0, this.css = typeof this.rule == `string` ? this.rule : this.rule.selector, this.tokens = (0, h2.default)({ css: this.css, error: this._errorGenerator(), safe: this.options.safe });
      var i3 = ee2(this.tokens[0], this.tokens[this.tokens.length - 1]);
      this.root = new n2.default({ source: i3 }), this.root.errorGenerator = this._errorGenerator();
      var a3 = new r2.default({ source: { start: { line: 1, column: 1 } }, sourceIndex: 0 });
      this.root.append(a3), this.current = a3, this.loop();
    }
    var t3 = e2.prototype;
    return t3._errorGenerator = function() {
      var e3 = this;
      return function(t4, n3) {
        return typeof e3.rule == `string` ? Error(t4) : e3.rule.error(t4, n3);
      };
    }, t3.attribute = function() {
      var e3 = [], t4 = this.currToken;
      for (this.position++; this.position < this.tokens.length && this.currToken[h2.FIELDS.TYPE] !== g2.closeSquare; ) e3.push(this.currToken), this.position++;
      if (this.currToken[h2.FIELDS.TYPE] !== g2.closeSquare) return this.expected(`closing square bracket`, this.currToken[h2.FIELDS.START_POS]);
      var n3 = e3.length, r3 = { source: A2(t4[1], t4[2], this.currToken[3], this.currToken[4]), sourceIndex: t4[h2.FIELDS.START_POS] };
      if (n3 === 1 && !~[g2.word].indexOf(e3[0][h2.FIELDS.TYPE])) return this.expected(`attribute`, e3[0][h2.FIELDS.START_POS]);
      for (var i3 = 0, a3 = ``, o3 = ``, s3 = null, c3 = false; i3 < n3; ) {
        var l3 = e3[i3], d3 = this.content(l3), f3 = e3[i3 + 1];
        switch (l3[h2.FIELDS.TYPE]) {
          case g2.space:
            if (c3 = true, this.options.lossy) break;
            if (s3) {
              (0, v2.ensureObject)(r3, `spaces`, s3);
              var p3 = r3.spaces[s3].after || ``;
              r3.spaces[s3].after = p3 + d3;
              var m3 = (0, v2.getProp)(r3, `raws`, `spaces`, s3, `after`) || null;
              m3 && (r3.raws.spaces[s3].after = m3 + d3);
            } else a3 += d3, o3 += d3;
            break;
          case g2.asterisk:
            if (f3[h2.FIELDS.TYPE] === g2.equals) r3.operator = d3, s3 = `operator`;
            else if ((!r3.namespace || s3 === `namespace` && !c3) && f3) {
              a3 && ((0, v2.ensureObject)(r3, `spaces`, `attribute`), r3.spaces.attribute.before = a3, a3 = ``), o3 && ((0, v2.ensureObject)(r3, `raws`, `spaces`, `attribute`), r3.raws.spaces.attribute.before = a3, o3 = ``), r3.namespace = (r3.namespace || ``) + d3;
              var _3 = (0, v2.getProp)(r3, `raws`, `namespace`) || null;
              _3 && (r3.raws.namespace += d3), s3 = `namespace`;
            }
            c3 = false;
            break;
          case g2.dollar:
            if (s3 === `value`) {
              var y3 = (0, v2.getProp)(r3, `raws`, `value`);
              r3.value += `$`, y3 && (r3.raws.value = y3 + `$`);
              break;
            }
          case g2.caret:
            f3[h2.FIELDS.TYPE] === g2.equals && (r3.operator = d3, s3 = `operator`), c3 = false;
            break;
          case g2.combinator:
            if (d3 === `~` && f3[h2.FIELDS.TYPE] === g2.equals && (r3.operator = d3, s3 = `operator`), d3 !== `|`) {
              c3 = false;
              break;
            }
            f3[h2.FIELDS.TYPE] === g2.equals ? (r3.operator = d3, s3 = `operator`) : !r3.namespace && !r3.attribute && (r3.namespace = true), c3 = false;
            break;
          case g2.word:
            if (f3 && this.content(f3) === `|` && e3[i3 + 2] && e3[i3 + 2][h2.FIELDS.TYPE] !== g2.equals && !r3.operator && !r3.namespace) r3.namespace = d3, s3 = `namespace`;
            else if (!r3.attribute || s3 === `attribute` && !c3) {
              a3 && ((0, v2.ensureObject)(r3, `spaces`, `attribute`), r3.spaces.attribute.before = a3, a3 = ``), o3 && ((0, v2.ensureObject)(r3, `raws`, `spaces`, `attribute`), r3.raws.spaces.attribute.before = o3, o3 = ``), r3.attribute = (r3.attribute || ``) + d3;
              var b3 = (0, v2.getProp)(r3, `raws`, `attribute`) || null;
              b3 && (r3.raws.attribute += d3), s3 = `attribute`;
            } else if (!r3.value && r3.value !== `` || s3 === `value` && !(c3 || r3.quoteMark)) {
              var x3 = (0, v2.unesc)(d3), S3 = (0, v2.getProp)(r3, `raws`, `value`) || ``, C3 = r3.value || ``;
              r3.value = C3 + x3, r3.quoteMark = null, (x3 !== d3 || S3) && ((0, v2.ensureObject)(r3, `raws`), r3.raws.value = (S3 || C3) + d3), s3 = `value`;
            } else {
              var w3 = d3 === `i` || d3 === `I`;
              (r3.value || r3.value === ``) && (r3.quoteMark || c3) ? (r3.insensitive = w3, (!w3 || d3 === `I`) && ((0, v2.ensureObject)(r3, `raws`), r3.raws.insensitiveFlag = d3), s3 = `insensitive`, a3 && ((0, v2.ensureObject)(r3, `spaces`, `insensitive`), r3.spaces.insensitive.before = a3, a3 = ``), o3 && ((0, v2.ensureObject)(r3, `raws`, `spaces`, `insensitive`), r3.raws.spaces.insensitive.before = o3, o3 = ``)) : (r3.value || r3.value === ``) && (s3 = `value`, r3.value += d3, r3.raws.value && (r3.raws.value += d3));
            }
            c3 = false;
            break;
          case g2.str:
            if (!r3.attribute || !r3.operator) return this.error(`Expected an attribute followed by an operator preceding the string.`, { index: l3[h2.FIELDS.START_POS] });
            var T3 = (0, u2.unescapeValue)(d3), E3 = T3.unescaped, D3 = T3.quoteMark;
            r3.value = E3, r3.quoteMark = D3, s3 = `value`, (0, v2.ensureObject)(r3, `raws`), r3.raws.value = d3, c3 = false;
            break;
          case g2.equals:
            if (!r3.attribute) return this.expected(`attribute`, l3[h2.FIELDS.START_POS], d3);
            if (r3.value) return this.error(`Unexpected "=" found; an operator was already defined.`, { index: l3[h2.FIELDS.START_POS] });
            r3.operator = r3.operator ? r3.operator + d3 : d3, s3 = `operator`, c3 = false;
            break;
          case g2.comment:
            if (s3) if (c3 || f3 && f3[h2.FIELDS.TYPE] === g2.space || s3 === `insensitive`) {
              var O3 = (0, v2.getProp)(r3, `spaces`, s3, `after`) || ``, k3 = (0, v2.getProp)(r3, `raws`, `spaces`, s3, `after`) || O3;
              (0, v2.ensureObject)(r3, `raws`, `spaces`, s3), r3.raws.spaces[s3].after = k3 + d3;
            } else {
              var j3 = r3[s3] || ``, ee3 = (0, v2.getProp)(r3, `raws`, s3) || j3;
              (0, v2.ensureObject)(r3, `raws`), r3.raws[s3] = ee3 + d3;
            }
            else o3 += d3;
            break;
          default:
            return this.error(`Unexpected "` + d3 + `" found.`, { index: l3[h2.FIELDS.START_POS] });
        }
        i3++;
      }
      te2(r3, `attribute`), te2(r3, `namespace`), this.newNode(new u2.default(r3)), this.position++;
    }, t3.parseWhitespaceEquivalentTokens = function(e3) {
      e3 < 0 && (e3 = this.tokens.length);
      var t4 = this.position, n3 = [], r3 = ``, i3 = void 0;
      do
        if (E2[this.currToken[h2.FIELDS.TYPE]]) this.options.lossy || (r3 += this.content());
        else if (this.currToken[h2.FIELDS.TYPE] === g2.comment) {
          var o3 = {};
          r3 && (o3.before = r3, r3 = ``), i3 = new a2.default({ value: this.content(), source: j2(this.currToken), sourceIndex: this.currToken[h2.FIELDS.START_POS], spaces: o3 }), n3.push(i3);
        }
      while (++this.position < e3);
      if (r3) {
        if (i3) i3.spaces.after = r3;
        else if (!this.options.lossy) {
          var s3 = this.tokens[t4], l3 = this.tokens[this.position - 1];
          n3.push(new c2.default({ value: ``, source: A2(s3[h2.FIELDS.START_LINE], s3[h2.FIELDS.START_COL], l3[h2.FIELDS.END_LINE], l3[h2.FIELDS.END_COL]), sourceIndex: s3[h2.FIELDS.START_POS], spaces: { before: r3, after: `` } }));
        }
      }
      return n3;
    }, t3.convertWhitespaceNodesToSpace = function(e3, t4) {
      var n3 = this;
      t4 === void 0 && (t4 = false);
      var r3 = ``, i3 = ``;
      e3.forEach(function(e4) {
        var a4 = n3.lossySpace(e4.spaces.before, t4), o3 = n3.lossySpace(e4.rawSpaceBefore, t4);
        r3 += a4 + n3.lossySpace(e4.spaces.after, t4 && a4.length === 0), i3 += a4 + e4.value + n3.lossySpace(e4.rawSpaceAfter, t4 && o3.length === 0);
      }), i3 === r3 && (i3 = void 0);
      var a3 = { space: r3, rawSpace: i3 };
      return a3;
    }, t3.isNamedCombinator = function(e3) {
      return e3 === void 0 && (e3 = this.position), this.tokens[e3 + 0] && this.tokens[e3 + 0][h2.FIELDS.TYPE] === g2.slash && this.tokens[e3 + 1] && this.tokens[e3 + 1][h2.FIELDS.TYPE] === g2.word && this.tokens[e3 + 2] && this.tokens[e3 + 2][h2.FIELDS.TYPE] === g2.slash;
    }, t3.namedCombinator = function() {
      if (this.isNamedCombinator()) {
        var e3 = this.content(this.tokens[this.position + 1]), t4 = (0, v2.unesc)(e3).toLowerCase(), n3 = {};
        t4 !== e3 && (n3.value = `/` + e3 + `/`);
        var r3 = new f2.default({ value: `/` + t4 + `/`, source: A2(this.currToken[h2.FIELDS.START_LINE], this.currToken[h2.FIELDS.START_COL], this.tokens[this.position + 2][h2.FIELDS.END_LINE], this.tokens[this.position + 2][h2.FIELDS.END_COL]), sourceIndex: this.currToken[h2.FIELDS.START_POS], raws: n3 });
        return this.position += 3, r3;
      } else this.unexpected();
    }, t3.combinator = function() {
      var e3 = this;
      if (this.content() === `|`) return this.namespace();
      var t4 = this.locateNextMeaningfulToken(this.position);
      if (t4 < 0 || this.tokens[t4][h2.FIELDS.TYPE] === g2.comma || this.tokens[t4][h2.FIELDS.TYPE] === g2.closeParenthesis) {
        var n3 = this.parseWhitespaceEquivalentTokens(t4);
        if (n3.length > 0) {
          var r3 = this.current.last;
          if (r3) {
            var i3 = this.convertWhitespaceNodesToSpace(n3), a3 = i3.space, o3 = i3.rawSpace;
            o3 !== void 0 && (r3.rawSpaceAfter += o3), r3.spaces.after += a3;
          } else n3.forEach(function(t5) {
            return e3.newNode(t5);
          });
        }
        return;
      }
      var s3 = this.currToken, c3 = void 0;
      t4 > this.position && (c3 = this.parseWhitespaceEquivalentTokens(t4));
      var l3;
      if (this.isNamedCombinator() ? l3 = this.namedCombinator() : this.currToken[h2.FIELDS.TYPE] === g2.combinator ? (l3 = new f2.default({ value: this.content(), source: j2(this.currToken), sourceIndex: this.currToken[h2.FIELDS.START_POS] }), this.position++) : E2[this.currToken[h2.FIELDS.TYPE]] || c3 || this.unexpected(), l3) {
        if (c3) {
          var u3 = this.convertWhitespaceNodesToSpace(c3), d3 = u3.space, p3 = u3.rawSpace;
          l3.spaces.before = d3, l3.rawSpaceBefore = p3;
        }
      } else {
        var m3 = this.convertWhitespaceNodesToSpace(c3, true), _3 = m3.space, v3 = m3.rawSpace;
        v3 || (v3 = _3);
        var y3 = {}, b3 = { spaces: {} };
        _3.endsWith(` `) && v3.endsWith(` `) ? (y3.before = _3.slice(0, _3.length - 1), b3.spaces.before = v3.slice(0, v3.length - 1)) : _3.startsWith(` `) && v3.startsWith(` `) ? (y3.after = _3.slice(1), b3.spaces.after = v3.slice(1)) : b3.value = v3, l3 = new f2.default({ value: ` `, source: ee2(s3, this.tokens[this.position - 1]), sourceIndex: s3[h2.FIELDS.START_POS], spaces: y3, raws: b3 });
      }
      return this.currToken && this.currToken[h2.FIELDS.TYPE] === g2.space && (l3.spaces.after = this.optionalSpace(this.content()), this.position++), this.newNode(l3);
    }, t3.comma = function() {
      if (this.position === this.tokens.length - 1) {
        this.root.trailingComma = true, this.position++;
        return;
      }
      this.current._inferEndPosition();
      var e3 = new r2.default({ source: { start: O2(this.tokens[this.position + 1]) }, sourceIndex: this.tokens[this.position + 1][h2.FIELDS.START_POS] });
      this.current.parent.append(e3), this.current = e3, this.position++;
    }, t3.comment = function() {
      var e3 = this.currToken;
      this.newNode(new a2.default({ value: this.content(), source: j2(e3), sourceIndex: e3[h2.FIELDS.START_POS] })), this.position++;
    }, t3.error = function(e3, t4) {
      throw this.root.error(e3, t4);
    }, t3.missingBackslash = function() {
      return this.error(`Expected a backslash preceding the semicolon.`, { index: this.currToken[h2.FIELDS.START_POS] });
    }, t3.missingParenthesis = function() {
      return this.expected(`opening parenthesis`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.missingSquareBracket = function() {
      return this.expected(`opening square bracket`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.unexpected = function() {
      return this.error(`Unexpected '` + this.content() + `'. Escaping special characters with \\ may help.`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.unexpectedPipe = function() {
      return this.error(`Unexpected '|'.`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.namespace = function() {
      var e3 = this.prevToken && this.content(this.prevToken) || true;
      if (this.nextToken[h2.FIELDS.TYPE] === g2.word) return this.position++, this.word(e3);
      if (this.nextToken[h2.FIELDS.TYPE] === g2.asterisk) return this.position++, this.universal(e3);
      this.unexpectedPipe();
    }, t3.nesting = function() {
      if (this.nextToken) {
        var e3 = this.content(this.nextToken);
        if (e3 === `|`) {
          this.position++;
          return;
        }
      }
      var t4 = this.currToken;
      this.newNode(new p2.default({ value: this.content(), source: j2(t4), sourceIndex: t4[h2.FIELDS.START_POS] })), this.position++;
    }, t3.parentheses = function() {
      var e3 = this.current.last, t4 = 1;
      if (this.position++, e3 && e3.type === _2.PSEUDO) {
        var n3 = new r2.default({ source: { start: O2(this.tokens[this.position]) }, sourceIndex: this.tokens[this.position][h2.FIELDS.START_POS] }), i3 = this.current;
        for (e3.append(n3), this.current = n3; this.position < this.tokens.length && t4; ) this.currToken[h2.FIELDS.TYPE] === g2.openParenthesis && t4++, this.currToken[h2.FIELDS.TYPE] === g2.closeParenthesis && t4--, t4 ? this.parse() : (this.current.source.end = k2(this.currToken), this.current.parent.source.end = k2(this.currToken), this.position++);
        this.current = i3;
      } else {
        for (var a3 = this.currToken, o3 = `(`, s3; this.position < this.tokens.length && t4; ) this.currToken[h2.FIELDS.TYPE] === g2.openParenthesis && t4++, this.currToken[h2.FIELDS.TYPE] === g2.closeParenthesis && t4--, s3 = this.currToken, o3 += this.parseParenthesisToken(this.currToken), this.position++;
        e3 ? e3.appendToPropertyAndEscape(`value`, o3, o3) : this.newNode(new c2.default({ value: o3, source: A2(a3[h2.FIELDS.START_LINE], a3[h2.FIELDS.START_COL], s3[h2.FIELDS.END_LINE], s3[h2.FIELDS.END_COL]), sourceIndex: a3[h2.FIELDS.START_POS] }));
      }
      if (t4) return this.expected(`closing parenthesis`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.pseudo = function() {
      for (var e3 = this, t4 = ``, n3 = this.currToken; this.currToken && this.currToken[h2.FIELDS.TYPE] === g2.colon; ) t4 += this.content(), this.position++;
      if (!this.currToken) return this.expected([`pseudo-class`, `pseudo-element`], this.position - 1);
      if (this.currToken[h2.FIELDS.TYPE] === g2.word) this.splitWord(false, function(r3, i3) {
        t4 += r3, e3.newNode(new l2.default({ value: t4, source: ee2(n3, e3.currToken), sourceIndex: n3[h2.FIELDS.START_POS] })), i3 > 1 && e3.nextToken && e3.nextToken[h2.FIELDS.TYPE] === g2.openParenthesis && e3.error(`Misplaced parenthesis.`, { index: e3.nextToken[h2.FIELDS.START_POS] });
      });
      else return this.expected([`pseudo-class`, `pseudo-element`], this.currToken[h2.FIELDS.START_POS]);
    }, t3.space = function() {
      var e3 = this.content();
      this.position === 0 || this.prevToken[h2.FIELDS.TYPE] === g2.comma || this.prevToken[h2.FIELDS.TYPE] === g2.openParenthesis || this.current.nodes.every(function(e4) {
        return e4.type === `comment`;
      }) ? (this.spaces = this.optionalSpace(e3), this.position++) : this.position === this.tokens.length - 1 || this.nextToken[h2.FIELDS.TYPE] === g2.comma || this.nextToken[h2.FIELDS.TYPE] === g2.closeParenthesis ? (this.current.last.spaces.after = this.optionalSpace(e3), this.position++) : this.combinator();
    }, t3.string = function() {
      var e3 = this.currToken;
      this.newNode(new c2.default({ value: this.content(), source: j2(e3), sourceIndex: e3[h2.FIELDS.START_POS] })), this.position++;
    }, t3.universal = function(e3) {
      var t4 = this.nextToken;
      if (t4 && this.content(t4) === `|`) return this.position++, this.namespace();
      var n3 = this.currToken;
      this.newNode(new d2.default({ value: this.content(), source: j2(n3), sourceIndex: n3[h2.FIELDS.START_POS] }), e3), this.position++;
    }, t3.splitWord = function(e3, t4) {
      for (var n3 = this, r3 = this.nextToken, a3 = this.content(); r3 && ~[g2.dollar, g2.caret, g2.equals, g2.word].indexOf(r3[h2.FIELDS.TYPE]); ) {
        this.position++;
        var c3 = this.content();
        if (a3 += c3, c3.lastIndexOf(`\\`) === c3.length - 1) {
          var l3 = this.nextToken;
          l3 && l3[h2.FIELDS.TYPE] === g2.space && (a3 += this.requiredSpace(this.content(l3)), this.position++);
        }
        r3 = this.nextToken;
      }
      var u3 = ne2(a3, `.`).filter(function(e4) {
        var t5 = a3[e4 - 1] === `\\`, n4 = /^\d+\.\d+%$/.test(a3);
        return !t5 && !n4;
      }), d3 = ne2(a3, `#`).filter(function(e4) {
        return a3[e4 - 1] !== `\\`;
      }), f3 = ne2(a3, `#{`);
      f3.length && (d3 = d3.filter(function(e4) {
        return !~f3.indexOf(e4);
      }));
      var p3 = (0, m2.default)(re2([0].concat(u3, d3)));
      p3.forEach(function(r4, c4) {
        var l4 = p3[c4 + 1] || a3.length, f4 = a3.slice(r4, l4);
        if (c4 === 0 && t4) return t4.call(n3, f4, p3.length);
        var m3, g3 = n3.currToken, _3 = g3[h2.FIELDS.START_POS] + p3[c4], v3 = A2(g3[1], g3[2] + r4, g3[3], g3[2] + (l4 - 1));
        if (~u3.indexOf(r4)) {
          var y3 = { value: f4.slice(1), source: v3, sourceIndex: _3 };
          m3 = new i2.default(te2(y3, `value`));
        } else if (~d3.indexOf(r4)) {
          var b3 = { value: f4.slice(1), source: v3, sourceIndex: _3 };
          m3 = new o2.default(te2(b3, `value`));
        } else {
          var x3 = { value: f4, source: v3, sourceIndex: _3 };
          te2(x3, `value`), m3 = new s2.default(x3);
        }
        n3.newNode(m3, e3), e3 = null;
      }), this.position++;
    }, t3.word = function(e3) {
      var t4 = this.nextToken;
      return t4 && this.content(t4) === `|` ? (this.position++, this.namespace()) : this.splitWord(e3);
    }, t3.loop = function() {
      for (; this.position < this.tokens.length; ) this.parse(true);
      return this.current._inferEndPosition(), this.root;
    }, t3.parse = function(e3) {
      switch (this.currToken[h2.FIELDS.TYPE]) {
        case g2.space:
          this.space();
          break;
        case g2.comment:
          this.comment();
          break;
        case g2.openParenthesis:
          this.parentheses();
          break;
        case g2.closeParenthesis:
          e3 && this.missingParenthesis();
          break;
        case g2.openSquare:
          this.attribute();
          break;
        case g2.dollar:
        case g2.caret:
        case g2.equals:
        case g2.word:
          this.word();
          break;
        case g2.colon:
          this.pseudo();
          break;
        case g2.comma:
          this.comma();
          break;
        case g2.asterisk:
          this.universal();
          break;
        case g2.ampersand:
          this.nesting();
          break;
        case g2.slash:
        case g2.combinator:
          this.combinator();
          break;
        case g2.str:
          this.string();
          break;
        case g2.closeSquare:
          this.missingSquareBracket();
        case g2.semicolon:
          this.missingBackslash();
        default:
          this.unexpected();
      }
    }, t3.expected = function(e3, t4, n3) {
      if (Array.isArray(e3)) {
        var r3 = e3.pop();
        e3 = e3.join(`, `) + ` or ` + r3;
      }
      var i3 = /^[aeiou]/.test(e3[0]) ? `an` : `a`;
      return n3 ? this.error(`Expected ` + i3 + ` ` + e3 + `, found "` + n3 + `" instead.`, { index: t4 }) : this.error(`Expected ` + i3 + ` ` + e3 + `.`, { index: t4 });
    }, t3.requiredSpace = function(e3) {
      return this.options.lossy ? ` ` : e3;
    }, t3.optionalSpace = function(e3) {
      return this.options.lossy ? `` : e3;
    }, t3.lossySpace = function(e3, t4) {
      return this.options.lossy ? t4 ? ` ` : `` : e3;
    }, t3.parseParenthesisToken = function(e3) {
      var t4 = this.content(e3);
      return e3[h2.FIELDS.TYPE] === g2.space ? this.requiredSpace(t4) : t4;
    }, t3.newNode = function(e3, t4) {
      return t4 && (/^ +$/.test(t4) && (this.options.lossy || (this.spaces = (this.spaces || ``) + t4), t4 = true), e3.namespace = t4, te2(e3, `namespace`)), this.spaces && (e3.spaces.before = this.spaces, this.spaces = ``), this.current.append(e3);
    }, t3.content = function(e3) {
      return e3 === void 0 && (e3 = this.currToken), this.css.slice(e3[h2.FIELDS.START_POS], e3[h2.FIELDS.END_POS]);
    }, t3.locateNextMeaningfulToken = function(e3) {
      e3 === void 0 && (e3 = this.position + 1);
      for (var t4 = e3; t4 < this.tokens.length; ) if (D2[this.tokens[t4][h2.FIELDS.TYPE]]) {
        t4++;
        continue;
      } else return t4;
      return -1;
    }, T2(e2, [{ key: `currToken`, get: function() {
      return this.tokens[this.position];
    } }, { key: `nextToken`, get: function() {
      return this.tokens[this.position + 1];
    } }, { key: `prevToken`, get: function() {
      return this.tokens[this.position - 1];
    } }]), e2;
  }();
  exports.default = ie2, t2.exports = exports.default;
}), $i = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = r2(Qi());
  function r2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  var i2 = function() {
    function e2(e3, t4) {
      this.func = e3 || function() {
      }, this.funcRes = null, this.options = t4;
    }
    var t3 = e2.prototype;
    return t3._shouldUpdateSelector = function(e3, t4) {
      t4 === void 0 && (t4 = {});
      var n3 = Object.assign({}, this.options, t4);
      return n3.updateSelector === false ? false : typeof e3 != `string`;
    }, t3._isLossy = function(e3) {
      e3 === void 0 && (e3 = {});
      var t4 = Object.assign({}, this.options, e3);
      return t4.lossless === false;
    }, t3._root = function(e3, t4) {
      t4 === void 0 && (t4 = {});
      var r3 = new n2.default(e3, this._parseOptions(t4));
      return r3.root;
    }, t3._parseOptions = function(e3) {
      return { lossy: this._isLossy(e3) };
    }, t3._run = function(e3, t4) {
      var n3 = this;
      return t4 === void 0 && (t4 = {}), new Promise(function(r3, i3) {
        try {
          var a2 = n3._root(e3, t4);
          Promise.resolve(n3.func(a2)).then(function(r4) {
            var i4 = void 0;
            return n3._shouldUpdateSelector(e3, t4) && (i4 = a2.toString(), e3.selector = i4), { transform: r4, root: a2, string: i4 };
          }).then(r3, i3);
        } catch (e4) {
          i3(e4);
          return;
        }
      });
    }, t3._runSync = function(e3, t4) {
      t4 === void 0 && (t4 = {});
      var n3 = this._root(e3, t4), r3 = this.func(n3);
      if (r3 && typeof r3.then == `function`) throw Error(`Selector processor returned a promise to a synchronous call.`);
      var i3 = void 0;
      return t4.updateSelector && typeof e3 != `string` && (i3 = n3.toString(), e3.selector = i3), { transform: r3, root: n3, string: i3 };
    }, t3.ast = function(e3, t4) {
      return this._run(e3, t4).then(function(e4) {
        return e4.root;
      });
    }, t3.astSync = function(e3, t4) {
      return this._runSync(e3, t4).root;
    }, t3.transform = function(e3, t4) {
      return this._run(e3, t4).then(function(e4) {
        return e4.transform;
      });
    }, t3.transformSync = function(e3, t4) {
      return this._runSync(e3, t4).transform;
    }, t3.process = function(e3, t4) {
      return this._run(e3, t4).then(function(e4) {
        return e4.string || e4.root.toString();
      });
    }, t3.processSync = function(e3, t4) {
      var n3 = this._runSync(e3, t4);
      return n3.string || n3.root.toString();
    }, e2;
  }();
  exports.default = i2, t2.exports = exports.default;
}), ea = e((exports) => {
  exports.__esModule = true, exports.universal = exports.tag = exports.string = exports.selector = exports.root = exports.pseudo = exports.nesting = exports.id = exports.comment = exports.combinator = exports.className = exports.attribute = void 0;
  var t2 = p2(Gi()), n2 = p2(Ri()), r2 = p2(qi()), i2 = p2(zi()), a2 = p2(Bi()), o2 = p2(Ji()), s2 = p2(Wi()), c2 = p2(Ii()), l2 = p2(Li()), u2 = p2(Ui()), d2 = p2(Hi()), f2 = p2(Ki());
  function p2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  var m2 = function(e2) {
    return new t2.default(e2);
  };
  exports.attribute = m2;
  var h2 = function(e2) {
    return new n2.default(e2);
  };
  exports.className = h2;
  var g2 = function(e2) {
    return new r2.default(e2);
  };
  exports.combinator = g2;
  var _2 = function(e2) {
    return new i2.default(e2);
  };
  exports.comment = _2;
  var v2 = function(e2) {
    return new a2.default(e2);
  };
  exports.id = v2;
  var y2 = function(e2) {
    return new o2.default(e2);
  };
  exports.nesting = y2;
  var b2 = function(e2) {
    return new s2.default(e2);
  };
  exports.pseudo = b2;
  var x2 = function(e2) {
    return new c2.default(e2);
  };
  exports.root = x2;
  var S2 = function(e2) {
    return new l2.default(e2);
  };
  exports.selector = S2;
  var C2 = function(e2) {
    return new u2.default(e2);
  };
  exports.string = C2;
  var w2 = function(e2) {
    return new d2.default(e2);
  };
  exports.tag = w2;
  var T2 = function(e2) {
    return new f2.default(e2);
  };
  exports.universal = T2;
}), ta = e((exports) => {
  exports.__esModule = true, exports.isComment = exports.isCombinator = exports.isClassName = exports.isAttribute = void 0, exports.isContainer = b2, exports.isIdentifier = void 0, exports.isNamespace = x2, exports.isNesting = void 0, exports.isNode = i2, exports.isPseudo = void 0, exports.isPseudoClass = y2, exports.isPseudoElement = v2, exports.isUniversal = exports.isTag = exports.isString = exports.isSelector = exports.isRoot = void 0;
  var t2 = $(), n2, r2 = (n2 = {}, n2[t2.ATTRIBUTE] = true, n2[t2.CLASS] = true, n2[t2.COMBINATOR] = true, n2[t2.COMMENT] = true, n2[t2.ID] = true, n2[t2.NESTING] = true, n2[t2.PSEUDO] = true, n2[t2.ROOT] = true, n2[t2.SELECTOR] = true, n2[t2.STRING] = true, n2[t2.TAG] = true, n2[t2.UNIVERSAL] = true, n2);
  function i2(e2) {
    return typeof e2 == `object` && r2[e2.type];
  }
  function a2(e2, t3) {
    return i2(t3) && t3.type === e2;
  }
  var o2 = a2.bind(null, t2.ATTRIBUTE);
  exports.isAttribute = o2;
  var s2 = a2.bind(null, t2.CLASS);
  exports.isClassName = s2;
  var c2 = a2.bind(null, t2.COMBINATOR);
  exports.isCombinator = c2;
  var l2 = a2.bind(null, t2.COMMENT);
  exports.isComment = l2;
  var u2 = a2.bind(null, t2.ID);
  exports.isIdentifier = u2;
  var d2 = a2.bind(null, t2.NESTING);
  exports.isNesting = d2;
  var f2 = a2.bind(null, t2.PSEUDO);
  exports.isPseudo = f2;
  var p2 = a2.bind(null, t2.ROOT);
  exports.isRoot = p2;
  var m2 = a2.bind(null, t2.SELECTOR);
  exports.isSelector = m2;
  var h2 = a2.bind(null, t2.STRING);
  exports.isString = h2;
  var g2 = a2.bind(null, t2.TAG);
  exports.isTag = g2;
  var _2 = a2.bind(null, t2.UNIVERSAL);
  exports.isUniversal = _2;
  function v2(e2) {
    return f2(e2) && e2.value && (e2.value.startsWith(`::`) || e2.value.toLowerCase() === `:before` || e2.value.toLowerCase() === `:after` || e2.value.toLowerCase() === `:first-letter` || e2.value.toLowerCase() === `:first-line`);
  }
  function y2(e2) {
    return f2(e2) && !v2(e2);
  }
  function b2(e2) {
    return !!(i2(e2) && e2.walk);
  }
  function x2(e2) {
    return o2(e2) || g2(e2);
  }
}), na = e((exports) => {
  exports.__esModule = true;
  var t2 = $();
  Object.keys(t2).forEach(function(n3) {
    n3 === `default` || n3 === `__esModule` || n3 in exports && exports[n3] === t2[n3] || (exports[n3] = t2[n3]);
  });
  var n2 = ea();
  Object.keys(n2).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in exports && exports[t3] === n2[t3] || (exports[t3] = n2[t3]);
  });
  var r2 = ta();
  Object.keys(r2).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in exports && exports[t3] === r2[t3] || (exports[t3] = r2[t3]);
  });
}), ra = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = o2($i()), r2 = a2(na());
  function i2(e2) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (i2 = function(e3) {
      return e3 ? n3 : t3;
    })(e2);
  }
  function a2(e2, t3) {
    if (!t3 && e2 && e2.__esModule) return e2;
    if (e2 === null || typeof e2 != `object` && typeof e2 != `function`) return { default: e2 };
    var n3 = i2(t3);
    if (n3 && n3.has(e2)) return n3.get(e2);
    var r3 = {}, a3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o3 in e2) if (o3 !== `default` && Object.prototype.hasOwnProperty.call(e2, o3)) {
      var s3 = a3 ? Object.getOwnPropertyDescriptor(e2, o3) : null;
      s3 && (s3.get || s3.set) ? Object.defineProperty(r3, o3, s3) : r3[o3] = e2[o3];
    }
    return r3.default = e2, n3 && n3.set(e2, r3), r3;
  }
  function o2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  var s2 = function(e2) {
    return new n2.default(e2);
  };
  Object.assign(s2, r2), delete s2.__esModule;
  var c2 = s2;
  exports.default = c2, t2.exports = exports.default;
}), ia = e((exports, t2) => {
  let { AtRule: n2, Rule: r2 } = c(), i2 = ra();
  function a2(e2, t3) {
    let n3;
    try {
      i2((e3) => {
        n3 = e3;
      }).processSync(e2);
    } catch (n4) {
      throw e2.includes(`:`) ? t3 ? t3.error(`Missed semicolon`) : n4 : t3 ? t3.error(n4.message) : n4;
    }
    return n3.at(0);
  }
  function o2(e2, t3) {
    let n3 = false;
    return e2.each((e3) => {
      if (e3.type === `nesting`) {
        let r3 = t3.clone({});
        e3.value === `&` ? e3.replaceWith(r3) : e3.replaceWith(a2(e3.value.replace(`&`, r3.toString()))), n3 = true;
      } else `nodes` in e3 && e3.nodes && o2(e3, t3) && (n3 = true);
    }), n3;
  }
  function s2(e2, t3) {
    let n3 = [];
    for (let r3 of e2.selectors) {
      let s3 = a2(r3, e2);
      for (let e3 of t3.selectors) {
        if (!e3) continue;
        let r4 = a2(e3, t3), c2 = o2(r4, s3);
        c2 || (r4.prepend(i2.combinator({ value: ` ` })), r4.prepend(s3.clone({}))), n3.push(r4.toString());
      }
    }
    return n3;
  }
  function l2(e2, t3) {
    var _a2;
    if (((_a2 = e2.prev()) == null ? void 0 : _a2.type) !== `comment`) return t3.after(e2), e2;
    let n3 = e2.prev(), r3 = /[*]\/ *\n.*{/;
    return e2.parent.toString().match(r3) ? t3.after(e2).after(n3) : t3.after(e2), e2;
  }
  function u2(e2) {
    return function t3(n3, r3, i3, a3 = i3) {
      let o3 = [];
      if (r3.each((c2) => {
        c2.type === `rule` && i3 ? a3 && (c2.selectors = s2(n3, c2)) : c2.type === `atrule` && c2.nodes ? e2[c2.name] ? t3(n3, c2, a3) : r3[_2] !== false && o3.push(c2) : o3.push(c2);
      }), i3 && o3.length) {
        let e3 = n3.clone({ nodes: [] });
        for (let t4 of o3) e3.append(t4);
        r3.prepend(e3);
      }
    };
  }
  function d2(e2, t3, n3) {
    let i3 = new r2({ nodes: [], selector: e2 });
    return i3.append(t3), n3.after(i3), i3;
  }
  function f2(e2, t3, n3, r3 = true) {
    return t3.length ? (n3 = d2(e2, t3, n3), r3 && (t3 = []), [n3, t3]) : [n3, t3];
  }
  function p2(e2, t3 = ``) {
    let n3 = e2.concat(t3), r3 = {};
    for (let e3 of n3) r3[e3.replace(/^@/, ``)] = true;
    return r3;
  }
  function m2(e2) {
    e2 = e2.trim();
    let t3 = e2.match(/^\((.*)\)$/);
    if (!t3) return { selector: e2, type: `basic` };
    let n3 = t3[1].match(/^(with(?:out)?):(.+)$/);
    if (n3) {
      let e3 = n3[1] === `with`, t4 = Object.fromEntries(n3[2].trim().split(/\s+/).map((e4) => [e4, true]));
      if (e3 && t4.all) return { type: `noop` };
      let r3 = (e4) => !!t4[e4];
      return t4.all ? r3 = () => true : e3 && (r3 = (e4) => e4 === `all` ? false : !t4[e4]), { escapes: r3, type: `withrules` };
    }
    return { type: `unknown` };
  }
  function h2(e2) {
    let t3 = [], r3 = e2.parent;
    for (; r3 && r3 instanceof n2; ) t3.push(r3), r3 = r3.parent;
    return t3;
  }
  function g2(e2) {
    let t3 = e2[v2];
    if (!t3) e2.after(e2.nodes);
    else {
      let n3 = e2.nodes, r3, i3 = -1, a3, o3, s3, c2 = h2(e2);
      if (c2.forEach((e3, n4) => {
        if (t3(e3.name)) r3 = e3, i3 = n4, o3 = s3;
        else {
          let t4 = s3;
          s3 = e3.clone({ nodes: [] }), t4 && s3.append(t4), a3 || (a3 = s3);
        }
      }), !r3) e2.after(n3);
      else if (!o3) r3.after(n3);
      else {
        let e3 = a3;
        e3.append(n3), r3.after(o3);
      }
      if (e2.next() && r3) {
        let t4;
        c2.slice(0, i3 + 1).forEach((n4, r4, i4) => {
          let a4 = t4;
          t4 = n4.clone({ nodes: [] }), a4 && t4.append(a4);
          let o4 = [], s4 = i4[r4 - 1] || e2, c3 = s4.next();
          for (; c3; ) o4.push(c3), c3 = c3.next();
          t4.append(o4);
        }), t4 && (o3 || n3[n3.length - 1]).after(t4);
      }
    }
    e2.remove();
  }
  let _2 = Symbol(`rootRuleMergeSel`), v2 = Symbol(`rootRuleEscapes`);
  function y2(e2) {
    let { params: t3 } = e2, { escapes: n3, selector: i3, type: a3 } = m2(t3);
    if (a3 === `unknown`) throw e2.error(`Unknown @${e2.name} parameter ${JSON.stringify(t3)}`);
    if (a3 === `basic` && i3) {
      let t4 = new r2({ nodes: e2.nodes, selector: i3 });
      e2.removeAll(), e2.append(t4);
    }
    e2[v2] = n3, e2[_2] = n3 ? !n3(`all`) : a3 === `noop`;
  }
  let b2 = Symbol(`hasRootRule`);
  t2.exports = (e2 = {}) => {
    let t3 = p2([`media`, `supports`, `layer`, `container`, `starting-style`], e2.bubble), n3 = u2(t3), r3 = p2([`document`, `font-face`, `keyframes`, `-webkit-keyframes`, `-moz-keyframes`], e2.unwrap), i3 = (e2.rootRuleName || `at-root`).replace(/^@/, ``), a3 = e2.preserveEmpty;
    return { Once(e3) {
      e3.walkAtRules(i3, (t4) => {
        y2(t4), e3[b2] = true;
      });
    }, postcssPlugin: `postcss-nested`, RootExit(e3) {
      e3[b2] && (e3.walkAtRules(i3, g2), e3[b2] = false);
    }, Rule(e3) {
      let o3 = false, c2 = e3, u3 = false, d3 = [];
      e3.each((a4) => {
        switch (a4.type) {
          case `atrule`:
            [c2, d3] = f2(e3.selector, d3, c2), a4.name === i3 ? (o3 = true, n3(e3, a4, true, a4[_2]), c2 = l2(a4, c2)) : t3[a4.name] ? (u3 = true, o3 = true, n3(e3, a4, true), c2 = l2(a4, c2)) : r3[a4.name] ? (u3 = true, o3 = true, n3(e3, a4, false), c2 = l2(a4, c2)) : u3 && d3.push(a4);
            break;
          case `decl`:
            u3 && d3.push(a4);
            break;
          case `rule`:
            [c2, d3] = f2(e3.selector, d3, c2), u3 = true, o3 = true, a4.selectors = s2(e3, a4), c2 = l2(a4, c2);
            break;
        }
      }), f2(e3.selector, d3, c2, false), o3 && a3 !== true && (e3.raws.semicolon = true, e3.nodes.length === 0 && e3.remove());
    } };
  }, t2.exports.postcss = true;
}), aa = t(ia());
async function oa({ entrypoint: e2 = `/main.css`, volume: t2 = {}, ...n2 } = {}) {
  n2 = { entrypoint: e2, volume: t2, ...n2 };
  let r2 = o().use((0, aa.default)()), i2 = await r2.process(n2.volume[n2.entrypoint], { from: n2.entrypoint });
  return { css: i2.css };
}
export {
  bi as Aa,
  xi as Ca,
  Oi as loadStylesheet,
  oa as preprocess,
  ra as require_dist$1
};
