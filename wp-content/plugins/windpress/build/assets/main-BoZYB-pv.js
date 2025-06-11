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
const r = `#oxygen-topbar .oxygen-toolbar-menus:has(.oxygen-dom-tree-button)`, i = document.createRange().createContextualFragment(`
    <div class="windpressoxygen-settings-button">
        ${n}
    </div>
`), { getVirtualRef: a } = e({}, { persist: `windpress.ui.state` }), o = document.querySelector(r);
o.insertBefore(i, o.firstChild), window.tippy(`.windpressoxygen-settings-button`, { content: `WindPress is detected`, animation: `shift-toward`, placement: `bottom` });
const s = document.querySelector(`.windpressoxygen-settings-button`);
t(`Module loaded!`, { module: `settings` });
