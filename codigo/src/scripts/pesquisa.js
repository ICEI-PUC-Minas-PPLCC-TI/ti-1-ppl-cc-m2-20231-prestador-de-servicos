var currentResults = getPrestadores();

function createStarsElt(nota){
    let starsImg = document.createElement("img");
    starsImg.classList.add("estrelasImg");
    starsImg.src = "./src/img/stars.png";
    starsImg.style.clipPath = "inset(0 " + (100-nota*20) + "% 0 0)";
    return starsImg;
}

function getPageCategory(){
    let url = window.location.href;
    let category;
    let categoryElts = document.getElementsByClassName("categoryLink");
    console.log(categoryElts);
    for(let i=0; i<categoryElts.length; i++){
        categoryElts[i].classList.remove("categorySelected");
    }
    try{
        let urlParams = url.split("?");
        category = urlParams[1].split("=")[1];
        for(let i=0; i<categoryElts.length; i++){
            if(categoryElts[i].innerHTML.toLowerCase().replace(/\s/g, "") == category){
                categoryElts[i].classList.add("categorySelected");
            }
        }
    }catch{
        category = 'Todos';
        document.getElementById("noCategory").firstChild.classList.add("categorySelected");
    }
    return category;
}

function getPrestadores(){
    let prestadores = JSON.parse(localStorage.getItem("prestadores"))
    let categoria = getPageCategory();
    if(categoria == 'Todos') return prestadores;
    prestadores = prestadores.filter(prestador=>prestador.categoria.toLowerCase().replace(/\s/g, "") == categoria)
    return prestadores;
}

function searchPrestadores(text){
    let prestadores = getPrestadores();
    let result = [];
    for(let i=0; i<prestadores.length; i++){
        if(prestadores[i].nome.toLowerCase().includes(text.toLowerCase())){
            result.push(prestadores[i]);
        }
    }
    return result;
}

function filterResults(prestadores){
    let result = [];
    let minPrice = document.getElementById("priceMin").value;
    if(minPrice == "") minPrice = 0;
    let maxPrice = document.getElementById("priceMax").value;
    if(maxPrice == "") maxPrice = 100000;
    let order = document.getElementById("orderType").value;
    for(let i=0; i<prestadores.length; i++){
        if(prestadores[i].preco >= minPrice && prestadores[i].preco <= maxPrice){
            result.push(prestadores[i]);
        }
    }
    if(order == 1){
        result.sort((a, b)=>{return a.preco - b.preco});
    }else if(order == 2){
        result.sort((a, b)=>{return b.nota - a.nota});
    }else if(order == 3){
        console.log("Ainda não implementado");
    }
    return result;
}


function getPrestador(idPrestador){
    let prestadores = getPrestadores();
    for(let i=0; i<prestadores.length; i++){
        if(prestadores[i].id == idPrestador){
            return prestadores[i];
        }
    }
}

function limitText(text, limit){
    if(text.length > limit){
        return text.substring(0, limit-3) + "...";
    }
    return text;
}

function createServiceDiv(idPrestador){
    let prestador = getPrestador(idPrestador);
    let div = document.createElement("div");
    div.classList.add("service");
    div.innerHTML = `
        <img class="serviceImg" src="${prestador.imagens[0]}">
        <div class="serviceInfo">
            <h2 class="serviceName">${prestador.nome}</h2>
            <div id="separator">
                <p class="servicePrice">R$${prestador.preco}</p>
                <p class="serviceRating"></p>
            </div>    
            <p class="serviceDescription">${limitText(prestador.descricao, 213)}</p>
        </div>
    `;
    div.querySelector(".serviceRating").appendChild(createStarsElt(prestador.nota));
    div.addEventListener("click", ()=>{
        window.location.href = "./servico.html?id=" + prestador.id;
    })
    return div;
}

function putPrestadoresList(prestadoresList){
    document.getElementById("servicesDiv").innerHTML = "";
    for(let i=0; i<prestadoresList.length; i++){
        if(prestadoresList[i].nome == "" || prestadoresList[i].preco == 0) continue;
        document.getElementById("servicesDiv").appendChild(createServiceDiv(prestadoresList[i].id));
    }
}

function addResult(prestador){
    let div = document.createElement("div");
    div.classList.add("searchResult");
    div.innerHTML = `
        <img class="searchResultImg" src="${prestador.imagens[0]}">
        <span class="searchResultName">${prestador.nome}</span>
        <span class="searchResultPrice">R$${prestador.preco}</span>
    `;
    div.addEventListener("click", ()=>{
        window.location.href = "./servico.html?id=" + prestador.id;
    })
    document.getElementById("searchResults").appendChild(div);
}

function addResults(prestadoresList){
    document.getElementById("searchResults").innerHTML = "";
    for(let i=0; i<prestadoresList.length; i++){
        addResult(prestadoresList[i]);
    }
}

function putPrestadorBubble(){
    let login = JSON.parse(localStorage.getItem("login"));
    if(login.type == "prestador"){
        document.getElementById("bubbleDiv").style.display = "flex";
    }
}

putPrestadoresList(currentResults);
putPrestadorBubble();

document.getElementById("pesquisaIn").addEventListener("keyup", e=>{
    e.preventDefault();
    document.getElementById("searchResults").style.opacity = "1";
    addResults(searchPrestadores(document.getElementById("pesquisaIn").value).slice(0, 3));
})

document.getElementById("pesquisaIn").addEventListener("focus", e=>{
    e.preventDefault();
    document.getElementById("searchResults").style.opacity = "1";
    addResults(searchPrestadores(document.getElementById("pesquisaIn").value).slice(0, 3));
})

document.getElementById("pesquisaIn").addEventListener("blur", e=>{
    e.preventDefault();
    document.getElementById("searchResults").style.opacity = "0";
})

document.getElementById("pesquisaBtn").addEventListener("click", e=>{
    e.preventDefault();
    currentResults = searchPrestadores(document.getElementById("pesquisaIn").value);
    putPrestadoresList(currentResults);
})

document.getElementById("searchBtn").addEventListener("click", e=>{
    e.preventDefault();
    let filteredResults = filterResults(currentResults);
    putPrestadoresList(filteredResults);
})

