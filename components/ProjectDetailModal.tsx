'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Code2, Smartphone } from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState<number>(0);

  if (!project) return null;

  const images = [project.imageCol1, project.imageCol2, project.imageCol3];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#121318] border border-[#2B2D38] rounded-[32px] p-6 sm:p-8 text-[#D7E2EA] z-10 shadow-2xl overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-[#1E202A] text-[#A0A8B0] hover:text-white hover:bg-[#2B2D38] transition-colors z-20 cursor-pointer"
          >
            <X size={20} />
          </button>

          {/* Header Banner */}
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-[#B600A8]/20 text-[#00E5FF] border border-[#B600A8]/40">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#D7E2EA]/60 uppercase">{project.clientOrRole}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[#00E5FF] font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Main Screenshot Carousel / Gallery */}
          <div className="space-y-3 mb-8">
            <div className="w-full h-[240px] sm:h-[360px] md:h-[420px] rounded-2xl overflow-hidden bg-[#1A1B22] border border-[#2B2D38] relative">
              <img
                src={images[activeImage]}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeImage === idx ? 'border-[#00E5FF] scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Overview Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 pb-8 border-b border-white/10">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-tight text-white flex items-center space-x-2">
                <Code2 size={18} className="text-[#00E5FF]" />
                <span>Project Case Study</span>
              </h3>
              <p className="text-sm text-[#D7E2EA]/90 leading-relaxed font-light">
                {project.longDescription}
              </p>

              {/* Key Highlights */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#00E5FF]">
                  Key Engineering Accomplishments:
                </h4>
                <div className="space-y-2">
                  {project.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-white/90">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture & Info Side Column */}
            <div className="space-y-6 bg-[#181920] p-5 rounded-2xl border border-[#2B2D38]">
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#B600A8] mb-2 flex items-center gap-1.5">
                  <Cpu size={14} /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-[#222430] text-[11px] font-mono text-white border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.architecture && (
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-[#00E5FF] mb-2 flex items-center gap-1.5">
                    <Layers size={14} /> Architecture
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#D7E2EA]/80 font-mono">
                    {project.architecture.map((arch, idx) => (
                      <li key={idx} className="leading-snug">• {arch}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col space-y-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-[#222430] hover:bg-[#2C2E3E] text-white text-xs font-medium uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Github size={16} />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#1E202A] text-xs font-mono uppercase text-white hover:bg-[#2B2D38] transition-colors"
            >
              Close Showcase
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
