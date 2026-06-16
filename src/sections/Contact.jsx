import React, { useState } from "react";
import { PROFILE } from "../constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-24 max-w-6xl mx-auto px-6 relative z-10"
    >
      <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
        <div className="relative p-8 md:p-12 rounded-[32px] border border-white/10 bg-[#160d2f]/30 backdrop-blur-xl flex flex-col justify-between text-left shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 border border-purple-500/20 rounded-[32px] pointer-events-none group-hover:border-purple-500/40 transition-colors duration-500"></div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Get in Touch
            </h2>
            <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed max-w-sm">
              Let's discuss building high-performance web and mobile
              applications. I'm ready to help transform your ideas into
              responsive, database-integrated, and ready-to-use digital
              solutions.
            </p>
          </div>

          <div className="space-y-5 pt-8 md:pt-0">
            <a
              href={`mailto:${PROFILE.email || "fachry.bussines@gmail.com"}`}
              className="flex items-center gap-4 text-slate-300 hover:text-accent-purple transition-colors group/link text-sm font-mono"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-purple group-hover/link:bg-accent-purple group-hover/link:text-white transition-all">
                <i className="fa-solid fa-envelope"></i>
              </div>
              {PROFILE.email || "fachry.bussines@gmail.com"}
            </a>

            <div className="flex items-center gap-4 text-slate-300 text-sm font-mono">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-500">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              Jakarta, Indonesia
            </div>

            <a
              href="https://wa.me/+62 857-1068-2108"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors group/link text-sm font-mono"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover/link:bg-emerald-500 group-hover/link:text-white transition-all">
                <i className="fa-solid fa-phone"></i>
              </div>
              +62 857-1068-2108
            </a>
          </div>
        </div>

        <div className="relative p-8 md:p-12 rounded-[32px] border border-white/10 bg-[#160d2f]/30 backdrop-blur-xl shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 border border-purple-500/20 rounded-[32px] pointer-events-none group-hover:border-purple-500/40 transition-colors duration-500"></div>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="space-y-1">
              <input
                type="text"
                placeholder="Your Name*"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-accent-purple focus:bg-white/10 transition-all"
              />
            </div>

            <div className="space-y-1">
              <input
                type="email"
                placeholder="Email Address*"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-accent-purple focus:bg-white/10 transition-all"
              />
            </div>

            <div className="space-y-1">
              <input
                type="url"
                placeholder="Your Website (Optional)"
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-accent-purple focus:bg-white/10 transition-all"
              />
            </div>

            <div className="space-y-1">
              <textarea
                rows="4"
                placeholder="Write your message..."
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-accent-purple focus:bg-white/10 transition-all resize-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-accent-purple hover:bg-accent-purple/90 text-white text-sm font-mono font-bold tracking-wider active:scale-[0.99] transition-all shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/40 uppercase"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
