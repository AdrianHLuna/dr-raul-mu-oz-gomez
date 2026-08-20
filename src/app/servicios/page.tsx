import React from "react";
import { services } from "@/data/services";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import ServiceCard from "@/components/cards/ServiceCard";
import { StaggerContainer, StaggerItem } from "@/components/Animations";
import { FaBone, FaHospitalSymbol } from "react-icons/fa";

export const metadata = {
  title: `Cirugías Artroscópicas y Procedimientos Ortopédicos | ${doctor.title} ${doctor.name}`,
  description: "Procedimientos ortopédicos y quirúrgicos de alta especialidad: Artroscopia de rodilla y hombro, prótesis de cadera y rodilla, cirugía endoscópica biportal de columna UBE y viscosuplementación en Tuxtla Gutiérrez, Chiapas.",
};

export default function ServicesListPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Cirugías Artroscópicas y Procedimientos Ortopédicos",
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
        <FaBone className="absolute top-20 right-10 text-9xl text-brand-panel" />
        <FaHospitalSymbol className="absolute bottom-20 left-10 text-9xl text-brand-gold" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Cirugías & Procedimientos" }]} />

        <section className="mb-10">
          <div className="bg-brand-panel text-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden border border-brand-border">
            <FaBone className="absolute bottom-[-20px] right-[-20px] text-white/5 text-[220px] pointer-events-none" />

            <div className="max-w-3xl relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-brand-gold bg-white/10 px-3.5 py-1 rounded-full border border-white/15 inline-block mb-3">
                Alta Especialidad en Artroscopia &amp; Cirugía Articular
              </span>
              <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight font-heading">
                Cirugías y Procedimientos Ortopédicos
              </h1>
              <p className="text-slate-200 text-base lg:text-lg max-w-3xl leading-relaxed font-medium mb-6">
                Intervenciones artroscópicas mínimamente invasivas y reconstrucciones articulares avanzadas para recuperar tu movilidad sin dolor en Tuxtla Gutiérrez, Chiapas.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-300">
                <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  • Artroscopia de Rodilla y Hombro
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  • Prótesis de Cadera y Rodilla
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  • Cirugía Endoscópica de Columna (UBE)
                </span>
              </div>
            </div>
          </div>
        </section>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
