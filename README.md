# ⚡ KINETIC LAB // Human Performance & Bio-Lab Gym

> **Plataforma web estática lista para desplegar en GitHub Pages. Diseñada para gimnasios modernos con reserva de actividades, apotecario de suplementos, radar de novedades y vinculación directa a WhatsApp.**

🌐 **Demo en GitHub Pages:** [https://maximogs.github.io/MyGymApp/](https://maximogs.github.io/MyGymApp/)

---

## 🎯 Concepto: Modernidad, Salud & Simplicidad Esencial

La web está concebida como una **aplicación estática autónoma (SPA sin backend)** que se compila a puro HTML, CSS y JavaScript moderno:
- **0 servidores o bases de datos complejas que mantener**: Todo funciona del lado del cliente.
- **Canal de Pedidos 100% por WhatsApp**: Cada reserva de clase o compra de suplemento genera automáticamente un mensaje estructurado y listo para enviar al staff del gimnasio.
- **Despliegue automático en GitHub Pages**: Mediante GitHub Actions (`.github/workflows/deploy.yml`).

---

## 🚀 Secciones Clave

1. **Hero de Alto Impacto**: Titulares de impacto, métricas biométricas, contador de aforo en vivo y marquesina cinética infinita.
2. **Radar de Novedades**: Sección destacada con la apertura de nuevas salas (Cryo & Sauna Infrarrojo), eventos internos (Hyrox Cup), nuevos lotes de suplementación y masterclasses con modales de lectura y reserva directa.
3. **Suscripción a Actividades**: Protocolos de Hyrox, Biomecánica, Cryo & Contrast, Flow y Boxeo técnico con selector de horarios y solicitud de reserva por WhatsApp.
4. **Tienda de Suplementos & Gear**: Catálogo con creatina Creapure®, proteína isolada grass-fed, electrolitos y recuperadores con carrito lateral deslizable y cupones de descuento.
5. **Bio-Matcher Interactivo**: Recomendador que asigna la actividad ideal y el combo de suplementos perfecto según el objetivo del atleta.
6. **Configuración de WhatsApp**: Panel modal (icono ⚙️) para cambiar el número de teléfono receptor en cualquier momento con persistencia en `localStorage`.

---

## ⚙️ Cómo Activar GitHub Pages en el Repositorio

1. Entra a tu repositorio en GitHub: [https://github.com/maximoGs/MyGymApp](https://github.com/maximoGs/MyGymApp)
2. Ve a la pestaña **Settings** (Ajustes) > **Pages** (en el menú lateral izquierdo).
3. En **Build and deployment > Source**, selecciona: **GitHub Actions**.
4. ¡Listo! Cada vez que hagas un push a `main`, GitHub Actions compilará la web y la publicará automáticamente en:
   👉 **`https://maximogs.github.io/MyGymApp/`**

---

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Compilar para producción (carpeta dist/)
npm run build
```