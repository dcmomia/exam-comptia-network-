import json
import os

# Paths
json_path = r"c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\temp\examen2_final_integrated.json"
batch8_path = r"c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\temp\examen2_batch8.json"
js_path = r"c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\interactive_exam\questions_data.js"

# Load Main Data
with open(json_path, 'r', encoding='utf-8') as f:
    main_questions = json.load(f)

# Load Batch 8
with open(batch8_path, 'r', encoding='utf-8') as f:
    batch8_questions = json.load(f)

# Append Batch 8
# Check for duplicates by ID
existing_ids = set(q['id'] for q in main_questions)
added_count = 0
for q in batch8_questions:
    if q['id'] not in existing_ids:
        main_questions.append(q)
        added_count += 1
    else:
        print(f"Skipping Duplicate ID {q['id']}")

print(f"Added {added_count} new questions from Batch 8.")
print(f"Total questions: {len(main_questions)}")

# Save JSON
with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(main_questions, f, ensure_ascii=False, indent=4)

# Regenerate JS File Content for Exam 2
questions_json = json.dumps(main_questions, ensure_ascii=False, indent=4)

# We need to replace the Exam 2 section in the JS file or append if not capable of simple replace.
# Since we appended earlier, we should probably read the file, remove the last block, and re-append, OR simpler:
# Just rewrite the JS structure if we can find the start of Exam 2?
# Actually, the file structure is:
# EXAMS_DATABASE = { ... exam 1 ... };
# EXAMS_DATABASE["network_plus_exam_2"] = { ... };
#
# So we can just read the file lines, find where `EXAMS_DATABASE["network_plus_exam_2"]` starts, and remove everything after, then re-append.

with open(js_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find start of Exam 2
start_idx = -1
for i, line in enumerate(lines):
    if 'EXAMS_DATABASE["network_plus_exam_2"]' in line:
        start_idx = i
        break

if start_idx != -1:
    # Truncate content before Exam 2
    clean_lines = lines[:start_idx]
    # Write back clean files
    with open(js_path, 'w', encoding='utf-8') as f:
        f.writelines(clean_lines)
    print("Cleaned old Exam 2 data from JS file.")

# Append new data
new_exam_js = f"""
EXAMS_DATABASE["network_plus_exam_2"] = {{
    id: "network_plus_exam_2",
    title: "CompTIA Network+ - Examen 2",
    version: "v3.1",
    questions: {questions_json}
}};
"""

with open(js_path, 'a', encoding='utf-8') as f:
    f.write(new_exam_js)

print("Successfully updated questions_data.js with complete data.")
