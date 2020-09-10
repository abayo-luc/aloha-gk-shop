import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      storage: window.localStorage,
      modules: ['cart']
    }).plugin(store)
  })
}