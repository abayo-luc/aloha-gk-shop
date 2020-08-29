<template>
  <main class="container-fuied product-page">
    <product-component :product="product" />
    <product-review :reviews="product.reviews || []" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductComponent from '../../components/Product/Product.vue'
import ProductReview from '../../components/Product/ProductReview.vue'
export default {
  components: {
    ProductComponent,
    ProductReview
  },
  computed: {
    ...mapGetters({ product: 'products/one' })
  },
  beforeCreate () {
    const { id } = this.$route.params
    this.$store.dispatch('products/fetchSingleProduct', id)
  }
}
</script>

<style scrope>
.product-page{
  background-color: #fff;
}
</style>
