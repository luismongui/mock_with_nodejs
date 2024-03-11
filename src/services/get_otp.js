mockServerClient("localhost", 1080)
    .mockAnyResponse(
        {
            'httpRequest': {
                'method': 'GET',
                'path': '/otpDemo',
            },
            'httpResponse': {
                'statusCode': 200,
                'body': "por fin",
                'delay': {
                    'timeUnit': 'MILLISECONDS',
                    'value': 250
                }
            },
            'times': {
                'remainingTimes': 1,
                'unlimited': false
            }
        }
    )
    .then(
        function(result) {
            // do something next
        }, 
        function(error) {
            // handle error
        }
    );
