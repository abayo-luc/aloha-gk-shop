const ADD_TO_CART = 'ADD_TO_CART'
export const state = {
  items: {}
}

export const actions = {
  addToCart ({ commit }, product) {
    commit(ADD_TO_CART, product)
  }
}

export const mutations = {
  [ADD_TO_CART] (state, product) {
    if (state.items[product.id]) {
      state.items[product.id] = {
        ...state.items[product.id],
        quantity: ++state.items[product.id].quantity
      }
    } else {
      state.items[product.id] = {
        productId: product.id,
        unitCost: product.listPrice || product.price,
        quantity: 1,
        product
      }
    }
  }
}

export const getters = {
  items: state => Object.values(state.items)
}
