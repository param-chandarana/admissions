
# MERN Stack Admissions Management and Offer Letter Generation System

A full-stack **MERN (MongoDB, Express.js, React, Node.js)** web application designed to manage student admissions and generate offer letters in dynamic PDF format.

## Key Features

### Student Management
- Add new student records with academic and personal details
- View all students in a table with **search and filter options**
- Download **automatically generated PDF offer letters** with populated student data using `react-pdf`

### Course Management
- Add and manage multiple course offerings
- View courses with **filtering capabilities** for easier navigation

### Offer Letter Generation
- Each student has a downloadable **Offer Letter in PDF**
- PDF uses a predefined **offer letter format** with live student data populated dynamically
- Styled and rendered using **`@react-pdf/renderer`**

### Authentication
- Simple admin login system
- **Default credentials**:
  - Email: `admin@email.com`
  - Password: `admin`

## Tech Stack

| Layer         | Technology           |
|---------------|----------------------|
| Frontend      | React, Redux-toolkit, React Router, Bootstrap |
| PDF Generation| @react-pdf/renderer  |
| Backend       | Node.js, Express.js  |
| Database      | MongoDB              |
| Authentication| JWT                  |

## Getting Started

### Prerequisites
- Node.js & npm
- MongoDB (local or cloud instance)

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/admissions-mern-app.git
cd admissions-mern-app
```

#### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```

Configure the `.env` file with the following variables:
```env
PORT=8000
CORS_ORIGIN=your_frontend_url
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development/production
```

Change your database name in the `constants.js` file:

#### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run start
```

The frontend will run at `http://localhost:3000` and connect to the backend server.

## 📂 Project Structure (Simplified)

```
.
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── app.js
│   │   ├── constants.js
│   │   └── index.js
│   ├── .env
│   ├── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── slices/                
│   │   └── App.css
│   │   └── App.jsx
│   │   └── index.js
│   │   └── store.js
│   │   └── ...
│   ├── ...
└── README.md
```

## Features in Detail

- Filter and search students/courses
- Add/edit/delete functionality for both modules
- PDF download button for each student record

## Authentication

This project includes basic authentication for admin access.

**Login Credentials (Default):**
```txt
Email:    admin@email.com
Password: admin
```

## Future Enhancements

- Role-based authentication (admin, staff, etc.)
- Email integration to send offer letters
- Activity logs and audit trails

---

*Built for institutions to simplify the student admission process with automation and clarity.*
