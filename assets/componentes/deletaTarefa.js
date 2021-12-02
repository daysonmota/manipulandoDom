const BotaoDeletar = () => {
    const btnDeletar = document.createElement("button");
    btnDeletar.innerText = "remover";
    btnDeletar.classList.add('check-button');
    btnDeletar.addEventListener("click", deletarTarefa);
    return btnDeletar;
};

const deletarTarefa = (event) => {
    const botaoDeleta = event.target;
    const tarefaCompleta = botaoDeleta.parentElement;
    tarefaCompleta.remove();
}

export default BotaoDeletar;