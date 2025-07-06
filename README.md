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
