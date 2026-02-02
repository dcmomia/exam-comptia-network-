import json
import os
import re

json_path = r'c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\temp\questions.json'
xhtml_path = r'c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\output\exam_book_v1\OEBPS\Text\questions.xhtml'

with open(json_path, 'r', encoding='utf-8') as f:
    questions = json.load(f)

def get_category(ref):
    if '>' in ref:
        parts = ref.split('>')
        cat = parts[0].replace('Capítulo', '').strip()
        # Clean up category name
        cat = re.sub(r'^\d+\s*:\s*', '', cat)
        return cat
    return "General"

def get_option_letter(idx):
    return chr(ord('a') + idx)

xhtml_blocks = []

for q in questions:
    cat = get_category(q.get('source_reference', ''))
    title = f"Pregunta {q['id']}: {cat}"
    
    # Identify correct option index
    try:
        correct_idx = q['options'].index(q['answer'])
        correct_letter = get_option_letter(correct_idx)
    except ValueError:
        correct_letter = "?" # Should not happen with current data

    options_html = []
    for i, opt in enumerate(q['options']):
        letter = get_option_letter(i)
        if opt == q['answer']:
            options_html.append(f"                    <li>{letter}) <strong>{opt}</strong></li>")
        else:
            options_html.append(f"                    <li>{letter}) {opt}</li>")
    
    options_list_str = "\n".join(options_html)
    
    context_html = ""
    # In some questions, the text might have specific lists or formatting
    # For now, we use the standard p tag.
    
    block = f"""        <!-- Pregunta {q['id']} -->
        <div class="question-box">
            <h3>{title}</h3>
            <p>{q['question']}</p>
            <div class="options-list">
                <ul>
{options_list_str}
                </ul>
            </div>
            <div class="explanation-box">
                <p><span class="correct-answer">Respuesta Correcta: {correct_letter})</span></p>
                <p><strong>Explicación:</strong> {q['explanation']}</p>
                <span class="source-ref">Referencia: {q['source_reference']}</span>
            </div>
        </div>"""
    xhtml_blocks.append(block)

all_questions_html = "\n\n".join(xhtml_blocks)

# Prepare final XHTML content
header = """<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="es">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Preguntas de Examen</title>
    <link rel="stylesheet" type="text/css" href="../Styles/styles.css" />
    <style type="text/css">
        .question-box {
            margin-bottom: 40px;
            padding: 20px;
            border-bottom: 2px solid #eee;
        }

        .options-list {
            list-style-type: none; /* Changed to none because we use manual letters in li */
            margin-top: 15px;
        }

        .explanation-box {
            margin-top: 20px;
            padding: 15px;
            background-color: #f9f9f9;
            border-left: 5px solid #2c3e50;
        }

        .correct-answer {
            font-weight: bold;
            color: #27ae60;
        }

        .source-ref {
            font-style: italic;
            color: #7f8c8d;
            font-size: 0.9em;
            display: block;
            margin-top: 10px;
        }
    </style>
</head>

<body>
    <section class="chapter" epub:type="chapter">
        <h1 class="chapter-title">Preguntas de Práctica</h1>
"""

footer = """
    </section>
</body>

</html>"""

final_content = header + all_questions_html + footer

with open(xhtml_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print(f"Successfully updated {xhtml_path} with 90 questions.")
