import { FaQuoteLeft, FaStar } from "react-icons/fa";
import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative bg-brand-panel-alt rounded-[2rem] p-8 pt-12 border border-brand-border overflow-hidden">
      <FaQuoteLeft className="absolute top-5 left-6 text-brand-gold/15 text-6xl" />
      <div className="relative z-10 space-y-4">
        <div className="flex gap-1 text-brand-gold">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} size={13} />
          ))}
        </div>
        <p className="text-slate-100 text-sm italic font-medium leading-relaxed">
          &ldquo;{testimonial.comment}&rdquo;
        </p>
        <div className="pt-3 border-t border-dashed border-brand-border flex items-center justify-between text-xs">
          <div>
            <p className="font-black text-white">{testimonial.name}, {testimonial.age} años</p>
            <p className="text-brand-gold font-bold">{testimonial.treatment}</p>
          </div>
          <span className="text-slate-500 font-bold whitespace-nowrap">{testimonial.date}</span>
        </div>
      </div>
    </div>
  );
}
