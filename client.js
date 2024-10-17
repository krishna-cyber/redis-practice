const { createClient } = require('redis');

const client = createClient(
    {
        name: 'my-redis-client',
        host: 'localhost',
        port: 6379,
    }
);


module.exports= client;