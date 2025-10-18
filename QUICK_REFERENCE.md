# 🚀 Quick Reference Card - Pure Tailwind Project

## ✅ Project Status
- **CSS Files:** 1 (index.css with Tailwind directives only)
- **Component CSS:** 0 files (all deleted)
- **Theme:** Professional Blue Gradient
- **Migration:** 100% Complete

## 🎨 Color Palette

### Primary (Blue)
```
#2563eb - Default
#1e40af - Dark
#3b82f6 - Light
```

### Secondary (Sky Blue)
```
#0284c7 - Default
#0369a1 - Dark
#0ea5e9 - Light
```

## 🔧 Tailwind Classes Quick Reference

### Buttons
```jsx
// Primary
className="px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg shadow-primary/35 hover:shadow-xl hover:shadow-primary/45 hover:-translate-y-1 transition-all duration-400"

// Secondary
className="px-8 py-3.5 rounded-xl font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
```

### Cards
```jsx
className="bg-white dark:bg-slate-900 p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
```

### Gradient Text
```jsx
className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
```

### Links
```jsx
className="text-gray-800 dark:text-gray-200 hover:text-primary transition-all duration-300"
```

## 🎭 Animations Available

```jsx
animate-float           // 4s floating
animate-float-delay-1   // 4s floating (1s delay)
animate-float-delay-2   // 4s floating (2s delay)
animate-pulse-slow      // 8s pulse
animate-rotate          // 20s rotation
animate-sun-rotate      // Sun icon rotation
animate-moon-glow       // Moon icon glow
```

## 🌓 Dark Mode
All components support dark mode:
```jsx
className="bg-white dark:bg-slate-900"
className="text-gray-800 dark:text-gray-200"
className="border-gray-200 dark:border-slate-700"
```

## 📱 Responsive Design
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="hidden md:block"
className="flex md:hidden"
```

## 🎯 Common Patterns

### Section Container
```jsx
className="py-20 bg-white dark:bg-slate-900"
```

### Max Width Container
```jsx
className="max-w-7xl mx-auto px-5"
```

### Gradient Background Section
```jsx
className="py-24 bg-gradient-to-r from-primary to-secondary"
```

### Icon Container
```jsx
className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary"
```

## 🔍 Where to Find Things

### Colors
`tailwind.config.js` → `theme.extend.colors`

### Animations
`tailwind.config.js` → `theme.extend.keyframes` & `theme.extend.animation`

### Global Styles
`src/index.css` (Tailwind directives only)

### Components
All in `src/components/` (using pure Tailwind)

## 💡 Pro Tips

1. **Use arbitrary values for precision:**
   ```jsx
   className="w-[26px] shadow-[0_3px_10px_rgba(37,99,235,0.3)]"
   ```

2. **Leverage group hover:**
   ```jsx
   <div className="group">
     <span className="group-hover:scale-110" />
   </div>
   ```

3. **Combine utilities:**
   ```jsx
   className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
   ```

4. **Use opacity modifiers:**
   ```jsx
   className="bg-primary/20 text-primary/90"
   ```

## 📝 Editing Guidelines

### ✅ DO
- Use Tailwind utility classes
- Use arbitrary values when needed
- Add animations to tailwind.config.js
- Use responsive modifiers (md:, lg:)
- Leverage dark mode variants

### ❌ DON'T
- Create new CSS files
- Write inline styles
- Use !important
- Create custom CSS classes
- Import CSS in components

## 🛠️ Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📚 Documentation Files

- `PROJECT_STATUS.md` - Current status
- `TAILWIND_MIGRATION.md` - Migration details
- `THEME_USAGE_GUIDE.md` - Theme usage
- `COLOR_THEME_UPDATE.md` - Color changes
- `COLOR_COMPARISON.md` - Color comparison

## 🌐 Live Server
**http://localhost:5174/**

---
**Last Updated:** October 18, 2025
