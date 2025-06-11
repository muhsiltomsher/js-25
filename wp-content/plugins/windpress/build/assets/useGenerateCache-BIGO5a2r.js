import { useToast as e } from "./useToast-CCC0wlx6.min.js";
import { useBusyStore as t, useSettingsStore as n } from "./settings-BBOsnx-8.js";
const r = (e2) => Number.isFinite(e2) ? e2 : 0;
function i(e2) {
  return { days: Math.trunc(e2 / 864e5), hours: Math.trunc(e2 / 36e5 % 24), minutes: Math.trunc(e2 / 6e4 % 60), seconds: Math.trunc(e2 / 1e3 % 60), milliseconds: Math.trunc(e2 % 1e3), microseconds: Math.trunc(r(e2 * 1e3) % 1e3), nanoseconds: Math.trunc(r(e2 * 1e6) % 1e3) };
}
function a(e2) {
  return { days: e2 / 86400000n, hours: e2 / 3600000n % 24n, minutes: e2 / 60000n % 60n, seconds: e2 / 1000n % 60n, milliseconds: e2 % 1000n, microseconds: 0n, nanoseconds: 0n };
}
function o(e2) {
  switch (typeof e2) {
    case `number`:
      if (Number.isFinite(e2)) return i(e2);
      break;
    case `bigint`:
      return a(e2);
  }
  throw TypeError(`Expected a finite number or bigint`);
}
const s = (e2) => e2 === 0 || e2 === 0n, c = (e2, t2) => t2 === 1 || t2 === 1n ? e2 : `${e2}s`, l = 1e-7, u = 24n * 60n * 60n * 1000n;
function d(e2, t2) {
  let n2 = typeof e2 == `bigint`;
  if (!n2 && !Number.isFinite(e2)) throw TypeError(`Expected a finite number or bigint`);
  t2 = { ...t2 };
  let r2 = e2 < 0 ? `-` : ``;
  e2 = e2 < 0 ? -e2 : e2, t2.colonNotation && (t2.compact = false, t2.formatSubMilliseconds = false, t2.separateMilliseconds = false, t2.verbose = false), t2.compact && (t2.unitCount = 1, t2.secondsDecimalDigits = 0, t2.millisecondsDecimalDigits = 0);
  let i2 = [], a2 = (e3, t3) => {
    let n3 = Math.floor(e3 * 10 ** t3 + l), r3 = Math.round(n3) / 10 ** t3;
    return r3.toFixed(t3);
  }, d2 = (e3, n3, r3, a3) => {
    if (!((i2.length === 0 || !t2.colonNotation) && s(e3) && !(t2.colonNotation && r3 === `m`))) {
      if (a3 ?? (a3 = String(e3)), t2.colonNotation) {
        let e4 = a3.includes(`.`) ? a3.split(`.`)[0].length : a3.length, t3 = i2.length > 0 ? 2 : 1;
        a3 = `0`.repeat(Math.max(0, t3 - e4)) + a3;
      } else a3 += t2.verbose ? ` ` + c(n3, e3) : r3;
      i2.push(a3);
    }
  }, f2 = o(e2), p2 = BigInt(f2.days);
  if (t2.hideYearAndDays ? d2(BigInt(p2) * 24n + BigInt(f2.hours), `hour`, `h`) : (t2.hideYear ? d2(p2, `day`, `d`) : (d2(p2 / 365n, `year`, `y`), d2(p2 % 365n, `day`, `d`)), d2(Number(f2.hours), `hour`, `h`)), d2(Number(f2.minutes), `minute`, `m`), !t2.hideSeconds) if (t2.separateMilliseconds || t2.formatSubMilliseconds || !t2.colonNotation && e2 < 1e3) {
    let e3 = Number(f2.seconds), n3 = Number(f2.milliseconds), r3 = Number(f2.microseconds), i3 = Number(f2.nanoseconds);
    if (d2(e3, `second`, `s`), t2.formatSubMilliseconds) d2(n3, `millisecond`, `ms`), d2(r3, `microsecond`, `\xB5s`), d2(i3, `nanosecond`, `ns`);
    else {
      let e4 = n3 + r3 / 1e3 + i3 / 1e6, a3 = typeof t2.millisecondsDecimalDigits == `number` ? t2.millisecondsDecimalDigits : 0, o2 = e4 >= 1 ? Math.round(e4) : Math.ceil(e4), s2 = a3 ? e4.toFixed(a3) : o2;
      d2(Number.parseFloat(s2), `millisecond`, `ms`, s2);
    }
  } else {
    let r3 = (n2 ? Number(e2 % u) : e2) / 1e3 % 60, i3 = typeof t2.secondsDecimalDigits == `number` ? t2.secondsDecimalDigits : 1, o2 = a2(r3, i3), s2 = t2.keepDecimalsOnWholeSeconds ? o2 : o2.replace(/\.0+$/, ``);
    d2(Number.parseFloat(s2), `second`, `s`, s2);
  }
  if (i2.length === 0) return r2 + `0` + (t2.verbose ? ` milliseconds` : `ms`);
  let m2 = t2.colonNotation ? `:` : ` `;
  return typeof t2.unitCount == `number` && (i2 = i2.slice(0, Math.max(t2.unitCount, 1))), r2 + i2.join(m2);
}
const f = new BroadcastChannel(`windpress`), p = e();
async function m(e2) {
  let r2 = n(), i2 = t();
  i2.add(`settings.performance.cached_css.generate`);
  let a2 = { title: wp.i18n.__(`Generating cache...`, `windpress`), description: wp.i18n.__(`Please wait while we generate the CSS cache.`, `windpress`), duration: 0, icon: `lucide:loader-circle`, close: false, color: `neutral`, ui: { icon: `animate-spin` } };
  p.toasts.value.find((e3) => e3.id === `worker.doGenerateCache`) ? p.update(`worker.doGenerateCache`, { ...a2 }) : p.add({ id: `worker.doGenerateCache`, ...a2 });
  let o2 = performance.now(), s2 = o2;
  f.postMessage({ task: `generate-cache`, source: `windpress/dashboard`, target: `windpress/compiler`, data: { tailwindcss_version: Number(r2.virtualOptions(`general.tailwindcss.version`, 4).value) } }), f.addEventListener(`message`, (t2) => {
    let n2 = t2.data, r3 = `windpress/compiler`, a3 = `windpress/dashboard`;
    n2.source === r3 && n2.target === a3 && n2.task === `generate-cache.response` && (i2.remove(`settings.performance.cached_css.generate`), s2 = performance.now(), n2.data.status === `success` ? (p.update(`worker.doGenerateCache`, { title: wp.i18n.__(`Cache generated`, `windpress`), description: wp.i18n.sprintf(wp.i18n.__(`Cache generated in %s.`, `windpress`), d(s2 - o2)), icon: `lucide:codesandbox`, color: `success`, duration: void 0, close: true, ui: { icon: void 0 } }), e2 == null ? void 0 : e2(true)) : n2.data.status === `error` && (p.update(`worker.doGenerateCache`, { title: wp.i18n.__(`Generate Cache Error`, `windpress`), description: wp.i18n.__(`An error occurred while generating the CSS cache. Check the Browser's Console for more information`, `windpress`), icon: `lucide:codesandbox`, color: `error`, duration: void 0, close: true, ui: { icon: void 0 } }), e2 == null ? void 0 : e2(false)));
  });
}
export {
  m as generateCache
};
