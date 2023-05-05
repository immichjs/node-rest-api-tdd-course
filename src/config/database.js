const knex = require("knex");
const knexfile = require("../../knexfile").test;

const database = knex(knexfile);

module.exports = {
  database,
};
