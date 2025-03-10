import fs from "fs";

const readPhotos = () => {
  try {
    const photos = fs.readFileSync("./data/photos.json", "utf8");
    return JSON.parse(photos);
  } catch (error) {
    console.log("Error reading from file:", error);
  }
};

export { readPhotos };
