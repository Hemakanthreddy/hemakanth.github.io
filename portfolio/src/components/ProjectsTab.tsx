import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Cpu, Database, Layout, Smartphone, ShoppingBag } from 'lucide-react';
import { projectsList, personalInfo } from '../data';

export default function ProjectsTab() {
  
  // Render high-fidelity premium inline SVGs / Mockups instead of broken external images
  const renderProjectVisual = (type: string) => {
    switch (type) {
      case 'irrigation':
        return (
          <div className="w-full h-full bg-gradient-to-br from-emerald-950 to-teal-900 flex flex-col justify-between p-6 text-emerald-300 relative overflow-hidden" id="visual-irrigation">
            {/* Absolute visual patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.15),transparent_60%)]"></div>
            
            {/* Sensor Dashboard Mockup */}
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3 z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">IoT System Live</span>
              <span className="flex items-center text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1.5 animate-pulse"></span>
                Active
              </span>
            </div>

            <div className="space-y-4 my-auto z-10">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-emerald-900/40 p-3 rounded-lg border border-emerald-500/10">
                  <span className="block text-[10px] uppercase font-mono text-emerald-400">Moisture</span>
                  <span className="text-xl font-bold font-mono">42.8%</span>
                </div>
                <div className="bg-emerald-900/40 p-3 rounded-lg border border-emerald-500/10">
                  <span className="block text-[10px] uppercase font-mono text-emerald-400">Valve State</span>
                  <span className="text-xl font-bold font-mono text-emerald-400">OPEN</span>
                </div>
              </div>
              <div className="bg-emerald-900/40 p-3 rounded-lg border border-emerald-500/10 text-center">
                <span className="block text-[10px] uppercase font-mono text-emerald-400">Humidity / Temp</span>
                <span className="text-sm font-semibold font-mono">64% RH | 28.5°C</span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-emerald-500/70 border-t border-emerald-500/10 pt-3 z-10">
              python @ raspberry_pi:/dev/ttyACM0
            </div>
          </div>
        );

      case 'pcb':
        return (
          <div className="w-full h-full bg-slate-900 flex flex-col justify-between p-6 text-cyan-300 relative overflow-hidden" id="visual-pcb">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
            
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">PCB Layout v1.2</span>
              <Cpu className="h-4 w-4 text-cyan-400" />
            </div>

            {/* Simulated Schematic Board */}
            <div className="relative w-full h-24 my-auto z-10 border border-cyan-500/10 rounded-lg bg-slate-950/80 p-3 flex items-center justify-center">
              {/* Circuits */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M 20,40 H 80 V 70 H 150 M 80,70 V 20 H 220" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
                <path d="M 120,20 H 180 V 50" fill="none" stroke="rgba(236,72,153,0.3)" strokeWidth="1.5" />
                <circle cx="20" cy="40" r="3" fill="#06b6d4" />
                <circle cx="150" cy="70" r="3" fill="#06b6d4" />
                <circle cx="220" cy="20" r="3" fill="#ec4899" />
              </svg>
              <div className="z-20 bg-slate-900 border border-cyan-500/30 px-3 py-1.5 rounded text-[11px] font-mono text-center shadow-lg">
                <span className="block text-cyan-400 font-bold">ESP32-WROOM</span>
                <span className="text-[9px] text-slate-400">Signal OK • 50 Ohm Trace</span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-cyan-500/70 border-t border-cyan-500/10 pt-3 z-10">
              Altium / KiCad • Schematic & Layout Routing
            </div>
          </div>
        );

      case 'nayepankh':
        return (
          <div className="w-full h-full bg-gradient-to-br from-amber-950 to-orange-900 flex flex-col justify-between p-6 text-amber-100 relative overflow-hidden" id="visual-nayepankh">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.15),transparent_60%)]"></div>

            <div className="flex items-center justify-between border-b border-amber-500/20 pb-3 z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">Naye Pankh NGO Web</span>
              <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded font-mono">Live Impact</span>
            </div>

            {/* NGO Campaign card UI elements */}
            <div className="space-y-3 z-10 my-auto">
              <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Youth Education Campaign</span>
                  <span className="text-xs font-mono text-orange-300 font-semibold">Goal reached</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-amber-500 rounded-full"></div>
                </div>
                <div className="flex justify-between text-[10px] text-white/60">
                  <span>10,000+ Lives Impacted</span>
                  <span className="text-amber-400 font-bold">100% Funded</span>
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-amber-400/70 border-t border-amber-500/10 pt-3 z-10">
              HTML5 + CSS3 + JS • Responsive Layout • NGO Assignment
            </div>
          </div>
        );

      case 'coalition':
        return (
          <div className="w-full h-full bg-gradient-to-br from-blue-950 to-slate-900 flex flex-col justify-between p-6 text-blue-200 relative overflow-hidden" id="visual-coalition">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.15),transparent_60%)]"></div>

            <div className="flex items-center justify-between border-b border-blue-500/20 pb-3 z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">Coalition Assessment</span>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">PASSED</span>
            </div>

            {/* Assessment UI Checklist elements */}
            <div className="space-y-2 z-10 my-auto">
              <div className="bg-slate-950/70 border border-blue-500/20 rounded-lg p-3.5 space-y-2.5">
                <span className="text-xs font-bold text-white block">Quality Standards Score</span>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex items-center text-emerald-400">
                    <span className="mr-1.5">✓</span> Pixel Perfect UI translation
                  </div>
                  <div className="flex items-center text-emerald-400">
                    <span className="mr-1.5">✓</span> Clean Component Modularity
                  </div>
                  <div className="flex items-center text-emerald-400">
                    <span className="mr-1.5">✓</span> Outstanding Core Responsiveness
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-blue-400/70 border-t border-blue-500/10 pt-3 z-10">
              HTML5 + CSS3 + JS • Cross-Device Layout Accuracy • Technical Task
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-slate-800 flex items-center justify-center p-6 text-slate-300">
            <Layout className="h-10 w-10 text-slate-400" />
          </div>
        );
    }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 md:py-20" id="projects-tab">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Intro Section Matching Wix Screens */}
        <div className="text-center max-w-3xl mx-auto space-y-4" id="projects-intro">
          {/* Accent block header from screenshot */}
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 bg-blue-600"></div>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight font-sans">
              My Projects
            </h1>
          </div>
          
          <p className="text-base text-gray-600 font-sans leading-relaxed pt-2">
            Welcome to my portfolio! I am {personalInfo.fullName}, an aspiring developer bridging hardware analysis and responsive full-stack software development. Explore a selection of my engineering and web projects below, showcasing IoT platforms, PCB design, and dynamic interfaces. Feel free to connect to collaborate on innovative solutions.
          </p>
        </div>

        {/* Projects Showcase Stack */}
        <div className="space-y-12" id="projects-stack">
          {projectsList.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              id={`project-card-${index}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[320px]">
                
                {/* Left Side: Project details and copy */}
                <div className="p-8 md:p-10 md:col-span-7 flex flex-col justify-between space-y-6" id={`project-copy-${index}`}>
                  <div className="space-y-4">
                    {/* Role / Accent Block line */}
                    <div className="flex items-center space-x-3">
                      <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                      <span className="text-xs font-bold text-blue-600 tracking-wider uppercase font-mono">
                        {project.role}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-gray-900 tracking-tight font-sans">
                      {project.title}
                    </h3>

                    {/* Bullet List details */}
                    <ul className="space-y-2.5">
                      {project.description.map((desc, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600 leading-relaxed font-sans">
                          <span className="text-blue-600 mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology tag pills */}
                  <div className="space-y-3" id={`project-footer-${index}`}>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-600 font-mono text-[11px] font-semibold rounded-md uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Side: Interactive High-Fidelity Mockup Dashboard Graphic */}
                <div className="md:col-span-5 relative bg-gray-900 min-h-[260px]" id={`project-graphic-${index}`}>
                  {renderProjectVisual(project.imageType)}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
