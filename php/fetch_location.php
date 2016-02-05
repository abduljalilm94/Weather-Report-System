<?php
require 'connect_db.php';

$query = "SELECT loc_id, loc_name FROM location";

if ($result = mysqli_query($connection, $query)) {
	
	$data = array();
	
    while ($row = mysqli_fetch_row($result)) {
		$obj = new stdClass();
		$obj->id = $row[0];
		$obj->name = $row[1];
		array_push($data, $obj);
    }
	
	echo json_encode($data);
}