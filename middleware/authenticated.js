export default async ({ store, redirect }) => {
  // If the user is not authenticated
  const token = store.state.auth.token || await JSON.parse(localStorage.getItem('vuex'))?.auth?.token
  if (!token) {
    return redirect('/login')
  }
}
