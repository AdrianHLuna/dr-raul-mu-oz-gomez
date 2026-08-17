import { Symptom } from "@/types/schema";

export const symptoms: Symptom[] = [
  {
    id: "dolor-articular",
    name: "Dolor Articular Intenso en Rodilla, Hombro o Cadera",
    slug: "dolor-articular",
    shortDescription: "Molestia punzante o sorda en las articulaciones principales que aumenta al caminar, cargar peso o realizar actividad física.",
    description: "El dolor articular persistente en rodillas, hombros o caderas indica sufrimiento del cartílago, inflamación de los tendones o desgarro interno de estructuras como meniscos y labrum. Requiere valoración ortopédica para prevenir el desgaste articular irreversible.",
    whyConsult: "Consultar a tiempo permite identificar lesiones ligamentarias o cartilaginosas tratables mediante artroscopia o viscosuplementación antes de requerir prótesis completas.",
    relatedDiseases: [
      "lesiones-de-los-meniscos-de-la-rodilla",
      "rotura-de-tendones-del-manguito-rotador",
      "desgaste-de-articulaciones-rodilla-y-cadera"
    ]
  },
  {
    id: "dolor-del-nervio-ciatico",
    name: "Dolor del Nervio Ciático (Ciatalgia e Irradiación Lumbar)",
    slug: "dolor-del-nervio-ciatico",
    shortDescription: "Dolor punzante o choque eléctrico que nace en la espalda baja y corre por el glúteo hasta la pierna o el pie.",
    description: "La ciatalgia es producida por la compresión de las raíces nerviosas lumbares a causa de una hernia de disco o estrechamiento del canal vertebral. El dolor puede ser muy incapacitante y acompañarse de hormigueo o debilidad en el pie.",
    whyConsult: "La descompresión endoscópica biportal (UBE) o tratamiento conservador evita el daño neurológico permanente y devuelve la marcha normal sin dolor.",
    relatedDiseases: [
      "pinzamiento-femoroacetabular-y-hernia-discal"
    ]
  },
  {
    id: "inestabilidad-o-falseo-articular",
    name: "Inestabilidad y Sensación de 'Falseo' Articular",
    slug: "inestabilidad-o-falseo-articular",
    shortDescription: "Sensación de que la rodilla, el hombro o el tobillo 'se van en falso' o se descolocan al dar un paso o rotar el cuerpo.",
    description: "El falseo articular es una señal clásica de rotura o laxitud ligamentaria (como el ligamento cruzado anterior de la rodilla o el labrum de hombro). El paciente siente que la articulación no soporta el peso y se dobla de forma incontrolable.",
    whyConsult: "La reconstrucción artroscópica de ligamentos estabiliza la articulación y evita lesiones secundarias en los meniscos o el cartílago.",
    relatedDiseases: [
      "lesiones-de-ligamentos-de-la-rodilla",
      "inestabilidad-de-las-articulaciones",
      "lesiones-de-la-articulacion-del-tobillo"
    ]
  },
  {
    id: "chasquido-y-crepitacion-articular",
    name: "Chasquido, Tronido y Crepitación Articular",
    slug: "chasquido-y-crepitacion-articular",
    shortDescription: "Ruidos de tronido, rozamiento o chasquidos audibles al doblar la rodilla, rotar el hombro o mover el tobillo.",
    description: "Los chasquidos acompañados de dolor suelen indicar un fragmento de menisco atrapado, cuerpos libres flotantes de cartílago o la fricción directa entre hueso y hueso por desgaste avanzado.",
    whyConsult: "Evaluar mediante estudios de imagen y artroscopia permite retirar los fragmentos irritantes y reparar la superficie articular dañada.",
    relatedDiseases: [
      "lesiones-de-los-meniscos-de-la-rodilla",
      "dolor-de-rodilla",
      "desgaste-de-articulaciones-rodilla-y-cadera"
    ]
  },
  {
    id: "rigidez-y-limitacion-articular",
    name: "Rigidez y Pérdida de Movilidad Articular",
    slug: "rigidez-y-limitacion-articular",
    shortDescription: "Dificultad o imposibilidad para estirar completamente la pierna, doblar la rodilla o peinarse elevando el brazo.",
    description: "La rigidez matutina o la pérdida progresiva de los arcos de movimiento se deben al engrosamiento de la cápsula articular (capsulitis adhesiva o hombro congelado) o a la formación de osteofitos (picos de loro) en la artrosis.",
    whyConsult: "La intervención médica temprana mediante fisioterapia avanzada o limpieza artroscópica restaura la movilidad sin secuelas de anquilosis.",
    relatedDiseases: [
      "rotura-de-tendones-del-manguito-rotador",
      "dolor-de-hombro",
      "desgaste-de-articulaciones-rodilla-y-cadera"
    ]
  },
  {
    id: "adormecimiento-y-hormigueo-en-manos",
    name: "Adormecimiento y Hormigueo en las Manos (Parestesias)",
    slug: "adormecimiento-y-hormigueo-en-manos",
    shortDescription: "Sensación de agujetas, adormecimiento nocturno y falta de fuerza en los dedos pulgar, índice y medio.",
    description: "Las parestecias nocturnas en las manos que obligan al paciente a 'sacudir' la mano para sentir alivio son el síntoma patognomónico de la compresión del nervio mediano a nivel de la muñeca (túnel carpiano).",
    whyConsult: "La liberación quirúrgica ambulatoria del túnel carpiano cura de forma definitiva los calambres y evita la pérdida irreversible de fuerza motora.",
    relatedDiseases: [
      "sindrome-del-tunel-del-carpo"
    ]
  },
  {
    id: "inflamacion-y-derrame-articular",
    name: "Inflamación y Derrame de Líquido Articular",
    slug: "inflamacion-y-derrame-articular",
    shortDescription: "Hinchazón notoria de la rodilla u tobillo que luche caliente, a tensión y con acumulación excesiva de líquido sinovial.",
    description: "El derrame articular (acumulación de líquido o sangre en la articulación) es la respuesta biológica ante un traumatismo, desgarro meniscal o brote inflamatorio artrósico.",
    whyConsult: "La punción diagnóstica y el tratamiento de la causa subyacente alivian de inmediato la presión dolorosa en la articulación.",
    relatedDiseases: [
      "lesiones-de-ligamentos-de-la-rodilla",
      "lesiones-de-los-meniscos-de-la-rodilla",
      "lesiones-deportivas"
    ]
  },
  {
    id: "dolor-nocturno-de-hombro",
    name: "Dolor Nocturno de Hombro que Interrumpe el Sueño",
    slug: "dolor-nocturno-de-hombro",
    shortDescription: "Molestia sorda e intensa en el hombro que empeora al acostarse sobre él imposibilitando el descanso continuo.",
    description: "El dolor de hombro que no deja dormir es el signo de alarma característico de las lesiones del tendón supraespinoso del manguito rotador y de la bursitis subacromial.",
    whyConsult: "Tratar la rotura mediante reparación artroscópica devuelve las noches de descanso continuo y previene el desgarro masivo del tendón.",
    relatedDiseases: [
      "rotura-de-tendones-del-manguito-rotador",
      "dolor-de-hombro"
    ]
  },
  {
    id: "incapacidad-para-caminar-o-apoyar",
    name: "Incapacidad para Apoyar el Pie o Caminar",
    slug: "incapacidad-para-caminar-o-apoyar",
    shortDescription: "Imposibilidad repentina para sostener el peso del cuerpo sobre la pierna tras una caída, torcedura o traumatismo.",
    description: "No poder apoyar el pie de inmediato tras un impacto o caída sugiere fracturas de tibia, fémur o tobillo, o roturas completas del aparato extensor de la rodilla.",
    whyConsult: "Requiere atención traumatológica de urgencia y valoración con radiografías para alinear y fijar los huesos fracturados.",
    relatedDiseases: [
      "fracturas-oseas-y-traumatismos",
      "lesiones-de-la-articulacion-del-tobillo"
    ]
  },
  {
    id: "deformidad-visible-por-traumatismo",
    name: "Deformidad Visible o Angulación en Brazo o Pierna",
    slug: "deformidad-visible-por-traumatismo",
    shortDescription: "Desviación anatómica, angulación anómala o abultamiento visible tras un accidente deportivo o vehicular.",
    description: "La deformidad ósea es la evidencia clínica directa de una fractura desplazada o una luxación articular completa con pérdida del eje anatómico normal.",
    whyConsult: "La alineación y fijación mediante osteosíntesis de precisión evita secuelas de cojera, acortamiento o consolidación defectuosa.",
    relatedDiseases: [
      "fracturas-oseas-y-traumatismos",
      "inestabilidad-de-las-articulaciones"
    ]
  }
];
