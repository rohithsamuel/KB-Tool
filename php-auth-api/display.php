<?php


$data = file_get_contents('php://input');
$filters = json_decode($data,true);

$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "php_auth_api"; 

$con = mysqli_connect($host, $user, $password,$dbname);

// $method = $_SERVER['REQUEST_METHOD'];
// $request = explode('/', trim($_SERVER['PATH_INFO'],'/'));


if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT * FROM techfaq";
//run SQL statement
$result = mysqli_query($con,$sql);


// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}
$catagories = [];
if ($result->num_rows > 0) {
	// output data of each row
	while($row = $result->fetch_assoc()) {
		$catagories[] = $row;
	}
} 
echo json_encode(['faq' =>$catagories]);


?>