exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Hello from functions 2"
  });
};
