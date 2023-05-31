<template>
  <view class="my-settle-container">
    <label class="radio">
      <radio color="#ff0000" :checked="isFullChecked" @click="changeAllGoodsState(!isFullChecked)"><text>全选</text></radio>
    </label>

    <view class="amount-box"> 合计：<text class="amount">￥{{ checkedPrice }}</text> </view>

    <view class="btn-settle">结算({{ checkedCount }})</view>
  </view>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "my-settle",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("m_cart", ["checkedCount", "checkedPrice", "total"]),
	isFullChecked() {
		return this.total === this.checkedCount
	}
  },
  methods: {
	...mapMutations("m_cart", ["updateAllGoodsState"]),
	changeAllGoodsState(state) {
		this.updateAllGoodsState(state)
	}
  },
};
</script>

<style lang="scss">
.my-settle-container {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-left: 5px;

  .radio {
    display: flex;
    align-items: center;
  }

  .amount-box {
    .amount {
      color: #ff0000;
      font-weight: bolder;
    }
  }

  .btn-settle {
    background-color: #ff0000;
    height: 50px;
    color: #ffffff;
    line-height: 50px;
    padding: 0 10px;
    min-width: 100px;
    text-align: center;
	font-weight: bolder;
  }
}
</style>