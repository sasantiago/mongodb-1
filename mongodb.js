db.createCollection('users')
db.createCollection('userstask');

db.userstask.insertMany([
    {
        nombres: "Carlos",
        apellidos: "Herrera",
        ciudad: "Paris",
        país: "Francia",
        salario: 4780,
        edad: 32,
        altura: 170,
        peso: 160
    },
    {
        nombres: "Ximena",
        apellidos: "Martinez",
        correo: "ximena.martinez@example.com",
        ciudad: "montpellier",
        país: "Francia",
        salario: 3500,
        edad: 38,
        altura: 165,
        peso: 150
    }

])
db.userstask.insertOne({
    nombres: "Noriel",
    apellidos: "Morales",
    correo: "Noriel.morales@example.com",
    ciudad: "Nueva delhi",
    país: "India",
    edad: 48,
    altura: 165,
    peso: 150
})

//punto1

db.userstask.find({edad:{$gt:18}});

//punto2
db.userstask.find({
    $or:[{ciudad:"Londres"},
    {ciudad:"Paris"}]
})
//punto3
db.userstask.find({
    $and:[{salario:{$gt:2000}},
    {edad:{$lt:30}}]
})
//punto4
db.userstask.find({
    $and:[{salario:{$gt:3000}},
        {país:"España"}
    ]
});
//punto4
db.userstask.find({
    salario: { $gt: 3000 },
    país: "España"
})
//punto5
db.userstask.find({
    $and:[{edad:{$gt:25}},
    {edad:{$lt:35}}]
})
// punto6
db.userstask.find({país:{$ne:"Usa"}});

//punto7
db.userstask.find({
    ciudad:"Londres",
    $or:[{salario:{$gt:30}},
    {salario:{$gt:2500}}]

})
//punto8
db.userstask.find({
    país:"Australia",
    peso:{$gt:140}
})

//punto9
db.userstask.find({
    ciudad:{$ne:"Londres"},
    ciudad:{$ne:"Paris"},
})
//punto10
db.userstask.find({
    $or:[
        {salario:{$lt:2000}},
        {edad:{$gt:40}}
    ]
})
//punto11
db.userstask.find({
    país:"Canada",
    $or:[
        {salario:{$gt:4000}},
        {altura:{$gt:180}}
    ]
})

//punto12
db.userstask.find({
    país:"Italia",
    $and:[{edad:{$gte:20}},
    {edad:{$lte:30}}
    ]
})

//punto13
db.userstask.find({
    correo:{$exists:false}
})

// punto14
db.userstask.find({
    país:"Francia",
    $and:[{salario:{$gt:3000}},
    {salario:{$lte:5000}}]
})
// punto15
db.userstask.find({
    país:"Brasil",
    $or:[{peso:{$lt:120}},
    {peso:{$gt:140}}
    ]
})
// punto16
db.userstask.find({
    $or:[{país:"Argentina"},
    {país:"Chile"}],
    edad:{$lt:25}
})
// punto17  
db.userstask.find({
    $and:[
    { país:{$ne:"España"}},
    {país:{$ne:"México"}},
    {salario:{$lt:3000}}
    ]
})
// punto18
db.userstask.find({
    país:"Alemania",
    $or:[
        {salario:{$lt:4000}},
        {edad:{$gt:35}}
    ]
})
// punto19
db.userstask.find({
    país:{$eq:"Colombia"},
    altura:{$lt:170}
})
// punto20
db.userstask.find({
    país:"India",
    salario:{$exists:false}
})



















// select*from users
db.users.find({edad:20});
// diferentesde
db.users.find({edad:{$ne:20}});
// mayorque
db.users.find({edad:{$gt:20}});
// menorque
db.users.find({edad:{$lt:20}});
// mayorigual
db.users.find({edad:{$gte:20}});
// menorigual
db.users.find({edad:{$lte:20}});
//quecontengan+valores
db.users.find({edad:{$in:[30,20,40]}});
//quecontengan-valores
db.users.find({edad:{$nin:[30,20,40]}});
//buscandodocsexistentes
db.user.find({edad:{$exists:false}});
// queempicencon
db.users.find({nombre:{$regex:/^Natalia/}});
// queterminencon
db.users.find({nombre:{$regex:/Natalia$/}});
// between
db.users.find({edad:{$and:[
    {edad:{$gt:20}},
    {edad:{$lt:30}}
]
}});

