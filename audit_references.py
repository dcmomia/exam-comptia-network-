#!/usr/bin/env python3
"""
Deep Audit Script: EPUB Reference Verification
Analyzes question references against actual EPUB chapter content
"""

import json
import re
from pathlib import Path
from collections import defaultdict
from bs4 import BeautifulSoup

# Configuration
QUESTIONS_FILE = r"C:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\temp\questions.json"
EPUB_DIR = r"C:\Users\DC\Documents\ANTIGRAVITY\EPUB_TEMP\OEBPS\Text"
TOC_FILE = r"C:\Users\DC\Documents\ANTIGRAVITY\EPUB_TEMP\OEBPS\toc.ncx"
OUTPUT_FILE = r"C:\Users\DC\.gemini\antigravity\brain\e47c845a-75f9-4afc-bb1c-4600f2824369\AUDIT_REPORT_PHASE2.md"

# TOC Chapter Mapping (from toc.ncx)
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

def extract_chapter_headings(chapter_path):
    """Extract all h1, h2, h3 headings from an XHTML chapter file"""
    try:
        with open(chapter_path, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')
            
        headings = []
        for tag in soup.find_all(['h1', 'h2', 'h3']):
            heading_text = tag.get_text(strip=True)
            headings.append({
                'level': tag.name,
                'text': heading_text
            })
        return headings
    except Exception as e:
        print(f"Error reading {chapter_path}: {e}")
        return []

def parse_reference(ref):
    """Parse a question reference into chapter number, title, and section"""
    match = re.match(r'Capítulo (\d+):\s*(.+?)\s*(?:>\s*(.+))?$', ref)
    if match:
        return {
            'chapter_num': int(match.group(1)),
            'chapter_title': match.group(2).strip(),
            'section': match.group(3).strip() if match.group(3) else None
        }
    return None

def main():
    print("=" * 80)
    print("DEEP AUDIT: Question Reference Verification")
    print("=" * 80)
    
    # Load questions
    with open(QUESTIONS_FILE, 'r', encoding='utf-8') as f:
        questions = json.load(f)
    
    print(f"\n✓ Loaded {len(questions)} questions")
    
    # Extract all unique references
    unique_refs = set()
    question_refs = defaultdict(list)  # ref -> list of question IDs
    
    for q in questions:
        ref = q.get('source_reference', '')
        if ref:
            unique_refs.add(ref)
            question_refs[ref].append(q['id'])
    
    print(f"✓ Found {len(unique_refs)} unique references")
    
    # Parse all EPUB chapters
    epub_content = {}
    for ch_num in range(1, 23):
        ch_path = Path(EPUB_DIR) / f"ch{ch_num}.xhtml"
        if ch_path.exists():
            headings = extract_chapter_headings(ch_path)
            epub_content[ch_num] = {
                'toc_title': TOC_CHAPTERS.get(ch_num, 'Unknown'),
                'headings': headings
            }
            print(f"✓ Parsed Chapter {ch_num}: {len(headings)} headings found")
    
    # Analyze references
    results = {
        'correct': [],
        'wrong_chapter_title': [],
        'wrong_chapter_number': [],
        'section_not_found': [],
        'chapter_not_found': [],
        'content_only': []  # Content exists but in different chapter
    }
    
    for ref in sorted(unique_refs):
        parsed = parse_reference(ref)
        if not parsed:
            continue
            
        ch_num = parsed['chapter_num']
        q_chapter_title = parsed['chapter_title']
        q_section = parsed['section']
        
        # Check if chapter exists
        if ch_num not in epub_content:
            results['chapter_not_found'].append({
                'reference': ref,
                'question_ids': question_refs[ref],
                'parsed': parsed
            })
            continue
        
        toc_title = epub_content[ch_num]['toc_title']
        headings = epub_content[ch_num]['headings']
        
        # Check if chapter title matches TOC
        if q_chapter_title != toc_title:
            # Search if content exists in another chapter
            found_in_other = None
            for other_ch, content in epub_content.items():
                # Check if any heading contains the queried section
                if q_section:
                    for h in content['headings']:
                        if q_section.lower() in h['text'].lower():
                            found_in_other = (other_ch, content['toc_title'])
                            break
                if found_in_other:
                    break
            
            if found_in_other:
                results['wrong_chapter_number'].append({
                    'reference': ref,
                    'question_ids': question_refs[ref],
                    'parsed': parsed,
                    'actual_chapter': found_in_other[0],
                    'actual_title': found_in_other[1]
                })
            else:
                results['wrong_chapter_title'].append({
                    'reference': ref,
                    'question_ids': question_refs[ref],
                    'parsed': parsed,
                    'toc_title': toc_title
                })
        
        # Check if section exists
        elif q_section:
            section_found = any(
                q_section.lower() in h['text'].lower() 
                for h in headings
            )
            
            if not section_found:
                results['section_not_found'].append({
                    'reference': ref,
                    'question_ids': question_refs[ref],
                    'parsed': parsed,
                    'available_sections': [h['text'] for h in headings if h['level'] in ['h2', 'h3']]
                })
            else:
                results['correct'].append({
                    'reference': ref,
                    'question_ids': question_refs[ref]
                })
        else:
            # No section specified, just chapter
            results['correct'].append({
                'reference': ref,
                'question_ids': question_refs[ref]
            })
    
    # Generate Markdown Report
    report = []
    report.append("# AUDIT REPORT - Phase 2: Deep Reference Analysis")
    report.append(f"**Generated**: 2026-02-02")
    report.append(f"**Questions Analyzed**: {len(questions)}")
    report.append(f"**Unique References**: {len(unique_refs)}")
    report.append("")
    report.append("---")
    report.append("")
    
    # Summary Stats
    report.append("## Executive Summary")
    report.append("")
    report.append("| Category | Count | Percentage |")
    report.append("|----------|-------|------------|")
    total = len(unique_refs)
    for category, items in results.items():
        count = len(items)
        pct = (count / total * 100) if total > 0 else 0
        emoji = "✅" if category == 'correct' else "❌"
        report.append(f"| {emoji} {category.replace('_', ' ').title()} | {count} | {pct:.1f}% |")
    report.append("")
    report.append("---")
    report.append("")
    
    # Detailed Findings
    report.append("## Detailed Findings")
    report.append("")
    
    # Wrong Chapter Title
    if results['wrong_chapter_title']:
        report.append("### ❌ Wrong Chapter Title (Critical)")
        report.append(f"**Count**: {len(results['wrong_chapter_title'])}")
        report.append("")
        report.append("Questions reference chapter titles that don't match EPUB TOC:")
        report.append("")
        for item in results['wrong_chapter_title'][:10]:  # Limit to first 10
            report.append(f"- **Reference**: `{item['reference']}`")
            report.append(f"  - **Question IDs**: {item['question_ids']}")
            report.append(f"  - **Referenced Title**: {item['parsed']['chapter_title']}")
            report.append(f"  - **Actual TOC Title**: {item['toc_title']}")
            report.append("")
    
    # Wrong Chapter Number
    if results['wrong_chapter_number']:
        report.append("### ⚠️ Wrong Chapter Number (Warning)")
        report.append(f"**Count**: {len(results['wrong_chapter_number'])}")
        report.append("")
        report.append("Content exists but in a different chapter:")
        report.append("")
        for item in results['wrong_chapter_number'][:10]:
            report.append(f"- **Reference**: `{item['reference']}`")
            report.append(f"  - **Question IDs**: {item['question_ids']}")
            report.append(f"  - **Referenced Chapter**: {item['parsed']['chapter_num']}")
            report.append(f"  - **Actual Chapter**: {item['actual_chapter']} - {item['actual_title']}")
            report.append("")
    
    # Section Not Found
    if results['section_not_found']:
        report.append("### 🔍 Section Not Found (Needs Review)")
        report.append(f"**Count**: {len(results['section_not_found'])}")
        report.append("")
        for item in results['section_not_found'][:5]:
            report.append(f"- **Reference**: `{item['reference']}`")
            report.append(f"  - **Question IDs**: {item['question_ids']}")
            report.append(f"  - **Missing Section**: {item['parsed']['section']}")
            report.append("")
    
    # Correct References
    report.append("### ✅ Correct References")
    report.append(f"**Count**: {len(results['correct'])}")
    if results['correct']:
        report.append(f"Sample: `{results['correct'][0]['reference']}`")
    report.append("")
    
    # Recommendations
    report.append("---")
    report.append("")
    report.append("## Recommendations")
    report.append("")
    report.append("1. **Update question references** to match actual EPUB chapter titles")
    report.append("2. **Remap chapter numbers** where content exists but in wrong location")
    report.append("3. **Review missing sections** - may need content integration from different EPUB")
    report.append("4. **Create reference correction script** for bulk updates")
    report.append("")
    
    # Write report
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write('\n'.join(report))
    
    print(f"\n✓ Report generated: {OUTPUT_FILE}")
    print(f"\nSummary:")
    print(f"  ✅ Correct: {len(results['correct'])}")
    print(f"  ❌ Wrong Title: {len(results['wrong_chapter_title'])}")
    print(f"  ⚠️  Wrong Number: {len(results['wrong_chapter_number'])}")
    print(f"  🔍 Section Missing: {len(results['section_not_found'])}")

if __name__ == "__main__":
    main()
