/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutTab from './components/AboutTab';
import ResumeTab from './components/ResumeTab';
import ProjectsTab from './components/ProjectsTab';
import ContactTab from './components/ContactTab';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('about');

  // Page routing switch helper
  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutTab setActiveTab={setActiveTab} />;
      case 'resume':
        return <ResumeTab />;
      case 'projects':
        return <ProjectsTab />;
      case 'contact':
        return <ContactTab />;
      default:
        return <AboutTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-gray-800 selection:bg-blue-100 selection:text-blue-900" id="app-root">
      {/* Navigation Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area with fluid tab transitions */}
      <main className="flex-grow" id="app-main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full h-full"
            id={`tab-wrapper-${activeTab}`}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
