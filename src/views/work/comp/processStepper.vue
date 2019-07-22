<template>
  <v-stepper
    v-model="e6"
    vertical>
    <v-stepper-step
      v-for="(item, index) in identitys"
      :key="index"
      :step="index"
      complete >
      {{ item.username }} : {{ item.comment }}
    </v-stepper-step>

  </v-stepper>
  <!-- <v-stepper v-model="e6" vertical>
    <v-stepper-step >
      Select an app
    </v-stepper-step>
    <v-stepper-step step="2">Configure analytics for this app</v-stepper-step>
    <v-stepper-step step="3">Select an ad format and name ad unit</v-stepper-step>
    <v-stepper-step step="4">View setup instructions</v-stepper-step>
  </v-stepper> -->
</template>
<script>
import { findParticipant, findParticipantHistory } from '@/api/workflow'
export default {
  name: 'ProcessStepper',
  props: {
    procid: {
      type: Number,
      default: undefined
    },
    type: {
      type: String,
      default: 'now' // now 查询当前， history 查询历史
    }
  },
  data: () => ({
    identitys: [],
    procid1: '',
    e6: 1
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
      if (this.type === 'now') {
        findParticipant(this.procid1).then(res => {
          this.identitys = res.data
        })
      } else {
        findParticipantHistory(this.procid1).then(res => {
          this.identitys = res.data
        })
      }
    },
    reload () {
      this.getDatas()
    }
  }
}
</script>
