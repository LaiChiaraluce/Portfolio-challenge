var boton = document.querySelector(".formulario__button")
var nombre = document.querySelector(".nombre");
var mail = document.querySelector(".mail");
var asunto = document.querySelector(".asunto");
var mensaje = document.querySelector(".mensaje");
var avisoNombre = document.querySelector(".aviso-nombre");
var avisoMail = document.querySelector(".aviso-mail");
var avisoAsunto = document.querySelector(".aviso-asunto");
var avisoMensaje = document.querySelector(".aviso-msj");
var nombreBooleano = false;
var mailBooleano = false;
var asuntoBooleano = false;
var mensajeBooleano = false;

function validarNombre(){
	if(nombre.value.trim() == ""){
		avisoNombre.innerHTML = "Debe completar este campo con su nombre";
		nombre.style.color = "#F33F33";
		nombreBooleano = false;
	}
	else if(nombre.value.length > 50){
		avisoNombre.innerHTML = "Este campo no puede contener más de 50 caracteres";
		nombre.style.color = "#F33F33";
		nombreBooleano = false;
	}
	else{
		nombre.style.color = "#000000";
		avisoNombre.innerHTML = "";
		nombreBooleano = true;
	}
}

function validarMail(){
	if(mail.value.trim() == ""){
		avisoMail.innerHTML = "Debe completar este campo con su dirección de correo electrónico";
		mail.style.color = "#F33F33";
		mailBooleano = false;
	}
	else{
		mail.style.color = "#000000";
		avisoMail.innerHTML = "";
		mailBooleano = true;
	}
}

function validarAsunto(){
	if(asunto.value.trim() == ""){
		avisoAsunto.innerHTML = "Debe completar este campo con el asunto de su mensaje";
		asunto.style.color = "#F33F33";
		asuntoBooleano = false;
	}
	else if(asunto.value.length > 50){
		avisoAsunto.innerHTML = "Este campo no puede contener más de 50 caracteres";
		asunto.style.color = "#F33F33";
		asuntoBooleano = false;
	}
	else{
		asunto.style.color = "#000000";
		avisoAsunto.innerHTML = "";
		asuntoBooleano = true;
	}
}

function validarMensaje(){
	if(mensaje.value.trim() == ""){
		avisoMensaje.innerHTML = "Debe completar este campo con su mensaje";
		mensaje.style.color = "#F33F33";
		mensajeBooleano = false;
	}
	else if(mensaje.value.length > 300){
		avisoMensaje.innerHTML = "Este campo no puede contener más de 300 caracteres";
		mensaje.style.color = "#F33F33";
		mensajeBooleano = false;
	}
	else{
		mensaje.style.color = "#000000";
		avisoMensaje.innerHTML = "";
		mensajeBooleano = true;
	}
}

function validarForm(event){
	if (nombreBooleano == false || mailBooleano == false || asuntoBooleano == false || mensajeBooleano == false) {
		event.preventDefault();
		validarNombre();
		validarMail();
		validarAsunto();
		validarMensaje();
	}
}