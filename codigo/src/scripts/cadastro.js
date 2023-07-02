function getPrestadores(){
    return JSON.parse(localStorage.getItem("prestadores"));
}

function getConsumidores(){
    return JSON.parse(localStorage.getItem("consumidores"));
}

function getSelectedValue() {
    let radios = document.querySelectorAll('input[name="type"]');
    let selectedValue;
  
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        selectedValue = radios[i].value;
        break;
      }
    }
    return selectedValue;
}


function getUsers(){
    let prestadores = getPrestadores();
    prestadores.forEach(prestador => prestador.type = "prestador");
    let consumidores = getConsumidores();
    consumidores.forEach(consumidor => consumidor.type = "consumidor");
    let users = prestadores.concat(consumidores);
    return users;
}

function register(){
    let users = getUsers();
    let nome = document.getElementById("nomeIn").value;
    let email = document.getElementById("emailIn").value;
    let telefone = document.getElementById("telefoneIn").value;
    let senha = document.getElementById("senhaIn").value;
    let confirmacaoSenha = document.getElementById("senhaIn2").value;
    let type = getSelectedValue();
    if(email=="" || senha=="" || nome=="" || type=="" || type == undefined){
        alert("Preencha todos os campos");
        return;
    }
    if(senha != confirmacaoSenha){
        alert("As senhas não coincidem");
        return;
    }
    if(email.indexOf("@") == -1){
        alert("Email inválido");
        return;
    }
    let isThereSameEmail = users.find(user => user.email == email);
    if(isThereSameEmail){
        alert("Email já cadastrado");
        return;
    }
    let id = users.length + 1;
    if(type == "prestador"){
        let user = {"id": id, "nomePrestador": nome, "telefone": telefone, "email": email, "senha": senha, "nome": "", categoria: "", "preco": 0, "nota": 0, "nAvaliacoes": 0, "nPedidos": 0, "descricao": "", "imagens": [], "dias": [{"dia": "domingo", "horas": []}, {"dia": "segunda", "horas": []}, {"dia": "terça", "horas": []}, {"dia": "quarta", "horas": []}, {"dia": "quinta", "horas": []}, {"dia": "sexta", "horas": []}, {"dia": "sábado", "horas": []}, ]};
        let prestadores = getPrestadores();
        prestadores.push(user);
        localStorage.setItem("prestadores", JSON.stringify(prestadores));
        localStorage.setItem("login", JSON.stringify({"id": id, "type": "prestador"}));
        window.location.href = "./prestador.html";
    }else{
        let user = {"id": id, "nome": nome, "email": email, "senha": senha};
        let consumidores = getConsumidores();
        consumidores.push(user);
        localStorage.setItem("consumidores", JSON.stringify(consumidores));
        localStorage.setItem("login", JSON.stringify({"id": id, "type": "consumidor"}));
        window.location.href = "./pesquisa.html";
    }
    
}


document.getElementById("cadastroBtn").addEventListener("click", e=>{
    e.preventDefault();
    register();
});