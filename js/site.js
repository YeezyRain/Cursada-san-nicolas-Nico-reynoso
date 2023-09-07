document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("comprobarEdad").addEventListener("click", function () {
    // Solicitar al usuario que ingrese su edad usando el cuadro de diálogo de alerta
    var edad = prompt("Por favor, ingresa tu edad:");

    // Comprobar si la entrada es un número válido
    if (!isNaN(edad) && edad !== "") {
        // Convertir la entrada a un número entero
        edad = parseInt(edad);

        // Comprobar si la edad es mayor o igual a 18
        if (edad >= 18) {
            alert("Eres mayor de edad. Puedes continuar.");
        } else {
            alert("Eres menor de edad. No puedes continuar.");
        }
    } else {
        alert("Por favor, introduce una edad válida.");
    }
});

  });

  document.getElementById("calcularCosto").addEventListener("click", function () {
    var ciudadOrigen = prompt("Por favor, ingresa la ciudad de origen:");
    var ciudadDestino = prompt("Por favor, ingresa la ciudad de destino:");
    var costoEnvio = calcularCostoEnvio(ciudadOrigen, ciudadDestino);
    if (costoEnvio !== null) {
        alert("El costo de envío desde " + ciudadOrigen + " a " + ciudadDestino + " es de $" + costoEnvio);
    } else {
        alert("Lo sentimos, no tenemos información de costo para esa ruta.");
    }
});

function calcularCostoEnvio(origen, destino) {
    var tarifas = {
        "Ramallo": {
            "Villa": 200,
            "SanNicolas": 1000,
            "Local": 1
        },
        "Villa": {
            "Ramallo": 200,
            "SanNicolas": 800,
            "Local": 1
        },
        "SanNicolas": {
            "Ramallo": 1000,
            "Villa": 800,
            "Local": 1
        },
        "Local": {
          "Ramallo": 1,
          "Villa": 1
        }
    };

    if (tarifas[origen] && tarifas[origen][destino]) {
        return tarifas[origen][destino];
    } else {
        return null;
    }
}

