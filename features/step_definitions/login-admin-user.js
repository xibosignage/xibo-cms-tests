module.exports = function () {

    this.World = require('../support/world.js');
    var PROPERTIES = require('../support/testproperties.json');
    var assert = require("assert");

    this.Then(/^I should see the dashboard$/, function (callback) {
        this.isVisible("li.sidebar-main", callback);
    });

    this.When(/^I press the login button$/, function (link, callback) {
        this.click("#login-form button", callback);
    });
};