const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../main-YcKSHWiO.css","../main-CdlZGAVr.css"])))=>i.map(i=>d[i]);
import { __vitePreload as e } from "../preload-helper-DApxheAR.min.js";
import { logger as t } from "../logger-B1Q-9Dmh.js";
(async () => {
  t(`Loading...`), (async () => {
    var _a, _b;
    for (; !((_a = document.getElementById(`builderInner`)) == null ? void 0 : _a.contentDocument.querySelector(`#builderiusBuilder`)); ) await new Promise((e2) => setTimeout(e2, 100));
    let { uniIframe: n } = await e(async () => {
      let { uniIframe: e2 } = await import("../constant-DUVex594.min.js").then(async (m) => {
        await m.__tla;
        return m;
      });
      return {
        uniIframe: e2
      };
    }, [], import.meta.url);
    t(`Loading modules...`), await e(() => import("../main-DU38nwpN.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url), await e(() => import("../main-DY3iQPW7.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), Number((_b = n.contentWindow.windpress) == null ? void 0 : _b._tailwindcss_version) === 4 && (await e(() => import("../main-BazgTPtA.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-BbRLQqMt.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-DIIMOyUw.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url)), t(`Modules loaded!`);
  })();
})();
