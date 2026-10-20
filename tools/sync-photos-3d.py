#!/usr/bin/env python3
"""Ghi lại assets/photos-3d/manifest.json từ mọi ảnh trong folder.
Host tĩnh (GitHub Pages) không list thư mục — cần file này."""
from __future__ import annotations

import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
DIR = ROOT / "assets" / "photos-3d"
EXTS = {".png", ".jpg", ".jpeg", ".webp"}


def main() -> int:
    if not DIR.is_dir():
        print(f"Thiếu folder: {DIR}", file=sys.stderr)
        return 1
    names = sorted(
        p.name
        for p in DIR.iterdir()
        if p.is_file()
        and p.suffix.lower() in EXTS
        and not p.name.startswith(".")
        and p.name.lower() != "manifest.json"
    )
    out = DIR / "manifest.json"
    out.write_text(json.dumps(names, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Đã ghi {len(names)} ảnh → {out.relative_to(ROOT)}")
    for n in names:
        print(f"  - {n}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
