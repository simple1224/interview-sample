<!-- 光伏信息页面 -->
<template>
  <div class="introduce">
    <div class="title">
      <div class="flex-column">
        <span class="text">{{ selectedName }}</span>
        <span class="desc">回路：{{ resultData.desc }}</span>
      </div>
      <div class="state"><i></i>{{ resultData.state | stateType }}</div>
    </div>
    <div class="picture">
      <img alt="编组" src="../../../assets/pic1.png" />
    </div>
    <div class="statistics_wrap">
      <div class="flex">
        <div class="name">
          <img src="" alt="" />
          <span>总发电量（kw-h）</span>
        </div>
        <div class="number">{{ resultData.value1 }}</div>
      </div>
      <div class="flex">
        <div class="name">
          <img src="" alt="" />
          <span>总发电量（kw-h）</span>
        </div>
        <div class="number">{{ resultData.value2 }}</div>
      </div>
      <div class="flex">
        <div class="name">
          <img src="" alt="" />
          <span>总发电量（kw-h）</span>
        </div>
        <div class="number">{{ resultData.value3 }}</div>
      </div>
    </div>
    <div class="info">
      <div class="title">基本信息</div>
      <div class="flex">
        <p>设备名称</p>
        <p>XXXX{{ selectedId }}</p>
      </div>
      <div class="flex">
        <p>设备名称</p>
        <p>XXXX{{ selectedId }}</p>
      </div>
      <div class="flex">
        <p>设备名称</p>
        <p>XXXX{{ selectedId }}</p>
      </div>
      <div class="flex">
        <p>设备名称</p>
        <p>XXXX{{ selectedId }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedName", "selectedId"],
  data() {
    return {
      resultData: {},
      list: [
        {
          id: 1,
          desc: "1#型壳/1#威斯",
          state: 1,
          value1: 9087,
          value2: 6900,
          value3: 2009,
        },
        {
          id: 2,
          desc: "2#型壳/2#威斯",
          state: 0,
          value1: 444,
          value2: 8789,
          value3: 8989,
        },
        {
          id: 3,
          desc: "3#型壳/3#威斯",
          state: 1,
          value1: 33,
          value2: 4454,
          value3: 6677,
        },
        {
          id: 4,
          desc: "4#型壳/4#威斯",
          state: 0,
          value1: 3434,
          value2: 6767,
          value3: 3333,
        },
        {
          id: 5,
          desc: "5#型壳/5#威斯",
          state: 1,
          value1: 4545,
          value2: 767,
          value3: 9898,
        },
        {
          id: 6,
          desc: "6#型壳/6#威斯",
          state: 1,
          value1: 4545,
          value2: 767,
          value3: 9898,
        },
        {
          id: 7,
          desc: "7#型壳/7#威斯",
          state: 1,
          value1: 4545,
          value2: 767,
          value3: 9898,
        },
      ],
    };
  },
  filters: {
    stateType(s) {
      let str;
      switch (s) {
        case 0:
          str = "失败";
          break;
        case 1:
          str = "正常";
          break;
      }
      return str;
    },
  },
  watch: {
    selectedId(val, old) {
      this.updateData(val);
    },
  },
  methods: {
    updateData(id) {
      if (id == 0) {
        this.resultData = this.list[0];
      } else {
        let arr = [];
        arr = this.list.filter((item) => {
          return item.id == id;
        });
        this.resultData = arr && arr.length ? arr[0] : {};
      }
    },
  },
};
</script>
<style lang="scss">
.introduce {
  width: 100%;
  height: 100%;
  font-size: 16px;
  .title {
    display: flex;
    align-items: start;
    justify-content: space-between;
    font-size: 24px;
    .flex-column {
      display: flex;
      flex-direction: column;

      .text {
        font-size: 24px;
        font-weight: 700;
      }
      .desc {
        margin-top: 8px;
        font-size: 12px;
        color: #ccc;
      }
    }
    .state {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      i {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-image: url(../../../assets/state.png);
        background-size: cover;
      }
      width: 80px;
      background: #e5fbf9;
      color: #62e5d8;
      font-size: 14px;
      margin: 0 auto;
      border-radius: 25px;
      padding: 8px;
    }
  }

  .picture {
    width: 200px;
    height: 200;
    margin: 0 auto;
    img {
      height: 200px;
      display: block; /* 确保是 block 或 inline-block */
      max-width: 100%; /* 确保适应容器 */
    }
  }

  .statistics_wrap {
    .flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .name {
      color: #666;
      font-size: 16px;
    }
    .number {
      font-weight: 700;
      font-size: 24px;
    }
  }

  .info {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 13px;
      right: 0;
      width: 100%;
      height: 1px;
      background-color: #dcdcdc;
    }
    .title {
      padding: 33px 0 13px 0;
      font-size: 24px;
      font-weight: 700;
      margin: 0;
    }
    .flex {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 16px;
      p {
        &:first-child {
          color: #ccc;
          margin-right: 10px;
        }
        &:last-child {
          color: #333;
        }
      }
    }
  }
}
</style>
