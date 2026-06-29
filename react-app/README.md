# 📝 React To-Do List App

A simple and clean To-Do List application built using **React.js (useState hook)**.  
This project helps beginners understand state management, event handling, and list rendering in React.

---

## 🚀 Features

- ➕ Add new tasks
- 🗑️ Delete tasks
- ✔️ Mark / Unmark tasks as completed
- 🎨 Completed tasks show line-through style
- ⚡ Real-time UI updates using React state

---

## 🛠️ Tech Stack

- React JS
- JavaScript (ES6+)
- HTML5
- CSS3

---

## ⚙️ How It Works

### 1. State Management
- `tasks` → stores list of tasks
- `newTask` → stores input value

### 2. Add Task
- User types task → clicks **Add**
- Task is added to array using `setTasks`

### 3. Delete Task
- Removes task using `filter()` method

### 4. Mark / Unmark
- Toggles `completed` state using `map()`
