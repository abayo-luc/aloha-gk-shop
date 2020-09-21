<template>
  <a-form
    id="component-form-auth"
    :form="form"
    class="login-form"
    method="post"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'email',
          { rules: [{ required: true, message: 'Please input your email!' }] },
        ]"
        size="large"
        placeholder="email"
        v-bind="email"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        size="large"
        type="password"
        placeholder="Password"
        v-bind="password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" class="login-form-button" size="large">
        Login
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: 'SignupForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.dispatch('auth/handleLogin', { email: this.email, password: this.password })
        }
      })
    }
  }
}
