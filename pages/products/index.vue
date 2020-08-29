<template>
  <div>
    <top-banner />
    <div class="container my-4">
      <div class="row">
        <div class="col-lg-3">
          <filter-tools />
        </div>
        <div class="col-lg-9">
          <product-card-horizontal v-for="i in 5" :key="i" />
          <div class="wd-100 pagination">
            <div class="my-3">
              <a-pagination :current="current" :total="100" @change="onChange" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCardHorizontal from '../../components/Product/ProductCardHorizontal.vue'
import TopBanner from './components/TopBanner.vue'
import FilterTools from './components/FilterTools.vue'
export default {
  name: 'ProductsPage',
  components: {
    TopBanner,
    FilterTools,
    ProductCardHorizontal
  },
  data () {
    return {
      current: 3
    }
  },
  methods: {
    onChange (current) {
      console.log(current)
      this.current = current
    }
  }
}
</script>

<style lang="scss" scroped>
.pagination{
  display: flex;
  justify-content: center;
  align-items: center;
}
.ant-pagination-item-active {
    font-weight: 500;
    background: #fff;
    background-color: #c82f63;
    color: #fff
}
.ant-pagination-item{
  border-radius: 50%;
}
.ant-pagination-prev .ant-pagination-item-link,
.ant-pagination-next .ant-pagination-item-link{
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
