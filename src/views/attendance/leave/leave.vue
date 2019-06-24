<template>
  <div>
    <leave-type/>
    <leave-date/>
    <leave-reason/>
    <leave-approver/>
    <leave-form-btn/>
  </div>
</template>

<script>
import leaveType from './components/leaveType'
import leaveDate from './components/leaveDate'
import leaveReason from './components/leaveReason'
import leaveApprover from './components/leaveApprover'
import leaveFormBtn from './components/leaveFormBtn'
export default {
  name: 'Leave',
  components: {
    leaveType,
    leaveDate,
    leaveReason,
    leaveApprover,
    leaveFormBtn
  },
  mounted () {
    console.log(this.$store.state)
  }
}
</script>

<style lang="stylus">
  .application--wrap
    background-color #F5F5F5
</style>
