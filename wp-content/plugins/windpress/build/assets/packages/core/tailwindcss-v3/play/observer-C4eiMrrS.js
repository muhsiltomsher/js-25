import "../../../../preload-helper-DApxheAR.min.js";
import "../../../../source-map-generator-CbHQi4uj.min.js";
import "../../../../dist-DPO5Yrzi.min.js";
import "../../../../dist-BSmntxBi.min.js";
import "../../../../package-CeqyRlFS.min.js";
import "../../../../base64-C-ng-gTH.min.js";
import "../../../../lib-BxXHRCGk.min.js";
import "../../../../dist-Doa7WVF-.min.js";
import "../../../../path-browserify-DTdOVQJJ.min.js";
import "../../../../cssesc-5IgvSXT7.js";
import "../../../../lightningcss-wasm-DXap5Yub.min.js";
import { decodeVFSContainer as e } from "../../../../vfs-BzllAKLZ.js";
import { Instrumentation as t } from "../../../../instrumentation-mMR89QGk.js";
import "../../../../lib-DdIaIIpq.min.js";
import { build as n } from "../../../../build-DAFtaJpf.js";
import "../../../../resolve-config--ZlvvkqJ.js";
console.warn(`The compiler of Tailwind CSS should not be used in production. To use Tailwind CSS in production, use the cached CSS: https://wind.press/docs/guide/concepts/cache`);
let r = /* @__PURE__ */ new Set(), i = document.createElement(`style`), a = Promise.resolve(), o = 1, s = new t(), c = ``;
async function l() {
  s.start(`Create compiler`), s.start(`Reading VFS`);
  let e2 = document.querySelector(`script#windpress\\:vfs[type="text/plain"]`);
  if (!e2) throw Error(`Script element with id "windpress:vfs" and type "text/plain" not found.`);
  let t2 = (e2 == null ? void 0 : e2.textContent) || ``;
  s.end(`Reading VFS`, { size: t2.length, changed: c !== t2 }), c !== t2 && (c = t2, s.end(`Create compiler`), r.clear());
}
async function u(t2) {
  let a2 = /* @__PURE__ */ new Set();
  s.start(`Collect classes`);
  for (let e2 of document.querySelectorAll(`[class]`)) for (let t3 of e2.classList) {
    if (r.has(t3)) continue;
    r.add(t3), a2.add(t3);
  }
  s.end(`Collect classes`, { count: a2.size }), s.start(`Build utilities`), i.textContent = await n({ entrypoint: { css: `/main.css`, config: `/tailwind.config.js` }, contents: Array.from(r), volume: e(c || `e30=`) }), s.end(`Build utilities`);
}
function d(e2) {
  async function t2() {
    if (e2 !== `full`) return;
    let t3 = o++;
    s.start(`Build #${t3} (${e2})`), e2 === `full` && await l(), s.start(`Build`), await u(e2), s.end(`Build`), s.end(`Build #${t3} (${e2})`);
  }
  a = a.then(t2).catch((e3) => s.error(e3));
}
new MutationObserver((e2) => {
  let t2 = 0, n2 = 0;
  for (let t3 of e2) {
    for (let e3 of t3.addedNodes) {
      if (e3.nodeType !== 1 || e3 === i) continue;
      n2++;
    }
    t3.type === `attributes` && n2++;
  }
  if (t2 > 0 || n2 > 0) return d(`full`);
}).observe(document.documentElement, { attributes: true, attributeFilter: [`class`], childList: true, subtree: true }), d(`full`), document.head.append(i);
