# Rupam Gachchhit - Portfolio Website

A professional, fully responsive portfolio website for a Cloud & Networking Specialist with dark/light mode support, dynamic blog system, and modern 3D animations.

## 🎯 Features

### ✨ Core Features
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **3D Animations**: Smooth floating cards and gradient effects
- **Professional Design**: Modern UI with glass morphism and gradient elements
- **SEO Optimized**: Meta tags and semantic HTML

### 📄 Pages
1. **Home** - Landing page with hero section, services preview, and stats
2. **Services** - Detailed service offerings with pricing
3. **Portfolio** - Project showcase with descriptions
4. **Blog** - Dynamic blog system with search and category filtering
5. **Contact** - Contact form with Google Forms integration and FAQ

### 🔧 Technical Stack
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Bootstrap 5** - Responsive framework
- **Vanilla JavaScript** - No dependencies
- **Font Awesome** - Icon library
- **Local Storage** - Theme persistence

## 📁 Project Structure

```
portfolio-website/
├── index.html                 # Homepage
├── services.html              # Services page
├── portfolio.html             # Portfolio/Projects page
├── blog.html                  # Blog page
├── contact.html               # Contact page
├── css/
│   └── style.css             # Main stylesheet
├── js/
│   ├── script.js             # Main JavaScript
│   ├── blog.js               # Blog functionality
│   └── contact.js            # Contact form handling
├── data/
│   └── blog-posts.json       # Blog posts data (optional)
└── README.md                 # This file
```

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/pixel-pie-rupam/portfolio-website.git
cd portfolio-website
```

### 2. Open in Browser
Simply open `index.html` in your web browser. No build process required!

### 3. Deploy
- **GitHub Pages**: Push to `gh-pages` branch
- **Netlify**: Connect repository and deploy
- **Vercel**: Import project and deploy
- **Any Static Host**: Upload files to your hosting

## 📝 Customization

### Update Personal Information
Edit these files to add your information:

**index.html, services.html, etc.**
```html
<!-- Update name, email, social links -->
<a href="https://linkedin.com/in/your-profile/" target="_blank">
```

### Add Blog Posts
Edit `js/blog.js` and add to the `blogPosts` array:

```javascript
const blogPosts = [
    {
        id: 1,
        title: "Your Blog Title",
        category: "aws",
        date: "2026-05-20",
        author: "Your Name",
        excerpt: "Brief excerpt...",
        content: `<h3>Full content here</h3>`,
        tags: ["AWS", "Tag2"],
        readTime: "5 min"
    },
    // Add more posts...
];
```

### Customize Services
Edit the service cards in `services.html`:
- Update service descriptions
- Add/remove services
- Modify pricing

### Update Portfolio Projects
Edit `portfolio.html` to showcase your projects with descriptions, technologies, and links.

### Set Up Google Form
1. Create a Google Form at https://forms.google.com
2. Copy the form URL
3. Update the link in `contact.html`:
```html
<a href="https://forms.gle/YOUR-FORM-ID" target="_blank">Open Google Form</a>
```

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    --success-color: #198754;
    /* Update colors as needed */
}
```

## 🎨 Dark/Light Mode

The website automatically detects user's system preference and provides a toggle button. Theme preference is saved to localStorage.

### Manual Theme Control
```javascript
// Switch to dark mode
document.documentElement.setAttribute('data-theme', 'dark');
localStorage.setItem('theme', 'dark');

// Switch to light mode
document.documentElement.setAttribute('data-theme', 'light');
localStorage.setItem('theme', 'light');
```

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: 768px - 992px
- **Large Desktop**: > 992px

## ⚡ Performance Optimization

- Minified CSS and JavaScript
- Lazy loading for images
- Smooth scroll behavior
- Optimized animations
- No external dependencies (except CDN)

## 🔐 Contact Form

### Option 1: FormSubmit.co (Recommended)
```javascript
// Update form action in contact.html
<form action="https://formsubmit.co/your-email@gmail.com" method="POST">
```

### Option 2: Netlify Forms
```html
<form name="contact" method="POST" netlify>
```

### Option 3: Backend API
Update `js/contact.js` to send to your backend:
```javascript
const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data)
});
```

## 📊 SEO Best Practices

- Semantic HTML tags
- Meta descriptions
- Open Graph tags
- Structured data (Schema.org)
- Mobile-friendly design
- Fast loading times

## 🎯 Features Added

### Animations
- ✅ Floating cards with easing
- ✅ Fade-in effects on scroll
- ✅ Smooth transitions
- ✅ Gradient text effects
- ✅ Hero parallax effect

### Interactions
- ✅ Hover effects on cards
- ✅ Form validation with feedback
- ✅ Theme toggle with persistence
- ✅ Smooth scroll navigation
- ✅ Scroll-to-top button

### Blog System
- ✅ Post listing and detail view
- ✅ Search functionality
- ✅ Category filtering
- ✅ Recent posts sidebar
- ✅ Share buttons (Twitter, LinkedIn, Facebook)

## 🛠️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact Form Integration

The contact form is set up with localStorage backup. To fully enable email notifications:

1. **Using FormSubmit.co** (Free, no setup):
   - Update form action: `https://formsubmit.co/your-email@gmail.com`
   - No backend needed

2. **Using Netlify Forms**:
   - Deploy on Netlify with form name

3. **Using Custom Backend**:
   - Create a backend endpoint
   - Update form submission in `js/contact.js`

## 🚀 Deployment

### GitHub Pages
```bash
# Push main branch
git push origin main
# Site available at: https://username.github.io/portfolio-website
```

### Netlify
1. Connect GitHub repo
2. Set build command: (leave empty for static)
3. Set publish directory: `/`
4. Deploy

### Vercel
1. Import project from GitHub
2. Deploy automatically

## 📚 Additional Resources

- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Web Animations](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Rupam Gachchhit**
- AWS Community Builder
- Microsoft Certified: Azure Fundamentals (AZ-900)
- CCNA Trained
- Specialties: Cloud Computing, Networking, Cybersecurity, DevSecOps

**Connect:**
- LinkedIn: https://linkedin.com/in/rupam-gachchhit/
- Email: contact@rupam.dev
- Location: Greater Kolkata Area, India

## 🤝 Support

For issues, suggestions, or improvements:
1. Open a GitHub issue
2. Create a pull request
3. Contact via email

---

**Happy coding! 🚀**
