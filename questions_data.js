const EXAMS_DATABASE = {
    "network_plus_exam_1": {
        id: "network_plus_exam_1",
        title: "CompTIA Network+ - Examen 1",
        version: "v2.3",
        questions: [
            {
                "id": 1,
                "has_context_image": false,
                "question": "Â¿CuÃ¡l es el SIGUIENTE paso en la metodologÃ­a de resoluciÃ³n de problemas despuÃ©s de que un tÃ©cnico ha probado una teorÃ­a para determinar la causa y la teorÃ­a ha sido confirmada?",
                "options": [
                    "Documentar hallazgos, acciones y resultados.",
                    "Identificar el problema.",
                    "Establecer un plan de acciÃ³n para resolver el problema e identificar efectos potenciales.",
                    "Verificar la funcionalidad completa del sistema y, si corresponde, implementar medidas preventivas."
                ],
                "answer": "Establecer un plan de acciÃ³n para resolver el problema e identificar efectos potenciales.",
                "explanation": "De acuerdo con la metodologÃ­a de resoluciÃ³n de problemas de CompTIA (7 pasos), una vez que se ha probado y confirmado la teorÃ­a (Paso 3), el siguiente paso es el Paso 4: Establecer un plan de acciÃ³n para resolver el problema e identificar los efectos potenciales. Esto asegura que la soluciÃ³n se aplique de manera estructurada y se consideren las repercusiones en el resto de la red.",
                "source_reference": "CapÃ­tulo 19: MetodologÃ­a de ResoluciÃ³n de Problemas > Los 7 Pasos de la MetodologÃ­a CompTIA"
            },
            {
                "id": 2,
                "has_context_image": false,
                "question": "Â¿QuÃ© nivel de severidad de Syslog corresponde al valor 0?",
                "options": [
                    "Alerta (Alert)",
                    "CrÃ­tico (Critical)",
                    "Emergencia (Emergency)",
                    "Error"
                ],
                "answer": "Emergencia (Emergency)",
                "explanation": "El estÃ¡ndar Syslog define ocho niveles de severidad (0-7). El nivel 0 es 'Emergencia' (Emergency), indicando que el sistema es inestable o inutilizable. Es el nivel mÃ¡s crÃ­tico de todos los mensajes de registro.",
                "source_reference": "CapÃ­tulo 12: Ojos en la Red: Monitoreo y AnÃ¡lisis > Syslog (Niveles de Gravedad)"
            },
            {
                "id": 3,
                "has_context_image": false,
                "question": "Steven tiene la tarea de rediseÃ±ar la red de una oficina pequeÃ±a y debe elegir entre diferentes tamaÃ±os de rack para alojar un nuevo servidor, un switch de red y un panel de parcheo. Â¿QuÃ© es lo mÃ¡s crÃ­tico que Steven debe considerar para asegurar que todo el equipo estÃ© alojado adecuadamente y que sea posible una expansiÃ³n futura?",
                "options": [
                    "La disponibilidad de soluciones de gestiÃ³n de cables integradas en el rack.",
                    "La proximidad del rack al suministro elÃ©ctrico principal de la oficina.",
                    "El diseÃ±o estÃ©tico del rack para asegurar que combine con la decoraciÃ³n de la oficina.",
                    "La capacidad de carga (peso) del rack para asegurar que pueda soportar el equipo."
                ],
                "answer": "La capacidad de carga (peso) del rack para asegurar que pueda soportar el equipo.",
                "explanation": "La capacidad de carga es el factor de seguridad y estructural mÃ¡s crÃ­tico al alojar equipos pesados como servidores en un centro de datos o armario de cableado. Un fallo en la integridad estructural del rack puede comprometer todo el hardware y la seguridad fÃ­sica del personal.",
                "source_reference": "CapÃ­tulo 10: Instalaciones FÃ­sicas y Factores Ambientales > GestiÃ³n de Racks"
            },
            {
                "id": 4,
                "has_context_image": false,
                "question": "Â¿QuÃ© definiciÃ³n representa mejor un Mapa de Calor (Heat-Map) de red?",
                "options": [
                    "Un diagrama que muestra la disposiciÃ³n fÃ­sica de los dispositivos de red.",
                    "Una representaciÃ³n grÃ¡fica que indica Ã¡reas de alta y baja actividad o rendimiento de la red (intensidad de seÃ±al).",
                    "Una representaciÃ³n visual del flujo de corriente elÃ©ctrica en una red.",
                    "Un grÃ¡fico que ilustra las variaciones de temperatura en la red de un centro de datos que podrÃ­an afectar la infraestructura."
                ],
                "answer": "Una representaciÃ³n grÃ¡fica que indica Ã¡reas de alta y baja actividad o rendimiento de la red (intensidad de seÃ±al).",
                "explanation": "Un Mapa de Calor (Heat-Map) inalÃ¡mbrico es una herramienta de visualizaciÃ³n que muestra la cobertura y la intensidad de la seÃ±al de radiofrecuencia (RF) en un Ã¡rea geogrÃ¡fica. Se utiliza comÃºnmente durante los 'site surveys' para identificar zonas muertas e interferencias.",
                "source_reference": "CapÃ­tulo 9: Despliegue de Redes InalÃ¡mbricas > ConfiguraciÃ³n y DiseÃ±o de Redes InalÃ¡mbricas"
            },
            {
                "id": 5,
                "has_context_image": false,
                "question": "Un tÃ©cnico estÃ¡ configurando un laboratorio de computaciÃ³n para estudiantes. Las computadoras deben poder comunicarse entre sÃ­ en la red interna, pero los estudiantes no deben poder acceder a Internet. La arquitectura de red estÃ¡ segmentada usando un firewall de tres patas (triple-homed) con las siguientes zonas:\n\n- PUBLIC (PÃºblico), eth0, 66.13.24.16/30\n- INSTRUCTORS (Instructores), eth1, 172.16.1.1/24\n- STUDENTS (Estudiantes), eth2, 192.168.1.1/24\n\nÂ¿QuÃ© regla en el firewall deberÃ­a configurar el tÃ©cnico para evitar que los estudiantes accedan a Internet?",
                "options": [
                    "Denegar todo el trÃ¡fico de eth1 a eth0",
                    "Denegar todo el trÃ¡fico de eth0 a eth2",
                    "Denegar todo el trÃ¡fico de eth2 a eth1",
                    "Denegar todo el trÃ¡fico de eth2 a eth0"
                ],
                "answer": "Denegar todo el trÃ¡fico de eth2 a eth0",
                "explanation": "Para evitar que la zona de estudiantes (eth2) acceda a la red pÃºblica/Internet (eth0), se debe configurar una regla de firewall que bloquee explÃ­citamente el trÃ¡fico saliente desde eth2 hacia la interfaz conectada al ISP (eth0). El trÃ¡fico interno entre estudiantes en eth2 no se ve afectado ya que no pasa por el firewall para comunicarse dentro de la misma subred.",
                "source_reference": "CapÃ­tulo 18: Fortalecimiento y Defensa de la Red > Zonas de Seguridad y DMZ"
            },
            {
                "id": 6,
                "has_context_image": false,
                "question": "Su organizaciÃ³n estÃ¡ desplegando una nueva aplicaciÃ³n web alojada en una infraestructura en la nube escalable. Para asegurar que los usuarios sean dirigidos a la direcciÃ³n IP correcta para acceder de la aplicaciÃ³n, Â¿quÃ© tipo de registro DNS deberÃ­a usarse para mapear el nombre de dominio a la direcciÃ³n IPv4 del servidor web?",
                "options": [
                    "MX",
                    "CNAME",
                    "A",
                    "TXT"
                ],
                "answer": "A",
                "explanation": "El registro A (Address) se utiliza para mapear un nombre de dominio (FQDN) a una direcciÃ³n IPv4 especÃ­fica. Es el registro fundamental para dirigir el trÃ¡fico web a un servidor.",
                "source_reference": "CapÃ­tulo 5: Servicios y Protocolos de Red > Sistema de Nombres de Dominio (DNS)"
            },
            {
                "id": 7,
                "has_context_image": false,
                "question": "Â¿CuÃ¡l de los siguientes tÃ©rminos representa la cantidad mÃ¡xima de tiempo que una organizaciÃ³n estÃ¡ dispuesta a estar fuera de lÃ­nea antes de que tenga consecuencias indeseables para la organizaciÃ³n?",
                "options": [
                    "MTTR",
                    "RPO",
                    "MTBF",
                    "RTO"
                ],
                "answer": "RTO",
                "explanation": "El RTO (Recovery Time Objective) es el objetivo de tiempo de recuperaciÃ³n, que define el periodo de tiempo mÃ¡ximo tolerable que un servicio puede estar inactivo tras un desastre.",
                "source_reference": "CapÃ­tulo 20: Continuidad del Negocio y RecuperaciÃ³n ante Desastres > MÃ©tricas de RecuperaciÃ³n"
            },
            {
                "id": 8,
                "has_context_image": false,
                "question": "Â¿CuÃ¡l de las siguientes describe mejor la importancia de gestionar las licencias de software dentro de la red de una organizaciÃ³n?",
                "options": [
                    "Asegurar el uso legal del software y evitar sanciones por incumplimiento.",
                    "Facilitar el acceso remoto para usuarios que trabajan fuera de la oficina y asegurar que reciban el mismo software que los empleados presenciales.",
                    "Mantener la seguridad de la infraestructura de red y sus dispositivos.",
                    "Proporcionar un suministro de energÃ­a constante e ininterrumpido a todos los dispositivos de red registrados."
                ],
                "answer": "Asegurar el uso legal del software y evitar sanciones por incumplimiento.",
                "explanation": "La gestiÃ³n de licencias asegura que el software se use de acuerdo con los tÃ©rminos legales, evitando riesgos financieros y legales por auditorÃ­as o uso no autorizado.",
                "source_reference": "CapÃ­tulo 15: DocumentaciÃ³n y PolÃ­ticas de Red > GestiÃ³n de Activos y Licencias"
            },
            {
                "id": 9,
                "has_context_image": false,
                "question": "Â¿CuÃ¡l de las siguientes infraestructuras de nube incluye servidores locales que utilizan un servidor Syslog centralizado alojado en una organizaciÃ³n de terceros para revisar los registros?",
                "options": [
                    "Comunitaria (Community)",
                    "Privada (Private)",
                    "HÃ­brida (Hybrid)",
                    "PÃºblica (Public)"
                ],
                "answer": "HÃ­brida (Hybrid)",
                "explanation": "Una nube hÃ­brida combina infraestructura propia (on-premise) con servicios de terceros o nubes pÃºblicas/comunitarias. En este escenario, la conexiÃ³n entre el servidor local y el servicio externo de Syslog define un modelo hÃ­brido.",
                "source_reference": "CapÃ­tulo 8: TecnologÃ­as de Nube y VirtualizaciÃ³n > Modelos de Despliegue de Nube"
            },
            {
                "id": 10,
                "has_context_image": false,
                "question": "Shannon es una administradora de red que estÃ¡ resolviendo un problema de conectividad desde su estaciÃ³n de trabajo a un servidor remoto. Necesita identificar la ruta que toma el trÃ¡fico a travÃ©s de la red para llegar al servidor e identificar dÃ³nde estÃ¡n ocurriendo los posibles fallos. Â¿QuÃ© herramienta deberÃ­a usar para mostrar la ruta y medir los retrasos de trÃ¡nsito de los paquetes a travÃ©s de una red IP?",
                "options": [
                    "traceroute/tracert",
                    "dig",
                    "nslookup",
                    "tcpdump"
                ],
                "answer": "traceroute/tracert",
                "explanation": "La herramienta traceroute (Linux/macOS) o tracert (Windows) se utiliza para rastrear el camino de los paquetes y mostrar cada salto (router) en la ruta, indicando la latencia en cada punto.",
                "source_reference": "CapÃ­tulo 19: MetodologÃ­a de ResoluciÃ³n de Problemas > Herramientas de LÃ­nea de Comandos"
            },
            {
                "id": 11,
                "has_context_image": false,
                "question": "La sede corporativa de su empresa proporcionÃ³ a su sucursal una parte de su subred Clase C para usar en una nueva ubicaciÃ³n de oficina. Debe asignar el nÃºmero mÃ­nimo de direcciones usando la notaciÃ³n CIDR para acomodar las necesidades de cada departamento. Â¿CuÃ¡l es la notaciÃ³n CIDR correcta para la subred del departamento de Finanzas, que requiere 32 dispositivos?",
                "options": [
                    "/28",
                    "/30",
                    "/26",
                    "/29",
                    "/25",
                    "/27"
                ],
                "answer": "/26",
                "explanation": "Para 32 dispositivos, necesitamos una subred que pueda alojar al menos 34 direcciones (32 dispositivos + ID de red + Broadcast). Una mÃ¡scara /27 ofrece 30 direcciones Ãºtiles (insuficiente), mientras que una /26 ofrece 62 direcciones Ãºtiles, siendo la opciÃ³n mÃ­nima viable.",
                "source_reference": "CapÃ­tulo 4: Direccionamiento IP y Subnetting > CÃ¡lculo de Subredes CIDR"
            },
            {
                "id": 12,
                "has_context_image": false,
                "question": "El propÃ³sito del balanceo de carga (load balancing) en relaciÃ³n con las redes?",
                "options": [
                    "Distribuir el trÃ¡fico de red de manera uniforme entre mÃºltiples servidores.",
                    "Reducir el nÃºmero de dispositivos de red en uso.",
                    "Asegurar los datos de la red contra accesos no autorizados.",
                    "Aumentar la velocidad de las conexiones de red individuales."
                ],
                "answer": "Distribuir el trÃ¡fico de red de manera uniforme entre mÃºltiples servidores.",
                "explanation": "El balanceo de carga optimiza el uso de recursos, maximiza el rendimiento y evita la sobrecarga de un solo servidor al distribuir las peticiones entre varios nodos.",
                "source_reference": "CapÃ­tulo 13: OptimizaciÃ³n y Alta Disponibilidad de Red > Balanceadores de Carga"
            },
            {
                "id": 13,
                "has_context_image": false,
                "question": "EstÃ¡ escaneando un objetivo como parte de una prueba de penetraciÃ³n. DescubriÃ³ que la red utiliza Snort configurado como un IDS basado en red. Â¿CuÃ¡l de los siguientes ocurre cuando se coincide con una regla de alerta en Snort durante su escaneo?",
                "options": [
                    "El paquete que coincide con la regla serÃ¡ descartado y el IDS continuarÃ¡ escaneando nuevos paquetes.",
                    "El IDS enviarÃ¡ una alerta, dejarÃ¡ de verificar el resto de las reglas y permitirÃ¡ que el paquete continÃºe su viaje.",
                    "La direcciÃ³n IP de origen serÃ¡ bloqueada y su conexiÃ³n con la red terminada.",
                    "Todo el paquete serÃ¡ evaluado hasta que se hayan verificado todas las reglas de alerta del IDS y se permita que el paquete continÃºe su viaje."
                ],
                "answer": "El IDS enviarÃ¡ una alerta, dejarÃ¡ de verificar el resto de las reglas y permitirÃ¡ que el paquete continÃºe su viaje.",
                "explanation": "En un IDS (Sistema de DetecciÃ³n de Intrusiones), a diferencia de un IPS, la acciÃ³n de 'alerta' simplemente notifica la coincidencia sin bloquear el trÃ¡fico. En Snort, una vez que una regla coincide y genera una alerta, el procesamiento de ese paquete suele detenerse para esa cadena de reglas y se permite el paso del trÃ¡fico.",
                "source_reference": "CapÃ­tulo 17: Dispositivos de Seguridad de Red > Sistemas de DetecciÃ³n y PrevenciÃ³n de Intrusiones"
            },
            {
                "id": 14,
                "has_context_image": false,
                "question": "Bethany, una administradora de red, quiere asegurar que las direcciones IP no queden reservadas indefinidamente por dispositivos que ya no estÃ¡n activos en la red. Â¿QuÃ© caracterÃ­stica de DHCP permitirÃ­a a un administrador controlar el periodo que un dispositivo puede usar una direcciÃ³n IP asignada?",
                "options": [
                    "Exclusiones",
                    "Tiempo de DistribuciÃ³n (Lease Time)",
                    "Opciones",
                    "Ãmbito (Scope)"
                ],
                "answer": "Tiempo de DistribuciÃ³n (Lease Time)",
                "explanation": "El Lease Time o Tiempo de ConcesiÃ³n define cuÃ¡nto tiempo un cliente puede usar una direcciÃ³n IP antes de tener que renovarla o devolverla al pool.",
                "source_reference": "CapÃ­tulo 5: Services and Network Protocols > DHCP Configuration"
            },
            {
                "id": 15,
                "has_context_image": false,
                "question": "En entornos de nube, Â¿quÃ© opciÃ³n estÃ¡ diseÃ±ada especÃ­ficamente para permitir el acceso a Internet para los recursos dentro de una VPC sin exponerlos directamente a Internet?",
                "options": [
                    "NAT Gateway",
                    "Direct Connect Gateway",
                    "Internet Gateway",
                    "VPN Gateway"
                ],
                "answer": "NAT Gateway",
                "explanation": "Una NAT Gateway permite que instancias en una subred privada se conecten a Internet (para actualizaciones, etc.) pero evita que Internet inicie conexiones directas con esas instancias.",
                "source_reference": "CapÃ­tulo 8: TecnologÃ­as de Nube y VirtualizaciÃ³n > Conectividad en la Nube"
            },
            {
                "id": 16,
                "has_context_image": false,
                "question": "Durante una evaluaciÃ³n de red rutinaria, Barbara, una tÃ©cnica, nota que en ciertas Ã¡reas de la oficina, los dispositivos inalÃ¡mbricos pierden la conexiÃ³n a la red frecuentemente. Esto ocurre a pesar de que se ha confirmado que la red inalÃ¡mbrica estÃ¡ operativa. Â¿CuÃ¡l es la razÃ³n MÃS probable de este suceso?",
                "options": [
                    "Problemas de desasociaciÃ³n del cliente",
                    "DegradaciÃ³n o pÃ©rdida de seÃ±al",
                    "Cobertura inalÃ¡mbrica insuficiente",
                    "Mala configuraciÃ³n de roaming"
                ],
                "answer": "Cobertura inalÃ¡mbrica insuficiente",
                "explanation": "La pÃ©rdida frecuente de conexiÃ³n en Ã¡reas especÃ­ficas suele ser sÃ­ntoma de 'zonas muertas' o cobertura insuficiente debido a la distancia de los puntos de acceso o interferencias fÃ­sicas.",
                "source_reference": "CapÃ­tulo 9: Despliegue de Redes InalÃ¡mbricas > OptimizaciÃ³n de la SeÃ±al"
            },
            {
                "id": 17,
                "has_context_image": false,
                "question": "Â¿CuÃ¡l de las siguientes es el orden correcto de los conectores de fibra mostrados en la imagen? [ST, SC, LC(Simple), LC(DÃºplex), FC]",
                "options": [
                    "LC (single), LC (duplex), FC, ST, SC",
                    "ST, SC, LC(single), LC(duplex), FC",
                    "SC, ST, FC, LC (single), LC (duplex)",
                    "FC, LC (single), LC(duplex), SC, ST"
                ],
                "answer": "ST, SC, LC(single), LC(duplex), FC",
                "explanation": "La imagen muestra secuencialmente el conector ST (redondo con bayoneta), SC (cuadrado 'push-pull'), LC Simple, LC DÃºplex y FC (roscado).",
                "source_reference": "CapÃ­tulo 2: Cables y Conectores de Red > Conectores de Fibra Ã“ptica"
            },
            {
                "id": 18,
                "has_context_image": false,
                "question": "Un analista revisa una configuraciÃ³n de firewall de tres patas (triple-homed) que se conecta a Internet, a una red privada y a otra red adicional. Â¿CuÃ¡l de las siguientes describirÃ­a mejor la tercera red conectada a este firewall?",
                "options": [
                    "NIDS",
                    "GPO",
                    "DMZ",
                    "Subred (Subnet)"
                ],
                "answer": "DMZ",
                "explanation": "En una configuraciÃ³n de firewall triple-homed, las tres interfaces suelen ser: 1. Internet (Ext), 2. Red Privada (Int) y 3. DMZ (Zona Desmilitarizada) para servicios pÃºblicos aislados.",
                "source_reference": "CapÃ­tulo 18: Fortalecimiento y Defensa de la Red > Zonas de Seguridad y DMZ"
            },
            {
                "id": 19,
                "has_context_image": false,
                "question": "Durante la configuraciÃ³n de un nuevo piso de oficinas, Dorothy, una administradora de red, configura puertos en un switch para conectar telÃ©fonos VoIP y estaciones de trabajo. Quiere asegurar que el trÃ¡fico de voz tenga prioridad sobre el trÃ¡fico de datos. Â¿CuÃ¡l de las siguientes configuraciones deberÃ­a usar Dorothy para lograr esto de la MEJOR manera?",
                "options": [
                    "Configurar la VLAN de voz en los puertos del switch donde se conectan los telÃ©fonos VoIP.",
                    "Configurar QoS para priorizar la VLAN 100 sobre la VLAN 200.",
                    "Establecer la VLAN nativa en 200 para voz y la VLAN 100 para datos.",
                    "Habilitar la agregaciÃ³n de enlaces en los puertos conectados a los telÃ©fonos VoIP."
                ],
                "answer": "Configurar la VLAN de voz en los puertos del switch donde se conectan los telÃ©fonos VoIP.",
                "explanation": "La configuraciÃ³n de una 'Voice VLAN' permite al switch identificar el trÃ¡fico de voz y aplicarle automÃ¡ticamente etiquetas de prioridad (802.1Q/p) sobre el trÃ¡fico de datos en el mismo puerto.",
                "source_reference": "CapÃ­tulo 7: ConmutaciÃ³n de Red (Switching) > VLAN de Voz y Datos"
            },
            {
                "id": 20,
                "has_context_image": false,
                "question": "Jake, un administrador de sistemas, nota que los usuarios estÃ¡n experimentando una alta latencia al acceder a las aplicaciones basadas en la nube de la empresa. Quiere reducir la latencia para mejorar la experiencia del usuario. De las siguientes opciones, Â¿quÃ© acciÃ³n deberÃ­a tomar Jake para lograr este objetivo de la mejor manera?",
                "options": [
                    "Optimizar las rutas de enrutamiento",
                    "Implementar modelado de trÃ¡fico (traffic shaping)",
                    "Agregar mÃ¡s servidores de almacenamiento",
                    "Aumentar el ancho de banda de la red"
                ],
                "answer": "Optimizar las rutas de enrutamiento",
                "explanation": "La latencia en servicios en la nube a menudo depende del camino que toman los paquetes. Optimizar el enrutamiento (ej: usando CloudFront, Global Accelerator o Direct Connect) reduce los saltos y la demora geogrÃ¡fica.",
                "source_reference": "CapÃ­tulo 13: OptimizaciÃ³n y Alta Disponibilidad de Red > GestiÃ³n de Latencia"
            },
            {
                "id": 21,
                "has_context_image": false,
                "question": "Rowan, un administrador de red, estÃ¡ configurando una red inalÃ¡mbrica para una oficina corporativa grande con mÃºltiples pisos. El diseÃ±o de la oficina requiere el despliegue de varios puntos de acceso inalÃ¡mbricos para asegurar una cobertura completa. Para simplificar la red inalÃ¡mbrica para los usuarios finales, deciden usar un Ãºnico nombre de red para toda la oficina. Â¿Por quÃ© Rowan usarÃ­a un Identificador de Conjunto de Servicios Extendido (ESSID) en este escenario?",
                "options": [
                    "Para permitir que los dispositivos inalÃ¡mbricos realicen un roaming fluido entre diferentes puntos de acceso sin necesidad de reconectarse.",
                    "Para cifrar los datos transmitidos sobre la red inalÃ¡mbrica para mejorar la seguridad.",
                    "Para limitar el ancho de banda que cada usuario puede consumir, asegurando un uso justo de los recursos de la red.",
                    "Para crear un identificador Ãºnico para cada punto de acceso inalÃ¡mbrico para evitar interferencias entre ellos."
                ],
                "answer": "Para permitir que los dispositivos inalÃ¡mbricos realicen un roaming fluido entre diferentes puntos de acceso sin necesidad de reconectarse.",
                "explanation": "Un ESSID agrupa mÃºltiples puntos de acceso bajo un mismo nombre, permitiendo que el cliente cambie de AP (Roaming) de forma transparente mientras se mueve por el edificio.",
                "source_reference": "CapÃ­tulo 9: Despliegue de Redes InalÃ¡mbricas > ESSID y Estructuras de Red"
            },
            {
                "id": 22,
                "has_context_image": false,
                "question": "EstÃ¡ realizando una prueba de penetraciÃ³n inalÃ¡mbrica contra una red habilitada con WPS. Â¿CuÃ¡l de los siguientes tipos de ataques de contraseÃ±a deberÃ­a realizar contra los dos PINs de WPS de 4 dÃ­gitos?",
                "options": [
                    "Fuerza bruta (Brute-force)",
                    "HÃ­brido",
                    "Diccionario",
                    "Spraying"
                ],
                "answer": "Fuerza bruta (Brute-force)",
                "explanation": "El protocolo WPS es vulnerable a ataques de fuerza bruta debido a que el PIN de 8 dÃ­gitos se divide en dos mitades de 4 dÃ­gitos, lo que reduce drÃ¡sticamente las combinaciones posibles a probar.",
                "source_reference": "CapÃ­tulo 16: Riesgos y Vulnerabilidades de Seguridad > Debilidades de WPS"
            },
            {
                "id": 23,
                "has_context_image": false,
                "question": "Un usuario no puede acceder a pÃ¡ginas web en Internet a pesar de estar conectado a la red de la empresa. Ha verificado que estÃ¡n conectados a la red/SSID adecuada. De las siguientes, Â¿cuÃ¡l serÃ­a la causa mÃ¡s probable de este problema?",
                "options": [
                    "Servidor DNS lento",
                    "Cable Ethernet obsoleto",
                    "DirecciÃ³n IP expirada",
                    "Puerta de enlace predeterminada incorrecta"
                ],
                "answer": "Puerta de enlace predeterminada incorrecta",
                "explanation": "Si el usuario estÃ¡ en la red interna pero no sale a Internet, la configuraciÃ³n de la puerta de enlace (Gateway) es el primer punto de fallo lÃ³gico, ya que es el dispositivo encargado de enrutar el trÃ¡fico fuera de la subred local.",
                "source_reference": "CapÃ­tulo 19: MetodologÃ­a de ResoluciÃ³n de Problemas > ConfiguraciÃ³n IP"
            },
            {
                "id": 24,
                "has_context_image": false,
                "question": "Un tÃ©cnico estÃ¡ resolviendo problemas en una estaciÃ³n de trabajo en Dion Training. La estaciÃ³n de trabajo sufre problemas de conectividad intermitente. El tÃ©cnico nota que los pares de cables STP no estÃ¡n completamente trenzados cerca del conector. Â¿CuÃ¡l de los siguientes problemas se puede experimentar debido a esto?",
                "options": [
                    "Desajuste 568A/568B",
                    "Par dividido (Split pair)",
                    "Crosstalk (DiafonÃ­a)",
                    "InversiÃ³n Tx/Rx"
                ],
                "answer": "Crosstalk (DiafonÃ­a)",
                "explanation": "El trenzado de los cables existe especÃ­ficamente para cancelar la interferencia electromagnÃ©tica entre pares. Si se deshace el trenzado (untwisting) cerca del conector, se produce diafonÃ­a o crosstalk, degradando la seÃ±al.",
                "source_reference": "CapÃ­tulo 2: Cables y Conectores de Red > EstÃ¡ndares de Trenzado"
            },
            {
                "id": 25,
                "has_context_image": false,
                "question": "Â¿CuÃ¡l de los siguientes se utiliza para eliminar el calor de los servidores y equipos de red dentro de un centro de datos?",
                "options": [
                    "PDU",
                    "UPS",
                    "Generador",
                    "HVAC"
                ],
                "answer": "HVAC",
                "explanation": "Los sistemas HVAC (CalefacciÃ³n, VentilaciÃ³n y Aire Acondicionado) son los responsables de mantener la temperatura y humedad adecuadas en el centro de datos mediante la extracciÃ³n de calor.",
                "source_reference": "CapÃ­tulo 10: Instalaciones FÃ­sicas y Factores Ambientales > Sistemas de Control Ambiental"
            },
            {
                "id": 26,
                "has_context_image": false,
                "question": "Â¿CuÃ¡l de los siguientes tipos de cable se utiliza para aplicaciones de alta velocidad y muy corto alcance, como en cables SATA 3.0 e interconexiones (uplinks) entre dos switches en el mismo rack?",
                "options": [
                    "Fibra Ã³ptica",
                    "Par trenzado (Twisted pair)",
                    "Twinaxial",
                    "Coaxial"
                ],
                "answer": "Twinaxial",
                "explanation": "El cable Twinaxial (o DAC - Direct Attach Copper) es ideal para distancias muy cortas (generalmente menos de 7-10 metros) en centros de datos para conectar switches y servidores a alta velocidad de forma econÃ³mica.",
                "source_reference": "CapÃ­tulo 2: Cables y Conectores de Red > Cables de Cobre Especializados"
            },
            {
                "id": 27,
                "has_context_image": false,
                "question": "Al llegar al trabajo hoy, vio un mensaje en la pantalla de su computadora indicando que su disco duro ha sido cifrado y que debe pagar 1 ETH para obtener la clave de descifrado. Â¿QuÃ© tipo de ataque ha ocurrido contra su estaciÃ³n de trabajo?",
                "options": [
                    "Ransomware",
                    "Phishing",
                    "Fuerza bruta (Brute-force)",
                    "Malware"
                ],
                "answer": "Ransomware",
                "explanation": "El Ransomware es un tipo de malware que cifra los archivos del usuario y exige un rescate (generalmente en criptomonedas) para restaurar el acceso a los datos.",
                "source_reference": "CapÃ­tulo 16: Riesgos y Vulnerabilidades de Seguridad > Tipos de Malware"
            },
            {
                "id": 28,
                "has_context_image": false,
                "question": "Herbert estÃ¡ configurando el Wi-Fi para un campus universitario. La red necesita soportar un gran nÃºmero de usuarios, con credenciales individuales para estudiantes y personal para asegurar la seguridad y la manejabilidad. Â¿QuÃ© mÃ©todo de seguridad Wi-Fi es MÃS probable que implemente Herbert y por quÃ©?",
                "options": [
                    "Pre-shared key (PSK), porque permite una gestiÃ³n fÃ¡cil de grandes grupos de usuarios con una sola contraseÃ±a compartida.",
                    "Enterprise, porque simplifica el proceso de gestiÃ³n de contraseÃ±as usando la misma contraseÃ±a para todos los usuarios.",
                    "Pre-shared key (PSK), porque ofrece un mayor nivel de cifrado, que es necesario para redes grandes.",
                    "Enterprise, porque admite la autenticaciÃ³n individual, lo que lo hace ideal para entornos con muchos usuarios."
                ],
                "answer": "Enterprise, porque admite la autenticaciÃ³n individual, lo que lo hace ideal para entornos con muchos usuarios.",
                "explanation": "WPA2/WPA3 Enterprise utiliza un servidor RADIUS para autenticar a cada usuario de forma individual (usando 802.1X), lo cual es esencial en entornos grandes para revocar accesos sin cambiar la clave a todos.",
                "source_reference": "CapÃ­tulo 17: Dispositivos de Seguridad de Red > Seguridad InalÃ¡mbrica"
            },
            {
                "id": 29,
                "has_context_image": false,
                "question": "Un tÃ©cnico de red necesita conectar dos switches. El tÃ©cnico necesita un enlace entre ellos que sea capaz de manejar 10 Gbps de rendimiento (throughput). Â¿CuÃ¡l de los siguientes medios cumplirÃ­a MEJOR con este requisito?",
                "options": [
                    "Cable Cat 3",
                    "Cable Coaxial",
                    "Cable Cat 5e",
                    "Cable de fibra Ã³ptica"
                ],
                "answer": "Cable de fibra Ã³ptica",
                "explanation": "Aunque el cobre (Cat 6A/7) puede manejar 10 Gbps, la fibra Ã³ptica es el medio preferido y mÃ¡s confiable para interconectar switches (uplinks) a estas velocidades, especialmente en distancias largas o entornos con interferencias.",
                "source_reference": "CapÃ­tulo 2: Cables y Conectores de Red > Medios de Fibra Ã“ptica"
            },
            {
                "id": 30,
                "has_context_image": false,
                "question": "Â¿CuÃ¡l es el propÃ³sito principal de implementar la agregaciÃ³n de enlaces (link aggregation) en un switch de red?",
                "options": [
                    "Mejorar la seguridad de la red cifrando los datos a travÃ©s de mÃºltiples enlaces fÃ­sicos.",
                    "Distribuir el trÃ¡fico de red de manera uniforme a travÃ©s de todas las rutas disponibles en una topologÃ­a de red.",
                    "Crear un Ãºnico enlace lÃ³gico con mÃ¡s ancho de banda combinando mÃºltiples enlaces fÃ­sicos.",
                    "Disminuir el nÃºmero de dominios de difusiÃ³n (broadcast) en una red combinando VLANs."
                ],
                "answer": "Crear un Ãºnico enlace lÃ³gico con mÃ¡s ancho de banda combinando mÃºltiples enlaces fÃ­sicos.",
                "explanation": "La agregaciÃ³n de enlaces (LACP/EtherChannel) combina varios puertos fÃ­sicos en una sola interfaz lÃ³gica, proporcionando mayor ancho de banda total y redundancia.",
                "source_reference": "CapÃ­tulo 13: OptimizaciÃ³n y Alta Disponibilidad de Red > AgregaciÃ³n de Enlaces"
            },
            {
                "id": 31,
                "has_context_image": false,
                "question": "Un tÃ©cnico estÃ¡ resolviendo problemas en un WAP reciÃ©n instalado que estÃ¡ perdiendo conexiones de forma esporÃ¡dica con los dispositivos en la red. Â¿CuÃ¡l de los siguientes deberÃ­a verificar el tÃ©cnico PRIMERO durante la resoluciÃ³n de problemas?",
                "options": [
                    "Tipo de cifrado",
                    "SaturaciÃ³n del ancho de banda",
                    "SSID del WAP",
                    "UbicaciÃ³n del WAP (Placement)"
                ],
                "answer": "UbicaciÃ³n del WAP (Placement)",
                "explanation": "En una instalaciÃ³n nueva, la ubicaciÃ³n fÃ­sica es el factor mÃ¡s crÃ­tico. ObstÃ¡culos, interferencias de otros dispositivos o una mala planificaciÃ³n de celdas suelen ser la causa principal de conexiones inestables.",
                "source_reference": "CapÃ­tulo 9: Despliegue de Redes InalÃ¡mbricas > UbicaciÃ³n de Puntos de Acceso"
            },
            {
                "id": 32,
                "has_context_image": false,
                "question": "EstÃ¡ configurando puertos de enlace (uplink) para que mÃºltiples switches se comuniquen entre sÃ­. Todas las VLANs deben comunicarse desde el switch de servidor designado. Â¿CuÃ¡l de los siguientes deberÃ­a configurarse en los puertos troncales (trunk) si la VLAN 1 no es la VLAN de gestiÃ³n?",
                "options": [
                    "802.1x",
                    "802.1d",
                    "802.1q",
                    "802.1af"
                ],
                "answer": "802.1q",
                "explanation": "El estÃ¡ndar IEEE 802.1Q es el protocolo de 'tagging' utilizado para permitir que mÃºltiples VLANs viajen a travÃ©s de un mismo enlace troncal entre switches.",
                "source_reference": "CapÃ­tulo 7: ConmutaciÃ³n de Red (Switching) > Enlaces Troncales y 802.1Q"
            },
            {
                "id": 33,
                "has_context_image": false,
                "question": "Mientras Darren estÃ¡ trabajando en la instalaciÃ³n de nuevos cables para la transmisiÃ³n de datos de su red local que corren junto a los cables actuales. DespuÃ©s de instalarlos, nota que hay una disminuciÃ³n notable en la calidad de la seÃ±al, resultando en errores y pÃ©rdida de paquetes. Â¿CuÃ¡l podrÃ­a ser la causa principal de esta degradaciÃ³n de la seÃ±al?",
                "options": [
                    "CongestiÃ³n",
                    "Jitter",
                    "Sobrecarga",
                    "Crosstalk (DiafonÃ­a)"
                ],
                "answer": "Crosstalk (DiafonÃ­a)",
                "explanation": "El Crosstalk ocurre cuando la seÃ±al de un cable interfiere con otro cable adyacente debido a la proximidad fÃ­sica, especialmente si no estÃ¡n adecuadamente blindados o trenzados.",
                "source_reference": "CapÃ­tulo 2: Cables y Conectores de Red > Problemas en el Cableado de Cobre"
            },
            {
                "id": 34,
                "has_context_image": false,
                "question": "Dion Training cree que puede haber un dispositivo no autorizado (rogue device) conectado a su red. Le han pedido que identifique cada host, servidor y router actualmente conectado a la red. Â¿CuÃ¡l de las siguientes herramientas le permitirÃ­a identificar quÃ© dispositivos estÃ¡n conectados actualmente a la red?",
                "options": [
                    "Analizador de protocolos",
                    "Analizador de NetFlow",
                    "EscÃ¡ner de IP (IP scanner)",
                    "EscÃ¡ner de puertos"
                ],
                "answer": "EscÃ¡ner de IP (IP scanner)",
                "explanation": "Un escÃ¡ner de IP recorre un rango de direcciones y utiliza ICMP (ping) o ARP para descubrir quÃ© dispositivos estÃ¡n activos y respondiendo en la red en un momento dado.",
                "source_reference": "CapÃ­tulo 12: Ojos en la Red: Monitoreo y AnÃ¡lisis > Herramientas de Escaneo y Descubrimiento"
            },
            {
                "id": 35,
                "has_context_image": false,
                "question": "Â¿QuÃ© mecanismo permite la notificaciÃ³n proactiva de eventos de red y facilita el monitoreo y la resoluciÃ³n de problemas eficientes en la gestiÃ³n de red?",
                "options": [
                    "SMTP",
                    "HTTP",
                    "SNMP",
                    "ICMP"
                ],
                "answer": "SNMP",
                "explanation": "SNMP (Simple Network Management Protocol) utiliza 'traps' o notificaciones proactivas para informar al administrador sobre fallos o eventos especÃ­ficos en los dispositivos de red de forma automÃ¡tica.",
                "source_reference": "CapÃ­tulo 12: Ojos en la Red: Monitoreo y AnÃ¡lisis > Protocolo de GestiÃ³n de Red (SNMP)"
            },
            {
                "id": 36,
                "has_context_image": false,
                "question": "Un tÃ©cnico de red necesita monitorear la red para encontrar a un usuario que estÃ¡ navegando en sitios web que van en contra de la polÃ­tica de uso aceptable de la empresa. Â¿QuÃ© deberÃ­a usar el tÃ©cnico para ver el sitio web y encontrar al usuario que lo estÃ¡ navegando?",
                "options": [
                    "Herramienta de 'top listener'",
                    "SNMP GET",
                    "Packet sniffer (Analizador de paquetes)",
                    "Sistema de detecciÃ³n de intrusiones (IDS)"
                ],
                "answer": "Packet sniffer (Analizador de paquetes)",
                "explanation": "Un packet sniffer (o analizador de protocolos como Wireshark) permite capturar y ver el contenido detallado del trÃ¡fico de red, incluyendo las URLs y las direcciones IP de origen, lo que facilita identificar al usuario y el sitio visitado.",
                "source_reference": "CapÃ­tulo 12: Ojos en la Red: Monitoreo y AnÃ¡lisis > Analizadores de Paquetes y Protocolos"
            },
            {
                "id": 37,
                "has_context_image": true,
                "question": "(Esta es una pregunta simulada basada en el desempeÃ±o). Un usuario domÃ©stico realiza una prueba de velocidad usando SpeedTest.net y recibe el siguiente reporte: Ping 13ms, Descarga 99.79 Mbps, Carga 116.61 Mbps. Â¿CuÃ¡l de las siguientes es una interpretaciÃ³n correcta de estos resultados?",
                "options": [
                    "La PC del usuario descarga informaciÃ³n mÃ¡s rÃ¡pido de lo que la sube porque tiene una conexiÃ³n asincrÃ³nica.",
                    "La PC del usuario descargÃ³ 99.79 MB de datos del sitio web y subiÃ³ 116.61 MB de datos al sitio web.",
                    "La PC del usuario estÃ¡ recibiendo datos a 99.79 Mbps y enviando datos al servidor a 116.61 Mbps.",
                    "El sitio web SpeedTest descarga datos a su servidor a 99.79 Mbps y sube datos desde su servidor a 116.61 Mbps."
                ],
                "answer": "La PC del usuario estÃ¡ recibiendo datos a 99.79 Mbps y enviando datos al servidor a 116.61 Mbps.",
                "explanation": "La prueba de rendimiento muestra la velocidad instantÃ¡nea de transferencia. 'Download' es la recepciÃ³n de datos (99.79 Mbps) y 'Upload' es el envÃ­o de datos al servidor (116.61 Mbps). Es notable que en este caso la velocidad de carga es ligeramente superior a la de descarga.",
                "source_reference": "CapÃ­tulo 13: OptimizaciÃ³n y Alta Disponibilidad de Red > MÃ©tricas de Rendimiento"
            },
            {
                "id": 38,
                "has_context_image": false,
                "question": "Su gerente de seguridad fÃ­sica, Janice, quiere asegurarse de que puede detectar cualquier acceso no autorizado al centro de datos. Â¿QuÃ© tecnologÃ­a deberÃ­a usarse para cumplir con su requisito?",
                "options": [
                    "Lector de tarjetas de acceso (Access badge reader)",
                    "Tarjeta inteligente (Smart card)",
                    "Videovigilancia (Video surveillance)",
                    "Acceso biomÃ©trico"
                ],
                "answer": "Videovigilancia (Video surveillance)",
                "explanation": "Mientras que las tarjetas y la biometrÃ­a sirven para 'prevenir' o 'controlar' el acceso, la videovigilancia es la herramienta principal para 'detectar' y auditar visualmente quiÃ©n ha entrado realmente, incluso si se ha burlado el control de acceso (ej: tailgating).",
                "source_reference": "CapÃ­tulo 10: Instalaciones FÃ­sicas y Factores Ambientales > Seguridad FÃ­sica y Monitoreo"
            },
            {
                "id": 39,
                "has_context_image": false,
                "question": "El administrador desea utilizar el nivel de cifrado mÃ¡s fuerte posible usando PSK sin utilizar un servidor de autenticaciÃ³n adicional. Â¿QuÃ© tipo de cifrado deberÃ­a implementarse?",
                "options": [
                    "Filtrado MAC",
                    "WEP",
                    "WPA personal",
                    "WPA2 Enterprise"
                ],
                "answer": "WPA personal",
                "explanation": "WPA2 Personal (usando AES/CCMP) ofrece el cifrado mÃ¡s fuerte sin necesidad de un servidor RADIUS (que sÃ­ requiere la versiÃ³n Enterprise). Aunque la versiÃ³n 'Personal' es mÃ¡s dÃ©bil ante ataques de diccionario que Enterprise, es el nivel mÃ¡ximo autÃ³nomo.",
                "source_reference": "CapÃ­tulo 17: Dispositivos de Seguridad de Red > EstÃ¡ndares de Seguridad InalÃ¡mbrica"
            },
            {
                "id": 40,
                "has_context_image": false,
                "question": "El administrador de red estÃ¡ resolviendo problemas en los puertos de un switch para un servidor de archivos con tarjetas de red (NIC) duales. El servidor de archivos debe configurarse para redundancia, y las NIC duales deben combinarse para obtener el mÃ¡ximo rendimiento. Â¿QuÃ© caracterÃ­stica en el switch debe asegurar el administrador de red que estÃ© habilitada para obtener los mejores resultados?",
                "options": [
                    "Balanceo de carga (Load balancing)",
                    "LACP",
                    "BPDU",
                    "Spanning tree"
                ],
                "answer": "LACP",
                "explanation": "LACP (Link Aggregation Control Protocol, 802.3ad) es el estÃ¡ndar que permite agrupar mÃºltiples interfaces fÃ­sicas en una sola interfaz lÃ³gica, proporcionando tanto redundancia como mayor ancho de banda agregado.",
                "source_reference": "CapÃ­tulo 7: ConmutaciÃ³n de Red (Switching) > AgregaciÃ³n de Enlaces (LACP)"
            },
            {
                "id": 41,
                "has_context_image": false,
                "question": "Â¿CuÃ¡l de los siguientes estÃ¡ndares se usa comÃºnmente para intercambiar datos de autenticaciÃ³n y autorizaciÃ³n entre partes, facilitando el inicio de sesiÃ³n Ãºnico (SSO) en diferentes sistemas?",
                "options": [
                    "TLS",
                    "SOAP",
                    "SAML",
                    "IPsec"
                ],
                "answer": "SAML",
                "explanation": "SAML (Security Assertion Markup Language) es un estÃ¡ndar basado en XML para intercambiar datos de autenticaciÃ³n y autorizaciÃ³n entre un proveedor de identidad y un proveedor de servicios, permitiendo Single Sign-On (SSO).",
                "source_reference": "CapÃ­tulo 18: Fortalecimiento y Defensa de la Red > GestiÃ³n de Identidad y Acceso"
            },
            {
                "id": 42,
                "has_context_image": false,
                "question": "Tiny Services, una oficina pequeÃ±a con mÃºltiples departamentos, desea segmentar su red para mejorar el rendimiento y la seguridad. Â¿QuÃ© caracterÃ­stica de DHCP deberÃ­an usar para asignar diferentes rangos de direcciones IP a cada departamento?",
                "options": [
                    "Options (Opciones)",
                    "Lease Time (Tiempo de concesiÃ³n)",
                    "Scope (Ãmbito / Alcance)",
                    "Reservations (Reservas)"
                ],
                "answer": "Scope (Ãmbito / Alcance)",
                "explanation": "Un 'Scope' en DHCP define el rango de direcciones IP y otros parÃ¡metros (puerta de enlace, DNS) que se asignarÃ¡n a una subred o departamento especÃ­fico.",
                "source_reference": "CapÃ­tulo 5: Servicios y Protocolos de Red > GestiÃ³n de Ãmbitos DHCP"
            },
            {
                "id": 43,
                "has_context_image": false,
                "question": "Usted es un tÃ©cnico de red que resuelve problemas de conectividad en un edificio de oficinas grande con mÃºltiples redes Wi-Fi. Para identificar posibles interferencias y optimizar la intensidad de la seÃ±al, Â¿quÃ© herramienta serÃ­a mÃ¡s efectiva para analizar las seÃ±ales Wi-Fi?",
                "options": [
                    "Probador de cables (Cable tester)",
                    "Analizador de espectro (Spectrum analyzer)",
                    "Analizador de Wi-Fi",
                    "MultÃ­metro"
                ],
                "answer": "Analizador de Wi-Fi",
                "explanation": "Un analizador de Wi-Fi permite ver los canales ocupados, la intensidad de la seÃ±al (RSSI) de los APs cercanos y el ruido, facilitando la elecciÃ³n de canales menos congestionados para evitar interferencias.",
                "source_reference": "CapÃ­tulo 9: Despliegue de Redes InalÃ¡mbricas > Herramientas de AnÃ¡lisis InalÃ¡mbrico"
            },
            {
                "id": 44,
                "has_context_image": false,
                "question": "Â¿CuÃ¡l de los siguientes se utiliza para distribuir energÃ­a de manera eficiente a los racks de equipos de computaciÃ³n y redes?",
                "options": [
                    "HVAC",
                    "Generador",
                    "UPS",
                    "PDU"
                ],
                "answer": "PDU",
                "explanation": "Una PDU (Power Distribution Unit) es una regleta industrial diseÃ±ada para ser instalada en racks y distribuir la energÃ­a de un sistema UPS o suministro elÃ©ctrico a mÃºltiples dispositivos de red.",
                "source_reference": "CapÃ­tulo 10: Instalaciones FÃ­sicas y Factores Ambientales > DistribuciÃ³n de EnergÃ­a"
            },
            {
                "id": 45,
                "has_context_image": false,
                "question": "Margery, una administradora de red, observa que los usuarios de un departamento experimentan velocidades de red lentas, especialmente durante las horas pico de trabajo. DespuÃ©s de descartar fallos de hardware y confirmar que la infraestructura estÃ¡ bien configurada, sospecha que el problema estÃ¡ relacionado con el flujo de trÃ¡fico. Al identificar la causa mÃ¡s probable, seleccione la declaraciÃ³n mÃ¡s adecuada.",
                "options": [
                    "Los tiempos de resoluciÃ³n DNS para el segmento de red del departamento han aumentado drÃ¡sticamente.",
                    "Hay una congestiÃ³n significativa en la red debido al aumento del trÃ¡fico de videoconferencias durante las horas pico.",
                    "Los ajustes del firewall se han configurado mal, bloqueando inadvertidamente el trÃ¡fico de la subred.",
                    "Los puertos del switch que conectan los puntos de acceso estÃ¡n configurados con ajustes de VLAN incorrectos."
                ],
                "answer": "Hay una congestiÃ³n significativa en la red debido al aumento del trÃ¡fico de videoconferencias durante las horas pico.",
                "explanation": "La lentitud cÃ­clica (en horas pico) en una red que ya ha sido verificada fÃ­sicamente suele ser sÃ­ntoma inequÃ­voco de congestiÃ³n de red, causada por un volumen de trÃ¡fico que excede la capacidad del enlace o por aplicaciones de alto consumo como el vÃ­deo.",
                "source_reference": "CapÃ­tulo 12: Ojos en la Red: Monitoreo y AnÃ¡lisis > GestiÃ³n de CongestiÃ³n y Cuellos de Botella"
            },
            {
                "id": 46,
                "has_context_image": false,
                "question": "Quinn estÃ¡ configurando una red inalÃ¡mbrica para un cliente en un Ã¡rea conocida por su denso trÃ¡fico inalÃ¡mbrico y una estricta supervisiÃ³n regulatoria sobre el uso de canales. Para asegurar el cumplimiento y un rendimiento Ã³ptimo, se centran en incorporar una caracterÃ­stica del estÃ¡ndar 802.11h. Â¿QuÃ© aspecto de 802.11h deberÃ­a priorizar Quinn para cumplir con estos requisitos?",
                "options": [
                    "Control de Potencia de TransmisiÃ³n (Transmit Power Control)",
                    "Capacidades de Roaming RÃ¡pido",
                    "TecnologÃ­a Beamforming",
                    "TecnologÃ­a Multiple Input Multiple Output (MIMO)"
                ],
                "answer": "Control de Potencia de TransmisiÃ³n (Transmit Power Control)",
                "explanation": "El estÃ¡ndar IEEE 802.11h aborda la gestiÃ³n de espectro y potencia en redes inalÃ¡mbricas. Su caracterÃ­stica de Control de Potencia de TransmisiÃ³n (TPC) permite ajustar dinÃ¡micamente la potencia de salida para reducir la interferencia con otros sistemas (como radares) y cumplir con las regulaciones locales, lo cual es crÃ­tico en Ã¡reas con alta densidad y supervisiÃ³n.",
                "source_reference": "CapÃ­tulo 9: Despliegue de Redes InalÃ¡mbricas > EstÃ¡ndares y Cumplimiento Regulatorio"
            },
            {
                "id": 47,
                "has_context_image": false,
                "question": "Un administrador de red estÃ¡ configurando una red para su empleador. Al implementar los ajustes de lÃ­nea base, decide usar MÃ¡scara de Subred de Longitud Variable (VLSM), creyendo que apoyarÃ¡ mejor el crecimiento de la red y permitirÃ¡ un uso eficiente de las direcciones IP. Â¿CuÃ¡l de las siguientes afirmaciones es VERDADERA al considerar el uso de VLSM?",
                "options": [
                    "Consolida mÃºltiples subredes bajo una sola ruta para un enrutamiento mÃ¡s eficiente.",
                    "Permite que se usen subredes de mÃºltiples tamaÃ±os dentro de una red mÃ¡s grande.",
                    "Elimina la necesidad de mÃ¡scaras de subred mediante la asignaciÃ³n dinÃ¡mica de direcciones.",
                    "Restringe todas las subredes al mismo tamaÃ±o, asegurando la uniformidad en toda la red."
                ],
                "answer": "Permite que se usen subredes de mÃºltiples tamaÃ±os dentro de una red mÃ¡s grande.",
                "explanation": "VLSM (Variable Length Subnet Masking) es la tÃ©cnica que permite dividir un espacio de direcciones IP en subredes de diferentes tamaÃ±os segÃºn las necesidades especÃ­ficas de cada segmento (ej: una /24 para usuarios y una /30 para enlaces WAN), optimizando el uso del direccionamiento.",
                "source_reference": "CapÃ­tulo 4: Direccionamiento IP y Subnetting > Conceptos de VLSM"
            },
            {
                "id": 48,
                "has_context_image": false,
                "question": "Bessie trabaja como ingeniera de red para su organizaciÃ³n y quiere diagnosticar un problema con un servidor DNS que no resuelve un nombre de host especÃ­fico. Â¿CuÃ¡l de los siguientes comandos le proporcionarÃ­a la informaciÃ³n necesaria al consultar los servidores DNS para resolver el nombre de host a una direcciÃ³n IP?",
                "options": [
                    "tcpdump",
                    "ping",
                    "nslookup",
                    "traceroute/tracert"
                ],
                "answer": "nslookup",
                "explanation": "La herramienta nslookup (Name Server Lookup) se utiliza especÃ­ficamente para consultar registros en los servidores DNS y verificar la resoluciÃ³n de nombres, lo que permite diagnosticar si el problema estÃ¡ en el servidor, en el registro o en la red.",
                "source_reference": "CapÃ­tulo 19: MetodologÃ­a de ResoluciÃ³n de Problemas > Herramientas de LÃ­nea de Comandos"
            },
            {
                "id": 49,
                "has_context_image": false,
                "question": "Tamera y su esposo estÃ¡n conduciendo hacia la playa el fin de semana. Mientras su esposo conduce, ella usa su iPhone para navegar en Facebook. Su telÃ©fono muestra solo 1 barra de seÃ±al 3G en la ubicaciÃ³n actual. Puede hacer y recibir llamadas, pero Facebook se niega a cargar su feed de noticias. Â¿CuÃ¡l de los siguientes es MÃS probable que sea el problema?",
                "options": [
                    "La radio celular no puede conectarse a las torres de telefonÃ­a",
                    "El firmware de banda base necesita ser actualizado",
                    "Las velocidades de datos son insuficientes con solo una barra de seÃ±al",
                    "El smartphone ha sido infectado con un virus"
                ],
                "answer": "Las velocidades de datos son insuficientes con solo una barra de seÃ±al",
                "explanation": "Con una seÃ±al 3G de solo una barra, el ancho de banda efectivo y la estabilidad de la conexiÃ³n de datos suelen ser insuficientes para cargar aplicaciones de contenido rico como redes sociales, aunque la seÃ±al bÃ¡sica pueda ser suficiente para mantener una llamada de voz (que requiere menos ancho de banda).",
                "source_reference": "CapÃ­tulo 11: TecnologÃ­as WAN y Conectividad Remota > Redes Celulares y Rendimiento"
            },
            {
                "id": 50,
                "has_context_image": false,
                "question": "Â¿CuÃ¡l de los siguientes sistemas se usa comÃºnmente para gestionar certificados digitales, asegurando la comunicaciÃ³n segura y la autenticaciÃ³n en una red?",
                "options": [
                    "PKI",
                    "Cifrado de Clave SimÃ©trica",
                    "TLS",
                    "2FA"
                ],
                "answer": "PKI",
                "explanation": "PKI (Public Key Infrastructure) es el marco de hardware, software, personas y procesos necesarios para crear, gestionar, distribuir, usar, almacenar y revocar certificados digitales y gestionar el cifrado de clave pÃºblica.",
                "source_reference": "CapÃ­tulo 18: Fortalecimiento y Defensa de la Red > Infraestructura de Clave PÃºblica (PKI)"
            },
            {
                "id": 51,
                "has_context_image": false,
                "question": "En el contexto de VXLAN (Virtual Extensible Local Area Network), Â¿cuÃ¡l es el propÃ³sito del Identificador de Red VXLAN (VNI)?",
                "options": [
                    "Se utiliza para diferenciar entre diferentes redes superpuestas (overlay) de VXLAN.",
                    "Se utiliza para autenticar los paquetes VXLAN para asegurar la seguridad.",
                    "Se utiliza para designar las direcciones IP de origen y destino para el trÃ¡fico VXLAN.",
                    "Se utiliza para identificar de forma Ãºnica cada punto final del tÃºnel VXLAN (VTEP)."
                ],
                "answer": "Se utiliza para diferenciar entre diferentes redes superpuestas (overlay) de VXLAN.",
                "explanation": "El VNI (VXLAN Network Identifier) es un identificador de 24 bits (que permite hasta 16 millones de redes) utilizado para segmentar y distinguir diferentes redes virtuales de capa 2 que se transportan sobre una red de capa 3 (overlay).",
                "source_reference": "CapÃ­tulo 8: TecnologÃ­as de Nube y VirtualizaciÃ³n > SegmentaciÃ³n con VXLAN"
            },
            {
                "id": 52,
                "has_context_image": false,
                "question": "Â¿QuÃ© distingue a Security Service Edge (SSE) de las arquitecturas de seguridad de red tradicionales?",
                "options": [
                    "SSE prioriza el rendimiento de la red sobre las funcionalidades de seguridad.",
                    "SSE se centra Ãºnicamente en asegurar los puntos finales dentro de la red corporativa.",
                    "SSE aprovecha los servicios de seguridad basados en la nube para proteger a usuarios y dispositivos distribuidos.",
                    "SSE se basa en dispositivos fÃ­sicos desplegados en el perÃ­metro de la red para la seguridad."
                ],
                "answer": "SSE aprovecha los servicios de seguridad basados en la nube para proteger a usuarios y dispositivos distribuidos.",
                "explanation": "SSE (Security Service Edge) es un conjunto de servicios de seguridad (SWG, CASB, ZTNA) entregados desde la nube para proteger el acceso a aplicaciones y datos independientemente de la ubicaciÃ³n del usuario, a diferencia de la seguridad tradicional basada en perÃ­metros fÃ­sicos.",
                "source_reference": "CapÃ­tulo 18: Fortalecimiento y Defensa de la Red > Arquitecturas de Seguridad Modernas (SASE/SSE)"
            },
            {
                "id": 53,
                "has_context_image": false,
                "question": "Su empresa acaba de instalar un nuevo servidor web que permitirÃ¡ conexiones entrantes a travÃ©s del puerto 80 desde Internet, mientras que no aceptarÃ¡ ninguna conexiÃ³n desde la red interna. Se le ha pedido que ubique el servidor web en la arquitectura de red y configure la regla ACL para soportar los requisitos. La arquitectura de red estÃ¡ segmentada usando un firewall de tres patas (triple-homed) con las siguientes zonas:\n\n1. PUBLIC, eth0, 66.13.24.16/30\n2. DMZ, eth1, 172.16.1.1/24\n3. PRIVATE, eth2, 192.168.1.1/24\n\nÂ¿DÃ³nde deberÃ­a instalar el servidor web y cÃ³mo deberÃ­a configurarlo?",
                "options": [
                    "Poner el servidor en la zona PUBLIC con una regla entrante de eth0 a eth1 que permita el trÃ¡fico del puerto 80 a la IP del servidor",
                    "Poner el servidor en la zona PRIVATE con una regla entrante de eth0 a eth1 que permita el trÃ¡fico del puerto 80 a la IP del servidor",
                    "Poner el servidor en la zona DMZ con una regla entrante de eth0 a eth1 que permita el trÃ¡fico del puerto 80 a la IP del servidor",
                    "Poner el servidor en la zona DMZ con una regla entrante de eth1 a eth0 que permita el trÃ¡fico del puerto 80 a la IP del servidor"
                ],
                "answer": "Poner el servidor en la zona DMZ con una regla entrante de eth0 a eth1 que permita el trÃ¡fico del puerto 80 a la IP del servidor",
                "explanation": "Los servidores pÃºblicos deben ubicarse en la DMZ (zona desmilitarizada) para aislarlos de la red interna (PRIVATE). La interfaz conectada a Internet es eth0 (PUBLIC) y la DMZ es eth1. Por lo tanto, la regla de firewall debe permitir el trÃ¡fico entrante desde la interfaz pÃºblica (eth0) hacia la interfaz de la DMZ (eth1) en el puerto 80.",
                "source_reference": "CapÃ­tulo 18: Fortalecimiento y Defensa de la Red > Zonas de Seguridad y DMZ"
            },
            {
                "id": 54,
                "has_context_image": false,
                "question": "Usted es un administrador de red y nota que varios usuarios estÃ¡n experimentando velocidades de Internet lentas y desconexiones intermitentes. DespuÃ©s de reunir informaciÃ³n e identificar los sÃ­ntomas, sospecha que el problema podrÃ­a estar relacionado con fallos en el servidor DHCP. Â¿CuÃ¡l de los siguientes pasos deberÃ­a tomar a continuaciÃ³n segÃºn la metodologÃ­a de resoluciÃ³n de problemas?",
                "options": [
                    "Documentar el problema y las acciones tomadas hasta ahora.",
                    "Notificar y escalar el problema al administrador de red senior inmediatamente.",
                    "Establecer una teorÃ­a de causa probable y probarla.",
                    "Reiniciar el servidor DHCP ya que esa es la causa probable."
                ],
                "answer": "Establecer una teorÃ­a de causa probable y probarla.",
                "explanation": "SegÃºn la metodologÃ­a de CompTIA, despuÃ©s de identificar el problema (Paso 1) y reunir sÃ­ntomas, el siguiente paso lÃ³gico es Establecer una teorÃ­a de causa probable (Paso 2) y posteriormente probar la teorÃ­a para determinar la causa (Paso 3). Escalar o reiniciar sin probar son acciones prematuras.",
                "source_reference": "CapÃ­tulo 19: MetodologÃ­a de ResoluciÃ³n de Problemas > Los 7 Pasos de la MetodologÃ­a CompTIA"
            },
            {
                "id": 55,
                "has_context_image": false,
                "question": "Mathan acaba de comprar un nombre de dominio y creÃ³ un registro A para vincular su nombre de dominio a una direcciÃ³n IP. Â¿CuÃ¡l de las siguientes herramientas deberÃ­a usar para verificar que el registro se creÃ³ correctamente?",
                "options": [
                    "ipconfig",
                    "arp",
                    "dig",
                    "tcpdump"
                ],
                "answer": "dig",
                "explanation": "La herramienta dig (Domain Information Groper) es una utilidad de lÃ­nea de comandos para realizar consultas a servidores DNS, permitiendo verificar quÃ© registros A, MX, TXT, etc., estÃ¡n configurados y activos para un dominio determinado.",
                "source_reference": "CapÃ­tulo 19: MetodologÃ­a de ResoluciÃ³n de Problemas > Herramientas de LÃ­nea de Comandos"
            },
            {
                "id": 56,
                "has_context_image": false,
                "question": "Daisy estÃ¡ planificando la infraestructura de red para su nuevo centro de datos. El Ã¡rea estÃ¡ densamente equipada y los cables deben tenderse muy cerca de lÃ­neas elÃ©ctricas y otras fuentes de interferencia. Ella quiere mantener los costos lo mÃ¡s bajos posible, pero tener la capacidad de resistir la interferencia mencionada. Dados estos requisitos, Â¿cuÃ¡l de estos tipos de cable es el mÃ¡s prÃ¡ctico para asegurar la fidelidad de la red en esta Ã¡rea de alto trÃ¡fico?",
                "options": [
                    "UTP Cat6",
                    "Fibra Multimodo",
                    "Fibra Monomodo",
                    "STP Cat6a"
                ],
                "answer": "STP Cat6a",
                "explanation": "El cable de par trenzado blindado (STP - Shielded Twisted Pair) estÃ¡ diseÃ±ado especÃ­ficamente para entornos con alta interferencia electromagnÃ©tica (EMI), como la proximidad a lÃ­neas elÃ©ctricas. STP Cat6a es mÃ¡s econÃ³mico que la fibra Ã³ptica y proporciona el blindaje necesario para mantener la fiabilidad en estas condiciones.",
                "source_reference": "CapÃ­tulo 2: Medios de Red y Dispositivos de ConexiÃ³n > Tipos de Cableado de Cobre"
            },
            {
                "id": 57,
                "has_context_image": false,
                "question": "Â¿CuÃ¡l es la ventaja principal de usar inventarios dinÃ¡micos en redes?",
                "options": [
                    "Los inventarios dinÃ¡micos mejoran el rendimiento de la red y reducen la latencia.",
                    "Los inventarios dinÃ¡micos permiten una escalabilidad sin fisuras y soportan una rÃ¡pida expansiÃ³n de la red.",
                    "Los inventarios dinÃ¡micos proporcionan una seguridad mejorada y previenen el acceso no autorizado.",
                    "Los inventarios dinÃ¡micos simplifican la gestiÃ³n de la red y reducen el esfuerzo manual."
                ],
                "answer": "Los inventarios dinÃ¡micos simplifican la gestiÃ³n de la red y reducen el esfuerzo manual.",
                "explanation": "Un inventario dinÃ¡mico se actualiza automÃ¡ticamente a medida que se aÃ±aden o eliminan dispositivos en la red (a menudo mediante scripts o APIs), lo que desarrolla la necesidad de mantener listas manuales, reduce errores humanos y simplifica enormemente la gestiÃ³n en entornos grandes.",
                "source_reference": "CapÃ­tulo 12: Ojos en la Red: Monitoreo y AnÃ¡lisis > GestiÃ³n de Inventario"
            },
            {
                "id": 58,
                "has_context_image": false,
                "question": "Se contrata a un nuevo administrador de red para reemplazar a un consultor que dirigiÃ³ la red durante varios meses y cuyo contrato acaba de ser cancelado. DespuÃ©s de un mes trabajando en la red, el nuevo administrador se dio cuenta de algunos problemas de red y cambios de configuraciÃ³n en los ajustes del servidor. Los archivos de registro (logs) en los servidores no contienen ningÃºn mensaje de error relacionado con los problemas o cambios. Â¿CuÃ¡l podrÃ­a ser el problema?",
                "options": [
                    "Se ha instalado una puerta trasera (backdoor) para conceder acceso a alguien a la red",
                    "El servidor fue vÃ­ctima de un ataque de fuerza bruta a la contraseÃ±a",
                    "La Ãºltima ACL en el firewall estÃ¡ configurada como DENY ANY ANY",
                    "Una mala configuraciÃ³n de TACACS+ o RADIUS estÃ¡ causando que los logs se borren"
                ],
                "answer": "Se ha instalado una puerta trasera (backdoor) para conceder acceso a alguien a la red",
                "explanation": "Si se han realizado cambios de configuraciÃ³n y existen problemas de red, pero no hay registros de estos eventos en los logs del servidor, es muy probable que un atacante (o el antiguo consultor resentido) haya instalado un backdoor y estÃ© borrando deliberadamente su rastro o usando mÃ©todos que evaden el logging estÃ¡ndar para mantener el acceso.",
                "source_reference": "CapÃ­tulo 17: Amenazas a la Seguridad de la Red > Ataques de Acceso y Persistencia"
            },
            {
                "id": 59,
                "has_context_image": false,
                "question": "Dion Training quiere crear un registro DNS para introducir informaciÃ³n DKIM o SPF en el sistema de nombres de dominio y ayudar a prevenir el spam que sale de su dominio. Â¿QuÃ© tipo de registro DNS deberÃ­a crearse?",
                "options": [
                    "SRV",
                    "SOA",
                    "PTR",
                    "TXT"
                ],
                "answer": "TXT",
                "explanation": "Los registros TXT (Text) se utilizan para almacenar informaciÃ³n de texto legible por mÃ¡quina. Protocolos de seguridad de correo electrÃ³nico como SPF (Sender Policy Framework) y DKIM (DomainKeys Identified Mail) utilizan registros TXT para publicar las listas de servidores autorizados y las claves criptogrÃ¡ficas para la verificaciÃ³n.",
                "source_reference": "CapÃ­tulo 5: Servicios y Protocolos de AplicaciÃ³n IP > Registros de Recursos DNS"
            },
            {
                "id": 60,
                "has_context_image": false,
                "question": "Â¿CuÃ¡l de los siguientes proporciona contabilidad, autorizaciÃ³n y autenticaciÃ³n a travÃ©s de una base de datos de privilegios centralizada, asÃ­ como desafÃ­o/respuesta y cifrado de contraseÃ±as?",
                "options": [
                    "Network access control",
                    "ISAKMP",
                    "Multi-factor authentication",
                    "TACACS+"
                ],
                "answer": "TACACS+",
                "explanation": "TACACS+ (Terminal Access Controller Access-Control System Plus) es un protocolo de seguridad AAA que centraliza la autenticaciÃ³n, autorizaciÃ³n y contabilidad. A diferencia de RADIUS, cifra todo el cuerpo del paquete y separa las tres funciones AAA, siendo comÃºn en la administraciÃ³n de dispositivos de red.",
                "source_reference": "CapÃ­tulo 18: Fortalecimiento y Defensa de la Red > Protocolos AAA"
            },
            {
                "id": 61,
                "has_context_image": false,
                "question": "Â¿QuÃ© puerto se usa comÃºnmente para recibir correos electrÃ³nicos desde un servidor de correo?",
                "options": [
                    "Puerto 25",
                    "Puerto 110",
                    "Puerto 80",
                    "Puerto 443"
                ],
                "answer": "Puerto 110",
                "explanation": "El protocolo POP3 (Post Office Protocol version 3) utiliza el puerto 110 por defecto para permitir que los clientes de correo descarguen mensajes desde un servidor. El puerto 25 es para SMTP (envÃ­o), el 80 para HTTP y el 443 para HTTPS.",
                "source_reference": "CapÃ­tulo 5: Servicios y Protocolos de AplicaciÃ³n IP > Puertos de Protocolo de Correo"
            },
            {
                "id": 62,
                "has_context_image": false,
                "question": "En las operaciones de ciberseguridad, Â¿quÃ© tecnologÃ­a se utiliza principalmente para centralizar la recopilaciÃ³n, correlaciÃ³n y anÃ¡lisis de registros (logs) de eventos de seguridad de diversas fuentes?",
                "options": [
                    "IPS",
                    "IDS",
                    "SIEM",
                    "WAF"
                ],
                "answer": "SIEM",
                "explanation": "Un sistema SIEM (Security Information and Event Management) recolecta datos de registros de mÃºltiples dispositivos y aplicaciones, permitiendo a los analistas identificar patrones de ataque, realizar correlaciÃ³n de eventos y generar alertas centralizadas.",
                "source_reference": "CapÃ­tulo 12: Ojos en la Red: Monitoreo y AnÃ¡lisis > SIEM"
            },
            {
                "id": 63,
                "has_context_image": false,
                "question": "Un tÃ©cnico de red ha recibido informes de que una aplicaciÃ³n basada en Internet ha dejado de funcionar. Los empleados informaron que despuÃ©s de actualizar los navegadores de Internet, la aplicaciÃ³n comenzÃ³ a fallar. Muchos usuarios revirtieron la actualizaciÃ³n (rollback), pero esto no corrigiÃ³ el problema. Â¿QuÃ© deberÃ­a hacer la empresa para reducir que este tipo de acciÃ³n cause problemas de red en el futuro?",
                "options": [
                    "Implementar un plan de recuperaciÃ³n ante desastres con un sitio activo (hot site) para permitir que los usuarios sigan trabajando",
                    "Coordinar la actualizaciÃ³n del servidor de Internet para que coincida con las actualizaciones de los usuarios",
                    "Segmentar la red y crear un laboratorio de pruebas para todas las actualizaciones antes del despliegue",
                    "Verificar que los hashes de la actualizaciÃ³n coincidan con los del sitio web del proveedor"
                ],
                "answer": "Segmentar la red y crear un laboratorio de pruebas para todas las actualizaciones antes del despliegue",
                "explanation": "La mejor prÃ¡ctica para evitar que las actualizaciones (ya sean de software o navegadores) interrumpan servicios crÃ­ticos es probarlas primero en un entorno de laboratorio controlado que replique el entorno de producciÃ³n antes de autorizar su despliegue generalizado.",
                "source_reference": "CapÃ­tulo 13: Procedimientos Operativos > GestiÃ³n de Parches y Actualizaciones"
            },
            {
                "id": 64,
                "has_context_image": false,
                "question": "Danielle trabaja como administradora de red y necesita restringir el acceso a recursos sensibles de la empresa en la red. El objetivo es asegurar que solo los dispositivos del departamento de finanzas puedan acceder al servidor del software de contabilidad. Â¿CuÃ¡l de las siguientes acciones deberÃ­a tomar para lograr este objetivo?",
                "options": [
                    "Implementar reglas que especifiquen los dispositivos que tienen permitido el acceso a la red al servidor de software de contabilidad.",
                    "Configurar una red privada virtual (VPN) para que la use el departamento de finanzas al acceder al software de contabilidad.",
                    "Aumentar el nivel de cifrado en la red inalÃ¡mbrica utilizada por el departamento de finanzas.",
                    "Instalar un nuevo firewall especÃ­ficamente para el segmento de red del departamento de finanzas."
                ],
                "answer": "Implementar reglas que especifiquen los dispositivos que tienen permitido el acceso a la red al servidor de software de contabilidad.",
                "explanation": "La implementaciÃ³n de listas de control de acceso (ACL) o reglas de firewall basadas en direcciones IP, MAC o identidades de usuario permite restringir el acceso a servidores especÃ­ficos solo a aquellos dispositivos o departamentos autorizados.",
                "source_reference": "CapÃ­tulo 18: Fortalecimiento y Defensa de la Red > Listas de Control de Acceso (ACL)"
            },
            {
                "id": 65,
                "has_context_image": false,
                "question": "Un compaÃ±ero de trabajo acaba de instalar un switch no gestionado (unmanaged) de 24 puertos. Le preocupa la cantidad de trÃ¡fico de difusiÃ³n (broadcast) que puede existir al usar este dispositivo. Â¿CuÃ¡ntos dominios de difusiÃ³n se crean al usar este Ãºnico switch de 24 puertos?",
                "options": [
                    "24",
                    "1",
                    "2",
                    "0"
                ],
                "answer": "1",
                "explanation": "Por defecto, un switch (especialmente uno no gestionado que no soporta VLANs) crea un Ãºnico dominio de difusiÃ³n para todos sus puertos. Aunque cada puerto es un dominio de colisiÃ³n independiente, el trÃ¡fico de difusiÃ³n enviado por un dispositivo serÃ¡ recibido por todos los demÃ¡s dispositivos conectados al switch.",
                "source_reference": "CapÃ­tulo 2: Medios de Red y Dispositivos de ConexiÃ³n > Conceptos de Switching"
            },
            {
                "id": 66,
                "has_context_image": false,
                "question": "En un entorno de red, Â¿cÃ³mo se compara el uso de un jump box/host con las conexiones de gestiÃ³n directa al administrar servidores remotos y dispositivos de red?",
                "options": [
                    "Las conexiones de gestiÃ³n directa ofrecen una mayor seguridad al requerir mÃºltiples pasos de autenticaciÃ³n para cada dispositivo, en comparaciÃ³n con un jump box/host.",
                    "Las conexiones de gestiÃ³n directa permiten un seguimiento y registro mÃ¡s sencillo de las actividades de los usuarios que el uso de un jump box/host.",
                    "El uso de un jump box/host aumenta significativamente la latencia de la red y reduce el rendimiento general en comparaciÃ³n con las conexiones de gestiÃ³n directa.",
                    "Un jump box/host proporciona una puerta de enlace segura y controlada para que los administradores se conecten a sistemas remotos, minimizando los puntos de entrada expuestos a la red."
                ],
                "answer": "Un jump box/host proporciona una puerta de enlace segura y controlada para que los administradores se conecten a sistemas remotos, minimizando los puntos de entrada expuestos a la red.",
                "explanation": "Un jump box (o servidor de salto) actÃºa como un Ãºnico punto de entrada endurecido hacia una zona de red mÃ¡s segura. Los administradores deben autenticarse primero en el jump box antes de poder acceder a otros servidores internos, lo que reduce la superficie de ataque al no exponer directamente los puertos de gestiÃ³n de cada servidor a redes menos seguras.",
                "source_reference": "CapÃ­tulo 18: Fortalecimiento y Defensa de la Red > Dispositivos de Seguridad"
            },
            {
                "id": 67,
                "has_context_image": false,
                "question": "Â¿CuÃ¡l de los siguientes tipos de flujos de trÃ¡fico describe el trÃ¡fico de red que transita entre varios servidores en su centro de datos? (Seleccione todas las que correspondan)",
                "options": [
                    "Este",
                    "Oeste",
                    "Norte",
                    "Sur"
                ],
                "answer": "Oeste",
                "explanation": "El trÃ¡fico 'Este-Oeste' se refiere a la comunicaciÃ³n que ocurre dentro de un centro de datos entre servidores o aplicaciones. Por el contrario, el trÃ¡fico 'Norte-Sur' se refiere al trÃ¡fico que entra o sale del centro de datos hacia o desde el mundo exterior (Internet o usuarios corporativos). Nota: En muchas arquitecturas modernas se usa el tÃ©rmino conjunto East-West.",
                "source_reference": "CapÃ­tulo 16: Conceptos de Centros de Datos > Flujos de TrÃ¡fico"
            },
            {
                "id": 68,
                "has_context_image": false,
                "question": "El Centro de Operaciones de Seguridad (SOC) de su empresa estÃ¡ detectando actualmente un ataque DDoS en curso contra el servidor de archivos de su red. Un analista de ciberseguridad ha identificado cuarenta estaciones de trabajo internas en la red que estÃ¡n realizando el ataque contra el servidor de archivos. El analista cree que estas estaciones internas estÃ¡n infectadas con malware y las coloca en un Ã¡rea de red de cuarentena. Luego, el analista envÃ­a un ticket al soporte tÃ©cnico para que las estaciones sean escaneadas y limpiadas. Â¿De quÃ© tipo de malware fueron probablemente vÃ­ctimas las estaciones de trabajo segÃºn el escenario proporcionado?",
                "options": [
                    "Botnet",
                    "Rootkit",
                    "Spyware",
                    "Ransomware"
                ],
                "answer": "Botnet",
                "explanation": "Una botnet estÃ¡ formada por un grupo de computadoras infectadas (zombis) que son controladas de forma remota por un atacante (botmaster) para realizar tareas coordinadas, como un ataque de denegaciÃ³n de servicio distribuido (DDoS).",
                "source_reference": "CapÃ­tulo 17: Amenazas a la Seguridad de la Red > Malware"
            },
            {
                "id": 69,
                "has_context_image": false,
                "question": "En la seguridad contra incendios de centros de datos, Â¿quÃ© sistema estÃ¡ diseÃ±ado para minimizar el daÃ±o a la infraestructura de red con las menores preocupaciones ambientales durante una emergencia de incendio?",
                "options": [
                    "Sistema de gas HalÃ³n",
                    "Extintor a base de espuma",
                    "Sistema de rociadores de agua",
                    "SupresiÃ³n de incendios con agente limpio"
                ],
                "answer": "SupresiÃ³n de incendios con agente limpio",
                "explanation": "Los sistemas de agentes limpios (como FM-200 o Novec 1230) utilizan gases quÃ­micos o inertes que extinguen el fuego sin dejar residuos ni daÃ±ar los equipos electrÃ³nicos sensibles, y son mucho mÃ¡s respetuosos con el medio ambiente y la salud humana que los antiguos sistemas de HalÃ³n.",
                "source_reference": "CapÃ­tulo 15: Seguridad FÃ­sica > Control de Incendios"
            },
            {
                "id": 70,
                "has_context_image": false,
                "question": "Un usuario malintencionado estÃ¡ bloqueando la conexiÃ³n de dispositivos celulares a Internet cada vez que entran en una cafeterÃ­a. Si piden su cafÃ© para llevar y caminan al menos una manzana de distancia de la cafeterÃ­a, sus telÃ©fonos inteligentes vuelven a conectarse a Internet. Â¿QuÃ© tipo de ataque de red estÃ¡ realizando el usuario malintencionado?",
                "options": [
                    "Lista negra de direcciones IP en la ACL",
                    "Ataque en la ruta (On-path attack)",
                    "SuplantaciÃ³n (Spoofing)",
                    "Interferencia de frecuencia (Frequency jamming)"
                ],
                "answer": "Interferencia de frecuencia (Frequency jamming)",
                "explanation": "El jamming consiste en emitir seÃ±ales de radio potentes en las mismas frecuencias que utilizan los dispositivos inalÃ¡mbricos (como Wi-Fi o redes celulares) para saturar el receptor y evitar que la seÃ±al legÃ­tima sea procesada, bloqueando asÃ­ la comunicaciÃ³n. Como el alcance es limitado, el problema desaparece al alejarse de la fuente de interferencia.",
                "source_reference": "CapÃ­tulo 17: Amenazas a la Seguridad de la Red > Ataques InalÃ¡mbricos"
            },
            {
                "id": 71,
                "has_context_image": false,
                "question": "Â¿QuÃ© protocolo se utiliza para la sincronizaciÃ³n de relojes entre diferentes sistemas informÃ¡ticos a travÃ©s de una red de datos conmutada por paquetes y latencia variable?",
                "options": [
                    "NTP",
                    "DHCP",
                    "DNS",
                    "TFTP"
                ],
                "answer": "NTP",
                "explanation": "NTP (Network Time Protocol) estÃ¡ diseÃ±ado especÃ­ficamente para sincronizar los relojes de los dispositivos de red con una referencia de tiempo precisa (como un reloj atÃ³mico) a travÃ©s de redes con latencia variable, asegurando que todos los logs y transacciones tengan marcas de tiempo consistentes.",
                "source_reference": "CapÃ­tulo 5: Servicios y Protocolos de AplicaciÃ³n IP > NTP"
            },
            {
                "id": 72,
                "has_context_image": false,
                "question": "Los prefijos de enrutamiento son asignados en bloques por la IANA y distribuidos por el Registro Regional de Internet (RIR). Â¿CÃ³mo se conocen los identificadores Ãºnicos utilizados para gestionar estas asignaciones?",
                "options": [
                    "Network handle",
                    "Dominio de nivel superior",
                    "NÃºmero de sistema autÃ³nomo",
                    "AgregaciÃ³n de rutas"
                ],
                "answer": "NÃºmero de sistema autÃ³nomo",
                "explanation": "Un ASN es un nÃºmero de identificaciÃ³n Ãºnico asignado a un Sistema AutÃ³nomo (una red o grupo de redes bajo una administraciÃ³n comÃºn, como un ISP o una gran corporaciÃ³n) para que pueda intercambiar informaciÃ³n de enrutamiento con otros sistemas autÃ³nomos utilizando el protocolo BGP.",
                "source_reference": "CapÃ­tulo 7: Conceptos de Enrutamiento IP > Sistema AutÃ³nomo (AS)"
            },
            {
                "id": 73,
                "has_context_image": false,
                "question": "Â¿CuÃ¡l es el ID de red asociado con el host ubicado en 10.10.10.200/25?",
                "options": [
                    "10.10.10.64",
                    "10.10.10.192",
                    "10.10.10.128",
                    "10.10.10.0"
                ],
                "answer": "10.10.10.128",
                "explanation": "Una mÃ¡scara /25 significa que el Ãºltimo octeto se divide en dos subredes de 128 direcciones cada una (0-127 y 128-255). La direcciÃ³n 10.10.10.200 se encuentra en el rango de la segunda subred, que comienza en el ID de red 10.10.10.128.",
                "source_reference": "CapÃ­tulo 6: Direccionamiento IPv4 y Subredes > Subneteado"
            },
            {
                "id": 74,
                "has_context_image": false,
                "question": "Â¿QuÃ© capa del modelo OSI interactÃºa con el software del usuario final, como por ejemplo al usar un navegador web para comunicarse a travÃ©s de HTTP para mostrar un sitio web?",
                "options": [
                    "Capa 5",
                    "Capa 4",
                    "Capa 6",
                    "Capa 7"
                ],
                "answer": "Capa 7",
                "explanation": "La capa 7 (Capa de AplicaciÃ³n) es la capa del modelo OSI mÃ¡s cercana al usuario final. Proporciona servicios de red a las aplicaciones de software (como navegadores web o clientes de correo) y protocolos como HTTP, FTP y SMTP operan en esta capa.",
                "source_reference": "CapÃ­tulo 1: El Modelo OSI > Capas 5-7"
            },
            {
                "id": 75,
                "has_context_image": false,
                "question": "Se le ha pedido que conecte tres dispositivos 802.11a a un punto de acceso 802.11g configurado con WEP. Los dispositivos estÃ¡n a menos de 20 pies del punto de acceso, pero aÃºn asÃ­ no pueden asociarse con Ã©l. Â¿CuÃ¡l de las siguientes es la causa MÃS probable de que los dispositivos no se asocien con el WAP?",
                "options": [
                    "Interferencia",
                    "Cifrado discordante",
                    "PÃ©rdida de seÃ±al",
                    "Discordancia de frecuencia"
                ],
                "answer": "Discordancia de frecuencia",
                "explanation": "802.11a opera exclusivamente en la banda de 5 GHz, mientras que 802.11g opera exclusivamente en la banda de 2.4 GHz. Debido a esta diferencia de frecuencias fundamentales, los dispositivos no pueden comunicarse ni asociarse entre sÃ­ a pesar de la proximidad fÃ­sica.",
                "source_reference": "CapÃ­tulo 9: TecnologÃ­as InalÃ¡mbricas > EstÃ¡ndares Wi-Fi"
            },
            {
                "id": 76,
                "has_context_image": false,
                "question": "En el modelo jerÃ¡rquico de tres capas, Â¿quÃ© capa se encuentra entre las otras dos y es responsable de proporcionar conectividad, asÃ­ como de facilitar la comunicaciÃ³n entre los diferentes dispositivos de la capa de acceso?",
                "options": [
                    "DistribuciÃ³n",
                    "Core (NÃºcleo)",
                    "Acceso",
                    "AgregaciÃ³n"
                ],
                "answer": "DistribuciÃ³n",
                "explanation": "La capa de DistribuciÃ³n (Distribution) actÃºa como un puente entre la capa de acceso y la capa central (Core). Es responsable del enrutamiento, el filtrado de paquetes y la comunicaciÃ³n inter-VLAN entre los dispositivos de la capa de acceso antes de enviar el trÃ¡fico al nÃºcleo de alta velocidad.",
                "source_reference": "CapÃ­tulo 16: Conceptos de Centros de Datos > Modelo JerÃ¡rquico"
            },
            {
                "id": 77,
                "has_context_image": false,
                "question": "Â¿QuÃ© combinaciÃ³n(es) de puerto y protocolo se asocian comÃºnmente con el Protocolo de Escritorio Remoto (RDP)?",
                "options": [
                    "Puerto 5060/5061 - UDP",
                    "Puerto 5060/5061 - TCP",
                    "Puerto 3389 - TCP",
                    "Puerto 3389 - UDP"
                ],
                "answer": "Puerto 3389 - TCP",
                "explanation": "RDP utiliza por defecto el puerto 3389 sobre el protocolo de transporte TCP. Aunque las versiones modernas pueden utilizar UDP para optimizar la transmisiÃ³n de grÃ¡ficos y multimedia, TCP sigue siendo el estÃ¡ndar fundamental de conexiÃ³n para RDP.",
                "source_reference": "CapÃ­tulo 5: Servicios y Protocolos de AplicaciÃ³n IP > Puertos Comunes"
            },
            {
                "id": 78,
                "has_context_image": false,
                "question": "Durante la configuraciÃ³n de un nuevo enlace de fibra Ã³ptica entre un router y un switch, observa que no hay conectividad a pesar de que todo el equipo estÃ¡ operativo. Â¿QuÃ© paso de resoluciÃ³n de problemas deberÃ­a considerarse para resolver este problema?",
                "options": [
                    "Intercambiar los hilos de fibra en un extremo para corregir una posible desalineaciÃ³n del transmisor y el receptor.",
                    "Reemplazar el switch por un modelo superior que soporte tasas de datos mÃ¡s rÃ¡pidas.",
                    "Cambiar la configuraciÃ³n de dÃºplex en el puerto del switch conectado al router.",
                    "Reconfigurar la tabla de enrutamiento del router."
                ],
                "answer": "Intercambiar los hilos de fibra en un extremo para corregir una posible desalineaciÃ³n del transmisor y el receptor.",
                "explanation": "En las conexiones de fibra Ã³ptica dÃºplex (dos hilos), el transmisor (TX) de un extremo debe conectarse al receptor (RX) del otro. Si los hilos estÃ¡n 'rectos' (TX-TX), no habrÃ¡ enlace. Intercambiar los hilos en un extremo corrige esta desalineaciÃ³n comÃºn.",
                "source_reference": "CapÃ­tulo 19: MetodologÃ­a de ResoluciÃ³n de Problemas > Problemas FÃ­sicos de Fibra"
            },
            {
                "id": 79,
                "has_context_image": false,
                "question": "Usted estÃ¡ asistiendo a un miembro del equipo de seguridad de Dion Training durante una respuesta a incidentes. El miembro del equipo le pide que determine si se estÃ¡n produciendo conexiones TCP extraÃ±as en una estaciÃ³n de trabajo determinada. Abre el sÃ­mbolo del sistema en la estaciÃ³n de trabajo. Â¿CuÃ¡l de las siguientes herramientas le proporcionarÃ­a informaciÃ³n sobre cualquier conexiÃ³n TCP establecida actualmente en la estaciÃ³n de trabajo?",
                "options": [
                    "route",
                    "arp",
                    "netstat",
                    "tracert"
                ],
                "answer": "netstat",
                "explanation": "La herramienta `netstat` (Network Statistics) muestra todas las conexiones de red activas (TCP y UDP), los puertos en los que el sistema estÃ¡ escuchando y diversas estadÃ­sticas de la interfaz, lo cual es vital para identificar conexiones sospechosas durante un incidente.",
                "source_reference": "CapÃ­tulo 19: MetodologÃ­a de ResoluciÃ³n de Problemas > Herramientas de LÃ­nea de Comandos"
            },
            {
                "id": 80,
                "has_context_image": false,
                "question": "Timothy, un ingeniero de red, tiene la tarea de resolver un problema de conectividad de red. Necesita determinar quÃ© direcciones MAC estÃ¡n asociadas con cada puerto del switch para identificar la fuente del problema de manera eficiente. Â¿QuÃ© comando deberÃ­a usar Timothy para ver esto en un switch Cisco?",
                "options": [
                    "show interface",
                    "show config",
                    "show mac-address-table",
                    "show route"
                ],
                "answer": "show mac-address-table",
                "explanation": "En los dispositivos Cisco, el comando `show mac-address-table` muestra la base de datos de reenvÃ­o del switch, vinculando cada direcciÃ³n MAC aprendida con su puerto fÃ­sico y VLAN correspondiente.",
                "source_reference": "CapÃ­tulo 2: Medios de Red y Dispositivos de ConexiÃ³n > OperaciÃ³n del Switch"
            },
            {
                "id": 81,
                "has_context_image": false,
                "question": "Â¿QuÃ© componente de una infraestructura de red sirve como punto de terminaciÃ³n principal para el cableado que proviene de los proveedores de acceso externos?",
                "options": [
                    "Router",
                    "IDF",
                    "MDF",
                    "Panel de parcheo (Patch Panel)"
                ],
                "answer": "MDF",
                "explanation": "El MDF (Main Distribution Frame) es el punto central de cableado de un edificio o campus donde terminan los servicios de los proveedores externos (demarc) y se distribuyen a los marcos de distribuciÃ³n intermedios (IDF).",
                "source_reference": "CapÃ­tulo 2: Medios de Red y Dispositivos de ConexiÃ³n > Estructuras de Cableado"
            },
            {
                "id": 82,
                "has_context_image": false,
                "question": "Â¿QuÃ© es cierto con respecto a los jumbo frames?",
                "options": [
                    "Su tamaÃ±o de MTU es inferior a 1500",
                    "Se utilizan comÃºnmente con un NAS",
                    "Se utilizan comÃºnmente en una SAN",
                    "Se utilizan comÃºnmente con DHCP"
                ],
                "answer": "Se utilizan comÃºnmente en una SAN",
                "explanation": "Los jumbo frames son tramas Ethernet con una MTU de mÃ¡s de 1500 bytes (tÃ­picamente 9000). Se utilizan en redes de almacenamiento (SAN) e infraestructuras de alto rendimiento para reducir la sobrecarga de la CPU al procesar menos tramas y mÃ¡s grandes para la transferencia de datos masiva.",
                "source_reference": "CapÃ­tulo 16: Conceptos de Centros de Datos > Almacenamiento"
            },
            {
                "id": 83,
                "has_context_image": false,
                "question": "Dion Training Solutions quiere migrar su servidor de correo electrÃ³nico de una soluciÃ³n local (on-premise) a una soluciÃ³n basada en la web alojada por un proveedor, como Google Workspace o Gmail. Â¿CuÃ¡l de los siguientes tipos de modelos de nube describe mejor esta soluciÃ³n propuesta?",
                "options": [
                    "PaaS",
                    "SaaS",
                    "DaaS",
                    "IaaS"
                ],
                "answer": "SaaS",
                "explanation": "Google Workspace y Gmail son ejemplos clÃ¡sicos de Software como Servicio (SaaS), donde el usuario accede a una aplicaciÃ³n completa a travÃ©s de la web sin preocuparse por la infraestructura, el sistema operativo o el mantenimiento del software subyacente.",
                "source_reference": "CapÃ­tulo 8: TecnologÃ­as de Nube y VirtualizaciÃ³n > Modelos de Servicio"
            },
            {
                "id": 84,
                "has_context_image": false,
                "question": "Usted estÃ¡ conectando un nuevo dispositivo IPv6 a su red, pero sus routers solo soportan protocolos IPv4. Â¿CuÃ¡l de las siguientes soluciones de direccionamiento IP resolverÃ­a este desafÃ­o?",
                "options": [
                    "APIPA",
                    "TÃºnel Teredo",
                    "Privada (Private)",
                    "Sin clase (Classless)"
                ],
                "answer": "TÃºnel Teredo",
                "explanation": "Teredo es una tecnologÃ­a de transiciÃ³n que permite la conectividad IPv6 para hosts situados detrÃ¡s de dispositivos NAT que solo manejan IPv4, encapsulando los paquetes IPv6 dentro de datagramas UDP de IPv4.",
                "source_reference": "CapÃ­tulo 4: Direccionamiento IPv6 > TecnologÃ­as de TransiciÃ³n"
            },
            {
                "id": 85,
                "has_context_image": false,
                "question": "Un tÃ©cnico de red en un almacÃ©n debe implementar una soluciÃ³n que permita a una empresa rastrear los envÃ­os a medida que entran y salen de la instalaciÃ³n. Los trabajadores del almacÃ©n deben escanear cada paquete al entrar en el almacÃ©n utilizando un sensor que pueda alcanzar una distancia de hasta 30 cm (1 pie). Â¿CuÃ¡l de las siguientes tecnologÃ­as deberÃ­an utilizar para cumplir con estos requisitos?",
                "options": [
                    "Bluetooth",
                    "RFID",
                    "NFC",
                    "Wi-Fi"
                ],
                "answer": "RFID",
                "explanation": "RFID (Radio Frequency Identification) es ideal para el rastreo de inventario. A diferencia de NFC (que requiere contacto cercano o menos de 10 cm), RFID puede operar a distancias de 30 cm o mucho mÃ¡s, permitiendo el escaneo rÃ¡pido de paquetes en movimiento.",
                "source_reference": "CapÃ­tulo 9: TecnologÃ­as InalÃ¡mbricas > Sensores e IoT"
            },
            {
                "id": 86,
                "has_context_image": false,
                "question": "Dion Training estÃ¡ aÃ±adiendo una pequeÃ±a sucursal en Filipinas y desea asignarles una parte de su espacio de direcciones IPv4 pÃºblicas de Clase C. A Dion Training se le ha asignado un alcance de Clase C de 187.15.3.0/24. La nueva oficina en Filipinas tendrÃ¡ 8 usuarios que necesitan direcciones IP asignadas. Â¿CuÃ¡l es la notaciÃ³n CIDR correcta para la sucursal de Filipinas con el fin de acomodar a los 8 usuarios asignando el nÃºmero mÃ­nimo de direcciones?",
                "options": [
                    "/27",
                    "/29",
                    "/26",
                    "/28"
                ],
                "answer": "/28",
                "explanation": "Para 8 usuarios, necesitamos un mÃ­nimo de 10 direcciones (8 para hosts + ID de red + Broadcast). Una mÃ¡scara /29 proporciona solo 8 direcciones totales (6 Ãºtiles), lo cual es insuficiente. La siguiente opciÃ³n es /28, que proporciona 16 direcciones totales (14 Ãºtiles), siendo el mÃ­nimo necesario para acomodar a los 8 usuarios.",
                "source_reference": "CapÃ­tulo 6: Direccionamiento IPv4 y Subredes > DiseÃ±o de Subredes"
            },
            {
                "id": 87,
                "has_context_image": false,
                "question": "Â¿QuÃ© tipo de configuraciÃ³n de VPN cliente-a-sitio permite a los usuarios acceder de forma remota a los recursos corporativos sin requerir la instalaciÃ³n de software VPN dedicado local?",
                "options": [
                    "SSL VPN",
                    "IPsec VPN",
                    "PPTP VPN",
                    "VPN sin cliente (Clientless VPN)"
                ],
                "answer": "VPN sin cliente (Clientless VPN)",
                "explanation": "Una VPN sin cliente (tÃ­picamente basada en SSL/TLS) permite a los usuarios establecer un tÃºnel seguro utilizando Ãºnicamente un navegador web estÃ¡ndar, eliminando la necesidad de gestionar e instalar software cliente pesado en los dispositivos de los usuarios.",
                "source_reference": "CapÃ­tulo 18: Fortalecimiento y Defensa de la Red > TecnologÃ­as VPN"
            },
            {
                "id": 88,
                "has_context_image": false,
                "question": "Robin, una administradora de red, estÃ¡ realizando una auditorÃ­a rutinaria de la infraestructura de red. Â¿CuÃ¡l de los siguientes se considerarÃ­a parte del inventario de hardware que ella necesitarÃ­a documentar?",
                "options": [
                    "La lista de aplicaciones instaladas en cada estaciÃ³n de trabajo",
                    "Las configuraciones de las listas de control de acceso en el firewall",
                    "La marca, el modelo y el nÃºmero de serie de todos los switches de red",
                    "Las versiones del sistema operativo instaladas en todos los servidores"
                ],
                "answer": "La marca, el modelo y el nÃºmero de serie de todos los switches de red",
                "explanation": "Un inventario de hardware se centra en los activos fÃ­sicos. La marca, el modelo y el nÃºmero de serie de los dispositivos de red (como los switches) son datos fundamentales de este inventario, a diferencia de las aplicaciones o SO que forman parte del inventario de software o configuraciones.",
                "source_reference": "CapÃ­tulo 13: Procedimientos Operativos > DocumentaciÃ³n de Activos (Asset Management)"
            },
            {
                "id": 89,
                "has_context_image": false,
                "question": "La controladora RAID de un servidor fallÃ³ y fue reemplazada por una de una marca diferente. Â¿QuÃ© se necesitarÃ¡ despuÃ©s de que el servidor haya sido reconstruido y unido al dominio?",
                "options": [
                    "Copias de seguridad recientes",
                    "DocumentaciÃ³n del proveedor",
                    "DirecciÃ³n IP estÃ¡tica",
                    "Diagrama de red fÃ­sica"
                ],
                "answer": "Copias de seguridad recientes",
                "explanation": "Las configuraciones de RAID suelen ser propietarias y no son compatibles entre diferentes marcas de controladoras. Al cambiar la controladora por otra marca, es muy probable que los datos existentes se pierdan o no se reconozcan, haciendo que las copias de seguridad (backups) sean esenciales para restaurar el servicio.",
                "source_reference": "CapÃ­tulo 14: Continuidad del Negocio y RecuperaciÃ³n ante Desastres > RAID y RecuperaciÃ³n"
            },
            {
                "id": 90,
                "has_context_image": false,
                "question": "Â¿CuÃ¡l de los siguientes tipos de documentaciÃ³n de red incluirÃ­a etiquetas para indicar quÃ© cables estÃ¡n conectados a quÃ© puertos en un switch de borde?",
                "options": [
                    "Diagrama de cableado (Wiring diagram)",
                    "Informe de levantamiento del sitio (Site survey)",
                    "Diagrama de red fÃ­sica",
                    "Diagrama de red lÃ³gica"
                ],
                "answer": "Diagrama de cableado (Wiring diagram)",
                "explanation": "Un diagrama de cableado (o esquema de parcheo) detalla la conectividad punto a punto de los cables fÃ­sicos, incluyendo etiquetas de cables y asignaciones especÃ­ficas de puertos en los paneles de parcheo y switches, permitiendo un mantenimiento y resoluciÃ³n de problemas fÃ­sicos eficientes.",
                "source_reference": "CapÃ­tulo 13: Procedimientos Operativos > Diagramas de Red"
            }
        ]
    }
};
