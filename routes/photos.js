import express from "express";
import { readPhotos, writeComment } from "../utils/helpers.js";

const router = express.Router();

router.get("/", (_req, res) => {
  try {
    const photos = readPhotos();
    res.json(photos);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", (req, res) => {
  try {
    const photos = readPhotos();

    const selectedPhoto = photos.find((photo) => photo.id === req.params.id);

    res.json(selectedPhoto);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id/comments", (req, res) => {
  try {
    const photos = readPhotos();

    const selectedPhoto = photos.find((photo) => photo.id === req.params.id);

    res.status(200).json(selectedPhoto.comments);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/:id/comments", (req, res) => {
  const timestamp = new Date().getTime();

  try {
    if (!req.body.name || !req.body.comment) {
      return res.status(400).json({ msg: "Please include a name and comment" });
    }

    const newComment = {
      id: crypto.randomUUID(),
      name: req.body.name,
      comment: req.body.comment,
      timestamp: timestamp,
    };

    writeComment(newComment, req.params.id);

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
