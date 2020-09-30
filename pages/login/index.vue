<template>
  <div class="container">
    <div class="row  justify-content-md-center login-form">
      <div class="form-container col-md-6 col-12">
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
            <nuxt-link to="/register">
              <a-button type="link" block>
                register now!
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
  data () {
    return {
      errors: {}
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticating: 'auth/isAuthenticating'
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
            const { isSuccess, errors } = res

            if (isSuccess) {
              if (['/login', '/register'].includes(this.$router.history._startLocation)) {
                this.$router.push('/')
              } else {
                this.$router.push(this.$router.history._startLocation)
              }
            } else if (errors) {
              this.errors = errors
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
