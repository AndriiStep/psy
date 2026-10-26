"""Generate shareable pages for the tests from index.html.

Run after every change to index.html:  python3 build.py

  /tests/         — the site, scrolled to the tests section
  /tests/<id>/    — the site with that test already open, with its own title and link preview

Each page is a copy of index.html with its own <title>, description and Open Graph tags,
so a link shared in Telegram or Instagram shows the test's name.
"""
import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SITE = "https://www.andriistefurak.com"

TEST_RE = re.compile(
    r'id: "([a-z0-9]+)", file: "[^"]*", kind: "[^"]*",\s*'
    r'title: "([^"]*)",\s*desc: "([^"]*)"'
)


def page(src, *, title, desc, url, body_attr, depth):
    out = src
    t, d = html.escape(title, quote=True), html.escape(desc, quote=True)
    out = re.sub(r"<title>.*?</title>", f"<title>{t}</title>", out, count=1)
    out = re.sub(r'(<meta name="description" content=")[^"]*', rf"\g<1>{d}", out, count=1)
    out = re.sub(r'(<meta property="og:title" content=")[^"]*', rf"\g<1>{t}", out, count=1)
    out = re.sub(r'(<meta property="og:description" content=")[^"]*', rf"\g<1>{d}", out, count=1)
    out = re.sub(r'(<meta property="og:url" content=")[^"]*', rf"\g<1>{url}", out, count=1)
    out = re.sub(r'(<link rel="canonical" href=")[^"]*', rf"\g<1>{url}", out, count=1)
    out = out.replace('<body class="scanlines">', f'<body class="scanlines" {body_attr}>', 1)
    out = out.replace('src="andrii.jpg"', f'src="{"../" * depth}andrii.jpg"')
    return out


def main():
    src = (ROOT / "index.html").read_text(encoding="utf-8")
    tests = TEST_RE.findall(src)
    assert tests, "no tests found in index.html"

    out_dir = ROOT / "tests"
    for old in out_dir.glob("*/index.html"):
        old.unlink()

    (out_dir).mkdir(exist_ok=True)
    (out_dir / "index.html").write_text(page(
        src,
        title="Психологічні тести онлайн | Андрій Стефурак",
        desc="Безкоштовні валідовані тести: депресія, тривога, самооцінка, благополуччя, задоволеність життям, ПТСР. Результат одразу, відповіді нікуди не надсилаються.",
        url=f"{SITE}/tests/",
        body_attr='data-scroll="tests"',
        depth=1,
    ), encoding="utf-8")

    for test_id, title, desc in tests:
        d = out_dir / test_id
        d.mkdir(exist_ok=True)
        (d / "index.html").write_text(page(
            src,
            title=f"{title} — тест онлайн | Андрій Стефурак",
            desc=desc,
            url=f"{SITE}/tests/{test_id}/",
            body_attr=f'data-open-test="{test_id}"',
            depth=2,
        ), encoding="utf-8")
        print(f"/tests/{test_id}/  {title}")


if __name__ == "__main__":
    main()
