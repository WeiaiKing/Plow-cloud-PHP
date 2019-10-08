<?php
header("content-type:text/html;charset=utf-8");
date_default_timezone_set('PRC');

    $biao = $_GET["biao"];
//    echo $id;
    $servername = "47.103.2.14";
    $username = "sql47_103_2_14";
    $password = "SnmNQrQFHFXs8beG";
    $dbname = "sql47_103_2_14";

    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);



    $date = date("Y-m-d");
    $n_y = date("Y-m-");
    $ri = (int)date("d");
    $date_arr = array();
    $hight_arr = array();
    $low_arr = array();

    // 检测连接
    if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
    }
    //    echo json_encode("连接成功");
    for ($j=7;$j>=1;$j-- ){
        $stating = array();
        $hight = 0;
        $low = 100;
        $ri--;
        $zhongzhuang = strval($ri);
        $riqi = $n_y."".$zhongzhuang;
        $sql_get_stating = "SELECT value FROM $biao WHERE date='$riqi'";
        $result = $conn->query($sql_get_stating);
        if ($result-> num_rows > 0){
            while($row_value = mysqli_fetch_assoc($result)){
                array_push($stating,$row_value["value"]);
            }

        }else{
            echo json_encode("0 结果");
        }
        //echo json_encode($stating);

        //比较取出最大的值
        $i = count($stating);
        while ($i>=1){
            $i--;
            if ($hight < (int)$stating[$i]){
                $hight = (int)$stating[$i];
            }

        }
        $i = count($stating);
        while ($i>=1){
            $i--;
            if ($low > (int)$stating[$i]){
                $low = (int)$stating[$i];
            }
        }
        array_push($hight_arr,$hight);
        array_push($low_arr,$low);
        array_push($date_arr,$riqi);

    }


    $res = array("dates"=>$date_arr, "datas_hight"=>$hight_arr, "datas_low"=>$low_arr);
    echo json_encode($res);

    $conn->close();


?>