const { pokeneas } = require('../db/pokeneas');

const getInfo = (req, res) => {
    res.send('info');
};

const getImage = (req, res) => {
    res.send('image');
};

module.exports = { getInfo, getImage };