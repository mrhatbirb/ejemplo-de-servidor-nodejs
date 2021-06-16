const db = require('../data/config');

class Estudiante {

    tabla = 'estudiantes';

    constructor({nombre, apellido, edad, sexo}) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
    }

     async save(){
        try {
            const nuevo_estudiante = await db(this.tabla).insert({
                nombre: this.nombre,
                apellido: this.apellido,
                edad: this.edad,
                sexo: this.sexo
            });

            return nuevo_estudiante;
        
        } catch (error) {
            // manejo de errores
        }
     }

     async update(){
        // 
     }

     async delete(){
        // 
     }

    static async get(id) {
         try {
            if(id){
                return await db('estudiantes').where('id', id).first();
            }

            return await db('estudiantes').select("*");

         } catch (error) {
            //  
         }
     }
}

module.exports = Estudiante;

