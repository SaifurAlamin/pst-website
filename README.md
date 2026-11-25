# PSTC Website

### Power Sixers Trading and Contracting W.L.L.

A modern, responsive and multilingual corporate website for **Power Sixers Trading and Contracting W.L.L.**, a Doha-based MEP and technical services company in Qatar.

The website is designed to present the company's services, projects, business information and contact details through a clean, professional user experience.

---

## 🌐 Website Overview

- **Company:** Power Sixers Trading and Contracting W.L.L.
- **Location:** Doha, Qatar
- **Industry:** MEP & Technical Services
- **Languages:** English and Arabic
- **Direction Support:** LTR and RTL
- **Architecture:** Next.js App Router
- **Deployment:** Netlify

---

## ✨ Features

- Modern and professional corporate design
- Fully responsive layout for desktop, tablet and mobile
- Multilingual support (English & Arabic)
- Arabic RTL layout support
- Localized navigation and language switching
- Homepage with multiple content sections
- Company overview and business information
- Six dedicated MEP service categories
- Individual service detail pages
- Project showcase with individual project detail pages
- Reusable and modular components
- Smooth animations and interactive transitions
- SEO-friendly page structure and metadata
- Optimized image assets
- Contact information and inquiry navigation

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework and application routing |
| React | User interface development |
| JavaScript (JSX) | Application logic |
| Tailwind CSS v4 | Styling and responsive layouts |
| next-intl | Internationalization |
| Framer Motion | Animations and transitions |
| Lucide React | Icons |
| React Hook Form | Form handling |
| Zod | Form validation |

---

## 📂 Project Structure

```text
pstc-website/
│
├── public/
│   └── images/
│       ├── logo/
│       ├── hero/
│       ├── about/
│       ├── services/
│       └── projects/
│
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── about/
│   │       ├── services/
│   │       │   └── [slug]/
│   │       ├── projects/
│   │       │   └── [slug]/
│   │       ├── team/
│   │       ├── contact/
│   │       ├── layout.jsx
│   │       └── page.jsx
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── services/
│   │   ├── projects/
│   │   └── contact/
│   │
│   ├── data/
│   ├── i18n/
│   ├── lib/
│   ├── messages/
│   │   ├── en.json
│   │   └── ar.json
│   └── proxy.js
│
├── jsconfig.json
├── next.config.mjs
├── postcss.config.mjs
├── package.json
└── README.md
```

---

## 🏗️ Services

The website presents six core service categories:

1. MEP Installation
2. HVAC & VRF Installation
3. AC Maintenance & Repair
4. Ducting & Chilled Water Piping
5. Plumbing & Fire Fighting
6. Skilled MEP Manpower

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/SaifurAlamin/pstc-website.git
```

### 2. Navigate to the project directory

```bash
cd pstc-website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 📦 Production Build

To create a production build:

```bash
npm run build
```

To run the production server locally:

```bash
npm run start
```

---

## 🌍 Internationalization

The website supports two languages:

- English (`/en`)
- Arabic (`/ar`)

The application uses `next-intl` for localized routing, translations and language management.

Arabic pages support right-to-left (RTL) layout, while English pages use left-to-right (LTR) layout.

Translation files are located in:

```text
src/messages/
├── en.json
└── ar.json
```

---

## 🖼️ Image Management

Website images are organized under:

```text
public/images/
```

Project images are maintained in a single directory:

```text
public/images/projects/
```

Descriptive image filenames are used to make project assets easy to identify and maintain.

---

## 🚀 Deployment

The project is prepared for deployment on **Netlify** with its Next.js runtime support.

Recommended deployment workflow:

1. Push the source code to GitHub.
2. Import the repository into Netlify.
3. Configure the build command as `npm run build`.
4. Deploy the project.
5. Configure a custom domain when available.

---

## 📌 Project Status

The website is under development. Additional sections and improvements, including the Gallery, may be introduced in future updates.

---

## 📄 License

This project is developed for Power Sixers Trading and Contracting W.L.L.

All company branding, logos, project images and related business materials belong to their respective owners. Unauthorized reuse is not permitted.

---

**Built with Next.js and React.**

*Power Sixers Trading and Contracting W.L.L. — Build · Install · Maintain.*
