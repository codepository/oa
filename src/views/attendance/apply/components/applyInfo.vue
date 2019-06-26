<template>
  <div>
    <div class="my-apply">
      {{ this.$store.state.user.userName }}的事假申请
    </div>
    <div class="apply-info-content">
      <div class="apply-info-row">
        <div class="apply-info-title">申请人:</div>
        <div class="apply-info-value">{{ apply.applyName }}</div>
      </div>
      <div class="apply-info-row">
        <div class="apply-info-title">请假类型:</div>
        <div class="apply-info-value">{{ apply.leaveType }}</div>
      </div>
      <div class="apply-info-row">
        <div class="apply-info-title">开始时间:</div>
        <div class="apply-info-value">2019-06-06 11:13</div>
      </div>
      <div class="apply-info-row">
        <div class="apply-info-title">结束时间:</div>
        <div class="apply-info-value">2019-06-06 11:14</div>
      </div>
      <div class="apply-info-row">
        <div class="apply-info-title">请假时长:</div>
        <div class="apply-info-value">0.5天</div>
      </div>
      <div class="apply-info-row">
        <div class="apply-info-title">审批人:</div>
        <div class="apply-info-value">陈宜孝</div>
      </div>
      <div class="apply-info-row">
        <div class="apply-info-title">抄送人:</div>
        <div class="apply-info-value">无</div>
      </div>
      <div class="apply-info-row">
        <div class="apply-info-title">请假事由:</div>
        <div class="apply-info-value">请假</div>
      </div>
      <div class="apply-info-row">
        <div class="apply-info-title">审批历史:</div>
        <div class="apply-info-value">点击查看</div>
      </div>
    </div>
    <div class="under-line"/>
  </div>
</template>

<script>
export default {
  name: 'ApplyInfo',
  data () {
    return {
      apply: {
        applyName: '张凌',
        leaveType: '事假'
      }
    }
  }
}
</script>

<style lang="stylus">
  .my-apply
    font-weight 700
    font-size .95rem
    padding-left 5%
    padding-top 3%
    padding-bottom 2%
  .apply-info-content
    padding-top 2%
    padding-left 5%
  .apply-info-row
    padding-top 1.5%
    padding-bottom 1.5%
    font-size .8rem
  .apply-info-title
    display inline-block
    color #A5A5A5
  .apply-info-value
    display inline-block
    float right
    padding-right 5%
  .under-line
    background-color #D9D9D9
    width 90%
    height 1px
    margin-top 1.5rem
    margin-left 5%
</style>
