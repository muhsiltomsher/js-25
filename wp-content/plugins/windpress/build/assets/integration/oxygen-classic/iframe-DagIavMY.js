const e = new MutationObserver(function(e2) {
  e2.forEach(function(e3) {
    if (e3.type === `attributes`) {
      let t2 = e3.attributeName;
      if (t2 !== `class` && t2 !== `plainclass`) return;
      let n2 = e3.target, r2 = (e3.oldValue || ``).split(/\s+/).filter((e4) => e4 !== ``), i = n2.getAttribute(t2).split(/\s+/).filter((e4) => e4 !== ``);
      if (t2 === `plainclass`) r2.forEach(function(e4) {
        i.includes(e4) || n2.classList.remove(e4);
      }), i.forEach(function(e4) {
        r2.includes(e4) || n2.classList.add(e4);
      });
      else if (t2 === `class` && n2.hasAttribute(`plainclass`)) {
        let e4 = n2.getAttribute(`plainclass`), t3 = e4.split(/\s+/).filter((e5) => e5 !== ``);
        t3.forEach(function(e5) {
          i.includes(e5) || n2.classList.add(e5);
        });
      }
    }
  });
});
e.observe(document.body, { attributes: true, subtree: true, attributeFilter: [`class`, `plainclass`], attributeOldValue: true }), window.addEventListener(`message`, function(e2) {
  var _a;
  if (((_a = e2.data) == null ? void 0 : _a.action) === `windpressoxygen-preview-class`) {
    if (e2.data.do === `remove`) r();
    else if (e2.data.do === `add`) {
      let n2 = document.querySelector(`[ng-attr-component-id="${e2.data.elementId}"]`);
      n2 && (r(), t(n2, e2.data.className));
    }
  }
});
function t(e2, t2) {
  e2.setAttribute(`previewclass`, t2), e2.classList.add(t2);
}
function n(e2) {
  if (!e2.hasAttribute(`previewclass`) || e2.getAttribute(`previewclass`) === ``) return;
  let t2 = e2.getAttribute(`previewclass`);
  if (e2.removeAttribute(`previewclass`), e2.hasAttribute(`plainclass`)) {
    let n2 = e2.getAttribute(`plainclass`).split(/\s+/).filter((e3) => e3 !== ``);
    if (n2.includes(t2)) return;
  }
  e2.classList.remove(t2);
}
function r() {
  let e2 = document.querySelectorAll(`[ng-attr-component-id]`);
  e2.forEach(function(e3) {
    n(e3);
  });
}
