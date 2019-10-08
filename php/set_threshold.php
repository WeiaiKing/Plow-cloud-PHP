<?php

header("content-type:text/html;charset=utf-8");

$low = $_POST["low"];
$hight = $_POST["hight"];
$ziduan = $_POST["ziduan"];
//    echo $id;
$servername = "47.103.2.14";
$username = "sql47_103_2_14";
$password = "SnmNQrQFHFXs8beG";
$dbname = "sql47_103_2_14";;

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
//    echo "连接成功";

$sql_get_stating = "UPDATE threshold SET low='$low', hight='$hight' WHERE name = '$ziduan'";
$result = $conn->query($sql_get_stating);
echo json_encode($result);
$conn->close();
?>
