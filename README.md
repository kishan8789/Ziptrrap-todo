# Multi-Page Todo Application (Full-Stack)

A full-stack Todo application built with **React (Vite)** on the frontend and **Node.js (Express)** on the backend. This project follows a clean multi-page routing architecture and stores todo data locally using a JSON file.

---

## 🚀 Key Features

* **Multi-Page Routing:** Built using `react-router-dom` with separate routed pages instead of a single-page conditional UI.
* **Todo List Page:** Displays all todos and allows creating new tasks.
* **Todo Details Page:** Opens a single todo using a query parameter such as `/todo?id=12345`.
* **CRUD Operations:** Supports creating, reading, updating, and deleting todos.
* **Local File Storage:** Backend persists todos inside a `todos.json` file.
* **Component-Based Frontend:** UI is split into reusable components and pages.

---

## 🛠️ Project Architecture

```text
ziptrrip-todo-app/
├── frontend/             # Client-side UI built with React & Vite
│   ├── public/
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   │   ├── TodoForm.jsx
│   │   │   └── TodoItem.jsx
│   │   ├── pages/        # Routed pages
│   │   │   ├── TodoList.jsx
│   │   │   └── TodoDetails.jsx
│   │   ├── App.jsx       # Router setup
│   │   ├── main.jsx      # React entry point
│   │   └── api.js        # Axios API layer
│   ├── package.json
│   └── README.md
│
├── backend/              # Express backend
│   ├── data/
│   │   └── todos.json    # Local JSON storage
│   ├── routes/
│   │   └── todoRoutes.js # Todo API routes
│   ├── server.js         # Backend entry point
│   ├── package.json
│   └── README.md
│
└── README.md
```

---

## 📡 REST API Endpoints

Base URL: `http://localhost:5000/api/todos`

| Method | Endpoint | Description               |
| ------ | -------- | ------------------------- |
| GET    | `/`      | Fetch all todos           |
| GET    | `/:id`   | Fetch a single todo by ID |
| POST   | `/`      | Create a new todo         |
| PUT    | `/:id`   | Update an existing todo   |
| DELETE | `/:id`   | Delete a todo             |

### Example Todo Object

```json
{
  "id": 1719321000000,
  "title": "Complete Ziptrrip assignment",
  "completed": false
}
```

---

## ⚙️ Installation & Run Guide

### 1. Run the Backend

```bash
cd backend
npm install
npm start
```

Backend will run at: `http://localhost:5000`

---

### 2. Run the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at the Vite local URL shown in the terminal (usually `http://localhost:5173`).

---

## 📌 Notes

* Todo details page reads the todo ID using query parameters.
* Data is stored locally in `backend/data/todos.json`.
* This project was built as part of the **Ziptrrip developer assignment**.

---

## 👨‍💻 Tech Stack

**Frontend**

* React
* Vite
* React Router DOM
* Axios

**Backend**

* Node.js
* Express.js
* File System (`fs`) for local storage
