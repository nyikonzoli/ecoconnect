<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);

    // Extract form data
    $email = $data['email'];
    $name = $data['name'];
    $phone = $data['phone'];
    $description = $data['description'];

    // Validate email
    if (empty($email)) {
        $responseData = array("status" => "emptyEmail");
        echo json_encode($responseData);
        exit();
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $responseData = array("status" => "invalidEmailFormat");
        echo json_encode($responseData);
        exit();
    }

    // Send email
    sendMail($email, $name, $phone, $description);

    // Success response
    $responseData = array("status" => "success");
    echo json_encode($responseData);
    exit();
}

// Error response for invalid request method
$responseData = array("status" => "error");
echo json_encode($responseData);
exit();

function sendMail($email, $name, $phone, $description)
{
    $headers = [
        'From' => 'ECOCONNECT <info@ecoconnect.hu>',
        'X-Sender' => 'ECOCONNECT <info@ecoconnect.hu>',
        'X-Mailer' => 'PHP/' . phpversion(),
        'X-Priority' => '1',
        'MIME-Version' => '1.0',
        'Content-Type' => 'text/html; charset=utf-8'
    ];

    $subject = 'New Inquiry - ' . $email . '';
    $subject = "=?UTF-8?B?" . base64_encode($subject) . "?=";

    // Build the email content
    $message = '<!DOCTYPE html>
        <html lang="en" dir="ltr">
            <head>
                <meta charset="utf-8">
                <meta name="description" content="EcoConnect New Inquiry" />
                <title>New Inquiry - ' . $email . '</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
                </style>
            </head>
            <body style="max-width: 1280px; font-family: \'Roboto\', sans-serif; margin-left: auto; margin-right: auto;">
                <p style="margin-left: 15px;">Name: <br>' . $name . '</p>
                <p style="margin-left: 15px;">Email: <br>' . $email . '</p>
                <p style="margin-left: 15px;">Phone: <br>' . $phone . '</p>
                <p  style="margin-left: 15px; margin-bottom: 15px">Message: <br>' . $description . '</p>
            </body>
        </html>';

    // Send the email
    mail("info@ecoconnect.hu", $subject, $message, $headers);
}
