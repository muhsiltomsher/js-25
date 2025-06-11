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
  function a(e2, t2 = null) {
    let n2 = typeof t2 == `number` ? t2.toString().length : 8;
    return (`0`.repeat(n2) + e2).slice(-n2);
  }
  (async function() {
    let r2 = i.contentWindow.document.querySelector(`script#windpress\\:vfs[type="text/plain"]`), o2 = e(r2.textContent);
    window.Builderius.API.monaco.languages.registerCompletionItemProvider(`builderius-css`, {
      async provideCompletionItems(e2, r3) {
        let i2 = e2.getWordUntilPosition(r3), s = t(await n({
          volume: o2
        })).map((e3) => ({
          kind: e3.key.includes(`--color`) ? window.Builderius.API.monaco.languages.CompletionItemKind.Color : window.Builderius.API.monaco.languages.CompletionItemKind.Variable,
          label: e3.key,
          insertText: e3.key,
          detail: e3.value,
          range: {
            startLineNumber: r3.lineNumber,
            startColumn: i2.startColumn,
            endLineNumber: r3.lineNumber,
            endColumn: i2.endColumn
          },
          sortText: a(e3.index)
        }));
        return {
          suggestions: s
        };
      }
    });
  })();
  const o = new BroadcastChannel(`windpress`);
  o.addEventListener(`message`, async (e2) => {
    let t2 = e2.data, n2 = `windpress/intellisense`, r2 = `any`, i2 = `windpress.code-editor.saved.done`;
    t2.source === n2 && t2.task === i2 && setTimeout(() => {
    }, 1e3);
  }), r(`Module loaded!`, {
    module: `generate-cache`
  });
});
