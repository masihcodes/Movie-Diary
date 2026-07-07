# 🎬 Movie Diary & Personal Journal

A dynamic, SPA-like web application that allows users to explore popular movies, search for specific titles, and save favorites to a personal journal with custom notes.

Built with **Vanilla JavaScript (ES6 Modules)**, **Tailwind CSS**, and **DaisyUI**, powered by the **TMDB API**.

---

### ✨ Features

* **🔥 Trending Movies & Pagination:** Browse popular movies of the week with smooth pagination.
* **🔍 Real-Time Search:** Instantly search for any movie using the TMDB database.
* **📖 Personal Journal (Watchlist):** Add favorite movies to a dedicated Journal tab with persistence.
* **📝 Custom Notes:** Write and save personal thoughts or reviews for each saved movie.
* **💾 Local Storage Integration:** Your journal and notes are automatically saved in your browser—no login required!
* **🎨 Modern UI & Notifications:** Responsive dark-themed UI (Dracula) equipped with smooth **SweetAlert2** notifications.

---

### 🛠️ Tech Stack

* **Frontend:** HTML5, Vanilla JavaScript (ES6 Modules, Async/Await)
* **Styling:** Tailwind CSS (v4), DaisyUI (Dracula Theme), FontAwesome
* **API:** [TMDB (The Movie Database) API](https://www.themoviedb.org/documentation/api)
* **Libraries:** SweetAlert2 (for alerts and notifications)
* **Data Management:** Browser Local Storage

---

### 🚀 Live Demo : https://masihcodes.github.io/Movie-Diary/

---

### 🚀 Quick Start

1. **Clone the repository** or download the files.
2. Because this project uses **ES6 Modules** (`import`/`export`), you need to run it via a local server (opening `index.html` directly will block CORS).
   * **VS Code:** Install the **Live Server** extension, right-click `index.html`, and select *“Open with Live Server”*.
   * **Node.js:** Run `npx serve .` in your terminal.

---

### 💡 What I Demonstrated in This Project
* Making asynchronous API calls using `fetch` and `async/await`.
* Modularizing JavaScript code into cleaner, reusable files (`main.js`, `journal.js`, `service.js`).
* CRUD operations using the browser's `localStorage` (Add, Read, Update Notes, Delete).
* DOM manipulation and event delegation for dynamic UI rendering.
