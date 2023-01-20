<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        # FIX: Replace this email with recipient email
        $mail_to = "support@rn53themes.net";
        
        # Sender Data
        //$subject = trim($_POST["subject"]);
		$subject = "FAQ tour and travel";
        $name = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
        $phone = trim($_POST["phone"]);
		$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
		$city = trim($_POST["city"]);
		$ecount = trim($_POST["ecount"]);
		$emess = trim($_POST["emess"]);
        //$message = trim($_POST["message"]);
        
        if ( empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($phone)) {
            # Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Please complete the form and try again.";
            exit;
        }
        
        # Mail Content
        $content = "Name: $name\n";
		$content .= "Phone: $phone\n";
        $content .= "Email: $email\n\n";
        $content .= "City: $city\n";
		$content .= "Country: $ecount\n";
		$content .= "Message: $emess\n";
        //$content .= "Message:\n$message\n";

        # email headers.
        $headers = "From: $name <$email>";

        # Send the email.
        $success = mail($mail_to, $subject, $content, $headers);
        if ($success) {
            # Set a 200 (okay) response code.
			// Thank you message
            http_response_code(200);
            echo "Thank you for your message! Our team will contact you shortly!";
        } else {
            # Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong, we couldn't send your message.";
        }

    } else {
        # Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>
