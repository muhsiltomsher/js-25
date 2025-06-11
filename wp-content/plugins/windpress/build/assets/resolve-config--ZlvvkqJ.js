var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a2, _b2;
import { __commonJSMin as e, __export as t } from "./chunk-GxRd6SvM.min.js";
import { Buffer as n, init_dist$1 as r } from "./dist-BSmntxBi.min.js";
import { require_browser as i } from "./lib-BxXHRCGk.min.js";
import { init_dist$2 as a, process$1 as o } from "./dist-Doa7WVF-.min.js";
import { importLocalModule as s, require_cssesc as c, require_postcss as l } from "./cssesc-5IgvSXT7.js";
var u = Object.create, d = Object.defineProperty, f = Object.getOwnPropertyDescriptor, p = Object.getOwnPropertyNames, m = Object.getPrototypeOf, h = Object.prototype.hasOwnProperty, g = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), _ = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of p(t2)) !h.call(e3, i2) && i2 !== n2 && d(e3, i2, { get: () => t2[i2], enumerable: !(r2 = f(t2, i2)) || r2.enumerable });
  return e3;
}, v = (e3, t2, n2) => (n2 = e3 == null ? {} : u(m(e3)), _(t2 || !e3 || !e3.__esModule ? d(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), y = g((e3, t2) => {
  (function() {
    "use strict";
    function e4(t3, n3, i2) {
      if (!t3) return null;
      e4.caseSensitive || (t3 = t3.toLowerCase());
      var a2 = e4.threshold === null ? null : e4.threshold * t3.length, o2 = e4.thresholdAbsolute, s2;
      s2 = a2 !== null && o2 !== null ? Math.min(a2, o2) : a2 === null ? o2 === null ? null : o2 : a2;
      var c2, l2, u2, d2, f2, p2 = n3.length;
      for (f2 = 0; f2 < p2; f2++) if (l2 = n3[f2], i2 && (l2 = l2[i2]), l2 && (u2 = e4.caseSensitive ? l2 : l2.toLowerCase(), d2 = r2(t3, u2, s2), (s2 === null || d2 < s2) && (s2 = d2, c2 = i2 && e4.returnWinningObject ? n3[f2] : l2, e4.returnFirstMatch))) return c2;
      return c2 || e4.nullResultValue;
    }
    e4.threshold = 0.4, e4.thresholdAbsolute = 20, e4.caseSensitive = false, e4.nullResultValue = null, e4.returnWinningObject = null, e4.returnFirstMatch = false, typeof t2 < `u` && t2.exports ? t2.exports = e4 : window.didYouMean = e4;
    var n2 = 2 ** 32 - 1;
    function r2(e5, t3, r3) {
      r3 = r3 || r3 === 0 ? r3 : n2;
      var i2 = e5.length, a2 = t3.length;
      if (i2 === 0) return Math.min(r3 + 1, a2);
      if (a2 === 0) return Math.min(r3 + 1, i2);
      if (Math.abs(i2 - a2) > r3) return r3 + 1;
      var o2 = [], s2, c2, l2, u2, d2;
      for (s2 = 0; s2 <= a2; s2++) o2[s2] = [s2];
      for (c2 = 0; c2 <= i2; c2++) o2[0][c2] = c2;
      for (s2 = 1; s2 <= a2; s2++) {
        for (l2 = n2, u2 = 1, s2 > r3 && (u2 = s2 - r3), d2 = a2 + 1, d2 > r3 + s2 && (d2 = r3 + s2), c2 = 1; c2 <= i2; c2++) c2 < u2 || c2 > d2 ? o2[s2][c2] = r3 + 1 : t3.charAt(s2 - 1) === e5.charAt(c2 - 1) ? o2[s2][c2] = o2[s2 - 1][c2 - 1] : o2[s2][c2] = Math.min(o2[s2 - 1][c2 - 1] + 1, Math.min(o2[s2][c2 - 1] + 1, o2[s2 - 1][c2] + 1)), o2[s2][c2] < l2 && (l2 = o2[s2][c2]);
        if (l2 > r3) return r3 + 1;
      }
      return o2[a2][i2];
    }
  })();
}), b = v(y()), { threshold: x, thresholdAbsolute: S, caseSensitive: C, nullResultValue: w, returnWinningObject: T, returnFirstMatch: E } = b, ee = b.default ?? b, D = {};
t(D, { default: () => le });
var te = Object.create, O = Object.defineProperty, k = Object.getOwnPropertyDescriptor, ne = Object.getOwnPropertyNames, A = Object.getPrototypeOf, re = Object.prototype.hasOwnProperty, ie = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), ae = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of ne(t2)) !re.call(e3, i2) && i2 !== n2 && O(e3, i2, { get: () => t2[i2], enumerable: !(r2 = k(t2, i2)) || r2.enumerable });
  return e3;
}, oe = (e3, t2, n2) => (n2 = e3 == null ? {} : te(A(e3)), ae(t2 || !e3 || !e3.__esModule ? O(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), se = ie((e3, t2) => {
  (function(n2, r2) {
    typeof e3 == `object` && typeof t2 < `u` ? t2.exports = function(e4, t3, n3, r3, i2) {
      for (t3 = t3.split ? t3.split(`.`) : t3, r3 = 0; r3 < t3.length; r3++) e4 = e4 ? e4[t3[r3]] : i2;
      return e4 === i2 ? n3 : e4;
    } : typeof define == `function` && define.amd ? define(function() {
      return function(e4, t3, n3, r3, i2) {
        for (t3 = t3.split ? t3.split(`.`) : t3, r3 = 0; r3 < t3.length; r3++) e4 = e4 ? e4[t3[r3]] : i2;
        return e4 === i2 ? n3 : e4;
      };
    }) : n2.dlv = function(e4, t3, n3, r3, i2) {
      for (t3 = t3.split ? t3.split(`.`) : t3, r3 = 0; r3 < t3.length; r3++) e4 = e4 ? e4[t3[r3]] : i2;
      return e4 === i2 ? n3 : e4;
    };
  })(e3);
}), ce = oe(se()), le = ce.default ?? ce;
r();
function ue(e3) {
  return Error(`[unenv] ${e3} is not implemented yet!`);
}
function j(e3) {
  return Object.assign(() => {
    throw ue(e3);
  }, { __unenv__: true });
}
function M(e3) {
  return class {
    constructor() {
      __publicField(this, "__unenv__", true);
      throw Error(`[unenv] ${e3} is not implemented yet!`);
    }
  };
}
var de = Object.defineProperty, fe = (e3, t2) => {
  for (var n2 in t2) de(e3, n2, { get: t2[n2], enumerable: true });
}, pe = {};
fe(pe, { getRandomValues: () => ge, randomUUID: () => he, subtle: () => me });
var me = (_a2 = globalThis.crypto) == null ? void 0 : _a2.subtle, he = () => {
  var _a3;
  return (_a3 = globalThis.crypto) == null ? void 0 : _a3.randomUUID();
}, ge = (e3) => {
  var _a3;
  return (_a3 = globalThis.crypto) == null ? void 0 : _a3.getRandomValues(e3);
}, _e = {};
fe(_e, { Certificate: () => yt, Cipher: () => bt, Cipheriv: () => xt, Decipher: () => St, Decipheriv: () => Ct, DiffieHellman: () => wt, DiffieHellmanGroup: () => Tt, ECDH: () => Et, Hash: () => Dt, Hmac: () => Ot, KeyObject: () => kt, Sign: () => At, Verify: () => jt, X509Certificate: () => Mt, checkPrime: () => Ce, checkPrimeSync: () => we, constants: () => Se, createCipher: () => Te, createCipheriv: () => Oe, createDecipher: () => Ee, createDecipheriv: () => ke, createDiffieHellman: () => Ae, createDiffieHellmanGroup: () => je, createECDH: () => Me, createHash: () => Ne, createHmac: () => Pe, createPrivateKey: () => Fe, createPublicKey: () => Ie, createSecretKey: () => Le, createSign: () => Re, createVerify: () => ze, diffieHellman: () => Be, fips: () => xe, generateKey: () => et, generateKeyPair: () => Qe, generateKeyPairSync: () => $e, generateKeySync: () => tt, generatePrime: () => Ve, generatePrimeSync: () => He, getCipherInfo: () => We, getCiphers: () => Ue, getCurves: () => Ge, getDiffieHellman: () => Ke, getFips: () => mt, getHashes: () => qe, hash: () => vt, hkdf: () => Je, hkdfSync: () => Ye, pbkdf2: () => Xe, pbkdf2Sync: () => Ze, privateDecrypt: () => nt, privateEncrypt: () => rt, pseudoRandomBytes: () => De, publicDecrypt: () => it, publicEncrypt: () => at, randomBytes: () => be, randomFill: () => ot, randomFillSync: () => st, randomInt: () => ct, scrypt: () => lt, scryptSync: () => ut, secureHeapUsed: () => _t, setEngine: () => ft, setFips: () => ht, sign: () => dt, timingSafeEqual: () => pt, verify: () => gt, webcrypto: () => ye });
var ve = 65536, ye = new Proxy(globalThis.crypto, { get(e3, t2) {
  return t2 === `CryptoKey` ? globalThis.CryptoKey : typeof globalThis.crypto[t2] == `function` ? globalThis.crypto[t2].bind(globalThis.crypto) : globalThis.crypto[t2];
} }), be = (e3, t2) => {
  let r2 = n.alloc(e3, 0, void 0);
  for (let t3 = 0; t3 < e3; t3 += ve) ge(Uint8Array.prototype.slice.call(r2, t3, t3 + ve));
  if (typeof t2 == `function`) {
    t2(null, r2);
    return;
  }
  return r2;
}, xe = false, Se = {}, Ce = j(`crypto.checkPrime`), we = j(`crypto.checkPrimeSync`), Te = j(`crypto.createCipher`), Ee = j(`crypto.createDecipher`), De = j(`crypto.pseudoRandomBytes`), Oe = j(`crypto.createCipheriv`), ke = j(`crypto.createDecipheriv`), Ae = j(`crypto.createDiffieHellman`), je = j(`crypto.createDiffieHellmanGroup`), Me = j(`crypto.createECDH`), Ne = j(`crypto.createHash`), Pe = j(`crypto.createHmac`), Fe = j(`crypto.createPrivateKey`), Ie = j(`crypto.createPublicKey`), Le = j(`crypto.createSecretKey`), Re = j(`crypto.createSign`), ze = j(`crypto.createVerify`), Be = j(`crypto.diffieHellman`), Ve = j(`crypto.generatePrime`), He = j(`crypto.generatePrimeSync`), Ue = j(`crypto.getCiphers`), We = j(`crypto.getCipherInfo`), Ge = j(`crypto.getCurves`), Ke = j(`crypto.getDiffieHellman`), qe = j(`crypto.getHashes`), Je = j(`crypto.hkdf`), Ye = j(`crypto.hkdfSync`), Xe = j(`crypto.pbkdf2`), Ze = j(`crypto.pbkdf2Sync`), Qe = j(`crypto.generateKeyPair`), $e = j(`crypto.generateKeyPairSync`), et = j(`crypto.generateKey`), tt = j(`crypto.generateKeySync`), nt = j(`crypto.privateDecrypt`), rt = j(`crypto.privateEncrypt`), it = j(`crypto.publicDecrypt`), at = j(`crypto.publicEncrypt`), ot = j(`crypto.randomFill`), st = j(`crypto.randomFillSync`), ct = j(`crypto.randomInt`), lt = j(`crypto.scrypt`), ut = j(`crypto.scryptSync`), dt = j(`crypto.sign`), ft = j(`crypto.setEngine`), pt = j(`crypto.timingSafeEqual`), mt = j(`crypto.getFips`), ht = j(`crypto.setFips`), gt = j(`crypto.verify`), _t = j(`crypto.secureHeapUsed`), vt = j(`crypto.hash`), yt = M(`crypto.Certificate`), bt = M(`crypto.Cipher`), xt = M(`crypto.Cipheriv`), St = M(`crypto.Decipher`), Ct = M(`crypto.Decipheriv`), wt = M(`crypto.DiffieHellman`), Tt = M(`crypto.DiffieHellmanGroup`), Et = M(`crypto.ECDH`), Dt = M(`crypto.Hash`), Ot = M(`crypto.Hmac`), kt = M(`crypto.KeyObject`), At = M(`crypto.Sign`), jt = M(`crypto.Verify`), Mt = M(`crypto.X509Certificate`), Nt = { ALPN_ENABLED: 1, DH_CHECK_P_NOT_PRIME: 1, DH_CHECK_P_NOT_SAFE_PRIME: 2, DH_NOT_SUITABLE_GENERATOR: 8, DH_UNABLE_TO_CHECK_GENERATOR: 4, ENGINE_METHOD_ALL: 65535, ENGINE_METHOD_CIPHERS: 64, ENGINE_METHOD_DH: 4, ENGINE_METHOD_DIGESTS: 128, ENGINE_METHOD_DSA: 2, ENGINE_METHOD_EC: 2048, ENGINE_METHOD_NONE: 0, ENGINE_METHOD_PKEY_ASN1_METHS: 1024, ENGINE_METHOD_PKEY_METHS: 512, ENGINE_METHOD_RAND: 8, ENGINE_METHOD_RSA: 1, OPENSSL_VERSION_NUMBER: 0, POINT_CONVERSION_COMPRESSED: 2, POINT_CONVERSION_HYBRID: 6, POINT_CONVERSION_UNCOMPRESSED: 4, RSA_NO_PADDING: 3, RSA_PKCS1_OAEP_PADDING: 4, RSA_PKCS1_PADDING: 1, RSA_PKCS1_PSS_PADDING: 6, RSA_PSS_SALTLEN_AUTO: -2, RSA_PSS_SALTLEN_DIGEST: -1, RSA_PSS_SALTLEN_MAX_SIGN: -2, RSA_X931_PADDING: 5, SSL_OP_ALL: 2147485776, SSL_OP_ALLOW_NO_DHE_KEX: 1024, SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144, SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304, SSL_OP_CISCO_ANYCONNECT: 32768, SSL_OP_COOKIE_EXCHANGE: 8192, SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648, SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048, SSL_OP_EPHEMERAL_RSA: 0, SSL_OP_LEGACY_SERVER_CONNECT: 4, SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0, SSL_OP_MICROSOFT_SESS_ID_BUG: 0, SSL_OP_MSIE_SSLV2_RSA_PADDING: 0, SSL_OP_NETSCAPE_CA_DN_BUG: 0, SSL_OP_NETSCAPE_CHALLENGE_BUG: 0, SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0, SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0, SSL_OP_NO_COMPRESSION: 131072, SSL_OP_NO_ENCRYPT_THEN_MAC: 524288, SSL_OP_NO_QUERY_MTU: 4096, SSL_OP_NO_RENEGOTIATION: 1073741824, SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536, SSL_OP_NO_SSLv2: 0, SSL_OP_NO_SSLv3: 33554432, SSL_OP_NO_TICKET: 16384, SSL_OP_NO_TLSv1_1: 268435456, SSL_OP_NO_TLSv1_2: 134217728, SSL_OP_NO_TLSv1_3: 536870912, SSL_OP_NO_TLSv1: 67108864, SSL_OP_PKCS1_CHECK_1: 0, SSL_OP_PKCS1_CHECK_2: 0, SSL_OP_PRIORITIZE_CHACHA: 2097152, SSL_OP_SINGLE_DH_USE: 0, SSL_OP_SINGLE_ECDH_USE: 0, SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0, SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0, SSL_OP_TLS_BLOCK_PADDING_BUG: 0, SSL_OP_TLS_D5_BUG: 0, SSL_OP_TLS_ROLLBACK_BUG: 8388608, TLS1_1_VERSION: 0, TLS1_2_VERSION: 0, TLS1_3_VERSION: 0, TLS1_VERSION: 0, defaultCoreCipherList: ``, get defaultCipherList() {
  return Nt.defaultCoreCipherList;
}, set defaultCipherList(e3) {
} }, Pt = Nt, Ft = { ...pe, ..._e, constants: Pt };
function It(e3) {
  return Error(`[unenv] ${e3} is not implemented yet!`);
}
function N(e3) {
  return Object.assign(() => {
    throw It(e3);
  }, { __unenv__: true });
}
var Lt = Object.defineProperty, Rt = (e3, t2) => {
  for (var n2 in t2) Lt(e3, n2, { get: t2[n2], enumerable: true });
}, zt = {};
Rt(zt, { F_OK: () => Bt, R_OK: () => Vt, W_OK: () => Ht, X_OK: () => Ut, constants: () => Wt });
var Bt = 0, Vt = 4, Ht = 2, Ut = 1, Wt = /* @__PURE__ */ Object.create({ UV_FS_SYMLINK_DIR: 1, UV_FS_SYMLINK_JUNCTION: 2, O_RDONLY: 0, O_WRONLY: 1, O_RDWR: 2, UV_DIRENT_UNKNOWN: 0, UV_DIRENT_FILE: 1, UV_DIRENT_DIR: 2, UV_DIRENT_LINK: 3, UV_DIRENT_FIFO: 4, UV_DIRENT_SOCKET: 5, UV_DIRENT_CHAR: 6, UV_DIRENT_BLOCK: 7, S_IFMT: 61440, S_IFREG: 32768, S_IFDIR: 16384, S_IFCHR: 8192, S_IFBLK: 24576, S_IFIFO: 4096, S_IFLNK: 40960, S_IFSOCK: 49152, O_CREAT: 64, O_EXCL: 128, UV_FS_O_FILEMAP: 0, O_NOCTTY: 256, O_TRUNC: 512, O_APPEND: 1024, O_DIRECTORY: 65536, O_NOATIME: 262144, O_NOFOLLOW: 131072, O_SYNC: 1052672, O_DSYNC: 4096, O_DIRECT: 16384, O_NONBLOCK: 2048, S_IRWXU: 448, S_IRUSR: 256, S_IWUSR: 128, S_IXUSR: 64, S_IRWXG: 56, S_IRGRP: 32, S_IWGRP: 16, S_IXGRP: 8, S_IRWXO: 7, S_IROTH: 4, S_IWOTH: 2, S_IXOTH: 1, F_OK: 0, R_OK: 4, W_OK: 2, X_OK: 1, UV_FS_COPYFILE_EXCL: 1, COPYFILE_EXCL: 1, UV_FS_COPYFILE_FICLONE: 2, COPYFILE_FICLONE: 2, UV_FS_COPYFILE_FICLONE_FORCE: 4, COPYFILE_FICLONE_FORCE: 4 }), Gt = {};
Rt(Gt, { access: () => Kt, appendFile: () => yn, chmod: () => un, chown: () => pn, constants: () => Wt, copyFile: () => qt, cp: () => Jt, default: () => wn, glob: () => Cn, lchmod: () => dn, lchown: () => fn, link: () => cn, lstat: () => on, lutimes: () => hn, mkdir: () => tn, mkdtemp: () => _n, open: () => Yt, opendir: () => Xt, readFile: () => bn, readdir: () => nn, readlink: () => rn, realpath: () => gn, rename: () => Zt, rm: () => $t, rmdir: () => en, stat: () => sn, statfs: () => Sn, symlink: () => an, truncate: () => Qt, unlink: () => ln, utimes: () => mn, watch: () => xn, writeFile: () => vn });
var Kt = N(`fs.access`), qt = N(`fs.copyFile`), Jt = N(`fs.cp`), Yt = N(`fs.open`), Xt = N(`fs.opendir`), Zt = N(`fs.rename`), Qt = N(`fs.truncate`), $t = N(`fs.rm`), en = N(`fs.rmdir`), tn = N(`fs.mkdir`), nn = N(`fs.readdir`), rn = N(`fs.readlink`), an = N(`fs.symlink`), on = N(`fs.lstat`), sn = N(`fs.stat`), cn = N(`fs.link`), ln = N(`fs.unlink`), un = N(`fs.chmod`), dn = N(`fs.lchmod`), fn = N(`fs.lchown`), pn = N(`fs.chown`), mn = N(`fs.utimes`), hn = N(`fs.lutimes`), gn = N(`fs.realpath`), _n = N(`fs.mkdtemp`), vn = N(`fs.writeFile`), yn = N(`fs.appendFile`), bn = N(`fs.readFile`), xn = N(`fs.watch`), Sn = N(`fs.statfs`), Cn = N(`fs.glob`), wn = {}, Tn = {};
t(Tn, { Dir: () => Nn, Dirent: () => Pn, F_OK: () => Bt, FileReadStream: () => Rn, FileWriteStream: () => zn, R_OK: () => Vt, ReadStream: () => In, Stats: () => Fn, StatsFs: () => Bn, W_OK: () => Ht, WriteStream: () => Ln, X_OK: () => Ut, _toUnixTimestamp: () => Rr, access: () => Hn, accessSync: () => Hr, appendFile: () => Un, appendFileSync: () => Vr, chmod: () => Gn, chmodSync: () => Wr, chown: () => Wn, chownSync: () => Ur, close: () => _r, closeSync: () => Gr, constants: () => Wt, copyFile: () => Kn, copyFileSync: () => Kr, cp: () => qn, cpSync: () => qr, createReadStream: () => vr, createWriteStream: () => yr, default: () => Oi, exists: () => br, existsSync: () => Jr, fchmod: () => Sr, fchmodSync: () => Xr, fchown: () => xr, fchownSync: () => Yr, fdatasync: () => Cr, fdatasyncSync: () => Zr, fstat: () => wr, fstatSync: () => Qr, fsync: () => Tr, fsyncSync: () => $r, ftruncate: () => Er, ftruncateSync: () => ei, futimes: () => Dr, futimesSync: () => ti, glob: () => Br, globSync: () => Ei, lchmod: () => Yn, lchmodSync: () => ri, lchown: () => Jn, lchownSync: () => ni, link: () => Xn, linkSync: () => ii, lstat: () => Zn, lstatSync: () => Or, lutimes: () => Qn, lutimesSync: () => ai, mkdir: () => $n, mkdirSync: () => oi, mkdtemp: () => er, mkdtempSync: () => si, open: () => nr, openAsBlob: () => zr, openSync: () => ci, opendir: () => rr, opendirSync: () => li, promises: () => Di, read: () => kr, readFile: () => ar, readFileSync: () => pi, readSync: () => di, readdir: () => ir, readdirSync: () => ui, readlink: () => or, readlinkSync: () => mi, readv: () => Ar, readvSync: () => fi, realpath: () => tr, realpathSync: () => jr, rename: () => sr, renameSync: () => hi, rm: () => cr, rmSync: () => gi, rmdir: () => lr, rmdirSync: () => _i, stat: () => ur, statSync: () => Mr, statfs: () => gr, statfsSync: () => Ti, symlink: () => dr, symlinkSync: () => vi, truncate: () => fr, truncateSync: () => yi, unlink: () => pr, unlinkSync: () => bi, unwatchFile: () => Nr, utimes: () => mr, utimesSync: () => xi, watch: () => Pr, watchFile: () => Fr, write: () => Ir, writeFile: () => hr, writeFileSync: () => Si, writeSync: () => Ci, writev: () => Lr, writevSync: () => wi });
var En = function() {
};
function Dn(e3, t2 = {}) {
  En.prototype.name = e3;
  let n2 = {};
  return new Proxy(En, { get(r2, i2) {
    return i2 === `caller` ? null : i2 === `__createMock__` ? Dn : i2 === `__unenv__` ? true : i2 in t2 ? t2[i2] : n2[i2] = n2[i2] || Dn(`${e3}.${i2.toString()}`);
  }, apply(t3, n3, r2) {
    return Dn(`${e3}()`);
  }, construct(t3, n3, r2) {
    return Dn(`[${e3}]`);
  }, enumerate() {
    return [];
  } });
}
var On = Dn(`mock`);
function kn(e3) {
  return Error(`[unenv] ${e3} is not implemented yet!`);
}
function P(e3) {
  return Object.assign(() => {
    throw kn(e3);
  }, { __unenv__: true });
}
function F(e3) {
  let t2 = P(e3);
  return t2.__promisify__ = () => P(e3 + `.__promisify__`), t2.native = t2, t2;
}
var An = Object.defineProperty, jn = (e3, t2) => {
  for (var n2 in t2) An(e3, n2, { get: t2[n2], enumerable: true });
}, Mn = {};
jn(Mn, { Dir: () => Nn, Dirent: () => Pn, FileReadStream: () => Rn, FileWriteStream: () => zn, ReadStream: () => In, Stats: () => Fn, StatsFs: () => Bn, WriteStream: () => Ln });
var Nn = On.__createMock__(`fs.Dir`), Pn = On.__createMock__(`fs.Dirent`), Fn = On.__createMock__(`fs.Stats`), In = On.__createMock__(`fs.ReadStream`), Ln = On.__createMock__(`fs.WriteStream`), Rn = On.__createMock__(`fs.FileReadStream`), zn = On.__createMock__(`fs.FileWriteStream`), Bn = On.__createMock__(`fs.StatsFs`), Vn = {};
jn(Vn, { _toUnixTimestamp: () => Rr, access: () => Hn, accessSync: () => Hr, appendFile: () => Un, appendFileSync: () => Vr, chmod: () => Gn, chmodSync: () => Wr, chown: () => Wn, chownSync: () => Ur, close: () => _r, closeSync: () => Gr, copyFile: () => Kn, copyFileSync: () => Kr, cp: () => qn, cpSync: () => qr, createReadStream: () => vr, createWriteStream: () => yr, exists: () => br, existsSync: () => Jr, fchmod: () => Sr, fchmodSync: () => Xr, fchown: () => xr, fchownSync: () => Yr, fdatasync: () => Cr, fdatasyncSync: () => Zr, fstat: () => wr, fstatSync: () => Qr, fsync: () => Tr, fsyncSync: () => $r, ftruncate: () => Er, ftruncateSync: () => ei, futimes: () => Dr, futimesSync: () => ti, glob: () => Br, globSync: () => Ei, lchmod: () => Yn, lchmodSync: () => ri, lchown: () => Jn, lchownSync: () => ni, link: () => Xn, linkSync: () => ii, lstat: () => Zn, lstatSync: () => Or, lutimes: () => Qn, lutimesSync: () => ai, mkdir: () => $n, mkdirSync: () => oi, mkdtemp: () => er, mkdtempSync: () => si, open: () => nr, openAsBlob: () => zr, openSync: () => ci, opendir: () => rr, opendirSync: () => li, read: () => kr, readFile: () => ar, readFileSync: () => pi, readSync: () => di, readdir: () => ir, readdirSync: () => ui, readlink: () => or, readlinkSync: () => mi, readv: () => Ar, readvSync: () => fi, realpath: () => tr, realpathSync: () => jr, rename: () => sr, renameSync: () => hi, rm: () => cr, rmSync: () => gi, rmdir: () => lr, rmdirSync: () => _i, stat: () => ur, statSync: () => Mr, statfs: () => gr, statfsSync: () => Ti, symlink: () => dr, symlinkSync: () => vi, truncate: () => fr, truncateSync: () => yi, unlink: () => pr, unlinkSync: () => bi, unwatchFile: () => Nr, utimes: () => mr, utimesSync: () => xi, watch: () => Pr, watchFile: () => Fr, write: () => Ir, writeFile: () => hr, writeFileSync: () => Si, writeSync: () => Ci, writev: () => Lr, writevSync: () => wi });
function I(e3) {
  let t2 = function(...t3) {
    let n2 = t3.pop();
    e3().catch((e4) => n2(e4)).then((e4) => n2(void 0, e4));
  };
  return t2.__promisify__ = e3, t2.native = t2, t2;
}
var Hn = I(Kt), Un = I(yn), Wn = I(pn), Gn = I(un), Kn = I(qt), qn = I(Jt), Jn = I(fn), Yn = I(dn), Xn = I(cn), Zn = I(on), Qn = I(hn), $n = I(tn), er = I(_n), tr = I(gn), nr = I(Yt), rr = I(Xt), ir = I(nn), ar = I(bn), or = I(rn), sr = I(Zt), cr = I($t), lr = I(en), ur = I(sn), dr = I(an), fr = I(Qt), pr = I(ln), mr = I(mn), hr = I(vn), gr = I(Sn), _r = F(`fs.close`), vr = F(`fs.createReadStream`), yr = F(`fs.createWriteStream`), br = F(`fs.exists`), xr = F(`fs.fchown`), Sr = F(`fs.fchmod`), Cr = F(`fs.fdatasync`), wr = F(`fs.fstat`), Tr = F(`fs.fsync`), Er = F(`fs.ftruncate`), Dr = F(`fs.futimes`), Or = F(`fs.lstatSync`), kr = F(`fs.read`), Ar = F(`fs.readv`), jr = F(`fs.realpathSync`), Mr = F(`fs.statSync`), Nr = F(`fs.unwatchFile`), Pr = F(`fs.watch`), Fr = F(`fs.watchFile`), Ir = F(`fs.write`), Lr = F(`fs.writev`), Rr = F(`fs._toUnixTimestamp`), zr = F(`fs.openAsBlob`), Br = F(`fs.glob`), Vr = P(`fs.appendFileSync`), Hr = P(`fs.accessSync`), Ur = P(`fs.chownSync`), Wr = P(`fs.chmodSync`), Gr = P(`fs.closeSync`), Kr = P(`fs.copyFileSync`), qr = P(`fs.cpSync`), Jr = () => false, Yr = P(`fs.fchownSync`), Xr = P(`fs.fchmodSync`), Zr = P(`fs.fdatasyncSync`), Qr = P(`fs.fstatSync`), $r = P(`fs.fsyncSync`), ei = P(`fs.ftruncateSync`), ti = P(`fs.futimesSync`), ni = P(`fs.lchownSync`), ri = P(`fs.lchmodSync`), ii = P(`fs.linkSync`), ai = P(`fs.lutimesSync`), oi = P(`fs.mkdirSync`), si = P(`fs.mkdtempSync`), ci = P(`fs.openSync`), li = P(`fs.opendirSync`), ui = P(`fs.readdirSync`), di = P(`fs.readSync`), fi = P(`fs.readvSync`), pi = P(`fs.readFileSync`), mi = P(`fs.readlinkSync`), hi = P(`fs.renameSync`), gi = P(`fs.rmSync`), _i = P(`fs.rmdirSync`), vi = P(`fs.symlinkSync`), yi = P(`fs.truncateSync`), bi = P(`fs.unlinkSync`), xi = P(`fs.utimesSync`), Si = P(`fs.writeFileSync`), Ci = P(`fs.writeSync`), wi = P(`fs.writevSync`), Ti = P(`fs.statfsSync`), Ei = P(`fs.globSync`), Di = Gt, Oi = { ...Mn, ...zt, ...Vn, promises: Di };
a();
function ki(e3) {
  return Error(`[unenv] ${e3} is not implemented yet!`);
}
function Ai(e3) {
  return Object.assign(() => {
    throw ki(e3);
  }, { __unenv__: true });
}
var ji = Object.defineProperty, Mi = (e3, t2) => {
  for (var n2 in t2) ji(e3, n2, { get: t2[n2], enumerable: true });
}, Ni = {};
Mi(Ni, { basename: () => ea, default: () => na, delimiter: () => Vi, dirname: () => Qi, extname: () => Xi, format: () => $i, isAbsolute: () => qi, join: () => Ui, normalize: () => Hi, normalizeString: () => Ki, parse: () => ta, relative: () => Zi, resolve: () => Gi, sep: () => Bi, toNamespacedPath: () => Ji });
var Pi = /^[A-Za-z]:\//;
function Fi(e3 = ``) {
  return e3 && e3.replace(/\\/g, `/`).replace(Pi, (e4) => e4.toUpperCase());
}
var Ii = /^[/\\]{2}/, Li = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/, Ri = /^[A-Za-z]:$/, zi = /^\/([A-Za-z]:)?$/, Bi = `/`, Vi = `:`, Hi = function(e3) {
  if (e3.length === 0) return `.`;
  e3 = Fi(e3);
  let t2 = e3.match(Ii), n2 = qi(e3), r2 = e3[e3.length - 1] === `/`;
  return e3 = Ki(e3, !n2), e3.length === 0 ? n2 ? `/` : r2 ? `./` : `.` : (r2 && (e3 += `/`), Ri.test(e3) && (e3 += `/`), t2 ? n2 ? `//${e3}` : `//./${e3}` : n2 && !qi(e3) ? `/${e3}` : e3);
}, Ui = function(...e3) {
  if (e3.length === 0) return `.`;
  let t2;
  for (let n2 of e3) n2 && n2.length > 0 && (t2 === void 0 ? t2 = n2 : t2 += `/${n2}`);
  return t2 === void 0 ? `.` : Hi(t2.replace(/\/\/+/g, `/`));
};
function Wi() {
  return typeof o < `u` && typeof o.cwd == `function` ? o.cwd().replace(/\\/g, `/`) : `/`;
}
var Gi = function(...e3) {
  e3 = e3.map((e4) => Fi(e4));
  let t2 = ``, n2 = false;
  for (let r2 = e3.length - 1; r2 >= -1 && !n2; r2--) {
    let i2 = r2 >= 0 ? e3[r2] : Wi();
    !i2 || i2.length === 0 || (t2 = `${i2}/${t2}`, n2 = qi(i2));
  }
  return t2 = Ki(t2, !n2), n2 && !qi(t2) ? `/${t2}` : t2.length > 0 ? t2 : `.`;
};
function Ki(e3, t2) {
  let n2 = ``, r2 = 0, i2 = -1, a2 = 0, o2 = null;
  for (let s2 = 0; s2 <= e3.length; ++s2) {
    if (s2 < e3.length) o2 = e3[s2];
    else {
      if (o2 === `/`) break;
      o2 = `/`;
    }
    if (o2 === `/`) {
      if (!(i2 === s2 - 1 || a2 === 1)) if (a2 === 2) {
        if (n2.length < 2 || r2 !== 2 || n2[n2.length - 1] !== `.` || n2[n2.length - 2] !== `.`) {
          if (n2.length > 2) {
            let e4 = n2.lastIndexOf(`/`);
            e4 === -1 ? (n2 = ``, r2 = 0) : (n2 = n2.slice(0, e4), r2 = n2.length - 1 - n2.lastIndexOf(`/`)), i2 = s2, a2 = 0;
            continue;
          } else if (n2.length > 0) {
            n2 = ``, r2 = 0, i2 = s2, a2 = 0;
            continue;
          }
        }
        t2 && (n2 += n2.length > 0 ? `/..` : `..`, r2 = 2);
      } else n2.length > 0 ? n2 += `/${e3.slice(i2 + 1, s2)}` : n2 = e3.slice(i2 + 1, s2), r2 = s2 - i2 - 1;
      i2 = s2, a2 = 0;
    } else o2 === `.` && a2 !== -1 ? ++a2 : a2 = -1;
  }
  return n2;
}
var qi = function(e3) {
  return Li.test(e3);
}, Ji = function(e3) {
  return Fi(e3);
}, Yi = /.(\.[^./]+)$/, Xi = function(e3) {
  let t2 = Yi.exec(Fi(e3));
  return t2 && t2[1] || ``;
}, Zi = function(e3, t2) {
  let n2 = Gi(e3).replace(zi, `$1`).split(`/`), r2 = Gi(t2).replace(zi, `$1`).split(`/`);
  if (r2[0][1] === `:` && n2[0][1] === `:` && n2[0] !== r2[0]) return r2.join(`/`);
  let i2 = [...n2];
  for (let e4 of i2) {
    if (r2[0] !== e4) break;
    n2.shift(), r2.shift();
  }
  return [...n2.map(() => `..`), ...r2].join(`/`);
}, Qi = function(e3) {
  let t2 = Fi(e3).replace(/\/$/, ``).split(`/`).slice(0, -1);
  return t2.length === 1 && Ri.test(t2[0]) && (t2[0] += `/`), t2.join(`/`) || (qi(e3) ? `/` : `.`);
}, $i = function(e3) {
  let t2 = [e3.root, e3.dir, e3.base ?? e3.name + e3.ext].filter(Boolean);
  return Fi(e3.root ? Gi(...t2) : t2.join(`/`));
}, ea = function(e3, t2) {
  let n2 = Fi(e3).split(`/`).pop();
  return t2 && n2.endsWith(t2) ? n2.slice(0, -t2.length) : n2;
}, ta = function(e3) {
  let t2 = Fi(e3).split(`/`).shift() || `/`, n2 = ea(e3), r2 = Xi(n2);
  return { root: t2, dir: Qi(e3), base: n2, ext: r2, name: n2.slice(0, n2.length - r2.length) };
}, na = { __proto__: null, basename: ea, delimiter: Vi, dirname: Qi, extname: Xi, format: $i, isAbsolute: qi, join: Ui, normalize: Hi, normalizeString: Ki, parse: ta, relative: Zi, resolve: Gi, sep: Bi, toNamespacedPath: Ji }, L = { ...Ni, platform: `posix`, posix: void 0, win32: void 0, _makeLong: (e3) => e3, matchesGlob: Ai(`path.matchesGlob`) };
L.posix = L, L.win32 = L;
var ra = L, ia = L, aa = `posix`, oa = L._makeLong, sa = L.matchesGlob, ca = L, la = {};
t(la, { _makeLong: () => oa, basename: () => ea, default: () => ca, delimiter: () => Vi, dirname: () => Qi, extname: () => Xi, format: () => $i, isAbsolute: () => qi, join: () => Ui, matchesGlob: () => sa, normalize: () => Hi, normalizeString: () => Ki, parse: () => ta, platform: () => aa, posix: () => ra, relative: () => Zi, resolve: () => Gi, sep: () => Bi, toNamespacedPath: () => Ji, win32: () => ia });
var ua = function() {
};
function da(e3, t2 = {}) {
  ua.prototype.name = e3;
  let n2 = {};
  return new Proxy(ua, { get(r2, i2) {
    return i2 === `caller` ? null : i2 === `__createMock__` ? da : i2 === `__unenv__` ? true : i2 in t2 ? t2[i2] : n2[i2] = n2[i2] || da(`${e3}.${i2.toString()}`);
  }, apply(t3, n3, r2) {
    return da(`${e3}()`);
  }, construct(t3, n3, r2) {
    return da(`[${e3}]`);
  }, enumerate() {
    return [];
  } });
}
var fa = da(`mock`);
function pa(e3) {
  return Error(`[unenv] ${e3} is not implemented yet!`);
}
function R(e3) {
  return Object.assign(() => {
    throw pa(e3);
  }, { __unenv__: true });
}
var ma = Object.freeze(Object.create(null, { __unenv__: { get: () => true } })), ha = /* @__PURE__ */ Object.create(null), ga = (_b2 = globalThis.process) == null ? void 0 : _b2.env, _a = (e3) => ga || globalThis.__env__ || (e3 ? ha : globalThis), va = new Proxy(ha, { get(e3, t2) {
  return _a()[t2] ?? ha[t2];
}, has(e3, t2) {
  let n2 = _a();
  return t2 in n2 || t2 in ha;
}, set(e3, t2, n2) {
  let r2 = _a(true);
  return r2[t2] = n2, true;
}, deleteProperty(e3, t2) {
  let n2 = _a(true);
  return delete n2[t2], true;
}, ownKeys() {
  let e3 = _a();
  return Object.keys(e3);
} }), ya = Object.assign(function(e3) {
  let t2 = Date.now(), n2 = Math.trunc(t2 / 1e3), r2 = t2 % 1e3 * 1e6;
  if (e3) {
    let t3 = n2 - e3[0], i2 = r2 - e3[0];
    return i2 < 0 && (--t3, i2 = 1e9 + i2), [t3, i2];
  }
  return [n2, r2];
}, { bigint: function() {
  return BigInt(Date.now() * 1e6);
} }), ba = globalThis.queueMicrotask ? (e3, ...t2) => {
  globalThis.queueMicrotask(e3.bind(void 0, ...t2));
} : xa();
function xa() {
  let e3 = [], t2 = false, n2, r2 = -1;
  function i2() {
    !t2 || !n2 || (t2 = false, n2.length > 0 ? e3 = [...n2, ...e3] : r2 = -1, e3.length > 0 && a2());
  }
  function a2() {
    if (t2) return;
    let a3 = setTimeout(i2);
    t2 = true;
    let o2 = e3.length;
    for (; o2; ) {
      for (n2 = e3, e3 = []; ++r2 < o2; ) n2 && n2[r2]();
      r2 = -1, o2 = e3.length;
    }
    n2 = void 0, t2 = false, clearTimeout(a3);
  }
  return (n3, ...r3) => {
    e3.push(n3.bind(void 0, ...r3)), e3.length === 1 && !t2 && setTimeout(a2);
  };
}
var Sa = `unenv`, Ca = [], wa = ``, Ta = { ares: ``, http_parser: ``, icu: ``, modules: ``, node: ``, openssl: ``, uv: ``, v8: ``, zlib: `` };
function z() {
  return gs;
}
var Ea = z, Da = z, Oa = z, ka = z, Aa = z, ja = z, Ma = function(e3) {
  return e3 === `message` || e3 === `multipleResolves` ? gs : false;
}, Na = z, Pa = z, Fa = function(e3) {
  return [];
}, Ia = () => 0, La = function(e3) {
  throw Error(`[unenv] process.binding is not supported`);
}, Ra = `/`, za = function() {
  return Ra;
}, Ba = function(e3) {
  Ra = e3;
}, Va = function() {
  return 0;
}, Ha = function() {
  return 1e3;
}, Ua = function() {
  return 1e3;
}, Wa = function() {
  return 1e3;
}, Ga = function() {
  return 1e3;
}, Ka = function() {
  return [];
}, qa = (e3) => {
}, Ja = R(`process.abort`), Ya = /* @__PURE__ */ new Set(), Xa = ``, Za = ``, Qa = ma, $a = false, eo = () => 0, to = () => 0, no = R(`process.cpuUsage`), ro = 0, io = R(`process.dlopen`), ao = z, oo = z, so = R(`process.eventNames`), co = [], lo = ``, uo = R(`process.exit`), fo = /* @__PURE__ */ Object.create({ inspector: void 0, debug: void 0, uv: void 0, ipv6: void 0, tls_alpn: void 0, tls_sni: void 0, tls_ocsp: void 0, tls: void 0, cached_builtins: void 0 }), po = () => [], mo = R(`process.getMaxListeners`), ho = R(`process.kill`), go = Object.assign(() => ({ arrayBuffers: 0, rss: 0, external: 0, heapTotal: 0, heapUsed: 0 }), { rss: () => 0 }), _o = 1e3, vo = ``, yo = 1e3, bo = R(`process.rawListeners`), xo = /* @__PURE__ */ Object.create({ name: ``, lts: ``, sourceUrl: void 0, headersUrl: void 0 }), So = /* @__PURE__ */ Object.create({ compact: void 0, directory: void 0, filename: void 0, getReport: R(`process.report.getReport`), reportOnFatalError: void 0, reportOnSignal: void 0, reportOnUncaughtException: void 0, signal: void 0, writeReport: R(`process.report.writeReport`) }), Co = R(`process.resourceUsage`), wo = R(`process.setegid`), To = R(`process.seteuid`), Eo = R(`process.setgid`), Do = R(`process.setgroups`), Oo = R(`process.setuid`), ko = R(`process.setMaxListeners`), Ao = R(`process.setSourceMapsEnabled`), jo = fa.__createMock__(`process.stdout`), Mo = fa.__createMock__(`process.stderr`), No = fa.__createMock__(`process.stdin`), Po = false, Fo = () => 0, Io = 0, Lo = R(`process.setUncaughtExceptionCaptureCallback`), Ro = () => false, zo = false, Bo = R(`process.loadEnvFile`), Vo = void 0, Ho = { has: () => false }, Uo = { ref() {
}, unref() {
} }, Wo = false, Go = { register() {
}, unregister() {
}, registerBeforeExit() {
} }, Ko = R(`process.assert`), qo = R(`process.openStdin`), Jo = R(`process._debugEnd`), Yo = R(`process._debugProcess`), Xo = R(`process._fatalException`), Zo = R(`process._getActiveHandles`), Qo = R(`process._getActiveRequests`), $o = R(`process._kill`), es = [], ts = R(`process._rawDebug`), ns = R(`process._startProfilerIdleNotifier`), rs = R(`process.__stopProfilerIdleNotifier`), os = R(`process._tickCallback`), ss = R(`process._linkedBinding`), cs = void 0, ls = R(`process.initgroups`), us = [], ds = z, fs = false, ps = [], ms = 0, hs = 0, gs = { _events: ps, _eventsCount: ms, _exiting: fs, _maxListeners: hs, _debugEnd: Jo, _debugProcess: Yo, _fatalException: Xo, _getActiveHandles: Zo, _getActiveRequests: Qo, _kill: $o, _preload_modules: es, _rawDebug: ts, _startProfilerIdleNotifier: ns, _stopProfilerIdleNotifier: rs, _tickCallback: os, domain: cs, initgroups: ls, moduleLoadList: us, reallyExit: ds, exitCode: Io, abort: Ja, addListener: Da, allowedNodeEnvironmentFlags: Ya, hasUncaughtExceptionCaptureCallback: Ro, setUncaughtExceptionCaptureCallback: Lo, loadEnvFile: Bo, sourceMapsEnabled: zo, throwDeprecation: Wo, mainModule: Vo, permission: Ho, channel: Uo, arch: Xa, argv: Ca, argv0: Za, assert: Ko, binding: La, chdir: Ba, config: Qa, connected: $a, constrainedMemory: eo, availableMemory: to, cpuUsage: no, cwd: za, debugPort: ro, dlopen: io, disconnect: ao, emit: Ma, emitWarning: oo, env: va, eventNames: so, execArgv: co, execPath: lo, exit: uo, finalization: Go, features: fo, getBuiltinModule: qa, getegid: Ha, geteuid: Ua, getgid: Wa, getgroups: Ka, getuid: Ga, getActiveResourcesInfo: po, getMaxListeners: mo, hrtime: ya, kill: ho, listeners: Fa, listenerCount: Ia, memoryUsage: go, nextTick: ba, on: Ea, off: ka, once: Oa, openStdin: qo, pid: _o, platform: vo, ppid: yo, prependListener: Na, prependOnceListener: Pa, rawListeners: bo, release: xo, removeAllListeners: ja, removeListener: Aa, report: So, resourceUsage: Co, setegid: wo, seteuid: To, setgid: Eo, setgroups: Do, setuid: Oo, setMaxListeners: ko, setSourceMapsEnabled: Ao, stderr: Mo, stdin: No, stdout: jo, title: Sa, traceDeprecation: Po, umask: Va, uptime: Fo, version: wa, versions: Ta }, _s = gs, vs = `-`, ys = /^xn--/, bs = /[^\0-\u007F]/, xs = /[.\u3002\uFF0E\uFF61]/g, Ss = { overflow: `Overflow: input needs wider integers to process`, "not-basic": `Illegal input >= 0x80 (not a basic code point)`, "invalid-input": `Invalid input` }, Cs = 35, B = Math.floor, ws = String.fromCharCode;
function Ts(e3) {
  throw RangeError(Ss[e3]);
}
function Es(e3, t2) {
  let n2 = [], r2 = e3.length;
  for (; r2--; ) n2[r2] = t2(e3[r2]);
  return n2;
}
function Ds(e3, t2) {
  let n2 = e3.split(`@`), r2 = ``;
  n2.length > 1 && (r2 = n2[0] + `@`, e3 = n2[1]), e3 = e3.replace(xs, `.`);
  let i2 = e3.split(`.`), a2 = Es(i2, t2).join(`.`);
  return r2 + a2;
}
function Os(e3) {
  let t2 = [], n2 = 0, r2 = e3.length;
  for (; n2 < r2; ) {
    let i2 = e3.charCodeAt(n2++);
    if (i2 >= 55296 && i2 <= 56319 && n2 < r2) {
      let r3 = e3.charCodeAt(n2++);
      (r3 & 64512) == 56320 ? t2.push(((i2 & 1023) << 10) + (r3 & 1023) + 65536) : (t2.push(i2), n2--);
    } else t2.push(i2);
  }
  return t2;
}
var ks = (e3) => String.fromCodePoint(...e3), As = function(e3) {
  return e3 >= 48 && e3 < 58 ? 26 + (e3 - 48) : e3 >= 65 && e3 < 91 ? e3 - 65 : e3 >= 97 && e3 < 123 ? e3 - 97 : 36;
}, js = function(e3, t2) {
  return e3 + 22 + 75 * (e3 < 26) - ((t2 != 0) << 5);
}, Ms = function(e3, t2, n2) {
  let r2 = 0;
  for (e3 = n2 ? B(e3 / 700) : e3 >> 1, e3 += B(e3 / t2); e3 > Cs * 26 >> 1; r2 += 36) e3 = B(e3 / Cs);
  return B(r2 + (Cs + 1) * e3 / (e3 + 38));
}, Ns = function(e3) {
  let t2 = [], n2 = e3.length, r2 = 0, i2 = 128, a2 = 72, o2 = e3.lastIndexOf(vs);
  o2 < 0 && (o2 = 0);
  for (let n3 = 0; n3 < o2; ++n3) e3.charCodeAt(n3) >= 128 && Ts(`not-basic`), t2.push(e3.charCodeAt(n3));
  for (let s2 = o2 > 0 ? o2 + 1 : 0; s2 < n2; ) {
    let o3 = r2;
    for (let t3 = 1, i3 = 36; ; i3 += 36) {
      s2 >= n2 && Ts(`invalid-input`);
      let o4 = As(e3.charCodeAt(s2++));
      o4 >= 36 && Ts(`invalid-input`), o4 > B((2147483647 - r2) / t3) && Ts(`overflow`), r2 += o4 * t3;
      let c3 = i3 <= a2 ? 1 : i3 >= a2 + 26 ? 26 : i3 - a2;
      if (o4 < c3) break;
      let l2 = 36 - c3;
      t3 > B(2147483647 / l2) && Ts(`overflow`), t3 *= l2;
    }
    let c2 = t2.length + 1;
    a2 = Ms(r2 - o3, c2, o3 === 0), B(r2 / c2) > 2147483647 - i2 && Ts(`overflow`), i2 += B(r2 / c2), r2 %= c2, t2.splice(r2++, 0, i2);
  }
  return String.fromCodePoint(...t2);
}, Ps = function(e3) {
  let t2 = [], n2 = Os(e3), r2 = n2.length, i2 = 128, a2 = 0, o2 = 72;
  for (let e4 of n2) e4 < 128 && t2.push(ws(e4));
  let s2 = t2.length, c2 = s2;
  for (s2 && t2.push(vs); c2 < r2; ) {
    let e4 = 2147483647;
    for (let t3 of n2) t3 >= i2 && t3 < e4 && (e4 = t3);
    let r3 = c2 + 1;
    e4 - i2 > B((2147483647 - a2) / r3) && Ts(`overflow`), a2 += (e4 - i2) * r3, i2 = e4;
    for (let e5 of n2) if (e5 < i2 && ++a2 > 2147483647 && Ts(`overflow`), e5 === i2) {
      let e6 = a2;
      for (let n3 = 36; ; n3 += 36) {
        let r4 = n3 <= o2 ? 1 : n3 >= o2 + 26 ? 26 : n3 - o2;
        if (e6 < r4) break;
        let i3 = e6 - r4, a3 = 36 - r4;
        t2.push(ws(js(r4 + i3 % a3, 0))), e6 = B(i3 / a3);
      }
      t2.push(ws(js(e6, 0))), o2 = Ms(a2, r3, c2 === s2), a2 = 0, ++c2;
    }
    ++a2, ++i2;
  }
  return t2.join(``);
}, Fs = function(e3) {
  return Ds(e3, function(e4) {
    return ys.test(e4) ? Ns(e4.slice(4).toLowerCase()) : e4;
  });
}, Is = function(e3) {
  return Ds(e3, function(e4) {
    return bs.test(e4) ? `xn--` + Ps(e4) : e4;
  });
}, Ls = `2.3.1`, Rs = { decode: Os, encode: ks }, zs = { version: Ls, ucs2: Rs, decode: Ns, encode: Ps, toASCII: Is, toUnicode: Fs }, Bs = zs, Vs = Bs, Hs = class extends URIError {
  constructor() {
    super(`URI malformed`);
    __publicField(this, "code", `ERR_INVALID_URI`);
  }
}, Us = Array.from({ length: 256 });
for (let e3 = 0; e3 < 256; ++e3) Us[e3] = `%` + String.prototype.toUpperCase.call((e3 < 16 ? `0` : ``) + Number.prototype.toString.call(e3, 16));
var Ws = new Int8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
function Gs(e3, t2, n2) {
  let r2 = e3.length;
  if (r2 === 0) return ``;
  let i2 = ``, a2 = 0, o2 = 0;
  t: for (; o2 < r2; o2++) {
    let s2 = String.prototype.charCodeAt.call(e3, o2);
    for (; s2 < 128; ) {
      if (t2[s2] !== 1 && (a2 < o2 && (i2 += String.prototype.slice.call(e3, a2, o2)), a2 = o2 + 1, i2 += n2[s2]), ++o2 === r2) break t;
      s2 = String.prototype.charCodeAt.call(e3, o2);
    }
    if (a2 < o2 && (i2 += String.prototype.slice.call(e3, a2, o2)), s2 < 2048) {
      a2 = o2 + 1, i2 += n2[192 | s2 >> 6] + n2[128 | s2 & 63];
      continue;
    }
    if (s2 < 55296 || s2 >= 57344) {
      a2 = o2 + 1, i2 += n2[224 | s2 >> 12] + n2[128 | s2 >> 6 & 63] + n2[128 | s2 & 63];
      continue;
    }
    if (++o2, o2 >= r2) throw new Hs();
    let c2 = String.prototype.charCodeAt.call(e3, o2) & 1023;
    a2 = o2 + 1, s2 = 65536 + ((s2 & 1023) << 10 | c2), i2 += n2[240 | s2 >> 18] + n2[128 | s2 >> 12 & 63] + n2[128 | s2 >> 6 & 63] + n2[128 | s2 & 63];
  }
  return a2 === 0 ? e3 : a2 < r2 ? i2 + String.prototype.slice.call(e3, a2) : i2;
}
var Ks = new Int8Array([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
function qs(e3, t2) {
  let n2 = globalThis.Buffer.allocUnsafe(e3.length), r2 = 0, i2 = 0, a2, o2, s2, c2, l2 = e3.length - 2, u2 = false;
  for (; r2 < e3.length; ) {
    if (a2 = String.prototype.charCodeAt.call(e3, r2), a2 === 43 && t2) {
      n2[i2++] = 32, r2++;
      continue;
    }
    if (a2 === 37 && r2 < l2) if (a2 = String.prototype.charCodeAt.call(e3, ++r2), s2 = Ks[a2], s2 >= 0) o2 = String.prototype.charCodeAt.call(e3, ++r2), c2 = Ks[o2], c2 >= 0 ? (u2 = true, a2 = s2 * 16 + c2) : (n2[i2++] = 37, r2--);
    else {
      n2[i2++] = 37;
      continue;
    }
    n2[i2++] = a2, r2++;
  }
  return u2 ? n2.slice(0, i2) : n2;
}
function Js(e3, t2) {
  try {
    return decodeURIComponent(e3);
  } catch {
    return qs(e3, t2).toString();
  }
}
var Ys = new Int8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0]);
function Xs(e3) {
  return typeof e3 != `string` && (typeof e3 == `object` ? e3 = String(e3) : e3 += ``), Gs(e3, Ys, Us);
}
function Zs(e3) {
  return typeof e3 == `string` ? e3 : typeof e3 == `number` && Number.isFinite(e3) || typeof e3 == `bigint` ? `` + e3 : typeof e3 == `boolean` ? e3 ? `true` : `false` : ``;
}
function Qs(e3, t2) {
  return typeof e3 == `string` ? e3.length > 0 ? t2(e3) : `` : typeof e3 == `number` && Number.isFinite(e3) ? Math.abs(e3) < 1e21 ? `` + e3 : t2(`` + e3) : typeof e3 == `bigint` ? `` + e3 : typeof e3 == `boolean` ? e3 ? `true` : `false` : ``;
}
function $s(e3, t2) {
  return t2(Zs(e3));
}
function ec(e3, t2, n2, r2) {
  t2 || (t2 = `&`), n2 || (n2 = `=`);
  let i2 = Xs;
  r2 && typeof r2.encodeURIComponent == `function` && (i2 = r2.encodeURIComponent);
  let a2 = i2 === Xs ? Qs : $s;
  if (typeof e3 == `object` && e3) {
    let r3 = Object.keys(e3), o2 = r3.length, s2 = ``;
    for (let c2 = 0; c2 < o2; ++c2) {
      let o3 = r3[c2], l2 = e3[o3], u2 = a2(o3, i2);
      if (u2 += n2, Array.isArray(l2)) {
        let e4 = l2.length;
        if (e4 === 0) continue;
        s2 && (s2 += t2);
        for (let n3 = 0; n3 < e4; ++n3) n3 && (s2 += t2), s2 += u2, s2 += a2(l2[n3], i2);
      } else s2 && (s2 += t2), s2 += u2, s2 += a2(l2, i2);
    }
    return s2;
  }
  return ``;
}
function tc(e3) {
  if (e3.length === 0) return [];
  if (e3.length === 1) return [String.prototype.charCodeAt.call(e3, 0)];
  let t2 = Array.from({ length: e3.length });
  for (let n2 = 0; n2 < e3.length; ++n2) t2[n2] = String.prototype.charCodeAt.call(e3, n2);
  return t2;
}
var nc = [38], rc = [61];
function ic(e3, t2, n2, r2, i2, a2) {
  if (t2.length > 0 && r2 && (t2 = oc(t2, a2)), n2.length > 0 && i2 && (n2 = oc(n2, a2)), e3[t2] === void 0) e3[t2] = n2;
  else {
    let r3 = e3[t2];
    r3.pop ? r3[r3.length] = n2 : e3[t2] = [r3, n2];
  }
}
function ac(e3, t2, n2, r2) {
  let i2 = { __proto__: null };
  if (typeof e3 != `string` || e3.length === 0) return i2;
  let a2 = t2 ? tc(String(t2)) : nc, o2 = n2 ? tc(String(n2)) : rc, s2 = a2.length, c2 = o2.length, l2 = 1e3;
  r2 && typeof r2.maxKeys == `number` && (l2 = r2.maxKeys > 0 ? r2.maxKeys : -1);
  let u2 = Js;
  r2 && typeof r2.decodeURIComponent == `function` && (u2 = r2.decodeURIComponent);
  let d2 = u2 !== Js, f2 = 0, p2 = 0, m2 = 0, h2 = ``, g2 = ``, _2 = d2, v2 = d2, y2 = d2 ? `%20` : ` `, b2 = 0;
  for (let t3 = 0; t3 < e3.length; ++t3) {
    let n3 = String.prototype.charCodeAt.call(e3, t3);
    if (n3 === a2[p2]) {
      if (++p2 === s2) {
        let n4 = t3 - p2 + 1;
        if (m2 < c2) {
          if (f2 < n4) h2 += String.prototype.slice.call(e3, f2, n4);
          else if (h2.length === 0) {
            if (--l2 === 0) return i2;
            f2 = t3 + 1, p2 = m2 = 0;
            continue;
          }
        } else f2 < n4 && (g2 += String.prototype.slice.call(e3, f2, n4));
        if (ic(i2, h2, g2, _2, v2, u2), --l2 === 0) return i2;
        _2 = v2 = d2, h2 = g2 = ``, b2 = 0, f2 = t3 + 1, p2 = m2 = 0;
      }
    } else {
      if (p2 = 0, m2 < c2) {
        if (n3 === o2[m2]) {
          if (++m2 === c2) {
            let n4 = t3 - m2 + 1;
            f2 < n4 && (h2 += String.prototype.slice.call(e3, f2, n4)), b2 = 0, f2 = t3 + 1;
          }
          continue;
        } else if (m2 = 0, !_2) {
          if (n3 === 37) {
            b2 = 1;
            continue;
          } else if (b2 > 0) if (Ws[n3] === 1) {
            ++b2 === 3 && (_2 = true);
            continue;
          } else b2 = 0;
        }
        if (n3 === 43) {
          f2 < t3 && (h2 += String.prototype.slice.call(e3, f2, t3)), h2 += y2, f2 = t3 + 1;
          continue;
        }
      }
      n3 === 43 ? (f2 < t3 && (g2 += String.prototype.slice.call(e3, f2, t3)), g2 += y2, f2 = t3 + 1) : v2 || (n3 === 37 ? b2 = 1 : b2 > 0 && (Ws[n3] === 1 ? ++b2 === 3 && (v2 = true) : b2 = 0));
    }
  }
  if (f2 < e3.length) m2 < c2 ? h2 += String.prototype.slice.call(e3, f2) : p2 < s2 && (g2 += String.prototype.slice.call(e3, f2));
  else if (m2 === 0 && h2.length === 0) return i2;
  return ic(i2, h2, g2, _2, v2, u2), i2;
}
function oc(e3, t2) {
  try {
    return t2(e3);
  } catch {
    return Js(e3, true);
  }
}
var sc = {};
t(sc, { URL: () => el, URLSearchParams: () => tl, Url: () => Pc, default: () => il, domainToASCII: () => nl, domainToUnicode: () => rl, fileURLToPath: () => xc, format: () => Xc, parse: () => Gc, pathToFileURL: () => $c, resolve: () => Zc, resolveObject: () => Qc, urlToHttpOptions: () => Sc });
function cc(e3, t2) {
  for (; t2 + 1 < e3.length; t2++) e3[t2] = e3[t2 + 1];
  e3.pop();
}
function lc(e3) {
  return Array.isArray(e3) ? e3.map((e4) => lc(e4)).join(` or `) : e3 ? e3.toString() : `` + e3;
}
var uc = class extends TypeError {
  constructor(e3, t2, n2) {
    super(`The ${e3.includes(`.`) ? `property` : `argument`} '${e3}' ${n2}. Received ${t2}`);
    __publicField(this, "code", `ERR_INVALID_ARG_VALUE`);
  }
}, dc = class extends TypeError {
  constructor(e3, t2, n2) {
    super(`The "${e3}" argument must be of type ${lc(t2)}. Received ${lc(n2)}`);
    __publicField(this, "code", `ERR_INVALID_ARG_TYPE`);
  }
}, fc = class extends TypeError {
  constructor(e3, t2) {
    super(`Invalid URL`);
    __publicField(this, "code", `ERR_INVALID_URL`);
    __publicField(this, "input");
    __publicField(this, "base");
    this.input = e3, t2 != null && (this.base = t2);
  }
}, pc = class extends TypeError {
  constructor(e3) {
    super(`The URL must be of scheme ${e3}`);
    __publicField(this, "code", `ERR_INVALID_URL_SCHEME`);
  }
}, mc = class extends TypeError {
  constructor(e3) {
    super(`Invalid ile URL path: ${e3}`);
    __publicField(this, "code", `ERR_INVALID_FILE_URL_PATH`);
  }
}, hc = class extends TypeError {
  constructor(e3) {
    super(`File URL host must be "localhost" or empty on ${e3}`);
    __publicField(this, "code", `ERR_INVALID_FILE_URL_HOST`);
  }
}, gc = /* @__PURE__ */ new Set([`javascript`, `javascript:`]), _c = /* @__PURE__ */ new Set([`javascript`, `javascript:`]), vc = /* @__PURE__ */ new Set([`http`, `http:`, `https`, `https:`, `ftp`, `ftp:`, `gopher`, `gopher:`, `file`, `file:`, `ws`, `ws:`, `wss`, `wss:`]), yc = /\//g;
function bc(e3, t2) {
  let n2 = t2 == null ? void 0 : t2.windows;
  if (n2 && String.prototype.startsWith.call(e3, `\\\\`)) {
    let t3 = new URL(`file://`), r3 = String.prototype.startsWith.call(e3, `\\\\?\\UNC\\`) ? 8 : 2, i3 = String.prototype.indexOf.call(e3, `\\`, r3);
    if (i3 === -1) throw new uc(`path`, e3, `Missing UNC resource path`);
    let a2 = String.prototype.slice.call(e3, r3, i3);
    return t3.hostname = Is(a2), t3.pathname = Ac(e3.slice(i3).replace(wc, `/`), { windows: n2 }), t3;
  }
  let r2 = n2 ? ca.win32.resolve(e3) : ca.posix.resolve(e3), i2 = String.prototype.charCodeAt.call(e3, e3.length - 1);
  return (i2 === 47 || n2 && i2 === 92) && r2.at(-1) !== ca.sep && (r2 += `/`), r2 = Ac(r2, { windows: n2 }), String.prototype.indexOf.call(r2, `?`) !== -1 && (r2 = r2.replace(Oc, `%3F`)), String.prototype.indexOf.call(r2, `#`) !== -1 && (r2 = r2.replace(kc, `%23`)), new URL(`file://${r2}`);
}
function xc(e3, t2) {
  let n2 = t2 == null ? void 0 : t2.windows;
  if (typeof e3 == `string`) e3 = new URL(e3);
  else if (!Nc(e3)) throw new dc(`path`, [`string`, `URL`], e3);
  if (e3.protocol !== `file:`) throw new pc(`file`);
  return n2 ? jc(e3) : Mc(e3);
}
function Sc(e3) {
  let { hostname: t2, pathname: n2, port: r2, username: i2, password: a2, search: o2 } = e3;
  return { __proto__: null, ...e3, protocol: e3.protocol, hostname: t2 && String.prototype.startsWith.call(t2, `[`) ? String.prototype.slice.call(t2, 1, -1) : t2, hash: e3.hash, search: o2, pathname: n2, path: `${n2 || ``}${o2 || ``}`, href: e3.href, port: r2 === `` ? void 0 : Number(r2), auth: i2 || a2 ? `${decodeURIComponent(i2)}:${decodeURIComponent(a2)}` : void 0 };
}
var Cc = /%/g, wc = /\\/g, Tc = /\n/g, Ec = /\r/g, Dc = /\t/g, Oc = /\?/g, kc = /#/g;
function Ac(e3, t2) {
  let n2 = t2 == null ? void 0 : t2.windows;
  return String.prototype.indexOf.call(e3, `%`) !== -1 && (e3 = e3.replace(Cc, `%25`)), !n2 && String.prototype.indexOf.call(e3, `\\`) !== -1 && (e3 = e3.replace(wc, `%5C`)), String.prototype.indexOf.call(e3, `
`) !== -1 && (e3 = e3.replace(Tc, `%0A`)), String.prototype.indexOf.call(e3, `\r`) !== -1 && (e3 = e3.replace(Ec, `%0D`)), String.prototype.indexOf.call(e3, `	`) !== -1 && (e3 = e3.replace(Dc, `%09`)), e3;
}
function jc(e3) {
  let t2 = e3.hostname, n2 = e3.pathname;
  for (let e4 = 0; e4 < n2.length; e4++) if (n2[e4] === `%`) {
    let t3 = n2.codePointAt(e4 + 2) | 32;
    if (n2[e4 + 1] === `2` && t3 === 102 || n2[e4 + 1] === `5` && t3 === 99) throw new mc(String.raw`must not include encoded \ or / characters`);
  }
  if (n2 = n2.replace(yc, `\\`), n2 = decodeURIComponent(n2), t2 !== ``) return `\\\\${Fs(t2)}${n2}`;
  let r2 = String.prototype.codePointAt.call(n2, 1) | 32, i2 = String.prototype.charAt.call(n2, 2);
  if (r2 < 97 || r2 > 122 || i2 !== `:`) throw new mc(`must be absolute`);
  return String.prototype.slice.call(n2, 1);
}
function Mc(e3) {
  if (e3.hostname !== ``) throw new hc(`??`);
  let t2 = e3.pathname;
  for (let e4 = 0; e4 < t2.length; e4++) if (t2[e4] === `%`) {
    let n2 = String.prototype.codePointAt.call(t2, e4 + 2) | 32;
    if (t2[e4 + 1] === `2` && n2 === 102) throw new mc(`must not include encoded / characters`);
  }
  return decodeURIComponent(t2);
}
function Nc(e3) {
  return !!((e3 == null ? void 0 : e3.href) && e3.protocol && e3.auth === void 0 && e3.path === void 0);
}
var Pc = class e2 {
  constructor() {
    __publicField(this, "auth", null);
    __publicField(this, "hash", null);
    __publicField(this, "host", null);
    __publicField(this, "hostname", null);
    __publicField(this, "href", null);
    __publicField(this, "path", null);
    __publicField(this, "pathname", null);
    __publicField(this, "protocol", null);
    __publicField(this, "search", null);
    __publicField(this, "slashes", null);
    __publicField(this, "port", null);
    __publicField(this, "query", null);
  }
  parse(e3, t2, n2) {
    if (typeof e3 != `string`) throw new dc(`url`, `string`, e3);
    let r2 = false, i2 = false, a2 = -1, o2 = -1, s2 = ``, c2 = 0;
    for (let t3 = 0, n3 = false, l3 = false; t3 < e3.length; ++t3) {
      let u3 = e3.charCodeAt(t3), d3 = u3 < 33 || u3 === 160 || u3 === 65279;
      if (a2 === -1) {
        if (d3) continue;
        c2 = a2 = t3;
      } else n3 ? d3 || (o2 = -1, n3 = false) : d3 && (o2 = t3, n3 = true);
      if (l3) !r2 && u3 === 35 && (r2 = true);
      else switch (u3) {
        case 64:
          i2 = true;
          break;
        case 35:
          r2 = true;
        case 63:
          l3 = true;
          break;
        case 92:
          t3 - c2 > 0 && (s2 += e3.slice(c2, t3)), s2 += `/`, c2 = t3 + 1;
          break;
      }
    }
    if (a2 !== -1 && (c2 === a2 ? s2 = o2 === -1 ? a2 === 0 ? e3 : e3.slice(a2) : e3.slice(a2, o2) : o2 === -1 && c2 < e3.length ? s2 += e3.slice(c2) : o2 !== -1 && c2 < o2 && (s2 += e3.slice(c2, o2))), !n2 && !r2 && !i2) {
      let e4 = Rc.exec(s2);
      if (e4) return this.path = s2, this.href = s2, this.pathname = e4[1], e4[2] ? (this.search = e4[2], t2 ? this.query = ac(this.search.slice(1)) : this.query = this.search.slice(1)) : t2 && (this.search = null, this.query = { __proto__: null }), this;
    }
    let l2 = Fc.exec(s2), u2, d2;
    l2 && (u2 = l2[0], d2 = u2.toLowerCase(), this.protocol = d2, s2 = s2.slice(u2.length));
    let f2;
    if ((n2 || u2 || Lc.test(s2)) && (f2 = s2.charCodeAt(0) === 47 && s2.charCodeAt(1) === 47, f2 && !(u2 && _c.has(d2)) && (s2 = s2.slice(2), this.slashes = true)), !_c.has(d2) && (f2 || u2 && !vc.has(u2))) {
      let t3 = -1, n3 = -1, r3 = -1;
      for (let e4 = 0; e4 < s2.length; ++e4) {
        switch (s2.charCodeAt(e4)) {
          case 9:
          case 10:
          case 13:
            s2 = s2.slice(0, e4) + s2.slice(e4 + 1), --e4;
            break;
          case 32:
          case 34:
          case 37:
          case 39:
          case 59:
          case 60:
          case 62:
          case 92:
          case 94:
          case 96:
          case 123:
          case 124:
          case 125:
            r3 === -1 && (r3 = e4);
            break;
          case 35:
          case 47:
          case 63:
            r3 === -1 && (r3 = e4), t3 = e4;
            break;
          case 64:
            n3 = e4, r3 = -1;
            break;
        }
        if (t3 !== -1) break;
      }
      a2 = 0, n3 !== -1 && (this.auth = decodeURIComponent(s2.slice(0, n3)), a2 = n3 + 1), r3 === -1 ? (this.host = s2.slice(a2), s2 = ``) : (this.host = s2.slice(a2, r3), s2 = s2.slice(r3)), this.parseHost(), typeof this.hostname != `string` && (this.hostname = ``);
      let i3 = this.hostname, o3 = Kc(i3);
      if (o3 || (s2 = Jc(this, s2, i3, e3)), this.hostname.length > Uc ? this.hostname = `` : this.hostname = this.hostname.toLowerCase(), this.hostname !== ``) {
        if (o3) {
          if (Bc.test(this.hostname)) throw new fc(e3);
        } else if (this.hostname = Is(this.hostname), this.hostname === `` || zc.test(this.hostname)) throw new fc(e3);
      }
      let c3 = this.port ? `:` + this.port : ``, l3 = this.hostname || ``;
      this.host = l3 + c3, o3 && (this.hostname = this.hostname.slice(1, -1), s2[0] !== `/` && (s2 = `/` + s2));
    }
    gc.has(d2) || (s2 = Yc(s2));
    let p2 = -1, m2 = -1;
    for (let e4 = 0; e4 < s2.length; ++e4) {
      let t3 = s2.charCodeAt(e4);
      if (t3 === 35) {
        this.hash = s2.slice(e4), m2 = e4;
        break;
      } else t3 === 63 && p2 === -1 && (p2 = e4);
    }
    p2 === -1 ? t2 && (this.search = null, this.query = { __proto__: null }) : (m2 === -1 ? (this.search = s2.slice(p2), this.query = s2.slice(p2 + 1)) : (this.search = s2.slice(p2, m2), this.query = s2.slice(p2 + 1, m2)), t2 && (this.query = ac(this.query)));
    let h2 = p2 !== -1 && (m2 === -1 || p2 < m2) ? p2 : m2;
    if (h2 === -1 ? s2.length > 0 && (this.pathname = s2) : h2 > 0 && (this.pathname = s2.slice(0, h2)), vc.has(d2) && this.hostname && !this.pathname && (this.pathname = `/`), this.pathname || this.search) {
      let e4 = this.pathname || ``, t3 = this.search || ``;
      this.path = e4 + t3;
    }
    return this.href = this.format(), this;
  }
  format() {
    let e3 = this.auth || ``;
    e3 && (e3 = Gs(e3, Vc, Us), e3 += `@`);
    let t2 = this.protocol || ``, n2 = this.pathname || ``, r2 = this.hash || ``, i2 = ``, a2 = ``;
    this.host ? i2 = e3 + this.host : this.hostname && (i2 = e3 + (this.hostname.includes(`:`) && !Kc(this.hostname) ? `[` + this.hostname + `]` : this.hostname), this.port && (i2 += `:` + this.port)), this.query !== null && typeof this.query == `object` && (a2 = ec(this.query));
    let o2 = this.search || a2 && `?` + a2 || ``;
    t2 && t2.charCodeAt(t2.length - 1) !== 58 && (t2 += `:`);
    let s2 = ``, c2 = 0;
    for (let e4 = 0; e4 < n2.length; ++e4) switch (n2.charCodeAt(e4)) {
      case 35:
        e4 - c2 > 0 && (s2 += n2.slice(c2, e4)), s2 += `%23`, c2 = e4 + 1;
        break;
      case 63:
        e4 - c2 > 0 && (s2 += n2.slice(c2, e4)), s2 += `%3F`, c2 = e4 + 1;
        break;
    }
    return c2 > 0 && (n2 = c2 === n2.length ? s2 : s2 + n2.slice(c2)), (this.slashes || vc.has(t2)) && (this.slashes || i2 ? (n2 && n2.charCodeAt(0) !== 47 && (n2 = `/` + n2), i2 = `//` + i2) : t2.length >= 4 && t2.charCodeAt(0) === 102 && t2.charCodeAt(1) === 105 && t2.charCodeAt(2) === 108 && t2.charCodeAt(3) === 101 && (i2 = `//`)), o2 = o2.replace(/#/g, `%23`), r2 && r2.charCodeAt(0) !== 35 && (r2 = `#` + r2), o2 && o2.charCodeAt(0) !== 63 && (o2 = `?` + o2), t2 + i2 + n2 + o2 + r2;
  }
  resolve(e3) {
    return this.resolveObject(Gc(e3, false, true)).format();
  }
  resolveObject(t2) {
    if (typeof t2 == `string`) {
      let n3 = new e2();
      n3.parse(t2, false, true), t2 = n3;
    }
    let n2 = new e2();
    if (Object.assign(n2, this), n2.hash = t2.hash, t2.href === ``) return n2.href = n2.format(), n2;
    if (t2.slashes && !t2.protocol) {
      let e3 = Object.keys(t2).reduce((e4, n3) => (n3 !== `protocol` && (e4[n3] = t2[n3]), e4), {});
      return Object.assign(n2, e3), vc.has(n2.protocol) && n2.hostname && !n2.pathname && (n2.path = n2.pathname = `/`), n2.href = n2.format(), n2;
    }
    if (t2.protocol && t2.protocol !== n2.protocol) {
      if (!vc.has(t2.protocol)) return Object.assign(n2, t2), n2.href = n2.format(), n2;
      if (n2.protocol = t2.protocol, !t2.host && !/^file:?$/.test(t2.protocol) && !_c.has(t2.protocol)) {
        let e3 = (t2.pathname || ``).split(`/`);
        for (; e3.length > 0 && !(t2.host = e3.shift()); ) ;
        t2.host || (t2.host = ``), t2.hostname || (t2.hostname = ``), e3[0] !== `` && e3.unshift(``), e3.length < 2 && e3.unshift(``), n2.pathname = e3.join(`/`);
      } else n2.pathname = t2.pathname;
      if (n2.search = t2.search, n2.query = t2.query, n2.host = t2.host || ``, n2.auth = t2.auth, n2.hostname = t2.hostname || t2.host, n2.port = t2.port, n2.pathname || n2.search) {
        let e3 = n2.pathname || ``, t3 = n2.search || ``;
        n2.path = e3 + t3;
      }
      return n2.slashes = n2.slashes || t2.slashes, n2.href = n2.format(), n2;
    }
    let r2 = n2.pathname && n2.pathname.charAt(0) === `/`, i2 = t2.host || t2.pathname && t2.pathname.charAt(0) === `/`, a2 = i2 || r2 || n2.host && t2.pathname, o2 = a2, s2 = n2.pathname && n2.pathname.split(`/`) || [], c2 = t2.pathname && t2.pathname.split(`/`) || [], l2 = n2.protocol && !vc.has(n2.protocol);
    if (l2 && (n2.hostname = ``, n2.port = null, n2.host && (s2[0] === `` ? s2[0] = n2.host : s2.unshift(n2.host)), n2.host = ``, t2.protocol && (t2.hostname = null, t2.port = null, n2.auth = null, t2.host && (c2[0] === `` ? c2[0] = t2.host : c2.unshift(t2.host)), t2.host = null), a2 && (a2 = c2[0] === `` || s2[0] === ``)), i2) (t2.host || t2.host === ``) && (n2.host !== t2.host && (n2.auth = null), n2.host = t2.host, n2.port = t2.port), (t2.hostname || t2.hostname === ``) && (n2.hostname !== t2.hostname && (n2.auth = null), n2.hostname = t2.hostname), n2.search = t2.search, n2.query = t2.query, s2 = c2;
    else if (c2.length > 0) s2 || (s2 = []), s2.pop(), s2 = s2.concat(c2), n2.search = t2.search, n2.query = t2.query;
    else if (t2.search !== null && t2.search !== void 0) {
      if (l2) {
        n2.hostname = n2.host = s2.shift();
        let e3 = n2.host && n2.host.indexOf(`@`) > 0 && n2.host.split(`@`);
        e3 && (n2.auth = e3.shift(), n2.host = n2.hostname = e3.shift());
      }
      return n2.search = t2.search, n2.query = t2.query, (n2.pathname !== null || n2.search !== null) && (n2.path = (n2.pathname ? n2.pathname : ``) + (n2.search ? n2.search : ``)), n2.href = n2.format(), n2;
    }
    if (s2.length === 0) return n2.pathname = null, n2.search ? n2.path = `/` + n2.search : n2.path = null, n2.href = n2.format(), n2;
    let u2 = s2.at(-1), d2 = (n2.host || t2.host || s2.length > 1) && (u2 === `.` || u2 === `..`) || u2 === ``, f2 = 0;
    for (let e3 = s2.length - 1; e3 >= 0; e3--) u2 = s2[e3], u2 === `.` ? cc(s2, e3) : u2 === `..` ? (cc(s2, e3), f2++) : f2 && (cc(s2, e3), f2--);
    if (!a2 && !o2) for (; f2--; ) s2.unshift(`..`);
    a2 && s2[0] !== `` && (!s2[0] || s2[0].charAt(0) !== `/`) && s2.unshift(``), d2 && s2.join(`/`).slice(-1) !== `/` && s2.push(``);
    let p2 = s2[0] === `` || s2[0] && s2[0].charAt(0) === `/`;
    if (l2) {
      n2.hostname = n2.host = p2 ? `` : s2.length > 0 ? s2.shift() : ``;
      let e3 = n2.host && n2.host.indexOf(`@`) > 0 ? n2.host.split(`@`) : false;
      e3 && (n2.auth = e3.shift(), n2.host = n2.hostname = e3.shift());
    }
    return a2 || (a2 = n2.host && s2.length), a2 && !p2 && s2.unshift(``), s2.length === 0 ? (n2.pathname = null, n2.path = null) : n2.pathname = s2.join(`/`), (n2.pathname !== null || n2.search !== null) && (n2.path = (n2.pathname ? n2.pathname : ``) + (n2.search ? n2.search : ``)), n2.auth = t2.auth || n2.auth, n2.slashes = n2.slashes || t2.slashes, n2.href = n2.format(), n2;
  }
  parseHost() {
    let e3 = this.host, t2 = Ic.exec(e3);
    if (t2) {
      let n2 = t2[0];
      n2 !== `:` && (this.port = n2.slice(1)), e3 = e3.slice(0, e3.length - n2.length);
    }
    e3 && (this.hostname = e3);
  }
}, Fc = /^[\d+.a-z-]+:/i, Ic = /:\d*$/, Lc = /^\/\/[^/@]+@[^/@]+/, Rc = /^(\/\/?(?!\/)[^\s?]*)(\?\S*)?$/, zc = /[\0\t\n\r #%/:<>?@[\\\]^|]/, Bc = /[\0\t\n\r #%/<>?@\\^|]/, Vc = new Int8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0]), Hc = `.........%09.%0A...%0D...................%20..%22.....%27.....................%3C..%3E..............................%5C..%5E..%60...........................%7B.%7C.%7D`.split(`.`), Uc = 255, Wc = false;
function Gc(e3, t2, n2) {
  if (Wc || (Wc = true, console.warn("[DeprecationWarning] [unenv] [node:url] DEP0169: `url.parse()` behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabilities.")), e3 instanceof Pc) return e3;
  let r2 = new Pc();
  return r2.parse(e3, t2, n2), r2;
}
function Kc(e3) {
  return String.prototype.charCodeAt.call(e3, 0) === 91 && String.prototype.charCodeAt.call(e3, e3.length - 1) === 93;
}
var qc = true;
function Jc(e3, t2, n2, r2) {
  for (let i2 = 0; i2 < n2.length; ++i2) {
    let a2 = n2.charCodeAt(i2);
    if (!(a2 !== 47 && a2 !== 92 && a2 !== 35 && a2 !== 63 && a2 !== 58)) return qc && a2 === 58 && (console.warn(`[DeprecationWarning] [unenv] [node:url] DEP0170: The URL ${r2} is invalid. Future versions of Node.js will throw an error.`), qc = false), e3.hostname = n2.slice(0, i2), `/${n2.slice(i2)}${t2}`;
  }
  return t2;
}
function Yc(e3) {
  let t2 = ``, n2 = 0;
  for (let r2 = 0; r2 < e3.length; ++r2) {
    let i2 = Hc[e3.charCodeAt(r2)];
    i2 && (r2 > n2 && (t2 += e3.slice(n2, r2)), t2 += i2, n2 = r2 + 1);
  }
  return n2 === 0 ? e3 : (n2 < e3.length && (t2 += e3.slice(n2)), t2);
}
function Xc(e3, t2) {
  if (typeof e3 == `string`) e3 = Gc(e3);
  else {
    if (typeof e3 != `object` || !e3) throw new dc(`urlObject`, [`Object`, `string`], e3);
    if (e3 instanceof el) {
      let n2 = true, r2 = false, i2 = true, a2 = true;
      t2 && (t2.fragment != null && (n2 = !!t2.fragment), t2.unicode != null && (r2 = !!t2.unicode), t2.search != null && (i2 = !!t2.search), t2.auth != null && (a2 = !!t2.auth));
      let o2 = new el(e3.href);
      return n2 || (o2.hash = ``), i2 || (o2.search = ``), a2 || (o2.username = o2.password = ``), r2 ? Pc.prototype.format.call(o2) : o2.href;
    }
  }
  return Pc.prototype.format.call(e3);
}
function Zc(e3, t2) {
  return Gc(e3, false, true).resolve(t2);
}
function Qc(e3, t2) {
  return e3 ? Gc(e3, false, true).resolveObject(t2) : t2;
}
function $c(e3, t2) {
  return bc(e3, t2);
}
var el = globalThis.URL, tl = globalThis.URLSearchParams, nl = Is, rl = Fs, il = { Url: Pc, parse: Gc, resolve: Zc, resolveObject: Qc, format: Xc, URL: el, URLSearchParams: tl, domainToASCII: nl, domainToUnicode: rl, pathToFileURL: $c, fileURLToPath: xc, urlToHttpOptions: Sc }, al = Object.create, ol = Object.defineProperty, sl = Object.getOwnPropertyDescriptor, cl = Object.getOwnPropertyNames, ll = Object.getPrototypeOf, ul = Object.prototype.hasOwnProperty, dl = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), fl = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of cl(t2)) !ul.call(e3, i2) && i2 !== n2 && ol(e3, i2, { get: () => t2[i2], enumerable: !(r2 = sl(t2, i2)) || r2.enumerable });
  return e3;
}, pl = (e3, t2, n2) => (n2 = e3 == null ? {} : al(ll(e3)), fl(t2 || !e3 || !e3.__esModule ? ol(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), ml = dl((e3, t2) => {
  var n2 = String, r2 = function() {
    return { isColorSupported: false, reset: n2, bold: n2, dim: n2, italic: n2, underline: n2, inverse: n2, hidden: n2, strikethrough: n2, black: n2, red: n2, green: n2, yellow: n2, blue: n2, magenta: n2, cyan: n2, white: n2, gray: n2, bgBlack: n2, bgRed: n2, bgGreen: n2, bgYellow: n2, bgBlue: n2, bgMagenta: n2, bgCyan: n2, bgWhite: n2, blackBright: n2, redBright: n2, greenBright: n2, yellowBright: n2, blueBright: n2, magentaBright: n2, cyanBright: n2, whiteBright: n2, bgBlackBright: n2, bgRedBright: n2, bgGreenBright: n2, bgYellowBright: n2, bgBlueBright: n2, bgMagentaBright: n2, bgCyanBright: n2, bgWhiteBright: n2 };
  };
  t2.exports = r2(), t2.exports.createColors = r2;
}), hl = pl(ml()), { isColorSupported: gl, reset: _l, bold: vl, dim: yl, italic: bl, underline: xl, inverse: Sl, hidden: Cl, strikethrough: wl, black: Tl, red: El, green: Dl, yellow: Ol, blue: kl, magenta: Al, cyan: jl, white: Ml, gray: Nl, bgBlack: Pl, bgRed: Fl, bgGreen: Il, bgYellow: Ll, bgBlue: Rl, bgMagenta: zl, bgCyan: Bl, bgWhite: Vl, blackBright: Hl, redBright: Ul, greenBright: Wl, yellowBright: Gl, blueBright: Kl, magentaBright: ql, cyanBright: Jl, whiteBright: Yl, bgBlackBright: Xl, bgRedBright: Zl, bgGreenBright: Ql, bgYellowBright: $l, bgBlueBright: eu, bgMagentaBright: tu, bgCyanBright: nu, bgWhiteBright: ru, createColors: iu } = hl, V = hl.default ?? hl, au = {};
t(au, { bgBlack: () => Pl, bgBlackBright: () => Xl, bgBlue: () => Rl, bgBlueBright: () => eu, bgCyan: () => Bl, bgCyanBright: () => nu, bgGreen: () => Il, bgGreenBright: () => Ql, bgMagenta: () => zl, bgMagentaBright: () => tu, bgRed: () => Fl, bgRedBright: () => Zl, bgWhite: () => Vl, bgWhiteBright: () => ru, bgYellow: () => Ll, bgYellowBright: () => $l, black: () => Tl, blackBright: () => Hl, blue: () => kl, blueBright: () => Kl, bold: () => vl, createColors: () => iu, cyan: () => jl, cyanBright: () => Jl, default: () => V, dim: () => yl, gray: () => Nl, green: () => Dl, greenBright: () => Wl, hidden: () => Cl, inverse: () => Sl, isColorSupported: () => gl, italic: () => bl, magenta: () => Al, magentaBright: () => ql, red: () => El, redBright: () => Ul, reset: () => _l, strikethrough: () => wl, underline: () => xl, white: () => Ml, whiteBright: () => Yl, yellow: () => Ol, yellowBright: () => Gl });
var ou = {};
t(ou, { default: () => vu });
var su = Object.create, cu = Object.defineProperty, lu = Object.getOwnPropertyDescriptor, uu = Object.getOwnPropertyNames, du = Object.getPrototypeOf, fu = Object.prototype.hasOwnProperty, pu = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), mu = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of uu(t2)) !fu.call(e3, i2) && i2 !== n2 && cu(e3, i2, { get: () => t2[i2], enumerable: !(r2 = lu(t2, i2)) || r2.enumerable });
  return e3;
}, hu = (e3, t2, n2) => (n2 = e3 == null ? {} : su(du(e3)), mu(t2 || !e3 || !e3.__esModule ? cu(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), gu = pu((e3, t2) => {
  "use strict";
  var n2 = /[\t\n\f\r "#'()/;[\\\]{}]/g, r2 = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, i2 = /.[\r\n"'(/\\]/, a2 = /[\da-f]/i;
  t2.exports = function(e4, t3 = {}) {
    let o2 = e4.css.valueOf(), s2 = t3.ignoreErrors, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v2 = o2.length, y2 = 0, b2 = [], x2 = [];
    function S2() {
      return y2;
    }
    function C2(t4) {
      throw e4.error(`Unclosed ` + t4, y2);
    }
    function w2() {
      return x2.length === 0 && y2 >= v2;
    }
    function T2(e5) {
      if (x2.length) return x2.pop();
      if (y2 >= v2) return;
      let t4 = e5 ? e5.ignoreUnclosed : false;
      switch (c2 = o2.charCodeAt(y2), c2) {
        case 10:
        case 32:
        case 9:
        case 13:
        case 12:
          d2 = y2;
          do
            d2 += 1, c2 = o2.charCodeAt(d2);
          while (c2 === 32 || c2 === 10 || c2 === 9 || c2 === 13 || c2 === 12);
          p2 = [`space`, o2.slice(y2, d2)], y2 = d2 - 1;
          break;
        case 91:
        case 93:
        case 123:
        case 125:
        case 58:
        case 59:
        case 41: {
          let e6 = String.fromCharCode(c2);
          p2 = [e6, e6, y2];
          break;
        }
        case 40:
          if (_2 = b2.length ? b2.pop()[1] : ``, g2 = o2.charCodeAt(y2 + 1), _2 === `url` && g2 !== 39 && g2 !== 34 && g2 !== 32 && g2 !== 10 && g2 !== 9 && g2 !== 12 && g2 !== 13) {
            d2 = y2;
            do {
              if (m2 = false, d2 = o2.indexOf(`)`, d2 + 1), d2 === -1) if (s2 || t4) {
                d2 = y2;
                break;
              } else C2(`bracket`);
              for (h2 = d2; o2.charCodeAt(h2 - 1) === 92; ) --h2, m2 = !m2;
            } while (m2);
            p2 = [`brackets`, o2.slice(y2, d2 + 1), y2, d2], y2 = d2;
          } else d2 = o2.indexOf(`)`, y2 + 1), l2 = o2.slice(y2, d2 + 1), d2 === -1 || i2.test(l2) ? p2 = [`(`, `(`, y2] : (p2 = [`brackets`, l2, y2, d2], y2 = d2);
          break;
        case 39:
        case 34:
          f2 = c2 === 39 ? `'` : `"`, d2 = y2;
          do {
            if (m2 = false, d2 = o2.indexOf(f2, d2 + 1), d2 === -1) if (s2 || t4) {
              d2 = y2 + 1;
              break;
            } else C2(`string`);
            for (h2 = d2; o2.charCodeAt(h2 - 1) === 92; ) --h2, m2 = !m2;
          } while (m2);
          p2 = [`string`, o2.slice(y2, d2 + 1), y2, d2], y2 = d2;
          break;
        case 64:
          n2.lastIndex = y2 + 1, n2.test(o2), d2 = n2.lastIndex === 0 ? o2.length - 1 : n2.lastIndex - 2, p2 = [`at-word`, o2.slice(y2, d2 + 1), y2, d2], y2 = d2;
          break;
        case 92:
          for (d2 = y2, u2 = true; o2.charCodeAt(d2 + 1) === 92; ) d2 += 1, u2 = !u2;
          if (c2 = o2.charCodeAt(d2 + 1), u2 && c2 !== 47 && c2 !== 32 && c2 !== 10 && c2 !== 9 && c2 !== 13 && c2 !== 12 && (d2 += 1, a2.test(o2.charAt(d2)))) {
            for (; a2.test(o2.charAt(d2 + 1)); ) d2 += 1;
            o2.charCodeAt(d2 + 1) === 32 && (d2 += 1);
          }
          p2 = [`word`, o2.slice(y2, d2 + 1), y2, d2], y2 = d2;
          break;
        default:
          c2 === 47 && o2.charCodeAt(y2 + 1) === 42 ? (d2 = o2.indexOf(`*/`, y2 + 2) + 1, d2 === 0 && (s2 || t4 ? d2 = o2.length : C2(`comment`)), p2 = [`comment`, o2.slice(y2, d2 + 1), y2, d2], y2 = d2) : (r2.lastIndex = y2 + 1, r2.test(o2), d2 = r2.lastIndex === 0 ? o2.length - 1 : r2.lastIndex - 2, p2 = [`word`, o2.slice(y2, d2 + 1), y2, d2], b2.push(p2), y2 = d2);
          break;
      }
      return y2++, p2;
    }
    function E2(e5) {
      x2.push(e5);
    }
    return { back: E2, endOfFile: w2, nextToken: T2, position: S2 };
  };
}), _u = hu(gu()), vu = _u.default ?? _u, yu = {};
t(yu, { default: () => Pu, registerInput: () => Nu });
var bu = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `picocolors`:
      return t2(au);
    case `postcss/lib/tokenize`:
      return t2(ou);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, xu = Object.create, Su = Object.defineProperty, Cu = Object.getOwnPropertyDescriptor, wu = Object.getOwnPropertyNames, Tu = Object.getPrototypeOf, Eu = Object.prototype.hasOwnProperty, Du = ((e3) => typeof bu < `u` ? bu : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof bu < `u` ? bu : e4)[t2] }) : e3)(function(e3) {
  if (typeof bu < `u`) return bu.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), Ou = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), ku = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of wu(t2)) !Eu.call(e3, i2) && i2 !== n2 && Su(e3, i2, { get: () => t2[i2], enumerable: !(r2 = Cu(t2, i2)) || r2.enumerable });
  return e3;
}, Au = (e3, t2, n2) => (n2 = e3 == null ? {} : xu(Tu(e3)), ku(t2 || !e3 || !e3.__esModule ? Su(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), ju = Ou((e3, t2) => {
  "use strict";
  var n2 = Du(`picocolors`), r2 = Du(`postcss/lib/tokenize`), i2;
  function a2(e4) {
    i2 = e4;
  }
  var o2 = { ";": n2.yellow, ":": n2.yellow, "(": n2.cyan, ")": n2.cyan, "[": n2.yellow, "]": n2.yellow, "{": n2.yellow, "}": n2.yellow, "at-word": n2.cyan, brackets: n2.cyan, call: n2.cyan, class: n2.yellow, comment: n2.gray, hash: n2.magenta, string: n2.green };
  function s2([e4, t3], n3) {
    if (e4 === `word`) {
      if (t3[0] === `.`) return `class`;
      if (t3[0] === `#`) return `hash`;
    }
    if (!n3.endOfFile()) {
      let e5 = n3.nextToken();
      if (n3.back(e5), e5[0] === `brackets` || e5[0] === `(`) return `call`;
    }
    return e4;
  }
  function c2(e4) {
    let t3 = r2(new i2(e4), { ignoreErrors: true }), n3 = ``;
    for (; !t3.endOfFile(); ) {
      let e5 = t3.nextToken(), r3 = o2[s2(e5, t3)];
      r3 ? n3 += e5[1].split(/\r?\n/).map((e6) => r3(e6)).join(`
`) : n3 += e5[1];
    }
    return n3;
  }
  c2.registerInput = a2, t2.exports = c2;
}), Mu = Au(ju()), { registerInput: Nu } = Mu, Pu = Mu.default ?? Mu, Fu = {};
t(Fu, { default: () => Yu });
var Iu = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `picocolors`:
      return t2(au);
    case `postcss/lib/terminal-highlight`:
      return t2(yu);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, Lu = Object.create, Ru = Object.defineProperty, zu = Object.getOwnPropertyDescriptor, Bu = Object.getOwnPropertyNames, Vu = Object.getPrototypeOf, Hu = Object.prototype.hasOwnProperty, Uu = ((e3) => typeof Iu < `u` ? Iu : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof Iu < `u` ? Iu : e4)[t2] }) : e3)(function(e3) {
  if (typeof Iu < `u`) return Iu.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), Wu = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), Gu = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of Bu(t2)) !Hu.call(e3, i2) && i2 !== n2 && Ru(e3, i2, { get: () => t2[i2], enumerable: !(r2 = zu(t2, i2)) || r2.enumerable });
  return e3;
}, Ku = (e3, t2, n2) => (n2 = e3 == null ? {} : Lu(Vu(e3)), Gu(t2 || !e3 || !e3.__esModule ? Ru(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), qu = Wu((e3, t2) => {
  "use strict";
  var n2 = Uu(`picocolors`), r2 = Uu(`postcss/lib/terminal-highlight`), i2 = class e4 extends Error {
    constructor(t3, n3, r3, i3, a2, o2) {
      super(t3), this.name = `CssSyntaxError`, this.reason = t3, a2 && (this.file = a2), i3 && (this.source = i3), o2 && (this.plugin = o2), typeof n3 < `u` && typeof r3 < `u` && (typeof n3 == `number` ? (this.line = n3, this.column = r3) : (this.line = n3.line, this.column = n3.column, this.endLine = r3.line, this.endColumn = r3.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, e4);
    }
    setMessage() {
      this.message = this.plugin ? this.plugin + `: ` : ``, this.message += this.file ? this.file : `<css input>`, typeof this.line < `u` && (this.message += `:` + this.line + `:` + this.column), this.message += `: ` + this.reason;
    }
    showSourceCode(e5) {
      if (!this.source) return ``;
      let t3 = this.source;
      e5 ?? (e5 = n2.isColorSupported);
      let i3 = (e6) => e6, a2 = (e6) => e6, o2 = (e6) => e6;
      if (e5) {
        let { bold: e6, gray: t4, red: s3 } = n2.createColors(true);
        a2 = (t5) => e6(s3(t5)), i3 = (e7) => t4(e7), r2 && (o2 = (e7) => r2(e7));
      }
      let s2 = t3.split(/\r?\n/), c2 = Math.max(this.line - 3, 0), l2 = Math.min(this.line + 2, s2.length), u2 = String(l2).length;
      return s2.slice(c2, l2).map((e6, t4) => {
        let n3 = c2 + 1 + t4, r3 = ` ` + (` ` + n3).slice(-u2) + ` | `;
        if (n3 === this.line) {
          if (e6.length > 160) {
            let t6 = 20, n4 = Math.max(0, this.column - t6), s3 = Math.max(this.column + t6, this.endColumn + t6), c3 = e6.slice(n4, s3), l3 = i3(r3.replace(/\d/g, ` `)) + e6.slice(0, Math.min(this.column - 1, t6 - 1)).replace(/[^\t]/g, ` `);
            return a2(`>`) + i3(r3) + o2(c3) + `
 ` + l3 + a2(`^`);
          }
          let t5 = i3(r3.replace(/\d/g, ` `)) + e6.slice(0, this.column - 1).replace(/[^\t]/g, ` `);
          return a2(`>`) + i3(r3) + o2(e6) + `
 ` + t5 + a2(`^`);
        }
        return ` ` + i3(r3) + o2(e6);
      }).join(`
`);
    }
    toString() {
      let e5 = this.showSourceCode();
      return e5 && (e5 = `

` + e5 + `
`), this.name + `: ` + this.message + e5;
    }
  };
  t2.exports = i2, i2.default = i2;
}), Ju = Ku(qu()), Yu = Ju.default ?? Ju, Xu = {};
t(Xu, { default: () => cd });
var Zu = Object.create, Qu = Object.defineProperty, $u = Object.getOwnPropertyDescriptor, ed = Object.getOwnPropertyNames, td = Object.getPrototypeOf, nd = Object.prototype.hasOwnProperty, rd = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), id = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of ed(t2)) !nd.call(e3, i2) && i2 !== n2 && Qu(e3, i2, { get: () => t2[i2], enumerable: !(r2 = $u(t2, i2)) || r2.enumerable });
  return e3;
}, ad = (e3, t2, n2) => (n2 = e3 == null ? {} : Zu(td(e3)), id(t2 || !e3 || !e3.__esModule ? Qu(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), od = rd((e3, t2) => {
  "use strict";
  var n2 = { after: `
`, beforeClose: `
`, beforeComment: `
`, beforeDecl: `
`, beforeOpen: ` `, beforeRule: `
`, colon: `: `, commentLeft: ` `, commentRight: ` `, emptyBody: ``, indent: `    `, semicolon: false };
  function r2(e4) {
    return e4[0].toUpperCase() + e4.slice(1);
  }
  var i2 = class {
    constructor(e4) {
      this.builder = e4;
    }
    atrule(e4, t3) {
      let n3 = `@` + e4.name, r3 = e4.params ? this.rawValue(e4, `params`) : ``;
      if (typeof e4.raws.afterName < `u` ? n3 += e4.raws.afterName : r3 && (n3 += ` `), e4.nodes) this.block(e4, n3 + r3);
      else {
        let i3 = (e4.raws.between || ``) + (t3 ? `;` : ``);
        this.builder(n3 + r3 + i3, e4);
      }
    }
    beforeAfter(e4, t3) {
      let n3;
      n3 = e4.type === `decl` ? this.raw(e4, null, `beforeDecl`) : e4.type === `comment` ? this.raw(e4, null, `beforeComment`) : t3 === `before` ? this.raw(e4, null, `beforeRule`) : this.raw(e4, null, `beforeClose`);
      let r3 = e4.parent, i3 = 0;
      for (; r3 && r3.type !== `root`; ) i3 += 1, r3 = r3.parent;
      if (n3.includes(`
`)) {
        let t4 = this.raw(e4, null, `indent`);
        if (t4.length) for (let e5 = 0; e5 < i3; e5++) n3 += t4;
      }
      return n3;
    }
    block(e4, t3) {
      let n3 = this.raw(e4, `between`, `beforeOpen`);
      this.builder(t3 + n3 + `{`, e4, `start`);
      let r3;
      e4.nodes && e4.nodes.length ? (this.body(e4), r3 = this.raw(e4, `after`)) : r3 = this.raw(e4, `after`, `emptyBody`), r3 && this.builder(r3), this.builder(`}`, e4, `end`);
    }
    body(e4) {
      let t3 = e4.nodes.length - 1;
      for (; t3 > 0 && e4.nodes[t3].type === `comment`; ) --t3;
      let n3 = this.raw(e4, `semicolon`);
      for (let r3 = 0; r3 < e4.nodes.length; r3++) {
        let i3 = e4.nodes[r3], a2 = this.raw(i3, `before`);
        a2 && this.builder(a2), this.stringify(i3, t3 !== r3 || n3);
      }
    }
    comment(e4) {
      let t3 = this.raw(e4, `left`, `commentLeft`), n3 = this.raw(e4, `right`, `commentRight`);
      this.builder(`/*` + t3 + e4.text + n3 + `*/`, e4);
    }
    decl(e4, t3) {
      let n3 = this.raw(e4, `between`, `colon`), r3 = e4.prop + n3 + this.rawValue(e4, `value`);
      e4.important && (r3 += e4.raws.important || ` !important`), t3 && (r3 += `;`), this.builder(r3, e4);
    }
    document(e4) {
      this.body(e4);
    }
    raw(e4, t3, i3) {
      let a2;
      if (i3 || (i3 = t3), t3 && (a2 = e4.raws[t3], typeof a2 < `u`)) return a2;
      let o2 = e4.parent;
      if (i3 === `before` && (!o2 || o2.type === `root` && o2.first === e4 || o2 && o2.type === `document`)) return ``;
      if (!o2) return n2[i3];
      let s2 = e4.root();
      if (s2.rawCache || (s2.rawCache = {}), typeof s2.rawCache[i3] < `u`) return s2.rawCache[i3];
      if (i3 === `before` || i3 === `after`) return this.beforeAfter(e4, i3);
      {
        let n3 = `raw` + r2(i3);
        this[n3] ? a2 = this[n3](s2, e4) : s2.walk((e5) => {
          if (a2 = e5.raws[t3], typeof a2 < `u`) return false;
        });
      }
      return typeof a2 > `u` && (a2 = n2[i3]), s2.rawCache[i3] = a2, a2;
    }
    rawBeforeClose(e4) {
      let t3;
      return e4.walk((e5) => {
        if (e5.nodes && e5.nodes.length > 0 && typeof e5.raws.after < `u`) return t3 = e5.raws.after, t3.includes(`
`) && (t3 = t3.replace(/[^\n]+$/, ``)), false;
      }), t3 && (t3 = t3.replace(/\S/g, ``)), t3;
    }
    rawBeforeComment(e4, t3) {
      let n3;
      return e4.walkComments((e5) => {
        if (typeof e5.raws.before < `u`) return n3 = e5.raws.before, n3.includes(`
`) && (n3 = n3.replace(/[^\n]+$/, ``)), false;
      }), typeof n3 > `u` ? n3 = this.raw(t3, null, `beforeDecl`) : n3 && (n3 = n3.replace(/\S/g, ``)), n3;
    }
    rawBeforeDecl(e4, t3) {
      let n3;
      return e4.walkDecls((e5) => {
        if (typeof e5.raws.before < `u`) return n3 = e5.raws.before, n3.includes(`
`) && (n3 = n3.replace(/[^\n]+$/, ``)), false;
      }), typeof n3 > `u` ? n3 = this.raw(t3, null, `beforeRule`) : n3 && (n3 = n3.replace(/\S/g, ``)), n3;
    }
    rawBeforeOpen(e4) {
      let t3;
      return e4.walk((e5) => {
        if (e5.type !== `decl` && (t3 = e5.raws.between, typeof t3 < `u`)) return false;
      }), t3;
    }
    rawBeforeRule(e4) {
      let t3;
      return e4.walk((n3) => {
        if (n3.nodes && (n3.parent !== e4 || e4.first !== n3) && typeof n3.raws.before < `u`) return t3 = n3.raws.before, t3.includes(`
`) && (t3 = t3.replace(/[^\n]+$/, ``)), false;
      }), t3 && (t3 = t3.replace(/\S/g, ``)), t3;
    }
    rawColon(e4) {
      let t3;
      return e4.walkDecls((e5) => {
        if (typeof e5.raws.between < `u`) return t3 = e5.raws.between.replace(/[^\s:]/g, ``), false;
      }), t3;
    }
    rawEmptyBody(e4) {
      let t3;
      return e4.walk((e5) => {
        if (e5.nodes && e5.nodes.length === 0 && (t3 = e5.raws.after, typeof t3 < `u`)) return false;
      }), t3;
    }
    rawIndent(e4) {
      if (e4.raws.indent) return e4.raws.indent;
      let t3;
      return e4.walk((n3) => {
        let r3 = n3.parent;
        if (r3 && r3 !== e4 && r3.parent && r3.parent === e4 && typeof n3.raws.before < `u`) {
          let e5 = n3.raws.before.split(`
`);
          return t3 = e5[e5.length - 1], t3 = t3.replace(/\S/g, ``), false;
        }
      }), t3;
    }
    rawSemicolon(e4) {
      let t3;
      return e4.walk((e5) => {
        if (e5.nodes && e5.nodes.length && e5.last.type === `decl` && (t3 = e5.raws.semicolon, typeof t3 < `u`)) return false;
      }), t3;
    }
    rawValue(e4, t3) {
      let n3 = e4[t3], r3 = e4.raws[t3];
      return r3 && r3.value === n3 ? r3.raw : n3;
    }
    root(e4) {
      this.body(e4), e4.raws.after && this.builder(e4.raws.after);
    }
    rule(e4) {
      this.block(e4, this.rawValue(e4, `selector`)), e4.raws.ownSemicolon && this.builder(e4.raws.ownSemicolon, e4, `end`);
    }
    stringify(e4, t3) {
      if (!this[e4.type]) throw Error(`Unknown AST node type ` + e4.type + `. Maybe you need to change PostCSS stringifier.`);
      this[e4.type](e4, t3);
    }
  };
  t2.exports = i2, i2.default = i2;
}), sd = ad(od()), cd = sd.default ?? sd, ld = {};
t(ld, { default: () => Cd });
var ud = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss/lib/stringifier`:
      return t2(Xu);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, dd = Object.create, fd = Object.defineProperty, pd = Object.getOwnPropertyDescriptor, md = Object.getOwnPropertyNames, hd = Object.getPrototypeOf, gd = Object.prototype.hasOwnProperty, _d = ((e3) => typeof ud < `u` ? ud : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof ud < `u` ? ud : e4)[t2] }) : e3)(function(e3) {
  if (typeof ud < `u`) return ud.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), vd = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), yd = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of md(t2)) !gd.call(e3, i2) && i2 !== n2 && fd(e3, i2, { get: () => t2[i2], enumerable: !(r2 = pd(t2, i2)) || r2.enumerable });
  return e3;
}, bd = (e3, t2, n2) => (n2 = e3 == null ? {} : dd(hd(e3)), yd(t2 || !e3 || !e3.__esModule ? fd(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), xd = vd((e3, t2) => {
  "use strict";
  var n2 = _d(`postcss/lib/stringifier`);
  function r2(e4, t3) {
    new n2(t3).stringify(e4);
  }
  t2.exports = r2, r2.default = r2;
}), Sd = bd(xd()), Cd = Sd.default ?? Sd, wd = {};
t(wd, { default: () => Rd, isClean: () => Id, my: () => Ld });
var Td = Object.create, Ed = Object.defineProperty, Dd = Object.getOwnPropertyDescriptor, Od = Object.getOwnPropertyNames, kd = Object.getPrototypeOf, Ad = Object.prototype.hasOwnProperty, jd = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), Md = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of Od(t2)) !Ad.call(e3, i2) && i2 !== n2 && Ed(e3, i2, { get: () => t2[i2], enumerable: !(r2 = Dd(t2, i2)) || r2.enumerable });
  return e3;
}, Nd = (e3, t2, n2) => (n2 = e3 == null ? {} : Td(kd(e3)), Md(t2 || !e3 || !e3.__esModule ? Ed(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), Pd = jd((e3, t2) => {
  "use strict";
  t2.exports.isClean = Symbol(`isClean`), t2.exports.my = Symbol(`my`);
}), Fd = Nd(Pd()), { isClean: Id, my: Ld } = Fd, Rd = Fd.default ?? Fd, zd = {};
t(zd, { default: () => $d });
var Bd = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss/lib/css-syntax-error`:
      return t2(Fu);
    case `postcss/lib/stringifier`:
      return t2(Xu);
    case `postcss/lib/stringify`:
      return t2(ld);
    case `postcss/lib/symbols`:
      return t2(wd);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, Vd = Object.create, Hd = Object.defineProperty, Ud = Object.getOwnPropertyDescriptor, Wd = Object.getOwnPropertyNames, Gd = Object.getPrototypeOf, Kd = Object.prototype.hasOwnProperty, qd = ((e3) => typeof Bd < `u` ? Bd : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof Bd < `u` ? Bd : e4)[t2] }) : e3)(function(e3) {
  if (typeof Bd < `u`) return Bd.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), Jd = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), Yd = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of Wd(t2)) !Kd.call(e3, i2) && i2 !== n2 && Hd(e3, i2, { get: () => t2[i2], enumerable: !(r2 = Ud(t2, i2)) || r2.enumerable });
  return e3;
}, Xd = (e3, t2, n2) => (n2 = e3 == null ? {} : Vd(Gd(e3)), Yd(t2 || !e3 || !e3.__esModule ? Hd(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), Zd = Jd((e3, t2) => {
  "use strict";
  var n2 = qd(`postcss/lib/css-syntax-error`), r2 = qd(`postcss/lib/stringifier`), i2 = qd(`postcss/lib/stringify`), { isClean: a2, my: o2 } = qd(`postcss/lib/symbols`);
  function s2(e4, t3) {
    let n3 = new e4.constructor();
    for (let r3 in e4) {
      if (!Object.prototype.hasOwnProperty.call(e4, r3) || r3 === `proxyCache`) continue;
      let i3 = e4[r3], a3 = typeof i3;
      r3 === `parent` && a3 === `object` ? t3 && (n3[r3] = t3) : r3 === `source` ? n3[r3] = i3 : Array.isArray(i3) ? n3[r3] = i3.map((e5) => s2(e5, n3)) : (a3 === `object` && i3 !== null && (i3 = s2(i3)), n3[r3] = i3);
    }
    return n3;
  }
  function c2(e4, t3) {
    if (t3 && typeof t3.offset < `u`) return t3.offset;
    let n3 = 1, r3 = 1, i3 = 0;
    for (let a3 = 0; a3 < e4.length; a3++) {
      if (r3 === t3.line && n3 === t3.column) {
        i3 = a3;
        break;
      }
      e4[a3] === `
` ? (n3 = 1, r3 += 1) : n3 += 1;
    }
    return i3;
  }
  var l2 = class {
    get proxyOf() {
      return this;
    }
    constructor(e4 = {}) {
      for (let t3 in this.raws = {}, this[a2] = false, this[o2] = true, e4) if (t3 === `nodes`) {
        this.nodes = [];
        for (let n3 of e4[t3]) typeof n3.clone == `function` ? this.append(n3.clone()) : this.append(n3);
      } else this[t3] = e4[t3];
    }
    addToError(e4) {
      if (e4.postcssNode = this, e4.stack && this.source && /\n\s{4}at /.test(e4.stack)) {
        let t3 = this.source;
        e4.stack = e4.stack.replace(/\n\s{4}at /, `$&${t3.input.from}:${t3.start.line}:${t3.start.column}$&`);
      }
      return e4;
    }
    after(e4) {
      return this.parent.insertAfter(this, e4), this;
    }
    assign(e4 = {}) {
      for (let t3 in e4) this[t3] = e4[t3];
      return this;
    }
    before(e4) {
      return this.parent.insertBefore(this, e4), this;
    }
    cleanRaws(e4) {
      delete this.raws.before, delete this.raws.after, e4 || delete this.raws.between;
    }
    clone(e4 = {}) {
      let t3 = s2(this);
      for (let n3 in e4) t3[n3] = e4[n3];
      return t3;
    }
    cloneAfter(e4 = {}) {
      let t3 = this.clone(e4);
      return this.parent.insertAfter(this, t3), t3;
    }
    cloneBefore(e4 = {}) {
      let t3 = this.clone(e4);
      return this.parent.insertBefore(this, t3), t3;
    }
    error(e4, t3 = {}) {
      if (this.source) {
        let { end: n3, start: r3 } = this.rangeBy(t3);
        return this.source.input.error(e4, { column: r3.column, line: r3.line }, { column: n3.column, line: n3.line }, t3);
      }
      return new n2(e4);
    }
    getProxyProcessor() {
      return { get(e4, t3) {
        return t3 === `proxyOf` ? e4 : t3 === `root` ? () => e4.root().toProxy() : e4[t3];
      }, set(e4, t3, n3) {
        return e4[t3] === n3 || (e4[t3] = n3, (t3 === `prop` || t3 === `value` || t3 === `name` || t3 === `params` || t3 === `important` || t3 === `text`) && e4.markDirty()), true;
      } };
    }
    markClean() {
      this[a2] = true;
    }
    markDirty() {
      if (this[a2]) {
        this[a2] = false;
        let e4 = this;
        for (; e4 = e4.parent; ) e4[a2] = false;
      }
    }
    next() {
      if (!this.parent) return;
      let e4 = this.parent.index(this);
      return this.parent.nodes[e4 + 1];
    }
    positionBy(e4 = {}) {
      let t3 = this.source.start;
      if (e4.index) t3 = this.positionInside(e4.index);
      else if (e4.word) {
        let n3 = `document` in this.source.input ? this.source.input.document : this.source.input.css, r3 = n3.slice(c2(n3, this.source.start), c2(n3, this.source.end)).indexOf(e4.word);
        r3 !== -1 && (t3 = this.positionInside(r3));
      }
      return t3;
    }
    positionInside(e4) {
      let t3 = this.source.start.column, n3 = this.source.start.line, r3 = `document` in this.source.input ? this.source.input.document : this.source.input.css, i3 = c2(r3, this.source.start), a3 = i3 + e4;
      for (let e5 = i3; e5 < a3; e5++) r3[e5] === `
` ? (t3 = 1, n3 += 1) : t3 += 1;
      return { column: t3, line: n3, offset: a3 };
    }
    prev() {
      if (!this.parent) return;
      let e4 = this.parent.index(this);
      return this.parent.nodes[e4 - 1];
    }
    rangeBy(e4 = {}) {
      let t3 = `document` in this.source.input ? this.source.input.document : this.source.input.css, n3 = { column: this.source.start.column, line: this.source.start.line, offset: c2(t3, this.source.start) }, r3 = this.source.end ? { column: this.source.end.column + 1, line: this.source.end.line, offset: typeof this.source.end.offset == `number` ? this.source.end.offset : c2(t3, this.source.end) + 1 } : { column: n3.column + 1, line: n3.line, offset: n3.offset + 1 };
      if (e4.word) {
        let i3 = t3.slice(c2(t3, this.source.start), c2(t3, this.source.end)).indexOf(e4.word);
        i3 !== -1 && (n3 = this.positionInside(i3), r3 = this.positionInside(i3 + e4.word.length));
      } else e4.start ? n3 = { column: e4.start.column, line: e4.start.line, offset: c2(t3, e4.start) } : e4.index && (n3 = this.positionInside(e4.index)), e4.end ? r3 = { column: e4.end.column, line: e4.end.line, offset: c2(t3, e4.end) } : typeof e4.endIndex == `number` ? r3 = this.positionInside(e4.endIndex) : e4.index && (r3 = this.positionInside(e4.index + 1));
      return (r3.line < n3.line || r3.line === n3.line && r3.column <= n3.column) && (r3 = { column: n3.column + 1, line: n3.line, offset: n3.offset + 1 }), { end: r3, start: n3 };
    }
    raw(e4, t3) {
      return new r2().raw(this, e4, t3);
    }
    remove() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }
    replaceWith(...e4) {
      if (this.parent) {
        let t3 = this, n3 = false;
        for (let r3 of e4) r3 === this ? n3 = true : n3 ? (this.parent.insertAfter(t3, r3), t3 = r3) : this.parent.insertBefore(t3, r3);
        n3 || this.remove();
      }
      return this;
    }
    root() {
      let e4 = this;
      for (; e4.parent && e4.parent.type !== `document`; ) e4 = e4.parent;
      return e4;
    }
    toJSON(e4, t3) {
      let n3 = {}, r3 = t3 == null;
      t3 || (t3 = /* @__PURE__ */ new Map());
      let i3 = 0;
      for (let e5 in this) {
        if (!Object.prototype.hasOwnProperty.call(this, e5) || e5 === `parent` || e5 === `proxyCache`) continue;
        let r4 = this[e5];
        if (Array.isArray(r4)) n3[e5] = r4.map((e6) => typeof e6 == `object` && e6.toJSON ? e6.toJSON(null, t3) : e6);
        else if (typeof r4 == `object` && r4.toJSON) n3[e5] = r4.toJSON(null, t3);
        else if (e5 === `source`) {
          if (r4 == null) continue;
          let a3 = t3.get(r4.input);
          a3 ?? (a3 = i3, t3.set(r4.input, i3), i3++), n3[e5] = { end: r4.end, inputId: a3, start: r4.start };
        } else n3[e5] = r4;
      }
      return r3 && (n3.inputs = [...t3.keys()].map((e5) => e5.toJSON())), n3;
    }
    toProxy() {
      return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
    }
    toString(e4 = i2) {
      e4.stringify && (e4 = e4.stringify);
      let t3 = ``;
      return e4(this, (e5) => {
        t3 += e5;
      }), t3;
    }
    warn(e4, t3, n3 = {}) {
      let r3 = { node: this };
      for (let e5 in n3) r3[e5] = n3[e5];
      return e4.warn(t3, r3);
    }
  };
  t2.exports = l2, l2.default = l2;
}), Qd = Xd(Zd()), $d = Qd.default ?? Qd, ef = {};
t(ef, { default: () => gf });
var tf = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss/lib/node`:
      return t2(zd);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, nf = Object.create, rf = Object.defineProperty, af = Object.getOwnPropertyDescriptor, sf = Object.getOwnPropertyNames, cf = Object.getPrototypeOf, lf = Object.prototype.hasOwnProperty, uf = ((e3) => typeof tf < `u` ? tf : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof tf < `u` ? tf : e4)[t2] }) : e3)(function(e3) {
  if (typeof tf < `u`) return tf.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), df = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), ff = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of sf(t2)) !lf.call(e3, i2) && i2 !== n2 && rf(e3, i2, { get: () => t2[i2], enumerable: !(r2 = af(t2, i2)) || r2.enumerable });
  return e3;
}, pf = (e3, t2, n2) => (n2 = e3 == null ? {} : nf(cf(e3)), ff(t2 || !e3 || !e3.__esModule ? rf(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), mf = df((e3, t2) => {
  "use strict";
  var n2 = uf(`postcss/lib/node`), r2 = class extends n2 {
    constructor(e4) {
      super(e4), this.type = `comment`;
    }
  };
  t2.exports = r2, r2.default = r2;
}), hf = pf(mf()), gf = hf.default ?? hf, _f = {};
t(_f, { default: () => jf });
var vf = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss/lib/node`:
      return t2(zd);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, yf = Object.create, bf = Object.defineProperty, xf = Object.getOwnPropertyDescriptor, Sf = Object.getOwnPropertyNames, Cf = Object.getPrototypeOf, wf = Object.prototype.hasOwnProperty, Tf = ((e3) => typeof vf < `u` ? vf : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof vf < `u` ? vf : e4)[t2] }) : e3)(function(e3) {
  if (typeof vf < `u`) return vf.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), Ef = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), Df = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of Sf(t2)) !wf.call(e3, i2) && i2 !== n2 && bf(e3, i2, { get: () => t2[i2], enumerable: !(r2 = xf(t2, i2)) || r2.enumerable });
  return e3;
}, Of = (e3, t2, n2) => (n2 = e3 == null ? {} : yf(Cf(e3)), Df(t2 || !e3 || !e3.__esModule ? bf(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), kf = Ef((e3, t2) => {
  "use strict";
  var n2 = Tf(`postcss/lib/node`), r2 = class extends n2 {
    get variable() {
      return this.prop.startsWith(`--`) || this.prop[0] === `$`;
    }
    constructor(e4) {
      e4 && typeof e4.value < `u` && typeof e4.value != `string` && (e4 = { ...e4, value: String(e4.value) }), super(e4), this.type = `decl`;
    }
  };
  t2.exports = r2, r2.default = r2;
}), Af = Of(kf()), jf = Af.default ?? Af, Mf = {};
t(Mf, { default: () => Kf });
var Nf = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss/lib/comment`:
      return t2(ef);
    case `postcss/lib/declaration`:
      return t2(_f);
    case `postcss/lib/node`:
      return t2(zd);
    case `postcss/lib/symbols`:
      return t2(wd);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, Pf = Object.create, Ff = Object.defineProperty, If = Object.getOwnPropertyDescriptor, Lf = Object.getOwnPropertyNames, Rf = Object.getPrototypeOf, zf = Object.prototype.hasOwnProperty, Bf = ((e3) => typeof Nf < `u` ? Nf : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof Nf < `u` ? Nf : e4)[t2] }) : e3)(function(e3) {
  if (typeof Nf < `u`) return Nf.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), Vf = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), Hf = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of Lf(t2)) !zf.call(e3, i2) && i2 !== n2 && Ff(e3, i2, { get: () => t2[i2], enumerable: !(r2 = If(t2, i2)) || r2.enumerable });
  return e3;
}, Uf = (e3, t2, n2) => (n2 = e3 == null ? {} : Pf(Rf(e3)), Hf(t2 || !e3 || !e3.__esModule ? Ff(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), Wf = Vf((e3, t2) => {
  "use strict";
  var n2 = Bf(`postcss/lib/comment`), r2 = Bf(`postcss/lib/declaration`), i2 = Bf(`postcss/lib/node`), { isClean: a2, my: o2 } = Bf(`postcss/lib/symbols`), s2, c2, l2, u2;
  function d2(e4) {
    return e4.map((e5) => (e5.nodes && (e5.nodes = d2(e5.nodes)), delete e5.source, e5));
  }
  function f2(e4) {
    if (e4[a2] = false, e4.proxyOf.nodes) for (let t3 of e4.proxyOf.nodes) f2(t3);
  }
  var p2 = class e4 extends i2 {
    get first() {
      if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
    }
    get last() {
      if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
    append(...e5) {
      for (let t3 of e5) {
        let e6 = this.normalize(t3, this.last);
        for (let t4 of e6) this.proxyOf.nodes.push(t4);
      }
      return this.markDirty(), this;
    }
    cleanRaws(e5) {
      if (super.cleanRaws(e5), this.nodes) for (let t3 of this.nodes) t3.cleanRaws(e5);
    }
    each(e5) {
      if (!this.proxyOf.nodes) return;
      let t3 = this.getIterator(), n3, r3;
      for (; this.indexes[t3] < this.proxyOf.nodes.length && (n3 = this.indexes[t3], r3 = e5(this.proxyOf.nodes[n3], n3), r3 !== false); ) this.indexes[t3] += 1;
      return delete this.indexes[t3], r3;
    }
    every(e5) {
      return this.nodes.every(e5);
    }
    getIterator() {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
      let e5 = this.lastEach;
      return this.indexes[e5] = 0, e5;
    }
    getProxyProcessor() {
      return { get(e5, t3) {
        return t3 === `proxyOf` ? e5 : e5[t3] ? t3 === `each` || typeof t3 == `string` && t3.startsWith(`walk`) ? (...n3) => e5[t3](...n3.map((e6) => typeof e6 == `function` ? (t4, n4) => e6(t4.toProxy(), n4) : e6)) : t3 === `every` || t3 === `some` ? (n3) => e5[t3]((e6, ...t4) => n3(e6.toProxy(), ...t4)) : t3 === `root` ? () => e5.root().toProxy() : t3 === `nodes` ? e5.nodes.map((e6) => e6.toProxy()) : t3 === `first` || t3 === `last` ? e5[t3].toProxy() : e5[t3] : e5[t3];
      }, set(e5, t3, n3) {
        return e5[t3] === n3 || (e5[t3] = n3, (t3 === `name` || t3 === `params` || t3 === `selector`) && e5.markDirty()), true;
      } };
    }
    index(e5) {
      return typeof e5 == `number` ? e5 : (e5.proxyOf && (e5 = e5.proxyOf), this.proxyOf.nodes.indexOf(e5));
    }
    insertAfter(e5, t3) {
      let n3 = this.index(e5), r3 = this.normalize(t3, this.proxyOf.nodes[n3]).reverse();
      n3 = this.index(e5);
      for (let e6 of r3) this.proxyOf.nodes.splice(n3 + 1, 0, e6);
      let i3;
      for (let e6 in this.indexes) i3 = this.indexes[e6], n3 < i3 && (this.indexes[e6] = i3 + r3.length);
      return this.markDirty(), this;
    }
    insertBefore(e5, t3) {
      let n3 = this.index(e5), r3 = n3 === 0 ? `prepend` : false, i3 = this.normalize(t3, this.proxyOf.nodes[n3], r3).reverse();
      n3 = this.index(e5);
      for (let e6 of i3) this.proxyOf.nodes.splice(n3, 0, e6);
      let a3;
      for (let e6 in this.indexes) a3 = this.indexes[e6], n3 <= a3 && (this.indexes[e6] = a3 + i3.length);
      return this.markDirty(), this;
    }
    normalize(t3, i3) {
      if (typeof t3 == `string`) t3 = d2(c2(t3).nodes);
      else if (typeof t3 > `u`) t3 = [];
      else if (Array.isArray(t3)) {
        t3 = t3.slice(0);
        for (let e5 of t3) e5.parent && e5.parent.removeChild(e5, `ignore`);
      } else if (t3.type === `root` && this.type !== `document`) {
        t3 = t3.nodes.slice(0);
        for (let e5 of t3) e5.parent && e5.parent.removeChild(e5, `ignore`);
      } else if (t3.type) t3 = [t3];
      else if (t3.prop) {
        if (typeof t3.value > `u`) throw Error(`Value field is missed in node creation`);
        typeof t3.value != `string` && (t3.value = String(t3.value)), t3 = [new r2(t3)];
      } else if (t3.selector || t3.selectors) t3 = [new u2(t3)];
      else if (t3.name) t3 = [new s2(t3)];
      else if (t3.text) t3 = [new n2(t3)];
      else throw Error(`Unknown node type in node creation`);
      return t3.map((t4) => (t4[o2] || e4.rebuild(t4), t4 = t4.proxyOf, t4.parent && t4.parent.removeChild(t4), t4[a2] && f2(t4), t4.raws || (t4.raws = {}), typeof t4.raws.before > `u` && i3 && typeof i3.raws.before < `u` && (t4.raws.before = i3.raws.before.replace(/\S/g, ``)), t4.parent = this.proxyOf, t4));
    }
    prepend(...e5) {
      e5 = e5.reverse();
      for (let t3 of e5) {
        let e6 = this.normalize(t3, this.first, `prepend`).reverse();
        for (let t4 of e6) this.proxyOf.nodes.unshift(t4);
        for (let t4 in this.indexes) this.indexes[t4] = this.indexes[t4] + e6.length;
      }
      return this.markDirty(), this;
    }
    push(e5) {
      return e5.parent = this, this.proxyOf.nodes.push(e5), this;
    }
    removeAll() {
      for (let e5 of this.proxyOf.nodes) e5.parent = void 0;
      return this.proxyOf.nodes = [], this.markDirty(), this;
    }
    removeChild(e5) {
      e5 = this.index(e5), this.proxyOf.nodes[e5].parent = void 0, this.proxyOf.nodes.splice(e5, 1);
      let t3;
      for (let n3 in this.indexes) t3 = this.indexes[n3], t3 >= e5 && (this.indexes[n3] = t3 - 1);
      return this.markDirty(), this;
    }
    replaceValues(e5, t3, n3) {
      return n3 || (n3 = t3, t3 = {}), this.walkDecls((r3) => {
        t3.props && !t3.props.includes(r3.prop) || t3.fast && !r3.value.includes(t3.fast) || (r3.value = r3.value.replace(e5, n3));
      }), this.markDirty(), this;
    }
    some(e5) {
      return this.nodes.some(e5);
    }
    walk(e5) {
      return this.each((t3, n3) => {
        let r3;
        try {
          r3 = e5(t3, n3);
        } catch (e6) {
          throw t3.addToError(e6);
        }
        return r3 !== false && t3.walk && (r3 = t3.walk(e5)), r3;
      });
    }
    walkAtRules(e5, t3) {
      return t3 ? e5 instanceof RegExp ? this.walk((n3, r3) => {
        if (n3.type === `atrule` && e5.test(n3.name)) return t3(n3, r3);
      }) : this.walk((n3, r3) => {
        if (n3.type === `atrule` && n3.name === e5) return t3(n3, r3);
      }) : (t3 = e5, this.walk((e6, n3) => {
        if (e6.type === `atrule`) return t3(e6, n3);
      }));
    }
    walkComments(e5) {
      return this.walk((t3, n3) => {
        if (t3.type === `comment`) return e5(t3, n3);
      });
    }
    walkDecls(e5, t3) {
      return t3 ? e5 instanceof RegExp ? this.walk((n3, r3) => {
        if (n3.type === `decl` && e5.test(n3.prop)) return t3(n3, r3);
      }) : this.walk((n3, r3) => {
        if (n3.type === `decl` && n3.prop === e5) return t3(n3, r3);
      }) : (t3 = e5, this.walk((e6, n3) => {
        if (e6.type === `decl`) return t3(e6, n3);
      }));
    }
    walkRules(e5, t3) {
      return t3 ? e5 instanceof RegExp ? this.walk((n3, r3) => {
        if (n3.type === `rule` && e5.test(n3.selector)) return t3(n3, r3);
      }) : this.walk((n3, r3) => {
        if (n3.type === `rule` && n3.selector === e5) return t3(n3, r3);
      }) : (t3 = e5, this.walk((e6, n3) => {
        if (e6.type === `rule`) return t3(e6, n3);
      }));
    }
  };
  p2.registerParse = (e4) => {
    c2 = e4;
  }, p2.registerRule = (e4) => {
    u2 = e4;
  }, p2.registerAtRule = (e4) => {
    s2 = e4;
  }, p2.registerRoot = (e4) => {
    l2 = e4;
  }, t2.exports = p2, p2.default = p2, p2.rebuild = (e4) => {
    e4.type === `atrule` ? Object.setPrototypeOf(e4, s2.prototype) : e4.type === `rule` ? Object.setPrototypeOf(e4, u2.prototype) : e4.type === `decl` ? Object.setPrototypeOf(e4, r2.prototype) : e4.type === `comment` ? Object.setPrototypeOf(e4, n2.prototype) : e4.type === `root` && Object.setPrototypeOf(e4, l2.prototype), e4[o2] = true, e4.nodes && e4.nodes.forEach((e5) => {
      p2.rebuild(e5);
    });
  };
}), Gf = Uf(Wf()), Kf = Gf.default ?? Gf, qf = {};
t(qf, { default: () => sp });
var Jf = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss/lib/container`:
      return t2(Mf);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, Yf = Object.create, Xf = Object.defineProperty, Zf = Object.getOwnPropertyDescriptor, Qf = Object.getOwnPropertyNames, $f = Object.getPrototypeOf, ep = Object.prototype.hasOwnProperty, tp = ((e3) => typeof Jf < `u` ? Jf : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof Jf < `u` ? Jf : e4)[t2] }) : e3)(function(e3) {
  if (typeof Jf < `u`) return Jf.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), np = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), rp = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of Qf(t2)) !ep.call(e3, i2) && i2 !== n2 && Xf(e3, i2, { get: () => t2[i2], enumerable: !(r2 = Zf(t2, i2)) || r2.enumerable });
  return e3;
}, ip = (e3, t2, n2) => (n2 = e3 == null ? {} : Yf($f(e3)), rp(t2 || !e3 || !e3.__esModule ? Xf(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), ap = np((e3, t2) => {
  "use strict";
  var n2 = tp(`postcss/lib/container`), r2 = class extends n2 {
    constructor(e4) {
      super(e4), this.type = `atrule`;
    }
    append(...e4) {
      return this.proxyOf.nodes || (this.nodes = []), super.append(...e4);
    }
    prepend(...e4) {
      return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e4);
    }
  };
  t2.exports = r2, r2.default = r2, n2.registerAtRule(r2);
}), op = ip(ap()), sp = op.default ?? op, cp = {};
t(cp, { default: () => Sp });
var lp = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss/lib/container`:
      return t2(Mf);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, up = Object.create, dp = Object.defineProperty, fp = Object.getOwnPropertyDescriptor, pp = Object.getOwnPropertyNames, mp = Object.getPrototypeOf, hp = Object.prototype.hasOwnProperty, gp = ((e3) => typeof lp < `u` ? lp : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof lp < `u` ? lp : e4)[t2] }) : e3)(function(e3) {
  if (typeof lp < `u`) return lp.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), _p = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), vp = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of pp(t2)) !hp.call(e3, i2) && i2 !== n2 && dp(e3, i2, { get: () => t2[i2], enumerable: !(r2 = fp(t2, i2)) || r2.enumerable });
  return e3;
}, yp = (e3, t2, n2) => (n2 = e3 == null ? {} : up(mp(e3)), vp(t2 || !e3 || !e3.__esModule ? dp(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), bp = _p((e3, t2) => {
  "use strict";
  var n2 = gp(`postcss/lib/container`), r2, i2, a2 = class extends n2 {
    constructor(e4) {
      super({ type: `document`, ...e4 }), this.nodes || (this.nodes = []);
    }
    toResult(e4 = {}) {
      return new r2(new i2(), this, e4).stringify();
    }
  };
  a2.registerLazyResult = (e4) => {
    r2 = e4;
  }, a2.registerProcessor = (e4) => {
    i2 = e4;
  }, t2.exports = a2, a2.default = a2;
}), xp = yp(bp()), Sp = xp.default ?? xp, Cp = `useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`, wp = (e3, t2 = 21) => (n2 = t2) => {
  let r2 = ``, i2 = n2 | 0;
  for (; i2--; ) r2 += e3[Math.random() * e3.length | 0];
  return r2;
}, Tp = (e3 = 21) => {
  let t2 = ``, n2 = e3 | 0;
  for (; n2--; ) t2 += Cp[Math.random() * 64 | 0];
  return t2;
}, Ep = {};
t(Ep, { customAlphabet: () => wp, nanoid: () => Tp });
function Dp(e3) {
  return Error(`[unenv] ${e3} is not implemented yet!`);
}
function Op(e3) {
  return Object.assign(() => {
    throw Dp(e3);
  }, { __unenv__: true });
}
var H = [], U = [], kp = typeof Uint8Array > `u` ? Array : Uint8Array, Ap = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`;
for (let e3 = 0, t2 = Ap.length; e3 < t2; ++e3) H[e3] = Ap[e3], U[Ap.charCodeAt(e3)] = e3;
U[45] = 62, U[95] = 63;
function jp(e3) {
  let t2 = e3.length;
  if (t2 % 4 > 0) throw Error(`Invalid string. Length must be a multiple of 4`);
  let n2 = e3.indexOf(`=`);
  n2 === -1 && (n2 = t2);
  let r2 = n2 === t2 ? 0 : 4 - n2 % 4;
  return [n2, r2];
}
function Mp(e3, t2, n2) {
  return (t2 + n2) * 3 / 4 - n2;
}
function Np(e3) {
  let t2, n2 = jp(e3), r2 = n2[0], i2 = n2[1], a2 = new kp(Mp(e3, r2, i2)), o2 = 0, s2 = i2 > 0 ? r2 - 4 : r2, c2;
  for (c2 = 0; c2 < s2; c2 += 4) t2 = U[e3.charCodeAt(c2)] << 18 | U[e3.charCodeAt(c2 + 1)] << 12 | U[e3.charCodeAt(c2 + 2)] << 6 | U[e3.charCodeAt(c2 + 3)], a2[o2++] = t2 >> 16 & 255, a2[o2++] = t2 >> 8 & 255, a2[o2++] = t2 & 255;
  return i2 === 2 && (t2 = U[e3.charCodeAt(c2)] << 2 | U[e3.charCodeAt(c2 + 1)] >> 4, a2[o2++] = t2 & 255), i2 === 1 && (t2 = U[e3.charCodeAt(c2)] << 10 | U[e3.charCodeAt(c2 + 1)] << 4 | U[e3.charCodeAt(c2 + 2)] >> 2, a2[o2++] = t2 >> 8 & 255, a2[o2++] = t2 & 255), a2;
}
function Pp(e3) {
  return H[e3 >> 18 & 63] + H[e3 >> 12 & 63] + H[e3 >> 6 & 63] + H[e3 & 63];
}
function Fp(e3, t2, n2) {
  let r2, i2 = [];
  for (let a2 = t2; a2 < n2; a2 += 3) r2 = (e3[a2] << 16 & 16711680) + (e3[a2 + 1] << 8 & 65280) + (e3[a2 + 2] & 255), i2.push(Pp(r2));
  return i2.join(``);
}
function Ip(e3) {
  let t2, n2 = e3.length, r2 = n2 % 3, i2 = [], a2 = 16383;
  for (let t3 = 0, o2 = n2 - r2; t3 < o2; t3 += a2) i2.push(Fp(e3, t3, t3 + a2 > o2 ? o2 : t3 + a2));
  return r2 === 1 ? (t2 = e3[n2 - 1], i2.push(H[t2 >> 2] + H[t2 << 4 & 63] + `==`)) : r2 === 2 && (t2 = (e3[n2 - 2] << 8) + e3[n2 - 1], i2.push(H[t2 >> 10] + H[t2 >> 4 & 63] + H[t2 << 2 & 63] + `=`)), i2.join(``);
}
function Lp(e3, t2, n2, r2, i2) {
  let a2, o2, s2 = i2 * 8 - r2 - 1, c2 = (1 << s2) - 1, l2 = c2 >> 1, u2 = -7, d2 = n2 ? i2 - 1 : 0, f2 = n2 ? -1 : 1, p2 = e3[t2 + d2];
  for (d2 += f2, a2 = p2 & (1 << -u2) - 1, p2 >>= -u2, u2 += s2; u2 > 0; ) a2 = a2 * 256 + e3[t2 + d2], d2 += f2, u2 -= 8;
  for (o2 = a2 & (1 << -u2) - 1, a2 >>= -u2, u2 += r2; u2 > 0; ) o2 = o2 * 256 + e3[t2 + d2], d2 += f2, u2 -= 8;
  if (a2 === 0) a2 = 1 - l2;
  else {
    if (a2 === c2) return o2 ? NaN : (p2 ? -1 : 1) * (1 / 0);
    o2 += 2 ** r2, a2 -= l2;
  }
  return (p2 ? -1 : 1) * o2 * 2 ** (a2 - r2);
}
function Rp(e3, t2, n2, r2, i2, a2) {
  let o2, s2, c2, l2 = a2 * 8 - i2 - 1, u2 = (1 << l2) - 1, d2 = u2 >> 1, f2 = i2 === 23 ? 2 ** -24 - 2 ** -77 : 0, p2 = r2 ? 0 : a2 - 1, m2 = r2 ? 1 : -1, h2 = t2 < 0 || t2 === 0 && 1 / t2 < 0 ? 1 : 0;
  for (t2 = Math.abs(t2), Number.isNaN(t2) || t2 === 1 / 0 ? (s2 = Number.isNaN(t2) ? 1 : 0, o2 = u2) : (o2 = Math.floor(Math.log2(t2)), t2 * (c2 = 2 ** -o2) < 1 && (o2--, c2 *= 2), t2 += o2 + d2 >= 1 ? f2 / c2 : f2 * 2 ** (1 - d2), t2 * c2 >= 2 && (o2++, c2 /= 2), o2 + d2 >= u2 ? (s2 = 0, o2 = u2) : o2 + d2 >= 1 ? (s2 = (t2 * c2 - 1) * 2 ** i2, o2 += d2) : (s2 = t2 * 2 ** (d2 - 1) * 2 ** i2, o2 = 0)); i2 >= 8; ) e3[n2 + p2] = s2 & 255, p2 += m2, s2 /= 256, i2 -= 8;
  for (o2 = o2 << i2 | s2, l2 += i2; l2 > 0; ) e3[n2 + p2] = o2 & 255, p2 += m2, o2 /= 256, l2 -= 8;
  e3[n2 + p2 - m2] |= h2 * 128;
}
var zp = typeof Symbol == `function` && typeof Symbol.for == `function` ? Symbol.for(`nodejs.util.inspect.custom`) : null, Bp = 50, Vp = 2147483647, Hp = Vp;
W.TYPED_ARRAY_SUPPORT = Up(), !W.TYPED_ARRAY_SUPPORT && typeof console < `u` && typeof console.error == `function` && console.error("This environment lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function Up() {
  try {
    let e3 = new Uint8Array(1), t2 = { foo: function() {
      return 42;
    } };
    return Object.setPrototypeOf(t2, Uint8Array.prototype), Object.setPrototypeOf(e3, t2), e3.foo() === 42;
  } catch {
    return false;
  }
}
Object.defineProperty(W.prototype, `parent`, { enumerable: true, get: function() {
  if (W.isBuffer(this)) return this.buffer;
} }), Object.defineProperty(W.prototype, `offset`, { enumerable: true, get: function() {
  if (W.isBuffer(this)) return this.byteOffset;
} });
function Wp(e3) {
  if (e3 > Vp) throw RangeError(`The value "` + e3 + `" is invalid for option "size"`);
  let t2 = new Uint8Array(e3);
  return Object.setPrototypeOf(t2, W.prototype), t2;
}
function W(e3, t2, n2) {
  if (typeof e3 == `number`) {
    if (typeof t2 == `string`) throw TypeError(`The "string" argument must be of type string. Received type number`);
    return Jp(e3);
  }
  return Gp(e3, t2, n2);
}
W.poolSize = 8192;
function Gp(e3, t2, n2) {
  if (typeof e3 == `string`) return Yp(e3, t2);
  if (ArrayBuffer.isView(e3)) return Zp(e3);
  if (e3 == null) throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ` + typeof e3);
  if (q(e3, ArrayBuffer) || e3 && q(e3.buffer, ArrayBuffer) || typeof SharedArrayBuffer < `u` && (q(e3, SharedArrayBuffer) || e3 && q(e3.buffer, SharedArrayBuffer))) return Qp(e3, t2, n2);
  if (typeof e3 == `number`) throw TypeError(`The "value" argument must not be of type number. Received type number`);
  let r2 = e3.valueOf && e3.valueOf();
  if (r2 != null && r2 !== e3) return W.from(r2, t2, n2);
  let i2 = $p(e3);
  if (i2) return i2;
  if (typeof Symbol < `u` && Symbol.toPrimitive != null && typeof e3[Symbol.toPrimitive] == `function`) return W.from(e3[Symbol.toPrimitive](`string`), t2, n2);
  throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ` + typeof e3);
}
W.from = function(e3, t2, n2) {
  return Gp(e3, t2, n2);
}, Object.setPrototypeOf(W.prototype, Uint8Array.prototype), Object.setPrototypeOf(W, Uint8Array);
function Kp(e3) {
  if (typeof e3 != `number`) throw TypeError(`"size" argument must be of type number`);
  if (e3 < 0) throw RangeError(`The value "` + e3 + `" is invalid for option "size"`);
}
function qp(e3, t2, n2) {
  return Kp(e3), e3 <= 0 || t2 === void 0 ? Wp(e3) : typeof n2 == `string` ? Wp(e3).fill(t2, n2) : Wp(e3).fill(t2);
}
W.alloc = function(e3, t2, n2) {
  return qp(e3, t2, n2);
};
function Jp(e3) {
  return Kp(e3), Wp(e3 < 0 ? 0 : em(e3) | 0);
}
W.allocUnsafe = function(e3) {
  return Jp(e3);
}, W.allocUnsafeSlow = function(e3) {
  return Jp(e3);
};
function Yp(e3, t2) {
  if ((typeof t2 != `string` || t2 === ``) && (t2 = `utf8`), !W.isEncoding(t2)) throw TypeError(`Unknown encoding: ` + t2);
  let n2 = nm(e3, t2) | 0, r2 = Wp(n2), i2 = r2.write(e3, t2);
  return i2 !== n2 && (r2 = r2.slice(0, i2)), r2;
}
function Xp(e3) {
  let t2 = e3.length < 0 ? 0 : em(e3.length) | 0, n2 = Wp(t2);
  for (let r2 = 0; r2 < t2; r2 += 1) n2[r2] = e3[r2] & 255;
  return n2;
}
function Zp(e3) {
  if (q(e3, Uint8Array)) {
    let t2 = new Uint8Array(e3);
    return Qp(t2.buffer, t2.byteOffset, t2.byteLength);
  }
  return Xp(e3);
}
function Qp(e3, t2, n2) {
  if (t2 < 0 || e3.byteLength < t2) throw RangeError(`"offset" is outside of buffer bounds`);
  if (e3.byteLength < t2 + (n2 || 0)) throw RangeError(`"length" is outside of buffer bounds`);
  let r2;
  return r2 = t2 === void 0 && n2 === void 0 ? new Uint8Array(e3) : n2 === void 0 ? new Uint8Array(e3, t2) : new Uint8Array(e3, t2, n2), Object.setPrototypeOf(r2, W.prototype), r2;
}
function $p(e3) {
  if (W.isBuffer(e3)) {
    let t2 = em(e3.length) | 0, n2 = Wp(t2);
    return n2.length === 0 || e3.copy(n2, 0, 0, t2), n2;
  }
  if (e3.length !== void 0) return typeof e3.length != `number` || zm(e3.length) ? Wp(0) : Xp(e3);
  if (e3.type === `Buffer` && Array.isArray(e3.data)) return Xp(e3.data);
}
function em(e3) {
  if (e3 >= Vp) throw RangeError(`Attempt to allocate Buffer larger than maximum size: 0x` + Vp.toString(16) + ` bytes`);
  return e3 | 0;
}
function tm(e3) {
  return +e3 != e3 && (e3 = 0), W.alloc(+e3);
}
W.isBuffer = function(e3) {
  return e3 != null && e3._isBuffer === true && e3 !== W.prototype;
}, W.compare = function(e3, t2) {
  if (q(e3, Uint8Array) && (e3 = W.from(e3, e3.offset, e3.byteLength)), q(t2, Uint8Array) && (t2 = W.from(t2, t2.offset, t2.byteLength)), !W.isBuffer(e3) || !W.isBuffer(t2)) throw TypeError(`The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array`);
  if (e3 === t2) return 0;
  let n2 = e3.length, r2 = t2.length;
  for (let i2 = 0, a2 = Math.min(n2, r2); i2 < a2; ++i2) if (e3[i2] !== t2[i2]) {
    n2 = e3[i2], r2 = t2[i2];
    break;
  }
  return n2 < r2 ? -1 : r2 < n2 ? 1 : 0;
}, W.isEncoding = function(e3) {
  switch (String(e3).toLowerCase()) {
    case `hex`:
    case `utf8`:
    case `utf-8`:
    case `ascii`:
    case `latin1`:
    case `binary`:
    case `base64`:
    case `ucs2`:
    case `ucs-2`:
    case `utf16le`:
    case `utf-16le`:
      return true;
    default:
      return false;
  }
}, W.concat = function(e3, t2) {
  if (!Array.isArray(e3)) throw TypeError(`"list" argument must be an Array of Buffers`);
  if (e3.length === 0) return W.alloc(0);
  let n2;
  if (t2 === void 0) for (t2 = 0, n2 = 0; n2 < e3.length; ++n2) t2 += e3[n2].length;
  let r2 = W.allocUnsafe(t2), i2 = 0;
  for (n2 = 0; n2 < e3.length; ++n2) {
    let t3 = e3[n2];
    if (q(t3, Uint8Array)) i2 + t3.length > r2.length ? (W.isBuffer(t3) || (t3 = W.from(t3.buffer, t3.byteOffset, t3.byteLength)), t3.copy(r2, i2)) : Uint8Array.prototype.set.call(r2, t3, i2);
    else if (W.isBuffer(t3)) t3.copy(r2, i2);
    else throw TypeError(`"list" argument must be an Array of Buffers`);
    i2 += t3.length;
  }
  return r2;
};
function nm(e3, t2) {
  if (W.isBuffer(e3)) return e3.length;
  if (ArrayBuffer.isView(e3) || q(e3, ArrayBuffer)) return e3.byteLength;
  if (typeof e3 != `string`) throw TypeError(`The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ` + typeof e3);
  let n2 = e3.length, r2 = arguments.length > 2 && arguments[2] === true;
  if (!r2 && n2 === 0) return 0;
  let i2 = false;
  for (; ; ) switch (t2) {
    case `ascii`:
    case `latin1`:
    case `binary`:
      return n2;
    case `utf8`:
    case `utf-8`:
      return Pm(e3).length;
    case `ucs2`:
    case `ucs-2`:
    case `utf16le`:
    case `utf-16le`:
      return n2 * 2;
    case `hex`:
      return n2 >>> 1;
    case `base64`:
      return Lm(e3).length;
    default:
      if (i2) return r2 ? -1 : Pm(e3).length;
      t2 = (`` + t2).toLowerCase(), i2 = true;
  }
}
W.byteLength = nm;
function rm(e3, t2, n2) {
  let r2 = false;
  if ((t2 === void 0 || t2 < 0) && (t2 = 0), t2 > this.length || ((n2 === void 0 || n2 > this.length) && (n2 = this.length), n2 <= 0) || (n2 >>>= 0, t2 >>>= 0, n2 <= t2)) return ``;
  for (e3 || (e3 = `utf8`); ; ) switch (e3) {
    case `hex`:
      return vm(this, t2, n2);
    case `utf8`:
    case `utf-8`:
      return pm(this, t2, n2);
    case `ascii`:
      return gm(this, t2, n2);
    case `latin1`:
    case `binary`:
      return _m(this, t2, n2);
    case `base64`:
      return fm(this, t2, n2);
    case `ucs2`:
    case `ucs-2`:
    case `utf16le`:
    case `utf-16le`:
      return ym(this, t2, n2);
    default:
      if (r2) throw TypeError(`Unknown encoding: ` + e3);
      e3 = (e3 + ``).toLowerCase(), r2 = true;
  }
}
W.prototype._isBuffer = true;
function im(e3, t2, n2) {
  let r2 = e3[t2];
  e3[t2] = e3[n2], e3[n2] = r2;
}
W.prototype.swap16 = function() {
  let e3 = this.length;
  if (e3 % 2 != 0) throw RangeError(`Buffer size must be a multiple of 16-bits`);
  for (let t2 = 0; t2 < e3; t2 += 2) im(this, t2, t2 + 1);
  return this;
}, W.prototype.swap32 = function() {
  let e3 = this.length;
  if (e3 % 4 != 0) throw RangeError(`Buffer size must be a multiple of 32-bits`);
  for (let t2 = 0; t2 < e3; t2 += 4) im(this, t2, t2 + 3), im(this, t2 + 1, t2 + 2);
  return this;
}, W.prototype.swap64 = function() {
  let e3 = this.length;
  if (e3 % 8 != 0) throw RangeError(`Buffer size must be a multiple of 64-bits`);
  for (let t2 = 0; t2 < e3; t2 += 8) im(this, t2, t2 + 7), im(this, t2 + 1, t2 + 6), im(this, t2 + 2, t2 + 5), im(this, t2 + 3, t2 + 4);
  return this;
}, W.prototype.toString = function() {
  let e3 = this.length;
  return e3 === 0 ? `` : arguments.length === 0 ? pm(this, 0, e3) : Reflect.apply(rm, this, arguments);
}, W.prototype.toLocaleString = W.prototype.toString, W.prototype.equals = function(e3) {
  if (!W.isBuffer(e3)) throw TypeError(`Argument must be a Buffer`);
  return this === e3 ? true : W.compare(this, e3) === 0;
}, W.prototype.inspect = function() {
  let e3 = ``, t2 = Bp;
  return e3 = this.toString(`hex`, 0, t2).replace(/(.{2})/g, `$1 `).trim(), this.length > t2 && (e3 += ` ... `), `<Buffer ` + e3 + `>`;
}, zp && (W.prototype[zp] = W.prototype.inspect), W.prototype.compare = function(e3, t2, n2, r2, i2) {
  if (q(e3, Uint8Array) && (e3 = W.from(e3, e3.offset, e3.byteLength)), !W.isBuffer(e3)) throw TypeError(`The "target" argument must be one of type Buffer or Uint8Array. Received type ` + typeof e3);
  if (t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = e3 ? e3.length : 0), r2 === void 0 && (r2 = 0), i2 === void 0 && (i2 = this.length), t2 < 0 || n2 > e3.length || r2 < 0 || i2 > this.length) throw RangeError(`out of range index`);
  if (r2 >= i2 && t2 >= n2) return 0;
  if (r2 >= i2) return -1;
  if (t2 >= n2) return 1;
  if (t2 >>>= 0, n2 >>>= 0, r2 >>>= 0, i2 >>>= 0, this === e3) return 0;
  let a2 = i2 - r2, o2 = n2 - t2, s2 = Math.min(a2, o2), c2 = this.slice(r2, i2), l2 = e3.slice(t2, n2);
  for (let e4 = 0; e4 < s2; ++e4) if (c2[e4] !== l2[e4]) {
    a2 = c2[e4], o2 = l2[e4];
    break;
  }
  return a2 < o2 ? -1 : o2 < a2 ? 1 : 0;
};
function am(e3, t2, n2, r2, i2) {
  if (e3.length === 0) return -1;
  if (typeof n2 == `string` ? (r2 = n2, n2 = 0) : n2 > 2147483647 ? n2 = 2147483647 : n2 < -2147483648 && (n2 = -2147483648), n2 = +n2, zm(n2) && (n2 = i2 ? 0 : e3.length - 1), n2 < 0 && (n2 = e3.length + n2), n2 >= e3.length) {
    if (i2) return -1;
    n2 = e3.length - 1;
  } else if (n2 < 0) if (i2) n2 = 0;
  else return -1;
  if (typeof t2 == `string` && (t2 = W.from(t2, r2)), W.isBuffer(t2)) return t2.length === 0 ? -1 : om(e3, t2, n2, r2, i2);
  if (typeof t2 == `number`) return t2 &= 255, typeof Uint8Array.prototype.indexOf == `function` ? i2 ? Uint8Array.prototype.indexOf.call(e3, t2, n2) : Uint8Array.prototype.lastIndexOf.call(e3, t2, n2) : om(e3, [t2], n2, r2, i2);
  throw TypeError(`val must be string, number or Buffer`);
}
function om(e3, t2, n2, r2, i2) {
  let a2 = 1, o2 = e3.length, s2 = t2.length;
  if (r2 !== void 0 && (r2 = String(r2).toLowerCase(), r2 === `ucs2` || r2 === `ucs-2` || r2 === `utf16le` || r2 === `utf-16le`)) {
    if (e3.length < 2 || t2.length < 2) return -1;
    a2 = 2, o2 /= 2, s2 /= 2, n2 /= 2;
  }
  function c2(e4, t3) {
    return a2 === 1 ? e4[t3] : e4.readUInt16BE(t3 * a2);
  }
  let l2;
  if (i2) {
    let r3 = -1;
    for (l2 = n2; l2 < o2; l2++) if (c2(e3, l2) === c2(t2, r3 === -1 ? 0 : l2 - r3)) {
      if (r3 === -1 && (r3 = l2), l2 - r3 + 1 === s2) return r3 * a2;
    } else r3 !== -1 && (l2 -= l2 - r3), r3 = -1;
  } else for (n2 + s2 > o2 && (n2 = o2 - s2), l2 = n2; l2 >= 0; l2--) {
    let n3 = true;
    for (let r3 = 0; r3 < s2; r3++) if (c2(e3, l2 + r3) !== c2(t2, r3)) {
      n3 = false;
      break;
    }
    if (n3) return l2;
  }
  return -1;
}
W.prototype.includes = function(e3, t2, n2) {
  return this.indexOf(e3, t2, n2) !== -1;
}, W.prototype.indexOf = function(e3, t2, n2) {
  return am(this, e3, t2, n2, true);
}, W.prototype.lastIndexOf = function(e3, t2, n2) {
  return am(this, e3, t2, n2, false);
};
function sm(e3, t2, n2, r2) {
  n2 = Number(n2) || 0;
  let i2 = e3.length - n2;
  r2 ? (r2 = Number(r2), r2 > i2 && (r2 = i2)) : r2 = i2;
  let a2 = t2.length;
  r2 > a2 / 2 && (r2 = a2 / 2);
  let o2;
  for (o2 = 0; o2 < r2; ++o2) {
    let r3 = Number.parseInt(t2.slice(o2 * 2, o2 * 2 + 2), 16);
    if (zm(r3)) return o2;
    e3[n2 + o2] = r3;
  }
  return o2;
}
function cm(e3, t2, n2, r2) {
  return Rm(Pm(t2, e3.length - n2), e3, n2, r2);
}
function lm(e3, t2, n2, r2) {
  return Rm(Fm(t2), e3, n2, r2);
}
function um(e3, t2, n2, r2) {
  return Rm(Lm(t2), e3, n2, r2);
}
function dm(e3, t2, n2, r2) {
  return Rm(Im(t2, e3.length - n2), e3, n2, r2);
}
W.prototype.write = function(e3, t2, n2, r2) {
  if (t2 === void 0) r2 = `utf8`, n2 = this.length, t2 = 0;
  else if (n2 === void 0 && typeof t2 == `string`) r2 = t2, n2 = this.length, t2 = 0;
  else if (Number.isFinite(t2)) t2 >>>= 0, Number.isFinite(n2) ? (n2 >>>= 0, r2 === void 0 && (r2 = `utf8`)) : (r2 = n2, n2 = void 0);
  else throw TypeError(`Buffer.write(string, encoding, offset[, length]) is no longer supported`);
  let i2 = this.length - t2;
  if ((n2 === void 0 || n2 > i2) && (n2 = i2), e3.length > 0 && (n2 < 0 || t2 < 0) || t2 > this.length) throw RangeError(`Attempt to write outside buffer bounds`);
  r2 || (r2 = `utf8`);
  let a2 = false;
  for (; ; ) switch (r2) {
    case `hex`:
      return sm(this, e3, t2, n2);
    case `utf8`:
    case `utf-8`:
      return cm(this, e3, t2, n2);
    case `ascii`:
    case `latin1`:
    case `binary`:
      return lm(this, e3, t2, n2);
    case `base64`:
      return um(this, e3, t2, n2);
    case `ucs2`:
    case `ucs-2`:
    case `utf16le`:
    case `utf-16le`:
      return dm(this, e3, t2, n2);
    default:
      if (a2) throw TypeError(`Unknown encoding: ` + r2);
      r2 = (`` + r2).toLowerCase(), a2 = true;
  }
}, W.prototype.toJSON = function() {
  return { type: `Buffer`, data: Array.prototype.slice.call(this._arr || this, 0) };
};
function fm(e3, t2, n2) {
  return t2 === 0 && n2 === e3.length ? Ip(e3) : Ip(e3.slice(t2, n2));
}
function pm(e3, t2, n2) {
  n2 = Math.min(e3.length, n2);
  let r2 = [], i2 = t2;
  for (; i2 < n2; ) {
    let t3 = e3[i2], a2 = null, o2 = t3 > 239 ? 4 : t3 > 223 ? 3 : t3 > 191 ? 2 : 1;
    if (i2 + o2 <= n2) {
      let n3, r3, s2, c2;
      switch (o2) {
        case 1:
          t3 < 128 && (a2 = t3);
          break;
        case 2:
          n3 = e3[i2 + 1], (n3 & 192) == 128 && (c2 = (t3 & 31) << 6 | n3 & 63, c2 > 127 && (a2 = c2));
          break;
        case 3:
          n3 = e3[i2 + 1], r3 = e3[i2 + 2], (n3 & 192) == 128 && (r3 & 192) == 128 && (c2 = (t3 & 15) << 12 | (n3 & 63) << 6 | r3 & 63, c2 > 2047 && (c2 < 55296 || c2 > 57343) && (a2 = c2));
          break;
        case 4:
          n3 = e3[i2 + 1], r3 = e3[i2 + 2], s2 = e3[i2 + 3], (n3 & 192) == 128 && (r3 & 192) == 128 && (s2 & 192) == 128 && (c2 = (t3 & 15) << 18 | (n3 & 63) << 12 | (r3 & 63) << 6 | s2 & 63, c2 > 65535 && c2 < 1114112 && (a2 = c2));
      }
    }
    a2 === null ? (a2 = 65533, o2 = 1) : a2 > 65535 && (a2 -= 65536, r2.push(a2 >>> 10 & 1023 | 55296), a2 = 56320 | a2 & 1023), r2.push(a2), i2 += o2;
  }
  return hm(r2);
}
var mm = 4096;
function hm(e3) {
  let t2 = e3.length;
  if (t2 <= mm) return String.fromCharCode.apply(String, e3);
  let n2 = ``, r2 = 0;
  for (; r2 < t2; ) n2 += String.fromCharCode.apply(String, e3.slice(r2, r2 += mm));
  return n2;
}
function gm(e3, t2, n2) {
  let r2 = ``;
  n2 = Math.min(e3.length, n2);
  for (let i2 = t2; i2 < n2; ++i2) r2 += String.fromCharCode(e3[i2] & 127);
  return r2;
}
function _m(e3, t2, n2) {
  let r2 = ``;
  n2 = Math.min(e3.length, n2);
  for (let i2 = t2; i2 < n2; ++i2) r2 += String.fromCharCode(e3[i2]);
  return r2;
}
function vm(e3, t2, n2) {
  let r2 = e3.length;
  (!t2 || t2 < 0) && (t2 = 0), (!n2 || n2 < 0 || n2 > r2) && (n2 = r2);
  let i2 = ``;
  for (let r3 = t2; r3 < n2; ++r3) i2 += Bm[e3[r3]];
  return i2;
}
function ym(e3, t2, n2) {
  let r2 = e3.slice(t2, n2), i2 = ``;
  for (let e4 = 0; e4 < r2.length - 1; e4 += 2) i2 += String.fromCharCode(r2[e4] + r2[e4 + 1] * 256);
  return i2;
}
W.prototype.slice = function(e3, t2) {
  let n2 = this.length;
  e3 = Math.trunc(e3), t2 = t2 === void 0 ? n2 : Math.trunc(t2), e3 < 0 ? (e3 += n2, e3 < 0 && (e3 = 0)) : e3 > n2 && (e3 = n2), t2 < 0 ? (t2 += n2, t2 < 0 && (t2 = 0)) : t2 > n2 && (t2 = n2), t2 < e3 && (t2 = e3);
  let r2 = this.subarray(e3, t2);
  return Object.setPrototypeOf(r2, W.prototype), r2;
};
function G(e3, t2, n2) {
  if (e3 % 1 != 0 || e3 < 0) throw RangeError(`offset is not uint`);
  if (e3 + t2 > n2) throw RangeError(`Trying to access beyond buffer length`);
}
W.prototype.readUintLE = W.prototype.readUIntLE = function(e3, t2, n2) {
  e3 >>>= 0, t2 >>>= 0, n2 || G(e3, t2, this.length);
  let r2 = this[e3], i2 = 1, a2 = 0;
  for (; ++a2 < t2 && (i2 *= 256); ) r2 += this[e3 + a2] * i2;
  return r2;
}, W.prototype.readUintBE = W.prototype.readUIntBE = function(e3, t2, n2) {
  e3 >>>= 0, t2 >>>= 0, n2 || G(e3, t2, this.length);
  let r2 = this[e3 + --t2], i2 = 1;
  for (; t2 > 0 && (i2 *= 256); ) r2 += this[e3 + --t2] * i2;
  return r2;
}, W.prototype.readUint8 = W.prototype.readUInt8 = function(e3, t2) {
  return e3 >>>= 0, t2 || G(e3, 1, this.length), this[e3];
}, W.prototype.readUint16LE = W.prototype.readUInt16LE = function(e3, t2) {
  return e3 >>>= 0, t2 || G(e3, 2, this.length), this[e3] | this[e3 + 1] << 8;
}, W.prototype.readUint16BE = W.prototype.readUInt16BE = function(e3, t2) {
  return e3 >>>= 0, t2 || G(e3, 2, this.length), this[e3] << 8 | this[e3 + 1];
}, W.prototype.readUint32LE = W.prototype.readUInt32LE = function(e3, t2) {
  return e3 >>>= 0, t2 || G(e3, 4, this.length), (this[e3] | this[e3 + 1] << 8 | this[e3 + 2] << 16) + this[e3 + 3] * 16777216;
}, W.prototype.readUint32BE = W.prototype.readUInt32BE = function(e3, t2) {
  return e3 >>>= 0, t2 || G(e3, 4, this.length), this[e3] * 16777216 + (this[e3 + 1] << 16 | this[e3 + 2] << 8 | this[e3 + 3]);
}, W.prototype.readBigUInt64LE = Vm(function(e3) {
  e3 >>>= 0, Am(e3, `offset`);
  let t2 = this[e3], n2 = this[e3 + 7];
  (t2 === void 0 || n2 === void 0) && jm(e3, this.length - 8);
  let r2 = t2 + this[++e3] * 2 ** 8 + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 24, i2 = this[++e3] + this[++e3] * 2 ** 8 + this[++e3] * 2 ** 16 + n2 * 2 ** 24;
  return BigInt(r2) + (BigInt(i2) << BigInt(32));
}), W.prototype.readBigUInt64BE = Vm(function(e3) {
  e3 >>>= 0, Am(e3, `offset`);
  let t2 = this[e3], n2 = this[e3 + 7];
  (t2 === void 0 || n2 === void 0) && jm(e3, this.length - 8);
  let r2 = t2 * 2 ** 24 + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 8 + this[++e3], i2 = this[++e3] * 2 ** 24 + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 8 + n2;
  return (BigInt(r2) << BigInt(32)) + BigInt(i2);
}), W.prototype.readIntLE = function(e3, t2, n2) {
  e3 >>>= 0, t2 >>>= 0, n2 || G(e3, t2, this.length);
  let r2 = this[e3], i2 = 1, a2 = 0;
  for (; ++a2 < t2 && (i2 *= 256); ) r2 += this[e3 + a2] * i2;
  return i2 *= 128, r2 >= i2 && (r2 -= 2 ** (8 * t2)), r2;
}, W.prototype.readIntBE = function(e3, t2, n2) {
  e3 >>>= 0, t2 >>>= 0, n2 || G(e3, t2, this.length);
  let r2 = t2, i2 = 1, a2 = this[e3 + --r2];
  for (; r2 > 0 && (i2 *= 256); ) a2 += this[e3 + --r2] * i2;
  return i2 *= 128, a2 >= i2 && (a2 -= 2 ** (8 * t2)), a2;
}, W.prototype.readInt8 = function(e3, t2) {
  return e3 >>>= 0, t2 || G(e3, 1, this.length), this[e3] & 128 ? (255 - this[e3] + 1) * -1 : this[e3];
}, W.prototype.readInt16LE = function(e3, t2) {
  e3 >>>= 0, t2 || G(e3, 2, this.length);
  let n2 = this[e3] | this[e3 + 1] << 8;
  return n2 & 32768 ? n2 | 4294901760 : n2;
}, W.prototype.readInt16BE = function(e3, t2) {
  e3 >>>= 0, t2 || G(e3, 2, this.length);
  let n2 = this[e3 + 1] | this[e3] << 8;
  return n2 & 32768 ? n2 | 4294901760 : n2;
}, W.prototype.readInt32LE = function(e3, t2) {
  return e3 >>>= 0, t2 || G(e3, 4, this.length), this[e3] | this[e3 + 1] << 8 | this[e3 + 2] << 16 | this[e3 + 3] << 24;
}, W.prototype.readInt32BE = function(e3, t2) {
  return e3 >>>= 0, t2 || G(e3, 4, this.length), this[e3] << 24 | this[e3 + 1] << 16 | this[e3 + 2] << 8 | this[e3 + 3];
}, W.prototype.readBigInt64LE = Vm(function(e3) {
  e3 >>>= 0, Am(e3, `offset`);
  let t2 = this[e3], n2 = this[e3 + 7];
  (t2 === void 0 || n2 === void 0) && jm(e3, this.length - 8);
  let r2 = this[e3 + 4] + this[e3 + 5] * 2 ** 8 + this[e3 + 6] * 2 ** 16 + (n2 << 24);
  return (BigInt(r2) << BigInt(32)) + BigInt(t2 + this[++e3] * 2 ** 8 + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 24);
}), W.prototype.readBigInt64BE = Vm(function(e3) {
  e3 >>>= 0, Am(e3, `offset`);
  let t2 = this[e3], n2 = this[e3 + 7];
  (t2 === void 0 || n2 === void 0) && jm(e3, this.length - 8);
  let r2 = (t2 << 24) + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 8 + this[++e3];
  return (BigInt(r2) << BigInt(32)) + BigInt(this[++e3] * 2 ** 24 + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 8 + n2);
}), W.prototype.readFloatLE = function(e3, t2) {
  return e3 >>>= 0, t2 || G(e3, 4, this.length), Lp(this, e3, true, 23, 4);
}, W.prototype.readFloatBE = function(e3, t2) {
  return e3 >>>= 0, t2 || G(e3, 4, this.length), Lp(this, e3, false, 23, 4);
}, W.prototype.readDoubleLE = function(e3, t2) {
  return e3 >>>= 0, t2 || G(e3, 8, this.length), Lp(this, e3, true, 52, 8);
}, W.prototype.readDoubleBE = function(e3, t2) {
  return e3 >>>= 0, t2 || G(e3, 8, this.length), Lp(this, e3, false, 52, 8);
};
function K(e3, t2, n2, r2, i2, a2) {
  if (!W.isBuffer(e3)) throw TypeError(`"buffer" argument must be a Buffer instance`);
  if (t2 > i2 || t2 < a2) throw RangeError(`"value" argument is out of bounds`);
  if (n2 + r2 > e3.length) throw RangeError(`Index out of range`);
}
W.prototype.writeUintLE = W.prototype.writeUIntLE = function(e3, t2, n2, r2) {
  if (e3 = +e3, t2 >>>= 0, n2 >>>= 0, !r2) {
    let r3 = 2 ** (8 * n2) - 1;
    K(this, e3, t2, n2, r3, 0);
  }
  let i2 = 1, a2 = 0;
  for (this[t2] = e3 & 255; ++a2 < n2 && (i2 *= 256); ) this[t2 + a2] = e3 / i2 & 255;
  return t2 + n2;
}, W.prototype.writeUintBE = W.prototype.writeUIntBE = function(e3, t2, n2, r2) {
  if (e3 = +e3, t2 >>>= 0, n2 >>>= 0, !r2) {
    let r3 = 2 ** (8 * n2) - 1;
    K(this, e3, t2, n2, r3, 0);
  }
  let i2 = n2 - 1, a2 = 1;
  for (this[t2 + i2] = e3 & 255; --i2 >= 0 && (a2 *= 256); ) this[t2 + i2] = e3 / a2 & 255;
  return t2 + n2;
}, W.prototype.writeUint8 = W.prototype.writeUInt8 = function(e3, t2, n2) {
  return e3 = +e3, t2 >>>= 0, n2 || K(this, e3, t2, 1, 255, 0), this[t2] = e3 & 255, t2 + 1;
}, W.prototype.writeUint16LE = W.prototype.writeUInt16LE = function(e3, t2, n2) {
  return e3 = +e3, t2 >>>= 0, n2 || K(this, e3, t2, 2, 65535, 0), this[t2] = e3 & 255, this[t2 + 1] = e3 >>> 8, t2 + 2;
}, W.prototype.writeUint16BE = W.prototype.writeUInt16BE = function(e3, t2, n2) {
  return e3 = +e3, t2 >>>= 0, n2 || K(this, e3, t2, 2, 65535, 0), this[t2] = e3 >>> 8, this[t2 + 1] = e3 & 255, t2 + 2;
}, W.prototype.writeUint32LE = W.prototype.writeUInt32LE = function(e3, t2, n2) {
  return e3 = +e3, t2 >>>= 0, n2 || K(this, e3, t2, 4, 4294967295, 0), this[t2 + 3] = e3 >>> 24, this[t2 + 2] = e3 >>> 16, this[t2 + 1] = e3 >>> 8, this[t2] = e3 & 255, t2 + 4;
}, W.prototype.writeUint32BE = W.prototype.writeUInt32BE = function(e3, t2, n2) {
  return e3 = +e3, t2 >>>= 0, n2 || K(this, e3, t2, 4, 4294967295, 0), this[t2] = e3 >>> 24, this[t2 + 1] = e3 >>> 16, this[t2 + 2] = e3 >>> 8, this[t2 + 3] = e3 & 255, t2 + 4;
};
function bm(e3, t2, n2, r2, i2) {
  km(t2, r2, i2, e3, n2, 7);
  let a2 = Number(t2 & BigInt(4294967295));
  e3[n2++] = a2, a2 >>= 8, e3[n2++] = a2, a2 >>= 8, e3[n2++] = a2, a2 >>= 8, e3[n2++] = a2;
  let o2 = Number(t2 >> BigInt(32) & BigInt(4294967295));
  return e3[n2++] = o2, o2 >>= 8, e3[n2++] = o2, o2 >>= 8, e3[n2++] = o2, o2 >>= 8, e3[n2++] = o2, n2;
}
function xm(e3, t2, n2, r2, i2) {
  km(t2, r2, i2, e3, n2, 7);
  let a2 = Number(t2 & BigInt(4294967295));
  e3[n2 + 7] = a2, a2 >>= 8, e3[n2 + 6] = a2, a2 >>= 8, e3[n2 + 5] = a2, a2 >>= 8, e3[n2 + 4] = a2;
  let o2 = Number(t2 >> BigInt(32) & BigInt(4294967295));
  return e3[n2 + 3] = o2, o2 >>= 8, e3[n2 + 2] = o2, o2 >>= 8, e3[n2 + 1] = o2, o2 >>= 8, e3[n2] = o2, n2 + 8;
}
W.prototype.writeBigUInt64LE = Vm(function(e3, t2 = 0) {
  return bm(this, e3, t2, BigInt(0), BigInt(`0xffffffffffffffff`));
}), W.prototype.writeBigUInt64BE = Vm(function(e3, t2 = 0) {
  return xm(this, e3, t2, BigInt(0), BigInt(`0xffffffffffffffff`));
}), W.prototype.writeIntLE = function(e3, t2, n2, r2) {
  if (e3 = +e3, t2 >>>= 0, !r2) {
    let r3 = 2 ** (8 * n2 - 1);
    K(this, e3, t2, n2, r3 - 1, -r3);
  }
  let i2 = 0, a2 = 1, o2 = 0;
  for (this[t2] = e3 & 255; ++i2 < n2 && (a2 *= 256); ) e3 < 0 && o2 === 0 && this[t2 + i2 - 1] !== 0 && (o2 = 1), this[t2 + i2] = Math.trunc(e3 / a2) - o2 & 255;
  return t2 + n2;
}, W.prototype.writeIntBE = function(e3, t2, n2, r2) {
  if (e3 = +e3, t2 >>>= 0, !r2) {
    let r3 = 2 ** (8 * n2 - 1);
    K(this, e3, t2, n2, r3 - 1, -r3);
  }
  let i2 = n2 - 1, a2 = 1, o2 = 0;
  for (this[t2 + i2] = e3 & 255; --i2 >= 0 && (a2 *= 256); ) e3 < 0 && o2 === 0 && this[t2 + i2 + 1] !== 0 && (o2 = 1), this[t2 + i2] = Math.trunc(e3 / a2) - o2 & 255;
  return t2 + n2;
}, W.prototype.writeInt8 = function(e3, t2, n2) {
  return e3 = +e3, t2 >>>= 0, n2 || K(this, e3, t2, 1, 127, -128), e3 < 0 && (e3 = 255 + e3 + 1), this[t2] = e3 & 255, t2 + 1;
}, W.prototype.writeInt16LE = function(e3, t2, n2) {
  return e3 = +e3, t2 >>>= 0, n2 || K(this, e3, t2, 2, 32767, -32768), this[t2] = e3 & 255, this[t2 + 1] = e3 >>> 8, t2 + 2;
}, W.prototype.writeInt16BE = function(e3, t2, n2) {
  return e3 = +e3, t2 >>>= 0, n2 || K(this, e3, t2, 2, 32767, -32768), this[t2] = e3 >>> 8, this[t2 + 1] = e3 & 255, t2 + 2;
}, W.prototype.writeInt32LE = function(e3, t2, n2) {
  return e3 = +e3, t2 >>>= 0, n2 || K(this, e3, t2, 4, 2147483647, -2147483648), this[t2] = e3 & 255, this[t2 + 1] = e3 >>> 8, this[t2 + 2] = e3 >>> 16, this[t2 + 3] = e3 >>> 24, t2 + 4;
}, W.prototype.writeInt32BE = function(e3, t2, n2) {
  return e3 = +e3, t2 >>>= 0, n2 || K(this, e3, t2, 4, 2147483647, -2147483648), e3 < 0 && (e3 = 4294967295 + e3 + 1), this[t2] = e3 >>> 24, this[t2 + 1] = e3 >>> 16, this[t2 + 2] = e3 >>> 8, this[t2 + 3] = e3 & 255, t2 + 4;
}, W.prototype.writeBigInt64LE = Vm(function(e3, t2 = 0) {
  return bm(this, e3, t2, -BigInt(`0x8000000000000000`), BigInt(`0x7fffffffffffffff`));
}), W.prototype.writeBigInt64BE = Vm(function(e3, t2 = 0) {
  return xm(this, e3, t2, -BigInt(`0x8000000000000000`), BigInt(`0x7fffffffffffffff`));
});
function Sm(e3, t2, n2, r2, i2, a2) {
  if (n2 + r2 > e3.length || n2 < 0) throw RangeError(`Index out of range`);
}
function Cm(e3, t2, n2, r2, i2) {
  return t2 = +t2, n2 >>>= 0, i2 || Sm(e3, t2, n2, 4, 34028234663852886e22, -34028234663852886e22), Rp(e3, t2, n2, r2, 23, 4), n2 + 4;
}
W.prototype.writeFloatLE = function(e3, t2, n2) {
  return Cm(this, e3, t2, true, n2);
}, W.prototype.writeFloatBE = function(e3, t2, n2) {
  return Cm(this, e3, t2, false, n2);
};
function wm(e3, t2, n2, r2, i2) {
  return t2 = +t2, n2 >>>= 0, i2 || Sm(e3, t2, n2, 8, 17976931348623157e292, -17976931348623157e292), Rp(e3, t2, n2, r2, 52, 8), n2 + 8;
}
W.prototype.writeDoubleLE = function(e3, t2, n2) {
  return wm(this, e3, t2, true, n2);
}, W.prototype.writeDoubleBE = function(e3, t2, n2) {
  return wm(this, e3, t2, false, n2);
}, W.prototype.copy = function(e3, t2, n2, r2) {
  if (!W.isBuffer(e3)) throw TypeError(`argument should be a Buffer`);
  if (n2 || (n2 = 0), !r2 && r2 !== 0 && (r2 = this.length), t2 >= e3.length && (t2 = e3.length), t2 || (t2 = 0), r2 > 0 && r2 < n2 && (r2 = n2), r2 === n2 || e3.length === 0 || this.length === 0) return 0;
  if (t2 < 0) throw RangeError(`targetStart out of bounds`);
  if (n2 < 0 || n2 >= this.length) throw RangeError(`Index out of range`);
  if (r2 < 0) throw RangeError(`sourceEnd out of bounds`);
  r2 > this.length && (r2 = this.length), e3.length - t2 < r2 - n2 && (r2 = e3.length - t2 + n2);
  let i2 = r2 - n2;
  return this === e3 && typeof Uint8Array.prototype.copyWithin == `function` ? this.copyWithin(t2, n2, r2) : Uint8Array.prototype.set.call(e3, this.subarray(n2, r2), t2), i2;
}, W.prototype.fill = function(e3, t2, n2, r2) {
  if (typeof e3 == `string`) {
    if (typeof t2 == `string` ? (r2 = t2, t2 = 0, n2 = this.length) : typeof n2 == `string` && (r2 = n2, n2 = this.length), r2 !== void 0 && typeof r2 != `string`) throw TypeError(`encoding must be a string`);
    if (typeof r2 == `string` && !W.isEncoding(r2)) throw TypeError(`Unknown encoding: ` + r2);
    if (e3.length === 1) {
      let t3 = e3.charCodeAt(0);
      (r2 === `utf8` && t3 < 128 || r2 === `latin1`) && (e3 = t3);
    }
  } else typeof e3 == `number` ? e3 &= 255 : typeof e3 == `boolean` && (e3 = Number(e3));
  if (t2 < 0 || this.length < t2 || this.length < n2) throw RangeError(`Out of range index`);
  if (n2 <= t2) return this;
  t2 >>>= 0, n2 = n2 === void 0 ? this.length : n2 >>> 0, e3 || (e3 = 0);
  let i2;
  if (typeof e3 == `number`) for (i2 = t2; i2 < n2; ++i2) this[i2] = e3;
  else {
    let a2 = W.isBuffer(e3) ? e3 : W.from(e3, r2), o2 = a2.length;
    if (o2 === 0) throw TypeError(`The value "` + e3 + `" is invalid for argument "value"`);
    for (i2 = 0; i2 < n2 - t2; ++i2) this[i2 + t2] = a2[i2 % o2];
  }
  return this;
};
var Tm = {};
function Em(e3, t2, n2) {
  Tm[e3] = class extends n2 {
    constructor() {
      super(), Object.defineProperty(this, `message`, { value: Reflect.apply(t2, this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e3}]`, this.stack, delete this.name;
    }
    get code() {
      return e3;
    }
    set code(e4) {
      Object.defineProperty(this, `code`, { configurable: true, enumerable: true, value: e4, writable: true });
    }
    toString() {
      return `${this.name} [${e3}]: ${this.message}`;
    }
  };
}
Em(`ERR_BUFFER_OUT_OF_BOUNDS`, function(e3) {
  return e3 ? `${e3} is outside of buffer bounds` : `Attempt to access memory outside buffer bounds`;
}, RangeError), Em(`ERR_INVALID_ARG_TYPE`, function(e3, t2) {
  return `The "${e3}" argument must be of type number. Received type ${typeof t2}`;
}, TypeError), Em(`ERR_OUT_OF_RANGE`, function(e3, t2, n2) {
  let r2 = `The value of "${e3}" is out of range.`, i2 = n2;
  return Number.isInteger(n2) && Math.abs(n2) > 2 ** 32 ? i2 = Dm(String(n2)) : typeof n2 == `bigint` && (i2 = String(n2), (n2 > BigInt(2) ** BigInt(32) || n2 < -(BigInt(2) ** BigInt(32))) && (i2 = Dm(i2)), i2 += `n`), r2 += ` It must be ${t2}. Received ${i2}`, r2;
}, RangeError);
function Dm(e3) {
  let t2 = ``, n2 = e3.length, r2 = e3[0] === `-` ? 1 : 0;
  for (; n2 >= r2 + 4; n2 -= 3) t2 = `_${e3.slice(n2 - 3, n2)}${t2}`;
  return `${e3.slice(0, n2)}${t2}`;
}
function Om(e3, t2, n2) {
  Am(t2, `offset`), (e3[t2] === void 0 || e3[t2 + n2] === void 0) && jm(t2, e3.length - (n2 + 1));
}
function km(e3, t2, n2, r2, i2, a2) {
  if (e3 > n2 || e3 < t2) {
    let r3 = typeof t2 == `bigint` ? `n` : ``, i3;
    throw i3 = a2 > 3 ? t2 === 0 || t2 === BigInt(0) ? `>= 0${r3} and < 2${r3} ** ${(a2 + 1) * 8}${r3}` : `>= -(2${r3} ** ${(a2 + 1) * 8 - 1}${r3}) and < 2 ** ${(a2 + 1) * 8 - 1}${r3}` : `>= ${t2}${r3} and <= ${n2}${r3}`, new Tm.ERR_OUT_OF_RANGE(`value`, i3, e3);
  }
  Om(r2, i2, a2);
}
function Am(e3, t2) {
  if (typeof e3 != `number`) throw new Tm.ERR_INVALID_ARG_TYPE(t2, `number`, e3);
}
function jm(e3, t2, n2) {
  throw Math.floor(e3) === e3 ? t2 < 0 ? new Tm.ERR_BUFFER_OUT_OF_BOUNDS() : new Tm.ERR_OUT_OF_RANGE(n2 || `offset`, `>= ${n2 ? 1 : 0} and <= ${t2}`, e3) : (Am(e3, n2), new Tm.ERR_OUT_OF_RANGE(n2 || `offset`, `an integer`, e3));
}
var Mm = /[^\w+/-]/g;
function Nm(e3) {
  if (e3 = e3.split(`=`)[0], e3 = e3.trim().replace(Mm, ``), e3.length < 2) return ``;
  for (; e3.length % 4 != 0; ) e3 += `=`;
  return e3;
}
function Pm(e3, t2) {
  t2 || (t2 = 1 / 0);
  let n2, r2 = e3.length, i2 = null, a2 = [];
  for (let o2 = 0; o2 < r2; ++o2) {
    if (n2 = e3.charCodeAt(o2), n2 > 55295 && n2 < 57344) {
      if (!i2) {
        if (n2 > 56319) {
          (t2 -= 3) > -1 && a2.push(239, 191, 189);
          continue;
        } else if (o2 + 1 === r2) {
          (t2 -= 3) > -1 && a2.push(239, 191, 189);
          continue;
        }
        i2 = n2;
        continue;
      }
      if (n2 < 56320) {
        (t2 -= 3) > -1 && a2.push(239, 191, 189), i2 = n2;
        continue;
      }
      n2 = (i2 - 55296 << 10 | n2 - 56320) + 65536;
    } else i2 && (t2 -= 3) > -1 && a2.push(239, 191, 189);
    if (i2 = null, n2 < 128) {
      if (--t2 < 0) break;
      a2.push(n2);
    } else if (n2 < 2048) {
      if ((t2 -= 2) < 0) break;
      a2.push(n2 >> 6 | 192, n2 & 63 | 128);
    } else if (n2 < 65536) {
      if ((t2 -= 3) < 0) break;
      a2.push(n2 >> 12 | 224, n2 >> 6 & 63 | 128, n2 & 63 | 128);
    } else if (n2 < 1114112) {
      if ((t2 -= 4) < 0) break;
      a2.push(n2 >> 18 | 240, n2 >> 12 & 63 | 128, n2 >> 6 & 63 | 128, n2 & 63 | 128);
    } else throw Error(`Invalid code point`);
  }
  return a2;
}
function Fm(e3) {
  let t2 = [];
  for (let n2 = 0; n2 < e3.length; ++n2) t2.push(e3.charCodeAt(n2) & 255);
  return t2;
}
function Im(e3, t2) {
  let n2, r2, i2, a2 = [];
  for (let o2 = 0; o2 < e3.length && !((t2 -= 2) < 0); ++o2) n2 = e3.charCodeAt(o2), r2 = n2 >> 8, i2 = n2 % 256, a2.push(i2, r2);
  return a2;
}
function Lm(e3) {
  return Np(Nm(e3));
}
function Rm(e3, t2, n2, r2) {
  let i2;
  for (i2 = 0; i2 < r2 && !(i2 + n2 >= t2.length || i2 >= e3.length); ++i2) t2[i2 + n2] = e3[i2];
  return i2;
}
function q(e3, t2) {
  return e3 instanceof t2 || e3 != null && e3.constructor != null && e3.constructor.name != null && e3.constructor.name === t2.name;
}
function zm(e3) {
  return e3 !== e3;
}
var Bm = function() {
  let e3 = `0123456789abcdef`, t2 = Array.from({ length: 256 });
  for (let n2 = 0; n2 < 16; ++n2) {
    let r2 = n2 * 16;
    for (let i2 = 0; i2 < 16; ++i2) t2[r2 + i2] = e3[n2] + e3[i2];
  }
  return t2;
}();
function Vm(e3) {
  return typeof BigInt > `u` ? Hm : e3;
}
function Hm() {
  throw Error(`BigInt not supported`);
}
/*! Bundled license information:

unenv-nightly/runtime/node/buffer/internal/ieee754.mjs:
(*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

unenv-nightly/runtime/node/buffer/internal/buffer.mjs:
(*!
* The buffer module from node.js, for the browser.
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*)
*/
var Um = class extends Blob {
  constructor(...e3) {
    super(...e3);
    __publicField(this, "__unenv__", true);
    __publicField(this, "size", 0);
    __publicField(this, "type", ``);
    __publicField(this, "name", ``);
    __publicField(this, "lastModified", 0);
    throw Error(`[unenv] buffer.File is not implemented`);
  }
  arrayBuffer() {
    throw Error(`Not implemented`);
  }
  slice() {
    throw Error(`Not implemented`);
  }
  text() {
    throw Error(`Not implemented`);
  }
  stream() {
    throw Error(`Not implemented`);
  }
  bytes() {
    throw Error(`Not implemented`);
  }
}, Wm = globalThis.Buffer || W, Gm = globalThis.Blob, Km = Op(`buffer.resolveObjectURL`), qm = Op(`buffer.transcode`), Jm = Op(`buffer.isUtf8`), Ym = Op(`buffer.isAscii`), Xm = globalThis.btoa.bind(globalThis), Zm = globalThis.atob.bind(globalThis), Qm = 0, $m = { MAX_LENGTH: Hp, MAX_STRING_LENGTH: Qm }, eh = { Buffer: Wm, SlowBuffer: tm, kMaxLength: Hp, INSPECT_MAX_BYTES: Bp, Blob: Gm, resolveObjectURL: Km, transcode: qm, btoa: Xm, atob: Zm, kStringMaxLength: Qm, constants: $m, isUtf8: Jm, isAscii: Ym, File: Um }, th = {};
t(th, { default: () => xh });
var nh = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `node:fs`:
      return t2(Tn);
    case `node:path`:
      return t2(la);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, rh = Object.create, ih = Object.defineProperty, ah = Object.getOwnPropertyDescriptor, oh = Object.getOwnPropertyNames, sh = Object.getPrototypeOf, ch = Object.prototype.hasOwnProperty, lh = ((e3) => typeof nh < `u` ? nh : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof nh < `u` ? nh : e4)[t2] }) : e3)(function(e3) {
  if (typeof nh < `u`) return nh.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), uh = (e3, t2) => () => (e3 && (t2 = e3(e3 = 0)), t2), dh = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), fh = (e3, t2) => {
  for (var n2 in t2) ih(e3, n2, { get: t2[n2], enumerable: true });
}, ph = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of oh(t2)) !ch.call(e3, i2) && i2 !== n2 && ih(e3, i2, { get: () => t2[i2], enumerable: !(r2 = ah(t2, i2)) || r2.enumerable });
  return e3;
}, mh = (e3, t2, n2) => (n2 = e3 == null ? {} : rh(sh(e3)), ph(t2 || !e3 || !e3.__esModule ? ih(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), hh = (e3) => ph(ih({}, `__esModule`, { value: true }), e3), gh = {};
fh(gh, { default: () => _h });
var _h, vh = uh(() => {
  _h = {};
}), yh = dh((e3, t2) => {
  "use strict";
  var { existsSync: n2, readFileSync: r2 } = lh(`node:fs`), { dirname: i2, join: a2 } = lh(`node:path`), { SourceMapConsumer: o2, SourceMapGenerator: s2 } = (vh(), hh(gh));
  function c2(e4) {
    return Wm ? Wm.from(e4, `base64`).toString() : window.atob(e4);
  }
  var l2 = class {
    constructor(e4, t3) {
      if (t3.map === false) return;
      this.loadAnnotation(e4), this.inline = this.startWith(this.annotation, `data:`);
      let n3 = t3.map ? t3.map.prev : void 0, r3 = this.loadMap(t3.from, n3);
      !this.mapFile && t3.from && (this.mapFile = t3.from), this.mapFile && (this.root = i2(this.mapFile)), r3 && (this.text = r3);
    }
    consumer() {
      return this.consumerCache || (this.consumerCache = new o2(this.text)), this.consumerCache;
    }
    decodeInline(e4) {
      let t3 = /^data:application\/json;charset=utf-?8;base64,/, n3 = /^data:application\/json;base64,/, r3 = /^data:application\/json;charset=utf-?8,/, i3 = /^data:application\/json,/, a3 = e4.match(r3) || e4.match(i3);
      if (a3) return decodeURIComponent(e4.substr(a3[0].length));
      let o3 = e4.match(t3) || e4.match(n3);
      if (o3) return c2(e4.substr(o3[0].length));
      let s3 = e4.match(/data:application\/json;([^,]+),/)[1];
      throw Error(`Unsupported source map encoding ` + s3);
    }
    getAnnotationURL(e4) {
      return e4.replace(/^\/\*\s*# sourceMappingURL=/, ``).trim();
    }
    isMap(e4) {
      return typeof e4 == `object` ? typeof e4.mappings == `string` || typeof e4._mappings == `string` || Array.isArray(e4.sections) : false;
    }
    loadAnnotation(e4) {
      let t3 = e4.match(/\/\*\s*# sourceMappingURL=/g);
      if (!t3) return;
      let n3 = e4.lastIndexOf(t3.pop()), r3 = e4.indexOf(`*/`, n3);
      n3 > -1 && r3 > -1 && (this.annotation = this.getAnnotationURL(e4.substring(n3, r3)));
    }
    loadFile(e4) {
      if (this.root = i2(e4), n2(e4)) return this.mapFile = e4, r2(e4, `utf-8`).toString().trim();
    }
    loadMap(e4, t3) {
      if (t3 === false) return false;
      if (t3) {
        if (typeof t3 == `string`) return t3;
        if (typeof t3 == `function`) {
          let n3 = t3(e4);
          if (n3) {
            let e5 = this.loadFile(n3);
            if (!e5) throw Error(`Unable to load previous source map: ` + n3.toString());
            return e5;
          }
        } else {
          if (t3 instanceof o2) return s2.fromSourceMap(t3).toString();
          if (t3 instanceof s2) return t3.toString();
          if (this.isMap(t3)) return JSON.stringify(t3);
          throw Error(`Unsupported previous source map format: ` + t3.toString());
        }
      } else {
        if (this.inline) return this.decodeInline(this.annotation);
        if (this.annotation) {
          let t4 = this.annotation;
          return e4 && (t4 = a2(i2(e4), t4)), this.loadFile(t4);
        }
      }
    }
    startWith(e4, t3) {
      return e4 ? e4.substr(0, t3.length) === t3 : false;
    }
    withContent() {
      return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
  };
  t2.exports = l2, l2.default = l2;
}), bh = mh(yh()), xh = bh.default ?? bh, Sh = {};
t(Sh, { default: () => Hh });
var Ch = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `nanoid/non-secure`:
      return n2(Ep);
    case `node:path`:
      return t2(la);
    case `node:url`:
      return t2(sc);
    case `postcss/lib/css-syntax-error`:
      return t2(Fu);
    case `postcss/lib/previous-map`:
      return t2(th);
    case `postcss/lib/terminal-highlight`:
      return t2(yu);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, wh = Object.create, Th = Object.defineProperty, Eh = Object.getOwnPropertyDescriptor, Dh = Object.getOwnPropertyNames, Oh = Object.getPrototypeOf, kh = Object.prototype.hasOwnProperty, Ah = ((e3) => typeof Ch < `u` ? Ch : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof Ch < `u` ? Ch : e4)[t2] }) : e3)(function(e3) {
  if (typeof Ch < `u`) return Ch.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), jh = (e3, t2) => () => (e3 && (t2 = e3(e3 = 0)), t2), Mh = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), Nh = (e3, t2) => {
  for (var n2 in t2) Th(e3, n2, { get: t2[n2], enumerable: true });
}, Ph = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of Dh(t2)) !kh.call(e3, i2) && i2 !== n2 && Th(e3, i2, { get: () => t2[i2], enumerable: !(r2 = Eh(t2, i2)) || r2.enumerable });
  return e3;
}, Fh = (e3, t2, n2) => (n2 = e3 == null ? {} : wh(Oh(e3)), Ph(t2 || !e3 || !e3.__esModule ? Th(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), Ih = (e3) => Ph(Th({}, `__esModule`, { value: true }), e3), Lh = {};
Nh(Lh, { default: () => Rh });
var Rh, zh = jh(() => {
  Rh = {};
}), Bh = Mh((e3, t2) => {
  "use strict";
  var { nanoid: n2 } = Ah(`nanoid/non-secure`), { isAbsolute: r2, resolve: i2 } = Ah(`node:path`), { SourceMapConsumer: a2, SourceMapGenerator: o2 } = (zh(), Ih(Lh)), { fileURLToPath: s2, pathToFileURL: c2 } = Ah(`node:url`), l2 = Ah(`postcss/lib/css-syntax-error`), u2 = Ah(`postcss/lib/previous-map`), d2 = Ah(`postcss/lib/terminal-highlight`), f2 = Symbol(`lineToIndexCache`), p2 = !!(a2 && o2), m2 = !!(i2 && r2);
  function h2(e4) {
    if (e4[f2]) return e4[f2];
    let t3 = e4.css.split(`
`), n3 = Array(t3.length), r3 = 0;
    for (let e5 = 0, i3 = t3.length; e5 < i3; e5++) n3[e5] = r3, r3 += t3[e5].length + 1;
    return e4[f2] = n3, n3;
  }
  var g2 = class {
    get from() {
      return this.file || this.id;
    }
    constructor(e4, t3 = {}) {
      if (e4 === null || typeof e4 > `u` || typeof e4 == `object` && !e4.toString) throw Error(`PostCSS received ${e4} instead of CSS string`);
      if (this.css = e4.toString(), this.css[0] === `\uFEFF` || this.css[0] === `\uFFFE` ? (this.hasBOM = true, this.css = this.css.slice(1)) : this.hasBOM = false, this.document = this.css, t3.document && (this.document = t3.document.toString()), t3.from && (!m2 || /^\w+:\/\//.test(t3.from) || r2(t3.from) ? this.file = t3.from : this.file = i2(t3.from)), m2 && p2) {
        let e5 = new u2(this.css, t3);
        if (e5.text) {
          this.map = e5;
          let t4 = e5.consumer().file;
          !this.file && t4 && (this.file = this.mapResolve(t4));
        }
      }
      this.file || (this.id = `<input css ` + n2(6) + `>`), this.map && (this.map.file = this.from);
    }
    error(e4, t3, n3, r3 = {}) {
      let i3, a3, o3, s3, u3;
      if (t3 && typeof t3 == `object`) {
        let e5 = t3, r4 = n3;
        if (typeof e5.offset == `number`) {
          s3 = e5.offset;
          let r5 = this.fromOffset(s3);
          t3 = r5.line, n3 = r5.col;
        } else t3 = e5.line, n3 = e5.column, s3 = this.fromLineAndColumn(t3, n3);
        if (typeof r4.offset == `number`) {
          o3 = r4.offset;
          let e6 = this.fromOffset(o3);
          a3 = e6.line, i3 = e6.col;
        } else a3 = r4.line, i3 = r4.column, o3 = this.fromLineAndColumn(r4.line, r4.column);
      } else if (n3) s3 = this.fromLineAndColumn(t3, n3);
      else {
        s3 = t3;
        let e5 = this.fromOffset(s3);
        t3 = e5.line, n3 = e5.col;
      }
      let d3 = this.origin(t3, n3, a3, i3);
      return u3 = d3 ? new l2(e4, d3.endLine === void 0 ? d3.line : { column: d3.column, line: d3.line }, d3.endLine === void 0 ? d3.column : { column: d3.endColumn, line: d3.endLine }, d3.source, d3.file, r3.plugin) : new l2(e4, a3 === void 0 ? t3 : { column: n3, line: t3 }, a3 === void 0 ? n3 : { column: i3, line: a3 }, this.css, this.file, r3.plugin), u3.input = { column: n3, endColumn: i3, endLine: a3, endOffset: o3, line: t3, offset: s3, source: this.css }, this.file && (c2 && (u3.input.url = c2(this.file).toString()), u3.input.file = this.file), u3;
    }
    fromLineAndColumn(e4, t3) {
      return h2(this)[e4 - 1] + t3 - 1;
    }
    fromOffset(e4) {
      let t3 = h2(this), n3 = t3[t3.length - 1], r3 = 0;
      if (e4 >= n3) r3 = t3.length - 1;
      else {
        let n4 = t3.length - 2, i3;
        for (; r3 < n4; ) if (i3 = r3 + (n4 - r3 >> 1), e4 < t3[i3]) n4 = i3 - 1;
        else if (e4 >= t3[i3 + 1]) r3 = i3 + 1;
        else {
          r3 = i3;
          break;
        }
      }
      return { col: e4 - t3[r3] + 1, line: r3 + 1 };
    }
    mapResolve(e4) {
      return /^\w+:\/\//.test(e4) ? e4 : i2(this.map.consumer().sourceRoot || this.map.root || `.`, e4);
    }
    origin(e4, t3, n3, i3) {
      if (!this.map) return false;
      let a3 = this.map.consumer(), o3 = a3.originalPositionFor({ column: t3, line: e4 });
      if (!o3.source) return false;
      let l3;
      typeof n3 == `number` && (l3 = a3.originalPositionFor({ column: i3, line: n3 }));
      let u3;
      u3 = r2(o3.source) ? c2(o3.source) : new URL(o3.source, this.map.consumer().sourceRoot || c2(this.map.mapFile));
      let d3 = { column: o3.column, endColumn: l3 && l3.column, endLine: l3 && l3.line, line: o3.line, url: u3.toString() };
      if (u3.protocol === `file:`) if (s2) d3.file = s2(u3);
      else throw Error(`file: protocol is not available in this PostCSS build`);
      let f3 = a3.sourceContentFor(o3.source);
      return f3 && (d3.source = f3), d3;
    }
    toJSON() {
      let e4 = {};
      for (let t3 of [`hasBOM`, `css`, `file`, `id`]) this[t3] != null && (e4[t3] = this[t3]);
      return this.map && (e4.map = { ...this.map }, e4.map.consumerCache && (e4.map.consumerCache = void 0)), e4;
    }
  };
  t2.exports = g2, g2.default = g2, d2 && d2.registerInput && d2.registerInput(g2);
}), Vh = Fh(Bh()), Hh = Vh.default ?? Vh, Uh = {};
t(Uh, { default: () => rg });
var Wh = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss/lib/container`:
      return t2(Mf);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, Gh = Object.create, Kh = Object.defineProperty, qh = Object.getOwnPropertyDescriptor, Jh = Object.getOwnPropertyNames, Yh = Object.getPrototypeOf, Xh = Object.prototype.hasOwnProperty, Zh = ((e3) => typeof Wh < `u` ? Wh : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof Wh < `u` ? Wh : e4)[t2] }) : e3)(function(e3) {
  if (typeof Wh < `u`) return Wh.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), Qh = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), $h = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of Jh(t2)) !Xh.call(e3, i2) && i2 !== n2 && Kh(e3, i2, { get: () => t2[i2], enumerable: !(r2 = qh(t2, i2)) || r2.enumerable });
  return e3;
}, eg = (e3, t2, n2) => (n2 = e3 == null ? {} : Gh(Yh(e3)), $h(t2 || !e3 || !e3.__esModule ? Kh(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), tg = Qh((e3, t2) => {
  "use strict";
  var n2 = Zh(`postcss/lib/container`), r2, i2, a2 = class extends n2 {
    constructor(e4) {
      super(e4), this.type = `root`, this.nodes || (this.nodes = []);
    }
    normalize(e4, t3, n3) {
      let r3 = super.normalize(e4);
      if (t3) {
        if (n3 === `prepend`) this.nodes.length > 1 ? t3.raws.before = this.nodes[1].raws.before : delete t3.raws.before;
        else if (this.first !== t3) for (let e5 of r3) e5.raws.before = t3.raws.before;
      }
      return r3;
    }
    removeChild(e4, t3) {
      let n3 = this.index(e4);
      return !t3 && n3 === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n3].raws.before), super.removeChild(e4);
    }
    toResult(e4 = {}) {
      return new r2(new i2(), this, e4).stringify();
    }
  };
  a2.registerLazyResult = (e4) => {
    r2 = e4;
  }, a2.registerProcessor = (e4) => {
    i2 = e4;
  }, t2.exports = a2, a2.default = a2, n2.registerRoot(a2);
}), ng = eg(tg()), rg = ng.default ?? ng, ig = {};
t(ig, { comma: () => gg, default: () => yg, space: () => _g, split: () => vg });
var ag = Object.create, og = Object.defineProperty, sg = Object.getOwnPropertyDescriptor, cg = Object.getOwnPropertyNames, lg = Object.getPrototypeOf, ug = Object.prototype.hasOwnProperty, dg = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), fg = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of cg(t2)) !ug.call(e3, i2) && i2 !== n2 && og(e3, i2, { get: () => t2[i2], enumerable: !(r2 = sg(t2, i2)) || r2.enumerable });
  return e3;
}, pg = (e3, t2, n2) => (n2 = e3 == null ? {} : ag(lg(e3)), fg(t2 || !e3 || !e3.__esModule ? og(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), mg = dg((e3, t2) => {
  "use strict";
  var n2 = { comma(e4) {
    return n2.split(e4, [`,`], true);
  }, space(e4) {
    let t3 = [` `, `
`, `	`];
    return n2.split(e4, t3);
  }, split(e4, t3, n3) {
    let r2 = [], i2 = ``, a2 = false, o2 = 0, s2 = false, c2 = ``, l2 = false;
    for (let n4 of e4) l2 ? l2 = false : n4 === `\\` ? l2 = true : s2 ? n4 === c2 && (s2 = false) : n4 === `"` || n4 === `'` ? (s2 = true, c2 = n4) : n4 === `(` ? o2 += 1 : n4 === `)` ? o2 > 0 && --o2 : o2 === 0 && t3.includes(n4) && (a2 = true), a2 ? (i2 !== `` && r2.push(i2.trim()), i2 = ``, a2 = false) : i2 += n4;
    return (n3 || i2 !== ``) && r2.push(i2.trim()), r2;
  } };
  t2.exports = n2, n2.default = n2;
}), hg = pg(mg()), { comma: gg, space: _g, split: vg } = hg, yg = hg.default ?? hg, bg = {};
t(bg, { default: () => Pg });
var xg = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss/lib/container`:
      return t2(Mf);
    case `postcss/lib/list`:
      return t2(ig);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, Sg = Object.create, Cg = Object.defineProperty, wg = Object.getOwnPropertyDescriptor, Tg = Object.getOwnPropertyNames, Eg = Object.getPrototypeOf, Dg = Object.prototype.hasOwnProperty, Og = ((e3) => typeof xg < `u` ? xg : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof xg < `u` ? xg : e4)[t2] }) : e3)(function(e3) {
  if (typeof xg < `u`) return xg.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), kg = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), Ag = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of Tg(t2)) !Dg.call(e3, i2) && i2 !== n2 && Cg(e3, i2, { get: () => t2[i2], enumerable: !(r2 = wg(t2, i2)) || r2.enumerable });
  return e3;
}, jg = (e3, t2, n2) => (n2 = e3 == null ? {} : Sg(Eg(e3)), Ag(t2 || !e3 || !e3.__esModule ? Cg(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), Mg = kg((e3, t2) => {
  "use strict";
  var n2 = Og(`postcss/lib/container`), r2 = Og(`postcss/lib/list`), i2 = class extends n2 {
    get selectors() {
      return r2.comma(this.selector);
    }
    set selectors(e4) {
      let t3 = this.selector ? this.selector.match(/,\s*/) : null, n3 = t3 ? t3[0] : `,` + this.raw(`between`, `beforeOpen`);
      this.selector = e4.join(n3);
    }
    constructor(e4) {
      super(e4), this.type = `rule`, this.nodes || (this.nodes = []);
    }
  };
  t2.exports = i2, i2.default = i2, n2.registerRule(i2);
}), Ng = jg(Mg()), Pg = Ng.default ?? Ng, Fg = {};
t(Fg, { default: () => Yg });
var Ig = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss/lib/at-rule`:
      return t2(qf);
    case `postcss/lib/comment`:
      return t2(ef);
    case `postcss/lib/declaration`:
      return t2(_f);
    case `postcss/lib/input`:
      return t2(Sh);
    case `postcss/lib/previous-map`:
      return t2(th);
    case `postcss/lib/root`:
      return t2(Uh);
    case `postcss/lib/rule`:
      return t2(bg);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, Lg = Object.create, Rg = Object.defineProperty, zg = Object.getOwnPropertyDescriptor, Bg = Object.getOwnPropertyNames, Vg = Object.getPrototypeOf, Hg = Object.prototype.hasOwnProperty, Ug = ((e3) => typeof Ig < `u` ? Ig : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof Ig < `u` ? Ig : e4)[t2] }) : e3)(function(e3) {
  if (typeof Ig < `u`) return Ig.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), Wg = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), Gg = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of Bg(t2)) !Hg.call(e3, i2) && i2 !== n2 && Rg(e3, i2, { get: () => t2[i2], enumerable: !(r2 = zg(t2, i2)) || r2.enumerable });
  return e3;
}, Kg = (e3, t2, n2) => (n2 = e3 == null ? {} : Lg(Vg(e3)), Gg(t2 || !e3 || !e3.__esModule ? Rg(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), qg = Wg((e3, t2) => {
  "use strict";
  var n2 = Ug(`postcss/lib/at-rule`), r2 = Ug(`postcss/lib/comment`), i2 = Ug(`postcss/lib/declaration`), a2 = Ug(`postcss/lib/input`), o2 = Ug(`postcss/lib/previous-map`), s2 = Ug(`postcss/lib/root`), c2 = Ug(`postcss/lib/rule`);
  function l2(e4, t3) {
    if (Array.isArray(e4)) return e4.map((e5) => l2(e5));
    let { inputs: u2, ...d2 } = e4;
    if (u2) {
      t3 = [];
      for (let e5 of u2) {
        let n3 = { ...e5, __proto__: a2.prototype };
        n3.map && (n3.map = { ...n3.map, __proto__: o2.prototype }), t3.push(n3);
      }
    }
    if (d2.nodes && (d2.nodes = e4.nodes.map((e5) => l2(e5, t3))), d2.source) {
      let { inputId: e5, ...n3 } = d2.source;
      d2.source = n3, e5 != null && (d2.source.input = t3[e5]);
    }
    if (d2.type === `root`) return new s2(d2);
    if (d2.type === `decl`) return new i2(d2);
    if (d2.type === `rule`) return new c2(d2);
    if (d2.type === `comment`) return new r2(d2);
    if (d2.type === `atrule`) return new n2(d2);
    throw Error(`Unknown node type: ` + e4.type);
  }
  t2.exports = l2, l2.default = l2;
}), Jg = Kg(qg()), Yg = Jg.default ?? Jg, Xg = {};
t(Xg, { default: () => g_ });
var Zg = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `node:path`:
      return t2(la);
    case `node:url`:
      return t2(sc);
    case `postcss/lib/input`:
      return t2(Sh);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, Qg = Object.create, $g = Object.defineProperty, e_ = Object.getOwnPropertyDescriptor, t_ = Object.getOwnPropertyNames, n_ = Object.getPrototypeOf, r_ = Object.prototype.hasOwnProperty, i_ = ((e3) => typeof Zg < `u` ? Zg : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof Zg < `u` ? Zg : e4)[t2] }) : e3)(function(e3) {
  if (typeof Zg < `u`) return Zg.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), a_ = (e3, t2) => () => (e3 && (t2 = e3(e3 = 0)), t2), o_ = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), s_ = (e3, t2) => {
  for (var n2 in t2) $g(e3, n2, { get: t2[n2], enumerable: true });
}, c_ = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of t_(t2)) !r_.call(e3, i2) && i2 !== n2 && $g(e3, i2, { get: () => t2[i2], enumerable: !(r2 = e_(t2, i2)) || r2.enumerable });
  return e3;
}, l_ = (e3, t2, n2) => (n2 = e3 == null ? {} : Qg(n_(e3)), c_(t2 || !e3 || !e3.__esModule ? $g(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), u_ = (e3) => c_($g({}, `__esModule`, { value: true }), e3), d_ = {};
s_(d_, { default: () => f_ });
var f_, p_ = a_(() => {
  f_ = {};
}), m_ = o_((e3, t2) => {
  "use strict";
  var { dirname: n2, relative: r2, resolve: i2, sep: a2 } = i_(`node:path`), { SourceMapConsumer: o2, SourceMapGenerator: s2 } = (p_(), u_(d_)), { pathToFileURL: c2 } = i_(`node:url`), l2 = i_(`postcss/lib/input`), u2 = !!(o2 && s2), d2 = !!(n2 && i2 && r2 && a2), f2 = class {
    constructor(e4, t3, n3, r3) {
      this.stringify = e4, this.mapOpts = n3.map || {}, this.root = t3, this.opts = n3, this.css = r3, this.originalCSS = r3, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    addAnnotation() {
      let e4;
      e4 = this.isInline() ? `data:application/json;base64,` + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == `string` ? this.mapOpts.annotation : typeof this.mapOpts.annotation == `function` ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + `.map`;
      let t3 = `
`;
      this.css.includes(`\r
`) && (t3 = `\r
`), this.css += t3 + `/*# sourceMappingURL=` + e4 + ` */`;
    }
    applyPrevMaps() {
      for (let e4 of this.previous()) {
        let t3 = this.toUrl(this.path(e4.file)), r3 = e4.root || n2(e4.file), i3;
        this.mapOpts.sourcesContent === false ? (i3 = new o2(e4.text), i3.sourcesContent && (i3.sourcesContent = null)) : i3 = e4.consumer(), this.map.applySourceMap(i3, t3, this.toUrl(this.path(r3)));
      }
    }
    clearAnnotation() {
      if (this.mapOpts.annotation !== false) if (this.root) {
        let e4;
        for (let t3 = this.root.nodes.length - 1; t3 >= 0; t3--) e4 = this.root.nodes[t3], e4.type === `comment` && e4.text.startsWith(`# sourceMappingURL=`) && this.root.removeChild(t3);
      } else this.css && (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, ``));
    }
    generate() {
      if (this.clearAnnotation(), d2 && u2 && this.isMap()) return this.generateMap();
      {
        let e4 = ``;
        return this.stringify(this.root, (t3) => {
          e4 += t3;
        }), [e4];
      }
    }
    generateMap() {
      if (this.root) this.generateString();
      else if (this.previous().length === 1) {
        let e4 = this.previous()[0].consumer();
        e4.file = this.outputFile(), this.map = s2.fromSourceMap(e4, { ignoreInvalidMapping: true });
      } else this.map = new s2({ file: this.outputFile(), ignoreInvalidMapping: true }), this.map.addMapping({ generated: { column: 0, line: 1 }, original: { column: 0, line: 1 }, source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : `<no source>` });
      return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
    }
    generateString() {
      this.css = ``, this.map = new s2({ file: this.outputFile(), ignoreInvalidMapping: true });
      let e4 = 1, t3 = 1, n3 = `<no source>`, r3 = { generated: { column: 0, line: 0 }, original: { column: 0, line: 0 }, source: `` }, i3, a3;
      this.stringify(this.root, (o3, s3, c3) => {
        if (this.css += o3, s3 && c3 !== `end` && (r3.generated.line = e4, r3.generated.column = t3 - 1, s3.source && s3.source.start ? (r3.source = this.sourcePath(s3), r3.original.line = s3.source.start.line, r3.original.column = s3.source.start.column - 1, this.map.addMapping(r3)) : (r3.source = n3, r3.original.line = 1, r3.original.column = 0, this.map.addMapping(r3))), a3 = o3.match(/\n/g), a3 ? (e4 += a3.length, i3 = o3.lastIndexOf(`
`), t3 = o3.length - i3) : t3 += o3.length, s3 && c3 !== `start`) {
          let i4 = s3.parent || { raws: {} };
          (!(s3.type === `decl` || s3.type === `atrule` && !s3.nodes) || s3 !== i4.last || i4.raws.semicolon) && (s3.source && s3.source.end ? (r3.source = this.sourcePath(s3), r3.original.line = s3.source.end.line, r3.original.column = s3.source.end.column - 1, r3.generated.line = e4, r3.generated.column = t3 - 2, this.map.addMapping(r3)) : (r3.source = n3, r3.original.line = 1, r3.original.column = 0, r3.generated.line = e4, r3.generated.column = t3 - 1, this.map.addMapping(r3)));
        }
      });
    }
    isAnnotation() {
      return this.isInline() ? true : typeof this.mapOpts.annotation < `u` ? this.mapOpts.annotation : this.previous().length ? this.previous().some((e4) => e4.annotation) : true;
    }
    isInline() {
      if (typeof this.mapOpts.inline < `u`) return this.mapOpts.inline;
      let e4 = this.mapOpts.annotation;
      return typeof e4 < `u` && e4 !== true ? false : this.previous().length ? this.previous().some((e5) => e5.inline) : true;
    }
    isMap() {
      return typeof this.opts.map < `u` ? !!this.opts.map : this.previous().length > 0;
    }
    isSourcesContent() {
      return typeof this.mapOpts.sourcesContent < `u` ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((e4) => e4.withContent()) : true;
    }
    outputFile() {
      return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : `to.css`;
    }
    path(e4) {
      if (this.mapOpts.absolute || e4.charCodeAt(0) === 60 || /^\w+:\/\//.test(e4)) return e4;
      let t3 = this.memoizedPaths.get(e4);
      if (t3) return t3;
      let a3 = this.opts.to ? n2(this.opts.to) : `.`;
      typeof this.mapOpts.annotation == `string` && (a3 = n2(i2(a3, this.mapOpts.annotation)));
      let o3 = r2(a3, e4);
      return this.memoizedPaths.set(e4, o3), o3;
    }
    previous() {
      if (!this.previousMaps) if (this.previousMaps = [], this.root) this.root.walk((e4) => {
        if (e4.source && e4.source.input.map) {
          let t3 = e4.source.input.map;
          this.previousMaps.includes(t3) || this.previousMaps.push(t3);
        }
      });
      else {
        let e4 = new l2(this.originalCSS, this.opts);
        e4.map && this.previousMaps.push(e4.map);
      }
      return this.previousMaps;
    }
    setSourcesContent() {
      let e4 = {};
      if (this.root) this.root.walk((t3) => {
        if (t3.source) {
          let n3 = t3.source.input.from;
          if (n3 && !e4[n3]) {
            e4[n3] = true;
            let r3 = this.usesFileUrls ? this.toFileUrl(n3) : this.toUrl(this.path(n3));
            this.map.setSourceContent(r3, t3.source.input.css);
          }
        }
      });
      else if (this.css) {
        let e5 = this.opts.from ? this.toUrl(this.path(this.opts.from)) : `<no source>`;
        this.map.setSourceContent(e5, this.css);
      }
    }
    sourcePath(e4) {
      return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e4.source.input.from) : this.toUrl(this.path(e4.source.input.from));
    }
    toBase64(e4) {
      return Wm ? Wm.from(e4).toString(`base64`) : window.btoa(unescape(encodeURIComponent(e4)));
    }
    toFileUrl(e4) {
      let t3 = this.memoizedFileURLs.get(e4);
      if (t3) return t3;
      if (c2) {
        let t4 = c2(e4).toString();
        return this.memoizedFileURLs.set(e4, t4), t4;
      } else throw Error("`map.absolute` option is not available in this PostCSS build");
    }
    toUrl(e4) {
      let t3 = this.memoizedURLs.get(e4);
      if (t3) return t3;
      a2 === `\\` && (e4 = e4.replace(/\\/g, `/`));
      let n3 = encodeURI(e4).replace(/[#?]/g, encodeURIComponent);
      return this.memoizedURLs.set(e4, n3), n3;
    }
  };
  t2.exports = f2;
}), h_ = l_(m_()), g_ = h_.default ?? h_, __ = {};
t(__, { default: () => j_ });
var v_ = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss/lib/at-rule`:
      return t2(qf);
    case `postcss/lib/comment`:
      return t2(ef);
    case `postcss/lib/declaration`:
      return t2(_f);
    case `postcss/lib/root`:
      return t2(Uh);
    case `postcss/lib/rule`:
      return t2(bg);
    case `postcss/lib/tokenize`:
      return t2(ou);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, y_ = Object.create, b_ = Object.defineProperty, x_ = Object.getOwnPropertyDescriptor, S_ = Object.getOwnPropertyNames, C_ = Object.getPrototypeOf, w_ = Object.prototype.hasOwnProperty, T_ = ((e3) => typeof v_ < `u` ? v_ : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof v_ < `u` ? v_ : e4)[t2] }) : e3)(function(e3) {
  if (typeof v_ < `u`) return v_.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), E_ = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), D_ = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of S_(t2)) !w_.call(e3, i2) && i2 !== n2 && b_(e3, i2, { get: () => t2[i2], enumerable: !(r2 = x_(t2, i2)) || r2.enumerable });
  return e3;
}, O_ = (e3, t2, n2) => (n2 = e3 == null ? {} : y_(C_(e3)), D_(t2 || !e3 || !e3.__esModule ? b_(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), k_ = E_((e3, t2) => {
  "use strict";
  var n2 = T_(`postcss/lib/at-rule`), r2 = T_(`postcss/lib/comment`), i2 = T_(`postcss/lib/declaration`), a2 = T_(`postcss/lib/root`), o2 = T_(`postcss/lib/rule`), s2 = T_(`postcss/lib/tokenize`), c2 = { empty: true, space: true };
  function l2(e4) {
    for (let t3 = e4.length - 1; t3 >= 0; t3--) {
      let n3 = e4[t3], r3 = n3[3] || n3[2];
      if (r3) return r3;
    }
  }
  var u2 = class {
    constructor(e4) {
      this.input = e4, this.root = new a2(), this.current = this.root, this.spaces = ``, this.semicolon = false, this.createTokenizer(), this.root.source = { input: e4, start: { column: 1, line: 1, offset: 0 } };
    }
    atrule(e4) {
      let t3 = new n2();
      t3.name = e4[1].slice(1), t3.name === `` && this.unnamedAtrule(t3, e4), this.init(t3, e4[2]);
      let r3, i3, a3, o3 = false, s3 = false, c3 = [], l3 = [];
      for (; !this.tokenizer.endOfFile(); ) {
        if (e4 = this.tokenizer.nextToken(), r3 = e4[0], r3 === `(` || r3 === `[` ? l3.push(r3 === `(` ? `)` : `]`) : r3 === `{` && l3.length > 0 ? l3.push(`}`) : r3 === l3[l3.length - 1] && l3.pop(), l3.length === 0) if (r3 === `;`) {
          t3.source.end = this.getPosition(e4[2]), t3.source.end.offset++, this.semicolon = true;
          break;
        } else if (r3 === `{`) {
          s3 = true;
          break;
        } else if (r3 === `}`) {
          if (c3.length > 0) {
            for (a3 = c3.length - 1, i3 = c3[a3]; i3 && i3[0] === `space`; ) i3 = c3[--a3];
            i3 && (t3.source.end = this.getPosition(i3[3] || i3[2]), t3.source.end.offset++);
          }
          this.end(e4);
          break;
        } else c3.push(e4);
        else c3.push(e4);
        if (this.tokenizer.endOfFile()) {
          o3 = true;
          break;
        }
      }
      t3.raws.between = this.spacesAndCommentsFromEnd(c3), c3.length ? (t3.raws.afterName = this.spacesAndCommentsFromStart(c3), this.raw(t3, `params`, c3), o3 && (e4 = c3[c3.length - 1], t3.source.end = this.getPosition(e4[3] || e4[2]), t3.source.end.offset++, this.spaces = t3.raws.between, t3.raws.between = ``)) : (t3.raws.afterName = ``, t3.params = ``), s3 && (t3.nodes = [], this.current = t3);
    }
    checkMissedSemicolon(e4) {
      let t3 = this.colon(e4);
      if (t3 === false) return;
      let n3 = 0, r3;
      for (let i3 = t3 - 1; i3 >= 0 && (r3 = e4[i3], !(r3[0] !== `space` && (n3 += 1, n3 === 2))); i3--) ;
      throw this.input.error(`Missed semicolon`, r3[0] === `word` ? r3[3] + 1 : r3[2]);
    }
    colon(e4) {
      let t3 = 0, n3, r3, i3;
      for (let [a3, o3] of e4.entries()) {
        if (r3 = o3, i3 = r3[0], i3 === `(` && (t3 += 1), i3 === `)` && --t3, t3 === 0 && i3 === `:`) if (!n3) this.doubleColon(r3);
        else {
          if (n3[0] === `word` && n3[1] === `progid`) continue;
          return a3;
        }
        n3 = r3;
      }
      return false;
    }
    comment(e4) {
      let t3 = new r2();
      this.init(t3, e4[2]), t3.source.end = this.getPosition(e4[3] || e4[2]), t3.source.end.offset++;
      let n3 = e4[1].slice(2, -2);
      if (/^\s*$/.test(n3)) t3.text = ``, t3.raws.left = n3, t3.raws.right = ``;
      else {
        let e5 = n3.match(/^(\s*)([^]*\S)(\s*)$/);
        t3.text = e5[2], t3.raws.left = e5[1], t3.raws.right = e5[3];
      }
    }
    createTokenizer() {
      this.tokenizer = s2(this.input);
    }
    decl(e4, t3) {
      let n3 = new i2();
      this.init(n3, e4[0][2]);
      let r3 = e4[e4.length - 1];
      for (r3[0] === `;` && (this.semicolon = true, e4.pop()), n3.source.end = this.getPosition(r3[3] || r3[2] || l2(e4)), n3.source.end.offset++; e4[0][0] !== `word`; ) e4.length === 1 && this.unknownWord(e4), n3.raws.before += e4.shift()[1];
      for (n3.source.start = this.getPosition(e4[0][2]), n3.prop = ``; e4.length; ) {
        let t4 = e4[0][0];
        if (t4 === `:` || t4 === `space` || t4 === `comment`) break;
        n3.prop += e4.shift()[1];
      }
      n3.raws.between = ``;
      let a3;
      for (; e4.length; ) if (a3 = e4.shift(), a3[0] === `:`) {
        n3.raws.between += a3[1];
        break;
      } else a3[0] === `word` && /\w/.test(a3[1]) && this.unknownWord([a3]), n3.raws.between += a3[1];
      (n3.prop[0] === `_` || n3.prop[0] === `*`) && (n3.raws.before += n3.prop[0], n3.prop = n3.prop.slice(1));
      let o3 = [], s3;
      for (; e4.length && (s3 = e4[0][0], !(s3 !== `space` && s3 !== `comment`)); ) o3.push(e4.shift());
      this.precheckMissedSemicolon(e4);
      for (let t4 = e4.length - 1; t4 >= 0; t4--) {
        if (a3 = e4[t4], a3[1].toLowerCase() === `!important`) {
          n3.important = true;
          let r4 = this.stringFrom(e4, t4);
          r4 = this.spacesFromEnd(e4) + r4, r4 !== ` !important` && (n3.raws.important = r4);
          break;
        } else if (a3[1].toLowerCase() === `important`) {
          let r4 = e4.slice(0), i3 = ``;
          for (let e5 = t4; e5 > 0; e5--) {
            let t5 = r4[e5][0];
            if (i3.trim().startsWith(`!`) && t5 !== `space`) break;
            i3 = r4.pop()[1] + i3;
          }
          i3.trim().startsWith(`!`) && (n3.important = true, n3.raws.important = i3, e4 = r4);
        }
        if (a3[0] !== `space` && a3[0] !== `comment`) break;
      }
      e4.some((e5) => e5[0] !== `space` && e5[0] !== `comment`) && (n3.raws.between += o3.map((e5) => e5[1]).join(``), o3 = []), this.raw(n3, `value`, o3.concat(e4), t3), n3.value.includes(`:`) && !t3 && this.checkMissedSemicolon(e4);
    }
    doubleColon(e4) {
      throw this.input.error(`Double colon`, { offset: e4[2] }, { offset: e4[2] + e4[1].length });
    }
    emptyRule(e4) {
      let t3 = new o2();
      this.init(t3, e4[2]), t3.selector = ``, t3.raws.between = ``, this.current = t3;
    }
    end(e4) {
      this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = false, this.current.raws.after = (this.current.raws.after || ``) + this.spaces, this.spaces = ``, this.current.parent ? (this.current.source.end = this.getPosition(e4[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e4);
    }
    endFile() {
      this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || ``) + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(e4) {
      if (this.spaces += e4[1], this.current.nodes) {
        let t3 = this.current.nodes[this.current.nodes.length - 1];
        t3 && t3.type === `rule` && !t3.raws.ownSemicolon && (t3.raws.ownSemicolon = this.spaces, this.spaces = ``, t3.source.end = this.getPosition(e4[2]), t3.source.end.offset += t3.raws.ownSemicolon.length);
      }
    }
    getPosition(e4) {
      let t3 = this.input.fromOffset(e4);
      return { column: t3.col, line: t3.line, offset: e4 };
    }
    init(e4, t3) {
      this.current.push(e4), e4.source = { input: this.input, start: this.getPosition(t3) }, e4.raws.before = this.spaces, this.spaces = ``, e4.type !== `comment` && (this.semicolon = false);
    }
    other(e4) {
      let t3 = false, n3 = null, r3 = false, i3 = null, a3 = [], o3 = e4[1].startsWith(`--`), s3 = [], c3 = e4;
      for (; c3; ) {
        if (n3 = c3[0], s3.push(c3), n3 === `(` || n3 === `[`) i3 || (i3 = c3), a3.push(n3 === `(` ? `)` : `]`);
        else if (o3 && r3 && n3 === `{`) i3 || (i3 = c3), a3.push(`}`);
        else if (a3.length === 0) if (n3 === `;`) if (r3) {
          this.decl(s3, o3);
          return;
        } else break;
        else if (n3 === `{`) {
          this.rule(s3);
          return;
        } else if (n3 === `}`) {
          this.tokenizer.back(s3.pop()), t3 = true;
          break;
        } else n3 === `:` && (r3 = true);
        else n3 === a3[a3.length - 1] && (a3.pop(), a3.length === 0 && (i3 = null));
        c3 = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile() && (t3 = true), a3.length > 0 && this.unclosedBracket(i3), t3 && r3) {
        if (!o3) for (; s3.length && (c3 = s3[s3.length - 1][0], !(c3 !== `space` && c3 !== `comment`)); ) this.tokenizer.back(s3.pop());
        this.decl(s3, o3);
      } else this.unknownWord(s3);
    }
    parse() {
      let e4;
      for (; !this.tokenizer.endOfFile(); ) switch (e4 = this.tokenizer.nextToken(), e4[0]) {
        case `space`:
          this.spaces += e4[1];
          break;
        case `;`:
          this.freeSemicolon(e4);
          break;
        case `}`:
          this.end(e4);
          break;
        case `comment`:
          this.comment(e4);
          break;
        case `at-word`:
          this.atrule(e4);
          break;
        case `{`:
          this.emptyRule(e4);
          break;
        default:
          this.other(e4);
          break;
      }
      this.endFile();
    }
    precheckMissedSemicolon() {
    }
    raw(e4, t3, n3, r3) {
      let i3, a3, o3 = n3.length, s3 = ``, l3 = true, u3, d2;
      for (let e5 = 0; e5 < o3; e5 += 1) i3 = n3[e5], a3 = i3[0], a3 === `space` && e5 === o3 - 1 && !r3 ? l3 = false : a3 === `comment` ? (d2 = n3[e5 - 1] ? n3[e5 - 1][0] : `empty`, u3 = n3[e5 + 1] ? n3[e5 + 1][0] : `empty`, !c2[d2] && !c2[u3] ? s3.slice(-1) === `,` ? l3 = false : s3 += i3[1] : l3 = false) : s3 += i3[1];
      if (!l3) {
        let r4 = n3.reduce((e5, t4) => e5 + t4[1], ``);
        e4.raws[t3] = { raw: r4, value: s3 };
      }
      e4[t3] = s3;
    }
    rule(e4) {
      e4.pop();
      let t3 = new o2();
      this.init(t3, e4[0][2]), t3.raws.between = this.spacesAndCommentsFromEnd(e4), this.raw(t3, `selector`, e4), this.current = t3;
    }
    spacesAndCommentsFromEnd(e4) {
      let t3, n3 = ``;
      for (; e4.length && (t3 = e4[e4.length - 1][0], !(t3 !== `space` && t3 !== `comment`)); ) n3 = e4.pop()[1] + n3;
      return n3;
    }
    spacesAndCommentsFromStart(e4) {
      let t3, n3 = ``;
      for (; e4.length && (t3 = e4[0][0], !(t3 !== `space` && t3 !== `comment`)); ) n3 += e4.shift()[1];
      return n3;
    }
    spacesFromEnd(e4) {
      let t3, n3 = ``;
      for (; e4.length && (t3 = e4[e4.length - 1][0], t3 === `space`); ) n3 = e4.pop()[1] + n3;
      return n3;
    }
    stringFrom(e4, t3) {
      let n3 = ``;
      for (let r3 = t3; r3 < e4.length; r3++) n3 += e4[r3][1];
      return e4.splice(t3, e4.length - t3), n3;
    }
    unclosedBlock() {
      let e4 = this.current.source.start;
      throw this.input.error(`Unclosed block`, e4.line, e4.column);
    }
    unclosedBracket(e4) {
      throw this.input.error(`Unclosed bracket`, { offset: e4[2] }, { offset: e4[2] + 1 });
    }
    unexpectedClose(e4) {
      throw this.input.error(`Unexpected }`, { offset: e4[2] }, { offset: e4[2] + 1 });
    }
    unknownWord(e4) {
      throw this.input.error(`Unknown word ` + e4[0][1], { offset: e4[0][2] }, { offset: e4[0][2] + e4[0][1].length });
    }
    unnamedAtrule(e4, t3) {
      throw this.input.error(`At-rule without name`, { offset: t3[2] }, { offset: t3[2] + t3[1].length });
    }
  };
  t2.exports = u2;
}), A_ = O_(k_()), j_ = A_.default ?? A_, M_ = {};
t(M_, { default: () => K_ });
var N_ = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss/lib/container`:
      return t2(Mf);
    case `postcss/lib/input`:
      return t2(Sh);
    case `postcss/lib/parser`:
      return t2(__);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, P_ = Object.create, F_ = Object.defineProperty, I_ = Object.getOwnPropertyDescriptor, L_ = Object.getOwnPropertyNames, R_ = Object.getPrototypeOf, z_ = Object.prototype.hasOwnProperty, B_ = ((e3) => typeof N_ < `u` ? N_ : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof N_ < `u` ? N_ : e4)[t2] }) : e3)(function(e3) {
  if (typeof N_ < `u`) return N_.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), V_ = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), H_ = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of L_(t2)) !z_.call(e3, i2) && i2 !== n2 && F_(e3, i2, { get: () => t2[i2], enumerable: !(r2 = I_(t2, i2)) || r2.enumerable });
  return e3;
}, U_ = (e3, t2, n2) => (n2 = e3 == null ? {} : P_(R_(e3)), H_(t2 || !e3 || !e3.__esModule ? F_(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), W_ = V_((e3, t2) => {
  "use strict";
  var n2 = B_(`postcss/lib/container`), r2 = B_(`postcss/lib/input`), i2 = B_(`postcss/lib/parser`);
  function a2(e4, t3) {
    let n3 = new r2(e4, t3), a3 = new i2(n3);
    try {
      a3.parse();
    } catch (e5) {
      throw e5;
    }
    return a3.root;
  }
  t2.exports = a2, a2.default = a2, n2.registerParse(a2);
}), G_ = U_(W_()), K_ = G_.default ?? G_, q_ = {};
t(q_, { default: () => av });
var J_ = Object.create, Y_ = Object.defineProperty, X_ = Object.getOwnPropertyDescriptor, Z_ = Object.getOwnPropertyNames, Q_ = Object.getPrototypeOf, $_ = Object.prototype.hasOwnProperty, ev = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), tv = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of Z_(t2)) !$_.call(e3, i2) && i2 !== n2 && Y_(e3, i2, { get: () => t2[i2], enumerable: !(r2 = X_(t2, i2)) || r2.enumerable });
  return e3;
}, nv = (e3, t2, n2) => (n2 = e3 == null ? {} : J_(Q_(e3)), tv(t2 || !e3 || !e3.__esModule ? Y_(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), rv = ev((e3, t2) => {
  "use strict";
  var n2 = class {
    constructor(e4, t3 = {}) {
      if (this.type = `warning`, this.text = e4, t3.node && t3.node.source) {
        let e5 = t3.node.rangeBy(t3);
        this.line = e5.start.line, this.column = e5.start.column, this.endLine = e5.end.line, this.endColumn = e5.end.column;
      }
      for (let e5 in t3) this[e5] = t3[e5];
    }
    toString() {
      return this.node ? this.node.error(this.text, { index: this.index, plugin: this.plugin, word: this.word }).message : this.plugin ? this.plugin + `: ` + this.text : this.text;
    }
  };
  t2.exports = n2, n2.default = n2;
}), iv = nv(rv()), av = iv.default ?? iv, ov = {};
t(ov, { default: () => bv });
var sv = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss/lib/warning`:
      return t2(q_);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, cv = Object.create, lv = Object.defineProperty, uv = Object.getOwnPropertyDescriptor, dv = Object.getOwnPropertyNames, fv = Object.getPrototypeOf, pv = Object.prototype.hasOwnProperty, mv = ((e3) => typeof sv < `u` ? sv : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof sv < `u` ? sv : e4)[t2] }) : e3)(function(e3) {
  if (typeof sv < `u`) return sv.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), hv = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), gv = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of dv(t2)) !pv.call(e3, i2) && i2 !== n2 && lv(e3, i2, { get: () => t2[i2], enumerable: !(r2 = uv(t2, i2)) || r2.enumerable });
  return e3;
}, _v = (e3, t2, n2) => (n2 = e3 == null ? {} : cv(fv(e3)), gv(t2 || !e3 || !e3.__esModule ? lv(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), vv = hv((e3, t2) => {
  "use strict";
  var n2 = mv(`postcss/lib/warning`), r2 = class {
    get content() {
      return this.css;
    }
    constructor(e4, t3, n3) {
      this.processor = e4, this.messages = [], this.root = t3, this.opts = n3, this.css = ``, this.map = void 0;
    }
    toString() {
      return this.css;
    }
    warn(e4, t3 = {}) {
      t3.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t3.plugin = this.lastPlugin.postcssPlugin);
      let r3 = new n2(e4, t3);
      return this.messages.push(r3), r3;
    }
    warnings() {
      return this.messages.filter((e4) => e4.type === `warning`);
    }
  };
  t2.exports = r2, r2.default = r2;
}), yv = _v(vv()), bv = yv.default ?? yv, xv = {};
t(xv, { default: () => Nv });
var Sv = Object.create, Cv = Object.defineProperty, wv = Object.getOwnPropertyDescriptor, Tv = Object.getOwnPropertyNames, Ev = Object.getPrototypeOf, Dv = Object.prototype.hasOwnProperty, Ov = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), kv = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of Tv(t2)) !Dv.call(e3, i2) && i2 !== n2 && Cv(e3, i2, { get: () => t2[i2], enumerable: !(r2 = wv(t2, i2)) || r2.enumerable });
  return e3;
}, Av = (e3, t2, n2) => (n2 = e3 == null ? {} : Sv(Ev(e3)), kv(t2 || !e3 || !e3.__esModule ? Cv(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), jv = Ov((e3, t2) => {
  "use strict";
  var n2 = {};
  t2.exports = function(e4) {
    n2[e4] || (n2[e4] = true, typeof console < `u` && console.warn && console.warn(e4));
  };
}), Mv = Av(jv()), Nv = Mv.default ?? Mv, Pv = {};
t(Pv, { default: () => Jv });
var Fv = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss/lib/container`:
      return t2(Mf);
    case `postcss/lib/document`:
      return t2(cp);
    case `postcss/lib/map-generator`:
      return t2(Xg);
    case `postcss/lib/parse`:
      return t2(M_);
    case `postcss/lib/result`:
      return t2(ov);
    case `postcss/lib/root`:
      return t2(Uh);
    case `postcss/lib/stringify`:
      return t2(ld);
    case `postcss/lib/symbols`:
      return t2(wd);
    case `postcss/lib/warn-once`:
      return t2(xv);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, Iv = Object.create, Lv = Object.defineProperty, Rv = Object.getOwnPropertyDescriptor, zv = Object.getOwnPropertyNames, Bv = Object.getPrototypeOf, Vv = Object.prototype.hasOwnProperty, Hv = ((e3) => typeof Fv < `u` ? Fv : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof Fv < `u` ? Fv : e4)[t2] }) : e3)(function(e3) {
  if (typeof Fv < `u`) return Fv.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), Uv = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), Wv = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of zv(t2)) !Vv.call(e3, i2) && i2 !== n2 && Lv(e3, i2, { get: () => t2[i2], enumerable: !(r2 = Rv(t2, i2)) || r2.enumerable });
  return e3;
}, Gv = (e3, t2, n2) => (n2 = e3 == null ? {} : Iv(Bv(e3)), Wv(t2 || !e3 || !e3.__esModule ? Lv(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), Kv = Uv((e3, t2) => {
  "use strict";
  var n2 = Hv(`postcss/lib/container`), r2 = Hv(`postcss/lib/document`), i2 = Hv(`postcss/lib/map-generator`), a2 = Hv(`postcss/lib/parse`), o2 = Hv(`postcss/lib/result`), s2 = Hv(`postcss/lib/root`), c2 = Hv(`postcss/lib/stringify`), { isClean: l2, my: u2 } = Hv(`postcss/lib/symbols`), d2 = Hv(`postcss/lib/warn-once`), f2 = { atrule: `AtRule`, comment: `Comment`, decl: `Declaration`, document: `Document`, root: `Root`, rule: `Rule` }, p2 = { AtRule: true, AtRuleExit: true, Comment: true, CommentExit: true, Declaration: true, DeclarationExit: true, Document: true, DocumentExit: true, Once: true, OnceExit: true, postcssPlugin: true, prepare: true, Root: true, RootExit: true, Rule: true, RuleExit: true }, m2 = { Once: true, postcssPlugin: true, prepare: true }, h2 = 0;
  function g2(e4) {
    return typeof e4 == `object` && typeof e4.then == `function`;
  }
  function _2(e4) {
    let t3 = false, n3 = f2[e4.type];
    return e4.type === `decl` ? t3 = e4.prop.toLowerCase() : e4.type === `atrule` && (t3 = e4.name.toLowerCase()), t3 && e4.append ? [n3, n3 + `-` + t3, h2, n3 + `Exit`, n3 + `Exit-` + t3] : t3 ? [n3, n3 + `-` + t3, n3 + `Exit`, n3 + `Exit-` + t3] : e4.append ? [n3, h2, n3 + `Exit`] : [n3, n3 + `Exit`];
  }
  function v2(e4) {
    let t3;
    return t3 = e4.type === `document` ? [`Document`, h2, `DocumentExit`] : e4.type === `root` ? [`Root`, h2, `RootExit`] : _2(e4), { eventIndex: 0, events: t3, iterator: 0, node: e4, visitorIndex: 0, visitors: [] };
  }
  function y2(e4) {
    return e4[l2] = false, e4.nodes && e4.nodes.forEach((e5) => y2(e5)), e4;
  }
  var b2 = {}, x2 = class e4 {
    get content() {
      return this.stringify().content;
    }
    get css() {
      return this.stringify().css;
    }
    get map() {
      return this.stringify().map;
    }
    get messages() {
      return this.sync().messages;
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      return this.sync().root;
    }
    get [Symbol.toStringTag]() {
      return `LazyResult`;
    }
    constructor(t3, r3, i3) {
      this.stringified = false, this.processed = false;
      let s3;
      if (typeof r3 == `object` && r3 && (r3.type === `root` || r3.type === `document`)) s3 = y2(r3);
      else if (r3 instanceof e4 || r3 instanceof o2) s3 = y2(r3.root), r3.map && (typeof i3.map > `u` && (i3.map = {}), i3.map.inline || (i3.map.inline = false), i3.map.prev = r3.map);
      else {
        let e5 = a2;
        i3.syntax && (e5 = i3.syntax.parse), i3.parser && (e5 = i3.parser), e5.parse && (e5 = e5.parse);
        try {
          s3 = e5(r3, i3);
        } catch (e6) {
          this.processed = true, this.error = e6;
        }
        s3 && !s3[u2] && n2.rebuild(s3);
      }
      this.result = new o2(t3, s3, i3), this.helpers = { ...b2, postcss: b2, result: this.result }, this.plugins = this.processor.plugins.map((e5) => typeof e5 == `object` && e5.prepare ? { ...e5, ...e5.prepare(this.result) } : e5);
    }
    async() {
      return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
    }
    catch(e5) {
      return this.async().catch(e5);
    }
    finally(e5) {
      return this.async().then(e5, e5);
    }
    getAsyncError() {
      throw Error(`Use process(css).then(cb) to work with async plugins`);
    }
    handleError(e5, t3) {
      let n3 = this.result.lastPlugin;
      try {
        t3 && t3.addToError(e5), this.error = e5, e5.name === `CssSyntaxError` && !e5.plugin ? (e5.plugin = n3.postcssPlugin, e5.setMessage()) : n3.postcssVersion;
      } catch (e6) {
        console && console.error && console.error(e6);
      }
      return e5;
    }
    prepareVisitors() {
      this.listeners = {};
      let e5 = (e6, t3, n3) => {
        this.listeners[t3] || (this.listeners[t3] = []), this.listeners[t3].push([e6, n3]);
      };
      for (let t3 of this.plugins) if (typeof t3 == `object`) for (let n3 in t3) {
        if (!p2[n3] && /^[A-Z]/.test(n3)) throw Error(`Unknown event ${n3} in ${t3.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
        if (!m2[n3]) if (typeof t3[n3] == `object`) for (let r3 in t3[n3]) r3 === `*` ? e5(t3, n3, t3[n3][r3]) : e5(t3, n3 + `-` + r3.toLowerCase(), t3[n3][r3]);
        else typeof t3[n3] == `function` && e5(t3, n3, t3[n3]);
      }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
      this.plugin = 0;
      for (let e5 = 0; e5 < this.plugins.length; e5++) {
        let t3 = this.plugins[e5], n3 = this.runOnRoot(t3);
        if (g2(n3)) try {
          await n3;
        } catch (e6) {
          throw this.handleError(e6);
        }
      }
      if (this.prepareVisitors(), this.hasListener) {
        let e5 = this.result.root;
        for (; !e5[l2]; ) {
          e5[l2] = true;
          let t3 = [v2(e5)];
          for (; t3.length > 0; ) {
            let e6 = this.visitTick(t3);
            if (g2(e6)) try {
              await e6;
            } catch (e7) {
              let n3 = t3[t3.length - 1].node;
              throw this.handleError(e7, n3);
            }
          }
        }
        if (this.listeners.OnceExit) for (let [t3, n3] of this.listeners.OnceExit) {
          this.result.lastPlugin = t3;
          try {
            if (e5.type === `document`) {
              let t4 = e5.nodes.map((e6) => n3(e6, this.helpers));
              await Promise.all(t4);
            } else await n3(e5, this.helpers);
          } catch (e6) {
            throw this.handleError(e6);
          }
        }
      }
      return this.processed = true, this.stringify();
    }
    runOnRoot(e5) {
      this.result.lastPlugin = e5;
      try {
        if (typeof e5 == `object` && e5.Once) {
          if (this.result.root.type === `document`) {
            let t3 = this.result.root.nodes.map((t4) => e5.Once(t4, this.helpers));
            return g2(t3[0]) ? Promise.all(t3) : t3;
          }
          return e5.Once(this.result.root, this.helpers);
        } else if (typeof e5 == `function`) return e5(this.result.root, this.result);
      } catch (e6) {
        throw this.handleError(e6);
      }
    }
    stringify() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      this.stringified = true, this.sync();
      let e5 = this.result.opts, t3 = c2;
      e5.syntax && (t3 = e5.syntax.stringify), e5.stringifier && (t3 = e5.stringifier), t3.stringify && (t3 = t3.stringify);
      let n3 = new i2(t3, this.result.root, this.result.opts).generate();
      return this.result.css = n3[0], this.result.map = n3[1], this.result;
    }
    sync() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      if (this.processed = true, this.processing) throw this.getAsyncError();
      for (let e5 of this.plugins) {
        let t3 = this.runOnRoot(e5);
        if (g2(t3)) throw this.getAsyncError();
      }
      if (this.prepareVisitors(), this.hasListener) {
        let e5 = this.result.root;
        for (; !e5[l2]; ) e5[l2] = true, this.walkSync(e5);
        if (this.listeners.OnceExit) if (e5.type === `document`) for (let t3 of e5.nodes) this.visitSync(this.listeners.OnceExit, t3);
        else this.visitSync(this.listeners.OnceExit, e5);
      }
      return this.result;
    }
    then(e5, t3) {
      return this.async().then(e5, t3);
    }
    toString() {
      return this.css;
    }
    visitSync(e5, t3) {
      for (let [n3, r3] of e5) {
        this.result.lastPlugin = n3;
        let e6;
        try {
          e6 = r3(t3, this.helpers);
        } catch (e7) {
          throw this.handleError(e7, t3.proxyOf);
        }
        if (t3.type !== `root` && t3.type !== `document` && !t3.parent) return true;
        if (g2(e6)) throw this.getAsyncError();
      }
    }
    visitTick(e5) {
      let t3 = e5[e5.length - 1], { node: n3, visitors: r3 } = t3;
      if (n3.type !== `root` && n3.type !== `document` && !n3.parent) {
        e5.pop();
        return;
      }
      if (r3.length > 0 && t3.visitorIndex < r3.length) {
        let [e6, i4] = r3[t3.visitorIndex];
        t3.visitorIndex += 1, t3.visitorIndex === r3.length && (t3.visitors = [], t3.visitorIndex = 0), this.result.lastPlugin = e6;
        try {
          return i4(n3.toProxy(), this.helpers);
        } catch (e7) {
          throw this.handleError(e7, n3);
        }
      }
      if (t3.iterator !== 0) {
        let r4 = t3.iterator, i4;
        for (; i4 = n3.nodes[n3.indexes[r4]]; ) if (n3.indexes[r4] += 1, !i4[l2]) {
          i4[l2] = true, e5.push(v2(i4));
          return;
        }
        t3.iterator = 0, delete n3.indexes[r4];
      }
      let i3 = t3.events;
      for (; t3.eventIndex < i3.length; ) {
        let e6 = i3[t3.eventIndex];
        if (t3.eventIndex += 1, e6 === h2) {
          n3.nodes && n3.nodes.length && (n3[l2] = true, t3.iterator = n3.getIterator());
          return;
        } else if (this.listeners[e6]) {
          t3.visitors = this.listeners[e6];
          return;
        }
      }
      e5.pop();
    }
    walkSync(e5) {
      e5[l2] = true;
      let t3 = _2(e5);
      for (let n3 of t3) if (n3 === h2) e5.nodes && e5.each((e6) => {
        e6[l2] || this.walkSync(e6);
      });
      else {
        let t4 = this.listeners[n3];
        if (t4 && this.visitSync(t4, e5.toProxy())) return;
      }
    }
    warnings() {
      return this.sync().warnings();
    }
  };
  x2.registerPostcss = (e4) => {
    b2 = e4;
  }, t2.exports = x2, x2.default = x2, s2.registerLazyResult(x2), r2.registerLazyResult(x2);
}), qv = Gv(Kv()), Jv = qv.default ?? qv, Yv = {};
t(Yv, { default: () => ly });
var Xv = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss/lib/map-generator`:
      return t2(Xg);
    case `postcss/lib/parse`:
      return t2(M_);
    case `postcss/lib/result`:
      return t2(ov);
    case `postcss/lib/stringify`:
      return t2(ld);
    case `postcss/lib/warn-once`:
      return t2(xv);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, Zv = Object.create, Qv = Object.defineProperty, $v = Object.getOwnPropertyDescriptor, ey = Object.getOwnPropertyNames, ty = Object.getPrototypeOf, ny = Object.prototype.hasOwnProperty, ry = ((e3) => typeof Xv < `u` ? Xv : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof Xv < `u` ? Xv : e4)[t2] }) : e3)(function(e3) {
  if (typeof Xv < `u`) return Xv.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), iy = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), ay = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of ey(t2)) !ny.call(e3, i2) && i2 !== n2 && Qv(e3, i2, { get: () => t2[i2], enumerable: !(r2 = $v(t2, i2)) || r2.enumerable });
  return e3;
}, oy = (e3, t2, n2) => (n2 = e3 == null ? {} : Zv(ty(e3)), ay(t2 || !e3 || !e3.__esModule ? Qv(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), sy = iy((e3, t2) => {
  "use strict";
  var n2 = ry(`postcss/lib/map-generator`), r2 = ry(`postcss/lib/parse`), i2 = ry(`postcss/lib/result`), a2 = ry(`postcss/lib/stringify`), o2 = ry(`postcss/lib/warn-once`), s2 = class {
    get content() {
      return this.result.css;
    }
    get css() {
      return this.result.css;
    }
    get map() {
      return this.result.map;
    }
    get messages() {
      return [];
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      if (this._root) return this._root;
      let e4, t3 = r2;
      try {
        e4 = t3(this._css, this._opts);
      } catch (e5) {
        this.error = e5;
      }
      if (this.error) throw this.error;
      return this._root = e4, e4;
    }
    get [Symbol.toStringTag]() {
      return `NoWorkResult`;
    }
    constructor(e4, t3, r3) {
      t3 = t3.toString(), this.stringified = false, this._processor = e4, this._css = t3, this._opts = r3, this._map = void 0;
      let o3, s3 = a2;
      this.result = new i2(this._processor, o3, this._opts), this.result.css = t3;
      let c2 = this;
      Object.defineProperty(this.result, `root`, { get() {
        return c2.root;
      } });
      let l2 = new n2(s3, o3, this._opts, t3);
      if (l2.isMap()) {
        let [e5, t4] = l2.generate();
        e5 && (this.result.css = e5), t4 && (this.result.map = t4);
      } else l2.clearAnnotation(), this.result.css = l2.css;
    }
    async() {
      return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
    }
    catch(e4) {
      return this.async().catch(e4);
    }
    finally(e4) {
      return this.async().then(e4, e4);
    }
    sync() {
      if (this.error) throw this.error;
      return this.result;
    }
    then(e4, t3) {
      return this.async().then(e4, t3);
    }
    toString() {
      return this._css;
    }
    warnings() {
      return [];
    }
  };
  t2.exports = s2, s2.default = s2;
}), cy = oy(sy()), ly = cy.default ?? cy, uy = {};
t(uy, { default: () => wy });
var dy = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss/lib/document`:
      return t2(cp);
    case `postcss/lib/lazy-result`:
      return t2(Pv);
    case `postcss/lib/no-work-result`:
      return t2(Yv);
    case `postcss/lib/root`:
      return t2(Uh);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, fy = Object.create, py = Object.defineProperty, my = Object.getOwnPropertyDescriptor, hy = Object.getOwnPropertyNames, gy = Object.getPrototypeOf, _y = Object.prototype.hasOwnProperty, vy = ((e3) => typeof dy < `u` ? dy : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof dy < `u` ? dy : e4)[t2] }) : e3)(function(e3) {
  if (typeof dy < `u`) return dy.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), yy = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), by = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of hy(t2)) !_y.call(e3, i2) && i2 !== n2 && py(e3, i2, { get: () => t2[i2], enumerable: !(r2 = my(t2, i2)) || r2.enumerable });
  return e3;
}, xy = (e3, t2, n2) => (n2 = e3 == null ? {} : fy(gy(e3)), by(t2 || !e3 || !e3.__esModule ? py(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), Sy = yy((e3, t2) => {
  "use strict";
  var n2 = vy(`postcss/lib/document`), r2 = vy(`postcss/lib/lazy-result`), i2 = vy(`postcss/lib/no-work-result`), a2 = vy(`postcss/lib/root`), o2 = class {
    constructor(e4 = []) {
      this.version = `8.5.4`, this.plugins = this.normalize(e4);
    }
    normalize(e4) {
      let t3 = [];
      for (let n3 of e4) if (n3.postcss === true ? n3 = n3() : n3.postcss && (n3 = n3.postcss), typeof n3 == `object` && Array.isArray(n3.plugins)) t3 = t3.concat(n3.plugins);
      else if (typeof n3 == `object` && n3.postcssPlugin) t3.push(n3);
      else if (typeof n3 == `function`) t3.push(n3);
      else if (!(typeof n3 == `object` && (n3.parse || n3.stringify))) throw Error(n3 + ` is not a PostCSS plugin`);
      return t3;
    }
    process(e4, t3 = {}) {
      return !this.plugins.length && !t3.parser && !t3.stringifier && !t3.syntax ? new i2(this, e4, t3) : new r2(this, e4, t3);
    }
    use(e4) {
      return this.plugins = this.plugins.concat(this.normalize([e4])), this;
    }
  };
  t2.exports = o2, o2.default = o2, a2.registerProcessor(o2), n2.registerProcessor(o2);
}), Cy = xy(Sy()), wy = Cy.default ?? Cy, Ty = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss/lib/at-rule`:
      return t2(qf);
    case `postcss/lib/comment`:
      return t2(ef);
    case `postcss/lib/container`:
      return t2(Mf);
    case `postcss/lib/css-syntax-error`:
      return t2(Fu);
    case `postcss/lib/declaration`:
      return t2(_f);
    case `postcss/lib/document`:
      return t2(cp);
    case `postcss/lib/fromJSON`:
      return t2(Fg);
    case `postcss/lib/input`:
      return t2(Sh);
    case `postcss/lib/lazy-result`:
      return t2(Pv);
    case `postcss/lib/list`:
      return t2(ig);
    case `postcss/lib/node`:
      return t2(zd);
    case `postcss/lib/parse`:
      return t2(M_);
    case `postcss/lib/processor`:
      return t2(uy);
    case `postcss/lib/result`:
      return t2(ov);
    case `postcss/lib/root`:
      return t2(Uh);
    case `postcss/lib/rule`:
      return t2(bg);
    case `postcss/lib/stringify`:
      return t2(ld);
    case `postcss/lib/warning`:
      return t2(q_);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, Ey = Object.create, Dy = Object.defineProperty, Oy = Object.getOwnPropertyDescriptor, ky = Object.getOwnPropertyNames, Ay = Object.getPrototypeOf, jy = Object.prototype.hasOwnProperty, J = ((e3) => typeof Ty < `u` ? Ty : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof Ty < `u` ? Ty : e4)[t2] }) : e3)(function(e3) {
  if (typeof Ty < `u`) return Ty.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), My = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), Ny = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of ky(t2)) !jy.call(e3, i2) && i2 !== n2 && Dy(e3, i2, { get: () => t2[i2], enumerable: !(r2 = Oy(t2, i2)) || r2.enumerable });
  return e3;
}, Py = (e3, t2, n2) => (n2 = e3 == null ? {} : Ey(Ay(e3)), Ny(t2 || !e3 || !e3.__esModule ? Dy(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), Fy = My((e3, t2) => {
  "use strict";
  var n2 = J(`postcss/lib/at-rule`), r2 = J(`postcss/lib/comment`), i2 = J(`postcss/lib/container`), a2 = J(`postcss/lib/css-syntax-error`), o2 = J(`postcss/lib/declaration`), s2 = J(`postcss/lib/document`), c2 = J(`postcss/lib/fromJSON`), l2 = J(`postcss/lib/input`), u2 = J(`postcss/lib/lazy-result`), d2 = J(`postcss/lib/list`), f2 = J(`postcss/lib/node`), p2 = J(`postcss/lib/parse`), m2 = J(`postcss/lib/processor`), h2 = J(`postcss/lib/result`), g2 = J(`postcss/lib/root`), _2 = J(`postcss/lib/rule`), v2 = J(`postcss/lib/stringify`), y2 = J(`postcss/lib/warning`);
  function b2(...e4) {
    return e4.length === 1 && Array.isArray(e4[0]) && (e4 = e4[0]), new m2(e4);
  }
  b2.plugin = function(e4, t3) {
    let n3 = false;
    function r3(...r4) {
      console && console.warn && !n3 && (n3 = true, console.warn(e4 + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`), _s.env.LANG && _s.env.LANG.startsWith(`cn`) && console.warn(e4 + `: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));
      let i4 = t3(...r4);
      return i4.postcssPlugin = e4, i4.postcssVersion = new m2().version, i4;
    }
    let i3;
    return Object.defineProperty(r3, `postcss`, { get() {
      return i3 || (i3 = r3()), i3;
    } }), r3.process = function(e5, t4, n4) {
      return b2([r3(n4)]).process(e5, t4);
    }, r3;
  }, b2.stringify = v2, b2.parse = p2, b2.fromJSON = c2, b2.list = d2, b2.comment = (e4) => new r2(e4), b2.atRule = (e4) => new n2(e4), b2.decl = (e4) => new o2(e4), b2.rule = (e4) => new _2(e4), b2.root = (e4) => new g2(e4), b2.document = (e4) => new s2(e4), b2.CssSyntaxError = a2, b2.Declaration = o2, b2.Container = i2, b2.Processor = m2, b2.Document = s2, b2.Comment = r2, b2.Warning = y2, b2.AtRule = n2, b2.Result = h2, b2.Input = l2, b2.Rule = _2, b2.Root = g2, b2.Node = f2, u2.registerPostcss(b2), t2.exports = b2, b2.default = b2;
}), Y = Py(Fy(), 1), Iy = Y.default, Ly = Y.default.stringify, Ry = Y.default.fromJSON, zy = Y.default.plugin, By = Y.default.parse, Vy = Y.default.list, Hy = Y.default.document, Uy = Y.default.comment, Wy = Y.default.atRule, Gy = Y.default.rule, Ky = Y.default.decl, qy = Y.default.root, Jy = Y.default.CssSyntaxError, Yy = Y.default.Declaration, Xy = Y.default.Container, Zy = Y.default.Processor, Qy = Y.default.Document, $y = Y.default.Comment, eb = Y.default.Warning, tb = Y.default.AtRule, nb = Y.default.Result, rb = Y.default.Input, ib = Y.default.Rule, ab = Y.default.Root, ob = Y.default.Node, sb = {};
t(sb, { AtRule: () => tb, Comment: () => $y, Container: () => Xy, CssSyntaxError: () => Jy, Declaration: () => Yy, Document: () => Qy, Input: () => rb, Node: () => ob, Processor: () => Zy, Result: () => nb, Root: () => ab, Rule: () => ib, Warning: () => eb, atRule: () => Wy, comment: () => Uy, decl: () => Ky, default: () => Iy, document: () => Hy, fromJSON: () => Ry, list: () => Vy, parse: () => By, plugin: () => zy, root: () => qy, rule: () => Gy, stringify: () => Ly });
var cb = Object.create, lb = Object.defineProperty, ub = Object.getOwnPropertyDescriptor, db = Object.getOwnPropertyNames, fb = Object.getPrototypeOf, pb = Object.prototype.hasOwnProperty, mb = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), hb = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of db(t2)) !pb.call(e3, i2) && i2 !== n2 && lb(e3, i2, { get: () => t2[i2], enumerable: !(r2 = ub(t2, i2)) || r2.enumerable });
  return e3;
}, gb = (e3, t2, n2) => (n2 = e3 == null ? {} : cb(fb(e3)), hb(t2 || !e3 || !e3.__esModule ? lb(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), _b = mb((e3, t2) => {
  "use strict";
  var n2 = /-(\w|$)/g, r2 = function(e4, t3) {
    return t3.toUpperCase();
  }, i2 = function(e4) {
    return e4 = e4.toLowerCase(), e4 === `float` ? `cssFloat` : e4.charCodeAt(0) === 45 && e4.charCodeAt(1) === 109 && e4.charCodeAt(2) === 115 && e4.charCodeAt(3) === 45 ? e4.substr(1).replace(n2, r2) : e4.replace(n2, r2);
  };
  t2.exports = i2;
}), vb = gb(_b()), yb = vb.default ?? vb, bb = {};
t(bb, { default: () => yb });
var xb = {};
t(xb, { default: () => Fb });
var Sb = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `camelcase-css`:
      return t2(bb);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, Cb = Object.create, wb = Object.defineProperty, Tb = Object.getOwnPropertyDescriptor, Eb = Object.getOwnPropertyNames, Db = Object.getPrototypeOf, Ob = Object.prototype.hasOwnProperty, kb = ((e3) => typeof Sb < `u` ? Sb : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof Sb < `u` ? Sb : e4)[t2] }) : e3)(function(e3) {
  if (typeof Sb < `u`) return Sb.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), Ab = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), jb = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of Eb(t2)) !Ob.call(e3, i2) && i2 !== n2 && wb(e3, i2, { get: () => t2[i2], enumerable: !(r2 = Tb(t2, i2)) || r2.enumerable });
  return e3;
}, Mb = (e3, t2, n2) => (n2 = e3 == null ? {} : Cb(Db(e3)), jb(t2 || !e3 || !e3.__esModule ? wb(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), Nb = Ab((e3, t2) => {
  var n2 = kb(`camelcase-css`), r2 = { boxFlex: true, boxFlexGroup: true, columnCount: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, strokeDashoffset: true, strokeOpacity: true, strokeWidth: true };
  function i2(e4) {
    return typeof e4.nodes > `u` ? true : a2(e4);
  }
  function a2(e4) {
    let t3, o2 = {};
    return e4.each((e5) => {
      if (e5.type === `atrule`) t3 = `@` + e5.name, e5.params && (t3 += ` ` + e5.params), typeof o2[t3] > `u` ? o2[t3] = i2(e5) : Array.isArray(o2[t3]) ? o2[t3].push(i2(e5)) : o2[t3] = [o2[t3], i2(e5)];
      else if (e5.type === `rule`) {
        let t4 = a2(e5);
        if (o2[e5.selector]) for (let n3 in t4) o2[e5.selector][n3] = t4[n3];
        else o2[e5.selector] = t4;
      } else if (e5.type === `decl`) {
        t3 = e5.prop[0] === `-` && e5.prop[1] === `-` || e5.parent && e5.parent.selector === `:export` ? e5.prop : n2(e5.prop);
        let i3 = e5.value;
        !isNaN(e5.value) && r2[t3] && (i3 = parseFloat(e5.value)), e5.important && (i3 += ` !important`), typeof o2[t3] > `u` ? o2[t3] = i3 : Array.isArray(o2[t3]) ? o2[t3].push(i3) : o2[t3] = [o2[t3], i3];
      }
    }), o2;
  }
  t2.exports = a2;
}), Pb = Mb(Nb()), Fb = Pb.default ?? Pb, Ib = {};
t(Ib, { default: () => Xb });
var Lb = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss-js/objectifier`:
      return t2(xb);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, Rb = Object.create, zb = Object.defineProperty, Bb = Object.getOwnPropertyDescriptor, Vb = Object.getOwnPropertyNames, Hb = Object.getPrototypeOf, Ub = Object.prototype.hasOwnProperty, Wb = ((e3) => typeof Lb < `u` ? Lb : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof Lb < `u` ? Lb : e4)[t2] }) : e3)(function(e3) {
  if (typeof Lb < `u`) return Lb.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), Gb = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), Kb = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of Vb(t2)) !Ub.call(e3, i2) && i2 !== n2 && zb(e3, i2, { get: () => t2[i2], enumerable: !(r2 = Bb(t2, i2)) || r2.enumerable });
  return e3;
}, qb = (e3, t2, n2) => (n2 = e3 == null ? {} : Rb(Hb(e3)), Kb(t2 || !e3 || !e3.__esModule ? zb(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), Jb = Gb((e3, t2) => {
  var n2 = Wb(`postcss-js/objectifier`);
  t2.exports = function(e4) {
    return console && console.warn && e4.warnings().forEach((e5) => {
      let t3 = e5.plugin || `PostCSS`;
      console.warn(t3 + `: ` + e5.text);
    }), n2(e4.root);
  };
}), Yb = qb(Jb()), Xb = Yb.default ?? Yb, Zb = {};
t(Zb, { default: () => dx });
var Qb = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss`:
      return t2(sb);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, $b = Object.create, ex = Object.defineProperty, tx = Object.getOwnPropertyDescriptor, nx = Object.getOwnPropertyNames, rx = Object.getPrototypeOf, ix = Object.prototype.hasOwnProperty, ax = ((e3) => typeof Qb < `u` ? Qb : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof Qb < `u` ? Qb : e4)[t2] }) : e3)(function(e3) {
  if (typeof Qb < `u`) return Qb.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), ox = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), sx = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of nx(t2)) !ix.call(e3, i2) && i2 !== n2 && ex(e3, i2, { get: () => t2[i2], enumerable: !(r2 = tx(t2, i2)) || r2.enumerable });
  return e3;
}, cx = (e3, t2, n2) => (n2 = e3 == null ? {} : $b(rx(e3)), sx(t2 || !e3 || !e3.__esModule ? ex(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), lx = ox((e3, t2) => {
  var n2 = ax(`postcss`), r2 = /\s*!important\s*$/i, i2 = { "box-flex": true, "box-flex-group": true, "column-count": true, flex: true, "flex-grow": true, "flex-positive": true, "flex-shrink": true, "flex-negative": true, "font-weight": true, "line-clamp": true, "line-height": true, opacity: true, order: true, orphans: true, "tab-size": true, widows: true, "z-index": true, zoom: true, "fill-opacity": true, "stroke-dashoffset": true, "stroke-opacity": true, "stroke-width": true };
  function a2(e4) {
    return e4.replace(/([A-Z])/g, `-$1`).replace(/^ms-/, `-ms-`).toLowerCase();
  }
  function o2(e4, t3, o3) {
    o3 === false || o3 === null || (t3.startsWith(`--`) || (t3 = a2(t3)), typeof o3 == `number` && (o3 === 0 || i2[t3] ? o3 = o3.toString() : o3 += `px`), t3 === `css-float` && (t3 = `float`), r2.test(o3) ? (o3 = o3.replace(r2, ``), e4.push(n2.decl({ prop: t3, value: o3, important: true }))) : e4.push(n2.decl({ prop: t3, value: o3 })));
  }
  function s2(e4, t3, r3) {
    let i3 = n2.atRule({ name: t3[1], params: t3[3] || `` });
    typeof r3 == `object` && (i3.nodes = [], c2(r3, i3)), e4.push(i3);
  }
  function c2(e4, t3) {
    let r3, i3, a3;
    for (r3 in e4) if (i3 = e4[r3], !(i3 === null || typeof i3 > `u`)) if (r3[0] === `@`) {
      let e5 = r3.match(/@(\S+)(\s+([\W\w]*)\s*)?/);
      if (Array.isArray(i3)) for (let n3 of i3) s2(t3, e5, n3);
      else s2(t3, e5, i3);
    } else if (Array.isArray(i3)) for (let e5 of i3) o2(t3, r3, e5);
    else typeof i3 == `object` ? (a3 = n2.rule({ selector: r3 }), c2(i3, a3), t3.push(a3)) : o2(t3, r3, i3);
  }
  t2.exports = function(e4) {
    let t3 = n2.root();
    return c2(e4, t3), t3;
  };
}), ux = cx(lx()), dx = ux.default ?? ux, fx = {};
t(fx, { default: () => Ex });
var px = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss`:
      return t2(sb);
    case `postcss-js/process-result`:
      return t2(Ib);
    case `postcss-js/parser`:
      return t2(Zb);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, mx = Object.create, hx = Object.defineProperty, gx = Object.getOwnPropertyDescriptor, _x = Object.getOwnPropertyNames, vx = Object.getPrototypeOf, yx = Object.prototype.hasOwnProperty, bx = ((e3) => typeof px < `u` ? px : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof px < `u` ? px : e4)[t2] }) : e3)(function(e3) {
  if (typeof px < `u`) return px.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), xx = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), Sx = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of _x(t2)) !yx.call(e3, i2) && i2 !== n2 && hx(e3, i2, { get: () => t2[i2], enumerable: !(r2 = gx(t2, i2)) || r2.enumerable });
  return e3;
}, Cx = (e3, t2, n2) => (n2 = e3 == null ? {} : mx(vx(e3)), Sx(t2 || !e3 || !e3.__esModule ? hx(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), wx = xx((e3, t2) => {
  var n2 = bx(`postcss`), r2 = bx(`postcss-js/process-result`), i2 = bx(`postcss-js/parser`);
  t2.exports = function(e4) {
    let t3 = n2(e4);
    return async (e5) => {
      let n3 = await t3.process(e5, { parser: i2, from: void 0 });
      return r2(n3);
    };
  };
}), Tx = Cx(wx()), Ex = Tx.default ?? Tx, Dx = {};
t(Dx, { default: () => Vx });
/*! Bundled license information:

cssesc/cssesc.js:
(*! https://mths.be/cssesc v3.0.0 by @mathias *)
*/
var Ox = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss`:
      return t2(sb);
    case `postcss-js/process-result`:
      return t2(Ib);
    case `postcss-js/parser`:
      return t2(Zb);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, kx = Object.create, Ax = Object.defineProperty, jx = Object.getOwnPropertyDescriptor, Mx = Object.getOwnPropertyNames, Nx = Object.getPrototypeOf, Px = Object.prototype.hasOwnProperty, Fx = ((e3) => typeof Ox < `u` ? Ox : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof Ox < `u` ? Ox : e4)[t2] }) : e3)(function(e3) {
  if (typeof Ox < `u`) return Ox.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), Ix = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), Lx = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of Mx(t2)) !Px.call(e3, i2) && i2 !== n2 && Ax(e3, i2, { get: () => t2[i2], enumerable: !(r2 = jx(t2, i2)) || r2.enumerable });
  return e3;
}, Rx = (e3, t2, n2) => (n2 = e3 == null ? {} : kx(Nx(e3)), Lx(t2 || !e3 || !e3.__esModule ? Ax(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), zx = Ix((e3, t2) => {
  var n2 = Fx(`postcss`), r2 = Fx(`postcss-js/process-result`), i2 = Fx(`postcss-js/parser`);
  t2.exports = function(e4) {
    let t3 = n2(e4);
    return (e5) => {
      let n3 = t3.process(e5, { parser: i2, from: void 0 });
      return r2(n3);
    };
  };
}), Bx = Rx(zx()), Vx = Bx.default ?? Bx, Hx = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss-js/objectifier`:
      return t2(xb);
    case `postcss-js/parser`:
      return t2(Zb);
    case `postcss-js/async`:
      return t2(fx);
    case `postcss-js/sync`:
      return t2(Dx);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, Ux = Object.create, Wx = Object.defineProperty, Gx = Object.getOwnPropertyDescriptor, Kx = Object.getOwnPropertyNames, qx = Object.getPrototypeOf, Jx = Object.prototype.hasOwnProperty, Yx = ((e3) => typeof Hx < `u` ? Hx : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof Hx < `u` ? Hx : e4)[t2] }) : e3)(function(e3) {
  if (typeof Hx < `u`) return Hx.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), Xx = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), Zx = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of Kx(t2)) !Jx.call(e3, i2) && i2 !== n2 && Wx(e3, i2, { get: () => t2[i2], enumerable: !(r2 = Gx(t2, i2)) || r2.enumerable });
  return e3;
}, Qx = (e3, t2, n2) => (n2 = e3 == null ? {} : Ux(qx(e3)), Zx(t2 || !e3 || !e3.__esModule ? Wx(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), $x = Xx((e3, t2) => {
  var n2 = Yx(`postcss-js/objectifier`), r2 = Yx(`postcss-js/parser`), i2 = Yx(`postcss-js/async`), a2 = Yx(`postcss-js/sync`);
  t2.exports = { objectify: n2, parse: r2, async: i2, sync: a2 };
}), eS = Qx($x(), 1), tS = eS.default, nS = eS.default.objectify, rS = eS.default.parse, iS = eS.default.async, aS = eS.default.sync, oS = Object.create, sS = Object.defineProperty, cS = Object.getOwnPropertyDescriptor, lS = Object.getOwnPropertyNames, uS = Object.getPrototypeOf, dS = Object.prototype.hasOwnProperty, fS = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), pS = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of lS(t2)) !dS.call(e3, i2) && i2 !== n2 && sS(e3, i2, { get: () => t2[i2], enumerable: !(r2 = cS(t2, i2)) || r2.enumerable });
  return e3;
}, mS = (e3, t2, n2) => (n2 = e3 == null ? {} : oS(uS(e3)), pS(t2 || !e3 || !e3.__esModule ? sS(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), hS = fS((e3, t2) => {
  "use strict";
  var n2 = {}, r2 = n2.hasOwnProperty, i2 = function(e4, t3) {
    if (!e4) return t3;
    var n3 = {};
    for (var i3 in t3) n3[i3] = r2.call(e4, i3) ? e4[i3] : t3[i3];
    return n3;
  }, a2 = /[ -,\.\/:-@\[-\^`\{-~]/, o2 = /[ -,\.\/:-@\[\]\^`\{-~]/, s2 = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g, c2 = function e4(t3, n3) {
    n3 = i2(n3, e4.options), n3.quotes != `single` && n3.quotes != `double` && (n3.quotes = `single`);
    for (var r3 = n3.quotes == `double` ? `"` : `'`, c3 = n3.isIdentifier, l2 = t3.charAt(0), u2 = ``, d2 = 0, f2 = t3.length; d2 < f2; ) {
      var p2 = t3.charAt(d2++), m2 = p2.charCodeAt(), h2 = void 0;
      if (m2 < 32 || m2 > 126) {
        if (m2 >= 55296 && m2 <= 56319 && d2 < f2) {
          var g2 = t3.charCodeAt(d2++);
          (g2 & 64512) == 56320 ? m2 = ((m2 & 1023) << 10) + (g2 & 1023) + 65536 : d2--;
        }
        h2 = `\\` + m2.toString(16).toUpperCase() + ` `;
      } else h2 = n3.escapeEverything ? a2.test(p2) ? `\\` + p2 : `\\` + m2.toString(16).toUpperCase() + ` ` : /[\t\n\f\r\x0B]/.test(p2) ? `\\` + m2.toString(16).toUpperCase() + ` ` : p2 == `\\` || !c3 && (p2 == `"` && r3 == p2 || p2 == `'` && r3 == p2) || c3 && o2.test(p2) ? `\\` + p2 : p2;
      u2 += h2;
    }
    return c3 && (/^-[-\d]/.test(u2) ? u2 = `\\-` + u2.slice(1) : /\d/.test(l2) && (u2 = `\\3` + l2 + ` ` + u2.slice(1))), u2 = u2.replace(s2, function(e5, t4, n4) {
      return t4 && t4.length % 2 ? e5 : (t4 || ``) + n4;
    }), !c3 && n3.wrap ? r3 + u2 + r3 : u2;
  };
  c2.options = { escapeEverything: false, isIdentifier: false, quotes: `single`, wrap: false }, c2.version = `3.0.0`, t2.exports = c2;
}), gS = mS(hS()), { options: _S, version: vS } = gS, yS = gS.default ?? gS, bS = {};
t(bS, { default: () => yS, options: () => _S, version: () => vS });
var xS = Object.create, SS = Object.defineProperty, CS = Object.getOwnPropertyDescriptor, wS = Object.getOwnPropertyNames, TS = Object.getPrototypeOf, ES = Object.prototype.hasOwnProperty, DS = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), OS = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of wS(t2)) !ES.call(e3, i2) && i2 !== n2 && SS(e3, i2, { get: () => t2[i2], enumerable: !(r2 = CS(t2, i2)) || r2.enumerable });
  return e3;
}, kS = (e3, t2, n2) => (n2 = e3 == null ? {} : xS(TS(e3)), OS(t2 || !e3 || !e3.__esModule ? SS(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), AS = DS((e3, t2) => {
  t2.exports = n2;
  function n2(e4, t3) {
    if (r2(`noDeprecation`)) return e4;
    var n3 = false;
    function i2() {
      if (!n3) {
        if (r2(`throwDeprecation`)) throw Error(t3);
        r2(`traceDeprecation`) ? console.trace(t3) : console.warn(t3), n3 = true;
      }
      return e4.apply(this, arguments);
    }
    return i2;
  }
  function r2(e4) {
    try {
      if (!globalThis.localStorage) return false;
    } catch {
      return false;
    }
    var t3 = globalThis.localStorage[e4];
    return t3 == null ? false : String(t3).toLowerCase() === `true`;
  }
}), jS = kS(AS()), MS = jS.default ?? jS, NS = {};
t(NS, { default: () => MS });
var PS = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `cssesc`:
      return t2(bS);
    case `util-deprecate`:
      return t2(NS);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, FS = Object.create, IS = Object.defineProperty, LS = Object.getOwnPropertyDescriptor, RS = Object.getOwnPropertyNames, zS = Object.getPrototypeOf, BS = Object.prototype.hasOwnProperty, VS = ((e3) => typeof PS < `u` ? PS : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof PS < `u` ? PS : e4)[t2] }) : e3)(function(e3) {
  if (typeof PS < `u`) return PS.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), X = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), HS = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of RS(t2)) !BS.call(e3, i2) && i2 !== n2 && IS(e3, i2, { get: () => t2[i2], enumerable: !(r2 = LS(t2, i2)) || r2.enumerable });
  return e3;
}, US = (e3, t2, n2) => (n2 = e3 == null ? {} : FS(zS(e3)), HS(t2 || !e3 || !e3.__esModule ? IS(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), WS = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = i2;
  function n2(e4) {
    for (var t3 = e4.toLowerCase(), n3 = ``, r3 = false, i3 = 0; i3 < 6 && t3[i3] !== void 0; i3++) {
      var a2 = t3.charCodeAt(i3), o2 = a2 >= 97 && a2 <= 102 || a2 >= 48 && a2 <= 57;
      if (r3 = a2 === 32, !o2) break;
      n3 += t3[i3];
    }
    if (n3.length !== 0) {
      var s2 = parseInt(n3, 16), c2 = s2 >= 55296 && s2 <= 57343;
      return c2 || s2 === 0 || s2 > 1114111 ? [`\uFFFD`, n3.length + (r3 ? 1 : 0)] : [String.fromCodePoint(s2), n3.length + (r3 ? 1 : 0)];
    }
  }
  var r2 = /\\/;
  function i2(e4) {
    var t3 = r2.test(e4);
    if (!t3) return e4;
    for (var i3 = ``, a2 = 0; a2 < e4.length; a2++) {
      if (e4[a2] === `\\`) {
        var o2 = n2(e4.slice(a2 + 1, a2 + 7));
        if (o2 !== void 0) {
          i3 += o2[0], a2 += o2[1];
          continue;
        }
        if (e4[a2 + 1] === `\\`) {
          i3 += `\\`, a2++;
          continue;
        }
        e4.length === a2 + 1 && (i3 += e4[a2]);
        continue;
      }
      i3 += e4[a2];
    }
    return i3;
  }
  t2.exports = e3.default;
}), GS = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = n2;
  function n2(e4) {
    for (var t3 = arguments.length, n3 = Array(t3 > 1 ? t3 - 1 : 0), r2 = 1; r2 < t3; r2++) n3[r2 - 1] = arguments[r2];
    for (; n3.length > 0; ) {
      var i2 = n3.shift();
      if (!e4[i2]) return;
      e4 = e4[i2];
    }
    return e4;
  }
  t2.exports = e3.default;
}), KS = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = n2;
  function n2(e4) {
    for (var t3 = arguments.length, n3 = Array(t3 > 1 ? t3 - 1 : 0), r2 = 1; r2 < t3; r2++) n3[r2 - 1] = arguments[r2];
    for (; n3.length > 0; ) {
      var i2 = n3.shift();
      e4[i2] || (e4[i2] = {}), e4 = e4[i2];
    }
  }
  t2.exports = e3.default;
}), qS = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = n2;
  function n2(e4) {
    for (var t3 = ``, n3 = e4.indexOf(`/*`), r2 = 0; n3 >= 0; ) {
      t3 += e4.slice(r2, n3);
      var i2 = e4.indexOf(`*/`, n3 + 2);
      if (i2 < 0) return t3;
      r2 = i2 + 2, n3 = e4.indexOf(`/*`, r2);
    }
    return t3 += e4.slice(r2), t3;
  }
  t2.exports = e3.default;
}), JS = X((e3) => {
  "use strict";
  e3.__esModule = true, e3.unesc = e3.stripComments = e3.getProp = e3.ensureObject = void 0;
  var t2 = a2(WS());
  e3.unesc = t2.default;
  var n2 = a2(GS());
  e3.getProp = n2.default;
  var r2 = a2(KS());
  e3.ensureObject = r2.default;
  var i2 = a2(qS());
  e3.stripComments = i2.default;
  function a2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
}), YS = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0;
  var n2 = JS();
  function r2(e4, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
    }
  }
  function i2(e4, t3, n3) {
    return t3 && r2(e4.prototype, t3), n3 && r2(e4, n3), Object.defineProperty(e4, `prototype`, { writable: false }), e4;
  }
  var a2 = function e4(t3, n3) {
    if (typeof t3 != `object` || !t3) return t3;
    var r3 = new t3.constructor();
    for (var i3 in t3) if (t3.hasOwnProperty(i3)) {
      var a3 = t3[i3], o3 = typeof a3;
      i3 === `parent` && o3 === `object` ? n3 && (r3[i3] = n3) : a3 instanceof Array ? r3[i3] = a3.map(function(t4) {
        return e4(t4, r3);
      }) : r3[i3] = e4(a3, r3);
    }
    return r3;
  }, o2 = function() {
    function e4(e5) {
      e5 === void 0 && (e5 = {}), Object.assign(this, e5), this.spaces = this.spaces || {}, this.spaces.before = this.spaces.before || ``, this.spaces.after = this.spaces.after || ``;
    }
    var t3 = e4.prototype;
    return t3.remove = function() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }, t3.replaceWith = function() {
      if (this.parent) {
        for (var e5 in arguments) this.parent.insertBefore(this, arguments[e5]);
        this.remove();
      }
      return this;
    }, t3.next = function() {
      return this.parent.at(this.parent.index(this) + 1);
    }, t3.prev = function() {
      return this.parent.at(this.parent.index(this) - 1);
    }, t3.clone = function(e5) {
      e5 === void 0 && (e5 = {});
      var t4 = a2(this);
      for (var n3 in e5) t4[n3] = e5[n3];
      return t4;
    }, t3.appendToPropertyAndEscape = function(e5, t4, n3) {
      this.raws || (this.raws = {});
      var r3 = this[e5], i3 = this.raws[e5];
      this[e5] = r3 + t4, i3 || n3 !== t4 ? this.raws[e5] = (i3 || r3) + n3 : delete this.raws[e5];
    }, t3.setPropertyAndEscape = function(e5, t4, n3) {
      this.raws || (this.raws = {}), this[e5] = t4, this.raws[e5] = n3;
    }, t3.setPropertyWithoutEscape = function(e5, t4) {
      this[e5] = t4, this.raws && delete this.raws[e5];
    }, t3.isAtPosition = function(e5, t4) {
      if (this.source && this.source.start && this.source.end) return !(this.source.start.line > e5 || this.source.end.line < e5 || this.source.start.line === e5 && this.source.start.column > t4 || this.source.end.line === e5 && this.source.end.column < t4);
    }, t3.stringifyProperty = function(e5) {
      return this.raws && this.raws[e5] || this[e5];
    }, t3.valueToString = function() {
      return String(this.stringifyProperty(`value`));
    }, t3.toString = function() {
      return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join(``);
    }, i2(e4, [{ key: `rawSpaceBefore`, get: function() {
      var e5 = this.raws && this.raws.spaces && this.raws.spaces.before;
      return e5 === void 0 && (e5 = this.spaces && this.spaces.before), e5 || ``;
    }, set: function(e5) {
      (0, n2.ensureObject)(this, `raws`, `spaces`), this.raws.spaces.before = e5;
    } }, { key: `rawSpaceAfter`, get: function() {
      var e5 = this.raws && this.raws.spaces && this.raws.spaces.after;
      return e5 === void 0 && (e5 = this.spaces.after), e5 || ``;
    }, set: function(e5) {
      (0, n2.ensureObject)(this, `raws`, `spaces`), this.raws.spaces.after = e5;
    } }]), e4;
  }();
  e3.default = o2, t2.exports = e3.default;
}), Z = X((e3) => {
  "use strict";
  e3.__esModule = true, e3.UNIVERSAL = e3.TAG = e3.STRING = e3.SELECTOR = e3.ROOT = e3.PSEUDO = e3.NESTING = e3.ID = e3.COMMENT = e3.COMBINATOR = e3.CLASS = e3.ATTRIBUTE = void 0;
  var t2 = `tag`;
  e3.TAG = t2;
  var n2 = `string`;
  e3.STRING = n2;
  var r2 = `selector`;
  e3.SELECTOR = r2;
  var i2 = `root`;
  e3.ROOT = i2;
  var a2 = `pseudo`;
  e3.PSEUDO = a2;
  var o2 = `nesting`;
  e3.NESTING = o2;
  var s2 = `id`;
  e3.ID = s2;
  var c2 = `comment`;
  e3.COMMENT = c2;
  var l2 = `combinator`;
  e3.COMBINATOR = l2;
  var u2 = `class`;
  e3.CLASS = u2;
  var d2 = `attribute`;
  e3.ATTRIBUTE = d2;
  var f2 = `universal`;
  e3.UNIVERSAL = f2;
}), XS = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0;
  var n2 = o2(YS()), r2 = a2(Z());
  function i2(e4) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (i2 = function(e5) {
      return e5 ? n3 : t3;
    })(e4);
  }
  function a2(e4, t3) {
    if (!t3 && e4 && e4.__esModule) return e4;
    if (e4 === null || typeof e4 != `object` && typeof e4 != `function`) return { default: e4 };
    var n3 = i2(t3);
    if (n3 && n3.has(e4)) return n3.get(e4);
    var r3 = {}, a3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o3 in e4) if (o3 !== `default` && Object.prototype.hasOwnProperty.call(e4, o3)) {
      var s3 = a3 ? Object.getOwnPropertyDescriptor(e4, o3) : null;
      s3 && (s3.get || s3.set) ? Object.defineProperty(r3, o3, s3) : r3[o3] = e4[o3];
    }
    return r3.default = e4, n3 && n3.set(e4, r3), r3;
  }
  function o2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function s2(e4, t3) {
    var n3 = typeof Symbol < `u` && e4[Symbol.iterator] || e4[`@@iterator`];
    if (n3) return (n3 = n3.call(e4)).next.bind(n3);
    if (Array.isArray(e4) || (n3 = c2(e4)) || t3 && e4 && typeof e4.length == `number`) {
      n3 && (e4 = n3);
      var r3 = 0;
      return function() {
        return r3 >= e4.length ? { done: true } : { done: false, value: e4[r3++] };
      };
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function c2(e4, t3) {
    if (e4) {
      if (typeof e4 == `string`) return l2(e4, t3);
      var n3 = Object.prototype.toString.call(e4).slice(8, -1);
      if (n3 === `Object` && e4.constructor && (n3 = e4.constructor.name), n3 === `Map` || n3 === `Set`) return Array.from(e4);
      if (n3 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3)) return l2(e4, t3);
    }
  }
  function l2(e4, t3) {
    (t3 == null || t3 > e4.length) && (t3 = e4.length);
    for (var n3 = 0, r3 = Array(t3); n3 < t3; n3++) r3[n3] = e4[n3];
    return r3;
  }
  function u2(e4, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
    }
  }
  function d2(e4, t3, n3) {
    return t3 && u2(e4.prototype, t3), n3 && u2(e4, n3), Object.defineProperty(e4, `prototype`, { writable: false }), e4;
  }
  function f2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, p2(e4, t3);
  }
  function p2(e4, t3) {
    return p2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, p2(e4, t3);
  }
  var m2 = function(e4) {
    f2(t3, e4);
    function t3(t4) {
      var n4;
      return n4 = e4.call(this, t4) || this, n4.nodes || (n4.nodes = []), n4;
    }
    var n3 = t3.prototype;
    return n3.append = function(e5) {
      return e5.parent = this, this.nodes.push(e5), this;
    }, n3.prepend = function(e5) {
      return e5.parent = this, this.nodes.unshift(e5), this;
    }, n3.at = function(e5) {
      return this.nodes[e5];
    }, n3.index = function(e5) {
      return typeof e5 == `number` ? e5 : this.nodes.indexOf(e5);
    }, n3.removeChild = function(e5) {
      e5 = this.index(e5), this.at(e5).parent = void 0, this.nodes.splice(e5, 1);
      var t4;
      for (var n4 in this.indexes) t4 = this.indexes[n4], t4 >= e5 && (this.indexes[n4] = t4 - 1);
      return this;
    }, n3.removeAll = function() {
      for (var e5 = s2(this.nodes), t4; !(t4 = e5()).done; ) {
        var n4 = t4.value;
        n4.parent = void 0;
      }
      return this.nodes = [], this;
    }, n3.empty = function() {
      return this.removeAll();
    }, n3.insertAfter = function(e5, t4) {
      t4.parent = this;
      var n4 = this.index(e5);
      this.nodes.splice(n4 + 1, 0, t4), t4.parent = this;
      var r3;
      for (var i3 in this.indexes) r3 = this.indexes[i3], n4 <= r3 && (this.indexes[i3] = r3 + 1);
      return this;
    }, n3.insertBefore = function(e5, t4) {
      t4.parent = this;
      var n4 = this.index(e5);
      this.nodes.splice(n4, 0, t4), t4.parent = this;
      var r3;
      for (var i3 in this.indexes) r3 = this.indexes[i3], r3 <= n4 && (this.indexes[i3] = r3 + 1);
      return this;
    }, n3._findChildAtPosition = function(e5, t4) {
      var n4 = void 0;
      return this.each(function(r3) {
        if (r3.atPosition) {
          var i3 = r3.atPosition(e5, t4);
          if (i3) return n4 = i3, false;
        } else if (r3.isAtPosition(e5, t4)) return n4 = r3, false;
      }), n4;
    }, n3.atPosition = function(e5, t4) {
      if (this.isAtPosition(e5, t4)) return this._findChildAtPosition(e5, t4) || this;
    }, n3._inferEndPosition = function() {
      this.last && this.last.source && this.last.source.end && (this.source = this.source || {}, this.source.end = this.source.end || {}, Object.assign(this.source.end, this.last.source.end));
    }, n3.each = function(e5) {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
      var t4 = this.lastEach;
      if (this.indexes[t4] = 0, this.length) {
        for (var n4, r3; this.indexes[t4] < this.length && (n4 = this.indexes[t4], r3 = e5(this.at(n4), n4), r3 !== false); ) this.indexes[t4] += 1;
        if (delete this.indexes[t4], r3 === false) return false;
      }
    }, n3.walk = function(e5) {
      return this.each(function(t4, n4) {
        var r3 = e5(t4, n4);
        if (r3 !== false && t4.length && (r3 = t4.walk(e5)), r3 === false) return false;
      });
    }, n3.walkAttributes = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.ATTRIBUTE) return e5.call(t4, n4);
      });
    }, n3.walkClasses = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.CLASS) return e5.call(t4, n4);
      });
    }, n3.walkCombinators = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.COMBINATOR) return e5.call(t4, n4);
      });
    }, n3.walkComments = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.COMMENT) return e5.call(t4, n4);
      });
    }, n3.walkIds = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.ID) return e5.call(t4, n4);
      });
    }, n3.walkNesting = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.NESTING) return e5.call(t4, n4);
      });
    }, n3.walkPseudos = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.PSEUDO) return e5.call(t4, n4);
      });
    }, n3.walkTags = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.TAG) return e5.call(t4, n4);
      });
    }, n3.walkUniversals = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.UNIVERSAL) return e5.call(t4, n4);
      });
    }, n3.split = function(e5) {
      var t4 = this, n4 = [];
      return this.reduce(function(r3, i3, a3) {
        var o3 = e5.call(t4, i3);
        return n4.push(i3), o3 ? (r3.push(n4), n4 = []) : a3 === t4.length - 1 && r3.push(n4), r3;
      }, []);
    }, n3.map = function(e5) {
      return this.nodes.map(e5);
    }, n3.reduce = function(e5, t4) {
      return this.nodes.reduce(e5, t4);
    }, n3.every = function(e5) {
      return this.nodes.every(e5);
    }, n3.some = function(e5) {
      return this.nodes.some(e5);
    }, n3.filter = function(e5) {
      return this.nodes.filter(e5);
    }, n3.sort = function(e5) {
      return this.nodes.sort(e5);
    }, n3.toString = function() {
      return this.map(String).join(``);
    }, d2(t3, [{ key: `first`, get: function() {
      return this.at(0);
    } }, { key: `last`, get: function() {
      return this.at(this.length - 1);
    } }, { key: `length`, get: function() {
      return this.nodes.length;
    } }]), t3;
  }(n2.default);
  e3.default = m2, t2.exports = e3.default;
}), ZS = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(XS()), r2 = Z();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
    }
  }
  function o2(e4, t3, n3) {
    return t3 && a2(e4.prototype, t3), n3 && a2(e4, n3), Object.defineProperty(e4, `prototype`, { writable: false }), e4;
  }
  function s2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, c2(e4, t3);
  }
  function c2(e4, t3) {
    return c2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, c2(e4, t3);
  }
  var l2 = function(e4) {
    s2(t3, e4);
    function t3(t4) {
      var n4;
      return n4 = e4.call(this, t4) || this, n4.type = r2.ROOT, n4;
    }
    var n3 = t3.prototype;
    return n3.toString = function() {
      var e5 = this.reduce(function(e6, t4) {
        return e6.push(String(t4)), e6;
      }, []).join(`,`);
      return this.trailingComma ? e5 + `,` : e5;
    }, n3.error = function(e5, t4) {
      return this._error ? this._error(e5, t4) : Error(e5);
    }, o2(t3, [{ key: `errorGenerator`, set: function(e5) {
      this._error = e5;
    } }]), t3;
  }(n2.default);
  e3.default = l2, t2.exports = e3.default;
}), QS = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(XS()), r2 = Z();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  var s2 = function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n3;
      return n3 = e4.call(this, t4) || this, n3.type = r2.SELECTOR, n3;
    }
    return t3;
  }(n2.default);
  e3.default = s2, t2.exports = e3.default;
}), $S = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0;
  var n2 = o2(VS(`cssesc`)), r2 = JS(), i2 = o2(YS()), a2 = Z();
  function o2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function s2(e4, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
    }
  }
  function c2(e4, t3, n3) {
    return t3 && s2(e4.prototype, t3), n3 && s2(e4, n3), Object.defineProperty(e4, `prototype`, { writable: false }), e4;
  }
  function l2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, u2(e4, t3);
  }
  function u2(e4, t3) {
    return u2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, u2(e4, t3);
  }
  var d2 = function(e4) {
    l2(t3, e4);
    function t3(t4) {
      var n3;
      return n3 = e4.call(this, t4) || this, n3.type = a2.CLASS, n3._constructed = true, n3;
    }
    var i3 = t3.prototype;
    return i3.valueToString = function() {
      return `.` + e4.prototype.valueToString.call(this);
    }, c2(t3, [{ key: `value`, get: function() {
      return this._value;
    }, set: function(e5) {
      if (this._constructed) {
        var t4 = (0, n2.default)(e5, { isIdentifier: true });
        t4 === e5 ? this.raws && delete this.raws.value : ((0, r2.ensureObject)(this, `raws`), this.raws.value = t4);
      }
      this._value = e5;
    } }]), t3;
  }(i2.default);
  e3.default = d2, t2.exports = e3.default;
}), eC = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(YS()), r2 = Z();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  var s2 = function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n3;
      return n3 = e4.call(this, t4) || this, n3.type = r2.COMMENT, n3;
    }
    return t3;
  }(n2.default);
  e3.default = s2, t2.exports = e3.default;
}), tC = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(YS()), r2 = Z();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  var s2 = function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n4;
      return n4 = e4.call(this, t4) || this, n4.type = r2.ID, n4;
    }
    var n3 = t3.prototype;
    return n3.valueToString = function() {
      return `#` + e4.prototype.valueToString.call(this);
    }, t3;
  }(n2.default);
  e3.default = s2, t2.exports = e3.default;
}), nC = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0;
  var n2 = a2(VS(`cssesc`)), r2 = JS(), i2 = a2(YS());
  function a2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function o2(e4, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
    }
  }
  function s2(e4, t3, n3) {
    return t3 && o2(e4.prototype, t3), n3 && o2(e4, n3), Object.defineProperty(e4, `prototype`, { writable: false }), e4;
  }
  function c2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, l2(e4, t3);
  }
  function l2(e4, t3) {
    return l2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, l2(e4, t3);
  }
  var u2 = function(e4) {
    c2(t3, e4);
    function t3() {
      return e4.apply(this, arguments) || this;
    }
    var i3 = t3.prototype;
    return i3.qualifiedName = function(e5) {
      return this.namespace ? this.namespaceString + `|` + e5 : e5;
    }, i3.valueToString = function() {
      return this.qualifiedName(e4.prototype.valueToString.call(this));
    }, s2(t3, [{ key: `namespace`, get: function() {
      return this._namespace;
    }, set: function(e5) {
      if (e5 === true || e5 === `*` || e5 === `&`) {
        this._namespace = e5, this.raws && delete this.raws.namespace;
        return;
      }
      var t4 = (0, n2.default)(e5, { isIdentifier: true });
      this._namespace = e5, t4 === e5 ? this.raws && delete this.raws.namespace : ((0, r2.ensureObject)(this, `raws`), this.raws.namespace = t4);
    } }, { key: `ns`, get: function() {
      return this._namespace;
    }, set: function(e5) {
      this.namespace = e5;
    } }, { key: `namespaceString`, get: function() {
      if (this.namespace) {
        var e5 = this.stringifyProperty(`namespace`);
        return e5 === true ? `` : e5;
      } else return ``;
    } }]), t3;
  }(i2.default);
  e3.default = u2, t2.exports = e3.default;
}), rC = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(nC()), r2 = Z();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  var s2 = function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n3;
      return n3 = e4.call(this, t4) || this, n3.type = r2.TAG, n3;
    }
    return t3;
  }(n2.default);
  e3.default = s2, t2.exports = e3.default;
}), iC = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(YS()), r2 = Z();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  var s2 = function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n3;
      return n3 = e4.call(this, t4) || this, n3.type = r2.STRING, n3;
    }
    return t3;
  }(n2.default);
  e3.default = s2, t2.exports = e3.default;
}), aC = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(XS()), r2 = Z();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  var s2 = function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n4;
      return n4 = e4.call(this, t4) || this, n4.type = r2.PSEUDO, n4;
    }
    var n3 = t3.prototype;
    return n3.toString = function() {
      var e5 = this.length ? `(` + this.map(String).join(`,`) + `)` : ``;
      return [this.rawSpaceBefore, this.stringifyProperty(`value`), e5, this.rawSpaceAfter].join(``);
    }, t3;
  }(n2.default);
  e3.default = s2, t2.exports = e3.default;
}), oC = X((e3) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0, e3.unescapeValue = g2;
  var t2 = o2(VS(`cssesc`)), n2 = o2(WS()), r2 = o2(nC()), i2 = Z(), a2;
  function o2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function s2(e4, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
    }
  }
  function c2(e4, t3, n3) {
    return t3 && s2(e4.prototype, t3), n3 && s2(e4, n3), Object.defineProperty(e4, `prototype`, { writable: false }), e4;
  }
  function l2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, u2(e4, t3);
  }
  function u2(e4, t3) {
    return u2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, u2(e4, t3);
  }
  var d2 = VS(`util-deprecate`), f2 = /^('|")([^]*)\1$/, p2 = d2(function() {
  }, `Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead.`), m2 = d2(function() {
  }, `Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead.`), h2 = d2(function() {
  }, `Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.`);
  function g2(e4) {
    var t3 = false, r3 = null, i3 = e4, a3 = i3.match(f2);
    return a3 && (r3 = a3[1], i3 = a3[2]), i3 = (0, n2.default)(i3), i3 !== e4 && (t3 = true), { deprecatedUsage: t3, unescaped: i3, quoteMark: r3 };
  }
  function _2(e4) {
    if (e4.quoteMark !== void 0 || e4.value === void 0) return e4;
    h2();
    var t3 = g2(e4.value), n3 = t3.quoteMark, r3 = t3.unescaped;
    return e4.raws || (e4.raws = {}), e4.raws.value === void 0 && (e4.raws.value = e4.value), e4.value = r3, e4.quoteMark = n3, e4;
  }
  var v2 = function(e4) {
    l2(n3, e4);
    function n3(t3) {
      var n4;
      return t3 === void 0 && (t3 = {}), n4 = e4.call(this, _2(t3)) || this, n4.type = i2.ATTRIBUTE, n4.raws = n4.raws || {}, Object.defineProperty(n4.raws, `unquoted`, { get: d2(function() {
        return n4.value;
      }, `attr.raws.unquoted is deprecated. Call attr.value instead.`), set: d2(function() {
        return n4.value;
      }, `Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.`) }), n4._constructed = true, n4;
    }
    var r3 = n3.prototype;
    return r3.getQuotedValue = function(e5) {
      e5 === void 0 && (e5 = {});
      var n4 = this._determineQuoteMark(e5), r4 = y2[n4], i3 = (0, t2.default)(this._value, r4);
      return i3;
    }, r3._determineQuoteMark = function(e5) {
      return e5.smart ? this.smartQuoteMark(e5) : this.preferredQuoteMark(e5);
    }, r3.setValue = function(e5, t3) {
      t3 === void 0 && (t3 = {}), this._value = e5, this._quoteMark = this._determineQuoteMark(t3), this._syncRawValue();
    }, r3.smartQuoteMark = function(e5) {
      var r4 = this.value, i3 = r4.replace(/[^']/g, ``).length, a3 = r4.replace(/[^"]/g, ``).length;
      if (i3 + a3 === 0) {
        var o3 = (0, t2.default)(r4, { isIdentifier: true });
        if (o3 === r4) return n3.NO_QUOTE;
        var s3 = this.preferredQuoteMark(e5);
        if (s3 === n3.NO_QUOTE) {
          var c3 = this.quoteMark || e5.quoteMark || n3.DOUBLE_QUOTE, l3 = y2[c3], u3 = (0, t2.default)(r4, l3);
          if (u3.length < o3.length) return c3;
        }
        return s3;
      } else return a3 === i3 ? this.preferredQuoteMark(e5) : a3 < i3 ? n3.DOUBLE_QUOTE : n3.SINGLE_QUOTE;
    }, r3.preferredQuoteMark = function(e5) {
      var t3 = e5.preferCurrentQuoteMark ? this.quoteMark : e5.quoteMark;
      return t3 === void 0 && (t3 = e5.preferCurrentQuoteMark ? e5.quoteMark : this.quoteMark), t3 === void 0 && (t3 = n3.DOUBLE_QUOTE), t3;
    }, r3._syncRawValue = function() {
      var e5 = (0, t2.default)(this._value, y2[this.quoteMark]);
      e5 === this._value ? this.raws && delete this.raws.value : this.raws.value = e5;
    }, r3._handleEscapes = function(e5, n4) {
      if (this._constructed) {
        var r4 = (0, t2.default)(n4, { isIdentifier: true });
        r4 === n4 ? delete this.raws[e5] : this.raws[e5] = r4;
      }
    }, r3._spacesFor = function(e5) {
      var t3 = { before: ``, after: `` }, n4 = this.spaces[e5] || {}, r4 = this.raws.spaces && this.raws.spaces[e5] || {};
      return Object.assign(t3, n4, r4);
    }, r3._stringFor = function(e5, t3, n4) {
      t3 === void 0 && (t3 = e5), n4 === void 0 && (n4 = b2);
      var r4 = this._spacesFor(t3);
      return n4(this.stringifyProperty(e5), r4);
    }, r3.offsetOf = function(e5) {
      var t3 = 1, n4 = this._spacesFor(`attribute`);
      if (t3 += n4.before.length, e5 === `namespace` || e5 === `ns`) return this.namespace ? t3 : -1;
      if (e5 === `attributeNS` || (t3 += this.namespaceString.length, this.namespace && (t3 += 1), e5 === `attribute`)) return t3;
      t3 += this.stringifyProperty(`attribute`).length, t3 += n4.after.length;
      var r4 = this._spacesFor(`operator`);
      t3 += r4.before.length;
      var i3 = this.stringifyProperty(`operator`);
      if (e5 === `operator`) return i3 ? t3 : -1;
      t3 += i3.length, t3 += r4.after.length;
      var a3 = this._spacesFor(`value`);
      t3 += a3.before.length;
      var o3 = this.stringifyProperty(`value`);
      if (e5 === `value`) return o3 ? t3 : -1;
      t3 += o3.length, t3 += a3.after.length;
      var s3 = this._spacesFor(`insensitive`);
      return t3 += s3.before.length, e5 === `insensitive` && this.insensitive ? t3 : -1;
    }, r3.toString = function() {
      var e5 = this, t3 = [this.rawSpaceBefore, `[`];
      return t3.push(this._stringFor(`qualifiedAttribute`, `attribute`)), this.operator && (this.value || this.value === ``) && (t3.push(this._stringFor(`operator`)), t3.push(this._stringFor(`value`)), t3.push(this._stringFor(`insensitiveFlag`, `insensitive`, function(t4, n4) {
        return t4.length > 0 && !e5.quoted && n4.before.length === 0 && !(e5.spaces.value && e5.spaces.value.after) && (n4.before = ` `), b2(t4, n4);
      }))), t3.push(`]`), t3.push(this.rawSpaceAfter), t3.join(``);
    }, c2(n3, [{ key: `quoted`, get: function() {
      var e5 = this.quoteMark;
      return e5 === `'` || e5 === `"`;
    }, set: function(e5) {
      m2();
    } }, { key: `quoteMark`, get: function() {
      return this._quoteMark;
    }, set: function(e5) {
      if (!this._constructed) {
        this._quoteMark = e5;
        return;
      }
      this._quoteMark !== e5 && (this._quoteMark = e5, this._syncRawValue());
    } }, { key: `qualifiedAttribute`, get: function() {
      return this.qualifiedName(this.raws.attribute || this.attribute);
    } }, { key: `insensitiveFlag`, get: function() {
      return this.insensitive ? `i` : ``;
    } }, { key: `value`, get: function() {
      return this._value;
    }, set: function(e5) {
      if (this._constructed) {
        var t3 = g2(e5), n4 = t3.deprecatedUsage, r4 = t3.unescaped, i3 = t3.quoteMark;
        if (n4 && p2(), r4 === this._value && i3 === this._quoteMark) return;
        this._value = r4, this._quoteMark = i3, this._syncRawValue();
      } else this._value = e5;
    } }, { key: `insensitive`, get: function() {
      return this._insensitive;
    }, set: function(e5) {
      e5 || (this._insensitive = false, this.raws && (this.raws.insensitiveFlag === `I` || this.raws.insensitiveFlag === `i`) && (this.raws.insensitiveFlag = void 0)), this._insensitive = e5;
    } }, { key: `attribute`, get: function() {
      return this._attribute;
    }, set: function(e5) {
      this._handleEscapes(`attribute`, e5), this._attribute = e5;
    } }]), n3;
  }(r2.default);
  e3.default = v2, v2.NO_QUOTE = null, v2.SINGLE_QUOTE = `'`, v2.DOUBLE_QUOTE = `"`;
  var y2 = (a2 = { "'": { quotes: `single`, wrap: true }, '"': { quotes: `double`, wrap: true } }, a2[null] = { isIdentifier: true }, a2);
  function b2(e4, t3) {
    return `` + t3.before + e4 + t3.after;
  }
}), sC = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(nC()), r2 = Z();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  var s2 = function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n3;
      return n3 = e4.call(this, t4) || this, n3.type = r2.UNIVERSAL, n3.value = `*`, n3;
    }
    return t3;
  }(n2.default);
  e3.default = s2, t2.exports = e3.default;
}), cC = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(YS()), r2 = Z();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  var s2 = function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n3;
      return n3 = e4.call(this, t4) || this, n3.type = r2.COMBINATOR, n3;
    }
    return t3;
  }(n2.default);
  e3.default = s2, t2.exports = e3.default;
}), lC = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(YS()), r2 = Z();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  var s2 = function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n3;
      return n3 = e4.call(this, t4) || this, n3.type = r2.NESTING, n3.value = `&`, n3;
    }
    return t3;
  }(n2.default);
  e3.default = s2, t2.exports = e3.default;
}), uC = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = n2;
  function n2(e4) {
    return e4.sort(function(e5, t3) {
      return e5 - t3;
    });
  }
  t2.exports = e3.default;
}), dC = X((e3) => {
  "use strict";
  e3.__esModule = true, e3.word = e3.tilde = e3.tab = e3.str = e3.space = e3.slash = e3.singleQuote = e3.semicolon = e3.plus = e3.pipe = e3.openSquare = e3.openParenthesis = e3.newline = e3.greaterThan = e3.feed = e3.equals = e3.doubleQuote = e3.dollar = e3.cr = e3.comment = e3.comma = e3.combinator = e3.colon = e3.closeSquare = e3.closeParenthesis = e3.caret = e3.bang = e3.backslash = e3.at = e3.asterisk = e3.ampersand = void 0;
  var t2 = 38;
  e3.ampersand = t2;
  var n2 = 42;
  e3.asterisk = n2;
  var r2 = 64;
  e3.at = r2;
  var i2 = 44;
  e3.comma = i2;
  var a2 = 58;
  e3.colon = a2;
  var o2 = 59;
  e3.semicolon = o2;
  var s2 = 40;
  e3.openParenthesis = s2;
  var c2 = 41;
  e3.closeParenthesis = c2;
  var l2 = 91;
  e3.openSquare = l2;
  var u2 = 93;
  e3.closeSquare = u2;
  var d2 = 36;
  e3.dollar = d2;
  var f2 = 126;
  e3.tilde = f2;
  var p2 = 94;
  e3.caret = p2;
  var m2 = 43;
  e3.plus = m2;
  var h2 = 61;
  e3.equals = h2;
  var g2 = 124;
  e3.pipe = g2;
  var _2 = 62;
  e3.greaterThan = _2;
  var v2 = 32;
  e3.space = v2;
  var y2 = 39;
  e3.singleQuote = y2;
  var b2 = 34;
  e3.doubleQuote = b2;
  var x2 = 47;
  e3.slash = x2;
  var S2 = 33;
  e3.bang = S2;
  var C2 = 92;
  e3.backslash = C2;
  var w2 = 13;
  e3.cr = w2;
  var T2 = 12;
  e3.feed = T2;
  var E2 = 10;
  e3.newline = E2;
  var ee2 = 9;
  e3.tab = ee2;
  var D2 = y2;
  e3.str = D2;
  var te2 = -1;
  e3.comment = te2;
  var O2 = -2;
  e3.word = O2;
  var k2 = -3;
  e3.combinator = k2;
}), fC = X((e3) => {
  "use strict";
  e3.__esModule = true, e3.FIELDS = void 0, e3.default = m2;
  var t2 = a2(dC()), n2, r2;
  function i2(e4) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (i2 = function(e5) {
      return e5 ? n3 : t3;
    })(e4);
  }
  function a2(e4, t3) {
    if (!t3 && e4 && e4.__esModule) return e4;
    if (e4 === null || typeof e4 != `object` && typeof e4 != `function`) return { default: e4 };
    var n3 = i2(t3);
    if (n3 && n3.has(e4)) return n3.get(e4);
    var r3 = {}, a3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o3 in e4) if (o3 !== `default` && Object.prototype.hasOwnProperty.call(e4, o3)) {
      var s3 = a3 ? Object.getOwnPropertyDescriptor(e4, o3) : null;
      s3 && (s3.get || s3.set) ? Object.defineProperty(r3, o3, s3) : r3[o3] = e4[o3];
    }
    return r3.default = e4, n3 && n3.set(e4, r3), r3;
  }
  var o2 = (n2 = {}, n2[t2.tab] = true, n2[t2.newline] = true, n2[t2.cr] = true, n2[t2.feed] = true, n2), s2 = (r2 = {}, r2[t2.space] = true, r2[t2.tab] = true, r2[t2.newline] = true, r2[t2.cr] = true, r2[t2.feed] = true, r2[t2.ampersand] = true, r2[t2.asterisk] = true, r2[t2.bang] = true, r2[t2.comma] = true, r2[t2.colon] = true, r2[t2.semicolon] = true, r2[t2.openParenthesis] = true, r2[t2.closeParenthesis] = true, r2[t2.openSquare] = true, r2[t2.closeSquare] = true, r2[t2.singleQuote] = true, r2[t2.doubleQuote] = true, r2[t2.plus] = true, r2[t2.pipe] = true, r2[t2.tilde] = true, r2[t2.greaterThan] = true, r2[t2.equals] = true, r2[t2.dollar] = true, r2[t2.caret] = true, r2[t2.slash] = true, r2), c2 = {}, l2 = `0123456789abcdefABCDEF`;
  for (u2 = 0; u2 < l2.length; u2++) c2[l2.charCodeAt(u2)] = true;
  var u2;
  function d2(e4, n3) {
    var r3 = n3, i3;
    do {
      if (i3 = e4.charCodeAt(r3), s2[i3]) return r3 - 1;
      i3 === t2.backslash ? r3 = f2(e4, r3) + 1 : r3++;
    } while (r3 < e4.length);
    return r3 - 1;
  }
  function f2(e4, n3) {
    var r3 = n3, i3 = e4.charCodeAt(r3 + 1);
    if (!o2[i3]) if (c2[i3]) {
      var a3 = 0;
      do
        r3++, a3++, i3 = e4.charCodeAt(r3 + 1);
      while (c2[i3] && a3 < 6);
      a3 < 6 && i3 === t2.space && r3++;
    } else r3++;
    return r3;
  }
  var p2 = { TYPE: 0, START_LINE: 1, START_COL: 2, END_LINE: 3, END_COL: 4, START_POS: 5, END_POS: 6 };
  e3.FIELDS = p2;
  function m2(e4) {
    var n3 = [], r3 = e4.css.valueOf(), i3 = r3, a3 = i3.length, o3 = -1, s3 = 1, c3 = 0, l3 = 0, u3, f3, p3, m3, h2, g2, _2, v2, y2, b2, x2, S2, C2;
    function w2(t3, n4) {
      if (e4.safe) r3 += n4, y2 = r3.length - 1;
      else throw e4.error(`Unclosed ` + t3, s3, c3 - o3, c3);
    }
    for (; c3 < a3; ) {
      switch (u3 = r3.charCodeAt(c3), u3 === t2.newline && (o3 = c3, s3 += 1), u3) {
        case t2.space:
        case t2.tab:
        case t2.newline:
        case t2.cr:
        case t2.feed:
          y2 = c3;
          do
            y2 += 1, u3 = r3.charCodeAt(y2), u3 === t2.newline && (o3 = y2, s3 += 1);
          while (u3 === t2.space || u3 === t2.newline || u3 === t2.tab || u3 === t2.cr || u3 === t2.feed);
          C2 = t2.space, m3 = s3, p3 = y2 - o3 - 1, l3 = y2;
          break;
        case t2.plus:
        case t2.greaterThan:
        case t2.tilde:
        case t2.pipe:
          y2 = c3;
          do
            y2 += 1, u3 = r3.charCodeAt(y2);
          while (u3 === t2.plus || u3 === t2.greaterThan || u3 === t2.tilde || u3 === t2.pipe);
          C2 = t2.combinator, m3 = s3, p3 = c3 - o3, l3 = y2;
          break;
        case t2.asterisk:
        case t2.ampersand:
        case t2.bang:
        case t2.comma:
        case t2.equals:
        case t2.dollar:
        case t2.caret:
        case t2.openSquare:
        case t2.closeSquare:
        case t2.colon:
        case t2.semicolon:
        case t2.openParenthesis:
        case t2.closeParenthesis:
          y2 = c3, C2 = u3, m3 = s3, p3 = c3 - o3, l3 = y2 + 1;
          break;
        case t2.singleQuote:
        case t2.doubleQuote:
          S2 = u3 === t2.singleQuote ? `'` : `"`, y2 = c3;
          do
            for (h2 = false, y2 = r3.indexOf(S2, y2 + 1), y2 === -1 && w2(`quote`, S2), g2 = y2; r3.charCodeAt(g2 - 1) === t2.backslash; ) --g2, h2 = !h2;
          while (h2);
          C2 = t2.str, m3 = s3, p3 = c3 - o3, l3 = y2 + 1;
          break;
        default:
          u3 === t2.slash && r3.charCodeAt(c3 + 1) === t2.asterisk ? (y2 = r3.indexOf(`*/`, c3 + 2) + 1, y2 === 0 && w2(`comment`, `*/`), f3 = r3.slice(c3, y2 + 1), v2 = f3.split(`
`), _2 = v2.length - 1, _2 > 0 ? (b2 = s3 + _2, x2 = y2 - v2[_2].length) : (b2 = s3, x2 = o3), C2 = t2.comment, s3 = b2, m3 = b2, p3 = y2 - x2) : u3 === t2.slash ? (y2 = c3, C2 = u3, m3 = s3, p3 = c3 - o3, l3 = y2 + 1) : (y2 = d2(r3, c3), C2 = t2.word, m3 = s3, p3 = y2 - o3), l3 = y2 + 1;
          break;
      }
      n3.push([C2, s3, c3 - o3, m3, p3, c3, l3]), x2 && (o3 = x2, x2 = null), c3 = l3;
    }
    return n3;
  }
}), pC = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0;
  var n2 = C2(ZS()), r2 = C2(QS()), i2 = C2($S()), a2 = C2(eC()), o2 = C2(tC()), s2 = C2(rC()), c2 = C2(iC()), l2 = C2(aC()), u2 = S2(oC()), d2 = C2(sC()), f2 = C2(cC()), p2 = C2(lC()), m2 = C2(uC()), h2 = S2(fC()), g2 = S2(dC()), _2 = S2(Z()), v2 = JS(), y2, b2;
  function x2(e4) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (x2 = function(e5) {
      return e5 ? n3 : t3;
    })(e4);
  }
  function S2(e4, t3) {
    if (!t3 && e4 && e4.__esModule) return e4;
    if (e4 === null || typeof e4 != `object` && typeof e4 != `function`) return { default: e4 };
    var n3 = x2(t3);
    if (n3 && n3.has(e4)) return n3.get(e4);
    var r3 = {}, i3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a3 in e4) if (a3 !== `default` && Object.prototype.hasOwnProperty.call(e4, a3)) {
      var o3 = i3 ? Object.getOwnPropertyDescriptor(e4, a3) : null;
      o3 && (o3.get || o3.set) ? Object.defineProperty(r3, a3, o3) : r3[a3] = e4[a3];
    }
    return r3.default = e4, n3 && n3.set(e4, r3), r3;
  }
  function C2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function w2(e4, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
    }
  }
  function T2(e4, t3, n3) {
    return t3 && w2(e4.prototype, t3), n3 && w2(e4, n3), Object.defineProperty(e4, `prototype`, { writable: false }), e4;
  }
  var E2 = (y2 = {}, y2[g2.space] = true, y2[g2.cr] = true, y2[g2.feed] = true, y2[g2.newline] = true, y2[g2.tab] = true, y2), ee2 = Object.assign({}, E2, (b2 = {}, b2[g2.comment] = true, b2));
  function D2(e4) {
    return { line: e4[h2.FIELDS.START_LINE], column: e4[h2.FIELDS.START_COL] };
  }
  function te2(e4) {
    return { line: e4[h2.FIELDS.END_LINE], column: e4[h2.FIELDS.END_COL] };
  }
  function O2(e4, t3, n3, r3) {
    return { start: { line: e4, column: t3 }, end: { line: n3, column: r3 } };
  }
  function k2(e4) {
    return O2(e4[h2.FIELDS.START_LINE], e4[h2.FIELDS.START_COL], e4[h2.FIELDS.END_LINE], e4[h2.FIELDS.END_COL]);
  }
  function ne2(e4, t3) {
    if (e4) return O2(e4[h2.FIELDS.START_LINE], e4[h2.FIELDS.START_COL], t3[h2.FIELDS.END_LINE], t3[h2.FIELDS.END_COL]);
  }
  function A2(e4, t3) {
    var n3 = e4[t3];
    if (typeof n3 == `string`) return n3.indexOf(`\\`) !== -1 && ((0, v2.ensureObject)(e4, `raws`), e4[t3] = (0, v2.unesc)(n3), e4.raws[t3] === void 0 && (e4.raws[t3] = n3)), e4;
  }
  function re2(e4, t3) {
    for (var n3 = -1, r3 = []; (n3 = e4.indexOf(t3, n3 + 1)) !== -1; ) r3.push(n3);
    return r3;
  }
  function ie2() {
    var e4 = Array.prototype.concat.apply([], arguments);
    return e4.filter(function(t3, n3) {
      return n3 === e4.indexOf(t3);
    });
  }
  var ae2 = function() {
    function e4(e5, t4) {
      t4 === void 0 && (t4 = {}), this.rule = e5, this.options = Object.assign({ lossy: false, safe: false }, t4), this.position = 0, this.css = typeof this.rule == `string` ? this.rule : this.rule.selector, this.tokens = (0, h2.default)({ css: this.css, error: this._errorGenerator(), safe: this.options.safe });
      var i3 = ne2(this.tokens[0], this.tokens[this.tokens.length - 1]);
      this.root = new n2.default({ source: i3 }), this.root.errorGenerator = this._errorGenerator();
      var a3 = new r2.default({ source: { start: { line: 1, column: 1 } }, sourceIndex: 0 });
      this.root.append(a3), this.current = a3, this.loop();
    }
    var t3 = e4.prototype;
    return t3._errorGenerator = function() {
      var e5 = this;
      return function(t4, n3) {
        return typeof e5.rule == `string` ? Error(t4) : e5.rule.error(t4, n3);
      };
    }, t3.attribute = function() {
      var e5 = [], t4 = this.currToken;
      for (this.position++; this.position < this.tokens.length && this.currToken[h2.FIELDS.TYPE] !== g2.closeSquare; ) e5.push(this.currToken), this.position++;
      if (this.currToken[h2.FIELDS.TYPE] !== g2.closeSquare) return this.expected(`closing square bracket`, this.currToken[h2.FIELDS.START_POS]);
      var n3 = e5.length, r3 = { source: O2(t4[1], t4[2], this.currToken[3], this.currToken[4]), sourceIndex: t4[h2.FIELDS.START_POS] };
      if (n3 === 1 && !~[g2.word].indexOf(e5[0][h2.FIELDS.TYPE])) return this.expected(`attribute`, e5[0][h2.FIELDS.START_POS]);
      for (var i3 = 0, a3 = ``, o3 = ``, s3 = null, c3 = false; i3 < n3; ) {
        var l3 = e5[i3], d3 = this.content(l3), f3 = e5[i3 + 1];
        switch (l3[h2.FIELDS.TYPE]) {
          case g2.space:
            if (c3 = true, this.options.lossy) break;
            if (s3) {
              (0, v2.ensureObject)(r3, `spaces`, s3);
              var p3 = r3.spaces[s3].after || ``;
              r3.spaces[s3].after = p3 + d3;
              var m3 = (0, v2.getProp)(r3, `raws`, `spaces`, s3, `after`) || null;
              m3 && (r3.raws.spaces[s3].after = m3 + d3);
            } else a3 += d3, o3 += d3;
            break;
          case g2.asterisk:
            if (f3[h2.FIELDS.TYPE] === g2.equals) r3.operator = d3, s3 = `operator`;
            else if ((!r3.namespace || s3 === `namespace` && !c3) && f3) {
              a3 && ((0, v2.ensureObject)(r3, `spaces`, `attribute`), r3.spaces.attribute.before = a3, a3 = ``), o3 && ((0, v2.ensureObject)(r3, `raws`, `spaces`, `attribute`), r3.raws.spaces.attribute.before = a3, o3 = ``), r3.namespace = (r3.namespace || ``) + d3;
              var _3 = (0, v2.getProp)(r3, `raws`, `namespace`) || null;
              _3 && (r3.raws.namespace += d3), s3 = `namespace`;
            }
            c3 = false;
            break;
          case g2.dollar:
            if (s3 === `value`) {
              var y3 = (0, v2.getProp)(r3, `raws`, `value`);
              r3.value += `$`, y3 && (r3.raws.value = y3 + `$`);
              break;
            }
          case g2.caret:
            f3[h2.FIELDS.TYPE] === g2.equals && (r3.operator = d3, s3 = `operator`), c3 = false;
            break;
          case g2.combinator:
            if (d3 === `~` && f3[h2.FIELDS.TYPE] === g2.equals && (r3.operator = d3, s3 = `operator`), d3 !== `|`) {
              c3 = false;
              break;
            }
            f3[h2.FIELDS.TYPE] === g2.equals ? (r3.operator = d3, s3 = `operator`) : !r3.namespace && !r3.attribute && (r3.namespace = true), c3 = false;
            break;
          case g2.word:
            if (f3 && this.content(f3) === `|` && e5[i3 + 2] && e5[i3 + 2][h2.FIELDS.TYPE] !== g2.equals && !r3.operator && !r3.namespace) r3.namespace = d3, s3 = `namespace`;
            else if (!r3.attribute || s3 === `attribute` && !c3) {
              a3 && ((0, v2.ensureObject)(r3, `spaces`, `attribute`), r3.spaces.attribute.before = a3, a3 = ``), o3 && ((0, v2.ensureObject)(r3, `raws`, `spaces`, `attribute`), r3.raws.spaces.attribute.before = o3, o3 = ``), r3.attribute = (r3.attribute || ``) + d3;
              var b3 = (0, v2.getProp)(r3, `raws`, `attribute`) || null;
              b3 && (r3.raws.attribute += d3), s3 = `attribute`;
            } else if (!r3.value && r3.value !== `` || s3 === `value` && !(c3 || r3.quoteMark)) {
              var x3 = (0, v2.unesc)(d3), S3 = (0, v2.getProp)(r3, `raws`, `value`) || ``, C3 = r3.value || ``;
              r3.value = C3 + x3, r3.quoteMark = null, (x3 !== d3 || S3) && ((0, v2.ensureObject)(r3, `raws`), r3.raws.value = (S3 || C3) + d3), s3 = `value`;
            } else {
              var w3 = d3 === `i` || d3 === `I`;
              (r3.value || r3.value === ``) && (r3.quoteMark || c3) ? (r3.insensitive = w3, (!w3 || d3 === `I`) && ((0, v2.ensureObject)(r3, `raws`), r3.raws.insensitiveFlag = d3), s3 = `insensitive`, a3 && ((0, v2.ensureObject)(r3, `spaces`, `insensitive`), r3.spaces.insensitive.before = a3, a3 = ``), o3 && ((0, v2.ensureObject)(r3, `raws`, `spaces`, `insensitive`), r3.raws.spaces.insensitive.before = o3, o3 = ``)) : (r3.value || r3.value === ``) && (s3 = `value`, r3.value += d3, r3.raws.value && (r3.raws.value += d3));
            }
            c3 = false;
            break;
          case g2.str:
            if (!r3.attribute || !r3.operator) return this.error(`Expected an attribute followed by an operator preceding the string.`, { index: l3[h2.FIELDS.START_POS] });
            var T3 = (0, u2.unescapeValue)(d3), E3 = T3.unescaped, ee3 = T3.quoteMark;
            r3.value = E3, r3.quoteMark = ee3, s3 = `value`, (0, v2.ensureObject)(r3, `raws`), r3.raws.value = d3, c3 = false;
            break;
          case g2.equals:
            if (!r3.attribute) return this.expected(`attribute`, l3[h2.FIELDS.START_POS], d3);
            if (r3.value) return this.error(`Unexpected "=" found; an operator was already defined.`, { index: l3[h2.FIELDS.START_POS] });
            r3.operator = r3.operator ? r3.operator + d3 : d3, s3 = `operator`, c3 = false;
            break;
          case g2.comment:
            if (s3) if (c3 || f3 && f3[h2.FIELDS.TYPE] === g2.space || s3 === `insensitive`) {
              var D3 = (0, v2.getProp)(r3, `spaces`, s3, `after`) || ``, te3 = (0, v2.getProp)(r3, `raws`, `spaces`, s3, `after`) || D3;
              (0, v2.ensureObject)(r3, `raws`, `spaces`, s3), r3.raws.spaces[s3].after = te3 + d3;
            } else {
              var k3 = r3[s3] || ``, ne3 = (0, v2.getProp)(r3, `raws`, s3) || k3;
              (0, v2.ensureObject)(r3, `raws`), r3.raws[s3] = ne3 + d3;
            }
            else o3 += d3;
            break;
          default:
            return this.error(`Unexpected "` + d3 + `" found.`, { index: l3[h2.FIELDS.START_POS] });
        }
        i3++;
      }
      A2(r3, `attribute`), A2(r3, `namespace`), this.newNode(new u2.default(r3)), this.position++;
    }, t3.parseWhitespaceEquivalentTokens = function(e5) {
      e5 < 0 && (e5 = this.tokens.length);
      var t4 = this.position, n3 = [], r3 = ``, i3 = void 0;
      do
        if (E2[this.currToken[h2.FIELDS.TYPE]]) this.options.lossy || (r3 += this.content());
        else if (this.currToken[h2.FIELDS.TYPE] === g2.comment) {
          var o3 = {};
          r3 && (o3.before = r3, r3 = ``), i3 = new a2.default({ value: this.content(), source: k2(this.currToken), sourceIndex: this.currToken[h2.FIELDS.START_POS], spaces: o3 }), n3.push(i3);
        }
      while (++this.position < e5);
      if (r3) {
        if (i3) i3.spaces.after = r3;
        else if (!this.options.lossy) {
          var s3 = this.tokens[t4], l3 = this.tokens[this.position - 1];
          n3.push(new c2.default({ value: ``, source: O2(s3[h2.FIELDS.START_LINE], s3[h2.FIELDS.START_COL], l3[h2.FIELDS.END_LINE], l3[h2.FIELDS.END_COL]), sourceIndex: s3[h2.FIELDS.START_POS], spaces: { before: r3, after: `` } }));
        }
      }
      return n3;
    }, t3.convertWhitespaceNodesToSpace = function(e5, t4) {
      var n3 = this;
      t4 === void 0 && (t4 = false);
      var r3 = ``, i3 = ``;
      e5.forEach(function(e6) {
        var a4 = n3.lossySpace(e6.spaces.before, t4), o3 = n3.lossySpace(e6.rawSpaceBefore, t4);
        r3 += a4 + n3.lossySpace(e6.spaces.after, t4 && a4.length === 0), i3 += a4 + e6.value + n3.lossySpace(e6.rawSpaceAfter, t4 && o3.length === 0);
      }), i3 === r3 && (i3 = void 0);
      var a3 = { space: r3, rawSpace: i3 };
      return a3;
    }, t3.isNamedCombinator = function(e5) {
      return e5 === void 0 && (e5 = this.position), this.tokens[e5 + 0] && this.tokens[e5 + 0][h2.FIELDS.TYPE] === g2.slash && this.tokens[e5 + 1] && this.tokens[e5 + 1][h2.FIELDS.TYPE] === g2.word && this.tokens[e5 + 2] && this.tokens[e5 + 2][h2.FIELDS.TYPE] === g2.slash;
    }, t3.namedCombinator = function() {
      if (this.isNamedCombinator()) {
        var e5 = this.content(this.tokens[this.position + 1]), t4 = (0, v2.unesc)(e5).toLowerCase(), n3 = {};
        t4 !== e5 && (n3.value = `/` + e5 + `/`);
        var r3 = new f2.default({ value: `/` + t4 + `/`, source: O2(this.currToken[h2.FIELDS.START_LINE], this.currToken[h2.FIELDS.START_COL], this.tokens[this.position + 2][h2.FIELDS.END_LINE], this.tokens[this.position + 2][h2.FIELDS.END_COL]), sourceIndex: this.currToken[h2.FIELDS.START_POS], raws: n3 });
        return this.position += 3, r3;
      } else this.unexpected();
    }, t3.combinator = function() {
      var e5 = this;
      if (this.content() === `|`) return this.namespace();
      var t4 = this.locateNextMeaningfulToken(this.position);
      if (t4 < 0 || this.tokens[t4][h2.FIELDS.TYPE] === g2.comma || this.tokens[t4][h2.FIELDS.TYPE] === g2.closeParenthesis) {
        var n3 = this.parseWhitespaceEquivalentTokens(t4);
        if (n3.length > 0) {
          var r3 = this.current.last;
          if (r3) {
            var i3 = this.convertWhitespaceNodesToSpace(n3), a3 = i3.space, o3 = i3.rawSpace;
            o3 !== void 0 && (r3.rawSpaceAfter += o3), r3.spaces.after += a3;
          } else n3.forEach(function(t5) {
            return e5.newNode(t5);
          });
        }
        return;
      }
      var s3 = this.currToken, c3 = void 0;
      t4 > this.position && (c3 = this.parseWhitespaceEquivalentTokens(t4));
      var l3;
      if (this.isNamedCombinator() ? l3 = this.namedCombinator() : this.currToken[h2.FIELDS.TYPE] === g2.combinator ? (l3 = new f2.default({ value: this.content(), source: k2(this.currToken), sourceIndex: this.currToken[h2.FIELDS.START_POS] }), this.position++) : E2[this.currToken[h2.FIELDS.TYPE]] || c3 || this.unexpected(), l3) {
        if (c3) {
          var u3 = this.convertWhitespaceNodesToSpace(c3), d3 = u3.space, p3 = u3.rawSpace;
          l3.spaces.before = d3, l3.rawSpaceBefore = p3;
        }
      } else {
        var m3 = this.convertWhitespaceNodesToSpace(c3, true), _3 = m3.space, v3 = m3.rawSpace;
        v3 || (v3 = _3);
        var y3 = {}, b3 = { spaces: {} };
        _3.endsWith(` `) && v3.endsWith(` `) ? (y3.before = _3.slice(0, _3.length - 1), b3.spaces.before = v3.slice(0, v3.length - 1)) : _3.startsWith(` `) && v3.startsWith(` `) ? (y3.after = _3.slice(1), b3.spaces.after = v3.slice(1)) : b3.value = v3, l3 = new f2.default({ value: ` `, source: ne2(s3, this.tokens[this.position - 1]), sourceIndex: s3[h2.FIELDS.START_POS], spaces: y3, raws: b3 });
      }
      return this.currToken && this.currToken[h2.FIELDS.TYPE] === g2.space && (l3.spaces.after = this.optionalSpace(this.content()), this.position++), this.newNode(l3);
    }, t3.comma = function() {
      if (this.position === this.tokens.length - 1) {
        this.root.trailingComma = true, this.position++;
        return;
      }
      this.current._inferEndPosition();
      var e5 = new r2.default({ source: { start: D2(this.tokens[this.position + 1]) }, sourceIndex: this.tokens[this.position + 1][h2.FIELDS.START_POS] });
      this.current.parent.append(e5), this.current = e5, this.position++;
    }, t3.comment = function() {
      var e5 = this.currToken;
      this.newNode(new a2.default({ value: this.content(), source: k2(e5), sourceIndex: e5[h2.FIELDS.START_POS] })), this.position++;
    }, t3.error = function(e5, t4) {
      throw this.root.error(e5, t4);
    }, t3.missingBackslash = function() {
      return this.error(`Expected a backslash preceding the semicolon.`, { index: this.currToken[h2.FIELDS.START_POS] });
    }, t3.missingParenthesis = function() {
      return this.expected(`opening parenthesis`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.missingSquareBracket = function() {
      return this.expected(`opening square bracket`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.unexpected = function() {
      return this.error(`Unexpected '` + this.content() + `'. Escaping special characters with \\ may help.`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.unexpectedPipe = function() {
      return this.error(`Unexpected '|'.`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.namespace = function() {
      var e5 = this.prevToken && this.content(this.prevToken) || true;
      if (this.nextToken[h2.FIELDS.TYPE] === g2.word) return this.position++, this.word(e5);
      if (this.nextToken[h2.FIELDS.TYPE] === g2.asterisk) return this.position++, this.universal(e5);
      this.unexpectedPipe();
    }, t3.nesting = function() {
      if (this.nextToken) {
        var e5 = this.content(this.nextToken);
        if (e5 === `|`) {
          this.position++;
          return;
        }
      }
      var t4 = this.currToken;
      this.newNode(new p2.default({ value: this.content(), source: k2(t4), sourceIndex: t4[h2.FIELDS.START_POS] })), this.position++;
    }, t3.parentheses = function() {
      var e5 = this.current.last, t4 = 1;
      if (this.position++, e5 && e5.type === _2.PSEUDO) {
        var n3 = new r2.default({ source: { start: D2(this.tokens[this.position]) }, sourceIndex: this.tokens[this.position][h2.FIELDS.START_POS] }), i3 = this.current;
        for (e5.append(n3), this.current = n3; this.position < this.tokens.length && t4; ) this.currToken[h2.FIELDS.TYPE] === g2.openParenthesis && t4++, this.currToken[h2.FIELDS.TYPE] === g2.closeParenthesis && t4--, t4 ? this.parse() : (this.current.source.end = te2(this.currToken), this.current.parent.source.end = te2(this.currToken), this.position++);
        this.current = i3;
      } else {
        for (var a3 = this.currToken, o3 = `(`, s3; this.position < this.tokens.length && t4; ) this.currToken[h2.FIELDS.TYPE] === g2.openParenthesis && t4++, this.currToken[h2.FIELDS.TYPE] === g2.closeParenthesis && t4--, s3 = this.currToken, o3 += this.parseParenthesisToken(this.currToken), this.position++;
        e5 ? e5.appendToPropertyAndEscape(`value`, o3, o3) : this.newNode(new c2.default({ value: o3, source: O2(a3[h2.FIELDS.START_LINE], a3[h2.FIELDS.START_COL], s3[h2.FIELDS.END_LINE], s3[h2.FIELDS.END_COL]), sourceIndex: a3[h2.FIELDS.START_POS] }));
      }
      if (t4) return this.expected(`closing parenthesis`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.pseudo = function() {
      for (var e5 = this, t4 = ``, n3 = this.currToken; this.currToken && this.currToken[h2.FIELDS.TYPE] === g2.colon; ) t4 += this.content(), this.position++;
      if (!this.currToken) return this.expected([`pseudo-class`, `pseudo-element`], this.position - 1);
      if (this.currToken[h2.FIELDS.TYPE] === g2.word) this.splitWord(false, function(r3, i3) {
        t4 += r3, e5.newNode(new l2.default({ value: t4, source: ne2(n3, e5.currToken), sourceIndex: n3[h2.FIELDS.START_POS] })), i3 > 1 && e5.nextToken && e5.nextToken[h2.FIELDS.TYPE] === g2.openParenthesis && e5.error(`Misplaced parenthesis.`, { index: e5.nextToken[h2.FIELDS.START_POS] });
      });
      else return this.expected([`pseudo-class`, `pseudo-element`], this.currToken[h2.FIELDS.START_POS]);
    }, t3.space = function() {
      var e5 = this.content();
      this.position === 0 || this.prevToken[h2.FIELDS.TYPE] === g2.comma || this.prevToken[h2.FIELDS.TYPE] === g2.openParenthesis || this.current.nodes.every(function(e6) {
        return e6.type === `comment`;
      }) ? (this.spaces = this.optionalSpace(e5), this.position++) : this.position === this.tokens.length - 1 || this.nextToken[h2.FIELDS.TYPE] === g2.comma || this.nextToken[h2.FIELDS.TYPE] === g2.closeParenthesis ? (this.current.last.spaces.after = this.optionalSpace(e5), this.position++) : this.combinator();
    }, t3.string = function() {
      var e5 = this.currToken;
      this.newNode(new c2.default({ value: this.content(), source: k2(e5), sourceIndex: e5[h2.FIELDS.START_POS] })), this.position++;
    }, t3.universal = function(e5) {
      var t4 = this.nextToken;
      if (t4 && this.content(t4) === `|`) return this.position++, this.namespace();
      var n3 = this.currToken;
      this.newNode(new d2.default({ value: this.content(), source: k2(n3), sourceIndex: n3[h2.FIELDS.START_POS] }), e5), this.position++;
    }, t3.splitWord = function(e5, t4) {
      for (var n3 = this, r3 = this.nextToken, a3 = this.content(); r3 && ~[g2.dollar, g2.caret, g2.equals, g2.word].indexOf(r3[h2.FIELDS.TYPE]); ) {
        this.position++;
        var c3 = this.content();
        if (a3 += c3, c3.lastIndexOf(`\\`) === c3.length - 1) {
          var l3 = this.nextToken;
          l3 && l3[h2.FIELDS.TYPE] === g2.space && (a3 += this.requiredSpace(this.content(l3)), this.position++);
        }
        r3 = this.nextToken;
      }
      var u3 = re2(a3, `.`).filter(function(e6) {
        var t5 = a3[e6 - 1] === `\\`, n4 = /^\d+\.\d+%$/.test(a3);
        return !t5 && !n4;
      }), d3 = re2(a3, `#`).filter(function(e6) {
        return a3[e6 - 1] !== `\\`;
      }), f3 = re2(a3, `#{`);
      f3.length && (d3 = d3.filter(function(e6) {
        return !~f3.indexOf(e6);
      }));
      var p3 = (0, m2.default)(ie2([0].concat(u3, d3)));
      p3.forEach(function(r4, c4) {
        var l4 = p3[c4 + 1] || a3.length, f4 = a3.slice(r4, l4);
        if (c4 === 0 && t4) return t4.call(n3, f4, p3.length);
        var m3, g3 = n3.currToken, _3 = g3[h2.FIELDS.START_POS] + p3[c4], v3 = O2(g3[1], g3[2] + r4, g3[3], g3[2] + (l4 - 1));
        if (~u3.indexOf(r4)) {
          var y3 = { value: f4.slice(1), source: v3, sourceIndex: _3 };
          m3 = new i2.default(A2(y3, `value`));
        } else if (~d3.indexOf(r4)) {
          var b3 = { value: f4.slice(1), source: v3, sourceIndex: _3 };
          m3 = new o2.default(A2(b3, `value`));
        } else {
          var x3 = { value: f4, source: v3, sourceIndex: _3 };
          A2(x3, `value`), m3 = new s2.default(x3);
        }
        n3.newNode(m3, e5), e5 = null;
      }), this.position++;
    }, t3.word = function(e5) {
      var t4 = this.nextToken;
      return t4 && this.content(t4) === `|` ? (this.position++, this.namespace()) : this.splitWord(e5);
    }, t3.loop = function() {
      for (; this.position < this.tokens.length; ) this.parse(true);
      return this.current._inferEndPosition(), this.root;
    }, t3.parse = function(e5) {
      switch (this.currToken[h2.FIELDS.TYPE]) {
        case g2.space:
          this.space();
          break;
        case g2.comment:
          this.comment();
          break;
        case g2.openParenthesis:
          this.parentheses();
          break;
        case g2.closeParenthesis:
          e5 && this.missingParenthesis();
          break;
        case g2.openSquare:
          this.attribute();
          break;
        case g2.dollar:
        case g2.caret:
        case g2.equals:
        case g2.word:
          this.word();
          break;
        case g2.colon:
          this.pseudo();
          break;
        case g2.comma:
          this.comma();
          break;
        case g2.asterisk:
          this.universal();
          break;
        case g2.ampersand:
          this.nesting();
          break;
        case g2.slash:
        case g2.combinator:
          this.combinator();
          break;
        case g2.str:
          this.string();
          break;
        case g2.closeSquare:
          this.missingSquareBracket();
        case g2.semicolon:
          this.missingBackslash();
        default:
          this.unexpected();
      }
    }, t3.expected = function(e5, t4, n3) {
      if (Array.isArray(e5)) {
        var r3 = e5.pop();
        e5 = e5.join(`, `) + ` or ` + r3;
      }
      var i3 = /^[aeiou]/.test(e5[0]) ? `an` : `a`;
      return n3 ? this.error(`Expected ` + i3 + ` ` + e5 + `, found "` + n3 + `" instead.`, { index: t4 }) : this.error(`Expected ` + i3 + ` ` + e5 + `.`, { index: t4 });
    }, t3.requiredSpace = function(e5) {
      return this.options.lossy ? ` ` : e5;
    }, t3.optionalSpace = function(e5) {
      return this.options.lossy ? `` : e5;
    }, t3.lossySpace = function(e5, t4) {
      return this.options.lossy ? t4 ? ` ` : `` : e5;
    }, t3.parseParenthesisToken = function(e5) {
      var t4 = this.content(e5);
      return e5[h2.FIELDS.TYPE] === g2.space ? this.requiredSpace(t4) : t4;
    }, t3.newNode = function(e5, t4) {
      return t4 && (/^ +$/.test(t4) && (this.options.lossy || (this.spaces = (this.spaces || ``) + t4), t4 = true), e5.namespace = t4, A2(e5, `namespace`)), this.spaces && (e5.spaces.before = this.spaces, this.spaces = ``), this.current.append(e5);
    }, t3.content = function(e5) {
      return e5 === void 0 && (e5 = this.currToken), this.css.slice(e5[h2.FIELDS.START_POS], e5[h2.FIELDS.END_POS]);
    }, t3.locateNextMeaningfulToken = function(e5) {
      e5 === void 0 && (e5 = this.position + 1);
      for (var t4 = e5; t4 < this.tokens.length; ) if (ee2[this.tokens[t4][h2.FIELDS.TYPE]]) {
        t4++;
        continue;
      } else return t4;
      return -1;
    }, T2(e4, [{ key: `currToken`, get: function() {
      return this.tokens[this.position];
    } }, { key: `nextToken`, get: function() {
      return this.tokens[this.position + 1];
    } }, { key: `prevToken`, get: function() {
      return this.tokens[this.position - 1];
    } }]), e4;
  }();
  e3.default = ae2, t2.exports = e3.default;
}), mC = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0;
  var n2 = r2(pC());
  function r2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  var i2 = function() {
    function e4(e5, t4) {
      this.func = e5 || function() {
      }, this.funcRes = null, this.options = t4;
    }
    var t3 = e4.prototype;
    return t3._shouldUpdateSelector = function(e5, t4) {
      t4 === void 0 && (t4 = {});
      var n3 = Object.assign({}, this.options, t4);
      return n3.updateSelector === false ? false : typeof e5 != `string`;
    }, t3._isLossy = function(e5) {
      e5 === void 0 && (e5 = {});
      var t4 = Object.assign({}, this.options, e5);
      return t4.lossless === false;
    }, t3._root = function(e5, t4) {
      t4 === void 0 && (t4 = {});
      var r3 = new n2.default(e5, this._parseOptions(t4));
      return r3.root;
    }, t3._parseOptions = function(e5) {
      return { lossy: this._isLossy(e5) };
    }, t3._run = function(e5, t4) {
      var n3 = this;
      return t4 === void 0 && (t4 = {}), new Promise(function(r3, i3) {
        try {
          var a2 = n3._root(e5, t4);
          Promise.resolve(n3.func(a2)).then(function(r4) {
            var i4 = void 0;
            return n3._shouldUpdateSelector(e5, t4) && (i4 = a2.toString(), e5.selector = i4), { transform: r4, root: a2, string: i4 };
          }).then(r3, i3);
        } catch (e6) {
          i3(e6);
          return;
        }
      });
    }, t3._runSync = function(e5, t4) {
      t4 === void 0 && (t4 = {});
      var n3 = this._root(e5, t4), r3 = this.func(n3);
      if (r3 && typeof r3.then == `function`) throw Error(`Selector processor returned a promise to a synchronous call.`);
      var i3 = void 0;
      return t4.updateSelector && typeof e5 != `string` && (i3 = n3.toString(), e5.selector = i3), { transform: r3, root: n3, string: i3 };
    }, t3.ast = function(e5, t4) {
      return this._run(e5, t4).then(function(e6) {
        return e6.root;
      });
    }, t3.astSync = function(e5, t4) {
      return this._runSync(e5, t4).root;
    }, t3.transform = function(e5, t4) {
      return this._run(e5, t4).then(function(e6) {
        return e6.transform;
      });
    }, t3.transformSync = function(e5, t4) {
      return this._runSync(e5, t4).transform;
    }, t3.process = function(e5, t4) {
      return this._run(e5, t4).then(function(e6) {
        return e6.string || e6.root.toString();
      });
    }, t3.processSync = function(e5, t4) {
      var n3 = this._runSync(e5, t4);
      return n3.string || n3.root.toString();
    }, e4;
  }();
  e3.default = i2, t2.exports = e3.default;
}), hC = X((e3) => {
  "use strict";
  e3.__esModule = true, e3.universal = e3.tag = e3.string = e3.selector = e3.root = e3.pseudo = e3.nesting = e3.id = e3.comment = e3.combinator = e3.className = e3.attribute = void 0;
  var t2 = p2(oC()), n2 = p2($S()), r2 = p2(cC()), i2 = p2(eC()), a2 = p2(tC()), o2 = p2(lC()), s2 = p2(aC()), c2 = p2(ZS()), l2 = p2(QS()), u2 = p2(iC()), d2 = p2(rC()), f2 = p2(sC());
  function p2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  var m2 = function(e4) {
    return new t2.default(e4);
  };
  e3.attribute = m2;
  var h2 = function(e4) {
    return new n2.default(e4);
  };
  e3.className = h2;
  var g2 = function(e4) {
    return new r2.default(e4);
  };
  e3.combinator = g2;
  var _2 = function(e4) {
    return new i2.default(e4);
  };
  e3.comment = _2;
  var v2 = function(e4) {
    return new a2.default(e4);
  };
  e3.id = v2;
  var y2 = function(e4) {
    return new o2.default(e4);
  };
  e3.nesting = y2;
  var b2 = function(e4) {
    return new s2.default(e4);
  };
  e3.pseudo = b2;
  var x2 = function(e4) {
    return new c2.default(e4);
  };
  e3.root = x2;
  var S2 = function(e4) {
    return new l2.default(e4);
  };
  e3.selector = S2;
  var C2 = function(e4) {
    return new u2.default(e4);
  };
  e3.string = C2;
  var w2 = function(e4) {
    return new d2.default(e4);
  };
  e3.tag = w2;
  var T2 = function(e4) {
    return new f2.default(e4);
  };
  e3.universal = T2;
}), gC = X((e3) => {
  "use strict";
  e3.__esModule = true, e3.isComment = e3.isCombinator = e3.isClassName = e3.isAttribute = void 0, e3.isContainer = b2, e3.isIdentifier = void 0, e3.isNamespace = x2, e3.isNesting = void 0, e3.isNode = i2, e3.isPseudo = void 0, e3.isPseudoClass = y2, e3.isPseudoElement = v2, e3.isUniversal = e3.isTag = e3.isString = e3.isSelector = e3.isRoot = void 0;
  var t2 = Z(), n2, r2 = (n2 = {}, n2[t2.ATTRIBUTE] = true, n2[t2.CLASS] = true, n2[t2.COMBINATOR] = true, n2[t2.COMMENT] = true, n2[t2.ID] = true, n2[t2.NESTING] = true, n2[t2.PSEUDO] = true, n2[t2.ROOT] = true, n2[t2.SELECTOR] = true, n2[t2.STRING] = true, n2[t2.TAG] = true, n2[t2.UNIVERSAL] = true, n2);
  function i2(e4) {
    return typeof e4 == `object` && r2[e4.type];
  }
  function a2(e4, t3) {
    return i2(t3) && t3.type === e4;
  }
  var o2 = a2.bind(null, t2.ATTRIBUTE);
  e3.isAttribute = o2;
  var s2 = a2.bind(null, t2.CLASS);
  e3.isClassName = s2;
  var c2 = a2.bind(null, t2.COMBINATOR);
  e3.isCombinator = c2;
  var l2 = a2.bind(null, t2.COMMENT);
  e3.isComment = l2;
  var u2 = a2.bind(null, t2.ID);
  e3.isIdentifier = u2;
  var d2 = a2.bind(null, t2.NESTING);
  e3.isNesting = d2;
  var f2 = a2.bind(null, t2.PSEUDO);
  e3.isPseudo = f2;
  var p2 = a2.bind(null, t2.ROOT);
  e3.isRoot = p2;
  var m2 = a2.bind(null, t2.SELECTOR);
  e3.isSelector = m2;
  var h2 = a2.bind(null, t2.STRING);
  e3.isString = h2;
  var g2 = a2.bind(null, t2.TAG);
  e3.isTag = g2;
  var _2 = a2.bind(null, t2.UNIVERSAL);
  e3.isUniversal = _2;
  function v2(e4) {
    return f2(e4) && e4.value && (e4.value.startsWith(`::`) || e4.value.toLowerCase() === `:before` || e4.value.toLowerCase() === `:after` || e4.value.toLowerCase() === `:first-letter` || e4.value.toLowerCase() === `:first-line`);
  }
  function y2(e4) {
    return f2(e4) && !v2(e4);
  }
  function b2(e4) {
    return !!(i2(e4) && e4.walk);
  }
  function x2(e4) {
    return o2(e4) || g2(e4);
  }
}), _C = X((e3) => {
  "use strict";
  e3.__esModule = true;
  var t2 = Z();
  Object.keys(t2).forEach(function(n3) {
    n3 === `default` || n3 === `__esModule` || n3 in e3 && e3[n3] === t2[n3] || (e3[n3] = t2[n3]);
  });
  var n2 = hC();
  Object.keys(n2).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e3 && e3[t3] === n2[t3] || (e3[t3] = n2[t3]);
  });
  var r2 = gC();
  Object.keys(r2).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e3 && e3[t3] === r2[t3] || (e3[t3] = r2[t3]);
  });
}), vC = X((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = void 0;
  var n2 = o2(mC()), r2 = a2(_C());
  function i2(e4) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (i2 = function(e5) {
      return e5 ? n3 : t3;
    })(e4);
  }
  function a2(e4, t3) {
    if (!t3 && e4 && e4.__esModule) return e4;
    if (e4 === null || typeof e4 != `object` && typeof e4 != `function`) return { default: e4 };
    var n3 = i2(t3);
    if (n3 && n3.has(e4)) return n3.get(e4);
    var r3 = {}, a3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o3 in e4) if (o3 !== `default` && Object.prototype.hasOwnProperty.call(e4, o3)) {
      var s3 = a3 ? Object.getOwnPropertyDescriptor(e4, o3) : null;
      s3 && (s3.get || s3.set) ? Object.defineProperty(r3, o3, s3) : r3[o3] = e4[o3];
    }
    return r3.default = e4, n3 && n3.set(e4, r3), r3;
  }
  function o2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  var s2 = function(e4) {
    return new n2.default(e4);
  };
  Object.assign(s2, r2), delete s2.__esModule;
  var c2 = s2;
  e3.default = c2, t2.exports = e3.default;
}), yC = US(vC()), { ATTRIBUTE: bC, CLASS: xC, COMBINATOR: SC, COMMENT: CC, ID: wC, NESTING: TC, PSEUDO: EC, ROOT: DC, SELECTOR: OC, STRING: kC, TAG: AC, UNIVERSAL: jC, attribute: MC, className: NC, combinator: PC, comment: FC, id: IC, nesting: LC, pseudo: RC, root: zC, selector: BC, string: VC, tag: HC, universal: UC, isAttribute: WC, isClassName: GC, isCombinator: KC, isComment: qC, isContainer: JC, isIdentifier: YC, isNamespace: XC, isNesting: ZC, isNode: QC, isPseudo: $C, isPseudoClass: ew, isPseudoElement: tw, isRoot: nw, isSelector: rw, isString: iw, isTag: aw, isUniversal: ow } = yC, sw = yC.default ?? yC, cw = {};
t(cw, { ATTRIBUTE: () => bC, CLASS: () => xC, COMBINATOR: () => SC, COMMENT: () => CC, ID: () => wC, NESTING: () => TC, PSEUDO: () => EC, ROOT: () => DC, SELECTOR: () => OC, STRING: () => kC, TAG: () => AC, UNIVERSAL: () => jC, attribute: () => MC, className: () => NC, combinator: () => PC, comment: () => FC, default: () => sw, id: () => IC, isAttribute: () => WC, isClassName: () => GC, isCombinator: () => KC, isComment: () => qC, isContainer: () => JC, isIdentifier: () => YC, isNamespace: () => XC, isNesting: () => ZC, isNode: () => QC, isPseudo: () => $C, isPseudoClass: () => ew, isPseudoElement: () => tw, isRoot: () => nw, isSelector: () => rw, isString: () => iw, isTag: () => aw, isUniversal: () => ow, nesting: () => LC, pseudo: () => RC, root: () => zC, selector: () => BC, string: () => VC, tag: () => HC, universal: () => UC });
var lw = {};
t(lw, { AtRule: () => tb, Comment: () => $y, Container: () => Xy, CssSyntaxError: () => Jy, Declaration: () => Yy, Document: () => Qy, Input: () => rb, Node: () => ob, Processor: () => Zy, Result: () => nb, Root: () => ab, Rule: () => ib, Warning: () => eb, atRule: () => Wy, comment: () => Uy, decl: () => Ky, default: () => Iy, document: () => Hy, fromJSON: () => Ry, list: () => Vy, parse: () => By, plugin: () => zy, root: () => qy, rule: () => Gy, stringify: () => Ly });
var uw = (e3) => {
  let t2 = (e4) => typeof e4.default < `u` ? e4.default : e4, n2 = (e4) => Object.assign({ __esModule: true }, e4);
  switch (e3) {
    case `postcss`:
      return t2(lw);
    case `postcss-selector-parser`:
      return t2(cw);
    default:
      return console.error(`module "` + e3 + `" not found`), null;
  }
}, dw = Object.create, fw = Object.defineProperty, pw = Object.getOwnPropertyDescriptor, mw = Object.getOwnPropertyNames, hw = Object.getPrototypeOf, gw = Object.prototype.hasOwnProperty, _w = ((e3) => typeof uw < `u` ? uw : typeof Proxy < `u` ? new Proxy(e3, { get: (e4, t2) => (typeof uw < `u` ? uw : e4)[t2] }) : e3)(function(e3) {
  if (typeof uw < `u`) return uw.apply(this, arguments);
  throw Error(`Dynamic require of "` + e3 + `" is not supported`);
}), vw = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), yw = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of mw(t2)) !gw.call(e3, i2) && i2 !== n2 && fw(e3, i2, { get: () => t2[i2], enumerable: !(r2 = pw(t2, i2)) || r2.enumerable });
  return e3;
}, bw = (e3, t2, n2) => (n2 = e3 == null ? {} : dw(hw(e3)), yw(t2 || !e3 || !e3.__esModule ? fw(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), xw = vw((e3, t2) => {
  var { AtRule: n2, Rule: r2 } = _w(`postcss`), i2 = _w(`postcss-selector-parser`);
  function a2(e4, t3) {
    let n3;
    try {
      i2((e5) => {
        n3 = e5;
      }).processSync(e4);
    } catch (n4) {
      throw e4.includes(`:`) ? t3 ? t3.error(`Missed semicolon`) : n4 : t3 ? t3.error(n4.message) : n4;
    }
    return n3.at(0);
  }
  function o2(e4, t3) {
    let n3 = false;
    return e4.each((e5) => {
      if (e5.type === `nesting`) {
        let r3 = t3.clone({});
        e5.value === `&` ? e5.replaceWith(r3) : e5.replaceWith(a2(e5.value.replace(`&`, r3.toString()))), n3 = true;
      } else `nodes` in e5 && e5.nodes && o2(e5, t3) && (n3 = true);
    }), n3;
  }
  function s2(e4, t3) {
    let n3 = [];
    return e4.selectors.forEach((r3) => {
      let s3 = a2(r3, e4);
      t3.selectors.forEach((e5) => {
        if (!e5) return;
        let r4 = a2(e5, t3);
        o2(r4, s3) || (r4.prepend(i2.combinator({ value: ` ` })), r4.prepend(s3.clone({}))), n3.push(r4.toString());
      });
    }), n3;
  }
  function c2(e4, t3) {
    let n3 = e4.prev();
    for (t3.after(e4); n3 && n3.type === `comment`; ) {
      let e5 = n3.prev();
      t3.after(n3), n3 = e5;
    }
    return e4;
  }
  function l2(e4) {
    return function t3(n3, r3, i3, a3 = i3) {
      let o3 = [];
      if (r3.each((c3) => {
        c3.type === `rule` && i3 ? a3 && (c3.selectors = s2(n3, c3)) : c3.type === `atrule` && c3.nodes ? e4[c3.name] ? t3(n3, c3, a3) : r3[h2] !== false && o3.push(c3) : o3.push(c3);
      }), i3 && o3.length) {
        let e5 = n3.clone({ nodes: [] });
        for (let t4 of o3) e5.append(t4);
        r3.prepend(e5);
      }
    };
  }
  function u2(e4, t3, n3) {
    let i3 = new r2({ nodes: [], selector: e4 });
    return i3.append(t3), n3.after(i3), i3;
  }
  function d2(e4, t3) {
    let n3 = {};
    for (let t4 of e4) n3[t4] = true;
    if (t3) for (let e5 of t3) n3[e5.replace(/^@/, ``)] = true;
    return n3;
  }
  function f2(e4) {
    e4 = e4.trim();
    let t3 = e4.match(/^\((.*)\)$/);
    if (!t3) return { selector: e4, type: `basic` };
    let n3 = t3[1].match(/^(with(?:out)?):(.+)$/);
    if (n3) {
      let e5 = n3[1] === `with`, t4 = Object.fromEntries(n3[2].trim().split(/\s+/).map((e6) => [e6, true]));
      if (e5 && t4.all) return { type: `noop` };
      let r3 = (e6) => !!t4[e6];
      return t4.all ? r3 = () => true : e5 && (r3 = (e6) => e6 === `all` ? false : !t4[e6]), { escapes: r3, type: `withrules` };
    }
    return { type: `unknown` };
  }
  function p2(e4) {
    let t3 = [], r3 = e4.parent;
    for (; r3 && r3 instanceof n2; ) t3.push(r3), r3 = r3.parent;
    return t3;
  }
  function m2(e4) {
    let t3 = e4[g2];
    if (!t3) e4.after(e4.nodes);
    else {
      let n3 = e4.nodes, r3, i3 = -1, a3, o3, s3, c3 = p2(e4);
      if (c3.forEach((e5, n4) => {
        if (t3(e5.name)) r3 = e5, i3 = n4, o3 = s3;
        else {
          let t4 = s3;
          s3 = e5.clone({ nodes: [] }), t4 && s3.append(t4), a3 || (a3 = s3);
        }
      }), r3 ? o3 ? (a3.append(n3), r3.after(o3)) : r3.after(n3) : e4.after(n3), e4.next() && r3) {
        let t4;
        c3.slice(0, i3 + 1).forEach((n4, r4, i4) => {
          let a4 = t4;
          t4 = n4.clone({ nodes: [] }), a4 && t4.append(a4);
          let o4 = [], s4 = (i4[r4 - 1] || e4).next();
          for (; s4; ) o4.push(s4), s4 = s4.next();
          t4.append(o4);
        }), t4 && (o3 || n3[n3.length - 1]).after(t4);
      }
    }
    e4.remove();
  }
  var h2 = Symbol(`rootRuleMergeSel`), g2 = Symbol(`rootRuleEscapes`);
  function _2(e4) {
    let { params: t3 } = e4, { escapes: n3, selector: i3, type: a3 } = f2(t3);
    if (a3 === `unknown`) throw e4.error(`Unknown @${e4.name} parameter ${JSON.stringify(t3)}`);
    if (a3 === `basic` && i3) {
      let t4 = new r2({ nodes: e4.nodes, selector: i3 });
      e4.removeAll(), e4.append(t4);
    }
    e4[g2] = n3, e4[h2] = n3 ? !n3(`all`) : a3 === `noop`;
  }
  var v2 = Symbol(`hasRootRule`);
  t2.exports = (e4 = {}) => {
    let t3 = d2([`media`, `supports`, `layer`, `container`, `starting-style`], e4.bubble), n3 = l2(t3), r3 = d2([`document`, `font-face`, `keyframes`, `-webkit-keyframes`, `-moz-keyframes`], e4.unwrap), i3 = (e4.rootRuleName || `at-root`).replace(/^@/, ``), a3 = e4.preserveEmpty;
    return { Once(e5) {
      e5.walkAtRules(i3, (t4) => {
        _2(t4), e5[v2] = true;
      });
    }, postcssPlugin: `postcss-nested`, RootExit(e5) {
      e5[v2] && (e5.walkAtRules(i3, m2), e5[v2] = false);
    }, Rule(e5) {
      let o3 = false, l3 = e5, d3 = false, f3 = [];
      e5.each((a4) => {
        a4.type === `rule` ? (f3.length && (l3 = u2(e5.selector, f3, l3), f3 = []), d3 = true, o3 = true, a4.selectors = s2(e5, a4), l3 = c2(a4, l3)) : a4.type === `atrule` ? (f3.length && (l3 = u2(e5.selector, f3, l3), f3 = []), a4.name === i3 ? (o3 = true, n3(e5, a4, true, a4[h2]), l3 = c2(a4, l3)) : t3[a4.name] ? (d3 = true, o3 = true, n3(e5, a4, true), l3 = c2(a4, l3)) : r3[a4.name] ? (d3 = true, o3 = true, n3(e5, a4, false), l3 = c2(a4, l3)) : d3 && f3.push(a4)) : a4.type === `decl` && d3 && f3.push(a4);
      }), f3.length && (l3 = u2(e5.selector, f3, l3)), o3 && a3 !== true && (e5.raws.semicolon = true, e5.nodes.length === 0 && e5.remove());
    } };
  }, t2.exports.postcss = true;
}), Sw = bw(xw()), { postcss: Cw } = Sw, ww = Sw.default ?? Sw, Tw = Object.create, Ew = Object.defineProperty, Dw = Object.getOwnPropertyDescriptor, Ow = Object.getOwnPropertyNames, kw = Object.getPrototypeOf, Aw = Object.prototype.hasOwnProperty, jw = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), Mw = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of Ow(t2)) !Aw.call(e3, i2) && i2 !== n2 && Ew(e3, i2, { get: () => t2[i2], enumerable: !(r2 = Dw(t2, i2)) || r2.enumerable });
  return e3;
}, Nw = (e3, t2, n2) => (n2 = e3 == null ? {} : Tw(kw(e3)), Mw(t2 || !e3 || !e3.__esModule ? Ew(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), Pw = jw((e3, t2) => {
  "use strict";
  e3.__esModule = true, e3.default = i2;
  function n2(e4) {
    for (var t3 = e4.toLowerCase(), n3 = ``, r3 = false, i3 = 0; i3 < 6 && t3[i3] !== void 0; i3++) {
      var a2 = t3.charCodeAt(i3), o2 = a2 >= 97 && a2 <= 102 || a2 >= 48 && a2 <= 57;
      if (r3 = a2 === 32, !o2) break;
      n3 += t3[i3];
    }
    if (n3.length !== 0) {
      var s2 = parseInt(n3, 16), c2 = s2 >= 55296 && s2 <= 57343;
      return c2 || s2 === 0 || s2 > 1114111 ? [`\uFFFD`, n3.length + (r3 ? 1 : 0)] : [String.fromCodePoint(s2), n3.length + (r3 ? 1 : 0)];
    }
  }
  var r2 = /\\/;
  function i2(e4) {
    var t3 = r2.test(e4);
    if (!t3) return e4;
    for (var i3 = ``, a2 = 0; a2 < e4.length; a2++) {
      if (e4[a2] === `\\`) {
        var o2 = n2(e4.slice(a2 + 1, a2 + 7));
        if (o2 !== void 0) {
          i3 += o2[0], a2 += o2[1];
          continue;
        }
        if (e4[a2 + 1] === `\\`) {
          i3 += `\\`, a2++;
          continue;
        }
        e4.length === a2 + 1 && (i3 += e4[a2]);
        continue;
      }
      i3 += e4[a2];
    }
    return i3;
  }
  t2.exports = e3.default;
}), Fw = Nw(Pw()), Iw = Fw.default ?? Fw, Lw = e((exports, t2) => {
  exports.__esModule = true, exports.default = i2;
  function n2(e3) {
    for (var t3 = e3.toLowerCase(), n3 = ``, r3 = false, i3 = 0; i3 < 6 && t3[i3] !== void 0; i3++) {
      var a2 = t3.charCodeAt(i3), o2 = a2 >= 97 && a2 <= 102 || a2 >= 48 && a2 <= 57;
      if (r3 = a2 === 32, !o2) break;
      n3 += t3[i3];
    }
    if (n3.length !== 0) {
      var s2 = parseInt(n3, 16), c2 = s2 >= 55296 && s2 <= 57343;
      return c2 || s2 === 0 || s2 > 1114111 ? [`\uFFFD`, n3.length + (r3 ? 1 : 0)] : [String.fromCodePoint(s2), n3.length + (r3 ? 1 : 0)];
    }
  }
  var r2 = /\\/;
  function i2(e3) {
    var t3 = r2.test(e3);
    if (!t3) return e3;
    for (var i3 = ``, a2 = 0; a2 < e3.length; a2++) {
      if (e3[a2] === `\\`) {
        var o2 = n2(e3.slice(a2 + 1, a2 + 7));
        if (o2 !== void 0) {
          i3 += o2[0], a2 += o2[1];
          continue;
        }
        if (e3[a2 + 1] === `\\`) {
          i3 += `\\`, a2++;
          continue;
        }
        e3.length === a2 + 1 && (i3 += e3[a2]);
        continue;
      }
      i3 += e3[a2];
    }
    return i3;
  }
  t2.exports = exports.default;
}), Rw = e((exports, t2) => {
  exports.__esModule = true, exports.default = n2;
  function n2(e3) {
    for (var t3 = arguments.length, n3 = Array(t3 > 1 ? t3 - 1 : 0), r2 = 1; r2 < t3; r2++) n3[r2 - 1] = arguments[r2];
    for (; n3.length > 0; ) {
      var i2 = n3.shift();
      if (!e3[i2]) return;
      e3 = e3[i2];
    }
    return e3;
  }
  t2.exports = exports.default;
}), zw = e((exports, t2) => {
  exports.__esModule = true, exports.default = n2;
  function n2(e3) {
    for (var t3 = arguments.length, n3 = Array(t3 > 1 ? t3 - 1 : 0), r2 = 1; r2 < t3; r2++) n3[r2 - 1] = arguments[r2];
    for (; n3.length > 0; ) {
      var i2 = n3.shift();
      e3[i2] || (e3[i2] = {}), e3 = e3[i2];
    }
  }
  t2.exports = exports.default;
}), Bw = e((exports, t2) => {
  exports.__esModule = true, exports.default = n2;
  function n2(e3) {
    for (var t3 = ``, n3 = e3.indexOf(`/*`), r2 = 0; n3 >= 0; ) {
      t3 += e3.slice(r2, n3);
      var i2 = e3.indexOf(`*/`, n3 + 2);
      if (i2 < 0) return t3;
      r2 = i2 + 2, n3 = e3.indexOf(`/*`, r2);
    }
    return t3 += e3.slice(r2), t3;
  }
  t2.exports = exports.default;
}), Vw = e((exports) => {
  exports.__esModule = true, exports.unesc = exports.stripComments = exports.getProp = exports.ensureObject = void 0;
  var t2 = a2(Lw());
  exports.unesc = t2.default;
  var n2 = a2(Rw());
  exports.getProp = n2.default;
  var r2 = a2(zw());
  exports.ensureObject = r2.default;
  var i2 = a2(Bw());
  exports.stripComments = i2.default;
  function a2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
}), Hw = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = Vw();
  function r2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
    }
  }
  function i2(e3, t3, n3) {
    return t3 && r2(e3.prototype, t3), n3 && r2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  var a2 = function e3(t3, n3) {
    if (typeof t3 != `object` || !t3) return t3;
    var r3 = new t3.constructor();
    for (var i3 in t3) {
      if (!t3.hasOwnProperty(i3)) continue;
      var a3 = t3[i3], o3 = typeof a3;
      i3 === `parent` && o3 === `object` ? n3 && (r3[i3] = n3) : a3 instanceof Array ? r3[i3] = a3.map(function(t4) {
        return e3(t4, r3);
      }) : r3[i3] = e3(a3, r3);
    }
    return r3;
  }, o2 = function() {
    function e3(e4) {
      e4 === void 0 && (e4 = {}), Object.assign(this, e4), this.spaces = this.spaces || {}, this.spaces.before = this.spaces.before || ``, this.spaces.after = this.spaces.after || ``;
    }
    var t3 = e3.prototype;
    return t3.remove = function() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }, t3.replaceWith = function() {
      if (this.parent) {
        for (var e4 in arguments) this.parent.insertBefore(this, arguments[e4]);
        this.remove();
      }
      return this;
    }, t3.next = function() {
      return this.parent.at(this.parent.index(this) + 1);
    }, t3.prev = function() {
      return this.parent.at(this.parent.index(this) - 1);
    }, t3.clone = function(e4) {
      e4 === void 0 && (e4 = {});
      var t4 = a2(this);
      for (var n3 in e4) t4[n3] = e4[n3];
      return t4;
    }, t3.appendToPropertyAndEscape = function(e4, t4, n3) {
      this.raws || (this.raws = {});
      var r3 = this[e4], i3 = this.raws[e4];
      this[e4] = r3 + t4, i3 || n3 !== t4 ? this.raws[e4] = (i3 || r3) + n3 : delete this.raws[e4];
    }, t3.setPropertyAndEscape = function(e4, t4, n3) {
      this.raws || (this.raws = {}), this[e4] = t4, this.raws[e4] = n3;
    }, t3.setPropertyWithoutEscape = function(e4, t4) {
      this[e4] = t4, this.raws && delete this.raws[e4];
    }, t3.isAtPosition = function(e4, t4) {
      if (this.source && this.source.start && this.source.end) return !(this.source.start.line > e4 || this.source.end.line < e4 || this.source.start.line === e4 && this.source.start.column > t4 || this.source.end.line === e4 && this.source.end.column < t4);
    }, t3.stringifyProperty = function(e4) {
      return this.raws && this.raws[e4] || this[e4];
    }, t3.valueToString = function() {
      return String(this.stringifyProperty(`value`));
    }, t3.toString = function() {
      return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join(``);
    }, i2(e3, [{ key: `rawSpaceBefore`, get: function() {
      var e4 = this.raws && this.raws.spaces && this.raws.spaces.before;
      return e4 === void 0 && (e4 = this.spaces && this.spaces.before), e4 || ``;
    }, set: function(e4) {
      (0, n2.ensureObject)(this, `raws`, `spaces`), this.raws.spaces.before = e4;
    } }, { key: `rawSpaceAfter`, get: function() {
      var e4 = this.raws && this.raws.spaces && this.raws.spaces.after;
      return e4 === void 0 && (e4 = this.spaces.after), e4 || ``;
    }, set: function(e4) {
      (0, n2.ensureObject)(this, `raws`, `spaces`), this.raws.spaces.after = e4;
    } }]), e3;
  }();
  exports.default = o2, t2.exports = exports.default;
}), Q = e((exports) => {
  exports.__esModule = true, exports.UNIVERSAL = exports.TAG = exports.STRING = exports.SELECTOR = exports.ROOT = exports.PSEUDO = exports.NESTING = exports.ID = exports.COMMENT = exports.COMBINATOR = exports.CLASS = exports.ATTRIBUTE = void 0;
  var t2 = `tag`;
  exports.TAG = t2;
  var n2 = `string`;
  exports.STRING = n2;
  var r2 = `selector`;
  exports.SELECTOR = r2;
  var i2 = `root`;
  exports.ROOT = i2;
  var a2 = `pseudo`;
  exports.PSEUDO = a2;
  var o2 = `nesting`;
  exports.NESTING = o2;
  var s2 = `id`;
  exports.ID = s2;
  var c2 = `comment`;
  exports.COMMENT = c2;
  var l2 = `combinator`;
  exports.COMBINATOR = l2;
  var u2 = `class`;
  exports.CLASS = u2;
  var d2 = `attribute`;
  exports.ATTRIBUTE = d2;
  var f2 = `universal`;
  exports.UNIVERSAL = f2;
}), Uw = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = o2(Hw()), r2 = a2(Q());
  function i2(e3) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (i2 = function(e4) {
      return e4 ? n3 : t3;
    })(e3);
  }
  function a2(e3, t3) {
    if (!t3 && e3 && e3.__esModule) return e3;
    if (e3 === null || typeof e3 != `object` && typeof e3 != `function`) return { default: e3 };
    var n3 = i2(t3);
    if (n3 && n3.has(e3)) return n3.get(e3);
    var r3 = {}, a3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o3 in e3) if (o3 !== `default` && Object.prototype.hasOwnProperty.call(e3, o3)) {
      var s3 = a3 ? Object.getOwnPropertyDescriptor(e3, o3) : null;
      s3 && (s3.get || s3.set) ? Object.defineProperty(r3, o3, s3) : r3[o3] = e3[o3];
    }
    return r3.default = e3, n3 && n3.set(e3, r3), r3;
  }
  function o2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function s2(e3, t3) {
    var n3 = typeof Symbol < `u` && e3[Symbol.iterator] || e3[`@@iterator`];
    if (n3) return (n3 = n3.call(e3)).next.bind(n3);
    if (Array.isArray(e3) || (n3 = c2(e3)) || t3 && e3 && typeof e3.length == `number`) {
      n3 && (e3 = n3);
      var r3 = 0;
      return function() {
        return r3 >= e3.length ? { done: true } : { done: false, value: e3[r3++] };
      };
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function c2(e3, t3) {
    if (e3) {
      if (typeof e3 == `string`) return l2(e3, t3);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      if (n3 === `Object` && e3.constructor && (n3 = e3.constructor.name), n3 === `Map` || n3 === `Set`) return Array.from(e3);
      if (n3 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3)) return l2(e3, t3);
    }
  }
  function l2(e3, t3) {
    (t3 == null || t3 > e3.length) && (t3 = e3.length);
    for (var n3 = 0, r3 = Array(t3); n3 < t3; n3++) r3[n3] = e3[n3];
    return r3;
  }
  function u2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
    }
  }
  function d2(e3, t3, n3) {
    return t3 && u2(e3.prototype, t3), n3 && u2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function f2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, p2(e3, t3);
  }
  function p2(e3, t3) {
    return p2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, p2(e3, t3);
  }
  var m2 = function(e3) {
    f2(t3, e3);
    function t3(t4) {
      var n4;
      return n4 = e3.call(this, t4) || this, n4.nodes || (n4.nodes = []), n4;
    }
    var n3 = t3.prototype;
    return n3.append = function(e4) {
      return e4.parent = this, this.nodes.push(e4), this;
    }, n3.prepend = function(e4) {
      return e4.parent = this, this.nodes.unshift(e4), this;
    }, n3.at = function(e4) {
      return this.nodes[e4];
    }, n3.index = function(e4) {
      return typeof e4 == `number` ? e4 : this.nodes.indexOf(e4);
    }, n3.removeChild = function(e4) {
      e4 = this.index(e4), this.at(e4).parent = void 0, this.nodes.splice(e4, 1);
      var t4;
      for (var n4 in this.indexes) t4 = this.indexes[n4], t4 >= e4 && (this.indexes[n4] = t4 - 1);
      return this;
    }, n3.removeAll = function() {
      for (var e4 = s2(this.nodes), t4; !(t4 = e4()).done; ) {
        var n4 = t4.value;
        n4.parent = void 0;
      }
      return this.nodes = [], this;
    }, n3.empty = function() {
      return this.removeAll();
    }, n3.insertAfter = function(e4, t4) {
      t4.parent = this;
      var n4 = this.index(e4);
      this.nodes.splice(n4 + 1, 0, t4), t4.parent = this;
      var r3;
      for (var i3 in this.indexes) r3 = this.indexes[i3], n4 <= r3 && (this.indexes[i3] = r3 + 1);
      return this;
    }, n3.insertBefore = function(e4, t4) {
      t4.parent = this;
      var n4 = this.index(e4);
      this.nodes.splice(n4, 0, t4), t4.parent = this;
      var r3;
      for (var i3 in this.indexes) r3 = this.indexes[i3], r3 <= n4 && (this.indexes[i3] = r3 + 1);
      return this;
    }, n3._findChildAtPosition = function(e4, t4) {
      var n4 = void 0;
      return this.each(function(r3) {
        if (r3.atPosition) {
          var i3 = r3.atPosition(e4, t4);
          if (i3) return n4 = i3, false;
        } else if (r3.isAtPosition(e4, t4)) return n4 = r3, false;
      }), n4;
    }, n3.atPosition = function(e4, t4) {
      if (this.isAtPosition(e4, t4)) return this._findChildAtPosition(e4, t4) || this;
    }, n3._inferEndPosition = function() {
      this.last && this.last.source && this.last.source.end && (this.source = this.source || {}, this.source.end = this.source.end || {}, Object.assign(this.source.end, this.last.source.end));
    }, n3.each = function(e4) {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
      var t4 = this.lastEach;
      if (this.indexes[t4] = 0, this.length) {
        for (var n4, r3; this.indexes[t4] < this.length && (n4 = this.indexes[t4], r3 = e4(this.at(n4), n4), r3 !== false); ) this.indexes[t4] += 1;
        if (delete this.indexes[t4], r3 === false) return false;
      }
    }, n3.walk = function(e4) {
      return this.each(function(t4, n4) {
        var r3 = e4(t4, n4);
        if (r3 !== false && t4.length && (r3 = t4.walk(e4)), r3 === false) return false;
      });
    }, n3.walkAttributes = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.ATTRIBUTE) return e4.call(t4, n4);
      });
    }, n3.walkClasses = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.CLASS) return e4.call(t4, n4);
      });
    }, n3.walkCombinators = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.COMBINATOR) return e4.call(t4, n4);
      });
    }, n3.walkComments = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.COMMENT) return e4.call(t4, n4);
      });
    }, n3.walkIds = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.ID) return e4.call(t4, n4);
      });
    }, n3.walkNesting = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.NESTING) return e4.call(t4, n4);
      });
    }, n3.walkPseudos = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.PSEUDO) return e4.call(t4, n4);
      });
    }, n3.walkTags = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.TAG) return e4.call(t4, n4);
      });
    }, n3.walkUniversals = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.UNIVERSAL) return e4.call(t4, n4);
      });
    }, n3.split = function(e4) {
      var t4 = this, n4 = [];
      return this.reduce(function(r3, i3, a3) {
        var o3 = e4.call(t4, i3);
        return n4.push(i3), o3 ? (r3.push(n4), n4 = []) : a3 === t4.length - 1 && r3.push(n4), r3;
      }, []);
    }, n3.map = function(e4) {
      return this.nodes.map(e4);
    }, n3.reduce = function(e4, t4) {
      return this.nodes.reduce(e4, t4);
    }, n3.every = function(e4) {
      return this.nodes.every(e4);
    }, n3.some = function(e4) {
      return this.nodes.some(e4);
    }, n3.filter = function(e4) {
      return this.nodes.filter(e4);
    }, n3.sort = function(e4) {
      return this.nodes.sort(e4);
    }, n3.toString = function() {
      return this.map(String).join(``);
    }, d2(t3, [{ key: `first`, get: function() {
      return this.at(0);
    } }, { key: `last`, get: function() {
      return this.at(this.length - 1);
    } }, { key: `length`, get: function() {
      return this.nodes.length;
    } }]), t3;
  }(n2.default);
  exports.default = m2, t2.exports = exports.default;
}), Ww = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Uw()), r2 = Q();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
    }
  }
  function o2(e3, t3, n3) {
    return t3 && a2(e3.prototype, t3), n3 && a2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function s2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, c2(e3, t3);
  }
  function c2(e3, t3) {
    return c2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, c2(e3, t3);
  }
  var l2 = function(e3) {
    s2(t3, e3);
    function t3(t4) {
      var n4;
      return n4 = e3.call(this, t4) || this, n4.type = r2.ROOT, n4;
    }
    var n3 = t3.prototype;
    return n3.toString = function() {
      var e4 = this.reduce(function(e5, t4) {
        return e5.push(String(t4)), e5;
      }, []).join(`,`);
      return this.trailingComma ? e4 + `,` : e4;
    }, n3.error = function(e4, t4) {
      return this._error ? this._error(e4, t4) : Error(e4);
    }, o2(t3, [{ key: `errorGenerator`, set: function(e4) {
      this._error = e4;
    } }]), t3;
  }(n2.default);
  exports.default = l2, t2.exports = exports.default;
}), Gw = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Uw()), r2 = Q();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  var s2 = function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n3;
      return n3 = e3.call(this, t4) || this, n3.type = r2.SELECTOR, n3;
    }
    return t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), Kw = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = o2(c()), r2 = Vw(), i2 = o2(Hw()), a2 = Q();
  function o2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function s2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
    }
  }
  function l2(e3, t3, n3) {
    return t3 && s2(e3.prototype, t3), n3 && s2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function u2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, d2(e3, t3);
  }
  function d2(e3, t3) {
    return d2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, d2(e3, t3);
  }
  var f2 = function(e3) {
    u2(t3, e3);
    function t3(t4) {
      var n3;
      return n3 = e3.call(this, t4) || this, n3.type = a2.CLASS, n3._constructed = true, n3;
    }
    var i3 = t3.prototype;
    return i3.valueToString = function() {
      return `.` + e3.prototype.valueToString.call(this);
    }, l2(t3, [{ key: `value`, get: function() {
      return this._value;
    }, set: function(e4) {
      if (this._constructed) {
        var t4 = (0, n2.default)(e4, { isIdentifier: true });
        t4 === e4 ? this.raws && delete this.raws.value : ((0, r2.ensureObject)(this, `raws`), this.raws.value = t4);
      }
      this._value = e4;
    } }]), t3;
  }(i2.default);
  exports.default = f2, t2.exports = exports.default;
}), qw = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Hw()), r2 = Q();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  var s2 = function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n3;
      return n3 = e3.call(this, t4) || this, n3.type = r2.COMMENT, n3;
    }
    return t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), Jw = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Hw()), r2 = Q();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  var s2 = function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n4;
      return n4 = e3.call(this, t4) || this, n4.type = r2.ID, n4;
    }
    var n3 = t3.prototype;
    return n3.valueToString = function() {
      return `#` + e3.prototype.valueToString.call(this);
    }, t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), Yw = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = a2(c()), r2 = Vw(), i2 = a2(Hw());
  function a2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function o2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
    }
  }
  function s2(e3, t3, n3) {
    return t3 && o2(e3.prototype, t3), n3 && o2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function l2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, u2(e3, t3);
  }
  function u2(e3, t3) {
    return u2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, u2(e3, t3);
  }
  var d2 = function(e3) {
    l2(t3, e3);
    function t3() {
      return e3.apply(this, arguments) || this;
    }
    var i3 = t3.prototype;
    return i3.qualifiedName = function(e4) {
      return this.namespace ? this.namespaceString + `|` + e4 : e4;
    }, i3.valueToString = function() {
      return this.qualifiedName(e3.prototype.valueToString.call(this));
    }, s2(t3, [{ key: `namespace`, get: function() {
      return this._namespace;
    }, set: function(e4) {
      if (e4 === true || e4 === `*` || e4 === `&`) {
        this._namespace = e4, this.raws && delete this.raws.namespace;
        return;
      }
      var t4 = (0, n2.default)(e4, { isIdentifier: true });
      this._namespace = e4, t4 === e4 ? this.raws && delete this.raws.namespace : ((0, r2.ensureObject)(this, `raws`), this.raws.namespace = t4);
    } }, { key: `ns`, get: function() {
      return this._namespace;
    }, set: function(e4) {
      this.namespace = e4;
    } }, { key: `namespaceString`, get: function() {
      if (this.namespace) {
        var e4 = this.stringifyProperty(`namespace`);
        return e4 === true ? `` : e4;
      } else return ``;
    } }]), t3;
  }(i2.default);
  exports.default = d2, t2.exports = exports.default;
}), Xw = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Yw()), r2 = Q();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  var s2 = function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n3;
      return n3 = e3.call(this, t4) || this, n3.type = r2.TAG, n3;
    }
    return t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), Zw = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Hw()), r2 = Q();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  var s2 = function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n3;
      return n3 = e3.call(this, t4) || this, n3.type = r2.STRING, n3;
    }
    return t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), Qw = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Uw()), r2 = Q();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  var s2 = function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n4;
      return n4 = e3.call(this, t4) || this, n4.type = r2.PSEUDO, n4;
    }
    var n3 = t3.prototype;
    return n3.toString = function() {
      var e4 = this.length ? `(` + this.map(String).join(`,`) + `)` : ``;
      return [this.rawSpaceBefore, this.stringifyProperty(`value`), e4, this.rawSpaceAfter].join(``);
    }, t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), $w = e((exports) => {
  exports.__esModule = true, exports.default = void 0, exports.unescapeValue = v2;
  var t2 = s2(c()), n2 = s2(Lw()), r2 = s2(Yw()), a2 = Q(), o2;
  function s2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function l2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
    }
  }
  function u2(e3, t3, n3) {
    return t3 && l2(e3.prototype, t3), n3 && l2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function d2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, f2(e3, t3);
  }
  function f2(e3, t3) {
    return f2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, f2(e3, t3);
  }
  var p2 = i(), m2 = /^('|")([^]*)\1$/, h2 = p2(function() {
  }, `Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead.`), g2 = p2(function() {
  }, `Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead.`), _2 = p2(function() {
  }, `Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.`);
  function v2(e3) {
    var t3 = false, r3 = null, i2 = e3, a3 = i2.match(m2);
    return a3 && (r3 = a3[1], i2 = a3[2]), i2 = (0, n2.default)(i2), i2 !== e3 && (t3 = true), { deprecatedUsage: t3, unescaped: i2, quoteMark: r3 };
  }
  function y2(e3) {
    if (e3.quoteMark !== void 0 || e3.value === void 0) return e3;
    _2();
    var t3 = v2(e3.value), n3 = t3.quoteMark, r3 = t3.unescaped;
    return e3.raws || (e3.raws = {}), e3.raws.value === void 0 && (e3.raws.value = e3.value), e3.value = r3, e3.quoteMark = n3, e3;
  }
  var b2 = function(e3) {
    d2(n3, e3);
    function n3(t3) {
      var n4;
      return t3 === void 0 && (t3 = {}), n4 = e3.call(this, y2(t3)) || this, n4.type = a2.ATTRIBUTE, n4.raws = n4.raws || {}, Object.defineProperty(n4.raws, `unquoted`, { get: p2(function() {
        return n4.value;
      }, `attr.raws.unquoted is deprecated. Call attr.value instead.`), set: p2(function() {
        return n4.value;
      }, `Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.`) }), n4._constructed = true, n4;
    }
    var r3 = n3.prototype;
    return r3.getQuotedValue = function(e4) {
      e4 === void 0 && (e4 = {});
      var n4 = this._determineQuoteMark(e4), r4 = x2[n4], i2 = (0, t2.default)(this._value, r4);
      return i2;
    }, r3._determineQuoteMark = function(e4) {
      return e4.smart ? this.smartQuoteMark(e4) : this.preferredQuoteMark(e4);
    }, r3.setValue = function(e4, t3) {
      t3 === void 0 && (t3 = {}), this._value = e4, this._quoteMark = this._determineQuoteMark(t3), this._syncRawValue();
    }, r3.smartQuoteMark = function(e4) {
      var r4 = this.value, i2 = r4.replace(/[^']/g, ``).length, a3 = r4.replace(/[^"]/g, ``).length;
      if (i2 + a3 === 0) {
        var o3 = (0, t2.default)(r4, { isIdentifier: true });
        if (o3 === r4) return n3.NO_QUOTE;
        var s3 = this.preferredQuoteMark(e4);
        if (s3 === n3.NO_QUOTE) {
          var c2 = this.quoteMark || e4.quoteMark || n3.DOUBLE_QUOTE, l3 = x2[c2], u3 = (0, t2.default)(r4, l3);
          if (u3.length < o3.length) return c2;
        }
        return s3;
      } else if (a3 === i2) return this.preferredQuoteMark(e4);
      else if (a3 < i2) return n3.DOUBLE_QUOTE;
      else return n3.SINGLE_QUOTE;
    }, r3.preferredQuoteMark = function(e4) {
      var t3 = e4.preferCurrentQuoteMark ? this.quoteMark : e4.quoteMark;
      return t3 === void 0 && (t3 = e4.preferCurrentQuoteMark ? e4.quoteMark : this.quoteMark), t3 === void 0 && (t3 = n3.DOUBLE_QUOTE), t3;
    }, r3._syncRawValue = function() {
      var e4 = (0, t2.default)(this._value, x2[this.quoteMark]);
      e4 === this._value ? this.raws && delete this.raws.value : this.raws.value = e4;
    }, r3._handleEscapes = function(e4, n4) {
      if (this._constructed) {
        var r4 = (0, t2.default)(n4, { isIdentifier: true });
        r4 === n4 ? delete this.raws[e4] : this.raws[e4] = r4;
      }
    }, r3._spacesFor = function(e4) {
      var t3 = { before: ``, after: `` }, n4 = this.spaces[e4] || {}, r4 = this.raws.spaces && this.raws.spaces[e4] || {};
      return Object.assign(t3, n4, r4);
    }, r3._stringFor = function(e4, t3, n4) {
      t3 === void 0 && (t3 = e4), n4 === void 0 && (n4 = S2);
      var r4 = this._spacesFor(t3);
      return n4(this.stringifyProperty(e4), r4);
    }, r3.offsetOf = function(e4) {
      var t3 = 1, n4 = this._spacesFor(`attribute`);
      if (t3 += n4.before.length, e4 === `namespace` || e4 === `ns`) return this.namespace ? t3 : -1;
      if (e4 === `attributeNS` || (t3 += this.namespaceString.length, this.namespace && (t3 += 1), e4 === `attribute`)) return t3;
      t3 += this.stringifyProperty(`attribute`).length, t3 += n4.after.length;
      var r4 = this._spacesFor(`operator`);
      t3 += r4.before.length;
      var i2 = this.stringifyProperty(`operator`);
      if (e4 === `operator`) return i2 ? t3 : -1;
      t3 += i2.length, t3 += r4.after.length;
      var a3 = this._spacesFor(`value`);
      t3 += a3.before.length;
      var o3 = this.stringifyProperty(`value`);
      if (e4 === `value`) return o3 ? t3 : -1;
      t3 += o3.length, t3 += a3.after.length;
      var s3 = this._spacesFor(`insensitive`);
      return t3 += s3.before.length, e4 === `insensitive` && this.insensitive ? t3 : -1;
    }, r3.toString = function() {
      var e4 = this, t3 = [this.rawSpaceBefore, `[`];
      return t3.push(this._stringFor(`qualifiedAttribute`, `attribute`)), this.operator && (this.value || this.value === ``) && (t3.push(this._stringFor(`operator`)), t3.push(this._stringFor(`value`)), t3.push(this._stringFor(`insensitiveFlag`, `insensitive`, function(t4, n4) {
        return t4.length > 0 && !e4.quoted && n4.before.length === 0 && !(e4.spaces.value && e4.spaces.value.after) && (n4.before = ` `), S2(t4, n4);
      }))), t3.push(`]`), t3.push(this.rawSpaceAfter), t3.join(``);
    }, u2(n3, [{ key: `quoted`, get: function() {
      var e4 = this.quoteMark;
      return e4 === `'` || e4 === `"`;
    }, set: function(e4) {
      g2();
    } }, { key: `quoteMark`, get: function() {
      return this._quoteMark;
    }, set: function(e4) {
      if (!this._constructed) {
        this._quoteMark = e4;
        return;
      }
      this._quoteMark !== e4 && (this._quoteMark = e4, this._syncRawValue());
    } }, { key: `qualifiedAttribute`, get: function() {
      return this.qualifiedName(this.raws.attribute || this.attribute);
    } }, { key: `insensitiveFlag`, get: function() {
      return this.insensitive ? `i` : ``;
    } }, { key: `value`, get: function() {
      return this._value;
    }, set: function(e4) {
      if (this._constructed) {
        var t3 = v2(e4), n4 = t3.deprecatedUsage, r4 = t3.unescaped, i2 = t3.quoteMark;
        if (n4 && h2(), r4 === this._value && i2 === this._quoteMark) return;
        this._value = r4, this._quoteMark = i2, this._syncRawValue();
      } else this._value = e4;
    } }, { key: `insensitive`, get: function() {
      return this._insensitive;
    }, set: function(e4) {
      e4 || (this._insensitive = false, this.raws && (this.raws.insensitiveFlag === `I` || this.raws.insensitiveFlag === `i`) && (this.raws.insensitiveFlag = void 0)), this._insensitive = e4;
    } }, { key: `attribute`, get: function() {
      return this._attribute;
    }, set: function(e4) {
      this._handleEscapes(`attribute`, e4), this._attribute = e4;
    } }]), n3;
  }(r2.default);
  exports.default = b2, b2.NO_QUOTE = null, b2.SINGLE_QUOTE = `'`, b2.DOUBLE_QUOTE = `"`;
  var x2 = (o2 = { "'": { quotes: `single`, wrap: true }, '"': { quotes: `double`, wrap: true } }, o2[null] = { isIdentifier: true }, o2);
  function S2(e3, t3) {
    return `` + t3.before + e3 + t3.after;
  }
}), eT = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Yw()), r2 = Q();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  var s2 = function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n3;
      return n3 = e3.call(this, t4) || this, n3.type = r2.UNIVERSAL, n3.value = `*`, n3;
    }
    return t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), tT = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Hw()), r2 = Q();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  var s2 = function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n3;
      return n3 = e3.call(this, t4) || this, n3.type = r2.COMBINATOR, n3;
    }
    return t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), nT = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = i2(Hw()), r2 = Q();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  var s2 = function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n3;
      return n3 = e3.call(this, t4) || this, n3.type = r2.NESTING, n3.value = `&`, n3;
    }
    return t3;
  }(n2.default);
  exports.default = s2, t2.exports = exports.default;
}), rT = e((exports, t2) => {
  exports.__esModule = true, exports.default = n2;
  function n2(e3) {
    return e3.sort(function(e4, t3) {
      return e4 - t3;
    });
  }
  t2.exports = exports.default;
}), iT = e((exports) => {
  exports.__esModule = true, exports.word = exports.tilde = exports.tab = exports.str = exports.space = exports.slash = exports.singleQuote = exports.semicolon = exports.plus = exports.pipe = exports.openSquare = exports.openParenthesis = exports.newline = exports.greaterThan = exports.feed = exports.equals = exports.doubleQuote = exports.dollar = exports.cr = exports.comment = exports.comma = exports.combinator = exports.colon = exports.closeSquare = exports.closeParenthesis = exports.caret = exports.bang = exports.backslash = exports.at = exports.asterisk = exports.ampersand = void 0;
  var t2 = 38;
  exports.ampersand = t2;
  var n2 = 42;
  exports.asterisk = n2;
  var r2 = 64;
  exports.at = r2;
  var i2 = 44;
  exports.comma = i2;
  var a2 = 58;
  exports.colon = a2;
  var o2 = 59;
  exports.semicolon = o2;
  var s2 = 40;
  exports.openParenthesis = s2;
  var c2 = 41;
  exports.closeParenthesis = c2;
  var l2 = 91;
  exports.openSquare = l2;
  var u2 = 93;
  exports.closeSquare = u2;
  var d2 = 36;
  exports.dollar = d2;
  var f2 = 126;
  exports.tilde = f2;
  var p2 = 94;
  exports.caret = p2;
  var m2 = 43;
  exports.plus = m2;
  var h2 = 61;
  exports.equals = h2;
  var g2 = 124;
  exports.pipe = g2;
  var _2 = 62;
  exports.greaterThan = _2;
  var v2 = 32;
  exports.space = v2;
  var y2 = 39;
  exports.singleQuote = y2;
  var b2 = 34;
  exports.doubleQuote = b2;
  var x2 = 47;
  exports.slash = x2;
  var S2 = 33;
  exports.bang = S2;
  var C2 = 92;
  exports.backslash = C2;
  var w2 = 13;
  exports.cr = w2;
  var T2 = 12;
  exports.feed = T2;
  var E2 = 10;
  exports.newline = E2;
  var ee2 = 9;
  exports.tab = ee2;
  var D2 = y2;
  exports.str = D2;
  var te2 = -1;
  exports.comment = te2;
  var O2 = -2;
  exports.word = O2;
  var k2 = -3;
  exports.combinator = k2;
}), aT = e((exports) => {
  exports.__esModule = true, exports.FIELDS = void 0, exports.default = m2;
  var t2 = a2(iT()), n2, r2;
  function i2(e3) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (i2 = function(e4) {
      return e4 ? n3 : t3;
    })(e3);
  }
  function a2(e3, t3) {
    if (!t3 && e3 && e3.__esModule) return e3;
    if (e3 === null || typeof e3 != `object` && typeof e3 != `function`) return { default: e3 };
    var n3 = i2(t3);
    if (n3 && n3.has(e3)) return n3.get(e3);
    var r3 = {}, a3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o3 in e3) if (o3 !== `default` && Object.prototype.hasOwnProperty.call(e3, o3)) {
      var s3 = a3 ? Object.getOwnPropertyDescriptor(e3, o3) : null;
      s3 && (s3.get || s3.set) ? Object.defineProperty(r3, o3, s3) : r3[o3] = e3[o3];
    }
    return r3.default = e3, n3 && n3.set(e3, r3), r3;
  }
  for (var o2 = (n2 = {}, n2[t2.tab] = true, n2[t2.newline] = true, n2[t2.cr] = true, n2[t2.feed] = true, n2), s2 = (r2 = {}, r2[t2.space] = true, r2[t2.tab] = true, r2[t2.newline] = true, r2[t2.cr] = true, r2[t2.feed] = true, r2[t2.ampersand] = true, r2[t2.asterisk] = true, r2[t2.bang] = true, r2[t2.comma] = true, r2[t2.colon] = true, r2[t2.semicolon] = true, r2[t2.openParenthesis] = true, r2[t2.closeParenthesis] = true, r2[t2.openSquare] = true, r2[t2.closeSquare] = true, r2[t2.singleQuote] = true, r2[t2.doubleQuote] = true, r2[t2.plus] = true, r2[t2.pipe] = true, r2[t2.tilde] = true, r2[t2.greaterThan] = true, r2[t2.equals] = true, r2[t2.dollar] = true, r2[t2.caret] = true, r2[t2.slash] = true, r2), c2 = {}, l2 = `0123456789abcdefABCDEF`, u2 = 0; u2 < l2.length; u2++) c2[l2.charCodeAt(u2)] = true;
  function d2(e3, n3) {
    var r3 = n3, i3;
    do {
      if (i3 = e3.charCodeAt(r3), s2[i3]) return r3 - 1;
      i3 === t2.backslash ? r3 = f2(e3, r3) + 1 : r3++;
    } while (r3 < e3.length);
    return r3 - 1;
  }
  function f2(e3, n3) {
    var r3 = n3, i3 = e3.charCodeAt(r3 + 1);
    if (!o2[i3]) if (c2[i3]) {
      var a3 = 0;
      do
        r3++, a3++, i3 = e3.charCodeAt(r3 + 1);
      while (c2[i3] && a3 < 6);
      a3 < 6 && i3 === t2.space && r3++;
    } else r3++;
    return r3;
  }
  var p2 = { TYPE: 0, START_LINE: 1, START_COL: 2, END_LINE: 3, END_COL: 4, START_POS: 5, END_POS: 6 };
  exports.FIELDS = p2;
  function m2(e3) {
    var n3 = [], r3 = e3.css.valueOf(), i3 = r3, a3 = i3.length, o3 = -1, s3 = 1, c3 = 0, l3 = 0, u3, f3, p3, m3, h2, g2, _2, v2, y2, b2, x2, S2, C2;
    function w2(t3, n4) {
      if (e3.safe) r3 += n4, y2 = r3.length - 1;
      else throw e3.error(`Unclosed ` + t3, s3, c3 - o3, c3);
    }
    for (; c3 < a3; ) {
      switch (u3 = r3.charCodeAt(c3), u3 === t2.newline && (o3 = c3, s3 += 1), u3) {
        case t2.space:
        case t2.tab:
        case t2.newline:
        case t2.cr:
        case t2.feed:
          y2 = c3;
          do
            y2 += 1, u3 = r3.charCodeAt(y2), u3 === t2.newline && (o3 = y2, s3 += 1);
          while (u3 === t2.space || u3 === t2.newline || u3 === t2.tab || u3 === t2.cr || u3 === t2.feed);
          C2 = t2.space, m3 = s3, p3 = y2 - o3 - 1, l3 = y2;
          break;
        case t2.plus:
        case t2.greaterThan:
        case t2.tilde:
        case t2.pipe:
          y2 = c3;
          do
            y2 += 1, u3 = r3.charCodeAt(y2);
          while (u3 === t2.plus || u3 === t2.greaterThan || u3 === t2.tilde || u3 === t2.pipe);
          C2 = t2.combinator, m3 = s3, p3 = c3 - o3, l3 = y2;
          break;
        case t2.asterisk:
        case t2.ampersand:
        case t2.bang:
        case t2.comma:
        case t2.equals:
        case t2.dollar:
        case t2.caret:
        case t2.openSquare:
        case t2.closeSquare:
        case t2.colon:
        case t2.semicolon:
        case t2.openParenthesis:
        case t2.closeParenthesis:
          y2 = c3, C2 = u3, m3 = s3, p3 = c3 - o3, l3 = y2 + 1;
          break;
        case t2.singleQuote:
        case t2.doubleQuote:
          S2 = u3 === t2.singleQuote ? `'` : `"`, y2 = c3;
          do
            for (h2 = false, y2 = r3.indexOf(S2, y2 + 1), y2 === -1 && w2(`quote`, S2), g2 = y2; r3.charCodeAt(g2 - 1) === t2.backslash; ) --g2, h2 = !h2;
          while (h2);
          C2 = t2.str, m3 = s3, p3 = c3 - o3, l3 = y2 + 1;
          break;
        default:
          u3 === t2.slash && r3.charCodeAt(c3 + 1) === t2.asterisk ? (y2 = r3.indexOf(`*/`, c3 + 2) + 1, y2 === 0 && w2(`comment`, `*/`), f3 = r3.slice(c3, y2 + 1), v2 = f3.split(`
`), _2 = v2.length - 1, _2 > 0 ? (b2 = s3 + _2, x2 = y2 - v2[_2].length) : (b2 = s3, x2 = o3), C2 = t2.comment, s3 = b2, m3 = b2, p3 = y2 - x2) : u3 === t2.slash ? (y2 = c3, C2 = u3, m3 = s3, p3 = c3 - o3, l3 = y2 + 1) : (y2 = d2(r3, c3), C2 = t2.word, m3 = s3, p3 = y2 - o3), l3 = y2 + 1;
          break;
      }
      n3.push([C2, s3, c3 - o3, m3, p3, c3, l3]), x2 && (o3 = x2, x2 = null), c3 = l3;
    }
    return n3;
  }
}), oT = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = C2(Ww()), r2 = C2(Gw()), i2 = C2(Kw()), a2 = C2(qw()), o2 = C2(Jw()), s2 = C2(Xw()), c2 = C2(Zw()), l2 = C2(Qw()), u2 = S2($w()), d2 = C2(eT()), f2 = C2(tT()), p2 = C2(nT()), m2 = C2(rT()), h2 = S2(aT()), g2 = S2(iT()), _2 = S2(Q()), v2 = Vw(), y2, b2;
  function x2(e3) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (x2 = function(e4) {
      return e4 ? n3 : t3;
    })(e3);
  }
  function S2(e3, t3) {
    if (!t3 && e3 && e3.__esModule) return e3;
    if (e3 === null || typeof e3 != `object` && typeof e3 != `function`) return { default: e3 };
    var n3 = x2(t3);
    if (n3 && n3.has(e3)) return n3.get(e3);
    var r3 = {}, i3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a3 in e3) if (a3 !== `default` && Object.prototype.hasOwnProperty.call(e3, a3)) {
      var o3 = i3 ? Object.getOwnPropertyDescriptor(e3, a3) : null;
      o3 && (o3.get || o3.set) ? Object.defineProperty(r3, a3, o3) : r3[a3] = e3[a3];
    }
    return r3.default = e3, n3 && n3.set(e3, r3), r3;
  }
  function C2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function w2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
    }
  }
  function T2(e3, t3, n3) {
    return t3 && w2(e3.prototype, t3), n3 && w2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  var E2 = (y2 = {}, y2[g2.space] = true, y2[g2.cr] = true, y2[g2.feed] = true, y2[g2.newline] = true, y2[g2.tab] = true, y2), ee2 = Object.assign({}, E2, (b2 = {}, b2[g2.comment] = true, b2));
  function D2(e3) {
    return { line: e3[h2.FIELDS.START_LINE], column: e3[h2.FIELDS.START_COL] };
  }
  function te2(e3) {
    return { line: e3[h2.FIELDS.END_LINE], column: e3[h2.FIELDS.END_COL] };
  }
  function O2(e3, t3, n3, r3) {
    return { start: { line: e3, column: t3 }, end: { line: n3, column: r3 } };
  }
  function k2(e3) {
    return O2(e3[h2.FIELDS.START_LINE], e3[h2.FIELDS.START_COL], e3[h2.FIELDS.END_LINE], e3[h2.FIELDS.END_COL]);
  }
  function ne2(e3, t3) {
    if (e3) return O2(e3[h2.FIELDS.START_LINE], e3[h2.FIELDS.START_COL], t3[h2.FIELDS.END_LINE], t3[h2.FIELDS.END_COL]);
  }
  function A2(e3, t3) {
    var n3 = e3[t3];
    if (typeof n3 == `string`) return n3.indexOf(`\\`) !== -1 && ((0, v2.ensureObject)(e3, `raws`), e3[t3] = (0, v2.unesc)(n3), e3.raws[t3] === void 0 && (e3.raws[t3] = n3)), e3;
  }
  function re2(e3, t3) {
    for (var n3 = -1, r3 = []; (n3 = e3.indexOf(t3, n3 + 1)) !== -1; ) r3.push(n3);
    return r3;
  }
  function ie2() {
    var e3 = Array.prototype.concat.apply([], arguments);
    return e3.filter(function(t3, n3) {
      return n3 === e3.indexOf(t3);
    });
  }
  var ae2 = function() {
    function e3(e4, t4) {
      t4 === void 0 && (t4 = {}), this.rule = e4, this.options = Object.assign({ lossy: false, safe: false }, t4), this.position = 0, this.css = typeof this.rule == `string` ? this.rule : this.rule.selector, this.tokens = (0, h2.default)({ css: this.css, error: this._errorGenerator(), safe: this.options.safe });
      var i3 = ne2(this.tokens[0], this.tokens[this.tokens.length - 1]);
      this.root = new n2.default({ source: i3 }), this.root.errorGenerator = this._errorGenerator();
      var a3 = new r2.default({ source: { start: { line: 1, column: 1 } }, sourceIndex: 0 });
      this.root.append(a3), this.current = a3, this.loop();
    }
    var t3 = e3.prototype;
    return t3._errorGenerator = function() {
      var e4 = this;
      return function(t4, n3) {
        return typeof e4.rule == `string` ? Error(t4) : e4.rule.error(t4, n3);
      };
    }, t3.attribute = function() {
      var e4 = [], t4 = this.currToken;
      for (this.position++; this.position < this.tokens.length && this.currToken[h2.FIELDS.TYPE] !== g2.closeSquare; ) e4.push(this.currToken), this.position++;
      if (this.currToken[h2.FIELDS.TYPE] !== g2.closeSquare) return this.expected(`closing square bracket`, this.currToken[h2.FIELDS.START_POS]);
      var n3 = e4.length, r3 = { source: O2(t4[1], t4[2], this.currToken[3], this.currToken[4]), sourceIndex: t4[h2.FIELDS.START_POS] };
      if (n3 === 1 && !~[g2.word].indexOf(e4[0][h2.FIELDS.TYPE])) return this.expected(`attribute`, e4[0][h2.FIELDS.START_POS]);
      for (var i3 = 0, a3 = ``, o3 = ``, s3 = null, c3 = false; i3 < n3; ) {
        var l3 = e4[i3], d3 = this.content(l3), f3 = e4[i3 + 1];
        switch (l3[h2.FIELDS.TYPE]) {
          case g2.space:
            if (c3 = true, this.options.lossy) break;
            if (s3) {
              (0, v2.ensureObject)(r3, `spaces`, s3);
              var p3 = r3.spaces[s3].after || ``;
              r3.spaces[s3].after = p3 + d3;
              var m3 = (0, v2.getProp)(r3, `raws`, `spaces`, s3, `after`) || null;
              m3 && (r3.raws.spaces[s3].after = m3 + d3);
            } else a3 += d3, o3 += d3;
            break;
          case g2.asterisk:
            if (f3[h2.FIELDS.TYPE] === g2.equals) r3.operator = d3, s3 = `operator`;
            else if ((!r3.namespace || s3 === `namespace` && !c3) && f3) {
              a3 && ((0, v2.ensureObject)(r3, `spaces`, `attribute`), r3.spaces.attribute.before = a3, a3 = ``), o3 && ((0, v2.ensureObject)(r3, `raws`, `spaces`, `attribute`), r3.raws.spaces.attribute.before = a3, o3 = ``), r3.namespace = (r3.namespace || ``) + d3;
              var _3 = (0, v2.getProp)(r3, `raws`, `namespace`) || null;
              _3 && (r3.raws.namespace += d3), s3 = `namespace`;
            }
            c3 = false;
            break;
          case g2.dollar:
            if (s3 === `value`) {
              var y3 = (0, v2.getProp)(r3, `raws`, `value`);
              r3.value += `$`, y3 && (r3.raws.value = y3 + `$`);
              break;
            }
          case g2.caret:
            f3[h2.FIELDS.TYPE] === g2.equals && (r3.operator = d3, s3 = `operator`), c3 = false;
            break;
          case g2.combinator:
            if (d3 === `~` && f3[h2.FIELDS.TYPE] === g2.equals && (r3.operator = d3, s3 = `operator`), d3 !== `|`) {
              c3 = false;
              break;
            }
            f3[h2.FIELDS.TYPE] === g2.equals ? (r3.operator = d3, s3 = `operator`) : !r3.namespace && !r3.attribute && (r3.namespace = true), c3 = false;
            break;
          case g2.word:
            if (f3 && this.content(f3) === `|` && e4[i3 + 2] && e4[i3 + 2][h2.FIELDS.TYPE] !== g2.equals && !r3.operator && !r3.namespace) r3.namespace = d3, s3 = `namespace`;
            else if (!r3.attribute || s3 === `attribute` && !c3) {
              a3 && ((0, v2.ensureObject)(r3, `spaces`, `attribute`), r3.spaces.attribute.before = a3, a3 = ``), o3 && ((0, v2.ensureObject)(r3, `raws`, `spaces`, `attribute`), r3.raws.spaces.attribute.before = o3, o3 = ``), r3.attribute = (r3.attribute || ``) + d3;
              var b3 = (0, v2.getProp)(r3, `raws`, `attribute`) || null;
              b3 && (r3.raws.attribute += d3), s3 = `attribute`;
            } else if (!r3.value && r3.value !== `` || s3 === `value` && !(c3 || r3.quoteMark)) {
              var x3 = (0, v2.unesc)(d3), S3 = (0, v2.getProp)(r3, `raws`, `value`) || ``, C3 = r3.value || ``;
              r3.value = C3 + x3, r3.quoteMark = null, (x3 !== d3 || S3) && ((0, v2.ensureObject)(r3, `raws`), r3.raws.value = (S3 || C3) + d3), s3 = `value`;
            } else {
              var w3 = d3 === `i` || d3 === `I`;
              (r3.value || r3.value === ``) && (r3.quoteMark || c3) ? (r3.insensitive = w3, (!w3 || d3 === `I`) && ((0, v2.ensureObject)(r3, `raws`), r3.raws.insensitiveFlag = d3), s3 = `insensitive`, a3 && ((0, v2.ensureObject)(r3, `spaces`, `insensitive`), r3.spaces.insensitive.before = a3, a3 = ``), o3 && ((0, v2.ensureObject)(r3, `raws`, `spaces`, `insensitive`), r3.raws.spaces.insensitive.before = o3, o3 = ``)) : (r3.value || r3.value === ``) && (s3 = `value`, r3.value += d3, r3.raws.value && (r3.raws.value += d3));
            }
            c3 = false;
            break;
          case g2.str:
            if (!r3.attribute || !r3.operator) return this.error(`Expected an attribute followed by an operator preceding the string.`, { index: l3[h2.FIELDS.START_POS] });
            var T3 = (0, u2.unescapeValue)(d3), E3 = T3.unescaped, ee3 = T3.quoteMark;
            r3.value = E3, r3.quoteMark = ee3, s3 = `value`, (0, v2.ensureObject)(r3, `raws`), r3.raws.value = d3, c3 = false;
            break;
          case g2.equals:
            if (!r3.attribute) return this.expected(`attribute`, l3[h2.FIELDS.START_POS], d3);
            if (r3.value) return this.error(`Unexpected "=" found; an operator was already defined.`, { index: l3[h2.FIELDS.START_POS] });
            r3.operator = r3.operator ? r3.operator + d3 : d3, s3 = `operator`, c3 = false;
            break;
          case g2.comment:
            if (s3) if (c3 || f3 && f3[h2.FIELDS.TYPE] === g2.space || s3 === `insensitive`) {
              var D3 = (0, v2.getProp)(r3, `spaces`, s3, `after`) || ``, te3 = (0, v2.getProp)(r3, `raws`, `spaces`, s3, `after`) || D3;
              (0, v2.ensureObject)(r3, `raws`, `spaces`, s3), r3.raws.spaces[s3].after = te3 + d3;
            } else {
              var k3 = r3[s3] || ``, ne3 = (0, v2.getProp)(r3, `raws`, s3) || k3;
              (0, v2.ensureObject)(r3, `raws`), r3.raws[s3] = ne3 + d3;
            }
            else o3 += d3;
            break;
          default:
            return this.error(`Unexpected "` + d3 + `" found.`, { index: l3[h2.FIELDS.START_POS] });
        }
        i3++;
      }
      A2(r3, `attribute`), A2(r3, `namespace`), this.newNode(new u2.default(r3)), this.position++;
    }, t3.parseWhitespaceEquivalentTokens = function(e4) {
      e4 < 0 && (e4 = this.tokens.length);
      var t4 = this.position, n3 = [], r3 = ``, i3 = void 0;
      do
        if (E2[this.currToken[h2.FIELDS.TYPE]]) this.options.lossy || (r3 += this.content());
        else if (this.currToken[h2.FIELDS.TYPE] === g2.comment) {
          var o3 = {};
          r3 && (o3.before = r3, r3 = ``), i3 = new a2.default({ value: this.content(), source: k2(this.currToken), sourceIndex: this.currToken[h2.FIELDS.START_POS], spaces: o3 }), n3.push(i3);
        }
      while (++this.position < e4);
      if (r3) {
        if (i3) i3.spaces.after = r3;
        else if (!this.options.lossy) {
          var s3 = this.tokens[t4], l3 = this.tokens[this.position - 1];
          n3.push(new c2.default({ value: ``, source: O2(s3[h2.FIELDS.START_LINE], s3[h2.FIELDS.START_COL], l3[h2.FIELDS.END_LINE], l3[h2.FIELDS.END_COL]), sourceIndex: s3[h2.FIELDS.START_POS], spaces: { before: r3, after: `` } }));
        }
      }
      return n3;
    }, t3.convertWhitespaceNodesToSpace = function(e4, t4) {
      var n3 = this;
      t4 === void 0 && (t4 = false);
      var r3 = ``, i3 = ``;
      e4.forEach(function(e5) {
        var a4 = n3.lossySpace(e5.spaces.before, t4), o3 = n3.lossySpace(e5.rawSpaceBefore, t4);
        r3 += a4 + n3.lossySpace(e5.spaces.after, t4 && a4.length === 0), i3 += a4 + e5.value + n3.lossySpace(e5.rawSpaceAfter, t4 && o3.length === 0);
      }), i3 === r3 && (i3 = void 0);
      var a3 = { space: r3, rawSpace: i3 };
      return a3;
    }, t3.isNamedCombinator = function(e4) {
      return e4 === void 0 && (e4 = this.position), this.tokens[e4 + 0] && this.tokens[e4 + 0][h2.FIELDS.TYPE] === g2.slash && this.tokens[e4 + 1] && this.tokens[e4 + 1][h2.FIELDS.TYPE] === g2.word && this.tokens[e4 + 2] && this.tokens[e4 + 2][h2.FIELDS.TYPE] === g2.slash;
    }, t3.namedCombinator = function() {
      if (this.isNamedCombinator()) {
        var e4 = this.content(this.tokens[this.position + 1]), t4 = (0, v2.unesc)(e4).toLowerCase(), n3 = {};
        t4 !== e4 && (n3.value = `/` + e4 + `/`);
        var r3 = new f2.default({ value: `/` + t4 + `/`, source: O2(this.currToken[h2.FIELDS.START_LINE], this.currToken[h2.FIELDS.START_COL], this.tokens[this.position + 2][h2.FIELDS.END_LINE], this.tokens[this.position + 2][h2.FIELDS.END_COL]), sourceIndex: this.currToken[h2.FIELDS.START_POS], raws: n3 });
        return this.position += 3, r3;
      } else this.unexpected();
    }, t3.combinator = function() {
      var e4 = this;
      if (this.content() === `|`) return this.namespace();
      var t4 = this.locateNextMeaningfulToken(this.position);
      if (t4 < 0 || this.tokens[t4][h2.FIELDS.TYPE] === g2.comma || this.tokens[t4][h2.FIELDS.TYPE] === g2.closeParenthesis) {
        var n3 = this.parseWhitespaceEquivalentTokens(t4);
        if (n3.length > 0) {
          var r3 = this.current.last;
          if (r3) {
            var i3 = this.convertWhitespaceNodesToSpace(n3), a3 = i3.space, o3 = i3.rawSpace;
            o3 !== void 0 && (r3.rawSpaceAfter += o3), r3.spaces.after += a3;
          } else n3.forEach(function(t5) {
            return e4.newNode(t5);
          });
        }
        return;
      }
      var s3 = this.currToken, c3 = void 0;
      t4 > this.position && (c3 = this.parseWhitespaceEquivalentTokens(t4));
      var l3;
      if (this.isNamedCombinator() ? l3 = this.namedCombinator() : this.currToken[h2.FIELDS.TYPE] === g2.combinator ? (l3 = new f2.default({ value: this.content(), source: k2(this.currToken), sourceIndex: this.currToken[h2.FIELDS.START_POS] }), this.position++) : E2[this.currToken[h2.FIELDS.TYPE]] || c3 || this.unexpected(), l3) {
        if (c3) {
          var u3 = this.convertWhitespaceNodesToSpace(c3), d3 = u3.space, p3 = u3.rawSpace;
          l3.spaces.before = d3, l3.rawSpaceBefore = p3;
        }
      } else {
        var m3 = this.convertWhitespaceNodesToSpace(c3, true), _3 = m3.space, v3 = m3.rawSpace;
        v3 || (v3 = _3);
        var y3 = {}, b3 = { spaces: {} };
        _3.endsWith(` `) && v3.endsWith(` `) ? (y3.before = _3.slice(0, _3.length - 1), b3.spaces.before = v3.slice(0, v3.length - 1)) : _3.startsWith(` `) && v3.startsWith(` `) ? (y3.after = _3.slice(1), b3.spaces.after = v3.slice(1)) : b3.value = v3, l3 = new f2.default({ value: ` `, source: ne2(s3, this.tokens[this.position - 1]), sourceIndex: s3[h2.FIELDS.START_POS], spaces: y3, raws: b3 });
      }
      return this.currToken && this.currToken[h2.FIELDS.TYPE] === g2.space && (l3.spaces.after = this.optionalSpace(this.content()), this.position++), this.newNode(l3);
    }, t3.comma = function() {
      if (this.position === this.tokens.length - 1) {
        this.root.trailingComma = true, this.position++;
        return;
      }
      this.current._inferEndPosition();
      var e4 = new r2.default({ source: { start: D2(this.tokens[this.position + 1]) }, sourceIndex: this.tokens[this.position + 1][h2.FIELDS.START_POS] });
      this.current.parent.append(e4), this.current = e4, this.position++;
    }, t3.comment = function() {
      var e4 = this.currToken;
      this.newNode(new a2.default({ value: this.content(), source: k2(e4), sourceIndex: e4[h2.FIELDS.START_POS] })), this.position++;
    }, t3.error = function(e4, t4) {
      throw this.root.error(e4, t4);
    }, t3.missingBackslash = function() {
      return this.error(`Expected a backslash preceding the semicolon.`, { index: this.currToken[h2.FIELDS.START_POS] });
    }, t3.missingParenthesis = function() {
      return this.expected(`opening parenthesis`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.missingSquareBracket = function() {
      return this.expected(`opening square bracket`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.unexpected = function() {
      return this.error(`Unexpected '` + this.content() + `'. Escaping special characters with \\ may help.`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.unexpectedPipe = function() {
      return this.error(`Unexpected '|'.`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.namespace = function() {
      var e4 = this.prevToken && this.content(this.prevToken) || true;
      if (this.nextToken[h2.FIELDS.TYPE] === g2.word) return this.position++, this.word(e4);
      if (this.nextToken[h2.FIELDS.TYPE] === g2.asterisk) return this.position++, this.universal(e4);
      this.unexpectedPipe();
    }, t3.nesting = function() {
      if (this.nextToken) {
        var e4 = this.content(this.nextToken);
        if (e4 === `|`) {
          this.position++;
          return;
        }
      }
      var t4 = this.currToken;
      this.newNode(new p2.default({ value: this.content(), source: k2(t4), sourceIndex: t4[h2.FIELDS.START_POS] })), this.position++;
    }, t3.parentheses = function() {
      var e4 = this.current.last, t4 = 1;
      if (this.position++, e4 && e4.type === _2.PSEUDO) {
        var n3 = new r2.default({ source: { start: D2(this.tokens[this.position]) }, sourceIndex: this.tokens[this.position][h2.FIELDS.START_POS] }), i3 = this.current;
        for (e4.append(n3), this.current = n3; this.position < this.tokens.length && t4; ) this.currToken[h2.FIELDS.TYPE] === g2.openParenthesis && t4++, this.currToken[h2.FIELDS.TYPE] === g2.closeParenthesis && t4--, t4 ? this.parse() : (this.current.source.end = te2(this.currToken), this.current.parent.source.end = te2(this.currToken), this.position++);
        this.current = i3;
      } else {
        for (var a3 = this.currToken, o3 = `(`, s3; this.position < this.tokens.length && t4; ) this.currToken[h2.FIELDS.TYPE] === g2.openParenthesis && t4++, this.currToken[h2.FIELDS.TYPE] === g2.closeParenthesis && t4--, s3 = this.currToken, o3 += this.parseParenthesisToken(this.currToken), this.position++;
        e4 ? e4.appendToPropertyAndEscape(`value`, o3, o3) : this.newNode(new c2.default({ value: o3, source: O2(a3[h2.FIELDS.START_LINE], a3[h2.FIELDS.START_COL], s3[h2.FIELDS.END_LINE], s3[h2.FIELDS.END_COL]), sourceIndex: a3[h2.FIELDS.START_POS] }));
      }
      if (t4) return this.expected(`closing parenthesis`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.pseudo = function() {
      for (var e4 = this, t4 = ``, n3 = this.currToken; this.currToken && this.currToken[h2.FIELDS.TYPE] === g2.colon; ) t4 += this.content(), this.position++;
      if (!this.currToken) return this.expected([`pseudo-class`, `pseudo-element`], this.position - 1);
      if (this.currToken[h2.FIELDS.TYPE] === g2.word) this.splitWord(false, function(r3, i3) {
        t4 += r3, e4.newNode(new l2.default({ value: t4, source: ne2(n3, e4.currToken), sourceIndex: n3[h2.FIELDS.START_POS] })), i3 > 1 && e4.nextToken && e4.nextToken[h2.FIELDS.TYPE] === g2.openParenthesis && e4.error(`Misplaced parenthesis.`, { index: e4.nextToken[h2.FIELDS.START_POS] });
      });
      else return this.expected([`pseudo-class`, `pseudo-element`], this.currToken[h2.FIELDS.START_POS]);
    }, t3.space = function() {
      var e4 = this.content();
      this.position === 0 || this.prevToken[h2.FIELDS.TYPE] === g2.comma || this.prevToken[h2.FIELDS.TYPE] === g2.openParenthesis || this.current.nodes.every(function(e5) {
        return e5.type === `comment`;
      }) ? (this.spaces = this.optionalSpace(e4), this.position++) : this.position === this.tokens.length - 1 || this.nextToken[h2.FIELDS.TYPE] === g2.comma || this.nextToken[h2.FIELDS.TYPE] === g2.closeParenthesis ? (this.current.last.spaces.after = this.optionalSpace(e4), this.position++) : this.combinator();
    }, t3.string = function() {
      var e4 = this.currToken;
      this.newNode(new c2.default({ value: this.content(), source: k2(e4), sourceIndex: e4[h2.FIELDS.START_POS] })), this.position++;
    }, t3.universal = function(e4) {
      var t4 = this.nextToken;
      if (t4 && this.content(t4) === `|`) return this.position++, this.namespace();
      var n3 = this.currToken;
      this.newNode(new d2.default({ value: this.content(), source: k2(n3), sourceIndex: n3[h2.FIELDS.START_POS] }), e4), this.position++;
    }, t3.splitWord = function(e4, t4) {
      for (var n3 = this, r3 = this.nextToken, a3 = this.content(); r3 && ~[g2.dollar, g2.caret, g2.equals, g2.word].indexOf(r3[h2.FIELDS.TYPE]); ) {
        this.position++;
        var c3 = this.content();
        if (a3 += c3, c3.lastIndexOf(`\\`) === c3.length - 1) {
          var l3 = this.nextToken;
          l3 && l3[h2.FIELDS.TYPE] === g2.space && (a3 += this.requiredSpace(this.content(l3)), this.position++);
        }
        r3 = this.nextToken;
      }
      var u3 = re2(a3, `.`).filter(function(e5) {
        var t5 = a3[e5 - 1] === `\\`, n4 = /^\d+\.\d+%$/.test(a3);
        return !t5 && !n4;
      }), d3 = re2(a3, `#`).filter(function(e5) {
        return a3[e5 - 1] !== `\\`;
      }), f3 = re2(a3, `#{`);
      f3.length && (d3 = d3.filter(function(e5) {
        return !~f3.indexOf(e5);
      }));
      var p3 = (0, m2.default)(ie2([0].concat(u3, d3)));
      p3.forEach(function(r4, c4) {
        var l4 = p3[c4 + 1] || a3.length, f4 = a3.slice(r4, l4);
        if (c4 === 0 && t4) return t4.call(n3, f4, p3.length);
        var m3, g3 = n3.currToken, _3 = g3[h2.FIELDS.START_POS] + p3[c4], v3 = O2(g3[1], g3[2] + r4, g3[3], g3[2] + (l4 - 1));
        if (~u3.indexOf(r4)) {
          var y3 = { value: f4.slice(1), source: v3, sourceIndex: _3 };
          m3 = new i2.default(A2(y3, `value`));
        } else if (~d3.indexOf(r4)) {
          var b3 = { value: f4.slice(1), source: v3, sourceIndex: _3 };
          m3 = new o2.default(A2(b3, `value`));
        } else {
          var x3 = { value: f4, source: v3, sourceIndex: _3 };
          A2(x3, `value`), m3 = new s2.default(x3);
        }
        n3.newNode(m3, e4), e4 = null;
      }), this.position++;
    }, t3.word = function(e4) {
      var t4 = this.nextToken;
      return t4 && this.content(t4) === `|` ? (this.position++, this.namespace()) : this.splitWord(e4);
    }, t3.loop = function() {
      for (; this.position < this.tokens.length; ) this.parse(true);
      return this.current._inferEndPosition(), this.root;
    }, t3.parse = function(e4) {
      switch (this.currToken[h2.FIELDS.TYPE]) {
        case g2.space:
          this.space();
          break;
        case g2.comment:
          this.comment();
          break;
        case g2.openParenthesis:
          this.parentheses();
          break;
        case g2.closeParenthesis:
          e4 && this.missingParenthesis();
          break;
        case g2.openSquare:
          this.attribute();
          break;
        case g2.dollar:
        case g2.caret:
        case g2.equals:
        case g2.word:
          this.word();
          break;
        case g2.colon:
          this.pseudo();
          break;
        case g2.comma:
          this.comma();
          break;
        case g2.asterisk:
          this.universal();
          break;
        case g2.ampersand:
          this.nesting();
          break;
        case g2.slash:
        case g2.combinator:
          this.combinator();
          break;
        case g2.str:
          this.string();
          break;
        case g2.closeSquare:
          this.missingSquareBracket();
        case g2.semicolon:
          this.missingBackslash();
        default:
          this.unexpected();
      }
    }, t3.expected = function(e4, t4, n3) {
      if (Array.isArray(e4)) {
        var r3 = e4.pop();
        e4 = e4.join(`, `) + ` or ` + r3;
      }
      var i3 = /^[aeiou]/.test(e4[0]) ? `an` : `a`;
      return n3 ? this.error(`Expected ` + i3 + ` ` + e4 + `, found "` + n3 + `" instead.`, { index: t4 }) : this.error(`Expected ` + i3 + ` ` + e4 + `.`, { index: t4 });
    }, t3.requiredSpace = function(e4) {
      return this.options.lossy ? ` ` : e4;
    }, t3.optionalSpace = function(e4) {
      return this.options.lossy ? `` : e4;
    }, t3.lossySpace = function(e4, t4) {
      return this.options.lossy ? t4 ? ` ` : `` : e4;
    }, t3.parseParenthesisToken = function(e4) {
      var t4 = this.content(e4);
      return e4[h2.FIELDS.TYPE] === g2.space ? this.requiredSpace(t4) : t4;
    }, t3.newNode = function(e4, t4) {
      return t4 && (/^ +$/.test(t4) && (this.options.lossy || (this.spaces = (this.spaces || ``) + t4), t4 = true), e4.namespace = t4, A2(e4, `namespace`)), this.spaces && (e4.spaces.before = this.spaces, this.spaces = ``), this.current.append(e4);
    }, t3.content = function(e4) {
      return e4 === void 0 && (e4 = this.currToken), this.css.slice(e4[h2.FIELDS.START_POS], e4[h2.FIELDS.END_POS]);
    }, t3.locateNextMeaningfulToken = function(e4) {
      e4 === void 0 && (e4 = this.position + 1);
      for (var t4 = e4; t4 < this.tokens.length; ) if (ee2[this.tokens[t4][h2.FIELDS.TYPE]]) {
        t4++;
        continue;
      } else return t4;
      return -1;
    }, T2(e3, [{ key: `currToken`, get: function() {
      return this.tokens[this.position];
    } }, { key: `nextToken`, get: function() {
      return this.tokens[this.position + 1];
    } }, { key: `prevToken`, get: function() {
      return this.tokens[this.position - 1];
    } }]), e3;
  }();
  exports.default = ae2, t2.exports = exports.default;
}), sT = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = r2(oT());
  function r2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  var i2 = function() {
    function e3(e4, t4) {
      this.func = e4 || function() {
      }, this.funcRes = null, this.options = t4;
    }
    var t3 = e3.prototype;
    return t3._shouldUpdateSelector = function(e4, t4) {
      t4 === void 0 && (t4 = {});
      var n3 = Object.assign({}, this.options, t4);
      return n3.updateSelector === false ? false : typeof e4 != `string`;
    }, t3._isLossy = function(e4) {
      e4 === void 0 && (e4 = {});
      var t4 = Object.assign({}, this.options, e4);
      return t4.lossless === false;
    }, t3._root = function(e4, t4) {
      t4 === void 0 && (t4 = {});
      var r3 = new n2.default(e4, this._parseOptions(t4));
      return r3.root;
    }, t3._parseOptions = function(e4) {
      return { lossy: this._isLossy(e4) };
    }, t3._run = function(e4, t4) {
      var n3 = this;
      return t4 === void 0 && (t4 = {}), new Promise(function(r3, i3) {
        try {
          var a2 = n3._root(e4, t4);
          Promise.resolve(n3.func(a2)).then(function(r4) {
            var i4 = void 0;
            return n3._shouldUpdateSelector(e4, t4) && (i4 = a2.toString(), e4.selector = i4), { transform: r4, root: a2, string: i4 };
          }).then(r3, i3);
        } catch (e5) {
          i3(e5);
          return;
        }
      });
    }, t3._runSync = function(e4, t4) {
      t4 === void 0 && (t4 = {});
      var n3 = this._root(e4, t4), r3 = this.func(n3);
      if (r3 && typeof r3.then == `function`) throw Error(`Selector processor returned a promise to a synchronous call.`);
      var i3 = void 0;
      return t4.updateSelector && typeof e4 != `string` && (i3 = n3.toString(), e4.selector = i3), { transform: r3, root: n3, string: i3 };
    }, t3.ast = function(e4, t4) {
      return this._run(e4, t4).then(function(e5) {
        return e5.root;
      });
    }, t3.astSync = function(e4, t4) {
      return this._runSync(e4, t4).root;
    }, t3.transform = function(e4, t4) {
      return this._run(e4, t4).then(function(e5) {
        return e5.transform;
      });
    }, t3.transformSync = function(e4, t4) {
      return this._runSync(e4, t4).transform;
    }, t3.process = function(e4, t4) {
      return this._run(e4, t4).then(function(e5) {
        return e5.string || e5.root.toString();
      });
    }, t3.processSync = function(e4, t4) {
      var n3 = this._runSync(e4, t4);
      return n3.string || n3.root.toString();
    }, e3;
  }();
  exports.default = i2, t2.exports = exports.default;
}), cT = e((exports) => {
  exports.__esModule = true, exports.universal = exports.tag = exports.string = exports.selector = exports.root = exports.pseudo = exports.nesting = exports.id = exports.comment = exports.combinator = exports.className = exports.attribute = void 0;
  var t2 = p2($w()), n2 = p2(Kw()), r2 = p2(tT()), i2 = p2(qw()), a2 = p2(Jw()), o2 = p2(nT()), s2 = p2(Qw()), c2 = p2(Ww()), l2 = p2(Gw()), u2 = p2(Zw()), d2 = p2(Xw()), f2 = p2(eT());
  function p2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  var m2 = function(e3) {
    return new t2.default(e3);
  };
  exports.attribute = m2;
  var h2 = function(e3) {
    return new n2.default(e3);
  };
  exports.className = h2;
  var g2 = function(e3) {
    return new r2.default(e3);
  };
  exports.combinator = g2;
  var _2 = function(e3) {
    return new i2.default(e3);
  };
  exports.comment = _2;
  var v2 = function(e3) {
    return new a2.default(e3);
  };
  exports.id = v2;
  var y2 = function(e3) {
    return new o2.default(e3);
  };
  exports.nesting = y2;
  var b2 = function(e3) {
    return new s2.default(e3);
  };
  exports.pseudo = b2;
  var x2 = function(e3) {
    return new c2.default(e3);
  };
  exports.root = x2;
  var S2 = function(e3) {
    return new l2.default(e3);
  };
  exports.selector = S2;
  var C2 = function(e3) {
    return new u2.default(e3);
  };
  exports.string = C2;
  var w2 = function(e3) {
    return new d2.default(e3);
  };
  exports.tag = w2;
  var T2 = function(e3) {
    return new f2.default(e3);
  };
  exports.universal = T2;
}), lT = e((exports) => {
  exports.__esModule = true, exports.isComment = exports.isCombinator = exports.isClassName = exports.isAttribute = void 0, exports.isContainer = b2, exports.isIdentifier = void 0, exports.isNamespace = x2, exports.isNesting = void 0, exports.isNode = i2, exports.isPseudo = void 0, exports.isPseudoClass = y2, exports.isPseudoElement = v2, exports.isUniversal = exports.isTag = exports.isString = exports.isSelector = exports.isRoot = void 0;
  var t2 = Q(), n2, r2 = (n2 = {}, n2[t2.ATTRIBUTE] = true, n2[t2.CLASS] = true, n2[t2.COMBINATOR] = true, n2[t2.COMMENT] = true, n2[t2.ID] = true, n2[t2.NESTING] = true, n2[t2.PSEUDO] = true, n2[t2.ROOT] = true, n2[t2.SELECTOR] = true, n2[t2.STRING] = true, n2[t2.TAG] = true, n2[t2.UNIVERSAL] = true, n2);
  function i2(e3) {
    return typeof e3 == `object` && r2[e3.type];
  }
  function a2(e3, t3) {
    return i2(t3) && t3.type === e3;
  }
  var o2 = a2.bind(null, t2.ATTRIBUTE);
  exports.isAttribute = o2;
  var s2 = a2.bind(null, t2.CLASS);
  exports.isClassName = s2;
  var c2 = a2.bind(null, t2.COMBINATOR);
  exports.isCombinator = c2;
  var l2 = a2.bind(null, t2.COMMENT);
  exports.isComment = l2;
  var u2 = a2.bind(null, t2.ID);
  exports.isIdentifier = u2;
  var d2 = a2.bind(null, t2.NESTING);
  exports.isNesting = d2;
  var f2 = a2.bind(null, t2.PSEUDO);
  exports.isPseudo = f2;
  var p2 = a2.bind(null, t2.ROOT);
  exports.isRoot = p2;
  var m2 = a2.bind(null, t2.SELECTOR);
  exports.isSelector = m2;
  var h2 = a2.bind(null, t2.STRING);
  exports.isString = h2;
  var g2 = a2.bind(null, t2.TAG);
  exports.isTag = g2;
  var _2 = a2.bind(null, t2.UNIVERSAL);
  exports.isUniversal = _2;
  function v2(e3) {
    return f2(e3) && e3.value && (e3.value.startsWith(`::`) || e3.value.toLowerCase() === `:before` || e3.value.toLowerCase() === `:after` || e3.value.toLowerCase() === `:first-letter` || e3.value.toLowerCase() === `:first-line`);
  }
  function y2(e3) {
    return f2(e3) && !v2(e3);
  }
  function b2(e3) {
    return !!(i2(e3) && e3.walk);
  }
  function x2(e3) {
    return o2(e3) || g2(e3);
  }
}), uT = e((exports) => {
  exports.__esModule = true;
  var t2 = Q();
  Object.keys(t2).forEach(function(n3) {
    n3 === `default` || n3 === `__esModule` || n3 in exports && exports[n3] === t2[n3] || (exports[n3] = t2[n3]);
  });
  var n2 = cT();
  Object.keys(n2).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in exports && exports[t3] === n2[t3] || (exports[t3] = n2[t3]);
  });
  var r2 = lT();
  Object.keys(r2).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in exports && exports[t3] === r2[t3] || (exports[t3] = r2[t3]);
  });
}), dT = e((exports, t2) => {
  exports.__esModule = true, exports.default = void 0;
  var n2 = o2(sT()), r2 = a2(uT());
  function i2(e3) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (i2 = function(e4) {
      return e4 ? n3 : t3;
    })(e3);
  }
  function a2(e3, t3) {
    if (!t3 && e3 && e3.__esModule) return e3;
    if (e3 === null || typeof e3 != `object` && typeof e3 != `function`) return { default: e3 };
    var n3 = i2(t3);
    if (n3 && n3.has(e3)) return n3.get(e3);
    var r3 = {}, a3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o3 in e3) if (o3 !== `default` && Object.prototype.hasOwnProperty.call(e3, o3)) {
      var s3 = a3 ? Object.getOwnPropertyDescriptor(e3, o3) : null;
      s3 && (s3.get || s3.set) ? Object.defineProperty(r3, o3, s3) : r3[o3] = e3[o3];
    }
    return r3.default = e3, n3 && n3.set(e3, r3), r3;
  }
  function o2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  var s2 = function(e3) {
    return new n2.default(e3);
  };
  Object.assign(s2, r2), delete s2.__esModule;
  var c2 = s2;
  exports.default = c2, t2.exports = exports.default;
}), fT = e((exports, t2) => {
  let { AtRule: n2, Rule: r2 } = l(), i2 = dT();
  function a2(e3, t3) {
    let n3;
    try {
      i2((e4) => {
        n3 = e4;
      }).processSync(e3);
    } catch (n4) {
      throw e3.includes(`:`) ? t3 ? t3.error(`Missed semicolon`) : n4 : t3 ? t3.error(n4.message) : n4;
    }
    return n3.at(0);
  }
  function o2(e3, t3) {
    let n3 = false;
    return e3.each((e4) => {
      if (e4.type === `nesting`) {
        let r3 = t3.clone({});
        e4.value === `&` ? e4.replaceWith(r3) : e4.replaceWith(a2(e4.value.replace(`&`, r3.toString()))), n3 = true;
      } else `nodes` in e4 && e4.nodes && o2(e4, t3) && (n3 = true);
    }), n3;
  }
  function s2(e3, t3) {
    let n3 = [];
    return e3.selectors.forEach((r3) => {
      let s3 = a2(r3, e3);
      t3.selectors.forEach((e4) => {
        if (!e4) return;
        let r4 = a2(e4, t3), c3 = o2(r4, s3);
        c3 || (r4.prepend(i2.combinator({ value: ` ` })), r4.prepend(s3.clone({}))), n3.push(r4.toString());
      });
    }), n3;
  }
  function c2(e3, t3) {
    let n3 = e3.prev();
    for (t3.after(e3); n3 && n3.type === `comment`; ) {
      let e4 = n3.prev();
      t3.after(n3), n3 = e4;
    }
    return e3;
  }
  function u2(e3) {
    return function t3(n3, r3, i3, a3 = i3) {
      let o3 = [];
      if (r3.each((c3) => {
        c3.type === `rule` && i3 ? a3 && (c3.selectors = s2(n3, c3)) : c3.type === `atrule` && c3.nodes ? e3[c3.name] ? t3(n3, c3, a3) : r3[g2] !== false && o3.push(c3) : o3.push(c3);
      }), i3 && o3.length) {
        let e4 = n3.clone({ nodes: [] });
        for (let t4 of o3) e4.append(t4);
        r3.prepend(e4);
      }
    };
  }
  function d2(e3, t3, n3) {
    let i3 = new r2({ nodes: [], selector: e3 });
    return i3.append(t3), n3.after(i3), i3;
  }
  function f2(e3, t3) {
    let n3 = {};
    for (let t4 of e3) n3[t4] = true;
    if (t3) for (let e4 of t3) n3[e4.replace(/^@/, ``)] = true;
    return n3;
  }
  function p2(e3) {
    e3 = e3.trim();
    let t3 = e3.match(/^\((.*)\)$/);
    if (!t3) return { selector: e3, type: `basic` };
    let n3 = t3[1].match(/^(with(?:out)?):(.+)$/);
    if (n3) {
      let e4 = n3[1] === `with`, t4 = Object.fromEntries(n3[2].trim().split(/\s+/).map((e5) => [e5, true]));
      if (e4 && t4.all) return { type: `noop` };
      let r3 = (e5) => !!t4[e5];
      return t4.all ? r3 = () => true : e4 && (r3 = (e5) => e5 === `all` ? false : !t4[e5]), { escapes: r3, type: `withrules` };
    }
    return { type: `unknown` };
  }
  function m2(e3) {
    let t3 = [], r3 = e3.parent;
    for (; r3 && r3 instanceof n2; ) t3.push(r3), r3 = r3.parent;
    return t3;
  }
  function h2(e3) {
    let t3 = e3[_2];
    if (!t3) e3.after(e3.nodes);
    else {
      let n3 = e3.nodes, r3, i3 = -1, a3, o3, s3, c3 = m2(e3);
      if (c3.forEach((e4, n4) => {
        if (t3(e4.name)) r3 = e4, i3 = n4, o3 = s3;
        else {
          let t4 = s3;
          s3 = e4.clone({ nodes: [] }), t4 && s3.append(t4), a3 || (a3 = s3);
        }
      }), !r3) e3.after(n3);
      else if (!o3) r3.after(n3);
      else {
        let e4 = a3;
        e4.append(n3), r3.after(o3);
      }
      if (e3.next() && r3) {
        let t4;
        c3.slice(0, i3 + 1).forEach((n4, r4, i4) => {
          let a4 = t4;
          t4 = n4.clone({ nodes: [] }), a4 && t4.append(a4);
          let o4 = [], s4 = i4[r4 - 1] || e3, c4 = s4.next();
          for (; c4; ) o4.push(c4), c4 = c4.next();
          t4.append(o4);
        }), t4 && (o3 || n3[n3.length - 1]).after(t4);
      }
    }
    e3.remove();
  }
  let g2 = Symbol(`rootRuleMergeSel`), _2 = Symbol(`rootRuleEscapes`);
  function v2(e3) {
    let { params: t3 } = e3, { escapes: n3, selector: i3, type: a3 } = p2(t3);
    if (a3 === `unknown`) throw e3.error(`Unknown @${e3.name} parameter ${JSON.stringify(t3)}`);
    if (a3 === `basic` && i3) {
      let t4 = new r2({ nodes: e3.nodes, selector: i3 });
      e3.removeAll(), e3.append(t4);
    }
    e3[_2] = n3, e3[g2] = n3 ? !n3(`all`) : a3 === `noop`;
  }
  let y2 = Symbol(`hasRootRule`);
  t2.exports = (e3 = {}) => {
    let t3 = f2([`media`, `supports`, `layer`, `container`, `starting-style`], e3.bubble), n3 = u2(t3), r3 = f2([`document`, `font-face`, `keyframes`, `-webkit-keyframes`, `-moz-keyframes`], e3.unwrap), i3 = (e3.rootRuleName || `at-root`).replace(/^@/, ``), a3 = e3.preserveEmpty;
    return { Once(e4) {
      e4.walkAtRules(i3, (t4) => {
        v2(t4), e4[y2] = true;
      });
    }, postcssPlugin: `postcss-nested`, RootExit(e4) {
      e4[y2] && (e4.walkAtRules(i3, h2), e4[y2] = false);
    }, Rule(e4) {
      let o3 = false, l2 = e4, u3 = false, f3 = [];
      e4.each((a4) => {
        a4.type === `rule` ? (f3.length && (l2 = d2(e4.selector, f3, l2), f3 = []), u3 = true, o3 = true, a4.selectors = s2(e4, a4), l2 = c2(a4, l2)) : a4.type === `atrule` ? (f3.length && (l2 = d2(e4.selector, f3, l2), f3 = []), a4.name === i3 ? (o3 = true, n3(e4, a4, true, a4[g2]), l2 = c2(a4, l2)) : t3[a4.name] ? (u3 = true, o3 = true, n3(e4, a4, true), l2 = c2(a4, l2)) : r3[a4.name] ? (u3 = true, o3 = true, n3(e4, a4, false), l2 = c2(a4, l2)) : u3 && f3.push(a4)) : a4.type === `decl` && u3 && f3.push(a4);
      }), f3.length && (l2 = d2(e4.selector, f3, l2)), o3 && a3 !== true && (e4.raws.semicolon = true, e4.nodes.length === 0 && e4.remove());
    } };
  }, t2.exports.postcss = true;
}), pT = Object.create, mT = Object.defineProperty, hT = Object.getOwnPropertyDescriptor, gT = Object.getOwnPropertyNames, _T = Object.getPrototypeOf, vT = Object.prototype.hasOwnProperty, yT = (e3, t2) => () => (t2 || e3((t2 = { exports: {} }).exports, t2), t2.exports), bT = (e3, t2, n2, r2) => {
  if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of gT(t2)) !vT.call(e3, i2) && i2 !== n2 && mT(e3, i2, { get: () => t2[i2], enumerable: !(r2 = hT(t2, i2)) || r2.enumerable });
  return e3;
}, xT = (e3, t2, n2) => (n2 = e3 == null ? {} : pT(_T(e3)), bT(t2 || !e3 || !e3.__esModule ? mT(n2, `default`, { value: e3, enumerable: true }) : n2, e3)), ST = yT((e3, t2) => {
  t2.exports = { content: [], presets: [], darkMode: `media`, theme: { accentColor: ({ theme: e4 }) => ({ ...e4(`colors`), auto: `auto` }), animation: { none: `none`, spin: `spin 1s linear infinite`, ping: `ping 1s cubic-bezier(0, 0, 0.2, 1) infinite`, pulse: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`, bounce: `bounce 1s infinite` }, aria: { busy: `busy="true"`, checked: `checked="true"`, disabled: `disabled="true"`, expanded: `expanded="true"`, hidden: `hidden="true"`, pressed: `pressed="true"`, readonly: `readonly="true"`, required: `required="true"`, selected: `selected="true"` }, aspectRatio: { auto: `auto`, square: `1 / 1`, video: `16 / 9` }, backdropBlur: ({ theme: e4 }) => e4(`blur`), backdropBrightness: ({ theme: e4 }) => e4(`brightness`), backdropContrast: ({ theme: e4 }) => e4(`contrast`), backdropGrayscale: ({ theme: e4 }) => e4(`grayscale`), backdropHueRotate: ({ theme: e4 }) => e4(`hueRotate`), backdropInvert: ({ theme: e4 }) => e4(`invert`), backdropOpacity: ({ theme: e4 }) => e4(`opacity`), backdropSaturate: ({ theme: e4 }) => e4(`saturate`), backdropSepia: ({ theme: e4 }) => e4(`sepia`), backgroundColor: ({ theme: e4 }) => e4(`colors`), backgroundImage: { none: `none`, "gradient-to-t": `linear-gradient(to top, var(--tw-gradient-stops))`, "gradient-to-tr": `linear-gradient(to top right, var(--tw-gradient-stops))`, "gradient-to-r": `linear-gradient(to right, var(--tw-gradient-stops))`, "gradient-to-br": `linear-gradient(to bottom right, var(--tw-gradient-stops))`, "gradient-to-b": `linear-gradient(to bottom, var(--tw-gradient-stops))`, "gradient-to-bl": `linear-gradient(to bottom left, var(--tw-gradient-stops))`, "gradient-to-l": `linear-gradient(to left, var(--tw-gradient-stops))`, "gradient-to-tl": `linear-gradient(to top left, var(--tw-gradient-stops))` }, backgroundOpacity: ({ theme: e4 }) => e4(`opacity`), backgroundPosition: { bottom: `bottom`, center: `center`, left: `left`, "left-bottom": `left bottom`, "left-top": `left top`, right: `right`, "right-bottom": `right bottom`, "right-top": `right top`, top: `top` }, backgroundSize: { auto: `auto`, cover: `cover`, contain: `contain` }, blur: { 0: `0`, none: ``, sm: `4px`, DEFAULT: `8px`, md: `12px`, lg: `16px`, xl: `24px`, "2xl": `40px`, "3xl": `64px` }, borderColor: ({ theme: e4 }) => ({ ...e4(`colors`), DEFAULT: e4(`colors.gray.200`, `currentColor`) }), borderOpacity: ({ theme: e4 }) => e4(`opacity`), borderRadius: { none: `0px`, sm: `0.125rem`, DEFAULT: `0.25rem`, md: `0.375rem`, lg: `0.5rem`, xl: `0.75rem`, "2xl": `1rem`, "3xl": `1.5rem`, full: `9999px` }, borderSpacing: ({ theme: e4 }) => ({ ...e4(`spacing`) }), borderWidth: { DEFAULT: `1px`, 0: `0px`, 2: `2px`, 4: `4px`, 8: `8px` }, boxShadow: { sm: `0 1px 2px 0 rgb(0 0 0 / 0.05)`, DEFAULT: `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`, md: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`, lg: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`, xl: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`, "2xl": `0 25px 50px -12px rgb(0 0 0 / 0.25)`, inner: `inset 0 2px 4px 0 rgb(0 0 0 / 0.05)`, none: `none` }, boxShadowColor: ({ theme: e4 }) => e4(`colors`), brightness: { 0: `0`, 50: `.5`, 75: `.75`, 90: `.9`, 95: `.95`, 100: `1`, 105: `1.05`, 110: `1.1`, 125: `1.25`, 150: `1.5`, 200: `2` }, caretColor: ({ theme: e4 }) => e4(`colors`), colors: ({ colors: e4 }) => ({ inherit: e4.inherit, current: e4.current, transparent: e4.transparent, black: e4.black, white: e4.white, slate: e4.slate, gray: e4.gray, zinc: e4.zinc, neutral: e4.neutral, stone: e4.stone, red: e4.red, orange: e4.orange, amber: e4.amber, yellow: e4.yellow, lime: e4.lime, green: e4.green, emerald: e4.emerald, teal: e4.teal, cyan: e4.cyan, sky: e4.sky, blue: e4.blue, indigo: e4.indigo, violet: e4.violet, purple: e4.purple, fuchsia: e4.fuchsia, pink: e4.pink, rose: e4.rose }), columns: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, "3xs": `16rem`, "2xs": `18rem`, xs: `20rem`, sm: `24rem`, md: `28rem`, lg: `32rem`, xl: `36rem`, "2xl": `42rem`, "3xl": `48rem`, "4xl": `56rem`, "5xl": `64rem`, "6xl": `72rem`, "7xl": `80rem` }, container: {}, content: { none: `none` }, contrast: { 0: `0`, 50: `.5`, 75: `.75`, 100: `1`, 125: `1.25`, 150: `1.5`, 200: `2` }, cursor: { auto: `auto`, default: `default`, pointer: `pointer`, wait: `wait`, text: `text`, move: `move`, help: `help`, "not-allowed": `not-allowed`, none: `none`, "context-menu": `context-menu`, progress: `progress`, cell: `cell`, crosshair: `crosshair`, "vertical-text": `vertical-text`, alias: `alias`, copy: `copy`, "no-drop": `no-drop`, grab: `grab`, grabbing: `grabbing`, "all-scroll": `all-scroll`, "col-resize": `col-resize`, "row-resize": `row-resize`, "n-resize": `n-resize`, "e-resize": `e-resize`, "s-resize": `s-resize`, "w-resize": `w-resize`, "ne-resize": `ne-resize`, "nw-resize": `nw-resize`, "se-resize": `se-resize`, "sw-resize": `sw-resize`, "ew-resize": `ew-resize`, "ns-resize": `ns-resize`, "nesw-resize": `nesw-resize`, "nwse-resize": `nwse-resize`, "zoom-in": `zoom-in`, "zoom-out": `zoom-out` }, divideColor: ({ theme: e4 }) => e4(`borderColor`), divideOpacity: ({ theme: e4 }) => e4(`borderOpacity`), divideWidth: ({ theme: e4 }) => e4(`borderWidth`), dropShadow: { sm: `0 1px 1px rgb(0 0 0 / 0.05)`, DEFAULT: [`0 1px 2px rgb(0 0 0 / 0.1)`, `0 1px 1px rgb(0 0 0 / 0.06)`], md: [`0 4px 3px rgb(0 0 0 / 0.07)`, `0 2px 2px rgb(0 0 0 / 0.06)`], lg: [`0 10px 8px rgb(0 0 0 / 0.04)`, `0 4px 3px rgb(0 0 0 / 0.1)`], xl: [`0 20px 13px rgb(0 0 0 / 0.03)`, `0 8px 5px rgb(0 0 0 / 0.08)`], "2xl": `0 25px 25px rgb(0 0 0 / 0.15)`, none: `0 0 #0000` }, fill: ({ theme: e4 }) => ({ none: `none`, ...e4(`colors`) }), flex: { 1: `1 1 0%`, auto: `1 1 auto`, initial: `0 1 auto`, none: `none` }, flexBasis: ({ theme: e4 }) => ({ auto: `auto`, ...e4(`spacing`), "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, "1/12": `8.333333%`, "2/12": `16.666667%`, "3/12": `25%`, "4/12": `33.333333%`, "5/12": `41.666667%`, "6/12": `50%`, "7/12": `58.333333%`, "8/12": `66.666667%`, "9/12": `75%`, "10/12": `83.333333%`, "11/12": `91.666667%`, full: `100%` }), flexGrow: { 0: `0`, DEFAULT: `1` }, flexShrink: { 0: `0`, DEFAULT: `1` }, fontFamily: { sans: [`ui-sans-serif`, `system-ui`, `sans-serif`, `"Apple Color Emoji"`, `"Segoe UI Emoji"`, `"Segoe UI Symbol"`, `"Noto Color Emoji"`], serif: [`ui-serif`, `Georgia`, `Cambria`, `"Times New Roman"`, `Times`, `serif`], mono: [`ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `"Liberation Mono"`, `"Courier New"`, `monospace`] }, fontSize: { xs: [`0.75rem`, { lineHeight: `1rem` }], sm: [`0.875rem`, { lineHeight: `1.25rem` }], base: [`1rem`, { lineHeight: `1.5rem` }], lg: [`1.125rem`, { lineHeight: `1.75rem` }], xl: [`1.25rem`, { lineHeight: `1.75rem` }], "2xl": [`1.5rem`, { lineHeight: `2rem` }], "3xl": [`1.875rem`, { lineHeight: `2.25rem` }], "4xl": [`2.25rem`, { lineHeight: `2.5rem` }], "5xl": [`3rem`, { lineHeight: `1` }], "6xl": [`3.75rem`, { lineHeight: `1` }], "7xl": [`4.5rem`, { lineHeight: `1` }], "8xl": [`6rem`, { lineHeight: `1` }], "9xl": [`8rem`, { lineHeight: `1` }] }, fontWeight: { thin: `100`, extralight: `200`, light: `300`, normal: `400`, medium: `500`, semibold: `600`, bold: `700`, extrabold: `800`, black: `900` }, gap: ({ theme: e4 }) => e4(`spacing`), gradientColorStops: ({ theme: e4 }) => e4(`colors`), gradientColorStopPositions: { "0%": `0%`, "5%": `5%`, "10%": `10%`, "15%": `15%`, "20%": `20%`, "25%": `25%`, "30%": `30%`, "35%": `35%`, "40%": `40%`, "45%": `45%`, "50%": `50%`, "55%": `55%`, "60%": `60%`, "65%": `65%`, "70%": `70%`, "75%": `75%`, "80%": `80%`, "85%": `85%`, "90%": `90%`, "95%": `95%`, "100%": `100%` }, grayscale: { 0: `0`, DEFAULT: `100%` }, gridAutoColumns: { auto: `auto`, min: `min-content`, max: `max-content`, fr: `minmax(0, 1fr)` }, gridAutoRows: { auto: `auto`, min: `min-content`, max: `max-content`, fr: `minmax(0, 1fr)` }, gridColumn: { auto: `auto`, "span-1": `span 1 / span 1`, "span-2": `span 2 / span 2`, "span-3": `span 3 / span 3`, "span-4": `span 4 / span 4`, "span-5": `span 5 / span 5`, "span-6": `span 6 / span 6`, "span-7": `span 7 / span 7`, "span-8": `span 8 / span 8`, "span-9": `span 9 / span 9`, "span-10": `span 10 / span 10`, "span-11": `span 11 / span 11`, "span-12": `span 12 / span 12`, "span-full": `1 / -1` }, gridColumnEnd: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13` }, gridColumnStart: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13` }, gridRow: { auto: `auto`, "span-1": `span 1 / span 1`, "span-2": `span 2 / span 2`, "span-3": `span 3 / span 3`, "span-4": `span 4 / span 4`, "span-5": `span 5 / span 5`, "span-6": `span 6 / span 6`, "span-7": `span 7 / span 7`, "span-8": `span 8 / span 8`, "span-9": `span 9 / span 9`, "span-10": `span 10 / span 10`, "span-11": `span 11 / span 11`, "span-12": `span 12 / span 12`, "span-full": `1 / -1` }, gridRowEnd: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13` }, gridRowStart: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13` }, gridTemplateColumns: { none: `none`, subgrid: `subgrid`, 1: `repeat(1, minmax(0, 1fr))`, 2: `repeat(2, minmax(0, 1fr))`, 3: `repeat(3, minmax(0, 1fr))`, 4: `repeat(4, minmax(0, 1fr))`, 5: `repeat(5, minmax(0, 1fr))`, 6: `repeat(6, minmax(0, 1fr))`, 7: `repeat(7, minmax(0, 1fr))`, 8: `repeat(8, minmax(0, 1fr))`, 9: `repeat(9, minmax(0, 1fr))`, 10: `repeat(10, minmax(0, 1fr))`, 11: `repeat(11, minmax(0, 1fr))`, 12: `repeat(12, minmax(0, 1fr))` }, gridTemplateRows: { none: `none`, subgrid: `subgrid`, 1: `repeat(1, minmax(0, 1fr))`, 2: `repeat(2, minmax(0, 1fr))`, 3: `repeat(3, minmax(0, 1fr))`, 4: `repeat(4, minmax(0, 1fr))`, 5: `repeat(5, minmax(0, 1fr))`, 6: `repeat(6, minmax(0, 1fr))`, 7: `repeat(7, minmax(0, 1fr))`, 8: `repeat(8, minmax(0, 1fr))`, 9: `repeat(9, minmax(0, 1fr))`, 10: `repeat(10, minmax(0, 1fr))`, 11: `repeat(11, minmax(0, 1fr))`, 12: `repeat(12, minmax(0, 1fr))` }, height: ({ theme: e4 }) => ({ auto: `auto`, ...e4(`spacing`), "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, full: `100%`, screen: `100vh`, svh: `100svh`, lvh: `100lvh`, dvh: `100dvh`, min: `min-content`, max: `max-content`, fit: `fit-content` }), hueRotate: { 0: `0deg`, 15: `15deg`, 30: `30deg`, 60: `60deg`, 90: `90deg`, 180: `180deg` }, inset: ({ theme: e4 }) => ({ auto: `auto`, ...e4(`spacing`), "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, full: `100%` }), invert: { 0: `0`, DEFAULT: `100%` }, keyframes: { spin: { to: { transform: `rotate(360deg)` } }, ping: { "75%, 100%": { transform: `scale(2)`, opacity: `0` } }, pulse: { "50%": { opacity: `.5` } }, bounce: { "0%, 100%": { transform: `translateY(-25%)`, animationTimingFunction: `cubic-bezier(0.8,0,1,1)` }, "50%": { transform: `none`, animationTimingFunction: `cubic-bezier(0,0,0.2,1)` } } }, letterSpacing: { tighter: `-0.05em`, tight: `-0.025em`, normal: `0em`, wide: `0.025em`, wider: `0.05em`, widest: `0.1em` }, lineHeight: { none: `1`, tight: `1.25`, snug: `1.375`, normal: `1.5`, relaxed: `1.625`, loose: `2`, 3: `.75rem`, 4: `1rem`, 5: `1.25rem`, 6: `1.5rem`, 7: `1.75rem`, 8: `2rem`, 9: `2.25rem`, 10: `2.5rem` }, listStyleType: { none: `none`, disc: `disc`, decimal: `decimal` }, listStyleImage: { none: `none` }, margin: ({ theme: e4 }) => ({ auto: `auto`, ...e4(`spacing`) }), lineClamp: { 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6` }, maxHeight: ({ theme: e4 }) => ({ ...e4(`spacing`), none: `none`, full: `100%`, screen: `100vh`, svh: `100svh`, lvh: `100lvh`, dvh: `100dvh`, min: `min-content`, max: `max-content`, fit: `fit-content` }), maxWidth: ({ theme: e4, breakpoints: t3 }) => ({ ...e4(`spacing`), none: `none`, xs: `20rem`, sm: `24rem`, md: `28rem`, lg: `32rem`, xl: `36rem`, "2xl": `42rem`, "3xl": `48rem`, "4xl": `56rem`, "5xl": `64rem`, "6xl": `72rem`, "7xl": `80rem`, full: `100%`, min: `min-content`, max: `max-content`, fit: `fit-content`, prose: `65ch`, ...t3(e4(`screens`)) }), minHeight: ({ theme: e4 }) => ({ ...e4(`spacing`), full: `100%`, screen: `100vh`, svh: `100svh`, lvh: `100lvh`, dvh: `100dvh`, min: `min-content`, max: `max-content`, fit: `fit-content` }), minWidth: ({ theme: e4 }) => ({ ...e4(`spacing`), full: `100%`, min: `min-content`, max: `max-content`, fit: `fit-content` }), objectPosition: { bottom: `bottom`, center: `center`, left: `left`, "left-bottom": `left bottom`, "left-top": `left top`, right: `right`, "right-bottom": `right bottom`, "right-top": `right top`, top: `top` }, opacity: { 0: `0`, 5: `0.05`, 10: `0.1`, 15: `0.15`, 20: `0.2`, 25: `0.25`, 30: `0.3`, 35: `0.35`, 40: `0.4`, 45: `0.45`, 50: `0.5`, 55: `0.55`, 60: `0.6`, 65: `0.65`, 70: `0.7`, 75: `0.75`, 80: `0.8`, 85: `0.85`, 90: `0.9`, 95: `0.95`, 100: `1` }, order: { first: `-9999`, last: `9999`, none: `0`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12` }, outlineColor: ({ theme: e4 }) => e4(`colors`), outlineOffset: { 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px` }, outlineWidth: { 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px` }, padding: ({ theme: e4 }) => e4(`spacing`), placeholderColor: ({ theme: e4 }) => e4(`colors`), placeholderOpacity: ({ theme: e4 }) => e4(`opacity`), ringColor: ({ theme: e4 }) => ({ DEFAULT: e4(`colors.blue.500`, `#3b82f6`), ...e4(`colors`) }), ringOffsetColor: ({ theme: e4 }) => e4(`colors`), ringOffsetWidth: { 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px` }, ringOpacity: ({ theme: e4 }) => ({ DEFAULT: `0.5`, ...e4(`opacity`) }), ringWidth: { DEFAULT: `3px`, 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px` }, rotate: { 0: `0deg`, 1: `1deg`, 2: `2deg`, 3: `3deg`, 6: `6deg`, 12: `12deg`, 45: `45deg`, 90: `90deg`, 180: `180deg` }, saturate: { 0: `0`, 50: `.5`, 100: `1`, 150: `1.5`, 200: `2` }, scale: { 0: `0`, 50: `.5`, 75: `.75`, 90: `.9`, 95: `.95`, 100: `1`, 105: `1.05`, 110: `1.1`, 125: `1.25`, 150: `1.5` }, screens: { sm: `640px`, md: `768px`, lg: `1024px`, xl: `1280px`, "2xl": `1536px` }, scrollMargin: ({ theme: e4 }) => ({ ...e4(`spacing`) }), scrollPadding: ({ theme: e4 }) => e4(`spacing`), sepia: { 0: `0`, DEFAULT: `100%` }, skew: { 0: `0deg`, 1: `1deg`, 2: `2deg`, 3: `3deg`, 6: `6deg`, 12: `12deg` }, space: ({ theme: e4 }) => ({ ...e4(`spacing`) }), spacing: { px: `1px`, 0: `0px`, 0.5: `0.125rem`, 1: `0.25rem`, 1.5: `0.375rem`, 2: `0.5rem`, 2.5: `0.625rem`, 3: `0.75rem`, 3.5: `0.875rem`, 4: `1rem`, 5: `1.25rem`, 6: `1.5rem`, 7: `1.75rem`, 8: `2rem`, 9: `2.25rem`, 10: `2.5rem`, 11: `2.75rem`, 12: `3rem`, 14: `3.5rem`, 16: `4rem`, 20: `5rem`, 24: `6rem`, 28: `7rem`, 32: `8rem`, 36: `9rem`, 40: `10rem`, 44: `11rem`, 48: `12rem`, 52: `13rem`, 56: `14rem`, 60: `15rem`, 64: `16rem`, 72: `18rem`, 80: `20rem`, 96: `24rem` }, stroke: ({ theme: e4 }) => ({ none: `none`, ...e4(`colors`) }), strokeWidth: { 0: `0`, 1: `1`, 2: `2` }, supports: {}, data: {}, textColor: ({ theme: e4 }) => e4(`colors`), textDecorationColor: ({ theme: e4 }) => e4(`colors`), textDecorationThickness: { auto: `auto`, "from-font": `from-font`, 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px` }, textIndent: ({ theme: e4 }) => ({ ...e4(`spacing`) }), textOpacity: ({ theme: e4 }) => e4(`opacity`), textUnderlineOffset: { auto: `auto`, 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px` }, transformOrigin: { center: `center`, top: `top`, "top-right": `top right`, right: `right`, "bottom-right": `bottom right`, bottom: `bottom`, "bottom-left": `bottom left`, left: `left`, "top-left": `top left` }, transitionDelay: { 0: `0s`, 75: `75ms`, 100: `100ms`, 150: `150ms`, 200: `200ms`, 300: `300ms`, 500: `500ms`, 700: `700ms`, 1e3: `1000ms` }, transitionDuration: { DEFAULT: `150ms`, 0: `0s`, 75: `75ms`, 100: `100ms`, 150: `150ms`, 200: `200ms`, 300: `300ms`, 500: `500ms`, 700: `700ms`, 1e3: `1000ms` }, transitionProperty: { none: `none`, all: `all`, DEFAULT: `color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter`, colors: `color, background-color, border-color, text-decoration-color, fill, stroke`, opacity: `opacity`, shadow: `box-shadow`, transform: `transform` }, transitionTimingFunction: { DEFAULT: `cubic-bezier(0.4, 0, 0.2, 1)`, linear: `linear`, in: `cubic-bezier(0.4, 0, 1, 1)`, out: `cubic-bezier(0, 0, 0.2, 1)`, "in-out": `cubic-bezier(0.4, 0, 0.2, 1)` }, translate: ({ theme: e4 }) => ({ ...e4(`spacing`), "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, full: `100%` }), size: ({ theme: e4 }) => ({ auto: `auto`, ...e4(`spacing`), "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, "1/12": `8.333333%`, "2/12": `16.666667%`, "3/12": `25%`, "4/12": `33.333333%`, "5/12": `41.666667%`, "6/12": `50%`, "7/12": `58.333333%`, "8/12": `66.666667%`, "9/12": `75%`, "10/12": `83.333333%`, "11/12": `91.666667%`, full: `100%`, min: `min-content`, max: `max-content`, fit: `fit-content` }), width: ({ theme: e4 }) => ({ auto: `auto`, ...e4(`spacing`), "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, "1/12": `8.333333%`, "2/12": `16.666667%`, "3/12": `25%`, "4/12": `33.333333%`, "5/12": `41.666667%`, "6/12": `50%`, "7/12": `58.333333%`, "8/12": `66.666667%`, "9/12": `75%`, "10/12": `83.333333%`, "11/12": `91.666667%`, full: `100%`, screen: `100vw`, svw: `100svw`, lvw: `100lvw`, dvw: `100dvw`, min: `min-content`, max: `max-content`, fit: `fit-content` }), willChange: { auto: `auto`, scroll: `scroll-position`, contents: `contents`, transform: `transform` }, zIndex: { auto: `auto`, 0: `0`, 10: `10`, 20: `20`, 30: `30`, 40: `40`, 50: `50` } }, plugins: [] };
});
function CT(e3) {
  if (e3 = `${e3}`, e3 === `0`) return `0`;
  if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(e3)) return e3.replace(/^[+-]?/, (e4) => e4 === `-` ? `` : `-`);
  let t2 = [`var`, `calc`, `min`, `max`, `clamp`];
  for (let n2 of t2) if (e3.includes(`${n2}(`)) return `calc(${e3} * -1)`;
}
var wT = `preflight.container.accessibility.pointerEvents.visibility.position.inset.isolation.zIndex.order.gridColumn.gridColumnStart.gridColumnEnd.gridRow.gridRowStart.gridRowEnd.float.clear.margin.boxSizing.lineClamp.display.aspectRatio.size.height.maxHeight.minHeight.width.minWidth.maxWidth.flex.flexShrink.flexGrow.flexBasis.tableLayout.captionSide.borderCollapse.borderSpacing.transformOrigin.translate.rotate.skew.scale.transform.animation.cursor.touchAction.userSelect.resize.scrollSnapType.scrollSnapAlign.scrollSnapStop.scrollMargin.scrollPadding.listStylePosition.listStyleType.listStyleImage.appearance.columns.breakBefore.breakInside.breakAfter.gridAutoColumns.gridAutoFlow.gridAutoRows.gridTemplateColumns.gridTemplateRows.flexDirection.flexWrap.placeContent.placeItems.alignContent.alignItems.justifyContent.justifyItems.gap.space.divideWidth.divideStyle.divideColor.divideOpacity.placeSelf.alignSelf.justifySelf.overflow.overscrollBehavior.scrollBehavior.textOverflow.hyphens.whitespace.textWrap.wordBreak.borderRadius.borderWidth.borderStyle.borderColor.borderOpacity.backgroundColor.backgroundOpacity.backgroundImage.gradientColorStops.boxDecorationBreak.backgroundSize.backgroundAttachment.backgroundClip.backgroundPosition.backgroundRepeat.backgroundOrigin.fill.stroke.strokeWidth.objectFit.objectPosition.padding.textAlign.textIndent.verticalAlign.fontFamily.fontSize.fontWeight.textTransform.fontStyle.fontVariantNumeric.lineHeight.letterSpacing.textColor.textOpacity.textDecoration.textDecorationColor.textDecorationStyle.textDecorationThickness.textUnderlineOffset.fontSmoothing.placeholderColor.placeholderOpacity.caretColor.accentColor.opacity.backgroundBlendMode.mixBlendMode.boxShadow.boxShadowColor.outlineStyle.outlineWidth.outlineOffset.outlineColor.ringWidth.ringColor.ringOpacity.ringOffsetWidth.ringOffsetColor.blur.brightness.contrast.dropShadow.grayscale.hueRotate.invert.saturate.sepia.filter.backdropBlur.backdropBrightness.backdropContrast.backdropGrayscale.backdropHueRotate.backdropInvert.backdropOpacity.backdropSaturate.backdropSepia.backdropFilter.transitionProperty.transitionDelay.transitionDuration.transitionTimingFunction.willChange.contain.content.forcedColorAdjust`.split(`.`);
function TT(e3, t2) {
  return e3 === void 0 ? t2 : Array.isArray(e3) ? e3 : [...new Set(t2.filter((t3) => e3 !== false && e3[t3] !== false).concat(Object.keys(e3).filter((t3) => e3[t3] !== false)))];
}
var ET = /* @__PURE__ */ new Set();
function DT(e3, t2, n2) {
  typeof _s < `u` && _s.env.JEST_WORKER_ID || n2 && ET.has(n2) || (n2 && ET.add(n2), console.warn(``), t2.forEach((t3) => console.warn(e3, `-`, t3)));
}
function OT(e3) {
  return V.dim(e3);
}
var kT = { info(e3, t2) {
  DT(V.bold(V.cyan(`info`)), ...Array.isArray(e3) ? [e3] : [t2, e3]);
}, warn(e3, t2) {
  DT(V.bold(V.yellow(`warn`)), ...Array.isArray(e3) ? [e3] : [t2, e3]);
}, risk(e3, t2) {
  DT(V.bold(V.magenta(`risk`)), ...Array.isArray(e3) ? [e3] : [t2, e3]);
} };
function AT({ version: e3, from: t2, to: n2 }) {
  kT.warn(`${t2}-color-renamed`, [`As of Tailwind CSS ${e3}, \`${t2}\` has been renamed to \`${n2}\`.`, `Update your configuration file to silence this warning.`]);
}
var jT = { inherit: `inherit`, current: `currentColor`, transparent: `transparent`, black: `#000`, white: `#fff`, slate: { 50: `#f8fafc`, 100: `#f1f5f9`, 200: `#e2e8f0`, 300: `#cbd5e1`, 400: `#94a3b8`, 500: `#64748b`, 600: `#475569`, 700: `#334155`, 800: `#1e293b`, 900: `#0f172a`, 950: `#020617` }, gray: { 50: `#f9fafb`, 100: `#f3f4f6`, 200: `#e5e7eb`, 300: `#d1d5db`, 400: `#9ca3af`, 500: `#6b7280`, 600: `#4b5563`, 700: `#374151`, 800: `#1f2937`, 900: `#111827`, 950: `#030712` }, zinc: { 50: `#fafafa`, 100: `#f4f4f5`, 200: `#e4e4e7`, 300: `#d4d4d8`, 400: `#a1a1aa`, 500: `#71717a`, 600: `#52525b`, 700: `#3f3f46`, 800: `#27272a`, 900: `#18181b`, 950: `#09090b` }, neutral: { 50: `#fafafa`, 100: `#f5f5f5`, 200: `#e5e5e5`, 300: `#d4d4d4`, 400: `#a3a3a3`, 500: `#737373`, 600: `#525252`, 700: `#404040`, 800: `#262626`, 900: `#171717`, 950: `#0a0a0a` }, stone: { 50: `#fafaf9`, 100: `#f5f5f4`, 200: `#e7e5e4`, 300: `#d6d3d1`, 400: `#a8a29e`, 500: `#78716c`, 600: `#57534e`, 700: `#44403c`, 800: `#292524`, 900: `#1c1917`, 950: `#0c0a09` }, red: { 50: `#fef2f2`, 100: `#fee2e2`, 200: `#fecaca`, 300: `#fca5a5`, 400: `#f87171`, 500: `#ef4444`, 600: `#dc2626`, 700: `#b91c1c`, 800: `#991b1b`, 900: `#7f1d1d`, 950: `#450a0a` }, orange: { 50: `#fff7ed`, 100: `#ffedd5`, 200: `#fed7aa`, 300: `#fdba74`, 400: `#fb923c`, 500: `#f97316`, 600: `#ea580c`, 700: `#c2410c`, 800: `#9a3412`, 900: `#7c2d12`, 950: `#431407` }, amber: { 50: `#fffbeb`, 100: `#fef3c7`, 200: `#fde68a`, 300: `#fcd34d`, 400: `#fbbf24`, 500: `#f59e0b`, 600: `#d97706`, 700: `#b45309`, 800: `#92400e`, 900: `#78350f`, 950: `#451a03` }, yellow: { 50: `#fefce8`, 100: `#fef9c3`, 200: `#fef08a`, 300: `#fde047`, 400: `#facc15`, 500: `#eab308`, 600: `#ca8a04`, 700: `#a16207`, 800: `#854d0e`, 900: `#713f12`, 950: `#422006` }, lime: { 50: `#f7fee7`, 100: `#ecfccb`, 200: `#d9f99d`, 300: `#bef264`, 400: `#a3e635`, 500: `#84cc16`, 600: `#65a30d`, 700: `#4d7c0f`, 800: `#3f6212`, 900: `#365314`, 950: `#1a2e05` }, green: { 50: `#f0fdf4`, 100: `#dcfce7`, 200: `#bbf7d0`, 300: `#86efac`, 400: `#4ade80`, 500: `#22c55e`, 600: `#16a34a`, 700: `#15803d`, 800: `#166534`, 900: `#14532d`, 950: `#052e16` }, emerald: { 50: `#ecfdf5`, 100: `#d1fae5`, 200: `#a7f3d0`, 300: `#6ee7b7`, 400: `#34d399`, 500: `#10b981`, 600: `#059669`, 700: `#047857`, 800: `#065f46`, 900: `#064e3b`, 950: `#022c22` }, teal: { 50: `#f0fdfa`, 100: `#ccfbf1`, 200: `#99f6e4`, 300: `#5eead4`, 400: `#2dd4bf`, 500: `#14b8a6`, 600: `#0d9488`, 700: `#0f766e`, 800: `#115e59`, 900: `#134e4a`, 950: `#042f2e` }, cyan: { 50: `#ecfeff`, 100: `#cffafe`, 200: `#a5f3fc`, 300: `#67e8f9`, 400: `#22d3ee`, 500: `#06b6d4`, 600: `#0891b2`, 700: `#0e7490`, 800: `#155e75`, 900: `#164e63`, 950: `#083344` }, sky: { 50: `#f0f9ff`, 100: `#e0f2fe`, 200: `#bae6fd`, 300: `#7dd3fc`, 400: `#38bdf8`, 500: `#0ea5e9`, 600: `#0284c7`, 700: `#0369a1`, 800: `#075985`, 900: `#0c4a6e`, 950: `#082f49` }, blue: { 50: `#eff6ff`, 100: `#dbeafe`, 200: `#bfdbfe`, 300: `#93c5fd`, 400: `#60a5fa`, 500: `#3b82f6`, 600: `#2563eb`, 700: `#1d4ed8`, 800: `#1e40af`, 900: `#1e3a8a`, 950: `#172554` }, indigo: { 50: `#eef2ff`, 100: `#e0e7ff`, 200: `#c7d2fe`, 300: `#a5b4fc`, 400: `#818cf8`, 500: `#6366f1`, 600: `#4f46e5`, 700: `#4338ca`, 800: `#3730a3`, 900: `#312e81`, 950: `#1e1b4b` }, violet: { 50: `#f5f3ff`, 100: `#ede9fe`, 200: `#ddd6fe`, 300: `#c4b5fd`, 400: `#a78bfa`, 500: `#8b5cf6`, 600: `#7c3aed`, 700: `#6d28d9`, 800: `#5b21b6`, 900: `#4c1d95`, 950: `#2e1065` }, purple: { 50: `#faf5ff`, 100: `#f3e8ff`, 200: `#e9d5ff`, 300: `#d8b4fe`, 400: `#c084fc`, 500: `#a855f7`, 600: `#9333ea`, 700: `#7e22ce`, 800: `#6b21a8`, 900: `#581c87`, 950: `#3b0764` }, fuchsia: { 50: `#fdf4ff`, 100: `#fae8ff`, 200: `#f5d0fe`, 300: `#f0abfc`, 400: `#e879f9`, 500: `#d946ef`, 600: `#c026d3`, 700: `#a21caf`, 800: `#86198f`, 900: `#701a75`, 950: `#4a044e` }, pink: { 50: `#fdf2f8`, 100: `#fce7f3`, 200: `#fbcfe8`, 300: `#f9a8d4`, 400: `#f472b6`, 500: `#ec4899`, 600: `#db2777`, 700: `#be185d`, 800: `#9d174d`, 900: `#831843`, 950: `#500724` }, rose: { 50: `#fff1f2`, 100: `#ffe4e6`, 200: `#fecdd3`, 300: `#fda4af`, 400: `#fb7185`, 500: `#f43f5e`, 600: `#e11d48`, 700: `#be123c`, 800: `#9f1239`, 900: `#881337`, 950: `#4c0519` }, get lightBlue() {
  return AT({ version: `v2.2`, from: `lightBlue`, to: `sky` }), this.sky;
}, get warmGray() {
  return AT({ version: `v3.0`, from: `warmGray`, to: `stone` }), this.stone;
}, get trueGray() {
  return AT({ version: `v3.0`, from: `trueGray`, to: `neutral` }), this.neutral;
}, get coolGray() {
  return AT({ version: `v3.0`, from: `coolGray`, to: `gray` }), this.gray;
}, get blueGray() {
  return AT({ version: `v3.0`, from: `blueGray`, to: `slate` }), this.slate;
} };
function MT(e3, ...t2) {
  var _a3, _b3;
  for (let n2 of t2) {
    for (let t3 in n2) ((_a3 = e3 == null ? void 0 : e3.hasOwnProperty) == null ? void 0 : _a3.call(e3, t3)) || (e3[t3] = n2[t3]);
    for (let t3 of Object.getOwnPropertySymbols(n2)) ((_b3 = e3 == null ? void 0 : e3.hasOwnProperty) == null ? void 0 : _b3.call(e3, t3)) || (e3[t3] = n2[t3]);
  }
  return e3;
}
function NT(e3) {
  if (Array.isArray(e3)) return e3;
  let t2 = e3.split(`[`).length - 1, n2 = e3.split(`]`).length - 1;
  if (t2 !== n2) throw Error(`Path is invalid. Has unbalanced brackets: ${e3}`);
  return e3.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
}
var PT = { optimizeUniversalDefaults: false, generalizedModifiers: true, disableColorOpacityUtilitiesByDefault: false, relativeContentPathsByDefault: false }, FT = { future: [`hoverOnlyWhenSupported`, `respectDefaultRingColorOpacity`, `disableColorOpacityUtilitiesByDefault`, `relativeContentPathsByDefault`], experimental: [`optimizeUniversalDefaults`, `generalizedModifiers`] };
function IT(e3, t2) {
  var _a3, _b3;
  return FT.future.includes(t2) ? e3.future === `all` || (((_a3 = e3 == null ? void 0 : e3.future) == null ? void 0 : _a3[t2]) ?? PT[t2] ?? false) : FT.experimental.includes(t2) ? e3.experimental === `all` || (((_b3 = e3 == null ? void 0 : e3.experimental) == null ? void 0 : _b3[t2]) ?? PT[t2] ?? false) : false;
}
function LT(e3) {
  (() => {
    if (e3.purge || !e3.content || !Array.isArray(e3.content) && !(typeof e3.content == `object` && e3.content !== null)) return false;
    if (Array.isArray(e3.content)) return e3.content.every((e4) => typeof e4 == `string` ? true : !(typeof (e4 == null ? void 0 : e4.raw) != `string` || (e4 == null ? void 0 : e4.extension) && typeof (e4 == null ? void 0 : e4.extension) != `string`));
    if (typeof e3.content == `object` && e3.content !== null) {
      if (Object.keys(e3.content).some((e4) => ![`files`, `relative`, `extract`, `transform`].includes(e4))) return false;
      if (Array.isArray(e3.content.files)) {
        if (!e3.content.files.every((e4) => typeof e4 == `string` ? true : !(typeof (e4 == null ? void 0 : e4.raw) != `string` || (e4 == null ? void 0 : e4.extension) && typeof (e4 == null ? void 0 : e4.extension) != `string`))) return false;
        if (typeof e3.content.extract == `object`) {
          for (let t2 of Object.values(e3.content.extract)) if (typeof t2 != `function`) return false;
        } else if (!(e3.content.extract === void 0 || typeof e3.content.extract == `function`)) return false;
        if (typeof e3.content.transform == `object`) {
          for (let t2 of Object.values(e3.content.transform)) if (typeof t2 != `function`) return false;
        } else if (!(e3.content.transform === void 0 || typeof e3.content.transform == `function`)) return false;
        if (typeof e3.content.relative != `boolean` && typeof e3.content.relative < `u`) return false;
      }
      return true;
    }
    return false;
  })() || kT.warn(`purge-deprecation`, ["The `purge`/`content` options have changed in Tailwind CSS v3.0.", `Update your configuration file to eliminate this warning.`, `https://tailwindcss.com/docs/upgrade-guide#configure-content-sources`]), e3.safelist = (() => {
    var _a3;
    let { content: t2, purge: n2, safelist: r2 } = e3;
    return Array.isArray(r2) ? r2 : Array.isArray(t2 == null ? void 0 : t2.safelist) ? t2.safelist : Array.isArray(n2 == null ? void 0 : n2.safelist) ? n2.safelist : Array.isArray((_a3 = n2 == null ? void 0 : n2.options) == null ? void 0 : _a3.safelist) ? n2.options.safelist : [];
  })(), e3.blocklist = (() => {
    let { blocklist: t2 } = e3;
    if (Array.isArray(t2)) {
      if (t2.every((e4) => typeof e4 == `string`)) return t2;
      kT.warn(`blocklist-invalid`, ["The `blocklist` option must be an array of strings.", `https://tailwindcss.com/docs/content-configuration#discarding-classes`]);
    }
    return [];
  })(), typeof e3.prefix == `function` ? (kT.warn(`prefix-function`, ["As of Tailwind CSS v3.0, `prefix` cannot be a function.", "Update `prefix` in your configuration to be a string to eliminate this warning.", `https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function`]), e3.prefix = ``) : e3.prefix = e3.prefix ?? ``, e3.content = { relative: (() => {
    let { content: t2 } = e3;
    return (t2 == null ? void 0 : t2.relative) ? t2.relative : IT(e3, `relativeContentPathsByDefault`);
  })(), files: (() => {
    let { content: t2, purge: n2 } = e3;
    return Array.isArray(n2) ? n2 : Array.isArray(n2 == null ? void 0 : n2.content) ? n2.content : Array.isArray(t2) ? t2 : Array.isArray(t2 == null ? void 0 : t2.content) ? t2.content : Array.isArray(t2 == null ? void 0 : t2.files) ? t2.files : [];
  })(), extract: (() => {
    var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j;
    let t2 = ((_a3 = e3.purge) == null ? void 0 : _a3.extract) ? e3.purge.extract : ((_b3 = e3.content) == null ? void 0 : _b3.extract) ? e3.content.extract : ((_d2 = (_c2 = e3.purge) == null ? void 0 : _c2.extract) == null ? void 0 : _d2.DEFAULT) ? e3.purge.extract.DEFAULT : ((_f2 = (_e2 = e3.content) == null ? void 0 : _e2.extract) == null ? void 0 : _f2.DEFAULT) ? e3.content.extract.DEFAULT : ((_h2 = (_g2 = e3.purge) == null ? void 0 : _g2.options) == null ? void 0 : _h2.extractors) ? e3.purge.options.extractors : ((_j = (_i2 = e3.content) == null ? void 0 : _i2.options) == null ? void 0 : _j.extractors) ? e3.content.options.extractors : {}, n2 = {}, r2 = (() => {
      var _a4, _b4, _c3, _d3;
      if ((_b4 = (_a4 = e3.purge) == null ? void 0 : _a4.options) == null ? void 0 : _b4.defaultExtractor) return e3.purge.options.defaultExtractor;
      if ((_d3 = (_c3 = e3.content) == null ? void 0 : _c3.options) == null ? void 0 : _d3.defaultExtractor) return e3.content.options.defaultExtractor;
    })();
    if (r2 !== void 0 && (n2.DEFAULT = r2), typeof t2 == `function`) n2.DEFAULT = t2;
    else if (Array.isArray(t2)) for (let { extensions: e4, extractor: r3 } of t2 ?? []) for (let t3 of e4) n2[t3] = r3;
    else typeof t2 == `object` && t2 && Object.assign(n2, t2);
    return n2;
  })(), transform: (() => {
    var _a3, _b3, _c2, _d2, _e2, _f2;
    let t2 = ((_a3 = e3.purge) == null ? void 0 : _a3.transform) ? e3.purge.transform : ((_b3 = e3.content) == null ? void 0 : _b3.transform) ? e3.content.transform : ((_d2 = (_c2 = e3.purge) == null ? void 0 : _c2.transform) == null ? void 0 : _d2.DEFAULT) ? e3.purge.transform.DEFAULT : ((_f2 = (_e2 = e3.content) == null ? void 0 : _e2.transform) == null ? void 0 : _f2.DEFAULT) ? e3.content.transform.DEFAULT : {}, n2 = {};
    return typeof t2 == `function` ? n2.DEFAULT = t2 : typeof t2 == `object` && t2 && Object.assign(n2, t2), n2;
  })() };
  for (let t2 of e3.content.files) if (typeof t2 == `string` && /{([^,]*?)}/g.test(t2)) {
    kT.warn(`invalid-glob-braces`, [`The glob pattern ${OT(t2)} in your Tailwind CSS configuration is invalid.`, `Update it to ${OT(t2.replace(/{([^,]*?)}/g, `$1`))} to silence this warning.`]);
    break;
  }
  return e3;
}
function RT(e3) {
  if (Object.prototype.toString.call(e3) !== `[object Object]`) return false;
  let t2 = Object.getPrototypeOf(e3);
  return t2 === null || Object.getPrototypeOf(t2) === null;
}
function zT(e3) {
  return Array.isArray(e3) ? e3.map((e4) => zT(e4)) : typeof e3 == `object` && e3 ? Object.fromEntries(Object.entries(e3).map(([e4, t2]) => [e4, zT(t2)])) : e3;
}
var BT = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, VT = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, HT = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, UT = /(?:\d+|\d*\.\d+)%?/, WT = /(?:\s*,\s*|\s+)/, GT = /\s*[,/]\s*/, KT = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/, qT = RegExp(`^(rgba?)\\(\\s*(${UT.source}|${KT.source})(?:${WT.source}(${UT.source}|${KT.source}))?(?:${WT.source}(${UT.source}|${KT.source}))?(?:${GT.source}(${UT.source}|${KT.source}))?\\s*\\)$`), JT = RegExp(`^(hsla?)\\(\\s*((?:${UT.source})(?:deg|rad|grad|turn)?|${KT.source})(?:${WT.source}(${UT.source}|${KT.source}))?(?:${WT.source}(${UT.source}|${KT.source}))?(?:${GT.source}(${UT.source}|${KT.source}))?\\s*\\)$`);
function YT(e3, { loose: t2 = false } = {}) {
  var _a3, _b3;
  if (typeof e3 != `string`) return null;
  if (e3 = e3.trim(), e3 === `transparent`) return { mode: `rgb`, color: [`0`, `0`, `0`], alpha: `0` };
  if (e3 in BT) return { mode: `rgb`, color: BT[e3].map((e4) => e4.toString()) };
  let n2 = e3.replace(HT, (e4, t3, n3, r3, i3) => [`#`, t3, t3, n3, n3, r3, r3, i3 ? i3 + i3 : ``].join(``)).match(VT);
  if (n2 !== null) return { mode: `rgb`, color: [parseInt(n2[1], 16), parseInt(n2[2], 16), parseInt(n2[3], 16)].map((e4) => e4.toString()), alpha: n2[4] ? (parseInt(n2[4], 16) / 255).toString() : void 0 };
  let r2 = e3.match(qT) ?? e3.match(JT);
  if (r2 === null) return null;
  let i2 = [r2[2], r2[3], r2[4]].filter(Boolean).map((e4) => e4.toString());
  return i2.length === 2 && i2[0].startsWith(`var(`) ? { mode: r2[1], color: [i2[0]], alpha: i2[1] } : !t2 && i2.length !== 3 || i2.length < 3 && !i2.some((e4) => /^var\(.*?\)$/.test(e4)) ? null : { mode: r2[1], color: i2, alpha: (_b3 = (_a3 = r2[5]) == null ? void 0 : _a3.toString) == null ? void 0 : _b3.call(_a3) };
}
function XT({ mode: e3, color: t2, alpha: n2 }) {
  let r2 = n2 !== void 0;
  return e3 === `rgba` || e3 === `hsla` ? `${e3}(${t2.join(`, `)}${r2 ? `, ${n2}` : ``})` : `${e3}(${t2.join(` `)}${r2 ? ` / ${n2}` : ``})`;
}
function ZT(e3, t2, n2) {
  if (typeof e3 == `function`) return e3({ opacityValue: t2 });
  let r2 = YT(e3, { loose: true });
  return r2 === null ? n2 : XT({ ...r2, alpha: t2 });
}
function QT(e3, t2) {
  let n2 = [], r2 = [], i2 = 0, a2 = false;
  for (let o2 = 0; o2 < e3.length; o2++) {
    let s2 = e3[o2];
    n2.length === 0 && s2 === t2[0] && !a2 && (t2.length === 1 || e3.slice(o2, o2 + t2.length) === t2) && (r2.push(e3.slice(i2, o2)), i2 = o2 + t2.length), a2 = a2 ? false : s2 === `\\`, s2 === `(` || s2 === `[` || s2 === `{` ? n2.push(s2) : (s2 === `)` && n2[n2.length - 1] === `(` || s2 === `]` && n2[n2.length - 1] === `[` || s2 === `}` && n2[n2.length - 1] === `{`) && n2.pop();
  }
  return r2.push(e3.slice(i2)), r2;
}
var $T = /* @__PURE__ */ new Set([`inset`, `inherit`, `initial`, `revert`, `unset`]), eE = /\ +(?![^(]*\))/g, tE = /^-?(\d+|\.\d+)(.*?)$/g;
function nE(e3) {
  return QT(e3, `,`).map((e4) => {
    let t2 = e4.trim(), n2 = { raw: t2 }, r2 = t2.split(eE), i2 = /* @__PURE__ */ new Set();
    for (let e5 of r2) tE.lastIndex = 0, !i2.has(`KEYWORD`) && $T.has(e5) ? (n2.keyword = e5, i2.add(`KEYWORD`)) : tE.test(e5) ? i2.has(`X`) ? i2.has(`Y`) ? i2.has(`BLUR`) ? i2.has(`SPREAD`) || (n2.spread = e5, i2.add(`SPREAD`)) : (n2.blur = e5, i2.add(`BLUR`)) : (n2.y = e5, i2.add(`Y`)) : (n2.x = e5, i2.add(`X`)) : n2.color ? (n2.unknown || (n2.unknown = []), n2.unknown.push(e5)) : n2.color = e5;
    return n2.valid = n2.x !== void 0 && n2.y !== void 0, n2;
  });
}
var rE = [`min`, `max`, `clamp`, `calc`];
function iE(e3) {
  return rE.some((t2) => RegExp(`^${t2}\\(.*\\)`).test(e3));
}
var aE = /* @__PURE__ */ new Set([`scroll-timeline-name`, `timeline-scope`, `view-timeline-name`, `font-palette`, `anchor-name`, `anchor-scope`, `position-anchor`, `position-try-options`, `scroll-timeline`, `animation-timeline`, `view-timeline`, `position-try`]);
function oE(e3, t2 = null, n2 = true) {
  let r2 = t2 && aE.has(t2.property);
  return e3.startsWith(`--`) && !r2 ? `var(${e3})` : e3.includes(`url(`) ? e3.split(/(url\(.*?\))/g).filter(Boolean).map((e4) => /^url\(.*?\)$/.test(e4) ? e4 : oE(e4, t2, false)).join(``) : (e3 = e3.replace(/([^\\])_+/g, (e4, t3) => t3 + ` `.repeat(e4.length - 1)).replace(/^_/g, ` `).replace(/\\_/g, `_`), n2 && (e3 = e3.trim()), e3 = sE(e3), e3);
}
function sE(e3) {
  let t2 = [`theme`], n2 = [`min-content`, `max-content`, `fit-content`, `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`, `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`, `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`, `radial-gradient`, `linear-gradient`, `conic-gradient`, `repeating-radial-gradient`, `repeating-linear-gradient`, `repeating-conic-gradient`, `anchor-size`];
  return e3.replace(/(calc|min|max|clamp)\(.+\)/g, (e4) => {
    let r2 = ``;
    function i2() {
      let e5 = r2.trimEnd();
      return e5[e5.length - 1];
    }
    for (let a2 = 0; a2 < e4.length; a2++) {
      let o2 = function(t3) {
        return t3.split(``).every((t4, n3) => e4[a2 + n3] === t4);
      }, s2 = function(t3) {
        let n3 = 1 / 0;
        for (let r4 of t3) {
          let t4 = e4.indexOf(r4, a2);
          t4 !== -1 && t4 < n3 && (n3 = t4);
        }
        let r3 = e4.slice(a2, n3);
        return a2 += r3.length - 1, r3;
      }, c2 = e4[a2];
      if (o2(`var`)) r2 += s2([`)`, `,`]);
      else if (n2.some((e5) => o2(e5))) {
        let e5 = n2.find((e6) => o2(e6));
        r2 += e5, a2 += e5.length - 1;
      } else t2.some((e5) => o2(e5)) ? r2 += s2([`)`]) : o2(`[`) ? r2 += s2([`]`]) : [`+`, `-`, `*`, `/`].includes(c2) && ![`(`, `+`, `-`, `*`, `/`, `,`].includes(i2()) ? r2 += ` ${c2} ` : r2 += c2;
    }
    return r2.replace(/\s+/g, ` `);
  });
}
function cE(e3) {
  return e3.startsWith(`url(`);
}
function lE(e3) {
  return !isNaN(Number(e3)) || iE(e3);
}
function uE(e3) {
  return e3.endsWith(`%`) && lE(e3.slice(0, -1)) || iE(e3);
}
var dE = `cm.mm.Q.in.pc.pt.px.em.ex.ch.rem.lh.rlh.vw.vh.vmin.vmax.vb.vi.svw.svh.lvw.lvh.dvw.dvh.cqw.cqh.cqi.cqb.cqmin.cqmax`.split(`.`), fE = `(?:${dE.join(`|`)})`;
function pE(e3) {
  return e3 === `0` || RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${fE}$`).test(e3) || iE(e3);
}
var mE = /* @__PURE__ */ new Set([`thin`, `medium`, `thick`]);
function hE(e3) {
  return mE.has(e3);
}
function gE(e3) {
  let t2 = nE(oE(e3));
  for (let e4 of t2) if (!e4.valid) return false;
  return true;
}
function _E(e3) {
  let t2 = 0;
  return QT(e3, `_`).every((e4) => (e4 = oE(e4), e4.startsWith(`var(`) ? true : YT(e4, { loose: true }) === null ? false : (t2++, true))) ? t2 > 0 : false;
}
function vE(e3) {
  let t2 = 0;
  return QT(e3, `,`).every((e4) => (e4 = oE(e4), e4.startsWith(`var(`) ? true : cE(e4) || bE(e4) || [`element(`, `image(`, `cross-fade(`, `image-set(`].some((t3) => e4.startsWith(t3)) ? (t2++, true) : false)) ? t2 > 0 : false;
}
var yE = /* @__PURE__ */ new Set([`conic-gradient`, `linear-gradient`, `radial-gradient`, `repeating-conic-gradient`, `repeating-linear-gradient`, `repeating-radial-gradient`]);
function bE(e3) {
  e3 = oE(e3);
  for (let t2 of yE) if (e3.startsWith(`${t2}(`)) return true;
  return false;
}
var xE = /* @__PURE__ */ new Set([`center`, `top`, `right`, `bottom`, `left`]);
function SE(e3) {
  let t2 = 0;
  return QT(e3, `_`).every((e4) => (e4 = oE(e4), e4.startsWith(`var(`) ? true : xE.has(e4) || pE(e4) || uE(e4) ? (t2++, true) : false)) ? t2 > 0 : false;
}
function CE(e3) {
  let t2 = 0;
  return QT(e3, `,`).every((e4) => (e4 = oE(e4), e4.startsWith(`var(`) ? true : e4.includes(` `) && !/(['"])([^"']+)\1/g.test(e4) || /^\d/g.test(e4) ? false : (t2++, true))) ? t2 > 0 : false;
}
var wE = /* @__PURE__ */ new Set([`serif`, `sans-serif`, `monospace`, `cursive`, `fantasy`, `system-ui`, `ui-serif`, `ui-sans-serif`, `ui-monospace`, `ui-rounded`, `math`, `emoji`, `fangsong`]);
function TE(e3) {
  return wE.has(e3);
}
var EE = /* @__PURE__ */ new Set([`xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`, `xxx-large`]);
function DE(e3) {
  return EE.has(e3);
}
var OE = /* @__PURE__ */ new Set([`larger`, `smaller`]);
function kE(e3) {
  return OE.has(e3);
}
function AE(e3) {
  let t2 = [`cover`, `contain`];
  return QT(e3, `,`).every((e4) => {
    let n2 = QT(e4, `_`).filter(Boolean);
    return n2.length === 1 && t2.includes(n2[0]) ? true : n2.length !== 1 && n2.length !== 2 ? false : n2.every((e5) => pE(e5) || uE(e5) || e5 === `auto`);
  });
}
function jE(e3, t2) {
  if (!PE(e3)) return;
  let n2 = e3.slice(1, -1);
  if (t2(n2)) return oE(n2);
}
function ME(e3, t2 = {}, n2) {
  let r2 = t2[e3];
  if (r2 !== void 0) return CT(r2);
  if (PE(e3)) {
    let t3 = jE(e3, n2);
    return t3 === void 0 ? void 0 : CT(t3);
  }
}
function NE(e3, t2 = {}, { validate: n2 = () => true } = {}) {
  var _a3;
  let r2 = (_a3 = t2.values) == null ? void 0 : _a3[e3];
  return r2 === void 0 ? t2.supportsNegativeValues && e3.startsWith(`-`) ? ME(e3.slice(1), t2.values, n2) : jE(e3, n2) : r2;
}
function PE(e3) {
  return e3.startsWith(`[`) && e3.endsWith(`]`);
}
function FE(e3) {
  let t2 = e3.lastIndexOf(`/`), n2 = e3.lastIndexOf(`[`, t2), r2 = e3.indexOf(`]`, t2);
  return e3[t2 - 1] === `]` || e3[t2 + 1] === `[` || n2 !== -1 && r2 !== -1 && n2 < t2 && t2 < r2 && (t2 = e3.lastIndexOf(`/`, n2)), t2 === -1 || t2 === e3.length - 1 || PE(e3) && !e3.includes(`]/[`) ? [e3, void 0] : [e3.slice(0, t2), e3.slice(t2 + 1)];
}
function IE(e3) {
  if (typeof e3 == `string` && e3.includes(`<alpha-value>`)) {
    let t2 = e3;
    return ({ opacityValue: e4 = 1 }) => t2.replace(/<alpha-value>/g, e4);
  }
  return e3;
}
function LE(e3) {
  return oE(e3.slice(1, -1));
}
function RE(e3, t2 = {}, { tailwindConfig: n2 = {} } = {}) {
  var _a3, _b3, _c2, _d2, _e2;
  if (((_a3 = t2.values) == null ? void 0 : _a3[e3]) !== void 0) return IE((_b3 = t2.values) == null ? void 0 : _b3[e3]);
  let [r2, i2] = FE(e3);
  if (i2 !== void 0) {
    let e4 = ((_c2 = t2.values) == null ? void 0 : _c2[r2]) ?? (PE(r2) ? r2.slice(1, -1) : void 0);
    return e4 === void 0 ? void 0 : (e4 = IE(e4), PE(i2) ? ZT(e4, LE(i2)) : ((_e2 = (_d2 = n2.theme) == null ? void 0 : _d2.opacity) == null ? void 0 : _e2[i2]) === void 0 ? void 0 : ZT(e4, n2.theme.opacity[i2]));
  }
  return NE(e3, t2, { validate: _E });
}
function zE(e3, t2 = {}) {
  var _a3;
  return (_a3 = t2.values) == null ? void 0 : _a3[e3];
}
function $(e3) {
  return (t2, n2) => NE(t2, n2, { validate: e3 });
}
var BE = { any: NE, color: RE, url: $(cE), image: $(vE), length: $(pE), percentage: $(uE), position: $(SE), lookup: zE, "generic-name": $(TE), "family-name": $(CE), number: $(lE), "line-width": $(hE), "absolute-size": $(DE), "relative-size": $(kE), shadow: $(gE), size: $(AE) }, VE = Object.keys(BE);
function HE(e3) {
  return typeof e3 == `function` ? e3({}) : e3;
}
function UE(e3) {
  return typeof e3 == `function`;
}
function WE(e3, ...t2) {
  let n2 = t2.pop();
  for (let r2 of t2) for (let t3 in r2) {
    let i2 = n2(e3[t3], r2[t3]);
    i2 === void 0 ? RT(e3[t3]) && RT(r2[t3]) ? e3[t3] = WE({}, e3[t3], r2[t3], n2) : e3[t3] = r2[t3] : e3[t3] = i2;
  }
  return e3;
}
var GE = { colors: jT, negative(e3) {
  return Object.keys(e3).filter((t2) => e3[t2] !== `0`).reduce((t2, n2) => {
    let r2 = CT(e3[n2]);
    return r2 !== void 0 && (t2[`-${n2}`] = r2), t2;
  }, {});
}, breakpoints(e3) {
  return Object.keys(e3).filter((t2) => typeof e3[t2] == `string`).reduce((t2, n2) => ({ ...t2, [`screen-${n2}`]: e3[n2] }), {});
} };
function KE(e3, ...t2) {
  return UE(e3) ? e3(...t2) : e3;
}
function qE(e3) {
  return e3.reduce((e4, { extend: t2 }) => WE(e4, t2, (e5, t3) => e5 === void 0 ? [t3] : Array.isArray(e5) ? [t3, ...e5] : [t3, e5]), {});
}
function JE(e3) {
  return { ...e3.reduce((e4, t2) => MT(e4, t2), {}), extend: qE(e3) };
}
function YE(e3, t2) {
  if (Array.isArray(e3) && RT(e3[0])) return e3.concat(t2);
  if (Array.isArray(t2) && RT(t2[0]) && RT(e3)) return [e3, ...t2];
  if (Array.isArray(t2)) return t2;
}
function XE({ extend: e3, ...t2 }) {
  return WE(t2, e3, (e4, t3) => !UE(e4) && !t3.some(UE) ? WE({}, e4, ...t3, YE) : (n2, r2) => WE({}, ...[e4, ...t3].map((e5) => KE(e5, n2, r2)), YE));
}
function* ZE(e3) {
  let t2 = NT(e3);
  if (t2.length === 0 || (yield t2, Array.isArray(e3))) return;
  let n2 = /^(.*?)\s*\/\s*([^/]+)$/, r2 = e3.match(n2);
  if (r2 !== null) {
    let [, e4, t3] = r2, n3 = NT(e4);
    n3.alpha = t3, yield n3;
  }
}
function QE(e3) {
  let t2 = (n2, r2) => {
    for (let r3 of ZE(n2)) {
      let n3 = 0, i2 = e3;
      for (; i2 != null && n3 < r3.length; ) i2 = i2[r3[n3++]], i2 = UE(i2) && (r3.alpha === void 0 || n3 <= r3.length - 1) ? i2(t2, GE) : i2;
      if (i2 !== void 0) {
        if (r3.alpha !== void 0) {
          let e4 = IE(i2);
          return ZT(e4, r3.alpha, HE(e4));
        }
        return RT(i2) ? zT(i2) : i2;
      }
    }
    return r2;
  };
  return Object.assign(t2, { theme: t2, ...GE }), Object.keys(e3).reduce((n2, r2) => (n2[r2] = UE(e3[r2]) ? e3[r2](t2, GE) : e3[r2], n2), {});
}
function $E(e3) {
  let t2 = [];
  return e3.forEach((e4) => {
    t2 = [...t2, e4];
    let n2 = (e4 == null ? void 0 : e4.plugins) ?? [];
    n2.length !== 0 && n2.forEach((e5) => {
      e5.__isOptionsFunction && (e5 = e5()), t2 = [...t2, ...$E([(e5 == null ? void 0 : e5.config) ?? {}])];
    });
  }), t2;
}
function eD(e3) {
  return [...e3].reduceRight((e4, t2) => UE(t2) ? t2({ corePlugins: e4 }) : TT(t2, e4), wT);
}
function tD(e3) {
  return [...e3].reduceRight((e4, t2) => [...e4, ...t2], []);
}
function nD(e3) {
  let t2 = [...$E(e3), { prefix: ``, important: false, separator: `:` }];
  return LT(MT({ theme: QE(XE(JE(t2.map((e4) => (e4 == null ? void 0 : e4.theme) ?? {})))), corePlugins: eD(t2.map((e4) => e4.corePlugins)), plugins: tD(e3.map((e4) => (e4 == null ? void 0 : e4.plugins) ?? [])) }, ...t2));
}
var rD = xT(ST());
function iD(e3) {
  let t2 = ((e3 == null ? void 0 : e3.presets) ?? [rD.default]).slice().reverse().flatMap((e4) => iD(e4 instanceof Function ? e4() : e4)), n2 = { respectDefaultRingColorOpacity: { theme: { ringColor: ({ theme: e4 }) => ({ DEFAULT: `#3b82f67f`, ...e4(`colors`) }) } }, disableColorOpacityUtilitiesByDefault: { corePlugins: { backgroundOpacity: false, borderOpacity: false, divideOpacity: false, placeholderOpacity: false, ringOpacity: false, textOpacity: false } } }, r2 = Object.keys(n2).filter((t3) => IT(e3, t3)).map((e4) => n2[e4]);
  return [e3, ...r2, ...t2];
}
function aD(...e3) {
  let [, ...t2] = iD(e3[0]);
  return nD([...e3, ...t2]);
}
async function oD(e3 = {}, t2 = `/tailwind.config.js`) {
  let n2 = await s(t2, void 0, `config`, e3);
  return aD(n2.module);
}
export {
  Iy as F,
  ee as N,
  sw as Pu,
  ww as V,
  Iw as _,
  bS as cssesc__3_0_exports,
  D as dlv_exports,
  Tn as fs_exports,
  V as ne,
  la as path_exports,
  dT as require_dist,
  fT as require_postcss_nested,
  Lw as require_unesc,
  oD as resolveConfig,
  Oi as st,
  tS as w,
  le as x,
  _s as xs
};
