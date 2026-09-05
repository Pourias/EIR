# Known limitations and failure cases

The historical research records in this directory are provenance snapshots. They show what the original runner asked, how it routed the work, and what coverage it recorded. They do not prove that the retrieved evidence was relevant or that the resulting conclusion was correct.

This page names the most important observed failures so readers do not mistake mechanical completion for research quality.

## Failure case: architect-AI date poisoning

**Affected snapshot:** [architect-ai-replacement-cx-2026-07-04](2026-07-04_deep-current-diligence-on-a-startup-concept-an-ai-native-plat-aac44e67b7--07-04/README.md)

The request ended with the phrase “Current as of July 4, 2026.” The research chain over-weighted “July 4” as a topic rather than treating it as a freshness constraint. It surfaced holiday-related results about store openings, fireworks, civic events, and the Declaration of Independence. Those results were unrelated to architecture automation, permitting, BIM, or building-code compliance.

The chain still executed two steps and produced completion metadata before stopping on a low next-branch score. This is a semantic failure even though the orchestration completed.

**How to interpret it:** Do not use this run as evidence about the architect-AI market. It is retained only as a failure-case example. The public snapshot excludes the polluted captures and keeps the question, route, and reduced manifest for diagnosis.

**Required prevention:**

1. Represent the as-of date as structured metadata, not as an unqualified search term.
2. Require topic anchors such as architecture, BIM, permitting, or named companies in every query.
3. Apply semantic-relevance checks before accepting a pass.
4. Sample top results before allowing a chain to branch.
5. Quarantine a run when results repeatedly fail the topic check, regardless of source count.

The focused [architect-AI market run](2026-07-04_deep-market-and-competitor-diligence-on-ai-architecture-and-a-df162aec3a--07-04/README.md) is more relevant, but its catalog still over-represents Autodesk and should not be treated as a complete competitor map.

## Failure case: off-topic aquatic-vegetation retrieval

**Affected snapshots:**

- [Aquatic-vegetation chain](2026-06-14_deep-diligence-on-a-startup-idea-an-aquatic-vegetation-and-al-03e492426d--06-14/README.md)
- [Aquatic market and equipment run](2026-06-14_deep-market-competitor-equipment-pricing-and-unit-economics-r-a5218fa67a--06-14/README.md)
- Related active-run material from the same research family

The retrieval set admitted unrelated customer-experience material, including CXApp, NICE/Konecta, and generic business-directory pages. Likely causes include ambiguous “CX” terminology, broad autonomous branching, weak geographic and domain anchors, and accepting provider rank without a strict topical gate.

Several aquatic runs also recorded 40 unique sources while failing the configured depth standard or surfacing few meaningful sources. The source count therefore overstated the useful evidence base.

**How to interpret it:** Use the public plans and manifests to study routing and coverage, not to infer that every surfaced source supports the aquatic-vegetation thesis. Re-open and verify any source before reuse.

**Required prevention:**

1. Require aquatic, vegetation, hydrilla, algae, lake, Austin, Texas, equipment, or regulatory anchors appropriate to the pass.
2. Reject generic directories and unrelated customer-experience uses of “CX.”
3. Add negative terms when an acronym collides with another industry.
4. Measure relevant-source yield, not only result count.
5. Fail the pass when a manual or automated sample contains material outside the research question.

## Architecture research drift

The [paper-forward architecture run](2026-07-04_paper-forward-research-on-ai-systems-for-architectural-design-1c7d27f988--07-04/README.md) found relevant code-compliance research, but its promoted set also contains unrelated Microsoft job, health, robotics, general AI-company, and website-design pages. The run's high source and quality counts should not be read as proof of full topical precision.

This is another example of why a challenge pass must evaluate retrieval relevance as well as the conclusions drawn from retrieved material.

## Automated scores are not editorial review

Historical records contain source classes, provider scores, quality scores, meaningful-source flags, and depth-standard results. These are pipeline signals.

- A high quality score does not make a source primary.
- An “official” or “scholarly” label can be misclassified.
- Forty sources can still represent narrow, duplicated, or irrelevant coverage.
- A passed depth threshold measures configured counts, not decision readiness.
- A completed chain can still be semantically wrong.

The [public source catalog](../library/SOURCE_CATALOG.md) should be used for discovery only.

## Metadata-only export limits offline audit

Raw source cards, search-provider payloads, webpage captures, logs, and downloaded media are intentionally excluded from this repository. This protects privacy, copyright, and security, but it also means a reader cannot reconstruct every retrieval decision from the public package alone.

The reduced manifests preserve route and coverage information. They do not preserve every ranking input, provider response, or copied excerpt. Follow the original URLs and perform fresh research when the conclusion matters.

## Historical snapshots become stale

The runs were created in June and July 2026. Prices, funding, product capabilities, laws, permitting rules, scientific understanding, and competitor status can change. Exact dates in a historical question indicate the original research horizon; they are not a currentness guarantee.

Re-run changing claims and record a new access date.

## Incomplete aggregate coverage

Two chain-level snapshots report unknown values for passes and source coverage because their parent manifests did not contain a reliable aggregate. Their child steps existed in the private workspace, but the public exporter intentionally does not reproduce the raw chain tree.

Unknown means unavailable, not zero.

## External runner dependencies

Historical manifests name tools, private skills, and specialist roles used by the original runner. This repository does not bundle Tavily, Cloudflare Browser Rendering, Brave Search, Exa, Reddit, GitHub search, OpenAlex, Crossref, Semantic Scholar, the original CX Research implementation, or its credential setup.

Some original provider health checks ran with warnings, including unavailable GitHub authorization and missing Reddit credentials. A route listing a tool does not prove that the tool contributed usable evidence.

## Example portability limits

- The [aquatic document generator](../examples/projects/aquatic-vegetation/build_valorization_exec_summary.py) remains a historical, project-specific script, but the public copy writes beside itself and declares its Python dependency.
- The private aquatic HTML referred to downloaded local images and private review-workspace links. Those references were removed from the [public HTML](../examples/projects/aquatic-vegetation/Austin_Aquatic_Removal_Valorization_Review_Draft_2026-06-17.html), and the unlicensed images were not published.
- The [HarborScout source bundle](../examples/presentations/harborscout/source/) preserves slide modules and QA evidence but not the original artifact runtime or local dependency symlinks.
- The private DeepSea site pointer was a bare URL despite its `.json` suffix. The [public site pointer](../examples/research/deepsea/2026-06-02-deepsea-site-map.json) is a valid metadata JSON wrapper; the underlying crawl remains excluded.

These artifacts illustrate historical production, not a guaranteed portable build.

## Source-catalog extraction limits

The public exporter derives source titles from private source-card headings. A malformed heading can become an overlong title and carry more source-derived text than intended into the metadata catalog. Review and shorten abnormal titles before treating the catalog as publication-ready.

Automated source classification also produced implausible labels in the historical data. Open the source and classify it independently.

## Minimum review gate for future runs

A run should not be presented as a successful example until a reviewer can answer yes to all of these questions:

- Are the top results directly relevant to the question?
- Were material claims verified on opened sources?
- Are source types and dates labeled correctly?
- Does the source set cover the requested competitors, buyers, regulations, and counterarguments?
- Were obvious duplicates and query-collision results removed?
- Does the contradiction pass challenge the thesis rather than restate it?
- Are confidence and verdict calibrated to the missing evidence?
- Are private data, copied source text, and unlicensed media absent from the public export?

For the complete inclusion and exclusion policy, see the [publication manifest](../PUBLICATION_MANIFEST.md).
