import React from 'react';
import { motion } from 'motion/react';
import { Download, BookOpen, Briefcase, Award, Cpu, Globe, ArrowRight } from 'lucide-react';
import { 
  educationList, 
  experienceList, 
  certificationsList, 
  skillGroups, 
  languages, 
  personalInfo 
} from '../data';

export default function ResumeTab() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 md:py-20" id="resume-tab">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Area with Title & Download CV */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-8 gap-4" id="resume-header">
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight font-sans">
              Resume
            </h1>
            <p className="text-sm text-gray-500 mt-1 font-mono">
              Professional & Academic Journey
            </p>
          </div>
          <button
            onClick={handlePrint}
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold text-xs tracking-wider uppercase rounded-full shadow-md hover:bg-blue-700 transition-all duration-200"
            id="btn-download-cv"
          >
            <Download className="mr-2 h-4 w-4" />
            Print / Save CV
          </button>
        </div>

        {/* Professional Summary Section */}
        <section className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm space-y-4" id="resume-summary">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-xs"></div>
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider font-sans">
              Professional Summary
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed font-sans text-sm md:text-base">
            Motivated ECE undergraduate (B.Tech 2023–Present) transitioning into software development, combining strong hardware-analytical skills with hands-on experience in Python, SQL, and front-end technologies. Proven track record of applying engineering fundamentals to real-world IoT and embedded systems projects. Fast learner who writes clean, efficient code and thrives on problem-solving. Eager to contribute to a dynamic software team and grow through impactful, production-grade work.
          </p>
        </section>

        {/* Experience Section (Wix Layout style) */}
        <section className="space-y-6" id="resume-experience">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-3 h-3 bg-blue-600 rounded-xs"></div>
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider font-sans">
              Training & Internships
            </h2>
          </div>

          <div className="space-y-6" id="experience-list">
            {experienceList.map((exp, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-xs hover:shadow-sm transition-shadow"
                id={`exp-card-${index}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                  {/* Left Column: Dates & Role */}
                  <div className="md:col-span-4 space-y-2">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full uppercase tracking-wider">
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 font-sans mt-2">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 font-sans">
                      {exp.organization}
                    </p>
                  </div>

                  {/* Right Column: Description */}
                  <div className="md:col-span-8">
                    <ul className="space-y-3">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600 leading-relaxed font-sans">
                          <span className="text-blue-600 mr-2.5 mt-1 text-xs">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-6" id="resume-education">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-3 h-3 bg-blue-600 rounded-xs"></div>
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider font-sans">
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="education-grid">
            {educationList.map((edu, index) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-xs flex flex-col justify-between"
                id={`edu-card-${index}`}
              >
                <div className="space-y-4">
                  <span className="text-xs font-bold text-blue-600 font-mono tracking-widest uppercase">
                    {edu.period}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 leading-snug font-sans">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed">
                    {edu.institution}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 uppercase font-mono tracking-wider">Score</span>
                  <span className="text-sm font-black text-blue-600 font-mono">{edu.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Skills & Languages Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8" id="resume-skills-languages">
          {/* Skills Column */}
          <div className="md:col-span-8 space-y-6" id="skills-sub-section">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-xs"></div>
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider font-sans">
                Technical Skills
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white rounded-xl p-6 border border-gray-100 shadow-xs" id="skills-grid">
              {skillGroups.map((group, index) => (
                <div key={index} className="space-y-3" id={`skill-group-${index}`}>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">
                    {group.category}
                  </h3>
                  <div className="space-y-2">
                    {group.skills.map((skill, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700 font-sans" id={`skill-item-${index}-${i}`}>
                        {/* Blue square bullet list from Wix screenshot */}
                        <div className="w-2.5 h-2.5 bg-blue-600 mr-2 flex-shrink-0"></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Column */}
          <div className="md:col-span-4 space-y-6" id="languages-sub-section">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-xs"></div>
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider font-sans">
                Languages
              </h2>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-xs space-y-4 h-full" id="languages-card">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">
                Proficiency Levels
              </p>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700 font-sans" id={`lang-item-${index}`}>
                    {/* Blue square bullet list from Wix screenshot */}
                    <div className="w-2.5 h-2.5 bg-blue-600 mr-2.5 flex-shrink-0"></div>
                    <span>{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="space-y-6 animate-fade-in" id="resume-certifications">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-xs"></div>
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider font-sans">
              Certifications & Badges
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="certifications-grid">
            {certificationsList.map((cert, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs hover:border-blue-100 hover:shadow-sm transition-all flex items-start gap-4"
                id={`cert-item-${index}`}
              >
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg flex-shrink-0 mt-0.5">
                  <Award className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-900 font-sans leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-gray-500 font-sans">
                    {cert.issuer}
                  </p>
                  {cert.id && (
                    <span className="inline-block text-[10px] bg-gray-50 text-gray-400 font-mono px-1.5 py-0.5 rounded border border-gray-100">
                      ID: {cert.id}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
