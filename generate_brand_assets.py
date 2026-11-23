import os
import math
from PIL import Image, ImageDraw, ImageFont

# Define Brand Colors from User Reference Image
# Light Canvas:
COLOR_LIGHT_BG = "#FFFFFF"
COLOR_LIGHT_TL = "#6345EC"  # Q2 (TL) Vibrant Iris
COLOR_LIGHT_TR = "#514DEB"  # Q1 (TR) Electric Indigo
COLOR_LIGHT_BL = "#514DEB"  # Q3 (BL) Electric Indigo
COLOR_LIGHT_BR = "#325CEB"  # Q4 (BR) Deep Royal Blue
COLOR_LIGHT_QUAD = "#514DEB" # "QUAD"
COLOR_LIGHT_WISE = "#0D0A2E" # "WISE"
COLOR_LIGHT_SUB = "#0D0A2E"  # "TECHNOLOGIES"
COLOR_LIGHT_TAG = "#475569"  # "Innovating with integrity"
COLOR_LIGHT_DIV = "#CBD5E1"  # Divider line

# Dark Canvas:
COLOR_DARK_BG = "#0D0A2E"   # Deep Midnight Navy Canvas
COLOR_DARK_TL = "#9390F9"   # Q2 (TL) Lavender Iris
COLOR_DARK_TR = "#8397F9"   # Q1 (TR) Soft Periwinkle
COLOR_DARK_BL = "#8396F9"   # Q3 (BL) Soft Periwinkle
COLOR_DARK_BR = "#6AA0FA"   # Q4 (BR) Sky Periwinkle
COLOR_DARK_QUAD = "#8A95FA" # "QUAD"
COLOR_DARK_WISE = "#FFFFFF" # "WISE"
COLOR_DARK_SUB = "#FFFFFF"  # "TECHNOLOGIES"
COLOR_DARK_TAG = "#94A3B8"  # "Innovating with integrity"
COLOR_DARK_DIV = "rgba(255,255,255,0.25)"

ASSETS_DIR = r"C:\Users\aliak\.gemini\antigravity\scratch\qwt-enterprise\assets"
os.makedirs(ASSETS_DIR, exist_ok=True)

# 1. Generate SVGs
emblem_light_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%" fill="none">
  <!-- Top-Left (Q2) -->
  <path d="M 48,48 L 6,48 A 42,42 0 0,1 48,6 Z" fill="{COLOR_LIGHT_TL}"/>
  <!-- Top-Right (Q1) -->
  <path d="M 52,48 L 52,6 A 42,42 0 0,1 94,48 Z" fill="{COLOR_LIGHT_TR}"/>
  <!-- Bottom-Left (Q3) -->
  <path d="M 48,52 L 48,94 A 42,42 0 0,1 6,52 Z" fill="{COLOR_LIGHT_BL}"/>
  <!-- Bottom-Right (Q4) Stylized Q tail -->
  <path d="M 94,52 L 94,94 L 52,94 A 42,42 0 0,0 94,52 Z" fill="{COLOR_LIGHT_BR}"/>
</svg>'''

emblem_dark_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%" fill="none">
  <!-- Top-Left (Q2) -->
  <path d="M 48,48 L 6,48 A 42,42 0 0,1 48,6 Z" fill="{COLOR_DARK_TL}"/>
  <!-- Top-Right (Q1) -->
  <path d="M 52,48 L 52,6 A 42,42 0 0,1 94,48 Z" fill="{COLOR_DARK_TR}"/>
  <!-- Bottom-Left (Q3) -->
  <path d="M 48,52 L 48,94 A 42,42 0 0,1 6,52 Z" fill="{COLOR_DARK_BL}"/>
  <!-- Bottom-Right (Q4) Stylized Q tail -->
  <path d="M 94,52 L 94,94 L 52,94 A 42,42 0 0,0 94,52 Z" fill="{COLOR_DARK_BR}"/>
</svg>'''

favicon_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%" fill="none">
  <rect width="100" height="100" rx="22" fill="#0D0A2E"/>
  <g transform="translate(10, 10) scale(0.8)">
    <path d="M 48,48 L 6,48 A 42,42 0 0,1 48,6 Z" fill="{COLOR_DARK_TL}"/>
    <path d="M 52,48 L 52,6 A 42,42 0 0,1 94,48 Z" fill="{COLOR_DARK_TR}"/>
    <path d="M 48,52 L 48,94 A 42,42 0 0,1 6,52 Z" fill="{COLOR_DARK_BL}"/>
    <path d="M 94,52 L 94,94 L 52,94 A 42,42 0 0,0 94,52 Z" fill="{COLOR_DARK_BR}"/>
  </g>
</svg>'''

# Full Horizontal Lockup (Light Canvas)
logo_light_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 120" width="520" height="120" fill="none">
  <!-- Emblem at left (x: 10, y: 15, size: 90x90) -->
  <g transform="translate(10, 15) scale(0.9)">
    <path d="M 48,48 L 6,48 A 42,42 0 0,1 48,6 Z" fill="{COLOR_LIGHT_TL}"/>
    <path d="M 52,48 L 52,6 A 42,42 0 0,1 94,48 Z" fill="{COLOR_LIGHT_TR}"/>
    <path d="M 48,52 L 48,94 A 42,42 0 0,1 6,52 Z" fill="{COLOR_LIGHT_BL}"/>
    <path d="M 94,52 L 94,94 L 52,94 A 42,42 0 0,0 94,52 Z" fill="{COLOR_LIGHT_BR}"/>
  </g>
  
  <!-- Brand Text -->
  <text x="120" y="66" font-family="'Plus Jakarta Sans', 'Outfit', sans-serif" font-size="44" font-weight="800" letter-spacing="-0.02em">
    <tspan fill="{COLOR_LIGHT_QUAD}">QUAD</tspan><tspan fill="{COLOR_LIGHT_WISE}">WISE</tspan>
  </text>
  
  <!-- Subtitle TECHNOLOGIES -->
  <text x="122" y="92" font-family="'Plus Jakarta Sans', 'Outfit', sans-serif" font-size="13.5" font-weight="700" fill="{COLOR_LIGHT_SUB}" letter-spacing="0.32em">TECHNOLOGIES</text>
  
  <!-- Vertical Hairline Divider -->
  <line x1="375" y1="36" x2="375" y2="92" stroke="{COLOR_LIGHT_DIV}" stroke-width="1.5"/>
  
  <!-- Tagline: Innovating with integrity -->
  <text x="395" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="600" fill="{COLOR_LIGHT_WISE}">Innovating</text>
  <text x="395" y="78" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="500" fill="{COLOR_LIGHT_TAG}">with integrity</text>
</svg>'''

# Full Horizontal Lockup (Dark Canvas)
logo_dark_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 120" width="520" height="120" fill="none">
  <!-- Emblem at left -->
  <g transform="translate(10, 15) scale(0.9)">
    <path d="M 48,48 L 6,48 A 42,42 0 0,1 48,6 Z" fill="{COLOR_DARK_TL}"/>
    <path d="M 52,48 L 52,6 A 42,42 0 0,1 94,48 Z" fill="{COLOR_DARK_TR}"/>
    <path d="M 48,52 L 48,94 A 42,42 0 0,1 6,52 Z" fill="{COLOR_DARK_BL}"/>
    <path d="M 94,52 L 94,94 L 52,94 A 42,42 0 0,0 94,52 Z" fill="{COLOR_DARK_BR}"/>
  </g>
  
  <!-- Brand Text -->
  <text x="120" y="66" font-family="'Plus Jakarta Sans', 'Outfit', sans-serif" font-size="44" font-weight="800" letter-spacing="-0.02em">
    <tspan fill="{COLOR_DARK_QUAD}">QUAD</tspan><tspan fill="{COLOR_DARK_WISE}">WISE</tspan>
  </text>
  
  <!-- Subtitle TECHNOLOGIES -->
  <text x="122" y="92" font-family="'Plus Jakarta Sans', 'Outfit', sans-serif" font-size="13.5" font-weight="700" fill="{COLOR_DARK_SUB}" letter-spacing="0.32em">TECHNOLOGIES</text>
  
  <!-- Vertical Hairline Divider -->
  <line x1="375" y1="36" x2="375" y2="92" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
  
  <!-- Tagline: Innovating with integrity -->
  <text x="395" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="600" fill="#FFFFFF">Innovating</text>
  <text x="395" y="78" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="500" fill="{COLOR_DARK_TAG}">with integrity</text>
</svg>'''

with open(os.path.join(ASSETS_DIR, "qwt-emblem.svg"), "w", encoding="utf-8") as f:
    f.write(emblem_light_svg)

with open(os.path.join(ASSETS_DIR, "qwt-emblem-dark.svg"), "w", encoding="utf-8") as f:
    f.write(emblem_dark_svg)

with open(os.path.join(ASSETS_DIR, "favicon.svg"), "w", encoding="utf-8") as f:
    f.write(favicon_svg)

with open(os.path.join(ASSETS_DIR, "qwt-logo.svg"), "w", encoding="utf-8") as f:
    f.write(logo_light_svg)

with open(os.path.join(ASSETS_DIR, "qwt-logo-dark.svg"), "w", encoding="utf-8") as f:
    f.write(logo_dark_svg)

print("SVG files generated successfully!")

# 2. High-resolution raster PNG generator using PIL
def render_emblem_pil(size=400, dark=False, bg=None):
    im = Image.new("RGBA", (size, size), bg or (0, 0, 0, 0))
    scale = size / 100.0
    c_tl = (0x93, 0x90, 0xF9, 255) if dark else (0x63, 0x45, 0xEC, 255)
    c_tr = (0x83, 0x97, 0xF9, 255) if dark else (0x51, 0x4D, 0xEB, 255)
    c_bl = (0x83, 0x96, 0xF9, 255) if dark else (0x51, 0x4D, 0xEB, 255)
    c_br = (0x6A, 0xA0, 0xFA, 255) if dark else (0x32, 0x5C, 0xEB, 255)
    
    # Render with anti-aliasing (supersampling 4x)
    super_size = size * 4
    super_im = Image.new("RGBA", (super_size, super_size), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(super_im)
    s_scale = super_size / 100.0

    # Centers & Coordinates
    # Q2 (TL): arc from 180 to 270 deg
    s_draw.pieslice([6 * s_scale, 6 * s_scale, 90 * s_scale, 90 * s_scale], 180, 270, fill=c_tl)
    # Q1 (TR): arc from 270 to 360 deg
    s_draw.pieslice([10 * s_scale, 6 * s_scale, 94 * s_scale, 90 * s_scale], 270, 360, fill=c_tr)
    # Q3 (BL): arc from 90 to 180 deg
    s_draw.pieslice([6 * s_scale, 10 * s_scale, 90 * s_scale, 94 * s_scale], 90, 180, fill=c_bl)

    # Q4 (BR): Q tail petal
    cx = int(52 * s_scale)
    x_max = int(94 * s_scale)
    cy = int(52 * s_scale)
    y_max = int(94 * s_scale)
    r_target = 42 * s_scale

    for y in range(cy, y_max + 1):
        for x in range(cx, x_max + 1):
            if math.hypot(x - cx, y - cy) >= r_target:
                super_im.putpixel((x, y), c_br)

    # Downsample
    emblem_final = super_im.resize((size, size), Image.Resampling.LANCZOS)
    if bg:
        canvas = Image.new("RGBA", (size, size), bg)
        canvas.alpha_composite(emblem_final)
        return canvas
    return emblem_final

# Render icons
emblem_icon_512 = render_emblem_pil(size=512, dark=True, bg=(13, 10, 46, 255))
emblem_icon_512.save(os.path.join(ASSETS_DIR, "apple-touch-icon.png"), "PNG")

emblem_icon_64 = render_emblem_pil(size=64, dark=True, bg=(13, 10, 46, 255))
emblem_icon_64.save(os.path.join(ASSETS_DIR, "favicon-64x64.png"), "PNG")

emblem_icon_32 = render_emblem_pil(size=32, dark=True, bg=(13, 10, 46, 255))
emblem_icon_32.save(os.path.join(ASSETS_DIR, "favicon-32x32.png"), "PNG")
emblem_icon_32.save(os.path.join(ASSETS_DIR, "favicon.png"), "PNG")

emblem_icon_16 = render_emblem_pil(size=16, dark=True, bg=(13, 10, 46, 255))
emblem_icon_16.save(os.path.join(ASSETS_DIR, "favicon-16x16.png"), "PNG")

# Also copy to root directory
emblem_icon_32.save(r"C:\Users\aliak\.gemini\antigravity\scratch\qwt-enterprise\favicon.ico", "ICO")
emblem_icon_32.save(r"C:\Users\aliak\.gemini\antigravity\scratch\qwt-enterprise\favicon.png", "PNG")

# Render Master Horizontal Logo PNGs
def render_full_logo(dark=False):
    bg_color = (13, 10, 46, 255) if dark else (255, 255, 255, 0)
    w, h = 600, 140
    im = Image.new("RGBA", (w, h), bg_color)
    emblem = render_emblem_pil(size=96, dark=dark)
    im.alpha_composite(emblem, (16, 22))
    
    draw = ImageDraw.Draw(im)
    try:
        font_quad = ImageFont.truetype("arialbd.ttf", 46)
        font_sub = ImageFont.truetype("arialbd.ttf", 14)
        font_tag_bold = ImageFont.truetype("arialbd.ttf", 16)
        font_tag_reg = ImageFont.truetype("arial.ttf", 16)
    except:
        font_quad = ImageFont.load_default()
        font_sub = font_quad
        font_tag_bold = font_quad
        font_tag_reg = font_quad

    c_quad = (0x8A, 0x95, 0xFA, 255) if dark else (0x51, 0x4D, 0xEB, 255)
    c_wise = (0xFF, 0xFF, 0xFF, 255) if dark else (0x0D, 0x0A, 0x2E, 255)
    c_sub = (0xFF, 0xFF, 0xFF, 255) if dark else (0x0D, 0x0A, 0x2E, 255)
    c_div = (255, 255, 255, 60) if dark else (203, 213, 225, 255)
    c_tag_bold = (0xFF, 0xFF, 0xFF, 255) if dark else (0x0D, 0x0A, 0x2E, 255)
    c_tag_reg = (0x94, 0xA3, 0xB8, 255) if dark else (0x47, 0x55, 0x69, 255)

    # QUAD
    draw.text((128, 30), "QUAD", font=font_quad, fill=c_quad)
    # WISE
    draw.text((264, 30), "WISE", font=font_quad, fill=c_wise)
    # TECHNOLOGIES
    draw.text((130, 84), "T E C H N O L O G I E S", font=font_sub, fill=c_sub)
    # Divider
    draw.line([(410, 36), (410, 100)], fill=c_div, width=2)
    # Tagline
    draw.text((430, 44), "Innovating", font=font_tag_bold, fill=c_tag_bold)
    draw.text((430, 70), "with integrity", font=font_tag_reg, fill=c_tag_reg)

    return im

logo_dark_png = render_full_logo(dark=True)
logo_dark_png.save(os.path.join(ASSETS_DIR, "qwt-logo-dark.png"), "PNG")

logo_light_png = render_full_logo(dark=False)
logo_light_png.save(os.path.join(ASSETS_DIR, "qwt-logo.png"), "PNG")
logo_light_png.save(r"C:\Users\aliak\.gemini\antigravity\scratch\qwt-enterprise\qwt-logo.png", "PNG")

print("All raster brand PNGs generated successfully!")
