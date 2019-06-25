<template>
  <div class="apply-step-wrapper">
    <v-stepper
      alt-labels
      value="2">
      <v-stepper-header>
        <v-stepper-step
          complete
          step="1"
          class="apply-step"
          color="#1867C0">
          提交<br>
          06-06<br>
          11:15
        </v-stepper-step>

        <v-divider/>

        <v-stepper-step
          step="2"
          class="apply-step"
          color="#1867C0">
          审批中
        </v-stepper-step>

        <v-divider/>

        <v-stepper-step
          step="3"
          class="apply-step">
          结果
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
    <div class="step-under-line"/>
  </div>
</template>

<script>
export default {
  name: 'ApplyStep'
}
</script>

<style lang="stylus">
  .step-under-line
    background-color #eeeeee
    height 1px
    margin-top 4.5rem
  .apply-step > .v-stepper__label
    display inline !important
    font-size .7rem
    margin-left .4rem
    color #A5A5A5 !important
  .v-stepper--alt-labels .v-stepper__step
    flex-basis 110px
  .v-stepper, .v-stepper__header
    box-shadow 0 0px 0px 0px rgba(0,0,0,0), 0 0px 0px 0 rgba(0,0,0,0), 0 0px 0px 0 rgba(0,0,0,0) !important
</style>
