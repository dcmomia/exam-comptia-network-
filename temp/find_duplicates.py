import json
from difflib import SequenceMatcher

path = r"c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\temp\examen2_final_integrated.json"

with open(path, 'r', encoding='utf-8') as f:
    questions = json.load(f)

print(f"Total questions loaded: {len(questions)}")

# Check for Duplicate IDs
ids = [q['id'] for q in questions]
if len(ids) != len(set(ids)):
    print("WARNING: Duplicate IDs found!")
    from collections import Counter
    print(Counter(ids))
else:
    print("No duplicate IDs found.")

# Check for Duplicate Text (Exact match)
texts = [q['question'] for q in questions]
if len(texts) != len(set(texts)):
    print("\nWARNING: Exact duplicate question text found!")
    seen = set()
    dupes = []
    for i, q in enumerate(questions):
        if q['question'] in seen:
            dupes.append((i, q['id'], q['question'][:50]))
        seen.add(q['question'])
    for d in dupes:
        print(f"Duplicate at index {d[0]}, ID {d[1]}: {d[2]}...")
else:
    print("No exact text duplicates found.")

# Check for High Similarity (Potential English/Spanish versions)
print("\nChecking for high similarity (potential translations or slight variations)...")
suspicious = []
for i in range(len(questions)):
    for j in range(i + 1, len(questions)):
        q1 = questions[i]
        q2 = questions[j]
        
        # Compare question text
        ratio = SequenceMatcher(None, q1['question'], q2['question']).ratio()
        
        # Compare options (as a string)
        opts1 = " ".join(sorted(q1['options']))
        opts2 = " ".join(sorted(q2['options']))
        opt_ratio = SequenceMatcher(None, opts1, opts2).ratio()

        # If question text is very similar OR options are identical
        if ratio > 0.8 or opt_ratio > 0.9:
            suspicious.append({
                "pair": (q1['id'], q2['id']),
                "ratio": ratio,
                "opt_ratio": opt_ratio,
                "q1_text": q1['question'][:100],
                "q2_text": q2['question'][:100]
            })

if suspicious:
    print(f"Found {len(suspicious)} suspicious pairs:")
    for s in suspicious:
        print(f"\nPair IDs: {s['pair']}")
        print(f"Text Similarity: {s['ratio']:.2f}")
        print(f"Option Similarity: {s['opt_ratio']:.2f}")
        print(f"Q1: {s['q1_text']}")
        print(f"Q2: {s['q2_text']}")
else:
    print("No highly similar questions found.")

# Check specifically for odd language patterns (simple heuristic)
print("\nChecking for potential un-translated English questions...")
english_keywords = [" which ", " what ", " how ", " the ", " is ", " are "]
for q in questions:
    text_lower = q['question'].lower()
    score = sum(1 for w in english_keywords if w in text_lower)
    if score >= 3:
        print(f"Potential English Detected (ID {q['id']}): {q['question'][:100]}")
