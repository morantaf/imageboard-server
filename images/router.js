const { Router } = require("express");
const Image = require("./model");

const router = new Router();

async function getImages(req, res, next) {
  try {
    const images = await Image.findAll();

    res.json(images);
  } catch (error) {
    next(error);
  }
}

router.get("/image", getImages);

module.exports = router;
