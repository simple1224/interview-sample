<!-- 光伏站统计图 -->
<template>
  <div class="echarts">
    <div class="header">
      <div class="title">功率及发电量</div>
      <div class="conditions">
        <div class="dataType">
          <span
            :class="{ active: activeTab === '时' }"
            @click="setActiveTab('时')"
          >
            时
          </span>
          <span
            :class="{ active: activeTab === '日' }"
            @click="setActiveTab('日')"
          >
            日
          </span>
          <span
            :class="{ active: activeTab === '月' }"
            @click="setActiveTab('月')"
          >
            月
          </span>
          <span
            :class="{ active: activeTab === '年' }"
            @click="setActiveTab('年')"
          >
            年
          </span>
          <span
            :class="{ active: activeTab === '生命周期' }"
            @click="setActiveTab('生命周期')"
          >
            生命周期
          </span>
        </div>
        <el-date-picker v-model="date" type="date" placeholder="选择日期">
        </el-date-picker>
      </div>
    </div>
    <div class="flex">
      <instrumentPanelEchart :selectedId="selectedId"> </instrumentPanelEchart>
      <lineDualYchart :selectedId="selectedId"> </lineDualYchart>
    </div>
  </div>
</template>
<script>
import lineDualYchart from "./echarts/lineDualY.vue";
import instrumentPanelEchart from "./echarts/instrumentPanel.vue";
export default {
  name: "solarPowerEchart",
  components: {
    lineDualYchart,
    instrumentPanelEchart,
  },
  props: ["selectedName", "selectedId"],
  data() {
    return {
      activeTab: "时",
      date: "",
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>
<style scoped lang="scss">
.echarts {
  width: 100%;
  .flex {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    .title {
      font-size: 27px;
    }
    .conditions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-right: 120px;
    }
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
