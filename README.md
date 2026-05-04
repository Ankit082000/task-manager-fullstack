# 🚀 Task Manager Full Stack App

## 🔧 Tech Stack
- Backend: Spring Boot (Java)
- Frontend: React
- Database: PostgreSQL
- Authentication: Basic Auth

---

## 📌 Features
- Login (Basic Authentication)
- Add Task
- View All Tasks
- Mark Task Complete / Incomplete
- Delete Task

---

## ⚙️ How to Run Project

### 1️⃣ Clone Repository
git clone https://github.com/Ankit082000/task-manager-fullstack.git

---

### 2️⃣ Backend Setup

- Open backend folder in IDE
- Configure `application.yml`:

```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/taskapp
    username: postgres
    password: your_password

  security:
    user:
      name: admin
      password: 1234
