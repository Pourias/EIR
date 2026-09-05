# Public research library

This directory is a metadata index, not a mirror of the web and not a complete evidence archive. It lets contributors discover the sources promoted by historical EIR research runs while keeping raw captures and copied page text out of the public repository.

## Contents

| File or directory | Purpose |
|---|---|
| [SOURCE_CATALOG.md](SOURCE_CATALOG.md) | Human-readable catalog of 113 promoted source records |
| [source-catalog.json](source-catalog.json) | Machine-readable version of the same catalog |
| [manifests](manifests/) | Three reduced source-promotion and coverage manifests |

The catalog was generated from the private processed library by [export_public_research.py](../scripts/export_public_research.py).

## What a source record means

A record may contain:

- **topic:** the research topic used to group the source
- **run:** the historical run that promoted it
- **title:** the title recorded by the research pipeline
- **url:** the original source location
- **source_class:** an automated source-type label
- **quality_score:** an automated ranking signal
- **provider_score:** the original provider's ranking signal when available
- **meaningful:** whether the pipeline considered the source useful
- **search_passes:** the pass or passes that surfaced it

These fields describe what the historical pipeline recorded. They do not certify that a source is authoritative, relevant, current, correctly classified, or accurately summarized.

## How to use the library

1. Find the relevant topic in [SOURCE_CATALOG.md](SOURCE_CATALOG.md) or filter [source-catalog.json](source-catalog.json).
2. Open the original URL.
3. Check that the page still exists and is the same source described by the record.
4. Verify publication date, author, authority, methodology, and relevance.
5. Read enough of the original to support the exact claim you intend to make.
6. Triangulate consequential claims with another primary or authoritative source.
7. Cite the original source and record the date you accessed it.

Do not cite this catalog as proof of the underlying claim.

## Why raw material is absent

The private workspace contained raw provider payloads, page captures, source-card bodies, logs, and downloaded media. Those files were intentionally excluded because they:

- repeated the same content across active runs and the promoted library
- contained copied webpage text and public contact details
- preserved machine-specific paths and provider internals
- could carry untrusted instructions from external pages
- created copyright and redistribution concerns
- included off-topic retrieval that should not be amplified

The public exporter keeps a small metadata record and discards the captured body.

## Known metadata limitations

- Source classes and quality scores were assigned automatically and can be wrong.
- High scores measure the historical heuristic, not factual accuracy.
- A source count measures retrieval volume, not coverage quality.
- Some titles were supplied by search providers or derived from source-card headings.
- Malformed headings can produce overlong titles that contain more source-derived text than intended.
- URLs can move, expire, redirect, or change content.
- Three promoted topics are represented; the catalog is not a complete record of every historical run.
- The catalog includes material from research runs with known relevance failures.

Review [known research limitations](../research-runs/KNOWN_LIMITATIONS.md) before interpreting these records.

## Adding public source metadata

Prefer this minimum record:

- a concise title
- canonical URL
- publisher or author
- publication date when known
- access date
- source type
- the exact claim it can support
- a short relevance note written in your own words

Do not add full articles, long quotations, credentials, personal contact lists, paywalled copies, downloaded media, or raw provider responses. If the source cannot be redistributed, link to it.

## Regenerating the catalog

From a private CX Research directory that contains 20_active and 40_library:

    python3 scripts/export_public_research.py /path/to/cx-research --repo-root .

The command is run from the repository root. Generation is only the first step. Manually review the output for confidential questions, personal data, malformed titles, classification errors, and off-topic sources before committing it.

The complete public/private treatment is recorded in the [publication manifest](../PUBLICATION_MANIFEST.md).
