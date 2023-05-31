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
            const findResult = state.cart.find(x => {
                return x.goods_id === goods.goods_id
            })

            if (findResult) {
                findResult.goods_count++
            } else {
                state.cart.push(goods)
            }

            // 通过commit方法，调用m_cart命名空间下的saveToStorage方法
            this.commit('m_cart/saveToStorage')
        },
        updateGoodsState(state, goods_info) {
            const findResult = state.cart.find(x => {
                return x.goods_id === goods_info.goods_id
            })

            if (findResult) {
                findResult.goods_state = goods_info.goods_state
                this.commit('m_cart/saveToStorage')
            }
        },
        updateGoodsCount(state, goods_info) {
            const findResult = state.cart.find(x => {
                return x.goods_id === goods_info.goods_id
            })

            if (findResult) {
                findResult.goods_count = goods_info.goods_count
                this.commit('m_cart/saveToStorage')
            }
        },
        deleteFromCart(state, goods) {
            const findIndex = state.cart.findIndex(x => {
                return x.goods_id === goods.goods_id
            })

            if (findIndex !== -1) {
                state.cart.splice(findIndex, 1)
                this.commit('m_cart/saveToStorage')
            }
        },
        // 更新勾选状态
        updateAllGoodsState(state, newState) {
            state.cart.forEach(x => x.goods_state = newState);
            this.commit('m_cart/saveToStorage')
        },
        // 将购物车中数据持久化存储到本地
        saveToStorage(state) {
            uni.setStorageSync('cart', JSON.stringify(state.cart))
        }
    },

    getters: {
        // 统计购物车中商品总数量
        total(state) {
            return state.cart.reduce((count, item) => {
                return count += item.goods_count
            }, 0)
        },
        // 勾选的商品的总数量
        checkedCount(state) {
            return state.cart.filter(x => x.goods_state).reduce((total, item) => {
                return total += item.goods_count
            }, 0)
        },
        // 勾选商品的总价格
        checkedPrice(state) {
            return state.cart.filter(x => x.goods_state).reduce((price, item) => {
                return price += item.goods_count * item.goods_price
            }, 0).toFixed(2)
        }
    }
}