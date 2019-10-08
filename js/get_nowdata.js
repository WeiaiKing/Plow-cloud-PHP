/***
 * 获取当前温度、湿度、二氧化碳、光照的值
 */


$.ajax({
    type:'get',
    url:'php/get_nowdata.php',
    dataType:'json',
    success:function (res) {
        console.log(res);
        $("#mynow_tem_air").attr("value", res["tem_air"]);
        $("#mynow_hum_air").attr("value", res["hum_air"]);
        $("#mynow_hum_soil").attr("value", res["hum_soil"]);
        $("#mynow_co2").attr("value", res["co2"]);
        $("#mynow_light").attr("value", res["light"]);
    }
});