# Real Estate Management System

## 1. Project Overview
A React-based frontend application designed to manage and display real estate listings. This project follows a component-based architecture and is prepared for integration with an **ASP.NET Core Web API** backend.

---

## 2. Component Hierarchy
The application is divided into several reusable blocks to ensure clean code and easy maintenance.

| Component | Location | Responsibility |
| :--- | :--- | :--- |
| **App.jsx** | `src/` | **Root Component.** Orchestrates the layout by wrapping the Navbar, HomePage, and Footer. |
| **Navbar.jsx** | `src/components/` | **Navigation.** Contains the branding and links (Properties, About, Contact). |
| **Footer.jsx** | `src/components/` | **Information.** Displays copyright and legal info at the bottom. |
| **PropertyCard.jsx** | `src/components/` | **UI Brick.** A reusable card that displays individual property details using `props`. |
| **HomePage.jsx** | `src/pages/` | **Container.** Handles data fetching (logic) and renders the list of properties. |

---

## 3. Core Concepts Used

### A. Props (Properties)
Data flows downward from `HomePage` to `PropertyCard`.
* **Input Data:** `title`, `location`, `price`.
* **Mechanism:** The `.map()` function iterates through an array of objects and generates a `PropertyCard` for each one.

### B. State Management (`useState`)
We use internal memory for interactivity:
* **loading**: A boolean state to show/hide the "Loading..." message.
* **properties**: An array state that holds the data fetched from the API.
* **showInfo**: A toggle state inside the card to expand/collapse details.

### C. Lifecycle Hooks (`useEffect`)
Used to handle "Side Effects" like fetching data when the app starts.
* **Trigger:** Runs once upon component mounting due to the empty dependency array `[]`.

---

## 4. Logic Flow
1. **Mounting:** The user opens the page. `HomePage` renders with `loading = true`.
2. **Effect:** `useEffect` triggers a simulated API call (`setTimeout`).
3. **State Update:** After 2 seconds, `setProperties` updates the list, and `setLoading` is set to `false`.
4. **Re-render:** React detects the state change and automatically displays the property cards.

---

## 🛠 Setup Instructions
1. Clone the repository:
   ```bash
   git clone [https://github.com/Muhash123/React-real-estate.git](https://github.com/Muhash123/React-real-estate.git)
