//Dados
const subjects = [
    "Artes",
    "Biologia",
    "Ciência",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"//no dejar virgula no final 
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]

//Funcionalidades
function getSubject(SubjectNumber) {
    const position = +SubjectNumber - 1
    //Cual a diferença de usar a linha abaixo
    //const position = SubjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes(time) {
    const [hours, minutes] = time.split(":")
    return Number( ( Number(hours) * 60 ) + Number(minutes))
    //console.log()return Number( ( hours * 60 ) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}