<template>
  <view class="cart-container" v-if="cart.length !== 0">
    <!-- 收货地址组件 -->
    <my-address></my-address>

    <view class="cart-title">
      <uni-icons type="shop" size="18"></uni-icons>
      <text class="cart-title-text">购物车</text>
    </view>

    <!-- uni-swipe-action 是最外层包裹性质容器 -->
    <uni-swipe-action>
      <block v-for="(goods, i) in cart" :key="i">
        <!-- uni-swipe-action-itme 可以为其字节点提供滑动操作的效果。需要通过options属性指定操作按钮的配置信息 -->
        <uni-swipe-action-item
          :right-options="options"
          @click="swipeActionClickHandler(goods)"
        >
          <my-goods
            :goods="goods"
            :showNumberBox="true"
            :showRadio="true"
            @radioChange="radioChangeHandler"
            @numChange="numberChangeHandler"
          ></my-goods>
        </uni-swipe-action-item>
      </block>
    </uni-swipe-action>

    <!-- 结算组件 -->
    <my-settle></my-settle>
  </view>
  <view class="empty-cart" v-else>
    <image src="/static/cart_empty@2x.png" class="empty-img"></image>
    <text class="tip-text">空空如也～</text>
  </view>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import MyAddress from "../../components/my-address/my-address.vue";
import myGoods from "../../components/my-goods/my-goods.vue";
import MySettle from "../../components/my-settle/my-settle.vue";
import badgeMix from "../../mixin/tabbar-badge";
export default {
  components: { myGoods, MyAddress, MySettle },
  data() {
    return {
      options: [
        {
          text: "删除",
          style: {
            backgroundColor: "#ff0000",
          },
        },
      ],
    };
  },
  methods: {
    radioChangeHandler(e) {
      this.updateGoodsState(e);
    },
    numberChangeHandler(e) {
      this.updateGoodsCount(e);
      this.setBadge();
    },
    swipeActionClickHandler(goods) {
      this.deleteFromCart(goods);
      this.setBadge();
    },
    ...mapMutations("m_cart", [
      "updateGoodsState",
      "updateGoodsCount",
      "deleteFromCart",
    ]),
  },
  computed: {
    ...mapState("m_cart", ["cart"])
  },
  mixins: [badgeMix],
};
</script>

<style lang="scss">
.cart-container {
  padding-bottom: 50px;

  .cart-title {
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    border-bottom: 1px solid #efefef;

    .cart-title-text {
      font-size: 14px;
      margin-left: 10px;
    }
  }
}

.empty-cart {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .empty-img {
    width: 90px;
    height: 90px;
  }

  .tip-text {
    color: #999999;
    font-size: 13px;
    margin-top: 15px;
  }
}
</style>
