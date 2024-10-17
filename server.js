const { default: axios, post } = require("axios");
const express = require("express");
const app = express();
const redis = require("./db.js");
const { default: Redis } = require("ioredis");

require(`./db.js`);

app.get("/", (req, res) => {
  res.send("Hello World 123!");
});

app.get("/posts", async (req, res) => {
  const isExist = await redis.exists("posts");
  if (redis.exists("posts")) {
    const posts = await redis.get("posts");
    return res.send(JSON.parse(posts));
  }

  await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(async (response) => {
      await redis.set("posts", JSON.stringify(response.data));
      res.send(response.data);
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
