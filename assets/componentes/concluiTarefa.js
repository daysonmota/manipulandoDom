const BotaoConcluir = () => {
    const botaoConcluir = document.createElement("button");
    botaoConcluir.classList.add("check-button"); //Classe botão.
    botaoConcluir.innerText = "Concluir"; //Nome do Botão

    botaoConcluir.addEventListener("click", concluirTarefa);

    return botaoConcluir;
};

const concluirTarefa = (event) => {
    const btnConclui = event.target; //Pegar o alvo do event.

    const tarefaCompleta = btnConclui.parentElement; // Pegando o pai do elemento que eu cliquei.
    tarefaCompleta.classList.toggle("tarefaConcluida"); //Aplico o CSS no toggle
};

export default BotaoConcluir