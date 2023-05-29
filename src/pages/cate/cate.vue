<template>
  <view>
    <!-- 搜索组件 -->
    <my-search @click="gotoSearch"></my-search>
    <view class="scroll-view-container">
      <!-- 左侧滑动区 -->
      <scroll-view
        class="left-scroll-view"
        scroll-y="true"
        :style="{ height: wh + 'px' }"
      >
        <block v-for="(item, i) in cateList" :key="i">
          <view
            :class="['left-scroll-view-item', i === active ? 'active' : '']"
            @click="activeChange(i)"
            >{{ item.cat_name }}</view
          >
        </block>
      </scroll-view>
      <!-- 右侧滑动区域 -->
      <scroll-view
        class="right-scroll-view"
        scroll-y="true"
        :style="{ height: wh + 'px' }"
        :scroll-top="scrollTop"
      >
        <view class="cate-level2" v-for="(item2, i2) in cateLevel2" :key="i2">
          <view class="cate-level2-title">/ {{ item2.cat_name }} /</view>
          <!-- 动态渲染三级分类的列表数据 -->
          <view class="cate-level3-list">
            <!-- 三级分类的item项 -->
            <view
              class="cate-level3-item"
              v-for="(item3, i3) in item2.children"
              :key="i3"
              @click="gotoGoodList(item3)"
            >
              <!-- 图片 -->
              <image :src="item3.cat_icon"></image>
              <!-- 文本 -->
              <text>{{ item3.cat_name }}</text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import mySearch from "../../components/my-search/my-search";
import badgeMix from '../../mixin/tabbar-badge'

export default {
  components: { mySearch },
  data() {
    return {
      // 当前设备可用高度
      wh: 0,
      cateList: [],
      active: 0,
      cateLevel2: [],
      scrollTop: 0,
    };
  },
  onLoad() {
    const sysInfo = uni.getSystemInfoSync();
    this.wh = sysInfo.windowHeight - 50;

    this.getCateList();
  },
  methods: {
    // 获取分类列表数据
    async getCateList() {
      const { data: res } = await uni.$http.get("/api/public/v1/categories");
      if (res.meta.status !== 200) return uni.$showMsg();
      this.cateList = res.message;

      // 为二级分类赋值
      this.cateLevel2 = res.message[0].children;
    },
    activeChange(i) {
      this.active = i;

      // 重新为二级分类赋值
      this.cateLevel2 = this.cateList[i].children;

      // 重置滚动条
      this.scrollTop = this.scrollTop === 0 ? 1 : 0;
    },
    // 点击三级分类项跳转到商品列表页面
    gotoGoodList(item3) {
      uni.navigateTo({
        url: "/subpkg/goods_list/goods_list?cid=" + item3.cat_id,
      });
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
.scroll-view-container {
  display: flex;

  .left-scroll-view {
    width: 120px;
  }

  .left-scroll-view-item {
    background-color: #f7f7f7;
    line-height: 60px;
    text-align: center;
    font-size: 12px;

    &.active {
      background-color: #ffffff;
      position: relative;

      &::before {
        content: "";
        display: block;
        width: 3px;
        height: 40px;
        background-color: #ff0000;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
  }
}

.cate-level2-title {
  font-size: 12px;
  font-weight: bolder;
  text-align: center;
  padding: 15px 0;
  color: #ff0000;
}

.cate-level3-list {
  display: flex;
  flex-wrap: wrap;

  .cate-level3-item {
    display: flex;
    width: 33.33%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;

    image {
      width: 60px;
      height: 60px;
    }

    text {
      font-size: 12px;
    }
  }
}
</style>
