<template>
  <div class="leave-btn">
    <v-btn
      class="leave-form-qxbtn"
      color="error"
      @click="handleQxClick()">
      取消
    </v-btn>
    <v-btn
      class="leave-form-tjbtn"
      color="success"
      @click="handleTjClick()">
      提交
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'LeaveFormBtn',
  methods: {
    handleQxClick () {
      this.$router.go(-1)
    },
    handleTjClick () {
      this.$Message.success('提交成功！')
    }
  }
}
</script>

<style lang="stylus">
  .leave-btn
    background-color #ffffff
    margin-top 1.3rem
    text-align center
  .leave-form-tjbtn
    width 40%
    margin-left 5%
    line-height 300%
  .leave-form-tjbtn > .v-btn__content
    color #ffffff !important
    font-size 150%
  .leave-form-qxbtn
    width 40%
    line-height 300%
  .leave-form-qxbtn > .v-btn__content
    color #ffffff !important
    font-size 150%
</style>
