const SET_ALL_CATEGORIES = 'SET_ALL_CATEGORIES'

export const state = {
  list: []
}

export const actions = {
  async fetchAll ({ commit }) {
    try {
      const { data: { rows } } = await this.$axios.$get('/categories', { progress: true })
      commit(SET_ALL_CATEGORIES, rows || [])
    } catch (error) {
      console.log(error)
    }
  }
}

export const mutations = {
  [SET_ALL_CATEGORIES] (state, categories) {
    state.list = categories
  }
}

export const getters = {
  all: state => state.list
}
