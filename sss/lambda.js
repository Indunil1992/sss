let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.subscribe({
        Protocol: 'https',
        Endpoint: 'https://052p9kjn18.execute-api.us-east-1.amazonaws.com/test11/indunil/qa/tst',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:TestSNS'
    }).promise()
        .then(data => {
            console.log(data);
            console.log("data");
            // your code goes here
        })
        .catch(err => {
            console.log(err);
            console.log("errrrr");
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}