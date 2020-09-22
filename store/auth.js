import { isValueEmpty } from '../utils/helpers'

const AUTH_ERROR = 'AUTH_ERROR'
const REGISTRATION_ERROR = 'REGISTRATION_ERROR'
const SET_LOADING = 'SET_LOADING'
const SET_AUTH_DATA = 'SET_AUTH_DATA'
export const state = {
  currentUser: null,
  errors: {},
  regErrors: {},
  isLoaing: false,
  token: null
}

export const actions = {
  async handleRegistration ({ commit }, data) {
    commit(SET_LOADING, true)
    const { email, username, password } = data
    try {
      await this.$axios.$post('/authentications/sign-up', { email, password, username })
      // console.log(response)
    } catch (err) {
      const { error } = err.response?.data
      commit(REGISTRATION_ERROR, error)
    } finally {
      commit(SET_LOADING)
    }
  },
  async handleLogin ({ commit }, data) {
    commit(SET_LOADING, true)
    try {
      const { email, password } = data
      const response = await this.$axios.$post('/authentications/sign-in', { email, password })
      commit(SET_AUTH_DATA, response.data)
    } catch (err) {
      const { error = { message: err.message } } = err.response?.data
      commit(AUTH_ERROR, error)
    } finally {
      commit(SET_LOADING)
    }
  },
  handleLogout ({ commit }) {
    commit(SET_AUTH_DATA, { token: null, user: null })
  }
}

export const mutations = {
  [SET_LOADING] (state, value = false) {
    state.isLoaing = value
    if (value) {
      state.regErrors = {}
      state.errors = {}
    }
  },
  [AUTH_ERROR] (state, data) {
    state.errors = data
  },
  [REGISTRATION_ERROR] (state, data) {
    state.regErrors = data
  },
  [SET_AUTH_DATA] (state, data) {
    state.currentUser = data.user
    state.token = data.token
  }
}

export const getters = {
  isAuthenticating: state => state.isLoaing,
  regErrors: state => state.regErrors,
  errors: state => state.errors,
  isAuthenticated: state => !isValueEmpty(state.token)
}
