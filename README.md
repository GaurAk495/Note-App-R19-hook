# MERN Notes App

This project is a full-stack MERN (MongoDB, Express, React, Node.js) application for creating, editing, and managing notes. The frontend is built with React 19 and leverages all the latest advanced hooks and features. The backend provides a RESTful API for note management.

## Features

- **Frontend (React 19 + Vite + TypeScript):**

  - Uses advanced React 19 hooks: `useOptimistic`, `useActionState`, `useFormStatus`, `use`, and `useTransition`
  - Modern component structure with functional components
  - Routing and navigation
  - Error handling and rate limiting UI
  - Responsive design

- **Backend (Node.js + Express):**
  - MongoDB integration
  - RESTful API for notes
  - Controllers, models, and routes for clean architecture
  - Environment variable support

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd mern
   ```

2. **Backend setup:**

   ```bash
   cd backend
   npm install
   # Create a .env file with your MongoDB URI
   npm start
   ```

3. **Frontend setup:**

   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

4. **Access the app:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend: [http://localhost:5000](http://localhost:5000)

## Project Structure

```
mern/
  backend/
    controllers/
    models/
    routes/
    config/
    server.mjs
    package.json
  frontend/
    src/
      components/
      pages/
      config/
      utils/
    public/
    package.json
    vite.config.ts
```

## Advanced React 19 Hooks Used

- `useOptimistic`
- `useActionState`
- `useFormStatus`
- `use` (for async data fetching)
- `useTransition`
- Custom hooks for abstraction

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
