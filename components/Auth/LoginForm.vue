<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'email',
          { rules: [{ required: true, message: 'Please input your email!' }] },
        ]"
        placeholder="email"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>
    <a-form-item
      :validate-status="errors.password || errors.message ? 'error' : undefined"
      :help="errors.password || errors.message"
    >
      <a-input
        v-decorator="[
          'password',
          {
            rules: [{ required: true, message: 'Please input your Password!' }],
          },
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        Remember me
      </a-checkbox>
      <a class="login-form-forgot" href=""> Forgot password </a>
      <a-button
        type="primary"
        html-type="submit"
        class="login-form-button"
        :loading="isAuthenticating"
      >
        Log in
      </a-button>
      <div class="text-center">
        <span>Or</span>
      </div>
      <a-button type="link" block @click="handleRegisterNow">
        register now!
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    handleClose: {
      type: Function,
      required: true
    },
    handleModalShow: {
      type: Function,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticating: 'auth/isAuthenticating',
      errors: 'auth/errors'
    })
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.dispatch('auth/handleLogin', values).then((res) => {
            const { isSuccess } = res
            if (isSuccess) { this.handleClose(isSuccess) }
          })
        }
      })
    },
    handleRegisterNow () {
      this.handleModalShow('sign-up', 'User Registration', 'Submit')
    }
  }
}
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
