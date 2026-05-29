import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../constants";

export default function Projetcs() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Web", "Mobile"];

  const filtered =
    activeTab === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="py-24 max-w-6xl mx-auto px-6 relative z-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-accent-purple uppercase tracking-widest bg-accent-purple/10 px-3 py-1 rounded-full border border-accent-purple/20">
            My Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            My Recent Works
          </h2>
        </div>

        <div className="flex rounded-2xl bg-[#140b27]/60 p-1 border border-white/5 font-mono text-xs w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl font-bold transition-all duration-300 uppercase tracking-wider ${
                activeTab === tab
                  ? "bg-accent-purple text-white shadow-lg shadow-accent-purple/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
