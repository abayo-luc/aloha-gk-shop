<template>
  <div class="container my-5">
    <orders-table :data="orders" :loading="isFetching" :handle-filters="handleFilters" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OrdersTable from '@/components/orders/table.vue'
export default {
  middleware: 'authenticated',
  components: {
    OrdersTable
  },
  computed: {
    ...mapGetters({ orders: 'orders/all', pendingOrders: 'orders/pending', isFetching: 'orders/isFetching' })
  },
  mounted () {
    this.fetchOrders()
  },
  methods: {
    fetchOrders (query = {}) {
      this.$store.dispatch('orders/fetchAll', query)
    },
    handleFilters (filteres) {
      this.fetchOrders(filteres)
    }
  }
}
</script>

<style>

</style>
