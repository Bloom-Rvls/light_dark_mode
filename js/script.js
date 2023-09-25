const lightMode = document.getElementById ('light-mode');
const darkMode = document.getElementById ('dark-mode');
const backgroundMode = document.querySelector ('.row');
const cardMode = document.getElementsByClassName ("card");
const articleMode = document.getElementsByTagName("article");

darkMode.addEventListener ('change', () => {
    backgroundMode.classList.add ('bg-dark','text-white','border-light');
    for (let i=0; i<articleMode.length; i++) { //pour acceder aux contenus du tableau il faut parcourir une boucle
        articleMode[i].classList.add ('bg-dark','border-light');
    }
    
    
});

lightMode.addEventListener ('change', () => {
    backgroundMode.classList.remove ('bg-dark','text-white','border-light');
    for (let i=0; i<articleMode.length; i++) { //pour acceder aux contenus du tableau il faut parcourir une boucle
        articleMode[i].classList.remove ('bg-dark','border-light');
    }
});