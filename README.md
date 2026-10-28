# Jeremiah Anku Coblah · Portfolio

Personal portfolio built with React (Create React App), Tailwind CSS and React Router.

## Getting started

```bash
npm install
npm start       # dev server on http://localhost:3000
npm run build   # production build in /build
```

## Structure

Components follow [Atomic Design](https://atomicdesign.bradfrost.com/):

```
src/
├── components/
│   ├── atoms/       smallest pieces: Tag, ButtonLink, IconLink, ToolTile, ...
│   ├── molecules/   small groups of atoms: ListRow, ProjectItem, SocialLinks, ...
│   ├── organisms/   page sections: Sidebar, ExperienceSection, ToolsSection, ...
│   ├── templates/   page layouts: SplitLayout, CaseStudyLayout
│   └── pages/       routes: HomePage, SikaTrackPage
├── data/            all site content (profile, experience, projects, tools, ...)
└── hooks/           useScrollSpy
```

Content lives in `src/data`, so most updates never touch a component:

- `profile.js`: name, contact details, social links and CV files
- `experiences.js`, `projects.js`, `education.js`: the home page lists
- `tools.js`: technology logos (from `react-icons`) and brand colours
- `caseStudies/`: long-form project pages

Design tokens (colours, fonts) are defined in `tailwind.config.js`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/projects/sikatrack` | SikaTrack case study |

The site uses client-side routing, so the host must serve `index.html` for unknown paths.
