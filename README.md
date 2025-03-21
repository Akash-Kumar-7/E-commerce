# React & Firebase E-Commerce App

## Project Overview
This is a full-stack e-commerce application built using **React** for the frontend and **Firebase** for backend services. The application provides role-based access where:
- **Admin** can create, edit, and delete products.
- **Normal Users** can browse, order products, and manage their profiles.

The project is deployed on **Vercel**, and the source code is published on **GitHub**.

---

## Features
### Admin Features
- Add new products
- Edit existing products
- Delete products
- Manage orders (optional if implemented)

### User Features
- View and browse products
- Order products
- Manage personal profile

---

## Tech Stack
- **Frontend**: React, React Router, TailwindCSS (or your chosen CSS framework)
- **Backend**: Firebase (Firestore for database, Firebase Auth for authentication, Firebase Storage for images)
- **Deployment**: Vercel
- **Version Control**: GitHub

---

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Firebase Configuration
- Go to **Firebase Console** and create a new project.
- Enable **Authentication** (Google, Email/Password, etc.).
- Create a **Firestore Database** and configure rules.
- Enable **Firebase Storage** for product images.
- Get your Firebase config and create a `.env` file in the root directory:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### 4. Start the Development Server
```bash
npm start
```

---

## Deployment

### Deploy on Vercel
1. Install Vercel CLI (if not installed):
   ```bash
   npm install -g vercel
   ```
2. Login to Vercel:
   ```bash
   vercel login
   ```
3. Deploy the project:
   ```bash
   vercel
   ```
4. Follow the on-screen instructions to complete deployment.

Alternatively, you can connect your GitHub repository to Vercel and deploy directly from the dashboard.

---

## Live Demo
[Your Vercel Deployment Link](https://e-commerce-six-pearl-34.vercel.app)

## Contributing
Feel free to fork the repository and submit pull requests!
