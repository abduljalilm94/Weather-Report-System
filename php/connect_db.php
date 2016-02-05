<?php

$connection = mysqli_connect("localhost:3306", "root", "", "abduljal_weather_db");

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
