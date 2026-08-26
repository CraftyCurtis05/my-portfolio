# Personal Portfolio Website

### Business Systems, Technology & Full-Stack Development Portfolio

This is my professional portfolio, built as a responsive Vue.js application to bring together my background across business operations, systems, technology, and software development.

I built the site to show more than individual coding projects. It connects my experience in operations, process improvement, client workflows, IT consulting, application development, and technical problem-solving in one place.

The portfolio is intended for recruiters, hiring managers, clients, and technical teams who want to understand both my technical capabilities and the business experience that shapes how I approach systems and solutions.

---

## Project Overview

This portfolio serves as a centralized professional platform for presenting:

- Professional experience
- Business and operational background
- Technical skills
- Education and training
- Full-stack development projects
- Systems and infrastructure experience
- Professional certifications
- Contact and professional networking information

The site is designed to communicate how my business experience and technical background work together rather than presenting them as separate parts of my experience.

My current professional focus includes roles such as:

- Business Systems Analyst
- Business Analyst
- Implementation Specialist
- Technical Consultant
- Systems & Application Support
- Technical Customer Success
- Operations Technology
- Full-Stack Development

---

## Key Features

### Professional Experience

- Presents experience across business operations, management, IT consulting, and software development
- Highlights workflow improvement, client coordination, technical implementation, and process-focused problem-solving
- Includes an interactive professional experience timeline

### Project Portfolio

- Showcases personal, client, and educational projects
- Displays project descriptions, technologies, status, and implementation details
- Includes visual project previews, screenshot carousels, and zoomable images
- Supports backend-focused projects without forcing unnecessary visual previews
- Provides direct access to available GitHub repositories

### Education & Training

- Presents Tech Elevator full-stack development training
- Includes college coursework and continued technical education
- Provides access to professional and technical certificates
- Includes an interactive education timeline

### Tools & Technologies

Presents technologies I have worked with across application development, systems work, and hands-on projects, including:

- Java
- Spring Boot
- JavaScript
- Vue.js
- PostgreSQL
- SQL
- Python
- Docker
- Git
- Bootstrap

### Responsive Design

- Desktop, tablet, and mobile layouts
- Responsive navigation
- Mobile offcanvas menu
- Adaptive project cards and carousels
- Responsive timelines
- Mobile-friendly forms and controls
- Touch-specific interaction behavior

### Accessibility & User Experience

- Semantic HTML
- Keyboard-accessible controls
- Visible focus states
- Accessible carousel and modal controls
- Alternative image text
- Reduced-motion support
- Responsive typography
- Clear visual hierarchy
- Light and dark themes

### Interactive Design

The portfolio includes subtle interactions intended to support the interface without distracting from the professional content.

These include:

- Light and dark theme switching
- Animated accent gradients
- Desktop cursor feedback
- Touch-specific interaction states
- Image hover and touch interactions
- Zoomable project and profile images
- Interactive carousel controls
- Back-to-top navigation
- Responsive navigation behavior

### Contact Form

The portfolio includes a custom contact form using a Vue.js frontend and PHP server-side endpoint.

The contact workflow includes:

- Required field validation
- Email validation
- Phone number formatting
- Server-side validation
- Input length limits
- Honeypot spam protection
- Success and error feedback
- Direct email delivery

---

## Application Architecture

### Frontend

- Vue.js
- Vue Router
- JavaScript
- HTML5
- CSS3
- Bootstrap 5

### Server-Side Functionality

- PHP contact endpoint

### Build & Development

- Vite
- npm
- Git
- GitHub

### Design

- Responsive Web Design
- Component-Based Architecture
- UI / UX Design
- Information Architecture
- Light / Dark Theme System

---

## Technical Implementation

The website is built as a Vue.js single-page application using reusable components and route-based views.

Key implementation details include:

- Built reusable Vue components for maintainability and consistency
- Organized the application into page-level views and feature-specific components
- Used Vue Router for client-side navigation
- Implemented route-based page titles and meta descriptions
- Created a persistent light and dark theme system
- Designed responsive layouts for desktop, tablet, and mobile devices
- Added touch-specific behavior where hover interactions are unavailable
- Created consistent project card patterns for visual and backend-focused projects
- Created shared modal, carousel, button, and project card styling
- Built reusable image zoom behavior for project and profile images
- Implemented interactive professional experience and education timelines
- Added keyboard-accessible controls and visible focus states throughout the interface
- Added reduced-motion support for users who prefer less animation
- Built a PHP-backed contact form with server-side validation and spam protection
- Refactored shared CSS to reduce duplication and improve maintainability
- Added an initial application loading state to improve perceived startup behavior
- Tested production builds throughout development using Vite

---

## Portfolio Technology Stack

| Category | Technologies |
|---|---|
| Frontend | Vue.js, JavaScript, HTML5, CSS3 |
| Routing | Vue Router |
| UI Framework | Bootstrap 5 |
| Server-Side | PHP |
| Build Tools | Vite, npm |
| Version Control | Git, GitHub |
| Design | Responsive Design, UI / UX, Information Architecture |

> PostgreSQL, SQL, Java, Spring Boot, Python, Docker, and other technologies displayed throughout the portfolio represent technologies used in my projects, training, and professional work rather than dependencies of the portfolio application itself.

---

## Project Structure

```text
my-portfolio/
│
├── public/
│   └── assets/
│       └── images/
│           ├── about/
│           ├── education/
│           ├── experience/
│           ├── home/
│           ├── icons/
│           ├── logo/
│           └── projects/
│
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── button.css
│   │       ├── carousel.css
│   │       ├── icon-links.css
│   │       ├── modal.css
│   │       └── project-card.css
│   │
│   ├── components/
│   │   ├── BaseModal.vue
│   │   ├── about/
│   │   ├── contact/
│   │   ├── education/
│   │   ├── experience/
│   │   ├── home/
│   │   └── projects/
│   │
│   ├── data/
│   │   └── certificates.js
│   │
│   ├── mixins/
│   │   └── imageZoomMixin.js
│   │
│   ├── router/
│   │   └── index.js
│   │
│   ├── views/
│   │   ├── AboutView.vue
│   │   ├── ContactView.vue
│   │   ├── EducationView.vue
│   │   ├── ExperienceView.vue
│   │   ├── HomeView.vue
│   │   ├── NotFoundView.vue
│   │   ├── ProjectsView.vue
│   │   └── SiteMapView.vue
│   │
│   ├── App.vue
│   └── main.js
│
├── index.html
├── package.json
└── vite.config.js
```

---

## Screenshots

The following screenshots show the primary areas of the portfolio.

### Home

Introduces my professional focus across business systems and full-stack development.

![Home Page](images/01-home.png)

---

### About

Provides background on my experience, transition into technology, certifications, and professional direction.

![About](images/02-about.png)

---

### Experience

Highlights professional experience across business operations, systems, technology, and application development.

![Experience](images/03-experience.png)

---

### Education

Presents education, bootcamp training, technical coursework, and related skills.

![Education](images/04-education.png)

---

### Projects

Showcases personal, client, and educational projects with project details, technologies, and implementation information.

![Projects](images/05-projects.png)

---

### Contact

Provides a responsive contact form using Vue.js and a PHP server-side endpoint.

![Contact](images/06-contact.png)

---

## Design Approach

I approached this portfolio the same way I tend to approach business and technical problems: understand the purpose first, organize the information, and then decide what implementation best supports the people using it.

The design focuses on:

- Clear information hierarchy
- Consistent component styling
- Responsive layouts
- Reusable design patterns
- Practical user interactions
- Accessible controls
- Maintainable code organization

The visual design intentionally stays relatively restrained so the interface supports the content rather than competing with it.

Interactive details are used where they provide feedback, improve navigation, or add personality to the experience rather than simply adding movement.

---

## Development Approach

This portfolio has gone through multiple iterations as both my technical skills and professional direction have evolved.

Rather than treating the first working version as finished, I have continued reviewing and improving the application.

That process has included:

1. Identifying usability and layout issues
2. Refactoring components for consistency
3. Consolidating shared CSS
4. Improving responsive behavior
5. Adding separate interaction behavior for mouse and touch input
6. Strengthening semantic HTML
7. Improving accessibility
8. Reworking professional content for a clearer audience
9. Improving project presentation
10. Replacing outdated implementations with better solutions
11. Testing production builds throughout development

I rarely look at a functioning system and assume that functioning means finished. I want to understand what works, what does not, and what could work better.

---

## Running the Project Locally

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd my-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Vite will generate the optimized production files in the `dist` directory.

> **Note:** The PHP contact endpoint requires a PHP-enabled server environment. Vite's development server does not process PHP or send email by itself.

---

## Current Development

The portfolio is actively maintained as I continue reviewing both the technical implementation and the experience of using the site.

Current priorities include:

- Cross-browser testing
- Responsive and touch-device testing
- Accessibility review
- Performance optimization
- SEO improvements
- Social sharing metadata
- Project documentation
- Code consistency
- Production deployment testing

Future changes will focus on improvements that make the portfolio clearer, more useful, more accessible, or technically stronger rather than adding features simply for the sake of adding them.

---

## Live Website

🌐 **Portfolio:** [jennifercurtis.me](https://jennifercurtis.me)

---

## Author

**Jennifer Curtis**

**Business Systems & Technology Professional | Full-Stack Developer**

Professional focus: Business Systems Analysis, Business Analysis, Implementation, Technical Consulting, Systems Support, and Full-Stack Development.

🌐 **Portfolio:** [jennifercurtis.me](https://jennifercurtis.me)

💼 **LinkedIn:** [linkedin.com/in/jcurtisdeveloper](https://linkedin.com/in/jcurtisdeveloper)

💻 **GitHub:** [github.com/CraftyCurtis05](https://github.com/CraftyCurtis05)

📍 **Location:** Columbus, Ohio

---

## Acknowledgements

This portfolio was built using Vue.js, Vue Router, JavaScript, HTML5, CSS3, Bootstrap, Vite, PHP, Git, and GitHub.

My full-stack development foundation was built through Tech Elevator, followed by continued learning through independent coursework, application development, technical projects, and hands-on systems work.