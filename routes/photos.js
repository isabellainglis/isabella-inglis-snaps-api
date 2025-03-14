import express from "express";

import {
  addNewComment,
  getAllPhotos,
  getPhotoComments,
  getSinglePhoto,
} from "../controllers/photoController.js";

const router = express.Router();

router.get("/", getAllPhotos);

router.get("/:id", getSinglePhoto);

router.get("/:id/comments", getPhotoComments);

router.post("/:id/comments", addNewComment);

export default router;
