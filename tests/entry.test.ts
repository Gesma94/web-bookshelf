import request = require('supertest');
import { app } from "../src/app"

describe("Server running", () => {
    test("Should return OK", async () => {
        const response = await request(app).get("/ping");
        expect(response.statusCode).toBe(200);
    })
})