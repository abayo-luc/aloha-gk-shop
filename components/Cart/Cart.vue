<template>
  <div>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="border-0 bg-dark">
              <div class="p-2 px-3 text-uppercase text-light">
                Image
              </div>
            </th>
            <th scope="col" class="border-0 bg-dark">
              <div class="p-2 px-3 text-uppercase text-light">
                Product
              </div>
            </th>
            <th scope="col" class="border-0 bg-dark ">
              <div class="py-2 text-uppercase text-light">
                Price <small>(Rwf)</small>
              </div>
            </th>
            <th scope="col" class="border-0 bg-dark">
              <div class="py-2 text-uppercase text-light">
                Qty
              </div>
            </th>
            <th scope="col" class="border-0 bg-dark">
              <div class="py-2 text-uppercase text-light">
                Total <small>(Rwf)</small>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <cart-item v-for="item in items" :key="item.id" :item="item" />
          <tr v-if="items.length > 0">
            <th scope="row" colspan="2">
              <strong>Delivery fees</strong>
            </th>
            <td colspan="3" class="text-right">
              <strong>
                Rwf {{ formatCurrency(deliverFee) }}
              </strong>
            </td>
          </tr>
          <tr v-if="items.length > 0">
            <th scope="row">
              <strong>Total</strong>
            </th>
            <td colspan="4" class="text-right">
              <strong class="total">
                Rwf {{ getTotal }}
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      :style="{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e8e8e8',
        padding: '10px 16px',
        textAlign: 'right',
        left: 0,
        background: '#fff',
        borderRadius: '0 0 4px 4px',
      }"
    >
      <a-button type="primary" block size="large">
        Proceed to buy
      </a-button>
    </div>
  </div>
</template>

<script>
import { formatCurrency } from '../../utils/helpers'
import CartItem from './CartItem.vue'
export default {
  name: 'ShoppingCart',
  components: {
    CartItem
  },
  props: ['items'],
  data () {
    return {
      deliverFee: 1000
    }
  },
  computed: {
    getTotal () {
      const sum = this.items.reduce((prev, current) => {
        return prev + (current.unitCost * current.quantity)
      }, 0)
      return new Intl.NumberFormat('en').format(sum)
    }
  },
  methods: {
    formatCurrency
  }
}
</script>
<style lang="css" scoped>
.total{
  border-bottom: 3px double;
}
</style>
