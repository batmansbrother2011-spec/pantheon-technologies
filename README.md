# Pantheon Technologies — MangoDock Site

Static website for Pantheon Technologies showcasing the MangoDock product line.

## Hosting on GitHub Pages

1. Create a new GitHub repository (e.g. `pantheon-technologies.github.io` or any repo name)
2. Upload all files from this folder into the repository root
3. Go to **Settings → Pages**
4. Under **Source**, select `Deploy from a branch`
5. Choose `main` branch, `/ (root)` folder, and click **Save**
6. Your site will be live at `https://<your-username>.github.io/<repo-name>/`

## File Structure

```
index.html        ← main page
css/style.css     ← all styles
js/main.js        ← tabs, scroll reveal, mobile nav
_config.yml       ← GitHub Pages config
README.md         ← this file
```

## Customization

- **Colors**: Edit CSS variables at the top of `css/style.css`
- **Pricing**: Update prices in the `#pricing` section of `index.html`
- **Specs**: Update specs in the `#specs` section of `index.html`
- **Fonts**: Loaded from Google Fonts (Syne + DM Sans)

## No dependencies

Pure HTML, CSS, and vanilla JavaScript. No build step, no npm, no frameworks.
