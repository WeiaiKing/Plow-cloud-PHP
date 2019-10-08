<?php
header("content-type:text/html;charset=utf-8");
date_default_timezone_set('PRC');
$date = $date = date("Y-m-d");
/*
 * (0) $_POST这被指对象，表示接收到的前段发送过来的post请求数据包
 * (1) $_GET这个内置对象，表示接收到的前端发送过来的get请求数据包
 * (2) echo 代表返回前端指定数据
 * (3) json_encode(对象)，来将数组或对象等复杂值转换成json格式
 * */

//    $success = array('msg'=>'OK', 'info'=>'wo shoudao xinxi l');
//    echo json_encode($success);

//    $success = array('msg'=>'OK', 'info'=>$_GET);
//    echo json_encode($success);

$success = array('msg'=>'OK', 'info'=>$_POST);
//$a = $success["info"];

$fog = $_GET["fog"];

$co2= $_GET["co2"];
$hum_air= $_GET["hum_air"];
$hum_soil = $_GET["hum_soil"];
$raindrop = $_GET["raindrop"];
$tem_air = $_GET["tem_air"];
$light = $_GET["light"];

$light_flag = $_GET["light_flag"];
$window_flag = $_GET["window_flag"];
$motor_flag = $_GET["motor_flag"];
$wind_flag = $_GET["wind_flag"];
$add_heat_flag = $_GET["add_heat_flag"];
$lower_temp_flag = $_GET["lower_temp_flag"];


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
//echo "连接成功";

$sql_co2 = "INSERT INTO co2 VALUES (null ,'$co2','$date', '00:00:01')";

if ($a = $conn->query($sql_co2) === TRUE) {
//    echo "新记录插入成功";
} else {
    echo "Error: " . $sql_co2 . "<br>" . $conn->error;
}
$sql_hum_air = "INSERT INTO hum_air VALUES (null ,'$hum_air','$date', '00:00:01')";

if ($a = $conn->query($sql_hum_air) === TRUE) {
//    echo "新记录插入成功";
} else {
    echo "Error: " . $sql_hum_air . "<br>" . $conn->error;
}

$sql_hum_soil = "INSERT INTO hum_soil VALUES (null ,'$hum_soil','$date', '00:00:01')";

if ($a = $conn->query($sql_hum_soil) === TRUE) {
//    echo "新记录插入成功";
} else {
    echo "Error: " . $sql_hum_soil . "<br>" . $conn->error;
}

$sql_raindrop = "INSERT INTO tem_soil VALUES (null ,'$raindrop','$date', '00:00:01')";

if ($a = $conn->query($sql_raindrop) === TRUE) {
//    echo "新记录插入成功";
} else {
    echo "Error: " . $sql_raindrop . "<br>" . $conn->error;
}

$sql_tem_air = "INSERT INTO tem_air VALUES (null ,'$tem_air','$date', '00:00:01')";

if ($a = $conn->query($sql_tem_air) === TRUE) {
//    echo "新记录插入成功";
} else {
    echo "Error: " . $sql_tem_air . "<br>" . $conn->error;
}


$sql_light = "INSERT INTO light VALUES (null ,'$light','$date', '00:00:01')";

if ($a = $conn->query($sql_light) === TRUE) {
//    echo "新记录插入成功";
} else {
    echo "Error: " . $sql_light . "<br>" . $conn->error;
}


$sql_get_stating = "UPDATE equipment SET stating='$wind_flag' WHERE id = '1'";
$result = $conn->query($sql_get_stating);

$sql_get_stating = "UPDATE equipment SET stating='$light_flag' WHERE id = '2'";
$result = $conn->query($sql_get_stating);

$sql_get_stating = "UPDATE equipment SET stating='$window_flag' WHERE id = '3'";
$result = $conn->query($sql_get_stating);

$sql_get_stating = "UPDATE equipment SET stating='$motor_flag' WHERE id = '4'";
$result = $conn->query($sql_get_stating);

$sql_get_stating = "UPDATE equipment SET stating='$add_heat_flag' WHERE id = '5'";
$result = $conn->query($sql_get_stating);

$sql_get_stating = "UPDATE equipment SET stating='$lower_temp_flag' WHERE id = '6'";
$result = $conn->query($sql_get_stating);

$conn->close();
echo json_encode(123);

//echo json_encode($_POST["uname"]);

?>