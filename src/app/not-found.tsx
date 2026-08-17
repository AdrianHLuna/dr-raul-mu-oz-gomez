import React from "react";
import Link from "next/link";
import { FaLungs, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 rounded-full bg-[#0A192F] text-[#00A896] flex items-center justify-center mb-6 shadow-xl">
        <FaLungs size={40} />
      </div>
      <h1 className="text-4xl font-black text-[#0A192F] mb-3">Página No Encontrada (404)</h1>
      <p className="text-slate-600 text-sm max-w-md mb-8">
        La sección o consulta médica que intentas buscar no existe o ha sido reubicada.
      </p>
      <Link
        href="/"
        className="px-6 py-3.5 rounded-2xl bg-[#00A896] text-[#0A192F] font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:bg-[#02C39A] transition-all"
      >
        <FaHome size={16} /> Volver al Inicio
      </Link>
    </div>
  );
}
