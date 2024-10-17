# Principal Economics - Website

Very much work in progress
    - Currently building in functionality

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Built using
    - Astro
    - Alpine.js

## Tooling

### Front page

The front page is made up of: 

| Components | Description |
| ``src/components/ui/NavBar.astro`` | Dropdown and button templates |
| ``src/components/ui/banner.astro`` | Hero page items - Splash / Welcome text |
| ``src/components/ui/banner_strip.astro`` | Strip boxes under hero splash |
| ``src/components/ui/banner_boxes.astro`` | Strip boxes components |

To Do:
    - Partials for mega menu items
    - Drop down components
    - Page slugs and partials
    - Reactive tab box
    - Document library