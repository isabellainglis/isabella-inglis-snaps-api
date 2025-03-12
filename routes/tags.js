import express from "express";
import { readTags } from "../utils/helpers.js";

const router = express.Router();

router.get("/", (_req, res) => {
  try {
    const tags = readTags();

    res.json(tags);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
