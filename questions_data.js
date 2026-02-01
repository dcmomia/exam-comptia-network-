const QUESTIONS_DATA = [
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
        "source_reference": "Capítulo 19: Metodología de Resolución de Problemas > Los 7 Pasos de la Metodología CompTIA"
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
        "source_reference": "Capítulo 12: Ojos en la Red: Monitoreo y Análisis > Syslog (Niveles de Gravedad)"
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
        "source_reference": "Capítulo 10: Instalaciones Físicas y Factores Ambientales > Gestión de Racks"
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
        "source_reference": "Capítulo 9: Despliegue de Redes Inalámbricas > Configuración y Diseño de Redes Inalámbricas"
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
        "source_reference": "Capítulo 18: Fortalecimiento y Defensa de la Red > Zonas de Seguridad y DMZ"
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
        "source_reference": "Capítulo 5: Servicios y Protocolos de Red > Sistema de Nombres de Dominio (DNS)"
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
        "source_reference": "Capítulo 20: Continuidad del Negocio y Recuperación ante Desastres > Métricas de Recuperación"
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
        "source_reference": "Capítulo 15: Documentación y Políticas de Red > Gestión de Activos y Licencias"
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
        "source_reference": "Capítulo 8: Tecnologías de Nube y Virtualización > Modelos de Despliegue de Nube"
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
        "source_reference": "Capítulo 19: Metodología de Resolución de Problemas > Herramientas de Línea de Comandos"
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
        "source_reference": "Capítulo 4: Direccionamiento IP y Subnetting > Cálculo de Subredes CIDR"
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
        "source_reference": "Capítulo 13: Optimización y Alta Disponibilidad de Red > Balanceadores de Carga"
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
        "source_reference": "Capítulo 17: Dispositivos de Seguridad de Red > Sistemas de Detección y Prevención de Intrusiones"
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
        "source_reference": "Capítulo 5: Services and Network Protocols > DHCP Configuration"
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
        "source_reference": "Capítulo 8: Tecnologías de Nube y Virtualización > Conectividad en la Nube"
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
        "source_reference": "Capítulo 9: Despliegue de Redes Inalámbricas > Optimización de la Señal"
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
        "source_reference": "Capítulo 2: Cables y Conectores de Red > Conectores de Fibra Óptica"
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
        "source_reference": "Capítulo 18: Fortalecimiento y Defensa de la Red > Zonas de Seguridad y DMZ"
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
        "source_reference": "Capítulo 7: Conmutación de Red (Switching) > VLAN de Voz y Datos"
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
        "source_reference": "Capítulo 13: Optimización y Alta Disponibilidad de Red > Gestión de Latencia"
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
        "source_reference": "Capítulo 9: Despliegue de Redes Inalámbricas > ESSID y Estructuras de Red"
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
        "source_reference": "Capítulo 16: Riesgos y Vulnerabilidades de Seguridad > Debilidades de WPS"
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
        "source_reference": "Capítulo 19: Metodología de Resolución de Problemas > Configuración IP"
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
        "source_reference": "Capítulo 2: Cables y Conectores de Red > Estándares de Trenzado"
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
        "source_reference": "Capítulo 10: Instalaciones Físicas y Factores Ambientales > Sistemas de Control Ambiental"
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
        "source_reference": "Capítulo 2: Cables y Conectores de Red > Cables de Cobre Especializados"
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
        "source_reference": "Capítulo 16: Riesgos y Vulnerabilidades de Seguridad > Tipos de Malware"
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
        "source_reference": "Capítulo 17: Dispositivos de Seguridad de Red > Seguridad Inalámbrica"
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
        "source_reference": "Capítulo 2: Cables y Conectores de Red > Medios de Fibra Óptica"
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
        "source_reference": "Capítulo 13: Optimización y Alta Disponibilidad de Red > Agregación de Enlaces"
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
        "source_reference": "Capítulo 9: Despliegue de Redes Inalámbricas > Ubicación de Puntos de Acceso"
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
        "source_reference": "Capítulo 7: Conmutación de Red (Switching) > Enlaces Troncales y 802.1Q"
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
        "source_reference": "Capítulo 2: Cables y Conectores de Red > Problemas en el Cableado de Cobre"
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
        "source_reference": "Capítulo 12: Ojos en la Red: Monitoreo y Análisis > Herramientas de Escaneo y Descubrimiento"
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
        "source_reference": "Capítulo 12: Ojos en la Red: Monitoreo y Análisis > Protocolo de Gestión de Red (SNMP)"
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
        "source_reference": "Capítulo 12: Ojos en la Red: Monitoreo y Análisis > Analizadores de Paquetes y Protocolos"
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
        "source_reference": "Capítulo 13: Optimización y Alta Disponibilidad de Red > Métricas de Rendimiento"
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
        "source_reference": "Capítulo 10: Instalaciones Físicas y Factores Ambientales > Seguridad Física y Monitoreo"
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
        "source_reference": "Capítulo 17: Dispositivos de Seguridad de Red > Estándares de Seguridad Inalámbrica"
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
        "source_reference": "Capítulo 7: Conmutación de Red (Switching) > Agregación de Enlaces (LACP)"
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
        "source_reference": "Capítulo 18: Fortalecimiento y Defensa de la Red > Gestión de Identidad y Acceso"
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
        "source_reference": "Capítulo 5: Servicios y Protocolos de Red > Gestión de Ámbitos DHCP"
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
        "source_reference": "Capítulo 9: Despliegue de Redes Inalámbricas > Herramientas de Análisis Inalámbrico"
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
        "source_reference": "Capítulo 10: Instalaciones Físicas y Factores Ambientales > Distribución de Energía"
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
        "source_reference": "Capítulo 12: Ojos en la Red: Monitoreo y Análisis > Gestión de Congestión y Cuellos de Botella"
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
        "source_reference": "Capítulo 9: Despliegue de Redes Inalámbricas > Estándares y Cumplimiento Regulatorio"
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
        "source_reference": "Capítulo 4: Direccionamiento IP y Subnetting > Conceptos de VLSM"
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
        "source_reference": "Capítulo 19: Metodología de Resolución de Problemas > Herramientas de Línea de Comandos"
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
        "source_reference": "Capítulo 11: Tecnologías WAN y Conectividad Remota > Redes Celulares y Rendimiento"
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
        "source_reference": "Capítulo 18: Fortalecimiento y Defensa de la Red > Infraestructura de Clave Pública (PKI)"
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
        "source_reference": "Capítulo 8: Tecnologías de Nube y Virtualización > Segmentación con VXLAN"
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
        "source_reference": "Capítulo 18: Fortalecimiento y Defensa de la Red > Arquitecturas de Seguridad Modernas (SASE/SSE)"
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
        "source_reference": "Capítulo 18: Fortalecimiento y Defensa de la Red > Zonas de Seguridad y DMZ"
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
        "source_reference": "Capítulo 19: Metodología de Resolución de Problemas > Los 7 Pasos de la Metodología CompTIA"
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
        "source_reference": "Capítulo 19: Metodología de Resolución de Problemas > Herramientas de Línea de Comandos"
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
        "source_reference": "Capítulo 2: Medios de Red y Dispositivos de Conexión > Tipos de Cableado de Cobre"
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
        "source_reference": "Capítulo 12: Ojos en la Red: Monitoreo y Análisis > Gestión de Inventario"
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
        "source_reference": "Capítulo 17: Amenazas a la Seguridad de la Red > Ataques de Acceso y Persistencia"
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
        "source_reference": "Capítulo 5: Servicios y Protocolos de Aplicación IP > Registros de Recursos DNS"
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
        "source_reference": "Capítulo 18: Fortalecimiento y Defensa de la Red > Protocolos AAA"
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
        "source_reference": "Capítulo 5: Servicios y Protocolos de Aplicación IP > Puertos de Protocolo de Correo"
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
        "source_reference": "Capítulo 12: Ojos en la Red: Monitoreo y Análisis > SIEM"
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
        "source_reference": "Capítulo 13: Procedimientos Operativos > Gestión de Parches y Actualizaciones"
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
        "source_reference": "Capítulo 18: Fortalecimiento y Defensa de la Red > Listas de Control de Acceso (ACL)"
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
        "source_reference": "Capítulo 2: Medios de Red y Dispositivos de Conexión > Conceptos de Switching"
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
        "source_reference": "Capítulo 18: Fortalecimiento y Defensa de la Red > Dispositivos de Seguridad"
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
        "source_reference": "Capítulo 16: Conceptos de Centros de Datos > Flujos de Tráfico"
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
        "source_reference": "Capítulo 17: Amenazas a la Seguridad de la Red > Malware"
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
        "source_reference": "Capítulo 15: Seguridad Física > Control de Incendios"
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
        "source_reference": "Capítulo 17: Amenazas a la Seguridad de la Red > Ataques Inalámbricos"
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
        "source_reference": "Capítulo 5: Servicios y Protocolos de Aplicación IP > NTP"
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
        "source_reference": "Capítulo 7: Conceptos de Enrutamiento IP > Sistema Autónomo (AS)"
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
        "source_reference": "Capítulo 6: Direccionamiento IPv4 y Subredes > Subneteado"
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
        "source_reference": "Capítulo 1: El Modelo OSI > Capas 5-7"
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
        "source_reference": "Capítulo 9: Tecnologías Inalámbricas > Estándares Wi-Fi"
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
        "source_reference": "Capítulo 16: Conceptos de Centros de Datos > Modelo Jerárquico"
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
        "source_reference": "Capítulo 5: Servicios y Protocolos de Aplicación IP > Puertos Comunes"
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
        "source_reference": "Capítulo 19: Metodología de Resolución de Problemas > Problemas Físicos de Fibra"
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
        "source_reference": "Capítulo 19: Metodología de Resolución de Problemas > Herramientas de Línea de Comandos"
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
        "source_reference": "Capítulo 2: Medios de Red y Dispositivos de Conexión > Operación del Switch"
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
        "source_reference": "Capítulo 2: Medios de Red y Dispositivos de Conexión > Estructuras de Cableado"
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
        "source_reference": "Capítulo 16: Conceptos de Centros de Datos > Almacenamiento"
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
        "source_reference": "Capítulo 8: Tecnologías de Nube y Virtualización > Modelos de Servicio"
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
        "source_reference": "Capítulo 4: Direccionamiento IPv6 > Tecnologías de Transición"
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
        "source_reference": "Capítulo 9: Tecnologías Inalámbricas > Sensores e IoT"
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
        "source_reference": "Capítulo 6: Direccionamiento IPv4 y Subredes > Diseño de Subredes"
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
        "source_reference": "Capítulo 18: Fortalecimiento y Defensa de la Red > Tecnologías VPN"
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
        "source_reference": "Capítulo 13: Procedimientos Operativos > Documentación de Activos (Asset Management)"
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
        "source_reference": "Capítulo 14: Continuidad del Negocio y Recuperación ante Desastres > RAID y Recuperación"
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
        "source_reference": "Capítulo 13: Procedimientos Operativos > Diagramas de Red"
    }
];