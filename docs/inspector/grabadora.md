---
title: Grabadora
---

La pestaña **Grabadora** (Recorder) de DevTools permite grabar, reproducir y medir interacciones de usuario en una página web. Es una herramienta muy útil para analizar el rendimiento en flujos completos, no solo en la carga inicial.

---

## 🎥 ¿Qué es la Grabadora?

La **Grabadora de DevTools** captura una secuencia de acciones de usuario (como clics, navegación, scrolls, envíos de formularios, etc.) para luego poder:

- Reproducir esos pasos automáticamente.
- Medir el rendimiento en cada fase del flujo.
- Compartir flujos con otros desarrolladores.
- Exportarlos a otros formatos como Puppeteer o JSON.

---

## 🛠️ ¿Cómo grabar una sesión?

1. Abre DevTools (`F12` o `Ctrl+Shift+I`).
2. Ve a la pestaña **Recorder** (puede aparecer como "Grabadora").
3. Haz clic en **Start recording**.
4. Navega e interactúa con la página como lo haría un usuario.
5. Haz clic en **Stop recording** cuando termines.
6. Se generará un script visual con cada acción registrada.

---

## 📊 ¿Qué puedes hacer con una grabación?

### ▶️ Reproducir el flujo

Haz clic en **Replay** para simular nuevamente los pasos registrados. Esto ayuda a validar que todo funcione correctamente.

### 🧪 Medir rendimiento

Ejecuta una auditoría de rendimiento sobre el flujo completo, no solo sobre la carga inicial. Esto permite ver cómo se comporta la app en uso real.

### 📁 Exportar o importar

Puedes exportar la grabación como:

- **JSON**: para compartir o almacenar.
- **Puppeteer script**: para pruebas automatizadas con Node.js.

Y también puedes **importar** grabaciones existentes.

---

## 💡 ¿Cuándo usar la Grabadora?

- Para medir el rendimiento de flujos reales del usuario.
- Para automatizar pruebas manuales repetitivas.
- Para compartir problemas de rendimiento con el equipo.
- Para simular pasos de onboarding, checkout, navegación, etc.

---

La pestaña **Grabadora** no solo te permite observar, sino interactuar con tu sitio como lo haría un usuario y medir con precisión qué tan bien responde tu aplicación a esos flujos.

Es una herramienta ideal para combinar pruebas manuales con automatización ligera.
