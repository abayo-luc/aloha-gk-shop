<template>
  <div>
    <top-banner />
    <div class="container my-4">
      <div class="row">
        <div class="col-lg-3">
          <filter-tools />
        </div>
        <div v-if="isFetching" class="col-lg-9">
          <div v-for="indicator in 10" :key="indicator" class="col">
            <a-skeleton active avatar style="width:80%" />
          </div>
        </div>
        <div v-else-if="products.length == 0" class="col-lg-9 my-5">
          <a-empty />
        </div>
        <div v-else class="col-lg-9">
          <product-card-horizontal v-for="product in products" :key="product.id" :product="product" />
          <div class="wd-100 pagination">
            <div class="my-3">
              <a-pagination
                :current="current"
                :default-current="1"
                :total="pages"
                :default-page-size="1"
                :hide-on-single-page="true"
                @change="onChange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
      current: 1
    }
  },
  computed: {
    ...mapGetters({ products: 'products/all', pages: 'products/pages', isFetching: 'products/isFetching' }),
    urlParams () {
      return this.$route.query.categoryId
    }
  },
  watch: {
    urlParams: {
      handler (a, b) {
        this.fetchData()
      }
    }
  },
  mounted () {
    this.fetchData()
  },

  methods: {
    fetchData (moreQuery = {}) {
      const { query } = this.$route
      this.$store.dispatch('products/fetchAll', { ...query, ...moreQuery })
    },
    onChange (current) {
      this.current = current
      this.fetchData({ page: current })
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
.ant-skeleton-header .ant-skeleton-avatar-lg {
    width: 80px;
    height: 80px;
    line-height: 40px;
}

.ant-skeleton-header .ant-skeleton-avatar.ant-skeleton-avatar-circle {
   border-radius: 0 !important;
}
</style>
