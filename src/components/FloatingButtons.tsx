"use client";

import React from "react";
import { doctor } from "@/data/doctor";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingButtons() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Phone Button */}
      <motion.a
        href={`tel:${doctor.phone}`}
        whileHover={{ scale: 1.1, x: -4 }}
        whileTap={{ scale: 0.95 }}
        className="w-13 h-13 rounded-full bg-[#0A192F] text-[#00A896] border border-[#00A896]/50 flex items-center justify-center shadow-xl hover:bg-[#172A45] transition-colors"
        title="Llamar directamente al consultorio"
      >
        <FaPhoneAlt size={20} />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1, x: -4 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:bg-emerald-600 transition-colors relative group"
        title="WhatsApp directo"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
        <FaWhatsapp size={30} className="relative z-10" />
      </motion.a>
    </div>
  );
}
