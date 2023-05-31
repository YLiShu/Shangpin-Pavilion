// 导入 Vue 和 Vuex
import Vue from "vue"
import Vuex from 'vuex'
import moduleCart from './cart/cart'
import moduleUser from './user/user'

// 将Vuex安装为Vue插件
Vue.use(Vuex)

// 创建并暴露Store的实例对象
export default new Vuex.Store({
    modules: {
        'm_cart': moduleCart,
        'm_user': moduleUser
    }
})

