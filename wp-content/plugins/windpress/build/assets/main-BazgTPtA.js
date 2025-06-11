import "./preload-helper-DApxheAR.min.js";
import "./source-map-generator-CbHQi4uj.min.js";
import "./dist-DPO5Yrzi.min.js";
import "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import "./dist-BSmntxBi.min.js";
import "./log-yMc5ppo1.js";
import "./chunk-HTB5LLOP-DipP7bJV.min.js";
import "./core-DXhlFaDq.min.js";
import "./api-wSmiQczm.js";
import "./index.browser-D93niy_k.min.js";
import "./base64-C-ng-gTH.min.js";
import "./lib-BxXHRCGk.min.js";
import "./dist-Doa7WVF-.min.js";
import "./path-browserify-DTdOVQJJ.min.js";
import "./pre-process-CIY4vBOu.js";
import { __tla as __tla_0 } from "./cssesc-5IgvSXT7.js";
import { __tla as __tla_1 } from "./lightningcss-wasm-DXap5Yub.min.js";
import "./build-C2EkQrKU.js";
import { decodeVFSContainer as e } from "./vfs-BzllAKLZ.js";
import { getVariableList as t, loadDesignSystem as n } from "./intellisense-5fH2Lpgq.js";
import "./lib-DdIaIIpq.min.js";
import { __tla as __tla_2 } from "./tailwindcss-NwOviTEG.js";
import { logger as r } from "./logger-B1Q-9Dmh.js";
import { uniIframe as i } from "./constant-Bi-FifLF.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })()
]).then(async () => {
  async function a() {
    let r2 = i.contentWindow.document.querySelector(`script#windpress\\:vfs[type="text/plain"]`), a2 = e(r2.textContent), o2 = await t(await n({
      volume: a2
    })), s = ``;
    o2.forEach((e2) => {
      s += `--${e2.key.substring(2)}: ${e2.value};
`;
    }), s = `@layer base { :root { ${s} } }`;
    let c;
    i.contentWindow.document.head.querySelector(`style#windpress-variables`) ? c = i.contentWindow.document.head.querySelector(`style#windpress-variables`) : (c = i.contentWindow.document.createElement(`style`), c.id = `windpress-variables`, i.contentWindow.document.head.appendChild(c)), c && (c.textContent = s);
  }
  const o = new BroadcastChannel(`windpress`);
  o.addEventListener(`message`, async (e2) => {
    let t2 = e2.data, n2 = `windpress/intellisense`, r2 = `any`, i2 = `windpress.code-editor.saved.done`;
    t2.source === n2 && t2.task === i2 && setTimeout(() => {
      a();
    }, 1e3);
  }), a(), r(`Module loaded!`, {
    module: `variables`
  });
});
