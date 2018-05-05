<?php
include('database_creds.php');
session_start();


$index = $_COOKIE['index'];

$sql = "DELETE FROM comments WHERE id = $index";
$connect->query($sql);


$connect->close();
?>