# Startup Diligence Memo

## Company
- Name: DenialPilot
- Date: 2026-03-10
- Analyst: EIR
- Status: final sample

This memo is a worked example for the EIR agent. DenialPilot is a fictional company used to demonstrate the workflow. Founder input, traction, team, and funding details are illustrative. External research and market references were checked against current public sources available on March 10, 2026.

## 1. Founder Input

The founder claim is straightforward: DenialPilot is an AI copilot for U.S. specialty clinics that prevents, drafts, and routes insurance claim denial appeals. The pitch is that specialty clinics lose meaningful revenue to slow, manual, under-prioritized denial workflows, especially in high-friction specialties such as oncology, cardiology, orthopedics, and GI. The founding team wants to win by integrating into practice-management workflows, identifying the denials most worth fighting, drafting payer-specific appeal packages, and showing ROI quickly enough that a practice or MSO expands usage across locations.

The illustrative founder-supplied traction says the company has 4 paying groups, 7 pilot sites, around $18k MRR, and early evidence of faster appeal prep and improved overturn rates on targeted claims. The illustrative round is a $3M seed on top of $1.8M pre-seed financing.

## 2. Research Findings

### Elevator Pitch / Epic

DenialPilot would sit in a real and increasingly visible pain point: provider revenue leakage caused by denials, prior authorization friction, and manual billing follow-up. The category is not speculative. It already supports large incumbents, fast-growing AI-first startups, and payer-connectivity platforms. That is good news and bad news. It proves willingness to pay exists, but it also means a new entrant needs a very sharp wedge.

The most compelling version of the story is not "AI for revenue cycle" in general. It is "specialty-clinic denial recovery with measurable ROI inside 60 days." If that claim is true, the wedge is concrete enough to test.

### Problem / Pain

The pain is real. The American Medical Association's 2024 prior authorization physician survey said physicians complete 39 prior authorizations per physician per week on average, spend about 13 hours weekly on prior authorization work, and 93% report care delays tied to prior authorization. The same survey said 35% of physicians have staff who work exclusively on prior authorization tasks. CAQH's 2024 Index said the industry could save about $515 million annually on prior authorization by broader electronic adoption, and its 2025 Index said U.S. healthcare still has about $21 billion of remaining savings opportunity from fuller automation of administrative workflows. HHS OIG found in April 2022 that 13% of denied Medicare Advantage prior authorization requests in its sample met Medicare coverage rules anyway, and 18% of denied payment requests in its sample met both coverage and billing rules, with human and system errors driving many denials.

That combination matters. The problem is costly, recurring, and ugly enough that buyers do not need education on whether the problem exists. They need proof that a new product fixes it better than internal teams, BPOs, or incumbents.

Value hypothesis: specialty clinics with high denial burden will pay if DenialPilot materially improves overturn rate, shortens appeal-prep time, and reduces days in A/R on targeted claims.

Growth hypothesis: early growth is most likely through narrow, high-ROI specialty cohorts plus channel partners such as RCM consultants, specialty MSOs, and practice-management ecosystems. A generic top-of-funnel AI story will be too broad.

Do customers recognize the problem? Yes.

Would they buy a solution? Yes, but only if it shows fast ROI and fits existing workflows.

Would they buy from a new startup? Sometimes, but trust, integration burden, and compliance posture will heavily shape that answer.

### Solution

The manual, "caveman village" version of this workflow is still phone calls, payer portals, faxed documentation, spreadsheet tracking, and human judgment about which denials to fight. That is exactly why this category is attractive to automation.

DenialPilot's proposed solution is sensible if it stays narrow. The strongest MVP is not full autonomous RCM. It is a denial-prioritization and appeal-generation wedge for high-value outpatient specialties, with clear before-and-after metrics. If the company tries to own every claims workflow too early, it will collide head-on with much larger platforms.

Recommended MVP boundary: focus on the top denial categories where documentation, payer rule variance, and appeal packaging are repeatable enough to automate. Leave broad end-to-end RCM ambitions for later.

### Differentiation & Secret Sauce

The category already contains strong AI claims, so differentiation cannot stop at "we use generative AI." A credible edge would have to come from some combination of:

- payer-specific denial taxonomy and playbooks
- outcome feedback loops from actual overturn results
- narrow specialty expertise
- faster implementation into common specialty workflows
- pricing aligned to recovered revenue rather than seat count alone

Without proprietary denial outcomes or unusually strong payer-rule intelligence, the moat is weak. The likely secret sauce, if there is one, is specialized workflow data tied to overturn outcomes, not the model itself.

Barriers to entry are moderate, not high. It is easier than ever to prototype AI drafting and workflow automation. It is much harder to win on data, trust, integration depth, and deployment into real billing teams.

### Product / Technology

The product would uniquely solve the problem only if it does three things better than incumbents or BPOs:

1. It identifies which denials are actually worth fighting.
2. It drafts and packages better appeals with less staff time.
3. It improves cash outcomes fast enough that buyers notice inside one quarter.

The technology burden is less about frontier models and more about systems design: ingestion from PM and clearinghouse data, payer-rule mapping, document handling, auditability, security, and workflow fit. The product also has to preserve traceability because billing teams and compliance teams will not accept a black box.

### Customers

The core personas are VP of Revenue Cycle, billing manager, practice administrator, specialty-clinic CFO, and operator at a specialty MSO. In larger groups, the economic buyer is usually the operations or finance owner. In smaller groups, the buyer may be the administrator or physician-owner.

Customer-first evidence in this sample is still thin because the founder input is illustrative. But the broader market signals are clear:

- users hate manual portals, documentation ping-pong, and opaque denial reasons
- they love anything that reduces back-office time and gets claims paid faster
- they complain about inconsistent payer rules, appeal delays, and staffing pressure

The purchase process is classic AIDA:

- Attention: rising denial burden, staffing shortages, and AI hype create awareness
- Interest: buyers engage when shown specialty-specific recovery metrics
- Desire: case studies with net collections improvement and short payback create buying intent
- Action: paid pilot or departmental rollout if implementation looks low-risk

### Competition

The competitive landscape is crowded and already serious.

Waystar is the incumbent benchmark. Its denial and appeal management products already use AI and integrate into provider workflows. On its February 2026 earnings call, Waystar said Altitude AI had prevented more than $15 billion in denials in 2025 and accelerated appeal package generation by 90%. That is a powerful proof point that denial workflows are strategic and already being automated at scale.

AKASA has long positioned itself around generative AI for healthcare revenue cycle workflows and announced a $60 million Series B in 2021. Thoughtful.ai says its AI agents are built for revenue cycle automation, raised a $20 million Series A in 2024, and later announced a 2025 growth investment from New Mountain Capital. Candid Health is another aggressive AI-first player. It announced a $29 million Series B in September 2024, a $52.5 million Series C in February 2025, and by February 2026 said it had expanded to more than 200 provider organizations across dozens of specialties.

There are also adjacent threats from network and payer-connectivity platforms. CMS's interoperability and prior-authorization rules favor organizations that already sit closer to payer connectivity, standards, and workflow rails. Cohere Health and Availity are relevant not because they solve the same exact provider denial workflow, but because they shape the electronic prior authorization and rules-discovery layer around it.

Who is the enemy? The enemy is not one logo. It is the combination of manual staff workflow, outsourced RCM vendors, incumbent RCM platforms, and payer-connectivity infrastructure that already owns part of the stack.

### Go To Market

The best entry path is narrow.

Start with one or two specialties where denied claims are expensive, documentation patterns are repetitive, and buyers feel acute staffing pain. Sell a pilot with hard ROI metrics:

- appeal prep time saved
- targeted-denial overturn lift
- net collections uplift
- days in A/R improvement

The likely acquisition channels are:

- founder-led sales into specialty groups
- referrals from specialty RCM consultants
- partnerships with MSOs and specialty billing firms
- integrations and app ecosystems around athenahealth, eClinicalWorks, Epic community providers, or clearinghouses

Launch implementation:

- Pre: map baseline denial rates, target denial categories, and data access
- During: 30-day pilot with weekly review of targeted claims
- Post: expand by specialty, location, and denial category once ROI is proven

Trigger points for expansion:

- documented cash recovery within 60 to 90 days
- implementation time below 30 days
- at least one repeatable channel partner
- strong case study in a specialty with fragmented provider groups

### Market Size

The broad market is clearly large enough. U.S. physician offices generated about $768.3 billion in taxable revenue in the year-to-date period shown in the Census Bureau's third-quarter 2025 Quarterly Services Survey, and healthcare administrative waste remains material. CAQH's 2025 Index says the industry still has about $21 billion of remaining savings opportunity through fuller automation of manual and partially manual transactions. Prior authorization alone remains a meaningful sub-problem with hundreds of millions in annual savings potential.

The venture question is not whether the total market is large. It is whether DenialPilot can claim a focused, software-like serviceable market without becoming a labor-heavy service business.

My inference:

- TAM: multi-billion-dollar spend across denial management, prior authorization, and broader provider RCM automation
- Practical SAM: likely hundreds of millions to low billions if the product focuses on specialty physician groups and outpatient clinics with complex payer mixes
- Initial SOM: small and achievable only if the company narrows to a repeatable wedge, such as one specialty, one integration pattern, and one denial cluster

Why now:

- regulatory pressure from CMS interoperability and prior-authorization rules
- renewed buyer attention on administrative automation after the Change Healthcare shock and broader RCM fragility
- stronger AI tooling for document handling, routing, and structured drafting

Secondary markets:

- dental specialties with heavy prior auth and claims friction
- behavioral health specialties with high admin burden
- ambulatory surgery and other procedure-heavy outpatient environments

### Five Forces

Rivalry among existing competitors: high.

Buyer power: high. Buyers can compare internal staff, BPOs, clearinghouses, and multiple vendors.

Supplier power: medium. EHR, clearinghouse, and payer-rule access matter, but no single infrastructure provider fully controls the category.

Threat of substitutes: medium to high. Manual teams, offshore RCM, and incumbent suites are credible substitutes.

Threat of new entrants: medium. AI lowers product prototyping cost, but deployment, trust, and data network effects still matter.

### Monetization

The cleanest model is hybrid pricing:

- platform fee for workflow access and integrations
- usage fee tied to processed denial volume
- optional performance component tied to recovered revenue or overturn lift

A pure percentage-of-recovery model risks looking like a services business. A pure seat-based SaaS fee risks misalignment if ROI is not immediate. Hybrid is the best compromise.

How the company could make more money:

- expand from appeals into denial prevention upstream
- sell analytics and root-cause reporting to specialty MSOs
- price premium modules for payer-rule intelligence and benchmarking
- expand from in-house billing teams to outsourced RCM providers serving multiple groups

Microeconomics that matter:

- gross margin after onboarding and support
- implementation cost per logo
- time-to-value inside the first quarter
- net dollar retention across additional sites and specialties
- sales efficiency given integration-heavy healthcare workflows

## 3. Traction, Team, Funding, and Milestones

### Traction

Because the traction data in this sample is illustrative, confidence is limited. That said, the right metrics are being emphasized. Denial overturn lift, appeal prep time, days in A/R, and net collections impact are real metrics. AI-generated letters sent and demo counts are vanity metrics.

If the illustrative numbers were real, they would be promising but still early. Four paying groups and about $18k MRR would not yet prove repeatability. The most important missing proof would be:

- gross revenue retention and expansion
- implementation time by customer
- proof the product works across more than one specialty
- customer willingness to expand without founder-heavy service work

Sticky engine: plausible, because denial workflow recurs constantly.

Viral engine: weak.

Paid engine: possible, but only if LTV materially exceeds long healthcare sales-cycle CAC.

Recommended AB tests:

- pricing as SaaS-only versus hybrid performance pricing
- specialty-specific landing pages and case studies
- pilot scope by denial category versus full workflow
- ROI dashboard framing for CFO versus billing-manager buyers

### Team

The illustrative team has the right shape for early product discovery but is still incomplete for scale. Missing roles include:

- a healthcare enterprise seller who can navigate multi-site groups
- a payer-connectivity or reimbursement rules expert
- stronger compliance and security leadership

For this category, domain depth matters more than generic AI pedigree.

### Funding

The sample raise is plausible for the stage. The question is not whether the company can raise a seed. It is whether the next round can be earned with real repeatability rather than custom implementation revenue.

The round should get the company to:

- 15 to 20 repeatable paying groups
- two strong specialty case studies
- implementation time under 30 days
- evidence of net dollar retention and multi-site expansion

### Milestones

The right milestones are productized deployment, sharper wedge selection, and one repeatable distribution channel. The biggest milestone is not another integration in isolation. It is whether one specialty motion becomes predictable.

## 4. Investment Verdict

- Verdict: `Watch`
- Confidence: `Low`

Why this could be a strong investment:

- The pain is real, expensive, and urgent.
- Buyers already spend money in this category.
- CMS and broader interoperability pressure make the market more ready now than it was a few years ago.
- ROI can be framed in dollars recovered, not soft productivity language.

Why this may fail:

- The market is already crowded with strong incumbents and well-funded AI-first entrants.
- A new company can get trapped as a workflow-heavy service layer instead of durable software.
- Data access, implementation friction, and specialty variation may slow scaling.
- End-to-end incumbents can bundle denial features into larger RCM relationships.

Why now:

- Administrative burden remains large and measurable.
- Provider appetite for automation is increasing.
- Regulatory and standards work is nudging the ecosystem toward more electronic workflows.

Why not now:

- Buyers may prefer established vendors unless the wedge is unusually sharp.
- The startup may need more proprietary workflow data than it can gather early.
- Point solutions are vulnerable if platform vendors move down-market or specialty-first.

## 5. Key Risks

- Market risk: category crowding compresses differentiation
- Product risk: poor payer-rule accuracy or weak document handling breaks trust fast
- Distribution risk: long sales cycles and implementation friction stall growth
- Team risk: missing payer, enterprise sales, and compliance depth
- Financing risk: company raises on promise but cannot prove repeatability before the next round

## 6. Next Diligence Questions

- Which denial categories produce the fastest, cleanest ROI in the first 60 days?
- How much of the workflow is true software versus implementation or managed service labor?
- What proprietary data advantage can DenialPilot build that Waystar, AKASA, or Candid do not already have?
- Can one specialty become a repeatable beachhead with short deployment and clear expansion?
- What is the actual gross margin after onboarding, support, and model costs?
- How much buyer pain sits at the practice level versus the MSO or RCM-outsourcer level?

## 7. Recommended Next Experiments

- Experiment 1: Run a tightly scoped pilot in one specialty and one denial cluster with a hard 60-day ROI promise.
- Experiment 2: Test hybrid pricing against straight SaaS pricing to see which model converts faster without pushing the company into services economics.
- Experiment 3: Build one channel partnership with a specialty RCM consultant or MSO and compare CAC, conversion, and implementation time against founder-led direct sales.

## 8. Source Notes

- [American Medical Association, "2024 AMA prior authorization physician survey"](https://www.ama-assn.org/practice-management/prior-authorization/2024-ama-prior-authorization-physician-survey)
- [HHS Office of Inspector General, "Some Medicare Advantage Organization Denials of Prior Authorization Requests Raise Concerns About Beneficiary Access to Medically Necessary Care," April 27, 2022](https://oig.hhs.gov/reports/all/2022/some-medicare-advantage-organization-denials-of-prior-authorization-requests-raise-concerns-about-beneficiary-access-to-medically-necessary-care/)
- [CMS, "Interoperability and Prior Authorization Final Rule CMS-0057-F"](https://www.cms.gov/newsroom/fact-sheets/cms-interoperability-and-prior-authorization-final-rule-cms-0057-f)
- [CAQH, "The CAQH Index Report"](https://www.caqh.org/insights/caqh-index-report)
- [CAQH, "2025 CAQH Index Shows U.S. Healthcare Avoided $258 Billion and Accelerated Automation, Interoperability and AI Adoption"](https://www.caqh.org/blog/2025-caqh-index-shows-u.s.-healthcare-avoided-258-billion-and-accelerated-automation-interoperability-and-ai-adoption)
- [U.S. Census Bureau, Quarterly Services Survey current report](https://www.census.gov/services/qss/qss-current.pdf)
- [Waystar, Denial + Appeal Management](https://www.waystar.com/denial-management/)
- [Waystar Q4 2025 earnings call transcript summary, February 2026](https://www.fool.com/earnings/call-transcripts/2026/02/17/waystar-way-q4-2025-earnings-call-transcript/)
- [AKASA, "AKASA Raises $60 Million in Series B Round"](https://akasa.com/press/akasa-raises-60-million-in-series-b-round/)
- [Thoughtful.ai](https://www.thoughtful.ai/)
- [Thoughtful, "Thoughtful AI launches human-capable AI Agents, raises $20m in new funding"](https://www.thoughtful.ai/blog/thoughtful-ai-launches-human-capable-ai-agents-raises-20m-in-new-funding)
- [Thoughtful, "Building the Future of Healthcare RCM: Our Journey in 2024 and Vision for 2025"](https://www.thoughtful.ai/blog/building-the-future-of-healthcare-rcm-our-journey-in-2024-and-vision-for-2025)
- [BusinessWire, "Thoughtful.ai Announces Growth Investment from New Mountain Capital"](https://www.businesswire.com/news/home/20250409471014/en/Thoughtful.ai-Announces-Growth-Investment-from-New-Mountain-Capital)
- [Candid Health, "Candid Health Announces $29 Million Series B"](https://candidhealth.com/blog/candid-health-announces-usd29-million-series-b)
- [Candid Health, "Candid Health Raises $52.5 Million Series C"](https://candidhealth.com/blog/candid-health-raises-usd52-5-million-series-c)
- [Candid Health, "Named to the 2026 New York Digital Health 100"](https://candidhealth.com/blog/candid-health-named-to-the-2026-new-york-digital-health-100)
- [Cohere Health, "AI-Powered Prior Authorization"](https://coherehealth.com/paas/)
- [Availity, "Fix Prior Authorizations: Faster, Smarter, and CMS-Ready"](https://www.availity.com/intelligentum/)
