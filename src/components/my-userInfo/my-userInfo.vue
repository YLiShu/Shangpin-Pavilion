<template>
  <view class="my-user-info-container">
    <view class="top-box">
      <image :src="userInfo.avatarUrl" class="avatar"></image>
      <view class="nickname">{{ userInfo.nickName }}</view>
    </view>
    <view class="panel-list">
      <view class="panel">
        <view class="panel-body">
          <view class="panel-item">
            <text>6</text>
            <text>收藏的店铺</text>
          </view>
          <view class="panel-item">
            <text>12</text>
            <text>收藏的商品</text>
          </view>
          <view class="panel-item">
            <text>10</text>
            <text>关注的商品</text>
          </view>
          <view class="panel-item">
            <text>101</text>
            <text>足迹</text>
          </view>
        </view>
      </view>

      <view class="panel">
        <view class="panel-title"> 我的订单 </view>

        <view class="panel-body">
          <view class="panel-item">
            <image src="/static/my-icons/icon1.png" class="icon"></image>
            <text>待支付</text>
          </view>
          <view class="panel-item">
            <image src="/static/my-icons/icon2.png" class="icon"></image>
            <text>待收货</text>
          </view>
          <view class="panel-item">
            <image src="/static/my-icons/icon3.png" class="icon"></image>
            <text>退款/退货</text>
          </view>
          <view class="panel-item">
            <image src="/static/my-icons/icon4.png" class="icon"></image>
            <text>全部订单</text>
          </view>
        </view>
      </view>

      <view class="panel">
        <view class="panel-list-item">
          <text>收获地址</text>
          <uni-icons type="arrowright" size="15" />
        </view>
        <view class="panel-list-item">
          <text>联系客服</text>
          <uni-icons type="arrowright" size="15" />
        </view>
        <view class="panel-list-item" @click="logout">
          <text>退出登录</text>
          <uni-icons type="arrowright" size="15" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "my-userInfo",
  data() {
    return {};
  },
  computed: {
    ...mapState("m_user", ["userInfo"]),
  },
  methods: {
	...mapMutations("m_user", ["updateUserInfo", "updateToken", "updateAddress"]),
	async logout() {
		const res = await uni.showModal({
			title: '提示',
			content: '确认退出登录？'
		}).catch(err => err)

		if (res.confirm) {
			this.updateUserInfo({})
			this.updateAddress({})
			this.updateToken('')
		}
	}
  },
};
</script>

<style lang="scss">
.my-user-info-container {
  height: 100%;
  background-color: #f4f4f4;
  .top-box {
    height: 400rpx;
    background-color: #ff0000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .avatar {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      border: 2px solid #ffffff;
      box-shadow: 0 1px 5px black;
    }

    .nickname {
      font-size: 16px;
      color: #ffffff;
      font-weight: bolder;
      margin-top: 10px;
    }
  }

  .panel-list {
    padding: 0 10px;
    position: relative;
    top: -10px;

    .panel {
      background-color: #ffffff;
      border-radius: 5px;
      margin-bottom: 8px;

      .panel-title {
        border-bottom: 1px solid #efefef;
        padding-left: 10px;
        font-size: 15px;
        line-height: 45px;
      }

      .panel-body {
        display: flex;
        justify-content: space-around;

        .panel-item {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          padding: 10px 0;
          font-size: 13px;

          .icon {
            width: 35px;
            height: 35px;
          }
        }
      }

	  .panel-list-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 15px;
		padding: 0 10px;
		line-height: 45px;
		border-bottom: 1px solid #efefef;
	  }
    }
  }
}
</style>