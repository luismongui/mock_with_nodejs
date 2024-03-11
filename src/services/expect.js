var mockServerClient = require('mockserver-client').mockServerClient;
mockServerClient("localhost", 1080)
    .retrieveActiveExpectations({})
    .then(
        function (activeExpectations) {
            console.log(JSON.stringify(activeExpectations));
        },
        function (error) {
            console.log(error);
        }
    );