<template>
  <view class="my-settle-container">
    <label class="radio">
      <radio
        color="#ff0000"
        :checked="isFullChecked"
        @click="changeAllGoodsState(!isFullChecked)"
        ><text>全选</text></radio
      >
    </label>

    <view class="amount-box">
      合计：<text class="amount">￥{{ checkedPrice }}</text>
    </view>

    <view class="btn-settle" @click="settlement">结算({{ checkedCount }})</view>
  </view>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "my-settle",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("m_cart", ["checkedCount", "checkedPrice", "total"]),
    ...mapGetters("m_user", ["addressStr"]),
    ...mapState("m_user", ["token"]),
    ...mapState("m_cart", ["cart"]),
    isFullChecked() {
      return this.total === this.checkedCount;
    },
  },
  methods: {
    ...mapMutations("m_cart", ["updateAllGoodsState"]),
    ...mapMutations("m_user", ["updateRedirectInfo"]),
    changeAllGoodsState(state) {
      this.updateAllGoodsState(state);
    },
    settlement() {
      if (!this.token) return this.showTips()
      if (!this.checkedCount) return uni.$showMsg("请选择要结算的商品！");
      if (!this.addressStr) return uni.$showMsg("请选择收货地址");

      this.payOrder()
    },
    async showTips() {
      const res = await uni
        .showModal({
          title: "请先登录",
          content: "是否跳转到登录界面？",
        })
        .catch((err) => err);

      if (res.confirm) {
        uni.switchTab({
           url: '/pages/my/my',
           success: () => {
            this.updateRedirectInfo({
              openType: 'switchTab',
              from: '/pages/cart/cart'
            })
           }
        })
      }
    },
    // 微信支付
    async payOrder() {
      // 创建订单
      // 1.1组织订单的信息对象
      const orderInfo = {
        // order_price: this.checkedPrice,
        order_price: 0.01,
        consignee_addr: this.addressStr,
        goods: this.cart.filter(x => x.goods_state).map(x => ({ goods_id: x.goods_id, goods_number: x.goods_count, goods_price: x.goods_price }))
      }

      // 1.2 发起请求创建订单
      const {data: res} = await uni.$http.post('/api/public/v1/my/orders/create', orderInfo)
      if (res.meta.status !== 200) return uni.$showMsg('创建订单失败！')

      // 1.3 的到服务器响应的“订单号”
      const orderNumber = res.message.order_number

      // 2. 订单预支付
      // 2.1 发起请求获取订单的支付信息
      const {data: res2} = await uni.$http.post('/api/public/v1/my/orders/req_unifiedorder', {
        order_number: orderNumber
      })

      // 2.2 预支付订单生成失败
      if (res2.meta.status !== 200) return uni.$showMsg('预支付订单生成失败！')

      // 2.3 得到订单支付相关的必要参数
      const payInfo = res2.message.pay

      // 3. 发起微信支付
      // 3.1 调用 uni.requestPayment() 发起微信支付
      // const [err, succ] = await uni.requestPayment(payInfo)
      // if (err) return uni.$showMsg('订单未支付！')
      
      // 3.3 完成了支付
      const {data: res3} = await uni.$http.post('/api/public/v1/my/orders/chkOrder', {
        order_number: orderNumber
      })

      // 3.4 检测到订单未支付
      if (res3.meta.status !== 200) return uni.$showMsg('订单未支付！')

      // 3.5 检测到订单支付完成
      uni.showToast({
        title: '支付完成！',
        icon: 'success'
      })
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