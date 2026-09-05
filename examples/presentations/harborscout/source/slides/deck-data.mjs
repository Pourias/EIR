import {
  C,
  addText,
  addBox,
  addRule,
  addFooter,
  newSlide,
  bulletList,
  kpi,
  labeledBox,
  addBoat,
  miniBar,
  sectionTag,
} from "./common.mjs";

const sourceNote = "Sources: YC seed deck template; EIR memo 2026-05-26; Navy, USCG, Saronic, Saildrone, HavocAI, MARTAC, Textron, Hydronalix, MarketsandMarkets, Fortune Business Insights.";

export async function renderDeckSlide(slideNumber, presentation, ctx) {
  const n = slideNumber;

  if (n === 1) {
    const slide = presentation.slides.add();
    addBox(ctx, slide, 0, 0, 1280, 720, { fill: C.dark, line: ctx.line("#00000000", 0) });
    addRule(ctx, slide, 0, 0, 1280, C.teal, 9);
    addText(ctx, slide, "HarborScout AI", 64, 74, 760, 72, { size: 52, color: C.white, bold: true, title: true });
    addText(ctx, slide, "Micro autonomous surface vessels for dangerous maritime missions", 64, 158, 760, 78, {
      size: 28,
      color: "#C8DAD4",
    });
    addBoat(ctx, slide, 770, 136, 1.55, C.teal);
    addRule(ctx, slide, 790, 336, 344, C.orange, 5);
    addText(ctx, slide, "Investor pitch deck", 64, 580, 280, 28, { size: 18, color: "#A9C7BE", mono: true });
    addText(ctx, slide, "Working name and assumptions are editable", 64, 612, 420, 30, { size: 16, color: "#7FA69B" });
    addFooter(ctx, slide, n, "YC-style seed deck");
    return slide;
  }

  if (n === 2) {
    const slide = newSlide(presentation, ctx, n, "Non-obvious insight", "Maritime autonomy is moving from demo theater to procurement pressure.");
    kpi(ctx, slide, 70, 205, 250, 132, "23+", "Unmanned systems tested by Navy Task Force 59", { color: C.blue });
    kpi(ctx, slide, 350, 205, 250, 132, "60k+", "Unmanned operating hours reported across exercises", { color: C.teal });
    kpi(ctx, slide, 630, 205, 250, 132, "2025", "USCG creates robotics and autonomous systems PEO", { color: C.orange });
    kpi(ctx, slide, 910, 205, 250, 132, "$9.25B", "Reported Saronic valuation after Series D", { color: C.olive });
    addText(ctx, slide, "The opportunity is not another generic boat. It is a mission-specific, low-cost sensing platform that gets trusted in real water before incumbents can bundle the workflow.", 110, 410, 1040, 98, {
      size: 28,
      color: C.ink,
      bold: true,
      title: true,
      align: "center",
    });
    addText(ctx, slide, sourceNote, 108, 620, 1060, 30, { size: 11, color: C.muted, align: "center" });
    return slide;
  }

  if (n === 3) {
    const slide = newSlide(presentation, ctx, n, "Problem", "The most dangerous maritime searches still put people and expensive assets in harm's way.");
    const items = [
      "Search and rescue needs fast coverage when conditions are bad and minutes matter.",
      "Mine-like object and underwater debris detection is slow, risky, and sensor-heavy.",
      "Ports, bridges, rivers, and harbors need persistent domain awareness without crewing every patrol.",
      "Defense and public-safety teams face budget, staffing, and launch/recovery constraints.",
    ];
    bulletList(ctx, slide, items, 78, 194, 670, { rowH: 72, size: 22, dot: C.red });
    addBox(ctx, slide, 820, 190, 300, 300, { fill: "#EAF2EF", stroke: C.line });
    addRule(ctx, slide, 860, 396, 220, C.blue, 16);
    addRule(ctx, slide, 886, 430, 168, C.teal, 10);
    addBoat(ctx, slide, 864, 260, 0.82, C.red);
    addText(ctx, slide, "Crewed boats, helicopters, divers, and fixed sensors are too scarce or too slow for the full mission load.", 800, 518, 345, 72, {
      size: 21,
      color: C.ink,
      bold: true,
      align: "center",
    });
    return slide;
  }

  if (n === 4) {
    const slide = newSlide(presentation, ctx, n, "Current alternatives", "Existing options force a tradeoff between size, cost, persistence, and safety.");
    const cols = [
      ["Crewed small boats", "Flexible but expensive, crew-constrained, and exposed to threat or weather."],
      ["Aerial drones", "Fast to deploy but limited by endurance, payload, weather, and surface/underwater sensing."],
      ["Large USVs", "Capable but expensive, harder to launch, and often overkill for harbor-scale missions."],
      ["Fixed sensors", "Persistent but static, blind outside coverage zones, and slow to redeploy."],
    ];
    cols.forEach((col, i) => {
      labeledBox(ctx, slide, 70 + i * 292, 205, 250, 250, col[0], col[1], {
        accent: [C.red, C.orange, C.blue, C.olive][i],
        bodySize: 19,
      });
    });
    addText(ctx, slide, "HarborScout's wedge: small enough to deploy frequently, smart enough to classify mission objects, cheap enough to put where crewed assets cannot wait.", 105, 510, 1070, 76, {
      size: 28,
      color: C.ink,
      bold: true,
      title: true,
      align: "center",
    });
    return slide;
  }

  if (n === 5) {
    const slide = newSlide(presentation, ctx, n, "Solution", "A very small autonomous surface vessel built around mission sensing, not boat novelty.");
    addBoat(ctx, slide, 86, 230, 1.36, C.teal);
    const rings = [
      ["1", "Autonomous hull", "Shore, truck, small boat, or cutter deployable"],
      ["2", "Mission payload", "Optical, thermal, AIS, sonar, or other sensor kit"],
      ["3", "Edge AI", "Object detection, classification, route planning, alerting"],
      ["4", "Operator console", "Supervise multiple craft with clear override logic"],
    ];
    rings.forEach((r, i) => {
      const x = 520 + (i % 2) * 330;
      const y = 190 + Math.floor(i / 2) * 170;
      addBox(ctx, slide, x, y, 275, 120, { fill: C.white, stroke: C.line });
      addBox(ctx, slide, x + 18, y + 22, 36, 36, { fill: i === 0 ? C.teal : i === 1 ? C.orange : i === 2 ? C.blue : C.olive, line: ctx.line("#00000000", 0) });
      addText(ctx, slide, r[0], x + 18, y + 27, 36, 24, { size: 18, color: C.white, bold: true, align: "center" });
      addText(ctx, slide, r[1], x + 68, y + 20, 190, 24, { size: 18, color: C.ink, bold: true });
      addText(ctx, slide, r[2], x + 68, y + 50, 184, 48, { size: 15, color: C.muted });
    });
    addText(ctx, slide, "First product goal: find, classify, and report mission objects in littoral water with less human exposure and lower cost per search hour.", 92, 515, 1090, 58, {
      size: 25,
      color: C.ink,
      bold: true,
      align: "center",
    });
    return slide;
  }

  if (n === 6) {
    const slide = newSlide(presentation, ctx, n, "Product system", "The defensible product is the mission loop: sense, decide, coordinate, and prove.");
    const boxes = [
      [82, 220, 190, 104, "Sensor kit", "Camera, thermal, AIS, side-scan sonar"],
      [326, 220, 190, 104, "Edge autonomy", "Navigation, obstacle behavior, COLREGs logic"],
      [570, 220, 190, 104, "AI classifier", "Object detection, alert triage, confidence"],
      [814, 220, 190, 104, "Fleet console", "One operator, multiple small USVs"],
      [1012, 405, 160, 86, "Mission record", "Audit log and replay"],
    ];
    boxes.forEach((b, i) => labeledBox(ctx, slide, b[0], b[1], b[2], b[3], b[4], b[5], {
      accent: [C.teal, C.blue, C.orange, C.olive, C.red][i],
      bodySize: 15,
    }));
    [[272, 270, 54], [516, 270, 54], [760, 270, 54], [966, 318, 58]].forEach((a) => {
      addRule(ctx, slide, a[0], a[1], a[2], C.muted, 3);
      addText(ctx, slide, ">", a[0] + a[2] - 6, a[1] - 14, 18, 24, { size: 22, color: C.muted, bold: true });
    });
    addBox(ctx, slide, 108, 430, 790, 66, { fill: "#EAF2EF", stroke: C.line });
    addText(ctx, slide, "Proof object investors should demand: water-hour logs, detection precision/recall, deployment time, recovery time, comms failure behavior, and operator workload.", 128, 448, 750, 34, {
      size: 19,
      color: C.ink,
      bold: true,
    });
    return slide;
  }

  if (n === 7) {
    const slide = newSlide(presentation, ctx, n, "Initial wedge", "Start non-kinetic: object detection and search workflows create trust faster than weaponized use cases.");
    const wedges = [
      ["Coast Guard / SAR", "Locate person-sized targets, debris, or hazards while expanding surface coverage."],
      ["Harbor security", "Persistent patrol around ports, bridges, vessels, restricted zones, and event perimeters."],
      ["Mine-like object survey", "Shallow-water detection and classification before any dangerous neutralization mission."],
    ];
    wedges.forEach((w, i) => {
      labeledBox(ctx, slide, 88 + i * 364, 206, 310, 238, w[0], w[1], {
        accent: [C.teal, C.blue, C.orange][i],
        bodySize: 22,
      });
    });
    addText(ctx, slide, "The beachhead should be a measurable mission with a fast pilot path, not a broad claim that it can do every maritime job.", 150, 510, 980, 58, {
      size: 27,
      color: C.ink,
      bold: true,
      align: "center",
    });
    return slide;
  }

  if (n === 8) {
    const slide = newSlide(presentation, ctx, n, "Market", "Market reports understate the timing signal: buyers are moving because missions are changing.");
    miniBar(ctx, slide, 98, 232, 420, 210, [
      { label: "2025", value: 0.82, top: "$0.82B", color: C.teal },
      { label: "2030", value: 1.59, top: "$1.59B", color: C.teal },
    ]);
    addText(ctx, slide, "MarketsandMarkets directional USV estimate", 116, 468, 380, 22, { size: 15, color: C.muted, align: "center" });
    miniBar(ctx, slide, 642, 232, 420, 210, [
      { label: "2025", value: 2.4, top: "$2.4B", color: C.blue },
      { label: "2034", value: 3.55, top: "$3.55B", color: C.blue },
    ]);
    addText(ctx, slide, "Fortune Business Insights broader USV estimate", 660, 468, 380, 22, { size: 15, color: C.muted, align: "center" });
    addText(ctx, slide, "Better lens: budgets for maritime domain awareness, mine countermeasures, port security, search and rescue, and unmanned fleet experimentation.", 128, 535, 1024, 44, {
      size: 23,
      color: C.ink,
      bold: true,
      align: "center",
    });
    return slide;
  }

  if (n === 9) {
    const slide = newSlide(presentation, ctx, n, "Competition", "The space is crowded, so the deck must sell a wedge rather than a category.");
    const rows = [
      ["Saronic", "Defense-first ASVs", "Well-funded production scale"],
      ["Saildrone", "Long-endurance MDA", "Fleet data and operating history"],
      ["HavocAI", "Collaborative USV autonomy", "Small-to-medium attritable systems"],
      ["MARTAC", "Man-portable USVs", "Defense and SOF mission breadth"],
      ["Textron", "Program USV / MCM", "Prime scale and towing payload"],
      ["Hydronalix", "SAR / small rescue USV", "First-responder footprint"],
    ];
    addBox(ctx, slide, 72, 176, 1136, 384, { fill: C.white, stroke: C.line });
    ["Company", "Main angle", "Why it matters"].forEach((h, i) => addText(ctx, slide, h, 96 + i * 355, 196, 320, 24, { size: 15, color: C.teal, bold: true, mono: true }));
    rows.forEach((r, i) => {
      const y = 234 + i * 50;
      addRule(ctx, slide, 96, y - 8, 1060, "#E1E8E2", 1);
      addText(ctx, slide, r[0], 96, y, 260, 24, { size: 19, color: C.ink, bold: true });
      addText(ctx, slide, r[1], 452, y, 300, 24, { size: 18, color: C.ink });
      addText(ctx, slide, r[2], 806, y, 350, 24, { size: 18, color: C.muted });
    });
    addText(ctx, slide, "Positioning gap to test: smaller than defense ASVs, more mission-capable than first-responder rescue craft, cheaper and faster to pilot than prime-led systems.", 115, 585, 1050, 36, {
      size: 20,
      color: C.ink,
      bold: true,
      align: "center",
    });
    return slide;
  }

  if (n === 10) {
    const slide = newSlide(presentation, ctx, n, "Business model", "Hardware opens the door; recurring software, support, and mission services make the business.");
    const models = [
      ["Hardware sale", "USV, payload kit, chargers, spares, field kit", "Gross margin improves with production discipline"],
      ["Software + support", "Autonomy, mission planning, classification, logs, fleet console", "Recurring margin and expansion path"],
      ["Mission service", "Contractor-owned / operated search, survey, MDA, or inspection", "Faster early revenue where buyers lack operators"],
    ];
    models.forEach((m, i) => {
      labeledBox(ctx, slide, 80 + i * 372, 210, 318, 230, m[0], `${m[1]}\n\n${m[2]}`, {
        accent: [C.teal, C.blue, C.orange][i],
        bodySize: 18,
      });
    });
    addText(ctx, slide, "North-star unit metric: lower cost per search hour, square mile covered, or confirmed object than crewed boats, aerial drones, and existing USVs.", 120, 512, 1040, 54, {
      size: 24,
      color: C.ink,
      bold: true,
      align: "center",
    });
    return slide;
  }

  if (n === 11) {
    const slide = newSlide(presentation, ctx, n, "Go to market", "Win trust through sponsored demos, not slideware.");
    const steps = [
      ["0-90 days", "Build or retrofit one water-tested prototype around a single mission metric."],
      ["3-6 months", "Run structured pilots with SAR, port security, Navy/MCM, or Coast Guard-adjacent users."],
      ["6-12 months", "Convert best use case into paid demo, non-dilutive funding, or strategic pilot."],
      ["12-18 months", "Package repeatable product: hull, payload, autonomy, console, training, support."],
    ];
    steps.forEach((s, i) => {
      const x = 86 + i * 288;
      addBox(ctx, slide, x, 246, 214, 72, { fill: [C.teal, C.blue, C.orange, C.olive][i], line: ctx.line("#00000000", 0) });
      addText(ctx, slide, s[0], x + 14, 267, 186, 26, { size: 20, color: C.white, bold: true, align: "center" });
      addText(ctx, slide, s[1], x - 10, 348, 234, 110, { size: 18, color: C.ink, align: "center" });
      if (i < steps.length - 1) {
        addRule(ctx, slide, x + 218, 280, 60, C.muted, 3);
        addText(ctx, slide, ">", x + 266, 266, 22, 28, { size: 24, color: C.muted, bold: true });
      }
    });
    addText(ctx, slide, "Avoid starting with a weaponized sea bomber pitch. Start with sensing, safety, survey, and command workflows that buyers can test legally and quickly.", 132, 540, 1016, 52, {
      size: 23,
      color: C.ink,
      bold: true,
      align: "center",
    });
    return slide;
  }

  if (n === 12) {
    const slide = newSlide(presentation, ctx, n, "Traction / proof plan", "No traction has been provided yet, so the seed story should sell the next proof points explicitly.");
    const proofs = [
      ["Field demo", "Autonomous waypoint mission, obstacle behavior, and recovery in real water."],
      ["Detection data", "Precision / recall on person-sized, debris-like, or mine-like objects."],
      ["Buyer pull", "15-25 structured interviews and 2-3 letters of support or demo sponsors."],
      ["Cost proof", "Measured deployment time, operator load, and cost per search hour."],
    ];
    proofs.forEach((p, i) => {
      const x = 90 + (i % 2) * 545;
      const y = 202 + Math.floor(i / 2) * 160;
      labeledBox(ctx, slide, x, y, 470, 118, p[0], p[1], {
        accent: [C.teal, C.blue, C.orange, C.olive][i],
        bodySize: 19,
      });
    });
    addText(ctx, slide, "Investor posture: this is a strong pre-seed concept only after water-hour evidence and buyer-discovery signal exist.", 152, 545, 976, 44, {
      size: 24,
      color: C.red,
      bold: true,
      align: "center",
    });
    return slide;
  }

  if (n === 13) {
    const slide = newSlide(presentation, ctx, n, "Team", "The founding team must credibly combine maritime robotics, field operations, and defense acquisition.");
    const roles = [
      ["Autonomy / perception", "Edge AI, sensor fusion, navigation, low-bandwidth behavior"],
      ["Marine hardware", "Saltwater ruggedization, propulsion, power, launch/recovery"],
      ["Mission operator", "Coast Guard, Navy, SAR, port security, or MCM domain experience"],
      ["Defense GTM", "SBIR/OTA, pilots, primes, cybersecurity, sustainment"],
    ];
    roles.forEach((r, i) => labeledBox(ctx, slide, 84 + (i % 2) * 550, 205 + Math.floor(i / 2) * 156, 470, 112, r[0], r[1], {
      accent: [C.teal, C.blue, C.orange, C.olive][i],
      bodySize: 18,
    }));
    addBox(ctx, slide, 84, 535, 1020, 54, { fill: "#FFF5EF", stroke: "#E8C7B5" });
    addText(ctx, slide, "Editable placeholder: add founder bios, advisors, military/maritime credentials, prior exits, patents, and field-test history here.", 108, 551, 980, 24, {
      size: 18,
      color: C.red,
      bold: true,
    });
    return slide;
  }

  if (n === 14) {
    const slide = newSlide(presentation, ctx, n, "Ask", "Assumed pre-seed ask: $1.5M to prove a narrow mission wedge in real water.");
    kpi(ctx, slide, 96, 205, 250, 132, "$1.5M", "Pre-seed target assumption; replace with final raise amount", { color: C.teal });
    kpi(ctx, slide, 380, 205, 250, 132, "18 mo", "Runway to field demo, buyer proof, and seed-ready metrics", { color: C.blue });
    kpi(ctx, slide, 664, 205, 250, 132, "3 pilots", "Target sponsored demos across SAR, port, or defense users", { color: C.orange });
    kpi(ctx, slide, 948, 205, 250, 132, "1 wedge", "Pick one mission before scaling into adjacent applications", { color: C.olive });
    const uses = [
      ["45%", "engineering, autonomy, and sensor integration"],
      ["25%", "prototype build, spares, field testing, and reliability"],
      ["20%", "pilot operations, compliance, cybersecurity, and support"],
      ["10%", "defense GTM, advisor network, and admin"],
    ];
    uses.forEach((u, i) => {
      const y = 420 + i * 42;
      addText(ctx, slide, u[0], 220, y, 70, 26, { size: 21, color: [C.teal, C.blue, C.orange, C.olive][i], bold: true, align: "right" });
      addRule(ctx, slide, 312, y + 12, 92 + i * 38, [C.teal, C.blue, C.orange, C.olive][i], 12);
      addText(ctx, slide, u[1], 545, y, 480, 26, { size: 18, color: C.ink });
    });
    return slide;
  }

  if (n === 15) {
    const slide = newSlide(presentation, ctx, n, "Appendix A", "Defense, Navy, and mine-countermeasure applications", { section: "Appendix" });
    sectionTag(ctx, slide, "Mission lanes", 90, 178, C.orange);
    const lanes = [
      ["MCM / mine-like object survey", "Survey shallow grids, classify contacts, reduce diver and crew exposure."],
      ["Harbor and force protection", "Patrol restricted water, detect vessels, swimmers, debris, or anomalies."],
      ["Attritable fleet scout", "Low-cost forward sensing node for distributed maritime operations."],
      ["Range and training support", "Recoverable target, telemetry, safety, and object-detection platform."],
    ];
    lanes.forEach((l, i) => labeledBox(ctx, slide, 92 + (i % 2) * 546, 224 + Math.floor(i / 2) * 142, 466, 102, l[0], l[1], {
      accent: [C.orange, C.blue, C.teal, C.olive][i],
      bodySize: 17,
    }));
    addText(ctx, slide, "Key diligence gate: prove the small form factor can carry enough sensor, power, compute, and communications for the selected defense mission.", 150, 570, 980, 40, {
      size: 21,
      color: C.ink,
      bold: true,
      align: "center",
    });
    return slide;
  }

  if (n === 16) {
    const slide = newSlide(presentation, ctx, n, "Appendix B", "Coast Guard, SAR, and public-safety applications", { section: "Appendix" });
    sectionTag(ctx, slide, "Fastest trust path", 90, 176, C.teal);
    const lanes = [
      ["Search and rescue", "Launch quickly, search grid, flag person-sized targets, stream location to incident command."],
      ["Maritime domain awareness", "Support patrol and monitoring without crewing another surface asset."],
      ["Flood and disaster response", "Operate where roads, bridges, and launch points are compromised."],
      ["Port and bridge security", "Patrol high-value infrastructure and create a replayable mission record."],
    ];
    lanes.forEach((l, i) => labeledBox(ctx, slide, 92 + (i % 2) * 546, 224 + Math.floor(i / 2) * 142, 466, 102, l[0], l[1], {
      accent: [C.teal, C.blue, C.orange, C.olive][i],
      bodySize: 17,
    }));
    addText(ctx, slide, "Why this appendix matters: SAR and public-safety use cases may be less capital-rich than defense, but they can produce faster field evidence and mission credibility.", 132, 570, 1016, 40, {
      size: 21,
      color: C.ink,
      bold: true,
      align: "center",
    });
    return slide;
  }

  if (n === 17) {
    const slide = newSlide(presentation, ctx, n, "Appendix C", "Investor and strategic target map", { section: "Appendix" });
    const groups = [
      ["Defense-tech VC", "Shield, Scout, 8VC, a16z American Dynamism, Outlander, Veteran Fund, Decisive Point, New North"],
      ["Maritime / robotics", "Caffeinated, Lux, Konvoy, DNS, Techstars, S2G, Energy Innovation Capital, TechNexus"],
      ["Strategic arms", "Lockheed Martin Ventures, RTX Ventures, Boeing / AEI HorizonX, Kongsberg Innovation, HII channels"],
      ["Potential advisors", "TF59 alumni, USCG RAS context, Navy MCM/EOD experts, defense GTM operators, SAR leaders"],
    ];
    groups.forEach((g, i) => labeledBox(ctx, slide, 80 + (i % 2) * 550, 190 + Math.floor(i / 2) * 168, 478, 126, g[0], g[1], {
      accent: [C.teal, C.blue, C.orange, C.olive][i],
      bodySize: 17,
    }));
    addText(ctx, slide, "Outreach rule: lead with the mission wedge and proof plan; do not pitch a generic AI boat.", 190, 565, 900, 34, {
      size: 24,
      color: C.red,
      bold: true,
      align: "center",
    });
    return slide;
  }

  if (n === 18) {
    const slide = newSlide(presentation, ctx, n, "Appendix D", "Source notes and open assumptions", { section: "Appendix", size: 36 });
    const notes = [
      "YC structure reference: YC seed deck template emphasizes clarity, concision, problem, solution, traction/proof, model, growth, team, and ask.",
      "Market figures are directional: MarketsandMarkets estimates USV at $0.82B in 2025 to $1.59B in 2030; Fortune Business Insights uses a broader $2.4B in 2025 to $3.55B in 2034 estimate.",
      "Adoption signals: Navy MCM USV, Navy Task Force 59, Coast Guard RAS PEO, Coast Guard MDA pilots, and public funding momentum around Saronic, HavocAI, Seasats, and Saildrone.",
      "Unknowns to replace before sending: final company name, founder bios, prototype status, traction metrics, customer conversations, exact raise amount, and detailed use of funds.",
    ];
    bulletList(ctx, slide, notes, 90, 182, 1030, { rowH: 86, size: 18, dot: C.teal });
    addText(ctx, slide, "Primary source links are in the EIR memo and Notion investor/advisor map created on 2026-05-26.", 128, 590, 1024, 26, {
      size: 17,
      color: C.muted,
      align: "center",
    });
    return slide;
  }

  throw new Error(`No slide renderer for ${n}`);
}
