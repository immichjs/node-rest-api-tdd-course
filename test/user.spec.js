const request = require("supertest");
const { app } = require("../src/app");

it("Devo listar todos os usuários", () => {
  return request(app)
    .get("/users")
    .then((response) => {
      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
});

it("Devo inserir um novo usuário", () => {
  const user = {
    name: "Walter Mitty",
    email: `${Date.now()}@gmail.com`,
    password: "123",
  };
  return request(app)
    .post("/users")
    .send(user)
    .then((response) => {
      expect(response.status).toBe(201);
      expect(response.body).toEqual({ ...user, id: response.body.id });
    });
});
