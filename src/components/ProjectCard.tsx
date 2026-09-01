import React from 'react';
import { Project } from '../types/realEstate';
import { MapPin, ShieldCheck, Eye, PhoneCall, Layers, Home, Building2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
  onEnquire: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails, onEnquire }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col group hover:-translate-y-1.5">
      
      {/* Image Frame */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100 cursor-pointer" onClick={() => onViewDetails(project)}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

        {/* Category Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          {project.badge && (
            <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
              {project.badge}
            </span>
          )}
          <span className={`px-3 py-1 rounded-full text-white text-[11px] font-bold shadow-sm flex items-center gap-1 ${
            project.category === 'Flats' ? 'bg-brand-green' : 'bg-stone-800'
          }`}>
            {project.category === 'Flats' && <Home className="w-3 h-3" />}
            {project.category === 'Plots' && <Layers className="w-3 h-3" />}
            {project.category === 'Commercial' && <Building2 className="w-3 h-3" />}
            <span>{project.category}</span>
          </span>
        </div>

        {/* Bottom Image Details */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-1.5 text-brand-orange-light text-xs font-semibold mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{project.location}</span>
          </div>
          <h3 className="font-serif text-2xl font-bold leading-tight group-hover:text-brand-orange-light transition-colors">
            {project.name}
          </h3>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div>
          <p className="text-xs font-bold text-brand-green uppercase tracking-wide mb-2">
            {project.tagline}
          </p>

          <p className="text-stone-600 text-sm leading-relaxed line-clamp-2 font-sans mb-4">
            {project.description}
          </p>

          <div className="space-y-2 pt-2 border-t border-stone-100">
            {project.keyHighlights.slice(0, 3).map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span className="truncate">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-stone-100 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                Price Structure
              </span>
              <span className="text-sm font-extrabold text-brand-charcoal">
                {project.startingPrice}
              </span>
            </div>
            {project.areaRegion && (
              <span className="text-[11px] font-medium text-stone-500 bg-stone-100 px-2.5 py-1 rounded-md">
                {project.areaRegion}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => onViewDetails(project)}
              className="py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-brand-charcoal text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>

            <button
              onClick={() => onEnquire(project)}
              className="py-2.5 px-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-soft-sm hover:shadow-glow-orange transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Enquire</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
