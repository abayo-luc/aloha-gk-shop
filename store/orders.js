import {
  geQueryString,
  handleNotification,
  notifiableError
} from '../utils/helpers'

const SET_IS_LOADING = 'SET_IS_LOADING'
const SET_USER_ORDERS = 'SET_USER_ORDERS'
const SET_ONE_ORDER_DATA = 'SET_ONE_ORDER_DATA'
export const state = {
  isLoading: false,
  list: [],
  count: null,
  limit: 25,
  oneOrder: { items: [] }
}

export const actions = {
  async fetchAll ({ commit, state }, query) {
    commit(SET_IS_LOADING, true)
    try {
      let queryParams = `?limit=${state.limit || 25}`
      if (query) {
        queryParams = geQueryString(query, queryParams)
      }
      const response = await this.$axios.get(`/orders${queryParams}`)
      const {
        data: { rows, count }
      } = response.data
      commit(SET_USER_ORDERS, { list: rows, count })
    } catch (err) {
      const { error: title, message: text } = notifiableError(err)
      handleNotification({ title, text })
    } finally {
      commit(SET_IS_LOADING, false)
    }
  },
  async fetchOne ({ commit }, id) {
    commit(SET_IS_LOADING, true)
    try {
      const { data: { data } } = await this.$axios.get(`/orders/${id}`)
      commit(SET_ONE_ORDER_DATA, data)
    } catch (err) {
      const { error: title, message: text } = notifiableError(err)
      handleNotification({ title, text })
    } finally {
      commit(SET_IS_LOADING, false)
    }
  }
}

export const mutations = {
  [SET_IS_LOADING] (state, status) {
    state.isLoading = status
  },
  [SET_USER_ORDERS] (state, data) {
    state.list = data.list
    state.count = data.count
  },
  [SET_ONE_ORDER_DATA] (state, data) {
    state.oneOrder = data
  }
}

const filterOrders = (orders, status) =>
  orders.filter(order => order.status === status)

export const getters = {
  all: state => state.list,
  pending: state => filterOrders(state.list, 'ordered'),
  delivered: state => filterOrders(state.list, 'delivered'),
  cancelled: state => filterOrders(state.list, 'cancelled'),
  isFetching: state => state.isLoading,
  oneOrder: state => state.oneOrder
}
