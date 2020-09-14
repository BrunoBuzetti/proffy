const Database = require('./db.js') // ./ faz ficar na pasta onde está este arquivo

Database.then(async (db) => {
    //Consultar dados inseridos

    //const selectedProffys = await db.all("SELECT * FROM proffys")

    //console.log(selectedProffys)

    //const selectedClassesAndProffys = await db.all(`
    //    SELECT classes.*, proffys.* 
    //    FROM proffys
    //    JOIN classes ON (classes.proffy_id = proffys.id)
    //`)

    //console.log(selectedClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 3
        AND class_schedule.weekday = 3
        AND class_schedule.time_from <= 900
        AND class_schedule.time_to >= 900

    `)

    console.log(selectClassesSchedules)

})