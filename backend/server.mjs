import express from "express";
import noteRoute from "./routes/notesRoute.js";
import { connectDB } from "./config/connectDB.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

//route checker middleawre
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use("/api/notes", noteRoute);

//err handler
app.use((err, req, res, _) => {
  return res.status(400).send(err);
});

const PORT = process.env.PORT || 3999;

connectDB()
  .then(() =>
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://0.0.0.0:${PORT}`);
    })
  )
  .catch((err) => {
    console.error(err);
  });
