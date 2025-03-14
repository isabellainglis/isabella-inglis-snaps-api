import { readTags } from "../utils/helpers.js";

const getAllTags = (_req, res) => {
  try {
    const tags = readTags();

    res.json(tags);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getAllTags };
