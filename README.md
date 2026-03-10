# Kunal Sawant — Portfolio (React + Vite + Tailwind)

A production-ready personal portfolio built from scratch with React, Vite, and Tailwind CSS.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output goes to /dist — deploy this folder
```

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
kunal-portfolio-react/
├── index.html                    # HTML entry point
├── vite.config.js                # Vite config
├── tailwind.config.js            # Tailwind + custom tokens
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx                  # React root
    ├── App.jsx                   # Root component (composes all sections)
    ├── data/
    │   └── index.js              # ✏️  All content lives here (skills, projects, etc.)
    ├── hooks/
    │   ├── useVisible.js         # Intersection Observer hook (scroll reveal)
    │   └── useTypewriter.js      # Typewriter animation hook
    ├── styles/
    │   └── index.css             # Global styles + Tailwind directives
    └── components/
        ├── SectionHeader.jsx     # Shared numbered heading
        ├── Navbar.jsx            # Sticky nav + mobile menu
        ├── Hero.jsx              # Hero section + typewriter
        ├── About.jsx             # Bio, stats, quick facts
        ├── Skills.jsx            # Animated skill bars + marquee
        ├── Experience.jsx        # Timeline: work + education
        ├── Services.jsx          # What I Do cards
        ├── Projects.jsx          # Project cards with highlights
        ├── Testimonials.jsx      # Colleague quotes
        ├── Contact.jsx           # Validated contact form
        └── Footer.jsx            # Footer
```

---

## ✏️ Customization

### Update your content
All data is centralized in **`src/data/index.js`** — edit:
- `SKILLS` — your tech stack and proficiency levels
- `PROJECTS` — add your live/GitHub URLs, descriptions
- `SERVICES` — what you offer
- `TESTIMONIALS` — colleague quotes
- `CONTACT_INFO` — your email, phone, social links
- `NAV_LINKS` — navigation items

### Update your email
Search for `kunalsawant30122612@gmail.com` across:
- `src/data/index.js`
- `src/components/Navbar.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

---

## 🌐 Deployment

### Netlify (recommended — free)
```bash
npm run build
# Drag the /dist folder to netlify.com/drop
```

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
```bash
# Add to vite.config.js: base: '/your-repo-name/'
npm run build
# Push /dist to gh-pages branch
```

---

## 📧 Upgrading the Contact Form

The contact form currently uses `mailto:` (opens your mail app). For a server-free, fully working email solution:

**Option 1 — Web3Forms (free, no backend needed)**
```bash
# 1. Get API key at web3forms.com
# 2. In Contact.jsx, replace the mailto logic with:
fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ access_key: 'YOUR_KEY', ...form })
})
```

**Option 2 — EmailJS**
```bash
npm install @emailjs/browser
# Follow docs at emailjs.com
```

---

## 🛠 Tech Stack

| Tool          | Purpose                        |
|---------------|-------------------------------|
| React 18      | UI components & state          |
| Vite 5        | Build tool & dev server        |
| Tailwind CSS 3| Utility-first styling          |
| PostCSS       | CSS processing                 |
| Google Fonts  | Syne · Fira Code · Outfit      |
