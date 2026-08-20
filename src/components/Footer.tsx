import React from "react";
import Link from "next/link";
import { doctor } from "@/data/doctor";
import { FaShieldAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaUniversity, FaBone, FaInstagram, FaFacebookF, FaStethoscope } from "react-icons/fa";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;
  const footerLogoSrc = doctor.footerLogo || "/images/logo/Nuevo logo-03.png";

  return (
    <footer className="bg-[#0F110D] text-slate-300 pt-16 pb-12 border-t border-[#252923]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* ─── PROMINENT CENTERED WHITE LOGO SHOWCASE (NO WHITE FRAME) ───────────── */}
        <div className="text-center mb-12 border-b border-[#252923] pb-12">
          <Link href="/" className="inline-block group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={footerLogoSrc}
              alt={`Logotipo Oficial ${doctor.title} ${doctor.name}`}
              className="h-32 sm:h-44 w-auto max-w-[550px] object-contain mx-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
            />
          </Link>
          
          <h3 className="text-2xl sm:text-3xl font-black text-white mt-6 tracking-wide">
            {doctor.title} {doctor.name}
          </h3>
          <p className="text-xs sm:text-sm font-extrabold text-[#E7B93F] uppercase tracking-widest mt-1">
            {doctor.specialistTitle}
          </p>
          <p className="text-xs text-slate-400 max-w-2xl mx-auto mt-3 font-medium leading-relaxed">
            Instituto de Estudios Superiores de Chiapas (Céd. {doctor.cedula}) • Universidad Autónoma del Estado de México (Céd. {doctor.cedulaEspecialidad}) • Alta Especialidad en Artroscopia
          </p>

          {(doctor.instagramUrl || doctor.facebookUrl || doctor.doctoraliaUrl) && (
            <div className="flex items-center justify-center gap-3 mt-6">
              {doctor.instagramUrl && (
                <a
                  href={doctor.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-brand-panel border border-brand-border text-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-brand-carbon transition-colors"
                >
                  <FaInstagram size={16} />
                </a>
              )}
              {doctor.facebookUrl && (
                <a
                  href={doctor.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-brand-panel border border-brand-border text-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-brand-carbon transition-colors"
                >
                  <FaFacebookF size={16} />
                </a>
              )}
              {doctor.doctoraliaUrl && (
                <a
                  href={doctor.doctoraliaUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Doctoralia"
                  className="w-10 h-10 rounded-xl bg-brand-panel border border-brand-border text-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-brand-carbon transition-colors"
                >
                  <FaStethoscope size={16} />
                </a>
              )}
            </div>
          )}
        </div>

        {/* ─── FOOTER NAVIGATION & CONTACT COLUMNS ────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Col 1: Accesos Rápido */}
          <div>
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest mb-4 text-[#E7B93F]">
              Navegación del Sitio
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <Link href="/" className="hover:text-[#E7B93F] transition-colors">Página Principal</Link>
              </li>
              <li>
                <Link href="/enfermedades" className="hover:text-[#E7B93F] transition-colors">Enfermedades & Patologías</Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-[#E7B93F] transition-colors">Cirugías & Artroscopia</Link>
              </li>
              <li>
                <Link href="/sintomas" className="hover:text-[#E7B93F] transition-colors">Síntomas de Consulta</Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#E7B93F] transition-colors">Ubicación y Citas</Link>
              </li>
              <li>
                <Link href="/aviso-de-privacidad" className="hover:text-[#E7B93F] transition-colors">Aviso de Privacidad</Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Contacto & Dirección */}
          <div>
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest mb-4 text-[#E7B93F]">
              Consultorio & Urgencias
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-[#E7B93F] mt-0.5 flex-shrink-0" />
                <span>{doctor.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-[#E7B93F] flex-shrink-0" />
                <a href={`tel:${doctor.phone}`} className="hover:text-[#E7B93F] font-bold transition-colors">Citas: {doctor.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaWhatsapp className="text-[#E7B93F] flex-shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-[#E7B93F] font-bold transition-colors">{doctor.whatsapp}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-amber-400 flex-shrink-0 animate-pulse" />
                <a href={`tel:${doctor.emergencyPhone}`} className="hover:text-amber-400 font-bold transition-colors">Urgencias: {doctor.emergencyPhone}</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Sociedades Médicas */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest text-[#E7B93F]">
              Certificaciones & Sociedades
            </h4>
            <div className="bg-[#1A1C17] p-4 rounded-2xl border border-[#2B2F28] text-xs space-y-2">
              <p className="font-bold text-[#E7B93F]">• Consejo Mexicano de Ortopedia y Traumatología (CMOT)</p>
              <p className="font-bold text-[#E7B93F]">• AMECRA (Cirugía de Rodilla y Artroscopia)</p>
              <p className="font-bold text-[#E7B93F]">• SLARD (Sociedad Latinoamericana de Artroscopia)</p>
            </div>
            <div className="pt-1 text-[11px] text-slate-400">
              <p>Horarios: {doctor.schedule}</p>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-[#252923] text-center text-xs text-slate-500 space-y-2">
          <p>© {new Date().getFullYear()} {doctor.title} {doctor.name}. Todos los derechos reservados.</p>
          <p className="max-w-3xl mx-auto text-[11px] text-slate-600 leading-relaxed">
            La información contenida en este sitio web tiene carácter informativo e instruccional sobre traumatología y ortopedia. No sustituye la consulta quirúrgica presencial directa. Sin prescripción ni recomendación de fármacos de patente en este sitio.
          </p>
        </div>

      </div>
    </footer>
  );
}
