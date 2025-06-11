import "./dist-DPO5Yrzi.min.js";
import "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import "./core-DXhlFaDq.min.js";
import "./isObject-DwiMiGzS.min.js";
import "./_toKey-CxbSDiUe.min.js";
import "./set-kZig-l_I.min.js";
import "./get-pqwrRitR.min.js";
import { createVirtualRef as e } from "./virtualRef-BSHD7wxg.js";
import { logger as t } from "./logger-B1Q-9Dmh.js";
import { windpress_default as n } from "./windpress-ChTzcrq2.min.js";
const r = document.createRange().createContextualFragment(`
    <button id="windpressbuilderius-settings-navbar" data-tooltip-content="WindPress \u2014 Builderius settings" data-tooltip-place="bottom" class="uniPanelButton">
        <span class="">
            ${n}
        </span>
    </button>
`), { getVirtualRef: i } = e({}, { persist: `windpress.ui.state` }), a = document.querySelector(`.uniTopPanel__rightCol`);
a.prepend(r);
const o = document.querySelector(`#windpressbuilderius-settings-navbar`);
function s() {
  let e2 = i(`window.minimized`, false).value;
  i(`window.minimized`, false).value = !e2, e2 ? o.classList.add(`active`) : o.classList.remove(`active`);
}
o.addEventListener(`click`, (e2) => {
  s();
}), t(`Module loaded!`, { module: `settings` });
