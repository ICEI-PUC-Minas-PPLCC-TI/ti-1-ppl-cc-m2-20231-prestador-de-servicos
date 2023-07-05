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
        window.location.href = "https://wa.me/"+prestador.telefone;
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
        let prestador = getPrestador(getPageId());
        servicos.push({
            "idPrestador": parseInt(getPageId()),
            "idServiço": servicos.length+1,
            "idCliente": id,
            "data": document.getElementById("mesMostrado").innerHTML.split(" ")[2]+"-"+document.getElementById("hireTime").innerHTML.split(" ")[1].split("/")[1]+"-"+document.getElementById("hireTime").innerHTML.split(" ")[1].split("/")[0],
            "hora": document.getElementById("hireTime").innerHTML.split(" ")[3],
            "endereco": document.getElementById("hireEndereco1").value+" " + document.getElementById("hireEndereco2").value,
        })
        localStorage.setItem("servicos", JSON.stringify(servicos));
        let prestadores = getPrestadores();
        for(let i=0; i<prestadores.length; i++){
            if(prestadores[i].id == getPageId()){
                prestadores[i].nPedidos++;
                localStorage.setItem("prestadores", JSON.stringify(prestadores));
                break;
            }
        }
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