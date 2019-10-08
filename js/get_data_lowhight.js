/***
 *用于获取全部数据的最大、小值，并设置到相应地方
 */


$.ajax({
    type:'get',
    url:'php/get_data_lowhight.php',
    dataType:'json',
    success:function (res) {
        console.log(res);
        $("#mynowlow_tem_air").attr("value", res["tem_air_low"]);
        $("#mynowhight_tem_air").attr("value", res["tem_air_hight"]);
        $("#mynowlow_hum_air").attr("value", res["hum_air_low"]);
        $("#mynowhight_hum_air").attr("value", res["hum_air_hight"]);
        $("#mynowlow_hum_soil").attr("value", res["hum_soil_low"]);
        $("#mynowhight_hum_soil").attr("value", res["hum_soil_hight"]);
        $("#mynowlow_co2").attr("value", res["co2_low"]);
        $("#mynowhight_co2").attr("value", res["co2_hight"]);
        $("#mynowlow_light").attr("value", res["light_low"]);
        $("#mynowhight_light").attr("value", res["light_hight"]);
    }
});