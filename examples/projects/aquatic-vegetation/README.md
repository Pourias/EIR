# Austin aquatic-vegetation example

This historical example shows a structured research request, an explicit Go/No-Go scorecard, an interactive HTML review artifact, and a generated DOCX executive summary.

- Factual cutoff: June 17, 2026.
- Status: generated draft; not legal, environmental, or investment advice.
- The public HTML omits three unlicensed local images and private review-workspace links.
- Downloaded web images, video files, raw crawls, render caches, and private feedback data are not included.
- The DOCX generator requires Python 3 and `python-docx`; its output path has been made relative to this folder.

```bash
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -r requirements.txt
python3 build_valorization_exec_summary.py
```
