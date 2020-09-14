const Database = require('./db.js') // ./ faz ficar na pasta onde está este arquivo
const createProffy = require("./createProffy")

Database.then(async (db) => {
    //Inserir dados
    proffyValue = {
        name: "Renata Ceribeli", 
        avatar: "", 
        whataspp: "887665332", 
        bio: "Perfil de proffy 6.", 
    }

    classValue = { 
        subject: 2, 
        cost: "90",
        //o proffy_id virá pelo banco de dados 
    }

    classScheduleValues = [
        //o class_id virá pelo banco de dados 
        {
            weekday: 2,
            time_from: 480,
            time_to: 720
        },
        {
            weekday: 3,
            time_from: 720,
            time_to: 1080
        }
    ]

    await createProffy(db, {proffyValue,classValue,classScheduleValues})
})