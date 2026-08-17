import React from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaBone, FaArrowRight, FaCheckCircle, FaHospitalSymbol, FaUserMd } from "react-icons/fa";

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
    <div className="min-h-screen bg-[#FDFCF7] py-10 px-6 relative overflow-hidden">
      <StructuredData data={schema} />

      {/* Subtle Background Watermark Icons */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-5">
        <FaBone className="absolute top-20 right-10 text-9xl text-[#1A1C17]" />
        <FaHospitalSymbol className="absolute bottom-20 left-10 text-9xl text-[#E7B93F]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Cirugías & Procedimientos" }]} />

        {/* Subpage Header Banner (Natural Spacing) */}
        <section className="mb-10">
          <div className="bg-[#1A1C17] text-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden border border-[#2B2F28]">
            <FaBone className="absolute bottom-[-20px] right-[-20px] text-white/5 text-[220px] pointer-events-none" />

            <div className="max-w-3xl relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-[#E7B93F] bg-white/10 px-3.5 py-1 rounded-full border border-white/15 inline-block mb-3">
                Alta Especialidad en Artroscopia & Cirugía Articular
              </span>
              <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
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

        {/* Grid de 10 Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[2.5rem] p-8 border border-slate-200/80 shadow-xl flex flex-col justify-between group hover:border-[#1A1C17] transition-all relative overflow-hidden"
            >
              <FaBone className="absolute bottom-[-10px] right-[-10px] text-slate-100 text-[140px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 font-extrabold text-xs border border-amber-200">
                    {service.isSurgical ? "Procedimiento Quirúrgico" : "Procedimiento de Consultorio"}
                  </span>
                  <FaUserMd className="text-[#E7B93F] text-xl" />
                </div>

                <h2 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-[#1A1C17] transition-colors leading-snug">
                  {service.name}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  {service.shortDescription}
                </p>

                <div className="space-y-2 mb-8">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-900 block mb-2">
                    Beneficios Principales:
                  </span>
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <FaCheckCircle className="text-[#E7B93F] mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CLEAN ELEGANT BUTTON WITH HIGH PADDING AND DISTINCT LABEL */}
              <Link
                href={`/servicios/${service.slug}`}
                className="w-full py-4 px-6 rounded-2xl bg-[#1A1C17] text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-between hover:bg-[#E7B93F] hover:text-[#1A1C17] transition-all shadow-md group-hover:shadow-xl relative z-10"
              >
                <span>Ver Ficha del Procedimiento</span>
                <FaArrowRight size={14} className="flex-shrink-0" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
