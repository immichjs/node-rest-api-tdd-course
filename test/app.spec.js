const request = require("supertest");
const { app } = require("../src/app.js");

it("Deve responder na raiz", () => {
  return request(app)
    .get("/")
    .then((response) => {
      expect(response.status).toBe(200);
    });
});
