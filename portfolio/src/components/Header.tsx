import React, { useState } from 'react';
import { Menu, X, Linkedin, Github, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'ABOUT ME' },
    { id: 'resume', label: 'RESUME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm" id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group" 
            onClick={() => handleNavClick('about')}
            id="brand-logo"
          >
            <div className="w-5 h-5 bg-blue-600 transition-transform group-hover:scale-110" id="logo-box"></div>
            <span className="text-xl font-bold text-gray-900 tracking-tight font-sans">
              {personalInfo.firstName}
            </span>
            <span className="text-gray-400 font-light mx-1">/</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest hidden sm:inline-block font-mono pt-1">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium tracking-wider transition-colors duration-200 uppercase relative py-2 ${
                  activeTab === item.id 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden" id="mobile-menu-toggle">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-md"
              aria-label="Toggle Menu"
              id="menu-btn"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in" id="mobile-nav-panel">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  activeTab === item.id 
                    ? 'bg-blue-50 text-blue-600 font-semibold' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                id={`mobile-nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
