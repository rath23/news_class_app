# 📰 CatchNews — React News App (Class Components)

CatchNews is a **React News Application** built using **Class Components** that fetches top headlines from **NewsAPI** and displays them with **categories**, **infinite scrolling**, and a **top loading progress bar**.

✅ Built with React Router  
✅ Infinite Scroll Loading  
✅ Category-based News (Business, Sports, Tech, etc.)  
✅ Clean UI using reusable components  

---

## ✨ Features

- ✅ News by Categories:
  - General
  - Business
  - Entertainment
  - Health
  - Science
  - Sports
  - Technology
- ✅ Infinite Scroll (auto loads more news)
- ✅ Top Loading Bar progress indicator
- ✅ React Router Navigation
- ✅ Component-based UI:
  - `Navbar`
  - `News`
  - `NewsItems`
  - `Loader`
  - `About`
- ✅ API Key secured using `.env`

---

## 🧱 Tech Stack

- **React (Class Components)**
- **React Router DOM**
- **NewsAPI**
- **react-infinite-scroll-component**
- **react-top-loading-bar**
- **Vite (Environment Variables: `import.meta.env`)**

---

## 📂 Project Structure

```bash
news_class_app/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Loader.jsx
│   │   ├── Nevbar.jsx
│   │   ├── News.jsx
│   │   ├── NewsItems.jsx
│   │   └── ...
│   └── main.jsx
├── .env.example
├── package.json
└── README.md
````

---

## 🔑 Environment Variables

This project uses **NewsAPI key** from environment variables.

### ✅ Create `.env` file in project root:

```env
VITE_NEWS_API=your_newsapi_key_here
```

> ⚠️ Never push your `.env` file to GitHub.

You can get your free API key from:
[https://newsapi.org/](https://newsapi.org/)

---

## ⚙️ Installation & Setup

### ✅ 1) Clone Repo

```bash
git clone https://github.com/rath23/news_class_app.git
cd news_class_app
```

### ✅ 2) Install Dependencies

```bash
npm install
```

### ✅ 3) Run the Project

```bash
npm run dev
```

Now open:

```
http://localhost:5173
```

---

## 🧭 Available Routes (Categories)

| Route            | Category      |
| ---------------- | ------------- |
| `/`              | General       |
| `/business`      | Business      |
| `/entertainment` | Entertainment |
| `/health`        | Health        |
| `/science`       | Science       |
| `/sports`        | Sports        |
| `/technology`    | Technology    |
| `/about`         | About Page    |

---

## 📌 How It Works

* `App.jsx` handles routing using **React Router**
* `News.jsx` fetches articles from **NewsAPI**
* `InfiniteScroll` loads more articles when you scroll down
* Loading progress is controlled using `setProgress()`

Example API used:

```txt
https://newsapi.org/v2/top-headlines
?country=us
&category=sports
&apiKey=YOUR_KEY
&page=1
&pageSize=12
```

---

## 🛠 Improvements (Optional)

If you want to improve this project further:

* [ ] Add error UI when API fails
* [ ] Replace random keys with stable `article.url` key
* [ ] Add search feature
* [ ] Add dark mode
* [ ] Add pagination UI (optional)
* [ ] Convert to Functional Components + Hooks

---

::contentReference[oaicite:0]{index=0}
```
