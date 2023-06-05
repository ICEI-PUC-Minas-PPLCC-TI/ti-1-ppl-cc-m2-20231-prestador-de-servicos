//Parte de criação dos objetos usando Class e constructors

class User{
    constructor(
        name,
        servico,
        preço,
        horario,
        ava,
        img
    ){
        this.name = name;
        this.servico = servico;
        this.preço = preço;
        this.horario = horario;
        this.ava = ava;
        this.img = img;
    }
}

let users = [];

let user1 = new User("Jose", "Dev",  130, "24/7", "Unavailable","https://picsum.photos/200?random=1");
let user2 = new User("Maria", "Dev",  200, "24/7", "Unavailable","https://picsum.photos/200?random=2");
let user3 = new User("Niet", "Pedreiro", 100, "Weekday", "Unavailable","https://picsum.photos/200?random=3");
let user4 = new User("Jota", "Dev",  50, "Weekday", "Available","https://picsum.photos/200?random=4");
let user5 = new User("Arthur", "Dev",  200, "24/7", "Available","https://picsum.photos/200?random=5");
let user6 = new User("Andre", "Pedreiro", 100, "Weekday", "Available","https://picsum.photos/200?random=6");
let user7 = new User("Oli", "Dj", 20, "Weekday", "Unavailable","https://picsum.photos/200?random=7");
let user8 = new User("Pedro", "Dev", 20, "Weekday", "Unavailable","https://picsum.photos/200?random=8");
let user9 = new User("Joao", "Faxineira", 20, "Weekday", "Unavailable","https://picsum.photos/200?random=9");
let user10 = new User("Tuga", "Dj", 20, "Weekday", "Unavailable","https://picsum.photos/200?random=10");
let user11 = new User("Luisa", "Designer", 150, "Weekday", "Available","https://picsum.photos/200?random=11");
let user12 = new User("Gabriel", "Musico", 180, "24/7", "Unavailable","https://picsum.photos/200?random=12");
let user13 = new User("Rafaela", "Escritor", 90, "Weekday", "Available","https://picsum.photos/200?random=13");
let user14 = new User("Miguel", "Eletricista", 80, "Weekday", "Available","https://picsum.photos/200?random=14");
let user15 = new User("Carolina", "Fotografo", 200, "Weekday", "Unavailable","https://picsum.photos/200?random=15");
let user16 = new User("Lucas", "Dev", 120, "24/7", "Unavailable","https://picsum.photos/200?random=16");
let user17 = new User("Isabela", "Tradutor", 60, "Weekday", "Available","https://picsum.photos/200?random=17");
let user18 = new User("Felipe", "Jardineiro", 70, "Weekday", "Available","https://picsum.photos/200?random=18");
let user19 = new User("Sofia", "Chef", 180, "24/7", "Unavailable","https://picsum.photos/200?random=19");
let user20 = new User("Gustavo", "Musico", 40, "Weekday", "Available","https://picsum.photos/200?random=20");

users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
users.push(user5);
users.push(user6);
users.push(user7);
users.push(user8);
users.push(user9);
users.push(user10);
users.push(user11);
users.push(user12);
users.push(user13);
users.push(user14);
users.push(user15);
users.push(user16);
users.push(user17);
users.push(user18);
users.push(user19);
users.push(user20);

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

$(function () {
  function displayCards() {
      var type = $('.type').val();
      var ava = $('.ava').val();
      var category = $('.category').val();
      var cardElements = '';
      console.log(type)
      console.log(ava)
      console.log(category)
      for (var i = 0; i < users.length; i++) {
          if ((type == users[i].servico || type == undefined) && (ava == users[i].ava || ava == undefined) && (category == users[i].horario || category == undefined)) {
              cardElements += `
                  <div class="card m-4" style="width: 18rem;">
                      <img class="card-img-top img-small" src="${users[i].img}" alt="Card image cap">
                      <div class="card-body">
                          <p class="card-text">${users[i].name} é um iworker especializado em ${users[i].servico}. Trabalha em ${users[i].horario}, e agora está ${users[i].ava}</p>
                          <p class="card-text">R$: ${users[i].preço}.</p>
                          <a href="#" class="card-text">Contato: 31 912344321.</a>
                          <button class="mt-2 status-btn btn btn-primary" data-index="${i}">Alterar estado</button>
                      </div>
                  </div>
              `;
          } else {
              document.querySelector(".pcards").innerHTML = "";
          }
      }
      if (cardElements !== '') {
          document.querySelector(".pcards").innerHTML = cardElements;
      }

      $('.status-btn').on('click', function () {
          var index = $(this).data('index');
          var user = users[index];

          if (user.ava === "Available") {
              user.ava = "Unavailable";
          } else {
              user.ava = "Available";
          }

          $(this).siblings('.card-text').first().text(`${user.name} é um iworker especializado em ${user.servico}. Trabalha em ${user.horario}, e agora está ${user.ava}`);

          localStorage.setItem('users', JSON.stringify(users));
      });
  }
  displayCards();
  
  $('#look').on('click', function () {
      displayCards();
  });
});
