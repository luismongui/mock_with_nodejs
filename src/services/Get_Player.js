var mockServerClient = require('mockserver-client').mockServerClient;
mockServerClient("localhost", 1080)
  .mockAnyResponse({
    "httpRequest": {
      "method": "GET",
      "path": "/player/stats",
      "queryStringParameters": {
        "playerId": ["1234"]
      }
    },
    "httpResponse": {
      "statusCode": 200,
      "body": "{\"playerId\": \"1234\",\"gamesPlayed\": 57,\"averageScore\": 3200,\"topScore\": 5600}",
      "headers": {
        "Content-Type": ["application/json"]
      }
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