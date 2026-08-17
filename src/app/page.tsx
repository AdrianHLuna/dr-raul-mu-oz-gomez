import React from "react";
import Link from "next/link";
import { doctor } from "@/data/doctor";
import { diseases } from "@/data/diseases";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { faqs } from "@/data/faqs";
import { testimonials } from "@/data/testimonials";
import StructuredData from "@/components/StructuredData";
import { 
  FaBone, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaCalendarCheck, 
  FaAward, 
  FaUserMd, 
  FaHospital, 
  FaMapMarkerAlt, 
  FaCheckCircle, 
  FaArrowRight, 
  FaStar, 
  FaCreditCard,
  FaShieldAlt,
  FaClock,
  FaNotesMedical,
  FaExclamationTriangle
} from "react-icons/fa";

export const metadata = {
  title: `${doctor.title} ${doctor.name} | ${doctor.specialistTitle} en ${doctor.city}`,
  description: doctor.bio,
};

export default function HomePage() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

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
    <div className="bg-[#0F110D] text-slate-100 relative">
      <StructuredData data={schema} />

      {/* ─── 1. HERO SECTION (100vh MANDATORY RULE WITH DOCTOR PHOTO ON THE RIGHT) ─── */}
      <section className="min-h-screen bg-gradient-to-b from-[#0F110D] via-[#161914] to-[#1A1C17] flex items-center justify-center relative overflow-hidden px-6 py-12">
        {/* Decorative Background Accents */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[#E7B93F]/10 rounded-full blur-[160px] pointer-events-none" />
        <FaBone className="absolute bottom-[-40px] right-[-40px] text-white/5 text-[380px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full my-auto">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7B93F]/15 border border-[#E7B93F]/40 text-[#E7B93F] text-xs font-black uppercase tracking-widest">
              <FaAward /> Traumatología, Ortopedia & Artroscopia
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              {doctor.title} {doctor.name}
            </h1>

            <p className="text-[#E7B93F] font-extrabold text-lg sm:text-xl tracking-wide uppercase">
              {doctor.specialistTitle}
            </p>

            <p className="text-slate-300 text-base lg:text-lg leading-relaxed max-w-2xl font-medium">
              Especialista certificado por el Consejo Mexicano de Ortopedia (CMOT) con más de 6,500 pacientes atendidos. Experto en reconstrucción artroscópica de rodilla y hombro, prótesis articular y cirugía endoscópica biportal lumbar (UBE) en Tuxtla Gutiérrez, Chiapas.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-2 max-w-xl">
              <div className="bg-[#1A1C17] p-4 rounded-2xl border border-slate-800 text-center">
                <span className="text-2xl lg:text-3xl font-black text-[#E7B93F] block">6+ Años</span>
                <span className="text-xs text-slate-400 font-bold uppercase">Experiencia</span>
              </div>
              <div className="bg-[#1A1C17] p-4 rounded-2xl border border-slate-800 text-center">
                <span className="text-2xl lg:text-3xl font-black text-[#E7B93F] block">+1,500</span>
                <span className="text-xs text-slate-400 font-bold uppercase">Cirugías</span>
              </div>
              <div className="bg-[#1A1C17] p-4 rounded-2xl border border-slate-800 text-center">
                <span className="text-2xl lg:text-3xl font-black text-[#E7B93F] block">+6,500</span>
                <span className="text-xs text-slate-400 font-bold uppercase">Pacientes</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl bg-[#E7B93F] text-[#1A1C17] font-black text-xs uppercase tracking-wider flex items-center gap-3 hover:bg-amber-300 hover:scale-105 transition-all shadow-2xl"
              >
                <FaWhatsapp size={20} /> Agendar Cita WhatsApp
              </a>
              <a
                href={`tel:${doctor.emergencyPhone}`}
                className="px-8 py-4 rounded-2xl bg-[#1A1C17] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-3 hover:bg-slate-800 transition-all border border-amber-500/40"
              >
                <FaPhoneAlt size={16} className="text-amber-400 animate-pulse" /> Urgencias 24/7: {doctor.emergencyPhone}
              </a>
            </div>
          </div>

          {/* Hero Right: EXCLUSIVELY DOCTOR PHOTO CONTAINER (REGLA MANDATORIA) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-[3/4] rounded-[3rem] bg-gradient-to-tr from-[#1A1C17] via-[#242820] to-[#2E332A] border-2 border-[#E7B93F]/50 shadow-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F110D] via-transparent to-transparent z-10 opacity-80" />
                
                {/* Doctor Official Visual Graphic */}
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 relative z-0">
                  <div className="w-32 h-32 rounded-full bg-[#E7B93F]/20 text-[#E7B93F] flex items-center justify-center font-black text-5xl mb-4 border-2 border-[#E7B93F]/40 shadow-2xl">
                    <FaUserMd />
                  </div>
                  <h3 className="text-2xl font-black text-white">{doctor.title} {doctor.name}</h3>
                  <p className="text-xs text-[#E7B93F] font-bold mt-1 uppercase tracking-wider">{doctor.specialistTitle}</p>
                  <p className="text-xs text-slate-300 mt-4 leading-relaxed font-medium">
                    Certificado por el Consejo Mexicano de Ortopedia (CMOT) • Tuxtla Gutiérrez, Chiapas
                  </p>
                </div>

                {/* Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-[#0F110D]/90 backdrop-blur-md p-4 rounded-2xl border border-[#E7B93F]/30 text-xs font-semibold flex items-center justify-between">
                  <span className="text-white flex items-center gap-2">
                    <FaShieldAlt className="text-[#E7B93F]" /> Céd. Ortopedia: {doctor.cedulaEspecialidad}
                  </span>
                  <span className="text-emerald-400 font-extrabold">CMOT Validado</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 2. ABOUT ME SECTION (CON CONTENEDOR FOTO ASPECT-[3/4]) ─────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Doctor Photo Box with Aspect-[3/4] */}
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] rounded-[3rem] bg-[#1A1C17] border-2 border-[#E7B93F]/40 p-4 shadow-2xl relative">
              <div className="w-full h-full rounded-[2.5rem] bg-[#242820] flex flex-col justify-between p-8 text-white relative overflow-hidden border border-[#E7B93F]/20">
                <FaBone className="absolute top-[-30px] right-[-30px] text-white/5 text-[180px] pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <span className="px-3.5 py-1 rounded-full bg-[#E7B93F] text-[#1A1C17] font-black text-xs uppercase tracking-widest inline-block">
                    Semblanza Médica
                  </span>
                  <h3 className="text-2xl font-black text-white">{doctor.title} {doctor.name}</h3>
                  <p className="text-xs text-[#E7B93F] font-bold">Céd. Profesional: {doctor.cedula}</p>
                </div>

                <div className="space-y-3 relative z-10 text-xs">
                  <div className="p-3.5 rounded-2xl bg-[#1A1C17] border border-slate-800 font-semibold text-slate-300">
                    🎓 Médica: Inst. Estudios Sup. Chiapas
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#1A1C17] border border-slate-800 font-semibold text-slate-300">
                    🎓 Especialidad: Univ. Autónoma del Edo. de Méx. (UAEM)
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#1A1C17] border border-slate-800 font-semibold text-amber-300">
                    ⭐ Alta Especialidad: Artroscopia y Cirugía Articular
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Bio Description */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#E7B93F] bg-[#E7B93F]/10 px-3.5 py-1 rounded-full border border-[#E7B93F]/30 inline-block">
              Trayectoria de Excelencia Ortopédica
            </span>

            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
              Especialista en Cirugía de Mínima Invasión y Reemplazo Articular
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-medium">
              {doctor.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#1A1C17] border border-slate-800 shadow-sm flex items-start gap-3">
                <FaCheckCircle className="text-[#E7B93F] text-lg mt-0.5 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-200">
                  Artroscopia de rodilla y hombro con preservación meniscal
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#1A1C17] border border-slate-800 shadow-sm flex items-start gap-3">
                <FaCheckCircle className="text-[#E7B93F] text-lg mt-0.5 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-200">
                  Prótesis total de rodilla y cadera de alta durabilidad
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#1A1C17] border border-slate-800 shadow-sm flex items-start gap-3">
                <FaCheckCircle className="text-[#E7B93F] text-lg mt-0.5 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-200">
                  Cirugía Endoscópica Biportal Lumbar (UBE) de columna
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#1A1C17] border border-slate-800 shadow-sm flex items-start gap-3">
                <FaCheckCircle className="text-[#E7B93F] text-lg mt-0.5 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-200">
                  Atención integral de urgencias por fractura las 24 horas
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 3. DESTACADO DE CIRUGÍAS & SERVICIOS ───────────────────────────── */}
      <section className="py-20 px-6 bg-[#161914] text-white border-y border-[#2B2F28]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2B2F28] pb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#E7B93F] bg-[#E7B93F]/10 px-3.5 py-1 rounded-full border border-[#E7B93F]/30 inline-block mb-3">
                Catálogo Quirúrgico
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-white">
                Cirugías Artroscópicas y Procedimientos
              </h2>
            </div>
            <Link
              href="/servicios"
              className="px-6 py-3 rounded-xl bg-[#E7B93F] text-[#1A1C17] font-black text-xs uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center gap-2 self-start md:self-auto shadow-lg"
            >
              Ver Todos los Servicios <FaArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-[#1A1C17] rounded-[2.5rem] p-8 border border-slate-800 flex flex-col justify-between group hover:border-[#E7B93F] transition-all relative overflow-hidden shadow-xl"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#E7B93F] bg-[#E7B93F]/10 px-2.5 py-1 rounded-full border border-[#E7B93F]/30 inline-block mb-4">
                    {service.isSurgical ? "Cirugía Articular" : "Procedimiento"}
                  </span>
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#E7B93F] transition-colors leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed font-medium mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <Link
                  href={`/servicios/${service.slug}`}
                  className="w-full py-4 px-6 rounded-2xl bg-[#242820] text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-between group-hover:bg-[#E7B93F] group-hover:text-[#1A1C17] transition-all border border-slate-700"
                >
                  <span>Ver Ficha del Procedimiento</span>
                  <FaArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 4. ENFERMEDADES ATENDIDAS ───────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2B2F28] pb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#E7B93F] bg-[#E7B93F]/10 px-3.5 py-1 rounded-full border border-[#E7B93F]/30 inline-block mb-3">
                Orientación Médica
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-white">
                Enfermedades y Lesiones Frecuentes
              </h2>
            </div>
            <Link
              href="/enfermedades"
              className="px-6 py-3 rounded-xl bg-[#242820] text-white font-black text-xs uppercase tracking-wider hover:bg-[#E7B93F] hover:text-[#1A1C17] transition-all flex items-center gap-2 border border-slate-700 self-start md:self-auto"
            >
              Ver Catálogo Completo <FaArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diseases.slice(0, 6).map((disease) => (
              <div
                key={disease.id}
                className="bg-[#1A1C17] rounded-[2.5rem] p-8 border border-slate-800 flex flex-col justify-between group hover:border-[#E7B93F] transition-all shadow-xl"
              >
                <div>
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#E7B93F] transition-colors leading-snug">
                    {disease.name}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed font-medium mb-6">
                    {disease.shortDescription}
                  </p>
                </div>

                <Link
                  href={`/enfermedades/${disease.slug}`}
                  className="w-full py-4 px-6 rounded-2xl bg-[#242820] text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-between hover:bg-[#E7B93F] hover:text-[#1A1C17] transition-all border border-slate-700"
                >
                  <span>Ver Guía Médica</span>
                  <FaArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 5. PAGOS & SEGUROS ─────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#1A1C17] text-white border-y border-[#2B2F28]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#E7B93F]">
              Facilidades de Pago & Convenios
            </span>
            <h2 className="text-3xl font-black text-white">
              Hasta 12 Meses Sin Intereses con BBVA & Cobertura de Seguros
            </h2>
            <p className="text-slate-300 text-xs leading-relaxed font-medium">
              Aceptamos tarjetas de crédito y débito, transferencias y pagos en efectivo. Atendemos a pacientes asegurados de todas las compañías ajustándonos al tabulador institucional.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-3">
            {doctor.insurances?.map((insurance, idx) => (
              <span key={idx} className="bg-[#242820] px-4 py-2 rounded-xl text-xs font-bold text-slate-200 border border-slate-700">
                ✓ {insurance}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. TESTIMONIOS ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#E7B93F] bg-[#E7B93F]/10 px-3.5 py-1 rounded-full border border-[#E7B93F]/30 inline-block mb-3">
            Experiencia de Pacientes
          </span>
          <h2 className="text-3xl font-black text-white">
            Testimonios de Pacientes Operados
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test) => (
            <div key={test.id} className="bg-[#1A1C17] rounded-[2.5rem] p-8 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-400">{test.date}</span>
              </div>
              <p className="text-slate-200 text-sm italic font-medium leading-relaxed">
                "{test.comment}"
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <p className="font-black text-white">{test.name}, {test.age} años</p>
                  <p className="text-[#E7B93F] font-bold">{test.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
