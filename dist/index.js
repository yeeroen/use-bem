const o = (n, ...t) => {
  const e = t.map((r) => r ? `${n}--${r}` : null);
  return [n, ...e].filter((r) => !!r);
}, s = (n, ...t) => o(n, ...t), c = (n, t, ...e) => o(`${n}__${t}`, ...e), l = (n, t) => t === void 0 ? n : typeof t == "boolean" || t === null ? t ? n : "" : `${n}-${t}`, u = (n) => ({
  block: (...t) => s(n, ...t),
  element: (t, ...e) => c(n, t, ...e),
  modifier: l
});
export {
  u as default
};
//# sourceMappingURL=index.js.map
