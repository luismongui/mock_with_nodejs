var mockserver = require('mockserver-node');
mockserver.start_mockserver({
    serverPort: 1080,
    jvmOptions: "-Dmockserver.enableCORSForAllResponses=true",

    trace: true,
    verbose: true
});

// do something

mockserver.stop_mockserver({
    serverPort: 1080
});