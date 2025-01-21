// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AnaniyaLegesse', // Your GitHub org/user name. (This is the only required config)
  },

  base: '/portifolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['ananiyalegesse/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
                 'ananiyalegesse/compitative_programming',
                 'ananiyalegesse/alx-system_engineering-devops',
                 'ananiyalegesse/RSA-Factoring-Challenge',
                 'ananiyalegesse/uninet_admin_vite',
                 'ananiyalegesse/tila-solution',
                 'ananiyalegesse/blog_platform',], // List of repository names to display. example: ['ananiyalegesse/my-project1', 'ananiyalegesse/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Tila Tech Solution',
          description:
            'Tech company providing web development and digital marketing solutions',
          imageUrl:
            'assets/tila.svg',
          link: 'https://tilasolution.netlify.app/',
        },
        {
          title: 'Tetelstai Community centered service',
          description:
            'Community centered service for the Tetelstai community that works with youth development.',
          imageUrl:
            'assets/tetelstai.png',
          link: 'https://tetelstai.netlify.app/',
        },
        {
          title: 'Fetan Pay System',
          description:
            'A payment system for bussiness streamlining payroll managemntsystem.',
          imageUrl:
            'assets/fetanpay.svg',
          link: 'https://fetansystems.com/',
        },
      
        {
          title: 'Guzo travel landing page',
          description:
            'Landing page for Guzo travel company.',
          imageUrl:
            'assets/guzo.png',
          link: 'https://guzo-landingpage.netlify.app/',
        },
        {
          title: 'Hulu clone',
          description:
            'Front end clone of movie streaming website named Hulu .',
          imageUrl:
            'assets/hulu.png',
          link: 'https://anex-clone-2.netlify.app/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ananiya Legesse',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'AnaniyaLegesse',
    telegram: 'AnaniyaLegesse',
    phone: '+251941187380',
    email: 'ananiya.legesse1@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1gKjNb0ID_dX0MqqPsvHpzESQD77LyKMi/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Everlink Digtal Technology',
      position: 'intern Developer',
      from: 'August 2023',
      to: 'December 2023'
    },
    {
      company: 'Minister on innovation and Technology',
      position: 'System programmer',
      from: 'November 2024',
      to: 'present',
      // companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'ALX Ventures Gig-at-a-Startup program',
      body: '',
      year: 'November 2024',
      link: 'https://drive.google.com/file/d/1Y7tNDq57UVanks6-Jr-NFCjvk65buUfV/view?usp=sharing',
    },
    {
      name: 'AICE AI Career essential',
      body: '',
      year: 'July 2024',
      link: 'https://drive.google.com/file/d/1giI9RpjpaA5E542aMycta6FIBGd2Tj3H/view?usp=sharing',
    },
   
    {
      name: 'Alx Software Engineering Programme',
      body: '',
      year: 'April 2024 ',
      link: 'https://drive.google.com/file/d/10gNn0WycX8ccijHtO0h5ti9iIGXKRjnB/view?usp=sharing',
    },
  ],
  educations: [

    {
      institution: 'Arbaminch University',
      degree: 'Bs in Software Engineering',
      from: '2019',
      to: '2024',
    },
  ],
  publications: [
   
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },



  enablePWA: true,
};

export default CONFIG;
