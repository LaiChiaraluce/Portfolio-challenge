<?php 
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$asunto = $_POST['asunto'];
    $msj = $_POST['message'];
	$mensaje = "Nombre: ".$nombre."\nEmail: ".$email."\nMensaje: ".$msj;


	if(mail('estanislaochiaraluce@gmail.com', $asunto, $mensaje)){
        echo '<script type="text/JavaScript">window.location.replace("https://laichiaraluce.github.io/Portfolio-challenge/"); alert("Mail enviado con éxito!");</script>';
	}
 ?>