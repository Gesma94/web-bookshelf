import express = require("express");

export const app = express();

app.get('/ping', (request, response) => {
    console.log("[REQUEST] '/ping'");
    response.status(200).send("Server is running ✅");
});
