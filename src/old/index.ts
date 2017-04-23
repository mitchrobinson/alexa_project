import * as Alexa from "alexa-sdk";

let handlers: Alexa.Handlers = {
  "AboutIntent": function(){
    let self: Alexa.Handler = this;
    let speechOutput = "This skill was written by little b";
    self.emit(":tellWithcard", speechOutput, "Mitch's Skill", speechOutput);
    // tell with card just means say it with a record of what was said in Alexa app
  },
  "HelloIntent": function() {
    let self: Alexa.Handler = this;
    let intentRequest = <Alexa.IntentRequest> self.event.request;
    let value = intentRequest.intent.slots.Word.value;
    let speechOutput = "";
    if (value.toLowerCase == "hello") {
      speechOutput = "The word in Spanish is hola"
    } else {
      speechOutput = "I did not understand the word";
    }
    self.emit(":tellWithcard", speechOutput, "Mitch's Skill", speechOutput)
  }
}

export class Handler {
  constructor(event: Alexa.RequestBody, context: Alexa.Context, callback: Function){
    let alexa = Alexa.handler(event, context);
    alexa.appId = "my_app_ID";
    alexa.registerHandlers(handlers);
    alexa.execute();
  }
}
