const { Router } = require("express");
const Image = require("./model");
const auth = require("../auth/middleware");

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
    // const auth =
    // req.headers.authorization && req.headers.authorization.split(" ");
    // const userId = toData(auth[1]).user;
    const fullResponse = { ...req.body, userId: req.user.dataValues.id };
    const createImage = await Image.create(fullResponse);
    res.json(createImage);
  } catch (error) {
    next(error);
  }
}

router.get("/images", getImages);
router.post("/images", auth, postImages);

module.exports = router;
