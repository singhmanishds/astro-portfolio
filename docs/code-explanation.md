# Astro Portfolio - Code Explanation & Guide

Welcome to the Astro Portfolio project! This document serves as a guide to understanding the codebase, architecture, and how to customize this portfolio website built with Astro, React, and Tailwind CSS.

## 1. Project Overview

This is a personal portfolio website designed to showcase skills, projects, and experience. It's built using modern web technologies with a focus on **performance (shipping less JavaScript)**, aesthetics, and maintainability, leveraging Astro's unique architecture.

**Key Features:**

*   **Performance Focused:** Built with Astro, prioritizing static HTML generation and minimal client-side JavaScript.
*   **Component Islands:** Uses Astro's Islands Architecture to hydrate interactive components (React) only when necessary.
*   **Responsive Design:** Adapts to various screen sizes.
*   **Dark/Light Mode:** Theme switching support implemented with client-side scripting and React.
*   **UI Components:** Utilizes ShadCN UI components (built with React).
*   **Modern Styling:** Uses Tailwind CSS for utility-first styling and a customizable theme.

## 2. Technologies Used

*   **Framework:** [Astro](https://astro.build/) (v4+)
*   **UI Library (for interactivity):** [React](https://reactjs.org/) (v18+)
*   **Language:** [TypeScript](https://www.typescriptlang.org/), JavaScript, Astro
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Component Library:** [ShadCN UI](https://ui.shadcn.com/) (React version)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/) (Used within React components)
*   **Integrations:**
    *   `@astrojs/react`: Enables using React components within Astro.
    *   `@astrojs/tailwind`: Integrates Tailwind CSS seamlessly.
    *   `astro-check`: Provides TypeScript checking for Astro files.

## 3. Project Structure

The project follows a structure typical for Astro applications:

```
.
├── docs/                  # Documentation files (like this one)
│   └── code-explanation.md
├── public/                # Static assets (favicon.svg, images, fonts) - Copied directly to build output
├── src/
│   ├── components/        # Reusable components (Astro and UI Frameworks)
│   │   ├── layout/        # React components for interactive layout parts (Navbar, SocialMediaPanel)
│   │   ├── ui/            # ShadCN UI React components (Button, Card, etc.)
│   │   ├── page-content/  # React components holding the main interactive content of pages
│   │   ├── theme-provider-script.astro # Script for initial theme setting
│   │   └── theme-toggle.tsx   # React component button to switch themes
│   ├── layouts/           # Astro layout components (.astro)
│   │   └── Layout.astro   # Main site layout template
│   ├── pages/             # Astro pages (.astro) - Define routes
│   │   ├── index.astro    # Homepage route ("/")
│   │   ├── resume.astro   # Resume route ("/resume")
│   │   ├── projects.astro # etc.
│   │   └── github.astro
│   │   └── other.astro
│   ├── styles/            # CSS and styling files
│   │   └── globals.css    # Global styles, Tailwind directives, CSS variables
│   ├── hooks/             # Custom React hooks (e.g., use-toast, use-mobile) - Used by React components
│   ├── lib/               # Utility functions (e.g., cn for class names) - Usable by Astro & React
│   └── ai/                # AI-related code (if used, e.g., Genkit flows)
│       ├── ai-instance.ts
│       └── flows/
├── astro.config.mjs       # Astro configuration file (integrations, output, etc.)
├── components.json        # ShadCN UI configuration file (for React components)
├── package.json           # Project dependencies and scripts
├── README.md              # General project README
├── tailwind.config.mjs    # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration (includes Astro settings)
```

## 4. Core Concepts Explained

### 4.1. Astro Fundamentals

*   **`.astro` Files:** Combine HTML-like syntax, scoped CSS, and JavaScript/TypeScript. They render to HTML on the server by default.
*   **Component-Based:** Build UIs using reusable Astro components or components from integrated frameworks (like React).
*   **Zero JS By Default:** Astro renders your UI to static HTML. Client-side JavaScript is only included if you explicitly opt-in using `client:*` directives.
*   **Islands Architecture:** Interactive UI components (like React components needing state or effects) are treated as "islands" within the static HTML. Astro automatically loads and hydrates these islands.

### 4.2. Routing

*   **File-based Routing:** Files inside `src/pages/` automatically become routes.
    *   `src/pages/index.astro` -> `/`
    *   `src/pages/resume.astro` -> `/resume`
    *   `src/pages/about.astro` -> `/about`
*   **Dynamic Routes:** Use brackets for parameters, e.g., `src/pages/posts/[slug].astro`.

### 4.3. Layouts (`src/layouts/`)

*   `.astro` files in `src/layouts/` define reusable page structures (like HTML boilerplate, header, footer).
*   Pages import layouts and use them to wrap their content using the `<slot />` element.
*   The main `Layout.astro` includes the `<html>`, `<head>`, `<body>`, imports global styles, and renders shared elements like the Navbar and Footer.

### 4.4. Styling

*   **Tailwind CSS:** Integrated via `@astrojs/tailwind`. Utility classes are used directly in `.astro` and `.tsx` files (`class="..."`). Configuration is in `tailwind.config.mjs`.
*   **Global Styles:** Defined in `src/styles/globals.css`, including Tailwind directives and CSS variables for theming. Imported in the root `Layout.astro`.
*   **Scoped Styles:** `<style>` tags within `.astro` components are scoped by default, preventing CSS conflicts.
*   **ShadCN UI Theme:** Works the same as in Next.js. Colors and styles are controlled by CSS variables in `globals.css`.

### 4.5. UI Frameworks (React) & Interactivity

*   **`@astrojs/react` Integration:** Allows using `.tsx` React components within `.astro` files.
*   **Client Directives (`client:*`):** Crucial for adding interactivity. They tell Astro *how* and *when* to load and hydrate a UI framework component's JavaScript.
    *   `<MyReactComponent client:load />`: Load and hydrate JS immediately. Use for components visible on page load (e.g., Navbar).
    *   `<MyReactComponent client:idle />`: Load and hydrate when the browser is idle. Good for lower-priority components (e.g., Toaster).
    *   `<MyReactComponent client:visible />`: Load and hydrate when the component scrolls into view. Ideal for components below the fold (e.g., complex charts, image carousels).
    *   `<MyReactComponent client:media={query} />`: Load based on a media query.
    *   `<MyReactComponent client:only="react" />`: Render **only** on the client. Skips SSR. Useful for components heavily reliant on browser APIs from the start.
*   **Component Structure:** Interactive parts of pages (like the main content of the homepage using Framer Motion) are extracted into React components (`src/components/page-content/`) and then imported into Astro pages with a `client:*` directive.

### 4.6. Theme (Light/Dark Mode)

*   **Initialization:** A script (`src/components/theme-provider-script.astro`) is injected into the `<head>` of `Layout.astro`. It runs *before* hydration to check `localStorage` or `prefers-color-scheme` and applies the `dark` class to the `<html>` element immediately, preventing theme flicker.
*   **Toggling:** The `ThemeToggle.tsx` React component (`client:load` in Navbar) handles user interaction. It uses simple JavaScript to:
    1.  Toggle the `dark` class on `document.documentElement`.
    2.  Update the theme preference in `localStorage`.

### 4.7. Data Handling

*   Similar to the Next.js version, data is currently hardcoded within the respective React components (`src/components/page-content/*.tsx`).
*   Astro allows fetching data within the `---` frontmatter of `.astro` files using `fetch` or other libraries. This data can then be passed as props to React components (which might not need a `client:*` directive if they just display the data).

## 5. Customization Guide

### 5.1. Changing Theme Colors

1.  Open `src/styles/globals.css`.
2.  Locate the `:root { ... }` block (light mode) and `.dark { ... }` block (dark mode).
3.  Modify the HSL values for the CSS variables (e.g., `--primary`, `--background`).
4.  Save the file. The Astro dev server should apply changes automatically.

### 5.2. Updating Content (Resume, Projects, etc.)

1.  Navigate to the relevant React component in `src/components/page-content/`.
    *   **Resume:** `src/components/page-content/resume-page-content.tsx` -> `resumeData` object.
    *   **Projects:** `src/components/page-content/projects-page-content.tsx` -> `projects` array.
    *   **GitHub:** `src/components/page-content/github-page-content.tsx` -> `githubData` object.
    *   **Other:** `src/components/page-content/other-page-content.tsx` -> `otherContent` array.
    *   **Homepage:** `src/components/page-content/home-page-content.tsx` -> text, `skillsHighlight` array.
2.  Edit the data directly within these components.

### 5.3. Updating Images

*   **Public Folder:** Place images in the `public/` directory (e.g., `public/images/my-image.png`). Reference them with a root-relative path (e.g., `src="/images/my-image.png"`). Astro copies the `public` folder contents directly to the build output.
*   **Astro Assets (Recommended for Optimization):** Place images within `src/assets/` (or similar inside `src/`). Import them into `.astro` or `.tsx` files. Astro can optimize these images during the build process.
    ```astro
    ---
    import myImage from '../assets/my-image.png';
    import { Image } from 'astro:assets'; // Astro's Image component
    ---
    <Image src={myImage} alt="Description" width={600} height={400} />
    ```
    ```typescript jsx
    // Inside a React component (.tsx)
    import myImage from '../../assets/my-image.png'; // Relative path from component

    function MyReactComponent() {
      // Use standard img tag, Astro optimizes the imported asset path
      return <img src={myImage.src} alt="Description" width={myImage.width} height={myImage.height} loading="lazy" />;
    }
    ```
*   **ShadCN Components:** When using ShadCN components that take image `src` props, provide the correct public path or the imported asset's `.src` property.

### 5.4. Modifying Navigation

1.  Open `src/components/layout/navbar.tsx`.
2.  Find the `navItems` array.
3.  Add, remove, or modify objects to change links (`href`, `label`, `icon`).

### 5.5. Adding a New Page

1.  Create a new `.astro` file inside `src/pages/` (e.g., `src/pages/contact.astro`).
2.  Import the main `Layout` component.
3.  Add your page content within the `<Layout>` tags. You can use HTML, Astro components, or import React components (remembering `client:*` directives if they are interactive).

    ```astro
    ---
    // src/pages/contact.astro
    import Layout from '@/layouts/Layout.astro';
    import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Import UI (these are React)
    // import ContactForm from '@/components/contact-form'; // Example: If you create an interactive form component
    ---

    <Layout title="Contact Me">
      <div class="container mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold mb-6">Contact Me</h1>
        {/*
          ShadCN components are React. If they don't need interactivity *themselves*
          (e.g., just displaying text), they might not need a client directive here.
          However, the components *within* them (like Buttons, Inputs) *will* need JS eventually.
          If the whole form is interactive, wrap it in a React component with client:visible.
        */}
        <Card> {/* This is a React component, rendered to HTML by Astro */}
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Contact form or details go here...</p>
            {/* <ContactForm client:visible /> Example: Hydrate form when visible */}
          </CardContent>
        </Card>
      </div>
    </Layout>
    ```
4.  Update the `navItems` array in `src/components/layout/navbar.tsx` to include a link to `/contact`.

### 5.6. Adding/Updating ShadCN Components

*   Use the ShadCN UI CLI as before (make sure it targets your React components):
    *   `npx shadcn-ui@latest add [component-name]`
    *   The CLI will add/update the component file in `src/components/ui/`.

## 6. Future Enhancements & Considerations

*   **Dynamic Data Fetching:**
    *   **GitHub:** Fetch data in `src/pages/github.astro`'s frontmatter using `fetch`. Pass the data as props to `GitHubPageContent`.
    *   **CMS:** Integrate a headless CMS. Fetch data in page frontmatter and pass it down.
*   **Contact Form:**
    *   Create an interactive React form component (`ContactForm.tsx`).
    *   Use an Astro API endpoint (`src/pages/api/contact.ts`) to handle submissions.
    *   Render the form using `<ContactForm client:visible />` on the contact page.
*   **Astro Image Optimization:** Replace standard `<img>` tags with Astro's `<Image />` component where possible for better performance.
*   **View Transitions:** Explore Astro's View Transitions API for smoother client-side navigation between pages. (Requires enabling in `astro.config.mjs` and potentially adding `transition:animate` directives).
*   **Testing:** Use Vitest for unit/integration tests and Playwright for end-to-end tests within the Astro ecosystem.
*   **GenAI Features:** Implement Genkit flows. These server-side functions can be called from Astro API endpoints or potentially directly from page frontmatter if simple.

## 7. Running the Project

1.  **Install Dependencies:** `npm install` (or `yarn`, `pnpm`)
2.  **Development Server:** `npm run dev` (Starts Astro dev server, usually on port 4321 unless configured otherwise)
3.  **Build for Production:** `npm run build` (Creates optimized static assets in `dist/`)
4.  **Preview Production Build:** `npm run preview` (Serves the `dist` folder locally)
5.  **Type Checking:** `npm run typecheck` (Runs `astro check` and `tsc`)

This guide provides a foundation for understanding and modifying the Astro-based portfolio. Remember Astro's focus on server-rendering and deliberate client-side hydration. Happy coding!
