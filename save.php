<?php


$server = "localhost";
$username = "root";
$password = "";
$dbname = "aadhar";

$con = mysqli_connect($server, $username, $password, $dbname);


if(!$con)
{
    echo "not connected";
}

$name   =$_POST['fullName'];
$dob   =$_POST['dob'];
$address   =$_POST['address';]
$gender   =$_POST['gender'];
$pnno     =$_POST['phone'];

$sql = "INSERT INTO `test`(`name`, `dob`, `address`, `gender`, `pnno`) VALUES ('$name','$dob','$address','$gender','$pnno')";

$result  = mysqli_query($con,$sql);

if($result)
{
    echo "Data Submitted";
}
else
{
    echo "query Failed"
}
?>