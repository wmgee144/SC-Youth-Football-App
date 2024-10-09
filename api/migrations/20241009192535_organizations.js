/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("organizations", function (table) {
    table.increments("id").primary();
    table.string("teamName", 50).unique().notNullable();
    table.string("bio", 255);
    table.enu("conference", ["FBS", "FCS", "FBS/FCS"]).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("organizations");
};
