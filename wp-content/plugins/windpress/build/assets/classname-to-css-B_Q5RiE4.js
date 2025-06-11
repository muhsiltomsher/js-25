import { __vitePreload as e } from "./preload-helper-DApxheAR.min.js";
import "./dist-BSmntxBi.min.js";
import "./dist-Doa7WVF-.min.js";
import { logger as t } from "./logger-B1Q-9Dmh.js";
import { followCursor as n, tippy_esm_default as r } from "./tippy.esm-C6_mdQA_.min.js";
import { createHighlighterCore as i, createOnigurumaEngine as a } from "./dist-C5nPNfbV.min.js";
import { etchIframe as o } from "./constant-CjluqGKA.js";
(async () => {
  let s = null;
  (async () => {
    s = await i({
      themes: [
        e(() => import("./dark-plus-D4XJxKHb.min.js").then(async (m) => {
          await m.__tla;
          return m;
        }), [], import.meta.url),
        e(() => import("./light-plus-R5ROxfAZ.min.js").then(async (m) => {
          await m.__tla;
          return m;
        }), [], import.meta.url)
      ],
      langs: [
        e(() => import("./css-BOx46xv6.min.js").then(async (m) => {
          await m.__tla;
          return m;
        }), [], import.meta.url)
      ],
      engine: a(e(() => import("./wasm-DXBPGgMc.min.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url))
    });
  })();
  let c = r(document.createElement(`div`), {
    plugins: [
      n
    ],
    allowHTML: true,
    arrow: false,
    duration: [
      500,
      0
    ],
    followCursor: true,
    trigger: `manual`
  });
  async function l(e2) {
    let t2 = await o().contentWindow.windpress.module.classnameToCss.generate(e2);
    if (t2 === null || t2.trim() === ``) return null;
    c.setContent(s.codeToHtml(t2, {
      lang: `css`,
      theme: `dark-plus`
    })), c.show();
  }
  const u = new MutationObserver(() => {
    let e2 = document.querySelectorAll(`.cm-etch-selector:not([data-windpressInjected])`);
    e2.forEach((e3) => {
      e3.addEventListener(`mouseover`, () => {
        var _a;
        let t2 = (_a = e3.firstChild) == null ? void 0 : _a.textContent;
        t2 && l(t2);
      }), e3.addEventListener(`mouseout`, () => {
        c.hide();
      }), e3.setAttribute(`data-windpressInjected`, `true`);
    });
  });
  u.observe(document, {
    subtree: true,
    childList: true
  }), t(`Intellisense: classname-to-css.ts loaded`);
})();
