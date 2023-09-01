import express = require("express");

export const app = express();

app.get('/', (request, response) => {
    response.sendStatus(200);
});

app.get('/ping', (request, response) => {
    console.log("[REQUEST] '/ping'");
    response.status(200).send("Server is running ✅");
});
