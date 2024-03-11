var mockServerClient = require('mockserver-client').mockServerClient;
mockServerClient("localhost", 1080)
  .mockAnyResponse({
    "httpRequest": {
      "method": "GET",
      "path": "/view/cart",
      "queryStringParameters": {
        "cartId": ["055CA455-1DF7-45BB-8535-4F83E7266092"]
      }
    },
    "httpResponse": {
      "body": "some_response_body"
    }
  })
  .then(
    function () {
      console.log("expectation created");
    },
    function (error) {
      console.log(error);
    }
  );