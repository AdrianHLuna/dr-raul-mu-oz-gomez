import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { getDiseaseIcon } from "@/lib/medicalIcons";
import type { Disease } from "@/types/schema";

export default function DiseaseCard({ disease }: { disease: Disease }) {
  const Icon = getDiseaseIcon(disease.id);

  return (
    <Link
      href={`/enfermedades/${disease.slug}`}
      className="group flex flex-col sm:flex-row items-stretch bg-brand-panel border border-brand-border rounded-3xl overflow-hidden hover:border-brand-gold transition-all duration-300 shadow-lg hover:shadow-2xl"
    >
      {/* Contenedor de Imagen o Icono */}
      <div className="relative w-full sm:w-40 h-48 sm:h-auto flex-shrink-0 bg-brand-panel-alt overflow-hidden border-b sm:border-b-0 sm:border-r border-brand-border">
        {disease.image ? (
          <Image
            src={disease.image}
            alt={disease.name}
            fill
            sizes="(max-width: 640px) 100vw, 160px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-brand-gold text-3xl group-hover:bg-brand-gold group-hover:text-brand-carbon transition-colors min-h-[120px]">
            <Icon />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-carbon/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-brand-panel/30 pointer-events-none" />
      </div>

      {/* Contenido textual */}
      <div className="p-6 flex flex-col justify-center flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-black text-white mb-2 group-hover:text-brand-gold transition-colors font-heading leading-snug">
          {disease.name}
        </h3>
        <p className="text-slate-300 text-xs leading-relaxed font-medium line-clamp-2">
          {disease.shortDescription}
        </p>
      </div>

      {/* Indicador con flecha */}
      <div className="hidden sm:flex w-12 flex-shrink-0 items-center justify-center text-slate-600 group-hover:text-brand-gold group-hover:translate-x-1 transition-all pr-2">
        <FaArrowRight />
      </div>
    </Link>
  );
}

