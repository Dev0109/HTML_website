<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        # FIX: Replace this email with recipient email
        $mail_to = "support@rn53themes.net";
        
        # Sender Data
        //$subject = trim($_POST["subject"]);
		$subject = "Flight booking";
        $name = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
        $phone = trim($_POST["phone"]);
		$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
		$flyingfrom = trim($_POST["flyingfrom"]);
		$flyingto = trim($_POST["flyingto"]);
		$arrivaldate = trim($_POST["arrivaldate"]);
		$departuredate = trim($_POST["departuredate"]);
		$noofadults = trim($_POST["noofadults"]);
		$noofchildrens = trim($_POST["noofchildrens"]);
		$minprice = trim($_POST["minprice"]);
		$maxprice = trim($_POST["maxprice"]);
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
		$content .= "Flying from: $flyingfrom\n";
		$content .= "Flying to: $flyingto\n";
		$content .= "Arrival date: $arrivaldate\n";
		$content .= "Departure date: $departuredate\n";
		$content .= "No of adults: $noofadults\n";
		$content .= "No of childrens: $noofchildrens\n";
		$content .= "Min price: $minprice\n";
		$content .= "Max price: $maxprice\n";
        //$content .= "Message:\n$message\n";

        # email headers.
        $headers = "From: $name <$email>";

        # Send the email.
        $success = mail($mail_to, $subject, $content, $headers);
        if ($success) {
            # Set a 200 (okay) response code.
			// Thank you message
            http_response_code(200);
            echo "Thank You for booking a flight with us! Our team will contact you shortly!";
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
