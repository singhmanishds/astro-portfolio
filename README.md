c# Astro Portfolio - codeandcurtains

This is a personal portfolio website built with [Astro](https://astro.build/), [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [ShadCN UI](https://ui.shadcn.com/).

## Key Features

*   **Performance Focused:** Built with Astro for minimal client-side JavaScript by default.
*   **Component Islands:** Uses Astro's Islands Architecture for interactive React components.
*   **Responsive Design:** Adapts to various screen sizes.
*   **Dark/Light Mode:** Theme switching support.
*   **Modern Styling:** Uses Tailwind CSS and a customizable theme via CSS variables.
*   **UI Components:** Leverages ShadCN UI (React version).

## Project Structure

*   `src/pages/`: Contains Astro pages that define the site's routes.
*   `src/layouts/`: Contains Astro layout components (e.g., `Layout.astro`).
*   `src/components/`: Contains reusable UI components.
    *   `ui/`: ShadCN UI React components.
    *   `layout/`: Interactive layout parts (Navbar - React).
    *   `page-content/`: Main interactive content sections for pages (React).
*   `src/styles/`: Global CSS files (`globals.css`).
*   `public/`: Static assets (images, fonts, favicon).
*   `astro.config.mjs`: Astro configuration.
*   `tailwind.config.mjs`: Tailwind CSS configuration.
*   `tsconfig.json`: TypeScript configuration.

Refer to `docs/code-explanation.md` for a detailed guide.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:9002`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |
| `npm run typecheck` | Run type checking (`astro check` & `tsc`)    |

## Customization

*   **Theme:** Modify CSS variables in `src/styles/globals.css`.
*   **Content:** Edit data objects within React components in `src/components/page-content/`.
*   **Navigation:** Update `navItems` array in `src/components/layout/navbar.tsx`.
*   **Pages:** Add/edit `.astro` files in `src/pages/`.

Happy coding!
