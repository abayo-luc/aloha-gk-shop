<template>
  <div>
    <b-navbar toggleable="lg" class="navbar py-md-2">
      <nuxt-link to="/">
        <b-navbar-brand>
          <span class="text-white">AlohaGK</span>
        </b-navbar-brand>
      </nuxt-link>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <a-button v-if="!isAuthenticated" icon="login" class="mr-md-2 my-1" @click="showAuthModel('login', 'User Login', 'Login')">
            Login
          </a-button>

          <a-dropdown v-else :trigger="['click', 'hover']">
            <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">
              {{ getNameInitials || 'U' }}
            </a-avatar>
            <a-menu slot="overlay">
              <a-menu-item key="0">
                <nuxt-link to="/profile">
                  Profile
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="1">
                <nuxt-link to="/orders">
                  My Orders
                </nuxt-link>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="3">
                <a-button icon="logout" class="mr-md-2 my-1" @click="onLogout">
                  Logout
                </a-button>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
          <a-button v-if="!isAuthenticated" ghost icon="user-add" class="my-1" @click="showAuthModel('sign-up', 'User Registration', 'Submit')">
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
      <login-form v-if="openedModal === 'login'" :handle-close="handleOk" :handle-modal-show="showAuthModel" />
      <signup-form v-if="openedModal === 'sign-up'" :handle-modal-show="showAuthModel" />
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
      visible: this.isVisible,
      openedModal: null,
      modalTitle: '',
      modalButtonTitle: ''
    }
  },
  computed: {
    ...mapGetters({ isAuthenticated: 'auth/isAuthenticated', isVisible: 'auth/isLoginOpen', user: 'auth/currentUser' }),
    getNameInitials () {
      return this.user?.names?.split('')[0]
    }
  },
  methods: {
    showAuthModel (value, title, buttonTitle) {
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
