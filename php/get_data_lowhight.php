<?php

/**
 * 连接数据库
 * 账号：root, 密码：root
 */
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

header("content-type:text/html;charset=utf-8");
/**
 * 读取各个数据值——开始
 * 账号：root, 密码：root
 */

/**
 * 1.读取室内温度
 */
$sql_tem_air = "SELECT low,hight FROM threshold WHERE name='tem_air'";
$result_tem_air = $conn->query($sql_tem_air);

if ($result_tem_air->num_rows > 0) {
    // 输出数据
//        while($row = $result->fetch_assoc()) {
//            echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
//        }
    $row_tem_air = $result_tem_air->fetch_assoc();
} else {
    echo "0 结果";
}
/**
 * 2.读取室内湿度
 */
$sql_hum_air = "SELECT low,hight FROM threshold WHERE name='hum_air'";
$result_hum_air = $conn->query($sql_hum_air);

if ($result_hum_air->num_rows > 0) {
    // 输出数据
    //        while($row = $result->fetch_assoc()) {
    //            echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    //        }
    $row_hum_air = $result_hum_air->fetch_assoc();
} else {
    echo "0 结果";
}


/**
 * 3.读取土壤湿度
 */
$sql_hum_soil = "SELECT low,hight FROM threshold WHERE name='hum_soil'";
$result_hum_soil = $conn->query($sql_hum_soil);

if ($result_hum_soil->num_rows > 0) {
    // 输出数据
    //        while($row = $result->fetch_assoc()) {
    //            echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    //        }
    $row_hum_soil = $result_hum_soil->fetch_assoc();
} else {
    echo "0 结果";
}

/**
 * 4.读取室内二氧化碳浓度
 */
$sql_co2 = "SELECT low,hight FROM threshold WHERE name='co2'";
$result_co2 = $conn->query($sql_co2);

if ($result_co2->num_rows > 0) {
    // 输出数据
    //        while($row = $result->fetch_assoc()) {
    //            echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    //        }
    $row_co2 = $result_co2->fetch_assoc();
} else {
    echo "0 结果";
}


/**
 * 5.读取室内光照强度
 */
$sql_light = "SELECT low,hight FROM threshold WHERE name='light'";
$result_light = $conn->query($sql_light);

if ($result_light->num_rows > 0) {
    // 输出数据
    //        while($row = $result->fetch_assoc()) {
    //            echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    //        }
    $row_light = $result_light->fetch_assoc();
} else {
    echo "0 结果";
}

/**
 * 读取各个数据值——结束
 */

/**==============================================================================================================
================================================================================================================*/

$conn->close();

$a = array('tem_air_low'=>$row_tem_air["low"], 'tem_air_hight'=>$row_tem_air["hight"], 'hum_air_low'=>$row_hum_air["low"], 'hum_air_hight'=>$row_hum_air["hight"],'hum_soil_low'=>$row_hum_soil["low"], 'hum_soil_hight'=>$row_hum_soil["hight"],
    'co2_low'=>$row_co2["low"], 'co2_hight'=>$row_co2["hight"], 'light_low'=>$row_light["low"], 'light_hight'=>$row_light["hight"],);
echo json_encode($a);

?>
