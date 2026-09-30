import os
import subprocess

svg_path = os.path.abspath("tarsier.svg")
svg_content = open(svg_path, encoding="utf-8").read()

html_content = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * {{ margin: 0; padding: 0; box-sizing: border-box; }}
  html, body {{ width: 100%; height: 100%; overflow: hidden; background: #0F172A; display: flex; align-items: center; justify-content: center; }}
  svg {{ width: 85%; height: 85%; }}
</style>
</head>
<body>
{svg_content}
</body>
</html>"""

with open("icon_preview.html", "w", encoding="utf-8") as f:
    f.write(html_content)

edge_exe = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
preview_uri = "file:///" + os.path.abspath("icon_preview.html").replace("\\", "/")

sizes = {
    "mipmap-mdpi": 48,
    "mipmap-hdpi": 72,
    "mipmap-xhdpi": 96,
    "mipmap-xxhdpi": 144,
    "mipmap-xxxhdpi": 192,
}

for folder, size in sizes.items():
    out_dir = os.path.join("pointer_app", "app", "src", "main", "res", folder)
    os.makedirs(out_dir, exist_ok=True)
    out_png = os.path.join(out_dir, "ic_launcher.png")
    out_round_png = os.path.join(out_dir, "ic_launcher_round.png")
    
    cmd = [
        edge_exe,
        "--headless",
        "--disable-gpu",
        f"--window-size={size},{size}",
        f"--screenshot={out_png}",
        preview_uri
    ]
    subprocess.run(cmd, check=True)
    # copy for round icon too
    with open(out_png, "rb") as src, open(out_round_png, "wb") as dst:
        dst.write(src.read())

    # Also remove webp if exists so png is used or convert
    for fname in ["ic_launcher.webp", "ic_launcher_round.webp"]:
        webp_path = os.path.join(out_dir, fname)
        if os.path.exists(webp_path):
            os.remove(webp_path)
            
    print(f"Generated {size}x{size} in {folder}")

print("All icons successfully generated!")
