<template>
  <v-container
    fill-height
    fluid
  >
    <v-layout
      column>
      <slot>branch-box-wrap</slot>
      <AddNodeBtnBox/>
    </v-layout>
  </v-container>
</template>
<script>
import AddNodeBtnBox from './add-node-btn-box'
export default {
  components: {
    AddNodeBtnBox
  }
}
</script>
