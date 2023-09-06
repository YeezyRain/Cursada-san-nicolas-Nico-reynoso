document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("comprobarEdad").addEventListener("click", function () {

      const edad = document.getElementById("edadInput").value;
    
    
      if (!isNaN(edad) && edad !== "") {
    
          edad = parseInt(edad);
    
    
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
  
console.log ("hola gente")
const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Recuerda beber agua', 'success')
  })
}

