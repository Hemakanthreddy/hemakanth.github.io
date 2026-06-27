import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Github, Mail, Phone, BookOpen, Camera } from 'lucide-react';
import { personalInfo } from '../data';

// Persistent local-storage backed avatar with smooth upload fallback
function ProfileAvatar() {
  const [photoUrl, setPhotoUrl] = useState<string | null>(() => {
    return localStorage.getItem('profile_photo_url');
  });
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          const base64Url = e.target.result as string;
          setPhotoUrl(base64Url);
          localStorage.setItem('profile_photo_url', base64Url);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const triggerInput = () => {
    fileInputRef.current?.click();
  };

  const removePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoUrl(null);
    localStorage.removeItem('profile_photo_url');
  };

  return (
    <div 
      className={`relative z-10 -mt-20 w-28 h-28 rounded-full border-4 shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden ${
        isDragging 
          ? 'border-blue-500 scale-105 bg-blue-50' 
          : 'border-white bg-[#F4EFEB] hover:scale-102'
      }`}
      onClick={triggerInput}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      title="Click or drag a photo here to upload!"
      id="profile-avatar-uploader"
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        className="hidden" 
      />

      {photoUrl ? (
        <img 
          src={photoUrl} 
          alt="Profile Avatar" 
          className="w-full h-full object-cover" 
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-3xl font-black text-gray-800 tracking-tight select-none">
            HR
          </span>
        </div>
      )}

      {/* Overlay controls */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-white space-y-1">
        <Camera className="h-5 w-5" />
        <span className="text-[9px] font-bold tracking-wider uppercase font-mono">
          {photoUrl ? 'Change' : 'Upload'}
        </span>
      </div>

      {photoUrl && (
        <button
          onClick={removePhoto}
          className="absolute bottom-1 right-1 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 shadow-sm transition-colors z-20"
          title="Remove Photo"
          id="btn-remove-avatar-photo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  );
}

interface AboutTabProps {
  setActiveTab: (tab: string) => void;
}

export default function AboutTab({ setActiveTab }: AboutTabProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] via-[#F4EFEB] to-[#ECE7E1] py-12 md:py-20 flex items-center" id="about-tab">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Wix-style Profile Presentation Card */}
          <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-start" id="profile-card-container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden w-full max-w-sm flex flex-col items-center"
              id="profile-card"
            >
              {/* Card Header Accent */}
              <div className="w-full h-32 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center p-6 relative">
                {/* Decorative circle */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xs"></div>
                <BookOpen className="h-10 w-10 text-white/90" />
              </div>

              {/* Profile Main Body */}
              <div className="px-8 pt-8 pb-6 flex flex-col items-center text-center w-full">
                {/* Profile Image/Avatar Initials with dynamic photo support */}
                <ProfileAvatar />

                <h2 className="text-2xl font-black text-gray-900 tracking-tight font-sans" id="profile-name">
                  {personalInfo.firstName} <br />
                  <span className="text-blue-600">{personalInfo.lastName}</span>
                </h2>
                
                {/* Horizontal blue line divider from screenshot */}
                <div className="w-12 h-1 bg-blue-600 rounded-full my-4"></div>

                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest font-mono mb-4">
                  DEVELOPER / ECE
                </p>

                <p className="text-sm text-gray-600 font-sans leading-relaxed px-2">
                  {personalInfo.tagline}
                </p>
              </div>

              {/* Social Bar (conforming to bottom bar in screenshot) */}
              <div className="w-full bg-gray-50 border-t border-gray-100 py-4 px-8 flex justify-center space-x-6" id="profile-socials">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                  id="profile-linkedin"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label="GitHub"
                  id="profile-github"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label="Email"
                  id="profile-email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label="Phone"
                  id="profile-phone"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio & CTA options */}
          <div className="col-span-1 lg:col-span-7 space-y-8" id="about-intro-text">
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight font-sans leading-none" id="welcome-title">
                Welcome
              </h1>
              
              <h3 className="text-lg md:text-2xl font-semibold text-gray-700 tracking-normal font-sans" id="welcome-sub">
                Here's who I am & what I create
              </h3>

              {/* Action Buttons as in screenshot: Resume in solid blue, Projects in outline */}
              <div className="flex flex-wrap gap-4 pt-2" id="about-ctas">
                <button
                  onClick={() => setActiveTab('resume')}
                  className="px-8 py-3 bg-blue-600 text-white font-bold text-sm tracking-wider uppercase rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:translate-y-[-2px] active:translate-y-0"
                  id="btn-goto-resume"
                >
                  Resume
                </button>
                <button
                  onClick={() => setActiveTab('projects')}
                  className="px-8 py-3 bg-transparent hover:bg-gray-100 text-gray-900 font-bold text-sm tracking-wider uppercase rounded-full border-2 border-gray-900 transition-all duration-300 hover:translate-y-[-2px] active:translate-y-0"
                  id="btn-goto-projects"
                >
                  Projects
                </button>
              </div>

              {/* Bio Block with Wix-like styling */}
              <div className="pt-6 border-t border-gray-200/60 max-w-2xl" id="about-bio-desc">
                <p className="text-base text-gray-600 font-sans leading-relaxed mb-4">
                  {personalInfo.longBio}
                </p>
                <p className="text-sm text-gray-500 font-sans leading-relaxed">
                  Combining hardware precision with clean frontend development. Quick learner, active contributor, and problem-solver looking forward to collaborating on production-grade software solutions.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
