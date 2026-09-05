#!/usr/bin/env python3
"""Run zero-dependency safety and integrity checks for the public EIR tree."""

from __future__ import annotations

import json
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import unquote


ROOT = Path(__file__).resolve().parents[1]
SKIP_DIRS = {".git", "__pycache__", "work", "output"}
TEXT_SUFFIXES = {
    ".css",
    ".html",
    ".js",
    ".json",
    ".jsonl",
    ".md",
    ".mjs",
    ".py",
    ".svg",
    ".toml",
    ".txt",
    ".xml",
    ".yaml",
    ".yml",
}
REQUIRED = {
    "README.md",
    "LICENSE",
    "SECURITY.md",
    "CONTRIBUTING.md",
    "PUBLICATION_MANIFEST.md",
    "AGENTS.md",
    "SOUL.md",
    "docs/QUICKSTART.md",
    "docs/HOW_IT_WORKS.md",
    "templates/idea-intake.md",
    "templates/startup-diligence-memo.md",
    "library/SOURCE_CATALOG.md",
    "research-runs/KNOWN_LIMITATIONS.md",
}
FORBIDDEN_NAMES = {".DS_Store", "workspace-state.json", ".env"}
CONTENT_RULES = {
    "macOS home path": re.compile(r"(?<![A-Za-z0-9:/])/Users/[A-Za-z0-9._-]+/"),
    "Linux home path": re.compile(r"(?<![A-Za-z0-9:/])/home/[A-Za-z0-9._-]+/"),
    "Windows home path": re.compile(r"[A-Za-z]:\\\\Users\\\\[^\\\\]+"),
    "private workspace path": re.compile(r"(?:20_WORKSPACES|OpenClawVault|TESLADRIVE)"),
    "private Notion page": re.compile(r"https?://(?:www\.)?app\.notion\.com/p/"),
    "OpenAI-style secret": re.compile(r"(?<![A-Za-z0-9])sk-[A-Za-z0-9_-]{20,}"),
    "GitHub token": re.compile(r"(?<![A-Za-z0-9])(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})"),
    "AWS access key": re.compile(r"(?<![A-Z0-9])AKIA[0-9A-Z]{16}(?![A-Z0-9])"),
    "Google API key": re.compile(r"(?<![A-Za-z0-9])AIza[0-9A-Za-z_-]{30,}"),
    "private key": re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----"),
}
MARKDOWN_LINK = re.compile(r"!?(?:\[[^\]]*\])\(([^)]+)\)")
MAX_FILE_BYTES = 20 * 1024 * 1024


def skipped(path: Path) -> bool:
    try:
        parts = path.relative_to(ROOT).parts
    except ValueError:
        return True
    return any(part in SKIP_DIRS for part in parts)


def iter_files() -> list[Path]:
    return sorted(path for path in ROOT.rglob("*") if not skipped(path) and (path.is_file() or path.is_symlink()))


def check_markdown_links(path: Path, text: str, errors: list[str]) -> None:
    for match in MARKDOWN_LINK.finditer(text):
        raw = match.group(1).strip()
        if raw.startswith("<") and raw.endswith(">"):
            raw = raw[1:-1]
        target = raw.split(maxsplit=1)[0]
        if target.startswith(("http://", "https://", "mailto:", "#", "data:")):
            continue
        target = unquote(target.split("#", 1)[0])
        if not target:
            continue
        resolved = (path.parent / target).resolve()
        if not resolved.exists():
            errors.append(f"{path.relative_to(ROOT)}: broken relative link: {raw}")


def main() -> int:
    errors: list[str] = []
    warnings: list[str] = []

    for required in sorted(REQUIRED):
        if not (ROOT / required).exists():
            errors.append(f"missing required file: {required}")

    files = iter_files()
    for path in files:
        relative = path.relative_to(ROOT)
        if path.name in FORBIDDEN_NAMES or "node_modules" in relative.parts:
            errors.append(f"forbidden local artifact: {relative}")
            continue
        if path.is_symlink():
            target = path.readlink()
            if target.is_absolute() or not path.resolve().exists():
                errors.append(f"nonportable symlink: {relative} -> {target}")
            continue
        if path.stat().st_size > MAX_FILE_BYTES:
            errors.append(f"file exceeds 20 MiB public-repo limit: {relative}")

        if relative == Path("scripts/validate_repository.py"):
            continue

        if path.suffix.lower() == ".json":
            try:
                json.loads(path.read_text(encoding="utf-8"))
            except (UnicodeDecodeError, json.JSONDecodeError) as exc:
                errors.append(f"invalid JSON: {relative}: {exc}")
        if path.suffix.lower() == ".svg":
            try:
                ET.parse(path)
            except ET.ParseError as exc:
                errors.append(f"invalid SVG/XML: {relative}: {exc}")

        if path.suffix.lower() not in TEXT_SUFFIXES:
            continue
        try:
            text = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            warnings.append(f"skipped non-UTF-8 text-like file: {relative}")
            continue
        for label, pattern in CONTENT_RULES.items():
            if pattern.search(text):
                errors.append(f"{relative}: matched {label}")
        if path.suffix.lower() == ".md":
            check_markdown_links(path, text, errors)

    if warnings:
        print("Warnings:")
        for warning in warnings:
            print(f"  - {warning}")
    if errors:
        print(f"Validation failed with {len(errors)} issue(s):")
        for error in errors:
            print(f"  - {error}")
        return 1
    print(f"Validation passed: {len(files)} files checked.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
