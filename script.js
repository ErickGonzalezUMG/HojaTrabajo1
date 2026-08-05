/* =====================================
   1. Galería de imágenes - Modal
   ===================================== */

let fotos = document.getElementsByClassName("foto");
let modal = document.getElementById("modal");
let modalImagen = document.getElementById("modal-imagen");
let modalTitulo = document.getElementById("modal-titulo");
let cerrarModal = document.getElementById("cerrar-modal");

for (let i = 0; i < fotos.length; i++) {
    let imagen = fotos[i].querySelector("img");

    imagen.addEventListener("click", function () {
        modalImagen.src = imagen.src;
        modalTitulo.innerHTML = imagen.alt;
        document.getElementById("modal-descripcion").innerHTML = imagen.getAttribute("data-descripcion");
        modal.classList.add("activo");
    });
}

cerrarModal.addEventListener("click", function () {
    modal.classList.remove("activo");
});

modal.addEventListener("click", function (evento) {
    if (evento.target === modal) {
        modal.classList.remove("activo");
    }
});

/* =====================================
   2. Cotizador de la excursión
   ===================================== */

let btnCalcular = document.getElementById("btn-calcular");
let resultadoCotizacion = document.getElementById("resultado-cotizacion");

function calcularTotal() {
    let asistentes = document.getElementById("asistentes").value;
    let paquete = document.getElementById("paquete").value;
    let transporte = document.getElementById("transporte").checked;
    let alimentacion = document.getElementById("alimentacion").checked;
    let equipo = document.getElementById("equipo").checked;

    if (asistentes === "" || asistentes < 1) {
        resultadoCotizacion.innerHTML = "Ingresa un número válido de asistentes.";
        return;
    }

    let precioBase = 0;

    if (paquete === "basico") {
        precioBase = 150;
    } else if (paquete === "completo") {
        precioBase = 250;
    } else if (paquete === "premium") {
        precioBase = 350;
    }

    let total = asistentes * precioBase;

    if (transporte) {
        total = total + (asistentes * 40);
    }
    if (alimentacion) {
        total = total + (asistentes * 60);
    }
    if (equipo) {
        total = total + (asistentes * 25);
    }

    resultadoCotizacion.innerHTML = "Total estimado para " + asistentes + " persona(s): Q" + total;
}

btnCalcular.addEventListener("click", calcularTotal);

/* =====================================
   3. Filtro de actividades
   ===================================== */

let buscador = document.getElementById("buscador-actividades");
let listaActividades = document.querySelectorAll("#lista-actividades li");

buscador.addEventListener("keyup", function () {
    let texto = buscador.value.toLowerCase();

    listaActividades.forEach(function (item) {
        let contenido = item.textContent.toLowerCase();

        if (contenido.includes(texto)) {
            item.classList.remove("oculto");
        } else {
            item.classList.add("oculto");
        }
    });
});

/* =====================================
   4. Formulario de reservación
   ===================================== */

let formReservacion = document.getElementById("form-reservacion");
let confirmacion = document.getElementById("confirmacion");

formReservacion.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let nombre = document.getElementById("nombre-reserva").value;
    let personas = document.getElementById("personas-reserva").value;
    let correo = document.getElementById("correo-reserva").value;

    if (nombre === "" || personas === "" || correo === "") {
        confirmacion.innerHTML = "Por favor completa todos los campos antes de enviar.";
        confirmacion.classList.add("error");
        return;
    }

    confirmacion.classList.remove("error");
    confirmacion.innerHTML = "¡Gracias " + nombre + ", tu solicitud para " + personas + " personas ha sido registrada!";

    formReservacion.reset();
});

/* =====================================
   5. Testimonios aleatorios
   ===================================== */

let nombresVisitantes = ["Ana Gómez", "Carlos López", "María Pérez", "Luis Ramírez", "Sofía Castillo"];

let comentariosVisitantes = [
    "Una experiencia increíble, el agua turquesa supera cualquier foto que hayas visto.",
    "El guía fue muy amable y el recorrido estuvo bien organizado de principio a fin.",
    "Vale la pena el viaje, aunque el camino desde la ciudad es un poco largo.",
    "Las pozas son hermosas, recomiendo llevar zapatos con buen agarre para las rocas.",
    "Volvería sin dudarlo, la vista desde el mirador El Zapote es espectacular."
];

let btnTestimonio = document.getElementById("btn-testimonio");
let cajaTestimonio = document.getElementById("caja-testimonio");

function mostrarTestimonio() {
    let indice = Math.floor(Math.random() * nombresVisitantes.length);

    cajaTestimonio.innerHTML = "<p>\"" + comentariosVisitantes[indice] + "\"</p><p>&mdash; " + nombresVisitantes[indice] + "</p>";
}

btnTestimonio.addEventListener("click", mostrarTestimonio);

mostrarTestimonio();
