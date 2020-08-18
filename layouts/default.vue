<template>
  <div>
    <top-header />
    <sub-header />
    <main>
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
  }
}
</script>
