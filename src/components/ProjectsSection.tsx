import React, { useState } from 'react';
import { Project, PropertyCategory } from '../types/realEstate';
import { PROJECTS_DATA } from '../data/propertyData';
import { ProjectCard } from './ProjectCard';
import { Sparkles, Layers, Home, Building2 } from 'lucide-react';

interface ProjectsSectionProps {
  activeCategory?: PropertyCategory;
  onViewDetails: (project: Project) => void;
  onEnquire: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  activeCategory = 'All',
  onViewDetails,
  onEnquire,
}) => {
  const [selectedTab, setSelectedTab] = useState<PropertyCategory>(activeCategory);

  // Sync if external prop changes
  React.useEffect(() => {
    if (activeCategory) {
      setSelectedTab(activeCategory);
    }
  }, [activeCategory]);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedTab === 'All') return true;
    return project.category === selectedTab;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 bg-brand-ivory relative border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange-50 text-brand-orange text-xs font-bold uppercase tracking-wider border border-brand-orange/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR PROPERTIES PORTFOLIO</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal leading-tight">
              Explore Our <br />
              <span className="text-brand-orange italic font-normal">Plots & Residential Flats</span>
            </h2>

            <p className="text-stone-600 text-base leading-relaxed font-sans">
              Discover plotted developments and residential flat opportunities around Nagpur, Mouza Chimnazari, and Umred Road.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-stone-200 shadow-soft-sm flex-wrap self-start md:self-auto">
            {(['All', 'Plots', 'Flats', 'Commercial'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                  selectedTab === tab
                    ? 'bg-brand-orange text-white shadow-soft-sm'
                    : 'text-stone-600 hover:text-brand-charcoal hover:bg-stone-100'
                }`}
              >
                {tab === 'Plots' && <Layers className="w-3.5 h-3.5" />}
                {tab === 'Flats' && <Home className="w-3.5 h-3.5" />}
                {tab === 'Commercial' && <Building2 className="w-3.5 h-3.5" />}
                <span>{tab === 'All' ? 'All Properties' : tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
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

        {/* Note */}
        <div className="mt-12 text-center bg-white/80 p-5 rounded-2xl border border-stone-200 max-w-2xl mx-auto shadow-soft-sm">
          <p className="text-xs text-stone-500 font-medium">
            <span className="font-bold text-brand-charcoal">Note:</span> Contact Ritesh Realtors directly for site visit arrangements, unit floor plans, and current plot availability.
          </p>
        </div>

      </div>
    </section>
  );
};
