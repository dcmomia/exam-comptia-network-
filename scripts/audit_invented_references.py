import json
import xml.etree.ElementTree as ET
import zipfile
import re
from difflib import get_close_matches

def extract_toc_from_epub(epub_path):
    print(f"Extracting ToC from {epub_path}...")
    toc_hierarchy = {}
    try:
        with zipfile.ZipFile(epub_path, 'r') as zip_ref:
            # Try to read toc.ncx which is more structured for hierarchy
            ncx_data = zip_ref.read('OEBPS/toc.ncx').decode('utf-8')
            root = ET.fromstring(ncx_data)
            
            # NCX namespace
            ns = {'ncx': 'http://www.daisy.org/z3986/2005/ncx/'}
            
            nav_map = root.find('ncx:navMap', ns)
            for nav_point in nav_map.findall('ncx:navPoint', ns):
                chapter_label = nav_point.find('ncx:navLabel/ncx:text', ns).text.strip()
                # Clean chapter label (e.g. "Capítulo 1: El Modelo OSI" -> "Capítulo 1: El Modelo OSI")
                
                sections = []
                for sub_point in nav_point.findall('ncx:navPoint', ns):
                    section_label = sub_point.find('ncx:navLabel/ncx:text', ns).text.strip()
                    sections.append(section_label)
                
                toc_hierarchy[chapter_label] = sections
    except Exception as e:
        print(f"Error extracting ToC: {e}")
    return toc_hierarchy

def parse_reference(ref_str):
    # Example: "Capítulo 19: Troubleshooting > Metodología de 7 Pasos"
    if '>' in ref_str:
        parts = ref_str.split('>')
        chapter = parts[0].strip()
        section = parts[1].strip()
        return chapter, section
    return ref_str.strip(), None

def audit_questions(questions_path, toc_hierarchy):
    print(f"Auditing questions in {questions_path}...")
    results = []
    with open(questions_path, 'r', encoding='utf-8') as f:
        questions = json.load(f)
    
    for q in questions:
        ref_str = q.get('source_reference', '')
        if not ref_str:
            continue
            
        chapter, section = parse_reference(ref_str)
        
        # Check Chapter
        found_chapter = None
        for toc_chap in toc_hierarchy.keys():
            if chapter.lower() in toc_chap.lower() or toc_chap.lower() in chapter.lower():
                found_chapter = toc_chap
                break
        
        issue = None
        suggestion = None
        
        if not found_chapter:
            issue = "Invented Chapter"
            suggestion = get_close_matches(chapter, toc_hierarchy.keys(), n=1)
        elif section:
            # Check Section
            sections = toc_hierarchy[found_chapter]
            found_section = False
            for s in sections:
                if section.lower() == s.lower():
                    found_section = True
                    break
            
            if not found_section:
                issue = "Invented Section"
                # Look for the section in other chapters too
                other_locations = []
                for c, s_list in toc_hierarchy.items():
                    if any(section.lower() in s.lower() for s in s_list):
                        other_locations.append(c)
                
                suggestion_list = get_close_matches(section, sections, n=1, cutoff=0.6)
                suggestion = suggestion_list[0] if suggestion_list else None
                if not suggestion and other_locations:
                    suggestion = f"Try in {', '.join(other_locations)}"
        
        if issue:
            results.append({
                "question_id": q['id'],
                "original_reference": ref_str,
                "issue": issue,
                "suggested_fix": suggestion
            })
            
    return results

# Main execution
epub_path = 'c:/Users/DC/Documents/ANTIGRAVITY/CompTIA_Network_Final.epub'
questions_files = [
    'c:/Users/DC/Documents/ANTIGRAVITY/CompTIA_Network_Plus_Exam_Book/temp/questions.json',
    'c:/Users/DC/Documents/ANTIGRAVITY/CompTIA_Network_Plus_Exam_Book/temp/examen2_final_integrated.json'
]

toc = extract_toc_from_epub(epub_path)
all_findings = {}

for q_file in questions_files:
    findings = audit_questions(q_file, toc)
    all_findings[q_file.split('/')[-1]] = findings

report_path = 'c:/Users/DC/Documents/ANTIGRAVITY/CompTIA_Network_Plus_Exam_Book/reports/INVENTED_REFERENCES_RESULTS.json'
with open(report_path, 'w', encoding='utf-8') as f:
    json.dump(all_findings, f, indent=4, ensure_ascii=False)

print(f"Audit complete. Findings saved to {report_path}")
