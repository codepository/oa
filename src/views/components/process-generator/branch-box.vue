<template>
  <v-layout
    style="border: 1px solid;overflow: hidden;"
    column>
    <v-icon
      color="purple"
      dark
      style="margin-left: 90%;"
      @click="delNode">mdi-backspace</v-icon>
    <AddBranchBtn
      @addCondition="addCondition"/>
    <v-layout>
      <slot>branch-box</slot>
    </v-layout>
  </v-layout>
</template>
<script>
import AddBranchBtn from './add-branch-btn'
export default {
  name: 'BranchBox',
  components: {
    AddBranchBtn
  },
  methods: {
    addCondition () {
      this.$emit('addCondition')
    },
    delNode () {
      this.$emit('delNode')
    }
  }
}
</script>
