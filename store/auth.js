
const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const state = {
  login: {
    isLoaing: false
  },
  currentUser: null
}

export const actions = {
  async handleLogin ({ commit }, data) {
    try {
      const response = await await this.$axios.$post('/authentications/sign-in', data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}

export const mutations = {
  [SET_CURRENT_USER] (state, data) {
    state.currentUser = data
  }
}

export const getters = {
  currentUser: state => state.currentUser
}
