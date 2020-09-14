const Database = require('./database/db.js')

const { subjects, weekdays, getSubject, convertHoursToMinutes} = require('./utils/format')

function pageLanding(req, res) {
    return res.render("index.html")
}

async function pageStudy(req, res) {
    // console.log(req.query)
    const filters = req.query

    if (!filters.subject || !filters.weekday || !filters.time) {
        return res.render("study.html", { filters, subjects, weekdays})
    }

    const timeToMinutes = convertHoursToMinutes(filters.time)

    console.log(timeToMinutes)
    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS (
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to >= ${timeToMinutes}
        )    
        AND classes.subject = '${filters.subject}' 
    `
    
    try {
        const db = await Database
        const proffys = await db.all(query)
        //proffys.map((proffy)=>{
        //    proffy.subject = getSubject(proffy.subject)
        //})
        return res.render('study.html', { proffys, subjects, filters, weekdays })

    } catch (error) {
        console.log(error) 
    }
    
}

function pageGiveClasses(req, res) {
//    const data = req.query
// //   console.log(data)

    //Solo se houver data
//    const isNoEmpty = Object.keys(data).length > 0 //Estudar a funcionalidad Object
    //Adicionar à lista de proffys
 //   if (isNoEmpty) {
 //       data.subject = getSubject(data.subject)
 //       data.weekday = getWeekday(data.weekday)
 //       proffys.push(data) //Coloca os dados no array
//        return res.redirect("/study")
 //   }
    return res.render("give-classes.html", {subjects, weekdays})
}

async function saveClasses(req, res) {
    const createProffy = require('./database/createProffy.js')

    const proffyValue = {
        name: req.body.name,
        avatar: req.body.avatar,
        whatsapp: req.body.whatsapp,
        bio: req.body.bio
    }

    const classValue = {
        subject: req.body.subject,
        cost: req.body.cost
    }
    console.log("subject")
    console.log(req.body.subject)
    console.log("weekday")
    console.log(req.body.weekday[0])
    console.log("from")
    //console.log(req.body.time_from[0]) 
    const prueba = req.body.time_from
    console.log(prueba)
    const classScheduleValues = req.body.weekday.map((weekday, index) => {
            return {
                weekday, //weekday: weekday, se se repete os nomes nao precisa asociar
                //time_from: convertHoursToMinutes(req.body.time_from[index]),
                //time_to: convertHoursToMinutes(req.body.time_to[index])
            }
        })

    try { 

        const db = await Database
    
        await createProffy(db, { proffyValue, classValue, classScheduleValues })

        let queryString = "?subject=" + req.body.subject
        queryString += "&weekday=" + req.body.weekday
        queryString += "&time=" + req.body.time_from[0]

        return res.redirect("/study" + queryString)
        
    } catch (error) {
        console.log(error)
    }

    //const data = req.body
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
}