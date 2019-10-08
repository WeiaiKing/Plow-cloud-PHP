//<!--ajax定时刷新获取首页表格数据——开始-->

var getting = {
    type:'get',
    url:'php/get_data_index_biaoge.php?biao=hum_air',
    dataType:'json',
    async:false,

    success:function(res) {

        console.log(res);
        // res = String(res['tem_air']);

        myChart_index_hum_air.setOption({ //加载数据图表
            xAxis: {
                data: res["hours"]
            },
            series: [{

                data: res["datas"],
            }
            ]

        });
    }

};



//<!--ajax定时刷新获取首页表格数据——结束-->



//图表实例化  script标签引入
var myChart_index_hum_air = echarts.init(document.getElementById('main_hum_air'));
var option_index_hum_air = {
    title: {
        text: "室内温度",
        textStyle: {
            color: "rgb(232, 232, 232)"
        },
        backgroundColor: "rgb(65, 92, 112)"
    },
    legend: {
        data: ["室内温度"],
        textStyle: {
            color: "rgb(242, 234, 234)"
        }
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                iconStyle: {
                    borderColor: "rgb(255, 99, 132)"
                },
                readOnly: true
            },
            magicType: {
                type: ["line", "bar"],
                iconStyle: {
                    borderColor: "rgb(255, 99, 132)"
                },
                show: true
            },
            restore: {
                show: false
            },
            saveAsImage: {
                iconStyle: {
                    borderColor: "rgb(255, 99, 132)"
                },
                show: true
            },
            dataZoom: {
                show: false
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
            axisLine:{
                show:false,
                lineStyle:{
                    color:'rgb(255,255,255)',
                    width:1
                }
            },
            boundaryGap: false,
            data: [],
            axisTick: {
                length: 5,
                interval: 0
            },
            splitNumber: 51,

            nameTextStyle: {
                color: "rgb(232, 232, 232)"
            }
        }
    ],
    yAxis: [
        {
            type: "value",

            axisLine:{
                lineStyle:{
                    color:'rgb(255,255,255)',
                    width:2
                }
            },
            name: "土壤湿度",
            nameLocation: "end"
        }
    ],
    series: [
        {
            name: "土壤湿度",
            type: "line",
            // symbol:"none",
            data: [],
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: "rgb(255, 99, 132)",
                        width: 3
                    },
                    label: {
                        show: false,
                        textStyle: {
                            color: "rgb(255, 99, 132)"
                        }
                    }
                }
            },
            smooth: true
        }
    ],
    // backgroundColor: "rgb(67, 92, 112)",
    color: ["#ff6384", "#87cefa", "#da70d6", "#32cd32", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "#ffd700", "#6699FF", "#ff6666", "#FFFFFF"],
    tooltip: {
        trigger: "axis"
    }
}
// 使用刚指定的配置项和数据显示图表。
myChart_index_hum_air.setOption(option_index_hum_air);



//<!--ajax定时刷新获取首页表格数据——开始-->

var getting = {
    type:'get',
    url:'php/get_data_index_biaoge.php?biao=tem_air',
    dataType:'json',
    async:false,

    success:function(res) {

        console.log(res);
        // res = String(res['tem_air']);

        myChart_index_tem_air.setOption({ //加载数据图表
            xAxis: {
                data: res["hours"]
            },
            series: [{

                data: res["datas"],
            }
            ]

        });
    }

};

// //关键在这里，Ajax定时访问服务端，不断获取数据 ，这里是10秒请求一次。
// $("#my_data_center").click(function(){$.ajax(getting)});
// window.setInterval(function(){$.ajax(getting)},10000);

//<!--ajax定时刷新获取首页表格数据——结束-->



//图表实例化  script标签引入
var myChart_index_tem_air = echarts.init(document.getElementById('main_tem_air'));
var option_index_tem_air = {
    title: {
        text: "室内温度",
        textStyle: {
            color: "rgb(232, 232, 232)"
        },
        backgroundColor: "rgb(65, 92, 112)"
    },
    legend: {
        data: ["室内温度"],
        textStyle: {
            color: "rgb(242, 234, 234)"
        }
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                iconStyle: {
                    borderColor: "rgb(255, 99, 132)"
                },
                readOnly: true
            },
            magicType: {
                type: ["line", "bar"],
                iconStyle: {
                    borderColor: "rgb(255, 99, 132)"
                },
                show: true
            },
            restore: {
                show: false
            },
            saveAsImage: {
                iconStyle: {
                    borderColor: "rgb(255, 99, 132)"
                },
                show: true
            },
            dataZoom: {
                show: false
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
            axisLine:{
                show:false,
                lineStyle:{
                    color:'rgb(255,255,255)',
                    width:1
                }
            },
            boundaryGap: false,
            data: [],
            axisTick: {
                length: 5,
                interval: 0
            },
            splitNumber: 51,

            nameTextStyle: {
                color: "rgb(232, 232, 232)"
            }
        }
    ],
    yAxis: [
        {
            type: "value",

            axisLine:{
                lineStyle:{
                    color:'rgb(255,255,255)',
                    width:2
                }
            },
            name: "室内温度",
            nameLocation: "end"
        }
    ],
    series: [
        {
            name: "室内温度",
            type: "line",
            // symbol:"none",
            data: [],
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: "rgb(255, 99, 132)",
                        width: 3
                    },
                    label: {
                        show: false,
                        textStyle: {
                            color: "rgb(255, 99, 132)"
                        }
                    }
                }
            },
            smooth: true
        }
    ],
    // backgroundColor: "rgb(67, 92, 112)",
    color: ["#ff6384", "#87cefa", "#da70d6", "#32cd32", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "#ffd700", "#6699FF", "#ff6666", "#FFFFFF"],
    tooltip: {
        trigger: "axis"
    }
}
// 使用刚指定的配置项和数据显示图表。
myChart_index_tem_air.setOption(option_index_tem_air);



//关键在这里，Ajax定时访问服务端，不断获取数据 ，这里是10秒请求一次。

window.setInterval(function(){$.ajax(getting)},10000);

