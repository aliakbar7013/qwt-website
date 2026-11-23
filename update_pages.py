import os
import re

DIR = r"C:\Users\aliak\.gemini\antigravity\scratch\qwt-enterprise"

files_to_update = [
    "solutions.html",
    "hardware.html",
    "case-studies.html",
    "insights.html",
    "about.html",
    "contact.html",
    "404.html"
]

header_logo_replacement = '''<a href="index.html" class="flex items-center gap-3.5 group shrink-0 select-none">
        <svg class="w-10 h-10 shrink-0 group-hover:scale-105 transition-transform" viewBox="0 0 100 100" fill="none">
          <path d="M 48,48 L 6,48 A 42,42 0 0,1 48,6 Z" fill="#6345EC"/>
          <path d="M 52,48 L 52,6 A 42,42 0 0,1 94,48 Z" fill="#514DEB"/>
          <path d="M 48,52 L 48,94 A 42,42 0 0,1 6,52 Z" fill="#514DEB"/>
          <path d="M 94,52 L 94,94 L 52,94 A 42,42 0 0,0 94,52 Z" fill="#325CEB"/>
        </svg>
        <div class="flex flex-col">
          <div class="flex items-baseline font-heading font-extrabold text-xl tracking-tight leading-none">
            <span class="brand-wordmark-quad">QUAD</span><span class="brand-wordmark-wise">WISE</span>
          </div>
          <span class="text-[9px] font-mono tracking-[0.32em] brand-wordmark-sub font-bold mt-1">TECHNOLOGIES</span>
          <span class="text-[8px] font-mono tracking-wider brand-tagline-sub block sm:hidden mt-0.5">&ldquo;Innovating with integrity&rdquo;</span>
        </div>
        <div class="hidden sm:flex items-center gap-2.5 pl-3 border-l brand-tagline-divider ml-1.5">
          <div class="text-[11px] font-medium leading-tight">
            <span class="brand-tagline-title block font-semibold">Innovating</span>
            <span class="brand-tagline-sub">with integrity</span>
          </div>
        </div>
      </a>'''

footer_logo_replacement = '''<a href="index.html" class="flex items-center gap-3">
            <svg class="w-9 h-9 shrink-0" viewBox="0 0 100 100" fill="none">
              <path d="M 48,48 L 6,48 A 42,42 0 0,1 48,6 Z" fill="#6345EC"/>
              <path d="M 52,48 L 52,6 A 42,42 0 0,1 94,48 Z" fill="#514DEB"/>
              <path d="M 48,52 L 48,94 A 42,42 0 0,1 6,52 Z" fill="#514DEB"/>
              <path d="M 94,52 L 94,94 L 52,94 A 42,42 0 0,0 94,52 Z" fill="#325CEB"/>
            </svg>
            <div class="flex flex-col">
              <div class="font-heading font-extrabold text-xl tracking-tight leading-none text-white">
                <span class="brand-wordmark-quad">QUAD</span><span class="brand-wordmark-wise">WISE</span>
              </div>
              <span class="text-[9px] font-mono tracking-[0.3em] brand-wordmark-sub font-bold mt-1">TECHNOLOGIES</span>
            </div>
          </a>'''

for fname in files_to_update:
    path = os.path.join(DIR, fname)
    if not os.path.exists(path):
        continue
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Ensure html starts with dark class if not present
    content = re.sub(r'<html([^>]*class="[^"]*)"', lambda m: f'<html{m.group(1)} dark"' if 'dark' not in m.group(1) else m.group(0), content)

    # Replace header logo
    content = re.sub(
        r'<a href="index\.html"[^>]*class="[^"]*shrink-0[^"]*"[^>]*>.*?</a>',
        header_logo_replacement,
        content,
        count=1,
        flags=re.DOTALL
    )

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Updated {fname} with crisp brand classes!")

print("All standard pages synchronized!")
