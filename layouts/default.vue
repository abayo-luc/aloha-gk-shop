<template>
  <div>
    <top-header />
    <main>
      <nuxt />
    </main>
  </div>
</template>
<script>
import TopHeader from '@/components/Header/TopHeader.vue'
export default {
  components: {
    TopHeader
  }
}
</script>

<style>

</style>
