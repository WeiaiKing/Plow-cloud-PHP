<?php

header("content-type:text/html;charset=utf-8");
date_default_timezone_set('PRC');
$date = $date = date("Y-m-d");
$servername = "47.103.2.14";
$username = "sql47_103_2_14";
$password = "SnmNQrQFHFXs8beG";
$dbname = "sql47_103_2_14";

$co2 = $_GET["co2"];
$wind_flag = $_GET["wind_flag"];
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
//echo "连接成功";
;
$sql_co2 = "INSERT INTO co2 VALUES (null ,'$co2','$date', '00:00:01')";

if ($a = $conn->query($sql_co2) === TRUE) {
//    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$sql_get_stating = "UPDATE equipment SET stating='$wind_flag' WHERE id = '1'";
$result = $conn->query($sql_get_stating);
$conn->close();
echo json_encode($a)

?>