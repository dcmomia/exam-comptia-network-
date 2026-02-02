import json
import os
import shutil

# Rutas
source_dir = r"c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\img_source\Examen2"
dest_dir = r"c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\public\assets\images\exam2"
json_path = r"c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\temp\examen2_completo.json"
output_path = r"c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\temp\examen2_final_integrated.json"

# Mapeo de imágenes
image_map = {
    29: {"src": "Captura de pantalla 2026-02-01 180930.png", "dest": "q29_wireless_troubleshooting.png"},
    38: {"src": "Captura de pantalla 2026-02-01 181056.png", "dest": "q38_cable_tester.png"},
    39: {"src": "Captura de pantalla 2026-02-01 181101.png", "dest": "q39_encryption_layout.png"},
    81: {"src": "Captura de pantalla 2026-02-01 181009.png", "dest": "q81_antenna_selection.png"}
}

# Crear directorio si no existe
os.makedirs(dest_dir, exist_ok=True)

# Copiar imágenes
print("Copiando imágenes...")
for q_id, files in image_map.items():
    src_path = os.path.join(source_dir, files["src"])
    dest_path = os.path.join(dest_dir, files["dest"])
    try:
        shutil.copy2(src_path, dest_path)
        print(f"✓ Copiado {files['src']} -> {files['dest']}")
    except FileNotFoundError:
        print(f"❌ Error: No se encontró {files['src']}")

# Cargar JSON existente
with open(json_path, 'r', encoding='utf-8') as f:
    questions = json.load(f)

# Actualizar preguntas existentes (Q29, Q38, Q39)
updated_count = 0
for q in questions:
    if q['id'] in image_map and q['id'] != 81:
        q['has_context_image'] = True
        q['image_path'] = f"assets/images/exam2/{image_map[q['id']]['dest']}"
        updated_count += 1

print(f"Actualizadas {updated_count} preguntas con rutas de imágenes.")

# Agregar Pregunta 81 (La perdida)
q81 = {
    "id": 81,
    "has_context_image": True,
    "image_path": f"assets/images/exam2/{image_map[81]['dest']}",
    "question": "Su empresa ha comprado un nuevo edificio en la misma calle para sus suites ejecutivas. Se le ha pedido que seleccione una antena para AP1, AP2 y AP3 para establecer una conexión inalámbrica dentro del edificio principal para que la usen los visitantes. ¿Cuál de las siguientes es la MEJOR configuración de antena para controlar la propagación de la señal y evitar que la señal inalámbrica se transmita fuera del edificio principal?",
    "options": [
        "5 dB Directional Right for AP1, 5 dB Directional Left for AP2, and 5 dB Omnidirectional for AP3",
        "5 dB Directional Left for AP1, 5 dB Omnidirectional for AP2, and 5 dB Directional Right for AP3",
        "5 dB Omnidirectional for AP1, 5 dB Directional Left for AP2, and 5 dB Directional Right for AP3",
        "5 dB Directional Right for AP1, 5 dB Omnidirectional for AP2, and 5 dB Directional Left for AP3"
    ],
    "answer": "5 dB Directional Right for AP1, 5 dB Omnidirectional for AP2, and 5 dB Directional Left for AP3",
    "explanation": "Mirando el plano, AP1 está en la pared izquierda, AP3 está en la pared derecha y AP2 está en el centro. Para mantener la señal DENTRO del edificio: AP1 debe transmitir hacia la derecha (Directional Right). AP3 debe transmitir hacia la izquierda (Directional Left). AP2, al estar en el centro y rodeado de oficinas, debe cubrir 360 grados (Omnidirectional).",
    "source_reference": "Capítulo 9: Despliegue de Redes Inalámbricas > Tipos de Antenas y Colocación"
}

questions.append(q81)
print("agregada Pregunta 81.")

# Guardar JSON final
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=4)

print(f"✓ JSON Final guardado en {output_path} con {len(questions)} preguntas.")
