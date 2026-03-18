# Illinois MicroTech Website

 website for Illinois MicroTech, an RSO at UIUC focused on MEMS, fabrication and microtechnology.

## For Club Officers: How to Update the Website

This readme explains how non-technical club members can update common content without coding knowledge.

### Adding a News/evenst

1. Navigate to `/content/news/` folder
2. Create a new `.md` file with a descriptive name (e.g., `spring-2027-kickoff.md`)
3. Copy this template at the top of your file:

```markdown
---
title: "wtv ur title is lol"
date: "2420-67-69"
tags: ["Social", "Workshop"]
thumbnail: "/images/eventname.jpg"
excerpt: "summarize ur post."
---
(please stick to labelling uploaded images properly for conformity's sake.)

# Your Post Title

Write your content here using Markdown formatting.

## Subheading

- Bullet point 1
- Bullet point 2

**Bold text** and *italic text* work too!
```

4. Save the file and push to GitHub - the post will automatically appear on the website

**Available tags:** Social, Fundraiser, Tour, Workshop, Panel

### Updating the Executive Board

1. Open `/content/data/leadership.json`
2. Find the appropriate semester or add a new one at the top of the `execBoards` array
3. Update member information:

```json
{
  "semester": "Fall 2026",
  "members": [
    { "name": "Veer Singh", "role": "Social", "image": "/images/exec-placeholder.png" },
    { "name": "Vishnu", "role": "Fruitbasket", "image": "/images/exec-placeholder.png" },
    { "name": "Addy", "role": "Prezzie", "image": "/images/exec-placeholder.png" },
    { "name": "Patrick", "role": "Social Media", "image": "/images/exec-placeholder.png" }
  ]
}
```

4. To add a real photo: 
   - Upload the image to `/public/images/` folder
   - Update the `image` path to match (e.g., `/images/wtvnameis.jpg`)

### Updating the HackerFab Team

1. Open `/content/data/leadership.json`
2. Find the `hackerfabTeam` section
3. Edit the arrays:
   - `currentMembers`: List of all current team members
   - `leads`: Project leads and managers
   - `foundingMembers`: Don't change (cuz its a historical record)

### Adding a New Milestone

1. Open `/content/data/milestones.yaml`
2. Add a new entry under either `general:` or `hackerfab:` section:

```yaml
  - date: "Fall 2027"
    title: " Title"
    description: "Brief description of whatever was achieved."
```

3. Add `current: true` to mark it as the current milestone (remove from the previous current one)

### Updating Project Information

1. Open `/content/data/projects.yaml`
2. To add a new EOH project, add to the `eoh.projects` list:

```yaml
    - year: 2027
      title: "Project Name"
      description: "Description of the project and what visitors experienced."
```

3. To update HackerFab progress, add a new semester entry to `hackerfab.progress`


### Tech Stack

- **Framework:** Next.js 16 (Static Site Generation)
- **Styling:** Tailwind CSS
- **Content:** Markdown files and JSON/YAML data files
- **Fonts:** Inter (body) + Space Grotesk (headings)
- **Hosting:** Vercel (for now until we figure out the uiuc domain)

### Project Structure

```
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects page
│   ├── membership/        # Leadership & membership page
│   ├── news/              # News listing and detail pages
│   ├── milestones/        # Timeline page
│   ├── promo/             # Promotional events page
│   └── portal/            # Contact forms page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── home/             # Home page sections
│   ├── navbar.tsx        # Site navigation
│   ├── footer.tsx        # Site footer
│   └── circuit-divider.tsx # Decorative elements
├── content/
│   ├── data/             # JSON/YAML data files
│   │   ├── leadership.json
│   │   ├── milestones.yaml
│   │   └── projects.yaml
│   └── news/             # Markdown blog posts
└── public/
    └── images/           # Static images
```


### Development Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm start
```


## Contact

For technical issues with the website, contact whoever is maintaining this when it's up.

---

