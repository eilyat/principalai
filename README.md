# Principal Economics - Website

Very much work in progress
    - Currently building in functionality

## Details

This is the website for Principal Economics.
New content should be added to ``src/content/`` to their corresponding folders. 
Files inserted here should be in markdown (.md) or markdown extended (.mdx) formats and include relevant front matter.<sup>1,2</sup>

<sup>1</sup> Authors must must the spelling of the internal database for automatic linking and searching of related pages. 
<sup>2</sup> In the case of publications title, author, pubDate and must be provided. Link to PDF must be a direct link.

The guide to markdown can be found here: https://www.markdownguide.org/basic-syntax/
For a very brief rundown:

/# Heading 1
/## Heading 2
/### Heading 3

\ - List
\ 1. Numbered list 
\*\*bold text\*\*
\*Italics\*

Visit our \[website.\]\(https://www.principaleconomics.com\)

\!\[Image description for accessibility \]\(\\relativelinktoimage.png "Image title"\)

---

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |

#### Built using
    - Astro
    - Alpine.js
    - TailwindCSS

---

---

# SEO
SEO <meta> tags are automatically generated based on front matter variables.
All generated pages include title with "| Principal Economics" appended to the meta (example shown below).
Generated pages use front matter details to populate relevant metadata. 
Publications include SEO meta specific for google scholar. 

- title | Principal Economics

### Publication
- author(s)
- Publication date
- Link to PDF*
<sub> Must link to the PDF file </sub>

### Articles
- author
- publication
- Link to PDF*
<sub> Must link to the PDF file </sub>

### Knowledge Hub
// To do

---
# Layouts & Components
Pages are built using a combination of nested layouts and components. 
BaseLayout.astro includes the Nav and Footer and is recycled for all pages. 

| ``src/components/ui/BaseLayout.astro`` | Base layout for website |
| ``src/components/ui/publications.astro`` | Base layout for publications |

## Components
### Nav
| ``src/components/ui/NavBar.astro`` | Nav bar |
// To do
| ``src/components/ui/SearchWidget.astro`` | Search across website |
#### Nav Cluster
| ``src/components/ui/IndustriesMenu.astro`` | Partial for Industies Nav Menu |
| ``src/components/ui/NavCluster.astro`` | Logic for dropdowns |
// To do
| ``src/components/ui/CapabilitiesMenu.astro`` | Partial for Capabilities Nav Menu |
| ``src/components/ui/AboutUsMenu.astro`` | Partial for About us Nav Menu |
| ``src/components/ui/ContactUsMenu.astro`` | Partial for Contact us Nav Menu |

### Footer
| ``src/components/ui/Footer.astro`` | Footer for website |

### Other
| ``src/components/ui/RightArrow.astro`` | SVG for right arrow |
| ``src/components/ui/ShortHeader.astro`` | Smaller hero banner all pages excl frontpage |
| ``src/components/ui/IndustryCards.astro`` | Cards for Industries page |
| ``src/components/ui/Breadcrumbs.astro`` | Breadcrumbs with default settings |

---

# Pages 
## Front page
| ``src/components/ui/banner.astro`` | Hero page items - Splash / Welcome text |
| ``src/components/ui/banner_strip.astro`` | Strip boxes under hero splash |
| ``src/components/ui/banner_boxes.astro`` | Strip boxes components |

## Sectors
| ``src/pages/industries/index.astro`` | Main page for industries |
// To do
| ``src/pages/industries/energy.astro`` | Test page for sectors |

## Generated Pages
| ``src/pages/publications/[...slug].astro`` | Logic for generating publication pages |
// To do
| ``src/pages/Capabilities/[...slug].astro`` | Logic for generating sector pages |
| ``src/pages/Industries/[...slug].astro`` | Logic for generating sector pages |

# Collections
| ``src/content/config.ts`` | Logic for document based database |

--- 

To Do:
    - Partials for mega menu items
    - Page slugs and partials
    - Document library