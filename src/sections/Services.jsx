import React from "react";
import { SERVICES } from "../constants";

export default function Services() {
  const icons = [
    "fa-laptop-code", 
    "fa-mobile-button",
    "fa-solid fa-layer-group", 
  ];

  return (
    <section
      id="services"
      className="py-24 max-w-6xl mx-auto px-6 relative z-10"
    >
      <div className="flex flex-col items-start mb-16 text-left space-y-2">
        <span className="text-xs font-mono font-bold text-accent-purple uppercase tracking-widest bg-accent-purple/10 px-3 py-1 rounded-full border border-accent-purple/20">
          available for
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Services I Offer
        </h2>
      </div>

      <div className="grid md:grid-cols-12 gap-6">
        {SERVICES.map((srv, idx) => {
          const colSpan =
            idx === 0
              ? "md:col-span-7"
              : idx === 1
                ? "md:col-span-5"
                : "md:col-span-12";

          return (
            <div
              key={srv.id}
              className={`glass-card p-8 rounded-[32px] ${colSpan} flex flex-col justify-between gap-8 transition-all duration-500 group relative overflow-hidden bg-gradient-to-br from-[#140b27]/40 to-transparent hover:translate-y-[-4px]`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex justify-between items-start w-full">
                <div className="w-12 h-12 rounded-2xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple text-xl group-hover:bg-accent-purple group-hover:text-white transition-all duration-300">
                  <i className={`fa-solid ${icons[idx] || "fa-code"}`}></i>
                </div>
                <span className="text-sm font-mono font-bold text-white/20 group-hover:text-accent-purple transition-colors">
                  // {srv.id}
                </span>
              </div>

              <div className="space-y-2 text-left">
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-accent-purple transition-colors">
                  {srv.title}
                </h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed max-w-xl">
                  {srv.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
