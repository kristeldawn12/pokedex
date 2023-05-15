const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  type: [
    {
      type: String,
    },
  ],
  stats: {
    hp: {
      type: String,
    },
    attack: {
      type: String,
    },
    defense: {
      type: String,
    },
    spattack: {
      type: String,
    },
    spdefense: {
      type: String,
    },
    speed: {
      type: String,
    },
  },
  damages: {
    normal: {
      type: String,
    },
    fire: {
      type: String,
    },
    water: {
      type: String,
    },
    electric: {
      type: String,
    },
    grass: {
      type: String,
    },
    ice: {
      type: String,
    },
    fight: {
      type: String,
    },
    poison: {
      type: String,
    },
    ground: {
      type: String,
    },
    flying: {
      type: String,
    },
    psychic: {
      type: String,
    },
    bug: {
      type: String,
    },
    rock: {
      type: String,
    },
    ghost: {
      type: String,
    },
    dragon: {
      type: String,
    },
    dark: {
      type: String,
    },
    steel: {
      type: String,
    },
  },
  misc: {
    classification: {
      type: String,
    },
    height: {
      type: String,
    },
    weight: {
      type: String,
    },
    happiness: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
