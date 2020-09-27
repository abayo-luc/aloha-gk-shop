const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS'
const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCTS'
const SET_IS_LOADING = 'SET_IS_LOADING'
export const state = () => ({
  list: [],
  product: { isLoading: true, reviews: [] },
  count: 0,
  limit: 25,
  pages: 0
})

export const actions = {
  async fetchAll ({ commit, state }, data) {
    commit(SET_IS_LOADING, true)
    try {
      let params = `?limit=${state.limit}`
      if (data) {
        params = Object.keys(data).reduce((prev, current) => `${prev}&${current}=${data[current]}`, params)
      }
      const {
        data: { rows = [], count = 0 }
      } = await this.$axios.$get(
        `/products${params}`,
        { progress: true },
        { params: data }
      )
      commit(SET_ALL_PRODUCTS, { rows, count })
    } catch (error) {
      commit(SET_IS_LOADING)
      alert(error.message)
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
  [SET_IS_LOADING] (state, status = false) {
    state.isLoading = status
  },
  [SET_ALL_PRODUCTS] (state, data) {
    state.list = data.rows
    state.count = data.count
    state.isLoading = false
    state.pages = Math.ceil(data.count / state.limit)
  },
  [SET_SINGLE_PRODUCT] (state, product) {
    state.product = { ...product, isLoading: false }
  }
}

export const getters = {
  all: state => state.list,
  count: state => state.count,
  one: state => state.product,
  isFetching: state => state.isLoading,
  pages: state => state.pages
}
