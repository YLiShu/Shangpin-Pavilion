<template>
  <view class=".my-container">
    <my-login v-if="!token"></my-login>


    <my-user-info v-else></my-user-info>
  </view>
</template>

<script>
import { mapState } from 'vuex';
import myLogin from '../../components/my-login/my-login.vue';
import MyUserInfo from '../../components/my-userInfo/my-userInfo.vue';
import badgeMix from '../../mixin/tabbar-badge'

export default {
  components: { myLogin, MyUserInfo },
  data() {
    return {};
  },
  computed: {
    ...mapState("m_user", ["token"])
  },
  mixins: [badgeMix]
};
</script>

<style lang="scss">
page, .my-container {
  height: 100%;
}
</style>
