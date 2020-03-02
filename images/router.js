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

async function postImages(req, res, next) {
  try {
    const createImage = await Image.create(req.body);

    res.json(createImage);
  } catch (error) {
    next(error);
  }
}

router.get("/image", getImages);
router.post("/image", postImages);

module.exports = router;
