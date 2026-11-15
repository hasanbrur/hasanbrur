# Md. Hasan Tarek — Academic Website

A fast, static, multi-page academic website. No build step, no framework — just HTML, CSS and a little JavaScript. Every push to GitHub updates the live site.

## How it's organised

```
index.html         Home
about.html         Bio + Education + Experience + Skills
research.html      Research interests + Projects + Awards
publications.html  Full publications list (filterable by type)
gallery.html       Events + Travel photos
blog.html          Blog posts
cv.html            Auto-generated printable CV
contact.html       Contact details + message form

css/style.css      ALL styling (change colours/fonts here, once)
js/data.js         ALL your content  ← edit this to update the site
js/site.js         The engine: menu, header, footer, rendering (rarely edit)
assets/            Your images (photo, gallery pictures)
```

## To update your site — edit ONE file

Open **`js/data.js`** and edit the text. For example, to add a publication, copy a block inside `PUBLICATIONS` and change the fields:

```js
{ title: "My new paper",
  authors: "M. H. Tarek, A. Rahman",
  venue: "IEEE Access",
  year: 2026, type: "journal", featured: true,
  doi: "https://doi.org/10.xxxx/xxxx", pdf: "", code: "" },
```

The Publications page **and** the CV update automatically. The same pattern works for `AWARDS`, `PROJECTS`, `NEWS`, `GALLERY`, `BLOG`, `EDUCATION`, and `EXPERIENCE`.

- **Change the menu:** edit the `NAV` array at the top of `js/site.js`.
- **Change colours:** edit the `:root` variables at the top of `css/style.css`.
- **Add a photo to the gallery:** drop the image in `assets/`, then set its `img` in the matching `GALLERY` entry, e.g. `img: "assets/conference-2025.jpg"`.

## Host it free on GitHub Pages

1. Create a free account at **github.com**.
2. Make a new **public** repository named exactly **`yourusername.github.io`**.
3. Upload **everything inside this folder** (not the folder itself) — `index.html`, the `css`, `js`, and `assets` folders, etc. Use *Add file → Upload files*, drag them in, and **Commit**.
4. Your site is live in ~1 minute at **`https://yourusername.github.io`**.
5. To update later: edit `js/data.js` in GitHub (pencil icon) → **Commit**. The site refreshes automatically.

*(Using Git locally? `git clone`, copy these files in, `git add . && git commit -m "site" && git push`.)*

**Custom domain (optional):** buy a domain, then in the repo go to *Settings → Pages → Custom domain*.

## Notes
- The CV "Download as PDF" button uses your browser's Print → *Save as PDF*.
- The contact form opens the visitor's email app. To receive messages directly in your inbox, connect a free form service (Formspree / Web3Forms).
