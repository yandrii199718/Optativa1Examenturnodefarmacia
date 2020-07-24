var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
 var telefono = document.getElementById("telefono");
var mensaje = document.getElementById("mensaje");

 var btnEnviar = document.getElementById("validar");




 
btnEnviar.addEventListener ('submit', function(event){
    event.preventDefault();
    Contacto();
    
  
    
    });
    

function Contacto() {
    if (nombre.value === null || nombre.value === "")
    {
       alert("El campo Nombre esta vacio");
        return false;
    }
    if (correo.value === null || correo.value === "")
     {
        alert("El campo Correo esta Vacio");
        return false;
     } 
    if (telefono.value === null || telefono.value === "")
    {
        alert("Debes agregar un telefono");
        return false;
    } 
      if (mensaje.value === null || mensaje.value === "")
    {
        alert("Debes escribir un mensaje");
        return false;
    } 
  
    else{
        alert("Datos Enviada Correctamente");
        LimpiarDatos();
    
    }  
    
}





function LimpiarDatos() {
    document.getElementById("nombres").value = "";
    document.getElementById("cedula").value="";
   document.getElementById("fecha").value="";
    document.getElementById("hora").value="";
   document.getElementById("ciudad").value= "";
   document.getElementById("Seleccion").value="";
    
}


