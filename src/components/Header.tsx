"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { doctor } from "@/data/doctor";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaCalendarCheck, 
  FaBars, 
  FaTimes,
  FaMapMarkerAlt
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Enfermedades", href: "/enfermedades" },
    { name: "Cirugías & Procedimientos", href: "/servicios" },
    { name: "Síntomas", href: "/sintomas" },
    { name: "Ubicación y Citas", href: "/contacto" },
  ];

  const headerLogoSrc = doctor.logo || "/images/logo/Nuevo logo-06.png";

  return (
    <header className="sticky top-0 z-50 bg-[#0F110D] border-b border-[#252923] text-white shadow-2xl">
      
      {/* Top Bar for Emergencies and Location */}
      <div className="bg-[#090A08] py-2 px-6 border-b border-[#1E221B] text-xs font-semibold hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-300">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-amber-400 font-bold">
              <FaPhoneAlt className="animate-pulse text-[#E7B93F]" /> Urgencias Traumatológicas 24/7:{" "}
              <a href={`tel:${doctor.emergencyPhone}`} className="hover:underline text-white font-black">{doctor.emergencyPhone}</a>
            </span>
            <span className="flex items-center gap-2 text-slate-400">
              <FaMapMarkerAlt className="text-[#E7B93F]" /> Tuxtla Gutiérrez, Chiapas
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-bold">
            <span>Céd. Ortopedia: {doctor.cedulaEspecialidad}</span>
            <span className="text-[#E7B93F]">|</span>
            <span className="text-emerald-400 flex items-center gap-1.5 font-extrabold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              Consultorio Abierto
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO IMAGE + BRAND TEXT (Ocupando todo el espacio con estética premium) */}
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group py-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={headerLogoSrc}
            alt={`Logotipo Oficial ${doctor.title} ${doctor.name}`}
            className="h-14 sm:h-18 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
          />
          <div className="flex flex-col justify-center">
            <span className="text-white text-base sm:text-xl md:text-2xl font-black tracking-tight leading-tight group-hover:text-[#E7B93F] transition-colors">
              {doctor.title} {doctor.name}
            </span>
            <span className="text-[#E7B93F] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider leading-tight mt-0.5">
              Reemplazos Articulares y Artroscopia
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-[#E7B93F] text-[#1A1C17] shadow-lg shadow-[#E7B93F]/20"
                    : "text-slate-200 hover:text-[#E7B93F] hover:bg-[#1A1C17]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Header Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-[#E7B93F] text-[#1A1C17] font-black text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-amber-300 hover:scale-105 transition-all shadow-xl"
          >
            <FaCalendarCheck size={15} /> Agendar Cita
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-3 rounded-xl bg-[#1A1C17] text-white hover:bg-[#E7B93F] hover:text-[#1A1C17] transition-colors border border-[#252923]"
          aria-label="Menú principal"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#090A08] border-t border-[#252923] px-6 py-6 space-y-3"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-extrabold transition-all ${
                    isActive
                      ? "bg-[#E7B93F] text-[#1A1C17]"
                      : "text-slate-300 hover:bg-[#1A1C17] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-[#252923] space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-xl bg-[#E7B93F] text-[#1A1C17] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <FaWhatsapp size={18} /> Agendar Cita WhatsApp
              </a>
              <a
                href={`tel:${doctor.emergencyPhone}`}
                className="w-full py-4 rounded-xl bg-amber-950/60 text-amber-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-amber-500/30"
              >
                <FaPhoneAlt size={14} /> Urgencias 24/7: {doctor.emergencyPhone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
