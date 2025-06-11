import { decodeBase64 as e, encodeBase64 as t } from "./base64-C-ng-gTH.min.js";
function n(t2) {
  try {
    return JSON.parse(new TextDecoder().decode(e(t2)));
  } catch {
    return console.warn(`Failed to decode VFS container. Falling back to polyfill.`), JSON.parse(atob(t2));
  }
}
function r(e2) {
  try {
    return t(new TextEncoder().encode(JSON.stringify(e2)));
  } catch {
    return console.warn(`Failed to encode VFS container. Falling back to polyfill.`), btoa(JSON.stringify(e2));
  }
}
export {
  n as decodeVFSContainer,
  r as encodeVFSContainer
};
