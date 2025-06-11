import { logger as e } from "./logger-B1Q-9Dmh.js";
const t = new BroadcastChannel(`windpress`);
(function() {
  let n = window.XMLHttpRequest;
  function r() {
    let r2 = new n(), i = r2.open;
    return r2.open = function(n2, a) {
      if (n2 === `POST` && a.includes(`v2/builderius`)) {
        let n3 = r2.onreadystatechange;
        r2.onreadystatechange = function() {
          var _a, _b, _c, _d;
          if (r2.readyState === 4 && r2.status === 200) try {
            let e2 = JSON.parse(r2.responseText);
            (((_b = (_a = e2.commit_entity) == null ? void 0 : _a.errors) == null ? void 0 : _b.length) === 0 || ((_d = (_c = e2.commit_global) == null ? void 0 : _c.errors) == null ? void 0 : _d.length) === 0) && t.postMessage({ task: `generate-cache`, source: `windpress/integration`, target: `windpress/compiler`, data: { kind: `incremental`, incremental: { providers: [`builderius`] } } });
          } catch (t2) {
            e(`Failed to intercept the response.`, t2, { module: `generate-cache` });
          }
          n3 && n3.apply(this, arguments);
        };
      }
      i.apply(this, arguments);
    }, r2;
  }
  window.XMLHttpRequest = r;
})(), e(`Module loaded!`, { module: `generate-cache` });
