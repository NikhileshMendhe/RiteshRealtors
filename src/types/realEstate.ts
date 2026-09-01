export type PropertyCategory = 'All' | 'Plots' | 'Flats' | 'Commercial';

export interface ProjectSpec {
  iconName: string;
  label: string;
  value: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  location: string;
  areaRegion: string;
  category: 'Plots' | 'Flats' | 'Commercial';
  startingPrice?: string;
  image: string;
  badge?: string;
  description: string;
  keyHighlights: string[];
  specs: ProjectSpec[];
  paymentTerms?: string;
  featured: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  projectRef: string;
  category: 'Layout Plan' | 'Residential Flats' | 'Entrance & Road' | 'Aerial Overview';
  imageUrl: string;
  caption: string;
  details: string[];
}

export interface EnquiryFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  propertyInterest: string;
  message: string;
}

export interface ToastState {
  show: boolean;
  title: string;
  message: string;
  type?: 'success' | 'info';
}
