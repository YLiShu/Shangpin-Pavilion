<template>
  <view>
    <view class="goods-item">
      <view class="goods-item-left">
        <image
          :src="goods.goods_small_logo || defaultPic"
          class="goods-pic"
        ></image>
      </view>

      <view class="goods-item-right">
        <view class="goods-name">{{ goods.goods_name }}</view>
        <view class="goods-info-box">
          <view class="goods-price">￥{{ goods.goods_price | tofixed }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "my-goods",
  props: {
	goods: {
		type: Object,
		default: {}
	}
  },
  data() {
    return {
      // 默认图片地址
      defaultPic:
        "https://img1.baidu.com/it/u=415449740,540746270&fm=253&fmt=auto&app=138&f=GIF?w=500&h=500",
    };
  },
  filters: {
	tofixed(num) {
		return Number(num).toFixed(2)
	}
  }
};
</script>

<style lang="scss">
.goods-item {
  display: flex;
  border: 1px solid #f0f0f0;
  padding: 10px 5px;

  .goods-item-left {
    margin-right: 5px;
    .goods-pic {
      width: 100px;
      height: 100px;
      display: block;
    }
  }

  .goods-item-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .goods-name {
      font-size: 13px;
    }

    .goods-info-box {
      .goods-price {
        color: #ff0000;
        font-size: 16px;
      }
    }
  }
}
</style>