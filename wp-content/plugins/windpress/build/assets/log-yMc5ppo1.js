import { global as e, init_dist as t } from "./dist-DPO5Yrzi.min.js";
import { computed as n, effectScope as r, getCurrentScope as i, hasInjectionContext as a, inject as o, isReactive as s, isRef as c, markRaw as l, nextTick as u, onScopeDispose as d, reactive as f, ref as p, toRaw as m, toRefs as h, watch as g } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import { useStorage as _ } from "./core-DXhlFaDq.min.js";
import { nanoid as v } from "./index.browser-D93niy_k.min.js";
t();
let y;
const b = (e2) => y = e2, x = Symbol();
function S(e2) {
  return e2 && typeof e2 == `object` && Object.prototype.toString.call(e2) === `[object Object]` && typeof e2.toJSON != `function`;
}
var C;
(function(e2) {
  e2.direct = `direct`, e2.patchObject = `patch object`, e2.patchFunction = `patch function`;
})(C || (C = {}));
const w = typeof window < `u`, T = (() => typeof window == `object` && window.window === window ? window : typeof self == `object` && self.self === self ? self : typeof e == `object` && e.global === e ? e : typeof globalThis == `object` ? globalThis : { HTMLElement: null })();
function E(e2, { autoBom: t2 = false } = {}) {
  return t2 && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e2.type) ? new Blob([`\uFEFF`, e2], { type: e2.type }) : e2;
}
function D(e2, t2, n2) {
  let r2 = new XMLHttpRequest();
  r2.open(`GET`, e2), r2.responseType = `blob`, r2.onload = function() {
    M(r2.response, t2, n2);
  }, r2.onerror = function() {
    console.error(`could not download file`);
  }, r2.send();
}
function O(e2) {
  let t2 = new XMLHttpRequest();
  t2.open(`HEAD`, e2, false);
  try {
    t2.send();
  } catch {
  }
  return t2.status >= 200 && t2.status <= 299;
}
function k(e2) {
  try {
    e2.dispatchEvent(new MouseEvent(`click`));
  } catch {
    let t2 = new MouseEvent(`click`, { bubbles: true, cancelable: true, view: window, detail: 0, screenX: 80, screenY: 20, clientX: 80, clientY: 20, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, button: 0, relatedTarget: null });
    e2.dispatchEvent(t2);
  }
}
const A = typeof navigator == `object` ? navigator : { userAgent: `` }, j = (() => /Macintosh/.test(A.userAgent) && /AppleWebKit/.test(A.userAgent) && !/Safari/.test(A.userAgent))(), M = w ? typeof HTMLAnchorElement < `u` && `download` in HTMLAnchorElement.prototype && !j ? N : `msSaveOrOpenBlob` in A ? P : F : () => {
};
function N(e2, t2 = `download`, n2) {
  let r2 = document.createElement(`a`);
  r2.download = t2, r2.rel = `noopener`, typeof e2 == `string` ? (r2.href = e2, r2.origin === location.origin ? k(r2) : O(r2.href) ? D(e2, t2, n2) : (r2.target = `_blank`, k(r2))) : (r2.href = URL.createObjectURL(e2), setTimeout(function() {
    URL.revokeObjectURL(r2.href);
  }, 4e4), setTimeout(function() {
    k(r2);
  }, 0));
}
function P(e2, t2 = `download`, n2) {
  if (typeof e2 == `string`) if (O(e2)) D(e2, t2, n2);
  else {
    let t3 = document.createElement(`a`);
    t3.href = e2, t3.target = `_blank`, setTimeout(function() {
      k(t3);
    });
  }
  else navigator.msSaveOrOpenBlob(E(e2, n2), t2);
}
function F(e2, t2, n2, r2) {
  if (r2 || (r2 = open(``, `_blank`)), r2 && (r2.document.title = r2.document.body.innerText = `downloading...`), typeof e2 == `string`) return D(e2, t2, n2);
  let i2 = e2.type === `application/octet-stream`, a2 = /constructor/i.test(String(T.HTMLElement)) || `safari` in T, o2 = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((o2 || i2 && a2 || j) && typeof FileReader < `u`) {
    let t3 = new FileReader();
    t3.onloadend = function() {
      let e3 = t3.result;
      if (typeof e3 != `string`) throw r2 = null, Error(`Wrong reader.result type`);
      e3 = o2 ? e3 : e3.replace(/^data:[^;]*;/, `data:attachment/file;`), r2 ? r2.location.href = e3 : location.assign(e3), r2 = null;
    }, t3.readAsDataURL(e2);
  } else {
    let t3 = URL.createObjectURL(e2);
    r2 ? r2.location.assign(t3) : location.href = t3, r2 = null, setTimeout(function() {
      URL.revokeObjectURL(t3);
    }, 4e4);
  }
}
const { assign: I } = Object;
function L() {
  let e2 = r(true), t2 = e2.run(() => p({})), n2 = [], i2 = [], a2 = l({ install(e3) {
    b(a2), a2._a = e3, e3.provide(x, a2), e3.config.globalProperties.$pinia = a2, i2.forEach((e4) => n2.push(e4)), i2 = [];
  }, use(e3) {
    return this._a ? n2.push(e3) : i2.push(e3), this;
  }, _p: n2, _a: null, _e: e2, _s: /* @__PURE__ */ new Map(), state: t2 });
  return a2;
}
const R = () => {
};
function z(e2, t2, n2, r2 = R) {
  e2.push(t2);
  let a2 = () => {
    let n3 = e2.indexOf(t2);
    n3 > -1 && (e2.splice(n3, 1), r2());
  };
  return !n2 && i() && d(a2), a2;
}
function B(e2, ...t2) {
  e2.slice().forEach((e3) => {
    e3(...t2);
  });
}
const V = (e2) => e2(), H = Symbol(), U = Symbol();
function W(e2, t2) {
  for (let n2 in e2 instanceof Map && t2 instanceof Map ? t2.forEach((t3, n3) => e2.set(n3, t3)) : e2 instanceof Set && t2 instanceof Set && t2.forEach(e2.add, e2), t2) {
    if (!t2.hasOwnProperty(n2)) continue;
    let r2 = t2[n2], i2 = e2[n2];
    S(i2) && S(r2) && e2.hasOwnProperty(n2) && !c(r2) && !s(r2) ? e2[n2] = W(i2, r2) : e2[n2] = r2;
  }
  return e2;
}
const G = Symbol();
function K(e2) {
  return !S(e2) || !Object.prototype.hasOwnProperty.call(e2, G);
}
const { assign: q } = Object;
function J(e2) {
  return !!(c(e2) && e2.effect);
}
function Y(e2, t2, r2, i2) {
  let { state: a2, actions: o2, getters: s2 } = t2, c2 = r2.state.value[e2], u2;
  function d2() {
    c2 || (r2.state.value[e2] = a2 ? a2() : {});
    let t3 = h(r2.state.value[e2]);
    return q(t3, o2, Object.keys(s2 || {}).reduce((t4, i3) => (t4[i3] = l(n(() => {
      b(r2);
      let t5 = r2._s.get(e2);
      return s2[i3].call(t5, t5);
    })), t4), {}));
  }
  return u2 = X(e2, d2, t2, r2, i2, true), u2;
}
function X(e2, t2, n2 = {}, i2, a2, o2) {
  let d2, h2 = q({ actions: {} }, n2), _2 = { deep: true }, v2, y2, x2 = [], S2 = [], w2, T2 = i2.state.value[e2];
  !o2 && !T2 && (i2.state.value[e2] = {});
  let E2 = p({}), D2;
  function O2(t3) {
    let n3;
    v2 = y2 = false, typeof t3 == `function` ? (t3(i2.state.value[e2]), n3 = { type: C.patchFunction, storeId: e2, events: w2 }) : (W(i2.state.value[e2], t3), n3 = { type: C.patchObject, payload: t3, storeId: e2, events: w2 });
    let r2 = D2 = Symbol();
    u().then(() => {
      D2 === r2 && (v2 = true);
    }), y2 = true, B(x2, n3, i2.state.value[e2]);
  }
  let k2 = o2 ? function() {
    let { state: e3 } = n2, t3 = e3 ? e3() : {};
    this.$patch((e4) => {
      q(e4, t3);
    });
  } : R;
  function A2() {
    d2.stop(), x2 = [], S2 = [], i2._s.delete(e2);
  }
  let j2 = (t3, n3 = ``) => {
    if (H in t3) return t3[U] = n3, t3;
    let r2 = function() {
      b(i2);
      let n4 = Array.from(arguments), a3 = [], o3 = [];
      function s2(e3) {
        a3.push(e3);
      }
      function c2(e3) {
        o3.push(e3);
      }
      B(S2, { args: n4, name: r2[U], store: P2, after: s2, onError: c2 });
      let l2;
      try {
        l2 = t3.apply(this && this.$id === e2 ? this : P2, n4);
      } catch (e3) {
        throw B(o3, e3), e3;
      }
      return l2 instanceof Promise ? l2.then((e3) => (B(a3, e3), e3)).catch((e3) => (B(o3, e3), Promise.reject(e3))) : (B(a3, l2), l2);
    };
    return r2[H] = true, r2[U] = n3, r2;
  }, M2 = l({ actions: {}, getters: {}, state: [], hotState: E2 }), N2 = { _p: i2, $id: e2, $onAction: z.bind(null, S2), $patch: O2, $reset: k2, $subscribe(t3, n3 = {}) {
    let r2 = z(x2, t3, n3.detached, () => a3()), a3 = d2.run(() => g(() => i2.state.value[e2], (r3) => {
      (n3.flush === `sync` ? y2 : v2) && t3({ storeId: e2, type: C.direct, events: w2 }, r3);
    }, q({}, _2, n3)));
    return r2;
  }, $dispose: A2 }, P2 = f(N2);
  i2._s.set(e2, P2);
  let F2 = i2._a && i2._a.runWithContext || V, I2 = F2(() => i2._e.run(() => (d2 = r()).run(() => t2({ action: j2 }))));
  for (let t3 in I2) {
    let n3 = I2[t3];
    if (c(n3) && !J(n3) || s(n3)) o2 || (T2 && K(n3) && (c(n3) ? n3.value = T2[t3] : W(n3, T2[t3])), i2.state.value[e2][t3] = n3);
    else if (typeof n3 == `function`) {
      let e3 = j2(n3, t3);
      I2[t3] = e3, h2.actions[t3] = n3;
    }
  }
  return q(P2, I2), q(m(P2), I2), Object.defineProperty(P2, `$state`, { get: () => i2.state.value[e2], set: (e3) => {
    O2((t3) => {
      q(t3, e3);
    });
  } }), i2._p.forEach((e3) => {
    q(P2, d2.run(() => e3({ store: P2, app: i2._a, pinia: i2, options: h2 })));
  }), T2 && o2 && n2.hydrate && n2.hydrate(P2.$state, T2), v2 = true, y2 = true, P2;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Z(e2, t2, n2) {
  let r2, i2 = typeof t2 == `function`;
  r2 = i2 ? n2 : t2;
  function s2(n3, s3) {
    let c2 = a();
    n3 || (n3 = c2 ? o(x, null) : null), n3 && b(n3), n3 = y, n3._s.has(e2) || (i2 ? X(e2, t2, r2, n3) : Y(e2, r2, n3));
    let l2 = n3._s.get(e2);
    return l2;
  }
  return s2.$id = e2, s2;
}
function Q() {
  let e2 = { id: `JqhEkI6VK0`, timestamp: 1742407548572, type: `debug`, message: `Thank you for using WindPress! Join us on the Facebook Group: <a href="https://wind.press/go/facebook" target="_blank" class="underline">https://wind.press/go/facebook</a>`, options: { raw: true } }, t2 = _(`windpress.dashboard.store.logs`, [e2]);
  function n2(e3) {
    let n3 = v(10);
    return t2.value.push({ id: n3, timestamp: Date.now(), ...e3 }), n3;
  }
  function r2(e3, n3) {
    let r3 = t2.value.find((t3) => t3.id === e3);
    r3 && Object.assign(r3, n3);
  }
  function i2(e3, n3 = `id`) {
    switch (n3) {
      case `message`:
        t2.value = t2.value.filter((t3) => !t3.message.includes(e3));
        break;
      case `type`:
        t2.value = t2.value.filter((t3) => t3.type !== e3);
        break;
      case `group`:
        t2.value = t2.value.filter((t3) => t3.group !== e3);
        break;
      case `id`:
      default:
        t2.value = t2.value.filter((t3) => t3.id !== e3);
        break;
    }
  }
  function a2() {
    t2.value = [], t2.value.push(e2);
  }
  return { logs: t2, add: n2, update: r2, remove: i2, clear: a2 };
}
const $ = /* @__PURE__ */ Z(`log`, () => {
  let e2 = Q();
  return { ...e2 };
});
export {
  Q as createLogComposable,
  L as createPinia,
  Z as defineStore,
  $ as useLogStore
};
