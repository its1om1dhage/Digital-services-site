# Quick Reference: Using the New Blue Theme

## Tailwind CSS Classes

### Background Colors
```jsx
// Primary Blue Backgrounds
className="bg-primary"           // #2563eb
className="bg-primary-dark"      // #1e40af
className="bg-primary-light"     // #3b82f6

// Secondary Blue Backgrounds
className="bg-secondary"         // #0284c7
className="bg-secondary-dark"    // #0369a1
className="bg-secondary-light"   // #0ea5e9
```

### Text Colors
```jsx
// Primary Blue Text
className="text-primary"         // #2563eb
className="text-primary-dark"    // #1e40af
className="text-primary-light"   // #3b82f6

// Secondary Blue Text
className="text-secondary"       // #0284c7
className="text-secondary-dark"  // #0369a1
className="text-secondary-light" // #0ea5e9
```

### Gradients
```jsx
// Primary to Secondary (Full blue gradient)
className="bg-gradient-to-r from-primary to-secondary"

// Primary to Dark (Deep blue gradient)
className="bg-gradient-to-r from-primary to-primary-dark"

// Light backgrounds
className="bg-gradient-to-br from-blue-50 via-white to-sky-50"

// Subtle tints
className="from-primary/20 to-secondary/20"
```

### Borders
```jsx
// Primary border
className="border-primary"

// Border with hover
className="border-2 border-primary hover:bg-primary hover:text-white"
```

### Shadows
```jsx
// Primary shadow
className="shadow-primary/35"

// Enhanced shadow on hover
className="hover:shadow-xl hover:shadow-primary/45"
```

### Buttons

#### Primary Button (Solid)
```jsx
<button className="px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg shadow-primary/35 hover:shadow-xl hover:shadow-primary/45 hover:-translate-y-1 transition-all duration-400">
  Get Started
</button>
```

#### Secondary Button (Outline)
```jsx
<button className="px-8 py-3.5 rounded-xl font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300">
  Learn More
</button>
```

### Cards
```jsx
<div className="bg-white dark:bg-slate-900 p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
  {/* Add blue accent on hover */}
  <div className="before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-primary before:to-secondary">
    {/* Content */}
  </div>
</div>
```

### Icons
```jsx
// Primary blue icon
<svg className="w-12 h-12 text-primary dark:text-primary-light">
  {/* SVG paths */}
</svg>

// Gradient background for icons
<div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary">
  <i className="fas fa-icon"></i>
</div>
```

### Form Inputs
```jsx
<input className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
```

### Links
```jsx
// Navigation link with blue active state
<Link className="text-gray-800 dark:text-gray-200 hover:text-primary transition-all" />

// Active link
<Link className="text-primary after:w-full after:bg-gradient-to-r after:from-primary after:to-secondary" />
```

### Backgrounds

#### Hero/Header Sections
```jsx
className="bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
```

#### CTA Sections
```jsx
className="bg-gradient-to-r from-primary to-secondary"
```

#### Alternate Sections
```jsx
className="bg-gray-50 dark:bg-slate-800"
```

## Color Opacity Variants

### Primary Blue with Opacity
```jsx
bg-primary/10   // 10% opacity - Very light tint
bg-primary/20   // 20% opacity - Light background
bg-primary/30   // 30% opacity - Subtle highlight
bg-primary/50   // 50% opacity - Medium tone
```

### Text with Opacity
```jsx
text-primary/90   // Slightly transparent
text-primary/70   // More transparent
```

## Common Patterns

### Feature Card
```jsx
<div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
  <div className="text-primary dark:text-primary-light mb-5">
    {/* Icon */}
  </div>
  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
    {/* Title */}
  </h3>
  <p className="text-gray-600 dark:text-gray-400">
    {/* Description */}
  </p>
</div>
```

### Pricing Card
```jsx
<div className="relative bg-white dark:bg-slate-900 p-10 rounded-2xl shadow-lg border border-primary scale-105">
  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-bl-xl rounded-tr-xl">
    Popular
  </div>
  {/* Content */}
</div>
```

### Stats Display
```jsx
<span className="text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
  500+
</span>
```

## CSS Variable Reference (for custom CSS)

If you need to use colors in custom CSS files:

```css
/* These reference Tailwind's theme colors */
.custom-element {
  background: linear-gradient(135deg, var(--tw-color-primary), var(--tw-color-secondary));
}

/* Or use the hex values directly */
.custom-element {
  background: linear-gradient(135deg, #2563eb, #0284c7);
}
```

## Dark Mode Support

All colors automatically adapt to dark mode when using:
```jsx
className="text-primary dark:text-primary-light"
className="bg-white dark:bg-slate-900"
className="border-gray-200 dark:border-slate-700"
```

---

**Pro Tip:** The blue theme is now your default. Just use `primary` and `secondary` classes throughout your components, and they'll automatically use the professional blue gradient!
