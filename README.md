# TKN Studios — React Portfolio

Cinematic photography & film portfolio for **Adesola Adedayo** / TKN Studios.
A React + Vite port of the HTML design prototype, featuring an interactive **Three.js floating gallery wall** plus Photography, Films, Studio, Services and Contact pages.

---

## Quick start

```bash
cd tkn-studios-react
npm install
npm run dev      # http://localhost:5173
```

Build for production:

```bash
npm run build
npm run preview
```

---

## Tech

- **React 18** + **Vite 5**
- **three.js** for the 3D wall (`src/components/Wall.jsx`)
- Plain CSS with design tokens in `src/styles.css` (no UI framework)
- Fonts loaded from Google Fonts in `index.html` (Cormorant Garamond, Archivo, Space Mono)

## Structure

```
tkn-studios-react/
├─ index.html              # font links + root
├─ public/
│  ├─ adesola.png          # Creative Director portrait
│  └─ photos/              # p01…p17 studio images (swap in real/full-res here)
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx              # view routing + overlay state
│  ├─ styles.css           # all styling + tokens (:root vars)
│  ├─ data.js              # PHOTOS, FILMS, SERVICES, STEPS, NAV, CATS
│  └─ components/
│     ├─ Nav.jsx
│     ├─ Wall.jsx          # Three.js floating gallery (the landing)
│     ├─ Galleries.jsx     # masonry photo grid + filter + lightbox
│     ├─ Films.jsx         # cinema hero + film grid
│     ├─ Studio.jsx        # Adesola feature + philosophy + process
│     ├─ Services.jsx
│     ├─ Contact.jsx       # enquiry form (demo — not wired to email)
│     └─ Overlays.jsx      # DetailPanel, Lightbox, ReelModal
```

## How navigation works

`App.jsx` holds a single `view` string (`wall | galleries | films | studio | services | contact`).
The **Wall** stays mounted at all times (so the WebGL context and camera position persist) and is
hidden with `display:none` when another view is active; its animation loop pauses when inactive.
All other views mount/unmount on demand. Swap this for a real router (e.g. `react-router`) if you
want deep-linkable URLs.

## Editing content

- **Text / metadata:** `src/data.js` — photo titles, categories, moods, film list, services, bio stats.
- **Bio copy:** `src/components/Studio.jsx` (marked `[Edit this bio…]`).
- **Colors / type:** CSS variables at the top of `src/styles.css` (`:root`).
- **Links:** Instagram + Saatchi Art URLs live in `Studio.jsx` and `Contact.jsx`.

## Swapping in real assets

Images are optimised web copies (~1050px). To use full-resolution originals:

1. Drop files into `public/photos/` (keep names `p01.jpg`…`p17.jpg`, or update paths in `data.js`).
2. Each photo object in `data.js` sets `src`, `cat`, `title`, `mood`, `location`, `client`, `color`
   (`color` is the placeholder tint shown on the 3D tile before its texture loads).
3. For the **wall**, very large textures cost GPU memory — keep wall images ≤ ~1200px on the long edge.
   The 2D gallery can use larger files (they lazy-load).

## To finish for production

- **Contact form** is a demo (`Contact.jsx`): wire `submit` to an email service (Formspree, Resend, a serverless fn).
- **Films** use photo posters + a placeholder reel modal (`Overlays.jsx → ReelModal`). Drop in Vimeo/YouTube/MP4 embeds.
- Consider `react-router` for real URLs and a sitemap, and lazy-loading (`React.lazy`) per view.
- Add `<meta>` / Open Graph tags and a favicon.

## Credit

Photography & films © Adesola Adedayo / TKN Studios ([@thekingnathystudios](https://www.instagram.com/thekingnathystudios/)).
All watermarked images belong to the studio.
