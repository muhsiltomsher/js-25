import "./dist-DPO5Yrzi.min.js";
import "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import "./core-DXhlFaDq.min.js";
import "./isObject-DwiMiGzS.min.js";
import "./_toKey-CxbSDiUe.min.js";
import "./set-kZig-l_I.min.js";
import "./get-pqwrRitR.min.js";
import "./virtualRef-BSHD7wxg.js";
import { logger as e } from "./logger-B1Q-9Dmh.js";
import { settingsState as t } from "./constant-B9ERhtGk.js";
const n = new BroadcastChannel(`windpress`);
(function() {
  let e2 = window.XMLHttpRequest;
  function r() {
    let r2 = new e2();
    if (!t(`module.generate-cache.on-save`, true).value) return r2;
    let i = r2.open;
    return r2.open = function(e3, t2) {
      if (e3 === `POST` && t2.includes(`admin-ajax.php`)) {
        let e4 = r2.onreadystatechange;
        r2.onreadystatechange = function() {
          if (r2.readyState === 4 && r2.status === 200) {
            let e5 = JSON.parse(r2.responseText);
            e5.data && e5.data.action && e5.data.action === `bricks_save_post` && n.postMessage({ task: `generate-cache`, source: `windpress/integration`, target: `windpress/compiler`, data: { kind: `incremental`, incremental: { providers: [`bricks`] } } });
          }
          e4 && e4.apply(this, arguments);
        };
      }
      i.apply(this, arguments);
    }, r2;
  }
  window.XMLHttpRequest = r;
})(), e(`Module loaded!`, { module: `generate-cache` });
