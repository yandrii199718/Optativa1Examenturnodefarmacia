var usuario = document.getElementById("correo");
var contraseña = document.getElementById("pass");
var btnLogin = document.getElementById("form");
var NombreAdmin, ContraAdmin;
NombreAdmin = 'admin19.@hotmail.com';
ContraAdmin = 'admin12345';



btnLogin.addEventListener ('submit', function(event){
    event.preventDefault();
   
     if (usuario.value === NombreAdmin && contraseña.value === ContraAdmin) {
      alert("Inicio de sesion como administrador exitoso");
      location.href="administrador.html";
     } 
      else if (usuario.value != NombreAdmin){
        alert("Inicio de sesion exitoso");
        location.href="index.html";
      }
     else {
       alert("Datos Incorrectos al iniciar como administrador");
     }
    
    });
    
   