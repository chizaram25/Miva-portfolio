# Chizaram Obi — Personal Portfolio

A responsive personal portfolio showcasing my journey as a Software Engineering student at Miva Open University, my projects, and the skills I am developing.

Built with HTML, CSS, and vanilla JavaScript. No build step or package installation is required.

## Pages and features

- **Home:** introduction, an animated ID badge on desktop, journey highlights, and a resume section with a PDF preview modal. Mobile uses a simple portrait layout.
- **About:** background, academic journey, skills, interests, and an introduction video.
- **Projects:** featured work, including HOOK, AYOMAMA, and UniTrack.
- **Academic planner:** create and delete tasks, set or change optional deadlines, and track progress through Active, In progress, Done, Review, and Completed statuses.
- **Contact:** a contact form connected to Formspree and frequently asked questions.
- **Themes:** light and dark modes with a saved preference.
- **Accessibility:** labeled controls, keyboard focus styles, responsive navigation, and reduced-motion support for animations.

Planner tasks and theme preferences are saved in the current browser using local storage. Tasks are not synced between browsers or devices.

## Run locally

Clone the repository:

```sh
git clone https://github.com/chizaram25/Miva-portfolio.git
cd Miva-portfolio
```

Open `index.html` in a browser, or serve the folder with a local web server. For example, if Python is installed:

```sh
python -m http.server 8000
```

Visit [localhost:8000](http://localhost:8000). Use the same local address when returning to the planner to access previously saved tasks.

An internet connection is needed for contact form submissions and externally hosted skill icons.

## Project structure

```text
Miva-portfolio/
├── index.html       # Home and resume section
├── about.html       # Background, skills, and introduction
├── projects.html    # Featured projects
├── planner.html     # Academic task planner
├── contact.html     # Contact form and FAQs
├── style.css        # Shared styles and responsive layouts
├── script.js        # Themes, navigation, resume modal, planner, and forms
├── assets/          # Portrait, video, project images, and resume PDF
└── README.md
```

## Updating the portfolio

- Edit the relevant HTML page to update its content.
- Adjust `style.css` for layout, colors, and animations.
- Update `script.js` for interactive behavior.
- Replace `assets/chizara-obi-resume.pdf` to update the resume while keeping existing links working.
- Replace `assets/profile.jpg` to update the portrait.
- If reusing this project, change the Formspree endpoint in `contact.html` and update personal links and assets.

## Basic checks

```sh
node --check script.js
git diff --check
```

Before publishing, check the mobile layout, theme switch, resume preview, planner persistence, and contact form in a browser.

## Connect

- [GitHub](https://github.com/chizaram25)
- [LinkedIn](https://www.linkedin.com/in/chizaram-obi-)
