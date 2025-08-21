# Portfolio Website

## Overview

This is a professional portfolio website built with React and TypeScript, showcasing a software engineer's background, achievements, education, experience, skills, and projects. The application features a modern, responsive design with smooth navigation between different sections including About, Achievements, Education, Experience, Skills, Projects, and Contact pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React SPA**: Single-page application using React with TypeScript for type safety
- **Routing**: Client-side routing implemented with `wouter` for lightweight navigation
- **UI Framework**: Combines shadcn/ui components (built on Radix UI primitives) with Tailwind CSS for styling
- **State Management**: React Query (@tanstack/react-query) for server state management and caching
- **Component Structure**: Modular component architecture with reusable UI components, page components, and data-driven content

### Styling and Design System
- **CSS Framework**: Tailwind CSS with custom design tokens and CSS variables
- **Component Library**: shadcn/ui providing consistent, accessible UI components
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Font Integration**: Custom font loading (Inter, Roboto) with Font Awesome icons
- **Theme System**: CSS custom properties for colors, shadows, and design tokens

### Data Management
- **Static Data**: Hard-coded content stored in TypeScript data files for personal info, achievements, education, experience, skills, and projects
- **Type Safety**: Strong typing for all data structures using TypeScript interfaces
- **Content Organization**: Separation of concerns with dedicated data files for different content types

### Build and Development Tools
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript Configuration**: Strict type checking with path mapping for clean imports
- **PostCSS**: Processing for Tailwind CSS with autoprefixer
- **Development**: Hot module replacement and development server through Vite

### Backend Architecture
- **Express Server**: Node.js backend with Express framework for serving the application
- **Database Integration**: Drizzle ORM configured for PostgreSQL with Neon Database serverless driver
- **Session Management**: PostgreSQL session store (connect-pg-simple) for user sessions
- **API Structure**: RESTful API endpoints with Express routing
- **Production Serving**: Static file serving for production builds

### File Structure
- **Client**: Frontend React application with components, pages, hooks, and utilities
- **Server**: Backend Express server with routing and storage abstractions
- **Shared**: Common schema definitions and types shared between client and server
- **Database**: Drizzle schema definitions and migration configuration

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive collection of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **shadcn/ui**: Pre-built component library built on Radix UI and Tailwind
- **Lucide React**: Icon library for consistent iconography
- **Font Awesome**: Additional icon library for social media and technical icons

### State and Data Management
- **React Query**: Server state synchronization and caching layer
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation library for runtime type checking

### Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM for database operations
- **Neon Database**: Serverless PostgreSQL database provider
- **PostgreSQL**: Primary database system for data persistence

### Development and Build Tools
- **Vite**: Next-generation frontend tooling for development and building
- **TypeScript**: Static type checking for enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing tool for Tailwind CSS

### Routing and Navigation
- **Wouter**: Minimalist routing library for React applications

### Server and Session Management
- **Express.js**: Web application framework for Node.js
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Development Utilities
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment