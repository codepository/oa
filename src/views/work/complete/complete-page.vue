<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    xx
  </v-container>
</template>
<script>
export default {
  name: 'CompletePage',
  data: () => ({
    procInstID: ''
  }),
  mounted () {
    this.procInstID = this.$route.query.procInstID
    console.log(this.procInstID)
  },
  methods: {}
}
</script>
