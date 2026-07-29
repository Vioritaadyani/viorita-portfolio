import React from "react";
import { skills } from "../data/portfolioData";
import { Code, Database, Brain } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Keahlian & Teknologi
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
            <div className="flex items-center gap-3 mb-6 text-blue-400">
              <Code size={28} />
              <h3 className="text-xl font-bold text-white">Web Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.webDev.map((item, i) => (
                <span
                  key={i}
                  className="bg-slate-700/50 text-slate-200 px-3 py-1.5 rounded-lg text-sm border border-slate-600/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
            <div className="flex items-center gap-3 mb-6 text-emerald-400">
              <Database size={28} />
              <h3 className="text-xl font-bold text-white">Data & Analytics</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.dataAnalytics.map((item, i) => (
                <span
                  key={i}
                  className="bg-slate-700/50 text-slate-200 px-3 py-1.5 rounded-lg text-sm border border-slate-600/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
            <div className="flex items-center gap-3 mb-6 text-purple-400">
              <Brain size={28} />
              <h3 className="text-xl font-bold text-white">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.softSkills.map((item, i) => (
                <span
                  key={i}
                  className="bg-slate-700/50 text-slate-200 px-3 py-1.5 rounded-lg text-sm border border-slate-600/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
