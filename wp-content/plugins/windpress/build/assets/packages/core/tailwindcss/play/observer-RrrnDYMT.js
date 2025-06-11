import "../../../../preload-helper-DApxheAR.min.js";
import "../../../../source-map-generator-CbHQi4uj.min.js";
import "../../../../dist-DPO5Yrzi.min.js";
import "../../../../dist-BSmntxBi.min.js";
import "../../../../chunk-HTB5LLOP-DipP7bJV.min.js";
import "../../../../base64-C-ng-gTH.min.js";
import "../../../../lib-BxXHRCGk.min.js";
import "../../../../dist-Doa7WVF-.min.js";
import "../../../../path-browserify-DTdOVQJJ.min.js";
import "../../../../pre-process-CIY4vBOu.js";
import "../../../../cssesc-5IgvSXT7.js";
import "../../../../lightningcss-wasm-DXap5Yub.min.js";
import { compile as e } from "../../../../build-C2EkQrKU.js";
import { decodeVFSContainer as t } from "../../../../vfs-BzllAKLZ.js";
import { Instrumentation as n } from "../../../../instrumentation-mMR89QGk.js";
console.warn(`The compiler of Tailwind CSS should not be used in production. To use Tailwind CSS in production, use the cached CSS: https://wind.press/docs/guide/concepts/cache`);
let r = /* @__PURE__ */ new Set(), i = document.createElement(`style`), a = Promise.resolve(), o = 1, s = new n(), c = ``, l;
async function u() {
  s.start(`Create compiler`), s.start(`Reading VFS`);
  let n2 = document.querySelector(`script#windpress\\:vfs[type="text/plain"]`);
  if (!n2) throw Error(`Script element with id "windpress:vfs" and type "text/plain" not found.`);
  let i2 = (n2 == null ? void 0 : n2.textContent) || ``;
  if (s.end(`Reading VFS`, { size: i2.length, changed: c !== i2 }), c !== i2) {
    c = i2, s.start(`Compile CSS`);
    try {
      l = await e({ entrypoint: `/main.css`, volume: t(c || `e30=`) });
    } finally {
      s.end(`Compile CSS`), s.end(`Create compiler`);
    }
    r.clear();
  }
}
async function d(e2) {
  if (!l) return;
  let t2 = /* @__PURE__ */ new Set();
  s.start(`Collect classes`);
  for (let e3 of document.querySelectorAll(`[class]`)) for (let n2 of e3.classList) {
    if (r.has(n2)) continue;
    r.add(n2), t2.add(n2);
  }
  s.end(`Collect classes`, { count: t2.size }), !(t2.size === 0 && e2 === `incremental`) && (s.start(`Build utilities`), i.textContent = l.build(Array.from(t2)), s.end(`Build utilities`));
}
function f(e2) {
  async function t2() {
    if (!l && e2 !== `full`) return;
    let t3 = o++;
    s.start(`Build #${t3} (${e2})`), e2 === `full` && await u(), s.start(`Build`), await d(e2), s.end(`Build`), s.end(`Build #${t3} (${e2})`);
  }
  a = a.then(t2).catch((e3) => s.error(e3));
}
let p = new MutationObserver(() => f(`full`));
function m(e2) {
  p.observe(e2, { attributes: true, attributeFilter: [`type`, `src`], characterData: true, subtree: true, childList: true });
}
const h = new MutationObserver((e2) => {
  let t2 = 0, n2 = 0;
  for (let r2 of e2) {
    for (let e3 of r2.addedNodes) {
      if (e3.nodeType !== 1 || e3 === i) continue;
      n2++;
    }
    r2.type === `attributes` && n2++, r2.target instanceof HTMLScriptElement && r2.target.id === `windpress:vfs` && r2.target.type === `text/plain` && (m(r2.target), t2++);
  }
  if (t2 > 0) return f(`full`);
  if (n2 > 0) return f(`incremental`);
});
window.__windpress__disable_playObserver ? console.warn(`Play Observer is disabled.`) : (h.observe(document.documentElement, { attributes: true, attributeFilter: [`class`], childList: true, subtree: true }), f(`full`), document.head.append(i)), (() => {
  let e2 = new BroadcastChannel(`windpress`);
  e2.addEventListener(`message`, async (e3) => {
    let t2 = e3.data, n2 = `windpress/dashboard`, r2 = `windpress/observer`, i2 = `windpress.code-editor.saved`;
    if (t2.source === n2 && t2.target === r2 && t2.task === i2) {
      let e4 = document.querySelector(`script#windpress\\:vfs[type="text/plain"]`);
      e4 && (e4.textContent = t2.payload.volume);
    }
  });
})();
try {
  window.twPlayObserver = h;
} catch {
}
