import React, { useState } from 'react';
import { Project } from '../types/realEstate';
import { PROJECTS_DATA } from '../data/propertyData';
import { ProjectCard } from './ProjectCard';
import { Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  onViewDetails: (project: Project) => void;
  onEnquire: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onViewDetails, onEnquire }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Residential' | 'Commercial'>('All');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Residential') return project.type === 'Residential' || project.type === 'Both';
    if (activeTab === 'Commercial') return project.type === 'Commercial' || project.type === 'Both';
    return true;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 bg-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange-50 text-brand-orange text-xs font-bold uppercase tracking-wider border border-brand-orange/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Plotted Developments</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal leading-tight">
              Explore Our <br />
              <span className="text-brand-orange italic font-normal">Property Opportunities</span>
            </h2>

            <p className="text-stone-600 text-base leading-relaxed font-sans">
              Discover plotted developments designed around location, accessibility and future potential around Nagpur, Mouza Chimnazari, and Umred Road.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-stone-200 shadow-soft-sm self-start md:self-auto">
            {(['All', 'Residential', 'Commercial'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-brand-orange text-white shadow-soft-sm'
                    : 'text-stone-600 hover:text-brand-charcoal hover:bg-stone-100'
                }`}
              >
                {tab === 'All' ? 'All Opportunities' : `${tab} Plots`}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={onViewDetails}
              onEnquire={onEnquire}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-stone-200/80 max-w-2xl mx-auto shadow-soft-sm">
          <p className="text-xs text-stone-500 font-medium leading-relaxed">
            <span className="font-bold text-brand-charcoal">Note:</span> Specific plot dimensions, exact availability, and layout map consultations can be requested directly. Contact Ritesh Realtors for current availability and details.
          </p>
        </div>

      </div>
    </section>
  );
};
