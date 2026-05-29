import React from "react";
import StackCard from "../components/StackCard";
import { STACK_CATEGORIES } from "../constants";

export default function Stack() {
  return (
    <section id="stack" className="py-24 max-w-6xl mx-auto px-6 relative z-10">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center space-y-2 mb-16 relative">
        <div className="absolute right-4 top-0 w-5 h-5 rounded-full border border-orange-500/40 flex items-center justify-center hidden md:flex">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
        </div>

        <span className="text-xs font-mono font-bold text-accent-purple uppercase tracking-widest bg-accent-purple/10 px-3 py-1 rounded-full border border-accent-purple/20 w-max">
          STACK
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Core Technical Skills
        </h2>
      </div>

      {/* Grid Layout 3 Kolom Menyesuaikan Kategori */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {STACK_CATEGORIES.map((category, index) => (
          <StackCard
            key={index}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
}
