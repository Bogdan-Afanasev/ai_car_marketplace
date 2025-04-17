# AI Car Marketplace

---

## Описание

**AI Car Marketplace** — это полнофункциональное маркетплейс-приложение для покупки, продажи и управления автомобилями.

---

## 🚀 Live Demo

<p align="center">
  <a href="https://ai-car-marketplace-rouge.vercel.app">
    <img src="https://img.shields.io/badge/-Live%20Demo-blue?style=for-the-badge" alt="Live Demo" />
  </a>
  <br />
  <a href="https://github.com/Bogdan-Afanasev/ai-car-marketplace">
    <img src="https://img.shields.io/github/stars/Bogdan-Afanasev/ai-car-marketplace?style=social" alt="GitHub stars" />
  </a>
</p>

---

## 🎞️ Demo (GIF)

### Admin Flow

![Admin Flow](./screenshots/admin-flow.gif)

### User Flow

![User Flow](./screenshots/user-flow.gif)

### AI Photo Search

![AI Search](./screenshots/ai-search.gif)

### Mobile View (Responsive)

![Mobile View](./screenshots/mobile--view.gif)

---

## 📸 Screenshots (Desktop)

### Главная страница

![Homepage](./screenshots/desktop_homepage.png)

### Все автомобили + фильтрация

![All Cars + Filters](./screenshots/desktop_all_cars_filters.png)

### Поиск по фото

![AI Search](./screenshots/desktop_ai_search.png)

### Просмотр автомобиля

![Single Car View](./screenshots/desktop_single_car_view.png)

### Добавление машины

![Add Car](./screenshots/desktop_add_car_ai_fill.png)

### Панель администратора

![Admin Panel](./screenshots/desktop_admin_panel.png)

### Dashboard

![Dashboard](./screenshots/desktop_dashboard.png)

---

## 📸 Screenshots (Mobile)

### Главная страница (адаптив)

![Mobile Homepage](./screenshots/mobile_homepage.png)

### Просмотр авто

![Mobile Car View](./screenshots/mobile_single_car.png)

### Профиль пользователя

![User Profile](./screenshots/mobile_user_profile.png)

---

## 🧪 Функциональность

- [x] Адаптивный UI
- [x] Авторизация и роли
- [x] Поиск автомобилей вручную и по фото (AI)
- [x] Заказ тест-драйвов и управление ими
- [x] Личный кабинет пользователя
- [x] Панель администратора (добавление, удаление машин, управление админами, рабочими часами)
- [x] Дашборд статистики
- [x] Умный подбор характеристик по изображению (для админов)

---

## ⚙️ Технологии

### Frontend

- React 19
- Next.js 14 / App Router
- Tailwind CSS + shadcn/ui
- TypeScript
- Zustand
- React Hook Form
- Clerk Auth
- UploadThing
- Framer Motion

### Backend & DB

- Supabase (PostgreSQL + Storage)
- Prisma ORM
- Convex Functions
- Gemini API (AI)
- Rate Limiting / Arcjet

### Tools

- Git / GitHub
- ESLint / Prettier
- Vercel (хостинг)
- Docker (dev)

---

## 🛠️ Установка и запуск

```bash
git clone https://github.com/Bogdan-Afanasev/ai-car-marketplace.git
cd ai-car-marketplace
npm install
npm run dev
```

## 🔐 .env переменные

Создайте `.env.local` файл и добавьте:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

DATABASE_URL=your_key
DIRECT_URL=your_key

ARCJET_KEY=your_key
ARCJET_ENV=your_key

GEMINI_API_KEY=your_key

NEXT_PUBLIC_SUPABASE_URL=your_key
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

---

## 🤝 Автор

[![avatar](https://avatars.githubusercontent.com/u/ВАШ_ID?s=64)](https://github.com/Bogdan-Afanasev)  
**Богдан Афанасьев** — Frontend Developer / Fullstack Enthusiast / Philosopher-in-Progress  
[GitHub](https://github.com/Bogdan-Afanasev) | [Telegram](https://t.me/your_tg) | [Email](mailto:bogdan.way.00@gmail.com)

---

## ⚖️ Лицензия

Этот проект создан исключительно в учебных целях. Все использованные API, стили и технологии принадлежат их соответствующим владельцам. Проект не предназначен для коммерческого использования.

---

Наслаждайтесь — и не забудьте ⭐ звезду, если вам понравилось!
