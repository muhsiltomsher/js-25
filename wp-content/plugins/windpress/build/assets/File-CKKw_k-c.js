import { __toESM as e } from "./chunk-GxRd6SvM.min.js";
import { __vitePreload as t } from "./preload-helper-DApxheAR.min.js";
import "./source-map-generator-CbHQi4uj.min.js";
import "./dist-DPO5Yrzi.min.js";
import { Fragment as n, Suspense as r, computed as i, createBaseVNode as a, createBlock as o, createCommentVNode as s, createElementBlock as c, createSlots as l, createTextVNode as u, createVNode as d, defineComponent as f, guardReactiveProps as p, mergeProps as m, nextTick as h, normalizeClass as g, normalizeProps as _, onMounted as v, onUnmounted as y, openBlock as b, reactive as x, ref as S, renderList as C, renderSlot as w, resolveComponent as T, resolveDynamicComponent as ee, shallowRef as E, toDisplayString as D, toRef as O, toRefs as k, unref as A, useSlots as j, watch as M, withCtx as N } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import { withKeys as P, withModifiers as F } from "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import "./dist-BSmntxBi.min.js";
import { Icon_default as I, LinkBase_default as te, Link_default as ne, Primitive as re, get as L, isArrayOfArray as ie, omit as ae, pickLinkProps as oe, tv as R, useAppConfig as z, useLocale as se } from "./Link-83qDN5tY.min.js";
import { defineStore as ce } from "./log-yMc5ppo1.js";
import "./chunk-HTB5LLOP-DipP7bJV.min.js";
import { breakpointsTailwind as le, computedAsync as ue, createReusableTemplate as de, reactiveOmit as fe, reactivePick as pe, useBreakpoints as me, useColorMode$1 as he } from "./core-DXhlFaDq.min.js";
import "./floating-ui.core-PLF1GSJg.min.js";
import { Badge_default as ge, Kbd_default as _e, Tooltip_default as ve, handleAndDispatchCustomEvent as ye, useForwardPropsEmits as B, useId$1 as be, usePortal as xe } from "./Tooltip-8-iNrK0x.min.js";
import { createContext as Se, createEventHook as Ce, useVModel as we } from "./tv-CD-q12eC.min.js";
import { ContextMenu as V, MAP_KEY_TO_FOCUS_INTENT as Te, _sfc_main$3 as Ee, _sfc_main$4 as De, _sfc_main$5 as Oe, focusFirst as ke, getActiveElement$1 as H, getFocusIntent as Ae, injectRovingFocusGroupContext as je, useCollection as Me, useDirection as Ne, useTypeahead as Pe, wrapArray as Fe } from "./namespaced-bbeQqhxC.min.js";
import { Modal_default as U, Slideover_default as Ie, findValuesBetween as W, useOverlay as Le } from "./Modal-jvj8PIrN.min.js";
import { FormField_default as Re } from "./FormField-COhYl_h4.min.js";
import { useToast as ze } from "./useToast-CCC0wlx6.min.js";
import { Avatar_default as Be, Button_default as G } from "./Button-DeZRGJ9-.min.js";
import { useApi as Ve } from "./api-wSmiQczm.js";
import { nanoid as He } from "./index.browser-D93niy_k.min.js";
import { _getAllKeys_default as Ue, _getTag_default as We, cloneDeep_default as Ge, useBusyStore as Ke, useSettingsStore as qe } from "./settings-BBOsnx-8.js";
import { _Symbol_default as Je, isObjectLike_default as Ye } from "./isObject-DwiMiGzS.min.js";
import { _MapCache_default as Xe, eq_default as Ze, isArray_default as Qe } from "./_toKey-CxbSDiUe.min.js";
import { _Stack_default as K, _Uint8Array_default as $e, isBuffer_default as et, isTypedArray_default as tt } from "./_initCloneObject-CAdcLSh1.min.js";
import "./set-kZig-l_I.min.js";
import "./get-pqwrRitR.min.js";
import "./virtualRef-BSHD7wxg.js";
import { Input_default as nt } from "./Input-Bs1FY5Zn.min.js";
import "./base64-C-ng-gTH.min.js";
import { w$1 as rt } from "./dist-tuHH-JeY.min.js";
import "./lib-BxXHRCGk.min.js";
import "./dist-Doa7WVF-.min.js";
import { require_path_browserify as it } from "./path-browserify-DTdOVQJJ.min.js";
import "./pre-process-CIY4vBOu.js";
import { __tla as __tla_0 } from "./cssesc-5IgvSXT7.js";
import { __tla as __tla_1 } from "./lightningcss-wasm-DXap5Yub.min.js";
import "./build-C2EkQrKU.js";
import { encodeVFSContainer as at } from "./vfs-BzllAKLZ.js";
import { getVariableList as ot, loadDesignSystem as st, naturalExpand as ct } from "./intellisense-5fH2Lpgq.js";
import "./lib-DdIaIIpq.min.js";
import { __tla as __tla_2 } from "./tailwindcss-NwOviTEG.js";
import { createHighlighterCore as lt, createOnigurumaEngine as ut } from "./dist-C5nPNfbV.min.js";
import { DashboardNavbar_default as dt, DashboardPanel_default as ft, DashboardSidebarCollapse_default as pt } from "./DashboardSidebarCollapse-BvNf3Bi2.min.js";
import { require_dayjs_min as mt } from "./dayjs.min-BBb2IltG.min.js";
let wr;
let __tla = Promise.all([
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
  const ht = f({
    __name: `RovingFocusItem`,
    props: {
      tabStopId: {},
      focusable: {
        type: Boolean,
        default: true
      },
      active: {
        type: Boolean
      },
      allowShiftKey: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {
        default: `span`
      }
    },
    setup(e2) {
      let t2 = e2, n2 = je(), r2 = be(), a2 = i(() => t2.tabStopId || r2), s2 = i(() => n2.currentTabStopId.value === a2.value), { getItems: c2, CollectionItem: l2 } = Me();
      v(() => {
        t2.focusable && n2.onFocusableItemAdd();
      }), y(() => {
        t2.focusable && n2.onFocusableItemRemove();
      });
      function u2(e3) {
        if (e3.key === `Tab` && e3.shiftKey) {
          n2.onItemShiftTab();
          return;
        }
        if (e3.target !== e3.currentTarget) return;
        let r3 = Ae(e3, n2.orientation.value, n2.dir.value);
        if (r3 !== void 0) {
          if (e3.metaKey || e3.ctrlKey || e3.altKey || !t2.allowShiftKey && e3.shiftKey) return;
          e3.preventDefault();
          let i2 = [
            ...c2().map((e4) => e4.ref).filter((e4) => e4.dataset.disabled !== ``)
          ];
          if (r3 === `last`) i2.reverse();
          else if (r3 === `prev` || r3 === `next`) {
            r3 === `prev` && i2.reverse();
            let t3 = i2.indexOf(e3.currentTarget);
            i2 = n2.loop.value ? Fe(i2, t3 + 1) : i2.slice(t3 + 1);
          }
          h(() => ke(i2));
        }
      }
      return (e3, t3) => (b(), o(A(l2), null, {
        default: N(() => [
          d(A(re), {
            tabindex: s2.value ? 0 : -1,
            "data-orientation": A(n2).orientation.value,
            "data-active": e3.active ? `` : void 0,
            "data-disabled": e3.focusable ? void 0 : ``,
            as: e3.as,
            "as-child": e3.asChild,
            onMousedown: t3[0] || (t3[0] = (t4) => {
              e3.focusable ? A(n2).onItemFocus(a2.value) : t4.preventDefault();
            }),
            onFocus: t3[1] || (t3[1] = (e4) => A(n2).onItemFocus(a2.value)),
            onKeydown: u2
          }, {
            default: N(() => [
              w(e3.$slots, `default`)
            ]),
            _: 3
          }, 8, [
            `tabindex`,
            `data-orientation`,
            `data-active`,
            `data-disabled`,
            `as`,
            `as-child`
          ])
        ]),
        _: 3
      }));
    }
  });
  function q(e2) {
    return e2.reduce((e3, t2) => (e3.push(t2), t2.children && e3.push(...q(t2.children)), e3), []);
  }
  function gt(e2, t2) {
    let n2 = S(), r2 = (r3, i3) => {
      if (t2.multiple && Array.isArray(e2.value)) if (t2.selectionBehavior === `replace`) e2.value = [
        r3
      ], n2.value = r3;
      else {
        let t3 = e2.value.findIndex((e3) => i3(e3));
        t3 === -1 ? e2.value = [
          ...e2.value,
          r3
        ] : e2.value = e2.value.filter((e3, n3) => n3 !== t3);
      }
      else t2.selectionBehavior === `replace` ? e2.value = {
        ...r3
      } : !Array.isArray(e2.value) && i3(e2.value) ? e2.value = void 0 : e2.value = {
        ...r3
      };
      return e2.value;
    };
    function i2(r3, i3, a2, o2) {
      var _a;
      if (!(n2 == null ? void 0 : n2.value) || !t2.multiple || !Array.isArray(e2.value)) return;
      let s2 = a2().filter((e3) => e3.ref.dataset.disabled !== ``), c2 = (_a = s2.find((e3) => e3.ref === i3)) == null ? void 0 : _a.value;
      if (!c2) return;
      let l2 = null;
      switch (r3) {
        case `prev`:
        case `next`:
          l2 = W(o2, n2.value, c2);
          break;
        case `first`:
          l2 = W(o2, n2.value, o2 == null ? void 0 : o2[0]);
          break;
        case `last`:
          l2 = W(o2, n2.value, o2 == null ? void 0 : o2[o2.length - 1]);
          break;
      }
      e2.value = l2;
    }
    return {
      firstValue: n2,
      onSelectItem: r2,
      handleMultipleReplace: i2
    };
  }
  const [_t, vt] = Se(`TreeRoot`), yt = f({
    __name: `TreeRoot`,
    props: {
      modelValue: {},
      defaultValue: {},
      items: {},
      expanded: {},
      defaultExpanded: {},
      getKey: {},
      getChildren: {
        type: Function,
        default: (e2) => e2.children
      },
      selectionBehavior: {
        default: `toggle`
      },
      multiple: {},
      dir: {},
      disabled: {
        type: Boolean
      },
      propagateSelect: {
        type: Boolean
      },
      bubbleSelect: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {
        default: `ul`
      }
    },
    emits: [
      `update:modelValue`,
      `update:expanded`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2, { items: a2, multiple: s2, disabled: c2, propagateSelect: l2, dir: u2, bubbleSelect: f2 } = k(n2), { handleTypeaheadSearch: p2 } = Pe(), m2 = Ne(u2), g2 = S(), _2 = S(false), v2 = Ce(), y2 = we(n2, `modelValue`, r2, {
        defaultValue: n2.defaultValue ?? (s2.value ? [] : void 0),
        passive: n2.modelValue === void 0,
        deep: true
      }), x2 = we(n2, `expanded`, r2, {
        defaultValue: n2.defaultExpanded ?? [],
        passive: n2.expanded === void 0,
        deep: true
      }), { onSelectItem: C2, handleMultipleReplace: T2 } = gt(y2, n2), ee2 = i(() => s2.value && Array.isArray(y2.value) ? y2.value.map((e3) => n2.getKey(e3)) : [
        n2.getKey(y2.value ?? {})
      ]);
      function E2(e3, t3 = 1, r3) {
        return e3.reduce((i2, a3, o2) => {
          let s3 = n2.getKey(a3), c3 = n2.getChildren(a3), l3 = x2.value.includes(s3), u3 = {
            _id: s3,
            value: a3,
            index: o2,
            level: t3,
            parentItem: r3,
            hasChildren: !!c3,
            bind: {
              value: a3,
              level: t3,
              "aria-setsize": e3.length,
              "aria-posinset": o2 + 1
            }
          };
          return i2.push(u3), c3 && l3 && i2.push(...E2(c3, t3 + 1, a3)), i2;
        }, []);
      }
      let D2 = i(() => {
        let e3 = n2.items;
        return x2.value.map((e4) => e4), E2(e3 ?? []);
      });
      function O2(e3) {
        var _a;
        if (_2.value) v2.trigger(e3);
        else {
          let t3 = ((_a = g2.value) == null ? void 0 : _a.getItems()) ?? [];
          p2(e3.key, t3);
        }
      }
      function j2(e3) {
        if (_2.value) return;
        let t3 = Te[e3.key];
        h(() => {
          var _a;
          T2(t3, H(), (_a = g2.value) == null ? void 0 : _a.getItems, D2.value.map((e4) => e4.value));
        });
      }
      function M2(e3) {
        var _a;
        if (e3.parentItem != null && Array.isArray(y2.value) && n2.multiple) {
          let t3 = D2.value.find((t4) => e3.parentItem != null && n2.getKey(t4.value) === n2.getKey(e3.parentItem));
          if (t3 != null) {
            let e4 = (_a = n2.getChildren(t3.value)) == null ? void 0 : _a.every((e5) => y2.value.find((t4) => n2.getKey(t4) === n2.getKey(e5)));
            e4 ? y2.value = [
              ...y2.value,
              t3.value
            ] : y2.value = y2.value.filter((e5) => n2.getKey(e5) !== n2.getKey(t3.value)), M2(t3);
          }
        }
      }
      return vt({
        modelValue: y2,
        selectedKeys: ee2,
        onSelect: (e3) => {
          var _a;
          let t3 = (t4) => n2.getKey(t4 ?? {}) === n2.getKey(e3), r3 = n2.multiple && Array.isArray(y2.value) ? ((_a = y2.value) == null ? void 0 : _a.findIndex(t3)) !== -1 : void 0;
          if (C2(e3, t3), n2.bubbleSelect && n2.multiple && Array.isArray(y2.value)) {
            let t4 = D2.value.find((t5) => n2.getKey(t5.value) === n2.getKey(e3));
            t4 != null && M2(t4);
          }
          if (n2.propagateSelect && n2.multiple && Array.isArray(y2.value)) {
            let t4 = q(n2.getChildren(e3) ?? []);
            r3 ? y2.value = [
              ...y2.value
            ].filter((e4) => !t4.some((t5) => n2.getKey(e4 ?? {}) === n2.getKey(t5))) : y2.value = [
              ...y2.value,
              ...t4
            ];
          }
        },
        expanded: x2,
        onToggle(e3) {
          let t3 = e3 ? n2.getChildren(e3) : void 0;
          if (!t3) return;
          let r3 = n2.getKey(e3) ?? e3;
          x2.value.includes(r3) ? x2.value = x2.value.filter((e4) => e4 !== r3) : x2.value.push(r3);
        },
        getKey: n2.getKey,
        getChildren: n2.getChildren,
        items: a2,
        expandedItems: D2,
        disabled: c2,
        multiple: s2,
        dir: m2,
        propagateSelect: l2,
        bubbleSelect: f2,
        isVirtual: _2,
        virtualKeydownHook: v2,
        handleMultipleReplace: T2
      }), (e3, t3) => (b(), o(A(Oe), {
        ref_key: `rovingFocusGroupRef`,
        ref: g2,
        "as-child": ``,
        orientation: `vertical`,
        dir: A(m2)
      }, {
        default: N(() => [
          d(A(re), {
            role: `tree`,
            as: e3.as,
            "as-child": e3.asChild,
            "aria-multiselectable": A(s2) ? true : void 0,
            onKeydown: [
              O2,
              P(F(j2, [
                `shift`
              ]), [
                `up`,
                `down`
              ])
            ]
          }, {
            default: N(() => [
              w(e3.$slots, `default`, {
                flattenItems: D2.value,
                modelValue: A(y2),
                expanded: A(x2)
              })
            ]),
            _: 3
          }, 8, [
            `as`,
            `as-child`,
            `aria-multiselectable`,
            `onKeydown`
          ])
        ]),
        _: 3
      }, 8, [
        `dir`
      ]));
    }
  }), bt = `tree.select`, xt = `tree.toggle`, St = f({
    inheritAttrs: false,
    __name: `TreeItem`,
    props: {
      value: {},
      level: {},
      asChild: {
        type: Boolean
      },
      as: {
        default: `li`
      }
    },
    emits: [
      `select`,
      `toggle`
    ],
    setup(e2, { expose: t2, emit: n2 }) {
      let r2 = e2, a2 = n2, s2 = _t(), { getItems: c2 } = Me(), l2 = i(() => !!s2.getChildren(r2.value)), u2 = i(() => {
        let e3 = s2.getKey(r2.value);
        return s2.expanded.value.includes(e3);
      }), f2 = i(() => {
        let e3 = s2.getKey(r2.value);
        return s2.selectedKeys.value.includes(e3);
      }), p2 = i(() => {
        if (s2.bubbleSelect.value && l2.value && Array.isArray(s2.modelValue.value)) {
          let e3 = q(s2.getChildren(r2.value) || []);
          return e3.some((e4) => s2.modelValue.value.find((t3) => s2.getKey(t3) === s2.getKey(e4))) && !e3.every((e4) => s2.modelValue.value.find((t3) => s2.getKey(t3) === s2.getKey(e4)));
        } else if (s2.propagateSelect.value && f2.value && l2.value && Array.isArray(s2.modelValue.value)) {
          let e3 = q(s2.getChildren(r2.value) || []);
          return !e3.every((e4) => s2.modelValue.value.find((t3) => s2.getKey(t3) === s2.getKey(e4)));
        } else return;
      });
      function h2(e3) {
        if (l2.value) if (u2.value) {
          let e4 = c2().map((e5) => e5.ref), t3 = H(), n3 = e4.indexOf(t3), i2 = [
            ...e4
          ].slice(n3), a3 = i2.find((e5) => Number(e5.getAttribute(`data-indent`)) === r2.level + 1);
          a3 && a3.focus();
        } else x2(e3);
      }
      function g2(e3) {
        if (u2.value) x2(e3);
        else {
          let e4 = c2().map((e5) => e5.ref), t3 = H(), n3 = e4.indexOf(t3), i2 = [
            ...e4
          ].slice(0, n3).reverse(), a3 = i2.find((e5) => Number(e5.getAttribute(`data-indent`)) === r2.level - 1);
          a3 && a3.focus();
        }
      }
      async function _2(e3) {
        a2(`select`, e3), !(e3 == null ? void 0 : e3.defaultPrevented) && s2.onSelect(r2.value);
      }
      async function v2(e3) {
        a2(`toggle`, e3), !(e3 == null ? void 0 : e3.defaultPrevented) && s2.onToggle(r2.value);
      }
      async function y2(e3) {
        if (!e3) return;
        let t3 = {
          originalEvent: e3,
          value: r2.value,
          isExpanded: u2.value,
          isSelected: f2.value
        };
        ye(bt, _2, t3);
      }
      async function x2(e3) {
        if (!e3) return;
        let t3 = {
          originalEvent: e3,
          value: r2.value,
          isExpanded: u2.value,
          isSelected: f2.value
        };
        ye(xt, v2, t3);
      }
      return t2({
        isExpanded: u2,
        isSelected: f2,
        isIndeterminate: p2,
        handleToggle: () => s2.onToggle(r2.value),
        handleSelect: () => s2.onSelect(r2.value)
      }), (e3, t3) => (b(), o(A(ht), {
        "as-child": ``,
        value: e3.value,
        "allow-shift-key": ``
      }, {
        default: N(() => [
          d(A(re), m(e3.$attrs, {
            role: `treeitem`,
            as: e3.as,
            "as-child": e3.asChild,
            "aria-selected": f2.value,
            "aria-expanded": l2.value ? u2.value : void 0,
            "aria-level": e3.level,
            "data-indent": e3.level,
            "data-selected": f2.value ? `` : void 0,
            "data-expanded": u2.value ? `` : void 0,
            onKeydown: [
              P(F(y2, [
                `self`,
                `prevent`
              ]), [
                `enter`,
                `space`
              ]),
              t3[0] || (t3[0] = P(F((e4) => A(s2).dir.value === `ltr` ? h2(e4) : g2(e4), [
                `prevent`
              ]), [
                `right`
              ])),
              t3[1] || (t3[1] = P(F((e4) => A(s2).dir.value === `ltr` ? g2(e4) : h2(e4), [
                `prevent`
              ]), [
                `left`
              ]))
            ],
            onClick: t3[2] || (t3[2] = F((e4) => {
              y2(e4), x2(e4);
            }, [
              `stop`
            ]))
          }), {
            default: N(() => [
              w(e3.$slots, `default`, {
                isExpanded: u2.value,
                isSelected: f2.value,
                isIndeterminate: p2.value,
                handleSelect: () => A(s2).onSelect(e3.value),
                handleToggle: () => A(s2).onToggle(e3.value)
              })
            ]),
            _: 3
          }, 16, [
            `as`,
            `as-child`,
            `aria-selected`,
            `aria-expanded`,
            `aria-level`,
            `data-indent`,
            `data-selected`,
            `data-expanded`,
            `onKeydown`
          ])
        ]),
        _: 3
      }, 8, [
        `value`
      ]));
    }
  });
  var Ct = `__lodash_hash_undefined__`;
  function wt(e2) {
    return this.__data__.set(e2, Ct), this;
  }
  var Tt = wt;
  function Et(e2) {
    return this.__data__.has(e2);
  }
  var Dt = Et;
  function J(e2) {
    var t2 = -1, n2 = e2 == null ? 0 : e2.length;
    for (this.__data__ = new Xe(); ++t2 < n2; ) this.add(e2[t2]);
  }
  J.prototype.add = J.prototype.push = Tt, J.prototype.has = Dt;
  var Ot = J;
  function kt(e2, t2) {
    for (var n2 = -1, r2 = e2 == null ? 0 : e2.length; ++n2 < r2; ) if (t2(e2[n2], n2, e2)) return true;
    return false;
  }
  var At = kt;
  function jt(e2, t2) {
    return e2.has(t2);
  }
  var Mt = jt, Nt = 1, Pt = 2;
  function Ft(e2, t2, n2, r2, i2, a2) {
    var o2 = n2 & Nt, s2 = e2.length, c2 = t2.length;
    if (s2 != c2 && !(o2 && c2 > s2)) return false;
    var l2 = a2.get(e2), u2 = a2.get(t2);
    if (l2 && u2) return l2 == t2 && u2 == e2;
    var d2 = -1, f2 = true, p2 = n2 & Pt ? new Ot() : void 0;
    for (a2.set(e2, t2), a2.set(t2, e2); ++d2 < s2; ) {
      var m2 = e2[d2], h2 = t2[d2];
      if (r2) var g2 = o2 ? r2(h2, m2, d2, t2, e2, a2) : r2(m2, h2, d2, e2, t2, a2);
      if (g2 !== void 0) {
        if (g2) continue;
        f2 = false;
        break;
      }
      if (p2) {
        if (!At(t2, function(e3, t3) {
          if (!Mt(p2, t3) && (m2 === e3 || i2(m2, e3, n2, r2, a2))) return p2.push(t3);
        })) {
          f2 = false;
          break;
        }
      } else if (!(m2 === h2 || i2(m2, h2, n2, r2, a2))) {
        f2 = false;
        break;
      }
    }
    return a2.delete(e2), a2.delete(t2), f2;
  }
  var It = Ft;
  function Lt(e2) {
    var t2 = -1, n2 = Array(e2.size);
    return e2.forEach(function(e3, r2) {
      n2[++t2] = [
        r2,
        e3
      ];
    }), n2;
  }
  var Rt = Lt;
  function zt(e2) {
    var t2 = -1, n2 = Array(e2.size);
    return e2.forEach(function(e3) {
      n2[++t2] = e3;
    }), n2;
  }
  var Bt = zt, Vt = 1, Ht = 2, Ut = `[object Boolean]`, Wt = `[object Date]`, Gt = `[object Error]`, Kt = `[object Map]`, qt = `[object Number]`, Jt = `[object RegExp]`, Yt = `[object Set]`, Xt = `[object String]`, Zt = `[object Symbol]`, Qt = `[object ArrayBuffer]`, $t = `[object DataView]`, en = Je ? Je.prototype : void 0, tn = en ? en.valueOf : void 0;
  function nn(e2, t2, n2, r2, i2, a2, o2) {
    switch (n2) {
      case $t:
        if (e2.byteLength != t2.byteLength || e2.byteOffset != t2.byteOffset) return false;
        e2 = e2.buffer, t2 = t2.buffer;
      case Qt:
        return !(e2.byteLength != t2.byteLength || !a2(new $e(e2), new $e(t2)));
      case Ut:
      case Wt:
      case qt:
        return Ze(+e2, +t2);
      case Gt:
        return e2.name == t2.name && e2.message == t2.message;
      case Jt:
      case Xt:
        return e2 == t2 + ``;
      case Kt:
        var s2 = Rt;
      case Yt:
        var c2 = r2 & Vt;
        if (s2 || (s2 = Bt), e2.size != t2.size && !c2) return false;
        var l2 = o2.get(e2);
        if (l2) return l2 == t2;
        r2 |= Ht, o2.set(e2, t2);
        var u2 = It(s2(e2), s2(t2), r2, i2, a2, o2);
        return o2.delete(e2), u2;
      case Zt:
        if (tn) return tn.call(e2) == tn.call(t2);
    }
    return false;
  }
  var rn = nn, an = 1, on = Object.prototype, sn = on.hasOwnProperty;
  function cn(e2, t2, n2, r2, i2, a2) {
    var o2 = n2 & an, s2 = Ue(e2), c2 = s2.length, l2 = Ue(t2), u2 = l2.length;
    if (c2 != u2 && !o2) return false;
    for (var d2 = c2; d2--; ) {
      var f2 = s2[d2];
      if (!(o2 ? f2 in t2 : sn.call(t2, f2))) return false;
    }
    var p2 = a2.get(e2), m2 = a2.get(t2);
    if (p2 && m2) return p2 == t2 && m2 == e2;
    var h2 = true;
    a2.set(e2, t2), a2.set(t2, e2);
    for (var g2 = o2; ++d2 < c2; ) {
      f2 = s2[d2];
      var _2 = e2[f2], v2 = t2[f2];
      if (r2) var y2 = o2 ? r2(v2, _2, f2, t2, e2, a2) : r2(_2, v2, f2, e2, t2, a2);
      if (!(y2 === void 0 ? _2 === v2 || i2(_2, v2, n2, r2, a2) : y2)) {
        h2 = false;
        break;
      }
      g2 || (g2 = f2 == `constructor`);
    }
    if (h2 && !g2) {
      var b2 = e2.constructor, x2 = t2.constructor;
      b2 != x2 && `constructor` in e2 && `constructor` in t2 && !(typeof b2 == `function` && b2 instanceof b2 && typeof x2 == `function` && x2 instanceof x2) && (h2 = false);
    }
    return a2.delete(e2), a2.delete(t2), h2;
  }
  var ln = cn, un = 1, dn = `[object Arguments]`, fn = `[object Array]`, Y = `[object Object]`, pn = Object.prototype, mn = pn.hasOwnProperty;
  function hn(e2, t2, n2, r2, i2, a2) {
    var o2 = Qe(e2), s2 = Qe(t2), c2 = o2 ? fn : We(e2), l2 = s2 ? fn : We(t2);
    c2 = c2 == dn ? Y : c2, l2 = l2 == dn ? Y : l2;
    var u2 = c2 == Y, d2 = l2 == Y, f2 = c2 == l2;
    if (f2 && et(e2)) {
      if (!et(t2)) return false;
      o2 = true, u2 = false;
    }
    if (f2 && !u2) return a2 || (a2 = new K()), o2 || tt(e2) ? It(e2, t2, n2, r2, i2, a2) : rn(e2, t2, c2, n2, r2, i2, a2);
    if (!(n2 & un)) {
      var p2 = u2 && mn.call(e2, `__wrapped__`), m2 = d2 && mn.call(t2, `__wrapped__`);
      if (p2 || m2) {
        var h2 = p2 ? e2.value() : e2, g2 = m2 ? t2.value() : t2;
        return a2 || (a2 = new K()), i2(h2, g2, n2, r2, a2);
      }
    }
    return f2 ? (a2 || (a2 = new K()), ln(e2, t2, n2, r2, i2, a2)) : false;
  }
  var gn = hn;
  function _n(e2, t2, n2, r2, i2) {
    return e2 === t2 ? true : e2 == null || t2 == null || !Ye(e2) && !Ye(t2) ? e2 !== e2 && t2 !== t2 : gn(e2, t2, n2, r2, _n, i2);
  }
  var vn = _n;
  function yn(e2, t2) {
    return vn(e2, t2);
  }
  var bn = yn;
  const X = ce(`volume`, () => {
    let e2 = Ve(), t2 = Ke(), n2 = x({
      entries: []
    }), r2 = x({
      entries: []
    }), a2 = S(null);
    function o2(e3) {
      return e3 = e3.replace(/[^a-zA-Z0-9._/-]+/g, ``), e3 = e3.replace(/\.{2,}/g, `.`), e3 = e3.replace(/\/{2,}/g, `/`), e3 = e3.replace(/^[._/ -]+|[._/ -]+$/g, ``), e3;
    }
    function s2(e3) {
      let t3 = e3.split(`/`).map(o2).join(`/`);
      t3 = o2(t3);
      let r3 = n2.entries.findIndex((e4) => e4.relative_path === t3);
      if (r3 !== -1) {
        if (n2.entries[r3].hidden === false) throw Error(wp.i18n.__(`A file named "${t3}" already exists`, `windpress`));
        n2.entries[r3].hidden = false, n2.entries[r3].content = `/* file: ${t3} */

`;
      } else n2.entries.push({
        name: t3.split(`/`).pop() || ``,
        content: `/* file: ${t3} */

`,
        relative_path: `${t3}`,
        handler: `internal`
      });
      a2.value = `${t3}`;
    }
    function c2(e3) {
      let t3 = n2.entries.findIndex((t4) => t4.relative_path === e3.relative_path);
      n2.entries[t3].content = ``, n2.entries[t3].hidden = true, a2.value === e3.relative_path && (a2.value = null);
    }
    function l2(e3, t3) {
      let r3 = n2.entries.findIndex((t4) => t4.relative_path === e3.relative_path), i2 = t3.split(`/`).map(o2).join(`/`);
      i2 = o2(i2);
      let a3 = n2.entries.findIndex((e4) => e4.relative_path === i2);
      if (a3 !== -1) {
        if (n2.entries[a3].hidden === false) throw Error(wp.i18n.__(`A file named "${i2}" already exists`, `windpress`));
        n2.entries[a3].hidden = false, n2.entries[a3].content = n2.entries[r3].content, n2.entries[a3].signature && delete n2.entries[a3].signature;
      } else {
        let e4 = Ge(n2.entries[r3]);
        e4.relative_path = i2, e4.name = i2.split(`/`).pop() || ``, e4.content = n2.entries[r3].content, e4.hidden = false, e4.signature = void 0, n2.entries.push(e4);
      }
      c2(e3);
    }
    function u2(e3) {
      let t3 = n2.entries.findIndex((t4) => t4.relative_path === e3.relative_path);
      n2.entries[t3].content = ``;
    }
    function d2() {
      return n2.entries.reduce((e3, t3) => (e3[`/${t3.relative_path}`] = t3.content, e3), {});
    }
    async function f2() {
      return t2.add(`volume.doPull`), await e2.request(`/admin/volume/index`, {
        method: `GET`
      }).then((e3) => e3.data).then((e3) => {
        let t3 = e3.entries;
        n2.entries = t3, m2();
      }).catch((e3) => {
      }).finally(() => {
        t2.remove(`volume.doPull`);
      });
    }
    async function p2() {
      return t2.add(`volume.doPush`), e2.request(`/admin/volume/store`, {
        method: `POST`,
        data: {
          volume: {
            entries: n2.entries
          }
        }
      }).then((e3) => (m2(), {
        message: e3.data.message,
        success: true
      })).catch((e3) => {
        throw Error(e3.response ? e3.response.data.message : e3.message);
      }).finally(() => {
        t2.remove(`volume.doPush`);
      });
    }
    function m2() {
      n2.entries.length !== 0 && (a2.value === null && (a2.value = `main.css`), h2.value && (r2.entries = Ge(n2.entries)));
    }
    let h2 = i(() => !bn(n2.entries, r2.entries));
    function g2(e3) {
      let t3 = n2.entries.find((t4) => t4.relative_path === e3), i2 = r2.entries.find((t4) => t4.relative_path === e3);
      return !bn(t3, i2);
    }
    function _2() {
      n2.entries.length === 0 && f2();
    }
    return {
      data: n2,
      activeViewEntryRelativePath: a2,
      hasChanged: h2,
      addNewEntry: s2,
      getKVEntries: d2,
      doPull: f2,
      doPush: p2,
      entryHasChanged: g2,
      softDeleteEntry: c2,
      resetEntry: u2,
      renameEntry: l2,
      cleanPath: o2,
      initPull: _2
    };
  });
  var xn = {
    slots: {
      root: `relative isolate`,
      item: ``,
      listWithChildren: `ms-4.5 border-s border-default`,
      itemWithChildren: `ps-1.5 -ms-px`,
      link: `relative group w-full flex items-center text-sm before:absolute before:inset-y-px before:inset-x-0 before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2`,
      linkLeadingIcon: `shrink-0`,
      linkLabel: `truncate`,
      linkTrailing: `ms-auto inline-flex gap-1.5 items-center`,
      linkTrailingIcon: `shrink-0 transform transition-transform duration-200 group-data-expanded:rotate-180`
    },
    variants: {
      color: {
        primary: {
          link: `focus-visible:before:ring-primary`
        },
        secondary: {
          link: `focus-visible:before:ring-secondary`
        },
        success: {
          link: `focus-visible:before:ring-success`
        },
        info: {
          link: `focus-visible:before:ring-info`
        },
        warning: {
          link: `focus-visible:before:ring-warning`
        },
        error: {
          link: `focus-visible:before:ring-error`
        },
        neutral: {
          link: `focus-visible:before:ring-inverted`
        }
      },
      size: {
        xs: {
          link: `px-2 py-1 text-xs gap-1`,
          linkLeadingIcon: `size-4`,
          linkTrailingIcon: `size-4`
        },
        sm: {
          link: `px-2.5 py-1.5 text-xs gap-1.5`,
          linkLeadingIcon: `size-4`,
          linkTrailingIcon: `size-4`
        },
        md: {
          link: `px-2.5 py-1.5 text-sm gap-1.5`,
          linkLeadingIcon: `size-5`,
          linkTrailingIcon: `size-5`
        },
        lg: {
          link: `px-3 py-2 text-sm gap-2`,
          linkLeadingIcon: `size-5`,
          linkTrailingIcon: `size-5`
        },
        xl: {
          link: `px-3 py-2 text-base gap-2`,
          linkLeadingIcon: `size-6`,
          linkTrailingIcon: `size-6`
        }
      },
      selected: {
        true: {
          link: `before:bg-elevated`
        },
        false: {
          link: [
            `hover:not-disabled:text-highlighted hover:not-disabled:before:bg-elevated/50`,
            `transition-colors before:transition-colors`
          ]
        }
      },
      disabled: {
        true: {
          link: `cursor-not-allowed opacity-75`
        }
      }
    },
    compoundVariants: [
      {
        color: `primary`,
        selected: true,
        class: {
          link: `text-primary`
        }
      },
      {
        color: `secondary`,
        selected: true,
        class: {
          link: `text-secondary`
        }
      },
      {
        color: `success`,
        selected: true,
        class: {
          link: `text-success`
        }
      },
      {
        color: `info`,
        selected: true,
        class: {
          link: `text-info`
        }
      },
      {
        color: `warning`,
        selected: true,
        class: {
          link: `text-warning`
        }
      },
      {
        color: `error`,
        selected: true,
        class: {
          link: `text-error`
        }
      },
      {
        color: `neutral`,
        selected: true,
        class: {
          link: `text-highlighted`
        }
      }
    ],
    defaultVariants: {
      color: `primary`,
      size: `md`
    }
  };
  const Sn = [
    `disabled`
  ], Cn = {
    __name: `Tree`,
    props: {
      as: {
        type: null,
        required: false
      },
      color: {
        type: null,
        required: false
      },
      size: {
        type: null,
        required: false
      },
      valueKey: {
        type: null,
        required: false,
        default: `value`
      },
      labelKey: {
        type: null,
        required: false,
        default: `label`
      },
      trailingIcon: {
        type: String,
        required: false
      },
      expandedIcon: {
        type: String,
        required: false
      },
      collapsedIcon: {
        type: String,
        required: false
      },
      items: {
        type: null,
        required: false
      },
      modelValue: {
        type: null,
        required: false
      },
      defaultValue: {
        type: null,
        required: false
      },
      multiple: {
        type: Boolean,
        required: false
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: null,
        required: false
      },
      expanded: {
        type: Array,
        required: false
      },
      defaultExpanded: {
        type: Array,
        required: false
      },
      selectionBehavior: {
        type: String,
        required: false
      },
      propagateSelect: {
        type: Boolean,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      }
    },
    emits: [
      `update:expanded`,
      `update:modelValue`
    ],
    setup(e2, { emit: t2 }) {
      let r2 = e2, l2 = t2, f2 = j(), p2 = z(), h2 = B(pe(r2, `as`, `modelValue`, `defaultValue`, `items`, `multiple`, `expanded`, `disabled`, `propagateSelect`), l2), [_2, v2] = de(), y2 = i(() => {
        var _a;
        return R({
          extend: R(xn),
          ...((_a = p2.ui) == null ? void 0 : _a.tree) || {}
        })({
          color: r2.color,
          size: r2.size
        });
      });
      function x2(e3) {
        return L(e3, r2.labelKey);
      }
      function S2(e3) {
        return L(e3, r2.valueKey) ?? L(e3, r2.labelKey);
      }
      function T2(e3) {
        var _a;
        let t3 = e3.defaultExpanded ? S2(e3) : null, n2 = ((_a = e3.children) == null ? void 0 : _a.flatMap((e4) => T2(e4))) ?? [];
        return [
          t3,
          ...n2
        ].filter(Boolean);
      }
      let ee2 = i(() => {
        var _a;
        return r2.defaultExpanded ?? ((_a = r2.items) == null ? void 0 : _a.flatMap((e3) => T2(e3)));
      });
      return (t3, i2) => {
        var _a;
        return b(), c(n, null, [
          d(A(_2), null, {
            default: N(({ items: i3, level: l3 }) => [
              (b(true), c(n, null, C(i3, (n2, i4) => {
                var _a2, _b, _c, _d;
                return b(), c(`li`, {
                  key: `${l3}-${i4}`,
                  class: g(l3 > 0 ? y2.value.itemWithChildren({
                    class: [
                      (_a2 = r2.ui) == null ? void 0 : _a2.itemWithChildren,
                      (_b = n2.ui) == null ? void 0 : _b.itemWithChildren
                    ]
                  }) : y2.value.item({
                    class: [
                      (_c = r2.ui) == null ? void 0 : _c.item,
                      (_d = n2.ui) == null ? void 0 : _d.item
                    ]
                  }))
                }, [
                  d(A(St), {
                    "as-child": ``,
                    level: l3,
                    value: n2,
                    onToggle: n2.onToggle,
                    onSelect: n2.onSelect
                  }, {
                    default: N(({ isExpanded: h3, isSelected: _3 }) => {
                      var _a3, _b2, _c2, _d2, _e2;
                      return [
                        a(`button`, {
                          disabled: n2.disabled || e2.disabled,
                          class: g(y2.value.link({
                            class: [
                              (_a3 = r2.ui) == null ? void 0 : _a3.link,
                              (_b2 = n2.ui) == null ? void 0 : _b2.link,
                              n2.class
                            ],
                            selected: _3,
                            disabled: n2.disabled || e2.disabled
                          }))
                        }, [
                          w(t3.$slots, n2.slot || `item`, m({
                            ref_for: true
                          }, {
                            index: i4,
                            level: l3,
                            expanded: h3,
                            selected: _3
                          }, {
                            item: n2
                          }), () => {
                            var _a4, _b3, _c3, _d3, _e3;
                            return [
                              w(t3.$slots, n2.slot ? `${n2.slot}-leading` : `item-leading`, m({
                                ref_for: true
                              }, {
                                index: i4,
                                level: l3,
                                expanded: h3,
                                selected: _3
                              }, {
                                item: n2
                              }), () => {
                                var _a5, _b4, _c4, _d4, _e4;
                                return [
                                  n2.icon ? (b(), o(I, {
                                    key: 0,
                                    name: n2.icon,
                                    class: g(y2.value.linkLeadingIcon({
                                      class: [
                                        (_a5 = r2.ui) == null ? void 0 : _a5.linkLeadingIcon,
                                        (_b4 = n2.ui) == null ? void 0 : _b4.linkLeadingIcon
                                      ]
                                    }))
                                  }, null, 8, [
                                    `name`,
                                    `class`
                                  ])) : ((_c4 = n2.children) == null ? void 0 : _c4.length) ? (b(), o(I, {
                                    key: 1,
                                    name: h3 ? e2.expandedIcon ?? A(p2).ui.icons.folderOpen : e2.collapsedIcon ?? A(p2).ui.icons.folder,
                                    class: g(y2.value.linkLeadingIcon({
                                      class: [
                                        (_d4 = r2.ui) == null ? void 0 : _d4.linkLeadingIcon,
                                        (_e4 = n2.ui) == null ? void 0 : _e4.linkLeadingIcon
                                      ]
                                    }))
                                  }, null, 8, [
                                    `name`,
                                    `class`
                                  ])) : s(``, true)
                                ];
                              }),
                              x2(n2) || f2[n2.slot ? `${n2.slot}-label` : `item-label`] ? (b(), c(`span`, {
                                key: 0,
                                class: g(y2.value.linkLabel({
                                  class: [
                                    (_a4 = r2.ui) == null ? void 0 : _a4.linkLabel,
                                    (_b3 = n2.ui) == null ? void 0 : _b3.linkLabel
                                  ]
                                }))
                              }, [
                                w(t3.$slots, n2.slot ? `${n2.slot}-label` : `item-label`, m({
                                  ref_for: true
                                }, {
                                  item: n2,
                                  index: i4,
                                  level: l3,
                                  expanded: h3,
                                  selected: _3
                                }, {
                                  item: n2
                                }), () => [
                                  u(D(x2(n2)), 1)
                                ])
                              ], 2)) : s(``, true),
                              n2.trailingIcon || ((_c3 = n2.children) == null ? void 0 : _c3.length) || f2[n2.slot ? `${n2.slot}-trailing` : `item-trailing`] ? (b(), c(`span`, {
                                key: 1,
                                class: g(y2.value.linkTrailing({
                                  class: [
                                    (_d3 = r2.ui) == null ? void 0 : _d3.linkTrailing,
                                    (_e3 = n2.ui) == null ? void 0 : _e3.linkTrailing
                                  ]
                                }))
                              }, [
                                w(t3.$slots, n2.slot ? `${n2.slot}-trailing` : `item-trailing`, m({
                                  ref_for: true
                                }, {
                                  item: n2,
                                  index: i4,
                                  level: l3,
                                  expanded: h3,
                                  selected: _3
                                }, {
                                  item: n2
                                }), () => {
                                  var _a5, _b4, _c4, _d4, _e4;
                                  return [
                                    n2.trailingIcon ? (b(), o(I, {
                                      key: 0,
                                      name: n2.trailingIcon,
                                      class: g(y2.value.linkTrailingIcon({
                                        class: [
                                          (_a5 = r2.ui) == null ? void 0 : _a5.linkTrailingIcon,
                                          (_b4 = n2.ui) == null ? void 0 : _b4.linkTrailingIcon
                                        ]
                                      }))
                                    }, null, 8, [
                                      `name`,
                                      `class`
                                    ])) : ((_c4 = n2.children) == null ? void 0 : _c4.length) ? (b(), o(I, {
                                      key: 1,
                                      name: e2.trailingIcon ?? A(p2).ui.icons.chevronDown,
                                      class: g(y2.value.linkTrailingIcon({
                                        class: [
                                          (_d4 = r2.ui) == null ? void 0 : _d4.linkTrailingIcon,
                                          (_e4 = n2.ui) == null ? void 0 : _e4.linkTrailingIcon
                                        ]
                                      }))
                                    }, null, 8, [
                                      `name`,
                                      `class`
                                    ])) : s(``, true)
                                  ];
                                })
                              ], 2)) : s(``, true)
                            ];
                          })
                        ], 10, Sn),
                        ((_c2 = n2.children) == null ? void 0 : _c2.length) && h3 ? (b(), c(`ul`, {
                          key: 0,
                          class: g(y2.value.listWithChildren({
                            class: [
                              (_d2 = r2.ui) == null ? void 0 : _d2.listWithChildren,
                              (_e2 = n2.ui) == null ? void 0 : _e2.listWithChildren
                            ]
                          }))
                        }, [
                          d(A(v2), {
                            items: n2.children,
                            level: l3 + 1
                          }, null, 8, [
                            `items`,
                            `level`
                          ])
                        ], 2)) : s(``, true)
                      ];
                    }),
                    _: 2
                  }, 1032, [
                    `level`,
                    `value`,
                    `onToggle`,
                    `onSelect`
                  ])
                ], 2);
              }), 128))
            ]),
            _: 3
          }),
          d(A(yt), m(A(h2), {
            class: y2.value.root({
              class: [
                (_a = r2.ui) == null ? void 0 : _a.root,
                r2.class
              ]
            }),
            "get-key": S2,
            "default-expanded": ee2.value,
            "selection-behavior": e2.selectionBehavior
          }), {
            default: N(() => [
              d(A(v2), {
                items: e2.items,
                level: 0
              }, null, 8, [
                `items`
              ])
            ]),
            _: 1
          }, 16, [
            `class`,
            `default-expanded`,
            `selection-behavior`
          ])
        ], 64);
      };
    }
  };
  var wn = Cn;
  const Tn = {
    __name: `ContextMenuContent`,
    props: {
      items: {
        type: null,
        required: false
      },
      portal: {
        type: [
          Boolean,
          String
        ],
        required: false,
        skipCheck: true
      },
      sub: {
        type: Boolean,
        required: false
      },
      labelKey: {
        type: null,
        required: true
      },
      checkedIcon: {
        type: String,
        required: false
      },
      loadingIcon: {
        type: String,
        required: false
      },
      externalIcon: {
        type: [
          Boolean,
          String
        ],
        required: false
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: null,
        required: true
      },
      uiOverride: {
        type: null,
        required: false
      },
      loop: {
        type: Boolean,
        required: false
      },
      alignOffset: {
        type: Number,
        required: false
      },
      avoidCollisions: {
        type: Boolean,
        required: false
      },
      collisionBoundary: {
        type: null,
        required: false
      },
      collisionPadding: {
        type: [
          Number,
          Object
        ],
        required: false
      },
      sticky: {
        type: String,
        required: false
      },
      hideWhenDetached: {
        type: Boolean,
        required: false
      },
      positionStrategy: {
        type: String,
        required: false
      },
      disableUpdateOnLayoutShift: {
        type: Boolean,
        required: false
      },
      prioritizePosition: {
        type: Boolean,
        required: false
      },
      reference: {
        type: null,
        required: false
      }
    },
    emits: [
      `escapeKeyDown`,
      `pointerDownOutside`,
      `focusOutside`,
      `interactOutside`,
      `closeAutoFocus`
    ],
    setup(e2, { emit: t2 }) {
      let r2 = e2, f2 = t2, h2 = j(), { dir: v2 } = se(), y2 = z(), x2 = xe(O(() => r2.portal)), S2 = B(fe(r2, `sub`, `items`, `portal`, `labelKey`, `checkedIcon`, `loadingIcon`, `externalIcon`, `class`, `ui`, `uiOverride`), f2), T2 = ae(h2, [
        `default`
      ]), [E2, k2] = de(), M2 = i(() => v2.value === `rtl` ? y2.ui.icons.chevronLeft : y2.ui.icons.chevronRight), P2 = i(() => {
        var _a;
        return ((_a = r2.items) == null ? void 0 : _a.length) ? ie(r2.items) ? r2.items : [
          r2.items
        ] : [];
      });
      return (t3, i2) => (b(), c(n, null, [
        d(A(E2), null, {
          default: N(({ item: i3, active: l2, index: f3 }) => [
            w(t3.$slots, i3.slot || `item`, {
              item: i3,
              index: f3
            }, () => {
              var _a, _b, _c, _d, _e2, _f;
              return [
                w(t3.$slots, i3.slot ? `${i3.slot}-leading` : `item-leading`, {
                  item: i3,
                  active: l2,
                  index: f3
                }, () => {
                  var _a2, _b2, _c2, _d2, _e3, _f2, _g, _h;
                  return [
                    i3.loading ? (b(), o(I, {
                      key: 0,
                      name: e2.loadingIcon || A(y2).ui.icons.loading,
                      class: g(e2.ui.itemLeadingIcon({
                        class: [
                          (_a2 = e2.uiOverride) == null ? void 0 : _a2.itemLeadingIcon,
                          (_b2 = i3.ui) == null ? void 0 : _b2.itemLeadingIcon
                        ],
                        color: i3 == null ? void 0 : i3.color,
                        loading: true
                      }))
                    }, null, 8, [
                      `name`,
                      `class`
                    ])) : i3.icon ? (b(), o(I, {
                      key: 1,
                      name: i3.icon,
                      class: g(e2.ui.itemLeadingIcon({
                        class: [
                          (_c2 = e2.uiOverride) == null ? void 0 : _c2.itemLeadingIcon,
                          (_d2 = i3.ui) == null ? void 0 : _d2.itemLeadingIcon
                        ],
                        color: i3 == null ? void 0 : i3.color,
                        active: l2
                      }))
                    }, null, 8, [
                      `name`,
                      `class`
                    ])) : i3.avatar ? (b(), o(Be, m({
                      key: 2,
                      size: ((_e3 = i3.ui) == null ? void 0 : _e3.itemLeadingAvatarSize) || ((_f2 = r2.uiOverride) == null ? void 0 : _f2.itemLeadingAvatarSize) || e2.ui.itemLeadingAvatarSize()
                    }, i3.avatar, {
                      class: e2.ui.itemLeadingAvatar({
                        class: [
                          (_g = e2.uiOverride) == null ? void 0 : _g.itemLeadingAvatar,
                          (_h = i3.ui) == null ? void 0 : _h.itemLeadingAvatar
                        ],
                        active: l2
                      })
                    }), null, 16, [
                      `size`,
                      `class`
                    ])) : s(``, true)
                  ];
                }),
                A(L)(i3, r2.labelKey) || h2[i3.slot ? `${i3.slot}-label` : `item-label`] ? (b(), c(`span`, {
                  key: 0,
                  class: g(e2.ui.itemLabel({
                    class: [
                      (_a = e2.uiOverride) == null ? void 0 : _a.itemLabel,
                      (_b = i3.ui) == null ? void 0 : _b.itemLabel
                    ],
                    active: l2
                  }))
                }, [
                  w(t3.$slots, i3.slot ? `${i3.slot}-label` : `item-label`, {
                    item: i3,
                    active: l2,
                    index: f3
                  }, () => [
                    u(D(A(L)(i3, r2.labelKey)), 1)
                  ]),
                  i3.target === `_blank` && e2.externalIcon !== false ? (b(), o(I, {
                    key: 0,
                    name: typeof e2.externalIcon == `string` ? e2.externalIcon : A(y2).ui.icons.external,
                    class: g(e2.ui.itemLabelExternalIcon({
                      class: [
                        (_c = e2.uiOverride) == null ? void 0 : _c.itemLabelExternalIcon,
                        (_d = i3.ui) == null ? void 0 : _d.itemLabelExternalIcon
                      ],
                      color: i3 == null ? void 0 : i3.color,
                      active: l2
                    }))
                  }, null, 8, [
                    `name`,
                    `class`
                  ])) : s(``, true)
                ], 2)) : s(``, true),
                a(`span`, {
                  class: g(e2.ui.itemTrailing({
                    class: [
                      (_e2 = e2.uiOverride) == null ? void 0 : _e2.itemTrailing,
                      (_f = i3.ui) == null ? void 0 : _f.itemTrailing
                    ]
                  }))
                }, [
                  w(t3.$slots, i3.slot ? `${i3.slot}-trailing` : `item-trailing`, {
                    item: i3,
                    active: l2,
                    index: f3
                  }, () => {
                    var _a2, _b2, _c2, _d2, _e3, _f2;
                    return [
                      ((_a2 = i3.children) == null ? void 0 : _a2.length) ? (b(), o(I, {
                        key: 0,
                        name: M2.value,
                        class: g(e2.ui.itemTrailingIcon({
                          class: [
                            (_b2 = e2.uiOverride) == null ? void 0 : _b2.itemTrailingIcon,
                            (_c2 = i3.ui) == null ? void 0 : _c2.itemTrailingIcon
                          ],
                          color: i3 == null ? void 0 : i3.color,
                          active: l2
                        }))
                      }, null, 8, [
                        `name`,
                        `class`
                      ])) : ((_d2 = i3.kbds) == null ? void 0 : _d2.length) ? (b(), c(`span`, {
                        key: 1,
                        class: g(e2.ui.itemTrailingKbds({
                          class: [
                            (_e3 = e2.uiOverride) == null ? void 0 : _e3.itemTrailingKbds,
                            (_f2 = i3.ui) == null ? void 0 : _f2.itemTrailingKbds
                          ]
                        }))
                      }, [
                        (b(true), c(n, null, C(i3.kbds, (t4, n2) => {
                          var _a3, _b3;
                          return b(), o(_e, m({
                            key: n2,
                            size: ((_a3 = i3.ui) == null ? void 0 : _a3.itemTrailingKbdsSize) || ((_b3 = r2.uiOverride) == null ? void 0 : _b3.itemTrailingKbdsSize) || e2.ui.itemTrailingKbdsSize()
                          }, {
                            ref_for: true
                          }, typeof t4 == `string` ? {
                            value: t4
                          } : t4), null, 16, [
                            `size`
                          ]);
                        }), 128))
                      ], 2)) : s(``, true)
                    ];
                  }),
                  d(A(V).ItemIndicator, {
                    "as-child": ``
                  }, {
                    default: N(() => {
                      var _a2, _b2;
                      return [
                        d(I, {
                          name: e2.checkedIcon || A(y2).ui.icons.check,
                          class: g(e2.ui.itemTrailingIcon({
                            class: [
                              (_a2 = e2.uiOverride) == null ? void 0 : _a2.itemTrailingIcon,
                              (_b2 = i3.ui) == null ? void 0 : _b2.itemTrailingIcon
                            ],
                            color: i3 == null ? void 0 : i3.color
                          }))
                        }, null, 8, [
                          `name`,
                          `class`
                        ])
                      ];
                    }),
                    _: 2
                  }, 1024)
                ], 2)
              ];
            })
          ]),
          _: 3
        }),
        d(A(V).Portal, _(p(A(x2))), {
          default: N(() => [
            (b(), o(ee(e2.sub ? A(V).SubContent : A(V).Content), m({
              class: r2.class
            }, A(S2)), {
              default: N(() => {
                var _a;
                return [
                  w(t3.$slots, `content-top`),
                  a(`div`, {
                    role: `presentation`,
                    class: g(e2.ui.viewport({
                      class: (_a = r2.ui) == null ? void 0 : _a.viewport
                    }))
                  }, [
                    (b(true), c(n, null, C(P2.value, (i3, a2) => {
                      var _a2;
                      return b(), o(A(V).Group, {
                        key: `group-${a2}`,
                        class: g(e2.ui.group({
                          class: (_a2 = e2.uiOverride) == null ? void 0 : _a2.group
                        }))
                      }, {
                        default: N(() => [
                          (b(true), c(n, null, C(i3, (i4, s2) => {
                            var _a3, _b, _c, _d, _e2, _f, _g;
                            return b(), c(n, {
                              key: `group-${a2}-${s2}`
                            }, [
                              i4.type === `label` ? (b(), o(A(V).Label, {
                                key: 0,
                                class: g(e2.ui.label({
                                  class: [
                                    (_a3 = e2.uiOverride) == null ? void 0 : _a3.label,
                                    (_b = i4.ui) == null ? void 0 : _b.label,
                                    i4.class
                                  ]
                                }))
                              }, {
                                default: N(() => [
                                  d(A(k2), {
                                    item: i4,
                                    index: s2
                                  }, null, 8, [
                                    `item`,
                                    `index`
                                  ])
                                ]),
                                _: 2
                              }, 1032, [
                                `class`
                              ])) : i4.type === `separator` ? (b(), o(A(V).Separator, {
                                key: 1,
                                class: g(e2.ui.separator({
                                  class: [
                                    (_c = e2.uiOverride) == null ? void 0 : _c.separator,
                                    (_d = i4.ui) == null ? void 0 : _d.separator,
                                    i4.class
                                  ]
                                }))
                              }, null, 8, [
                                `class`
                              ])) : ((_e2 = i4 == null ? void 0 : i4.children) == null ? void 0 : _e2.length) ? (b(), o(A(V).Sub, {
                                key: 2,
                                open: i4.open,
                                "default-open": i4.defaultOpen
                              }, {
                                default: N(() => {
                                  var _a4, _b2;
                                  return [
                                    d(A(V).SubTrigger, {
                                      as: `button`,
                                      type: `button`,
                                      disabled: i4.disabled,
                                      "text-value": A(L)(i4, r2.labelKey),
                                      class: g(e2.ui.item({
                                        class: [
                                          (_a4 = e2.uiOverride) == null ? void 0 : _a4.item,
                                          (_b2 = i4.ui) == null ? void 0 : _b2.item,
                                          i4.class
                                        ],
                                        color: i4 == null ? void 0 : i4.color
                                      }))
                                    }, {
                                      default: N(() => [
                                        d(A(k2), {
                                          item: i4,
                                          index: s2
                                        }, null, 8, [
                                          `item`,
                                          `index`
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, [
                                      `disabled`,
                                      `text-value`,
                                      `class`
                                    ]),
                                    d(En, m({
                                      sub: ``,
                                      class: r2.class,
                                      ui: e2.ui,
                                      "ui-override": e2.uiOverride,
                                      portal: e2.portal,
                                      items: i4.children,
                                      "align-offset": -4,
                                      "label-key": e2.labelKey,
                                      "checked-icon": e2.checkedIcon,
                                      "loading-icon": e2.loadingIcon,
                                      "external-icon": e2.externalIcon
                                    }, {
                                      ref_for: true
                                    }, i4.content), l({
                                      _: 2
                                    }, [
                                      C(A(T2), (e3, n2) => ({
                                        name: n2,
                                        fn: N((e4) => [
                                          w(t3.$slots, n2, m({
                                            ref_for: true
                                          }, e4))
                                        ])
                                      }))
                                    ]), 1040, [
                                      `class`,
                                      `ui`,
                                      `ui-override`,
                                      `portal`,
                                      `items`,
                                      `label-key`,
                                      `checked-icon`,
                                      `loading-icon`,
                                      `external-icon`
                                    ])
                                  ];
                                }),
                                _: 2
                              }, 1032, [
                                `open`,
                                `default-open`
                              ])) : i4.type === `checkbox` ? (b(), o(A(V).CheckboxItem, {
                                key: 3,
                                "model-value": i4.checked,
                                disabled: i4.disabled,
                                "text-value": A(L)(i4, r2.labelKey),
                                class: g(e2.ui.item({
                                  class: [
                                    (_f = e2.uiOverride) == null ? void 0 : _f.item,
                                    (_g = i4.ui) == null ? void 0 : _g.item,
                                    i4.class
                                  ],
                                  color: i4 == null ? void 0 : i4.color
                                })),
                                "onUpdate:modelValue": i4.onUpdateChecked,
                                onSelect: i4.onSelect
                              }, {
                                default: N(() => [
                                  d(A(k2), {
                                    item: i4,
                                    index: s2
                                  }, null, 8, [
                                    `item`,
                                    `index`
                                  ])
                                ]),
                                _: 2
                              }, 1032, [
                                `model-value`,
                                `disabled`,
                                `text-value`,
                                `class`,
                                `onUpdate:modelValue`,
                                `onSelect`
                              ])) : (b(), o(A(V).Item, {
                                key: 4,
                                "as-child": ``,
                                disabled: i4.disabled,
                                "text-value": A(L)(i4, r2.labelKey),
                                onSelect: i4.onSelect
                              }, {
                                default: N(() => [
                                  d(ne, m({
                                    ref_for: true
                                  }, A(oe)(i4), {
                                    custom: ``
                                  }), {
                                    default: N(({ active: t4, ...n2 }) => {
                                      var _a4, _b2;
                                      return [
                                        d(te, m({
                                          ref_for: true
                                        }, n2, {
                                          class: e2.ui.item({
                                            class: [
                                              (_a4 = e2.uiOverride) == null ? void 0 : _a4.item,
                                              (_b2 = i4.ui) == null ? void 0 : _b2.item,
                                              i4.class
                                            ],
                                            active: t4,
                                            color: i4 == null ? void 0 : i4.color
                                          })
                                        }), {
                                          default: N(() => [
                                            d(A(k2), {
                                              item: i4,
                                              active: t4,
                                              index: s2
                                            }, null, 8, [
                                              `item`,
                                              `active`,
                                              `index`
                                            ])
                                          ]),
                                          _: 2
                                        }, 1040, [
                                          `class`
                                        ])
                                      ];
                                    }),
                                    _: 2
                                  }, 1040)
                                ]),
                                _: 2
                              }, 1032, [
                                `disabled`,
                                `text-value`,
                                `onSelect`
                              ]))
                            ], 64);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, [
                        `class`
                      ]);
                    }), 128))
                  ], 2),
                  w(t3.$slots, `default`),
                  w(t3.$slots, `content-bottom`)
                ];
              }),
              _: 3
            }, 16, [
              `class`
            ]))
          ]),
          _: 3
        }, 16)
      ], 64));
    }
  };
  var En = Tn, Dn = {
    slots: {
      content: `min-w-32 bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-context-menu-content-transform-origin) flex flex-col`,
      viewport: `relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1`,
      group: `p-1 isolate`,
      label: `w-full flex items-center font-semibold text-highlighted`,
      separator: `-mx-1 my-1 h-px bg-border`,
      item: `group relative w-full flex items-center select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75`,
      itemLeadingIcon: `shrink-0`,
      itemLeadingAvatar: `shrink-0`,
      itemLeadingAvatarSize: ``,
      itemTrailing: `ms-auto inline-flex gap-1.5 items-center`,
      itemTrailingIcon: `shrink-0`,
      itemTrailingKbds: `hidden lg:inline-flex items-center shrink-0`,
      itemTrailingKbdsSize: ``,
      itemLabel: `truncate`,
      itemLabelExternalIcon: `inline-block size-3 align-top text-dimmed`
    },
    variants: {
      color: {
        primary: ``,
        secondary: ``,
        success: ``,
        info: ``,
        warning: ``,
        error: ``,
        neutral: ``
      },
      active: {
        true: {
          item: `text-highlighted before:bg-elevated`,
          itemLeadingIcon: `text-default`
        },
        false: {
          item: [
            `text-default data-highlighted:text-highlighted data-[state=open]:text-highlighted data-highlighted:before:bg-elevated/50 data-[state=open]:before:bg-elevated/50`,
            `transition-colors before:transition-colors`
          ],
          itemLeadingIcon: [
            `text-dimmed group-data-highlighted:text-default group-data-[state=open]:text-default`,
            `transition-colors`
          ]
        }
      },
      loading: {
        true: {
          itemLeadingIcon: `animate-spin`
        }
      },
      size: {
        xs: {
          label: `p-1 text-xs gap-1`,
          item: `p-1 text-xs gap-1`,
          itemLeadingIcon: `size-4`,
          itemLeadingAvatarSize: `3xs`,
          itemTrailingIcon: `size-4`,
          itemTrailingKbds: `gap-0.5`,
          itemTrailingKbdsSize: `sm`
        },
        sm: {
          label: `p-1.5 text-xs gap-1.5`,
          item: `p-1.5 text-xs gap-1.5`,
          itemLeadingIcon: `size-4`,
          itemLeadingAvatarSize: `3xs`,
          itemTrailingIcon: `size-4`,
          itemTrailingKbds: `gap-0.5`,
          itemTrailingKbdsSize: `sm`
        },
        md: {
          label: `p-1.5 text-sm gap-1.5`,
          item: `p-1.5 text-sm gap-1.5`,
          itemLeadingIcon: `size-5`,
          itemLeadingAvatarSize: `2xs`,
          itemTrailingIcon: `size-5`,
          itemTrailingKbds: `gap-0.5`,
          itemTrailingKbdsSize: `md`
        },
        lg: {
          label: `p-2 text-sm gap-2`,
          item: `p-2 text-sm gap-2`,
          itemLeadingIcon: `size-5`,
          itemLeadingAvatarSize: `2xs`,
          itemTrailingIcon: `size-5`,
          itemTrailingKbds: `gap-1`,
          itemTrailingKbdsSize: `md`
        },
        xl: {
          label: `p-2 text-base gap-2`,
          item: `p-2 text-base gap-2`,
          itemLeadingIcon: `size-6`,
          itemLeadingAvatarSize: `xs`,
          itemTrailingIcon: `size-6`,
          itemTrailingKbds: `gap-1`,
          itemTrailingKbdsSize: `lg`
        }
      }
    },
    compoundVariants: [
      {
        color: `primary`,
        active: false,
        class: {
          item: `text-primary data-highlighted:text-primary data-highlighted:before:bg-primary/10 data-[state=open]:before:bg-primary/10`,
          itemLeadingIcon: `text-primary/75 group-data-highlighted:text-primary group-data-[state=open]:text-primary`
        }
      },
      {
        color: `secondary`,
        active: false,
        class: {
          item: `text-secondary data-highlighted:text-secondary data-highlighted:before:bg-secondary/10 data-[state=open]:before:bg-secondary/10`,
          itemLeadingIcon: `text-secondary/75 group-data-highlighted:text-secondary group-data-[state=open]:text-secondary`
        }
      },
      {
        color: `success`,
        active: false,
        class: {
          item: `text-success data-highlighted:text-success data-highlighted:before:bg-success/10 data-[state=open]:before:bg-success/10`,
          itemLeadingIcon: `text-success/75 group-data-highlighted:text-success group-data-[state=open]:text-success`
        }
      },
      {
        color: `info`,
        active: false,
        class: {
          item: `text-info data-highlighted:text-info data-highlighted:before:bg-info/10 data-[state=open]:before:bg-info/10`,
          itemLeadingIcon: `text-info/75 group-data-highlighted:text-info group-data-[state=open]:text-info`
        }
      },
      {
        color: `warning`,
        active: false,
        class: {
          item: `text-warning data-highlighted:text-warning data-highlighted:before:bg-warning/10 data-[state=open]:before:bg-warning/10`,
          itemLeadingIcon: `text-warning/75 group-data-highlighted:text-warning group-data-[state=open]:text-warning`
        }
      },
      {
        color: `error`,
        active: false,
        class: {
          item: `text-error data-highlighted:text-error data-highlighted:before:bg-error/10 data-[state=open]:before:bg-error/10`,
          itemLeadingIcon: `text-error/75 group-data-highlighted:text-error group-data-[state=open]:text-error`
        }
      },
      {
        color: `primary`,
        active: true,
        class: {
          item: `text-primary before:bg-primary/10`,
          itemLeadingIcon: `text-primary`
        }
      },
      {
        color: `secondary`,
        active: true,
        class: {
          item: `text-secondary before:bg-secondary/10`,
          itemLeadingIcon: `text-secondary`
        }
      },
      {
        color: `success`,
        active: true,
        class: {
          item: `text-success before:bg-success/10`,
          itemLeadingIcon: `text-success`
        }
      },
      {
        color: `info`,
        active: true,
        class: {
          item: `text-info before:bg-info/10`,
          itemLeadingIcon: `text-info`
        }
      },
      {
        color: `warning`,
        active: true,
        class: {
          item: `text-warning before:bg-warning/10`,
          itemLeadingIcon: `text-warning`
        }
      },
      {
        color: `error`,
        active: true,
        class: {
          item: `text-error before:bg-error/10`,
          itemLeadingIcon: `text-error`
        }
      }
    ],
    defaultVariants: {
      size: `md`
    }
  };
  const On = {
    __name: `ContextMenu`,
    props: {
      size: {
        type: null,
        required: false
      },
      items: {
        type: null,
        required: false
      },
      checkedIcon: {
        type: String,
        required: false
      },
      loadingIcon: {
        type: String,
        required: false
      },
      externalIcon: {
        type: [
          Boolean,
          String
        ],
        required: false,
        default: true
      },
      content: {
        type: Object,
        required: false
      },
      portal: {
        type: [
          Boolean,
          String
        ],
        required: false,
        skipCheck: true,
        default: true
      },
      labelKey: {
        type: null,
        required: false,
        default: `label`
      },
      disabled: {
        type: Boolean,
        required: false
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: null,
        required: false
      },
      modal: {
        type: Boolean,
        required: false,
        default: true
      }
    },
    emits: [
      `update:open`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2, a2 = j(), c2 = z(), u2 = B(pe(n2, `modal`), r2), f2 = O(() => n2.content), h2 = ae(a2, [
        `default`
      ]), v2 = i(() => {
        var _a;
        return R({
          extend: R(Dn),
          ...((_a = c2.ui) == null ? void 0 : _a.contextMenu) || {}
        })({
          size: n2.size
        });
      });
      return (t3, r3) => (b(), o(A(De), _(p(A(u2))), {
        default: N(() => {
          var _a;
          return [
            a2.default ? (b(), o(A(Ee), {
              key: 0,
              "as-child": ``,
              disabled: e2.disabled,
              class: g(n2.class)
            }, {
              default: N(() => [
                w(t3.$slots, `default`)
              ]),
              _: 3
            }, 8, [
              `disabled`,
              `class`
            ])) : s(``, true),
            d(En, m({
              class: v2.value.content({
                class: [
                  !a2.default && n2.class,
                  (_a = n2.ui) == null ? void 0 : _a.content
                ]
              }),
              ui: v2.value,
              "ui-override": n2.ui
            }, f2.value, {
              items: e2.items,
              portal: e2.portal,
              "label-key": e2.labelKey,
              "checked-icon": e2.checkedIcon,
              "loading-icon": e2.loadingIcon,
              "external-icon": e2.externalIcon
            }), l({
              _: 2
            }, [
              C(A(h2), (e3, n3) => ({
                name: n3,
                fn: N((e4) => [
                  w(t3.$slots, n3, _(p(e4)))
                ])
              }))
            ]), 1040, [
              `class`,
              `ui`,
              `ui-override`,
              `items`,
              `portal`,
              `label-key`,
              `checked-icon`,
              `loading-icon`,
              `external-icon`
            ])
          ];
        }),
        _: 3
      }, 16));
    }
  };
  var kn = On, An = e(it());
  const jn = {
    class: `overflow-y-auto divide-y divide-(--ui-border)`
  }, Mn = {
    class: `flex items-center gap-1.5 w-full`
  };
  var Nn = f({
    __name: `FileExplorer`,
    emits: [
      `delete`,
      `rename`,
      `reset`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = X(), r2 = t2, l2 = S(void 0);
      M(l2, (e3) => {
        n2.activeViewEntryRelativePath = (e3 == null ? void 0 : e3.value) ?? null;
      });
      function f2(e3, t3, n3) {
        let r3 = n3 ? An.default.relative(n3, t3.relative_path) : t3.relative_path, i2 = r3.split(`/`), a2 = i2.shift(), o2 = i2.length === 0;
        if (o2) {
          e3.push({
            label: a2,
            value: t3.relative_path,
            icon: `vscode-icons:file-type-${t3.relative_path === `main.css` ? `tailwind` : An.default.extname(t3.relative_path).replace(`.`, ``)}`,
            slot: `tree-file`,
            entry: t3
          });
          return;
        }
        let s2 = e3.find((e4) => e4.label === a2);
        s2 || (s2 = {
          label: a2,
          children: [],
          onSelect: (e4) => {
            e4.preventDefault();
          }
        }, e3.push(s2)), f2(s2.children || (s2.children = []), t3, n3 ? An.default.join(n3, a2 || ``) : a2 || ``);
      }
      let p2 = i(() => {
        let e3 = [];
        return n2.data.entries.forEach((t3) => {
          t3.hidden || f2(e3, t3);
        }), e3.sort((e4, t3) => e4.children && !t3.children ? -1 : !e4.children && t3.children ? 1 : e4.label && t3.label ? e4.label.localeCompare(t3.label) : 0), e3;
      });
      M(() => n2.activeViewEntryRelativePath, (e3) => {
        if (!e3) {
          l2.value = void 0;
          return;
        }
        m2(e3);
      });
      function m2(e3) {
        let t3 = (n3) => {
          if (n3.value === e3) return l2.value = n3, true;
          if (n3.children) {
            for (let e4 of n3.children) if (t3(e4)) return true;
          }
          return false;
        };
        for (let e4 of p2.value) if (t3(e4)) break;
      }
      return v(() => {
        n2.activeViewEntryRelativePath && m2(n2.activeViewEntryRelativePath);
      }), (e3, t3) => {
        let n3 = I, i2 = kn, f3 = wn;
        return b(), c(`div`, jn, [
          d(f3, {
            items: p2.value,
            modelValue: l2.value,
            "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => l2.value = e4)
          }, {
            "tree-file": N(({ item: e4 }) => [
              d(i2, {
                items: [
                  {
                    label: `Reset`,
                    icon: `lucide:file-minus-2`,
                    disabled: e4.entry.relative_path !== `main.css`,
                    onSelect: () => {
                      r2(`reset`, e4.entry);
                    }
                  },
                  {
                    label: `Rename`,
                    icon: `i-lucide-edit`,
                    disabled: e4.entry.relative_path === `main.css`,
                    onSelect: () => {
                      r2(`rename`, e4.entry);
                    }
                  },
                  {
                    label: `Delete`,
                    icon: `i-lucide-trash-2`,
                    disabled: e4.entry.relative_path === `main.css`,
                    onSelect: () => {
                      r2(`delete`, e4.entry);
                    }
                  }
                ]
              }, {
                default: N(() => [
                  a(`div`, Mn, [
                    e4.icon ? (b(), o(n3, {
                      key: 0,
                      name: e4.icon,
                      class: `shrink-0 size-5`
                    }, null, 8, [
                      `name`
                    ])) : s(``, true),
                    u(` ` + D(e4.label), 1)
                  ])
                ]),
                _: 2
              }, 1032, [
                `items`
              ])
            ]),
            _: 1
          }, 8, [
            `items`,
            `modelValue`
          ])
        ]);
      };
    }
  }), Pn = Nn, Fn = e(it());
  const In = {
    class: `text-xs opacity-60 font-normal`
  }, Ln = {
    class: `flex-1 overflow-y-auto`
  };
  var Rn = f({
    __name: `FileEditor`,
    props: {
      entry: {}
    },
    emits: [
      `close`,
      `save`,
      `delete`,
      `reset`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = X(), r2 = qe(), i2 = he(), c2 = e2, l2 = t2, f2 = {
        automaticLayout: true,
        formatOnType: false,
        formatOnPaste: false,
        fontSize: 14
      }, p2 = E();
      function m2(e3, t3) {
        t3.languages.css.cssDefaults.setOptions(Object.assign(t3.languages.css.cssDefaults.options, {
          data: {
            useDefaultDataProvider: true,
            dataProviders: {
              tailwindcss: {
                version: 1.1,
                atDirectives: [
                  {
                    name: `@theme`,
                    status: `standard`,
                    description: wp.i18n.__("Theme variables are special CSS variables defined using the `@theme` directive that influence which utility classes exist in your project.", `windpress`),
                    references: [
                      {
                        name: wp.i18n.__(`Docs: Theme variables`, `windpress`),
                        url: `https://tailwindcss.com/docs/theme`
                      }
                    ]
                  },
                  {
                    name: `@plugin`,
                    status: `standard`,
                    description: wp.i18n.__("Use the `@plugin` directive to load a legacy JavaScript-based plugin.", `windpress`),
                    references: [
                      {
                        name: wp.i18n.__(`Docs: Functions & Directives`, `windpress`),
                        url: `https://tailwindcss.com/docs/functions-and-directives#plugin-directive`
                      },
                      {
                        name: wp.i18n.__(`Docs: Tailwind CSS plugins`, `windpress`),
                        url: `https://wind.press/docs/configuration/file-main-css#tailwind-css-plugins`
                      }
                    ]
                  },
                  {
                    name: `@config`,
                    status: `standard`,
                    description: wp.i18n.__("Use the `@config` directive to load a legacy JavaScript-based configuration file.", `windpress`),
                    references: [
                      {
                        name: wp.i18n.__(`Docs: Functions & Directives`, `windpress`),
                        url: `https://tailwindcss.com/docs/functions-and-directives#config-directive`
                      },
                      {
                        name: wp.i18n.__(`Docs: Tailwind CSS configuration`, `windpress`),
                        url: `https://wind.press/docs/configuration/file-main-css#tailwind-css-configuration`
                      }
                    ]
                  },
                  {
                    name: `@tailwind`,
                    status: `standard`,
                    description: wp.i18n.__("Use the `@tailwind` directive to insert Tailwind's `base`, `components`, `utilities` and `variants` styles into your CSS.", `windpress`),
                    references: [
                      {
                        name: wp.i18n.__(`Docs: Tailwind CSS functions & directives`, `windpress`),
                        url: `https://v3.tailwindcss.com/docs/functions-and-directives#tailwind`
                      }
                    ]
                  },
                  {
                    name: `@apply`,
                    status: `standard`,
                    description: wp.i18n.__("Use the `@apply` directive to inline any existing utility classes into your own custom CSS.", `windpress`),
                    references: [
                      {
                        name: wp.i18n.__(`Docs: Tailwind CSS functions & directives`, `windpress`),
                        url: `https://tailwindcss.com/docs/functions-and-directives#apply-directive`
                      }
                    ]
                  },
                  {
                    name: `@utility`,
                    status: `standard`,
                    description: wp.i18n.__("Use the `@utility` directive to add custom utilities to your project that work with variants like `hover`, `focus` and `lg``.", `windpress`),
                    references: [
                      {
                        name: wp.i18n.__(`Docs: Tailwind CSS functions & directives`, `windpress`),
                        url: `https://tailwindcss.com/docs/functions-and-directives#utility-directive`
                      }
                    ]
                  },
                  {
                    name: `@custom-variant`,
                    status: `standard`,
                    description: wp.i18n.__("Use the `@custom-variant` directive to add a custom variant in your project.", `windpress`),
                    references: [
                      {
                        name: wp.i18n.__(`Docs: Tailwind CSS functions & directives`, `windpress`),
                        url: `https://tailwindcss.com/docs/functions-and-directives#custom-variant-directive`
                      }
                    ]
                  },
                  {
                    name: `@variant`,
                    status: `standard`,
                    description: wp.i18n.__("Use the `@variant` directive to apply a Tailwind variant to styles in your CSS.", `windpress`),
                    references: [
                      {
                        name: wp.i18n.__(`Docs: Tailwind CSS functions & directives`, `windpress`),
                        url: `https://tailwindcss.com/docs/functions-and-directives#variant-directive`
                      }
                    ]
                  },
                  {
                    name: `@source`,
                    status: `standard`,
                    description: wp.i18n.__("Use the `@source` directive to scan additional source files.", `windpress`),
                    references: [
                      {
                        name: wp.i18n.__(`Docs: Scanning additional Sources`, `windpress`),
                        url: `https://wind.press/docs/configuration/file-main-css#scanning-additional-sources`
                      }
                    ]
                  }
                ]
              }
            }
          }
        })), p2.value = e3, t3.languages.registerCompletionItemProvider(`css`, {
          async provideCompletionItems(e4, i3) {
            let a2 = e4.getWordUntilPosition(i3), o2 = [];
            return Number(r2.virtualOptions(`general.tailwindcss.version`, 4).value) === 4 && (o2 = (await ot(await st({
              volume: n2.getKVEntries()
            }))).map((e5) => ({
              kind: e5.key.includes(`--color`) ? t3.languages.CompletionItemKind.Color : t3.languages.CompletionItemKind.Variable,
              label: e5.key,
              insertText: e5.key,
              detail: e5.value,
              range: {
                startLineNumber: i3.lineNumber,
                startColumn: a2.startColumn,
                endLineNumber: i3.lineNumber,
                endColumn: a2.endColumn
              },
              sortText: ct(e5.index)
            }))), {
              suggestions: o2
            };
          }
        }), t3.editor.addEditorAction({
          id: `save`,
          label: wp.i18n.__(`Save`, `windpress`),
          keybindings: [
            t3.KeyMod.CtrlCmd | t3.KeyCode.KeyS
          ],
          run: () => {
            l2(`save`);
          }
        });
      }
      return (e3, t3) => {
        let n3 = G, p3 = ve, h2 = I, g2 = ge, _2 = dt, v2 = T(`vue-monaco-editor`), y2 = ft;
        return b(), o(y2, {
          id: `explorer-2`,
          class: `min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]`
        }, {
          default: N(() => {
            var _a;
            return [
              d(_2, {
                title: (_a = e3.entry) == null ? void 0 : _a.relative_path,
                toggle: false,
                ui: {
                  title: `text-sm`
                }
              }, {
                leading: N(() => [
                  d(p3, {
                    text: e3.i18n.__(`Close`, `windpress`)
                  }, {
                    default: N(() => [
                      d(n3, {
                        icon: `i-lucide-x`,
                        color: `neutral`,
                        variant: `ghost`,
                        class: `-ms-1.5`,
                        onClick: t3[0] || (t3[0] = (e4) => l2(`close`))
                      })
                    ]),
                    _: 1
                  }, 8, [
                    `text`
                  ])
                ]),
                title: N(() => {
                  var _a2, _b, _c, _d, _e2;
                  return [
                    d(h2, {
                      name: `vscode-icons:file-type-${((_a2 = e3.entry) == null ? void 0 : _a2.relative_path) === `main.css` ? `tailwind` : A(Fn.default).extname(((_b = e3.entry) == null ? void 0 : _b.relative_path) ?? ``).replace(`.`, ``)}`,
                      class: `size-5`
                    }, null, 8, [
                      `name`
                    ]),
                    u(` ` + D((_c = e3.entry) == null ? void 0 : _c.relative_path) + ` `, 1),
                    c2.entry.readonly ? (b(), o(g2, {
                      key: 0,
                      label: e3.i18n.__(`read-only`, `windpress`),
                      color: `warning`,
                      variant: `outline`
                    }, null, 8, [
                      `label`
                    ])) : s(``, true),
                    ((_d = e3.entry) == null ? void 0 : _d.path_on_disk) ? (b(), o(p3, {
                      key: 1,
                      text: `${e3.i18n.__(`Path on disk`, `windpress`)}: ${(_e2 = e3.entry) == null ? void 0 : _e2.path_on_disk}`
                    }, {
                      default: N(() => {
                        var _a3;
                        return [
                          a(`span`, In, [
                            t3[5] || (t3[5] = u(` [ `)),
                            d(h2, {
                              name: `i-lucide-hard-drive`,
                              class: `inline-block align-middle me-1`
                            }),
                            u(` ` + D((_a3 = e3.entry) == null ? void 0 : _a3.path_on_disk) + ` ] `, 1)
                          ])
                        ];
                      }),
                      _: 1
                    }, 8, [
                      `text`
                    ])) : s(``, true)
                  ];
                }),
                right: N(() => {
                  var _a2, _b, _c, _d, _e2, _f;
                  return [
                    ((_a2 = e3.entry) == null ? void 0 : _a2.relative_path) !== `main.css` && !(Number(A(r2).virtualOptions(`general.tailwindcss.version`, 4).value) === 3 && (((_b = e3.entry) == null ? void 0 : _b.relative_path) === `tailwind.config.js` || ((_c = e3.entry) == null ? void 0 : _c.relative_path) === `wizard.js`)) ? (b(), o(p3, {
                      key: 0,
                      text: e3.i18n.__(`Delete`, `windpress`)
                    }, {
                      default: N(() => [
                        d(n3, {
                          icon: `i-lucide-trash`,
                          color: `neutral`,
                          variant: `ghost`,
                          onClick: t3[1] || (t3[1] = (t4) => l2(`delete`, e3.entry))
                        })
                      ]),
                      _: 1
                    }, 8, [
                      `text`
                    ])) : s(``, true),
                    ((_d = e3.entry) == null ? void 0 : _d.relative_path) === `main.css` || Number(A(r2).virtualOptions(`general.tailwindcss.version`, 4).value) === 3 && (((_e2 = e3.entry) == null ? void 0 : _e2.relative_path) === `tailwind.config.js` || ((_f = e3.entry) == null ? void 0 : _f.relative_path) === `wizard.js`) ? (b(), o(p3, {
                      key: 1,
                      text: e3.i18n.__(`Reset to default`, `windpress`)
                    }, {
                      default: N(() => [
                        d(n3, {
                          icon: `lucide:file-minus-2`,
                          color: `neutral`,
                          variant: `ghost`,
                          onClick: t3[2] || (t3[2] = (t4) => l2(`reset`, e3.entry))
                        })
                      ]),
                      _: 1
                    }, 8, [
                      `text`
                    ])) : s(``, true),
                    d(p3, {
                      text: e3.i18n.__(`Save`, `windpress`)
                    }, {
                      default: N(() => [
                        d(n3, {
                          icon: `i-lucide-save`,
                          color: `primary`,
                          variant: `subtle`,
                          onClick: t3[3] || (t3[3] = (e4) => l2(`save`))
                        })
                      ]),
                      _: 1
                    }, 8, [
                      `text`
                    ])
                  ];
                }),
                _: 1
              }, 8, [
                `title`
              ]),
              a(`div`, Ln, [
                d(v2, {
                  value: c2.entry.content,
                  "onUpdate:value": t3[4] || (t3[4] = (e4) => c2.entry.content = e4),
                  language: c2.entry.relative_path.endsWith(`.css`) ? `css` : `javascript`,
                  saveViewState: false,
                  options: {
                    ...f2,
                    readOnly: c2.entry.readonly
                  },
                  onMount: m2,
                  theme: A(i2) === `dark` ? `vs-dark` : `vs`
                }, null, 8, [
                  `value`,
                  `language`,
                  `options`,
                  `theme`
                ])
              ])
            ];
          }),
          _: 1
        });
      };
    }
  }), zn = Rn, Bn = e(it());
  const Vn = {
    class: `flex`
  }, Hn = [
    `innerHTML`
  ], Un = {
    class: `flex gap-2`
  };
  var Wn = f({
    __name: `ConfirmFileActionModal`,
    props: {
      filePath: {},
      fileContent: {},
      actionYes: {},
      actionNo: {}
    },
    emits: [
      `close`
    ],
    setup(e2, { emit: n2 }) {
      let i2 = e2, s2 = he(), c2 = S(null);
      (async () => {
        c2.value = await lt({
          themes: [
            t(() => import("./dark-plus-D4XJxKHb.min.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url),
            t(() => import("./light-plus-R5ROxfAZ.min.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url)
          ],
          langs: [
            t(() => import("./css-BOx46xv6.min.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url),
            t(() => import("./javascript-BOX70fFg.min.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url)
          ],
          engine: ut(t(() => import("./wasm-DXBPGgMc.min.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), [], import.meta.url))
        });
      })();
      let f2 = ue(async () => {
        if (!i2.fileContent || !c2.value) return;
        let e3 = Bn.default.extname(i2.filePath).replace(`.`, ``);
        return c2.value.codeToHtml(i2.fileContent, {
          lang: e3 === `css` ? `css` : `javascript`,
          theme: s2.value === `dark` ? `dark-plus` : `light-plus`
        });
      }), p2 = n2;
      return (e3, t2) => {
        let n3 = G, i3 = U;
        return b(), o(i3, {
          close: {
            onClick: () => p2(`close`, false)
          }
        }, l({
          title: N(() => [
            u(D(e3.i18n.sprintf(e3.i18n.__(`Are you sure you want to %s the "%s" file?`, `windpress`), e3.actionYes, e3.filePath)), 1)
          ]),
          footer: N(() => [
            a(`div`, Un, [
              d(n3, {
                color: `neutral`,
                variant: `soft`,
                label: e3.i18n.__(`cancel`, `windpress`),
                onClick: t2[0] || (t2[0] = (e4) => p2(`close`, false)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ]),
              d(n3, {
                color: `error`,
                variant: `soft`,
                label: e3.actionYes,
                onClick: t2[1] || (t2[1] = (e4) => p2(`close`, true)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ])
            ])
          ]),
          _: 2
        }, [
          e3.fileContent ? {
            name: `body`,
            fn: N(() => [
              (b(), o(r, null, {
                default: N(() => [
                  a(`div`, Vn, [
                    a(`div`, {
                      innerHTML: A(f2),
                      class: `flex [&>pre]:p-4 [&>pre]:mr-6`
                    }, null, 8, Hn)
                  ])
                ]),
                _: 1
              }))
            ]),
            key: `0`
          } : void 0
        ]), 1032, [
          `close`
        ]);
      };
    }
  }), Gn = Wn, Kn = e(mt());
  const qn = {
    class: `flex flex-col gap-4 text-(--ui-text)`
  }, Jn = {
    class: `font-bold uppercase my-2`
  }, Yn = {
    class: `w-full`
  }, Xn = {
    class: `font-semibold w-1/3`
  }, Zn = {
    class: ``
  }, Qn = {
    class: `font-semibold w-1/5`
  }, $n = {
    class: ``
  }, er = {
    class: `font-semibold w-1/5`
  }, tr = {
    class: ``
  }, nr = {
    class: `font-semibold w-1/5`
  }, rr = {
    class: ``
  }, ir = {
    class: `flex gap-2`
  };
  var ar = f({
    __name: `ConfirmVolumeImportModal`,
    props: {
      data: {}
    },
    emits: [
      `close`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2;
      return (e3, t3) => {
        let i2 = G, s2 = U;
        return b(), o(s2, {
          close: {
            onClick: () => r2(`close`, false)
          }
        }, {
          title: N(() => [
            u(D(e3.i18n.__(`Import SFS volume`, `windpress`)), 1)
          ]),
          body: N(() => [
            a(`div`, qn, [
              a(`div`, null, [
                a(`div`, Jn, D(e3.i18n.__(`File info`, `windpress`)), 1),
                a(`table`, Yn, [
                  a(`tbody`, null, [
                    a(`tr`, null, [
                      a(`td`, Xn, D(e3.i18n.__(`WindPress version`, `windpress`)), 1),
                      t3[2] || (t3[2] = a(`td`, {
                        class: ``
                      }, `:`, -1)),
                      a(`td`, Zn, D(n2.data._version), 1)
                    ]),
                    a(`tr`, null, [
                      a(`td`, Qn, D(e3.i18n.__(`WP Version`, `windpress`)), 1),
                      t3[3] || (t3[3] = a(`td`, {
                        class: ``
                      }, `:`, -1)),
                      a(`td`, $n, D(n2.data._wp_version), 1)
                    ]),
                    a(`tr`, null, [
                      a(`td`, er, D(e3.i18n.__(`Exported on`, `windpress`)), 1),
                      t3[4] || (t3[4] = a(`td`, {
                        class: ``
                      }, `:`, -1)),
                      a(`td`, tr, D(A(Kn.default)(n2.data._timestamp).format(`YYYY-MM-DD HH:mm:ss`)), 1)
                    ]),
                    a(`tr`, null, [
                      a(`td`, nr, D(e3.i18n.__(`Entries`, `windpress`)), 1),
                      t3[5] || (t3[5] = a(`td`, {
                        class: ``
                      }, `:`, -1)),
                      a(`td`, rr, D(n2.data.entries.length), 1)
                    ])
                  ])
                ])
              ]),
              u(` ` + D(e3.i18n.__(`This will overwrite all existing files. Are you sure you want to continue?`, `windpress`)), 1)
            ])
          ]),
          footer: N(() => [
            a(`div`, ir, [
              d(i2, {
                color: `neutral`,
                variant: `soft`,
                label: e3.i18n.__(`cancel`, `windpress`),
                onClick: t3[0] || (t3[0] = (e4) => r2(`close`, false)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ]),
              d(i2, {
                color: `warning`,
                variant: `soft`,
                label: e3.i18n.__(`Yes, continue`, `windpress`),
                onClick: t3[1] || (t3[1] = (e4) => r2(`close`, true)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ])
            ])
          ]),
          _: 1
        }, 8, [
          `close`
        ]);
      };
    }
  }), or = ar;
  const sr = {
    class: `flex gap-2`
  };
  var cr = f({
    __name: `NewFileFormModal`,
    emits: [
      `close`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = X(), r2 = t2, i2 = S(``), s2 = S(false);
      M(() => i2.value, () => {
        s2.value = false;
      });
      function c2() {
        if (s2.value = false, !i2.value) {
          s2.value = wp.i18n.__(`Filename is required`, `windpress`);
          return;
        }
        if (!i2.value.endsWith(`.css`) && !i2.value.endsWith(`.js`)) {
          s2.value = wp.i18n.__(`File extension must be .css or .js`, `windpress`);
          return;
        }
        if (!/^[a-zA-Z0-9_.\-\/]+$/.test(i2.value)) {
          s2.value = wp.i18n.__(`Only alphanumeric, dash, underscore, forward slash, and dot are allowed`, `windpress`);
          return;
        }
        if (n2.data.entries.find((e3) => e3.relative_path === `${i2.value}` && e3.hidden !== true)) {
          s2.value = wp.i18n.sprintf(wp.i18n.__(`A file named "%s" already exists`, `windpress`), i2.value);
          return;
        }
        r2(`close`, i2.value);
      }
      return (e3, t3) => {
        let n3 = nt, l2 = Re, f2 = G, p2 = U;
        return b(), o(p2, {
          close: {
            onClick: () => r2(`close`)
          }
        }, {
          title: N(() => [
            u(D(e3.i18n.__(`Create New File`, `windpress`)), 1)
          ]),
          body: N(() => [
            d(l2, {
              label: `Filename`,
              required: ``,
              description: e3.i18n.__(`Filename may include a path. (css or js)`, `windpress`),
              error: s2.value
            }, {
              default: N(() => [
                d(n3, {
                  modelValue: i2.value,
                  "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => i2.value = e4),
                  placeholder: `theme/color.css`,
                  class: `w-full`
                }, null, 8, [
                  `modelValue`
                ])
              ]),
              _: 1
            }, 8, [
              `description`,
              `error`
            ])
          ]),
          footer: N(() => [
            a(`div`, sr, [
              d(f2, {
                color: `neutral`,
                variant: `soft`,
                label: e3.i18n.__(`cancel`, `windpress`),
                onClick: t3[1] || (t3[1] = (e4) => r2(`close`)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ]),
              d(f2, {
                color: `primary`,
                variant: `soft`,
                label: e3.i18n.__(`Submit`, `windpress`),
                onClick: c2,
                class: `capitalize`
              }, null, 8, [
                `label`
              ])
            ])
          ]),
          _: 1
        }, 8, [
          `close`
        ]);
      };
    }
  }), lr = cr;
  const ur = {
    class: `flex gap-2`
  };
  var dr = f({
    __name: `RenameFileFormModal`,
    props: {
      filePath: {}
    },
    emits: [
      `close`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = X(), r2 = t2, i2 = e2, s2 = S(i2.filePath), c2 = S(false);
      M(() => s2.value, () => {
        c2.value = false;
      });
      function l2() {
        if (c2.value = false, !s2.value) {
          c2.value = wp.i18n.__(`Filename is required`, `windpress`);
          return;
        }
        if (!s2.value.endsWith(`.css`) && !s2.value.endsWith(`.js`)) {
          c2.value = wp.i18n.__(`File extension must be .css or .js`, `windpress`);
          return;
        }
        if (!/^[a-zA-Z0-9_.\-\/]+$/.test(s2.value)) {
          c2.value = wp.i18n.__(`Only alphanumeric, dash, underscore, forward slash, and dot are allowed`, `windpress`);
          return;
        }
        if (n2.data.entries.find((e3) => e3.relative_path === `${s2.value}` && e3.hidden !== true)) {
          c2.value = wp.i18n.sprintf(wp.i18n.__(`A file named "%s" already exists`, `windpress`), s2.value);
          return;
        }
        r2(`close`, s2.value);
      }
      return (e3, t3) => {
        let n3 = nt, f2 = Re, p2 = G, m2 = U;
        return b(), o(m2, {
          close: {
            onClick: () => r2(`close`)
          }
        }, {
          title: N(() => [
            u(D(e3.i18n.__(`Rename File`, `windpress`)), 1)
          ]),
          body: N(() => [
            d(f2, {
              label: `Old Filename`,
              description: e3.i18n.__(`The previous filename`, `windpress`),
              class: `mb-2`
            }, {
              default: N(() => [
                d(n3, {
                  value: i2.filePath,
                  disabled: true,
                  class: `w-full`
                }, null, 8, [
                  `value`
                ])
              ]),
              _: 1
            }, 8, [
              `description`
            ]),
            d(f2, {
              label: `New Filename`,
              required: ``,
              description: e3.i18n.__(`Filename may include a path. (css or js)`, `windpress`),
              error: c2.value
            }, {
              default: N(() => [
                d(n3, {
                  modelValue: s2.value,
                  "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => s2.value = e4),
                  placeholder: `theme/color.css`,
                  class: `w-full`
                }, null, 8, [
                  `modelValue`
                ])
              ]),
              _: 1
            }, 8, [
              `description`,
              `error`
            ])
          ]),
          footer: N(() => [
            a(`div`, ur, [
              d(p2, {
                color: `neutral`,
                variant: `soft`,
                label: e3.i18n.__(`cancel`, `windpress`),
                onClick: t3[1] || (t3[1] = (e4) => r2(`close`)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ]),
              d(p2, {
                color: `primary`,
                variant: `soft`,
                label: e3.i18n.__(`Submit`, `windpress`),
                onClick: l2,
                class: `capitalize`
              }, null, 8, [
                `label`
              ])
            ])
          ]),
          _: 1
        }, 8, [
          `close`
        ]);
      };
    }
  }), fr = dr, pr = e(mt());
  const Z = X(), Q = ze(), $ = Le();
  async function mr(e2) {
    if (e2.readonly) {
      Q.add({
        title: wp.i18n.__(`Error`, `windpress`),
        description: wp.i18n.sprintf(wp.i18n.__(`File "%s" is read-only and not deletable`, `windpress`), e2.relative_path),
        color: `error`,
        icon: `i-lucide-trash`
      });
      return;
    }
    if (e2.relative_path === `main.css`) {
      Q.add({
        title: wp.i18n.__(`Error`, `windpress`),
        description: wp.i18n.sprintf(wp.i18n.__(`File "%s" is required for the WindPress to work and not deletable`, `windpress`), e2.relative_path),
        color: `error`,
        icon: `i-lucide-trash`
      });
      return;
    }
    let t2 = $.create(Gn, {
      destroyOnClose: true,
      props: {
        filePath: e2.relative_path,
        fileContent: e2.content,
        actionYes: wp.i18n.__(`delete`, `windpress`)
      }
    }), n2 = await t2.open().result;
    if (!n2) {
      Q.add({
        title: wp.i18n.__(`Canceled`, `windpress`),
        description: wp.i18n.sprintf(wp.i18n.__(`File "%s" is not deleted`, `windpress`), e2.relative_path),
        color: `info`,
        icon: `i-lucide-trash`
      });
      return;
    }
    Z.softDeleteEntry(e2), Q.add({
      title: wp.i18n.__(`Success`, `windpress`),
      description: wp.i18n.sprintf(wp.i18n.__(`File "%s" deleted`, `windpress`), e2.relative_path),
      color: `success`,
      icon: `i-lucide-trash`
    });
  }
  async function hr(e2) {
    let t2 = $.create(Gn, {
      destroyOnClose: true,
      props: {
        filePath: e2.relative_path,
        fileContent: e2.content,
        actionYes: wp.i18n.__(`reset`, `windpress`)
      }
    }), n2 = await t2.open().result;
    if (!n2) {
      Q.add({
        title: wp.i18n.__(`Canceled`, `windpress`),
        description: wp.i18n.sprintf(wp.i18n.__(`File "%s" is not reset`, `windpress`), e2.relative_path),
        color: `info`,
        icon: `lucide:file-minus-2`
      });
      return;
    }
    Z.resetEntry(e2), Q.add({
      title: wp.i18n.__(`Success`, `windpress`),
      description: wp.i18n.sprintf(wp.i18n.__(`File "%s" reset`, `windpress`), e2.relative_path),
      color: `success`,
      icon: `lucide:file-minus-2`
    }), gr().then(() => {
      Z.doPull();
    });
  }
  async function gr() {
    let e2 = {
      title: wp.i18n.__(`Saving...`, `windpress`),
      description: wp.i18n.__(`Please wait while we save your changes.`, `windpress`),
      duration: 0,
      icon: `lucide:loader-circle`,
      close: false,
      color: `neutral`,
      ui: {
        icon: `animate-spin`
      }
    };
    return Q.toasts.value.find((e3) => e3.id === `file-editor.doSave`) ? Q.update(`file-editor.doSave`, {
      ...e2
    }) : Q.add({
      id: `file-editor.doSave`,
      ...e2
    }), Z.doPush().then(() => {
      Q.update(`file-editor.doSave`, {
        title: wp.i18n.__(`Saved`, `windpress`),
        description: wp.i18n.__(`Your changes have been saved.`, `windpress`),
        icon: `i-lucide-save`,
        color: `success`,
        duration: void 0,
        close: true,
        ui: {
          icon: void 0
        }
      });
    }).catch((e3) => {
      Q.update(`file-editor.doSave`, {
        title: wp.i18n.__(`Error`, `windpress`),
        description: wp.i18n.__(`An error occurred while saving your changes.`, `windpress`),
        icon: `i-lucide-save`,
        color: `error`,
        duration: void 0,
        close: true,
        ui: {
          icon: void 0
        }
      });
    }).finally(() => {
      let e3 = new BroadcastChannel(`windpress`);
      [
        `windpress/observer`,
        `windpress/intellisense`
      ].forEach((t2) => {
        e3.postMessage({
          source: `windpress/dashboard`,
          target: t2,
          task: `windpress.code-editor.saved`,
          payload: {
            volume: at(Z.getKVEntries())
          }
        });
      }), e3.close();
    });
  }
  function _r() {
    let e2 = {
      entries: Z.data.entries,
      _windpress: true,
      _version: window.windpress._version,
      _wp_version: window.windpress._wp_version,
      _timestamp: (/* @__PURE__ */ new Date()).getTime(),
      _uid: He(),
      _type: `sfs`
    }, t2 = rt.compressToUint8Array(JSON.stringify(e2)), n2 = new Blob([
      t2
    ], {
      type: `application/octet-stream`
    }), r2 = URL.createObjectURL(n2), i2 = document.createElement(`a`);
    i2.href = r2, i2.download = `sfs-${(0, pr.default)().format(`YYYYMMDDHHmmss`)}.windpress`, i2.click(), URL.revokeObjectURL(r2), Q.add({
      title: wp.i18n.__(`Exported`, `windpress`),
      description: wp.i18n.__(`SFS volume data exported`, `windpress`),
      color: `success`,
      icon: `i-lucide-download`
    });
  }
  async function vr(e2) {
    let t2 = e2.target;
    if (!t2 || !t2.files || t2.files.length === 0) return;
    let n2 = t2.files[0];
    if (!n2) return;
    if (!n2.name.endsWith(`.windpress`)) {
      Q.add({
        title: wp.i18n.__(`SFS Import`, `windpress`),
        description: wp.i18n.__(`Invalid file format`, `windpress`),
        color: `error`,
        icon: `i-lucide-upload`
      });
      return;
    }
    let r2;
    try {
      if (r2 = JSON.parse(rt.decompressFromUint8Array(new Uint8Array(await n2.arrayBuffer())) || `{}`), !r2._windpress || r2._type !== `sfs`) throw Error(wp.i18n.__(`File is not a valid WindPress file`, `windpress`));
    } catch (e3) {
      Q.add({
        title: wp.i18n.__(`SFS Import`, `windpress`),
        description: e3 instanceof Error ? e3.message : wp.i18n.__(`An unknown error occurred`, `windpress`),
        color: `error`,
        icon: `i-lucide-upload`
      });
      return;
    }
    let i2 = $.create(or, {
      destroyOnClose: true,
      props: {
        data: r2
      }
    }), a2 = await i2.open().result;
    if (!a2) {
      Q.add({
        title: wp.i18n.__(`Canceled`, `windpress`),
        description: wp.i18n.__(`SFS import canceled`, `windpress`),
        color: `info`,
        icon: `i-lucide-upload`
      }), t2.value = ``;
      return;
    }
    Q.add({
      id: `file-import.doImport`,
      title: wp.i18n.__(`Importing...`, `windpress`),
      description: wp.i18n.__(`Please wait while we import the data.`, `windpress`),
      icon: `lucide:loader-circle`,
      close: false,
      duration: 0,
      color: `neutral`,
      ui: {
        icon: `animate-spin`
      }
    }), await new Promise((e3) => setTimeout(e3, 500));
    try {
      let e3 = r2.entries.map((e4) => {
        if (e4.signature && e4.handler === `internal`) {
          let { signature: t3, ...n3 } = e4;
          return n3;
        }
        return e4;
      });
      Z.data.entries = e3, Q.update(`file-import.doImport`, {
        title: wp.i18n.__(`Success`, `windpress`),
        description: wp.i18n.__(`SFS data imported. Remember to save the changes.`, `windpress`),
        color: `success`,
        icon: `i-lucide-upload`,
        duration: void 0,
        close: true,
        ui: {
          icon: void 0
        }
      }), t2.value = ``;
    } catch (e3) {
      Q.update(`file-import.doImport`, {
        title: wp.i18n.__(`Error`, `windpress`),
        description: e3 instanceof Error ? e3.message : wp.i18n.__(`An unknown error occurred`, `windpress`),
        color: `error`,
        icon: `i-lucide-upload`,
        close: true,
        duration: void 0,
        ui: {
          icon: void 0
        }
      }), t2.value = ``;
    }
  }
  async function yr() {
    let e2 = $.create(lr, {
      destroyOnClose: true
    }), t2 = await e2.open().result;
    if (!t2) {
      Q.add({
        title: wp.i18n.__(`Canceled`, `windpress`),
        description: wp.i18n.__(`New file creation canceled`, `windpress`),
        color: `info`,
        icon: `i-lucide-plus`
      });
      return;
    }
    try {
      Z.addNewEntry(t2), Q.add({
        title: wp.i18n.__(`Success`, `windpress`),
        description: wp.i18n.sprintf(wp.i18n.__(`File "%s" created`, `windpress`), t2),
        color: `success`,
        icon: `i-lucide-plus`
      });
    } catch (e3) {
      Q.add({
        title: wp.i18n.__(`Error`, `windpress`),
        description: e3 instanceof Error ? e3.message : wp.i18n.__(`An unknown error occurred`, `windpress`),
        color: `error`,
        icon: `i-lucide-plus`
      });
    }
  }
  async function br(e2) {
    let t2 = await $.create(fr, {
      destroyOnClose: true,
      props: {
        filePath: e2.relative_path
      }
    }).open().result;
    if (!t2) {
      Q.add({
        title: wp.i18n.__(`Canceled`, `windpress`),
        description: wp.i18n.__(`File rename canceled`, `windpress`),
        color: `info`,
        icon: `i-lucide-edit`
      });
      return;
    }
    try {
      Z.renameEntry(e2, t2), Q.add({
        title: wp.i18n.__(`Success`, `windpress`),
        description: wp.i18n.sprintf(wp.i18n.__(`File "%s" renamed to "%s"`, `windpress`), e2.relative_path, t2),
        color: `success`,
        icon: `i-lucide-edit`
      });
    } catch (e3) {
      Q.add({
        title: wp.i18n.__(`Error`, `windpress`),
        description: e3 instanceof Error ? e3.message : wp.i18n.__(`An unknown error occurred`, `windpress`),
        color: `error`,
        icon: `i-lucide-edit`
      });
    }
  }
  function xr() {
    return {
      deleteFile: mr,
      resetFile: hr,
      save: gr,
      exportVolume: _r,
      importVolume: vr,
      addNewFile: yr,
      renameFile: br
    };
  }
  const Sr = {
    key: 1,
    class: `hidden lg:flex flex-1 items-center justify-center`
  };
  let Cr;
  Cr = f({
    __name: `File`,
    setup(e2) {
      let t2 = X(), r2 = xr(), l2 = S(null), u2 = i({
        get() {
          return !!t2.activeViewEntryRelativePath;
        },
        set(e3) {
          e3 || (t2.activeViewEntryRelativePath = null);
        }
      }), f2 = i(() => {
        let e3 = t2.data.entries.find((e4) => e4.relative_path === t2.activeViewEntryRelativePath);
        return e3 || (console.error(wp.i18n.__(`Entry not found: `, `windpress`), t2.activeViewEntryRelativePath), t2.activeViewEntryRelativePath = `main.css`, t2.data.entries.find((e4) => e4.relative_path === t2.activeViewEntryRelativePath));
      }), p2 = me(le), m2 = p2.smaller(`lg`);
      return (e3, i2) => {
        let p3 = pt, h2 = G, g2 = ve, _2 = dt, v2 = ft, y2 = I, x2 = Ie;
        return b(), c(n, null, [
          d(v2, {
            id: `explorer-1`,
            "default-size": 25,
            "min-size": 20,
            "max-size": 30,
            resizable: ``,
            class: `min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]`
          }, {
            default: N(() => [
              d(_2, {
                title: e3.i18n.__(`Explorer`, `windpress`),
                class: `text-sm`
              }, {
                leading: N(() => [
                  d(p3)
                ]),
                right: N(() => [
                  d(g2, {
                    "delay-duration": 0,
                    text: e3.i18n.__(`Add new file`, `windpress`)
                  }, {
                    default: N(() => [
                      d(h2, {
                        color: `primary`,
                        variant: `subtle`,
                        icon: `i-lucide-plus`,
                        onClick: i2[0] || (i2[0] = (e4) => A(r2).addNewFile())
                      })
                    ]),
                    _: 1
                  }, 8, [
                    `text`
                  ]),
                  d(g2, {
                    "delay-duration": 0,
                    text: e3.i18n.__(`Export SFS volume`, `windpress`)
                  }, {
                    default: N(() => [
                      d(h2, {
                        color: `neutral`,
                        variant: `outline`,
                        icon: `i-lucide-download`,
                        onClick: i2[1] || (i2[1] = (e4) => A(r2).exportVolume())
                      })
                    ]),
                    _: 1
                  }, 8, [
                    `text`
                  ]),
                  d(g2, {
                    "delay-duration": 0,
                    text: e3.i18n.__(`Import SFS volume`, `windpress`)
                  }, {
                    default: N(() => [
                      d(h2, {
                        color: `neutral`,
                        variant: `outline`,
                        icon: `i-lucide-upload`,
                        onClick: i2[2] || (i2[2] = (e4) => {
                          var _a;
                          return (_a = l2.value) == null ? void 0 : _a.click();
                        })
                      }),
                      a(`input`, {
                        ref_key: `importFileField`,
                        ref: l2,
                        type: `file`,
                        onChange: i2[3] || (i2[3] = (...e4) => A(r2).importVolume && A(r2).importVolume(...e4)),
                        style: {
                          display: `none`
                        },
                        accept: `.windpress`
                      }, null, 544)
                    ]),
                    _: 1
                  }, 8, [
                    `text`
                  ])
                ]),
                _: 1
              }, 8, [
                `title`
              ]),
              d(Pn, {
                onRename: i2[4] || (i2[4] = (e4) => A(r2).renameFile(e4)),
                onDelete: i2[5] || (i2[5] = (e4) => A(r2).deleteFile(e4)),
                onReset: i2[6] || (i2[6] = (e4) => A(r2).resetFile(e4))
              })
            ]),
            _: 1
          }),
          A(t2).activeViewEntryRelativePath ? (b(), o(zn, {
            key: 0,
            onClose: i2[7] || (i2[7] = (e4) => A(t2).activeViewEntryRelativePath = null),
            entry: f2.value,
            onDelete: i2[8] || (i2[8] = (e4) => A(r2).deleteFile(e4)),
            onSave: i2[9] || (i2[9] = (e4) => A(r2).save()),
            onReset: i2[10] || (i2[10] = (e4) => A(r2).resetFile(e4))
          }, null, 8, [
            `entry`
          ])) : (b(), c(`div`, Sr, [
            d(y2, {
              name: `lucide:file-pen`,
              class: `size-32 text-(--ui-text-dimmed)`
            })
          ])),
          A(m2) ? (b(), o(x2, {
            key: 2,
            open: u2.value,
            "onUpdate:open": i2[11] || (i2[11] = (e4) => u2.value = e4)
          }, {
            content: N(() => [
              d(Pn)
            ]),
            _: 1
          }, 8, [
            `open`
          ])) : s(``, true)
        ], 64);
      };
    }
  });
  wr = Cr;
});
export {
  __tla,
  wr as default
};
