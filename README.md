# Furniro

![Badge Status](http://img.shields.io/static/v1?label=STATUS&message=FINISH&color=GREEN&style=for-the-badge)

This project is a marketplace application developed for Compass Uol Front-end internship program.

## Overview

Furniro allows users to search for furniture, with the JSON server to fetch furniture. The user can log in with a Gmail account or access with the email and password that is in the topic Getting Started for checking out your purchases in the cart. The project can also be accessed at [Furniro](https://furniro-marketplace.vercel.app/).

## 🔨 Features

- Login with Gmail or fixed user
- 60 products mocked
- Filter by category
- Possibility to add to cart and make the checkout of furniture
- Responsive design for optimal viewing on various devices
- Form of checkout page with validation and connection with ViaCep
- Block user that is not authenticated on pages cart and checkout

## ✔️ Technologies Used

### Main Technologies

- `React.js`
- `TypeScript`
- `Redux.js`
- `Tailwind CSS`
- `Vite`
- `React Router DOM`
- `Splide`
- `JSON-Server`
- `React Hook Form`
- `Zod`
- `Firebase`
- `React Firebase Hooks`
- `React Icons`

### Testing Tools

- `Vitest`
- `Jest`
- `Testing Library`
- `history`
- `Redux Mock Store`

## 🛠️ Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Vini0100/Furniro-marketplace.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Firebase:
   - Go to [Firebase Console](https://firebase.google.com/?hl=pt-br) and create a new project.
   - After creating the project, generate your Firebase credentials and add them to a new .env file in your project root with the following variables:

   ```bash
   VITE_FIREBASE_API_KEY=
   VITE_FIREBASE_AUTH_DOMAIN=
   VITE_FIREBASE_PROJECT_ID=
   VITE_FIREBASE_STORAGE_BUCKET=
   VITE_FIREBASE_MESSAGING_SENDER_ID=
   VITE_FIREBASE_APP_ID=
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit http://localhost:5173 to view the application.

5. On the login page, you can log in with Gmail or:

- Email: test@test.com
- Password: 123456

## 🧪 Testing

To run the tests for the project, use the following commands:

- Run tests:

  ```bash
  npm run test
  ```

- Run tests with coverage report:

  ```bash
  npm run coverage
  ```

# Author 👨‍💻

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/126361791?v=4" width=115><br><sub>Vinícius Andrade Gonzato</sub>](https://github.com/Vini0100) |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: |
