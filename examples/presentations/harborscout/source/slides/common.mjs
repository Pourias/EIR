export const C = {
  bg: "#F6F8F6",
  bg2: "#E9EFEA",
  ink: "#10231F",
  muted: "#5E6B66",
  navy: "#102A43",
  teal: "#1C7C7D",
  blue: "#2F66A3",
  orange: "#E07035",
  red: "#B84A3B",
  olive: "#677A41",
  sand: "#D8C7A3",
  white: "#FFFFFF",
  line: "#C7D2CB",
  dark: "#0B1717",
  grid: "#DDE6DF",
};

export const FONT = {
  title: "Aptos Display",
  body: "Aptos",
  mono: "Aptos Mono",
};

export function addText(ctx, slide, text, x, y, w, h, opts = {}) {
  return ctx.addText(slide, {
    text,
    x,
    y,
    w,
    h,
    fontSize: opts.size ?? 24,
    color: opts.color ?? C.ink,
    bold: opts.bold ?? false,
    typeface: opts.face ?? (opts.mono ? FONT.mono : opts.title ? FONT.title : FONT.body),
    align: opts.align ?? "left",
    valign: opts.valign ?? "top",
    fill: opts.fill ?? "#00000000",
    line: opts.line ?? ctx.line("#00000000", 0),
    insets: opts.insets ?? { left: 0, right: 0, top: 0, bottom: 0 },
  });
}

export function addBox(ctx, slide, x, y, w, h, opts = {}) {
  return ctx.addShape(slide, {
    x,
    y,
    w,
    h,
    geometry: opts.geometry ?? "rect",
    fill: opts.fill ?? C.white,
    line: opts.line ?? ctx.line(opts.stroke ?? C.line, opts.strokeWidth ?? 1),
  });
}

export function addRule(ctx, slide, x, y, w, color = C.line, height = 2) {
  return addBox(ctx, slide, x, y, w, height, { fill: color, line: ctx.line("#00000000", 0) });
}

export function addFooter(ctx, slide, n, section = "Investor deck") {
  addRule(ctx, slide, 64, 664, 1152, "#CAD6CE", 1);
  addText(ctx, slide, `HarborScout AI | ${section}`, 64, 676, 520, 20, { size: 13, color: C.muted });
  addText(ctx, slide, `2026-05-26 | ${String(n).padStart(2, "0")}`, 1050, 676, 166, 20, {
    size: 13,
    color: C.muted,
    align: "right",
  });
}

export function addHeader(ctx, slide, n, kicker, title, opts = {}) {
  addText(ctx, slide, kicker.toUpperCase(), 64, 44, 520, 24, {
    size: 13,
    color: opts.dark ? "#A9C7BE" : C.teal,
    bold: true,
    mono: true,
  });
  addText(ctx, slide, title, 64, 74, 760, 76, {
    size: opts.size ?? 38,
    color: opts.dark ? C.white : C.ink,
    bold: true,
    title: true,
  });
  addFooter(ctx, slide, n, opts.section ?? "Investor deck");
}

export function newSlide(presentation, ctx, n, kicker, title, opts = {}) {
  const slide = presentation.slides.add();
  addBox(ctx, slide, 0, 0, 1280, 720, { fill: opts.dark ? C.dark : C.bg, line: ctx.line("#00000000", 0) });
  addHeader(ctx, slide, n, kicker, title, opts);
  return slide;
}

export function bulletList(ctx, slide, items, x, y, w, opts = {}) {
  const rowH = opts.rowH ?? 54;
  items.forEach((item, i) => {
    const yy = y + i * rowH;
    addBox(ctx, slide, x, yy + 7, 10, 10, { fill: opts.dot ?? C.teal, line: ctx.line("#00000000", 0) });
    addText(ctx, slide, item, x + 26, yy, w - 26, rowH - 6, {
      size: opts.size ?? 22,
      color: opts.color ?? C.ink,
      bold: opts.bold ?? false,
    });
  });
}

export function kpi(ctx, slide, x, y, w, h, value, label, opts = {}) {
  addBox(ctx, slide, x, y, w, h, {
    fill: opts.fill ?? C.white,
    stroke: opts.stroke ?? C.line,
    strokeWidth: 1,
  });
  addText(ctx, slide, value, x + 18, y + 17, w - 36, 42, {
    size: opts.valueSize ?? 32,
    color: opts.color ?? C.teal,
    bold: true,
    title: true,
  });
  addText(ctx, slide, label, x + 18, y + 64, w - 36, h - 76, {
    size: opts.labelSize ?? 15,
    color: opts.labelColor ?? C.muted,
  });
}

export function labeledBox(ctx, slide, x, y, w, h, label, body, opts = {}) {
  addBox(ctx, slide, x, y, w, h, {
    fill: opts.fill ?? C.white,
    stroke: opts.stroke ?? C.line,
    strokeWidth: 1,
  });
  addText(ctx, slide, label, x + 18, y + 16, w - 36, 24, {
    size: opts.labelSize ?? 16,
    color: opts.accent ?? C.teal,
    bold: true,
    mono: true,
  });
  addText(ctx, slide, body, x + 18, y + 48, w - 36, h - 62, {
    size: opts.bodySize ?? 20,
    color: opts.color ?? C.ink,
    bold: opts.bold ?? false,
  });
}

export function addBoat(ctx, slide, x, y, scale = 1, accent = C.teal) {
  addBox(ctx, slide, x, y + 46 * scale, 210 * scale, 30 * scale, { fill: accent, line: ctx.line("#00000000", 0) });
  addBox(ctx, slide, x + 34 * scale, y + 24 * scale, 84 * scale, 28 * scale, { fill: C.white, stroke: accent, strokeWidth: 3 });
  addBox(ctx, slide, x + 132 * scale, y + 34 * scale, 42 * scale, 18 * scale, { fill: C.navy, line: ctx.line("#00000000", 0) });
  addRule(ctx, slide, x + 14 * scale, y + 86 * scale, 182 * scale, accent, 5 * scale);
  addRule(ctx, slide, x + 34 * scale, y + 102 * scale, 142 * scale, accent, 3 * scale);
}

export function miniBar(ctx, slide, x, y, w, h, bars, opts = {}) {
  const max = Math.max(...bars.map((b) => b.value));
  const gap = opts.gap ?? (bars.length <= 2 ? 72 : 18);
  const barW = (w - gap * (bars.length - 1)) / bars.length;
  bars.forEach((bar, i) => {
    const bh = (bar.value / max) * (h - 60);
    const bx = x + i * (barW + gap);
    const by = y + (h - 50 - bh);
    addBox(ctx, slide, bx, by, barW, bh, { fill: bar.color ?? opts.color ?? C.teal, line: ctx.line("#00000000", 0) });
    addText(ctx, slide, bar.label, bx, y + h - 42, barW, 34, { size: 13, color: C.muted, align: "center" });
    addText(ctx, slide, bar.top, bx, by - 28, barW, 24, { size: 14, color: C.ink, bold: true, align: "center" });
  });
}

export function sectionTag(ctx, slide, text, x, y, color = C.orange) {
  addBox(ctx, slide, x, y, 10, 28, { fill: color, line: ctx.line("#00000000", 0) });
  addText(ctx, slide, text.toUpperCase(), x + 18, y + 4, 320, 22, { size: 14, color, bold: true, mono: true });
}
