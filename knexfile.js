module.exports = {
  test: {
    client: "pg",
    version: "15",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "postgres",
      database: "node-api-rest-tdd-course",
    },
    migrations: {
      directory: "./src/migrations",
    },
  },
};
