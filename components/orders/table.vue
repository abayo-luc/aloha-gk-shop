<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :row-key="record => record.id"
    :loading="loading"
    :pagination="{defaultPageSize: 25}"
    @change="handleTableChange"
  >
    <nuxt-link slot="reference" slot-scope="text, record" :to="`/orders/${record.id}`">
      {{ record.reference || record.id }}
    </nuxt-link>
    <span slot="totalAmount" slot-scope="text">{{ computeTotal(text) }}<small class="currency">Rwf</small></span>
    <span slot="status" slot-scope="text">
      <a-tag
        :color="getStatusColor(text)"
      >
        {{ text }}
      </a-tag>
    </span>
    <span slot="createdAt" slot-scope="text">{{ getDate(text) }}</span>
    <div slot="paid" slot-scope="text">
      <a-checkbox :default-checked="text" disabled />
    </div>
  </a-table>
</template>
<script>
import { formatCurrency, formatDate } from '../../utils/helpers'
const columns = [
  {
    title: 'ID',
    dataIndex: 'orderId',
    key: 'orderId'
  },
  {
    title: 'Reference Id',
    dataIndex: 'reference',
    key: 'reference',
    ellipsis: true,
    scopedSlots: { customRender: 'reference' }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    scopedSlots: { customRender: 'status' },
    filters: [
      { text: 'Ordered', value: 'ordered' },
      { text: 'Delivered', value: 'delivered' },
      { text: 'Cancelled', value: 'cancelled' }
    ]
  },
  {
    title: 'Total Amount',
    dataIndex: 'totalAmount',
    key: 'totalAmount',
    scopedSlots: { customRender: 'totalAmount' }
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    scopedSlots: { customRender: 'createdAt' }
  },
  {
    title: 'Paid',
    dataIndex: 'paid',
    key: 'paid',
    scopedSlots: { customRender: 'paid' }
  }
]
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      require: true
    },
    handleFilters: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      columns
    }
  },
  methods: {
    computeTotal (value) {
      const withDeliver = parseInt(value) + 100
      return formatCurrency(withDeliver)
    },
    getDate (date) {
      return formatDate(date)
    },
    getStatusColor (status) {
      switch (status) {
        case 'ordered':
          return 'green'
        case 'cancelled':
          return 'volcano'
        default:
          return '#ccc'
      }
    },
    handleTableChange (pagination, filters, sorter) {
      const { status } = filters
      this.handleFilters({ status: status.join(',') })
    }
  }
}
</script>
