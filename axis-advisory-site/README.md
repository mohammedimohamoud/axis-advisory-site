# Axis Advisory — Static Bilingual Website

A complete static bilingual (English / Arabic) website for Axis Advisory, an ESG advisory company based in Riyadh, Saudi Arabia. Built with pure HTML, CSS, and vanilla JavaScript — no frameworks, no build tools, no backend required.

---

## Folder Structure

```
axis-advisory-site/
├── index.html       # Main HTML file — all sections and content structure
├── styles.css       # All styling, responsive layout, RTL overrides, animations
├── script.js        # Language toggle, rotating hero words, mobile nav, FAQ, scroll
├── images/          # Placeholder folder — CDN images are currently referenced directly
└── README.md        # This file
```

---

## How the Language Toggle Works

The site stores all text content in a JavaScript object called `translations` inside `script.js`. Every translatable element in the HTML has a `data-i18n` attribute with a key name:

```html
<h2 data-i18n="problem_headline">ESG Pressure Is Now Reaching Saudi SMEs</h2>
```

When the user clicks the language toggle button, the `applyLanguage()` function:

1. Updates `html[lang]` between `en` and `ar`
2. Updates `html[dir]` between `ltr` and `rtl`
3. Loops through every `[data-i18n]` element and replaces its text
4. Updates all `placeholder` attributes via `[data-i18n-placeholder]`
5. Re-populates the hero's rotating words in the selected language
6. Saves the preference to `localStorage` so it persists on reload

CSS handles RTL layout automatically using `[dir="rtl"]` selectors — margins, borders, text alignment, and button placement all flip correctly for Arabic.

---

## How to Edit Text Content

### Editing English text
Open `script.js` and find the `en:` block inside the `translations` object. Locate the key you want to edit and change its value:

```js
// Before
hero_sub: 'Saudi buyers ... not theory.',

// After
hero_sub: 'Your updated English text here.',
```

### Editing Arabic text
Find the `ar:` block in the same `translations` object and update the matching key.

### Adding new translatable elements
1. Add the element to `index.html` with a `data-i18n` attribute:
   ```html
   <p data-i18n="my_new_key">Default English text</p>
   ```
2. Add the key to both `en` and `ar` in `script.js`:
   ```js
   en: { my_new_key: 'English text', ... }
   ar: { my_new_key: 'النص العربي', ... }
   ```

### Editing the hero rotating words
Find the `rotatingWords` object near the top of `script.js`:
```js
const rotatingWords = {
  en: ['Contractors', 'Suppliers', 'Manufacturers', 'Logistics Firms', 'Saudi SMEs'],
  ar: ['المقاولين',   'الموردين',  'المصنِّعين',   'شركات اللوجستيات', 'المنشآت السعودية'],
};
```
Add or change words in both arrays. If you change the count, also update the number of `.rotating-word` spans in `index.html`.

---

## Connecting the Contact Form

The form is currently static markup. To enable submissions, choose one of the following:

### Option 1: Formspree (recommended — free tier available)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and copy your form ID
3. In `index.html`, find the `<form>` tag and add:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: Netlify Forms (zero config if hosting on Netlify)
Add the `netlify` attribute to the form tag:
```html
<form name="contact" netlify>
```
Netlify automatically detects and handles it.

### Option 3: Getform.io or Basin
Similar to Formspree — create an account, get your endpoint URL, and add it as the `action` attribute.

---

## Deployment

### Cloudflare Pages
1. Push this folder to a GitHub repository
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Click **Create a project** → Connect to GitHub
4. Select your repository
5. Build settings: leave blank (no build command needed for static sites)
6. Output directory: `/` (root)
7. Click **Save and Deploy**

### Netlify
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **Add new site** → **Deploy manually**
3. Drag and drop the `axis-advisory-site/` folder onto the deploy area
4. Done — you get an instant URL

Or use GitHub integration:
1. Push to GitHub → Connect repo in Netlify → auto-deploys on push

### GitHub Pages
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch**
4. Branch: `main`, Folder: `/ (root)`
5. Save — your site will be live at `https://yourusername.github.io/repo-name`

---

## Connecting a GoDaddy Domain

### If hosting on Cloudflare Pages:
1. In GoDaddy DNS settings, add a `CNAME` record:
   - Name: `www`
   - Value: `your-project.pages.dev`
2. For the root domain (`axisadvisoryltd.com`), add an `A` record pointing to Cloudflare's IP (or use Cloudflare's DNS nameservers for best results)
3. In Cloudflare Pages → Custom Domains → add your domain

### If hosting on Netlify:
1. In Netlify → Domain settings → Add custom domain
2. Netlify provides DNS instructions — follow them in GoDaddy's DNS settings
3. SSL is provisioned automatically

### If hosting on GitHub Pages:
1. In your GitHub repo → Settings → Pages → Custom domain → enter your domain
2. In GoDaddy DNS, add a `CNAME` record:
   - Name: `www`
   - Value: `yourusername.github.io`
3. For apex domain, add four `A` records pointing to GitHub Pages IPs (see GitHub docs)

---

## Local Development

No build tools needed. Open directly in a browser:

```bash
# macOS / Linux
open axis-advisory-site/index.html

# Windows
start axis-advisory-site/index.html
```

Or use VS Code Live Server extension for auto-refresh during editing.

---

## Technical Notes

- **Fonts:** Google Fonts — Cairo (covers both Latin and Arabic scripts)
- **Images:** Currently loaded from the existing CDN — replace with local images in `/images/` folder for self-hosting
- **RTL Support:** All layout flipping is handled by CSS `[dir="rtl"]` selectors — no JavaScript required for layout
- **Animations:** Scroll-triggered fade-up via `IntersectionObserver` with CSS transition fallback
- **Performance:** No external JavaScript dependencies — single script file, deferred by placement before `</body>`
- **Accessibility:** Semantic HTML, ARIA labels on interactive elements, keyboard-navigable accordion and nav

---

## Contact

**Axis Advisory**
Riyadh, Saudi Arabia
esg@axisadvisoryltd.com
+966 55 352 2940
axisadvisoryltd.com
