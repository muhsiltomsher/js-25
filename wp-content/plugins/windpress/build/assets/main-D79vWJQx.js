import { logger as e } from "./logger-B1Q-9Dmh.js";
import { iframeScope as t } from "./constant-DEJBDgok.js";
const n = new BroadcastChannel(`windpress`), r = t.allSaved;
t.allSaved = function() {
  r.apply(this, arguments), n.postMessage({ task: `generate-cache`, source: `windpress/integration`, target: `windpress/compiler`, data: { kind: `incremental`, incremental: { providers: [`oxygen-classic`] } } });
}, e(`Module loaded!`, { module: `generate-cache` });
