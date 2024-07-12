import type { Knex } from "knex";

// Update with your config settings.

const config: Knex.Config = {
  client: "pg",
  connection: {
    host: process.env.host,
    port: Number(process.env.port),
    user: process.env.user,
    database: process.env.database,
    password: process.env.password,
    ssl: { rejectUnauthorized: false }
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: "./migrations",
    tableName: "knex_migrations"
  },
  seeds: {
    directory: "./seeds"
  }
};

export default config;
