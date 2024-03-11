var mockServerClient = require('mockserver-client').mockServerClient;
mockServerClient("localhost", 1080)
  .verify(
    {
      'path': '/some/path'
    }, 2, false)
  .then(
    function () {
      console.log("request found exactly 2 times");
    },
    function (error) {
      console.log(error);
    }
  );