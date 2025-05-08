<?php
$username = $_POST['username'];
$password = $_POST['password'];

$con = mysqli_connect("localhost","root","","cc");

$sql = "INSERT INTO userdetail (username,password) values('$username','$password')";

$dir = header("Location: indexsub.html");

$s=mysqli_query($con,$sql);

?>