<?php

    $host = "database3380.crpnj5aroetm.us-east-1.rds.amazonaws.com";
    $username = "root";
    $password = "dalerocks";
    $databaseName = "DaleDatabase";


    $connect = mysqli_connect($host, $username, $password, $databaseName);

    $sql = "SELECT strings FROM test";
    $yuh = $connect->query($sql);

    while ($row = $yuh->fetch_assoc()) {
        echo $row['strings']."<br>";
    }
    
    $connect->close();
?>