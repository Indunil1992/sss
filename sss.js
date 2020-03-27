let AWS = require('aws-sdk');
const eventBridge = new AWS.EventBridge();

exports.handler = async (event) => {
    try {
        let data = await eventBridge.putEvents({
            Entries: [{
                EventBusName: "default",
                Source: "xxsx",
                DetailType: "xdxx",
                Detail: "{}",
                Time: "12"
            }]
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};