//<!--ajax定时刷新获取首页表格数据——开始-->

var getting_co2 = {
    type:'get',
    url:'php/get_data_index_biaoge.php?biao=co2',
    dataType:'json',


    success:function(res) {

        console.log(res);
        // res = String(res['tem_air']);

        myChart_index_co2.setOption({ //加载数据图表
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

window.setInterval(function(){$.ajax(getting_co2)},10000);

//<!--ajax定时刷新获取首页表格数据——结束-->



//图表实例化  script标签引入
var myChart_index_co2 = echarts.init(document.getElementById('main_co2'));
var option_index_co2 = {
    title: {
                                    // text: "二氧化碳浓度",
                                    textStyle: {
                                        color: "rgb(232, 232, 232)"
                                    },
                                    backgroundColor: "rgb(65, 92, 112)"
                                },
                                legend: {
                                    data: ["CO2浓度"],
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
                                                borderColor: "rgb(56, 137, 252)"
                                                },
                                            readOnly: true
                                        },
                                        magicType: {
                                            type: ["line", "bar"],
                                            iconStyle: {
                                                borderColor: "rgb(56, 137, 252)"
                                                },
                                            show: true
                                        },
                                        restore: {
                                            show: false
                                        },
                                        saveAsImage: {
                                            iconStyle: {
                                                borderColor: "rgb(56, 137, 252)"
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
                                        // splitLine:{
                                        //  show:true
                                        // },
                                        splitLine: {
                                            show: true,
                                                lineStyle:{
                                                   // color: ['#315070'],
                                                   color: 'rgb(0,0,0)',
                                                   width: 1,
                                                   type: 'solid'}
                                                    },
                                        axisLine:{  
                                                lineStyle:{  
                                                    color:'rgb(255,255,255)',  
                                                    width:2  
                                                }  
                                            },  
                                        name: "CO2浓度",
                                        nameLocation: "end"
                                    }
                                ],
                                series: [
                                    {
                                        name: "CO2浓度",
                                        type: "line",
                                        // symbol:"none",
                                        data: [],
                                        itemStyle: {
                                            normal: {
                                                lineStyle: {
                                                    color: "rgb(56, 137, 252)",
                                                    width: 3
                                                },
                                                label: {
                                                    show: false,
                                                    textStyle: {
                                                        color: "rgb(0, 240, 244)"
                                                    }
                                                }
                                            }
                                        },
                                        smooth: true
                                    }
                                ],
                                backgroundColor: "rgb(67, 92, 112)",
                                color: ["#3889fc", "#87cefa", "#da70d6", "#32cd32", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "#ffd700", "#6699FF", "#ff6666", "#FFFFFF"],
                                tooltip: {
                                    trigger: "axis"
                                }
                            }
// 使用刚指定的配置项和数据显示图表。
myChart_index_co2.setOption(option_index_co2);

