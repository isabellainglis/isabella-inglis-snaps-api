import express from "express";
import "dotenv/config";
import photosRoutes from "./routes/photos.js";
import tagsRoutes from "./routes/tags.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_BASE_URL }));
app.use(express.static("public"));

app.use("/photos", photosRoutes);
app.use("/tags", tagsRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
