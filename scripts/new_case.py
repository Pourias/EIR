#!/usr/bin/env python3
"""Create a private, dated EIR case from the repository templates."""

from __future__ import annotations

import argparse
import json
import re
import unicodedata
from datetime import date
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
TEMPLATES = ROOT / "templates"
FILES = {
    "idea-intake.md": "idea-intake.md",
    "research-request.json": "research-request.json",
    "claim-ledger.md": "claim-ledger.md",
    "diligence-memo.md": "startup-diligence-memo.md",
    "go-no-go-scorecard.json": "go-no-go-scorecard.json",
    "experiment-plan.md": "experiment-plan.md",
    "morning-brief.txt": "morning-brief-startup-handoff.txt",
}


def slugify(value: str) -> str:
    normalized = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode()
    slug = re.sub(r"[^a-z0-9]+", "-", normalized.lower()).strip("-")
    return slug[:64] or "startup-idea"


def parse_date(value: str) -> str:
    return date.fromisoformat(value).isoformat()


def render(text: str, idea_name: str, case_id: str, opened: str) -> str:
    replacements = {
        "{{IDEA_NAME}}": idea_name,
        "{{CASE_ID}}": case_id,
        "{{DATE}}": opened,
    }
    for source, target in replacements.items():
        text = text.replace(source, target)
    text = text.replace("- Name:\n", f"- Name: {idea_name}\n", 1)
    text = text.replace("- Date:\n", f"- Date: {opened}\n", 1)
    text = text.replace("- Analyst:\n", "- Analyst: EIR\n", 1)
    text = text.replace("- Status: `draft | in review | final`", "- Status: `draft`", 1)
    return text


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("idea_name", help="Human-readable startup idea or working name")
    parser.add_argument("--date", default=date.today().isoformat(), type=parse_date)
    parser.add_argument("--destination", type=Path, default=ROOT / "work")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    case_id = f"{args.date}_{slugify(args.idea_name)}"
    destination = args.destination.expanduser().resolve() / case_id
    if destination.exists():
        parser.error(f"case already exists: {destination}")
    if args.dry_run:
        print(destination)
        return 0

    destination.mkdir(parents=True)
    written: list[str] = []
    for output_name, template_name in FILES.items():
        source = TEMPLATES / template_name
        content = render(source.read_text(encoding="utf-8"), args.idea_name, case_id, args.date)
        (destination / output_name).write_text(content, encoding="utf-8")
        written.append(output_name)

    manifest = {
        "schema_version": 1,
        "case_id": case_id,
        "idea_name": args.idea_name,
        "opened_on": args.date,
        "status": "intake",
        "artifacts": written,
    }
    (destination / "case-manifest.json").write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print(f"Created {destination}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
