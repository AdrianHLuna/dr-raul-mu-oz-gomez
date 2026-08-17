export interface Testimonial {
  id: string;
  name: string;
  age: number;
  condition: string;
  treatment: string;
  comment: string;
  rating: number;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Roberto Aguilar S.",
    age: 38,
    condition: "Ruptura de Ligamento Cruzado Anterior en Rodilla",
    treatment: "Reconstrucción Artroscópica de LCA",
    comment: "Sufrí una lesión jugando fútbol y no podía apoyar la rodilla. El Dr. Raúl Muñoz me realizó la artroscopia de rodilla con una atención excelente. A los pocos meses volví a trotar y hacer ejercicio sin dolor ni falseo.",
    rating: 5,
    date: "Hace 2 meses"
  },
  {
    id: "test-2",
    name: "Carmen Mendoza V.",
    age: 62,
    condition: "Desgaste Avanzado de Rodilla (Gonartrosis)",
    treatment: "Prótesis Total de Rodilla",
    comment: "Tenía años con dolor intenso para caminar. El Dr. Raúl me colocó la prótesis de rodilla en el sanatorio y al día siguiente ya estaba dando mis primeros pasos. Le agradezco enormemente haberme devuelto la movilidad.",
    rating: 5,
    date: "Hace 3 meses"
  },
  {
    id: "test-3",
    name: "Ing. Fernando Morales T.",
    age: 45,
    condition: "Rotura del Manguito Rotador de Hombro",
    treatment: "Reparación Artroscópica de Hombro",
    comment: "No podía dormir del dolor de hombro y ya no podía levantar el brazo. La cirugía artroscópica que me hizo el doctor fue impecable, con cicatrices mínimas. Hoy muevo el brazo con total normalidad.",
    rating: 5,
    date: "Hace 1 mes"
  },
  {
    id: "test-4",
    name: "Sra. Martha Elena Solís",
    age: 51,
    condition: "Síndrome del Túnel del Carpo",
    treatment: "Liberación Quirúrgica Ambulatoria",
    comment: "Se me adormecían las manos todas las noches y se me caían las cosas. La cirugía del túnel carpiano duró poco tiempo y el alivio fue inmediato desde la primera noche. Excelente especialista traumatólogo en Tuxtla.",
    rating: 5,
    date: "Hace 4 meses"
  }
];
