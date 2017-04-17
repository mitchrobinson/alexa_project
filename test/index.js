const conext = require("aws-lambda-mock-context");
var expect = require("chai").expect;
var index = require("../src/index");

const ctx = context();

describe("Testing the HelloIntent", function() {

  var speechResponse = null;
  var speechError = null;

  before(function(done) {
    index.Handler({
      "session": {
        "sessionId": "SessionId.200bbd6d-e9e2-421c-88a2-1e725a94b8e0",
        "application": {
          "applicationId": "my_app_ID"
        },
        "attributes": {},
        "user": {
          "userId": null
        },
        "new": true
      },
      "request": {
        "type": "IntentRequest",
        "requestId": "EdwRequestId.603ff305-af6b-4c15-8db1-3de0cb7dbd77",
        "locale": "en-US",
        "timestamp": "2017-01-18T03:19:58Z",
        "intent": {
          "name": "HelloIntent",
          "slots": {
            "HelloGreeting": {
              "name": "HelloGreeting",
              "value": "Mitch"
            }
          }
        }
      },
      "version": "1.0"
    }, ctx);
    ctx.Promise
        .then(response => { speechResponse = response; console.log(speechResponse); done(); })
        .catch(error => { speechError = error; done(); })
  });


  describe("Is the response structurally correct", function() {
    if("should not have errored", function() {
      expect(speechError).to.be.null;
    });
  });

});
