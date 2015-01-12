module.exports = function () {

    this.World = require('../support/world.js');
    var PROPERTIES = require('../support/testproperties.json');
    var assert = require("assert");

    /* "<Given> I visit <url>" */
    this.Given(/^I visit (.*)$/, function (url, callback) {

        if (url == "the Xibo CMS") {
            
            url = PROPERTIES.url;
            this
                .init()
                .url(url, callback);

            return;
        }
        else if ("the schedule")
            url = PROPERTIES.url + "?p=schedule";
        else
            url = PROPERTIES.url + url;

        this.url(url, callback);
    });

    /* "<Given>I am logged in as a <usertype>" */
    this.Given(/^I am logged in as a (.*)$/, function (userType, callback) {

        var username = "dan";
        var password = "dan";

        this.waitFor("#login-form", 3000, function (err, found) {

            if (!err) {
                this.setValue("#username", username);
                this.setValue("#password", password);
                this.click("#login-form button", callback);
                return;
            }

            callback.fail(new Error('Login form was not found after 3s'));
        });
    });

    /* "<When> I enter <text> into <inputId>" */
    this.When(/^I enter '(.*)' into '(.*)'$/, function (text, inputId, callback) {

        inputId = '#' + inputId;

        this.waitFor(inputId, 3000, function (err, found) {

            if (!err) {
                this.setValue(inputId, text, callback);
                return;
            }

            callback.fail(new Error('Element ' + inputId + ' was not found after 3s'));
        });
    });

    /* "<When> I press the <id> link" */
    this.When(/^I press the '(.*)' link$/, function (link, callback) {
        this.click("=" + link, callback);
    });

    /* "<When> I press the <id> button" */
    this.When(/^I press the '(.*)' button$/, function (link, callback) {
        this.click("#" + link, callback);
    });

    this.When(/^the '(.*)' form is visible$/, function (link, callback) {
        this.isVisible("#" + link, callback);
    });

    this.Then(/^the '(.*)' is visible$/, function (link, callback) {
        this.isVisible("#" + link, callback);
    });

    /* "<Then>I should see the dialog titled <title>" */
    this.Then(/^I should see the dialog titled '(.*)'$/, function (title, callback) {
        
        this.waitFor("h4.modal-title", 5000, function (err, found) {

            if (!err) {
                this.getText("h4.modal-title", function (err, result) {

                    assert.equal(result, title, "Cannot find " + title + " form.");
                });
                this.call(callback);
                return;
            }

            callback.fail(new Error('A form was not found after 3s'));
        });
    });
};