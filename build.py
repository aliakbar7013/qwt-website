import os
import shutil
import zipfile
import hashlib

ROOT_DIR = r"C:\Users\aliak\.gemini\antigravity\scratch\qwt-enterprise"
DIST_DIR = os.path.join(ROOT_DIR, "dist")
ZIP_PATH = os.path.join(ROOT_DIR, "qwt-enterprise-production.zip")

print("=" * 70)
print("QUAD WISE TECHNOLOGIES (QWT.AE) - ENTERPRISE PRODUCTION BUILD ENGINE")
print("=" * 70)

# 1. Clean dist directory
if os.path.exists(DIST_DIR):
    shutil.rmtree(DIST_DIR)
os.makedirs(DIST_DIR, exist_ok=True)

# 2. Files and directories to include in production build
include_dirs = ["assets", "css", "js"]
include_files = [
    "index.html",
    "it-infrastructure.html",
    "cybersecurity.html",
    "digital-transformation.html",
    "solutions.html",
    "hardware.html",
    "case-studies.html",
    "insights.html",
    "about.html",
    "contact.html",
    "admin-crm.html",
    "admin-rfp-detail.html",
    "404.html",
    "robots.txt",
    "sitemap.xml",
    "favicon.ico",
    "favicon.png",
    "qwt-logo.png",
    "_redirects",
    "netlify.toml",
    "vercel.json",
    "firebase.json",
    ".htaccess",
    "README-DEPLOYMENT.md",
    "README.md"
]

# Copy directories
for d in include_dirs:
    src_path = os.path.join(ROOT_DIR, d)
    dst_path = os.path.join(DIST_DIR, d)
    if os.path.exists(src_path):
        shutil.copytree(src_path, dst_path)
        print(f" [DIR]  {d}/ copied successfully.")

# Copy root files
copied_files = 0
for f in include_files:
    src_path = os.path.join(ROOT_DIR, f)
    dst_path = os.path.join(DIST_DIR, f)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dst_path)
        copied_files += 1
        print(f" [FILE] {f} copied successfully.")
    else:
        print(f" [WARN] Optional file {f} not found.")

print(f"\nDist staging complete: {copied_files} files and {len(include_dirs)} directories.")

# 3. Build standalone deployment ZIP
print(f"\nPackaging production deployment archive...")
total_uncompressed = 0
file_count = 0

with zipfile.ZipFile(ZIP_PATH, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as zipf:
    for root, dirs, files in os.walk(DIST_DIR):
        for file in files:
            full_path = os.path.join(root, file)
            arcname = os.path.relpath(full_path, DIST_DIR)
            zipf.write(full_path, arcname)
            file_size = os.path.getsize(full_path)
            total_uncompressed += file_size
            file_count += 1

zip_size = os.path.getsize(ZIP_PATH)

# Calculate SHA-256 checksum
sha256 = hashlib.sha256()
with open(ZIP_PATH, 'rb') as f:
    while chunk := f.read(8192):
        sha256.update(chunk)
zip_hash = sha256.hexdigest()

print("=" * 70)
print(f"BUILD COMPLETE: SUCCESS")
print(f"Output Directory:    {DIST_DIR}")
print(f"Archive Path:        {ZIP_PATH}")
print(f"Total Files:         {file_count}")
print(f"Uncompressed Size:   {total_uncompressed / (1024 * 1024):.2f} MB ({total_uncompressed} bytes)")
print(f"Compressed ZIP Size: {zip_size / 1024:.2f} KB ({zip_size} bytes)")
print(f"SHA-256 Checksum:    {zip_hash}")
print("=" * 70)
