<?php

$connection = mysqli_connect("localhost", "root", "", "weather_db");

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
