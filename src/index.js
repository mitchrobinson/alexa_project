"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alexa = require("alexa-sdk");
var handlers = {
    "AboutIntent": function () {
        var self = this;
        var speechOutput = "This skill was written by little b";
        self.emit(":tellWithcard", speechOutput, "Mitch's Skill", speechOutput);
        // tell with card just means say it with a record of what was said in Alexa app
    },
    "HelloIntent": function () {
        var self = this;
        var intentRequest = self.event.request;
        var value = intentRequest.intent.slots.HelloGreeting.value;
        var speechOutput = "";
        if (value.toLowerCase == "mitch") {
            speechOutput = "Hello Mitch";
        }
        else {
            speechOutput = "I did not understand the word";
        }
        self.emit(":tellWithcard", speechOutput, "Mitch's Skill", speechOutput);
    }
};
var Handler = (function () {
    function Handler(event, context, callback) {
        var alexa = Alexa.handler(event, context);
        alexa.appId = "my_app_ID";
        alexa.registerHandlers(handlers);
        alexa.execute();
    }
    return Handler;
}());
exports.Handler = Handler;
