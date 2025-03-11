import express from "express";
import { readPhotos, writeComment } from "../utils/helpers.js";

const router = express.Router();

router.get("/", (req, res) => {
  const photos = readPhotos();
  res.status(200).json(photos);
});

router.get("/:id", (req, res) => {
  const photos = readPhotos();

  const selectedPhoto = photos.find((photo) => photo.id === req.params.id);
  res.status(200).json(selectedPhoto);
});

router.get("/:id/comments", (req, res) => {
  const photos = readPhotos();

  const selectedPhoto = photos.find((photo) => photo.id === req.params.id);
  res.status(200).json(selectedPhoto.comments);
});

router.post("/:id/comments", (req, res) => {
  const timestamp = new Date().getTime();

  if (!req.body.name || !req.body.comment) {
    return res
      .status(400)
      .send({ message: "Please include a name and comment" });
  }

  const newComment = {
    id: crypto.randomUUID(),
    name: req.body.name,
    comment: req.body.comment,
    timestamp: timestamp,
  };

  writeComment(newComment, req.params.id);

  res.status(201).json(newComment);
});

export default router;
