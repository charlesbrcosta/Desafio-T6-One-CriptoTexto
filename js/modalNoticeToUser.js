// Elementos DOM
let modal = document.getElementById('myModal');
let closeMod = document.getElementById('closeModal');
let messageModal = document.getElementById('modal-message');
let buttonModal = document.getElementById('modal-ok');

// Fecha o modal quando o botão de fechar é clicado
closeMod.onclick = function() {
    modal.style.display = 'none';
}

// Fecha o modal quando o botão "OK" é clicado
buttonModal.onclick = function() {
    modal.style.display = 'none';
}

// Fecha o modal quando é clicado fora dele (no fundo da tela)
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Event listener para o evento personalizado 'inputValid'
document.addEventListener('inputValid', function() {
    handleValidInput();
});

// Event listener para o evento personalizado 'inputInvalid'
document.addEventListener('inputInvalid', function() {
    handleInvalidInput();
});

// Oculta o modal
function handleValidInput() {
    modal.style.display = 'none';
}

// Menasgem que será exibida para o usuario.
function handleInvalidInput() {
    showModal('Apenas letras minúsculas e sem acento.');
}

// Exibe o modal para o usuário.
function showModal(message) {
    const modal = document.getElementById('myModal'); // Garante a exibição do modal
    const messageElement = document.getElementById('modal-message');

    messageElement.textContent = message;
    modal.style.display = 'block';
}