import { __vitePreload as e } from "./preload-helper-DApxheAR.min.js";
import "./dist-DPO5Yrzi.min.js";
import { nextTick as t, ref as n, watch as r } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import "./dist-BSmntxBi.min.js";
import "./isObject-DwiMiGzS.min.js";
import "./_toKey-CxbSDiUe.min.js";
import { debounce_default as i } from "./debounce-GglgObUh.min.js";
import { set_default as a } from "./set-kZig-l_I.min.js";
import "./dist-Doa7WVF-.min.js";
import { logger as o } from "./logger-B1Q-9Dmh.js";
import { followCursor as s, tippy_esm_default as c } from "./tippy.esm-C6_mdQA_.min.js";
import { createHighlighterCore as l, createOnigurumaEngine as u } from "./dist-C5nPNfbV.min.js";
import { autosize_esm_default as d, highlight_in_textarea_default as f } from "./highlight-in-textarea-CLqhX7o6.js";
import { tribute_esm_default as p } from "./tribute.esm-DgfIamDT.min.js";
import { bdeIframe as m, bdeIframeCanvas as h, bdeIframeV as g, bdeV as _ } from "./constant-9eJRofwZ.js";
(async () => {
  let v = null;
  (async () => {
    v = await l({
      themes: [
        e(() => import("./dark-plus-D4XJxKHb.min.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url),
        e(() => import("./light-plus-R5ROxfAZ.min.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      ],
      langs: [
        e(() => import("./css-BOx46xv6.min.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      ],
      engine: u(e(() => import("./wasm-DXBPGgMc.min.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), [], import.meta.url))
    });
  })();
  const y = document.createRange().createContextualFragment(`
    <textarea id="windpressbreakdance-plc-input" class="windpressbreakdance-plc-input" rows="2" spellcheck="false"></textarea>
`).querySelector(`#windpressbreakdance-plc-input`), b = document.createElement(`div`);
  b.classList.add(`windpressbreakdance-plc-input-container`), b.appendChild(y);
  const x = document.createRange().createContextualFragment(`
    <div class="windpressbreakdance-plc-action-container">
        <div class="actions">
        </div>
    </div>
`).querySelector(`.windpressbreakdance-plc-action-container`), S = x.querySelector(`.actions`), C = document.createRange().createContextualFragment(`
    <span id="windpressbreakdance-plc-class-sort" class="bricks-svg-wrapper windpressbreakdance-plc-class-sort" data-balloon="Automatic Class Sorting" data-balloon-pos="bottom-right">
        <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="bricks-svg icon icon-tabler icons-tabler-outline icon-tabler-reorder"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M17 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3" /><path d="M16.5 8.5l2.5 2.5l2.5 -2.5" /></svg>    
    </span>
`).querySelector(`#windpressbreakdance-plc-class-sort`);
  S.appendChild(C);
  const w = n(false), T = n(null);
  let E = null;
  d(y);
  let D = [];
  wp.hooks.addAction(`windpressbreakdance-autocomplete-items-refresh`, `windpressbreakdance`, () => {
    D = wp.hooks.applyFilters(`windpressbreakdance-autocomplete-items`, [], y.value);
  }), wp.hooks.doAction(`windpressbreakdance-autocomplete-items-refresh`);
  const O = new p({
    menuContainer: document.querySelector(`#app`),
    containerClass: `windpressbreakdance-tribute-container`,
    autocompleteMode: true,
    menuItemLimit: 50,
    noMatchTemplate: ``,
    values: async function(e2, t2) {
      let n2 = await wp.hooks.applyFilters(`windpressbreakdance-autocomplete-items-query`, D, e2);
      t2(n2);
    },
    lookup: `value`,
    itemClass: `class-item`,
    menuItemTemplate: function(e2) {
      let t2 = ``;
      return e2.original.color !== void 0 && (t2 += `background-color: ${e2.original.color};`), e2.original.fontWeight !== void 0 && (t2 += `font-weight: ${e2.original.fontWeight};`), `
            <span class="class-name" data-tribute-class-name="${e2.original.value}">${e2.string}</span>
            <span class="class-hint" style="${t2}"></span>
        `;
    }
  });
  O.setMenuContainer = function(e2) {
    this.menuContainer = e2;
  };
  const k = O.events.callbacks;
  O.events.callbacks = function() {
    return {
      ...k.call(this),
      up: (e2, t2) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e2.preventDefault(), e2.stopPropagation();
          let t3 = this.tribute.current.filteredItems.length, n2 = this.tribute.menuSelected;
          t3 > n2 && n2 > 0 ? (this.tribute.menuSelected--, this.setActiveLi()) : n2 === 0 && (this.tribute.menuSelected = t3 - 1, this.setActiveLi(), this.tribute.menu.scrollTop = this.tribute.menu.scrollHeight), z();
        }
      },
      down: (e2, t2) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e2.preventDefault(), e2.stopPropagation();
          let t3 = this.tribute.current.filteredItems.length - 1, n2 = this.tribute.menuSelected;
          t3 > n2 ? (this.tribute.menuSelected++, this.setActiveLi()) : t3 === n2 && (this.tribute.menuSelected = 0, this.setActiveLi(), this.tribute.menu.scrollTop = 0), z();
        }
      }
    };
  }, O.attach(y), _.$store.subscribeAction((e2, t2) => {
    e2.type === `ui/activateElement` && (T.value = e2.payload), e2.type === `ui/setLeftSidebarState` && (w.value = e2.payload === `elementproperties`);
  }), r([
    T,
    w
  ], (e2, n2) => {
    e2[0] !== n2[0] && t(() => {
      A(), P();
    }), e2[0] && e2[1] && t(() => {
      let e3 = document.querySelector(`.breakdance-element-properties-panel .vscroll-scroll .vscroll-scroll`);
      e3 && e3.querySelector(`.windpressbreakdance-plc-input`) === null && e3.insertBefore(b, e3.firstChild);
    });
  }), E = new f(y, {
    highlight: [
      {
        highlight: new RegExp("(?<=\\s|^)(?:(?!\\s).)+(?=\\s|$)", "g"),
        className: `word`
      },
      {
        highlight: new RegExp("(?<=\\s)\\s", "g"),
        className: `multispace`,
        blank: true
      }
    ]
  });
  async function A() {
    var _a, _b, _c, _d, _e;
    y.value = ((_e = (_d = (_c = (_b = (_a = _.$store.getters[`ui/activeElement`].data) == null ? void 0 : _a.properties) == null ? void 0 : _b.settings) == null ? void 0 : _c.advanced) == null ? void 0 : _d.classes) == null ? void 0 : _e.join(` `)) || ``;
  }
  async function j() {
    var _a, _b, _c, _d;
    if ((_d = (_c = (_b = (_a = _.$store.getters[`ui/activeElement`].data) == null ? void 0 : _a.properties) == null ? void 0 : _b.settings) == null ? void 0 : _c.advanced) == null ? void 0 : _d.classes) return true;
    let e2 = document.querySelector(`.properties-panel-tab.breakdance-tab.breakdance-tab--id-settings`);
    e2.click();
    let t2 = document.querySelector(`#settings .properties-panel-accordion.conditional-control-display-visible>div`);
    for (; t2 === null; ) t2 = document.querySelector(`#settings .properties-panel-accordion.conditional-control-display-visible>div`), await new Promise((e3) => setTimeout(e3, 100));
    t2.parentElement.classList.contains(`expanded`) || t2.click();
    let n2 = document.querySelector(`#breakdance-class-input-search input[placeholder=".my-cool-class"]`);
    for (; n2 === null; ) n2 = document.querySelector(`#breakdance-class-input-search input[placeholder=".my-cool-class"]`), await new Promise((e3) => setTimeout(e3, 100));
    n2.focus();
    let r2 = `windpressbreakdance`;
    n2.value = r2, n2.dispatchEvent(new Event(`input`, {
      bubbles: true
    })), await new Promise((e3) => setTimeout(e3, 100));
    let i2 = document.querySelector(`#breakdance-class-input-search>button`);
    return i2.click(), true;
  }
  const M = i(N, 50);
  async function N() {
    if (!await j()) {
      o(`Upstream path not found!`, {
        module: `plain-classes`,
        type: `error`
      });
      return;
    }
    y.focus(), a(_.$store.getters[`ui/activeElement`].data, `properties.settings.advanced.classes`, y.value.trim().split(` `).filter((e2) => e2.trim() !== ``) || []);
  }
  y.addEventListener(`input`, function(e2) {
    M();
  });
  function P() {
    t(() => {
      try {
        E.handleInput();
      } catch {
      }
      d.update(y), O.hideMenu();
    });
  }
  const F = new MutationObserver(function(e2) {
    e2.forEach(function(e3) {
      e3.type === `childList` && e3.addedNodes.length > 0 && e3.addedNodes.forEach((e4) => {
        let t2 = e4.querySelector(`.class-name`).dataset.tributeClassName;
        e4.addEventListener(`mouseenter`, (e5) => {
          L(t2);
        }), e4.addEventListener(`mouseleave`, (e5) => {
          R();
        }), e4.addEventListener(`click`, (e5) => {
          R(), L(t2);
        });
      });
    });
  });
  let I = null;
  y.addEventListener(`tribute-active-true`, function(e2) {
    I === null && (I = document.querySelector(`.windpressbreakdance-tribute-container>ul`)), t(() => {
      I && F.observe(I, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [
          `class`
        ]
      });
    });
  });
  function L(e2) {
    let t2 = g.$store.getters[`ui/activeElement`].id, n2 = h.querySelector(`[data-node-id="${t2}"]`);
    n2.classList.add(e2), n2.dataset.tributeClassName = e2;
  }
  function R() {
    B();
  }
  function z() {
    let e2 = O.menu.querySelector(`li.highlight>span.class-name`);
    R(), L(e2.dataset.tributeClassName);
  }
  function B() {
    let e2 = g.$store.getters[`ui/activeElement`].id, t2 = h.querySelector(`[data-node-id="${e2}"]`);
    t2.dataset.tributeClassName && (t2.classList.remove(t2.dataset.tributeClassName), t2.dataset.tributeClassName = ``);
  }
  y.addEventListener(`highlights-updated`, function(e2) {
    H();
  });
  let V = c(document.createElement(`div`), {
    plugins: [
      s
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
  function H() {
    let e2 = document.querySelector(`.hit-container`);
    if (e2 === null) return;
    V.reference = e2;
    async function t2(e3) {
      let t3 = e3.textContent, n2 = await m.contentWindow.windpress.module.classnameToCss.generate(t3);
      if (n2 === null || n2.trim() === ``) return null;
      V.setContent(v.codeToHtml(n2, {
        lang: `css`,
        theme: document.querySelector(`div#app.theme--light`) === null ? `dark-plus` : `light-plus`
      })), V.show();
    }
    let a2 = n(null), o2 = i(function(e3) {
      let t3 = e3.clientX, n2 = e3.clientY, r2 = document.elementsFromPoint(t3, n2), i2 = r2.find((e4) => e4.matches(`mark[class="word"]`));
      a2.value = i2 || null;
    }, 10);
    e2.addEventListener(`mousemove`, o2), e2.addEventListener(`mouseleave`, function(e3) {
      o2.cancel(), a2.value = null;
    }), r(a2, (e3, n2) => {
      e3 && e3 !== n2 ? t2(e3) : V.hide();
    });
  }
  o(`Module loaded!`, {
    module: `plain-classes`
  });
})();
