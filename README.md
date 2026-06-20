# Task Manager

A production-ready, enterprise-grade task management application with AI-powered task assignment using React frontend and Firebase backend.

## 🎯 Key Improvements in This Refactor

### Architecture Enhancements
- **Clean folder structure** with separation of concerns
- **TypeScript types** for better type safety
- **Service layer** abstraction for Firebase operations
- **Reusable components** with proper encapsulation
- **Configuration management** with environment variables
- **Utility functions** for common operations

### Code Quality
- **Modular design** with single responsibility principle
- **Consistent naming conventions** throughout the codebase
- **Reduced code duplication** with shared utilities
- **Better error handling** and validation
- **Performance optimizations** with proper React patterns

### UI/UX Improvements
- **Modern design** with gradient backgrounds
- **Smooth animations** and transitions
- **Responsive layout** for all screen sizes
- **Accessible components** with ARIA labels
- **Professional color palette** and typography

## 📁 Project Structure

```
frontend/
├── public/                 # Static files
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Notification/
│   │   ├── StatsCard/
│   │   ├── Modal/
│   │   ├── TaskCard/
│   │   └── EmployeeCard/
│   ├── pages/            # Page components
│   │   ├── LandingPage/
│   │   ├── ManagerDashboard/
│   │   └── EmployeeDashboard/
│   ├── layouts/          # Layout components
│   ├── hooks/            # Custom React hooks
│   ├── services/         # API and business logic
│   │   ├── aiService.ts
│   │   └── firebaseService.ts
│   ├── context/          # React context providers
│   │   └── AuthContext.tsx
│   ├── utils/            # Helper functions
│   │   └── helpers.ts
│   ├── config/           # Configuration files
│   │   ├── firebase.ts
│   │   └── constants.ts
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   ├── styles/           # Global styles
│   │   └── global.css
│   ├── App.tsx           # Main app component
│   └── index.tsx         # Entry point
├── .env                  # Environment variables
├── package.json
└── tsconfig.json
```

## 🚀 Features

### Manager Role
- Add team members with skills and roles
- Create tasks with AI-powered assignment
- View team performance metrics
- Track task completion and deadlines
- Auto-detect developer roles from skills

### Employee Role
- View assigned tasks based on skills
- Complete tasks and log actual hours
- Performance tracking with skill expertise
- Priority-based task ordering
- Learning task identification

### AI Integration
- Groq LLaMA 3 70B for intelligent task assignment
- Automatic skill inference from task descriptions
- Smart task subdivision into logical subtasks
- Employee workload balancing
- Performance-based assignment optimization

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 16+ installed
- Firebase account with Firestore enabled
- Groq API key (free tier available)

### Installation

1. **Navigate to frontend directory:**
   ```bash
   cd "Task Manager/frontend"
   npm install
   ```

2. **Configure environment variables:**
   Update `.env` file with your credentials:
   ```
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_GROQ_API_KEY=your_groq_api_key
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project at https://console.firebase.google.com
2. Enable Authentication (Email/Password)
3. Enable Firestore Database
4. Copy configuration to `.env` file

### Groq API Setup
1. Sign up at https://console.groq.com
2. Generate API key
3. Add to `.env` file

## 📊 Key Technologies

- **Frontend:** React 19, TypeScript
- **Styling:** CSS3 with modern features
- **State Management:** React Context API
- **Routing:** React Router v7
- **Backend:** Firebase (Auth + Firestore)
- **AI:** Groq LLaMA 3 70B
- **Build Tool:** Create React App

