import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { symptoms } from "@/data/symptoms";
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
  FaNotesMedical
} from "react-icons/fa";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) return { title: "Síntoma no encontrado" };

  return {
    title: `${symptom.name} | ${doctor.title} ${doctor.name}`,
    description: symptom.shortDescription,
  };
}

export default async function SymptomDetailPage({ params }: Props) {
  const { slug } = await params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) notFound();

  const relatedList = diseases.filter((d) => symptom.relatedDiseases?.includes(d.id));

  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola ${doctor.title} ${doctor.name}, presento el síntoma: ${symptom.name} y deseo agendar una valoración.`
  )}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: symptom.name,
    description: symptom.description,
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
            { label: "Síntomas", href: "/sintomas" },
            { label: symptom.name },
          ]}
          isDark={true}
        />

        {/* ─── SURGICAL MEDICAL DASHBOARD (LAYOUT 8/4 SPLIT) ────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* MAIN DOSSIER COLUMN (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Hero Header Card */}
            <div className="bg-[#1A1C17] rounded-[2.5rem] p-8 lg:p-10 border border-[#2B2F28] shadow-2xl relative overflow-hidden">
              <FaNotesMedical className="absolute bottom-[-20px] right-[-20px] text-white/5 text-[200px] pointer-events-none" />
              
              <span className="text-xs font-black uppercase tracking-widest text-[#E7B93F] bg-[#E7B93F]/10 px-3.5 py-1 rounded-full border border-[#E7B93F]/30 inline-block mb-4">
                Orientación Clínica al Paciente
              </span>
              
              <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
                {symptom.name}
              </h1>

              <p className="text-slate-300 text-base leading-relaxed font-medium">
                {symptom.description}
              </p>
            </div>

            {/* ¿Por qué consultar? */}
            <div className="bg-[#1A1C17] rounded-[2.5rem] p-8 border border-[#2B2F28] shadow-xl space-y-6">
              <h2 className="text-xl font-black text-white flex items-center gap-3 border-b border-[#2B2F28] pb-4">
                <FaExclamationTriangle className="text-[#E7B93F]" /> ¿Por qué requiere Valoración Especializada?
              </h2>
              <div className="p-6 rounded-2xl bg-amber-950/30 border border-amber-500/20 text-xs text-amber-100 font-semibold leading-relaxed">
                {symptom.whyConsult}
              </div>
            </div>

            {/* Enfermedades Relacionadas */}
            {relatedList.length > 0 && (
              <div className="bg-[#1A1C17] rounded-[2.5rem] p-8 border border-[#2B2F28] shadow-xl space-y-6">
                <h2 className="text-xl font-black text-white flex items-center gap-3 border-b border-[#2B2F28] pb-4">
                  <FaBone className="text-[#E7B93F]" /> Condición o Lesiones Asociadas a este Síntoma
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedList.map((disease) => (
                    <Link
                      key={disease.id}
                      href={`/enfermedades/${disease.slug}`}
                      className="p-5 rounded-2xl bg-[#242820] border border-slate-800 hover:border-[#E7B93F] transition-all group block"
                    >
                      <h3 className="font-extrabold text-white text-sm group-hover:text-[#E7B93F] transition-colors mb-2">
                        {disease.name}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {disease.shortDescription}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* FLOATING SIDEBAR APPOINTMENT DOCK (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-[#1A1C17] rounded-[2.5rem] p-8 border border-[#2B2F28] shadow-2xl sticky top-28 space-y-6">
              
              <div className="text-center pb-6 border-b border-[#2B2F28]">
                <div className="w-16 h-16 rounded-2xl bg-[#E7B93F]/20 text-[#E7B93F] flex items-center justify-center font-black text-2xl mx-auto mb-3">
                  <FaCalendarCheck />
                </div>
                <h3 className="text-lg font-black text-white">Agendar Valoración</h3>
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
                  <FaWhatsapp size={18} /> Consultar Síntoma por WhatsApp
                </a>
                <a
                  href={`tel:${doctor.phone}`}
                  className="w-full py-3.5 rounded-xl bg-[#242820] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-800 transition-all border border-slate-700"
                >
                  <FaPhoneAlt size={14} className="text-[#E7B93F]" /> Llamar: {doctor.phone}
                </a>
              </div>

              <div className="pt-2 text-center">
                <Link href="/sintomas" className="text-xs text-slate-400 hover:text-[#E7B93F] font-bold flex items-center justify-center gap-2 transition-colors">
                  <FaArrowLeft /> Volver al catálogo de síntomas
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
