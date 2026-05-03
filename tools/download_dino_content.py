#!/usr/bin/env python3
"""
Download the local dino content cache for the typing game.

This script intentionally uses only the Python standard library so the static
app remains easy to maintain. It downloads:
- Paleo.GG card images to data/images/cards/
- Paleo.GG hero images to data/images/heroes/
- A cleaned DinosaurPictures.org content cache to data/dinosaur-pictures.js
- Images referenced by that cleaned cache to data/images/dinosaur-pictures/
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from dataclasses import dataclass
from html import escape
from html.parser import HTMLParser
from pathlib import Path
from typing import Callable
from urllib.error import HTTPError, URLError
from urllib.parse import quote, unquote, urljoin, urlencode, urlparse
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
WIKIMEDIA_API = "https://commons.wikimedia.org/w/api.php"
MIN_IMAGES_BEFORE_WIKIMEDIA = 10
DATA_DIR = ROOT / "data"
CARD_DIR = DATA_DIR / "images" / "cards"
HERO_DIR = DATA_DIR / "images" / "heroes"
DINO_PICTURES_IMAGE_DIR = DATA_DIR / "images" / "dinosaur-pictures"
DINO_PICTURES_JS = DATA_DIR / "dinosaur-pictures.js"

USER_AGENT = "Mozilla/5.0 (compatible; MousePracticeContentDownloader/1.0)"
REQUEST_TIMEOUT = 25
VOID_TAGS = {
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
}
BLOCKED_TAGS = {"script", "style", "iframe", "video", "form", "button", "input", "select", "textarea"}
BLOCKED_CLASS_PARTS = {
    "ai-badge",
    "below-main-content",
    "desktop",
    "mobile-dino-nav",
    "feedback",
    "featured-dino",
    "image-action",
    "other-featured",
    "source",
    "vote",
    "video",
    "videos",
}
BLOCKED_IDS = {"other-featured", "prefetch"}


@dataclass(frozen=True)
class Dino:
    id: str
    name: str

    @property
    def dinosaur_pictures_url(self) -> str:
        return f"https://dinosaurpictures.org/{quote(self.name.replace(' ', '-'))}-pictures"


DINOS = [
    Dino("allosaurus", "Allosaurus"),
    Dino("apatosaurus", "Apatosaurus"),
    Dino("euoplocephalus", "Euoplocephalus"),
    Dino("gallimimus", "Gallimimus"),
    Dino("iguanodon", "Iguanodon"),
    Dino("parasaurolophus", "Parasaurolophus"),
    Dino("stegosaurus", "Stegosaurus"),
    Dino("suchomimus", "Suchomimus"),
    Dino("velociraptor", "Velociraptor"),
    # Common (extended)
    Dino("ankylosaurus", "Ankylosaurus"),
    Dino("brachiosaurus", "Brachiosaurus"),
    Dino("diplodocus", "Diplodocus"),
    Dino("pachycephalosaurus", "Pachycephalosaurus"),
    Dino("pteranodon", "Pteranodon"),
    Dino("tyrannosaurus", "Tyrannosaurus"),
    Dino("troodon", "Troodon"),
    Dino("maiasaura", "Maiasaura"),
    Dino("dilophosaurus", "Dilophosaurus"),
    Dino("ouranosaurus", "Ouranosaurus"),
    Dino("corythosaurus", "Corythosaurus"),
    Dino("tarbosaurus", "Tarbosaurus"),
    Dino("plateosaurus", "Plateosaurus"),
    Dino("majungasaurus", "Majungasaurus"),
    Dino("deinocheirus", "Deinocheirus"),
    Dino("sinosauropteryx", "Sinosauropteryx"),
    Dino("centrosaurus", "Centrosaurus"),
    Dino("deinonychus", "Deinonychus"),
    Dino("einiosaurus", "Einiosaurus"),
    Dino("lythronax", "Lythronax"),
    Dino("megaraptor", "Megaraptor"),
    Dino("miragaia", "Miragaia"),
    Dino("shantungosaurus", "Shantungosaurus"),
    Dino("tanycolagreus", "Tanycolagreus"),
    Dino("saurornitholestes", "Saurornitholestes"),
    Dino("scolosaurus", "Scolosaurus"),
    # Rare
    Dino("albertosaurus", "Albertosaurus"),
    Dino("amargasaurus", "Amargasaurus"),
    Dino("archaeopteryx", "Archaeopteryx"),
    Dino("baryonyx", "Baryonyx"),
    Dino("compsognathus", "Compsognathus"),
    Dino("edmontosaurus", "Edmontosaurus"),
    Dino("gorgosaurus", "Gorgosaurus"),
    Dino("herrerasaurus", "Herrerasaurus"),
    Dino("megalosaurus", "Megalosaurus"),
    Dino("nasutoceratops", "Nasutoceratops"),
    Dino("nodosaurus", "Nodosaurus"),
    Dino("ornithomimus", "Ornithomimus"),
    Dino("oviraptor", "Oviraptor"),
    Dino("tenontosaurus", "Tenontosaurus"),
    Dino("therizinosaurus", "Therizinosaurus"),
    Dino("tuojiangosaurus", "Tuojiangosaurus"),
    Dino("proceratosaurus", "Proceratosaurus"),
    Dino("dreadnoughtus", "Dreadnoughtus"),
    Dino("carnotaurus", "Carnotaurus"),
    Dino("spinosaurus", "Spinosaurus"),
    Dino("triceratops", "Triceratops"),
    Dino("utahraptor", "Utahraptor"),
    Dino("dracorex", "Dracorex"),
    Dino("irritator", "Irritator"),
    Dino("argentinosaurus", "Argentinosaurus"),
    Dino("quetzalcoatlus", "Quetzalcoatlus"),
    Dino("dimetrodon", "Dimetrodon"),
    # Epic
    Dino("acrocanthosaurus", "Acrocanthosaurus"),
    Dino("concavenator", "Concavenator"),
    Dino("dakotaraptor", "Dakotaraptor"),
    Dino("erlikosaurus", "Erlikosaurus"),
    Dino("giganotosaurus", "Giganotosaurus"),
    Dino("gigantspinosaurus", "Gigantspinosaurus"),
    Dino("kentrosaurus", "Kentrosaurus"),
    Dino("microraptor", "Microraptor"),
    Dino("monolophosaurus", "Monolophosaurus"),
    Dino("protoceratops", "Protoceratops"),
    Dino("pyroraptor", "Pyroraptor"),
    Dino("rajasaurus", "Rajasaurus"),
    Dino("sinoceratops", "Sinoceratops"),
    Dino("struthiomimus", "Struthiomimus"),
    Dino("stygimoloch", "Stygimoloch"),
    Dino("tsintaosaurus", "Tsintaosaurus"),
    Dino("stegoceras", "Stegoceras"),
    Dino("rinchenia", "Rinchenia"),
    Dino("sonorasaurus", "Sonorasaurus"),
    Dino("scelidosaurus", "Scelidosaurus"),
    # Unique / Legendary (real genera)
    Dino("ceratosaurus", "Ceratosaurus"),
    Dino("graciliraptor", "Graciliraptor"),
    Dino("nyctosaurus", "Nyctosaurus"),
    Dino("nomingia", "Nomingia"),
]


def jwa_card_url(dino_id: str) -> str:
    return f"https://cdn.paleo.gg/games/jwa/images/creature/{dino_id}.png"


def hero_urls(dino_id: str) -> list[str]:
    return [
        f"https://cdn.paleo.gg/games/jwe2/images/dino/{dino_id}.png",
        f"https://cdn.paleo.gg/games/jwe/images/dino/{dino_id}.png",
        f"https://cdn.paleo.gg/games/jwtg/images/creature/{dino_id}.png",
        f"https://cdn.paleo.gg/games/jwplay/images/dino/{dino_id}.png",
        jwa_card_url(dino_id),
    ]


def sanitize_url(url: str) -> str:
    parts = urlparse(url)
    safe_path = quote(unquote(parts.path), safe="/:@!$&'()*+,;=-._~%")
    return parts._replace(path=safe_path).geturl()


def request_bytes(url: str) -> tuple[bytes, str]:
    request = Request(sanitize_url(url), headers={"User-Agent": USER_AGENT})
    with urlopen(request, timeout=REQUEST_TIMEOUT) as response:
        content_type = response.headers.get("Content-Type", "")
        return response.read(), content_type


def request_text(url: str) -> str:
    body, content_type = request_bytes(url)
    encoding_match = re.search(r"charset=([^;\s]+)", content_type, re.IGNORECASE)
    encoding = encoding_match.group(1) if encoding_match else "utf-8"
    return body.decode(encoding, errors="replace")


def download_binary(url: str, target: Path, force: bool) -> bool:
    if target.exists() and not force:
        return False

    body, _ = request_bytes(url)
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_bytes(body)
    return True


def safe_file_name_from_url(url: str, fallback: str) -> str:
    parsed = urlparse(url)
    name = unquote(Path(parsed.path).name) or fallback
    name = re.sub(r"[^a-zA-Z0-9._-]+", "-", name).strip("-")
    if "." not in name:
        name += ".jpg"
    return name.lower()


def render_start_tag(tag: str, attrs: list[tuple[str, str | None]]) -> str:
    attr_text = "".join(
        f' {name}="{escape(value or "", quote=True)}"'
        for name, value in attrs
        if value is not None
    )
    return f"<{tag}{attr_text}>"


def has_class(attrs: list[tuple[str, str | None]], class_name: str) -> bool:
    classes = next((value or "" for name, value in attrs if name == "class"), "")
    return class_name in classes.split()


def attr_value(attrs: list[tuple[str, str | None]], attr_name: str) -> str:
    return next((value or "" for name, value in attrs if name == attr_name), "")


class ContainerInnerExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=False)
        self.in_container = False
        self.done = False
        self.depth = 0
        self.parts: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if self.done:
            return
        if not self.in_container and tag == "div" and has_class(attrs, "container"):
            self.in_container = True
            self.depth = 1
            return
        if not self.in_container:
            return
        self.parts.append(render_start_tag(tag, attrs))
        if tag not in VOID_TAGS:
            self.depth += 1

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if self.in_container and not self.done:
            self.parts.append(render_start_tag(tag, attrs))

    def handle_endtag(self, tag: str) -> None:
        if not self.in_container or self.done:
            return
        if self.depth == 1 and tag == "div":
            self.in_container = False
            self.done = True
            return
        self.parts.append(f"</{tag}>")
        if tag not in VOID_TAGS:
            self.depth -= 1

    def handle_data(self, data: str) -> None:
        if self.in_container and not self.done:
            self.parts.append(data)

    def handle_entityref(self, name: str) -> None:
        if self.in_container and not self.done:
            self.parts.append(f"&{name};")

    def handle_charref(self, name: str) -> None:
        if self.in_container and not self.done:
            self.parts.append(f"&#{name};")

    def html(self) -> str:
        return "".join(self.parts)


@dataclass
class TopLevelElement:
    tag: str
    attrs: list[tuple[str, str | None]]
    html: str


class TopLevelCollector(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=False)
        self.depth = 0
        self.current: list[str] | None = None
        self.current_tag = ""
        self.current_attrs: list[tuple[str, str | None]] = []
        self.elements: list[TopLevelElement] = []

    def _append(self, value: str) -> None:
        if self.current is not None:
            self.current.append(value)

    def _finish(self) -> None:
        if self.current is not None:
            self.elements.append(TopLevelElement(self.current_tag, self.current_attrs, "".join(self.current)))
        self.current = None
        self.current_tag = ""
        self.current_attrs = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if self.depth == 0:
            self.current = []
            self.current_tag = tag
            self.current_attrs = attrs
        self._append(render_start_tag(tag, attrs))
        if tag not in VOID_TAGS:
            self.depth += 1
        elif self.depth == 0:
            self._finish()

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if self.depth == 0:
            self.current = []
            self.current_tag = tag
            self.current_attrs = attrs
        self._append(render_start_tag(tag, attrs))
        if self.depth == 0:
            self._finish()

    def handle_endtag(self, tag: str) -> None:
        if self.depth == 0:
            return
        self._append(f"</{tag}>")
        if tag not in VOID_TAGS:
            self.depth -= 1
        if self.depth == 0:
            self._finish()

    def handle_data(self, data: str) -> None:
        if self.current is not None:
            self.current.append(data)

    def handle_entityref(self, name: str) -> None:
        self._append(f"&{name};")

    def handle_charref(self, name: str) -> None:
        self._append(f"&#{name};")


class Sanitizer(HTMLParser):
    def __init__(self, base_url: str, asset_rewriter: Callable[[str], str]) -> None:
        super().__init__(convert_charrefs=False)
        self.base_url = base_url
        self.asset_rewriter = asset_rewriter
        self.skip_depth = 0
        self.parts: list[str] = []

    def _is_blocked(self, tag: str, attrs: list[tuple[str, str | None]]) -> bool:
        if tag in BLOCKED_TAGS:
            return True
        classes = attr_value(attrs, "class").lower()
        element_id = attr_value(attrs, "id").lower()
        return element_id in BLOCKED_IDS or any(part in classes for part in BLOCKED_CLASS_PARTS)

    def _clean_attrs(self, tag: str, attrs: list[tuple[str, str | None]]) -> list[tuple[str, str | None]]:
        cleaned: list[tuple[str, str | None]] = []
        lazy_src = attr_value(attrs, "data-src")
        has_src = False
        for name, value in attrs:
            lower_name = name.lower()
            if (
                lower_name.startswith("on")
                or lower_name.startswith("data-")
                or lower_name in {"style", "target", "rel"}
            ):
                continue
            if lower_name == "href":
                continue
            if tag == "img" and lower_name == "src" and value:
                source_url = lazy_src or value
                rewritten = self.asset_rewriter(urljoin(self.base_url, source_url))
                if rewritten:
                    cleaned.append((name, rewritten))
                    has_src = True
                continue
            if tag == "img" and lower_name == "srcset" and value:
                if lazy_src:
                    continue
                rewritten_parts = []
                for candidate in value.split(","):
                    candidate = candidate.strip()
                    if not candidate:
                        continue
                    url_part, *descriptor = candidate.split(None, 1)
                    local_url = self.asset_rewriter(urljoin(self.base_url, url_part))
                    if local_url:
                        rewritten_parts.append(" ".join([local_url, *descriptor]).strip())
                if rewritten_parts:
                    cleaned.append((name, ", ".join(rewritten_parts)))
                continue
            cleaned.append((name, value))
        if tag == "img" and lazy_src and not has_src:
            rewritten = self.asset_rewriter(urljoin(self.base_url, lazy_src))
            if rewritten:
                cleaned.append(("src", rewritten))
        return cleaned

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if self.skip_depth:
            if tag not in VOID_TAGS:
                self.skip_depth += 1
            return
        if self._is_blocked(tag, attrs):
            if tag not in VOID_TAGS:
                self.skip_depth = 1
            return
        if tag == "a":
            tag = "span"
        cleaned_attrs = self._clean_attrs(tag, attrs)
        if tag == "img" and not attr_value(cleaned_attrs, "src"):
            return
        self.parts.append(render_start_tag(tag, cleaned_attrs))

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if self.skip_depth or self._is_blocked(tag, attrs):
            return
        if tag == "a":
            tag = "span"
        cleaned_attrs = self._clean_attrs(tag, attrs)
        if tag == "img" and not attr_value(cleaned_attrs, "src"):
            return
        self.parts.append(render_start_tag(tag, cleaned_attrs))

    def handle_endtag(self, tag: str) -> None:
        if self.skip_depth:
            if tag not in VOID_TAGS:
                self.skip_depth -= 1
            return
        if tag == "a":
            tag = "span"
        if tag not in VOID_TAGS:
            self.parts.append(f"</{tag}>")

    def handle_data(self, data: str) -> None:
        if not self.skip_depth:
            self.parts.append(data)

    def handle_entityref(self, name: str) -> None:
        if not self.skip_depth:
            self.parts.append(f"&{name};")

    def handle_charref(self, name: str) -> None:
        if not self.skip_depth:
            self.parts.append(f"&#{name};")

    def html(self) -> str:
        return "".join(self.parts)


def extract_dinosaur_pictures_subset(page_html: str) -> str:
    direct_subset = extract_from_main_title_to_images(page_html)
    if direct_subset:
        return direct_subset

    container_extractor = ContainerInnerExtractor()
    container_extractor.feed(page_html)
    container_html = container_extractor.html()
    if not container_html:
        raise ValueError("div.container not found")

    collector = TopLevelCollector()
    collector.feed(container_html)

    main_index = next(
        (
            index
            for index, element in enumerate(collector.elements)
            if element.tag == "h1" and has_class(element.attrs, "main-title")
        ),
        None,
    )
    if main_index is None:
        raise ValueError("h1.main-title not found inside div.container")

    selected = collector.elements[main_index:]
    output: list[str] = []
    for element in selected:
        output.append(element.html)
        if attr_value(element.attrs, "id") == "images":
            break

    return f'<div class="container">{"".join(output)}</div>'


def find_matching_element_end(html: str, start_index: int, tag_name: str) -> int | None:
    tag_pattern = re.compile(rf"<\s*(/?)\s*{re.escape(tag_name)}\b[^>]*>", re.IGNORECASE)
    depth = 0
    for match in tag_pattern.finditer(html, start_index):
        is_end_tag = bool(match.group(1))
        is_self_closing = match.group(0).rstrip().endswith("/>")
        if is_end_tag:
            depth -= 1
            if depth == 0:
                return match.end()
        elif not is_self_closing:
            depth += 1
    return None


def extract_from_main_title_to_images(page_html: str) -> str:
    title_match = re.search(
        r"<h1\b(?=[^>]*\bclass=(['\"])[^'\"]*\bmain-title\b[^'\"]*\1)[^>]*>",
        page_html,
        re.IGNORECASE,
    )
    if not title_match:
        return ""

    title_end = page_html.find("</h1>", title_match.end())
    if title_end == -1:
        return ""

    images_match = re.search(
        r"<div\b(?=[^>]*\bid=(['\"])images\1)[^>]*>",
        page_html[title_end:],
        re.IGNORECASE,
    )
    if not images_match:
        return ""

    images_start = title_end + images_match.start()
    images_end = find_matching_element_end(page_html, images_start, "div")
    if images_end is None:
        return ""

    return f'<div class="container">{page_html[title_match.start():images_end]}</div>'


def download_dinosaur_picture_asset(url: str, dino: Dino, force: bool) -> str:
    target_dir = DINO_PICTURES_IMAGE_DIR / dino.id
    filename = safe_file_name_from_url(url, "image.jpg")
    target = target_dir / filename
    try:
        download_binary(url, target, force)
    except (HTTPError, URLError, TimeoutError, OSError, ValueError) as exc:
        print(f"  ! Kon afbeelding niet downloaden: {url} ({exc})")
        return ""
    return target.relative_to(ROOT).as_posix()


def clean_and_localize_dinosaur_pictures(html: str, dino: Dino, force: bool) -> str:
    sanitizer = Sanitizer(
        dino.dinosaur_pictures_url,
        lambda url: download_dinosaur_picture_asset(url, dino, force),
    )
    sanitizer.feed(html)
    cleaned = sanitizer.html()
    cleaned = re.sub(
        r"<div>\s*<ul>.*?(?:Random dinosaur|All dinosaurs|ancient earth globe).*?</ul>\s*</div>",
        "",
        cleaned,
        flags=re.IGNORECASE | re.DOTALL,
    )
    return cleaned


def download_core_images(force: bool) -> None:
    CARD_DIR.mkdir(parents=True, exist_ok=True)
    HERO_DIR.mkdir(parents=True, exist_ok=True)

    for dino in DINOS:
        card_target = CARD_DIR / f"{dino.id}.png"
        try:
            changed = download_binary(jwa_card_url(dino.id), card_target, force)
            print(f"{'Gedownload' if changed else 'Bestaat al'}: {card_target.relative_to(ROOT)}")
        except (HTTPError, URLError, TimeoutError, OSError) as exc:
            print(f"! Kaartafbeelding mislukt voor {dino.name}: {exc}")

        hero_target = HERO_DIR / f"{dino.id}.png"
        if hero_target.exists() and not force:
            print(f"Bestaat al: {hero_target.relative_to(ROOT)}")
            continue
        for url in hero_urls(dino.id):
            try:
                download_binary(url, hero_target, True)
                print(f"Gedownload: {hero_target.relative_to(ROOT)}")
                break
            except (HTTPError, URLError, TimeoutError, OSError):
                continue
        else:
            print(f"! Geen hero-afbeelding gevonden voor {dino.name}")


def extract_globe_iframe_src(page_html: str, base_url: str) -> str:
    match = re.search(
        r'<div\b[^>]*\bclass=["\'][^"\']*\bglobe-container\b[^"\']*["\'][^>]*>(.*?)</div>',
        page_html,
        re.IGNORECASE | re.DOTALL,
    )
    if not match:
        return ""
    iframe_match = re.search(
        r'<iframe\b[^>]*\bsrc=["\']([^"\']+)["\']',
        match.group(1),
        re.IGNORECASE,
    )
    if not iframe_match:
        return ""
    return urljoin(base_url, iframe_match.group(1))


def count_cached_images(dino: Dino) -> int:
    target_dir = DINO_PICTURES_IMAGE_DIR / dino.id
    if not target_dir.exists():
        return 0
    return sum(1 for f in target_dir.iterdir() if f.is_file())


def fetch_wikimedia_image_urls(dino_name: str, needed: int) -> list[str]:
    """Return up to `needed` direct image URLs from Commons Category:{dino_name}."""
    params = urlencode({
        "action": "query",
        "list": "categorymembers",
        "cmtitle": f"Category:{dino_name}",
        "cmtype": "file",
        "cmlimit": min(needed * 2, 50),
        "format": "json",
    })
    try:
        body, _ = request_bytes(f"{WIKIMEDIA_API}?{params}")
        data = json.loads(body)
    except (HTTPError, URLError, TimeoutError, OSError, ValueError) as exc:
        print(f"  ! Wikimedia categorie ophalen mislukt voor {dino_name}: {exc}")
        return []

    members = data.get("query", {}).get("categorymembers", [])
    if not members:
        return []

    titles = "|".join(m["title"] for m in members[:needed])
    params2 = urlencode({
        "action": "query",
        "titles": titles,
        "prop": "imageinfo",
        "iiprop": "url|mime",
        "format": "json",
    })
    try:
        body2, _ = request_bytes(f"{WIKIMEDIA_API}?{params2}")
        data2 = json.loads(body2)
    except (HTTPError, URLError, TimeoutError, OSError, ValueError) as exc:
        print(f"  ! Wikimedia afbeeldingsinfo mislukt voor {dino_name}: {exc}")
        return []

    urls: list[str] = []
    for page in data2.get("query", {}).get("pages", {}).values():
        for info in page.get("imageinfo", []):
            mime = info.get("mime", "")
            if mime.startswith("image/") and "svg" not in mime:
                urls.append(info["url"])
    return urls


def supplement_from_wikimedia(dino: Dino, force: bool) -> None:
    existing = count_cached_images(dino)
    if existing >= MIN_IMAGES_BEFORE_WIKIMEDIA:
        return
    needed = MIN_IMAGES_BEFORE_WIKIMEDIA - existing
    print(f"  Wikimedia: {existing} afbeeldingen, {needed} meer ophalen voor {dino.name}")
    urls = fetch_wikimedia_image_urls(dino.name, needed)
    downloaded = 0
    for url in urls:
        path = download_dinosaur_picture_asset(url, dino, force)
        if path:
            downloaded += 1
        if downloaded >= needed:
            break
    print(f"  Wikimedia: {downloaded} afbeeldingen toegevoegd voor {dino.name}")


def download_dinosaur_pictures_cache(force: bool, skip_wikimedia: bool = False) -> None:
    records: dict[str, dict[str, str]] = {}
    DINO_PICTURES_IMAGE_DIR.mkdir(parents=True, exist_ok=True)

    for dino in DINOS:
        print(f"DinosaurPictures ophalen: {dino.name}")
        try:
            page_html = request_text(dino.dinosaur_pictures_url)
            subset = extract_dinosaur_pictures_subset(page_html)
            cleaned = clean_and_localize_dinosaur_pictures(subset, dino, force)
            globe_url = extract_globe_iframe_src(page_html, dino.dinosaur_pictures_url)
            records[dino.id] = {
                "title": dino.name,
                "sourceUrl": dino.dinosaur_pictures_url,
                "html": cleaned,
                "globeUrl": globe_url,
            }
        except (HTTPError, URLError, TimeoutError, OSError, ValueError) as exc:
            print(f"  ! Cache mislukt voor {dino.name}: {exc}")
            records[dino.id] = {
                "title": dino.name,
                "sourceUrl": dino.dinosaur_pictures_url,
                "html": "",
                "globeUrl": "",
                "error": str(exc),
            }
        if not skip_wikimedia:
            supplement_from_wikimedia(dino, force)
        time.sleep(0.25)

    DATA_DIR.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(records, ensure_ascii=False, indent=2)
    DINO_PICTURES_JS.write_text(
        "(function () {\n"
        f"    window.DINOSAUR_PICTURES_DB = {payload};\n"
        "})();\n",
        encoding="utf-8",
    )
    print(f"Geschreven: {DINO_PICTURES_JS.relative_to(ROOT)}")


def main() -> int:
    parser = argparse.ArgumentParser(description="Download lokale dino content voor de typegame.")
    parser.add_argument("--force", action="store_true", help="Download bestaande bestanden opnieuw.")
    parser.add_argument("--skip-pictures", action="store_true", help="Sla DinosaurPictures.org cache over.")
    parser.add_argument("--skip-images", action="store_true", help="Sla Paleo.GG kaart- en hero-afbeeldingen over.")
    parser.add_argument("--skip-wikimedia", action="store_true", help="Sla Wikimedia Commons aanvulling over.")
    args = parser.parse_args()

    if not args.skip_images:
        download_core_images(args.force)
    if not args.skip_pictures:
        download_dinosaur_pictures_cache(args.force, skip_wikimedia=args.skip_wikimedia)

    return 0


if __name__ == "__main__":
    sys.exit(main())
