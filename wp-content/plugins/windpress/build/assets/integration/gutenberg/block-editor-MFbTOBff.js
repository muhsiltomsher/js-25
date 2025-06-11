import { __vitePreload as e } from "../../preload-helper-DApxheAR.min.js";
import "../../dist-DPO5Yrzi.min.js";
import { nextTick as t, ref as n, watch as r } from "../../runtime-core.esm-bundler-CFIgNHFT.min.js";
import "../../vue.runtime.esm-bundler-WcNVUy75.min.js";
import "../../dist-BSmntxBi.min.js";
import "../../isObject-DwiMiGzS.min.js";
import { debounce_default as i } from "../../debounce-GglgObUh.min.js";
import "../../dist-Doa7WVF-.min.js";
import { followCursor as a, tippy_esm_default as o } from "../../tippy.esm-C6_mdQA_.min.js";
import { createHighlighterCore as s, createOnigurumaEngine as c } from "../../dist-C5nPNfbV.min.js";
import { autosize_esm_default as l, highlight_in_textarea_default as u } from "../../highlight-in-textarea-CLqhX7o6.js";
import { tribute_esm_default as d } from "../../tribute.esm-DgfIamDT.min.js";
(async () => {
  const f = (e2) => React.createElement(`svg`, {
    id: `Capa_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    xmlnsXlink: `http://www.w3.org/1999/xlink`,
    x: `0px`,
    y: `0px`,
    viewBox: `0 0 512 512`,
    style: {
      enableBackground: `new 0 0 512 512`
    },
    xmlSpace: `preserve`,
    ...e2
  }, React.createElement(`g`, null, React.createElement(`path`, {
    fill: `currentColor`,
    d: `M176,384H16c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h160c8.832,0,16,7.2,16,16s-7.168,16-16,16 c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c26.464,0,48-21.536,48-48S202.464,384,176,384z`
  })), React.createElement(`g`, null, React.createElement(`path`, {
    d: `M240,256c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c8.832,0,16,7.2,16,16s-7.168,16-16,16H16 c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h224c26.464,0,48-21.536,48-48S266.464,256,240,256z`
  })), React.createElement(`g`, null, React.createElement(`path`, {
    d: `M288,32C164.288,32,64,132.288,64,256c0,10.88,1.056,21.536,2.56,32h128.192c-1.792-4.992-2.752-10.4-2.752-16 c0-26.464,21.536-48,48-48c44.096,0,80,35.904,80,80c0,44.128-35.904,80-80,80h-0.416C249.76,397.408,256,413.92,256,432 c0,16.032-4.864,30.944-13.024,43.456c14.56,2.976,29.6,4.544,45.024,4.544c123.712,0,224-100.288,224-224S411.712,32,288,32z`
  })));
  var p = f;
  let m = null;
  const h = (e2) => React.createElement(p, {
    ...e2,
    width: 20,
    height: 20,
    "aria-hidden": `true`,
    focusable: `false`
  });
  (async () => {
    m = await s({
      themes: [
        e(() => import("../../dark-plus-D4XJxKHb.min.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url),
        e(() => import("../../light-plus-R5ROxfAZ.min.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      ],
      langs: [
        e(() => import("../../css-BOx46xv6.min.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      ],
      engine: c(e(() => import("../../wasm-DXBPGgMc.min.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), [], import.meta.url))
    });
  })();
  const g = n(null);
  let _ = null, v = [];
  wp.hooks.addAction(`windpressgutenberg-autocomplete-items-refresh`, `windpressgutenberg`, () => {
    v = wp.hooks.applyFilters(`windpressgutenberg-autocomplete-items`, [], ``);
  }), wp.hooks.doAction(`windpressgutenberg-autocomplete-items-refresh`);
  const y = new d({
    containerClass: `windpressgutenberg-tribute-container`,
    autocompleteMode: true,
    menuItemLimit: 50,
    noMatchTemplate: ``,
    values: async function(e2, t2) {
      let n2 = await wp.hooks.applyFilters(`windpressgutenberg-autocomplete-items-query`, v, e2);
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
  y.setMenuContainer = function(e2) {
    this.menuContainer = e2;
  };
  const b = y.events.callbacks;
  y.events.callbacks = function() {
    return {
      ...b.call(this),
      up: (e2, t2) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e2.preventDefault(), e2.stopPropagation();
          let t3 = this.tribute.current.filteredItems.length, n2 = this.tribute.menuSelected;
          t3 > n2 && n2 > 0 ? (this.tribute.menuSelected--, this.setActiveLi()) : n2 === 0 && (this.tribute.menuSelected = t3 - 1, this.setActiveLi(), this.tribute.menu.scrollTop = this.tribute.menu.scrollHeight), E();
        }
      },
      down: (e2, t2) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e2.preventDefault(), e2.stopPropagation();
          let t3 = this.tribute.current.filteredItems.length - 1, n2 = this.tribute.menuSelected;
          t3 > n2 ? (this.tribute.menuSelected++, this.setActiveLi()) : t3 === n2 && (this.tribute.menuSelected = 0, this.setActiveLi(), this.tribute.menu.scrollTop = 0), E();
        }
      }
    };
  };
  let x = o(document.createElement(`div`), {
    plugins: [
      a
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
  function S() {
    let e2 = document.querySelector(`.hit-container`);
    if (e2 === null) return;
    x.reference = e2;
    async function t2(e3) {
      let t3 = e3.textContent, n2 = await window.windpress.module.classnameToCss.generate(t3);
      if (n2 === null || n2.trim() === ``) return null;
      x.setContent(m.codeToHtml(n2, {
        lang: `css`,
        theme: `dark-plus`
      })), x.show();
    }
    let a2 = n(null), o2 = i(function(e3) {
      let t3 = e3.clientX, n2 = e3.clientY, r2 = document.elementsFromPoint(t3, n2), i2 = r2.find((e4) => e4.matches(`mark[class="word"]`));
      a2.value = i2 || null;
    }, 10);
    e2.addEventListener(`mousemove`, o2), e2.addEventListener(`mouseleave`, function(e3) {
      o2.cancel(), a2.value = null;
    }), r(a2, (e3, n2) => {
      e3 && e3 !== n2 ? t2(e3) : x.hide();
    });
  }
  const C = n(null), w = n(null), T = n(null);
  function E() {
    let e2 = y.menu.querySelector(`li.highlight>span.class-name`);
    T.value && A(T.value), T.value = e2.dataset.tributeClassName, k(e2.dataset.tributeClassName);
  }
  let D = null;
  const O = new MutationObserver(function(e2) {
    e2.forEach(function(e3) {
      e3.type === `childList` && e3.addedNodes.length > 0 && e3.addedNodes.forEach((e4) => {
        let t2 = e4.querySelector(`.class-name`).dataset.tributeClassName;
        e4.addEventListener(`mouseenter`, (e5) => {
          k(t2);
        }), e4.addEventListener(`mouseleave`, (e5) => {
          A(t2);
        }), e4.addEventListener(`click`, (e5) => {
        }, {
          capture: true
        });
      });
    });
  });
  function k(e2) {
    let t2 = document.querySelector(`iframe[name="editor-canvas"]`), n2 = t2.contentWindow || t2, r2 = t2.contentDocument || n2.document, i2 = r2.getElementById(`block-${C.value}`);
    i2 && i2.classList.add(e2);
  }
  function A(e2) {
    let t2 = document.querySelector(`iframe[name="editor-canvas"]`), n2 = t2.contentWindow || t2, r2 = t2.contentDocument || n2.document, i2 = r2.getElementById(`block-${C.value}`);
    i2 && w.value && !w.value.includes(e2) && i2.classList.remove(e2);
  }
  r(g, (e2, n2) => {
    e2 && (l(g.value), y.attach(g.value), setTimeout(() => {
      _ = new u(g.value, {
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
      }), S(), g.value.addEventListener(`highlights-updated`, function(e3) {
        S();
      }), g.value.addEventListener(`tribute-active-true`, function(e3) {
        D === null && (D = document.querySelector(`.windpressgutenberg-tribute-container>ul`)), t(() => {
          D && O.observe(D, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: [
              `class`
            ]
          });
        });
      }), g.value.addEventListener(`tribute-active-false`, function(e3) {
        T.value && A(T.value);
      }), t(() => {
        j();
      });
    }, 10));
  });
  function j() {
    t(() => {
      try {
        _.handleInput();
      } catch {
      }
      l.update(g.value), y.hideMenu();
    });
  }
  function M(e2) {
    return (t2) => {
      let { name: n2, clientId: r2, attributes: i2, setAttributes: a2 } = t2;
      React.useEffect(() => {
        C.value = r2, w.value = i2.className;
      });
      function o2(e3) {
        a2({
          className: e3
        }), w.value = e3;
      }
      async function s2() {
        let e3 = await windpress.module.classSorter.sort(i2.className);
        a2({
          className: e3
        }), w.value = e3, j();
      }
      return React.createElement(React.Fragment, null, React.createElement(e2, t2), React.createElement(wp.blockEditor.InspectorControls, null, React.createElement(wp.components.PanelBody, {
        title: wp.i18n.__(`WindPress`, `windpress`),
        icon: h,
        initialOpen: true
      }, React.createElement(wp.components.PanelRow, {
        className: `windpressgutenberg-actions`
      }, React.createElement(wp.components.ButtonGroup, null, React.createElement(wp.components.Button, {
        showTooltip: true,
        label: wp.i18n.__(`Automatic Class Sorting`, `windpress`),
        onClick: s2
      }, React.createElement(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        width: `24`,
        height: `24`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        "stroke-width": `2`,
        "stroke-linecap": `round`,
        "stroke-linejoin": `round`,
        class: `tabler-icon tabler-icon-reorder icon icon-tabler icons-tabler-outline icon-tabler-reorder`
      }, React.createElement(`path`, {
        d: `M3 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z`
      }), React.createElement(`path`, {
        d: `M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z`
      }), React.createElement(`path`, {
        d: `M17 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z`
      }), React.createElement(`path`, {
        d: `M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3`
      }), React.createElement(`path`, {
        d: `M16.5 8.5l2.5 2.5l2.5 -2.5`
      }))))), React.createElement(wp.components.TextareaControl, {
        value: i2.className,
        onChange: (e3) => o2(e3),
        onInput: (e3) => o2(e3.target.value),
        ref: (e3) => g.value = e3
      }))));
    };
  }
  wp.hooks.addFilter(`editor.BlockEdit`, `windpress/add-class-inspector-controls`, M);
})();
