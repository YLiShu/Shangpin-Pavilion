<template>
  <view>
    <view class="search-box">
      <uni-search-bar
        @input="input"
        :radius="100"
        cancelButton="none"
        :placeholder="'请输入搜索内容'"
        :focus="true"
      >
      </uni-search-bar>
    </view>
    <view class="sugg-list" v-show="kw">
      <view
        v-for="(item, i) in searchResults"
        :key="i"
        class="sugg-item"
        @click="gotoDetail(item)"
      >
        <uni-icons type="search" size="16" class="sugg-item-search"></uni-icons>
        <view class="goods-name">{{ item.goods_name }}</view>
      </view>
    </view>
    <view class="history-box" v-show="!kw">
      <view class="history-title">
        <text>搜索历史</text>
        <uni-icons type="trash" size="16" @click="cleanHistory"></uni-icons>
      </view>
      <view class="history-list">
        <uni-tag
          custom-style="background-color: #efefef; color: #000; border-color: #efefef"
          v-for="(item, i) in historyList"
          :key="i"
          :text="item"
          @click="gotoGoodsList(item)"
        >
        </uni-tag>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 延时器的timerId
      timer: null,
      // 搜索关键词
      kw: "",
      // 搜索结果数据列表
      searchResults: [],
      // 搜索关键词的历史记录
      historyList: [],
    };
  },
  methods: {
    // 输入事件的处理函数
    input(e) {
      // 清除 timer 对应的延时器
      clearTimeout(this.timer);
      // 重新启动一个延时器，并把 timerId 赋值给this.timer
      this.timer = setTimeout(() => {
        // 如果 500 毫秒内，没有触发新的输入事件，则为搜索关键词赋值
        this.kw = e;
        this.getSearchResults();
      }, 1000);
    },
    async getSearchResults() {
      if (this.kw.trim() === "") {
        this.searchResults = [];
        return;
      }

      const { data: res } = await uni.$http.get(
        "/api/public/v1/goods/qsearch",
        {
          query: this.kw,
        }
      );

      if (res.meta.status != 200) return uni.$showMsg();
      this.searchResults = res.message;

      // 保存搜索关键词
      this.saveSearchHistory();
    },
    gotoDetail(item) {
      uni.navigateTo({
        url: "/subpkg/goods_detail/goods_detail?goods_id=" + item.goods_id,
      });
    },
    saveSearchHistory() {
      if (this.historyList.includes(this.kw)) {
        const indexToRemove = this.historyList.indexOf(this.kw)
        this.historyList.splice(indexToRemove, 1);
        this.historyList.unshift(this.kw);
      } else {
        this.historyList.unshift(this.kw);
      }
      uni.setStorageSync('search_history', JSON.stringify(this.historyList))
    },
    cleanHistory() {
      this.historyList = []
      uni.setStorageSync('search_history', JSON.stringify(this.historyList))
    },
    gotoGoodsList(kw) {
      uni.navigateTo({
        url: '/subpkg/goods_list/goods_list?query=' + kw
      })
    }
  },
  onLoad() {
    this.historyList = JSON.parse(uni.getStorageSync('search_history') || '[]')
  }
};
</script>

<style lang="scss">
.uni-searchbar {
  background-color: #ff0000;
}

.search-box {
  position: sticky;
  top: 0;
  z-index: 999;
}

.sugg-list {
  padding: 0 5px;

  .sugg-item {
    display: flex;
    padding: 13px 0;
    font-size: 12px;
    border-bottom: 1px solid #efefef;
    align-items: center;

    .sugg-item-search {
      margin-right: 5px;
    }

    .goods-name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.history-box {
  padding: 0 5px;

  .history-title {
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    font-size: 13px;
    border-bottom: 1px solid #efefef;
  }

  .history-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;

    .uni-tag {
      margin-top: 5px;
      margin-right: 5px;
    }
  }
}
</style>
