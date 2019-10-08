var dates = new Array();
//进行 ajax 异步提交
$.ajax({
    type:'get',
    url:'php/get_history_data.php?biao=hum_air',
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
            $("#mytb_hum_air").append(html);
            i++;
        }

        myChart_hum_air.setOption({ //加载数据图表
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



// 基于准备好的dom，初始化echarts实例
var myChart_hum_air = echarts.init(document.getElementById('main_hum_air'));

// 指定图表的配置项和数据
var option_hum_air = {
    title: {
                              text: "室内湿度",
                              textStyle: {
                                  color: "rgb(51, 53, 51)"
                              },
                              // backgroundColor: "rgb(186, 216, 186)"
                          },
                          tooltip: {
                              trigger: "axis"
                          },
                          legend: {
                              data: ["最高室内湿度", "最低室内湿度"]
                          },
                          toolbox: {
                              show: true,
                              feature: {
                                  dataView: {
                                      show: true,
                                      iconStyle: {
                                                borderColor: "rgb(153, 102, 255"
                                                },
                                      readOnly: true
                                  },
                                  magicType: {
                                      type: ["line", "bar"],
                                      show: false
                                  },
                                  restore: {
                                    iconStyle: {
                                                borderColor: "rgb(153, 102, 255"
                                                },
                                      show: true
                                  },
                                  saveAsImage: {
                                    iconStyle: {
                                                borderColor: "rgb(153, 102, 255"
                                                },
                                      show: true
                                  },
                                  dataZoom: {
                                    iconStyle: {
                                                borderColor: "rgb(153, 102, 255"
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
                                  name: "最高室内湿度",
                                  type: "line",
                                  data: [],
                                  itemStyle: {
                                      normal: {
                                          lineStyle: {
                                              color: "rgb(153, 102, 255)",
                                              width: 3
                                          },
                                          color: "rgb(110, 153, 224)"
                                      }
                                  },
                                  smooth: true
                              },
                              {
                                  type: "line",
                                  name: "最低室内湿度",
                                  data: [],
                                  itemStyle: {
                                      normal: {
                                          lineStyle: {
                                              color: "rgb(133, 158, 199)",
                                              width: 3
                                          },
                                          color: "rgb(133, 158, 199)"
                                      }
                                  },
                              }
                          ],
                          // backgroundColor: "rgb(169, 214, 169)"
                      }

// 使用刚指定的配置项和数据显示图表。
myChart_hum_air.setOption(option_hum_air);



