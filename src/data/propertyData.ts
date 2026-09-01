import { Project, GalleryItem } from '../types/realEstate';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'samarth-nagari-1',
    name: 'Samarth Nagari – 1',
    tagline: 'NATP Sanctioned Residential & Commercial Plots',
    location: 'Mouza Chimnazari, Nagpur',
    areaRegion: 'Chimnazari Corridor',
    category: 'Plots',
    startingPrice: 'Starting from ₹550/- sq.ft.',
    image: '/images/samarth1.jpg',
    badge: 'NATP Sanctioned',
    description: 'Thoughtfully planned residential and commercial plot layout at Mouza Chimnazari with 60ft DP roads and easy EMI plans.',
    keyHighlights: [
      'NATP Sanctioned Layout',
      '60 ft DP Road Network',
      '25% Down Payment Option',
      '24 Month Easy Installments',
      'Starting from ₹550/- per sq.ft.'
    ],
    specs: [
      { iconName: 'ShieldCheck', label: 'Sanction', value: 'NATP Approved' },
      { iconName: 'Route', label: 'Main Road', value: '60 Ft Road Layout' },
      { iconName: 'Wallet', label: 'Down Payment', value: '25% Down Payment' },
      { iconName: 'CalendarCheck', label: 'Payment Period', value: '24 Month EMI' }
    ],
    paymentTerms: '25% down payment on agreement, remaining balance in 24 easy monthly installments.',
    featured: true
  },
  {
    id: 'indravan-city',
    name: 'Indravan City',
    tagline: '200 Ft Road Touch Layout in New Nagpur Metro Region',
    location: 'Umred Road Area, Mouza Chimnazari',
    areaRegion: 'New Nagpur Metro Region',
    category: 'Plots',
    startingPrice: 'Contact for Current Pricing',
    image: '/images/indravan.jpg',
    badge: '200 Ft Road Touch',
    description: 'Premier plotted development along Umred Road corridor in New Nagpur Metro Region with direct 200 ft road touch access.',
    keyHighlights: [
      '200 ft Main Road Touch Layout',
      '36 Months Interest-Free Installments',
      'Asphalt / Dambar Internal Roads',
      'Electrification & Street Lighting',
      'Landscaped Garden & Tree Plantation',
      'Near Samruddhi Expressway Corridor'
    ],
    specs: [
      { iconName: 'Compass', label: 'Region', value: 'New Nagpur Metro' },
      { iconName: 'Route', label: 'Road Access', value: '200 Ft Road Touch' },
      { iconName: 'CalendarCheck', label: 'Installments', value: '36 Months Interest-Free' },
      { iconName: 'Zap', label: 'Infrastructure', value: 'Power & Water Ready' }
    ],
    paymentTerms: 'Convenient 36-month interest-free installment options available.',
    featured: true
  },
  {
    id: 'samarth-residency',
    name: 'Samarth Residency',
    tagline: 'Premium 2 BHK & 3 BHK Modern Apartments',
    location: 'Prime Nagpur Growth Corridor',
    areaRegion: 'Nagpur Central Access',
    category: 'Flats',
    startingPrice: 'Book with Booking Amount',
    image: '/images/flats.jpg',
    badge: 'New Launch Flats',
    description: 'Modern 2 & 3 BHK residential apartments designed with contemporary architecture, private balconies, and landscaped garden amenities.',
    keyHighlights: [
      'Spacious 2 BHK & 3 BHK Layouts',
      'Contemporary Elevators & Reserved Parking',
      '24x7 Gated Security & Water Supply',
      'Landscaped Central Park & Kids Play Zone',
      'Convenient Access to Metro Station'
    ],
    specs: [
      { iconName: 'Building', label: 'Flat Types', value: '2 & 3 BHK Apartments' },
      { iconName: 'ShieldCheck', label: 'Security', value: '24x7 Gated Security' },
      { iconName: 'Trees', label: 'Amenities', value: 'Park & Play Zone' },
      { iconName: 'Compass', label: 'Connectivity', value: 'Near Metro Corridor' }
    ],
    paymentTerms: 'Easy home loan tie-ups & flexible construction-linked payment plans.',
    featured: true
  },
  {
    id: 'samarth-commercial-park',
    name: 'Samarth Commercial Zone',
    tagline: 'High-Visibility Commercial Plot Spaces',
    location: 'Mouza Chimnazari / Umred Road',
    areaRegion: 'Commercial Corridor',
    category: 'Commercial',
    startingPrice: 'Contact for Layout Plan',
    image: '/images/samarth2.jpg',
    badge: 'Commercial Sector',
    description: 'Strategic commercial plots located along main road frontage, ideal for shops, warehouses, offices, and long-term land investment.',
    keyHighlights: [
      'Main DP Road Touch Commercial Frontage',
      'NATP Sanctioned Layout Specifications',
      'High Traffic Growth Zone',
      'Direct Highway Accessibility'
    ],
    specs: [
      { iconName: 'Building2', label: 'Category', value: 'Commercial Plots' },
      { iconName: 'Route', label: 'Road Width', value: '60 Ft / 200 Ft Touch' },
      { iconName: 'TrendingUp', label: 'Value Growth', value: 'High Potential Zone' }
    ],
    paymentTerms: 'Custom payment schedules on request.',
    featured: false
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Samarth Nagari – 1 Project Poster',
    projectRef: 'Samarth Nagari – 1',
    category: 'Layout Plan',
    imageUrl: '/images/samarth1.jpg',
    caption: 'Official promotional post highlighting NATP sanction, 60ft road layout, 25% down payment and 24 month EMI terms.',
    details: ['NATP Sanctioned', '60 Ft DP Road', 'Starting ₹550/sq.ft', '24 Month EMI']
  },
  {
    id: 'gal-2',
    title: 'Samarth Residency Apartments Render',
    projectRef: 'Samarth Residency',
    category: 'Residential Flats',
    imageUrl: '/images/flats.jpg',
    caption: 'Architectural render of Samarth Residency offering modern 2 & 3 BHK flats in Nagpur.',
    details: ['2 & 3 BHK Flats', 'Gated Security', 'Landscaped Gardens', 'Nagpur Location']
  },
  {
    id: 'gal-3',
    title: 'Indravan City 200 Ft Road Touch Overview',
    projectRef: 'Indravan City',
    category: 'Entrance & Road',
    imageUrl: '/images/indravan.jpg',
    caption: 'Promotional graphic showing 200 ft road touch layout in New Nagpur Metro Region near Samruddhi Highway corridor.',
    details: ['200 Ft Road Touch', '36 Months Interest-Free', 'Garden & Trees', 'Water & Power']
  },
  {
    id: 'gal-4',
    title: 'Samarth Nagari Aerial Layout Overview',
    projectRef: 'Samarth Nagari',
    category: 'Aerial Overview',
    imageUrl: '/images/samarth2.jpg',
    caption: 'High-angle aerial presentation showcasing green surroundings and plot demarcations around Mouza Chimnazari.',
    details: ['Demarcated Plots', 'Asphalt Internal Roads', 'Nagpur Suburban Zone']
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

export const CONNECTIVITY_LANDMARKS = [
  { name: 'Nagpur City Center', distance: 'Main Hub Access', tag: 'Metropolitan Core' },
  { name: 'Mouza Chimnazari', distance: 'Location Focus', tag: 'Samarth Nagari Site' },
  { name: 'Umred Road Corridor', distance: 'High-Growth Arterial', tag: 'Indravan City Area' },
  { name: 'New Nagpur Metro Region', distance: 'Expanding Zone', tag: 'Metro Region Access' },
  { name: 'Samruddhi Mahamarg Highway', distance: 'Major Expressway', tag: 'State Highway Link' }
];

export const NAGPUR_INVESTMENT_REASONS = [
  {
    id: 'samruddhi',
    title: 'Samruddhi Mahamarg Expressway',
    subtitle: 'State Expressway Corridor',
    description: 'Direct high-speed expressway connectivity linking Nagpur to Mumbai, drastically cutting transit times and boosting land valuation across connecting hubs.',
    iconName: 'Route',
    badge: 'Expressway Hub'
  },
  {
    id: 'metro',
    title: 'Nagpur Metro Expansion',
    subtitle: 'Rapid Suburban Transit',
    description: 'Expanding Metro rail lines connecting key corridors (Umred Road & Metro region), driving rapid commercial and residential plot demand.',
    iconName: 'TrainTrack',
    badge: 'Metro Corridor'
  },
  {
    id: 'mihan',
    title: 'MIHAN & Logistics SEZ',
    subtitle: 'Industrial & Employment Core',
    description: 'India\'s premier multi-modal cargo and aviation hub bringing thousands of skilled professionals, driving housing and plot demand in Nagpur.',
    iconName: 'Building2',
    badge: 'Job Growth'
  },
  {
    id: 'affordable',
    title: 'High ROI & Flexible Entry',
    subtitle: 'Plot Rates Starting ₹550/sq.ft.',
    description: 'NATP sanctioned plots with 25% initial down payment and up to 36-month interest-free EMI plans make property ownership in Nagpur highly accessible.',
    iconName: 'TrendingUp',
    badge: 'High Returns'
  }
];

export const INSTAGRAM_INFO = {
  handle: '@riteshrealtors',
  postsCount: 4,
  followersCount: 25,
  followingCount: 86,
  tagline: 'Promoter • Builder • Developers | Nagpur',
  description: 'Property updates, plot launches & residential flat opportunities around Nagpur.'
};
