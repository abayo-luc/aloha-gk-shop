<template>
  <main>
    <product-component />
    <product-review />
  </main>
</template>

<script>
import ProductComponent from '../../components/Product/Product.vue'
import ProductReview from '../../components/Product/ProductReview.vue'
export default {
  components: {
    ProductComponent,
    ProductReview
  }
}
</script>

<style>

</style>
