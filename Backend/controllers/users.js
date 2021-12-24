const express = require('express');
const router = express.Router();
const expressJwt = require("express-jwt");
const JWT_SECRET = process.env.JWT_SECRET;
require('dotenv').config();
const {validarBodyLogin, verificarLogin, jwtValidation} = require('./middlewares');

router.use(
    expressJwt({
      secret: JWT_SECRET,
      algorithms: ["HS256"],
    }).unless({
      path: ["/login", "/register"]
    })
  );

//POST login de usuarios
router.post('/login', validarBodyLogin, verificarLogin, (req, res) => {
    const token = jwt.sign(
      {
        email: req.body.email,
        password: req.body.password,
      },
      JWT_SECRET,
      { expiresIn: "60m" }
    );
    res.status(200).json({ token });
  });

module.exports = router