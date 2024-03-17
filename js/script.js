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

    //Salva o estado do darkMode no localStorage 
    const isDarkModeEnabled = document.body.classList.contains('dark-mode-variables');
    localStorage.setItem('darkModeEnabled', isDarkModeEnabled);
});

//Aplica o estado do darkMode no localStorage
document.addEventListener('DOMContentLoaded', () => {
    const darkModeEnabled = localStorage.getItem('darkModeEnabled');
    if(darkModeEnabled === 'true'){
        document.body.classList.add('dark-mode-variables');
        darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
        darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
    }
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


//Adiciona o estilo no sidebar ao clicar no link e redireciona a página.
document.addEventListener('DOMContentLoaded', function() {
    // Se houver um link ativo no localStorage, aplica a classe active
    let activeLink = localStorage.getItem('activeLink');
    if (activeLink) {
        let link = document.querySelector('[data-target="' + activeLink + '"]');
        if (link) {
            link.classList.add('active');
        }
    } else {
        //Se não houver link ativo, esse será o link padrão.
        let defaultlink = document.querySelector('[data-target="index"]');
        if(defaultlink){
            defaultlink.classList.add('active');
            localStorage.setItem('activeLink', 'index'); //Salva o link padrão index.html no localstorage
        }
    }

    // Adiciona evento de clique aos links
    let links = document.querySelectorAll('.sidebar .nav-link');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            let target = this.getAttribute('data-target');
            setActive(target);
            window.location.href = target + '.html'; //redireciona para a página correspondente
        });
    });
});

function setActive(target) {
    // Remove a classe 'active' de todos os links
    let links = document.querySelectorAll('.sidebar .nav-link');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    // Adiciona a classe 'active' apenas ao link clicado
    let activeLink = document.querySelector('[data-target="' + target + '"]');
    if (activeLink) {
        activeLink.classList.add('active');
        // Salva o link ativo no localStorage
        localStorage.setItem('activeLink', target);
    }
}



