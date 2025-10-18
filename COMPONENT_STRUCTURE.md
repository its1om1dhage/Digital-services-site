# Component Structure Documentation

## 📁 Project Structure

The project has been refactored following React best practices with a component-based architecture:

```
src/
├── components/
│   ├── HomeComponents/          # Home page specific components
│   │   ├── HeroSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── GrowthSection.jsx
│   │   ├── WorkProcessPreview.jsx
│   │   ├── CTASection.jsx
│   │   └── index.js            # Exports all Home components
│   │
│   ├── shared/                  # Reusable components across pages
│   │   ├── PageHeader.jsx      # Common page header
│   │   ├── SectionTitle.jsx    # Section title component
│   │   └── index.js
│   │
│   ├── Navbar.jsx              # Navigation component
│   ├── Footer.jsx              # Footer component
│   └── Layout.jsx              # Layout wrapper
│
└── pages/                       # Page-level components
    ├── Home.jsx                # Main home page (orchestrates HomeComponents)
    ├── About.jsx
    ├── Contact.jsx
    ├── Pricing.jsx
    ├── Team.jsx
    ├── Testimonials.jsx
    └── WorkProcess.jsx
```

## 🎯 Benefits of This Structure

### 1. **Separation of Concerns**
- Each component has a single responsibility
- Easier to understand and maintain
- Components are self-contained with their own logic

### 2. **Reusability**
- Components can be reused across different pages
- Shared components in `/shared` folder for common UI elements
- Reduces code duplication

### 3. **Scalability**
- Easy to add new sections or pages
- Clear organization makes onboarding new developers easier
- Can easily refactor individual components

### 4. **Testability**
- Each component can be tested independently
- Easier to write unit tests
- Better isolation of functionality

### 5. **Performance**
- Components can be lazy-loaded when needed
- Easier to implement code splitting
- Better bundle optimization

## 📝 How to Use

### Creating a New Page Section

1. **Create a new folder** for page-specific components:
   ```bash
   src/components/AboutComponents/
   ```

2. **Create individual section components**:
   ```jsx
   // MissionSection.jsx
   import React from 'react';
   
   const MissionSection = () => {
     return (
       <section>
         {/* Your section content */}
       </section>
     );
   };
   
   export default MissionSection;
   ```

3. **Create an index.js** for exports:
   ```javascript
   export { default as MissionSection } from './MissionSection';
   export { default as VisionSection } from './VisionSection';
   ```

4. **Import and use in your page**:
   ```jsx
   import { MissionSection, VisionSection } from '../components/AboutComponents';
   
   const About = () => {
     return (
       <div>
         <MissionSection />
         <VisionSection />
       </div>
     );
   };
   ```

### Using Shared Components

```jsx
import { PageHeader, SectionTitle } from '../components/shared';

const MyPage = () => {
  return (
    <div>
      <PageHeader 
        title="My Page" 
        subtitle="Page description" 
      />
      <SectionTitle 
        title="Section Title" 
        subtitle="Section description" 
      />
    </div>
  );
};
```

## 🔄 Migration Guide

### Before (Monolithic Component):
```jsx
const Home = () => {
  // 300+ lines of JSX
  return (
    <div>
      {/* Hero Section - 50 lines */}
      {/* Services Section - 40 lines */}
      {/* About Section - 60 lines */}
      {/* ... more sections */}
    </div>
  );
};
```

### After (Component-Based):
```jsx
import {
  HeroSection,
  ServicesSection,
  AboutSection,
  GrowthSection,
  WorkProcessPreview,
  CTASection
} from '../components/HomeComponents';

const Home = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GrowthSection />
      <WorkProcessPreview />
      <CTASection />
    </div>
  );
};
```

## 📋 Component Naming Conventions

- **Page Components**: PascalCase, descriptive (e.g., `Home.jsx`, `About.jsx`)
- **Section Components**: PascalCase with "Section" suffix (e.g., `HeroSection.jsx`)
- **Shared Components**: PascalCase, generic names (e.g., `PageHeader.jsx`)
- **Folders**: PascalCase with purpose (e.g., `HomeComponents/`, `shared/`)

## 🎨 Component Guidelines

### Each component should:
1. Have a single, clear purpose
2. Accept props for customization
3. Be self-contained (include its own styles/logic)
4. Export as default from its file
5. Be exported from folder's index.js

### Example Component Template:
```jsx
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ComponentName - Brief description
 * @param {Object} props - Component props
 */
const ComponentName = ({ prop1, prop2 }) => {
  // Component logic here
  
  return (
    <section className="...">
      {/* Component JSX */}
    </section>
  );
};

export default ComponentName;
```

## 🚀 Next Steps

To complete the refactoring for other pages:

1. **Contact Page**: Create `ContactComponents/` folder
   - `ContactForm.jsx`
   - `ContactInfo.jsx`
   - `ContactMap.jsx` (if applicable)

2. **About Page**: Create `AboutComponents/` folder
   - `MissionSection.jsx`
   - `VisionSection.jsx`
   - `ValuesSection.jsx`

3. **Pricing Page**: Create `PricingComponents/` folder
   - `PricingCard.jsx`
   - `PricingHeader.jsx`
   - `PricingFAQ.jsx`

4. **Team Page**: Create `TeamComponents/` folder
   - `TeamMemberCard.jsx`
   - `TeamGrid.jsx`

5. **Testimonials Page**: Create `TestimonialsComponents/` folder
   - `TestimonialCard.jsx`
   - `TestimonialsGrid.jsx`

6. **WorkProcess Page**: Create `WorkProcessComponents/` folder
   - `ProcessStep.jsx`
   - `ProcessTimeline.jsx`

## 💡 Tips

- Keep components small and focused (< 150 lines)
- Use props for flexibility
- Extract repeated UI patterns into shared components
- Document complex components with comments
- Consider prop-types or TypeScript for type safety

## 🔗 Resources

- [React Component Patterns](https://reactpatterns.com/)
- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [Component Best Practices](https://react.dev/learn/passing-props-to-a-component)

---

**Last Updated**: October 2025
