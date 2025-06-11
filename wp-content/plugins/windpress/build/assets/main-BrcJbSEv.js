import { __vitePreload as e } from "./preload-helper-DApxheAR.min.js";
import "./dist-DPO5Yrzi.min.js";
import { nextTick as t, ref as n, watch as r } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import "./dist-BSmntxBi.min.js";
import "./isObject-DwiMiGzS.min.js";
import { debounce_default as i } from "./debounce-GglgObUh.min.js";
import "./dist-Doa7WVF-.min.js";
import { logger as a } from "./logger-B1Q-9Dmh.js";
import { followCursor as o, tippy_esm_default as s } from "./tippy.esm-C6_mdQA_.min.js";
import { createHighlighterCore as c, createOnigurumaEngine as l } from "./dist-C5nPNfbV.min.js";
import { autosize_esm_default as u, highlight_in_textarea_default as d } from "./highlight-in-textarea-CLqhX7o6.js";
import { tribute_esm_default as f } from "./tribute.esm-DgfIamDT.min.js";
import { iframeScope as p, oxyIframe as m, oxygenScope as h } from "./constant-DEJBDgok.js";
(async () => {
  let g = null;
  (async () => {
    g = await c({
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
      engine: l(e(() => import("./wasm-DXBPGgMc.min.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), [], import.meta.url))
    });
  })();
  const _ = document.createRange().createContextualFragment(`
    <textarea id="windpressoxygen-plc-input" class="windpressoxygen-plc-input" rows="2" spellcheck="false"></textarea>
`).querySelector(`#windpressoxygen-plc-input`), v = document.createRange().createContextualFragment(`
    <div class="windpressoxygen-plc-action-container">
        <div class="actions">
        </div>
    </div>
`).querySelector(`.windpressoxygen-plc-action-container`), y = v.querySelector(`.actions`), b = document.createRange().createContextualFragment(`
        <span id="windpressoxygen-plc-class-sort" class="oxygen-svg-wrapper windpressoxygen-plc-class-sort">
            <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="oxygen-svg icon icon-tabler icons-tabler-outline icon-tabler-reorder"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M17 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3" /><path d="M16.5 8.5l2.5 2.5l2.5 -2.5" /></svg>    
        </span>
`).querySelector(`#windpressoxygen-plc-class-sort`);
  y.appendChild(b);
  const x = n(false), S = n(null);
  let C = null;
  u(_);
  let w = [];
  wp.hooks.addAction(`windpressoxygen-autocomplete-items-refresh`, `windpressoxygen`, () => {
    w = wp.hooks.applyFilters(`windpressoxygen-autocomplete-items`, [], _.value);
  }), wp.hooks.doAction(`windpressoxygen-autocomplete-items-refresh`);
  const T = new f({
    containerClass: `windpressoxygen-tribute-container`,
    autocompleteMode: true,
    menuItemLimit: 40,
    noMatchTemplate: ``,
    values: async function(e2, t2) {
      let n2 = await wp.hooks.applyFilters(`windpressoxygen-autocomplete-items-query`, w, e2);
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
  T.setMenuContainer = function(e2) {
    this.menuContainer = e2;
  };
  const E = T.events.callbacks;
  T.events.callbacks = function() {
    return {
      ...E.call(this),
      up: (e2, t2) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e2.preventDefault(), e2.stopPropagation();
          let t3 = this.tribute.current.filteredItems.length, n2 = this.tribute.menuSelected;
          t3 > n2 && n2 > 0 ? (this.tribute.menuSelected--, this.setActiveLi()) : n2 === 0 && (this.tribute.menuSelected = t3 - 1, this.setActiveLi(), this.tribute.menu.scrollTop = this.tribute.menu.scrollHeight), L();
        }
      },
      down: (e2, t2) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e2.preventDefault(), e2.stopPropagation();
          let t3 = this.tribute.current.filteredItems.length - 1, n2 = this.tribute.menuSelected;
          t3 > n2 ? (this.tribute.menuSelected++, this.setActiveLi()) : t3 === n2 && (this.tribute.menuSelected = 0, this.setActiveLi(), this.tribute.menu.scrollTop = 0), L();
        }
      }
    };
  }, T.attach(_);
  const D = new MutationObserver(function(e2) {
    x.value = !e2[0].target.classList.contains(`ng-hide`);
  });
  D.observe(document.querySelector(`.oxygen-sidebar-currently-editing`), {
    attributes: true,
    attributeFilter: [
      `class`
    ]
  });
  const O = p.activateComponent;
  p.activateComponent = function(e2, t2, n2) {
    O(e2, t2, n2), S.value = p.component.active.id;
  };
  function k(e2) {
    let t2 = p.component.active.id, n2 = p.component.active.name;
    if (t2 === 0) return;
    let r2 = p.component.options[t2];
    if (r2.model === void 0) return;
    r2.model[`custom-attributes`] === void 0 && h.addCustomAttribute(`plainclass`, e2);
    let i2 = r2.model[`custom-attributes`], a2 = i2.find((e3) => e3.name === `plainclass`);
    a2 ? a2.value = e2 : i2.push({
      name: `plainclass`,
      value: e2
    }), p.component.options[t2].model[`custom-attributes`] = i2, p.setOption(t2, n2, `custom-attributes`), p.applyCustomAttributes(t2);
  }
  r([
    S,
    x
  ], (e2, n2) => {
    e2[0] !== n2[0] && t(() => {
      var _a;
      let e3 = p.component.active.id;
      if (e3 === 0) return;
      let t2 = p.component.options[e3];
      if (t2.model === void 0) return;
      t2.model[`custom-attributes`] === void 0 && h.addCustomAttribute(`plainclass`, ``);
      let n3 = t2.model[`custom-attributes`];
      _.value = ((_a = n3 == null ? void 0 : n3.find((e4) => e4.name === `plainclass`)) == null ? void 0 : _a.value) || ``, A();
    }), e2[0] && e2[1] && t(() => {
      let e3 = document.querySelector(`.oxygen-sidebar-currently-editing`);
      e3.querySelector(`.windpressoxygen-plc-input`) === null && (e3.appendChild(v), window.tippy(`.windpressoxygen-plc-class-sort`, {
        content: `Automatic Class Sorting`,
        animation: `shift-toward`,
        placement: `right`
      }), e3.appendChild(_), C = new d(_, {
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
      }), u.update(_));
    });
  }), _.addEventListener(`input`, function(e2) {
    k(e2.target.value);
  });
  function A() {
    t(() => {
      try {
        C.handleInput();
      } catch {
      }
      u.update(_), T.hideMenu();
    });
  }
  _.addEventListener(`highlights-updated`, function(e2) {
    M();
  });
  let j = s(document.createElement(`div`), {
    plugins: [
      o
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
  function M() {
    let e2 = document.querySelector(`.hit-container`);
    if (e2 === null) return;
    j.reference = e2;
    async function t2(e3) {
      let t3 = e3.textContent, n2 = await m.contentWindow.windpress.module.classnameToCss.generate(t3);
      if (n2 === null || n2.trim() === ``) return null;
      j.setContent(g.codeToHtml(n2, {
        lang: `css`,
        theme: `dark-plus`
      })), j.show();
    }
    let a2 = n(null), o2 = i(function(e3) {
      let t3 = e3.clientX, n2 = e3.clientY, r2 = document.elementsFromPoint(t3, n2), i2 = r2.find((e4) => e4.matches(`mark[class="word"]`));
      a2.value = i2 || null;
    }, 10);
    e2.addEventListener(`mousemove`, o2), e2.addEventListener(`mouseleave`, function(e3) {
      o2.cancel(), a2.value = null;
    }), r(a2, (e3, n2) => {
      e3 && e3 !== n2 ? t2(e3) : j.hide();
    });
  }
  const N = new MutationObserver(function(e2) {
    e2.forEach(function(e3) {
      e3.type === `childList` && e3.addedNodes.length > 0 && e3.addedNodes.forEach((e4) => {
        e4.addEventListener(`mouseenter`, (t2) => {
          let n2 = e4.querySelector(`.class-name`).dataset.tributeClassName;
          F(n2);
        }), e4.addEventListener(`mouseleave`, (e5) => {
          I();
        }), e4.addEventListener(`click`, (e5) => {
          I();
        });
      });
    });
  });
  let P = null;
  _.addEventListener(`tribute-active-true`, function(e2) {
    P === null && (P = document.querySelector(`.windpressoxygen-tribute-container>ul`)), t(() => {
      P && N.observe(P, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [
          `class`
        ]
      });
    });
  }), b.addEventListener(`click`, async function(e2) {
    _.value = await m.contentWindow.windpress.module.classSorter.sort(_.value), k(_.value), A();
  });
  function F(e2) {
    R({
      action: `windpressoxygen-preview-class`,
      do: `add`,
      elementId: S.value,
      className: e2
    });
  }
  function I() {
    R({
      action: `windpressoxygen-preview-class`,
      do: `remove`
    });
  }
  function L() {
    t(() => {
      let e2 = T.menu.querySelector(`li.highlight>span.class-name`);
      F(e2.dataset.tributeClassName);
    });
  }
  function R(e2) {
    m.contentWindow.postMessage(e2, `*`);
  }
  a(`Module loaded!`, {
    module: `plain-classes`
  });
})();
