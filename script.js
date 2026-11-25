const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let usuario = document.getElementById("usuario").value.trim();
        let clave = document.getElementById("clave").value.trim();
        let error = document.getElementById("errorLogin");

        if (usuario === "" || clave === "") {
            error.innerHTML = "Completa usuario y contraseña.";
            return;
        }

        if ((usuario === "admin" || usuario === "monkey@gmail.com") && clave === "1234") {
            error.innerHTML = "";
            window.location.href = "sistema.html";
        } else {
            error.innerHTML = "Datos incorrectos.";
        }
    });
}

const formCita = document.getElementById("formCita");

if (formCita) {
    formCita.addEventListener("submit", function (e) {
        e.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let servicio = document.getElementById("servicio").value;
        let fecha = document.getElementById("fecha").value;

        window.alert("Cita reservada para " + nombre + " (" + servicio + ") el " + fecha);
        formCita.reset();
    });
}