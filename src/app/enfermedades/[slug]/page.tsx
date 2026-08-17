import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { diseases } from "@/data/diseases";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { 
  FaBone, 
  FaCheckCircle, 
  FaExclamationTriangle, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaCalendarCheck, 
  FaShieldAlt, 
  FaUserMd,
  FaArrowLeft,
  FaHospital
} from "react-icons/fa";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return diseases.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) return { title: "Enfermedad no encontrada" };

  return {
    title: `${disease.name} | ${doctor.title} ${doctor.name}`,
    description: disease.shortDescription,
  };
}

export default async function DiseaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) notFound();

  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola ${doctor.title} ${doctor.name}, requiero orientación sobre ${disease.name}.`
  )}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: disease.name,
    description: disease.description,
    possibleTreatment: disease.treatments.map((t: string) => ({
      "@type": "MedicalProcedure",
      name: t,
    })),
  };

  return (
    <div className="min-h-screen bg-[#0F110D] text-slate-100 py-10 px-6 relative overflow-hidden">
      <StructuredData data={schema} />

      {/* Background Accent */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#E7B93F]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Enfermedades", href: "/enfermedades" },
            { label: disease.name },
          ]}
          isDark={true}
        />

        {/* ─── SURGICAL MEDICAL DASHBOARD (LAYOUT 8/4 SPLIT) ────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* MAIN DOSSIER COLUMN (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Hero Header Card */}
            <div className="bg-[#1A1C17] rounded-[2.5rem] p-8 lg:p-10 border border-[#2B2F28] shadow-2xl relative overflow-hidden">
              <FaBone className="absolute bottom-[-20px] right-[-20px] text-white/5 text-[200px] pointer-events-none" />
              
              <span className="text-xs font-black uppercase tracking-widest text-[#E7B93F] bg-[#E7B93F]/10 px-3.5 py-1 rounded-full border border-[#E7B93F]/30 inline-block mb-4">
                Dossier de Evaluación Ortopédica
              </span>
              
              <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
                {disease.name}
              </h1>

              <p className="text-slate-300 text-base leading-relaxed font-medium">
                {disease.description}
              </p>
            </div>

            {/* Cuadro Clínico y Síntomas */}
            <div className="bg-[#1A1C17] rounded-[2.5rem] p-8 border border-[#2B2F28] shadow-xl space-y-6">
              <h2 className="text-xl font-black text-white flex items-center gap-3 border-b border-[#2B2F28] pb-4">
                <FaExclamationTriangle className="text-[#E7B93F]" /> Cuadro Clínico y Manifestaciones
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {disease.symptoms.map((symptom, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#242820] border border-slate-800 flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E7B93F] mt-2 flex-shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Etiología y Causas */}
            <div className="bg-[#1A1C17] rounded-[2.5rem] p-8 border border-[#2B2F28] shadow-xl space-y-6">
              <h2 className="text-xl font-black text-white flex items-center gap-3 border-b border-[#2B2F28] pb-4">
                <FaBone className="text-[#E7B93F]" /> Factores Etiológicos y Origen
              </h2>
              <div className="space-y-3">
                {disease.causes.map((cause, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#242820] border border-slate-800 flex items-start gap-3 text-xs text-slate-300 font-medium">
                    <FaCheckCircle className="text-[#E7B93F] mt-0.5 flex-shrink-0" />
                    <span>{cause}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Abordajes Quirúrgicos y Tratamientos (CERO MARCAS DE MEDICAMENTOS) */}
            <div className="bg-[#1A1C17] rounded-[2.5rem] p-8 border border-[#2B2F28] shadow-xl space-y-6">
              <h2 className="text-xl font-black text-white flex items-center gap-3 border-b border-[#2B2F28] pb-4">
                <FaUserMd className="text-[#E7B93F]" /> Abordajes Quirúrgicos y Tratamiento Integral
              </h2>
              <div className="space-y-3">
                {disease.treatments.map((treatment, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/20 text-xs text-amber-100 font-semibold flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded bg-[#E7B93F] text-[#1A1C17] font-black text-[10px] mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{treatment}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* FLOATING SIDEBAR APPOINTMENT DOCK (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-[#1A1C17] rounded-[2.5rem] p-8 border border-[#2B2F28] shadow-2xl sticky top-28 space-y-6">
              
              <div className="text-center pb-6 border-b border-[#2B2F28]">
                <div className="w-16 h-16 rounded-2xl bg-[#E7B93F]/20 text-[#E7B93F] flex items-center justify-center font-black text-2xl mx-auto mb-3">
                  <FaCalendarCheck />
                </div>
                <h3 className="text-lg font-black text-white">Consulta Especializada</h3>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  {doctor.title} {doctor.name}
                </p>
                <span className="inline-block mt-2 text-xs font-black text-[#E7B93F] bg-[#E7B93F]/10 px-3 py-1 rounded-full border border-[#E7B93F]/30">
                  {doctor.specialistTitle}
                </span>
              </div>

              {/* Consultation Info */}
              <div className="space-y-3 text-xs text-slate-300 bg-[#242820] p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between">
                  <span>Costo Consulta:</span>
                  <span className="font-black text-[#E7B93F]">${doctor.consultationPrice} MXN</span>
                </div>
                <div className="flex justify-between border-t border-slate-700/50 pt-2">
                  <span>Facilidad de Pago:</span>
                  <span className="font-bold text-emerald-400">Hasta 12 MSI</span>
                </div>
                <div className="border-t border-slate-700/50 pt-2 text-[11px] text-slate-400">
                  <p>Ubicación: Tuxtla Gutiérrez, Chiapas</p>
                  <p className="mt-1">Céd. Ortopedia: {doctor.cedulaEspecialidad}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-xl bg-[#E7B93F] text-[#1A1C17] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-amber-300 transition-all shadow-xl"
                >
                  <FaWhatsapp size={18} /> Agendar Valoración WhatsApp
                </a>
                <a
                  href={`tel:${doctor.phone}`}
                  className="w-full py-3.5 rounded-xl bg-[#242820] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-800 transition-all border border-slate-700"
                >
                  <FaPhoneAlt size={14} className="text-[#E7B93F]" /> Llamar: {doctor.phone}
                </a>
              </div>

              <div className="pt-2 text-center">
                <Link href="/enfermedades" className="text-xs text-slate-400 hover:text-[#E7B93F] font-bold flex items-center justify-center gap-2 transition-colors">
                  <FaArrowLeft /> Volver al catálogo de enfermedades
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
