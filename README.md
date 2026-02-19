# jslearn

Personal JavaScript learning repository with small exercises and mini projects.

## Project Structure

```text
excersices/
  1/  Hello world and basic JS in browser
  2/  Types, methods, functions, and control flow
  3/  Closures, classes, and DOM interaction
  4/  Mini projects
      - calculator/
      - rock-paper-scissor/
  5/  Frontend + simple Express + SQLite backend
  6/  Shopping mini-project with localStorage + backend API
  7/  Animated tableau (CSS + JS animation)
```

Note: the folder name is intentionally `excersices` in this repo.

## What I Learned

- JavaScript basics (types, functions, methods, control flow)
- Array helpers (`map`, `filter`, `reduce`, `some`, `every`, `find`)
- Closures and classes
- DOM manipulation and event handling
- Building mini projects with HTML/CSS/JS
- Calling APIs from frontend code
- Building simple backends with Express
- Basic SQLite integration
- Using browser `localStorage`
- CSS/JS animation basics

## How To Run

## Frontend-only exercises

Most exercises can be run by opening `index.html` (or the relevant `.html` file) in a browser.

Examples:
- `excersices/1/index.html`
- `excersices/2/exercise.html`
- `excersices/3/counter.html`
- `excersices/4/calculator/index.html`
- `excersices/4/rock-paper-scissor/index.html`
- `excersices/7/index.html`

Using a local static server (such as VS Code Live Server) is recommended.

## Exercise 5 (with backend)

```bash
cd excersices/5
npm install
node backend.js
```

Backend runs on `http://localhost:3000`.

Then open `excersices/5/index.html` in a browser (or via a static server).

## Exercise 6 (with backend)

`excersices/6/back-end.js` uses `express`, `cors`, and `better-sqlite3`.

If dependencies are not installed in that folder yet:

```bash
cd excersices/6
npm init -y
npm install express cors better-sqlite3
node back-end.js
```

Then open `excersices/6/index.html`.

## Notes

- This repo is for practice and learning, not production code.
- Some readmes/comments are in both English and Persian.
