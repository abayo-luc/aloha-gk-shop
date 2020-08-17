<template>
  <div style="background-color: #F5F5F5; padding: 24px;">
    <a-page-header
      :ghost="false"
      title="AlohaGK"
    >
      <template slot="extra">
        <a-badge count="0" :offset="[-2,10]">
          <a-button shape="circle" type="dashed">
            <a-icon type="shopping-cart" />
          </a-button>
        </a-badge>

        <a-button key="2" icon="user-add">
          SignUp
        </a-button>
        <a-button key="1" type="primary" icon="user">
          Login
        </a-button>
      </template>
    </a-page-header>
  </div>
</template>

<script>
export default {
  name: 'ToHeader'
}
</script>

<style>
</style>
