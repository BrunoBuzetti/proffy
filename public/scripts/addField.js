// Procurar o botao
document.querySelector("#add-time")
// Cuando clicar no botao
// Executar en uma açao
.addEventListener('click', cloneField)
//Definir a acao
function cloneField() {
    console.log("cheguei aqui")
    // Duplicar campos. Que campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    //O parametro true indica que copia o nodo e todo o conteúdo.
    console.log("cheguei aqui 2")
    // Pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll("input")

    //para cada campo limpias
    fields.forEach(function(field) {
        //pegar o field do momento e limpa
        field.value = ""
    })



    //console.log(fields[0].value)
    //console.log(fields[0].value = "0")

    // Colocar na pagina. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
    console.log("cheguei aqui 3")
}

//cloneNode é como o js se refere al html 
//Si o parametro e true clona incluso os elementos internos