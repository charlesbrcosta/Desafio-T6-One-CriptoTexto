let modalTour = document.getElementById('modalTour');
let startModal = document.getElementById('startTour');

// Inicia o modal
startModal.onclick = function() {
    modalTour.style.display = 'block';
    showFirstStep(); // Mostra a primeira etapa do modal ao abrir
}

// Função para mostrar o primeiro step
function showFirstStep() {
    showStep('step1'); // Mostra o primeiro step
    highLightFieldOrButton('textAreaEncryptContainer');
}

// Função para mostrar um step
function showStep(stepId) {
    document.querySelectorAll('.modal-step').forEach(step => {
        step.style.display = 'none'; // Esconde todos os steps
    });
    let stepToShow = document.getElementById(stepId);
    if (stepToShow) {
        stepToShow.style.display = 'block'; // Mostra o step desejado
    }
}

// Botão próximo
document.querySelectorAll('.next-btn').forEach(item => {
    item.addEventListener('click', function() {
        let currentStep = this.closest('.modal-step');
        let nextStep = currentStep.nextElementSibling;
        if (nextStep) {
            showStep(nextStep.id); // Mostra o próximo step
            handleStep(nextStep.id); // Manipula o destaque do campo/button
        }
    });
});

// Botão anterior
document.querySelectorAll('.prev-btn').forEach(item => {
    item.addEventListener('click', function() {
        let currentStep = this.closest('.modal-step');
        let prevStep = currentStep.previousElementSibling;
        if (prevStep) {
            showStep(prevStep.id); // Mostra o step anterior
            handleStep(prevStep.id); // Manipula o destaque do campo/button
        }
    });
});


// Adiciona evento de clique ao botão "Ok, entendi"
document.getElementById('closeBtn').addEventListener('click', function(){
    closeModal();
});

// // Ícone de fechamento
// document.getElementById('closeModalTour').addEventListener('click', function(){
//     closeModal();
// });

// Função para fechar o modal e limpar o estado
function closeModal() {
    modalTour.style.display = 'none';
    // Oculta todas as etapas do modal
    document.querySelectorAll('.modal-step').forEach(step => {
        step.style.display = 'none';
    });
    // Remove destaque de campo ou botão
    removeFieldBorderHighlight('textAreaEncryptContainer');
    removeFieldBorderHighlight('encrypt');
    removeFieldBorderHighlight('textAreaDecryptContainer');
    removeFieldBorderHighlight('decrypt');
}


// Função para destacar campos e butões
function highLightFieldOrButton(fieldOrButtonId) {
    let fieldOrButton = document.getElementById(fieldOrButtonId);
    if (fieldOrButton) {
        fieldOrButton.style.border = '3px solid var(--color-border)'; // Adiciona uma borda da cor da 
    }
}

// Remove o destaque dos campos e botões
function removeFieldBorderHighlight(fieldOrButtonId) {
    let fieldOrButton = document.getElementById(fieldOrButtonId);
    if(fieldOrButton) {
        fieldOrButton.style.border = 'none'
    }
}
// Função para manipular o destaque do campo/button conforme o step
function handleStep(stepId) {
    switch(stepId) {
        case 'step1':
            removeFieldBorderHighlight('encrypt');
            highLightFieldOrButton('textAreaEncryptContainer');
            break;
        case 'step2':
            removeFieldBorderHighlight('textAreaEncryptContainer');
            removeFieldBorderHighlight('textAreaDecryptContainer');
            highLightFieldOrButton('encrypt');
            break;
        case 'step3':
            removeFieldBorderHighlight('encrypt');
            removeFieldBorderHighlight('decrypt');
            highLightFieldOrButton('textAreaDecryptContainer');
            break;
        case 'step4':
            removeFieldBorderHighlight('textAreaDecryptContainer');
            highLightFieldOrButton('decrypt');
            break;
        default:
            break;
    }
}

removeFieldBorderHighlight('decrypt');
