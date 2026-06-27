# Anish Art - Professional Artist Portfolio Website

A beautiful, responsive, and professional portfolio website designed to showcase paintings and artwork. Built with HTML, CSS, and JavaScript - no frameworks required!

## 🎨 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Interactive Gallery** - Filter paintings by category (Portraits, Landscapes, Abstract)
- **Lightbox Viewer** - Click on any painting to view it in full size with navigation
- **Smooth Animations** - Elegant hover effects and transitions
- **Contact Form** - Professional contact section for inquiries
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Keyboard Navigation** - Use arrow keys to navigate through paintings in lightbox

## 📁 Project Structure

```
artist-portfolio/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Direct File Opening (Simplest)

1. Navigate to the `artist-portfolio` folder
2. Double-click `index.html` to open it in your default browser
3. Your website is now live!

### Option 2: Using a Local Server (Recommended)

For the best experience, especially with image loading:

**Using Python:**
```bash
cd C:\Users\Anish\Desktop\artist-portfolio
python -m http.server 8000
```
Then open: `http://localhost:8000` in your browser

**Using Node.js:**
```bash
cd C:\Users\Anish\Desktop\artist-portfolio
npx serve
```

**Using VS Code:**
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🖼️ Adding Your Paintings

### Method 1: Edit the JavaScript Array (Recommended)

Open `script.js` and modify the `paintings` array:

```javascript
const paintings = [
    {
        id: 1,
        title: "Your Painting Title",
        category: "portrait",  // Options: portrait, landscape, abstract
        image: "../anish art/praful sawant 2025/your-image.jpg",
        description: "Description of your painting"
    },
    // Add more paintings...
];
```

### Method 2: Add Paintings Programmatically

At the bottom of `script.js`, use the `addPainting()` function:

```javascript
addPainting(
    "New Painting Title",
    "landscape",
    "../anish art/praful sawant 2025/IMG-20250922-WA0078.jpg",
    "Description of the painting"
);
```

### Image Path Format

Your paintings are located in: `C:\Users\Anish\Desktop\anish art\praful sawant 2025\`

The relative path from the website folder is: `../anish art/praful sawant 2025/`

Example:
```javascript
image: "../anish art/praful sawant 2025/IMG-20250922-WA0057.jpg"
```

## 🎯 Customization Guide

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2c3e50;      /* Main color */
    --secondary-color: #e74c3c;    /* Accent color */
    --accent-color: #f39c12;       /* Highlight color */
    /* ... more variables */
}
```

### Update Personal Information

**In `index.html`:**

1. **Logo/Brand Name:**
   ```html
   <div class="logo">Anish Art</div>
   ```

2. **Hero Section:**
   ```html
   <h1>Welcome to My Art Gallery</h1>
   <p>Exploring the beauty of colors and creativity through paintings</p>
   ```

3. **About Section:**
   Update the artist description and skills

4. **Contact Information:**
   ```html
   <p>artist@anishart.com</p>
   <p>India</p>
   ```

5. **Social Links:**
   Update the footer social media links

### Change Hero Background

In `styles.css`, find the `.hero` class:

```css
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Or use an image: */
    /* background: url('your-image.jpg') center/cover; */
}
```

## 📱 Responsive Breakpoints

The website is fully responsive with breakpoints at:
- **Desktop:** > 768px
- **Tablet:** 481px - 768px
- **Mobile:** ≤ 480px

## 🌐 Deployment Options

### Free Hosting Options

1. **GitHub Pages** (Recommended)
   - Create a GitHub repository
   - Upload your files
   - Enable GitHub Pages in settings
   - Your site will be at: `https://yourusername.github.io/repository-name`

2. **Netlify** (Easiest)
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `artist-portfolio` folder
   - Your site is live instantly!

3. **Vercel**
   - Similar to Netlify
   - Install Vercel CLI: `npm i -g vercel`
   - Run: `vercel` in the project folder

4. **Surge.sh**
   ```bash
   npm install -g surge
   cd artist-portfolio
   surge
   ```

### Custom Domain

After deploying to any of the above services, you can:
1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. Connect it to your hosting service
3. Update DNS settings

## 🔧 Troubleshooting

### Images Not Loading

**Problem:** Images show broken icon

**Solutions:**
1. Check file paths are correct
2. Ensure image files exist in the specified location
3. Use a local server instead of opening HTML directly
4. Check file extensions (.jpg vs .jpeg vs .png)

### Gallery Not Working

**Problem:** Clicking images doesn't open lightbox

**Solutions:**
1. Check browser console for errors (F12)
2. Ensure `script.js` is linked correctly in `index.html`
3. Clear browser cache and reload

### Mobile Menu Not Working

**Problem:** Hamburger menu doesn't open

**Solutions:**
1. Check if JavaScript is enabled
2. Verify `script.js` is loaded
3. Test on different browsers

## 📊 Performance Tips

1. **Optimize Images:**
   - Compress images before uploading
   - Use WebP format when possible
   - Keep image sizes reasonable (under 2MB each)

2. **Lazy Loading:**
   - Already implemented in the code
   - Images load as you scroll

3. **Minimize Files:**
   - For production, minify CSS and JS
   - Use tools like CSSNano and UglifyJS

## 🎓 Learning Resources

- **HTML:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS:** [CSS-Tricks](https://css-tricks.com/)
- **JavaScript:** [JavaScript.info](https://javascript.info/)
- **Web Design:** [Awwwards](https://www.awwwards.com/)

## 📝 Future Enhancements

Consider adding:
- [ ] Image zoom functionality
- [ ] Social sharing buttons
- [ ] Blog/News section
- [ ] Online store integration
- [ ] Video gallery
- [ ] Testimonials section
- [ ] Newsletter signup
- [ ] Search functionality
- [ ] Dark mode toggle

## 🤝 Support

If you encounter any issues:
1. Check this README first
2. Review the code comments
3. Test in different browsers
4. Check browser console for errors

## 📄 License

This project is open source and available for personal and commercial use.

## 🎉 Credits

- Fonts: Google Fonts (Playfair Display, Raleway)
- Icons: Emoji icons (no external library needed)
- Design: Custom built for artists

---

**Made with ❤️ for artists who want to showcase their work professionally**

**Last Updated:** March 2025