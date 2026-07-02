# 🎲 Tenzies Game

<div align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-purple?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)

### Roll • Hold • Match • Win!

A modern implementation of the classic **Tenzies Dice Game** built with **React** and **Vite**. The objective is simple: keep rolling the dice until all ten dice display the same number.

</div>

---

# 🌐 Live Demo

🚀 **Deployed on Vercel:**  


```text
https://tenzies-game-basic.vercel.app/
```


---

# 📸 Project Overview

Tenzies is an interactive browser game where players strategically hold dice and reroll the remaining ones until every die has the same value.

The project demonstrates:

- ⚛️ React Functional Components
- 🪝 React Hooks (`useState`)
- 🎲 Dynamic UI Rendering
- 🔄 State Management
- 🎉 Third-party library integration
- 🚀 Frontend deployment with Vercel

---

# ✨ Features

## 🎲 Random Dice Generation
- Generates 10 dice with random values between **1 and 6**.
- Every new game starts with a fresh set of dice.

---

## 🔒 Hold Dice Functionality
- Click on a die to freeze its value.
- Held dice are highlighted with a different color.
- Frozen dice do not change when the player rolls again.

---

## 🔄 Smart Reroll System
- Only unheld dice are rerolled.
- Makes the game strategic and engaging.

---

## 🏆 Win Detection
The game automatically checks whether:

✅ All dice are held.

AND

✅ All dice have the same value.

Once both conditions are met, the player wins.

---

## 🎉 Victory Celebration
- Displays a confetti animation using the `react-confetti` library.
- Improves user experience and provides visual feedback.

---

## 🔁 New Game System
After winning:

- The **Roll** button changes to **New Game**.
- Clicking it resets the game instantly.

---

## 📱 Responsive Interface
- Clean and minimal UI.
- Works smoothly across desktop and mobile devices.

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| ⚛️ React 19 | Building UI components |
| ⚡ Vite | Development server and bundler |
| 🟨 JavaScript (ES6+) | Application logic |
| 🎊 react-confetti | Victory animation |
| 🆔 nanoid | Unique IDs for dice |
| 🎨 CSS3 | Styling and layout |
| 📦 npm | Package management |


---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Abhishek140304/Tenzies
```

---

## 2️⃣ Move into the Project Directory

```bash
cd Tenzies
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Start Development Server

```bash
npm run dev
```

The application will run on:

```text
http://localhost:5173
```

---

# 🎮 How to Play

### Step 1
Start the game with ten random dice.

### Step 2
Click **Roll** to generate new values.

### Step 3
Click on any die you want to keep.

### Step 4
Held dice turn green and remain unchanged.

### Step 5
Continue rerolling until all dice have the same value.

### Step 6
Celebrate your victory 🎉

---

# 🧠 Concepts Demonstrated

This project demonstrates important frontend concepts:

- React Hooks
- State Management
- Conditional Rendering
- Array Mapping
- Event Handling
- Component Reusability
- Immutable State Updates
- Unique Keys in React Lists

---

# 🔮 Future Improvements

- ⏱️ Timer
- 🏅 High Score System
- 📊 Statistics Dashboard
- 🌙 Dark Mode
- 🔊 Sound Effects
- 🎮 Difficulty Levels

