<?php
    include('database_creds.php');
    session_start();
	session_destroy();

    $post_username = $_POST['username'];
    $post_password = $_POST['password'];

    $sql = "SELECT id, username, password FROM users WHERE username = '$post_username'";

    $users = $connect->query($sql);
	$row = $users->fetch_assoc();

    if($row['password'] === $post_password){
    	session_start();
    	$_SESSION["username"] = $post_username;
    	$_SESSION["id"] = $row["id"];
	    header('Location: home.html');
	}
	else{
		$message = "Incorrect Login Information";
		echo "<script type='text/javascript'>alert('$message');</script>";
		echo "<script>setTimeout(\"location.href = 'http://18.233.165.90/index.html';\",1500);</script>";
	}

    $connect->close();
?>