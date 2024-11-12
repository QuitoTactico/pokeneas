const config = require('../app/config');

const getHome = (_, res) => {
    const viewData = {
        baseUrl: config.baseUrl,
        port: config.port
    };
    res.render('home/home', viewData);
};

module.exports = { getHome };