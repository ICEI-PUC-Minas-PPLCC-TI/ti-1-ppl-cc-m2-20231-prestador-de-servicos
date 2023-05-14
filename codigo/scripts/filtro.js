// Parte de criação dos objetos usando Class e constructors

class User{
    constructor(
        name,
        servico,
        preço,
        horario,
        cidade,
        img
    ){
        this.name = name;
        this.servico = servico;
        this.preço = preço;
        this.horario = horario;
        this.cidade = cidade;
        this.img = img;
    }
}

let users = [];

let user1 = new User("Jose", "Dev",  300, "24/7", "MG/bh","https://picsum.photos/200?random=1");
let user2 = new User("Maria", "Dev",  200, "24/7", "MG/bh","https://picsum.photos/200?random=2");
let user3 = new User("Niet", "Pedreiro", 100, "Weekday", "MG/bh","https://picsum.photos/200?random=3");
let user4 = new User("Jota", "Dev",  1000, "Weekday", "MG/bh","https://picsum.photos/200?random=4");
let user5 = new User("Arthur", "Dev",  200, "24/7", "MG/sabará","https://picsum.photos/200?random=5");
let user6 = new User("Andre", "Pedreiro", 100, "Weekday", "MG/sabará","https://picsum.photos/200?random=6");
let user7 = new User("Oli", "Dev", 100, "Weekday", "MG/bh","https://picsum.photos/200?random=7");

users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
users.push(user5);
users.push(user6);
users.push(user7);

//envio dos objetos criados para o local storage

try {
    localStorage.setItem("users", JSON.stringify(users));
  } catch (error) {
    console.error(error);
  }

let storedUsers = JSON.parse(localStorage.getItem("users"));
if (storedUsers === null) {
  console.log("No users found in local storage");
}

//função de filtro
$(function () {
    $('#look').on('click', function () {
      var type = $('.type').val();
      var city = $('.city').val();
      var category = $('.category').val();
      var price = $('.price').val();
      var cardElements = '';
      for(var i = 0; i < users.length; i++){
        if(type == users[i].servico && city == users[i].cidade && category == users[i].horario && price >= users[i].preço){
          cardElements += `
            <div class="card bg-dark" style="width: 18rem;">
              <img class="card-img-top img-small" src="${users[i].img}" alt="Card image cap">
              <div class="card-body">
                <p class="card-text text-white">${users[i].name} is an iWorker that specializes in ${users[i].servico}. Available on ${users[i].horario}</p>
                <p class="card-text text-white">R$: ${users[i].preço}.</p>
              </div>
            </div>
          `;
        }
        else{
            document.querySelector(".pcards").innerHTML = "";  
        }
      }
      if(cardElements !== ''){
        document.querySelector(".pcards").innerHTML = cardElements;
      }
    });
  });

