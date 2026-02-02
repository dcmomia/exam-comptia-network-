import json

path = r"c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\temp\examen2_final_integrated.json"

with open(path, 'r', encoding='utf-8') as f:
    questions = json.load(f)

print(f"Current Total Questions: {len(questions)}")

keywords = {
    "ID 83 (Error Disabled)": ["error disabled", "port security", "violation", "puerto deshabilitado"],
    "ID 89 (Physical Cable/Switch)": ["cable", "switch", "physical", "física", "conectado"],
    "ID 90 (IPv6 EUI-64)": ["EUI-64", "IPv6"],
    "ID 91 (Guest Network)": ["guest network", "red de invitados", "visitantes", "visitors"]
}

found_map = {k: [] for k in keywords}

for q in questions:
    text = (q['question'] + " " + q['answer'] + " " + q['explanation']).lower()
    for key, terms in keywords.items():
        if any(term in text for term in terms):
            found_map[key].append(q['id'])

print("\n--- Search Results ---")
for key, ids in found_map.items():
    if ids:
        print(f"MATCH FOUND for {key}: IDs {ids}")
    else:
        print(f"NO MATCH form {key}")
