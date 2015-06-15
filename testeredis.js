var redis = require("redis"),
    client = redis.createClient("localhost","6378");
 
client.on("error", function (err) {
    console.log("Error " + err);
});
// Set a value
client.set("string key", "Hello World", redis.print);
// Get the value back
client.get("string key", function (err, reply) {
	
});
// Clean quit (waits for client to finish)
client.quit();