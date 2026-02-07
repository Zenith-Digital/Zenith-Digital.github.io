# Image Organization Guide

This file explains where to place different types of images in your Next.js project.

## Folder Structure

```
public/
├── images/
│   ├── logos/           # Company logos, brand assets
│   ├── team/            # Team member photos, profile pictures
│   ├── portfolio/       # Project screenshots, case studies
│   ├── backgrounds/     # Hero backgrounds, section backgrounds
│   └── icons/           # Custom icons, SVG assets
├── favicon.ico          # Website favicon
└── robots.txt           # SEO robots file
```

## Usage Examples

### In React Components:
```jsx
import Image from 'next/image'

// For optimized images
<Image 
  src="/images/logos/zenith-digital-logo.png" 
  alt="Zenith Digital Logo"
  width={200}
  height={100}
/>

// For background images in CSS
background-image: url('/images/backgrounds/hero-bg.jpg')
```

### Recommended Image Types:
- **Logos**: PNG with transparency, SVG for scalability
- **Photos**: JPG for photographs, WebP for modern browsers
- **Icons**: SVG for crisp scaling
- **Screenshots**: PNG for UI elements, JPG for game screenshots

### File Naming Convention:
- Use lowercase with hyphens: `project-name-screenshot.jpg`
- Be descriptive: `daniel-orchard-profile.jpg`
- Include dimensions if multiple sizes: `logo-200x100.png`

## Image Optimization Tips:
1. Next.js automatically optimizes images when using the Image component
2. Use appropriate formats (WebP > JPG > PNG for photos)
3. Compress images before uploading
4. Provide alt text for accessibility
