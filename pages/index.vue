<template>
  <div>
    <home-carousel />
    <product-cateogries />
    <div class="container-md container-fluid ">
      <product-header />
      <div class="row small-gutters">
        <div v-for="product in products" :key="product" class="col-6 col-md-4 col-xl-3">
          <product-card :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeCarousel from '../components/Carousel/HomeCarousel.vue'
import ProductCateogries from '../components/Categories/ProductCateogries.vue'
import ProductCard from '../components/Product/ProductCard.vue'
import ProductHeader from '../components/Header/ProductHeader.vue'
export default {
  components: {
    HomeCarousel,
    ProductCateogries,
    ProductCard,
    ProductHeader
  },
  computed: {
    ...mapGetters({ products: 'products/all' })
  },
  beforeMount () {
    this.$store.dispatch('products/fetchAll')
  }

}
</script>
