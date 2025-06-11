import { computed as e, ref as t } from "./runtime-core.esm-bundler-CFIgNHFT.min.js";
import { defineStore as n, useLogStore as r } from "./log-yMc5ppo1.js";
import { useApi as i } from "./api-wSmiQczm.js";
import { _Symbol_default as a, _baseGetTag_default as o, _root_default as s, isObjectLike_default as c, isObject_default as l } from "./isObject-DwiMiGzS.min.js";
import { _Map_default as u, _getNative_default as d, _toSource_default as f, isArray_default as p } from "./_toKey-CxbSDiUe.min.js";
import { _Stack_default as m, _arrayLikeKeys_default as h, _baseUnary_default as g, _cloneArrayBuffer_default as _, _cloneBuffer_default as ee, _cloneTypedArray_default as v, _copyArray_default as te, _copyObject_default as y, _getPrototype_default as ne, _initCloneObject_default as re, _isPrototype_default as ie, _nodeUtil_default as b, _overArg_default as ae, isArrayLike_default as oe, isBuffer_default as se, keysIn_default as x } from "./_initCloneObject-CAdcLSh1.min.js";
import { _assignValue_default as ce } from "./set-kZig-l_I.min.js";
import { createVirtualRef as le } from "./virtualRef-BSHD7wxg.js";
const S = n(`busy`, () => {
  let n2 = r(), i2 = t([]), a2 = e(() => i2.value.length > 0), o2 = e(() => (e2) => i2.value.some((t2) => t2.task === e2));
  function s2(e2, t2) {
    i2.value.unshift({ timestamp: Date.now(), task: e2 }), t2 != null && (typeof t2 == `string` ? n2.add({ message: t2, type: `info`, group: `busy` }) : typeof t2 == `object` && n2.add(Object.assign({ type: `info`, group: `busy` }, t2)));
  }
  function c2(e2) {
    let t2 = false;
    i2.value = i2.value.filter((n3) => t2 ? true : n3.task === e2 ? (t2 = true, false) : true);
  }
  function l2() {
    i2.value = [];
  }
  return { tasks: i2, isBusy: a2, hasTask: o2, add: s2, remove: c2, reset: l2 };
});
var ue = d(s, `WeakMap`), C = ue;
function de(e2, t2) {
  for (var n2 = -1, r2 = e2 == null ? 0 : e2.length; ++n2 < r2 && t2(e2[n2], n2, e2) !== false; ) ;
  return e2;
}
var fe = de, pe = ae(Object.keys, Object), me = pe, he = Object.prototype, ge = he.hasOwnProperty;
function _e(e2) {
  if (!ie(e2)) return me(e2);
  var t2 = [];
  for (var n2 in Object(e2)) ge.call(e2, n2) && n2 != `constructor` && t2.push(n2);
  return t2;
}
var ve = _e;
function ye(e2) {
  return oe(e2) ? h(e2) : ve(e2);
}
var w = ye;
function be(e2, t2) {
  for (var n2 = -1, r2 = t2.length, i2 = e2.length; ++n2 < r2; ) e2[i2 + n2] = t2[n2];
  return e2;
}
var T = be;
function xe(e2, t2) {
  return e2 && y(t2, w(t2), e2);
}
var Se = xe;
function Ce(e2, t2) {
  return e2 && y(t2, x(t2), e2);
}
var we = Ce;
function Te(e2, t2) {
  for (var n2 = -1, r2 = e2 == null ? 0 : e2.length, i2 = 0, a2 = []; ++n2 < r2; ) {
    var o2 = e2[n2];
    t2(o2, n2, e2) && (a2[i2++] = o2);
  }
  return a2;
}
var Ee = Te;
function E() {
  return [];
}
var D = E, De = Object.prototype, Oe = De.propertyIsEnumerable, O = Object.getOwnPropertySymbols, ke = O ? function(e2) {
  return e2 == null ? [] : (e2 = Object(e2), Ee(O(e2), function(t2) {
    return Oe.call(e2, t2);
  }));
} : D, k = ke;
function Ae(e2, t2) {
  return y(e2, k(e2), t2);
}
var je = Ae, Me = Object.getOwnPropertySymbols, Ne = Me ? function(e2) {
  for (var t2 = []; e2; ) T(t2, k(e2)), e2 = ne(e2);
  return t2;
} : D, A = Ne;
function Pe(e2, t2) {
  return y(e2, A(e2), t2);
}
var Fe = Pe;
function Ie(e2, t2, n2) {
  var r2 = t2(e2);
  return p(e2) ? r2 : T(r2, n2(e2));
}
var j = Ie;
function Le(e2) {
  return j(e2, w, k);
}
var M = Le;
function Re(e2) {
  return j(e2, x, A);
}
var ze = Re, Be = d(s, `DataView`), N = Be, Ve = d(s, `Promise`), P = Ve, He = d(s, `Set`), F = He, I = `[object Map]`, Ue = `[object Object]`, L = `[object Promise]`, R = `[object Set]`, z = `[object WeakMap]`, B = `[object DataView]`, We = f(N), Ge = f(u), Ke = f(P), qe = f(F), Je = f(C), V = o;
(N && V(new N(new ArrayBuffer(1))) != B || u && V(new u()) != I || P && V(P.resolve()) != L || F && V(new F()) != R || C && V(new C()) != z) && (V = function(e2) {
  var t2 = o(e2), n2 = t2 == Ue ? e2.constructor : void 0, r2 = n2 ? f(n2) : ``;
  if (r2) switch (r2) {
    case We:
      return B;
    case Ge:
      return I;
    case Ke:
      return L;
    case qe:
      return R;
    case Je:
      return z;
  }
  return t2;
});
var H = V, Ye = Object.prototype, Xe = Ye.hasOwnProperty;
function Ze(e2) {
  var t2 = e2.length, n2 = new e2.constructor(t2);
  return t2 && typeof e2[0] == `string` && Xe.call(e2, `index`) && (n2.index = e2.index, n2.input = e2.input), n2;
}
var Qe = Ze;
function $e(e2, t2) {
  var n2 = t2 ? _(e2.buffer) : e2.buffer;
  return new e2.constructor(n2, e2.byteOffset, e2.byteLength);
}
var et = $e, tt = /\w*$/;
function nt(e2) {
  var t2 = new e2.constructor(e2.source, tt.exec(e2));
  return t2.lastIndex = e2.lastIndex, t2;
}
var rt = nt, U = a ? a.prototype : void 0, W = U ? U.valueOf : void 0;
function it(e2) {
  return W ? Object(W.call(e2)) : {};
}
var at = it, ot = `[object Boolean]`, st = `[object Date]`, ct = `[object Map]`, lt = `[object Number]`, ut = `[object RegExp]`, dt = `[object Set]`, ft = `[object String]`, pt = `[object Symbol]`, mt = `[object ArrayBuffer]`, ht = `[object DataView]`, gt = `[object Float32Array]`, _t = `[object Float64Array]`, vt = `[object Int8Array]`, yt = `[object Int16Array]`, bt = `[object Int32Array]`, xt = `[object Uint8Array]`, St = `[object Uint8ClampedArray]`, Ct = `[object Uint16Array]`, wt = `[object Uint32Array]`;
function Tt(e2, t2, n2) {
  var r2 = e2.constructor;
  switch (t2) {
    case mt:
      return _(e2);
    case ot:
    case st:
      return new r2(+e2);
    case ht:
      return et(e2, n2);
    case gt:
    case _t:
    case vt:
    case yt:
    case bt:
    case xt:
    case St:
    case Ct:
    case wt:
      return v(e2, n2);
    case ct:
      return new r2();
    case lt:
    case ft:
      return new r2(e2);
    case ut:
      return rt(e2);
    case dt:
      return new r2();
    case pt:
      return at(e2);
  }
}
var Et = Tt, Dt = `[object Map]`;
function Ot(e2) {
  return c(e2) && H(e2) == Dt;
}
var kt = Ot, G = b && b.isMap, At = G ? g(G) : kt, jt = At, Mt = `[object Set]`;
function Nt(e2) {
  return c(e2) && H(e2) == Mt;
}
var Pt = Nt, K = b && b.isSet, Ft = K ? g(K) : Pt, It = Ft, Lt = 1, Rt = 2, zt = 4, q = `[object Arguments]`, Bt = `[object Array]`, Vt = `[object Boolean]`, Ht = `[object Date]`, Ut = `[object Error]`, J = `[object Function]`, Wt = `[object GeneratorFunction]`, Gt = `[object Map]`, Kt = `[object Number]`, Y = `[object Object]`, qt = `[object RegExp]`, Jt = `[object Set]`, Yt = `[object String]`, Xt = `[object Symbol]`, X = `[object WeakMap]`, Zt = `[object ArrayBuffer]`, Qt = `[object DataView]`, $t = `[object Float32Array]`, en = `[object Float64Array]`, tn = `[object Int8Array]`, nn = `[object Int16Array]`, rn = `[object Int32Array]`, an = `[object Uint8Array]`, on = `[object Uint8ClampedArray]`, sn = `[object Uint16Array]`, cn = `[object Uint32Array]`, Z = {};
Z[q] = Z[Bt] = Z[Zt] = Z[Qt] = Z[Vt] = Z[Ht] = Z[$t] = Z[en] = Z[tn] = Z[nn] = Z[rn] = Z[Gt] = Z[Kt] = Z[Y] = Z[qt] = Z[Jt] = Z[Yt] = Z[Xt] = Z[an] = Z[on] = Z[sn] = Z[cn] = true, Z[Ut] = Z[J] = Z[X] = false;
function Q(e2, t2, n2, r2, i2, a2) {
  var o2, s2 = t2 & Lt, c2 = t2 & Rt, u2 = t2 & zt;
  if (n2 && (o2 = i2 ? n2(e2, r2, i2, a2) : n2(e2)), o2 !== void 0) return o2;
  if (!l(e2)) return e2;
  var d2 = p(e2);
  if (d2) {
    if (o2 = Qe(e2), !s2) return te(e2, o2);
  } else {
    var f2 = H(e2), h2 = f2 == J || f2 == Wt;
    if (se(e2)) return ee(e2, s2);
    if (f2 == Y || f2 == q || h2 && !i2) {
      if (o2 = c2 || h2 ? {} : re(e2), !s2) return c2 ? Fe(e2, we(o2, e2)) : je(e2, Se(o2, e2));
    } else {
      if (!Z[f2]) return i2 ? e2 : {};
      o2 = Et(e2, f2, s2);
    }
  }
  a2 || (a2 = new m());
  var g2 = a2.get(e2);
  if (g2) return g2;
  a2.set(e2, o2), It(e2) ? e2.forEach(function(r3) {
    o2.add(Q(r3, t2, n2, r3, e2, a2));
  }) : jt(e2) && e2.forEach(function(r3, i3) {
    o2.set(i3, Q(r3, t2, n2, i3, e2, a2));
  });
  var _2 = u2 ? c2 ? ze : M : c2 ? x : w, v2 = d2 ? void 0 : _2(e2);
  return fe(v2 || e2, function(r3, i3) {
    v2 && (i3 = r3, r3 = e2[i3]), ce(o2, i3, Q(r3, t2, n2, i3, e2, a2));
  }), o2;
}
var ln = Q, un = 1, dn = 4;
function fn(e2) {
  return ln(e2, un | dn);
}
var $ = fn;
const pn = n(`settings`, () => {
  let e2 = S(), t2 = i(), { state: n2, getVirtualRef: r2 } = le({});
  async function a2() {
    return e2.add(`settings.doPull`), await t2.request(`/admin/settings/options/index`, { method: `GET` }).then((e3) => (n2.value = $(e3.data.options), { message: e3.data.message, success: true })).catch((e3) => {
    }).finally(() => {
      e2.remove(`settings.doPull`);
    });
  }
  async function o2() {
    return e2.add(`settings.doPush`), t2.request(`/admin/settings/options/store`, { method: `POST`, data: { options: n2.value } }).then((e3) => ({ message: e3.data.message, success: true })).catch((e3) => {
      throw Error(e3.response ? e3.response.data.message : e3.message);
    }).finally(() => {
      e2.remove(`settings.doPush`);
    });
  }
  function s2() {
    Object.keys(n2.value).length === 0 && a2();
  }
  return { options: n2, virtualOptions: r2, doPull: a2, doPush: o2, initPull: s2 };
});
export {
  M as _getAllKeys_default,
  H as _getTag_default,
  $ as cloneDeep_default,
  S as useBusyStore,
  pn as useSettingsStore
};
