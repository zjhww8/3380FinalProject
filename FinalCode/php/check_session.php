<?php
session_start();

if(!array_key_exists('username',$_SESSION)){
	header('HTTP/1.1 500 Internal Server Error');
}
else if($_SESSION["username"] != null)
	header('HTTP/1.1 200 Successful Authorization');
?>