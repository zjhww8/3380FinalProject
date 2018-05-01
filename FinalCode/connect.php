<?php
    
    include('database_creds.php');
    
    $sql = "SELECT strings FROM test";
    $yuh = $connect->query($sql);

    while ($row = $yuh->fetch_assoc()) {
        echo $row['strings']."<br>";
    }

    $connect->close();
?>