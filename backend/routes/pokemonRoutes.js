const express = require("express");
const router = express.Router();

const {
  getPokemon,
  setPokemon,
  updatePokemon,
  deletePokemon,
  limitPokemon,
  getPokemonbyName,
  getPokemonByType,
  getPokemonByLimitOffset,
} = require("../controller/pokemonController.js");

router.route("/pokemon").get(getPokemon).post(setPokemon);
router.route("/pokemon/:id").put(updatePokemon).delete(deletePokemon);
router.route("/pokemon/limit/:limit").get(limitPokemon);
router.route("/pokemon/name/:name").get(getPokemonbyName);
router.route("/pokemon/type/:type").get(getPokemonByType);
router.route("/pokemon/rate-limit").get(getPokemonByLimitOffset);

module.exports = router;
