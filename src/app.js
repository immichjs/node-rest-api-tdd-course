const express = require("express");
const { findAll, create } = require("./controllers/users");
const { database } = require("./config/database");
const app = express();

app.use(express.json());

app.get("/", (request, response) => response.status(200).send());
app.get("/users", findAll);
app.post("/users", create);

// database
//   .on("query", (query) => {
//     console.log({
//       sql: query.sql,
//       bindings: query.bindings ? query.bindings.join(",") : "",
//     });
//   })
//   .on("query-response", (response) => {
//     console.log(response);
//   })
//   .on("error", (error) => {
//     console.log(error);
//   });

module.exports = {
  app,
};
