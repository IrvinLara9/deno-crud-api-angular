# Backend - Deno API

This is the **Deno backend** for the Fruit Management App. It provides RESTful APIs to manage fruits using **Deno + Oak** framework and MongoDB as the database.

## 🔧 Tech Stack
- **Deno v2.1.9**: Runtime
- **Oak Oak v17.1.4**: Middleware framework
- **MongoDB v8.0.4**: Database
- **Docker v27.4.0**: Containerization

---

## 🚀 Setup and Run

### **1️⃣ Install Deno**
[Follow the installation guide](https://deno.land/manual/getting_started/installation).

### **2️⃣ Start MongoDB at the root of the project** (optional)
Ensure you have [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/) installed.
```sh
cd ..
docker-compose up
```

### **3️⃣ Install Dependencies**
No need! Deno uses imports directly.

### **4️⃣ Run the Server**
```sh
deno task start
```

Or in **development mode**:
```sh
deno task dev
```

---

## 📂 API Endpoints

### **Get All Fruits**
```
GET /api/fruits
```

### **Get a Fruit by ID**
```
GET /api/fruits/:id
```

### **Create a Fruit**
```
POST /api/fruits
```
**Body:**
```json
{
  "name": "Apple",
  "color": "Red",
  "price": 1.5
}
```

### **Update a Fruit**
```
PUT /api/fruits/:id
```

### **Delete a Fruit**
```
DELETE /api/fruits/:id
```

---

## 🛠️ Environment Variables
Create a `.env` file in the `backend/` directory:
```sh
MONGO_URI="mymongoURI"
MONGO_USER="myuser"
MONGO_PASSWORD="mypassword"
MONGO_DB_NAME="mymongodbname"
```


