import json

path = r"c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\temp\examen2_final_integrated.json"
js_path = r"c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\interactive_exam\questions_data.js"

with open(path, 'r', encoding='utf-8') as f:
    questions = json.load(f)

initial_count = len(questions)
print(f"Initial count: {initial_count}")

# Identify English questions (IDs 89, 90, 91 based on analysis)
# We can use the same heuristic or just ID content logic
english_keywords = [" which ", " what ", " how ", " the ", " is ", " are "]

to_remove = []
for q in questions:
    text_lower = q['question'].lower()
    score = sum(1 for w in english_keywords if w in text_lower)
    if score >= 3:
        print(f"Detected English Question to remove: ID {q['id']} - {q['question'][:50]}...")
        to_remove.append(q)

for q in to_remove:
    questions.remove(q)

final_count = len(questions)
print(f"Removed {len(to_remove)} questions.")
print(f"Final valid count: {final_count}")

# Save JSON
with open(path, 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=4)

# Update JS File
# We will regenerate the Exam 2 block completely
questions_json = json.dumps(questions, ensure_ascii=False, indent=4)

with open(js_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find start of Exam 2 and truncate
start_idx = -1
for i, line in enumerate(lines):
    if 'EXAMS_DATABASE["network_plus_exam_2"]' in line:
        start_idx = i
        break

if start_idx != -1:
    lines = lines[:start_idx]
    
new_exam_js = f"""
EXAMS_DATABASE["network_plus_exam_2"] = {{
    id: "network_plus_exam_2",
    title: "CompTIA Network+ - Examen 2",
    version: "v3.1.2",
    questions: {questions_json}
}};
"""

with open(js_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)
    f.write(new_exam_js)

print("Updated questions_data.js successfully.")
