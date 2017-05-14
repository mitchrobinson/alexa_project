'use strict';
var Alexa = require("alexa-sdk");
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.appId = "amzn1.ask.skill.33384b6e-9357-4e16-8a13-3a901c694401";
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit(':tell','Welcome to the Human Assistant.  I am here to help. ... Maybe.');
    },
    'HelloWorldIntent': function () {
        this.emit(':tell','What is good?')
    },
    'Unhandled': function() {
        this.emit(':ask', 'You silly, I did not understand that');
    }
};
