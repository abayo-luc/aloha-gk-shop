<template>
  <div class="container ">
    <div class="mt-md-5 mb-md-3">
      <a-descriptions title="Order Info">
        <a-descriptions-item label="Refered ID">
          {{ order.ireference }}
        </a-descriptions-item>
        <a-descriptions-item label="Names">
          {{ customer.names }}
        </a-descriptions-item>
        <a-descriptions-item label="Telephone">
          {{ customer.phone }}
        </a-descriptions-item>
        <a-descriptions-item label="Status">
          <a-tag
            :color="orderColor"
          >
            {{ order.status }}
          </a-tag>
        </a-descriptions-item>
        <a-descriptions-item label="Customer Address">
          {{ order.hippingAddress || customer.address || 'N/A' }}
        </a-descriptions-item>
        <a-descriptions-item label="Shipping Address">
          {{ order.hippingAddress || 'N/A' }}
        </a-descriptions-item>
        <a-descriptions-item label="Ordered Date">
          {{ getDate(order.createdAt) }}
        </a-descriptions-item>
        <a-descriptions-item label="Shipping Date">
          {{ getDate(order.shippedOn) || 'N/A' }}
        </a-descriptions-item>
      </a-descriptions>
    </div>
    <a-table
      :columns="columns"
      :data-source="order.items"
      :row-key="record => record.id"
      :pagination="false"
      :loading="isFetching"
    >
      <nuxt-link
        slot="name"
        slot-scope="_, record"
        :to="`/products/${getProduct(record).id}`"
      >
        <span>{{ getProduct(record).name }}</span>
      </nuxt-link>
      <p slot="expandedRowRender" slot-scope="record" style="margin: 0">
        {{ getProductDescription(record) }}
        <br>
      </p>
      <nuxt-link
        slot="image"
        slot-scope="_, record"
        :to="`/products/${getProduct(record).id}`"
      >
        <img
          :src="getImageUrl(record)"
          alt=""
          class="img-fluid rounded shadow-sm"
        >
      </nuxt-link>
    </a-table>
    <div class="box_cart">
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-xl-4 col-lg-4 col-md-6">
            <ul>
              <li><span>Subtotal</span> {{ subTotal }} <small>Rwf</small></li>
              <li>
                <span>Deliver fee</span> {{ deliverFee }} <small>Rwf</small>
              </li>
              <li><span>Total</span> {{ totalSum }} <small>Rwf</small></li>
            </ul>
            <a-button type="primary" block>
              Request Order Update Info
            </a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { formatCurrency, formatDate } from '../../utils/helpers'
export default {
  middleware: 'authenticated',
  data () {
    return {
      shippingFee: 1000,
      columns: [
        {
          title: 'PRODUCT',
          dataIndex: 'image',
          key: 'image',
          slots: { title: 'image' },
          scopedSlots: { customRender: 'image' }
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          scopedSlots: { customRender: 'name' }
          //   customRender: (_, record) => record.product.name
        },
        {
          title: 'PRICE',
          dataIndex: 'unitCost',
          key: 'unitCost',
          customRender: (_, record) => {
            const { unitCost } = record
            return (
              <div class="row ">
                {formatCurrency(unitCost)}
                <span class="small currency">Rwf</span>
              </div>
            )
          }
        },
        {
          title: 'QUANTITY',
          dataIndex: 'quantity',
          key: 'quantity',
          width: '20%',
          slots: { title: 'quantity' },
          scopedSlots: { customRender: 'quantity' }
        },
        {
          title: 'SUBTOTAL',
          dataIndex: 'total',
          key: 'total',
          customRender: (_, record) => {
            const { quantity, unitCost } = record
            return (
              <div class="row ">
                {formatCurrency(quantity * unitCost)}
                <span class="small currency">Rwf</span>
              </div>
            )
          }
        },
        {
          title: '',
          dataIndex: '',
          key: 'x',
          scopedSlots: { customRender: 'action' }
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      isFetching: 'orders/isFetching',
      order: 'orders/oneOrder'
    }),
    subTotal () {
      return formatCurrency(this.order.subTotal)
    },
    deliverFee () {
      return formatCurrency(this.order.deliveryFee)
    },
    totalSum () {
      return formatCurrency(this.order.totalAmount)
    },
    orderColor () {
      switch (this.order.status) {
        case 'ordered':
          return 'green'
        case 'cancelled':
          return 'volcano'
        default:
          return '#ccc'
      }
    },
    customer () {
      return this.order?.customer || {}
    }
  },
  mounted () {
    const { id } = this.$route.params
    this.$store.dispatch('orders/fetchOne', id)
  },
  methods: {
    onChangeQuantity (quantity, record) {
      this.$store.dispatch('cart/changeQuantity', {
        productId: record.productId,
        quantity
      })
    },
    getImageUrl (record) {
      return record.product?.images[0]?.url
    },
    getProductDescription (record) {
      return record.product?.shortDescription
    },
    handleDelete (record) {
      this.$store.dispatch('cart/removeFromCart', [record.productId])
    },
    getProduct (record) {
      return record.product || {}
    },
    getDate (date) {
      if (date) {
        return formatDate(date)
      }
      return null
    }
  }
}
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.currency {
  margin: 5px;
}
img.img-fluid.rounded.shadow-sm {
  width: 5rem;
}

.ant-input-number-input {
  width: 100%;
  height: 30px;
  padding: 0 11px;
  text-align: left;
  background-color: transparent;
  border: 0;
  border-radius: 4px;
  outline: 0;
  transition: all 0.3s linear;
  -moz-appearance: textfield !important;
  text-align: center;
}

.box_cart {
  background-color: #fff;
  padding: 30px 0;
  text-align: right;
}

.box_cart ul {
  list-style: none;
  margin: 0 0 15px 0;
  padding: 0;
  font-weight: 500;
  font-size: 16px;
  font-size: 1rem;
  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  li span {
    float: left;
  }
  li:last-child {
    margin-top: 10px;
    text-transform: uppercase;
    font-weight: bold;
    color: #c82f63;
    font-size: 21px;
    font-size: 1.3125rem;
  }
}
</style>
