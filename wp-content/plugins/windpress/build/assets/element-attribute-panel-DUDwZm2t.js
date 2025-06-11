import { logger as e } from "./logger-B1Q-9Dmh.js";
import { tribute_esm_default as t } from "./tribute.esm-DgfIamDT.min.js";
import { etchIframe as n } from "./constant-CjluqGKA.js";
let r = [];
async function i(e2) {
  let i2 = e2.querySelector(`input[type="text"]`);
  if (!i2) return;
  let a2 = document.createRange().createContextualFragment(`
        <button id="windpressetch-sort-css-attr-action" title="[WindPress] Sort Class" type="button" class="etch-builder-button etch-builder-button--icon-placement-before etch-builder-button--variant-icon" style="--button-font-size: 13px; --e-icon-padding: 0; margin-left: auto;">
            <div class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="etch-icon iconify iconify--hugeicons-stroke" width="12px" height="12px" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                    <path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                    <path d="M17 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                    <path d="M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3" />
                    <path d="M16.5 8.5l2.5 2.5l2.5 -2.5" />
                </svg>
            </div>
        </button>
    `).querySelector(`#windpressetch-sort-css-attr-action`);
  wp.hooks.addAction(`windpressetch-autocomplete-items-refresh`, `windpressetch`, () => {
  }), wp.hooks.doAction(`windpressetch-autocomplete-items-refresh`);
  let o = new t({ containerClass: `windpressetch-tribute-container`, autocompleteMode: true, menuItemLimit: 50, noMatchTemplate: ``, values: async function(e3, t2) {
    let n2 = await wp.hooks.applyFilters(`windpressetch-autocomplete-items-query`, r, e3);
    t2(n2);
  }, lookup: `value`, itemClass: `class-item`, menuItemTemplate: function(e3) {
    let t2 = ``;
    return e3.original.color !== void 0 && (t2 += `background-color: ${e3.original.color};`), e3.original.fontWeight !== void 0 && (t2 += `font-weight: ${e3.original.fontWeight};`), `
                <span class="class-name" data-tribute-class-name="${e3.original.value}">${e3.string}</span>
                <span class="class-hint" style="${t2}"></span>
            `;
  } });
  o.setMenuContainer = function(e3) {
    this.menuContainer = e3;
  };
  let s = o.events.callbacks;
  o.attach(i2);
  let c = e2.querySelector(`:scope > span`);
  c instanceof HTMLElement && a2 && (c.style.display = `flex`, c.appendChild(a2), a2.querySelector(`div.icon-wrapper`).addEventListener(`click`, async () => {
    i2.value = await n().contentWindow.windpress.module.classSorter.sort(i2.value), i2.dispatchEvent(new Event(`input`, { bubbles: true }));
  })), e2.dataset.windpressInjected = `true`;
}
const a = new MutationObserver(() => {
  var _a;
  let e2 = (_a = document.evaluate(`//div[contains(@class, 'etch-html-block-properties-wrapper')]//label[contains(@class, 'etch-label')]/span[text()='class']`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue) == null ? void 0 : _a.parentElement;
  e2 && !e2.dataset.windpressInjected && setTimeout(() => {
    e2.dataset.windpressInjected || i(e2);
  }, 100);
});
a.observe(document, { subtree: true, childList: true }), e(`Intellisense: element-attribute-panel.ts module loaded`);
