import json
import os

file_path = r'c:\Users\DC\Documents\ANTIGRAVITY\CompTIA_Network_Plus_Exam_Book\temp\questions.json'

new_questions = [
    {
        "id": 76,
        "has_context_image": False,
        "question": "En el modelo jerárquico de tres capas, ¿qué capa se encuentra entre las otras dos y es responsable de proporcionar conectividad, así como de facilitar la comunicación entre los diferentes dispositivos de la capa de acceso?",
        "options": [
            "Distribución",
            "Core (Núcleo)",
            "Acceso",
            "Agregación"
        ],
        "answer": "Distribución",
        "explanation": "La capa de Distribución (Distribution) actúa como un puente entre la capa de acceso y la capa central (Core). Es responsable del enrutamiento, el filtrado de paquetes y la comunicación inter-VLAN entre los dispositivos de la capa de acceso antes de enviar el tráfico al núcleo de alta velocidad.",
        "source_reference": "Capítulo 16: Conceptos de Centros de Datos > Modelo Jerárquico"
    },
    {
        "id": 77,
        "has_context_image": False,
        "question": "¿Qué combinación(es) de puerto y protocolo se asocian comúnmente con el Protocolo de Escritorio Remoto (RDP)?",
        "options": [
            "Puerto 5060/5061 - UDP",
            "Puerto 5060/5061 - TCP",
            "Puerto 3389 - TCP",
            "Puerto 3389 - UDP"
        ],
        "answer": "Puerto 3389 - TCP",
        "explanation": "RDP utiliza por defecto el puerto 3389 sobre el protocolo de transporte TCP. Aunque las versiones modernas pueden utilizar UDP para optimizar la transmisión de gráficos y multimedia, TCP sigue siendo el estándar fundamental de conexión para RDP.",
        "source_reference": "Capítulo 5: Servicios y Protocolos de Aplicación IP > Puertos Comunes"
    },
    {
        "id": 78,
        "has_context_image": False,
        "question": "Durante la configuración de un nuevo enlace de fibra óptica entre un router y un switch, observa que no hay conectividad a pesar de que todo el equipo está operativo. ¿Qué paso de resolución de problemas debería considerarse para resolver este problema?",
        "options": [
            "Intercambiar los hilos de fibra en un extremo para corregir una posible desalineación del transmisor y el receptor.",
            "Reemplazar el switch por un modelo superior que soporte tasas de datos más rápidas.",
            "Cambiar la configuración de dúplex en el puerto del switch conectado al router.",
            "Reconfigurar la tabla de enrutamiento del router."
        ],
        "answer": "Intercambiar los hilos de fibra en un extremo para corregir una posible desalineación del transmisor y el receptor.",
        "explanation": "En las conexiones de fibra óptica dúplex (dos hilos), el transmisor (TX) de un extremo debe conectarse al receptor (RX) del otro. Si los hilos están 'rectos' (TX-TX), no habrá enlace. Intercambiar los hilos en un extremo corrige esta desalineación común.",
        "source_reference": "Capítulo 19: Metodología de Resolución de Problemas > Problemas Físicos de Fibra"
    },
    {
        "id": 79,
        "has_context_image": False,
        "question": "Usted está asistiendo a un miembro del equipo de seguridad de Dion Training durante una respuesta a incidentes. El miembro del equipo le pide que determine si se están produciendo conexiones TCP extrañas en una estación de trabajo determinada. Abre el símbolo del sistema en la estación de trabajo. ¿Cuál de las siguientes herramientas le proporcionaría información sobre cualquier conexión TCP establecida actualmente en la estación de trabajo?",
        "options": [
            "route",
            "arp",
            "netstat",
            "tracert"
        ],
        "answer": "netstat",
        "explanation": "La herramienta `netstat` (Network Statistics) muestra todas las conexiones de red activas (TCP y UDP), los puertos en los que el sistema está escuchando y diversas estadísticas de la interfaz, lo cual es vital para identificar conexiones sospechosas durante un incidente.",
        "source_reference": "Capítulo 19: Metodología de Resolución de Problemas > Herramientas de Línea de Comandos"
    },
    {
        "id": 80,
        "has_context_image": False,
        "question": "Timothy, un ingeniero de red, tiene la tarea de resolver un problema de conectividad de red. Necesita determinar qué direcciones MAC están asociadas con cada puerto del switch para identificar la fuente del problema de manera eficiente. ¿Qué comando debería usar Timothy para ver esto en un switch Cisco?",
        "options": [
            "show interface",
            "show config",
            "show mac-address-table",
            "show route"
        ],
        "answer": "show mac-address-table",
        "explanation": "En los dispositivos Cisco, el comando `show mac-address-table` muestra la base de datos de reenvío del switch, vinculando cada dirección MAC aprendida con su puerto físico y VLAN correspondiente.",
        "source_reference": "Capítulo 2: Medios de Red y Dispositivos de Conexión > Operación del Switch"
    },
    {
        "id": 81,
        "has_context_image": False,
        "question": "¿Qué componente de una infraestructura de red sirve como punto de terminación principal para el cableado que proviene de los proveedores de acceso externos?",
        "options": [
            "Router",
            "IDF",
            "MDF",
            "Panel de parcheo (Patch Panel)"
        ],
        "answer": "MDF",
        "explanation": "El MDF (Main Distribution Frame) es el punto central de cableado de un edificio o campus donde terminan los servicios de los proveedores externos (demarc) y se distribuyen a los marcos de distribución intermedios (IDF).",
        "source_reference": "Capítulo 2: Medios de Red y Dispositivos de Conexión > Estructuras de Cableado"
    },
    {
        "id": 82,
        "has_context_image": False,
        "question": "¿Qué es cierto con respecto a los jumbo frames?",
        "options": [
            "Su tamaño de MTU es inferior a 1500",
            "Se utilizan comúnmente con un NAS",
            "Se utilizan comúnmente en una SAN",
            "Se utilizan comúnmente con DHCP"
        ],
        "answer": "Se utilizan comúnmente en una SAN",
        "explanation": "Los jumbo frames son tramas Ethernet con una MTU de más de 1500 bytes (típicamente 9000). Se utilizan en redes de almacenamiento (SAN) e infraestructuras de alto rendimiento para reducir la sobrecarga de la CPU al procesar menos tramas y más grandes para la transferencia de datos masiva.",
        "source_reference": "Capítulo 16: Conceptos de Centros de Datos > Almacenamiento"
    },
    {
        "id": 83,
        "has_context_image": False,
        "question": "Dion Training Solutions quiere migrar su servidor de correo electrónico de una solución local (on-premise) a una solución basada en la web alojada por un proveedor, como Google Workspace o Gmail. ¿Cuál de los siguientes tipos de modelos de nube describe mejor esta solución propuesta?",
        "options": [
            "PaaS",
            "SaaS",
            "DaaS",
            "IaaS"
        ],
        "answer": "SaaS",
        "explanation": "Google Workspace y Gmail son ejemplos clásicos de Software como Servicio (SaaS), donde el usuario accede a una aplicación completa a través de la web sin preocuparse por la infraestructura, el sistema operativo o el mantenimiento del software subyacente.",
        "source_reference": "Capítulo 8: Tecnologías de Nube y Virtualización > Modelos de Servicio"
    },
    {
        "id": 84,
        "has_context_image": False,
        "question": "Usted está conectando un nuevo dispositivo IPv6 a su red, pero sus routers solo soportan protocolos IPv4. ¿Cuál de las siguientes soluciones de direccionamiento IP resolvería este desafío?",
        "options": [
            "APIPA",
            "Túnel Teredo",
            "Privada (Private)",
            "Sin clase (Classless)"
        ],
        "answer": "Túnel Teredo",
        "explanation": "Teredo es una tecnología de transición que permite la conectividad IPv6 para hosts situados detrás de dispositivos NAT que solo manejan IPv4, encapsulando los paquetes IPv6 dentro de datagramas UDP de IPv4.",
        "source_reference": "Capítulo 4: Direccionamiento IPv6 > Tecnologías de Transición"
    },
    {
        "id": 85,
        "has_context_image": False,
        "question": "Un técnico de red en un almacén debe implementar una solución que permita a una empresa rastrear los envíos a medida que entran y salen de la instalación. Los trabajadores del almacén deben escanear cada paquete al entrar en el almacén utilizando un sensor que pueda alcanzar una distancia de hasta 30 cm (1 pie). ¿Cuál de las siguientes tecnologías deberían utilizar para cumplir con estos requisitos?",
        "options": [
            "Bluetooth",
            "RFID",
            "NFC",
            "Wi-Fi"
        ],
        "answer": "RFID",
        "explanation": "RFID (Radio Frequency Identification) es ideal para el rastreo de inventario. A diferencia de NFC (que requiere contacto cercano o menos de 10 cm), RFID puede operar a distancias de 30 cm o mucho más, permitiendo el escaneo rápido de paquetes en movimiento.",
        "source_reference": "Capítulo 9: Tecnologías Inalámbricas > Sensores e IoT"
    },
    {
        "id": 86,
        "has_context_image": False,
        "question": "Dion Training está añadiendo una pequeña sucursal en Filipinas y desea asignarles una parte de su espacio de direcciones IPv4 públicas de Clase C. A Dion Training se le ha asignado un alcance de Clase C de 187.15.3.0/24. La nueva oficina en Filipinas tendrá 8 usuarios que necesitan direcciones IP asignadas. ¿Cuál es la notación CIDR correcta para la sucursal de Filipinas con el fin de acomodar a los 8 usuarios asignando el número mínimo de direcciones?",
        "options": [
            "/27",
            "/29",
            "/26",
            "/28"
        ],
        "answer": "/28",
        "explanation": "Para 8 usuarios, necesitamos un mínimo de 10 direcciones (8 para hosts + ID de red + Broadcast). Una máscara /29 proporciona solo 8 direcciones totales (6 útiles), lo cual es insuficiente. La siguiente opción es /28, que proporciona 16 direcciones totales (14 útiles), siendo el mínimo necesario para acomodar a los 8 usuarios.",
        "source_reference": "Capítulo 6: Direccionamiento IPv4 y Subredes > Diseño de Subredes"
    },
    {
        "id": 87,
        "has_context_image": False,
        "question": "¿Qué tipo de configuración de VPN cliente-a-sitio permite a los usuarios acceder de forma remota a los recursos corporativos sin requerir la instalación de software VPN dedicado local?",
        "options": [
            "SSL VPN",
            "IPsec VPN",
            "PPTP VPN",
            "VPN sin cliente (Clientless VPN)"
        ],
        "answer": "VPN sin cliente (Clientless VPN)",
        "explanation": "Una VPN sin cliente (típicamente basada en SSL/TLS) permite a los usuarios establecer un túnel seguro utilizando únicamente un navegador web estándar, eliminando la necesidad de gestionar e instalar software cliente pesado en los dispositivos de los usuarios.",
        "source_reference": "Capítulo 18: Fortalecimiento y Defensa de la Red > Tecnologías VPN"
    },
    {
        "id": 88,
        "has_context_image": False,
        "question": "Robin, una administradora de red, está realizando una auditoría rutinaria de la infraestructura de red. ¿Cuál de los siguientes se consideraría parte del inventario de hardware que ella necesitaría documentar?",
        "options": [
            "La lista de aplicaciones instaladas en cada estación de trabajo",
            "Las configuraciones de las listas de control de acceso en el firewall",
            "La marca, el modelo y el número de serie de todos los switches de red",
            "Las versiones del sistema operativo instaladas en todos los servidores"
        ],
        "answer": "La marca, el modelo y el número de serie de todos los switches de red",
        "explanation": "Un inventario de hardware se centra en los activos físicos. La marca, el modelo y el número de serie de los dispositivos de red (como los switches) son datos fundamentales de este inventario, a diferencia de las aplicaciones o SO que forman parte del inventario de software o configuraciones.",
        "source_reference": "Capítulo 13: Procedimientos Operativos > Documentación de Activos (Asset Management)"
    },
    {
        "id": 89,
        "has_context_image": False,
        "question": "La controladora RAID de un servidor falló y fue reemplazada por una de una marca diferente. ¿Qué se necesitará después de que el servidor haya sido reconstruido y unido al dominio?",
        "options": [
            "Copias de seguridad recientes",
            "Documentación del proveedor",
            "Dirección IP estática",
            "Diagrama de red física"
        ],
        "answer": "Copias de seguridad recientes",
        "explanation": "Las configuraciones de RAID suelen ser propietarias y no son compatibles entre diferentes marcas de controladoras. Al cambiar la controladora por otra marca, es muy probable que los datos existentes se pierdan o no se reconozcan, haciendo que las copias de seguridad (backups) sean esenciales para restaurar el servicio.",
        "source_reference": "Capítulo 14: Continuidad del Negocio y Recuperación ante Desastres > RAID y Recuperación"
    },
    {
        "id": 90,
        "has_context_image": False,
        "question": "¿Cuál de los siguientes tipos de documentación de red incluiría etiquetas para indicar qué cables están conectados a qué puertos en un switch de borde?",
        "options": [
            "Diagrama de cableado (Wiring diagram)",
            "Informe de levantamiento del sitio (Site survey)",
            "Diagrama de red física",
            "Diagrama de red lógica"
        ],
        "answer": "Diagrama de cableado (Wiring diagram)",
        "explanation": "Un diagrama de cableado (o esquema de parcheo) detalla la conectividad punto a punto de los cables físicos, incluyendo etiquetas de cables y asignaciones específicas de puertos en los paneles de parcheo y switches, permitiendo un mantenimiento y resolución de problemas físicos eficientes.",
        "source_reference": "Capítulo 13: Procedimientos Operativos > Diagramas de Red"
    }
]

with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Ensure no duplicates if re-run
existing_ids = {q['id'] for q in data}
added_count = 0
for q in new_questions:
    if q['id'] not in existing_ids:
        data.append(q)
        added_count += 1

with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

print(f"Successfully added {added_count} questions. Total questions: {len(data)}")
