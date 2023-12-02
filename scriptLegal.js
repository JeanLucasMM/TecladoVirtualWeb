const layoutTeclado = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
];

const elementoTeclado = document.getElementById('teclado');
const elementoEntradaTexto = document.getElementById('entrada-texto');
const botaoSalvar = document.getElementById('botao-salvar');

layoutTeclado.forEach(letra => {
    const botao = document.createElement('div');
    botao.classList.add('tecla');
    botao.textContent = letra;
    botao.addEventListener('click', function() {
        elementoEntradaTexto.value += letra;
    });
    elementoTeclado.appendChild(botao);
});

botaoSalvar.addEventListener('click', function() {
    alert('Palavra salva: ' + elementoEntradaTexto.value);
    elementoEntradaTexto.value = '';
});
