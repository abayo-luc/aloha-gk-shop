const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS'
const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCTS'

export const state = () => ({
  list: [],
  product: { isLoading: true, reviews: [] }
})

export const actions = {
  async fetchAll ({ commit }, data) {
    try {
      let params = ''
      if (data) {
        params = Object.keys(data).reduce((prev, current) => `${prev}${prev ? '&' : '?'}${current}=${data[current]}`, '')
      }
      const {
        data: { rows }
      } = await this.$axios.$get(
        `/products${params}`,
        { progress: true },
        { params: data }
      )
      commit(SET_ALL_PRODUCTS, rows || [])
    } catch (error) {
      console.log(error)
    }
  },
  async fetchSingleProduct ({ commit }, id) {
    try {
      const response = await this.$axios.$get(`/products/${id}`, {
        progress: true
      })
      commit(SET_SINGLE_PRODUCT, response?.data || {})
    } catch (error) {
      console.log(error)
    }
  }
}

export const mutations = {
  [SET_ALL_PRODUCTS] (state, products) {
    state.list = products
  },
  [SET_SINGLE_PRODUCT] (state, product) {
    state.product = { ...product, isLoading: false }
  }
}

export const getters = {
  all: state => state.list,
  one: state => state.product
}
