<template>
  <div>
    <notifications group="general" :close-on-click="true" :ignore-duplicates="true">
      <template slot="body" slot-scope="props">
        <div class="vue-notification-template vue-notification" :class="props.item.type">
          <div class="notification-title">
            {{ props.item.title }}
          </div>
          <a class="close" @click="props.close">
            <a-icon type="close" />
          </a>
          <div v-html="props.item.text" />
        </div>
      </template>
    </notifications>
    <top-header ref="header" />
    <div id="sub-header">
      <sub-header ref="subheader" :show-login-modal="showLoginModal" />
    </div>
    <main class="content">
      <nuxt />
    </main>
    <app-footer />
  </div>
</template>
<script>
import TopHeader from '@/components/Header/TopHeader.vue'
import AppFooter from '@/components/Footer/AppFooter.vue'
import SubHeader from '@/components/Header/SubHeader.vue'

export default {
  components: {
    TopHeader,
    AppFooter,
    SubHeader
  },
  mounted () {
    this.$store.dispatch('categories/fetchAll')
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const header = document.querySelector('#sub-header')
      const sticky = header.offsetTop
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky')
      } else {
        header.classList.remove('sticky')
      }
    },
    showLoginModal () {
      this.$refs.header.showAuthModel('login', 'User Login', 'Login')
    }

  }

}
</script>
<style lang="scss" scoped>
.content{
  // margin-bottom: 384px;
  background-color: #fff;
}
@media  (max-width: 767px) {

  .content{
    margin-bottom: 30px;
  }

}
</style>
