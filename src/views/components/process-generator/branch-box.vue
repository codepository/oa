<template>
  <v-layout
    style="background-color:blue;overflow: hidden;"
    column>
    <AddBranchBtn/>
    <v-layout>
      <slot>branch-box</slot>
    </v-layout>
  </v-layout>
</template>
<script>
import AddBranchBtn from './add-branch-btn'
export default {
  components: {
    AddBranchBtn
  }
}
</script>
