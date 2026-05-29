import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS, PROFILE } from "../constants";
import avatarImg from "../assets/img/profile.png";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 w-full z-50 px-4 transition-all duration-300">
      <nav
        className={`max-w-4xl mx-auto rounded-full py-2 px-3 sm:px-6 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-[#120b24]/70 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-[#161616]/40 backdrop-blur-lg border border-white/5 shadow-lg"
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 relative group-hover:border-lime-400 transition-colors duration-300 shadow-md">
            <img
              src={avatarImg}
              alt={PROFILE.name}
              className="w-full h-full object-cover"
            />
          </div>
        </a>

        <div className="flex items-center bg-black/20 rounded-full p-1 border border-white/5 relative">
          {NAV_LINKS.map((link, i) => {
            const isActive = activeLink === link.href;
            return (
              <a
                key={i}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide relative transition-colors duration-300 ${
                  isActive
                    ? "text-white font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active_nav_pill"
                    className="absolute inset-0 bg-[#18181c] border border-white/5 rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        <div>
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white text-xs font-sans font-extrabold uppercase tracking-wider shadow-lg shadow-lime-400/10 hover:shadow-lime-400/30 hover:scale-[1.03] transition-all duration-300 gap-1.5"
          >
            <i className="fa-solid fa-file-pdf text-xs"></i> CV
          </a>
        </div>
      </nav>
    </div>
  );
}
