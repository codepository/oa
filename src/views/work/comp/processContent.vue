<template>
  <v-card>
    <p>流程内容</p>
    <p>流程内容</p>
    <p>流程内容</p>
    <p>流程内容</p>
    <p>流程内容</p>
    <p>流程内容</p>
    <p>流程内容</p>
    <p>流程内容</p>
  </v-card>
</template>
<script>
export default {
  name: 'ProcessContent',
  props: {
    procid: {
      type: Number,
      default: undefined
    }
  },
  mounted () {
    console.log(this.procid)
  }
}
</script>
