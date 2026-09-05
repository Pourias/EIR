# Repository guide

This repository is a curated public package of the EIR workspace. It preserves the reusable agent contract, decision method, templates, selected examples, source metadata, and historical run provenance. It is not a byte-for-byte copy of the private workspace, and it does not bundle the private research services that produced the historical runs.

## Find what you need

| If you want to... | Start here |
|---|---|
| Understand EIR in one page | [Project README](../README.md) |
| See the agent's operating contract | [AGENTS.md](../AGENTS.md) |
| Understand its judgment and voice | [SOUL.md](../SOUL.md) |
| Review tool, evidence, and file rules | [TOOLS.md](../TOOLS.md) |
| Copy a diligence format | [Startup diligence template](../templates/startup-diligence-memo.md) |
| Study finished work | [Example catalog](EXAMPLES.md) |
| Browse promoted source metadata | [Library guide](../library/README.md) |
| Inspect historical research provenance | [Research-run index](../research-runs/README.md) |
| Understand known research failures | [Known limitations](../research-runs/KNOWN_LIMITATIONS.md) |
| Audit what was published or withheld | [Publication manifest](../PUBLICATION_MANIFEST.md) |

## Repository map

| Path | Purpose | What belongs there |
|---|---|---|
| Root agent files | Runtime contract and safe customization | Agent instructions, operating character, user template, memory template, and heartbeat behavior |
| [docs](.) | Explanations for people | Setup, navigation, examples, workflow, evidence rules, and architecture |
| [templates](../templates/) | Reusable starting points | Blank or lightly scaffolded deliverable formats |
| [examples](../examples/) | Worked artifacts | Selected memos, reports, documents, scorecards, and presentation material |
| [library](../library/) | Reusable research metadata | Source titles, URLs, automated classifications, coverage data, and public manifests |
| [research-runs](../research-runs/) | Historical provenance | Sanitized run questions, routes, coverage summaries, plans, and public manifests |
| [scripts](../scripts/) | Public packaging utilities | Standard-library tools that export metadata without copied page text |
| [memory](../memory/) | Safe local working-memory convention | Instructions for dated notes; no private historical memory is bundled |

## How the pieces fit together

The root files define how EIR should think and communicate. Templates define the expected artifacts. A user or founder supplies an idea, and the chosen AI runner performs live research using its own connectors. EIR separates user claims from verified findings, challenges the thesis, and produces a decision plus testable next steps.

Selected outputs live under [examples](../examples/). Reusable source metadata can be promoted to [library](../library/). Sanitized historical run records live under [research-runs](../research-runs/) so contributors can inspect routing and coverage without receiving raw provider payloads or copied webpages.

The historical flow represented by those records is:

1. Normalize the request and record constraints.
2. Select a depth profile, research tools, and bounded specialist roles.
3. Check provider availability.
4. Run discovery, expansion, gap-closing, contradiction, commercial, and challenge passes.
5. Convert candidate sources into source records.
6. Build claims, analysis, and a decision-ready brief.
7. Promote only reusable public metadata.

Historical manifests name private runner skills and services. Those names explain provenance; they are not bundled dependencies or a promise that a clone can execute the same stack.

## Public-package boundaries

The public package uses three treatments:

- **Included:** original repository-owned material that was suitable to publish, including selected finished artifacts.
- **Transformed:** private-workspace material converted into a smaller public form, such as a machine-path-free manifest or metadata-only source record.
- **Excluded:** credentials, private state, raw captures, copied source-card text, provider responses, logs, downloaded third-party media, temporary render profiles, and redundant copies.

See the [publication manifest](../PUBLICATION_MANIFEST.md) for the source-to-public mapping. The absence of raw source text is deliberate. Follow catalog URLs and verify the original source instead of treating the catalog as an evidence cache.

## Portability notes

- The EIR method can be used manually or with any capable agent runner.
- Live browsing, model access, and research-provider credentials come from the user's runner.
- The [public research exporter](../scripts/export_public_research.py) packages an existing private CX Research tree; it does not perform research.
- Worked build records remain historical artifacts. Sanitized generators use relative output paths, while the HarborScout slide source still depends on the original document or slide runtime and is provided for inspection rather than one-command rebuilding.
- Binary examples show the output format. Their presence does not guarantee byte-for-byte reproducibility on every platform.
- Historical claims are dated snapshots. Re-run funding, pricing, product, regulatory, legal, and market research before using them in a decision.

## Safe contribution path

1. Keep unfinished or confidential work outside the public tree.
2. Separate founder statements from independently verified findings.
3. Open and assess every material source; do not confirm a claim from a search snippet.
4. Remove credentials, personal data, local paths, provider payloads, and copied page text.
5. Promote source metadata rather than source content.
6. Label examples with their date, status, assumptions, and intended teaching purpose.
7. Check the [known limitations](../research-runs/KNOWN_LIMITATIONS.md) before presenting a historical run as a success case.

## Naming conventions

- Historical artifacts begin with an ISO date when the date materially affects interpretation.
- Research-run directory names preserve their original slugs for traceability.
- A filename ending in manifest.public.json is a reduced public record, not the private run manifest.
- Source catalog scores and classes are historical automated labels. They are not editorial endorsements.
- Files under examples are demonstrations. Files under templates are starting points.
