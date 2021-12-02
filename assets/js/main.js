import BotaoConcluir from '../componentes/concluiTarefa.js';
import BotaoDeletar from '../componentes/deletaTarefa.js';


function criarTarefa(evento) {
    evento.preventDefault();

    const lista = document.querySelector("[data-list]");

    const valor = document.querySelector("[data-form-input]");
    valor.value;


    const conteudo = `<p class="content"> ${valor.value}</p>`;

    const itemTarefa = document.createElement("li");
    itemTarefa.classList.add("task"); //Adicionando classe CSS
    itemTarefa.innerHTML = conteudo;
    itemTarefa.appendChild(BotaoConcluir());
    itemTarefa.appendChild(BotaoDeletar());

    lista.appendChild(itemTarefa);
    valor.value = " ";
}

const botao = document.querySelector("[data-form-button]");

botao.addEventListener("click", criarTarefa);