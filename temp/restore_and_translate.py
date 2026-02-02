import json

json_path = r"c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\temp\examen2_final_integrated.json"
js_path = r"c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\interactive_exam\questions_data.js"

with open(json_path, 'r', encoding='utf-8') as f:
    questions = json.load(f)

print(f"Initial count: {len(questions)}")

# 1. Remove ID 91 (Duplicate of 80)
questions = [q for q in questions if q['id'] != 91]
print(f"Count after removing ID 91: {len(questions)}")

# 2. Translate ID 88 (Full Tunnel)
for q in questions:
    if q['id'] == 88:
        q['question'] = "En una configuración de VPN de cliente a sitio, ¿qué tipo de configuración de túnel enruta todo el tráfico, incluido el tráfico de la red corporativa y el tráfico destinado a Internet, a través del túnel VPN?"
        q['options'] = [
            "Clientless (Sin cliente)",
            "Split Tunnel (Túnel dividido)",
            "Full Tunnel (Túnel completo)",
            "Direct Tunnel (Túnel directo)"
        ]
        q['answer'] = "Full Tunnel (Túnel completo)"
        # Explanation is already in Spanish
        print("Translated ID 88.")

# 3. Restore and Translate IDs 83, 89, 90
restored_questions = [
    {
        "id": 83,
        "has_context_image": False,
        "question": "Lorraine es la única administradora de red de su empresa. Tras investigar los informes de los usuarios del departamento de contabilidad, descubre que un puerto crucial del switch conectado al servidor del departamento no transmite datos. Tras la inspección, observa que el indicador LED del puerto del switch no está encendido. Esto le parece extraño, ya que ella no ha desactivado el puerto. ¿Cuál de las siguientes es la razón MÁS probable de este problema?",
        "options": [
            "El puerto está configurado con una asignación de VLAN incorrecta.",
            "El puerto está suspendido debido a un problema de STP (Spanning Tree Protocol).",
            "El puerto ha sido inhabilitado por error (error disabled) debido a una violación.",
            "El puerto está administrativamente inactivo (administratively down)."
        ],
        "answer": "El puerto ha sido inhabilitado por error (error disabled) debido a una violación.",
        "explanation": "Si el LED del puerto está apagado y el administrador no lo ha deshabilitado manualmente ('administratively down'), es probable que el puerto haya entrado en estado 'error-disabled' debido a una violación de seguridad (como Port Security). STP generalmente muestra un LED ámbar o parpadeante, no apagado.",
        "source_reference": "Capítulo 20: Solución de Problemas de Red > Problemas de Puertos de Switch"
    },
    {
        "id": 89,
        "has_context_image": False,
        "question": "Acaba de reemplazar el switch de borde en el segundo piso de Dion Training. Al terminar, un usuario afirma que ya no puede acceder a la red, pero todo funcionaba bien ayer antes de que usted reemplazara el switch. Los compañeros del usuario afirman que sus ordenadores pueden acceder a la red sin problemas. Usted comprueba la parte posterior de la estación de trabajo del usuario y no ve ninguna luz LED encendida o parpadeando en su tarjeta de interfaz de red (NIC). ¿Cuál de los siguientes pasos debería comprobar a continuación para resolver este problema?",
        "options": [
            "Verificar que el switch esté conectado al router",
            "Verificar que la tarjeta de interfaz de red funcione correctamente",
            "Verificar que el cable de red esté conectado al nuevo switch",
            "Verificar que el dispositivo esté utilizando el tipo de cable correcto"
        ],
        "answer": "Verificar que el cable de red esté conectado al nuevo switch",
        "explanation": "Dado que se acaba de reemplazar el switch y el problema es aislado (solo un usuario) con la luz de enlace apagada, lo más probable es que el cable de red de ese usuario no se haya conectado correctamente al nuevo switch. Si fuera el router, fallaría toda la red. Si fuera la NIC, no habría funcionado ayer.",
        "source_reference": "Capítulo 20: Solución de Problemas de Red > Problemas de Capa Física"
    },
    {
        "id": 90,
        "has_context_image": False,
        "question": "¿Cuál de los siguientes es un método utilizado para configurar automáticamente direcciones de host IPv6?",
        "options": [
            "EUI-64",
            "APIPA",
            "EIA-568B",
            "EBCDIC"
        ],
        "answer": "EUI-64",
        "explanation": "EUI-64 es un método utilizado en IPv6 para generar automáticamente la porción de interfaz (Host ID) de 64 bits de una dirección IPv6 a partir de la dirección MAC de 48 bits del dispositivo.",
        "source_reference": "Capítulo 4: Direccionamiento IP > IPv6"
    }
]

questions.extend(restored_questions)

# Sort by ID to be clean
questions.sort(key=lambda x: x['id'])

print(f"Final Count: {len(questions)}")

# Validation check
if len(questions) != 90:
    print("WARNING: Final count is NOT 90!")

# Save JSON
with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=4)

# Update JS File
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
    version: "v3.1.3",
    questions: {questions_json}
}};
"""

with open(js_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)
    f.write(new_exam_js)

print("Updated questions_data.js successfully.")
