var dates = new Array();
//进行 ajax 异步提交
$.ajax({
    type:'get',
    url:'php/get_history_data.php?biao=co2',
    dataType:'json',

    success:function (res) {
        // console.log(res);
        dates = res["dates"];

        var i = 0;
        while (i < 7){
            var html="<tr>";
            html += "<td>"+res["dates"][i]+"</td>";
            html += "<td>"+res["datas_hight"][i]+"</td>";
            html += "<td>"+res["datas_low"][i]+"</td>";
            html += "</tr>";
            $("#mytb_co2").append(html);
            i++;
        }

        myChart_co2.setOption({ //加载数据图表
            xAxis: {
                data: dates
            },
            series: [{
                // 根据名字对应到相应的系列
                name: ['最高湿度'],
                data: res["datas_hight"],
            },
                {
                    name: ['最低湿度'],
                    data: res["datas_low"],
                }
            ]

        });
    }
});


var myChart_co2 = echarts.init(document.getElementById('main_co2'));

// 指定图表的配置项和数据
var option_co2 = {
    title: {
                                text: "二氧化碳浓度",
                                textStyle: {
                                    color: "rgb(51, 53, 51)"
                                },
                                // backgroundColor: "rgb(186, 216, 186)"
                            },
                            tooltip: {
                                trigger: "axis"
                            },
                            legend: {
                                data: ["最高气温", "最低气温"]
                            },
                            toolbox: {
                                show: true,
                                feature: {
                                    dataView: {
                                        show: true,
                                        iconStyle: {
                                                borderColor: "rgb(56, 137, 252)"
                                                },
                                        readOnly: true
                                    },
                                    magicType: {
                                        type: ["line", "bar"],
                                        show: false
                                    },
                                    restore: {
                                      iconStyle: {
                                                borderColor: "rgb(56, 137, 252)"
                                                },
                                        show: true
                                    },
                                    saveAsImage: {
                                      iconStyle: {
                                                borderColor: "rgb(56, 137, 252)"
                                                },
                                        show: true
                                    },
                                    dataZoom: {
                                      iconStyle: {
                                                borderColor: "rgb(56, 137, 252)"
                                                },
                                        show: true
                                    },
                                    mark: {
                                        show: false
                                    }
                                }
                            },
                            calculable: true,
                            xAxis: [
                                {
                                    type: "category",
                                    boundaryGap: false,
                                    data: [],
                                    axisTick: {
                                        length: 5,
                                        interval: 0
                                    },
                                    splitNumber: 51,
                                    splitLine: {
                                        show: false
                                    },
                                    axisLabel: {
                                        interval: 0,
                                        show: true
                                    }
                                }
                            ],
                            yAxis: [
                                {
                                    type: "value",
                                    name: "ppm"
                                }
                            ],
                            series: [
                                {

                                    name: "最高气温",
                                    type: "line",
                                    data: [],
                                    itemStyle: {
                                        normal: {
                                            lineStyle: {
                                                color: "rgb(56, 137, 252)",
                                                width: 3
                                            },
                                            color: "rgb(56, 137, 252)"
                                        }
                                    },
                                    smooth: true
                                },
                                {
                                    type: "line",
                                    name: "最低气温",
                                    data: [],
                                    itemStyle: {
                                        normal: {
                                            lineStyle: {
                                                color: "rgb(40, 110, 210)",
                                                width: 3
                                            },
                                            color: "rgb(0, 191, 0)"
                                        }
                                    },
                                }
                            ],
                            // backgroundColor: "rgb(169, 214, 169)"
                        }

// 使用刚指定的配置项和数据显示图表。
myChart_co2.setOption(option_co2);