# Temesgen Marie Portfolio

A modern, responsive portfolio website built with Next.js, showcasing backend and mobile development expertise.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>
cd portfolio-website

# Install dependencies using npm
npm install

# Start development server
npm run dev
\`\`\`

### Production Build

\`\`\`bash
# Clean install for production
npm ci

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run install:clean` - Clean install dependencies
- `npm run build:production` - Production build with clean install

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Icons**: Lucide React
- **Package Manager**: npm (production optimized)

## 🚀 Deployment

### Vercel (Recommended)
\`\`\`bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
\`\`\`

### Docker
\`\`\`bash
# Build Docker image
docker build -t portfolio-website .

# Run container
docker run -p 3000:3000 portfolio-website
\`\`\`

## 📁 Project Structure

\`\`\`
portfolio-website/
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Shared components
├── lib/                   # Utility functions
├── public/               # Static assets
├── package.json          # npm configuration
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
\`\`\`

## 🔧 Configuration

The project is optimized for npm usage with:
- Package-lock.json for dependency locking
- npm ci for production installs
- Optimized webpack configuration
- Production-ready Docker setup

## 📝 License

This project is licensed under the MIT License.
