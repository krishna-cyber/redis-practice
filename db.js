const Redis = require("ioredis");
const redis = new Redis();

redis.on("connect", (err) => {
    if (err) {
        console.log("Error connecting to Redis");
        return;
    }
  console.log("Connected to Redis");
});


module.exports = redis;