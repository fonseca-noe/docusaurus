---
title: Fuentes
---

La pestaña **Fuentes** del Inspector de Elementos te permite explorar todos los archivos cargados por la página web, como scripts JavaScript, hojas de estilo CSS, imágenes, fuentes tipográficas y otros recursos.

También es el lugar donde puedes configurar puntos de interrupción (breakpoints) para depurar código JavaScript directamente desde el navegador.

---

## 📁 ¿Qué se encuentra en la pestaña Fuentes?

Esta pestaña está dividida en varias secciones clave:

### 1. **Explorador de archivos**

Aquí se muestran todos los recursos que la página ha cargado:

- Archivos `.js`, `.css`, `.html`, imágenes y más.
- Agrupados por origen (dominio).
- Puedes expandir las carpetas como si fuera un explorador de archivos local.

Esto permite identificar de dónde vienen los recursos y cómo están organizados.

---

### 2. **Editor de código**

Puedes abrir y leer el contenido de archivos JavaScript o CSS directamente desde el navegador. Algunas funcionalidades:

- Numeración de líneas.
- Coloreado de sintaxis.
- Búsqueda (`Ctrl + F` o `Cmd + F`).
- Navegación rápida por funciones (`Ctrl + Shift + O`).

Aunque no puedes guardar cambios permanentemente en el servidor, sí puedes modificar temporalmente el código para pruebas.

---

### 3. **Puntos de interrupción (Breakpoints)**

Una de las funciones más poderosas:

- Puedes pausar la ejecución del JavaScript en una línea específica.
- Examinar el estado de las variables en ese momento.
- Ejecutar paso a paso el código (step over, step into, etc.).

Ideal para entender qué está pasando en scripts complejos o detectar errores lógicos.

---

### 4. **Snippets**

Los Snippets son bloques de código que puedes guardar y reutilizar:

- Funcionan como pequeños scripts personales.
- Se ejecutan en cualquier página.
- Son útiles para tareas repetitivas o pruebas rápidas.

Puedes crearlos desde la pestaña "Snippets" dentro de Fuentes.

```js
alert('¡Hola desde DevTools!');
```
### 🧪 ¿Cuándo usar esta pestaña?
* Para explorar el código fuente cargado dinámicamente.

* Para depurar JavaScript línea por línea con breakpoints.

* Para probar pequeñas modificaciones sin editar archivos reales.

* Para aprender cómo están construidas páginas de terceros.

* Para ejecutar tus propios scripts con snippets.

---

La pestaña Fuentes es una potente aliada en el proceso de depuración y aprendizaje. Te permite interactuar con los archivos que dan vida a la web y experimentar de forma controlada, directamente desde el navegador.