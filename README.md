# 🎲 Tenzies Game

A fun, interactive React application based on the classic dice game "Tenzies." Roll the dice, hold the ones you want to keep, and keep rolling until all ten dice show the exact same value!

## ✨ Features
- **Interactive Dice:** Click on any die to "hold" it, freezing its value between rolls.
- **Dynamic Game State:** The game intelligently tracks when you've held all dice and matched all values.
- **Victory Celebration:** Features a fun confetti animation when you successfully complete the game.
- **Seamless Replayability:** The "Roll" button automatically converts to a "New Game" button upon winning, making it easy to play again.

## 🛠️ Tech Stack
- **React:** Built using functional components and React Hooks (`useState`).
- **nanoid:** Used to generate unique IDs for each die to ensure stable rendering.
- **react-confetti:** Provides the celebratory animation upon winning.
- **Vite:** (Assumed) as the fast frontend build tool.

## 🎮 How to Play
1. The game starts with 10 random dice.
2. Click the **"Roll"** button to generate new values for the dice.
3. If you see a number you want to keep, **click the die to freeze it**. It will turn green.
4. Continue rolling the remaining un-held dice.
5. You win when **all 10 dice are frozen and display the exact same number**.
6. Once you win, click **"New Game"** to reset the board and play again.

## 🚀 Local Setup & Installation

1. **Clone or extract the project directory**