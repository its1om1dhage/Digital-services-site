# WebCultivate - Modern Web Solutions for Growing Brands

A professional, modern website for WebCultivate - a freelancing partner for web design, development, and branding services.

## 🚀 Features

- **Responsive Design** - Works seamlessly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **React Router** - Smooth navigation with persistent navbar and footer
- **Multiple Pages**:
  - Home - Hero section with services overview
  - About - Company information and mission
  - Work Process - 6-step workflow visualization
  - Testimonials - Client feedback and statistics
  - Pricing - Three pricing tiers with features
  - Team - Meet the team members
  - Contact - Contact form and information

## 🛠️ Technologies Used

- **React 19** - UI framework
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with modern features
- **Font Awesome** - Icons
- **Google Fonts (Inter)** - Typography

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Project

Development mode:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/
│   ├── Layout.jsx          # Main layout with Outlet
│   ├── Navbar.jsx          # Navigation bar
│   ├── Navbar.css
│   ├── Footer.jsx          # Footer component
│   └── Footer.css
├── pages/
│   ├── Home.jsx            # Home page
│   ├── Home.css
│   ├── About.jsx           # About page
│   ├── About.css
│   ├── WorkProcess.jsx     # Work process page
│   ├── WorkProcess.css
│   ├── Testimonials.jsx    # Testimonials page
│   ├── Testimonials.css
│   ├── Pricing.jsx         # Pricing page
│   ├── Pricing.css
│   ├── Team.jsx            # Team page
│   ├── Team.css
│   ├── Contact.jsx         # Contact page
│   └── Contact.css
├── App.jsx                 # Main app with routes
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## 🎨 Color Scheme

- Primary: #6366f1 (Indigo)
- Secondary: #8b5cf6 (Purple)
- Accent: #10b981 (Green)
- Dark: #1e293b
- Light: #f8fafc

## 📱 Pages Overview

### Home
- Hero section with call-to-action
- Services showcase
- About preview
- Growth section
- Work process preview
- Call-to-action section

### About
- Company story
- Mission, Vision, Values
- Why choose WebCultivate (6 benefits)

### Work Process
- 6-step timeline visualization
- Get Ideas → Sketch Up → Discuss → Revise → Approve → Launch

### Testimonials
- 6 client testimonials
- Statistics section

### Pricing
- 3 pricing tiers (Starter, Professional, Enterprise)
- Feature comparison
- FAQ section

### Team
- 6 team members with roles
- Social links
- Join team CTA

### Contact
- Contact form
- Contact information
- Social media links
- Business hours

## 🔧 Customization

To customize the content:

1. **Colors**: Edit CSS variables in `src/index.css`
2. **Content**: Update text in respective page components
3. **Images**: Replace emoji placeholders with actual images
4. **Contact Info**: Update in `src/components/Footer.jsx` and `src/pages/Contact.jsx`

## 📄 License

This project is open source and available for use.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ by WebCultivate Team

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
