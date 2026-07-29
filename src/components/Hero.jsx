import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 lg:px-16 py-12 sm:py-16 overflow-hidden bg-[#0a0f1d]">
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* SISI KIRI: Teks & Informasi */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Badge Prestasi */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-medium backdrop-blur-md shadow-sm">
            <span
              className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
              aria-hidden="true"
            />
            <span>Peserta Magang Terbaik Kemnaker 2026</span>
          </div>

          {/* Heading Nama & Title */}
          <div className="space-y-2">
            <h2 className="text-xl lg:text-2xl font-medium text-gray-300">
              Halo, Saya
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
                Viorita Adnyani,
              </span>{" "}
              <span className="text-cyan-400">S.Kom.</span>
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-cyan-200/80 pt-1">
              Full Stack Developer <span className="text-gray-500 mx-1">|</span>{" "}
              Web Developer <span className="text-gray-500 mx-1">|</span> Data
              Analyst
            </p>
          </div>

          {/* Deskripsi */}
          <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
            Lulusan S1 Teknologi Informasi Universitas Bosowa (
            <span className="text-cyan-300 font-semibold">IPK 3.88</span>)
            dengan pengalaman praktis di bidang pengembangan web, sistem
            informasi, serta pengolahan & visualisasi data. Terbukti berprestasi
            sebagai Peserta Magang Terbaik Program MagangHub Kemnaker 2026.
          </p>

          {/* Lokasi */}
          <div className="flex items-center gap-2 text-sm text-slate-400 pt-1">
            <svg
              className="w-4 h-4 text-cyan-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Makassar, Sulawesi Selatan</span>
          </div>

          {/* Tombol CTA */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#proyek"
              className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1d]"
            >
              Lihat Proyek
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>

            <a
              href="#kontak"
              className="px-6 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-200 font-semibold hover:border-cyan-500/50 hover:bg-slate-800 transition-all flex items-center gap-2 backdrop-blur-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1d]"
            >
              Hubungi Saya
              <svg
                className="w-4 h-4 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* SISI KANAN: Card Foto Profil Modern */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-sm">
            {/* Effect Glow belakang card */}
            <div
              aria-hidden="true"
              className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"
            />

            <div className="relative p-8 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl flex flex-col items-center text-center shadow-2xl">
              {/* Foto Profil */}
              <div className="relative w-36 h-36 mb-6 rounded-full overflow-hidden ring-4 ring-cyan-500/30 bg-slate-800 shadow-xl shadow-cyan-950/30">
                {/* 
                  UBAH DI SINI: 
                  src sekarang menunjuk langsung ke "/profil-vio.png" 
                */}
                <img
                  src="/profil-vio.png"
                  alt="Viorita Adnyani, S.Kom."
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* Teks Profil */}
              <h3 className="text-xl font-bold text-white tracking-wide">
                VIORITA ADNYANI
              </h3>
              <p className="text-sm text-cyan-400 font-medium mt-1">
                S1 Teknologi Informasi
              </p>

              {/* Badge Skills */}
              <div className="flex flex-wrap justify-center gap-2 mt-6 pt-6 border-t border-slate-800/80 w-full">
                {["React", "Tailwind", "Node.js", "Data Analytics"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/80 hover:border-cyan-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
