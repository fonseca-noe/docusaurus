---
title: Aplicación
---

La pestaña **Aplicación** de DevTools te permite inspeccionar y controlar todos los recursos persistentes que utiliza tu sitio web. Esto incluye almacenamiento local, cookies, bases de datos, archivos cacheados y más.

Es una herramienta indispensable para depurar aplicaciones web modernas que usan almacenamiento del lado del cliente y tecnologías PWA.

---

## 📦 ¿Qué puedes gestionar desde la pestaña Aplicación?

### 1. **Local Storage y Session Storage**

- Almacenan pares clave/valor en el navegador.
- `localStorage` persiste incluso si cierras el navegador.
- `sessionStorage` se borra al cerrar la pestaña.
- Útiles para guardar preferencias del usuario, tokens o datos temporales.

```js
localStorage.setItem("tema", "oscuro");
sessionStorage.setItem("autenticado", true);
```

Puedes inspeccionar, editar o eliminar estos datos desde DevTools fácilmente.

### 2. Cookies

- Pequeños archivos con información que se envían al servidor en cada petición.

- Se usan para autenticación, sesiones, rastreo, etc.

- Puedes ver su contenido, fecha de expiración, dominio y accesibilidad.

Desde la pestaña puedes borrar cookies manualmente para probar flujos de inicio de sesión.

### 3. IndexedDB

- Base de datos NoSQL del navegador.

- Permite almacenar grandes cantidades de datos estructurados.

- Utilizada en apps offline o PWAs.

DevTools permite inspeccionar el contenido de cada base de datos, sus tablas (object stores) y los registros.

### 4. Cache y Service Workers

- Cache Storage: guarda recursos (imágenes, scripts, páginas) para carga offline.

- Service Workers: scripts que actúan como proxies entre tu sitio y la red.

  - Controlan el almacenamiento en caché, sincronización en segundo plano y notificaciones push.

Puedes ver qué archivos están cacheados y controlar los service workers: detenerlos, actualizarlos o eliminarlos.

### 5. Manifest y Web App

- El Web App Manifest describe cómo se comporta tu sitio cuando se instala como app.

- Incluye nombre, ícono, colores, orientación, etc.

- DevTools valida si el manifiesto es correcto y si tu sitio cumple como PWA.

---

### 🧪 ¿Cuándo usar esta pestaña?

- Para verificar si tus datos están siendo almacenados correctamente.

- Para borrar datos persistentes sin tener que limpiar toda la caché del navegador.

- Para depurar funcionalidades offline o problemas con service workers.

- Para testear el comportamiento de tu app como PWA.

Explorar la pestaña Aplicación te da un panorama completo de cómo tu sitio utiliza el almacenamiento del navegador. Una herramienta esencial para garantizar rendimiento, seguridad y buena experiencia de usuario.
