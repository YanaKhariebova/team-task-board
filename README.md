# 📋 Team Task Board

## 📸 Screenshots

<img width="1892" height="852" alt="Bildschirmfoto vom 2026-07-13 12-40-37" src="https://github.com/user-attachments/assets/44213dea-a1a0-4672-bb45-029fc4762248" />

<img width="1887" height="809" alt="Bildschirmfoto vom 2026-07-13 12-45-01" src="https://github.com/user-attachments/assets/19e934a2-c469-4351-8e02-426591ffd2c2" />


A simple team task management application built with React. It allows users to create, organize, filter, update, and delete tasks.

## ✨ Features

- ➕ Create new tasks
- 📝 Add a title, description, assignee, and status
- 🔄 Change the status of a task
- 🗑️ Delete tasks
- 🔍 Filter tasks by status
- 📊 Display the total and completed task count
- 🌐 Load example tasks from an external API
- 🌙 Switch between dark and light themes
- 📱 Responsive user interface

## 🚦 Task Statuses

Tasks can have one of the following statuses:

- 🔴 `open` — the task has not been started
- 🟡 `in-progress` — the task is currently being worked on
- 🟢 `done` — the task has been completed

## 🛠️ Technologies

- ⚛️ React
- ⚡ Vite
- 🎨 Tailwind CSS
- 🌼 DaisyUI
- ✅ ESLint
- 🌐 JSONPlaceholder API

## 📦 Installation

Clone the repository and open the project directory:

```bash
git clone <repository-url>
cd team-task-board
```

Install the dependencies:

```bash
npm install
```

## 🚀 Start the Project

Run the development server:

```bash
npm run dev
```

Open the address shown in the terminal, usually:

```text
http://localhost:5173
```

## 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🔎 Code Check

Run ESLint:

```bash
npm run lint
```

## 📁 Project Structure

```text
team-task-board/
├── src/
│   ├── Components/
│   │   ├── Layouts/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   └── navbar/
│   │   └── TaskBoard/
│   ├── components/
│   │   ├── FilterBar/
│   │   ├── TaskForm/
│   │   ├── TaskItem/
│   │   └── TaskList/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🌐 API

The application loads example tasks from the JSONPlaceholder API:

```text
https://jsonplaceholder.typicode.com/todos?_limit=5
```

The received data is converted into the task format used by the application.

## 💡 How It Works

1. The application loads five example tasks from the API.
2. Users can add their own tasks using the form.
3. Tasks can be filtered by their current status.
4. Clicking **Change Status** moves a task through the following cycle:

```text
open → in-progress → done → open
```

5. Clicking **Delete** removes the selected task.

## 👥 Team Project

This project was created as a group exercise to practice:

- React components
- Props and state
- React hooks
- Form handling
- Conditional rendering
- Working with APIs
- Tailwind CSS and DaisyUI

## 📄 License

This project is intended for educational purposes.
