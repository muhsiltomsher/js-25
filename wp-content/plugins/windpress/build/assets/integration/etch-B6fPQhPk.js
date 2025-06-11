const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../classname-to-css-bnJC-Ck2.css"])))=>i.map(i=>d[i]);
import { __vitePreload as e } from "../preload-helper-DApxheAR.min.js";
import { logger as t } from "../logger-B1Q-9Dmh.js";
(async () => {
  t(`Loading...`), (async () => {
    var _a;
    for (; !((_a = document.getElementById(`etch-iframe`)) == null ? void 0 : _a.contentDocument.querySelector(`body`)); ) await new Promise((e2) => setTimeout(e2, 100));
    t(`Loading modules...`), await e(() => import("../observer-DDshW0v8.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../classname-to-css-B_Q5RiE4.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url), await e(() => import("../element-attribute-panel-DUDwZm2t.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url);
  })();
})();
