//Importar express
const express = require('express');

//Crear el router
const router = express.Router();

//Importar el archivo User.js
const User = require('../../models/User');

// GET en /api/users (todos los usuarios)
router.get('/users', (req, res) => {
  User.find((err, users) => {
    if (err) throw err;
    res.status(200).json(users);
  });
});

// GET en /api/user/id (un solo usuario con n id)
router.get('/user/:id', (req, res) => {
  User.findOne({ id: req.params.id }, (err, user) => {
    if (err) throw err;
    res.status(200).json(user);
  });
});

//Exportar el router para usarlo en index.js
module.exports = router;