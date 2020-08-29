<template>
  <div class="container py-4">
    <a-carousel arrows>
      <div
        slot="prevArrow"

        class="custom-slick-arrow"
        style="left: 3px;zIndex: 1"
      >
        <a-button icon="left" />
      </div>
      <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
        <a-button icon="right" />
      </div>
      <div v-for="i in 3" :key="i" class="container">
        <div class="row">
          <div v-for="product in 4" :key="product" class="col">
            <product-card :product="products[0]" />
          </div>
        </div>
      </div>
    </a-carousel>
  </div>
</template>
<script>
import ProductCard from '../Product/ProductCard.vue'
export default {
  name: 'RelatedProducts',
  components: {
    ProductCard
  },
  data () {
    return {
      products: [
        { id: '8e5f501b-616b-4a05-b054-daf48887d8b8', name: 'Japanese 101', price: 12.5, description: 'Beginner material for Japanese grammar and conversation.', avRating: 0, totalReviews: 0, totalItems: 0, discountRate: 0, createdAt: '2020-08-12T19:20:21.976Z', updatedAt: '2020-08-12T19:20:21.976Z', categories: [{ id: '0c9a2f0f-5602-4d4c-a374-bb923e79da2d', name: 'Japanese', createdAt: '2020-08-12T19:20:21.976Z', updatedAt: '2020-08-12T19:20:21.976Z', ProductCategory: { productId: '8e5f501b-616b-4a05-b054-daf48887d8b8', categoryId: '0c9a2f0f-5602-4d4c-a374-bb923e79da2d', createdAt: '2020-08-13T16:46:41.126Z', updatedAt: '2020-08-13T16:46:41.126Z' } }], reviews: [] }
      ]
    }
  }
}
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  /* height: 160px; */
  line-height: 160px;
  /* background: #364d79; */
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #c82f63;
}
</style>
