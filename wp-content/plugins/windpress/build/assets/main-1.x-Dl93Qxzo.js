import { __vitePreload as e } from "./preload-helper-DApxheAR.min.js";
import "./dist-DPO5Yrzi.min.js";
import { nextTick as t, ref as n, watch as r } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import "./dist-BSmntxBi.min.js";
import "./core-DXhlFaDq.min.js";
import "./isObject-DwiMiGzS.min.js";
import "./_toKey-CxbSDiUe.min.js";
import { debounce_default as i } from "./debounce-GglgObUh.min.js";
import "./set-kZig-l_I.min.js";
import "./get-pqwrRitR.min.js";
import "./virtualRef-BSHD7wxg.js";
import "./dist-Doa7WVF-.min.js";
import { logger as a } from "./logger-B1Q-9Dmh.js";
import { followCursor as o, tippy_esm_default as s } from "./tippy.esm-C6_mdQA_.min.js";
import { createHighlighterCore as c, createOnigurumaEngine as l } from "./dist-C5nPNfbV.min.js";
import { autosize_esm_default as u, highlight_in_textarea_default as d } from "./highlight-in-textarea-CLqhX7o6.js";
import { tribute_esm_default as f } from "./tribute.esm-DgfIamDT.min.js";
import { brxGlobalProp as p, brxIframe as m, brxIframeGlobalProp as h, settingsState as g } from "./constant-B9ERhtGk.js";
(async () => {
  let _ = null;
  (async () => {
    _ = await c({
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
  const v = document.createRange().createContextualFragment(`
    <textarea id="windpressbricks-plc-input" class="windpressbricks-plc-input" rows="2" spellcheck="false"></textarea>
`).querySelector(`#windpressbricks-plc-input`), y = document.createRange().createContextualFragment(`
    <div class="windpressbricks-plc-action-container">
        <div class="actions">
        </div>
    </div>
`).querySelector(`.windpressbricks-plc-action-container`), b = y.querySelector(`.actions`), x = document.createRange().createContextualFragment(`
    <span id="windpressbricks-plc-class-sort" class="bricks-svg-wrapper windpressbricks-plc-class-sort" data-balloon="Automatic Class Sorting" data-balloon-pos="bottom-right">
        <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="bricks-svg icon icon-tabler icons-tabler-outline icon-tabler-reorder"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M17 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3" /><path d="M16.5 8.5l2.5 2.5l2.5 -2.5" /></svg>    
    </span>
`).querySelector(`#windpressbricks-plc-class-sort`), S = document.createRange().createContextualFragment(`
    <span id="windpressbricks-plc-class-down" class="bricks-svg-wrapper windpressbricks-plc-class-down" data-balloon="Move Classes to Plain Classes" data-balloon-pos="bottom-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.5 13h6M2 16l4.5-9l4.5 9m7-9v9m-4-4l4 4l4-4"/></svg>    
    </span>
`).querySelector(`#windpressbricks-plc-class-down`);
  b.appendChild(S), b.appendChild(x);
  const C = n(false), w = n(null);
  let T = null;
  u(v);
  let E = [];
  wp.hooks.addAction(`windpressbricks-autocomplete-items-refresh`, `windpressbricks`, () => {
    E = wp.hooks.applyFilters(`windpressbricks-autocomplete-items`, [], v.value);
  }), wp.hooks.doAction(`windpressbricks-autocomplete-items-refresh`);
  const D = new f({
    containerClass: `windpressbricks-tribute-container`,
    autocompleteMode: true,
    menuItemLimit: 50,
    noMatchTemplate: ``,
    values: async function(e2, t2) {
      if (!g(`module.plain-classes.autocomplete`, true).value) {
        t2([]);
        return;
      }
      let n2 = await wp.hooks.applyFilters(`windpressbricks-autocomplete-items-query`, E, e2);
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
  D.setMenuContainer = function(e2) {
    this.menuContainer = e2;
  };
  const O = D.events.callbacks;
  D.events.callbacks = function() {
    return {
      ...O.call(this),
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
  }, D.attach(v);
  const k = new MutationObserver(function(e2) {
    e2.forEach(function(e3) {
      e3.type === `attributes` ? e3.target.id === `bricks-panel-element` && e3.attributeName === `style` ? e3.target.style.display === `none` ? C.value = false : C.value = true : e3.attributeName === `placeholder` && e3.target.tagName === `INPUT` && e3.target.classList.contains(`placeholder`) && (w.value = p.$_activeElement.value.id) : e3.type === `childList` && e3.addedNodes.length > 0 && (e3.target.id === `bricks-panel-sticky` && e3.addedNodes[0].id === `bricks-panel-element-classes` ? w.value = p.$_activeElement.value.id : e3.target.dataset && e3.target.dataset.controlkey === `_cssClasses` && e3.addedNodes[0].childNodes.length > 0 && document.querySelector(`#_cssClasses`).addEventListener(`input`, function(e4) {
        t(() => {
          v.value = e4.target.value, A();
        });
      }));
    });
  });
  k.observe(document.getElementById(`bricks-panel-element`), {
    subtree: true,
    attributes: true,
    childList: true
  }), r([
    w,
    C
  ], (e2, n2) => {
    e2[0] !== n2[0] && t(() => {
      var _a, _b;
      v.value = ((_b = (_a = p.$_activeElement.value) == null ? void 0 : _a.settings) == null ? void 0 : _b._cssClasses) || ``, A();
    }), e2[0] && e2[1] && t(() => {
      let e3 = document.querySelector(`#bricks-panel-element-classes`);
      g(`module.plain-classes.input-field`, true).value && e3.querySelector(`.windpressbricks-plc-input`) === null && (e3.appendChild(y), e3.appendChild(v), T = new d(v, {
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
      }), u.update(v));
    });
  }), v.addEventListener(`input`, function(e2) {
    p.$_activeElement.value.settings._cssClasses = e2.target.value;
  });
  function A() {
    t(() => {
      try {
        T.handleInput();
      } catch {
      }
      u.update(v), D.hideMenu();
    });
  }
  v.addEventListener(`highlights-updated`, function(e2) {
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
      j.setContent(_.codeToHtml(n2, {
        lang: `css`,
        theme: `dark-plus`
      })), j.show();
    }
    let a2 = n(null), o2 = i(function(e3) {
      if (!g(`module.plain-classes.hover-preview-classes`, true).value) return;
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
        let t2 = e4.querySelector(`.class-name`).dataset.tributeClassName;
        e4.addEventListener(`mouseenter`, (e5) => {
          F(t2);
        }), e4.addEventListener(`mouseleave`, (e5) => {
          I();
        }), e4.addEventListener(`click`, (e5) => {
          I();
        });
      });
    });
  });
  let P = null;
  v.addEventListener(`tribute-active-true`, function(e2) {
    P === null && (P = document.querySelector(`.windpressbricks-tribute-container>ul`)), t(() => {
      P && N.observe(P, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [
          `class`
        ]
      });
    });
  }), x.addEventListener(`click`, async function(e2) {
    v.value = await m.contentWindow.windpress.module.classSorter.sort(v.value), p.$_activeElement.value.settings._cssClasses = v.value, A();
  }), S.addEventListener(`click`, async function(e2) {
    var _a;
    let t2 = p.$_activeElement.value, n2 = v.value.split(` `), r2 = ((_a = t2.settings) == null ? void 0 : _a._cssGlobalClasses) ? [
      ...t2.settings._cssGlobalClasses
    ] : [];
    r2.forEach((e3) => {
      let t3 = p.$_getGlobalClassName(e3);
      n2.includes(t3) || n2.push(t3);
    }), v.value = n2.join(` `), p.$_activeElement.value.settings._cssClasses = v.value, p.$_activeElement.value.settings._cssGlobalClasses = [], A();
  });
  function F(e2) {
    let t2 = h.$_getElementNode(h.$_activeElement.value);
    t2.classList.add(e2);
  }
  function I() {
    let e2 = h.$_activeElement.value, t2 = h.$_getElementNode(e2), n2 = h.$_getElementClasses(e2);
    t2.classList.value = n2.join(` `);
  }
  function L() {
    let e2 = D.menu.querySelector(`li.highlight>span.class-name`), t2 = h.$_activeElement.value, n2 = h.$_getElementNode(t2), r2 = h.$_getElementClasses(t2);
    n2.classList.value = r2.join(` `) + ` ` + e2.dataset.tributeClassName;
  }
  a(`Module loaded!`, {
    module: `plain-classes`
  });
})();
