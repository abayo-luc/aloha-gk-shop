<template>
  <div class="container">
    <div class="row  justify-content-md-center login-form">
      <div class="form-container col-md-6 col-12">
        <a-form
          id="component-form-auth"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <a-form-item
            :validate-status="errors.phoneNumber? 'error' : undefined "
          >
            <a-input
              v-decorator="[
                'phoneNumber',
                { rules: [{ required: true, message: 'Please input your phone number!' }] },
              ]"
              size="large"
              placeholder="Phone number"
            >
              <a-icon slot="prefix" type="phone" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item
            :validate-status=" errors.email? 'error' : undefined "
            :help="errors.email"
          >
            <a-input
              v-decorator="[
                'email',
                { rules: [{ required: true, message: 'Please input your email!' }] },
              ]"
              size="large"
              placeholder="email"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item
            :validate-status="errors.password ? 'error' : undefined "
            :help="errors.password"
          >
            <a-input
              v-decorator="[
                'password',
                { rules: [{ required: true, message: 'Please input your Password!' }] },
              ]"
              size="large"
              type="password"
              placeholder="Password"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" class="login-form-button" size="large" :loading="isAuthenticating">
              Sign up
            </a-button>
            <div class="text-center">
              <span>Or</span>
            </div>
            <nuxt-link to="/login">
              <a-button type="link" block>
                Already registered, Login
              </a-button>
            </nuxt-link>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
//   middleware: 'gohome',
  computed: {
    ...mapGetters({ isAuthenticating: 'auth/isAuthenticating', errors: 'auth/regErrors' })
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.dispatch('auth/handleRegistration', values).then((res) => {
            const { isSuccess } = res
            if (isSuccess) {
              this.$router.push('/login')
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#component-form-auth .login-form {
  max-width: 300px;
}
#component-form-auth .login-form-forgot {
  float: right;
}
#component-form-auth .login-form-button {
  width: 100%;
}
.login-form{
    position: relative;
}
.form-container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
    form{
        width: 80%;
    }
}
</style>
