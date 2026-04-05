# Next.js Clerk Convex Starter

A clean, minimal starter to build authenticated apps with:

- **Next.js (App Router)**
- **Clerk (Authentication)**
- **Convex (Backend + Database)**

Includes protected routes, automatic user sync, and a solid foundation to start building real apps.

---

## 📸 Preview

### Landing Page

<p align="center">
  <img width="1920" height="1166" alt="localhost_3000_dashboard (1)" src="https://github.com/user-attachments/assets/70027a4f-59b0-4fa4-83cf-927b11184cac" />
</p>

### Authentication

<p align="center">
  <img width="1920" height="1080" alt="Screenshot_2026-04-05_100637" src="https://github.com/user-attachments/assets/fe69b9d5-5681-48c5-b8bc-c424cfe10313" />
</p>

### Dashboard (Protected)

<p align="center">
  <img width="1920" height="1221" alt="localhost_3000_dashboard" src="https://github.com/user-attachments/assets/8b3d1f76-0240-406d-88a0-ae1f680b756e" />
</p>

---

## ✨ Features

- 🔐 Authentication with Clerk
- 🧱 Convex backend with schema & functions
- 🔄 Automatic user sync (Clerk → Convex)
- 🛡️ Route protection via middleware
- 🎯 Clean app structure (auth vs app separation)
- ⚡ Minimal, production-ready UI
- 🧪 Ready for queries & mutations

---

## 📁 Project Structure

```
.
├── convex/              # Convex backend (schema, functions)
├── src/
│   ├── app/
│   │   ├── (auth)/      # Sign-in / Sign-up
│   │   ├── (app)/       # Protected routes (dashboard)
│   │   ├── globals.css  # Global css file
│   │   └── page.tsx     # Public landing page
│   ├── components/
│   │   ├── providers/   # Convex provider
│   │   └── shared/      # UserSync.ts
│   └── middleware.ts    # Clerk route protection
├── .env.example
└── README.md
```

---

## 🛠️ Prerequisites

Before getting started, make sure you have the following:

- [Node.js](https://nodejs.org/) v18 or higher
- A [Clerk](https://clerk.com) account with an application set up
- A [Convex](https://convex.dev) account with a project created

---

## ⚡ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/harsh661/nextjs-clerk-convex-starter.git
cd nextjs-clerk-convex-starter
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env.local
```

Then fill in `.env.local`:
```env
# Convex
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CONVEX_SITE_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard

NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
```

> ⚠️ **Important — Convex + Clerk Integration**
>
> In your **Convex Dashboard → Settings → Environment Variables**, add:
>
> ```
> CLERK_JWT_ISSUER_DOMAIN=https://your-clerk-domain.clerk.accounts.dev
> ```

### 4. Run Convex
```bash
npx convex dev
```

### 5. Start the app
```bash
npm run dev
```

Visit → [http://localhost:3000](http://localhost:3000)

---

## 🔐 Auth Flow

| Route | Access |
|-------|--------|
| `/` | Public |
| `/sign-in`, `/sign-up` | Public |
| `/dashboard` | Protected |

Route protection is handled in `middleware.ts`.

---

## 🔄 User Sync

Users are automatically synced to Convex on sign-in. No manual setup required.

---

## 📦 Environment Variables

### `.env.local`

| Variable | Description |
|----------|-------------|
| `CONVEX_DEPLOYMENT` | Your Convex deployment slug |
| `NEXT_PUBLIC_CONVEX_URL` | Public Convex URL |
| `NEXT_PUBLIC_CONVEX_SITE_URL` | Public Convex site URL |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
| `CLERK_SECRET_KEY` | Clerk secret key |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | Path for the sign-in page |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | Path for the sign-up page |
| `NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL` | Always redirects here after sign-in |
| `NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL` | Always redirects here after sign-up |
| `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL` | Fallback redirect if no target after sign-in |
| `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL` | Fallback redirect if no target after sign-up |

### Convex Dashboard

| Variable | Description |
|----------|-------------|
| `CLERK_JWT_ISSUER_DOMAIN` | Your Clerk JWT issuer domain |

---

## 📝 License

[MIT](./LICENSE)
