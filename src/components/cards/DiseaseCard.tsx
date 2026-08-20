import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { getDiseaseIcon } from "@/lib/medicalIcons";
import type { Disease } from "@/types/schema";

export default function DiseaseCard({ disease }: { disease: Disease }) {
  const Icon = getDiseaseIcon(disease.id);

  return (
    <Link
      href={`/enfermedades/${disease.slug}`}
      className="group flex items-stretch bg-brand-panel border border-brand-border rounded-3xl overflow-hidden hover:border-brand-gold transition-colors"
    >
      <div className="w-20 sm:w-24 flex-shrink-0 flex items-center justify-center bg-brand-panel-alt border-r border-brand-border text-brand-gold text-3xl group-hover:bg-brand-gold group-hover:text-brand-carbon transition-colors">
        <Icon />
      </div>
      <div className="p-6 flex flex-col justify-center flex-1 min-w-0">
        <h3 className="text-lg font-black text-white mb-1.5 group-hover:text-brand-gold transition-colors font-heading">
          {disease.name}
        </h3>
        <p className="text-slate-400 text-xs leading-relaxed font-medium line-clamp-2">
          {disease.shortDescription}
        </p>
      </div>
      <div className="w-12 flex-shrink-0 flex items-center justify-center text-slate-600 group-hover:text-brand-gold transition-colors">
        <FaArrowRight />
      </div>
    </Link>
  );
}
