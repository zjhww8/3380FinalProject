<?php
session_start();
session_destroy();
header('HTTP/1.1 200 Successful Authorization');
?>