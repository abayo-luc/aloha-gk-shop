<template>
  <tr>
    <th scope="col " class="image-column ">
      <img :src="image" alt="" class="img-fluid rounded shadow-sm">
    </th>
    <th scope="col">
      <h5 class="mb-0">
        <a :href="`/products/${item.productId}`" class="text-dark d-inline-block align-middle">{{ item.product.name }}</a>
      </h5>
      <span class="text-muted font-weight-normal font-italic d-block">Category: {{ categories }}</span>
    </th>
    <td scope="col">
      <strong class="text-center">{{ formatNumber(item.unitCost) }}</strong>
    </td>
    <td scope="col">
      <strong class="text-center">{{ item.quantity }}</strong>
    </td>
    <td scope="col">
      <strong class="text-center">{{ totalCost }}</strong>
    </td>
    <!-- <td scope="col" >
      <a-button icon="delete" shape="circle" type="danger" />
    </td> -->
  </tr>
</template>
<script>
export default {
  name: 'CartItem',
  props: ['item'],
  computed: {
    image () {
      return this.item.product.images[0].url
    },
    categories () {
      return this.item.product.categories.map(c => c.name).join(',')
    },

    totalCost () {
      return this.formatNumber(this.item.unitCost * this.item.quantity)
    }
  },
  methods: {
    formatNumber (value) {
      return new Intl.NumberFormat('en').format((value) || 0)
    }
  }
}
</script>
<style lang="css" scoped>
.image-column{
  width: 5rem;
}
</style>
