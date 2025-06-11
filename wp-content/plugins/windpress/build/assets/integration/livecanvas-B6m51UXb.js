import { __vitePreload as e } from "../preload-helper-DApxheAR.min.js";
import { logger as t } from "../logger-B1Q-9Dmh.js";
(async () => {
  t(`Loading...`), (async () => {
    var _a;
    for (; !((_a = document.getElementById(`previewiframe`)) == null ? void 0 : _a.contentDocument.querySelector(`#theme-main`)); ) await new Promise((e2) => setTimeout(e2, 100));
    t(`Loading modules...`), await e(() => import("../main-CgDKc86B.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), t(`Modules loaded!`);
  })();
})();
