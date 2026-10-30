<img src="assets/hero.png" alt="Ship it live: a Git branch timeline, a browser developer tools panel, and a rocket launching a website" width="100%">

# Website development • Level 4 + AI

Learn the tools professionals use every day: Git, GitHub, browser DevTools, and publishing. Then put a real site on the internet.

Previous: [Level 1](https://github.com/yayacrypto/website-development-level-1), [Level 2](https://github.com/yayacrypto/website-development-level-2), [Level 3](https://github.com/yayacrypto/website-development-level-3).

## Who this is for

Learners who can build an interactive page (Level 3). You need a free GitHub account and a code editor. No paid AI subscription is needed.

## What you will build

A small launch page that lists your projects, written with JavaScript modules. You will use Git to track changes, fix three planted bugs with DevTools, and publish the site with GitHub Pages.

## Start here

JavaScript modules do not run from a file on disk, so use a local server in this folder:

1. Run `python3 -m http.server 8000`, or use your editor's live server.
2. Open `http://localhost:8000`.

```text
website-development-level-4/
├── README.md
├── LICENSE
├── .gitignore
├── index.html
├── 404.html
├── styles.css
├── js/
│   ├── main.js
│   ├── projects.js
│   └── format.js
├── practice/
│   ├── bugs.html
│   ├── bugs.js
│   ├── practice.css
│   └── SOLUTIONS.md
└── assets/
    └── hero.png
```

## What is new in Level 4

### 1. Git: a safe history for your project

Git records snapshots called commits. You can undo mistakes, compare versions, and try ideas on a branch without breaking the working copy.

```bash
git init
git add .
git commit -m "Add launch page"
git switch -c fix-heading
# edit files, then:
git add index.html
git commit -m "Fix heading text"
git switch main
git merge fix-heading
git log --oneline
```

Write commit messages that say what changed and why. Commit often, in small steps. Use `git status` and `git diff` before every commit. A `.gitignore` file lists files that must never be committed, such as `.env`.

### 2. GitHub: sharing and backup

GitHub hosts your repository online. Connect a local repository and push:

```bash
git remote add origin https://github.com/YOUR-NAME/YOUR-REPO.git
git push -u origin main
```

Check what you are about to publish. Anything committed to a public repository, including old commits, is public. If you commit a secret by mistake, treat it as leaked: revoke it at its provider, then remove it.

### 3. DevTools: look inside the browser

Open DevTools with F12 or Ctrl/Cmd + Shift + I.

- **Elements**: inspect HTML and CSS, and edit styles live.
- **Console**: read errors and test small pieces of JavaScript.
- **Network**: see every file the page requests, and which ones fail.
- **Device toolbar**: preview narrow screens.

Open `practice/bugs.html`. It has three planted bugs:

1. An image that does not load. Which panel shows the failed request?
2. A button that does nothing useful. What does the Console say?
3. A page that scrolls sideways on a phone. Which element is too wide?

Fix them yourself before opening `practice/SOLUTIONS.md`.

### 4. Debugging method

1. Reproduce the problem every time.
2. Read the exact error message.
3. Find the smallest piece of code involved.
4. Change one thing, then test again.
5. Commit when it works.

### 5. Publishing with GitHub Pages

GitHub Pages serves static files from a repository for free.

1. Push your site to a public GitHub repository.
2. In the repository, open Settings, then Pages.
3. Under "Build and deployment", choose "Deploy from a branch", pick `main` and the `/ (root)` folder, then save.
4. Wait a minute. Your site appears at `https://YOUR-NAME.github.io/YOUR-REPO/`.
5. Open the live URL and test it. Click every link. Check the console.

Project sites live under a repository path, so use relative links like `styles.css`, not `/styles.css`. In this repository, `404.html` uses the full project path for that reason. Change it to match your repository name.

Pages is public. Do not publish anything private. Other hosts exist, such as Netlify and Cloudflare Pages, and they work in a similar way.

## How to build with AI

### Step 1. Ask for Git help in small pieces

**Prompt to try**

> Explain the difference between git add, git commit, and git push. Use a simple example with a text file. Then give me a short exercise.

### Step 2. Never run commands you do not understand

**Prompt to try**

> I will paste a Git command. Explain what it does, what it changes, and whether it can delete work. Do not tell me to run it until I confirm I understand.

### Step 3. Use AI to read error messages

**Prompt to try**

> Here is the exact console error and the file it points to. Explain what it means in plain English. Give me two things to check before any code change.

### Step 4. Debug with evidence, not guesses

**Prompt to try**

> Expected: the image shows on the page. Actual: broken image. The Network tab shows a 404 for this URL: [paste]. My file path is [paste]. What are the most likely causes?

### Step 5. Review before you publish

**Prompt to try**

> Review this list of files I plan to publish. Point out anything that looks private, like keys, personal notes, or large files. Say what you cannot know from a file list.

## Safety habits

- Run `git status` before every commit. Do not use `git add .` blindly.
- Keep secrets out of the repository, and use `.gitignore` for local files.
- Do not paste real keys or tokens into AI prompts.
- Be careful with commands that rewrite history or delete files, such as `git reset --hard`, `git clean`, and force push. Ask what they do first.
- Deployed sites are public. Check them like a visitor would.

## Test checklist

- [ ] The site works on a local server.
- [ ] You made at least three commits with clear messages.
- [ ] You made a branch, changed something, and merged it.
- [ ] You fixed all three bugs on the practice page.
- [ ] The live site loads, and all images and links work.
- [ ] No secrets or private files are in the repository.

## Small challenges

1. Add your own project to `js/projects.js` and publish the change.
2. Add a page with a custom title and description for sharing.
3. Open a pull request from a branch to your own `main` and merge it.
4. Use the Lighthouse panel in Chrome DevTools to check accessibility and fix one issue.
5. Add a README to your own project with screenshots and setup steps.

## Ready for Level 5?

Move on when you can commit and publish without help, find a failed request in the Network tab, and explain why a secret must never go into front-end code. Next topics: a small server, protecting API keys, and calling an AI service safely.

## References

- [Git documentation](https://git-scm.com/doc)
- [GitHub Docs: Quickstart for repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories)
- [GitHub Docs: GitHub Pages](https://docs.github.com/en/pages)
- [Chrome DevTools documentation](https://developer.chrome.com/docs/devtools)
- [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
