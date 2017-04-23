"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alexa = require("alexa-sdk");
var handlers = {
    "AboutIntent": function () {
        var self = this;
        var speechOutput = "This skill was written by little b";
        self.emit(":tellWithcard", speechOutput, "Mitch's Skill", speechOutput);
        console.log("I am processing the AboutIntent");
        // tell with card just means say it with a record of what was said in Alexa app
    },
    "HelloIntent": function () {
        var self = this;
        // constructor implementation to now refernce the self
        var intentRequest = self.event.request;
        // obtain the reuest.  Request is the a subsidiary JSON object in the json file (request, session, version are the 3)
        var value = intentRequest.intent.slots.Word.value;
        var speechOutput = "";
        if (value.toLowerCase == "hello") {
            speechOutput = "The word in Spanish is hola";
        }
        else {
            speechOutput = "I did not understand the word";
        }
        self.emit(":tellWithcard", speechOutput, "Mitch's Skill", speechOutput);
        console.log("I am processing the HelloIntent");
    },
    "WeatherIntent": function() {
      var self = this;
      var intentRequest = self.event.request;
      var weatherLocal = self.intent.slots.Location.value;
      var weatherTime = self.intent.slots.Time.value;
      speechOutput = get_weather_response(weatherLocal, weatherTime);
      self.emit(":tellWithcard", speechOutput, "Mitch's Skill", speechOutput);
    }
};
var Handler = (function () {
    function Handler(event, context, callback) {
        var alexa = Alexa.handler(event, context);
        alexa.appId = "my_app_ID";
        alexa.registerHandlers(handlers);
        alexa.execute();
        console.log("I just created a handler");
    }
    return Handler;
}());
exports.Handler = Handler;
