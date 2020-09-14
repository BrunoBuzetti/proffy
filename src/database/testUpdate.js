const Database = require('./db.js') // ./ faz ficar na pasta onde está este arquivo

Database.then(async (db) => {
    //Atualizar dados
    await db.run(`
    UPDATE proffys
    SET 
        avatar = "https://vignette.wikia.nocookie.net/reinoanimalia/images/b/b5/Le%C3%B3n_wiki2.png/revision/latest?cb=20130303082204&path-prefix=es"
    WHERE id = 7
    ;
    `)
})

