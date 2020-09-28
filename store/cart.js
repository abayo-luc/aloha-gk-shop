const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const SET_CART_MODAL_STATUS = 'SET_CART_MODAL_STATUS'
const CHANGE_QUANTITY = 'CHANGE_QUANTITY'
export const state = {
  items: {},
  isOpen: false
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
  }
}

export const getters = {
  items: state => Object.values(state.items),
  isCartOpen: state => state.isOpen
}
