import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EXPERIENCE, STACK_CATEGORIES } from "../constants";

export default function About() {
  const [activeExp, setActiveExp] = useState(null);

  const toggleExperience = (id) => {
    setActiveExp(activeExp === id ? null : id);
  };

  return (
    <section
      id="experience"
      className="py-24 max-w-6xl mx-auto px-6 relative z-10 space-y-32"
    >
      <div className="space-y-8">
        <div className="flex flex-col text-left space-y-1">
          <span className="text-xs font-mono font-bold text-accent-purple uppercase tracking-widest bg-accent-purple/10 px-3 py-1 rounded-full border border-accent-purple/20 w-max">
            History
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            My Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {EXPERIENCE.map((exp) => {
            const isOpen = activeExp === exp.id;
            return (
              <div
                key={exp.id}
                onClick={() => toggleExperience(exp.id)}
                className={`glass-card p-6 rounded-[24px] border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isOpen
                    ? "border-accent-purple/60 shadow-[0_0_25px_rgba(135,80,247,0.25)] bg-[#1e103a]/30"
                    : "border-white/5 hover:border-accent-purple/30 bg-[#110724]/20"
                }`}
              >
                <div className="space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-accent-purple bg-accent-purple/10 px-2 py-0.5 rounded-md border border-accent-purple/20">
                      {exp.date}
                    </span>
                    <i
                      className={`fa-solid fa-chevron-down text-xs text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-accent-purple" : ""}`}
                    ></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-slate-400 text-xs font-light mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Panel Detail */}
        <AnimatePresence>
          {EXPERIENCE.map((exp) => {
            const isOpen = activeExp === exp.id;
            if (!isOpen) return null;
            return (
              <motion.div
                key={`detail-${exp.id}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden mt-6"
              >
                <div className="glass-card rounded-[32px] p-6 md:p-8 border border-accent-purple/20 bg-gradient-to-r from-[#140b27] to-[#090514] shadow-2xl grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-4 w-full aspect-video md:aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                    <img
                      src={exp.image}
                      alt={exp.role}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-8 space-y-4 text-left">
                    <div>
                      <h3 className="text-2xl font-extrabold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2 mt-1">
                        <i className="fa-solid fa-building text-xs text-accent-purple"></i>{" "}
                        {exp.company}
                      </h4>
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono flex items-center gap-2 bg-white/5 py-1 px-3 rounded-md w-max border border-white/5">
                      <i className="fa-solid fa-location-dot text-pink-500"></i>{" "}
                      {exp.location}
                    </div>
                    <div className=" bg-white/5 w-full h-[1px]"></div>
                    <p className="text-slate-300 text-sm font-light leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="space-y-12 pt-8 relative">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-2">
          <span className="text-xs font-mono font-bold text-accent-purple uppercase tracking-widest bg-accent-purple/10 px-3 py-1 rounded-full border border-accent-purple/20 w-max">
            Stack
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Core Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 relative">
          {STACK_CATEGORIES.map((category, i) => (
            <div
              key={i}
              className="glass-card p-8 md:p-10 rounded-[24px] border border-white/5 bg-[#110724]/30 backdrop-blur-md text-left hover:border-orange-500/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Judul Kategori Utama */}
                <h3 className="text-xl md:text-2xl font-black text-white tracking-wide mb-8 font-sans">
                  {category.title}
                </h3>

                {/* Daftar Keahlian */}
                <ul className="space-y-5">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3.5 text-slate-300 font-medium text-sm md:text-base tracking-wide"
                    >
                      <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] flex-shrink-0"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
