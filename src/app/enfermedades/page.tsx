import React from "react";
import { diseases } from "@/data/diseases";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import DiseaseCard from "@/components/cards/DiseaseCard";
import { StaggerContainer, StaggerItem } from "@/components/Animations";
import { FaBone, FaMedkit } from "react-icons/fa";

export const metadata = {
  title: `Enfermedades y Patologías Ortopédicas | ${doctor.title} ${doctor.name}`,
  description: "Guía médica de enfermedades y lesiones ortopédicas: desgarros de ligamentos de rodilla, meniscos, manguito rotador de hombro, desgaste articular y túnel carpiano en Tuxtla Gutiérrez, Chiapas.",
};

export default function DiseasesListPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Enfermedades y Lesiones Ortopédicas Atendidas",
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
        <FaBone className="absolute top-24 left-10 text-9xl text-brand-panel" />
        <FaMedkit className="absolute bottom-24 right-10 text-9xl text-brand-gold" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades & Patologías" }]} />

        <section className="mb-10">
          <div className="bg-brand-panel text-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden border border-brand-border">
            <FaBone className="absolute bottom-[-20px] right-[-20px] text-white/5 text-[220px] pointer-events-none" />

            <div className="max-w-3xl relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-brand-gold bg-white/10 px-3.5 py-1 rounded-full border border-white/15 inline-block mb-3">
                Guía Médica de Orientación
              </span>
              <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight font-heading">
                Enfermedades y Lesiones Ortopédicas
              </h1>
              <p className="text-slate-200 text-base lg:text-lg max-w-3xl leading-relaxed font-medium mb-6">
                Información clínica detallada sobre patologías articulares, lesiones deportivas, problemas de cartílago y desgastes óseos tratados por el especialista.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-300">
                <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  • Lesiones de Ligamento y Meniscos
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  • Rupturas del Manguito Rotador
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  • Artrosis de Rodilla y Cadera
                </span>
              </div>
            </div>
          </div>
        </section>

        <StaggerContainer className="grid grid-cols-1 gap-5">
          {diseases.map((disease) => (
            <StaggerItem key={disease.id}>
              <DiseaseCard disease={disease} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
