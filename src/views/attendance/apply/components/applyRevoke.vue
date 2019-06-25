<template>
  <div>
    <v-btn
      class="apply-revoke-btn"
      @click="handleRevokeClick()">
      撤销申请
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ApplyRevoke',
  methods: {
    handleRevokeClick () {
      this.$Message.success('撤销成功')
    }
  }
}
</script>

<style lang="stylus">
  .apply-revoke-btn
    background-color #E97333 !important
    width 90%
    margin-left 5%
    margin-bottom 0rem
</style>
