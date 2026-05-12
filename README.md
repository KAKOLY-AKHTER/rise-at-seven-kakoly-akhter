# Rise at Seven — High-Fidelity Homepage Reconstruction

A pixel-perfect, interactive reconstruction of the [Rise at Seven](https://riseatseven.com/) agency homepage. This project focuses on capturing the agency's premium brand identity through advanced animations, custom interactions, and responsive design.

## 🚀 Key Features

- **Dynamic Hero Section**: Interactive navigation with GSAP-powered transitions and authentic award branding.
- **Custom Cursor Engine**: A specialized cursor system that adapts with context-aware icons (arrows, magnifiers) and branding colors.
- **Featured Work Showcase**: A dual-column scroll experience with sticky navigation and synchronized image transitions.
- **GSAP Animations**: Fluid, high-performance animations across all sections including marquees, card reveals, and text effects.
- **Responsive Section Spacing**: Standardized vertical rhythm (120px desktop / 80px mobile) matching the official site's design system.
- **Global Branding**: Integrated registered trademark (®) markers, custom SVG favicon, and official typography.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Animation**: [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
- **Slider**: [Swiper.js](https://swiperjs.com/)
- **Styling**: Vanilla CSS (Modern CSS properties & Responsive Design)
- **Icons**: FontAwesome 6

## 📁 Project Structure

```text
src/
├── components/           # Modularized UI components
│   ├── Hero/             # Main hero, navigation, and mobile menu
│   ├── FeaturedWork/     # Scrolling project showcase
│   ├── ServicesList/     # Interactive service categories
│   ├── Cursor/           # Custom cursor logic and styling
│   └── ...               # Footer, Marquee, BlogCards, etc.
├── assets/               # Local images and fonts
├── App.jsx               # Main application layout
└── index.css             # Global styles and design tokens
```

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🎨 Design Fidelity

This project was built with a "pixel-perfect" mindset. Every margin, padding value, and transition timing has been calibrated to match the original Rise at Seven user experience. Key attention was paid to:
- Typography hierarchy using Saans and Inter.
- Smooth scroll triggers for content entry.
- Seamless transitions between light and dark thematic blocks.

---

*Reconstructed by Antigravity AI.*
