# Publication manifest

This manifest explains how the private EIR workspace was converted into this public repository. The public release is intentionally curated. It preserves reusable method, provenance, and representative outputs without republishing private state, raw provider data, or downloaded third-party content.

## Treatment labels

- **Included:** copied into the public package because it is repository-owned, useful, and suitable for review.
- **Transformed:** rewritten, reduced, or generated from private material to remove machine-specific or non-public content.
- **Excluded:** deliberately left out because it is private, temporary, duplicative, nonportable, or subject to third-party rights.

Inclusion does not mean that a historical claim is current or endorsed. It means the artifact is useful for understanding the EIR method.

## Source inventory

The inspected private EIR tree contained approximately 57 MB, 1,138 regular files, 435 directories, and two local-runtime symlinks. Most of that footprint was generated research material, render output, temporary application state, or downloaded media. Only a small portion was reusable agent configuration or generator source.

## Source-to-public mapping

| Private source material | Public destination | Treatment | Notes |
|---|---|---|---|
| EIR role, identity, tool, user, and memory files | Repository root | Transformed | Rewritten for a standalone public repository; personal profile data and external-vault dependencies were removed |
| Blank diligence and morning-brief formats | [templates](templates/) | Included | Promoted from generated output into a stable reusable location |
| Selected diligence memos and brief | [examples/diligence](examples/diligence/) and [examples/briefs](examples/briefs/) | Included or editorially labeled | Retained as historical teaching artifacts; DenialPilot is explicitly fictional |
| Selected school-security and deep-sea reports | [examples/research](examples/research/) | Included | Large crawl payloads were not carried with the reports |
| Aquatic-vegetation request, scorecard, report, generator, and document | [examples/projects/aquatic-vegetation](examples/projects/aquatic-vegetation/) | Transformed | Downloaded media and render caches were excluded; private links and local image references were removed, and the generator output path was made relative |
| HarborScout draft deck and selected source/build evidence | [examples/presentations/harborscout](examples/presentations/harborscout/) | Included | Historical PDF/PPTX plus slide modules, planning notes, package metadata, QA contact sheet, and explicit defect notes are retained as a failure-aware visual example |
| Finished document-format artifacts | [examples/documents](examples/documents/) | Included | Preserved to demonstrate DOCX, ODT, and PDF outputs |
| Eight private CX Research run directories | [research-runs](research-runs/) | Transformed | Reduced to public README files, sanitized manifests, and available plans/activity summaries |
| Promoted source-card collection | [library](library/) | Transformed | Reduced to 113 source metadata records and three public source manifests |
| Private historical memory and daily notes | [MEMORY.md](MEMORY.md) and [memory](memory/) | Transformed | Replaced with safe empty scaffolding and usage guidance |
| Public metadata-export logic | [scripts/export_public_research.py](scripts/export_public_research.py) | Included | Standard-library exporter documents and reproduces the reduction process |

## Included public research records

Each directory under [research-runs](research-runs/) contains a subset of:

- a generated README with the research question, historical overview, coverage, and route
- manifest.public.json with selected machine-readable fields
- deep_plan.md when the original run produced one
- deep_activity_summary.md when the original run produced one

The public manifest intentionally omits private run directories, local absolute paths, detailed provider diagnostics, raw responses, and captured page text. Some chain-level runs report unknown aggregate coverage because the source manifest did not contain a reliable roll-up.

## Included public library

The [source catalog](library/SOURCE_CATALOG.md) and [JSON catalog](library/source-catalog.json) retain metadata such as:

- source title and original URL
- topic and originating run
- source class
- automated provider and quality scores
- meaningful-source flag
- search-pass labels

The [public source manifests](library/manifests/) retain selected coverage and promotion fields. They do not contain the underlying source cards or webpage text.

Automated titles, classes, and scores can be wrong. In particular, a malformed source-card heading can become an overlong catalog title. Treat the catalog as a discovery and provenance aid, then open and verify the original source.

## Explicitly excluded material

The following private-source material is not part of this public repository:

- API keys, passwords, tokens, cookies, and secret-store contents
- .openclaw workspace state and other local application state
- .DS_Store files
- temporary LibreOffice profiles and other conversion scratch files
- local node_modules symlinks and cached runtime dependencies
- raw search-provider payloads
- raw webpage and crawler captures
- copied source-card bodies and long source excerpts
- chain stdout, activity logs, diagnostics, and transient state files
- duplicate active-run and promoted-library copies
- unselected page renders, PDF renders, layout diagnostics, and contact sheets
- DeepSea consulting and internal crawl payloads
- aquatic-vegetation downloaded images
- YouTube video files, thumbnails, and info JSON
- other downloaded third-party media

The HarborScout QA contact sheet is a deliberate exception to the general preview rule and is retained as part of a single inspectable visual example. Separate slide previews and layout diagnostics are not included. The [artifact landing page](examples/presentations/harborscout/README.md) records the slide overlap, placeholders, font-portability risk, and raster-PDF limitation found during publication review.

## Why raw source cards and captures are excluded

Raw research artifacts combined large provider responses, copied webpage passages, public contact details, prompt-injection risk, machine-local paths, and extensive duplication. Publishing them would add little instructional value while increasing privacy, copyright, security, and maintenance risk.

The public package keeps source URLs and limited provenance metadata instead. Readers should cite the original source, not this repository's catalog.

## Why downloaded media is excluded

The private workspace contained 22 media files totaling about 27 MiB, including four downloaded web videos, thumbnails, metadata, and externally sourced images. The repository does not have blanket redistribution rights for those files. They were replaced by source references where useful.

The public HTML copy removes the corresponding private/local image references rather than leaving broken links. It preserves the analysis while omitting imagery for which the repository has no documented redistribution right.

## Known quality failures

The public provenance records preserve evidence that the historical research system sometimes completed mechanically while failing semantically:

- An architect-AI chain over-weighted the date phrase “July 4” and retrieved holiday material.
- Aquatic-vegetation runs admitted unrelated customer-experience companies and generic business-directory results.
- Automated source classes and quality scores sometimes overstated source relevance or authority.

These are documented as failure cases in [research-runs/KNOWN_LIMITATIONS.md](research-runs/KNOWN_LIMITATIONS.md). Their retention is intentional: a useful factory documents how it can fail, not only how it is supposed to work.

## Reproducing the metadata export

The [public exporter](scripts/export_public_research.py) accepts a private CX Research root containing 20_active and 40_library and writes reduced run records and source metadata into a repository root.

    python3 scripts/export_public_research.py /path/to/cx-research --repo-root .

Run it only against material you are authorized to process. Review the generated catalog for malformed titles, personal data, confidential questions, and off-topic sources before publication.

## Publication standard for future additions

Before adding a new example or run:

1. Confirm that the requester has authority to publish it.
2. Remove confidential founder, customer, and partner material.
3. Remove credentials and machine-specific paths.
4. Replace raw captures with original URLs and concise metadata.
5. Review third-party licensing and do not copy media by default.
6. Re-check time-sensitive claims and label the research date.
7. Inspect automated source classifications and titles manually.
8. State whether the artifact is a success case, a historical snapshot, or a known failure.
