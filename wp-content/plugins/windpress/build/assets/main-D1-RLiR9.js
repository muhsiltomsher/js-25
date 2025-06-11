import "./preload-helper-DApxheAR.min.js";
import "./source-map-generator-CbHQi4uj.min.js";
import "./dist-DPO5Yrzi.min.js";
import { Fragment as e, Suspense as t, createBaseVNode as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createTextVNode as o, createVNode as s, inject as c, nextTick as l, normalizeClass as u, normalizeStyle as d, onMounted as f, openBlock as p, ref as m, renderList as h, renderSlot as g, resolveComponent as _, resolveDirective as v, toDisplayString as y, unref as b, watch as x, withCtx as S, withDirectives as C } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import { Transition as ee, createApp as te, vShow as ne } from "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import "./dist-BSmntxBi.min.js";
import "./log-yMc5ppo1.js";
import "./chunk-HTB5LLOP-DipP7bJV.min.js";
import { useStorage as w } from "./core-DXhlFaDq.min.js";
import "./floating-ui.core-PLF1GSJg.min.js";
import "./api-wSmiQczm.js";
import "./index.browser-D93niy_k.min.js";
import "./isObject-DwiMiGzS.min.js";
import "./_toKey-CxbSDiUe.min.js";
import { set_default as T } from "./set-kZig-l_I.min.js";
import "./get-pqwrRitR.min.js";
import "./virtualRef-BSHD7wxg.js";
import "./base64-C-ng-gTH.min.js";
import "./lib-BxXHRCGk.min.js";
import "./dist-Doa7WVF-.min.js";
import "./path-browserify-DTdOVQJJ.min.js";
import "./pre-process-CIY4vBOu.js";
import { __tla as __tla_0 } from "./cssesc-5IgvSXT7.js";
import { __tla as __tla_1 } from "./lightningcss-wasm-DXap5Yub.min.js";
import "./build-C2EkQrKU.js";
import { decodeVFSContainer as re } from "./vfs-BzllAKLZ.js";
import { getVariableList as ie, loadDesignSystem as ae } from "./intellisense-5fH2Lpgq.js";
import "./lib-DdIaIIpq.min.js";
import { __tla as __tla_2 } from "./tailwindcss-NwOviTEG.js";
import { logger as E } from "./logger-B1Q-9Dmh.js";
import { Gt as oe, R as se, chevron_right_default as ce, windpress_default$1 as le, xmark_default as ue } from "./chevron-right-SznEEHnP.min.js";
import { __plugin_vue_export_helper_default as D } from "./_plugin-vue_export-helper-Dg8VRhoP.min.js";
import { brx as O, brxGlobalProp as k, brxIframe as de } from "./constant-B9ERhtGk.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })()
]).then(async () => {
  const fe = {
    id: `windpressbricks-variable-app-header`,
    class: `header-container`
  }, A = {
    class: `header-content`
  }, j = {
    class: `header-logo`
  }, M = {
    class: `header-title`
  }, N = {
    __name: `PanelHeader`,
    setup(e2) {
      let t2 = c(`variableApp`), r2 = c(`isOpen`);
      function i2() {
        let e3 = t2.querySelector(`#windpressbricks-variable-app-header`), n2 = m(false), r3 = 0, i3 = 0;
        x(n2, (t3) => {
          t3 ? (document.body.style.userSelect = `none`, O.style.pointerEvents = `none`, e3.style.cursor = `grabbing`) : (document.body.style.removeProperty(`user-select`), O.style.removeProperty(`pointer-events`), e3.style.cursor = `grab`);
        });
        let a2 = (t3) => {
          n2.value = true;
          let a3 = e3.getBoundingClientRect();
          r3 = t3.clientX - a3.left, i3 = t3.clientY - a3.top;
        };
        e3.removeEventListener(`mousedown`, a2), e3.addEventListener(`mousedown`, a2);
        let o2 = (a3) => {
          if (!n2.value) return;
          let o3 = e3.getBoundingClientRect(), s3 = a3.clientX, c2 = a3.clientY, l2 = s3 - r3, u2 = c2 - i3, d2 = l2 < 0 ? 0 : l2 > window.innerWidth - o3.width ? window.innerWidth - o3.width : l2, f2 = u2 < 0 ? 0 : u2 > window.innerHeight - o3.height ? window.innerHeight - o3.height : u2;
          t2.style.left = `${d2}px`, t2.style.top = `${f2}px`;
        };
        document.removeEventListener(`mousemove`, o2), document.addEventListener(`mousemove`, o2);
        let s2 = (e4) => {
          n2.value = false;
        };
        document.removeEventListener(`mouseup`, s2), document.addEventListener(`mouseup`, s2);
      }
      return f(() => {
        i2();
      }), (e3, t3) => {
        let i3 = _(`inline-svg`), c2 = ue, l2 = v(`tooltip`);
        return p(), a(`div`, fe, [
          n(`div`, A, [
            n(`div`, j, [
              s(i3, {
                src: b(le),
                class: `inline-svg`
              }, null, 8, [
                `src`
              ])
            ]),
            C((p(), a(`div`, M, t3[1] || (t3[1] = [
              o(` WindPress `)
            ]))), [
              [
                l2,
                {
                  placement: `top`,
                  content: `v${e3.windpressbricks._version}`
                }
              ]
            ]),
            C((p(), a(`button`, {
              class: `header-exit`,
              onClick: t3[0] || (t3[0] = (e4) => r2.value = !b(r2))
            }, [
              s(c2, {
                class: `iconify`
              })
            ])), [
              [
                l2,
                {
                  placement: `top`,
                  content: `Close`
                }
              ]
            ])
          ])
        ]);
      };
    }
  };
  var P = D(N, [
    [
      `__scopeId`,
      `data-v-97f7f622`
    ]
  ]);
  const F = {
    class: `header-slot`
  }, I = {
    key: 0,
    class: `expansion-panel__body`
  }, L = {
    __name: `ExpansionPanel`,
    props: {
      namespace: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    setup(e2, { expose: t2 }) {
      let r2 = e2, o2 = m(null), c2 = w(`windpressbricks-variable-app.ui.expansion-panels.${r2.namespace}`, {
        [`${r2.name}`]: false
      }, void 0, {
        mergeDefaults: true
      });
      function l2(e3) {
        c2.value[r2.name] = e3 === null ? !c2.value[r2.name] : e3;
      }
      function f2() {
        o2.value.scrollIntoView();
      }
      return t2({
        togglePanel: l2,
        scrollIntoView: f2
      }), (t3, r3) => {
        let l3 = ce;
        return p(), a(`div`, {
          ref_key: `sectionRef`,
          ref: o2,
          class: `expansion-panel`
        }, [
          n(`div`, {
            class: u([
              {},
              `expansion-panel__header`
            ]),
            onClick: r3[0] || (r3[0] = (t4) => b(c2)[e2.name] = !b(c2)[e2.name])
          }, [
            n(`div`, F, [
              g(t3.$slots, `header`, {}, void 0, true)
            ]),
            n(`div`, null, [
              s(l3, {
                style: d({
                  transform: b(c2)[e2.name] ? `rotate(-90deg)` : `rotate(0deg)`
                }),
                class: `iconify`
              }, null, 8, [
                `style`
              ])
            ])
          ]),
          s(ee, null, {
            default: S(() => [
              b(c2)[e2.name] ? (p(), a(`div`, I, [
                g(t3.$slots, `default`, {}, void 0, true)
              ])) : i(``, true)
            ]),
            _: 3
          })
        ], 512);
      };
    }
  };
  var R = D(L, [
    [
      `__scopeId`,
      `data-v-48d9357f`
    ]
  ]);
  const z = {
    class: `{m:10;pb:15}>div`
  }, B = {
    class: `variable-section-title font:14 my:10`
  }, V = {
    class: `variable-section-items flex flex:row gap:8 flex-wrap:wrap`
  }, pe = [
    `onClick`,
    `onMouseenter`
  ], me = {
    class: `font:14`
  }, he = 1e3, ge = {
    __name: `CommonVariableItems`,
    props: {
      variableItems: {
        type: Object,
        required: true
      }
    },
    setup(t2) {
      let r2 = t2, o2 = c(`focusedInput`), s2 = c(`recentVariableSelectionTimestamp`), l2 = c(`tempInputValue`);
      function u2(e2, t3) {
        let n2 = performance.now() - s2.value, r3 = n2 < he;
        r3 || o2.value && (o2.value.value = `var(${t3})`, o2.value.dispatchEvent(new Event(`input`)), o2.value.focus());
      }
      function d2(e2) {
        !o2.value || l2.value === null || (o2.value.value = l2.value, o2.value.dispatchEvent(new Event(`input`)), o2.value.focus());
      }
      function f2(e2, t3) {
        o2.value && (o2.value.value = `var(${t3})`, o2.value.dispatchEvent(new Event(`input`)), o2.value.focus(), l2.value = `var(${t3})`, s2.value = performance.now());
      }
      return (r3, o3) => {
        let s3 = v(`tooltip`);
        return p(), a(`div`, z, [
          (p(true), a(e, null, h(t2.variableItems, (t3, r4) => (p(), a(`div`, {
            key: r4,
            class: `var-item`
          }, [
            n(`div`, B, y(r4.replace(`_`, `-`)), 1),
            n(`div`, V, [
              t3.length > 0 ? (p(true), a(e, {
                key: 0
              }, h(t3, (e2, t4) => C((p(), a(`button`, {
                key: t4,
                class: `px:12 py:8 r:$(builder-border-radius) fg:$(builder-color) bg:$(builder-bg-2) bg:$(builder-bg-3):hover b:0 flex-grow:1 flex-shrink:1 flex-basis:30% text:center {opacity:.5;font:semibold}>span opacity:100:hover>span`,
                onClick: (t5) => f2(t5, e2.key),
                onMouseenter: (t5) => u2(t5, e2.key),
                onMouseleave: d2
              }, [
                n(`span`, me, y(e2.label), 1)
              ], 40, pe)), [
                [
                  s3,
                  {
                    placement: `top`,
                    content: `var(${e2.key}, ${e2.value})`
                  }
                ]
              ])), 128)) : i(``, true)
            ])
          ]))), 128))
        ]);
      };
    }
  };
  var H = D(ge, [
    [
      `__scopeId`,
      `data-v-ecbe9380`
    ]
  ]);
  function U() {
    var _a;
    if (k.$_state.activePanel !== `element`) return null;
    let e2 = (_a = k.$_state) == null ? void 0 : _a.activeElement.id, t2 = k.$_getIframeDoc();
    return t2 == null ? void 0 : t2.getElementById(`brxe-${e2}`);
  }
  function _e({ selector: e2, callback: t2, options: n2 }) {
    let r2 = new MutationObserver(t2), i2 = document.querySelector(e2);
    if (!i2) {
      E(`Target not found for selector: ${e2}`, {
        module: `variable-picker`,
        type: `error`
      });
      return;
    }
    let a2 = {
      childList: true,
      subtree: true
    };
    r2.observe(i2, Object.assign(Object.assign({}, a2), n2));
  }
  const ve = {
    class: `{m:10;pb:15}>div`
  }, ye = {
    class: `variable-section-title`
  }, be = {
    key: 0,
    class: `variable-section-items default-color`
  }, xe = [
    `onClick`,
    `onMouseenter`
  ], Se = [
    `onClick`,
    `onMouseenter`
  ], Ce = 1e3, we = {
    __name: `ColorVariableItems`,
    props: {
      variableItems: {
        type: Object,
        required: true
      }
    },
    setup(t2) {
      let r2 = t2, o2 = c(`focusedInput`), s2 = c(`recentColorPickerTarget`), l2 = c(`recentVariableSelectionTimestamp`), u2 = c(`tempInputValue`);
      function f2(e2, t3) {
        var _a;
        let n2 = performance.now() - l2.value, r3 = n2 < Ce;
        if (!r3) {
          if (!o2.value) {
            let e3 = U();
            if (!e3) return;
            let n3 = [
              {
                property: `color`,
                control: `typography`
              },
              {
                property: `backgroundColor`,
                control: `background`
              },
              {
                property: `borderColor`,
                control: `border`
              }
            ];
            for (let { property: r4, control: i2 } of n3) ((_a = s2.value) == null ? void 0 : _a.closest(`[data-control="${i2}"]`)) && (e3.style[r4] = `var(${t3})`);
            return;
          }
          o2.value.value = `var(${t3})`, o2.value.dispatchEvent(new Event(`input`)), o2.value.focus();
        }
      }
      function m2(e2) {
        var _a;
        if (!o2.value || u2.value === null) {
          let e3 = U();
          if (!e3) return;
          let t3 = [
            {
              property: `color`,
              control: `typography`
            },
            {
              property: `backgroundColor`,
              control: `background`
            },
            {
              property: `borderColor`,
              control: `border`
            }
          ];
          for (let { property: n2, control: r3 } of t3) ((_a = s2.value) == null ? void 0 : _a.closest(`[data-control="${r3}"]`)) && (e3.style[n2] = ``);
          return;
        }
        o2.value.value = u2.value, o2.value.dispatchEvent(new Event(`input`)), o2.value.focus();
      }
      function g2(e2, t3) {
        if (e2.stopPropagation(), e2.preventDefault(), !o2.value) {
          let e3 = s2.value;
          x2(t3), l2.value = performance.now(), setTimeout(() => {
            let t4 = U();
            if (!t4) return;
            let n2 = [
              {
                property: `color`,
                control: `typography`
              },
              {
                property: `backgroundColor`,
                control: `background`
              },
              {
                property: `borderColor`,
                control: `border`
              }
            ];
            for (let { property: r3, control: i2 } of n2) (e3 == null ? void 0 : e3.closest(`[data-control="${i2}"]`)) && (t4.style[r3] = ``);
          }, 5);
          return;
        }
        o2.value.value = `var(${t3})`, o2.value.dispatchEvent(new Event(`input`)), o2.value.focus(), u2.value = `var(${t3})`, l2.value = performance.now();
      }
      function _2() {
        document.querySelectorAll(`.windpressbricks-variable-app-colorpopup`).forEach((e2) => {
          e2.remove();
        });
      }
      function b2() {
        if (document.querySelector(`.windpressbricks-variable-app-colorpopup`)) return;
        let e2 = `.bricks-control-popup { display: none !important; }`, t3 = document.createElement(`style`);
        t3.id = `windpressbricks-variable-app-bricks-popup`, t3.appendChild(document.createTextNode(e2)), t3.classList.add(`windpressbricks-variable-app-colorpopup`), document.head.appendChild(t3);
      }
      async function x2(e2) {
        var _a, _b, _c, _d;
        b2();
        let t3 = document.querySelector(`.bricks-control-popup .color-palette.grid`);
        t3 || ((_b = (_a = s2.value) == null ? void 0 : _a.closest(`.bricks-control-preview`)) == null ? void 0 : _b.click(), await new Promise((e3) => setTimeout(e3, 25)));
        let n2 = document.querySelector(`.bricks-control-popup .color-palette.grid`);
        if (n2) {
          let t4 = n2.querySelector(`[data-balloon="var(${e2})"]`);
          (_c = t4 == null ? void 0 : t4.parentElement) == null ? void 0 : _c.click();
        } else E(`Failed to select color. Color grid not found.`, {
          module: `variable-picker`,
          type: `error`
        });
        (_d = document.querySelector(`body`)) == null ? void 0 : _d.click(), await new Promise((e3) => setTimeout(e3, 2)), document.querySelector(`.bricks-control-popup`) ? (setTimeout(() => {
          var _a2;
          (_a2 = document.querySelector(`body`)) == null ? void 0 : _a2.click(), setTimeout(() => {
            _2();
          }, 5);
        }, 5), E(`Failed to close color picker. Delaying close.`, {
          module: `variable-picker`,
          type: `error`
        })) : _2();
      }
      return (r3, o3) => {
        let s3 = v(`tooltip`);
        return p(), a(`div`, ve, [
          (p(true), a(e, null, h(t2.variableItems, (t3, r4) => (p(), a(`div`, {
            key: r4,
            class: ``
          }, [
            n(`div`, ye, y(r4), 1),
            t3.DEFAULT ? (p(), a(`div`, be, [
              C(n(`button`, {
                style: d(`--wp-b-v-item-bg: var(--${t3.DEFAULT.key.slice(2)});`),
                class: ``,
                onClick: (e2) => g2(e2, t3.DEFAULT.key),
                onMouseenter: (e2) => f2(e2, t3.DEFAULT.key),
                onMouseleave: m2
              }, null, 44, xe), [
                [
                  s3,
                  {
                    placement: `top`,
                    content: `var(${t3.DEFAULT.key}, ${t3.DEFAULT.value})`
                  }
                ]
              ])
            ])) : i(``, true),
            t3.shades && Object.keys(t3.shades).length > 0 ? (p(), a(`div`, {
              key: 1,
              style: d(`--wp-b-v-items-grid: ${Object.keys(t3.shades).length}`),
              class: `variable-section-items shades-colors`
            }, [
              (p(true), a(e, null, h(t3.shades, (e2, t4) => (p(), a(`div`, {
                key: t4,
                class: ``
              }, [
                C(n(`button`, {
                  style: d(`--wp-b-v-item-bg: var(--${e2.key.slice(2)})`),
                  onClick: (t5) => g2(t5, e2.key),
                  onMouseenter: (t5) => f2(t5, e2.key),
                  onMouseleave: m2
                }, null, 44, Se), [
                  [
                    s3,
                    {
                      placement: `top`,
                      content: `var(${e2.key}, ${e2.value})`
                    }
                  ]
                ])
              ]))), 128))
            ], 4)) : i(``, true)
          ]))), 128))
        ]);
      };
    }
  };
  var Te = D(we, [
    [
      `__scopeId`,
      `data-v-c22ad97c`
    ]
  ]);
  const Ee = {
    id: `windpressbricks-variable-app-body`,
    class: `var-body`
  }, De = {
    __name: `PanelBody`,
    setup(e2) {
      let t2 = m({
        colors: {},
        typography: {},
        sizing: {}
      }), r2 = c(`focusedInput`), i2 = c(`recentColorPickerTarget`);
      async function o2() {
        let e3 = de.contentWindow.document.querySelector(`script#windpress\\:vfs[type="text/plain"]`), n2 = re(e3.textContent), r3 = await ie(await ae({
          volume: n2
        })), i3 = {};
        r3.filter((e4) => e4.key.startsWith(`--color`)).forEach((e4) => {
          let t3 = e4.key.slice(8), n3 = t3.split(`-`), r4 = ``;
          if (n3.length > 1) {
            let e5 = n3[0], t4 = n3.slice(1).join(`-`);
            r4 = `${e5}.shades.'${t4}'`;
          } else r4 = `${t3}.DEFAULT`;
          T(i3, r4, e4);
        }), t2.value.colors = Object.keys(i3).sort().reduce((e4, t3) => (e4[t3] = i3[t3], e4), {});
        let a2 = {
          font_size: [],
          line_height: [],
          letter_spacing: []
        };
        r3.filter((e4) => e4.key.startsWith(`--text-`) && !e4.key.endsWith(`--line-height`)).forEach((e4) => {
          let t3 = e4.key.slice(7);
          a2.font_size.push({
            key: e4.key,
            label: t3,
            value: e4.value
          });
        }), r3.filter((e4) => e4.key.startsWith(`--leading-`) || e4.key.endsWith(`--leading`)).forEach((e4) => {
          let t3 = e4.key.startsWith(`--leading-`) ? e4.key.slice(10) : e4.key.slice(2, -9);
          a2.line_height.push({
            key: e4.key,
            label: t3,
            value: e4.value
          });
        }), a2.line_height.sort((e4, t3) => e4.label.startsWith(`font-size-`) && !t3.label.startsWith(`font-size-`) ? 1 : !e4.label.startsWith(`font-size-`) && t3.label.startsWith(`font-size-`) ? -1 : 0), r3.filter((e4) => e4.key.startsWith(`--tracking-`)).forEach((e4) => {
          let t3 = e4.key.slice(11);
          a2.letter_spacing.push({
            key: e4.key,
            label: t3,
            value: e4.value
          });
        }), t2.value.typography = a2;
        let o3 = {
          container: [],
          breakpoint: []
        };
        r3.filter((e4) => e4.key.startsWith(`--container-`)).forEach((e4) => {
          let t3 = e4.key.slice(12);
          o3.container.push({
            key: e4.key,
            label: t3,
            value: e4.value
          });
        }), r3.filter((e4) => e4.key.startsWith(`--breakpoint-`)).forEach((e4) => {
          let t3 = e4.key.slice(13);
          o3.breakpoint.push({
            key: e4.key,
            label: t3,
            value: e4.value
          });
        }), t2.value.sizing = o3;
      }
      let l2 = m(null), u2 = m(null), d2 = m(null);
      x(r2, (e3) => {
        var _a, _b, _c;
        if (e3) {
          let t3 = e3.closest(`[data-controlkey]`), n2 = ((_a = t3 == null ? void 0 : t3.dataset.controlkey) == null ? void 0 : _a.toLocaleLowerCase()) ?? ``, r3 = [
            `typography`,
            `font`
          ].some((e4) => n2.includes(e4)), i3 = [
            `padding`,
            `margin`,
            `gap`,
            `width`,
            `height`
          ].some((e4) => n2.includes(e4)), a2 = (_c = (_b = e3.parentElement) == null ? void 0 : _b.parentElement) == null ? void 0 : _c.classList.contains(`color-input`);
          u2.value.togglePanel(false), d2.value.togglePanel(false), l2.value.togglePanel(false), a2 ? (l2.value.togglePanel(true), l2.value.scrollIntoView()) : r3 ? (u2.value.togglePanel(true), u2.value.scrollIntoView()) : i3 && (d2.value.togglePanel(true), d2.value.scrollIntoView());
        }
      }), x(i2, (e3) => {
        e3 && (l2.value.togglePanel(true), l2.value.scrollIntoView());
      }), f(() => {
        o2();
      });
      let h2 = new BroadcastChannel(`windpress`);
      return h2.addEventListener(`message`, async (e3) => {
        let t3 = e3.data, n2 = `windpress/intellisense`, r3 = `any`, i3 = `windpress.code-editor.saved.done`;
        t3.source === n2 && t3.task === i3 && setTimeout(() => {
          o2();
        }, 1e3);
      }), (e3, r3) => (p(), a(`div`, Ee, [
        s(R, {
          ref_key: `sectionColor`,
          ref: l2,
          namespace: `variable`,
          name: `color`
        }, {
          header: S(() => r3[0] || (r3[0] = [
            n(`span`, {
              class: `var-body-title`
            }, `Color`, -1)
          ])),
          default: S(() => [
            s(Te, {
              "variable-items": t2.value.colors
            }, null, 8, [
              `variable-items`
            ])
          ]),
          _: 1
        }, 512),
        s(R, {
          ref_key: `sectionTypography`,
          ref: u2,
          namespace: `variable`,
          name: `typography`
        }, {
          header: S(() => r3[1] || (r3[1] = [
            n(`span`, {
              class: `var-body-title`
            }, `Typography`, -1)
          ])),
          default: S(() => [
            s(H, {
              "variable-items": t2.value.typography
            }, null, 8, [
              `variable-items`
            ])
          ]),
          _: 1
        }, 512),
        s(R, {
          ref_key: `sectionSpacing`,
          ref: d2,
          namespace: `variable`,
          name: `spacing`,
          class: ``
        }, {
          header: S(() => r3[2] || (r3[2] = [
            n(`span`, {
              class: `var-body-title`
            }, `Sizing`, -1)
          ])),
          default: S(() => [
            s(H, {
              "variable-items": t2.value.sizing
            }, null, 8, [
              `variable-items`
            ])
          ]),
          _: 1
        }, 512)
      ]));
    }
  };
  var Oe = D(De, [
    [
      `__scopeId`,
      `data-v-cb1fc473`
    ]
  ]);
  const ke = {
    id: `windpressbricks-variable-app-container`,
    class: `wp-b-var-container`
  }, Ae = {
    __name: `App`,
    setup(e2) {
      let n2 = c(`isOpen`);
      return (e3, i2) => C((p(), a(`div`, ke, [
        s(P),
        (p(), r(t, null, {
          default: S(() => [
            s(Oe)
          ]),
          _: 1
        }))
      ], 512)), [
        [
          ne,
          b(n2)
        ]
      ]);
    }
  };
  var je = D(Ae, [
    [
      `__scopeId`,
      `data-v-8a9882a1`
    ]
  ]);
  const W = document.createElement(`windpressbricks-variable-app`);
  W.id = `windpressbricks-variable-app`, document.body.appendChild(W);
  const G = m(false), K = m(null), q = m(null), J = m(null), Me = m(0), Y = te(je);
  Y.config.globalProperties.windpressbricks = window.windpressbricks, Y.provide(`variableApp`, W), Y.provide(`isOpen`, G), Y.provide(`focusedInput`, K), Y.provide(`tempInputValue`, q), Y.provide(`recentColorPickerTarget`, J), Y.provide(`recentVariableSelectionTimestamp`, Me), Y.use(oe, {
    container: `#windpressbricks-variable-app`
  }), Y.component(`InlineSvg`, se), Y.mount(`#windpressbricks-variable-app`);
  function X(e2) {
    var _a;
    !e2.shiftKey || !e2.target || ((_a = document == null ? void 0 : document.getSelection()) == null ? void 0 : _a.removeAllRanges(), e2.preventDefault(), e2.stopPropagation(), K.value = e2.target, q.value = e2.target.value, G.value = true);
  }
  function Z(e2) {
    K.value = e2.target;
  }
  const Ne = [
    `div[data-control="number"]`,
    {
      selector: `div[data-control="text"]`,
      hasChild: [
        `#_flexBasis`,
        `#_overflow`,
        `#_gridTemplateColumns`,
        `#_gridTemplateRows`,
        `#_gridAutoColumns`,
        `#_gridAutoRows`,
        `#_objectPosition`,
        `[id^="raw-"]`
      ]
    }
  ];
  function Q() {
    setTimeout(() => {
      Ne.forEach((e3) => {
        let t2 = typeof e3 == `string` ? [
          ...document.querySelectorAll(e3)
        ] : [
          ...document.querySelectorAll(e3.selector)
        ].filter((t3) => e3.hasChild.some((e4) => t3.querySelector(e4)));
        t2.forEach((e4) => {
          let t3 = e4.querySelector(`input[type='text']`);
          (t3 == null ? void 0 : t3.getAttribute(`windpressbricks-variable-app`)) !== `listened` && (t3 == null ? void 0 : t3.removeEventListener(`click`, X), t3 == null ? void 0 : t3.addEventListener(`click`, X), t3 == null ? void 0 : t3.removeEventListener(`focus`, Z), t3 == null ? void 0 : t3.addEventListener(`focus`, Z), t3 == null ? void 0 : t3.setAttribute(`windpressbricks-variable-app`, `listened`), t3 == null ? void 0 : t3.parentNode.setAttribute(`data-balloon`, `Shift + click to open the Variable Picker`), t3 == null ? void 0 : t3.parentNode.setAttribute(`data-balloon-pos`, `bottom-right`));
        });
      });
      let e2 = [
        ...document.querySelectorAll(`.bricks-control-preview`)
      ].filter((e3) => {
        var _a, _b;
        return ((_b = (_a = e3.closest(`.control-inner`)) == null ? void 0 : _a.querySelector(`label`)) == null ? void 0 : _b.getAttribute(`for`)) === `color`;
      });
      e2.forEach((e3) => {
        e3.addEventListener(`contextmenu`, (e4) => {
          var _a;
          !e4.shiftKey || !e4.target || (e4.preventDefault(), e4.stopPropagation(), (_a = document == null ? void 0 : document.getSelection()) == null ? void 0 : _a.removeAllRanges(), K.value = null, G.value = true, J.value = null, l(() => {
            J.value = e4.target;
          }));
        });
      });
    }, 100);
  }
  let $ = false;
  _e({
    selector: `#bricks-panel-inner`,
    options: {
      subtree: true,
      childList: true
    },
    callback() {
      $ || ($ = true, Q(), setTimeout(() => {
        $ = false;
      }, 100));
    }
  }), Q(), document.addEventListener(`keydown`, (e2) => {
    e2.key === `Escape` && G.value && (G.value = false);
  }), x(G, (e2) => {
    W.style.zIndex = e2 ? `calc(Infinity)` : `-1`;
  }), E(`Module loaded!`, {
    module: `variable-picker`
  });
});
