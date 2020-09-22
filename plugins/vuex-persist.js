import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      storage: window.localStorage,
      reducer: state => ({ cart: state.cart, auth: { token: state.auth.token, currentUser: state.auth.currentUser } })
    }).plugin(store)
  })
}
