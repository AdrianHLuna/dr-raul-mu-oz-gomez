export interface FAQ {
  question: string;
  answer: string;
  category: "General" | "Cirugía" | "Seguros & Pagos" | "Citas";
}

export const faqs: FAQ[] = [
  {
    question: "¿En qué consiste la artroscopia de rodilla y hombro?",
    answer: "La artroscopia es un procedimiento quirúrgico de mínima invasión donde se introduce una diminuta cámara óptica (artroscopio) e instrumentos milimétricos por incisiones de 4 a 5 mm. Permite reparar desgarros de menisco, reconstruir el ligamento cruzado anterior (LCA) y reinsertar los tendones del manguito rotador sin necesidad de abrir la articulación.",
    category: "Cirugía"
  },
  {
    question: "¿Dónde se encuentra ubicado el consultorio del Dr. Raúl Hernán Muñoz Gómez?",
    answer: "El consultorio está ubicado en Calle 19 Poniente Norte #305, entre Boulevard Belisario Domínguez y Avenida Cedros, Colonia Arboledas, C.P. 29030 en Tuxtla Gutiérrez, Chiapas.",
    category: "Citas"
  },
  {
    question: "¿Cuáles son los horarios de atención para consulta presencial?",
    answer: "Los horarios son: Lunes y Miércoles de 09:00 a 13:30 hrs, y Martes, Jueves y Viernes de 16:00 a 19:30 hrs.",
    category: "Citas"
  },
  {
    question: "¿Acepta seguros de gastos médicos mayores?",
    answer: "Sí, se atiende a pacientes de todas las aseguradoras (AXA, GNP, MetLife, Monterrey New York Life, Mapfre, Banorte, Bupa, Allianz, entre otras), ajustándose a los tabuladores institucionales correspondientes.",
    category: "Seguros & Pagos"
  },
  {
    question: "¿Cuentan con facilidades de pago en Meses Sin Intereses?",
    answer: "Sí, contamos con opciones de pago de hasta 12 Meses Sin Intereses (MSI) con tarjetas participantes como BBVA, además de recibir pago en efectivo, transferencia bancaria, tarjeta de débito y crédito.",
    category: "Seguros & Pagos"
  },
  {
    question: "¿Qué es la Cirugía Endoscópica Biportal Lumbar (UBE)?",
    answer: "Es la técnica más avanzada de ultra mínima invasión para la columna vertebral. A través de dos microincisiones de menos de 1 cm, se remueven hernias discales lumbares liberando los nervios aprisionados con mínima agresión muscular y pronta alta hospitalaria.",
    category: "Cirugía"
  },
  {
    question: "¿Cuánto dura la recuperación tras una prótesis total de rodilla o cadera?",
    answer: "El paciente inicia la bipedestación y caminata asistida con andadera desde las primeras 24 a 48 horas tras la cirugía. La recuperación de la autonomía para la marcha se logra entre las 4 y 6 semanas con el plan de fisioterapia.",
    category: "Cirugía"
  },
  {
    question: "¿En caso de una urgencia traumatológica por fractura o accidente, a qué número puedo llamar?",
    answer: "Para urgencias traumatológicas directas de 24 horas, puede comunicarse inmediatamente al teléfono de urgencias: 9612368480 o al WhatsApp 9613006055.",
    category: "Citas"
  }
];
