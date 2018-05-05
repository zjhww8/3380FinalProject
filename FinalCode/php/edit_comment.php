<?php
include('database_creds.php');
session_start();

$index = $_COOKIE['index'];
$text = $_POST['comments'];

echo $index;

$sql = "UPDATE comments SET comment = '$text' WHERE id=$index";
$result = $connect->query($sql);


header('Location: ../comments.php');

$connect->close();
?>