const Database = require('sqlite-async')

function execute(db) {
    //console.log("cheguei aqui")
    //console.log(db)
    //Crear as tabelas do banco de dados
    //A palavra chave return, faz con que o objeto db que veio do then seja devolvido
    //Isso permite que se possa ir utilizando o objeto sem ter que declararlo de novo
    //se transmite a traves de variaveis
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );
        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );
        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `) //aqui se usa crase
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)
