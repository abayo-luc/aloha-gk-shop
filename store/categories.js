import { handleNotification, notifiableError } from '../utils/helpers'

const SET_ALL_CATEGORIES = 'SET_ALL_CATEGORIES'

export const state = {
  list: []
}

export const actions = {
  async fetchAll ({ commit }) {
    try {
      const { data } = await this.$axios.$get('/categories', {
        progress: true
      })
      commit(SET_ALL_CATEGORIES, data || [])
    } catch (err) {
      const { error: title, message: text } = notifiableError(err)
      handleNotification({ title, text })
    }
  }
}

export const mutations = {
  [SET_ALL_CATEGORIES] (state, categories) {
    state.list = categories
  }
}

export const getters = {
  all: state => state.list,
  topThree: state => [...state.list].sort((a, b) => b.productsCounter - a.productsCounter).slice(0, 3)
}
