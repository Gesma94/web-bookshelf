import express = require("express");

const SERVICE_NAME = process.env.SERVICE_NAME ?? "localhost";

export const app = express();

app.get('/ping', (request, response) => {
    console.log("[REQUEST] '/ping'");
    response.status(200).send(`[${SERVICE_NAME}] returns Pong 🏓`);
});