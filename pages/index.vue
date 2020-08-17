<template>
  <div>
    <home-carousel />
    <product-cateogries />
    <div class="container">
      <product-header />
      <div class="row small-gutters">
        <div v-for="product in products" :key="product" class="col-6 col-md-4 col-xl-3">
          <single-product />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCarousel from '../components/Carousel/HomeCarousel.vue'
import ProductCateogries from '../components/Categories/ProductCateogries.vue'
import SingleProduct from '../components/Product/SingleProduct.vue'
import ProductHeader from '../components/Header/ProductHeader.vue'
export default {
  components: {
    HomeCarousel,
    ProductCateogries,
    SingleProduct,
    ProductHeader
  },
  data () {
    return {
      products: [...Array(20).keys()]
    }
  }
}
</script>
