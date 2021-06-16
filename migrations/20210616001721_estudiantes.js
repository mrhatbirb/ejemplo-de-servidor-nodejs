
exports.up = async function(knex) {
    await knex.schema.createTable('estudiantes', (table) => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('apellido').notNullable();
        table.integer('edad').notNullable();
        table.integer('sexo').notNullable();
        
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('estudiantes');
};
