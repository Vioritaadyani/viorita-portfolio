import React from "react";
import { experiences } from "../data/portfolioData";
import { CheckCircle2 } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Pengalaman Kerja & Magang
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative"
            >
              <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-blue-400 text-sm font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs font-semibold bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.achievements.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-slate-400 text-sm"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-teal-400 shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
