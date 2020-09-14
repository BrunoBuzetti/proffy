
    const selectedProffys2 = await db.all(`
    SELECT classes.*, proffys.* 
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
`)
console.log(selectedProffys)


const selectedAllData = await db.all(`
    SELECT class_schedule.*, classes.*, proffys.* 
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    JOIN class_schedule ON (class_schedule.class_id = classes.id)
    WHERE classes.id = 1
    AND class_schedule.weekday = 0
    AND class_schedule.time_from <= 1000
    AND class_schedule.time_to >= 1000;
`)
console.log(selectedAllData)


<article class="teacher-item">
<header>
    <img 
        src="https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" 
        alt="Diego Fernandes">
    <div>
        <strong>Diego Fernandes</strong>
        <span>Química</span>
    </div>
</header>

<p>Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.</p>

<footer>
    <p>Preço/hora<strong>R$ 20,00</strong></p>
    <button type="button">
        <img src="/images/icons/whatsapp.svg" alt="Whatsapp">Entrar em contato
    </button>
</footer>
</article>