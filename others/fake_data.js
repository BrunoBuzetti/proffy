// Dados
const proffys = [
    {
        name: "Bruno Buzetti", 
        avatar: "", 
        whataspp: "664761112", 
        bio: "Curioso por explorar o que se esconde por detrás da linguagem.<br><br>Analitico e simples.", 
        subject: "Distinções", 
        cost: "130", 
        weekday: [1, 2, 3, 4, 5 ],
        time_from: [720], 
        time_to: [1220]
    },
    {
        name: "Mariana Vertiz", 
        avatar: "", 
        whataspp: "664761112", 
        bio: "Curioso y lógico", 
        subject: "Distinções", 
        cost: "130", 
        weekday: [0, 2, 4, 6 ],
        time_from: [720], 
        time_to: [1220]
    }
]

const subjects = [
    {name: "Artes"},
    {name: "Biologia"},
    {name: "Ciência"},
    {name: "Educação Física"},
    {name: "Física"},
    {name: "Geografia"},
    {name: "História"},
    {name: "Matemática"},
    {name: "Português"},
    {name: "Química"}//no dejar virgula no final
]

//Funcionalidades
function getSubject(SubjectNumber) {
    const position = +SubjectNumber - 1
    //Cual a diferença de usar a linha abaixo
    //const position = SubjectNumber - 1
    return subjects[position].name
}

//Tem que modificar o html e por o .name