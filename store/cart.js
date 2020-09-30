import { handleNotification } from '../utils/helpers'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const SET_CART_MODAL_STATUS = 'SET_CART_MODAL_STATUS'
const CHANGE_QUANTITY = 'CHANGE_QUANTITY'
const SET_SUBMITTING_ORDER = 'SET_SUBMITTING_ORDER'
const ON_SUCCESS_EMPTY_CART = ' ON_SUCCESS_EMPTY_CART'
export const state = {
  items: {},
  isOpen: false,
  isSubmitting: false
}

export const actions = {
  addToCart ({ commit }, product) {
    commit(ADD_TO_CART, product)
  },
  removeFromCart ({ commit }, productsIds) {
    commit(REMOVE_FROM_CART, productsIds)
  },
  openCart ({ commit }, value) {
    commit(SET_CART_MODAL_STATUS, value)
  },
  changeQuantity ({ commit }, data) {
    commit(CHANGE_QUANTITY, data)
  },
  async handlePlaceOrder ({ commit, state }) {
    let isSuccess
    commit(SET_SUBMITTING_ORDER, true)
    try {
      const items = Object.values(state.items).map((item) => {
        const { productId, unitCost, quantity, productAttributes = {} } = item
        return {
          productId,
          unitCost,
          quantity,
          productAttributes
        }
      })
      const data = await this.$axios.$post('/orders', { items })
      isSuccess = true
      commit(ON_SUCCESS_EMPTY_CART, data)
    } catch (err) {
      const { data: { error, message } } = err.response || { data: { message: err.message, error: 'Error' } }
      handleNotification({ text: message, title: error })
      isSuccess = false
    } finally {
      commit(SET_SUBMITTING_ORDER, false)
    }
    return { isSuccess }
  }
}

export const mutations = {
  [ADD_TO_CART] (state, product) {
    if (state.items[product.id]) {
      state.items = {
        ...state.items,
        [product.id]: {
          ...state.items[product.id],
          quantity: ++state.items[product.id].quantity
        }
      }
    } else {
      state.items = {
        ...state.items,
        [product.id]: {
          productId: product.id,
          unitCost: product.listPrice || product.price,
          quantity: 1,
          product
        }
      }
    }
  },
  [REMOVE_FROM_CART] (state, ids) {
    const newItems = { ...state.items }
    ids.forEach((id) => {
      delete newItems[id]
    })
    state.items = { ...newItems }
  },
  [SET_CART_MODAL_STATUS] (state, status) {
    state.isOpen = status
  },
  [CHANGE_QUANTITY] (state, { productId, quantity }) {
    state.items = {
      ...state.items,
      [productId]: {
        ...state.items[productId],
        quantity
      }
    }
  },
  [SET_SUBMITTING_ORDER] (state, status) {
    state.isSubmitting = status
  },
  [ON_SUCCESS_EMPTY_CART] (state, data) {
    state.items = {}
  }
}

export const getters = {
  items: state => Object.values(state.items),
  isCartOpen: state => state.isOpen,
  isPlacingOrder: state => state.isSubmitting
}
