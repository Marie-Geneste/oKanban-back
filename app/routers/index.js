// Imports generaux
const { Router } = require("express");

// Imports des differents routeurs
const cardRouter = require("./cardRouter");
const labelRouter = require("./labelRouter");
const listRouter = require("./listRouter");

// Création du router principal
const router = Router();

// On branches les sous routeurs
router.use(cardRouter);
router.use(labelRouter);
router.use(listRouter);


// On exporte le routeur principal
module.exports = router;
