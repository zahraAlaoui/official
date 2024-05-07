<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $asunto = $_POST['asunto'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    
    $destinatario = 'javilasanch@gmail.com'; // Cambia esto al correo al que quieras enviar los mensajes
    
    $contenido = "Asunto: $asunto\n\n";
    $contenido .= "Correo electrónico: $email\n\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Envía el correo
    if (mail($destinatario, $asunto, $contenido)) {
        echo "El correo se ha enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.";
    }
}
?>
