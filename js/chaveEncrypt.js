// Criptografa o texto
function encrypt() {
    let inputText = document.getElementById('textEncrypt').value;

    checkUserInput(inputText);

    if(!isValidInput(inputText)) {
        
        // alert('Digite apenas letras minúsculas e sem acentos');
        return; // Esse return interrompe a execução da função
    }
    
    let outPutText = inputText.replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');
    // document.getElementById('textEncrypt').value = ''; // Limpa o campo de entrada
    clearField('textEncrypt');
    document.getElementById('textDecrypt').value = outPutText  
}

// Descriptografa  o texto
function decrypt() {
    let inputText = document.getElementById('textDecrypt').value;

    checkUserInput(inputText);

    if(!isValidInput(inputText)) {
        
        // alert('Digite apenas letras minúsculas e sem acentos');
        return; // Esse return interrompe a execução da função
    }

    let outPutText = inputText.replace(/enter/g, 'e')
                              .replace(/imes/g, 'i')
                              .replace(/ai/g, 'a')
                              .replace(/ober/g, 'o')
                              .replace(/ufat/g, 'u');
    // document.getElementById('textDecrypt').value = '';
    clearField('textDecrypt');
    document.getElementById('textEncrypt').value = outPutText;
}


// Valida entrada do texto se tem maiúsculas, minusculas e caracteres especiais
function isValidInput(inputText){
    if(!/^[a-z\s]*$/.test(inputText)) {
        return false;
    }
    return true;
}

// Evento personalizado para verificar a entrada do usuario e disparadar o resultado
function checkUserInput(input) {
    if(isValidInput(input)) {
        document.dispatchEvent(new CustomEvent('inputValid'));
    } else {
        document.dispatchEvent(new CustomEvent('inputInvalid'));
    }
}


//Copia o texto criptografado
function copyEncryptText(fieldId) {
    let field = document.getElementById(fieldId);
    if (field) { 
        field.select();
        document.execCommand('copy'); // Copia o texto selecionado para a área de transferência
        console.log('Texto copiado:', field.value);
    } else {
        console.error(`Não foi possível copiar, verifique o ID fornecido: ${fieldId}`);
    }
}


//Limpa o campo
function clearField(fieldId) {
    let field = document.getElementById(fieldId);
    if(field){
        field.value = '';      
    } else {
        console.error(`Não foi encontrado com a Id Fornecidade ${ fieldId }`);
    }
}