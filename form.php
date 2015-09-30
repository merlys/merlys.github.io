<?php   
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$to = 'merlymoolayil@gmail.com';
	$subject = 'Website Contact From';
	$msg = $name . " " . $email . " " .$message;

	mail($to, $subject, $msg);






?>