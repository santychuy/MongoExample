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

//Insertar un array de objetos
db.customers.insert([
    {firstName: 'Jesus', lastName: 'Campa'},
    {firstName: 'Santy', lastName: 'Chuy'}
])

//Hacer una busqueda especifica, aqui buscamos por el apellido y nos devuelve todo el objeto que le corresponde
db.customers.find({lastName: 'Carrasco'})

//Hacer una modificacion, primero se pone la propiedad para identificar el objeto que queremos modificar,
// luego se pone los datos que queremos que tenga.
db.customers.update(
    {firstName: 'Santy'},
    {
        firstName: 'Chuy',
        lastName: 'Santy',
        gender: 'Male'
    }
)

//Para ver los datos actualizados y más limpio
db.customers.find().pretty()

//Ahora para agregar un objeto
db.customers.update(
    {_id : ObjectId("5c438e552492db14822b6cba")},
    {
        $set: {age: 21}
    }
)

//Quitar una propiedad
db.customers.update(
    {firstName: 'Santiago'},
    {
        $unset: {age: 5}
    }
)


//Incrementar solo un valor numerico
db.customers.update(
    {firstName: 'Santiago'},
    {
        //Suma
        $inc: {age: 5}
        //Resta
        //$inc: {age: -5}
    }
)


//Hará una modificacion, pero si no se encuentra ese objeto, lo creará
db.customers.update(
    {firstName: 'Sebastian'},
    {
        firstName: 'Sebastian',
        lastName: 'Carrasco'
    },
    {upsert: true}
)

//Cambiar el nombre de la key, la propiedad de un valor
db.customers.update(
    {firstName: 'Sebastian'},
    {
        $rename: {firstName: 'primerNombre'}
    }
)

//Ahora para eliminar datos
db.customers.remove(
    {primerNombre: 'Sebastian'}//,
    //{justOne: true} el mismo nombre lo dice
)


//Hacer una busqueda de datos, dependiendo si cumple con un requisito o la otra
db.customers.find(
    {$or: [{firstName: 'Santiago'}, {firstName: 'Santy'}]}
)


//Hacer busqueda pero con condiciones, aqui será una condicion numerica

db.customers.find(
    {age: {$gt: 23}} //Busca por el parametro y con una condicion de mayor que (>)
    //{age: {$lt: 23}} Busca por el parametro y con una condicion de menor que (<)
)