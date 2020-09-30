export default function ({ $axios, store }) {
  $axios.onRequest((config) => {
    // const { auth } = await localStorage.getItem('vuex')
    config.headers.common.Authorization = `Bearer ${store.state.auth.token}`
  })
}
