export const state = () => ({
  list: []
})

export const actions = {
  async fetchAll ({ commit }) {
    try {
      const response = await this.$axios.$get('/products', { progress: true })
      commit('setProducts', response?.data || [])
    } catch (error) {
      console.log(error)
    }
  }
}

export const mutations = {
  setProducts (state, products) {
    state.list = products
  }
}

export const getters = {
  getProducts: state => state.list
}
