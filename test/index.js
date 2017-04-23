const context = require("aws-lambda-mock-context");
var expect = require("chai").expect;
var index = require("../src/index");

const ctx = context();



describe("Testing the HelloIntent", function() {

  var speechResponse = "lol";
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
            "Word": {
              "name": "Word",
              "value": "hello"
            }
          }
        }
      },
      "version": "1.0"
    }, ctx);

    done();
  });

  describe("Is the response structurally correct", function() {
      it("should not have errored", function() {
        expect(speechError).to.be.null;
      });
  });

  describe("The response should be a string", function() {
    it("should be a string", function() {
      expect(speechResponse).to.be.a('string');
    });
  });

});
