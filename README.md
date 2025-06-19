# Internship Assessment Portal

A fully responsive one-page landing page for internship assessments featuring four interactive category cards and modern mobile-first design.

## Features

- **Responsive Design**: Mobile-first layout that works seamlessly across all devices
- **Four Assessment Categories**:
  - Content Creator
  - Graphic Designer
  - Data Analyst
  - Website Designer
- **Interactive Elements**: Hover effects, smooth scrolling, and loading states
- **Modern UI**: Clean typography with Google Fonts (Inter), gradient backgrounds, and animations
- **Accessibility**: Keyboard navigation support and focus states
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Files Structure

```
internship-portal-website/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Installation

1. Download all files to your web server directory
2. Ensure all files are in the same folder
3. Open `index.html` in a web browser or upload to your hosting server

## Hosting Requirements

- **Web Server**: Any standard web server (Apache, Nginx, IIS, etc.)
- **PHP/Backend**: Not required (pure HTML/CSS/JavaScript)
- **Database**: Not required
- **SSL**: Recommended for production use

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Changing Colors
Edit the gradient colors in `styles.css`:
```css
.gradient-bg {
    background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

### Updating Content
- Edit assessment descriptions in `index.html`
- Modify contact email in the footer section
- Update social media links in the footer

### Adding Assessment Links
Replace the placeholder Google Form link in the Submit section:
```html
<a href="YOUR_GOOGLE_FORM_LINK">Submit Your Answers</a>
```

### Assessment Links
The assessment buttons are now linked to specific Google Forms:
- Content Creator: Linked to your provided Google Form
- Graphic Designer: Linked to your provided Google Form  
- Data Analyst: Linked to your provided Google Form
- Website Designer: Linked to your provided Google Form

All links open in new tabs/windows for better user experience.

## External Dependencies

The website uses CDN links for external resources:
- **Tailwind CSS**: `https://cdn.tailwindcss.com`
- **Font Awesome**: Font Awesome 6.4.0 for icons
- **Google Fonts**: Inter font family

For offline use, download these resources locally.

## Performance Features

- Lazy loading for images
- Smooth scroll behavior
- Optimized animations
- Minimal JavaScript footprint

## SEO Features

- Semantic HTML structure
- Meta description and keywords
- Open Graph tags ready for social sharing
- Proper heading hierarchy (H1, H2, H3)

## Accessibility Features

- Keyboard navigation support
- Focus states for interactive elements
- Proper ARIA labels (can be extended)
- Color contrast compliance
- Screen reader friendly structure

## Mobile Responsiveness

The design is mobile-first and includes:
- Responsive grid layouts
- Touch-friendly button sizes
- Optimized typography scaling
- Mobile-specific animations

## License

This code is provided as-is for educational and commercial use. You are free to modify and distribute as needed.

## Support

For technical issues:
1. Check browser console for JavaScript errors
2. Verify all files are uploaded correctly
3. Ensure proper file permissions on your server
4. Test on multiple browsers

## Future Enhancements

Consider adding:
- Contact form functionality
- Assessment tracking system
- User registration/login
- Progress tracking
- Email notifications
- Multi-language support