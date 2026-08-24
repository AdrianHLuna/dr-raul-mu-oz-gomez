import React from "react";
import Link from "next/link";
import Image from "next/image";
import { symptoms } from "@/data/symptoms";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { StaggerContainer, StaggerItem } from "@/components/Animations";
import { getSymptomIcon } from "@/lib/medicalIcons";
import { FaBone, FaArrowRight, FaExclamationTriangle, FaNotesMedical } from "react-icons/fa";

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
    <div className="min-h-screen bg-brand-cream py-10 px-6 relative overflow-hidden">
      <StructuredData data={schema} />

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-5">
        <FaNotesMedical className="absolute top-24 right-12 text-9xl text-brand-panel" />
        <FaBone className="absolute bottom-20 left-10 text-9xl text-brand-gold" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} />

        <section className="mb-10">
          <div className="bg-brand-panel text-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden border border-brand-border">
            <FaNotesMedical className="absolute bottom-[-20px] right-[-20px] text-white/5 text-[220px] pointer-events-none" />

            <div className="max-w-3xl relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-brand-gold bg-white/10 px-3.5 py-1 rounded-full border border-white/15 inline-block mb-3">
                Orientación al Paciente
              </span>
              <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight font-heading">
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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {symptoms.map((symptom) => {
            const Icon = getSymptomIcon(symptom.id);
            return (
              <StaggerItem
                key={symptom.id}
                className="group relative bg-white rounded-tl-xl rounded-tr-[3rem] rounded-br-xl rounded-bl-[3rem] overflow-hidden border border-slate-200/80 shadow-lg hover:border-brand-panel transition-all flex flex-col justify-between"
              >
                {/* Header Image or Icon Banner */}
                {symptom.image ? (
                  <div className="relative w-full h-48 bg-slate-900 overflow-hidden border-b border-slate-100">
                    <Image
                      src={symptom.image}
                      alt={symptom.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                      <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                        <FaExclamationTriangle /> Señal de Atención
                      </span>

                      <div className="w-12 h-12 rounded-2xl bg-brand-gold text-brand-carbon flex items-center justify-center text-lg shadow-lg shadow-brand-gold/30 rotate-3 group-hover:rotate-0 transition-transform">
                        <Icon />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-7 pb-0 relative">
                    <div className="absolute -top-5 right-7 w-14 h-14 rounded-2xl bg-brand-gold text-brand-carbon flex items-center justify-center text-xl shadow-lg shadow-brand-gold/30 -rotate-3 group-hover:rotate-0 transition-transform">
                      <Icon />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 font-extrabold text-xs border border-amber-200 flex items-center gap-1.5 w-fit">
                      <FaExclamationTriangle /> Señal de Atención
                    </span>
                  </div>
                )}

                <div className="p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="text-xl font-black text-slate-900 mb-3 group-hover:text-brand-panel transition-colors leading-snug font-heading">
                      {symptom.name}
                    </h2>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                      {symptom.description}
                    </p>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6 text-xs text-slate-700">
                      <span className="font-extrabold text-brand-panel block mb-1">¿Por qué consultar con el traumatólogo?</span>
                      {symptom.whyConsult}
                    </div>
                  </div>

                  <Link
                    href={`/sintomas/${symptom.slug}`}
                    className="w-full py-3.5 px-5 rounded-2xl bg-brand-panel text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-between hover:bg-brand-gold hover:text-brand-carbon transition-all"
                  >
                    <span>Ver Orientación Médica</span>
                    <FaArrowRight size={13} className="flex-shrink-0" />
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
}
