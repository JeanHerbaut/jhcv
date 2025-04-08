1. Project Overview

    Name: Jean Dupont CV Website (single-page)

    Purpose: Create a modern, animated personal CV site showcasing Jean’s background, skills, experiences, and daily/weekly work stats.

    Framework: React (using Vite for faster builds).

    Deployment: Deployed to GitHub Pages (branch gh-pages).

2. Target Audience & Goals

    Target Audience:

        Potential employers, recruiters, or collaborators wanting a quick, visual overview of Jean’s professional profile.

    Goals:

        Present Jean’s About section (bio, skills, languages).

        List professional experiences in a clear and concise manner (job title, company, dates, responsibilities).

        Display work & commute stats (on-site vs. telework, train vs. bike, hours vs. expected, etc.) using some type of chart or placeholder chart for future data.

        Provide a contact area with relevant details (email, possibly LinkedIn).

        Include an animated background shape for a modern visual flair.

3. Technical Requirements
3.1 Architecture

    React structure with the following minimal files under src/:

        main.jsx: Renders the root <App /> component into the DOM.

        App.jsx: Main container with top-level layout (hero, main content, footer).

        Components in a components/ folder:

            About.jsx: Renders the “About” section.

            Experience.jsx: Renders a list or cards of experiences.

            Stats.jsx: Renders the “My Work & Commute Stats” section.

            Optionally, separate out any repeated UI patterns into their own components (e.g. card components, chart wrappers).

        styles.css: Global or partial CSS for styling (or use a more advanced approach like CSS modules, styled-components, or Tailwind, but that’s optional for now).

3.2 Animation & Visual Style

    Animated background shape:

        A blob/wave shape that gently moves using CSS keyframes (scale, translate, etc.).

        Placed behind the hero section (or global) with a lower z-index so text remains visible.

    Color Palette (example):

        Main background: #FDFCF9 (light neutral).

        Accent colors: #00A8A8 (teal) and #F08A5D (peachy coral).

        Text color: #555 or dark gray #333.

    Hero Section:

        Contains Name (<h1>), Title (<h2>), short tagline or intro <p>.

    About Section:

        Short bio text, skills, languages, photo/avatar placeholder.

    Experience Section:

        2 or more “experience cards” or a list with job details.

    Stats Section:

        Placeholder charts (or real Chart.js usage).

        Summaries like “On-site 22% / Telework 78%” or “Train 50% / Bike 30% / Other 20%”.

    Footer:

        Contact info (email, “Ready to connect?” text).

        Possibly social links.

3.3 Data & State Management

    For now, no advanced state management is required. Data can be hard-coded or in a small JavaScript array (e.g., experiences = [...]) that Experience.jsx maps over.

    If using actual chart data, we could store it in a JSON or a small data object in Stats.jsx.

    Minimal or no backend. This is mostly a static site.

3.4 Deployment to GitHub Pages

    Use the package gh-pages for deployment:

        "homepage": "https://<username>.github.io/<repoName>" in package.json.

        "scripts": {"deploy": "vite build && gh-pages -d dist"} for one-step build+deploy.

        Must enable Pages in the repo settings to publish from the gh-pages branch.

4. Step-by-Step Implementation Outline

    Initialize Project:

        npm create vite@latest → choose React.

        cd projectName && npm install && npm run dev.

    Set up GitHub Repo:

        Create empty repo on GitHub (e.g., cv-website).

        git init locally, commit, push to main branch.

    Project Structure:

        /src/main.jsx → root rendering of <App/>.

        /src/App.jsx → main container (header, main, footer).

        /src/components/About.jsx → “About” section.

        /src/components/Experience.jsx → “Experience” section.

        /src/components/Stats.jsx → “Stats” section.

        /src/styles.css → global/animated shape styles.

    Implement UI:

        Hero section (Name, Title, Tagline).

        Animated shape (absolute positioning + keyframe animation).

        About / Experience / Stats sections (component placeholders).

        Footer with contact info.

    Customize:

        Add real data or placeholders for experiences, stats, etc.

        Optionally integrate a chart library (react-chartjs-2 or recharts).

        Tweak CSS transitions, add responsiveness.

    Deploy:

        npm install --save-dev gh-pages.

        Set "homepage" in package.json.

        npm run deploy.

        Enable GitHub Pages in the repo’s Settings → “Pages” → select gh-pages.

5. Future Extensions

    Add Chart.js for interactive or dynamic charts.

    Multi-language support if needed (i18n).

    Backend integration if you want to store/modify data in real-time.

    Animations for elements appearing on scroll, or incremental reveals using libraries like Framer Motion.

Final Notes

    The site is single-page and primarily static.

    The focus is on clean design, modular React components, and a lightweight animated background.

    You’ll use GitHub Pages for hosting.

    If using GitHub Actions for automated deployment, you can add a .yml workflow later.