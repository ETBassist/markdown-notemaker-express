import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id');
    table.bigInteger('user_id').references('id').inTable('users');
    table.text('content');
    table.timestamps();
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('posts');
}

