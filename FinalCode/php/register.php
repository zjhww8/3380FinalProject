<?php
	include('database_creds.php');
    session_start();
	session_destroy();

	$post_username = $_POST['username'];
    $post_password = $_POST['password'];

    $sql = "INSERT INTO users (username, password) VALUES ('matt', 'poop')";
    $users = $connect->query($sql);

    $connect->close();
?>