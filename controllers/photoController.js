import { readPhotos, writeComment } from "../utils/helpers.js";

const getAllPhotos = (_req, res) => {
  try {
    const photos = readPhotos();
    res.json(photos);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getSinglePhoto = (req, res) => {
  try {
    const photos = readPhotos();

    const selectedPhoto = photos.find((photo) => photo.id === req.params.id);

    if (!selectedPhoto) {
      res
        .status(404)
        .send(`A photo with id ${req.params.id} could not be found`);
      return;
    }
    res.json(selectedPhoto);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getPhotoComments = (req, res) => {
  try {
    const photos = readPhotos();

    const selectedPhoto = photos.find((photo) => photo.id === req.params.id);

    res.status(200).json(selectedPhoto.comments);
  } catch (error) {
    res.status(500).send(error);
  }
};

const addNewComment = (req, res) => {
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
};

export { getAllPhotos, getSinglePhoto, getPhotoComments, addNewComment };
