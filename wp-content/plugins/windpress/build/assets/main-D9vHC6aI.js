import "./dist-DPO5Yrzi.min.js";
import { createBaseVNode as e, createElementBlock as t, inject as n, openBlock as r, ref as i, unref as a, watch as o, withDirectives as s } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import { createApp as c, vModelCheckbox as l, vShow as u } from "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import "./core-DXhlFaDq.min.js";
import "./isObject-DwiMiGzS.min.js";
import "./_toKey-CxbSDiUe.min.js";
import "./set-kZig-l_I.min.js";
import "./get-pqwrRitR.min.js";
import "./virtualRef-BSHD7wxg.js";
import { logger as d } from "./logger-B1Q-9Dmh.js";
import { __plugin_vue_export_helper_default as f } from "./_plugin-vue_export-helper-Dg8VRhoP.min.js";
import { settingsState as p } from "./constant-B9ERhtGk.js";
import { windpress_default as m } from "./windpress-ChTzcrq2.min.js";
const h = { class: `w:full` }, g = { class: `buttons` }, _ = { "data-control": `checkbox`, type: `checkbox` }, v = { class: `buttons` }, y = { "data-control": `checkbox`, type: `checkbox` }, b = { class: `buttons` }, x = { "data-control": `checkbox`, type: `checkbox` }, S = { class: `buttons` }, C = { "data-control": `checkbox`, type: `checkbox` }, w = { class: `buttons` }, T = { "data-control": `checkbox`, type: `checkbox` }, E = { __name: `App`, setup(c2) {
  let d2 = n(`isOpen`), f2 = n(`mousePosition`), m2 = i(null);
  return o(d2, (e2) => {
    e2 && (m2.value.style.top = `${f2.value.y}px`, m2.value.style.left = `${f2.value.x}px`);
  }), (n2, i2) => s((r(), t(`div`, { id: `windpressbricks-settings-app-container`, ref_key: `containerEl`, ref: m2, class: `flex flex:column` }, [e(`ul`, h, [i2[10] || (i2[10] = e(`li`, { class: `disabled`, style: { color: `var(--bricks-text-dark)` } }, ` Module: Plain Classes `, -1)), e(`li`, null, [i2[5] || (i2[5] = e(`span`, { class: `label` }, [e(`label`, { for: `cb-settings-plain-classes-input-field` }, `Input Field`)], -1)), e(`span`, g, [e(`div`, null, [e(`div`, _, [s(e(`input`, { id: `cb-settings-plain-classes-input-field`, "onUpdate:modelValue": i2[0] || (i2[0] = (e2) => a(p)(`module.plain-classes.input-field`, true).value = e2), type: `checkbox` }, null, 512), [[l, a(p)(`module.plain-classes.input-field`, true).value]])])])])]), e(`li`, null, [i2[6] || (i2[6] = e(`span`, { class: `label` }, [e(`label`, { for: `cb-settings-plain-classes-autocomplete` }, `Autocomplete`)], -1)), e(`span`, v, [e(`div`, null, [e(`div`, y, [s(e(`input`, { id: `cb-settings-plain-classes-autocomplete`, "onUpdate:modelValue": i2[1] || (i2[1] = (e2) => a(p)(`module.plain-classes.autocomplete`, true).value = e2), type: `checkbox` }, null, 512), [[l, a(p)(`module.plain-classes.autocomplete`, true).value]])])])])]), e(`li`, null, [i2[7] || (i2[7] = e(`span`, { class: `label` }, [e(`label`, { for: `cb-settings-plain-classes-hover-preview-classes` }, `Hover Preview`)], -1)), e(`span`, b, [e(`div`, null, [e(`div`, x, [s(e(`input`, { id: `cb-settings-plain-classes-hover-preview-classes`, "onUpdate:modelValue": i2[2] || (i2[2] = (e2) => a(p)(`module.plain-classes.hover-preview-classes`, true).value = e2), type: `checkbox` }, null, 512), [[l, a(p)(`module.plain-classes.hover-preview-classes`, true).value]])])])])]), i2[11] || (i2[11] = e(`li`, { class: `disabled sep-t`, style: { color: `var(--bricks-text-dark)` } }, ` Module: Generate Cache `, -1)), e(`li`, null, [i2[8] || (i2[8] = e(`span`, { class: `label` }, [e(`label`, { for: `cb-settings-generate-cache-on-save` }, `On Save`)], -1)), e(`span`, S, [e(`div`, null, [e(`div`, C, [s(e(`input`, { id: `cb-settings-generate-cache-on-save`, "onUpdate:modelValue": i2[3] || (i2[3] = (e2) => a(p)(`module.generate-cache.on-save`, true).value = e2), type: `checkbox` }, null, 512), [[l, a(p)(`module.generate-cache.on-save`, true).value]])])])])]), i2[12] || (i2[12] = e(`li`, { class: `disabled sep-t`, style: { color: `var(--bricks-text-dark)` } }, ` Module: HTML2Bricks `, -1)), e(`li`, null, [i2[9] || (i2[9] = e(`span`, { class: `label` }, [e(`label`, { for: `cb-settings-html2bricks-copy-paste` }, `Copy-Paste`)], -1)), e(`span`, w, [e(`div`, null, [e(`div`, T, [s(e(`input`, { id: `cb-settings-html2bricks-copy-paste`, "onUpdate:modelValue": i2[4] || (i2[4] = (e2) => a(p)(`module.html2bricks.copy-paste`, true).value = e2), type: `checkbox` }, null, 512), [[l, a(p)(`module.html2bricks.copy-paste`, true).value]])])])])])])], 512)), [[u, a(d2)]]);
} };
var D = f(E, [[`__scopeId`, `data-v-2c14557f`]]);
const O = `#bricks-toolbar ul.group-wrapper.end, #bricks-toolbar ul.group-wrapper.right`, k = document.createRange().createContextualFragment(`
    <li id="windpressbricks-settings-navbar" data-balloon="WindPress \u2014 Bricks settings" data-balloon-pos="bottom">
        <span class="bricks-svg-wrapper">
            ${m}
        </span>
    </li>
`), A = document.querySelector(O);
A.insertBefore(k, A.firstChild);
const j = document.querySelector(`#windpressbricks-settings-navbar`), M = i(false), N = i({ x: null, y: null }), P = document.createElement(`windpressbricks-settings-app`);
P.id = `windpressbricks-settings-app`, P.classList.add(`master-css`), document.querySelector(`div.brx-body.main`).appendChild(P), j.addEventListener(`click`, (e2) => {
  e2.preventDefault(), e2.stopPropagation(), M.value = !M.value, N.value = { x: e2.clientX, y: e2.clientY };
});
function F(e2) {
  e2.target.closest(`#windpressbricks-settings-app`) || (M.value = false);
}
o(M, (e2) => {
  e2 ? document.addEventListener(`click`, F, { once: true }) : document.removeEventListener(`click`, F);
});
const I = c(D);
I.provide(`isOpen`, M), I.provide(`mousePosition`, N), I.mount(`#windpressbricks-settings-app`), d(`Module loaded!`, { module: `settings` });
