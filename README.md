# Time Tracker Frontend

This is the **frontend of the Time Tracker application**, built using **React** and **Bootstrap**.  
It connects to the Spring Boot backend via **RESTful APIs** to manage **projects** and **time entries**.

---

## Features Implemented

- **Daily Time Tracking**
  - Record working hours for selected projects
  - View today's entries in a table

- **Project Management**
  - Create new projects directly from the UI
  - Project dropdown dynamically updates after creation

- **Weekly Summary**
  - View total hours per day for a selected week

- **Monthly Summary**
  - View total hours for a selected month

- **SPA Navigation**
  - React Router for **Daily**, **Weekly**, and **Monthly** pages
  - Navbar for easy page switching

---

## Tech Stack

- **React 18**
- **Bootstrap 5** (via React-Bootstrap)
- **Axios** for API calls
- **React Router** for SPA navigation
- **Vite** as build tool

---

## Setup & Run

1. **Clone the repository**

```bash
git clone <your-frontend-repo-url>
cd time-tracker-frontend
````

2. **Install dependencies**

```bash
npm install
```

3. **Set backend API URL**

Create `.env` file in project root:

```
VITE_API_BASE_URL=http://localhost:8080/api
```

4. **Run the development server**

```bash
npm run dev
```

5. **Access in browser**

```
http://localhost:5173
```

---

## Folder Structure

```
src/
├── api/           # Axios API calls (projects & time entries)
├── components/    # Navbar and reusable UI components
├── pages/         # Daily, Weekly, Monthly pages
├── utils/         # Helper functions
├── App.jsx        # Routing setup
├── main.jsx       # Entry point
└── index.css
```
