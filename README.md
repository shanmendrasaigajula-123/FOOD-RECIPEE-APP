# 🍴 Foodie – Recipe App (React + Vite)

A recipe website with an **Admin module** and a **User module**, built with React + Vite.
All data (users, login session, recipes, favorites) is stored in the browser's **Local Storage**.

## Run locally

```bash
npm install
npm run dev        # open http://localhost:5173
npm run build      # production build -> dist/
```

## Modules

| Module | Pages | What it can do |
|---|---|---|
| **Public** | Home, Recipes, Recipe Details | Browse, search, filter by category, view full recipe |
| **User** | Signup, Login, Dashboard, Favorites | Create account, login, save / remove favorite recipes (saved per user) |
| **Admin** | Admin Login, Dashboard, Manage Recipes, Manage Users | Add / edit / delete recipes, view stats, remove users |

## Demo admin login

- Email: `admin@foodie.com`
- Password: `admin123`

## Route protection

- `/dashboard`, `/favorites` → only logged-in **users**
- `/admin`, `/admin/recipes`, `/admin/users` → only the **admin**
- Opening a protected page while logged out redirects to the login page.

## Local Storage keys

| Key | Holds |
|---|---|
| `foodieUsers` | registered users |
| `foodieSession` | who is logged in (`user` or `admin`) |
| `foodieAdminRecipes` | recipes added by the admin |
| `foodieFavoritesByUser` | favorites for each user |

> ⚠️ Local Storage is **not secure** (passwords are stored as plain text, and data lives only in one browser).
> This is fine for a college project/demo; a real app needs a backend + hashed passwords.

## Deploy on Vercel

See the steps in the main instructions. `vercel.json` is already included so
page refreshes on routes like `/recipes` or `/admin` work correctly.


## World cuisines
Recipes now include Indian plus Italian, French, American, Mexican, Japanese, Chinese, Thai, Greek, Spanish and Vietnamese dishes. Filter by cuisine on the Recipes page or from the home page.

Run: `npm install` then `npm run dev`.
