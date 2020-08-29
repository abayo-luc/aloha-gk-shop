<template>
  <main class="container-fuied product-page">
    <product-component :product="product" />
    <product-review :reviews="product.reviews || []" />
    <div class="main_title mt-5">
      <h2 class="text-center">
        Related Products
      </h2>
    </div>
    <related-products />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductComponent from '../../components/Product/Product.vue'
import ProductReview from '../../components/Product/ProductReview.vue'
import RelatedProducts from '../../components/Carousel/RelatedProduct.vue'
export default {
  components: {
    ProductComponent,
    ProductReview,
    RelatedProducts
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
.main_title{
  line-height: 1.2;
  font-size: 2.25rem;
  font-weight: 500;
  margin: 0;
  position: relative;
  z-index: 2;
  color:  #000
}
</style>
