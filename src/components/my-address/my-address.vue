<template>
  <view>
    <!-- 选择收货地址的盒子 -->
    <view class="address-choose-box" v-if="!Object.keys(address).length">
      <button type="primary" size="mini" @click="selectAddress">
        请选择收货地址+
      </button>
    </view>

    <!-- 收货信息的盒子 -->
    <view class="address-info-box" @click="selectAddress" v-else>
      <view class="row1">
        <view class="row1-left">
          <view class="username">收货人：{{ address.userName }}</view>
        </view>
        <view class="row1-right">
          <view class="phone">电话：{{ address.telNumber }}</view>
          <uni-icons type="arrowright" size="16" />
        </view>
      </view>
      <view class="row2">
        <view class="row2-left">收货地址：</view>
        <view class="row2-right">{{ addressStr }}</view>
      </view>
    </view>

    <!-- 底部边框线 -->
    <image src="/static/cart_border@2x.png" class="address-border"></image>
  </view>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
export default {
  name: "my-address",
  data() {
    return {
    };
  },
  computed: {
	...mapState('m_user', ['address']),
	...mapGetters('m_user', ['addressStr'])
  },
  methods: {
	...mapMutations('m_user', ['updateAddress']),
    async selectAddress() {
      // 1.调用小程序提供的 chooseAddress() 方法，即可使用选择收货地址的功能
      // 返回值是一个数组，第一项为错误对象，第二项为成功后的收货地址对象
      const res = await uni.chooseAddress().catch(err => err);

      //   2.用户成功选择了收货地址
      if (res.errMsg === "chooseAddress:ok") {
		this.updateAddress(res)
      }
    },
  },
};
</script>

<style lang="scss">
.address-border {
  display: block;
  height: 5px;
  width: 100%;
}

.address-choose-box {
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.address-info-box {
  font-size: 12px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5px;

  .row1 {
    display: flex;
    justify-content: space-between;

    .row1-right {
      display: flex;
      justify-content: space-between;
    }
  }

  .row2 {
    display: flex;
    align-items: center;
    margin-top: 10px;

    .row2-left {
      white-space: nowrap;
    }
  }
}
</style>
