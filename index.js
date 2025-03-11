import express from "express";
import photosRoutes from "./routes/photos.js";
import tagsRoutes from "./routes/tags.js";
const app = express();
const port = 5050;
import cors from "cors";

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/photos", photosRoutes);
app.use("/tags", tagsRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
