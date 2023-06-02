export default {
    // 开启命名空间
    namespaced: true,

    // state 数据
    state: () => ({
        // 收获地址
        address: JSON.parse(uni.getStorageSync('address') || '{}'),
        token:  uni.getStorageSync('token') ? JSON.parse(uni.getStorageSync('token')) : '',
        userInfo: JSON.parse(uni.getStorageSync('userInfo') || '{}'),
        redirectInfo: null,
    }),

    // 方法
    mutations: {
        // 更新收货地址
        updateAddress(state, address) {
            state.address = address
            this.commit('m_user/saveToStorage')
        },

        // 数据持久化存储到本地
        saveToStorage(state) {
            uni.setStorageSync('address', JSON.stringify(state.address))
        },

        // 更新用户基本信息
        updateUserInfo(state, userInfo) {
            state.userInfo = userInfo
            this.commit('m_user/saveUserInfoToStorage')
        },

        // 更新token字符串
        updateToken(state, token) {
            state.token = token
            this.commit('m_user/saveTokenToStorage')
        },

        // 数据持久化存储到本地
        saveUserInfoToStorage(state) {
            uni.setStorageSync('userInfo', JSON.stringify(state.userInfo))
        },

        // 数据持久化存储到本地
        saveTokenToStorage(state) {
            uni.setStorageSync('token', JSON.stringify(state.token))
        },

        // 更新重定向的信息对象
        updateRedirectInfo(state, redirectInfo) {
            state.redirectInfo = redirectInfo
        }
    },

    // 数据包裹器
    getters: {
        addressStr(state) {
            if (!Object.keys(state.address).length) return ''

            return state.address.provinceName + state.address.cityName + state.address.countyName + state.address.detailInfo
        }
    }
}