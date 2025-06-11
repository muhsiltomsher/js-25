import "./preload-helper-DApxheAR.min.js";
import "./source-map-generator-CbHQi4uj.min.js";
import "./dist-DPO5Yrzi.min.js";
import "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import "./dist-BSmntxBi.min.js";
import "./log-yMc5ppo1.js";
import "./chunk-HTB5LLOP-DipP7bJV.min.js";
import "./core-DXhlFaDq.min.js";
import "./api-wSmiQczm.js";
import { customAlphabet as e } from "./index.browser-D93niy_k.min.js";
import "./isObject-DwiMiGzS.min.js";
import "./_toKey-CxbSDiUe.min.js";
import "./set-kZig-l_I.min.js";
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
import { decodeVFSContainer as t } from "./vfs-BzllAKLZ.js";
import { getVariableList as n, loadDesignSystem as r } from "./intellisense-5fH2Lpgq.js";
import "./lib-DdIaIIpq.min.js";
import { __tla as __tla_2 } from "./tailwindcss-NwOviTEG.js";
import { logger as i } from "./logger-B1Q-9Dmh.js";
import { brxGlobalProp as a, brxIframe as o } from "./constant-B9ERhtGk.js";
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
  const s = () => e(`1234567890abcdefghijklmnopqrstuvwxyz`, 6)();
  function c() {
    let e2 = s();
    for (; e2.match(/^\d/); ) e2 = s();
    return `windpress${e2}`;
  }
  async function l() {
    a.$_state.globalVariables = a.$_state.globalVariables.filter((e3) => e3.category !== `windpress`), a.$_state.globalVariablesCategories.find((e3) => e3.id === `windpress`) || a.$_state.globalVariablesCategories.push({
      id: `windpress`,
      name: `WindPress`
    });
    let e2 = o.contentWindow.document.querySelector(`script#windpress\\:vfs[type="text/plain"]`), i2 = t(e2.textContent), s2 = await n(await r({
      volume: i2
    }));
    s2.forEach((e3) => {
      a.$_state.globalVariables.push({
        id: c(),
        name: e3.key.substring(2),
        value: e3.value,
        category: `windpress`
      });
    });
  }
  const u = new BroadcastChannel(`windpress`);
  u.addEventListener(`message`, async (e2) => {
    let t2 = e2.data, n2 = `windpress/intellisense`, r2 = `any`, i2 = `windpress.code-editor.saved.done`;
    t2.source === n2 && t2.task === i2 && setTimeout(() => {
      l();
    }, 1e3);
  }), l();
  function d() {
    var _a, _b, _c;
    if (a.$_state.activePanel !== `element`) return;
    let e2 = (_a = a.$_state) == null ? void 0 : _a.activeElement, t2 = e2 == null ? void 0 : e2.id;
    if (!t2) return;
    let n2 = (_b = o) == null ? void 0 : _b.contentWindow;
    if (!n2) return;
    let r2 = document.querySelector(`.expand .options-wrapper`), i2 = r2 == null ? void 0 : r2.querySelector(`.searchable`), s2 = r2 == null ? void 0 : r2.querySelector(`.dropdown`), c2 = s2 == null ? void 0 : s2.querySelectorAll(`.variable-picker-item:not(.title)`), l2 = (_c = document.querySelector(`.variable-picker-button.open`)) == null ? void 0 : _c.previousElementSibling;
    if (!l2 || !(c2 == null ? void 0 : c2.length) || !r2 || !s2 || !i2) return;
    let u2 = (e3) => {
      var _a2;
      let t3 = ((_a2 = e3.querySelector(`span:first-of-type`)) == null ? void 0 : _a2.textContent) ?? ``;
      !l2 || !t3 || h(g(t3));
    }, d2 = (e3) => {
      var _a2;
      let t3 = ((_a2 = e3.querySelector(`span:first-of-type`)) == null ? void 0 : _a2.textContent) ?? ``;
      if (!l2 || !t3) return;
      let n3 = g(t3);
      l2.value = n3, l2.click();
    }, f2 = (e3, t3) => {
      e3.forEach((e4) => {
        if (e4.isIntersecting && !e4.target.classList.contains(`open`)) {
          let t4 = e4.target;
          t4.click();
        }
      });
    }, p2 = () => {
      h(b);
      let e3 = l2.nextElementSibling;
      x.observe(e3), r2.removeEventListener(`mouseleave`, p2);
    }, m = (e3, t3) => {
      e3.forEach((e4) => {
        let [n4, r3] = Object.entries(e4)[0] || [];
        t3.insertAdjacentHTML(`beforeend`, `
                <li class="variable-picker-item">
                    <span>${n4}</span>
                    <span class="option-value">${r3}</span>
                </li>
            `);
      });
      let n3 = v.querySelectorAll(`.variable-picker-item`);
      n3.forEach((e4) => {
        e4.addEventListener(`mouseenter`, () => u2(e4)), e4.addEventListener(`click`, () => d2(e4));
      });
    }, h = (e3) => {
      l2.value = e3, l2.dispatchEvent(new Event(`input`)), l2.focus();
    }, g = (e3) => `var(--${e3})`, _ = [];
    s2.remove(), c2.forEach((e3) => {
      var _a2, _b2;
      let t3 = ((_a2 = e3.querySelector(`span:first-of-type`)) == null ? void 0 : _a2.textContent) ?? ``, n3 = ((_b2 = e3.querySelector(`span.option-value`)) == null ? void 0 : _b2.textContent) ?? ``;
      _.push({
        [t3]: n3
      });
    });
    let v = document.createElement(`ul`);
    v.classList.add(`custom-dropdown`);
    let y = `
        max-height: calc(32px * 10);
        overflow: hidden;
        overflow-y: auto;
        position: relative;
        scrollbar-color: rgba(0, 0, 0, .4) rgba(0, 0, 0, .2);
        scrollbar-width: thin;
    `;
    v.setAttribute(`style`, y), m(_, v), r2.appendChild(v), i2.addEventListener(`click`, (e3) => {
      e3.preventDefault(), e3.stopPropagation();
    }), i2.addEventListener(`input`, (e3) => {
      let t3 = _.filter((e4) => {
        var _a2;
        let t4 = ((_a2 = Object.keys(e4)[0]) == null ? void 0 : _a2.toLowerCase()) ?? ``;
        return t4.includes(i2.value.toLowerCase());
      });
      v.innerHTML = ``, m(t3, v);
    });
    let b = (l2 == null ? void 0 : l2.value) ?? ` `, x = new IntersectionObserver(f2, {
      root: l2.parentElement
    });
    r2.addEventListener(`mouseleave`, p2), x.disconnect();
  }
  const f = document.querySelector(`#bricks-panel-inner:not(div.bricks-control-popup *)`);
  if (!f) throw i(`Inner panel not found, can't initialize preview of variables on hover`, {
    module: `variables`,
    type: `error`
  }), Error(`Inner panel not found, can't initialize preview of variables on hover`);
  const p = new MutationObserver(d);
  p.observe(f, {
    subtree: true,
    childList: true,
    attributes: true
  }), i(`Module loaded!`, {
    module: `variables`
  });
});
