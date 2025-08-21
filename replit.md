# Portfolio Website Project

## Overview
This is a modern full-stack portfolio website built with React, Express, and TypeScript. The project showcases personal achievements, education, experience, skills, projects, and certificates through an interactive single-page application.

## Project Architecture

### Frontend (Client)
- **Framework**: React 18 with TypeScript
- **Routing**: Single-page application with smooth scrolling navigation
- **Styling**: TailwindCSS with shadcn/ui components
- **State Management**: TanStack Query for data fetching
- **UI Components**: Radix UI primitives with custom styling

### Backend (Server)
- **Framework**: Express.js with TypeScript
- **Storage**: In-memory storage (MemStorage) with user management interface
- **Development**: Vite integration for hot reloading
- **Security**: CORS enabled, JSON parsing, session handling ready

### Key Features
- Responsive design with modern gradient backgrounds
- Interactive navigation with smooth scrolling
- Portfolio sections: Home, About, Achievements, Education, Experience, Skills, Projects, Certificates, Contact
- Component-based architecture with reusable UI elements
- Toast notifications and tooltip support
- Dark/light theme support infrastructure

## Recent Changes
- **2024-08-21**: Successfully migrated from Replit Agent to Replit environment
  - Fixed cross-env dependency issue
  - Updated server configuration to use 0.0.0.0 for proper Replit hosting
  - Resolved TypeScript configuration issues
  - All LSP errors cleared
  - Server running successfully on port 5000
  - Updated portfolio with Jamil Ur Rahman's complete professional information
  - Added comprehensive education, experience, skills, projects, and certifications data
  - Integrated Islamabad location navigation with interactive Google Maps
  - Updated contact information with correct email and phone details
  - Enhanced Education and Experience sections with modern timeline designs
  - Added Location section with interactive map and availability status
  - Implemented smooth loading screen with portfolio branding
  - Added comprehensive animation library for smooth page transitions
  - Updated navbar to include Location navigation link

## User Preferences
- Uses modern full-stack JavaScript patterns
- Prefers component-based architecture
- Values clean, responsive design
- Focuses on portfolio/personal branding use case

## Development Guidelines
- Follow existing shadcn/ui patterns for new components
- Use TanStack Query for any future API integrations
- Maintain TypeScript strict mode compliance
- Keep components modular and reusable

## Running the Project
- Development: `npm run dev` (starts both frontend and backend)
- Build: `npm run build`
- Production: `npm start`