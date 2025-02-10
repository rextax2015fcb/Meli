document.getElementById("btnPresioname").addEventListener("click", function() {
    document.getElementById("inicio").style.display = "none"; // Oculta la primera parte
    document.getElementById("mensajeEspecial").style.display = "block"; // Muestra la segunda parte
});

document.getElementById("btnCerrar").addEventListener("click", function() {
    document.getElementById("mensajeEspecial").style.display = "none"; // Oculta la segunda parte
    document.getElementById("mensajeFinal").style.display = "block"; // Muestra la frase final

    // Lanzar las animaciones de cohetes y flores
    lanzarAnimacionesFinales();
});

// Genera corazones en el fondo
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.body.appendChild(heart);

    let x = Math.random() * window.innerWidth;
    let duration = Math.random() * 5 + 5;

    heart.style.left = `${x}px`;
    heart.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 400);

// Función para lanzar las animaciones de cohetes y flores cuando se presiona el botón "Cierre"
function lanzarAnimacionesFinales() {
    // Lanzar cohetes
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            crearCoheteFinal();
        }, i * 300); // Mejor tiempo de retardo para visibilidad
    }

    // Lanzar flores
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            crearFlorFinal();
        }, i * 300); // Mejor tiempo de retardo para visibilidad
    }
}

// Crear cohetes con animación de explosión
function crearCoheteFinal() {
    let cohete = document.createElement("div");
    cohete.classList.add("cohete");
    document.body.appendChild(cohete);

    let x = Math.random() * window.innerWidth;
    cohete.style.left = `${x}px`;

    // Aplicar la animación de "subir" y "explosión"
    cohete.style.animation = `subir 3s ease-out, explosion 1s ease-out`;

    // Eliminar el cohete después de que se complete la animación
    setTimeout(() => cohete.remove(), 3000);
}

// Crear flores con animación de explosión
function crearFlorFinal() {
    let flor = document.createElement("div");
    flor.classList.add("flor");
    document.body.appendChild(flor);

    let x = Math.random() * window.innerWidth;
    flor.style.left = `${x}px`;

    // Aplicar la animación de "subir" y "explosión"
    flor.style.animation = `subir 3s ease-out, explosion 1s ease-out`;

    // Eliminar la flor después de que se complete la animación
    setTimeout(() => flor.remove(), 3000);
}

