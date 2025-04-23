---
title: Elementos
---

La pestaña **Elementos** del Inspector de Elementos es una de las herramientas más poderosas para desarrolladores web. Permite examinar y editar la estructura de una página HTML y sus estilos CSS en tiempo real, sin modificar el código fuente original del servidor.

---

## 🔍 ¿Qué es el DOM?

El **DOM (Document Object Model)** es una representación estructurada del HTML de una página, organizada como un árbol de nodos. Cada etiqueta HTML se convierte en un nodo que puede ser inspeccionado, modificado, movido o eliminado directamente desde esta pestaña.

---

## 🛠️ Funcionalidades clave

### 1. **Explorar la estructura HTML**
Puedes hacer clic en cualquier elemento de la página para ubicarlo automáticamente en el DOM.

- Usa la herramienta de selección (el icono de puntero) para elegir un elemento visualmente.
- El navegador resaltará su posición en el DOM y mostrará sus estilos CSS asociados.

### 2. **Editar el HTML**
Haz doble clic sobre cualquier etiqueta, atributo o contenido textual para editarlo:

```html
<h1 class="titulo">Hola mundo</h1>
```

### 3. Modificar CSS en vivo
En el panel derecho, puedes:

- Cambiar reglas CSS activamente.

- Agregar nuevas propiedades.

- Habilitar o deshabilitar estilos existentes.

- Ver qué hoja de estilos aplica cada regla (incluye enlaces y nombres de archivo).

- También puedes añadir clases o reglas directamente desde la pestaña "Styles".

### 4. Ver el box model
Abajo del panel derecho aparece una representación visual del modelo de caja (box model):

- Margen (margin)

- Borde (border)

- Relleno (padding)

- Contenido

Esto es útil para depurar espaciados y alineaciones.

### 💡 Tips prácticos
- Usa **Ctrl + Shift + C** o **Cmd + Shift + C** para activar rápidamente el selector de elementos.

- Prueba cambios directamente en el navegador antes de editarlos en el código fuente.

- Ideal para aprender cómo se aplican ciertos efectos visuales (hover, focus, etc.).

### 🧪 ¿Cuándo usar esta pestaña?
- Para probar cambios de diseño sin tocar el código real.

- Para depurar estilos rotos o superpuestos.

- Para explorar el código de terceros y entender cómo funciona su estructura.

- Para copiar estilos o estructuras que quieras replicar.