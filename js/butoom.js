function ConfirmDemo() {
             //Ingresamos un mensaje a mostrar
             var mensaje = confirm("!esta seguro de iniciar sección");
             //Detectamos si el usuario acepto el mensaje
            if (mensaje) {
                 alert("Has iniciado sección correctamente");
              }
               //Detectamos si el usuario denegó el mensaje
                else {
               alert("¡Haz denegado la acción!");
                    }
}