"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { getServiceIcon } from "@/lib/medicalIcons";
import { hoverLiftProps } from "@/components/Animations";
import type { Service } from "@/types/schema";

export default function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  const Icon = getServiceIcon(service.id);

  return (
    <motion.div
      {...hoverLiftProps}
      className={`group relative bg-brand-panel border border-brand-border
                 rounded-tl-[3rem] rounded-tr-xl rounded-br-[3rem] rounded-bl-xl
                 pt-10 pb-8 px-7 flex flex-col justify-between
                 hover:border-brand-gold transition-colors ${featured ? "lg:pt-14 lg:pb-10" : ""}`}
    >
      <div
        className={`absolute -top-6 left-7 flex items-center justify-center rounded-2xl bg-brand-gold
                   text-brand-carbon shadow-lg shadow-brand-gold/30 rotate-3
                   group-hover:rotate-0 transition-transform ${featured ? "w-20 h-20 text-3xl" : "w-16 h-16 text-2xl"}`}
      >
        <Icon />
      </div>

      <div className="mt-6">
        <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-full border border-brand-gold/30">
          {service.isSurgical ? "Cirugía Articular" : "Procedimiento"}
        </span>
        <h3 className={`font-black text-white mt-4 mb-3 leading-snug group-hover:text-brand-gold transition-colors font-heading ${featured ? "text-2xl lg:text-3xl" : "text-xl"}`}>
          {service.name}
        </h3>
        <p className="text-slate-300 text-xs leading-relaxed font-medium">
          {service.shortDescription}
        </p>
      </div>

      <Link
        href={`/servicios/${service.slug}`}
        className="mt-6 w-full py-3.5 px-5 rounded-2xl bg-brand-panel-alt text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-between border border-brand-border group-hover:bg-brand-gold group-hover:text-brand-carbon transition-all"
      >
        <span>Ver Ficha</span>
        <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
