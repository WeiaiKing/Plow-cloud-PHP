<?php

header("content-type:text/html;charset=utf-8");

$name = $_POST["name"];
$email = $_POST["email"];
//echo json_encode($_POST);
//    echo $id;
$servername = "47.103.2.14";
$username = "sql47_103_2_14";
$password = "SnmNQrQFHFXs8beG";
$dbname = "sql47_103_2_14";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
//    echo "连接成功";

$sql_get_stating = "INSERT INTO admin (name, email) VALUES ('$name', '$email')";
$result = $conn->query($sql_get_stating);
echo json_encode($result);
$conn->close();
?>
