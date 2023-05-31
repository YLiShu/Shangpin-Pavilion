export default {
    // 开启命名空间
    namespaced: true,

    // state 数据
    state: () => ({
        // 收获地址
        address: JSON.parse(uni.getStorageSync('address') || '{}')
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