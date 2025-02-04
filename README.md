# Fruit Management App 🍏🍓🍊

This is a **CRUD application** for managing fruits, built with **Deno 2**, **Angular 19**, and **MongoDB 8**.  

## 📌 Features
- **Create, Read, Update, and Delete (CRUD)** fruits  
- **Deno + Oak** for backend  
- **Angular** for frontend  
- **MongoDB** for database  
- **Docker support** for local MongoDB easy setup  

## 🛠️ Tech Stack
- Backend: [Deno v2.1.9](https://deno.land/) + [Oak v17.1.4](https://oakserver.github.io/)  
- Frontend: [Angular v19.1.5](https://angular.io/)  
- Database: [MongoDB v8.0.4](https://www.mongodb.com/)  
- Containerization: [Docker v27.4.0](https://www.docker.com/)  

---

## 🚀 How to Run the Project

### **1️⃣ Run with Docker Compose** (optional)
Ensure you have [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

Edit these values in the docker-compose.yml file to set your MongoDB user and password:
```sh
MONGO_INITDB_ROOT_USERNAME= root
MONGO_INITDB_ROOT_PASSWORD= mypassword
```
```sh
docker-compose up -d
```
This will start MongoDB in a Docker container. Then, start the **backend** and **frontend** manually.

### **2️⃣ Start Backend**
```sh
cd backend
deno task start
```

### **3️⃣ Start Frontend**
```sh
cd frontend
npm install
npm start
```

---

## 💂️ Project Structure
```
/project-root
 ├── backend/     # Deno API
 ├── frontend/    # Angular frontend
 ├── docker-compose.yml     # Mongo DB
 ├── README.md
```

🔹 For more details, check the **backend** and **frontend** `README.md` files.

