# jslearn

Personal JavaScript learning repository with small exercises and mini projects.

## Current Level

Based on the completed exercises in this repository, this learning path is currently at:

- Early intermediate JavaScript level

You have moved beyond beginner fundamentals and already built multiple browser projects plus simple frontend-backend integrations.

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

## Progress Summary

Completed areas:
- Core syntax and basic language fluency
- Functional-style array processing
- DOM manipulation and event-driven UI
- Closures and introductory OOP concepts
- Multi-file mini-project development
- API consumption with `fetch`
- Basic Express server development
- SQLite usage in simple backend scenarios

Current strength:
- You can build small to medium learning projects end-to-end.

Current gap:
- You still need deeper mastery of advanced JavaScript behavior, engineering practices, and production-style patterns.

## What To Learn Next

Recommended order:

1. Advanced JavaScript fundamentals
- Scope and hoisting details
- `this` binding rules
- Prototype chain and inheritance model
- Event loop, microtasks vs macrotasks
- Promises and `async/await` patterns

2. Code organization and reliability
- Better module structure and reusable components
- Strong error handling patterns
- Input validation and defensive coding

3. Testing
- Unit testing (`Vitest` or `Jest`)
- Integration testing for API + frontend flow
- Mocking API calls and edge cases

4. Tooling and workflow
- `npm` scripts for dev/test/build
- ESLint + Prettier
- Vite-based development workflow
- Environment variable management

5. Browser and UI engineering depth
- URL state and query parameters
- Debounce/throttle and performance basics
- Accessibility fundamentals (semantic HTML, keyboard support)

6. Backend fundamentals (next level)
- REST API design conventions
- Middleware architecture
- Auth basics (session/JWT concepts)
- Database schema evolution/migrations

7. TypeScript
- Basic typing for functions, objects, and APIs
- Gradual migration from JavaScript to TypeScript

8. Data structures and algorithms
- Complexity basics (Big-O intuition)
- Common problem-solving patterns

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
