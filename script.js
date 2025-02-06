// Función para redirigir a la segunda página
function irAPoemas() {
    window.location.href = "poemas.html";
}

// Función para expandir las imágenes en la segunda página
function expandirImagen(imagen) {
    if (imagen.style.width === "150px") {
        imagen.style.width = "300px"; // Ajusta el tamaño expandido
    } else {
        imagen.style.width = "150px"; // Vuelve al tamaño original
    }
}
