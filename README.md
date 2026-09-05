# EIR

**An evidence-led startup idea, product-strategy, and diligence factory.**

EIR turns a rough opportunity into a decision-ready package: a sharp problem statement, ideal customer profile, wedge, competitive map, business model, risks, verdict, and testable next experiments. It is an artifact-first agent workspace, not a black-box scoring app.

![EIR factory overview](docs/assets/eir-factory-overview.svg)

> **Included:** the reusable EIR agent contract, specialist agent roles, templates, historical research-run metadata, a metadata-only knowledge library, worked diligence examples, reports, scorecards, and presentation artifacts.
>
> **Not included:** credentials, private workspace state, raw scraped pages, provider payloads, machine logs, temporary render profiles, or downloaded third-party media. See [`PUBLICATION_MANIFEST.md`](PUBLICATION_MANIFEST.md).

## Start in five minutes

Requirements: Git and Python 3.10 or newer. Python is only needed for the helper scripts.

```bash
git clone https://github.com/Pourias/EIR.git
cd EIR
python3 scripts/new_case.py "Your startup idea"
```

Then:

1. Complete the generated `work/<date>_<idea>/idea-intake.md`.
2. Give your AI runner [`AGENTS.md`](AGENTS.md), [`SOUL.md`](SOUL.md), and the completed intake.
3. Ask it to follow [`docs/QUICKSTART.md`](docs/QUICKSTART.md) and build a cited diligence memo.
4. Review the claim labels, contradiction pass, verdict, and experiment stop conditions.
5. Run `python3 scripts/validate_repository.py` before publishing new examples.

No agent platform is mandatory. You can use the templates manually, attach this repository to a coding agent, or map the role files into an orchestration system such as OpenClaw. Live research connectors and model access are supplied by your chosen runner; they are not bundled here.

## What the factory produces

Every case follows the same decision spine:

```text
Problem → ICP → Wedge → Moat → GTM → Risks → Next experiments
```

The full factory adds evidence discipline around that spine:

| Stage | Core question | Main artifact |
|---|---|---|
| Intake | What did the founder or user actually claim? | `idea-intake.md` |
| Frame | Who hurts, how much, and why now? | problem, ICP, assumptions |
| Research | What do current primary sources support? | source map and dated notes |
| Analyze | Is there a credible product, market, and distribution path? | diligence memo and market map |
| Challenge | What contradicts the thesis or could kill it? | contradiction log and kill questions |
| Decide | Invest, Watch, or Pass, at what confidence? | scorecard and verdict |
| Experiment | What is the cheapest decisive test? | experiment plan with success and stop rules |
| Promote | What learning is reusable beyond this case? | curated library metadata |

Read [`docs/HOW_IT_WORKS.md`](docs/HOW_IT_WORKS.md) for the full workflow and illustrations.

## Repository map

```text
EIR/
├── AGENTS.md, SOUL.md       # Runtime behavior and decision standard
├── USER.md, MEMORY.md       # Safe local customization and durable memory
├── agents/                  # Scout, analyst, and skeptic role cards
├── docs/                    # Setup, architecture, evidence, and customization guides
├── templates/               # Copyable intake, research, memo, scorecard, and experiment forms
├── examples/                # Worked memos, reports, documents, and presentation artifacts
├── library/                 # Promoted source metadata and coverage manifests
├── research-runs/           # Sanitized provenance records for historical deep-research runs
└── scripts/                 # Case scaffolding, safe export, and repository validation
```

The detailed map is in [`docs/REPOSITORY_GUIDE.md`](docs/REPOSITORY_GUIDE.md).

## Three ways to use EIR

### 1. Template-only

Use the forms in [`templates/`](templates/) with interviews and your own research. This is the simplest and most auditable mode.

### 2. One capable agent

Load the root instruction files into an agent that can browse, write files, and cite sources. The agent runs every stage and leaves a reviewable artifact trail.

### 3. Multi-agent factory

Let the EIR orchestrator delegate discovery, synthesis, and challenge work to the bounded roles in [`agents/`](agents/README.md). Parallelism improves coverage, but EIR still owns claim verification and final judgment.

## Examples worth opening first

- [DenialPilot diligence memo](examples/diligence/2026-03-10_denialpilot-diligence-memo.md): a fictional, fully labeled worked example.
- [DenialPilot morning brief](examples/briefs/2026-03-10_denialpilot-morning-brief.txt): the same decision compressed for spoken delivery.
- [Micro-USV diligence memo](examples/diligence/2026-05-26_micro-ai-unmanned-surface-vessel-diligence-memo.md): a broad hardware idea narrowed to testable mission wedges.
- [HarborScout historical draft deck](examples/presentations/harborscout/README.md): a presentation-workflow example with explicit placeholders and documented visual QA defects.
- [Aquatic vegetation scorecard](examples/projects/aquatic-vegetation/go-no-go-scorecard.json): structured kill questions and calibrated scores.
- [School-security competitor analysis](examples/research/ai-school-security/2026-04-06-ai-school-security-competitor-analysis.md): a research-heavy landscape example.
- [Source catalog](library/SOURCE_CATALOG.md): 113 promoted source records represented as metadata and links, without copied page text.
- [Historical research runs](research-runs/README.md): eight sanitized examples of routing, coverage, and promotion decisions.

See [`docs/EXAMPLES.md`](docs/EXAMPLES.md) for context, caveats, and artifact status.

## Evidence standard

EIR separates four things that are often blurred together:

| Label | Meaning |
|---|---|
| `user-provided` | A claim supplied by a founder or requester; not independently verified. |
| `confirmed` | Supported by an opened, relevant source and cited precisely. |
| `inferred` | A reasoned conclusion based on named evidence. |
| `unknown` | Missing evidence that could change the decision. |

Historical examples are snapshots, not current advice. Funding, prices, regulations, products, and competitors change. Re-run time-sensitive research before making a decision.

## Honest boundaries

- EIR helps structure judgment; it does not replace customer calls, technical testing, legal review, or investment diligence.
- A high score is not a forecast. Confidence should fall when founder, traction, pricing, or buyer evidence is missing.
- The historical CX Research manifests reference tools and skills from the original private runner. This repository preserves the contracts and public artifacts, not those external services.
- Source-count thresholds did not prevent several historical retrieval failures. The failure cases and improved gates are documented in [`research-runs/KNOWN_LIMITATIONS.md`](research-runs/KNOWN_LIMITATIONS.md).
- Some examples cover defense, public safety, healthcare, or regulated operations. They are analytical examples, not deployment instructions or professional advice.

## Documentation

- [Quickstart](docs/QUICKSTART.md)
- [How the factory works](docs/HOW_IT_WORKS.md)
- [Research and evidence method](docs/RESEARCH_METHOD.md)
- [Agent runtime guide](docs/AGENT_RUNTIME.md)
- [Repository guide](docs/REPOSITORY_GUIDE.md)
- [Example catalog](docs/EXAMPLES.md)
- [Customization guide](docs/CUSTOMIZATION.md)
- [Security policy](SECURITY.md)
- [Contributing](CONTRIBUTING.md)

## License

Original repository code, prompts, templates, and documentation are released under the [MIT License](LICENSE). Third-party names, linked source material, and referenced media remain the property of their respective owners; see [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md).
