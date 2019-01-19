/* OJO: Lo que se escriba aquí nomas es de ejemplo para ponerlo y ejecutarlo dentro 
        de la terminal ejecutandose MONGO. */

//Crear un JSON de las propiedades
db.createUser({
    user: 'Santychuy',
    pwd: '12345',
    roles: ['readWrite', 'dbAdmin']
})

//Insertar datos, en una colección, división, etc. De nuestra DB, y nosotros le llamamos customers
db.customers.insert({
    firstName: 'Santiago',
    lastName: 'Carrasco'
})

//Hacer una busqueda
db.customers.find()


