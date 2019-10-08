<?php

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


/**
 * 获取各个设备状态值——开始
 *
 */
$sql_stating = "SELECT stating FROM equipment ";
$result_stating = $conn->query($sql_stating);
$stating = array();
while($row_stating = mysqli_fetch_assoc($result_stating))
{
    array_push($stating,$row_stating["stating"]);
}
$conn->close();
$a = array('wind_flag'=>$stating[0], 'light_flag'=>$stating[1], 'window_flag'=>$stating[2], 'motor_flag'=>$stating[3], 'add_heat_flag'=>$stating[4], 'lower_temp_flag'=>$stating[5]);
$data = 'wind_flag='.$stating[0].'$light_flag='.$stating[1].'$window_flag='.$stating[2].'$motor_flag='.$stating[3].'$add_heat_flag='.$stating[4].'$lower_temp_flag='.$stating[5];
echo json_encode($data);

?>