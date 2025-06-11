import "./dist-DPO5Yrzi.min.js";
import { Fragment as e, createBlock as t, createElementBlock as n, createVNode as r, defineComponent as i, onBeforeMount as a, openBlock as o, ref as s, renderList as c, unref as l, withCtx as u } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import "./Link-83qDN5tY.min.js";
import "./log-yMc5ppo1.js";
import "./core-DXhlFaDq.min.js";
import "./tv-CD-q12eC.min.js";
import "./utils-BDrNFYAK.min.js";
import { FormField_default as d } from "./FormField-COhYl_h4.min.js";
import { Form_default as f, PageCard_default as p, Switch_default as m } from "./PageCard-DnpRWYQI.min.js";
import { useApi as h } from "./api-wSmiQczm.js";
import "./index.browser-D93niy_k.min.js";
import { useSettingsStore as g } from "./settings-BBOsnx-8.js";
import "./isObject-DwiMiGzS.min.js";
import "./_toKey-CxbSDiUe.min.js";
import "./_initCloneObject-CAdcLSh1.min.js";
import "./set-kZig-l_I.min.js";
import "./get-pqwrRitR.min.js";
import "./virtualRef-BSHD7wxg.js";
var _ = i({ __name: `Integrations`, setup(i2) {
  let _2 = g(), v2 = h(), y = s([]);
  async function b() {
    await v2.get(`admin/settings/cache/providers`).then((e2) => {
      y.value = e2.data.providers.sort((e3, t2) => e3.id.localeCompare(t2.id));
    });
  }
  return a(() => {
    b();
  }), (i3, a2) => {
    let s2 = p, h2 = m, g2 = d, v3 = f;
    return o(), t(v3, { id: `integrations`, state: {} }, { default: u(() => [r(s2, { title: i3.i18n.__(`Integrations`, `windpress`), description: i3.i18n.__(`Enable or disable integrations with other services.`, `windpress`), variant: `naked`, class: `mb-4` }, null, 8, [`title`, `description`]), r(s2, { variant: `subtle`, ui: { container: `divide-y divide-(--ui-border)` } }, { default: u(() => [(o(true), n(e, null, c(y.value, (e2) => (o(), t(g2, { key: e2.id, name: e2.id, label: e2.name, description: e2.description, class: `flex items-center justify-between not-last:pb-4 gap-4` }, { default: u(() => [r(h2, { modelValue: l(_2).virtualOptions(`integration.${e2.id}.enabled`, true).value, "onUpdate:modelValue": (t2) => l(_2).virtualOptions(`integration.${e2.id}.enabled`, true).value = t2, label: `[${e2.id}]`, ui: { label: `whitespace-nowrap text-(--ui-text-muted) font-normal` }, class: `flex-row-reverse gap-2` }, null, 8, [`modelValue`, `onUpdate:modelValue`, `label`])]), _: 2 }, 1032, [`name`, `label`, `description`]))), 128))]), _: 1 })]), _: 1 });
  };
} }), v = _;
export {
  v as default
};
