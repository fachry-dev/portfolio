import React, { useState } from "react";
import { CERTIFICATIONS } from "../constants";

export default function Certifications() {
  const [activeCertImg, setActiveCertImg] = useState(null);

  return (
    <section
      id="certifications"
      className="py-24 max-w-6xl mx-auto px-6 relative z-10"
    >
      {/* Header Section */}
      <div className="flex flex-col text-left space-y-1 mb-12">
        <span className="text-xs font-mono font-bold text-accent-purple uppercase tracking-widest bg-accent-purple/10 px-3 py-1 rounded-full border border-accent-purple/20 w-max">
          Badges
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Certifications
        </h2>
      </div>

      {/* Grid Layout Card */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setActiveCertImg(cert.certImg)}
            className="p-6 md:p-8 rounded-[28px] border border-white/10 bg-[#140b27]/40 backdrop-blur-xl hover:border-accent-purple/40 hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between group shadow-xl cursor-pointer"
          >
            <div className="space-y-4">
              {/* Baris Atas: Icon Medali & Tanggal */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-xl text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all duration-300">
                  <i className="fa-solid fa-award"></i>
                </div>
                <span className="text-xs font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                  {cert.date}
                </span>
              </div>

              {/* Judul & Penerbit */}
              <div className="text-left space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-accent-purple transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-slate-400 text-sm font-light">
                  {cert.issuer}
                </p>
                {cert.credentialId && (
                  <p className="text-[11px] font-mono text-slate-500 pt-1">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {cert.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tombol Aksi Tautan Kredensial */}
            <div className="pt-6 mt-6 border-t border-white/5 flex text-left">
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent-purple hover:text-white transition-colors group/btn"
              >
                Verify Credential
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      {activeCertImg && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveCertImg(null)}
        >
          {/* Tombol Close Silang */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl transition-colors w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
            onClick={() => setActiveCertImg(null)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* Konten Gambar Sertifikat */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeCertImg}
              alt="Certificate Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-white/10 shadow-2xl shadow-black/50 transition-transform duration-300 scale-100"
            />
          </div>
        </div>
      )}
    </section>
  );
}
