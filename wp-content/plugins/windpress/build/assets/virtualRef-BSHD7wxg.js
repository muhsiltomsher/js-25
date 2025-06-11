import { customRef as e, ref as t } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import { useStorage as n } from "./core-DXhlFaDq.min.js";
import { set_default as r } from "./set-kZig-l_I.min.js";
import { get_default as i } from "./get-pqwrRitR.min.js";
function a(a2, o) {
  let s = (o == null ? void 0 : o.persist) ? n(o.persist, a2) : t(a2), c = {};
  function l(t2, n2) {
    return c[t2] || (c[t2] = e((e2, a3) => ({ get() {
      return e2(), i(s.value, t2, n2);
    }, set(e3) {
      r(s.value, t2, e3), a3();
    } }))), c[t2];
  }
  return { state: s, getVirtualRef: l };
}
export {
  a as createVirtualRef
};
