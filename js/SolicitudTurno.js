var nombre = document.getElementById("nombres");
var cedula = document.getElementById("cedula");
 var fecha = document.getElementById("fecha");
var hora = document.getElementById("hora");
var ciudad =  document.getElementById("ciudad");
 var seleccionar = document.getElementById("Seleccion");
 var btnEnviar = document.getElementById("validar");




 
btnEnviar.addEventListener ('submit', function(event){
    event.preventDefault();
    SolicitarTurno();
    
  
    
    });
    

function SolicitarTurno() {
    if (nombre.value === null || nombre.value === "")
    {
       alert("El campo Nombres esta vacio");
        return false;
    }
    if (cedula.value === null || cedula.value === "")
     {
        alert("El campo Cedula esta vacio");
        return false;
     } 
    if (fecha.value === null || fecha.value === "")
    {
        alert("Debes escoger una fecha");
        return false;
    } 
      if (hora.value === null || hora.value === "")
    {
        alert("Debes escoger una hora");
        return false;
    } 
    if (ciudad.value === null || ciudad.value === "")
    {
        alert("El campo Ciudad esta vacio");
        return false;
    } 
    if (seleccionar.value === null || seleccionar.value === "")
    {
        alert("Debes Eligir el proceso a realizar");
        return false;
    } 
    else{
        alert("Solicitud Enviada Correctamente");
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




