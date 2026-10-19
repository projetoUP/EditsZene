# ZENES® — Video Editor Portfolio

A responsive static website showcasing Zenes’ edits, directing commission requests to Instagram, and featuring digital editing resources on Payhip. The visual identity uses black, white, and neutral tones.

## Files

- `index.html` — page content and section structure.
- `styles.css` — visual identity, layout, and responsive styles.
- `script.js` — updates the footer year and reveals TikTok players when they are ready.
- `assets/favicon.svg` — browser tab icon.

## Featured edits with on-site playback

The two featured edits use TikTok’s official embedded player, with autoplay and looping requested. Browsers may block autoplay with sound; visitors can start playback using the player controls.

While the player loads, the site displays a black-and-white fallback cover. If the player fails or is blocked, the cover links directly to the original TikTok video. The featured edits are the videos supplied by the owner.

## Publish with GitHub Pages

1. Create a repository on GitHub.
2. Upload all files and the `assets` folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then save.
6. Open the address shown in the Pages section after deployment.

Do not upload only `index.html`: keep `styles.css`, `script.js`, and the `assets` folder alongside it so the layout, interactions, and icon load correctly.

## Customization

- **Name and copy:** edit the headings and paragraphs in `index.html`.
- **Colors:** edit the variables at the beginning of `styles.css`. The design uses black, white, and gray tones.
- **Instagram, TikTok, and Payhip:** links are configured on the buttons and cards in `index.html`.
- **Replace featured edits:** update the IDs in the `https://www.tiktok.com/player/v1/` URLs and the fallback links in the two featured-work cards.
- **Store resources:** the `CC Quality` and `Main Topaz` cards point to Zenes’ Payhip store. Update their names in the HTML if the products change.

## Notes

- The site does not require a server, login, database, or build step.
- TikTok videos and Google Fonts require an internet connection.
- Browsers may block autoplay with sound. Visitors can always start playback in the embedded player.
- No prices, testimonials, or client results have been invented for this portfolio.
