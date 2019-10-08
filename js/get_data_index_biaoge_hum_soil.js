//<!--ajax定时刷新获取首页表格数据——开始-->

var getting_hum_soil = {
    type:'get',
    url:'php/get_data_index_biaoge.php?biao=hum_soil',
    dataType:'json',


    success:function(res) {

        console.log(res);
        // res = String(res['tem_air']);

        myChart_index_hum_soil.setOption({ //加载数据图表
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

//关键在这里，Ajax定时访问服务端，不断获取数据 ，这里是10秒请求一次。

window.setInterval(function(){$.ajax(getting_hum_soil)},10000);

//<!--ajax定时刷新获取首页表格数据——结束-->



//图表实例化  script标签引入
var myChart_index_hum_soil = echarts.init(document.getElementById('main_hum_soil'));
var option_index_hum_soil = {
    title: {
                                        // text: "土壤湿度",
                                        textStyle: {
                                            color: "rgb(232, 232, 232)"
                                        },
                                        backgroundColor: "rgb(65, 92, 112)"
                                    },
                                    legend: {
                                        data: ["土壤湿度"],
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
                                                borderColor: "rgb(75, 192, 192)"
                                                },
                                                readOnly: true
                                            },
                                            magicType: {
                                                type: ["line", "bar"],
                                                iconStyle: {
                                                borderColor: "rgb(75, 192, 192)"
                                                },
                                                show: true
                                            },
                                            restore: {
                                                show: false
                                            },
                                            saveAsImage: {
                                                iconStyle: {
                                                borderColor: "rgb(75, 192, 192)"
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
                                            // splitLine: {
                                            //     show: true,

                                            // },
                                            nameTextStyle: {
                                                color: "rgb(232, 232, 232)"
                                            }
                                        }
                                    ],
                                    yAxis: [
                                        {
                                            type: "value",
                                            // splitLine:{
                                            //  show:true
                                            // },
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
                                                        color: "rgb(75, 192, 192)",
                                                        width: 3
                                                    },
                                                    label: {
                                                        show: false,
                                                        textStyle: {
                                                            color: "rgb(75, 192, 192)"
                                                        }
                                                    }
                                                }
                                            },
                                            smooth: true
                                        }
                                    ],
                                    // backgroundColor: "rgb(67, 92, 112)",
                                    color: ["#4bc0c0", "#87cefa", "#da70d6", "#32cd32", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "#ffd700", "#6699FF", "#ff6666", "#FFFFFF"],
                                    tooltip: {
                                        trigger: "axis"
                                    }
                                }
// 使用刚指定的配置项和数据显示图表。
myChart_index_hum_soil.setOption(option_index_hum_soil);

