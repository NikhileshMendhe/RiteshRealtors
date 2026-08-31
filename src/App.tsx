import React, { useState } from 'react';
import { Project, EnquiryFormData, ToastState } from './types/realEstate';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LocationSection } from './components/LocationSection';
import { GallerySection } from './components/GallerySection';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { ToastNotification } from './components/ToastNotification';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefilledProperty, setPrefilledProperty] = useState<string>('');
  const [toast, setToast] = useState<ToastState>({
    show: false,
    title: '',
    message: ''
  });

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
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

  const handleQuickModalEnquiry = (propertyName: string, name: string, phone: string, message: string) => {
    setToast({
      show: true,
      title: 'Inquiry Submitted!',
      message: `Thank you ${name}! We have received your inquiry for ${propertyName}.`,
      type: 'success'
    });
  };

  return (
    <div className="min-h-screen bg-brand-ivory text-brand-charcoal selection:bg-brand-orange selection:text-white font-sans">
      
      {/* Sticky Navigation */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Page Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreClick={() => handleNavigate('projects')}
          onContactClick={() => handleNavigate('contact')}
        />

        {/* Trust & Introduction */}
        <TrustSection />

        {/* About Ritesh Realtors */}
        <AboutSection onExploreClick={() => handleNavigate('projects')} />

        {/* Featured Projects Centerpiece */}
        <ProjectsSection
          onViewDetails={handleViewDetails}
          onEnquire={handleEnquireProject}
        />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Location & Connectivity */}
        <LocationSection onAskLocation={() => handleNavigate('contact')} />

        {/* See The Properties Visual Gallery */}
        <GallerySection />

        {/* Instagram / Social Presence */}
        <InstagramSection />

        {/* Enquiry / Contact Form */}
        <ContactSection
          onFormSubmit={handleFormSubmit}
          prefilledProperty={prefilledProperty}
        />

        {/* Final CTA Banner */}
        <FinalCTA
          onExploreClick={() => handleNavigate('projects')}
          onContactClick={() => handleNavigate('contact')}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Bottom Contact Widget */}
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
