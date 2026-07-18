# Zenote 0.2

A minimalist productivity application focused on reducing distractions while helping users organize notes, tasks, and goals.

Zenote is being built with simplicity, clean architecture, and maintainability as first-class priorities. Instead of relying on heavy frameworks, the project is currently built with vanilla JavaScript to strengthen core frontend engineering skills before expanding into a larger application.

> **Current Status:** 🚧 Active Development

---

## Philosophy

Modern productivity apps often become cluttered with unnecessary features.

Zenote aims to provide a calm, distraction-free workspace where the interface stays out of your way and lets you focus on getting work done.

Core principles:

- Minimalist design
- Fast and lightweight
- Keyboard friendly
- Offline first
- Clean code architecture
- Accessibility focused
- Data encryption

---

## Current Features

### Todo System

- Add todos
- Delete todos
- Mark todos as completed
- Persistent localStorage
- Animated deletion
- Keyboard support (Enter key)
- Responsive layout

---

## Technical Highlights

This version focuses on improving software architecture rather than adding features.

Implemented concepts include:

- Separation of Concerns
- State-driven rendering
- Object-based data model
- Modular functions
- Local Storage persistence
- Event-driven UI
- Dynamic DOM creation

Example Todo Object:

```javascript
{
    id: 1721264873211,
    text: "Build Zenote",
    completed: false,
    starred: false
}
```

---

## Project Structure

```
Zenote/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

Future versions will split the application into modules such as:

```
src/
│
├── storage.js
├── todos.js
├── ui.js
├── events.js
└── app.js
```

---

## Roadmap

### Version 0.3

- [ ] Starred tasks
- [ ] Task priorities
- [ ] Due dates
- [ ] Categories
- [ ] Search
- [ ] Better animations

### Version 0.4

- [ ] Notes
- [ ] Markdown support
- [ ] Tags
- [ ] Calendar integration
- [ ] Sidebar navigation

### Version 0.5

- [ ] Habit Tracker
- [ ] Goal Tracking
- [ ] Statistics
- [ ] Productivity Dashboard

PLUS more modules to come before official launch!

### Version 1.0

- [ ] User accounts
- [ ] Cloud synchronization
- [ ] Cross-device support
- [ ] End-to-end encryption
- [ ] AI-assisted note organization

---

## Why Vanilla JavaScript?

This project intentionally avoids frameworks during the early stages.

The goal is to master:

- JavaScript fundamentals
- DOM manipulation
- State management
- Application architecture
- Clean code principles

before introducing React or other frameworks.

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/chrisjonesdsgn85/zenote0.2.git
```

Open `index.html` in your browser.

No build tools or dependencies are required.

---

## Future Technologies

As Zenote grows, planned technologies include:

- TypeScript
- React (may change)
- Electron
- Node.js
- PostgreSQL
- AI integrations

---

## Dev Log

### v0.2

- Refactored todo rendering into reusable functions
- Implemented separation of Concerns
- Replaced string-based todos with an object-based data model
- Added persistent completion state
- Improved localStorage architecture
- Improved rendering pipeline

---

## Author

**Chris Jones**

Learning in public while building software one version at a time.

GitHub:
https://github.com/chrisjonesdsgn85

---

## License

MIT License
