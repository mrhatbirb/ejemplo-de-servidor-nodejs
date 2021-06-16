
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('estudiantes').del()
    .then(function () {
      // Inserts seed entries
      return knex('estudiantes').insert([
        {
          "id": 1,
          "nombre": "Brian",
          "apellido": "Jogn",
          "edad": 2,
          "sexo": 1
        },
        {
          "id": 2,
          "nombre": "Brian",
          "apellido": "Jogn",
          "edad": 2,
          "sexo": 1
        },
        {
          "id": 3,
          "nombre": "Brian",
          "apellido": "Jogn",
          "edad": 2,
          "sexo": 1
        },
        {
          "id": 4,
          "nombre": "Brian",
          "apellido": "Jogn",
          "edad": 2,
          "sexo": 1
        },
        {
          "id": 5,
          "nombre": "Brian",
          "apellido": "Jogn",
          "edad": 2,
          "sexo": 1
        },
        {
          "id": 6,
          "nombre": "Brian",
          "apellido": "Jogn",
          "edad": 2,
          "sexo": 1
        },
        {
          "id": 7,
          "nombre": "Brian",
          "apellido": "Jogn",
          "edad": 2,
          "sexo": 1
        },
        {
          "id": 8,
          "nombre": "Brian",
          "apellido": "Jogn",
          "edad": 2,
          "sexo": 1
        },
        {
          "id": 9,
          "nombre": "Brian",
          "apellido": "Jogn",
          "edad": 2,
          "sexo": 1
        },
        {
          "id": 0,
          "nombre": "Brian",
          "apellido": "Jogn",
          "edad": 2,
          "sexo": 1
        }
      ]);
    });
};
