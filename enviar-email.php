<?php 

    /*
    error_reporting(0);
    */

    $nome = utf8_encode($POST['nome']);
    $email = utf8_encode($POST['email']);
    $mensagem = utf8_encode($POST['mensagem']);

    require 'PHPMailer/PHPMailerAutoload.php';

    $mail = new PHPMailer;
    $mail->isSMTP();

    //Config server
    $mail->Host = "smtp.gmail.com";
    $mail->Port = "587";
    $mail->SMTPSecure = "TLS";
    $mail->SMTPAuth = "true";
    $mail->Username = "carlosdev@gmail.com";
    $mail->Password = "1598karlos";

    $mail->setFrom($mail->Username"Carlos Cesar");//remetente
    $mail->addAddress('carlosdev@gmail.com');//destinatario
    $mail->Subject = "Fale conosco";

    $conteudo_email = 
    "
        Você recebeu uma mensagem de $nome, $email, 
        <br>
        Mensagem: 
        $mensagem
    ";

    $mail->IsHTML(true);
    $mail->Body = $conteudo_email;

    if ( $mail->send ){
        echo "
                Formulário enviado com sucesso
                Em breve eu entro em contato com você.
             "
    } else{
        echo "Falha ao enviar o contato." . mail->ErrorInfo;
    }
?>