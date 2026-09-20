# Dhanya A M — AI & Data Science Portfolio

A single-page, dark-themed portfolio site. Pure HTML/CSS/JS — no build step, no dependencies.

## Folder structure

```
portfolio/
├── index.html                 ← all page markup + navigation
├── css/
│   └── style.css              ← all styling (colors, layout, animations, responsive rules)
├── js/
│   └── script.js              ← nav active-link scroll-spy + scroll-reveal animation
├── assets/
│   ├── resume/                ← put Dhanya_AM_Resume.pdf here
│   ├── img/                   ← profile photo, contact illustration
│   ├── projects/               ← project screenshots
│   └── certificates/          ← certificate / event images
└── README.md
```

## How to run it

No build tools needed. Just open `index.html` in a browser, or serve the
folder locally:

```bash
cd portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Navigation

The top nav (`Home / About / Skills / Projects / Experience / Achievements /
Contact`) uses plain in-page anchor links (`#home`, `#about`, …) matched to
`<section id="...">` elements lower in `index.html`. `js/script.js`:

- highlights the correct nav link as you scroll, using an `IntersectionObserver`
- instantly highlights a link the moment you click it
- fades content into view as you scroll down (`.reveal` → `.reveal.in`)

If you rename a section's `id`, update the matching `href="#..."` in the
`.nav-links` block at the top of `index.html` too — they must match exactly.

## What's already filled in

- **Resume**: `assets/resume/Dhanya_AM_Resume.pdf` — linked from the nav bar and hero "View Resume" buttons.
- **Profile photo**: `assets/img/profile.jpg` — shown in the hero section.
- **GitHub**: profile link (`github.com/dhanyamanokaran06`) in the footer and contact
  section, plus each project card links to its own real repo:
  - Kubernetes Auto-Scaling Simulation → `k8s-autoscaling-simulation`
  - AI-Powered Road Accident Analysis System → `AI-Powered-Road-Accident-Analysis-System`
  - GAN-Based Face Anti-Spoofing System → `Ganface-antispoofing`
- **LinkedIn**: `linkedin.com/in/dhanya-manokaran-8612b6293` in the footer and contact section.
- **Certificates**: 3 of the 4 Certifications-section certificates, plus the
  Gen AI Exchange Hackathon certificate in Achievements, are already wired
  up as clickable thumbnails (click one to open the full image in a new tab).
- **Contact details**: email, phone, and location already match the resume.
- **Project cards**: no screenshots — each card leads straight to its GitHub
  repo instead, per your request.

## One thing still optional

The **"GenAI & Data Analytics Job Simulation" (Tata · Forage)** certificate
in the Certifications section has no image yet. There's a comment right
above its placeholder `<div class="ph-img">[ CERTIFICATE ]</div>` in
`index.html` showing exactly how to wire it up once you have the file —
add the image to `assets/certificates/` and swap the placeholder the same
way the other three certificates are done.

## Deploying

This is a static site — it works as-is on:
- **GitHub Pages**: push the `portfolio/` folder contents to a repo, enable
  Pages on the `main` branch.
- **Netlify / Vercel**: drag-and-drop the folder, or connect the repo.
- Any static host / shared hosting: just upload the files, `index.html` is
  the entry point.

## Customizing colors

All theme colors are CSS variables at the top of `css/style.css`:

```css
:root{
  --bg:#070A13;      /* page background */
  --surface:#0E1424;
  --txt:#E9EDF7;     /* main text color */
  --muted:#8B94AA;   /* secondary text */
  --violet:#7C5CFF;  /* accent 1 */
  --blue:#2FA8FF;    /* accent 2 */
  --grad:linear-gradient(135deg,#7C5CFF 0%,#2FA8FF 100%);
}
```

Change these to re-theme the whole site.
