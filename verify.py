"""Small static checks for the course site; run with `python verify.py`."""

from html.parser import HTMLParser
from pathlib import Path
import json
import re
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent
PAGES = [ROOT / name for name in ("index.html", "projects.html", "contact.html")]


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.local_assets = []
        self.local_links = []
        self.h1_count = 0

    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        if data.get("id"):
            assert data["id"] not in self.ids, f"duplicate id: {data['id']}"
            self.ids.add(data["id"])
        if tag == "h1":
            self.h1_count += 1
        for key in ("src", "href"):
            value = data.get(key, "")
            if value and not value.startswith(("http:", "https:", "#", "mailto:")):
                if value.endswith(".html") or ".html#" in value:
                    self.local_links.append(value.split("#")[0])
                elif not value.startswith("data:"):
                    self.local_assets.append(value)


for page in PAGES:
    parser = PageParser()
    parser.feed(page.read_text(encoding="utf-8"))
    assert parser.h1_count == 1, f"{page.name}: expected one h1"
    assert "main" in page.read_text(encoding="utf-8")
    for relative in parser.local_assets + parser.local_links:
        assert (ROOT / relative).is_file(), f"{page.name}: missing {relative}"

projects = json.loads((ROOT / "data/projects.json").read_text(encoding="utf-8"))
assert len(projects) == 3
assert {p["id"] for p in projects} == {"taxipark", "technokhan", "bigpro"}
for project in projects:
    assert all(project["description"][lang] for lang in ("ru", "en"))
    assert project["category"] in {"system", "web"}

css = (ROOT / "assets/css/style.css").read_text(encoding="utf-8")
assert css.count("{") == css.count("}")
assert "prefers-reduced-motion" in css
js = (ROOT / "assets/js/app.js").read_text(encoding="utf-8")
keys = set(re.findall(r'data-i18n="([A-Za-z0-9]+)"', "".join(p.read_text(encoding="utf-8") for p in PAGES)))
for key in keys:
    assert f"{key}:" in js, f"missing translation: {key}"
ET.parse(ROOT / "assets/images/taxipark-preview.svg")
assert "direction-word" in css and "follower-reel" in css
assert "ribbon-field" in css and "initRibbonFields" in js
assert "data-ripple-field" not in js + "".join(p.read_text(encoding="utf-8") for p in PAGES)
assert 'data-ribbon-field' in PAGES[0].read_text(encoding="utf-8")
assert 'data-ribbon-field' in PAGES[1].read_text(encoding="utf-8")
for field in ("name", "goal", "audience", "features"):
    assert f'aria-describedby="{field}-error"' in PAGES[2].read_text(encoding="utf-8")
assert "https://wa.me/77478032383?text=" in js
assert "brief-email" not in PAGES[2].read_text(encoding="utf-8")
assert "areket-brief-history" in js
assert "history.slice(0,5)" in js
assert 'id="brief-history-list"' in PAGES[2].read_text(encoding="utf-8")

print("Static checks passed: pages, links, assets, JSON, CSS and translation keys.")
