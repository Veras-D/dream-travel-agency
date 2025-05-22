<p align="center">
  <img src="src/assets/favicon.svg" alt="Dream Travel Agency Logo" width="80" height="80">
</p>

# Dream Travel Agency

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.0-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![RTL Tests](https://img.shields.io/badge/RTL%20Tests-Passing-brightgreen?logo=jest)](#tests)
[![Cypress](https://img.shields.io/badge/Cypress-Ready-17202C?logo=cypress&logoColor=white)](https://www.cypress.io/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🗺️ Overview

**Dream Travel Agency** is a frontend prototype for a fictional travel booking platform. It showcases a polished visual design and clean UX, built with modern technologies and best practices.

---

## ✨ Features

- ✈️ Responsive design with **Bootstrap 5**
- 🧩 Component-based architecture using **React**
- 🔐 Safe & predictable code with **TypeScript**
- ⚡ Fast dev/build process with **Vite**
- 🧪 Integrated testing with **React Testing Library** & **Cypress**
- 🧱 Modular structure for easy scalability

---

## 🧠 Project Structure

```bash
dream-travel/
├── public/                # Static assets served as-is
│   └── assets/
│       ├── favicon.svg
│       └── logo.svg
├── src/                   # Source code
│   ├── assets/            # Project assets
│   ├── components/        # Reusable UI components
│   │   ├── DestinationCard.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   └── PackageCard.tsx
│   ├── database/          # Mock data storage
│   ├── pages/             # Application pages
│   │   ├── AboutUs.tsx
│   │   ├── Contact.tsx
│   │   ├── Destinations.tsx
│   │   ├── Home.tsx
│   │   └── __tests__/     # Unit & integration tests (RTL + Jest)
│   ├── styles/            # Global styles
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Entry point
├── cypress/               # End-to-end tests (Cypress)
│   ├── e2e/
│   ├── fixtures/
│   └── support/
├── index.html             # HTML entry point
├── jest.config.ts         # Jest config
├── cypress.config.ts      # Cypress config
└── vite.config.ts         # Vite config
````

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/veras-d/dream-travel-agency.git
cd dream-travel
npm install
```

### 2. Run the app locally

```bash
npm run dev
```

---

## 🧪 Tests

### ✅ React Testing Library (Unit & Integration)

* Located in `src/pages/__tests__/`
* Run all RTL tests:

```bash
npm run test
```

* Watch mode (recommended for development):

```bash
npm run test:watch
```

> Uses **Jest** under the hood

### 🌐 Cypress (End-to-End)

* Located in `cypress/e2e/`
* Open interactive UI:

```bash
npx cypress open
```

* Run tests headlessly:

```bash
npx cypress run
```

---

## 📦 Available Scripts

| Script         | Description                  |
| -------------- | ---------------------------- |
| `dev`          | Start development server     |
| `build`        | Build for production         |
| `preview`      | Preview production build     |
| `lint`         | Run ESLint                   |
| `test`         | Run all Jest tests           |
| `test:watch`   | Watch mode for Jest          |
| `cypress:open` | Launch Cypress UI            |
| `cypress:run`  | Run Cypress tests headlessly |

---

## 🛠️ Technologies

* **React** – UI development
* **TypeScript** – Type safety
* **Vite** – Dev/build tooling
* **Bootstrap** – CSS framework
* **React Router** – Navigation
* **Jest + RTL** – Component/unit testing
* **Cypress** – E2E testing

---

## 🌍 Live Demo

👉 [dream-travel-ruddy.vercel.app](https://dream-travel-ruddy.vercel.app)

---

## 📄 License

[MIT](LICENSE)

---

## ☕ Buy Me a Ko-Fi

[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge\&logo=ko-fi\&logoColor=white)](https://ko-fi.com/verivi)

---

<div align="center">
  <p>© 2025 VERAS. All rights reserved.</p>
</div>
```
