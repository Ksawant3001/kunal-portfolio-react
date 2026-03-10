export const SKILLS = [
  { name: 'JavaScript (ES6+)', level: 90, category: 'Frontend' },
  { name: 'React.js', level: 85, category: 'Frontend' },
  { name: 'CSS / Tailwind', level: 88, category: 'Frontend' },
  { name: 'Bootstrap', level: 85, category: 'Frontend' },
  { name: 'jQuery', level: 80, category: 'Frontend' },
  { name: 'HTML5', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 72, category: 'Backend' },
  { name: 'Express.js', level: 70, category: 'Backend' },
  { name: 'MongoDB', level: 65, category: 'Backend' },
  { name: 'REST APIs', level: 78, category: 'Backend' },
  { name: 'Git / GitHub', level: 82, category: 'Tools' },
  { name: 'CI/CD Pipelines', level: 70, category: 'Tools' },
  { name: 'WebSocket/SignalR', level: 68, category: 'Tools' },
  { name: 'C# (Basic)', level: 45, category: 'Tools' },
]

export const PROJECTS = [
  {
    title: 'Wanderlust.io',
    subtitle: 'Trip Suggestion Web App',
    description:
      'Full-stack travel platform recommending places, food, and stays based on destination, days, people, and budget. Features interactive maps, day-wise itineraries, distance-based transport logic, and PDF export.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'CI/CD', 'Netlify', 'Render'],
    highlights: [
      'CI/CD auto-deployments via Netlify & Render',
      'PDF export for itinerary download',
      'Distance-based transport logic (auto/bus/train)',
      'Real-time distance calc with external APIs',
      'CORS, env variable & asset path resolution',
    ],
    color: '#00b4ff',
    icon: '🗺️',
    liveUrl: 'https://wanderlustio.netlify.app',
    githubUrl: 'https://github.com/Ksawant3001',
  },
  {
    title: 'Regnoz',
    subtitle: 'Mobile Social Platform — Built at Shardeen IT Solutions',
    description:
      'Mobile-first social media web app with photo/video/text posts, custom animated reactions (Kudos, Bravo, Glory), real-time drag-and-drop battle mode via WebSocket (SignalR), and a gamification engine.',
    tech: ['JavaScript', 'Bootstrap', 'jQuery', 'CSS', 'C#', 'SignalR', 'WebSocket'],
    highlights: [
      'Real-time updates via WebSocket (SignalR)',
      '45% boost in trial user session duration',
      'Drag-and-drop live battle mode + scoring',
      'Gamification: reactions → in-game advantages',
      'Modular reusable UI components for scale',
    ],
    color: '#00d9f5',
    icon: '⚡',
    result: { value: '+45%', label: 'Session Duration' },
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Simon Says Game',
    subtitle: 'Interactive Memory Game',
    description:
      'Classic Simon Says memory game with random sequence generation, user input validation, CSS animation feedback (flash/success/failure), score tracking, and progressive difficulty.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'DOM API'],
    highlights: [
      'Random sequence generation per round',
      'CSS animations for visual feedback',
      'Real-time input validation & matching',
      'Score tracking with progressive difficulty',
    ],
    color: '#a78bfa',
    icon: '🎮',
    liveUrl: 'https://simon-says01.netlify.app',
    githubUrl: 'https://github.com/Ksawant3001',
  },
  {
    title: 'Food Product Explorer',
    subtitle: 'OpenFoodFacts API Consumer App',
    description:
      'Responsive React app for exploring food products via the OpenFoodFacts API. Search by name or barcode, filter by category, sort by multiple criteria, and view detailed nutritional info — all with client-side caching for performance.',
    tech: ['React', 'Vite', 'React Router', 'Axios', 'TailwindCSS', 'Netlify'],
    highlights: [
      'Debounced search & barcode lookup',
      'Category filtering with cached API results',
      'Client-side sorting (name, NutriScore)',
      'Three-layer caching for optimized performance',
      'Multilingual data fallback handling',
    ],
    color: '#f472b6',
    icon: '🍽️',
    liveUrl: 'https://food-explorer-nutri.netlify.app',
    githubUrl: 'https://github.com/Ksawant3001',
  },
]

export const SERVICES = [
  {
    icon: '🎨',
    title: 'UI / UX Design',
    description:
      'Translating wireframes and ideas into polished, pixel-perfect interfaces that users love. Focused on clarity, hierarchy, and micro-interactions.',
    color: '#00b4ff',
  },
  {
    icon: '⚛️',
    title: 'React Development',
    description:
      'Building component-driven SPAs with clean state management, hooks, and performance optimizations. From landing pages to complex dashboards.',
    color: '#00d9f5',
  },
  {
    icon: '📱',
    title: 'Responsive Interfaces',
    description:
      'Mobile-first layouts that look sharp on every screen size. Cross-browser tested, accessible, and fast-loading by default.',
    color: '#a78bfa',
  },
  {
    icon: '🔌',
    title: 'API Integration',
    description:
      'Connecting frontends to REST APIs, handling auth flows, WebSockets, and real-time data — with proper error handling throughout.',
    color: '#f472b6',
  },
  {
    icon: '🚀',
    title: 'CI/CD & Deployment',
    description:
      'Setting up GitHub-based pipelines with Netlify and Render for automatic deployments. Environment variable handling and production-ready config.',
    color: '#fbbf24',
  },
  {
    icon: '🐛',
    title: 'Debugging & Optimization',
    description:
      'Tracking down production bugs, fixing CORS and asset path issues, and improving load performance through code splitting and lazy loading.',
    color: '#34d399',
  },
]



export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },

  { label: 'Contact', href: '#contact' },
]

export const CONTACT_INFO = [
  { icon: '✉', label: 'Email', value: 'kunalsawant30122612@gmail.com', href: 'mailto:kunalsawant30122612@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+91 9022519462', href: 'tel:9022519462' },
  { icon: 'in', label: 'LinkedIn', value: 'contact-kunal-sawant', href: 'https://linkedin.com/in/contact-kunal-sawant' },
]
