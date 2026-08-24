import { Service } from "@/types/schema";

export const services: Service[] = [
  {
    id: "artroscopia-de-rodilla",
    name: "Artroscopia de Rodilla (Reconstrucción de Ligamentos y Meniscos)",
    slug: "artroscopia-de-rodilla",
    image: "/procedimientos/artroscopia-rodilla.jpg",
    shortDescription: "Técnica quirúrgica de mínima invasión para reparar desgarros de menisco y reconstruir el ligamento cruzado anterior (LCA) a través de microincisiones.",
    description: "La artroscopia de rodilla es la intervención quirúrgica de elección para reparar lesiones articulares internas sin necesidad de abrir la articulación. Mediante una diminuta cámara de alta resolución e instrumental especializado de 4 mm, el Dr. Raúl Muñoz realiza reconstrucciones ligamentarias precisas y suturas meniscales con pronta recuperación.",
    benefits: [
      "Microincisiones milimétricas que minimizan la cicatriz y el dolor posquirúrgico",
      "Preservación máxima de los meniscos sanos mediante suturas de anclaje de alta resistencia",
      "Reconstrucción anatómica del ligamento cruzado anterior (LCA) con injerto autólogo",
      "Menor tiempo de estancia hospitalaria (procedimiento ambulatorio o de corta estancia)",
      "Retorno acelerado a las actividades deportivas e individuales con fisioterapia asistida"
    ],
    indications: [
      "Ruptura completa o parcial del ligamento cruzado anterior (LCA) o posterior (LCP)",
      "Desgarros de menisco medial o lateral con bloqueo mecánico",
      "Lesiones osteocondrales del cartílago articular y cuerpos libres intraarticulares",
      "Plica sinovial sintomática o desalineamiento patelofemoral"
    ],
    procedureDescription: "Se realizan dos diminutas punciones (portales artroscópicos) en la cara anterior de la rodilla. Se introduce una cámara que amplifica la vista del interior articular a monitores 4K. Con instrumental especial, se retiran o suturan los meniscos lesionados y se fija el nuevo injerto ligamentario con tornillos de interferencia bioabsorbibles.",
    recoveryTime: "De 2 a 4 semanas para marcha con apoyo progresivo y de 4 a 6 meses para retorno deportivo de alto impacto.",
    isSurgical: true
  },
  {
    id: "artroscopia-de-hombro",
    name: "Artroscopia de Hombro (Reparación de Manguito Rotador y Labrum)",
    slug: "artroscopia-de-hombro",
    image: "/procedimientos/artroscopia-hombro.jpg",
    shortDescription: "Cirugía artroscópica mínimamente invasiva para reacoplar los tendones rotos del manguito rotador y reparar luxaciones recurrentes de hombro.",
    description: "La artroscopia de hombro permite reparar los tendones supraespinoso e infraespinoso desinsertados del hueso húmero y resuturar el labrum glenoideo en luxaciones de repetidas. Evita el corte masivo de músculo, acelerando la recuperación de la movilidad del hombro.",
    benefits: [
      "Reparación anatómica de tendones desinsertados con anclajes suturados a hueso",
      "Descompresión subacromial que elimina el roce del tendón con el acromion",
      "Estabilización completa del labrum en casos de inestabilidad y luxación recurrente",
      "Reducción notable del dolor nocturno de hombro",
      "Preservación de la masa muscular del deltoides al evitar la cirugía abierta tradicional"
    ],
    indications: [
      "Ruptura parcial o completa de los tendones del manguito rotador (supraespinoso)",
      "Inestabilidad recurrente de hombro con lesión de Bankart o SLAP",
      "Tendinitis calcificante persistente del hombro que no cede a fisioterapia",
      "Síndrome de pinzamiento subacromial con espolón óseo"
    ],
    procedureDescription: "Mediante 3 portales artroscópicos milimétricos en el hombro, se visualizan los tendones retraídos. Se limpia la huella ósea del húmero y se colocan anclas cargadas con suturas de ultra alta resistencia molecular que fijan nuevamente el tendón al hueso.",
    recoveryTime: "Inmovilización con cabestrillo durante 4 a 6 semanas, seguida de fisioterapia graduada para recuperar la elevación completa a los 3 meses.",
    isSurgical: true
  },
  {
    id: "protesis-de-rodilla",
    name: "Prótesis y Reemplazo Total de Rodilla (Artroplastia de Rodilla)",
    slug: "protesis-de-rodilla",
    image: "/procedimientos/protesis-rodilla.jpg",
    shortDescription: "Reemplazo articular completo con implantes de aleación médica de alta durabilidad para eliminar el dolor por desgaste articular (gonartrosis avanzada).",
    description: "El reemplazo total de rodilla sustituye las superficies óseas destruidas por el desgaste severo con un sistema protésico anatómico de cobalto-cromo y polietileno de ultra alto peso molecular. Devuelve la capacidad de caminar sin dolor a pacientes con artrosis avanzada.",
    benefits: [
      "Eliminación sustancial del dolor articular crónico e incapacitante",
      "Corrección de deformidades óseas (piernas arqueadas en O o en X)",
      "Recuperación de la independencia para caminar, subir escaleras y realizar actividades diarias",
      "Durabilidad prolongada del implante protésico (más de 15 a 20 años)",
      "Rehabilitación con bipedestación y apoyo asistido desde las primeras 24 horas"
    ],
    indications: [
      "Gonartrosis grado III o IV (desgaste articular severo con fricción hueso a hueso)",
      "Dolor incapacitante de rodilla que no mejora con medicamentos ni viscosuplementación",
      "Deformidad articular progresiva con dificultad para la marcha independizada",
      "Rigidez severa e imposibilidad para doblar la rodilla más allá de 90 grados"
    ],
    procedureDescription: "Se realiza un abordaje anterior en la rodilla. Se retiran los extremos cartilaginosos desgastados del fémur y la tibia mediante guías de alineamiento milimétrico. Se fijan los componentes metálicos protésicos con cemento óseo biocompatible y se inserta un cojinete de polietileno de baja fricción.",
    recoveryTime: "Caminata con andadera desde el día 1 posquirúrgico; recuperación funcional completa de 6 a 8 semanas.",
    isSurgical: true
  },
  {
    id: "protesis-de-cadera",
    name: "Prótesis y Reemplazo Total de Cadera (Artroplastia de Cadera)",
    slug: "protesis-de-cadera",
    image: "/procedimientos/protesis-cadera.jpg",
    shortDescription: "Sustitución de la articulación de la cadera con prótesis de titanio y cerámica para restaurar la movilidad sin dolor en desgaste o fracturas de fémur.",
    description: "La artroplastia total de cadera es considerada uno de los procedimientos quirúrgicos más exitosos de la medicina moderna. Reemplaza la cabeza femoral y el acetábulo desgastados con implantes biocompatibles de titanio, eliminando el dolor en ingle y muslo al caminar.",
    benefits: [
      "Alivio inmediato del dolor profundo de cadera e ingle",
      "Restablecimiento de la longitud de la pierna y corrección de cojera",
      "Movilidad fluida de rotación y flexión de cadera",
      "Implantes de titanio no cementados o cementados con par de fricción cerámico de mínima rotura",
      "Excelente tasa de éxito funcional a largo plazo"
    ],
    indications: [
      "Coxartrosis avanzada (desgaste severo de la articulación de la cadera)",
      "Necrosis avascular de la cabeza femoral por falta de riego sanguíneo",
      "Fracturas desplazadas del cuello del fémur en adultos mayores",
      "Secuelas de displasia del desarrollo de la cadera en la edad adulta"
    ],
    procedureDescription: "A través de un abordaje de conservación muscular, se reseca la cabeza femoral dañada y se prepara el acetábulo pélvico. Se impone una copa acetabular de titanio poroso y un vástago femoral donde se acopla una cabeza cerámica de alta resistencia que se articula suavemente.",
    recoveryTime: "Apoyo con andadera a las 24 horas del procedimiento; marcha autónoma sin apoyo entre las 4 y 6 semanas.",
    isSurgical: true
  },
  {
    id: "cirugia-endoscopica-biportal-lumbar",
    name: "Cirugía Endoscópica Biportal Lumbar (UBE - Mínima Invasión de Columna)",
    slug: "cirugia-endoscopica-biportal-lumbar",
    image: "/procedimientos/cirugia-lumbar.jpg",
    shortDescription: "Procedimiento endoscópico de ultra mínima invasión para descomprimir hernias discales y estenosis del canal lumbar sin cortar masa muscular.",
    description: "La Cirugía Endoscópica Biportal Lumbar (Unilateral Biportal Endoscopy - UBE) representa el estándar de oro en el abordaje mínimamente invasivo de la columna vertebral. Permite descompresionar las raíces nerviosas inflamadas por hernias de disco mediante dos incisiones de 5 mm e irrigación de suero continuo.",
    benefits: [
      "Dos incisiones minúsculas de menos de 1 centímetro en la espalda",
      "Preservación intacta de la musculatura paravertebral y los ligamentos del arco posterior",
      "Visión directa endoscópica HD magnificada de la raíz nerviosa comprimida",
      "Dolor posquirúrgico mínimo con requerimiento reducido de analgésicos",
      "Alta hospitalaria en 24 horas y rápida reintegración a la vida laboral"
    ],
    indications: [
      "Hernias discales lumbares sintomáticas con ciática persistente",
      "Estenosis del canal lumbar o atrapamiento del agujero de conjunción",
      "Fracaso del tratamiento conservador o bloqueos analgésicos lumbares",
      "Pacientes que buscan evitar cirugías abiertas tradicionales de columna"
    ],
    procedureDescription: "Se realizan dos pequeñas punciones lumbares en la región afectada. Por un portal se introduce la cámara óptica con flujo salino y por el segundo portal el instrumento de microfresa y discectomía. Se libera la raíz nerviosa comprimida de manera milimétrica sin alterar la estabilidad ósea vertebral.",
    recoveryTime: "Deambulación el mismo día de la cirugía; reincorporación a labores de oficina en 7 a 10 días.",
    isSurgical: true
  },
  {
    id: "osteosintesis-y-fijacion-de-fracturas",
    name: "Osteosíntesis y Fijación Quirúrgica de Fracturas Traumatológicas",
    slug: "osteosintesis-y-fijacion-de-fracturas",
    image: "/procedimientos/osteosintesis-reduccion-fractura.jpg",
    shortDescription: "Reducción anatómica y fijación de huesos fracturados mediante placas, tornillos de titanio y clavos intramedulares de alta precisión.",
    description: "La osteosíntesis es la reconstrucción quirúrgica de huesos fracturados (fémur, tibia, húmero, radio, tobillo, clavícula) mediante material de osteosíntesis de grado médico. Garantiza una consolidación ósea sólida y en eje correcto, evitando acortamientos o deformidades.",
    benefits: [
      "Alineación y reducción anatómica exacta de los fragmentos óseos fracturados",
      "Fijación rígida que permite la movilización temprana de las articulaciones adyacentes",
      "Uso de enclavado intramedular de mínima invasión que respeta el hematoma fracturario",
      "Prevención de la consolidación viciosa (huesos pegados chuecos) y seudoartrosis",
      "Pronta recuperación de la función motora"
    ],
    indications: [
      "Fracturas desplazadas, inestables o expuestas de miembros superiores e inferiores",
      "Fracturas intraarticulares que requieren restablecer la congruencia del cartílago",
      "Fracturas por osteoporosis en adultos mayores con riesgo de postración",
      "Seudoartrosis o fallos en la consolidación de fracturas tratadas previamente"
    ],
    procedureDescription: "Bajo anestesia regional o general, se realiza la reducción del hueso fracturado mediante control de rayos X transoperatorio (arco en C). Se colocan placas anatómicas bloqueadas de titanio o se introduce un clavo intramedular acerado dentro del canal del hueso fijado con pernos de bloqueo.",
    recoveryTime: "Varía según el hueso afectado, típicamente de 6 a 12 semanas para consolidación radiográfica completa.",
    isSurgical: true
  },
  {
    id: "liberacion-quirurgica-del-tunel-del-carpo",
    name: "Liberación Quirúrgica del Síndrome del Túnel del Carpo",
    slug: "liberacion-quirurgica-del-tunel-del-carpo",
    image: "/procedimientos/liberacion-tunel-carpo.jpg",
    shortDescription: "Descompresión quirúrgica del nervio mediano en la muñeca para eliminar el adormecimiento, calambres e incapacidad motora de la mano.",
    description: "La liberación del túnel carpiano es una cirugía ambulatoria altamente efectiva donde se secciona el ligamento transverso del carpo. Esto libera la presión compresiva sobre el nervio mediano, eliminando los calambres nocturnos y restaurando la sensibilidad de la mano.",
    benefits: [
      "Desaparición inmediata del dolor y hormigueo nocturno en los dedos",
      "Procedimiento ambulatorio con anestesia local o sedación suave",
      "Invisibilidad casi total de la cicatriz en el pliegue palmar de la muñeca",
      "Recuperación gradual de la fuerza de prensión de la mano",
      "Excelente perfil de seguridad sin requerir hospitalización nocturna"
    ],
    indications: [
      "Síndrome del túnel carpiano moderado o severo confirmado por electromiografía",
      "Pérdida progresiva de la sensibilidad en dedos pulgar, índice y medio",
      "Falta de respuesta a férulas nocturnas e infiltraciones previas",
      "Atrofia de los músculos de la mano"
    ],
    procedureDescription: "A través de una pequeña incisión de 1.5 cm en el pliegue de la palma de la mano, se diseca y corta con precisión el ligamento anular del carpo. Se verifica la liberación completa del nervio mediano y se sutura la piel con puntos estéticos.",
    recoveryTime: "Uso funcional suave de la mano a las 48 horas; suturas retiradas a los 10 días.",
    isSurgical: true
  },
  {
    id: "artroscopia-de-tobillo",
    name: "Artroscopia de Tobillo y Reconstrucción Ligamentaria",
    slug: "artroscopia-de-tobillo",
    image: "/procedimientos/artroscopia-tobillo.jpg",
    shortDescription: "Reparación artroscópica de cartílago, limpieza de cuerpos libres y reconstrucción de ligamentos laterales del tobillo.",
    description: "La artroscopia de tobillo permite tratar afecciones dentro de la articulación tibioperoneoastragalina. Es ideal para reparar desgarros ligamentarios por esguinces crónicos repetidos y corregir lesiones del cartílago del astrágalo con mínima agresión.",
    benefits: [
      "Tratamiento directo de lesiones osteocondrales sin necesidad de osteotomía de maleolo",
      "Estabilización efectiva del tobillo en pacientes con esguinces de repetición",
      "Resección de osteofitos (picos de loro) que causan pinzamiento anterior del tobillo",
      "Disminución drástica de la inflamación crónica del pie",
      "Rehabilitación más rápida en comparación con técnicas abiertas"
    ],
    indications: [
      "Inestabilidad lateral crónica de tobillo tras esguinces recurrentes",
      "Lesión osteocondral del astrágalo o cuerpos libres intraarticulares",
      "Pinzamiento sinovial u óseo anterior del tobillo en futbolistas o atletas",
      "Artritis postraumática inicial con dolor a la marcha"
    ],
    procedureDescription: "Se realizan 2 incisiones de 5 mm en la cara anterior del tobillo. Se inserta el artroscopio para evaluar la articulación bajo irrigación salina continua. Se efectúa la remoción del pinzamiento o la reparación del ligamento peroneoastragalino anterior con anclajes.",
    recoveryTime: "Inmovilización con bota ortopédica de 2 a 3 semanas; inicio de apoyo completo con fisioterapia a la cuarta semana.",
    isSurgical: true
  },
  {
    id: "infiltracion-y-viscosuplementacion-articular",
    name: "Infiltración y Viscosuplementación Articular Guiada",
    slug: "infiltracion-y-viscosuplementacion-articular",
    image: "/procedimientos/viscosuplementacion-infiltracion-articular.jpg",
    shortDescription: "Aplicación intraarticular de ácido hialurónico de alta densidad para lubricar las articulaciones y proteger el cartílago en fases iniciales.",
    description: "La viscosuplementación es un procedimiento no quirúrgico de consultorio que consiste en inyectar ácido hialurónico purificado de alto peso molecular dentro de la articulación de la rodilla, cadera u hombro. Actúa como un lubricante y amortiguador biomecánico natural que reduce la fricción y el dolor.",
    benefits: [
      "Mejora inmediata de la lubricación y amortiguación del cartílago articular",
      "Reducción significativa del dolor y la rigidez articular durante meses",
      "Procedimiento ambulatorio de consultorio rápido e indoloro",
      "Retarda la necesidad de una cirugía de reemplazo protésico en etapas leves y moderadas",
      "Excelente perfil de tolerancia sin efectos sistémicos"
    ],
    indications: [
      "Osteoartrosis leve a moderada de rodilla (gonartrosis) o cadera (coxartrosis)",
      "Condromalacia patelar en jóvenes y deportistas",
      "Pacientes con dolor articular que no pueden someterse a cirugía por comorbilidades",
      "Mantenimiento articular preventivo en atletas con desgaste cartílaginoso"
    ],
    procedureDescription: "Bajo estricta asepsia y antisepsia en el consultorio médico, se realiza la punción intraarticular guiada. Se extrae el líquido inflamatorio excedente si existiera y se administra la dosis de ácido hialurónico purificado de alta viscosidad directamente en la cavidad articular.",
    recoveryTime: "Procedimiento de 15 minutos; el paciente retoma sus actividades normales de marcha de inmediato.",
    isSurgical: false
  },
  {
    id: "artroscopia-y-lesiones-deportivas",
    name: "Artroscopia Diagnóstica y Tratamiento de Lesiones Deportivas",
    slug: "artroscopia-y-lesiones-deportivas",
    image: "/procedimientos/reparacion-manguito.jpg",
    shortDescription: "Evaluación y tratamiento integral artroscópico para atletas con lesiones ligamentarias, meniscales o de cartílago de alto rendimiento.",
    description: "El abordaje de las lesiones deportivas combina la precisión de la cirugía artroscópica de mínima invasión con un protocolo de medicina del deporte enfocado en la pronta recuperación de la función motora, estabilidad articular y retorno seguro a la competencia.",
    benefits: [
      "Diagnóstico directo y reparación simultánea en un solo tiempo quirúrgico",
      "Técnicas de conservación de tejidos articulares y microfracturas de cartílago",
      "Protocolo personalizado de rehabilitación biomecánica adaptado al deporte específico",
      "Minimización del tiempo de inactividad competitiva",
      "Acompañamiento especializado en la fase de readaptación física"
    ],
    indications: [
      "Lesiones combinadas de ligamentos y meniscos en atletas",
      "Dolor articular crónico no aclarado por estudios de imagen convencional",
      "Desprendimientos de cartílago articular en deportistas de alto impacto",
      "Inestabilidades articulares dolorosas que impiden el rendimiento"
    ],
    procedureDescription: "Exploración minuciosa de todos los compartimentos articulares mediante artroscopia HD. Se ejecutan maniobras de plastia, sutura o remodelación articular para asegurar un rango de movimiento estable y sin rozamiento mecánico.",
    recoveryTime: "Rehabilitación deportiva coordinada desde la primera semana posquirúrgica.",
    isSurgical: true
  }
];
