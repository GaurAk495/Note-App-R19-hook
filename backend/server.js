import express from "express";
import noteRoute from "./routes/notesRoute.js";
import { connectDB } from "./config/connectDB.js";
import "dotenv/config";
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
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    })
  )
  .catch((err) => {
    console.error(err);
  });
