'use strict';

module.exports = function (app) {
  var todoList = require('../controllers/baileysController');
  // app.route('/baileys').get(todoList.connectToWhatsApp); 
  app.route('/baileys').post(todoList.sendMessage);
};
