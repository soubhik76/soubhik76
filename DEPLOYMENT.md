# Portfolio Website - Deployment Guide

## GitHub Pages Setup

Your portfolio is now configured for automatic deployment to GitHub Pages!

### ✅ What's Done:
- ✓ Created GitHub Actions workflow (`.github/workflows/deploy.yml`)
- ✓ Configured Vite to build for GitHub Pages
- ✓ Built production-ready version in `frontend/dist/`
- ✓ Pushed configuration to GitHub

### 🚀 Enable GitHub Pages:

1. Go to https://github.com/soubhik76/soubhik76/settings/pages
2. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **(root)**
   - Click **Save**

The `gh-pages` branch is created and kept up to date automatically by the
deploy workflow (`peaceiris/actions-gh-pages`), so "GitHub Actions" is NOT
the right source setting for this setup.

### 📝 Your Portfolio URLs:

**Main Portfolio URL:**
```
https://soubhik76.github.io/soubhik76/
```

Note: this is a *project* site, so the URL includes the repo name. A bare
`https://soubhik76.github.io/` would require a repo literally named
`soubhik76.github.io`.

**GitHub Repository:**
```
https://github.com/soubhik76/soubhik76
```

### 🔄 Auto-Deployment:

- The portfolio will **automatically rebuild and deploy** whenever you:
  - Push to the `main` branch
  - Push to the `claude/whats-inside-xkm14d` branch
- Changes appear on GitHub Pages within 1-2 minutes

### 📱 View Live:

1. Open Chrome (or any browser)
2. Navigate to: `https://soubhik76.github.io/soubhik76/`
3. Your portfolio will be live!

### ⚙️ Important Notes:

**Contact Form:**
- The contact form requires a backend (Django API)
- On GitHub Pages (static hosting), contact submissions won't work
- Options to make it work:
  1. Deploy backend separately (Heroku, Railway, etc.)
  2. Use a third-party service (Formspree, Netlify Forms)
  3. Use email service integration

**Customizing Content:**
- Edit files in `frontend/src/components/`
- Push changes to trigger automatic deployment
- Changes will be live within minutes

### 🎨 Update Your Portfolio:

After deployment, customize these files:
- `frontend/src/components/About.jsx` - Your bio
- `frontend/src/components/Projects.jsx` - Your projects
- `frontend/src/components/Skills.jsx` - Your skills
- `frontend/src/styles/index.css` - Colors and styling
- `frontend/src/components/Footer.jsx` - Contact info

Then:
```bash
git add -A
git commit -m "Update portfolio content"
git push origin claude/whats-inside-xkm14d
```

Changes deploy automatically!

## Backend Deployment (Optional)

If you want the contact form to work, deploy the Django backend:

### Option 1: Railway
```bash
railway link
railway up
```

### Option 2: Heroku
```bash
heroku login
heroku create
git push heroku main
```

### Option 3: PythonAnywhere
- Upload files via their web interface
- Configure your app
- Set domain

After deploying backend, update `frontend/src/components/Contact.jsx`:
```javascript
const response = await axios.post('https://your-api.com/api/contact/', form)
```

---

**Your portfolio is ready to go! 🎉**
