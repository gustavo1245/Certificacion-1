function alerta() {
    alert("Inicio de Sesion Exitoso");
}

function cambiarestado(boton) {
    boton.textContent = "No Disponible";
    boton.style.backgroundColor = "red";
    boton.style.color = "white";
}

function cambiarTitulo(genero) {
    const titulo = document.getElementById("titulo");
    titulo.textContent = genero;
}
