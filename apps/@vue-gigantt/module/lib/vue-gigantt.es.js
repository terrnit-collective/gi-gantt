import j from "dayjs";
import { inject as ve, ref as I, computed as G, useSlots as je, Comment as bt, Text as vt, defineComponent as ne, toRefs as ce, onMounted as Le, watch as ye, openBlock as L, createElementBlock as z, normalizeClass as Te, unref as T, normalizeStyle as V, createElementVNode as K, renderSlot as N, toDisplayString as ue, Fragment as ee, createCommentVNode as oe, nextTick as He, createBlock as he, Teleport as yt, createVNode as Re, Transition as wt, withCtx as le, createTextVNode as be, getCurrentScope as xt, onScopeDispose as Et, getCurrentInstance as Fe, provide as me, withModifiers as Bt, mergeProps as kt, TransitionGroup as St, renderList as de } from "vue";
var we = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ue = { exports: {} };
(function(e, r) {
  (function(t, o) {
    e.exports = o();
  })(we, function() {
    return function(t, o) {
      o.prototype.isSameOrBefore = function(d, a) {
        return this.isSame(d, a) || this.isBefore(d, a);
      };
    };
  });
})(Ue);
var Mt = Ue.exports;
const Ne = /* @__PURE__ */ xe(Mt);
var Ve = { exports: {} };
(function(e, r) {
  (function(t, o) {
    e.exports = o();
  })(we, function() {
    return function(t, o) {
      o.prototype.isSameOrAfter = function(d, a) {
        return this.isSame(d, a) || this.isAfter(d, a);
      };
    };
  });
})(Ve);
var Ct = Ve.exports;
const We = /* @__PURE__ */ xe(Ct);
var qe = { exports: {} };
(function(e, r) {
  (function(t, o) {
    e.exports = o();
  })(we, function() {
    return function(t, o, d) {
      o.prototype.isBetween = function(a, s, l, f) {
        var u = d(a), n = d(s), c = (f = f || "()")[0] === "(", g = f[1] === ")";
        return (c ? this.isAfter(u, l) : !this.isBefore(u, l)) && (g ? this.isBefore(n, l) : !this.isAfter(n, l)) || (c ? this.isBefore(u, l) : !this.isAfter(u, l)) && (g ? this.isAfter(n, l) : !this.isBefore(n, l));
      };
    };
  });
})(qe);
var Dt = qe.exports;
const Xe = /* @__PURE__ */ xe(Dt);
var Ke = { exports: {} };
(function(e, r) {
  (function(t, o) {
    e.exports = o();
  })(we, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, o = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, d = /\d\d/, a = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, l = {}, f = function(i) {
      return (i = +i) + (i > 68 ? 1900 : 2e3);
    }, u = function(i) {
      return function(m) {
        this[i] = +m;
      };
    }, n = [/[+-]\d\d:?(\d\d)?|Z/, function(i) {
      (this.zone || (this.zone = {})).offset = function(m) {
        if (!m || m === "Z")
          return 0;
        var E = m.match(/([+-]|\d\d)/g), B = 60 * E[1] + (+E[2] || 0);
        return B === 0 ? 0 : E[0] === "+" ? -B : B;
      }(i);
    }], c = function(i) {
      var m = l[i];
      return m && (m.indexOf ? m : m.s.concat(m.f));
    }, g = function(i, m) {
      var E, B = l.meridiem;
      if (B) {
        for (var h = 1; h <= 24; h += 1)
          if (i.indexOf(B(h, 0, m)) > -1) {
            E = h > 12;
            break;
          }
      } else
        E = i === (m ? "pm" : "PM");
      return E;
    }, b = { A: [s, function(i) {
      this.afternoon = g(i, !1);
    }], a: [s, function(i) {
      this.afternoon = g(i, !0);
    }], S: [/\d/, function(i) {
      this.milliseconds = 100 * +i;
    }], SS: [d, function(i) {
      this.milliseconds = 10 * +i;
    }], SSS: [/\d{3}/, function(i) {
      this.milliseconds = +i;
    }], s: [a, u("seconds")], ss: [a, u("seconds")], m: [a, u("minutes")], mm: [a, u("minutes")], H: [a, u("hours")], h: [a, u("hours")], HH: [a, u("hours")], hh: [a, u("hours")], D: [a, u("day")], DD: [d, u("day")], Do: [s, function(i) {
      var m = l.ordinal, E = i.match(/\d+/);
      if (this.day = E[0], m)
        for (var B = 1; B <= 31; B += 1)
          m(B).replace(/\[|\]/g, "") === i && (this.day = B);
    }], M: [a, u("month")], MM: [d, u("month")], MMM: [s, function(i) {
      var m = c("months"), E = (c("monthsShort") || m.map(function(B) {
        return B.slice(0, 3);
      })).indexOf(i) + 1;
      if (E < 1)
        throw new Error();
      this.month = E % 12 || E;
    }], MMMM: [s, function(i) {
      var m = c("months").indexOf(i) + 1;
      if (m < 1)
        throw new Error();
      this.month = m % 12 || m;
    }], Y: [/[+-]?\d+/, u("year")], YY: [d, function(i) {
      this.year = f(i);
    }], YYYY: [/\d{4}/, u("year")], Z: n, ZZ: n };
    function x(i) {
      var m, E;
      m = i, E = l && l.formats;
      for (var B = (i = m.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(C, D, O) {
        var S = O && O.toUpperCase();
        return D || E[O] || t[O] || E[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(R, _, Y) {
          return _ || Y.slice(1);
        });
      })).match(o), h = B.length, w = 0; w < h; w += 1) {
        var p = B[w], y = b[p], v = y && y[0], k = y && y[1];
        B[w] = k ? { regex: v, parser: k } : p.replace(/^\[|\]$/g, "");
      }
      return function(C) {
        for (var D = {}, O = 0, S = 0; O < h; O += 1) {
          var R = B[O];
          if (typeof R == "string")
            S += R.length;
          else {
            var _ = R.regex, Y = R.parser, P = C.slice(S), W = _.exec(P)[0];
            Y.call(D, W), C = C.replace(W, "");
          }
        }
        return function(H) {
          var $ = H.afternoon;
          if ($ !== void 0) {
            var q = H.hours;
            $ ? q < 12 && (H.hours += 12) : q === 12 && (H.hours = 0), delete H.afternoon;
          }
        }(D), D;
      };
    }
    return function(i, m, E) {
      E.p.customParseFormat = !0, i && i.parseTwoDigitYear && (f = i.parseTwoDigitYear);
      var B = m.prototype, h = B.parse;
      B.parse = function(w) {
        var p = w.date, y = w.utc, v = w.args;
        this.$u = y;
        var k = v[1];
        if (typeof k == "string") {
          var C = v[2] === !0, D = v[3] === !0, O = C || D, S = v[2];
          D && (S = v[2]), l = this.$locale(), !C && S && (l = E.Ls[S]), this.$d = function(P, W, H) {
            try {
              if (["x", "X"].indexOf(W) > -1)
                return new Date((W === "X" ? 1e3 : 1) * P);
              var $ = x(W)(P), q = $.year, U = $.month, te = $.day, pt = $.hours, gt = $.minutes, mt = $.seconds, ht = $.milliseconds, $e = $.zone, Ee = /* @__PURE__ */ new Date(), Be = te || (q || U ? 1 : Ee.getDate()), ke = q || Ee.getFullYear(), pe = 0;
              q && !U || (pe = U > 0 ? U - 1 : Ee.getMonth());
              var Se = pt || 0, Me = gt || 0, Ce = mt || 0, De = ht || 0;
              return $e ? new Date(Date.UTC(ke, pe, Be, Se, Me, Ce, De + 60 * $e.offset * 1e3)) : H ? new Date(Date.UTC(ke, pe, Be, Se, Me, Ce, De)) : new Date(ke, pe, Be, Se, Me, Ce, De);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(p, k, y), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), O && p != this.format(k) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (k instanceof Array)
          for (var R = k.length, _ = 1; _ <= R; _ += 1) {
            v[1] = k[_ - 1];
            var Y = E.apply(this, v);
            if (Y.isValid()) {
              this.$d = Y.$d, this.$L = Y.$L, this.init();
              break;
            }
            _ === R && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          h.call(this, w);
      };
    };
  });
})(Ke);
var Tt = Ke.exports;
const Ze = /* @__PURE__ */ xe(Tt), Je = Symbol("CHART_ROWS_KEY"), Qe = Symbol("CONFIG_KEY"), et = Symbol("EMIT_BAR_EVENT_KEY"), tt = Symbol("BAR_CONTAINER_KEY"), Ot = {
  hour: "HH:mm",
  day: "DD. MMM HH:mm",
  month: "DD. MMMM YYYY"
}, At = "cadetblue";
function F() {
  const e = ve(Qe);
  if (!e)
    throw Error("Failed to inject config!");
  return e;
}
const Ie = {
  default: {
    primary: "#eeeeee",
    secondary: "#E0E0E0",
    ternary: "#F5F5F5",
    quartenary: "#ededed",
    hoverHighlight: "rgba(204, 216, 219, 0.5)",
    text: "#404040",
    background: "white"
  },
  creamy: {
    primary: "#ffe8d9",
    secondary: "#fcdcc5",
    ternary: "#fff6f0",
    quartenary: "#f7ece6",
    hoverHighlight: "rgba(230, 221, 202, 0.5)",
    text: "#542d05",
    background: "white"
  },
  crimson: {
    primary: "#a82039",
    secondary: "#c41238",
    ternary: "#db4f56",
    quartenary: "#ce5f64",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    text: "white",
    background: "white"
  },
  dark: {
    primary: "#404040",
    secondary: "#303030",
    ternary: "#353535",
    quartenary: "#383838",
    hoverHighlight: "rgba(159, 160, 161, 0.5)",
    text: "white",
    background: "#525252",
    toast: "#1f1f1f"
  },
  flare: {
    primary: "#e08a38",
    secondary: "#e67912",
    ternary: "#5e5145",
    quartenary: "#665648",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    text: "white",
    background: "white"
  },
  fuchsia: {
    primary: "#de1d5a",
    secondary: "#b50b41",
    ternary: "#ff7da6",
    quartenary: "#f2799f",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    text: "white",
    background: "white"
  },
  grove: {
    primary: "#3d9960",
    secondary: "#288542",
    ternary: "#72b585",
    quartenary: "#65a577",
    hoverHighlight: "rgba(160, 219, 171, 0.5)",
    text: "white",
    background: "white"
  },
  "material-blue": {
    primary: "#0D47A1",
    secondary: "#1565C0",
    ternary: "#42a5f5",
    quartenary: "#409fed",
    hoverHighlight: "rgba(110, 165, 196, 0.5)",
    text: "white",
    background: "white"
  },
  sky: {
    primary: "#b5e3ff",
    secondary: "#a1d6f7",
    ternary: "#d6f7ff",
    quartenary: "#d0edf4",
    hoverHighlight: "rgba(193, 202, 214, 0.5)",
    text: "#022c47",
    background: "white"
  },
  slumber: {
    primary: "#2a2f42",
    secondary: "#2f3447",
    ternary: "#35394d",
    quartenary: "#2c3044",
    hoverHighlight: "rgba(179, 162, 127, 0.5)",
    text: "#ffe0b3",
    background: "#38383b",
    toast: "#1f1f1f"
  },
  vue: {
    primary: "#258a5d",
    secondary: "#41B883",
    ternary: "#35495E",
    quartenary: "#2a3d51",
    hoverHighlight: "rgba(160, 219, 171, 0.5)",
    text: "white",
    background: "white"
  }
};
function rt() {
  const e = ve(Je);
  if (!e)
    throw Error("Failed to inject getChartRows!");
  return e;
}
function ot() {
  const e = ve(et);
  if (!e)
    throw Error("Failed to inject emitBarEvent!");
  return e;
}
const Ge = (e, r = () => null, t = () => null, o = F()) => {
  const { barStart: d, barEnd: a, pushOnOverlap: s } = o, l = I(!1);
  let f = 0, u;
  const { mapPositionToTime: n } = _e(o), { toDayjs: c } = fe(o), g = (h) => {
    const w = document.getElementById(e.config.id);
    if (!w)
      return;
    switch (f = h.clientX - (w.getBoundingClientRect().left || 0), h.target.className) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize", u = i;
        break;
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize", u = m;
        break;
      default:
        u = x;
    }
    l.value = !0, window.addEventListener("mousemove", u), window.addEventListener("mouseup", B);
  }, b = () => {
    var p;
    const h = document.getElementById(e.config.id), w = (p = h == null ? void 0 : h.closest(".g-gantt-row-bars-container")) == null ? void 0 : p.getBoundingClientRect();
    return { barElement: h, barContainer: w };
  }, x = (h) => {
    const { barElement: w, barContainer: p } = b();
    if (!w || !p)
      return;
    const y = w.getBoundingClientRect().width, v = h.clientX - p.left - f, k = v + y;
    E(v, k) || (e[d.value] = n(v), e[a.value] = n(k), r(h, e));
  }, i = (h) => {
    const { barElement: w, barContainer: p } = b();
    if (!w || !p)
      return;
    const y = h.clientX - p.left, v = n(y);
    c(v).isSameOrAfter(c(e, "end")) || (e[d.value] = v, r(h, e));
  }, m = (h) => {
    const { barElement: w, barContainer: p } = b();
    if (!w || !p)
      return;
    const y = h.clientX - p.left, v = n(y);
    c(v).isSameOrBefore(c(e, "start")) || (e[a.value] = v, r(h, e));
  }, E = (h, w) => {
    if (!s.value)
      return !1;
    const p = e.config.dragLimitLeft, y = e.config.dragLimitRight;
    return h && p != null && h < p || w && y != null && w > y;
  }, B = (h) => {
    l.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", u), window.removeEventListener("mouseup", B), t(h, e);
  };
  return {
    isDragging: l,
    initDrag: g
  };
}, nt = "YYYY-MM-DD HH:mm", fe = (e = F()) => {
  const { chartStart: r, chartEnd: t, barStart: o, barEnd: d, dateFormat: a } = e;
  j.extend(Ne), j.extend(We), j.extend(Xe), j.extend(Ze), j.locale("ru-RU");
  const s = G(() => f(r.value)), l = G(() => f(t.value)), f = (n, c) => {
    let g;
    if (c !== void 0 && typeof n != "string" && !(n instanceof Date) && (g = c === "start" ? n[o.value] : n[d.value]), typeof n == "string")
      g = n;
    else if (n instanceof Date)
      return j(n);
    const b = a.value || nt;
    return j(g, b, !0);
  };
  return {
    chartStartDayjs: s,
    chartEndDayjs: l,
    toDayjs: f,
    format: (n, c) => c === !1 ? n instanceof Date ? n : j(n).toDate() : (typeof n == "string" || n instanceof Date ? f(n) : n).format(c)
  };
}, _e = (e = F()) => {
  const { dateFormat: r, chartSize: t } = e, { chartStartDayjs: o, chartEndDayjs: d, toDayjs: a, format: s } = fe(e), l = G(() => d.value.diff(o.value, "minutes"));
  return {
    mapTimeToPosition: (n) => {
      const c = t.width.value || 0, g = a(n).diff(o.value, "minutes", !0);
      return Math.ceil(g / l.value * c);
    },
    mapPositionToTime: (n) => {
      const c = t.width.value || 0, g = n / c * l.value;
      return s(o.value.add(g, "minutes"), r.value);
    }
  };
}, st = () => {
  const { precision: e } = F(), { chartStartDayjs: r, chartEndDayjs: t } = fe(), o = G(() => {
    switch (e == null ? void 0 : e.value) {
      case "hour":
        return "day";
      case "day":
        return "month";
      case "month":
        return "year";
      default:
        throw new Error(
          "Precision prop incorrect. Must be one of the following: 'hour', 'day', 'month'"
        );
    }
  }), d = {
    hour: "HH",
    date: "DD.MMM ",
    day: "DD.MMM ",
    month: "MMMM YYYY",
    year: "YYYY"
  };
  return {
    timeaxisUnits: G(() => {
      const s = [], l = [], f = o.value === "day" ? "date" : o.value, u = e.value;
      let n = r.value.startOf(u);
      const c = t.value.diff(r.value, "minutes", !0);
      let g = 0, b = n[f]();
      for (; n.isBefore(t.value) || n.isSame(t.value); ) {
        if (n[f]() !== b) {
          let B = 0;
          if (s.length === 0)
            B = n.startOf(f).diff(r.value, "minutes", !0) / c * 100;
          else if (n.isSameOrAfter(t.value))
            B = t.value.diff(
              n.subtract(1, f).startOf(f),
              "minutes",
              !0
            ) / c * 100;
          else {
            const w = n.startOf(f), p = n.subtract(1, f).startOf(f);
            B = w.diff(p, "minutes", !0) / c * 100;
          }
          const h = n.subtract(1, f);
          s.push({
            label: h.format(d[f]),
            value: String(b),
            date: h.toDate(),
            width: String(B) + "%"
          }), g = 0, b = n[f]();
        }
        let m = 0;
        l.length === 0 ? m = n.endOf(u).diff(r.value, "minutes", !0) / c * 100 : n.add(1, u).isSameOrAfter(t.value) ? m = t.value.diff(n.startOf(u), "minutes", !0) / c * 100 : m = n.endOf(u).diff(n.startOf(u), "minutes", !0) / c * 100, l.push({
          label: n.format(d[u]),
          value: String(n[u === "day" ? "date" : u]()),
          date: n.toDate(),
          width: String(m) + "%"
        });
        const E = n;
        n = n.add(1, u), (n.isBefore(t.value) || n.isSame(t.value)) && (g += n.diff(E, "minutes", !0));
      }
      const x = t.value.isSame(t.value.startOf(f)) ? t.value[f]() - 1 : t.value[f]();
      return s.some((m) => m.value === String(x)) || (g += t.value.diff(
        n.subtract(1, u),
        "minutes",
        !0
      ), s.push({
        label: t.value.format(d[f]),
        value: String(b),
        date: t.value.toDate(),
        width: `${g / c * 100}%`
      })), { upperUnits: s, lowerUnits: l };
    })
  };
}, Lt = () => {
  const e = F(), r = rt(), t = ot(), { pushOnOverlap: o, barStart: d, barEnd: a, noOverlap: s, dateFormat: l } = e, f = /* @__PURE__ */ new Map(), { toDayjs: u, format: n } = fe(), c = (p, y) => {
    const { initDrag: v } = Ge(p, b, B, e);
    t({ ...y, type: "dragstart" }, p), v(y), h(p);
  }, g = (p, y) => {
    const v = p.config.bundle;
    v != null && (r().forEach((k) => {
      k.forEach((C) => {
        if (C.config.bundle === v) {
          const D = C === p ? B : () => null, { initDrag: O } = Ge(C, b, D, e);
          O(y), h(C);
        }
      });
    }), t({ ...y, type: "dragstart" }, p));
  }, b = (p, y) => {
    t({ ...p, type: "drag" }, y), x(y);
  }, x = (p) => {
    if (!(o != null && o.value))
      return;
    let y = p, { overlapBar: v, overlapType: k } = i(y);
    for (; v; ) {
      h(v);
      const C = u(y[d.value]), D = u(y[a.value]), O = u(v[d.value]), S = u(v[a.value]);
      let R;
      switch (k) {
        case "left":
          R = S.diff(C, "minutes", !0), v[a.value] = n(y[d.value], l.value), v[d.value] = n(
            O.subtract(R, "minutes"),
            l.value
          );
          break;
        case "right":
          R = D.diff(O, "minutes", !0), v[d.value] = n(D, l.value), v[a.value] = n(
            S.add(R, "minutes"),
            l.value
          );
          break;
        default:
          console.warn(
            "Gantt: One bar is inside of the other one! This should never occur while push-on-overlap is active!"
          );
          return;
      }
      v && (k === "left" || k === "right") && m(v, R, k), y = v, { overlapBar: v, overlapType: k } = i(v);
    }
  }, i = (p) => {
    let y, v, k;
    const C = r().find((_) => _.includes(p)) || [], D = u(p[d.value]), O = u(p[a.value]);
    return { overlapBar: C.find((_) => {
      if (_ === p)
        return !1;
      const Y = u(_[d.value]), P = u(_[a.value]);
      return y = D.isBetween(Y, P), v = O.isBetween(Y, P), k = Y.isBetween(D, O) || P.isBetween(D, O), y || v || k;
    }), overlapType: y ? "left" : v ? "right" : k ? "between" : null };
  }, m = (p, y, v) => {
    h(p), p.config.bundle && r().forEach((k) => {
      k.forEach((C) => {
        C.config.bundle === p.config.bundle && C !== p && (h(C), E(C, y, v));
      });
    });
  }, E = (p, y, v) => {
    switch (v) {
      case "left":
        p[d.value] = n(
          u(p, "start").subtract(y, "minutes"),
          l.value
        ), p[a.value] = n(
          u(p, "end").subtract(y, "minutes"),
          l.value
        );
        break;
      case "right":
        p[d.value] = n(
          u(p, "start").add(y, "minutes"),
          l.value
        ), p[a.value] = n(u(p, "end").add(y, "minutes"), l.value);
    }
    x(p);
  }, B = (p, y) => {
    w();
    const v = {
      ...p,
      type: "dragend"
    };
    t(v, y, void 0, new Map(f)), f.clear();
  }, h = (p) => {
    if (!f.has(p)) {
      const y = p[d.value], v = p[a.value];
      f.set(p, { oldStart: y, oldEnd: v });
    }
  }, w = () => {
    if (o.value || !s.value)
      return;
    let p = !1;
    f.forEach((y, v) => {
      const { overlapBar: k } = i(v);
      k != null && (p = !0);
    }), p && f.forEach(({ oldStart: y, oldEnd: v }, k) => {
      k[d.value] = y, k[a.value] = v;
    });
  };
  return {
    initDragOfBar: c,
    initDragOfBundle: g
  };
}, Rt = () => {
  const { pushOnOverlap: e } = F(), r = rt(), t = (s) => {
    const l = [];
    return s != null && r().forEach((f) => {
      f.forEach((u) => {
        u.config.bundle === s && l.push(u);
      });
    }), l;
  }, o = (s) => {
    if (!e.value || s.config.pushOnOverlap === !1)
      return;
    for (const f of ["left", "right"]) {
      const u = f, { gapDistanceSoFar: n, bundleBarsAndGapDist: c } = d(
        s,
        0,
        u
      );
      let g = n;
      const b = c;
      if (!b)
        continue;
      for (let i = 0; i < b.length; i++) {
        const m = b[i].bar, E = b[i].gapDistance;
        t(m.config.bundle).filter(
          (h) => h !== m
        ).forEach((h) => {
          const w = d(h, E, u), p = w.gapDistanceSoFar, y = w.bundleBarsAndGapDist;
          p != null && (!g || p < g) && (g = p), y.forEach((v) => {
            b.find((k) => k.bar === v.bar) || b.push(v);
          });
        });
      }
      const x = document.getElementById(s.config.id);
      g != null && u === "left" ? s.config.dragLimitLeft = x.offsetLeft - g : g != null && u === "right" && (s.config.dragLimitRight = x.offsetLeft + x.offsetWidth + g);
    }
    t(s.config.bundle).forEach((f) => {
      f.config.dragLimitLeft = s.config.dragLimitLeft, f.config.dragLimitRight = s.config.dragLimitRight;
    });
  }, d = (s, l = 0, f) => {
    const u = s.config.bundle ? [{ bar: s, gapDistance: l }] : [];
    let n = s, c = a(n, f);
    if (f === "left")
      for (; c; ) {
        const g = document.getElementById(n.config.id), b = document.getElementById(c.config.id), x = b.offsetLeft + b.offsetWidth;
        if (l += g.offsetLeft - x, c.config.immobile)
          return { gapDistanceSoFar: l, bundleBarsAndGapDist: u };
        c.config.bundle && u.push({
          bar: c,
          gapDistance: l
        }), n = c, c = a(c, "left");
      }
    if (f === "right")
      for (; c; ) {
        const g = document.getElementById(n.config.id), b = document.getElementById(c.config.id), x = g.offsetLeft + g.offsetWidth;
        if (l += b.offsetLeft - x, c.config.immobile)
          return { gapDistanceSoFar: l, bundleBarsAndGapDist: u };
        c.config.bundle && u.push({
          bar: c,
          gapDistance: l
        }), n = c, c = a(c, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: u };
  }, a = (s, l) => {
    const f = document.getElementById(s.config.id), u = r().find((c) => c.includes(s)) || [];
    let n = [];
    return l === "left" ? n = u.filter((c) => {
      const g = document.getElementById(c.config.id);
      return g && g.offsetLeft < f.offsetLeft && c.config.pushOnOverlap !== !1;
    }) : n = u.filter((c) => {
      const g = document.getElementById(c.config.id);
      return g && g.offsetLeft > f.offsetLeft && c.config.pushOnOverlap !== !1;
    }), n.length > 0 ? n.reduce((c, g) => {
      const b = document.getElementById(c.config.id), x = document.getElementById(g.config.id), i = Math.abs(b.offsetLeft - f.offsetLeft), m = Math.abs(x.offsetLeft - f.offsetLeft);
      return i < m ? c : g;
    }, n[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: o
  };
}, _t = () => {
  const e = je(), r = (o, d = {}) => o ? o(d).some((a) => a.type === bt || Array.isArray(a.children) && !a.children.length ? !1 : a.type !== vt || typeof a.children == "string" && a.children.trim() !== "") : !1;
  return {
    hasSlotContent: r,
    isSlotExist: (o) => !!r(e[o])
  };
}, ze = "-";
function zt(e) {
  const r = It(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: o
  } = e;
  function d(s) {
    const l = s.split(ze);
    return l[0] === "" && l.length !== 1 && l.shift(), at(l, r) || $t(s);
  }
  function a(s, l) {
    const f = t[s] || [];
    return l && o[s] ? [...f, ...o[s]] : f;
  }
  return {
    getClassGroupId: d,
    getConflictingClassGroupIds: a
  };
}
function at(e, r) {
  var s;
  if (e.length === 0)
    return r.classGroupId;
  const t = e[0], o = r.nextPart.get(t), d = o ? at(e.slice(1), o) : void 0;
  if (d)
    return d;
  if (r.validators.length === 0)
    return;
  const a = e.join(ze);
  return (s = r.validators.find(({
    validator: l
  }) => l(a))) == null ? void 0 : s.classGroupId;
}
const Ye = /^\[(.+)\]$/;
function $t(e) {
  if (Ye.test(e)) {
    const r = Ye.exec(e)[1], t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}
function It(e) {
  const {
    theme: r,
    prefix: t
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Yt(Object.entries(e.classGroups), t).forEach(([a, s]) => {
    Oe(s, o, a, r);
  }), o;
}
function Oe(e, r, t, o) {
  e.forEach((d) => {
    if (typeof d == "string") {
      const a = d === "" ? r : Pe(r, d);
      a.classGroupId = t;
      return;
    }
    if (typeof d == "function") {
      if (Gt(d)) {
        Oe(d(o), r, t, o);
        return;
      }
      r.validators.push({
        validator: d,
        classGroupId: t
      });
      return;
    }
    Object.entries(d).forEach(([a, s]) => {
      Oe(s, Pe(r, a), t, o);
    });
  });
}
function Pe(e, r) {
  let t = e;
  return r.split(ze).forEach((o) => {
    t.nextPart.has(o) || t.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(o);
  }), t;
}
function Gt(e) {
  return e.isThemeGetter;
}
function Yt(e, r) {
  return r ? e.map(([t, o]) => {
    const d = o.map((a) => typeof a == "string" ? r + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, l]) => [r + s, l])) : a);
    return [t, d];
  }) : e;
}
function Pt(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function d(a, s) {
    t.set(a, s), r++, r > e && (r = 0, o = t, t = /* @__PURE__ */ new Map());
  }
  return {
    get(a) {
      let s = t.get(a);
      if (s !== void 0)
        return s;
      if ((s = o.get(a)) !== void 0)
        return d(a, s), s;
    },
    set(a, s) {
      t.has(a) ? t.set(a, s) : d(a, s);
    }
  };
}
const it = "!";
function jt(e) {
  const r = e.separator, t = r.length === 1, o = r[0], d = r.length;
  return function(s) {
    const l = [];
    let f = 0, u = 0, n;
    for (let i = 0; i < s.length; i++) {
      let m = s[i];
      if (f === 0) {
        if (m === o && (t || s.slice(i, i + d) === r)) {
          l.push(s.slice(u, i)), u = i + d;
          continue;
        }
        if (m === "/") {
          n = i;
          continue;
        }
      }
      m === "[" ? f++ : m === "]" && f--;
    }
    const c = l.length === 0 ? s : s.substring(u), g = c.startsWith(it), b = g ? c.substring(1) : c, x = n && n > u ? n - u : void 0;
    return {
      modifiers: l,
      hasImportantModifier: g,
      baseClassName: b,
      maybePostfixModifierPosition: x
    };
  };
}
function Ht(e) {
  if (e.length <= 1)
    return e;
  const r = [];
  let t = [];
  return e.forEach((o) => {
    o[0] === "[" ? (r.push(...t.sort(), o), t = []) : t.push(o);
  }), r.push(...t.sort()), r;
}
function Ft(e) {
  return {
    cache: Pt(e.cacheSize),
    splitModifiers: jt(e),
    ...zt(e)
  };
}
const Ut = /\s+/;
function Nt(e, r) {
  const {
    splitModifiers: t,
    getClassGroupId: o,
    getConflictingClassGroupIds: d
  } = r, a = /* @__PURE__ */ new Set();
  return e.trim().split(Ut).map((s) => {
    const {
      modifiers: l,
      hasImportantModifier: f,
      baseClassName: u,
      maybePostfixModifierPosition: n
    } = t(s);
    let c = o(n ? u.substring(0, n) : u), g = !!n;
    if (!c) {
      if (!n)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (c = o(u), !c)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      g = !1;
    }
    const b = Ht(l).join(":");
    return {
      isTailwindClass: !0,
      modifierId: f ? b + it : b,
      classGroupId: c,
      originalClassName: s,
      hasPostfixModifier: g
    };
  }).reverse().filter((s) => {
    if (!s.isTailwindClass)
      return !0;
    const {
      modifierId: l,
      classGroupId: f,
      hasPostfixModifier: u
    } = s, n = l + f;
    return a.has(n) ? !1 : (a.add(n), d(f, u).forEach((c) => a.add(l + c)), !0);
  }).reverse().map((s) => s.originalClassName).join(" ");
}
function Vt() {
  let e = 0, r, t, o = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = lt(r)) && (o && (o += " "), o += t);
  return o;
}
function lt(e) {
  if (typeof e == "string")
    return e;
  let r, t = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (r = lt(e[o])) && (t && (t += " "), t += r);
  return t;
}
function Wt(e, ...r) {
  let t, o, d, a = s;
  function s(f) {
    const u = r.reduce((n, c) => c(n), e());
    return t = Ft(u), o = t.cache.get, d = t.cache.set, a = l, l(f);
  }
  function l(f) {
    const u = o(f);
    if (u)
      return u;
    const n = Nt(f, t);
    return d(f, n), n;
  }
  return function() {
    return a(Vt.apply(null, arguments));
  };
}
function A(e) {
  const r = (t) => t[e] || [];
  return r.isThemeGetter = !0, r;
}
const ct = /^\[(?:([a-z-]+):)?(.+)\]$/i, qt = /^\d+\/\d+$/, Xt = /* @__PURE__ */ new Set(["px", "full", "screen"]), Kt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Zt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Jt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Qt = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, er = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function X(e) {
  return Q(e) || Xt.has(e) || qt.test(e);
}
function Z(e) {
  return se(e, "length", lr);
}
function Q(e) {
  return !!e && !Number.isNaN(Number(e));
}
function ge(e) {
  return se(e, "number", Q);
}
function ae(e) {
  return !!e && Number.isInteger(Number(e));
}
function tr(e) {
  return e.endsWith("%") && Q(e.slice(0, -1));
}
function M(e) {
  return ct.test(e);
}
function J(e) {
  return Kt.test(e);
}
const rr = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function or(e) {
  return se(e, rr, ut);
}
function nr(e) {
  return se(e, "position", ut);
}
const sr = /* @__PURE__ */ new Set(["image", "url"]);
function ar(e) {
  return se(e, sr, ur);
}
function ir(e) {
  return se(e, "", cr);
}
function ie() {
  return !0;
}
function se(e, r, t) {
  const o = ct.exec(e);
  return o ? o[1] ? typeof r == "string" ? o[1] === r : r.has(o[1]) : t(o[2]) : !1;
}
function lr(e) {
  return Zt.test(e) && !Jt.test(e);
}
function ut() {
  return !1;
}
function cr(e) {
  return Qt.test(e);
}
function ur(e) {
  return er.test(e);
}
function dr() {
  const e = A("colors"), r = A("spacing"), t = A("blur"), o = A("brightness"), d = A("borderColor"), a = A("borderRadius"), s = A("borderSpacing"), l = A("borderWidth"), f = A("contrast"), u = A("grayscale"), n = A("hueRotate"), c = A("invert"), g = A("gap"), b = A("gradientColorStops"), x = A("gradientColorStopPositions"), i = A("inset"), m = A("margin"), E = A("opacity"), B = A("padding"), h = A("saturate"), w = A("scale"), p = A("sepia"), y = A("skew"), v = A("space"), k = A("translate"), C = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", M, r], S = () => [M, r], R = () => ["", X, Z], _ = () => ["auto", Q, M], Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], P = () => ["solid", "dashed", "dotted", "double", "none"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], $ = () => ["", "0", M], q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], U = () => [Q, ge], te = () => [Q, M];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ie],
      spacing: [X, Z],
      blur: ["none", "", J, M],
      brightness: U(),
      borderColor: [e],
      borderRadius: ["none", "", "full", J, M],
      borderSpacing: S(),
      borderWidth: R(),
      contrast: U(),
      grayscale: $(),
      hueRotate: te(),
      invert: $(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [tr, Z],
      inset: O(),
      margin: O(),
      opacity: U(),
      padding: S(),
      saturate: U(),
      scale: U(),
      sepia: $(),
      skew: te(),
      space: S(),
      translate: S()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", M]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [J]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": q()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Y(), M]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: C()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": C()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": C()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [i]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [i]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [i]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [i]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [i]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [i]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [i]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [i]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [i]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ae, M]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: O()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", M]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: $()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: $()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ae, M]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ie]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ae, M]
        }, M]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": _()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": _()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ie]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ae, M]
        }, M]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": _()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": _()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", M]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", M]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [g]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [g]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [g]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...H()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...H(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [B]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [B]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [B]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [B]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [B]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [B]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [B]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [B]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [B]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [m]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [m]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [m]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [m]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [m]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [m]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [m]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [m]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [m]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [v]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [v]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", M, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [M, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [M, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [J]
        }, J]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [M, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [M, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [M, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [M, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", J, Z]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ge]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ie]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", M]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Q, ge]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", X, M]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", M]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", M]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [E]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [E]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...P(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", X, Z]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", X, M]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: S()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", M]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", M]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [E]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Y(), nr]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", or]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ar]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [x]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [x]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [x]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [b]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [E]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...P(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [E]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: P()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [d]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [d]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [d]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [d]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [d]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [d]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [d]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [d]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...P()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [X, M]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [X, Z]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: R()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [E]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [X, Z]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", J, ir]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ie]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [E]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": W()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": W()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [t]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [f]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", J, M]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [n]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [c]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [h]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [p]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [t]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [n]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [c]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [E]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [h]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [p]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", M]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: te()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", M]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: te()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", M]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [w]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [w]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [w]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ae, M]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [k]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [k]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [y]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [y]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", M]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", M]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", M]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [X, Z, ge]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const fr = /* @__PURE__ */ Wt(dr);
function Ae(...e) {
  return fr(pr(e));
}
function dt(e) {
  let r, t, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      const d = e.length;
      for (r = 0; r < d; r++)
        e[r] && (t = dt(e[r])) && (o && (o += " "), o += t);
    } else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function pr(e) {
  let r = 0, t, o, d = "", a = e.length;
  for (; r < a; r++)
    (t = e[r]) && (o = dt(t)) && (d && (d += " "), d += o);
  return d;
}
const gr = ["id"], mr = { class: "g-gantt-bar-label" }, hr = /* @__PURE__ */ K("div", { class: "g-gantt-bar-handle-left" }, null, -1), br = /* @__PURE__ */ K("div", { class: "g-gantt-bar-handle-right" }, null, -1), vr = /* @__PURE__ */ ne({
  __name: "GanttBar",
  props: {
    bar: {}
  },
  setup(e) {
    const r = e, t = ot(), o = F(), { barStart: d, barEnd: a, width: s, chartStart: l, chartEnd: f, chartSize: u, rowHeight: n } = o, c = I(0), g = I(0), b = I(!1), x = I(!1), { bar: i } = ce(r), { mapTimeToPosition: m, mapPositionToTime: E } = _e(), { initDragOfBar: B, initDragOfBundle: h } = Lt(), { setDragLimitsOfGanttBar: w } = Rt(), p = G(() => i.value.config);
    function y(D) {
      p.value.bundle != null ? h(i.value, D) : B(i.value, D), b.value = !0;
    }
    const v = () => {
      w(i.value), !p.value.immobile && (window.addEventListener("mousemove", y, {
        once: !0
      }), window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", y), b.value = !1, x.value = !1;
        },
        { once: !0 }
      ));
    }, k = ve(tt), C = (D) => {
      var R;
      D.preventDefault(), D.type === "mouseenter" && (x.value = !0), D.type === "mouseleave" && (x.value = !1), D.type === "mousedown" && v();
      const O = (R = k == null ? void 0 : k.value) == null ? void 0 : R.getBoundingClientRect();
      if (!O)
        return;
      const S = E(D.clientX - O.left);
      t(D, i.value, S);
    };
    return Le(() => {
      ye(
        [i, s, l, f, u.width],
        () => {
          c.value = m(i.value[d.value]), g.value = m(i.value[a.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (D, O) => (L(), z("div", {
      id: p.value.id,
      class: Te(T(Ae)("g-gantt-bar", p.value.class ?? "")),
      style: V({
        ...p.value.style,
        position: "absolute",
        top: `${T(n) * 0.1}px`,
        left: `${c.value}px`,
        width: `${g.value - c.value}px`,
        height: `${T(n) * 0.8}px`,
        zIndex: b.value ? 3 : 2
      }),
      onMousedown: C,
      onClick: C,
      onDblclick: C,
      onMouseenter: C,
      onMouseleave: C,
      onContextmenu: C
    }, [
      K("div", mr, [
        N(D.$slots, "default", { bar: T(i) }, () => [
          K("div", null, ue(p.value.label || ""), 1)
        ])
      ]),
      p.value.hasHandles && x.value ? (L(), z(ee, { key: 0 }, [
        hr,
        br
      ], 64)) : oe("", !0)
    ], 46, gr));
  }
}), yr = /* @__PURE__ */ ne({
  __name: "GanttBarTooltip",
  props: {
    bar: {},
    modelValue: { type: Boolean }
  },
  setup(e) {
    const r = e, { bar: t } = ce(r), { precision: o, font: d, barStart: a, barEnd: s, rowHeight: l } = F(), f = I("10px"), u = I("0px");
    ye(
      () => r.bar,
      async () => {
        var w;
        await He();
        const i = ((w = t == null ? void 0 : t.value) == null ? void 0 : w.config.id) || "";
        if (!i)
          return;
        const m = document.getElementById(i), { top: E, left: B } = (m == null ? void 0 : m.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, h = Math.max(B, 10);
        f.value = `${E + l.value - 10}px`, u.value = `${h}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const n = G(() => {
      var i, m;
      return ((m = (i = t == null ? void 0 : t.value) == null ? void 0 : i.config.style) == null ? void 0 : m.background) || At;
    }), { toDayjs: c } = fe(), g = G(() => {
      var i;
      return (i = t.value) == null ? void 0 : i[a.value];
    }), b = G(() => {
      var i;
      return (i = t.value) == null ? void 0 : i[s.value];
    }), x = G(() => {
      if (!(t != null && t.value))
        return "";
      const i = Ot[o.value], m = c(g.value).format(i), E = c(b.value).format(i);
      return `${m} – ${E}`;
    });
    return (i, m) => (L(), he(yt, { to: "body" }, [
      Re(wt, {
        name: "g-fade",
        mode: "out-in"
      }, {
        default: le(() => [
          i.modelValue ? (L(), z("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: V({
              top: f.value,
              left: u.value,
              fontFamily: T(d)
            })
          }, [
            K("div", {
              class: "g-gantt-tooltip-color-dot",
              style: V({ background: n.value })
            }, null, 4),
            N(i.$slots, "default", {
              bar: T(t),
              barStart: g.value,
              barEnd: b.value
            }, () => [
              be(ue(x.value), 1)
            ])
          ], 4)) : oe("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
function wr(e) {
  return xt() ? (Et(e), !0) : !1;
}
function xr(e) {
  return typeof e == "function" ? e() : T(e);
}
const Er = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function Br(e) {
  return e || Fe();
}
function kr(e, r = !0, t) {
  Br() ? Le(e, t) : r ? e() : He(e);
}
function re(e) {
  var r;
  const t = xr(e);
  return (r = t == null ? void 0 : t.$el) != null ? r : t;
}
const ft = Er ? window : void 0;
function Sr() {
  const e = I(!1), r = Fe();
  return r && Le(() => {
    e.value = !0;
  }, r), e;
}
function Mr(e) {
  const r = Sr();
  return G(() => (r.value, !!e()));
}
function Cr(e, r, t = {}) {
  const { window: o = ft, ...d } = t;
  let a;
  const s = Mr(() => o && "ResizeObserver" in o), l = () => {
    a && (a.disconnect(), a = void 0);
  }, f = G(() => Array.isArray(e) ? e.map((c) => re(c)) : [re(e)]), u = ye(
    f,
    (c) => {
      if (l(), s.value && o) {
        a = new ResizeObserver(r);
        for (const g of c)
          g && a.observe(g, d);
      }
    },
    { immediate: !0, flush: "post" }
  ), n = () => {
    l(), u();
  };
  return wr(n), {
    isSupported: s,
    stop: n
  };
}
function Dr(e, r = { width: 0, height: 0 }, t = {}) {
  const { window: o = ft, box: d = "content-box" } = t, a = G(() => {
    var c, g;
    return (g = (c = re(e)) == null ? void 0 : c.namespaceURI) == null ? void 0 : g.includes("svg");
  }), s = I(r.width), l = I(r.height), { stop: f } = Cr(
    e,
    ([c]) => {
      const g = d === "border-box" ? c.borderBoxSize : d === "content-box" ? c.contentBoxSize : c.devicePixelContentBoxSize;
      if (o && a.value) {
        const b = re(e);
        if (b) {
          const x = o.getComputedStyle(b);
          s.value = Number.parseFloat(x.width), l.value = Number.parseFloat(x.height);
        }
      } else if (g) {
        const b = Array.isArray(g) ? g : [g];
        s.value = b.reduce((x, { inlineSize: i }) => x + i, 0), l.value = b.reduce((x, { blockSize: i }) => x + i, 0);
      } else
        s.value = c.contentRect.width, l.value = c.contentRect.height;
    },
    t
  );
  kr(() => {
    const c = re(e);
    c && (s.value = "offsetWidth" in c ? c.offsetWidth : r.width, l.value = "offsetHeight" in c ? c.offsetHeight : r.height);
  });
  const u = ye(
    () => re(e),
    (c) => {
      s.value = c ? r.width : 0, l.value = c ? r.height : 0;
    }
  );
  function n() {
    f(), u();
  }
  return {
    width: s,
    height: l,
    stop: n
  };
}
const Tr = { class: "g-gantt-rows-container" }, Or = /* @__PURE__ */ ne({
  __name: "GanttChart",
  props: {
    chartStart: {},
    chartEnd: {},
    precision: { default: "day" },
    barStart: {},
    barEnd: {},
    dateFormat: { type: [String, Boolean], default: nt },
    width: { default: "100%" },
    hideTimeaxis: { type: Boolean, default: !1 },
    colorScheme: { default: "default" },
    grid: { type: Boolean, default: !1 },
    pushOnOverlap: { type: Boolean, default: !1 },
    noOverlap: { type: Boolean, default: !1 },
    rowHeight: { default: 40 },
    highlightedUnits: { default: () => [] },
    font: { default: "inherit" }
  },
  emits: ["click-bar", "mousedown-bar", "mouseup-bar", "dblclick-bar", "mouseenter-bar", "mouseleave-bar", "dragstart-bar", "drag-bar", "dragend-bar", "contextmenu-bar"],
  setup(e, { emit: r }) {
    const t = e, o = r, { width: d, font: a, colorScheme: s } = ce(t), l = je(), f = G(
      () => typeof s.value != "string" ? s.value : Ie[s.value] || Ie.default
    ), u = () => {
      var p;
      const h = (p = l.default) == null ? void 0 : p.call(l), w = [];
      return h && h.forEach((y) => {
        var v;
        if ((v = y.props) != null && v.bars) {
          const k = y.props.bars;
          w.push(k);
        } else
          Array.isArray(y.children) && y.children.forEach((k) => {
            var D;
            const C = k;
            if ((D = C == null ? void 0 : C.props) != null && D.bars) {
              const O = C.props.bars;
              w.push(O);
            }
          });
      }), w;
    }, n = I(!1), c = I(!1), g = I(void 0);
    let b;
    const x = (h) => {
      b && clearTimeout(b), b = setTimeout(() => {
        n.value = !0;
      }, 800), g.value = h;
    }, i = () => {
      clearTimeout(b), n.value = !1;
    }, m = (h, w, p, y) => {
      switch (h.type) {
        case "click":
          o("click-bar", {
            bar: w,
            e: h,
            datetime: p
          });
          break;
        case "mousedown":
          o("mousedown-bar", {
            bar: w,
            e: h,
            datetime: p
          });
          break;
        case "mouseup":
          o("mouseup-bar", {
            bar: w,
            e: h,
            datetime: p
          });
          break;
        case "dblclick":
          o("dblclick-bar", {
            bar: w,
            e: h,
            datetime: p
          });
          break;
        case "mouseenter":
          x(w), o("mouseenter-bar", { bar: w, e: h });
          break;
        case "mouseleave":
          i(), o("mouseleave-bar", { bar: w, e: h });
          break;
        case "dragstart":
          c.value = !0, o("dragstart-bar", { bar: w, e: h });
          break;
        case "drag":
          o("drag-bar", { bar: w, e: h });
          break;
        case "dragend":
          c.value = !1, o("dragend-bar", {
            bar: w,
            e: h,
            movedBars: y
          });
          break;
        case "contextmenu":
          o("contextmenu-bar", {
            bar: w,
            e: h,
            datetime: p
          });
          break;
      }
    }, E = I(null), B = Dr(E);
    return me(Je, u), me(Qe, {
      ...ce(t),
      colors: f,
      chartSize: B
    }), me(et, m), (h, w) => (L(), z("div", {
      ref_key: "ganttChart",
      ref: E,
      class: "g-gantt-chart",
      style: V({ width: T(d), background: f.value.background, fontFamily: T(a) })
    }, [
      h.hideTimeaxis ? oe("", !0) : (L(), he(T(Ir), { key: 0 }, {
        "upper-timeunit": le(({ label: p, value: y, date: v }) => [
          N(h.$slots, "upper-timeunit", {
            label: p,
            value: y,
            date: v
          })
        ]),
        timeunit: le(({ value: p, label: y, date: v }) => [
          N(h.$slots, "timeunit", {
            value: p,
            label: y,
            date: v
          })
        ]),
        _: 3
      })),
      h.grid ? (L(), he(T(Rr), {
        key: 1,
        "highlighted-units": h.highlightedUnits
      }, null, 8, ["highlighted-units"])) : oe("", !0),
      K("div", Tr, [
        N(h.$slots, "default")
      ]),
      Re(T(yr), {
        "model-value": n.value || c.value,
        bar: g.value
      }, {
        default: le(() => [
          N(h.$slots, "bar-tooltip", { bar: g.value })
        ]),
        _: 3
      }, 8, ["model-value", "bar"])
    ], 4));
  }
}), Ar = /* @__PURE__ */ ne({
  __name: "GanttRow",
  props: {
    label: {},
    bars: {},
    highlightOnHover: { type: Boolean },
    hideLabel: { type: Boolean }
  },
  emits: ["drop"],
  setup(e, { emit: r }) {
    const t = e, o = r, { rowHeight: d, colors: a } = F(), { highlightOnHover: s } = ce(t), l = I(!1), f = G(() => ({
      height: `${d.value}px`,
      background: s != null && s.value && l.value ? a.value.hoverHighlight : null
    })), { mapPositionToTime: u } = _e(), { isSlotExist: n } = _t(), c = I(null);
    me(tt, c);
    const g = (b) => {
      var E;
      const x = (E = c.value) == null ? void 0 : E.getBoundingClientRect();
      if (!x) {
        console.error("Gantt: failed to find bar container element for row.");
        return;
      }
      const i = b.clientX - x.left, m = u(i);
      o("drop", { e: b, datetime: m });
    };
    return (b, x) => (L(), z("div", {
      class: "g-gantt-row",
      style: V(f.value),
      onDragover: x[0] || (x[0] = Bt((i) => l.value = !0, ["prevent"])),
      onDragleave: x[1] || (x[1] = (i) => l.value = !1),
      onDrop: x[2] || (x[2] = (i) => g(i)),
      onMouseover: x[3] || (x[3] = (i) => l.value = !0),
      onMouseleave: x[4] || (x[4] = (i) => l.value = !1)
    }, [
      !b.hideLabel && b.label ? (L(), z("div", {
        key: 0,
        class: "g-gantt-row-label",
        style: V({ background: T(a).primary, color: T(a).text })
      }, [
        T(n)("default") ? N(b.$slots, "default", {
          key: 0,
          label: b.label
        }) : (L(), z(ee, { key: 1 }, [
          be(ue(b.label), 1)
        ], 64))
      ], 4)) : oe("", !0),
      K("div", kt({
        ref_key: "barContainer",
        ref: c,
        class: "g-gantt-row-bars-container"
      }, b.$attrs), [
        Re(St, {
          name: "bar-transition",
          tag: "div"
        }, {
          default: le(() => [
            T(n)("bar") ? (L(!0), z(ee, { key: 0 }, de(b.bars, (i) => N(b.$slots, "item", {
              key: i.config.id,
              data: i
            })), 128)) : (L(!0), z(ee, { key: 1 }, de(b.bars, (i) => (L(), he(T(vr), {
              key: i.config.id,
              bar: i
            }, null, 8, ["bar"]))), 128))
          ]),
          _: 3
        })
      ], 16)
    ], 36));
  }
}), Lr = { class: "g-grid-container" }, Rr = /* @__PURE__ */ ne({
  __name: "GanttGrid",
  props: {
    highlightedUnits: {}
  },
  setup(e) {
    const { colors: r } = F(), { timeaxisUnits: t } = st();
    return (o, d) => (L(), z("div", Lr, [
      (L(!0), z(ee, null, de(T(t).lowerUnits, ({ label: a, value: s, width: l }) => {
        var f;
        return L(), z("div", {
          key: a,
          class: "g-grid-line",
          style: V({
            width: l,
            background: (f = o.highlightedUnits) != null && f.includes(Number(s)) ? T(r).hoverHighlight : void 0
          })
        }, null, 4);
      }), 128))
    ]));
  }
}), _r = { class: "g-timeaxis tw-border tw-border-zinc-300 tw-rounded-t-md" }, zr = { class: "g-timeunits-container" }, $r = { class: "g-timeunits-container" }, Ir = /* @__PURE__ */ ne({
  __name: "GanttTimeAxis",
  setup(e) {
    const { precision: r, colors: t } = F(), { timeaxisUnits: o } = st();
    return (d, a) => (L(), z("div", _r, [
      K("div", zr, [
        (L(!0), z(ee, null, de(T(o).upperUnits, ({ label: s, value: l, date: f, width: u }, n) => (L(), z("div", {
          key: s,
          class: Te(T(Ae)("g-upper-timeunit", "")),
          style: V({
            background: n % 2 === 0 ? T(t).primary : T(t).secondary,
            color: T(t).text,
            width: u
          })
        }, [
          N(d.$slots, "upper-timeunit", {
            label: s,
            value: l,
            date: f
          }, () => [
            be(ue(s), 1)
          ])
        ], 6))), 128))
      ]),
      K("div", $r, [
        (L(!0), z(ee, null, de(T(o).lowerUnits, ({ label: s, value: l, date: f, width: u }, n) => (L(), z("div", {
          key: s,
          class: Te(T(Ae)("g-timeunit", "tw-border-zinc-300 tw-border-t tw-border-r")),
          style: V({
            background: n % 2 === 0 ? T(t).ternary : T(t).quartenary,
            color: T(t).text,
            flexDirection: T(r) === "hour" ? "column" : "row",
            alignItems: T(r) === "hour" ? "" : "center",
            width: u
          })
        }, [
          N(d.$slots, "timeunit", {
            label: s,
            value: l,
            date: f
          }, () => [
            be(ue(s), 1)
          ]),
          T(r) === "hour" ? (L(), z("div", {
            key: 0,
            class: "g-timeaxis-hour-pin",
            style: V({ background: T(t).text })
          }, null, 4)) : oe("", !0)
        ], 6))), 128))
      ])
    ]));
  }
});
function Gr() {
  j.extend(Ne), j.extend(We), j.extend(Xe), j.extend(Ze);
}
const Hr = {
  install(e) {
    Gr(), e.component("GiGanttChart", Or), e.component("GiGanttRow", Ar);
  }
};
export {
  Hr as default,
  Gr as extendDayjs,
  Hr as plugin
};
