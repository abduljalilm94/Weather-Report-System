<?php
require 'connect_db.php';

if (isset($_POST['location']) === true && empty($_POST['location']) === false && isset($_POST['date']) === true && empty($_POST['date']) === false) {
	
	$query = "SELECT location.loc_id, details.date, details.max_temp, details.mean_temp, details.min_temp, details.humidity, details.pressure, details.visibility, details.wind_speed, details.precipitation, details.events FROM location, details WHERE location.loc_id = details.loc_id AND location.loc_id = '" . mysqli_real_escape_string($connection, trim($_POST['location'])) . "' AND details.date = '" . mysqli_real_escape_string($connection, trim($_POST['date'])) . "'";

	if ($result = mysqli_query($connection, $query)) {
	
		while ($row = mysqli_fetch_row($result)) {
			$obj = new stdClass();
			$obj->id = $row[0];
			$obj->date = $row[1];
			$obj->max_temp = $row[2];
			$obj->mean_temp = $row[3];
			$obj->min_temp = $row[4];
			$obj->humidity = $row[5];
			$obj->pressure = $row[6];
			$obj->visibility = $row[7];
			$obj->wind_speed = $row[8];
			$obj->prec = $row[9];
			$obj->events = $row[10];
		}
	
		echo json_encode($obj);
	}
	
}