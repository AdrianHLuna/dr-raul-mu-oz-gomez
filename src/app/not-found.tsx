import React from "react";
import Link from "next/link";
import { FaBone, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 rounded-full bg-brand-panel text-brand-gold flex items-center justify-center mb-6 shadow-xl">
        <FaBone size={40} />
      </div>
      <h1 className="text-4xl font-black text-brand-panel mb-3 font-heading">Página No Encontrada (404)</h1>
      <p className="text-slate-600 text-sm max-w-md mb-8">
        La sección o consulta médica que intentas buscar no existe o ha sido reubicada.
      </p>
      <Link
        href="/"
        className="px-6 py-3.5 rounded-2xl bg-brand-gold text-brand-carbon font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:bg-brand-gold-light transition-all"
      >
        <FaHome size={16} /> Volver al Inicio
      </Link>
    </div>
  );
}
