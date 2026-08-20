import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { doctor } from "@/data/doctor";
import { diseases } from "@/data/diseases";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import StructuredData from "@/components/StructuredData";
import ServiceCard from "@/components/cards/ServiceCard";
import DiseaseCard from "@/components/cards/DiseaseCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import {
  FaBone,
  FaWhatsapp,
  FaPhoneAlt,
  FaCalendarCheck,
  FaAward,
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";

export const metadata = {
  title: `${doctor.title} ${doctor.name} | ${doctor.specialistTitle} en ${doctor.city}`,
  description: doctor.bio,
};

export default function HomePage() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;
  const initials = "RM";
  const hasPhoto = !!doctor.photo && fs.existsSync(path.join(process.cwd(), "public", doctor.photo));

  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: `${doctor.title} ${doctor.name}`,
    medicalSpecialty: "Orthopedic",
    description: doctor.bio,
    telephone: doctor.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
      postalCode: "29030",
      addressCountry: doctor.country,
    },
    priceRange: `$${doctor.consultationPrice} MXN`,
  };

  return (
    <div className="bg-brand-carbon text-slate-100 relative">
      <StructuredData data={schema} />

      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section className="min-h-screen bg-gradient-to-b from-brand-carbon via-brand-carbon-soft to-brand-panel flex items-center justify-center relative overflow-hidden px-6 py-12">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-brand-gold/10 rounded-full blur-[160px] pointer-events-none" />
        <FaBone className="absolute bottom-[-40px] right-[-40px] text-white/5 text-[380px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full my-auto">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <FadeUp className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-xs font-black uppercase tracking-widest">
              <FaAward /> Traumatología, Ortopedia &amp; Artroscopia
            </FadeUp>

            <FadeUp delay={0.05}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white font-heading">
                {doctor.title} {doctor.name}
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-brand-gold font-extrabold text-lg sm:text-xl tracking-wide uppercase">
                {doctor.specialistTitle}
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-slate-300 text-base lg:text-lg leading-relaxed max-w-2xl font-medium">
                Especialista certificado por el Consejo Mexicano de Ortopedia (CMOT) con más de 6,500 pacientes atendidos. Experto en reconstrucción artroscópica de rodilla y hombro, prótesis articular y cirugía endoscópica biportal lumbar (UBE) en Tuxtla Gutiérrez, Chiapas.
              </p>
            </FadeUp>

            {/* Quick Metrics — destacado asimétrico */}
            <FadeUp delay={0.2} className="grid grid-cols-2 gap-4 pt-2 max-w-xl">
              <div className="row-span-2 bg-brand-panel p-5 rounded-2xl border border-brand-border flex flex-col justify-center">
                <span className="text-4xl font-black text-brand-gold block font-heading">{doctor.surgeriesCount}</span>
                <span className="text-xs text-slate-400 font-bold uppercase mt-1">Cirugías Exitosas</span>
              </div>
              <div className="bg-brand-panel p-4 rounded-2xl border border-brand-border text-center">
                <span className="text-xl font-black text-brand-gold block font-heading">{doctor.experienceYears}+ Años</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Experiencia</span>
              </div>
              <div className="bg-brand-panel p-4 rounded-2xl border border-brand-border text-center">
                <span className="text-xl font-black text-brand-gold block font-heading">{doctor.patientsCount}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Pacientes</span>
              </div>
            </FadeUp>

            {/* Hero CTAs */}
            <FadeUp delay={0.25} className="flex flex-wrap gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl bg-brand-gold text-brand-carbon font-black text-xs uppercase tracking-wider flex items-center gap-3 hover:bg-brand-gold-light hover:scale-105 transition-all shadow-2xl"
              >
                <FaWhatsapp size={20} /> Agendar Cita WhatsApp
              </a>
              <a
                href={`tel:${doctor.emergencyPhone}`}
                className="px-8 py-4 rounded-2xl bg-brand-panel text-white font-bold text-xs uppercase tracking-wider flex items-center gap-3 hover:bg-brand-panel-alt transition-all border border-amber-500/40"
              >
                <FaPhoneAlt size={16} className="text-amber-400 animate-pulse" /> Urgencias 24/7: {doctor.emergencyPhone}
              </a>
            </FadeUp>
          </div>

          {/* Hero Right: panel de identidad (placeholder preparado para foto real) */}
          <div className="lg:col-span-5 flex justify-center">
            <FadeUp delay={0.15} className="relative w-full max-w-md">
              <div className="aspect-[3/4] rounded-[3rem] bg-gradient-to-tr from-brand-panel via-brand-panel-alt to-[#2E332A] border-2 border-brand-gold/50 shadow-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-carbon via-transparent to-transparent z-10 opacity-80" />

                {hasPhoto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={doctor.photo}
                    alt={`${doctor.title} ${doctor.name}`}
                    className="w-full h-full object-cover relative z-0"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 relative z-0">
                    <div className="w-32 h-32 rounded-full bg-brand-gold/15 flex items-center justify-center mb-4 relative">
                      <div className="absolute inset-0 rounded-full border-2 border-brand-gold/40" />
                      <div className="absolute inset-2 rounded-full border border-brand-gold/25" />
                      <span className="text-4xl font-black text-brand-gold font-heading relative z-10">{initials}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white font-heading">{doctor.title} {doctor.name}</h3>
                    <p className="text-xs text-brand-gold font-bold mt-1 uppercase tracking-wider">{doctor.specialistTitle}</p>
                    <p className="text-xs text-slate-300 mt-4 leading-relaxed font-medium">
                      Certificado por el Consejo Mexicano de Ortopedia (CMOT) • Tuxtla Gutiérrez, Chiapas
                    </p>
                  </div>
                )}

                <div className="absolute bottom-6 left-6 right-6 z-20 bg-brand-carbon/90 backdrop-blur-md p-4 rounded-2xl border border-brand-gold/30 text-xs font-semibold flex items-center justify-between">
                  <span className="text-white flex items-center gap-2">
                    <FaShieldAlt className="text-brand-gold" /> Céd. Ortopedia: {doctor.cedulaEspecialidad}
                  </span>
                  <span className="text-emerald-400 font-extrabold">CMOT Validado</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── 2. SOBRE MÍ ─────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <FadeUp className="lg:col-span-5">
            <div className="aspect-[3/4] rounded-[3rem] bg-brand-panel border-2 border-brand-gold/40 p-4 shadow-2xl relative">
              <div className="w-full h-full rounded-[2.5rem] bg-brand-panel-alt flex flex-col justify-between p-8 text-white relative overflow-hidden border border-brand-gold/20">
                <FaBone className="absolute top-[-30px] right-[-30px] text-white/5 text-[180px] pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <span className="px-3.5 py-1 rounded-full bg-brand-gold text-brand-carbon font-black text-xs uppercase tracking-widest inline-block">
                    Semblanza Médica
                  </span>
                  <h3 className="text-2xl font-black text-white font-heading">{doctor.title} {doctor.name}</h3>
                  <p className="text-xs text-brand-gold font-bold">Céd. Profesional: {doctor.cedula}</p>
                </div>

                <div className="space-y-3 relative z-10 text-xs">
                  <div className="p-3.5 rounded-2xl bg-brand-panel border border-brand-border font-semibold text-slate-300">
                    🎓 Médica: Inst. Estudios Sup. Chiapas
                  </div>
                  <div className="p-3.5 rounded-2xl bg-brand-panel border border-brand-border font-semibold text-slate-300">
                    🎓 Especialidad: Univ. Autónoma del Edo. de Méx. (UAEM)
                  </div>
                  <div className="p-3.5 rounded-2xl bg-brand-panel border border-brand-border font-semibold text-amber-300">
                    ⭐ Alta Especialidad: Artroscopia y Cirugía Articular
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-7 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3.5 py-1 rounded-full border border-brand-gold/30 inline-block">
              Trayectoria de Excelencia Ortopédica
            </span>

            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-heading">
              Especialista en Cirugía de Mínima Invasión y Reemplazo Articular
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-medium">
              {doctor.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-brand-panel border border-brand-border shadow-sm flex items-start gap-3">
                <FaCheckCircle className="text-brand-gold text-lg mt-0.5 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-200">
                  Artroscopia de rodilla y hombro con preservación meniscal
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-brand-panel border border-brand-border shadow-sm flex items-start gap-3">
                <FaCheckCircle className="text-brand-gold text-lg mt-0.5 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-200">
                  Prótesis total de rodilla y cadera de alta durabilidad
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-brand-panel border border-brand-border shadow-sm flex items-start gap-3">
                <FaCheckCircle className="text-brand-gold text-lg mt-0.5 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-200">
                  Cirugía Endoscópica Biportal Lumbar (UBE) de columna
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-brand-panel border border-brand-border shadow-sm flex items-start gap-3">
                <FaCheckCircle className="text-brand-gold text-lg mt-0.5 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-200">
                  Atención integral de urgencias por fractura las 24 horas
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── 3. CIRUGÍAS & SERVICIOS (grid asimétrico) ──────────────── */}
      <section className="py-20 px-6 bg-brand-carbon-soft text-white border-y border-brand-border">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-border pb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3.5 py-1 rounded-full border border-brand-gold/30 inline-block mb-3">
                Catálogo Quirúrgico
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-white font-heading">
                Cirugías Artroscópicas y Procedimientos
              </h2>
            </div>
            <Link
              href="/servicios"
              className="px-6 py-3 rounded-xl bg-brand-gold text-brand-carbon font-black text-xs uppercase tracking-wider hover:bg-brand-gold-light transition-all flex items-center gap-2 self-start md:self-auto shadow-lg"
            >
              Ver Todos los Servicios <FaArrowRight />
            </Link>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:auto-rows-fr">
            {services.slice(0, 6).map((service, i) => (
              <StaggerItem key={service.id} className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}>
                <ServiceCard service={service} featured={i === 0} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── 4. ENFERMEDADES ATENDIDAS (lista clínica) ──────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="space-y-12">
          <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-border pb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3.5 py-1 rounded-full border border-brand-gold/30 inline-block mb-3">
                Orientación Médica
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-white font-heading">
                Enfermedades y Lesiones Frecuentes
              </h2>
            </div>
            <Link
              href="/enfermedades"
              className="px-6 py-3 rounded-xl bg-brand-panel-alt text-white font-black text-xs uppercase tracking-wider hover:bg-brand-gold hover:text-brand-carbon transition-all flex items-center gap-2 border border-brand-border self-start md:self-auto"
            >
              Ver Catálogo Completo <FaArrowRight />
            </Link>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {diseases.slice(0, 6).map((disease) => (
              <StaggerItem key={disease.id}>
                <DiseaseCard disease={disease} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── 5. PAGOS & SEGUROS ─────────────────────────────────────── */}
      <section className="py-16 px-6 bg-brand-panel text-white border-y border-brand-border">
        <FadeUp className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-brand-gold">
              Facilidades de Pago &amp; Convenios
            </span>
            <h2 className="text-3xl font-black text-white font-heading">
              Hasta 12 Meses Sin Intereses con BBVA &amp; Cobertura de Seguros
            </h2>
            <p className="text-slate-300 text-xs leading-relaxed font-medium">
              Aceptamos tarjetas de crédito y débito, transferencias y pagos en efectivo. Atendemos a pacientes asegurados de todas las compañías ajustándonos al tabulador institucional.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-3">
            {doctor.insurances?.map((insurance, idx) => (
              <span key={idx} className="bg-brand-panel-alt px-4 py-2 rounded-xl text-xs font-bold text-slate-200 border border-brand-border">
                ✓ {insurance}
              </span>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ─── 6. TESTIMONIOS ─────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <FadeUp className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3.5 py-1 rounded-full border border-brand-gold/30 inline-block mb-3">
            Experiencia de Pacientes
          </span>
          <h2 className="text-3xl font-black text-white font-heading">
            Testimonios de Pacientes Operados
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
