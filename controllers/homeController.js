const config = require('../app/config');

const getHome = (req, res) => {
    const viewData = {
        baseUrl: config.baseUrl,
        port: config.port
    };
    res.render('home/home', viewData);
};

module.exports = { getHome };