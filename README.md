# 🎨 Random Color Generator

A lightweight browser app that generates random hex colors at the click of a button, with one-click clipboard copy.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green.svg)

🔗 **Live Demo:** https://bharat-sharma88.github.io/Random-Color-Generator/

## 🚀 Features

- **Random hex color generation** — produces a valid 6-character hex code on every click using a randomized character picker
- **Live background preview** — the generated color is instantly applied to the color box background
- **Click-to-copy** — clicking the displayed hex code copies it to the clipboard via the Clipboard API
- **Copy confirmation feedback** — a checkmark icon briefly appears for 1 second after a successful copy
- **Responsive, viewport-based sizing** — layout uses `vmin`/`vh` units so the color box and heading scale with screen size
- **Hover interactions** — the color box scales slightly on hover, and the code area highlights on hover to indicate it's clickable
- **Icon support via Font Awesome** — clipboard-check icon loaded from a CDN for the copy indicator

## 📦 Tech Stack

- **HTML5** — page structure and markup
- **CSS3** — styling, gradients, flexbox layout, and transitions
- **JavaScript (Vanilla ES6)** — DOM manipulation, event handling, and clipboard logic
- **Font Awesome 7.0.1** (CDN) — icon library for the copy-confirmation icon

No frameworks, build tools, or package managers are used — the project runs as static files.

## ⚙️ How It Works

1. Click the **Generate Color** button to trigger the `getRandomColor()` function, which builds a random 6-character hex code from the characters `0-9` and `A-F`.
2. The generated hex code is applied as the `.color-box` background color and displayed as text inside the box.
3. Clicking the displayed hex code copies it to your clipboard using `navigator.clipboard.writeText()`.
4. A checkmark icon appears next to the code for 1 second to confirm the copy, then hides again via a `setTimeout`.

## 📂 Directory Structure

```
random-color-generator/
├── index.html      # Main HTML markup and page structure
├── style.css        # Styling, layout, gradients, and transitions
└── script.js         # Color generation, DOM updates, and clipboard logic
```

## 📄 License

This project is licensed under the **MIT License**.
