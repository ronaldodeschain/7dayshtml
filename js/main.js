document.addEventListener('DOMContentLoaded', () => {
    const hamburguerBotao = document.querySelector('.cabecalho__hamburguer');
    const menuLista = document.querySelector('.cabecalho__menu-lista');
    const body = document.body;

    if (hamburguerBotao && menuLista) {
        hamburguerBotao.addEventListener('click', () => {
            // Verifica se o menu está aberto pela classe na própria lista
            const isAberto = menuLista.classList.contains('menu-aberto');

            // Adiciona/remove a classe na lista e no botão para controle de estilo
            menuLista.classList.toggle('menu-aberto');
            hamburguerBotao.classList.toggle('menu-aberto');

            // Atualiza o atributo ARIA para acessibilidade
            hamburguerBotao.setAttribute('aria-expanded', !isAberto);

            // Impede o scroll da página quando o menu está aberto
            body.style.overflow = isAberto ? 'auto' : 'hidden';
        });
    }
});