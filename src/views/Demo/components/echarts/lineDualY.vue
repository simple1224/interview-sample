<template>
  <div class="line_dual_echart">
    <div id="chart" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
export default {
  name: "lineDualYChart",
  props: ["selectedName", "selectedId"],
  data() {
    return {
      flagInter: null,
      // 功率数据
      powerList: [
        {
          id: 1,
          data: [15, 20, 30, 60, 50, 91, 100, 30, 60, 20, 60, 30, 35.9],
        },
        {
          id: 2,
          data: [15, 20, 30, 60, 50, 91, 100, 30, 60, 20, 60, 30, 35.9],
        },
        {
          id: 3,
          data: [
            20, 50, 80, 30, 41, 52, 75, 12, 56, 88, 45, 23, 89, 45, 23, 78, 96,
            20,
          ],
        },
        {
          id: 4,
          data: [50, 20, 60, 100, 50, 30, 50, 10, 80, 50, 12, 52, 75, 88],
        },
        {
          id: 5,
          data: [15, 20, 30, 60, 50, 91, 100, 30, 60, 20, 60, 30, 35.9],
        },
        {
          id: 6,
          data: [15, 20, 30, 60, 50, 91, 100, 30, 60, 20, 60, 30, 35.9],
        },
        {
          id: 7,
          data: [15, 20, 30, 60, 50, 91, 100, 30, 60, 20, 60, 30, 35, 9],
        },
      ],
      // 发电量数据
      generatingCapacityList: [
        {
          id: 1,
          data: [50, 20, 60, 100, 50, 30, 50, 10, 80, 50, 12, 52, 75, 88],
        },
        {
          id: 2,
          data: [
            20, 50, 80, 30, 41, 52, 75, 12, 56, 88, 45, 23, 89, 45, 23, 78, 96,
            20,
          ],
        },
        {
          id: 3,
          data: [50, 20, 60, 100, 50, 30, 50, 10, 80, 50, 12, 52, 75, 88],
        },
        {
          id: 4,
          data: [15, 20, 30, 60, 50, 91, 100, 30, 60, 20, 60, 30, 35, 9],
        },
        {
          id: 5,
          data: [
            20, 50, 80, 30, 41, 52, 75, 12, 56, 88, 45, 23, 89, 45, 23, 78, 96,
            20,
          ],
        },
        {
          id: 6,
          data: [15, 20, 30, 60, 50, 91, 100, 30, 60, 20, 60, 30, 35, 49],
        },
        {
          id: 7,
          data: [15, 20, 30, 60, 50, 91, 56, 89, 8, 7, 60, 30, 89, 77],
        },
      ],
      options: {
        title: {
          top: "15%",
          left: "center",
          textStyle: {
            color: "#FFF",
            align: "center",
          },
        },
        grid: {
          left: "9%",
          right: "10%",
          top: "20%",
          bottom: "15%",
          containLabel: true,
        },
        tooltip: {
          show: true,
          trigger: "axis",
          formatter: function (params) {
            let str = params[0].name + "<br/>";
            params.forEach((item) => {
              if (item.seriesName == "功率") {
                str +=
                  item.marker +
                  item.seriesName +
                  ": " +
                  item.data +
                  "kw" +
                  "<br/>";
              } else if (item.seriesName == "发电量") {
                str += item.marker + item.seriesName + ": " + item.data + "kwh";
              }
            });
            return str;
          },
        },
        legend: {
          show: true,
          bottom: 0,
          x: "center",
          y: "0",
          top: "12%",
          icon: "stack",
          itemWidth: 16,
          itemHeight: 10,
          textStyle: {
            color: "#E0E0E0",
          },
          data: ["功率", "发电量"],
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              color: "#AFBCC4",
              fontSize: 12,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#397cbc",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#195384",
              },
            },
            data: [
              "00:00",
              "00:15",
              "00:30",
              "00:45",
              "01:00",
              "01:15",
              "01:30",
              "01:45",
              "02:00",
              "02:15",
              "02:30",
              "02:45",
              "03:00",
              "03:15",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "kw",
            nameLocation: "end", // 'start', 'end', 或 'middle'
            nameGap: 19, // 调整名称与轴线的间距
            nameTextStyle: {
              color: "#AFBCC4",
              fontSize: 12,
              align: "right", // 控制名称的对齐方式，可以设置为 'left' 或 'right'
            },
            axisLabel: {
              // formatter: '{value}',
              textStyle: {
                color: "#AFBCC4",
                fontSize: 12,
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#D4D4D8",
              },
            },
          },
          {
            type: "value",
            name: "发电量",
            name: "kwh",
            nameLocation: "end", // 'start', 'end', 或 'middle'
            nameGap: 19, // 调整名称与轴线的间距
            nameTextStyle: {
              color: "#AFBCC4",
              fontSize: 12,
              align: "left", // 控制名称的对齐方式，可以设置为 'left' 或 'right'
            },
            axisLabel: {
              formatter: "{value} %",
              textStyle: {
                color: "#AFBCC4",
                fontSize: 12,
              },
            },
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#11366e",
              },
            },
          },
        ],
        series: [
          {
            name: "功率",
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: "#00FFFF",
                lineStyle: {
                  color: "#00FFFF",
                  width: 1,
                },
              },
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: "red",
                },
              },
            },
            data: [],
          },
          {
            name: "发电量",
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#FF9000",
                lineStyle: {
                  color: "#FF9000",
                  width: 1,
                },
              },
            },
            data: [],
          },
        ],
      },
    };
  },
  watch: {
    selectedId(val, old) {
      this.updateData(val);
    },
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chart = this.$echarts.init(document.getElementById("chart"));
      chart.setOption(this.options);
    },
    updateData(id) {
      if (id == 0) {
        this.options.series[0].data = this.powerList[0];
        this.options.series[1].data = this.generatingCapacityList[0];
      } else {
        let arr1 = [];
        let arr2 = [];
        arr1 = this.powerList.filter((item) => {
          return item.id == id;
        });
        arr2 = this.generatingCapacityList.filter((item) => {
          return item.id == id;
        });
        this.options.series[0].data = arr1 && arr1.length ? arr1[0].data : {};
        this.options.series[1].data = arr2 && arr2.length ? arr2[0].data : {};
        this.initChart()
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.line_dual_echart {
  width: 70%;
  .title {
    font-size: 27px;
    float: left;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-left: 60px;
    .dataType {
      width: max-content;
      border: 1px solid #ccc;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      display: flex;
      span {
        display: block;
        padding: 5px;
        border-right: 1px solid #ccc;
        &:last-child {
          border: none;
        }
      }
      cursor: pointer;
      span.active {
        color: #409eff;
      }

      .tab-content {
        margin-top: 20px;
        padding: 10px;
        border: 1px solid #ddd;
      }
    }
  }
}
</style>
