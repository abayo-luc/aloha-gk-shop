import { isValueEmpty } from '../utils/helpers'

const AUTH_ERROR = 'AUTH_ERROR'
const REGISTRATION_ERROR = 'REGISTRATION_ERROR'
const SET_LOADING = 'SET_LOADING'
const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_LOGIN_FORM_STATUS = 'SET_LOGIN_FORM_STATUS'
export const state = {
  isLoginOpen: false,
  currentUser: null,
  errors: {},
  regErrors: {},
  isLoaing: false,
  token: null
}

export const actions = {
  async handleRegistration ({ commit }, data) {
    let isSuccess = false
    let errors
    commit(SET_LOADING, true)
    const { email, username, password } = data
    try {
      await this.$axios.$post('/authentications/sign-up', { email, password, username })
      isSuccess = true
    } catch (err) {
      const { error } = err.response?.data
      commit(REGISTRATION_ERROR, error)
      errors = error
    } finally {
      commit(SET_LOADING)
    }
    return { isSuccess, errors }
  },
  async handleLogin ({ commit }, data) {
    let isSuccess = false
    let errors
    commit(SET_LOADING, true)
    try {
      const { email, password } = data
      const response = await this.$axios.$post('/authentications/sign-in', { email, password })
      isSuccess = true
      commit(SET_AUTH_DATA, response.data)
    } catch (err) {
      const { error = { message: err.message } } = err.response?.data
      errors = error
      commit(AUTH_ERROR, error)
      isSuccess = false
    } finally {
      commit(SET_LOADING)
    }
    return { isSuccess, errors }
  },
  handleLogout ({ commit }) {
    this.$router.push('/login')
    commit(SET_AUTH_DATA, { token: null, user: null })
  },
  handleOpenAuth ({ commit }, value) {
    commit(SET_LOGIN_FORM_STATUS, value)
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
  },
  [SET_LOGIN_FORM_STATUS] (state, status) {
    state.isLoginOpen = status
  }
}

export const getters = {
  isAuthenticating: state => state.isLoaing,
  regErrors: state => state.regErrors,
  errors: state => state.errors,
  isAuthenticated: state => !isValueEmpty(state.token),
  isLoginOpen: state => state.isLoginOpen,
  currentUser: state => state.currentUser
}
