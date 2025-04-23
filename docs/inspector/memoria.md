---
title: Memoria
---

La pestaña **Memoria** (_Memory_) del Inspector de Elementos te permite analizar cómo una página web utiliza la memoria del navegador. Es fundamental para detectar fugas de memoria (_memory leaks_) y optimizar el uso de recursos, especialmente en aplicaciones de larga duración como SPAs.

---

## 🧠 ¿Qué es una fuga de memoria?

Una fuga de memoria ocurre cuando los datos se almacenan en la memoria y nunca se liberan, incluso cuando ya no se necesitan. Esto puede hacer que una aplicación web se vuelva lenta o incluso se bloquee con el tiempo.

---

## 🛠️ Funcionalidades clave

### 1. **Tipos de capturas de memoria**

Dentro de la pestaña **Memory**, puedes elegir tres tipos de análisis:

- **Heap snapshot:** Toma una "foto" del estado actual de la memoria. Muestra todos los objetos y cuánta memoria usan.
- **Allocation instrumentation on timeline:** Mide en tiempo real qué objetos se están creando y cuándo.
- **Allocation sampling:** Toma muestras estadísticas para mostrar tendencias generales en el uso de memoria.

---

### 2. **Tomar un Heap Snapshot**

1. Ve a la pestaña **Memory**.
2. Selecciona **Heap snapshot**.
3. Haz clic en **Take snapshot**.

Una vez completado, podrás explorar los objetos existentes, quién los referencia y si pueden ser eliminados.

Busca nodos "retained" que deberían haberse eliminado: esos pueden indicar una fuga.

---

### 3. **Detectar objetos no liberados**

Una forma de encontrar fugas es tomar un snapshot, interactuar con la página (por ejemplo, abrir y cerrar un modal), luego tomar otro snapshot.

Compara ambos para ver si hay objetos que deberían haberse eliminado pero permanecen en memoria.

---

### 4. **Tips para liberar memoria**

- **Remueve listeners innecesarios:** No olvides hacer `.removeEventListener()` cuando los elementos se eliminen del DOM.
- **Evita referencias globales innecesarias.**
- **Usa estructuras de datos como `WeakMap` y `WeakSet`** cuando quieras que el recolector de basura libere automáticamente objetos no referenciados.

---

### 🧪 ¿Cuándo usar esta pestaña?

- Si tu app web se vuelve lenta después de estar mucho tiempo abierta.

- Si notas que la memoria usada por el navegador no baja aunque cambies de vista o cierres componentes.

- Para optimizar aplicaciones con mucho JavaScript que manejan datos dinámicos.

- Para asegurar una buena experiencia en móviles o dispositivos con recursos limitados.

---

La pestaña Memoria te da una vista profunda de cómo se maneja la RAM en tu aplicación. Detectar y corregir fugas no solo mejora el rendimiento, sino que también evita errores impredecibles y mejora la estabilidad general de tu aplicación web.
