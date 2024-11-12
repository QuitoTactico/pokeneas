const config = require('../app/config');
const pokeneasTable = require('../db/pokeneasTable');

/* Pokeneas table attributes
{
    id: number;
    name: string;
    height: string;
    ability: string;
    image: string;
    philosophicalPhrase: string;
}
*/

const getAllPokeneas = () => {
    return pokeneasTable.pokeneas;
};

const getRandomPokeneaInfo = () => {
    const randomIndex = Math.floor(Math.random() * pokeneasTable.pokeneas.length);
    const { id, name, height, ability } = pokeneasTable.pokeneas[randomIndex];
    return { id, name, height, ability };
};

const getRandomPokeneaImageAndPhrase = () => {
    const randomIndex = Math.floor(Math.random() * pokeneasTable.pokeneas.length);
    const { image, philosophicalPhrase } = pokeneasTable.pokeneas[randomIndex];
    const fullImageUrl = `${config.s3BucketUrl}/${image}`;
    return { image: fullImageUrl, philosophicalPhrase };
};

module.exports = { getAllPokeneas, getRandomPokeneaInfo, getRandomPokeneaImageAndPhrase };