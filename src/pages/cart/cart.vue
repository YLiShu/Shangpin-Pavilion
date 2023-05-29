<template>
  <view>
    <view class="cart-title">
      <uni-icons type="shop" size="18"></uni-icons>
      <text class="cart-title-text">购物车</text>
    </view>

    <view class="cart-list">
      <block v-for="(goods, i) in cart" :key="i">
        <my-goods :goods="goods"  :showNumberBox="true" :showRadio="true" @radioChange="radioChangeHandler"></my-goods>
      </block>
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import myGoods from '../../components/my-goods/my-goods.vue';
import badgeMix from '../../mixin/tabbar-badge'
export default {
  components: { myGoods },
  data() {
    return {

    };
  },
  methods: {
    radioChangeHandler(e) {
      this.updateGoodsState(e)
    },
    ...mapMutations('m_cart', ['updateGoodsState'])
  },
  computed: {
    ...mapState('m_cart', ['cart'])
  },
  mixins: [badgeMix]
};
</script>

<style lang="scss">
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
  
</style>
