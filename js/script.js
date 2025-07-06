const contenido = document.querySelector('.contenido');
const loginLink = document.querySelector('.login-link');
const registrarLink = document.querySelector('.registrar-link');
const btn = document.querySelector('.btnLogin');
const iconCerrar = document.querySelector('.icon-cerrar');

const modo1 = document.querySelector('.modo-uno');
const modo2 = document.querySelector('.modo-dos');

document.body.style.background = "url('../img/imagen.jpg') no-repeat";
document.body.style.backgroundSize = "cover";

registrarLink.addEventListener('click', () => {
    contenido.classList.add('activo');
})

loginLink.addEventListener('click', () => {
    contenido.classList.remove('activo');
})

btn.addEventListener('click', () => {
    contenido.classList.add('activo-btn');
})

iconCerrar.addEventListener('click', () => {
    contenido.classList.remove('activo-btn');
})

modo1.addEventListener('click', () => {
    document.body.style.background = "url('../img/paisaje.jpg') no-repeat";
    document.body.style.backgroundSize = "cover";
})

modo2.addEventListener('click', () => {
    document.body.style.background = "url('../img/imagen.jpg') no-repeat";
    document.body.style.backgroundSize = "cover";
})
