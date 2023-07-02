function getPrestadores(){
    return JSON.parse(localStorage.getItem("prestadores"));
}

function getConsumidores(){
    return JSON.parse(localStorage.getItem("consumidores"));
}

function getUsers(){
    let prestadores = getPrestadores();
    prestadores.forEach(prestador => prestador.type = "prestador");
    let consumidores = getConsumidores();
    consumidores.forEach(consumidor => consumidor.type = "consumidor");
    let users = prestadores.concat(consumidores);
    return users;
}

function login(){
    let users = getUsers();
    let email = document.getElementById("emailIn").value;
    let senha = document.getElementById("senhaIn").value;
    let user = users.find(user => user.email == email && user.senha == senha);
    if(user){
        localStorage.setItem("login", JSON.stringify({"id": user.id, "type": user.type}));
        if(user.type == "prestador"){
            window.location.href = "./prestador.html";
        }else{
            window.location.href = "./pesquisa.html";
        }
    }else{
        alert("Email ou senha incorretos");
    }
}


document.getElementById("loginBtn").addEventListener("click", e=>{
    e.preventDefault();
    login();
});