function getLogin(){
    return JSON.parse(localStorage.getItem('login')).id;
}

function getServices(){
    return JSON.parse(localStorage.getItem('servicos'));
}

function getProfileServices(){
    let services = getServices();
    let login = getLogin();
    let res = [];

    for(let i = 0; i < services.length; i++){
        if(services[i].idCliente == login){
            res.push(services[i]);
        }
    }

    res.sort((b, a) => {
        let dateA = new Date(a.data + ' ' + a.hora);
        let dateB = new Date(b.data + ' ' + b.hora);
        return dateA - dateB;
    })

    return res;
}


function getPrestadorById(id){
    let prestadores = JSON.parse(localStorage.getItem('prestadores'));
    for(let i = 0; i < prestadores.length; i++){
        if(prestadores[i].id == id){
            return prestadores[i];
        }
    }
}

function putServices(){
    let services = getProfileServices();
    document.getElementById('main').innerHTML = '';
    let i = 0;
    services.forEach(service => {
        document.getElementById('main').innerHTML += `
        <div class="serviceDiv">
            <div class="serviceImgDiv">
                <img class="serviceImg" src="${getPrestadorById(service.idPrestador).imagens[0]}">
            </div>
            <div class="serviceInfo">
                <h3 class="serviceName">${getPrestadorById(service.idPrestador).nome}</h3>
                <p class="servicePrice">R$${getPrestadorById(service.idPrestador).preco}</p>
                <p class="servicePrice data">${service.hora} ${service.data}</p>
                <ul class="serviceRating" data-idPrestador=${service.idPrestador}>
                    <img class="star" onclick='rate(${i}, ${1})' onmouseover='appearRate(${i}, ${1})' onmouseleave="disappearAll(${i})" src="./src/img/emptyStar.png">
                    <img class="star" onclick='rate(${i}, ${2})' onmouseover='appearRate(${i}, ${2})' onmouseleave="disappearAll(${i})" src="./src/img/emptyStar.png">
                    <img class="star" onclick='rate(${i}, ${3})' onmouseover='appearRate(${i}, ${3})' onmouseleave="disappearAll(${i})" src="./src/img/emptyStar.png">
                    <img class="star" onclick='rate(${i}, ${4})' onmouseover='appearRate(${i}, ${4})' onmouseleave="disappearAll(${i})" src="./src/img/emptyStar.png">
                    <img class="star" onclick='rate(${i}, ${5})' onmouseover='appearRate(${i}, ${5})' onmouseleave="disappearAll(${i})" src="./src/img/emptyStar.png">
                </ul>
            </div>
        </div>
        `
        i++;
    })
}

function rate(i, nota){
    console.log(i, nota);
    let services = getProfileServices();
    let login = getLogin();
    let parent = document.getElementsByClassName('serviceRating')[i];
    let children = parent.children;
    let idPrestador = parent.getAttribute('data-idPrestador');
    let prestador = getPrestadorById(idPrestador);
    let prestadores = JSON.parse(localStorage.getItem('prestadores'));
    
    for(let i = 0; i < children.length; i++){
        children[i].removeAttribute('onmouseleave');
        if(i < nota){
            children[i].src = './src/img/star.png';
        }else{
            children[i].src = './src/img/emptyStar.png';
        }
    }
    prestador.nota = (prestador.nota * prestador.nAvaliações + nota) / (prestador.nAvaliações + 1);
    prestador.nAvaliações++;
    
    for(let i = 0; i < prestadores.length; i++){
        if(prestadores[i].id == prestador.id){
            prestadores[i] = prestador;
        }
    }

    localStorage.setItem('prestadores', JSON.stringify(prestadores));
}

function appearRate(i, nota){
    let parent = document.getElementsByClassName('serviceRating')[i];
    let children = parent.children;
    for(let i = 0; i < children.length; i++){
        if(i < nota){
            children[i].src = './src/img/star.png';
        }else{
            children[i].src = './src/img/emptyStar.png';
        }
    }
}

function disappearAll(i){
    let parent = document.getElementsByClassName('serviceRating')[i];
    let children = parent.children;

    for(let i = 0; i < parent.children.length; i++){
        children[i].src = './src/img/emptyStar.png';
    }
}

putServices()