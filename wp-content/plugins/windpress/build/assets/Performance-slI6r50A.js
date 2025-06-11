import { __toESM as e } from "./chunk-GxRd6SvM.min.js";
import "./dist-DPO5Yrzi.min.js";
import { createBaseVNode as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createSlots as a, createTextVNode as o, createVNode as s, defineComponent as c, onBeforeMount as l, openBlock as u, ref as d, toDisplayString as f, unref as p, withCtx as m } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import { Icon_default as h, Link_default as g } from "./Link-83qDN5tY.min.js";
import "./log-yMc5ppo1.js";
import "./core-DXhlFaDq.min.js";
import "./floating-ui.core-PLF1GSJg.min.js";
import { Badge_default as _, Tooltip_default as v } from "./Tooltip-8-iNrK0x.min.js";
import "./tv-CD-q12eC.min.js";
import "./utils-BDrNFYAK.min.js";
import { FormField_default as y } from "./FormField-COhYl_h4.min.js";
import { Separator_default as b } from "./Separator-Y2feLxFd.min.js";
import { Form_default as x, PageCard_default as S, Switch_default as C } from "./PageCard-DnpRWYQI.min.js";
import { useToast as w } from "./useToast-CCC0wlx6.min.js";
import { Button_default as T } from "./Button-DeZRGJ9-.min.js";
import { useApi as E } from "./api-wSmiQczm.js";
import "./index.browser-D93niy_k.min.js";
import { useBusyStore as D, useSettingsStore as O } from "./settings-BBOsnx-8.js";
import "./isObject-DwiMiGzS.min.js";
import "./_toKey-CxbSDiUe.min.js";
import "./_initCloneObject-CAdcLSh1.min.js";
import "./set-kZig-l_I.min.js";
import "./get-pqwrRitR.min.js";
import "./virtualRef-BSHD7wxg.js";
import { generateCache as k } from "./useGenerateCache-BIGO5a2r.js";
import { require_dayjs_min as A } from "./dayjs.min-BBb2IltG.min.js";
const j = [`B`, `kB`, `MB`, `GB`, `TB`, `PB`, `EB`, `ZB`, `YB`], M = [`B`, `KiB`, `MiB`, `GiB`, `TiB`, `PiB`, `EiB`, `ZiB`, `YiB`], N = [`b`, `kbit`, `Mbit`, `Gbit`, `Tbit`, `Pbit`, `Ebit`, `Zbit`, `Ybit`], P = [`b`, `kibit`, `Mibit`, `Gibit`, `Tibit`, `Pibit`, `Eibit`, `Zibit`, `Yibit`], F = (e2, t2, n2) => {
  let r2 = e2;
  return typeof t2 == `string` || Array.isArray(t2) ? r2 = e2.toLocaleString(t2, n2) : (t2 === true || n2 !== void 0) && (r2 = e2.toLocaleString(void 0, n2)), r2;
}, I = (e2) => {
  if (typeof e2 == `number`) return Math.log10(e2);
  let t2 = e2.toString(10);
  return t2.length + Math.log10(`0.` + t2.slice(0, 15));
}, L = (e2) => typeof e2 == `number` ? Math.log(e2) : I(e2) * Math.log(10), R = (e2, t2) => {
  if (typeof e2 == `number`) return e2 / t2;
  let n2 = e2 / BigInt(t2), r2 = e2 % BigInt(t2);
  return Number(n2) + Number(r2) / t2;
};
function z(e2, t2) {
  if (typeof e2 != `bigint` && !Number.isFinite(e2)) throw TypeError(`Expected a finite number, got ${typeof e2}: ${e2}`);
  t2 = { bits: false, binary: false, space: true, ...t2 };
  let n2 = t2.bits ? t2.binary ? P : N : t2.binary ? M : j, r2 = t2.space ? ` ` : ``;
  if (t2.signed && (typeof e2 == `number` ? e2 === 0 : e2 === 0n)) return ` 0${r2}${n2[0]}`;
  let i2 = e2 < 0, a2 = i2 ? `-` : t2.signed ? `+` : ``;
  i2 && (e2 = -e2);
  let o2;
  if (t2.minimumFractionDigits !== void 0 && (o2 = { minimumFractionDigits: t2.minimumFractionDigits }), t2.maximumFractionDigits !== void 0 && (o2 = { maximumFractionDigits: t2.maximumFractionDigits, ...o2 }), e2 < 1) {
    let i3 = F(e2, t2.locale, o2);
    return a2 + i3 + r2 + n2[0];
  }
  let s2 = Math.min(Math.floor(t2.binary ? L(e2) / Math.log(1024) : I(e2) / 3), n2.length - 1);
  e2 = R(e2, (t2.binary ? 1024 : 1e3) ** s2), o2 || (e2 = e2.toPrecision(3));
  let c2 = F(Number(e2), t2.locale, o2), l2 = n2[s2];
  return a2 + c2 + r2 + l2;
}
var B = e(A());
const V = { class: `flex gap-2 items-center` }, H = { class: `flex gap-2 items-center` }, U = { class: `font-semibold` }, W = { key: 0, class: `flex gap-1` };
var G = c({ __name: `Performance`, setup(e2) {
  let c2 = E(), A2 = w(), j2 = O(), M2 = D(), N2 = d({ last_generated: null, last_full_build: null, file_url: null, file_size: null });
  function P2() {
    c2.get(`admin/settings/cache/index`).then((e3) => {
      N2.value = e3.data.cache;
    });
  }
  async function F2() {
    k((e3) => {
      P2();
    });
  }
  return l(() => {
    P2();
  }), (e3, c3) => {
    let l2 = S, d2 = C, w2 = y, E2 = b, D2 = h, O2 = g, k2 = _, A3 = T, P3 = v, I2 = x;
    return u(), n(I2, { id: `performance`, state: {} }, { default: m(() => [s(l2, { title: e3.i18n.__(`Performance`, `windpress`), variant: `naked`, orientation: `horizontal`, class: `mb-4` }, null, 8, [`title`]), s(l2, { variant: `subtle` }, { default: m(() => [s(w2, { label: e3.i18n.__(`Use cached CSS`, `windpress`), description: e3.i18n.__(`Serve the cached CSS file when available instead of generating the style dynamically using the Compiler.`, `windpress`), class: `flex items-center justify-between gap-4` }, { default: m(() => [s(d2, { modelValue: p(j2).virtualOptions(`performance.cache.enabled`, false).value, "onUpdate:modelValue": c3[0] || (c3[0] = (e4) => p(j2).virtualOptions(`performance.cache.enabled`, false).value = e4), label: e3.i18n.__(`Enable Cached CSS`, `windpress`), ui: { label: `whitespace-nowrap` }, class: `flex-row-reverse gap-2` }, null, 8, [`modelValue`, `label`])]), _: 1 }, 8, [`label`, `description`]), s(E2), s(w2, { label: e3.i18n.__(`Admin always uses Compiler`, `windpress`), description: e3.i18n.__(`Exclude the Admin from the cached CSS to ensure they always use the Compiler.`, `windpress`), class: `flex items-center justify-between gap-4` }, { default: m(() => [s(d2, { modelValue: p(j2).virtualOptions(`performance.cache.exclude_admin`, false).value, "onUpdate:modelValue": c3[1] || (c3[1] = (e4) => p(j2).virtualOptions(`performance.cache.exclude_admin`, false).value = e4), label: e3.i18n.__(`Exclude Admin`, `windpress`), ui: { label: `whitespace-nowrap` }, class: `flex-row-reverse gap-2` }, null, 8, [`modelValue`, `label`])]), _: 1 }, 8, [`label`, `description`]), s(E2), s(w2, { label: e3.i18n.__(`Cached CSS loading method`, `windpress`), description: e3.i18n.__(`Load cached CSS as an inline instead of an external file.`, `windpress`), class: `flex items-center justify-between gap-4` }, { default: m(() => [s(d2, { modelValue: p(j2).virtualOptions(`performance.cache.inline_load`, false).value, "onUpdate:modelValue": c3[2] || (c3[2] = (e4) => p(j2).virtualOptions(`performance.cache.inline_load`, false).value = e4), label: e3.i18n.__(`Inline Cached CSS`, `windpress`), ui: { label: `whitespace-nowrap` }, class: `flex-row-reverse gap-2` }, null, 8, [`modelValue`, `label`])]), _: 1 }, 8, [`label`, `description`]), s(E2), s(w2, { label: e3.i18n.__(`Generate the cached CSS`, `windpress`), class: `flex items-center justify-between gap-4` }, a({ default: m(() => [s(P3, { "delay-duration": 0, text: e3.i18n.__(`Generate the cached CSS file`, `windpress`) }, { default: m(() => [s(A3, { color: `primary`, variant: `subtle`, onClick: F2, disabled: p(M2).isBusy, loading: p(M2).isBusy && p(M2).hasTask(`settings.performance.cached_css.generate`) }, { default: m(() => [o(f(p(M2).isBusy && p(M2).hasTask(`settings.performance.cached_css.generate`) ? e3.i18n.__(`Generating...`, `windpress`) : e3.i18n.__(`Generate`, `windpress`)), 1)]), _: 1 }, 8, [`disabled`, `loading`])]), _: 1 }, 8, [`text`])]), _: 2 }, [N2.value.last_generated ? { name: `description`, fn: m(() => [t(`div`, V, [t(`div`, H, [t(`span`, U, f(e3.i18n.__(`Last Generated`, `windpress`)) + `: `, 1), N2.value.file_size ? (u(), i(`span`, W, [o(f(p(B.default)(N2.value.last_generated * 1e3).format(`YYYY-MM-DD HH:mm:ss`)) + ` `, 1), s(O2, { to: N2.value.file_url, target: `_blank`, class: `underline` }, { default: m(() => [s(D2, { name: `lucide:external-link` })]), _: 1 }, 8, [`to`])])) : r(``, true)]), N2.value.file_size ? (u(), n(k2, { key: 0, color: `success`, variant: `subtle` }, { default: m(() => [o(f(p(z)(N2.value.file_size, { maximumFractionDigits: 2, space: true })), 1)]), _: 1 })) : r(``, true)])]), key: `0` } : void 0]), 1032, [`label`])]), _: 1 })]), _: 1 });
  };
} }), K = G;
export {
  K as default
};
