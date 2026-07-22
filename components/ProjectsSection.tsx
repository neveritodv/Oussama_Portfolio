'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import LiveProjectButton from './LiveProjectButton';
import FadeIn from './FadeIn';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import ProjectDetailModal from './ProjectDetailModal';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';

interface CardProps {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  onSelectProject: (p: Project) => void;
}

const ProjectCard: React.FC<CardProps> = ({
  project,
  index,
  totalCards,
  progress,
  onSelectProject,
}) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const range = [index * 0.2, 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="sticky top-20 md:top-28 w-full max-w-6xl mx-auto my-6 sm:my-10"
      style={{
        top: `calc(88px + ${index * 26}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="rounded-[36px] sm:rounded-[46px] md:rounded-[56px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-5 sm:p-7 md:p-9 shadow-2xl transition-all duration-300 hover:border-[#00E5FF]/50 group"
      >
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-[#D7E2EA]/15">
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Project Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none group-hover:text-[#00E5FF] transition-colors"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 80px)' }}
            >
              {project.number}
            </span>

            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-medium uppercase tracking-widest text-[#00E5FF]">
                  {project.category}
                </span>
                <span className="text-xs text-[#D7E2EA]/40">•</span>
                <span className="text-xs font-light uppercase tracking-wider text-[#D7E2EA]/60">
                  {project.clientOrRole}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[#D7E2EA] tracking-tight mt-0.5">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
            <button
              onClick={() => onSelectProject(project)}
              className="px-5 py-2.5 rounded-full bg-[#1A1C24] hover:bg-[#252834] text-xs font-mono uppercase tracking-wider text-white border border-[#2F3242] flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <span>Case Study</span>
              <ArrowUpRight size={14} className="text-[#00E5FF]" />
            </button>
            <LiveProjectButton label="Demo" onClick={() => onSelectProject(project)} />
          </div>
        </div>

        {/* Middle Tagline */}
        <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light mt-4 mb-4 max-w-3xl">
          {project.subtitle} — {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-[#16171E] text-[11px] font-mono text-[#D7E2EA]/90 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom Row: Asymmetric Image Showcase Grid */}
        <div
          onClick={() => onSelectProject(project)}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 cursor-pointer"
        >
          {/* Left Column (40% - 5 cols): 2 Stacked Images */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            <div
              className="w-full overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#1A1A1D] border border-white/5 relative group/img"
              style={{ height: 'clamp(120px, 15vw, 210px)' }}
            >
              <img
                src={project.imageCol1}
                alt={`${project.title} preview 1`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
              />
            </div>
            <div
              className="w-full overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#1A1A1D] border border-white/5 relative group/img"
              style={{ height: 'clamp(150px, 20vw, 300px)' }}
            >
              <img
                src={project.imageCol2}
                alt={`${project.title} preview 2`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column (60% - 7 cols): 1 Tall Main Image */}
          <div className="md:col-span-7 w-full overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#1A1A1D] border border-white/5 min-h-[260px] sm:min-h-[340px] md:min-h-[440px] relative group/img">
            <img
              src={project.imageCol3}
              alt={`${project.title} main feature`}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end opacity-0 group-hover/img:opacity-100 transition-opacity">
              <span className="text-xs uppercase font-mono text-[#00E5FF] flex items-center space-x-1">
                <span>Click to view full architecture &amp; live metrics</span>
                <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const categories = ['All', 'Mobile', 'SaaS', 'Web', 'Full Stack'];

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-16 sm:pt-20 md:pt-28 pb-24 sm:pb-32 px-5 sm:px-8 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={30} className="text-center">
          <span className="text-xs uppercase font-mono tracking-widest text-[#00E5FF] mb-2 block">
            FEATURED ENGINEERING &amp; APPS
          </span>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.8rem, 11vw, 150px)' }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* Category Filters */}
        <FadeIn delay={0.1} y={20} className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#00E5FF] to-[#7621B0] text-white font-bold shadow-lg scale-105'
                  : 'bg-[#181920] text-[#D7E2EA]/70 border border-[#2B2D38] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        {/* Stacking Cards Container */}
        <div className="relative flex flex-col pb-20">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={filteredProjects.length}
              progress={scrollYProgress}
              onSelectProject={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default ProjectsSection;
