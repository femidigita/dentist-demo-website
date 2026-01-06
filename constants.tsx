
import { ServiceContent, TeamMember, StatItem, FAQItem, TechItem } from './types';

export const SERVICES_DATA: ServiceContent[] = [
  {
    id: 'consulting',
    title: 'Precision Dental Consulting',
    description: 'Bespoke oral health strategies for corporate executives and high-net-worth individuals, focusing on long-term structural integrity and aesthetic perfection.',
    features: ['Comprehensive Digital Mapping', 'Longevity Planning', 'Executive Concierge Support'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'audit',
    title: 'Diagnostic System Audit',
    description: 'State-of-the-art diagnostic review using AI-enhanced imaging to identify microscopic risks before they manifest as clinical challenges.',
    features: ['3D Volumetric Imaging', 'Pathology Prediction', 'Structural Stress Testing'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'specialized',
    title: 'Specialized Bio-Restoration',
    description: 'Advanced restorative procedures utilizing aerospace-grade materials and biocompatible ceramics for seamless biological integration.',
    features: ['Ceramic Integration', 'Micro-Surgical Precision', 'Guided Bone Regeneration'],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Alistair Vance',
    role: 'Chief Dental Officer',
    bio: 'Pioneer in robotic dental surgery with over 25 years of clinical excellence.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 2,
    name: 'Dr. Marcus Thorne',
    role: 'Surgical Lead',
    bio: 'Expert in complex maxillo-facial trauma and regenerative biologics.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 3,
    name: 'Dr. Elena Rossi',
    role: 'Director of Prosthodontics',
    bio: 'Specialist in aesthetic reconstruction and high-fidelity smile design.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 4,
    name: 'Dr. Sarah Chen',
    role: 'Orthodontic Specialist',
    bio: 'Leading innovator in invisible alignment technologies and skeletal growth.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400',
    socials: { linkedin: '#', twitter: '#' }
  }
];

export const STATS: StatItem[] = [
  { label: 'Fortune 500 Partners', value: 120, suffix: '+' },
  { label: 'Successful Procedures', value: 15, suffix: 'k+' },
  { label: 'Patient Satisfaction', value: 99, suffix: '%' },
  { label: 'Industry Awards', value: 42, suffix: '' }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "How does Elite Dental Group ensure clinical privacy?",
    answer: "We utilize multi-tier data encryption and strictly adhere to global HIPAA and GDPR standards. Our facility is a closed ecosystem, ensuring your health records and identity remain within our secure perimeter."
  },
  {
    question: "Do you offer international concierge services?",
    answer: "Yes. Our executive concierge team manages all travel, logistics, and recovery accommodations for our international clients, providing a seamless end-to-end clinical journey."
  },
  {
    question: "What makes your bio-restorative materials unique?",
    answer: "We use proprietary zirconia and lithium disilicate ceramics engineered in our onsite ISO-certified lab, offering superior biocompatibility and fracture resistance compared to standard materials."
  },
  {
    question: "Can I request a specific lead clinician?",
    answer: "Availability for specific clinicians is managed by our intake directors. We match your specific clinical needs with the specialist whose expertise best aligns with your biological profile."
  }
];

export const TECH_DATA: TechItem[] = [
  {
    title: "AI Diagnostic Suite",
    description: "Neural networks trained on millions of pathology scans to detect decay and structural weakness with 99.8% accuracy.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Robotic Surgical Assist",
    description: "Sub-millimeter precision for implant placement, reducing recovery time by up to 60% through minimally invasive techniques.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "3D Bio-Printing",
    description: "Instant creation of customized temporary restorations and surgical guides using advanced bio-compatible polymers.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  }
];

export const JOURNEY_DATA = [
  {
    step: "01",
    title: "Surgical Assessment",
    desc: "A comprehensive structural audit using volumetric 3D mapping and AI pathology analysis."
  },
  {
    step: "02",
    title: "Biomimetic Planning",
    desc: "Engineering a restorative blueprint that aligns with your unique skeletal geometry."
  },
  {
    step: "03",
    title: "Precision Execution",
    desc: "Surgical restoration performed in our sterile environments with robotic assistance."
  },
  {
    step: "04",
    title: "Dynamic Recovery",
    desc: "Accelerated cellular healing protocols supervised by our concierge medical team."
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote: "The level of clinical precision at Elite Dental is equivalent to the engineering standards in aerospace. It is structural mastery.",
    author: "Jameson Sterling",
    position: "Managing Director",
    company: "Global Capital Holdings"
  },
  {
    quote: "Complete discretion combined with surgical excellence. The concierge team handled everything, from logistics to post-op recovery.",
    author: "Dr. Helena Varga",
    position: "Executive Chair",
    company: "Varga Bio-Tech"
  },
  {
    quote: "Elite Dental doesn't just treat symptoms; they manage biological assets. My oral health strategy is now part of my overall longevity plan.",
    author: "Marcus Thorne",
    position: "CEO",
    company: "Nexus Logistics"
  }
];
