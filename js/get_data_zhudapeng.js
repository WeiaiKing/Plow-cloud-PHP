
//<!--ajax定时刷新获取主温室数据——开始-->

var getting_zhukongshi = {
    type:'get',
    url:'php/get_data_zhudapeng.php',
    dataType:'json',

    success:function(res) {

        console.log(res);
        // res = String(res['tem_air']);
        var stating = new Array("已关闭", "启动中");
        //设置数据显示
        document.getElementById("my_tem_air").innerText = res['tem_air'] ;
        document.getElementById("my_hum_air").innerText = res['hum_air'] ;
        document.getElementById("my_hum_soil").innerText = res['hum_soil'] ;
        document.getElementById("my_co2").innerText = res['co2'] ;
        document.getElementById("my_light").innerText = res['light'] ;

        //控制设备
        $("#put1").attr("value", stating[res["wind_flag"]]);
        $("#put2").attr("value", stating[res["light_flag"]]);
        $("#put3").attr("value", stating[res["window_flag"]]);
        $("#put4").attr("value", stating[res["motor_flag"]]);
        $("#put5").attr("value", stating[res["add_heat_flag"]]);
        $("#put6").attr("value", stating[res["lower_temp_flag"]]);



    }

};

//关键在这里，Ajax定时访问服务端，不断获取数据 ，这里是10秒请求一次。
// $("#my_data_center").click(function(){$.ajax(getting)});
window.setInterval(function(){$.ajax(getting_zhukongshi)},10000);

//<!--ajax定时刷新获取主温室数据——结束-->


//<!--ajax监控设备开关按钮——开始-->

var stating_array = new Array('1','0');


// 1.排风扇
$("#put1").click(function(){
    //进行 ajax 异步提交
    $.ajax({
        type:'get',
        url:'php/get_equipment_state.php?id=1',
        dataType:'json',
        success:function (res) {
            var stating_wind_flag = res;
            $.ajax({
                type:'get',
                url:'php/set_equipment_state.php?stating='+stating_array[stating_wind_flag]+'&id=1',
                dataType:'json',
                success:function (res) {

                }
            });

        }
    });

});


// 2.补光灯
$("#put2").click(function(){
    //进行 ajax 异步提交
    $.ajax({
        type:'get',
        url:'php/get_equipment_state.php?id=2',
        dataType:'json',
        success:function (res) {
            var stating_light_flag = res;
            $.ajax({
                type:'get',
                url:'php/set_equipment_state.php?stating='+stating_array[stating_light_flag]+'&id=2',
                dataType:'json',
                success:function (res) {

                }
            });

        }
    });

});


// 3.卷帘
$("#put3").click(function(){
    //进行 ajax 异步提交
    $.ajax({
        type:'get',
        url:'php/get_equipment_state.php?id=3',
        dataType:'json',
        success:function (res) {
            var stating_window_flag = res;
            $.ajax({
                type:'get',
                url:'php/set_equipment_state.php?stating='+stating_array[stating_window_flag]+'&id=3',
                dataType:'json',
                success:function (res) {

                }
            });

        }
    });

});



// 4.水泵
$("#put4").click(function(){
    //进行 ajax 异步提交
    $.ajax({
        type:'get',
        url:'php/get_equipment_state.php?id=4',
        dataType:'json',
        success:function (res) {
            var stating_motor_flag = res;
            $.ajax({
                type:'get',
                url:'php/set_equipment_state.php?stating='+stating_array[stating_motor_flag]+'&id=4',
                dataType:'json',
                success:function (res) {

                }
            });

        }
    });
});


// 5.增温
$("#put5").click(function(){
    //进行 ajax 异步提交
    $.ajax({
        type:'get',
        url:'php/get_equipment_state.php?id=5',
        dataType:'json',
        success:function (res) {
            var stating_add_heat_flag = res;
            $.ajax({
                type:'get',
                url:'php/set_equipment_state.php?stating='+stating_array[stating_add_heat_flag]+'&id=5',
                dataType:'json',
                success:function (res) {

                }
            });

        }
    });
});


// 6.降温
$("#put6").click(function(){
    //进行 ajax 异步提交
    $.ajax({
        type:'get',
        url:'php/get_equipment_state.php?id=6',
        dataType:'json',
        success:function (res) {
            var stating_lower_temp_flag = res;
            $.ajax({
                type:'get',
                url:'php/set_equipment_state.php?stating='+stating_array[stating_lower_temp_flag]+'&id=6',
                dataType:'json',
                success:function (res) {

                }
            });

        }
    });
});
//<!--ajax监控设备开关按钮——开始-->