const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn  = document.getElementById('close-btn');
const darkMode = document.querySelector('.dark-mode');

//Adiciona uma escuta para o aside para mostrar o menu
menuBtn.addEventListener('click', () => {
    sideMenu.style.visibility = 'visible';
    sideMenu.style.left = '0';
});

//Adiciona uma escuta para o aside para ocultar o menu
closeBtn.addEventListener('click', () => {
    sideMenu.style.visibility = 'hidden';
    sideMenu.style.left = '-100%'
});


//Adiciona uma escuta para alternar de DarkMode para LightMode
darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});

// Adiciona uma escuta para o evento resize
window.addEventListener('resize', () => {
     //Verifica se a lagura da janelo é maior que a largura definida.
    if(window.innerWidth > 768) {
        sideMenu.style.visibility = 'visible';
    } else {
        sideMenu.style.visibility = 'hidden';
    }
});


// ---------------------------------------------------- //

//Adiciona um foco na textArea quando selecionada


// selectiona o textarea
const textarea = document.querySelectorAll('textarea');

//Itera sobre cada textarea encontrada
textarea.forEach( textarea => {
    // seleciona o elemento pai = div.container
    const container = textarea.parentNode;

    // Adiciona uma escuta de evento para o foco da textarea
    textarea.addEventListener('focus', function() {
        container.classList.add('focus');
    });

    // adiciona uma escuta de evento para remover o foco da div pai de textarea
    textarea.addEventListener('blur', function() { 
        container.classList.remove('focus');
    });
}); 


