# Project Portfolio Showcase

A modern, interactive React-based portfolio showcase built with **React 18**, **Tailwind CSS**, and **Vite-style development**. Display your projects in a beautiful, filterable grid with modal details, GitHub links, and responsive design.

## 🌐 Live Demo

Visit the live version: [Project Portfolio on Vercel](https://project-page-yourname.vercel.app)

## ✨ Features

- **Responsive Grid Layout** - Beautiful project cards on all devices
- **Category Filtering** - Filter projects by type (Web App, Backend, Database, AI/ML, Games, etc.)
- **Interactive Modals** - Click any project to see full details
- **GitHub Integration** - Direct links to project repositories
- **Dark Theme** - Modern dark UI with gradient effects
- **Smooth Animations** - Fade-in effects and hover states
- **Tailwind CSS** - Fully styled with utility-first CSS framework
- **Hot Reload** - Automatic browser refresh during development

## 📋 Project Structure

```
ProjectPage/
├── public/
│   └── index.html              # Main HTML entry point
├── src/
│   ├── ProjectPage.jsx         # Main component with all project data
│   ├── App.js                  # React app wrapper
│   ├── App.css                 # Global styles
│   └── index.js                # React DOM render
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies & scripts
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bramhagulavani/ProjectPage.git
   cd ProjectPage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The app will open at **http://localhost:3273**

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (one-way operation)
npm run eject
```

## 📝 Customizing Your Projects

Edit `src/ProjectPage.jsx` to add/modify projects. Each project object should have:

```javascript
{
  id: 1,
  name: "Project Name",
  tagline: "Short description",
  description: "Detailed description about the project...",
  tech: ["React", "Tailwind CSS", "JavaScript"],
  category: "Web App",
  github: "https://github.com/username/project",
  color: "#6EE7B7",
  icon: "📱",
  readme: "Markdown content (optional)"
}
```

**Available Categories:**
- Web App
- Backend
- Database
- AI / ML
- Games

**Tailwind Colors (hex codes):**
- `#6EE7B7` - Emerald
- `#FCD34D` - Amber
- `#F9A8D4` - Pink
- `#818CF8` - Purple
- `#FCA5A5` - Red
- `#86EFAC` - Green
- `#67E8F9` - Cyan
- `#FB923C` - Orange

## 🎨 Styling

The project uses **Tailwind CSS via CDN** for styling. All utility classes are available out-of-the-box. To customize:

- Modify CSS in `src/App.css` for global styles
- Tailwind classes work directly in JSX components

## 📦 Dependencies

- **react** (v18.2.0) - UI library
- **react-dom** (v18.2.0) - React DOM rendering
- **react-scripts** (v5.0.1) - Create React App scripts
- **tailwindcss** (CDN) - Utility-first CSS framework

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/ProjectPage.git
   git push -u origin main
   ```

2. **Deploy with Vercel**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

3. **Custom Domain** (Optional)
   - Configure custom domain in Vercel dashboard

### Deploy to Netlify

1. Build the project
   ```bash
   npm run build
   ```

2. Connect repository to Netlify via dashboard
3. Configure build command: `npm run build`
4. Configure publish directory: `build`

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```
PORT=3273
BROWSER=none
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 👤 Author

**Bram Hagulavani**
- GitHub: [@bramhagulavani](https://github.com/bramhagulavani)
- Portfolio: [bramhagulavani.vercel.app](https://bramhagulavani.vercel.app)

## 🐛 Troubleshooting

### Port Already in Use
Change the port in `.env`:
```
PORT=3274
```

### Styles Not Showing
- Clear browser cache (Ctrl+Shift+R)
- Restart dev server (`npm start`)

### Hot Reload Not Working
- Check internet connection
- Restart dev server

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Create React App Docs](https://create-react-app.dev)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

Made with ❤️ by **Bram Hagulavani**
