import express from "express";
import {
  createNote,
  deleteNote,
  editNote,
  getNoteById,
  getNotes,
} from "../controllers/noteControllers.js";
import rateLimit from "express-rate-limit";

const noteRoute = express.Router();

const limiter = rateLimit({
  windowMs: 1000 * 10, // 15 minutes
  max: 5, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

noteRoute.get("/", limiter, getNotes);
noteRoute.get("/:id", getNoteById);
noteRoute.post("/", createNote);
noteRoute.put("/:id", editNote);
noteRoute.delete("/:id", deleteNote);

export default noteRoute;
