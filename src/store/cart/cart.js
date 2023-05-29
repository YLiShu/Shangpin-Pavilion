export default {
    namespaced: true,

    state: () => ({
        // 购物车的数组，用来存储购物车中每个商品的信息对象
        // 每个商品的信息对象，包含如下6个属性：
        // { goods_id, goods_name, goods_price, goods_count, goods_small_logo, goods_state}
        cart: JSON.parse(uni.getStorageSync('cart') || '[]')
    }),
    
    mutations: {
        addToCart(state, goods) {
            const findResult = state.cart.find(x => x.goods_id === goods.goods_id)
            
            if (findResult) {
                findResult.goods_count++
            } else {
                state.cart.push(goods)
            }

            // 通过commit方法，调用m_cart命名空间下的saveToStorage方法
            this.commit('m_cart/saveToStorage')
        },
        updateGoodsState(state, goods_info) {
            const findResult = state.cart.find(x => x.goods_id === goods_info.goods_id)

            if (findResult) {
                findResult.goods_state = goods_info.goods_state
                this.commit('m_cart/saveToStorage')
            }
        },
        // 将购物车中数据持久化存储到本地
        saveToStorage(state) {
            uni.setStorageSync('cart', JSON.stringify(state.cart))
        }
    },

    getters: {
        // 统计购物车中商品总数量
        total(state) {
            let count = 0
            state.cart.forEach(goods => {
                count += goods.goods_count
            });
            return count
        }
    }
}