require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWT_SECRET;
const User = require('../database/models/User');

//Validación de correo electrónico
function emailValidation(email) {
    var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,7}$/;
    return re.test(email);
};

const emailValid = async (req, res, next) => {
    const { email } = req.body;
    var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,7}$/;
    if (re.test(email)) {
        next();
    }
    else {
        res.status(400).json({ error: 'Email format incorrect' })
    }
}

//Validación de contraseña 
function passwordValidation(pass) {
    const capitalLetter = /[A-Z]/g;
    const lowercaseLetter = /[a-z]/g;
    const numberCharacter = /[0-9]/g;
    if (pass.match(capitalLetter) && pass.match(lowercaseLetter) && pass.match(numberCharacter) && pass.length >= 8) {
        return true;
    }
    else {
        return false;
    }
};

//Validación inicio de sesión 
// validación body login tenga valores 
const validarBodyLogin = (req, res, next) => {
    if (
      !req.body.email ||
      !req.body.password
    ) {
      res.status(400).json({
        error: "Faltan datos por suministrar",
      });
    } else {
      next();
    }
  };
  
  //verifica que el usuario exista en la base de datos
  const verificarLogin = async (req, res, next) => {
    const loginOk = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    });
  
    if (!loginOk) {
      res.status(400).json({
        error: "Usuario/correo incorrecto"
      })
    } else {
      next();
    }
  };


const jwtValidation = (req, res, next) => {
    const tokenCode = req.headers.authorization.split(' ')[1];
    jwt.verify(tokenCode, jwtKey, (err, decoded) => {
        if (err) {
            res.send('Acceso denegado, no estás autorizado')
        }
        req.userData = decoded;
        next();
    })
}

//Generación de nuevo token 

function newToken(email, isAdmin) {
    const payload = {
        user: email,
        admin: isAdmin
    }
    const token = jwt.sign(payload, jwtKey);
    return token
};



module.exports = {
    validarBodyLogin,
    verificarLogin,
    jwtValidation,
    emailValid
};