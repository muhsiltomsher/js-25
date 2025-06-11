import "./preload-helper-DApxheAR.min.js";
import "./source-map-generator-CbHQi4uj.min.js";
import "./dist-DPO5Yrzi.min.js";
import { Fragment as e, Suspense as t, createBaseVNode as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createTextVNode as o, createVNode as s, inject as c, normalizeClass as l, normalizeStyle as u, onMounted as d, openBlock as f, ref as p, renderList as m, renderSlot as h, resolveComponent as g, resolveDirective as _, toDisplayString as v, unref as y, watch as b, withCtx as x, withDirectives as S } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import { Transition as ee, createApp as C, vShow as w } from "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import "./dist-BSmntxBi.min.js";
import "./log-yMc5ppo1.js";
import "./chunk-HTB5LLOP-DipP7bJV.min.js";
import { useStorage as te } from "./core-DXhlFaDq.min.js";
import "./floating-ui.core-PLF1GSJg.min.js";
import "./api-wSmiQczm.js";
import "./index.browser-D93niy_k.min.js";
import "./isObject-DwiMiGzS.min.js";
import "./_toKey-CxbSDiUe.min.js";
import { set_default as ne } from "./set-kZig-l_I.min.js";
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
import { logger as T } from "./logger-B1Q-9Dmh.js";
import { bde as E, bdeIframe as oe } from "./constant-9eJRofwZ.js";
import { Gt as se, R as ce, chevron_right_default as le, windpress_default$1 as ue, xmark_default as de } from "./chevron-right-SznEEHnP.min.js";
import { __plugin_vue_export_helper_default as D } from "./_plugin-vue_export-helper-Dg8VRhoP.min.js";
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
  const O = {
    id: `windpressbreakdance-variable-app-header`,
    class: `header-container cursor:grab bb:1|solid|$(gray200)`
  }, k = {
    class: `header-content flex gap:10 align-items:center fg:var(dark)`
  }, A = {
    class: `header-logo flex align-items:center px:12 py:2`
  }, j = {
    class: `header-title text-transform:none font:medium text:center flex-grow:1 gap:10 align-items:center cursor:default px:12 py:2`
  }, M = {
    __name: `PanelHeader`,
    setup(e2) {
      let t2 = c(`variableApp`), r2 = c(`isOpen`);
      function i2() {
        let e3 = t2.querySelector(`#windpressbreakdance-variable-app-header`), n2 = p(false), r3 = 0, i3 = 0;
        b(n2, (t3) => {
          t3 ? (document.body.style.userSelect = `none`, E.querySelector(`div.v-application--wrap`).style.pointerEvents = `none`, e3.style.cursor = `grabbing`) : (document.body.style.removeProperty(`user-select`), E.querySelector(`div.v-application--wrap`).style.removeProperty(`pointer-events`), e3.style.cursor = `grab`);
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
      return d(() => {
        i2();
      }), (e3, t3) => {
        let i3 = g(`inline-svg`), c2 = de, l2 = _(`tooltip`);
        return f(), a(`div`, O, [
          n(`div`, k, [
            n(`div`, A, [
              s(i3, {
                src: y(ue),
                class: `inline-svg fill:current font:24`
              }, null, 8, [
                `src`
              ])
            ]),
            S((f(), a(`div`, j, t3[1] || (t3[1] = [
              o(` WindPress `)
            ]))), [
              [
                l2,
                {
                  placement: `top`,
                  content: `v${e3.windpressbreakdance._version}`
                }
              ]
            ]),
            S((f(), a(`button`, {
              class: `header-exit flex align-items:center py:10 px:12 fg:$(blue600):hover bg:$(blue50):hover`,
              onClick: t3[0] || (t3[0] = (e4) => r2.value = !y(r2))
            }, [
              s(c2, {
                class: `iconify font:16`
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
  var N = D(M, [
    [
      `__scopeId`,
      `data-v-7377c328`
    ]
  ]);
  const P = {
    class: `header-slot flex-grow:1`
  }, F = {
    key: 0,
    class: `expansion-panel__body`
  }, I = {
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
      let r2 = e2, o2 = p(null), c2 = te(`windpressbreakdance-variable-app.ui.expansion-panels.${r2.namespace}`, {
        [`${r2.name}`]: false
      }, void 0, {
        mergeDefaults: true
      });
      function d2(e3) {
        c2.value[r2.name] = e3 === null ? !c2.value[r2.name] : e3;
      }
      function m2() {
        o2.value.scrollIntoView();
      }
      return t2({
        togglePanel: d2,
        scrollIntoView: m2
      }), (t3, r3) => {
        let d3 = le;
        return f(), a(`div`, {
          ref_key: `sectionRef`,
          ref: o2,
          class: `expansion-panel mx:10 py:8 mr:4`
        }, [
          n(`div`, {
            class: l([
              {},
              `expansion-panel__header flex justify-content:space-between p:10 r:8 cursor:pointer`
            ]),
            onClick: r3[0] || (r3[0] = (t4) => y(c2)[e2.name] = !y(c2)[e2.name])
          }, [
            n(`div`, P, [
              h(t3.$slots, `header`, {}, void 0, true)
            ]),
            n(`div`, null, [
              s(d3, {
                style: u({
                  transform: y(c2)[e2.name] ? `rotate(-90deg)` : `rotate(0deg)`
                }),
                class: `iconify ~duration:300 font:18`
              }, null, 8, [
                `style`
              ])
            ])
          ]),
          s(ee, null, {
            default: x(() => [
              y(c2)[e2.name] ? (f(), a(`div`, F, [
                h(t3.$slots, `default`, {}, void 0, true)
              ])) : i(``, true)
            ]),
            _: 3
          })
        ], 512);
      };
    }
  };
  var L = D(I, [
    [
      `__scopeId`,
      `data-v-29d1aafa`
    ]
  ]);
  const R = {
    class: `{m:10;pb:15}>div`
  }, z = {
    class: `variable-section-title font:14 my:10`
  }, B = {
    class: `variable-section-items flex flex:row gap:8 flex-wrap:wrap`
  }, V = [
    `onClick`,
    `onMouseenter`
  ], H = {
    class: `font:14`
  }, fe = {
    __name: `CommonVariableItems`,
    props: {
      variableItems: {
        type: Object,
        required: true
      }
    },
    setup(t2) {
      let r2 = t2;
      return (r3, o2) => {
        let s2 = _(`tooltip`);
        return f(), a(`div`, R, [
          (f(true), a(e, null, m(t2.variableItems, (t3, c2) => (f(), a(`div`, {
            key: c2,
            class: `var-item`
          }, [
            n(`div`, z, v(c2.replace(`_`, `-`)), 1),
            n(`div`, B, [
              t3.length > 0 ? (f(true), a(e, {
                key: 0
              }, m(t3, (e2, t4) => S((f(), a(`button`, {
                key: t4,
                class: `px:12 py:8 r:8 font:medium fg:$(dark) fg:$(accent-normal):hover bg:$(gray150) bg:$(gray300):hover b:0 flex-grow:1 flex-shrink:1 flex-basis:30% cursor:pointer {opacity:.5}>span opacity:100:hover>span`,
                onClick: (t5) => r3.$emit(`previewChose`, t5, e2.key),
                onMouseenter: (t5) => r3.$emit(`previewEnter`, t5, e2.key),
                onMouseleave: o2[0] || (o2[0] = (e3) => r3.$emit(`previewLeave`))
              }, [
                n(`span`, H, v(e2.label), 1)
              ], 40, V)), [
                [
                  s2,
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
  var U = D(fe, [
    [
      `__scopeId`,
      `data-v-4955c1d9`
    ]
  ]);
  const W = {
    class: `{m:10;pb:15}>div`
  }, pe = {
    class: `variable-section-title font:14 my:10`
  }, me = {
    key: 0,
    class: `variable-section-items default-color`
  }, he = [
    `onClick`,
    `onMouseenter`
  ], ge = [
    `onClick`,
    `onMouseenter`
  ], _e = {
    __name: `ColorVariableItems`,
    props: {
      variableItems: {
        type: Object,
        required: true
      }
    },
    setup(t2) {
      let r2 = t2;
      return (r3, o2) => {
        let s2 = _(`tooltip`);
        return f(), a(`div`, W, [
          (f(true), a(e, null, m(t2.variableItems, (t3, c2) => (f(), a(`div`, {
            key: c2,
            class: ``
          }, [
            n(`div`, pe, v(c2), 1),
            t3.DEFAULT ? (f(), a(`div`, me, [
              S(n(`button`, {
                style: u(`--wp-b-v-item-bg: var(--${t3.DEFAULT.key.slice(2)});`),
                class: `w:full r:4 h:24 border:1|solid|transparent border:white:hover cursor:pointer`,
                onClick: (e2) => r3.$emit(`previewChose`, e2, t3.DEFAULT.key),
                onMouseenter: (e2) => r3.$emit(`previewEnter`, e2, t3.DEFAULT.key),
                onMouseleave: o2[0] || (o2[0] = (e2) => r3.$emit(`previewLeave`))
              }, null, 44, he), [
                [
                  s2,
                  {
                    placement: `top`,
                    content: `var(${t3.DEFAULT.key}, ${t3.DEFAULT.value})`
                  }
                ]
              ])
            ])) : i(``, true),
            t3.shades && Object.keys(t3.shades).length > 0 ? (f(), a(`div`, {
              key: 1,
              style: u(`--wp-b-v-items-grid: ${Object.keys(t3.shades).length}`),
              class: `variable-section-items shades-colors grid r:4 overflow:hidden`
            }, [
              (f(true), a(e, null, m(t3.shades, (e2, t4) => (f(), a(`div`, {
                key: t4,
                class: `flex gap:10`
              }, [
                S(n(`button`, {
                  style: u(`--wp-b-v-item-bg: var(--${e2.key.slice(2)})`),
                  class: `w:full h:24 border:1|solid|transparent border:white:hover cursor:pointer`,
                  onClick: (t5) => r3.$emit(`previewChose`, t5, e2.key),
                  onMouseenter: (t5) => r3.$emit(`previewEnter`, t5, e2.key),
                  onMouseleave: o2[1] || (o2[1] = (e3) => r3.$emit(`previewLeave`))
                }, null, 44, ge), [
                  [
                    s2,
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
  var ve = D(_e, [
    [
      `__scopeId`,
      `data-v-b5786bb3`
    ]
  ]);
  const ye = {
    id: `windpressbreakdance-variable-app-body`,
    class: `var-body rel w:full h:full overflow-y:scroll! bb:1|solid|$(gray200)>div:not(:last-child)`
  }, be = 1e3, xe = {
    __name: `PanelBody`,
    setup(e2) {
      let t2 = p({
        colors: {},
        typography: {},
        sizing: {}
      }), r2 = c(`focusedInput`), i2 = c(`recentVariableSelectionTimestamp`), o2 = c(`tempInputValue`), l2 = c(`variableApp`);
      async function u2() {
        let e3 = oe.contentWindow.document.querySelector(`script#windpress\\:vfs[type="text/plain"]`), n2 = re(e3.textContent), r3 = await ie(await ae({
          volume: n2
        })), i3 = l2.querySelector(`style#windpressbreakdance-variable-app-body-style`);
        i3 || (i3 = document.createElement(`style`), i3.id = `windpressbreakdance-variable-app-body-style`, l2.appendChild(i3)), i3.innerHTML = `
        #windpressbreakdance-variable-app-body {
            ${r3.map((e4) => `${e4.key}:${e4.value};`).join(``)}
        }
    `;
        let a2 = {};
        r3.filter((e4) => e4.key.startsWith(`--color`)).forEach((e4) => {
          let t3 = e4.key.slice(8), n3 = t3.split(`-`), r4 = ``;
          if (n3.length > 1) {
            let e5 = n3[0], t4 = n3.slice(1).join(`-`);
            r4 = `${e5}.shades.'${t4}'`;
          } else r4 = `${t3}.DEFAULT`;
          ne(a2, r4, e4);
        }), t2.value.colors = Object.keys(a2).sort().reduce((e4, t3) => (e4[t3] = a2[t3], e4), {});
        let o3 = {
          font_size: [],
          line_height: [],
          letter_spacing: []
        };
        r3.filter((e4) => e4.key.startsWith(`--text-`) && !e4.key.endsWith(`--line-height`)).forEach((e4) => {
          let t3 = e4.key.slice(7);
          o3.font_size.push({
            key: e4.key,
            label: t3,
            value: e4.value
          });
        }), r3.filter((e4) => e4.key.startsWith(`--leading-`) || e4.key.endsWith(`--leading`)).forEach((e4) => {
          let t3 = e4.key.startsWith(`--leading-`) ? e4.key.slice(10) : e4.key.slice(2, -9);
          o3.line_height.push({
            key: e4.key,
            label: t3,
            value: e4.value
          });
        }), o3.line_height.sort((e4, t3) => e4.label.startsWith(`font-size-`) && !t3.label.startsWith(`font-size-`) ? 1 : !e4.label.startsWith(`font-size-`) && t3.label.startsWith(`font-size-`) ? -1 : 0), r3.filter((e4) => e4.key.startsWith(`--tracking-`)).forEach((e4) => {
          let t3 = e4.key.slice(11);
          o3.letter_spacing.push({
            key: e4.key,
            label: t3,
            value: e4.value
          });
        }), t2.value.typography = o3;
        let s2 = {
          container: [],
          breakpoint: []
        };
        r3.filter((e4) => e4.key.startsWith(`--container-`)).forEach((e4) => {
          let t3 = e4.key.slice(12);
          s2.container.push({
            key: e4.key,
            label: t3,
            value: e4.value
          });
        }), r3.filter((e4) => e4.key.startsWith(`--breakpoint-`)).forEach((e4) => {
          let t3 = e4.key.slice(13);
          s2.breakpoint.push({
            key: e4.key,
            label: t3,
            value: e4.value
          });
        }), t2.value.sizing = s2;
      }
      let m2 = p(null), h2 = p(null), g2 = p(null);
      b(r2, (e3) => {
        if (e3) {
          let t3 = e3.closest(`[data-test-id]`), n2 = [
            `color`
          ].some((e4) => t3.getAttribute(`data-test-id`).includes(e4)), r3 = [
            `fontSize`
          ].some((e4) => t3.getAttribute(`data-test-id`).includes(e4)), i3 = [
            `spacing`,
            `size-width`
          ].some((e4) => t3.getAttribute(`data-test-id`).includes(e4));
          h2.value.togglePanel(false), g2.value.togglePanel(false), m2.value.togglePanel(false);
          async function a2() {
            for (; e3.parentElement.parentElement.parentElement.querySelector(`div.dropdown>button.breakdance-unit-input-unit`) === null; ) await new Promise((e4) => setTimeout(e4, 10));
            for (e3.parentElement.parentElement.parentElement.querySelector(`div.dropdown>button.breakdance-unit-input-unit`).click(); document.querySelector(`.v-menu__content.menuable__content__active .dropdown-content .v-list .v-list-item:last-child .v-list-item__title`) === null; ) await new Promise((e4) => setTimeout(e4, 10));
            document.querySelector(`.v-menu__content.menuable__content__active .dropdown-content .v-list .v-list-item:last-child .v-list-item__title`).click(), setTimeout(() => {
              e3.focus();
            }, 100);
          }
          n2 ? (m2.value.togglePanel(true), m2.value.scrollIntoView()) : r3 ? (h2.value.togglePanel(true), h2.value.scrollIntoView(), a2()) : i3 && (g2.value.togglePanel(true), g2.value.scrollIntoView(), a2());
        }
      });
      function _2(e3, t3) {
        let n2 = performance.now() - i2.value, a2 = n2 < be;
        a2 || r2.value && (r2.value.value = `var(${t3})`, r2.value.dispatchEvent(new Event(`input`)), r2.value.focus());
      }
      function v2(e3) {
        !r2.value || o2.value === null || (r2.value.value = o2.value, r2.value.dispatchEvent(new Event(`input`)), r2.value.focus());
      }
      function y2(e3, t3) {
        r2.value && (r2.value.value = `var(${t3})`, r2.value.dispatchEvent(new Event(`input`)), r2.value.focus(), o2.value = `var(${t3})`, i2.value = performance.now());
      }
      d(() => {
        u2();
      });
      let S2 = new BroadcastChannel(`windpress`);
      return S2.addEventListener(`message`, async (e3) => {
        let t3 = e3.data, n2 = `windpress/intellisense`, r3 = `any`, i3 = `windpress.code-editor.saved.done`;
        t3.source === n2 && t3.task === i3 && setTimeout(() => {
          u2();
        }, 1e3);
      }), (e3, r3) => (f(), a(`div`, ye, [
        s(L, {
          ref_key: `sectionColor`,
          ref: m2,
          namespace: `variable`,
          name: `color`
        }, {
          header: x(() => r3[0] || (r3[0] = [
            n(`span`, {
              class: `var-body-title`
            }, `Color`, -1)
          ])),
          default: x(() => [
            s(ve, {
              "variable-items": t2.value.colors,
              onPreviewEnter: _2,
              onPreviewLeave: v2,
              onPreviewChose: y2
            }, null, 8, [
              `variable-items`
            ])
          ]),
          _: 1
        }, 512),
        s(L, {
          ref_key: `sectionTypography`,
          ref: h2,
          namespace: `variable`,
          name: `typography`
        }, {
          header: x(() => r3[1] || (r3[1] = [
            n(`span`, {
              class: `var-body-title`
            }, `Typography`, -1)
          ])),
          default: x(() => [
            s(U, {
              "variable-items": t2.value.typography,
              onPreviewEnter: _2,
              onPreviewLeave: v2,
              onPreviewChose: y2
            }, null, 8, [
              `variable-items`
            ])
          ]),
          _: 1
        }, 512),
        s(L, {
          ref_key: `sectionSpacing`,
          ref: g2,
          namespace: `variable`,
          name: `spacing`,
          class: ``
        }, {
          header: x(() => r3[2] || (r3[2] = [
            n(`span`, {
              class: `var-body-title`
            }, `Sizing`, -1)
          ])),
          default: x(() => [
            s(U, {
              "variable-items": t2.value.sizing,
              onPreviewEnter: _2,
              onPreviewLeave: v2,
              onPreviewChose: y2
            }, null, 8, [
              `variable-items`
            ])
          ]),
          _: 1
        }, 512)
      ]));
    }
  };
  var Se = D(xe, [
    [
      `__scopeId`,
      `data-v-1ee43b95`
    ]
  ]);
  const Ce = {
    __name: `App`,
    setup(e2) {
      let n2 = c(`isOpen`), i2 = p(null);
      function o2() {
        E.classList.contains(`theme--light`) ? (i2.value.classList.add(`theme--light`), i2.value.classList.remove(`theme--dark`)) : E.classList.contains(`theme--dark`) && (i2.value.classList.add(`theme--dark`), i2.value.classList.remove(`theme--light`));
      }
      let l2 = new MutationObserver((e3) => {
        e3.forEach((e4) => {
          e4.attributeName === `class` && o2();
        });
      });
      return l2.observe(E, {
        attributes: true,
        attributeFilter: [
          `class`
        ],
        childList: false,
        subtree: false
      }), d(() => {
        o2();
      }), (e3, o3) => S((f(), a(`div`, {
        id: `windpressbreakdance-variable-app-container`,
        ref_key: `containerRef`,
        ref: i2,
        class: `v-application flex flex:column w:full h:full`
      }, [
        s(N),
        (f(), r(t, null, {
          default: x(() => [
            s(Se)
          ]),
          _: 1
        }))
      ], 512)), [
        [
          w,
          y(n2)
        ]
      ]);
    }
  };
  var we = D(Ce, [
    [
      `__scopeId`,
      `data-v-a1c4c142`
    ]
  ]);
  function Te({ selector: e2, callback: t2, options: n2 }) {
    let r2 = new MutationObserver(t2), i2 = document.querySelector(e2);
    if (!i2) {
      T(`Target not found for selector: ${e2}`, {
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
  const G = document.createElement(`windpressbreakdance-variable-app`);
  G.id = `windpressbreakdance-variable-app`, E.appendChild(G);
  const K = p(false), q = p(null), J = p(null), Ee = p(0), Y = C(we);
  Y.config.globalProperties.windpressbreakdance = window.windpressbreakdance, Y.provide(`variableApp`, G), Y.provide(`isOpen`, K), Y.provide(`focusedInput`, q), Y.provide(`tempInputValue`, J), Y.provide(`recentVariableSelectionTimestamp`, Ee), Y.use(se, {
    container: `#windpressbreakdance-variable-app`
  }), Y.component(`InlineSvg`, ce), Y.mount(`#windpressbreakdance-variable-app`);
  function X(e2) {
    var _a;
    !e2.shiftKey || !e2.target || ((_a = document == null ? void 0 : document.getSelection()) == null ? void 0 : _a.removeAllRanges(), e2.preventDefault(), e2.stopPropagation(), q.value = e2.target, J.value = e2.target.value, K.value = true);
  }
  function Z(e2) {
    q.value = e2.target;
  }
  const De = {
    includedFields: [
      `div.breakdance-control-wrapper-input-wrapper div.breakdance-text-input-wrapper`
    ],
    excludedFields: []
  };
  function Q() {
    setTimeout(() => {
      let e2 = false;
      De.includedFields.forEach((t2) => {
        let n2 = typeof t2 == `string` ? [
          ...document.querySelectorAll(t2)
        ] : [
          ...document.querySelectorAll(t2.selector)
        ].filter((e3) => t2.hasChild.some((t3) => e3.querySelector(t3)));
        n2.forEach((t3) => {
          let n3 = t3.querySelector(`input[type='text']`);
          (n3 == null ? void 0 : n3.getAttribute(`windpressbreakdance-variable-app`)) !== `listened` && (n3 == null ? void 0 : n3.removeEventListener(`click`, X), n3 == null ? void 0 : n3.addEventListener(`click`, X), n3 == null ? void 0 : n3.removeEventListener(`focus`, Z), n3 == null ? void 0 : n3.addEventListener(`focus`, Z), n3 == null ? void 0 : n3.setAttribute(`windpressbreakdance-variable-app`, `listened`), e2 = true);
        });
      }), e2 && (q.value = null, J.value = null);
    }, 100);
  }
  let $ = false;
  Te({
    selector: `div:has(>div.breakdance-add-panel)`,
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
    e2.key === `Escape` && K.value && (K.value = false);
  }), b(K, (e2) => {
    G.style.zIndex = e2 ? `calc(Infinity)` : `-1`;
  }), T(`Module loaded!`, {
    module: `variable-picker`
  });
});
