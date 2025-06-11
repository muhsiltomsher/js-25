import "./dist-DPO5Yrzi.min.js";
import { computed as e, createBaseVNode as t, createBlock as n, createVNode as r, defineComponent as i, normalizeClass as a, openBlock as o, renderSlot as s, resolveComponent as c, unref as l, withCtx as u } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import { Primitive as d, useAppConfig as f, useRouter as p } from "./Link-83qDN5tY.min.js";
import "./log-yMc5ppo1.js";
import "./core-DXhlFaDq.min.js";
import "./floating-ui.core-PLF1GSJg.min.js";
import "./Tooltip-8-iNrK0x.min.js";
import { tv$1 as m } from "./tv-CD-q12eC.min.js";
import { NavigationMenu_default as h } from "./NavigationMenu-Dtz94Nj4.min.js";
import "./namespaced-bbeQqhxC.min.js";
import { useToast as g } from "./useToast-CCC0wlx6.min.js";
import "./Button-DeZRGJ9-.min.js";
import "./Popover-D1eYE7Zu.min.js";
import "./api-wSmiQczm.js";
import "./index.browser-D93niy_k.min.js";
import { useBusyStore as _, useSettingsStore as v } from "./settings-BBOsnx-8.js";
import "./isObject-DwiMiGzS.min.js";
import "./_toKey-CxbSDiUe.min.js";
import "./_initCloneObject-CAdcLSh1.min.js";
import "./set-kZig-l_I.min.js";
import "./get-pqwrRitR.min.js";
import "./virtualRef-BSHD7wxg.js";
import { DashboardNavbar_default as y, DashboardPanel_default as b, DashboardSidebarCollapse_default as x } from "./DashboardSidebarCollapse-BvNf3Bi2.min.js";
var S = { slots: { root: `shrink-0 flex items-center justify-between border-b border-default px-4 sm:px-6 gap-1.5 overflow-x-auto min-h-[49px]`, left: `flex items-center gap-1.5`, right: `flex items-center gap-1.5` } };
const C = { __name: `DashboardToolbar`, props: { as: { type: null, required: false }, class: { type: null, required: false }, ui: { type: null, required: false } }, setup(r2) {
  let i2 = r2, c2 = f(), p2 = e(() => {
    var _a;
    return m({ extend: m(S), ...((_a = c2.uiPro) == null ? void 0 : _a.dashboardToolbar) || {} })();
  });
  return (e2, c3) => {
    var _a;
    return o(), n(l(d), { as: r2.as, class: a(p2.value.root({ class: [(_a = i2.ui) == null ? void 0 : _a.root, i2.class] })) }, { default: u(() => [s(e2.$slots, `default`, {}, () => {
      var _a2, _b;
      return [t(`div`, { class: a(p2.value.left({ class: [(_a2 = i2.ui) == null ? void 0 : _a2.left] })) }, [s(e2.$slots, `left`)], 2), t(`div`, { class: a(p2.value.right({ class: [(_b = i2.ui) == null ? void 0 : _b.right] })) }, [s(e2.$slots, `right`)], 2)];
    })]), _: 3 }, 8, [`as`, `class`]);
  };
} };
var w = C;
const T = { class: `flex flex-col gap-4 sm:gap-6 lg:gap-12 w-full lg:max-w-2xl mx-auto` };
var E = i({ __name: `Settings`, setup(e2) {
  let i2 = p(), a2 = g(), s2 = v(), l2 = _();
  async function d2() {
    let e3 = { title: wp.i18n.__(`Saving...`, `windpress`), description: wp.i18n.__(`Please wait while we save your changes.`, `windpress`), duration: 0, icon: `lucide:loader-circle`, close: false, color: `neutral`, ui: { icon: `animate-spin` } };
    return a2.toasts.value.find((e4) => e4.id === `settings.doSave`) ? a2.update(`settings.doSave`, { ...e3 }) : a2.add({ id: `settings.doSave`, ...e3 }), s2.doPush().then(() => {
      a2.update(`settings.doSave`, { title: wp.i18n.__(`Saved`, `windpress`), description: wp.i18n.__(`Your changes have been saved.`, `windpress`), icon: `i-lucide-save`, color: `success`, duration: void 0, close: true, ui: { icon: void 0 } });
    }).catch((e4) => {
      a2.update(`settings.doSave`, { title: wp.i18n.__(`Error`, `windpress`), description: wp.i18n.__(`An error occurred while saving your changes.`, `windpress`), icon: `i-lucide-save`, color: `error`, duration: void 0, close: true, ui: { icon: void 0 } });
    }).finally(() => {
    });
  }
  let f2 = [[{ label: wp.i18n.__(`General`, `windpress`), to: i2.resolve({ name: `settings.general` }), icon: `lucide:settings`, exact: true }, { label: wp.i18n.__(`Performance`, `windpress`), to: i2.resolve({ name: `settings.performance` }), icon: `lucide:rocket`, exact: true }, { label: wp.i18n.__(`Integrations`, `windpress`), to: i2.resolve({ name: `settings.integrations` }), icon: `lucide:package`, exact: true }], [{ label: wp.i18n.__(`Save`, `windpress`), icon: `lucide:save`, color: `primary`, onSelect: d2, disabled: l2.isBusy }]];
  return (e3, i3) => {
    let a3 = x, s3 = y, l3 = h, d3 = w, p2 = c(`RouterView`), m2 = b;
    return o(), n(m2, { id: `settings`, ui: { body: `lg:py-12` } }, { header: u(() => [r(s3, { title: e3.i18n.__(`Settings`, `windpress`) }, { leading: u(() => [r(a3)]), _: 1 }, 8, [`title`]), r(d3, null, { default: u(() => [r(l3, { items: f2, highlight: ``, class: `-mx-1 flex-1` })]), _: 1 })]), body: u(() => [t(`div`, T, [r(p2)])]), _: 1 });
  };
} }), D = E;
export {
  D as default
};
