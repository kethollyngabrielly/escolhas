let suaidade;
let corpo;
let gênero;
let título;
let aventura;
let fantasia;
let ficçãocientífica;
let livros = {
  menor10:{
    aventura: "Matilda",
    fantasia: "A Princesinha",
    ficçãocientífica: "O Planeta das Crianças"
  },
  entre10e14:{
    aventura: "A Bússola de Ouro",
    fantasia: "O Jogo do Exterminador",
    ficçãocientífica: "O Ciclo da Herança"
  },
  entre14e16:{
  aventura: "A Cidade dos Ossos",
  fantasia: "A Seleção",
  ficçãocientífica: "A Mão Esquerda da Escuridão"
 },
  entre16e18:{
    aventura: "Cidades de Papel",
    fantasia: "A Corte de Rosas",
    ficçãocientífica: "O Hobbit"
  },
  maior18:{
    aventura: "A Maldição do Tigre",
    fantasia: "O Nome do Vento",
    ficçãocientífica: "Os Despossuídos"
  }
};

let botao;

function setup() {
  createCanvas(850, 400).position(100, 100);
  título = "Bungee Shade";
  corpo = "Amatic SC";
  gênero = "Bebas Neue";
  createSpan("Qual a sua idade?🐣").position(580, 530).addClass("esconde");
  suaidade = createInput("").position(590,585);
  aventura = createCheckbox("Você gosta de livros de aventura?😎🏔").position(100, 600).addClass("esconde");
  fantasia = createCheckbox("Você gosta de livros de fantasia?🧙‍♂️✨").position(100, 650).addClass("esconde");
   ficçãocientífica = createCheckbox("Você gosta de livros de ficção científica?🌠⭐").position(100, 700).addClass("esconde");
  
  botao = createButton("COMEÇAR🤪").position(width/2, 520);
  botao.mousePressed(bota);
  botao.addClass("botao");
}

function bota(){
  selectAll('.esconde').forEach((el) => el.removeClass('esconde'));
botao.hide();
}

function draw() {
  background("white");
  let idade = parseInt(suaidade.value());
  let checkaventura = aventura.checked();
  let checkfantasia = fantasia.checked();
  let livro = "Insira suas preferências"
  let checkficçãocientífica = ficçãocientífica.checked();
  if (suaidade.value() !==""){
    livro = mostralivro(idade, checkaventura, checkfantasia, checkficçãocientífica);
}
  fill("black");
  textAlign(CENTER,CENTER);
  textSize(30);
  text("📚💖MELHOR INDICADOR DE LIVROS💖📚", width/2,30);
  textFont(título)
  
fill("black");
stroke("white");
textAlign(CENTER,CENTER);
textSize(40);
text(livro, width/2, height/2);
textFont(corpo);
  
  
}
  function mostralivro(idade, checkaventura, checkfantasia, checkficçãocientífica){
    if (isNaN(idade)){
      return "Idade Inválida"
    }
    if (idade < 5){
      return "Vaza! Tu é criança!😜"
    } else
      if (idade > 120){
        return "Virou morto vivo, foi?💀"
      }
    if (idade >= 5 && idade < 10){
     if (checkaventura){
        return livros["menor10"]["aventura"];
      }
     if (checkfantasia){
        return livros["menor10"]["fantasia"];
     }
     if (checkficçãocientífica){
        return livros["menor10"]["ficçãocientífica"];
     }
   }
       else if (idade >= 10 && idade < 14){
     if (checkaventura){
        return livros["entre10e16"]["aventura"];
      }
     if (checkfantasia){
        return livros["entre10e16"]["fantasia"];
     }
     if (checkficçãocientífica){
        return livros["entre10e16"]["ficçãocientífica"];
    }
  }
      else if (idade >= 14 && idade < 16){
     if (checkaventura){
        return livros["entre14e16"]["aventura"];
      }
     if (checkfantasia){
        return livros["entre14e16"]["fantasia"];
     }
     if (checkficçãocientífica){
        return livros["entre14e16"]["ficçãocientífica"];
     }
   }
       else if (idade >= 16 && idade < 18){
     if (checkaventura){
        return livros["entre16e18"]["aventura"];
      }
     if (checkfantasia){
        return livros["entre16e18"]["fantasia"];
     }
     if (checkficçãocientífica){
        return livros["entre16e18"]["ficçãocientífica"];
     }
   }
      else if (idade >= 18){
     if (checkaventura){
        return livros["maior18"]["aventura"];
      }
     if (checkfantasia){
        return livros["maior18"]["fantasia"];
     }
     if (checkficçãocientífica){
        return livros["maior18"]["ficçãocientífica"];
  }
 } return "Coloca logo! 😐😒";
}

