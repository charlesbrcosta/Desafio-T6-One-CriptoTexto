// Elemntos DOM
const textEncrypt = document.getElementById('textEncrypt');
const textDecrypt = document.getElementById('textDecrypt');
const copyButton = document.getElementById('copy');

// Adicionar event listeners
textEncrypt.addEventListener('input', handleInput);
textDecrypt.addEventListener('input', handleInput);
copyButton.addEventListener('click', copyEncryptText);

// Event handler para mudanças nos campos do texto
function handleInput() {
    updateCopyButtonState();
    dispatchCustomEvent(this.value);
}

// Atualiza o estado do botão "Copiar" com base nos 
function updateCopyButtonState() {
    if (textDecrypt.value.trim() !== '') {
        copyButton.removeAttribute('hidden');
    } else {
        copyButton.setAttribute('hidden', 'true');
    }
}

// Criptografar o texto
function encrypt() {
    const inputText = textEncrypt.value.trim();

    if (!isValidInput(inputText)) {
        clearField('textEncrypt');
        return;
    }

    const outPutText = inputText.replace(/e/g, 'enter')
                                .replace(/i/g, 'imes')
                                .replace(/a/g, 'ai')
                                .replace(/o/g, 'ober')
                                .replace(/u/g, 'ufat');
    
    clearField('textEncrypt');
    textDecrypt.value = outPutText; 

    updateCopyButtonState(); // Atualiza o estado do botão "Copiar"
}

// Descriptografar o texto
function decrypt() {
    const inputText = textDecrypt.value.trim();

    if (!isValidInput(inputText)) {
        clearField('textDecrypt');
        return;
    }
    const outPutText = inputText.replace(/enter/g, 'e')
                                .replace(/imes/g, 'i')
                                .replace(/ai/g, 'a')
                                .replace(/ober/g, 'o')
                                .replace(/ufat/g, 'u');

    clearField('textDecrypt');
    textEncrypt.value = outPutText;       
    
    updateCopyButtonState(); // Atualiza o estado do botão "Copiar"
}

// validação da entrada do texto
function isValidInput(inputText) {
    return /^[a-z\s]*$/.test(inputText);
}

// Copiar o texto criptografado
function copyEncryptText() {
    if (textDecrypt && textDecrypt.value.trim() !== '') {
        textDecrypt.select();
        document.execCommand('copy'); // Copia o texto seleciona para a área de transferência
    } else {
        console.error('Não foi possível copiar, verifique se há texto criptografado.');
    }
}

// Despacha um evento personalizado com base na validação da entrada
function dispatchCustomEvent(input) {
    const isValid = isValidInput(input);
    const eventName = isValid ? 'inputValid' : 'inputInvalid';
    const customEvent = new CustomEvent(eventName, { detail: isValid });
    document.dispatchEvent(customEvent);
}

// Limpar um campo de texto
function clearField(fieldId) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.value = '';
    } else {
        console.error(`Não foi encontrado o campo com o ID fornecido: ${fieldId}`);
    }
}

// Limpar os campos de texto ao carregar a página
function clearTextFields() {
    clearField('textEncrypt');
    clearField('textDecrypt');
    updateCopyButtonState();
}
// Evento para limpar os campos de texto ao carregar a página
document.addEventListener('DOMContentLoaded', clearTextFields);