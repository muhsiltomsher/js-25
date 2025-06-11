import "./dist-DPO5Yrzi.min.js";
import { watch as e } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import "./core-DXhlFaDq.min.js";
import { customAlphabet as t } from "./index.browser-D93niy_k.min.js";
import { _baseGetTag_default as n, isObjectLike_default as r, isObject_default as i } from "./isObject-DwiMiGzS.min.js";
import { eq_default as a, isArray_default as o, isFunction_default as s } from "./_toKey-CxbSDiUe.min.js";
import { _Stack_default as c, _cloneBuffer_default as l, _cloneTypedArray_default as ee, _copyArray_default as te, _copyObject_default as u, _getPrototype_default as d, _initCloneObject_default as ne, isArguments_default as f, isArrayLike_default as p, isBuffer_default as re, isTypedArray_default as ie, keysIn_default as m } from "./_initCloneObject-CAdcLSh1.min.js";
import { _baseAssignValue_default as h, _defineProperty_default as g, _isIndex_default as _ } from "./set-kZig-l_I.min.js";
import "./get-pqwrRitR.min.js";
import "./virtualRef-BSHD7wxg.js";
import { logger as v } from "./logger-B1Q-9Dmh.js";
import { brxGlobalProp as y, settingsState as b } from "./constant-B9ERhtGk.js";
function x(e2) {
  return e2;
}
var S = x;
function C(e2, t2, n2) {
  switch (n2.length) {
    case 0:
      return e2.call(t2);
    case 1:
      return e2.call(t2, n2[0]);
    case 2:
      return e2.call(t2, n2[0], n2[1]);
    case 3:
      return e2.call(t2, n2[0], n2[1], n2[2]);
  }
  return e2.apply(t2, n2);
}
var ae = C, oe = 800, se = 16, ce = Date.now;
function le(e2) {
  var t2 = 0, n2 = 0;
  return function() {
    var r2 = ce(), i2 = se - (r2 - n2);
    if (n2 = r2, i2 > 0) {
      if (++t2 >= oe) return arguments[0];
    } else t2 = 0;
    return e2.apply(void 0, arguments);
  };
}
var ue = le;
function de(e2) {
  return function() {
    return e2;
  };
}
var fe = de, pe = g ? function(e2, t2) {
  return g(e2, `toString`, { configurable: true, enumerable: false, value: fe(t2), writable: true });
} : S, me = pe, w = ue(me), T = w, E = Math.max;
function D(e2, t2, n2) {
  return t2 = E(t2 === void 0 ? e2.length - 1 : t2, 0), function() {
    for (var r2 = arguments, i2 = -1, a2 = E(r2.length - t2, 0), o2 = Array(a2); ++i2 < a2; ) o2[i2] = r2[t2 + i2];
    i2 = -1;
    for (var s2 = Array(t2 + 1); ++i2 < t2; ) s2[i2] = r2[i2];
    return s2[t2] = n2(o2), ae(e2, this, s2);
  };
}
var O = D;
function k(e2, t2) {
  return T(O(e2, t2, S), e2 + ``);
}
var A = k;
function j(e2, t2, n2) {
  if (!i(n2)) return false;
  var r2 = typeof t2;
  return (r2 == `number` ? p(n2) && _(t2, n2.length) : r2 == `string` && t2 in n2) ? a(n2[t2], e2) : false;
}
var M = j;
function N(e2) {
  return A(function(t2, n2) {
    var r2 = -1, i2 = n2.length, a2 = i2 > 1 ? n2[i2 - 1] : void 0, o2 = i2 > 2 ? n2[2] : void 0;
    for (a2 = e2.length > 3 && typeof a2 == `function` ? (i2--, a2) : void 0, o2 && M(n2[0], n2[1], o2) && (a2 = i2 < 3 ? void 0 : a2, i2 = 1), t2 = Object(t2); ++r2 < i2; ) {
      var s2 = n2[r2];
      s2 && e2(t2, s2, r2, a2);
    }
    return t2;
  });
}
var P = N, F = `[object Object]`, I = Function.prototype, L = Object.prototype, R = I.toString, z = L.hasOwnProperty, he = R.call(Object);
function ge(e2) {
  if (!r(e2) || n(e2) != F) return false;
  var t2 = d(e2);
  if (t2 === null) return true;
  var i2 = z.call(t2, `constructor`) && t2.constructor;
  return typeof i2 == `function` && i2 instanceof i2 && R.call(i2) == he;
}
var _e = ge;
function ve(e2) {
  return function(t2, n2, r2) {
    for (var i2 = -1, a2 = Object(t2), o2 = r2(t2), s2 = o2.length; s2--; ) {
      var c2 = o2[e2 ? s2 : ++i2];
      if (n2(a2[c2], c2, a2) === false) break;
    }
    return t2;
  };
}
var B = ve, ye = B(), be = ye;
function xe(e2, t2, n2) {
  (n2 !== void 0 && !a(e2[t2], n2) || n2 === void 0 && !(t2 in e2)) && h(e2, t2, n2);
}
var V = xe;
function Se(e2) {
  return r(e2) && p(e2);
}
var Ce = Se;
function we(e2, t2) {
  if (!(t2 === `constructor` && typeof e2[t2] == `function`) && t2 != `__proto__`) return e2[t2];
}
var H = we;
function Te(e2) {
  return u(e2, m(e2));
}
var Ee = Te;
function De(e2, t2, n2, r2, a2, c2, u2) {
  var d2 = H(e2, n2), p2 = H(t2, n2), m2 = u2.get(p2);
  if (m2) {
    V(e2, n2, m2);
    return;
  }
  var h2 = c2 ? c2(d2, p2, n2 + ``, e2, t2, u2) : void 0, g2 = h2 === void 0;
  if (g2) {
    var _2 = o(p2), v2 = !_2 && re(p2), y2 = !_2 && !v2 && ie(p2);
    h2 = p2, _2 || v2 || y2 ? o(d2) ? h2 = d2 : Ce(d2) ? h2 = te(d2) : v2 ? (g2 = false, h2 = l(p2, true)) : y2 ? (g2 = false, h2 = ee(p2, true)) : h2 = [] : _e(p2) || f(p2) ? (h2 = d2, f(d2) ? h2 = Ee(d2) : (!i(d2) || s(d2)) && (h2 = ne(p2))) : g2 = false;
  }
  g2 && (u2.set(p2, h2), a2(h2, p2, r2, c2, u2), u2.delete(p2)), V(e2, n2, h2);
}
var Oe = De;
function U(e2, t2, n2, r2, a2) {
  e2 !== t2 && be(t2, function(o2, s2) {
    if (a2 || (a2 = new c()), i(o2)) Oe(e2, t2, s2, n2, U, r2, a2);
    else {
      var l2 = r2 ? r2(H(e2, s2), o2, s2 + ``, e2, t2, a2) : void 0;
      l2 === void 0 && (l2 = o2), V(e2, s2, l2);
    }
  }, m);
}
var ke = U, Ae = P(function(e2, t2, n2) {
  ke(e2, t2, n2);
}), W = Ae;
const G = () => t(`1234567890abcdefghijklmnopqrstuvwxyz`, 6)();
function K() {
  let e2 = G();
  for (; e2.match(/^\d/); ) e2 = G();
  return `windpress${e2}`;
}
function je(e2) {
  let t2 = [];
  return e2.childNodes.forEach((e3) => {
    let n2 = q(e3);
    n2 && t2.push(n2);
  }), J(t2, 0);
}
function Me(e2) {
  let t2 = e2.tagName.toLowerCase(), n2 = { id: K(), name: `div`, settings: { tag: t2 }, children: [] }, r2 = [], i2 = [`id`, `class`, `href`, `src`];
  if (Object.keys(e2.attributes).forEach((t3) => {
    let a2 = e2.attributes[t3].name;
    i2.includes(a2) ? (a2 === `class` && e2.attributes[t3].value.trim() !== `` && W(n2.settings, { _cssClasses: e2.attributes[t3].value }), a2 === `id` && e2.id.trim() !== `` && W(n2.settings, { _cssId: e2.id }), a2 === `href` && e2.tagName.toLowerCase() === `a` && W(n2.settings, { link: { url: e2.getAttribute(`href`) } })) : r2.push({ id: K(), name: a2, value: e2.attributes[t3].value });
  }), W(n2.settings, { _attributes: r2 }), t2 === `svg`) return n2.name = `svg`, W(n2.settings, { source: `code`, code: e2.outerHTML }), n2.settings._attributes = [], n2;
  if (t2 === `img`) {
    let t3 = e2.getAttribute(`src`);
    return n2.name = `image`, W(n2.settings, { image: { external: true, url: t3 || ``, full: t3 || ``, filename: t3.split(`/`).pop() || `` }, altText: e2.getAttribute(`alt`) || `` }), delete n2.settings.tag, n2;
  }
  if (t2.match(/h[1-6]/) && (n2.name = `heading`, W(n2.settings, { text: e2.innerText, tag: t2 })), t2 === `video` || t2 === `iframe` && (e2.getAttribute(`src`).includes(`youtube.com`) || e2.getAttribute(`src`).includes(`vimeo.com`))) return n2.name = `video`, W(n2.settings, { source: `url`, url: t2 === `video` ? e2.getAttribute(`src`) : e2.getAttribute(`src`).split(`?`)[0] }), delete n2.settings.tag, n2;
  if (t2 === `a`) {
    if (W(n2.settings, { link: { type: `external`, url: e2.getAttribute(`href`) || ``, newTab: e2.getAttribute(`target`) === `_blank`, ariaLabel: e2.getAttribute(`aria-label`) || ``, title: e2.getAttribute(`title`) || ``, rel: e2.getAttribute(`rel`) || `` } }), e2.children.length === 0) return n2.name = `text-basic`, W(n2.settings, { text: e2.innerText }), n2;
    W(n2.settings, { text: e2.innerText });
  }
  return e2.childNodes.forEach((e3) => {
    let t3 = q(e3);
    t3 && n2.children.push(t3);
  }), n2;
}
function q(e2) {
  return e2.nodeType === Node.ELEMENT_NODE ? Me(e2) : e2.nodeType === Node.TEXT_NODE && e2.nodeValue.trim() !== `` ? { id: K(), name: `text-basic`, settings: { tag: `span`, text: e2.nodeValue }, children: [] } : null;
}
function J(e2, t2) {
  let n2 = [];
  return e2.forEach((e3) => {
    e3.parent = t2, e3._children = e3.children.map((e4) => e4.id), n2.push(e3), n2.push(...J(e3.children, e3.id)), e3.children = e3._children, delete e3._children;
  }), n2;
}
async function Ne() {
  if (!navigator.permissions) return v(`Clipboard permissions not supported`, { module: `html2bricks`, type: `error` }), false;
  let e2 = ``, t2 = await navigator.permissions.query({ name: `clipboard-read`, allowWithoutGesture: false });
  if (t2.state === `prompt` && (v(`Requesting clipboard-read permission`, { module: `html2bricks` }), e2 = await navigator.clipboard.readText(), t2.state !== `granted`)) return v(`Clipboard-read permission denied`, { module: `html2bricks`, type: `error` }), false;
  e2 = await navigator.clipboard.readText();
  let n2 = await navigator.permissions.query({ name: `clipboard-write` });
  return n2.state === `prompt` && (v(`Requesting clipboard-write permission`, { module: `html2bricks` }), await navigator.clipboard.writeText(e2), n2.state !== `granted`) ? (v(`Clipboard-write permission denied`, { module: `html2bricks`, type: `error` }), false) : true;
}
async function Y() {
  if (!await Ne()) {
    y.$_showMessage(`[WindPress] Clipboard access not available`);
    return;
  }
  let e2 = (await navigator.clipboard.readText()).trim();
  if (!e2 || e2.charAt(0) !== `<`) {
    v(`Pasted content is not HTML`, { module: `html2bricks`, type: `error` }), y.$_showMessage(`[WindPress] Pasted content is not HTML`);
    return;
  }
  let t2 = new DOMParser().parseFromString(e2, `text/html`).body, n2 = je(t2), r2 = { content: n2, source: `bricksCopiedElements`, sourceUrl: window.bricksData.siteUrl, version: window.bricksData.version, globalClasses: [], globalElements: [] };
  await navigator.clipboard.writeText(JSON.stringify(r2, null)), y.$_pasteElements(), y.$_showMessage(`[WindPress] HTML pasted`), await navigator.clipboard.writeText(e2);
}
document.addEventListener(`keydown`, (e2) => {
  b(`module.html2bricks.copy-paste`, true).value && (e2.target.id === `bricks-toolbar` || e2.target.id === `bricks-panel` || !(e2.ctrlKey || e2.metaKey) || !e2.shiftKey || e2.key.toLowerCase() !== `v` || Y());
});
const X = document.querySelector(`#bricks-builder-context-menu li:nth-child(2)`), Z = document.createElement(`li`);
Z.id = `windpressbricks-html2bricks-context-menu`, Z.classList.add(`sep`), Z.innerHTML = `<span class="label">Paste HTML</span><span class="shortcut">CTRL + SHIFT + V</span>`, Z.addEventListener(`click`, Y);
const Pe = document.querySelector(`#bricks-panel-header>ul.actions>li[data-balloon="Paste (All)"]`), Q = document.createElement(`li`);
Q.dataset.balloon = `Paste HTML`, Q.dataset.balloonPos = `bottom-right`, Q.innerHTML = `
    <span class="bricks-svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-html5" fill="none" stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" /></svg>
    </span>
`, Q.addEventListener(`click`, Y);
const $ = () => {
  X.classList.remove(`sep`), X.insertAdjacentElement(`afterend`, Z), Pe.insertAdjacentElement(`afterend`, Q);
}, Fe = () => {
  X.classList.add(`sep`), Z.remove(), Q.remove();
};
b(`module.html2bricks.copy-paste`, true).value && $(), e(() => b(`module.html2bricks.copy-paste`, true).value, (e2) => {
  e2 ? $() : Fe();
}), v(`Module loaded!`, { module: `html2bricks` });
