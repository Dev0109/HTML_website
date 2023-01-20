<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        # FIX: Replace this email with recipient email
        $mail_to = "support@rn53themes.net";
        
        # Sender Data
        //$subject = trim($_POST["subject"]);
		$subject = "Custom travel package booking";
        $name = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
        $phone = trim($_POST["phone"]);
		$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
		$howmanytravellers = trim($_POST["howmanytravellers"]);
		$travelername1 = trim($_POST["travelername1"]);
		$travelername2 = trim($_POST["travelername2"]);
		$travelername3 = trim($_POST["travelername3"]);
		$city = trim($_POST["city"]);
		$package = trim($_POST["package"]);
		$arrival = trim($_POST["arrival"]);
		$departure = trim($_POST["departure"]);
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
        $content .= "howmanytravellers: $howmanytravellers\n";
		$content .= "travelername1: $travelername1\n";
		$content .= "travelername2: $travelername2\n";
		$content .= "travelername3: $travelername3\n";
		$content .= "city: $city\n";
		$content .= "package: $package\n";
		$content .= "arrival: $arrival\n";
		$content .= "departure: $departure\n";
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
            echo "Thank you for making a wonderful custom package trip for us! Our team will contact you shortly!";
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
