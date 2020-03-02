const { Router } = require("express");
const bcrypt = require("bcrypt");
const User = require("./model");

const router = new Router();

async function createUser(request, response, next) {
  try {
    if (!request.body.email || !request.body.password) {
      response.status(400).send("Please enter a valid e-mail and password");
    } else {
      const user = {
        email: request.body.email,
        password: bcrypt.hashSync(request.body.password, 10)
      };
      const createUser = await User.create(user);
      response.json(createUser);
    }
  } catch (error) {
    next(error);
  }
}

router.post("/user", createUser);

module.exports = router;
