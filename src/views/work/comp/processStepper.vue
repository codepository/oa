<template>
  <v-stepper
    vertical>
    <v-stepper-step
      step="1"
      complete>
      Name of step 1
    </v-stepper-step>
    <v-stepper-step
      step="2"
      complete>Name of step 2</v-stepper-step>
    <v-stepper-step
      step="3"
      complete>
      Name of step 1
    </v-stepper-step>
  </v-stepper>
</template>
<script>
export default {
  name: 'ProcessStepper',
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
