const config = require('../app/config');
const pokeneasService = require('../models/pokeneas');

const getAll = (req, res) => {
  const allPokeneas = pokeneasService.getAllPokeneas();
  res.json({ pokeneas: allPokeneas, containerId: config.containerId });
};

const getInfo = (req, res) => {
  const pokeneaInfo = pokeneasService.getRandomPokeneaInfo();
  res.json({ ...pokeneaInfo, containerId: config.containerId });
};

const getImageAndPhrase = (req, res) => {
  const pokeneaImageAndPhrase = pokeneasService.getRandomPokeneaImageAndPhrase();
  res.json({ ...pokeneaImageAndPhrase, containerId: config.containerId });
};

module.exports = { getInfo, getImageAndPhrase, getAll };