# Hoja de Trabajo 3 - Excursión a Semuc Champey (con JavaScript)

## Descripción del proyecto

Página web informativa sobre la excursión a Semuc Champey, monumento natural
ubicado en Lanquín, Alta Verapaz, Guatemala. Parte de la Hoja de Trabajo 2 y
le incorpora JavaScript mediante un archivo externo para agregar interactividad
y manipulación del DOM.

## Funcionalidades nuevas agregadas con JavaScript

- **Galería interactiva (modal):** al hacer clic en cualquier imagen de la
  galería se abre un visor con la imagen en tamaño grande y su descripción.
  Se puede cerrar con el botón "×" o haciendo clic fuera de la imagen.
- **Cotizador de la excursión:** formulario con número de asistentes, tipo de
  paquete (`<select>`) y servicios adicionales (`<input type="checkbox">`).
  Al presionar "Calcular Total" se muestra el precio estimado en pantalla sin
  recargar la página.
- **Buscador de actividades:** un campo de texto filtra en tiempo real los
  elementos de la lista de actividades adicionales a medida que se escribe.
- **Formulario de reservación:** valida con JavaScript que los campos no estén
  vacíos y, al enviarlo, muestra un mensaje dinámico de confirmación con el
  nombre y el número de personas ingresados.
- **Opiniones de visitantes:** dos arreglos (nombres y comentarios) en el
  archivo JavaScript. Un botón muestra una opinión aleatoria cada vez que se
  presiona.

## Estudiante

- Nombre: Erick Enrique González Canel
- Carné: 9490-20-2571

## Enlaces

- Sitio publicado: https://9490-20-2571-hojatrabajo3.netlify.app
- Repositorio: https://github.com/ErickGonzalezUMG/HojaTrabajo1
- Rama: HojaTrabajo3

## Tecnología

HTML, CSS y JavaScript (archivo externo `script.js`). Uso de
`querySelector`, `getElementById`, `getElementsByClassName`,
`addEventListener` y `classList` para la interactividad.
