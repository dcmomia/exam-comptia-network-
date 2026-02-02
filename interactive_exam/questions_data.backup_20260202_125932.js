// Auto-generated from source JSON files
// Generated: 2026-02-02T12:57:40.211055

var EXAMS_DATABASE = {
  "network_plus_exam_1": {
    "id": "network_plus_exam_1",
    "title": "CompTIA Network+ - Examen 1",
    "version": "v3.1.3",
    "questions": [
      {
        "id": 1,
        "has_context_image": false,
        "question": "¿Cuál es el SIGUIENTE paso en la metodología de resolución de problemas después de que un técnico ha probado una teoría para determinar la causa y la teoría ha sido confirmada?",
        "options": [
          "Documentar hallazgos, acciones y resultados.",
          "Identificar el problema.",
          "Establecer un plan de acción para resolver el problema e identificar efectos potenciales.",
          "Verificar la funcionalidad completa del sistema y, si corresponde, implementar medidas preventivas."
        ],
        "answer": "Establecer un plan de acción para resolver el problema e identificar efectos potenciales.",
        "explanation": "De acuerdo con la metodología de resolución de problemas de CompTIA (7 pasos), una vez que se ha probado y confirmado la teoría (Paso 3), el siguiente paso es el Paso 4: Establecer un plan de acción para resolver el problema e identificar los efectos potenciales. Esto asegura que la solución se aplique de manera estructurada y se consideren las repercusiones en el resto de la red.",
        "source_reference": "Capítulo 19: Troubleshooting > Metodología de Resolución de Problemas (7 Pasos)"
      },
      {
        "id": 2,
        "has_context_image": false,
        "question": "¿Qué nivel de severidad de Syslog corresponde al valor 0?",
        "options": [
          "Alerta (Alert)",
          "Crítico (Critical)",
          "Emergencia (Emergency)",
          "Error"
        ],
        "answer": "Emergencia (Emergency)",
        "explanation": "El estándar Syslog define ocho niveles de severidad (0-7). El nivel 0 es 'Emergencia' (Emergency), indicando que el sistema es inestable o inutilizable. Es el nivel más crítico de todos los mensajes de registro.",
        "source_reference": "Capítulo 12: Monitoreo > Monitoreo y Syslog"
      },
      {
        "id": 3,
        "has_context_image": false,
        "question": "Steven tiene la tarea de rediseñar la red de una oficina pequeña y debe elegir entre diferentes tamaños de rack para alojar un nuevo servidor, un switch de red y un panel de parcheo. ¿Qué es lo más crítico que Steven debe considerar para asegurar que todo el equipo esté alojado adecuadamente y que sea posible una expansión futura?",
        "options": [
          "La disponibilidad de soluciones de gestión de cables integradas en el rack.",
          "La proximidad del rack al suministro eléctrico principal de la oficina.",
          "El diseño estético del rack para asegurar que combine con la decoración de la oficina.",
          "La capacidad de carga (peso) del rack para asegurar que pueda soportar el equipo."
        ],
        "answer": "La capacidad de carga (peso) del rack para asegurar que pueda soportar el equipo.",
        "explanation": "La capacidad de carga es el factor de seguridad y estructural más crítico al alojar equipos pesados como servidores en un centro de datos o armario de cableado. Un fallo en la integridad estructural del rack puede comprometer todo el hardware y la seguridad física del personal.",
        "source_reference": "Capítulo 10: Instalaciones Físicas > Organización de Racks"
      },
      {
        "id": 4,
        "has_context_image": false,
        "question": "¿Qué definición representa mejor un Mapa de Calor (Heat-Map) de red?",
        "options": [
          "Un diagrama que muestra la disposición física de los dispositivos de red.",
          "Una representación gráfica que indica áreas de alta y baja actividad o rendimiento de la red (intensidad de señal).",
          "Una representación visual del flujo de corriente eléctrica en una red.",
          "Un gráfico que ilustra las variaciones de temperatura en la red de un centro de datos que podrían afectar la infraestructura."
        ],
        "answer": "Una representación gráfica que indica áreas de alta y baja actividad o rendimiento de la red (intensidad de señal).",
        "explanation": "Un Mapa de Calor (Heat-Map) inalámbrico es una herramienta de visualización que muestra la cobertura y la intensidad de la señal de radiofrecuencia (RF) en un área geográfica. Se utiliza comúnmente durante los 'site surveys' para identificar zonas muertas e interferencias.",
        "source_reference": "Capítulo 9: Wireless > Arquitectura Wireless"
      },
      {
        "id": 5,
        "has_context_image": false,
        "question": "Un técnico está configurando un laboratorio de computación para estudiantes. Las computadoras deben poder comunicarse entre sí en la red interna, pero los estudiantes no deben poder acceder a Internet. La arquitectura de red está segmentada usando un firewall de tres patas (triple-homed) con las siguientes zonas:\n\n- PUBLIC (Público), eth0, 66.13.24.16/30\n- INSTRUCTORS (Instructores), eth1, 172.16.1.1/24\n- STUDENTS (Estudiantes), eth2, 192.168.1.1/24\n\n¿Qué regla en el firewall debería configurar el técnico para evitar que los estudiantes accedan a Internet?",
        "options": [
          "Denegar todo el tráfico de eth1 a eth0",
          "Denegar todo el tráfico de eth0 a eth2",
          "Denegar todo el tráfico de eth2 a eth1",
          "Denegar todo el tráfico de eth2 a eth0"
        ],
        "answer": "Denegar todo el tráfico de eth2 a eth0",
        "explanation": "Para evitar que la zona de estudiantes (eth2) acceda a la red pública/Internet (eth0), se debe configurar una regla de firewall que bloquee explícitamente el tráfico saliente desde eth2 hacia la interfaz conectada al ISP (eth0). El tráfico interno entre estudiantes en eth2 no se ve afectado ya que no pasa por el firewall para comunicarse dentro de la misma subred.",
        "source_reference": "Capítulo 18: Defensa de la Red > Zonas de Seguridad (Networking)"
      },
      {
        "id": 6,
        "has_context_image": false,
        "question": "Su organización está desplegando una nueva aplicación web alojada en una infraestructura en la nube escalable. Para asegurar que los usuarios sean dirigidos a la dirección IP correcta para acceder de la aplicación, ¿qué tipo de registro DNS debería usarse para mapear el nombre de dominio a la dirección IPv4 del servidor web?",
        "options": [
          "MX",
          "CNAME",
          "A",
          "TXT"
        ],
        "answer": "A",
        "explanation": "El registro A (Address) se utiliza para mapear un nombre de dominio (FQDN) a una dirección IPv4 específica. Es el registro fundamental para dirigir el tráfico web a un servidor.",
        "source_reference": "Capítulo 5: Medios y Topologías > Servicios de Nombres (DNS)"
      },
      {
        "id": 7,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes términos representa la cantidad máxima de tiempo que una organización está dispuesta a estar fuera de línea antes de que tenga consecuencias indeseables para la organización?",
        "options": [
          "MTTR",
          "RPO",
          "MTBF",
          "RTO"
        ],
        "answer": "RTO",
        "explanation": "El RTO (Recovery Time Objective) es el objetivo de tiempo de recuperación, que define el periodo de tiempo máximo tolerable que un servicio puede estar inactivo tras un desastre.",
        "source_reference": "Capítulo 20: Problemas Físicos > Métricas de Resiliencia (RTO/RPO)"
      },
      {
        "id": 8,
        "has_context_image": false,
        "question": "¿Cuál de las siguientes describe mejor la importancia de gestionar las licencias de software dentro de la red de una organización?",
        "options": [
          "Asegurar el uso legal del software y evitar sanciones por incumplimiento.",
          "Facilitar el acceso remoto para usuarios que trabajan fuera de la oficina y asegurar que reciban el mismo software que los empleados presenciales.",
          "Mantener la seguridad de la infraestructura de red y sus dispositivos.",
          "Proporcionar un suministro de energía constante e ininterrumpido a todos los dispositivos de red registrados."
        ],
        "answer": "Asegurar el uso legal del software y evitar sanciones por incumplimiento.",
        "explanation": "La gestión de licencias asegura que el software se use de acuerdo con los términos legales, evitando riesgos financieros y legales por auditorías o uso no autorizado.",
        "source_reference": "Capítulo 15: Acceso Remoto > Documentación y Gestión de Activos"
      },
      {
        "id": 9,
        "has_context_image": false,
        "question": "¿Cuál de las siguientes infraestructuras de nube incluye servidores locales que utilizan un servidor Syslog centralizado alojado en una organización de terceros para revisar los registros?",
        "options": [
          "Comunitaria (Community)",
          "Privada (Private)",
          "Híbrida (Hybrid)",
          "Pública (Public)"
        ],
        "answer": "Híbrida (Hybrid)",
        "explanation": "Una nube híbrida combina infraestructura propia (on-premise) con servicios de terceros o nubes públicas/comunitarias. En este escenario, la conexión entre el servidor local y el servicio externo de Syslog define un modelo híbrido.",
        "source_reference": "Capítulo 8: Switches y VLANs > Entornos Cloud"
      },
      {
        "id": 10,
        "has_context_image": false,
        "question": "Shannon es una administradora de red que está resolviendo un problema de conectividad desde su estación de trabajo a un servidor remoto. Necesita identificar la ruta que toma el tráfico a través de la red para llegar al servidor e identificar dónde están ocurriendo los posibles fallos. ¿Qué herramienta debería usar para mostrar la ruta y medir los retrasos de tránsito de los paquetes a través de una red IP?",
        "options": [
          "traceroute/tracert",
          "dig",
          "nslookup",
          "tcpdump"
        ],
        "answer": "traceroute/tracert",
        "explanation": "La herramienta traceroute (Linux/macOS) o tracert (Windows) se utiliza para rastrear el camino de los paquetes y mostrar cada salto (router) en la ruta, indicando la latencia en cada punto.",
        "source_reference": "Capítulo 19: Troubleshooting > Herramientas de Línea de Comandos"
      },
      {
        "id": 11,
        "has_context_image": false,
        "question": "La sede corporativa de su empresa proporcionó a su sucursal una parte de su subred Clase C para usar en una nueva ubicación de oficina. Debe asignar el número mínimo de direcciones usando la notación CIDR para acomodar las necesidades de cada departamento. ¿Cuál es la notación CIDR correcta para la subred del departamento de Finanzas, que requiere 32 dispositivos?",
        "options": [
          "/28",
          "/30",
          "/26",
          "/29",
          "/25",
          "/27"
        ],
        "answer": "/26",
        "explanation": "Para 32 dispositivos, necesitamos una subred que pueda alojar al menos 34 direcciones (32 dispositivos + ID de red + Broadcast). Una máscara /27 ofrece 30 direcciones útiles (insuficiente), mientras que una /26 ofrece 62 direcciones útiles, siendo la opción mínima viable.",
        "source_reference": "Capítulo 4: Puertos y Protocolos > Direccionamiento IP y Subnetting"
      },
      {
        "id": 12,
        "has_context_image": false,
        "question": "El propósito del balanceo de carga (load balancing) en relación con las redes?",
        "options": [
          "Distribuir el tráfico de red de manera uniforme entre múltiples servidores.",
          "Reducir el número de dispositivos de red en uso.",
          "Asegurar los datos de la red contra accesos no autorizados.",
          "Aumentar la velocidad de las conexiones de red individuales."
        ],
        "answer": "Distribuir el tráfico de red de manera uniforme entre múltiples servidores.",
        "explanation": "El balanceo de carga optimiza el uso de recursos, maximiza el rendimiento y evita la sobrecarga de un solo servidor al distribuir las peticiones entre varios nodos.",
        "source_reference": "Capítulo 8: Switches y VLANs > Tecnologías de Disponibilidad"
      },
      {
        "id": 13,
        "has_context_image": false,
        "question": "Está escaneando un objetivo como parte de una prueba de penetración. Descubrió que la red utiliza Snort configurado como un IDS basado en red. ¿Cuál de los siguientes ocurre cuando se coincide con una regla de alerta en Snort durante su escaneo?",
        "options": [
          "El paquete que coincide con la regla será descartado y el IDS continuará escaneando nuevos paquetes.",
          "El IDS enviará una alerta, dejará de verificar el resto de las reglas y permitirá que el paquete continúe su viaje.",
          "La dirección IP de origen será bloqueada y su conexión con la red terminada.",
          "Todo el paquete será evaluado hasta que se hayan verificado todas las reglas de alerta del IDS y se permita que el paquete continúe su viaje."
        ],
        "answer": "El IDS enviará una alerta, dejará de verificar el resto de las reglas y permitirá que el paquete continúe su viaje.",
        "explanation": "En un IDS (Sistema de Detección de Intrusiones), a diferencia de un IPS, la acción de 'alerta' simplemente notifica la coincidencia sin bloquear el tráfico. En Snort, una vez que una regla coincide y genera una alerta, el procesamiento de ese paquete suele detenerse para esa cadena de reglas y se permite el paso del tráfico.",
        "source_reference": "Capítulo 17: Amenazas y Ataques > Sistemas de Seguridad de Red"
      },
      {
        "id": 14,
        "has_context_image": false,
        "question": "Bethany, una administradora de red, quiere asegurar que las direcciones IP no queden reservadas indefinidamente por dispositivos que ya no están activos en la red. ¿Qué característica de DHCP permitiría a un administrador controlar el periodo que un dispositivo puede usar una dirección IP asignada?",
        "options": [
          "Exclusiones",
          "Tiempo de Distribución (Lease Time)",
          "Opciones",
          "Ámbito (Scope)"
        ],
        "answer": "Tiempo de Distribución (Lease Time)",
        "explanation": "El Lease Time o Tiempo de Concesión define cuánto tiempo un cliente puede usar una dirección IP antes de tener que renovarla o devolverla al pool.",
        "source_reference": "Capítulo 4: Puertos y Protocolos > Implementación de DHCP"
      },
      {
        "id": 15,
        "has_context_image": false,
        "question": "En entornos de nube, ¿qué opción está diseñada específicamente para permitir el acceso a Internet para los recursos dentro de una VPC sin exponerlos directamente a Internet?",
        "options": [
          "NAT Gateway",
          "Direct Connect Gateway",
          "Internet Gateway",
          "VPN Gateway"
        ],
        "answer": "NAT Gateway",
        "explanation": "Una NAT Gateway permite que instancias en una subred privada se conecten a Internet (para actualizaciones, etc.) pero evita que Internet inicie conexiones directas con esas instancias.",
        "source_reference": "Capítulo 8: Switches y VLANs > Servicios Cloud"
      },
      {
        "id": 16,
        "has_context_image": false,
        "question": "Durante una evaluación de red rutinaria, Barbara, una técnica, nota que en ciertas áreas de la oficina, los dispositivos inalámbricos pierden la conexión a la red frecuentemente. Esto ocurre a pesar de que se ha confirmado que la red inalámbrica está operativa. ¿Cuál es la razón MÁS probable de este suceso?",
        "options": [
          "Problemas de desasociación del cliente",
          "Degradación o pérdida de señal",
          "Cobertura inalámbrica insuficiente",
          "Mala configuración de roaming"
        ],
        "answer": "Cobertura inalámbrica insuficiente",
        "explanation": "La pérdida frecuente de conexión en áreas específicas suele ser síntoma de 'zonas muertas' o cobertura insuficiente debido a la distancia de los puntos de acceso o interferencias físicas.",
        "source_reference": "Capítulo 9: Wireless > Instalación de Wireless"
      },
      {
        "id": 17,
        "has_context_image": false,
        "question": "¿Cuál de las siguientes es el orden correcto de los conectores de fibra mostrados en la imagen? [ST, SC, LC(Simple), LC(Dúplex), FC]",
        "options": [
          "LC (single), LC (duplex), FC, ST, SC",
          "ST, SC, LC(single), LC(duplex), FC",
          "SC, ST, FC, LC (single), LC (duplex)",
          "FC, LC (single), LC(duplex), SC, ST"
        ],
        "answer": "ST, SC, LC(single), LC(duplex), FC",
        "explanation": "La imagen muestra secuencialmente el conector ST (redondo con bayoneta), SC (cuadrado 'push-pull'), LC Simple, LC Dúplex y FC (roscado).",
        "source_reference": "Capítulo 2: Hardware de Red > Cables y Conectores de Fibra"
      },
      {
        "id": 18,
        "has_context_image": false,
        "question": "Un analista revisa una configuración de firewall de tres patas (triple-homed) que se conecta a Internet, a una red privada y a otra red adicional. ¿Cuál de las siguientes describiría mejor la tercera red conectada a este firewall?",
        "options": [
          "NIDS",
          "GPO",
          "DMZ",
          "Subred (Subnet)"
        ],
        "answer": "DMZ",
        "explanation": "En una configuración de firewall triple-homed, las tres interfaces suelen ser: 1. Internet (Ext), 2. Red Privada (Int) y 3. DMZ (Zona Desmilitarizada) para servicios públicos aislados.",
        "source_reference": "Capítulo 18: Defensa de la Red > Zonas de Seguridad (Networking)"
      },
      {
        "id": 19,
        "has_context_image": false,
        "question": "Durante la configuración de un nuevo piso de oficinas, Dorothy, una administradora de red, configura puertos en un switch para conectar teléfonos VoIP y estaciones de trabajo. Quiere asegurar que el tráfico de voz tenga prioridad sobre el tráfico de datos. ¿Cuál de las siguientes configuraciones debería usar Dorothy para lograr esto de la MEJOR manera?",
        "options": [
          "Configurar la VLAN de voz en los puertos del switch donde se conectan los teléfonos VoIP.",
          "Configurar QoS para priorizar la VLAN 100 sobre la VLAN 200.",
          "Establecer la VLAN nativa en 200 para voz y la VLAN 100 para datos.",
          "Habilitar la agregación de enlaces en los puertos conectados a los teléfonos VoIP."
        ],
        "answer": "Configurar la VLAN de voz en los puertos del switch donde se conectan los teléfonos VoIP.",
        "explanation": "La configuración de una 'Voice VLAN' permite al switch identificar el tráfico de voz y aplicarle automáticamente etiquetas de prioridad (802.1Q/p) sobre el tráfico de datos en el mismo puerto.",
        "source_reference": "Capítulo 7: Enrutamiento > Configuración de VLANs"
      },
      {
        "id": 20,
        "has_context_image": false,
        "question": "Jake, un administrador de sistemas, nota que los usuarios están experimentando una alta latencia al acceder a las aplicaciones basadas en la nube de la empresa. Quiere reducir la latencia para mejorar la experiencia del usuario. De las siguientes opciones, ¿qué acción debería tomar Jake para lograr este objetivo de la mejor manera?",
        "options": [
          "Optimizar las rutas de enrutamiento",
          "Implementar modelado de tráfico (traffic shaping)",
          "Agregar más servidores de almacenamiento",
          "Aumentar el ancho de banda de la red"
        ],
        "answer": "Optimizar las rutas de enrutamiento",
        "explanation": "La latencia en servicios en la nube a menudo depende del camino que toman los paquetes. Optimizar el enrutamiento (ej: usando CloudFront, Global Accelerator o Direct Connect) reduce los saltos y la demora geográfica.",
        "source_reference": "Capítulo 8: Switches y VLANs > Métricas de Desempeño"
      },
      {
        "id": 21,
        "has_context_image": false,
        "question": "Rowan, un administrador de red, está configurando una red inalámbrica para una oficina corporativa grande con múltiples pisos. El diseño de la oficina requiere el despliegue de varios puntos de acceso inalámbricos para asegurar una cobertura completa. Para simplificar la red inalámbrica para los usuarios finales, deciden usar un único nombre de red para toda la oficina. ¿Por qué Rowan usaría un Identificador de Conjunto de Servicios Extendido (ESSID) en este escenario?",
        "options": [
          "Para permitir que los dispositivos inalámbricos realicen un roaming fluido entre diferentes puntos de acceso sin necesidad de reconectarse.",
          "Para cifrar los datos transmitidos sobre la red inalámbrica para mejorar la seguridad.",
          "Para limitar el ancho de banda que cada usuario puede consumir, asegurando un uso justo de los recursos de la red.",
          "Para crear un identificador único para cada punto de acceso inalámbrico para evitar interferencias entre ellos."
        ],
        "answer": "Para permitir que los dispositivos inalámbricos realicen un roaming fluido entre diferentes puntos de acceso sin necesidad de reconectarse.",
        "explanation": "Un ESSID agrupa múltiples puntos de acceso bajo un mismo nombre, permitiendo que el cliente cambie de AP (Roaming) de forma transparente mientras se mueve por el edificio.",
        "source_reference": "Capítulo 9: Wireless > ESSID"
      },
      {
        "id": 22,
        "has_context_image": false,
        "question": "Está realizando una prueba de penetración inalámbrica contra una red habilitada con WPS. ¿Cuál de los siguientes tipos de ataques de contraseña debería realizar contra los dos PINs de WPS de 4 dígitos?",
        "options": [
          "Fuerza bruta (Brute-force)",
          "Híbrido",
          "Diccionario",
          "Spraying"
        ],
        "answer": "Fuerza bruta (Brute-force)",
        "explanation": "El protocolo WPS es vulnerable a ataques de fuerza bruta debido a que el PIN de 8 dígitos se divide en dos mitades de 4 dígitos, lo que reduce drásticamente las combinaciones posibles a probar.",
        "source_reference": "Capítulo 16: Fundamentos de Seguridad > Vulnerabilidades de Seguridad"
      },
      {
        "id": 23,
        "has_context_image": false,
        "question": "Un usuario no puede acceder a páginas web en Internet a pesar de estar conectado a la red de la empresa. Ha verificado que están conectados a la red/SSID adecuada. De las siguientes, ¿cuál sería la causa más probable de este problema?",
        "options": [
          "Servidor DNS lento",
          "Cable Ethernet obsoleto",
          "Dirección IP expirada",
          "Puerta de enlace predeterminada incorrecta"
        ],
        "answer": "Puerta de enlace predeterminada incorrecta",
        "explanation": "Si el usuario está en la red interna pero no sale a Internet, la configuración de la puerta de enlace (Gateway) es el primer punto de fallo lógico, ya que es el dispositivo encargado de enrutar el tráfico fuera de la subred local.",
        "source_reference": "Capítulo 19: Troubleshooting > Configuración de Red"
      },
      {
        "id": 24,
        "has_context_image": false,
        "question": "Un técnico está resolviendo problemas en una estación de trabajo en Dion Training. La estación de trabajo sufre problemas de conectividad intermitente. El técnico nota que los pares de cables STP no están completamente trenzados cerca del conector. ¿Cuál de los siguientes problemas se puede experimentar debido a esto?",
        "options": [
          "Desajuste 568A/568B",
          "Par dividido (Split pair)",
          "Crosstalk (Diafonía)",
          "Inversión Tx/Rx"
        ],
        "answer": "Crosstalk (Diafonía)",
        "explanation": "El trenzado de los cables existe específicamente para cancelar la interferencia electromagnética entre pares. Si se deshace el trenzado (untwisting) cerca del conector, se produce diafonía o crosstalk, degradando la señal.",
        "source_reference": "Capítulo 2: Hardware de Red > Categorías de Cable de Cobre"
      },
      {
        "id": 25,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes se utiliza para eliminar el calor de los servidores y equipos de red dentro de un centro de datos?",
        "options": [
          "PDU",
          "UPS",
          "Generador",
          "HVAC"
        ],
        "answer": "HVAC",
        "explanation": "Los sistemas HVAC (Calefacción, Ventilación y Aire Acondicionado) son los responsables de mantener la temperatura y humedad adecuadas en el centro de datos mediante la extracción de calor.",
        "source_reference": "Capítulo 10: Instalaciones Físicas > Instalaciones Físicas"
      },
      {
        "id": 26,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes tipos de cable se utiliza para aplicaciones de alta velocidad y muy corto alcance, como en cables SATA 3.0 e interconexiones (uplinks) entre dos switches en el mismo rack?",
        "options": [
          "Fibra óptica",
          "Par trenzado (Twisted pair)",
          "Twinaxial",
          "Coaxial"
        ],
        "answer": "Twinaxial",
        "explanation": "El cable Twinaxial (o DAC - Direct Attach Copper) es ideal para distancias muy cortas (generalmente menos de 7-10 metros) en centros de datos para conectar switches y servidores a alta velocidad de forma económica.",
        "source_reference": "Capítulo 2: Hardware de Red > Cables de Cobre Directos y Cruzados"
      },
      {
        "id": 27,
        "has_context_image": false,
        "question": "Al llegar al trabajo hoy, vio un mensaje en la pantalla de su computadora indicando que su disco duro ha sido cifrado y que debe pagar 1 ETH para obtener la clave de descifrado. ¿Qué tipo de ataque ha ocurrido contra su estación de trabajo?",
        "options": [
          "Ransomware",
          "Phishing",
          "Fuerza bruta (Brute-force)",
          "Malware"
        ],
        "answer": "Ransomware",
        "explanation": "El Ransomware es un tipo de malware que cifra los archivos del usuario y exige un rescate (generalmente en criptomonedas) para restaurar el acceso a los datos.",
        "source_reference": "Capítulo 16: Fundamentos de Seguridad > Malware"
      },
      {
        "id": 28,
        "has_context_image": false,
        "question": "Herbert está configurando el Wi-Fi para un campus universitario. La red necesita soportar un gran número de usuarios, con credenciales individuales para estudiantes y personal para asegurar la seguridad y la manejabilidad. ¿Qué método de seguridad Wi-Fi es MÁS probable que implemente Herbert y por qué?",
        "options": [
          "Pre-shared key (PSK), porque permite una gestión fácil de grandes grupos de usuarios con una sola contraseña compartida.",
          "Enterprise, porque simplifica el proceso de gestión de contraseñas usando la misma contraseña para todos los usuarios.",
          "Pre-shared key (PSK), porque ofrece un mayor nivel de cifrado, que es necesario para redes grandes.",
          "Enterprise, porque admite la autenticación individual, lo que lo hace ideal para entornos con muchos usuarios."
        ],
        "answer": "Enterprise, porque admite la autenticación individual, lo que lo hace ideal para entornos con muchos usuarios.",
        "explanation": "WPA2/WPA3 Enterprise utiliza un servidor RADIUS para autenticar a cada usuario de forma individual (usando 802.1X), lo cual es esencial en entornos grandes para revocar accesos sin cambiar la clave a todos.",
        "source_reference": "Capítulo 17: Amenazas y Ataques > Seguridad Inalámbrica"
      },
      {
        "id": 29,
        "has_context_image": false,
        "question": "Un técnico de red necesita conectar dos switches. El técnico necesita un enlace entre ellos que sea capaz de manejar 10 Gbps de rendimiento (throughput). ¿Cuál de los siguientes medios cumpliría MEJOR con este requisito?",
        "options": [
          "Cable Cat 3",
          "Cable Coaxial",
          "Cable Cat 5e",
          "Cable de fibra óptica"
        ],
        "answer": "Cable de fibra óptica",
        "explanation": "Aunque el cobre (Cat 6A/7) puede manejar 10 Gbps, la fibra óptica es el medio preferido y más confiable para interconectar switches (uplinks) a estas velocidades, especialmente en distancias largas o entornos con interferencias.",
        "source_reference": "Capítulo 2: Hardware de Red > Cables de Fibra Óptica"
      },
      {
        "id": 30,
        "has_context_image": false,
        "question": "¿Cuál es el propósito principal de implementar la agregación de enlaces (link aggregation) en un switch de red?",
        "options": [
          "Mejorar la seguridad de la red cifrando los datos a través de múltiples enlaces físicos.",
          "Distribuir el tráfico de red de manera uniforme a través de todas las rutas disponibles en una topología de red.",
          "Crear un único enlace lógico con más ancho de banda combinando múltiples enlaces físicos.",
          "Disminuir el número de dominios de difusión (broadcast) en una red combinando VLANs."
        ],
        "answer": "Crear un único enlace lógico con más ancho de banda combinando múltiples enlaces físicos.",
        "explanation": "La agregación de enlaces (LACP/EtherChannel) combina varios puertos físicos en una sola interfaz lógica, proporcionando mayor ancho de banda total y redundancia.",
        "source_reference": "Capítulo 8: Switches y VLANs > EtherChannel y Agregación"
      },
      {
        "id": 31,
        "has_context_image": false,
        "question": "Un técnico está resolviendo problemas en un WAP recién instalado que está perdiendo conexiones de forma esporádica con los dispositivos en la red. ¿Cuál de los siguientes debería verificar el técnico PRIMERO durante la resolución de problemas?",
        "options": [
          "Tipo de cifrado",
          "Saturación del ancho de banda",
          "SSID del WAP",
          "Ubicación del WAP (Placement)"
        ],
        "answer": "Ubicación del WAP (Placement)",
        "explanation": "En una instalación nueva, la ubicación física es el factor más crítico. Obstáculos, interferencias de otros dispositivos o una mala planificación de celdas suelen ser la causa principal de conexiones inestables.",
        "source_reference": "Capítulo 9: Wireless > Despliegue de APs"
      },
      {
        "id": 32,
        "has_context_image": false,
        "question": "Está configurando puertos de enlace (uplink) para que múltiples switches se comuniquen entre sí. Todas las VLANs deben comunicarse desde el switch de servidor designado. ¿Cuál de los siguientes debería configurarse en los puertos troncales (trunk) si la VLAN 1 no es la VLAN de gestión?",
        "options": [
          "802.1x",
          "802.1d",
          "802.1q",
          "802.1af"
        ],
        "answer": "802.1q",
        "explanation": "El estándar IEEE 802.1Q es el protocolo de 'tagging' utilizado para permitir que múltiples VLANs viajen a través de un mismo enlace troncal entre switches.",
        "source_reference": "Capítulo 7: Enrutamiento > Enlaces Troncales"
      },
      {
        "id": 33,
        "has_context_image": false,
        "question": "Mientras Darren está trabajando en la instalación de nuevos cables para la transmisión de datos de su red local que corren junto a los cables actuales. Después de instalarlos, nota que hay una disminución notable en la calidad de la señal, resultando en errores y pérdida de paquetes. ¿Cuál podría ser la causa principal de esta degradación de la señal?",
        "options": [
          "Congestión",
          "Jitter",
          "Sobrecarga",
          "Crosstalk (Diafonía)"
        ],
        "answer": "Crosstalk (Diafonía)",
        "explanation": "El Crosstalk ocurre cuando la señal de un cable interfiere con otro cable adyacente debido a la proximidad física, especialmente si no están adecuadamente blindados o trenzados.",
        "source_reference": "Capítulo 2: Hardware de Red > Solución de Problemas de Cobre"
      },
      {
        "id": 34,
        "has_context_image": false,
        "question": "Dion Training cree que puede haber un dispositivo no autorizado (rogue device) conectado a su red. Le han pedido que identifique cada host, servidor y router actualmente conectado a la red. ¿Cuál de las siguientes herramientas le permitiría identificar qué dispositivos están conectados actualmente a la red?",
        "options": [
          "Analizador de protocolos",
          "Analizador de NetFlow",
          "Escáner de IP (IP scanner)",
          "Escáner de puertos"
        ],
        "answer": "Escáner de IP (IP scanner)",
        "explanation": "Un escáner de IP recorre un rango de direcciones y utiliza ICMP (ping) o ARP para descubrir qué dispositivos están activos y respondiendo en la red en un momento dado.",
        "source_reference": "Capítulo 12: Monitoreo > Detección de Red"
      },
      {
        "id": 35,
        "has_context_image": false,
        "question": "¿Qué mecanismo permite la notificación proactiva de eventos de red y facilita el monitoreo y la resolución de problemas eficientes en la gestión de red?",
        "options": [
          "SMTP",
          "HTTP",
          "SNMP",
          "ICMP"
        ],
        "answer": "SNMP",
        "explanation": "SNMP (Simple Network Management Protocol) utiliza 'traps' o notificaciones proactivas para informar al administrador sobre fallos o eventos específicos en los dispositivos de red de forma automática.",
        "source_reference": "Capítulo 12: Monitoreo > Protocolos de Monitoreo"
      },
      {
        "id": 36,
        "has_context_image": false,
        "question": "Un técnico de red necesita monitorear la red para encontrar a un usuario que está navegando en sitios web que van en contra de la política de uso aceptable de la empresa. ¿Qué debería usar el técnico para ver el sitio web y encontrar al usuario que lo está navegando?",
        "options": [
          "Herramienta de 'top listener'",
          "SNMP GET",
          "Packet sniffer (Analizador de paquetes)",
          "Sistema de detección de intrusiones (IDS)"
        ],
        "answer": "Packet sniffer (Analizador de paquetes)",
        "explanation": "Un packet sniffer (o analizador de protocolos como Wireshark) permite capturar y ver el contenido detallado del tráfico de red, incluyendo las URLs y las direcciones IP de origen, lo que facilita identificar al usuario y el sitio visitado.",
        "source_reference": "Capítulo 12: Monitoreo > Captura de Paquetes"
      },
      {
        "id": 37,
        "has_context_image": true,
        "question": "(Esta es una pregunta simulada basada en el desempeño). Un usuario doméstico realiza una prueba de velocidad usando SpeedTest.net y recibe el siguiente reporte: Ping 13ms, Descarga 99.79 Mbps, Carga 116.61 Mbps. ¿Cuál de las siguientes es una interpretación correcta de estos resultados?",
        "options": [
          "La PC del usuario descarga información más rápido de lo que la sube porque tiene una conexión asincrónica.",
          "La PC del usuario descargó 99.79 MB de datos del sitio web y subió 116.61 MB de datos al sitio web.",
          "La PC del usuario está recibiendo datos a 99.79 Mbps y enviando datos al servidor a 116.61 Mbps.",
          "El sitio web SpeedTest descarga datos a su servidor a 99.79 Mbps y sube datos desde su servidor a 116.61 Mbps."
        ],
        "answer": "La PC del usuario está recibiendo datos a 99.79 Mbps y enviando datos al servidor a 116.61 Mbps.",
        "explanation": "La prueba de rendimiento muestra la velocidad instantánea de transferencia. 'Download' es la recepción de datos (99.79 Mbps) y 'Upload' es el envío de datos al servidor (116.61 Mbps). Es notable que en este caso la velocidad de carga es ligeramente superior a la de descarga.",
        "source_reference": "Capítulo 8: Switches y VLANs > Métricas de Salud de Red"
      },
      {
        "id": 38,
        "has_context_image": false,
        "question": "Su gerente de seguridad física, Janice, quiere asegurarse de que puede detectar cualquier acceso no autorizado al centro de datos. ¿Qué tecnología debería usarse para cumplir con su requisito?",
        "options": [
          "Lector de tarjetas de acceso (Access badge reader)",
          "Tarjeta inteligente (Smart card)",
          "Videovigilancia (Video surveillance)",
          "Acceso biométrico"
        ],
        "answer": "Videovigilancia (Video surveillance)",
        "explanation": "Mientras que las tarjetas y la biometría sirven para 'prevenir' o 'controlar' el acceso, la videovigilancia es la herramienta principal para 'detectar' y auditar visualmente quién ha entrado realmente, incluso si se ha burlado el control de acceso (ej: tailgating).",
        "source_reference": "Capítulo 10: Instalaciones Físicas > Monitoreo Físico"
      },
      {
        "id": 39,
        "has_context_image": false,
        "question": "El administrador desea utilizar el nivel de cifrado más fuerte posible usando PSK sin utilizar un servidor de autenticación adicional. ¿Qué tipo de cifrado debería implementarse?",
        "options": [
          "Filtrado MAC",
          "WEP",
          "WPA personal",
          "WPA2 Enterprise"
        ],
        "answer": "WPA personal",
        "explanation": "WPA2 Personal (usando AES/CCMP) ofrece el cifrado más fuerte sin necesidad de un servidor RADIUS (que sí requiere la versión Enterprise). Aunque la versión 'Personal' es más débil ante ataques de diccionario que Enterprise, es el nivel máximo autónomo.",
        "source_reference": "Capítulo 17: Amenazas y Ataques > Defensa Inalámbrica"
      },
      {
        "id": 40,
        "has_context_image": false,
        "question": "El administrador de red está resolviendo problemas en los puertos de un switch para un servidor de archivos con tarjetas de red (NIC) duales. El servidor de archivos debe configurarse para redundancia, y las NIC duales deben combinarse para obtener el máximo rendimiento. ¿Qué característica en el switch debe asegurar el administrador de red que esté habilitada para obtener los mejores resultados?",
        "options": [
          "Balanceo de carga (Load balancing)",
          "LACP",
          "BPDU",
          "Spanning tree"
        ],
        "answer": "LACP",
        "explanation": "LACP (Link Aggregation Control Protocol, 802.3ad) es el estándar que permite agrupar múltiples interfaces físicas en una sola interfaz lógica, proporcionando tanto redundancia como mayor ancho de banda agregado.",
        "source_reference": "Capítulo 7: Enrutamiento > EtherChannel (LACP)"
      },
      {
        "id": 41,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes estándares se usa comúnmente para intercambiar datos de autenticación y autorización entre partes, facilitando el inicio de sesión único (SSO) en diferentes sistemas?",
        "options": [
          "TLS",
          "SOAP",
          "SAML",
          "IPsec"
        ],
        "answer": "SAML",
        "explanation": "SAML (Security Assertion Markup Language) es un estándar basado en XML para intercambiar datos de autenticación y autorización entre un proveedor de identidad y un proveedor de servicios, permitiendo Single Sign-On (SSO).",
        "source_reference": "Capítulo 18: Defensa de la Red > AAA e Identidad"
      },
      {
        "id": 42,
        "has_context_image": false,
        "question": "Tiny Services, una oficina pequeña con múltiples departamentos, desea segmentar su red para mejorar el rendimiento y la seguridad. ¿Qué característica de DHCP deberían usar para asignar diferentes rangos de direcciones IP a cada departamento?",
        "options": [
          "Options (Opciones)",
          "Lease Time (Tiempo de concesión)",
          "Scope (Ámbito / Alcance)",
          "Reservations (Reservas)"
        ],
        "answer": "Scope (Ámbito / Alcance)",
        "explanation": "Un 'Scope' en DHCP define el rango de direcciones IP y otros parámetros (puerta de enlace, DNS) que se asignarán a una subred o departamento específico.",
        "source_reference": "Capítulo 5: Medios y Topologías > DHCP Scopes"
      },
      {
        "id": 43,
        "has_context_image": false,
        "question": "Usted es un técnico de red que resuelve problemas de conectividad en un edificio de oficinas grande con múltiples redes Wi-Fi. Para identificar posibles interferencias y optimizar la intensidad de la señal, ¿qué herramienta sería más efectiva para analizar las señales Wi-Fi?",
        "options": [
          "Probador de cables (Cable tester)",
          "Analizador de espectro (Spectrum analyzer)",
          "Analizador de Wi-Fi",
          "Multímetro"
        ],
        "answer": "Analizador de Wi-Fi",
        "explanation": "Un analizador de Wi-Fi permite ver los canales ocupados, la intensidad de la señal (RSSI) de los APs cercanos y el ruido, facilitando la elección de canales menos congestionados para evitar interferencias.",
        "source_reference": "Capítulo 9: Wireless > Solución de Problemas Wireless"
      },
      {
        "id": 44,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes se utiliza para distribuir energía de manera eficiente a los racks de equipos de computación y redes?",
        "options": [
          "HVAC",
          "Generador",
          "UPS",
          "PDU"
        ],
        "answer": "PDU",
        "explanation": "Una PDU (Power Distribution Unit) es una regleta industrial diseñada para ser instalada en racks y distribuir la energía de un sistema UPS o suministro eléctrico a múltiples dispositivos de red.",
        "source_reference": "Capítulo 10: Instalaciones Físicas > PDU"
      },
      {
        "id": 45,
        "has_context_image": false,
        "question": "Margery, una administradora de red, observa que los usuarios de un departamento experimentan velocidades de red lentas, especialmente durante las horas pico de trabajo. Después de descartar fallos de hardware y confirmar que la infraestructura está bien configurada, sospecha que el problema está relacionado con el flujo de tráfico. Al identificar la causa más probable, seleccione la declaración más adecuada.",
        "options": [
          "Los tiempos de resolución DNS para el segmento de red del departamento han aumentado drásticamente.",
          "Hay una congestión significativa en la red debido al aumento del tráfico de videoconferencias durante las horas pico.",
          "Los ajustes del firewall se han configurado mal, bloqueando inadvertidamente el tráfico de la subred.",
          "Los puertos del switch que conectan los puntos de acceso están configurados con ajustes de VLAN incorrectos."
        ],
        "answer": "Hay una congestión significativa en la red debido al aumento del tráfico de videoconferencias durante las horas pico.",
        "explanation": "La lentitud cíclica (en horas pico) en una red que ya ha sido verificada físicamente suele ser síntoma inequívoco de congestión de red, causada por un volumen de tráfico que excede la capacidad del enlace o por aplicaciones de alto consumo como el vídeo.",
        "source_reference": "Capítulo 12: Monitoreo > Congestión"
      },
      {
        "id": 46,
        "has_context_image": false,
        "question": "Quinn está configurando una red inalámbrica para un cliente en un área conocida por su denso tráfico inalámbrico y una estricta supervisión regulatoria sobre el uso de canales. Para asegurar el cumplimiento y un rendimiento óptimo, se centran en incorporar una característica del estándar 802.11h. ¿Qué aspecto de 802.11h debería priorizar Quinn para cumplir con estos requisitos?",
        "options": [
          "Control de Potencia de Transmisión (Transmit Power Control)",
          "Capacidades de Roaming Rápido",
          "Tecnología Beamforming",
          "Tecnología Multiple Input Multiple Output (MIMO)"
        ],
        "answer": "Control de Potencia de Transmisión (Transmit Power Control)",
        "explanation": "El estándar IEEE 802.11h aborda la gestión de espectro y potencia en redes inalámbricas. Su característica de Control de Potencia de Transmisión (TPC) permite ajustar dinámicamente la potencia de salida para reducir la interferencia con otros sistemas (como radares) y cumplir con las regulaciones locales, lo cual es crítico en áreas con alta densidad y supervisión.",
        "source_reference": "Capítulo 9: Wireless > Estándares Inalámbricos"
      },
      {
        "id": 47,
        "has_context_image": false,
        "question": "Un administrador de red está configurando una red para su empleador. Al implementar los ajustes de línea base, decide usar Máscara de Subred de Longitud Variable (VLSM), creyendo que apoyará mejor el crecimiento de la red y permitirá un uso eficiente de las direcciones IP. ¿Cuál de las siguientes afirmaciones es VERDADERA al considerar el uso de VLSM?",
        "options": [
          "Consolida múltiples subredes bajo una sola ruta para un enrutamiento más eficiente.",
          "Permite que se usen subredes de múltiples tamaños dentro de una red más grande.",
          "Elimina la necesidad de máscaras de subred mediante la asignación dinámica de direcciones.",
          "Restringe todas las subredes al mismo tamaño, asegurando la uniformidad en toda la red."
        ],
        "answer": "Permite que se usen subredes de múltiples tamaños dentro de una red más grande.",
        "explanation": "VLSM (Variable Length Subnet Masking) es la técnica que permite dividir un espacio de direcciones IP en subredes de diferentes tamaños según las necesidades específicas de cada segmento (ej: una /24 para usuarios y una /30 para enlaces WAN), optimizando el uso del direccionamiento.",
        "source_reference": "Capítulo 4: Puertos y Protocolos > Direccionamiento VLSM"
      },
      {
        "id": 48,
        "has_context_image": false,
        "question": "Bessie trabaja como ingeniera de red para su organización y quiere diagnosticar un problema con un servidor DNS que no resuelve un nombre de host específico. ¿Cuál de los siguientes comandos le proporcionaría la información necesaria al consultar los servidores DNS para resolver el nombre de host a una dirección IP?",
        "options": [
          "tcpdump",
          "ping",
          "nslookup",
          "traceroute/tracert"
        ],
        "answer": "nslookup",
        "explanation": "La herramienta nslookup (Name Server Lookup) se utiliza específicamente para consultar registros en los servidores DNS y verificar la resolución de nombres, lo que permite diagnosticar si el problema está en el servidor, en el registro o en la red.",
        "source_reference": "Capítulo 19: Troubleshooting > Herramientas de Línea de Comandos"
      },
      {
        "id": 49,
        "has_context_image": false,
        "question": "Tamera y su esposo están conduciendo hacia la playa el fin de semana. Mientras su esposo conduce, ella usa su iPhone para navegar en Facebook. Su teléfono muestra solo 1 barra de señal 3G en la ubicación actual. Puede hacer y recibir llamadas, pero Facebook se niega a cargar su feed de noticias. ¿Cuál de los siguientes es MÁS probable que sea el problema?",
        "options": [
          "La radio celular no puede conectarse a las torres de telefonía",
          "El firmware de banda base necesita ser actualizado",
          "Las velocidades de datos son insuficientes con solo una barra de señal",
          "El smartphone ha sido infectado con un virus"
        ],
        "answer": "Las velocidades de datos son insuficientes con solo una barra de señal",
        "explanation": "Con una señal 3G de solo una barra, el ancho de banda efectivo y la estabilidad de la conexión de datos suelen ser insuficientes para cargar aplicaciones de contenido rico como redes sociales, aunque la señal básica pueda ser suficiente para mantener una llamada de voz (que requiere menos ancho de banda).",
        "source_reference": "Capítulo 11: Documentación > Conectividad WAN"
      },
      {
        "id": 50,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes sistemas se usa comúnmente para gestionar certificados digitales, asegurando la comunicación segura y la autenticación en una red?",
        "options": [
          "PKI",
          "Cifrado de Clave Simétrica",
          "TLS",
          "2FA"
        ],
        "answer": "PKI",
        "explanation": "PKI (Public Key Infrastructure) es el marco de hardware, software, personas y procesos necesarios para crear, gestionar, distribuir, usar, almacenar y revocar certificados digitales y gestionar el cifrado de clave pública.",
        "source_reference": "Capítulo 18: Defensa de la Red > Infraestructura de Clave Pública (PKI)"
      },
      {
        "id": 51,
        "has_context_image": false,
        "question": "En el contexto de VXLAN (Virtual Extensible Local Area Network), ¿cuál es el propósito del Identificador de Red VXLAN (VNI)?",
        "options": [
          "Se utiliza para diferenciar entre diferentes redes superpuestas (overlay) de VXLAN.",
          "Se utiliza para autenticar los paquetes VXLAN para asegurar la seguridad.",
          "Se utiliza para designar las direcciones IP de origen y destino para el tráfico VXLAN.",
          "Se utiliza para identificar de forma única cada punto final del túnel VXLAN (VTEP)."
        ],
        "answer": "Se utiliza para diferenciar entre diferentes redes superpuestas (overlay) de VXLAN.",
        "explanation": "El VNI (VXLAN Network Identifier) es un identificador de 24 bits (que permite hasta 16 millones de redes) utilizado para segmentar y distinguir diferentes redes virtuales de capa 2 que se transportan sobre una red de capa 3 (overlay).",
        "source_reference": "Capítulo 8: Switches y VLANs > Virtualización de Red"
      },
      {
        "id": 52,
        "has_context_image": false,
        "question": "¿Qué distingue a Security Service Edge (SSE) de las arquitecturas de seguridad de red tradicionales?",
        "options": [
          "SSE prioriza el rendimiento de la red sobre las funcionalidades de seguridad.",
          "SSE se centra únicamente en asegurar los puntos finales dentro de la red corporativa.",
          "SSE aprovecha los servicios de seguridad basados en la nube para proteger a usuarios y dispositivos distribuidos.",
          "SSE se basa en dispositivos físicos desplegados en el perímetro de la red para la seguridad."
        ],
        "answer": "SSE aprovecha los servicios de seguridad basados en la nube para proteger a usuarios y dispositivos distribuidos.",
        "explanation": "SSE (Security Service Edge) es un conjunto de servicios de seguridad (SWG, CASB, ZTNA) entregados desde la nube para proteger el acceso a aplicaciones y datos independientemente de la ubicación del usuario, a diferencia de la seguridad tradicional basada en perímetros físicos.",
        "source_reference": "Capítulo 18: Defensa de la Red > Arquitecturas de Seguridad Modernas (SASE/SSE)"
      },
      {
        "id": 53,
        "has_context_image": false,
        "question": "Su empresa acaba de instalar un nuevo servidor web que permitirá conexiones entrantes a través del puerto 80 desde Internet, mientras que no aceptará ninguna conexión desde la red interna. Se le ha pedido que ubique el servidor web en la arquitectura de red y configure la regla ACL para soportar los requisitos. La arquitectura de red está segmentada usando un firewall de tres patas (triple-homed) con las siguientes zonas:\n\n1. PUBLIC, eth0, 66.13.24.16/30\n2. DMZ, eth1, 172.16.1.1/24\n3. PRIVATE, eth2, 192.168.1.1/24\n\n¿Dónde debería instalar el servidor web y cómo debería configurarlo?",
        "options": [
          "Poner el servidor en la zona PUBLIC con una regla entrante de eth0 a eth1 que permita el tráfico del puerto 80 a la IP del servidor",
          "Poner el servidor en la zona PRIVATE con una regla entrante de eth0 a eth1 que permita el tráfico del puerto 80 a la IP del servidor",
          "Poner el servidor en la zona DMZ con una regla entrante de eth0 a eth1 que permita el tráfico del puerto 80 a la IP del servidor",
          "Poner el servidor en la zona DMZ con una regla entrante de eth1 a eth0 que permita el tráfico del puerto 80 a la IP del servidor"
        ],
        "answer": "Poner el servidor en la zona DMZ con una regla entrante de eth0 a eth1 que permita el tráfico del puerto 80 a la IP del servidor",
        "explanation": "Los servidores públicos deben ubicarse en la DMZ (zona desmilitarizada) para aislarlos de la red interna (PRIVATE). La interfaz conectada a Internet es eth0 (PUBLIC) y la DMZ es eth1. Por lo tanto, la regla de firewall debe permitir el tráfico entrante desde la interfaz pública (eth0) hacia la interfaz de la DMZ (eth1) en el puerto 80.",
        "source_reference": "Capítulo 18: Defensa de la Red > Zonas de Seguridad (Networking)"
      },
      {
        "id": 54,
        "has_context_image": false,
        "question": "Usted es un administrador de red y nota que varios usuarios están experimentando velocidades de Internet lentas y desconexiones intermitentes. Después de reunir información e identificar los síntomas, sospecha que el problema podría estar relacionado con fallos en el servidor DHCP. ¿Cuál de los siguientes pasos debería tomar a continuación según la metodología de resolución de problemas?",
        "options": [
          "Documentar el problema y las acciones tomadas hasta ahora.",
          "Notificar y escalar el problema al administrador de red senior inmediatamente.",
          "Establecer una teoría de causa probable y probarla.",
          "Reiniciar el servidor DHCP ya que esa es la causa probable."
        ],
        "answer": "Establecer una teoría de causa probable y probarla.",
        "explanation": "Según la metodología de CompTIA, después de identificar el problema (Paso 1) y reunir síntomas, el siguiente paso lógico es Establecer una teoría de causa probable (Paso 2) y posteriormente probar la teoría para determinar la causa (Paso 3). Escalar o reiniciar sin probar son acciones prematuras.",
        "source_reference": "Capítulo 19: Troubleshooting > Metodología de Resolución de Problemas (7 Pasos)"
      },
      {
        "id": 55,
        "has_context_image": false,
        "question": "Mathan acaba de comprar un nombre de dominio y creó un registro A para vincular su nombre de dominio a una dirección IP. ¿Cuál de las siguientes herramientas debería usar para verificar que el registro se creó correctamente?",
        "options": [
          "ipconfig",
          "arp",
          "dig",
          "tcpdump"
        ],
        "answer": "dig",
        "explanation": "La herramienta dig (Domain Information Groper) es una utilidad de línea de comandos para realizar consultas a servidores DNS, permitiendo verificar qué registros A, MX, TXT, etc., están configurados y activos para un dominio determinado.",
        "source_reference": "Capítulo 19: Troubleshooting > Herramientas de Línea de Comandos"
      },
      {
        "id": 56,
        "has_context_image": false,
        "question": "Daisy está planificando la infraestructura de red para su nuevo centro de datos. El área está densamente equipada y los cables deben tenderse muy cerca de líneas eléctricas y otras fuentes de interferencia. Ella quiere mantener los costos lo más bajos posible, pero tener la capacidad de resistir la interferencia mencionada. Dados estos requisitos, ¿cuál de estos tipos de cable es el más práctico para asegurar la fidelidad de la red en esta área de alto tráfico?",
        "options": [
          "UTP Cat6",
          "Fibra Multimodo",
          "Fibra Monomodo",
          "STP Cat6a"
        ],
        "answer": "STP Cat6a",
        "explanation": "El cable de par trenzado blindado (STP - Shielded Twisted Pair) está diseñado específicamente para entornos con alta interferencia electromagnética (EMI), como la proximidad a líneas eléctricas. STP Cat6a es más económico que la fibra óptica y proporciona el blindaje necesario para mantener la fiabilidad en estas condiciones.",
        "source_reference": "Capítulo 2: Hardware de Red > Tipos de Cableado de Cobre"
      },
      {
        "id": 57,
        "has_context_image": false,
        "question": "¿Cuál es la ventaja principal de usar inventarios dinámicos en redes?",
        "options": [
          "Los inventarios dinámicos mejoran el rendimiento de la red y reducen la latencia.",
          "Los inventarios dinámicos permiten una escalabilidad sin fisuras y soportan una rápida expansión de la red.",
          "Los inventarios dinámicos proporcionan una seguridad mejorada y previenen el acceso no autorizado.",
          "Los inventarios dinámicos simplifican la gestión de la red y reducen el esfuerzo manual."
        ],
        "answer": "Los inventarios dinámicos simplifican la gestión de la red y reducen el esfuerzo manual.",
        "explanation": "Un inventario dinámico se actualiza automáticamente a medida que se añaden o eliminan dispositivos en la red (a menudo mediante scripts o APIs), lo que desarrolla la necesidad de mantener listas manuales, reduce errores humanos y simplifica enormemente la gestión en entornos grandes.",
        "source_reference": "Capítulo 12: Monitoreo > Gestión de Inventario"
      },
      {
        "id": 58,
        "has_context_image": false,
        "question": "Se contrata a un nuevo administrador de red para reemplazar a un consultor que dirigió la red durante varios meses y cuyo contrato acaba de ser cancelado. Después de un mes trabajando en la red, el nuevo administrador se dio cuenta de algunos problemas de red y cambios de configuración en los ajustes del servidor. Los archivos de registro (logs) en los servidores no contienen ningún mensaje de error relacionado con los problemas o cambios. ¿Cuál podría ser el problema?",
        "options": [
          "Se ha instalado una puerta trasera (backdoor) para conceder acceso a alguien a la red",
          "El servidor fue víctima de un ataque de fuerza bruta a la contraseña",
          "La última ACL en el firewall está configurada como DENY ANY ANY",
          "Una mala configuración de TACACS+ o RADIUS está causando que los logs se borren"
        ],
        "answer": "Se ha instalado una puerta trasera (backdoor) para conceder acceso a alguien a la red",
        "explanation": "Si se han realizado cambios de configuración y existen problemas de red, pero no hay registros de estos eventos en los logs del servidor, es muy probable que un atacante (o el antiguo consultor resentido) haya instalado un backdoor y esté borrando deliberadamente su rastro o usando métodos que evaden el logging estándar para mantener el acceso.",
        "source_reference": "Capítulo 17: Amenazas y Ataques > Ataques de Acceso y Persistencia"
      },
      {
        "id": 59,
        "has_context_image": false,
        "question": "Dion Training quiere crear un registro DNS para introducir información DKIM o SPF en el sistema de nombres de dominio y ayudar a prevenir el spam que sale de su dominio. ¿Qué tipo de registro DNS debería crearse?",
        "options": [
          "SRV",
          "SOA",
          "PTR",
          "TXT"
        ],
        "answer": "TXT",
        "explanation": "Los registros TXT (Text) se utilizan para almacenar información de texto legible por máquina. Protocolos de seguridad de correo electrónico como SPF (Sender Policy Framework) y DKIM (DomainKeys Identified Mail) utilizan registros TXT para publicar las listas de servidores autorizados y las claves criptográficas para la verificación.",
        "source_reference": "Capítulo 5: Medios y Topologías > Registros de Recursos DNS"
      },
      {
        "id": 60,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes proporciona contabilidad, autorización y autenticación a través de una base de datos de privilegios centralizada, así como desafío/respuesta y cifrado de contraseñas?",
        "options": [
          "Network access control",
          "ISAKMP",
          "Multi-factor authentication",
          "TACACS+"
        ],
        "answer": "TACACS+",
        "explanation": "TACACS+ (Terminal Access Controller Access-Control System Plus) es un protocolo de seguridad AAA que centraliza la autenticación, autorización y contabilidad. A diferencia de RADIUS, cifra todo el cuerpo del paquete y separa las tres funciones AAA, siendo común en la administración de dispositivos de red.",
        "source_reference": "Capítulo 18: Defensa de la Red > Servicios AAA"
      },
      {
        "id": 61,
        "has_context_image": false,
        "question": "¿Qué puerto se usa comúnmente para recibir correos electrónicos desde un servidor de correo?",
        "options": [
          "Puerto 25",
          "Puerto 110",
          "Puerto 80",
          "Puerto 443"
        ],
        "answer": "Puerto 110",
        "explanation": "El protocolo POP3 (Post Office Protocol version 3) utiliza el puerto 110 por defecto para permitir que los clientes de correo descarguen mensajes desde un servidor. El puerto 25 es para SMTP (envío), el 80 para HTTP y el 443 para HTTPS.",
        "source_reference": "Capítulo 5: Medios y Topologías > Puertos de Protocolo de Correo"
      },
      {
        "id": 62,
        "has_context_image": false,
        "question": "En las operaciones de ciberseguridad, ¿qué tecnología se utiliza principalmente para centralizar la recopilación, correlación y análisis de registros (logs) de eventos de seguridad de diversas fuentes?",
        "options": [
          "IPS",
          "IDS",
          "SIEM",
          "WAF"
        ],
        "answer": "SIEM",
        "explanation": "Un sistema SIEM (Security Information and Event Management) recolecta datos de registros de múltiples dispositivos y aplicaciones, permitiendo a los analistas identificar patrones de ataque, realizar correlación de eventos y generar alertas centralizadas.",
        "source_reference": "Capítulo 12: Monitoreo > Monitoreo y Gestión de Eventos"
      },
      {
        "id": 63,
        "has_context_image": false,
        "question": "Un técnico de red ha recibido informes de que una aplicación basada en Internet ha dejado de funcionar. Los empleados informaron que después de actualizar los navegadores de Internet, la aplicación comenzó a fallar. Muchos usuarios revirtieron la actualización (rollback), pero esto no corrigió el problema. ¿Qué debería hacer la empresa para reducir que este tipo de acción cause problemas de red en el futuro?",
        "options": [
          "Implementar un plan de recuperación ante desastres con un sitio activo (hot site) para permitir que los usuarios sigan trabajando",
          "Coordinar la actualización del servidor de Internet para que coincida con las actualizaciones de los usuarios",
          "Segmentar la red y crear un laboratorio de pruebas para todas las actualizaciones antes del despliegue",
          "Verificar que los hashes de la actualización coincidan con los del sitio web del proveedor"
        ],
        "answer": "Segmentar la red y crear un laboratorio de pruebas para todas las actualizaciones antes del despliegue",
        "explanation": "La mejor práctica para evitar que las actualizaciones (ya sean de software o navegadores) interrumpan servicios críticos es probarlas primero en un entorno de laboratorio controlado que replique el entorno de producción antes de autorizar su despliegue generalizado.",
        "source_reference": "Capítulo 11: Documentación > Gestión de Parches y Actualizaciones"
      },
      {
        "id": 64,
        "has_context_image": false,
        "question": "Danielle trabaja como administradora de red y necesita restringir el acceso a recursos sensibles de la empresa en la red. El objetivo es asegurar que solo los dispositivos del departamento de finanzas puedan acceder al servidor del software de contabilidad. ¿Cuál de las siguientes acciones debería tomar para lograr este objetivo?",
        "options": [
          "Implementar reglas que especifiquen los dispositivos que tienen permitido el acceso a la red al servidor de software de contabilidad.",
          "Configurar una red privada virtual (VPN) para que la use el departamento de finanzas al acceder al software de contabilidad.",
          "Aumentar el nivel de cifrado en la red inalámbrica utilizada por el departamento de finanzas.",
          "Instalar un nuevo firewall específicamente para el segmento de red del departamento de finanzas."
        ],
        "answer": "Implementar reglas que especifiquen los dispositivos que tienen permitido el acceso a la red al servidor de software de contabilidad.",
        "explanation": "La implementación de listas de control de acceso (ACL) o reglas de firewall basadas en direcciones IP, MAC o identidades de usuario permite restringir el acceso a servidores específicos solo a aquellos dispositivos o departamentos autorizados.",
        "source_reference": "Capítulo 18: Defensa de la Red > Listas de Control de Acceso (ACL)"
      },
      {
        "id": 65,
        "has_context_image": false,
        "question": "Un compañero de trabajo acaba de instalar un switch no gestionado (unmanaged) de 24 puertos. Le preocupa la cantidad de tráfico de difusión (broadcast) que puede existir al usar este dispositivo. ¿Cuántos dominios de difusión se crean al usar este único switch de 24 puertos?",
        "options": [
          "24",
          "1",
          "2",
          "0"
        ],
        "answer": "1",
        "explanation": "Por defecto, un switch (especialmente uno no gestionado que no soporta VLANs) crea un único dominio de difusión para todos sus puertos. Aunque cada puerto es un dominio de colisión independiente, el tráfico de difusión enviado por un dispositivo será recibido por todos los demás dispositivos conectados al switch.",
        "source_reference": "Capítulo 2: Hardware de Red > Conceptos de Switching"
      },
      {
        "id": 66,
        "has_context_image": false,
        "question": "En un entorno de red, ¿cómo se compara el uso de un jump box/host con las conexiones de gestión directa al administrar servidores remotos y dispositivos de red?",
        "options": [
          "Las conexiones de gestión directa ofrecen una mayor seguridad al requerir múltiples pasos de autenticación para cada dispositivo, en comparación con un jump box/host.",
          "Las conexiones de gestión directa permiten un seguimiento y registro más sencillo de las actividades de los usuarios que el uso de un jump box/host.",
          "El uso de un jump box/host aumenta significativamente la latencia de la red y reduce el rendimiento general en comparación con las conexiones de gestión directa.",
          "Un jump box/host proporciona una puerta de enlace segura y controlada para que los administradores se conecten a sistemas remotos, minimizando los puntos de entrada expuestos a la red."
        ],
        "answer": "Un jump box/host proporciona una puerta de enlace segura y controlada para que los administradores se conecten a sistemas remotos, minimizando los puntos de entrada expuestos a la red.",
        "explanation": "Un jump box (o servidor de salto) actúa como un único punto de entrada endurecido hacia una zona de red más segura. Los administradores deben autenticarse primero en el jump box antes de poder acceder a otros servidores internos, lo que reduce la superficie de ataque al no exponer directamente los puertos de gestión de cada servidor a redes menos seguras.",
        "source_reference": "Capítulo 18: Defensa de la Red > Dispositivos de Seguridad"
      },
      {
        "id": 67,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes tipos de flujos de tráfico describe el tráfico de red que transita entre varios servidores en su centro de datos? (Seleccione todas las que correspondan)",
        "options": [
          "Este",
          "Oeste",
          "Norte",
          "Sur"
        ],
        "answer": "Oeste",
        "explanation": "El tráfico 'Este-Oeste' se refiere a la comunicación que ocurre dentro de un centro de datos entre servidores o aplicaciones. Por el contrario, el tráfico 'Norte-Sur' se refiere al tráfico que entra o sale del centro de datos hacia o desde el mundo exterior (Internet o usuarios corporativos). Nota: En muchas arquitecturas modernas se usa el término conjunto East-West.",
        "source_reference": "Capítulo 16: Fundamentos de Seguridad > Flujos de Tráfico"
      },
      {
        "id": 68,
        "has_context_image": false,
        "question": "El Centro de Operaciones de Seguridad (SOC) de su empresa está detectando actualmente un ataque DDoS en curso contra el servidor de archivos de su red. Un analista de ciberseguridad ha identificado cuarenta estaciones de trabajo internas en la red que están realizando el ataque contra el servidor de archivos. El analista cree que estas estaciones internas están infectadas con malware y las coloca en un área de red de cuarentena. Luego, el analista envía un ticket al soporte técnico para que las estaciones sean escaneadas y limpiadas. ¿De qué tipo de malware fueron probablemente víctimas las estaciones de trabajo según el escenario proporcionado?",
        "options": [
          "Botnet",
          "Rootkit",
          "Spyware",
          "Ransomware"
        ],
        "answer": "Botnet",
        "explanation": "Una botnet está formada por un grupo de computadoras infectadas (zombis) que son controladas de forma remota por un atacante (botmaster) para realizar tareas coordinadas, como un ataque de denegación de servicio distribuido (DDoS).",
        "source_reference": "Capítulo 17: Amenazas y Ataques > Malware"
      },
      {
        "id": 69,
        "has_context_image": false,
        "question": "En la seguridad contra incendios de centros de datos, ¿qué sistema está diseñado para minimizar el daño a la infraestructura de red con las menores preocupaciones ambientales durante una emergencia de incendio?",
        "options": [
          "Sistema de gas Halón",
          "Extintor a base de espuma",
          "Sistema de rociadores de agua",
          "Supresión de incendios con agente limpio"
        ],
        "answer": "Supresión de incendios con agente limpio",
        "explanation": "Los sistemas de agentes limpios (como FM-200 o Novec 1230) utilizan gases químicos o inertes que extinguen el fuego sin dejar residuos ni dañar los equipos electrónicos sensibles, y son mucho más respetuosos con el medio ambiente y la salud humana que los antiguos sistemas de Halón.",
        "source_reference": "Capítulo 15: Acceso Remoto > Control de Incendios"
      },
      {
        "id": 70,
        "has_context_image": false,
        "question": "Un usuario malintencionado está bloqueando la conexión de dispositivos celulares a Internet cada vez que entran en una cafetería. Si piden su café para llevar y caminan al menos una manzana de distancia de la cafetería, sus teléfonos inteligentes vuelven a conectarse a Internet. ¿Qué tipo de ataque de red está realizando el usuario malintencionado?",
        "options": [
          "Lista negra de direcciones IP en la ACL",
          "Ataque en la ruta (On-path attack)",
          "Suplantación (Spoofing)",
          "Interferencia de frecuencia (Frequency jamming)"
        ],
        "answer": "Interferencia de frecuencia (Frequency jamming)",
        "explanation": "El jamming consiste en emitir señales de radio potentes en las mismas frecuencias que utilizan los dispositivos inalámbricos (como Wi-Fi o redes celulares) para saturar el receptor y evitar que la señal legítima sea procesada, bloqueando así la comunicación. Como el alcance es limitado, el problema desaparece al alejarse de la fuente de interferencia.",
        "source_reference": "Capítulo 17: Amenazas y Ataques > Ataques Inalámbricos"
      },
      {
        "id": 71,
        "has_context_image": false,
        "question": "¿Qué protocolo se utiliza para la sincronización de relojes entre diferentes sistemas informáticos a través de una red de datos conmutada por paquetes y latencia variable?",
        "options": [
          "NTP",
          "DHCP",
          "DNS",
          "TFTP"
        ],
        "answer": "NTP",
        "explanation": "NTP (Network Time Protocol) está diseñado específicamente para sincronizar los relojes de los dispositivos de red con una referencia de tiempo precisa (como un reloj atómico) a través de redes con latencia variable, asegurando que todos los logs y transacciones tengan marcas de tiempo consistentes.",
        "source_reference": "Capítulo 5: Medios y Topologías > NTP"
      },
      {
        "id": 72,
        "has_context_image": false,
        "question": "Los prefijos de enrutamiento son asignados en bloques por la IANA y distribuidos por el Registro Regional de Internet (RIR). ¿Cómo se conocen los identificadores únicos utilizados para gestionar estas asignaciones?",
        "options": [
          "Network handle",
          "Dominio de nivel superior",
          "Número de sistema autónomo",
          "Agregación de rutas"
        ],
        "answer": "Número de sistema autónomo",
        "explanation": "Un ASN es un número de identificación único asignado a un Sistema Autónomo (una red o grupo de redes bajo una administración común, como un ISP o una gran corporación) para que pueda intercambiar información de enrutamiento con otros sistemas autónomos utilizando el protocolo BGP.",
        "source_reference": "Capítulo 7: Enrutamiento > Sistema Autónomo (AS)"
      },
      {
        "id": 73,
        "has_context_image": false,
        "question": "¿Cuál es el ID de red asociado con el host ubicado en 10.10.10.200/25?",
        "options": [
          "10.10.10.64",
          "10.10.10.192",
          "10.10.10.128",
          "10.10.10.0"
        ],
        "answer": "10.10.10.128",
        "explanation": "Una máscara /25 significa que el último octeto se divide en dos subredes de 128 direcciones cada una (0-127 y 128-255). La dirección 10.10.10.200 se encuentra en el rango de la segunda subred, que comienza en el ID de red 10.10.10.128.",
        "source_reference": "Capítulo 6: Direccionamiento IPv4 > Subneteado"
      },
      {
        "id": 74,
        "has_context_image": false,
        "question": "¿Qué capa del modelo OSI interactúa con el software del usuario final, como por ejemplo al usar un navegador web para comunicarse a través de HTTP para mostrar un sitio web?",
        "options": [
          "Capa 5",
          "Capa 4",
          "Capa 6",
          "Capa 7"
        ],
        "answer": "Capa 7",
        "explanation": "La capa 7 (Capa de Aplicación) es la capa del modelo OSI más cercana al usuario final. Proporciona servicios de red a las aplicaciones de software (como navegadores web o clientes de correo) y protocolos como HTTP, FTP y SMTP operan en esta capa.",
        "source_reference": "Capítulo 1: El Modelo OSI > Capa 5: Sesión"
      },
      {
        "id": 75,
        "has_context_image": false,
        "question": "Se le ha pedido que conecte tres dispositivos 802.11a a un punto de acceso 802.11g configurado con WEP. Los dispositivos están a menos de 20 pies del punto de acceso, pero aún así no pueden asociarse con él. ¿Cuál de las siguientes es la causa MÁS probable de que los dispositivos no se asocien con el WAP?",
        "options": [
          "Interferencia",
          "Cifrado discordante",
          "Pérdida de señal",
          "Discordancia de frecuencia"
        ],
        "answer": "Discordancia de frecuencia",
        "explanation": "802.11a opera exclusivamente en la banda de 5 GHz, mientras que 802.11g opera exclusivamente en la banda de 2.4 GHz. Debido a esta diferencia de frecuencias fundamentales, los dispositivos no pueden comunicarse ni asociarse entre sí a pesar de la proximidad física.",
        "source_reference": "Capítulo 9: Wireless > Estándares Wi-Fi"
      },
      {
        "id": 76,
        "has_context_image": false,
        "question": "En el modelo jerárquico de tres capas, ¿qué capa se encuentra entre las otras dos y es responsable de proporcionar conectividad, así como de facilitar la comunicación entre los diferentes dispositivos de la capa de acceso?",
        "options": [
          "Distribución",
          "Core (Núcleo)",
          "Acceso",
          "Agregación"
        ],
        "answer": "Distribución",
        "explanation": "La capa de Distribución (Distribution) actúa como un puente entre la capa de acceso y la capa central (Core). Es responsable del enrutamiento, el filtrado de paquetes y la comunicación inter-VLAN entre los dispositivos de la capa de acceso antes de enviar el tráfico al núcleo de alta velocidad.",
        "source_reference": "Capítulo 16: Fundamentos de Seguridad > Modelo Jerárquico"
      },
      {
        "id": 77,
        "has_context_image": false,
        "question": "¿Qué combinación(es) de puerto y protocolo se asocian comúnmente con el Protocolo de Escritorio Remoto (RDP)?",
        "options": [
          "Puerto 5060/5061 - UDP",
          "Puerto 5060/5061 - TCP",
          "Puerto 3389 - TCP",
          "Puerto 3389 - UDP"
        ],
        "answer": "Puerto 3389 - TCP",
        "explanation": "RDP utiliza por defecto el puerto 3389 sobre el protocolo de transporte TCP. Aunque las versiones modernas pueden utilizar UDP para optimizar la transmisión de gráficos y multimedia, TCP sigue siendo el estándar fundamental de conexión para RDP.",
        "source_reference": "Capítulo 5: Medios y Topologías > Puertos Comunes"
      },
      {
        "id": 78,
        "has_context_image": false,
        "question": "Durante la configuración de un nuevo enlace de fibra óptica entre un router y un switch, observa que no hay conectividad a pesar de que todo el equipo está operativo. ¿Qué paso de resolución de problemas debería considerarse para resolver este problema?",
        "options": [
          "Intercambiar los hilos de fibra en un extremo para corregir una posible desalineación del transmisor y el receptor.",
          "Reemplazar el switch por un modelo superior que soporte tasas de datos más rápidas.",
          "Cambiar la configuración de dúplex en el puerto del switch conectado al router.",
          "Reconfigurar la tabla de enrutamiento del router."
        ],
        "answer": "Intercambiar los hilos de fibra en un extremo para corregir una posible desalineación del transmisor y el receptor.",
        "explanation": "En las conexiones de fibra óptica dúplex (dos hilos), el transmisor (TX) de un extremo debe conectarse al receptor (RX) del otro. Si los hilos están 'rectos' (TX-TX), no habrá enlace. Intercambiar los hilos en un extremo corrige esta desalineación común.",
        "source_reference": "Capítulo 19: Troubleshooting > Problemas Físicos de Fibra"
      },
      {
        "id": 79,
        "has_context_image": false,
        "question": "Usted está asistiendo a un miembro del equipo de seguridad de Dion Training durante una respuesta a incidentes. El miembro del equipo le pide que determine si se están produciendo conexiones TCP extrañas en una estación de trabajo determinada. Abre el símbolo del sistema en la estación de trabajo. ¿Cuál de las siguientes herramientas le proporcionaría información sobre cualquier conexión TCP establecida actualmente en la estación de trabajo?",
        "options": [
          "route",
          "arp",
          "netstat",
          "tracert"
        ],
        "answer": "netstat",
        "explanation": "La herramienta `netstat` (Network Statistics) muestra todas las conexiones de red activas (TCP y UDP), los puertos en los que el sistema está escuchando y diversas estadísticas de la interfaz, lo cual es vital para identificar conexiones sospechosas durante un incidente.",
        "source_reference": "Capítulo 19: Troubleshooting > Herramientas de Línea de Comandos"
      },
      {
        "id": 80,
        "has_context_image": false,
        "question": "Timothy, un ingeniero de red, tiene la tarea de resolver un problema de conectividad de red. Necesita determinar qué direcciones MAC están asociadas con cada puerto del switch para identificar la fuente del problema de manera eficiente. ¿Qué comando debería usar Timothy para ver esto en un switch Cisco?",
        "options": [
          "show interface",
          "show config",
          "show mac-address-table",
          "show route"
        ],
        "answer": "show mac-address-table",
        "explanation": "En los dispositivos Cisco, el comando `show mac-address-table` muestra la base de datos de reenvío del switch, vinculando cada dirección MAC aprendida con su puerto físico y VLAN correspondiente.",
        "source_reference": "Capítulo 2: Hardware de Red > Operación del Switch"
      },
      {
        "id": 81,
        "has_context_image": false,
        "question": "¿Qué componente de una infraestructura de red sirve como punto de terminación principal para el cableado que proviene de los proveedores de acceso externos?",
        "options": [
          "Router",
          "IDF",
          "MDF",
          "Panel de parcheo (Patch Panel)"
        ],
        "answer": "MDF",
        "explanation": "El MDF (Main Distribution Frame) es el punto central de cableado de un edificio o campus donde terminan los servicios de los proveedores externos (demarc) y se distribuyen a los marcos de distribución intermedios (IDF).",
        "source_reference": "Capítulo 2: Hardware de Red > Estructuras de Cableado"
      },
      {
        "id": 82,
        "has_context_image": false,
        "question": "¿Qué es cierto con respecto a los jumbo frames?",
        "options": [
          "Su tamaño de MTU es inferior a 1500",
          "Se utilizan comúnmente con un NAS",
          "Se utilizan comúnmente en una SAN",
          "Se utilizan comúnmente con DHCP"
        ],
        "answer": "Se utilizan comúnmente en una SAN",
        "explanation": "Los jumbo frames son tramas Ethernet con una MTU de más de 1500 bytes (típicamente 9000). Se utilizan en redes de almacenamiento (SAN) e infraestructuras de alto rendimiento para reducir la sobrecarga de la CPU al procesar menos tramas y más grandes para la transferencia de datos masiva.",
        "source_reference": "Capítulo 16: Fundamentos de Seguridad > Almacenamiento"
      },
      {
        "id": 83,
        "has_context_image": false,
        "question": "Dion Training Solutions quiere migrar su servidor de correo electrónico de una solución local (on-premise) a una solución basada en la web alojada por un proveedor, como Google Workspace o Gmail. ¿Cuál de los siguientes tipos de modelos de nube describe mejor esta solución propuesta?",
        "options": [
          "PaaS",
          "SaaS",
          "DaaS",
          "IaaS"
        ],
        "answer": "SaaS",
        "explanation": "Google Workspace y Gmail son ejemplos clásicos de Software como Servicio (SaaS), donde el usuario accede a una aplicación completa a través de la web sin preocuparse por la infraestructura, el sistema operativo o el mantenimiento del software subyacente.",
        "source_reference": "Capítulo 8: Switches y VLANs > Modelos de Servicio"
      },
      {
        "id": 84,
        "has_context_image": false,
        "question": "Usted está conectando un nuevo dispositivo IPv6 a su red, pero sus routers solo soportan protocolos IPv4. ¿Cuál de las siguientes soluciones de direccionamiento IP resolvería este desafío?",
        "options": [
          "APIPA",
          "Túnel Teredo",
          "Privada (Private)",
          "Sin clase (Classless)"
        ],
        "answer": "Túnel Teredo",
        "explanation": "Teredo es una tecnología de transición que permite la conectividad IPv6 para hosts situados detrás de dispositivos NAT que solo manejan IPv4, encapsulando los paquetes IPv6 dentro de datagramas UDP de IPv4.",
        "source_reference": "Capítulo 4: Puertos y Protocolos > Tecnologías de Transición"
      },
      {
        "id": 85,
        "has_context_image": false,
        "question": "Un técnico de red en un almacén debe implementar una solución que permita a una empresa rastrear los envíos a medida que entran y salen de la instalación. Los trabajadores del almacén deben escanear cada paquete al entrar en el almacén utilizando un sensor que pueda alcanzar una distancia de hasta 30 cm (1 pie). ¿Cuál de las siguientes tecnologías deberían utilizar para cumplir con estos requisitos?",
        "options": [
          "Bluetooth",
          "RFID",
          "NFC",
          "Wi-Fi"
        ],
        "answer": "RFID",
        "explanation": "RFID (Radio Frequency Identification) es ideal para el rastreo de inventario. A diferencia de NFC (que requiere contacto cercano o menos de 10 cm), RFID puede operar a distancias de 30 cm o mucho más, permitiendo el escaneo rápido de paquetes en movimiento.",
        "source_reference": "Capítulo 9: Wireless > Sensores e IoT"
      },
      {
        "id": 86,
        "has_context_image": false,
        "question": "Dion Training está añadiendo una pequeña sucursal en Filipinas y desea asignarles una parte de su espacio de direcciones IPv4 públicas de Clase C. A Dion Training se le ha asignado un alcance de Clase C de 187.15.3.0/24. La nueva oficina en Filipinas tendrá 8 usuarios que necesitan direcciones IP asignadas. ¿Cuál es la notación CIDR correcta para la sucursal de Filipinas con el fin de acomodar a los 8 usuarios asignando el número mínimo de direcciones?",
        "options": [
          "/27",
          "/29",
          "/26",
          "/28"
        ],
        "answer": "/28",
        "explanation": "Para 8 usuarios, necesitamos un mínimo de 10 direcciones (8 para hosts + ID de red + Broadcast). Una máscara /29 proporciona solo 8 direcciones totales (6 útiles), lo cual es insuficiente. La siguiente opción es /28, que proporciona 16 direcciones totales (14 útiles), siendo el mínimo necesario para acomodar a los 8 usuarios.",
        "source_reference": "Capítulo 6: Direccionamiento IPv4 > Diseño de Subredes"
      },
      {
        "id": 87,
        "has_context_image": false,
        "question": "¿Qué tipo de configuración de VPN cliente-a-sitio permite a los usuarios acceder de forma remota a los recursos corporativos sin requerir la instalación de software VPN dedicado local?",
        "options": [
          "SSL VPN",
          "IPsec VPN",
          "PPTP VPN",
          "VPN sin cliente (Clientless VPN)"
        ],
        "answer": "VPN sin cliente (Clientless VPN)",
        "explanation": "Una VPN sin cliente (típicamente basada en SSL/TLS) permite a los usuarios establecer un túnel seguro utilizando únicamente un navegador web estándar, eliminando la necesidad de gestionar e instalar software cliente pesado en los dispositivos de los usuarios.",
        "source_reference": "Capítulo 18: Defensa de la Red > Tecnologías VPN"
      },
      {
        "id": 88,
        "has_context_image": false,
        "question": "Robin, una administradora de red, está realizando una auditoría rutinaria de la infraestructura de red. ¿Cuál de los siguientes se consideraría parte del inventario de hardware que ella necesitaría documentar?",
        "options": [
          "La lista de aplicaciones instaladas en cada estación de trabajo",
          "Las configuraciones de las listas de control de acceso en el firewall",
          "La marca, el modelo y el número de serie de todos los switches de red",
          "Las versiones del sistema operativo instaladas en todos los servidores"
        ],
        "answer": "La marca, el modelo y el número de serie de todos los switches de red",
        "explanation": "Un inventario de hardware se centra en los activos físicos. La marca, el modelo y el número de serie de los dispositivos de red (como los switches) son datos fundamentales de este inventario, a diferencia de las aplicaciones o SO que forman parte del inventario de software o configuraciones.",
        "source_reference": "Capítulo 11: Documentación > Documentación de Activos (Asset Management)"
      },
      {
        "id": 89,
        "has_context_image": false,
        "question": "La controladora RAID de un servidor falló y fue reemplazada por una de una marca diferente. ¿Qué se necesitará después de que el servidor haya sido reconstruido y unido al dominio?",
        "options": [
          "Copias de seguridad recientes",
          "Documentación del proveedor",
          "Dirección IP estática",
          "Diagrama de red física"
        ],
        "answer": "Copias de seguridad recientes",
        "explanation": "Las configuraciones de RAID suelen ser propietarias y no son compatibles entre diferentes marcas de controladoras. Al cambiar la controladora por otra marca, es muy probable que los datos existentes se pierdan o no se reconozcan, haciendo que las copias de seguridad (backups) sean esenciales para restaurar el servicio.",
        "source_reference": "Capítulo 14: Servicios de Red > RAID y Recuperación"
      },
      {
        "id": 90,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes tipos de documentación de red incluiría etiquetas para indicar qué cables están conectados a qué puertos en un switch de borde?",
        "options": [
          "Diagrama de cableado (Wiring diagram)",
          "Informe de levantamiento del sitio (Site survey)",
          "Diagrama de red física",
          "Diagrama de red lógica"
        ],
        "answer": "Diagrama de cableado (Wiring diagram)",
        "explanation": "Un diagrama de cableado (o esquema de parcheo) detalla la conectividad punto a punto de los cables físicos, incluyendo etiquetas de cables y asignaciones específicas de puertos en los paneles de parcheo y switches, permitiendo un mantenimiento y resolución de problemas físicos eficientes.",
        "source_reference": "Capítulo 11: Documentación > Diagramas de Red"
      }
    ]
  },
  "network_plus_exam_2": {
    "id": "network_plus_exam_2",
    "title": "CompTIA Network+ - Examen 2",
    "version": "v1.0",
    "questions": [
      {
        "id": 1,
        "has_context_image": false,
        "question": "Usted está resolviendo un problema de conectividad de red en la estación de trabajo de un estudiante en Dion Training. Al verificar los detalles de la conexión inalámbrica, determina que el cliente inalámbrico está configurado para usar AES y el punto de acceso inalámbrico 802.11ac está configurado para usar WEP para asegurar la red. ¿Cuál de los siguientes problemas podría experimentarse debido a esta configuración?",
        "options": [
          "SSID incorrecto",
          "Cobertura inalámbrica insuficiente",
          "Desajuste en el protocolo de cifrado",
          "Frase de contraseña (passphrase) incorrecta"
        ],
        "answer": "Desajuste en el protocolo de cifrado",
        "explanation": "Un desajuste en el protocolo de cifrado (Encryption protocol mismatch) ocurre cuando el cliente y el punto de acceso (AP) están configurados con diferentes estándares de seguridad (en este caso, AES frente a WEP). Esto impide que el cliente se asocie o autentique correctamente con la red, ya que no pueden establecer un túnel cifrado compatible.",
        "source_reference": "Capítulo 9: Wireless > Resolución de Problemas Inalámbricos"
      },
      {
        "id": 2,
        "has_context_image": false,
        "question": "Al preparar su red para el despliegue de IPv6, debe asegurarse de que el DNS pueda resolver nombres de dominio a direcciones IPv6. ¿Qué tipo de registro DNS está diseñado específicamente para este propósito?",
        "options": [
          "NS",
          "AAAA",
          "A",
          "CNAME"
        ],
        "answer": "AAAA",
        "explanation": "El registro AAAA (Quad-A) se utiliza en el sistema de nombres de dominio (DNS) para mapear un nombre de host a una dirección IPv6 de 128 bits. Es el equivalente al registro 'A' utilizado para IPv4.",
        "source_reference": "Capítulo 5: Medios y Topologías > DNS y Direccionamiento IPv6"
      },
      {
        "id": 3,
        "has_context_image": false,
        "question": "¿Qué dispositivo de red opera en la Capa 1 del modelo OSI?",
        "options": [
          "Hub",
          "Firewall",
          "Bridge (Puente)",
          "Router"
        ],
        "answer": "Hub",
        "explanation": "Un Hub (concentrador) opera en la Capa 1 (Capa Física) del modelo OSI. Simplemente regenera y retransmite señales eléctricas a todos los puertos, sin capacidad de procesar direcciones MAC (Capa 2) ni direcciones IP (Capa 3).",
        "source_reference": "Capítulo 2: Hardware de Red > Dispositivos de Capa 1"
      },
      {
        "id": 4,
        "has_context_image": false,
        "question": "Alexander necesita configurar dos servidores web orientados al público y asegurarse de que un atacante no pueda acceder a su intranet si esos servidores se ven comprometidos. ¿Cuál de los siguientes elementos debería utilizar?",
        "options": [
          "VPN",
          "VNC",
          "EAP",
          "DMZ"
        ],
        "answer": "DMZ",
        "explanation": "Una DMZ (Zona Desmilitarizada) es una subred aislada que contiene los servicios externos de una organización (como servidores web). Al colocar estos servidores en una DMZ, Alexander crea una capa de seguridad que evita que un atacante que comprometa un servidor web tenga acceso directo a la red interna (intranet).",
        "source_reference": "Capítulo 18: Defensa de la Red > Zonas de Seguridad (Networking)"
      },
      {
        "id": 5,
        "has_context_image": false,
        "question": "En un centro de datos, ¿qué componente se puede asegurar con un mecanismo de bloqueo para evitar el acceso no autorizado a las conexiones de red y al cableado?",
        "options": [
          "Cable Ethernet",
          "Panel de parcheo (Patch panel)",
          "Transceptor óptico",
          "Interfaz Virtual de Switch (SVI)"
        ],
        "answer": "Panel de parcheo (Patch panel)",
        "explanation": "Aunque físicamente se pueden proteger los cables, los paneles de parcheo (Patch panels) suelen estar alojados en armarios o bastidores (racks) que cuentan con mecanismos de bloqueo. Además, existen cubiertas bloqueables específicas para paneles de parcheo que impiden la desconexión o conexión no autorizada de cables, protegiendo la integridad física de la red.",
        "source_reference": "Capítulo 10: Instalaciones Físicas > Seguridad Física"
      },
      {
        "id": 6,
        "has_context_image": false,
        "question": "¿Cuál de las siguientes tecnologías inalámbricas utiliza MU-MIMO en canales no superpuestos para aumentar el ancho de banda de la red inalámbrica?",
        "options": [
          "802.11ac",
          "802.11n",
          "802.11b",
          "802.11g"
        ],
        "answer": "802.11ac",
        "explanation": "El estándar 802.11ac (también conocido como Wi-Fi 5) introdujo MU-MIMO (Multiple User - Multiple Input Multiple Output), que permite a un punto de acceso comunicarse con múltiples clientes simultáneamente. Además, opera exclusivamente en la banda de 5 GHz, aprovechando canales más anchos y no superpuestos para aumentar el rendimiento.",
        "source_reference": "Capítulo 9: Wireless > Estándares Wi-Fi"
      },
      {
        "id": 7,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes puertos debe estar abierto para permitir la sincronización de un sistema jerárquico y semiestratificado de fuentes de tiempo dentro de una red?",
        "options": [
          "143",
          "3389",
          "123",
          "389"
        ],
        "answer": "123",
        "explanation": "El puerto 123 (UDP) es utilizado por el protocolo NTP (Network Time Protocol) para sincronizar los relojes de los dispositivos en una red mediante una estructura jerárquica de estratos (stratum).",
        "source_reference": "Capítulo 5: Medios y Topologías > NTP"
      },
      {
        "id": 8,
        "has_context_image": false,
        "question": "Una instalación de investigación remota situada en el terreno accidentado de una región montañosa requiere una conectividad a Internet robusta para dar soporte a proyectos de investigación que hacen un uso intensivo de datos. Las conexiones por cable son impracticables debido al difícil paisaje. Teniendo en cuenta sus necesidades, ¿qué tecnología deberían priorizar para obtener la conectividad más fiable con la menor latencia?",
        "options": [
          "Internet por satélite",
          "Radio de alta frecuencia",
          "Conexión por microondas",
          "Red celular"
        ],
        "answer": "Conexión por microondas",
        "explanation": "Una conexión por microondas (Microwave link) de punto a punto ofrece una latencia significativamente menor en comparación con el satélite (cuyas señales deben viajar al espacio y volver). En regiones montañosas donde no se puede tender cable, los enlaces de microondas son una solución de alto rendimiento y baja latencia muy efectiva entre cimas o puntos con línea de visión.",
        "source_reference": "Capítulo 8: Switches y VLANs > Enlaces Inalámbricos Terrestres"
      },
      {
        "id": 9,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes puertos utiliza el protocolo SIP?",
        "options": [
          "5060/5061",
          "139/445",
          "80/443",
          "389/636"
        ],
        "answer": "5060/5061",
        "explanation": "SIP (Session Initiation Protocol), utilizado para la señalización en VoIP, utiliza por defecto el puerto 5060 para conexiones no cifradas y el puerto 5061 para SIP sobre TLS (cifrado).",
        "source_reference": "Capítulo 5: Medios y Topologías > Puertos de Voz sobre IP"
      },
      {
        "id": 10,
        "has_context_image": false,
        "question": "¿Qué factor ambiental es fundamental para evitar la corrosión de los equipos y la acumulación de estática?",
        "options": [
          "Supresión de incendios",
          "Control de humedad",
          "Filtración de polvo",
          "Aire acondicionado"
        ],
        "answer": "Control de humedad",
        "explanation": "El control de la humedad es crítico en los centros de datos: una humedad demasiado baja aumenta el riesgo de descargas electrostáticas (ESD/estática), mientras que una humedad demasiado alta puede provocar condensación y corrosión de los componentes electrónicos.",
        "source_reference": "Capítulo 10: Instalaciones Físicas > Control de Humedad"
      },
      {
        "id": 11,
        "has_context_image": false,
        "question": "Al planificar la infraestructura eléctrica de un nuevo centro de datos, ¿por qué es fundamental calcular con precisión la carga de potencia de todos los dispositivos?",
        "options": [
          "Para determinar el número de PDUs necesarias.",
          "Para seleccionar la capacidad adecuada del UPS.",
          "Para calcular el consumo total de energía a efectos de facturación.",
          "Para garantizar que la refrigeración ambiental sea suficiente."
        ],
        "answer": "Para seleccionar la capacidad adecuada del UPS.",
        "explanation": "Calcular la carga de potencia total (power load) es esencial para dimensionar correctamente el Sistema de Alimentación Ininterrumpida (UPS). Si la carga de los dispositivos supera la capacidad del UPS, este no podrá mantener el equipo funcionando durante un corte de energía y podría sobrecargarse, fallando en su propósito crítico.",
        "source_reference": "Capítulo 10: Instalaciones Físicas > Infraestructura de Energía"
      },
      {
        "id": 12,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes se utiliza para conectar redes de Categoría 5e o superior en un MDF o IDF?",
        "options": [
          "RJ-11",
          "Conector F",
          "Bloque 66",
          "Bloque 110"
        ],
        "answer": "Bloque 110",
        "explanation": "El Bloque 110 es el estándar de terminación para el cableado de datos de Categoría 5e, 6 y superior en los marcos de distribución (MDF/IDF). A diferencia del bloque 66 (usado principalmente para voz analógica), el bloque 110 está diseñado para soportar mayores anchos de banda y reducir la diafonía.",
        "source_reference": "Capítulo 2: Hardware de Red > Terminaciones de Cobre"
      },
      {
        "id": 13,
        "has_context_image": false,
        "question": "Amanda, una ingeniera de redes, observa un aumento de la pérdida de paquetes en la red de la empresa, lo que provoca una degradación del rendimiento de las aplicaciones en tiempo real, como la VoIP y las videoconferencias. ¿Cuál de los siguientes enfoques debería aplicar Amanda para mitigar mejor la pérdida de paquetes y mejorar el rendimiento de las aplicaciones?",
        "options": [
          "Actualizar los switches de red",
          "Implementar VLANs",
          "Aumentar el tamaño de la MTU",
          "Configurar QoS"
        ],
        "answer": "Configurar QoS",
        "explanation": "La Calidad de Servicio (QoS) permite priorizar el tráfico sensible a la latencia y al jitter, como la voz (VoIP) y el vídeo, sobre el tráfico de datos menos crítico. Al configurar QoS, Amanda asegura que durante periodos de congestión, los paquetes de aplicaciones en tiempo real se procesen primero, mitigando su pérdida y mejorando el rendimiento detectado por el usuario.",
        "source_reference": "Capítulo 8: Switches y VLANs > Calidad de Servicio (QoS)"
      },
      {
        "id": 14,
        "has_context_image": false,
        "question": "¿Qué característica de los dispositivos de red se utiliza comúnmente para aplicar el filtrado de tráfico basado en criterios predefinidos como direcciones IP de origen y destino, puertos y protocolos?",
        "options": [
          "VLAN",
          "ACL",
          "DHCP",
          "NAT"
        ],
        "answer": "ACL",
        "explanation": "Las Listas de Control de Acceso (ACL) son el mecanismo fundamental para filtrar el tráfico en routers y switches de capa 3. Permiten permitir o denegar paquetes basándose en información del encabezado, como la IP (Capa 3) y el puerto/protocolo (Capa 4).",
        "source_reference": "Capítulo 18: Defensa de la Red > Listas de Control de Acceso"
      },
      {
        "id": 15,
        "has_context_image": false,
        "question": "Glenn ha sido asignado para resolver problemas de conectividad de red de su organización. Tras investigar, identifica un switch de red como el probable culpable y comienza a revisar las estadísticas de la interfaz del switch. Descubre que la interfaz del switch está activa y recibe un aumento notable de tramas de unos 4600 bytes de tamaño. ¿Cuál es la causa más probable de los problemas de conectividad?",
        "options": [
          "Drops (Descartes)",
          "Errores CRC",
          "Runts",
          "Giants"
        ],
        "answer": "Giants",
        "explanation": "En el contexto de Ethernet estándar, las tramas que superan el tamaño máximo de 1518 bytes se denominan 'Giants' (Gigantes). Dado que Glenn detecta tramas de 4600 bytes (muy por encima del límite estándar), estos 'Giants' están causando que el switch las descarte o procese incorrectamente, provocando fallos de conectividad.",
        "source_reference": "Capítulo 19: Troubleshooting > Estadísticas de Interfaz"
      },
      {
        "id": 16,
        "has_context_image": false,
        "question": "Usted trabaja como técnico de redes inalámbricas y le han enviado a casa de un usuario para instalar un punto de acceso inalámbrico 802.11ac nuevo para sustituir al antiguo. Para asegurarse de que todos los dispositivos actuales de la red se conecten automáticamente a la nueva red, configura el SSID, el tipo de cifrado y la contraseña con los mismos que el punto de acceso anterior. Enciende el nuevo punto de acceso y observa que la mayoría de los dispositivos se conectan automáticamente, pero una impresora inalámbrica antigua no se conecta. Observa que la impresora tiene unos 7 años, pero el usuario dice que siempre ha funcionado de maravilla con la antigua red inalámbrica. ¿Cuál es la razón MÁS probable por la que la impresora no se conecta al nuevo punto de acceso?",
        "options": [
          "La potencia de transmisión del punto de acceso es demasiado baja",
          "La impresora inalámbrica está configurada con una contraseña incorrecta",
          "El canal configurado en el punto de acceso es incorrecto",
          "El punto de acceso y la impresora inalámbrica tienen un desajuste de frecuencia"
        ],
        "answer": "El punto de acceso y la impresora inalámbrica tienen un desajuste de frecuencia",
        "explanation": "El estándar 802.11ac (Wi-Fi 5) opera exclusivamente en la banda de 5 GHz. Si la impresora tiene 7 años, es muy probable que solo soporte la banda de 2.4 GHz (802.11b/g/n). Aunque el SSID y la contraseña coincidan, la impresora no 've' la red de 5 GHz del nuevo AP, resultando en un desajuste de frecuencia (frequency mismatch).",
        "source_reference": "Capítulo 9: Wireless > Tecnología Wireless"
      },
      {
        "id": 17,
        "has_context_image": false,
        "question": "Una empresa ha sufrido varias infecciones por virus en los últimos meses. Se determinó que la causa principal eran vulnerabilidades conocidas en las aplicaciones de software utilizadas por la empresa. ¿Qué debería aplicar un administrador para evitar futuros brotes?",
        "options": [
          "Equipo de respuesta ante incidentes",
          "Políticas de uso aceptable",
          "Sistemas de detección de intrusiones basados en host",
          "Gestión de parches"
        ],
        "answer": "Gestión de parches",
        "explanation": "Dado que la causa raíz son 'vulnerabilidades conocidas en el software', la solución directa y más eficaz es la Gestión de Parches (Patch management). Mantener el software actualizado con los últimos parches de seguridad cierra los agujeros que los virus aprovechan para infectar los sistemas.",
        "source_reference": "Capítulo 15: Acceso Remoto > Gestión de Parches"
      },
      {
        "id": 18,
        "has_context_image": false,
        "question": "¿Cuál de las siguientes herramientas utilizaría para conectar un conector RJ-45 a un cable de cobre de par trenzado sin blindaje (UTP) utilizando el estándar EIA/TIA-568B?",
        "options": [
          "Empalmadora de fusión",
          "Crimpadora de cable",
          "Tijeras para cable",
          "Herramienta de impacto (Punchdown tool)"
        ],
        "answer": "Crimpadora de cable",
        "explanation": "Una crimpadora de cable (Cable crimper) es la herramienta utilizada para fijar mecánicamente un conector RJ-45 al extremo de un cable UTP, asegurando que los pines del conector hagan contacto con los hilos de cobre del cable.",
        "source_reference": "Capítulo 2: Hardware de Red > Herramientas de Cableado"
      },
      {
        "id": 19,
        "has_context_image": false,
        "question": "¿Cuál es el flag utilizado para terminar una conexión entre dos hosts cuando el emisor cree que algo ha ido mal con la conexión TCP entre ellos?",
        "options": [
          "ACK",
          "FIN",
          "SYN",
          "RST"
        ],
        "answer": "RST",
        "explanation": "El flag RST (Reset) se utiliza para abortar una conexión de forma inmediata cuando se detecta un error irrecuperable o cuando un host recibe un segmento que no esperaba para una conexión existente. A diferencia de FIN, que cierra la conexión de forma ordenada, RST la termina abruptamente.",
        "source_reference": "Capítulo 4: Puertos y Protocolos > TCP y Flags"
      },
      {
        "id": 20,
        "has_context_image": false,
        "question": "John, un especialista en seguridad, quiere implementar una mayor seguridad para las conexiones entre los centros de datos locales y en la nube. ¿Cuál de los siguientes permitirá extender los servicios de red virtual a través de diferentes entornos de nube y locales y mejorar la seguridad de los datos en tránsito mediante la tunelización?",
        "options": [
          "VPN",
          "VPC Peering",
          "CDN",
          "SD-WAN"
        ],
        "answer": "VPN",
        "explanation": "Una VPN (Red Privada Virtual) utiliza la tunelización y el cifrado para crear una conexión segura sobre una red pública (como Internet), permitiendo que los recursos locales y de la nube se comuniquen como si estuvieran en la misma red privada, protegiendo los datos en tránsito.",
        "source_reference": "Capítulo 18: Defensa de la Red > Tecnologías VPN"
      },
      {
        "id": 21,
        "has_context_image": false,
        "question": "Usted está tratando de seleccionar el mejor dispositivo para instalar para detener proactivamente a los atacantes externos antes de que lleguen a su red interna. ¿Cuál de los siguientes dispositivos sería el MEJOR para seleccionar?",
        "options": [
          "Servidor Syslog",
          "Servidor Proxy",
          "IPS",
          "IDS"
        ],
        "answer": "IPS",
        "explanation": "Un IPS (Sistema de Prevención de Intrusiones) es capaz de detectar y detener (bloquear) proactivamente el tráfico malicioso en tiempo real antes de que afecte a la red interna. A diferencia de un IDS, que solo detecta y alerta, el IPS toma medidas defensivas inmediatas.",
        "source_reference": "Capítulo 18: Defensa de la Red > Sistemas de Detección y Prevención"
      },
      {
        "id": 22,
        "has_context_image": false,
        "question": "En un segmento de red recién ampliado, los usuarios informan de problemas intermitentes de conectividad de red. El equipo de red descubre que algunos dispositivos de red pierden ocasionalmente las conexiones con los recursos compartidos. ¿Qué debe comprobarse PRIMERO para identificar la causa de estos problemas de conectividad?",
        "options": [
          "Ajustes de velocidad y dúplex",
          "Posibles direcciones IP duplicadas",
          "Configuración de los puertos del switch",
          "Ajustes de Power over Ethernet (PoE)"
        ],
        "answer": "Posibles direcciones IP duplicadas",
        "explanation": "En un segmento de red ampliado, las direcciones IP duplicadas son una causa muy común de conectividad intermitente. Cuando dos dispositivos tienen la misma IP, el tráfico se dirige a uno u otro de forma errática (basado en el último anuncio ARP), lo que provoca desconexiones aleatorias.",
        "source_reference": "Capítulo 19: Troubleshooting > Problemas Comunes de DHCP e IP"
      },
      {
        "id": 23,
        "has_context_image": false,
        "question": "Usted trabaja como técnico de redes inalámbricas y utiliza un controlador inalámbrico para ayudar en la administración de la red. Su supervisor le ha pedido que implemente un servicio de autenticación centralizado. ¿Cuál de los siguientes dispositivos debería instalar y configurar si desea reducir el tiempo dedicado a la administración de la red manteniendo un servicio de autenticación centralizado para sus usuarios?",
        "options": [
          "Switch de Capa 3",
          "Servidor Proxy",
          "Concentrador VPN",
          "Servidor RADIUS"
        ],
        "answer": "Servidor RADIUS",
        "explanation": "Un servidor RADIUS (Remote Authentication Dial-In User Service) proporciona autenticación, autorización y contabilidad (AAA) centralizada. Al usar RADIUS, el técnico puede gestionar las credenciales de todos los usuarios en un solo lugar en lugar de configurarlas individualmente en cada punto de acceso o switch, lo que reduce drásticamente el tiempo de administración.",
        "source_reference": "Capítulo 17: Amenazas y Ataques > Detección de Intrusos y VPN"
      },
      {
        "id": 24,
        "has_context_image": false,
        "question": "Yvonne, administradora de redes, necesita verificar la información de enrutamiento en un router para solucionar un problema de enrutamiento en la red. ¿Qué comando debería utilizar Yvonne para mostrar las entradas de la tabla de enrutamiento en el router?",
        "options": [
          "show route",
          "show interface",
          "show config",
          "show power"
        ],
        "answer": "show route",
        "explanation": "El comando 'show ip route' (o abreviado 'show route' en algunos entornos) es el comando estándar para visualizar la tabla de enrutamiento de un router, mostrando las redes conocidas, las métricas y el siguiente salto para cada destino.",
        "source_reference": "Capítulo 16: Fundamentos de Seguridad > Comandos de Red"
      },
      {
        "id": 25,
        "has_context_image": false,
        "question": "Su empresa está experimentando velocidades de red lentas de unos 54 Mbps en su red inalámbrica. Se le ha pedido que realice una evaluación de la red inalámbrica existente y recomiende una solución. Ha recomendado que la empresa se actualice a una infraestructura inalámbrica 802.11n u 802.11ac para obtener mayores velocidades de red. ¿Cuál de las siguientes tecnologías permite a una red 802.11n u 802.11ac alcanzar velocidades superiores a 54 Mbps?",
        "options": [
          "WPA2",
          "LWAPP",
          "MIMO",
          "PoE"
        ],
        "answer": "MIMO",
        "explanation": "La tecnología MIMO (Multiple Input Multiple Output) utiliza múltiples antenas tanto en el transmisor como en el receptor para enviar y recibir múltiples flujos de datos simultáneamente sobre el mismo canal de frecuencia. Esto es lo que permite a los estándares 802.11n y 802.11ac superar con creces el límite de 54 Mbps de los estándares anteriores (802.11a/g).",
        "source_reference": "Capítulo 9: Wireless > Tecnologías de Antena"
      },
      {
        "id": 26,
        "has_context_image": false,
        "question": "Gladys ha sido contratada para conectar dos edificios dentro de una red de campus mediante una conexión por cable directa. La distancia entre estos edificios es significativa, y ella quiere asegurar la integridad de la transmisión de datos. ¿Qué tipo de cable es MÁS adecuado para estas tiradas de larga distancia entre edificios?",
        "options": [
          "Cable coaxial",
          "UTP Cat5e",
          "Fibra monomodo",
          "STP Cat6"
        ],
        "answer": "Fibra monomodo",
        "explanation": "La fibra óptica monomodo (Single-mode fiber) es la opción ideal para conexiones de larga distancia (varios kilómetros) entre edificios, ya que ofrece un ancho de banda altísimo y una atenuación de señal mínima, además de ser inmune a las interferencias electromagnéticas.",
        "source_reference": "Capítulo 2: Hardware de Red > Cables de Fibra Óptica"
      },
      {
        "id": 27,
        "has_context_image": false,
        "question": "Dion Training utiliza una red cableada en todo el edificio para proporcionar conectividad de red. A Jason le preocupa que un visitante pueda enchufar su portátil a una toma de pared CAT 5e en el vestíbulo y acceder a la red corporativa. ¿Qué tecnología debería utilizarse para evitar que los usuarios accedan a los recursos de la red si pueden conectar sus portátiles a la red?",
        "options": [
          "VPN",
          "UTM",
          "NAC",
          "DMZ"
        ],
        "answer": "NAC",
        "explanation": "NAC (Network Access Control) es una tecnología que inspecciona los dispositivos cuando intentan conectarse a la red. Puede requerir autenticación y verificar el cumplimiento de políticas de seguridad antes de permitir el acceso. Si un usuario no autorizado conecta su portátil, el sistema NAC puede bloquear el puerto del switch o enviarlo a una VLAN de invitados aislada.",
        "source_reference": "Capítulo 17: Amenazas y Ataques > Seguridad de Acceso"
      },
      {
        "id": 28,
        "has_context_image": false,
        "question": "Un técnico ha terminado (punched down) solo los dos pines centrales (pines 4 y 5) en un panel de parcheo Ethernet. ¿Para qué uso ha cableado el técnico este puerto?",
        "options": [
          "POTS",
          "568A",
          "10BaseT",
          "568B"
        ],
        "answer": "POTS",
        "explanation": "POTS (Plain Old Telephone Service), o servicio telefónico analógico, utiliza típicamente un solo par de hilos. En un conector RJ-45 o RJ-11, el par central (pines 4 y 5) se utiliza tradicionalmente para la primera línea telefónica. Ethernet (10BaseT/100BaseT) requiere los pares 1-2 y 3-6.",
        "source_reference": "Capítulo 2: Hardware de Red > Estándares de Cableado"
      },
      {
        "id": 29,
        "has_context_image": true,
        "question": "Los usuarios de la red inalámbrica comenzaron a experimentar recientemente problemas de velocidad y rendimiento después de que el Punto de Acceso 2 (AP2) fuera reemplazado debido a un fallo de hardware. La red inalámbrica original se instaló según las especificaciones de un consultor y siempre había funcionado correctamente. Se le ha pedido que evalúe la situación y resuelva los problemas ajustando la menor cantidad de configuraciones posible. Basándose en el plano de planta, ¿en qué dispositivo de red iniciaría sesión PRIMERO para sus esfuerzos de resolución de problemas?",
        "options": [
          "SW1",
          "AP2",
          "AP1",
          "AP3"
        ],
        "answer": "AP2",
        "explanation": "Dado que los problemas comenzaron específicamente después de reemplazar el AP2, este es el punto de fallo más probable. Es probable que la configuración del nuevo AP2 (como el canal o la potencia de transmisión) no coincida con la del consultor original o esté causando interferencias con AP1 y AP3.",
        "source_reference": "Capítulo 11: Documentación > Problemas de Rendimiento y Configuración",
        "image_path": "assets/images/exam2/q29_wireless_troubleshooting.png"
      },
      {
        "id": 30,
        "has_context_image": false,
        "question": "Usted está realizando un escaneo de puertos de un servidor antiguo en su red para determinar qué servicios se están ejecutando. Encuentra que los puertos 80 y 443 están abiertos, pero los puertos 20 y 21 aparecen como cerrados. El resto de los puertos aparecen como FILTRADOS (FILTERED). Basándose en este informe, ¿qué puede determinar sobre el servidor?",
        "options": [
          "El servidor funciona como servidor web y deniega cualquier otra solicitud de servicio",
          "El servidor está fuera de línea y no responde",
          "El servicio está ejecutando un servidor FTP y deniega cualquier otra solicitud de servicio",
          "El servidor está detrás de un firewall y tiene bloqueada la recepción de tráfico"
        ],
        "answer": "El servidor está detrás de un firewall y tiene bloqueada la recepción de tráfico",
        "explanation": "El estado 'FILTERED' en un escaneo de puertos (como Nmap) indica que un firewall, filtro o obstáculo en la red está impidiendo que las sondas lleguen al puerto, por lo que el escáner no puede determinar si está abierto o cerrado. Que la mayoría de los puertos estén filtrados sugiere fuertemente la presencia de un firewall.",
        "source_reference": "Capítulo 16: Fundamentos de Seguridad > Nmap y Escaneo de Puertos"
      },
      {
        "id": 31,
        "has_context_image": false,
        "question": "¿Cuál de las siguientes políticas o planes dictaría qué tipos de archivos serán inspeccionados automáticamente antes de ser enviados por el servidor de correo electrónico de una organización?",
        "options": [
          "Política de prevención de pérdida de datos (DLP)",
          "Política de uso aceptable (AUP)",
          "Política de acceso remoto",
          "Política de contraseñas"
        ],
        "answer": "Política de prevención de pérdida de datos (DLP)",
        "explanation": "Una política de DLP (Data Loss Prevention) se enfoca en identificar, monitorear y proteger los datos sensibles. Las herramientas de DLP pueden escanear correos electrónicos salientes y sus archivos adjuntos para evitar que información confidencial salga de la organización.",
        "source_reference": "Capítulo 18: Defensa de la Red > Tecnologías DLP"
      },
      {
        "id": 32,
        "has_context_image": false,
        "question": "Un administrador nota un cable sin usar detrás de un armario que termina con un conector DB-9. ¿Qué protocolo es probable que se utilice con este cable?",
        "options": [
          "Token Ring",
          "ATM",
          "802.3",
          "RS-232"
        ],
        "answer": "RS-232",
        "explanation": "El conector DB-9 se utiliza comúnmente para comunicaciones en serie siguiendo el estándar RS-232, a menudo utilizado para la gestión de dispositivos de red a través de un puerto de consola.",
        "source_reference": "Capítulo 2: Hardware de Red > Conectores Seriales"
      },
      {
        "id": 33,
        "has_context_image": false,
        "question": "Susan quiere usar su iPad en la red corporativa, pero no hay red inalámbrica disponible en su oficina. Decide comprar un router inalámbrico y conectarlo a la toma de red de su oficina. Horas después, sus compañeros se quejan de 'errores de dirección IP duplicada'. ¿Qué tipo de ataque realizó Susan inadvertidamente?",
        "options": [
          "VLAN hopping",
          "Rogue DHCP",
          "DNS poisoning",
          "ARP spoofing"
        ],
        "answer": "Rogue DHCP",
        "explanation": "Al conectar un router doméstico a la red corporativa, Susan activó un 'Rogue DHCP server'. El router comenzó a asignar direcciones IP de su propio rango a los equipos de la red corporativa, lo que causó conflictos con el servidor DHCP oficial y errores de IP duplicadas.",
        "source_reference": "Capítulo 10: Instalaciones Físicas > Servidores DHCP No Autorizados"
      },
      {
        "id": 34,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes dicta lo que un empleado puede y no puede hacer cuando utiliza los ordenadores de la organización y la red empresarial?",
        "options": [
          "Defensa en profundidad",
          "Mínimo privilegio",
          "Zero Trust",
          "Política de uso aceptable (AUP)"
        ],
        "answer": "Política de uso aceptable (AUP)",
        "explanation": "La Política de Uso Aceptable (Acceptable Use Policy) es un documento que define las reglas y responsabilidades que los usuarios deben aceptar para acceder a la red y recursos tecnológicos de la organización.",
        "source_reference": "Capítulo 15: Acceso Remoto > Documentación de Políticas"
      },
      {
        "id": 35,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes estándares Ethernet se utiliza con cable de fibra óptica monomodo?",
        "options": [
          "10GBase-LR",
          "40GBase-T",
          "1000Base-T",
          "10GBase-SR"
        ],
        "answer": "10GBase-LR",
        "explanation": "10GBase-LR (Long Range) está diseñado para su uso con fibra monomodo, permitiendo distancias de hasta 10 km. Los estándares que terminan en -SR (Short Range) suelen ser para fibra multimodo, y los que terminan en -T son para par trenzado (cobre).",
        "source_reference": "Capítulo 2: Hardware de Red > Estándares de Fibra Óptica"
      },
      {
        "id": 36,
        "has_context_image": false,
        "question": "¿Qué topología de red cableada se utiliza comúnmente o debería considerarse por su control centralizado, facilidad de gestión y capacidad para aislar problemas de red a un dispositivo individual?",
        "options": [
          "Topología de anillo",
          "Topología de malla",
          "Topología de estrella",
          "Topología de bus"
        ],
        "answer": "Topología de estrella",
        "explanation": "En una topología de estrella, todos los dispositivos se conectan a un nodo central (como un switch). Esto permite gestionar la red de forma centralizada y, si un cable o dispositivo falla, solo ese nodo se ve afectado, facilitando el aislamiento de problemas.",
        "source_reference": "Capítulo 1: El Modelo OSI > Estructuras de Red Comunes"
      },
      {
        "id": 37,
        "has_context_image": false,
        "question": "Rachael, administradora de red, necesita revisar los ajustes de configuración actuales en un dispositivo de red. ¿Qué comando debería usar Rachael para mostrar la configuración en ejecución (running configuration) del dispositivo?",
        "options": [
          "show interface",
          "show power",
          "show config",
          "show vlan"
        ],
        "answer": "show config",
        "explanation": "El comando 'show running-config' (a menudo abreviado como 'show run' o 'show config' dependiendo del sistema) muestra la configuración que está actualmente activa en la RAM del dispositivo.",
        "source_reference": "Capítulo 16: Fundamentos de Seguridad > Gestión de Configuración"
      },
      {
        "id": 38,
        "has_context_image": true,
        "question": "Se le ha encomendado la tarea de probar un cable de red CAT 5e. Tras realizar la prueba, obtiene los siguientes resultados:\n1, 2: Open, 3 ft\n3, 6: Short, 3 ft\n4, 5: Open, 3 ft\n7, 8: Open, 3 ft\n¿Qué herramienta utilizó para probar el cable y obtener estos resultados?",
        "options": [
          "Certificador de cables",
          "Analizador de protocolos",
          "Multímetro",
          "Herramienta de impacto",
          "OTDR",
          "Crimpadora"
        ],
        "answer": "OTDR",
        "explanation": "Un reflectómetro de dominio de tiempo (TDR o OTDR para fibra) es la herramienta que puede detectar fallos (abiertos, cortos) y indicar la distancia exacta (en este caso 3 pies) a la que se encuentra el problema enviando pulsos de señal y midiendo su reflexión.",
        "source_reference": "Capítulo 2: Hardware de Red > Herramientas de Prueba",
        "image_path": "assets/images/exam2/q38_cable_tester.png"
      },
      {
        "id": 39,
        "has_context_image": true,
        "question": "Su empresa ha comprado un nuevo edificio para sus suites ejecutivas. Se le ha pedido que elija el mejor cifrado para AP4 y AP5 con el fin de establecer una conexión inalámbrica segura entre el edificio principal y las suites ejecutivas. ¿Cuál es el MEJOR cifrado de las opciones siguientes para maximizar la seguridad de la red entre AP4 y AP5?",
        "options": [
          "WPA2-TKIP",
          "WPA2-CCMP",
          "Open",
          "WEP",
          "WPA"
        ],
        "answer": "WPA2-CCMP",
        "explanation": "WPA2 con CCMP (basado en el cifrado AES) es el estándar de seguridad más robusto de las opciones presentadas. TKIP es más antiguo y menos seguro, y WEP/WPA están obsoletos por ser vulnerables.",
        "source_reference": "Capítulo 17: Amenazas y Ataques > Cifrado Inalámbrico",
        "image_path": "assets/images/exam2/q39_encryption_layout.png"
      },
      {
        "id": 40,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes enunciados sobre los cables triaxiales (Twinaxial) es incorrecto?",
        "options": [
          "Los cables triaxiales se utilizan principalmente en redes de fibra óptica para conectividad de larga distancia",
          "Los cables triaxiales se utilizan comúnmente para la transmisión de datos a alta velocidad y corta distancia",
          "Los cables triaxiales consisten en dos conductores internos rodeados por material aislante y un blindaje exterior",
          "Los cables triaxiales son alternativas rentables a los cables coaxiales para ciertas aplicaciones"
        ],
        "answer": "Los cables triaxiales se utilizan principalmente en redes de fibra óptica para conectividad de larga distancia",
        "explanation": "Esta afirmación es INCORRECTA. Los cables Twinaxial (Dac) son de cobre, no de fibra, y se utilizan exclusivamente para distancias muy cortas (típicamente dentro de un rack o entre racks adyacentes) debido a sus limitaciones físicas.",
        "source_reference": "Capítulo 2: Hardware de Red > Medios de Cobre Especializados"
      },
      {
        "id": 41,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes se utiliza para proporcionar energía eléctrica de emergencia durante un corte corto o hasta que una solución a largo plazo pueda entrar en funcionamiento?",
        "options": [
          "UPS",
          "Generador",
          "HVAC",
          "PDU"
        ],
        "answer": "UPS",
        "explanation": "Un UPS (Uninterruptible Power Supply) proporciona energía inmediata mediante baterías durante cortes breves o hasta que se puede realizar un apagado ordenado o se activa un generador a largo plazo.",
        "source_reference": "Capítulo 14: Servicios de Red > Alta Disponibilidad de Energía"
      },
      {
        "id": 42,
        "has_context_image": false,
        "question": "¿Qué protocolo de descubrimiento de red permite a los dispositivos anunciar su identidad, capacidades y dispositivos vecinos, facilitando la gestión de la red y la resolución de problemas? (Elija todos los que correspondan)",
        "options": [
          "CDP",
          "LLDP",
          "SNMP",
          "FTP",
          "OSPF",
          "VLANs"
        ],
        "answer": "CDP, LLDP",
        "explanation": "CDP (Cisco Discovery Protocol) y LLDP (Link Layer Discovery Protocol) son protocolos de Capa 2 diseñados específicamente para el descubrimiento de vecinos e identidad en la red. LLDP es el estándar abierto, mientras que CDP es propietario de Cisco.",
        "source_reference": "Capítulo 11: Documentación > Documentación de Red"
      },
      {
        "id": 43,
        "has_context_image": false,
        "question": "¿Qué tipo de servidor DNS mejora la eficiencia de la resolución de nombres almacenando en caché la respuesta a una consulta que ha reenviado previamente a otro servidor, pero no contiene los datos originales?",
        "options": [
          "Servidor DNS recursivo",
          "Servidor DNS primario",
          "Servidor DNS no autoritativo",
          "Servidor DNS autoritativo"
        ],
        "answer": "Servidor DNS no autoritativo",
        "explanation": "Un servidor DNS no autoritativo obtiene la información de otros servidores y la almacena en su caché. Cuando responde a un cliente, lo hace basándose en su caché, lo que es eficiente, pero no es la fuente original (autoritativa) de los datos.",
        "source_reference": "Capítulo 5: Medios y Topologías > Jerarquía de DNS"
      },
      {
        "id": 44,
        "has_context_image": false,
        "question": "¿Cuál es el primer flag utilizado en el establecimiento de una conexión TCP o durante el inicio de un saludo de tres vías (three-way handshake) entre dos hosts?",
        "options": [
          "SYN",
          "FIN",
          "RST",
          "ACK"
        ],
        "answer": "SYN",
        "explanation": "El proceso de conexión TCP comienza con el flag SYN (Synchronize) enviado por el host que desea iniciar la conexión.",
        "source_reference": "Capítulo 4: Puertos y Protocolos > Saludo de Tres Vías de TCP"
      },
      {
        "id": 45,
        "has_context_image": false,
        "question": "Acaba de terminar de instalar una nueva aplicación web y necesita conectarla a su servidor de base de datos MySQL. ¿Qué puerto debe estar permitido para habilitar las comunicaciones a través de su firewall entre la aplicación web y su servidor de base de datos?",
        "options": [
          "1433",
          "3306",
          "1521",
          "3389"
        ],
        "answer": "3306",
        "explanation": "MySQL utiliza por defecto el puerto TCP 3306. (1433 es para MSSQL, 1521 para Oracle y 3389 para RDP).",
        "source_reference": "Capítulo 4: Puertos y Protocolos > Puertos Comunes"
      },
      {
        "id": 46,
        "has_context_image": false,
        "question": "Cuando un resolvedor DNS no puede encontrar la respuesta en su caché, consulta a otro servidor que puede realizar los pasos necesarios para obtener la respuesta definitiva. ¿Cómo se llama este proceso?",
        "options": [
          "Búsqueda autoritativa (Authoritative lookup)",
          "Búsqueda recursiva (Recursive lookup)",
          "Búsqueda secundaria (Secondary lookup)",
          "Búsqueda primaria (Primary lookup)"
        ],
        "answer": "Búsqueda recursiva (Recursive lookup)",
        "explanation": "La búsqueda recursiva es el proceso mediante el cual un servidor DNS realiza todo el trabajo de seguimiento de una cadena de consultas hasta encontrar el servidor autoritativo que tiene la respuesta definitiva para el cliente.",
        "source_reference": "Capítulo 5: Medios y Topologías > Consultas DNS"
      },
      {
        "id": 47,
        "has_context_image": false,
        "question": "Leon, un analista de seguridad de red, está investigando actividad sospechosa en una oficina corporativa grande. Necesita una herramienta que pueda interceptar el tráfico de red de forma fluida y monitorearlo discretamente sin interrumpir las operaciones. La red abarca varios pisos, con varios departamentos interconectados mediante cableado físico. ¿Qué herramienta debería usar Leon para monitorear el tráfico de red sin interrumpir las operaciones en la oficina corporativa de varios pisos?",
        "options": [
          "Probador de cables",
          "Sniffer de red",
          "Punto de acceso inalámbrico (WAP)",
          "Punto de acceso de tráfico (TAP)"
        ],
        "answer": "Punto de acceso de tráfico (TAP)",
        "explanation": "Un Network TAP (Test Access Point) es un dispositivo de hardware que permite monitorear el tráfico de red en un enlace físico de forma pasiva y sin interrumpir el flujo de datos. A diferencia de un puerto SPAN, no introduce carga adicional en el switch.",
        "source_reference": "Capítulo 16: Fundamentos de Seguridad > Herramientas de Monitoreo Físico"
      },
      {
        "id": 48,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes debería implementarse para permitir el acceso a la red inalámbrica a los clientes en el vestíbulo (lobby) utilizando una contraseña compartida como clave?",
        "options": [
          "WPA2",
          "Firewall",
          "IPsec",
          "Geofencing"
        ],
        "answer": "WPA2",
        "explanation": "WPA2 (en su modo Personal o Pre-Shared Key) se utiliza para autenticar usuarios en una red inalámbrica mediante una contraseña compartida. Es el estándar común para acceso inalámbrico seguro en entornos pequeños o públicos.",
        "source_reference": "Capítulo 17: Amenazas y Ataques > Seguridad Inalámbrica"
      },
      {
        "id": 49,
        "has_context_image": false,
        "question": "Diana trabaja como desarrolladora web y tiene la tarea de mejorar la usabilidad del sitio web de su empresa proporcionando información descriptiva y legible por humanos sobre el dominio. Como parte de su tarea, necesita incluir información basada en texto que describa el propósito, el contenido o la propiedad del dominio. ¿Qué tipo de registro específico debería usar Diana para lograr este objetivo y proporcionar información legible por humanos sobre el dominio?",
        "options": [
          "PTR",
          "AAAA",
          "CNAME",
          "TXT"
        ],
        "answer": "TXT",
        "explanation": "Los registros TXT de DNS permiten a los administradores insertar texto arbitrario en los registros DNS. Esto se utiliza comúnmente para proporcionar información sobre el dominio, notas de propiedad o para servicios de verificación (como SPF o registros del sitio).",
        "source_reference": "Capítulo 5: Medios y Topologías > Tipos de Registros DNS"
      },
      {
        "id": 50,
        "has_context_image": false,
        "question": "Su estación de trabajo ha sido víctima de un ataque 'on-path' (hombre en el medio). Tras la investigación, determina que el ataque está ocurriendo en la Capa 2 del modelo OSI y está redirigiendo el tráfico destinado a su estación de trabajo hacia la estación de trabajo del atacante en su lugar. ¿Qué tipo de ataque se realizó contra su estación de trabajo?",
        "options": [
          "Rogue DHCP",
          "VLAN hopping",
          "DNS poisoning",
          "ARP spoofing"
        ],
        "answer": "ARP spoofing",
        "explanation": "El ARP spoofing (o envenenamiento de caché ARP) es un ataque de Capa 2 donde un atacante envía mensajes ARP falsos a una LAN para asociar su dirección MAC con la dirección IP de otro host legítimo (como el gateway), permitiéndole interceptar su tráfico.",
        "source_reference": "Capítulo 10: Instalaciones Físicas > Ataques de Capa 2"
      },
      {
        "id": 51,
        "has_context_image": false,
        "question": "Cozyco Investments ha experimentado un ciberataque destinado a interceptar el tráfico web para robar información sensible; involucró una técnica que corrompe la caché DNS de un servidor para redirigir a los usuarios a sitios web maliciosos. ¿Cuál de los siguientes es más probable que se haya utilizado?",
        "options": [
          "ARP spoofing",
          "DNS poisoning",
          "SSL stripping",
          "DNS spoofing"
        ],
        "answer": "DNS poisoning",
        "explanation": "El DNS poisoning (envenenamiento de DNS) consiste en introducir datos falsos en la caché de un servidor de nombres DNS, de modo que las consultas devuelvan una dirección IP incorrecta (la del atacante) y redirijan a los usuarios a sitios maliciosos.",
        "source_reference": "Capítulo 10: Instalaciones Físicas > Vulnerabilidades de DNS"
      },
      {
        "id": 52,
        "has_context_image": false,
        "question": "Thomas tiene un servidor que transmite contenido multimedia (streaming) a la red local, y el dispositivo es actualmente visible en la red. Todas las estaciones de trabajo de la LAN pueden hacer ping al dispositivo, y todos los firewalls están actualmente desactivados. El objetivo es que el servidor multimedia permita que diferentes estaciones de trabajo vean la transmisión si deciden suscribirse a ella. El dispositivo de streaming parece funcionar correctamente, pero el contenido no se transmite cuando se solicita. ¿Cuál de las siguientes tecnologías TCP/IP es MÁS probable que no esté implementada correctamente?",
        "options": [
          "Unicast",
          "Anycast",
          "Multicast",
          "Broadcast"
        ],
        "answer": "Multicast",
        "explanation": "Multicast es la tecnología que permite enviar un flujo de datos único a múltiples suscriptores interesados (uno a muchos). Si el ping (unicast) funciona pero el streaming (que suele ser multicast para eficiencia) no, lo más probable es que IGMP o el enrutamiento multicast no estén configurados correctamente.",
        "source_reference": "Capítulo 4: Puertos y Protocolos > Tipos de Transmisión de Datos"
      },
      {
        "id": 53,
        "has_context_image": false,
        "question": "Angela tiene la tarea de mejorar la gestión del cableado y las capacidades de aislamiento de fallos en la sala de servidores de su empresa. Quiere asegurarse de que las conexiones entre los servidores y la infraestructura de red sean fácilmente accesibles e identificables para una resolución rápida de problemas. ¿Qué debería implementar Angela para cumplir con estos requisitos?",
        "options": [
          "Desplegar una VLAN para segmentar el tráfico de red.",
          "Configurar una máscara de subred para dividir el espacio de direcciones IP.",
          "Instalar un panel de parcheo (patch panel) para la gestión centralizada del cableado.",
          "Usar cables codificados por colores para diferentes segmentos de red."
        ],
        "answer": "Instalar un panel de parcheo (patch panel) para la gestión centralizada del cableado.",
        "explanation": "Un panel de parcheo (patch panel) permite organizar el cableado estructurado de forma centralizada. Facilita la identificación de conexiones y permite realizar cambios o pruebas (aislamiento de fallos) de forma rápida sin manipular directamente el cableado permanente o los puertos del switch.",
        "source_reference": "Capítulo 2: Hardware de Red > Gestión de Infraestructura Física"
      },
      {
        "id": 54,
        "has_context_image": false,
        "question": "La instalación de la red está fallando las pruebas de redundancia en el MDF. El tráfico transportado es una mezcla de señales multicast y unicast. ¿Cuál de los siguientes dispositivos manejaría MEJOR el reenvío causado por la interrupción del servicio?",
        "options": [
          "Smart hub",
          "Servidor proxy",
          "Switch de Capa 2",
          "Switch de Capa 3"
        ],
        "answer": "Switch de Capa 3",
        "explanation": "Un switch de Capa 3 puede realizar funciones de enrutamiento y es mejor para manejar redundancia a nivel de red (mediante protocolos de enrutamiento dinámico) y gestionar el tráfico multicast de forma más eficiente que un switch de Capa 2 básico.",
        "source_reference": "Capítulo 3: La Nube > Switches Avanzados"
      },
      {
        "id": 55,
        "has_context_image": false,
        "question": "Un técnico está configurando una nueva red y quiere crear rutas redundantes a través de la red. ¿Cuál de los siguientes debería implementarse para prevenir la degradación del rendimiento dentro de la red debido a bucles?",
        "options": [
          "Spanning tree",
          "VLAN",
          "Inspección ARP",
          "Port mirroring"
        ],
        "answer": "Spanning tree",
        "explanation": "El protocolo Spanning Tree (STP) se utiliza para evitar bucles de conmutación en redes con rutas redundantes. Sin STP, los bucles causarían tormentas de broadcast que degradarían severamente el rendimiento de la red.",
        "source_reference": "Capítulo 3: La Nube > Protocolos de Switch"
      },
      {
        "id": 56,
        "has_context_image": false,
        "question": "Se le ha pedido que añada una entrada a sus registros DNS para permitir que el tráfico SMTP se envíe utilizando su nombre de dominio. ¿Qué tipo de registro debería añadir a su registro DNS?",
        "options": [
          "MX",
          "CNAME",
          "A",
          "AAAA"
        ],
        "answer": "MX",
        "explanation": "El registro MX (Mail Exchanger) especifica el servidor de correo responsable de recibir mensajes de correo electrónico en nombre de un nombre de dominio.",
        "source_reference": "Capítulo 5: Medios y Topologías > Registros de Correo DNS"
      },
      {
        "id": 57,
        "has_context_image": false,
        "question": "¿Cuándo sería más apropiado utilizar el enrutamiento estático en lugar del enrutamiento dinámico?",
        "options": [
          "En una red grande con algoritmos de enrutamiento complejos y múltiples protocolos de enrutamiento.",
          "En una red que cambia rápidamente donde los ajustes de ruta son frecuentes.",
          "En una red pequeña donde la ruta directa entre dispositivos no cambia con frecuencia.",
          "Cuando la red requiere un reenvío automático basado en las condiciones de tráfico en tiempo real."
        ],
        "answer": "En una red pequeña donde la ruta directa entre dispositivos no cambia con frecuencia.",
        "explanation": "El enrutamiento estático es ideal para redes pequeñas y simples con topologías fijas, ya que no introduce sobrecarga de procesamiento ni de ancho de banda como los protocolos dinámicos.",
        "source_reference": "Capítulo 6: Direccionamiento IPv4 > Tipos de Enrutamiento"
      },
      {
        "id": 58,
        "has_context_image": false,
        "question": "Los usuarios comienzan a informar que no pueden conectarse a la red Wi-Fi. Al revisar el servidor DHCP, el administrador de red descubre que todas las direcciones IP en el ámbito (scope) DHCP están en uso. ¿Cuál sería la solución más inmediata para resolver el problema?",
        "options": [
          "Aumentar el tiempo de concesión (lease time) de DHCP.",
          "Reiniciar el servidor DHCP.",
          "Expandir el pool de direcciones DHCP.",
          "Disminuir el tiempo de concesión (lease time) de DHCP."
        ],
        "answer": "Disminuir el tiempo de concesión (lease time) de DHCP.",
        "explanation": "Si el pool está lleno (agotamiento de direcciones), disminuir el tiempo de concesión permitirá que las direcciones IP se liberen y vuelvan al pool más rápidamente, permitiendo que nuevos usuarios se conecten. (Expandir el pool también es una solución, pero a menudo requiere reconfiguración de subred o no es posible si no hay más IPs disponibles en el segmento).",
        "source_reference": "Capítulo 5: Medios y Topologías > Gestión de DHCP"
      },
      {
        "id": 59,
        "has_context_image": false,
        "question": "Anoche, los administradores de sistemas de su empresa realizaron una actualización del servidor. Esta mañana, varios usuarios tienen problemas para acceder a la unidad compartida de la empresa en la red. Se le ha pedido que solucione el problema. ¿Qué documento debería consultar primero para crear una teoría probable sobre la causa del problema?",
        "options": [
          "Notas de la versión del software del servidor",
          "Diagrama de red física",
          "Documentación de gestión de cambios (Change management)",
          "Plan de gestión de cableado"
        ],
        "answer": "Documentación de gestión de cambios (Change management)",
        "explanation": "La documentación de gestión de cambios registra todas las modificaciones realizadas en la infraestructura de TI. Dado que el problema comenzó después de una actualización, este documento proporcionará detalles sobre qué se cambió exactamente, ayudando a identificar la causa potencial del problema.",
        "source_reference": "Capítulo 18: Defensa de la Red > Gestión de Cambios"
      },
      {
        "id": 60,
        "has_context_image": false,
        "question": "Un técnico está instalando un firewall de red y desea bloquear todo el tráfico de WAN a LAN que utilice puertos distintos a los puertos predeterminados para la conectividad de internet y correo electrónico. ¿Qué regla debería verificar el técnico PRIMERO?",
        "options": [
          "Que esté habilitado un denegar implícito (implicit deny)",
          "Que todo el tráfico de salida esté bloqueado",
          "Que todo el tráfico de entrada esté bloqueado",
          "Que se haya creado una DMZ"
        ],
        "answer": "Que esté habilitado un denegar implícito (implicit deny)",
        "explanation": "El 'denegar implícito' es un principio de seguridad donde todo lo que no está explícitamente permitido se prohíbe. Al verificar que exista una regla de denegación implícita al final de la lista de control de acceso (ACL), el técnico asegura que solo se permita el tráfico específicamente autorizado.",
        "source_reference": "Capítulo 12: Monitoreo > Reglas de Firewall (ACL)"
      },
      {
        "id": 61,
        "has_context_image": false,
        "question": "Según el modelo OSI, ¿en cuál de las siguientes capas se encapsulan los datos en paquetes?",
        "options": [
          "Capa 2",
          "Capa 5",
          "Capa 4",
          "Capa 3"
        ],
        "answer": "Capa 3",
        "explanation": "En el modelo OSI, los datos se encapsulan en 'paquetes' en la Capa de Red (Capa 3). En la Capa 4 se llaman segmentos o datagramas, y en la Capa 2 se llaman tramas.",
        "source_reference": "Capítulo 4: Puertos y Protocolos > Capa 3: Red"
      },
      {
        "id": 62,
        "has_context_image": false,
        "question": "¿Qué capa del modelo OSI es responsable del cifrado de datos y la conversión de conjuntos de caracteres, como de ASCII a UTF-8?",
        "options": [
          "Capa 7",
          "Capa 5",
          "Capa 4",
          "Capa 6"
        ],
        "answer": "Capa 6",
        "explanation": "La Capa de Presentación (Capa 6) se encarga de la entrega y el formato de la información, lo que incluye el cifrado, la compresión y la traducción de conjuntos de caracteres.",
        "source_reference": "Capítulo 4: Puertos y Protocolos > Capa 6: Presentación"
      },
      {
        "id": 63,
        "has_context_image": false,
        "question": "Mientras trabaja como técnico de red, a Leah se le asigna la tarea de configurar registros DNS para permitir búsquedas DNS inversas en la red de su organización. Como parte de su tarea, necesita crear registros que mapeen direcciones IP a nombres de dominio. ¿Qué tipo de registro específico debería usar Leah para facilitar las búsquedas DNS inversas?",
        "options": [
          "CNAME",
          "AAAA",
          "PTR",
          "NS"
        ],
        "answer": "PTR",
        "explanation": "Un registro de puntero (PTR) se utiliza para búsquedas DNS inversas, permitiendo resolver una dirección IP en un nombre de dominio.",
        "source_reference": "Capítulo 5: Medios y Topologías > Tipos de Registros DNS"
      },
      {
        "id": 64,
        "has_context_image": false,
        "question": "Dion Training acaba de instalar un servidor web para un nuevo nombre de dominio. ¿Cuál de los siguientes registros DNS debería crearse para permitir que los usuarios lleguen al sitio web usando su nombre de dominio y luego redirigir a los clientes a la dirección IPv6 correcta del servidor?",
        "options": [
          "AAAA",
          "A",
          "SOA",
          "MX"
        ],
        "answer": "AAAA",
        "explanation": "Un registro AAAA mapea un nombre de dominio a una dirección IPv6 (a diferencia del registro A, que mapea a IPv4).",
        "source_reference": "Capítulo 5: Medios y Topologías > Tipos de Registros DNS"
      },
      {
        "id": 65,
        "has_context_image": false,
        "question": "¿Qué término en redes se refiere a una extensión de un protocolo de transferencia de correo electrónico comúnmente utilizado que proporciona cifrado y autenticación?",
        "options": [
          "SMTPS",
          "HTTPS",
          "POP3",
          "IMAP"
        ],
        "answer": "SMTPS",
        "explanation": "SMTPS (Simple Mail Transfer Protocol Secure) es una extensión de SMTP que utiliza SSL/TLS para proporcionar cifrado y autenticación en la transferencia de correos.",
        "source_reference": "Capítulo 14: Servicios de Red > Protocolos Seguros"
      },
      {
        "id": 66,
        "has_context_image": false,
        "question": "Dion Training está reestructurando su sitio web y desea dirigir el tráfico de una URL antigua a una URL nueva sin cambiar el nombre de dominio original. ¿Qué tipo de registro DNS permite que el dominio apunte a otro dominio como un alias?",
        "options": [
          "A",
          "CNAME",
          "NS",
          "PTR"
        ],
        "answer": "CNAME",
        "explanation": "Un registro de nombre canónico (CNAME) se utiliza para crear un alias de un nombre de dominio, apuntándolo hacia otro nombre de dominio (el nombre canónico).",
        "source_reference": "Capítulo 5: Medios y Topologías > Tipos de Registros DNS"
      },
      {
        "id": 67,
        "has_context_image": false,
        "question": "Fail To Pass Systems acaba de ser víctima de una filtración de datos. Su administrador de base de datos necesitaba trabajar desde casa este fin de semana, por lo que descargó la base de datos corporativa en su laptop de trabajo. En su camino a casa, dejó la laptop en un Uber y, unos días después, los datos fueron publicados en internet. ¿Cuál de las siguientes mitigaciones habría proporcionado la mayor protección contra esta filtración de datos?",
        "options": [
          "Requerir que se utilice una VPN para todos los empleados que teletrabajen",
          "Requerir que todos los nuevos empleados firmen un acuerdo de confidencialidad (NDA)",
          "Requerir el enmascaramiento de datos para cualquier información almacenada en la base de datos",
          "Requerir el cifrado de datos en reposo en todos los endpoints"
        ],
        "answer": "Requerir el cifrado de datos en reposo en todos los endpoints",
        "explanation": "El cifrado de datos en reposo (como el cifrado de disco completo) habría protegido los datos en la laptop incluso si esta fuera perdida o robada, ya que los archivos serían ilegibles sin la clave de descifrado.",
        "source_reference": "Capítulo 17: Amenazas y Ataques > Seguridad de Endpoints"
      },
      {
        "id": 68,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes requeriría que el administrador de la red programe una ventana de mantenimiento?",
        "options": [
          "Una actualización de versión menor de un router de producción",
          "Una actualización de versión mayor de un switch central en un laboratorio de pruebas",
          "Reiniciar la laptop del administrador de la red",
          "Se debe enviar una notificación de correo electrónico a toda la empresa"
        ],
        "answer": "Una actualización de versión menor de un router de producción",
        "explanation": "Cualquier cambio o actualización en un dispositivo de producción (como un router) que pueda causar una interrupción del servicio o afectar la red operativa requiere una ventana de mantenimiento programada y comunicada.",
        "source_reference": "Capítulo 18: Defensa de la Red > Mantenimiento y Parches"
      },
      {
        "id": 69,
        "has_context_image": false,
        "question": "Cameron ha ingresado recientemente el comando 'show arp' en la terminal de un dispositivo de red. ¿Cuál de las siguientes opciones describe mejor la salida que Cameron verá de este comando?",
        "options": [
          "La lista de VLANs configuradas en el switch y su estado.",
          "Los ajustes de energía actuales y el consumo del dispositivo de red.",
          "Una tabla que mapea direcciones IP y direcciones MAC actualmente reconocidas por el dispositivo.",
          "Una lista de direcciones IP asignadas al dispositivo y sus tiempos de expiración."
        ],
        "answer": "Una tabla que mapea direcciones IP y direcciones MAC actualmente reconocidas por el dispositivo.",
        "explanation": "El comando 'show arp' muestra la tabla ARP, que contiene el mapeo entre las direcciones de Capa 3 (IP) y las direcciones de Capa 2 (MAC) para los dispositivos locales.",
        "source_reference": "Capítulo 16: Fundamentos de Seguridad > show arp"
      },
      {
        "id": 70,
        "has_context_image": false,
        "question": "¿En qué se diferencia Security Service Edge (SSE) de los enfoques tradicionales de seguridad basados en el perímetro?",
        "options": [
          "SSE integra inteligencia de amenazas para detectar y responder a incidentes de seguridad.",
          "SSE prioriza la segmentación de red sobre el cifrado para la protección de datos.",
          "SSE depende de reglas de firewall estáticas para proteger el perímetro de la red.",
          "SSE se enfoca en asegurar recursos internos en lugar de amenazas externas."
        ],
        "answer": "SSE integra inteligencia de amenazas para detectar y responder a incidentes de seguridad.",
        "explanation": "SSE es un componente de SASE que ofrece servicios de seguridad desde la nube (como SWG, CASB y ZTNA) de forma unificada. Al estar basado en la nube, permite una integración mucho más profunda de inteligencia de amenazas global y una respuesta ágil, a diferencia de los firewalls perimetrales tradicionales que a menudo actúan de forma aislada.",
        "source_reference": "Capítulo 12: Monitoreo > SASE y SSE"
      },
      {
        "id": 71,
        "has_context_image": false,
        "question": "¿Qué número de puerto utiliza LDAP?",
        "options": [
          "1433",
          "636",
          "3389",
          "389"
        ],
        "answer": "389",
        "explanation": "LDAP (Lightweight Directory Access Protocol) utiliza el puerto 389. El puerto 636 se utiliza para LDAPS (LDAP sobre SSL/TLS).",
        "source_reference": "Capítulo 17: Amenazas y Ataques > Protocolos de Directorio"
      },
      {
        "id": 72,
        "has_context_image": false,
        "question": "¿Qué sistema permite a las organizaciones controlar y gestionar las identidades de los usuarios y su acceso a los recursos dentro de una red?",
        "options": [
          "QoS",
          "VPN",
          "DNS",
          "IAM"
        ],
        "answer": "IAM",
        "explanation": "IAM (Identity and Access Management) es el marco de políticas y tecnologías que asegura que las personas adecuadas dentro de un ecosistema tengan el acceso correcto a los recursos tecnológicos.",
        "source_reference": "Capítulo 17: Amenazas y Ataques > Fundamentos de IAM"
      },
      {
        "id": 73,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes se considera un protocolo de enrutamiento sin clase (classless)?",
        "options": [
          "STP",
          "RIPv1",
          "IGRP",
          "OSPF"
        ],
        "answer": "OSPF",
        "explanation": "OSPF (Open Shortest Path First) es un protocolo de enrutamiento sin clase, lo que significa que incluye la máscara de subred en sus actualizaciones, permitiendo el uso de VLSM y CIDR. RIPv1 e IGRP son protocolos con clase que no soportan estas funciones.",
        "source_reference": "Capítulo 6: Direccionamiento IPv4 > Protocolos de Enrutamiento"
      },
      {
        "id": 74,
        "has_context_image": false,
        "question": "Dean tiene la tarea de optimizar la red para VoIP dentro de su organización. Después de pensarlo, decide configurar una Voice VLAN en varios switches. ¿Cuál es la razón principal para configurar este tipo de Voice VLAN?",
        "options": [
          "Segregar y priorizar el tráfico de voz para garantizar la calidad del servicio (QoS).",
          "Agregar tráfico de voz a través de múltiples enlaces para redundancia.",
          "Crear una VLAN separada solo para tráfico de datos.",
          "Evitar que el tráfico de voz sea etiquetado por 802.1Q."
        ],
        "answer": "Segregar y priorizar el tráfico de voz para garantizar la calidad del servicio (QoS).",
        "explanation": "Una Voice VLAN permite separar el tráfico de voz del tráfico de datos general, lo que facilita la aplicación de políticas de Calidad de Servicio (QoS) para dar prioridad a los paquetes de voz y reducir la latencia y el jitter.",
        "source_reference": "Capítulo 13: BCDR > VLANs y QoS"
      },
      {
        "id": 75,
        "has_context_image": false,
        "question": "Una oficina sucursal pequeña con aproximadamente 50 dispositivos necesita una solución simple y rentable para enrutar el tráfico entre la red de la sucursal y su router de puerta de enlace. El protocolo de enrutamiento elegido debe ser fácil de configurar y utilizar la menor cantidad de sobrecarga (overhead). Los dispositivos en la red local también requieren una solución que proporcione un alto rendimiento para la conectividad por cable. ¿Qué combinación de protocolo de enrutamiento y hardware de red debería seleccionarse?",
        "options": [
          "OSPF como protocolo de enrutamiento; conectar los dispositivos con un switch de Capa 2 de 100 Mbps",
          "EIGRP como protocolo de enrutamiento; conectar los dispositivos con un punto de acceso inalámbrico 802.11n",
          "BGP como protocolo de enrutamiento; conectar los dispositivos con un switch de Capa 3 Gigabit",
          "RIP como protocolo de enrutamiento; conectar los dispositivos con un switch de Capa 2 Gigabit"
        ],
        "answer": "RIP como protocolo de enrutamiento; conectar los dispositivos con un switch de Capa 2 Gigabit",
        "explanation": "Para una oficina pequeña con 50 dispositivos, RIP es una solución simple y de baja sobrecarga. Un switch de Capa 2 Gigabit proporciona el alto rendimiento requerido (1000 Mbps) para la conectividad por cable de forma rentable.",
        "source_reference": "Capítulo 6: Direccionamiento IPv4 > Comparación de Protocolos"
      },
      {
        "id": 76,
        "has_context_image": false,
        "question": "¿Qué tecnología de red de almacenamiento utiliza almacenamiento a nivel de archivo para funcionar correctamente?",
        "options": [
          "iSCSI",
          "NAS",
          "FCoE",
          "SAN"
        ],
        "answer": "NAS",
        "explanation": "NAS (Network Attached Storage) opera a nivel de archivo y proporciona almacenamiento compartido a través de protocolos de red como NFS o SMB/CIFS. Por el contrario, SAN, iSCSI y FCoE operan a nivel de bloque.",
        "source_reference": "Capítulo 11: Documentación > NAS vs SAN"
      },
      {
        "id": 77,
        "has_context_image": false,
        "question": "En una configuración de VPN de cliente a sitio, ¿qué tipo de configuración de túnel enruta todo el tráfico, incluido tanto el tráfico de la red corporativa como el tráfico destinado a internet, a través del túnel VPN?",
        "options": [
          "Clientless",
          "Split Tunnel",
          "Full Tunnel",
          "Direct Tunnel"
        ],
        "answer": "Full Tunnel",
        "explanation": "Un Full Tunnel enruta todo el tráfico del cliente a través del túnel VPN, incluyendo tanto el acceso a recursos corporativos como el tráfico de internet. Un Split Tunnel, en cambio, solo envía el tráfico dirigido a la red corporativa a través del VPN, mientras que el tráfico de internet va directamente.",
        "source_reference": "Capítulo 15: Acceso Remoto > Tipos de Túneles VPN"
      },
      {
        "id": 78,
        "has_context_image": false,
        "question": "Acabas de reemplazar el switch perimetral en el segundo piso de Dion Training. Después de terminar, un usuario afirma que ya no puede acceder a la red, pero todo funcionaba bien ayer antes de que reemplazaras el switch. Los compañeros de trabajo del usuario afirman que sus computadoras pueden acceder a la red sin ningún problema. Verificas la parte posterior de la estación de trabajo del usuario y no ves ninguna luz LED encendida o parpadeando en su tarjeta de interfaz de red. ¿Cuál de las siguientes opciones deberías verificar a continuación para resolver este problema?",
        "options": [
          "Verificar que el switch esté conectado al router",
          "Verificar que la tarjeta de interfaz de red esté funcionando correctamente",
          "Verificar que el cable de red esté conectado al nuevo switch",
          "Verificar que el dispositivo esté usando el tipo de cable correcto"
        ],
        "answer": "Verificar que el cable de red esté conectado al nuevo switch",
        "explanation": "Como la NIC no muestra luces LED y solo este usuario tiene problemas después del reemplazo del switch, lo más probable es que el cable de red de ese usuario no se haya reconectado correctamente al nuevo switch. Esto es común durante el reemplazo de equipos.",
        "source_reference": "Capítulo 19: Troubleshooting > Verificación de Conectividad Física"
      },
      {
        "id": 79,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes métodos se utiliza para configurar automáticamente las direcciones de host IPv6?",
        "options": [
          "EUI-64",
          "APIPA",
          "EIA-568B",
          "EBCDIC"
        ],
        "answer": "EUI-64",
        "explanation": "EUI-64 (Extended Unique Identifier) es un método que se utiliza en IPv6 para generar automáticamente la porción de identificador de interfaz de una dirección IPv6 basándose en la dirección MAC del dispositivo. APIPA (Automatic Private IP Addressing) es para IPv4, no IPv6.",
        "source_reference": "Capítulo 7: Enrutamiento > Autoconfiguración SLAAC y EUI-64"
      },
      {
        "id": 80,
        "has_context_image": false,
        "question": "Te han pedido crear una red donde los visitantes puedan acceder a internet sin interrumpir la intranet propia de la oficina. ¿Cuál de los siguientes tipos de redes deberías crear?",
        "options": [
          "Guest network",
          "MU-MIMO",
          "Demilitarized zone",
          "Screened subnet"
        ],
        "answer": "Guest network",
        "explanation": "Una red de invitados (Guest network) proporciona acceso a internet para visitantes mientras los mantiene aislados de la red interna corporativa. Es la solución estándar para este escenario. Una DMZ o screened subnet se usa para servidores públicos, no para acceso de invitados.",
        "source_reference": "Capítulo 13: BCDR > Segmentación y Redes de Invitados"
      },
      {
        "id": 81,
        "has_context_image": true,
        "image_path": "assets/images/exam2/q81_antenna_selection.png",
        "question": "Su empresa ha comprado un nuevo edificio en la misma calle para sus suites ejecutivas. Se le ha pedido que seleccione una antena para AP1, AP2 y AP3 para establecer una conexión inalámbrica dentro del edificio principal para que la usen los visitantes. ¿Cuál de las siguientes es la MEJOR configuración de antena para controlar la propagación de la señal y evitar que la señal inalámbrica se transmita fuera del edificio principal?",
        "options": [
          "5 dB Directional Right for AP1, 5 dB Directional Left for AP2, and 5 dB Omnidirectional for AP3",
          "5 dB Directional Left for AP1, 5 dB Omnidirectional for AP2, and 5 dB Directional Right for AP3",
          "5 dB Omnidirectional for AP1, 5 dB Directional Left for AP2, and 5 dB Directional Right for AP3",
          "5 dB Directional Right for AP1, 5 dB Omnidirectional for AP2, and 5 dB Directional Left for AP3"
        ],
        "answer": "5 dB Directional Right for AP1, 5 dB Omnidirectional for AP2, and 5 dB Directional Left for AP3",
        "explanation": "Mirando el plano, AP1 está en la pared izquierda, AP3 está en la pared derecha y AP2 está en el centro. Para mantener la señal DENTRO del edificio: AP1 debe transmitir hacia la derecha (Directional Right). AP3 debe transmitir hacia la izquierda (Directional Left). AP2, al estar en el centro y rodeado de oficinas, debe cubrir 360 grados (Omnidirectional).",
        "source_reference": "Capítulo 9: Wireless > Tipos de Antenas y Colocación"
      },
      {
        "id": 82,
        "has_context_image": false,
        "question": "Which attack utilizes a wireless access point made to look as if it belongs to the network by mimicking the corporate network's SSID in order to eavesdrop on the wireless traffic?",
        "options": [
          "Shoulder surfing",
          "Rogue access point",
          "WEP attack",
          "Evil twin"
        ],
        "answer": "Evil twin",
        "explanation": "Un ataque 'Evil Twin' implica configurar un punto de acceso falso que imita el SSID legítimo de la red corporativa para engañar a los usuarios y que se conecten a él, permitiendo al atacante interceptar el tráfico. Un 'Rogue AP' es un AP no autorizado, pero no necesariamente imita al legítimo para interceptación activa como el Evil Twin.",
        "source_reference": "Capítulo 16: Fundamentos de Seguridad > Ataques Inalámbricos"
      },
      {
        "id": 83,
        "has_context_image": false,
        "question": "Lorraine es la única administradora de red de su empresa. Tras investigar los informes de los usuarios del departamento de contabilidad, descubre que un puerto crucial del switch conectado al servidor del departamento no transmite datos. Tras la inspección, observa que el indicador LED del puerto del switch no está encendido. Esto le parece extraño, ya que ella no ha desactivado el puerto. ¿Cuál de las siguientes es la razón MÁS probable de este problema?",
        "options": [
          "El puerto está configurado con una asignación de VLAN incorrecta.",
          "El puerto está suspendido debido a un problema de STP (Spanning Tree Protocol).",
          "El puerto ha sido inhabilitado por error (error disabled) debido a una violación.",
          "El puerto está administrativamente inactivo (administratively down)."
        ],
        "answer": "El puerto ha sido inhabilitado por error (error disabled) debido a una violación.",
        "explanation": "Si el LED del puerto está apagado y el administrador no lo ha deshabilitado manualmente ('administratively down'), es probable que el puerto haya entrado en estado 'error-disabled' debido a una violación de seguridad (como Port Security). STP generalmente muestra un LED ámbar o parpadeante, no apagado.",
        "source_reference": "Capítulo 20: Problemas Físicos > Problemas de Puertos de Switch"
      },
      {
        "id": 85,
        "has_context_image": false,
        "question": "Which protocol is used to establish a secure and encrypted VPN tunnel that can be initiated through a web browser?",
        "options": [
          "PPTP",
          "SSL",
          "IPsec",
          "PPP"
        ],
        "answer": "SSL",
        "explanation": "Las VPNs basadas en SSL (Secure Sockets Layer) o TLS permiten establecer túneles seguros directamente desde un navegador web, a menudo conocidas como VPNs sin cliente (clientless) o portales WebVPN.",
        "source_reference": "Capítulo 17: Amenazas y Ataques > Tecnologías VPN"
      },
      {
        "id": 86,
        "has_context_image": false,
        "question": "What term refers to a malicious technique or software crafted to exploit vulnerabilities in computer systems, often leading to unauthorized access or system compromise?",
        "options": [
          "Vulnerability",
          "Exploit",
          "Hacker",
          "Virus"
        ],
        "answer": "Exploit",
        "explanation": "Un 'Exploit' es una pieza de software, un fragmento de datos o una secuencia de comandos diseñada para aprovechar una vulnerabilidad o fallo de seguridad específico en un sistema para causar un comportamiento no intencionado.",
        "source_reference": "Capítulo 16: Fundamentos de Seguridad > Conceptos de Seguridad"
      },
      {
        "id": 87,
        "has_context_image": false,
        "question": "Which storage network technology utilizes file-level storage to function properly?",
        "options": [
          "iSCSI",
          "NAS",
          "FCoE",
          "SAN"
        ],
        "answer": "NAS",
        "explanation": "NAS (Network Attached Storage) opera a nivel de archivo (file-level), permitiendo a los usuarios acceder a archivos a través de la red. SAN, iSCSI y FCoE operan a nivel de bloque (block-level).",
        "source_reference": "Capítulo 10: Instalaciones Físicas > Almacenamiento en Red"
      },
      {
        "id": 88,
        "has_context_image": false,
        "question": "En una configuración de VPN de cliente a sitio, ¿qué tipo de configuración de túnel enruta todo el tráfico, incluido el tráfico de la red corporativa y el tráfico destinado a Internet, a través del túnel VPN?",
        "options": [
          "Clientless (Sin cliente)",
          "Split Tunnel (Túnel dividido)",
          "Full Tunnel (Túnel completo)",
          "Direct Tunnel (Túnel directo)"
        ],
        "answer": "Full Tunnel (Túnel completo)",
        "explanation": "En una configuración 'Full Tunnel', TODO el tráfico del cliente (tanto el destinado a la red corporativa como el tráfico general de Internet) se enruta a través del túnel VPN. 'Split Tunnel' solo enruta el tráfico corporativo por la VPN.",
        "source_reference": "Capítulo 17: Amenazas y Ataques > Configuraciones VPN"
      },
      {
        "id": 89,
        "has_context_image": false,
        "question": "Acaba de reemplazar el switch de borde en el segundo piso de Dion Training. Al terminar, un usuario afirma que ya no puede acceder a la red, pero todo funcionaba bien ayer antes de que usted reemplazara el switch. Los compañeros del usuario afirman que sus ordenadores pueden acceder a la red sin problemas. Usted comprueba la parte posterior de la estación de trabajo del usuario y no ve ninguna luz LED encendida o parpadeando en su tarjeta de interfaz de red (NIC). ¿Cuál de los siguientes pasos debería comprobar a continuación para resolver este problema?",
        "options": [
          "Verificar que el switch esté conectado al router",
          "Verificar que la tarjeta de interfaz de red funcione correctamente",
          "Verificar que el cable de red esté conectado al nuevo switch",
          "Verificar que el dispositivo esté utilizando el tipo de cable correcto"
        ],
        "answer": "Verificar que el cable de red esté conectado al nuevo switch",
        "explanation": "Dado que se acaba de reemplazar el switch y el problema es aislado (solo un usuario) con la luz de enlace apagada, lo más probable es que el cable de red de ese usuario no se haya conectado correctamente al nuevo switch. Si fuera el router, fallaría toda la red. Si fuera la NIC, no habría funcionado ayer.",
        "source_reference": "Capítulo 20: Problemas Físicos > Problemas de Capa Física"
      },
      {
        "id": 90,
        "has_context_image": false,
        "question": "Which of the following is a method that is used to automatically configure IPv6 host addresses?",
        "options": [
          "EUI-64",
          "APIPA",
          "EIA-568B",
          "EBCDIC"
        ],
        "answer": "EUI-64",
        "explanation": "EUI-64 es un método utilizado en IPv6 para generar automáticamente la porción de interfaz (Host ID) de 64 bits de una dirección IPv6 a partir de la dirección MAC de 48 bits del dispositivo.",
        "source_reference": "Capítulo 4: Puertos y Protocolos > IPv6"
      },
      {
        "id": 90,
        "has_context_image": false,
        "question": "¿Cuál de los siguientes es un método utilizado para configurar automáticamente direcciones de host IPv6?",
        "options": [
          "EUI-64",
          "APIPA",
          "EIA-568B",
          "EBCDIC"
        ],
        "answer": "EUI-64",
        "explanation": "EUI-64 es un método utilizado en IPv6 para generar automáticamente la porción de interfaz (Host ID) de 64 bits de una dirección IPv6 a partir de la dirección MAC de 48 bits del dispositivo.",
        "source_reference": "Capítulo 4: Puertos y Protocolos > IPv6"
      }
    ]
  }
};

// Export for use in Node environments if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXAMS_DATABASE;
}
