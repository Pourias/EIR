#!/usr/bin/env python3
"""Export EIR research metadata without republishing captured source text.

The private research workspace stores full search-provider snippets and machine
paths. This exporter keeps the reusable facts about each run and each source,
but deliberately leaves captured text behind. It uses only Python's standard
library.
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
from pathlib import Path
from typing import Any


CARD_FIELD_RE = re.compile(r"^- ([^:]+):\s*(.*)$")


def load_json(path: Path) -> dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(payload, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )


def parse_bool(value: str) -> bool | str:
    lowered = value.strip().lower()
    if lowered == "true":
        return True
    if lowered == "false":
        return False
    return value.strip()


def parse_card(path: Path, cards_root: Path) -> dict[str, Any]:
    lines = path.read_text(encoding="utf-8", errors="replace").splitlines()
    heading = lines[0].lstrip("# ").strip() if lines else path.stem
    title = re.sub(r"^Source Card\s+\d+:\s*", "", heading)
    title = " ".join(title.split())
    if len(title) > 180:
        title = re.sub(r"^\d+__", "", path.stem).replace("-", " ").replace("_", " ")
        title = " ".join(title.split()).strip().title()
    if len(title) > 180:
        title = title[:177].rstrip() + "..."
    fields: dict[str, Any] = {}
    for line in lines[1:]:
        if line.startswith("## "):
            break
        match = CARD_FIELD_RE.match(line)
        if not match:
            continue
        key = match.group(1).strip().lower().replace(" ", "_")
        value = parse_bool(match.group(2))
        if key in {"provider_score", "quality_score"}:
            try:
                value = float(str(value))
            except ValueError:
                pass
        fields[key] = value

    relative = path.relative_to(cards_root)
    topic = relative.parts[0] if relative.parts else "uncategorized"
    run = relative.parts[1] if len(relative.parts) > 2 else "unknown"
    return {
        "topic": topic,
        "run": run,
        "title": title,
        "url": fields.get("url", ""),
        "source_class": fields.get("source_class", "unknown"),
        "quality_score": fields.get("quality_score"),
        "provider_score": fields.get("provider_score"),
        "meaningful": fields.get("meaningful"),
        "search_passes": fields.get("search_passes", ""),
    }


def safe_manifest(manifest: dict[str, Any]) -> dict[str, Any]:
    route = manifest.get("route") or {}
    promotion = manifest.get("promotion") or {}
    promotion_decision = promotion.get("decision") or {}
    live_run = manifest.get("live_run") or {}
    api_health = manifest.get("api_health") or {}
    deep_research = manifest.get("deep_research") or {}
    reuse_lookup = manifest.get("reuse_lookup") or {}
    return {
        "schema_version": manifest.get("schema_version", 1),
        "task_id": manifest.get("task_id"),
        "question": manifest.get("question"),
        "category": manifest.get("category"),
        "evidence_type": manifest.get("evidence_type"),
        "depth": manifest.get("depth"),
        "deliverable": manifest.get("deliverable"),
        "requested_output_format": manifest.get("requested_output_format"),
        "route": {
            key: route.get(key)
            for key in (
                "skills",
                "tools",
                "optional_tools",
                "tool_controls",
                "depth_profile",
                "subagents",
                "social_platforms",
                "social_mode",
                "explanation",
            )
            if route.get(key) is not None
        },
        "coverage": manifest.get("coverage"),
        "reuse_lookup": {
            key: reuse_lookup.get(key)
            for key in (
                "status",
                "collections",
                "result_count",
                "authoritative_hit_count",
                "served_without_search",
            )
            if reuse_lookup.get(key) is not None
        },
        "promotion": {
            "status": promotion.get("status"),
            "reason": promotion.get("reason"),
            "cards_promoted": promotion.get("cards_promoted"),
            "captures_promoted": promotion.get("captures_promoted"),
            "decision": {
                key: promotion_decision.get(key)
                for key in ("status", "reason", "shared_promotion_allowed", "quarantined_in_run_dir", "coverage_snapshot")
                if promotion_decision.get(key) is not None
            },
        },
        "live_run": {
            key: live_run.get(key)
            for key in ("provider", "pass_count", "result_count", "capture_count", "query_variants")
            if live_run.get(key) is not None
        },
        "api_health": {
            key: api_health.get(key)
            for key in ("status", "summary", "blocking_failures")
            if api_health.get(key) is not None
        },
        "deep_research": {
            "theme_count": deep_research.get("theme_count")
        }
        if deep_research
        else None,
    }


def extract_overview(brief_path: Path) -> str:
    if not brief_path.exists():
        return ""
    text = brief_path.read_text(encoding="utf-8", errors="replace")
    match = re.search(r"^## Overview\s*$\n(.*?)(?=^## |\Z)", text, re.MULTILINE | re.DOTALL)
    if not match:
        return ""
    overview = " ".join(line.strip() for line in match.group(1).splitlines() if line.strip())
    return overview[:1200]


def public_run_readme(slug: str, manifest: dict[str, Any], overview: str) -> str:
    coverage = manifest.get("coverage") or {}
    route = manifest.get("route") or {}
    lines = [
        f"# Research run: {manifest.get('task_id') or slug}",
        "",
        "> Historical run metadata. Re-verify time-sensitive claims before using them.",
        "",
        "## Question",
        "",
        str(manifest.get("question") or "Not recorded."),
        "",
    ]
    if overview:
        lines.extend(["## Overview from the run", "", overview, ""])
    lines.extend(
        [
            "## Coverage",
            "",
            f"- Depth: `{manifest.get('depth') or 'unknown'}`",
            f"- Search passes: `{coverage.get('executed_passes', 'unknown')}`",
            f"- Unique sources: `{coverage.get('source_count', 'unknown')}`",
            f"- Meaningful sources: `{coverage.get('meaningful_source_count', 'unknown')}`",
            f"- High-quality sources: `{coverage.get('high_quality_source_count', 'unknown')}`",
            f"- Primary-like sources: `{coverage.get('primary_like_source_count', 'unknown')}`",
            f"- Depth standard met: `{coverage.get('met_depth_standard', 'unknown')}`",
            "",
            "## Route",
            "",
            f"- Skills: {', '.join(route.get('skills') or []) or 'not recorded'}",
            f"- Tools: {', '.join(route.get('tools') or []) or 'not recorded'}",
            f"- Subagents: {', '.join(route.get('subagents') or []) or 'not recorded'}",
            "",
            "See `manifest.public.json` for the machine-readable run record. Raw captures, provider responses, logs, and long source excerpts are intentionally excluded from the public export.",
            "",
        ]
    )
    return "\n".join(lines)


def export_catalog(cx_root: Path, repo_root: Path) -> int:
    cards_root = cx_root / "40_library" / "processed" / "source-cards"
    cards = [parse_card(path, cards_root) for path in sorted(cards_root.rglob("*.md"))]
    library_dir = repo_root / "library"
    write_json(library_dir / "source-catalog.json", {"schema_version": 1, "source_count": len(cards), "sources": cards})

    by_topic: dict[str, list[dict[str, Any]]] = {}
    for card in cards:
        by_topic.setdefault(str(card["topic"]), []).append(card)
    markdown = [
        "# EIR source catalog",
        "",
        f"This metadata-only catalog contains **{len(cards)}** promoted source records. Captured source text is intentionally omitted; follow each link to read and verify the original.",
        "",
    ]
    for topic, topic_cards in sorted(by_topic.items()):
        markdown.extend([f"## {topic.replace('-', ' ').title()}", ""])
        for card in topic_cards:
            title = str(card["title"]).replace("[", "\\[").replace("]", "\\]")
            url = card.get("url") or ""
            source_class = card.get("source_class") or "unknown"
            markdown.append(f"- [{title}]({url}) · `{source_class}` · quality `{card.get('quality_score')}`")
        markdown.append("")
    (library_dir / "SOURCE_CATALOG.md").write_text("\n".join(markdown), encoding="utf-8")

    manifest_source = cx_root / "40_library" / "processed" / "source-manifests"
    manifest_output = library_dir / "manifests"
    for path in sorted(manifest_source.glob("*.json")):
        raw = load_json(path)
        public = {
            key: raw.get(key)
            for key in ("task_id", "topic_slug", "coverage", "cards_promoted", "captures_promoted")
            if raw.get(key) is not None
        }
        write_json(manifest_output / path.name, public)

    active_root = cx_root / "20_active"
    runs: list[dict[str, Any]] = []
    for path in sorted(active_root.rglob("manifest.json")):
        if "chain_steps" in path.parts:
            continue
        raw = load_json(path)
        slug = path.parent.name
        public = safe_manifest(raw)
        run_output = repo_root / "research-runs" / slug
        write_json(run_output / "manifest.public.json", public)
        overview = extract_overview(path.parent / "brief.md")
        (run_output / "README.md").write_text(public_run_readme(slug, public, overview), encoding="utf-8")
        for artifact in ("deep_plan.md", "deep_activity_summary.md"):
            source = path.parent / "04_analysis" / artifact
            if source.exists():
                shutil.copy2(source, run_output / artifact)
        runs.append(
            {
                "slug": slug,
                "task_id": public.get("task_id"),
                "question": public.get("question"),
                "coverage": public.get("coverage"),
                "path": f"{slug}/README.md",
            }
        )

    write_json(repo_root / "research-runs" / "index.json", {"schema_version": 1, "run_count": len(runs), "runs": runs})
    index_lines = [
        "# Historical research runs",
        "",
        "These metadata-first records show how the factory routed and measured its deep-research work. They are provenance examples, not current truth.",
        "",
    ]
    for run in runs:
        coverage = run.get("coverage") or {}
        index_lines.append(
            f"- [{run.get('task_id') or run['slug']}]({run['path']}) · "
            f"{coverage.get('executed_passes', '?')} passes · {coverage.get('source_count', '?')} sources"
        )
    index_lines.append("")
    (repo_root / "research-runs" / "README.md").write_text("\n".join(index_lines), encoding="utf-8")
    return len(cards)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("cx_root", type=Path, help="Path containing 20_active and 40_library")
    parser.add_argument("--repo-root", type=Path, default=Path.cwd(), help="Public repository root")
    args = parser.parse_args()
    count = export_catalog(args.cx_root.resolve(), args.repo_root.resolve())
    print(f"Exported {count} source records without captured source text.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
