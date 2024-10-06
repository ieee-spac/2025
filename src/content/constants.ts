import {
  FaFacebookF,
  FaFigma,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6'

import { SiChromatic, SiStorybook } from 'react-icons/si'

export const METADATA = {
  title: 'IEEE SPAC 2024',
  description:
    'Official Website of the IEEE Student Professional Awareness Conference 2024, hosted in Ottawa, Ontario.',
}

export const LINKS = {
  DOMAIN: 'ieeespac.ca',
  PATRONAGE_PACKAGE:
    'https://drive.google.com/file/d/1wfvpv5T8Xg-cmt5kmps9Gzlddq9_Cdc0/view?usp=sharing',
  SPAC_TICKETS: 'https://events.vtools.ieee.org/m/436955',
  SPAC_PLUS_AGM_TICKETS: 'https://events.vtools.ieee.org/m/435598',
  LOCATION: 'https://maps.app.goo.gl/wk5vdFH7StaCvsJf7',
  INSTAGRAM: 'https://www.instagram.com/ieeespac/?hl=en',
  LINKEDIN: 'https://www.linkedin.com/company/ieeespac/',
  FACEBOOK: 'https://www.facebook.com/ieeespacottawa/',
  GITHUB: 'https://github.com/ieee-spac/2024',
  STORYBOOK: 'https://main--665264891b6bc70eded9109a.chromatic.com',
  FIGMA: 'https://www.figma.com/community/file/1417704325784085062/ieee-spac-2024-twilight-design-system',
  CHROMATIC: 'https://www.chromatic.com/library?appId=665264891b6bc70eded9109a&branch=main',
}

export const SHINY_BUTTONS = [
  {
    text: 'Become a Patron',
    href: LINKS.PATRONAGE_PACKAGE,
  },
  {
    text: 'Registration (SPAC)',
    href: LINKS.SPAC_TICKETS,
  },
  {
    text: 'Registration (SPAC+AGM)',
    href: LINKS.SPAC_PLUS_AGM_TICKETS,
  },
]

// -----------------  HEADER ------------------
export const HEADER = {
  IMAGE_URL: '/assets/twilight-design-system/ieee_spac_logo_vertical_no_year.svg',
  NAV_LINKS: [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Patronage', path: '#patronage' },
    { name: 'Contact', path: '#contact' },
  ],
}

// -----------------  HERO ------------------
export const HERO = {
  IMAGE_URL: '/assets/spac_logo_year_stars.svg',
  IMAGE_ALT_TEXT: 'Main SPAC logo with year and stars',
  TITLE: 'IEEE Student Professional Awareness Conference',
  DATE: 'November 1',
  LOCATION: 'Brookstreet Hotel',
  LOCATION_LINK: LINKS.LOCATION,
}

// --- About Section ---
export const ABOUT = {
  TITLE: 'About Us',
  PARAGRAPHS: [
    'The IEEE Student Professional Awareness Conference (SPAC) is a formal networking event & dinner that serves esteemed professionals and allows them to engage with engineering and computer science students within their fields.',
    'SPAC provides students, academics, and industry professionals an opportunity to network and bridge the gap between classrooms and boardrooms, thereby empowering attendees to build professional connections and form a bond.',
    'First hosted in 1979, SPAC has manifested itself as an event where future professionals receive exposure to the world of employment which complements their ongoing studies.',
  ],
  STAT_BUBBLES: [
    {
      number: 100,
      label: 'Companies',
      className: 'bobbing-animation-1 aspect-square relative flex flex-start',
      color: ['#FFD100', '#DE9403'],
      size: '90%',
    },
    {
      number: 300,
      label: 'Attendees',
      className: 'bobbing-animation-4 aspect-square self-end relative -bottom-4 -left-1 sm:bottom-0 sm:left-0',
      color: ['#03A6DE', '#027AB3'],
      size: '65%',
    },
    {
      number: 200,
      label: 'Students',
      className: 'bobbing-animation-2 aspect-square relative -left-10 sm:-left-10',
      color: ['#77DD77', '#03A63C'],
      size: '50%',
    },
    {
      number: 9,
      label: 'Years',
      className: 'bobbing-animation-3 aspect-square self-end relative -left-14 sm:-left-20 bottom-[20%]',
      color: ['#FFA500', '#DE6003'],
      size: '40%',
    },
  ],
  SUBTITLE: 'A typical SPAC...',
  SECTIONS: [
    {
      title: 'Presentation Section',
      description:
        'A dynamic opening with key speakers introducing the event\'s themes and goals.',
      imgSrc: '/assets/twilight-design-system/presentation_section_image.svg',
      imgAlt: 'Presentation',
    },
    {
      title: 'Professional 1:1',
      description:
        'Engage in personalized discussions with industry professionals tailored to your career interests.',
      imgSrc: '/assets/twilight-design-system/professional_1_on_1_image.svg',
      imgAlt: 'Professional Conversation',
    },
    {
      title: 'Exclusive Masterclass',
      description:
        'Interactive sessions with experts to deepen your knowledge and enhance your skills.',
      imgSrc: '/assets/twilight-design-system/exclusive_masterclass_image.svg',
      imgAlt: 'Masterclass',
    },
    {
      title: 'Workshops',
      description:
        'Hands-on workshops designed to showcase practical skills and industry insights.',
      imgSrc: '/assets/twilight-design-system/workshops_image.svg',
      imgAlt: 'Workshops',
    },
    {
      title: 'Networking Booths',
      description:
        'Explore potential career paths and company cultures directly from the insiders.',
      imgSrc: '/assets/twilight-design-system/networking_booths_image.svg',
      imgAlt: 'Networking',
    },
  ],
  BUTTONS: [
    { text: 'SPAC Tickets', href: LINKS.SPAC_TICKETS },
    { text: 'SPAC+AGM Tickets', href: LINKS.SPAC_PLUS_AGM_TICKETS },
  ],
}

export enum TIER_NAME {
  PLATINUM = 'Platinum',
  GOLD = 'Gold',
  SILVER = 'Silver',
  BRONZE = 'Bronze',
}

export interface ITIER_LOGO {
  light: string
  dark: string
  alt: string
  url: string
  overrides: string
}

export const TIER_PROPERTIES = {
  [TIER_NAME.PLATINUM]: {
    titleColor: 'text-warning',
    gradientClass: 'from-warning to-background',
  },
  [TIER_NAME.GOLD]: {
    titleColor: 'text-tertiary',
    gradientClass: 'from-tertiary to-background',
  },
  [TIER_NAME.SILVER]: {
    titleColor: 'text-slate-400',
    gradientClass: 'from-slate-400 to-background',
  },
  [TIER_NAME.BRONZE]: {
    titleColor: 'text-amber-800',
    gradientClass: 'from-amber-800 to-background',
  },
}

export const PATRONS_DATA: Record<TIER_NAME, ITIER_LOGO[]> = {
  [TIER_NAME.PLATINUM]: [
    {
      light: '/assets/patron-logos/blackberry_qnx_logo_light.svg',
      dark: '/assets/patron-logos/blackberry_qnx_logo_dark.svg',
      alt: 'QNX logo',
      url: 'https://blackberry.qnx.com',
      overrides: 'w-full bobbing-animation-1',
    },
  ],
  [TIER_NAME.GOLD]: [
    {
      light: '/assets/patron-logos/ericsson_logo.svg',
      dark: '/assets/patron-logos/ericsson_logo.svg',
      alt: 'Ericsson logo',
      url: 'https://www.ericsson.com/en/about-us/company-facts/ericsson-worldwide/canada',
      overrides: 'w-1/4 bobbing-animation-2',
    },
  ],
  [TIER_NAME.SILVER]: [
    {
      light: '/assets/patron-logos/ciena_logo.svg',
      dark: '/assets/patron-logos/ciena_logo.svg',
      alt: 'Ciena Logo',
      url: 'https://www.ciena.com',
      overrides: 'w-1/3 bobbing-animation-3',
    },
    {
      light: '/assets/patron-logos/skyworks_logo.svg',
      dark: '/assets/patron-logos/skyworks_logo_white.png',
      alt: 'Skyworks Logo',
      url: 'https://www.skyworksinc.com',
      overrides: 'w-1/3 bobbing-animation-3',
    },
    {
      light: '/assets/patron-logos/cse_logo_light.png',
      dark: '/assets/patron-logos/cse_logo_dark.png',
      alt: 'CSE Logo',
      url: 'https://www.cse-cst.gc.ca',
      overrides: 'w-1/3 bobbing-animation-3',
    },
    {
      light: '/assets/patron-logos/ised_logo_light.svg',
      dark: '/assets/patron-logos/ised_logo_dark.svg',
      alt: 'ISED logo',
      url: 'https://ised-isde.canada.ca/site/ised/en',
      overrides: 'w-1/2 bobbing-animation-3',
    },
    {
      light: '/assets/patron-logos/nrc_logo.png',
      dark: '/assets/patron-logos/nrc_logo.png',
      alt: 'NRC Logo',
      url: 'https://nrc.canada.ca/en',
      overrides: 'w-1/3 bobbing-animation-3',
    },
    {
      light: '/assets/patron-logos/canada_border_services_logo.jpg',
      dark: '/assets/patron-logos/canada_border_services_logo.jpg',
      alt: 'Canada Border Services Agency (CBSA) Logo',
      url: 'https://www.cbsa-asfc.gc.ca/menu-eng.html',
      overrides: 'w-1/4 bobbing-animation-3',
    },
    {
      light: '/assets/patron-logos/eef_uottawa_logo_light.svg',
      dark: '/assets/patron-logos/eef_uottawa_logo_dark.svg',
      alt: 'EEF uOttawa logo',
      url: 'https://www.uottawa.ca/faculty-engineering/student-experience/funding-student-initiatives',
      overrides: 'w-1/2 bobbing-animation-3',
    },
    {
      light: '/assets/patron-logos/ieee_uottawa_logo_light.svg',
      dark: '/assets/patron-logos/ieee_uottawa_logo_dark.svg',
      alt: 'uOttawa IEEE Logo',
      url: 'https://ieeeuottawa.ca',
      overrides: 'w-1/4 bobbing-animation-3',
    },
  ],
  [TIER_NAME.BRONZE]: [
    {
      light: '/assets/patron-logos/nokia_logo.svg',
      dark: '/assets/patron-logos/nokia_logo.svg',
      alt: 'Nokia logo',
      url: 'https://www.nokia.com',
      overrides: 'w-1/4 bobbing-animation-4',
    },
    {
      light: '/assets/patron-logos/solace_logo.svg',
      dark: '/assets/patron-logos/solace_logo.svg',
      alt: 'Solace logo',
      url: 'https://solace.com',
      overrides: 'w-1/4 bobbing-animation-4',
    },
  ],
}

export const PATRONS = {
  TITLE: 'Our Patrons',
  ID: 'patronage',
}

export const CONTACT_FORM = {
  TITLE: 'Contact Us',
  SUBTITLE: 'Get in Touch',
  DESCRIPTION:
    'Questions or feedback? Drop us a message, and we\'ll get back to you soon.',
  FIELDS: {
    NAME: {
      label: 'Full Name',
      placeholder: 'Your Full Name*',
      errorMessage: 'To whom do we speak to? :/',
    },
    EMAIL: {
      label: 'Email',
      placeholder: 'Your Email*',
      errorMessage:
        'Without a valid email, how are we going to send you our newsletter full of cat memes? :/',
    },
    SUBJECT: {
      label: 'Subject',
      placeholder: 'Subject*',
      errorMessage: 'A subject helps us pretend we\'re organized. :/ ',
    },
    MESSAGE: {
      label: 'Message',
      placeholder: 'Your Message*',
      errorMessage:
        'A message without content is like a sandwich without filling. :/',
    },
  },
  SUBMIT_BUTTON_TEXT: 'Submit',
}

export const FOOTER = {
  LOGO: '/assets/twilight-design-system/ieee_spac_logo_combined_horizontal.svg',
  COPYRIGHT_TEXT: 'Copyright © 2024 IEEE - All rights reserved.',
  SOCIAL_MEDIA: [
    {
      name: 'Instagram',
      url: LINKS.INSTAGRAM,
      Icon: FaInstagram,
      className: 'text-rose-500',
    },
    {
      name: 'LinkedIn',
      url: LINKS.LINKEDIN,
      Icon: FaLinkedinIn,
      className: 'text-sky-700',
    },
    {
      name: 'Facebook',
      url: LINKS.FACEBOOK,
      Icon: FaFacebookF,
      className: 'text-blue-600',
    },
    {
      name: 'GitHub',
      url: LINKS.GITHUB,
      Icon: FaGithub,
      className: 'text-green-500',
    },
    {
      name: 'Figma',
      url: LINKS.FIGMA,
      Icon: FaFigma,
      className: 'text-indigo-400',
    },
    {
      name: 'Storybook',
      url: LINKS.STORYBOOK,
      Icon: SiStorybook,
      className: 'text-pink-500',
    },
    {
      name: 'Chromatic',
      url: LINKS.CHROMATIC,
      Icon: SiChromatic,
      className: 'text-orange-600',
    },
  ],
}

// --- Define Institution Enum ---
export enum INSTITUTION {
  UNIVERSITY_OF_OTTAWA = 'University of Ottawa', // https://www.uottawa.ca/en
  ALGONQUIN_COLLEGE = 'Algonquin College', // https://www.algonquincollege.com
  CARLETON_UNIVERSITY = 'Carleton University', // https://carleton.ca
}

export enum ROLE {
  LEAD = 'Lead',
  TREASURER = 'Treasurer',
  PATRONAGE_LEAD = 'Patronage Lead',
  PATRONAGE_TEAM_MEMBER = 'Patronage Team Member',
  LOGISTICS_LEAD = 'Logistics Lead',
  MARKETING_LEAD = 'Marketing Lead',
  MARKETING_TEAM_MEMBER = 'Marketing Team Member',
  UI_UX_DESIGNER = 'UI/UX Designer',
  WEB_DEVELOPER = 'Web Developer',
}

export interface IBASE_MEMBER_INFO {
  name: string
  image: string
  institution: INSTITUTION
  yearStanding: string
  programName: string
}

export interface ICONTACT_INFO {
  email?: string
  linkedin?: string
  github?: string
  website?: string
  instagram?: string
}

export interface ITEAM_MEMBER extends IBASE_MEMBER_INFO, ICONTACT_INFO {
  role: ROLE
  email?: string
}

export const ROLE_EMAIL_MAP: Record<ROLE, string> = {
  [ROLE.LEAD]: 'lead@ieeespac.ca',
  [ROLE.TREASURER]: 'treasurer@ieeespac.ca',
  [ROLE.PATRONAGE_LEAD]: 'patronage.lead@ieeespac.ca',
  [ROLE.PATRONAGE_TEAM_MEMBER]: 'patronage@ieeespac.ca',
  [ROLE.LOGISTICS_LEAD]: 'logistics@ieeespac.ca',
  [ROLE.MARKETING_LEAD]: 'marketing@ieeespac.ca',
  [ROLE.MARKETING_TEAM_MEMBER]: 'marketing@ieeespac.ca',
  [ROLE.UI_UX_DESIGNER]: '',
  [ROLE.WEB_DEVELOPER]: 'development@ieeespac.ca',
}

export const TEAM_MEMBERS: ITEAM_MEMBER[] = [
  {
    name: 'Dania Mahmoud',
    image: '/assets/team/dania_mahmoud.jpg',
    institution: INSTITUTION.CARLETON_UNIVERSITY,
    role: ROLE.LEAD,
    yearStanding: '3rd Year',
    programName: 'Computer Systems Engineering',
    email: ROLE_EMAIL_MAP[ROLE.LEAD],
    linkedin: 'https://linkedin.com/in/dania',
    github: '',
    website: '',
    instagram: '',
  },
  {
    name: 'Cyrus Choi',
    image: '/assets/team/cyrus_choi.jpg',
    institution: INSTITUTION.CARLETON_UNIVERSITY,
    role: ROLE.TREASURER,
    yearStanding: '2nd Year',
    programName: 'Electrical Engineering & Computing Technology',
    email: ROLE_EMAIL_MAP[ROLE.TREASURER],
    linkedin: '',
    github: 'https://github.com/cyruschoi',
    website: '',
    instagram: '',
  },
  {
    name: 'Farah El Siss',
    image: '/assets/team/farah_el_siss.jpg',
    institution: INSTITUTION.UNIVERSITY_OF_OTTAWA,
    role: ROLE.PATRONAGE_LEAD,
    yearStanding: '5th Year',
    programName: 'Biomedical Mechanical Engineering & Computing Technology',
    email: ROLE_EMAIL_MAP[ROLE.PATRONAGE_LEAD],
    linkedin: 'https://linkedin.com/in/farah',
    github: '',
    website: '',
    instagram: 'https://instagram.com/farah',
  },
  {
    name: 'Yousef Hammad',
    image: '/assets/team/yousef_hammad.jpg',
    institution: INSTITUTION.CARLETON_UNIVERSITY,
    role: ROLE.LOGISTICS_LEAD,
    yearStanding: '4th Year',
    programName: 'Computer Systems Engineering',
    email: ROLE_EMAIL_MAP[ROLE.LOGISTICS_LEAD],
    linkedin: 'https://linkedin.com/in/yousef',
    github: '',
    website: '',
    instagram: '',
  },
  {
    name: 'Victor Li',
    image: '/assets/team/victor_li.jpg',
    institution: INSTITUTION.CARLETON_UNIVERSITY,
    role: ROLE.UI_UX_DESIGNER,
    yearStanding: '4th Year',
    programName: 'Computer Science - Minor in Math',
    email: '',
    linkedin: '',
    github: '',
    website: '',
    instagram: '',
  },
  {
    name: 'Mumtahin Farabi',
    image: '/assets/team/mumtahin_farabi.jpg',
    institution: INSTITUTION.CARLETON_UNIVERSITY,
    role: ROLE.WEB_DEVELOPER,
    yearStanding: '2nd Year',
    programName: 'Computer Science - Minor in Business',
    email: ROLE_EMAIL_MAP[ROLE.WEB_DEVELOPER],
    linkedin: '',
    github: 'https://github.com/mfarabi619',
    website: '',
    instagram: '',
  },
]

export const CONTACT_FORM_EMAILS = {
  TEAM_EMAIL: 'lead@ieeespac.ca',
  FORM_SUBMISSION_EMAIL: 'formsubmission@ieeespac.ca',
}
