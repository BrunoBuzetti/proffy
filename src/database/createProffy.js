// Sempre que uma funcao utiliza un await tem que por async antes
module.exports = async function(db, { proffyValue, classValue, classScheduleValues }) {
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `) //"A crase se chama "template literal" en js

    const proffy_id = insertedProffy.lastID

    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)

    const class_id = insertedClass.lastID

    const insertedAllClassScheduleValues = classScheduleValues.map((value) => {
        //map tem retorno foreach nao tem
        console.log(value)
        console.log("From")
        console.log(value.tfrom)
        console.log("To")
        console.log(value.tto)
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${value.weekday}",
                "${value.tfrom}",
                "${value.tto}"
            );
        `)
    })

    await Promise.all(insertedAllClassScheduleValues)
}
//No case de classScheduleValues por ser un array
//se pode fazer un loop percorrendo os dados
//um dos tipos de loop é o .map
//a diferença do foreach é que o map permite un retorno
//un retorno con un novo array
