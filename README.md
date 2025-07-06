# Librería Login Multilenguaje

Interfaz de login y registro adaptable con cambio de fondo y diseño atractivo.
Ideal para integrarse en proyectos HTML modernos, con un diseño minimalista y responsive.

### ¿Qué problema resuelve?
Facilita la integración de un sistema visual de autenticación con soporte multiforma (login/registro) sin necesidad de frameworks adicionales.
Su implementación modular permite cambiar fácilmente entre modos y fondos, mejorando la experiencia de usuario.

### Instalación
1. Clona o descarga este repositorio.

2. Asegúrate de tener la siguiente estructura de archivos:
```html
/login
│
├── index.html
├── css/
│   └── estilo.css
├── js/
│   └── script.js
├── img/
│   ├── imagen.jpg
│   └── paisaje.jpg
```

3. Incluye el archivo en tu proyecto HTML: 
```html
<link rel="stylesheet" href="css/estilo.css">
<script src="js/script.js"></script>
```

### Uso
Estructura básica en HTML

```html
<!-- Botón de inicio de sesión -->
<button class="btnLogin">Login</button>

<!-- Contenedor con formularios de login y registro -->
<div class="contenido">
  <span class="icon-cerrar"><ion-icon name="close"></ion-icon></span>

  <div class="formulario login">
    <!-- Formulario de inicio de sesión -->
  </div>

  <div class="formulario registro">
    <!-- Formulario de registro -->
  </div>
</div>
```

Lógica en JavaScript
```html
const contenido = document.querySelector('.contenido');
const loginLink = document.querySelector('.login-link');
const registrarLink = document.querySelector('.registrar-link');
const btn = document.querySelector('.btnLogin');
const iconCerrar = document.querySelector('.icon-cerrar');

// Cambiar entre formularios
registrarLink.addEventListener('click', () => contenido.classList.add('activo'));
loginLink.addEventListener('click', () => contenido.classList.remove('activo'));

// Mostrar u ocultar el contenedor
btn.addEventListener('click', () => contenido.classList.add('activo-btn'));
iconCerrar.addEventListener('click', () => contenido.classList.remove('activo-btn'));

// Cambiar fondos (modos)
document.querySelector('.modo-uno').addEventListener('click', () => {
    document.body.style.background = "url('../img/paisaje.jpg') no-repeat";
    document.body.style.backgroundSize = "cover";
});

document.querySelector('.modo-dos').addEventListener('click', () => {
    document.body.style.background = "url('../img/imagen.jpg') no-repeat";
    document.body.style.backgroundSize = "cover";
});

```

```html

```
