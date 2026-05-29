import React, { useState, useEffect } from "react"; // WAJIB SEPERTI INI
import Typewriter from "typewriter-effect";
import { TYPING_WORDS, PROFILE } from "../constants";
import profileImg from "../assets/img/profile.png";

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleHeroScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleHeroScroll);
    return () => window.removeEventListener("scroll", handleHeroScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 px-6 overflow-hidden"
    >
      <div className="purple-glow top-[-10%] right-[-10%]"></div>
      <div className="purple-glow bottom-[10%] left-[-10%]"></div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center z-10 py-12">
        {/* Kolom Kiri: Deskripsi & Tombol Aksi */}
        <div className="md:col-span-7 space-y-6 text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight min-h-[120px] md:min-h-[160px]">
            I'm a <br />
            <span className="bg-gradient-to-r from-accent-purple to-indigo-400 bg-clip-text text-transparent inline-block">
              <Typewriter
                options={{
                  strings: TYPING_WORDS,
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  wrapperClassName: "typing-cursor",
                }}
              />
            </span>
          </h1>

          <p className="text-slate-400 font-light text-base md:text-lg leading-relaxed max-w-xl">
            Building scalable web and mobile products powered by clean
            architecture, efficient backends, and premium interfaces.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-purple to-indigo-600 font-bold text-sm text-white shadow-lg shadow-accent-purple/20 hover:translate-y-[-2px] transition-all tracking-wider uppercase flex items-center gap-2"
            >
              <i className="fa-solid text-base"></i> View My Projects
            </a>

            <div className="flex gap-3 ml-2">
              <a
                href="https://github.com/fachry-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-accent-purple hover:text-accent-purple transition-all bg-white/5"
              >
                <i className="fa-brands fa-github text-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/fachrywardana/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-accent-purple hover:text-accent-purple transition-all bg-white/5"
              >
                <i className="fa-brands fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Card Foto Interaktif Glassmorphism */}
        <div className="md:col-span-5 flex justify-center relative">
          <div className="w-72 h-80 md:w-80 md:h-96 rounded-[30px] bg-gradient-to-b from-accent-purple/40 to-transparent p-[1px] rotate-[4deg] hover:rotate-0 transition-all duration-500 shadow-xl shadow-black/20">
            <div className="w-full h-full bg-[#140b27]/40 backdrop-blur-xl rounded-[29px] overflow-hidden flex items-center justify-center border border-white/10 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/10 via-transparent to-transparent opacity-60 pointer-events-none z-10" />
              <img
                src={profileImg}
                alt="Fachry Rizky"
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  isScrolled
                    ? "grayscale-0 contrast-100 scale-100"
                    : "grayscale contrast-125 scale-[1.02] opacity-80"
                } group-hover:grayscale-0 group-hover:scale-105`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
