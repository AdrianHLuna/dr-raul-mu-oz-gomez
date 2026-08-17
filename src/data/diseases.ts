import { Disease } from "@/types/schema";

export const diseases: Disease[] = [
  {
    id: "lesiones-de-ligamentos-de-la-rodilla",
    name: "Lesiones de Ligamentos de la Rodilla (LCA y LCP)",
    slug: "lesiones-de-ligamentos-de-la-rodilla",
    shortDescription: "Rupturas del ligamento cruzado anterior (LCA) o posterior (LCP) producidas por giros bruscos, traumatismos o práctica deportiva.",
    description: "Las lesiones de los ligamentos cruzados (anterior y posterior) y colaterales de la rodilla ocurren frecuentemente por desaceleraciones repentinas, cambios de dirección en el deporte o contusiones directas. Producen inestabilidad articular severa, chasquido audible y chasquidos con falseo de la articulación.",
    symptoms: [
      "Chasquido o tronido seco en el momento de la lesión",
      "Sensación de falseo o inestabilidad al intentar apoyar el pie",
      "Derrame articular e inflamación aguda inmediata",
      "Dolor articular intenso que impide continuar la actividad física",
      "Dificultad para lograr la extensión o flexión completa de la rodilla"
    ],
    causes: [
      "Giros bruscos sobre el pie fijo durante partidos de fútbol o básquetbol",
      "Caídas o caídas con hiperextensión forzada de la rodilla",
      "Impactos directos laterales o frontales en accidentes vehiculares o deportivos",
      "Debilidad muscular o alteraciones en el alineamiento biomecánico del miembro inferior"
    ],
    treatments: [
      "Reconstrucción artroscópica de ligamento cruzado anterior (LCA) con injerto autólogo",
      "Plastia de reconstrucción del ligamento cruzado posterior (LCP) mínimamente invasiva",
      "Inmovilización funcional y rehabilitación física temprana especializada",
      "Reparación o refuerzo de ligamentos colaterales mediante cirugía articular de precisión"
    ],
    riskFactors: [
      "Práctica de deportes de pivote y contacto (fútbol, básquetbol, voleibol)",
      "Historial previo de esguinces o laxitud ligamentaria",
      "Calzado deportivo inadecuado o terreno de juego irregular",
      "Fatiga muscular durante entrenamientos intensos"
    ],
    prevention: [
      "Fortalecimiento programado de cuadríceps e isquiotibiales",
      "Entrenamiento de propiocepción y control neuromuscular",
      "Uso de técnica adecuada en saltos y desaceleraciones",
      "Calentamiento biomecánico estructurado antes de hacer deporte"
    ]
  },
  {
    id: "lesiones-de-los-meniscos-de-la-rodilla",
    name: "Lesiones de los Meniscos de la Rodilla",
    slug: "lesiones-de-los-meniscos-de-la-rodilla",
    shortDescription: "Desgarros en las almohadillas fibrocartilaginosas que amortiguan la rodilla, ocasionando dolor al agacharse, chasquidos y bloqueo mecánico.",
    description: "Los meniscos medial y lateral son estructuras de fibrocartílago esenciales para amortiguar el peso del cuerpo y estabilizar la articulación de la rodilla. Las roturas meniscales pueden ocurrir en atletas por torsión o en adultos mayores por desgaste degenerativo progresivo.",
    symptoms: [
      "Dolor localizado en la línea articular interna o externa de la rodilla",
      "Bloqueo o chasquido articular mecánico que impide estirar la pierna completamente",
      "Sensación de atrapamiento o que la rodilla 'se traba'",
      "Inflamación persistente y derrame de líquido articular",
      "Dificultad para ponerse de cuclillas o subir y bajar escaleras"
    ],
    causes: [
      "Torsión de la rodilla mientras el pie se apoya con firmeza en el suelo",
      "Flexión profunda o ponerse de cuclillas con carga de peso violenta",
      "Degeneración fibrocartilaginosa gradual asociada con la edad o la artrosis",
      "Microtraumatismos repetitivos en actividades laborales o deportivas"
    ],
    treatments: [
      "Sutura meniscal artroscópica de conservación tisular mínimamente invasiva",
      "Meniscectomía parcial selectiva preservando la mayor cantidad de cartílago sano",
      "Terapia física de fortalecimiento y movilización articular articular",
      "Descarga de peso asistida con muletas en el periodo posquirúrgico inmediato"
    ],
    riskFactors: [
      "Edad avanzada con cambios degenerativos en las articulaciones",
      "Deportes que exigen giros rápidos sobre las rodillas",
      "Sobrepeso y obesidad que aumentan la carga compresiva meniscal",
      "Alineamiento articular en varo o valgo extremo (piernas en O o en X)"
    ],
    prevention: [
      "Mantener un peso corporal adecuado para reducir la presión articular",
      "Evitar giros bruscos con el pie clavado en el piso sin control",
      "Fortalecer los músculos estabilizadores del muslo y la cadera",
      "Utilizar calzado con soporte de amortiguación adecuado"
    ]
  },
  {
    id: "rotura-de-tendones-del-manguito-rotador",
    name: "Rotura de Tendones del Manguito Rotador del Hombro",
    slug: "rotura-de-tendones-del-manguito-rotador",
    shortDescription: "Desgarros parciales o totales de los tendones del hombro, ocasionando dolor nocturno persistente y pérdida de fuerza para levantar el brazo.",
    description: "El manguito rotador es un grupo de 4 tendones (supraespinoso, infraespinoso, redondo menor y subescapular) que mantienen la cabeza del húmero dentro de la cavidad glenoidea. Sus rupturas provocan dolor nocturno incapacitante e imposibilidad para realizar tareas por encima de la cabeza.",
    symptoms: [
      "Dolor sordo y profundo en el hombro que empeora durante la noche e interrumpe el sueño",
      "Incapacidad o debilidad severa para elevar o rotar el brazo",
      "Chasquido o sensación de rozamiento al mover el hombro",
      "Dificultad para peinarse, vestirse o alcanzar objetos elevados",
      "Atrofia muscular visible en la región posterior de la escápula en casos crónicos"
    ],
    causes: [
      "Microtraumatismo repetitivo por movimientos continuos del brazo por encima de la cabeza",
      "Desgaste degenerativo del tendón supraespinoso por reducción del espacio subacromial",
      "Caída sobre el brazo extendido o traumatismos directos de hombro",
      "Levantamiento violento de objetos pesados sin técnica biomecánica"
    ],
    treatments: [
      "Reparación artroscópica del manguito rotador con anclajes de última generación",
      "Acromioplastia y descompresión subacromial artroscópica de precisión",
      "Rehabilitación física dirigida para recuperación del rango de movimiento",
      "Infiltración articular de viscosuplementación en fases inflamatorias selectas"
    ],
    riskFactors: [
      "Edad superior a los 40 años por menor vascularización tendinosa",
      "Profesiones o actividades con movimientos repetitivos de hombro (pintores, carpinteros, nadadores)",
      "Espolones óseos subacromiales que rozan con el tendón",
      "Antecedentes de tabaquismo que compromete la cicatrización tisular"
    ],
    prevention: [
      "Realizar ejercicios periódicos de fortalecimiento de los músculos estabilizadores de la escápula",
      "Corregir la postura encorvada hacia adelante que estrecha el espacio del hombro",
      "Pausas activas en trabajos que requieren elevar los brazos constantemente",
      "Evitar cargar peso excesivo con el brazo en extensión completa"
    ]
  },
  {
    id: "desgaste-de-articulaciones-rodilla-y-cadera",
    name: "Desgaste de Articulaciones (Osteoartrosis de Rodilla y Cadera)",
    slug: "desgaste-de-articulaciones-rodilla-y-cadera",
    shortDescription: "Deterioro progresivo del cartílago articular en rodilla o cadera, produciendo dolor crónico, rigidez al levantarse y limitación para caminar.",
    description: "La gonartrosis (desgaste de rodilla) y coxartrosis (desgaste de cadera) son condiciones degenerativas donde el cartílago que recubre las articulaciones se desgasta progresivamente hasta provocar fricción hueso con hueso, deformidad, dolor crónico e incapacidad funcional severa.",
    symptoms: [
      "Dolor articular crónico que aumenta al caminar o mantenerse de pie prolongadamente",
      "Rigidez articular al despertarse o tras permanecer sentado durante varios minutos",
      "Chasquido o sensación de 'raspado' interior al mover la articulación",
      "Deformidad progresiva con arqueamiento de las piernas o acortamiento aparente",
      "Pérdida paulatina de la distancia que el paciente puede caminar sin dolor"
    ],
    causes: [
      "Desgaste natural del cartílago articular asociado con el envejecimiento",
      "Sobrecarga mecánica repetida por sobrepeso y obesidad",
      "Deformidades óseas congénitas o secuelas de lesiones y fracturas previas (artrosis secundaria)",
      "Factores genéticos y laxitud articular no corregida oportunamente"
    ],
    treatments: [
      "Prótesis total de rodilla (artroplastia primaria de rodilla con componentes de alta durabilidad)",
      "Prótesis total de cadera (artroplastia de reemplazo articular con par de fricción moderno)",
      "Viscosuplementación e infiltración intraarticular para protección del cartílago en fases iniciales",
      "Rehabilitación física de baja carga e impacto para fortalecimiento muscular"
    ],
    riskFactors: [
      "Sobrepeso y obesidad que multiplican la fuerza de impacto articular",
      "Edad mayor de 50 años y predisposición genética",
      "Antecedentes de cirugías meniscales o fracturas articulares antiguas",
      "Trabajos con levantamiento pesado prolongado o posiciones forzadas"
    ],
    prevention: [
      "Mantener un peso saludable para disminuir la carga biomecánica sobre rodillas y caderas",
      "Practicar deportes de bajo impacto como natación, ciclismo o caminata suave",
      "Fortalecimiento diario de cuadríceps, glúteos e isquiotibiales",
      "Tratamiento oportuno de lesiones traumáticas para evitar secuelas artrósicas"
    ]
  },
  {
    id: "inestabilidad-de-las-articulaciones",
    name: "Inestabilidad de las Articulaciones (Hombro, Rodilla y Tobillo)",
    slug: "inestabilidad-de-las-articulaciones",
    shortDescription: "Sensación constante de luxación, zafamiento o falseo en el hombro, la rodilla o el tobillo tras esguinces o traumatismos repetitivos.",
    description: "La inestabilidad articular ocurre cuando los ligamentos, cápsula articular y rodetes labrales que sostienen una articulación se estiran o rompen, permitiendo que la articulación se desplace parcial (subluxación) o totalmente (luxación) fuera de su cavidad normal.",
    symptoms: [
      "Sensación aprehensiva de que la articulación 'se va a salir de su lugar'",
      "Episodios repetidos de luxación donde el hueso se zafa completamente",
      "Dolor recurrente e inflamación tras movimientos cotidianos o deportivos",
      "Chasquido y debilidad marcada en la extremidad afectada",
      "Temor del paciente a mover el brazo por encima de la cabeza o dar pasos en falso"
    ],
    causes: [
      "Traumatismos agudos o caídas con luxación inicial del hombro o la rodilla",
      "Esguinces de tobillo mal curados con cicatrización ligamentaria deficiente",
      "Lesiones del labrum glenoideo (lesión de Bankart o SLAP) en el hombro",
      "Hiperlaxitud ligamentaria congénita"
    ],
    treatments: [
      "Reparación artroscópica del labrum de hombro (Operación de Bankart mínimamente invasiva)",
      "Reconstrucción ligamentaria artroscópica de tobillo y rodilla",
      "Fortalecimiento dinámico de los estabilizadores musculares mediante fisioterapia especializada",
      "Inmovilización temporal controlada durante el periodo agudo posquirúrgico"
    ],
    riskFactors: [
      "Primer episodio de luxación a edad temprana (menores de 25 años)",
      "Práctica de deportes de lanzamiento o contacto (béisbol, fútbol, artes marciales)",
      "Hiperlaxitud articular generalizada",
      "Falta de rehabilitación física completa tras una primera lesión"
    ],
    prevention: [
      "Rehabilitación física rigurosa y supervisada tras el primer episodio de luxación",
      "Ejercicios de propiocepción e integración neuromuscular",
      "Uso de órtesis profilácticas en retorno deportivo de alto riesgo",
      "Evitar automanipulaciones bruscas o intentos de reducción no médica"
    ]
  },
  {
    id: "sindrome-del-tunel-del-carpo",
    name: "Síndrome del Túnel del Carpo",
    slug: "sindrome-del-tunel-del-carpo",
    shortDescription: "Atrapamiento del nervio mediano a nivel de la muñeca, que produce adormecimiento, calambres en la mano y pérdida de fuerza.",
    description: "El síndrome del túnel carpiano es la neuropatía por compresión más común del miembro superior. Ocurre cuando el nervio mediano es comprimido al pasar por el estrecho canal del túnel carpiano en la muñeca, ocasionando parestesias, dolor nocturno e incapacidad para sujetar objetos pequeños.",
    symptoms: [
      "Adormecimiento, hormigueo y calambres en los dedos pulgar, índice, medio y anular",
      "Dolor en la mano y muñeca que se irradia hacia el antebrazo y despierta al paciente de noche",
      "Sensación de torpeza en la mano y caída frecuente de objetos de uso cotidiano",
      "Pérdida de fuerza de la pinza fina entre el pulgar y los demás dedos",
      "Atrofia progresiva de la eminencia tenar (músculo de la base del pulgar) en casos severos"
    ],
    causes: [
      "Compresión del nervio mediano por inflamación de los tendones flexores",
      "Movimientos repetitivos de flexión y extensión de muñeca en el trabajo o uso de teclado",
      "Traumatismos o fracturas antiguas de muñeca no alineadas correctamente",
      "Condiciones sistémicas como diabetes, hipotiroidismo o cambios hormonales"
    ],
    treatments: [
      "Liberación quirúrgica del túnel del carpo por técnica mínimamente invasiva",
      "Uso de férula nocturna de descarga en posición neutra de la muñeca",
      "Modificación ergonométrica de la estación de trabajo y pausas biomecánicas",
      "Terapia física de deslizamiento neural y desinflamación asistida"
    ],
    riskFactors: [
      "Uso continuado de teclados, herramientas vibratorias o manualidades repetitivas",
      "Género femenino y fluctuaciones hormonales (embarazo, menopausia)",
      "Diabetes mellitus y enfermedades inflamatorias reumáticas",
      "Anatomía con canal carpiano congénitamente estrecho"
    ],
    prevention: [
      "Utilizar apoyamuñecas ergonómicos al escribir o usar el mouse del equipo de cómputo",
      "Realizar estiramientos periódicos de los tendones flexores de la mano",
      "Evitar posturas con la muñeca hiperflexionada durante periodos prolongados",
      "Consultar tempranamente ante los primeros síntomas nocturnos de adormecimiento"
    ]
  },
  {
    id: "lesiones-de-la-articulacion-del-tobillo",
    name: "Lesiones de la Articulación del Tobillo",
    slug: "lesiones-de-la-articulacion-del-tobillo",
    shortDescription: "Esguinces graves, desgarros ligamentarios y lesiones osteocondrales de la articulación del tobillo.",
    description: "El tobillo soporta todo el peso corporal durante la marcha y el deporte. Las torceduras violentas provocan desde esguinces con rotura del ligamento peroneoastragalino hasta lesiones osteocondrales en el astrágalo, produciendo inestabilidad crónica y dolor persistente al caminar.",
    symptoms: [
      "Dolor agudo e incapacidad para apoyar el pie tras una torcedura",
      "Inflamación severa con hematoma (moretón) extenso en el pie y tobillo",
      "Inestabilidad crónica con sensación de que el tobillo se 'dobla' solo",
      "Chasquidos al caminar sobre terrenos irregulares",
      "Rigidez articular y pérdida del rango de dorsiflexión del pie"
    ],
    causes: [
      "Mecanismo de inversión forzada (doblar el pie hacia adentro) al pisar mal",
      "Caídas desde alturas o tropezones en superficies irregulares",
      "Esguinces previos no rehabilitados que dejaron laxitud en los ligamentos",
      "Traumatismos directos por deportes de salto o contacto"
    ],
    treatments: [
      "Artroscopia de tobillo para reparación ligamentaria y limpieza osteocondral",
      "Reconstrucción anatómica de ligamentos laterales del tobillo",
      "Inmovilización funcional con bota ortopédica rígida durante la fase de cicatrización",
      "Rehabilitación física de estabilidad y propiocepción articular"
    ],
    riskFactors: [
      "Calzado con tacón alto o suelas sin tracción en terrenos resbaladizos",
      "Antecedentes de esguinces de tobillo previos sin rehabilitación",
      "Práctica de básquetbol, voleibol o atletismo en pistas irregulares",
      "Laxitud ligamentaria generalizada"
    ],
    prevention: [
      "Usar calzado deportivo con adecuado soporte para el tobillo",
      "Fortalecer los músculos peroneos encargados de la estabilidad lateral",
      "Completar siempre la fisioterapia tras un esguince antes de volver a hacer deporte",
      "Prestar atención al terreno al caminar o entrenar al aire libre"
    ]
  },
  {
    id: "dolor-de-hombro",
    name: "Dolor de Hombro y Tendinitis Calcificante",
    slug: "dolor-de-hombro",
    shortDescription: "Inflamación aguda o depósitos de calcio en los tendones del hombro que generan dolor intenso y limitación funcional.",
    description: "El dolor de hombro abarca condiciones como la tendinitis del supraespinoso, la bursitis subacromial y la tendinitis calcificante. Los depósitos de calcio en el tendón generan un proceso inflamatorio sumamente doloroso que limita cualquier intento de elevar el brazo.",
    symptoms: [
      "Dolor intenso en la cara lateral del hombro que se extiende hacia el brazo",
      "Dificultad aguda para mover el hombro o acostarse sobre el lado afectado",
      "Sensación de rigidez progresiva ('hombro congelado' o capsulitis adhesiva)",
      "Dolor repentino y punzante al intentar levantar la mano por encima del nivel de los ojos",
      "Sensibilidad marcada al presionar la región subacromial"
    ],
    causes: [
      "Depósito anómalo de cristales de hidroxiapatita cálcica dentro de los tendones",
      "Sobrecarga de trabajo con movimiento repetitivo por encima de la cabeza",
      "Pinzamiento o roce del tendón con el hueso del acromion",
      "Procesos inflamatorios crónicos de la bursa subacromial"
    ],
    treatments: [
      "Lavado y aspiración artroscópica de depósitos de calcio en tendinitis calcificante",
      "Descompresión y limpieza artroscópica subacromial",
      "Infiltración intraarticular o subacromial desinflamatoria guiada",
      "Programa de movilización asistida e hidroterapia para evitar el hombro congelado"
    ],
    riskFactors: [
      "Edades entre los 30 y 50 años",
      "Trabajos o deportes que requieren elevar constantemente los brazos",
      "Desórdenes metabólicos o vasculares del tendón",
      "Falta de acondicionamiento físico de la cintura escapular"
    ],
    prevention: [
      "Realizar ejercicios de estiramiento y movilidad de hombro de manera habitual",
      "Evitar mantener los brazos elevados por encima de la cabeza durante periodos prolongados",
      "Fortalecer la musculatura de la espalda y escápula",
      "Atender tempranamente los dolores sordos de hombro antes de que se vuelvan agudos"
    ]
  },
  {
    id: "dolor-de-rodilla",
    name: "Dolor de Rodilla y Condromalacia Patelar",
    slug: "dolor-de-rodilla",
    shortDescription: "Reblandecimiento del cartílago situado detrás de la rótula, común en jóvenes y deportistas, que causa dolor al subir escaleras.",
    description: "La condromalacia patelar y el síndrome de dolor patelofemoral ocurren cuando el cartílago articular bajo la rótula se reblandece o desgasta por mala alineación en su deslizamiento sobre el fémur, provocando ardor y chasquidos al doblar las rodillas.",
    symptoms: [
      "Dolor sordo y profundo detrás o alrededor de la rótula",
      "Molestia que se intensifica al subir o bajar escaleras y al estar sentado mucho tiempo",
      "Chasquido o sensación de 'crepitación' debajo de la patela al doblar la rodilla",
      "Sensación de rigidez o pesadez en la articulación tras estar de pie",
      "Leve inflamación recurrente tras realizar caminatas largas"
    ],
    causes: [
      "Desalineamiento de la rótula que no desliza centrada en el surco troclear",
      "Debilidad del músculo vasto interno del cuadríceps",
      "Sobrecarga repetitiva en deportes de salto o carrera continua",
      "Pie plano u otras alteraciones de la pisada que alteran el eje de la rodilla"
    ],
    treatments: [
      "Reorientación y realineamiento patelar mediante artroscopia o liberación lateral",
      "Infiltración de viscosuplementación con ácido hialurónico de alta densidad",
      "Fisioterapia de fortalecimiento estricto del vasto medial del cuadríceps",
      "Uso de plantillas ortopédicas personalizadas para corregir el eje biomecánico"
    ],
    riskFactors: [
      "Jóvenes, adolescentes y mujeres deportistas por mayor ángulo Q de la pelvis",
      "Aumento repentino en la intensidad de carreras o entrenamiento en pendientes",
      "Uso de calzado sin amortiguación en superficies duras",
      "Desequilibrio muscular entre cuadríceps e isquiotibiales"
    ],
    prevention: [
      "Fortalecer la musculatura anterior y posterior del muslo",
      "Corregir la pisada mediante evaluación ortopédica de la marcha",
      "Utilizar tenis con buena absorción de impacto para correr",
      "Aumentar progresivamente las cargas de entrenamiento deportivo"
    ]
  },
  {
    id: "fracturas-oseas-y-traumatismos",
    name: "Fracturas Óseas y Traumatismos Articulares",
    slug: "fracturas-oseas-y-traumatismos",
    shortDescription: "Rupturas de huesos y lesiones traumáticas agudas en miembros superiores e inferiores que requieren fijación quirúrgica precisa.",
    description: "Las fracturas de fémur, tibia, húmero, radio y clavícula son emergencias traumatológicas causadas por impactos de alta energía o caídas. La osteosíntesis precisa mediante placas, tornillos o clavos intramedulares es fundamental para restaurar la alineación anatómica.",
    symptoms: [
      "Dolor insoportable inmediato tras el accidente o impacto",
      "Deformidad evidente, angulación anómala o acortamiento de la pierna o brazo",
      "Incapacidad absoluta para apoyar o mover la extremidad afectada",
      "Inflamación masiva, hematoma extenso y crepitación ósea al tacto",
      "Herida expuesta con fragmento óseo visible en fracturas abiertas"
    ],
    causes: [
      "Accidentes automovilísticos o de motocicleta de alta energía",
      "Caídas desde alturas o tropezones en adultos mayores con osteoporosis",
      "Práctica de deportes de contacto o deportes extremos",
      "Impactos directos por maquinaria o herramientas pesadas"
    ],
    treatments: [
      "Osteosíntesis de precisión con placas de compresión y tornillos de titanio",
      "Enclavado intramedular bloqueado de mínima invasión para fémur y tibia",
      "Reducción cerrada y fijación externa rígida en traumatismos complejos",
      "Rehabilitación física post-consolidación ósea para recuperar la fuerza"
    ],
    riskFactors: [
      "Osteoporosis y baja densidad mineral ósea en adultos mayores",
      "Manejo de motocicletas o vehículos a alta velocidad",
      "Deportes de contacto sin equipo de protección adecuado",
      "Riesgo de caídas por alteraciones del equilibrio o mala iluminación"
    ],
    prevention: [
      "Uso estricto de cinturón de seguridad y casco homologado al conducir",
      "Evaluación y tratamiento oportuno de la densidad ósea (osteoporosis)",
      "Adaptación del hogar para prevenir caídas en adultos mayores",
      "Uso de protecciones óseas en actividades deportivas de riesgo"
    ]
  },
  {
    id: "lesiones-deportivas",
    name: "Lesiones Deportivas de Alto Rendimiento",
    slug: "lesiones-deportivas",
    shortDescription: "Traumatismos articular y muscular en atletas profesionales y recreativos que requieren retorno seguro a la cancha.",
    description: "Las lesiones deportivas abarcan roturas tendinosas, esguinces de alto grado, desgarros musculares y lesiones de cartílago. Requieren un abordaje especializado enfocado no solo en sanar la estructura, sino en permitir al deportista volver a su máximo rendimiento.",
    symptoms: [
      "Dolor súbito que obliga a suspender de inmediato el partido o entrenamiento",
      "Inflamación y derrame articular localizado en pocas horas",
      "Pérdida de la fuerza explosiva o de la capacidad de salto",
      "Inestabilidad articular durante movimientos de aceleración o giro",
      "Rigidez articular y dolor recurrente tras cada sesión deportiva"
    ],
    causes: [
      "Sobrentrenamiento sin periodos adecuados de descanso muscular",
      "Mala técnica en la ejecución de gestos deportivos complejos",
      "Superficies de juego defectuosas o calzado inadecuado",
      "Falta de acondicionamiento físico previo al esfuerzo intenso"
    ],
    treatments: [
      "Cirugía artroscópica de reconstrucción anatómica de articulaciones",
      "Procedimientos de conservación de cartílago y microfracturas",
      "Rehabilitación física de readaptación deportiva y gesto técnico",
      "Retorno gradual guiado por métricas de fuerza y estabilidad"
    ],
    riskFactors: [
      "Aumento drástico en la carga de entrenamiento sin periodización",
      "Desbalances musculares no corregidos entre agustas y antagonistas",
      "Nutrición e hidratación deficientes durante la competencia",
      "Historial de lesiones previas no recuperadas por completo"
    ],
    prevention: [
      "Periodización del entrenamiento con fases de descanso activo",
      "Evaluación biomecánica de la pisada y del gesto deportivo",
      "Hidratación y estiramientos post-ejercicio rigurosos",
      "Supervisión médica especialista ante las primeras molestias articulares"
    ]
  },
  {
    id: "pinzamiento-femoroacetabular-y-hernia-discal",
    name: "Pinzamiento Femoroacetabular y Hernia Discal Lumbar",
    slug: "pinzamiento-femoroacetabular-y-hernia-discal",
    shortDescription: "Roce anómalo en la cadera o hernia en los discos de la columna que producen dolor en ingle o ciática irradiada.",
    description: "El pinzamiento de cadera (impingement femoroacetabular) y las hernias de disco lumbar ocasionan dolor en la ingle o compresión de raíces nerviosas con irradiación por la pierna (ciática). La tecnología de mínimainvasión permite resolver estas patologías con mínima agresión tisular.",
    symptoms: [
      "Dolor profundo en la ingle al estar sentado mucho tiempo o rotar la cadera",
      "Dolor punzante que baja por el glúteo y la pierna hacia el pie (ciática)",
      "Pérdida de fuerza en el pie o dificultad para ponerse de puntillas",
      "Sensación de chasquido o 'enganche' en la articulación de la cadera",
      "Adormecimiento y hormigueo en el muslo o la pierna"
    ],
    causes: [
      "Alteración morfológica en el cuello del fémur o en la cavidad acetabular",
      "Degeneración y desgarro del anillo fibroso del disco intervertebral lumbar",
      "Levantamiento pesado de objetos sin doblar las rodillas",
      "Deportes de alta flexibilidad o choque que fuerzan los rangos extremos de cadera"
    ],
    treatments: [
      "Cirugía Endoscópica Biportal Lumbar (UBE) para descompresión de hernia discal",
      "Artroscopia de cadera con osteoplastia para corrección del pinzamiento",
      "Terapia física de estabilización del core muscular lumbar y pélvico",
      "Infiltraciones analgésicas y desinflamatorias guiadas de columna"
    ],
    riskFactors: [
      "Estilo de vida sedentario con malas posturas al estar sentado",
      "Trabajos con levantamiento constante de cargas pesadas",
      "Anatomía ósea con giba en la cabeza femoral",
      "Sobrepeso que incrementa la presión compresiva discal"
    ],
    prevention: [
      "Mantener una musculatura abdominal y lumbar fuerte (Core)",
      "Adoptar higiene postural al agacharse a levantar peso",
      "Evitar posiciones de flexión extrema de cadera sostenidas",
      "Realizar pausas activas para estirar durante la jornada de trabajo"
    ]
  }
];
