import fs from "fs";

const readPhotos = () => {
  try {
    const photos = fs.readFileSync("./data/photos.json", "utf8");
    return JSON.parse(photos);
  } catch (error) {
    console.log("Error reading from file:", error);
  }
};

const writeComment = (comment, photoId) => {
  try {
    const photosArr = readPhotos();

    const selectedPhoto = photosArr.find((photo) => photo.id === photoId);

    selectedPhoto.comments.push(comment);

    fs.writeFileSync("./data/photos.json", JSON.stringify(photosArr));
  } catch (error) {
    console.log("Error adding comment:", error);
  }
};

const readTags = () => {
  try {
    const tags = fs.readFileSync("./data/tags.json", "utf8");
    return JSON.parse(tags);
  } catch (error) {
    console.log("Error fetching tags:", error);
  }
};

export { readPhotos, writeComment, readTags };
