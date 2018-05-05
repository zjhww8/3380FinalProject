<?php
	include('database_creds.php');
    session_start();
	session_destroy();

	$post_username = $_POST['username'];
    $post_password = $_POST['password'];

    $sql = "INSERT INTO users (username, password) VALUES ('$post_username', '$post_password')";
    $users = $connect->query($sql);


    header('Location: ../index.html');
    $connect->close();
?>