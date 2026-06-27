import React from 'react';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Copyright section */}
          <div className="text-sm text-gray-500 font-sans" id="footer-copyright">
            <p>© {currentYear} by {personalInfo.fullName}.</p>
            <p className="text-xs text-gray-400 mt-1">Crafted with modern React & Tailwind CSS</p>
          </div>

          {/* Contact and Follow Sections */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12" id="footer-details">
            {/* Call */}
            <div id="footer-call">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-2 font-mono">Call</h4>
              <p className="text-sm text-gray-600 font-sans hover:text-blue-600 transition-colors">
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>
                  {personalInfo.phone}
                </a>
              </p>
            </div>

            {/* Write */}
            <div id="footer-write">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-2 font-mono">Write</h4>
              <p className="text-sm text-gray-600 font-sans break-all hover:text-blue-600 transition-colors">
                <a href={`mailto:${personalInfo.email}`}>
                  {personalInfo.email}
                </a>
              </p>
            </div>

            {/* Follow */}
            <div className="col-span-2 sm:col-span-1" id="footer-follow">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-2 font-mono">Follow</h4>
              <div className="flex space-x-4">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-1.5 bg-gray-50 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
                  aria-label="LinkedIn Profile"
                  id="footer-linkedin-link"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-1.5 bg-gray-50 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
                  aria-label="GitHub Profile"
                  id="footer-github-link"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
