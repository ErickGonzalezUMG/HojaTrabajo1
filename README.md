# Hoja de Trabajo 4 - Excursión a Semuc Champey (React + Vite)

## Descripción del proyecto

Migración del sitio de excursiones turísticas a Semuc Champey, originalmente
construido con HTML, CSS y JavaScript vanilla (Hoja de Trabajo 3), a una
aplicación modular en React utilizando Vite como herramienta de construcción.
Cada funcionalidad interactiva se implementó como un componente reutilizable
independiente.

## Componentes del proyecto

- **Header:** encabezado estático con el título y subtítulo del sitio.
- **Gallery:** galería de 6 imágenes con modal para ver en grande. Al hacer
  clic en una foto se abre un visor con fondo oscuro. Usa `useState`.
- **BudgetCalculator:** cotizador de excursión con selección de paquete,
  servicios adicionales y cálculo en tiempo real del total. Usa `useState`.
- **ActivityFilter:** buscador que filtra en tiempo real las actividades
  disponibles usando `.filter()` e `.includes()`. Usa `useState`.
- **ReservationForm:** formulario de reservación con validación de campos
  vacíos y número de personas. Usa `useReducer` con dispatch y acciones.
- **Testimonials:** opiniones de visitantes con rotación aleatoria al
  presionar un botón. Usa `useState` con `Math.random()`.
- **Footer:** pie de página con información del estudiante.

## Estudiante

- Nombre: Erick Enrique González Canel
- Carné: 9490-20-2571

## Enlaces

- Sitio publicado: https://9490-20-2571-hojatrabajo4.netlify.app
- Repositorio: https://github.com/ErickGonzalezUMG/HojaTrabajo1
- Rama: HojaTrabajo4

## Tecnología

React 19, Vite, CSS3 (Flexbox, Media Queries, Transitions) y
Google Fonts (Poppins). Componentes funcionales con `useState`,
`useReducer`, `.map()`, `.filter()` y renderizado condicional.
