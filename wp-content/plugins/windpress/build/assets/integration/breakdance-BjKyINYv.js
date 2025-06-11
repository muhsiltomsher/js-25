const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../main-6heHhsPc.css","../main-2VoMadP6.css"])))=>i.map(i=>d[i]);
import { __vitePreload as e } from "../preload-helper-DApxheAR.min.js";
import { logger as t } from "../logger-B1Q-9Dmh.js";
(async () => {
  t(`Loading...`), (async () => {
    var _a, _b, _c;
    for (; !((_a = document.querySelector(`#app`)) == null ? void 0 : _a.__vue__); ) await new Promise((e2) => setTimeout(e2, 100));
    for (; !((_b = document.querySelector(`#app #iframe`)) == null ? void 0 : _b.contentDocument.querySelector(`#breakdance_canvas`)); ) await new Promise((e2) => setTimeout(e2, 100));
    let { bdeIframe: n } = await e(async () => {
      let { bdeIframe: e2 } = await import("../constant-CyMH40sU.min.js").then(async (m) => {
        await m.__tla;
        return m;
      });
      return {
        bdeIframe: e2
      };
    }, [], import.meta.url);
    t(`Loading modules...`), await e(() => import("../main-Dfk4XhXe.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url), await e(() => import("../main-BWg1E76o.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), Number((_c = n.contentWindow.windpress) == null ? void 0 : _c._tailwindcss_version) === 4 && (await e(() => import("../main-Cl9bxnRQ.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-C5bO9ner.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url)), t(`Modules loaded!`);
  })();
})();
