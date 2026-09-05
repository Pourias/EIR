# Quickstart

EIR can be used without a specific agent platform. Start with the template-only route, then add research tools when you need current evidence.

## Route A: tour a completed example

1. Read the fictional [DenialPilot memo](../examples/diligence/2026-03-10_denialpilot-diligence-memo.md).
2. Compare it with the [morning brief](../examples/briefs/2026-03-10_denialpilot-morning-brief.txt).
3. Notice the separation between illustrative founder input, external research, inference, risks, verdict, and experiments.

## Route B: create a case locally

```bash
python3 scripts/new_case.py "Workflow automation for independent clinics"
```

The command creates a dated directory under `work/` with:

- an idea intake
- a research request
- a claim ledger
- a diligence memo
- a scorecard
- an experiment plan
- a morning brief
- a case manifest

`work/` is ignored by Git, which helps prevent accidental commits. This is not an access-control boundary; use a storage location appropriate for the case's sensitivity.

## Route C: use an AI runner

Give the runner:

1. [`AGENTS.md`](../AGENTS.md)
2. [`SOUL.md`](../SOUL.md)
3. [`TOOLS.md`](../TOOLS.md)
4. your completed intake and research request

Use a prompt such as:

> Run the EIR workflow on this case. Keep user-provided facts separate from verified research. Use current, primary sources for changing claims; create a claim ledger; run a contradiction pass; return a calibrated Invest, Watch, or Pass view; and design three experiments with success and stop conditions. Do not invent missing founder, traction, team, or pricing facts.

If your runner supports specialist agents, load the role cards in [`agents/`](../agents/README.md). If not, ask one agent to perform the Scout, Analyst, and Skeptic passes sequentially.

## Review before accepting the result

- Every consequential current claim has a direct citation.
- Search snippets were not treated as evidence.
- User input, confirmed facts, inference, and unknowns are visibly different.
- The competitor set includes substitutes and internal/manual workflows.
- Market sizing exposes assumptions and avoids unsupported precision.
- A contradiction pass was completed.
- Scores follow evidence; they do not substitute for it.
- Experiments have measurable pass and stop thresholds.
- Dates, local paths, private links, and secrets are safe for the intended audience.

## Publish a reviewed example

Move only approved artifacts from `work/` to a named folder under `examples/`. Add context and a factual cutoff to [`docs/EXAMPLES.md`](EXAMPLES.md), then run:

```bash
python3 scripts/validate_repository.py
```

The repository does not bundle the private CX Research or R Paper engines referenced by historical manifests. Use your runner's browser/research tools, or implement equivalent stages using [the research method](RESEARCH_METHOD.md).
