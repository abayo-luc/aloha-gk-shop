<template>
  <a-result status="500" title="Ooops, that's our bad." sub-title="We're not exactly sure what happened, but our servers say something is wrong.">
    <template #extra>
      <nuxt-link to="/">
        <a-button type="primary">
          Back Home
        </a-button>
      </nuxt-link>
    </template>
  </a-result>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
