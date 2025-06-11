const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../main-CESX81PY.css","../style-yLGaAr_1.css","../main-DwjM92c4.css"])))=>i.map(i=>d[i]);
import { __vitePreload as e } from "../preload-helper-DApxheAR.min.js";
import { logger as t } from "../logger-B1Q-9Dmh.js";
(async () => {
  t(`Loading...`), (async () => {
    var _a, _b, _c, _d;
    for (; !((_a = document.querySelector(`.brx-body`)) == null ? void 0 : _a.__vue_app__); ) await new Promise((e2) => setTimeout(e2, 100));
    for (; document.getElementById(`bricks-preloader`); ) await new Promise((e2) => setTimeout(e2, 100));
    for (; !((_c = (_b = document.getElementById(`bricks-builder-iframe`)) == null ? void 0 : _b.contentDocument.querySelector(`.brx-body`)) == null ? void 0 : _c.__vue_app__); ) await new Promise((e2) => setTimeout(e2, 100));
    let { brxIframe: n } = await e(async () => {
      let { brxIframe: e2 } = await import("../constant-LtF7WJHB.min.js").then(async (m) => {
        await m.__tla;
        return m;
      });
      return {
        brxIframe: e2
      };
    }, [], import.meta.url);
    t(`Loading modules...`), await e(() => import("../main-D9vHC6aI.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url), window.bricksData.version.startsWith(`1`) ? await e(() => import("../main-1.x-Dl93Qxzo.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url) : await e(() => import("../main-5-uciz83.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url), await e(() => import("../main-D0C-jYVF.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-j73WMYxg.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), Number((_d = n.contentWindow.windpress) == null ? void 0 : _d._tailwindcss_version) === 4 && (await e(() => import("../main-DQyT3vXu.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-DUnlaAa5.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-D1-RLiR9.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([2]), import.meta.url)), t(`Modules loaded!`);
  })();
})();
