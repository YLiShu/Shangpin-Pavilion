<template>
  <view
    class="my-search-container"
    :style="{ background: bgcolor }"
    @click="searchBoxHandler"
  >
    <view class="my-search-box" :style="{ 'border-radius': radius + 'px' }">
      <uni-icons type="search" size="17"></uni-icons>
      <text class="placeholder">搜索</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "my-search",
  props: {
    // 背景颜色
    bgcolor: {
      type: String,
      default: "#ff0000",
    },
    // 圆角尺寸
    radius: {
      type: Number,
      default: 18, //px
    },
  },
  data() {
    return {};
  },
  methods: {
    searchBoxHandler() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss">
.my-search-container {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

  .my-search-box {
    background: #ffffff;
    height: 36px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .placeholder {
      font-size: 15px;
      margin-left: 5px;
    }
  }
}
</style>