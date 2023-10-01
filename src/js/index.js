

const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");




botoes.forEach((botao,indice) =>{
    botao.addEventListener("click",() => { 
      
        const botaoselecionado = desselecionarBotao();
        const personagemselecionado = desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

        personagemselecionado.classList.remove ("selecionado");
        botaoselecionado.classList.remove("selecionado");
        

        personagemselecionado.classList.remove
        ("selecionado");
             
    });
 });


function desselecionarPersonagem() {
    return document.querySelector(".personagem.selecionado");
}

function desselecionarBotao() {
    return document.querySelector(".botao.selecionado");
}

