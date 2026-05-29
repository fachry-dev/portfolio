import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="glass-card rounded-[24px] overflow-hidden group transition-all duration-500 relative flex flex-col justify-between h-full bg-[#110724]/20 border border-white/5 hover:border-accent-purple/40">
      <div>
        <div className="overflow-hidden aspect-[16/10] relative">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090514] via-[#2a1454]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        </div>

        {/* Konten Teks */}
        <div className="p-6 text-left space-y-2">
          <span className="text-[10px] font-mono font-bold text-accent-purple uppercase tracking-widest bg-accent-purple/10 px-2.5 py-0.5 rounded-md border border-accent-purple/15">
            {project.category}
          </span>
          <h3 className="text-xl font-bold text-white tracking-tight pt-1 group-hover:text-accent-purple transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-xs font-light leading-relaxed">
            {project.desc}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-6 justify-start px-6">
          {project.tags &&
            project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-[10px] font-mono font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-md tracking-wider"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>

      {/* Footer Aksi Card */}
      <div className="p-6 pt-0 flex justify-between items-center text-xs font-mono border-t border-white/5 mt-4">
        <a
          href="#"
          className="text-accent-purple font-bold flex items-center gap-1 hover:underline"
        >
          Live Demo{" "}
          <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
        </a>
        <a
          href="#"
          className="text-slate-500 hover:text-white transition-colors"
        >
          <i className="fa-brands fa-github text-sm"></i> Code
        </a>
      </div>
    </div>
  );
}
