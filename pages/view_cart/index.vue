<template>
  <div class="container my-5">
    <a-table :columns="columns" :data-source="items" :pagination="false">
      <a-button
        slot="action"
        slot-scope="_, record"
        type="primary"
        shape="circle"
        icon="delete"
        @click="handleDelete(record)"
      />
      <p slot="expandedRowRender" slot-scope="record" style="margin: 0">
        {{ getProductDescription(record) }}
        <br>
        <span v-for="c in record.product.categories" :key="c.id" class="badge badge-pill badge-light">
          {{ c.name }}
        </span>
      </p>
      <div slot="quantity" slot-scope="quantity, record">
        <a-input-number
          size="small"
          :min="1"
          :max="100000"
          :default-value="quantity"
          class="quantity-input"
          @change="qty => onChangeQuantity(qty, record)"
        />
      </div>
      <div slot="image" slot-scope="_, record">
        <img
          :src="getImageUrl(record)"
          alt=""
          class="img-fluid rounded shadow-sm"
        >
      </div>
    </a-table>
    <div v-if="items.length > 0" class="box_cart">
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
              Proceed to Checkout
            </a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
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
          customRender: (_, record) => record.product.name
        },
        {
          title: 'PRICE',
          dataIndex: 'unitCost',
          key: 'unitCost',
          customRender: (_, record) => {
            const { unitCost } = record
            return (
              <div class="row ">
                {new Intl.NumberFormat('en').format(unitCost)}
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
                {new Intl.NumberFormat('en').format(quantity * unitCost)}
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
    ...mapGetters({ items: 'cart/items' }),
    subTotal () {
      const sum = this.items.reduce((prev, current) => {
        return prev + current.unitCost * current.quantity
      }, 0)
      return new Intl.NumberFormat('en').format(sum)
    },
    deliverFee () {
      return new Intl.NumberFormat('en').format(this.shippingFee)
    },
    totalSum () {
      const sum = this.items.reduce((prev, current) => {
        return prev + current.unitCost * current.quantity
      }, this.shippingFee)
      return new Intl.NumberFormat('en').format(sum)
    }
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
