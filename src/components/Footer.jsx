import React from "react";
import { NAV_LINKS } from "../constants";

import LogoImg from "../assets/img/profile.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-[#090514] border-t border-white/5 pt-16 pb-8 px-6 mt-20">
      {/* Efek pendaran ungu samar di latar belakang footer */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Baris Atas: Branding & Link Navigasi */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Kiri: Logo Gambar & Tagline Singkat */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <a href="#home" className="flex items-center gap-2 group">
              {/* BERHASIL DIUBAH: Menjadi bundar sempurna dengan rounded-full dan aspect-square */}
              <img
                src={LogoImg}
                alt="Logo"
                className="h-10 w-10 rounded-full aspect-square object-cover border border-white/10 group-hover:scale-105 group-hover:border-accent-purple/50 transition-all duration-300"
              />
            </a>
            <p className="text-xs text-slate-400 font-light max-w-xs leading-relaxed">
              Crafting high-performance digital experiences. Specializing in
              modern full-stack web and cross-platform mobile development
            </p>
            {/* Status Batch */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Available For Hire
            </div>
          </div>

          {/* Kanan: Navigasi Cepat */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-mono font-medium text-slate-400">
            {NAV_LINKS.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="hover:text-accent-purple transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent-purple transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            &copy; {currentYear}{" "}
            <span className="text-slate-300 font-bold">
              Fachry Rizky Wardana
            </span>
            . All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>

            <a
              href="#home"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:border-accent-purple hover:text-accent-purple hover:bg-accent-purple/10 transition-all duration-300"
              title="Back to top"
            >
              <i className="fa-solid fa-arrow-up text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
