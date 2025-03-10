import express from "express";
import { readPhotos } from "../utils/helpers.js";

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

export default router;
