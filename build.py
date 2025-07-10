import markdown
from pathlib import Path

markdown_file = Path("notes.md")
html_file = Path("index.html")
template_file = Path("template.html")
title = "My Notes"

md_text = markdown_file.read_text(encoding="utf-8")
html_content = markdown.markdown(md_text, extensions=["fenced_code", "codehilite", "tables", "toc"])

template = template_file.read_text(encoding="utf-8")
full_html = template.replace("{{ title }}", title).replace("{{ content }}", html_content)

html_file.write_text(full_html, encoding="utf-8")
print(f"Note built! {html_file.resolve()}")
