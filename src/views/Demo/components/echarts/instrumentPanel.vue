<!-- 仪表盘 -->
<template>
  <div class="echart_wrap">
    <div id="chart2" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "instrumentPanelChart",
  props: ["selectedName", "selectedId"],

  data() {
    return {
      flagInter: null,
      list: [
        {
          id: 1,
          value: 10,
        },{
          id: 2,
          value: 20,
        },{
          id: 3,
          value: 30,
        },{
          id: 4,
          value: 40,
        },{
          id: 5,
          value: 50,
        },{
          id: 6,
          value: 60,
        },{
          id: 7,
          value: 70,
        },
      ],
      options: {
        series: [
          {
            type: "gauge",
            name: "Pressure",
            radius: "100%",
            itemStyle: {
              color: "#58D9F9",
              shadowColor: "rgba(0,138,255,0.45)",
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2,
            },
            progress: {
              show: true,
              roundCap: true,
              width: 18,
            },
            pointer: {
              icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
              length: "75%",
              width: 16,
              offsetCenter: [0, "5%"],
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 18,
              },
            },
            axisTick: {
              splitNumber: 2,
              lineStyle: {
                width: 2,
                color: "#999",
              },
            },
            splitLine: {
              length: 12,
              lineStyle: {
                width: 3,
                color: "#999",
              },
            },
            axisLabel: {
              distance: 30,
              color: "#999",
              fontSize: 20,
            },
            title: {
              show: false,
            },
            detail: {
              show: false,
              backgroundColor: "#fff",
              borderColor: "#999",
              borderWidth: 2,
              width: "60%",
              lineHeight: 40,
              height: 40,
              borderRadius: 50,
              offsetCenter: [0, "35%"],
              valueAnimation: true,
              formatter: function (value) {
                return "{value|" + value.toFixed(0) + "}{unit|km/h}";
              },
              rich: {
                value: {
                  fontSize: 50,
                  fontWeight: "bolder",
                  color: "#777",
                },
                unit: {
                  fontSize: 20,
                  color: "#999",
                  padding: [0, 0, -20, 10],
                },
              },
            },
            data: [
              {
                value: 10,
              },
            ],
          },
          {
            type: "pie",
            radius: ["0", "40%"],
            center: ["50%", "50%"],
            z: 8,
            hoverAnimation: false,
            data: [
              {
                name: "实时功率",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "#ECF0F4",
                  },
                },
                label: {
                  normal: {
                    formatter: function (params) {
                      return params.value + "\n{power|实时功率}\n{unit|kw.h}";
                    },
                    rich: {
                      power: {
                        color: "gray",
                        fontSize: 16,
                      },
                      unit: {
                        color: "gray",
                        fontSize: 16,
                      },
                    },
                    color: "#333",
                    fontSize: 24,
                    fontWeight: "bold",
                    position: "center",
                    show: true,
                  },
                },
                labelLine: {
                  show: false,
                },
              },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    this.initChart();
  },
  watch: {
    selectedId(val, old) {
      this.updateData(val);
    },
  },
  methods: {
    initChart() {
      const chart = this.$echarts.init(document.getElementById("chart2"));
      chart.setOption(this.options);
    },
    updateData(id) {
      if (id == 0) {
        this.options.series[0].data[0].value = this.list[0].value;
        this.options.series[1].data[0].value = this.list[0].value;
      } else {
        let arr = [];
        arr = this.list.filter((item) => {
          return item.id == id;
        });
        this.options.series[0].data[0].value = arr && arr.length ? arr[0].value : {};
        this.options.series[1].data[0].value = arr && arr.length ? arr[0].value : {};
        this.initChart();
      }
    },
  },
};
</script>
<style>
.echart_wrap {
  width: 30%;
}
</style>
