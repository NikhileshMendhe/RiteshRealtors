import React, { useState } from 'react';
import { Project, PropertyCategory, EnquiryFormData, ToastState } from './types/realEstate';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WhyInvestNagpur } from './components/WhyInvestNagpur';
import { ContactSection } from './components/ContactSection';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ToastNotification } from './components/ToastNotification';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<PropertyCategory>('All');
  const [prefilledProperty, setPrefilledProperty] = useState<string>('');
  const [toast, setToast] = useState<ToastState>({
    show: false,
    title: '',
    message: ''
  });

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 75;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectCategory = (cat: 'Plots' | 'Flats') => {
    setActiveCategory(cat);
  };

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const handleEnquireProject = (project: Project) => {
    setPrefilledProperty(project.name);
    handleNavigate('contact');
  };

  const handleFormSubmit = (data: EnquiryFormData) => {
    setToast({
      show: true,
      title: 'Enquiry Received!',
      message: `Thank you ${data.fullName}! Our team will get in touch with you regarding ${data.propertyInterest}.`,
      type: 'success'
    });
  };

  const handleQuickModalEnquiry = (propertyName: string, name: string, phone: string) => {
    setToast({
      show: true,
      title: 'Inquiry Submitted!',
      message: `Thank you ${name}! We have received your inquiry for ${propertyName}.`,
      type: 'success'
    });
  };

  return (
    <div className="min-h-screen bg-brand-ivory text-brand-charcoal selection:bg-brand-orange selection:text-white font-sans">
      
      {/* Sticky Navigation Header */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Page Sections strictly following requested hierarchy */}
      <main>
        {/* 1. Ultra Attractive Hero Section */}
        <Hero
          onExploreClick={() => handleNavigate('projects')}
          onContactClick={() => handleNavigate('contact')}
          onSelectCategory={handleSelectCategory}
        />

        {/* 2. About Us (Owner Photo & Developer Profile) */}
        <AboutSection onContactClick={() => handleNavigate('contact')} />

        {/* 3. Properties Portfolio: Plots & Flats */}
        <ProjectsSection
          activeCategory={activeCategory}
          onViewDetails={handleViewDetails}
          onEnquire={handleEnquireProject}
        />

        {/* 4. Why to Invest in Nagpur */}
        <WhyInvestNagpur onExploreClick={() => handleNavigate('projects')} />

        {/* 5. Contact Us & Enquiry Form */}
        <ContactSection
          onFormSubmit={handleFormSubmit}
          prefilledProperty={prefilledProperty}
        />

        {/* 6. Social Links & Instagram Presence */}
        <InstagramSection />
      </main>

      {/* 7. Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Contact Widget */}
      <FloatingContact onOpenEnquiry={() => handleNavigate('contact')} />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSubmitEnquiry={handleQuickModalEnquiry}
      />

      {/* Toast Notification */}
      <ToastNotification
        toast={toast}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />

    </div>
  );
}

export default App;
