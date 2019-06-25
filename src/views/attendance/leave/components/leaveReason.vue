<template>
  <div class="leave-reason-wrapper">
    <div class="leave-reason">
      <v-textarea
        color="deep-purple"
        label="请假事由"
        rows="7"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeaveReason'
}
</script>

<style lang="stylus">
  .leave-reason-wrapper
    background-color #ffffff
    margin-top 1.3rem
  .leave-reason
    text-align center
    width 100%
    padding-left 7.5%
    padding-right 7.5%
    padding-top 0.5%
</style>
