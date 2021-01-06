'use strict';
module.exports = function (app) {
    var controllers = require('../controllers/fileControllers');
    app.route('/upload')
        .post(controllers.uploadFile);
    app.get('/', function (request, response) {
        response.render('upload.ejs');

    });
    app.route('/rename')
       .post(controllers.renameFile);
    app.route('/delete')
        .post(controllers.deleteFile);
};