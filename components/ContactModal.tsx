'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Copy, Check, Phone, MessageSquare, Send, CheckCircle2, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', projectType: 'Full Stack Web App', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-[#14151B] border border-[#2B2D38] rounded-[32px] p-6 sm:p-8 text-[#D7E2EA] z-10 shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#1F212A] text-[#A0A8B0] hover:text-white hover:bg-[#2B2D38] transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <span className="text-xs uppercase font-mono tracking-widest text-[#00E5FF] font-medium">
                DIRECT INQUIRY &amp; HIRING
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-1 text-white">
                Contact Oussama Moujane
              </h3>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1">
                Full Stack &amp; Mobile Developer • Based in Marrakech, Morocco 🇲🇦
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {/* Email Card */}
              <div className="p-3.5 rounded-2xl bg-[#1A1C24] border border-[#2B2D38] flex flex-col justify-between">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-2 rounded-xl bg-[#252834] text-[#00E5FF]">
                    <Mail size={16} />
                  </div>
                  <span className="text-[10px] font-mono text-[#D7E2EA]/60 uppercase">Direct Email</span>
                </div>
                <p className="text-xs font-mono text-white truncate mb-2">{PORTFOLIO_DATA.profile.email}</p>
                <button
                  onClick={handleCopyEmail}
                  className="w-full py-1.5 rounded-xl bg-[#222530] hover:bg-[#2D303E] text-[11px] font-mono text-white flex items-center justify-center space-x-1 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="p-3.5 rounded-2xl bg-[#1A1C24] border border-[#2B2D38] flex flex-col justify-between">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-2 rounded-xl bg-[#252834] text-emerald-400">
                    <Phone size={16} />
                  </div>
                  <span className="text-[10px] font-mono text-[#D7E2EA]/60 uppercase">Phone &amp; WhatsApp</span>
                </div>
                <p className="text-xs font-mono text-white truncate mb-2">{PORTFOLIO_DATA.profile.phone}</p>
                <div className="flex space-x-1.5">
                  <button
                    onClick={handleCopyPhone}
                    className="flex-1 py-1.5 rounded-xl bg-[#222530] hover:bg-[#2D303E] text-[11px] font-mono text-white flex items-center justify-center space-x-1 transition-colors cursor-pointer"
                  >
                    {copiedPhone ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                  <a
                    href={`https://wa.me/${PORTFOLIO_DATA.profile.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-1.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 text-[11px] font-mono flex items-center justify-center space-x-1 transition-colors"
                  >
                    <MessageSquare size={12} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-10 text-center space-y-3 bg-[#1A1C24] rounded-2xl border border-[#2B2D38] p-6"
              >
                <CheckCircle2 size={48} className="mx-auto text-emerald-400" />
                <h4 className="text-xl font-bold uppercase text-white">Message Dispatched!</h4>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/80 max-w-xs mx-auto leading-relaxed">
                  Thank you for reaching out, {formData.name}. I&apos;ll review your project details and get back to you promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', projectType: 'Full Stack Web App', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#252834] text-xs font-mono uppercase text-white hover:bg-[#303342] transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase font-mono text-[#D7E2EA]/70 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A1C24] border border-[#2B2D38] text-xs text-white placeholder-[#586068] focus:outline-none focus:border-[#00E5FF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-mono text-[#D7E2EA]/70 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A1C24] border border-[#2B2D38] text-xs text-white placeholder-[#586068] focus:outline-none focus:border-[#00E5FF] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-mono text-[#D7E2EA]/70 mb-1">Project Category</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A1C24] border border-[#2B2D38] text-xs text-white focus:outline-none focus:border-[#00E5FF] transition-colors"
                  >
                    <option value="Full Stack Web App">Full Stack Web App (React / Laravel / Node)</option>
                    <option value="Cross-Platform Mobile App">Cross-Platform Mobile App (Flutter / React Native)</option>
                    <option value="SaaS Architecture">SaaS &amp; Multi-Tenant Backend</option>
                    <option value="Real-Time / AI Integration">Real-Time &amp; AI Logistics Integration</option>
                    <option value="Full-Time Hiring">Full-Time / Freelance Hiring Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-mono text-[#D7E2EA]/70 mb-1">Project Details</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe your project requirements, target timeline, or collaboration goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A1C24] border border-[#2B2D38] text-xs text-white placeholder-[#586068] focus:outline-none focus:border-[#00E5FF] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #00E5FF 100%)',
                  }}
                  className="w-full py-3.5 rounded-xl font-bold uppercase text-xs tracking-widest text-white flex items-center justify-center space-x-2 shadow-lg hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer mt-2"
                >
                  <Send size={14} />
                  <span>Send Direct Message</span>
                </button>
              </form>
            )}

            <div className="mt-5 pt-4 border-t border-[#2B2D38] flex justify-between items-center text-[10px] text-[#D7E2EA]/60 font-mono">
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-emerald-400" /> Marrakech, Morocco
              </span>
              <div className="flex space-x-3">
                <a href={PORTFOLIO_DATA.profile.githubUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                <a href={PORTFOLIO_DATA.profile.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="hover:text-white transition-colors">Email</a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
