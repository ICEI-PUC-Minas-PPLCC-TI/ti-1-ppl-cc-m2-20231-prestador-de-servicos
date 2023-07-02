function getLogin(){
    let login = JSON.parse(localStorage.getItem("login"));
    if(login == null){
        window.location.href = "login.html";
    }
    if(login.type == "consumidor"){
        window.location.href = "login.html";
    }
    return login.id;
}

function getPrestador(){
    let id = getLogin();
    let prestadores = JSON.parse(localStorage.getItem("prestadores"));
    for(let i = 0; i < prestadores.length; i++){
        if(prestadores[i].id == id){
            return prestadores[i];
        }
    }
    window.location.href = "login.html";
}

function getServicos(){
    return JSON.parse(localStorage.getItem("servicos"));
}

function getConsumidores(){
    return JSON.parse(localStorage.getItem("consumidores"));
}

function getConsumidor(id){
    let consumidores = getConsumidores();
    for(let i=0; i<consumidores.length; i++){
        if(consumidores[i].id == id){
            return consumidores[i];
        }
    }
}

function getServicosPrestador(){
    let idPrestador = getLogin();
    let servicos = getServicos();
    let servicosPrestador = [];
    for(let i=0; i<servicos.length; i++){
        if(servicos[i].idPrestador == idPrestador){
            servicosPrestador.push(servicos[i]);
        }
    }
    return servicosPrestador;
}

function getHorariosPrestadorDia(diaDaSemana){
    let prestador = getPrestador();
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

function getHorariosPrestadorDisponiveisDia(dia){
    let diaDaSemana = getDiaDaSemana(dia);
    let horariosDisponiveis = getHorariosPrestadorDia(diaDaSemana);
    console.log(horariosDisponiveis);
    let servicosPrestador = getServicosPrestador();
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

function putQtdHorariosDisponiveisCalendar(day){
    let diasLimites = getDiasLimitesMes(day);
    let dia = diasLimites.primeiro;
    for(let i=0; i<35; i++){
        let qtdHorariosDisponiveis = getHorariosPrestadorDia(dia.getDay()).length-getHorariosPrestadorDisponiveisDia(dia).length;
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

function selectDate(day){
    let diaDaSemana = getDiaDaSemana(day);
    let horariosPossiveis = getHorariosPrestadorDia(diaDaSemana);
    let horariosDisponiveis = getHorariosPrestadorDisponiveisDia(day);
    let dayInfoTitle =  document.getElementById("dayInfoTitle");
    let availableTimesDiv = document.getElementById("horariosDisponiveis");
    dayInfoTitle.innerHTML = "Dia "+ addZeroToNumber(day.getDate()) + "/" + addZeroToNumber(day.getMonth()+1)
    availableTimesDiv.innerHTML = "";
    for(let i=0; i<horariosPossiveis.length; i++){
        let horarioDisponivel = document.createElement("div");
        horarioDisponivel.classList.add("horarioDisponivel");
        if(!horariosDisponiveis.includes(horariosPossiveis[i])){
            horarioDisponivel.addEventListener("click", ()=>{
                let servicos = getServicosPrestador();
                let servico;
                for(let i=0; i<servicos.length; i++){
                    if(servicos[i].data == day.toISOString().slice(0, 10) && servicos[i].hora == horarioDisponivel.innerHTML){
                        servico = servicos[i];
                    }
                }
                let consumidor = getConsumidor(servico.idCliente);
                document.getElementById("nomeConsumidor").innerHTML = consumidor.nome;
                if(servico.endereco == "" || servico.endereco == undefined || servico.endereco == null){
                    document.getElementById("enderecoConsumidor").innerHTML = "Endereço não informado";
                }else{
                document.getElementById("enderecoConsumidor").innerHTML = servico.endereco;
                }
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

function putPrestadorInfo(){
    let prestador = getPrestador();
    document.getElementById("perfilTitle").innerHTML = prestador.nome;
    document.getElementById("perfilDesc").innerHTML = prestador.descricao;
    document.getElementById("perfilPreco").innerHTML = "R$"+prestador.preco;
    document.getElementById("imgsDiv").innerHTML = "";
    prestador.imagens.forEach(img => {
        let imgDiv = document.createElement("div");
        imgDiv.classList.add("imgDiv");
        imgDiv.innerHTML = `
            <img class="perfilImg" src="${img}">
            <img class="trashImg" src="src/img/trash.png">
        `
        imgDiv.children[1].addEventListener("click", ()=>{
            document.getElementById("imgsDiv").removeChild(imgDiv);
        })
        document.getElementById("imgsDiv").appendChild(imgDiv);
    })
    let addImgBtn = document.createElement("button");
    addImgBtn.id = "addImgBtn";
    addImgBtn.innerHTML = "+";
    addImgBtn.addEventListener("click", ()=>{
        if(document.getElementsByClassName("imgDiv").length >= 4){
            alert("Limite de imagens atingido");
            return;
        }
        let img = prompt("Insira o link da imagem");
        if(img == null || img == ""){
            alert("Insira um link válido");
            return;
        }
        let imgDiv = document.createElement("div");
        imgDiv.classList.add("imgDiv");
        imgDiv.innerHTML = `
            <img class="perfilImg" src="${img}">
            <img class="trashImg" src="src/img/trash.png">
        `
        document.getElementById("imgsDiv").appendChild(imgDiv);
    })
    document.getElementById("imgsDiv").appendChild(addImgBtn);
}


function putDiasDaSemana(){
    let dias = getPrestador().dias;
    let horarioElts = document.getElementsByClassName("horario");
    for(let i=0;i<dias.length;i++){
        for(let j=7;j<=23;j++){
            if(dias[i].horas.includes(j+":00")){
                horarioElts[(j-7)*7+i].classList.remove("disabledHorario");
            }
        }
    }
}

putPrestadorInfo();

for(let i=0;i<35;i++){
    document.getElementsByClassName("calendarDay")[i].addEventListener("click", ()=>{
        if(!document.getElementsByClassName("calendarDay")[i].classList.contains("unavailableDay")){
            selectDate(new Date(document.getElementsByClassName("dayDisplay")[i].dataset.date));
            showUnavailableTimes();
        }
    })   
}

let dataMostrada = new Date();


document.getElementById("prev").addEventListener("click", ()=>{
    dataMostrada = new Date(dataMostrada.getFullYear(), dataMostrada.getMonth()-1, 1);
    putDaysCalendar(dataMostrada);
    putQtdHorariosDisponiveisCalendar(dataMostrada);
    putCurrentMonth(dataMostrada);
    showUnavailableDays()
})

document.getElementById("next").addEventListener("click", ()=>{
    dataMostrada = new Date(dataMostrada.getFullYear(), dataMostrada.getMonth()+1, 1);
    putDaysCalendar(dataMostrada);
    putQtdHorariosDisponiveisCalendar(dataMostrada);
    putCurrentMonth(dataMostrada);
    showUnavailableDays()
})

document.getElementById("perfilSaveBtn").addEventListener("click", ()=>{
    let prestador = getPrestador();
    if(document.getElementById("perfilNewTitle").value!= '') prestador.nome = document.getElementById("perfilNewTitle").value;
    if(document.getElementById("perfilNewDesc").value!= '')prestador.descricao = document.getElementById("perfilNewDesc").value;
    if(document.getElementById("perfilNewPreco").value!= ''){
        if(document.getElementById("perfilNewPreco").value.split("R$")[1] == undefined){
            prestador.preco = parseFloat(document.getElementById("perfilNewPreco").value);
        }else{
            prestador.preco = parseFloat(document.getElementById("perfilNewPreco").value.split("R$")[1]);
        }
    }
    let prestadores = JSON.parse(localStorage.getItem("prestadores"));
    for(let i=0; i<prestadores.length; i++){
        if(prestadores[i].id == prestador.id){
            prestadores[i] = prestador;
        }
    }
    prestador.imagens = [];
    let imgs = document.getElementsByClassName("perfilImg");
    for(let i=0; i<imgs.length; i++){
        prestador.imagens.push(imgs[i].src);
    }
    localStorage.setItem("prestadores", JSON.stringify(prestadores));
    alert("Alterações guardadas com sucesso!");
    putPrestadorInfo();
})

document.getElementById("horariosConfirmBtn").addEventListener("click", ()=>{
    let horarioElts = document.getElementsByClassName("horario");
    let prestador = getPrestador();

    prestador.dias.forEach(dia => {
        dia.horas = [];
    });

    for(let i=0;i<17;i++){
        for(let j=0;j<7;j++){
            if(!(horarioElts[i*7+j].classList.contains("disabledHorario"))){
                prestador.dias[j].horas.push((i+7)+":00");
            }
        }
    }

    let prestadores = JSON.parse(localStorage.getItem("prestadores"));
    for(let i=0; i<prestadores.length; i++){
        if(prestadores[i].id == prestador.id){
            prestadores[i] = prestador;
        }
    }
    localStorage.setItem("prestadores", JSON.stringify(prestadores));
    alert("Alterações guardadas com sucesso!");
    putDiasDaSemana();
})

for(let i=0;i<119;i++){
    document.getElementsByClassName("horario")[i].addEventListener("click", ()=>{
        if(document.getElementsByClassName("horario")[i].classList.contains("disabledHorario")){
            document.getElementsByClassName("horario")[i].classList.remove("disabledHorario");
        }else{
            document.getElementsByClassName("horario")[i].classList.add("disabledHorario");
        }
    })
}

putCurrentMonth(dataMostrada);
putDaysCalendar(new Date());
putQtdHorariosDisponiveisCalendar(new Date());
selectDate(new Date());
showUnavailableDays();
showUnavailableTimes();
putDiasDaSemana();