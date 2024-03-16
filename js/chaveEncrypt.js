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
    if(inputText.trim() !== '') {
        clearField('textEncrypt');
    }
    
    document.getElementById('textDecrypt').value = outPutText 
    blockButtonCopy('textDecrypt');
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
    if(inputText.trim() !== '') {
        clearField('textDecrypt');

    }
    
    document.getElementById('textEncrypt').value = outPutText;
}


// Valida entrada do texto se tem maiúsculas, minusculas e caracteres especiais
function isValidInput(inputText){
    if(!/^[a-z\s]*$/.test(inputText)) {
        return false;
    }
    return true;
}

// Evento personalizado para verificar a entrada do usuario e disparar o resultado
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
    if (field && field.value.trim() !== '') { 
        field.select();
        document.execCommand('copy'); // Copia o texto selecionado para a área de transferência
        console.log('Texto copiado:', field.value);
    } else {
        console.error(`Não foi possível copiar, verifique o ID fornecido: ${ fieldId }`);
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

//mostra o botão copiar caso tenha texto na área de transferẽncia
function blockButtonCopy(filedId) {
    let copy = document.getElementById('copy');
    let textDecrypt = document.getElementById(filedId);

    if(textDecrypt.value.trim() !== ''){
        copy.style.display = 'block';
    } else {
        copy.style.display = 'none';
    }
}