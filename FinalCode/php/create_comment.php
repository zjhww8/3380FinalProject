<?php
include('database_creds.php');
session_start();


$post_text = $_POST['comments'];
$name = $_SESSION["username"];

$sql = "INSERT INTO comments (username, comment) VALUES ('$name','$post_text')";

$connect->query($sql);
$connect->close();

header('Location: ../comments.php')
?>