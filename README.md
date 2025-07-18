# 🎯 Cursor Follower

A minimal and customizable React component that replaces the traditional mouse cursor with a smooth, animated follower — perfect for modern, interactive websites.

---

## ✨ Features

- Replaces native cursor with a customizable animated circle
- Smooth animations with pointer tracking
- Works with modern React (v18 and v19)
- Lightweight and easy to integrate

---

## 📦 Installation

```bash
npm install @balasaravanan/cursor-follower

```

### How to use

```jsx

// in your main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CursorFollower from "@balasaravanan/cursor-follower";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CursorFollower>  {/* wrap your app component with Cursor Follwer */}
      <App />
    </CursorFollower>
  </StrictMode>
);

```