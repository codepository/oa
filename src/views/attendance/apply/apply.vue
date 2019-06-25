<template>
  <div>
    <apply-info/>
    <apply-step/>
    <apply-revoke/>
  </div>
</template>

<script>
import applyInfo from './components/applyInfo'
import applyStep from './components/applyStep'
import applyRevoke from './components/applyRevoke'
export default {
  name: 'Apply',
  components: {
    applyInfo,
    applyStep,
    applyRevoke
  }
}
</script>

<style lang="stylus">
  .application--wrap
    background-color #ffffff
  .v-toolbar
    margin-bottom 0
</style>
