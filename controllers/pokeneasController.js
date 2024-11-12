const config = require('../app/config');
const pokeneasService = require('../models/pokeneas');

const getAll = (_, res) => {
    const allPokeneas = pokeneasService.getAllPokeneas();
    res.json({ pokeneas: allPokeneas, containerId: config.containerId });
};

const getInfo = (_, res) => {
    const pokeneaInfo = pokeneasService.getRandomPokeneaInfo();
    res.json({ ...pokeneaInfo, containerId: config.containerId });
};

const getImageAndPhrase = (_, res) => {
    const pokeneaImageAndPhrase = pokeneasService.getRandomPokeneaImageAndPhrase();
    const viewData = {
        image: pokeneaImageAndPhrase.image,
        philosophicalPhrase: pokeneaImageAndPhrase.philosophicalPhrase,
        containerId: config.containerId
    };
    res.render('pokeneas/imageAndPhrase', viewData);
};

module.exports = { getInfo, getImageAndPhrase, getAll };