import { ServiceItem, ProjectItem, ProcessStep, Testimonial, FaqItem } from '../types';

export const COMPANY_DETAILS = {
  name: 'Imprescape Ltd',
  tagline: 'Domestic Construction & Extensions, Cheshire',
  headlineTagline: 'DOMESTIC CONSTRUCTION, EXTENSIONS & GROUNDWORKS',
  phone: '020 3835 3534',
  phoneClean: '+442038353534',
  email: 'info@imprescapeltd.co.uk',
  address: 'Macclesfield, Cheshire, United Kingdom',
  primaryAreas: ['Macclesfield', 'Cheshire', 'Staffordshire', 'Shropshire'],
  experienceYears: 'In-House',
  serviceCount: '6',
  countiesCount: '4',
  quoteType: 'Fixed written quote',
  guaranteeHighlight: 'Free on-site survey · Fixed written quote · No call-out charge',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'extensions',
    number: '01',
    title: 'Extensions',
    shortTitle: 'Extensions',
    tagline: 'Single & Double Storey Domestic Extensions',
    shortDesc: 'Single and double-storey extensions, from planning and building regs through to the finished, decorated room.',
    fullDesc: 'We handle every stage of your home extension with a dedicated in-house team. From initial architectural liaison and groundwork to brick matching, roofing, insulation, electrics, plastering, and final interior decoration. We work cleanly and considerately to minimize disruption to your home life.',
    features: [
      'Single & double-storey rear and side extensions',
      'Full building regulations compliance & structural sign-off',
      'Seamless brick, render, and stone matching with existing fabric',
      'Structural steel installations & open-plan knock-throughs',
      'High-performance roof lanterns & bi-folding door integration',
      'Complete internal fit-out including plumbing, plastering & electrics'
    ],
    materials: ['Accrington & Cheshire Brick', 'Slate & Clay Roof Tiles', 'Aluminium Bi-folds', 'Velux Rooflights', 'Structural RSJs'],
    swatches: [
      { name: 'Cheshire Red Brick', color: '#a3503e', description: 'Traditional local clay brick' },
      { name: 'Natural Sandstone', color: '#c2b39a', description: 'Hand-dressed masonry' },
      { name: 'Heritage Lime Render', color: '#ebe6dc', description: 'Breathable weather coat' }
    ],
    typicalDuration: '8 - 14 weeks',
    guaranteeYears: 10,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    colorTheme: '#a3503e'
  },
  {
    id: 'renovations',
    number: '02',
    title: 'Renovations',
    shortTitle: 'Renovations',
    tagline: 'Full & Partial Home Renovations & Knock-Throughs',
    shortDesc: 'Full or partial home renovations — knock-throughs, re-plastering, and updating older properties for how you live now.',
    fullDesc: 'Transforming period and mid-century properties across Cheshire, Staffordshire, and Shropshire into contemporary, functional living environments. We manage chimney breast removals, RSJ beam installations, thermal insulation upgrades, damp proofing, and luxury kitchen/living knock-throughs.',
    features: [
      'Load-bearing wall removal & structural engineer calculations',
      'Open-plan kitchen and living space creation',
      'Complete re-skimming, dry-lining, and traditional plastering',
      'Damp proofing, thermal wall insulation & acoustic dampening',
      'Underfloor heating installation and screeding',
      'Period feature restoration and sympathetic modern upgrades'
    ],
    materials: ['Universal Steel Beams', 'Thistle Plaster', 'Kingspan Insulation', 'Engineered Oak', 'Architectural Glazing'],
    swatches: [
      { name: 'Warm Off-White Plaster', color: '#e8e4dc', description: 'Smooth skim finish' },
      { name: 'Limed Heritage Oak', color: '#b9a58b', description: 'Premium flooring' },
      { name: 'Anthracite Steel', color: '#3d4246', description: 'Exposed structural accents' }
    ],
    typicalDuration: '4 - 10 weeks',
    guaranteeYears: 10,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    colorTheme: '#c2b39a'
  },
  {
    id: 'resin-bound',
    number: '03',
    title: 'Resin bound driveways',
    shortTitle: 'Resin bound',
    tagline: 'SUDS-Compliant, Permeable & Weed-Resistant Driveways',
    shortDesc: 'A smooth, permeable surface in a range of aggregate blends — weed-resistant, SUDS-compliant, and laid to fall correctly around drains and thresholds.',
    fullDesc: 'Our UV-stable resin bound driveways offer the gold standard in kerb appeal and low maintenance. Fully permeable to prevent standing water and comply with UK SUDS regulations. Hand-trowelled to a flawless, smooth finish over a prepared porous concrete or tarmac sub-base.',
    features: [
      '100% SUDS compliant — natural rainwater drainage with no puddles',
      'UV-stable clear polyurethane resin preventing yellowing or fading',
      'Smooth, slip-resistant finish suitable for wheelchairs and pushchairs',
      'Highly resistant to weeds, oil stains, frost damage, and moss',
      'Laser-levelled falls to existing ACO drains and door thresholds',
      'Wide spectrum of natural British and European aggregate blends'
    ],
    materials: ['UV-Stable Polyurethane Resin', 'Washed & Dried Natural Aggregates', 'Aluminium Beading Edges', 'Recycled Granite'],
    swatches: [
      { name: 'Golden Pearl', color: '#d9bf8f', description: 'Warm honey & gold quartz' },
      { name: 'Silver Granite', color: '#9fa4a6', description: 'Crisp contemporary silver flint' },
      { name: 'Autumn Harvest', color: '#a67c52', description: 'Rich chestnut & amber pebbles' },
      { name: 'Onyx Charcoal', color: '#404347', description: 'Deep modern basalt blend' }
    ],
    typicalDuration: '3 - 5 days',
    guaranteeYears: 15,
    image: 'https://media.istockphoto.com/id/1582388250/photo/coarse-surface-of-pavement-made-of-pink-tiles-of-resin-bound-gravel.webp?a=1&b=1&s=612x612&w=0&k=20&c=uj-XiDXf7DPvLbUlTGm0XY20bhduk8En-pKK3dci66Y=',
    colorTheme: '#5b7065'
  },
  {
    id: 'block-paving',
    number: '04',
    title: 'Block paving',
    shortTitle: 'Block paving',
    tagline: 'Precision Laid Block Paving Driveways & Pathways',
    shortDesc: 'Traditional block paving in a pattern and colour to match your property, set on proper sub-base and edge restraints so it stays put for years.',
    fullDesc: 'Timeless block paving engineered for heavy vehicular loads. We excavate to proper ground depths, install geotextile weed membranes, compact Type 1 MOT sub-base, and concrete all edge restraints securely before laying your preferred 90° herringbone, 45° herringbone, or stretcher bond.',
    features: [
      'Minimum 150mm compacted MOT Type 1 sub-base to prevent sinking',
      'Concrete-haunched edge restraints around all perimeters',
      'Herringbone (45° / 90°), basketweave, and stretcher bond layouts',
      'Tumbled antique rumbled blocks or crisp modern chamfered pavers',
      'Kiln-dried silica jointing sand with optional polymer sand sealing',
      'Integrated recessed manhole covers for a clean, uninterrupted look'
    ],
    materials: ['Marshalls / Brett Concrete Paviours', 'Type 1 MOT Sub-Base', 'Sharp Screeding Sand', 'Polymer Jointing Compound'],
    swatches: [
      { name: 'Charcoal Slate', color: '#4b4e53', description: 'Modern dark paving block' },
      { name: 'Brindle Multi', color: '#8c5949', description: 'Classic red/charcoal blend' },
      { name: 'Buff Sandstone', color: '#c4ad8d', description: 'Warm natural gravel hue' }
    ],
    typicalDuration: '4 - 7 days',
    guaranteeYears: 10,
    image: 'https://images.unsplash.com/photo-1657045898661-1a56bc5a8fd2?auto=format&fit=crop&w=1200&q=80',
    colorTheme: '#4a504d'
  },
  {
    id: 'indian-stone',
    number: '05',
    title: 'Indian stone patios',
    shortTitle: 'Indian stone',
    tagline: 'Hand-Dressed Natural Sandstone Patios & Garden Terraces',
    shortDesc: 'Natural sandstone patios and paths, hand-laid and pointed, for gardens and entrances that need to feel less driveway, more finished space.',
    fullDesc: 'Authentic riven and sawn Indian sandstone terrace installations that bring timeless warmth and organic elegance to your outdoor garden. Each slab is calibrated, laid on a full wet mortar bed with slurry primer bonding, and pointed with weather-resistant resin jointing.',
    features: [
      'Calibrated natural sandstone in 4-size mixed project patio packs',
      'Full wet mortar bed laying — no dot-and-dab to eliminate rocking',
      'SBR bond slurry coating on every slab underside for lifetime adhesion',
      'Resin grout jointing (weatherproof, weed-proof, no crumbly cement)',
      'Subtle falls for effortless rainwater run-off away from the building',
      'Bullnose step edging and raised planter integration'
    ],
    materials: ['Riven & Sawn Sandstone', 'SBR Slurry Primer', 'Polymer Resin Jointing', 'MOT Type 1 Base'],
    swatches: [
      { name: 'Raj Green', color: '#7a8174', description: 'Subtle olive, brown & grey tones' },
      { name: 'Autumn Brown', color: '#8f7259', description: 'Rich earthy sandstone blend' },
      { name: 'Kandla Grey', color: '#979a9d', description: 'Crisp contemporary silver stone' },
      { name: 'Rippon Buff', color: '#d2b68c', description: 'Warm gold with distinctive veining' }
    ],
    typicalDuration: '4 - 8 days',
    guaranteeYears: 10,
    image: 'https://plus.unsplash.com/premium_photo-1675005272076-ddc6eeb97328?auto=format&fit=crop&w=1200&q=80',
    colorTheme: '#8f8576'
  },
  {
    id: 'rubber-surfacing',
    number: '06',
    title: 'Rubber surfacing',
    shortTitle: 'Rubber surfacing',
    tagline: 'Soft-Impact Wet Pour & Rubber Crumb Flooring',
    shortDesc: 'Soft-impact rubber crumb surfacing for play areas and pool surrounds — slip-resistant and low-maintenance underfoot.',
    fullDesc: 'Seamless wet-pour rubber surfacing designed for children’s play areas, garden safety paths, pool perimeters, and elderly care facilities. Highly shock-absorbent, slip-resistant in wet British weather, porous for rapid drainage, and available in vibrant or natural forest blends.',
    features: [
      'Critical Fall Height (CFH) certified shock-absorbing base layers',
      'EPDM rubber crumb granules with UV-stabilized polyurethane binders',
      'Slip-resistant texture even when wet from rain or pool splashes',
      'Continuous seamless pour without trip hazard joints or edges',
      'Excellent drainage allowing quick drying after rain',
      'Muted earth tones (moss green, slate, bark) or vibrant play colours'
    ],
    materials: ['EPDM Rubber Granules', 'SBR Base Shockpad', 'Moisture-Curing Polyurethane Binder'],
    swatches: [
      { name: 'Forest Moss Green', color: '#2b4d3a', description: 'Natural lawn-blending tone' },
      { name: 'Bark Mulch Brown', color: '#574134', description: 'Earthy woodland aesthetic' },
      { name: 'Slate Anthracite', color: '#383e3c', description: 'Clean modern safety surface' }
    ],
    typicalDuration: '2 - 4 days',
    guaranteeYears: 10,
    image: 'https://static.vecteezy.com/system/resources/previews/002/197/880/large_2x/colorful-ground-in-the-playground-free-photo.jpg',
    colorTheme: '#234433'
  }
];

export const FEATURED_PROJECT = {
  title: 'Built to last, finished with care.',
  badge: 'FEATURED PROJECT',
  description: 'Every project is handled by our own team — from foundations and structure through to the final clean-up. We ensure every sub-base is excavated to bedrock standards, drainage is SUDS-compliant, and the site is left swept and secure at the end of each working day.',
  highlights: [
    'Proper sub-base and drainage',
    'Materials matched to your property',
    'Site left tidy every day',
    'Full building control sign-off & warranty'
  ],
  beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80',
  afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
  location: 'Macclesfield, Cheshire',
  scope: 'Rear open-plan extension & seamless resin-bound terrace'
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Survey',
    tagline: 'Initial on-site assessment',
    description: 'We visit, measure, and talk through design, materials and any structural requirements on site.',
    details: [
      'Free visit to your home at a convenient time',
      'Precise laser measurements & ground assessment',
      'Advice on materials, permits, and building regs',
      'No high-pressure sales — just practical guidance'
    ],
    iconName: 'Ruler'
  },
  {
    number: '02',
    title: 'Quote',
    tagline: 'Itemized written guarantee',
    description: 'A fixed, written price — no surprises once work gets under way.',
    details: [
      'Complete itemized cost breakdown',
      'Fixed price guarantee — no hidden extras',
      'Transparent timeline & payment milestones',
      'Clear scope of work and specifications'
    ],
    iconName: 'FileCheck'
  },
  {
    number: '03',
    title: 'Build',
    tagline: 'Crafted by our in-house team',
    description: 'Foundations, structure, and finish, carried out by our own team.',
    details: [
      'Same skilled, friendly craftsmen every day',
      'High-grade commercial machinery & tools',
      'Continuous site tidiness & neighbor consideration',
      'Regular progress updates throughout the job'
    ],
    iconName: 'Hammer'
  },
  {
    number: '04',
    title: 'Handover',
    tagline: 'Final walk-through & warranty',
    description: 'Site cleared, work explained, and aftercare notes left with you.',
    details: [
      'Complete site power-wash and thorough clean-up',
      'Joint inspection with you to check every detail',
      'Written care instructions & guarantee documents',
      'Dedicated aftercare contact for peace of mind'
    ],
    iconName: 'ShieldCheck'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Professional from the first survey visit through to the final handover.',
    author: 'Homeowner',
    role: 'Double-Storey Extension & Landscaping',
    location: 'Staffordshire',
    county: 'Staffordshire',
    projectType: 'Extensions',
    rating: 5
  },
  {
    id: '2',
    quote: 'Tidy, on time, and the finished space looks exactly as we pictured it.',
    author: 'Homeowner',
    role: 'Home Renovation & Knock-Through',
    location: 'Macclesfield',
    county: 'Macclesfield',
    projectType: 'Renovations',
    rating: 5
  },
  {
    id: '3',
    quote: 'The resin driveway completely transformed the front of our home. Permeable, perfectly smooth, and no more puddles. Highly recommended.',
    author: 'David & Sarah T.',
    role: 'Resin Bound Driveway (140m²)',
    location: 'Alderley Edge, Cheshire',
    county: 'Cheshire',
    projectType: 'Resin bound',
    rating: 5
  },
  {
    id: '4',
    quote: 'We were impressed by the polite team who turned up promptly every morning and left the driveway swept before going home.',
    author: 'Mark R.',
    role: 'Block Paving & Indian Stone Patio',
    location: 'Shropshire',
    county: 'Shropshire',
    projectType: 'Block paving',
    rating: 5
  }
];

export const GALLERY_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Contemporary Rear Extension',
    category: 'extensions',
    categoryLabel: 'Extensions',
    location: 'Macclesfield',
    county: 'Macclesfield',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=900&q=80',
    description: 'Single-storey kitchen extension with aluminium bi-fold doors, lantern roof and seamless brick matching.',
    materials: 'Cheshire Red Brick, Powder Coated Aluminium, Velux',
  },
  {
    id: 'proj-2',
    title: 'Open-Plan Knock-Through',
    category: 'renovations',
    categoryLabel: 'Renovations',
    location: 'Alderley Edge',
    county: 'Cheshire',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
    description: 'Removal of load-bearing walls, steel RSJ integration, underfloor heating, and bespoke kitchen installation.',
    materials: 'Structural Steel, Engineered Oak, Thistle Multi-finish',
  },
  {
    id: 'proj-3',
    title: 'Golden Pearl Resin Driveway',
    category: 'resin-bound',
    categoryLabel: 'Resin bound',
    location: 'Prestbury',
    county: 'Cheshire',
    year: '2025',
    image: 'https://media.istockphoto.com/id/1582388250/photo/coarse-surface-of-pavement-made-of-pink-tiles-of-resin-bound-gravel.webp?a=1&b=1&s=612x612&w=0&k=20&c=uj-XiDXf7DPvLbUlTGm0XY20bhduk8En-pKK3dci66Y=',
    description: 'Full excavation, porous tarmac sub-base, and UV-stable Golden Pearl aggregate blend with charcoal block border.',
    materials: 'Golden Pearl Aggregate, UV Polyurethane Resin, Charcoal Kerbs',
  },
  {
    id: 'proj-4',
    title: 'Charcoal Herringbone Block Paving',
    category: 'block-paving',
    categoryLabel: 'Block paving',
    location: 'Leek',
    county: 'Staffordshire',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1657045898661-1a56bc5a8fd2?auto=format&fit=crop&w=900&q=80',
    description: '45-degree herringbone driveway with contrasting kerb edging and recessed manhole covers for 3 vehicles.',
    materials: 'Brett 50mm Paviours, Type 1 MOT Base, Silica Sand',
  },
  {
    id: 'proj-5',
    title: 'Raj Green Sandstone Garden Terrace',
    category: 'indian-stone',
    categoryLabel: 'Indian stone',
    location: 'Knutsford',
    county: 'Cheshire',
    year: '2025',
    image: 'https://plus.unsplash.com/premium_photo-1675005272076-ddc6eeb97328?auto=format&fit=crop&w=900&q=80',
    description: 'Calibrated Indian stone patio laid on full wet mortar bed with SBR primer and polymer resin jointing.',
    materials: 'Raj Green Calibrated Sandstone, Rompox Resin Grout',
  },
  {
    id: 'proj-6',
    title: 'Forest Green Play Surfacing',
    category: 'rubber-surfacing',
    categoryLabel: 'Rubber surfacing',
    location: 'Market Drayton',
    county: 'Shropshire',
    year: '2025',
    image: 'https://static.vecteezy.com/system/resources/previews/002/197/880/large_2x/colorful-ground-in-the-playground-free-photo.jpg',
    description: 'Seamless wet-pour rubber impact absorbing play perimeter around sunken garden trampoline and swing set.',
    materials: 'EPDM Rubber Crumb, SBR Shockpad Base, Polyurethane Binder',
  },
  {
    id: 'proj-7',
    title: 'Two-Storey Side Extension',
    category: 'extensions',
    categoryLabel: 'Extensions',
    location: 'Congleton',
    county: 'Cheshire',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80',
    description: 'Master bedroom with en-suite above and garage conversion below, finished with matching slate roof tiles.',
    materials: 'Facing Brick, Welsh Slate, Aluminium Casement Windows',
  },
  {
    id: 'proj-8',
    title: 'Silver Granite Resin & Steps',
    category: 'resin-bound',
    categoryLabel: 'Resin bound',
    location: 'Stoke-on-Trent',
    county: 'Staffordshire',
    year: '2024',
    image: 'https://media.istockphoto.com/id/1582388250/photo/coarse-surface-of-pavement-made-of-pink-tiles-of-resin-bound-gravel.webp?a=1&b=1&s=612x612&w=0&k=20&c=uj-XiDXf7DPvLbUlTGm0XY20bhduk8En-pKK3dci66Y=',
    description: 'Modern two-tone resin driveway with curved riser steps and integrated recessed ground lighting.',
    materials: 'Silver Granite Aggregates, Granite Risers, LED Spotlights',
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'Do you offer free quotes?',
    answer: 'Yes. We provide a free on-site survey and a fixed, written quote with no call-out charge. We visit your property, assess the ground or structural requirements, discuss your design preferences, and provide a clear, comprehensive quote with no obligation.'
  },
  {
    id: 'faq-2',
    category: 'general',
    question: 'Which areas do you cover?',
    answer: 'We cover Macclesfield and the whole of Cheshire (including Wilmslow, Alderley Edge, Knutsford, Prestbury, Poynton, Congleton), Staffordshire (Leek, Stoke-on-Trent, Biddulph, Newcastle-under-Lyme), and Shropshire (Market Drayton, Whitchurch, Oswestry).'
  },
  {
    id: 'faq-3',
    category: 'planning',
    question: 'Do you handle planning permission?',
    answer: 'Yes. For extensions and major renovations, many domestic projects fall under Permitted Development rights, but where full Planning Permission or Building Regulations approval is required, we manage the submissions, structural engineer calculations, and building control inspections from start to completion.'
  },
  {
    id: 'faq-4',
    category: 'general',
    question: 'Who carries out the work?',
    answer: 'All projects are carried out by our own small, highly skilled in-house team. We do not pass your job on to third-party sub-contractors, meaning you have the same trusted faces on site from day one until the final clean-up.'
  },
  {
    id: 'faq-5',
    category: 'driveways',
    question: 'Are resin bound driveways SUDS compliant and weed resistant?',
    answer: 'Yes. Our resin bound surfaces are 100% SUDS (Sustainable Urban Drainage Systems) compliant. Water permeates freely through the stone matrix down into the sub-base, preventing standing water and ice pooling. Because there is no loose sand or soil, weed seeds cannot root from below.'
  },
  {
    id: 'faq-6',
    category: 'costs',
    question: 'Are your quotes truly fixed price?',
    answer: 'Yes. Once we conduct the physical survey and supply a written quotation, that price is fixed for the agreed scope of works. If you decide to add optional extra features during the build, we will provide a written price adjustment for your approval before proceeding.'
  }
];

export const AREAS_LIST = [
  {
    name: 'Macclesfield',
    county: 'Cheshire',
    description: 'Our home base — providing fast survey response and domestic building services throughout Macclesfield and surrounding villages.',
    postcodes: 'SK10, SK11',
    popularServices: ['Extensions', 'Resin Bound Driveways', 'Renovations']
  },
  {
    name: 'Cheshire',
    county: 'Cheshire',
    description: 'Serving Alderley Edge, Wilmslow, Knutsford, Prestbury, Poynton, Congleton, Northwich, and Crewe.',
    postcodes: 'SK9, WA16, SK10, CW12, CW8, CW9',
    popularServices: ['Luxury Extensions', 'Indian Stone Patios', 'Resin Driveways']
  },
  {
    name: 'Staffordshire',
    county: 'Staffordshire',
    description: 'Covering Leek, Stoke-on-Trent, Biddulph, Newcastle-under-Lyme, Stafford, and the Staffordshire Moorlands.',
    postcodes: 'ST13, ST1, ST4, ST5, ST8, ST16',
    popularServices: ['Block Paving', 'Full Renovations', 'Driveway Overhauls']
  },
  {
    name: 'Shropshire',
    county: 'Shropshire',
    description: 'Serving Market Drayton, Whitchurch, Oswestry, Shrewsbury, and surrounding rural properties.',
    postcodes: 'TF9, SY13, SY11, SY1, SY2',
    popularServices: ['Home Extensions', 'Indian Sandstone Terraces', 'Play Area Surfacing']
  }
];
