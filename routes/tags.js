import express from "express";
import { readTags } from "../utils/helpers.js";

const router = express.Router();

router.get("/", (req, res) => {
  const tags = readTags();

  res.status(200).json(tags);
});

export default router;
