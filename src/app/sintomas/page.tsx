import React from "react";
import Link from "next/link";
import { symptoms } from "@/data/symptoms";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaBone, FaArrowRight, FaExclamationTriangle, FaHeartbeat, FaNotesMedical } from "react-icons/fa";

export const metadata = {
  title: `Síntomas Ortopédicos y Articulares Frecuentes | ${doctor.title} ${doctor.name}`,
  description: "Guía de síntomas ortopédicos: dolor articular en rodilla o hombro, ciática, chasquidos, inestabilidad y adormecimiento en manos. Consulta quirúrgica en Tuxtla Gutiérrez.",
};

export default function SymptomsListPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Síntomas Ortopédicos y Razones para Consultar",
    description: metadata.description,
    author: {
      "@type": "Physician",
      name: `${doctor.title} ${doctor.name}`,
    },
  };

  return (
    <div className="min-h-screen bg-[#FDFCF7] py-10 px-6 relative overflow-hidden">
      <StructuredData data={schema} />

      {/* Subtle Background Watermark Icons */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-5">
        <FaNotesMedical className="absolute top-24 right-12 text-9xl text-[#1A1C17]" />
        <FaBone className="absolute bottom-20 left-10 text-9xl text-[#E7B93F]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} />

        {/* Subpage Header Banner (Natural Spacing) */}
        <section className="mb-10">
          <div className="bg-[#1A1C17] text-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden border border-[#2B2F28]">
            <FaNotesMedical className="absolute bottom-[-20px] right-[-20px] text-white/5 text-[220px] pointer-events-none" />

            <div className="max-w-3xl relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-[#E7B93F] bg-white/10 px-3.5 py-1 rounded-full border border-white/15 inline-block mb-3">
                Orientación al Paciente
              </span>
              <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
                Síntomas y Señales de Alarma Ortopédica
              </h1>
              <p className="text-slate-200 text-base lg:text-lg max-w-3xl leading-relaxed font-medium mb-6">
                Identifica las molestias articulares, dolores mecánicos e inestabilidades que requieren la valoración por un cirujano traumatólogo y ortopedista.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-300">
                <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  • Dolor articular e inestabilidad
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  • Ciática y adormecimiento de manos
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Grid de 10 Síntomas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {symptoms.map((symptom) => (
            <div
              key={symptom.id}
              className="bg-white rounded-[2.5rem] p-8 border border-slate-200/80 shadow-xl flex flex-col justify-between group hover:border-[#1A1C17] transition-all relative overflow-hidden"
            >
              <FaHeartbeat className="absolute bottom-[-10px] right-[-10px] text-slate-100 text-[140px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 font-extrabold text-xs border border-amber-200 flex items-center gap-1.5">
                    <FaExclamationTriangle /> Señal de Atención
                  </span>
                  <FaNotesMedical className="text-[#E7B93F] text-xl" />
                </div>

                <h2 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-[#1A1C17] transition-colors leading-snug">
                  {symptom.name}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  {symptom.description}
                </p>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-8 text-xs text-slate-700">
                  <span className="font-extrabold text-[#1A1C17] block mb-1">¿Por qué consultar con el traumatólogo?</span>
                  {symptom.whyConsult}
                </div>
              </div>

              {/* CLEAN ELEGANT BUTTON */}
              <Link
                href={`/sintomas/${symptom.slug}`}
                className="w-full py-4 px-6 rounded-2xl bg-[#1A1C17] text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-between hover:bg-[#E7B93F] hover:text-[#1A1C17] transition-all shadow-md group-hover:shadow-xl relative z-10"
              >
                <span>Ver Orientación Médica</span>
                <FaArrowRight size={14} className="flex-shrink-0" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
