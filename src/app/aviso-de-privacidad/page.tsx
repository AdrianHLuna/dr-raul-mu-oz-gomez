import React from "react";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: `Aviso de Privacidad | ${doctor.title} ${doctor.name}`,
  description: "Política de privacidad y protección de datos personales de los pacientes.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-brand-cream py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 lg:p-12 rounded-[2rem] border border-slate-200/80 shadow-xl space-y-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Aviso de Privacidad" }]} />

        <h1 className="text-3xl font-black text-brand-panel font-heading">Aviso de Privacidad Integral</h1>

        <p className="text-slate-700 text-sm leading-relaxed font-medium">
          El <strong>{doctor.title} {doctor.name}</strong>, con domicilio en {doctor.address}, es responsable del tratamiento de sus datos personales y expedientes clínicos conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y la NOM-004-SSA3-2012 del Expediente Clínico.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">1. Finalidad del Tratamiento de Datos</h2>
        <p className="text-slate-600 text-xs leading-relaxed">
          Sus datos personales y datos personales sensibles (historial clínico, estudios de imagen, antecedentes quirúrgicos, diagnóstico de laboratorio y datos de facturación) serán utilizados exclusivamente para prestar servicios de diagnóstico y tratamiento de ortopedia, traumatología y artroscopia.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">2. Derechos ARCO</h2>
        <p className="text-slate-600 text-xs leading-relaxed">
          Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información (Rectificación), que la eliminemos de nuestras bases de datos (Cancelación) u oponerse al uso de los mismos (Oposición).
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">3. Contacto</h2>
        <p className="text-slate-600 text-xs leading-relaxed">
          Para el ejercicio de cualquiera de los derechos ARCO, puede comunicarse directamente al teléfono {doctor.phone} o enviar un correo electrónico a {doctor.email}.
        </p>
      </div>
    </div>
  );
}
