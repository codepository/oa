<template>
  <v-stepper
    vertical>
    <v-stepper-step
      v-for="(item, index) in identitys"
      :key="index"
      complete >
      {{ item.userid }} : {{ item.comment }}
    </v-stepper-step>

  </v-stepper>
</template>
<script>
import { findParticipant } from '@/api/workflow'
export default {
  name: 'ProcessStepper',
  props: {
    procid: {
      type: Number,
      default: undefined
    }
  },
  data: () => ({
    identitys: [],
    procid1: ''
  }),
  watch: {
    'procid' (newval) {
      this.procid1 = newval
      this.getDatas()
    }
  },
  methods: {
    getDatas () {
      if (!this.procid1) {
        return
      }
      findParticipant(this.procid1).then(res => {
        this.identitys = res.data
      })
    },
    reload () {
      this.getDatas()
    }
  }
}
</script>
