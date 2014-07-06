var Controller = require('../classes/controller');
var Router = require('./router');
var View = require('./view');

module.exports = Controller.extend({
  initialize: function (options) {
    this.container = options.container;
    this.router = new Router({ controller: this });
  },

  index: function () {
    this.view = new View();
    this.container.show(this.view);
  }
});
