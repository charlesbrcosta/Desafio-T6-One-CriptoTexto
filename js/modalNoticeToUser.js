let modal = document.getElementById('myModal');
let closeMod = document.getElementById('closeModal');
let messageModal = document.getElementById('modal-message');
let buttonModal =  document.getElementById('modal-ok');

//Fecha o modal
closeMod.onclick = function() {
    modal.style.display = 'none';
}

buttonModal.onclick = function() {
    modal.style.display = 'none';
}

// Fecha o modal quando clicar fora dele
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
}

// Mostra o modal
function showModal(message) {
    messageModal.textContent = message;
    modal.style.display = 'block';
}

// Adiciona a entrada de eventos personalizados do arquivo keyEncryptDecrypt.js
document.addEventListener('inputValid', function() {
    modal.style.display = 'none';
});

document.addEventListener('inputInvalid', function() {
    showModal('Apenas letras minúsculas e sem acento.');
});



