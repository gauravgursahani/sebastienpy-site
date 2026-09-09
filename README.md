# sebastienpy.com

One-page bilingual (FR / EN) site for Sébastien Py, wedding photographer in Lille.

Live: https://sebastienpy.com

## How it works

The entire site is a single self-contained file: **`index.html`**.
No build step, no framework, no dependencies. Fonts and Sébastien's portrait are
embedded directly in the file, so the page contacts no third party in order to
render — which is why it needs no cookie banner.

Pushing to `main` deploys automatically to Netlify.

## Editing

Everything an editor normally needs is near the bottom of `index.html`,
in four clearly-commented blocks:

| Block | What it holds |
|---|---|
| `CONFIG` | Instagram, WhatsApp number, phone, Google reviews link |
| `PHOTOS` | The 24 portfolio images, each with a category and a 2:3 / 3:2 ratio |
| `I18N`   | Every string on the page, in French and English |
| Legal    | `lg.legalBody` / `lg.privacyBody` — mentions légales and privacy |

French is always the default language. English is reachable via the FR|EN
toggle or by appending `?lang=en` to any URL.

## Contact form

Handled by **Netlify Forms**. The form is `name="contact"` with
`data-netlify="true"`; Netlify detects it by parsing the HTML at deploy time.

Two settings live in the Netlify dashboard, not in this repo:

- **Forms → Enable form detection** (already on — must stay on)
- **Forms → Notifications → Email notification** → the address that receives enquiries

Submissions are stored in Netlify regardless, so nothing is lost if the email
notification is ever misconfigured.

## Still to do

- [ ] **Mentions légales** — search `À COMPLÉTER` in `index.html`: business
      status, SIRET, and the host's name/address/phone. Legally required in
      France for a professional site (LCEN art. 6-III).
- [ ] **Portfolio images** are still served from the old Wix CDN
      (`static.wixstatic.com`). They work today, but they will disappear the
      day the Wix subscription lapses. Re-export at 2000px+ and commit them
      into an `images/` folder, then update the `PHOTOS` array.
