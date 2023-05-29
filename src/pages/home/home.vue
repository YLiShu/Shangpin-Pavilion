<template>
  <view>
    <view class="search-box">
      <my-search @click="gotoSearch"></my-search>
    </view>
    <!-- 轮播图 -->
    <swiper
      :indicator-dots="true"
      :autoplay="true"
      :interval="3000"
      :duration="1000"
      :circular="true"
    >
      <swiper-item v-for="(item, i) in swiperList" :key="i">
        <navigator
          class="swiper-item"
          :url="'/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id"
        >
          <image :src="item.image_src"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 分类导航栏 -->
    <view class="nav-list">
      <view
        class="nav-item"
        v-for="(item, i) in navList"
        :key="i"
        @click="navClickHandler(item)"
      >
        <image class="nav-img" :src="item.image_src"></image>
      </view>
    </view>
    <!-- 楼层 -->
    <view class="floor-list">
      <view class="floor-item" v-for="(item, i) in floorList" :key="i">
        <image :src="item.floor_title.image_src" class="floor-title"></image>
        <view class="floor-img-box">
          <navigator class="left-img-box" :url="item.product_list[0].url">
            <image
              :src="item.product_list[0].image_src"
              :style="{ width: item.product_list[0].image_width + 'rpx' }"
              mode="widthFix"
            ></image>
          </navigator>
          <view class="right-img-box">
            <navigator
              :url="item2.url"
              class="right-img-item"
              v-for="(item2, i2) in item.product_list"
              :key="i2"
              v-if="i2 !== 0"
            >
              <image
                :src="item2.image_src"
                :style="{ width: item2.image_width + 'rpx' }"
                mode="widthFix"
              ></image>
            </navigator>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import badgeMix from '../../mixin/tabbar-badge'

export default {
  data() {
    return {
      // 轮播图数据列表
      swiperList: [],
      // 分类导航的数据列表
      navList: [],
      // 楼层的数据列表
      floorList: [],
    };
  },
  onLoad() {
    // 获取轮播图数据
    this.getSwiperList();
    this.getNavList();
    this.getFloorList();
  },
  methods: {
    async getSwiperList() {
      const { data: res } = await uni.$http.get(
        "/api/public/v1/home/swiperdata"
      );
      // 请求失败
      if (res.meta.status !== 200) return uni.$showMsg();
      this.swiperList = res.message;
    },
    async getNavList() {
      const { data: res } = await uni.$http.get("/api/public/v1/home/catitems");
      if (res.meta.status !== 200) return uni.$showMsg();
      this.navList = res.message;
    },
    navClickHandler(item) {
      if (item.name === "分类") {
        uni.switchTab({
          url: "/pages/cate/cate",
        });
      }
    },
    async getFloorList() {
      const { data: res } = await uni.$http.get(
        "/api/public/v1/home/floordata"
      );
      if (res.meta.status !== 200) return uni.$showMsg();

      // 对数据进行处理
      res.message.forEach((floor) => {
        floor.product_list.forEach((prod) => {
          prod.url =
            "/subpkg/goods_list/goods_list?" + prod.navigator_url.split("?")[1];
        });
      });

      this.floorList = res.message;
    },
    // 跳转到搜索页面
    gotoSearch() {
      uni.navigateTo({
        url: "/subpkg/search/search",
      });
    },
  },
  mixins: [badgeMix]
};
</script>

<style lang="scss">
.search-box {
  position: sticky;
  top: 0;
  z-index: 999;
}

swiper {
  height: 330rpx;

  .swiper-item,
  image {
    width: 100%;
    height: 100%;
  }
}

.nav-list {
  display: flex;
  justify-content: space-around;
  margin: 15rpx 0;

  .nav-img {
    width: 128rpx;
    height: 140rpx;
  }
}

.floor-img-box {
  display: flex;
  padding-left: 10rpx;
}

.floor-title {
  height: 60rpx;
  width: 100%;
  display: flex;
}

.right-img-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
