const { database } = require("../config/database");

module.exports = {
  findAll(request, response) {
    database("users")
      .select()
      .then((result) => {
        return response.status(200).json(result);
      });
  },
  async create(request, response) {
    const { name, email, password } = request.body;

    const result = await database("users").insert(
      { name, email, password },
      "*"
    );

    return response.status(201).json(result[0]);
  },
};
