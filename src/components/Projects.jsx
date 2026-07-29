import React from "react";
import { projects } from "../data/portfolioData";
import { ExternalLink, Sparkles } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER SECTION */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-rose-950/60 text-rose-300 border border-rose-800/40">
            <Sparkles size={14} className="text-rose-400" />
            Karya & Implementasi
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Proyek Utama
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Sistem informasi resmi dan karya analisis data yang telah
            dikembangkan dan diimplementasikan
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 border border-slate-800/80 rounded-3xl overflow-hidden hover:border-rose-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-950/20 flex flex-col justify-between group backdrop-blur-sm"
            >
              <div>
                {/* 1. CONTAINER PREVIEW GAMBAR */}
                <div className="w-full h-52 bg-slate-950 overflow-hidden relative border-b border-slate-800/80">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-950 text-slate-600 text-xs font-semibold">
                      <span>Preview Tidak Tersedia</span>
                    </div>
                  )}

                  {/* Category / Role Badge Mengambang */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-950/90 text-rose-300 border border-slate-800/80 backdrop-blur-md shadow-md">
                      {project.category || project.role}
                    </span>
                  </div>
                </div>

                {/* 2. DESKRIPSI & JUDUL PROYEK */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-rose-200 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* 3. TAGS & TOMBOL KUNJUNGI WEBSITE */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-950 text-slate-400 text-[11px] font-medium px-2.5 py-1 rounded-md border border-slate-800/80"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Tombol Tautan */}
                {project.url && project.url !== "#" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 text-xs font-bold bg-slate-800 hover:bg-rose-500 text-slate-200 hover:text-white py-2.5 px-4 rounded-xl transition-all duration-300 shadow-md group/btn"
                  >
                    Buka Website
                    <ExternalLink
                      size={14}
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
