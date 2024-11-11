const config = require('../app/config');
const pokeneasTable = require('../db/pokeneasTable');

const getAllPokeneas = () => {
  return pokeneasTable.pokeneas;
};

const getRandomPokeneaInfo = () => {
  const randomIndex = Math.floor(Math.random() * pokeneasTable.pokeneas.length);
  const { id, nombre, altura, habilidad } = pokeneasTable.pokeneas[randomIndex];
  return { id, nombre, altura, habilidad };
};

const getRandomPokeneaImageAndPhrase = () => {
  const randomIndex = Math.floor(Math.random() * pokeneasTable.pokeneas.length);
  const { imagen, fraseFilosofica } = pokeneasTable.pokeneas[randomIndex];
  const fullImageUrl = `${config.s3BucketUrl}/${imagen}`;
  return { imagen: fullImageUrl, fraseFilosofica };
};

module.exports = { getAllPokeneas, getRandomPokeneaInfo, getRandomPokeneaImageAndPhrase };