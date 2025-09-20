let sidebar = document.querySelector('.header .sidebar'),
    sidebarButton = document.getElementById('sidebar-btn'),
    sidebarCloseButton = document.getElementById('close-btn');


sidebarButton.addEventListener('click', () => {
    sidebar.classList.add('toggle');
});

sidebarCloseButton.addEventListener('click', () => {
    sidebar.classList.remove('toggle');  
})

window.onscroll = () => {
    sidebar.classList.remove('toggle');
    if(window.scrollY > 20) document.querySelector('.header').classList.add('scroll');
    else document.querySelector('.header').classList.remove('scroll');
}

let darkModeButton = document.querySelector('.fa-moon');

darkModeButton.onclick = () => {
    darkModeButton.classList.toggle('fa-sun');
    if(darkModeButton.classList.contains('fa-sun'))
        document.documentElement.setAttribute('data-theme', 'dark');
    else
        document.documentElement.setAttribute('data-theme', 'light');
}
