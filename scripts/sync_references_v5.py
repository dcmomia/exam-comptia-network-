import json
import re
import os

# Paths
QUESTIONS_JS = r"c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\interactive_exam\questions_data.js"
STRUCTURE_JSON = r"c:\Users\DC\Documents\ANTIGRAVITY\scripts\book_v5_structure.json"
BACKUP_JS = r"c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\interactive_exam\questions_data.v5_backup.js"

def load_structure():
    with open(STRUCTURE_JSON, 'r', encoding='utf-8') as f:
        return json.load(f)

def load_questions():
    with open(QUESTIONS_JS, 'r', encoding='utf-8') as f:
        content = f.read()
    # Extract JSON from JS variable
    json_str = re.search(r'var EXAMS_DATABASE = (\{.*\});', content, re.DOTALL).group(1)
    return json.loads(json_str), content

def sync_references():
    structure = load_structure()
    db, full_content = load_questions()
    
    # Create a mapping of chapter numbers to titles
    chapter_map = {}
    for title in structure.keys():
        match = re.search(r'Capítulo (\d+):', title)
        if match:
            chapter_map[int(match.group(1))] = title

    updates_count = 0
    unmatched = []

    for exam_id, exam_data in db.items():
        for q in exam_data['questions']:
            old_ref = q.get('source_reference', '')
            new_ref = old_ref
            
            # 1. Detect Chapter changes
            # Subnetting: Ch 4 -> Ch 6
            if "Subnetting" in old_ref or "CIDR" in old_ref:
                new_ref = f"{chapter_map[6]} > Subnetting"
            
            # Cloud: Ch 8 -> Ch 3
            elif "Cloud" in old_ref or "Nube" in old_ref:
                new_ref = f"{chapter_map[3]} > Conceptos de la Nube"
                
            # Hardware/Cables: Ch 2 -> Ch 5 (some twinaxial moved)
            elif "Twinaxial" in old_ref or "DAC" in old_ref:
                new_ref = f"{chapter_map[5]} > Twinaxial y DAC"
                
            # SSE / SASE
            elif "SSE" in old_ref or "SASE" in old_ref:
                new_ref = f"{chapter_map[3]} > SASE (Secure Access Service Edge)"
                
            # VXLAN / VNI
            elif "VXLAN" in old_ref or "VNI" in old_ref:
                new_ref = f"{chapter_map[8]} > Segmentación Avanzada: VXLAN y VNI"
                
            # Heat-Maps
            elif "Heat-Map" in old_ref or "Mapa de Calor" in old_ref:
                new_ref = f"{chapter_map[9]} > Planificación y Mapas de Calor (Heat-Maps)"

            # Troubleshooting
            elif "Troubleshooting" in old_ref or "Metodología" in old_ref:
                new_ref = f"{chapter_map[19]} > Metodología de Resolución de Problemas (7 Pasos)"

            # Generic Chapter mapping if no specific keyword matched
            else:
                match = re.search(r'Capítulo (\d+)', old_ref)
                if match:
                    ch_num = int(match.group(1))
                    if ch_num in chapter_map:
                        # Keep the same chapter number but update title if it changed
                        current_title = chapter_map[ch_num]
                        suffix = old_ref.split('>', 1)[1] if '>' in old_ref else ""
                        new_ref = f"{current_title} > {suffix.strip()}" if suffix else current_title

            if new_ref != old_ref:
                q['source_reference'] = new_ref
                updates_count += 1
            else:
                # Check if it even matches current structure
                found = False
                for title in structure.keys():
                    if title.split(':')[0] in old_ref:
                        found = True
                        break
                if not found:
                    unmatched.append(f"Q{q['id']}: {old_ref}")

    # Save backup
    if not os.path.exists(BACKUP_JS):
        with open(BACKUP_JS, 'w', encoding='utf-8') as f:
            f.write(full_content)
            
    # Write updated JS
    new_db_json = json.dumps(db, indent=2, ensure_ascii=False)
    # Re-insert into JS template
    updated_js = re.sub(r'var EXAMS_DATABASE = \{.*\};', f'var EXAMS_DATABASE = {new_db_json};', full_content, flags=re.DOTALL)
    
    with open(QUESTIONS_JS, 'w', encoding='utf-8') as f:
        f.write(updated_js)
        
    print(f"Total references updated: {updates_count}")
    print(f"Unmatched references: {len(unmatched)}")
    for u in unmatched[:10]:
        print(f" - {u}")
    if len(unmatched) > 10:
        print(" ...")

if __name__ == "__main__":
    sync_references()
