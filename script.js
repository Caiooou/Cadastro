const container = document.getElementById('container');
const Btnregistro = document.getElementById('register');
const Btnlogin = document.getElementById('login');

Btnregistro.addEventListener('click', () => {
    container.classList.add("active");
});

Btnlogin.addEventListener('click', () => {
    container.classList.remove("active");
});

