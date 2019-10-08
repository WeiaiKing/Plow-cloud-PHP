<?php

    header("content-type:text/html;charset=utf-8");
    $biao=$_GET["biao"];

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
//        echo "连接成功";


    /**
    * 读取各个数据值——开始
    * 账号：root, 密码：root
    */

    /**
    * 1.读取室内温度
    */
    $datas_arr = array();
    $hours_arr = array();
    $sql = "SELECT * FROM $biao ORDER BY id DESC LIMIT 7";
    $result = $conn->query($sql);
    if ($result->num_rows > 0){
        while($row_value = mysqli_fetch_assoc($result)){
            array_push($datas_arr,$row_value["value"]);
            array_push($hours_arr,$row_value["hour"]);
        }

    }else{
        echo json_encode("0 结果");
    }

    $res = array("datas"=>$datas_arr, "hours"=>$hours_arr);
    $conn->close();
    echo json_encode($res);
?>