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
    const fullResponse = { ...req.body, userId: req.user.dataValues.id };
    const createImage = await Image.create(fullResponse);
    res.json(createImage);
  } catch (error) {
    next(error);
  }
}

async function deleteImage(req, res, next) {
  try {
    const imageToDelete = await Image.destroy({ where: { id: req.body.id } });
    res.json(imageToDelete);
  } catch (error) {
    next(error);
  }
}

async function getImagesByUser(req, res, next) {
  try {
    const imagesByUser = await Image.findAll({
      where: { userId: req.params.id }
    });
    res.json(imagesByUser);
  } catch (error) {
    next(error);
  }
}

async function updateImage(req, res, next) {
  try {
    const image = await Image.findByPk(req.params.id);
    const updatedImage = await image.update(req.body);

    res.json(updatedImage);
  } catch (error) {
    next(error);
  }
}

router.get("/images", getImages);
router.post("/images", auth, postImages);
router.delete("/images", auth, deleteImage);
router.get("/images/user/:id", getImagesByUser);
router.put("/images/:id", updateImage);
module.exports = router;
