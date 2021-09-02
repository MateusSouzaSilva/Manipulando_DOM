const BotaoConclui = () => {

    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';
    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;

    const tarefaCompletada = botaoConclui.parentElement;

    tarefaCompletada.classList.toggle('done');
}

export default BotaoConclui;