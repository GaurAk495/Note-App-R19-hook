// src/App.jsx
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import RateLimit from "./pages/RateLimit";
import Headers from "./components/Headers";
import CreateNote from "./pages/CreateNote";
import { Toaster } from "react-hot-toast";
import EditNote from "./pages/EditNotes";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Headers />

      <div className="relative min-h-[calc(100vh_-_72px)] w-full bg-slate-950 overflow-hidden ">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
        {/* </div>

      <div className="relative min-h-[calc(100vh_-_72px)] bg-base-100 py-8 px-4 sm:px-6 overflow-hidden"> */}

        {/* <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(125%_125%_at_50%_0%,_transparent,_var(--color-base-100)_70%,_var(--color-primary))]" /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addnote" element={<CreateNote />} />
          <Route path="/editnote/:id" element={<EditNote />} />
          <Route path="/rate-limit" element={<RateLimit />} />
          {/* 404 Route - should be LAST */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}
