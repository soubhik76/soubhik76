# Portfolio Website Setup Guide

A modern, professional portfolio website built with React (frontend) and Django (backend).

## Features

- ✨ Professional & Corporate Design
- 📱 Fully Responsive Layout
- 💬 Contact Form with Backend Integration
- 🎨 Clean and Modern UI
- ⚡ Fast Performance with Vite

## Project Structure

```
soubhik76/
├── frontend/          # React.js application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── styles/       # CSS styles
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/           # Django REST API
│   ├── portfolio_app/  # Django app
│   ├── portfolio_project/  # Django settings
│   ├── manage.py
│   └── requirements.txt
└── README.md
```

## Prerequisites

- Python 3.9+
- Node.js 16+ and npm
- Git

## Installation & Setup

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run migrations:
```bash
python manage.py migrate
```

5. Create a superuser (optional, for Django admin):
```bash
python manage.py createsuperuser
```

6. Start the development server:
```bash
python manage.py runserver
```
The API will be available at `http://localhost:8000/api/`

### Frontend Setup

1. In a new terminal, navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```
The portfolio will be available at `http://localhost:5173/` (or `http://localhost:3000/` as configured)

## Customization

### Update Your Information

Edit the components to add your personal information:

- **`frontend/src/components/About.jsx`** - Your bio and background
- **`frontend/src/components/Projects.jsx`** - Your projects
- **`frontend/src/components/Skills.jsx`** - Your skills
- **`frontend/src/components/Footer.jsx`** - Contact info

### Update Styling

Colors and styles are defined in:
- **`frontend/src/styles/index.css`** - Main stylesheet with CSS variables

You can change the color scheme by modifying the CSS variables:
```css
:root {
  --primary: #1a1a1a;
  --accent: #0066cc;
  --text: #333;
  /* ... other colors ... */
}
```

### Add Your Photo

Replace the placeholder in `About.jsx` with your actual photo:
```jsx
<img src="your-photo.jpg" alt="Your Name" style={{ borderRadius: '8px' }} />
```

## Deployment

### Frontend Deployment (Vercel, Netlify)

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy the `dist/` folder to your hosting service.

### Backend Deployment

1. Update `DEBUG = False` in `backend/portfolio_project/settings.py`
2. Set appropriate `ALLOWED_HOSTS` and `SECRET_KEY`
3. Use a production database (PostgreSQL recommended)
4. Deploy using Gunicorn, Heroku, PythonAnywhere, or similar

## Features

### Contact Form
- Accepts name, email, and message
- Stores messages in database
- Email validation included
- Success/error feedback to user

### Responsive Design
- Mobile-first approach
- Works on all device sizes
- Touch-friendly interface

### Professional Styling
- Clean typography
- Proper spacing and layout
- Hover effects and transitions
- Professional color scheme

## Troubleshooting

### CORS Issues
If you get CORS errors, make sure the backend's `CORS_ALLOWED_ORIGINS` in `settings.py` includes your frontend URL.

### Port Already in Use
- Django: `python manage.py runserver 8001`
- React: `npm run dev -- --port 3001`

### Database Issues
Reset the database:
```bash
python manage.py flush
python manage.py migrate
```

## Future Enhancements

- [ ] Add blog section with markdown support
- [ ] Implement dark mode toggle
- [ ] Add project filtering by category
- [ ] Email notification for contact submissions
- [ ] Admin dashboard for managing content
- [ ] Analytics integration
- [ ] Newsletter subscription

## License

Feel free to use this template for your personal portfolio!

## Support

For questions or issues, reach out to soubhikchakraborty76@gmail.com
