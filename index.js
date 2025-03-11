import express from "express";
import photosRoutes from "./routes/photos.js";
import { readPhotos } from "./utils/helpers.js";
import fs from "fs";
const app = express();
const port = 5050;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/photos", photosRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
