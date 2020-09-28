<template>
  <div v-if="!isItemEmpty">
    <div class="my-4">
      <a-button
        v-if="selectedRowKeys.length > 0"
        type="danger"
        shape="circle"
        icon="delete"
        class="delete-button"
        @click="removeItems"
      />
    </div>
    <a-table
      :data-source="tableData"
      :columns="columns"
      :scroll="{ y: 500 }"
      :pagination="false"
      :row-selection="rowSelection"
    >
      <div slot="filterDropdown" style="padding: 8px" />
      <a-icon
        slot="filterIcon"
        slot-scope="filtered"
        type="search"
        :style="{ color: filtered ? '#108ee9' : undefined }"
      />
      <template slot="customRender" slot-scope="text, record, index, column">
        <span v-if="searchText && searchedColumn === column.dataIndex">
          <template
            v-for="(fragment, i) in text
              .toString()
              .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
          >
            <mark
              v-if="fragment.toLowerCase() === searchText.toLowerCase()"
              :key="i"
              class="highlight"
            >{{ fragment }}</mark>
            <template v-else>{{ fragment }}</template>
          </template>
        </span>
        <template v-else>
          {{ text }}
        </template>
      </template>
    </a-table>
    <div class="my-5 float-right">
      <a-button size="large" @click="handleLinkClick('/view_cart')">
        View Cart
      </a-button>
      <a-button type="primary" size="large" @click="handleCheckOut">
        Checkout
      </a-button>
    </div>
  </div>
  <div v-else>
    <a-empty />
    <div class="empty-cart">
      <nuxt-link to="/products">
        <a-button type="dashed">
          Expolore Products
        </a-button>
      </nuxt-link>
    </div>
  </div>
</template>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ShoppingCart',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    onClose: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      shippingFee: 1000,
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      selectedRowKeys: [],
      columns: [
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          customRender: (_, item) => {
            const image = item?.product?.images[0]?.url
            switch (item.id) {
              case 'expand':
                return {
                  children: <div>{item.name}</div>,
                  attrs: {
                    colSpan: 3
                  }
                }
              default:
                return (
                  <img src={image} alt="" class="img-fluid rounded shadow-sm" />
                )
            }
          }
        },
        {
          title: 'Proudct',
          dataIndex: 'product.name',
          key: 'product',
          width: '30%',
          customRender: (_, item) => {
            switch (item.id) {
              case 'expand':
                return {
                  attrs: {
                    colSpan: 0
                  }
                }
              default:
                return (
                  <div>
                    <nuxt-link
                      to={`/products/${item.productId}`}
                      class="text-dark d-inline-block align-middle"
                    >
                      {item.product.name}
                    </nuxt-link>
                    <span class="text-muted font-weight-normal font-italic d-block">
                      {item.product.categories?.map(c => (
                        <span class="badge badge-pill badge-light">
                          {c.name}
                        </span>
                      ))}
                    </span>
                  </div>
                )
            }
          }
        },
        {
          title: 'Unit Price',
          dataIndex: 'unitCost',
          key: 'unitPrice',
          customRender: (_, item) => {
            const { unitCost } = item
            switch (item.id) {
              case 'expand':
                return {
                  attrs: {
                    colSpan: 0
                  }
                }
              default:
                return (
                  <div class="row">
                    {new Intl.NumberFormat('en').format(unitCost)}{' '}
                    <span class="small">Rwf</span>
                  </div>
                )
            }
          }
        },
        {
          title: 'Qty',
          dataIndex: 'quantity',
          key: 'quantity',
          customRender: (_, item) => {
            const { quantity } = item
            switch (item.id) {
              case 'expand':
                return {
                  attrs: {
                    colSpan: 0
                  }
                }
              default:
                return <div class="row">{quantity}</div>
            }
          }
        },
        {
          title: 'Total',
          dataIndex: 'total',
          key: 'total',
          customRender: (_, item) => {
            const { quantity, unitCost } = item
            switch (item.key) {
              case 'total':
                return {
                  children: (
                    <strong class="total expanded-content">
                      {this.getSum} <span class="small">Rwf</span>
                    </strong>
                  ),
                  attrs: {
                    colSpan: 2
                  }
                }
              case 'deliveryFees':
                return {
                  children: (
                    <strong class="expanded-content">
                      {this.deliverFee} <span class="small">Rwf</span>
                    </strong>
                  ),
                  attrs: {
                    colSpan: 2
                  }
                }
              default:
                return (
                  <div class="row ">
                    {new Intl.NumberFormat('en').format(quantity * unitCost)}{' '}
                    <span class="small">Rwf</span>
                  </div>
                )
            }
          }
        }
      ]
    }
  },
  computed: {
    ...mapGetters({ isAuthenticated: 'auth/isAuthenticated' }),
    isItemEmpty () {
      return this.items.length === 0
    },
    tableData () {
      return [
        ...this.items,
        {
          name: 'Delivery fees',
          key: 'deliveryFees',
          id: 'expand'
        },
        {
          name: 'Total',
          key: 'total',
          id: 'expand'
        }
      ]
    },
    getSum () {
      const sum = this.items.reduce((prev, current) => {
        return prev + current.unitCost * current.quantity
      }, this.shippingFee)
      return new Intl.NumberFormat('en').format(sum)
    },
    deliverFee () {
      return new Intl.NumberFormat('en').format(1000)
    },
    rowSelection () {
      const { selectedRowKeys } = this
      return {
        selectedRowKeys,
        onChange: this.onSelectChange,
        getCheckboxProps: record => ({
          props: {
            disabled: record.id === 'expand',
            name: record.name
          }
        })
      }
    }
  },

  methods: {
    handleSearch (selectedKeys, confirm, dataIndex) {
      confirm()
      this.searchText = selectedKeys[0]
      this.searchedColumn = dataIndex
    },

    handleReset (clearFilters) {
      clearFilters()
      this.searchText = ''
    },
    onSelectChange (selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
    },
    removeItems () {
      const items = this.items
      const ids = [
        ...this.selectedRowKeys.map(index => items[index]?.productId)
      ].filter(x => x !== undefined)
      this.$store.dispatch('cart/removeFromCart', ids)
    },
    handleLinkClick (url) {
      this.$router.push(url)
    },
    handleCheckOut () {
      if (!this.isAuthenticated) { this.onClose() }
      setTimeout(() => {
        this.$store.dispatch('auth/handleOpenAuth', true)
      }, 200)
    }
  }

}
</script>
<style lang="scss" scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
.total {
  border-bottom: 3px double;
}
img.img-fluid.rounded.shadow-sm {
  width: 5rem;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.expanded-content {
  float: right;
}
.ant-table-row:hover {
  background-color: indigo;
}
.ant-checkbox-wrapper.ant-checkbox-wrapper-disable {
  visibility: hidden !important;
  display: none !important;
}
.delete-button {
  position: absolute;
  left: 2rem;
  top: 4rem;
}
.empty-cart{
  height: 70vh;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>
