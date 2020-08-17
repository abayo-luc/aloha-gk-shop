<template>
  <div>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="border-0 bg-light">
              <div class="p-2 px-3 text-uppercase">
                Product
              </div>
            </th>
            <th scope="col" class="border-0 bg-light">
              <div class="py-2 text-uppercase">
                Price
              </div>
            </th>
            <th scope="col" class="border-0 bg-light">
              <div class="py-2 text-uppercase">
                Quantity
              </div>
            </th>
            <th scope="col" class="border-0 bg-light">
              <div class="py-2 text-uppercase">
                Remove
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <cart-item />
          <cart-item />
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
import CartItem from './CartItem.vue'
export default {
  name: 'ShoppingCart',
  components: {
    CartItem
  }
}
</script>
