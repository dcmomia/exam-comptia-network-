import json
import os
import zipfile
import uuid
from datetime import datetime

# Paths
base_dir = r'c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book'
json_path = os.path.join(base_dir, 'temp', 'questions.json')
output_epub = os.path.join(base_dir, 'output', 'CompTIA_Exam_Book_v4.epub')
temp_dir = os.path.join(base_dir, 'temp', 'gen_v4')
style_path = os.path.join(base_dir, 'temp', 'temp_epub', 'OEBPS', 'Styles', 'styles.css')
image_source_dir = os.path.join(base_dir, 'temp', 'temp_epub', 'OEBPS', 'Images')

# Ensure directories exist
os.makedirs(os.path.dirname(output_epub), exist_ok=True)
os.makedirs(temp_dir, exist_ok=True)
os.makedirs(os.path.join(temp_dir, 'META-INF'), exist_ok=True)
os.makedirs(os.path.join(temp_dir, 'OEBPS', 'Text'), exist_ok=True)
os.makedirs(os.path.join(temp_dir, 'OEBPS', 'Styles'), exist_ok=True)
os.makedirs(os.path.join(temp_dir, 'OEBPS', 'Images'), exist_ok=True)

# Load questions
with open(json_path, 'r', encoding='utf-8') as f:
    questions = json.load(f)

# Group questions by chapter
chapters = {}
for q in questions:
    ref = q.get('source_reference', 'Capítulo 0: Miscelánea')
    chapter_name = ref.split('>')[0].strip()
    if chapter_name not in chapters:
        chapters[chapter_name] = []
    chapters[chapter_name].append(q)

# Sort chapters by number if possible
def get_chapter_num(name):
    try:
        return int(name.split(':')[0].replace('Capítulo', '').strip())
    except:
        return 999

sorted_chapter_names = sorted(chapters.keys(), key=get_chapter_num)

# Helper for XHTML boilerplate
def get_xhtml_boilerplate(title, body_content):
    return f"""<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="es">
<head>
  <meta charset="utf-8" />
  <title>{title}</title>
  <link rel="stylesheet" type="text/css" href="../Styles/styles.css" />
</head>
<body>
{body_content}
</body>
</html>"""

# 1. Generate Chapter XHTML files
manifest_items = []
spine_items = []
toc_entries = []

for i, chapter_name in enumerate(sorted_chapter_names):
    filename = f"ch{i+1}.xhtml"
    filepath = os.path.join(temp_dir, 'OEBPS', 'Text', filename)
    
    body = f'<div class="chapter"><h1 class="chapter-title">{chapter_name}</h1>'
    for q in chapters[chapter_name]:
        body += f'<div class="review-question" id="q{q["id"]}">'
        body += f'<p><strong>Pregunta {q["id"]}:</strong> {q["question"]}</p>'
        
        if q.get('has_context_image') and q.get('context_image'):
            img_filename = q['context_image']
            body += f'<figure class="kdp-image-wrapper"><img src="../Images/{img_filename}" class="responsive-img" /></figure>'
        
        body += '<ul class="options">'
        for opt in q['options']:
            body += f'<li>{opt}</li>'
        body += '</ul>'
        
        body += f'<p class="answer">Respuesta: {q["answer"]}</p>'
        body += f'<p class="explanation"><strong>Explicación:</strong> {q["explanation"]}</p>'
        body += f'<p class="source-ref"><em>Referencia: {q["source_reference"]}</em></p>'
        body += '</div><hr/>'
    body += '</div>'
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(get_xhtml_boilerplate(chapter_name, body))
    
    manifest_items.append(f'<item id="ch{i+1}" href="Text/{filename}" media-type="application/xhtml+xml"/>')
    spine_items.append(f'<itemref idref="ch{i+1}"/>')
    toc_entries.append(f'<li><a href="Text/{filename}">{chapter_name}</a></li>')

# 2. Styles
with open(os.path.join(temp_dir, 'OEBPS', 'Styles', 'styles.css'), 'w', encoding='utf-8') as f:
    with open(style_path, 'r', encoding='utf-8') as s:
        f.write(s.read())

# 3. Images (Copy PORTADA and any context images)
import shutil
shutil.copy(os.path.join(image_source_dir, 'PORTADA.jpg'), os.path.join(temp_dir, 'OEBPS', 'Images', 'PORTADA.jpg'))
manifest_items.append('<item id="portada" href="Images/PORTADA.jpg" media-type="image/jpeg" properties="cover-image"/>')

# Check for context images in JSON and copy them
for q in questions:
    if q.get('has_context_image') and q.get('context_image'):
        img_name = q['context_image']
        src_img = os.path.join(image_source_dir, img_name)
        if os.path.exists(src_img):
            shutil.copy(src_img, os.path.join(temp_dir, 'OEBPS', 'Images', img_name))
            mtype = "image/png" if img_name.endswith('.png') else "image/jpeg"
            manifest_items.append(f'<item id="img{q["id"]}" href="Images/{img_name}" media-type="{mtype}"/>')

# 4. Nav
nav_content = f"""<nav epub:type="toc" id="toc">
  <h1>Tabla de Contenidos</h1>
  <ol>
    {''.join(toc_entries)}
  </ol>
</nav>"""
with open(os.path.join(temp_dir, 'OEBPS', 'Text', 'nav.xhtml'), 'w', encoding='utf-8') as f:
    f.write(get_xhtml_boilerplate("Tabla de Contenidos", nav_content))
manifest_items.append('<item id="nav" href="Text/nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>')
spine_items.insert(0, '<itemref idref="nav"/>')

# 5. Content.opf
opf_content = f"""<?xml version="1.0" encoding="utf-8"?>
<package version="3.0" unique-identifier="BookId" xmlns="http://www.idpf.org/2007/opf">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="BookId">urn:uuid:{uuid.uuid4()}</dc:identifier>
    <dc:language>es</dc:language>
    <dc:title>CompTIA Network+ (N10-009) - Banco de Preguntas v4</dc:title>
    <dc:creator>Dion Training / NEXUS-ARCHITECT</dc:creator>
    <meta property="dcterms:modified">{datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')}</meta>
  </metadata>
  <manifest>
    {''.join(manifest_items)}
    <item id="css" href="Styles/styles.css" media-type="text/css"/>
  </manifest>
  <spine>
    {''.join(spine_items)}
  </spine>
</package>"""
with open(os.path.join(temp_dir, 'OEBPS', 'content.opf'), 'w', encoding='utf-8') as f:
    f.write(opf_content)

# 6. mimetype
with open(os.path.join(temp_dir, 'mimetype'), 'w', encoding='ascii') as f:
    f.write('application/epub+zip')

# 7. container.xml
container_xml = """<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>"""
with open(os.path.join(temp_dir, 'META-INF', 'container.xml'), 'w', encoding='utf-8') as f:
    f.write(container_xml)

# 8. ZIP to EPUB
with zipfile.ZipFile(output_epub, 'w', compression=zipfile.ZIP_DEFLATED) as epub:
    # Mimetype must be first and uncompressed
    epub.write(os.path.join(temp_dir, 'mimetype'), 'mimetype', compress_type=zipfile.ZIP_STORED)
    
    # Add other files
    for root, dirs, files in os.walk(temp_dir):
        for file in files:
            if file == 'mimetype': continue
            abs_path = os.path.join(root, file)
            rel_path = os.path.relpath(abs_path, temp_dir)
            epub.write(abs_path, rel_path)

print(f"Successfully generated {output_epub}")
