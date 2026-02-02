import json
import os

# Paths
json_path = r"c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\temp\examen2_final_integrated.json"
js_path = r"c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\interactive_exam\questions_data.js"

# Load Exam 2 Data
with open(json_path, 'r', encoding='utf-8') as f:
    questions = json.load(f)

# Fix Image Paths
for q in questions:
    if q.get('has_context_image') and q.get('image_path'):
        # Fix path to relative
        q['image_path'] = q['image_path'].replace('assets/', '../public/assets/')

# Construct JS Object String
# We need to be careful with JSON serialization to ensure it matches JS syntax reasonably well
# We will use json.dumps but assign it to the key.
questions_json = json.dumps(questions, ensure_ascii=False, indent=4)

new_exam_js = f"""
EXAMS_DATABASE["network_plus_exam_2"] = {{
    id: "network_plus_exam_2",
    title: "CompTIA Network+ - Examen 2",
    version: "v3.0",
    questions: {questions_json}
}};
"""

# Read existing JS file
with open(js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Check for duplicates
if 'network_plus_exam_2' in content:
    print("Exam 2 already exists in questions_data.js. Skipping append.")
else:
    # Append
    with open(js_path, 'a', encoding='utf-8') as f:
        f.write("\n" + new_exam_js)
    print("Successfully appended Exam 2 to questions_data.js")

print(f"Total questions: {len(questions)}")
