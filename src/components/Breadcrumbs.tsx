import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  isDark?: boolean;
}

export default function Breadcrumbs({ items, isDark = false }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-2 text-xs font-semibold">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li key={idx} className="flex items-center gap-2">
              {idx > 0 && <FaChevronRight size={10} className="text-brand-gold" />}
              {isLast || !item.href ? (
                <span
                  className={
                    isDark
                      ? "text-white font-extrabold underline decoration-brand-gold decoration-2 underline-offset-4"
                      : "text-brand-panel font-bold underline decoration-brand-gold decoration-2 underline-offset-4"
                  }
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={
                    isDark
                      ? "text-slate-300 hover:text-white transition-colors"
                      : "text-slate-500 hover:text-brand-panel transition-colors"
                  }
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
