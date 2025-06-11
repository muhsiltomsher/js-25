const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../../main-DdsYRvJh.css","../../main-CCFdKby_.css","../../main-BOrSUVxq.css"])))=>i.map(i=>d[i]);
import { __vitePreload as e } from "../../preload-helper-DApxheAR.min.js";
import { logger as t } from "../../logger-B1Q-9Dmh.js";
(async () => {
  t(`Loading...`), (async () => {
    var _a;
    for (; angular.element(window.top.document.body).scope() === void 0 || angular.element(window.top.document.body).scope().iframeScope === false; ) await new Promise((e2) => setTimeout(e2, 100));
    let { oxyIframe: n } = await e(async () => {
      let { oxyIframe: e2 } = await import("../../constant-DTmusKyr.min.js").then(async (m) => {
        await m.__tla;
        return m;
      });
      return {
        oxyIframe: e2
      };
    }, [], import.meta.url);
    t(`Loading modules...`), await e(() => import("../../main-BoZYB-pv.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url), await e(() => import("../../main-BrcJbSEv.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url), await e(() => import("../../main-D79vWJQx.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), Number((_a = n.contentWindow.windpress) == null ? void 0 : _a._tailwindcss_version) === 4 && (await e(() => import("../../main-DscVo96E.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../../main-B1Mo7Xj_.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([2]), import.meta.url)), t(`Modules loaded!`);
  })();
})();
