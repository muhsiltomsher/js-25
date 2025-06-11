import { logger as e } from "../../logger-B1Q-9Dmh.js";
e(`Loading...`), (async () => {
  let t, n;
  for (e(`waiting for the rootContainer...`); !t; ) t = document.querySelector(`iframe[name="editor-canvas"]`), await new Promise((e2) => setTimeout(e2, 100));
  e(`finding WindPress script...`);
  let r = false, i = setTimeout(() => {
    r = true;
  }, 45e3);
  for (; !r; ) {
    if (n = document.querySelectorAll(`script`), n = Array.from(n).filter((e2) => {
      let t2 = e2.getAttribute(`id`);
      return t2 && (t2.startsWith(`windpress:`) || t2.startsWith(`vite-client`)) && !t2.startsWith(`windpress:integration-`);
    }), n.length > 0) {
      clearTimeout(i);
      break;
    }
    await new Promise((e2) => setTimeout(e2, 100));
  }
  if (r) {
    e(`time out! failed to find WindPress script`);
    return;
  }
  e(`found WindPress script`);
  let a = t.contentWindow || t, o = t.contentDocument || a.document;
  for (; !o.head; ) await new Promise((e2) => setTimeout(e2, 300));
  e(`injecting WindPress script into the root container`);
  let s = o.querySelectorAll(`script`), c = Array.from(s).some((e2) => {
    let t2 = e2.getAttribute(`id`);
    return t2 && t2.startsWith(`windpress:`);
  });
  c ? e(`WindPress script is already injected, skipping the injection process...`) : (e(`starting the root injection process...`), n.forEach((e2) => {
    o.head.appendChild(document.createRange().createContextualFragment(e2.outerHTML));
  }));
  let l = null, u = new MutationObserver(async (t2) => {
    let r2 = false, i2 = [], a2 = 2e3;
    for (let e2 of t2) {
      if (r2) break;
      e2.type === `childList` && (e2.removedNodes.forEach((e3) => {
        e3.nodeType === Node.ELEMENT_NODE && e3.matches(`div.components-modal__screen-overlay`) && (l = null);
      }), e2.addedNodes.forEach((e3) => {
        e3.nodeType === Node.ELEMENT_NODE && e3.matches(`body > div.components-modal__screen-overlay`) && (l = e3, r2 = true);
      }));
    }
    if (r2) {
      for (e(`waiting for the patternIframes...`); i2.length === 0 && a2 > 0; ) i2 = l.querySelectorAll(`div.block-editor-block-preview__container > div > div > div.block-editor-iframe__scale-container > iframe`), a2 -= 100, await new Promise((e2) => setTimeout(e2, 100));
      if (a2 <= 0 && i2.length === 0) {
        e(`time out! failed to find the patternIframes`);
        return;
      }
      i2.forEach((t3) => {
        let r3 = t3.contentDocument || t3.contentWindow.document, i3 = r3.head, a3 = Array.from(i3.querySelectorAll(`script`)).some((e2) => {
          let t4 = e2.getAttribute(`id`);
          return t4 && t4.startsWith(`windpress:`);
        });
        a3 ? e(`WindPress script is already injected into the pattern iframe, skipping the injection process...`) : (e(`injecting WindPress script into the pattern iframe`), n.forEach((e2) => {
          i3.appendChild(document.createRange().createContextualFragment(e2.outerHTML));
        }));
      }), i2 = [];
    }
  });
  u.observe(document.body, { childList: true, subtree: false });
  let d = null, f = new MutationObserver(async (t2) => {
    let r2 = false, i2 = [], a2 = 2e4;
    for (let e2 of t2) {
      if (r2) break;
      e2.type === `childList` && (e2.removedNodes.forEach((e3) => {
        e3.nodeType === Node.ELEMENT_NODE && e3.matches(`div.block-editor-inserter__category-panel`) && (d = null);
      }), e2.addedNodes.forEach((e3) => {
        e3.nodeType === Node.ELEMENT_NODE && e3.matches(`div.block-editor-inserter__category-panel`) && (d = e3, r2 = true);
      }));
    }
    if (r2) {
      for (e(`waiting for the patternIframes...`); i2.length === 0 && a2 > 0; ) i2 = d.querySelectorAll(`div.block-editor-block-preview__container > div > div > div.block-editor-iframe__scale-container > iframe`), a2 -= 100, await new Promise((e2) => setTimeout(e2, 100));
      if (a2 <= 0 && i2.length === 0) {
        e(`time out! failed to find the patternIframes`);
        return;
      }
      i2.forEach((t3) => {
        let r3 = t3.contentDocument || t3.contentWindow.document, i3 = r3.head, a3 = Array.from(i3.querySelectorAll(`script`)).some((e2) => {
          let t4 = e2.getAttribute(`id`);
          return t4 && t4.startsWith(`windpress:`);
        });
        a3 ? e(`WindPress script is already injected into the pattern iframe, skipping the injection process...`) : (e(`injecting WindPress script into the pattern iframe`), n.forEach((e2) => {
          i3.appendChild(document.createRange().createContextualFragment(e2.outerHTML));
        }));
      }), i2 = [];
    }
  });
  f.observe(document.body, { childList: true, subtree: true });
})();
