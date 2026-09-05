# Contributing to EIR

Thank you for helping improve EIR. Contributions should make the factory clearer, more portable, more evidence-led, or safer to reuse.

## Good contributions

- Correct or clarify documentation.
- Improve reusable templates and evaluation criteria.
- Add tests or strengthen publication validation.
- Improve the case-scaffolding and safe-export scripts.
- Add an original worked example with assumptions, dates, citations, and limitations clearly labeled.
- Add metadata-only source records or original summaries that improve the knowledge library.

Security-sensitive reports belong in the private process described in [`SECURITY.md`](SECURITY.md), not in a public issue.

## Rights and contribution license

By submitting a contribution, you represent that you created it or have the authority to submit it, and that it can be distributed under the repository's MIT License. You agree that your contribution is licensed under that license.

Do not submit material copied from webpages, papers, paid databases, employer systems, client workspaces, other repositories, or generated-asset services unless its license or written permission clearly allows repository redistribution. Linking and writing an original summary is usually safer than copying.

Third-party links, facts, names, and citations are not relicensed by EIR. See [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md).

## Never include

- Secrets, populated `.env` files, private keys, cookies, credentials, or connection strings.
- Personal data, private contact details, confidential founder/client information, private links, or unpublished deal material.
- Absolute machine paths, device identifiers, local user names, or runtime-cache locations.
- Raw webpage captures, full source text, provider API payloads, browser exports, search dumps, or model transcripts.
- Downloaded third-party media without a complete file-level rights record.
- Logs, diagnostics, caches, temporary render directories, dependencies, or absolute/broken symlinks.
- Hidden document comments, notes, revisions, attachments, or metadata that has not been reviewed.

If realistic data is useful for a test, use an obviously fictional fixture rather than anonymizing a real private record.

## Development workflow

1. Fork the repository and create a focused branch.
2. Make the smallest coherent change.
3. Keep generated and local files outside the tracked tree.
4. Run the repository checks:

   ```bash
   python3 scripts/validate_repository.py
   git diff --check
   ```

5. Inspect every staged path and binary artifact:

   ```bash
   git status --short
   git diff --cached --stat
   ```

6. Run a reputable secret scanner against the staged tree and history.
7. Open a pull request describing the reason for the change, verification performed, source/asset rights, and any remaining limitation.

Do not force-add a file merely because `.gitignore` blocked it. Determine why it was ignored and obtain review first.

## Research and source records

Public source records should be metadata-first. Include only what a reviewer needs to locate and evaluate a source:

- Title and publisher.
- Canonical URL or stable identifier.
- Publication and retrieval dates when available.
- Source class and relevance.
- An original concise summary.
- Any known license or reuse constraint.

Do not paste the article, paper, transcript, search-result body, or provider response. Clearly distinguish `user-provided`, `confirmed`, `inferred`, and `unknown` claims. Re-check current claims before presenting a historical example as current.

## Worked examples

An example pull request should state:

- Whether every name and scenario is real, fictional, or anonymized.
- Whether publication could affect intellectual property, confidentiality, safety, or regulated activity.
- Which facts are historical and the date they were checked.
- Why each non-text asset may be redistributed.
- Which private or raw source artifacts were excluded.

Examples involving healthcare, finance, law, defense, public safety, children, or other high-stakes contexts require especially conservative framing. They must remain analytical examples and must not become deployment instructions or professional advice.

## Style

- Write directly and define specialized terms.
- Prefer explicit assumptions, evidence labels, and testable stop conditions.
- Use portable relative paths.
- Keep documentation links valid.
- Preserve JSON and SVG validity.
- Avoid claims of certainty that the evidence does not support.

## Pull-request checklist

- [ ] I have the right to submit every added file.
- [ ] No secret, personal, confidential, or private-link data is present.
- [ ] No raw capture, provider payload, log, cache, dependency directory, or local path is present.
- [ ] Third-party sources and assets are linked and attributed without being relicensed.
- [ ] Current claims are dated and cited; assumptions remain labeled.
- [ ] I reviewed document metadata and binary contents.
- [ ] `python3 scripts/validate_repository.py` passes.
- [ ] I reviewed the complete staged-file list.
