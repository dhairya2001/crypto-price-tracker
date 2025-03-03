# 🚀 Crypto Price Tracker

A simple and responsive **Crypto Price Tracker** built with **Next.js (Pages Router)** for the web app and **Docusaurus** for documentation.

## 📌 Features
- 📊 **Live Crypto Prices** from CoinCap API
- 🔄 **Auto Refresh & Manual Refresh**
- 🔎 **Search Crypto by Name**
- 💰 **Multi-Currency Support (USD, EUR, GBP)**
- 🎨 **Responsive UI for Mobile & Desktop**
- 💜 **Complete Documentation with Docusaurus**

---

## 🛠 Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/dhairya2001/crypto-price-tracker.git
cd crypto-price-tracker
```

### 2️⃣ Install Dependencies
```sh
# Install dependencies for both the web app and docs
cd web-app && npm install
cd ../docs && npm install
```

---

## 🚀 Running the Project

### ▶️ Start Web App (Next.js)
```sh
cd web-app
npm run dev
```
- Open **`http://localhost:3000`** to view the web app.

### ▶️ Start Documentation (Docusaurus)
```sh
cd docs
npm run start
```
- Open **`http://localhost:3000/docs`** to view the documentation.

---

## 🌍 Deployment

### 🔹 Deploy Next.js Web App on Vercel
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Run Vercel Deployment:
   ```sh
   cd web-app
   vercel
   ```
3. Follow the terminal instructions and deploy your app.

### 🔹 Deploy Docusaurus Docs on Vercel
1. Add **`"homepage": "/"`** in `docs/package.json`.
2. Deploy with Vercel:
   ```sh
   cd docs
   vercel
   ```

---

## 🐞 Troubleshooting

### 1️⃣ Fixing Docusaurus Deployment Error
If you get **"Broken links"** during build:
- Open `docusaurus.config.js` and update:
  ```js
  module.exports = {
    onBrokenLinks: "warn",  // Change from "throw" to "warn"
  };
  ```
- Run `npm run build` again.

### 2️⃣ Fixing Next.js Build Error
If you see `Could not find a production build`:
```sh
cd web-app
npm run build
npm start
```

---

## 📝 License
This project is licensed under the MIT License.

---

### Made with ❤️ by Dhairya 🚀

