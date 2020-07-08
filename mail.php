<?php
$result = array();

if (empty($result['error'])) {
    $name = protection($_POST['name']);
    $email = protection($_POST['email']);
    $mes = protection($_POST['mes']);
    $to .= "test@test.com";

    $subject = 'Havran';

    $message = '
        <html>
            <head>
                <title>Notice from the site Havran</title>
            </head>
            <body>
                <h3>Notice from the site Havran</h3>
                <p><b>Имя:</b> ' . $name . '</p>
                <p><b>Email:</b> ' . $email . '</p>
                <p><b>Сообщение:</b> ' . $mes . '</p>
            </body>
        </html>';

    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    $headers[] = 'From: test@test.com';

    mail($to, $subject, $message, implode("\r\n", $headers));


    $result['success'] = true;
    $result['message'] = $info[$_POST['title']];
}

echo json_encode($result);

function protection($value)
{
    $result = htmlspecialchars($value);
    $result = urldecode($result);
    $result = trim($result);

    return $result;
}