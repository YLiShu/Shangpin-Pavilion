<template>
	<view class="login-container">
		<uni-icons
			type="contact-filled"
			color="#afafaf"
			size="100"
		/>
		<button type="default" class="btn-login" @click="getUserProfile">一键登录</button>
		<text class="tips-text">登录后尽享更多权益</text>
	</view>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
	export default {
		name:"my-login",
		data() {
			return {
				
			};
		},
		computed: {
			...mapState("m_user", ["redirectInfo"])
		},
		methods: {
			...mapMutations("m_user", ["updateUserInfo", "updateToken", "updateRedirectInfo"]),
			getUserProfile() {
				uni.getUserProfile({
					desc: '尚品阁请求授权获取您的帐号信息',
					success: (res) => {
						this.updateUserInfo(res.userInfo)
						this.getToken(res)
					},
					fail: () => {
						return uni.$showMsg('已取消授权登录！')
					}
				})
			},
			async getToken(info) {
				const res = await uni.login().catch(err => err)
				
				if (res.errMsg !== 'login:ok') return uni.$showMsg('登录失败！')
				
				const query = {
					code: res.code,
					encryptedData: info.encryptedData,
					iv: info.iv,
					rawData: info.rawData,
					signature: info.signature
				}

				const {data: loginResult} = await uni.$http.post('/api/public/v1/users/wxlogin', query)
				// if (loginResult.meta.status !== 200) return uni.$showMsg('登录失败！')
				loginResult.token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo'
				this.updateToken(loginResult.token)

				this.navigateBack()
			},
			navigateBack() {
				if (this.redirectInfo && this.redirectInfo.openType === 'switchTab') {
					uni.switchTab({
						url: this.redirectInfo.from,
						complete: () => {
							this.updateRedirectInfo(null)
						}
					})
				}
			}
		},
	}
</script>

<style lang="scss">
.login-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 750rpx;
	background-color: #f8f8f8;
	position: relative;
	overflow: hidden;

	&::after {
		content: ' ';
		display: block;
		width: 100%;
		height: 40px;
		background-color: #ffffff;
		position: absolute;
		bottom: 0;
		left: 0;
		border-radius: 100%;
		transform: translateY(50%);
	}

	.btn-login {
		background-color: #ff0000;
		color: #ffffff;
		width: 90%;
		margin: 15px 0;
		border-radius: 100px;
	}

	.tips-text {
		color: #999999;
		font-size: 13px;
		margin-top: 15px;
	}
}
</style>