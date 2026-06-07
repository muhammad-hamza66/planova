# Planova - Task Management System

Planova is a full-stack **MERN (MongoDB, Express, React, Node.js)** web application built for efficient team task management. It allows users to register, manage their daily tasks, collaborate, and track project progress through a modern dashboard.

## 🚀 Key Features

* **User Authentication & Authorization**: Secure JWT-based login/registration. Role-based access control (Admin & Member).
* **Task Management**: Create, update, assign, and delete tasks.
* **Task Details**: Set task priorities (Low, Medium, High), statuses (Pending, In Progress, Completed), and due dates.
* **Collaboration**: Assign tasks to specific users. Add todo checklists and file attachments to tasks.
* **Progress Tracking**: Track the completion percentage of tasks.
* **Data Export & Reporting**: Admins can export Task Reports and User Activity Reports directly to Excel `.xlsx` files.
* **Modern UI**: Fully responsive, sleek frontend built with Vite, React, and TailwindCSS. Data visualization using Recharts.

## 🛠️ Technology Stack

### Frontend (Client)
* **Framework**: React 19 + Vite
* **Styling**: Tailwind CSS
* **Routing**: React Router DOM
* **HTTP Client**: Axios
* **Charts**: Recharts
* **Icons & Notifications**: React Icons, React Hot Toast

### Backend (Server)
* **Environment**: Node.js & Express.js
* **Database**: MongoDB (via Mongoose)
* **Authentication**: JSON Web Tokens (JWT) & bcryptjs
* **File Uploads**: Multer
* **Reporting/Export**: ExcelJS

---

## 🏗️ Project Structure

The project is split into two main directories:

* `/Backend` - Contains the Express.js server, MongoDB models, controllers, and API routes.
* `/Client` - Contains the Vite/React frontend application.

---

## ⚙️ How It Works (Workflow)

1. **User Onboarding**: Users register for an account. By default they are members. Admins can invite or manage members.
2. **Dashboard**: Upon login, users see a dashboard displaying their assigned tasks, overall task progress, and statistics (powered by Recharts).
3. **Task Lifecycle**: 
   - A user or admin creates a new task.
   - They define a title, description, due date, priority, and assign it to one or more members.
   - Members can update the task's status from "Pending" to "In Progress" and eventually "Completed".
   - Checklists can be ticked off, and progress automatically updates.
4. **Reporting**: Admins can visit the Reports section to generate and download Excel files detailing either all tasks in the system or individual user performance metrics (total assigned, pending, completed).

---

## 💻 Getting Started (Local Development)

### 1. Prerequisites
* Node.js installed
* A MongoDB instance (Local or Atlas)

### 2. Setup the Backend
1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Backend` directory and add the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_key
   PORT=8000
   ADMIN_INVITE_TOKEN=your_invite_token
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### 3. Setup the Frontend
1. Navigate to the client directory:
   ```bash
   cd Client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Client` directory:
   ```env
   VITE_API_URL=http://localhost:8000/api
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```

### 4. View the App
Open your browser and navigate to `http://localhost:5173`.
