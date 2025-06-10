    // Obtener el formulario por su ID y agregar un event listener para el evento 'submit'
    document.getElementById("formularioLiterario").addEventListener("submit", function (e) {
    e.preventDefault();
    // Crear un objeto FormData con los datos del formulario
    const formData = new FormData(e.target);
    let salidaHTML = "";

    // Iterar sobre cada campo del formulario usando FormData.entries()
    for (let [campo, valor] of formData.entries()) {
        let etiqueta = campo;

        // Switch para mapear los nombres de campos técnicos a etiquetas legibles
        switch (campo) {
            case "nombre":
                etiqueta = "Nombre completo";
                break;
            case "email":
                etiqueta = "Correo electrónico";
                break;
            case "genero":
                etiqueta = "Género favorito";
                break;
            case "debates":
                etiqueta = "¿Te gustaría participar en debates literarios?";
                break;
            case "autor":
                etiqueta = "Autor favorito";
                break;
            case "fecha":
                etiqueta = "Última lectura";
                break;
            case "libros":
                etiqueta = "Libros por año";
                break;
            case "noticias":
                etiqueta = "Noticias y recomendaciones";
                valor = "Sí"; // Forzar valor "Sí" porque solo se incluye si está marcado
                break;
            case "comentarios":
                etiqueta = "Recomendación literaria";
                break;
        }

        if (campo === "noticias" && !formData.has("noticias")) {
            continue; // Si el checkbox no está marcado, no se muestra
        }

        if (valor.trim()) {
            salidaHTML += `<div class="dato"><span class="etiqueta">${etiqueta}:</span> ${valor}</div>`;
        }
    }

    // Mostrar resultados
    const resultado = document.getElementById("resultado");
    const datos = document.getElementById("datosEnviados");
    datos.innerHTML = salidaHTML;
    resultado.style.display = "block";// Hacer visible la sección de resultados
    resultado.scrollIntoView({ behavior: "smooth" });

    // Mostrar alerta de confirmación
    alert("¡Gracias por participar en el formulario literario! 📚");
});
