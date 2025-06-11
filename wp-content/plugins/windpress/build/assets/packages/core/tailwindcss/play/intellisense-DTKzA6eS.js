import "../../../../preload-helper-DApxheAR.min.js";
import { parse as e, walk as t } from "../../../../lib--nOUclKj.min.js";
import "../../../../source-map-generator-CbHQi4uj.min.js";
import "../../../../dist-DPO5Yrzi.min.js";
import "../../../../dist-BSmntxBi.min.js";
import "../../../../chunk-HTB5LLOP-DipP7bJV.min.js";
import "../../../../isObject-DwiMiGzS.min.js";
import "../../../../_toKey-CxbSDiUe.min.js";
import { set_default as n } from "../../../../set-kZig-l_I.min.js";
import { Fuse as r } from "../../../../fuse-Cqxh9Q5h.min.js";
import "../../../../base64-C-ng-gTH.min.js";
import "../../../../lib-BxXHRCGk.min.js";
import "../../../../dist-Doa7WVF-.min.js";
import "../../../../path-browserify-DTdOVQJJ.min.js";
import "../../../../pre-process-CIY4vBOu.js";
import "../../../../cssesc-5IgvSXT7.js";
import { decodeVFSContainer as i } from "../../../../vfs-BzllAKLZ.js";
import { candidatesToCss as a, getClassList as o, loadDesignSystem as s, sortClasses as c } from "../../../../intellisense-5fH2Lpgq.js";
import "../../../../lib-DdIaIIpq.min.js";
async function l(e2, t2) {
  let n2 = t2.split(/\s+/).filter((e3) => e3 !== `` && e3 !== `|`), r2 = await a(e2, n2);
  return Array.isArray(r2) ? r2.join(` `) : r2;
}
async function u(e2, t2) {
  let n2 = t2.split(/\s+/).filter((e3) => e3 !== `` && e3 !== `|`);
  return (await c(e2, n2)).join(` `);
}
let d = [], f = 0;
function p(e2) {
  let t2 = e2 == null ? void 0 : e2.find((e3) => e3.property.includes(`color`));
  return (t2 == null ? void 0 : t2.value) || null;
}
function m(n2) {
  let r2 = /* @__PURE__ */ new Set(), i2 = (e2) => e2.replace(/\\([0-9a-fA-F]{1,6}) ?/g, (e3, t2) => String.fromCodePoint(parseInt(t2, 16))).replace(/\\([^\s])/g, `$1`);
  for (let a2 of Object.keys(n2)) if (a2.endsWith(`.css`)) {
    let o2 = e(n2[a2]);
    t(o2, { visit: `Selector`, enter(e2) {
      t(e2, { visit: `ClassSelector`, enter(e3) {
        r2.add(i2(e3.name));
      } });
    } });
  }
  return Array.from(r2).map((e2) => ({ kind: `user`, selector: e2 }));
}
function h(e2, t2, n2, i2 = 0) {
  let a2 = false;
  if (i2 > f && (f = i2, a2 = true), (d.length === 0 || a2) && (d = [...o(t2), ...m(e2)]), n2 === ``) return d.map((e3) => ({ value: e3.selector, color: p(e3.declarations) }));
  let s2 = n2.split(`:`), c2 = s2.slice(0, -1).join(`:`), l2 = s2.pop() || ``, u2 = ``;
  l2.startsWith(`!`) && (l2 = l2.slice(1), u2 = `!`);
  let h2 = false;
  if (l2.includes(`/`)) {
    let [e3, t3] = l2.split(`/`);
    t3 === `` ? (l2 = e3, h2 = t3) : isNaN(Number(t3)) || Number(t3) < 0 || Number(t3) > 100 ? l2 = [e3, t3].join(`/`) : (l2 = e3, h2 = parseInt(t3.toString()));
  }
  let g2 = d.filter((e3) => e3.selector.includes(l2));
  if (h2 !== false) {
    let e3 = [], t3 = h2 === `` ? 5 : 1, n3 = h2 === `` || Number(h2) > 9 ? 0 : Math.floor((Number(h2) * 10 + 1) / 10) * 10, r2 = h2 === `` || Number(h2) > 9 ? 100 : Math.ceil((Number(h2) * 10 + 1) / 10) * 10;
    g2.forEach((i3) => {
      for (let a3 = n3; a3 <= r2; a3 += t3) e3.push({ ...i3, selector: i3.selector + `/` + a3 });
    }), g2 = e3;
  }
  let _2 = new r(g2, { keys: [`selector`], threshold: 0.4 });
  return _2.search(l2).map(({ item: e3 }) => ({ value: [c2, (u2 ? `!` : ``) + e3.selector].filter(Boolean).join(`:`), color: p(e3.declarations) }));
}
const g = new BroadcastChannel(`windpress`), _ = document.querySelector(`script#windpress\\:vfs[type="text/plain"]`);
let v, y, b = 0, x = 0;
async function S() {
  y = i((_ == null ? void 0 : _.textContent) || `e30=`), v = await s({ volume: y });
  let e2 = Date.now();
  b = x, x = e2, g.postMessage({ source: `windpress/intellisense`, target: `any`, task: `windpress.code-editor.saved.done` });
}
S(), g.addEventListener(`message`, async (e2) => {
  let t2 = e2.data, n2 = `windpress/dashboard`, r2 = `windpress/intellisense`, i2 = `windpress.code-editor.saved`;
  t2.source === n2 && t2.target === r2 && t2.task === i2 && S();
}), n(window, `windpress.module.autocomplete.query`, (e2) => h(y, v, e2, x)), n(window, `windpress.module.classnameToCss.generate`, async (e2) => l(v, e2)), n(window, `windpress.module.classSorter.sort`, async (e2) => u(v, e2));
