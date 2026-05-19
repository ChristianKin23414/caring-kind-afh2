# Deploy to GitHub Pages — Step-by-step (no command line)

You'll get a free live URL like:
`https://YOUR-USERNAME.github.io/caring-kind-afh2`

It takes about 5 minutes.

---

## 1. Create a GitHub account (skip if you have one)

1. Go to **https://github.com/signup**
2. Pick a username (this becomes part of your live URL — choose something clean).
3. Verify your email.

---

## 2. Create a new repository

1. Once signed in, click the **+** in the top-right → **New repository**.
2. **Repository name:** `caring-kind-afh2` (lowercase, no spaces).
3. **Description:** *Optional* — e.g. "Caring Kind Adult Family Home AFH 2 website".
4. Set it to **Public** (required for free GitHub Pages on a basic account).
5. **Do NOT** check "Add a README file" — your folder already has one.
6. Click **Create repository**.

---

## 3. Upload all the website files

You'll see a page that says *"Quick setup — if you've done this kind of thing before"*.

1. Click the link **"uploading an existing file"** (it's in the second paragraph), OR go to **Add file → Upload files**.
2. **Drag and drop** every file from this folder into the upload area:
   - `index.html`
   - `about.html`
   - `services.html`
   - `amenities.html`
   - `contact.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `DEPLOY.md` *(optional — fine to include)*
3. Scroll down. Under "Commit changes," leave the default message or type something like `Initial site upload`.
4. Click **Commit changes** (the big green button).

GitHub will upload everything. Wait until the page reloads and you see all your files listed.

---

## 4. Turn on GitHub Pages

1. In your repo, click **Settings** (gear icon, top-right of the repo nav).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment**:
   - **Source:** Select **Deploy from a branch**.
   - **Branch:** Select **main** (or `master` if that's what shows), and folder **/ (root)**.
4. Click **Save**.

GitHub will start building your site. The page will refresh and after about 30–90 seconds you'll see:

> **Your site is live at https://YOUR-USERNAME.github.io/caring-kind-afh2/**

Click that link — your site is live!

---

## 5. Make changes later

Two easy ways:

**A. Edit one file at a time (in the browser)**
1. Click any file (e.g., `index.html`) in your repo.
2. Click the pencil icon (✏️) at the top-right of the file view.
3. Make changes, scroll down, and click **Commit changes**.
4. Wait ~30 seconds — your live site updates automatically.

**B. Replace files in bulk**
1. Go to **Add file → Upload files**.
2. Drag in the updated files (use the same filenames). They'll overwrite the old ones.
3. Commit. Your site refreshes within a minute.

---

## Tips

- **Custom domain** (like `caringkindafh2.com`): in **Settings → Pages**, scroll to "Custom domain", add your domain, and follow GitHub's DNS instructions. You'll also need to set up the domain with a registrar (e.g., Namecheap, Google Domains).
- **Caching:** if your changes don't show, hard-refresh: **Cmd+Shift+R** (Mac) or **Ctrl+Shift+R** (Windows).
- **Privacy of code:** the repo is public — meaning your HTML/CSS is viewable. That's normal for a website. Don't put secrets in the files.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Site URL gives 404 | Wait 2 minutes after enabling Pages; refresh. Make sure `index.html` is at the repo root, not in a subfolder. |
| Styles look broken | Check that `styles.css` and `script.js` are in the same folder as the HTML files (the repo root). |
| Changes not appearing | Hard-refresh (Cmd/Ctrl+Shift+R). GitHub Pages has a small cache delay. |
| "Pages" option missing in Settings | Repo must be Public, or you need GitHub Pro for private-repo Pages. |
