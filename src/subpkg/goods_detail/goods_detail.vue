<template>
  <view v-if="goods_info.goods_name" class="goods-detail">
    <swiper
      class="goods_swiper"
      :indicator-dots="true"
      :autoplay="true"
      :interval="1000"
      :duration="1000"
      :circular="true"
    >
      <swiper-item v-for="(goods, i) in goods_info.pics" :key="i">
        <image
          class="goods_pic"
          :src="goods.pics_big"
          @click="preview(i)"
        ></image>
      </swiper-item>
    </swiper>
    <view class="goods-info-box">
      <view class="price">￥{{ goods_info.goods_price | tofixed }}</view>
      <view class="goods-info-body">
        <view class="goods-name">{{ goods_info.goods_name }}</view>
        <view class="favi">
          <uni-icons type="star" size="18" color="gray"></uni-icons>
          <text>收藏</text>
        </view>
      </view>
      <view class="yf">快递：免运费</view>
    </view>

    <rich-text :nodes="goods_info.goods_introduce"></rich-text>
    <view class="goods_nav">
      <!-- fill 控制右侧按钮的样式 -->
      <!-- options 左侧按钮的配置项 -->
      <!-- buttonGroup 右侧按钮的配置项 -->
      <!-- click 左侧按钮的点击事件处理函数 -->
      <!-- buttonClick 右侧按钮的点击事件处理函数 -->
      <uni-goods-nav
        :options="options"
        :fill="true"
        :button-group="buttonGroup"
        @click="onClick"
        @buttonClick="buttonClick"
      />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 商品详情
      goods_info: {},
      // 左侧按钮组的配置对象
      options: [
        {
          icon: "shop",
          text: "店铺",
          infoBackgroundColor: "#007aff",
          infoColor: "#f5f5f5",
        },
        {
          icon: "cart",
          text: "购物车",
          info: 0,
        },
      ],
      // 右侧按钮组配置对象
      buttonGroup: [
        {
          text: "加入购物车",
          backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
          color: "#fff",
        },
        {
          text: "立即购买",
          backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
          color: "#fff",
        },
      ],
    };
  },
  onLoad(options) {
    const goods_id = options.goods_id;
    this.getGoodsDetail(goods_id);
  },
  filters: {
    tofixed(num) {
      return Number(num).toFixed(2);
    },
  },
  methods: {
    // 获取商品信息
    async getGoodsDetail(goods_id) {
      const { data: res } = await uni.$http.get("/api/public/v1/goods/detail", {
        goods_id,
      });
      if (res.meta.status !== 200) return uni.$showMsg();

      // 解决图片底部间隙
      res.message.goods_introduce = res.message.goods_introduce
        .replace(/<img /g, '<img style="display:block;" ')
        .replace(/webp/g, "jpg");
      this.goods_info = res.message;
    },
    // 预览
    preview(i) {
      uni.previewImage({
        // 预览时，默认显示图片的索引
        current: i,
        // 所有图片url的地址的数组
        urls: this.goods_info.pics.map((x) => x.pics_big),
        indicator: "number",
      });
    },
    onClick(e) {
      if (e.content.text === '购物车') {
        uni.switchTab({
          url: '/pages/cart/cart'
        })
      }
    },
    buttonClick(e) {
      console.log(e);
      this.options[1].info++;
    },
  },
};
</script>

<style lang="scss">
.goods-detail {
  padding-bottom: 50px;

  .goods_swiper {
    height: 750rpx;

    .goods_pic {
      width: 100%;
      height: 100%;
    }
  }

  .goods-info-box {
    padding: 10px;

    .price {
      font-size: 18px;
      color: #ff0000;
      margin: 10px 0;
    }

    .goods-info-body {
      display: flex;
      justify-content: space-between;

      .goods-name {
        font-size: 13px;
        margin-right: 10px;
      }

      .favi {
        width: 120px;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-left: 1px solid #efefef;
        color: gray;
      }
    }

    .yf {
      font-size: 12px;
      color: gray;
      margin: 10px 0;
    }
  }

  .goods_nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>