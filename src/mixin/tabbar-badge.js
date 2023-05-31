import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters('m_cart', ['total'])
    },
    methods: {
        setBadge() {
            // 调用uni.setTabBarBadge设置数字徽标
            if (this.total > 0) {
                uni.setTabBarBadge({
                    index: 2,
                    text: this.total.toString()
                })
            } else {
                uni.removeTabBarBadge({
                    index: 2
                })
            }
        }
    },
    onShow() {
        this.setBadge()
    }
}