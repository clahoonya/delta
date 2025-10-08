# Delta Life Insurance Website

This is the official website for Delta Life Insurance Company, providing information about life insurance, cancer insurance, and property coverage throughout Georgia. The company has been protecting Georgia families since 1958 with personal home service.

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn/ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone <repository-url>
cd delta-life
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:8080`.


### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── home/          # Home page components
│   ├── layout/        # Layout components (Header, Footer)
│   └── ui/            # Reusable UI components
├── pages/             # Page components
├── hooks/             # Custom React hooks
├── lib/               # Utilities and configurations
└── assets/            # Static assets
```

## Deployment

The project can be deployed to any static hosting service that supports React applications, such as Vercel, Netlify, or GitHub Pages.

To build for production:
```sh
npm run build
```

The built files will be in the `dist/` directory.
