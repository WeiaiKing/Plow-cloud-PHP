
// 室内温度
$("#my_save_tem_air").click(function () {
   var mytem_air_low =  $("#mytem_air_low").val();
   var mytem_air_hight = $("#mytem_air_hight").val();

    $.ajax({
        type: 'POST',
        url: 'php/set_threshold.php',
        data: {"low": mytem_air_low, "hight": mytem_air_hight, "ziduan":'tem_air'},
        dataType:'json',
        success: function (res) {
            if (res){
                alert("更改成功！")
                $("#mynowlow_tem_air").attr("value", mytem_air_low);
                $("#mynowhight_tem_air").attr("value", mytem_air_hight);
            }
        },
    });
});


// 室内湿度
$("#my_save_hum_air").click(function () {
    var mytem_air_low =  $("#myhum_air_low").val();
    var mytem_air_hight = $("#myhum_air_hight").val();

    $.ajax({
        type: 'POST',
        url: 'php/set_threshold.php',
        data: {"low": mytem_air_low, "hight": mytem_air_hight, "ziduan":'hum_air'},
        dataType:'json',
        success: function (res) {
            if (res){
                alert("更改成功！")
                $("#mynowlow_hum_air").attr("value", mytem_air_low);
                $("#mynowhight_hum_air").attr("value", mytem_air_hight);
            }
        },
    });
});


// 土壤湿度
$("#my_save_hum_soil").click(function () {
    var mytem_air_low =  $("#myhum_soil_low").val();
    var mytem_air_hight = $("#myhum_soil_hight").val();

    $.ajax({
        type: 'POST',
        url: 'php/set_threshold.php',
        data: {"low": mytem_air_low, "hight": mytem_air_hight, "ziduan":'hum_soil'},
        dataType:'json',
        success: function (res) {
            if (res){
                alert("更改成功！")
                $("#mynowlow_hum_soil").attr("value", mytem_air_low);
                $("#mynowhight_hum_soil").attr("value", mytem_air_hight);
            }
        },
    });
});


// CO2
$("#my_save_co2").click(function () {
    var mytem_air_low =  $("#myco2_low").val();
    var mytem_air_hight = $("#myco2_hight").val();

    $.ajax({
        type: 'POST',
        url: 'php/set_threshold.php',
        data: {"low": mytem_air_low, "hight": mytem_air_hight, "ziduan":'co2'},
        dataType:'json',
        success: function (res) {
            if (res){
                alert("更改成功！")
                $("#mynowlow_co2").attr("value", mytem_air_low);
                $("#mynowhight_co2").attr("value", mytem_air_hight);
            }
        },
    });
});


// 光照
$("#my_save_light").click(function () {
    var mytem_air_low =  $("#mylight_low").val();
    var mytem_air_hight = $("#mylight_hight").val();

    $.ajax({
        type: 'POST',
        url: 'php/set_threshold.php',
        data: {"low": mytem_air_low, "hight": mytem_air_hight, "ziduan":'co2'},
        dataType:'json',
        success: function (res) {
            if (res){
                alert("更改成功！")
                $("#mynowlow_light").attr("value", mytem_air_low);
                $("#mynowhight_light").attr("value", mytem_air_hight);
            }
        },
    });
});