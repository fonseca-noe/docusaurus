---
title: Rendimiento
---

La pestaña **Rendimiento** (o _Performance_) del Inspector de Elementos es una herramienta avanzada para analizar cómo se comporta una página durante su carga y ejecución.

Permite grabar y visualizar todos los procesos internos que afectan el rendimiento: tiempos de carga, ejecución de JavaScript, repintados, animaciones, tiempos de inactividad, y más.

---

## ⚙️ ¿Qué hace esta pestaña?

La pestaña captura una traza detallada de lo que ocurre cuando el navegador interpreta y renderiza tu sitio. Así puedes identificar:

- Cuellos de botella en el renderizado.
- Animaciones pesadas o mal optimizadas.
- Tiempos muertos (idle) innecesarios.
- JavaScript que bloquea la interfaz.

---

## 🛠️ ¿Cómo usarla?

### 1. **Grabar un análisis de rendimiento**

1. Abre la pestaña **Performance**.
2. Haz clic en el botón de grabar (⏺️).
3. Interactúa con la página (scroll, clics, carga de contenido).
4. Detén la grabación (⏹️).

Verás una línea de tiempo con todo lo que ocurrió.

---

### 2. **Interpretar la línea de tiempo**

La vista principal incluye varias secciones:

- **Frames por segundo (FPS):** Idealmente debería mantenerse por encima de 60.
- **CPU:** Muestra la carga de trabajo. Mucho color = uso intensivo.
- **Eventos:** Carga de scripts, tiempos de respuesta, repintados.
- **Main thread:** Representa todo lo que ocurre en el hilo principal: parsing, scripting, rendering.

Cada sección es interactiva: puedes acercarte, hacer clic y ver qué función exacta causó el problema.

---

### 3. **Revisar Layouts y Paints**

La pestaña te indica cuándo el navegador:

- **Layout:** Calcula la posición de los elementos.
- **Paint:** Dibuja los elementos visualmente.
- **Composite:** Une los elementos renderizados.

Si estas acciones son frecuentes, podría haber problemas de rendimiento.

---

### 🧪 ¿Cuándo usar esta pestaña?

Cuando una página se siente lenta o se congela.

- Para evaluar si tu sitio mantiene 60 FPS.

- Para mejorar la experiencia del usuario en animaciones o scroll.

- Para auditar la carga inicial de una SPA o aplicación pesada.

- Para reducir el uso excesivo del hilo principal.

---

La pestaña Rendimiento te permite ver, cuadro por cuadro, cómo se comporta tu sitio desde que el usuario entra hasta que termina de interactuar. Es clave para detectar los problemas que no siempre se ven, pero que sí se sienten.
