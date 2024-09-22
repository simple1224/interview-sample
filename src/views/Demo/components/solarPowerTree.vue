<!-- 光伏站列表树 -->
<template>
  <div class="solar_power_tree">
    <el-input placeholder="输入关键字进行过滤" v-model="filterText"> </el-input>
    <el-tree
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="tree"
      @node-click="handleNodeClick"
    >
    </el-tree>
  </div>
</template>

<script>
export default {
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  created() {
    this.$emit("updateId", { id: 1, label: "光伏逆变器1" });
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleNodeClick(data) {
      console.log(data);
      if (data.id === 0) {
        return;
      }
      this.$emit("updateId", data);
    },
  },

  data() {
    return {
      filterText: "",
      data: [
        {
          id: 0,
          label: "一级 1",
          children: [
            {
              id: 1,
              label: "光伏逆变器1",
            },
            {
              id: 2,
              label: "光伏逆变器2",
            },
            {
              id: 3,
              label: "光伏逆变器3",
            },
            {
              id: 4,
              label: "光伏逆变器4",
            },
            {
              id: 5,
              label: "光伏逆变器5",
            },
            {
              id: 6,
              label: "光伏逆变器6",
            },
            {
              id: 7,
              label: "光伏逆变器7",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
};
</script>
<style>
.solar_power_tree {
  height: 100%;
  background: #fff;
}
</style>
