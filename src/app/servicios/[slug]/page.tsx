import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
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
  FaClock
} from "react-icons/fa";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Procedimiento no encontrado" };

  return {
    title: `${service.name} | ${doctor.title} ${doctor.name}`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola ${doctor.title} ${doctor.name}, requiero información y cita sobre ${service.name}.`
  )}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.description,
    procedureType: service.isSurgical ? "SurgicalProcedure" : "NonInvasiveProcedure",
  };

  return (
    <div className="min-h-screen bg-brand-carbon text-slate-100 py-10 px-6 relative overflow-hidden">
      <StructuredData data={schema} />

      {/* Background Accent */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Servicios", href: "/servicios" },
            { label: service.name },
          ]}
          isDark={true}
        />

        {/* ─── SURGICAL MEDICAL DASHBOARD (LAYOUT 8/4 SPLIT) ────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* MAIN DOSSIER COLUMN (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Hero Header Card */}
            <div className="bg-brand-panel rounded-[2.5rem] p-8 lg:p-10 border border-brand-border shadow-2xl relative overflow-hidden">
              <FaBone className="absolute bottom-[-20px] right-[-20px] text-white/5 text-[200px] pointer-events-none" />
              
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-black uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3.5 py-1 rounded-full border border-brand-gold/30">
                  Ficha Quirúrgica Ortopédica
                </span>
                <span className="text-xs font-bold text-amber-300 bg-amber-950/60 px-3.5 py-1 rounded-full border border-amber-800">
                  {service.isSurgical ? "Cirugía de Alta Especialidad" : "Procedimiento de Consultorio"}
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-black text-white font-heading leading-tight mb-4">
                {service.name}
              </h1>

              <p className="text-slate-300 text-base leading-relaxed font-medium">
                {service.description}
              </p>
            </div>

            {/* Beneficios Quirúrgicos */}
            <div className="bg-brand-panel rounded-[2.5rem] p-8 border border-brand-border shadow-xl space-y-6">
              <h2 className="text-xl font-black text-white font-heading flex items-center gap-3 border-b border-brand-border pb-4">
                <FaCheckCircle className="text-brand-gold" /> Beneficios y Ventajas Clínicas
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 pl-2 pr-4 py-2 rounded-full bg-brand-panel-alt border border-slate-800">
                    <span className="w-6 h-6 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle size={12} />
                    </span>
                    <span className="text-xs font-semibold text-slate-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicaciones Clínicas */}
            <div className="bg-brand-panel rounded-[2.5rem] p-8 border border-brand-border shadow-xl space-y-6">
              <h2 className="text-xl font-black text-white font-heading flex items-center gap-3 border-b border-brand-border pb-4">
                <FaExclamationTriangle className="text-brand-gold" /> Indicaciones para la Intervención
              </h2>
              <div className="space-y-3">
                {service.indications?.map((indication, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-brand-panel-alt border border-slate-800 flex items-start gap-3 text-xs text-slate-300 font-medium">
                    <span className="w-2 h-2 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                    <span>{indication}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Técnica Quirúrgica y Tiempo de Recuperación */}
            <div className="bg-brand-panel rounded-[2.5rem] p-8 border border-brand-border shadow-xl space-y-6">
              <h2 className="text-xl font-black text-white font-heading flex items-center gap-3 border-b border-brand-border pb-4">
                <FaUserMd className="text-brand-gold" /> Descripción de la Técnica y Tiempos de Recuperación
              </h2>
              
              <div className="p-6 rounded-2xl bg-brand-panel-alt border border-slate-800 space-y-3">
                <h3 className="font-extrabold text-brand-gold text-sm uppercase tracking-wider">Técnica Ejecutada:</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {service.procedureDescription}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-950/30 border border-amber-500/20 space-y-2">
                <h3 className="font-extrabold text-amber-300 text-sm flex items-center gap-2">
                  <FaClock /> Recuperación Estimada:
                </h3>
                <p className="text-xs text-amber-100 font-semibold leading-relaxed">
                  {service.recoveryTime}
                </p>
              </div>
            </div>

          </div>

          {/* FLOATING SIDEBAR APPOINTMENT DOCK (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-brand-panel rounded-[2.5rem] p-8 border border-brand-border shadow-2xl sticky top-28 space-y-6">
              
              <div className="text-center pb-6 border-b border-brand-border">
                <div className="w-16 h-16 rounded-2xl bg-brand-gold/20 text-brand-gold flex items-center justify-center font-black text-2xl mx-auto mb-3">
                  <FaCalendarCheck />
                </div>
                <h3 className="text-lg font-black text-white font-heading">Agendar Valoración</h3>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  {doctor.title} {doctor.name}
                </p>
                <span className="inline-block mt-2 text-xs font-black text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/30">
                  {doctor.specialistTitle}
                </span>
              </div>

              {/* Consultation Info */}
              <div className="space-y-3 text-xs text-slate-300 bg-brand-panel-alt p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between">
                  <span>Costo Consulta:</span>
                  <span className="font-black text-brand-gold">${doctor.consultationPrice} MXN</span>
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
                  className="w-full py-4 rounded-xl bg-brand-gold text-brand-carbon font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-amber-300 transition-all shadow-xl"
                >
                  <FaWhatsapp size={18} /> Agendar Cita WhatsApp
                </a>
                <a
                  href={`tel:${doctor.phone}`}
                  className="w-full py-3.5 rounded-xl bg-brand-panel-alt text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-800 transition-all border border-slate-700"
                >
                  <FaPhoneAlt size={14} className="text-brand-gold" /> Llamar: {doctor.phone}
                </a>
              </div>

              <div className="pt-2 text-center">
                <Link href="/servicios" className="text-xs text-slate-400 hover:text-brand-gold font-bold flex items-center justify-center gap-2 transition-colors">
                  <FaArrowLeft /> Volver al catálogo de procedimientos
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
