<?php
header("content-type:text/html;charset=utf-8");

    $id = $_GET["id"];
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

    $sql_get_stating = "SELECT stating FROM equipment WHERE id = '$id'";
    $result = $conn->query($sql_get_stating);
    if ($result-> num_rows > 0){
        $row = $result->fetch_assoc();
        $stating = $row["stating"];
    }else{
        echo "0 结果";
    }
    echo json_encode($stating);
    $conn->close();

?>

