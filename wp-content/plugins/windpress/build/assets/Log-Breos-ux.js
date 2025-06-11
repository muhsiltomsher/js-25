import { __toESM as e } from "./chunk-GxRd6SvM.min.js";
import "./dist-DPO5Yrzi.min.js";
import { Fragment as t, createBaseVNode as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createTextVNode as o, createVNode as s, defineComponent as c, nextTick as l, openBlock as u, ref as d, renderList as f, toDisplayString as p, unref as m, watch as h, withCtx as g } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import "./Link-83qDN5tY.min.js";
import { useLogStore as _ } from "./log-yMc5ppo1.js";
import "./core-DXhlFaDq.min.js";
import "./floating-ui.core-PLF1GSJg.min.js";
import { Badge_default as v, Tooltip_default as y } from "./Tooltip-8-iNrK0x.min.js";
import "./tv-CD-q12eC.min.js";
import "./namespaced-bbeQqhxC.min.js";
import { Button_default as b } from "./Button-DeZRGJ9-.min.js";
import { Popover_default as x } from "./Popover-D1eYE7Zu.min.js";
import "./index.browser-D93niy_k.min.js";
import { DashboardNavbar_default as S, DashboardPanel_default as C, DashboardSidebarCollapse_default as w } from "./DashboardSidebarCollapse-BvNf3Bi2.min.js";
import { require_dayjs_min as T } from "./dayjs.min-BBb2IltG.min.js";
var E = e(T());
const D = { class: `whitespace-nowrap logs-container` }, O = { class: `flex flex-col gap-4 sm:gap-6 lg:gap-12 mx-auto` }, k = { key: 0, role: `group`, class: `flex flex-col` }, A = [`title`], j = { class: `mr-4` }, M = { key: 0, class: `text-(--ui-error)` }, N = { key: 1, class: `text-(--ui-warning)` }, P = { key: 2, class: `text-(--ui-info)` }, F = { key: 3, class: `text-(--ui-success)` }, I = { key: 4, class: `` }, L = [`innerHTML`], R = { class: `p-6 max-w-[800px] max-h-[400px] overflow-auto` }, z = { class: `gap-2 flex flex-wrap` }, B = { class: `` }, V = [`innerHTML`];
var H = c({ __name: `Log`, setup(e2) {
  let c2 = _(), T2 = d(null);
  return h(c2.logs, () => {
    if (!T2.value) {
      let e4 = document.querySelector(`.logs-container`);
      if (e4) T2.value = e4.parentElement;
      else return;
    }
    let e3 = T2.value && T2.value.scrollHeight - T2.value.clientHeight <= T2.value.scrollTop + 1;
    l(() => {
      e3 && T2.value && (T2.value.scrollTop = T2.value.scrollHeight - T2.value.clientHeight);
    });
  }), (e3, l2) => {
    let d2 = w, h2 = b, _2 = y, T3 = S, H2 = v, U2 = x, W = C;
    return u(), r(W, { id: `logs`, ui: { root: `min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]`, body: `bg-(--ui-text) text-(--ui-bg) dark:text-(--ui-text) dark:bg-(--ui-bg)` } }, { header: g(() => [s(T3, { title: e3.i18n.__(`Logs`, `windpress`) }, { leading: g(() => [s(d2)]), right: g(() => [s(_2, { text: e3.i18n.__(`Clear logs`, `windpress`) }, { default: g(() => [s(h2, { icon: `lucide:paintbrush`, color: `neutral`, variant: `ghost`, onClick: l2[0] || (l2[0] = (e4) => m(c2).clear()) })]), _: 1 }, 8, [`text`])]), _: 1 }, 8, [`title`])]), body: g(() => [n(`div`, D, [n(`div`, O, [m(c2).logs.length > 0 ? (u(), a(`div`, k, [(u(true), a(t, null, f(m(c2).logs, (e4) => {
      var _a, _b, _c;
      return u(), a(`div`, { key: e4.id, class: `font-mono` }, [n(`span`, { title: e4.id, class: `text-(--ui-bg)/50 dark:text-(--ui-text)/50` }, `[` + p(m(E.default)(e4.timestamp).format(`HH:mm:ss.SSS`)) + `]`, 9, A), n(`span`, j, [e4.type === `error` ? (u(), a(`span`, M, `[ERROR]`)) : e4.type === `warning` ? (u(), a(`span`, N, `[WARNING]`)) : e4.type === `info` ? (u(), a(`span`, P, `[INFO]`)) : e4.type === `success` ? (u(), a(`span`, F, `[SUCCESS]`)) : e4.type === `debug` ? (u(), a(`span`, I, `[DEBUG]`)) : i(``, true)]), ((_a = e4.options) == null ? void 0 : _a.raw) ? (u(), a(t, { key: 0 }, [((_b = e4.options) == null ? void 0 : _b.candidates) && ((_c = e4.options) == null ? void 0 : _c.candidates.length) > 0 ? (u(), r(U2, { key: 0, mode: `hover` }, { content: g(() => {
        var _a2;
        return [n(`div`, R, [n(`div`, z, [(u(true), a(t, null, f((_a2 = e4.options) == null ? void 0 : _a2.candidates, (e5) => (u(), a(`div`, B, [s(H2, { color: `neutral`, variant: `outline` }, { default: g(() => [o(p(e5), 1)]), _: 2 }, 1024)]))), 256))])])];
      }), default: g(() => [n(`span`, { innerHTML: e4.message }, null, 8, L)]), _: 2 }, 1024)) : (u(), a(`span`, { key: 1, innerHTML: e4.message }, null, 8, V))], 64)) : (u(), a(t, { key: 1 }, [o(p(e4.message), 1)], 64))]);
    }), 128))])) : i(``, true)])])]), _: 1 });
  };
} }), U = H;
export {
  U as default
};
