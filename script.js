
// Función para encriptar el texto
function encriptar() {
    let texto = document.getElementById("input-text").value;
    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char === "e") {
            textoEncriptado += "enter";
        } else if (char === "i") {
            textoEncriptado += "imes";
        } else if (char === "a") {
            textoEncriptado += "ai";
        } else if (char === "o") {
            textoEncriptado += "ober";
        } else if (char === "u") {
            textoEncriptado += "ufat";
        } else {
            textoEncriptado += char;
        }
    }

    document.getElementById("output-text").value = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar() {
    let texto = document.getElementById("input-text").value;

    let encriptaciones = ["enter", "imes", "ai", "ober", "ufat"];
    let letras = ["e", "i", "a", "o", "u"];

    for (let i = 0; i < encriptaciones.length; i++) {
        let encriptacion = encriptaciones[i];
        let letra = letras[i];

        while (texto.includes(encriptacion)) {
            texto = texto.replace(encriptacion, letra);
        }
    }

    document.getElementById("output-text").value = texto;
}

// Función para copiar el texto al portapapeles, limpiar el área de texto de entrada y salida
function copiar() {
    let texto = document.getElementById("output-text").value;
    navigator.clipboard.writeText(texto).then(function() {
        document.getElementById("input-text").value = '';
        document.getElementById("output-text").value = '';  // Limpiar textarea de salida
    }).catch(function(err) {
        console.error("Error al copiar el texto: ", err);
    });
}

// Función para manejar la visibilidad de los elementos
function manejarVisibilidad() {
    let textarea = document.querySelector(".text-area");
    let mensaje = document.querySelector(".mensaje");
    let h3 = document.querySelector(".text-container h3");
    let p = document.querySelector(".text-container p");
    let btnCopiar = document.querySelector(".btn-copiar");

    if (textarea.value.trim() !== "") {
        mensaje.style.backgroundImage = "none";
        h3.style.display = "none";
        p.style.display = "none";
        btnCopiar.style.display = "block";
    } else {
        if (window.innerWidth > 1024) {
        mensaje.style.backgroundImage = "url('./imagenes/encripta.png')";
        }
        h3.style.display = "block";
        p.style.display = "block";
        btnCopiar.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", manejarVisibilidad);

// Función para restaurar visibilidad al hacer doble click en "Copiar"
function restaurarVisibilidad() {
    document.getElementById("input-text").value = '';
    document.getElementById("output-text").value = '';
    manejarVisibilidad();
}

function ajustarAltura() {
    const textarea = document.getElementById("output-text");
    textarea.style.height = "auto"; // Resetear altura para recalcular
    textarea.style.height = textarea.scrollHeight + "px"; // Ajustar altura
}


// Evento para ajustar el tamaño cuando el contenido cambie
document.getElementById("output-text").addEventListener("input", ajustarAltura);


// Evento para detectar cambios en el textarea y manejar la visibilidad
document.querySelector(".text-area").addEventListener("input", manejarVisibilidad);

// Evento para manejar el clic en el botón "Copiar"
document.querySelector(".btn-copiar").addEventListener("click", copiar);

// Evento para manejar el doble clic en el botón "Copiar"
document.querySelector(".btn-copiar").addEventListener("dblclick", restaurarVisibilidad);
