# 💸 ZenWallet - Wallet Tracker (MERN Stack + Dockerized)

ZenWallet is a full-stack wallet tracking app using **MongoDB**, **Express.js**, **React**, and **Node.js**, all containerized using **Docker Compose**. It allows users to log transactions and view spending in a clean, minimal interface.

---

## 📁 Project Structure

```
wallet-app/
├── backend/               # Node.js + Express API
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
├── frontend/              # React Frontend
│   ├── Dockerfile
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js
│       └── index.js
├── docker-compose.yml     # Manages all 3 services
```

---

## 🚀 Features

- Track your spending by adding transactions (title + amount)
- View all transactions
- Total is calculated automatically
- Stylish and aesthetic UI (Zen-themed)
- Dockerized frontend, backend, and MongoDB

---

## 🐳 Run the App using Docker Compose

> Prerequisite: Docker must be installed

### ✅ 1. Clone the Repository

```bash
git clone https://github.com/Zenvila/ZenWallet.git
cd wallet-app
```

### ✅ 2. Build and Start Containers

```bash
docker compose up --build
```

> This will build:
- `backend` (Node.js)
- `frontend` (React)
- `mongo` (MongoDB)

### ✅ 3. Access the App

- Frontend (React): [http://localhost:3001](http://localhost:3001)
- Backend (API): [http://localhost:3000](http://localhost:3000)

You can test the API directly:
```bash
curl http://localhost:3000/transactions
```

---

## 🛠 Useful Docker Commands

| Command                                 | Description                       |
|-----------------------------------------|-----------------------------------|
| `docker compose up --build`            | Build & start containers          |
| `docker compose up`                    | Start without rebuilding          |
| `docker compose down`                  | Stop and remove containers        |
| `docker compose ps`                    | Show running services             |
| `docker compose logs -f frontend`      | Watch frontend logs               |
| `docker compose logs -f backend`       | Watch backend logs                |

---

## 📦 Tech Stack

- **Frontend**: React (CRA), Axios
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB (Official Docker Image)
- **Containerization**: Docker, Docker Compose

---
## 👤 Author

**Haris (aka Zenvila)**  
📧 arainharis151@gmail.com  
🎓 BS Computer Science @ FAST  
💻 Passionate about Linux, SystemProgramming and Automation. 
🔗 GitHub: [github.com/zenvila](https://github.com/zenvila)

---

## 📜 License

This project is licensed under the MIT License. Feel free to use, modify, and share!
