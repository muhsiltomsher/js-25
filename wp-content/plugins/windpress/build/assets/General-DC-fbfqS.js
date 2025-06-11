import "./dist-DPO5Yrzi.min.js";
import { Fragment as e, computed as t, createBaseVNode as n, createBlock as r, createElementBlock as i, createSlots as a, createTextVNode as o, createVNode as s, defineComponent as c, normalizeClass as l, onBeforeMount as u, openBlock as d, reactive as f, ref as p, toDisplayString as m, unref as h, watch as g, withCtx as _, withDirectives as v } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import { vModelRadio as y } from "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import { Link_default as b, useAppConfig as x } from "./Link-83qDN5tY.min.js";
import { defineStore as S } from "./log-yMc5ppo1.js";
import "./core-DXhlFaDq.min.js";
import "./floating-ui.core-PLF1GSJg.min.js";
import { Badge_default as C, Tooltip_default as w } from "./Tooltip-8-iNrK0x.min.js";
import "./tv-CD-q12eC.min.js";
import "./utils-BDrNFYAK.min.js";
import { FormField_default as T } from "./FormField-COhYl_h4.min.js";
import { Separator_default as E } from "./Separator-Y2feLxFd.min.js";
import { Form_default as D, PageCard_default as O, Switch_default as k } from "./PageCard-DnpRWYQI.min.js";
import { useToast as A } from "./useToast-CCC0wlx6.min.js";
import { Button_default as j } from "./Button-DeZRGJ9-.min.js";
import { useApi as M } from "./api-wSmiQczm.js";
import "./index.browser-D93niy_k.min.js";
import { cloneDeep_default as N, useBusyStore as P, useSettingsStore as F } from "./settings-BBOsnx-8.js";
import "./isObject-DwiMiGzS.min.js";
import "./_toKey-CxbSDiUe.min.js";
import "./_initCloneObject-CAdcLSh1.min.js";
import "./set-kZig-l_I.min.js";
import { get_default as I } from "./get-pqwrRitR.min.js";
import "./virtualRef-BSHD7wxg.js";
import { version$2 as L } from "./package-BFOAElCB.min.js";
import { version as R } from "./package-CeqyRlFS.min.js";
import { Input_default as z } from "./Input-Bs1FY5Zn.min.js";
const B = S(`license`, () => {
  let e2 = P(), n2 = M(), r2 = p({ key: `` }), i2 = t(() => I(r2.value, `is_activated`, false));
  async function a2() {
    return e2.add(`settings.license.doPull`), await n2.request(`/admin/settings/license/index`, { method: `GET` }).then((e3) => {
      r2.value = N(e3.data.license);
    }).catch((e3) => {
    }).finally(() => {
      e2.remove(`settings.license.doPull`);
    });
  }
  async function o2(t2) {
    return e2.add(`settings.license.activate`), n2.request(`/admin/settings/license/activate`, { method: `POST`, data: { license: t2 } }).then((e3) => (r2.value = N(e3.data.license), { message: e3.data.message, success: true })).catch((e3) => {
      throw Error(e3.data ? e3.data.message : e3.message);
    }).finally(() => {
      e2.remove(`settings.license.activate`);
    });
  }
  async function s2() {
    return e2.add(`settings.license.deactivate`), n2.request(`/admin/settings/license/deactivate`, { method: `POST`, data: { license: r2.value } }).then((e3) => (r2.value = N(e3.data.license), { message: e3.data.message, success: true })).catch((e3) => {
      throw Error(e3.response ? e3.response.data.message : e3.message);
    }).finally(() => {
      e2.remove(`settings.license.deactivate`);
    });
  }
  return { license: r2, isActivated: i2, doPull: a2, doActivate: o2, doDeactivate: s2 };
}), V = { class: `flex flex-row gap-4 my-2` }, H = { class: `flex items-center gap-2` }, U = { class: `text-(--ui-text-muted)` }, W = { class: `grid grid-cols-2 gap-3` }, G = { class: `flex items-center justify-center rounded-md p-3 font-semibold flex-1 bg-(--ui-bg-accented) hover:ring-(--ui-text)/50 hover:ring-1 has-checked:bg-[#0073e0] has-checked:text-white` }, K = { class: `flex items-center justify-center rounded-md p-3 font-semibold flex-1 bg-(--ui-bg-accented) hover:ring-(--ui-text)/50 hover:ring-1 has-checked:bg-[#0073e0] has-checked:text-white` };
var q = c({ __name: `General`, setup(t2) {
  let c2 = x(), S2 = A(), M2 = B(), N2 = F(), I2 = P(), q2 = p(false), J2 = f({ key: `` });
  g(() => J2.key, () => {
    q2.value = false;
  });
  function Y() {
    q2.value = false, S2.add({ id: `license.change`, title: M2.license.key && M2.isActivated ? wp.i18n.__(`Deactivating license...`, `windprees`) : wp.i18n.__(`Activating license...`, `windpress`), description: M2.license.key && M2.isActivated ? wp.i18n.__(`Please wait while we deactivate your license key.`, `windpress`) : wp.i18n.__(`Please wait while we activate your license key.`, `windpress`), icon: `lucide:loader-circle`, close: false, duration: 0, color: `neutral`, ui: { icon: `animate-spin` } });
    let e2 = M2.license.key && M2.isActivated ? M2.doDeactivate() : M2.doActivate(J2.key);
    e2.then(() => {
      J2.key = M2.license.key, S2.update(`license.change`, { title: wp.i18n.__(`License updated`, `windpress`), description: M2.isActivated ? wp.i18n.__(`Your license key has been activated.`, `windpress`) : wp.i18n.__(`Your license key has been deactivated.`, `windpress`), icon: `lucide:key-round`, color: `success`, duration: void 0, close: true, ui: { icon: void 0 } });
    }).catch((e3) => {
      S2.update(`license.change`, { title: wp.i18n.__(`License update failed`, `windpress`), description: e3 instanceof Error ? e3.message : wp.i18n.__(`An unknown error occurred`, `windpress`), icon: `lucide:key-round`, color: `error`, close: true, duration: void 0, ui: { icon: void 0 } }), q2.value = wp.i18n.__(`Invalid license key`, `windpress`);
    });
  }
  return u(() => {
    M2.doPull().then(() => {
      J2.key = M2.license.key;
    });
  }), (t3, u2) => {
    let f2 = j, p2 = O, g2 = z, x2 = w, S3 = C, A2 = T, P2 = D, F2 = b, B2 = E, X = k;
    return d(), i(e, null, [t3.window.windpress._via_wp_org ? (d(), r(p2, { key: 0, title: t3.i18n.__(`License`, `windpress`), class: `bg-gradient-to-tl from-(--ui-primary)/10 from-5% to-(--ui-bg)` }, { description: _(() => [o(m(t3.i18n.__(`You are using the WordPress.org edition.`, `windpress`)), 1)]), footer: _(() => [s(f2, { label: t3.i18n.__(`Upgrade to Pro`, `windpress`), color: `primary`, "trailing-icon": h(c2).ui.icons.external, ui: { trailingIcon: `inline-block size-3 align-top`, base: `gap-[normal] items-start` }, to: `https://wind.press/?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${t3.window.windpress._version}#pricing`, target: `_blank` }, null, 8, [`label`, `trailing-icon`, `to`])]), _: 1 }, 8, [`title`])) : (d(), r(p2, { key: 1, title: `License`, description: ``, class: l([h(M2).isActivated ? `from-(--ui-primary)/10` : `from-(--ui-warning)/10`, `bg-gradient-to-tl from-5% to-(--ui-bg)`]) }, { default: _(() => [s(P2, { state: J2, onSubmit: Y }, { default: _(() => [s(A2, { label: t3.i18n.__(`License key`, `windpress`), required: ``, error: q2.value, help: t3.i18n.__(`To access updates when they are available, please provide your license key.`, `windpress`) }, a({ default: _(() => [n(`div`, V, [s(g2, { modelValue: J2.key, "onUpdate:modelValue": u2[0] || (u2[0] = (e2) => J2.key = e2), type: `password`, placeholder: `WIND-12345-67890-PRESS`, class: `w-full`, "data-1p-ignore": `` }, null, 8, [`modelValue`]), s(x2, { "delay-duration": 0, text: h(M2).isActivated ? t3.i18n.__(`Unregister your WindPress setup`, `windpress`) : t3.i18n.__(`Register your WindPress setup`, `windpress`) }, { default: _(() => [s(f2, { type: `submit`, color: `primary`, variant: `subtle`, "leading-icon": h(I2).isBusy && h(I2).tasks.some((e2) => e2.task === `settings.license.activate` || e2.task === `settings.license.deactivate`) ? `lucide:loader-circle` : void 0, disabled: !J2.key || h(I2).isBusy, ui: { leadingIcon: `animate-spin` } }, { default: _(() => [h(M2).isActivated ? (d(), i(e, { key: 0 }, [o(m(h(I2).isBusy && h(I2).tasks.some((e2) => e2.task === `settings.license.deactivate`) ? t3.i18n.__(`Deactivating`, `windpress`) : t3.i18n.__(`Deactivate`, `windpress`)), 1)], 64)) : (d(), i(e, { key: 1 }, [o(m(h(I2).isBusy && h(I2).tasks.some((e2) => e2.task === `settings.license.activate`) ? t3.i18n.__(`Activating`, `windpress`) : t3.i18n.__(`Activate`, `windpress`)), 1)], 64))]), _: 1 }, 8, [`leading-icon`, `disabled`])]), _: 1 }, 8, [`text`])])]), _: 2 }, [h(M2).license.key ? { name: `hint`, fn: _(() => [n(`div`, H, [n(`span`, U, m(t3.i18n.__(`Status`, `windpress`)) + ` :`, 1), s(S3, { color: h(M2).isActivated ? `success` : `error`, variant: `subtle` }, { default: _(() => [o(m(h(M2).isActivated ? t3.i18n.__(`Active`, `windpress`) : t3.i18n.__(`Inactive`, `windpress`)), 1)]), _: 1 }, 8, [`color`])])]), key: `0` } : void 0]), 1032, [`label`, `error`, `help`])]), _: 1 }, 8, [`state`])]), _: 1 }, 8, [`class`])), s(P2, { id: `general`, state: {} }, { default: _(() => [s(p2, { title: t3.i18n.__(`General`, `windpress`), description: t3.i18n.__(`General settings for WindPress.`, `windpress`), variant: `naked`, orientation: `horizontal`, class: `mb-4` }, null, 8, [`title`, `description`]), s(p2, { variant: `subtle` }, { default: _(() => [s(A2, { label: t3.i18n.__(`Tailwind CSS version`, `windpress`), description: t3.i18n.__("You must update the `main.css` file accordingly.", `windpress`), class: `flex max-sm:flex-col justify-between items-start gap-4`, ui: { container: `flex-1` } }, { hint: _(() => [s(F2, { to: `https://github.com/tailwindlabs/tailwindcss/releases`, target: `_blank`, class: `underline` }, { default: _(() => [o(m(t3.i18n.__(`See release notes`, `windpress`)), 1)]), _: 1 })]), default: _(() => [n(`div`, W, [n(`label`, G, [v(n(`input`, { "onUpdate:modelValue": u2[1] || (u2[1] = (e2) => h(N2).virtualOptions(`general.tailwindcss.version`, 4).value = e2), type: `radio`, name: `tailwindcss_version`, value: 3, class: `sr-only` }, null, 512), [[y, h(N2).virtualOptions(`general.tailwindcss.version`, 4).value]]), n(`span`, null, m(h(R)), 1)]), n(`label`, K, [v(n(`input`, { "onUpdate:modelValue": u2[2] || (u2[2] = (e2) => h(N2).virtualOptions(`general.tailwindcss.version`, 4).value = e2), type: `radio`, name: `tailwindcss_version`, value: 4, class: `sr-only` }, null, 512), [[y, h(N2).virtualOptions(`general.tailwindcss.version`, 4).value]]), n(`span`, null, m(h(L)), 1)])])]), _: 1 }, 8, [`label`, `description`]), s(B2), s(A2, { label: t3.i18n.__(`Ubiquitous panel`, `windpress`), description: t3.i18n.__(`Access the WindPress dashboard panel right from the front page and made adjustment as it is on the wp-admin page.`, `windpress`), class: `flex items-center justify-between not-last:pb-4 gap-4` }, { default: _(() => [s(X, { modelValue: h(N2).virtualOptions(`general.ubiquitous-panel.enabled`, false).value, "onUpdate:modelValue": u2[3] || (u2[3] = (e2) => h(N2).virtualOptions(`general.ubiquitous-panel.enabled`, false).value = e2), disabled: `` }, null, 8, [`modelValue`])]), _: 1 }, 8, [`label`, `description`])]), _: 1 })]), _: 1 })], 64);
  };
} }), J = q;
export {
  J as default
};
