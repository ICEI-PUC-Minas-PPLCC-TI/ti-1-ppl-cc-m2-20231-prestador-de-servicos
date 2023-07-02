//document.getElementsByTagName("dialog")[0].showModal()

/*
    prestador: {
        id
        nome
        preço
        descrição
        nota
        imagens{
            imagem
            ...
        }
        dias[
            dia{
                horas em que trabalha
            }
            ...
        ]
    }

    servicos: [
        {
            idPrestador
            idServiço
            idCliente
            data
            hora
        }
        ...
    ]
*/



//testing:

let prestadoresTxt = `
[
    {
        "id": 1,
        "email": "djrobertosilva@gmail.com",
        "senha": "123456",
        "nome": "DJ Roberto Silva", 
        "nomePrestador": "Roberto Silva",
        "categoria": "DJ",
        "preco": 200,
        "nota": 4.5,
        "nAvaliacoes": 10,
        "nPedidos": 20,
        "descricao": "Como um veterano na cena da música, trago mais de 15 anos de experiência para os meus serviços de DJ. Seja para eventos, casamentos ou festas de aniversário, consigo transitar facilmente entre diferentes gêneros musicais para agradar a todos os tipos de público. Conto com meu próprio equipamento de som de alta qualidade e uma vasta biblioteca de música digital.",
        "imagens": [
            "https://media.djban.com.br/2019/04/13182729/DJ-Music-Wallpaper-Free-Download-Image-750x465.jpg", 
            "https://beatforbeat.com.br/site/wp-content/uploads/2020/11/club-disco-dj-playing-and-mixing-music-for-people-nightlife-picture-id693589836-1140x760-1.jpg",
            "https://radiomixfm.com.br/wp-content/uploads/2020/11/concurso-dj.jpg",
            "https://media.istockphoto.com/id/1090054462/pt/foto/dj-mixes-the-track-in-the-nightclub-at-party.jpg?s=612x612&w=0&k=20&c=KQrrJ1Jb1Fxw7fKFvyfMV8FigQQov3NqlWi4J15CDsM="
        ],
        "dias": [
            {
                "dia": "domingo",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00"
                ]
            },
            {
                "dia": "segunda",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00",
                    "13:00",
                    "14:00",
                    "15:00",
                    "16:00",
                    "17:00",
                    "18:00"
                ]
            },
            {
                "dia": "terça",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00",
                    "13:00",
                    "14:00",
                    "15:00",
                    "16:00",
                    "17:00",
                    "18:00"
                ]
            },
            {
                "dia": "quarta",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00",
                    "13:00",
                    "14:00",
                    "15:00",
                    "16:00",
                    "17:00",
                    "18:00"
                ]
            },
            {
                "dia": "quinta",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00",
                    "13:00",
                    "14:00",
                    "15:00",
                    "16:00",
                    "17:00",
                    "18:00"
                ]
            },
            {
                "dia": "sexta",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00",
                    "13:00",
                    "14:00",
                    "15:00",
                    "16:00",
                    "17:00",
                    "18:00"
                ]
            },
            {
                "dia": "sábado",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00",
                    "13:00",
                    "14:00"
                ]
            }
        ]
    },
    {
        "id": 2,
        "email": "cozinheiramariadocarmo@gmail.com",
        "senha": "123456",
        "nome": "Cozinheira Maria do Carmo",
        "nomePrestador": "Maria do Carmo",
        "categoria": "Cozinheiro",
        "preco": 150,
        "nota": 3.0,
        "nAvaliacoes": 5,
        "nPedidos": 10,
        "descricao": "Sou Maria do Carmo, uma cozinheira talentosa especializada em culinária brasileira regional. Ofereço serviços de preparação de refeições para eventos, jantares privados e festas. Utilizo ingredientes frescos e de alta qualidade, preparando cada prato com atenção meticulosa aos detalhes. Seja uma festa íntima ou um grande evento, garanto uma experiência culinária inesquecível.",
        "imagens": [
            "https://istoe.com.br/wp-content/uploads/2017/07/d0ee60bfad29fdcb333d77db83cd1f73bab9bfef.jpg",
            "https://img.cybercook.com.br/publicidades/cozinha-1.jpeg?w=623&fit=crop?w=623&fit=crop",
            "https://www.hypeness.com.br/1/2022/03/5592fd6f-edit_ultragaz2_pixahive.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGgc6NzlCrdsoawAnEwc7smJMAR1UusaiOQ&usqp=CAU"
        ],
        "dias": [
            {
                "dia": "domingo",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00"
                ]
            },
            {
                "dia": "segunda",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00",
                    "13:00",
                    "14:00",
                    "15:00",
                    "16:00",
                    "17:00",
                    "18:00"
                ]
            },
            {
                "dia": "terça",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00",
                    "13:00",
                    "14:00",
                    "15:00",
                    "16:00",
                    "17:00",
                    "18:00"
                ]
            },
            {
                "dia": "quarta",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00"
                ]
            },
            {
                "dia": "quinta",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00"
                ]
            },
            {
                "dia": "sexta",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00"
                ]
            },
            {
                "dia": "sábado",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00"
                ]
            }
        ]
    },
    {
        "id": 3,
        "email": "maridodealugueljoaocarlos@gmail.com",
        "senha": "123456",
        "nome": "Marido de Aluguel João Carlos",
        "nomePrestador": "João Carlos",
        "categoria": "Marido de Aluguel",
        "preco": 80,
        "nota": 2.5,
        "nAvaliacoes": 2,
        "nPedidos": 5,
        "descricao": "Sou João Carlos, um experiente marido de aluguel capaz de lidar com uma variedade de tarefas domésticas. Meus serviços incluem reparos elétricos, encanamento, montagem de móveis, instalação de eletrodomésticos, pintura e muito mais. Sou conhecido pela minha pontualidade, trabalho limpo e eficiente e excelente atendimento ao cliente",
        "imagens": [
            "https://s3-sa-east-1.amazonaws.com/triider-prd-blog-files/wp-content/uploads/2018/05/28161216/o-que-%C3%A9-marido-de-aluguel.jpg",
            "https://guiafacil.com/blog/wp-content/uploads/2023/02/servicos-de-marido-de-aluguel.jpg",
            "https://static.superproatacado.com.br/storage/assets/marido-de-aluguel-o-que-faz-esse-profissional83c8b9b49df13294c1f57c2393581e59.jpg",
            "https://maridodealuguel.sampa.br/images/sp-maridoaluguel.jpg"
        ],
        "dias": [
            {
                "dia": "domingo",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00"
                ]
            },
            {
                "dia": "segunda",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00"
                ]
            },
            {
                "dia": "terça",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00"
                ]
            },
            {
                "dia": "quarta",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00"
                ]
            },
            {
                "dia": "quinta",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00"
                ]
            },
            {
                "dia": "sexta",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00"
                ]
            },
            {
                "dia": "sábado",
                "horas": [
                    "10:00",
                    "11:00",
                    "12:00"
                ]
            }
        ]
    }
]
`
if(localStorage.getItem("prestadores") == null){
    localStorage.setItem("prestadores", prestadoresTxt.replace(/\\n?\s*/g, "").substring(1, prestadoresTxt.length-1))
}

let servicosTxt = `
[
    {
        "idPrestador": 1,
        "idServiço": 1,
        "idCliente": 1,
        "data": "2023-06-13",
        "hora": "10:00"
    },
    {
        "idPrestador": 1,
        "idServiço": 2,
        "idCliente": 1,
        "data": "2023-06-13",
        "hora": "11:00"
    },
    {
        "idPrestador": 1,
        "idServiço": 3,
        "idCliente": 1,
        "data": "2023-06-13",
        "hora": "12:00"
    },
    {
        "idPrestador": 1,
        "idServiço": 4,
        "idCliente": 1,
        "data": "2023-06-14",
        "hora": "10:00"
    },
    {
        "idPrestador": 1,
        "idServiço": 5,
        "idCliente": 1,
        "data": "2023-06-14",
        "hora": "11:00"
    },
    {
        "idPrestador": 1,
        "idServiço": 6,
        "idCliente": 1,
        "data": "2023-06-14",
        "hora": "12:00"
    },
    {
        "idPrestador": 1,
        "idServiço": 7,
        "idCliente": 1,
        "data": "2023-06-15",
        "hora": "10:00"
    },
    {
        "idPrestador": 1,
        "idServiço": 8,
        "idCliente": 1,
        "data": "2023-06-15",
        "hora": "11:00"
    },
    {
        "idPrestador": 1,
        "idServiço": 9,
        "idCliente": 1,
        "data": "2023-06-15",
        "hora": "12:00"
    },
    {
        "idPrestador": 2,
        "idServiço": 10,
        "idCliente": 2,
        "data": "2023-06-13",
        "hora": "10:00"
    },
    {
        "idPrestador": 2,
        "idServiço": 11,
        "idCliente": 2,
        "data": "2023-06-13",
        "hora": "11:00"
    },
    {
        "idPrestador": 2,
        "idServiço": 12,
        "idCliente": 2,
        "data": "2023-06-13",
        "hora": "12:00"
    },
    {
        "idPrestador": 2,
        "idServiço": 13,
        "idCliente": 2,
        "data": "2023-06-14",
        "hora": "10:00"
    },
    {
        "idPrestador": 2,
        "idServiço": 14,
        "idCliente": 2,
        "data": "2023-06-14",
        "hora": "11:00"
    },
    {
        "idPrestador": 2,
        "idServiço": 15,
        "idCliente": 2,
        "data": "2023-06-14",
        "hora": "12:00"
    },
    {
        "idPrestador": 2,
        "idServiço": 16,
        "idCliente": 2,
        "data": "2023-06-15",
        "hora": "10:00"
    },
    {
        "idPrestador": 2,
        "idServiço": 17,
        "idCliente": 2,
        "data": "2023-06-15",
        "hora": "11:00"
    },
    {
        "idPrestador": 2,
        "idServiço": 18,
        "idCliente": 2,
        "data": "2023-06-15",
        "hora": "12:00"
    },
    {
        "idPrestador": 3,
        "idServiço": 19,
        "idCliente": 3,
        "data": "2023-06-13",
        "hora": "10:00"
    },
    {
        "idPrestador": 3,
        "idServiço": 20,
        "idCliente": 3,
        "data": "2023-06-13",
        "hora": "11:00"
    },
    {
        "idPrestador": 3,
        "idServiço": 21,
        "idCliente": 3,
        "data": "2023-06-13",
        "hora": "12:00"
    },
    {
        "idPrestador": 3,
        "idServiço": 22,
        "idCliente": 3,
        "data": "2023-06-14",
        "hora": "10:00"
    },
    {
        "idPrestador": 3,
        "idServiço": 23,
        "idCliente": 3,
        "data": "2023-06-14",
        "hora": "11:00"
    },
    {
        "idPrestador": 3,
        "idServiço": 24,
        "idCliente": 3,
        "data": "2023-06-14",
        "hora": "12:00"
    },
    {
        "idPrestador": 3,
        "idServiço": 25,
        "idCliente": 3,
        "data": "2023-06-15",
        "hora": "10:00"
    },
    {
        "idPrestador": 3,
        "idServiço": 26,
        "idCliente": 3,
        "data": "2023-06-15",
        "hora": "11:00"
    },
    {
        "idPrestador": 3,
        "idServiço": 27,
        "idCliente": 3,
        "data": "2023-06-15",
        "hora": "12:00"
    }
]
`

if(localStorage.getItem("servicos") == null){
    localStorage.setItem("servicos", servicosTxt.replace(/\\n?\s*/g, "").substring(1, servicosTxt.length-1))
}

//

function getPageId(){
    //pega o parametro de url chamado servico
    let url = window.location.href;
    let pageId;
    try{
        let urlParams = url.split("?");
        pageId = urlParams[1].split("=")[1];
    }catch{
        pageId = 1;
    }
    
    return pageId;
}

function createStarsElt(nota){
    let starsImg = document.createElement("img");
    starsImg.classList.add("estrelasImg");
    starsImg.src = "https://img.freepik.com/vetores-premium/icone-de-classificacao-de-cinco-estrelas-estrelas-de-avaliacao-vetor-estrelas-planas-isoladas_118339-1270.jpg?w=2000";
    starsImg.style.clipPath = "inset(0 " + (100-nota*20) + "% 0 0)";
    return starsImg;
}

function getLogin(){
    let login = JSON.parse(localStorage.getItem("login"));
    return login.id;
}

function getPrestadores(){
    return JSON.parse(localStorage.getItem("prestadores"));
}

function getPrestador(idPrestador){
    let prestadores = getPrestadores();
    for(let i=0; i<prestadores.length; i++){
        if(prestadores[i].id == idPrestador){
            return prestadores[i];
        }
    }
}

function getServicos(){
    return JSON.parse(localStorage.getItem("servicos"));
}

function getServicosPrestador(idPrestador){
    let servicos = getServicos();
    let servicosPrestador = [];
    for(let i=0; i<servicos.length; i++){
        if(servicos[i].idPrestador == idPrestador){
            servicosPrestador.push(servicos[i]);
        }
    }
    return servicosPrestador;
}

function getHorariosPrestadorDia(idPrestador, diaDaSemana){
    let prestador = getPrestador(idPrestador);
    let horarios = [];
    for(let i = 0; i<prestador.dias[diaDaSemana].horas.length; i++){
        horarios.push(prestador.dias[diaDaSemana].horas[i]);
    }
    return horarios;
}

function getDiaDaSemana(data){
    let dia = new Date(data).getDay();
    return dia;
}

function getHorariosPrestadorDisponiveisDia(idPrestador, dia){
    let diaDaSemana = getDiaDaSemana(dia);
    let horariosDisponiveis = getHorariosPrestadorDia(idPrestador, diaDaSemana);
    console.log(horariosDisponiveis);
    let servicosPrestador = getServicosPrestador(idPrestador);
    console.log(servicosPrestador);
    for(let i=0; i<servicosPrestador.length; i++){
        if(servicosPrestador[i].data == dia.toISOString().slice(0, 10)){
            horariosDisponiveis.splice(horariosDisponiveis.indexOf(servicosPrestador[i].hora), 1);
        }
    }
    return horariosDisponiveis;
}

function getDiasLimitesMes(data){
    let primeiroDia = new Date(data.getFullYear(), data.getMonth(), 1);
    let primeiroDiaSemana = primeiroDia.getDay();
    let primeiroDiaCalendario = new Date(primeiroDia.getFullYear(), primeiroDia.getMonth(), primeiroDia.getDate() - primeiroDiaSemana);
    let ultimoDiaCalendario = new Date(primeiroDiaCalendario.getFullYear(), primeiroDiaCalendario.getMonth(), primeiroDiaCalendario.getDate() + 34);
    return {
        primeiro: primeiroDiaCalendario,
        ultimo: ultimoDiaCalendario
    }
}

function putPrestador(idPrestador){
    let prestador = getPrestador(idPrestador);
    let prestadorDiv = document.getElementById("service");
    prestadorDiv.innerHTML = `
    <div id="imgDiv">
        <img id="mainImg" src="${prestador.imagens[0]}">
        <div id="miniImgs">
        </div>
    </div>
    <div id="info">
        <h1 id="title">${prestador.nome}</h1>
        <p id="description">${prestador.descricao}</p>
        <div id="rating"></div>
        <span id="price">R$${prestador.preco}/Hora</span>
        <button id="redirectButton">Contratar</button>
    </div>
    `
    for(let i=0; i<prestador.imagens.length; i++){
        let miniImg = document.createElement("img");
        miniImg.src = prestador.imagens[i];
        miniImg.className = "miniImg";
        document.getElementById("miniImgs").appendChild(miniImg);
    }
    document.getElementById("rating").appendChild(createStarsElt(prestador.nota));
    for(let i=0; i<document.getElementsByClassName("miniImg").length;i++){
        document.getElementsByClassName("miniImg")[i].addEventListener("mouseover", function(){
            document.getElementById("mainImg").src = document.getElementsByClassName("miniImg")[i].src;
            document.getElementsByClassName("miniImg")[i].style.border = "5px solid #000";
            for(let j=0; j<document.getElementsByClassName("miniImg").length;j++){
                if(j!=i){
                    document.getElementsByClassName("miniImg")[j].style.border = "3px solid grey";
                }
            }
        })
    }
    document.getElementById("hirePrice").innerHTML = "R$"+prestador.preco;
    document.getElementById("bubbleDiv").addEventListener("click", ()=>{
        window.location.href = "https://wa.me/"+prestador.telefone.replace(/\D/g, "");
    })
}

function putDaysCalendar(day){
    let daysSpans = document.getElementsByClassName("dayDisplay");
    let diasLimites = getDiasLimitesMes(day);
    let dia = diasLimites.primeiro;
    for(let i=0; i<daysSpans.length; i++){
        daysSpans[i].innerHTML = dia.getDate();
        daysSpans[i].dataset.date = dia;
        dia = new Date(dia.getFullYear(), dia.getMonth(), dia.getDate()+1);
    }
}

function putQtdHorariosDisponiveisCalendar(idPrestador, day){
    let diasLimites = getDiasLimitesMes(day);
    let dia = diasLimites.primeiro;
    for(let i=0; i<35; i++){
        let qtdHorariosDisponiveis = getHorariosPrestadorDisponiveisDia(idPrestador, dia).length;
        document.getElementsByClassName("availableTimes")[i].innerHTML = qtdHorariosDisponiveis;
        dia = new Date(dia.getFullYear(), dia.getMonth(), dia.getDate()+1);
    }
}

function addZeroToNumber(number){
    if(number<10){
        return "0"+number;
    }else{
        return number;
    }
}

function selectDate(idPrestador, day){
    let diaDaSemana = getDiaDaSemana(day);
    let horariosPossiveis = getHorariosPrestadorDia(idPrestador, diaDaSemana);
    let horariosDisponiveis = getHorariosPrestadorDisponiveisDia(idPrestador, day);
    let dayInfoTitle =  document.getElementById("dayInfoTitle");
    let availableTimesDiv = document.getElementById("horariosDisponiveis");
    dayInfoTitle.innerHTML = "Dia "+ addZeroToNumber(day.getDate()) + "/" + addZeroToNumber(day.getMonth()+1)
    availableTimesDiv.innerHTML = "";
    for(let i=0; i<horariosPossiveis.length; i++){
        let horarioDisponivel = document.createElement("div");
        horarioDisponivel.classList.add("horarioDisponivel");
        if(horariosDisponiveis.includes(horariosPossiveis[i])){
            horarioDisponivel.addEventListener("click", ()=>{
                document.getElementById("hireTime").innerHTML = `Dia ${addZeroToNumber(day.getDate())}/${addZeroToNumber(day.getMonth()+1)} às ${horarioDisponivel.innerHTML}`
            });
        }else{
            horarioDisponivel.classList.add("horarioIndisponivel");
        }
        horarioDisponivel.innerHTML = horariosPossiveis[i];
        availableTimesDiv.appendChild(horarioDisponivel);
    }
}

function putCurrentMonth(date){
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    document.getElementById("mesMostrado").innerHTML = months[date.getMonth()]+" de "+date.getFullYear();
}

function showUnavailableDays(){
    let today = new Date(new Date().getTime() - 86400000);
    let calendarDay = document.getElementsByClassName("calendarDay");
    let dayDisplays = document.getElementsByClassName("dayDisplay");
    let availableTimes = document.getElementsByClassName("availableTimes");
    for(let i=0; i<calendarDay.length; i++){
        if(new Date(dayDisplays[i].dataset.date) < today){
            calendarDay[i].classList.add("unavailableDay");
            availableTimes[i].innerHTML = "-";
        }
        else{
            calendarDay[i].classList.remove("unavailableDay");
        }
    }
}

function showUnavailableTimes(){
    let horariosDisponiveis = document.getElementsByClassName("horarioDisponivel");
    let day = {"dia": 0, "mes": 0, "ano": 0};
    day.dia = document.getElementById("dayInfoTitle").innerHTML.split(" ")[1].split("/")[0];
    day.mes = document.getElementById("dayInfoTitle").innerHTML.split(" ")[1].split("/")[1];
    day.ano = document.getElementById("mesMostrado").innerHTML.split(" ")[2];
    for(let i=0;i<horariosDisponiveis.length;i++){
        let horario = {"hora": horariosDisponiveis[i].innerHTML.split(":")[0], "minuto": horariosDisponiveis[i].innerHTML.split(":")[1]};
        let data = new Date(day.ano, day.mes-1, day.dia, horario.hora, horario.minuto);
        if(data < new Date()){
            horariosDisponiveis[i].classList.add("horarioIndisponivel");
        }
    }
}


for(let i=0;i<35;i++){
    document.getElementsByClassName("calendarDay")[i].addEventListener("click", ()=>{
        if(!document.getElementsByClassName("calendarDay")[i].classList.contains("unavailableDay")){
            selectDate(getPageId(), new Date(document.getElementsByClassName("dayDisplay")[i].dataset.date));
            showUnavailableTimes();
        }
    })   
}

let dataMostrada = new Date();

document.getElementById("prev").addEventListener("click", ()=>{
    dataMostrada = new Date(dataMostrada.getFullYear(), dataMostrada.getMonth()-1, 1);
    putDaysCalendar(dataMostrada);
    putQtdHorariosDisponiveisCalendar(getPageId(), dataMostrada);
    putCurrentMonth(dataMostrada);
    showUnavailableDays()
})

document.getElementById("next").addEventListener("click", ()=>{
    dataMostrada = new Date(dataMostrada.getFullYear(), dataMostrada.getMonth()+1, 1);
    putDaysCalendar(dataMostrada);
    putQtdHorariosDisponiveisCalendar(getPageId(), dataMostrada);
    putCurrentMonth(dataMostrada);
    showUnavailableDays()
})

document.getElementById("hireButton").addEventListener("click", ()=>{
    let id = getLogin();
    if(id == null || id == undefined || id == ""){
        alert("Faça login para contratar um serviço");
        window.location.href = "login.html";
        return;
    }
    if(document.getElementById("hireTime").innerHTML == "Selecione um horário"){
        alert("Selecione um horário");
    }else{
        document.getElementById("dialogDesc").innerHTML = `O serviço ${getPrestador(getPageId()).nome} será realizado ${document.getElementById("hireTime").innerHTML.toLowerCase()}`;
        document.getElementsByTagName("dialog")[0].showModal()
        let servicos = getServicos();
        servicos.push({
            "idPrestador": parseInt(getPageId()),
            "idServiço": servicos.length+1,
            "idCliente": id,
            "data": document.getElementById("mesMostrado").innerHTML.split(" ")[2]+"-"+document.getElementById("hireTime").innerHTML.split(" ")[1].split("/")[1]+"-"+document.getElementById("hireTime").innerHTML.split(" ")[1].split("/")[0],
            "hora": document.getElementById("hireTime").innerHTML.split(" ")[3],
            "endereco": document.getElementById("hireEndereco1").value+" " + document.getElementById("hireEndereco2").value,
        })
        localStorage.setItem("servicos", JSON.stringify(servicos));
    }
})



putCurrentMonth(dataMostrada);
putPrestador(getPageId());
putDaysCalendar(new Date());
putQtdHorariosDisponiveisCalendar(getPageId(), new Date());
selectDate(getPageId(), new Date());
showUnavailableDays();
showUnavailableTimes();

document.getElementById("redirectButton").addEventListener("click", e=>{
    e.preventDefault();
    window.scrollTo({ top: 900, behavior: 'smooth' })
})