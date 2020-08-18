<template>
  <div class="main-header">
    <div style="background-color: #c82f63; padding: 24px;">
      <a-page-header
        :ghost="false"
        title="AlohaGK"
      >
        <template slot="extra">
          <a-button key="2" icon="user-add" class="mx-2" @click="showModal('sign-up', 'User Registration', 'Submit')">
            SignUp
          </a-button>
          <a-button key="1" type="primary" icon="user" @click="showModal('login', 'User Login', 'Login')">
            Login
          </a-button>
        </template>
      </a-page-header>
    </div>
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
    }
  }
}
</script>

<style lang="css" scoped>
.main-header{
  background-color: #220e24;
}
</style>
