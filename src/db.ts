import knex from 'knex';

export const config = {
  client: 'pg',
  connection: 'postgres://localhost/markdown_notemaker_dev',
  migrations: {
    tableName: "knex_migrations"
  }
}

const instance = knex(config);

export const db = () => instance;
