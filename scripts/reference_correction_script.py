#!/usr/bin/env python3
"""
Reference Correction Script
Automatically updates question references to match EPUB structure
"""

import json
import re
import shutil
from pathlib import Path
from datetime import datetime
import argparse

# Configuration
PROJECT_ROOT = Path(r"C:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book")
MAPPING_FILE = PROJECT_ROOT / "reference_mapping.json"
QUESTIONS_FILE = PROJECT_ROOT / "temp" / "questions.json"
EXAM2_FILE = PROJECT_ROOT / "temp" / "examen2_final_integrated.json"
QUESTIONS_DATA_JS = PROJECT_ROOT / "interactive_exam" / "questions_data.js"

# TOC Mapping (from EPUB)
TOC_CHAPTERS = {
    1: "El Modelo OSI",
    2: "Hardware de Red",
    3: "La Nube",
    4: "Puertos y Protocolos",
    5: "Medios y Topologías",
    6: "Direccionamiento IPv4",
    7: "Enrutamiento",
    8: "Switches y VLANs",
    9: "Wireless",
    10: "Instalaciones Físicas",
    11: "Documentación",
    12: "Monitoreo",
    13: "BCDR",
    14: "Servicios de Red",
    15: "Acceso Remoto",
    16: "Fundamentos de Seguridad",
    17: "Amenazas y Ataques",
    18: "Defensa de la Red",
    19: "Troubleshooting",
    20: "Problemas Físicos",
    21: "Diagnóstico de Servicios",
    22: "Herramientas"
}

def load_mapping():
    """Load reference mapping from JSON"""
    with open(MAPPING_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def parse_reference(ref):
    """Parse a question reference into components"""
    match = re.match(r'Capítulo (\d+):\s*(.+?)(?:\s*>\s*(.+))?$', ref)
    if match:
        return {
            'chapter_num': int(match.group(1)),
            'chapter_title': match.group(2).strip(),
            'section': match.group(3).strip() if match.group(3) else None,
            'original': ref
        }
    return None

def correct_reference(ref, mapping):
    """Apply corrections to a single reference"""
    # Check manual overrides first
    if ref in mapping['manual_overrides']:
        return mapping['manual_overrides'][ref]
    
    parsed = parse_reference(ref)
    if not parsed:
        return ref  # Return unchanged if can't parse
    
    ch_num = parsed['chapter_num']
    ch_title = parsed['chapter_title']
    section = parsed['section']
    
    corrected_title = ch_title
    corrected_num = ch_num
    corrected_section = section
    
    # Apply chapter title corrections
    if ch_title in mapping['chapter_title_corrections']:
        corrected_title = mapping['chapter_title_corrections'][ch_title]
    
    # Apply chapter number corrections
    for correction in mapping['chapter_number_corrections']:
        if (correction['old_chapter'] == ch_num and 
            correction['old_pattern'] in ch_title):
            corrected_num = correction['new_chapter']
            corrected_title = correction['new_title']
            break
    
    # Apply section standardization
    if section and section in mapping.get('section_standardization', {}):
        corrected_section = mapping['section_standardization'][section]
    
    # Verify corrected chapter title matches TOC
    if corrected_num in TOC_CHAPTERS:
        toc_title = TOC_CHAPTERS[corrected_num]
        if corrected_title != toc_title:
            # Use the official TOC title
            corrected_title = toc_title
    
    # Rebuild reference
    new_ref = f"Capítulo {corrected_num}: {corrected_title}"
    if corrected_section:
        new_ref += f" > {corrected_section}"
    
    return new_ref

def create_backup(file_path):
    """Create timestamped backup of a file"""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_path = file_path.parent / f"{file_path.stem}.backup_{timestamp}{file_path.suffix}"
    shutil.copy2(file_path, backup_path)
    return backup_path

def process_questions_file(file_path, mapping, dry_run=False):
    """Process a questions JSON file and correct references"""
    print(f"\n{'[DRY RUN] ' if dry_run else ''}Processing: {file_path.name}")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        questions = json.load(f)
    
    corrections = []
    
    for q in questions:
        if 'source_reference' in q:
            old_ref = q['source_reference']
            new_ref = correct_reference(old_ref, mapping)
            
            if old_ref != new_ref:
                corrections.append({
                    'question_id': q['id'],
                    'old': old_ref,
                    'new': new_ref
                })
                
                if not dry_run:
                    q['source_reference'] = new_ref
    
    # Display corrections
    print(f"  Found {len(corrections)} corrections")
    if corrections:
        print("\n  Sample corrections:")
        for correction in corrections[:5]:
            print(f"    Q{correction['question_id']}:")
            print(f"      OLD: {correction['old']}")
            print(f"      NEW: {correction['new']}")
        
        if len(corrections) > 5:
            print(f"    ... and {len(corrections) - 5} more")
    
    # Save corrected file
    if not dry_run and corrections:
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(questions, f, ensure_ascii=False, indent=4)
        print(f"  ✓ Applied {len(corrections)} corrections")
    
    return corrections

def regenerate_questions_data_js(questions_file_1, questions_file_2, output_file):
    """Regenerate questions_data.js from questions.json and examen2_completo.json"""
    with open(questions_file_1, 'r', encoding='utf-8') as f:
        questions1 = json.load(f)
    
    questions2 = []
    if questions_file_2.exists():
        with open(questions_file_2, 'r', encoding='utf-8') as f:
            questions2 = json.load(f)
    
    # Define EXAMS_DATABASE structure
    exams_database = {
        "network_plus_exam_1": {
            "id": "network_plus_exam_1",
            "title": "CompTIA Network+ - Examen 1",
            "version": "v3.1.3",
            "questions": sorted(questions1, key=lambda x: x['id'])
        }
    }
    
    if questions2:
        exams_database["network_plus_exam_2"] = {
            "id": "network_plus_exam_2",
            "title": "CompTIA Network+ - Examen 2",
            "version": "v1.0",
            "questions": sorted(questions2, key=lambda x: x['id'])
        }
    
    js_content = "// Auto-generated from source JSON files\n"
    js_content += f"// Generated: {datetime.now().isoformat()}\n\n"
    js_content += "var EXAMS_DATABASE = "
    js_content += json.dumps(exams_database, ensure_ascii=False, indent=2)
    js_content += ";\n\n"
    
    # Export for multi-environment support
    js_content += "// Export for use in Node environments if needed\n"
    js_content += "if (typeof module !== 'undefined' && module.exports) {\n"
    js_content += "  module.exports = EXAMS_DATABASE;\n"
    js_content += "}\n"
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"\n✓ Regenerated {output_file.name} with {len(exams_database)} exams")

def main():
    parser = argparse.ArgumentParser(description='Correct question references to match EPUB structure')
    parser.add_argument('--dry-run', action='store_true', 
                       help='Preview changes without modifying files')
    parser.add_argument('--skip-backup', action='store_true',
                       help='Skip creating backups (not recommended)')
    args = parser.parse_args()
    
    print("=" * 80)
    print("REFERENCE CORRECTION SCRIPT")
    if args.dry_run:
        print("MODE: DRY RUN (no files will be modified)")
    print("=" * 80)
    
    # Load mapping
    mapping = load_mapping()
    print(f"\n✓ Loaded mapping with:")
    print(f"  - {len(mapping['chapter_title_corrections'])} title corrections")
    print(f"  - {len(mapping['chapter_number_corrections'])} number corrections")
    print(f"  - {len(mapping['manual_overrides'])} manual overrides")
    
    # Create backups
    if not args.dry_run and not args.skip_backup:
        print("\n📦 Creating backups...")
        backup1 = create_backup(QUESTIONS_FILE)
        print(f"  ✓ {backup1.name}")
        
        if EXAM2_FILE.exists():
            backup2 = create_backup(EXAM2_FILE)
            print(f"  ✓ {backup2.name}")
        
        if QUESTIONS_DATA_JS.exists():
            backup3 = create_backup(QUESTIONS_DATA_JS)
            print(f"  ✓ {backup3.name}")
    
    # Process questions files
    all_corrections = []
    
    # Process main questions.json
    corrections = process_questions_file(QUESTIONS_FILE, mapping, args.dry_run)
    all_corrections.extend(corrections)
    
    # Process exam2 if exists
    if EXAM2_FILE.exists():
        corrections = process_questions_file(EXAM2_FILE, mapping, args.dry_run)
        all_corrections.extend(corrections)
    
    # Regenerate questions_data.js only if not dry run
    if not args.dry_run:
        regenerate_questions_data_js(QUESTIONS_FILE, EXAM2_FILE, QUESTIONS_DATA_JS)
    
    # Summary
    print("\n" + "=" * 80)
    print("SUMMARY")
    print("=" * 80)
    print(f"Total corrections applied: {len(all_corrections)}")
    
    if args.dry_run:
        print("\n⚠️  This was a DRY RUN. No files were modified.")
        print("Run without --dry-run to apply changes.")
    else:
        print("\n✅ All corrections applied successfully!")
        print("\nNext steps:")
        print("  1. Run audit_references.py to verify 100% correctness")
        print("  2. Test the web app with updated references")
        print("  3. Review sample questions manually")

if __name__ == "__main__":
    main()
