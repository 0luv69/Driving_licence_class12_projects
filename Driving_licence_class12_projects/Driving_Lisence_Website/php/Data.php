<?php
$username = $_POST['username'];
$password = $_POST['email'];
$password = $_POST['mess'];
//Databaseconnection
$conn = new mysqli('localhost','root','','atest');
if($conn->connect_error){
	die('Connection Failed: '.$conn->connect_error);
}
else{
	$stmt = $conn->prepare("insert into details(username, email, mess) values(?,?,?)");
	$stmt->bind_param('C:\Users\admin\Desktop\ALl\Driving_Lisence_Website', $username, $email, $mess);
	$stmt->execute();
	echo "Registration Sucessful..";
	$stmt->close();
	$conn->close();
}
?>