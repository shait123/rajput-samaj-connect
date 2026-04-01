# 🏰 Rajput Samaj — Community Platform

A modern, bilingual (English/Hindi) community website for **Rajput Samaj** — celebrating heritage, honoring achievements, and building community.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)

---

## ✨ Features

- **Bilingual Support** — Seamless toggle between English 🇬🇧 and Hindi 🇮🇳
- **Community Posts** — Share achievements, events, and announcements
- **Post Submission** — Members can submit posts for admin approval
- **Category Filtering** — Browse by Achievements, Events, or Announcements
- **Search** — Quickly find posts by keyword
- **Responsive Design** — Mobile-first, works on all screen sizes
- **Royal Theme** — Maroon, gold, and white color palette inspired by Rajput heritage
- **Contact Page** — Get in touch with the community team

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/              # shadcn/ui base components
│   ├── Navbar.tsx       # Navigation bar with language toggle
│   ├── Footer.tsx       # Site footer with links & social
│   ├── PostCard.tsx     # Post display card
│   ├── CategoryFilter.tsx
│   ├── SearchBar.tsx
│   └── LanguageToggle.tsx
├── contexts/
│   └── LanguageContext.tsx  # i18n context (EN/HI translations)
├── data/
│   └── samplePosts.ts   # Sample bilingual post data
├── pages/
│   ├── Index.tsx        # Homepage with hero & latest posts
│   ├── Contact.tsx      # Contact form & info
│   ├── SubmitPost.tsx   # Post submission form
│   ├── CategoryPage.tsx # Category-specific listing
│   └── NotFound.tsx     # 404 page
└── hooks/               # Custom React hooks
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/rajput-samaj.git
cd rajput-samaj

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## 🎨 Design System

| Token        | Color                          | Usage                  |
|-------------|--------------------------------|------------------------|
| Primary     | Maroon (`hsl(0, 70%, 35%)`)    | Buttons, links, accents |
| Secondary   | Gold (`hsl(43, 74%, 49%)`)     | Highlights, badges     |
| Background  | White/Cream                    | Page backgrounds       |
| Foreground  | Dark text                      | Body text              |

## 🌐 Deployment

This project can be deployed to any static hosting platform:

- **Google Cloud Storage** — Upload the `dist/` folder as a static site
- **Google Cloud Run** — Use with a Dockerfile for containerized hosting
- **Firebase Hosting** — `firebase deploy`
- **Vercel / Netlify** — Connect GitHub repo for auto-deploy
- **Lovable** — Publish directly from the editor

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Vite 5** | Build tool & dev server |
| **Tailwind CSS 3** | Utility-first styling |
| **shadcn/ui** | Component library |
| **React Router** | Client-side routing |
| **React Query** | Data fetching & caching |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

For questions or suggestions, use the **Contact** page on the website or reach out to the Rajput Samaj team.

---

<p align="center">
  <strong>जय राजपुताना 🏰</strong><br/>
  Built with ❤️ for the Rajput community
</p>
