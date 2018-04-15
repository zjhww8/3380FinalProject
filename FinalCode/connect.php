<?php

    $host = "localhost";
    $username = "root";
    $password = "";
    $databaseName = "NEWUSERS";


    $connect = mysqli_connect($host, $username, $password, $databaseName);

    if(!connect){
        echo "was not able to connect to server";
    }
    
    $user_name = $_POST['username'];
    $pass = $_POST['password'];
    $test = "test";
    $adminPass = "pass";

     if($username === $test && $password === $adminPass)
    {
        header ("Location: builds.html");
    }

    $sql = "INSERT INTO userInfo(username, pass) VALUES ('$user_name', '$pass')";
    $yuh = $connect->query($sql);

    if(!yuh){
        echo "the data was not able to be stored";
    }
    else if($user_name === $test && $pass === $adminPass)
    {
        header ("Location: builds.html");
    }
    else {
//        myfunction('username', 'password');
        header ("Location: error.html");
    }

    

    $connect->close();



?>