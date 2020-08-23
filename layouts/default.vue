<template>
  <div>
    <top-header />
    <div id="sub-header">
      <sub-header />
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
    }
  }
}
</script>
