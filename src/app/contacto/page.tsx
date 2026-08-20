import React from "react";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaCreditCard,
  FaHospital,
  FaDirections,
} from "react-icons/fa";

export const metadata = {
  title: `Ubicación del Consultorio y Citas | ${doctor.title} ${doctor.name}`,
  description: `Dirección del consultorio, mapa en vivo de Google Maps, teléfono de urgencias 24/7 y WhatsApp del ${doctor.title} ${doctor.name} en Tuxtla Gutiérrez, Chiapas.`,
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `${doctor.title} ${doctor.name} - Traumatología y Artroscopia`,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
      postalCode: "29030",
      addressCountry: doctor.country,
    },
    telephone: doctor.phone,
    priceRange: `$${doctor.consultationPrice} MXN`,
  };

  const exactPlaceMapEmbedUrl = "https://maps.google.com/maps?q=Dr.+Ra%C3%BAl+Hern%C3%A1n+Mu%C3%B1oz+G%C3%B3mez,+Calle+19+Poniente+Norte+305,+Arboledas,+Tuxtla+Guti%C3%A9rrez,+Chis.&t=&z=17&ie=UTF8&iwloc=B&output=embed";

  const facts = [
    {
      icon: FaMapMarkerAlt,
      label: "Dirección Exacta",
      value: doctor.address,
      note: "Entre Blvd. Belisario Domínguez y Av. Cedros",
    },
    {
      icon: FaClock,
      label: "Horario de Atención",
      value: doctor.schedule,
    },
    {
      icon: FaHospital,
      label: "Costo de Consulta",
      value: `$${doctor.consultationPrice} MXN`,
      note: "Hasta 12 Meses Sin Intereses con BBVA",
    },
    {
      icon: FaCreditCard,
      label: "Formas de Pago",
      value: doctor.paymentMethods.join(" • "),
    },
  ];

  return (
    <div className="min-h-screen bg-brand-carbon text-slate-100 py-10 px-6 relative overflow-hidden">
      <StructuredData data={schema} />

      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-8">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Ubicación & Citas" }]} isDark={true} />

        {/* ─── 1. FRANJA DE URGENCIAS ─────────────────────────────── */}
        <FadeUp className="bg-gradient-to-r from-amber-950 via-brand-panel to-brand-carbon border-2 border-amber-500/40 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl p-6 lg:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-black text-2xl flex-shrink-0 animate-pulse">
              <FaPhoneAlt />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-700/60 inline-block mb-1">
                Línea de Urgencias Traumatológicas 24/7
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white font-heading">
                Atención Inmediata para Fracturas, Luxaciones y Lesiones Agudas
              </h2>
            </div>
          </div>
          <a
            href={`tel:${doctor.emergencyPhone}`}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-brand-gold text-brand-carbon font-black text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-xl flex items-center gap-2 flex-shrink-0"
          >
            <FaPhoneAlt size={16} /> Llamar a Urgencias: {doctor.emergencyPhone}
          </a>
        </FadeUp>

        {/* ─── 2. MAPA COMO PIEZA PRINCIPAL (FULL WIDTH) ─────────────── */}
        <FadeUp delay={0.05} className="relative">
          <div className="w-full h-[420px] lg:h-[480px] rounded-[3rem] overflow-hidden border-2 border-brand-gold/40 shadow-2xl relative">
            <iframe
              title="Ubicación Exacta Consultorio Dr. Raúl Hernán Muñoz Gómez"
              src={exactPlaceMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-carbon/95 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Ficha flotante superpuesta */}
          <div className="absolute top-6 left-6 right-6 sm:right-auto sm:max-w-sm bg-brand-panel/95 backdrop-blur-md p-5 rounded-2xl border border-brand-gold/30 shadow-xl">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/30 inline-block mb-2">
              Consultorio Tuxtla Gutiérrez
            </span>
            <h3 className="text-lg font-black text-white font-heading">
              {doctor.title} {doctor.name}
            </h3>
          </div>

          {/* CTA de ruta superpuesto abajo */}
          <a
            href={doctor.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-6 left-6 right-6 sm:right-auto sm:w-auto py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-brand-gold text-brand-carbon font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-xl"
          >
            <FaDirections size={18} /> Abrir en Google Maps / Waze
          </a>
        </FadeUp>

        {/* ─── 3. FRANJA DE DATOS RÁPIDOS (4 fichas horizontales) ─────── */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <StaggerItem
                key={idx}
                className="bg-brand-panel border border-brand-border rounded-2xl p-6 hover:border-brand-gold transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center text-lg mb-4">
                  <Icon />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">
                  {fact.label}
                </p>
                <p className="text-sm font-extrabold text-white leading-snug">{fact.value}</p>
                {fact.note && <p className="text-[11px] text-slate-400 mt-1.5">{fact.note}</p>}
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* ─── 4. CTAs FINALES ─────────────────────────────────────── */}
        <FadeUp delay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="py-5 rounded-2xl bg-brand-gold text-brand-carbon font-black text-sm uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-brand-gold-light hover:scale-[1.02] transition-all shadow-xl"
          >
            <FaWhatsapp size={22} /> Confirmar Cita por WhatsApp
          </a>
          <a
            href={`tel:${doctor.phone}`}
            className="py-5 rounded-2xl bg-brand-panel text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-brand-panel-alt transition-all border border-brand-border"
          >
            <FaPhoneAlt size={18} className="text-brand-gold" /> Llamar: {doctor.phone}
          </a>
        </FadeUp>
      </div>
    </div>
  );
}
