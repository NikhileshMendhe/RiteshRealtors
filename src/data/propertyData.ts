import { Project, GalleryItem } from '../types/realEstate';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'samarth-nagari-1',
    name: 'Samarth Nagari – 1',
    tagline: 'NATP Sanctioned Residential & Commercial Plots',
    location: 'Mouza Chimnazari, Nagpur',
    areaRegion: 'Chimnazari Corridor',
    type: 'Both',
    startingPrice: 'Starting from ₹550/- sq.ft.',
    image: '/images/samarth1.jpg',
    badge: 'NATP Sanctioned',
    description: 'A thoughtfully planned layout featuring premium residential and commercial plot opportunities at Mouza Chimnazari with wide internal road networks and flexible payment plans.',
    keyHighlights: [
      'NATP Sanctioned Layout',
      '60 ft Main DP Road Layout',
      '25% Down Payment Option',
      '24 Month Easy EMI Facility',
      'Starting from ₹550/- per sq.ft.',
      'Residential & Commercial Plot Divisions'
    ],
    specs: [
      { iconName: 'ShieldCheck', label: 'Sanction', value: 'NATP Sanctioned' },
      { iconName: 'Road', label: 'Main Road Width', value: '60 Ft Road Layout' },
      { iconName: 'Wallet', label: 'Down Payment', value: '25% Down Payment' },
      { iconName: 'CalendarCheck', label: 'Payment Period', value: '24 Month EMI' },
      { iconName: 'Tag', label: 'Starting Price', value: '₹550/- per sq.ft.' },
      { iconName: 'MapPin', label: 'Location', value: 'Mouza Chimnazari' }
    ],
    paymentTerms: '25% Initial down payment at agreement, balance payable in 24 monthly installments.',
    featured: true
  },
  {
    id: 'indravan-city',
    name: 'Indravan City',
    tagline: '200 Ft Road Touch Layout in New Nagpur Metro Region',
    location: 'Umred Road Area, Mouza Chimnazari',
    areaRegion: 'New Nagpur Metro Region',
    type: 'Both',
    startingPrice: 'Contact for Current Pricing',
    image: '/images/indravan.jpg',
    badge: '200 Ft Road Touch',
    description: 'Premier plotted development located along the high-growth Umred Road corridor in the New Nagpur Metro Region, offering direct 200 ft road access and modern layout infrastructure.',
    keyHighlights: [
      '200 ft Road Touch Main Layout Access',
      '36 Months Interest-Free Installments',
      'Asphalt / Dambar Internal Roads',
      'Electrical Infrastructure & Street Lighting',
      'Landscaped Garden & Tree Plantation',
      'Water Line Connectivity',
      'Strategic Proximity to Naye Bhandara Gondiya Samruddhi Highway'
    ],
    specs: [
      { iconName: 'Compass', label: 'Region', value: 'New Nagpur Metro Region' },
      { iconName: 'Road', label: 'Road Access', value: '200 Ft Road Touch' },
      { iconName: 'CalendarCheck', label: 'Installment Plan', value: '36 Months Interest-Free' },
      { iconName: 'Zap', label: 'Power Utility', value: 'Electrification Ready' },
      { iconName: 'Trees', label: 'Greens', value: 'Garden & Tree Plantation' },
      { iconName: 'Droplets', label: 'Water', value: 'Dedicated Water Line' }
    ],
    paymentTerms: 'Convenient installment options with up to 36 months interest-free payment plan.',
    featured: true
  },
  {
    id: 'samarth-nagari-phase2',
    name: 'Samarth Nagari Layout Phase 2',
    tagline: 'Planned Plotted Opportunities for Better Future',
    location: 'Mouza Chimnazari / Umred Road',
    areaRegion: 'Nagpur Growth Sector',
    type: 'Residential',
    startingPrice: 'Contact for Availability',
    image: '/images/samarth2.jpg',
    badge: 'High Growth Sector',
    description: 'Expanded plotted presentation showcasing green surroundings, clear demarcations, and connected road access designed for long-term land ownership around Nagpur.',
    keyHighlights: [
      'Clearly Demarcated Residential Plots',
      'Internal Network Roads & Boundary Markers',
      'Peaceful Green Environment',
      'Quick Connectivity to Main Highways',
      'Personalized Site Visits & Guidance'
    ],
    specs: [
      { iconName: 'Map', label: 'Layout Status', value: 'Demarcated Plots' },
      { iconName: 'Building2', label: 'Category', value: 'Residential Plots' },
      { iconName: 'Navigation', label: 'Connectivity', value: 'Umred Road & Samruddhi Hwy' },
      { iconName: 'UserCheck', label: 'Guidance', value: 'Direct Promoter Assistance' }
    ],
    paymentTerms: 'Customized payment plans available on inquiry.',
    featured: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Samarth Nagari – 1 Project Poster',
    projectRef: 'Samarth Nagari – 1',
    category: 'Layout Plan',
    imageUrl: '/images/samarth1.jpg',
    caption: 'Official promotional post highlighting NATP sanction, 60ft road layout, 25% down payment and 24 month EMI terms at Mouza Chimnazari.',
    details: ['NATP Sanctioned', '60 Ft DP Road', 'Starting from ₹550/sq.ft', '24 Month EMI']
  },
  {
    id: 'gal-2',
    title: 'Indravan City 200 Ft Road Touch Overview',
    projectRef: 'Indravan City',
    category: 'Entrance & Road',
    imageUrl: '/images/indravan.jpg',
    caption: 'Promotional graphic showing 200 ft road touch layout in New Nagpur Metro Region near Samruddhi Highway corridor.',
    details: ['200 Ft Road Touch', '36 Months Interest-Free Installments', 'Garden & Trees', 'Water & Electricity']
  },
  {
    id: 'gal-3',
    title: 'Samarth Nagari Aerial Layout Overview',
    projectRef: 'Samarth Nagari',
    category: 'Aerial Overview',
    imageUrl: '/images/samarth2.jpg',
    caption: 'High-angle aerial presentation showcasing green surroundings and plot demarcations around Mouza Chimnazari.',
    details: ['Scenic Greenery', 'Demarcated Plot Divisions', 'Asphalt Internal Roads', 'Nagpur Suburban Sector']
  },
  {
    id: 'gal-4',
    title: 'Ritesh Realtors Master Plotted Infrastructure',
    projectRef: 'Ritesh Realtors',
    category: 'Amenities',
    imageUrl: '/images/hero.jpg',
    caption: 'Master planning showcase highlighting structured plot layouts, asphalt roads, and utility connections.',
    details: ['Promoter • Builder • Developer', 'Structured Plot Layouts', 'Residential & Commercial', 'Nagpur District']
  }
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    number: '01',
    title: 'Strategic Locations',
    description: 'We select property locations around Nagpur with strong connectivity to key roads, highways, and growing metropolitan corridors.'
  },
  {
    number: '02',
    title: 'Planned Layouts',
    description: 'Every layout is designed with proper road widths (60ft / 200ft touch points), demarcated boundaries, and structural access.'
  },
  {
    number: '03',
    title: 'Residential & Commercial Options',
    description: 'Whether you want to build your dream home or invest in commercial plot space, we offer versatile options suited to your needs.'
  },
  {
    number: '04',
    title: 'Flexible Property Opportunities',
    description: 'Clear installment options, transparent initial down payment structures (e.g. 25% down payment / 24 to 36 month plans), and direct developer interaction.'
  },
  {
    number: '05',
    title: 'Personalized Guidance',
    description: 'Direct interaction with Ritesh Realtors to understand property boundaries, site visits, and layout details without third-party confusion.'
  }
];

export const INSTAGRAM_INFO = {
  handle: '@riteshrealtors',
  postsCount: 4,
  followersCount: 25,
  followingCount: 86,
  tagline: 'Promoter • Builder • Developers | Nagpur',
  description: 'Property updates, new launches & local plotted opportunities around Nagpur.'
};

export const CONNECTIVITY_LANDMARKS = [
  { name: 'Nagpur City Center', distance: 'Main Hub Access', tag: 'Metropolitan Core' },
  { name: 'Mouza Chimnazari', distance: 'Location Focus', tag: 'Samarth Nagari Site' },
  { name: 'Umred Road Corridor', distance: 'High-Growth Arterial', tag: 'Indravan City Area' },
  { name: 'New Nagpur Metro Region', distance: 'Expanding Zone', tag: 'Metro Region Access' },
  { name: 'Samruddhi Mahamarg Highway', distance: 'Major Expressway', tag: 'State Highway Link' }
];
