<template>
  <view>
    <view class="goods-list">
      <view v-for="(goods, i) in goodsList" :key="i" @click="gotoDetail(goods)">
        <my-goods :goods="goods"></my-goods>
      </view>
    </view>
  </view>
</template>

<script>
import myGoods from "../../components/my-goods/my-goods";
export default {
  components: { myGoods },
  data() {
    return {
      // 请求参数对象
      queryObj: {
        // 查询关键词
        query: "",
        // 商品分类Id
        cid: "",
        // 页码值
        pagenum: 1,
        // 每页显示多少条数据
        pagesize: 10,
      },
      // 商品列表数据
      goodsList: [],
      // 总数
      total: 0,
      // 加载节流阀
      isLoading: false
    };
  },
  onLoad(options) {
    this.queryObj.query = options.query || "";
    this.queryObj.cid = options.cid || "";

    // 获取商品列表数据
    this.getGoodsList();
  },
  methods: {
    async getGoodsList(cb) {
      this.isLoading = true
      const { data: res } = await uni.$http.get(
        "/api/public/v1/goods/search",
        this.queryObj
      );
      this.isLoading = false

      cb && cb()

      if (res.meta.status !== 200) return uni.$showMsg();

      this.goodsList = [...this.goodsList, ...res.message.goods];
      this.total = res.message.total;
    },
    gotoDetail(goods) {
      uni.navigateTo({
        url: '/subpkg/goods_detail/goods_detail?goods_id=' + goods.goods_id
      })
    }
  },
  // 上拉触底事件
  onReachBottom() {
    // 判断是否还有下一页数据
    if (this.queryObj.pagenum * this.queryObj.pagesize >= this.total) return uni.$showMsg('数据加载完毕！') 

    // 判断节流阀状态
    if (this.isLoading) return
    // 让页码自增 +1
    this.queryObj.pagenum ++
    // 重新获取列表数据
    this.getGoodsList()
  },
  // 下拉刷新事件
  onPullDownRefresh() {
    this.queryObj.pagenum = 1
    this.total = 0
    this.isLoading = false
    this.goodsList = []

    this.getGoodsList(() => {
      uni.stopPullDownRefresh()
    })
  }
};
</script>

<style lang="scss">
</style>