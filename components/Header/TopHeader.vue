<template>
  <div>
    <b-navbar toggleable="lg" class="navbar py-md-2">
      <b-navbar-brand href="/">
        <span class="text-white">AlohaGK</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <a-button v-if="!isAuthenticated" icon="login" class="mr-md-2 my-1" @click="showModal('login', 'User Login', 'Login')">
            Login
          </a-button>
          <a-button v-else icon="logout" class="mr-md-2 my-1" @click="onLogout">
            Logout
          </a-button>
          <a-button v-if="!isAuthenticated" ghost icon="user-add" class="my-1" @click="showModal('sign-up', 'User Registration', 'Submit')">
            Register
          </a-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <a-modal
      v-model="visible"
      :title="modalTitle"
      :destroy-on-close="true"
      class="shopping-cart-drawer"
      :footer="null"
      @ok="handleOk"
    >
      <login-form v-if="openedModal === 'login'" />
      <signup-form v-if="openedModal === 'sign-up'" />
    </a-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LoginForm from '../Auth/LoginForm.vue'
import SignupForm from '../Auth/SignupForm.vue'
export default {
  name: 'ToHeader',
  components: {
    LoginForm,
    SignupForm
  },
  data () {
    return {
      visible: false,
      openedModal: null,
      modalTitle: '',
      modalButtonTitle: ''
    }
  },
  computed: {
    ...mapGetters({ isAuthenticated: 'auth/isAuthenticated' })
  },
  methods: {
    showModal (value, title, buttonTitle) {
      this.visible = true
      this.openedModal = value
      this.modalTitle = title
      this.modalButtonTitle = buttonTitle
    },
    handleOk (e) {
      this.visible = false
    },
    handleCancel (e) {
      this.visible = false
    },
    onLogout () {
      this.$store.dispatch('auth/handleLogout')
    }
  }
}
</script>

<style lang="css" scoped>
.container-fluid{
  margin: 0;
  padding: 0;
}
.navbar{
  background-color: #c82f63;
  color: #fff
}
.main-header{
  background-color: #220e24;
}
</style>
