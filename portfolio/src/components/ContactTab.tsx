import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data';

export default function ContactTab() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate successful form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 md:py-20" id="contact-tab">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Title area */}
        <div className="text-center space-y-4" id="contact-header">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 bg-blue-600"></div>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight font-sans">
              Get in Touch
            </h1>
          </div>
          <p className="text-sm text-gray-500 font-mono">
            Let's connect & build something impactful together.
          </p>
        </div>

        {/* Contact Form Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start" id="contact-grid">
          
          {/* Left Column: Brief details */}
          <div className="md:col-span-4 space-y-8 md:sticky md:top-28" id="contact-info-panel">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-6">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest font-mono">
                Contact Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm text-gray-600" id="contact-info-email">
                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition-colors break-all">
                    {personalInfo.email}
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-sm text-gray-600" id="contact-info-phone">
                  <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-blue-600 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-sm text-gray-600" id="contact-info-location">
                  <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span>{personalInfo.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Interactive Form (Wix-inspired clean borders) */}
          <div className="md:col-span-8" id="contact-form-container">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-10">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    id="get-in-touch-form"
                  >
                    
                    {/* First & Last Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label htmlFor="firstName" className="block text-xs font-bold text-gray-700 uppercase tracking-wider font-mono">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full border-b-2 border-gray-200 focus:border-blue-600 outline-none px-1 py-2 text-sm text-gray-900 transition-colors font-sans"
                          placeholder="John"
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label htmlFor="lastName" className="block text-xs font-bold text-gray-700 uppercase tracking-wider font-mono">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full border-b-2 border-gray-200 focus:border-blue-600 outline-none px-1 py-2 text-sm text-gray-900 transition-colors font-sans"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider font-mono">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border-b-2 border-gray-200 focus:border-blue-600 outline-none px-1 py-2 text-sm text-gray-900 transition-colors font-sans"
                        placeholder="john.doe@example.com"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="block text-xs font-bold text-gray-700 uppercase tracking-wider font-mono">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full border-b-2 border-gray-200 focus:border-blue-600 outline-none px-1 py-2 text-sm text-gray-900 transition-colors font-sans"
                        placeholder="Project Collaboration"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider font-mono">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full border-b-2 border-gray-200 focus:border-blue-600 outline-none px-1 py-2 text-sm text-gray-900 transition-colors resize-none font-sans"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-bold text-xs tracking-widest uppercase rounded-full shadow-md hover:bg-blue-700 transition-all duration-200 disabled:bg-blue-400"
                        id="btn-submit-contact"
                      >
                        {loading ? (
                          <span className="flex items-center">
                            <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </span>
                        )}
                      </button>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-12 space-y-6"
                    id="contact-success-panel"
                  >
                    <CheckCircle className="h-16 w-16 text-emerald-500 animate-bounce" />
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-gray-900 font-sans">
                        Message Sent!
                      </h3>
                      <p className="text-sm text-gray-500 max-w-sm mx-auto font-sans">
                        Thank you for reaching out. I've received your message and will get back to you as soon as possible!
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2 border border-gray-300 text-gray-600 hover:text-gray-900 rounded-full text-xs font-bold uppercase tracking-wider font-mono hover:bg-gray-50 transition-colors"
                      id="btn-reset-contact"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
