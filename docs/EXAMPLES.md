# Example catalog

The examples show how EIR frames a problem, separates assumptions from evidence, reaches a calibrated decision, and turns the decision into different deliverables. They are historical teaching artifacts, not current advice or verified operating plans.

Copy their structure and reasoning discipline. Re-verify every changing fact before reusing their conclusions.

## Best place to start

| Example | What it demonstrates | Important caveat |
|---|---|---|
| [DenialPilot diligence memo](../examples/diligence/2026-03-10_denialpilot-diligence-memo.md) | A complete diligence memo from founder input through verdict and experiments | DenialPilot is fictional; founder, traction, team, and funding details are illustrative |
| [DenialPilot morning brief](../examples/briefs/2026-03-10_denialpilot-morning-brief.txt) | Compression of a long memo into a short spoken handoff | Read it with the full memo so omitted nuance is visible |
| [Micro-USV diligence memo](../examples/diligence/2026-05-26_micro-ai-unmanned-surface-vessel-diligence-memo.md) | Narrowing a broad hardware concept into testable mission wedges | It is a dated concept assessment with unverified assumptions and historical runner provenance |
| [School-security competitor analysis](../examples/research/ai-school-security/2026-04-06-ai-school-security-competitor-analysis.md) | Competitor mapping and wedge selection in a sensitive market | It is not safety, procurement, legal, or deployment advice |
| [Aquatic-vegetation scorecard](../examples/projects/aquatic-vegetation/go-no-go-scorecard.json) | Machine-readable category scores, confidence, and kill questions | Scores structure judgment; they do not predict success |
| [HarborScout draft deck](../examples/presentations/harborscout/README.md) | Turning a diligence thesis into a visual investor narrative | Historical draft: explicit placeholders, one known overlap, font-portability limits, and no investment solicitation |

## Diligence memos

### DenialPilot

- [Full memo](../examples/diligence/2026-03-10_denialpilot-diligence-memo.md)
- [Morning brief](../examples/briefs/2026-03-10_denialpilot-morning-brief.txt)

Use this pair to compare a decision-grade written analysis with a concise verbal handoff. The memo explicitly labels the company and founder metrics as fictional, which makes it the safest first example for studying the format.

### Smart police camera concept

- [Diligence memo](../examples/diligence/2026-04-06_smart-police-body-camera-diligence-memo.md)

This example shows why technical feasibility alone does not make a good wedge. It brings distribution, incumbent power, procurement, civil-liberties risk, and field reliability into the decision. It should be read as analytical critique, not as guidance for surveillance or law-enforcement deployment.

### Micro autonomous surface vessel

- [Diligence memo](../examples/diligence/2026-05-26_micro-ai-unmanned-surface-vessel-diligence-memo.md)

This example separates an attractive category from an investable company. It identifies missing team, field, buyer, and mission evidence, then proposes narrower non-weaponized search, sensing, and public-safety tests. Facts and market signals reflect the research date.

## Research-heavy examples

### AI school security

- [One-page summary](../examples/research/ai-school-security/2026-04-06-ai-school-security-1-pager.md)
- [Competitor analysis](../examples/research/ai-school-security/2026-04-06-ai-school-security-competitor-analysis.md)
- [Startup diligence](../examples/research/ai-school-security/2026-04-06-ai-school-security-startup-diligence.md)
- [Combined HTML report](../examples/research/ai-school-security/2026-04-06-ai-school-security-combined.html)

These files demonstrate progressive synthesis: landscape research, a decision memo, a one-page summary, and a shareable HTML form. Sensitive-market conclusions require fresh source, policy, and legal review.

### Deep-sea opportunity research

- [Pressure-wedge analysis](../examples/research/deepsea/2026-06-02-deepsea-pressure-wedge.html)
- [Startup opportunities](../examples/research/deepsea/2026-06-02-deepsea-startup-opportunities.html)
- [Legacy site pointer](../examples/research/deepsea/2026-06-02-deepsea-site-map.json)

The first two files show opportunity synthesis from a larger crawl. The crawl itself is excluded. In the private source archive, the legacy site-pointer file was a bare URL with a `.json` suffix; the public copy is a valid metadata JSON wrapper that preserves the source URL and explains the omission.

## End-to-end project example

The [aquatic-vegetation project](../examples/projects/aquatic-vegetation/) combines an intake, a structured scorecard, a long-form report, a document generator, and an exported document:

- [Research request](../examples/projects/aquatic-vegetation/request.json)
- [Go/no-go scorecard](../examples/projects/aquatic-vegetation/go-no-go-scorecard.json)
- [Long-form HTML review](../examples/projects/aquatic-vegetation/Austin_Aquatic_Removal_Valorization_Review_Draft_2026-06-17.html)
- [Executive-summary generator](../examples/projects/aquatic-vegetation/build_valorization_exec_summary.py)
- [Generated DOCX](../examples/projects/aquatic-vegetation/Austin_Lake_Vegetation_Valorization_Executive_Summary_2026-06-17.docx)

The generator is a historical script, not a general-purpose command-line tool. The public copy writes its output beside the script and declares its Python dependency in `requirements.txt`. Private workspace links and local image references were removed from the public HTML; the unlicensed downloaded images themselves remain excluded.

Several associated research runs contain off-topic retrieval. Review the [known limitations](../research-runs/KNOWN_LIMITATIONS.md) before treating their source counts or automated quality labels as evidence.

## Documents and presentation artifacts

### Document-format examples

- [Startup memo DOCX](../examples/documents/architect-two-page-startup-memo.docx)
- [Startup memo ODT](../examples/documents/architect-two-page-startup-memo.odt)
- [Startup memo PDF](../examples/documents/architect-two-page-startup-memo.pdf)
- [Two-page summary PDF](../examples/documents/architect-two-page-summary.pdf)

These demonstrate export formats rather than separate research conclusions.

### HarborScout presentation

- [Status and known QA limitations](../examples/presentations/harborscout/README.md)
- [PDF deck](../examples/presentations/harborscout/harborscout-ai-yc-investor-pitch-deck.pdf)
- [Editable PPTX](../examples/presentations/harborscout/harborscout-ai-yc-investor-pitch-deck.pptx)
- [Slide source and reference files](../examples/presentations/harborscout/source/)
- [Visual QA contact sheet](../examples/presentations/harborscout/source/qa/contact-sheet.png)

The source directory is retained because it makes the presentation workflow inspectable. It contains the slide modules, planning notes, minimal package metadata, and the visual QA contact sheet. The original artifact runtime and machine-local dependency links are not bundled, so this is not a one-command portable build. Treat the deck as a failure-aware draft, not a polished or send-ready showcase.

## Historical research-run records

The [research-run index](../research-runs/README.md) contains eight sanitized provenance snapshots. Use them to study:

- the original research question
- selected depth and routing
- named tools and specialist roles
- recorded coverage
- promotion decisions
- available research plans and activity summaries

They are not complete evidence packages. Raw captures, provider responses, logs, copied source-card text, and downloaded media were deliberately excluded. Two families are explicit failure cases: the date-poisoned architect-AI chain and off-topic aquatic-vegetation retrieval. See [known limitations](../research-runs/KNOWN_LIMITATIONS.md).

## How to reuse an example responsibly

1. Copy the relevant template, not the example's conclusion.
2. Replace all illustrative or user-provided facts.
3. Re-run current research and open every material source.
4. Label confirmed facts, inferences, unknowns, and user claims separately.
5. Rebuild the contradiction pass and kill questions.
6. Record the new research date.
7. Remove confidential material and third-party content before publishing.
