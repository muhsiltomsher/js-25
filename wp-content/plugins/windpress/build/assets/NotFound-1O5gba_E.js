import "./dist-DPO5Yrzi.min.js";
import { createBaseVNode as e, createElementBlock as t, createVNode as n, defineComponent as r, openBlock as i, toDisplayString as a, unref as o } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import "./vue.runtime.esm-bundler-WcNVUy75.min.js";
import { useRouter as s } from "./Link-83qDN5tY.min.js";
import "./core-DXhlFaDq.min.js";
import { Button_default as c } from "./Button-DeZRGJ9-.min.js";
const l = { class: `min-h-full w-full` }, u = { class: `h-full flex justify-center border border-b-0 border-(--ui-border-muted) relative p-4 z-[1]` }, d = { class: `h-full flex flex-col items-center justify-center text-center` }, f = { class: `mt-2 text-4xl sm:text-5xl font-bold text-(--ui-text-highlighted) text-balance` }, p = { class: `mt-4 text-lg text-(--ui-text-muted) text-balance` }, m = { class: `mt-8 flex items-center justify-center gap-6` };
var h = r({ __name: `NotFound`, setup(r2) {
  let h2 = s(), g2 = h2.resolve({ name: `home` });
  return (r3, s2) => {
    let h3 = c;
    return i(), t(`div`, l, [e(`div`, u, [e(`div`, d, [s2[0] || (s2[0] = e(`p`, { class: `text-base font-semibold text-(--ui-primary)` }, ` 404 `, -1)), e(`h1`, f, a(r3.i18n.__(`Page not found`, `windpress`)), 1), e(`p`, p, a(r3.i18n.__(`Sorry, we couldn\u2019t find the page you\u2019re looking for.`, `windpress`)), 1), e(`div`, m, [n(h3, { to: o(g2), size: `lg`, color: `primary`, variant: `solid`, label: r3.i18n.__(`Back to home`, `windpress`) }, null, 8, [`to`, `label`])])])])]);
  };
} }), g = h;
export {
  g as default
};
