<template>
  <div class="layout_wrap">
    <!-- 页面左侧光伏站树 -->
    <div class="layout-left">
      <solarPowerTree
        :selectedId="selectedId"
        @updateId="updateSelectedId"
      ></solarPowerTree>
    </div>
    <!-- 页面右侧 -->
    <div class="layout-right">
      <!-- 光伏站信息 -->
      <div class="solar_power_info">
        <solarPowerInformation :selectedName="selectedName" :selectedId="selectedId"></solarPowerInformation>
      </div>
      <div class="flex_column">
        <!-- 光伏站图 -->
        <div class="solar_power_echart">
          <solarPowerEchart :selectedName="selectedName" :selectedId="selectedId"></solarPowerEchart>
        </div>
        <!-- 光伏站统计表 -->
        <div class="solar_power_form">
          <solarPowerForm :selectedName="selectedName" :selectedId="selectedId"></solarPowerForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import solarPowerTree from "./components/solarPowerTree.vue";
import solarPowerInformation from "./components/solarPowerInformation.vue";
import solarPowerForm from "./components/solarPowerForm.vue";
import solarPowerEchart from "./components/solarPowerEchart.vue";

export default {
  name: "demo",
  components: {
    solarPowerTree,
    solarPowerForm,
    solarPowerEchart,
    solarPowerInformation,
  },
  data() {
    return {
      selectedId: '',
      selectedName: '光伏逆变器1'
    };
  },
  created() {
    console.log();
  },
  methods: {
    updateSelectedId(data) {
      this.selectedId = data.id; // 从子组件接收 ID
      this.selectedName = data.label;
    },
  },
};
</script>
<style lang="scss">
.layout_wrap {
  width: 100%;
  height: calc(100vh - 100px);
  overflow: hidden;
  background-color: #fff;
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 24px;
  padding: 15px;
  box-sizing: border-box;
  .layout-left {
    width: 20%;
    height: 100%;
  }
  .layout-right {
    width: 80%;
    height: 100%;
    background-color: #fff;
    display: flex;
    gap: 24px;
    .flex_column {
      display: flex;
      flex-direction: column;
      width: 80%;
      gap: 10px;
    }
    .solar_power_info {
      width: 20%;
    }
    .solar_power_info,
    .solar_power_echart,
    .solar_power_form {
      padding: 10px;
      display: flex;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
  }
}
</style>
