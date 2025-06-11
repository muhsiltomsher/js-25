import "./preload-helper-DApxheAR.min.js";
import "./source-map-generator-CbHQi4uj.min.js";
import "./dist-DPO5Yrzi.min.js";
import { Fragment as e, Suspense as t, createBaseVNode as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createTextVNode as o, createVNode as s, inject as c, normalizeClass as l, normalizeStyle as u, onMounted as d, openBlock as f, ref as p, renderList as m, renderSlot as h, resolveComponent as g, resolveDirective as _, toDisplayString as v, unref as y, watch as b, withCtx as x, withDirectives as S } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import { Transition as C, createApp as ee, vShow as te } from "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import "./dist-BSmntxBi.min.js";
import "./log-yMc5ppo1.js";
import "./chunk-HTB5LLOP-DipP7bJV.min.js";
import { useStorage as ne } from "./core-DXhlFaDq.min.js";
import "./floating-ui.core-PLF1GSJg.min.js";
import "./api-wSmiQczm.js";
import "./index.browser-D93niy_k.min.js";
import "./isObject-DwiMiGzS.min.js";
import "./_toKey-CxbSDiUe.min.js";
import { set_default as re } from "./set-kZig-l_I.min.js";
import "./base64-C-ng-gTH.min.js";
import "./lib-BxXHRCGk.min.js";
import "./dist-Doa7WVF-.min.js";
import "./path-browserify-DTdOVQJJ.min.js";
import "./pre-process-CIY4vBOu.js";
import { __tla as __tla_0 } from "./cssesc-5IgvSXT7.js";
import { __tla as __tla_1 } from "./lightningcss-wasm-DXap5Yub.min.js";
import "./build-C2EkQrKU.js";
import { decodeVFSContainer as ie } from "./vfs-BzllAKLZ.js";
import { getVariableList as ae, loadDesignSystem as w } from "./intellisense-5fH2Lpgq.js";
import "./lib-DdIaIIpq.min.js";
import { __tla as __tla_2 } from "./tailwindcss-NwOviTEG.js";
import { logger as T } from "./logger-B1Q-9Dmh.js";
import { Gt as oe, R as se, chevron_right_default as E, windpress_default$1 as ce, xmark_default as le } from "./chevron-right-SznEEHnP.min.js";
import { __plugin_vue_export_helper_default as D } from "./_plugin-vue_export-helper-Dg8VRhoP.min.js";
import { uni as O, uniIframe as ue } from "./constant-Bi-FifLF.js";
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
  const de = {
    id: `windpressbuilderius-variable-app-header`,
    class: `header-container bg:$(primary-1) cursor:grab bb:1|solid|$(primary-3)`
  }, k = {
    class: `header-content flex gap:10 align-items:center fg:$(base-2)`
  }, A = {
    class: `header-logo flex px:12 py:2 align-items:center`
  }, j = {
    class: `header-title text-transform:none font:medium text:center flex-grow:1 gap:10 align-items:center cursor:default px:12 py:2`
  }, M = {
    __name: `PanelHeader`,
    setup(e2) {
      let t2 = c(`variableApp`), r2 = c(`isOpen`);
      function i2() {
        let e3 = t2.querySelector(`#windpressbuilderius-variable-app-header`), n2 = p(false), r3 = 0, i3 = 0;
        b(n2, (t3) => {
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
      return d(() => {
        i2();
      }), (e3, t3) => {
        let i3 = g(`inline-svg`), c2 = le, l2 = _(`tooltip`);
        return f(), a(`div`, de, [
          n(`div`, k, [
            n(`div`, A, [
              s(i3, {
                src: y(ce),
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
                  content: `v${e3.windpressbuilderius._version}`
                }
              ]
            ]),
            S((f(), a(`button`, {
              class: `uniPanelIconButton header-exit r:0 bg:$(primary-3):hover py:10 px:12`,
              onClick: t3[0] || (t3[0] = (e4) => r2.value = !y(r2))
            }, [
              s(c2, {
                class: `iconify fg:$(base-2) font:16`
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
      `data-v-4197d510`
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
      let r2 = e2, o2 = p(null), c2 = ne(`windpressbuilderius-variable-app.ui.expansion-panels.${r2.namespace}`, {
        [`${r2.name}`]: false
      }, void 0, {
        mergeDefaults: true
      });
      function l2(e3) {
        c2.value[r2.name] = e3 === null ? !c2.value[r2.name] : e3;
      }
      function d2() {
        o2.value.scrollIntoView();
      }
      return t2({
        togglePanel: l2,
        scrollIntoView: d2
      }), (t3, r3) => {
        let l3 = E;
        return f(), a(`div`, {
          ref_key: `sectionRef`,
          ref: o2,
          class: `expansion-panel mx:10 py:8`
        }, [
          n(`div`, {
            class: `expansion-panel__header flex justify-content:space-between p:10 r:8 cursor:pointer`,
            onClick: r3[0] || (r3[0] = (t4) => y(c2)[e2.name] = !y(c2)[e2.name])
          }, [
            n(`div`, P, [
              h(t3.$slots, `header`, {}, void 0, true)
            ]),
            n(`div`, null, [
              s(l3, {
                style: u({
                  transform: y(c2)[e2.name] ? `rotate(-90deg)` : `rotate(0deg)`
                }),
                class: `iconify ~duration:300 font:18`
              }, null, 8, [
                `style`
              ])
            ])
          ]),
          s(C, null, {
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
      `data-v-ca3cf9eb`
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
                class: `px:12 py:8 r:8 fg:$(base-1) fg:$(accent-normal):hover bg:$(primary-3) bg:$(primary-2):hover b:0 flex-grow:1 flex-shrink:1 flex-basis:30% cursor:pointer {opacity:.5}>span opacity:100:hover>span`,
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
      `data-v-188b1ad4`
    ]
  ]);
  const pe = {
    class: `{m:10;pb:15}>div`
  }, me = {
    class: `variable-section-title font:14 my:10`
  }, he = {
    key: 0,
    class: `variable-section-items default-color`
  }, ge = [
    `onClick`,
    `onMouseenter`
  ], _e = [
    `onClick`,
    `onMouseenter`
  ], ve = {
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
        return f(), a(`div`, pe, [
          (f(true), a(e, null, m(t2.variableItems, (t3, c2) => (f(), a(`div`, {
            key: c2,
            class: ``
          }, [
            n(`div`, me, v(c2), 1),
            t3.DEFAULT ? (f(), a(`div`, he, [
              S(n(`button`, {
                class: l([
                  `bg:$(${t3.DEFAULT.key.slice(2)})`,
                  `w:full r:4 h:24 border:1|solid|transparent border:white:hover cursor:pointer`
                ]),
                style: u(`--wp-b-v-item-bg: var(--${t3.DEFAULT.key.slice(2)});`),
                onClick: (e2) => r3.$emit(`previewChose`, e2, t3.DEFAULT.key),
                onMouseenter: (e2) => r3.$emit(`previewEnter`, e2, t3.DEFAULT.key),
                onMouseleave: o2[0] || (o2[0] = (e2) => r3.$emit(`previewLeave`))
              }, null, 46, ge), [
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
                }, null, 44, _e), [
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
  var ye = D(ve, [
    [
      `__scopeId`,
      `data-v-a1f5a2af`
    ]
  ]);
  const be = {
    id: `windpressbuilderius-variable-app-body`,
    class: `var-body rel w:full h:full overflow-y:scroll! bb:1|solid|$(primary-3)>div:not(:last-child)`
  }, xe = 1e3, Se = {
    __name: `PanelBody`,
    setup(e2) {
      let t2 = p({
        colors: {},
        typography: {},
        sizing: {}
      }), r2 = c(`focusedInput`), i2 = c(`recentVariableSelectionTimestamp`), o2 = c(`tempInputValue`), l2 = c(`variableApp`);
      async function u2() {
        let e3 = ue.contentWindow.document.querySelector(`script#windpress\\:vfs[type="text/plain"]`), n2 = ie(e3.textContent), r3 = await ae(await w({
          volume: n2
        })), i3 = l2.querySelector(`style#windpressbuilderius-variable-app-body-style`);
        i3 || (i3 = document.createElement(`style`), i3.id = `windpressbuilderius-variable-app-body-style`, l2.appendChild(i3)), i3.innerHTML = `
        #windpressbuilderius-variable-app-body {
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
          re(a2, r4, e4);
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
          let t3 = e3.getAttribute(`name`), n2 = [
            `color`,
            `backgroundColor`
          ].some((e4) => t3.includes(e4)), r3 = [
            `fontSize`
          ].some((e4) => t3.includes(e4)), i3 = [
            `padding`,
            `margin`,
            `gap`,
            `width`,
            `height`
          ].some((e4) => t3.includes(e4));
          h2.value.togglePanel(false), g2.value.togglePanel(false), m2.value.togglePanel(false), n2 ? (m2.value.togglePanel(true), m2.value.scrollIntoView()) : r3 ? (h2.value.togglePanel(true), h2.value.scrollIntoView()) : i3 && (g2.value.togglePanel(true), g2.value.scrollIntoView());
        }
      });
      function _2(e3, t3) {
        let n2 = Object.getOwnPropertyDescriptor(e3, `value`).set, r3 = Object.getPrototypeOf(e3), i3 = Object.getOwnPropertyDescriptor(r3, `value`).set;
        n2 && n2 !== i3 ? i3.call(e3, t3) : n2.call(e3, t3);
        let a2 = new Event(`input`, {
          bubbles: true
        });
        e3.dispatchEvent(a2);
      }
      function v2(e3, t3) {
        let n2 = performance.now() - i2.value, a2 = n2 < xe;
        a2 || r2.value && _2(r2.value, `var(${t3})`);
      }
      function y2(e3) {
        !r2.value || o2.value === null || _2(r2.value, o2.value);
      }
      function S2(e3, t3) {
        r2.value && (_2(r2.value, `var(${t3})`), o2.value = `var(${t3})`, i2.value = performance.now());
      }
      d(() => {
        u2();
      });
      let C2 = new BroadcastChannel(`windpress`);
      return C2.addEventListener(`message`, async (e3) => {
        let t3 = e3.data, n2 = `windpress/intellisense`, r3 = `any`, i3 = `windpress.code-editor.saved.done`;
        t3.source === n2 && t3.task === i3 && setTimeout(() => {
          u2();
        }, 1e3);
      }), (e3, r3) => (f(), a(`div`, be, [
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
            s(ye, {
              "variable-items": t2.value.colors,
              onPreviewEnter: v2,
              onPreviewLeave: y2,
              onPreviewChose: S2
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
              onPreviewEnter: v2,
              onPreviewLeave: y2,
              onPreviewChose: S2
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
              onPreviewEnter: v2,
              onPreviewLeave: y2,
              onPreviewChose: S2
            }, null, 8, [
              `variable-items`
            ])
          ]),
          _: 1
        }, 512)
      ]));
    }
  };
  var Ce = D(Se, [
    [
      `__scopeId`,
      `data-v-a7b2a30e`
    ]
  ]);
  const we = {
    id: `windpressbuilderius-variable-app-container`,
    class: `flex flex:column w:full h:full fg:$(base-2) bg:$(primary-1)`
  }, Te = {
    __name: `App`,
    setup(e2) {
      let n2 = c(`isOpen`);
      return (e3, i2) => S((f(), a(`div`, we, [
        s(N),
        (f(), r(t, null, {
          default: x(() => [
            s(Ce)
          ]),
          _: 1
        }))
      ], 512)), [
        [
          te,
          y(n2)
        ]
      ]);
    }
  };
  var Ee = D(Te, [
    [
      `__scopeId`,
      `data-v-1cedf206`
    ]
  ]);
  function De({ selector: e2, callback: t2, options: n2 }) {
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
  const W = document.createElement(`windpressbuilderius-variable-app`);
  W.id = `windpressbuilderius-variable-app`, document.body.appendChild(W);
  for (let e2 of document.getElementById(`builderius-builder-css`).sheet.cssRules) if (e2.selectorText && e2.selectorText.includes(`#builderiusPanel`)) for (let t2 = 0; t2 < e2.style.length; t2++) {
    let n2 = e2.style[t2];
    n2.startsWith(`--`) && W.style.setProperty(n2, e2.style.getPropertyValue(n2).trim());
  }
  const G = p(false), K = p(null), q = p(null), Oe = p(0), J = p(null), Y = ee(Ee);
  Y.config.globalProperties.windpressbuilderius = window.windpressbuilderius, Y.provide(`variableApp`, W), Y.provide(`isOpen`, G), Y.provide(`focusedInput`, K), Y.provide(`tempInputValue`, q), Y.provide(`recentVariableSelectionTimestamp`, Oe), Y.use(oe, {
    container: `#windpressbuilderius-variable-app`
  }), Y.component(`InlineSvg`, se), Y.mount(`#windpressbuilderius-variable-app`);
  function X(e2) {
    var _a;
    !e2.shiftKey || !e2.target || ((_a = document == null ? void 0 : document.getSelection()) == null ? void 0 : _a.removeAllRanges(), e2.preventDefault(), e2.stopPropagation(), K.value = e2.target, q.value = e2.target.value, G.value = true);
  }
  function Z(e2) {
    K.value = e2.target;
  }
  const ke = [
    `div.uniCssInput`,
    `div.uniCssColorpicker`
  ];
  function Q() {
    setTimeout(() => {
      var _a;
      let e2 = false;
      ke.forEach((t3) => {
        let n2 = typeof t3 == `string` ? [
          ...document.querySelectorAll(t3)
        ] : [
          ...document.querySelectorAll(t3.selector)
        ].filter((e3) => t3.hasChild.some((t4) => e3.querySelector(t4)));
        n2.forEach((t4) => {
          let n3 = t4.querySelector(`input[type='text']`);
          (n3 == null ? void 0 : n3.getAttribute(`windpressbuilderius-variable-app`)) !== `listened` && (n3 == null ? void 0 : n3.removeEventListener(`click`, X), n3 == null ? void 0 : n3.addEventListener(`click`, X), n3 == null ? void 0 : n3.removeEventListener(`focus`, Z), n3 == null ? void 0 : n3.addEventListener(`focus`, Z), n3 == null ? void 0 : n3.setAttribute(`windpressbuilderius-variable-app`, `listened`), e2 = true);
        });
      });
      let t2 = document.querySelector(`div.uniSystemSelectClasses__valueWrapper span.uniSystemSelectClasses__placeholder`) ? `%root%` : (_a = document.querySelector(`div.uniSystemSelectClasses__valueWrapper div.uniModuleCssSelectorItemSelected span`)) == null ? void 0 : _a.innerText;
      J.value !== t2 && (J.value = t2), e2 && (K.value = null, q.value = null);
    }, 100);
  }
  let $ = false;
  De({
    selector: `.uniLeftPanelOuter`,
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
  }), b(G, (e2) => {
    W.style.zIndex = e2 ? `calc(Infinity)` : `-1`;
  }), b(J, (e2, t2) => {
    e2 !== t2 && (K.value = null, q.value = null);
  }), T(`Module loaded!`, {
    module: `variable-picker`
  });
});
