# Zuman Intelligence website

Company website for zumanintelligence.com. Plain HTML and CSS, no build step.

## Pages
- `index.html`: Home
- `products.html`: Products (Kural plus upcoming agents)
- `about.html`: About, story and principles
- `contact.html`: Contact form (Netlify Forms, emails siva@zumanintelligence.com)
- `thanks.html`: Shown after the form is submitted

## Workflow
- `main` = live site (production)
- `staging` = test site
- All changes go on a `feature/...` branch, then a pull request into `staging`. After testing, `staging` is merged into `main` with the owner's approval.

## Brand
- Black background, amber-gold accent (`#e8a93a`)
- Logo goes in `assets/` (replace the "Z" placeholder in each page header)
