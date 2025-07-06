# Componente Visual Login

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
Selección de elementos
```js
const contenido = document.querySelector('.contenido');
const loginLink = document.querySelector('.login-link');
const registrarLink = document.querySelector('.registrar-link');
const btn = document.querySelector('.btnLogin');
const iconCerrar = document.querySelector('.icon-cerrar');

const modo1 = document.querySelector('.modo-uno');
const modo2 = document.querySelector('.modo-dos');
```

Cambiar entre formularios
```js
registrarLink.addEventListener('click', () => {
    contenido.classList.add('activo');
});

loginLink.addEventListener('click', () => {
    contenido.classList.remove('activo');
});
```

Mostrar u ocultar el contenedor principal
```js
btn.addEventListener('click', () => {
    contenido.classList.add('activo-btn');
});

iconCerrar.addEventListener('click', () => {
    contenido.classList.remove('activo-btn');
});
```

Cambiar de fondo (modo visual)
```js
modo1.addEventListener('click', () => {
    document.body.style.background = "url('../img/paisaje.jpg') no-repeat";
    document.body.style.backgroundSize = "cover";
});

modo2.addEventListener('click', () => {
    document.body.style.background = "url('../img/imagen.jpg') no-repeat";
    document.body.style.backgroundSize = "cover";
});
```

Estilos en CSS (css/estilo.css)
Selección de elementos
```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    font-family: 'Poppins', sans-serif;
}

.btnLogin {
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
}

.contenido {
    width: 400px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    backdrop-filter: blur(30px);
    transform: scale(0);
    transition: transform 0.5s ease;
}

.contenido.activo-btn {
    transform: scale(1);
}

.contenido.activo .formulario.login {
    transform: translateX(-400px);
}

.contenido.activo .formulario.registro {
    transform: translateX(0);
}

```

![image](https://github.com/user-attachments/assets/9d83dc3a-7da6-4abf-a0da-34fae26c9363)

![image](https://github.com/user-attachments/assets/2292c730-008d-4999-bd72-e953d09f88dc)

![image](https://github.com/user-attachments/assets/d6e5343e-46e2-4ab5-9a61-a1aa71ba86b1)

![image](https://github.com/user-attachments/assets/11a0bf6e-a786-4a1f-9350-05d18ecf889e)

![image](https://github.com/user-attachments/assets/4e79b0f6-5fe7-49d6-900f-a62d118698f7)


