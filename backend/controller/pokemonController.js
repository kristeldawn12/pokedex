const asyncHandler = require("express-async-handler");

const Pokemon = require("../models/pokemonModel.js");

// Get pokemon
// @route GET /pokemon
const getPokemon = asyncHandler(async (req, res) => {
  const pokemons = await Pokemon.find().sort({ name: 1 });

  res.status(200).json(pokemons);
});

// GET limit pokemon using params
//  @route GET /pokemon/:limit
const limitPokemon = asyncHandler(async (req, res) => {
  const limit = parseInt(req.params.limit);

  if (isNaN(limit)) {
    res.status(400);
    throw new Error("Invalid limit parameter");
  }

  const pokemons = await Pokemon.find().limit(limit);

  res.status(200).json(pokemons);
});

// GET pokemon by pagination
// @route GET /pokemon?page=<number>&limit=<number>
const getPokemonByLimitOffset = asyncHandler(async (req, res) => {
  let limit = parseInt(req.query.limit);
  const offset = parseInt(req.query.skip);

  if (limit > 20) {
    limit = 20;
  }

  try {
    const pokemon = await Pokemon.find().limit(limit).skip(offset);
    const count = await Pokemon.countDocuments();

    const totalPage = Math.ceil(count / limit);
    const currentPage = Math.ceil(offset / limit) + 1;

    res.status(200).json({
      data: pokemon,
      paging: {
        total: count,
        page: currentPage,
        pages: totalPage,
      },
    });
  } catch (error) {
    next(error);
  }
});

// GET pokemon by name
// @route GET /pokemon/name/:name
const getPokemonbyName = asyncHandler(async (req, res) => {
  const pokemonName = req.params.name;
  const pokemon = await Pokemon.find({
    name: { $regex: new RegExp(pokemonName, "i") },
  });
  if (pokemon) {
    res.send(pokemon);
  } else {
    res
      .status(404)
      .send({ error: `Pokemon with name ${pokemonName} not found` });
  }
});

// GET pokemon by type
// @route GET /pokemon/type/:type
const getPokemonByType = asyncHandler(async (req, res) => {
  const pokemonType = req.params.type;
  const pokemon = await Pokemon.find({
    type: { $in: [new RegExp(pokemonType, "i")] },
  });
  if (pokemon.length > 0) {
    res.send(pokemon);
  } else {
    res
      .status(404)
      .send({ error: `Pokemon with type ${pokemonType} not found` });
  }
});

// Set pokemon
// @route POST /pokemon
const setPokemon = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const pokemon = await Pokemon.create({
    name: req.body.name,
    img: req.body.img,
    type: req.body.type,
    stats: req.body.stats,
    damages: req.body.damages,
    misc: req.body.misc,
  });

  res.status(200).json(pokemon);
});

// Update pokemon
// @route PUT /pokemon/:id
const updatePokemon = asyncHandler(async (req, res) => {
  const pokemon = await Pokemon.findById(req.params.id);

  if (!pokemon) {
    res.status(400);
    throw new Error("Pokemon not found");
  }

  const updatedPokemon = await Pokemon.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedPokemon);
});

// Delete pokemon
// @route DELETE /pokemon/:id
const deletePokemon = asyncHandler(async (req, res) => {
  const pokemon = await Pokemon.findById(req.params.id);

  if (!pokemon) {
    res.status(400);
    throw new Error("Pokemon not found");
  }

  await pokemon.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getPokemon,
  setPokemon,
  updatePokemon,
  deletePokemon,
  limitPokemon,
  getPokemonbyName,
  getPokemonByType,
  getPokemonByLimitOffset,
};
