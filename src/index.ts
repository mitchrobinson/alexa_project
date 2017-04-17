import * as Alexa from "alexa-sdk";

let handlers: Alexa.Handlers = {
  "AboutIntent": function(){
    let self: Alexa.Handler = this;
    let speechOutput = "This skill was written by little b";
    self.emit(":tellWithcard", speechOutput, "Mithc's Skill", speechOutput)
  }
}

export class Handler {
  constructor(event: Alexa.RequestBody, context: Alexa.context, callback: Function){
    let alexa = Alexa.handler(event, context);
    alexa.appId = "my_id";
    alexa.regesisterHandlers(handlers);
    alexa.excute();
  }
}
