<template>
  <div>
    <div style="background-color: #F5F5F5; padding: 24px;">
      <a-page-header
        :ghost="false"
        title="AlohaGK"
      >
        <template slot="extra">
          <a-badge count="5" :offset="[-2,10]" class="mx-2">
            <a-button shape="circle" type="dashed" @click="showDrawer">
              <a-icon type="shopping-cart" />
            </a-button>
          </a-badge>

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
      :footer="null"
      @ok="handleOk"
    >
      <login-form v-if="openedModal === 'login'" />
      <signup-form v-if="openedModal === 'sign-up'" />
    </a-modal>
    <a-drawer
      title="Add Items"
      placement="right"
      :closable="false"
      :visible="drawerVisible"
      :destroy-on-close="true"
      :width="256*3"
      @close="closeDrawer"
    >
      <shopping-cart />
    </a-drawer>
  </div>
</template>

<script>
import LoginForm from '../Auth/LoginForm.vue'
import SignupForm from '../Auth/SignupForm.vue'
import ShoppingCart from '../Cart/Cart.vue'
export default {
  name: 'ToHeader',
  components: {
    LoginForm,
    SignupForm,
    ShoppingCart
  },
  data () {
    return {
      visible: false,
      drawerVisible: false,
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
      console.log(e)
      this.visible = false
    },
    handleCancel (e) {
      console.log(e)
      this.visible = false
    },
    showDrawer () {
      this.drawerVisible = true
    },
    closeDrawer () {
      this.drawerVisible = false
    }
  }
}
</script>

<style>
</style>
