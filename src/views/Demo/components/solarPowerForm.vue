<!-- 光伏站统计表 -->
<template>
  <div class="statistical_table">
    <div class="header">
      <div class="title">运行参数</div>
      <div class="details">
        <p>数据更新时间：2024/02/02 16:45:22</p>
        <div class="dataType">
          <span
            :class="{ active: activeTab === '实时数据' }"
            @click="setActiveTab('实时数据')"
          >
            实时数据
          </span>
          <span
            :class="{ active2: activeTab === '历史趋势' }"
            @click="setActiveTab('历史趋势')"
          >
            历史趋势
          </span>
        </div>
      </div>
    </div>
    
    <!-- 实时数据 -->
    <div class="forms" v-if="activeTab === '实时数据'">
      <div class="dc_output_wrap">
        <div class="header">
          <div class="title">
            <i></i>
            <span>直流输入</span>
          </div>
          <div class="dataType">
            <span
              :class="{ active: activeTab2 === 'PV' }"
              @click="setActiveTab2('PV')"
            >
              MV
            </span>
            <span
              :class="{ active: activeTab2 === 'MPPT' }"
              @click="setActiveTab2('MPPT')"
            >
              MPPT
            </span>
          </div>
        </div>
        <el-table
          class="dc_output"
          :data="tableData"
          border
          height="450"
          show-summary
          style="width: 100%"
        >
          <el-table-column prop="id" label="ID" width="180"> </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="amount1" sortable label="数值 1">
          </el-table-column>
          <el-table-column prop="amount2" sortable label="数值 2">
          </el-table-column>
          <el-table-column prop="amount3" sortable label="数值 3">
          </el-table-column>
        </el-table>
      </div>
      <div class="ac_output_wrap">
        <div class="title">
          <i></i>
          <span>交流输出</span>
        </div>
        <el-table
          class="ac_output"
          :data="tableData"
          border
          height="450"
          :summary-method="getSummaries"
          show-summary
          style="width: 100%"
        >
          <el-table-column prop="id" label="ID" width="180"> </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="amount1" label="数值 1（元）">
          </el-table-column>
          <el-table-column prop="amount2" label="数值 2（元）">
          </el-table-column>
          <el-table-column prop="amount3" label="数值 3（元）">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 历史趋势 -->
    <div class="forms" v-if="activeTab === '历史趋势'">
      <div class="dc_output_wrap">
        <div class="header">
          <div class="title">
            <i></i>
            <span>直流输入</span>
          </div>
          <div class="dataType">
            <span
              :class="{ active: activeTab2 === 'PV' }"
              @click="setActiveTab2('PV')"
            >
              MV
            </span>
            <span
              :class="{ active: activeTab2 === 'MPPT' }"
              @click="setActiveTab2('MPPT')"
            >
              MPPT
            </span>
          </div>
        </div>
        <el-table
          class="dc_output"
          :data="tableData"
          border
          height="450"
          show-summary
          style="width: 100%"
        >
          <el-table-column prop="id" label="ID" width="180"> </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="amount1" sortable label="历史趋势1">
          </el-table-column>
          <el-table-column prop="amount2" sortable label="历史趋势2">
          </el-table-column>
          <el-table-column prop="amount3" sortable label="历史趋势3">
          </el-table-column>
        </el-table>
      </div>
      <div class="ac_output_wrap">
        <div class="title">
          <i></i>
          <span>交流输出</span>
        </div>
        <el-table
          class="ac_output"
          :data="tableData"
          border
          height="450"
          :summary-method="getSummaries"
          show-summary
          style="width: 100%"
        >
          <el-table-column prop="id" label="ID" width="180"> </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="amount1" label="历史趋势1（元）">
          </el-table-column>
          <el-table-column prop="amount2" label="历史趋势2（元）">
          </el-table-column>
          <el-table-column prop="amount3" label="历史趋势3（元）">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedName", "selectedId"],
  data() {
    return {
      activeTab: "实时数据", // 默认选中的 Tab
      activeTab2: "PV", // 默认选中的 Tab
      tableData: [],
      list: [
        {
          id: 1,
          data: [
            {
              id: "12987122",
              name: "王小虎",
              amount1: "234",
              amount2: "3.2",
              amount3: 10,
            },
            {
              id: "12987123",
              name: "王小虎",
              amount1: "165",
              amount2: "4.43",
              amount3: 12,
            },
            {
              id: "12987124",
              name: "王小虎",
              amount1: "324",
              amount2: "1.9",
              amount3: 9,
            },
            {
              id: "12987125",
              name: "王小虎",
              amount1: "621",
              amount2: "2.2",
              amount3: 17,
            },
            {
              id: "12987126",
              name: "王小虎",
              amount1: "539",
              amount2: "4.1",
              amount3: 15,
            },
            {
              id: "12987127",
              name: "王小虎",
              amount1: "234",
              amount2: "3.2",
              amount3: 10,
            },
            {
              id: "12987128",
              name: "王小虎",
              amount1: "165",
              amount2: "4.43",
              amount3: 12,
            },
            {
              id: "12987129",
              name: "王小虎",
              amount1: "324",
              amount2: "1.9",
              amount3: 9,
            },
            {
              id: "12987130",
              name: "王小虎",
              amount1: "621",
              amount2: "2.2",
              amount3: 17,
            },
            {
              id: "12987131",
              name: "王小虎",
              amount1: "539",
              amount2: "4.1",
              amount3: 15,
            },
          ],
        },
        {
          id: 2,
          data: [
            {
              id: "1111111",
              name: "李小虎",
              amount1: "23",
              amount2: "1.1",
              amount3: 10,
            },
            {
              id: "222222",
              name: "李小虎",
              amount1: "125",
              amount2: "4.1",
              amount3: 25,
            },
            {
              id: "333333",
              name: "王小虎",
              amount1: "555",
              amount2: "0.5",
              amount3: 44,
            },
            {
              id: "444444",
              name: "李小虎",
              amount1: "585",
              amount2: "0.3",
              amount3: 88,
            },
            {
              id: "555555",
              name: "李小虎",
              amount1: "44",
              amount2: "4",
              amount3: 10,
            },
            {
              id: "666666",
              name: "李小虎",
              amount1: "555",
              amount2: "0.88",
              amount3: 52,
            },
            {
              id: "7777777",
              name: "李小虎",
              amount1: "165",
              amount2: "4.43",
              amount3: 12,
            },
            {
              id: "888888",
              name: "李小虎",
              amount1: "324",
              amount2: "1.9",
              amount3: 9,
            },
            {
              id: "99999999",
              name: "李小虎",
              amount1: "621",
              amount2: "2.2",
              amount3: 17,
            },
            {
              id: "000000000",
              name: "李小虎",
              amount1: "539",
              amount2: "4.1",
              amount3: 15,
            },
          ],
        },
      ],
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab; // 切换选中的 Tab
    },
    setActiveTab2(tab) {
      this.activeTab2 = tab; // 切换选中的 Tab
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];

      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        // 提取该列的数值并转换为数字
        const values = data.map((item) => Number(item[column.property]));
        // 检查是否所有值都是有效的数字
        if (values.every((value) => !isNaN(value))) {
          // 计算总和
          const total = values.reduce((prev, curr) => {
            const value = Number(curr);
            return !isNaN(value) ? prev + value : prev;
          }, 0);
          // 将总和格式化为两位小数并加上单位
          sums[index] = `${total.toFixed(2)} 元`;
        } else {
          sums[index] = "N/A";
        }
      });

      return sums;
    },
    updateData(id) {
      if (id == 0) {
        this.tableData = this.list[0].data;
      } else {
        let arr = [];
        arr = this.list.filter((item) => {
          return item.id == id;
        });
        this.tableData = arr && arr.length ? arr[0].data : this.list[0].data;
      }
    },
  },
  watch: {
    selectedId(val, old) {
      this.updateData(val);
    },
  },
};
</script>
<style lang="scss" scoped>
.statistical_table {
  width: 100%;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    .title {
      font-size: 27px;
      margin-bottom: 0;
    }
    .dataType,
    .details {
      display: flex;
      align-items: baseline;
      p {
        color: #ccc;
        font-size: 16px;
      }
    }
    .dataType {
      margin-left: 10px;
      color: #ccc;
      span {
        display: block;
        border: 1px solid #ccc;
        padding: 5px;
        &:first-child {
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          border-right: none;
        }
        &:last-child {
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
          border-left: none;
        }
      }
      display: flex;
      cursor: pointer;
      span.active,
      span.active2 {
        color: #333;
        border-color: #333;
      }
      span.active {
        border-right: 1px solid #333;
      }
      span.active2 {
        border-left: 1px solid #333;
      }

      .tab-content {
        margin-top: 20px;
        padding: 10px;
        border: 1px solid #ddd;
      }
    }
  }
  .forms {
    display: flex;
    justify-content: start;
    gap: 10px;
    .el-table {
      height: 100%;
      flex: 1;
    }
    .dc_output_wrap,
    .ac_output_wrap {
      width: 100%;
      .title {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 20px;
        i {
          display: inline-block;
          width: 26px;
          height: 26px;
          background-image: url(../../../assets/pic5.png);
          background-size: cover;
        }
      }
    }
    .dc_output_wrap {
      i {
        background-image: url(../../../assets/pic4.png) !important;
      }
      .dataType {
        margin-left: 10px;
        color: #ccc;
        font-size: 12px;
        span {
          display: block;
          border: 1px solid #ccc;
          padding: 5px;
          &:first-child {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
          }
          &:last-child {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
          }
        }
        display: flex;
        cursor: pointer;
        span.active {
          background-color: #ccc;
        }
      }
    }
  }
}
</style>
