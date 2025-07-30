# 🔐 Google OAuth2 Authentication with Express, Sequelize, and MySQL

This project implements Google OAuth2 login using **Express.js**, **Passport.js**, **Sequelize**, and **MySQL**. It allows users to authenticate with their Google account and saves their profile info in a MySQL database.

---

## 📦 Technologies Used

- **Node.js** with Express.js
- **Passport.js** with `passport-google-oauth20`
- **Sequelize** ORM
- **MySQL** database
- **dotenv** for environment variables
- **express-session** for session management

---

## ✨ Features

- Login with Google (OAuth 2.0)
- Saves user info (Google ID, email, name) to MySQL
- Session-based authentication using Passport
- Secure `.env`-based configuration
- Minimal, clean folder structure

---

## 📁 Project Structure
- Create a .env file and set environtment variables as given in the env example.
- Create a config.json to set database credentials.
## 🚀 Run Project
- Run npm install to install the dependencies.
- Run npm start and navigate to http://localhost:(your port)
- Click on login with google, choose your google account and click continue, you will be logged in and redirect to confirmation page.

